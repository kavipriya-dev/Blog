import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

function BlogCard({ blog, onDelete }) {
 
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 transition-transform hover:scale-105 animate-fadeIn text-gray-900">
      <Link to={`/posts/${blog.id}`}>
        
        <h2 className="text-2xl font-bold mb-1">{blog.title}</h2>

        <p className="text-sm font-medium text-gray-700 mb-1">By {blog.author || "Unknown Author"}</p>

        <p className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString()}</p>

        <p className="mt-3 text-gray-700 line-clamp-3">{blog.content}</p>
      </Link>

      <button
        onClick={() => onDelete(blog.id)}
        className="mt-5 text-red-600 hover:text-red-800 flex items-center space-x-2 font-semibold"
      >
        <Trash2 size={20} />
        <span>Delete</span>
      </button>
    </div>
  );
}

export default BlogCard;
