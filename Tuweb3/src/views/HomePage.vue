<template>
  <ion-content>
    <ion-grid>
      <ion-row>
        <ion-col size="12" class="ion-text-center">
          <ion-button @click="refpage" class="ion-text-capitalize">
            <ion-text>
              <h3>Refresh</h3>
            </ion-text>
          </ion-button>
        </ion-col>
      </ion-row>

      <ion-row class="background" v-for="item in items" :key="id">
        <!-- Rank -->
        <ion-col size="4" class="ion-text-center">
          <ion-row>
            <ion-col>Rank</ion-col>
          </ion-row>
          <ion-row>
            <ion-col class="big">{{ item.rank }}</ion-col>
          </ion-row>
        </ion-col>

        <!-- Name -->
        <ion-col>
          <ion-row>
            <ion-col>{{ item.name }}</ion-col>
          </ion-row>

          <ion-row>
            <ion-col class="big">{{ item.symbol }}</ion-col>
          </ion-row>
        </ion-col>

        <!-- Harga -->
        <ion-col size="4">
          <ion-row>
            <ion-col>USD</ion-col>
          </ion-row>

          <ion-row>
            <ion-col class="big">{{ item.price_usd }}</ion-col>
          </ion-row>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import axios from "axios"
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
          console.info(error);
        });
    },
    refpage() {
      window.location.reload()
    }
  },
  mounted() {
    this.getData()
  },
}
</script>

<style>
.big {
  font-size: 28px;
  font-weight: 500;
}

.background {
  background-color: #fff2cc;
  border: 3px solid #DFC475;
  color: black;
  margin: -1% 0;
}

ion-button {
  margin-bottom: 5%;
  --border-radius: 10px;
}

h3 {
  padding: 0 25px;
  font-family: Arial, Helvetica, sans-serif;
}
</style> 