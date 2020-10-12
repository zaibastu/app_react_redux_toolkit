import React,{useState} from 'react';
import './list_element.css';
const Element = ({value,index}) =>{
 const [text,setText]=useState(value);
    const onChange = (e) => {
        setText(e.currentTarget.value);
        console.log("text.lenght",text.length);
            }

return (
        <div >
            <input className='test' type="text" value={text} onChange={onChange} />
        </div>
    );

}
export default Element;