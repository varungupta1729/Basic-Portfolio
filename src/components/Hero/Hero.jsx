import React from "react";
import heroimg from "../../assets/images/heroImg.png";
import arrow from "../../assets/images/arrow.png";
import polygon from "../../assets/images/Polygon 1.png";
import Ellipse12 from "../../assets/images/Ellipse 12.png";
import Ellipse13 from "../../assets/images/Ellipse 13.png";
import Ellipse15 from "../../assets/images/Ellipse 15.png";
import Ellipse16 from "../../assets/images/Ellipse 16.png";
import rec51 from "../../assets/images/Rectangle 51.png";
import rec52 from "../../assets/images/Rectangle 52.png";

import { Link } from "react-router-dom";
const Hero = () => {
  return (
    
      <section id="home" className="w-full relative ">
      <div className="flex w-full ">
        <div className="flex flex-col text-center items-center lg:items-start gap-[4rem] px-10 lg:text-left w-[90%] lg:w-[45%] pl-24 py-[7.9rem]  ">
          <h2 className="text-5xl font-bold leading-tight text-[#2B2B2B]">
            I’m Rayan Adlrdard <br></br>{" "}
            <span className="text-[#ffb400]">Front-end</span> Developer
          </h2>
          <p className="text-[#767676] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </p>
          <Link>
            <button className="flex justify-center items-center gap-2 font-medium bg-[#ffb400] px-7 py-3 mt-2 rounded-[5px] text-[#2B2B2B]">
              HIRE ME <img src={arrow} alt="arrow" />{" "}
            </button>{" "}
          </Link>
        </div>

        <div className="w-[58%]   mt-20  relative hidden lg:flex ">
          <img className="" src={heroimg} alt="girl and a computer" />
        </div>
      </div>

      <div className="absolute z-[-1] bottom-10 right-[6.5rem]"><img src={polygon} alt="poly"/></div>
      <div className="absolute z-[-1] bottom-24 left-[55.3%]"><img src={Ellipse15} alt="poly"/></div>
      <div className="absolute z-[-1] bottom-10 left-[7.8rem]"><img src={Ellipse12} alt="poly"/></div>
      <div className="absolute z-[-1] top-11 left-14"><img src={Ellipse13} alt="poly"/></div>
     
      <div className="absolute z-[-1] top-[4.6rem] left-[51.5%]"><img src={Ellipse16} alt="poly"/></div>
      <div className="absolute z-[-1] top-24 right-[8.2rem]"><img src={rec51} alt="poly"/></div>
      <div className="absolute z-[-1] bottom-[9.4rem] left-[37%]"><img src={rec52} alt="poly"/></div>
    </section>
  );
};

export default Hero;
