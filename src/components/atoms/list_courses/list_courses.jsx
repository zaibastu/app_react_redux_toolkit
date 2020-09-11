import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {fetchCourses, selectedCourse} from '../../../feature/Courses/coursesSlice';
import CoursesElement from '../list_courses_element/list_courses_element';

const List = ()=>{
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(fetchCourses());
    },[]);
    const list_store = useSelector(selectedCourse);
    console.log("list_store",list_store);
    const buildList = ()=>{
        let list=[];
        list_store.map((item,index)=>{
            list.push(<CoursesElement
                value={item.course}
                index={index}
                key={index}
            />);
        });
        return list;
    }
    return (
        <div>
            {buildList()}
        </div>
    );

}
export default List;

