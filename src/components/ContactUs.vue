<template>
  <div class="contact-us" id="contact-us">
    <div class="container">
      <h2 class="heading">Contact Us</h2>
      <div class="contact-us-content">
        <div>
          <img
            src="../assets/customer-support-img.jpg"
            alt="Customer Support Illustration"
          />
        </div>
        <div>
          <p class="contact-heading">Get in touch</p>
          <p class="contact-text">
            Want to get in touch? We'd love to hear from you. Here's how you can
            reach us...
          </p>
          <div class="contact-item">
            <div>
              <div class="icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="call-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p>Talk to support person</p>
              </div>
              <p class="contact-text">
                Just pick up the phone to chat with a member of our support
                team.
              </p>
              <p class="contact-text">+91 1234567890</p>
            </div>
            <div>
              <div class="icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mail-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p>Raise a request</p>
              </div>
              <a class="btn" href="#modal-visible">Contact Support</a>
            </div>
          </div>
        </div>
      </div>
      <div class="overlay" id="modal-visible">
        <div class="popup">
          <h2>Raise a request</h2>
          <a class="close" href="#contact-us">&times;</a>
          <div class="content">
            <form class="contact-form" @submit.prevent>
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
              <button class="btn">SEND</button>
            </form>
          </div>
        </div>
      </div>
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
.contact-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.contact-us-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 5rem;
}
.contact-us-content img {
  width: 100%;
}
.call-icon,
.mail-icon {
  width: 24px;
}
.contact-heading {
  font-size: 3rem;
}
.contact-text {
  font-size: 1.8rem;
}
.icon-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.icon-container p {
  font-size: 2.5rem;
  margin-bottom: 0;
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
.btn {
    font-size: 2rem;
    font-weight:500;
    color: #333;
    text-decoration: none;
    padding:0.5rem 2rem;
    width: fit-content;
    background-color: #fff;
    box-shadow: inset 0 0 0 0.2rem #007fff;
    border-radius: 20rem;
    transition: all 0.3s;
  }

  .btn:hover {
    cursor: pointer;
    box-shadow: inset 0 0 0 0.2rem #007fff;
    background-color: #007fff;
    color: #fff;
  }
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  margin-bottom: 2rem;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
  position: absolute;
  top: 12px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #007fff;
}
@media screen and (max-width: 992px) {
  .contact-us-content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    align-items: center;
    gap: 2rem;
  }
  .contact-us-content img {
    width: 70%;
    display: block;
    margin: 0 auto;
  }
}
</style>