import React from 'react'
import styled from 'styled-components'

const Newsletter = () => {
  return (
    <Wrapper>
      <h3>subscribe us for latest updates</h3>

      <form action=''>
        <input class='box' type='email' placeholder='enter your email' />
        <input type='submit' value='subscribe' className='subscribe-btn' />
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: url(../images/background/bg.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 5rem 2rem;

  form {
    display: flex;
    align-items: center;
    width: 60%;
    margin: 1rem auto;
    padding: 1.5rem;
    background: rgba(0, 0, 0, 0.1);
  }
  .subscribe-btn {
    width: 40%;
    background: var(--clr-yellow);
  }
  h3 {
    font-size: 3rem;
    color: var(--clr-blue);
    margin-bottom: 2rem;
  }
  form .box {
    width: 100%;
    padding: 0.7rem 1.5rem;
    font-size: 1.7rem;
    color: #333;
    text-transform: none;
  }
  @media (max-width: 800px) {
    form {
      width: 100%;
    }
    form .box,
    .subscribe-btn {
      font-size: 1.4rem;
    }
    h3 {
      font-size: 1.7rem;
    }
  }
`
export default Newsletter
