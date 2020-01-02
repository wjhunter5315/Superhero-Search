import React from "react";
import "./style.css";


function Filter (props) {
    
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={() => props.avengersFilter(props.team)} type="button" id="avengersBtn" className="btn btn-secondary">Avengers</button>
            <button onClick={() => props.xmenFilter(props.team)} type="button" id="xmenBtn" className="btn btn-secondary">X-Men</button>
            <button onClick={() => props.defendersFilter(props.team)} type="button" id="defendersBtn" className="btn btn-secondary">Defenders</button>
        </div>
    )

}

export default Filter;