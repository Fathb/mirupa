import {
 createRouter,
 createWebHistory
} from 'vue-router';
import {
 auth
} from '../firebase.js';
import Home from '../views/Home.vue';
import detailSiswa from '../views/detailSiswa.vue';

const routes = [{
 path: '/',
 name: 'Home',
 component: Home
},
 {
  path: '/perpus',
  name: 'Perpus',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import('../views/About.vue')
 },
 {
  path: '/ppdb',
  name: 'ppdb',
  component: () => import('../views/ppdb.vue')
 },
 {
  path: '/profile',
  name: 'profile',
  component: () => import('../views/profile.vue')
 },
 {
  path: '/gallery',
  name: 'gallery',
  component: () => import('../views/gallery.vue')
 },
 {
  path: '/Kelas',
  name: 'kelas',
  component: () => import('../views/kelas.vue')
 },
 {
  path: '/siswa/:id',
  name: 'details siswa',
  component: detailSiswa
 },
 {
  path: '/daftar',
  name: 'daftar',
  component: () => import('../views/daftar.vue')
 },
 {
  path: '/login',
  name: 'login',
  component: () => import('../views/login.vue')
 },
 {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('../views/dashboard.vue'),
 },
 {
  path: '/:catchAll(.*)',
  name: '404',
  component: () => import('../views/404.vue')
 }];

const router = createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes
});

router.beforeEach((to, from, next)=> {
 var user = auth.currentUser;
 if (to.name == 'dashboard' && !user) {
  document.title = to.name;
  next({
   name: 'login'
  })
 } else if (to.name == 'daftar' && user || to.name == 'login' && user) {
  document.title = to.name;
  next({
   name: 'dashboard'
  });
 } else {
  document.title = to.name;
  next();
 }

});

export default router;