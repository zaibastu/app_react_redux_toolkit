import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import SliderContent from '../slider_content/slider_content';
import {selectTime,fetchTimeImages,selectImages} from '../../../feature/ImageSlider/imageSliderSlice';
import './slider.css';
const Slider = ()=>{
    const dispatch = useDispatch();
    const [x,setX]=useState(0);
    useEffect(()=>{
    dispatch(fetchTimeImages());
    },[]);
    const list_images=useSelector(selectImages);
    const setTime=useSelector(selectTime);
    console.log("list_images",list_images);
    console.log("setTime",setTime);
    const buildListSlider = ()=>{
        let list=[];
        list_images.map((item, index) => {
            list.push(
                <SliderContent
                    course={item.course}
                    value={item.value}
                    index={index}
                    key={index}
                    x={x}
                />
            )
        });
        return list;
    }
    const goLeft = ()=>{ 
        x===0?setX(-800*(list_images.length-1)):setX(x+800);
    }
    const goRight = ()=>{ 
        (x===-800*(list_images.length-1))?setX(0):setX(x-800);
    }
    return (
        <div className="list-wrapper">
                {buildListSlider()}
                <button className="goLeft" onClick={goLeft}>
                <i class="fas fa-chevron-left" style={{color: "white"}}></i>    
                </button>
                <button className="goRight" onClick={goRight}>
                  <i class="fas fa-chevron-right" style={{color: "white"}}></i>
                </button>
        </div>
    );
    

}
export default Slider;