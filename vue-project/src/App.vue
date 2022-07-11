<template>
  <h1>헬로우</h1>
  <div>{{ hello }}</div>
  <div>{{ hello }}</div>
  <div>{{ hello }}</div>
  <div>{{ hello }}</div>
  <input type="text" v-model="hello" />
  <button @click="changeHello">안녕하세요 변경</button>
  <favorite-singer></favorite-singer>
  <favorite-singer-props
    imgSrc="https://www.queen.co.kr/news/photo/202108/365673_104070_2232.jpg"
  ></favorite-singer-props>
</template>

<script>
import FavoriteSinger from "./components/FavoriteSinger.vue";
import FavoriteSingerProps from "./components/FavoriteSingerProps.vue";
export default {
  name: "App",
  data() {
    return {
      hello: "안녕",
    };
  },
  methods: {
    changeHello() {
      this.hello = "안녕하세요";
    },
  },
  components: {
    FavoriteSinger,
    FavoriteSingerProps,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
