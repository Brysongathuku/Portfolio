import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../Constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl font-semibold">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center lg:justify-between">
        
        
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <img
            src={aboutImg}
            alt="About"
            className="rounded-2xl shadow-lg object-cover w-3/4 md:w-[70%] lg:w-[80%] max-w-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>


        <div className="w-full lg:w-1/2 p-4 lg:p-8">
          <p className="text-center lg:text-left text-neutral-400 leading-relaxed">
            {ABOUT_TEXT}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
