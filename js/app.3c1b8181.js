(function(e){function t(t){for(var o,i,s=t[0],p=t[1],c=t[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in p)Object.prototype.hasOwnProperty.call(p,o)&&(e[o]=p[o]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var p=n[s];0!==r[p]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/team-page/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=p;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0fae":function(e,t,n){e.exports=n.p+"img/photo3.b664b1bf.png"},2855:function(e,t,n){e.exports=n.p+"img/photo1.f821ee9b.png"},5038:function(e,t,n){e.exports=n.p+"img/photo6.b27fa0a7.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper container",attrs:{id:"app"}},[n("HeaderComponent"),n("ListCardsComponent",{staticClass:"main"}),n("FooterComponent",{attrs:{footer:e.footer}})],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("h1",{staticClass:"header__title animate__animated animate__fadeIn"},[e._v(" "+e._s(e.titleHeader)+" ")]),n("div",{staticClass:"header__description animate__animated animate__fadeIn"},[n("h2",{staticClass:"header__description__title"},[e._v(" "+e._s(e.title)+" ")]),n("p",{staticClass:"header__description__info"},[e._v(" "+e._s(e.description)+" ")])])])},s=[],p={name:"HeaderComponent",data:function(){return{titleHeader:"The creative crew",title:"WHO WE ARE",description:"We are team of creatively diverse. driven. innovative individuals working in various locations from the world."}}},c=p,l=n("2877"),u=Object(l["a"])(c,i,s,!1,null,null,null),f=u.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.teams,(function(e,t){return n("CardComponent",{key:t,attrs:{person:e}})})),1)},m=[],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card animate__animated animate__zoomIn"},[n("div",{staticClass:"card__img"},[n("img",{attrs:{src:e.imgUrl,alt:e.person.name}})]),n("h3",{staticClass:"card__title"},[e._v(e._s(e.person.name))]),n("span",{staticClass:"card__subtitle"},[e._v(e._s(e.person.job))])])},h=[],g={name:"CardComponent",props:["person"],computed:{imgUrl:function(){return n("bb6e")("./".concat(this.person.image))}}},b=g,v=Object(l["a"])(b,_,h,!1,null,null,null),C=v.exports,y={name:"ListCardsComponent",components:{CardComponent:C},data:function(){return{teams:[]}},created:function(){this.teams=[{name:"Bill Mahoney",job:"Product Owner",image:"photo1.png"},{name:"Saba Cabrera",job:"Art Director",image:"photo2.png"},{name:"Shae Le",job:"Tech Lead",image:"photo3.png"},{name:"Skylah Lu",job:"UX Designer",image:"photo4.png"},{name:"Griff Richards",job:"Developer",image:"photo5.png"},{name:"Stan Jhon",job:"Developer",image:"photo6.png"}]}},j=y,O=Object(l["a"])(j,d,m,!1,null,null,null),w=O.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("p",{staticClass:"footer__copy animate__animated animate__fadeIn"},[e._v(" "+e._s(e.footer.name)+" © "+e._s(e.footer.challenges)+" ")])])},E=[],S={name:"FooterComponent",props:["footer"]},k=S,P=Object(l["a"])(k,x,E,!1,null,null,null),D=P.exports,L={name:"App",components:{HeaderComponent:f,ListCardsComponent:w,FooterComponent:D},data:function(){return{footer:{name:"Carlos Santillan Espinoza",challenges:"DevChallenges.io"}}}},H=L,M=(n("5c0b"),Object(l["a"])(H,r,a,!1,null,null,null)),T=M.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(T)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"68e9":function(e,t,n){e.exports=n.p+"img/photo5.5892742a.png"},"9c0c":function(e,t,n){},a832:function(e,t,n){e.exports=n.p+"img/photo4.99dc81be.png"},bb6e:function(e,t,n){var o={"./photo1.png":"2855","./photo2.png":"e532","./photo3.png":"0fae","./photo4.png":"a832","./photo5.png":"68e9","./photo6.png":"5038"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id="bb6e"},e532:function(e,t,n){e.exports=n.p+"img/photo2.d5781e0f.png"}});
//# sourceMappingURL=app.3c1b8181.js.map