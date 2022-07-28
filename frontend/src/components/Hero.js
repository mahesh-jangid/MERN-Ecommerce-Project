import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import styled from "styled-components";
import data from "../data/heroSlides";

const Hero = () => {
  const [slides] = useState(data);
  SwiperCore.use(Autoplay);
  return (
    <Wrapper>
      <Swiper
        autoplay={{
          delay: 6500,
        }}
        className="home-slider section-center"
      >
        {slides.map((slide) => {
          const { id, image, title, text } = slide;

          return (
            <SwiperSlide key={id} className="wrapper">
              <div className="swiper-slide slide">
                <div className="content">
                  <span>special offers</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link to="/products" className="btn">
                    shop now
                  </Link>
                </div>
                <div className="image">
                  <img src={image} alt="" />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  position: relative;
  top: 9rem;
  .home-slider .slide {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 4rem 0;
    gap: 2rem;
    position: relative;
  }

  .content {
    flex: 1 1 45rem;
    text-align: center;
  }

  .image {
    flex: 1 1 45rem;
  }

  .image img {
    width: 100%;
  }

  .content span {
    color: var(--clr-yellow);
    font-size: 2rem;
  }

  .content h3 {
    color: var(--clr-blue);
    font-size: 3rem;
  }

  .content p {
    color: var(--clr-dark-grey);
    font-size: 1.4rem;
    padding: 0.5rem 0;
    line-height: 1.5;
  }

  .swiper-pagination-bullet-active {
    background: var(--green);
  }

  @media (min-width: 450px) {
    .content span {
      font-size: 2.2rem;
    }
    .content {
      flex: 1 1 45rem;
      text-align: start;
    }
    .content h3 {
      font-size: 8rem;
    }

    .content p {
      font-size: 1.7rem;
    }
  }
  @media (min-width: 800px) {
    top: 0;
    .content span {
      font-size: 2.7rem;
    }
    .content {
      flex: 1 1 45rem;
      text-align: start;
    }
    .content h3 {
      font-size: 9rem;
    }
    .home-slider .slide {
      top: 0rem;
    }

    .content p {
      font-size: 2rem;
    }
  }
`;
