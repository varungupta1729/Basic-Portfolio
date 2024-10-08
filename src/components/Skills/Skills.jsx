import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal/Modal";

const Skills = () => {
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("http://localhost:5000/skills");

        setData(response.data);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    fetchSkills();
  }, [modalIsOpen]);

  return (
    <section className="px-4 lg:px-24 bg-[#F0F0F6] ">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center pt-14 gap-5 pb-10 w-[85%] text-center">
          <h2 className="text-[2rem] font-bold text-[#2B2B2B]">Skills & Langauges</h2>
          <p className="capitalize w-[100%] lg:w-[43%]  text-[#767676] text-[.94rem]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>
        <div className="flex flex-wrap w-full gap-9 justify-center items-center ">
          {data.map((skill, index) => (
            <div className="w-[24.06rem] h-[19.75rem]  py-9 px-12 bg-white" key={index}>
              <h4 className="text-lg font-medium text-[#2B2B2B] text-nowrap">{skill.category}</h4>
              {skill.skills.map((info, index) => (
                <div className="flex flex-col  mt-[1rem]">
                  <div className="text-[#767676] text-[.94rem] flex justify-between">
                    <span>{info.name}</span> <span className="mr-[0.7rem]">{info.percentage}%</span>
                  </div>
                  <div className="w-full h-[0.4rem] border-[0.5px] flex  items-center  rounded-[30px] border-solid border-[#FFB400]">
                  <div
                    className="bg-[#FFB400] rounded-[30px] m-[0.1rem] h-[0.2rem] "
                    style={{ width: `${info.percentage}%` }}
                  ></div>
                  </div>
                
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
            <button onClick={() => setModalIsOpen(true)} className="bg-[#FFB400] uppercase font-semibold text-sm py-4 px-10 rounded-[5px] my-14" >Add skill</button>
        </div>
      </div>
      {
        modalIsOpen && <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
      }
    </section>
  );
};

export default Skills;
