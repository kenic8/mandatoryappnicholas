import { useEffect, useState } from "react";
import { Router } from "@reach/router";
import Quotes from "./Quotes";
import Quote from "./Quote";
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


  // function addRecipe(title, description, ingredients,cookingTime) {
  //   console.log(title, description, ingredients,cookingTime);
  //   const data = { 
  //     title: title, 
  //     description: description,
  //     ingredients: ingredients,
  //     cookingTime: cookingTime    
  //   };

  //   const postData = async () => {
  //     const url = `${API_URL}/recipes`;
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     console.table(data)
  //   }; 
  //   postData();
    
  // }

  function addQuoteFunc(title, description) {
    console.log(title, description);
    const data = { 
      title: title, 
      description: description
    };
    const postData = async () => {
      ///need new route
      const url = `${API_URL}/quotes`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.table(data)
      console.table(response)
    }; 
    postData();
    getData();
    
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
    // getData();

  }



  const GetQuote = (_id) => {
    return data.find((quote) => quote._id.toString() === _id);
  };


  return (
    //   <>
    //     <h1>MERN App!</h1>
    //     <p>Data from server:</p>
    //     <ul>
    //       {data.map((item) => {
    //         return (
    //           <li key={item._id}>
    //             <strong>{item.title}</strong> (<code>{item._id}</code>)
    //           </li>
    //         );
    //       })}
    //     </ul>
    //     <h1>add new</h1>
    //     <AddRecipe addRecipe={addRecipe}></AddRecipe>
    //   </>
    <>
    <h1>We like quotes!</h1>
      <Router>
        {/* Routes for comps */}
        <Quotes path="/" data={data} addQuoteFunc={addQuoteFunc}></Quotes>
        <Quote path="/Quote/:_id" getQuote={GetQuote} addComment={addComment} addLike={addLike}></Quote>
      </Router>
    </>
  );
}

export default App;
