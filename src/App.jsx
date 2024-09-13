import { useState, useRef, useEffect } from "react";
import { commandLine } from "./utilities/terminal";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [cwd] = useState("/home/user");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    inputRef.current.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  const handleInput = () => {
    let newOutput = "";
    newOutput = output + "$ " + input + "\n";
    newOutput += commandLine(input, cwd);
    setOutput(newOutput);
    setInput("");
  };

  return (
    <div
      className="bg-slate-800 text-white min-h-screen p-2"
      onClick={() => inputRef.current.focus()}
    >
      <div className="whitespace-pre-line">{output}</div>
      <div className="flex gap-1 whitespace-nowrap">
        <label
          className="text-blue-400"
          htmlFor="terminalInput"
        >{`${cwd} (type help) $`}</label>
        <input
          className="mb-2 no-border no-outline bg-transparent w-full"
          id="terminalInput"
          ref={inputRef}
          autoComplete="off"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleInput();
          }}
        />
      </div>
    </div>
  );
}

export default App;
