import { deviceType } from '../../helper/enum/deviceType';

const state = {
	currentRoute: '/login',
	sidebarMargin: 0,
	contentMargin: 0,
	deviceType: deviceType.TABLET,
	isProgressVisible: false,
	translate3D: true,
	setFooterPosition : false,
}

const mutations = {
	SET_CURRENT_ROUTE(state, payload) {
		state.currentRoute = payload;
	},
	SET_SIDEBAR_MARGIN(state, payload) {
		state.sidebarMargin = payload;
		if (state.deviceType == deviceType.PHONE) {
			state.contentMargin = 0;
		} else if (state.deviceType == deviceType.TABLET) {
			state.contentMargin = payload;
		} else {
			state.contentMargin = payload;
		}
	},
	SET_DEVICE_TYPE(state, payload) {
		state.deviceType = payload;
	},
	SET_IS_PROGRESS_VISIBLE(state, payload) {
		state.isProgressVisible = payload;
	},
	SET_TRASLATE3D(state, payload) {
		state.translate3D = payload;
	},
	SET_FOOTER_POSITION(state,payload){
		state.setFooterPosition = payload;
	}
}

const actions = {
	setCurrentRoute({ commit }, payload) {
		commit('SET_CURRENT_ROUTE', payload);
	},
	setSidebarMargin({ commit }, payload) {
		commit('SET_SIDEBAR_MARGIN', payload);
	},
	setDeviceType({ commit }, payload) {
		commit('SET_DEVICE_TYPE', payload);
	},
	setIsProgressVisible({ commit }, payload) {
		commit('SET_IS_PROGRESS_VISIBLE', payload);
	},
	setTranslate3d({ commit }, payload) {
		commit('SET_TRASLATE3D', payload);
	},
	setFooterPosition({commit},payload){
		commit('SET_FOOTER_POSITION', payload);
	}
}

const getters = {
	appCurrentRoute: state => state.currentRoute,
	appSidebarMargin: state => state.sidebarMargin,
	appContentMargin: state => state.contentMargin,
	appDeviceType: state => state.deviceType,
	appIsProgressVisible: state => state.isProgressVisible,
	appTranslate3D: state => state.translate3D,
	appFooterPosition : state => state.setFooterPosition,
}


export default {
	state,
	mutations,
	actions,
	getters
}