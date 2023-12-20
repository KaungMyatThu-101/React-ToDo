import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Context from "./assets/Components/Context";
import InputForm from "./assets/Components/InputForm";
import List from "./assets/Components/List";

function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      {/* <Context.Provider value={(text, setText)}> */}
      <Context.Provider value={{ inputValue, setInputValue, list, setList }}>
        <InputForm></InputForm>
        <List></List>
      </Context.Provider>
    </>
  );
}

export default App;
