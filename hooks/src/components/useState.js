function Example() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState({ text: "Learn Hooks" });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

function handleOrangeClick() {
  setFruit("orange");
}

function Box() {
  const [state, setState] = useState({
    left: 0,
    top: 0,
    width: 100,
    height: 100,
  });
  useEffect(() => {
    function handleWindowMouseMove(e) {
      setState((state) => ({ ...state, left: e.pageX, top: e.pageYU }));
    }
    window.addEventListener("mousemove", handleWindowMouseMove);
    return () => window.removeEventListener("mousemove", handleWindowMouseMove);
  }, []);
}

function Example2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
