<template>
	<div class='base-div' style="height:100% ">
		<DashboardHeader></DashboardHeader>
		<md-card md-with-hover class='dashboard-card'>
			<md-card-header>
				<div class="md-title">
					<h3>Apps</h3>
				</div>
				<md-button style=" background-color:#42f498;float:right ; margin-right:10px;" class="md-raised md-primary" @click="pushtocreatenewapp">
					<strong>+ new app</strong>
				</md-button>
			</md-card-header>

			<md-card-content>
				<div v-if="payload.items.length < 1">
					<h4>You have'nt created app yet  &#x2639;, click on new app to get started</h4>
				</div>
				<div v-else>
					<md-list>
						<md-list-item v-for="item in payload.items" v-bind:data="item" v-bind:key="item.repositoryName" @click="(e)=> goToAppManagement(e,item)">
							<md-icon>code</md-icon>
							<p>{{item.repositoryName}}</p>
							<p style="padding-left: 1em;padding-right: 1em;">{{item.language}}</p>
						</md-list-item>
					</md-list>
				</div>
			</md-card-content>
		</md-card>
    <DashboardFooter></DashboardFooter>
	</div>
</template>


<script>
import { makeRequest } from "../../../helper/internet";
import DashboardHeader from "./partial/dashboardheader.vue";
import DashboardFooter from "./partial/dashboardfooter.vue";
export default {
  data: () => ({
    vertical: "top",
    horizontal: "center",
    duration: 2000,
    appManagement: "Hello",
    payload: {
      items: []
    }
  }),
  beforeMount() {
    this.$store.dispatch("setCurrentRoute", "/devdashboard");
  },
  mounted() {
    this.getItems(() => {
      this.$store.dispatch("setIsProgressVisible", true);
    });
    this.$store.dispatch("setIsProgressVisible", false);
  },
  beforeDestroy() {},
  destroyed() {},
  components: {
    DashboardHeader,
    DashboardFooter
  },
  computed: {},
  methods: {
    goToAppManagement(e, item) {
      this.$router.push({
        path: "/appmanagement",
        name: "appManagement",
        params: {
          repository_id: item._id,
          item: item
        }
      });
    },
    pushtocreatenewapp() {
      this.$router.push({
        path: "/appmanagement/createnewapp",
        name: "createnewapp"
      });
    },
    getItems(callback = null) {
      makeRequest("/repositories", "GET", null, null)
        .then(result => {
          let res = result.res;
          if (!result.error && res && res.status == 200) {
            this.$store.dispatch("setRepositoryItems", res.data);
            this.payload.items = res.data;
            this.$store.dispatch("setIsProgressVisible", false);
            if (res.data.length >= 4) {
              this.$store.dispatch("setFooterPosition", true);
            } else {
              this.$store.dispatch("setFooterPosition", false);
            }
          }
        })
        .catch(reject => {
          console.log(reject);
          this.$browserStore.set("default_auth_token", "");
          this.$router.push({
            path: "/login",
            name: "login"
          });
        });
    }
  }
};
</script>
<style>

</style>