const add = document.getElementById("button--add");
const minus = document.getElementById("button--minus");
const number = document.getElementById("span--number");

let count = 0;
number.innerText = count;

function updateText(){
    number.innerText = count;
}

function handleAdd(event){
    count++;
    updateText();
}

function handleMinus(event){
    count--;
    updateText();
}

add.addEventListener("click", handleAdd)
minus.addEventListener("click", handleMinus)