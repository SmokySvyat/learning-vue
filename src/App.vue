<template>
  <custom-btn @click="showPopup">Create post</custom-btn>
  <post-list
    :posts="posts"
    :isLoading="isLoading"
    @like="handleLike"
    @dislike="handleDislike"
    @remove="removePost"
  />
  <!-- :posts='posts' это сокращенная запись v-bind:posts='posts' -->
  <!-- @create='' подписываемся на созданное событие PostForm, что бы принять сгенерированный пост -->
  <popup-form v-model:isVisible="isVisible">
    <post-form
    @create='createPost'
    />
  </popup-form>
</template>

<script>
import axios from 'axios';
  export default {

    data() {
      return {
        posts: [],
        likes: 0,
        dislikes: 0,
        rating: 0,
        isVisible: false,
        isLoading: false,
      }
    },
    methods: {
      createPost(post) {
        this.posts.push(post);
        this.isVisible = false;
      },
      removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id);
      },
      showPopup() {
        this.isVisible = true;
      },
      async getPosts() {
        try {
          this.isLoading = true;
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          res.data.forEach(post => {
            post.likes = this.likes;
            post.dislikes = this.dislikes;
            post.rating = this.rating;
          });
          this.posts = res.data;
        } catch (error) {
          alert(error);
        } finally {
          this.isLoading = false;
        }
      },
      handleLike(post) {
        post.likes += 1;
        this.handleRating(post);
      },
      handleDislike(post) {
        post.dislikes +=1;
        this.handleRating(post);
      },
      handleRating(post) {
        post.rating = post.likes - post.dislikes;
      }
    },
    mounted() {
      this.getPosts();
    }
  }
</script>

<style>
.app {
  box-sizing: border-box;
  background-color: rgba(255, 248, 220, 0.5);
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  align-content: center;

  font-family: 'Arial Narrow Bold', sans-serif;
  text-rendering: optimizeLegibility;
}
</style>
