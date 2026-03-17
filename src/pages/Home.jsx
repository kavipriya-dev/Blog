import { useEffect, useState } from "react";
import axios from "axios";
import GenerateForm from '../Component/GenerateForm';
import BlogList from '../Component/BlogList';
import SearchBar from '../Component/SearchBar';
import Loader from '../Component/Loader';

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/blogs");
      setBlogs(response.data.reverse()); // show newest first
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  };

 const handleAddBlog = async (newBlog) => {
  try {
    const response = await axios.post("http://localhost:5000/blogs", newBlog);
    setBlogs(prevBlogs => [response.data, ...prevBlogs]);
  } catch (error) {
    console.error("Error adding blog:", error);
  }
};

  const handleDeleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <GenerateForm onAddBlog={handleAddBlog} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {loading ? (
        <Loader />
      ) : (
        <BlogList blogs={filteredBlogs} onDelete={handleDeleteBlog} />
      )}
    </div>
  );
}

export default Home;
