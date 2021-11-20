import React, { useState , useEffect } from "react";
import randomColor from "randomcolor";

function Counter() {
  let [Counter, setCounter] = useState(0);
  let [Color, setColor] = useState("red");


//    useEffect = compent did mount and compund did update 
  useEffect(()=>{
      console.log("hey i am use effect")
      setColor(Color = randomColor());
  },[])
   

  function plusHandler() {
    setCounter((prevState) => {
      return prevState + 1;
    });

    setColor( Color = randomColor())
  }

  function minusHandler() {
    setCounter((prevState) => {
      return prevState - 1;
    });

    setColor( Color = randomColor())

  }

  function reset() {
    setCounter((Counter = 0));
  }

  return (
    <div>
     
      <h1 style={{ color: Color }}>{Counter}</h1>
      {console.log("i am rendering")}
      <button onClick={plusHandler}>increment</button>
      <button onClick={minusHandler}>dectrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
