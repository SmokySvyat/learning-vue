<template>
  <div class="container">
    <div class="counters">
      <p class="counters__elem">Рейтинг: <span class="counter">{{ rating }}</span></p>
      <p class="counters__elem">Количество лайков: <span class="counter">{{ likes }}</span></p>
      <p class="counters__elem">Количество дизлайков: <span class="counter">{{ dislikes }}</span></p>
    </div>
    <div class="btns-container">
      <button class="btn" @click="addLike">Like</button>
      <button class="btn" @click="addDislike">Dislike</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        likes: 0,
        dislikes: 0,
        rating: 0
      }
    },
    methods: {
      addLike() {
        this.likes += 1;
        this.handleRating();
      },
      addDislike() {
        this.dislikes +=1;
        this.handleRating();
      },
      handleRating() {
        this.rating = this.likes - this.dislikes;
      }
    }
  }
</script>

<style>
.app {
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 400;
  font-size: 1.3em;
  text-rendering: optimizeLegibility;

}

.container {
  display: flex;
  flex-direction: column;
  align-items: end;

  box-sizing: border-box;
  width: fit-content;
  height: fit-content;

  border: 1px solid #000;
  border-radius: 5px;
  padding: 15px 15px;

  background-color: #fff;
}

.counters__elem {
  margin: 0 0 20px 0;
}

.btn {
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px 10px;

  margin-right: 10px;
  cursor: pointer;
  opacity: 1;
  transition: all ease-in-out 0.3s;
}

.btn:hover {
  opacity: 0.7;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  transition: all ease-in-out 0.3s;
}

.counter {
  font-weight: 800;
}
</style>
