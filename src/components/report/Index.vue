<template>
  <!-- Header -->
  <div>
    <credit-header></credit-header>

    <report></report>

    <credit-footer></credit-footer>
  </div>

</template>
<script>
  import CreditFooter from "../CreditFooter";
  import CreditHeader from "../CreditHeader";
  import CategoryBlock from "../org/getData/CategoryBlock";
  import Report from "./Report";

  export default {
    components: {
      Report,
      CategoryBlock,
      CreditHeader,
      CreditFooter
    },
    name: 'Index'
  }
</script>
