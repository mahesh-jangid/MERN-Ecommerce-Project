import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BannerSection = () => {
  return (
    <Wrapper className='banner-area'>
      <div className='section-center row'>
        <div className='single-banner'>
          <Link to='/products'>
            <img src='images/banner5.png' alt='banner' />
          </Link>
        </div>

        <div className='single-banner'>
          <Link to='/products'>
            <img src='images/menu-img5.jpg' alt='banner' />
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  margin-top: 15rem;
  .row {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .single-banner {
    overflow: hidden;
    width: 60rem;
  }
  a {
    display: block;
  }
  img {
    transform: scale(1);
    transition: var(--transition);
  }
  a:hover img {
    transform: scale(1.02);
  }

  @media (min-width: 800px) {
    img {
      height: 18rem;
    }
  }
`

export default BannerSection
