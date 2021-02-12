import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt'
// import UsuarioEditar from './components/usuario/UsuarioEditar'


Vue.use(Router)

const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioEditar')
//const UsuarioEditar = () => import('./components/usuario/UsuarioEditar')

const rounter = new Router({
    routes: [{
        mode: 'history',
        scrollBehavior(to) {
            if(to.hash){
                return { selector: to.hash }
            }
            // return { x: 0, y: 1000 }
        },
        path: '/',
        // component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    },{
        path: '/usuario',
        // component: Usuario,
        components: {
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props: true, 
                beforeEnter: (to, from, next) => {
                    console.log('antes da rota -> usuário detalhe')
                    next()
                } },
            { path: ':id/editar', component: UsuarioEditar, props: true,
                name: 'editarUsuario' },
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'    
    },{
        path: '*',
        redirect: '/'
    }]
})

rounter.beforeEach((to, from, next) => {
    console.log('antes das rotas -> GLOBAL')
    next()
})

export default rounter