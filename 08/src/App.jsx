import { useState, useReducer } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { getSubheading } from "./utils/getSubheading";

function todosReducer(state, data) {
  console.log("Reducer!");
  console.log(data);
  return state.filter(todo => todo.id !== data);
}

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [, setTodos] = useState([
    { name: "Zapłacić rachunki", done: false, id: 1 },
    { name: "Wyrzucić śmieci", done: true, id: 2 },
  ]);

  const [todos, dispatch] = useReducer(todosReducer, [
    { name: "Zapłacić rachunki", done: false, id: 1 },
    { name: "Wyrzucić śmieci", done: true, id: 2 },
  ]);

  console.log("render");

  function addItem(newTodoName) {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        name: newTodoName,
        done: false,
        id: Math.random(),
      },
    ]);
    setIsFormShown(false);
  }

  function deleteItem(id) {
    dispatch(id);
  }

  function finishItem(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          done: true,
        };
      })
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubheading(todos.length)}</h2>
        </div>
        {!isFormShown && (
          <button
            onClick={() => setIsFormShown(true)}
            className={styles.button}
          >
            +
          </button>
        )}
      </header>
      {isFormShown && (
        <Form onFormSubmit={(newTodoName) => addItem(newTodoName)} />
      )}
      <ul>
        {todos.map(({ id, name, done }) => (
          <TodoItem
            key={id}
            name={name}
            done={done}
            onDeleteButtonClick={() => deleteItem(id)}
            onDoneButtonClick={() => finishItem(id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
