import React, { useEffect, useState } from "react";
import "swiper/swiper.min.css";
import styled from "styled-components";
import Rating from "../components/Rating";
import { FiChevronRight } from "react-icons/fi";
import { formatPrice } from "../utils/helpers";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createReview, detailsProduct } from "../actions/productActions";
import { PRODUCT_REVIEW_CREATE_RESET } from "../constants/productConstants";
import Message from "../components/Message";
import Loading from "../components/Loading";

const ProductDetailsPage = ({ match, history }) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productId = id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (successReviewCreate) {
      window.alert("Review Submitted Successfully");
      setRating("");
      setComment("");
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }
    dispatch(detailsProduct(productId));
  }, [dispatch, productId, successReviewCreate]);

  const addToCartHandler = () => {
    // history.push(`/cart/${productId}?qty=${qty}`);
    navigate(`/cart/${productId}?qty=${qty}`);
  };

  const addToWishListHandler = () => {
    navigate(`/wishlist/${productId}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(productId, { rating, comment, name: userInfo.name })
      );
    } else {
      alert("Please enter comment and rating");
    }
  };

  if (loading) {
    return (
      <Wrapper>
        <div className="section-center">
          <h1 className="heading">
            product <span>details</span>
          </h1>
          <Loading />
        </div>
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <div className="section-center">
          <h1 className="heading">
            product <span>details</span>
          </h1>
          <Message variant="danger" message="Error loading product details" />
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="section-center">
        <h1 className="heading">
          product <span>details</span>
        </h1>
        <div className="product-detail-row row">
          <div>
            <img src={product.image} alt={product.name} className="image" />
          </div>

          <div className="content">
            <h3 style={{ lineHeight: "36px" }}>{product.name}</h3>
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <div className="price">{formatPrice(product.price)}</div>
            <p>{product.description.substring(0, 150)}...</p>

            <div className="icons-container">
              <form className="product-details-form">
                <div className="select-container">
                  <select>
                    <option>Select Size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select>

                  <select
                    className="quantity"
                    type="number"
                    value={qty}
                    onChange={(e) => {
                      setQty(e.target.value);
                    }}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="btn-container">
                  {product.countInStock > 0 ? (
                    <button
                      type="submit"
                      className="btn add-to-cart "
                      onClick={addToCartHandler}
                    >
                      Add To Cart
                    </button>
                  ) : (
                    <div className="out-of-stock">Stock: Out Of Stock</div>
                  )}
                  <button
                    type="submit"
                    className="btn add-to-wishlist "
                    onClick={addToWishListHandler}
                  >
                    Add to Wishlist
                  </button>
                </div>
              </form>
            </div>
            <hr />
            <ul className="stock-count">
              <li className="product-stock-status">
                Category: <Link to="#">{product.category}</Link>
              </li>
            </ul>

            <p>Share this product</p>
            <div className="share-product-socail-area">
              <Link to="#">
                <FaPinterestP />
              </Link>

              <Link to="#">
                <FaFacebookF />
              </Link>

              <Link to="#">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="description-row">
          <h1 className="heading">
            <span>Product</span>description
          </h1>

          <p>{product.description}</p>
        </div>
        <section className="review" id="review">
          <h1 className="heading">
            <span>Product</span>reviews
          </h1>

          {product.reviews.length === 0 && (
            <Message message="This Product has no review yet..." name="hide" />
          )}

          <div className="swiper-container review-slider">
            {product.reviews.map((review) => (
              <div key={review._id} className="swiper-wrapper">
                <div className="swiper-slide slide">
                  <FiChevronRight className="fa-quote-right" />
                  <div className="user">
                    <img src={product.image} alt={review.name} />
                    <div className="user-info">
                      <h3>
                        {review.name} -
                        <span> {review.createdAt.substring(0, 10)}</span>
                      </h3>
                      <Rating
                        rating={product.rating}
                        numReviews={product.numReviews}
                      />
                    </div>
                  </div>
                  <p>{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {userInfo ? (
          <div className="product-review-form-row">
            <div className="rating_wrap">
              <h1 className="heading">
                add <span>review</span>
              </h1>
            </div>
            <form className="comment-form-area" onSubmit={submitHandler}>
              <div className="row">
                <label>Rating</label>
                <select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="">Select your rating</option>
                  <option value="1">Poor</option>
                  <option value="2">Fair</option>
                  <option value="3">Good</option>
                  <option value="4">Very good</option>
                  <option value="5">Excelent</option>
                </select>
              </div>

              <div className="row">
                <label>Comment</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="type your comment here"
                ></textarea>
              </div>

              <button type="submit" className="btn review-btn">
                Submit
              </button>

              <div>
                {loadingReviewCreate && <Loading />}
                {errorReviewCreate && (
                  <Message
                    variant="danger"
                    message="could not create a review"
                    name="hide"
                  />
                )}
              </div>
            </form>
          </div>
        ) : (
          <Message
            message="Please Login To give A Review"
            buttonText="Login"
            url="/signin"
          />
        )}
      </div>
    </Wrapper>
  );
};

export default ProductDetailsPage;

const Wrapper = styled.section`
  margin: 5rem 0;
  color: var(--clr-light-grey);
  .product-detail-row.row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 11rem;
    font-size: 1.7rem;
  }
  .product-detail-row {
    align-items: flex-start;
  }
  .description-row p {
    text-align: center;
    font-size: 1.7rem;
  }
  .comment-form-area select {
    margin: 1rem 0 2rem 0;
  }
  textarea {
    margin-top: 1rem;
    padding: 1rem;
    letter-spacing: var(--spacing);
  }
  .alert {
    text-align: center;
  }
  .btn-hide {
    display: none;
  }
  .image {
    width: 100%;
  }
  .product-details-related-imgs {
    display: flex;
    margin-top: 1rem;
    justify-content: space-around;
  }
  .product-details-related-imgs img {
    width: 60px;
  }
  .row .content {
    flex: 1 1 45rem;
  }
  .row .content p {
    font-size: 1.7rem;
  }
  .row .content h3 {
    color: var(--clr-blue);
    font-size: 2rem;
    padding: 0.5rem 0;
  }
  .sub-heading {
    padding-top: 10rem;
  }
  .add-to-cart.btn {
    padding-left: 4.3rem;
    padding-right: 4.3rem;
    margin-right: 2.7rem;
  }
  p {
    color: var(--clr-dark-grey);
    font-size: 1.7rem;
    padding: 0.5rem 0;
    line-height: 2;
  }
  .loading-container svg {
    font-size: 5rem;
  }
  .content .price {
    font-size: 1.8rem;
    color: var(--clr-blue);
    font-weight: 500;
    margin-top: 1.7rem;
  }
  .share-product-socail-area {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
  .share-product-socail-area a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    font-size: 2.2rem;
    padding: 1rem;
    box-shadow: var(--light-shadow);
    color: var(--clr-blue);
    border-radius: 50%;
    &:hover {
      color: var(--clr-yellow);
      transform: var(--transition);
    }
  }
  .share-product-socail-area a:nth-child(2) {
    margin: 0 2rem;
  }
  .select-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    grid-gap: 2rem;
  }
  .select-container select:nth-child(even) {
    width: 40%;
  }
  .select-container select {
    width: 40%;
  }
  .row .content .icons-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 1rem 0;
    margin-top: 0.5rem;
  }
  .row .content .icons-container .icons {
    background: #eee;
    border-radius: 0.5rem;
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex: 1 1 17rem;
    padding: 1.5rem 1rem;
  }
  .review .slide {
    padding: 2rem;
    box-shadow: var(--light-shadow);
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    position: relative;
  }
  .review .slide .fa-quote-right {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 6rem;
    color: #ccc;
  }
  .btn-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
  .review .slide .user {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    padding-bottom: 1.5rem;
  }
  .review .slide .user img {
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    object-fit: cover;
  }
  .review .slide .user h3 {
    color: var(--clr-blue);
    font-size: 1.7rem;
    padding-bottom: 0.5rem;
  }
  .rating,
  svg {
    font-size: 1.7rem;
  }
  .btn-hide {
    display: none;
  }
  .review .slide p {
    font-size: 1.7rem;
    line-height: 1.8;
  }
  .comment-form-area {
    margin: 0 auto;
    width: 100%;
  }
  .stock-count {
    margin: 1rem 0;
    line-height: 1.5;
  }
  .stock-count li {
    font-size: 2rem;
  }
  .wish-list-container {
    display: flex;
    flex-wrap: wrap;
    font-size: 2.2rem;
  }
  .wish-list-container svg {
    margin-right: 1.7rem;
  }
  .wish-list-container a {
    display: flex;
    align-items: center;
    color: var(--clr-blue);
  }
  .wish-list-container a:first-child {
    margin-right: 2rem;
  }
  @media (min-width: 800px) {
    .comment-form-area {
      margin: 0 auto;
      width: 50%;
    }
    .review .slide .user {
      flex-direction: row;
    }
    .review .slide p {
      font-size: 1.7rem;
    }
    .review .slide .user h3 {
      font-size: 2.2rem;
    }
    .rating,
    svg {
      font-size: 2rem;
    }
    .content .price {
      font-size: 2rem;
    }
    .row .content h3 {
      font-size: 2.2rem;
    }
  }
`;
