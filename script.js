// Função para rolar até a seção de preços
function scrollToPrice() {
    document.getElementById('pricing').scrollIntoView({
        behavior: 'smooth'
    });
}

// Função para alternar FAQ
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Fechar todos os FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Abrir o FAQ clicado se não estava ativo
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Animação de entrada dos elementos quando entram na viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.benefit-item, .trigger-card, .stat-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Efeito de parallax suave no hero
function parallaxEffect() {
    const hero = document.querySelector('.hero');
    const heroBackground = document.querySelector('.hero-background');
    
    if (!hero || !heroBackground) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (scrolled < hero.offsetHeight) {
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Smooth scroll para todos os links internos
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Adicionar classe ativa aos botões CTA quando clicados
function setupCTAButtons() {
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            // Adicionar efeito visual de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Aqui você pode adicionar o código para redirecionar para a página de checkout
            // Por exemplo: window.location.href = 'https://checkout.exemplo.com';
            console.log('Redirecionando para checkout do Treinamento Tráfego...');
        });
    });
}

// Lazy loading para imagens
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Efeito de typing na headline (opcional)
function typewriterEffect() {
    const headline = document.querySelector('.headline');
    if (!headline) return;
    
    const text = headline.textContent;
    headline.textContent = '';
    headline.style.borderRight = '2px solid #FFC107';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            headline.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            headline.style.borderRight = 'none';
        }
    }
    
    // Iniciar o efeito após um pequeno delay
    setTimeout(typeWriter, 1000);
}

// Função para detectar dispositivos móveis
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustar comportamentos para mobile
function setupMobileOptimizations() {
    if (isMobile()) {
        // Reduzir animações em dispositivos móveis para melhor performance
        document.querySelectorAll('.benefit-item, .trigger-card').forEach(element => {
            element.style.transition = 'none';
        });
        
        // Ajustar tamanho de fonte dinamicamente
        const viewport = window.innerWidth;
        const scaleFactor = viewport / 375; // Base: iPhone SE
        document.documentElement.style.fontSize = `${Math.max(14, 16 * scaleFactor)}px`;
    }
}

// Contador de estatísticas animado
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalText = target.textContent;
                
                // Animação especial para números
                if (finalText === '1000+') {
                    let count = 0;
                    const interval = setInterval(() => {
                        target.textContent = count + '+';
                        count += 50;
                        if (count > 1000) {
                            target.textContent = '1000+';
                            clearInterval(interval);
                        }
                    }, 30);
                } else if (finalText === '24h') {
                    let count = 0;
                    const interval = setInterval(() => {
                        target.textContent = count + 'h';
                        count++;
                        if (count > 24) {
                            target.textContent = '24h';
                            clearInterval(interval);
                        }
                    }, 50);
                } else if (finalText === '∞') {
                    target.style.fontSize = '4rem';
                    target.textContent = '∞';
                }
                
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// Efeito de gráfico de tráfego simulado (opcional)
function simulateTrafficGraph() {
    const trafficDemo = document.createElement('div');
    trafficDemo.className = 'traffic-demo';
    trafficDemo.innerHTML = `
        <div class="traffic-chart">
            <div class="chart-bar" style="height: 20%"></div>
            <div class="chart-bar" style="height: 40%"></div>
            <div class="chart-bar" style="height: 60%"></div>
            <div class="chart-bar" style="height: 80%"></div>
            <div class="chart-bar" style="height: 100%"></div>
        </div>
        <p>📈 Seu tráfego crescendo!</p>
    `;
    
    // Adicionar estilos para o demo do gráfico
    const style = document.createElement('style');
    style.textContent = `
        .traffic-demo {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.5s ease;
            background: white;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            max-width: 200px;
        }
        
        .traffic-demo.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .traffic-chart {
            display: flex;
            align-items: end;
            height: 60px;
            gap: 5px;
            margin-bottom: 10px;
        }
        
        .chart-bar {
            background: linear-gradient(to top, #007bff, #28a745);
            width: 20px;
            border-radius: 3px 3px 0 0;
            animation: growBar 2s ease-out;
        }
        
        @keyframes growBar {
            from { height: 0; }
        }
        
        .traffic-demo p {
            text-align: center;
            margin: 0;
            font-weight: 600;
            color: #007bff;
            font-size: 0.9rem;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(trafficDemo);
    
    // Mostrar o demo após alguns segundos
    setTimeout(() => {
        trafficDemo.classList.add('show');
    }, 3000);
    
    // Remover após alguns segundos
    setTimeout(() => {
        trafficDemo.classList.remove('show');
        setTimeout(() => {
            trafficDemo.remove();
        }, 500);
    }, 8000);
}

// Inicializar todas as funcionalidades quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();
    parallaxEffect();
    setupSmoothScroll();
    setupCTAButtons();
    setupLazyLoading();
    setupMobileOptimizations();
    animateStats();
    
    // Opcional: ativar efeito de typing
    // typewriterEffect();
    
    // Opcional: ativar demo do gráfico de tráfego
    // simulateTrafficGraph();
});

// Otimização de performance: debounce para eventos de scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce aos eventos de scroll
window.addEventListener('scroll', debounce(() => {
    // Código de scroll otimizado aqui
}, 10));

// Preloader simples (opcional)
function setupPreloader() {
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #007bff;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            color: white;
            font-family: 'Montserrat', sans-serif;
            font-size: 1.2rem;
        ">
            <div>📈 Carregando estratégias de tráfego...</div>
        </div>
    `;
    
    document.body.appendChild(preloader);
    
    window.addEventListener('load', () => {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    });
}

// Ativar preloader (descomente se desejar usar)
// setupPreloader();

// Função para tracking de eventos (opcional - para analytics)
function trackEvent(eventName, eventData = {}) {
    // Aqui você pode integrar com Google Analytics, Facebook Pixel, etc.
    console.log('Event tracked:', eventName, eventData);
    
    // Exemplo de integração com Google Analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, eventData);
    // }
}

// Adicionar tracking aos CTAs
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.cta-button').forEach((button, index) => {
        button.addEventListener('click', () => {
            trackEvent('cta_click', {
                button_position: index + 1,
                button_text: button.textContent.trim()
            });
        });
    });
    
    // Tracking de scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', debounce(() => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (maxScroll >= 25 && maxScroll < 50) {
                trackEvent('scroll_depth', { depth: '25%' });
            } else if (maxScroll >= 50 && maxScroll < 75) {
                trackEvent('scroll_depth', { depth: '50%' });
            } else if (maxScroll >= 75 && maxScroll < 90) {
                trackEvent('scroll_depth', { depth: '75%' });
            } else if (maxScroll >= 90) {
                trackEvent('scroll_depth', { depth: '90%' });
            }
        }
    }, 1000));
});

