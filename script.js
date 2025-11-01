function toggleFaq(button) {
    const item = button.parentElement;
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
    if (!wasActive) item.classList.add('active');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            target.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth',
                block: 'start'
            });
        }
    });
});

function scrollToSimulador() {
    document.getElementById('simulador').scrollIntoView({ behavior: 'smooth' });
}

function playVideo() {
    const player = document.getElementById('videoPlayer');
    const iframe = document.getElementById('videoIframe');
    const thumbnail = player.querySelector('.video-thumbnail');

    if (!iframe.src) {
        iframe.src = 'https://www.youtube.com/embed/SEU_VIDEO_ID?autoplay=1&rel=0';
    }
    thumbnail.style.display = 'none';
    iframe.style.display = 'block';
}

// Modal de Simulação
const modal = document.getElementById('modalSimulacao');
const btnsAbrirModal = document.querySelectorAll('.abrir-modal');
const btnFecharModal = document.getElementById('fecharModal');

// Abrir modal
btnsAbrirModal.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Fechar modal
btnFecharModal.addEventListener('click', function () {
    modal.classList.remove('active');
    document.body.style.overflow = '';
});

// Fechar modal ao clicar fora
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Fechar modal com ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Validação e envio do formulário
const formSimulacao = document.getElementById('formSimulacao');

formSimulacao.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const credito = document.getElementById('credito').value;

    // Validação básica
    if (!nome || !email || !telefone || !credito) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    // Aqui você pode enviar os dados para seu backend
    console.log('Dados do formulário:', {
        nome,
        email,
        telefone,
        credito
    });

    // Simular envio bem-sucedido
    alert('Obrigado! Em breve entraremos em contato com você.');

    // Fechar modal e limpar formulário
    modal.classList.remove('active');
    document.body.style.overflow = '';
    formSimulacao.reset();
});

// Máscara de telefone
const telefoneInput = document.getElementById('telefone');
telefoneInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length <= 11) {
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    }

    e.target.value = value;
});

console.log('✅ Site Porto Consórcios carregado!');