<template>
  <div class="container">
    <div class="dashboard">
      <div></div>
      <div class="profile-card">
        <img src="../assets/user-1.jpg" alt="Profile picture" class="profile-img">
        <p class="profile-name">John Doe</p>
        <p class="profile-number">+91 1234567890</p>
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
}
.dashboard {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  border-radius: 10px;
  padding: 5rem 3rem;
}
.profile-img {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
}
.profile-name {
  font-size: 3rem;
  font-weight: 700;
}
.profile-number {
  font-size: 1.5rem;
  color: #999;
}
/* .profile-number::after {
  content: "";
  display: block;
  width:100%;
  height: 1px;
  border: 2px solid black;
} */
</style>