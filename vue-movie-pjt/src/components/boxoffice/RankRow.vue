<template>
  <tr>
    <td>{{ item.rank }}</td>
    <td>{{ item.movieNm }}</td>
    <td>{{ item.openDt }}</td>
    <td>{{ getAudiAcc }}</td>
    <td>{{ getSalesAcc }}</td>
  </tr>
</template>

<script>
export default {
  data() {
    return {
      movieCd: this.item.movieCd,
      modalShow: false,
    };
  },
  props: {
    item: Object,
  },
  computed: {
    getAudiAcc() {
      return this.numberComma(this.item.audiAcc);
    },
    getSalesAcc() {
      return this.numberComma(this.item.salesAcc);
    },
  },
  methods: {
    data() {
      details: {
      }
    },
    numberComma(num) {
      return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style></style>
