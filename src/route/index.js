import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//register all routes here.
export default new VueRouter({
	base: __dirname,
	routes: [
		{
			name: 'Login',
			path: '/login',
			component: require('../component/view/login/login.vue'),
		},
		{
			name: 'register',
			path: '/register',
			component: require('../component/view/register/register.vue'),
		},
		// {
		// 	path: '*',
		// 	redirect: '/dashboard',
		// 	meta: {
		// 		auth: true
		// 	}
		// },
		{ 
			name : 'dashboard', 
			path: '*' ,
			component: require('../component/view/dashboard/dashboard.vue')
		},
		{ 
			name : 'devdashboard', 
			path: '/devdashboard' ,
			component: require('../component/view/dashboard/devdashboard.vue')
		},
		{ 
			name : 'appManagement', 
			path: '/appmanagement/:repository_id' ,
			component: require('../component/view/dashboard/appmanagement/appmanagement.vue')
		},
		{ 
			name : 'createnewapp', 
			path: '/appmanagement/createnewapp' ,
			component: require('../component/view/dashboard/appmanagement/createnewapp.vue')
		},
		{ 
			name : 'blog', 
			path: '/blog' ,
			component: require('../component/view/dashboard/blog.vue')
		},
		{ 
			name : 'profile', 
			path: '/profile' ,
			component: require('../component/view/dashboard/user/profile.vue')
		},
		//import all sidebar items route
		...getSidebarRoutes(),
	]
});

function getSidebarRoutes(menu = [], routes = [], isBaseRouting = true) {
	if (menu.length < 1 && isBaseRouting) {
		const { sideBarItems } = require('../sidebar');
		menu = sideBarItems || [];
	}

	for (let i = 0, l = menu.length; i < l; i++) {
		const item = menu[i]
		if (item.path) {
			routes.push(item);
		}
		if (!item.component) {
			//since we are pushing items in array we don't need to return this fucntion. 
			getSidebarRoutes(item.children, routes, false);
		}
	}
	return routes
}