import { useState } from "react";
import "./App.css";
import HeroSection4 from "./HeroSection4";
import Features3 from "./Features3";
import Card10 from "./Card10";
import { Child } from "./Child";
import Child1 from "./Child1";
function App() {
  return (
    <>
      <HeroSection4 />
      <Features3 />
      {/* <Card10/> */}
      <div className="marquee">
        <input type="text" placeholder="Enter your name" />
        <Child name="Sudarshan" age="20" />
      </div>
      <div className="flex flex-wrap gap-6 justify-center p-6 bg-gradient-to-r from-purple-900 via-blue-900 to-black">
        <Child1 heading="Java" content="Programmer" />
        <Child1 heading="Python" content="Developer" />
        <Child1 heading="JavaScript" content="Frontend Developer" />
      </div>
    </>
  );
}

export default App;
