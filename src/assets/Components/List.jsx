import React, { useContext } from "react";
import { Context } from "./Condext";

import Action from "./Action";

const List = () => {
  const { list, setList } = useContext(Context);

  // console.log(list);

  return (
    <>
      {list.length !== 0 ? (
        <ul>
          {list.map((d) => (
            <li key={d.id}>
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
