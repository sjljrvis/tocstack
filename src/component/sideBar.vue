<template>
	<div class="left-sidenav-container">

		<md-toolbar id='element1' class='md-large'>
			<h2 class="md-title">My App</h2>
		</md-toolbar>

		<md-button class="md-fab-top-right md-fab md-clean" @click="toggleRightSidenav">
			<md-icon>menu</md-icon>
		</md-button>

		<md-sidenav class="md-right" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
			<md-toolbar style='background-color:#efefef' class="md-large">
				<div class="md-toolbar-container">
					<h3 class="md-title">my App</h3>
				</div>
			</md-toolbar>

			<md-list>
				<md-list-item>
					<md-icon>move_to_inbox</md-icon>
					<a href="#" v-scroll-to="'#element1'">
						<span> Inbox</span>
					</a>
				</md-list-item>

				<md-list-item>
					<md-icon>send</md-icon>
					<a href="#" v-scroll-to="'#element2'">
						<span>Sent Mail</span>
					</a>

				</md-list-item>

				<md-list-item>
					<md-icon>delete</md-icon>

					<a href="#" v-scroll-to="'#element3'">
						<span>Trash</span>
					</a>
				</md-list-item>

				<md-list-item>
					<md-icon>error</md-icon>
					<a href="#" v-scroll-to="'#element4'">
						<span>Spam</span>
					</a>

				</md-list-item>
				<md-list-item>
					<md-icon>error</md-icon>
					<a hre=""@click="pushToLogin">
						<span>Login / Sign Up</span>
					</a>

				</md-list-item>

			</md-list>

			<md-button id="sidebar-close-button" class=" md-fab md-fab md-clean" @click="closeRightSidenav">X</md-button>
		</md-sidenav>

	</div>
</template>

<script>
import Vue from 'vue';
import { APP_NAME } from '../helper/constant.js';
import { sideBarItems } from '../sidebar';
import { deviceType } from '../helper/enum/deviceType.js'

export default {
	beforeMount() {

	},
	mounted() {
		if (!this.IsLoginPage && this.DeviceType != deviceType.PHONE) {
			this.$refs.leftSidenav.open();
		}
	},
	beforeDestroy() {

	},
	destroyed() {

	},
	data() {
		return {
			style: {
				unselected: { background: 'transparent' },
				selected: { background: '#F1F1F1' }
			}
		}
	},
	components: {

	},
	computed: {





	},
	methods: {
		toggleLeftSidenav() {
			this.$refs.leftSidenav.toggle();
		},

		clickRoute(e, item) {
			if (item.children == undefined) {
				this.$router.push(item.path)
				if (this.$store.getters.appDeviceType == deviceType.PHONE) {
					this.$store.dispatch('setSidebarMargin', 0)
					this.$refs.leftSidenav.close()
				}
			}
		},

		toggleRightSidenav() {
			this.$refs.rightSidenav.toggle();
		},
		closeRightSidenav() {
			this.$refs.rightSidenav.close();
		},
		open(ref) {
			console.log('Opened: ' + ref);
		},
		close(ref) {
			console.log('Closed: ' + ref);
		},
		pushToLogin() {
			this.$router.push({
				path: '/login', name: 'login',
			})
		},

	}
}
</script>

<style>
#sidebar-close-button {
	margin-left: 130px;
}
</style>