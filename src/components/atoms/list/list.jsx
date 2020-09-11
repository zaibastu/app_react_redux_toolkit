import React from 'react';
import './list.css';
import { addElement, removeElement, selectExperience } from '../../../feature/Counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import Element from '../list_element/list_element';

const List = () => {
  const list_store = useSelector(selectExperience);
    const buildList = () => {
        let list = [];
        list_store.map((item, index) => {
            list.push(
                <Element
                    value={item}
                    index={index}
                    key={index}
                />
            )
        });
        return list;
    }
    const dispatch = useDispatch();
    console.log('lista', list_store);
    
    return (
        <div>
            <button onClick={() => dispatch(addElement())} >
                Aggiungi competenza
            </button>
            <button onClick={() => dispatch(removeElement())} >
                Rimuovi competenza
            </button>
            {buildList()}
        </div>

    );


}
export default List;