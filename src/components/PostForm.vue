<template>
  <form class="form" @submit.prevent @click.stop>
    <h4 class="form__title">Create post</h4>
    <custom-input
      v-model="post.title"
      class="form__input"
      placeholder="Title"
    />
    <custom-input
      v-model="post.body"
      class="form__input"
      placeholder="Description"
    />
    <custom-btn
      class="btn form__btn"
      @click="createPost"
    >
      Create
  </custom-btn>
  </form>
</template>

<script>
export default {
  name: 'post-form',
  data() {
    return {
      post: {
        title: '',
        body: '',
        likes: 0,
        dislikes: 0,
        rating: 0
      }
    }
  }, methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
        likes: 0,
        dislikes: 0,
        rating: 0
      }
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: auto;
  padding: 40px;
  padding-bottom: 30px;
  background-color: #fff;
  border: 2px solid rgba(165, 42, 42, 0.5);
  border-radius: 15px;
}

.form__title {
  margin: 0 0 30px 0;
  font-size: 1.2em;
  font-weight: 600;
}

.form__input {
  min-width: 20vw;
  border: 1px solid rgba(165, 42, 42, 0.5);
}

.form__btn {
  min-width: 5vw;
  min-height: 4vh;
  margin: 10px 0 0 0;
  border: 2px solid rgba(165, 42, 42, 0.6);
}

.form__btn:hover {
  background-color: rgba(165, 42, 42, 0.4);
}
</style>
