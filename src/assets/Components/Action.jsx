import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "./Condext";
import List from "./List";

const Action = ({ id, item }) => {
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

  function btnDelete(id) {
    setList(list.filter((item) => item.id !== id));
  }
  const btnEdit = (id, item) => {
    // console.log(item);
    setEditMode(true);
    setEditList(id);
    setInputValue(item);
  };

  return (
    <>
      {/* need to use higher order functio to pass argument */}
      <button onClick={() => btnDelete(id)}>Delete</button>
      <button onClick={() => btnEdit(id, item)}>Edit</button>
    </>
  );
};

export default Action;
