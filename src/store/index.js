import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
Vue.use(axios);

export default new Vuex.Store({
  state: {
    masterData: [],
  },
  mutations: {
    addMasterData(state, masterData) {
      var bigArray = []; // 1行ずつを格納する配列
      bigArray = masterData.data.split("\r\n"); // 1行ごとに分割して配列に格納
      bigArray.splice(0, 1); // 項目名の行を削除
      var masterDataArray = []; // 必要なデータだけを格納する配列
      for (var i = 0; i < bigArray.length; i++) {
        var miniArray = bigArray[i].split(","); // 1行の各項目を配列に格納
        var status = // ステータス：死亡のフォーマット
          miniArray[17].indexOf("死亡") != -1 ? "死亡" : miniArray[17];
        var rowData = {
          // 必要な行だけ切り取って連想配列にする
          age: miniArray[5], // 年代
          gender: miniArray[6], //性別
          date: miniArray[7], // 確定日
          residence: miniArray[10], // 居住都道府県
          status: status, // ステータス('退院' or '死亡' or '')
        };
        masterDataArray.push(rowData); // 加工した1行分のデータを配列に追加
      }
      state.masterData = masterDataArray; // 加工したデータ配列でstateを上書き
    },
  },
  actions: {
    async fetchMasterData(context) {
      await axios
        .get("https://dl.dropboxusercontent.com/s/6mztoeb6xf78g5w/COVID-19.csv")
        .then((response) => context.commit("addMasterData", response))
        .catch((e) => {
          alert(e);
        });
    },
  },
  modules: {},
});
