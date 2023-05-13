import { useState } from "react";
import UseEffectHook from "./components/UseEffectHook";
import User from "./components/User";

function App() {
  const [toggle, setToggle] = useState(true);
  const toggleEffect = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      {/* <button onClick={toggleEffect}>{toggle ? "hide" : "show"}</button>
      {toggle && <UseEffectHook />} */}
      <User />
    </div>
  );
}

export default App;
