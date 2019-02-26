/**
 * @Description: 左侧菜单栏数据
 * @author Dsying
 * @date 2019-02-26
*/

const menuList = [
  {
    key: '1',
    icon: 'pie-chart',
    title: '首页',
    path: '/index',
    isSub: false,
  },
  {
    key: '2',
    icon: 'pie-chart',
    title: 'UI',
    path: '/ui',
    isSub: true,
    subs: [
      { key: '21', title: '按钮', path: '/ui/button' },
      { key: '22', title: 'loading', path: '/ui/loading' },
    ],
  },
  {
    key: '3',
    icon: 'pie-chart',
    title: '表单',
    path: '/form',
    isSub: true,
    subs: [
      { key: '31', title: '登录', path: '/form/button' },
      { key: '32', title: '注册', path: '/form/loading' },
    ],
  },
  {
    key: '4',
    icon: 'pie-chart',
    title: '图标',
    path: '/charts',
    isSub: false,
    subs: [
      { key: '41', title: '柱形图', path: '/charts/bar' },
      { key: '42', title: '饼图', path: '/charts/pie' },
      { key: '43', title: '折线图', path: '/charts/line' },
    ],
  },
  {
    key: '5',
    icon: 'pie-chart',
    title: '权限管理',
    path: '/permission',
    isSub: false,
  },
]

export default menuList
