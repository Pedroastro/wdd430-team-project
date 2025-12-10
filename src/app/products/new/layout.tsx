import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Add New Product",
    description: "List a new handmade product for sale on Artisan Marketplace. This project is part of an assignment for BYU Idaho's WDD430 class.",
};

export default function NewProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
