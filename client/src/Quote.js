import AddComment from "./AddComment";

function Quote(props) {

  const { _id, getQuote } = props;
  const quote = getQuote(_id);

  // Conditional rendering
  if (quote === undefined) {
    return <p>Nothing here</p>;
  } else return (
    <>
      <h3>quote: {quote.title}</h3>
      <p>{quote.description}</p>
      <p>{quote.description}</p>
      <AddComment
        addComment={props.addComment}
        _id ={_id}
      ></AddComment>
    </>
  );

  
}

export default Quote;
