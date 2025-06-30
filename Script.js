document.addEventListener('DOMContentLoaded', () => {
    // --------- TABS ---------
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');

            const tabId = button.dataset.tab;
            const targetContent = document.getElementById(tabId);

            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    if (tabButtons.length > 0 && tabContents.length > 0) {
        const activeTabButton = document.querySelector('.tab-button.active');
        if (!activeTabButton) {
            tabButtons[0].classList.add('active');
            tabContents[0].classList.add('active');
        }
    }

    // --------- CÓPIA DA CHAVE PIX ---------
    const botaoCopiarPix = document.querySelector('.copy-pix-button');
    const chavePixElemento = document.querySelector('.pix-key-value');

    if (botaoCopiarPix && chavePixElemento) {
        botaoCopiarPix.addEventListener('click', async () => {
            const chave = chavePixElemento.textContent.trim();

            try {
                // Tenta método moderno
                await navigator.clipboard.writeText(chave);
                botaoCopiarPix.textContent = "Chave Copiada!";
            } catch (err) {
                // Fallback com input temporário
                const tempInput = document.createElement("input");
                tempInput.value = chave;
                document.body.appendChild(tempInput);
                tempInput.select();
                tempInput.setSelectionRange(0, 99999);

                try {
                    const sucesso = document.execCommand("copy");
                    if (sucesso) {
                        botaoCopiarPix.textContent = "Chave Copiada!";
                    } else {
                        throw new Error();
                    }
                } catch (err2) {
                    alert("Não foi possível copiar. Copie manualmente.");
                }

                document.body.removeChild(tempInput);
            }

            botaoCopiarPix.disabled = true;
            setTimeout(() => {
                botaoCopiarPix.textContent = "Copiar Chave";
                botaoCopiarPix.disabled = false;
            }, 2000);
        });
    }
});
