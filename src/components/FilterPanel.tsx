'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useTransition } from "react";

interface FilterPanelProps {
    categories: string[];
}

export default function FilterPanel({ categories }: FilterPanelProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [isPending, startTransition] = useTransition();

    const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
    const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
    const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

    useEffect(() => {
        setSelectedCategory(searchParams.get("category") || "");
        setMinPrice(searchParams.get("minPrice") || "");
        setMaxPrice(searchParams.get("maxPrice") || "");
    }, [searchParams]);

    const applyFilters = () => {
        startTransition(() => {
            const params = new URLSearchParams(searchParams);

            if (selectedCategory) {
                params.set("category", selectedCategory);
            } else {
                params.delete("category");
            }

            if (minPrice && Number(minPrice) > 0) {
                params.set("minPrice", minPrice);
            } else {
                params.delete("minPrice");
            }

            if (maxPrice && Number(maxPrice) > 0) {
                params.set("maxPrice", maxPrice);
            } else {
                params.delete("maxPrice");
            }

            replace(`${pathname}?${params.toString()}`);
        });
    };

    const clearFilters = () => {
        startTransition(() => {
            const params = new URLSearchParams(searchParams);
            params.delete("category");
            params.delete("minPrice");
            params.delete("maxPrice");
            setSelectedCategory("");
            setMinPrice("");
            setMaxPrice("");
            replace(`${pathname}?${params.toString()}`);
        });
    };

    const hasActiveFilters = selectedCategory || minPrice || maxPrice;

    return (
        <div className="filter-panel">
            <div className="filter-group">
                <label htmlFor="category-filter" className="filter-label">Category</label>
                <select
                    id="category-filter"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="filter-select"
                >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <div className="filter-group">
                <label className="filter-label">Price Range</label>
                <div className="price-range-inputs">
                    <input
                        type="number"
                        placeholder="Min"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="price-input"
                        min="0"
                        step="0.01"
                    />
                    <span className="price-separator">–</span>
                    <input
                        type="number"
                        placeholder="Max"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="price-input"
                        min="0"
                        step="0.01"
                    />
                </div>
            </div>

            <div className="filter-actions">
                <button
                    type="button"
                    onClick={applyFilters}
                    className="filter-btn filter-btn-apply"
                    disabled={isPending}
                >
                    {isPending ? "Applying..." : "Apply Filters"}
                </button>
                {hasActiveFilters && (
                    <button
                        type="button"
                        onClick={clearFilters}
                        className="filter-btn filter-btn-clear"
                        disabled={isPending}
                    >
                        Clear
                    </button>
                )}
            </div>
        </div>
    );
}
