<template>
  <section id="plans" class="app-plans">
    <div class="container">
      <h2>Our Plans</h2>
      <div class="plans">
        <div class="plan">
        <div class="plan-card gold-card">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <div class="empty-block"></div>
          <h3>Gold Plan</h3>
          <ul>
            <li>&rarr; Lorem ipsum dolor sit amet</li>
            <li>&rarr; Lorem ipsum dolor sit amet</li>
            <li>&rarr; Lorem ipsum dolor sit amet</li>
            <li>&rarr; Lorem ipsum dolor sit amet</li>
            <li>&rarr; Lorem ipsum dolor sit amet</li>
          </ul>
          <router-link :to="{ name: 'BuyPlans', params: { type: 'gold' } }" class="btn">Buy Now</router-link>
        </div>
      </div>
      <div class="plan">
        <div class="plan-card silver-card">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-silver" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <div class="empty-block"></div>
          <h3>Silver Plan</h3>
          <ul>
            <li>&rarr; Lorem ipsum dolor sit amet</li>
            <li>&rarr; Lorem ipsum dolor sit amet</li>
            <li>&rarr; Lorem ipsum dolor sit amet</li>
            <li>&rarr; Lorem ipsum dolor sit amet</li>
            <li>&rarr; Lorem ipsum dolor sit amet</li>
          </ul>
          <router-link :to="{ name: 'BuyPlans', params: { type: 'silver' } }" class="btn">Buy Now</router-link>
        </div>
      </div>
      <div class="plan">
        <div class="plan-card bronze-card">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <div class="empty-block"></div>
          <h3>Bronze Plan</h3>
          <ul>
            <li>&rarr; Lorem ipsum dolor sit amet</li>
            <li>&rarr; Lorem ipsum dolor sit amet</li>
            <li>&rarr; Lorem ipsum dolor sit amet</li>
            <li>&rarr; Lorem ipsum dolor sit amet</li>
            <li>&rarr; Lorem ipsum dolor sit amet</li>
          </ul>
          <router-link :to="{ name: 'BuyPlans', params: { type: 'bronze' } }" class="btn">Buy Now</router-link>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .app-plans {
    padding: 2rem;
  }
  .container {
    max-width: 120rem;
    margin: 0 auto;
  }
  .app-plans h2 {
    font-size: 4.5rem;
    margin-bottom: 2rem;
  }
  .plans {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;
    margin: 4rem 0;
  }
  .plan {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .plan-card {
    width: 80%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 0.3s;
  }
  .gold-card {
    border: 5px solid #ffd700;
  }
  .silver-card {
    border: 5px solid #A9A9A9;
  }
  .bronze-card {
    border: 5px solid #CD7F32;
  }
  .gold-card:hover {
    box-shadow: 0 0 30px 0.2px #ffd700;
  }
  .silver-card:hover {
    box-shadow: 0 0 30px 0.2px #A9A9A9;
  }
  .bronze-card:hover {
    box-shadow: 0 0 30px 0.2px #CD7F32;
  }
  .icon {
    width: 10rem;
    margin: 2rem;
  }
  .icon-gold {
    stroke: #ffd700;
  }
  .icon-silver {
    stroke: #A9A9A9;
  }
  .icon-bronze {
    stroke: #CD7F32;
  }
  .empty-block {
    border: 2px solid #999;
    width: 90%;
    margin-bottom: 1rem;
  }
  .plan-card h3 {
    font-size: 3rem;
  }
  .plan-card ul li {
    font-size: 2rem;
    line-height: 4rem;
    list-style-type: none;
  }
  .btn:link, .btn:visited {
    background-color: #80bfff;
    padding: 1rem 2rem;
    margin: 2rem;
    text-decoration: none;
    border-radius: 20rem;
    font-size: 2rem;
    color: #fff;
  }
  .btn:hover, .btn:active {
    cursor: pointer;
    background-color: #007fff;
  }
</style>