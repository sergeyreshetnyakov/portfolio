import { Button } from "@/components/ui/button";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

interface Props {
   children: React.ReactNode;
}

export default function Layout({ children }: Props) {
   return (
      <>
         <div className="flex justify-between bg-white w-[90%] sm:w-[80%] lg:w-[50%] mx-auto mt-4 p-3 border rounded-xl shadow-xl top-0 left-[5%] sm:left-[10%] lg:left-[25%] fixed">
            <div className="my-auto font-semibold ml-3">FakeStore</div>
            <Button variant="link">
               <Link href="fakestore/cart" className="my-auto">
                  <FaShoppingCart size="1em" />
               </Link>
            </Button>
         </div>

         {children}
      </>
   );
}
