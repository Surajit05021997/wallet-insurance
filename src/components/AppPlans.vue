<template>
  <section id="plans" class="app-plans">
    <div class="container">
      <h2 class="heading">Our Plans</h2>
      <div class="plans">
        <div class="plan best-plan">
          <p class="plan-type">Wallet Protection : Platinum</p>
          <p class="plan-price">Rs. 24000* <span>only/Year</span></p>
          <p class="s-fs mb-0">Including all taxes</p>
          <p class="m-fs">(an affordable 2100/month)</p>
          <ul>
            <li>All Credit/Debits card blocking</li>
            <li>All Identity cards replacement</li>
            <li>Travel Coverage : Hotel Bill payment</li>
            <li>Travel Coverage : Ticket booking</li>
            <li>Travel Coverage : Cash arrangements</li>
          </ul>
          <p class="s-fs">* Premium can be varied based on the customer location & details</p>
          <router-link
            :to="{ name: 'BuyPlans', params: { type: 'platinum' } }"
            class="btn"
            ><strong>Buy Now</strong></router-link
          >
        </div>
        <div class="plan">
          <p class="plan-type">Wallet Protection : Gold</p>
          <p class="plan-price">Rs. 2100 <span>only/Year</span></p>
          <p class="s-fs mb-0">Including all taxes</p>
          <p class="m-fs">(an affordable 205/month)</p>
          <ul>
            <li>All Credit/Debits card blocking</li>
            <li>All Identity cards replacement</li>
            <li>Travel Assistance : Hotel Bill payment</li>
            <li>Travel Assistance : Ticket booking</li>
            <li>Travel Assistance : Cash arrangements</li>
          </ul>
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
export default {};
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
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  gap: 5rem;
}
.plan {
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
@media screen and (max-width: 768px) {
  .plans {
    flex-direction: column;
    padding: 0 15%;
  } 
}
</style>