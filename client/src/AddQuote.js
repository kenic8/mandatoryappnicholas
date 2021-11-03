import { useState } from "react";

function AddQuote(props) {
  const { Addquote } = props;
  console.log(props);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const resetInputField = () => {
    setDescription("");
    setTitle("");
  };

  // Conditional rendering
  return (
    <>
      <h3>Add quote</h3>
      <form className ="info">
        <label>Title</label>
        <input onChange={(event) => setTitle(event.target.value)} type="text" value={title} />
        <label>description</label>
        <input
          onChange={(event) => setDescription(event.target.value)}
          type="textarea"
          value={description}
        />
      
      <button
      className="button-form"
        type="button"
        onClick={(e) => {
          Addquote(title, description);
          resetInputField();
        }}
      >
        Add Quote
      </button>
      </form>
    </>
  );
}

export default AddQuote;
