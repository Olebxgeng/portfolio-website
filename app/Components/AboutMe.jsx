"use client"
import React, { useState, useTransition} from 'react'
import Image from 'next/image'
import Tab from './Tab'

const Tab_Data =[
    {
        title: 'Skills',
        id: 'Skills',
        content: (
            <ul className='list-disc pl-2'> 
                <li>React.js</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>JavaScript</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'Education',
        content: (
            <ul className='list-disc pl-2'>
                <li>Diploma in Information Technology: 2020-2023</li>
                <li>National Certificate in Information Technology: Systems Development: 2017</li>
                <li>Google Certified Project Managemnet Certificate: 2022</li>
            </ul>
        )
    },
    {
        title: 'Experience',
        id: 'Experience',
        content: (
            <ul className='list-disc pl-2'>
                <li>Junior Website Design Developer & Authoring: 02/2019 - Present</li>
                <li>Kofax Forms Designer: 08/2017- 01/2019</li>
            </ul>
        )
    },
]

const AboutMe = () => {
    const [tab, setTab] = useState("Skills")
    const [isPending, startTransition ] = useTransition()

    const handleTabChange = (id) =>{
        startTransition(() => {
            setTab(id)
        })
    }
  return (
    <section className='text-white mt-55'>
        <div className=' md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" alt='about img' width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-lect flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About  Me</h2>
                <p className='text-base lg:text-lg'>
                    I am a front-end developer with a passion for creating interactive & responsive applications. I have experience 
                    working with JavaScript, React, Redux, Next.js, Node.js Html, CSS and Git. I am a fast learner, always eager for 
                    opportunities to extend my knowledge & further challenge myself. I am a team player & love collaborating with others to 
                    build great applications!
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <Tab selectTab={() => handleTabChange('Skills')} active={tab === 'Skills'}>{" "}Skills{" "}</Tab>
                    <Tab selectTab={() => handleTabChange('Education')} active={tab === 'Education'}>{" "}Education{" "}</Tab>
                    <Tab selectTab={() => handleTabChange('Experience')} active={tab === 'Experience'}>{" "}Experience{" "}</Tab>
                </div>
                <div className='mt-8'> 
                    {Tab_Data.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section> 
  )
}

export default AboutMe