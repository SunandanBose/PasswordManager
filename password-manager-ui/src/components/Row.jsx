import React from "react";
import '../css/Row.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons';

function hide(data){
    let length = data.length;
    let password = '*'
    return password.repeat(length);
}


function Row(props) {
    return (
        <div>
            <div className="row">
                <div className="rowUrl">
                    {props.url}
                </div>
                <div> 
                    {hide(props.password)}
                    <FontAwesomeIcon icon={faEye}  className="passwordToggleIcon" />
                </div>
        </div>

        </div>
    );
}

export default Row;