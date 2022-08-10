import React from "react";
import { TodoIcon } from "./TodoIcon";

import "../styles/TodoCounter.css";

function TodoCounter({ todos , loading }) {
  return (
    <div className={`TodoCounter text ${loading ? 'TodoCounter-disabled' : ''}`} >
      <p>{`${todos.filter((todo) => todo.resolved).length} `}</p>
      <TodoIcon type="check" size="16px" color="#9AD4D6" /> <p> / {`${todos.length} `} </p>
      <TodoIcon type="clip" size="16px" />
    </div>
  );
}

export { TodoCounter };
