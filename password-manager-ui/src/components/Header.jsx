
import React from "react";
import '../css/Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from '@fortawesome/free-solid-svg-icons';


function Header() {
    return (
        <div>
        <div className="header">
            <div className="headerTitle">
                Password
            </div>
            <div> 
                <FontAwesomeIcon icon={faCog}  className="downIcon" />
            </div>
        </div>
        <ColoredLine color="grey" />
        </div>
    );
}

const ColoredLine = ({ color }) => (
    <hr
        style={{
            width: '65vw',
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

export default Header;