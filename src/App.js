import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  const [background, setBackground] = useState("main");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackground("bg-secondary text-primary");
      } else {
        setBackground("main");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full font-body">
      {/* <Login/> */}
      <div
        className={`sticky top-0 left-0 right-0 ${
          background === "main" ? "bg-main text-secondary" : background
        }`}
      >
        <Navbar />
      </div>
      <Homepage />
    </div>
  );
}

export default App;
