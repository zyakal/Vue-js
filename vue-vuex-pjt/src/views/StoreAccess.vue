<template>
  <div>
    <p>Count : {{ count }}</p>
    <button type="button" @click="incrementFc">증가</button>
    <p>카트 상품 수 : {{cartCount}}</p>
    <!-- @click = "여기는 methods의 함수명이 들어감" -->
  </div>
</template>

<script>
export default {
    computed: {
        count(){
            return this.$store.state.count
        },
        cartCount(){
            return this.$store.getters.cartCount;
        }
    },
    methods: {
        incrementFc(){
            // this.$store.state.count = 1000; 값에 바로 접근이 가능하네?
            // this.$store.commit('increment'); 
            // store에 있는 index.js 의 increment 함수와 연결
            // 즉, 문자열 명은 해당 파일의 mutations 함수명이 됨
            this.$store.commit('setCount',1000);
        }
    },
    
}
</script>

<style>

</style>