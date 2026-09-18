import React from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    (e.preventDefault(),
      alert(`Name:${name},Email:${email},Password:${password}`));
  };
 const handleClear = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your Name"
        />

        
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
        />
        
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password"
        />
        
        <button type="submit" onSubmit={handleSubmit}>submit</button>
        
        <button type="reset" onClick={handleClear}>clear</button>
        <p>LIVE demo : {name}, {email}, {password}</p>
      </form>
    </div>
  );
}

export default App;
