body {
  font-family: Arial, sans-serif;
  background-color: #fff0f5;
  margin: 20px;
  padding: 0;
  color: #333;
}

h1 {
  text-align: center;
  color: #c71585;
}

#malla-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 40px;
  padding: 0 20px;
}

.semestre {
  background-color: #ffe6f0;
  border: 2px solid #c71585;
  border-radius: 10px;
  padding: 10px;
}

.semestre h2 {
  text-align: center;
  color: #c71585;
}

.ramo {
  background-color: #d3d3d3; /* gris por defecto */
  padding: 10px;
  margin: 5px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.ramo.completado {
  background-color: #ffb6c1; /* rosa cuando está aprobado */
}

.ramo.disponible {
  border: 2px solid #c71585;
}

