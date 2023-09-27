import React from 'react';
import './App.css';
import Books from './Books'; // Importe o componente Login

function App() {
  return (
    <div className="App">
      <h1>Minha Aplicação</h1>
      <Books /> {/* Renderize o componente de login */}
    </div>
  );
}

export default App;