import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import el from '@/components/el'
import button from '@/components/button'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/el',
      name: 'el',
      component: el,
      children: [
        {
          path: 'button',
          component: button
        }
      ]
    }
  ]
})
