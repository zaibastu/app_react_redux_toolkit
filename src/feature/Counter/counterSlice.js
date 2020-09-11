import {createSlice} from '@reduxjs/toolkit';

export const trainerSlice = createSlice({
    name:"trainer",
    initialState:{
        value:0,
        experience:[""],
        trainer:[""],
        loading:false,
        hasError:false
    },
    reducers:{
        increment: state=> {
            state.value+=1;},
        decrement: state=>{
            state.value-=1;
        },
        addElement: state =>{
           state.experience.push("");
           console.log("ho cliccato add lista",state.experience.length);
        },
        removeElement: state=>{
            state.experience.pop();
           console.log("ho cliccato remove lista",state.experience.length);
        },
        getTrainer: state=>{
            state.loading=true;
        },
        getTrainerSuccess:(state,{payload})=>{
            state.trainer={payload};
            state.hasError=false;
            state.loading=false;
        },
        getTrainerFailure: state=>{
            state.hasError=false;
        }
    }
});
export const {increment,decrement,addElement,removeElement,getTrainer,getTrainerFailure,getTrainerSuccess} = trainerSlice.actions;

export const selectCount = state => state.trainer.value;
export const selectExperience = state => state.trainer.experience;
export const selectTrainer = state => state.trainer.trainer;

export default trainerSlice.reducer;

export const fetchTrainer =()=> {
    return async dispatch => {
      dispatch(getTrainer())
  
      try {
        const url= `${process.env.PUBLIC_URL}/config.json`;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        console.log("data",data.trainer);
        dispatch(getTrainerSuccess(data.trainer));
      } catch (error) {
        dispatch(getTrainerFailure())
      }
    }
  }