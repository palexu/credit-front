<template>
  <div class="panel" :id="this.pid" :style="{width: '500px', height: '300px'}"></div>
</template>

<script>
  export default {
    name: "simple-bubble-gradient",
    props: ["pid", "title", "pieName", 'pieData', "theme"],
    data: function () {
      return {
        data: [[
          //周几 ,y 里程, 大小 , 原因 , 类型
          [1, 77, 1, '周一', 1990],
          [2, 77, 3, '周二', 1990],
          [3, 68, 1, '周三', 1990],
          [4, 74, 1, '周四', 1990],
          [5, 75, 1, '周五', 1990],
          [6, 77, 1, '周六', 1990],
          [7, 27, 1, '周日', 1990],
        ]],
        themes: [
          "vintage",
          "light",
          "dark",
        ]
      }
    },
    mounted() {
      this.drawBubble();
    },
    methods: {
      drawBubble: function () {
        let theme = null;
        if (this.theme == null) {
          let se = new Date().getTime() % this.themes.length;
          theme = this.themes[se];
          console.log(theme);
        }
        let myChart = this.$echarts.init(document.getElementById(this.pid), theme);
        let option = {
          backgroundColor: this.$echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
            offset: 0,
            color: '#f7f8fa'
          }, {
            offset: 1,
            color:
              '#cdd0d5'
          }]),
          title: {
            text: this.title
          }
          ,
          legend: {
            right: 10,
            data:
              ['1990', '2015']
          }
          ,
          xAxis: {
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            }
          }
          ,
          yAxis: {
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            }
            ,
            scale: true
          }
          ,
          series: [{
            name: '1990',
            data: this.data[0],
            type: 'scatter',
            symbolSize: function (data) {
              return Math.sqrt(data[2]) * 10;
            },
            label: {
              emphasis: {
                show: true,
                formatter: function (param) {
                  return param.data[3] + "\n次数:" + param.data[2] + "\n平均里程:" + param.data[1];
                },
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                  offset: 0,
                  color: 'rgb(251, 118, 123)'
                }, {
                  offset: 1,
                  color: 'rgb(204, 46, 72)'
                }])
              }
            }
          }]
        };
        myChart.setOption(option);

      }
    }
  }
</script>

<style scoped>

</style>
