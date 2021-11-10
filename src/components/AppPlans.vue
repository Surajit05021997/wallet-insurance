<template>
  <section id="plans" class="app-plans">
    <div class="container">
      <h2>Our Plans</h2>
      <div class="plans">
        <div class="plan best-plan">
          <p class="plan-type">Gold</p>
          <p class="plan-price">1999 INR <span>/ Month</span></p>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
          <router-link
            :to="{ name: 'BuyPlans', params: { type: 'gold' } }"
            class="btn"
            ><strong>Buy Now</strong></router-link
          >
        </div>
        <div class="plan">
          <p class="plan-type">Silver</p>
          <p class="plan-price">1599 INR <span>/ Month</span></p>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
          <router-link
            :to="{ name: 'BuyPlans', params: { type: 'silver' } }"
            class="btn"
            ><strong>Buy Now</strong></router-link
          >
        </div>
        <div class="plan">
          <p class="plan-type">Bronze</p>
          <p class="plan-price">1199 INR <span>/ Month</span></p>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
          <router-link
            :to="{ name: 'BuyPlans', params: { type: 'bronze' } }"
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
.app-plans h2 {
  font-size: 4.5rem;
  margin-bottom: 2rem;
}
.plan-type {
  font-size: 3rem;
  font-weight: 500;
  margin: 0;
}
.plan-price {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
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
  margin-bottom: 2rem;
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
</style>