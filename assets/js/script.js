// Configuração do ScrollReveal para animações ao rolar a página
document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false // Define como true se quiser que as animações repitam ao subir a página
    });

    // Aplicando animações em diferentes elementos
    sr.reveal('.reveal', { interval: 100 });
    sr.reveal('.section-title', { origin: 'left', distance: '100px' });
    sr.reveal('.hero-section h2', { delay: 100 });
    sr.reveal('.hero-section h1', { delay: 300 });
    sr.reveal('.hero-section h3', { delay: 500 });
    sr.reveal('.hero-section p', { delay: 700 });
    sr.reveal('.social-links', { delay: 900 });

    // Efeito de Máquina de Escrever Simples
    const textElement = document.getElementById('typing-text');
    const text = textElement.innerText;
    textElement.innerText = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            textElement.innerText += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Inicia o efeito após um pequeno delay
    setTimeout(typeWriter, 1000);

    // Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Fecha o menu mobile se estiver aberto
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // Mudar estilo da Navbar ao rolar
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.padding = '10px 0';
            nav.style.background = 'rgba(5, 5, 5, 0.95)';
            nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            nav.style.padding = '15px 0';
            nav.style.background = 'rgba(10, 10, 10, 0.8)';
            nav.style.boxShadow = 'none';
        }
    });
});
