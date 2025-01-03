import React from "react";

const Card = (props)=> {
    return(
        <div className="card">
            <img src={props.imageSrc} alt={props.title} className="card-image" />
            <h3 className="card-title">{props.title}</h3>
            <p className="card-description">{props.description}</p>
            <button className="card-button">
                <a href={props.weblink}         
                   target="_blank" 
                   rel="noopener noreferrer">
                    View Menu
                </a>
            </button>
        </div>
    )
}

export default Card;