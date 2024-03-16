import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementAsync, incrementByAmount } from './store/reducers/counterSlice';

function App() {
  const { value } = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  return (
    <div className='container mx-auto bg-red-300 mt-5 p-10 '>
      <h1 className='text-center font-semibold mb-5 text-5xl'>Counter: {value}</h1>
      <div className='text-center'>
          <button onClick={() => dispatch(increment())} className='border border-gray-400 rounded-lg bg-transparent px-4 py-2 mr-5'>Increment</button>
          <button onClick={() => dispatch(decrement())} className='border border-gray-400 rounded-lg bg-transparent px-4 py-2 mr-5'>Decrement</button>
          <button onClick={() => dispatch(incrementAsync(5))} className='border border-gray-400 rounded-lg bg-transparent px-4 py-2 '>increment by 5</button>
      </div>
    </div>
  )
}

export default App