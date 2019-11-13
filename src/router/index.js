import Vue from 'vue'
import VueRouter from 'vue-router'
import list from '../components/list/list'
import detail from '../components/details/detail'
import classes from '../components/class/class'
import login from '../views/info/login'
import register from '../views/info/register'
import my from '../views/info/my'
import shopping from '../components/Shopping/Shopping'
import add from '../components/my/add'
import store from '../store/index'
import set from  '../views/content/set'
import security from  '../views/info/set/security'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/content/index'),
        meta: {title: '星月校园外卖系统'}
    }, {
        path: '/list',
        name: 'list',
        component: list,
        meta: {title: '列表页'}
    },
    {
        path: '/detail',
        name: 'detail',
        component: detail,
        meta: {title: '详情页'}
    },
    {
        path: '/classes',
        name: 'classes',
        component: classes,
        meta: {title: '分类页'}
    }, {
        path: '/login',
        name: 'login',
        component: login,
        meta: {title: '登录页'}
    }, {
        path: '/register',
        name: 'register',
        component: register,
        meta: {title: '注册页'}
    },
    {
        path: '/my',
        name: 'my',
        component: my,
        meta: {title: '我的信息',auth: true}
    },
    {
        path: '/add',
        name: 'add',
        component: add,
        meta: {title: '收货地址'}
    },
    {
        path: '/shopping',
        name: 'shopping',
        component: shopping,
        meta: {title: '购物车'}
    },
    {
        path: '/set',
        name: 'set',
        component: set,
        meta: {title: '设置'}
    },
    {
        path: '/security',
        name: 'security',
        component: security,
        meta: {title: '账户安全'}
    },

]

const router = new VueRouter({
    routes
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'xxx'
    if (to.meta.auth) {
        if (store.state.token.trim()) {
            next();
        } else {
            next({name: 'login', query: {redirect:to.name}});

        }
    } else {
        next();
    }
})

export default router

