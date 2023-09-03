class UI {
    constructor(firstCurrencySelect, secondCurrencySelect) {
        this.firstCurrencySelect = firstCurrencySelect;
        this.secondCurrencySelect = secondCurrencySelect;
        this.outputFirst = document.querySelector('#outputFirst');
        this.outputSecond = document.querySelector('#outputSecond');
        this.outputResult = document.querySelector('#outputResult');
    }

    changeSelect() {
        this.outputFirst.textContent = this.firstCurrencySelect.value;
        this.outputSecond.textContent = this.secondCurrencySelect.value;
    }

    displayResult(result) {
        this.outputResult.value = result;
    }
}