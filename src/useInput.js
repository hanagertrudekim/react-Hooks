import { useState } from "react";
import "./styles.css";

const useInput = (initailValue, validator) => {
  const [value, setvalue] = useState(initailValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setvalue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxValue = (value) => value.length <= 10;
  const name = useInput("mr.", maxValue);
  return (
    <div className="App">
      <h1>What is your Name?</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
