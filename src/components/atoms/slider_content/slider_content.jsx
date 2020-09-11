import React from 'react';
import './slider_content.css';

const SliderContent = ({course,value})=>{
    console.log("value",value);
    return (
        <div className="wrapper">
            
            <img src={value}/>
        </div>
    );
}
export default SliderContent;