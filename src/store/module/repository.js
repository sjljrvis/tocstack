const state = {
	items: [],
	item: {}
}
const mutations = {
	SET_REPOSITORY_ITEMS: (state, payload) => {
		state.items = payload;
		//const pages = Object.assign(payload.pages, payload.items);
		//state.paging = Object.assign({}, pages);
	},
	SET_REPOSITORY_ITEM: (state, payload) => {
		state.item = Object.assign({}, payload);
	}
}

const actions = {
	setRepositoryItems({ commit }, payload) {
		commit('SET_REPOSITORY_ITEMS', payload)
	},
	setRepositoryItem({ commit }, payload) {
		commit('SET_REPOSITORY_ITEM', payload);
	},
}

const getters = {
	repositoryItems: state => state.items,
	repositoryItem: state => state.item
}

export default {
	state,
	mutations,
	actions,
	getters
}