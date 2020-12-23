import Layout from "antd/lib/layout/layout";
import React, { useState } from "react";
import Layouts from './components/Layout'

export default function App () {

  const [count, setCount] = useState(0)

  
  return (
    <>
      <button onClick={()=>setCount(count+ 1)}>click</button>
      <div>count: {count}</div>
      <Layouts />
    </>
  );
  
}
