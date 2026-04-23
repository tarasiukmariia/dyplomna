import { Link } from "react-router-dom";
import MainLayout from "../../layouts/main/MainLayout";
import Button from "../../components/ui/Button";
import TextField from "../../components/ui/TextField";
import Chip from "../../components/ui/Chip";
import Card from "../../components/ui/Card";
import Divider from "../../components/ui/Divider";
import Loader from "../../components/ui/Loader";
import Switch from "../../components/ui/Switch";
import Badge from "../../components/ui/Badge";
import { useState } from "react";

const HomePage = () => {
  const [switchOn, setSwitchOn] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [chipVisible, setChipVisible] = useState(true);

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
        <h1 className="text-4xl font-extrabold mb-8 text-accent text-center drop-shadow dark:text-accent">Блог візажиста</h1>
        <Card className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-accent">UI Components Showcase</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className="flex flex-wrap gap-4 mb-4">
            <TextField label="Text Field" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Введіть текст..." />
            <TextField label="З помилкою" error="Помилка" />
          </div>
          <div className="flex flex-wrap gap-4 mb-4 items-center">
            {chipVisible && <Chip label="Chip Accent" color="accent" onDelete={() => setChipVisible(false)} />}
            <Chip label="Chip Default" />
            <Chip label="Chip Success" color="success" />
            <Chip label="Chip Error" color="error" />
          </div>
          <div className="flex flex-wrap gap-4 mb-4 items-center">
            <Badge color="accent">Accent</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="error">Error</Badge>
            <Badge color="default">Default</Badge>
          </div>
          <div className="flex flex-wrap gap-4 mb-4 items-center">
            <Switch checked={switchOn} onChange={setSwitchOn} label={switchOn ? "Увімкнено" : "Вимкнено"} />
          </div>
          <div className="flex flex-wrap gap-4 mb-4 items-center">
            <Loader />
          </div>
          <Divider />
        </Card>
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-lg transition-transform hover:scale-[1.02] dark:bg-surface-dark dark:border-accent"
            >
              <Link
                to={`/post/${post.slug}`}
                className="text-2xl font-bold text-accent hover:text-accent-hover transition-colors duration-200 dark:text-accent dark:hover:text-accent-light"
              >
                {post.title}
              </Link>
              <p className="text-gray-600 mt-2 dark:text-gray-400">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
