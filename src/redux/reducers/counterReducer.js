import { DECREMENT, INCREMENT } from "../types/type";

const defaultState={
    count:0
}

export const counterReducer =(state=defaultState,action)=>{
    console.log(state,action);
    switch (action.type) {
        
        case INCREMENT:
            console.log(action);
            return {
                count:state.count+1
            }

        case DECREMENT:
            console.log(state,action);
            
            return {
                count:state.count-1
            }
    
        default:
            return state;
    }
}