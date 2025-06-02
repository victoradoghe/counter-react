import React, { useState } from 'react';

// Main App component
const App = () => {
  // State to hold the current count value
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 w-full max-w-sm text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 font-inter">
          Simple Counter
        </h1>

        {/* Display the current count */}
        <div className="text-6xl font-bold text-blue-600 mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          {count}
        </div>

        {/* Buttons for increment and decrement */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={decrement}
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Decrement
          </button>
          <button
            onClick={increment}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default App; 