import Home from './components/pages/Home.vue';
import Contacto from './components/pages/Contacto.vue';
import Actors from './components/pages/Actors.vue';
import Music from './components/pages/Music.vue';
import People from './components/pages/People.vue';
import Cms from './components/pages/Cms.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/contacto', component: Contacto},
    {path: '/actors', component: Actors},
    {path: '/music', component: Music},
    {path: '/people', component: People},
    {path: '/cms', component: Cms}
];