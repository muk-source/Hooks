import React, { useState } from 'react'

function Checkbox() {
    const [liked,setLiked] = useState(true)
    const handleClick = () => {
        setLiked(!liked)
    }
  return (
    <>
    <input type='checkbox' checked={liked} onChange={handleClick}/>
    <div>you {liked ? "liked" : "unliked"}</div>
    </>
  )
}

export default Checkbox