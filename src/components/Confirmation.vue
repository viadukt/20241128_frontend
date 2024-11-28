<script>
/**
 * A component which shows the details of the purchased tickets.
 *
 * @component
 */
export default {
  data() {
    return {
      id: null,
      name: null,
      date: null,
      amountToBuy: null
    }
  },
}
</script>

<template>
  <h3>Booking Confirmation</h3>
  <p>{{ this.$route.params.amountToBuy + ' Ticket(s) of ' + this.$route.params.name + ' (ID: ' + this.$route.params.id + ') on ' + this.$route.params.date + ' have been purchased.' }}</p>

</template>

<style scoped>

</style>