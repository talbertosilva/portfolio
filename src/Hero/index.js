import React from 'react'

import TextLoop from "react-text-loop";


import './Hero.css';

export const Hero = () => {
    return (
        <div id='hero' className='heroSection'>
            <h1>
                I'm Tiago, a<br />
                <TextLoop id='textloop' mask={true} interval={3000} className='textLoop'>
                    <span>UX Designer</span>
                    <span>UI Designer</span>
                    <div className='frontendtext'>
                        <span>Front-end{" "}</span>
                        <span>Engineer</span>
                    </div>
                </TextLoop>
            </h1>

        </div>
    )
}
