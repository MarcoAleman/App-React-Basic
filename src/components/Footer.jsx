import React from "react";
import img from '../assets/img/logo-DH.png'

function Footer() {
    return(
        <footer  className="pie">
            <nav id="logo">
                <a href="#"><img src={img} alt="Logo Digital House"/></a>
            </nav>
            <nav id="opciones">
                <ul>
                    <li><a href="#">facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;