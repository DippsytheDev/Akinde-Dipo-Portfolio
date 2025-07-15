import React from "react";
import Image from "next/image";
import AnimatedContent from "../components/animatedcontent";
import GitHubCalendar from "react-github-calendar";

const AboutPage = () => {
  return (
    <div>
      <div className="relative font-mono">
        <div className="container mx-auto px-10 md:px-15 lg:px-12 pt-28 lg:pt-40">
          <AnimatedContent
            distance={10}
            direction="vertical"
            reverse={false}
            config={{ tension: 70, friction: 13 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            {/* Main Content */}
            <h1 className="text-5xl font-bold mb-12">Hi, I'm Dipo!</h1>
          </AnimatedContent>

          {/* Image section - shows at top on sm and md screens */}
          <AnimatedContent
            distance={10}
            direction="horizontal"
            reverse={false}
            config={{ tension: 70, friction: 13 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="block lg:hidden mb-8">
              <div className="flex justify-center">
                <div className="relative w-60 h-60 md:w-80 md:h-80">
                  <div className="overflow-hidden rounded-full w-full h-full">
                    <Image
                      src="/profile.jpeg"
                      alt="Long's profile pic"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>

          <div className="flex flex-col lg:flex-row lg:justify-between gap-16 mb-16">
            {/* Text section - fills available space but not more than needed */}
            <AnimatedContent
              distance={10}
              direction="horizontal"
              reverse={false}
              config={{ tension: 70, friction: 13 }}
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div className="lg:max-w-4xl">
                <div className="mb-8">
                  <h2 className="text-2xl font-medium mb-4">
                    An emerging{" "}
                    <span className="text-[#FF611D]">software engineer</span>{" "}
                    with a passion to{" "}
                    <span className="text-[#FF611D]">learn</span> and a{" "}
                    <span className="text-[#FF611D]">can-do attitude</span>.
                  </h2>
                  <p className="mb-8">
                    I am driven by{" "}
                    <span className="text-[#FF611D]">curiosity</span> and a
                    commitment to building impactful software solutions. I
                    thrive on tackling complex problems and finding efficient
                    ways to address them, continuously seeking opportunities to
                    improve my skills.
                  </p>
                </div>

                <p className="mb-4">
                  During my time at{" "}
                  <span className="text-[#FF611D]">Xown Solutions</span>, I have
                  had hands-on experience in various technical areas. I enjoy
                  working on diverse projects that require both{" "}
                  <span className="text-[#FF611D]">creativity</span> and{" "}
                  <span className="text-[#FF611D]">technical expertise</span>.
                </p>
                <p>
                  I am always eager to embrace new challenges and am dedicated
                  to creating meaningful digital experiences that have a
                  positive impact. My passion for learning and growth fuels my
                  drive to excel in the software engineering field.
                </p>

                <div className="mb-8"></div>
              </div>
            </AnimatedContent>

            {/* Image section - only visible on lg screens */}
            <AnimatedContent
              distance={200}
              direction="horizontal"
              reverse={false}
              config={{ tension: 70, friction: 13 }}
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div className="hidden lg:block">
                <div className="flex justify-end">
                  <div className="relative w-60 h-60 md:w-80 md:h-80">
                    <div className="overflow-hidden rounded-full w-full h-full">
                      <Image
                        src="/profile.jpeg"
                        alt="Your profile pic"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10 md:px-16 lg:px-0 pb-12">
        <div className="text-center mb-4 text-xl font-semibold">
          My GitHub contributions
        </div>
        <div className="flex justify-center">
          <GitHubCalendar
            username="DippsytheDev"
            theme={{
              dark: ["#333333", "#FF611D"],
            }}
            style={{
              font: "14px JetBrains Mono",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
