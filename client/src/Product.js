import AddComment from "./AddComment";
import AddLike from "./AddLike";
import { Link } from "@reach/router";
import Navigation from "./Navigation";

function Product(props) {
  const { _id, getProduct,logout } = props;
  const product = getProduct(_id);
  // Conditional rendering
  if (product === undefined) {
    return <p>Nothing here</p>;
  } else
    return (
      <>
       <Navigation currentuser={props.currentuser} logout={logout}></Navigation>
        <h1>All i want is {product.title}</h1>
        <h2> Description: {product.description}</h2>
        <hr></hr>
        <AddComment addComment={props.addComment} _id={_id}></AddComment>
        <h1>comments </h1>
        <div className="comment-wrap">
          {product.comments.map((comment, index) => (
            <div className="comment-wrap-inner-2" key={index}>
              <p>{comment.content}</p>
              <p>{comment.time}</p>
              <hr></hr>
            </div>
          ))}
        </div>
      </>
    );
}

export default Product;
