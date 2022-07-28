import React, { useEffect } from "react";
import styled from "styled-components";
import { FaTh, FaThList } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { useState } from "react";
import Filters from "../components/Filters";
import GridView from "../components/GridView";
import ListView from "../components/ListView";
import { Link, useParams } from "react-router-dom";

const ProductsPage = (props) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { page, pages } = productList;

  const [viewproducts, setViewProduct] = useState(true);
  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);

  const {
    name = "all",
    category = "all",
    min = 0,
    max = 0,
    rating = 0,
    order = "newest",
    pageNumber = 1,
  } = useParams();

  useEffect(() => {
    dispatch(
      listProducts({
        pageNumber,
        name: name !== "all" ? name : "",
        category: category !== "all" ? category : "",
        min,
        max,
        rating,
        order,
      })
    );
  }, [category, dispatch, max, min, name, order, rating, pageNumber]);

  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    const filterRating = filter.rating || rating;
    const sortOrder = filter.order || order;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}`;
  };

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);

  return (
    <Wrapper>
      <div className="products-category-container">
        <Filters />
        <div className="products-list-section">
          <div className="products-list-header">
            <ul className="nav shop-item-filter-list">
              <li
                className={`${viewproducts ? "active grid-view" : "grid-view"}`}
              >
                <FaTh
                  onClick={(e) => {
                    setViewProduct(true);
                  }}
                />
              </li>
              <li
                className={`${
                  !viewproducts ? "active grid-view" : "grid-view"
                }`}
              >
                <FaThList
                  onClick={(e) => {
                    setViewProduct(false);
                  }}
                />
              </li>
            </ul>

            <div className="product-relevance">
              <p className="sort-by">Sort By :</p>
              <select
                className="nice-select"
                value={order}
                onChange={(e) => {
                  props.history.push(getFilterUrl({ order: e.target.value }));
                }}
              >
                <option value="newest">Newest Arrivals</option>
                <option value="lowest">Price: Low to High</option>
                <option value="highest">Price: High to Low</option>
                <option value="toprated">Avg. Customer Reviews</option>
              </select>
            </div>
          </div>
          {viewproducts ? <ListView /> : <GridView />}

          <div className="pagination">
            {[...Array(pages).keys()].map((x) => (
              <Link key={x + 1} to={getFilterUrl({ page: x + 1 })}>
                <span className={x + 1 === page ? "active" : ""}>{x + 1}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductsPage;

const Wrapper = styled.section`
  margin-top: 9rem;
  padding: 4rem 0;
  color: var(--clr-dark-grey);
  .products-category-container {
    margin: auto 5%;
  }
  a {
    color: var(--clr-dark-grey);
    font-size: 1.7rem;
  }

  .has-sub {
    margin: 1em 0;
  }

  .product-thumb {
    position: relative;
  }
  .sort-by {
    display: none;
  }

  .nav svg {
    cursor: pointer;
  }
  .sidebar-tag li {
    padding: 5px;
    border: 1px solid var(--clr-light-grey);
    border-radius: 2px;
  }

  .nav .active {
    transition: var(--transition);
    color: var(--clr-yellow);
  }

  .products-list-header {
    display: flex;
    justify-content: space-between;
    height: 5rem;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    margin-top: 4rem;
  }
  .nav,
  .product-relevance {
    display: flex;
    align-items: center;
    grid-gap: 1rem;
    margin: 0 1rem;
  }

  .buttons__container {
    margin-top: 15px;
  }
  .buttons__container .btn {
    margin: 0 10px;
  }
  .shop-sidebar {
    margin: 1.8em 0;
  }

  select {
    font-size: 1rem;
    color: var(--clr-dark-grey);
  }

  .loading-container {
    margin-top: 10rem;
  }

  @media only screen and (min-width: 475px) {
    margin-top: 0rem;
    .btn:first-child {
      margin-bottom: 5px;
    }
  }
  @media (min-width: 769px) {
    margin-top: 0rem;
    .products-list-header {
      margin-top: 0;
    }
    .products-category-container {
      display: flex;

      justify-content: space-between;
    }
    .products-list-section {
      width: 78%;
    }

    select {
      font-size: 15px;
    }

    .sort-by {
      width: 50%;
      display: block;
    }
  }
`;
