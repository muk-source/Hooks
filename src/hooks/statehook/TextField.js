import React, {useState} from 'react'

function TextField() {
    const [text,setText] = useState("hello")
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleClick = () => {
        setText("hello")
    }
  return (
   <>
   <input value={text} onChange={handleChange}/>
   <div>You typed : {text}</div>
   <button onClick={handleClick}>Reset</button>
   </>
  )
}

export default TextField