import React, {useState} from 'react';
import { colors } from '../data/colors';
import { Presentation } from './Presentation'
import { Background } from './Background';
import { Button } from './Button';

export const DisplayRandomColorPicker = () => {
    const [color, setColor] = useState('#FFC0CB');
    const [name, setName] = useState('Rose');
    const [checkRandomValue, setCheckRandomValue] = useState(9);
    
    const changeColor = () => {
        const valColorsRandomHexadecimal = [];
        const valColorsRandomName = [];
        
        colors.map((color) => {
            valColorsRandomName.push(color.name);
            return valColorsRandomHexadecimal.push(color.hexadecimal);
            
        });
        
        let selectIndexColorDisplay = Math.floor(Math.random() * valColorsRandomHexadecimal.length);

        while(checkRandomValue === selectIndexColorDisplay) {
            selectIndexColorDisplay = Math.floor(Math.random() * valColorsRandomHexadecimal.length);
        }

        setColor(valColorsRandomHexadecimal[selectIndexColorDisplay]);
        setName(valColorsRandomName[selectIndexColorDisplay]);
        setCheckRandomValue(selectIndexColorDisplay);
    }

    return (
        <>
            <Presentation />
            <Background  color={color} name={name} />
            <Button changeColorRandom={changeColor} color={color} />
        </>
    )
}
