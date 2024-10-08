import React from 'react'
import frame1 from '../../assets/images/Frame1.png'
import frame2 from '../../assets/images/Frame2.png'
import frame3 from '../../assets/images/Frame3.png'
import frame4 from '../../assets/images/Frame4.png'
import logo from '../../assets/images/logo.png'
import unnpuis from '../../assets/images/unnpuis.png'
import nlogo from '../../assets/images/n.png'
import force from '../../assets/images/force.png'
import social from '../../assets/images/Social.png'
import copyright from '../../assets/images/Copyright Circle.png'

const Footer = () => {
  return (
    <footer className='px-6 lg:px-12 xl:px-24 bg-[#F0F0F6] flex-col xl:flex-row'>
      <div className='flex justify-center items-center '>
        <div className='md:grid hidden md:grid-cols-2 lg:grid-cols-4 gap-[8.3rem]'>
            <img src={frame1} alt='logos'/>
            <img src={frame2} alt='logos'/>
            <img src={frame3} alt='logos'/>
            <img src={frame4} alt='logos'/>
        </div>
      </div>

      <div className='flex flex-col'>
         <div className='py-9 flex justify-center  lg:justify-start'>
            <img src={logo} alt='logo'/>
         </div>
         <div className='flex justify-center flex-col  lg:flex-row  items-center lg:justify-between py-4 '>
            <div className='flex flex-col  gap-6'>
                <div className=''>
                  <img className='ml-[1.2rem] lg:ml-0' src={unnpuis} alt='unnipus'/>
                  <p className='text-[#767676] text-xs'>4.5/5 Rating On Lorem </p>
                </div> 
                <div>
                  <img className='ml-[1.8rem] lg:ml-0' src={nlogo} alt='unnipus'/>
                  <p className='text-[#767676] text-xs'>4.5/5 Rating On Lorem </p>
                </div>
                <div>
                  <img className='ml-[1.7rem] lg:ml-0' src={force} alt='unnipus'/>
                  <p className='text-[#767676] text-xs'>4.5/5 Rating On Lorem </p>
                </div>
            </div>


            <div className='flex gap-[10.4rem] mt-12 text-center lg:text-left lg:mt-[-.9rem]  flex-col lg:flex-row'>
              <div>
                <h2 className='font-bold text-xl'>Quick Links</h2>
                <ul className='mt-5 flex flex-col gap-2'>
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Education</li>
                    <li>Projects</li>
                    <li>Recommendations</li>
                </ul>
              </div>
              <div>
                <h2 className='font-bold text-xl'>Portfolio</h2>
                <ul className='mt-3 flex flex-col gap-2'>
                    <li>Frontend Development</li>
                    <li>Backend Development</li>
                    <li>Website Design</li>
                    <li>Machine Learning</li>
                    <li>Problem Solving & DSA</li>
                </ul>
              </div>
              <div >
                <h2 className='font-bold text-xl'>Connect</h2>
                 <img className='mt-5' src={social} alt='social'/>
              </div>
            </div>
          
         </div>
      </div>
      <div className='py-10 lg:py-3 lg:pb-8'>
        <p className='text-[#767676] text-[0.939rem] flex  justify-center items-center gap-4'><img src={copyright} alt='copyright'/><span>2024 Copyright, All right reserved</span></p>
      </div>
    </footer>
  )
}

export default Footer
