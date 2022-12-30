import { createRouter as _createRouter, createWebHashHistory } from 'vue-router'

// const pages = import.meta.glob('../src/pages/**/*.vue')
// const routes = Object.keys(pages).map((path)=>{
//   let name = path.match(/\/pages(.*)\.vue$/)[1].toLowerCase();
//   if(name.substring(name.length - 5) == 'index'){
//     name = name.slice(0, -5);//去掉最后的index
//   }
//   return {
//     path: name === '/home' ? '/': name,
//     component: pages[path]
//   }
// })

const routes = [
  {
    path: '/',
    name: 'PageView',
    redirect: '/home',
    component: () => import('@/view/PageView.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/view/HomePage.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/software',
        name: 'software',
        component: () => import('@/view/Software.vue'),
        redirect: '/software/smartTown',
        meta: {
          title: '软件产品'
        },
        children: [
          {
            path: '/software/smartTown',
            name: 'smartTown',
            component: () => import('@/view/Software_smartTown.vue'),
            meta: {
              title: '软件产品丨智能小镇管理系统'
            }
          },
          {
            path: '/software/bigData',
            name: 'bigData',
            component: () => import('@/view/Software_bigData.vue'),
            meta: {
              title: '软件产品丨大数据管理系统'
            }
          }
        ]
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('@/view/Service.vue'),
        meta: {
          title: '相关服务'
        }
      },
      {
        path: '/serviceDetail',
        name: 'serviceDetail',
        component: () => import('@/view/ServiceDetail.vue'),
        meta: {
          title: '相关服务-详情'
        }
      }
    ]
  }
]

export function createRouter() {
  return _createRouter({
    history: createWebHashHistory(),
    routes
  })
}

