import React, { useState } from "react";

const OrderedList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isSortedAsc, setIsSortedAsc] = useState(true);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim()) {
      const updatedTodos = [inputValue.trim(), ...todos];

      const sortedTodos = sortTodos(updatedTodos, isSortedAsc);
      setTodos(sortedTodos);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClearTodos = () => {
    setTodos([]);
    setInputValue("");
  };

  const handleToggleSort = () => {
    const sortedTodos = sortTodos(todos, !isSortedAsc);
    setTodos(sortedTodos);
    setIsSortedAsc(!isSortedAsc);
  };

  const sortTodos = (list, ascending) => {
    return [...list].sort((a, b) => {
      if (ascending) {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    });
  };

  return (
    <>
      <p>TODO -- see src/components/OrderedList.jsx</p>
      <input
        data-testid="add-item"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
      />
      <button data-testid="sort-direction" onClick={handleToggleSort}>
        {isSortedAsc ? "⬇️" : "⬆️"}
      </button>
      <button data-testid="clear-list" onClick={handleClearTodos}>
        ️🆑
      </button>
      <ul data-testid="items-list">
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </>
  );
};

export default OrderedList;
