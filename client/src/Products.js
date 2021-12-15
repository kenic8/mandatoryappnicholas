import React, { useState } from "react";
import { Link } from "@reach/router";
import AddProduct from "./AddProduct";
import Product from "./Product";
import AddLike from "./AddLike";

function Products(props) {
  let Products = props.data;
  const { logout, remove, Received } = props;

  console.log(props.currentuser);
  console.log(props.owner);

  // console.log(Products);

  return (
    <>
      {props.owner === props.currentuser ? (
        <div>
          <h1>Your wishlist</h1>
          <Link to="/AddProduct">
            <button className="btn-go-back">Add to wishList</button>
          </Link>
        </div>
      ) : (
        <h1>Wishlist</h1>
      )}
      {props.currentuser ? (
        <button
          className="btn-go-back"
          onClick={(e) => {
            e.preventDefault();
            logout();
          }}
        >
          Log Out
        </button>
      ) : (
        <Link to="/login">
          <button className="btn-go-back">login</button>
        </Link>
      )}

      {Products.map((product, index) => (
        <div className="comment-wrap" id="Cm-wrap">
          {product.received ? (
            <div className="comment-wrap-inner-2" key={index}>
              <Link key={index} to={`/Product/${product._id}`}>
                <h3>{product.title}</h3>
              </Link>
              <h4>wish</h4>
              <h3>{product.description}</h3>
              {props.owner === props.currentuser ? (
                <div>
                  <button className="btn-go-back"
                    onClick={(e) => {
                      e.preventDefault();
                      remove(product._id);
                    }}
                  >
                    Remove
                  </button>
                  <button className="btn-go-back"
                    onClick={(e) => {
                      e.preventDefault();
                      if (product.received === true) {
                        Received(false, product._id);
                      } else if (product.received === false) {
                        Received(true, product._id);
                      }
                    }}
                  >
                    Mark as unreceived
                  </button>
                </div>
              ) : (
                <div></div>
              )}

              <Link key={index} to={`/Product/${product._id}`}>
                <button className="btn-go">Go Wish</button>
              </Link>
            </div>
          ) : (
            <div className="comment-wrap-inner-2" key={index}>
              <Link key={index} to={`/Product/${product._id}`}>
                <h3>{product.title}</h3>
              </Link>
              <h4>Link</h4>
              <a href={product.link}>{product.link}</a>
              <h4>wish</h4>
              <h3>{product.description}</h3>
              <h4>Created</h4>
              <h3>{product.date}</h3>
              <h4>CommentCount</h4>
              <h3>{product.comments.length}</h3>
              {props.owner === props.currentuser ? (
                <div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      remove(product._id);
                    }}
                  >
                    Remove
                  </button>
                  <Link to={`/EditProduct/${product._id}`}>
                    <button className="btn-go">Edit</button>
                  </Link>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (product.received === true) {
                        Received(false, product._id);
                      } else if (product.received === false) {
                        Received(true, product._id);
                      }
                    }}
                  >
                    Mark as received
                  </button>
                </div>
              ) : (
                <div></div>
              )}

              <Link key={index} to={`/Product/${product._id}`}>
                <button className="btn-go">Go Wish</button>
              </Link>

              <AddLike
                _id={product._id}
                addLike={props.addLike}
                likes={product.likes}
              ></AddLike>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Products;
