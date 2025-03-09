"use client";

import { deleteTodo, editTodo, getTodos, postTodo } from "@/app/apis";
import { Todo } from "@/app/types/types";
import { useState, useEffect } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("در حال بارگذاری...");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    getTodos()
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err) => {
        setStatus("خطا در دریافت اطلاعات . لطفا از اجرا بودن سرور مطمعن شوید");

        console.log(err);
      });
  };

  const addTodo = () => {
    if (!newTodo.trim()) return;
    const todo = { text: newTodo, completed: false };

    postTodo(todo as Todo)
      .then((data) => {
        setTodos([...todos, data]);
        setNewTodo("");
      })
      .catch((err) => console.log(err));
  };

  const toggleTodo = (id: string, completed: boolean) => {
    editTodo(id, { completed: !completed } as Todo)
      .then(() => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !completed } : todo
          )
        );
      })
      .catch((err) => console.log(err));
  };

  const deleteTodoById = (id: string) => {
    deleteTodo(id)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <main
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-8"
      dir="ltr"
      lang="en"
    >
      <h2 className="text-2xl font-bold mb-4">📝 To-Do List</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-grow p-2 border rounded"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        {["all", "completed", "pending"].map((type) => (
          <button
            key={type}
            className={`px-3 py-1 rounded ${filter === type ? "bg-gray-800 text-white" : "bg-gray-200"}`}
            onClick={() => setFilter(type as "all" | "completed" | "pending")}
          >
            {type === "all"
              ? "All"
              : type === "completed"
                ? "Completed"
                : "Pending"}
          </button>
        ))}
      </div>
      {loading ? (
        <div>{status}</div>
      ) : (
        <ul className="space-y-3">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
            >
              <span
                className={`flex-grow cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
                onClick={() => toggleTodo(todo.id, todo.completed)}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodoById(todo.id)}
                className="text-red-500"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
