import BlogCard from "./BlogCard";

function BlogList({ blogs, onDelete }) {
  if (blogs.length === 0) {
    return <p className="text-center text-gray-500">No blogs found.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default BlogList;
