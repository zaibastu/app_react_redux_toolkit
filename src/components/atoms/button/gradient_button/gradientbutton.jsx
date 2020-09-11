import React from 'react';
import './gradientbutton.css';
import {useHistory} from 'react-router-dom';

const ButtonGradient = ({value}) => {
    const history= useHistory();
    const handleClick = () =>{
        let path = value.toLowerCase();
        history.push(path);    
    }
    return (
            <div>
                <button className='gradient-button-2' onClick={handleClick}> {value}</button>
            </div>
    );
}
export default ButtonGradient;