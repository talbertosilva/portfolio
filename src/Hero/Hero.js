import React from 'react'

import TextLoop from "react-text-loop";


import './Hero.css';

export const Hero = () => {
    return (
        <div className='heroSection'>
            <h1>
                I'm Tiago, a<br/>
                <TextLoop className='textLoop'>
                    <span>UX Designer</span>
                    <span>UI Designer</span>
                    <span>Front-end Engineer</span>
                </TextLoop>
            </h1>

        </div>
    )
}
