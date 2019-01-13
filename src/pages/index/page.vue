<template>
  <d2-container class="page">
    <!--<d2-page-cover
      title="I AM TMESIS"
      sub-title="追求简约美感的后台管理系统集成方案">
      <d2-icon-svg style="width: 120px;" name="d2-admin"/>
      <template slot="footer">
        <div class="page__btn-group">
          <el-popover
            :width="172"
            trigger="hover">
            <p class="d2-mt-0 d2-mb-10">D2Projects</p>
          </el-popover>
        </div>
      </template>
    </d2-page-cover>-->
    <el-row :gutter="20">
      <el-col :span="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;">
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
          <count-to :end="infor.count" count-class="count-style"/>
          <p>{{ infor.title }}</p>
        </infor-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="24">
        <div id="myChart1" :style="{ width:'100%',height:'400px' }"></div>
      </el-col>
      <!--<el-col :span="8">
        <div id="myChart4" :style="{ width:'600px',height:'300px' }"></div>
      </el-col>-->
    </el-row>
    <el-row :gutter="20">
      <!--<el-col :span="16">
        <div id="myChart3" :style="{ width:'600px',height:'300px' }"></div>
      </el-col>-->
      <!--<el-col :span="8">
        <div id="myChart2" :style="{ width:'400px',height:'300px' }"></div>
      </el-col>-->
    </el-row>

  </d2-container>
</template>

<script>
import InforCard from '@/components/info-card'
import CountTo from '@/components/count-to'
export default {
  name: 'index',
  components: {
    InforCard,
    CountTo
  },
  data () {
    return {
      inforCardData: [
        { title: '新增用户', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
        { title: '累计点击', icon: 'md-locate', count: 23432, color: '#19be6b' },
        { title: '新增问答', icon: 'md-help-circle', count: 142, color: '#ff9900' },
        { title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14' },
        { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
        { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
      ]
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
      // 绘制图表
      myChart1.setOption({
        title: {
          text: '系统访问情况'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['管理员', '提供商', '审查员', '监管者']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '管理员',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '提供商',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '审查员',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '监管者',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: { normal: {} },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })

      // 基于准备好的dom，初始化echarts实例
      /* let myChart2 = this.$echarts.init(document.getElementById('myChart2')) */
      // 绘制图表
      /* myChart2.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['未审核', '已审核', '已确认', '已识别']
        },
        series: [
          {
            name: '服务',
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
            data: [
              { value: 335, name: '未审核' },
              { value: 310, name: '已审核' },
              { value: 234, name: '已确认' },
              { value: 548, name: '已识别' }
            ]
          }
        ]
      }) */

      // 基于准备好的dom，初始化echarts实例
      /* let myChart3 = this.$echarts.init(document.getElementById('myChart3')) */
      /* var schema = [
        { name: 'date', index: 0, text: '日' },
        { name: 'newUser', index: 1, text: '新建用户' },
        { name: '新建服务', index: 2, text: '新建服务' }
      ] */
      // 绘制图表
      /* myChart3.setOption({
        backgroundColor: '#404a59',
        color: [
          '#dd4444', '#fec42c', '#80F1BE'
        ],
        legend: {
          y: 'top',
          data: ['TMESIS'],
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        },
        grid: {
          x: '10%',
          x2: 150,
          y: '18%',
          y2: '10%'
        },
        tooltip: {
          padding: 10,
          backgroundColor: '#222',
          borderColor: '#777',
          borderWidth: 1,
          formatter: function (obj) {
            var value = obj.value
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
              obj.seriesName + ' ' + value[0] + '日：' +
              value[7] +
              '</div>' +
              schema[1].text + '：' + value[1] + '<br>' +
              schema[2].text + '：' + value[2] + '<br>'
          }
        },
        xAxis: {
          type: 'value',
          name: '日期',
          nameGap: 16,
          nameTextStyle: {
            color: '#fff',
            fontSize: 14
          },
          max: 31,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#eee'
            }
          }
        },
        yAxis: {
          type: 'value',
          name: '系统活跃指数',
          nameLocation: 'end',
          nameGap: 20,
          nameTextStyle: {
            color: '#fff',
            fontSize: 16
          },
          axisLine: {
            lineStyle: {
              color: '#eee'
            }
          },
          splitLine: {
            show: false
          }
        },
        visualMap: [
          {
            left: 'right',
            top: '10%',
            dimension: 2,
            min: 0,
            max: 250,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小：活跃指数'],
            textGap: 30,
            textStyle: {
              color: '#fff'
            },
            inRange: {
              symbolSize: [10, 70]
            },
            outOfRange: {
              symbolSize: [10, 70],
              color: ['rgba(255,255,255,.2)']
            },
            controller: {
              inRange: {
                color: ['#c23531']
              },
              outOfRange: {
                color: ['#444']
              }
            }
          },
          {
            left: 'right',
            bottom: '5%',
            dimension: 6,
            min: 0,
            max: 50,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['明暗：活跃情况'],
            textGap: 30,
            textStyle: {
              color: '#fff'
            },
            inRange: {
              colorLightness: [1, 0.5]
            },
            outOfRange: {
              color: ['rgba(255,255,255,.2)']
            },
            controller: {
              inRange: {
                color: ['#c23531']
              },
              outOfRange: {
                color: ['#444']
              }
            }
          }
        ],
        series: [
          {
            name: 'TMESIS',
            type: 'scatter',
            itemStyle: {
              normal: {
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: [
              [1, 55, 9, 56, 0.46, 18, 6, '一般'],
              [2, 25, 11, 21, 0.65, 34, 9, '一般'],
              [3, 56, 7, 63, 0.3, 14, 5, '一般'],
              [4, 33, 7, 29, 0.33, 16, 6, '一般'],
              [5, 42, 24, 44, 0.76, 40, 16, '一般'],
              [6, 82, 58, 90, 1.77, 68, 33, '一般'],
              [7, 74, 49, 77, 1.46, 48, 27, '一般'],
              [8, 78, 55, 80, 1.29, 59, 29, '一般'],
              [9, 267, 216, 280, 4.8, 108, 64, '活跃'],
              [10, 185, 127, 216, 2.52, 61, 27, '活跃'],
              [11, 39, 19, 38, 0.57, 31, 15, '一般'],
              [12, 41, 11, 40, 0.43, 21, 7, '一般'],
              [13, 64, 38, 74, 1.04, 46, 22, '一般'],
              [14, 108, 79, 120, 1.7, 75, 41, '活跃'],
              [15, 108, 63, 116, 1.48, 44, 26, '活跃'],
              [16, 33, 6, 29, 0.34, 13, 5, '一般'],
              [17, 94, 66, 110, 1.54, 62, 31, '一般'],
              [18, 186, 142, 192, 3.88, 93, 79, '活跃'],
              [19, 57, 31, 54, 0.96, 32, 14, '一般'],
              [20, 22, 8, 17, 0.48, 23, 10, '一般'],
              [21, 39, 15, 36, 0.61, 29, 13, '一般'],
              [22, 94, 69, 114, 2.08, 73, 39, '一般'],
              [23, 99, 73, 110, 2.43, 76, 48, '一般'],
              [24, 31, 12, 30, 0.5, 32, 16, '一般'],
              [25, 42, 27, 43, 1, 53, 22, '一般'],
              [26, 154, 117, 157, 3.05, 92, 58, '活跃'],
              [27, 234, 185, 230, 4.09, 123, 69, '活跃'],
              [28, 160, 120, 186, 2.77, 91, 50, '活跃'],
              [29, 134, 96, 165, 2.76, 83, 41, '活跃'],
              [30, 52, 24, 60, 1.03, 50, 21, '一般'],
              [31, 46, 5, 49, 0.28, 10, 6, '一般']
            ]
          }
        ]
      }) */

      // 基于准备好的dom，初始化echarts实例
      /* let myChart4 = this.$echarts.init(document.getElementById('myChart4')) */
      // 绘制图表
      /* myChart4.setOption({
        title: {
          text: '活跃服务指标'
        },
        legend: {
          data: ['图一', '图二']
        },
        radar: [
          {
            indicator: [
              { text: '指标一' },
              { text: '指标二' },
              { text: '指标三' },
              { text: '指标四' },
              { text: '指标五' }
            ],
            center: ['25%', '50%'],
            radius: 120,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            name: {
              formatter: '【{value}】',
              textStyle: {
                color: '#72ACD1'
              }
            },
            splitArea: {
              areaStyle: {
                color: ['rgba(114, 172, 209, 0.2)',
                  'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                  'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 10
              }
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            }
          }
        ],
        series: [
          {
            name: '雷达图',
            type: 'radar',
            itemStyle: {
              emphasis: {
                // color: 各异,
                lineStyle: {
                  width: 4
                }
              }
            },
            data: [
              {
                value: [100, 8, 0.40, -80, 2000],
                name: '百度引擎',
                symbol: 'rect',
                symbolSize: 5,
                lineStyle: {
                  normal: {
                    type: 'dashed'
                  }
                }
              },
              {
                value: [60, 5, 0.30, -100, 1500],
                name: '谷歌引擎',
                areaStyle: {
                  normal: {
                    color: 'rgba(255, 255, 255, 0.5)'
                  }
                }
              }
            ]
          }
        ]
      }) */
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.page {
  .page__btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    margin-top: -10px;
    margin-bottom: 20px;
    span {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
    }
  }
}
</style>
