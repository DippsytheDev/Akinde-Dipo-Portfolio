import { About } from "./sections/About";
import { FeaturedProject } from "./sections/FeaturedProject";
import { Hero } from "./sections/Hero";
import { Quote } from "./sections/Quote";
import TechStack from "./sections/TechStack";

export default function Home() {
  return (
    <div>
      <div className="bg"></div>
      <Hero />
      <About />
      <Quote />
      <TechStack />
      <FeaturedProject />
    </div>
  );
}
