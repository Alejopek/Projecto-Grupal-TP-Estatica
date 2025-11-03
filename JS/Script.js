document.addEventListener('DOMContentLoaded', function () {

const carousel = document.getElementById('menuCarousel');

if (!carousel) return;

const items = Array.from(carousel.querySelectorAll('.carousel-item'));

if (items.length === 0) return;

const prevBtn = carousel.querySelector('.carousel-control-prev');
const nextBtn = carousel.querySelector('.carousel-control-next');

let current = items.findIndex(i => i.classList.contains('active'));
if (current === -1) current = 0;

const interval = 5000;

const wrap = true;

let timer = null;

function show(index) {
if (index < 0) index = wrap ? items.length - 1 : 0;
if (index >= items.length) index = wrap ? 0 : items.length - 1;

items.forEach((el, i) => {
el.classList.toggle('active', i === index);
});

current = index;

}

function next() {
show(current + 1);
restartTimer();
}

function prev() {
show(current - 1);
restartTimer();
}

function startTimer() {
if (interval > 0) {
timer = setInterval(() => { show(current + 1); }, interval);
	}
}

function stopTimer() {
if (timer) { clearInterval(timer); timer = null; 
	}
}

function restartTimer() {
stopTimer();
startTimer();
}

if (nextBtn) nextBtn.addEventListener('click', (e) => { e.preventDefault(); next(); });
if (prevBtn) prevBtn.addEventListener('click', (e) => { e.preventDefault(); prev(); });

document.addEventListener('keydown', (e) => {

if (!document.body.contains(carousel)) return;
if (e.key === 'ArrowRight') next();
if (e.key === 'ArrowLeft') prev();
});

let startX = 0;
let isTouch = false;
carousel.addEventListener('touchstart', (e) => {
isTouch = true;
startX = e.touches[0].clientX;

stopTimer();
}, { passive: true });

carousel.addEventListener('touchmove', (e) => {
if (!isTouch) return;

}, { passive: true });

carousel.addEventListener('touchend', (e) => {
if (!isTouch) return;

const endX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : startX;

const diff = endX - startX;

if (Math.abs(diff) > 30) {
if (diff < 0) next(); else prev();
}

isTouch = false;

restartTimer();
});

show(current);

startTimer();

});

document.addEventListener("DOMContentLoaded", () => {
        const Realizado = document.getElementById("Realizado");
        const Enviar = document.getElementById("Enviar");
        const Cancelado = document.getElementById("Cancelado");

        Realizado.addEventListener("click", (evento) => {
          evento.preventDefault();
          Enviar.textContent = " Su envío se realizo correctamente";
          console.log("Envío realizado con éxito");
        });


        Cancelado.addEventListener("click", (evento) => {
          evento.preventDefault();
          Enviar.textContent = "Envío cancelado por el usuario";
          console.warn("Pedido cancelado ");
        });
      });

