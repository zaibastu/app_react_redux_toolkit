import React from 'react';
import Button from '../../atoms/button/button_3d/button3d.jsx';
import UserForm from '../../atoms/form_rows/input_rows';
import PassWordForm from '../../atoms/form_rows/password_rows';
import './login_form_group.css';

const FormLogin = () => {
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
                <Button value='Login'/>
            </div>
        </form>

    );
}
export default FormLogin;
