import React, { useState } from "react";
import Forms from "./components/Form";
import axios from "axios";
import FormCard from "./components/FormCard";
import "./App.css";

function App() {
  const [users, addUser] = useState([]);

  const handleSubmit = (values, tools) => {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        addUser([...users, res.data]);
        tools.resetForm();
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="App">
      <Forms handleSubmit={handleSubmit} />
      <FormCard users={users} />
    </div>
  );
}

export default App;
