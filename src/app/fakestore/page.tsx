"use client";
import { useGetProductsQuery } from "@/lib/store/storeApi";
import ProductCard from "@/components/fakestore/ProductCard";

export default function Page() {
   const { data, isLoading } = useGetProductsQuery(30);

   return (
      <div className="grid gap-2 xl:gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-32 mx-2 md:mx-4 lg:mx-8 xl:mx-16">
         {isLoading === false ? (
            data.map((e) => (
               <ProductCard
                  id={e.id}
                  title={e.title}
                  price={e.price}
                  description={e.description}
                  category={e.category}
                  image={e.image}
                  rating={e.rating}
                  key={e.id}
                  variant="shop"
               />
            ))
         ) : (
            <div>Loading...</div>
         )}
      </div>
   );
}
