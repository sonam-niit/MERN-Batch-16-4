import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/about";
import ContactUs from "./components/contact";
import CustomerManagement from "./components/custManage";
import Navbar from "./components/navbar";
import Home from "./components/home";
import List from "./components/list";
import Details from "./components/details";
import AsyncStateExample from "./components/asyncstate";

function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <h1>Online Shopping Portal</h1>
        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace/>} ></Route>
          {/* Replace keep your history clean, helps you to avoid extra redirects after click on back link */}
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/custmanage" element={<CustomerManagement />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/async" element={<AsyncStateExample />}></Route>
          {/* Dynamic Route */}
        </Routes>
      </div>
    </BrowserRouter>)
}

export default App;
