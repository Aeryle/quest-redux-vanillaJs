const { createStore } = Redux;
const initalState = 0;
const counterStore = createStore(counterReducer);

const counterRender = document.getElementById('renderCounter');
const incrementButton = document.getElementById('buttonIncrement');
const decrementButton = document.getElementById('buttonDecrement');
const addTenButton = document.getElementById('buttonAddTen');
const removeTenButton = document.getElementById('buttonRemoveTen');

const incrementAction = {
  type: 'INCREMENT'
};
const decrementAction = {
  type: 'DECREMENT'
};

const addTenAction = {
  type: 'ADD_TEN'
};
const removeTenAction = {
  type: 'REMOVE_TEN'
};

/**
 * A counter
 * @param {number} state - The actual state
 * @param {object} action - Action to execute
 * @param {'INCREMENT' | 'DECREMENT' | 'ADD_TEN' | 'REMOVE_TEN' | string} action.type - Action to execute
 * @returns {number} - The new state
 */
function counterReducer(state = initalState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'ADD_TEN':
      return state + 10;
    case 'REMOVE_TEN':
      return state - 10;
    default:
      return state;
  }
}

const render = () => {
  counterRender.innerText = counterStore.getState();
};
render();
counterStore.subscribe(render);

incrementButton.onclick = () => {
  counterStore.dispatch(incrementAction);
};

decrementButton.onclick = () => {
  counterStore.dispatch(decrementAction);
};

addTenButton.onclick = () => {
  counterStore.dispatch(addTenAction);
};

removeTenButton.onclick = () => {
  counterStore.dispatch(removeTenAction);
};
