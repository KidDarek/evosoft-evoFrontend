import React from 'react'
import Slider from '@mui/material/Slider';

const PriceRange = () => {
    return (
        <Slider defaultValue={0} aria-label="Price" valueLabelDisplay="auto" maxvalue="9999" />
    )
}
export default PriceRange