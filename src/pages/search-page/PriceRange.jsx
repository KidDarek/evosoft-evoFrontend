import React from 'react'
import Slider from '@mui/material/Slider';

const PriceRange = () => {
    return (
        <>
            <text>Price range</text>
            <Slider defaultValue={0} aria-label="Price" valueLabelDisplay="auto" max={9999} />
        </>
    )
}
export default PriceRange