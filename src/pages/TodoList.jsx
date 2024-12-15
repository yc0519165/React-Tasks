import { useState } from "react";
import { motion } from "framer-motion";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() == "") return;
    setTodos([{ id: Date.now(), text: newTodo, complete: false }, ...todos]);
    setNewTodo("");
  };

  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedAsMark = (id) => {
    const completedTodo = todos.find((todo) => todo.id === id);
    if (completedTodo) {
      completedTodo.complete = true;
      setTodos(todos.filter((todo) => todo.id !== id));
      setCompletedTodos([...completedTodos, completedTodo]);
    }
  };
  return (
    <>
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="h-[500px] w-[40%] border rounded-lg"
        >
          <div className="h-[15%] border-b flex items-center justify-center ">
            <input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              type="text"
              placeholder="add task here . . ."
              className="p-3 outline-none bg-transparent"
            />
            <button
              onClick={addTodo}
              className="p-2 rounded-lg w-12 transition-[0.5s] bg-[#333333] hover:bg-[#5cf85c9a] text-xl"
            >
              {" "}
              <i className="bx bx-plus"></i>
            </button>
          </div>
          <div className="h-[40%] border-b overflow-scroll scrollbar-hide">
            {todos.map((todo) => {
              return (
                <>
                  <div
                    key={todo.id}
                    className="flex items-center px-6 py-3 bg-[#333333] rounded-md m-4 justify-between"
                  >
                    <h2>{todo.text}</h2>
                    <div className="flex gap-5">
                      <p
                        onClick={() => completedAsMark(todo.id)}
                        className="text-3xl text-[#5cf85c]"
                      >
                        <i className="bx bx-check"></i>
                      </p>
                      <p
                        onClick={() => deleteTodos(todo.id)}
                        className="text-2xl text-[#fa4646e3]"
                      >
                        <i className="bx bx-trash-alt"></i>
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="h-[40%] overflow-scroll scrollbar-hide">
            {completedTodos.map((todo) => {
              return (
                <>
                  <div
                    key={todo.id}
                    className="flex items-center px-6 py-3 bg-[#333333] rounded-md m-4 justify-between"
                  >
                    <h2 className="line-through text-[#fa4646e3]">
                      {todo.text}
                    </h2>
                  </div>
                </>
              );
            })}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default TodoList;
