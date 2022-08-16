import React from "react";
import { useNavigate } from "react-router-dom";
import './Main.css';

export default function Main() {
    const navigate = useNavigate();
    const goGame = () => {
        navigate('/game');
    }

    return (
        <>
            <div className="main-container">
                <div className="main-content">
                    <img src="/board.png" alt="" width={ "100%" }/>
                    <div className="main-text">
                        <h1>Hello, I'm Heesoo</h1>
                        <h1>A Full-stack Web Developer</h1>
                    </div>
                </div>
                <img className="start-btn" src="/start.png" alt="" onClick={goGame}/>
                {/* <img src="/girl.jpg" alt="" width={"800px"}/> */}
            </div>

            {/* <button className="main-btn" onClick={goGame}>start</button> */}
        </>
    )
}