
import React from "react";
import Getapi from "./pages/Getapi";
import PostAPI from "./pages/PostAPI";
import PutAPI from "./pages/PutAPI";
import DeleteAPI from "./pages/DeleteAPI";

function App() {

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          color: "#222",
          marginBottom: "40px"
        }}
      >
        React CRUD API
      </h1>

      {/* GET API */}
      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          marginBottom: "30px",
          borderRadius: "10px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2>GET API</h2>
        <Getapi />
      </div>

      {/* POST API */}
      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          marginBottom: "30px",
          borderRadius: "10px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2>POST API</h2>
        <PostAPI />
      </div>

      {/* PUT API */}
      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          marginBottom: "30px",
          borderRadius: "10px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2>PUT API</h2>
        <PutAPI />
      </div>

      {/* DELETE API */}
      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          marginBottom: "30px",
          borderRadius: "10px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2>DELETE API</h2>
        <DeleteAPI />
      </div>

    </div>
  );
}

export default App;
