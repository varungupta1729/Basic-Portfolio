import React, { useState } from "react";
import map from '../../assets/images/map.png'
import mail from '../../assets/images/mail.png'
import mobile from '../../assets/images/Mobile.png'
import axios from "axios";
import toast from "react-hot-toast";
const Contact = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      const [errors, setErrors] = useState({
        name: "",
        email: "",
      });
    
      const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const validate = () => {
        const errors = {};
        if (!values.name) errors.name = "Name is required";
        if (!values.email) errors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(values.email))
          errors.email = "Email address is invalid";
        setErrors(errors);
        return Object.keys(errors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
         
          axios.post('http://localhost:5000/forms', values)
            .then(response => {
              setValues({
                name: "",
                email: "",
                subject: "",
                message: "",
              });
              toast.success('Form submitted successfully!');
              console.log('Success:', response.data);
            })
            .catch(error => {
              toast.error('Form submission failed. Please try again.');
              console.error('Error:', error);
            });
        } else {
          toast.error('Please fill out all required fields.');
        }
      };
    

  return (
    <section id="contact" className="px-5 lg:px-24  justify-center items-center bg-[#F0F0F6] pb-14 ">
      <div className="flex justify-center items-center  flex-col xl:flex-row gap-7">

        <div className="w-full lg:w-[52.4rem] ">
          <div className="py-7">
            <h2 className="text-[1.88rem] text-[#2B2B2B] font-bold text-center xl:text-left tracking-[0.06rem]">
              Leave ME Your Info
            </h2>
          </div>
          <form className="px-9 py-7 mt-2 bg-white flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label className="text-lg text-[#767676] font-medium">
                Your Full Name ( Required)
              </label>
              <input
              className=" lg:w-[47.6rem] bg-[#F0F0F6] px-4 h-[3.15rem] rounded-[5px]"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-600 text-sm">*{errors.name}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-lg text-[#767676] font-medium">
                Your Email ( Required)
              </label>
              <input
               className="lg:w-[47.6rem] bg-[#F0F0F6] px-4 h-[3.15rem] rounded-[5px]"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-600 text-sm">*{errors.email}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-lg text-[#767676] font-medium">
                Subject
              </label>
              <input
               className="lg:w-[47.6rem] bg-[#F0F0F6] px-4 h-[3.15rem] rounded-[5px]"
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-lg text-[#767676] font-medium">
                Your Message
              </label>
              <textarea
                 className="lg:w-[47.6rem] bg-[#F0F0F6] p-4 h-[13.1rem] rounded-[5px]" 
                name="message"
                value={values.message}
                onChange={handleChange}
              />
            </div>
            <button className=" cursor-pointer text-left py-4 px-[1.06rem] text-sm font-semibold uppercase bg-[#FFB400] w-[149px] rounded-[5px]" type="submit">Send message</button>
          </form>
        </div>

        <div className="w-full  lg:m-auto flex flex-col justify-center items-center">
          <div className="py-7 w-[23rem] ">
            <h2 className=" text-[1.88rem] text-[#2B2B2B] font-bold text-center xl:text-left tracking-[0.05rem]" >
              Contact Information
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center lg:flex-row gap-2  xl:gap-0 xl:flex-col justify-betwee ">

            {/* Card 1 */}
            <div className="w-[23rem]  bg-white px-6 py-3 mt-2">
                <div className="flex justify-center items-center py-6">
                    <div className="bg-[#FFB400] w-[2.51rem] h-[2.51rem] rounded-full flex justify-center items-center">
                        <img src={map} alt="location"/>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <h4 className="text-[#767676] font-medium text-lg">Country:</h4>
                        <p className="text-[0.95rem] text-[#767676]">Bangladesh</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <h4 className="text-[#767676] font-medium text-lg">City:</h4>
                        <p className="text-[0.95rem] text-[#767676]">Dhaka</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <h4 className="text-[#767676] font-medium text-lg">Streat:</h4>
                        <p className="text-[0.95rem] text-[#767676]">35 Vhatara, Badda</p>
                    </div>
                </div>
            </div>
            {/* card2 */}
            <div className=" w-[23rem] bg-white px-6 py-3 mt-2">
                <div className="flex justify-center items-center py-6">
                    <div className="bg-[#FFB400] w-[2.51rem] h-[2.51rem] rounded-full flex justify-center items-center">
                        <img src={mail} alt="location"/>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <h4 className="text-[#767676] font-medium text-lg">Email:</h4>
                        <p className="text-[0.95rem] text-[#767676]">Youremail@Gmail.com</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <h4 className="text-[#767676] font-medium text-lg">Skype:</h4>
                        <p className="text-[0.95rem] text-[#767676]">@Yourusername</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <h4 className="text-[#767676] font-medium text-lg">Telegram:</h4>
                        <p className="text-[0.95rem] text-[#767676]">@Yourusername</p>
                    </div>
                </div>
            </div>

            {/* card3 */}
            <div className="w-[23rem] bg-white px-6 py-3 mt-2">
                <div className="flex justify-center items-center py-6">
                    <div className="bg-[#FFB400] w-[2.51rem] h-[2.51rem] rounded-full flex justify-center items-center">
                        <img src={mobile} alt="location"/>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <h4 className="text-[#767676] font-medium text-lg">Support services:</h4>
                        <p className="text-[0.95rem] text-[#767676]">15369</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <h4 className="text-[#767676] font-medium text-lg">Office:</h4>
                        <p className="text-[0.95rem] text-[#767676]">+58 (021)356 587 235</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <h4 className="text-[#767676] font-medium text-lg">Personal:</h4>
                        <p className="text-[0.95rem] text-[#767676]">+58 (021)356 587 235</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
