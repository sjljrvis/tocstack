
<template>
	<div>
		<div style="padding-left: 37px;padding-right:37px">
			<md-layout md-gutter>
				<md-layout md-align="start" md-flex-xsmall="50" md-flex-small="50" md-flex-medium="50">
					<div style="padding-left:20px;margin-top: 25px;">
						<img style="color : #FFFFFF ;width :40px ; height : 40px; " src="../../../../assets/rocket.png">
					</div>
					<h3 style="color :#efefef !important;font-size:50px!important">
						<strong>tocstack</strong>
					</h3>
				</md-layout>
				<md-layout md-align="end" md-flex-xsmall="50" md-flex-small="50" md-flex-medium="50">
					<div>
						<md-menu md-align-trigger md-direction="bottom left" md-size="3">
							<md-avatar style="width:40px !important;height:40px !important;margin-top: 30px;">
								<img md-menu-trigger src="../../../../assets/sejal.png" alt="People">
							</md-avatar>
							<md-menu-content style="width:auto !important;">
								<md-menu-item @click="pushToPage('devdashboard')">
									<md-icon>account_circle</md-icon>
									<span>Profile &nbsp;&nbsp;</span>
								</md-menu-item>
								<md-menu-item @click="pushToPage('devdashboard')">
									<md-icon>settings</md-icon>
									<span>Settings &nbsp;&nbsp;</span>
								</md-menu-item>
								<md-menu-item @click="logoutUser">
									<md-icon>subdirectory_arrow_right</md-icon>
									<span>Logout &nbsp;&nbsp;</span>
								</md-menu-item>
							</md-menu-content>
						</md-menu>
					</div>
				</md-layout>
			</md-layout>
		</div>
	</div>
</template>


<script>
import { makeRequest } from '../../../../helper/internet.js';
export default {
	data: () => ({
	}),
	beforeMount() {
	},
	mounted() {
	},
	beforeDestroy() {
	},
	destroyed() {
	},
	components: {
	},
	computed: {
	},
	methods: {
		pushToPage(route) {
			this.$router.push({
				path: `/${route}`, name: route,
			})
		},
		logoutUser() {
			this.$auth.logout({
				makeRequest: true,
				success: function(res) {
					location.reload();
				},
				error: function(error) {
					console.log(error);
				},
				redirect: '/login',
			});
		}

	},
}
</script>
