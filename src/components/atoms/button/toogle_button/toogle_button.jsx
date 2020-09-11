import React, { useState } from 'react';
import './toogle_button.css';


const ToogleButton = () => {
    const [check, setCheck] = useState(true);
    const onClickButton = () => {
        console.log('checked',check);
        if (check){
            setCheck(false);
        }
        else{
            setCheck(true);
            console.log('sono dentro else');
            
        console.log('ho cliccato valore di checked ', check);
        
        }
        console.log('ho cliccato valore di checked ', check);

    }

    return (
        <div>
            
            <label for="final-toggle1" class="toggle-1">
              <input type="checkbox" id="final-toggle1" class="toggle-1__input" onClick={onClickButton} />
              <span class="toggle-1__button"></span>
            </label>
            
            <div>
                <button className='toggle-2' onClick={onClickButton}></button>
            </div>
        </div>
    );


}
export default ToogleButton;