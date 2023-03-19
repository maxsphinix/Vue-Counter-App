<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/counter">Counter</router-link>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p>&copy; 2023 My Counter App</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
}

header {
  background-color: #2f80ed;
  padding: 20px;
  color: #ffffff;
}

header a {
  color: #ffffff;
  text-decoration: none;
  font-size: 20px;
  margin-right: 20px;
}

header a:hover {
  text-decoration: none;
  color: #aec6e4;
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  background-color: #222222;
  color: #ffffff;
  padding: 10px;
  text-align: center;
  margin-top: 10px;
}
</style>
