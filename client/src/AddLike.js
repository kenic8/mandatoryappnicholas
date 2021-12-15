import { useState } from "react";
import like from "./img/like.png";
import unlike from "./img/unlike.png";

function AddLike(props) {
  const [isliked, setisliked] = useState(false);
  const [isunliked, setisunliked] = useState(false);
  console.log(props);
  let parsed = parseInt(props.likes);
  return (
    <>

      <div class="flex-container-likes">
        <div>
          <img
            src={like}
            alt="like"
            onClick={(e) => {
              if (isliked !== true) {
                props.addLike(parsed + 1, props._id)
                setisliked(true);
                setisunliked(false);
               
              } else {
                return;
              }
            }}
          />
        </div>
        <div>{props.likes}</div>
        <div>
          <img
            alt="Unlike"
            src={unlike}
            onClick={(e) => {
              if (isunliked !== true) {
                props.addLike(parsed - 1, props._id);
                setisunliked(true);
                setisliked(false);
              
              } else {
                return;
              }
            }}
          />
        </div>
      </div>
    </>
  );
}

export default AddLike;
