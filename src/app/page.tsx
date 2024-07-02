import SkillTable from "@/components/SkillTable";
import ProjectCard from "@/components/ProjectCard";
import ContactInfo from "@/components/ContactInfo";
import Image from "next/image";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

export default function Home() {
   return (
      <>
         {" "}
         <div className="flex flex-col flex flex-col max-w-[90%] md:max-w-[80%] xl:max-w-[60%] m-auto">
            <header className="flex flex-col xl:flex-row justify-between mx-[15%] my-32 xl:my-64">
               <div className="flex justify-center mb-12">
                  <div className="flex flex-col w-80 xl:mb-12 justify-center">
                     <h1 className="text-2xl">
                        Привет👋, я <b>Frontend-разработчик</b>
                     </h1>
                     <h3>Меня зовут Сергей Решетняков</h3>
                     <h3>
                        Я из{" "}
                        <span className="underline">
                           Краснодарский Край, Краснодар
                        </span>
                        📍
                     </h3>
                  </div>
               </div>
               <div className="flex justify-center rounded">
                  <Image
                     src="/myPhoto.jpeg"
                     alt="me"
                     width={256}
                     height={256}
                  />
               </div>
            </header>

            <main className="mx-6 lg:mx-12">
               <SkillTable />
               <div className="mb-12">
                  <h1 className="font-bold text-2xl">👜Моё портфолио</h1>
               </div>
               <div className="flex flex-col justify-between gap-y-12 mb-24">
                  <ProjectCard
                     title="FakeStore"
                     image="/fakestorePreview.jpg"
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur venenatis dapibus. In hac habitasse platea dictumst. In facilisis dolor at libero dictum, volutpat pretium diam molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque in erat vitae felis posuere feugiat ut eu lectus. Ut nisl mi, hendrerit eu aliquet sed, faucibus non enim. Aliquam sodales, purus id bibendum sodales, dui nulla aliquet lorem, tristique suscipit magna quam efficitur sapien."
                     href="/fakestore"
                  />
                  <ProjectCard
                     title="Погода"
                     image="/weatherPreview.jpg"
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur venenatis dapibus. In hac habitasse platea dictumst. In facilisis dolor at libero dictum, volutpat pretium diam molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque in erat vitae felis posuere feugiat ut eu lectus. Ut nisl mi, hendrerit eu aliquet sed, faucibus non enim. Aliquam sodales, purus id bibendum sodales, dui nulla aliquet lorem, tristique suscipit magna quam efficitur sapien."
                     href="/weather"
                  />
                  <ProjectCard
                     title="Мессенджер"
                     image="/messangerPreview.jpg"
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur venenatis dapibus. In hac habitasse platea dictumst. In facilisis dolor at libero dictum, volutpat pretium diam molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque in erat vitae felis posuere feugiat ut eu lectus. Ut nisl mi, hendrerit eu aliquet sed, faucibus non enim. Aliquam sodales, purus id bibendum sodales, dui nulla aliquet lorem, tristique suscipit magna quam efficitur sapien."
                     href="/messanger"
                  />
               </div>
            </main>

            <footer className="mx-6 lg:mx-12">
               <div className="my-24">
                  <h1 className="font-bold text-2xl">📞Контакты</h1>
               </div>
               <div className="flex flex-col justify-between gap-8">
                  <ContactInfo
                     name="email"
                     href="mailto:sergeyreshetnyakov@icloud.com"
                     contact="sergeyreshetnyakov@icloud.com"
                  >
                     <ImMail4 size="2em"></ImMail4>
                  </ContactInfo>
                  <ContactInfo
                     name="github"
                     href="https://github.com/sergeyreshetnyakov"
                     contact="sergeyreshetnyakov"
                  >
                     <FaGithub size="2em"></FaGithub>
                  </ContactInfo>
                  <ContactInfo
                     name="telegram"
                     href="https://t.me/ei_gek"
                     contact="@ei_gek"
                  >
                     <FaTelegram size="2em"></FaTelegram>
                  </ContactInfo>
               </div>
            </footer>
         </div>
      </>
   );
}
