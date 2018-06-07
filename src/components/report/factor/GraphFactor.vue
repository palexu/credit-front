<template>
  <div class="cell palexu-cell-6 flex no-column no-wrap">
    <div v-for="factor in pair">
      <!--{{factor}}-->
      <!--饼图-->
      <simple-pie v-if="isPie(factor.desc)" :pid="factor.name" :title="factor.name" :pieName="factor.name"></simple-pie>
      <!--泡泡图-->
      <simple-bubble-gradient v-if="isBubble(factor.desc)" :pid="factor.name"
                              :title="factor.name"></simple-bubble-gradient>
    </div>
  </div>

</template>

<script>

  import SimplePie from "../../charts/SimplePie";
  import SimpleBubbleGradient from "../../charts/SimpleBubbleGradient";

  export default {
    name: "graph-factor",
    components: {
      SimpleBubbleGradient,
      SimplePie
    },
    props: ["pair"],
    methods: {
      isPie: function (desc) {
        return desc.indexOf("pie") > 0;
      },
      isBubble: function (desc) {
        return desc.indexOf("bubble") > 0;
      }
    }
  }
</script>

<style scoped>
  .palexu-cell-6 {
    flex: 0 50%;
    flex-grow: 1;
  }

  .palexu-cell-12 {
    flex: 0 100%;
  }
</style>
