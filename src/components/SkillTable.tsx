import Link from "next/link";

export default function SkillTable() {
   return (
      <div className="grid grid-cols-2 py-4 xl:py-8 my-28 border border-dashed border-black rounded-xl">
         <div className="flex flex-col gap md:gap-2 xl:gap-4 2xl:gap-6 border-r border-black px-2 xl:px-12">
            <span className="italic">Фреймворк/библиотека</span>
            <span className="italic">Стилизация</span>
            <span className="italic truncate">Дополнительно</span>
         </div>
         <div className="flex flex-col grow gap md:gap-2 xl:gap-4 2xl:gap-6 px-2 xl:px-12">
            <span className="underline">
               <Link href="https://react.dev/">React</Link>,
               <Link href="https://nextjs.org/"> Next.js</Link>
            </span>
            <span className="underline">
               <Link href="https://tailwindcss.com/">TailwindCSS</Link>,
               <Link href="https://sass-scss.ru/"> SASS/SCSS</Link>
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
