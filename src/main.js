import Vue, { createApp } from 'vue';
import App from './App.vue';
import router from '../src/router';
import VueMq from 'vue-mq'
import '@coreui/coreui/dist/css/coreui.min.css';
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';

const app = createApp(App);

app.use(router).mount('#app')

app.use(PrimeVue);

app.component('DialogComponent', Dialog);

Vue.use(VueMq, {
    breakpoints: {
        sm: 450,
        md: 1250,
        lg: Infinity,
    }
})

Vue.use(VueMq, {
    breakpoints: {
        mobile: 450,
        tablet: 900,
        laptop: 1250,
        desktop: Infinity,
    }
})