<template>
  <section>
    <ul>
      <!-- :key="키이름" -->
      <li
        :key="todoItem" 
        v-for="(todoItem, index) in propsItems"
        class="shadow"
      >
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        {{ todoItem }}
        <span
          class="removeBtn"
          type="button"
          @click="removeTodo(todoItem, index)"
        >
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
  </section>
</template>
//life cycle?
<script>
export default {
  // 타입까지 정확히 주려면 객체로 props: { todoList: Array} 이렇게 적어야함
  // 아니면 그냥 배열로 값만?
  props: { propsItems: Array },
  methods: {
    removeTodo(todoItem, index) {
      // props.propsItems[todoItem];
      this.$emit("childRemoveTodo", todoItem, index);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background-color: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 50px;
  color: #62acde;
  margin-right: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
