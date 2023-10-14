import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import PostList from './components/PostList';
import Profile from './components/profile';
import Comments from './components/Comments';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Header />
      </div>

      <Routes>
        <Route path='/' element={<PostList />}></Route>
        <Route path='/profile/:id' element={<Profile />}></Route>
        <Route path='/post/:id' element={<Comments />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
