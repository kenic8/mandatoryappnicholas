import AddComment from "./AddComment";
import AddLike from "./AddLike";

function Quote(props) {
  const { _id, getQuote } = props;
  const quote = getQuote(_id);

  // Conditional rendering
  if (quote === undefined) {
    return <p>Nothing here</p>;
  } else
    return (
      <>
        <h3>quote: {quote.title}</h3>
        <p>{quote.description}</p>
        <p>{quote.description}</p>

        <AddComment addComment={props.addComment} _id={_id}></AddComment>
        <AddLike _id={_id} addLike={props.addLike} likes={quote.likes}></AddLike>

        <h3>comments </h3>
        <ul>
          {quote.comments.map((comment, index) => (
            <li key={index}>
              <p>{comment.content}</p>
              <p>{comment.time}</p>
            </li>
          ))}
        </ul>
      </>
    );
}

export default Quote;
