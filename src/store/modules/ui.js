import * as types from '../mutation-types'

export default {
  namespaced: true,
  state: {
    language: 'fr-fr',
    locale: navigator.language || 'fr-fr',
    nightMode: false,
    priceChart: true,
    priceChartPeriod: 'day',
    headerType: null,
    menuVisible: false
  },
  mutations: {
    [types.SET_UI_LANGUAGE](state, payload) {
      state.language = payload.value
    },
    [types.SET_UI_LOCALE](state, payload) {
      state.locale = payload.value
    },
    [types.SET_UI_NIGHT_MODE](state, payload) {
      state.nightMode = payload.value
    },
    [types.SET_UI_HEADER_TYPE](state, payload) {
      state.headerType = payload.value
    },
    [types.SET_UI_MENU_VISIBLE](state, payload) {
      state.menuVisible = payload.value
    },
    [types.SET_UI_PRICE_CHART](state, payload) {
      state.priceChart = payload.value
    },
    [types.SET_UI_PRICE_CHART_PERIOD](state, payload) {
      state.priceChartPeriod = payload.value
    },
  },
  actions: {
    setLanguage: ({ commit }, value) => {
      localStorage.setItem('language', value)

      commit({
        type: types.SET_UI_LANGUAGE,
        value,
      })
    },
    setLocale: ({ commit }, value) => {
      localStorage.setItem('locale', value)

      commit({
        type: types.SET_UI_LOCALE,
        value,
      })
    },
    setNightMode: ({ commit }, value) => {
      localStorage.setItem('nightMode', value)

      value = JSON.parse(value)

      commit({
        type: types.SET_UI_NIGHT_MODE,
        value,
      })
    },
    setHeaderType: ({ commit }, value) => {
      commit({
        type: types.SET_UI_MENU_VISIBLE,
        value: null,
      })

      commit({
        type: types.SET_UI_HEADER_TYPE,
        value,
      })
    },
    setMenuVisible: ({ commit }, value) => {
      commit({
        type: types.SET_UI_HEADER_TYPE,
        value: null,
      })

      commit({
        type: types.SET_UI_MENU_VISIBLE,
        value,
      })
    },
    setPriceChart: ({ commit }, value) => {
      localStorage.setItem('priceChart', value)

      commit({
        type: types.SET_UI_PRICE_CHART,
        value: JSON.parse(value),
      })
    },
    setPriceChartPeriod: ({ commit }, value) => {
      localStorage.setItem('priceChartPeriod', value)

      commit({
        type: types.SET_UI_PRICE_CHART_PERIOD,
        value,
      })
    },
  },
  getters: {
    language: state => state.language,
    locale: state => state.locale,
    nightMode: state => state.nightMode,
    priceChart: state => state.priceChart,
    priceChartPeriod: state => state.priceChartPeriod,
    headerType: state => state.headerType,
    menuVisible: state => state.menuVisible,
  },
}
