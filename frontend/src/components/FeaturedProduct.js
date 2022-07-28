import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { listProducts } from "../actions/productActions";

function FeaturedProducts() {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);

  function getRandomIntInclusive(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  if (error) {
    return (
      <h3 className="aleart">
        Could not load featured products from the server
      </h3>
    );
  }
  return (
    <Wrapper>
      <div className="section-center">
        <h1 className="title">
          <span>Featured Products</span> <Link to="/products">view all </Link>
        </h1>
        {loading ? (
          <Loading />
        ) : (
          <div className="featured">
            {products
              .slice(getRandomIntInclusive(1, 2), getRandomIntInclusive(10, 11))
              .map((product) => {
                return <Product key={product._id} product={product} />;
              })}
          </div>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 10rem 0;

  .featured {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    align-items: center;
    gap: 1.5rem;
  }

  .loading-container {
    margin-top: 10rem;
  }
  .aleart {
    color: var(--clr-red);
    text-align: center;
  }
`;

export default FeaturedProducts;
