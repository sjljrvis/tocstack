<template>
  <div>
     {{info}}
  </div>
</template>


<script>
import { makeRequest } from '../../../../helper/internet.js';
export default {

  data: () => ({
    info: {
    }
    }),
    beforeMount() {

    },
    mounted() {
      this.monitorContainer();
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
      monitorContainer() {
        makeRequest('/monitorcontainer', 'GET', null, null)
          .then((result) => {
            let res = result.res;
            if (!result.error && res) {
              console.log("Response", res)
              let _info = res.data[0];
              this.info = Object.assign({}, _info)
              console.log("Info" ,this.info)


            }
          })
          .catch(reject => console.log(reject));
      }
    }
  }
</script>
<style>

</style>