import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import ContactUs from "./components/contact";
import CustomerManagement from "./components/custManage";

function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <h1>Online Shopping Portal</h1>


        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/custmanage" element={<CustomerManagement />}></Route>
        </Routes>
      </div>
    </BrowserRouter>)
}

export default App;
