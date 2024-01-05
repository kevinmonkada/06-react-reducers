import Counter from "./components/Contador";
import CounterImproved from "./components/ContadorMejorado";
import CrudApi from "./components/CrudApi";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div style={{textAlign: "center"}}>
      <h1>useReducer</h1>
      <hr />
      <CrudApi />
      <hr />
      <ShoppingCart />
      <hr />
      <CounterImproved />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
