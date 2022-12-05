import {createRouter as _createRouter, createWebHashHistory} from 'vue-router'

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
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'PageView',
    component: resolve => require(['@/view/PageView'], resolve),
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: resolve => require(['@/view/HomePage'], resolve),
        meta: {
          title: '首页'
        }
      },
    ]
  }
]
export function createRouter() {
  return _createRouter({
    history: createWebHashHistory(),
    routes
  })
}