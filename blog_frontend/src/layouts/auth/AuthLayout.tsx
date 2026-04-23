interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface dark:bg-surface-dark transition-colors px-2 sm:px-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl p-4 sm:p-8 rounded-2xl shadow-lg bg-white/90 dark:bg-[#181818] border border-border dark:border-border-dark flex flex-col items-center">
        {children}
        <div className="mt-8 text-xs text-text-muted dark:text-text-muted-dark text-center w-full">
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default AuthLayout