import { createStore } from "vuex";

export default createStore({
  state: {
    isSlideSelection: false,
    dashboardsInSlideshow: [],
    intervalsBetweenSlides: 2000,
    slideshowInProgress: false,
    currentSlide: 0,
  },
  mutations: {
    toggleSlideSelection(state, payload) {
      state.isSlideSelection = payload;
      console.log(state.isSlideSelection);
    },
    addDashboardToSlideshow(state, payload) {
      state.dashboardsInSlideshow.push(payload);
    },
    removeDashboardFromSlideshow(state, payload) {
      let index = state.dashboardsInSlideshow.findIndex(
        (item) => item.id === payload
      );
      state.dashboardsInSlideshow.splice(index, 1);
    },
    resetDashboardSlideshow(state) {
      state.dashboardsInSlideshow = [];
    },
    setIntervalsBetweenSlides(state, payload) {
      state.intervalsBetweenSlides = payload;
    },
    toggleSlideshowInProgress(state, payload) {
      state.slideshowInProgress = payload;
    },
    setSideshowInterval(state, payload) {
      state.slideshowInterval = payload;
    },
    incrementSlide(state) {
      if (state.currentSlide + 1 < state.dashboardsInSlideshow.length) {
        state.currentSlide++;
      } else {
        state.currentSlide = 0;
      }
    },
    resetCurrentSlide(state) {
        state.currentSlide = 0
    }
  },
  getters: {},
});
