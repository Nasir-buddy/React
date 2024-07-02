import React from 'react'
import { useForm } from 'react-hook-form'

function ReactHookForm() {
    const {register, handleSubmit} =  useForm()
  return (
    <div>
        <form action='' onSubmit={handleSubmit(data=>console.log(data))}>
            <input {...register('name')} type='text' placeholder='Enter you name'></input>
            <input {...register('email')} type='emial' placeholder='Enter you email'></input>
            <input type='submit'></input>
        </form>
            
    </div>
  )
}

export default ReactHookForm