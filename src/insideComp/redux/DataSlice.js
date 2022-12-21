import { createSlice } from '@reduxjs/toolkit'
import data from "../Service/OutsideRoot"
import params from "../Service/params"
import commends from "../Service/Root"

export const DataSlice = createSlice({
  name: 'dataSource',
  initialState:{
    data:{
        arrange:0,
        subsystem:"",
        commend:"",
        repeat:0,
        delay:0,
        param1:"",
        param2:"",
        param3:"",

    },
    issetted:false,
    DisplayParams:"none",
    DAATAA:[],
    Commends:commends,

        
  },
  reducers: {
    SetParams: (state,action) => {
      state.data.repeat = action.payload.Repeat;
      state.data.delay = action.payload.Delay;
      state.data.param1 = action.payload.Param1;
      state.data.param2 = action.payload.Param2;
      state.data.param3 = action.payload.Param3;
      console.log(state.data.repeat)
      console.log(state.data.delay)
    },
    setcommend: (state,action) => {
    state.data.subsystem = action.payload.Subsystem;
      state.data.commend = action.payload.Commend;
      state.issetted = action.payload.issetted;
    },
    pushData:(state)=>{
        state.data.arrange += 1 ;
      const DATA = {
   
        arrange :  state.data.arrange,
        subsysemName: state.data.subsystem,
        commend: state.data.commend,
        repeat: state.data.repeat,
        delay: state.data.delay,
        param1: state.data.param1,
        param2: state.data.param2,
        param3: state.data.param3,
      
}
        // state.DAATAA.push(data)
        state.DAATAA.push(DATA)
    //     data.push(DATA)

    // state.DAATAA=data
    //  console.log(state.DAATAA);
    //  console.log(data)
    },
    setSubSystem:(state,action)=>{
        state.data.subsystem = action.payload.Subsystem
        console.log(state.data.subsystem)
    },
    SetCommend: (state,action) => {
          state.data.commend = action.payload.Commend;
          state.issetted = action.payload.issetted;
          state.DisplayParams = "flex"
          console.log(state.data.commend);
          console.log(state.issetted);

        },


  },
})

// Action creators are generated for each case reducer function
export const { SetParams,setcommend,pushData,setSubSystem,SetCommend } = DataSlice.actions

export default DataSlice.reducer