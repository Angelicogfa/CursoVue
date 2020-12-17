new Vue({
    el: '#desafio',
    data: {
        classe1: 'destaque',
        circulo: true,
        classe3: '',
        classe4: '',
        cor5: '',
        estilo5: {
            width: 100,
            heigth: 100
        },
        width: '0'
    },
    methods: {
        iniciarEfeito() {
            setInterval(() => {
                this.classe1 = this.classe1 === 'destaque' ? 'encolher' : 'destaque';
            }, 2000);
        },
        iniciarProgresso() {
            let valor = 0;
            const temporizador = setInterval(() => {
                valor += 5;
                this.width = `${valor}%`;

                if (valor === 100) clearInterval(temporizador);
            }, 200)
        },
        setCirculo(event) {
            this.circulo = event.target.value === 'true' ? true : false;
        }
    }
})