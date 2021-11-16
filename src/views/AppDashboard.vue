<template>
  <div>
    <div class="sidebarContent">
      <main>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div>
      <!-- <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas> -->
      <div class="row">
        <div class="col-sm-8">
          <div class="row">
            <div class="col-sm">
              <div class="content-card">
                <h2>Balance</h2>
                <h1>$7,893.66</h1>
                <p>Your account number 0019-0076-2727-4420</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="content-card">
                <p>Compare other products with our's</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <div class="content-card">
                <p>Safely block your cards from here.</p>
                <button type="button" class="btn btn-light">Card List</button>
              </div>
            </div>
            <div class="col-sm">
              <div class="content-card">
                <img src="../assets/analytics.jpg" width="100" height="100" alt="Profile picture" class="profile-img">
                <h2>Analytics Related to your profile</h2>
              </div>
            </div>
            <div class="col-sm">
              <div class="content-card">
                <!-- <img src="../assets/user-1.jpg" alt="Profile picture" class="profile-img"> -->
                <div class="html">
                  <h2>Stats</h2>
                  <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <!-- <title>Layer 1</title> -->
                      <circle class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="15" stroke="#ffffff" fill="none"/>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
            <div class="col-sm">
              <div class="profile-card">
                <h3>My Profile</h3>
                <img src="../assets/profile.jpg" alt="Profile picture" class="profile-img">
                <h2>Team Amalgam</h2>
                <h5>teamamalgam@capgemini.com</h5>
                <div class="col">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View Full Profile</button>
                </div>
                <hr style="width:75%;">
                <div>
                  <h2>Previous history</h2>
                </div>
              </div>
            </div>
        </div>
      </div>
      </main>
    </div>    
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Dashboard',
  computed: {
    ...mapState(['customerDetails', 'loggedInUser']),
  },
  created() {
    this.getCustomerDetailsAction(this.loggedInUser);
  },
  methods: {
    ...mapActions(['getCustomerDetailsAction']),
  }
}
</script>

<style scoped>
.container {
  max-width: 120rem;
  margin: 5rem auto;
}
.btn-light {
  font-weight: 1000;
  color: blue;
}
.dashboard {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.content-card {
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  border-radius: 10px;
  padding: 5rem 3rem;
  margin: 1rem;
  color : white;
  background-image: linear-gradient(90deg, #669dcd, #cf76f5);
  font-family: Century Gothic;
  font-size: bold;
}
.profile-card {
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  border-radius: 10px;
  padding: 5rem 3rem;
  margin: 1rem;
  color : black;
  font-family: Century Gothic;
  font-size: bold;
}
.profile-img {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
}
body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100; /* Behind the navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}
.sidebarContent {
  display: flex; 
  font-size: 15px;
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 600;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nav-link.active {
  color: #2470dc;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */
.nav-item {
  margin: 10px;
}

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .navbar-toggler {
  top: .25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}
.icon {
    width: 3rem;
    stroke: #80bfff;
}

.item {
    position: relative;
    float: left;
}

.item h2 {
    text-align:center;
    position: absolute;
    line-height: 125px;
    width: 100%;
}

svg {
   -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
}

.circle_animation {
  stroke-dasharray: 440; /* this value is the pixel circumference of the circle */
  stroke-dashoffset: 440;
}

.html .circle_animation {
    -webkit-animation: html 1s ease-out forwards;
    animation: html 1s ease-out forwards;
}

.css .circle_animation {
    -webkit-animation: css 1s ease-out forwards;
    animation: css 1s ease-out forwards;
}

@-webkit-keyframes html {
  to {
    stroke-dashoffset: 80; /* 50% would be 220 (half the initial value specified above) */
  }
}

@keyframes html {
  to {
    stroke-dashoffset: 80;
  }
}

@-webkit-keyframes css {
  to {
    stroke-dashoffset: 160;
  }
}

@keyframes css {
  to {
    stroke-dashoffset: 160;
  }
}
</style>