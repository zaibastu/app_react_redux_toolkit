import React from 'react';
import './header.css';
import Fit from '../../../images/cropped-fit4you-2.png';
import Button from '../../atoms/button/gradient_button/gradientbutton';

const Header = () => {
  return (
    <div className='layout-header'>
      <img src={Fit}/>
      <div className='hl-list'>
        <Button value='Home'/>
        <Button value='Centro'/>
        <Button value='Corsi' />
        <Button value='Trainer'/>
        <Button  value='Eventi'/>
        <Button value='Video' />
        <Button value='Calendario' />
        <Button value='Promozioni' />
        <Button value='Contatti' />
      </div>
    </div>
  );
}
export default Header;