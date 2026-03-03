import { useState } from "react";


const User =({name}) => {



    const [count, setCount] = useState(10);
  
      return <div className="user-card">
      <h1>Count: {count}</h1>
        <h2>Name: {name}</h2>
        <h3>Email: john.doe@example.com</h3>
        <h4>Location: New York</h4>
      </div>
}


export default User;