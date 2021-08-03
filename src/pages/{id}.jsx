import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import BitcoinImg from '../assets/Bitcoin.svg';
import InfoCripto from '../components/InfoCripto.jsx';

import '../styles/InfoCripto.scss';



function teste() {
    

    return (  
        <div id="info">
            <Header />

            <div className="view">
                <InfoCripto 
                />
               
            </div>
        </div>
    )
}

export default teste