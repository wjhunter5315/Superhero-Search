import React from "react";
import "./table.css";
import Card from "../Card/card.js"
import Sort from "../Sort/sort.js";
import Filter from "../Filter/filter.js";

function Table() {
    return (
        <div>
            <Sort/>
            <Filter/>
            <div className="list-group">
                <Card/>
            </div>
        </div>
        
    )
}

export default Table;