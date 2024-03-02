import React,{useState} from 'react'


function Counter() {
    const [count,setCount] = useState(0)
    const handleClick = () => {
        setCount(count => count+1)
        setCount(count =>count+1)
        setCount(count => count+1)
    }
  return (
    <>
    <div>Counter - {count}</div>
    <button onClick={handleClick}>Increase Count</button>
    </>
    

  )
}

export default Counter