const secoes = document.querySelectorAll(".page1, .page2, .page3");
const itensMenu = document.querySelectorAll(".itemMenu a");

// Menu Superior: vai alterar o botão do menu ao mudar a área da página
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting){
            itensMenu.forEach((item) => {
                item.classList.remove("ativo");
            });

            const idSecao = entrada.target.getAttribute("id");

            const itemAtivo = document.querySelector(
                `.itemMenu a[href="#${idSecao}"]`
            );

            if (itemAtivo){
                itemAtivo.classList.add("ativo");
            }
        }
    });
}, {
    threshold: 0.5
});

secoes.forEach((secao) => {
    observador.observe(secao);
});