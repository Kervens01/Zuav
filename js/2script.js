function moveTo(sectionId, progress) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.getElementById('progress').style.width = progress + '%';
}

//foctions
//function page_envoie()
    //const numeroExpediteurValue= numeroExpediteur.value.trim();
   // const numeroExpediteur= numeroExpediteur.value.trim();
   // const nomBeneficiaire= nomBeneficiaire.value.trim();
   // const prenomBeneficiaire= prenomBeneficiaire.value.trim();
   // const numeroBeneficiaire= numeroBeneficiaire.value.trim();
   // const amount= amount.value.trim();

    //if (ExpediteurValue === "") {
    //let message = "numero Expediteur ne peut pas etre vide";
   // setError(numeroExpediteur,message);
    
//}

function transfer() {
    // Votre logique de transfert ici

     // Récupération des valeurs depuis le formulaire
const paysExpediteur = document.getElementById('paysExpediteur').value;
const modeEnvoi = document.getElementById('modeEnvoi').value;
const numeroExpediteur = document.getElementById('numeroExpediteur').value;

const nomBeneficiaire = document.getElementById('nomBeneficiaire').value;
const prenomBeneficiaire = document.getElementById('prenomBeneficiaire').value;
const paysBeneficiaire = document.getElementById('paysBeneficiaire').value;
const modeRetrait = document.getElementById('modeRetrait').value;
const numeroBeneficiaire = document.getElementById('numeroBeneficiaire').value;

const montantTransfert = document.getElementById('montantTransfert').value;

// Envoi des données vers le serveur
fetch('process_transfer.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        paysExpediteur,
        modeEnvoi,
        numeroExpediteur,
        nomBeneficiaire,
        prenomBeneficiaire,
        paysBeneficiaire,                
        numeroBeneficiaire,
        montantTransfert,
        Frais,
        totalTransfert,
        image,


    })
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        alert('Transfert effectué avec succès !');
    } else {
        alert('Erreur lors du transfert.');
    }
});
}
function handleClick(action) {
    alert("Bouton cliqué pour : " + action);
}

// Nouvelle fonction pour calculer les frais
function calculateFees() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount)) {
        alert("Veuillez entrer un montant valide.");
        return;
    }

    // Exemple: frais de 7% pour le montant saisi
    const fees = amount * 0.07;
    const total = amount + fees; // Calcul du montant total

    document.getElementById('feeOutput').textContent = "Frais: " + fees.toFixed(2) + " $";
    document.getElementById('totalOutput').textContent = "Montant total à payer : " + total.toFixed(2) + " $"; // Affichage du montant total
}
function Payer() {
    // Récupérez les données nécessaires depuis la page
    const montant = parseFloat(document.getElementById('amount').value);
    const frais = parseFloat(document.getElementById('feeOutput').textContent.split(' ')[1]); // Récupérez les frais calculés
    const total = parseFloat(document.getElementById('totalOutput').textContent.split(' ')[5]); // Récupérez le montant total

    // Vous pouvez personnaliser l'URL de paiement en fonction de votre prestataire de paiement
    const urlPaiement = `payer.php`;

    // Redirigez l'utilisateur vers la page de paiement
    window.location.href = urlPaiement;

    // Assurez-vous que le prestataire de paiement a un mécanisme de retour vers votre site après le paiement
    // pour confirmer la transaction et mettre à jour les informations sur votre serveur.
}
