
import React, { useState } from "react";
import axios from "axios";

function DeleteAPI() {

  const [id, setId] = useState("");

  const handleClick = async (e) => {

    e.preventDefault();

    const url = `http://localhost:3000/users/${id}`;

    try {

      const response = await axios.delete(url);

      console.log(response.data);

      alert("User deleted successfully");

      // Clear input
      setId("");

    } catch (error) {

      console.log(error);

      alert("Error deleting user");
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
          Delete User
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
            backgroundColor: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Delete User
        </button>

      </div>

    </div>
  );
}

export default DeleteAPI;
