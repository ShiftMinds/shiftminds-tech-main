import Vue, { provide } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/main.css'
import vuetify from './plugins/vuetify'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './plugins/apollo'

// const app = createApp({
//     render: () => h(App),
// })

// app.use(router)
// app.use(store)
// app.use(vuetify)
// Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
}).$mount('#app')
