<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @childAddTodo="addTodo"></TodoInput>
    <TodoList :propsItems="todoItems" @childRemoveTodo="removeTodo"></TodoList>
    <TodoFooter @clearList="clearTodo"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/todo/TodoHeader.vue";
import TodoInput from "./components/todo/TodoInput.vue";
import TodoList from "./components/todo/TodoList.vue";
import TodoFooter from "./components/todo/TodoFooter.vue";
export default {
  name: "App",
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    clearTodo() {
      localStorage.clear();
      this.todoItems.splice(0);
    },
    removeTodo(todoItem, idx) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(idx, 1);
    },
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
