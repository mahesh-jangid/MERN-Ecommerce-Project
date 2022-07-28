import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import people from '../data/testimonials'
import styled from 'styled-components'

function Testimonial() {
  const [index, setIndex] = useState(0)
  const { name, title, image, quote } = people[index]
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }
  const nextQuote = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const prevQuote = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  return (
    <Wrapper>
      <h1 className='heading'>
        customer's <span>reviews</span>
      </h1>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='info'>{quote}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevQuote}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextQuote}>
          <FaChevronRight />
        </button>
      </div>
    </Wrapper>
  )
}

export default Testimonial

const Wrapper = styled.article`
  padding: 2rem 2.5rem;
  border-radius: var(--radius);
  transition: var(--transition);
  text-align: center;
  max-width: 90%;
  margin: 6rem auto;
  @media screen and (min-width: 800px) {
    max-width: 60%;
    margin-bottom: 8rem;
  }

  .img-container {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 2.7rem;
  }
  .person-img {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
  }
  .quote-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 4rem;
    font-size: 2.5rem;
    height: 4rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    transform: translateY(25%);
    background: var(--clr-yellow);
    color: var(--clr-white);
  }
  .heading {
    margin: 0rem 0rem 4rem;
  }
  .img-container::before {
    content: '';
    width: 100%;
    height: 100%;
    background: var(--clr-yellow);
    position: absolute;
    top: -0.25rem;
    right: -0.5rem;
    border-radius: 50%;
  }
  .author {
    font-size: 2rem;
    margin-bottom: 0.7rem;
    color: var(--clr-yellow);
  }
  .job {
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: var(--clr-blue);
    font-size: 1.7rem;
  }
  .info {
    margin-bottom: 2rem;
    font-size: 1.7rem;
    color: var(--clr-blue);
    line-height: 3rem;
  }
  .prev-btn,
  .next-btn {
    color: var(--clr-blue);
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    margin: 0 1.7rem;
    transition: var(--transition);
    cursor: pointer;
  }
  .prev-btn:hover,
  .next-btn:hover {
    color: var(--clr-blue);
  }
  .random-btn {
    margin-top: 1rem;
    background: var(--clr-blue);
    color: var(--clr-blue);
    padding: 0.7rem 0.5rem;
    text-transform: capitalize;
    border-radius: var(--radius);
    transition: var(--transition);
    border-color: transparent;
    cursor: pointer;
  }
  .random-btn:hover {
    background: var(--clr-blue);
    color: var(--clr-blue);
  }

  @media (min-width: 800px) {
    .info {
      font-size: 2rem;
    }
  }
`
