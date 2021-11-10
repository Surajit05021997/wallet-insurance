<template>
  <div class="container">
    <div>
      <div class="option" @click="toggle(1)">
        <p>Credit or Debit Card</p>
        <div :class= "visible_1? 'viisible':'not-visible'">
          Details
        </div>
      </div>
    </div>
    <div>
      <div class="option" @click="toggle(2)">
        <p>UPI</p>
        <div :class= "visible_2? 'viisible':'not-visible'">Details</div>
      </div>
      
    </div>
    <div>
      <div class="option" @click="toggle(3)">
        <p>Net Banking</p>
        <div :class= "visible_3? 'viisible':'not-visible'">Details</div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible_1: false,
      visible_2: false,
      visible_3: false,
    }
  },
  methods: {
    toggle(option) {
      if(option === 1) {
        this.visible_1 = !this.visible_1;
        this.visible_2 = false;
        this.visible_3 = false;
      }
      else if(option === 2) {
        this.visible_2 = !this.visible_2;
        this.visible_1 = false;
        this.visible_3 = false;
      }
      else {
        this.visible_3 = !this.visible_3;
        this.visible_1 = false;
        this.visible_2 = false;
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 120rem;
  margin: 5rem auto;
  padding: 0 2rem;
}
.option {
  border: 1px solid #aaa;
  border-radius: 10px;
  font-size: 2rem;
  margin-bottom: 1rem;
  padding: 1rem 2rem;
}
.option:hover {
  cursor: pointer;
}
.not-visible {
  display: none;
}
</style>