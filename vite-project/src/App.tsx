import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WordCloud from "./WordCloud";

function App() {
  const [count, setCount] = useState(0);

  const temp = [
    { text: "HTTP", value: 4 },
    { text: "Ember", value: 2 },
    { text: "Sass", value: 5 },
    { text: "HTML", value: 8 },
    { text: "FlexBox", value: 6 },
    { text: "API", value: 4 },
    { text: "VueJS", value: 5 },
    { text: "Grid", value: 6 },
    { text: "Rest", value: 3 },
    { text: "JavaScript", value: 12 },
    { text: "Animation", value: 3 },
    { text: "React", value: 7 },
    { text: "CSS", value: 8 },
    { text: "Cache", value: 1 },
    { text: "Less", value: 3 },
  ];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} This is just somethig new...
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <WordCloud data={temp} />
    </>
  );
}

export default App;
