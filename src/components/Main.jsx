import React from "react";
import './Main.css';

export default function Main() {
    return (
        <>
            <div className="main-container">
                <div className="main-content">
                    <h1>Hello, I'm Heesoo</h1>
                    <h1>A Full-stack Web Developer</h1>
                </div>
                <img src="/girl.jpg" alt="" width={"800px"}/>
            </div>
            <button className="main-btn">start</button>
        </>
    )
}