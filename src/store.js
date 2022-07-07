import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  colleagues: [
    { name: 'Joseph', age: 26 },
    { name: 'Daniel', age: 38 },
    { name: 'Josua', age: 50 },
    { name: 'Yuri', age: 42 },
    { name: 'Rose', age: 25 },
    { name: 'Maria', age: 29 },
    { name: 'Mark', age: 40 },
    { name: 'Pauline', age: 38 },
    { name: 'Jasmine', age: 38 },
    { name: 'Angel', age: 39 },
    { name: 'Jad', age: 29 }
  ],
  list2: []
};

const mutations = {
  add_to_list2(state, payload) {
    state.list2.push(payload);
  },
  searchRemove(state, payload) {
    let index;
    state.colleagues.map(a => {
      if (a.name == payload.name && a.age == payload.age) {
        index = state.colleagues.indexOf(a);
        state.colleagues.splice(index, 1);
      }
    });
  }
};

const actions = {
  addToList2(context, user) {
    return new Promise((resolve, reject) => {
      let isInList = false;
      context.state.list2.map(a => {
        if (a.name == user.name && a.age == user.age) { reject('User already in list'); isInList = true; }
      });
      if (!isInList) {
        context.commit("add_to_list2", user);
        resolve();
      }
    })
  },
  searchRemove(context, user) {
    context.commit("searchRemove", user);
  }
};

const getters = {
  getColleagues(state) {
    return state.colleagues;
  },
  getList2(state) {
    return state.list2;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
