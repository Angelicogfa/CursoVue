export default {
    namespaced: true,
    state: {
        produtos: [],
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(t => t.quantidade * t.preco)
                .reduce((total, item) => total + item, 0)
        }
    },
    mutations: {
        adicionarProduto(state, produto) {
            state.produtos.push(produto)
        },
    },
    actions: {
        // adicionarProduto(context, produto) {
        //     setTimeout(() => {
        //         context.commit('adicionarProduto', produto);
        //     }, 1000);
        // }
        adicionarProduto: {
            root: true,
            handler(context, produto) {
                setTimeout(() => {
                    context.commit('adicionarProduto', produto);
                }, 1000);
            }
        }
    }
}