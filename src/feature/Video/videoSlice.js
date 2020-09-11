import {createSlice} from '@reduxjs/toolkit';


export const videoSlice = createSlice({
    name:"videoList",
    initialState:{
        loading: false,
        hasErrors: false,
        value:[],

    },
    reducers:{
        getVideo: state=>{
            state.loading=true;
        },
        getVideoSuccess: (state,{payload})=>{
        state.value = payload;
        state.loading=false;
        state.hasErrors=false;
        },
        getVideoFailure: state =>{
            state.loading=false;
            state.hasErrors=true;
        }
    }
});
export const {getVideo,getVideoSuccess,getVideoFailure} = videoSlice.actions;
export const selectVideo = state => state.videoList.value;
export default videoSlice.reducer;
export const fetchVideo =()=> {
    return async dispatch => {
      dispatch(getVideo())
  
      try {
        const url= `${process.env.PUBLIC_URL}/config.json`;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        console.log("data",data.videoList);
        dispatch(getVideoSuccess(data.videoList));
      } catch (error) {
        dispatch(getVideoFailure())
      }
    }
  }


/*export function apiMiddleware ({dispatch}){
    return function(next) {
        return function(action){
            switch(action.type){
                case
                fetchSuccess:
                const url = `${process.env.PUBLIC_URL}/config.json`;
                fetch(url)
                .then(response =>response.json())
                .then(json=>dispatch(fetchSuccess(json)))
            }
            return next(action);

        };
    };
}
*/

