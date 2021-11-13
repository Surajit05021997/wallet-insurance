<template>
  <div class="container">
    <div>
      <div class="option">
        <div class="option-title" @click="toggle(1)">
          <p>Credit or Debit Card</p>
        </div>
        <div :class="visible_1 ? 'viisible' : 'not-visible'">
          <form @submit.prevent="addCustomer">
            <div class="field">
              <label>Card Number</label>
              <input type="text" />
            </div>
            <div class="field">
              <label>Name On Card</label>
              <input type="text" />
            </div>
            <div class="field">
              <label>Expiry</label>
              <input type="text" placeholder="mm/yy" />
            </div>
            <div class="field">
              <label>CVV</label>
              <input type="text" />
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
          <img src="../assets/bhim.svg" alt="bhim logo" />
          <img src="../assets/gpay.svg" alt="gpay logo" />
          <img src="../assets/phonepe.svg" alt="phonepe logo" />
        </div>
      </div>
    </div>
    <div>
      <div class="option">
        <div class="option-title" @click="toggle(3)">
          <p>Net Banking</p>
        </div>
        <div class="net-banking" :class="visible_3 ? 'viisible' : 'not-visible'">
          <p>Select Bank for Payment</p>
          <select>
            <option value="0"></option>
            <option value="1">AXIS Bank NetBanking</option>
            <option value="2">Bank of India</option>
            <option value="3">Central Bank Of India</option>
            <option value="4">HDFC Bank</option>
          </select>
          <button class="btn">Make Payment</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex' 
export default {
  data() {
    return {
      visible_1: false,
      visible_2: false,
      visible_3: false,
    };
  },
  methods: {
    ...mapActions(['addCustomerAction']),
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
    addCustomer() {
      this.addCustomerAction(this.$route.params);
    }
  },
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
}
.field label {
  font-size: 1.5rem;
}
.field input {
  font-size: 1.5rem;
  margin-bottom: 2rem;
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
</style>