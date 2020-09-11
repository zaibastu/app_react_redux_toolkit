import {configureStore} from '@reduxjs/toolkit';
import trainerReducer from '../feature/Counter/counterSlice';
import userReducer from '../feature/UserForm/useFormSlice';
import registrationUserReducer from '../feature/UserRegistration/userRegistrationSlice';
import videoReducer from '../feature/Video/videoSlice';
import coursesReducer from '../feature/Courses/coursesSlice';
import imageSliderReducer from '../feature/ImageSlider/imageSliderSlice';
/*const rootReducer = combineReducers({
    trainer:trainerReducer,
    user:userReducer,
});
*/
export default configureStore({
    reducer:{
        trainer:trainerReducer,
        user:userReducer,
        registration:registrationUserReducer,
        videoList:videoReducer,
        courses:coursesReducer,
        imageSlider:imageSliderReducer},
    //middleware:[...getDefaultMiddleware(),...apiMiddleware()]
});

