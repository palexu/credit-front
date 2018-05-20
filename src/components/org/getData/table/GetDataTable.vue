<template>
  <div class="inner" style="padding-top: 40px;padding-bottom: 40px">
    <div class="container">

      <div class="section-top-content flex items-center">
        <h1>征信数据</h1>
        <span>{{provider.bizTypes}}</span>
        <!--<a href="#0">View all jobs<i class="ion-ios-arrow-thin-right"></i></a>-->
      </div> <!-- end .section-top-content -->

      <div class="jobs-table">

        <div class="table-header">
          <div class="table-cells flex">
            <div class="job-title-cell"><h6>数据提供方</h6></div>
            <div class="job-type-cell"><h6>可用数据条数</h6></div>
            <div class="location-cell"><h6>每千条token</h6></div>
            <div class="expired-date-cell"><h6>更新时间</h6></div>
            <div class="salary-cell"><h6>开始获取</h6></div>
          </div> <!-- end .table-cells -->
        </div> <!-- end .table-header -->

        <div class="table-row" v-for="data in provider.providerList">
          <div class="table-cells flex no-wrap">

            <div class="cell job-title-cell flex no-column no-wrap">
              <div class="cell-mobile-label">
                <h6>提供者</h6>
              </div> <!-- end .cell-label -->
              <img src="static/images/company-logo01.jpg" alt="company-logo" class="img-responsive">
              <div class="content">
                <h4><a href="#">{{data.name}}</a></h4>
                <p class="small">{{data.desc}}</p>
              </div> <!-- end .content -->
            </div> <!-- end .job-title-cell -->

            <div class="cell job-type-cell flex no-column">
              <div class="cell-mobile-label">
                <h6>数据条数</h6>
              </div> <!-- end .cell-label -->
              <button type="button" class="button full-time">{{data.count}}</button>
            </div> <!-- end .job-type-cell -->

            <div class="cell location-cell flex no-column no-wrap">
              <div class="cell-mobile-label">
                <h6>每千条token</h6>
              </div> <!-- end .cell-label -->
              <p class="text-center">{{data.price}}</p>
            </div> <!-- end .location-cell -->

            <div class="cell expired-date-cell flex no-column no-wrap">
              <div class="cell-mobile-label">
                <h6>更新时间</h6>
              </div> <!-- end .cell-label -->
              <p>{{data.gmtCreated}}</p>
            </div> <!-- end .expire-date-cell -->

            <div class="cell salary-cell flex no-column no-wrap">
              <div class="cell-mobile-label">
                <h6>详情</h6>
              </div> <!-- end .cell-label -->
              <button data-toggle="modal" data-target="#myModal" v-on:click="providerSelected=data.name">点击查看</button>
            </div> <!-- end .salray-cell -->

          </div> <!-- end .table-cells -->
        </div> <!-- end .table-row -->

      </div> <!-- end .jobs-table -->


      <!-- Modal -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog  modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-body">

              <div class="row page-header">
                <h1>如何获取数据</h1>
                <!--todo code需要完善-->
                <p>
                  发送GET请求至<code>http://localhost:8080/api/data/get/{{providerSelected}}/{subject}/{{provider.bizTypes}}</code>
                </p>
                <p>将{subject}替换为所要查询的主体，可以是身份证号、统一社会信用号，数据将以<code>json</code>格式返回</p>
              </div>

              <div class="panel panel-default" style="height: 400px;border-radius: 2px;border-color: #0b0b0b;">
                <div class="panel-heading">
                  <div class="alert alert-success" role="alert">每日可以进行限额100次以内的免费试用(剩余{{this.trailLimit}}次)</div>
                </div>
                <div class="panel-body">
                  <div class="col-md-6">
                    <p>可以在此进行试用，输入关键字并搜索。</p>
                    <p>注：此操作不会消耗你的token</p>
                    <form class="form-inline subscribe-form flex no-column no-wrap items-center">
                      <div class="form-group">
                        <input type="text" class="form-control" placeholder="输入需要查询的主体，如身份证或统一社会信用号" v-model="subject">
                      </div> <!-- end .form-group -->
                      <button class="button" v-on:click="getData(subject,$event)"><i
                        class="ion-ios-arrow-thin-right"></i>
                      </button>
                    </form>
                  </div>
                  <div class="col-md-6">
                    <textarea rows="10" v-model="creditData" placeholder="征信数据"></textarea>
                  </div>
                </div>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </div> <!-- end .container -->
  </div> <!-- end .inner -->
</template>

<script>
  import axios from "axios";

  export default {
    name: "get-data-table",
    props: ["p_provider"],
    data() {
      return {
        /**
         *展示原始数据用
         */
        creditData: null,
        provider: {},

        /**
         * 查数据需要
         */
        subject: null,
        providerSelected: null,
        trailLimit: 100
      }
    },
    methods: {
      getData: function (idcard, event) {
        event.preventDefault();
        if (this.providerSelected != null && this.provider.bizTypes != null && this.trailLimit > 0) {
          this.trailLimit--;
          axios.get('/api/creditData/trial/get/' + this.providerSelected + '/' + idcard + '/' + this.provider.bizTypes).then(res => {
            console.log(res.data);
            this.creditData = JSON.stringify(res.data, null, 4);
          }).catch(excption => {
            console.log(excption)
          });
        } else {
          alert("今日免费查询次数已用完");
          // console.log(this.providerSelected, this.provider.bizTypes)
        }
      }
    },
    watch: {
      p_provider: function () {
        this.provider = this.p_provider;
      }
    }
  }
</script>

<style scoped>
  /*.modal-body {*/
  /*height: 500px;*/
  /*}*/

  /*.modal-dialog {*/
  /*height: 550px;*/
  /*}*/
</style>
