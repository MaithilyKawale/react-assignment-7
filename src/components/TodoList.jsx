import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTask, deleteTask }) {
    return (
        <ul className="space-y-4 fade-in">
            {todos.length === 0 && (
                <p className="text-center text-white/60 text-lg">
                    🌟 No tasks yet — add your first one!
                </p>
            )}

            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
}

export default TodoList;

