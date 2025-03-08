"use client";
import { Todo } from "@/app/types/types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const pathName = usePathname();

  useEffect(() => {
    fetch("http://localhost:4000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = () => {
    if (!newTodo) return;
    const todo = { id: Date.now().toString(), text: newTodo, completed: false };
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container mx-auto px-4 mt-6" dir={pathName==='/todo-list'?"ltr":"rtl"}>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Todos</h2>
        <input
          type="text"
          className="w-full p-2 border rounded-md mb-4"
          placeholder="Add a new todo ..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          onClick={addTodo}
        >
          Add
        </button>
        <ul className="mt-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-2 border-b"
            >
              <span
                className={todo.completed ? "line-through text-gray-500" : ""}
              >
                {todo.text}
              </span>
              <button
                className="text-green-600"
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.completed ? "✖️" : "✔️"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
