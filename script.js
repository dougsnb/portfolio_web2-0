const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 40);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// Ao clicar no ícone do menu, alterna a classe 'open' na navlist
menu.onclick = () => {
    navlist.classList.toggle('open');
    menu.classList.toggle('bx-x'); // Adiciona ou remove a classe do ícone do menu

    if (window.scrollY < 90) {
        header.classList.toggle("sticky");
    }
}

// Ao rolar a página, remove a classe 'open' do menu
window.onscroll = () => {
    navlist.classList.remove('open');
    menu.classList.remove('bx-x'); // Remove a classe do ícone do menu
}

// Manipulação do elemento topo
const topo = document.getElementById("top");

window.addEventListener("scroll", function() {
    topo.classList.toggle("show-top", window.scrollY > 140);
    topo.classList.toggle("hide-top", window.scrollY < 140);
});

window.onload = () => {
    topo.classList.toggle("hide-top");
}

// Função para alternar a classe 'active' no menu
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active'); // Alterna a classe 'active'
}
