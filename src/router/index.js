/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import Comic from '@/components/pages/Comic';
import Music from '@/components/pages/Music';
import Movie from '@/components/pages/Movie';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/comic',
      name: 'Comic',
      component: Comic
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    }
  ]
});
