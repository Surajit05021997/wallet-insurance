<template>
  <div class="buy-plans">
    <div class="container">
      <p class="des">Enter your details</p>
      <div class="box">
        <form>
          <div class="field-box">
            <label>Name</label>
            <input type="text">
            <label>Mobile Number</label>
            <input type="text">
            <label>Email</label>
            <input type="email">
          </div>
          <button class="btn">Continue to payment</button>
        </form>
        <div class="summery-display">
          <p>
            <strong>Plan:</strong> <span>{{$route.params.type}}</span>
          </p>
          <p v-if="$route.params.type === 'gold'">
            <strong>Cost:</strong> 1999
          </p>
          <p v-if="$route.params.type === 'silver'">
            <strong>Cost:</strong> 1499
          </p>
          <p v-if="$route.params.type === 'bronze'">
            <strong>Cost:</strong> 1199
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyPlans',
}
</script>

<style scoped>
.buy-plans {
  padding: 2rem;
}
.container {
  max-width: 120rem;
  margin: 0 auto;
}
.des {
  font-size: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
}
.box {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 3rem;
  align-items: start;
}
label {
  font-size: 2rem;
}
.field-box {
  padding: 2rem;
  box-shadow: 0 0 10px 0 #ddd;
  border-radius: 5px;
  margin-bottom: 3rem;
  display:grid;
  grid-template-columns: 100%;
  row-gap: 2rem;
}
input {
  font-size: 30px;
}
.btn {
    background-color: #80bfff;
    padding: 1rem 2rem;
    margin: 2rem;
    margin-left: 0;
    text-decoration: none;
    border-style: none;
    border-radius: 20rem;
    font-size: 2rem;
    color: #fff;
  }
  .btn:hover {
    cursor: pointer;
    background-color: #007fff;
  }
  .summery-display {
    box-shadow: 0 0 10px 0 #ddd;
    padding: 2rem;
  }
  .summery-display p {
    font-size: 2rem;
  }
  .summery-display p span {
    text-transform: capitalize;
  }
</style>