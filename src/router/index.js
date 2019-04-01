import Vue from 'vue';
import Router from 'vue-router';
import HomeContainer from '../components/tabbar/HomeContainer.vue';
import MemberContainer from '../components/tabbar/MemberContainer.vue';
import ShoppingCartContainer from '../components/tabbar/ShoppingCartContainer.vue';
import SearchContainer from '../components/tabbar/SearchContainer.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/home',
			// name: 'HomeContainer',
			component: HomeContainer
		},
		{
			path: '/member',
			// name: 'MemberContainer',
			component: MemberContainer
		},
		{
			path: '/shopping-cart',
			// name: 'ShoppingCartContainer',
			component: ShoppingCartContainer
		},
		{
			path: '/search',
			// name: 'SearchContainer',
			component: SearchContainer
		}
	],
	linkExactActiveClass: 'mui-active' //覆盖默认路由高亮的类，默认高亮的类名为：router-link-active
});
