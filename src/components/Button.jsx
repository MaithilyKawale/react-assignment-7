function Button({ children, onClick, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`px-5 py-3 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-white font-bold shadow-lg hover:shadow-green-400/50 transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;

