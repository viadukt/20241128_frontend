import { createMemoryHistory, createRouter } from 'vue-router'
import EventPage from './components/EventPage.vue'
import EventsList from "@/components/EventsList.vue";
import Confirmation from "@/components/Confirmation.vue";

const routes = [
    { path: '/eventsList', component: EventsList },
    { path: '/event/:id/:name/:date/:ticketsLeft', component: EventPage },
    { path: '/confirmation/:id/:name/:date/:amountToBuy', component: Confirmation },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router