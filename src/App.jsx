import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Jokes from "./Jokes";

function App() {
  return (
    <>
      <marquee>
        <h1>CREATED BY HARISH KUMAR UPADHYAY</h1>
      </marquee>

      <br></br>
      <br></br>
      <h1>JOKES</h1>

      <Jokes />
    </>
  );
}

export default App;
