const amountInput = document.querySelector('#amount');
const firstCurrencySelect = document.querySelector('#firstCurrency');
const secondCurrencySelect = document.querySelector('#secondCurrency');

const currency = new Currency(null, 'USD', 'TRY');
const ui = new UI(firstCurrencySelect, secondCurrencySelect);

eventListeners();

function eventListeners() {
    amountInput.addEventListener('input', exchangeCurrency);
    firstCurrencySelect.addEventListener('change', selectCurrency);
    secondCurrencySelect.addEventListener('change', selectCurrency);
}

function exchangeCurrency() {
    currency.changeAmount(amountInput.value);
    currency.exchange().then(respnse => ui.displayResult(respnse)).catch(error => console.error(error));
}

function selectCurrency() {
    currency.changeCurrency(firstCurrencySelect.value, secondCurrencySelect.value)
    currency.exchange().then(respnse => ui.displayResult(respnse)).catch(error => console.error(error));
    ui.changeSelect();
}