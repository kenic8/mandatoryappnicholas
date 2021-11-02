import React from "react";
import { Link } from "@reach/router";
import AddQuote from "./AddQuote";


// Nothing special happens in this component, except for the Link


function Quotes(props) {
  let Quotes = props.data;
  console.log(Quotes);
  return (
    <div>
      <h1>list of Quotes</h1>
      {console.log(Quotes)}
      <ul>
        {Quotes.map((quote, index) => (
          <li key={index}>
            <Link key={index} to={`/Quote/${quote._id}`}>
              {quote.title}
            </Link>
          </li>
        ))}
      </ul>

      <h1> End of list of quotes</h1>
      <AddQuote  Addquote={props.addQuoteFunc}></AddQuote>

      <Link to="/">Go back</Link>
    </div>
  );
}

export default Quotes;
