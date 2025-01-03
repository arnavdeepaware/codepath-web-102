import React from "react";

const Card = (props)=> {
    return(
        <div className="card">
            <img src={props.imageSrc} alt={props.title} className="card-image" />
            <h3 className="card-title">{props.title}</h3>
            <p className="card-description">{props.descripiton}</p>
            <button className="card-button">View Menu</button>
        </div>
    )
}

export default Card;