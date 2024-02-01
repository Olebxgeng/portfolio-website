"use client";
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import { saveAs } from "file-saver";
import { motion } from "framer-motion"


const Hero = () => {
    // const saveFile = () => {
    //     saveAs("https://drive.google.com/file/d/1oUh4x1xd7h-mrEAloI2M3gtKS0emVZ1I/view?usp=sharing", "OlebogengSebogodiCV.pdf")
    // }
  return (
    <section >
        <div className="h-[120px] sm:h-[200px]"></div>
        <motion.div initial={{ opacity: 0, scale: 0.5}} animate={{ opacity:1, scale: 1 }} transition={{duration: 0.5}}  className='grid grid-cols-1 sm:grid-cols-12'>
            <div className="col-span-7 place-self-center text-center ml-10 sm:text-left">
                <h1 className='mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm {" "}</span> 
                    <br/>
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Olebogeng Sebogodi',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'a Web Developer',
                        1000,
                        'a Mobile Developer',
                        1000,
                        'a UX/UI Designer',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                Front-End Developer with a love of building beautiful solutions & seeing ideas come to life.
                </p>
                <div>
                    <a href="/OlebogengSebogodiCV.pdf" download="OlebogengSebogodiCV" target="_blank">
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border
                     border-white mt-3'>Download CV</button>
                     </a>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0 max-w-screen-sm:mb-12 ">
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] relative lg:mt-15 lg:mb-32 py-12'>
                    <Image 
                    src="/images/LeboImg.png"
                    alt='Olebogeng'
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full  w-auto h-auto'
                    width={270}
                    height={270}
                    priority
                />
                </div>
            </div>
        </motion.div>
    </section>
    
  )
}

export default Hero