<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <input type="date" v-model="selectedDate" />
      <button @click="search">검색</button>
    </div>
    <rank-table :list="list" />
  </div>
</template>

<script>
import RankTable from "../components/boxoffice/RankTable";

export default {
  components: {
    RankTable,
  },
  data() {
    return {
      title: "",
      selectedDate: "",
      list: [],
      routeName: "",
    };
  },
  methods: {
    search() {
      const targetDt = this.selectedDate.replaceAll("-", "");
      this.getData(targetDt);
    },
    async getData(targetDt) {
      switch (this.routeName) {
        case "boxOfficeByDay":
          this.list = (
            await this.getBoxOfficeByDay(targetDt)
          ).boxOfficeResult.dailyBoxOfficeList;
          break;
        case "boxOfficeByWeek":
          this.list = (
            await this.getBoxOfficeByWeek(targetDt)
          ).boxOfficeResult.weeklyBoxOfficeList;
          break;
      }
    },
  },
  created() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    this.selectedDate = this.getOnlyDateStr(d);
    this.routeName = this.$route.name;

    switch (this.routeName) {
      case "boxOfficeByDay":
        this.title = "일별 박스오피스";
        break;
      case "boxOfficeByWeek":
        this.title = "주간 박스오피스";
        break;
    }
  },
  updated() {
    this.routeName = this.$route.name;

    switch (this.routeName) {
      case "boxOfficeByDay":
        this.title = "일별 박스오피스";
        break;
      case "boxOfficeByWeek":
        this.title = "주간 박스오피스";
        break;
    }
  },
};
</script>

<style></style>
