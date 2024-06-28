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
import { addToCart, deleteFromCart } from "@/lib/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";

export default function ProductCard({
   id,
   title,
   category,
   description,
   price,
   image,
   rating,
}: IProduct) {
   const cart = useAppSelector((state) => state.cart.cart);
   const dispatch = useAppDispatch();

   const [inCart, setInCart] = useState<boolean>(false);

   useEffect(() => {
      if (cart !== undefined) {
         const product = cart.find((e) => {
            e.id === id;
         });

         if (product !== undefined) {
            setInCart(true);
         }
      }
   }, [cart]);

   function addProduct() {
      dispatch(
         addToCart({
            id: id,
            title: title,
            price: price,
            description: description,
            category: category,
            image: image,
            rating: rating,
         }),
      );
      setInCart(true);
   }
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
            {inCart === false ? (
               <Button onClick={() => addProduct()}>Buy</Button>
            ) : (
               <Button
                  variant="outline"
                  onClick={() => dispatch(deleteFromCart(id))}
               >
                  delete from cart
               </Button>
            )}
            <span className="font-bold">{price}$</span>
         </CardFooter>
      </Card>
   );
}
