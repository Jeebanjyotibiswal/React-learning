
import React, { useEffect, useState } from "react";
import axios from "axios";

function Getapi() {

    // step 1: set the state
    const [data, setData] = useState([]);

    // step 2: define the function which will extract the response using axios
    const getData = async () => {

        const url = "http://localhost:3000/users";

        try {

            const response = await axios.get(url);

            // step 3: set the state with the response
            setData(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    // step 4: use the useEffect
    useEffect(() => {
        getData();
    }, []);

    // step 5: handle the UI
    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#f2f2f2",
                padding: "30px",
                fontFamily: "Arial"
            }}
        >

            <h1
                style={{
                    textAlign: "center",
                    color: "#333",
                    marginBottom: "30px"
                }}
            >
                Get User Data
            </h1>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "center"
                }}
            >

                {data.map((i) => (

                    <div
                        key={i.id}
                        style={{
                            width: "250px",
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                        }}
                    >

                        <h2
                            style={{
                                color: "#2563eb",
                                marginBottom: "15px"
                            }}
                        >
                            User {i.id}
                        </h2>

                        <p>
                            <strong>Name:</strong> {i.name}
                        </p>

                        <p>
                            <strong>Email:</strong> {i.email}
                        </p>

                        <p>
                            <strong>Age:</strong> {i.age}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Getapi;
