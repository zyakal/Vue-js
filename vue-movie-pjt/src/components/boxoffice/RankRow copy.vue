<template>
  <tr>
    <td>{{ item.rank }}</td>
    <td @click="[showModal(), click()]">{{ item.movieNm }}</td>
    <td>{{ item.openDt }}</td>
    <td>{{ getAudiAcc }}</td>
    <td>{{ getSalesAcc }}</td>
  </tr>
  <AlertModal
    :show="modalShow"
    header="알림창"
    body="body"
    @close="hiddenModal"
  ></AlertModal>
</template>

<script>
import AlertModal from "../AlertModal.vue";
export default {
  data() {
    return {
      movieCd: this.item.movieCd,
      modalShow: false,
    };
  },
  components: {
    AlertModal,
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
    click() {
      const movieCd = this.item.movieCd;
      console.log(movieCd);
      return this.getData(movieCd);
    },
    async getData(movieCd) {
      const data = await this.getDetail(movieCd);
      this.details = data.movieInfoResult.movieInfo;
      return this.details;
    },
    showModal() {
      this.modalShow = true;
    },
    hiddenModal() {
      this.modalShow = false;
    },
  },
};
</script>

<style></style>
