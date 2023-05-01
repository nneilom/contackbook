import React, { useContext, useEffect } from "react";
import { counterContext } from "../CounterContextProvider";

const Counter = () => {
  useEffect(() => {
    console.log(" компонет Counter родился");
    return () => console.log("компонет counter размонтирован");
  }, []);
  const { increment, counter, decrement } = useContext(counterContext);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={decrement}>Minus</button>
      <button onClick={increment}>Plus</button>
    </div>
  );
};

export default Counter;
