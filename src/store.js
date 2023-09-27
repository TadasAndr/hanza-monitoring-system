import { createStore } from 'vuex';

export default createStore({
  state: {
    isSlideSelection: false,
    dashboardsInSlideshow: [],
  },
  mutations: {
    toggleSlideSelection(state, payload) {
        state.isSlideSelection = payload
        console.log(state.isSlideSelection)
    },
    addDashboardToSlideshow(state, payload) {
        state.dashboardsInSlideshow.push(payload)
    },
    removeDashboardFromSlideshow(state, payload) {
        let index = state.dashboardsInSlideshow.findIndex(item => item.id === payload);
        state.dashboardsInSlideshow.splice(index, 1)
    },
    resetDashboardSlideshow(state) {
        state.dashboardsInSlideshow = []
    }
  },
  getters: {
  },
});