import { TiLocationArrow } from "react-icons/ti";

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between  text-blue-100 ml-5 md:ml-10">
        <div>
          <h1 className="bento-title  my-4">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-100">
            Into the The metagame layer{" "}
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-100 opacity-50">
            Immerse yourself in an IP-rich product universe where players,
            agentic AI and blockchain lead the new economic paradigm.
          </p>
        </div>
        <div className=" bento-tilt_1  relative mb-7 h-96 w-full ml-2 md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description="A cross platform metagame app, turning your activities across web2 and web3 games into a rewarding adventure."
            isComingSoon
          />
        </div>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <div className="bento-tilt_1 row-span-1 col-span-2 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  Zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection- the IP primed for expension."
            />
          </div>
          <div className="border-hsla bento-tilt_1 row-span-1 col-span-2 ms-32 md:col-span-1 md:ms-0 ">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  Nex<b>u</b>s
                </>
              }
              description="The metagame portal uniting humans & AI to play compete and earn"
            />
          </div>
          <div className="border-hsla bento-tilt_1 row-span-1 col-span-2 me-16 md:col-span-1 md:me-0 ">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  Az<b>u</b>l
                </>
              }
              description="A cross-world AI agent - elevating your gameply to be more fun and productive."
            />
          </div>
          <div className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title max-w-64 ">More Coming soon!</h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>
          <div className="bento-tilt_2">
            <video src="videos/feature-5.mp4" loop muted autoPlay className="size-full object-cover object-center"></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
