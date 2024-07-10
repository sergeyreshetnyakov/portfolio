import Link from "next/link";

interface Props {
   children: React.ReactNode;
   href: string;
   contact: string;
}

export default function ContactInfo({ children, href, contact }: Props) {
   return (
      <div className="flex justify-between">
         <div className="py-2 pr-5 sm:pr-12 lg:pr-24 border-r border-black border-dashed">
            <div className="flex justify-center">{children}</div>
         </div>
         <div className="flex py-2 px-8 flex-row  md:text-sm ">
            <Link href={href} className="italic text-clip">
               {contact}
            </Link>
         </div>
      </div>
   );
}
