import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import SliderContent from '../slider_content/slider_content';
import {selectTime,fetchTimeImages,selectImages} from '../../../feature/ImageSlider/imageSliderSlice';
import './slider.css';
const Slider = ()=>{
    const dispatch = useDispatch();
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
                />
            )
        });
        return list;
    }
    return (
        <div className="list-wrapper">
            {buildListSlider()}
        </div>
    );
    

}
export default Slider;