import React from "react";
import MyButton from "../components/MyButton";
import CalenderComponent from "../components/Calender";


const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

const Adminpanel = () => {
  return (
    <div>
      <h1>Welcome to {user.name}</h1>

      <img src={user.imageUrl} alt={`Photo of ${user.name}`} />
      <MyButton />
      < CalenderComponent />
    </div>
  );
};

export default Adminpanel;
