import { SearchService } from "@/common/api.service";
import { FETCH_AFFAIRS } from "./actions.type";
import { SET_AFFAIRS } from "./mutations.type";

const initialState = {
  data: [],
  cnt: 0,
  offset: 0,
  limit: 0
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_AFFAIRS](context, params) {
    return SearchService.query(params)
      .then(({ data }) => {
        context.commit(SET_AFFAIRS, data);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_AFFAIRS](state, d) {
    state.data = d.data;
    state.cnt = d.cnt;
    state.offset = d.offset;
    state.limit = d.limit;
  }
};

const getters = {
  affairs(state) {
    return state;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
