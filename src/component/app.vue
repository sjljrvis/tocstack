<template>
	<div >
		<!-- <SideBar></SideBar> -->
		<div :style="[ContentMargin]">
			<md-progress md-indeterminate class="md-warn" v-if="IsProgressVisible"></md-progress>
			<div class="content-div">
				<transition name="md-router" appear>
					<router-view></router-view>
				</transition>
			</div>
		</div>
		
	</div>
</template>


<script>
import SideBar from "./sideBar.vue";
import { deviceType } from "../helper/enum/deviceType.js";

export default {
  beforeMount() {
    let width = window.innerWidth;
    this.setDeviceType(width);
    window.onresize = e => {
      width = e.target.innerWidth || 900;
      this.setDeviceType(width);
    };
  },

  mounted() {
    if (this.IsLoginPage || this.DeviceType == deviceType.PHONE) {
      this.$store.dispatch("setSidebarMargin", 0);
    } else {
      this.$store.dispatch("setSidebarMargin", 0);
    }
  },

  beforeDestroy() {},
  destroyed() {},
  components: {
    SideBar
  },
  computed: {
    SideBarMargin() {
      return { "margin-left": `${this.$store.getters.appSideBarMargin}px` };
    },
    DeviceType() {
      return this.$store.getters.appDeviceType;
    },
    IsProgressVisible() {
      return this.$store.getters.appIsProgressVisible;
    },
    ContentMargin() {
      return { "margin-left": `${this.$store.getters.appContentMargin}px` };
    },
    IsLoginPage() {
      return this.$store.getters.appCurrentRoute == "/login" ? true : false;
    }
  },
  methods: {
    setDeviceType(width) {
      if (width < 600) {
        this.$store.dispatch("setDeviceType", deviceType.PHONE);
      } else if (width > 600 && width < 900) {
        this.$store.dispatch("setDeviceType", deviceType.TABLET);
      } else {
        this.$store.dispatch("setDeviceType", deviceType.DESKTOP);
      }
    }
  }
};
</script>

<style>
body {
  font-family: "Dosis", sans-serif;
  font-size: 20px;
  line-height: 1.42857;
  background-color: #ffffff;
  /* background-color:rgba(19, 41, 78, 1) */
}

.content-div {
  padding: 0px 0px 0px 0px;
  max-width: 1500px;
  margin: auto;
}

code {
  color: #03bc41 !important;
  background: #00162d !important;
}

.divider {
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.5;
  color: #eaecef;
  border-top: 1px solid #eaecef;
}

.footer {
  display: flex;
  flex: 1;
	cursor:default
}

.left-sidenav-container .md-theme-default.md-toolbar {
  background-color: #ffffff;
  color: #282828;
}

.md-theme-default.md-toolbar.admin-toolbar {
  position: fixed;
  z-index: 1500;
  left: 0;
  right: 0;
  top: 0;
  padding: 0px;
}

.top-fixed-bar {
  background: #607d8d;
  color: #ffffff;
  padding-left: 10px;
}

.md-sidenav-backdrop {
  display: none;
}

.md-sidenav.md-active .md-sidenav-content {
  box-shadow: 0 0px 10px -5px rgba(0, 0, 0, 0.2),
    0 10px 11px 0px rgba(0, 0, 0, 0.14), 0 6px 0px -2px rgba(0, 0, 0, 0.12);
}

.md-theme-default.md-list .md-list-item-expand .md-list-item-container {
  background: none !important;
}

.md-sidenav-content {
  position: fixed !important;
  z-index: 2000 !important;
}

.base-div {
  display: flex;
  flex: 1;
  flex-direction: column;
	cursor:default
}

.dashboard-card {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: 2em;
  margin-right: 2em;
	cursor:default
}

.md-toolbar.md-theme-default {
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.12) !important;
  height: 63.5px;
}

.top-left {
  padding-left: 10px;
}

.md-toolbar-container img {
  height: 51px;
  padding-left: 0px;
}

.md-card-actions .md-button {
  background-color: rgba(153, 153, 153, 0.2);
}

.md-card-image {
  width: 100%;
  height: 100%;
}

.md-card-actions {
  padding-left: 3px !important;
  padding-right: 3px !important;
}

.md-avatar {
  height: 40px !important;
  width: 42px !important;
}

.twitter-card {
  padding: 10px 10px 10px 10px !important;
}

.md-select-content,
.md-menu-content {
  width: 50% !important;
  max-width: 50% !important;
}

.md-theme-tocstack {
  background-color: #efefef;
}

.md-boards {
  height: auto !important;
}

p {
  color: #282828;
  font-size: 20px;
  text-align: left;
	cursor:default
}

img {
  max-width: 100%;
  font-style: italic;
  vertical-align: middle;
}

.code-snippet {
  display: block;
  height: 300px !important;
  width: 400px !important;
}

span {
  color: #000000;
}
.md-tabs-navigation .md-tab-indicator {
  background-color: #ff5722 !important;
}
h2 {
  font-size: 45px !important;
  margin-top: 20px !important;

  margin-bottom: 10px !important;

  font-family: inherit !important;

  font-weight: 500 !important;

  line-height: 1.1 !important;

  color: inherit !important;

  text-align: center !important;
	cursor:default
}

h3 {
  font-size: 30px !important;
  margin-top: 20px !important;

  margin-bottom: 10px !important;

  font-family: inherit !important;

  font-weight: 500 !important;

  line-height: 1.1 !important;

  color: inherit !important;
	cursor:default

  /* text-align: center !important */
}

h4 {
  font-size: 20px !important;
  margin-top: 20px !important;

  margin-bottom: 10px !important;

  font-family: inherit !important;

  font-weight: 500 !important;

  line-height: 1.1 !important;

  color: inherit !important;
	cursor:default

  /* text-align: center !important */
}
h5 {
  font-size: 15px !important;
  margin-top: 20px !important;

  margin-bottom: 10px !important;

  font-family: inherit !important;

  font-weight: 500 !important;

  line-height: 1.1 !important;

  color: inherit !important;
	cursor:default

  /* text-align: center !important */
}
.material-icons-custom {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 96px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
}

.md-row {
  padding-bottom: 25px;
}
.md-tab-header {
  background: #ffffff !important;
}
pre {
  white-space: pre-wrap;
  word-wrap: normal;
  word-break: normal;
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857;
  border: 1px solid #eef1f6;
  border-radius: 4px;
  color: #596981;
  background-color: #f5f7fa;
}
.code {
	font-family: monospace;
  word-wrap: normal;
  word-break: normal;
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857;
  border: 1px solid #eef1f6;
  border-radius: 4px;
  color: #596981;
  background-color: #f5f7fa;
}
@media only screen and (max-width: 500px) {
    .code {
        overflow-x: scroll; 
    }
		.parent-code{
			width: 300px
		}
}
</style>

