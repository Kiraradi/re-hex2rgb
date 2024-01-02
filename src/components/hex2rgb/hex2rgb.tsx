import { useState, ChangeEvent } from 'react';
import { hexToRGBConvert } from '../../services/hexToRGBConverter';

import './hex2rgb.css'

export default function Hex2rgb() {
    const StartColor = '#FFFFFF';

    const [stateColor , setStateColor ] = useState(hexToRGBConvert(StartColor));
    
    const changeStateColor = (event : ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      
      if (value.length === 7) {
        const rgbColor = hexToRGBConvert(value);
        setStateColor(rgbColor ? rgbColor : 'Ошибка');
      }
    }

    const styleBackground = {
      background: `${stateColor === 'Ошибка'? '#FF0000' : stateColor}`
    }

    
    
  return (
    <div 
    className='hex2rgb'
    style={styleBackground}
    >
        <form className='hex2rgb_form'>
            <input 
              className='hex2rgb_input'
              type="text"
              defaultValue={StartColor}
              onInput={changeStateColor}
              
            />
        </form>
        <div 
        className='converted-color'
        >
          {stateColor}
        </div>
    </div>
  )
}

