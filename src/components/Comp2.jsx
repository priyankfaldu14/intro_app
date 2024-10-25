import React from 'react'
import { useSelector } from 'react-redux'

function Comp2() {
    const state = useSelector(state=>state)
    console.log(state);
    
  return (
    <div>
        <h1>{state.counter.count}</h1>
    </div>
  )
}

export default Comp2