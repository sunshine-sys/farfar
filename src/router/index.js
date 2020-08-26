import { createRouter, createWebHistory } from "vue-router";
import Msite from '../views/Msite/Msite.vue'
const routes = [
  {
    path: "/msite",
    name: "Msite",
    component :Msite
  },{
    path: "/about",
    name: "About",
    component: ()=>import(/* webpackChunkName: "about" */ "../views/About/About.vue")
  },{
    path: "/news",
    name: "News",
    component: ()=>import(/* webpackChunkName: "about" */ "../views/News/News.vue")
  },{
    path: "/contact",
    name: "Contact",
    component: ()=>import(/* webpackChunkName: "about" */ "../views/Contact/Contact.vue")
  },{
    path: "/products",
    name: "Products",
    component: ()=>import(/* webpackChunkName: "about" */ "../views/Products/Products.vue")
  },{
    path: "/services",
    name: "Services",
    component: ()=>import(/* webpackChunkName: "about" */ "../views/Services/Services.vue")
  },{
    path: "/solution",
    name: "Solution",
    component: ()=>import(/* webpackChunkName: "about" */ "../views/Solution/Solution.vue")
  },{
    path:'/',
    redirect: '/msite'
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
