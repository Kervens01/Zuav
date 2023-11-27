function displayContent(id) {
    // Cache tous les contenus
    const items = document.querySelectorAll('.content-item');
    items.forEach(item => {
        item.style.display = 'none';
    });

    // Affiche le contenu correspondant au bouton cliqué
    const contentToShow = document.getElementById(id);
    contentToShow.style.display = 'block';
}
