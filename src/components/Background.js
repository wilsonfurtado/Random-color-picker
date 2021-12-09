import React from 'react';
import './css/Background.css';

export const Background = (props) => {
    return (
        <>
            <div id='background_container' className='background_container' style={{backgroundColor: props.color}}>
                <h2 id='background_title' className='background_title'>{props.name}</h2>
            </div>
        </>
    )
}