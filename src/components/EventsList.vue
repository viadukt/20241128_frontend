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
    routeToDetail(index, name, date, ticketsLeft) {
      this.$router.push('/event/'+ index + "/" + name + "/" + date + "/" + ticketsLeft)
    }
  }
}
</script>

<template>
  <h1>Upcoming events:</h1>
  <ul>
    <li v-for="(event, index) in events" :key="index" @click="routeToDetail(index, event.name, event.date, event.ticketsLeft)">
      <a>
        {{ event.name }}
      </a>
    </li>
  </ul>
</template>

<style scoped>

</style>