<template>
  <div class="buy-plans">
    <div class="container">
      <p class="des">Enter your details</p>
      <div class="box">
        <form @submit.prevent="validate">
          <div class="field-box">
            <div class="field">
              <label>Name</label>
              <input type="text" v-model="name" @input="validateName">
              <p class="invalid" v-if="!isValidName">Enter your name</p>
            </div>
            <div class="field">
              <label>Mobile Number</label>
              <input type="text" v-model="number" @input="validateNumber">
              <p class="invalid" v-if="!isValidNumber">Enter your mobile number</p>
            </div>
            <div class="field">
              <label>Email</label>
              <input type="email" v-model="email" @input="validateEmail">
              <p class="invalid" v-if="!isValidEmail">Enter your email</p>
            </div>
            <div class="terms-conditions">
              <input type="checkbox" v-model="termsChecked">
              <label>Agree Terms & Conditions</label>
            </div>
          </div>
          <button class="btn"><strong>Continue to payment</strong></button>
          <!-- <router-link class="btn" :to="{ name: 'PaymentOption'}"><strong>Continue to payment</strong></router-link> -->
        </form>
        <div class="summery-display">
          <p class="plan-type">
            {{$route.params.type}} plan
          </p>
          <p class="plan-price">
            <span>Plan Price </span>
            <span v-if="$route.params.type === 'platinum'"><strong>INR 2100</strong></span>
            <span v-if="$route.params.type === 'gold'"><strong>INR 205</strong></span>
          </p>
          <p>Inclusive of all taxes</p>
          <a href="#">Apply discount coupon</a>
          <hr>
          <div class="plan-price">
            <p>Amount to be paid </p>
            <span v-if="$route.params.type === 'platinum'"><strong>INR 2100</strong></span>
            <span v-if="$route.params.type === 'gold'"><strong>INR 205</strong></span> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyPlans',
  data() {
    return {
      name: '',
      number: '',
      email: '',
      termsChecked: false,
      isValidName: true,
      isValidNumber: true,
      isValidEmail: true,
    }
  },
  methods: {
    validate() {
      this.validateName();
      this.validateNumber();
      this.validateEmail();
      if(this.isValidName && this.isValidNumber && this.isValidEmail && this.termsChecked) {
        this.$router.push({
      name: 'PaymentOption',
      params: {
        name: this.name,
        number: this.number,
        email: this.email,
        type: this.$route.params.type,
      }
    });
      }
    },
    validateName() {
      if(this.name.length) {
        this.isValidName = true;
      } else {
        this.isValidName = false;
      }
    },
    validateNumber() {
      if(this.number.length) {
        this.isValidNumber = true;
      } else {
        this.isValidNumber = false;
      }
    },
    validateEmail() {
      if(this.email.length) {
        this.isValidEmail = true;
      } else {
        this.isValidEmail = false;
      }
    },
  },
}
</script>

<style scoped>
.buy-plans {
  padding: 2rem;
}
.container {
  max-width: 120rem;
  margin: 0 auto;
}
.des {
  font-size: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
}
.box {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 3rem;
  align-items: start;
}
label {
  font-size: 2rem;
  padding-top: 0.5rem;
}
.field-box {
  padding: 2rem;
  box-shadow: 0 0 10px 0 #ddd;
  border-radius: 5px;
  margin-bottom: 3rem;
  display:grid;
  grid-template-columns: 100%;
  row-gap: 2rem;
}
.field {
  display: flex;
  flex-direction: column;
}
input {
  font-size: 1.6rem;
  border: none;
  border-left: 4px solid #007fff;
  border-radius: 2px;
  background-color: #eee;
  padding-left: 5px;
}
.btn {
    background-color: #007fff;
    padding: 1rem 2rem;
    margin: 2rem;
    margin-left: 0;
    text-decoration: none;
    border-style: none;
    border-radius: 20rem;
    font-size: 2rem;
    color: #fff;
  }
  .btn:hover {
    cursor: pointer;
    background-color: #fff;
    color: #000;
    box-shadow: inset 0 0 0 0.2rem #007fff;
  }
  .summery-display {
    box-shadow: 0 0 10px 0 #ddd;
    padding: 2rem;
    border-radius: 5px;
  }
  .summery-display .plan-type {
    text-transform: capitalize;
    font-size: 2.5rem;
    font-weight: 700;
  }
  .summery-display .plan-price {
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
  }
  .summery-display a {
    font-size: 1.5rem;
    text-decoration: none;
  }
  .invalid {
    color: red;
    font-size: 1.5rem;
  }
  .terms-conditions {
    display: flex;
    align-items: center;
  }
  .terms-conditions label {
    font-size: 1.5rem;
    padding-top: 0;
    padding-left: 1.5rem;
  }

  @media  screen and (max-width: 992px) {
    .box {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto auto;
    }
    .summery-display {
      order: 1;
    }
    .box form {
      order: 2;
    }
  }
</style>