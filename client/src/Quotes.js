import React from "react";
import { Link } from "@reach/router";
import AddQuote from "./AddQuote";
import img from "./img/anno.png"
import faker from "faker"

// Nothing special happens in this component, except for the Link

function Quotes(props) {
  let Quotes = props.data;
  return (
    <>
    <h1>anonymous quotes</h1>
    <AddQuote Addquote={props.addQuoteFunc}></AddQuote>
    
        {Quotes.map((quote, index) => (
          <div className="comment-wrap">
            <div className="comment-wrap-inner-1">
              <img id="comImg" alt="img" src={faker.image.avatar()}></img>
            </div>
            <div className="comment-wrap-inner-2" key={index}>
              <Link key={index} to={`/Quote/${quote._id}`}>
                <h3>{quote.title}</h3>
              </Link>
              <h4>Made by</h4>
              <h3>{quote.author}</h3>
              <h4>A post about</h4>
              <h3>{quote.description}</h3>
              <Link key={index} to={`/Quote/${quote._id}`}>
              <button className="btn-go">Go to post</button>
              </Link>
            </div>
         </div>
        ))}
    
      
     

      <Link to="/">Go back</Link>
    </>
  );
}

export default Quotes;
