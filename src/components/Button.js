import React from 'react';
import './css/Button.css';

export const Button = (props) => {
    const handleChangeColor = () => {
        props.changeColorRandom();
    }

    return (
        <>
            <button className='button' onClick={handleChangeColor}>Suivant</button>
        </>
    )
}