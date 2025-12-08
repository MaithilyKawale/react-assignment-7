import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);

    const addTask = (task) => {
        if (!task.trim()) return;
        setTodos([...todos, { id: Date.now(), text: task, done: false }]);
    };

    const toggleTask = (id) => {
        setTodos(
            todos.map((t) =>
                t.id === id ? { ...t, done: !t.done } : t
            )
        );
    };

    const deleteTask = (id) => {
        setTodos(todos.filter((t) => t.id !== id));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#4527A0] via-[#6A1B9A] to-[#12005E] flex items-center justify-center p-4">

            <div className="todo-box fade-in max-w-xl w-full rounded-3xl shadow-2xl border border-white/20 p-10">

                <Header />
                <div className="divider"></div>

                <TodoInput addTask={addTask} />
                <div className="divider"></div>

                <TodoList todos={todos} toggleTask={toggleTask} deleteTask={deleteTask} />

            </div>
        </div>
    );
}

export default App;


