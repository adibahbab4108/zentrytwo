import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass = "" }) => {
  const containerRef = useRef();

  useGSAP(() => {
    // Initial hidden state
    gsap.set(".animated-word", {
      opacity: 0,
      transform: "translate3d(20px, 90px, 20px) rotateY(30deg) rotateX(30deg)",
    });

    // Scroll animation
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "center 50%",
        toggleActions: "play none none reverse",
      },
    }).to(".animated-word", {
      opacity: 1,
      transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
      ease: "power2.inOut",
      stagger: 0.15,
      duration: 0.6,
    });
  }, []);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br/>").map((line, i) => (
        <div key={i} className="flex-center flex flex-wrap gap-3 px-10">
          {line.split(" ").map((word, j) => (
            <span
              key={j}
              className="animated-word text-black font-extrabold"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
