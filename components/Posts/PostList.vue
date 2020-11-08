<template>
  <section class="post-list">
    <PostPreview
      :is-admin="isAdmin"
      id="1"
      title="First microscope image"
      previewText="Here is my first post!"
      thumbnail="https://ichef.bbci.co.uk/images/ic/320xn/p023r74v.jpg"
    />
    <PostPreview
      :is-admin="isAdmin"
      id="2"
      title="Second microscope image"
      previewText="Here is my second post!"
      thumbnail="https://previews.123rf.com/images/watiporn/watiporn1807/watiporn180700004/110661225-science-plant-cells-by-light-microscope.jpg"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  name: "PostList",
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>