// #region Java Script dos botões do menu superior

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
// #endregion


// #regin Conteúdo do pop-up de projeto

// Dados dos projetos
const projetos = {
    flowmanager: {
        titulo: "FlowManager",
        descricao: "O FlowManager foi desenvolvido durante um hackathon com o objetivo de criar uma solução para facilitar a organização e a gestão de profissionais autônomos. A plataforma reúne diferentes etapas do trabalho em um único sistema, permitindo o gerenciamento de clientes, serviços, orçamentos e informações financeiras. \nA interface do sistema foi construída utilizando Lovable, enquanto o backend foi desenvolvido em PHP, com integração a um banco de dados MySQL.",
        papel: "Durante o desenvolvimento, atuei principalmente na construção da página de Orçamentos, responsável por centralizar as informações relacionadas aos serviços solicitados pelos clientes. Também participei do planejamento do projeto e contribuí na definição das funcionalidades e na comunicação das necessidades do projeto.",
        tecnologias: "PHP, MySQL, Lovable, React e TypeScript.",
        imagens: [
            "./assents/flowmanager/01-login.png",
            "./assents/flowmanager/04-login.png",
            "./assents/flowmanager/02-cadastro-1.png",
            "./assents/flowmanager/03-cadastro-2.png",
            "./assents/flowmanager/05-cliente.png",
            "./assents/flowmanager/06-servico.png",
            "./assents/flowmanager/07-orcamentos.png",
            "./assents/flowmanager/08-financeiro.png"
        ],
        video: [
            "./assents/flowmanager/09-video.mp4"
        ],
        repositorio: "https://github.com/MarlonOliveiraa/HackatonVoucherSenac"
    },

    calmamente: {
        titulo: "CalmaMente",
        descricao: "O CalmaMente é um protótipo de aplicativo mobile criado com a proposta de oferecer um espaço para conversas anônimas, pensado para pessoas que desejam desabafar, compartilhar o que estão sentindo ou simplesmente encontrar alguém disposto a ouvir. \nA proposta do aplicativo é proporcionar uma experiência simples e acolhedora, na qual o usuário possa iniciar ou participar de uma conversa sem precisar expor sua identidade. O projeto explora principalmente a construção da interface, a navegação entre as telas e a experiência que o usuário teria ao utilizar a aplicação.",
        papel: "O CalmaMente foi desenvolvido individualmente por mim, desde a concepção da ideia até a implementação das telas e funcionalidades demonstrativas. O projeto não possui comunicação real entre usuários e não conta com um backend funcional, portanto as conversas apresentadas na aplicação são apenas simulações para demonstrar como seria a experiência do aplicativo.",
        tecnologias: "React Native, JavaScript e TypeScript.",
        imagens: [
            "./assents/calmaMente/01-capa.jpg",
            "./assents/calmaMente/02-escolher.jpg",
            "./assents/calmaMente/03-espera-desabafar.jpg",
            "./assents/calmaMente/04-chat-desabafar.jpg",
            "./assents/calmaMente/05-chat-desabafar-tempo.jpg",
            "./assents/calmaMente/06-espera-ouvir.jpg",
            "./assents/calmaMente/07-chat-ouvir.jpg",
            "./assents/calmaMente/08-outro-encerrou.jpg"
        ],
        video: [
            "./assents/calmaMente/09-video.mp4"
        ],
        repositorio: "https://github.com/NicolleZaleski/CalmaMente"
    },

    etcom: {
        titulo: "ET.com",
        descricao: "O ET.com foi desenvolvido como projeto integrador e consiste em uma plataforma de e-commerce estruturada para atender diferentes tipos de usuários dentro do sistema. A aplicação possui áreas e funcionalidades específicas para clientes, associados e administradores, permitindo organizar diferentes processos relacionados à venda e gerenciamento dos produtos. \nEntre as funcionalidades desenvolvidas estão o gerenciamento de pedidos, lista de desejos, navegação entre produtos e diferentes áreas da plataforma. O projeto também envolveu a organização da interface e a integração entre as funcionalidades do frontend e backend.",
        papel: "Minha participação esteve concentrada no desenvolvimento das sidebars da aplicação, na implementação do frontend da área de Meus Pedidos e no desenvolvimento do backend da Lista de Desejos. Também participei da documentação do projeto e atuei como P.O. durante parte do desenvolvimento, contribuindo para o planejamento das atividades e organização das demandas da equipe.",
        tecnologias: "HTML, CSS, JavaScript, PHP e MySQL.",
        imagens: [
            "./assents/et-com/01-pagina-inicial.png",
            "./assents/et-com/02-pagina-inicial.png",
            "./assents/et-com/03-pagina-inicial.png",
            "./assents/et-com/04-login.png",
            "./assents/et-com/05-sidebar.png",
            "./assents/et-com/06-categoria-corporal.png",
            "./assents/et-com/07-meu-carrinho.png",
            "./assents/et-com/08-lista-desejo.png",
            "./assents/et-com/09-meus-pedidos.png",
            "./assents/et-com/10-minha-conta.png",
            "./assents/et-com/11-dashboard-ass.png",
            "./assents/et-com/12-produtos-ass.png",
            "./assents/et-com/13-vendas-ass.png",
            "./assents/et-com/14-relatorios-ass.png",
            "./assents/et-com/15-dashboard-adm.png",
            "./assents/et-com/16-produtos-adm.png",
            "./assents/et-com/17-associados-adm.png",
            "./assents/et-com/18-customizacao-adm.png"
        ],
        video: [
            "./assents/et-com/19-cliente.mp4",
            "./assents/et-com/20-associado.mp4",
            "./assents/et-com/21-administrador.mp4"
        ],
        repositorio: "https://github.com/From-Devs/projeto-integrador-et.com"
    }
}
// endregion


// #region Funcionamento do Pop-eup e carrossel
let projetoAtual = null;
let midiasAtuais = [];
let indiceMidia = 0;

// elementos do pop-up
const popUpProjetos = document.querySelector(".popUpProjetos");
const popupTitulo = document.getElementById("popupTitulo");
const popupDescricao = document.getElementById("popupDescricao");
const popupPapel = document.getElementById("popupPapel");
const popupTecnologias = document.getElementById("popupTecnologias");
const areaMidia = document.getElementById("areaMidia");
const contadorMidia = document.getElementById("contadorMidia");
const meuRepositorio = document.getElementById("meuRepositorio");

// Abrir pop-up
function abrirProjeto(idProjeto){
    const projeto = projetos[idProjeto];

    // Verifica se tem projeto
    if(!projeto){
        console.erro("Projeto não encontrado: ", idProjeto);
        return;
    }

    // Guarda o projeto
    projetoAtual = projeto;

    // Preenche as informações
    popupTitulo.textContent = projeto.titulo;
    popupDescricao.textContent = projeto.descricao; 
    popupPapel.textContent = projeto.papel;
    popupTecnologias.textContent = projeto.tecnologias;
    meuRepositorio.href = projeto.repositorio;

    midiasAtuais = [];

    //imagem
    projeto.imagens.forEach((imagem) => {
        midiasAtuais.push({
            tipo: "imagem",
            src: imagem
        });
    });

    //video
    projeto.video.forEach((video) => {
        midiasAtuais.push({
            tipo: "video",
            src: video
        });
    });

    // começa pela primeira midia
    indiceMidia = 0;

    // mostrar a midia
    mostrarMidia();

    // abre o pop-up
    popUpProjetos.classList.add("aberto");

    // impede a paginade scrollar enquanto 
    document.body.style.overflow = "hidden";

}
// #endregion


// #region Mostrar midia
function mostrarMidia(){
    // limpa a área da mídia
    areaMidia.innerHTML = "";

    //verificar se existe mídia
    if (midiasAtuais.length === 0){
        contadorMidia.textContent = "0 / 0";
        return;
    }

    const midia = midiasAtuais[indiceMidia];

    let elemento;

    // para imagem
    if (midia.tipo === "imagem"){
        elemento = document.createElement("img");
        elemento.src = midia.src;
        elemento.alt = `${projetoAtual.titulo} - imagem ${indiceMidia + 1}`;
    }

    // para video
    else if (midia.tipo === "video"){
        elemento = document.createElement("video");
        elemento.src = midia.src;
        elemento.controls = true;
        elemento.preload = "metadata";
    }

    // coloca a midia no carrossel
    areaMidia.appendChild(elemento);

    contadorMidia.textContent = `${indiceMidia + 1} / ${midiasAtuais.length}`;
}
// #endregion


// #region Mudar midia
function mudarMidia (direcao){
    if (midiasAtuais.length === 0){
        return;
    }

    indiceMidia += direcao;

    if (indiceMidia >= midiasAtuais.length){
        indiceMidia = 0;
    }

    if (indiceMidia < 0){
        indiceMidia= midiasAtuais.length - 1;
    }

    mostrarMidia();
}
//#endregion


// #region Fechar projeto
function fecharProjeto(){
    popUpProjetos.classList.remove("aberto");

    document.body.style.overflow = "";

    areaMidia.innerHTML = "";
}

//fechar clicando fora
popUpProjetos.addEventListener("click", function(event){
    if (event.target === popUpProjetos){
        fecharProjeto();
    }
});
// #endregion


