<template>
  <section
    class="section section_posts"
  >
    <h2 class="section__title">Posts list</h2>
    <div v-if="posts.length > 0">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </div>

    <h3
      class="message__title"
      v-else-if="isLoading"
    >
      Loading posts
    </h3>
  
    <h3
      class="message__title"
      v-else
    >
      Posts list is empty
    </h3>
  </section>
</template>

<script>
export default {
  name: 'post-list',
  props: {
    posts: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style>
.section {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-top: 2px solid rgba(165, 42, 42, 0.3);
  border-right: 2px solid rgba(165, 42, 42, 0.3);
  box-shadow: 18px -2px 20px 1px;
  padding-right: 60px;
  padding-bottom: 20px;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  margin-top: 20px;
}

.section__title {
  margin: 30px 0 25px 0;
  font-family: serif;
  font-size: 1.5em;
  font-weight: 800;
  letter-spacing: 1px;
}
</style>