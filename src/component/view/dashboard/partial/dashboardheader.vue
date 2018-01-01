
<template>
	<div>
		<div style="padding-left: 37px;padding-right:37px">
			<md-layout md-gutter>
				<md-layout md-align="start" md-flex-xsmall="50" md-flex-small="50" md-flex-medium="50">
					<div style="padding-left:20px;margin-top: 25px;">
						<img style="color : #FFFFFF ;width :40px ; height : 40px; " src="../../../../assets/rocket.png" @click="pushToPage('dashboard')">
					</div>
					<h3 style="color :#000000 !important;font-size:40px!important;font-weight: 400 !important;" @click="pushToPage('dashboard')">
						tocstack
					</h3>
				</md-layout>
				<md-layout md-align="end" md-flex-xsmall="50" md-flex-small="50" md-flex-medium="50">
					<div>
						<md-menu md-align-trigger md-direction="bottom left" md-size="3">
							<md-avatar style="width:40px !important;height:40px !important;margin-top: 30px">
								<img md-menu-trigger src="../../../../assets/sejal.png" alt="People">
							</md-avatar>
							<md-menu-content style="width:auto !important;">
								<md-menu-item @click="pushToPage('profile')">
									<md-card style="box-shadow:none !important;width:250px">
											<md-card-header>
												<md-avatar style="margin-left:40%">
														<img src="../../../../assets/sejal.png" alt="Avatar">
												</md-avatar>
											</md-card-header>
											<md-card-content>
												<h4 style="font-size : 1em ;text-align:center">{{userName}}</h4>
												<h5 style="font-size : 1em ;text-align:center;color:#ff5722 !important"><span>{{userEmail}}</span></h5>
											</md-card-content>
										</md-card>

								</md-menu-item>
								<md-menu-item @click="pushToPage('profile')">
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
import { makeRequest } from "../../../../helper/internet.js";
export default {
  data: () => ({
    userName: "",
    userEmail: ""
  }),
  beforeMount() {},
  mounted() {
    this.userName = this.$browserStore.get("userName");
    this.userEmail = this.$browserStore.get("userEmail");
  },
  beforeDestroy() {},
  destroyed() {},
  components: {},
  computed: {},
  methods: {
    pushToPage(route) {
      this.$router.push({
        path: `/${route}`,
        name: route
      });
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
        redirect: "/login"
      });
    }
  }
};
</script>
