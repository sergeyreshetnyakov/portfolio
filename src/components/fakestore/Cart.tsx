"use client";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
   DialogOverlay,
   DialogFooter,
} from "@/components/ui/dialog";
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { FaShoppingCart } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { deleteCart } from "@/lib/store/cartSlice";
import ProductCard from "@/components/fakestore/ProductCard";
import { FaRegTrashCan } from "react-icons/fa6";

export default function Cart() {
   const dispatch = useAppDispatch();
   const cart = useAppSelector((state) => state.cart.cart);

   return (
      <Dialog>
         <DialogTrigger>
            <FaShoppingCart size="1em" />
         </DialogTrigger>
         <DialogOverlay>
            <DialogContent>
               <DialogHeader>
                  <DialogTitle>Cart</DialogTitle>
                  <DialogDescription>
                     <ScrollArea>
                        <div className="grid grid-cols-1 max-h-[65vh]">
                           {cart.map((e) => (
                              <ProductCard
                                 id={e.id}
                                 title={e.title}
                                 price={e.price}
                                 description={e.description}
                                 category={e.category}
                                 image={e.image}
                                 rating={e.rating}
                                 key={e.id}
                                 variant="cart"
                              />
                           ))}
                        </div>
                     </ScrollArea>
                  </DialogDescription>
               </DialogHeader>
               <DialogFooter>
                  <AlertDialog>
                     <AlertDialogTrigger>
                        <Button onClick={() => dispatch(deleteCart())}>
                           Buy
                        </Button>
                     </AlertDialogTrigger>
                     <AlertDialogContent>
                        <AlertDialogHeader>Buy Success</AlertDialogHeader>
                        <AlertDialogFooter>
                           <AlertDialogAction>OK</AlertDialogAction>
                        </AlertDialogFooter>
                     </AlertDialogContent>
                  </AlertDialog>
                  <Button
                     onClick={() => dispatch(deleteCart())}
                     variant="outline"
                  >
                     <FaRegTrashCan /> Clear Cart
                  </Button>
               </DialogFooter>
            </DialogContent>
         </DialogOverlay>
      </Dialog>
   );
}
