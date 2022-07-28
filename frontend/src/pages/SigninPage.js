import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import { signin } from "../actions/userActions";
import Loading from "../components/Loading";
import Message from "../components/Message";

const SigninPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();

  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      // history.push(redirect)
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  useEffect(() => {
    if (userInfo) {
      // toast.success("Login Success", {
      //   position: "top-center",
      //   autoClose: 1400,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
      navigate("/");
    }
    return () => {
      //cleanup
    };
  }, [navigate, userInfo]);

  return (
    <Wrapper>
      <form className="section-center" onSubmit={submitHandler}>
        <h3>login form</h3>
        <input
          type="email"
          placeholder="enter your email"
          className="box"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter your password"
          className="box"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="remember">
          <input type="checkbox" name="" id="remember-me" />
          <label for="remember-me">remember me</label>
        </div>
        {loading && <Loading />}
        {error && (
          <Message
            variant="danger"
            message="Invalid email or password "
            name="hide"
          />
        )}
        <input type="submit" value="login now" className="btn" />
        <p>
          forgot password? <Link to="#">click here</Link>
        </p>
        <p>
          don't have an account?
          <Link to={`/register?redirect=${redirect}`}>create now</Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default SigninPage;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 9rem;
  padding: 9rem 0;
  form {
    padding: 3rem;
    box-shadow: var(--light-shadow);
  }

  @media screen and (min-width: 800px) {
    margin-top: 0rem;
  }

  form h3 {
    font-size: 2.2rem;
    padding-bottom: 1rem;
    color: var(--clr-blue);
  }

  form .box {
    width: 100%;
    text-transform: none;
    color: var(--clr-dark-grey);
    padding: 1rem 1.2rem;
    border: 0.1rem solid var(--clr-light-grey);
    margin: 0.7rem 0;
  }

  form .remember {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 0.5rem;
  }
  #remember-me {
    height: 1.7rem;
    width: 1.7rem;
  }
  input {
    font-size: 1.7rem;
    border: 1px solid var(--clr-light-grey);
  }
  form .remember label {
    padding: 1rem 0;
    cursor: pointer;
    color: #779;
    font-size: 1.7rem;
  }

  form .btn {
    margin: 1rem 0;
    width: 100%;
    text-align: center;
  }

  form p {
    padding-top: 1rem;
    color: #779;
    font-size: 1.7rem;
  }

  form p a {
    color: #244d4d;
  }

  form p a:hover {
    text-decoration: underline;
  }
`;
