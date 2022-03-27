import React from 'react'
import { Link } from 'react-router-dom';

import { BiDownArrowAlt } from 'react-icons/bi'

import './Menu.css';

export const Menu = () => {
    return (
        <header>
            <ul className='menuList'>
                <div className='second'>
                    <li id='menuItem'><Link to="/">Tiago Silva</Link></li>
                    <hr />
                </div>
                <div className='second'>
                    <li id='menuItem'>Work</li>
                    <li id='menuItem'>Info</li>
                    <li id='menuItem'>
                        Resume<BiDownArrowAlt className='icon' size={16}/>
                    </li>
                </div>
            </ul>
        </header>
    )
}