(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1b49":function(t,e,a){},"25da":function(t,e,a){},"29c3":function(t,e,a){"use strict";var n=a("7de9"),r=a.n(n);r.a},3015:function(t,e,a){t.exports=a.p+"img/lightbulb.fc892873.png"},3562:function(t,e,a){"use strict";var n=a("d08b"),r=a.n(n);r.a},"51c4":function(t,e,a){t.exports=a.p+"img/idea.da32489e.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navigation"),a("router-view"),a("Footer")],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"navigation",attrs:{type:t.themeKey,variant:t.themeKey}},[a("b-navbar-nav",[a("profile-image",{attrs:{circle:"true",size:"small"}}),a("b-nav-item",{attrs:{to:"/"}},[t._v("Home")]),a("b-nav-item",{attrs:{to:"/about"}},[t._v("About")]),a("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[a("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("ES")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("RU")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("FA")])],1),a("b-nav-item-dropdown",{attrs:{text:"User",right:""}},[a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Account")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Settings")])],1),a("img",{staticClass:"theme-toggle",attrs:{src:t.themeImage,alt:"theme"},on:{click:t.toggleTheme}})],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ProfileImage"},[a("img",{class:t.classObject,attrs:{src:t.lordHubImg,alt:"Profile Image"}})])},l=[],u=a("ade3"),d={props:{circle:Boolean,size:String,url:String},computed:{classObject:function(){return Object(u["a"])({round_image:this.circle},this.size,this.size)}},data:function(){return{lordHubImg:"https://avatars3.githubusercontent.com/u/18556428?s=460&v=4"}}},f=d,v=(a("c84f"),a("2877")),m=Object(v["a"])(f,c,l,!1,null,"7d42ae94",null),p=m.exports,h={components:{ProfileImage:p},props:{},data:function(){return{theme:0,themeImage:a("51c4"),themeKey:"light"}},watch:{theme:function(){this.themeKey=this.theme?"light":"dark",this.themeImage=this.theme?a("51c4"):a("3015"),console.log("watch",this.theme)}},methods:{toggleTheme:function(){this.theme=!this.theme,console.log(this.theme)}}},g=h,w=(a("3562"),Object(v["a"])(g,s,o,!1,null,null,null)),_=w.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("ul",[a("li",[t._v("test")])]),t._v(" Icons made by "),a("a",{attrs:{href:"https://www.flaticon.com/authors/good-ware",title:"Good Ware"}},[t._v("Good Ware")]),t._v(" from "),a("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v(" www.flaticon.com")])])}],x={name:"Footer"},y=x,j=(a("7433"),Object(v["a"])(y,b,C,!1,null,null,null)),E=j.exports,k=a("5f5b"),O=a("b1e0");n["default"].use(k["a"]),n["default"].use(O["a"]);var V={name:"App",components:{Navigation:_,Footer:E}},z=V,M=(a("5c0b"),Object(v["a"])(z,r,i,!1,null,null,null)),I=M.exports,S=a("8c4f"),P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"About"},[a("h1",[t._v("What is a Crypto-Currency?")]),a("p",[t._v(" It's a digital currency in which encryption techniques are used to regulate the generation of units of currency and verify the transfer of funds, operating independently of a central bank. ")])])}],T={name:"About"},W=T,L=Object(v["a"])(W,P,R,!1,null,null,null),A=L.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Profile"},[a("div",{staticClass:"info"},[a("profile-image",{attrs:{circle:1,size:"large"}}),t._m(0)],1),a("div",{staticClass:"content"},[a("card",{staticClass:"col-md-6",attrs:{title:"Timeline"}}),a("vue-instagram",{attrs:{token:t.token,count:5,tags:["redminote9pro"],mediaType:"image"},scopedSlots:t._u([{key:"loading",fn:function(e){return[e.loading?a("h1",{staticClass:"fancy-loading"},[t._v("Loading, please wait...")]):t._e()]}},{key:"feeds",fn:function(e){return[a("li",{staticClass:"fancy-list"},[t._v(" "+t._s(e.feed.link)+" ")])]}},{key:"error",fn:function(e){return[a("div",{staticClass:"fancy-alert"},[t._v(" "+t._s(e.error.error_message)+" ")])]}}])})],1),a("contact-me")],1)},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"description"},[a("h2",[t._v("Andrés Paúl Muñoz")]),a("h3",[t._v("Who am I?")]),a("span",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum")])])}],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ContactMe"},[a("div",{staticClass:"contact-area"},[a("div",{staticClass:"contact"},[a("main",[a("section",[a("div",{staticClass:"content"},[a("img",{attrs:{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/256492/_mLIxaKY_400x400.jpg",alt:"Profile Image"}}),t._m(0),a("button",{attrs:{id:"contact_me"},on:{click:t.contactMe}},[a("span",[t._v("Contact Me")]),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48"}},[a("g",{staticClass:"nc-icon-wrapper",attrs:{fill:"#444444"}},[a("path",{attrs:{d:"M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"}})])])])]),t._m(1)])]),a("nav",[a("a",{staticClass:"gmail",attrs:{href:"#"}},[a("div",{staticClass:"icon"},[a("svg",{attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z","fill-rule":"evenodd"}})])]),t._m(2),a("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48"}},[a("g",{staticClass:"nc-icon-wrapper",attrs:{fill:"#444444"}},[a("path",{attrs:{d:"M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"}})])])]),a("a",{staticClass:"facebook",attrs:{href:"#"}},[a("div",{staticClass:"icon"},[a("svg",{attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414"}},[a("path",{attrs:{d:"M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0","fill-rule":"nonzero"}})])]),t._m(3),a("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48"}},[a("g",{staticClass:"nc-icon-wrapper",attrs:{fill:"#444444"}},[a("path",{attrs:{d:"M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"}})])])]),a("a",{staticClass:"twitter",attrs:{href:"#"}},[a("div",{staticClass:"icon"},[a("svg",{attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414"}},[a("path",{attrs:{d:"M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z","fill-rule":"nonzero"}})])]),t._m(4),a("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48"}},[a("g",{staticClass:"nc-icon-wrapper",attrs:{fill:"#444444"}},[a("path",{attrs:{d:"M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"}})])])])])])])])},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",[a("h1",[t._v("Riccardo Cavallo")]),a("p",[t._v("Hi, I'm Riccardo Cavallo and I'm a Graphic and Visual Designer.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("p",[t._v("Contact Me")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",[t._v("Email")]),a("span",[t._v("Riccavallo@gmail.com")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",[t._v("Facebook")]),a("span",[t._v("Riccardo Cavallo")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",[t._v("Twitter")]),a("span",[t._v("@RichoxDesign")])])}],q={props:{},methods:{contactMe:function(){$("#contact_me").toggleClass("active"),$(".title").toggleClass("active"),$("nav").toggleClass("active")}}},Q=q,U=(a("29c3"),Object(v["a"])(Q,H,N,!1,null,null,null)),Y=U.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Card"},[a("b-card",{attrs:{"bg-variant":"dark","text-variant":"white",title:t.title}},[a("b-card-text",[t._v(" With supporting text below as a natural lead-in to additional content. ")]),a("b-button",{attrs:{href:"#",variant:"primary"}},[t._v("Go somewhere")])],1)],1)},G=[],J={props:{title:String,subtitle:String}},K=J,Z=Object(v["a"])(K,D,G,!1,null,null,null),X=Z.exports,tt=a("284a"),et=a.n(tt),at={components:{Card:X,ContactMe:Y,ProfileImage:p,VueInstagram:et.a},props:{},data:function(){return{token:"IGQVJYQ3d5NGZAUSWdYVlBkU0V4QW84OUlrdTZA4eWtlV3pWb0NxaE5JNkVSdHFVWXdMczVERVU3OXFDSDgzQlo3TjVNRWVTZAi1KS2FJSEhvSmQ4dlkza0NPVjhCLWRIeTFSY1o3RExYTDQxYmwzM3NYR0FzR3RqcWRVTzE4"}}},nt=at,rt=(a("cb30"),Object(v["a"])(nt,F,B,!1,null,null,null)),it=rt.exports;n["default"].use(S["a"]);var st=new S["a"]({routes:[{path:"/",name:"Profile",component:it},{path:"/about",name:"About",component:A}]});n["default"].config.productionTip=!1,window.$=a("1157"),window.JQuery=a("1157"),new n["default"]({render:function(t){return t(I)},router:st}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},7433:function(t,e,a){"use strict";var n=a("25da"),r=a.n(n);r.a},"7de9":function(t,e,a){},"9c0c":function(t,e,a){},c84f:function(t,e,a){"use strict";var n=a("cdbc"),r=a.n(n);r.a},cb30:function(t,e,a){"use strict";var n=a("1b49"),r=a.n(n);r.a},cdbc:function(t,e,a){},d08b:function(t,e,a){}});
//# sourceMappingURL=app.98f93f3e.js.map