"use client"
import React, { useRef} from 'react'
import ProjectsCard from './ProjectsCard'
import { motion, useInView } from "framer-motion"

const projectsData = [
    {
        id: 1,
        title: "Lyriks Music App",
        description: "Spotity clone music app",
        image: "/images/projects/Lyriks.png",
        gitUrl: "https://github.com/Olebxgeng/lyriks",
        previewUrl: "#"
    },
    {
        id: 2,
        title: "Fitness World",
        description: "Fitness Training Website",
        image: "/images/projects/Fitness_World.png",
        gitUrl: "https://github.com/Olebxgeng/fitness-training",
        previewUrl: "https://helpful-nasturtium-dbedc0.netlify.app/"
    },
    {
        id: 3,
        title: "Adventure Time",
        description: "Adventure To-Do list app",
        image: "/images/projects/Adventure_List.png",
        gitUrl: "https://github.com/Olebxgeng/AdventureList",
        previewUrl: "https://myvariousadventures.netlify.app/"

    },
    {
        id: 4,
        title: "Sunnyside",
        description: "Sunnyside landing page",
        image: "/images/projects/SunnySide.png",
        gitUrl: "https://github.com/Olebxgeng/sunnyside-agency-landing-page-main",
        previewUrl: "https://roaring-taiyaki-698853.netlify.app/"
    },
    {
        id: 5,
        title: "Homzy",
        description: "Real Estate Website",
        image: "/images/projects/Real-Estate-Website.png",
        gitUrl: "https://github.com/Olebxgeng/real-estate-website",
        previewUrl: "#"
    },
]

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const cardVariants = {
        initial: {y: 50, opacity:0}, 
        animate: {y: 0, opacity: 1}
    }

  return (
    <section >
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
    <ul ref={ref} className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
        {
            projectsData.map((project, index) => 
            <motion.li 
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
>
                <ProjectsCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image} 
                    gitUrl={project.gitUrl} 
                    previewUrl={project.previewUrl}
                />
            </motion.li>

            )
        }
    </ul>
    </section>
  )
}

export default Projects