<template>
  <div>

    <md-layout md-gutter>

      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center" md-align="center">
        <h3>Name</h3>
      </md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center" md-align="start" >
        <h3>{{payload.repositoryName}}</h3>
      </md-layout>

    </md-layout>
    <hr>
    <md-layout md-gutter>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-align="center">
        <h3>Info</h3>
      </md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center" md-align="start">

        <md-list>
          <md-list-item>
            <h4>Language -{{payload.language}}</h4>
          </md-list-item>
          <md-list-item>
            <h4>Repositoryname -{{payload.repositoryName}}</h4>
          </md-list-item>
          <md-list-item>
            <h4>Containername -{{payload.containerName}}</h4>
          </md-list-item>
          <md-list-item>
            <h4>Git clone url -{{payload.path}}</h4>
          </md-list-item>
        </md-list>
      </md-layout>
    </md-layout>
    <hr>
    <md-layout md-gutter>

      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center" md-align="center">
        <h3>Maintainance mode</h3>
      </md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center" md-align="start">
      <md-switch md-theme="green" @change = "open" id="my-test5" name="my-test5" class="md-primary"></md-switch>
      </md-layout>

    </md-layout>
    <hr>
    <md-layout md-gutter>

      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center" md-align="center">
        <h3>Delete App</h3>
      </md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center" md-align="center">
        <md-button style='background-color : #ff323d ; color : #FFFFFF' class="md-raised">Delete</md-button>
      </md-layout>

    </md-layout>
 <md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration">
    <span style = "color : #FFFFFF">App put to maitainance mode</span>
    <md-button class="md-accent" md-theme="light-blue" @click="$refs.snackbar.close()">Retry</md-button>
  </md-snackbar>
  </div>
</template>


<script>
export default {
  data: () => ({
    payload: {
      repositoryName: '',
      userName: '',
      language: '',
      containerName: '',
      path: '',
      pathDocker: '',
      date: '',
      _id: ''
    },
    vertical: 'top',
    horizontal: 'right',
    duration: 4000
  }),
  beforeMount() {

  },
  mounted() {
    this.payload = this.$store.getters.repositoryItem
    console.log("Settings", this.$store.getters.repositoryItem)

  },
  beforeDestroy() {
  },
  destroyed() {
  },
  components: {

  },
  computed: {
  },
  methods: {
 open() {
      this.$refs.snackbar.open();
    }
  }
}
</script>
<style>

</style>