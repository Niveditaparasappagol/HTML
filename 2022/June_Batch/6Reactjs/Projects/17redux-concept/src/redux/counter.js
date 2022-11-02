import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    login:true
  },
  reducers: {
    increment: (state) => {   //dont change the state keyword default
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    restart:(state)=>{
      state.count = 0;
    },
    userincrement:(state,action)=>{  //here action is for accessing data provided by user.
          console.log(action.payload);
      state.count += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement,restart,userincrement} = counterSlice.actions;

export default counterSlice.reducer;
