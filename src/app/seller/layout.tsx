import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Seller Dashboard",
    description: "Manage your seller profile and products on Artisan Marketplace. This project is part of an assignment for BYU Idaho's WDD430 class.",
};

export default function SellerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
