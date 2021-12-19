export default {
  data() {
    return {
      detail: {
        detail: [
          {
            label: '姓名',
            value: '张兴华（MarsXH.Chang）'
          },
          {
            label: '籍贯',
            value: '黑龙江省密山市'
          },
          {
            label: '出生年月',
            value: '1995年08月'
          },
          {
            label: '现居地',
            value: '上海市'
          },
          {
            label: '教育背景',
            value: '黑龙江工程学院-计算机科学与技术（本科：2014.09 ~ 2018.07）'
          },
          {
            label: '技能证书',
            value: '叮咚买菜季度优秀员工（产能突出、提出推动前端标准化开发落地）<br>英业达年度优秀员工（身兼数职、从 0 到 1 推动公司数字化转型落地）<br>大学英语四级<br>大学优秀毕业生'
          },
          {
            label: '工作经历',
            value: '叮咚买菜（上海壹佰米网络科技有限公司）-前端开发（2021.04 ~ 至今）<br>上海英业达科技有限公司-前端开发（2019.04 ~ 2021.04）<br>上海汉得信息技术股份有限公司-前端开发（2017.11 ~ 2019.02）'
          },
          {
            label: '电话',
            value: '18846134496'
          },
          {
            label: 'Mail',
            value: 'marsXH@yeah.net'
          }
        ],
        evaluate: [
          '4 年前端开发经验，开发过微信公众号、中后台管理系统、H5-APP 等项目类型，大多独立负责前端项目开发，参与过后端开发、产品设计、项目部署以及 CI/CD 解决方案的研发和维护。',
          '在叮咚买菜跨团队协作中获得一致好评，每月绩效 90+。有自己的额外产出（Element-pro：http://ep.marsxh.top）。',
          '抗压能力强，最多同时 4 个项目迭代并行开发，前后端比最高达到 1：8，从无延期。',
          '带过新人，做过技术分享，自学 Docker，并自主购买阿里云服务器及域名。',
          '个人主页: http://home.marsxh.top',
          '技术博客(50 万访问量)：https://blog.csdn.net/q95548854'
        ],
        // ability: [
        //   '熟练使用Vue.js、Nuxt、Node.js、Element-UI、MongoDB、Docker、Echarts、Jquery、Bootstrap、Mint-UI、IView-UI、Vux-UI、等、了解GitLab CI、Linux、Mui-UI、Mysql等；',
        //   '并且自主购买配置过阿里云ECS云服务器；熟练使用Git版本控制系统；',
        //   'CSDN博客36万+访问量): https://blog.csdn.net/q95548854；'
        // ],
        project: [
          {
            projectName: '叮咚买菜-额外产出',
            projectTime: '',
            projectEnvironment: '',
            projectDetail: `
            <b>1. 主动技术分享（Docker 入门与实践）： </b>
            <br>详细的 PPT 以及多个实践例子，取得了良好的反响。并在团队内推行技术分享氛围，与团队一起成长。 
            <br><b>2. 主动提出并推动落地团队内前端工程化/标准化： </b>
            <br>为了解决团队内开发不标准化而导致的交叉维护成本很高、项目底层代码偶发问题(如请求封装、SSO 接入)等 痛点。以及 Utils、Style 等重复封装等问题。 
            <br><b>主要产物： </b>
            <br><b>（1）@wind/Element-pro NPM 包：Element 补充公共组件，仿 Element 架构，命令行创建组件/文档/调试。 </b>
            <br><b>（2）@wind/Utils NPM 包：封装常用工具函数库，以及公共 Style 库。 </b>
            <br><b>（3）template-admin-vue：规范统一封装 Vuex/Router/Env Config/Axios/SSO/埋点/菜单布局等底层功能。 </b>
            <br><b>3. 完成公司 NPM 仓库升级和后续维护。</b>
            `
          },
          {
            projectName: '叮咚买菜-工作产出',
            projectTime: '',
            projectEnvironment: '',
            projectDetail: `
            <b>1. SSO 单点登录系统：Vue 2.6 + TS + Element-UI。 </b>
            <br>独立支撑接手后的所有迭代。为公司所有系统提供单点登录能力，系统菜单、用户、用户组、角色等权限设置。 
            <br><b>2. 风控规则引擎&风控运营平台：Vue 2.6 + TS + Element-UI。 </b>
            <br>独立支撑从 0 到 1 两个项目所有迭代。通过配置多种规则逻辑及处置方式等，实现风险可追踪、可防控。 
            <br><b>3. 机会洞察-新品引入：Vue 2.6 + TS + Element-UI。 </b>
            <br>独立支撑从 0 到 1 所有迭代，辅助采购完成选品&商品分析&商品录入&新品判断筛选等操作。 
            <br><b>4. 监控平台：Vue 3 + TS + Antd-vue-UI。 </b>
            <br>独立支撑接手后的所有迭代。中间件部门所有 service 的报警监控。 
            <br><b>5. 其他项目个别迭代临时支持等。</b>
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
        ],
        contact: [
          {
            label: '电话',
            value: '18846134496'
          },
          {
            label: 'Mail',
            value: 'marsXH@yeah.net'
          }
        ]
      }
    }
  }
}