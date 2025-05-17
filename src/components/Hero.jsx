import { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(true);
  // const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => (prev + 1) % 4);
  };
  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex((prev) => (prev + 1) % 4);
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
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                src={getVideoSrc(currentIndex + 1)}
                ref={nextVideoRef}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
