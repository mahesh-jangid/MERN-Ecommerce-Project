import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <Wrapper className="contact section-center">
      <h1 className="heading">
        <span>contact</span>us
      </h1>

      <div className="icons-container">
        <div className="icons">
          <i>
            <FaMapMarkerAlt />
          </i>
          <h3>address</h3>
          <p>jaipur , Rajasthan</p>
        </div>

        <div className="icons">
          <i>
            <FaEnvelope />
          </i>
          <h3>email</h3>
          <p>maheshjangid7568@gmail.com</p>
        </div>

        <div className="icons">
          <i>
            <FaPhone />
          </i>
          <h3>phone</h3>
          <p>+91 9024731575</p>
        </div>
      </div>

      <div className="row">
        <form action="">
          <h3>get in touch</h3>
          <div className="inputBox">
            <input type="text" placeholder="your name" />
            <input type="email" placeholder="your email" />
          </div>
          <div className="inputBox">
            <input type="number" placeholder="your number" />
            <input type="text" placeholder="your subject" />
          </div>
          <textarea placeholder="your message" cols="30" rows="10"></textarea>
          <button type="submit" className="btn">
            send message
          </button>
        </form>

        <iframe
          className="map"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=jaipur&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 6rem;
  .icons-container {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (minmax(25rem, 1fr)) [auto-fit];
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 1.5rem;
  }

  .icons {
    padding: 2rem;
    border-radius: 0.5rem;
    border: 0.1rem solid rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    box-shadow: var(--light-shadow);
    text-align: center;
  }

  .icons svg {
    font-size: 3.5rem;
    color: var(--clr-blue);
  }

  .icons h3 {
    font-size: 2.2rem;
    padding: 1rem 0;
    color: var(--clr-blue);
  }

  .icons p {
    font-size: 1.5rem;
    line-height: 2;
    color: var(--clr-light-grey);
  }

  .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .heading {
    margin: 0rem 0rem 4rem;
  }

  form {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 42rem;
    flex: 1 1 42rem;
    padding: 2rem;
    border: 0.1rem solid rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
  }

  form h3 {
    font-size: 3rem;
    padding-bottom: 1rem;
    color: var(--clr-blue);
  }

  .inputBox {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  input {
    width: 49%;
  }

  input,
  textarea {
    border: 0.1rem solid rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    padding: 1rem 1.2rem;
    font-size: 1.6rem;
    color: var(--clr-blue);
    text-transform: none;
    margin: 0.7rem 0;
  }

  textarea {
    height: 15rem;
    resize: none;
    width: 100%;
  }

  .map {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 42rem;
    flex: 1 1 42rem;
    width: 100%;
    padding: 2rem;
    border: 0.1rem solid rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }
`;

export default Contact;
