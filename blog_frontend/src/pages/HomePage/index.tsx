import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

const HomePage = () => {
  const posts = [
    {
      slug: "makeup-trends",
      title: "Makeup Trends 2025",
      excerpt: "Огляд трендів макіяжу...",
    },
    {
      slug: "skincare",
      title: "Skincare Guide",
      excerpt: "Як правильно доглядати за шкірою...",
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-4xl font-extrabold mb-8 text-blue-400 text-center drop-shadow">Блог візажиста</h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.slug} className="p-6 bg-gray-800 border border-gray-700 rounded-2xl shadow-lg transition-transform hover:scale-[1.02]">
              <Link
                to={`/post/${post.slug}`}
                className="text-2xl font-bold text-blue-300 hover:text-blue-400 transition-colors duration-200"
              >
                {post.title}
              </Link>
              <p className="text-gray-400 mt-2">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
