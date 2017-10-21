<template>
	<div style ="height:100vh;background:url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/ruoEhTkNeiwq2lefr/videoblocks-rocket-space-ship-take-off-and-flying-to-space-cartoon-flat-animation-in-4k-strat-up-business-concept-motion-graphics-for-yours-presentation-isolated-on-black-background_h_ndrebgw_thumbnail-full11.png) center/cover no-repeat">
		<div>
			<h3 style="color :#efefef !important;font-size:90px!important;margin-top:0px !important;margin-left:11px !important;text-align:center"><strong>tocstack</strong></h3>
			<md-layout md-gutter>
		  <md-layout md-flex-xsmall="0" md-flex-small="0" md-flex-medium="33" md-vertical-align="center">
			</md-layout>	
			<md-layout md-flex-xsmall="0" md-flex-small="0" md-flex-medium="33" md-vertical-align="center">
			</md-layout>	
			<md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="33" md-vertical-align="center">
					<md-card style="width:400px;">
						<md-card-area>
							<md-card-header>
								<div class="md-title">
									<strong>Login</strong>
								</div>
							</md-card-header>
							<md-card-content>
								<form style="width:350px">
									<md-input-container>
										<md-icon>person</md-icon>
										<label>Username</label>
										<md-input type="text" v-model="payload.email" ref="username"></md-input>
									</md-input-container>

									<md-input-container>
										<md-icon>person</md-icon>
										<label>Username</label>
										<md-input type="text" v-model="payload.email" ref="username"></md-input>
									</md-input-container>

									<md-input-container>
										<md-icon>person</md-icon>
										<label>Username</label>
										<md-input type="text" v-model="payload.email" ref="username"></md-input>
									</md-input-container>

									<md-input-container>
										<md-icon>remove_red_eye</md-icon>
										<label>Password</label>
										<md-input type="password" v-model="payload.password" ref="password"></md-input>
									</md-input-container>

								</form>

							</md-card-content>
						</md-card-area>
						<md-card-actions>
							<md-button style="width : auto !important ; font-weight:500 ; font-size:inherit" class="md-raised md-warn" @click="login">LOGIN</md-button>
						</md-card-actions>
					</md-card>
			</md-layout>
			</md-layout>	
		</div>
	</div>

</template>


<script>
export default {
  beforeMount() {
    this.$store.dispatch("setCurrentRoute", "/login");
  },
  mounted() {
    if (this.$auth.redirect()) {
      console.log(this.$auth.redirect().from.name);
      this.redirect = this.$auth.redirect().from.name;
    }
  },
  beforeDestroy() {},
  destroyed() {},

  data() {
    return {
      payload: {
        email: "",
        password: "",
        rememberMe: false,
        redirect: ""
      },
      error: {
        title: "Something went wrong",
        message: "All fields are required. Fill in all details before login",
        okText: "OK",
        cancelText: "CANCEL"
      }
    };
  },
  components: {},
  computed: {},
  methods: {
    openDialog() {
      console.log("I am called");
      this.$refs.confirm_dailog.open();
    },
    closeDialog() {
      this.$refs.confirm_dailog.close();
    },
    onOpen() {},
    onClose(type) {},
    pushToRegisterPage() {
      this.$router.push({
        path: "/register",
        name: "register"
      });
    },
    login() {
      const { email, password, rememberMe, redirect } = this.payload;
      const _redirect =
        redirect != null && redirect != "" ? redirect : "/devdashboard";
      if (email && password && password.length > 3) {
        this.$store.dispatch("setIsProgressVisible", true);
        this.$auth.login({
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            email,
            password
          },
          rememberMe: rememberMe,
          redirect: _redirect,
          success(res) {},
          error(error) {
            this.$store.dispatch("setIsProgressVisible", false);
            this.openDialog();
          }
        });
      } else {
        this.openDialog();
      }
    }
  }
};
</script>


<style>
.login-div {
  max-width: 400px;
  margin: auto;
  margin-top: 100px;
}
</style>



