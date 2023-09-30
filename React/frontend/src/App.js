import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/navbar";
import UserList from "./components/userlist";
import AddUser from "./components/adduser";
import EditUser from "./components/edituser";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navigation />

      <Routes>
        <Route path="/list" element={<UserList />}></Route>
        <Route path="/add" element={<AddUser />}></Route>
        <Route path="/edit/:id" element={<EditUser />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
