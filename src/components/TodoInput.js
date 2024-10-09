
import React, {useState} from 'react'

function TodoInput(props) {
    const [InputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(InputText)
          setInputText("")
        }
    }
  return (
    <div className="input-container">
        <input type="text" 
        className='input-box-todo' 
        placeholder='Enter your Todo'
        value={InputText}
        onChange={e=>{
            setInputText(e.target.value)
            
        }}
        onKeyDown={handleEnterPress}
        />

        <button className="add-button"
        onClick={()=>{
          props.addList(InputText)
          setInputText("")
        }}>+</button>
        
    </div>
  );
}

export default TodoInput