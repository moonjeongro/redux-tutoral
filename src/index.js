import {createStore} from "redux";

const add = document.getElementById("button--add");
const minus = document.getElementById("button--minus");
const number = document.getElementById("span--number");

number.innerText = 0;

// only one function that can modify the 'countStore'
// action is the way we can communicate with the modifier
// whatever reducer returned that will be a state of your application
const countModifier = (count = 0, action) => {
    if (action.type === "ADD") {
        return count + 1;
    } else if (action.type === "MINUS") {
        return count - 1;
    } else {
        return count;
    }
};

const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
}

// If we want listen changing the state we can subscribe
countStore.subscribe(onChange);

// dispatch call reducer with an action
// action must be an object
// action must have the 'type' element and we cannot modify its name. 
add.addEventListener("click", () => countStore.dispatch({type: "ADD" }))
minus.addEventListener("click", () => countStore.dispatch({type: "MINUS" }))

console.log(countStore.getState())