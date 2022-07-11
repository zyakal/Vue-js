<template>
  <img class="imgSize" v-bind:src="imgSrc" />
</template>

<script>
export default {
  data() {
    return {
      imgSrc:
        "http://image.newsis.com/2022/05/16/NISI20220516_0000997498_web.jpg",
    };
  },
};
</script>

<style scoped>
.imgSize {
  width: 200px;
}
</style>
