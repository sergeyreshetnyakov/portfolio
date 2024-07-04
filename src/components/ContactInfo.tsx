import Link from "next/link";

interface Props {
   children: React.ReactNode;
   href: string;
   contact: string;
}

export default function ContactInfo({ children, href, contact }: Props) {
   return (
      <div className="flex justify-between">
         <div className="w-16 py-2">
            <div className="flex justify-center">{children}</div>
         </div>
         <div className="flex py-2 px-8 flex-row w-52 border-l border-black border-dashed">
            <Link href={href} className="italic text-clip">
               {contact}
            </Link>
         </div>
      </div>
   );
}
