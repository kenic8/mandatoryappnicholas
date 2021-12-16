import { useEffect, useState } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Product from "./Product";
import Products from "./Products";
import AddProduct from "./AddProduct";
import Login from "./Login";
import Register from "./Register";
import EditProduct from "./EditProduct";
import { navigate } from "@reach/router"
import Navigation from "./Navigation";

const API_URL = process.env.REACT_APP_API;

function App() {
  //token

  function setTokens(token,user,name) {
    console.log(name)
    //storage
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
    localStorage.setItem("name", name);
    //state
    setCurrentuser(user);
  }

  // function getToken() {
  //   return localStorage.getItem("token").toString();
  // }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setCurrentuser(null);
  }

  //currentuser

  ///vars
  const [postCount, setPostCount] = useState(0);
  const [data, setData] = useState([]);
  const [currentuser, setCurrentuser] = useState(localStorage.getItem("user"));
  //sample owner
  // set to id of owner
  const owner = "61b85e14ffef7bb3306c0bba";
  console.log(currentuser);
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

  function addProduct(title, description, link) {
    const owner = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "null";
    const data = {
      title: title,
      description: description,
      link: link,
      owner: owner,
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
      if (response.ok) {
        navigate(`/`);
      }
    };
    postData();
  }

  function editProduct(title, description, link, _id) {
    const data = {
      title: title,
      description: description,
      link: link,
      _id: _id,
    };

    const postData = async () => {
      ///need new route
      const url = `${API_URL}/products/edit/${_id}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // const dataNew = await response.json();
      setPostCount(postCount + 1);
      if (response.ok) {
        navigate(`/`);
      }
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
      if (response.ok) {
        navigate(`/login`);
      }
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
      if (!response.ok) {
        alert("Wrong email or password");
      }
      const res = await response.json().then((response) => {
        console.log(response.user.name);
    
        setTokens(response.token, response.user._id, response.user.name);
        setPostCount(postCount + 1);
      });

      if (response.ok) {
        navigate(`/`);
      }
    };

    postData();
  }

  function addComment(content, _id) {
    const name = localStorage.getItem("name");
    let today = new Date();
    let idExtend = Date.now();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const datacomments = {
      name:name,
      content: content,
      time: time,
      _id: _id,
      commentId: _id + idExtend,
    };
    const token = localStorage.getItem("token");
    const postData = async () => {
      ///need new route
      const url = `${API_URL}/products/${_id}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(datacomments),
      });
      //const dataNew = await response.json();
      setPostCount(postCount + 1);
      if (!response.ok) {
        alert("login to comment");
      }
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

  function Received(received, _id) {
    console.log(received);
    const data = {
      received: received,
      _id: _id,
    };
    const postData = async () => {
      ///need new route
      const url = `${API_URL}/products/received/${_id}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataReceived = await response.json();
      setPostCount(postCount + 1);
    };
    postData();
  }

  function remove(_id) {
    console.log(_id);
    const data = {
      _id: _id,
    };
    const postData = async () => {
      ///need new route
      const url = `${API_URL}/products/remove/${_id}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      console.log(res);
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
        <Products
          path="/"
          data={data}
          addProduct={addProduct}
          currentuser={currentuser}
          owner={owner}
          logout={logout}
          remove={remove}
          editProduct={editProduct}
          Received={Received}
          addLike={addLike}
        ></Products>

        <Login path="/login" loginUser={loginUser}></Login>
        <Register path="/Register" addUser={addUser}></Register>

        <AddProduct path="/AddProduct" addProduct={addProduct}></AddProduct>
        <EditProduct
          path="/EditProduct/:_id"
          editProduct={editProduct}
        ></EditProduct>
        <Product
          path="/Product/:_id"
          getProduct={GetProduct}
          addComment={addComment}
          currentuser={currentuser}
          owner={owner}
          logout={logout}
        ></Product>
      </Router>
    </>
  );
}

export default App;
