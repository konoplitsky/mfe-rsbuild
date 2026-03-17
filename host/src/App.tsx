import './App.css';
import { Link } from 'react-router-dom'
import useCounterStore from "./stores/countersStore.ts";

const App = () => {
    const { counter, increment } = useCounterStore()

  return (
    <div style={{border: '1px solid green'}}>
        <h1>ХОСТ</h1>
        <Link to='/remote'>Перейти на remote страницу</Link>
        <div>Счетчик: {counter}</div>
        <button onClick={increment}>+</button>
    </div>
  );
};

export default App;
