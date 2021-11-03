import { useState } from 'react';

function AddLike(props) {
   let [likeView, setlikeView] = useState(props.likes);
   const [isliked, setisliked] = useState(false);
  console.log(props.likes)
  let parsed = parseInt(props.likes)
  return (
    <>
      <label>Click me to like - </label>
      <button
        type="button"
        onClick={(e) => {
          if (isliked !== true) {
            setlikeView(parsed+1);
            props.addLike(parsed+1, props._id);
            console.log(likeView);
            setisliked(true);
          } else {
            return
            // props.addLike(parsed--, props._id);
            // setlikeView(parsed--);
            // console.log(parsed);
            // setisliked(false);
          }
        }}
      >
        {likeView}
      </button>
    </>
  );
}

export default AddLike;
