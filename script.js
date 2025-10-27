
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
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        function scrollToSimulador() {
            document.getElementById('simulador').scrollIntoView({ behavior: 'smooth' });
        }

        console.log('✅ Site Porto Consórcios carregado!');
