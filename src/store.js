// import {createStore} from "redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";

/*
const ADD = "ADD";
const DEL = "DEL";

const addToDo = text => {
    return {
       type: ADD,
       text
    };
};

const deleteToDo = id => {
    return {
        type: DEL,
        id
    };
};
*/

/*
const reducer = (state = [], action) => {
    switch(action.type){
        case addToDo.type:
            return [ {text: action.payload, id: Date.now()}, ...state];
        case deleteToDo.type:
            return state.filter( toDo => toDo.id !== action.payload );
        default:
            return state;
    }
}
*/

/*
const addToDo = createAction('ADD')
const deleteToDo = createAction('DEL')

const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({ text:action.payload, id:Date.now()} )
    },
    [deleteToDo]: (state, action) => {
        state.splice( state.findIndex(elem => elem.id === action.payload) )
    }
});
*/

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text:action.payload, id:Date.now()} )
        },
        remove: (state, action) => {
            state.splice( state.findIndex(elem => elem.id === action.payload) )
        }
    }
})

const store = configureStore({ reducer: toDos.reducer });

console.log(toDos.actions);

export const {
    add,
    remove
} = toDos.actions;

export default store;