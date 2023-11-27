// Générer un code OTP aléatoire
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const otpInput = document.getElementById("otp");
    const sendOTPButton = document.getElementById("sendOTP");

    let otpCode = null;

    // Événement pour envoyer l'OTP
    sendOTPButton.addEventListener("click", function () {
        otpCode = generateOTP();
        // Ici, vous devriez normalement envoyer otpCode au numéro de téléphone via SMS
        alert("Code OTP envoyé : " + otpCode);
    });

    // Événement pour soumettre le formulaire
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const userOTP = otpInput.value;
        if (userOTP === otpCode.toString()) {
            alert("Connexion réussie !");
        } else {
            alert("Code OTP incorrect. Réessayez.");
        }
    });
});
