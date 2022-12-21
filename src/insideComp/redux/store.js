
import { configureStore } from "@reduxjs/toolkit";

import DataSlice from "./DataSlice";
import FormSlice from "./FormSlice";



const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//  const store = createStore(reducers,enhancer(applyMiddleware(reduxThunk)))

const store = configureStore({
    reducer:{
        Data : DataSlice,
        Form : FormSlice,
    }
})
export default store;
