Object.defineProperty(exports,"__esModule",{value:!0}),exports.Mat4=exports.Quat=exports.Vec3=exports.Vec2=void 0;var t=require("../@babel/runtime/helpers/classCallCheck"),e=require("../@babel/runtime/helpers/createClass"),i=function(){function i(e,s){t(this,i),this.x=e||0,this.y=s||0}return e(i,[{key:"set",value:function(t,e){this.x=t,this.y=e}},{key:"clone",value:function(){return new i(this.x,this.y)}},{key:"scale",value:function(t){return this.x*=t,this.y*=t,this}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this}}]),i}();exports.Vec2=i;var s=function(){function i(e,s,a){t(this,i),this.x=e||0,this.y=s||0,this.z=a||0}return e(i,[{key:"set",value:function(t,e,i){this.x=t,this.y=e,this.z=i}},{key:"clone",value:function(){return new i(this.x,this.y,this.z)}},{key:"scale",value:function(t){return this.x*=t,this.y*=t,this.z*=t,this}},{key:"getLength",value:function(){var t=this.x*this.x+this.y*this.y+this.z*this.z;return Math.sqrt(t)}},{key:"getLengthSq",value:function(){return this.x*this.x+this.y*this.y+this.z*this.z}},{key:"normalize",value:function(){var t=this.x*this.x+this.y*this.y+this.z*this.z;if(t>0){var e=1/Math.sqrt(t);this.x*=e,this.y*=e,this.z*=e}return this}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}},{key:"distance",value:function(t){return this.clone().sub(t).getLength()}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y+this.z*t.z}},{key:"getAngle",value:function(t){var e=this.dot(t)/(this.getLength()*t.getLength());return 180*Math.acos(e)/Math.PI}}]),i}();exports.Vec3=s;var a=function(){function i(){t(this,i),this.x=0,this.y=0,this.z=0,this.w=0}return e(i,[{key:"setFromMat4",value:function(t){var e,i,s,a,h,n,r,u,o,y,c,v,l,x,d;return e=t.data[0],i=t.data[4],s=t.data[8],a=t.data[1],h=t.data[5],n=t.data[9],r=t.data[2],u=t.data[6],o=t.data[10],0===(l=e*e+i*i+s*s)?this:(l=1/Math.sqrt(l),0===(x=a*a+h*h+n*n)?this:(x=1/Math.sqrt(x),0===(d=r*r+u*u+o*o)||(i*=l,s*=l,a*=x,n*=x,r*=d=1/Math.sqrt(d),u*=d,(y=(e*=l)+(h*=x)+(o*=d))>=0?(c=Math.sqrt(y+1),this.w=.5*c,c=.5/c,this.x=(n-u)*c,this.y=(r-s)*c,this.z=(i-a)*c):e>h?e>o?(v=e-(h+o)+1,v=Math.sqrt(v),this.x=.5*v,v=.5/v,this.w=(n-u)*v,this.y=(i+a)*v,this.z=(s+r)*v):(v=o-(e+h)+1,v=Math.sqrt(v),this.z=.5*v,v=.5/v,this.w=(i-a)*v,this.x=(r+s)*v,this.y=(u+n)*v):h>o?(v=h-(o+e)+1,v=Math.sqrt(v),this.y=.5*v,v=.5/v,this.w=(r-s)*v,this.z=(n+u)*v,this.x=(a+i)*v):(v=o-(e+h)+1,v=Math.sqrt(v),this.z=.5*v,v=.5/v,this.w=(i-a)*v,this.x=(r+s)*v,this.y=(u+n)*v)),this))}}]),i}();exports.Quat=a;var h=function(){function i(){t(this,i);var e=new Float32Array(16);e[0]=e[5]=e[10]=e[15]=1,this.data=e}return e(i,[{key:"set",value:function(t){for(var e=0;e<t.length;e++)this.data[e]=t[e]}},{key:"clone",value:function(){var t=new i;return t.set(this.data),t}},{key:"transpose",value:function(){var t,e=this.data;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}},{key:"getInverse",value:function(){var t=this.data,e=[],i=t[0],s=t[1],a=t[2],h=t[3],n=t[4],r=t[5],u=t[6],o=t[7],y=t[8],c=t[9],v=t[10],l=t[11],x=t[12],d=t[13],f=t[14],z=t[15],k=c*f*o-d*v*o+d*u*l-r*f*l-c*u*z+r*v*z,g=x*v*o-y*f*o-x*u*l+n*f*l+y*u*z-n*v*z,w=y*d*o-x*c*o+x*r*l-n*d*l-y*r*z+n*c*z,M=x*c*u-y*d*u-x*r*v+n*d*v+y*r*f-n*c*f,p=i*k+s*g+a*w+h*M;if(0===p)throw new Error("error!");var q=1/p;return e[0]=k*q,e[1]=(d*v*h-c*f*h-d*a*l+s*f*l+c*a*z-s*v*z)*q,e[2]=(r*f*h-d*u*h+d*a*o-s*f*o-r*a*z+s*u*z)*q,e[3]=(c*u*h-r*v*h-c*a*o+s*v*o+r*a*l-s*u*l)*q,e[4]=g*q,e[5]=(y*f*h-x*v*h+x*a*l-i*f*l-y*a*z+i*v*z)*q,e[6]=(x*u*h-n*f*h-x*a*o+i*f*o+n*a*z-i*u*z)*q,e[7]=(n*v*h-y*u*h+y*a*o-i*v*o-n*a*l+i*u*l)*q,e[8]=w*q,e[9]=(x*c*h-y*d*h-x*s*l+i*d*l+y*s*z-i*c*z)*q,e[10]=(n*d*h-x*r*h+x*s*o-i*d*o-n*s*z+i*r*z)*q,e[11]=(y*r*h-n*c*h-y*s*o+i*c*o+n*s*l-i*r*l)*q,e[12]=M*q,e[13]=(y*d*a-x*c*a+x*s*v-i*d*v-y*s*f+i*c*f)*q,e[14]=(x*r*a-n*d*a-x*s*u+i*d*u+n*s*f-i*r*f)*q,e[15]=(n*c*a-y*r*a+y*s*u-i*c*u-n*s*v+i*r*v)*q,this.data=e,this}},{key:"determinant",value:function(){var t=this.data,e=t[0],i=t[4],s=t[8],a=t[12],h=t[1],n=t[5],r=t[9],u=t[13],o=t[2],y=t[6],c=t[10],v=t[14];return t[3]*(+a*r*y-s*u*y-a*n*c+i*u*c+s*n*v-i*r*v)+t[7]*(+e*r*v-e*u*c+a*h*c-s*h*v+s*u*o-a*r*o)+t[11]*(+e*u*y-e*n*v-a*h*y+i*h*v+a*n*o-i*u*o)+t[15]*(-s*n*o-e*r*y+e*n*c+s*h*y-i*h*c+i*r*o)}},{key:"decompose",value:function(){var t=this.data,e=new s(t[0],t[1],t[2]).getLength(),a=new s(t[4],t[5],t[6]).getLength(),h=new s(t[8],t[9],t[10]).getLength();this.determinant()<0&&(e=-e);var n=new s(t[12],t[13],t[14]),r=new i;r.set(this.data);var u=1/e,o=1/a,y=1/h;r.data[0]*=u,r.data[1]*=u,r.data[2]*=u,r.data[4]*=o,r.data[5]*=o,r.data[6]*=o,r.data[8]*=y,r.data[9]*=y,r.data[10]*=y;var c=new s(e,a,h);return c.x=e,c.y=a,c.z=h,{position:n,rotation:r,scale:c}}}]),i}();exports.Mat4=h;