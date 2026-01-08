// Função para inicializar o menu de navegação móvel (hambúrguer)
function initMobileMenu() {
    const hamburger = document.querySelector(".navbar__hamburger");
    const navMenu = document.querySelector(".navbar__menu");

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener("click", () => {
        const isActive = hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        hamburger.setAttribute("aria-expanded", isActive);
    });

    document.querySelectorAll(".navbar__link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
        });
    });
}

// Função para inicializar o efeito de digitação dinâmico
function initTypewriter() {
    const typewriterElement = document.querySelector(".typewriter");
    if (!typewriterElement) return;
    
    const words = ["Kaio Herculano", "Desenvolvedor Python"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        const speed = isDeleting ? 75 : 150;

        // Atualiza o texto
        typewriterElement.textContent = currentWord.substring(0, charIndex);

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        // Se a palavra terminou de ser digitada ou apagada
        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, 2000); // Pausa antes de apagar
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Vai para a próxima palavra
        }

        setTimeout(type, speed);
    }
    
    type();
}

// Função para inicializar as animações de rolagem
function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");
    if (revealElements.length === 0) return;

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Para a animação não repetir
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento está visível
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Evento que dispara as funções quando o DOM está pronto
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initTypewriter();
    initScrollReveal();
});