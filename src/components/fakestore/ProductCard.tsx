"use client";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { IProduct } from "@/lib/store/storeApi";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
   HoverCard,
   HoverCardContent,
   HoverCardTrigger,
} from "@/components/ui/hover-card";
import { addToCart } from "@/lib/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState, useEffect } from "react";

interface IProps extends IProduct {
   variant: "cart" | "shop";
}

export default function ProductCard({
   id,
   title,
   category,
   description,
   price,
   image,
   rating,
   variant,
}: IProps) {
   const cart = useAppSelector((state) => state.cart.cart);
   const dispatch = useAppDispatch();

   const [inCart, setInCart] = useState<boolean>(false);

   useEffect(() => {
      if (cart !== undefined) {
         const product = cart.find((e) => {
            return e.id === id;
         });

         if (product !== undefined) setInCart(true);
         else setInCart(false);
      }
   }, [cart, id]);

   return (
      <Card className="flex flex-col justify-between">
         <CardHeader>
            <CardTitle className="flex justify-center max-h-40">
               <Image src={image} width={128} height={128} alt={title} />
            </CardTitle>
            <h1 className="overflow-hidden">{title}</h1>
         </CardHeader>

         <CardContent>
            <CardDescription>
               <HoverCard>
                  <HoverCardTrigger>
                     <div className="truncate h-16">{description}</div>
                     <div className="underline">{category}</div>
                  </HoverCardTrigger>
                  <HoverCardContent>{description}</HoverCardContent>
               </HoverCard>
            </CardDescription>
         </CardContent>

         <CardFooter className="flex justify-between">
            {inCart ? (
               <div>already in cart</div>
            ) : (
               <Button
                  onClick={() =>
                     dispatch(
                        addToCart({
                           id: id,
                           title: title,
                           category: category,
                           description: description,
                           price: price,
                           image: image,
                           rating: rating,
                        }),
                     )
                  }
               >
                  Buy
               </Button>
            )}
            <span className="font-bold">{price}$</span>
         </CardFooter>
      </Card>
   );
}
