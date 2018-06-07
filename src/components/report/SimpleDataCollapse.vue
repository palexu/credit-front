<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="个人信息" name="1">
      <div>姓名：{{this.creditData.naturePerson.name}}</div>
      <div>手机号：{{this.creditData.naturePerson.phone}}</div>
      <div>身份证：{{this.creditData.naturePerson.idCard}}</div>
    </el-collapse-item>
    <div v-for="(value,idx) in this.creditData.latestContent.data">
      <el-collapse-item :title="idx" :name="idx">
        <template>
          <el-table
            :data="value"
            style="width: 100%">
            <el-table-column
              prop="gmtCreated"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="180">
            </el-table-column>
            <el-table-column
              prop="value"
              label="记录">
            </el-table-column>
            <el-table-column
              prop="description"
              label="描述">
            </el-table-column>
          </el-table>
        </template>
      </el-collapse-item>
    </div>
  </el-collapse>
</template>

<script>
  export default {
    name: "simple-data-collapse",
    props: ["creditData"],
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>

<style scoped>

</style>
