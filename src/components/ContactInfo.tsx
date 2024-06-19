import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
  contact: string;
}

export default function ContactInfo({ children, href, contact }: Props) {
  return (
    <div className="flex justify-between">
      <div>{children}</div>
      <div className="flex flex-col justify-center">
        <Link href={href} className="underline">
          {contact}
        </Link>
      </div>
    </div>
  );
}
