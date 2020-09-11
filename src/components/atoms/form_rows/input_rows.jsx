import React from 'react';
import './input_rows.css';
const InputRows = () => {
    
    return (
        <div className='form-row'>
            <div className='form-row-label'>
                <label htmlFor="username">UserName:</label>
            </div>
            <div className='form-row-input'>
                <input type="text" id="username" name="fname" required />
            </div>
        </div>
    );

}
export default InputRows;