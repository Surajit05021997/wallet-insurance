<template>
  <div>
      <table class="table table-hover">
        <thead>
  <tr>
    <th v-for="(policyDetailsField, index) in policyDetailsFields" :key="index">{{policyDetailsField}}</th>
  </tr>
  </thead>
  <tbody>
  <tr v-for="(policyDetail, index) in policyDetails" :key="index">
    <td>{{policyDetail.policyId}}</td>
    <td>{{policyDetail.startDate}}</td>
    <td>{{policyDetail.endDate}}</td>
    <td>{{policyDetail.insuranceAmount}}</td>
    <td><button class="btn btn-danger" v-show="showRenewPolicyButton(policyDetail.endDate)" :disabled="!showRenewPolicyButton(policyDetail.endDate)">Renew Policy</button></td>
  </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
name: 'PolicyDetails',
data(){
    return {
        policyDetailsFields : [],
        policyDetails : []        
    }
},
methods: {
    initialiseValues(){
      this.BASE_URL = 'http://localhost:3001';
      this.policyDetailsFields = [
        'Policy ID',
        'Start Date',
        'End Date',
        'Insurance Amount',
        'Renew Policy',
      ];
     this.showPloicyData();
    },
    async showPloicyData() {
      this.policyDetails = await this.getPolicyDetals();
    },
    async getPolicyDetals() {
      return await axios.get(`${this.BASE_URL}/policies`)
      .then((res) => {
        return res.data;
        })
      .catch((error)=>{ 
        return Promise.reject(error)});
  },
    
    showRenewPolicyButton(checkEndDate){
      console.log('endDate', checkEndDate);
      let today = new Date();
      const todayDate = (today.getDate()+
                "/"+(today.getMonth()+1)+
                "/"+today.getFullYear());
      if(todayDate === (this.endDate)) {
        return true;
      }
      return false;      
    },
    
    getPolicyId() {
      Math.random();
      Math.floor(Math.random());
      return Math.floor(Math.random() * 10) + 1;
    },
    getStarDate() {
      let timestamp = 1607110465663;
      let date = new Date(timestamp);
      return (date.getDate()+
                "/"+(date.getMonth()+1)+
                "/"+date.getFullYear()+
                " "+date.getHours()+
          ":"+date.getMinutes()+
          ":"+date.getSeconds());
    },
    getEndDate() {
      let timestamp = 1607110465663;
      let date = new Date(timestamp);
      this.endDate = (date.getDate()+
                "/"+(date.getMonth()+1)+
                "/"+(date.getFullYear()+1));
      return (date.getDate()+
                "/"+(date.getMonth()+1)+
                "/"+(date.getFullYear()+1)+
                " "+date.getHours()+
          ":"+date.getMinutes()+
          ":"+date.getSeconds());
    },
    getInsuranceAmount() {
      let insuranceAmt = 100000;
      let claimAmount = 10000;
      return (insuranceAmt - claimAmount);
    }
}, 
created(){
    this.initialiseValues();
}
}
</script>

<style scoped>
  
</style>