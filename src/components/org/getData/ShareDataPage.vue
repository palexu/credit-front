<template>
  <div id="shareData" class="tab-pane how-it-works-tab-content fade">
    <div class="section">
      <div class="inner">
        <div class="container">

          <div class="row page-header">
            <h1>如何上传数据</h1>
            <p>
              发送POST请求至<code>http://localhost:8080/api/data/share</code></p>
            <p>payload为<code>json</code>格式</p>
            {
              subject:"...",
              provider:"...",
              data:"..."
            }
          </div>

          <div class="panel panel-default">
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
                  <button class="button"><i
                    class="ion-ios-arrow-thin-right"></i>
                  </button>
                </form>
              </div>
              <div class="col-md-6">
                <textarea rows="10" v-model="creditData" placeholder="征信数据"></textarea>
              </div>
            </div>
          </div>

        </div> <!-- end .container -->
      </div> <!-- end .inner -->
    </div> <!-- end .section -->
  </div> <!-- end .how-it-works-tab-content -->
</template>

<script>
  export default {
    name: "share-data-page",
    data() {
      return {
        providerSelected: "",
        provider: {},
        trailLimit: 100,
        subject
      }
    }
  }
</script>

<style scoped>

</style>
