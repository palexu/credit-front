<template>
  <div class="panel" :id="this.pid" :style="{width: '500px', height: '300px'}"></div>
</template>

<script>
  export default {
    name: 'simple-pie',
    props: ["pid", "title", "pieName", 'pieData', 'theme'],
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        themes: [
          "vintage",
          "light",
          // "dark",
          "macarons"
        ]
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let theme = null;
        if (this.theme == null) {
          let se = new Date().getTime() % this.themes.length;
          theme = this.themes[se];
          console.log(theme);
        }
        let myChart = this.$echarts.init(document.getElementById(this.pid), theme);
        // 绘制图表

        let pieData = null;
        if (this.pieData == null) {
          pieData = [
            {value: 335, name: '直接访问'},
            {value: 310, name: '邮件营销'},
            {value: 234, name: '联盟广告'},
            {value: 135, name: '视频广告'},
            {value: 135, name: '视频广告2'},
            {value: 1548, name: '搜索引擎'}
          ];
        } else {
          console.log(pieData);
          pieData = this.pieData;
        }

        let legendData = [];
        for (let i in pieData) {
          legendData.push(pieData[i].name);
        }

        let seOp = 1;//new Date().getTime() % 2;
        if (seOp == 0) {
          myChart.setOption(this.getOption1(legendData, pieData));
        } else {
          myChart.setOption(this.getOption2(legendData, pieData));
        }

      },
      getOption1: function (legendData, pieData) {
        return {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: legendData
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: pieData
            }
          ]
        };
      },
      getOption2: function (legendData, pieData) {
        return {
          title: {
            text: this.title,
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: legendData
          },
          series: [
            {
              name: this.pieName,
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: pieData,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
      }
    }
  }
</script>

<style scoped>

</style>
