import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Post() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/blogs")
      .then(response => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load blogs.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">Loading posts...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">{error}</div>;

  return (
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <ul className="space-y-4">
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link
              to={`/posts/${blog.id}`}
              className="text-indigo-600 hover:underline text-lg font-medium"
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
