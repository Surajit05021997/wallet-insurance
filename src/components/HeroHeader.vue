<template>
  <div>
    <section class="hero-header">
      <div class="container">
        <div class="hero-text-box">
          <h1>Secure your wallet.</h1>
          <p>Wallet theft & loosing your wallet can be very stressful. A wallet protection plan offered by bank could be very helpful in such emergency situations, by providing you with the necessary financial  support at the time.</p>
          <a href="#plans" class="btn"><strong>Protect your wallect</strong></a>
        </div>
        <div class="hero-img-box">
          <img src="@/assets/landing-page-img.png" alt="Man holding wallet." class="hero-img">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .hero-header {
    /* background-color: #80bfff; */
    padding: 2rem;
  }
  .container {
    max-width: 120rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .hero-text-box {
    padding: 7rem 0;
  }
  .hero-text-box h1 {
    font-size: 7rem;
    letter-spacing: -0.2rem;
    margin-bottom: 1.5rem;
  }
  .hero-text-box p {
    font-size: 2.5rem;
    line-height: 4rem;
    margin-bottom: 5rem;
  }
  .btn:link, .btn:visited {
    font-size: 2rem;
    font-weight:500;
    color: #333;
    text-decoration: none;
    padding:0.5rem 2rem;
    background-color: #fff;
    box-shadow: inset 0 0 0 0.2rem #007fff;
    border-radius: 20rem;
    transition: all 0.3s;
  }

  .btn:hover, .btn:active {
    cursor: pointer;
    box-shadow: inset 0 0 0 0.2rem #007fff;
    background-color: #007fff;
    color: #fff;
  }
  .hero-img-box {
    margin: 7rem;
    margin-right: 0;
  }
  .hero-img {
    width: 100%;
    border-radius: 8px;
  }
</style>