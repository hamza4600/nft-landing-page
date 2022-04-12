import {createReducer} from '@reduxjs/toolkit';

export const INITIAL_STATE = {
    c:0,
    input:"Hamza",
    
    hamza:{
        name:"Hamza",
        age:22,
        city:"Lahore",
        country:"Pakistan",
        job:"Student",
        salary:0,
        date: `${new Date()}`
    }
};
// inital stata and final state on what action will defined

export  const customReducer = createReducer(INITIAL_STATE, {
    
    increment: (state, action) => ({
        ...state,
        c: state.c + 1
    }),
    incrementByValue: (state, action) => ({
        ...state,
        c: state.c + action.payload
    }),
    decrement: (state, action) => ({
        ...state,
        c: state.c - 1
    }),

    // handel chnages fron input
    update : (state, action) => ({
        ...state,
        input: action.payload
    }),
    remove: (state, action) => ({
        ...state,
        input: ""
    }),

    // example three
    updateUser: (state, action) => ({
        ...state,
        hamza: {
            // ...state.hamza,
            name: action.payload,
            age: action.payload,
            city: action.payload,
            country: action.payload,
            job: action.payload,
            salary: action.payload,
            date: `${new Date()}`, 
        }
    }),
    updateUserName: (state  , action) => ({
        ...state,
        hamza: {
            ...state.hamza,
            name: action.payload,
        }
    }),
    updateUserAge: (state, action) => ({
        ...state,
        hamza: {
            ...state.hamza,
            age: action.payload,
        }
    }),
    updateUserCity: (state, action) => ({
        ...state,
        hamza: {
            ...state.hamza,
            city: action.payload,
        }
    }),
    updateUserCountry: (state, action) => ({
        ...state,
        hamza: {
            ...state.hamza,

            country: action.payload,
        }
    }),
    updateUserJob: (state, action) => ({
        ...state,
        hamza: {
            ...state.hamza,
            job: action.payload,
        }
    }),
    updateUserSalary: (state, action) => ({
        ...state,
        hamza: {
            ...state.hamza,
            salary: action.payload,
        }
    }),
    updateUserDate: (state, action) => ({
        ...state,
        hamza: {
            ...state.hamza,
            date: `${new Date()}`,
        }
    })



});
