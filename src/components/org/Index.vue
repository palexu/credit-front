<template>
  <!-- Header -->
  <div>

    <credit-header></credit-header>
    <!--<page-title></page-title>-->

    <switch-panel></switch-panel>

    <credit-footer></credit-footer>
  </div>

</template>
<script>
  import CreditFooter from "../CreditFooter";
  import CreditHeader from "../CreditHeader";
  import PageTitle from "./PageTitle";
  import SwitchPanel from "./SwitchPanel";
  import BlockHistory from "../BlockHistory";

  export default {
    components: {
      BlockHistory,
      SwitchPanel,
      PageTitle,
      CreditHeader,
      CreditFooter
    },
    name: 'OrgIndex'
  }
</script>
