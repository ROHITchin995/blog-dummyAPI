import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { PostPage } from './pages/PostPage';
import { Error } from './pages/Error';
import { Navbar } from './Components/Navbar';
function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postid" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} /> 
    </Routes>
   </Router>
  );
}

export default App;
