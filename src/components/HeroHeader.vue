<template>
  <div>
    <section class="hero-header">
      <div class="container">
        <div class="hero-text-box">
          <h1>Lorem, ipsum.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis animi dolor illo, rerum nisi aut. Odit a recusandae minima molestiae!</p>
          <a href="#plans" class="btn">Protect your wallect</a>
        </div>
        <div class="hero-img-box">
          <img src="@/assets/wallet-img.jpg" alt="Man holding wallet." class="hero-img">
        </div>
      </div>
    </section>
    <div class="empty-block">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .hero-header {
    background-color: #80bfff;
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
    margin-bottom: 2rem;
  }
  .hero-text-box p {
    font-size: 2.5rem;
    line-height: 4rem;
    margin-bottom: 2rem;
  }
  .btn:link, .btn:visited {
    font-size: 2rem;
    font-weight:500;
    color: #333;
    text-decoration: none;
    padding:0.5rem 2rem;
    background-color: #fff;
    border-radius: 20rem;
    transition: all 0.3s;
  }

  .btn:hover, .btn:active {
    cursor: pointer;
    box-shadow: inset 0 0 0 0.2rem #fff;
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
  .empty-block {
    height: 8rem;
    background: linear-gradient(#80bfff, #fff);
  }
</style>