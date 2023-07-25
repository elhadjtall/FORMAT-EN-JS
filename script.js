function showContent(contentId) {
    // Cacher tous les contenus
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // Afficher le contenu sélectionné
    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
}