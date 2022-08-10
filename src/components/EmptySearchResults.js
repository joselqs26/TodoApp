import React from "react";
import { TodoIcon } from './TodoIcon';

import "../styles/Empty.css";

const EmptySearchResults = ({searchValue}) => {
  return (
    <div className="Empty">
      <TodoIcon
        type="empty-searchResults"
        size="150px"
      />
      <p className="text">No hay resultados para la búsqueda "{searchValue}"</p>
    </div>
  );
};

export { EmptySearchResults };
