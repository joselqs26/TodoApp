import React from "react";

import "../styles/TodoIcon.css";

const TodoIcon = ({ type, color = "#292D3C", size, ...props }) => {
  let classAplicate = "";

  switch (type) {
    case "check":
      classAplicate = (color === "#9AD4D6") ? "IconCheckDeactivate" : "IconCheck";
      break;
    case "clip":
      classAplicate = "IconClip";
      break;
    case "empty-todos":
      classAplicate = "IconEmptyTodos";
      break;
    case "empty-searchResults":
      classAplicate = "IconEmptySearchResults";
      break;
    case "error":
      classAplicate = "IconError";
      break;
    case "remove":
      classAplicate = "IconRemove";
      break;
    case "edit":
      classAplicate = "IconEdit";
      break;
    case "search":
      classAplicate = "IconSearch";
      break;
    default:
      classAplicate = "IconCheck";
      break;
  }
  const styles = {
    minWidth: size,
    minHeight: size,
    width: size,
    height: size,
  };

  return (
    <span
      {...props}
      className={`TodoIcon ${classAplicate}`}
      style={styles}
    ></span>
  );
};

export { TodoIcon };
