!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-color-picker-board",[],e):"object"==typeof exports?exports["vue-color-picker-board"]=e():t["vue-color-picker-board"]=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){var n=o(1)(o(2),o(3),null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,o,n){var r,i=t=t||{},c=typeof t["default"];"object"!==c&&"function"!==c||(r=t,i=t["default"]);var s="function"==typeof i?i.options:i;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),o&&(s._scopeId=o),n){var a=Object.create(s.computed||null);Object.keys(n).forEach(function(t){var e=n[t];a[t]=function(){return e}}),s.computed=a}return{esModule:r,exports:i,options:s}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={mounted:function(){this.color=this.defaultColor,this.selectedColor=this.color,this.canvas=document.getElementById("canvas")},props:{width:{type:Number,"default":800},height:{type:Number,"default":100},defaultColor:{type:String,"default":"#4BBADD",validator:function(t){return/^#[0-9a-f]{3,6}$/i.test(t)}}},data:function(){return{canvas:null,color:null,selectedColor:null}},methods:{onClick:function(){this.selectedColor=this.color,this.$emit("onSelection",this.color)},onMouseMove:function(t){var e=this.getHexColor(t);this.color=e},getHexColor:function(t){var e=t.pageX-this.canvas.offsetLeft,o=t.pageY-this.canvas.offsetTop,n=(this.canvas.height-o)/this.canvas.height*100,r=Math.round((this.canvas.width-e)/this.canvas.width*100),i=3.6*r,c=Math.round(n/3+50),s=Math.round(n/3+40),a=this.hslToHex(i,c,s);return a},hslToHex:function(t,e,o){t/=360,e/=100,o/=100;var n=void 0,r=void 0,i=void 0;if(0===e)n=r=i=o;else{var c=function(t,e,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+6*(e-t)*o:o<.5?e:o<2/3?t+(e-t)*(2/3-o)*6:t},s=o<.5?o*(1+e):o+e-o*e,a=2*o-s;n=c(a,s,t+1/3),r=c(a,s,t),i=c(a,s,t-1/3)}var u=function(t){var e=Math.round(255*t).toString(16);return 1===e.length?"0"+e:e};return("#"+u(n)+u(r)+u(i)).toUpperCase()}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component color-picker"},[o("canvas",{style:{backgroundColor:t.color},attrs:{id:"canvas",width:t.width,height:t.height},on:{mousemove:t.onMouseMove,click:t.onClick}})])},staticRenderFns:[]}}])});