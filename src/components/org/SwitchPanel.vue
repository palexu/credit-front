<template>
  <div class="section tabs-section about-page ">

    <ul class="nav nav-tabs jobpress-dynamic-tabs flex space-center items-center no-column">
      <li class="active"><a data-toggle="tab" href="#getData"><i class="ion-ios-glasses-outline"></i>获取征信数据</a></li>
      <li><a data-toggle="tab" href="#shareData"><i class="ion-ios-cog-outline"></i>上传征信数据</a></li>
      <li><a data-toggle="tab" href="#script"><i class="ion-ios-person-outline"></i>创造数据价值</a></li>
      <li><a href="#"><i class="ion-ios-help-empty"></i>文档</a></li>
      <li><a href="#"><i class="ion-ios-email-outline"></i>Contact Us</a></li>
    </ul> <!-- end .jobpress-dynamic-tabs -->

    <div class="tab-content jobpress-dynamic-tabs-content">
      <get-data-page></get-data-page>
      <share-data-page></share-data-page>
      <factor-script-page></factor-script-page>
    </div> <!-- end .team-tab-content -->

    <!--<div id="faq" class="tab-pane faq-tab-content fade">-->
      <!--<h3>Menu 2</h3>-->
      <!--<p>Some content in menu 2.</p>-->
    <!--</div>-->

    <!--<div id="contact-us" class="tab-pane contact-us-tab-content fade">-->
      <!--<h3>Menu 2</h3>-->
      <!--<p>Some content in menu 2.</p>-->
    <!--</div>-->

  </div>
</template>

<script>
  import GetDataPage from "./getData/GetDataPage";
  import ShareDataPage from "./getData/ShareDataPage";
  import FactorScriptPage from "./script/FactorScriptPage";

  export default {
    components: {
      FactorScriptPage,
      ShareDataPage,
      GetDataPage
    },
    name: "switch-panel"
  }
</script>

<style scoped>

</style>
