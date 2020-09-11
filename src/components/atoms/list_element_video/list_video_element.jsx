import React from 'react';
import './list_video_element.css';
import ReactPlayer from 'react-player';

const videoElement = ({value,title})=>{
    console.log("value",value);
    return (
        <div >
            {title}
            <ReactPlayer 
            url={value}
            />
        </div>
        
    );
}
export default videoElement;