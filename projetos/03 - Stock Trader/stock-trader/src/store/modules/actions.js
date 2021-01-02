import Vue from 'vue'

export default {
    async loadData({ commit }) {
        const result = await Vue.prototype.$http.get('data.json')
        const data = result.data;
        if (data) {
            commit('setStocks', data.stocks)
            commit('setPortfolio', {
                funds: data.funds,
                stockPortfolio: data.stockPortfolio
            })
        }
    }
}