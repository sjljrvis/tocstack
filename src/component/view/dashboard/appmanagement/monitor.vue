<template>
  <div>
    <md-layout md-gutter>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-align="center">
        <h4>App Status</h4>
      </md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center" md-align="start">

        <md-list>
          <md-list-item>
            <h4 v-if="info.State && info.State.Running">Running </h4>
            <h4 v-else> Stopped </h4>
          </md-list-item>
          <md-list-item>
            <h4>Process Id - {{info.State.Pid}}</h4>
          </md-list-item>
          <md-list-item>
            <h4>Shared Memory - {{info.HostConfig.ShmSize}} KB </h4>
          </md-list-item>
          <md-list-item>
            <h4>IP Address - {{info.NetworkSettings[`${this.repositoryName}docker_default`].IPAddress}}</h4>
          </md-list-item>
          <md-list-item>
            <h4>MAC Address - {{info.NetworkSettings[`${this.repositoryName}docker_default`].MacAddress}}</h4>
          </md-list-item>
        </md-list>
      </md-layout>
    </md-layout>

    <!-- <md-layout md-gutter>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-align="center">
        <h4>View Logs</h4>
      </md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center" md-align="start">
        <md-layout md-column>
          <md-layout>
            <md-button @click="fetchLogs()" style='background-color : #ff323d ; color : #FFFFFF' class="md-raised">View</md-button>
          </md-layout>

          <md-layout>
            <div style="background : #00162d ; color : #03bc41 ;  height: 450px ;overflow: scroll;">
              {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}}
               {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} 
               {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} 
               {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} 
               {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} 
               {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}}
            </div>
          </md-layout>
        </md-layout>
      </md-layout>
    </md-layout>

    <md-layout md-gutter>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-align="center">
        <h4>View Commits</h4>
      </md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center" md-align="start">
        <md-layout md-column>
          <md-layout>
            <md-button @click="fetchLogs()" style='background-color : #ff323d ; color : #FFFFFF' class="md-raised">View</md-button>
          </md-layout>

          <md-layout>
            <div style="background : #00162d ; color : #03bc41 ;  height: 450px ;overflow: scroll;">
              {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}} {{logs}}
            </div>
          </md-layout>
        </md-layout>
      </md-layout>
    </md-layout> -->

  </div>
</template>


<script>
import { makeRequest } from "../../../../helper/internet.js";
export default {
  data: () => ({
    info: {
      State: { Pid: 0 },
      HostConfig: { ShmSize: 0 },
      NetworkSettings: { }
    },
		logs: "" ,
		repositoryName : ""
  }),
  beforeMount() {},
  mounted() {
		this.repositoryName = this.$store.getters.repositoryItem.repositoryName;
		this.monitorContainer();
  },
  beforeDestroy() {},
  destroyed() {},
  components: {},
  computed: {},
  methods: {
    fetchLogs() {
      this.logs =
        '{"log":"Server running at http://localhost:3000\n","stream":"stdout","time":"2017-09-04T11:15:39.859242485Z"}';
    },
    monitorContainer() {
      makeRequest(`/monitorcontainer?containerName=${this.repositoryName}docker_web_1`, "GET", null, null)
        .then(result => {
          let res = result.res;
          if (!result.error && res) {
            let _info = res.data[0];
            this.info = Object.assign({}, _info);
            console.log("............................\n", _info , this.info.NetworkSettings[`${this.repositoryName}docker_default`]);
          }
        })
        .catch(reject => console.log(reject));
    }
  }
};
</script>
<style>

</style>