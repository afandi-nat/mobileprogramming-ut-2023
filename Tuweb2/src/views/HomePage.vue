<template>
  <ion-content>
    <ion-grid>
      <ion-row>
        <ion-col size="12" class="ion-text-center" style="text-align: center;">
          <ion-button @click="getData" style="text-transform: capitalize;">
            Get Data
          </ion-button>
        </ion-col>
      </ion-row>

      <ion-row v-if="items.length > 0" style="border: 2px solid black; padding:
      20px;">
        <ion-col size="4" style="text-align: center;">Name</ion-col>
        <ion-col size="4" style="text-align: center;">Symbol</ion-col>
        <ion-col size="4" style="text-align: center;">Harga USD</ion-col>
      </ion-row>

      <ion-row v-for="item in items" :key="id">
        <ion-col size="4" style="text-align: center; padding: 10px;">{{ item.name
        }}</ion-col>
        <ion-col size="4" style="text-align: center; padding: 10px;">{{
          item.symbol }}</ion-col>
        <ion-col size="4" style="text-align: center; padding: 10px;">{{
          item.price_usd }}</ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>
  
<script>
import axios from 'axios'
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    getData() {
      axios.get('https://api.coinlore.net/api/tickers/')
        .then(response => {
          this.items = response.data.data
        }).catch(error => {
          console.log(error);
        });
    }
  },
}
</script>
  