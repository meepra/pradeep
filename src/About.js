import React from 'react';
import Common from './Common';
import  team from "../src/images/teamwork.svg"

function About() {
    return (
        <div>
        
            <Common
                 name="Why we are Important "
                  imgsrc={team} 
                  visit="/contact" 
                btnName="Contact Now"
            />
        </div>
    );
}

export default About;
