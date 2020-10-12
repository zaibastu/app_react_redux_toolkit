import React from 'react';
import './slider_content.css';
import {useHistory} from 'react-router-dom';

const SliderContent = ({course,value,key,x})=>{
    console.log("value",value);
    console.log("course",course);
    const history= useHistory();
    const handleClick = ()=>{
        history.push(course);
    }
    return (
        <div key={key} className="slide" style={{transform:`translate(${x}px)`}} >
            <img className="images" src={value}  onClick={handleClick}/>
        </div>
    );
    
}
export default SliderContent;