import { EDITUSER, GETUSER } from "../types/type";

const defaultState ={
    users :[],
    count:0,
    editObj:{}
}

export const userReducer =(state=defaultState,action)=>{
    switch (action.type) {
        case GETUSER:
            console.log(state,action);
            return {
                ...state,users:[...action.data]
            };
            
        case EDITUSER:{
            console.log(action);
            
            return{
                ...state,editObj:action.obj
            }
        }
        default:
            return state;
    }
}