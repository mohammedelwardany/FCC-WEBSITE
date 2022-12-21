import { createSlice } from '@reduxjs/toolkit'
import data from "../Service/OutsideRoot"
import params from "../Service/params"
import subsystems from "../Service/Root"

export const FormSlice = createSlice({
  name: 'dataSource',
  initialState:{
    
    subsystemId:0,
    commendId:0,
    Params:{},
    textParamDisplay:"none",
    listParamDisplay:"none",
    listItems:[],
    CalenParamDisplay:"none",
    

        
  },
  reducers: {
    pushparams: (state) => {
      
     
    },
    setSubsystemId: (state,action)=>{
        state.subsystemId=action.payload.subsystemids
         console.log("ss",state.subsystemId)
    },
    setCommendId: (state,action)=>{
        state.commendId=action.payload.commendids
        console.log("cc",state.commendId)
        params.map((paramss,index)=>{
          if (paramss.subSystemId==state.subsystemId){
            if(paramss.commandId==state.commendId){
                console.log(params[index])
              if (params[index].paramtype.id==1){
                state.textParamDisplay="flex"
                console.log("11111111111111")
              }
              if (params[index].paramtype.id==2){
                state.listParamDisplay="flex"
                console.log("2222222222222")
                state.listItems=params[index].paramValues
                console.log("this valus",state.listItems)

              }
              if (params[index].paramtype.id==3){
                console.log("11111111111111")
                state.CalenParamDisplay="flex"
              }
            }
          }
  
         })
    }, 
    REset:(state)=>{
      state.textParamDisplay="none"
      state.listParamDisplay="none"
      state.CalenParamDisplay="none"
      state.listItems=[]
    }

  },
})

// Action cREators are generated for each case reducer function
export const { pushparams , setSubsystemId , setCommendId , REset} = FormSlice.actions

export default FormSlice.reducer