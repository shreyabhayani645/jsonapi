import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Post from './Post';
import Comments from './Comments';
import Albums from './Albums';
import Photos from './Photos';
import Todos from './Todos';
import Users from './Users';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Posts" element={ <Post></Post> } />
        <Route path="/Comments" element={ <Comments></Comments> } />
        <Route path="/Albums" element={ <Albums></Albums> } />
        <Route path="/Photos" element={ <Photos></Photos> } />
        <Route path="/Todos" element={ <Todos></Todos> } />
        <Route path="/Users" element={ <Users></Users>} />
      </Routes>  
    </>
  );
}

export default App;
