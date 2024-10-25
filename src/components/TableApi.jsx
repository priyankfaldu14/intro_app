import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EDITUSER, GETUSER } from '../redux/types/type'
import { deleteUserAction, getUserAction } from '../redux/actions/userActions'

function TableApi() {
    const dispatch = useDispatch()
    
    const state = useSelector(state=>state)

    
    console.log(state.userData);
    
    const deleteData =(id)=>{
        dispatch(deleteUserAction(id))
    }
    const editData =(id)=>{
        console.log(state.userData.users);
        const editObj = state.userData.users.find((x)=>x._id === id)
        console.log(editObj);
        dispatch({type:EDITUSER,obj:editObj})
    }
  return (
    <table className='table'>
            <thead>
                <tr>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>city</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>hobbies</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.userData.users.map((x,i)=>{
                        return(
                            <tr key={x._id}>
                                <td>{x.firstName}</td>
                                <td>{x.lastName}</td>
                                <td>{x.city}</td>
                                <td>{x.age}</td>
                                <td>{x.gender}</td>
                                <td>{x.hobbies}</td>
                                <td>
                                  <button onClick={()=>editData(x._id)} className='btn btn-warning'>Edit</button>
                                </td>
                                <td>
                                  <button onClick={()=>deleteData(x._id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
  )
}

export default TableApi