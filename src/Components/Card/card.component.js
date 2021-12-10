import React from "react";
import './card.styles.css';

const Card = (props) => {
    return ( 
        <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="" srcset="" />
            <p>{props.monster.name}</p>
        </div>
     );
}
 
export default Card;