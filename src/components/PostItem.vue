<template>
  <article class="post-container">
    <div class="post">
      <p class="post__title">{{ post.title }}</p>
      <p class="post__body">{{ post.body }}</p>
    </div>

    <div class="controls">
      <custom-btn
        @click="$emit('remove', post)"
        class="controls__delete"
      >
        Delete
      </custom-btn>
    </div>
  </article>
</template>

<script>
export default {
  name:  'post-item',
  props: {
    post: {
        type: Object,
        required: true
    }
  }
}
</script>

<style scoped>
.post-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 2px solid rgba(165, 42, 42, 0.5);
  border-radius: 15px;
  height: fit-content;
  width: 100%;
  padding: 20px;
  margin: 10px 0;
}

.post {
  display: flex;
  flex-direction: column;
}

.post__title {
  margin: 0 0 15px 0;
  font-weight: 600;
  font-size: 1.1em;
}

.post__body {
  margin: 0;
  width: fit-content;
  font-size: 1em;
  font-weight: 500;
}

.controls {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    align-content: space-between;
}

.controls__delete {
    border: 2px solid rgba(255, 0, 0, 0.3);
}
.controls__delete:hover {
    background-color: rgba(255, 0, 0, 0.3);
    transition: all ease-in-out 0.3s;
}
</style>

