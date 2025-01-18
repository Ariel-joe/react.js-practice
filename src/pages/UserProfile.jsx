import React, { useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Joe",
    age: 25,
    location: "Nairobi",
  });

  const updateAge = () => {
    setUser((prevuser) => ({ ...prevuser, age: prevuser.age + 10 }));
  };
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
      <button onClick={updateAge}>Update age</button>
    </div>
  );
};

export { UserProfile };
