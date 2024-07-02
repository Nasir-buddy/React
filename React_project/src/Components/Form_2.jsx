import React from 'react'
import { useForm } from 'react-hook-form'

function Form_2({handleFormSubmitData}) {
  const {register, handleSubmit, reset} = useForm()
  const handleformsubmit= (data) => {
    handleFormSubmitData(data);
    reset();
  }
  return (
    <div className='mt-10 flex gap-10 justify-center'>
      <form action="" className='flex gap-10' onSubmit={handleSubmit(handleformsubmit)}>
        <input {...register('name')} className='px-2 py-1 text-base font-semibold outline-none rounded-md' type="text" placeholder='name'/>
        <input {...register('email')} className='px-2 py-1 text-base font-semibold outline-none rounded-md' type="text" placeholder='email'/>
        <input {...register('image')} className='px-2 py-1 text-base font-semibold outline-none rounded-md' type="text" placeholder='image url'/>
        <input className='bg-blue-400 rounded-md text-white font-semibold px-2 py-1' type="submit" />
      </form>
    </div>
  )
}

export default Form_2