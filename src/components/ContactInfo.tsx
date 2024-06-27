import Link from "next/link";

interface Props {
   children: React.ReactNode;
   name: string;
   href: string;
   contact: string;
}

export default function ContactInfo({ children, name, href, contact }: Props) {
   return (
      <div className="flex justify-between">
         <div className="w-16">
            <div className="flex justify-center">{children}</div>
            <div className="flex justify-center">{name}</div>
         </div>
         <div className="flex flex-row justify-center w-52">
            <Link href={href} className="italic">
               {contact}
            </Link>
         </div>
      </div>
   );
}
