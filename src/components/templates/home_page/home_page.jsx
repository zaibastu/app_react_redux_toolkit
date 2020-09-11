import React from 'react';
import './home_page.css';
import Button from '../../atoms/button/button_3d_home/button_3d_home';

const Home = ()=>{
return(
    <div className='home-container'>
        <h3>
            Benvenuto nella Home page del sito. Qui potrai ricevere tutte le info di qui hai bisogno. 
        </h3>
        <span>
            Clicca di sotto per ricevere le info sui corsi o sui costi.
        </span>
        <Button/>
    </div>
    
    
);

}
export default Home;