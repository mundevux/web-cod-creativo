"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import { NextUIProvider, Link } from "@nextui-org/react";
import Lottie from "lottie-web";
import { Player } from "@lottiefiles/react-lottie-player";
import PrincipalButton from "./components/PrincipalButton";
import SecondaryButton from "./components/SecondaryButton";
import imageHero from "@/app/assets/jason-goodman-vbxyFxlgpjM-unsplash.webp";
import imageAbout from "@/app/assets/About2.svg";

export default function Home() {
  const bannerAnimation = require("@/app/assets/Banner_Animation.json");
  const underLineAnimation = require("@/app/assets/Animation_Underline.json");
  const circleAnimation = require("@/app/assets/Animation_Circle.json");
  const arrowDownAnimation = require("@/app/assets/Animation_Arrow_Down.json");
  const arrowDownTwoAnimation = require("@/app/assets/Animation_Arrow_Down_Two.json");
  const arrowTopAnimation = require("@/app/assets/Animation_Arrow_Top.json");
  const underLineTwoAnimation = require("@/app/assets/Animation_Underline_Two.json");
  const circleTwoAnimation = require("@/app/assets/Animation_Circle_Two.json");

  return (
    <NextUIProvider className="text-mine-shaft-950 bg-gallery">
      <Navbar />
      <section className="max-w-7xl mx-auto">
        <div className="mt-12 py-16 md:py-24">
          <h1 className="title-font text-5xl lg:text-7xl font-semi-bold px-3 lg:px-60 text-center pb-7">
            Lidera la revolución digital mientras mejoras tu tecnología
          </h1>
          <p className="font-normal text-sm lg:text-base px-3 md:px-60 lg:px-80 text-center pb-7">
            Impulsamos tu presencia digital y maximizamos la efectividad de tus
            estrategias de marketing para que logres resultados extraordinarios
            en línea.
          </p>
          <div className="flex flex-col md:flex-row md:justify-center md:items-center px-3 gap-4">
            <PrincipalButton as={Link} variant="flat" href="/sobre-nosotros">
              Leer más
            </PrincipalButton>
            <SecondaryButton as={Link} variant="flat" href="/contacto">
              Contacto
            </SecondaryButton>
          </div>
        </div>
        <div className="md:pb-32">
          <Player
            loop={true}
            autoplay={true}
            src={bannerAnimation}
            className="hidden md:block lg:h-[800px] xl:h-[1150px] absolute"
          />
          <div className="relative">
            <Image
              src={imageHero}
              alt="Hero"
              layout="responsive"
              className="rounded-3xl px-3 md:pt-14 lg:pt-24"
            />
          </div>
        </div>
        <div className="mt-12 lg:mt-24 pb-20">
          <div className="grid grid-cols-2 gap-4 px-4 place-items-center">
            <div className="col-span-2 md:col-span-1">
              <h1 className="title-font text-5xl lg:text-7xl font-semi-bold pb-7 ">
                Podemos llevar tu negocio al siguiente nivel.
              </h1>
              <p className="font-normal text-sm lg:text-base pb-7">
                Te asesoramos estratégicamente en tecnología para que puedas
                alcanzar tus metas empresariales. En conjunto, definiremos la
                ruta que te permitirá liderar en un mercado desafiante y siempre
                cambiante. ¡Juntos, podemos lograrlo!
              </p>
              <SecondaryButton as={Link} variant="flat" href="/sobre-nostros">
                Leer más
              </SecondaryButton>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Image src={imageAbout} alt="Imagen sobre nostros" />
            </div>
          </div>
        </div>
        <div className="pb-8">
          <h1 className="title-font text-5xl lg:text-7xl font-semi-bold text-center pb-7">
            Servicios que te <br></br>ayudan a crecer
          </h1>
          <p className="font-normal text-sm lg:text-base text-center pb-4">
            ¡Imagina lo que podemos lograr juntos! Ofrecemos servicios diseñados
            para impulsar <br></br> tu crecimiento y potenciar tu presencia en
            línea.
          </p>
          <p className="font-semibold text-base lg:text-xl text-center pb-7">
            No más preocupaciones.
          </p>
          <div className="grid grid-cols-3 lg:grid-cols-4">
            <div className>
              <p className="font-semibold text-3xl lg:text-4xl text-center -rotate-12">
                Ux/Ui
              </p>
              <Player
                loop={true}
                autoplay={true}
                src={underLineAnimation}
                className="w-20 lg:w-28"
              />
            </div>
            <div className="mt-14 lg:mt-16 -ml-10">
              <Player
                loop={true}
                autoplay={true}
                src={circleAnimation}
                className="w-44 lg:w-56 "
              />
              <p className="font-semibold text-3xl lg:text-4xl text-center -mt-12 lg:-mt-14 pl-5 md:pl-0">
                Diseño
              </p>
            </div>
            <div>
              <Player
                loop={true}
                autoplay={true}
                src={arrowDownAnimation}
                className="w-20 md:w-28"
              />
              <p className="font-semibold text-3xl lg:text-4xl rotate-25 text-center -ml-8 -mt-6">
                Marketing
              </p>
            </div>
            <div className="mt-14">
              <p className="font-semibold text-3xl lg:text-4xl text-center -rotate-45">
                Diseño web
              </p>
            </div>
            <div className="mt-14 -ml-10 lg:hidden">
              <Player
                loop={true}
                autoplay={true}
                src={arrowTopAnimation}
                className="w-20 md:w-36"
              />
            </div>
            <div className="mt-14 -ml-16">
              <p className="font-semibold text-3xl lg:text-4xl text-center rotate-25">
                Email marketing
              </p>
            </div>
            <div className="mt-8 lg:mt-14 col-span-3 lg:col-span-1 flex place-content-center">
              <p className="font-semibold text-3xl lg:text-4xl text-center -rotate-25">
                Desarrollo <br></br> web
              </p>
              <Player
                loop={true}
                autoplay={true}
                src={arrowDownTwoAnimation}
                className="w-28 lg:w-32 md:hidden lg:block"
              />
            </div>
            <div className="mt-14 col-span-2 md:col-span-1">
              <p className="font-semibold text-3xl lg:text-4xl text-center rotate-12">
                Gestion de redes sociales
              </p>
            </div>
            <div className="mt-14">
              <Player
                loop={true}
                autoplay={true}
                src={circleTwoAnimation}
                className="w-28 lg:w-32 "
              />
              <p className="font-semibold text-3xl lg:text-4xl text-center  -mt-14 lg:-mt-16">
                SEO
              </p>
            </div>
            <div className="mt-14 col-span-3 md:col-span-1 lg:col-span-4">
              <p className="font-semibold text-3xl lg:text-4xl text-center rotate-12">
                Marketing Digital
              </p>
              <Player
                loop={true}
                autoplay={true}
                src={underLineTwoAnimation}
                className="w-48 lg:w-56 rotate-12"
              />
            </div>
          </div>
        </div>
      </section>
    </NextUIProvider>
  );
}
