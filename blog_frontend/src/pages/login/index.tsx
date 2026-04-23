import AuthLayout from "../../layouts/auth/AuthLayout";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout>
      <div className="mb-6 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-3 shadow-md">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="var(--color-primary-light)" />
            <path d="M10 18c0-2.21 3.134-4 7-4s7 1.79 7 4v2H10v-2z" fill="var(--color-primary)" />
            <circle cx="16" cy="13" r="3" fill="var(--color-primary)" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-primary dark:text-primary mb-1">Welcome Back</h1>
        <p className="text-text-muted dark:text-text-muted-dark text-center text-base">Sign in to your account to continue</p>
      </div>
      <div className="w-full mt-2">
        <LoginForm />
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
