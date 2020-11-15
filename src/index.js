// makes dispatch(), render(), and state globally available
function createStore(reducer) {
  let state // defining state

// takes an action, updates state using the reducer, calls render
  function dispatch(action) {
    state = candyReducer(state, action)
    render()
  }

  function getState() {
    return state
  }

  return {dispatch, getState}
}


function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state
  }
}

function render() {
  let container = document.getElementById('container');
  if (store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
}

// creating a store that to call dispatch() and getState() on
let store = createStore(candyReducer)
// calling an initial dispatch on the store
store.dispatch({ type: '@@INIT' })
