<template>
  <div class="home-page">
    <section class="intro">
      <h1>Wonders through a microscope!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/main-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  text-align: center;
  top: 15%;
  left: 10%;
  width: 80%;
  font-size: 3em;
  font-weight: bolder;
  color: rgb(0, 23, 55);
  padding: 30px;
  border-radius: 3px;
  box-sizing: border-box;
  /* border: 1px solid azure;
  background-color: azure; */
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2.5em;
  }
}
</style>
