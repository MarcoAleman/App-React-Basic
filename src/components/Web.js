import React from 'react';
import Encabezado from './Encabezado.jsx';
import Banner from './Banner.jsx';
import Producto from './Producto.jsx';
import Footer from './Footer.jsx';

function Web(){
    return (
        <div className="container">
            <Encabezado />
            <Banner />
            <Producto />
            <Footer />
        </div>
    )

}

export default Web;