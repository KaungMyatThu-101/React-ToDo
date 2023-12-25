import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "./Condext";
import Action from "./Action";

const List = () => {
  const { list, setList } = useContext(Context);

  const checkHandler = (id) => {
    const newList = list.map(
      item.id === id ? { ...item, isToggled: !item.isToggled } : item
    );
    setList(newList);
  };

  return (
    <>
      {list.length !== 0 ? (
        <ul>
          {list.map((d) => (
            <li
              style={{ textDecoration: d.isToggled ? "line-through" : "none" }}
              key={d.id}
            >
              <input
                type="checkbox"
                checked={d.isToggled || false}
                onChange={() => checkHandler(d.id)} // Changed from onClick to onChange
              />
              {d.item}
              <Action id={d.id} item={d.item} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Please fill data</p>
      )}
    </>
  );
};

export default List;
