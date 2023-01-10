import React, { Fragment } from 'react'
import Slider from '@mui/material/Slider';

const PriceRange = (props) => {
    return (
        <>
            <div style={{ width: "15%", padding: "15px" }}>
                <h3>Price range</h3>
                <Slider defaultValue={0} aria-label="Price" valueLabelDisplay="auto" type="range" max={9999} />
            </div>
        </>
    )
}
export default PriceRange