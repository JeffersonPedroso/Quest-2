const btnEnviar = document.getElementById('btn-enviar');
const formulario = document.getElementById("form");

btnEnviar.addEventListener("click", (event) => {
    event.preventDefault();

    const inputs = formulario.querySelectorAll("input, textarea");
    inputs.forEach((campo) => {
        if ((campo.value || "").trim() === "") {
            campo.nextElementSibling?.classList.remove("oculto");
            campo.classList.add("campo-obrigatorio");
            
        } else {
            campo.classList.remove("campo-obrigatorio");
            campo.nextElementSibling?.classList.add("oculto");
            campo.classList.add("campo-preenchido");
        }
    });
});

