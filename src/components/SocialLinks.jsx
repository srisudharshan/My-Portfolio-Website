import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonalLinesFill} from "react-icons/bs"

const SocialLinks = () => {

    const links=[
        {
            id:1,
            child:(
                <>LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://linkedin.com',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>GitHub <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://github.com',
        },
        {
            id:3,
            child:(
                <>Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:sri@gmail.com',
            style:'rounded-tr-md'
        },
        {
            id:4,
            child:(
                <>Resume <BsFillPersonalLinesFill size={30}/>
                </>
            ),
            href: '/SriSudharshanResume.pdf',
            style:'rounded-tr-md',
            download:true,
        },
    ]

  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
        <ul>
        {links.map(({id,child,href,download})=>{
                <li key={id} className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] 
                hover:ml-[10px] hover:rounded-md duration-300'>
                 <a href="" className='flex justify-between items-center w-full text-white'>
                    <>LinkedIn <FaLinkedin size={30}/>
                    </>
                 </a>
                </li>
            })}
            
        </ul>
    </div>
  )
}

export default SocialLinks