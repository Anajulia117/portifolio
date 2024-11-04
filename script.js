const main = document.getElementById('main');
let isDarkMode = false; // Variável para controlar o modo

// Função para alternar entre modos claro e escuro
function dark() {
    isDarkMode = !isDarkMode; // Alterna o estado do modo
    updateBackground(); // Atualiza o fundo com base no modo
    const main=document.getElementById("main")
        const sobre=document.getElementById("Sobre")
        const projeto=document.getElementById("projetos")
        const habilidades=document.getElementById("Habilidades")
        const nav=document.getElementById("nav")

        nav.classList.toggle("dark")
       
        sobre.classList.toggle("dark2")
        projeto.classList.toggle("darkmode")
        habilidades.classList.toggle("darkInv")
}

// Função para atualizar o fundo
function updateBackground() {
    const backgroundColor = isDarkMode ? 'black' : 'white'; // Preto para escuro, branco para claro
    main.style.backgroundColor = backgroundColor; // Define a cor de fundo
}

// Adiciona o evento de mousemove para criar o gradiente
main.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;

    // Definir as cores com base no modo
    const pinkColor = isDarkMode ? '255, 0, 0' : '240, 116, 252'; // Vermelho para escuro, rosa para claro
    const backgroundColor = isDarkMode ? 'black' : 'white'; // Preto para escuro, branco para claro

    // Criar um gradiente radial ao redor do ponteiro
    main.style.background = `radial-gradient(circle at ${offsetX}px ${offsetY}px, rgb(${pinkColor}), ${backgroundColor})`;
});

// Reseta o fundo ao sair do elemento
main.addEventListener('mouseleave', () => {
    updateBackground(); // Atualiza o fundo ao sair
});

// Funções para rolar suavemente para seções específicas
function Habilidades() {
    const habilidadesDiv = document.getElementById('Habilidades');
    habilidadesDiv.scrollIntoView({ behavior: 'smooth' }); // Desce suavemente para a div
}

function Sobre() {
    const sobreDiv = document.getElementById('Sobre');
    sobreDiv.scrollIntoView({ behavior: 'smooth' });
}

function Projetos() {
    const projetosDiv = document.getElementById('projetos');
    projetosDiv.scrollIntoView({ behavior: 'smooth' });
}

// Modal functionality
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fecha-o
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Quando o formulário for enviado
document.getElementById('myForm').onsubmit = function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    alert('Formulário enviado!'); // Exibe um alerta
    modal.style.display = "none"; // Fecha o modal
}

// Inicializa o fundo ao carregar a página
updateBackground();