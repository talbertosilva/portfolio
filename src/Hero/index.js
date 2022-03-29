import React from 'react'

import TextLoop from "react-text-loop";

import {AiOutlineSmile} from 'react-icons/ai'

import './Hero.css';

export const Hero = () => {
    return (
        <div id='hero' className='heroSection'>
            <p id='hoverme'>try hovering my name <AiOutlineSmile size={16}/></p>
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

        </div>
    )
}
