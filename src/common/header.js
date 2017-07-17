/**
 * Created by vijaypawar on 03/07/17.
 */

import React from 'react';
import {
    Link
} from 'react-router-dom';
import logo from '../images/instarem_logo.png'
import profileIcon from '../images/group.png'

const Header_Navbar = (match) => (
    <div className="headerTop">
        <div className="Pagewraper">
            <div className="headerTopLogo">
                <img src={logo} alt=""/>
            </div>
            <div className="headerTopMenu">
                <div className="headerTopRight">
                    <img className="headerTopRight_profileIcon" src={profileIcon} alt=""/>
                    <p>Rajat Sharma</p>
                </div>
                <ul>
                    <li>
                        <Link to="/remitters">Remitters</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default Header_Navbar;
