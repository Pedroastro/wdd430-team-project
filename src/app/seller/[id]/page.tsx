import SellerProfile from "../../../components/SellerProfile";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Seller Profile",
    description: "View this seller's profile and handmade products. This project is part of an assignment for BYU Idaho's WDD430 class.",
};

interface PageProps {
    params: Promise<{ id: string }>;
}

const PublicSellerProfilePage = async ({ params }: PageProps) => {
    const { id } = await params;
    return <SellerProfile profileId={id} />;
};

export default PublicSellerProfilePage;
