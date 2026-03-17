import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function PostView() {
  const { id } = useParams();  
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;  

    axios.get(`http://localhost:5000/blogs/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((err) => {
        setError(err.message || "Blog not found");
        console.error("Blog not found:", err);
      });
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!blog) return <div>Loading...</div>;

  return (
    <article>
      <h2 className="text-2xl font-bold mb-1">{blog.title}</h2>

        <p className="text-sm font-medium text-gray-700 mb-1">By {blog.author || "Unknown Author"}</p>

        <p className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString()}</p>

        <p className="mt-3 text-gray-700 line-clamp-3">{blog.content}</p>
    </article>
  );
}

export default PostView;
