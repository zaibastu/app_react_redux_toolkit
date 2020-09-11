import React, {useState} from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

const Calendario = () =>{
   const [value, onChange] = useState(new Date());
   return (
      <div>
         <Calendar 
         onChange={onChange}
         value={value}/>

      </div>
   );
}
export default Calendario;