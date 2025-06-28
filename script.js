document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões e conteúdos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Adiciona a classe 'active' ao botão clicado
            button.classList.add('active');

            // Pega o ID do conteúdo da aba a ser exibido
            const tabId = button.dataset.tab;
            const targetContent = document.getElementById(tabId);

            // Adiciona a classe 'active' ao conteúdo da aba correspondente
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Opcional: Ativa a primeira aba por padrão ao carregar a página
    // Isso é útil se você não tiver uma aba ativa definida no HTML inicialmente
    if (tabButtons.length > 0 && tabContents.length > 0) {
        // Verifica se já existe uma aba ativa (definida no HTML)
        const activeTabButton = document.querySelector('.tab-button.active');
        if (!activeTabButton) {
            tabButtons[0].classList.add('active');
            tabContents[0].classList.add('active');
        }
    }
});
