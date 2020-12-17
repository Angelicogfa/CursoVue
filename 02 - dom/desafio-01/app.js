new Vue({
    el: '#desafio',
    data : {
        nome: 'Guilherme',
        idade: 30,
        image: 'https://www.institutodeengenharia.org.br/site/wp-content/uploads/2019/04/2.png'
    },
    methods: {
        random_value: function() {
            return Math.random();
        }
    }
})