<script>
/**
 * A component which shows the details of a chosen event and routes to the Confirmation-component.
 * It provides a button which triggers REST-calls to reduce the amount of available tickets left in the Event-Table and adds a Booking to the Booking-table.
 *
 * @component
 */
import {apiService} from "@/services/apiService.js";

export default {
  data() {
    return {
      id: null,
      name: "",
      date: "",
      ticketsLeft: null,
      amountToBuy: null,
    }
  },
  methods: {
    // Prepare json for request-body for POST-call to Booking-table.
    postBookingBody() {
      return {
        dateOfPurchase: new Date(),
        name: this.name,
        date: this.date,
        amountToBuy: this.amountToBuy
      }
    },

    // Route to confirmation-page, reduce amount in Event-tabe, add entry to Booking-table.
    goToConfirmationAndBuy(id, name, date, amountToBuy) {
      this.$router.push('/confirmation/'+ id + '/' + name + '/' + date + '/' + amountToBuy)
      apiService.putEvent(this.id, this.amountToBuy)
          .catch(error => console.log(error))
      apiService.postBooking(this.postBookingBody())
          .catch(error => console.log(error))
    },
  },
  // Watch changes in received event-parameters.
  created() {
    this.$watch(
        () => this.$route.params,
        (newParams, oldParams) => {
          if (newParams.id !== oldParams.id) {
            this.id = newParams.id;
            this.name = newParams.name;
            this.date = newParams.date;
            this.ticketsLeft = newParams.ticketsLeft;
          }
        },
        {deep: true}
    )
  }
}
</script>

<template>
  <h1>Event details:</h1>
  <p>ID: {{ id }}</p>
  <p>Name: {{ name }}</p>
  <p>Date: {{ date }}</p>
  <p>Tickets left: {{ ticketsLeft }}</p>

  <label for="amountToBuy">Amount to buy: </label>
  <select id="amountToBuy" v-model.number="amountToBuy">
    <option v-if="ticketsLeft > 4">5</option>
    <option v-if="ticketsLeft > 3">4</option>
    <option v-if="ticketsLeft > 2">3</option>
    <option v-if="ticketsLeft > 1">2</option>
    <option v-if="ticketsLeft > 0">1</option>
  </select>
  <br/>
  <button class="button" :class ="{ disabledButton: ticketsLeft < 1 }"  @click="goToConfirmationAndBuy(id, name, date, amountToBuy)">Book Event</button>
</template>

<style scoped>
.button {
  margin: 30px;
  background-color: #39495c;
  border-radius: 5px;
  font-size: 18px;
  width: 160px;
  height:60px;
  color: white;
  padding: 20px;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
  inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
  inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;
  cursor: pointer;
}
.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}
</style>