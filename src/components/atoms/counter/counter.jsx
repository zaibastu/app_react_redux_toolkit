import React from 'react';
import './counter.css';
import {useSelector,useDispatch} from 'react-redux';
import{increment,decrement,selectCount} from '../../../feature/Counter/counterSlice';
/*const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}
*/
const Counter = () => {
  //  const [state, dispatch] = useReducer(reducer, initialState);
  const  count =useSelector (selectCount);
  const dispatch = useDispatch();
  return (
        <div className='counter'>
            Valutazione: {count}
            <br/>
          <p className="counter-text">Vota</p>
          <button className='counter-button' onClick={() => dispatch(increment())}>+</button>
          <button className='counter-button' onClick={() => dispatch(decrement())}>-</button>
          
        </div>
    );
}
export default Counter;
/*
<div className='counter-button'>
<p>Vota</p>
<button onClick={() => dispatch({ type: 'decrement' })}>-</button>
<button onClick={() => dispatch({ type: 'increment' })}>+</button>
</div>*/