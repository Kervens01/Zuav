// Récupérez l'élément pour l'affichage du code de confirmation
const confirmationCodeElement = document.getElementById('confirmationCode');

// Simulez une confirmation de code après un certain délai (par exemple, 3 secondes)
setTimeout(() => {
    const confirmationCode = '20 minutes'; // Remplacez par le code de confirmation réel
    confirmationCodeElement.textContent = confirmationCode;
}, 900); // Attendre 9 secondes avant de montrer le code de confirmation
