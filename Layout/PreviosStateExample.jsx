import React, { useEffect, useRef, useState } from 'react'

function PreviosStateExample() {
  const[count,setCount] = useState(0)
  const prevCountRef = useRef();
  useEffect(()=>{
    prevCountRef.current = count;
  },[count])
  return (
    <>
        <p className='state-p'>Current Count: {count}</p>
        <p className='state-p'>Previous Count: {prevCountRef.current}</p>
        <button className='btn btn-secondary unique-btn' onClick={()=>setCount(count+1)}  style={{ fontSize: '0.7rem' }}>increment</button>
    </>
  )
}

export default PreviosStateExample