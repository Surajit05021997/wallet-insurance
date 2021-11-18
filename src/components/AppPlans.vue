<template>
  <section id="plans" class="app-plans">
    <div class="container">
      <h2 class="heading">Our Plans</h2>
      <div class="plans">
        <div class="plan best-plan">
          <p class="plan-type">Wallet Protection : Platinum</p>
          <p class="plan-price">Rs. 2400* <span>only/Year</span></p>
          <p class="s-fs mb-0">Including all taxes</p>
          <p class="m-fs">(an affordable 200/month)</p>
          <p class="m-fs">Benefits</p>
          <ul>
            <li>&rarr; All Credit/Debits card blocking</li>
            <li>&rarr; All Identity cards replacement</li>
            <li>&rarr; Travel Assistance : Hotel Bill payment*</li>
            <li>&rarr; Travel Assistance : Ticket booking*</li>
            <li>&rarr; Travel Assistance : Cash arrangements*</li>
            <li>&rarr; Travel Assistance : Cards Fraud protection</li>
            <li>&rarr; <strong>Get additional 20% discounts if you book the carbon neutral hotel or eco friendly hotels</strong></li>
          </ul>
          <p class="s-fs">
            *Need to repay the Advance amount.<br>
            **This offerings can only  made legal BFSI Entities.
          </p>
          <router-link
            :to="{ name: 'BuyPlans', params: { type: 'platinum' } }"
            class="btn"
            ><strong>Buy Now</strong></router-link
          >
        </div>
        <div class="plan">
          <p class="plan-type">Wallet Protection : Gold</p>
          <p class="plan-price">Rs. 1800 <span>only/Year</span></p>
          <p class="s-fs mb-0">Including all taxes</p>
          <p class="m-fs">(an affordable 150/month)</p>
          <p class="m-fs">Benefits</p>
          <ul>
            <li>&rarr; All Credit/Debits card blocking</li>
            <li>&rarr; All Identity cards replacement</li>
            <li>&rarr; Travel Assistance : Hotel Bill payment*</li>
            <li>&rarr; Travel Assistance : Ticket booking*</li>
            <li>&rarr; Travel Assistance : Cards Fraud protection</li>
            <li>&rarr; <strong>Get additional 10% discounts if you book the carbon neutral hotel or eco friendly hotels</strong></li>
          </ul>
          <p class="s-fs">
            *Need to repay the Advance amount.<br>
            **This offerings can only  made legal BFSI Entities.
          </p>
          <router-link
            :to="{ name: 'BuyPlans', params: { type: 'gold' } }"
            class="btn"
            ><strong>Buy Now</strong></router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppPlans',
  methods: {
  }
};
</script>

<style scoped>
.app-plans {
  padding: 2rem;
}
.container {
  max-width: 120rem;
  margin: 0 auto;
}
.plans {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  padding: 2rem 0;
}
.plan {
  width: 75%;
  margin: 0 auto;
  padding: 5rem 3rem;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  border-radius: 10px;
  transition: all 0.3s;
}
.plan:hover {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
}
.best-plan {
  background-color: #007fff;
  color: #fff;
}
.heading {
    font-size: 4.5rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .heading::before {
    content: "";
    width:5rem;
    height: 0;
    border: 2px solid #2c3e50;
    background-color: #2c3e50;
    display: flex;
    margin: auto 0;
  }
  .heading::after {
    content: "";
    width:5rem;
    height: 0;
    border: 2px solid #2c3e50;
    background-color: #2c3e50;
    display: flex;
    margin: auto 0;
  }
.plan-type {
  font-size: 3rem;
  font-weight: 500;
  margin: 0;
}
.plan-price {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0;
}
span {
  font-size: 2.5rem;
  font-weight: 500;
  color: #999;
}
.best-plan span {
  color: #ccc;
}
ul {
  font-size: 2rem;
}
ul li {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  list-style: none;
}
.btn:link,
.btn:visited {
  font-size: 2rem;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  padding: 0.5rem 2rem;
  margin: 1rem 0;
  background-color: #fff;
  box-shadow: inset 0 0 0 0.2rem #007fff;
  border-radius: 20rem;
  transition: all 0.3s;
}

.btn:hover,
.btn:active {
  cursor: pointer;
  box-shadow: inset 0 0 0 0.2rem #007fff;
  background-color: #007fff;
  color: #fff;
}
.best-plan .btn:link, .best-plan .btn:visited {
  background-color: rgb(255, 208, 0);
  box-shadow: none;
  color: #007fff;
}
.best-plan .btn:hover, .best-plan .btn:active {
  box-shadow: none;
  color: #000;
}
.s-fs {
  font-size: 1.2rem;
}
.m-fs {
  font-size: 1.6rem;
}
@media screen and (max-width: 992px) {
  .plans {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    padding: 0 15%;
    gap: 5rem;
  } 
}
</style>