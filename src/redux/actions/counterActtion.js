import { DECREMENT, INCREMENT } from "../types/type"

export const incrementAction =(a)=>{
    return(dispatch)=>{
        dispatch({type:INCREMENT,obj:a})
    }
    
}
export const decrementAction =()=>{
    return(dispatch)=>{
        dispatch({type:DECREMENT})
    }
    
}