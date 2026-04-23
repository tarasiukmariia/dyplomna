import React from "react";
import Button from "./ui/Button";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-label="Закрити меню"
      />
      <aside
        className={`absolute right-0 top-0 h-full w-80 max-w-full bg-surface dark:bg-surface-dark shadow-lg transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <Button
          variant="ghost"
          className="right-0 top-4 z-10 p-2 flex flex-col justify-center items-center w-10 h-10 text-2xl text-primary hover:text-accent focus:outline-none absolute"
          aria-label="Закрити меню"
          onClick={onClose}
        >
          <span className="block w-6 h-0.5 bg-primary mb-1 rounded rotate-45 translate-y-1.5"></span>
          <span className="block w-6 h-0.5 bg-primary mb-1 rounded opacity-0"></span>
          <span className="block w-6 h-0.5 bg-primary rounded -rotate-45 -translate-y-1.5"></span>
        </Button>
        <div className="p-8 pt-16 flex flex-col gap-6 h-full">{children}</div>
      </aside>
    </div>
  );
};

export default Sidebar;
