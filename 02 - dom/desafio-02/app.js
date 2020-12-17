new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        raiseAlert() {
            alert('Exibindo mensagem');
        },
        setValue(event) {
            this.valor = event.target.value;
        }
    }
})