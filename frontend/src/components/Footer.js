import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";
import Chat from "./Chat";
import styled from "styled-components";
import logo from "../logo.png";

const Footer = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <>
      {userInfo && !userInfo.isAdmin && <Chat userInfo={userInfo} />}
      <Wrapper className="footer">
        <div className="box-container section-center">
          <div className="box">
            <Link to="#" className="logo">
              <img src={logo} alt="topnotchsolution" />
            </Link>
            <p>
              Our purpose Is To Sustainably Bring the power of tech right to
              Your Hand.
            </p>
            <div className="share">
              <Link to="#" className="share-link">
                <FaFacebook />
              </Link>
              <Link to="#" className="share-link">
                <FaInstagram />
              </Link>
              <Link to="#" className="share-link">
                <FaTwitter />
              </Link>
            </div>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <div className="links">
              <Link to="/">home</Link>
              <Link to="/products">products</Link>
              <Link to="/about">about us</Link>
              <Link to="#">career</Link>
              <Link to="#">contact</Link>
            </div>
          </div>

          <div className="box opening">
            <h3>opening hours</h3>
            <p>monday : 7:00am to 10:00pm</p>
            <p>tuesday : 7:00am to 10:00pm</p>
            <p>wednesday : 7:00am to 10:00pm</p>
            <p>friday : 7:00am to 10:00pm</p>
            <p>saturday and sunday closed</p>
          </div>
        </div>

        <h1 className="credit section-center">
          created by
          <Link
            to={{
              pathname: "https://ko-technologies.netlify.com",
            }}
            target="_blank"
          >
            MJ-Tech
          </Link>
          | all rights reserved!
        </h1>
      </Wrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background: var(--clr-blue);
  color: var(--clr-white);
  padding-top: 2rem;
  border-top: 1px solid var(--clr-yellow);

  .box-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    grid-gap: 2rem;
  }
  .box {
    padding: 0 auto;
    width: 30rem;
  }
  img {
    width: 10rem;
  }
  .box-container .box h3 {
    font-size: 2.2rem;
    padding: 1rem 0;
  }

  .opening p {
    padding: 1rem 0;
  }
  .box p {
    font-size: 1.7rem;
    padding-bottom: 0.5rem;
  }

  .box a {
    font-size: 1.7rem;
    padding: 1rem 0;
    display: block;
    color: var(--clr-white);
  }

  .share {
    display: flex;
    margin-top: 1rem;
  }

  .share-link {
    width: 4rem;
    height: 4rem;
    background: var(--clr-yellow);
    cursor: pointer;
  }
  .share-link:nth-child(even) {
    margin: 0 1.4rem;
  }
  .box-container .box a:hover {
    color: var(--clr-yellow);
  }

  .box-container .box a svg {
    width: 100%;
    height: 100%;
    font-size: 2.7rem;
    color: var(--clr-blue);
  }

  .box-container .box .payment {
    width: 100%;
    margin-top: 2rem;
  }

  .credit {
    padding: 2.5rem 1rem;
    border-top: 0.1rem solid rgba(0, 0, 0, 0.6);
    margin-top: 1rem;
    text-align: center;
    font-size: 1.7rem;
  }

  .credit a {
    margin: 0 0.8rem;
    color: var(--clr-yellow);
  }
  @media (max-width: 450px) {
    .box {
      width: 100%;
    }
    .box-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
    .credit {
      font-size: 1.4rem;
    }
  }
`;
