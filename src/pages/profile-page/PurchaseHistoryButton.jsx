import React from 'react'
import MUIButton from "@mui/material/Button";

const PurchaseHistoryButton = (props) => {

    const OpenPurchaseHistory = () => {
        props.setPurchaseHistory(true);
    }

    return (
        <MUIButton variant="contained" onClick={OpenPurchaseHistory}> Show Purchase History</MUIButton>
    )
}

export default PurchaseHistoryButton