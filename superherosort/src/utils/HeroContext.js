import React from "react";
import heroes from "../heroes.json";

const HeroContext = React.createContext({
    id: "",
    name: "",
    alias: "",
    team: ""
});

export default HeroContext;
//need to figure out where to map through the JSON file