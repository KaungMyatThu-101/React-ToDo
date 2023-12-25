import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "./Condext";

const InputForm = () => {
  const {
    inputValue,
    setInputValue,
    list,
    setList,
    editMode,
    setEditMode,
    editList,
    setEditList,
  } = useContext(Context);

  const submitHandler = (e) => {
    e.preventDefault();
    setList([
      ...list,
      { id: Math.random().toString(), item: inputValue, isToggled: false },
    ]);
    setInputValue("");
    setEditMode(false); // Reset edit mode after submission
  };

  const updateHandler = (e) => {
    e.preventDefault();
    setList(
      list.map((item) =>
        item.id === editList ? { ...item, item: inputValue } : item
      )
    );
    setInputValue("");
    setEditMode(false); // Reset edit mode after update
  };

  const inputhandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={editMode ? updateHandler : submitHandler}>
        <input value={inputValue} onChange={inputhandler} />
        <button type="submit">{editMode ? "Update" : "Submit"}</button>
      </form>
    </>
  );
};

export default InputForm;
