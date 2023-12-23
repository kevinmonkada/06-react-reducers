import React, {useReducer, useState} from "react";

const initialState = {count: 0};

const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return {count: state.count + 1};
    case TYPES.DECREMENT:
      return {count: state.count - 1};
    case TYPES.INCREMENT_5:
      return {count: state.count + action.payload};
    case TYPES.DECREMENT_5:
      return {count: state.count - action.payload};
    case TYPES.RESET:
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  //const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  //const sum = () => setCount(count + 1);
  const sum = () => dispatch({type: TYPES.INCREMENT});
  const sum5 = () => dispatch({type: TYPES.INCREMENT_5, payload: 5});

  //const res = () => setCount(count - 1);
  const res = () => dispatch({type: TYPES.DECREMENT});
  const res5 = () => dispatch({type: TYPES.DECREMENT_5, payload: 5});

  //const reset = () => setCount(0);
  const reset = () => dispatch({type: TYPES.RESET});

  return (
    <div>
      <h2>Contador</h2>
      <nav>
        <button onClick={sum5}> +5 </button>
        <button onClick={sum}> + </button>
        <button onClick={reset}> 0 </button>
        <button onClick={res}> - </button>
        <button onClick={res5}> - 5</button>
      </nav>
      <h3>{state.count}</h3>
    </div>
  );
};

export default Counter;
