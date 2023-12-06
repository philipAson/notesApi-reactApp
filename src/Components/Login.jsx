import React, { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const loginRequest = async () => {
    const url = `https://pcd9bqvn13.execute-api.eu-north-1.amazonaws.com/auth/login`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        setLoginMessage(`Err: server returned status ${response.status}`);
        return;
      }

      const responseJson = await response.json();

      if (response.status === 200) {
        setLoginMessage("Successfully logged in!");
      } else {
        setLoginMessage(`Errooor: ${responseJson.message}`);
      }
    } catch (error) {
      setLoginMessage(`Erreeer: ${error.message}`);
    }
  };
  return (
    <div name="loginPage" id="loginPage">
      <h1>Notes app</h1>

      <h2>{loginMessage}</h2>
      <input
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
      />
      <input
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />

      <div name="optionButtons" id="optionButtons">
        <button onClick={loginRequest}>login</button>
        <button>create account</button>
        <div>{password}</div>
        <div>{username}</div>
      </div>
    </div>
  );
};

export default Login;
