import React, { useEffect, useState } from "react";
import axios from "axios";
function Getapi() {
 const [user, setUser] = useState([]);
  // step 2 : data fetch function
  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await axios.get(url);
      // step 3 :- set state by response data
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // step4 :- useEffect apply
  useEffect(() => {
    (fetchData(), []);
  });
  // step 5  make the UI
  return (
    <div>
      <div>
        <h1>Users</h1>

        {user.map((i) => (
          <div key={i.id}>
            <h3>{i.name}</h3>
            <p>{i.email}</p>
            <p>-----------------------------------</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Getapi