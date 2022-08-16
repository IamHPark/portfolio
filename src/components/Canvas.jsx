import React, { useEffect, useRef } from "react"
import './Canvas.css'

export default function Main() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height =window.innerWidth;
        const ctx = canvas.getContext("2d");

        // const bg = new Image();
        // bg.src = image;
        // bg.onload = () => {
        //     ctx.drawImage(bg, 0,0);
        // }
    })


    return (
        <>
            <div className={"game-container"}>
                <canvas className="game-canvas" ref={canvasRef} ></canvas>
            </div>
        </>
    )
};