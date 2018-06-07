<template>
  <div>
    <!--<div id="myChart" :style="{width: '500px', height: '500px'}"></div>-->
    <div class="row">
      <!--<simple-pie :pid="'pie1'" :title="'借贷比率'" :pieName="'借贷项目'"></simple-pie>-->
      <simple-bubble-gradient :pid="'pie2'"></simple-bubble-gradient>
    </div>

  </div>

</template>

<script>
  import SimplePie from "./SimplePie";
  import SimpleBubbleGradient from "./SimpleBubbleGradient";

  export default {
    components: {
      SimpleBubbleGradient,
      SimplePie},
    name: 'demo-one'

  }
</script>

<style scoped>

</style>
