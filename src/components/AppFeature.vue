<template>
  <section class="app-feature">
    <div class="container">
      <h2>What we provide</h2>
      <div class="feature">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        </div>
        <div class="feature-description">
          <h3>Card Protection</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia explicabo dolor odio! Temporibus, vero maiores. Accusantium asperiores adipisci officia maxime aliquid fugit cumque aut tempore ipsum deleniti laudantium, libero iste sed.</p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-description">
          <h3>SIM Protection</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia explicabo dolor odio! Temporibus, vero maiores. Accusantium asperiores adipisci officia maxime aliquid fugit cumque aut tempore ipsum deleniti laudantium, libero iste sed.</p>
        </div>
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      <div class="feature">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <div class="feature-description">
          <h3>24/7 Chat Support</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia explicabo dolor odio! Temporibus, vero maiores. Accusantium asperiores adipisci officia maxime aliquid fugit cumque aut tempore ipsum deleniti laudantium, libero iste sed.</p>
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
  .container {
    max-width: 120rem;
    margin: 0 auto;
  }
  .app-feature {
    padding: 2rem;
  }
  .app-feature h2 {
    font-size: 4.5rem;
    margin-bottom: 2rem;
  }
  .feature {
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .feature-icon {
    display: flex;
    justify-content: center;
  }
  .icon {
    width: 10rem;
    stroke: #80bfff;
  }
  .feature-description h3 {
    font-size: 2.7rem;
    margin-bottom:1rem;
  }
  .feature-description p {
    font-size: 2rem;
    line-height: 3rem;
  }
</style>

