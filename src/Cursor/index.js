import React, { useEffect, useRef, useState} from 'react'

import './cursor.css'

export const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        document.getElementById("cursor").classList.add("hide");
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
                    setTexto("")
                });
                li.addEventListener('mouseout', () => {
                    document.getElementById("cursor").classList.remove("hover")
                    setTexto("")
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

        const addSvgEvents = () => {
            document.querySelectorAll('#social').forEach((svg) => {
                svg.addEventListener('mouseover', () => {
                    document.getElementById("cursor").classList.add("hover")
                    setTexto("")
                });
                svg.addEventListener('mouseout', () => {
                    document.getElementById("cursor").classList.remove("hover")
                    setTexto("")
                });
            });
        }

        const addTextEvents = () => {
            document.querySelectorAll('#hovertextoefeito').forEach((txt) => {
                txt.addEventListener('mouseover', () => {
                    document.getElementById("cursor").classList.add("hoverText")
                    setTexto("")
                });
                txt.addEventListener('mouseout', () => {
                    document.getElementById("cursor").classList.remove("hoverText")
                    setTexto("")
                });
            });
        }

        addTextEvents();
        addSvgEvents();
        addImgEvents();
        addLinkEvents();
    }, []);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const mouseX = clientX - cursorRef.current.clientWidth / 2;
        const mouseY = clientY - cursorRef.current.clientHeight / 2;
        document.getElementById("cursor").classList.remove("hide");
        cursorRef.current.style.transform = `translate(${mouseX}px,${mouseY}px)`;
    }

    const [texto, setTexto] = useState("");

    return (
        <div className={'app-cursor'} ref={cursorRef} id="cursor">{texto}</div>
    )
}