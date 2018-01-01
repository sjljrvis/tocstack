<template>
  <div>

    <md-layout md-gutter>

      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center" md-align="center">
        <h4>Name</h4>
      </md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center" md-align="start" >
        <h3>{{payload.repositoryName}}</h3>
      </md-layout>

    </md-layout>
    
    <md-layout md-gutter>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-align="center">
        <h4>Info</h4>
      </md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center" md-align="start">

        <md-list>
          <md-list-item>
            <h5>Language -{{payload.language}}</h5>
          </md-list-item>
          <md-list-item>
            <h5>Repositoryname -{{payload.repositoryName}}</h5>
          </md-list-item>
          <md-list-item>
            <h5>Containername -{{payload.containerName}}</h5>
          </md-list-item>
          <md-list-item>
            <h5>Git clone url -{{payload.path}}</h5>
          </md-list-item>
        </md-list>
      </md-layout>
    </md-layout>
  
    <md-layout md-gutter>

      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center" md-align="center">
        <h4>Maintainance mode</h4>
      </md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center" md-align="start">
      <md-switch md-theme="green" @change = "open" id="my-test5" name="my-test5" class="md-primary"></md-switch>
      </md-layout>

    </md-layout>
   
    <md-layout md-gutter>

      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center" md-align="center">
        <h4>Delete App</h4>
      </md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center" md-align="center">
        <md-button style='background-color : #ff323d ; color : #FFFFFF' class="md-raised" @click="deleteRepository">Delete</md-button>
      </md-layout>

    </md-layout>
 <md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration">
    <span style = "color : #FFFFFF">{{snackbarMessage}}</span>
    <md-button class="md-accent" md-theme="light-blue" @click="$refs.snackbar.close()">Retry</md-button>
  </md-snackbar>
  </div>
</template>


<script>
import { makeRequest } from "../../../../helper/internet.js";

export default {
  data: () => ({
    payload: {
      repositoryName: "",
      userName: "",
      language: "",
      containerName: "",
      path: "",
      pathDocker: "",
      date: "",
      _id: ""
    },
    vertical: "top",
    horizontal: "right",
		duration: 4000,
		snackbarMessage : ""
  }),
  beforeMount() {},
  mounted() {
    this.payload = this.$store.getters.repositoryItem;
  },
  beforeDestroy() {},
  destroyed() {},
  components: {},
  computed: {},
  methods: {
    open() {
      this.$refs.snackbar.open();
    },
    pushToDevdashboard() {
      this.$router.push({
        path: `/devdashboard`,
        name: `devdashboard`
      });
    },
    deleteRepository() {
      const { repositoryName, _id } = this.payload;
      const payloadRepository = { repositoryName };
      makeRequest(`/deleterepository/${_id}`, "POST", null, payloadRepository)
        .then(result => {
          let res = result.res;
          if (res.data.status != true) {
						this.snackbarMessage = res.result.message ;
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

</style>