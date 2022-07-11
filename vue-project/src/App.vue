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
      cnt: 0,
    };
  },
  methods: {
    addTodo(todoItem) {
      this.todoItems.push({
        key: this.cnt++,
        value: todoItem,
      });
    },
    clearTodo() {
      this.todoItems.splice(0);
    },
    removeTodo(key) {
      this.todoItems.forEach((item, idx) => {
        if (item.key === key) {
          this.todoItems.splice(idx, 1);
        }
      });
      // this.todoItems.splice(idx, 1);
    },
    changeValue() {
      const json = JSON.stringify(this.todoItems);
      localStorage.setItem("data-todoItems", json);
      localStorage.setItem("cnt", this.cnt);
    },
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  created() {
    const json = localStorage.getItem("data-todoItems");
    if (json) {
      const todoItems = JSON.parse(json);
      todoItems.forEach((item) => {
        this.todoItems.push(item);
      });
      const cnt = localStorage.getItem("cnt");
      //새로고침 했을때 마지막 cnt값에서 시작할 수 있또록
      this.cnt = cnt;
    }
  },
  watch: {
    todoItems: {
      deep: true,
      // deep 은 주소값 안의 값이 바뀌는걸 감지
      handler() {
        this.changeValue();
      },
    },
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
