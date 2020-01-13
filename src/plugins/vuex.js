import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import state from '../store/state'
import mutations from '../store/mutations'
import actions from '../store/actions'

export default new Vuex.Store({
    state,mutations,actions
})