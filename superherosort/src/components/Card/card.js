import React from "react";
import "./card.css";

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
        </div>
        
    );
}

export default Card;
