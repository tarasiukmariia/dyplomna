import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/post/:slug" element={<PostPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
