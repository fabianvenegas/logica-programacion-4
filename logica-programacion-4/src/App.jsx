import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [fibonacciSequence, setFibonacciSequence] = useState([]);
  const [error, setError] = useState('');

  // Función que calcula la serie de Fibonacci
  const calculateFibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);  // Retorna solo 'n' números de la serie
  };

  // Controlador para manejar el input y el botón
  const handleSubmit = (e) => {
    e.preventDefault();

    const num = parseInt(inputValue);
    
    // Validar si es un número
    if (isNaN(num) || num <= 0) {
      setError('Por favor ingresa un número válido mayor que 0');
      setFibonacciSequence([]);
    } else {
      setError('');
      setFibonacciSequence(calculateFibonacci(num));
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Generador de Fibonacci</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ingresa un número"
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            marginLeft: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Generar
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {fibonacciSequence.length > 0 && (
        <div>
          <h2>Serie de Fibonacci:</h2>
          <p>{fibonacciSequence.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default App;