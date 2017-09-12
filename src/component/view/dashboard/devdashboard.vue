<template>
	<div class='base-div'>

		<!-- <md-layout md-gutter>
																				<md-layout md-align="center"> -->

		<md-card md-with-hover class='dashboard-card'>
			<md-card-header>
				<div class="md-title">
					<h3>Posts</h3>
				</div>
			</md-card-header>

			<md-card-content>
				<md-list>

					<!-- <md-list-item @click="push(appManagement)">

								<md-icon>code</md-icon>
								<p>Inbox</p>
								<p style="padding-left: 1em;padding-right: 1em;"> Created on</p>

							</md-list-item> -->

					<md-list-item v-for="item in payload.items" v-bind:data="item" v-bind:key="item.repositoryName" @click="(e)=> goToAppManagement(e,item)">

						<md-icon>code</md-icon>
						<p>{{item.repositoryName}}</p>
						<p style="padding-left: 1em;padding-right: 1em;"> Created on {{item.date}}</p>

					</md-list-item>

				</md-list>
			</md-card-content>

		</md-card>

		<!-- </md-layout>
																			</md-layout> -->
		<md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration">
			<span>Request put to Queue</span>
			<md-button class="md-primary" md-theme="light-blue" @click="$refs.snackbar.close()">Retry</md-button>
		</md-snackbar>
	</div>
</template>


<script>
import { makeRequest } from '../../../helper/internet';
export default {
	data: () => ({
		vertical: 'top',
		horizontal: 'center',
		duration: 2000,
		appManagement: "Hello",
		payload: {
			items: []
		},


	}),
	beforeMount() {
		this.getItems(() => {
			this.$store.dispatch('setIsProgressVisible', false);
		});
    this.clearRepositoryItem();
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
		open() {
			this.$refs.snackbar.open();
		},
		goToAppManagement(e, item) {

			//const { failedLeadItems } = this.$store.getters;
			//item = failedLeadItems[rowIndex];
			this.$router.push({
				path: '/appmanagement', name: 'appManagement',
				params: {
					'repository_id': item._id,
					'item': item
				}
			})

		},

		getItems(callback = null) {
			makeRequest('/repositories', 'GET', null, null)
				.then((result) => {
					let res = result.res;
					if (!result.error && res) {
						this.$store.dispatch('setRepositoryItems', res.data);
						this.payload.items = res.data;
						// // !this.helper.isColumnRendered && this.getColumns();
					
					}
				})
				.catch(reject => console.log(reject));
		},

		clearRepositoryItem() { 
			if (this.$store.getters.repositoryItem != undefined) {
				this.$store.getters.repositoryItem = undefined
			}
			console.log("Main item",this.$store.getters.repositoryItem)
		}


	}
}
</script>
<style>

</style>