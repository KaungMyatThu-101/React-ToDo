import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useContext } from "react";
import { Context } from "./assets/Components/Condext";
import List from "./assets/Components/List";
import InputForm from "./assets/Components/InputForm";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editList, setEditList] = useState("");

  return (
    <>
      <Context.Provider
        value={{
          inputValue,
          setInputValue,
          list,
          setList,
          editMode,
          setEditMode,
          editList,
          setEditList,
        }}
      >
        <InputForm></InputForm>
        <List></List>
      </Context.Provider>
    </>
  );
}

export default App;
