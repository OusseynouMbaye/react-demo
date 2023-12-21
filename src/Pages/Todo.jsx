import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

import Navigation from "../Components/Navigation.jsx";

const initialTodos = [
  { id: 1, title: "Faire la vaisselle", done: false },
  { id: 2, title: "Faire le ménage", done: false },
  { id: 3, title: "Faire la cuisine", done: true },
];

function Todo() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoTitle, setEditTodoTitle] = useState("");

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditTodoId(id);
    setEditTodoTitle(todoToEdit.title);
  };

  const handleSaveEdit = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editTodoId) {
        return { ...todo, title: editTodoTitle };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditTodoId(null);
    setEditTodoTitle("");
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newTask = {
        id: todos.length + 1,
        title: newTodo,
        done: false,
      };
      setTodos([...todos, newTask]);
      setNewTodo("");
    }
  };

  return (
    <>
      <Navigation />
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Ajouter</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editTodoTitle}
                  onChange={(e) => setEditTodoTitle(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleToggle(todo.id)}
                />
                {todo.title} - {todo.done}
                <button onClick={() => handleDelete(todo.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button onClick={() => handleEdit(todo.id)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;

//   return (
//     <>
//       <Navigation />
//       <input
//         type="text"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//       />
//       <button onClick={addTodo}>Ajouter</button>

//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.done}
//               onChange={() => handleToggle(todo.id)}
//             />
//             {todo.title} - {todo.done}
//             <button onClick={() => handleDelete(todo.id)}>
//               <FontAwesomeIcon icon={faTrash} />
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default Todo;
