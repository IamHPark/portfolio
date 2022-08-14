import React from "react";
import Skills from "./Skills";

export default function Projects() {

    const skills = ["Javascript", "HTML", "CSS", "React.js"]
    return (
        <div>
            <h1>My Skills</h1>
            <Skills skills={skills}/>
        </div>
    )
};