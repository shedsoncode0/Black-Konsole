import { Canvas } from "@react-three/fiber";
import Spline from "@splinetool/react-spline";
import { FaFire } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LuComputer } from "react-icons/lu";
import { TbBadgeVr, TbCube3dSphere } from "react-icons/tb";
import { VscVr } from "react-icons/vsc";
import Tilt from "react-parallax-tilt";
import { Truck } from "../components/Truck";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

const currentGame = [
  {
    url: "https://cdn.mos.cms.futurecdn.net/WNUMsXHzR2Viuk3NAqSVXn.jpg",
  },
  {
    url: "https://gaming-cdn.com/images/products/15038/orig/fortnite-ps5-playstation-5-game-playstation-store-cover.jpg?v=1695116505",
  },
  {
    url: "https://image.api.playstation.com/vulcan/ap/rnd/202308/1722/15f4ab1e0fe6a37609b164362a653c0e5bcee98a861d0f10.png",
  },
  {
    url: "https://assets-prd.ignimgs.com/2024/04/02/ghost-of-tsushima-button-replacement-1712068663737.jpg",
  },
];

const typeOfProjects = [
  {
    text: "Mobile Game Development",
    icon: <IoPhonePortraitOutline className="text-primary" size={22} />,
  },
  {
    text: "PC Game Development",
    icon: <LuComputer className="text-primary" size={22} />,
  },
  {
    text: "PS4 Game Development",
    icon: <GiConsoleController className="text-primary" size={22} />,
  },
  {
    text: "VR/AR Solutions",
    icon: <VscVr className="text-primary" size={22} />,
  },
  {
    text: "3D Modelings",
    icon: <TbCube3dSphere className="text-primary" size={22} />,
  },
  {
    text: "AR/VR Design",
    icon: <TbBadgeVr className="text-primary" size={22} />,
  },
];

const ourProjects = [
  {
    url: "https://cdn.mos.cms.futurecdn.net/WNUMsXHzR2Viuk3NAqSVXn.jpg",
  },
  {
    url: "https://gaming-cdn.com/images/products/15038/orig/fortnite-ps5-playstation-5-game-playstation-store-cover.jpg?v=1695116505",
  },
  {
    url: "https://image.api.playstation.com/vulcan/ap/rnd/202308/1722/15f4ab1e0fe6a37609b164362a653c0e5bcee98a861d0f10.png",
  },
  // {
  //   url: "https://assets-prd.ignimgs.com/2024/04/02/ghost-of-tsushima-button-replacement-1712068663737.jpg",
  // },
  // {
  //   url: "https://assets-prd.ignimgs.com/2024/04/02/ghost-of-tsushima-button-replacement-1712068663737.jpg",
  // },
  // {
  //   url: "https://assets-prd.ignimgs.com/2024/04/02/ghost-of-tsushima-button-replacement-1712068663737.jpg",
  // },
];

const LandingPage = () => {
  return (
    <section className="w-full bg-[#1E1E1E]  ">
      {/* Section One */}
      <section className="w-full flex justify-between   pl-28">
        <div className=" space-y-4 py-20">
          <h2 className="text-xl text-[#DC7000] font-bold ">
            Proved By prodesigner
          </h2>
          <h1 className="text-5xl w-full max-w-[500px] leading-snug font-bold text-white">
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
        <div className="flex-1 bg-slate-300">
          <Canvas>
            <color attach="background" args={["#1E1E1E"]} />
            <OrbitControls enableZoom={false} />
            <Environment preset="sunset" />
            <Truck />
            {/* <mesh rotation={[-1.6,0,0]} scale={[6, 8, 10]}>
              <planeGeometry />
              <meshStandardMaterial color="#fff" />
            </mesh> */}
            <ContactShadows />
          </Canvas>
        </div>
      </section>
      {/* Section 1 end */}
      {/* //==============/// */}
      {/* Section 2 */}
      <section className="w-full py-10 px-28 mt-20">
        <div className="w-full flex justify-between">
          <h1 className="text-2xl text-white font-bold">
            Current Trending Games
          </h1>
          <button className="px-4 py-3 rounded-md bg-white/20 text-white">
            SEE ALL
          </button>
        </div>
        <div className="w-full grid gap-10 grid-cols-4 py-10">
          {currentGame.map((items, index) => (
            <Tilt
              key={index}
              className=" overflow-hidden cursor-pointer rounded-xl"
            >
              <div className="w-full overflow-hidden h-[400px] rounded-xl">
                <img
                  src={items.url}
                  className="w-full hover:scale-110 transition-all  overflow-hidden h-full object-cover"
                  alt="image"
                />
              </div>
              <div className="flex gap-3 p-3 justify-center bg-transparent items-center text-white">
                <FaFire size={18} /> <h1 className="text-lg"> 40 Follower</h1>
              </div>
            </Tilt>
          ))}
        </div>
      </section>
      {/* Section 2 end*/}
      {/* //==============/// */}
      {/* Section 3 */}
      <section className="py-10 px-28 w-full">
        <div className="w-full flex justify-center">
          <h1 className="text-center max-w-[600px] text-white font-bold text-2xl w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            debitis exercitationem omnis
          </h1>
        </div>
        <div className="w-full mt-20">
          <h1 className="  text-2xl text-white">Bloom Scene</h1>
          <p className="text-white/80 mt-3 text-sm max-w-[400px] w-full">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
            voluptatem blanditiis atque{" "}
          </p>
        </div>
        <div className="w-full rounded-lg overflow-hidden h-[500px] my-14">
          <img
            src="https://www.gamespot.com/a/uploads/original/1575/15759911/3756719-marvel_sspider-man_milesmorales_20201023193836.jpg"
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      {/* Section 3 end*/}
      {/* //==============/// */}
      {/* Section 4 */}
      <section className="py-20 px-28 w-full">
        <div className="w-full flex items-center flex-col gap-4">
          <h1 className="text-center max-w-[600px] text-white font-bold text-2xl w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            debitis exercitationem omnis
          </h1>
          <p className="max-w-[500px] w-full text-sm text-white/70 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            amet consectetur adipisicing omnis
          </p>
        </div>
        <div className="w-full flex justify-center gap-20 flex-wrap mt-20">
          {typeOfProjects.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-5">
              <div className=" w-16 h-16 rounded-full flex justify-center items-center bg-white">
                {item.icon}
              </div>
              <h1 className="text-white ">{item.text}</h1>
            </div>
          ))}
        </div>
      </section>
      {/* Section 4 end*/}
      {/* //==============/// */}
      {/* Section 5 */}
      <section className="mt-20 py-20 px-28 w-full">
        <div className="w-full flex items-center flex-col gap-4">
          <h1 className="text-center max-w-[600px] text-white font-bold text-2xl w-full">
            Our Projects
          </h1>
          <p className="max-w-[500px] w-full text-sm text-white/70 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="w-full grid lg:grid-cols-[500px_minmax(500px,_1fr)_300px]  justify-center gap-3  flex-wrap mt-20">
          {ourProjects.map((item, index) => (
            <div
              key={index}
              className={`p-4  h-[250px] rounded-xl  overflow-hidden items-center`}
            >
              <img
                src={item.url}
                className="w-full h-full rounded-xl object-cover"
                alt=""
              />
              <h1 className="text-white ">{item.text}</h1>
            </div>
          ))}
        </div>
        <div className="w-full grid grid-cols-[300px_minmax(500px,_1fr)_500px] justify-center gap-3  flex-wrap m">
          {ourProjects.map((item, index) => (
            <div
              key={index}
              className={`p-4  h-[250px] rounded-xl  overflow-hidden items-center`}
            >
              <img
                src={item.url}
                className="w-full h-full rounded-xl object-cover"
                alt=""
              />
              <h1 className="text-white ">{item.text}</h1>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center p-4">
          <button className="px-4 py-3 rounded-md bg-white/20 text-white">
            SEE ALL
          </button>
        </div>
      </section>
    </section>
  );
};

export default LandingPage;
