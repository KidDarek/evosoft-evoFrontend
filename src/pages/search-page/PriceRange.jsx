import React, { Fragment } from 'react'
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
//import { products } from '../../db';
import { useState } from 'react';


const PriceRange = (props) => {

    const [value, setValue] = useState([0, 9999])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const textFieldInput = () => {
        setValue([document.getElementById("outlined-min").value, document.getElementById("outlined-max").value])
    }

    return (
        <>
            <div style={{ width: "15%", padding: "15px" }}>
                <h3>Price range</h3>
                <div>
                    <TextField id="outlined-min" label="Min price" variant="outlined" style={{ width: "35%" }} onChange={textFieldInput} />
                    <button style={{ width: "20%", height: "50px", margin: "0px 10px" }} onClick={""}>Filter</button>
                    <TextField id="outlined-max" label="Max price" variant="outlined" style={{ width: "35%" }} onChange={textFieldInput} />
                </div>
                <div>
                    <Slider
                        getAriaLabel={() => 'Price Range'}
                        value={value}
                        valueLabelDisplay="auto"
                        onChange={handleChange}
                        max={9999}
                        disableSwap
                    />
                </div>
            </div>
        </>
    )
}
export default PriceRange