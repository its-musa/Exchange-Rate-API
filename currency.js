class Currency {
    constructor(amount, firstCurrency, secondCurrency) {
        this.amount = amount;
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = 'https://api.exchangerate.host/latest?base=';
    }

    exchange() {
        return new Promise((resolve, reject) => {
            fetch(this.url + this.firstCurrency)
            .then(response => response.json())
            .then(data => {
                const price = data.rates[this.secondCurrency];
                const amount = Number(this.amount);
                const total = Number(price * amount);
    
                resolve(total);
            })
            .catch(error => reject(error));
        })
    }
    
    changeAmount(amount) {
        this.amount = amount;
    }

    changeCurrency(firstCurrency,secondCurrency) {
        this.firstCurrency = firstCurrency
        this.secondCurrency = secondCurrency;
    }
}