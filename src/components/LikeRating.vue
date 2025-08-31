<template>
  <div class="rating">
      <button class="btn rating__btn" @click="addLike">Like</button>

      <p class="counters__elem">{{ rating }}</p>
      
      <button class="btn rating__btn" @click="addDislike">Dislike</button>
      
      <p class="counters__elem" style="color:green">{{ likes }}</p>
      <p class="counters__elem" style="color: red">{{ dislikes }}</p>
  </div>
</template>

<script>
  export default {
    name: 'like-rating',
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

<style scoped>
.rating {
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  margin-right: 5px;
  font-size: 0.9em;
}

.rating__btn {
  width: 75px;
  margin: 5px 0;
  align-self: center;
}

.rating__btn:hover {
  background-color: rgba(165, 42, 42, 0.3);
}

.counters__elem {
  width: 95px;
  margin: 5px 0;
  text-align: center;
  /* justify-items: center; */
  font-size: 1.2em;
  font-weight: 600;
  /* font-size: 0.8em; */
}
.counters__elem:nth-of-type(2n)::before {
  display: inline-block;
  position: relative;
  margin-right: 7px;
  width: 22px;
  height: 22px;
  background-image: url(../img/like.svg);
  background-size: cover;
  background-position: center;
  content: ' ';
}
.counters__elem:nth-of-type(3n)::before {
  display: inline-block;
  position: relative;
  margin-right: 7px;
  width: 22px;
  height: 22px;
  background-image: url(../img/dislike.svg);
  background-size: cover;
  content: ' ';
}

.counter {
  font-weight: 800;
}
</style>