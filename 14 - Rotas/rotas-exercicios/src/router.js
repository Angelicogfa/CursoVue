import Vue from 'vue'
import Router from 'vue-router'

import Inicio from './components/Inicio'
// import Usuario from './components/usuario/Usuario.vue'
// import UsuarioLista from './components/usuario/UsuarioLista.vue'
// import UsuarioEditar from './components/usuario/UsuarioEditar.vue'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'

Vue.use(Router)

const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario.vue')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista.vue')
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioDetalhe.vue')
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioEditar.vue')

const router = new Router({
    mode: 'history',
    // scrollBehavior(to, from, savePosition) {
    //     if (savePosition) {
    //         return savePosition;
    //     } else if (to.hash) {
    //         return { selector: to.hash };
    //     } else {
    //         return { x: 0, y: 0 };
    //     }
    //     // return { x: 0, y: 1000 }
    // },
    routes: [
        { path: '/', component: Inicio, name: 'incio' },
        {
            path: '/usuario', component: Usuario, children: [
                { path: '', component: UsuarioLista },
                { path: ':id', component: UsuarioDetalhe, props: true },
                { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' },
            ], beforeEnter: (to, from, next) => {
                console.log('usuario');
                next();
            }
        },
        { path: '/redirecionar', redirect: '/usuario' },
        { path: '*', redirect: '/' }
    ]
})

router.beforeEach((to, from, next) => {
    console.log('Antes da rotas -> global');
    next();
});

export default router;