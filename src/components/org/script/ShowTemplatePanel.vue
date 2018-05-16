<template>
  <div>
    <div
      id="show_template"
      class="panel panel-default">
      <div class="panel-body">
        <button data-toggle="modal" data-target="#addTemplateModal" v-on:click="clearTemplateForm">新增</button>
        <table class="table table-striped">
          <thead>
          <tr>
            <th>报告编号</th>
            <th>报告名</th>
            <th>业务类型</th>
            <th>创建时间</th>
            <th>更新时间</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="template in templateList.templateDos">
            <th scope="row">{{template.id}}</th>
            <td>{{template.name}}</td>
            <td>{{template.bizType}}</td>
            <td>{{template.gmtCreated}}</td>
            <td>{{template.gmtUpdated}}</td>
            <td>
              <a data-toggle="modal" data-target="#showTemplateModal" v-on:click="fillTemplateForm(template)">编辑</a>
              <a v-on:click="deleteTemplate(template.id)">删除</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!--编辑模版-->
    <div class="modal fade bs-example-modal-lg"
         id="showTemplateModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="myLargeModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">×</span></button>
            <h4 class="modal-title" id="myLargeModalLabel">Large modal</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-sm-2 control-label">报告编号</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" v-model="templateFormCopy.id" readonly>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">报告名</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" placeholder="报告名称" v-model="templateFormCopy.name">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">所属业务类型</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" placeholder="所属业务类型"
                         v-model="templateFormCopy.bizType">
                </div>
              </div>

              <div class="form-group">
                <label class="col-sm-2 control-label">关联因子</label>
                <div class="col-sm-10">
                  <div class="raw">
                    <button class="btn col-sm-2 col-sm-offset-10"
                            data-toggle="modal"
                            data-target="#factorForm"
                            v-on:click="clearFactorForm">添加因子
                    </button>
                    <table class="table col-sm-12">
                      <thead>
                      <tr>
                        <th>因子名</th>
                        <th>因子描述</th>
                        <th>因子内容</th>
                        <th>创建时间</th>
                        <th>更新时间</th>
                        <th>操作</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="factor in templateFormCopy.factorSelected">
                        <th scope="row">{{factor.name}}</th>
                        <td>{{factor.desc}}</td>
                        <td><a
                          v-on:click="fillFactorForm(templateFormCopy.id,factor.id)"
                          data-toggle="modal" data-target="#factorForm">点击查看因子内容</a></td>
                        <td>{{new Date(factor.gmtCreated).toLocaleDateString()}}</td>
                        <td>{{new Date(factor.gmtUpdated).toLocaleDateString()}}</td>
                        <td>
                          <a
                            v-on:click="fillFactorForm(templateFormCopy.id,factor.id)"
                            data-toggle="modal" data-target="#factorForm">编辑</a>
                          <a v-on:click="deleteFactor(factor.id)">删除</a>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>

            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" v-on:click="saveTemplate">保存</button>
          </div>
        </div>
      </div>
    </div>

    <!--新增模版-->
    <div class="modal fade bs-example-modal-lg"
         id="addTemplateModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="myLargeModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">×</span></button>
            <h4 class="modal-title">Large modal</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-sm-2 control-label">报告编号</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" v-model="templateFormCopy.id" readonly>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">报告名</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" placeholder="报告名称" v-model="templateFormCopy.name">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">所属业务类型</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" placeholder="所属业务类型"
                         v-model="templateFormCopy.bizType">
                </div>
              </div>

            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" v-on:click="saveTemplate">保存</button>
          </div>
        </div>
      </div>
    </div>

    <!--编辑因子-->
    <div id="factorForm" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog"
         aria-labelledby="myLargeModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">

          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">×</span></button>
            <h4 class="modal-title">Large modal</h4>
          </div>

          <div class="modal-body">
            <form class="form-horizontal">

              <div class="form-group">
                <input type="hidden" class="form-control" v-model="factorFormCopy.id">
                <label class="col-sm-2 control-label">因子名</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" placeholder="报告名称" v-model="factorFormCopy.name">
                </div>
              </div>

              <div class="form-group">
                <label class="col-sm-2 control-label">描述</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" placeholder="描述" v-model="factorFormCopy.desc">
                </div>
              </div>

              <input type="hidden" class="form-control" placeholder="所属业务类型" v-model="factorFormCopy.bizType">

              <div class="form-group">
                <label class="col-sm-2 control-label">因子计算内容</label>
                <div class="col-sm-10">
                  <textarea rows="20" class="form-control" placeholder="内容"
                            v-model="factorFormCopy.content"></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" v-on:click="saveFactor">保存</button>
          </div>
        </div>
      </div>
    </div>


  </div>

</template>

<script>
  import axios from "axios";

  export default {
    name: "show-template-panel",
    data() {
      return {
        templateList: {},
        factorForm: {},
        factorFormCopy: {},
        templateForm: {},
        templateFormCopy: {}
      }
    },
    mounted: function () {
      this.getTemplateList();
    },
    watch: {
      factorForm: function () {
        let copy = {};
        for (let key in this.factorForm) {
          copy[key] = this.factorForm[key]
        }
        this.factorFormCopy = copy;
      },
      templateForm: function () {
        if (this.templateForm === {}) {
          this.templateFormCopy = {};
        }
        let copy = {};
        for (let key in this.templateForm) {
          let value = this.templateForm[key];

          if (value instanceof Object) {
            console.log("deep copy");
            let mapCopy = {};
            copy[key] = mapCopy;
            for (let mkey in value) {
              console.log(mkey);
              console.log(value[mkey]);
              mapCopy[mkey] = value[mkey];
            }
          } else {
            copy[key] = value
          }

        }
        this.templateFormCopy = copy;
        console.log(copy);
      }
    },
    methods: {
      getTemplateList: function () {
        var user = JSON.parse(window.sessionStorage.getItem("user"));
        var username = user.username;
        if (username == null) {
          alert("未登陆或者未获取到pname")
        }
        axios.get("/api/provider/list/template?provider=" + username).then(response => {
          this.templateList = response.data;
        })
      },
      //========================================================================================
      fillFactorForm: function (tid, fid) {
        var factors = this.templateList.templateDos[tid].factorSelected;
        console.log(factors);
        for (var key in factors) {
          var factor = factors[key];
          if (factor.id == fid) {
            this.factorForm = factor;
            return
          }
        }
        //否则清空表单
        this.factorForm = {};
      },
      clearFactorForm: function (e) {
        e.preventDefault();
        this.factorForm = {};
        this.factorFormCopy = {};
      },
      saveFactor: function (templateId = null) {
        if (this.factorFormCopy.id == null) {
          if (this.templateFormCopy.id == null) {
            alert("templateId = null");
            return;
          }
          axios.post("/api/report/manage/factor/insert?templateId=" + this.templateFormCopy.id, this.factorFormCopy).then(response => {
            if (response.data) {
              this.getTemplateList();

              alert("success")
            } else {
              alert("false")
            }
          })
        } else {
          axios.post("/api/report/manage/factor/update", this.factorFormCopy).then(response => {
            if (response.data) {
              this.getTemplateList();

              alert("success")
            } else {
              alert("false")
            }
          })
        }
      },
      deleteFactor: function (fid) {
        axios.post("/api/report/manage/factor/delete?templateId=" + this.factorFormCopy.id + "&factorId=" + fid).then(response => {
          if (response.data) {
            this.getTemplateList();
            alert("success")
          } else {
            alert("false")
          }
        })
      },
      //========================================================================================
      fillTemplateForm(template) {
        console.log("fill template form");
        this.templateForm = template;
      },
      clearTemplateForm() {
        this.templateForm = {};
        this.templateFormCopy = {};
      },
      saveTemplate: function () {
        if (this.templateFormCopy.id == null) {
          var user = JSON.parse(window.sessionStorage.getItem("user"));
          axios.post("/api/report/manage/template/insert?provider=" + user.username, this.templateFormCopy).then(response => {
            if (response.data) {
              this.getTemplateList();
              alert("success")
            } else {
              alert("false")
            }
          })
        } else {
          axios.post("/api/report/manage/template/update", this.templateFormCopy).then(response => {
            if (response.data) {
              this.getTemplateList();
              alert("success")
            } else {
              alert("false")
            }
          })
        }

      },
      deleteTemplate: function (tid) {
        var user = JSON.parse(window.sessionStorage.getItem("user"));
        axios.post("/api/report/manage/template/delete?templateId=" + tid + "&pname=" + user.username).then(response => {
          if (response.data) {
            this.getTemplateList();
            alert("success")
          } else {
            alert("false")
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
