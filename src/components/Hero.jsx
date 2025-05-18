import { useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const nextVideoRef = useRef(true);
  console.log(nextVideoRef);
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1; //(prev) => (prev + 1) % 4

  const handleVideoLoad = () => {
    setLoadedVideos(upcomingVideoIndex);
  };
  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className=" relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-100"
      >
        <div>
          <div className="border mask-clip-path absolute-center absolute  z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-50 opacity-10 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                src={getVideoSrc(upcomingVideoIndex)}
                ref={nextVideoRef}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            src={getVideoSrc(currentIndex)}
            ref={nextVideoRef}
            loop
            muted
            id="next-video"
            className="absolute z-20 size-64 invisible object-center object-cover"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            id="next-video"
            className="absolute left-0 top-0 size-full object-center object-cover"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="spacial-font hero-heading z-40 absolute bottom-5 right-5 text-blue-100">
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="spacial-font hero-heading text-blue-100">redefi<b>n</b>e</h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">Enter the Metagame Layer <br /> Unleash the Play Economy</p>
            <Button id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow/>} containerClass="!bg-yellow-300 flex-center gap-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
