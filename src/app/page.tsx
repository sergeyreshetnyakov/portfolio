'use client'
import ScrollAnimation from 'react-animate-on-scroll'
import SkillTable from "@/components/SkillTable";
import ProjectCard from "@/components/ProjectCard";
import ContactInfo from "@/components/ContactInfo";
import Image from "next/image";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import "animate.css/animate.compat.css"

export default function Home() {
   return (
      <>
         {" "}
			<div className="flex flex-col flex flex-col max-w-[90%] md:max-w-[80%] xl:max-w-[60%] m-auto">
			<ScrollAnimation animateIn="fadeInUp">
            <header className="flex flex-col xl:flex-row justify-between mx-[15%] my-32 md:my-64">
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
				</ScrollAnimation>

            <main className="mx-6 lg:mx-12">
					<ScrollAnimation animateIn="fadeInUp">	
					<SkillTable />
					</ScrollAnimation>
               <div className="mb-12">
              	<ScrollAnimation animateIn="fadeInUp">	
    <h1 className="font-bold text-2xl">👜Моё портфолио</h1>
              	</ScrollAnimation>	
 </div>
               <div className="flex flex-col justify-between gap-y-12 mb-24">
							<ScrollAnimation animateIn="fadeInUp">	
                  <ProjectCard
                     title="FakeStore"
                     image="/fakestorePreview.jpg"
                     description="
								Интернет магазин с возможностью добавлять продукты в корзину. 
								Перед началом разработки я поставил себе цель научиться
								работать с состоянием приложения и запросами на удалённый 
								сервер. В качестве api с продуктами был взят fakestoreapi,
								а сам сайт разработан на Next.js и Redux Toolkit.
							"
                     href="/fakestore"
                  />
						</ScrollAnimation>

							<ScrollAnimation animateIn="fadeInUp">	
                  <ProjectCard
                     title="Погода"
                     image="/weatherPreview.jpg"
                     description="
								Сайт с прогнозом погоды. Перед началом разработки я поставил
								себе цель научиться продвинутой работой с запросами на сервер.
								Приложение, через встроеный в браузере api, получает погоду 
								с сервера на основе текущего местоположении пользавателя 
								через заголовки. На сайте есть температура, вероятность 
								осадков, индекс ультрафиолета и т.д. Приложение было 
								разработано на Next.js.
							"
                     href="/weather"
                  />
							</ScrollAnimation>	
							<ScrollAnimation animateIn="fadeInUp">	
                  <ProjectCard
                     title="Мессенджер"
                     image="/messangerPreview.jpg"
                     description="
								Приложение с общим чатом и возможностью отправлять сообщения
								от имени разных пользователей. Перед началом разработки
								я поставил себе цель научится работать с сотоянием. Сайт,
								как и все отсальные мои работы, имеет адаптивный дизайн 
								и отображается одинаково хорошо на разных устроиствах. 
								Приложение было разработано на Redux Toolkit и Next.js.
							"
                     href="/messanger"
                  />
							</ScrollAnimation>	
               </div>
            </main>

            <footer className="mx-6 lg:mx-12">
							<ScrollAnimation animateIn="fadeInUp">	
               <div className="fade-in my-24">
                  <h1 className="font-bold text-2xl">📞Контакты</h1>
               </div>
							</ScrollAnimation>	
               <div className=" flex flex-col justify-between md:mx-[20%] lg:mx-[30%]">

							<ScrollAnimation animateIn="fadeInUp">	
                  <ContactInfo
                     href="mailto:sergeyreshetnyakov@icloud.com"
                     contact="sergeyreshetnyakov@icloud.com"
                  >
                     <ImMail4 size="2em"></ImMail4>
                  </ContactInfo>
							</ScrollAnimation>	
							<ScrollAnimation animateIn="fadeInUp">	
                  <ContactInfo
                     href="https://github.com/sergeyreshetnyakov"
                     contact="sergeyreshetnyakov"
                  >
                     <FaGithub size="2em"></FaGithub>
                  </ContactInfo>
							</ScrollAnimation>	
							<ScrollAnimation animateIn="fadeInUp">	
                  <ContactInfo
                     href="https://t.me/ei_gek"
                     contact="@ei_gek"
                  >
                     <FaTelegram size="2em"></FaTelegram>
                  </ContactInfo>
							</ScrollAnimation>	
               </div>
            </footer>
         </div>
      </>
   );
}
