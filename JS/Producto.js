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