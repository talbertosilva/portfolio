import React from 'react'

import './contact.css'

import { BsFillPersonFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { AiFillInstagram, AiFillBehanceCircle, AiFillLinkedin } from 'react-icons/ai'
import { HiDocumentText } from 'react-icons/hi'

export const Contact = () => {
    return (
        <div id='contact' className='contact'>
            <span>Contact</span>
            <h2 className='name'><BsFillPersonFill fill='#565656'/>Tiago Silva</h2>
            <h2 className='email'><MdEmail fill='#565656'/>tiagoansilva.9@gmail.com</h2>
            <h2 className='resume'><HiDocumentText fill='#565656'/><a href='https://drive.google.com/file/d/17LMBQjv3ERM5U2DIZ0ANq2HIHW2HS9XX/view?usp=sharing' id='resumetext'>Download resume</a></h2>
            <div className='icons'>
                <a href='https://instagram.com/tiago_codesign' target="_blank" rel="noreferrer"><AiFillInstagram id='social' size={32} fill='#383838'/></a>
                <a href='https://www.behance.net/tansgraphi8c82' target="_blank" rel="noreferrer"><AiFillBehanceCircle id='social' size={32} fill='#383838'/></a>
                <a href='https://www.linkedin.com/in/tiago-silva-220641154/' target="_blank" rel="noreferrer"><AiFillLinkedin id='social' size={32} fill='#383838'/></a>
            </div>
        </div>
    )
}