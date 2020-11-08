<template>
  <div class="admin-post-page">
    <section class="update-form">
      <PostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import PostForm from "@/components/Admin/PostForm";
export default {
  layout: "admin",
  components: {
    PostForm,
  },
  data() {
    return {
      loadedPost: {
        author: "Ez",
        title: "Cells from a plant leave",
        content: "I took a look at the leave of my house plant...",
        thumbnailLink:
          "https://i.pinimg.com/originals/de/61/a5/de61a54fd44a6c3a5c2fbf5e2744dc93.png",
      },
    };
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