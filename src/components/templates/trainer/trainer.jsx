import React from 'react';
import Iac from '../../../images/foto_profilo.jpg';
import './trainer.css';
import Calendar from '../../organisms/calendar/calendar';
import Counter from '../../atoms/counter/counter';
import List from '../../atoms/list/list';

const Trainer = () => {
    return (
        <div className='trainer-wrapper' >
            <div className='trainer-logo'>
                <img src={Iac} alt='' />
            </div>
            <div className='trainer-side-bar'>
                <div className='trainer-side-bar-header'>
                    <p>Info Personali</p>
                    <Counter />
                </div>
                <List />
            </div>
            <div className='calendar-wrapper'>
                <Calendar />
            </div>
        </div>
    );
}
export default Trainer;

