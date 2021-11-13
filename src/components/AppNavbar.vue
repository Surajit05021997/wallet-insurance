<template>
  <nav class="navbar">
    <div class="container">
      <router-link v-if="!isLoggedIn" class="logo" :to="{ name: 'Home' }">Wallet-Insurance</router-link>
      <router-link v-if="isLoggedIn" class="logo" :to="{ name: 'Dashboard' }">Wallet-Insurance</router-link>
      <div class="right-nav" v-if="!isLoggedIn">
        <!-- <div class="right-nav"> -->
          <router-link :to="{ name: 'Home'}">Home</router-link>
          <a href="#service">Service</a>
          <a href="#plans">Plans</a>
          <a href="#">Contact</a>
        <!-- </div> -->
        <router-link class="login-btn" :to="{ name: 'Login'}"><strong>Login</strong></router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppNavbar',
  computed: {
    ...mapState(['isLoggedIn']),
  },
}
</script>

<style scoped>
  .navbar {
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
    color: #007fff;
    text-decoration: none;
  }

  .logo:hover, logo:active {
    cursor: pointer;
  }

  .right-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
  
  .right-nav a {
    text-decoration: none;
    font-size: 2rem;
  }

  .login-btn:link, .login-btn:visited {
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

  .login-btn:hover, .login-btn:active {
    cursor: pointer;
    box-shadow: inset 0 0 0 0.2rem #007fff;
    background-color: #007fff;
    color: #fff;
  }
</style>