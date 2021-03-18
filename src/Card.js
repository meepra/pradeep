import React from "react";
import { NavLink } from "react-router-dom";


function Card(props) {
  return (
    <>
    
      <div className="col-md-4">
        <div className="card">
          <img src={props.imgsrc} className="img-fluid" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title text-canter">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" class="btn btn-primary text-center">
              View More
            </NavLink>
          </div>
        </div>
      
      </div>
    </>
  );
}

export default Card;
