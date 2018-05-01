<template>
  <div id="getData" class="tab-pane company-tab-content text-center fade in active">

    <category-block></category-block>

    <get-data-table></get-data-table>

  </div> <!-- end .company-tab-content -->
</template>

<script>
  import GetDataTable from "./table/GetDataTable";
  import CategoryBlock from "../../CategoryBlock";

  export default {
    name: "get-data-page",
    components: {
      CategoryBlock,
      GetDataTable
    }
  }
</script>

<style scoped>

</style>
