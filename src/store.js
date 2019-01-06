import Vue from 'vue'
import Vuex from 'vuex'
import sesub from '@/assets/SE.json'
import tesub from '@/assets/TE.json'
import besub from '@/assets/BE.json'
import submap from '@/assets/subjectEIDMap.json'
import fac from '@/assets/faculty.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    finalJSON: {},
    timings: ['08_00', '09_00', '10_15', '11_15', '13_15', '14_15', '15_30','16_30','17_30'],
    locations: ["","B001","B002","B003","B101","B102","B103","B104","B105","B201","B202","B203A","B203B","B203C","B204","B301","B302","B303","B304","B305","A002","A102","A101"],
    days: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    staffEIDs: fac,
    staffs: Object.keys(fac),
    subjectsSE: Object.keys(sesub),
    subjectsTE: Object.keys(tesub),
    subjectsBE: Object.keys(besub),
    subjectEIDMap: submap,
    subjects: [],
    Dept: '',
    AcYear: '',
    Div: '',
    Sem: '',
    Year: '',
  },
  getters: {
    getYear: state => state.Year,
    getSem: state => state.Sem,
    getDept: state => state.Dept,
    getDiv: state => state.Div,
    getAcYear: state => state.AcYear,
    getDays: state => state.days,
    getTimings: state => state.timings,
    getLocations: state => state.locations,
    getStaffEIDs: state => state.staffEIDs,
    getStaffs: state => state.staffs,
    getSubjectCodes: state => state.subjectCodes,
    getSubjects: state => state.subjects
  },
  mutations: {
    setDept: (state, dept) => {
      state.Dept = dept
    },
    setAcYear: (state, acyear) => {
      state.AcYear = acyear
    },
    setDiv: (state, div) => {
      state.Div = div
    },
    setSem: (state, sem) => {
      state.Sem = sem
    },
    setYear: (state, year) => {
      state.Year = year
    }
  },
  actions: {
    setDept: ({ commit }) => {
      commit('setDept', dept)
    },
    setAcYear: ({ commit }) => {
      commit('setAcYear', acyear)
    },
    setDiv: ({ commit }) => {
      commit('setDiv', div)
    },
    setSem: ({ commit }) => {
      commit('setSem', sem)
    },
    setYear: ({ commit }) => {
      commit('setYear', year)
    }
  }
})
