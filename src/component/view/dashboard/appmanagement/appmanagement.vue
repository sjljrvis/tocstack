<template>
  <div class='base-div'>

    <md-card class='dashboard-card'>
      <md-card-header>
        <div class="md-title">
          <h3>Posts</h3>
        </div>
      </md-card-header>

      <md-card-content>
        <md-tabs md-fixed style="color : #000000">
          <md-tab md-label="Deploy" style="background : #efefef">
           
            <Deploy></Deploy>

          </md-tab>

          <md-tab md-label="Monitor">
            <md-layout>
            <Monitor></Monitor>
            </md-layout>
          </md-tab>

          <md-tab md-label="Add config ">
            <Addconfig></Addconfig>
          </md-tab>

          <md-tab md-label="Settings">
            <Settings></Settings>
          </md-tab>

        </md-tabs>
      </md-card-content>

    </md-card>

  </div>
</template>


<script>
import Deploy from './deploy.vue'
import Monitor from './monitor.vue'
import Addconfig from './addconfig.vue'
import Settings from './settings.vue'
export default {
  data: () => ({
 
  }),
  beforeMount() {
    let item = this.$route.params.item;
    if (item === undefined) {
      this.$router.push({
        path: '/devdashboard', name: 'devdashboard',
      });
      return
    }
    this.$store.dispatch('setRepositoryItem', item)
    console.log("Store App",this.$store)   
  },
  mounted() {

  },
  beforeDestroy() {
  },
  destroyed() {
  },
  components: {
    Deploy, Monitor, Addconfig, Settings
  },
  computed: {
  },
  methods: {

  }
}
</script>
<style>

</style>