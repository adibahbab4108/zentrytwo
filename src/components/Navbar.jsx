import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
const navItems = ["Nexus", "Valut", "Prologue", "About", "Content"];

const Navbar = () => {
  const navContainer = useRef();
  const audioElementRef = useRef();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 550) {
        navContainer.current.classList.add("bg-black/80");
      } else {
        navContainer.current.classList.remove("bg-black/80");
      }

      if (currentScrollY > lastScrollY && currentScrollY > 550) {
        navContainer.current.classList.add("hidden");
      } else {
        navContainer.current.classList.remove("hidden");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) audioElementRef.current.play();
    else audioElementRef.current.pause();
  }, [isAudioPlaying]);

  return (
    <div
      ref={navContainer}
      className="fixed inset-x-0 top-4 z-50 h-16 w-11/12 mx-auto rounded-lg transition-all duration-700 ease-in-out "
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2 ">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Product"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-100 md:felx hidden items-center justify-center gap-1"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="block">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={`#${item.toLocaleLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/music_main.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line cursor-pointer ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
