import {
 createRouter,
 createWebHistory
} from 'vue-router';
import {
 auth
} from '../firebase.js';
import Home from '../views/Home.vue';
import detailSiswa from '../views/detailSiswa.vue';
import Dashboard from '../views/dashboard.vue';
import jadwal from '../views/Jadwal.vue';
import DashboardHome from '../views/Dashboard/Home.vue';
import DashboardProfile from '../views/Dashboard/Profile.vue';
import DashboardJadwal from '../views/Dashboard/Jadwal.vue';
import DashboardQuiz from '../views/Dashboard/quiz.vue';

const routes = [{
 path: '/',
 name: 'Home',
 component: Home
},
 {
  path: '/perpus',
  name: 'Perpus',
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
  path: '/jadwal',
  name: 'jadwal',
  component: jadwal
 },
 {
  path: '/dashboard',
  name: 'dashboard',
  component: Dashboard,
  children: [{
   path: "",
   component: DashboardHome,
   name: "Dashboard | Home"
  },
   {
    path: "profile",
    component: DashboardProfile,
    name: "Dashboard | Profile User"
   },
   {
    path: "jadwal",
    component: DashboardJadwal,
    name: "Dashboard | jadwal"
   },
   {
    path: "quiz",
    component: DashboardQuiz,
    name: "Dashboard | quiz"
   }]
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
  document.title = "MIRUPA | "+to.name;
  next({
   name: 'dashboard'
  });
 } else {
  document.title = to.name;
  next();
 }

});

export default router;