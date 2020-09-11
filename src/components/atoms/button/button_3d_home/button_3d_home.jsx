import React from 'react';
import './button_3d_home.css';
import {useHistory} from 'react-router-dom';

const Button = () =>{
    const history=useHistory();
    const onClickButton = ()=>{
        let path= 'registration';
        history.push(path);
        
        }
    
    return (
    <div>
        <button className='btn-3d-1' onClick={onClickButton}> Clicca per Maggiori informazioni</button>
    </div>
);

}
export default Button;