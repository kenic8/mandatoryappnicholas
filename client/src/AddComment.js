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
      <h3>Add comment</h3>
      <form>
        <label>description</label>
        <input
          onChange={(event) => setcontent(event.target.value)}
          type="text"
          value={content}
        />
      </form>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          props.addComment(content, props._id);
          resetInputField();
        }}
      >
        Add comment
      </button>
    </>
  );
}

export default AddComment;
