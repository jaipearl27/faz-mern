"use client";

const Hero = () => {
  return (
    <div className="w-full h-screen ">
      <section className="relative h-full flex flex-col items-center justify-center text-center">
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{
            backgroundImage: "url('/background.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex flex-col items-center justify-center text-center z-10 text-white bg-black/50 h-full w-full">
          <div className="container">
            <h1 className="font-light text-8xl leading-tight">
              VPRO Tech Solutions
            </h1>
            <h3 className="font-light text-[23px] leading-none">
              where excellence in contracting meets innovative solutions.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
