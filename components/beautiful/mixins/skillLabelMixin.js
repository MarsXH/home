export default {
  data() {
    return {
      colorMap: {
        1: 'red',
        2: '#01579B',
        3: '#03A9F4',
        4: '#FDD835'
      },
      skillType: [
        { name: '精通', color: 'red' },
        { name: '熟练', color: '#01579B' },
        { name: '掌握', color: '#03A9F4' },
        { name: '了解', color: '#FDD835' }
      ],
      skillLabel: [
        { name: 'CSS+HTML', level: 1 },
        { name: 'JS', level: 2 },
        { name: 'Vue', level: 2 },
        { name: 'Node', level: 2 },
        { name: 'NUXT', level: 2 },
        { name: 'Element-UI', level: 2 },
        { name: 'IView-UI', level: 2 },
        { name: 'Echarts', level: 2 },
        { name: 'JQuery', level: 2 },
        { name: 'Bootstrap', level: 2 },
        { name: 'Git', level: 2 },
        { name: 'Docker', level: 2 },
        { name: 'MongoDB', level: 3 },
        { name: 'HighCharts', level: 3 },
        { name: 'Mint-UI', level: 3 },
        { name: 'Vux-UI', level: 3 },
        { name: 'Gitlab CI/CD', level: 4 },
        { name: 'Mui-UI', level: 4 },
        { name: 'Linux', level: 4 },
        { name: 'Mysql', level: 4 }
      ]
    }
  }
}