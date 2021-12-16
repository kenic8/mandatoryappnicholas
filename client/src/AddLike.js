import { useState } from "react";
import like from "./img/like.png";
import unlike from "./img/unlike.png";

function AddLike(props) {

  let parsed = parseInt(props.likes);
  return (
    <>

      <div class="flex-container-likes">
        <div>
          <img
            src={like}
            alt="like"
            onClick={(e) => {
                e.preventDefault();
                props.addLike(parsed + 1, props._id)
              
            }}
          />
        </div>
        <div>{props.likes}</div>
        <div>
          <img
            alt="Unlike"
            src={unlike}
            onClick={(e) => {
                e.preventDefault();
                if(parsed !== 0 ){
                  props.addLike(parsed - 1, props._id);
                }
               else {
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
