<template>
<div>
  <div class="modal fade" id="addLostWalletRecord" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="addLostWalletRecordLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title card-title" id="addLostWalletRecordLabel">Add Lost Wallet Record</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <div class="row">
                <div class="mb-3 col-lg-6">
                  <label for="howYouLostYourWallet" class="form-label">How you Lost Your Wallet ?</label>
                  <input type="text" class="form-control" id="howYouLostYourWallet" placeholder="How you Lost your Wallet" v-model="addFormHowYouLostWallet">
                </div>
                <div class="mb-3 col-lg-6">
                  <label for="dateTimeOfLosingWallet" class="form-label">Date and Time of Losing Wallet ?</label>
                  <input type="datetime-local" class="form-control" id="dateTimeOfLosingWallet" placeholder="Enter Date and Time" v-model="addFormDateTimeOfLosingWallet">
                </div>
              </div>
              <div class="row">
                <div class="mb-3">
                  <label for="locationOfLosingWallet" class="form-label">Location of Losing Wallet</label>
                  <input type="text" class="form-control" id="locationOfLosingWallet" placeholder="Location" v-model="addFormLocationOfLosingWallet">
                  <ul class="list-group">
                    <li class="list-group-item" v-for="(place, index) in listOfAllPlaces" :key="index" @click="selectLocation(place)">
                      {{ place }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div>
                  <label for="additionalDetailsOfLostWallet" class="form-label">Any Additional Details</label>
                  <textarea rows="2" class="form-control" id="additionalDetailsOfLostWallet" placeholder="Additional Details" v-model="addFormAdditionalDetailsOfLostWallet" />
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <label class="mb-1">Click Below cards to Block Them</label>
              <div class="col-lg-4 mb-2" v-for="(card,index) in listOfRegisteredCards" :key="index">
                <input type="checkbox" class="btn-check listOfCardsToBlock" :id="card.id" autocomplete="off" :value="card.id">
                <label class="btn btn-outline-danger" :for="card.id">{{getCheckboxButtonForCards(card)}}</label>
              </div>
            </div>
            <button type="button" :disabled="checkBrowseSupportForGeoLocation()" @click="fetchDeviceLocation()" class="btn btn-primary">Fetch Device Location</button>
          <div v-if="addLostWalletRecordProcessing" class="spinner-border text-primary float-end" role="status">
            <span class="sr-only"></span>
          </div>
          <button :disabled="addLostWalletRecordProcessing" type="button" @click="verifyFormInputsAndAddLostWalletRecord()" class="btn btn-primary float-end">Add Record</button>
            <p v-if="addLostWalletRecordFormErrors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li class="text-danger" v-for="(error,index) in addLostWalletRecordFormErrors" :key="index">{{error}}</li>
              </ul>
            </p>
        </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: "AddLostWalletRecord",
  data(){
    return {
      BASE_URL : '',
      addLostWalletRecordProcessing : false,
      // Setting this variable to restrict the user to choose location from the google places only
      addFormLocationOfLosingWalletValid : false,
      listOfAllPlaces : [],
      listOfRegisteredCards : [],

      // Setting Google Maps Service
      googleMapPlacesAutocompleteService: null,
      googleMapGeocodeService: null,

      addLostWalletRecordFormErrors : [],
      addFormHowYouLostWallet : '',
      addFormLocationOfLosingWallet : '',
      addFormLocationOfLosingWalletLatitude : '',
      addFormLocationOfLosingWalletLongitude : '',
      addFormDateTimeOfLosingWallet : '',
      addFormAdditionalDetailsOfLostWallet : '',
      addFormListOfCardsToBlock : []
    }
  },
  created(){
    this.initialiseValues();
  },
  metaInfo () {
    const API_KEY = `AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg`;
      return {
        script: [
          {
          src: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`,
          async: true,
          defer: true,
          callback: () => this.googleMapPlacesAutocompleteServiceInit() // will declare it in methods
          },
          {
          src: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`,
          async: true,
          defer: true,
          callback: () => this.googleMapGeocoderServiceInit() // will declare it in methods
          },
        ]
      }
    },
  methods: {
    async initialiseValues(){
      this.BASE_URL = 'http://localhost:3001';
      this.listOfRegisteredCards = await this.getAllCardsList();
    },
    getCheckboxButtonForCards(card){
      let checkboxButtonForCards = `${card.bank.slice(0, card.bank.length/2)} - xx ${card.cardNumber.slice(card.cardNumber.length - 4)}`;
      return checkboxButtonForCards;
    },
    async getAllCardsList(){
      let filterCardType = [
        'cardTypeDebit',
        'cardTypeCredit'
      ];
    return await axios.get(`${this.BASE_URL}/registeredCards`)
      .then((res) => {
        return res.data.filter(eachCard => !eachCard.isBlocked && (filterCardType.includes(eachCard.cardType)));
        })
      .catch((error)=>{ 
        return Promise.reject(error)});
  },
    async verifyFormInputsAndAddLostWalletRecord(){
      this.addLostWalletRecordFormErrors = [];
      // Empty the Checkbox selected list first to fill in new Record
      this.addFormListOfCardsToBlock = [];

      // get List of all cards which are selected to block
      let listOfCardsToBlock = document.querySelectorAll('input.listOfCardsToBlock:checked');      
      listOfCardsToBlock.forEach(element => this.addFormListOfCardsToBlock.push(element.value));

      if(!this.addFormHowYouLostWallet){
        this.addLostWalletRecordFormErrors.push("Mention how you lost wallet")
      }

      if(!this.addFormLocationOfLosingWallet){
        this.addLostWalletRecordFormErrors.push("Mention where you lost wallet")
      }

      // if(this.addFormLocationOfLosingWallet && !this.addFormLocationOfLosingWalletValid)
      // {
      //   this.addLostWalletRecordFormErrors.push("Please select location from Dropdown");
      // }

      if(!this.addFormDateTimeOfLosingWallet){
        this.addLostWalletRecordFormErrors.push("Mention when you lost wallet")
      }

      if(listOfCardsToBlock.length === 0){
        this.addLostWalletRecordFormErrors.push("Select cards you want to block")
      }

      if(this.addLostWalletRecordFormErrors.length === 0){
        this.addLostWalletRecordFormErrors = [];
        await this.addLostWalletRecord();
      }
    },
    async getLocationLatLong(addressOfLocation){
      let locationObject = await this.googleMapGeocodeService.geocode({'address' : addressOfLocation})
                            .then((locObject) => locObject);
      console.log("Got location Lat Long");
      let locationLatitude = locationObject.results[0].geometry.location.lat();
      let locationLongitude = locationObject.results[0].geometry.location.lng();
      return { latitude : locationLatitude, longitude : locationLongitude };
    },
    async addLostWalletRecord(){
      console.log("getting location Lat Long");
      let latLongObject = await this.getLocationLatLong(this.addFormLocationOfLosingWallet);
      this.addFormLocationOfLosingWalletLatitude = latLongObject.latitude;
      this.addFormLocationOfLosingWalletLongitude = latLongObject.longitude;
      let addLostWalletRecordFields = {
        id : Date.now(),
        howYouLostWallet : this.addFormHowYouLostWallet,
        dateTimeOfLosingWallet : this.addFormDateTimeOfLosingWallet,
        locationOfLosingWallet : this.addFormLocationOfLosingWallet,
        locationOfLosingWalletLatitude : this.addFormLocationOfLosingWalletLatitude,
        locationOfLosingWalletLongitude : this.addFormLocationOfLosingWalletLongitude,
        additionalDetailsOfLostWallet : this.addFormAdditionalDetailsOfLostWallet,
        listOfCardsToBlock : this.addFormListOfCardsToBlock,
      };
      this.$swal({
              title: 'Are you sure?',
              text: "These cards will be blocked on your behalf!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Agree, and create claim!'
            }).then(async (result) => {
              if (result.isConfirmed) {
                this.addLostWalletRecordProcessing = true;
                await axios.post(`${this.BASE_URL}/lostWalletRecords`, addLostWalletRecordFields)
                  .then( async ()=>{
                    this.resetFormFields();
                      this.$swal(
                      'Record added',
                      'The Lost Wallet Record added and Claim created.',
                      'success'
                    );
                    this.$emit('lost-wallet-record-added');
                  }).catch(()=> {
                    this.$swal({
                          title: 'Could not Add Record, Server Issue',
                          text: "Sorry for inconvinience, please reload page",
                          icon: 'warning',
                          timer: 3000
                      })
                  }).finally(()=>{
                    this.addLostWalletRecordProcessing = false;
                    let addLostWalletRecordModalCloseButton = document.querySelector("#addLostWalletRecord [data-bs-dismiss=modal]");
                    addLostWalletRecordModalCloseButton.click();
                  })     
              }
          })
    },
    selectLocation(selectedPlace){
      // This makes sure the user have clicked the location from Google places only
      this.addFormLocationOfLosingWalletValid = true;
      // update this selected place in place of form input of location
      this.addFormLocationOfLosingWallet = selectedPlace;
      this.listOfAllPlaces = [];      
    },
    resetFormFields(){
        this.addFormLocationOfLosingWalletValid = false;
        this.addFormHowYouLostWallet = '';
        this.addFormLocationOfLosingWallet = '';
        this.addFormDateTimeOfLosingWallet = '';
        this.addFormAdditionalDetailsOfLostWallet = '';
        this.addFormListOfCardsToBlock = [];
        this.addLostWalletRecordFormErrors = [];

        // Reset the Checkboxes back to original state of unchecked
        let listOfCardsToBlock = document.querySelectorAll('input.listOfCardsToBlock:checked');      
        listOfCardsToBlock.forEach(element => element.checked = false);
    },
    googleMapPlacesAutocompleteServiceInit () {
        this.googleMapPlacesAutocompleteService = new window.google.maps.places.AutocompleteService();
      },
    googleMapGeocoderServiceInit () {
      this.googleMapGeocodeService = new window.google.maps.Geocoder();
    },
    displaySuggestions (predictions, status) {
      this.addFormLocationOfLosingWalletValid = false;
      if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
        this.listOfAllPlaces = []
        return
      }
      this.listOfAllPlaces = predictions.map(prediction => prediction.description)
    },
    checkBrowseSupportForGeoLocation(){
      if(navigator.geolocation)
        return true;
      return false;
    },
    fetchDeviceLocation(){
          function successCallback () {              
          }
          function errorCallback (error) {
              console.log(error.message);
          }
          navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  },
  watch: {
      addFormLocationOfLosingWallet(newValue) {
        // If the location is not a valid selected one from google Places, then only search for more results
        this.addFormLocationOfLosingWalletValid = false;
        if (newValue) {
          this.googleMapPlacesAutocompleteService.getPlacePredictions({
            input: this.addFormLocationOfLosingWallet,
            types: ['geocode']
          }, (predictions, status) => {
                this.addFormLocationOfLosingWalletValid = false;
                if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
                  this.listOfAllPlaces = []
                  return
                }
                this.listOfAllPlaces = predictions.map(prediction => prediction.description)
              })
        }
      }
    }
}
</script>

<style scoped>

</style>

