import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import YodlrRoutes from "./Routes";
import NavBar from "./Navbar";
import API from "./API";
import "./App.css";

function App() {
  const [usersData, setUsersData] = useState("");

  useEffect(() => {
    async function getUsers() {
      const res = await API.getUsers();
      setUsersData(res);
    }
    getUsers();
  }, []);
  console.log(usersData);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <YodlrRoutes usersData={usersData} />
      </div>
    </BrowserRouter>
  );
}

export default App;
