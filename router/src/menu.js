import React from "react";
import "./style.css"
import {Link} from "react-router-dom";

export default function Menu(){
return(
    <nav>
        <Link  to="/"><span className="menu">Home </span></Link>
        <Link to="/profil"><span>profil</span></Link>
        <Link to="/contact"><span>contact </span></Link>
        
    </nav>
)
}