import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/blog/:id' element={<Blog/>} />
    </Routes>
  );
}

export default App;
