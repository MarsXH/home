export default {
  data() {
    return {
      project: [
        {
          projectName: '叮咚买菜-额外产出',
          projectTime: '2021.04 ~ 至今',
          projectEnvironment: '',
          projectDetail: `
          <b>1. 主动技术分享-大前端部门级（Docker 入门与实践、Decorator装饰器）：</b>
          <br>详细的 PPT 以及多个实践例子，取得了良好的反响。并在团队内推行技术分享氛围，与团队一起成长。 
          <br><b>2. 主动提出并推动落地团队内前端工程化/标准化： </b>
          <br>为了解决团队内开发不标准化而导致的交叉维护成本很高、项目底层代码偶发问题(如请求封装、SSO接入)等痛点。以及 Comonents、Utils、Style 等重复封装等问题。
          <br><b>主要产物（@wind系列NPM包）</b>
          <br><b>（1）Element-pro：Element 补充公共组件，仿 Element 架构，命令行创建组件/文档/调试。 </b>
          <br><b>（2）wind-Utils：封装常用工具函数库，按需打包功能，以及公共 Style 库。 </b>
          <br><b>（3）wind-admin-template：规范统一封装Vuex/Router/Env/Axios/SSO/UBA/Layout/Menu/水印等功能。 </b>
          <br><b>（4）wind-cli：CLI 命令生成 wind-admin-template 模板项目。 </b>
          <br><b>（5）wind-ui（还在初期阶段）。</b>
          <br><b>3. 完成公司 NPM 仓库升级和后续维护。</b>
          <br><b>4. 流量染色小工具SDK</b>
          <br>（1）For 测试人员：可以给每条请求增加请求头，达到链路追踪目的。
          <br>（2）For 开发人员：可以给请求增加任意Cookie。（可通过Cookie值切换不同项目环境）
          <br><b>5. 多租户切换小工具SDK</b>
          <br>配合SSO多租户需求，统一封装租户切换组件，在业务系统中实现切换租户功能。
          <br><b>6. SSO单点登录桌面端应用</b>
          <br>采用 Electron 开发。For前置仓工作人员，登录桌面端应用即可保持SSO登录态。
          `
        },
        {
          projectName: '叮咚买菜-工作产出',
          projectTime: '2021.04 ~ 至今',
          projectEnvironment: '',
          projectDetail: `
          <b>1. SSO单点登录/权限管理系统（Vue2 + TS + Element-UI）： </b>
          <br>独立支撑所有迭代。为公司所有系统提供单点登录、多租户、系统菜单、应用、用户、角色、权限设置。
          <br><b>2. 埋点管理系统（Vue + TS + Node全栈）：</b>
          <br>独立支撑接手后所有迭代。统一管理IOS、Android、H5、小程序所使用的的埋点全流程，包括埋点事件的设计、审批、开发、测试、发布、上报、下发等。
          <br><b>3. FAAS前端发布系统（React + Ant-design）： </b>
          <br>配合云原生团队开发的一套专为前端项目发布使用的系统，取代之前老发布模式，实现更方便快捷稳定的持续集成部署。
          <br><b>4. 独立支撑风控规则引擎、风控运营平台、选品系统等其他项目日常迭代。 </b>
          `
        },
        {
          projectName: '上海英业达-测试项目管理系统-内部项目',
          projectTime: '2019.04 ~ 2021.02',
          projectEnvironment: `Vue + Nuxt + Element-UI + Echarts + Node + Mongo
          <br>GitLab CI 持续集成，生产环境（Kubernetes）、测试环境（Docker）自动化部署。
          `,
          projectDetail: `英业达内部测试项目全流程管理系统，包含10+个大模块（Dashboard总览、审批、多种资源管理、人力统计管理、项目管理、10+种Echarts图表统计等等。）
          <br>独立开发前端，参与后端开发、产品设计、发布部署。
          <br>功能涉及大量图表统计、审批、权限管控、富文本编辑、MarkDown、上传文件、导出文件等。
          `
        },
        {
          projectName: '上海英业达- Peer Review 互评系统-内部项目',
          projectTime: '2019.04 ~ 2021.02',
          projectEnvironment: 'Vue + Nuxt + Element-UI + Echarts + Node + Mongo',
          projectDetail: `英业达内部员工互评系统和内部资源管理系统。
          <br>互评系统包含互评模块及互评结果图表分析模块；
          <br>独立开发前端，参与后端开发、产品设计、发布部署。
          `
        },
        {
          projectName: '上海英业达- RMS & Ticket (物料管理 & 需求开票)系统-内部项目',
          projectTime: '2019.04 ~ 2021.02',
          projectEnvironment: 'Vue + Nuxt + Element-UI + Echarts + Node + Mongo',
          projectDetail: `英业达内部员工互评系统和内部资源管理系统。
          <br>RMS 系统包含物料、供应商、分类管理。
          <br>独立开发前端，参与后端开发、产品设计、发布部署。
          `
        },
        {
          projectName: '上海汉得融晶-Hippius新费控子应用',
          projectTime: '2018.11 ~ 2019.02',
          projectEnvironment: 'Hippius + VueJS + Vux-UI',
          projectDetail: '上海汉得融晶子公司的海马汇子应用（原生APP中内嵌H5子应用），方便公司内费用体系的管理，包含报账单子应用、审批子应用。涉及多种类型单据的提交、审批、推送等操作。'
        },
        {
          projectName: '上海瑞金医院-HRP财务运营管理微信公众号-实施项目',
          projectTime: '2018.09 ~ 2018.11',
          projectEnvironment: 'VueJS + Mint-UI',
          projectDetail: '本项目为开发微信公众号，方便医院的财务运营管理，包含胸卡补办、信息调整、党费缴纳、票据查询、公积金查询、报销助手、缴费记录等模块，涉及微信支付功能。'
        },
        {
          projectName: '上海依图科技-账户权限管理-实施项目',
          projectTime: '2018.08 ~ 2018.09',
          projectEnvironment: 'VueJS + iView-UI',
          projectDetail: '本项目为开发一套账户权限管理系统，方便依图管理公司的服务器信息，包含服务器账号申请、服务器审核、服务器权限管理、服务器概览等模块。'
        },
        {
          projectName: '上海汉得信息-Choerodon猪齿鱼官网-实施项目',
          projectTime: '2018.01 ~ 2018.05',
          projectEnvironment: 'Html + css + js + Jquery+ Hugo',
          projectDetail: '本项目主要是开发汉得内部产品Choerodon-猪齿鱼的官网（展示型网站），包含Choerodon的相关介绍、开发文档API、案例、社区等模块。当时开发的是v0.8版本。'
        },
        {
          projectName: '辽宁风林科技-演得好H5-APP项目',
          projectTime: '2016.11 ~ 2017.03',
          projectEnvironment: 'Html + css + js + Jquery + Mui-UI',
          projectDetail: `演得好APP是中国演艺中介服务平台。团队共四人，在团队中担任前端开发，也参与页面设计；
          <br>主要负责的页面：艺人工作室、艺人作品/小样上传与展示、活动详情、个人中心、艺人认证、发布通告、我的钱包等页面的编写和功能的实现；
          <br>主要负责的功能有：自动登录、头像裁剪、支付模块、实名认证、银行卡模块等。
          `
        }
      ]
    }
  }
}