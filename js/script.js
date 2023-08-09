// Variable para almacenar el índice actual de la diapositiva en el carrusel
let currentIndex = 0;

// Obtener todas las diapositivas del carrusel y almacenarlas en un array  es la que te permite obtener y almacenar en la variable carouselItems todas las diapositivas del carrusel en una especie de "caja" o conjunto (técnicamente, es un objeto NodeList). Una vez que tienes esa "caja" con todas las diapositivas, puedes acceder y modificar cada diapositiva individualmente a tu gusto.
const carouselItems = document.querySelectorAll('.carousel-item');



// Función para mostrar la diapositiva correspondiente al índice dado (puedes decir que la función showSlide(index) es la encargada de mostrar las diapositivas del carrusel. El parámetro index que recibe la función representa el número de la diapositiva que deseas mostrar.
function showSlide(index) {
    // Remover la clase 'active' de la diapositiva actual para ocultarla ( esta línea de código calcula el índice de la diapositiva que se mostrará en el carrusel, asegurándose de que el índice esté dentro del rango válido de diapositivas (por ejemplo, si llegas al final del carrusel, volverás al inicio para que el carrusel se repita).)
    carouselItems[currentIndex].classList.remove('active');
    // Calcular el nuevo índice de diapositiva considerando el número de diapositivas en el carrusel (  currentIndex = (index + carouselItems.length) % carouselItems.length;)
    currentIndex = (index + carouselItems.length) % carouselItems.length;
    // Agregar la clase 'active' a la nueva diapositiva para mostrarla (esta línea de código se asegura de que la diapositiva seleccionada se muestre en el carrusel agregando la clase "active" a esa diapositiva. Es como si se encendiera la luz sobre la diapositiva para que sea visible en el carrusel.)
    carouselItems[currentIndex].classList.add('active');
}

// Función es para hacer que el carrucel avance o retroceda n solo es el nombre q yo le quise poner es como el indicador de ir hacia delante o hacia atras
function changeSlide(n) {
   
    showSlide(currentIndex + n);
}

// Autoplay del carrusel (opcional)
// Se utiliza setInterval para cambiar automáticamente la diapositiva cada 8 segundos (8000 milisegundos)
let autoplayInterval = setInterval(() => {
    
    changeSlide(1);
}, 8000); //este es el tiempo que tendra la dia diapositiva del carrucel

// Event listener para el formulario de trivia
document.getElementById('triviaForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario al enviarlo

    // Respuestas correctas para la trivia
    const answers = ['B', 'C', 'A'];

    // Obtener los elementos del formulario de trivia
    const formElements = e.target.elements;

    let correctAnswers = 0;
    // Recorrer las respuestas del formulario y verificar cuántas son correctas
    for (let i = 1; i <= 3; i++) {
        // Obtener la respuesta seleccionada por el usuario para cada pregunta
        const question = formElements[`question${i}`].value;
        // Verificar si la respuesta coincide con la respuesta correcta en el array 'answers'
        if (question === answers[i - 1]) {
            correctAnswers++; // Incrementar el contador de respuestas correctas
        }
    }

    // Mostrar el resultado de la trivia en el elemento con el id 'result'
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Tuviste ${correctAnswers} respuestas correctas de 3.</p>`;

    // Agregar mensajes según el puntaje obtenido en la trivia
    if (correctAnswers === 3) {
        resultDiv.innerHTML += '<p class="text-feliz">¡Felicitaciones! Eres una experta en Barbie♥.</p>';
    } else if (correctAnswers >= 1) {
        resultDiv.innerHTML += '<p class="text-bien">¡Bien hecho! Puedes mejorar tus conocimientos sobre Barbie♥.</p>';
    } else {
        resultDiv.innerHTML += '<p class="text-ups">Ups, necesitas estudiar más sobre Barbie♥.</p>';
    }
});

function mostrarTexto() {
    var textoOculto = document.getElementById("textoOculto");
    textoOculto.style.display = "block";
}
