import { Timeline } from "../components/timeline";

export const About = () => {
  const data = [
    {
      title: "2025 - Present",
      content: (
        <div>
          <p className="text-sm font-medium md:text-md font-mono mb-8">
            Decided to make 2025 my year to shine
          </p>
          <div className="mb-8 font-medium">
            <div className="flex items-center text-sm md:text-md font-mono">
              Latest update:
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              Currently Looking for a Fullstack Developer Role
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div>
          <p className="text-sm font-medium md:text-md font-mono mb-8">
            Worked as a Frontend Developer at Xown Solutions
          </p>
          <div className="mb-8 font-medium">
            <div className="flex items-center text-sm md:text-md font-mono">
              My key roles:
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              Developed and maintained responsive web applications using
              React.js, Next.js, HTML5, CSS, and Sass
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              Integrated RESTful APIs and ensured seamless communication between
              front-end and back-end systems
            </div>

            <div className="flex items-center text-sm md:text-md font-mono pt-2">
              ... and many more!
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-sm font-medium md:text-md font-mono mb-8">
            Started my coding journey as a Frontend Developer
          </p>
          <div className="mb-8 font-medium">
            <div className="flex items-center text-sm md:text-md font-mono">
              At a glance:
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              👨🏻‍💻 Wrote my first line of code in HTML and JAVASCRIPT
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              Developed my first website as a gift for a friend
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-24 lg:pt-34">
        <h1 className="font-bold text-[30px]">ABOUT ME</h1>
        <h2 className="font-semibold text-lg font-mono text-[#FF611D]">
          CODE.EAT.SLEEP.REPEAT
        </h2>
        <Timeline data={data} />
      </div>
    </div>
  );
};
