<template>
  <div class="container">
    <div class="login-card">
      <div class="login-img">
        <p class="img-des">Nice to see you again</p>
        <p class="img-heading">WELCOME BACK</p>
        <a href="http://www.freepik.com">Background image designed by vector_corp / Freepik</a>
      </div>
      <div class="login-field">
        <p class="field-des">Login Account</p>
        <form class="login-form">
          <input type="text" placeholder="Username">
          <input type="password" placeholder="Password">
          <div class="remember-user">
            <input type="checkbox">
            <label>Remember username</label>
          </div>
          <button class="btn">LOGIN</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.container {
  max-width: 120rem;
  margin: 5rem auto;
  padding: 0 2rem;
}
.login-card {
  max-width:80rem;
  margin: 5rem auto;
  height: 50rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.login-img {
  background: url('../assets/login-img.jpg');
  background-size: 400px 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.login-img a {
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
}
.img-des {
  font-size: 2rem;
  color: #fff;
}
.img-heading {
  font-size: 4rem;
  color: #fff;
}
.login-field {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}
.field-des {
  font-size: 3rem;
  color: #007fff;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}
.login-form input {
  font-size: 1.5rem;
  border: none;
  border-left: 4px solid #007fff;
  border-radius: 2px;
  background-color: #eee;
  padding-left: 5px;
}
.remember-user {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.5rem;
}
.btn {
  font-size: 2rem;
  background-color: #007fff;
  color: #444;
  letter-spacing: 0.5rem;
  border-style: none;
  border-radius: 100rem;
  padding: 0 3rem;
  font-weight: 500;
  transition: color 0.2s;
}
.btn:hover {
  color:#fff;
}
@media screen and (max-width: 768px) {
  .login-card {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .login-img {
    width: 100%;
  }
}
</style>