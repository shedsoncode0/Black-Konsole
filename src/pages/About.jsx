import React from "react";

const About = () => {
  return (
    <section className="w-full bg-[#1E1E1E]  ">
      {/* Section One */}
      <section className="w-full flex justify-between py-20 px-28">
        <div className="flex-1 flex flex-col justify-center space-y-4">
          <h2 className="text-sm  text-white">
            Home &gt; <span className="text-primary">About</span>
          </h2>
          <h1 className="text-2xl w-full max-w-[500px] leading-snug font-bold text-white">
            Building Games, Uniting Developers Worldwide.
          </h1>
          <p className="text-white w-full max-w-[500px]">
            Crafting immersive games while empowering a global community of
            developers to innovate and collaborate.
          </p>
          <div className="w-full max-w-[150px]">
            <button className="px-4 w-full text-md  py-3 mt-10 rounded-full text-white bg-primary">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-slate-400 h-[500px] w-full rounded-xl"></div>
        </div>
      </section>
      {/* Section One */}
      {/* //=============// */}
      {/* Section Two */}
      <section className=" py-20 px-28">
        <h1 className="text-xl w-full max-w-[500px] leading-snug font-semibold text-white">
          Why join the ride
        </h1>

        <div className="flex-1 flex justify-between w-full mt-16">
          <div className="bg-slate-400 h-[300px] w-full max-w-[300px] rounded-xl"></div>
          <div className="bg-slate-400 h-[300px] w-full max-w-[300px] rounded-xl"></div>
          <div className="bg-slate-400 h-[300px] w-full max-w-[300px] rounded-xl"></div>
        </div>
      </section>
      {/* Section Two */}
      {/* //=============// */}
    </section>
  );
};

export default About;
