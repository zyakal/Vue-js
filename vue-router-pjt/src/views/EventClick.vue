<template>
  <div>
    <div>
      <h1>EventClick</h1>
      <button
        type="button"
        @click="
          increaseCnt();
          printConsole();
        "
      >
        Add 1
      </button>
      <p>The count is : {{ cnt }}</p>
    </div>
    <div>
      {{ selectedValue }}
      <select v-model="selectedValue" @change="changeSelect">
        <option>서울</option>
        <option>부산</option>
        <option>제주</option>
      </select>
    </div>
    <div>
      {{ txtVal }}
      <!-- <input type="txtVal" v-model="txtVal" @change="changeTxtVal" /> -->
      <input
        type="txtVal"
        v-model="txtVal"
        @keyup="changeTxtVal"
        @keyup.enter="enterTxtVal"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: "",
      cnt: 0,
      txtVal: "",
    };
  },
  methods: {
    increaseCnt() {
      this.cnt++;
    },
    printConsole() {
      console.log(this.cnt);
    },
    changeSelect() {
      alert(this.selectedValue);
    },
    changeTxtVal() {
      console.log(this.txtVal);
    },
    enterTxtVal() {
      console.log("Enter");
    },
  },
};
</script>

<style></style>
