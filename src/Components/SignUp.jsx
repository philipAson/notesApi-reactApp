import React, { useEffect, useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

//   const createUser = async () => {
//     if (!password) {
//     }
//   };

  return (
    <div id="signUp">
      <input
        className="signup-inputs"
        type="text"
        placeholder="Username:"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="signup-inputs"
        type="text"
        placeholder="Firstname:"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <input
        className="signup-inputs"
        type="text"
        placeholder="Lastname:"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <input
        className="signup-inputs"
        type="password"
        placeholder="Password:"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="signup-inputs"
        type="password"
        placeholder="repeat Password:"
        value={passwordRepeat}
        onChange={(e) => setPasswordRepeat(e.target.value)}
      />
      <button>Sign up</button>
    </div>
  );
};

export default SignUp;
