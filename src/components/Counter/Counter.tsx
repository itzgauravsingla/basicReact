import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <>
    <div className="container flex gap-2">
      <button type="button" className="bg-amber-600 rounded-md w-5 shadow-lg"
        onClick={() => setCount(count => count - 1)}
      >-</button>
      <div>{count}</div>
      <button type="button" className="bg-amber-600 rounded-md w-5 shadow-lg"
        onClick={() => setCount(count => count + 1)}
      >+</button>
    </div>
    </>
  )
}

export default Counter;