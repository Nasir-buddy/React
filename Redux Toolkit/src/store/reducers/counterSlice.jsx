import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value++
        },
        decrement: (state) => {
            state.value--
        },
        incrementByAmount: (state, action) => {
            console.log(action);
            state.value += action.payload
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        
      dispatch(incrementByAmount(amount))
    }, 2000)
  }

export default counterSlice.reducer