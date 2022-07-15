import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      count: 0,
      cart: [
        {
          product_id:1,
          product_name: '아이폰 거치대',
          category: 'A'
        }
      ],
    };
  },
  getters: {
    cartCount: (state) => {
      return state.cart.length;
    }
  },
  mutations:{
    increment(state){
      state.count++;
    },
    setCount(state, val){
      state.count= val;
    }
  },
  actions: {},
  modules: {},
});
