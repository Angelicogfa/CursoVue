<template>
  <div id="app" class="container-fluid">
    <!-- <h1>Animações</h1>
    <hr />
    <b-button variant="primary" @click="exibir = !exibir" class="mb-4"
      >Mostrar mensagem</b-button
    > -->

    <!-- <transition appear name="fade">
      <b-alert variant="info" v-if="exibir" show>{{ msg }}</b-alert>
    </transition>

    <transition appear name="slide" type="animation">
      <b-alert variant="info" v-show="exibir" show>{{ msg }}</b-alert>
    </transition>

    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated shake"
    >
      <b-alert variant="info" v-show="exibir" show>{{ msg }}</b-alert>
    </transition> -->

    <!-- <b-select v-model="animacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

    <transition :name="animacao" mode="out-in">
      <b-alert variant="info" v-if="exibir" show key="info">{{ msg }}</b-alert>
      <b-alert variant="warning" v-else show key="warn">{{ msg }}</b-alert>
    </transition>

    <hr />
    <b-button variant="primary" @click="exibir2 = !exibir2">Alternar</b-button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="exibir2" class="caixa"></div>
    </transition>

    <hr />

    <div class="mb-4">
      <b-button
        variant="primary"
        class="mr-2"
        @click="componenteSelecionado = 'AlertaInfo'"
        >Info</b-button
      >
      <b-button
        variant="secondary"
        @click="componenteSelecionado = 'AlertaAdvertencia'"
        >Advertencia</b-button
      >
    </div>
    <transition name="fade" mode="out in">
      <component :is="componenteSelecionado"></component>
    </transition> -->

    <hr />
    <b-button @click="adicionarAluno" class="mb-4">Adicionar aluno</b-button>

    <b-list-group>
      <transition-group name="slide" tag="div">
        <b-list-group-item
          v-for="(aluno, i) in alunos"
          :key="aluno"
          @click="removerAluno(i)"
        >
          {{ aluno }}
        </b-list-group-item>
      </transition-group>
    </b-list-group>
  </div>
</template>

<script>
import AlertaAdvertencia from "./AlertaAdvertencia.vue";
import AlertaInfo from "./AlertInfo.vue";

export default {
  components: { AlertaAdvertencia, AlertaInfo },
  data() {
    return {
      msg: "Uma mensagem de informação para o usuário",
      exibir: false,
      exibir2: true,
      animacao: "fade",
      larguraBase: 0,
      componenteSelecionado: "AlertaInfo",
      alunos: ["Roberto", "Julia", "Tereza", "Pedro"],
    };
  },
  methods: {
    adicionarAluno() {
      const s = Math.random().toString(36).substring(2);
      this.alunos.push(s);
    },
    removerAluno(indice) {
      this.alunos.splice(indice, 1);
    },
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura =
          this.larguraBase + (negativo ? -rodada * 10 : rodada * 10);
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    enter(el, done) {
      this.animar(el, done, false);
    },
    afterEnter(el) {
      console.log("after enter");
    },
    enterCancelled(el) {
      console.log("canceled");
    },
    beforeLeave(el) {
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    leave(el, done) {
      this.animar(el, done, true);
    },
    afterLeave(el) {
      console.log("after leave");
    },
    leaveCancelled(el) {
      console.log("canceled");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  animation: slide-out 2s ease;
  transition: opacity 2s;
  position: absolute;
  width: 100%;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-move {
	transition: transform 1s;
}
</style>
