import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import ListUser from "./components/Users/ListUser";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <ListUser users={usersList} />
    </div>
  );
}

export default App;
