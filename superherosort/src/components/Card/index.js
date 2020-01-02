import React from "react";
import "./style.css";

function Card (props) {
    return (
        <div className="card">
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Alias:</strong> {props.alias}
                    </li>
                    <li>
                        <strong>Team:</strong> {props.team}
                    </li>
                </ul>
            </div>
            <span onClick={() => props.removeHero(props.id)} className="remove">
                𝘅
            </span>
        </div>
        
    );
}

export default Card;
