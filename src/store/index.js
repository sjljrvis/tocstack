import Vue from 'vue';
import Repository from './module/repository'
import VueX from 'vuex';
import app from './module/app';

Vue.use(VueX)

export default new VueX.Store({
	modules: {
		app,Repository
		//add mudules here
	},
})