import { SetStateAction, useEffect, useReducer, useRef, useState } from "react";
import "./App.css";

const reducer = (state: { counter: number; }, action: { type: any; }) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };

    case "decrement":
      return {
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

function App() {
  // useState
  const [count, setCount] = useState(0);
  // useState

  // useEffect
  const [items, setItems] = useState([]);
  const [resourceType, setResourceType] = useState("posts");

  // useEffect(() => {
  //   // console.log("resource type changed");
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}/1`)
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, [resourceType]);
  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      const responseJSON = await response.json();
      console.log(responseJSON);

      setItems(responseJSON);
    };
    // fetchResourceTypes();
  }, [resourceType]);

  useEffect(() => {
    // componentDidMount
    console.log("componentDidMount");
    return () => {
      // componentWillUnmount
      console.log("componentWillUnmount");
    };
  }, []);

  const changeResourceType = (resourceType: SetStateAction<string>) => {
    setResourceType(resourceType);
  };
  // useEffect
  // useRef
  const [name, setName] = useState("");

  const renders = useRef(0);

  const inputRef = useRef();

  const previousName = useRef();

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  useEffect(() => {
    previousName.current = name;
  }, [name]);
  // useRef

  // useReducer
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const [inputValue, setInputValue] = useState('')
  // useReducer

  return (
    <>
      {/* useState */}
      <div className="card">
        <h2>"useState"</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <hr />
      {/* useState */}

      {/* useEffect */}
      <div className="card">
        <h2>"useEffect"</h2>
        <h3>{resourceType}</h3>
        <button onClick={() => changeResourceType("posts")}>Posts</button>
        <button onClick={() => changeResourceType("comments")}>Comments</button>
        <button onClick={() => changeResourceType("todos")}>Todos</button>
      </div>
      {items.map((item) => (
        <p key={item.id}>
          id: {item.id}, title: {item.title}
        </p>
      ))}
      <hr />
      {/* useEffect */}
      {/* useRef */}
      <div>
        <h2>"useRef"</h2>
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Hello! my name is {name}</p>
        <p>And my name was {previousName.current}</p>
        <p>Renders: {renders.current} </p>
        <button onClick={focusInput}>Focus Input</button>
      </div>
      <hr />
      {/* useRef */}

      {/* useReducer */}
      <div>
        <h2>"useReducer"</h2>
        <p>{state.counter}</p>
        <button onClick={() => dispatch({ type: "increment" })}>
          Incremente
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          decremente
        </button>
      </div>
      <hr />

      {/* useReducer */}
    </>
  );
}

export default App;
