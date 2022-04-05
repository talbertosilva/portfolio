import React from 'react'

import { BiDownArrowAlt } from 'react-icons/bi'
import { motion } from "framer-motion"

import './Menu.css';

export const Menu = () => {
    return (
        <header>
            <ul className='menuList'>
                <motion.div className='second' initial={{ x: -250 }} animate={{ x: 0, transition: { type: 'spring', duration: 2 } }}>
                    <li id='name'><a href='#hero'>Tiago Silva</a></li>
                </motion.div>
                <motion.div className='second' initial={{ x: 250 }} animate={{ x: 0, transition: { type: 'spring', duration: 2 } }}>
                    <li id='menuItem'><a href='#info'>Info</a></li>
                    <li id='menuItem'><a href='#works'>Work</a></li>
                    <li id='menuItem'><a href='#contact'>Contact</a></li>
                    <li id='menuItem' className='resume'>
                        <a href='https://drive.google.com/file/d/1YWt4cpbwxK3l0OWJre3omBuLFv269YIH/view?usp=sharing'>Resume<BiDownArrowAlt className='icon' size={16} /></a>
                    </li>
                </motion.div>
            </ul>
        </header>
    )
}