import React from 'react'

import './works.css'

export const Works = (props) => {
    const {name, url, img, api, react, flappy} = props;

    return (
        <div className='containerWorks'>
            <div className='tech'>
                <h3>{name}</h3>
                <div className='technames'>
                    <span>JavaScript</span>
                    {react ? <span>React</span> : null}
                    {api ? <span>API</span> : null}
                    {flappy ? <span>P5.JS</span> : null}
                    {flappy ? <span>PoseNet</span> : null}
                </div>
            </div>
            <a href={url} target="_blank" rel="noreferrer"><img src={img} alt="project"/></a>
        </div>
    )
}
