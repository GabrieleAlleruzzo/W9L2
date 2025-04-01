import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "/Epicode/Week-9/W9-L2/W9L2/node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./MyComponents/MyNav";
import MyFooter from "./MyComponents/MyFooter";
import MyAlert from "./MyComponents/MyAlert";
import MyWelcome from "./MyComponents/MyWelcome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyNav />
      <MyWelcome />
      <MyFooter />
    </>
  );
}

export default App;
