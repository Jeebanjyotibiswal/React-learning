
import React, { useState } from "react";
import axios from "axios";

function PutAPI() {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleClick = async (e) => {

    e.preventDefault();

    const data = {
      name: name,
      email: email,
      age: Number(age)
    };

    const url = `http://localhost:3000/users/${id}`;

    try {

      const response = await axios.put(url, data);

      console.log(response.data);

      alert("User updated successfully");

      // Clear input fields
      setId("");
      setName("");
      setEmail("");
      setAge("");

    } catch (error) {

      console.log(error);

      alert("Error updating user");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f2f2f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial"
      }}
    >

      <div
        style={{
          width: "350px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "25px"
          }}
        >
          Update User
        </h1>

        <input
          type="number"
          placeholder="Enter User ID"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            boxSizing: "border-box",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "16px"
          }}
        />

        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            boxSizing: "border-box",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "16px"
          }}
        />

        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            boxSizing: "border-box",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "16px"
          }}
        />

        <input
          type="number"
          placeholder="Enter your Age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            boxSizing: "border-box",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "16px"
          }}
        />

        <button
          onClick={handleClick}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Update User
        </button>

      </div>

    </div>
  );
}

export default PutAPI;
