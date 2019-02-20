import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      currencies: [],
      base: null,
      baseEuro: null,
      selectedCurrency: null,
      selectedCurrencyValue: null,
      exchangeTotal: null,
      euroTotal: null,
      foriegnAmount: null,
      foriegnBaseCurrency: null,
      foriegnTargetCurrency: null,
      foriegnTotal: null
    },
    mounted() { // Shorthand for 'mounted: function()'
    this.getCurrencies();
  },
  methods: {
    getCurrencies: function() {
      fetch('https://api.exchangeratesapi.io/latest')
      .then(response => response.json())
      .then(data => this.currencies = data.rates)
    },
    currencySelect: function() {
      this.selectedCurrencyValue = (this.currencies[this.selectedCurrency]).toFixed(2);
    },
    calculateExchange: function() {
      this.exchangeTotal = (this.base * this.selectedCurrencyValue).toFixed(2);
      this.base = null;
    },
    calculateEuro: function () {
      this.euroTotal = (this.baseEuro / this.selectedCurrencyValue).toFixed(2);
      this.baseEuro = null;
    },
    calculateForiegn: function () {
      this.foriegnTotal = ((this.foriegnBaseCurrency / this.foriegnTargetCurrency) * this.foriegnAmount).toFixed(2);
      this.foriegnAmount = null;
    }
  }
})
})
