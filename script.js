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
  ],
  "Semestre 3": [
    "Gestión del Cuidado II",
    "Educación para la salud",
    "Biofísica y Fisiología",
    "Salud Pública",
    "Psicología General y Evolutiva",
    "Sociedad y Salud III",
    "Inglés 1/CFG"
  ],
  "Semestre 4": [
    "Enfermería en Salud Mental",
    "Nutrición",
    "Fisiopatología",
    "Farmacología",
    "Agentes Vivos de la Enfermedad",
    "Inglés 2/CFG"
  ],
  "Semestre 5": [
    "Enfermería en Niños, Niñas y Adolescentes",
    "Gestión en Salud I",
    "Salud Escolar",
    "Salud Pública en Enfermería",
    "Inglés 3/CFG"
  ],
  "Semestre 6": [
    "Enfermería en Adulto y Adulto Mayor I",
    "Psicología y Salud Comunitaria",
    "Gestión en Salud II",
    "Investigación en Salud",
    "Inglés 4"
  ],
  "Semestre 7": [
    "Enfermería en Adulto y Adulto Mayor II",
    "Gestión en Salud III",
    "Enfermería Ocupacional",
    "Seminario de Investigación I",
    "Inglés 5"
  ],
  "Semestre 8": [
    "Cuidados Complejos de Enfermería",
    "Modelos Emergentes del Cuidado",
    "Seminario de Investigación II",
    "Inglés 6"
  ],
  "Semestre 9": [
    "Internado I",
    "Enfermería en Urgencia"
  ],
  "Semestre 10": [
    "Internado II",
    "Integración Profesional"
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
