import React, { useState } from "react";
import { Link } from "@reach/router";
import AddProduct from "./AddProduct";
import Product from "./Product";
import AddLike from "./AddLike";
import Navigation from "./Navigation";

function Products(props) {
  let Products = props.data;
  const { logout, remove, Received } = props;

  console.log(props.currentuser);
  console.log(props.owner);

  // console.log(Products);

  return (
    <>
      <Navigation currentuser={props.currentuser} logout={logout}></Navigation>
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

      {Products.map((product, index) => (
        <div className="comment-wrap" id="Cm-wrap">
          {product.received ? (
            <div className="comment-wrap-inner-2" key={index}>
              <div>
                <h4> Wish Name</h4>
                <Link key={index} to={`/Product/${product._id}`}>
                  <h3>{product.title}</h3>
                </Link>
              </div>
              <div>
                <h4> Status</h4>
                <h3>received</h3>
              </div>
              {props.owner === props.currentuser ? (
                <div class="admin-buttons">
                  <div>
                    <button
                      className="btn-go-back"
                      onClick={(e) => {
                        e.preventDefault();
                        remove(product._id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                  <div>
                    <Link to={`/EditProduct/${product._id}`}>
                      <button className="btn-go">Edit</button>
                    </Link>
                  </div>
                  <div>
                    <button
                      className="btn-go-back"
                      onClick={(e) => {
                        e.preventDefault();
                        if (product.received === true) {
                          Received(false, product._id);
                        } else if (product.received === false) {
                          Received(true, product._id);
                        }
                      }}
                    >
                      unreceived
                    </button>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              <div>
                <Link key={index} to={`/Product/${product._id}`}>
                  <button className="btn-go">Details</button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="comment-wrap-inner-2" key={index}>
              <div>
                <h4> Wish Name</h4>
                <Link key={index} to={`/Product/${product._id}`}>
                  <h3>{product.title}</h3>
                </Link>
              </div>
              <div>
                <h4>Link</h4>
                <a href={product.link}>
                  {" "}
                  <h3>{product.link}</h3>
                </a>
              </div>
              <div>
                <h3>Description</h3>
                <h3 id="description">{product.description}</h3>
              </div>
              <div>
                <h4>Created</h4>
                <h3>{product.date}</h3>
              </div>
              <div>
                <h4>CommentCount</h4>
                <h3>{product.comments.length}</h3>
              </div>

              {props.owner === props.currentuser ? (
                <div class="admin-buttons">
                  <div>
                    <button
                      className="btn-go-back"
                      onClick={(e) => {
                        e.preventDefault();
                        remove(product._id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                  <div>
                    <Link to={`/EditProduct/${product._id}`}>
                      <button className="btn-go">Edit</button>
                    </Link>
                  </div>
                  <div>
                    <button
                      className="btn-go-back"
                      onClick={(e) => {
                        e.preventDefault();
                        if (product.received === true) {
                          Received(false, product._id);
                        } else if (product.received === false) {
                          Received(true, product._id);
                        }
                      }}
                    >
                      received
                    </button>
                  </div>
                  <div>
                    <AddLike
                      _id={product._id}
                      addLike={props.addLike}
                      likes={product.likes}
                    ></AddLike>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              <div>
                <Link key={index} to={`/Product/${product._id}`}>
                  <button className="btn-go">Details</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Products;
