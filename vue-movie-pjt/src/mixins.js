import axios from "axios";

export default {
  data() {
    return {
      key: "7c1945e6a2e4315aca49f499c763477e",
      baseUrl: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/",
      boxOfficeByDay: "boxoffice/searchDailyBoxOfficeList.json",
      boxOfficeByWeek: "boxoffice/searchWeeklyBoxOfficeList.json",
      boxOfficeDetail: "movie/searchMovieInfo.json",
    };
  },
  methods: {
    async $api(url, parameter) {
      return (
        await axios
          .get(url, {
            params: parameter,
          })
          .catch((e) => {
            console.log(e);
          })
      ).data;
    },
    async getBoxOfficeByDay(targetDt) {
      const parameter = {
        key: this.key,
        targetDt,
      };
      const url = this.baseUrl + this.boxOfficeByDay;
      return await this.$api(url, parameter);
    },
    getOnlyDateStr(date) {
      return date.toISOString().split("T")[0];
    },
    async getBoxOfficeByWeek(targetDt) {
      const parameter = {
        key: this.key,
        targetDt,
        weekGb: 0,
      };
      const url = this.baseUrl + this.boxOfficeByWeek;
      return await this.$api(url, parameter);
    },
    async getDetail(movieCd) {
      const parameter = {
        key: this.key,
        movieCd,
      };
      const url = this.baseUrl + this.boxOfficeDetail;
      return await this.$api(url, parameter);
    },
  },
};

