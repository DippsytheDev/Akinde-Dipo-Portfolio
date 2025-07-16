"use client";
import React from "react";
import Image from "next/image";
import ScrollVelocity from "@/app/components/scrollvelocity";
import { StickyScroll } from "../../components/sticky-scroll-reveal";

export default function MedPantry() {
  const content = [
    {
      title: "WHAT IS THIS PROJECT ABOUT?",
      description: (
        <div>
          <p className="mb-4">
            The Medical Pantry is an Australian charity organization that serves
            as a bridge between surplus medical supplies and communities in
            need. Their warehouse operates as a central hub, collecting and
            sorting unused medical equipment from various healthcare facilities.
            Here are the links to the{" "}
            <a
              href="https://medicalpantry.org/"
              className="text-orange underline"
            >
              Medical Pantry website
            </a>{" "}
            and their{" "}
            <a
              href="https://shop.medicalpantry.org/"
              className="text-orange underline"
            >
              Shopify store
            </a>
            .
          </p>
          <p className="mb-4">
            Medical Pantry needed an efficient solution for its stock management
            process, starting from sorting donated medical supplies. The
            existing manual labour system created bottlenecks, making it
            difficult to track available storage and efficiently allocate
            resources. To address this challenge, my team and I developed a
            <span className="text-orange"> virtual warehouse system</span> that
            allows for precise tracking and entry of stock, streamlining the
            entire inventory process.
          </p>
        </div>
      ),
    },
    {
      title: "MEET THE TEAM",
      description: (
        <div>
          <p>
            Our team was composed of 5 final-year students who collaborated to
            bring this project to life. I was responsible for{" "}
            <span className="text-orange">UI/UX design</span> and{" "}
            <span className="text-orange">frontend development</span>, ensuring
            an intuitive user experience. Kai took on the role of product owner
            and backend developer, guiding the project's direction. Henry led
            API development and database integration, while Abdullah focused on
            quality assurance and deployment. Sho contributed to frontend
            development and product documentation. Together, we worked
            efficiently, applying our previous knowledge to create a robust and
            effective solution for Medical Pantry.
          </p>
        </div>
      ),
    },
    {
      title: "THE MANUAL SORTING PROCESS AND ITS PROBLEM",
      description: (
        <div>
          <p>
            The organisation relied on a structured packing process where
            donated medical supplies are sorted into "Baxter Boxes" before being
            distributed.{" "}
            <span className="font-bold text-orange italic">
              However, without a proper tracking system, managers had to
              manually identify available storage and update SKU fields in
              Shopify to reflect item locations.
            </span>{" "}
            Volunteers depended on direct instructions from managers, making the
            process inefficient and error-prone. Our goal was to automate these
            steps to enhance workflow and reduce reliance on manual updates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Image
              src="/sorting1.jpeg"
              alt="Image 1"
              width={200}
              height={200}
              className="object-cover w-100 h-70 rounded-2xl"
            />
            <Image
              src="/sorting2.jpeg"
              alt="Image 2"
              width={200}
              height={200}
              className="object-cover object-top w-full h-70 rounded-2xl"
            />
          </div>
          <div className="text-center mt-2">
            <p className="text-sm">The sorting process at Medical Pantry</p>
          </div>
        </div>
      ),
    },
    {
      title: "OUR SOLUTION",
      description: (
        <div>
          <p className="mb-4">
            Our team developed a web application to overhaul Medical Pantry's
            warehouse management. The existing system was inefficient, notably
            using Shopify's SKU field to track item locations, which wasn't
            scalable. Our solution was a{" "}
            <span className="text-orange">dedicated virtual warehouse</span>.
            Volunteers can now scan QR codes to log item locations accurately,
            and a manager log provides oversight of all transactions. The app
            also optimizes order fulfillment by directing volunteers to the
            nearest available items. This project streamlined Medical Pantry's
            operations, demonstrating the power of targeted software solutions
            to address real-world challenges.
          </p>
          <p className="mb-4">
            As a frontend developer on the project, I focused on building a{" "}
            <span className="text-orange">
              scalable and maintainable user interface
            </span>{" "}
            for the warehouse management web application. This involved{" "}
            <span className="text-orange">developing reusable components</span>{" "}
            to ensure consistency and efficiency across the application's
            various features, such as the inventory overview and order
            management sections. I also utilized libraries like{" "}
            <a className="underline text-orange" href="https://ui.shadcn.com/">
              shadcn
            </a>{" "}
            to accelerate development and leverage pre-built, accessible UI
            components. Key functionalities I contributed to include enabling
            volunteers to manage item locations using QR codes and developing
            interfaces for managers to oversee transactions in the manager log.
            This work supported the project's goal of providing Medical Pantry
            with a system that separated location IDs from SKUs and streamlined
            their warehouse operations.
          </p>

          <div className="bg-white p-2 rounded-2xl flex justify-center items-center mb-4">
            <Image
              src="/managerlogwireframe.svg"
              alt="Manager Log Wireframe"
              width={200}
              height={200}
              className="object-contain w-full h-full rounded-2xl"
            />
          </div>
          <div className="bg-white p-2 rounded-2xl flex justify-center items-center mb-4">
            <Image
              src="/managerlogui.svg"
              alt="Manager Log UI"
              width={500}
              height={500}
              className="object-contain w-full h-80 rounded-2xl"
            />
          </div>
          <div className="text-center mt-2">
            <p className="text-sm">Manager Log UI from wireframe to product</p>
          </div>
        </div>
      ),
    },
    {
      title: "MY KEY TAKEAWAYS",
      description: (
        <div>
          <p className="mb-4">
            This project marked my first experience with web development,
            providing invaluable learning opportunities to new technologies. I
            gained practical experience in applying{" "}
            <span className="text-orange">Agile methodologies</span>,
            participating in sprints, and understanding the importance of clear
            communication and documentation within a development team. I learned
            the significance of writing tests, conducting quality assurance, and
            collaborating effectively to achieve project goals. The experience
            underscored the value of good documentation, asking questions, and
            teamwork in software development.
          </p>
          <p>
            Reflecting on this project, I see myself as a frontend developer who
            enjoys creating user-friendly interfaces and engaging with design
            principles. I'm excited to continue exploring web development and
            enhancing my skills in building accessible, responsive, and
            interactive applications. This project has sparked my interest in
            frontend development, and I look forward to furthering my knowledge
            in this area.{" "}
            <span className="text-orange font-bold">
              It's also shown me that while a first product might not be
              perfect, the experience and lessons learned make it unforgettable.
            </span>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="w-full pt-20">
        <div className="bg-[#1a1a1a] flex justify-center items-center">
          <Image
            src={"/medpantry.svg"}
            alt="Macbook mockup for Medical Pantry"
            height="1000"
            width="1000"
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Content - Added max-width container */}
      <div className="w-full px-5 md:px-15.5 py-12 h-full">
        <div className="max-w-[1000px] mx-auto">
          {" "}
          {/* Increased max-width to 1280px */}
          <h1 className="font-sans font-semibold text-[43.46px] mb-6">
            MEDICAL PANTRY
          </h1>
          <p className="font-mono text-[18.07px] mb-8">
            A{" "}
            <span className="text-orange">
              data-driven inventory management system
            </span>{" "}
            for an Australian medical charity, optimizing the distribution of
            medical supplies to underserved communities.
          </p>
          <div className="h-16 overflow-hidden mb-10">
            <ScrollVelocity
              texts={[
                "React • TailwindCSS • Vercel • UI/UX • Git • AGILE • Figma • ",
              ]}
              velocity={20}
              className="font-mono text-[18.07px] text-orange"
              numCopies={4}
              velocityMapping={{ input: [0, 1000], output: [2, 2] }}
              parallaxClassName="h-16"
              scrollerClassName="items-center"
            />
          </div>
          <StickyScroll content={content} />
        </div>
      </div>
    </div>
  );
}
