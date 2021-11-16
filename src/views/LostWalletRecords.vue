<template>
  <div>
    <add-lost-wallet-record @lost-wallet-record-added="fetchLostWalletRecords()"></add-lost-wallet-record>
    <button type="button" class="btn btn-outline-success btn-text-1_5rem rounded-3" data-bs-toggle="modal" data-bs-target="#addLostWalletRecord">+ Add Lost Wallet Record</button>
    <hr>
    <map-of-lost-wallet-records></map-of-lost-wallet-records>
    <hr>
    <table class="table table-hover">
      <thead>
        <tr>
          <th v-for="(lostWalletField, index) in lostWalletFields" :key="index">{{lostWalletField}}</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(lostWalletRecord, index) in lostWalletRecords" :key="index">
        <td>{{lostWalletRecord.id}}</td>
        <td>{{lostWalletRecord.howYouLostWallet}}</td>
        <td>{{lostWalletRecord.dateTimeOfLosingWallet}}</td>
        <td>{{lostWalletRecord.locationOfLosingWallet}}</td>
        <td>{{lostWalletRecord.additionalDetailsOfLostWallet}}</td>
        <td>
            <span v-for="(card, index) in lostWalletRecord.listOfCardsToBlock" :key="index">
                <p>{{card}}</p>
                </span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import AddLostWalletRecord from '../components/AddLostWalletRecord.vue';
import MapOfLostWalletRecords from '../components/MapOfLostWalletRecords.vue';
export default {
  components: { AddLostWalletRecord
  , MapOfLostWalletRecords 
  },
name: 'LostWalletRecords',
data(){ 
    return {
        lostWalletFields : [],
        lostWalletRecords : [],
        BASE_URL : ''   
    }
},
methods: {
    async initialiseValues(){
      this.$swal({
              title: 'Information',
              html: `<small><b>Map is centered to Last Wallet record Location</b></small>.
                     <br>
                     <ui>
                     <li>Use <b>+</b> to zoom in</li>
                     <li>Use <b>-</b> to zoom out</li>
                     </ui>
                     <u>Hover over Map Marker to see more information</u>
                     `,
              icon: 'info',
              timer: 6000
            })
      this.BASE_URL = 'http://localhost:3001';
      this.lostWalletFields = [
        'Claim ID',
        'How You Lost Wallet',
        'Date',
        'Location',
        'Additional Details',
        'Cards'
      ];
      this.lostWalletRecords = await this.getLostWalletRecords();
      console.log(this.lostWalletRecords);
    },
    async getLostWalletRecords(){
      return await axios.get(`${this.BASE_URL}/lostWalletRecords`)
        .then(res => res.data)
    }
},
created(){
    this.initialiseValues();
}
}
</script>

<style scoped>
  
</style>

