import React, { useEffect, useRef, useState} from 'react'

import './cursor.css'

export const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', () => {
            document.getElementById("cursor").classList.add("hide");
        });
        document.addEventListener('mouseenter', () => {
            document.getElementById("cursor").classList.remove("hide");
        });

        const addLinkEvents = () => {
            document.querySelectorAll('li').forEach((li) => {
                li.addEventListener('mouseover', () => {
                    document.getElementById("cursor").classList.add("hover")
                });
                li.addEventListener('mouseout', () => {
                    document.getElementById("cursor").classList.remove("hover")
                });
            });
        };

        const addImgEvents = () => {
            document.querySelectorAll('img').forEach((img) => {
                img.addEventListener('mouseover', () => {
                    document.getElementById("cursor").classList.add("hoverIMG")
                    setTexto("CLICK")
                });
                img.addEventListener('mouseout', () => {
                    document.getElementById("cursor").classList.remove("hoverIMG")
                    setTexto("")
                });
            });
        }

        addImgEvents();
        addLinkEvents();
    }, []);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const mouseX = clientX - cursorRef.current.clientWidth / 2;
        const mouseY = clientY - cursorRef.current.clientHeight / 2;
        cursorRef.current.style.transform = `translate(${mouseX}px,${mouseY}px)`;
    }

    const [texto, setTexto] = useState("");

    return (
        <div className={'app-cursor'} ref={cursorRef} id="cursor">{texto}</div>
    )
}