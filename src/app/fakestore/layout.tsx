import { Button } from "@/components/ui/button";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

interface Props {
   children: React.ReactNode;
}

export default function Layout({ children }: Props) {
   return (
      <>
         <div className="flex justify-between bg-white w-[90%] sm:w-[80%] lg:w-[50%] mx-auto mt-4 p-2 border rounded-xl shadow-xl top-0 left-[5%] sm:left-[10%] lg:left-[25%] fixed">
            <div>
               <Button variant="link" className="m-auto pr-[25%]">
                  <Link href="fakestore">Home</Link>
               </Button>
            </div>
            <div className="flex justify-between sm:w-[40%]">
               <Button variant="link">
                  <Link href="fakestore/cart" className="my-auto">
                     <FaShoppingCart size="1em" />
                  </Link>
               </Button>
               <Button variant="outline">
                  <Link href="fakestore/signin">Sign In</Link>
               </Button>
               <Button>
                  <Link href="fakestore/signup">Sign Up</Link>
               </Button>
            </div>
         </div>

         {children}
      </>
   );
}
