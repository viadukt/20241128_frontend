<script>
import {apiService} from "@/services/apiService.js";

export default {
  data() {
    return {
      events: null,
    }
  },
  mounted() {
    apiService.getEvents()
        .then(response => (this.events = response.data))
        .catch(error => console.log(error))
  },
  methods: {
    routeToDetail(id, name, date, ticketsLeft) {
      this.$router.push('/event/'+ id + "/" + name + "/" + date + "/" + ticketsLeft)
    }
  }
}
</script>

<template>
  <h1>Upcoming events:</h1>
  <ul>
    <li v-for="(event, index) in events" :key="index" @click="routeToDetail(event.id, event.name, event.date, event.ticketsLeft)">
      <a>
        {{ event.date + ': ' + event.name }}
      </a>
    </li>
  </ul>
</template>

<style scoped>

</style>