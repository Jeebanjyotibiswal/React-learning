
import React, { useState } from "react";
import axios from "axios";

function PostAPI() {

    // step 1: define state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    // handle logic of post using axios
    const handleClick = async (e) => {

        e.preventDefault();

        const data = {
            name: name,
            email: email,
            age: age
        };

        const url = "http://localhost:3000/users";

        try {

            const response = await axios.post(url, data);

            console.log(response.data);

            alert("User added successfully");

            // clear input fields
            setName("");
            setEmail("");
            setAge("");

        } catch (error) {

            console.log(error);
        }
    };

    // UI handle
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
                        marginBottom: "25px",
                        color: "#333"
                    }}
                >
                    Add User
                </h1>

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
                        backgroundColor: "#2563eb",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "16px",
                        cursor: "pointer"
                    }}
                >
                    Submit
                </button>

            </div>

        </div>
    );
}

export default PostAPI;
