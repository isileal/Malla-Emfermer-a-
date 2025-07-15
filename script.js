const malla = {
  "Semestre 1": [
    "Fundamentos Diciplinares de Enfermería",
    "Química y Bioquímica",
    "Matemáticas y Bioestadística",
    "Ética y Bioética",
    "Sociedad y Salud I",
    "Alfabetización Académica"
  ],
  "Semestre 2": [
    "Gestión del Cuidado I",
    "Histología y Embriología",
    "Anatomía",
    "Biología y Genética",
    "Sociedad y Salud II",
    "CFG"
  ]
};

let completados = [];

function crearMalla() {
  const contenedor = document.getElementById("malla-container");

  for (const [semestre, ramos] of Object.entries(malla)) {
    const columna = document.createElement("div");
    columna.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    columna.appendChild(titulo);

    ramos.forEach((ramo) => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo;
      div.dataset.nombre = ramo;

      div.addEventListener("click", () => marcarComoCompletado(div));

      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  }
}

function marcarComoCompletado(elemento) {
  const nombre = elemento.dataset.nombre;

  if (completados.includes(nombre)) {
    return;
  }

  completados.push(nombre);
  elemento.classList.add("completado");
}

crearMalla();
