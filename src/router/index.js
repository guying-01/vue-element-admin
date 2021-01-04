import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: '', affix: true }
      }
    ]
  },
  {
    path: '/system-management',
    component: Layout,
    meta: { title: '系统配置', icon: '', affix: true },
    alwaysShow:true,
    children: [
      {
        path: 'buildings',
        component: () => import('@/views/system-management/buildings/index'),
        name: 'Buildings',
        meta: { title: '建筑群设置', icon: '', affix: true }
      },
      {
        path: 'gateway',
        component: () => import('@/views/system-management/gateway/index'),
        name: 'Gateway',
        meta: { title: '网关设置', icon: '', affix: true }
      },
      {
        path: 'diaobiao',
        component: () => import('@/views/system-management/dianbiao/index'),
        name: 'Diaobiao',
        meta: { title: '电表设置', icon: '', affix: true }
      },
      {
        path: 'role',
        component: () => import('@/views/system-management/role/index'),
        name: 'Role',
        meta: { title: '角色设置', icon: '', affix: true }
      },
      {
        path: 'permission',
        component: () => import('@/views/system-management/permission/index'),
        name: 'Permission',
        meta: { title: '角色授权', icon: '', affix: true }
      },
      {
        path: 'operator',
        component: () => import('@/views/system-management/operator/index'),
        name: 'Operator',
        meta: { title: '操作员设置', icon: '', affix: true }
      },
      {
        path: 'default-parameters',
        component: () => import('@/views/system-management/default-parameters/index'),
        name: 'DefaultParameters',
        meta: { title: '默认参数', icon: '', affix: true }
      },
      {
        path: 'shuibiao',
        component: () => import('@/views/system-management/shuibiao/index'),
        name: 'Shuibiao',
        meta: { title: '水表管理', icon: '', affix: true }
      },
      {
        path: 'nb-dianbiao',
        component: () => import('@/views/system-management/nb-dianbiao/index'),
        name: 'NbDianbiao',
        meta: { title: 'NB电表设置', icon: '', affix: true }
      },
      {
        path: 'batch-issued',
        component: () => import('@/views/system-management/batch-issued/index'),
        name: 'BatchIssued',
        meta: { title: '批量时控下发', icon: '', affix: true }
      }
    ]
  },
  {
    path: '/user-management',
    component: Layout,
    meta: { title: '用户管理', icon: '', affix: true },
    alwaysShow:true,
    children: [
      {
        path: 'dianbiao-batch-operation',
        component: () => import('@/views/user-management/dianbiao-batch-operation/index'),
        name: 'DianbiaoBatchOperation',
        meta: { title: '电表批量操作', icon: '', affix: true }
      },
      {
        path: 'open-account',
        component: () => import('@/views/user-management/open-account/index'),
        name: 'OpenAccount',
        meta: { title: '用户开户', icon: '', affix: true }
      },
      {
        path: 'open-account-record',
        component: () => import('@/views/user-management/open-account-record/index'),
        name: 'OpenAccountRecord',
        meta: { title: '开户记录查询', icon: '', affix: true }
      },
      {
        path: 'close-account-record',
        component: () => import('@/views/user-management/close-account-record/index'),
        name: 'CloseAccountRecord',
        meta: { title: '销户记录查询', icon: '', affix: true }
      },
      {
        path: 'shuibiao-batch-operation',
        component: () => import('@/views/user-management/shuibiao-batch-operation/index'),
        name: 'ShuibiaoBatchOperation',
        meta: { title: '水表批量操作', icon: '', affix: true }
      },
      {
        path: 'close-account',
        component: () => import('@/views/user-management/close-account/index'),
        name: 'CloseAccount',
        meta: { title: '用户销户', icon: '', affix: true }
      },
    ]
  },
  {
    path: '/personal-setting',
    component: Layout,
    meta: { title: '个人设置', icon: '', affix: true },
    alwaysShow:true,
    children: [
      {
        path: 'change-password',
        component: () => import('@/views/personal-setting/change-password/index'),
        name: 'ChangePassword',
        meta: { title: '修改密码', icon: '', affix: true }
      },
      {
        path: 'operation-record',
        component: () => import('@/views/personal-setting/operation-record/index'),
        name: 'OperationRecord',
        meta: { title: '操作记录', icon: '', affix: true }
      }
    ]
  },
  {
    path: '/shoudian-management',
    component: Layout,
    meta: { title: '售电管理', icon: '', affix: true },
    alwaysShow:true,
    children: [
      {
        path: 'add-sale',
        component: () => import('@/views/shoudian-management/add-sale/index'),
        name: 'DianAddSale',
        meta: { title: '新增售电', icon: '', affix: true }
      },
      {
        path: 'add-chongzheng',
        component: () => import('@/views/shoudian-management/add-chongzheng/index'),
        name: 'AddChongzheng',
        meta: { title: '新增充正', icon: '', affix: true }
      },
      {
        path: 'add-back',
        component: () => import('@/views/shoudian-management/add-back/index'),
        name: 'DianAddBack',
        meta: { title: '新增退电', icon: '', affix: true }
      },
      {
        path: 'search',
        component: () => import('@/views/shoudian-management/search/index'),
        name: 'DianSearch',
        meta: { title: '售电查询', icon: '', affix: true }
      },     
    ]
  },
  {
    path: '/shoushui-management',
    component: Layout,
    meta: { title: '售水管理', icon: '', affix: true },
    alwaysShow:true,
    children: [
      {
        path: 'add-sale',
        component: () => import('@/views/shoushui-management/add-sale/index'),
        name: 'ShuiAddSale',
        meta: { title: '新增售水', icon: '', affix: true }
      },
      {
        path: 'add-back',
        component: () => import('@/views/shoushui-management/add-back/index'),
        name: 'ShuiAddBack',
        meta: { title: '新增退水', icon: '', affix: true }
      },
      {
        path: 'search',
        component: () => import('@/views/shoushui-management/search/index'),
        name: 'ShuiSearch',
        meta: { title: '售水查询', icon: '', affix: true }
      },     
    ]
  },
  {
    path: '/dian-report',
    component: Layout,
    meta: { title: '电报表中心', icon: '', affix: true },
    alwaysShow:true,
    children: [
      {
        path: 'shilianwangguan',
        component: () => import('@/views/dian-report/shilianwangguan/index'),
        name: 'Shilianwangguan',
        meta: { title: '失联网关报表', icon: '', affix: true }
      },
      {
        path: 'shiliandianbiao',
        component: () => import('@/views/dian-report/shiliandianbiao/index'),
        name: 'Shiliandianbiao',
        meta: { title: '失联电表报表', icon: '', affix: true }
      },
      {
        path: 'dianbiaoshishibaojing',
        component: () => import('@/views/dian-report/dianbiaoshishibaojing/index'),
        name: 'Dianbiaoshishibaojing',
        meta: { title: '电表实时报警报表', icon: '', affix: true }
      },
      {
        path: 'dianbiaobaojingjilulishi',
        component: () => import('@/views/dian-report/dianbiaobaojingjilulishi/index'),
        name: 'Dianbiaobaojingjilulishi',
        meta: { title: '电表报警记录历史报表', icon: '', affix: true }
      },
      {
        path: 'dianxiaoshou',
        component: () => import('@/views/dian-report/dianxiaoshou/index'),
        name: 'Dianxiaoshou',
        meta: { title: '电销售报表', icon: '', affix: true }
      },
      {
        path: 'dianbiaozonghe',
        component: () => import('@/views/dian-report/dianbiaozonghe/index'),
        name: 'Dianbiaozonghe',
        meta: { title: '电表综合报表', icon: '', affix: true }
      },
      {
        path: 'diannenghao',
        component: () => import('@/views/dian-report/diannenghao/index'),
        name: 'Diannenghao',
        meta: { title: '电能耗报表', icon: '', affix: true }
      },
      {
        path: 'guankongdianbiaonenghao',
        component: () => import('@/views/dian-report/guankongdianbiaonenghao/index'),
        name: 'Guankongdianbiaonenghao',
        meta: { title: '管控电表能耗报表', icon: '', affix: true }
      },
      {
        path: 'guankongdianbiaodiancanliang',
        component: () => import('@/views/dian-report/guankongdianbiaodiancanliang/index'),
        name: 'Guankongdianbiaodiancanliang',
        meta: { title: '管控电表电参量监控', icon: '', affix: true }
      },
      {
        path: 'diancanliangjiankong',
        component: () => import('@/views/dian-report/diancanliangjiankong/index'),
        name: 'Diancanliangjiankong',
        meta: { title: '电参量监控', icon: '', affix: true }
      },
      {
        path: 'fufeilv',
        component: () => import('@/views/dian-report/fufeilv/index'),
        name: 'Fufeilv',
        meta: { title: '复费率报表', icon: '', affix: true }
      },
      {
        path: 'dianfeishouyi',
        component: () => import('@/views/dian-report/dianfeishouyi/index'),
        name: 'Dianfeishouyi',
        meta: { title: '电费收益报表', icon: '', affix: true }
      },
      {
        path: 'sunhaofenxi',
        component: () => import('@/views/dian-report/sunhaofenxi/index'),
        name: 'Sunhaofenxi',
        meta: { title: '损耗分析报表', icon: '', affix: true }
      }
    ]
  },
  {
    path: '/shui-report',
    component: Layout,
    meta: { title: '水报表中心', icon: '', affix: true },
    alwaysShow:true,
    children: [
      {
        path: 'shuibiaoshishibaojing',
        component: () => import('@/views/shui-report/shuibiaoshishibaojing/index'),
        name: 'Shuibiaoshishibaojing',
        meta: { title: '水表实时报警报表', icon: '', affix: true }
      },
      {
        path: 'shuixiaoshou',
        component: () => import('@/views/shui-report/shuixiaoshou/index'),
        name: 'Shuixiaoshou',
        meta: { title: '水销售报表', icon: '', affix: true }
      },
      {
        path: 'shuibiaozonghe',
        component: () => import('@/views/shui-report/shuibiaozonghe/index'),
        name: 'Shuibiaozonghe',
        meta: { title: '水表综合报表', icon: '', affix: true }
      },
      {
        path: 'shuibiaoshilian',
        component: () => import('@/views/shui-report/shuibiaoshilian/index'),
        name: 'Shuibiaoshilian',
        meta: { title: '水表失连报表', icon: '', affix: true }
      },
      {
        path: 'shuigaojingjilulishi',
        component: () => import('@/views/shui-report/shuigaojingjilulishi/index'),
        name: 'Shuigaojingjilulishi',
        meta: { title: '水告警记录历史报表', icon: '', affix: true }
      },
    ]
  },
  {
    path: '/property-management',
    component: Layout,
    meta: { title: '物业管理', icon: '', affix: true },
    alwaysShow:true,
    children: [
      {
        path: 'home-management',
        component: () => import('@/views/property-management/home-management/index'),
        name: 'HomeManagement',
        meta: { title: '房间管理', icon: '', affix: true }
      },
      {
        path: 'home-sign',
        component: () => import('@/views/property-management/home-sign/index'),
        name: 'HomeSign',
        meta: { title: '房间签约管理', icon: '', affix: true }
      },
      {
        path: 'balance-changes',
        component: () => import('@/views/property-management/balance-changes/index'),
        name: 'BalanceChanges',
        meta: { title: '余额变更记录', icon: '', affix: true }
      },
      {
        path: 'bill-management',
        component: () => import('@/views/property-management/bill-management/index'),
        name: 'BillManagement',
        meta: { title: '账单管理', icon: '', affix: true }
      },
      {
        path: 'user-info-management',
        component: () => import('@/views/property-management/user-info-management/index'),
        name: 'UserInfoManagement',
        meta: { title: '用户信息管理', icon: '', affix: true }
      },
      {
        path: 'useage-and-balance',
        component: () => import('@/views/property-management/useage-and-balance/index'),
        name: 'UseageAndBalance',
        meta: { title: '使用量和余额概况', icon: '', affix: true }
      },
      {
        path: 'top-up',
        component: () => import('@/views/property-management/top-up/index'),
        name: 'TopUp',
        meta: { title: '充值', icon: '', affix: true }
      },
      {
        path: 'gongtan',
        component: () => import('@/views/property-management/gongtan/index'),
        name: 'Gongtan',
        meta: { title: '公摊仪表管理', icon: '', affix: true }
      }
    ]
  },
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
