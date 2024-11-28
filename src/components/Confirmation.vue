<script>
import {apiService} from "@/services/apiService.js";

export default {
  data() {
    return {
      booking: null,
      id: null
    }
  },
  mounted() {
      apiService.getBooking(this.id)
          .then(response => (this.booking = response.data))
          .catch(error => console.log(error))
  },
  created() {
    this.$watch(
        () => this.$route.params,
        (newParams, oldParams) => {
          if (newParams.id !== oldParams.id) {
            this.id = newParams.id;
          }
        },
        {deep: true}
    )
  }
}
</script>

<template>
  <h3>Booking Confirmation</h3>
  <p>Booking: {{ this.booking }}</p>
</template>

<style scoped>

</style>