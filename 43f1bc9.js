(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{445:function(t,e,r){var n=r(85),o=r(14),c=r(16),l=r(18).f,f=r(112),d=r(454),v=f("meta"),h=0,y=Object.isExtensible||function(){return!0},m=function(t){l(t,v,{value:{objectID:"O"+ ++h,weakData:{}}})},meta=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!c(t,v)){if(!y(t))return"F";if(!e)return"E";m(t)}return t[v].objectID},getWeakData:function(t,e){if(!c(t,v)){if(!y(t))return!0;if(!e)return!1;m(t)}return t[v].weakData},onFreeze:function(t){return d&&meta.REQUIRED&&y(t)&&!c(t,v)&&m(t),t}};n[v]=!0},452:function(t,e,r){"use strict";var n=r(453),o=r(455);t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},453:function(t,e,r){"use strict";var n=r(4),o=r(7),c=r(111),l=r(23),f=r(445),d=r(274),v=r(273),h=r(14),y=r(9),m=r(160),x=r(83),O=r(276);t.exports=function(t,e,r){var P=-1!==t.indexOf("Map"),_=-1!==t.indexOf("Weak"),F=P?"set":"add",w=o[t],k=w&&w.prototype,j=w,C={},I=function(t){var e=k[t];l(k,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(_&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return _&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(_&&!h(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(c(t,"function"!=typeof w||!(_||k.forEach&&!y((function(){(new w).entries().next()})))))j=r.getConstructor(e,t,P,F),f.REQUIRED=!0;else if(c(t,!0)){var E=new j,L=E[F](_?{}:-0,1)!=E,$=y((function(){E.has(1)})),S=m((function(t){new w(t)})),z=!_&&y((function(){for(var t=new w,e=5;e--;)t[F](e,e);return!t.has(-0)}));S||((j=e((function(e,r){v(e,j,t);var n=O(new w,e,j);return null!=r&&d(r,n[F],n,P),n}))).prototype=k,k.constructor=j),($||z)&&(I("delete"),I("has"),P&&I("get")),(z||L)&&I(F),_&&k.clear&&delete k.clear}return C[t]=j,n({global:!0,forced:j!=w},C),x(j,t),_||r.setStrong(j,t,P),j}},454:function(t,e,r){var n=r(9);t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},455:function(t,e,r){"use strict";var n=r(18).f,o=r(110),c=r(275),l=r(84),f=r(273),d=r(274),v=r(161),h=r(162),y=r(15),m=r(445).fastKey,x=r(47),O=x.set,P=x.getterFor;t.exports={getConstructor:function(t,e,r,v){var h=t((function(t,n){f(t,h,e),O(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),y||(t.size=0),null!=n&&d(n,t[v],t,r)})),x=P(e),_=function(t,e,r){var n,o,c=x(t),l=F(t,e);return l?l.value=r:(c.last=l={index:o=m(e,!0),key:e,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=l),n&&(n.next=l),y?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},F=function(t,e){var r,n=x(t),o=m(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return c(h.prototype,{clear:function(){for(var t=x(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,y?t.size=0:this.size=0},delete:function(t){var e=x(this),r=F(this,t);if(r){var n=r.next,o=r.previous;delete e.index[r.index],r.removed=!0,o&&(o.next=n),n&&(n.previous=o),e.first==r&&(e.first=n),e.last==r&&(e.last=o),y?e.size--:this.size--}return!!r},forEach:function(t){for(var e,r=x(this),n=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!F(this,t)}}),c(h.prototype,r?{get:function(t){var e=F(this,t);return e&&e.value},set:function(t,e){return _(this,0===t?0:t,e)}}:{add:function(t){return _(this,t=0===t?0:t,t)}}),y&&n(h.prototype,"size",{get:function(){return x(this).size}}),h},setStrong:function(t,e,r){var n=e+" Iterator",o=P(e),c=P(n);v(t,e,(function(t,e){O(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),h(e)}}},458:function(t,e,r){},459:function(t,e,r){},472:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(133);var o=r(169);function c(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},492:function(t,e,r){"use strict";var n=r(458);r.n(n).a},493:function(t,e,r){"use strict";var n=r(459);r.n(n).a},543:function(t,e,r){"use strict";r.r(e);r(40),r(46),r(38),r(113),r(62),r(81),r(82),r(60),r(24),r(452),r(114),r(61),r(39),r(63);var n=r(33),o=r(472),c=(r(32),r(5)),l=r(28);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"course",middleware:"authenticated",fetch:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.redirect,n=t.store,o=t.params,n.state.courses[o.courseid]){e.next=9;break}return e.next=4,n.dispatch("getCourseAction",o.courseid);case 4:c=e.sent,(l=JSON.parse(JSON.stringify(n.state.courses[o.courseid]))).content.videoList.forEach((function(t,e){t.id=e})),n.commit("coursesMutation",l),0==c&&r("/my-course");case 9:case"end":return e.stop()}}),e)})))()},created:function(){this.courseId=this.$route.params.courseid,this.industryList=Object(o.a)(new Set(this.courses[this.courseId].content.videoList.map((function(t){return t.industry})))),this.industryList.unshift("--All--"),this.typeList=Object(o.a)(new Set(this.courses[this.courseId].content.videoList.map((function(t){return t.type})))),this.typeList.unshift("--All--"),this.updateFilter()},mounted:function(){this.$route.query.page&&(this.currentPage=parseInt(this.$route.query.page,10)),this.$route.query.industry&&(this.industryFilter=this.$route.query.industry),this.$route.query.type&&(this.typeFilter=this.$route.query.type)},data:function(){return{courseId:null,currentPage:1,numberPerPage:12,industryList:[],typeList:[],industryFilter:"",typeFilter:"",filteredVideoList:[]}},computed:d({},Object(l.d)(["userInfo","courses"])),watch:{industryFilter:function(){this.updateFilter()},typeFilter:function(){this.updateFilter()}},methods:d(d({},Object(l.b)(["getCourseAction"])),{},{updateFilter:function(){var t=this;console.log("updateFilter");var e=[];this.currentPage=this.$route.query.page?parseInt(this.$route.query.page,10):1,this.courses[this.courseId].content.videoList.forEach((function(video){var r=!0,n=!0;t.industryFilter&&"--All--"!=t.industryFilter&&video.industry!=t.industryFilter&&(r=!1),t.typeFilter&&"--All--"!=t.typeFilter&&!video.type.includes(t.typeFilter)&&(n=!1),r&&n&&e.push(video)})),this.$router.push({path:this.$route.path,query:{page:this.currentPage,industry:this.industryFilter,type:this.typeFilter}}),this.filteredVideoList=e},changePageNumber:function(t){console.log(t),this.$router.push({path:this.$route.path,query:{page:t,industry:this.industryFilter,type:this.typeFilter}})}})},h=(r(492),r(493),r(45)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"container mt-4 mb-2 is-unselectable"},[r("div",{staticClass:"columns is-tablet"},[r("div",{staticClass:"column is-full-mobile"},[r("div",{staticClass:"columns is-vcentered is-mobile"},[r("div",{staticClass:"column"},[r("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[r("ul",[r("li",[r("nuxt-link",{attrs:{to:"/my-course"}},[t._v("Home")])],1),t._v(" "),t._m(0)])])])]),t._v(" "),r("div",{staticClass:"block"},[r("div",{staticClass:"title is-4"},[t._v("\n            "+t._s(t.courses[t.courseId].info.title)+"\n          ")]),t._v(" "),r("div",{staticClass:"content"},[t._v("\n            "+t._s(t.courses[t.courseId].info.intro)+"\n          ")]),t._v(" "),r("div",{staticClass:"block"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("b-field",{attrs:{label:"Industry"}},[r("b-select",{attrs:{placeholder:"Select Industry"},model:{value:t.industryFilter,callback:function(e){t.industryFilter=e},expression:"industryFilter"}},t._l(t.industryList,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v("\n                      "+t._s(e)+"\n                    ")])})),0)],1)],1),t._v(" "),r("div",{staticClass:"column"},[r("b-field",{attrs:{label:"Type"}},[r("b-select",{attrs:{placeholder:"Select Type"},model:{value:t.typeFilter,callback:function(e){t.typeFilter=e},expression:"typeFilter"}},t._l(t.typeList,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v("\n                      "+t._s(e)+"\n                    ")])})),0)],1)],1)])]),t._v(" "),r("div",{staticClass:"content"},t._l(t.filteredVideoList.slice((this.currentPage-1)*this.numberPerPage,(this.currentPage-1)*this.numberPerPage+this.numberPerPage),(function(video,e){return r("nuxt-link",{key:e,attrs:{to:"/"+t.courses[t.$route.params.courseid].info.type+"/"+t.$route.params.courseid+"/video?vid="+video.id}},[r("div",{staticClass:"chapter-box mb-3 p-3"},[r("b-icon",{staticClass:"mr-2",attrs:{icon:"book-open",size:"is-small"}}),t._v(" "),r("div",{staticClass:"columns is-vcentered",staticStyle:{width:"100%"}},[r("div",{staticClass:"column is-one-fifth"},[t._v(t._s(video.industry))]),t._v(" "),r("div",{staticClass:"column is-one-fifth"},[t._v(t._s(video.type))]),t._v(" "),r("div",{staticClass:"column is-two-fifths"},[t._v(t._s(video.title))])])],1)])})),1)])])]),t._v(" "),r("b-pagination",{attrs:{total:t.filteredVideoList.length,"range-before":2,"range-after":1,rounded:!0,"per-page":t.numberPerPage,"icon-prev":"chevron-left","icon-next":"chevron-right","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{change:t.changePageNumber},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"is-active"},[e("a",{attrs:{href:"#","aria-current":"page"}},[this._v("Library")])])}],!1,null,"138a853c",null);e.default=component.exports}}]);