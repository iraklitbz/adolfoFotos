import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import './firebase';
import App from './App.vue';
import VueFire from "vuefire";
import _ from 'lodash';

Vue.use(VueRouter);
Vue.use(VueFire);

const router = new VueRouter({
	routes
});

new Vue({
	el: '#app',
	router,
	render: h => h(App),
	methods: {
		sliceArray: function (data, chunkSize) {
			let __data = [],
                __qt = 0;

            __data = _.map(data, (item) => {
                return item;
            });

            __qt = Math.round(__data.length / chunkSize);
            __data = _.chunk(_.shuffle(__data), __qt);

            return __data;
		}
	}
});

