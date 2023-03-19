<template>
  <div class="counter">
    <div class="count-display">
      <h2>{{ count }}</h2>
    </div>
    <div class="button-container">
      <button class="increment-button" @click="increment">
        <i class="fas fa-plus"></i>
      </button>
      <button class="decrement-button" @click="decrement">
        <i class="fas fa-minus"></i>
      </button>
      <button class="reset-button" @click="reset">
        <i class="fas fa-redo"></i>
      </button>
    </div>
    <div class="input-container">
      <input class="count-input" type="number" v-model="value" />
      <button class="set-button" @click="setValue">
        <i class="fas fa-check"></i>
      </button>
    </div>
  </div>
</template>
  
  <script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["count"]),
    value: {
      get() {
        return this.count;
      },
      set(newValue) {
        this.setValue(parseInt(newValue, 10));
      },
    },
  },
  methods: {
    ...mapActions(["increment", "decrement", "reset", "setValue"]),
  },
};
</script>
  
  <style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.count-display {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.count-display h2 {
  font-size: 100px;
  color: #2f80ed;
  margin: 0;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.increment-button,
.decrement-button,
.reset-button {
  background-color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: 0 20px;
  font-size: 32px;
  color: #2f80ed;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.increment-button:hover,
.decrement-button:hover,
.reset-button:hover {
  background-color: #f3f3f3;
  transform: scale(1.1);
}

.increment-button:focus,
.decrement-button:focus,
.reset-button:focus {
  outline: none;
}

.reset-button {
  color: #ff4d4d;
}

.reset-button:hover {
  background-color: #ffe5e5;
  transform: scale(1.1);
}

.reset-button:focus {
  outline: none;
}

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.count-input {
  width: 100px;
  height: 50px;
  font-size: 24px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin-right: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.set-button {
  background-color: #2f80ed;
  border: none;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  color: #ffffff;
  font-size: 24px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.set-button:hover {
  background-color: #1f65c4;
  transform: scale(1.1);
}

.set-button:focus {
  outline: none;
}
</style>