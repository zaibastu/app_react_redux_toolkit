import React from 'react';
import './input_rows.css';
const PasswordRows = () => {
    
    return (
        <div className='form-row'>
            <div className='form-row-label'>
                <label htmlFor="password">Password:</label>
            </div>
            <div className='form-row-input-password'>
                <input type="password" id="password" name="lname" required />
            </div>
        </div>
    );

}
export default PasswordRows;