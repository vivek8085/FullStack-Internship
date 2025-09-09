import React, { useState } from "react";

function Topic({ title, children }) {
  return (
    <div className="p-4 mb-4 rounded-2xl shadow-md bg-gray-100">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{children}</p>
    </div>
  );
}

//Dynamic render
function DynamicList() {
  const topics = [
    "JSX Basics",
    "Reusable Components",
    "SPA vs MPA",
    "Git & GitHub"
  ];

  return (
    <div>
      <h3 className="font-semibold mb-2">Dynamic Topics:</h3>
      <ul className="list-disc list-inside">
        {topics.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

//React.createElement 
function CustomElementDemo() {
  const domElement = React.createElement(
    "a",
    { href: "https://www.google.com", target: "_blank", className: "text-blue-600 underline" },
    "click to visit Google"
  );

  return (
    <div className="p-3 border rounded-lg bg-white shadow-sm">
      <h3 className="font-semibold mb-2">React.createElement Example</h3>
      {domElement}
    </div>
  );
}

//Main App
export default function App() {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Meeting Summary</h1>

      <Topic title="Basics of React & JSX">
        The meeting covered React component structure, JSX rendering, and the
        importance of reusable components.
      </Topic>

      <Topic title="Single-Page vs Multi-Page Apps">
        SPA loads once and updates dynamically, while MPA reloads full pages.
      </Topic>

      <Topic title="Dynamic Rendering (Shafaqat)">
        <DynamicList />
      </Topic>

      <Topic title="Custom React Library (Mehjabeen)">
        Demonstrated how to create React elements manually with
        <code> React.createElement </code> and manipulate properties.
        <CustomElementDemo />
      </Topic>

      <Topic title="Version Control with Git/GitHub">
        Git & GitHub were highlighted as essential for managing code changes,
        collaboration, and tracking history.
      </Topic>

      <div className="text-center mt-6">
        <button
          onClick={() => setShowSummary(!showSummary)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md"
        >
          {showSummary ? "Hide Full Summary" : "Show Full Summary"}
        </button>
      </div>

      {showSummary && (
        <p className="mt-4 p-4 bg-yellow-100 rounded-lg">
          The meeting covered basics of React, JSX, reusable components,
          single-page vs multi-page apps, dynamic rendering, creating a custom
          React library, React.createElement usage, and Git/GitHub importance.
        </p>
      )}
    </div>
  );
}
