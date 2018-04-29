<template>
  <!-- Header -->
  <div>
    <credit-header/>

    <search-report/>

    <colorful-list/>

    <!--<category-block/>-->

    <!-- Footer -->
    <div class="section footer transparent" style="background-image: url('static/images/background03.jpg');">
      <div class="container">
        <div class="top flex space-between items-center">
          <img src="static/images/footer-logo.png" alt="footer-logo" class="img-responsive">
          <ul class="list-unstyled footer-menu flex">
            <li><a href="#0">Home</a></li>
            <li><a href="#0">About</a></li>
            <li><a href="#0">Browse Jobs</a></li>
            <li><a href="#0">Browse candidates</a></li>
            <li><a href="#0">Contact</a></li>
          </ul> <!-- end .footer-menu -->
        </div> <!-- end .top -->
      </div> <!-- end .container -->
    </div> <!-- end .footer -->
  </div>

</template>
<script>
  import CreditHeader from "./CreditHeader";
  import ColorfulList from "./report/Report";
  import CategoryBlock from "./CategoryBlock";
  import SearchReport from "./search/SearchReport";

  export default {
    components: {
      SearchReport,
      CategoryBlock,
      ColorfulList,
      CreditHeader
    },
    name: 'Index'
  }
</script>
