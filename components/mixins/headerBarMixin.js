export default {
  data() {
    return {
      headerBar: {
        logoSrc: require('@/assets/img/logo.jpg'),
        name: '张兴华',
        ename: 'MarsXH.Chang',
        headerInfo: [
          { title: '经 验', score: '4.8' },
          { title: '协 作', score: '5.0' },
          { title: '抗 压', score: '4.9' }
        ],
        headerInfoDetail: [
          { title: '经验', text: '4 年前端开发经验，开发过微信公众号、中后台管理系统、H5-APP 等项目类型，大多独立负责前端项目开发，参与过后端开发、产品设计、项目部署以及 CI/CD 解决方案的研发和维护。' },
          { title: '协作', text: '在叮咚买菜跨团队协作中获得一致好评，每月绩效 90+。有自己的额外产出。' },
          { title: '抗压', text: '抗压能力强，最多同时 4 个项目迭代并行开发，前后端比最高达到 1：8，从无延期。' },
          { title: '自学', text: '带过新人，做过技术分享，自学 Docker，并自主购买阿里云服务器及域名。' },
          { title: '其他', text: '技术博客(50 万访问量)：https://blog.csdn.net/q95548854' }
        ],
        isShowQrCode: true,
        qrCodeSrc: require('@/assets/img/qrcode.jpg')
      }
    }
  }
}