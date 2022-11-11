import HeroImage from "../assets/heroImage.jpeg";
import { BsBoxArrowRight } from "react-icons/bs";

export const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black
                     via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex
            flex-col items-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-4xl sm:text-7xl font-bold
                        text-white"
          >
            Soy desarrollador Full Stack
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Tengo 2 años de experencia desarrollando y diseñando software. Me
            gusta trabajar en aplicaciones web utilizando tecnologías como
            React, Tailwind, Node y Vue.
          </p>
          <div>
            <button
              className="group text-white w-fit px-6 py-3 my-2
                                flex items-center rounded-md bg-gradient-to-r
                                from-amber-500 to-amber-800 cursor-pointer"
            >Portafolio &nbsp;
              <span className="group-hover:rotate-90 duration-300">
                <BsBoxArrowRight size={22} 
                                 className="ml-1"/>
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="imagen"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
