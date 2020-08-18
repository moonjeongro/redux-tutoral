import {createStore} from "redux";

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

const addButton = document.getElementById("todo__addButton");
const input = document.getElementById("todo__input");
const todoList = document.getElementById("todo__ul");

const addToDo = (text) => {
    return {
        type: ADD_TODO, 
        text
    }
}

const deleteTodo = (id) => {
    return {
        type: DEL_TODO,
        id
    }
}

// object MUST BE created not mutated!!
const reducer = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return [{ text: action.text, id: Date.now()}, ...state];
        case DEL_TODO: 
            return state.filter(toDo => toDo.id !== action.id);
        default: 
            return state;
    }
};

const store = createStore(reducer);

const dispatchAddToDo = (text) => {
    store.dispatch(addToDo(text));
}

const dispatchDeleteToDo = (event) => {
    const id = parseInt(event.target.parentNode.id);
    store.dispatch(deleteTodo(id));
}

const createTodo = toDo => {
    const li = document.createElement("li");
    li.id = toDo.id;
    li.innerHTML = toDo.text;

    const btn = document.createElement("button")
    btn.innerHTML = "DEL"
    btn.addEventListener("click", dispatchDeleteToDo);

    li.appendChild(btn);
    todoList.appendChild(li);
};

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddToDo(toDo)
};

const paintTodos = () =>{ 
    todoList.innerHTML = "";
    const toDos = store.getState();
    toDos.forEach((toDo)=>{
        createTodo(toDo);
    })
}

store.subscribe(paintTodos);

addButton.addEventListener("click", onSubmit);