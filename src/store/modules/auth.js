import api from '../../api/imgur'
import qs from "qs";
import {router} from "@/main";

const IMGUR_TOKEN = 'imgur_token';

const state = {
    token: window.localStorage.getItem(IMGUR_TOKEN),
};

const getters = {
    isLoggedIn: (state) => !!state.token
};

const actions = {
    login: () => {
        api.login();
    },
    finalizeLogin({commit}, hash) {
        const queryParams = qs.parse(hash.replace('#',''));
        const accessToken = queryParams.access_token;
        commit ('setToken', accessToken);
        window.localStorage.setItem(IMGUR_TOKEN, accessToken);
        router.push('/');
    },
    logout: ({ commit }) => {
        commit('setToken', null);
        window.localStorage.removeItem(IMGUR_TOKEN);
    }
};

const mutations = {
    setToken: (state, token) => { state.token = token; }
};

export default {
    state,
    getters,
    actions,
    mutations
}