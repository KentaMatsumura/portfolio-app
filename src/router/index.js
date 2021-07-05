/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import ComicList from '@/components/pages/ComicList';
import MusicList from '@/components/pages/MusicList';
import MovieList from '@/components/pages/MovieList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/comicList',
      name: 'ComicList',
      component: ComicList
    },
    {
      path: '/musicList',
      name: 'MusicList',
      component: MusicList
    },
    {
      path: '/movieList',
      name: 'MovieList',
      component: MovieList
    }
  ]
});
