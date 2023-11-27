function uploadScreenshot() {
    const screenshotInput = document.getElementById('screenshot');
    const screenshotStatus = document.getElementById('screenshotStatus');

    // Vérifiez si un fichier a été sélectionné
    if (screenshotInput.files.length === 0) {
        screenshotStatus.textContent = 'Veuillez sélectionner un fichier.';
        return;
    }

    const screenshotFile = screenshotInput.files[0];
    const formData = new FormData();
    formData.append('screenshot', screenshotFile);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        screenshotStatus.textContent = data.message;
    })

    // Vous pouvez ajouter ici la logique pour télécharger le fichier sur votre serveur
    // Par exemple, en utilisant AJAX ou en envoyant le fichier via une requête HTTP

    // Ici, nous affichons simplement un message de confirmation
    screenshotStatus.textContent = `Fichier "${screenshotFile.name}" téléchargé avec succès.`;

    const urlConfirmation = `confirmation.php`;
    window.location.href = urlConfirmation;
}
