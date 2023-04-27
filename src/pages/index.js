import ToDo from "@/components/ToDo";
import ToDoForm from "@/components/ToDoForm";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  // function GetDataFromLS() {
  //   if (typeof window !== "undefined") {
  //     const taskLS = localStorage.getItem("todo_next_react");
  //     console.log(taskLS);

  //     return JSON.parse(taskLS) || [];
  //   }
  // }

  useEffect(() => {
    const data = localStorage.getItem("todo_next_react");
    const taskLS = JSON.parse(data);
    if (taskLS) {
      setTasks(taskLS);
    }
  }, []);

  const StorageToLS = (taskLS) => {
    localStorage.setItem("todo_next_react", JSON.stringify(taskLS));
  };

  // const AddToDoHandler = (e) => {
  //   e.preventDefault();
  //   setTodo([...todo, text]);
  //   setText("");
  // };

  const AddToDoHandler = (text) => {
    const newToDo = {
      id: v4(),
      text,
      completed: false,
    };
    console.log(newToDo);
    setTasks([...tasks, newToDo]);
    StorageToLS([...tasks, newToDo]);
  };

  // const DeleteHandler = (index) => {
  //   const NewToDo = todo.filter((_, i) => i !== index);
  //   setTodo(NewToDo);
  // };

  const DeleteHandler = (id) => {
    const deletedTask = tasks.filter((task) => task.id !== id);
    // console.log(deletedTask);
    setTasks(deletedTask);
    StorageToLS(deletedTask);
  };

  const EditHandler = (editTask) => {
    // console.log(editTask);
    const updateTask = tasks.map((task) => {
      if (task.id === editTask.id) {
        task.text = editTask.text;
      }
      return task;
    });
    // console.log(updateTask);
    StorageToLS(updateTask);
  };

  return (
    <div className="mx-auto max-w-md h-screen">
      <h1 className="text-3xl font-bold mb-4">To Do App</h1>

      <ToDoForm AddToDoHandler={AddToDoHandler} />

      <div>
        <ul>
          {tasks &&
            tasks.map((task) => (
              <ToDo
                DeleteHandler={DeleteHandler}
                EditHandler={EditHandler}
                task={task}
                key={task.id}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
