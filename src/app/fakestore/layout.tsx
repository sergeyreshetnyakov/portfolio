import Cart from "@/components/fakestore/Cart";

interface Props {
   children: React.ReactNode;
}

export default function Layout({ children }: Props) {
   return (
      <>
         <div className="flex justify-between bg-white w-[90%] sm:w-[80%] lg:w-[50%] mx-auto mt-4 p-3 border rounded-xl shadow-xl top-0 left-[5%] sm:left-[10%] lg:left-[25%] fixed">
            <div className="my-auto font-semibold ml-3">FakeStore</div>
            <Cart />
         </div>

         {children}

         <div className="flex bg-black h-8 shadow-xl rounded-t-lg"></div>
      </>
   );
}
