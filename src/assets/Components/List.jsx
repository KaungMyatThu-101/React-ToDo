import React from "react";
import { useContext } from "react";
import Context from "./Context";

const List = () => {
  const { list } = useContext(Context);

  return (
    <>
      <ul>
        {/* 1 */}

        {/* {list.map((list) => {
          return <li key={list.id}>{list.item}</li>;
        })} */}

        {/* 2 */}
        {list.map((item, index) => (
          <li key={item + index}>{item}</li> // Use a combination of item and index
        ))}
      </ul>
    </>
  );
};

export default List;
