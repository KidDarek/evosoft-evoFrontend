import { Checkbox } from '@mui/material'
import React from 'react'

const TagSelector = () => {
    return (
        <>
            <div> Tags</div>
            <div style={{ witdh: "200px" }}>
                <text>Computer</text>
                <Checkbox> tag 1</Checkbox>
            </div>
            <div style={{ witdh: "200px" }}>
                <text>Phone</text>
                <Checkbox> tag 1</Checkbox>
            </div>
            <div style={{ witdh: "200px" }}>
                <text>Microphone</text>
                <Checkbox> tag 1</Checkbox>
            </div>
        </>
    )
}

export default TagSelector
