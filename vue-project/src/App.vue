<template>
  <div id="App">
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/todo/TodoHeader.vue";
import TodoInput from "./components/todo/TodoInput.vue";
import TodoList from "./components/todo/TodoList.vue";
import TodoFooter from "./components/todo/TodoFooter.vue";
export default {
  name: "App",
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
};
</script>

<style></style>
