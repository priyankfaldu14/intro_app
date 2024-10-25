import React from 'react'
import { useForm } from 'react-hook-form'

function FormValidate() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const savedata = (data) => {
        console.log(data);
    }
    console.log(errors);


    return (
        <form action="" className='p-5' onSubmit={handleSubmit(savedata)}>
            <label htmlFor="">Email</label> <br />
            <input type="email" {...register("email", {
                required: "Email is required", pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email"
                }
            })} /> <br />
            <span className='text-danger'>{errors?.email?.message}</span> <br />
            <label htmlFor="">Password</label> <br />
            <input type="password" {...register('password', {
                required: "Password is required", minLength: {
                    value: 10, message: "Minimum is 10"
                }
            })} /> <br />
            <span className='text-danger'>{errors?.password?.message}</span> <br />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default FormValidate