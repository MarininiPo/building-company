document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');

    // Открыть модальное окно
    burgerMenu.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Закрыть модальное окно
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрыть модальное окно при клике вне контента
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});