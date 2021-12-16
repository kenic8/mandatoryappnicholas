import { useState } from "react";
import { Link } from "@reach/router";

function EditProduct(props) {
  const { editProduct } = props;
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
      <h3>Edit the product</h3>
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
          editProduct(title, description,link,props._id);
          resetInputField();
        }}
      >
        edit
      </button>
      </form>

      <Link to="/">
        <button className="btn-go-back">go to wishList</button>
      </Link>
    </>
  );
}

export default EditProduct;
