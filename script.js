
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

console.log('✅ Site Porto Consórcios carregado!');

function playVideo() {
    const player = document.getElementById('videoPlayer');
    const iframe = document.getElementById('videoIframe');
    const thumbnail = player.querySelector('.video-thumbnail');

    // Lazy load: só seta src ao clicar
    if (!iframe.src) {
        iframe.src = 'https://www.youtube.com/embed/SEU_VIDEO_ID?autoplay=1&rel=0';
    }

    thumbnail.style.display = 'none';
    iframe.style.display = 'block';
}


