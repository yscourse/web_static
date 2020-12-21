(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{465:function(e,t,n){},528:function(e,t,n){"use strict";var r=n(465);n.n(r).a},546:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"card-header"},[t("p",{staticClass:"card-header-title"},[this._v("Lessons")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"is-active"},[t("a",{attrs:{href:"#","aria-current":"page"}},[this._v("Lesson")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon is-small"},[t("img",{staticStyle:{height:"70%"},attrs:{src:n(441)}})])}],o=(n(35),n(41),n(33),n(63),n(64),n(47),n(34),n(24)),c=(n(36),n(5)),l=n(29);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={name:"lessonPage",middleware:"authenticated",watch:{$route:function(e,t){console.log(e,t),this.updateQuery(e.query.cid,e.query.lid)}},created:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,e.updateQuery(e.$route.query.cid,e.$route.query.lid);case 3:return t.next=5,e.trackVisitorAction({path:e.$route.fullPath});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{isOpen:0,courseId:null,chapterId:null,lessonId:null,nextLessonButtonVisible:!0,courseFileCategories:[],pageLoaded:!1}},computed:h(h({},Object(l.d)(["courses"])),{},{videoSource:function(){return this.courses[this.courseId].content.chapters[this.chapterId].lessonList[this.lessonId].content.video}}),methods:h(h({},Object(l.b)(["getCourseAction","trackVisitorAction"])),{},{nextLessonHandler:function(){this.lessonId<this.courses[this.courseId].content.chapters[this.chapterId].lessonList.length-1?this.courses[this.courseId].content.chapters[this.chapterId].lessonList[this.lessonId+1]&&"quiz"==this.courses[this.courseId].content.chapters[this.chapterId].lessonList[this.lessonId+1].type&&this.chapterId<this.courses[this.courseId].content.chapters.length-1?this.$router.push({path:"/course/".concat(this.courseId,"/lesson/biws"),query:{cid:this.chapterId+1,lid:0}}):this.$router.push({path:"/course/".concat(this.courseId,"/lesson/biws"),query:{cid:this.chapterId,lid:this.lessonId+1}}):this.chapterId<this.courses[this.courseId].content.chapters.length-1&&this.$router.push({path:"/course/".concat(this.courseId,"/lesson/biws"),query:{cid:this.chapterId+1,lid:0}})},gotoLessonHandler:function(e,t){this.$router.push({path:"/course/".concat(this.courseId,"/lesson/biws"),query:{cid:e,lid:t}})},updateQuery:function(e,t){var n=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.courseId=parseInt(n.$route.params.courseid,10),n.chapterId=parseInt(e,10),n.lessonId=parseInt(t,10),n.courses[n.courseId]){r.next=10;break}return o=n.$buefy.loading.open(),r.next=7,n.getCourseAction(n.courseId);case 7:0==r.sent&&n.$router.push("/my-course"),o.close();case 10:n.pageLoaded=!0,c=n.courses[n.courseId].content.chapters[n.chapterId].lessonList[n.lessonId].content,n.courseFileCategories=[],c.files&&c.files.length>0&&n.courseFileCategories.push({title:"Files",fileList:c.files}),c.excelFiles&&c.excelFiles.length>0&&n.courseFileCategories.push({title:"Excel Files",fileList:c.excelFiles}),c.referenceFiles&&c.referenceFiles.length>0&&n.courseFileCategories.push({title:"Reference Guide",fileList:c.referenceFiles}),n.chapterId==n.courses[n.courseId].content.chapters.length-1&&(n.lessonId==n.courses[n.courseId].content.chapters[n.chapterId].lessonList.length-1||n.courses[n.courseId].content.chapters[n.chapterId].lessonList[n.lessonId+1]&&"quiz"==n.courses[n.courseId].content.chapters[n.chapterId].lessonList[n.lessonId+1].type)?n.nextLessonButtonVisible=!1:n.nextLessonButtonVisible=!0;case 17:case"end":return r.stop()}}),r)})))()}})},I=(n(528),n(46)),component=Object(I.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"container mt-4 mb-2 is-unselectable"},[e.pageLoaded?n("div",{staticClass:"columns is-tablet"},[n("div",{staticClass:"column is-one-quarter-tablet is-full-mobile"},[n("div",{staticClass:"block",staticStyle:{position:"sticky",top:"0"}},e._l(e.courseFileCategories,(function(t,r){return n("b-collapse",{key:r,staticClass:"card",attrs:{animation:"slide",open:e.isOpen==r},on:{open:function(t){e.isOpen=r}},scopedSlots:e._u([{key:"trigger",fn:function(r){return n("div",{staticClass:"card-header",attrs:{role:"button"}},[n("p",{staticClass:"card-header-title"},[e._v("\n                "+e._s(t.title)+"\n              ")]),e._v(" "),n("a",{staticClass:"card-header-icon"},[n("b-icon",{attrs:{icon:r.open?"menu-down":"menu-up"}})],1)])}}],null,!0)},[e._v(" "),n("div",{staticClass:"card-content pt-2 pb-2 pr-3"},[n("div",{staticClass:"content"},e._l(t.fileList,(function(r,o){return n("a",{key:o,attrs:{href:r.url,target:"_blank"}},[n("div",{staticClass:"file-box"},[n("div",{staticClass:"icon-box"},[n("b-icon",{attrs:{icon:"download",size:"is-small"}})],1),e._v(" "),n("div",{staticClass:"file-title"},[e._v(e._s(r.name))])]),e._v(" "),n("hr",{directives:[{name:"show",rawName:"v-show",value:o!=t.fileList.length-1,expression:"index != courseFileCategory.fileList.length - 1"}],staticClass:"ml-2 mr-2 mt-2 mb-2 file-hr"})])})),0)])])})),1),e._v(" "),n("div",{staticClass:"block",staticStyle:{position:"sticky",top:"0"}},[n("div",{staticClass:"card mt-3 round-card"},[e._m(0),e._v(" "),n("div",{staticClass:"card-content pt-2 pb-2 pl-0 pr-1"},[n("div",{staticClass:"content lesson-list-box"},e._l(e.courses[e.courseId].content.chapters[e.chapterId].lessonList,(function(t,r){return n("a",{key:r,on:{click:function(t){return e.gotoLessonHandler(e.chapterId,r)}}},["lesson"==t.type?n("div",{staticClass:"lesson-box",class:r==e.lessonId?"has-background-primary has-text-white":""},[n("div",{staticClass:"icon-box ml-3"},[n("b-icon",{attrs:{icon:"play-circle-outline",size:"is-small"}})],1),e._v(" "),n("div",{staticClass:"lesson-title"},[e._v("\n                      "+e._s(t.numb)+". "+e._s(t.title)+"\n                    ")])]):e._e(),e._v(" "),n("hr",{directives:[{name:"show",rawName:"v-show",value:r!=e.courses[e.courseId].content.chapters[e.chapterId].lessonList.length-1,expression:"\n                      index !=\n                      courses[courseId].content.chapters[chapterId].lessonList\n                        .length -\n                        1\n                    "}],staticClass:"ml-2 mr-2 mt-0 mb-2 file-hr"})])})),0)])])])]),e._v(" "),n("div",{staticClass:"column is-three-quarters-tablet is-full-mobile ml-2 mr-2"},[n("div",{staticClass:"columns is-vcentered is-mobile"},[n("div",{staticClass:"column is-two-thirds"},[n("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/my-course"}},[e._v("Home")])],1),e._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/course/"+e.courseId}},[e._v(e._s(e.courses[e.courseId].info.title))])],1),e._v(" "),e._m(1)])])]),e._v(" "),n("div",{staticClass:"column is-one-third"},[n("button",{directives:[{name:"show",rawName:"v-show",value:e.nextLessonButtonVisible,expression:"nextLessonButtonVisible"}],staticClass:"button is-pulled-right is-small",on:{click:e.nextLessonHandler}},[n("span",[e._v("Next Lesson")]),e._v(" "),e._m(2)])])]),e._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"title"},[e._v("\n            "+e._s(e.courses[e.courseId].content.chapters[e.chapterId].lessonList[e.lessonId].title)+"\n          ")])]),e._v(" "),e.courses[e.courseId].content.chapters[e.chapterId].lessonList[e.lessonId].content.video?n("video-player",{attrs:{videoSource:e.videoSource}}):e._e(),e._v(" "),e.courses[e.courseId].content.chapters[e.chapterId].lessonList[e.lessonId].content.intro?n("div",{staticClass:"box mb-6 mt-4"},[n("div",{staticClass:"content"},[e._v("\n            "+e._s(e.courses[e.courseId].content.chapters[e.chapterId].lessonList[e.lessonId].content.intro)+"\n          ")])]):e._e(),e._v(" "),e.courses[e.courseId].content.chapters[e.chapterId].lessonList[e.lessonId].content.shortcut?n("div",{staticClass:"box mb-6 mt-4"},[n("div",{staticClass:"content",domProps:{innerHTML:e._s(e.courses[e.courseId].content.chapters[e.chapterId].lessonList[e.lessonId].content.shortcut)}})]):e._e(),e._v(" "),e.courses[e.courseId].content.chapters[e.chapterId].lessonList[e.lessonId].content.paragraphs?n("div",{staticClass:"box mb-6"},[n("div",{staticClass:"content",domProps:{innerHTML:e._s(e.courses[e.courseId].content.chapters[e.chapterId].lessonList[e.lessonId].content.paragraphs)}})]):e._e()],1)]):e._e()])])}),r,!1,null,null,null);t.default=component.exports;installComponents(component,{VideoPlayer:n(443).default})}}]);