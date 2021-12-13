import React from "react";
import { Link } from "@reach/router";
import AddProduct from "./AddProduct";

function Products(props) {
  let Products = props.data;

 // console.log(Products);




  return (
    <>
      <h1>WishList</h1>
      <Link to="/AddProduct">
        <button className="btn-go-back">Add to wishList</button>
      </Link>

      <Link to="/login">
        <button className="btn-go-back">login</button>
      </Link>

      {Products.map((product, index) => (

        <div className="comment-wrap">
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
            <Link key={index} to={`/Product/${product._id}`}>
              <button className="btn-go">Go Wish</button>
            </Link>
          </div>
        </div>
        
      )
      )}
    </>
  );
}

export default Products;
