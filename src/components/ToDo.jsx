import { useState } from "react";
// import "../styles/globals.css";

const ToDo = ({ DeleteHandler, EditHandler, task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(task.text);
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const DeleteTask = (id) => {
    if (id) {
      DeleteHandler(id);
    }
  };

  const EditButton = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
    if (isEdit) {
      EditHandler(task);
    }
  };

  const TaskCompleted = () => {
    setIsCompleted(!isCompleted);
    task.completed = !isCompleted;
  };

  return (
    <div className="my-4 flex justify-between">
      <div className="flex list-inside items-center">
        <input
          value={isCompleted}
          name={task.id}
          id={task.id}
          onChange={TaskCompleted}
          checked={task.completed}
          type="checkbox"
          className="mr-2 mt-1"
        />

        {isEdit ? (
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border border-gray-400 flex-grow"
            autoFocus
          />
        ) : task.completed ? (
          <del>{text}</del>
        ) : (
          <li>{text}</li>
        )}
      </div>
      <div className="flex w-[50%] justify-end gap-4">
        <button
          className="bg-red-500 text-black font-bold py-2 px-4 rounded"
          onClick={() => DeleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-yellow-400 text-black font-bold py-2 px-4 rounded"
          id={task.id}
          onClick={(e) => EditButton(e)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ToDo;
