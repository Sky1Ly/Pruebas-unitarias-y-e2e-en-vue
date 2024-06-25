import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router' //Importación de vue

import './style.css'
import App from './App.vue'

//Componentes de la ruta
const Home = {template: '<h1>Hola Home</h1>'}
const Detail = {template: '<h1>Detalles de la app</h1>'}

//Definir objetos de la ruta -- Configuración
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/detail',
        component: Detail
    }
]

//Crear objeto rutas de vue router -- Objetos
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//instancia de vue
const app = createApp(App)

app.use(router)
app.mount('#app')
