import { createStore } from "redux";


const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {

  switch (action.type){
    case ADD:
      return count + 1
    case MINUS:
      return count - 1
    default:
      return count;
  }

  // console.log(count,action);
  // if (action.type ==="ADD"){
  //   return count + 1;
  // } else if (action.type === "MINUS"){
  //   return count - 1;
  // } else{
  //   return count;
  // }
};

const countStore = createStore(countModifier);

const onChange = () => {
  // console.log(countStore.getState());
  number.innerText = countStore.getState();

};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type: "ADD"})
}

const handleMinus = () => {
  countStore.dispatch({type: "MINUS"})
}

add.addEventListener("click", handleAdd );
minus.addEventListener("click", handleMinus );


// console.log(countStore.getState());


// countStore.dispatch({type:"ADD"});
// countStore.dispatch({type:"ADD"});
// countStore.dispatch({type:"ADD"});
// countStore.dispatch({type:"ADD"});
// countStore.dispatch({type:"ADD"});
// countStore.dispatch({type:"ADD"});
// countStore.dispatch({type:"MINUS"});

// console.log(countStore.getState());

// let count = 0;

// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// }

// const handleAdd = () => {
//   count = count + 1;
//   updateText();
// }

// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// }

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);