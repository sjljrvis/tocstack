<template>
	<div class='base-div'>
		<DashboardHeader></DashboardHeader>
		<md-card class='dashboard-card'>
			<md-card-header>
				<div class="md-title">
					<md-icon>apps</md-icon>
					<span @click="pushToPage('devdashboard')" style="color:#000000">
						<a style="color:#000000">My apps</a>
					</span> >>
					<span style="color:#000000">{{repositoryName}}</span>
				<md-button style=" background-color:#42f498;float:right ; margin-right:10px;" class="md-raised md-primary" @click="openApp">
					<strong>open</strong>
				</md-button>
				</div>
			</md-card-header>

			<md-card-content>
				<md-tabs md-fixed style="color : #000000">
					<md-tab md-label="Deploy" style="background : #ffffff">
						<Deploy></Deploy>
					</md-tab>

					<md-tab md-label="Monitor">
						<Monitor></Monitor>
					</md-tab>

					<!-- <md-tab md-label="Add config ">
						<Addconfig></Addconfig>
					</md-tab> -->

					<md-tab md-label="Settings">
						<Settings></Settings>
					</md-tab>

				</md-tabs>
			</md-card-content>

		</md-card>
		<DashboardFooter></DashboardFooter>
	</div>
</template>


<script>
import Deploy from "./deploy.vue";
import Monitor from "./monitor.vue";
import Addconfig from "./addconfig.vue";
import Settings from "./settings.vue";
import DashboardHeader from "../partial/dashboardheader.vue";
import DashboardFooter from "../partial/dashboardfooter.vue";
export default {
  data: () => ({
    repositoryName: ""
  }),
  beforeMount() {
    let item = this.$route.params.item;
    this.$store.dispatch("setCurrentRoute", "/appmanagement");
    if (item === undefined) {
      this.$router.push({
        path: "/devdashboard",
        name: "devdashboard"
      });
      return;
    }
    this.$store.dispatch("setRepositoryItem", item);
  },
  mounted() {
    this.$store.dispatch("setIsProgressVisible", false);
    this.repositoryName = this.$store.getters.repositoryItem.repositoryName;
  },
  beforeDestroy() {},
  destroyed() {},
  components: {
    DashboardHeader,
    DashboardFooter,
    Deploy,
    Monitor,
    Addconfig,
    Settings
  },
  computed: {},
  methods: {
    pushToPage(route) {
      this.$router.push({
        path: `/${route}`,
        name: route
      });
    },
    openApp() {
      window.open(`http://${this.repositoryName}.tocstack.com`, "_blank");
    }
  }
};
</script>
<style>

</style>