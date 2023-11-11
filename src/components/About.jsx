import React from 'react'

const About = () => {
  return (
    <div name="about"
     className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            Full-stack web developer with over 2 years of experience analyzing,
            designing, developing, and integrating front-end & back-end-based
            applications, Possesses knowledge of web applications using HTML, CSS,
            TypeScript, AngularJS, Java and Spring Boot. 

            </p>
            <br/>
            <p className='text-xl'>
            
            <b>Key achievement:</b> <br />
            Collaborated with 5+ engineering and design teams to integrate external
            APIs into web pages and applications.
            <br />
            <br />
            Developed responsive and interactive web application (Order-to -Cash 
            Application) using Typescript, HTML, and CSS, increasing user engagement by 73%.

            

            </p>
        </div>
    </div>
  )
}

export default About