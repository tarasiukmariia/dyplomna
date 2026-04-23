import { useState, useEffect } from "react";
import MainLayout from "../../layouts/main/MainLayout";
import PostCard from "../../components/PostCard";
import AnimateOnView from "../../components/AnimateOnView";
import FilterSort from "./components/FilterSort";
import Loader from "../../components/ui/Loader";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [author, setAuthor] = useState("");
  const [sort, setSort] = useState("date-desc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleReset = () => {
    setSearch("");
    setAuthor("");
    setSort("date-desc");
  };

  const posts = Array.from({ length: 22 }).map((_, i) => ({
    slug: `post-${i + 1}`,
    title: `Post Title ${i + 1}`,
    excerpt: `Це короткий опис для поста номер ${i + 1}.`,
    author: `Автор ${i + 1}`,
  }));

  const filteredPosts = posts.filter(
    post =>
      post.title.toLowerCase().includes(search.toLowerCase()) &&
      post.author.toLowerCase().includes(author.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="max-w-screen-2xl mx-auto p-4">
        <FilterSort
          search={search}
          author={author}
          sort={sort}
          onSearchChange={setSearch}
          onAuthorChange={setAuthor}
          onSortChange={setSort}
          onReset={handleReset}
        />
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <Loader size={48} />
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center text-text-muted text-lg py-16">Пости не знайдено</div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8"
            style={{ gridAutoRows: "1fr" }}
          >
            {filteredPosts.map((post, idx) => (
              <div key={post.slug} style={{ minWidth: 290 }}>
                <AnimateOnView delay={(idx % 4) * 100}>
                  <PostCard
                    title={post.title}
                    excerpt={post.excerpt}
                    author={post.author}
                    href={`/post/${post.slug}`}
                    imageUrl="https://picsum.photos/200/300"
                  />
                </AnimateOnView>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default HomePage;
