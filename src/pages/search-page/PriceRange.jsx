import React, { Fragment } from 'react'
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
//import { products } from '../../db';
import { useState } from 'react';


const PriceRange = (props) => {

    let minV = 0
    let maxV = 9999

    const [value, setValue] = useState([minV, maxV])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const textFieldInput = () => {
        setValue([document.getElementById("outlined-min").value, document.getElementById("outlined-max").value])
    }

    const setPrices = () => {
        props.setSelectedPrice([value[0], value[1]])
        props.filterProducts()
    }

    return (
        <>
            <div style={{ width: "15%", padding: "15px" }}>
                <h3>Price range</h3>
                <div>
                    <TextField id="outlined-min" label="Min price" variant="outlined" value={value[0]} style={{ width: "35%" }} onChange={textFieldInput} />
                    <button style={{ width: "20%", height: "50px", margin: "0px 10px" }} onClick={setPrices}>Filter</button>
                    <TextField id="outlined-max" label="Max price" variant="outlined" value={value[1]} style={{ width: "35%" }} onChange={textFieldInput} />
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