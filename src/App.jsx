import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import Home from "./pages/Home";   
import Post from "./pages/Post"; 
import PostView from "./Component/PostView";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50">  
        <Header />
        <main className="max-w-7xl mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Post />} />
            <Route path="/posts/:id" element={<PostView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
