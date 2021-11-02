import { useState } from 'react';

function AddComment(props) {
  // const { Addcomment } = props;
  console.log(props);
  const [content, setcontent] = useState("");

  // Conditional rendering
  return (
    <>
      <h3>Add comment</h3>
      <form>
    
        <label>description</label>
        <input
          onChange={(event) => setcontent(event.target.value)}
          type="text"
        />
      </form>
      <button
        type="button"
        onClick={(e) => {
          props.addComment(content,props._id);
        }}
      >
        Add Quote
      </button>
    </>
  );
}

export default AddComment;
