import AddComment from "./AddComment";
import AddLike from "./AddLike";
import { Link } from "@reach/router";

function Product(props) {
  const { _id, getProduct } = props;
  const product = getProduct(_id);
  console.log(product);
  // Conditional rendering
  if (product === undefined) {
    return <p>Nothing here</p>;
  } else
    return (
      <>
        <h1>All i want is {product.title}</h1>
        {/* <h2>By: {product.author}</h2> */}
        <Link to="/">
          <button className="btn-go-back">go to wishList</button>
        </Link>
        <h2> About: {product.description}</h2>
        <AddLike
          _id={_id}
          addLike={props.addLike}
          likes={product.likes}
        ></AddLike>
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
