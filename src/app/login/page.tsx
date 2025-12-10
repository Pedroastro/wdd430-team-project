import LoginForm from "@/components/auth/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your Artisan Marketplace account. This project is part of an assignment for BYU Idaho's WDD430 class.",
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="form-container">
        <LoginForm />
      </div>
    </main>
  );
}
