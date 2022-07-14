<template>
  <table>
    <thead>
      <tr>
        <th>순위</th>
        <th>제목</th>
        <th>개봉일</th>
        <th>누적관객수</th>
        <th>누적매출액</th>
      </tr>
    </thead>
    <tbody>
      <rank-row
        v-for="item in list"
        :key="item.movieCd"
        :item="item"
        @click="detail"
      />

      <!-- <tr v-for="item in list" :key="item.movieCd"">
        <td>{{ item.rank }}</td>
        <td>{{ item.movieNm }}</td>
        <td>{{ item.openDt }}</td>
        <td>{{ numberComma(item.audiAcc) }}</td>
        <td>{{ numberComma(item.salesAcc) }}</td>
      </tr> -->
    </tbody>
  </table>
</template>

<script>
import RankRow from "./RankRow.vue";
export default {
  components: { RankRow },

  props: {
    list: Array,
  },
  methods: {
    detail(e) {
      console.log(e);
    },
  },
};
</script>

<style></style>
