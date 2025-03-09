import { Todo } from "../types/types";

export const getArticles = async () => {
  const response = await fetch("http://localhost:4000/articles");
  const data = await response.json();
  return data;
};
export const getArticle = async (id: string) => {
  const response = await fetch(`http://localhost:4000/articles/${id}`);
  const data = await response.json();
  return data;
};

export const getTodos = async () => {
  const res = await fetch("http://localhost:4000/todos");
  const data = await res.json();
  return data;
};

export const postTodo = async (data: Todo) => {
  const res = await fetch("http://localhost:4000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const editTodo = async (id: string, data: Todo) => {
  const res = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteTodo = async (id: string) => {
  const res = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
