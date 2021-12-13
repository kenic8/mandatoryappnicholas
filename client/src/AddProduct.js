import { useState } from "react";
import { Link } from "@reach/router";

function AddProduct(props) {
  const { addProduct } = props;
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const resetInputField = () => {
    setDescription("");
    setTitle("");
  };

  // Conditional rendering
  return (
    <>
      <h3>Add product to your wishlist</h3>
      <form className ="info">
        <label>Title</label>
        <input onChange={(event) => setTitle(event.target.value)} type="text" value={title} />
        <label>Link</label>
        <input onChange={(event) => setLink(event.target.value)} type="text" value={link}/>
        <label>description</label>
        <textarea
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          value={description}
        />
      
      <button
      className="button-form"
        type="button"
        onClick={(e) => {
          addProduct(title, description,link);
          resetInputField();
        }}
      >
        Add Wish
      </button>
      </form>

      <Link to="/">
        <button className="btn-go-back">go to wishList</button>
      </Link>
    </>
  );
}

export default AddProduct;
