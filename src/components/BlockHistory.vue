<template>
  <div id="block_history" class="section category-section solid-pale-bg">
    <div class="inner">
      <div class="container">
        <!--<h1>征信数据</h1>-->

        <div class="row">
          <div class="col-md-10">

            <div class="panel panel-default">
              <div class="panel-body">
                <ul class="nav nav-pills ">
                  <li role="presentation" v-bind:class="{active: isShowData}"><a v-on:click="isShowData=true">数据</a>
                  </li>
                  <li role="presentation" v-bind:class="{active: !isShowData}"><a v-on:click="isShowData=false">修改历史</a>
                  </li>
                  <li role="presentation"><a v-on:click="getDataWithHistory">刷新</a></li>
                </ul>
              </div>
            </div>

            <div
              id="show_data_panel"
              class="panel panel-default"
              v-if="isShowData">
              <div class="panel-body">
                <simple-data-collapse :creditData="creditData"></simple-data-collapse>
              </div>
            </div>

            <div v-show="!showIframe" class="panel panel-default">
              <div class="panel-body">
                <button class="btn btn-success" v-on:click="switchIframe">关闭</button>
              </div>
              <div class="panel-body" style="height: 500px">
                <iframe style="width: 100%;height: 100%" src="" name="iframe1"></iframe>
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
                  <div class="col-md-10">
                    <p class="lead">{{history.provider}} </p>
                    <p v-for="opPair in history.opPairList">{{opPair.opType}} <code>{{opPair.opContent}}</code></p>
                    <br/>
                    指纹:{{history.print}} <a target="iframe1"
                                            v-on:click="switchIframe"
                                            :href="'http://localhost:8000/#/transaction/'+history.trxHash">(点击查看区块链交易记录)</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="col-md-2">

            <div class="panel panel-default">
              <div class="panel-body">
                <ul class="nav nav-pills nav-stacked">
                  <li v-for="(value,key) in rst" role="presentation" v-bind:class="{active:isActive(key)}">
                    <a v-on:click="setCurrentShowBizType(key)">{{key}}</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>


      </div> <!-- end .container -->
    </div> <!-- end .inner -->
  </div> <!-- end .section -->
</template>

<script>
  import axios from "axios";
  import SimpleDataCollapse from "./report/SimpleDataCollapse";

  export default {
    components: {SimpleDataCollapse},
    name: "block-history",
    props: [
      "provider",
      "subject",
      "bizType"
    ],
    data() {
      return {
        //控制界面
        isShowData: true,
        showIframe: true,
        //数据
        rst: {
          "sharedBike": {
            creditData: "暂无数据",
            histories: [
              {
                provider: "ofo共享单车",
                opPairList: [
                  {
                    opType: "增加",
                    opContent: "3条出行记录",
                  },
                  {
                    opType: "增加",
                    opContent: "3条出行记录",
                  }
                ],
                gmtCreated: "2018-04-15",
                print: "hsusksmslss7897897986689af89as7f9sayf98a"
              }
            ]
          },
          "sharedBikes2": {
            creditData: "暂无数据",
            histories: [
              {
                provider: "ofo共享单车",
                opPairList: [
                  {
                    opType: "增加",
                    opContent: "3条出行记录",
                  },
                  {
                    opType: "增加",
                    opContent: "3条出行记录",
                  }
                ],
                gmtCreated: "2018-04-15",
                print: "hsusksmslss7897897986689af89as7f9sayf98a"
              }
            ]
          }
        },
        currentShowBizType: null
      }
    },
    computed: {
      histories: function () {
        if (this.currentShowBizType == null)
          return null;
        return this.rst[this.currentShowBizType].histories;
      },
      creditData: function () {
        if (this.currentShowBizType == null)
          return null;
        console.log("hellll;");
        console.log(this.rst);
        return this.rst[this.currentShowBizType].creditData;
      }
    },
    /**
     * 当组件挂载时进行数据的加载
     */
    mounted: function () {
      this.getDataWithHistory();
    },
    methods: {
      getDataWithHistory: function () {
        let path = null;
        if (this.provider == null) {
          path = '/api/creditData/getWithHistory/' + this.subject + '/' + this.bizType;
        } else {
          path = '/api/creditData/getWithHistory/' + this.provider + '/' + this.subject + '/' + this.bizType;
        }
        console.log(path);
        axios.get(path).then(res => {

          console.log(res.data);
          if (!res.data.success) {
            alert(res.data.msg);
            return
          }
          this.rst = res.data.data;

          for (let key in this.rst) {
            this.currentShowBizType = key;
            break;
          }

        }).catch(excption => {
          console.log(excption)
        });
      },
      setCurrentShowBizType: function (key) {
        if (key == null)
          return;
        this.currentShowBizType = key;
      },
      isActive(key) {
        if (this.currentShowBizType == null) {
          return false;
        }
        if (this.currentShowBizType == key) {
          return true;
        } else {
          return false;
        }
      },
      switchIframe(){
        this.showIframe=!this.showIframe;
      }
    },
  }
</script>

<style scoped>
  #block_history {
    min-height: 800px;
  }

  .show_history_panel_ts {
    min-width: 130px;
    /*border-right: 2px #0b0b0b;*/
    /*border-right-style: double;*/
  }

  #show_data_panel {
    min-height: 200px;
  }
</style>
