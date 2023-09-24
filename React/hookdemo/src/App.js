import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UseCase2 from './components/usecase2';
import DynamicDocumentTitle from './components/usecase2/useDocumentTitle';
import UseCase3 from './components/usecase3';

function Home() {
  // useDocumentTitle('Home Page')
  return (<div>
            <DynamicDocumentTitle title="Home Page"/>
            <h1>Home Component</h1>
          </div>)
}
function About() {
  //useDocumentTitle('About Us')
  return (<div>
    <DynamicDocumentTitle title="About Us"/>
    <h1>About Component</h1>
  </div>)
}
function Contact() {
  //useDocumentTitle('Contact Us')
  return (<div>
    <DynamicDocumentTitle title="Contact Us"/>
    <h1>Contact Component</h1>
  </div>)
}
function App() {
  return (
    <BrowserRouter>
      {/* <UseCase2 /> */}
      <UseCase3 />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
