import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Props {
   title: string;
   image: string;
   description: string;
   href: string;
}

export default function ProjectCard({
   title,
   image,
   description,
   href,
}: Props) {
   return (
      <Card>
         <CardHeader className="flex flex-row justify-center">
            <Image
               className="border rounded-xl"
               width={480}
               height={270}
               src={image}
               alt={title}
            />
         </CardHeader>
         <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
         </CardContent>
         <CardFooter>
            <Button>
               <Link href={href}>Просмотреть</Link>
            </Button>
         </CardFooter>
      </Card>
   );
}
