<template>
  <div id="script" class="section category-section solid-pale-bg fade">
    <div class="inner">
      <div class="container">
        <!--<h1>征信数据</h1>-->

        <div class="panel panel-default">
          <div class="panel-body">
            <ul class="nav nav-pills ">
              <li role="presentation" v-bind:class="{active: isShowData}"><a v-on:click="isShowData=true">因子</a></li>
              <li role="presentation" v-bind:class="{active: !isShowData}"><a v-on:click="isShowData=false">脚本</a></li>
              <li role="presentation" v-bind:class="{active: isShowData}"><a v-on:click="isShowData=true">模板</a></li>
              <li role="presentation"><a v-on:click="getDataWithHistory">刷新</a></li>
            </ul>
          </div>
        </div>

        <div
          id="show_data_panel"
          class="panel panel-default"
          v-if="isShowData">
          <div class="panel-body">
            {{creditData}}
          </div>
        </div>

        <div id="show_history_panel" class="panel panel-default"
             v-for="history in histories" v-if="!isShowData">
          <div class="panel-body">
            <div class="row">
              <div class="col-md-1 show_history_panel_ts">
                <p>{{new Date(history.gmtCreated).toLocaleDateString()}}</p>
                <p>{{new Date(history.gmtCreated).toLocaleTimeString()}}</p>
              </div>
              <div class="col-md-6">
                <p class="lead">{{history.provider}} </p>
                <p v-for="opPair in history.opPairList">{{opPair.opType}} <code>{{opPair.opContent}}</code></p>
                <br/>
                指纹:{{history.print}}
              </div>
            </div>
          </div>
        </div>


        <div class="panel panel-default">
          <div class="panel-body">
            <ul class="nav nav-pills nav-stacked">
              <li v-for="(value,key) in rst" role="presentation" v-bind:class="{active:isActive(key)}">
                <a v-on:click="setCurrentShowBizType(key)">{{key}}</a>
              </li>
            </ul>
          </div>
        </div>


      </div> <!-- end .container -->
    </div> <!-- end .inner -->
  </div> <!-- end .section -->
</template>

<script>
  export default {
    name: "factor-script-page"
  }
</script>

<style scoped>

</style>
