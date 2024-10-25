import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT } from '../redux/types/type';
import { counterAction, decrementAction, incrementAction } from '../redux/actions/counterActtion';

function Comp1() {
    const state = useSelector(state=>state)
    const dispatch =useDispatch()
    console.log(state.counter);
    
  return (
    <div>
        {/* <h1>{state.counter.count}</h1> */}
        <button onClick={()=>dispatch(incrementAction({obj:"efefe"}))}>Incremet</button>
        <button onClick={()=>dispatch(decrementAction())}>Incremet</button>
    </div>
  )
}

export default Comp1