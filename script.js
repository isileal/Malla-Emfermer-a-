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

const prerequisitos = {
  "Gestión del Cuidado I": ["Fundamentos Diciplinares de Enfermería"],
  "Biología y Genética": ["Matemáticas y Bioestadística"],
  "Sociedad y Salud II": ["Sociedad y Salud I"],
  "Gestión del Cuidado II": ["Gestión del Cuidado I", "Histología y Embriología", "Anatomía"],
  "Biofísica y Fisiología": ["Histología y Embriología", "Anatomía", "Biología y Genética"],
  "Salud Pública": ["Matemáticas y Bioestadística", "Sociedad y Salud II"],
  "Psicología General y Evolutiva": ["Gestión del Cuidado I", "Sociedad y Salud II"],
  "Sociedad y Salud III": ["Sociedad y Salud II"],
  "Inglés 2/CFG": ["Inglés 1/CFG"],
  "Enfermería en Salud Mental": ["Gestión del Cuidado II", "Educación para la salud", "Biofísica y Fisiología", "Psicología General y Evolutiva", "Sociedad y Salud III"],
  "Nutrición": ["Biología y Genética", "Biofísica y Fisiología"],
  "Fisiopatología": ["Biología y Genética"],
  "Farmacología": ["Biología y Genética"],
  "Agentes Vivos de la Enfermedad": ["Biología y Genética"],
  "Enfermería en Niños, Niñas y Adolescentes": ["Enfermería en Salud Mental", "Nutrición", "Fisiopatología", "Farmacología"],
  "Salud Escolar": ["Enfermería en Salud Mental", "Nutrición"],
  "Salud Pública en Enfermería": ["Salud Pública"],
  "Inglés 3/CFG": ["Inglés 2/CFG"],
  "Enfermería en Adulto y Adulto Mayor I": ["Enfermería en Niños, Niñas y Adolescentes", "Salud Escolar"],
  "Psicología y Salud Comunitaria": ["Salud Pública"],
  "Gestión en Salud II": ["Gestión en Salud I"],
  "Investigación en Salud": ["Matemáticas y Bioestadística", "Ética y Bioética"],
  "Inglés 4": ["Inglés 3/CFG"],
  "Enfermería en Adulto y Adulto Mayor II": ["Enfermería en Adulto y Adulto Mayor I"],
  "Gestión en Salud III": ["Gestión en Salud II"],
  "Enfermería Ocupacional": ["Psicología y Salud Comunitaria"],
  "Seminario de Investigación I": ["Investigación en Salud"],
  "Inglés 5": ["Inglés 4"],
  "Cuidados Complejos de Enfermería": ["Enfermería en Adulto y Adulto Mayor II"],
  "Modelos Emergentes del Cuidado": ["Enfermería en Adulto y Adulto Mayor II"],
  "Seminario de Investigación II": ["Seminario de Investigación I"],
  "Inglés 6": ["Inglés 5"]
  "Internado I": [
    "Fundamentos Diciplinares de Enfermería", "Química y Bioquímica", "Matemáticas y Bioestadística",
    "Ética y Bioética", "Sociedad y Salud I", "Alfabetización Académica", "Gestión del Cuidado I",
    "Histología y Embriología", "Anatomía", "Biología y Genética", "Sociedad y Salud II", "CFG",
    "Gestión del Cuidado II", "Educación para la salud", "Biofísica y Fisiología", "Salud Pública",
    "Psicología General y Evolutiva", "Sociedad y Salud III", "Inglés 1/CFG", "Enfermería en Salud Mental",
    "Nutrición", "Fisiopatología", "Farmacología", "Agentes Vivos de la Enfermedad", "Inglés 2/CFG",
    "Enfermería en Niños, Niñas y Adolescentes", "Gestión en Salud I", "Salud Escolar",
    "Salud Pública en Enfermería", "Inglés 3/CFG", "Enfermería en Adulto y Adulto Mayor I",
    "Psicología y Salud Comunitaria", "Gestión en Salud II", "Investigación en Salud", "Inglés 4",
    "Enfermería en Adulto y Adulto Mayor II", "Gestión en Salud III", "Enfermería Ocupacional",
    "Seminario de Investigación I", "Inglés 5", "Cuidados Complejos de Enfermería",
    "Modelos Emergentes del Cuidado", "Seminario de Investigación II", "Inglés 6"
],
"Enfermería en Urgencia": ["Internado I"],
"Internado II": ["Internado I"],
"Integración Profesional": ["Internado I"]

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
      if (!prerequisitos[ramo]) div.classList.add("disponible");

      div.addEventListener("click", () => marcarComoCompletado(div));
      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  }
}

function marcarComoCompletado(elemento) {
  const nombre = elemento.dataset.nombre;
  if (completados.includes(nombre)) return;

  completados.push(nombre);
  elemento.classList.add("completado");
  desbloquearRamos();
}

function desbloquearRamos() {
  const ramos = document.querySelectorAll(".ramo:not(.completado)");
  ramos.forEach((ramo) => {
    const nombre = ramo.dataset.nombre;
    const requisitos = prerequisitos[nombre];
    if (!requisitos) return;
    const cumplidos = requisitos.every((req) => completados.includes(req));
    if (cumplidos) ramo.classList.add("disponible");
  });
}

crearMalla();
