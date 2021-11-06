import { useState } from "react";

function AddQuote(props) {
  const { Addquote } = props;
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
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
        <label>author</label>
        <input onChange={(event) => setAuthor(event.target.value)} type="text" value={author}/>
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
          Addquote(title, description,author);
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
