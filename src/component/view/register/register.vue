<template>
	<div style ="height:100vh;background:url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/ruoEhTkNeiwq2lefr/videoblocks-rocket-space-ship-take-off-and-flying-to-space-cartoon-flat-animation-in-4k-strat-up-business-concept-motion-graphics-for-yours-presentation-isolated-on-black-background_h_ndrebgw_thumbnail-full11.png) center/cover no-repeat">
		<div style="margin-left: 12px;margin-right: 12px;">
			<h3 style="color :#efefef !important;font-size:90px!important;
			          ;margin-right:12px !important;margin-top:0px !important;
								margin-left:12px !important;text-align:center"><strong>tocstack</strong></h3>
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
									<strong>Sign up</strong>
								</div>
							</md-card-header>
							<md-card-content>
								<form style="width:310px">
									<md-input-container>
										<md-icon>account_box</md-icon>
										<label>Name</label>
										<md-input type="text" v-model="payload.name" ref="name"></md-input>
									</md-input-container>

									<md-input-container>
										<md-icon>person</md-icon>
										<label>Username</label>
										<md-input type="text" v-model="payload.userName" ref="username"></md-input>
									</md-input-container>

									<md-input-container>
										<md-icon>email</md-icon>
										<label>Email</label>
										<md-input type="text" v-model="payload.email" ref="email"></md-input>
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
							<md-button style="width : auto !important ; font-weight:500 ; font-size:inherit" class="md-raised md-warn" @click="register">Sign up</md-button>
						</md-card-actions>
					</md-card>
			</md-layout>
			</md-layout>	
		</div>
	<md-snackbar :md-position="snackBar.vertical + ' ' + snackBar.horizontal" ref="snackbar" :md-duration="snackBar.duration">
		<p style="color:#ffffff">App with this name already exists . Please choose another one</p>
		<md-button class="md-warn" @click="$refs.snackbar.close()">close</md-button>
	</md-snackbar>

	</div>

</template>


<script>
import { makeRequest } from "../../../helper/internet.js";
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
        name: "",
        userName: "",
        email: "",
        password: "",
        redirect: ""
      },
      error: {
        title: "Something went wrong",
        message: "All fields are required. Fill in all details before login",
        okText: "OK",
        cancelText: "CANCEL"
      },
      snackBar: {
        vertical: "top",
        horizontal: "right",
        duration: 5000
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
    pushToLoginPage() {
      this.$router.push({
        path: "/login",
        name: "login"
      });
    },
    register() {
      const { name, userName, email, password } = this.payload;
      const registerPayload = { name, userName, email, password };
      makeRequest("/admin/user", "PUT", null,registerPayload)
        .then(result => {
          let res = result.res;
          console.log("Status", res.data.status);
          if (res.data.status != "true") {
            this.$refs.snackbar.open();
          } else {
            this.pushToLoginPage();
          }
        })
        .catch(reject => console.log(reject));
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



