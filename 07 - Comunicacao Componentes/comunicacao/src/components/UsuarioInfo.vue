<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do usuário: {{ idade }}</p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        // nome: String
        nome: {
            type: String,
            required: true,
            default: 'Anônimo'
            // default: function() {
            //     return Array(10).fill(0).join(',')
            // }
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        inverterNome() {
            return this.nome.toUpperCase()
        },
        reiniciarNome() {
            this.nome = 'Pedro'
            this.$emit('nomeMudou', this.nome);
        }
    },
    created() {
        // barramento.$on('idadeMudou', (idade) => {
        //     this.idade = idade
        // })
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
