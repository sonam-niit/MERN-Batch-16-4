import logo from './logo.svg';
import './App.css';
import UseEffectDemo1 from './components/useeffect1';
import Timer from './components/timer';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import useDocumentTitle from './components/useDocumentTitle';
import DynamicDocumentTitle from './components/useDocumentTitle';
import UseCaseInputValidation from './components/UseCaseInputValidation';
import UseCaseLiveFilter from './components/UseCaseLiveFilter';
import RealTimeClock from './components/realtimeclock';

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
      <RealTimeClock />
      <UseCaseInputValidation />
      <UseCaseLiveFilter />
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
