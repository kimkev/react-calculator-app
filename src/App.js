import React, { useState } from 'react';
import './App.css';
import KeyPad from './components/KeyPad';
import Result from './components/Result';

function App() {

  const [result, setResult] = useState(0);
  const [process, setProcess] = useState('');

  return (
    <div className="calculator-body">
      <h1>Basic Calculator</h1>

      <Result
        result={result}
        process={process}
      />

      <KeyPad
        result={result}
        setResult={setResult}
        process={process}
        setProcess={setProcess}
      />


      <footer className="footer">
        <a href="https://kimkev.github.io/ReactPage.html" target="_self">Back</a>
      </footer>
    </div>
  );
}

export default App;
