"use client";

import { useState, useEffect, Suspense } from "react";
import { getAllProducts, getCategories } from "@/app/actions/product";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Search from "@/components/Search";
import FilterPanel from "@/components/FilterPanel";
import { useSearchParams } from "next/navigation";

interface Product {
  _id: string;
  name: string;
  price: number;
  images: string[];
  category: string;
  rating: number;
  numReviews: number;
}

function HomePageContent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const query = searchParams.get("query") || "";
  const category = searchParams.get("category") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const categoriesData = await getCategories();
      setCategories(categoriesData);

      const productsData = await getAllProducts({
        query: query || undefined,
        category: category || undefined,
        minPrice: minPrice ? Number(minPrice) : undefined,
        maxPrice: maxPrice ? Number(maxPrice) : undefined,
      });

      setProducts(productsData);
      setLoading(false);
    }

    fetchData();
  }, [query, category, minPrice, maxPrice]);

  return (
    <div>
      <main>
        <h1>Welcome to Handcrafted Haven</h1>
        <p>Your digital marketplace for handmade crafts.</p>

        <div style={{ marginBottom: "4rem" }}>
          <Link href="/signup">Sign Up</Link>{" "}
          <Link href="/login">Login</Link>
        </div>

        {/* Search bar */}
        <div style={{ marginBottom: "1rem" }}>
          <Search placeholder="Search products..." />
        </div>

        {/* Filter panel */}
        <FilterPanel categories={categories} />

        {/* Product grid */}
        <section className="product-grid">
          {loading ? (
            <p>Loading products...</p>
          ) : products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                name={product.name}
                price={product.price}
                image={product.images[0]}
                category={product.category}
                rating={product.rating}
                numReviews={product.numReviews}
              />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent />
    </Suspense>
  );
}
