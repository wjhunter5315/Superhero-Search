import React from "react";
import "./card.css";

function Card () {
    return (
        <li className="list-group-item"></li>
    )
}

export default Card;

// class Card extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             alias: "",
//             team: ""
//         };
//     }

// }

const heroes = [
    {
        name: "Tony Stark",
        alias: "Ironman",
        team: "Avengers"
    },
    {
        name: "Natasha Rominoff",
        alias: "Black Widow",
        team: "Avengers"
    },
    {
        name: "Bruce Banner",
        alias: "The Hulk",
        team: "Avengers"
    },
    {
        name: "Steve Rogers",
        alias: "Captain America",
        team: "Avengers"
    },
    {
        name: "Jean Grey",
        alias: "Phoenix",
        team: "X-Men"
    },
    {
        name: "Scott Summers",
        alias: "Cyclops",
        team: "X-Men"
    },
    {
        name: "Clarice Ferguson",
        alias: "Blink",
        team: "X-Men"
    },
    {
        name: "Piotr Rasputin",
        alias: "Colossus",
        team: "X-Men"
    },
    {
        name: "Matt Murdock",
        alias: "Daredevil",
        team: "Defenders"
    },
    {
        name: "Danny Rand",
        alias: "Iron Fist",
        team: "Defender"
    }
]