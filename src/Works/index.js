import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import { AiFillBehanceCircle, AiFillGithub } from 'react-icons/ai'

import './works.css'

export const Works = (props) => {
    const { name, url, img, api, react, flappy, git, behance, uxui } = props;

    const { ref, inView, entry } = useInView();

    const animation = useAnimation();
    const animationIMG = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring',
                    duration: 2
                }
            })
            animationIMG.start({
                opacity: 1,
                z: 0,
                transition: {
                    type: 'spring',
                    duration: 2
                }
            })
        }

        if (!inView) {
            animation.start({
                opacity: 0,
                y: 250
            })
            animationIMG.start({
                opacity: 0,
                z: -1000
            })
        }
    }, [inView]);

    return (
        <div className='containerWorks'>
            <div ref={ref} className='tech'>
                <motion.h3 animate={animation} className='projectname'>
                    {name}
                    {
                        git ?
                            <a href={git} target="_blank" rel="noreferrer"><AiFillGithub color='#484848' size={24} id='social' /></a>
                            :
                            null
                    }
                    {
                        behance ?
                            <a href={behance} target="_blank" rel="noreferrer"><AiFillBehanceCircle color='#484848' size={24} id='social' /></a>
                            :
                            null
                    }
                </motion.h3>
                <motion.div animate={animation} className='technames'>
                    <span>JavaScript</span>
                    {uxui ? <span>UX/UI</span> : null}
                    {react ? <span>React</span> : null}
                    {api ? <span>API</span> : null}
                    {flappy ? <span>P5.JS</span> : null}
                    {flappy ? <span>PoseNet</span> : null}
                </motion.div>
            </div>
            <motion.a animate={animationIMG} href={url} target="_blank" rel="noreferrer"><img src={img} alt="project" /></motion.a>
        </div>
    )
}
