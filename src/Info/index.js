import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

import './info.css'

export const Info = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.2
  });

    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                x: 0, 
                transition: { 
                    type: 'spring', 
                    duration: 1.5
                }
            })
        }

        if (!inView) {
            animation.start({
                opacity: 0,
                x: -250
            })
        }
        console.log("use effect hook, inInfoView = ", inView);
    }, [inView]);



  return (
    <div ref={ref} id='info' className='info'>
      <motion.div animate={animation}>
        <span >About</span>
        <h2>
          I'm a <span id='boldT'>UX/UI Designer</span> and <span id='boldT'>front-end engineer</span> focused in react framework. <br />
          I have 2 years of experience as web & graphic design freelancer. <br />
          From the beginning of 2022, I started to learn javascript (reactjs) in order to find a job in front-end development. I didn't started learning from zero, since I have a computer science degree, so it helped me a lot.
        </h2>
      </motion.div>

    </div>
  )
}