<template>
  <div class="contact-us" id="contact-us">
    <div class="container">
      <h2 class="heading">Contact Us</h2>
      <form class="contact-form">
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter your email" />
        <div class="group">
          <input type="date" />
          <select>
            <option>Bug Report</option>
            <option>Feature Request</option>
            <option>Other</option>
          </select>
        </div>
        <textarea
          cols="30"
          rows="5"
          placeholder="Tell us what's wrong"
        ></textarea>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style scoped>
.contact-us {
  padding: 2rem;
}
.container {
  max-width: 120rem;
  margin: 0 auto;
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
  width: 5rem;
  height: 0;
  border: 2px solid #2c3e50;
  background-color: #2c3e50;
  display: flex;
  margin: auto 0;
}
.heading::after {
  content: "";
  width: 5rem;
  height: 0;
  border: 2px solid #2c3e50;
  background-color: #2c3e50;
  display: flex;
  margin: auto 0;
}
.contact-form {
  max-width: 60rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
input, select, textarea {
  font-size: 1.6rem;
  border: none;
  border-left: 4px solid #007fff;
  border-radius: 2px;
  background-color: #eee;
  padding-left: 5px;
}
</style>