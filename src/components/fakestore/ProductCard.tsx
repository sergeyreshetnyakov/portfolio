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
} from "@/components/ui/hover-card"

export default function ProductCard({
   id,
   title,
   category,
   description,
   price,
   image,
   rating,
}: IProduct) {
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
							<div className="truncate h-16">
								{description}
							</div>
							<div className="underline">
								{category}
							</div>
						</HoverCardTrigger>
						<HoverCardContent>
							{description}
						</HoverCardContent>
					</HoverCard>
				</CardDescription>
         </CardContent>
         <CardFooter className="flex justify-between">
				<Button>
					Buy
				</Button>
				<span className="font-bold">
					{price}$
				</span>
         </CardFooter>
      </Card>
   );
}
