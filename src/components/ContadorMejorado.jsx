import React, {useReducer} from "react";
import {
  contadorInit,
  contadorInitialState,
  contadorReducer,
} from "../reducers/contadorReducer";
import {TYPES} from "../actions/contadorActions";

const CounterImproved = () => {
  const [state, dispatch] = useReducer(
    contadorReducer,
    contadorInitialState,
    contadorInit
  );

  const sum = () => dispatch({type: TYPES.INCREMENT});
  const sum5 = () => dispatch({type: TYPES.INCREMENT_5, payload: 5});

  const res = () => dispatch({type: TYPES.DECREMENT});
  const res5 = () => dispatch({type: TYPES.DECREMENT_5, payload: 5});

  const reset = () => dispatch({type: TYPES.RESET});

  return (
    <div>
      <h2>Contador Mejorado Reducer</h2>
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

export default CounterImproved;
