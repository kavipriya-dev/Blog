import { useState } from "react";

function GenerateForm({ onAddBlog }) {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);

  const generateBlog = async (e) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);

    const newBlog = {
      title: topic,
      content: `This is an AI-generated blog about "${topic}". Enjoy reading!`,
      date: new Date().toISOString().split("T")[0],
    };

    setTimeout(() => {
      onAddBlog(newBlog);
      setTopic("");
      setLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={generateBlog} className="space-y-4">
      <input
        type="text"
        placeholder="Enter a blog topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition duration-300 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Blog"}
      </button>
    </form>
  );
}

export default GenerateForm;
