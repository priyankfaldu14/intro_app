import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserAction, updateUserAction } from '../redux/actions/userActions'

function FormApi() {
    const [obj, setobj] = useState({hobbies:[]})
    const [blankObj, setBlankObj] = useState({hobbies:[]})
    const dispatch = useDispatch()
    const state = useSelector(state=>state)
    console.log(state.userData);

    useEffect(() => {
      if(state.userData.editObj){
        setobj({...state.userData.editObj})
      }
    }, [state.userData.editObj])
    
    
    
    const getaData =(e)=>{
        if (e.target.type === 'checkbox') {
          if (e.target.checked) {
            console.log(e.target.value);
            obj.hobbies?.push(e.target.value);
          } else {
            console.log('unchecked', e.target.value);
            obj.hobbies = obj.hobbies.filter((x) => x !== e.target.value)
          }
          console.log(obj.hobbies);
    
          blankObj.hobbies = []
        } else if(e.target.type === 'file'){
            obj[e.target.name] = e.target.files[0]
            console.log(obj);
        }
        else {
          obj[e.target.name] = e.target.value
          blankObj[e.target.name] = ''
        }
        setobj({...obj})
      }
      const saveData =()=>{
        if(obj._id === undefined){
            dispatch(addUserAction(obj))
        }else{
            obj.id = obj._id
            dispatch(updateUserAction(obj))
        }
      } 

  return (
    <form action="" className='w-50 mx-auto shadow-lg p-3'>
    <label htmlFor="" className='d-block'>firstName</label>
    <input type="text" className='w-100' name='firstName' value={obj.firstName} onChange={getaData} />
    <label htmlFor="" className='d-block'>lastName</label>
    <input type="text" className='w-100' name='lastName' value={obj.lastName} onChange={getaData} />
    <label htmlFor="" className='d-block'>city</label>
    <input type="text" className='w-100' name='city' value={obj.city} onChange={getaData} />
    <label htmlFor="" className='d-block'>age</label>
    <input type="number" className='w-100' name='age' value={obj.age} onChange={getaData} />
    <label htmlFor="" className='d-block'>Gender</label>
    <input type="radio" name='gender' onChange={getaData} checked={obj.gender === 'male'} value={'male'} /> Male
    <input type="radio" name='gender' onChange={getaData} value={'female'} checked={obj.gender === 'female'} /> Female <br />
    <label htmlFor="" className='d-block'>Hobbies</label>
    <input type="checkbox" name='hobbies' onChange={getaData} value={'cricket'} checked={obj.hobbies?.includes('cricket')} /> cricket
    <input type="checkbox" name='hobbies' onChange={getaData} value={'football'} checked={obj.hobbies?.includes('football')} /> football
    <input type="checkbox" name='hobbies' onChange={getaData} value={'Tennis'} checked={obj.hobbies?.includes('Tennis')} /> Tennis <br />
    <button type='button' className='btn btn-success mt-2' onClick={saveData}>Save</button>
    </form>
  )
}

export default FormApi