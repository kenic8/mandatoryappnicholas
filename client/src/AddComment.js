import { useState } from 'react';

function AddComment(props) {
  // const { Addcomment } = props;
  console.log(props);
  const [content, setcontent] = useState("");

  const resetInputField = () => {
    setcontent("");
  };

  // Conditional rendering
  return (
    <>
      <h1>Add comment</h1>
      <form className ="info">
        <label>description</label>
        <textarea
          onChange={(event) => setcontent(event.target.value)}
          type="text"
          value={content}
        />
      
      <button
      className="btn-go"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          props.addComment(content, props._id);
          resetInputField();
        }}
      >
        Add comment
      </button>
      </form>
    </>
  );
}

export default AddComment;
