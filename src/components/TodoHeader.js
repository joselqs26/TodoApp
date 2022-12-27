import React from 'react'

import "../styles/AppUI.css";

const TodoHeader = ({ children , loading }) => {
    return (
    <div className="TodoMenu-container">
        {React.Children.toArray(children).map(
            element => (React.cloneElement(element, {loading}))
        )}
    </div>
  )
}

export { TodoHeader };