document.addEventListener('DOMContentLoaded', function() {
  //simulando que se está escribiendo en pantalla.//
  const text = "Hola, soy Brayan Stiven Perez Carrion";
  let i = 0;

  function typing() {
      if (i < text.length) {
          document.getElementById("typing").innerHTML += text.charAt(i);
          i++;
          setTimeout(typing, 50);
      }
  }
  document.getElementById("typing").innerHTML = "";
  typing();

//Aquí desarrollo el fondo animado tipo Matrix usando canvas.// 
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff88";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 35);
//aca tengo el formulario de reseñas// 
const resenaForm = document.getElementById("resena-form");
const resenasContainer = document.getElementById("resenas-container");

resenaForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("resenaNombre").value;
    const trabajo = document.getElementById("resenaTrabajo").value;
    const descripcion = document.getElementById("resenaDescripcion").value;
    const calificacion = document.getElementById("resenaCalificacion").value;

    const div = document.createElement("div");
    div.classList.add("resena", "p-3", "mb-3", "glass");
    div.innerHTML = `
        <h5>${nombre} - ${trabajo}</h5>
        <p>${descripcion}</p>
        <p>Calificación: ${"⭐".repeat(calificacion)}</p>
    `;

    resenasContainer.appendChild(div);

    resenaForm.reset();
});

//aca tengo el formulado de contacto// 
const contactForm = document.getElementById("contact-form");
const mensajeExito = document.getElementById("mensajeExito");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const tipoProyecto = document.getElementById("tipoProyecto").value;
    const descripcion = document.getElementById("descripcion").value;

    console.log({ nombre, tipoProyecto, descripcion });

    // Muestra mensaje 
    mensajeExito.classList.remove("d-none");

    // Oculta el mensaje despues de 4 segundos 
    setTimeout(() => {
        mensajeExito.classList.add("d-none");
    }, 4000);

    contactForm.reset();
});
// ANIMACIONES SCROLL// 
const reveals = document.querySelectorAll("section, .project, .skill");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

reveals.forEach(el => el.classList.add("reveal"));
}); // Cierre del DOMContentLoaded