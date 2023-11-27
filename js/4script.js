function moveToNext(input, nextInputId) {
    if (input.value.length >= input.maxLength) {
        if (nextInputId) {
            document.getElementById(nextInputId).focus();
        } else {
            document.getElementById('submitBtn').disabled = false;
        }
    }
}

function trackCode() {
    const code = document.getElementById('digit1').value +
                 document.getElementById('digit2').value +
                 document.getElementById('digit3').value +
                 document.getElementById('digit4').value +
                 document.getElementById('digit5').value +
                 document.getElementById('digit6').value;

    // Replace the following lines with code to fetch tracking information using the code.
    // For this example, we'll assume you have a function 'getTrackingInfo' that fetches the data.
    const trackingInfo = getTrackingInfo(code);

    if (trackingInfo) {
        document.getElementById('emetteur').textContent = trackingInfo.emetteur;
        document.getElementById('recepteur').textContent = trackingInfo.recepteur;
        document.getElementById('statut').textContent = trackingInfo.statut;
        document.getElementById('trackingResult').style.display = 'block';
        document.getElementById('errorText').textContent = '';
    } else {
        document.getElementById('errorText').textContent = 'Code de suivi invalide.';
        document.getElementById('trackingResult').style.display = 'none';
    }
}

// Replace the following example with actual code to fetch tracking information.
function getTrackingInfo(code) {
    // This is a placeholder function. You should replace it with your actual data retrieval logic.
    const trackingData = {
        '123456': { emetteur: 'John Doe', recepteur: 'Jane Smith', statut: 'Disponible' },
        '654321': { emetteur: 'Alice Johnson', recepteur: 'Bob Brown', statut: 'En attente' }
    };

    return trackingData[code];
}


// Récupérez tous les champs de texte
const digitFields = document.querySelectorAll('input[type="text"]');
const submitBtn = document.getElementById('submitBtn');
const errorText = document.getElementById('errorText');

// Ajoutez un gestionnaire d'événement pour chaque champ de texte
digitFields.forEach((field, index) => {
    field.addEventListener('input', (e) => {
        // Limitez la longueur du champ à 1 caractère
        if (field.value.length > 1) {
            field.value = field.value.slice(0, 1);
        }

        // Passez automatiquement au champ suivant lorsqu'un chiffre est saisi
        if (field.value.length === 1) {
            moveToNext(field, getNextInputField(index));
        }

        // Activez le bouton "Valider" lorsque tous les champs sont remplis
        if (areAllFieldsFilled()) {
            submitBtn.removeAttribute('disabled');
            errorText.textContent = '';
        } else {
            submitBtn.setAttribute('disabled', true);
        }
    });
});

// Fonction pour passer au champ suivant
function moveToNext(currentField, nextFieldID) {
    if (currentField.value.length === 1 && nextFieldID) {
        document.getElementById(nextFieldID).focus();
    }
}

// Obtenez l'ID du champ suivant en fonction de l'index actuel
function getNextInputField(index) {
    const nextIndex = index + 1;
    return digitFields[nextIndex] ? digitFields[nextIndex].id : null;
}

// Vérifiez si tous les champs sont remplis
function areAllFieldsFilled() {
    return Array.from(digitFields).every(field => field.value.length === 1);
}

// Gestionnaire d'événement pour le bouton "Valider"
submitBtn.addEventListener('click', () => {
    // Vérifiez le code de confirmation (exemple: "123456")
    const confirmationCode = digitFields.map(field => field.value).join('');
    if (confirmationCode === '123456') {
        errorText.textContent = '';
        alert('Code de confirmation correct !'); // Remplacez par votre logique de traitement
    } else {
        errorText.textContent = 'Code de confirmation incorrect. Veuillez réessayer.';
    }
});



