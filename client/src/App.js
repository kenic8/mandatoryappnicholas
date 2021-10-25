import { useEffect, useState } from "react";
import { Router } from "@reach/router";
import AddRecipe from "./AddRecipe";
const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/recipes`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []);

  function addRecipe(title, description, ingredients,cookingTime) {
    console.log(title, description, ingredients,cookingTime);
    const data = { 
      title: title, 
      description: description,
      ingredients: ingredients,
      cookingTime: cookingTime    
    };

    const postData = async () => {
      const url = `${API_URL}/recipes`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.table(data)
      console.log(response);
    }; 
    postData();
    
  }

  return (
    <>
      <h1>MERN App!</h1>
      <p>Data from server:</p>
      <ul>
        {data.map((item) => {
          return (
            <li key={item._id}>
              <strong>{item.title}</strong> (<code>{item._id}</code>)
            </li>
          );
        })}
      </ul>
      <h1>add new</h1>
      <AddRecipe addRecipe={addRecipe}></AddRecipe>
    </>
  );
}

export default App;


{/* <Router>
// {/* <Recipes path="/" data={data} addRecipe={addRecipe} ></Recipes> */}
// <AddRecipe addRecipe={addRecipe}/>
// </Router> */}