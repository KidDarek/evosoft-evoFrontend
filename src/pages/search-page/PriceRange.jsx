import React, { Fragment } from 'react'
import Slider from '@mui/material/Slider';

const PriceRange = (props) => {
    return (
        <>
            <div style={{ width: "25%" }}>
                <text>Price range</text>
                <Slider defaultValue={0} aria-label="Price" valueLabelDisplay="auto" type="range" max={9999} />
            </div>
        </>
    )
}
export default PriceRange