"use client";
import { useGetProductsQuery } from "@/lib/store/storeApi";
import ProductCard from "@/components/fakestore/ProductCard";

export default function Page() {
   const { data, isLoading } = useGetProductsQuery(30);

   return <ProductCard></ProductCard>;
}
