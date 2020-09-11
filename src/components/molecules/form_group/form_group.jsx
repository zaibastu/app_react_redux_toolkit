import React from 'react';
import Button from '../../atoms/button/button_3d/button3d.jsx';
import UserForm from '../../atoms/form_rows/input_rows';
import PassWordForm from '../../atoms/form_rows/password_rows';
import './form_group.css';

const FormRegistration = () => {
    const onClickButton = (e) => {
        e.preventDefault();
        console.log('ho cliccato dentro il form_group');
        

    }
    return (
        <form onSubmit={onClickButton}>
            <div className='form-row'>
                <UserForm />   
            </div>
            <div className='form-row'>
                <PassWordForm />
            </div>
            <div className='form-position'>
                <Button value='Registra'/>
            </div>
        </form>

    );
}
export default FormRegistration;
