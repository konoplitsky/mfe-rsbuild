import React from "react";
import "./ProviderComponent.css";
import useCounterStore from "host/Store";

const Provider: React.FC = () => {
  const {counter, increment} = useCounterStore()

  return (
    <div style={{ border: "1px solid red" }}>
      <h1>REMOTE</h1>
      <div>Счетчик = {counter}</div>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Provider;
