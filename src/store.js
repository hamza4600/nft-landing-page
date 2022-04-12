import {configureStore} from '@reduxjs/toolkit'
import { customReducer } from './Reduce'

const store = configureStore({
    reducer: {
        custom: customReducer,
    }
})

export default store