import {createSlice} from '@reduxjs/toolkit';

export const coursesSlice = createSlice({
    name:"courses",
    initialState:{
        course:[],
        hasError:false,
        loading:false
    },
    reducers:{
        getCourse: state=>{
            state.loading=true;
            
        },
        getCourseFailure: state=>{
            state.hasError=true;
            state.loading=false;
        },
        getCourseSuccess: (state,{payload})=>{
            state.course=payload;
            state.loading=false;
            state.hasError=false;
        }

    }
});

export const {getCourse,getCourseFailure,getCourseSuccess} =coursesSlice.actions;
export const selectedCourse = state=> state.courses.course;
export default coursesSlice.reducer;

export const fetchCourses =()=> {
    return async dispatch => {
      dispatch(getCourse())
  
      try {
        const url= `${process.env.PUBLIC_URL}/config.json`;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        console.log("data",data.courses);
        dispatch(getCourseSuccess(data.courses));
      } catch (error) {
        dispatch(getCourseFailure())
      }
    }
  }

