import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "/Epicode/Week-9/W9-L2/W9L2/node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./MyComponents/MyNav";
import MyFooter from "./MyComponents/MyFooter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyNav />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MyFooter />
    </>
  );
}

export default App;
