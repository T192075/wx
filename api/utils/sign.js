Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(t,n){var u=[],a=Object.keys(n);for(var o in a){var s=a[o];u.push(n[s])}for(var i=a.length,h=t,v=parseInt(i/4)+1,f=0;f<v;f++){h=e(h);u.push(h.toString(16))}var p=u.join("");return"01"+(0,r.hash32)(p,256).toString(16)};var r=require("./murmurhash2");function e(r){return 32767&214013*r+2531011>>16}