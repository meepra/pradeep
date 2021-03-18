import React from 'react';
import "./Home.css";
import  team from "../src/images/teamwork.svg"

import Common from './Common';

function Home() {
    return (
<>

<Common  name="We Are Digital Creater " imgsrc={team} visit="/contact"  btnName="Contact Now"/>
        

</>        
    );
}

export default Home;
