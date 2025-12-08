import Button from "./Button";

function TodoItem({ todo, toggleTask, deleteTask }) {
    return (
        <li className="flex justify-between bg-white/10 hover:bg-white/20 transition-all backdrop-blur-md p-4 rounded-xl text-white items-center shadow-md fade-in border border-white/10">

            <span
                onClick={() => toggleTask(todo.id)}
                className={`cursor-pointer text-lg transition-all ${todo.done
                        ? "line-through opacity-70 text-gray-200"
                        : "text-white hover:text-green-300"
                    }`}
            >
                {todo.text}
            </span>

            <Button
                onClick={() => deleteTask(todo.id)}
                className="bg-gradient-to-r from-red-400 to-red-600 hover:shadow-red-400/50 px-4 py-2"
            >
                ✕
            </Button>
        </li>
    );
}

export default TodoItem;

