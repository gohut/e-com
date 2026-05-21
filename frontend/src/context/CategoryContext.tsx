"use client";

import React, { createContext, useCallback, useContext, useMemo, Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { categories } from "@/data/products";

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const defaultCategory = categories[0];

const getCategoryFromQuery = (value: string | null) => {
  return categories.find((category) => slugify(category) === value) ?? defaultCategory;
};

type CategoryContextValue = {
  selectedCategory: string;
  setCategory: (category: string) => void;
  createCategoryHref: (category: string) => string;
};

const CategoryContext = createContext<CategoryContextValue | undefined>(undefined);

function CategoryProviderInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const categorySlug = searchParams.get("category");
  const selectedCategory = useMemo(() => getCategoryFromQuery(categorySlug), [categorySlug]);

  const createCategoryHref = useCallback(
    (category: string) => {
      const slug = slugify(category);
      const basePath = pathname === "/cart" ? "/cart" : "/";
      return category === defaultCategory ? basePath : `${basePath}?category=${slug}`;
    },
    [pathname],
  );

  const setCategory = useCallback(
    (category: string) => {
      const slug = slugify(category);
      const basePath = pathname === "/cart" ? "/cart" : "/";
      const route = category === defaultCategory ? basePath : `${basePath}?category=${slug}`;
      router.push(route);
    },
    [pathname, router],
  );

  const value = useMemo(
    () => ({ selectedCategory, setCategory, createCategoryHref }),
    [selectedCategory, setCategory, createCategoryHref],
  );

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
}

function CategoryProviderFallback({ children }: { children: React.ReactNode }) {
  const createCategoryHref = (category: string) => "/";
  const value = { selectedCategory: defaultCategory, setCategory: () => {}, createCategoryHref };
  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
}

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<CategoryProviderFallback>{children}</CategoryProviderFallback>}>
      <CategoryProviderInner>{children}</CategoryProviderInner>
    </Suspense>
  );
}

export function useCategory() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used inside CategoryProvider");
  }
  return context;
}
