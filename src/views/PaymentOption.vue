<template>
  <div class="container">
    <div class="summery-display">
      <p class="plan-type">Wallet Protection : {{ $route.params.type }} plan</p>
      <p class="plan-price">
        <span>Plan Price </span>
        <span v-if="$route.params.type === 'platinum'"
          ><strong>Rs. 24000 /year</strong></span
        >
        <span v-if="$route.params.type === 'gold'"
          ><strong>Rs. 2100 /year</strong></span
        >
      </p>
      <p>Inclusive of all taxes</p>
      <hr />
      <div class="plan-price">
        <p>Amount to be paid</p>
        <span v-if="$route.params.type === 'platinum'"
          ><strong>Rs. 24000</strong></span
        >
        <span v-if="$route.params.type === 'gold'"
          ><strong>Rs. 2100</strong></span
        >
      </div>
    </div>
    <div>
      <div class="option">
        <div class="option-title" @click="toggle(1)">
          <p>Credit or Debit Card</p>
        </div>
        <div :class="visible_1 ? 'viisible' : 'not-visible'">
          <form @submit.prevent="validate">
            <div class="field">
              <label>Card Number</label>
              <input
                type="text"
                v-model="cardNumber"
                @input="validateCardNumber"
              />
              <p class="invalid" v-if="isEmptyCardNumber">Enter card number</p>
              <p class="invalid" v-if="!isCardNumberValid">Enter valid card number</p>
            </div>
            <div class="field">
              <label>Name On Card</label>
              <input type="text" v-model="name" @input="validateName" />
              <p class="invalid" v-if="!isNameValid">Enter name</p>
            </div>
            <div class="field">
              <label>Expiry</label>
              <input
                type="text"
                placeholder="mm/yy"
                v-model="expiry"
                @input="validateExpiry"
              />
              <p class="invalid" v-if="isEmptyExpiry">Enter expiry date</p>
              <p class="invalid" v-if="!isExpiryValid">Enter valid expiry date</p>
            </div>
            <div class="field">
              <label>CVV</label>
              <input type="text" v-model="cvv" @input="validateCvv" />
              <p class="invalid" v-if="isEmptyCvv">Enter CVV</p>
              <p class="invalid" v-if="!isCvvValid">Enter valid CVV</p>
            </div>
            <button class="btn">Make Payment</button>
          </form>
        </div>
      </div>
    </div>
    <div>
      <div class="option">
        <div class="option-title" @click="toggle(2)">
          <p>UPI</p>
        </div>
        <div class="upi" :class="visible_2 ? 'viisible' : 'not-visible'">
          <img src="../assets/bhim.svg" alt="bhim logo" @click="upiPayment" />
          <img src="../assets/gpay.svg" alt="gpay logo" @click="upiPayment" />
          <img src="../assets/phonepe.svg" alt="phonepe logo" @click="upiPayment" />
        </div>
      </div>
    </div>
    <div>
      <div class="option">
        <div class="option-title" @click="toggle(3)">
          <p>Net Banking</p>
        </div>
        <div
          class="net-banking"
          :class="visible_3 ? 'viisible' : 'not-visible'"
        >
          <p>Select Bank for Payment</p>
          <form @submit.prevent="validatePayment">
            <select v-model="bankSelected">
              <option disabled></option>
              <option>AXIS Bank NetBanking</option>
              <option>Bank of India</option>
              <option>Central Bank Of India</option>
              <option>HDFC Bank</option>
            </select>
            <p class="invalid" v-if="!isbankSelectedValid">Select bank</p>
            <button class="btn">Make Payment</button>
          </form>
        </div>
      </div>
    </div>
    <div class="overlay" :class="{ 'modal-visible': isModalVisible }">
      <div class="popup">
        <h2>Your payment was successful.</h2>
        <a class="close" href="#" @click="closeModal">&times;</a>
        <div class="content">
          <p>Please check your mail for login credentials.</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="payment-successful"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { addCustomerService } from '@/service/service.js';
import { mapActions } from "vuex";
export default {
  data() {
    return {
      cardNumber: "",
      name: "",
      expiry: "",
      cvv: "",
      bankSelected: "",
      visible_1: false,
      visible_2: false,
      visible_3: false,
      isCardNumberValid: true,
      isEmptyCardNumber: false,
      isNameValid: true,
      isExpiryValid: true,
      isEmptyExpiry: false,
      isCvvValid: true,
      isEmptyCvv: false,
      isbankSelectedValid: true,
      isModalVisible: false,
    };
  },
  methods: {
    ...mapActions(["addCustomerAction"]),
    toggle(option) {
      if (option === 1) {
        this.visible_1 = !this.visible_1;
        this.visible_2 = false;
        this.visible_3 = false;
      } else if (option === 2) {
        this.visible_2 = !this.visible_2;
        this.visible_1 = false;
        this.visible_3 = false;
      } else {
        this.visible_3 = !this.visible_3;
        this.visible_1 = false;
        this.visible_2 = false;
      }
    },
    validate() {
      this.validateCardNumber();
      this.validateName();
      this.validateExpiry();
      this.validateCvv();
      if (
        this.isCardNumberValid &&
        this.isNameValid &&
        this.isExpiryValid &&
        this.isCvvValid
      ) {
        this.isModalVisible = true;
        // addCustomerService({
        //   name: 'fdsfs',
        // });
      }
    },
    validatePayment() {
      this.validateBank();
      if(this.isbankSelectedValid === true) {
        this.isModalVisible = true;
      }
    },
    validateCardNumber() {
      if (this.cardNumber) {
        this.isEmptyCardNumber = false;
        const regex = /^[0-9]{16}$/;
        if(regex.test(this.cardNumber)) {
          this.isCardNumberValid = true;
        } else {
          this.isCardNumberValid = false;
        }
      } else {
        this.isEmptyCardNumber = true;
        this.isCardNumberValid = true
      }
    },
    validateName() {
      if (this.name) {
        this.isNameValid = true;
      } else {
        this.isNameValid = false;
      }
    },
    validateExpiry() {
      if (this.expiry) {
        this.isEmptyExpiry = false;
        const regex_1 = /^0[1-9]\/[0-9]{2}$/;
        const regex_2 = /^1[0-2]\/[0-9]{2}$/;
        if(regex_1.test(this.expiry) || regex_2.test(this.expiry)) {
          this.isExpiryValid = true;
        } else {
          this.isExpiryValid = false;
        }
      } else {
        this.isEmptyExpiry = true;
        this.isExpiryValid = true
      }
    },
    validateCvv() {
      if (this.cvv) {
        this.isEmptyCvv = false;
        const regex = /^[0-9]{3}$/;
        if(regex.test(this.cvv)) {
          this.isCvvValid = true;
        } else {
          this.isCvvValid = false;
        }
      } else {
        this.isEmptyCvv = true;
        this.isCvvValid = true
      }
    },
    validateBank() {
      if(this.bankSelected) {
        this.isbankSelectedValid = true;
      } else {
        this.isbankSelectedValid = false;
      }
    },
    addCustomer() {
      this.addCustomerAction(this.$route.params);
    },
    upiPayment() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.$router.push("/login");
    },
  },
  watch: {
    bankSelected() {
      this.validateBank();
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 120rem;
  margin: 5rem auto;
  padding: 0 2rem;
}
.option {
  border: 1px solid #aaa;
  border-radius: 10px;
  font-size: 2rem;
  margin-bottom: 1rem;
  padding: 1rem 2rem;
}
.option-title:hover {
  cursor: pointer;
}
.not-visible {
  display: none;
}
.btn {
  font-size: 2rem;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  padding: 0.5rem 2rem;
  background-color: #fff;
  box-shadow: inset 0 0 0 0.2rem #007fff;
  border-radius: 20rem;
  transition: all 0.3s;
}

.btn:hover {
  cursor: pointer;
  box-shadow: inset 0 0 0 0.2rem #007fff;
  background-color: #007fff;
  color: #fff;
}
.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}
.field label {
  font-size: 1.5rem;
}
.field input {
  font-size: 1.6rem;
  border: none;
  border-left: 4px solid #007fff;
  border-radius: 2px;
  background-color: #eee;
  padding-left: 5px;
}
.upi img {
  width: 10rem;
  height: 5rem;
  border: 2px solid black;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
}
.upi img:hover {
  cursor: pointer;
}
.net-banking {
  font-size: 1.5rem;
}
.net-banking .btn {
  display: block;
  margin: 3rem 0 1rem 0;
}
.invalid {
  color: red;
  font-size: 1.5rem;
  margin: 0;
}

.summery-display {
  box-shadow: 0 0 10px 0 #ddd;
  padding: 2rem;
  border-radius: 5px;
  margin-bottom: 2rem;
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

/* popup */
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
  z-index: 10;
}
.modal-visible {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
  position: absolute;
  top: 12px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #007fff;
}
.popup .content {
  max-height: 30%;
  margin: 2rem 0;
  overflow: auto;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}
.popup .content p {
  margin-bottom: 0;
  font-size: 1.5rem;
}
.payment-successful {
  width: 5rem;
  stroke: #007fff;
}
</style>