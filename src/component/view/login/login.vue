<template>
	<div style ="height:100vh;background:url(https://www.walldevil.com/wallpapers/w02/616581-minimalistic-space-shuttle.jpg) center/cover no-repeat">
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
			<md-card style="width:400px">
				<md-card-area>
					<md-card-header>
						<div class="md-title">
							<strong>Login</strong>
						</div>
					</md-card-header>

					<md-card-content>
						<form style="width:300px">
							<md-input-container>
								<md-icon>person</md-icon>
								<label>Email</label>
								<md-input type="text" v-model="payload.email" ref="username"></md-input>
							</md-input-container>

							<md-input-container>
								<md-icon>remove_red_eye</md-icon>
								<label>Password</label>
								<md-input type="password" v-model="payload.password" ref="password"></md-input>
							</md-input-container>
							<md-checkbox v-model="payload.rememberMe" class="md-primary">Remember Me</md-checkbox>
						</form>

					</md-card-content>
				</md-card-area>
				<md-card-actions>
					<md-button style="width : auto !important ; font-weight:500 ; font-size:inherit" class="md-raised md-warn" @click="login">LOGIN</md-button>
				</md-card-actions>
			</md-card>
		<div style="display:flex;justify-content:center">
			<md-button style="width : auto !important ; font-weight:500 ; font-size:inherit" class="md-raised md-warn" @click="pushToRegisterPage">NEW USER</md-button>
		</div>
			</md-layout>
			</md-layout>

			<md-dialog-confirm ref="confirm_dailog" :md-title="error.title" :md-content-html="error.message" :md-ok-text="error.okText" :md-cancel-text="error.cancelText" @open="onOpen" @close="onClose">
			</md-dialog-confirm>
		</div >
		<md-snackbar :md-position="snackBar.vertical + ' ' + snackBar.horizontal" ref="snackbar" :md-duration="snackBar.duration">
		<p style="color:#ffffff">{{snackBar.errorMessage}}</p>
		<md-button class="md-warn" @click="$refs.snackbar.close()">close</md-button>
	</md-snackbar>
	</div>
</template>


<script>
export default {
  beforeMount() {
    this.$store.dispatch("setCurrentRoute", "/login");
    if (
      this.$browserStore.get("default_auth_token") &&
      !(this.$browserStore.get("default_auth_token").length <= 0)
    ) {
      this.pushToDashboardPage();
    }
  },
  mounted() {
    if (this.$auth.redirect()) {
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
      },
      snackBar: {
        vertical: "top",
        horizontal: "center",
				duration: 10000 , 
				errorMessage : "" ,
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
    pushToDashboardPage() {
      this.$router.push({
        path: "/devdashboard",
        name: "devdashboard"
      });
    },
    login() {
      const { email, password, rememberMe, redirect } = this.payload;
      const _redirect =
        redirect != null && redirect != "" ? redirect : "/devdashboard";
      if (email && password && password.length > 3) {
        this.$store.dispatch("setIsProgressVisible", false); // set true to start loading
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
          success(res) {
            this.$browserStore.set("userEmail", res.data.email);
            this.$browserStore.set("userName", res.data.userName);
          },
          error(error) {
						console.log(error)
            this.$store.dispatch("setIsProgressVisible", false);
            this.snackBar.errorMessage = "Email or password is wrong"
            this.$refs.snackbar.open();
          }
        });
      } else {
        //this.openDialog();
        this.$refs.snackbar.open();
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



