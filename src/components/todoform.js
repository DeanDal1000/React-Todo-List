import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setvalue] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setvalue("");
  };
  return (
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        className="input"
        placeholder="Add To List"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
