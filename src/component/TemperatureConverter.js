import * as React from 'react';
import {useState} from 'react';
import './TemperatureConverter.css';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

function TemperatureConverter() {
    
    const [celsius, setCelsius] = useState();
    const [faren, setFaren] = useState();
    const [inputC, setInputC] = useState("");
    const [inputF, setInputF] = useState("");

    function transToCels(digit) {
        const res = (digit-32)*5/9;
        setInputF("");
        return res;
    }

    function transToFar(digit) {
        const res = digit*9/5 + 32;
        setInputC("");
        return res;
    }

    return ( 
        <div className='TemperatureConverter'>
            <div>
                <h2>Converter</h2>
            <TextField
          label="Температура в градусах Цельсия"
          id="outlined-start-adornment"
          value={celsius}
          onChange={(e) => setInputC(e.target.value)}
          sx={{ m: 1, width: '25ch' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">Celsius</InputAdornment>,
            },
          }}
        />
        <TextField
          label="Температура в градусах Фаренгейта"
          id="outlined-start-adornment"
          value={faren}
          onChange={(e) => setInputF(e.target.value)}
          sx={{ m: 1, width: '25ch' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">Fahrenheit</InputAdornment>,
            },
          }}
        />
            </div>
            <div>
            <Button onClick={() => {setFaren(transToFar(inputC))}} variant="contained">Конвертировать в F</Button>
            <Button onClick={() => {setCelsius(transToCels(inputF))}} variant="contained">Конвертировать в C</Button>
            </div>
        </div>
     );
}

export default TemperatureConverter;