(window.webpackJsonp_woo_block_experiments=window.webpackJsonp_woo_block_experiments||[]).push([[1],{4:function(e,o,t){}}]),function(e){function o(o){for(var n,i,p=o[0],l=o[1],u=o[2],f=0,a=[];f<p.length;f++)i=p[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&a.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(o);a.length;)a.shift()();return c.push.apply(c,u||[]),t()}function t(){for(var e,o=0;o<c.length;o++){for(var t=c[o],n=!0,p=1;p<t.length;p++){var l=t[p];0!==r[l]&&(n=!1)}n&&(c.splice(o--,1),e=i(i.s=t[0]))}return e}var n={},r={0:0},c=[];function i(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,o,t){i.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,o){if(1&o&&(e=i(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)i.d(t,n,function(o){return e[o]}.bind(null,n));return t},i.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(o,"a",o),o},i.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},i.p="";var p=window.webpackJsonp_woo_block_experiments=window.webpackJsonp_woo_block_experiments||[],l=p.push.bind(p);p.push=o,p=p.slice();for(var u=0;u<p.length;u++)o(p[u]);var s=l;c.push([6,1]),t()}([function(e,o){e.exports=window.wp.element},function(e,o){e.exports=window.wp.i18n},function(e,o){e.exports=window.wp.blockEditor},function(e,o){e.exports=window.wp.blocks},,function(e,o,t){},function(e,o,t){"use strict";t.r(o);var n=t(3),r=(t(4),t(0)),c=t(1),i=t(2);t(5),Object(n.registerBlockType)("create-block/woo-block-experiments",{edit:function(){return Object(r.createElement)("p",Object(i.useBlockProps)(),Object(c.__)("Woo Block Experiments – hello from the editor!","woo-block-experiments"))},save:function(){return Object(r.createElement)("p",i.useBlockProps.save(),Object(c.__)("Woo Block Experiments – hello from the saved content!","woo-block-experiments"))}})}]);