<template>
	<div class="base-div">
		<DashboardHeader></DashboardHeader>
		<md-card md-with-hover class='dashboard-card'>
			<md-card-header>
				<div class="md-title">
					<h3>Account Settings</h3>
				</div>
			</md-card-header>
			<md-card-content>
				<md-layout md-gutter>
					<md-layout md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="20" md-flex-large="20" md-vertical-align="center">
						<md-layout md-column>
						<h4 style="text-align:center"><strong>Profile</strong></h4>
						<h4 style="font-size:14px !important;text-align:center">Your email and username is identity</h4>
					</md-layout>
					</md-layout>

					<md-layout md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80" md-flex-large="80" md-vertical-align="center">
					<md-layout md-column>
						<div>
						<h4 style="text-align:center">Username : <strong>{{user.userName}}</strong></h4>	
						</div>
						<div>
						<h4 style="text-align:center">email : <strong>{{user.userEmail}}</strong></h4>	
						</div>
					</md-layout>
					</md-layout>
				</md-layout>	
					<br><hr style="width:90%"><br>

				<md-layout md-gutter>
						<md-layout md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="20" md-flex-large="20" md-vertical-align="center">
							<md-layout md-column>
							<h4 style="text-align:center"><strong>S3 - Token</strong></h4>
							<h4 style="font-size:14px !important;text-align:center">S3 token is refereshed everytime you update password , Kindly note it once generated</h4>
						</md-layout>
						</md-layout>

					<md-layout md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80" md-flex-large="80" md-vertical-align="center">
						<md-layout md-column>	
									<md-layout  v-if = "s3Token.length > 0"  md-row md-align="center">
												<div>
													<h5 style="text-align:center;"><strong>{{s3Token}}</strong></h5>	
												</div>
												<div style="text-align:center">
													<md-button style="background-color:#f4511e;color:#ffffff;margin-left:15%;margin-right:15%;width:auto" class="md-raised " @click=" generateToken">Generate</md-button>	
												</div>					
									</md-layout>		  
												<div style="text-align:center">
													<md-button style="background-color:#f4511e;color:#ffffff;margin-left:15%;margin-right:15%;width:auto" class="md-raised " @click="showToken">show</md-button>	
												</div>
						</md-layout>
					</md-layout>
				</md-layout>	
					<br><hr style="width:90%"><br>

				<md-layout md-gutter>
					<md-layout md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="20" md-flex-large="20" md-vertical-align="">
						<md-layout md-column>
						<h4 style="text-align:center"><strong>Passwords</strong></h4>
						<h4 style="font-size:14px !important;text-align:center">Your email and username is identity</h4>
					</md-layout>
					</md-layout>

					<md-layout md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80" md-flex-large="80" md-vertical-align="start">
					<md-layout md-column>
						<div>
					     <md-input-container style="margin-left:15%;margin-right:15%;width:50%">
									<label>Current Password</label>
									<md-input type="password" v-model="payload.oldPassword"></md-input>
  							</md-input-container>
						</div>
						<div>
					  <md-input-container style="margin-left:15%;margin-right:15%;width:50%">
									<label>New Password</label>
									<md-input type="password" v-model="payload.password" ></md-input>
  					</md-input-container>
						</div>
						<div>
					  <md-input-container style="margin-left:15%;margin-right:15%;width:50%">
								<label>Confirm new Password</label>
								<md-input type="password" v-model="payload.confirmPassword"></md-input>
  					</md-input-container>
						</div>
						<div style="text-align:center">
						<md-button style="background-color:#42f498;color:#ffffff;margin-left:15%;margin-right:15%;width:auto" class="md-raised md-warn" @click="updatePassword">Update Password</md-button>
						</div>
					</md-layout>
					</md-layout>
				</md-layout>
			<br><hr style="width:90%"><br>

				<md-layout md-gutter>
					<md-layout md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="20" md-flex-large="20" md-vertical-align="">
						<md-layout md-column>
						<h4 style="text-align:center"><strong>Delete your account</strong></h4>
						<h4 style="color:#ff0000 !important;font-size:14px !important;text-align:center"><strong>Warning !</strong> Deleting your account is irrevesible</h4>
					</md-layout>
					</md-layout>

					<md-layout md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80" md-flex-large="80" md-vertical-align="start">
					<md-layout md-column>
						<div style="text-align:center">
						<md-button style="background-color:#ff0000;color:#ffffff;margin-left:15%;margin-right:15%;width:auto" class="md-raised " @click="deleteUser">Delete account</md-button>
						</div>
					</md-layout>
					</md-layout>
				</md-layout>

			</md-card-content>
		</md-card>
		<DashboardFooter></DashboardFooter>
		<md-snackbar :md-position="snackBar.vertical + ' ' + snackBar.horizontal" ref="snackbar" :md-duration="snackBar.duration">
		<p style="color:#ffffff">{{snackBar.errorMessage}}</p>
		<md-button class="md-warn" @click="$refs.snackbar.close()">close</md-button>
	</md-snackbar>
	</div>
</template>


<script>
import { makeRequest } from "../../../../helper/internet.js";
import DashboardHeader from "../partial/dashboardheader.vue";
import DashboardFooter from "../partial/dashboardfooter.vue";

export default {
  beforeMount() {
    this.$store.dispatch("setCurrentRoute", "/profiles");
    if (this.$browserStore.get("userName") == null) {
      this.pushToLoginPage();
    }
  },
  mounted() {
    this.user.userName = this.$browserStore.get("userName");
    this.user.userEmail = this.$browserStore.get("userEmail");
  },
  beforeDestroy() {},
  destroyed() {},
  data() {
    return {
      payload: {
        repositoryName: "",
        language: "",
        oldPassword: "",
        password: "",
        confirmPassword: ""
      },
      s3Token: "",
      user: {
        userName: "",
        userEmail: ""
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
        duration: 10000,
        errorMessage: ""
      }
    };
  },
  components: {
    DashboardHeader,
    DashboardFooter
  },
  computed: {},
  methods: {
    openDialog() {
      this.$refs.confirm_dailog.open();
    },
    closeDialog() {
      this.$refs.confirm_dailog.close();
    },
    onOpen() {},
    onClose(type) {},
    pushToLoginPage() {
      this.$router.push({
        path: `/login`,
        name: `login`
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
    },
    updatePassword() {
      if (this.payload.password == this.payload.confirmPassword) {
        let _payload = {
          userName: this.user.userName,
          oldPassword: this.payload.oldPassword,
          password: this.payload.password,
          confirmPassword: this.payload.confirmPassword
        };
        makeRequest(`/admin/user`, "POST", null, _payload)
          .then(result => {
            let res = result.res;
            if (res.data.status) {
              this.snackBar.errorMessage = res.data.message;
              this.$refs.snackbar.open();
            } else {
              this.snackBar.errorMessage = res.data.message;
              this.$refs.snackbar.open();
            }
          })
          .catch(reject => console.log(reject));
      } else {
        this.snackBar.errorMessage =
          "New password and confirm password did not match";
        this.$refs.snackbar.open();
      }
    },
    deleteUser() {
      makeRequest(`/admin/deleteuser/${this.user.userName}`, "POST", null, {})
        .then(result => {
          let res = result.res;
          console.log("Status", res.data.status);
          if (res.data.status != "true") {
            this.$refs.snackbar.open();
          } else {
            this.$browserStore.remove("userEmail");
            this.$browserStore.remove("userName");
            this.logoutUser();
          }
        })
        .catch(reject => console.log(reject));
    },
    showToken() {
      makeRequest(`/admin/showtoken`, "POST", null, {})
        .then(result => {
          let res = result.res;
          if (res.data.status == true) {
            this.s3Token = res.data.s3Token;
            console.log("Status", res.data);
          } else {
            this.s3Token = res.data.message;
          }
        })
        .catch(reject => console.log(reject));
    },
    generateToken() {
      makeRequest(`/admin/generatetoken`, "POST", null, {})
        .then(result => {
          let res = result.res;
          if (res.data.status == true) {
            this.s3Token = res.data.s3Token;
            this.snackBar.errorMessage = res.data.message;
            this.$refs.snackbar.open();
          } else {
            this.snackBar.errorMessage = res.data.message;
            this.$refs.snackbar.open();
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



