
import { HERO_CONTENT } from "../Constants";
import image from "../assets/image.jpg"
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
<div className="w-full lg:w-1/2">
<div className="flex flex-col items-center lg:items-start">
    <h1 className="pb-16 text-5xl bg-gradient-to-l from-indigo-800 via-slate-600 to bg-pink-700 bg-clip-text text-transparent lg:mt-16 lg:text-8xl" >BRYSON.G</h1>
    <span className="mb-9 text-4xl bg-gradient-to-r from-teal-500  via-slate-500 to-purple-500  bg-clip-text  text-transparent">Tech Hub:</span>
    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl text-transparent">
  Full Stack Developer
</span>
<p className="my-2 max-w-xl font-light tracking-tighter">{HERO_CONTENT}</p>
 </div>
</div>
<div className="w-full lg:w-1/2 lg:p-8 relative">
  <div className="flex justify-center relative">
    <img
      src={image}
      alt="Full Stack Developer"
      className="rounded-lg shadow-lg object-cover w-2/3 md:w-1/2 lg:w-[60%] max-w-[300px] transition duration-300 ease-in-out transform hover:scale-105"
    />
    <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
  </div>
</div>
  


      </div>
    </div>
  );
};

export default Hero;
