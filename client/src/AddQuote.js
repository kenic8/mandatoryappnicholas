import { useState } from "react";

function AddQuote(props) {
  const { Addquote } = props;
  console.log(props);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Conditional rendering
  return (
    <>
      <h3>Add quote</h3>
      <form>
        <label>Title</label>
        <input onChange={(event) => setTitle(event.target.value)} type="text" />
        <label>description</label>
        <input
          onChange={(event) => setDescription(event.target.value)}
          type="text"
        />
      </form>
      <button
        type="button"
        onClick={(e) => {
          Addquote(title, description);
        }}
      >
        Add Quote
      </button>

    </>
  );
}

export default AddQuote;
