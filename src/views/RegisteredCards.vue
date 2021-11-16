<template>
  <div class="container-fluid">
    <add-card @card-added="fetchCardsList()"></add-card>
    <div class="d-flex mb-5 mt-5">
      <h1>Registered Cards</h1>
      <span style="margin-left:1rem"></span>
      <button type="button" class="btn btn-outline-success btn-text-1_5rem rounded-3" data-bs-toggle="modal" data-bs-target="#addPaymentCard">+ Add Card</button>
    </div>
    <div style="display-flex">
      <div class="radio-toolbar" id="option-selected">
        <div v-for="(eachOption, index) in this.selectionOptions" :key="index" class="m-1">
          <input type="radio" class="form-check-input btn-text-1_5rem" name="selection-option" :value="eachOption.type" :id="eachOption.option" :checked="eachOption.type===selectedOption" @change="getSelectedOption()">
          <label class="mx-0_5rem form-check-label btn-text-1_5rem" :for="eachOption.option">{{eachOption.option}}</label>
        </div>
      </div>
    </div>
      <div class="row">
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 position-relative" v-for="(card, index) in cardsList" :key="index">
            <payment-card class="paymentCard" :class="decreaseOpacity(card.cardType)" :bank="card.bank" :name-on-card="card.nameOnCard" :card-number="card.cardNumber" :card-expiry-date="card.cardExpiryDate" :card-type="card.cardType" :payment-gateway-type="card.paymentGatewayType"></payment-card>
            <div :class="hideOptions(card.cardType)" class="position-absolute extra-options-over-card">
              <button @click="editCardContent(card)" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editPaymentCard">Edit</button>&nbsp;
              <button type="button" @click="deleteCard(card.id)" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
    <edit-card @card-edited="fetchCardsList()" :card-id="selectedCardFields_cardId" :bank="selectedCardFields_bank" :card-number="selectedCardFields_cardNumber" :card-type="selectedCardFields_cardType" :payment-gateway-type="selectedCardFields_paymentGatewayType"></edit-card>
  </div>
</template>

<script>
import AddCard from '@/components/AddCard.vue';
import PaymentCard from '@/components/PaymentCard.vue';
import EditCard from '@/components/EditCard.vue';
import axios from 'axios';

export default {
  name: 'RegisteredCards',
  components : { 
    PaymentCard,
    AddCard,
    EditCard
    },
  data(){
    return {
      selectedOption : '',
      showBlockedCards : false,
      selectionOptions : [],
      cardsList : [],
      selectedCardFields_cardNumber : '',
      selectedCardFields_bank : '',
      selectedCardFields_cardType : '',
      selectedCardFields_paymentGatewayType : '',
      selectedCardFields_cardId : '',
      cardTypeOptions : [],
      BASE_URL: ''
    }
  },

  computed: {},
  methods: {
    async initialiseValues(){
      this.BASE_URL = 'http://localhost:3001';
      this.selectedOption = 'showAll',
      this.selectionOptions = [
        {
        'option' : 'Show All',
        'value' : 'Show All',
        'type' : 'showAll'
        },
        {
        'option' : 'Only Credit Cards',
        'value' : 'Credit Card',
        'type' : 'cardTypeCredit'
        },
        {
        'option' : 'Only Debit Cards',
        'value' : 'Debit Card',
        'type' : 'cardTypeDebit'
        },
        {
        'option' : 'Only ID Cards',
        'value' : 'ID Card',
        'type' : 'cardTypeIdCard'
        },
        ],
        this.cardsList = await this.getAllCardsList();
        this.selectedCardFields = {
          cardNumber : '',
          bank : '',
          cardType : '',
          paymentGatewayType : '',
      },
      this.cardTypeOptions = [
        {
        id: 'cardTypeCredit',
        value: 'Credit Card'
        },
        {
        id: 'cardTypeDebit',
        value: 'Debit Card'
        },
        {
        id: 'cardTypeIdCard',
        value: 'ID Card'
        },
      ]
    },
    getSelectedOption(){
    let selectedMenu = document.querySelector('input[name="selection-option"]:checked').value;
    this.selectedOption = selectedMenu;
  },
  async fetchCardsList(){
      this.cardsList = await this.getAllCardsList();
  },
  async getAllCardsList(){
    return await axios.get(`${this.BASE_URL}/registeredCards`)
      .then((res) => {
        return res.data;
        })
      .catch((error)=>{ 
        return Promise.reject(error)});
  },
  decreaseOpacity(cardType){
    if((this.selectedOption == "showAll") || (this.selectedOption == cardType))
      return '';
    return 'decrease-opacity';
  },
  hideOptions(cardType){
    if((this.selectedOption == "showAll") || (this.selectedOption == cardType))
      return '';
    return 'hide-button';
  },
  showInfoSweetAlert(){
    this.$swal({
              title: 'Information',
              html: "<small>We do not use your card information for any transactions</small>.<br><b>Register cards here to get assistance for blocking them in emergency.</b>",
              icon: 'info',
              timer: 6000
            })
  },
  getCardTypeForEditForm(cardType){
    let matchingTypeId = '';
    this.cardTypeOptions.forEach(type => {
      if(cardType === type.id){
        matchingTypeId = type.id;
      }
    });
    return matchingTypeId;
  },
  editCardContent(card){
    this.selectedCardFields_cardId = card.id;
    this.selectedCardFields_cardNumber = card.cardNumber;
    this.selectedCardFields_bank = card.bank;
    this.selectedCardFields_cardType = this.getCardTypeForEditForm(card.cardType);
    this.selectedCardFields_paymentGatewayType = card.paymentGatewayType;
  },
  async deleteCard(id){
    this.$swal({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
              if (result.isConfirmed) {
                await axios.delete(`${this.BASE_URL}/registeredCards/${id}`)
                  .then( async ()=>{
                      this.$swal(
                      'Deleted!',
                      'The card has been deleted.',
                      'success'
                    )
                    await this.fetchCardsList();
                  }).catch(()=> {
                    this.$swal({
                          title: 'Could not Delete, Server Issue',
                          text: "Sorry for inconvinience, please reload page",
                          icon: 'warning',
                          timer: 3000
                      })
                  });           
              }
          })
  }
  },  
  created(){
    this.initialiseValues();
    this.showInfoSweetAlert();
  }
}
</script>

<style scoped>
 .radio-toolbar, .d-flex {
  display: flex;
}
.m-1{
  margin: 8px;
}
.mx-0_5rem{
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.mx-1rem{
  margin-left: 1rem;
  margin-right: 1rem;
}

.btn-text-1_5rem{
  font-size: 1.5rem
}

.position-relative{
  position: relative;
}

.position-absolute{
  position: absolute;
}

.extra-options-over-card{
  right: 20px;
  top: 20px;
  opacity: 0;
  transition: 0.1s ease-in;
}

.paymentCard:hover:not(.decrease-opacity) ~ .extra-options-over-card, .extra-options-over-card:hover{
  opacity: 1;
}

.paymentCard{
  transition: 0.1s ease-in;
}

.decrease-opacity{
  transform: scale(0.97);
  opacity: 0.1;
}

.hide-button{
  display: none;
}
</style>