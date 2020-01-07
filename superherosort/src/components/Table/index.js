import React from "react";
import "./style.css";
// import Card from "../Card/index.js"
// import Sort from "../Sort/index.js";
// import Filter from "../Filter/index.js";
// import heroes from "../../heroes.json";

function Table(props) {
    return (
        <div className="table table-striped">
            <thread>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Alias</th>
                    <th scope="col">Team</th>
                </tr>
            </thread>
            <tbody>
                <tr>
                    <th scope="row"> {props.id} </th>
                    <td> {props.name} </td>
                    <td> {props.alias} </td>
                    <td> {props.team} </td>
                </tr>
            </tbody>
        </div>
        
    )
}

export default Table;