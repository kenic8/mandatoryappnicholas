import { useState } from "react";
import { Link } from "@reach/router";

function Login(props) {
  const { loginUser } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetInputField = () => {
    setEmail("");
    setPassword("");
  };


  // Conditional rendering
  return (
    <>
    <h1> TIME TO LOGIN</h1>
    <Link to="/Register">
        <button className="btn-go">Sign up</button>
      </Link>

      <form className ="info">
        <label>Email</label>
        <input onChange={(event) => setEmail(event.target.value)} type="text" value={email} />
        <label>password</label>
        <input onChange={(event) => setPassword(event.target.value)} type="text" value={password}/>

      
      <button
     className="btn-go"
        type="button"
        onClick={(e) => {
          loginUser(email, password);
          resetInputField();
        }}
      >
        Login
      </button>
      </form>



      <Link to="/">
        <button className="btn-go-back">go to wishList</button>
      </Link>
    </>
  );
}

export default Login;
