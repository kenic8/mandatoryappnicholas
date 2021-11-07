import { useEffect, useState } from "react";
import { Router } from "@reach/router";
import Quotes from "./Quotes";
import Quote from "./Quote";
import './App.css'
// import AddRecipe from "./AddRecipe";
const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState([]);
   async function getData() {
  // const url = `${API_URL}/recipes`;
  const url = `${API_URL}/quotes`;
  const response = await fetch(url);
  const data = await response.json();
  setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  function addQuoteFunc(title, description,author) {
    console.log(title, description + author);
    if (author ==="") {
      let arrNmes = [
        "prairie dog",
        "coati",
        "turtle",
        "parakeet",
        "ox",
        "aardvark",
        "otter",
        "wolverine",
        "crocodile",
        "thorny devil",
        "opossum",
      ];
      let randomNr = Math.floor(Math.random() * 11);
      let author = "Anonymous " + arrNmes[randomNr];
      author.toString();
      const data = {
        title: title,
        description: description,
        author: author,
      };
      const postData = async () => {
        ///need new route
        const url = `${API_URL}/quotes`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        console.table(data);
        console.table(response);
      };
      postData();
      getData();
    } else{
    const data = {
      title: title,
      description: description,
      author: author,
    };
    const postData = async () => {
      ///need new route
      const url = `${API_URL}/quotes`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.table(data);
      console.table(response);
    };
    postData();
    getData();
  }
}

  function addComment(content, _id) {
    let today = new Date();
    let idExtend = Date.now()
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const datacomments = {
      content: content,
      time: time,
      _id:_id,
      commentId:_id+idExtend
    };
    const postData = async () => {
      ///need new route
      const url = `${API_URL}/quotes/${_id}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datacomments),
      });
      console.table(datacomments);
      console.log(response);
    };
    postData();
    getData();
  }

  function addLike(likes,_id) {
    console.log(likes)
    const datalikes = { 
      likes: likes.toString(),
      _id:_id
    };
    const postData = async () => {
      ///need new route
      const url = `${API_URL}/quotes/like/${_id}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datalikes),
      });
      console.table(datalikes)
      console.log(response);
      
    }; 
    postData();
    getData();

  }

  const GetQuote = (_id) => {
    return data.find((quote) => quote._id.toString() === _id);
  };

  return (
    <>
      <Router>
        {/* Routes for comps */}
        <Quotes path="/" data={data} addQuoteFunc={addQuoteFunc}></Quotes>
        <Quote path="/Quote/:_id" getQuote={GetQuote} addComment={addComment} addLike={addLike}></Quote>
      </Router>
    </>
  );
}

export default App;
