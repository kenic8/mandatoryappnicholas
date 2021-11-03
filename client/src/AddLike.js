import { useState } from 'react';

function AddLike(props) {
   const [likeView, setislikeView] = useState(props.likes);
   const [isliked, setisliked] = useState(Boolean);
  console.log(props.likes)
  let parsed = parseInt(props.likes)

  console.log(isliked)
  return (
    <>

     <label>likes</label>
      <button
        type="button"
        onClick={(e) => {
          setisliked(false)
          if (isliked !== true) {
            setisliked(true)
            props.addLike(parsed++, props._id);
            console.log(parsed)
            setislikeView(parsed)
            return isliked
          } else {
            props.addLike(parsed--, props._id);
            console.log(parsed)
            setislikeView(parsed)
            setisliked(false)
            return isliked
          }
        }}
      >
        {likeView}
      </button>
    </>
  );
}

export default AddLike;
