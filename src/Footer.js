import React from 'react';
import './Footer.css';


function Footer(props) {
    return (
        <footer className='footer lateral-padding'>
            <ul className='footer__list text--highlight'>
                <li className='footer__item'>Soluciones</li>
                <li className='footer__item'>Casos de éxito</li>
                <li className='footer__item'>Contáctanos</li>
            </ul>
        </footer>
    );
}

export default Footer;