import React from 'react';
import './Grid.css';


function Grid(props) {
    return (
        <section className='grid lateral-padding'>
            {props.children}
        </section>
    );
}

export default Grid;