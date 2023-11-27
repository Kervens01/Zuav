// Récupérez les éléments HTML
const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");
const resultText = document.getElementById("result");

// Remplissez les options de devises (vous pouvez ajouter plus de devises)
const currencies = {
    USD: "Dollar américain",
    EUR: "Euro",
    GBP: "Livre sterling",
    JPY: "Yen japonais",
    RUB: "Ruble",
    HTG: "Gourde",
    // Ajoutez d'autres devises ici
};

for (const currency in currencies) {
    const option1 = new Option(`${currency} - ${currencies[currency]}`, currency);
    const option2 = new Option(`${currency} - ${currencies[currency]}`, currency);
    fromCurrencySelect.appendChild(option1);
    toCurrencySelect.appendChild(option2);
}


// Fonction pour convertir la devise
function convertCurrency() {
    const amount = amountInput.value;
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            const result = amount * exchangeRate;
            resultText.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => {
            console.error("Erreur:", error);
            resultText.textContent = "Une erreur s'est produite lors de la conversion.";
        });
}


