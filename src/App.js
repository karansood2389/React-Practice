import React, { useState } from "react";

import UserOutput from "./Components/UserOutput/UserOutput";
import UserInput from "./Components/UserInput/UserInput";

import "./App.css";

function App() {
  const userArray = [
    { userName: "Karan", userAge: 31 },
    { userName: "Neha", userAge: 29 },
  ];

  const [user, setUser] = useState(userArray);

  const userInputHandler = (event) => {
    const userObject = [...userArray];
    userObject[0].userName = event.target.value;
    // console.log(event.target.value);
    setUser([...userObject]);
  };

  return (
    <div className="App">
      <UserOutput userName={user[0].userName} userAge={user[0].userAge} />
      <UserOutput userName={user[1].userName} userAge={user[1].userAge} />
      <UserInput
        userInputValue={(event) => userInputHandler(event)}
        defaultUserName={user[0].userName}
      />
    </div>
  );
}

export default App;
