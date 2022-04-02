import React, {useEffect} from 'react'
import { motion } from "framer-motion"

import TextLoop from "react-text-loop";

import { AiOutlineSmile } from 'react-icons/ai'

import { useInView } from 'react-intersection-observer';

import './Hero.css';

export const Hero = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0.2
    });

    useEffect(() => {
        if (!inView) {
            document.getElementById("cursor").classList.remove("hoverText")
        }
    }, [inView]);

    return (
        <div ref={ref} id='hero' className='heroSection'>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { type: 'spring', duration: 5} }} id='hoverme'>try hovering my name <AiOutlineSmile size={16} /></motion.p>
            <motion.div initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0, transition: { type: 'spring', duration: 1.5 } }}>
                <h1>
                    <span id='hovertextoefeito'>I'm Tiago, a</span><br />
                    <TextLoop id='textloop' mask={true} interval={3000} className='textLoop'>
                        <span>UX Designer</span>
                        <span>UI Designer</span>
                        <div className='frontendtext'>
                            <span>Front-end{" "}</span>
                            <span>Engineer</span>
                        </div>
                    </TextLoop>
                </h1>
            </motion.div>
        </div >
    )
}
