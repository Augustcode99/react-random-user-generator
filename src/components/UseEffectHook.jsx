import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [initialRender, setInitialRender] = useState(true);
  //   const [intervalId, setIntervalId] = useState(null);

  const fetchData = () => {
    console.log("fetching data...");
  };
  useEffect(() => {
    const timer = setInterval(fetchData, 1000);
    if (initialRender) {
      setInitialRender(false);
    } else {
      console.log("countChanged");
    }
    return () => {
      clearInterval(timer);
    };
    // const startInterval = () => {
    //   const newIntervalId = setInterval(fetchData, 1000);
    //   setIntervalId(newIntervalId);
    // };
    // if (intervalId) {
    //   clearInterval(intervalId);
    // }
    // return clearInterval(intervalId);
    //   startInterval();
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default UseEffectHook;
