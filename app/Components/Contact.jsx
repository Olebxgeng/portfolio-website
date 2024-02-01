import Image from 'next/image'
import Link from 'next/link'
import GitHubIcon from "../../public/github.svg"
import LinkedInIcon from "../../public/linkedin.svg"
import EmailIcon from "../../public/email.svg"
import React from 'react'


const Contact = () => {
  return (
    <section className='mt-24 md:h-96'>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
    <h2 className="text-center text-4xl font-bold text-white mb-8 md:mb-12">Contact Me</h2>
    <div className='flex flex-col text-white text-center md:w-78 mr-auto ml-auto'>
        <p className='w-1/2 mr-auto ml-auto'>I am currently looking for new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, you can contact me on any of the platforms below. 
          I'll try my best to get back to you.</p>
         <div className="flex flex-row gap-5 justify-center mt-6 mb-10">
          <Link href="https://github.com/Olebxgeng"><Image className='w-10 h-5' src={GitHubIcon}  alt='Github Icon Link' /></Link>
          <Link href="https://www.linkedin.com/in/olebogengsebogodi/"><Image className='w-10 h-5' src={LinkedInIcon} alt='LinkedIn Icon Link' /></Link>
          <Link href="mailto:sebogodio@icloud.com"><Image className='w-10 h-5' src={EmailIcon}  alt='Email Icon Link' /></Link>
        </div>
      </div> 
    </section >
  )
}

export default Contact