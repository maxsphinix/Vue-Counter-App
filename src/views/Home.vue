<template>
  <div class="home">
    <h1>Welcome to My App!</h1>
    <p>Check out my Counter</p>
    <button class="btn" @click="goToCounter">Go to Counter Page</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goToCounter() {
      this.$router.push({ name: "Counter" });
    },
  },
};
</script>


<style scoped>
.home {
  margin: 20px;
  font-size: 24px;
  text-align: center;
}

.btn {
  background-color: #2f80ed;
  border: none;
  border-radius: 20px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
