
<template>
	<div>
		<footer :style= "setFooterPosition">
			<div style='background-color : #ffffff ;color : #ffffff '>
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
</template>


<script>
import { makeRequest } from "../../../../helper/internet.js";
export default {
  data: () => ({}),
  beforeMount() {
    this.setFooterPosition();
  },
  mounted() {
    console.log(this.$store.getters);
  },
  beforeDestroy() {},
  destroyed() {},
  components: {},
  computed: {
    setFooterPosition() {
      console.log("Store", this.$store.getters.appFooterPosition);
      if (this.$store.getters.appFooterPosition == true) {
        return "position: relative; bottom: 0px;width: 100%;";
      } else if (this.$store.getters.appDeviceType == "Phone") {
        console.log("check1");
        return "position: relative; bottom: 0px;width: 100%;";
      } else if (
        this.$store.getters.appCurrentRoute != "/devdashboard" &&
        this.$store.getters.appDeviceType != "Phone"
      ) {
        console.log("check2");
        return "position: relative; bottom: 0px;width: 100%;";
      } else {
        console.log("check3");
        return "position: fixed !important; bottom:0px !important;width: 100%;";
      }
    }
  },
  methods: {
    pushToPage(route) {
      this.$router.push({
        path: `/${route}`,
        name: route
      });
    }
  }
};
</script>
