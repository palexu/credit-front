<template>
  <div id="script" class="section category-section solid-pale-bg fade">
    <div class="inner">
      <div class="container">
        <!--<h1>征信数据</h1>-->

        <div class="panel panel-default">
          <div class="panel-body">
            <ul class="nav nav-pills ">
              <li role="presentation" v-bind:class="{active: isShowData}"><a>征信计算规则管理</a></li>
              <li role="presentation"><a>刷新</a></li>
            </ul>
          </div>
        </div>

        <show-template-panel></show-template-panel>


      </div> <!-- end .container -->
    </div> <!-- end .inner -->
  </div> <!-- end .section -->
</template>

<script>
  import axios from "axios";
  import ShowTemplatePanel from "./ShowTemplatePanel";

  export default {
    components: {ShowTemplatePanel},
    name: "factor-script-page",
    data() {
      return {
        isShowData: true,
        factorList: [],
        scriptList: []
      }
    }
  }
</script>

<style scoped>

</style>
