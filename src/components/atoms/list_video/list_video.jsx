import React,{useEffect} from 'react';
import ListElement from '../list_element_video/list_video_element';
import {selectVideo,fetchVideo} from '../../../feature/Video/videoSlice';
import{useSelector,useDispatch} from 'react-redux';

const List = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(fetchVideo());
    },[]);
    
    const list_store=useSelector(selectVideo);
   
    console.log("list_store",list_store);
    const buildListVideo = ()=>{
        
       let list = [];
            list_store.map((item, index) => {
                list.push(
                    <ListElement
                        title={item.title}
                        value={item.value}
                        index={index}
                        key={index}
                        
                    />
                )
            });
            return list;
    }
return(
    <div >
        {buildListVideo()}
    </div>
);



}
export default List;