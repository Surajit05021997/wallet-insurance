<template>
  <nav class="navbar">
    <div class="container">
      <!-- <a href="#" class="logo">Wallet-Insurance</a> -->
      <router-link class="logo" :to="{ name: 'Home'}">Wallet-Insurance</router-link>
      <!-- <a href="#" class="login-btn">Login</a> -->
      <router-link class="login-btn" :to="{ name: 'Login'}">Login</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .navbar {
    background-color: #02b0eb;
    padding: 0.5rem 2rem;
  }

  .container {
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo:link, .logo:visited {
    font-size: 4rem;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
  }

  .logo:hover, logo:active {
    cursor: pointer;
  }

  .login-btn:link, .login-btn:visited {
    font-size: 2rem;
    font-weight:500;
    color: #333;
    text-decoration: none;
    padding:0.5rem 2rem;
    background-color: #fff;
    border-radius: 20rem;
    transition: all 0.3s;
  }

  .login-btn:hover, .login-btn:active {
    cursor: pointer;
    box-shadow: inset 0 0 0 0.2rem #fff;
    background-color: #007fff;
    color: #fff;
  }
</style>