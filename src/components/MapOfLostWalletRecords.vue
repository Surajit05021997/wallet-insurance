<template>
<div>
  <GmapMap
  :center="this.listOfLostWalletRecordsLocationMarkers[this.listOfLostWalletRecordsLocationMarkers.length - 1].position"
  :zoom="5"
  map-type-id="terrain"
  style="width: 100%; height: 60vh"
>
  <GmapMarker v-for="(location, index) in this.listOfLostWalletRecordsLocationMarkers" 
              :key="index"
              :position="location.position"
              :clickable="true"
              :title="location.title"
              @click="center = location.position"
              />
</GmapMap>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: "MapOfLostWalletRecord",
  data(){
    return {
      BASE_URL: '',
      googleMapGeocodeService: null,
      listOfLostWalletRecordsLocationMarkers : []
    }
  },
  metaInfo () {
    const API_KEY = `AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg`;
      return {
        script: [{
          src: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`,
          async: true,
          defer: true,
          callback: () => this.MapsInit() // will declare it in methods
        }]
      }
    },
  created(){
    this.initialiseValues();
  },
  methods: {
    async initialiseValues(){
      this.BASE_URL = 'http://localhost:3001';
      this.listOfLostWalletRecordsLocationMarkers = await this.getListOfLostWalletRecordsLocationMarkers();
    },
    MapsInit () {
      this.googleMapGeocodeService = new window.google.maps.Geocoder();
      },
    async getListOfLostWalletRecordsLocationMarkers(){
      return await axios.get(`${this.BASE_URL}/lostWalletRecords`)
              .then(async (response) =>
              {
                let eachLocationLatLong = [];
                response.data.forEach(lostWalletRecord => {
                  let dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
                  let titleString = `${lostWalletRecord.howYouLostWallet} From ${lostWalletRecord.locationOfLosingWallet} on ${new Date(lostWalletRecord.dateTimeOfLosingWallet).toLocaleDateString("en-US", dateOptions)}`
                  // pushing the object with key "position" and value as Object of latitude longitude
                  eachLocationLatLong.push(
                          {
                            position : {  lat : lostWalletRecord.locationOfLosingWalletLatitude,
                                          lng: lostWalletRecord.locationOfLosingWalletLongitude
                                        },
                            title : titleString
                          }
                    );
                });
                return eachLocationLatLong;
              })
    },
  }
}
</script>

<style scoped>

</style>

