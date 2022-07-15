<template>
  <div>
    <p>Count2 : {{ count }}</p>
    <button type="button" @click="incrementFc">증가</button>
    <!-- @click = "여기는 methods의 함수명이 들어감" -->
  </div>
</template>

<script>
export default {
    computed: {
        count(){
            return this.$store.state.count
        }
    },
    methods: {
        incrementFc(){
            this.$store.commit('increment'); // store에 있는 index.js 의 increment 함수와 연결
                                            // 즉, 문자열 명은 해당 파일의 mutations 함수명이 됨
        }
    },
    
}
</script>

<style>

</style>