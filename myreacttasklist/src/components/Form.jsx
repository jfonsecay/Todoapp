import React, { useState } from 'react';

function form() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.length < 3) {
      setError('El nombre debe tener al menos 3 caracteres');
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre de la tarea:</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
      />
      <br />
      <label htmlFor="descripcion">Descripción:</label>
      <input
        type="text"
        id="descripcion"
        value={descripcion}
        onChange={(event) => setDescripcion(event.target.value)}
      />
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Guardar</button>
    </form>
  );
}

export default form;