const btnEnviar = document.getElementById('btn-enviar');
const formulario = document.getElementById("form");

btnEnviar.addEventListener("click", (event) => {
    event.preventDefault();

    const inputs = formulario.querySelectorAll("input, textarea");
    inputs.forEach((campo) => {
        if (campo.value.trim() === "") {
            campo.classList.add("campo-obrigatorio");
            campo.classList.remove("campo-preenchido");
            campo.nextElementSibling?.classList.remove("oculto");
        } else {
            campo.classList.add("campo-preenchido");
            campo.classList.remove("campo-obrigatorio");
            campo.nextElementSibling?.classList.add("oculto");
        }
    });
});

