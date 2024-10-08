import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const Modal = ({ modalIsOpen, setModalIsOpen }) => {
  const [category, setCategory] = useState("");
  const [skills, setSkills] = useState([
    { name: "", percentage: "" },
    { name: "", percentage: "" },
    { name: "", percentage: "" },
    { name: "", percentage: "" },
    { name: "", percentage: "" },
  ]);
  const [errors, setErrors] = useState({});

  const closeModal = () => setModalIsOpen(false);

  const handleInputChange = (index, field, value) => {
    const newSkills = [...skills];
    newSkills[index][field] = value;
    setSkills(newSkills);
  };

  const validate = () => {
    const newErrors = {};
    if (!category) newErrors.category = "Category is required";
    const filledSkills = skills.filter(
      (skill) => skill.name || skill.percentage
    );
    if (filledSkills.length === 0)
      newErrors.skills =
        "At least one skill must be associated with the category";
    filledSkills.forEach((skill, index) => {
      if (!skill.percentage)
        newErrors[`percentage${index}`] = "Proficiency level is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 console.log(errors);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await axios.post("http://localhost:5000/skills", {
          category,
          skills: skills.filter((skill) => skill.name && skill.percentage),
        });
        toast.success("Skills added successfully!");
        closeModal();
      } catch (error) {
        toast.error("Failed to add skills");
      }
    } else {
      toast.error("Please fix the errors in the form");
    }
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.toggle("overflow-y-hidden");
    } else {
      document.body.classList.toggle("overflow-y-hidden");
    }
  }, [modalIsOpen]);

  return (
    <div>
      {modalIsOpen && (
        <div className="fixed inset-0 bg-[#00000080]  flex items-center justify-center z-50 overflow-auto no-scrollbar">
          <div className="bg-white py-[2.25rem] px-[1.5rem] rounded-lg w-[80%] lg:w-[51rem]   mt-[15.2rem]  ">
            <h2 className="text-[2.75rem] text-[#2B2B2B] text-center font-bold mb-4  ">
              Add Skill
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <label className="block text-[1.375rem] text-[#2B2B2B] font-medium mb-1">
                  Domain
                </label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Front End Developer"
                  className="w-full bg-[#F0F0F6] p-5 text-lg text-[#2B2B2B80] font-medium  rounded-[5px] h-[3rem] lg:h-[4.625rem]"
                />
                {errors.category && (
                  <p className="text-red-500 text-sm">*{errors.category}</p>
                )}
              </div>
              <div className="flex gap-[0.9rem] flex-col">
                <label className="block text-[1.375rem] text-[#2B2B2B] font-medium mb-1 ">
                  Skills
                </label>
                <div className="flex gap-[0.8rem]">
                  <h4 className="block w-[100%]  lg:w-[37.91625rem]  text-lg font-medium mb-1 text-[#2B2B2B]">
                    Skills
                  </h4>
                  <h4 className="block w-[30%] lg:w-[9.4rem] text-lg font-medium mb-1 text-[#2B2B2B] ">
                    Proficiency (%)
                  </h4>
                </div>

                {skills.map((skill, index) => (
                  <div>
                  <div key={index} className="w-full flex gap-[0.8rem]">
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) =>
                        handleInputChange(index, "name", e.target.value)
                      }
                      className="w-[100%] lg:w-[37.91625rem]  mr-2  bg-[#F0F0F6] p-5 text-lg text-[#2B2B2B80] font-medium  rounded-[5px] h-[3rem] lg:h-[4.625rem]"
                    />
                    <input
                      type="number"
                      value={skill.percentage}
                      onChange={(e) =>
                        handleInputChange(index, "percentage", e.target.value)
                      }
                      className="w-[30%] lg:w-[9.4rem]  bg-[#F0F0F6] p-5 text-lg text-[#2B2B2B80] font-medium  rounded-[5px] h-[3rem] lg:h-[4.625rem]"
                    />
                  
                  </div>
                  {errors[`percentage${index}`] && (
                      <p className="text-red-500 text-sm">
                        *{errors[`percentage${index}`]}
                      </p>
                    )}
                  </div>
                ))}
                {errors.skills && (
                  <p className="text-red-500 text-sm">*{errors.skills}</p>
                )}
              </div>
              <div className="flex gap-7 justify-center lg:justify-end mt-4">
                <button
                  type="submit"
                  className="bg-[#FFB400] uppercase font-semibold text-sm py-4 px-10 rounded-[5px] "
                >
                  Add Skill
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-[#FF5252] border-[1px] border-[#FF5252] uppercase font-semibold text-sm py-4 px-10 rounded-[5px] "
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
