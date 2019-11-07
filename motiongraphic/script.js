var celticColor = "#7becb2",
  italicColor = "#ecb27b",
  indoIranianColor = "#ec7bb6";

Highcharts.chart('container', {

  chart: {
    type: 'networkgraph',
    marginTop: 80
  },

  title: {
    text: '金山测试题网络拓扑图动画演示'
  },

  plotOptions: {
    networkgraph: {
      keys: ['from', 'to'],
      layoutAlgorithm: {
        enableSimulation: true,
        integration: 'verlet',
        linkLength: 100
      }
    }
  },

  series: [{
    marker: {
      radius: 13,
    },
    dataLabels: {
      enabled: true,
      linkFormat: '',
      allowOverlap: true
    },
    data: [
      ['公司名称1', '公司名称2'],
      ['公司名称1', '公司名称3'],
      ['公司名称1', '公司名称4'],
      ['公司名称1', '公司名称5'],
      ['公司名称2', '公司名称3'],
      ['公司名称2', '公司名称7'],
      ['公司名称5', '公司名称4'],
      ['公司名称8', '公司名称3'],
      ['公司名称8', '公司名称2'],
      ['公司名称8', '公司名称5'],
      ['公司名称3', '公司名称7'],
      ['公司名称9', '公司名称7'],
      ['公司名称9', '公司名称6'],
      ['公司名称9', '公司名称2'],
    ],
    // nodes: [{
    //   id: '公司名称1',
    //   color: '#aaa'
    //   ]}

  }]
});