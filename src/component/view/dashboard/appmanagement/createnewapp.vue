<template>
	<div class="base-div">
		<DashboardHeader></DashboardHeader>
		<div class="login-div">
			<md-card>
				<md-card-area>
					<md-card-header>
						<div class="md-title">Create new app</div>
					</md-card-header>
					<md-card-content>
						<form style="width:350px">
							<md-input-container>
								<md-icon>widgets</md-icon>
								<label> App name</label>
								<md-input type="text" v-model="payload.repositoryName" ref="repositoryName"></md-input>
							</md-input-container>

							<md-input-container>
								<md-icon>language</md-icon>
								<label>Choose a language</label>
								<md-select  style="width:350px !important" required v-model="payload.language">
									<md-option value="nodeJS">nodeJS</md-option>
									<md-option value="python">python</md-option>
									<md-option value="ruby">Ruby</md-option>
									<md-option value="go">Go</md-option>
								</md-select>
							</md-input-container>
						</form>

					</md-card-content>
				</md-card-area>

				<md-card-actions>
					<md-button  style="width : auto !important ; font-weight:400 ; font-size:inherit" class="md-raised md-warn" @click="createNewRepository">Create</md-button>
				</md-card-actions>
			</md-card>

			<md-dialog-confirm ref="confirm_dailog" :md-title="error.title" :md-content-html="error.message" :md-ok-text="error.okText" :md-cancel-text="error.cancelText" @open="onOpen" @close="onClose">
			</md-dialog-confirm>
		</div>

		<md-snackbar :md-position="snackBar.vertical + ' ' + snackBar.horizontal" ref="snackbar" :md-duration="snackBar.duration">
		<p style="color:#ffffff">App with this name already exists . Please choose another one</p>
		<md-button class="md-warn" @click="$refs.snackbar.close()">close</md-button>
	</md-snackbar>

		<div>
		<footer style= "position: fixed !important; bottom:0px !important;width: 100%;">
			<div style='background-color :  #ffffff  ;color : #ffffff '>
				<div style="padding: 2% 2%;">
					<md-layout md-gutter>
						<md-layout md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="70" md-flex-large="70">
							<md-layout md-row>
								<div style="padding-left:20px;margin-top: 15px;">
									<img style="color : #FFFFFF ;width :40px ; height : 40px; " src="../../../../assets/rocket.png">
								</div>
								<h3 style="padding-right:30px ;color : #000000 !important">tocstack</h3>
								<h4 style="padding: 10px 10px 10px 10px;color : #000000 !important">Blogs</h4>
								<h4 style="padding: 10px 10px 10px 10px;color : #000000 !important">Github</h4>
								<h4 style="padding: 10px 10px 10px 10px;color : #000000 !important">Demo</h4>
							</md-layout>
						</md-layout>

						<md-layout style="margin-top: 15px !important;" md-align="end" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="30" md-flex-large="30">
							<md-layout md-row style="justify-content:flex-end;margin-right:120px">
								<div style="padding-left:20px">
									<img style="color : #FFFFFF ;width :40px ; height : 40px; " src="../../../../assets/git1.png">
								</div>
								<div style="padding-left:20px">
									<img style="color : #FFFFFF ;width :40px ; height : 40px;  " src="../../../../assets/twitter.png">
								</div>
								<div style="padding-left:20px">
									<img style="color : #FFFFFF ;width :40px ; height : 40px; " src="../../../../assets/slack.png">
								</div>
							</md-layout>
						</md-layout>

					</md-layout>
				</div>
			</div>
		</footer>
		</div>	
	</div>
</template>


<script>
import { makeRequest } from "../../../../helper/internet.js";
import DashboardHeader from "../partial/dashboardheader.vue";
import DashboardFooter from "../partial/dashboardfooter.vue";

export default {
  beforeMount() {
    this.$store.dispatch("setCurrentRoute", "/login");
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
        repositoryName: "",
        language: ""
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
        duration: 10000
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
    pushToDevdashboard() {
      this.$router.push({
        path: `/devdashboard`,
        name: `devdashboard`
      });
    },
    createNewRepository() {
      const { repositoryName, language } = this.payload;
      const payloadRepository = { repositoryName, language };
      makeRequest("/createrepository", "POST", null, payloadRepository)
        .then(result => {
          let res = result.res;
          if (res.data.status != "true") {
            this.$refs.snackbar.open();
          } else {
            this.pushToDevdashboard();
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



