import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import MainContent from '@com/MainContent.vue';
import IndexSideBar from '@com/IndexSideBar.vue';
import RegisterDetail from '@com/RegisterDetail.vue';
import RegisterDetailSideBar from '@com/RegisterDetailSideBar.vue';
import LoginDetail from '@com/LoginDetail';
import NewPost from '@com/NewPost';
import Post from '@com/Post';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/index',
      children: [
        {
          path: 'index',
          components: {
            main: MainContent,
            'side-bar': IndexSideBar,
          }
        },
        {
          name: 'Register',
          path: 'register',
          components: {
            main: RegisterDetail,
            'side-bar': RegisterDetailSideBar,
          }
        },
        {
          name: 'Login',
          path: 'login',
          components: {
            main: LoginDetail,
            'side-bar': RegisterDetailSideBar,
          }
        },
        {
          name:'NewPost',
          path:'post/new',
          components: {
            main: NewPost,
            'side-bar': RegisterDetailSideBar,
          }
        },
        {
          name:'Post',
          path: 'post/:id',
          components: {
            main: Post,
            'side-bar': IndexSideBar,
          }
        }
      ],
    },
  ]
})
