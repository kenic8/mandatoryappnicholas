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
        <h1>this is a Quote about: {quote.title}</h1>
        <h2>{quote.description}</h2>
        <AddLike _id={_id} addLike={props.addLike} likes={quote.likes}></AddLike>
        <hr></hr>
        <AddComment addComment={props.addComment} _id={_id}></AddComment>
        <h1>comments </h1>
        <div className="comment-wrap">
          {quote.comments.map((comment, index) => (
            <div className="comment-wrap-inner-2" key={index}>
              <p>{comment.content}</p>
              <p>{comment.time}</p>
              <hr></hr>
            </div>
           
          
          ))}
          
        </div>
      </>
    );
}

export default Quote;
