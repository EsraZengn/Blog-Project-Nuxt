<template>
  <div class="admin-post-page">
    <section class="update-form">
      <PostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
export default {
  layout: "admin",

  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch("editPost", editedPost).then(() => {
        this.$router.push("/admin");
      });
    },
  },
  asyncData(context) {
    return context.app.$axios
      .$get(`/posts/${context.params.postId}.json`)
      .then((data) => {
        return {
          loadedPost: { ...data, id: context.params.postId },
        };
      })
      .catch((e) => context.error(e));
  },
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>