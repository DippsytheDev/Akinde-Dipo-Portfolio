"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../components/projectcards";

export function FeaturedProject() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="flex flex-col items-center justify-center pt-28 lg:pt-34 w-full px-2">
      <h1 className="font-bold text-[30px]">FEATURED PROJECTS</h1>
      <h2 className="font-semibold text-lg font-mono text-[#FF611D]">
        EXPLORE MY WORK
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const MakeupWebsiteContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-4 md:p-8 lg:p-14 rounded-3xl mb-4 w-full max-w-5xl mx-auto">
      <p className="text-sm font-semibold md:text-xl lg-2xl font-sans max-w-3xl mx-auto">
        Empowering beauty entrepreneurs with a modern e-commerce platform. This
        project delivers a seamless online shopping experience for makeup
        products, featuring intuitive navigation, product galleries, and a
        responsive design tailored for all devices.
      </p>
      <Image
        src="/img5.jpg"
        alt="Makeup Artist Website"
        height={500}
        width={500}
        className="md:h-1/2 pt-5 h-full w-full mx-auto object-contain"
      />
      <div className="flex justify-center">
        <a
          href="https://www.makeupbybims.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-2 bg-[#FF611D] text-white font-semibold rounded-lg shadow hover:bg-[#e65c1a] transition"
        >
          Check the live website out
        </a>
      </div>
    </div>
  );
};
const PeerToPeerLendingAppContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-4 md:p-8 lg:p-14 rounded-3xl mb-4 w-full max-w-5xl mx-auto">
      <p className="text-sm font-semibold md:text-xl lg-2xl font-sans max-w-3xl mx-auto">
        Revolutionizing personal finance with a peer-to-peer lending platform.
        This app connects borrowers and lenders securely, offering transparent
        transactions, user dashboards, and robust data protection for a
        trustworthy lending experience.
      </p>
      <Image
        src="/img5.jpeg"
        alt="Peer-to-Peer Lending App"
        height={500}
        width={500}
        className="md:h-1/2 pt-5 h-full w-full mx-auto object-contain"
      />
      <div className="flex justify-center">
        <a
          href="https://p2p-lending-app.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-2 bg-[#FF611D] text-white font-semibold rounded-lg shadow hover:bg-[#e65c1a] transition"
        >
          Check the live website out
        </a>
      </div>
    </div>
  );
};
const WeatherAppContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-4 md:p-8 lg:p-14 rounded-3xl mb-4 w-full max-w-5xl mx-auto">
      <p className="text-sm font-semibold md:text-xl lg-2xl font-sans max-w-3xl mx-auto">
        Stay ahead of the weather with a sleek, real-time forecasting app. Users
        can check current conditions and forecasts for any city, with a clean
        interface and dynamic visuals that make weather tracking simple and
        engaging.
      </p>
      <Image
        src="/img7.jpeg"
        alt="Weather App"
        height={500}
        width={500}
        className="md:h-1/2 pt-5 h-full w-full mx-auto object-contain"
      />
      <div className="flex justify-center">
        <a
          href="https://weather-app-by-akinde.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-2 bg-[#FF611D] text-white font-semibold rounded-lg shadow hover:bg-[#e65c1a] transition"
        >
          Check the live website out
        </a>
      </div>
    </div>
  );
};

const data = [
  {
    category: "WEB DEVELOPMENT",
    title: "Makeup Website",
    src: "/img1.jpg",
    content: <MakeupWebsiteContent />,
  },
  {
    category: "FINANCE",
    title: "Peer-to-Peer Lending App",
    src: "/img2.jpg",
    content: <PeerToPeerLendingAppContent />,
  },
  {
    category: "WEATHER",
    title: "Weather App",
    src: "/img4.jpg",
    content: <WeatherAppContent />,
  },
];
