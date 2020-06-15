import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import GiftCardDisplay from './GiftCardDisplay'


const TargetGiftCards = ({storeName, cardValue}) => {


    return (
        <div>
        <GiftCardDisplay storeName={storeName} cardValue={cardValue} />
        </div>
    );
}

export default TargetGiftCards;
