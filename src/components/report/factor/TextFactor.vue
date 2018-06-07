<template>
  <div class="table-cells flex no-wrap">
    <div class="cell job-title-cell flex no-column no-wrap">
      <div class="cell-mobile-label">
        <h6>因子名</h6>
      </div> <!-- end .cell-label -->
      <img src="static/images/company-logo01.jpg" alt="company-logo" class="img-responsive">
      <div class="content">
        <h4>{{factor.name}}</h4>
        <p class="small">{{factor.desc}}</p>
      </div> <!-- end .content -->
    </div> <!-- end .job-title-cell -->

    <div class="cell job-type-cell flex no-column">
      <div class="cell-mobile-label">
        <h6>描述</h6>
      </div> <!-- end .cell-label -->
      <button type="button" class="button full-time">{{factor.type==null?"暂无":factor.type}}</button>
    </div> <!-- end .job-type-cell -->

    <div class="cell job-type-cell flex no-column">
      <div class="cell-mobile-label">
        <h6>来源</h6>
      </div> <!-- end .cell-label -->
      <p>{{factor.provider}}</p>
    </div> <!-- end .job-type-cell -->

    <div class="cell location-cell flex no-column no-wrap">
      <div class="cell-mobile-label">
        <h6>状态</h6>
      </div> <!-- end .cell-label -->
      <p>{{factor.value}}</p>
    </div> <!-- end .location-cell -->

    <div class="cell expired-date-cell flex no-column no-wrap">
      <div class="cell-mobile-label">
        <h6>更新时间</h6>
      </div> <!-- end .cell-label -->
      <p>{{factor.gmtCreated}}</p>
    </div> <!-- end .expire-date-cell -->
  </div> <!-- end .table-cells -->
</template>

<script>
  export default {
    name: "text-factor",
    props: ["factor"]
  }
</script>

<style scoped>

</style>
