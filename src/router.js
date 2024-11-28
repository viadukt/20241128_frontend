import { createMemoryHistory, createRouter } from 'vue-router'
import EventPage from './components/EventPage.vue'
import EventsList from "@/components/EventsList.vue";
import Confirmation from "@/components/Confirmation.vue";

const routes = [
    { path: '/eventsList', component: EventsList },
    { path: '/event/:index/:name/:date/:ticketsLeft', component: EventPage },
    { path: '/confirmation/:id', component: Confirmation },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router