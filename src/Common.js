import React from 'react';
import "./Home.css";
import  team from "../src/images/teamwork.svg"
import { NavLink } from 'react-router-dom';

function Common( props) {
    return (
<>

<section id="header">
<div className='container-fluid nav_bg'>
  <div className="row">
      <div className="col-10 mx-auto ">

        <div className="row">
            <div className="col-md-6 order-2  pt-5 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column">
                <h1>{props.name} <strong>Soch Creative Tech</strong></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio, tempora a veniam perferendis fugiat earum asperiores est assumenda voluptates?</p>
                    <NavLink to={props.visit} className="btn-started"> {props.btnName}</NavLink>
            </div>
            <div className="col-md-6 order-2  pt-5 pt-lg-0 order-lg-1">
                <img src={props.imgsrc} alt="img-basic" className="img-fluid animate" />
            </div>
        </div>
      </div>
  </div>    

            </div>

</section>
        

</>        
    );
}

export default Common;
