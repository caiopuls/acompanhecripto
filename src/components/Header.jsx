import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

import Logo from '../assets/Logo.svg';

export default function Header() {
    return (
        <div id="header">
            <div className="logo-div">
                <Link to="/">
                <img src={Logo} alt="AcompanheCripto" />
                </Link>
            </div>

            <div className="nav-menu">
                <ul>
                    <Link className="link" to="/coin/bnb">
                    <li>
                        BNB
                    </li>
                    </Link>

                    <Link className="link" to="/coin/ada">
                    <li>
                        ADA
                    </li>
                    </Link>

                    <Link className="link" to="/coin/dogecoin">
                    <li>
                        Dogecoin
                    </li>
                    </Link>

                    <Link className="link" to="/coin/bitcoin">
                    <li>
                        Bitcoin
                    </li>
                    </Link>

                    <Link className="link" to="/coin/ethereum">
                    <li>
                        Ethereum
                    </li>
                    </Link>

                    <Link className="link" to="/coin/tether">
                    <li>
                        Tether
                    </li>
                    </Link>

                    <Link className="link" to="/coin/xrp">
                    <li>
                        XRP
                    </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}