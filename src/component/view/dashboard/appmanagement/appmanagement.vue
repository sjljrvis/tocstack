<template>
  <div class='base-div'>
    <div style="padding-left: 37px;padding-right:37px">
      <md-layout md-gutter>
        <md-layout md-align="start" md-flex-xsmall="50" md-flex-small="50" md-flex-medium="50">
          <h3 style="color :#efefef !important;font-size:50px!important">
            <strong>tocstack</strong>
          </h3>
        </md-layout>
        <md-layout md-align="end" md-flex-xsmall="50" md-flex-small="50" md-flex-medium="50">
          <div>

            <md-menu md-align-trigger md-direction="bottom left" md-size="3">
              <md-avatar style="width:40px !important;height:40px !important;margin-top: 30px;">
                <img md-menu-trigger src="../../../../assets/sejal.png" alt="People">
              </md-avatar>
              <md-menu-content style = "width:auto !important;">
                <md-menu-item>
                  <md-icon>account_circle</md-icon> <span>Profile &nbsp;&nbsp;</span>
                </md-menu-item>
                <md-menu-item><md-icon>settings</md-icon> <span>Settings &nbsp;&nbsp;</span></md-menu-item>
                <md-menu-item><md-icon>subdirectory_arrow_right</md-icon> <span>Logout &nbsp;&nbsp;</span></md-menu-item>
              </md-menu-content>
            </md-menu>
          </div>
        </md-layout>
      </md-layout>
    </div>
    <md-card class='dashboard-card'>
      <md-card-header>
        <div class="md-title">
          <h3>My apps</h3>
        </div>
      </md-card-header>

      <md-card-content>
        <md-tabs md-fixed style="color : #000000">
          <md-tab md-label="Deploy" style="background : #efefef">

            <Deploy></Deploy>

          </md-tab>

          <md-tab md-label="Monitor">

            <Monitor></Monitor>

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
  },
  mounted() {
    this.$store.dispatch('setIsProgressVisible', false);
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
    openMenu() {
      console.log("hello")
    }
  }
}
</script>
<style>

</style>