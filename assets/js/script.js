// Aguarda o carregamento completo da página para executar o código
document.addEventListener('DOMContentLoaded', function() {

// --- INÍCIO DA INICIALIZAÇÃO DO CARROSSEL ---
const swiper = new Swiper('.swiper-container', {
    // Parâmetros Essenciais para mostrar 1 slide
    slidesPerView: 1,
    centeredSlides: true,
    
    // Parâmetros de Funcionalidade
    loop: true,
    spaceBetween: 30, // Espaço técnico entre os slides em loop
    
    // Autoplay
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // Pausa o autoplay quando o rato está sobre o carrossel
    },
    
    // Controles
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// --- FIM DA INICIALIZAÇÃO DO CARROSSEL ---

    // Seleciona os elementos do formulário e da mensagem de erro
    const form = document.getElementById('qualifyForm');
    const errorMessageDiv = document.getElementById('errorMessage');

    // Adiciona um "escutador" para o evento de submissão do formulário
    form.addEventListener('submit', function(event) {
        // Impede que o formulário seja enviado da forma tradicional (recarregando a página)
        event.preventDefault();

        // Esconde a mensagem de erro a cada nova tentativa
        errorMessageDiv.style.display = 'none';

        // --- INÍCIO DA LÓGICA DE FILTRAGEM ---

        // 1. Obtém os valores dos campos do formulário
        const tamanho = document.getElementById('tamanho').value;
        // .trim() remove espaços em branco antes e depois do texto
        // .toLowerCase() converte o texto para minúsculas para facilitar a comparação
        const cidade = document.getElementById('cidade').value.trim().toLowerCase();
        const entrega = document.getElementById('entrega').value;

        // 2. Define os seus critérios de qualificação
        const tamanhosPermitidos = ['M', 'G', 'GG'];
        const cidadePermitida = 'guaíba'; // em minúsculas para corresponder à conversão

        // 3. Verifica os critérios
        if (!tamanhosPermitidos.includes(tamanho)) {
            // Se o tamanho NÃO estiver na lista permitida...
            errorMessageDiv.innerText = 'Desculpe! No momento, para este modelo, só temos disponíveis os tamanhos M, G e GG.';
            errorMessageDiv.style.display = 'block'; // Mostra a mensagem de erro
            return; // Para a execução
        }
        
        if (cidade !== cidadePermitida) {
            // Se a cidade NÃO for a permitida...
            errorMessageDiv.innerText = 'Que pena! Atualmente, só conseguimos atender clientes da cidade de Guaíba.';
            errorMessageDiv.style.display = 'block'; // Mostra a mensagem de erro
            return; // Para a execução
        }

        // --- FIM DA LÓGICA DE FILTRAGEM ---

        // Se o cliente passou por todos os filtros, continue para o WhatsApp
        
        // **ALTERE ESTE NÚMERO PARA O SEU!** (código do país + DDD + número)
        const seuNumeroWhatsApp = '5551984529388'; 

        // Cria a mensagem que será pré-preenchida no WhatsApp
        const mensagem = `Olá! Gostaria de comprar uma peça. Minhas escolhas foram:\n\n- Tamanho: *${tamanho}*\n- Cidade: *${cidade.charAt(0).toUpperCase() + cidade.slice(1)}*\n- Entrega: *${entrega}*\n\nAguardo os modelos disponíveis!`;
        
        // Codifica a mensagem para ser usada numa URL (substitui espaços por %20, etc.)
        const mensagemCodificada = encodeURIComponent(mensagem);

        // Cria o link final para o WhatsApp
        const linkWhatsApp = `https://wa.me/${5551984529388}?text=${mensagemCodificada}`;

        // Redireciona o utilizador para o WhatsApp
        window.location.href = linkWhatsApp;
    });
});