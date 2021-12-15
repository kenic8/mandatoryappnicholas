import { useState } from "react";
import { Link } from "@reach/router";

function Register(props) {
  const { addUser } = props;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const resetInputField = () => {
    setEmail("");
    setPassword("");
    setName("");
  };

  // Conditional rendering
  return (
    <>
      <h3>Register user</h3>
      <form className ="info">
        <label>Email</label>
        <input onChange={(event) => setEmail(event.target.value)} type="text" value={email} />
        <label>password</label>
        <input onChange={(event) => setPassword(event.target.value)} type="text" value={password}/>
        <label>name</label>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          value={name}
        />
      
      <button
      className="button-form"
        type="button"
        onClick={(e) => {
          addUser(email, password,name);
          resetInputField();
        }}
      >
        Register
      </button>
      </form>

      <Link to="/">
        <button className="btn-go-back">go to wishList</button>
      </Link>
    </>
  );
}

export default Register;
