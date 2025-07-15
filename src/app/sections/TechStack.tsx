import ScrollVelocity from "../components/scrollvelocity";

export default function TechStack() {
  return (
    <div className="pt-10 md:pt-15">
      <ScrollVelocity
        texts={[
          "<React> <Javascript> <HTML> <CSS> <Express> <Node.js> <MongoDB> <React Native>",
          " [Web Development] [UI/UX] [Data Analysis]",
        ]}
        velocity={80}
        parallaxClassName="parallax"
        scrollerClassName="scroller"
      />
    </div>
  );
}
