import { useState } from "react";

interface Todo {
  title: string;
  complete: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState("");
  return (
    <div className="h-screen w-screen bg-slate-900 flex justify-start items-center py-10 flex-col gap-5">
      <h1 className="text-slate-300 text-4xl font-bold font-fixel">Productify</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="type todo"
          className="py-1 px-2 rounded-s-lg"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="bg-slate-300 py-1 px-2 rounded-e-lg"
          onClick={() => {
            setTodos((prev: Todo[]) => {
              const newTodos = [...prev];
              newTodos.push({ title: todo, complete: false });
              return newTodos;
            });
            setTodo("");
          }}
        >
          save
        </button>
      </div>
      <div className="flex items-center flex-col gap-5">
        <h2 className="text-2xl text-slate-300">Todo List</h2>
        <div className="border rounded-md w-full min-w-80 h-full p-5">
          {todos.map((todo: Todo, index: number) => {
            return (
              <div className="flex justify-between" key={index}>
                {!todo.complete ? (
                  <span className="text-xl text-slate-300">
                    {todo.title.toUpperCase()}
                  </span>
                ) : (
                  <del className="text-xl text-slate-300">
                    {todo.title.toUpperCase()}
                  </del>
                )}
                <input
                  type="checkbox"
                  defaultChecked={todo.complete}
                  onChange={(e) =>
                    setTodos((prev) => {
                      const newTodos = [...prev];
                      newTodos[index].complete = e.target.checked;
                      return newTodos;
                    })
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
