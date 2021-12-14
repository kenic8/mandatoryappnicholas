import { useEffect, useState } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Product from "./Product";
import Products from "./Products";
import AddProduct from "./AddProduct";
import Login from "./Login";
import Register from "./Register";

const API_URL = process.env.REACT_APP_API;

function App() {
  //token

  function setToken(token) {
    localStorage.setItem("token", token);
  }

  function getToken() {
    return localStorage.getItem("token").toString()
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  //currentuser

  function setUser(user) {
    //locale storage user functions
    console.log(user + "hej");
    localStorage.setItem("user", user);
  }

  function getUser() {
    return localStorage.getItem("token");
  }

  ///counter
  const [postCount, setPostCount] = useState(0);
  const [data, setData] = useState([]);

  async function getData() {
    const url = `${API_URL}/products`;
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    console.log("getting data");
    getData();
  }, [postCount]);

  function addProduct (title, description, link) {
    const owner =  localStorage.getItem("token")?localStorage.getItem("token"):"null";
    const data = {
      title: title,
      description: description,
      link: link,
      owner:owner
    };

    const postData = async () => {
      ///need new route
      const url = `${API_URL}/products`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // const dataNew = await response.json();
      setPostCount(postCount + 1);
    };
    postData();
  }

  function addUser(email, password, name) {
    const data = {
      email: email,
      password: password,
      name: name,
    };

    const postData = async () => {
      ///need new route
      const url = `${API_URL}/user/register`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      // const dataNew = await response.json();
      //setPostCount(postCount+1);
    };
    ///Do somthing wih it
    // Redirect to users wishlist
    postData();
  }

  function loginUser(email, password) {
    const data = {
      email: email,
      password: password,
    };

    const postData = async () => {
      ///need new route
      const url = `${API_URL}/user`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json().then((response) => {
        console.log(response.token + "response");
        setToken(response.token.toString());
        //Current user
       // setUser(response.user);
      });
    };

    postData();
  }


  function addComment(content, _id) {
    let today = new Date();
    let idExtend = Date.now();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const datacomments = {
      content: content,
      time: time,
      _id: _id,
      commentId: _id + idExtend,
    };
    const token =  localStorage.getItem("token");
    const postData = async () => {
     
      ///need new route
      const url = `${API_URL}/products/${_id}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify(datacomments),
      });
      //const dataNew = await response.json();
      setPostCount(postCount + 1);
      console.log(response);
    };
    postData();
  }

  function addLike(likes, _id) {
    console.log(likes);
    const datalikes = {
      likes: likes.toString(),
      _id: _id,
    };
    const postData = async () => {
      ///need new route
      const url = `${API_URL}/products/like/${_id}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datalikes),
      });

      const dataLike = await response.json();
      setPostCount(postCount + 1);
    };
    postData();
  }

  const GetProduct = (_id) => {
    return data.find((product) => product._id.toString() === _id);
  };

  return (
    <>
      <Router>
        <Products path="/" data={data} addProduct={addProduct}></Products>
        <Login path="/login" loginUser={loginUser}></Login>
        <Register path="/Register" addUser={addUser}></Register>

        <AddProduct path="/AddProduct" addProduct={addProduct}></AddProduct>
        <Product
          path="/Product/:_id"
          getProduct={GetProduct}
          addComment={addComment}
          addLike={addLike}
        ></Product>
      </Router>
    </>
  );
}

export default App;
