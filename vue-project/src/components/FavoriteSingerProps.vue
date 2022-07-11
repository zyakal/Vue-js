<template>
  <img class="imgSize" v-bind:src="imgSrc" />
</template>

<script>
export default {
  props: {
    imgSrc: String,
  },
};
</script>

// scoped 는 이 파일에서만 먹히도록 하는것
<style scoped>
.imgSize {
  width: 200px;
}
</style>
