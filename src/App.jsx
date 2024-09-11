import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter === 20){
      counter = 20;
    }
    else{
      setCounter(counter + 1)
    }
       
  }

  const subtractValue = () => {
    if(counter === 0){
      counter = 0;
    }
    else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <p>You can count from 0 to 20.</p>
      <p>Counter value : {counter}</p>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={subtractValue}>Subtract Value</button>
    </>
  )
}

export default App
