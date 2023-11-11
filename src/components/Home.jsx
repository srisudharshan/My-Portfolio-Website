import React from 'react'
import heroImg from '../assets/images/heroImg.jpg';
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="home
    " className='h-screen w-full bg-gradient-to-b from-black  via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-8 md:flex-row'>
            <div  className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer    
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                Full-stack web developer with over 2 years of experience analyzing, designing, developing, and integrating front-end & back-end-based
                applications, Possesses knowledge of web applications using HTML, CSS, 
                TypeScript, AngularJS, Java and Spring Boot. Key achievement: collaborated with 5+ engineering and design teams to integrate external 
                APIs into web pages and applications.
                </p>
            
            <div>
             <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                Portfolio 
                <span className='group-hover:rotate-90 duration-300'> <MdOutlineKeyboardArrowRight size={25} className='ml-1'/> </span>
             </Link>
             </div>
             </div>
             <div>
              <img src={heroImg} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
             </div>
        </div>
    </div>
  )
}

export default Home