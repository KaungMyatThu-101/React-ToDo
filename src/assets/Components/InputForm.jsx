import React, { useState } from "react";
import { useContext } from "react";
import Context from "./Context"; //to use data from parent

const InputForm = () => {
  const { inputValue, setInputValue, list, setList } = useContext(Context); //to use data from parent

  function submitHandler(e) {
    e.preventDefault();
    setList([...list, inputValue]);
    // setList([...list, { id: Math.random().toString(), item: inputValue }]);
  }
  const inputControl = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form action="submit" onSubmit={submitHandler}>
        <input
          type="text"
          value={inputValue}
          onChange={inputControl}
          className="formInput"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default InputForm;
