import axios from "axios"
import { GETUSER } from "../types/type";

export const getUserAction =()=>{
    return (dispatch)=>{
        axios.get("https://student-api.mycodelibraries.com/api/student/get").then((res)=>{
            console.log(res.data.data);
            dispatch({type:GETUSER,data:res.data.data})
        })
    }
}

export const addUserAction =(obj)=>{

    return (dispatch)=>{
        axios.post("https://student-api.mycodelibraries.com/api/student/add",obj).then((res)=>{
            console.log(res.data);
            dispatch(getUserAction())
        })
    }
}
export const deleteUserAction =(id)=>{

    return (dispatch)=>{
        axios.delete("https://student-api.mycodelibraries.com/api/student/delete?id="+id).then((res)=>{
            console.log(res.data);
            dispatch(getUserAction())
        })
    }
}

export const updateUserAction =(obj)=>{

    return (dispatch)=>{
        axios.post("https://student-api.mycodelibraries.com/api/student/update",obj).then((res)=>{
            console.log(res.data);
            dispatch(getUserAction())
        })
    }
}

