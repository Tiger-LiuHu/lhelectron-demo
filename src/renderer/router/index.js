import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //   path: '/',
        //   name: 'landing-page',
        //   component: require('@/components/LandingPage').default
        // },
        {
            path: '/',
            name: 'mainWindow',
            component: () =>
                import ('@/components/Common/MainWindow.vue'),
            children: [{
                    path: '',
                    component: () =>
                        import ('@/components/LandingPage')
                },
                // {
                //     path: 'windows',
                //     component: () =>
                //         import ('@/components/Common/main/Windows.vue')
                // },
                //   {
                //     path: 'transform',
                //     component: () => import('@/pages/main/Transform.vue')
                //   },
                //   {
                //     path: 'ipc',
                //     component: () => import('@/pages/main/Ipc.vue')
                //   }
            ]
        },

        {
            path: '*',
            redirect: '/'
        }
    ]
})