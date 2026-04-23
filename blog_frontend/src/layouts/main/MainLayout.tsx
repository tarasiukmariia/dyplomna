import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-text dark:bg-surface-dark dark:text-text-light">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
