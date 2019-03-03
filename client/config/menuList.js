/**
 * @Description: 左侧菜单栏数据
 * @author Dsying
 * @date 2019-02-26
*/

import { AsyncLoadComponent } from './util'

const menuList = [
  {
    key: '1',
    icon: 'pie-chart',
    title: '工作台',
    path: '/dashboard',
    component: AsyncLoadComponent(() => import('../views/content/dashboard')),
    isSub: false,
  },
  {
    key: '2',
    icon: 'pie-chart',
    title: 'UI',
    path: '/ui',
    isSub: true,
    subs: [
      {
        key: '21',
        title: '按钮',
        path: '/ui/button',
        component: AsyncLoadComponent(() => import('../views/content/ui/button')),
      },
      {
        key: '22',
        title: '加载',
        path: '/ui/loading',
        component: AsyncLoadComponent(() => import('../views/content/ui/loading')),
      },
      {
        key: '23',
        title: '弹出',
        path: '/ui/message',
        component: AsyncLoadComponent(() => import('../views/content/ui/message')),
      },
    ],
  },
  {
    key: '3',
    icon: 'pie-chart',
    title: '订单管理',
    path: '/order',
    component: AsyncLoadComponent(() => import('../views/content/ui/message')),
    isSub: false,
  },
  {
    key: '4',
    icon: 'pie-chart',
    title: '图标',
    path: '/charts',
    isSub: true,
    subs: [
      {
        key: '41',
        title: '柱形图',
        path: '/charts/bar',
        component: AsyncLoadComponent(() => import('../views/content/dashboard')),

      },
      {
        key: '42',
        title: '饼图',
        path: '/charts/pie',
        component: AsyncLoadComponent(() => import('../views/content/dashboard')),

      },
      {
        key: '43',
        title: '折线图',
        path: '/charts/line',
        component: AsyncLoadComponent(() => import('../views/content/dashboard')),

      },
    ],
  },
  {
    key: '5',
    icon: 'pie-chart',
    title: '权限管理',
    path: '/permission',
    component: AsyncLoadComponent(() => import('../views/content/dashboard')),
    isSub: false,
  },
  {
    key: '6',
    icon: 'pie-chart',
    title: '个人页面',
    path: '/user',
    isSub: true,
    subs: [
      {
        key: '61',
        title: '个人中心',
        path: '/user/info',
        component: AsyncLoadComponent(() => import('../views/content/dashboard')),
      },
    ],
  },
]

export default menuList
