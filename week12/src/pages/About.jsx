import {useCounter} from "../hooks/useCounter.jsx";

export default function About() {
  const { count, incrementCounter, decrementCounter } = useCounter()

  return (
    <div className="max-w-2xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About</h1>
      <p className="text-gray-600 text-lg">
        This is a demo app built with React, Vite, and Tailwind CSS. It exists
        purely to show how to deploy a frontend project to platforms like
        Netlify, Vercel, or GitHub Pages.
      </p>

      <div className="flex flex-col gap-2">
        <div>Count: {count}</div>
        <div>
            <button
                onClick={incrementCounter}
                className="border border-gray-500 p-2 m-2">Increment</button>
            <button
                onClick={decrementCounter}
                className="border border-gray-500 p-2 m-2">Decrement</button>
        </div>
      </div>
    </div>
  );
}
