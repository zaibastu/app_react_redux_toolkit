import {createSlice} from '@reduxjs/toolkit';
import Spinning from '../../images/spinning.jpg';
import Boxe from '../../images/boxe2.jpg';
import Judo from '../../images/judo.jpg';

export const imageSliderSlice = createSlice({
    name:"imageSlider",
    initialState:{
        isActive:false,
        setTime:null,
        hasError:false,
        isLoading:false,
        value:[{course:"spinning",value:Spinning},{course:"boxe",value:Boxe},{course:"judo",value:Judo}]
    },
    reducers:{
        getImage: state =>{
        state.isLoading=true;
        },
        getImageSuccess:(state,{payload})=>{
            state.setTime=payload;
            state.isActive=true;
            state.hasError=false;
            state.isLoading=false;
        },
        getImageFailure: state=>{
            state.hasError=true;
            state.isLoading=false;
        }
    }
});

export const {getImage,getImageFailure,getImageSuccess}= imageSliderSlice.actions;
export const selectImages = state =>state.imageSlider.value;
export const selectTime = state=>state.imageSlider.setTime;
export default imageSliderSlice.reducer;

export const fetchTimeImages =()=>{
    return async dispatch =>{
        dispatch(getImage())
        try {
            const url= `${process.env.PUBLIC_URL}/config.json`;
            console.log(url);
            const response = await fetch(url);
            const data = await response.json();
            console.log("data",data.setTime);
            dispatch(getImageSuccess(data.setTime));
          } catch (error) {
            dispatch(getImageFailure())
          }
        }
}