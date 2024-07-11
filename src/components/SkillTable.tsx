import Link from "next/link";

export default function SkillTable() {
   return (
      <div className="grid grid-cols-2 gap p-4 my-28 border border-dashed border-black rounded-xl">
         <div className="flex flex-col border-r border-black pr-3">
            <span className="italic">Фреймворк</span>
            <span className="italic">Стилизация</span>
            <span className="italic truncate">Дополнительно</span>
         </div>

         <div className="flex flex-col pl-3">
            <span className="underline">
               <Link href="https://react.dev/">React</Link>,
               <Link href="https://nextjs.org/"> Next.js</Link>
            </span>
            <span className="underline">
               <Link href="https://tailwindcss.com/">TailwindCSS</Link>,
            </span>
            <span className="underline">
               <Link href="https://react-hook-form.com/">React Hook Form</Link>,
               <Link href="https://www.typescriptlang.org/"> TypeScript</Link>,
               <Link href="https://jestjs.io/ru"> Jest</Link>
            </span>
         </div>
      </div>
   );
}
