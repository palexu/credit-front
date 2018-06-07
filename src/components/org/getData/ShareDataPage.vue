<template>
  <div id="shareData" class="tab-pane how-it-works-tab-content fade">
    <div class="section">
      <div class="inner">
        <div class="container">

          <div class="row page-header">
            <h1>1. 填写自然人三要素</h1>
            <div class="row">
              <form class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-1 control-label">姓名*</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control" placeholder="姓名" v-model="naturePerson.name">
                  </div>
                  <label class="col-sm-1 control-label">手机号*</label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control" placeholder="手机号" v-model="naturePerson.phone">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-1 control-label">身份证*</label>
                  <div class="col-sm-11">
                    <input type="text" class="form-control" placeholder="身份证" v-model="naturePerson.idCard">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-1 control-label">征信场景*</label>
                  <div class="col-sm-11">
                    <select class="form-control" style="width: 400px;" v-model="bizTypes">
                      <option v-for="bt in getBizTypes()">{{bt}}</option>
                    </select>
                  </div>
                </div>

              </form>
            </div>
          </div>

          <div class="row page-header">
            <h1>2. 添加征信记录</h1>
            <div class="panel panel-default">

              <form class="row">
                <div class="form-group">
                  <div class="col-sm-4">
                    <input type="text" class="form-control" placeholder="征信数据类型*" v-model="dataType">
                  </div>
                </div>
              </form>

              <div class="panel-body">

                <ul class="nav nav-pills">
                  <li role="presentation">
                    <a class="btn" v-on:click="addRow">添加一条记录</a>
                  </li>
                  <li role="presentation">
                    <a class="btn" v-on:click="clearAllRow">清除所有</a>
                  </li>
                </ul>

                <div v-for="(row,idx) in creditRows">
                  <div class="row"
                       style="border-style:solid;border-width:1px;border-color:darkgrey;padding: 20px;margin-bottom: 10px">
                    <button class="btn btn-default" v-on:click="deleteRow(idx)">移除本条</button>
                    <form class="form-horizontal">

                      <div class="form-group">
                        <label class="col-sm-2 control-label">编号</label>
                        <div class="col-sm-10" style="margin-right: 0px;">
                          <input type="text" class="form-control" placeholder="时间" v-bind:value="idx+1" readonly>
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="col-sm-2 control-label">征信记录时间*</label>
                        <div class="col-sm-4" style="margin-right: 0px;">
                          <input type="text" class="form-control" placeholder="时间" v-model="row.gmtCreated">
                        </div>
                        <label class="col-sm-2 control-label">地点*</label>
                        <div class="col-sm-4">
                          <input type="text" class="form-control" placeholder="地点" v-model="row.address">
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="col-sm-2 control-label">征信记录内容*</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" placeholder="征信记录的内容" v-model="row.value">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">备注</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" placeholder="备注" v-model="row.description">
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row page-header">
            <h1>3. 预览并提交</h1>
            <div class="col-sm-12">
              <textarea rows="10">{{mkPayload()}}</textarea>
            </div>
          </div>
          <button class="btn btn-success" v-on:click="submitCreditData()">点击提交</button>

        </div> <!-- end .container -->
      </div> <!-- end .inner -->
    </div> <!-- end .section -->
  </div> <!-- end .how-it-works-tab-content -->
</template>

<script>
  import axios from "axios";

  export default {
    name: "share-data-page",
    data() {
      return {
        creditRows: [
          {
            value: "",
            description: "",
            address: "",
            gmtCreated: new Date()
          }
        ],
        naturePerson: {
          name: "",
          idCard: "",
          phone: ""
        },
        bizTypes: "creditCard",
        dataType: ""
      }
    },
    methods: {
      addRow: function () {
        this.creditRows.unshift({gmtCreated: new Date()});
      },
      deleteRow: function (idx) {
        alert(idx);
        this.creditRows.splice(idx, 1)
      },
      clearAllRow: function () {
        this.creditRows = [{
          gmtCreated: new Date()
        }];
      },
      getBizTypes: function () {
        return ["sharedBike", "creditCard"];
      },
      mkPayload: function () {
        let rowsMap = {};
        console.log(this.getBizType());
        rowsMap[this.dataType] = this.creditRows;

        let user = JSON.parse(window.sessionStorage.getItem("user"));

        let payload = {
          naturePerson: this.naturePerson,
          provider: user.username,
          subject: this.naturePerson.idCard,
          bizType: this.getBizType(),
          datas: [{
            dataType: "",
            data: rowsMap
          }]
        };
        console.log(payload);
        return payload;
      },
      getBizType: function () {
        return this.bizTypes;
      },
      submitCreditData: function () {
        let payload = this.mkPayload();
        axios.post("/api/data/save", payload).then(res => {
          if(res.data.success){
            alert("保存成功");
          }else{
            alert(res.data.msg)
          }

        })
      }
    }
  }
</script>

<style scoped>
  .form-control {
    height: 2.7em;
    width: 30px;
  }
</style>
