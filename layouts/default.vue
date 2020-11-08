<template>
  <div>
    <Header @sidenav-toggle="displaySidenav = !displaySidenav" />
    <Sidenav :show="displaySidenav" @close="displaySidenav = false" />
    <nuxt />
  </div>
</template>

<script>
import Header from "@/components/Navigation/Header";
import Sidenav from "@/components/Navigation/SideNav";

export default {
  components: {
    Header,
    Sidenav,
  },
  data() {
    return {
      displaySidenav: false,
    };
  },
};
</script>


<style>
html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
