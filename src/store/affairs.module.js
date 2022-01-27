import Vue from "vue";
import {
  AffairsService,
  AffairsFieldsService
  // SearchService,
} from "@/common/api.service";
import {
  FETCH_AFFAIR,
  FETCH_AFFAIR_FIELDS,
  AFFAIR_RESET_STATE
} from "./actions.type";
import { SET_AFFAIR, SET_AFFAIR_FIELDS, RESET_STATE } from "./mutations.type";

const initialState = {
  affair: {},
  fields: []
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_AFFAIR](context, articleSlug) {
    const { data } = await AffairsService.get(articleSlug);
    context.commit(SET_AFFAIR, data);
    return data;
  },
  async [FETCH_AFFAIR_FIELDS](context) {
    const { data } = await AffairsFieldsService.get();
    context.commit(SET_AFFAIR_FIELDS, data);
    return data;
  },
  [AFFAIR_RESET_STATE]({ commit }) {
    commit(RESET_STATE);
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_AFFAIR](state, affair) {
    state.affair = affair[0];
  },
  [SET_AFFAIR_FIELDS](state, fields) {
    state.fields = fields;
  },
  [RESET_STATE]() {
    for (let f in state) {
      Vue.set(state, f, initialState[f]);
    }
  }
};

const getters = {
  affair(state) {
    return state.affair;
  },
  fields(state) {
    return state.fields;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
