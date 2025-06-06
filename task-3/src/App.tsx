import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [result, setResult] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create a new worker
    const worker = new Worker(new URL('./worker.ts', import.meta.url));

    // Handle messages from the worker
    worker.onmessage = (e) => {
      setResult(e.data);
      setIsLoading(false);
    };

    // Start the computation
    worker.postMessage('start');

    // Cleanup: terminate the worker when component unmounts
    return () => {
      worker.terminate();
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Calculating...</div>
      ) : (
        <div>Result: {result}</div>
      )}
    </>
  );
}

export default App;
