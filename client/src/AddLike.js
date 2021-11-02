import { useState } from 'react';

function AddComment(props) {
  // const { Addcomment } = props;
  console.log(props);
  const [likes, setlikes] = useState(props.liked);
  const [isliked, setisliked] = useState(props.isliked);
  let addedlike = parseInt(props.likes) + 1;
  const [content, setcontent] = useState("");

  // Conditional rendering
  return (
    <>

     <label>likes</label>
      <button
        type="button"
        onClick={(e) => {
          if (isliked !== true) {
            setlikes(addedlike);
            setisliked(true);
          } else {
            setisliked(false);
          }
          props.Addlikes(likes, props._id);
        }}
      >
        {props.likes}
      </button>
    </>
  );
}

export default AddComment;
