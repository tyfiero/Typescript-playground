import React from "react";
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";

type Props = {};
const code: string = `export default function App() {
    return <h1>Hello Sandpack</h1>
  }`;
const files = {
  "/App.js": `
  import React from 'react';
  function App() {
    const [count, setCount] = React.useState(0);
    
    return (
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    );
  }
  export default App;
    `,
};
const theme = {
  colors: {
    surface1: "#2b3935",
    surface2: "#191324",
    surface3: "#524763",
    clickable: "#aaaaaa",
    base: "#ffffff",
    disabled: "#aaaaaa",
    hover: "#ffffff",
    accent: "#33a5ea",
    error: "#e54b4b",
    errorSurface: "#191324",
  },
  syntax: {
    plain: "#ffffff",
    comment: {
      color: "#9eb1b1",
      fontStyle: "italic",
    },
    keyword: "#33a5ea",
    tag: "#f754ff",
    punctuation: "#c4b0e4",
    definition: "#82d8d8",
    property: "#4fbbfc",
    static: "#8af8f8",
    string: "#39febc",
  },
  font: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: '"MonoLisa", "Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    size: "13px",
    lineHeight: "18px",
  },
};
export default function IDE({}: Props) {
  return (
    <div className="w-full h-screen">
      <SandpackProvider
        theme={theme}
        template="vanilla-ts"
        // files={{
        //   "/App.js": code,
        // }}
        // customSetup={{
        //     dependencies: {
        //       react: "17.0.2",
        //       "react-dom": "17.0.2",
        //       "react-scripts": "4.0.0",
        //     },
        //   }}
        options={{
          showConsole: true,
          //   visibleFiles: ["/App.js", "/button.js", "/index.js"],
          //   activeFile: "/index.ts",
        }}
      >
        <div className="w-1/2 h-full bg-red-500">
          <SandpackCodeEditor />
          <SandpackPreview />
        </div>
      </SandpackProvider>
    </div>
  );
}
