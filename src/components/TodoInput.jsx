import { useState } from "react";
import Button from "./Button";

function TodoInput({ addTask }) {
    const [task, setTask] = useState("");

    const handleAdd = () => {
        addTask(task);
        setTask("");
    };

    return (
        <div className="flex gap-3 mb-8 fade-in">
            <input
                type="text"
                className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-white/60 outline-none border border-white/20 focus:ring-2 focus:ring-purple-300 transition-all backdrop-blur-lg"
                placeholder="Enter a new task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <Button onClick={handleAdd}>Add</Button>
        </div>
    );
}

export default TodoInput;


