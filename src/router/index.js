import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import TTgen from '@/components/TTgen'
import Preview from '@/components/Preview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/ttgen',
      name: 'TTgen',
      component: TTgen
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    }
  ]
})
