webpackJsonp([1],[,,,,,,,function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),a=o(u),l=n(1),s=o(l),i=n(35),c=o(i),d=n(17),p=r(d),f=n(18),v=r(f),m=n(19),b=o(m),g=n(8),_=o(g);a.default.use(s.default);var h=new s.default.Store({strict:!0,actions:p,getters:v,modules:{a:b.default,menu:_.default},state:{pkg:c.default,app:{}},mutations:{}});t.default=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(16),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u={items:[{name:"home",path:"/home/:id",component:(0,o.default)("Home")}]};t.default={state:u}},function(e,t,n){n(32);var r=n(5)(n(13),n(30),"data-v-3eb87069",null);e.exports=r.exports},,function(e,t,n){"use strict";n(14).app.$mount("#app")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},components:{},beforeMount:function(){},computed:{},methods:{}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},created:function(){},computed:{},methods:{}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.store=t.router=t.app=void 0;var o=n(26),u=(r(o),n(25)),a=(r(u),n(24)),l=r(a),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(0),c=r(i),d=n(15),p=r(d),f=n(3),v=n(7),m=r(v),b=n(29),g=r(b);c.default.component(l.default.name,l.default),c.default.config.devtools=!0,(0,f.sync)(m.default,p.default);var _=new c.default(s({router:p.default,store:m.default},g.default));t.app=_,t.router=p.default,t.store=m.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),u=r(o),a=n(2),l=r(a),s=n(7),i=(r(s),n(8)),c=r(i),d=n(9),p=r(d);u.default.use(l.default);var f=new l.default({mode:"hash",linkActiveClass:"is-active",scrollBehavior:function(){return{y:0}},routes:[{name:"index",path:"/",meta:{slider:!0},component:p.default}].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(c.default.state.items),[{path:"*",redirect:"/"}])});f.beforeEach(function(e,t,n){window.scrollTo(0,0),n()}),t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){return n(36)("./"+e+(t?"/index":"")+".vue")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={demo:0},o={demoDone:function(e){return e.demo+245}},u={increment:function(e,t){e.demo+=t.n||2}},a={increment:function(e){var t=e.commit;setTimeout(function(){t({type:"increment",n:3})},1e3)}};t.default={state:r,getters:o,mutations:u,actions:a}},,,function(e,t,n){t=e.exports=n(4)(void 0),t.push([e.i,".demo[data-v-3eb87069]{position:absolute;top:50%;left:50%;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:24px;text-align:center}.demo h1[data-v-3eb87069]{font-size:30px}.demo p.author[data-v-3eb87069]{text-align:right;font-size:26px}",""])},function(e,t,n){t=e.exports=n(4)(void 0),t.push([e.i,"",""])},,function(e,t){},function(e,t){},,,function(e,t,n){n(33);var r=n(5)(n(12),n(31),null,null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[e._m(0),e._v(" "),n("el-button",[n("router-link",{attrs:{to:{name:"home",params:{id:1}}}},[e._v("demo(此按钮组件来自element-ui，并且组件为按需加载)")])],1)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("vue项目模版")]),e._v(" "),n("p",[e._v("脚手架整合：babel+gulp+webpack+browserSync")]),e._v(" "),n("p",[e._v("前端整合：vue+vue-router+vuex+vuex-router-sync+axios+jquery+boostrap")]),e._v(" "),n("p",{staticClass:"author"},[e._v("--月下独奏")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(e,t,n){var r=n(22);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("4578c826",r,!0)},function(e,t,n){var r=n(23);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("11ad8372",r,!0)},,function(e,t){e.exports={name:"b2c-frontend",version:"0.0.1",description:"b2c-frontend",engines:{node:">=4",npm:">=3"},scripts:{toolsDev:"gulp tools:dev:serve"},dependencies:{axios:"^0.15.3",bootstrap:"^3.3.7","element-ui":"^1.3.0",jquery:"^3.2.1",vue:"^2.3.0","vue-router":"^2.5.2","vue-template-compiler":"^2.3.0",vuex:"^2.3.0","vuex-router-sync":"^4.1.2"},devDependencies:{autoprefixer:"^6.7.7","babel-core":"^6.21.0","babel-loader":"^6.4.0","babel-plugin-component":"^0.9.1","babel-plugin-transform-export-extensions":"^6.22.0","babel-preset-es2015":"^6.14.0","babel-preset-stage-2":"^6.17.0","browser-sync":"^2.13.0","connect-history-api-fallback":"^1.3.0","cross-env":"^3.1.3","css-loader":"^0.27.1",del:"^2.2.2","extract-text-webpack-plugin":"^2.0.0-beta.4","file-loader":"^0.10.1",gulp:"github:gulpjs/gulp#4.0","gulp-autoprefixer":"^3.1.0","gulp-changed":"^3.1.0","gulp-clean-css":"^3.0.3","gulp-concat":"^2.6.1","gulp-cssmin":"^0.1.7","gulp-env":"^0.4.0","gulp-htmlmin":"^2.0.0","gulp-inject":"^4.1.0","gulp-inject-string":"^1.1.0","gulp-postcss":"^6.4.0","gulp-rename":"^1.2.2","gulp-replace":"^0.5.4","gulp-stylus":"^2.3.0","gulp-uglify":"^1.5.2","gulp-util":"^3.0.8","gulp-watch":"^4.3.11","html-loader":"^0.4.5","html-webpack-plugin":"^2.25.0","http-proxy-middleware":"^0.17.4","imports-loader":"^0.7.0",opn:"^4.0.2",ora:"^1.1.0","postcss-loader":"^1.3.3","postcss-salad":"^1.0.8","progress-bar-webpack-plugin":"^1.9.1",shelljs:"^0.7.7","style-loader":"^0.13.1",stylus:"^0.54.5","stylus-loader":"^3.0.1","url-loader":"^0.5.7","vinyl-ftp":"^0.6.0","vue-html-loader":"^1.2.3","vue-loader":"^11.3.4","vue-template-compiler":"^2.2.6",webpack:"^2.2.1","webpack-dev-middleware":"^1.9.0","webpack-hot-middleware":"^2.14.0","webpack-merge":"^4.0.0"}}},function(e,t,n){function r(e){var t=o[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var o={"./Home.vue":[39,0],"./Index.vue":[9]};r.keys=function(){return Object.keys(o)},e.exports=r,r.id=36},function(e,t,n){e.exports=n(11)}],[37]);
//# sourceMappingURL=app.97ba958e265b39986dd7.js.map