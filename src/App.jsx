import React from "react";
import { CharacterList, Navbar } from "./components";

export default function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <CharacterList />
    </div>
  );
}
