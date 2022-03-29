import React from 'react'

import { BiDownArrowAlt } from 'react-icons/bi'

import './Menu.css';

export const Menu = () => {
    return (
        <header>
            <ul className='menuList'>
                <div className='second'>
                    <li id='name'><a href='#hero'>Tiago Silva</a></li>
                    <hr />
                </div>
                <div className='second'>
                    <li id='menuItem'><a href='#works'>Work</a></li>
                    <li id='menuItem'><a href='#info'>Info</a></li>
                    <li id='menuItem'><a href='#contact'>Contact</a></li>
                    <li id='menuItem'>
                        Resume<BiDownArrowAlt className='icon' size={16}/>
                    </li>
                </div>
            </ul>
        </header>
    )
}