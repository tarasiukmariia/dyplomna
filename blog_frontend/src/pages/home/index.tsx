import MainLayout from "../../layouts/main/MainLayout";
import PostCard from "../../components/PostCard";

const HomePage = () => {
  const posts = Array.from({ length: 10 }).map((_, i) => ({
    slug: `post-${i + 1}`,
    title: `Post Title ${i + 1}`,
    excerpt: `Це короткий опис для поста номер ${i + 1}.`,
    author: `Автор ${i + 1}`,
  }));

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              author={post.author}
              href={`/post/${post.slug}`}
              imageUrl="https://picsum.photos/200/300"
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
