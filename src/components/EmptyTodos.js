import React from "react";
import { TodoIcon } from './TodoIcon';

import "../styles/Empty.css";

const EmptyTodos = () => {
  return (
    <div className="Empty">
      <TodoIcon
        type="empty-todos"
        size="150px"
      />
      <p className="text">Usa el botón de Crear para agregar nuevos TODO's</p>
    </div>
  );
};

export { EmptyTodos };
