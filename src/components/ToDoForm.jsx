import React, { useState } from "react";

const ToDoForm = ({ AddToDoHandler }) => {
  const [text, setText] = useState("");

  const AddToDo = (e) => {
    e.preventDefault();
    AddToDoHandler(text);
    setText("");
  };

  return (
    <form>
      <div className="flex">
        <input
          type="text"
          name="todo"
          id="todo"
          value={text}
          placeholder="Enter a todo item"
          className="border border-gray-400 mr-2 px-4 flex-grow"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => AddToDo(e)}
        >
          Add item
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;
