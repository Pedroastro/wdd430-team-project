import RegisterForm from "@/components/auth/register-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign Up",
    description: "Create a new account on Artisan Marketplace to start selling or buying handmade crafts. This project is part of an assignment for BYU Idaho's WDD430 class.",
};

export default function RegisterPage() {
    return (
        <main className="flex items-center justify-center min-h-screen">
            <div className="form-container">
                <RegisterForm />
            </div>
        </main>
    );
}
