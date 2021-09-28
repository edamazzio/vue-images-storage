import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import store from './store/store'
import AuthHandler from "@/components/AuthHandler";
import UploadForm from "@/components/UploadForm";
import ImageList from "@/components/ImageList";


Vue.config.productionTip = false
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: '/', component: ImageList },
    { path: '/oauth2/callback', component: AuthHandler },
    { path: '/upload', component: UploadForm }
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
