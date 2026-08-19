(function(){"use strict";const i0={lo:0,hi:1,loClosed:!0,hiClosed:!0};function Kr(e,r){return!(e.lo!==null&&(e.loClosed?r<e.lo:r<=e.lo)||e.hi!==null&&(e.hiClosed?r>e.hi:r>=e.hi))}function Qr(e){const r=e.loClosed&&e.lo!==null?"[":"(",a=e.hiClosed&&e.hi!==null?"]":")";return`${r}${e.lo??"-inf"}, ${e.hi??"inf"}${a}`}function br(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R0,q2;function Ds(){if(q2)return R0;q2=1;var e=typeof Object.defineProperty=="function"?Object.defineProperty:null;return R0=e,R0}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b0,m2;function Us(){if(m2)return b0;m2=1;var e=Ds();function r(){try{return e({},"x",{}),!0}catch{return!1}}return b0=r,b0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g0,d2;function Xs(){if(d2)return g0;d2=1;var e=Object.defineProperty;return g0=e,g0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L0,h2;function p2(){if(h2)return L0;h2=1;function e(r){return typeof r=="number"}return L0=e,L0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N0,y2;function R2(){if(y2)return N0;y2=1;function e(i){return i[0]==="-"}function r(i){var t="",u;for(u=0;u<i;u++)t+="0";return t}function a(i,t,u){var v=!1,n=t-i.length;return n<0||(e(i)&&(v=!0,i=i.substr(1)),i=u?i+r(n):r(n)+i,v&&(i="-"+i)),i}return N0=a,N0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I0,b2;function Vs(){if(b2)return I0;b2=1;var e=p2(),r=R2(),a=String.prototype.toLowerCase,i=String.prototype.toUpperCase;function t(u){var v,n,o;switch(u.specifier){case"b":v=2;break;case"o":v=8;break;case"x":case"X":v=16;break;case"d":case"i":case"u":default:v=10;break}if(n=u.arg,o=parseInt(n,10),!isFinite(o)){if(!e(n))throw new Error("invalid integer. Value: "+n);o=0}return o<0&&(u.specifier==="u"||v!==10)&&(o=4294967295+o+1),o<0?(n=(-o).toString(v),u.precision&&(n=r(n,u.precision,u.padRight)),n="-"+n):(n=o.toString(v),!o&&!u.precision?n="":u.precision&&(n=r(n,u.precision,u.padRight)),u.sign&&(n=u.sign+n)),v===16&&(u.alternate&&(n="0x"+n),n=u.specifier===i.call(u.specifier)?i.call(n):a.call(n)),v===8&&u.alternate&&n.charAt(0)!=="0"&&(n="0"+n),n}return I0=t,I0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A0,g2;function Ks(){if(g2)return A0;g2=1;function e(r){return typeof r=="string"}return A0=e,A0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M0,L2;function Qs(){if(L2)return M0;L2=1;var e=Math.abs,r=String.prototype.toLowerCase,a=String.prototype.toUpperCase,i=String.prototype.replace,t=/e\+(\d)$/,u=/e-(\d)$/,v=/^(\d+)$/,n=/^(\d+)e/,o=/\.0$/,f=/\.0*e/,l=/(\..*[^0])0*e/;function s(q,m){var $,_;switch(m.specifier){case"e":case"E":_=q.toExponential(m.precision);break;case"f":case"F":_=q.toFixed(m.precision);break;case"g":case"G":e(q)<1e-4?($=m.precision,$>0&&($-=1),_=q.toExponential($)):_=q.toPrecision(m.precision),m.alternate||(_=i.call(_,l,"$1e"),_=i.call(_,f,"e"),_=i.call(_,o,""));break;default:throw new Error("invalid double notation. Value: "+m.specifier)}return _=i.call(_,t,"e+0$1"),_=i.call(_,u,"e-0$1"),m.alternate&&(_=i.call(_,v,"$1."),_=i.call(_,n,"$1.e")),q>=0&&m.sign&&(_=m.sign+_),_=m.specifier===a.call(m.specifier)?a.call(_):r.call(_),_}return M0=s,M0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P0,N2;function Ys(){if(N2)return P0;N2=1;function e(a){var i="",t;for(t=0;t<a;t++)i+=" ";return i}function r(a,i,t){var u=i-a.length;return u<0||(a=t?a+e(u):e(u)+a),a}return P0=r,P0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S0,I2;function Js(){if(I2)return S0;I2=1;var e=Vs(),r=Ks(),a=p2(),i=Qs(),t=Ys(),u=R2(),v=String.fromCharCode,n=Array.isArray;function o(s){return s!==s}function f(s){var q={};return q.specifier=s.specifier,q.precision=s.precision===void 0?1:s.precision,q.width=s.width,q.flags=s.flags||"",q.mapping=s.mapping,q}function l(s){var q,m,$,_,c,h,y,L,g,I;if(!n(s))throw new TypeError("invalid argument. First argument must be an array. Value: `"+s+"`.");for(h="",y=1,g=0;g<s.length;g++)if($=s[g],r($))h+=$;else{if(q=$.precision!==void 0,$=f($),!$.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+g+"`. Value: `"+$+"`.");for($.mapping&&(y=$.mapping),m=$.flags,I=0;I<m.length;I++)switch(_=m.charAt(I),_){case" ":$.sign=" ";break;case"+":$.sign="+";break;case"-":$.padRight=!0,$.padZeros=!1;break;case"0":$.padZeros=m.indexOf("-")<0;break;case"#":$.alternate=!0;break;default:throw new Error("invalid flag: "+_)}if($.width==="*"){if($.width=parseInt(arguments[y],10),y+=1,o($.width))throw new TypeError("the argument for * width at position "+y+" is not a number. Value: `"+$.width+"`.");$.width<0&&($.padRight=!0,$.width=-$.width)}if(q&&$.precision==="*"){if($.precision=parseInt(arguments[y],10),y+=1,o($.precision))throw new TypeError("the argument for * precision at position "+y+" is not a number. Value: `"+$.precision+"`.");$.precision<0&&($.precision=1,q=!1)}switch($.arg=arguments[y],$.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":q&&($.padZeros=!1),$.arg=e($);break;case"s":$.maxWidth=q?$.precision:-1,$.arg=String($.arg);break;case"c":if(!o($.arg)){if(c=parseInt($.arg,10),c<0||c>127)throw new Error("invalid character code. Value: "+$.arg);$.arg=o(c)?String($.arg):v(c)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(q||($.precision=6),L=parseFloat($.arg),!isFinite(L)){if(!a($.arg))throw new Error("invalid floating-point number. Value: "+h);L=$.arg,$.padZeros=!1}$.arg=i(L,$);break;default:throw new Error("invalid specifier: "+$.specifier)}$.maxWidth>=0&&$.arg.length>$.maxWidth&&($.arg=$.arg.substring(0,$.maxWidth)),$.padZeros?$.arg=u($.arg,$.width||$.precision,$.padRight):$.width&&($.arg=t($.arg,$.width,$.padRight)),h+=$.arg||"",y+=1}return h}return S0=l,S0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E0,A2;function Zs(){if(A2)return E0;A2=1;var e=Js();return E0=e,E0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w0,M2;function js(){if(M2)return w0;M2=1;var e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function r(i){var t={mapping:i[1]?parseInt(i[1],10):void 0,flags:i[2],width:i[3],precision:i[5],specifier:i[6]};return i[4]==="."&&i[5]===void 0&&(t.precision="1"),t}function a(i){var t,u,v,n;for(u=[],n=0,v=e.exec(i);v;)t=i.slice(n,e.lastIndex-v[0].length),t.length&&u.push(t),v[6]==="%"?u.push("%"):u.push(r(v)),n=e.lastIndex,v=e.exec(i);return t=i.slice(n),t.length&&u.push(t),u}return w0=a,w0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F0,P2;function zs(){if(P2)return F0;P2=1;var e=js();return F0=e,F0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O0,S2;function xs(){if(S2)return O0;S2=1;function e(r){return typeof r=="string"}return O0=e,O0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T0,E2;function r8(){if(E2)return T0;E2=1;var e=Zs(),r=zs(),a=xs();function i(t){var u,v;if(!a(t))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",t));for(u=[r(t)],v=1;v<arguments.length;v++)u.push(arguments[v]);return e.apply(null,u)}return T0=i,T0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H0,w2;function e8(){if(w2)return H0;w2=1;var e=r8();return H0=e,H0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G0,F2;function a8(){if(F2)return G0;F2=1;var e=e8(),r=Object.prototype,a=r.toString,i=r.__defineGetter__,t=r.__defineSetter__,u=r.__lookupGetter__,v=r.__lookupSetter__;function n(o,f,l){var s,q,m,$;if(typeof o!="object"||o===null||a.call(o)==="[object Array]")throw new TypeError(e("invalid argument. First argument must be an object. Value: `%s`.",o));if(typeof l!="object"||l===null||a.call(l)==="[object Array]")throw new TypeError(e("invalid argument. Property descriptor must be an object. Value: `%s`.",l));if(q="value"in l,q&&(u.call(o,f)||v.call(o,f)?(s=o.__proto__,o.__proto__=r,delete o[f],o[f]=l.value,o.__proto__=s):o[f]=l.value),m="get"in l,$="set"in l,q&&(m||$))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return m&&i&&i.call(o,f,l.get),$&&t&&t.call(o,f,l.set),o}return G0=n,G0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C0,O2;function i8(){if(O2)return C0;O2=1;var e=Us(),r=Xs(),a=a8(),i;return e()?i=r:i=a,C0=i,C0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k0,T2;function n8(){if(T2)return k0;T2=1;var e=i8();function r(a,i,t){e(a,i,{configurable:!1,enumerable:!1,writable:!1,value:t})}return k0=r,k0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,H2;function fr(){if(H2)return W0;H2=1;var e=n8();return W0=e,W0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0,G2;function t8(){if(G2)return B0;G2=1;function e(r){return r!==r}return B0=e,B0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D0,C2;function X(){if(C2)return D0;C2=1;var e=t8();return D0=e,D0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U0,k2;function u8(){if(k2)return U0;k2=1;function e(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return U0=e,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X0,W2;function v8(){if(W2)return X0;W2=1;var e=u8();return X0=e,X0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0,B2;function f8(){if(B2)return V0;B2=1;var e=v8(),r=e();function a(){return r&&typeof Symbol.toStringTag=="symbol"}return V0=a,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K0,D2;function o8(){if(D2)return K0;D2=1;var e=f8();return K0=e,K0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q0,U2;function X2(){if(U2)return Q0;U2=1;var e=Object.prototype.toString;return Q0=e,Q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y0,V2;function l8(){if(V2)return Y0;V2=1;var e=X2();function r(a){return e.call(a)}return Y0=r,Y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J0,K2;function s8(){if(K2)return J0;K2=1;var e=Object.prototype.hasOwnProperty;function r(a,i){return a==null?!1:e.call(a,i)}return J0=r,J0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z0,Q2;function c8(){if(Q2)return Z0;Q2=1;var e=s8();return Z0=e,Z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j0,Y2;function _8(){if(Y2)return j0;Y2=1;var e=typeof Symbol=="function"?Symbol:void 0;return j0=e,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z0,J2;function $8(){if(J2)return z0;J2=1;var e=_8();return z0=e,z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x0,Z2;function q8(){if(Z2)return x0;Z2=1;var e=$8(),r=typeof e=="function"?e.toStringTag:"";return x0=r,x0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var re,j2;function m8(){if(j2)return re;j2=1;var e=c8(),r=q8(),a=X2();function i(t){var u,v,n;if(t==null)return a.call(t);v=t[r],u=e(t,r);try{t[r]=void 0}catch{return a.call(t)}return n=a.call(t),u?t[r]=v:delete t[r],n}return re=i,re}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ee,z2;function n0(){if(z2)return ee;z2=1;var e=o8(),r=l8(),a=m8(),i;return e()?i=a:i=r,ee=i,ee}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ae,x2;function d8(){if(x2)return ae;x2=1;var e=n0(),r=typeof Uint32Array=="function";function a(i){return r&&i instanceof Uint32Array||e(i)==="[object Uint32Array]"}return ae=a,ae}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ie,r3;function h8(){if(r3)return ie;r3=1;var e=d8();return ie=e,ie}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ne,e3;function p8(){if(e3)return ne;e3=1;var e=4294967295;return ne=e,ne}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var te,a3;function y8(){if(a3)return te;a3=1;var e=typeof Uint32Array=="function"?Uint32Array:null;return te=e,te}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ue,i3;function R8(){if(i3)return ue;i3=1;var e=h8(),r=p8(),a=y8();function i(){var t,u;if(typeof a!="function")return!1;try{u=[1,3.14,-3.14,r+1,r+2],u=new a(u),t=e(u)&&u[0]===1&&u[1]===3&&u[2]===r-2&&u[3]===0&&u[4]===1}catch{t=!1}return t}return ue=i,ue}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ve,n3;function b8(){if(n3)return ve;n3=1;var e=R8();return ve=e,ve}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fe,t3;function g8(){if(t3)return fe;t3=1;var e=typeof Uint32Array=="function"?Uint32Array:void 0;return fe=e,fe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oe,u3;function L8(){if(u3)return oe;u3=1;function e(){throw new Error("not implemented")}return oe=e,oe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var le,v3;function Tr(){if(v3)return le;v3=1;var e=b8(),r=g8(),a=L8(),i;return e()?i=r:i=a,le=i,le}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var se,f3;function N8(){if(f3)return se;f3=1;var e=n0(),r=typeof Float64Array=="function";function a(i){return r&&i instanceof Float64Array||e(i)==="[object Float64Array]"}return se=a,se}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ce,o3;function I8(){if(o3)return ce;o3=1;var e=N8();return ce=e,ce}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _e,l3;function A8(){if(l3)return _e;l3=1;var e=typeof Float64Array=="function"?Float64Array:null;return _e=e,_e}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $e,s3;function M8(){if(s3)return $e;s3=1;var e=I8(),r=A8();function a(){var i,t;if(typeof r!="function")return!1;try{t=new r([1,3.14,-3.14,NaN]),i=e(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{i=!1}return i}return $e=a,$e}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qe,c3;function P8(){if(c3)return qe;c3=1;var e=M8();return qe=e,qe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var me,_3;function S8(){if(_3)return me;_3=1;var e=typeof Float64Array=="function"?Float64Array:void 0;return me=e,me}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var de,$3;function E8(){if($3)return de;$3=1;function e(){throw new Error("not implemented")}return de=e,de}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var he,q3;function Hr(){if(q3)return he;q3=1;var e=P8(),r=S8(),a=E8(),i;return e()?i=r:i=a,he=i,he}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pe,m3;function w8(){if(m3)return pe;m3=1;var e=n0(),r=typeof Uint8Array=="function";function a(i){return r&&i instanceof Uint8Array||e(i)==="[object Uint8Array]"}return pe=a,pe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ye,d3;function F8(){if(d3)return ye;d3=1;var e=w8();return ye=e,ye}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Re,h3;function O8(){if(h3)return Re;h3=1;var e=255;return Re=e,Re}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var be,p3;function T8(){if(p3)return be;p3=1;var e=typeof Uint8Array=="function"?Uint8Array:null;return be=e,be}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ge,y3;function H8(){if(y3)return ge;y3=1;var e=F8(),r=O8(),a=T8();function i(){var t,u;if(typeof a!="function")return!1;try{u=[1,3.14,-3.14,r+1,r+2],u=new a(u),t=e(u)&&u[0]===1&&u[1]===3&&u[2]===r-2&&u[3]===0&&u[4]===1}catch{t=!1}return t}return ge=i,ge}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Le,R3;function G8(){if(R3)return Le;R3=1;var e=H8();return Le=e,Le}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ne,b3;function C8(){if(b3)return Ne;b3=1;var e=typeof Uint8Array=="function"?Uint8Array:void 0;return Ne=e,Ne}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ie,g3;function k8(){if(g3)return Ie;g3=1;function e(){throw new Error("not implemented")}return Ie=e,Ie}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ae,L3;function W8(){if(L3)return Ae;L3=1;var e=G8(),r=C8(),a=k8(),i;return e()?i=r:i=a,Ae=i,Ae}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Me,N3;function B8(){if(N3)return Me;N3=1;var e=n0(),r=typeof Uint16Array=="function";function a(i){return r&&i instanceof Uint16Array||e(i)==="[object Uint16Array]"}return Me=a,Me}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pe,I3;function D8(){if(I3)return Pe;I3=1;var e=B8();return Pe=e,Pe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Se,A3;function U8(){if(A3)return Se;A3=1;var e=65535;return Se=e,Se}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ee,M3;function X8(){if(M3)return Ee;M3=1;var e=typeof Uint16Array=="function"?Uint16Array:null;return Ee=e,Ee}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var we,P3;function V8(){if(P3)return we;P3=1;var e=D8(),r=U8(),a=X8();function i(){var t,u;if(typeof a!="function")return!1;try{u=[1,3.14,-3.14,r+1,r+2],u=new a(u),t=e(u)&&u[0]===1&&u[1]===3&&u[2]===r-2&&u[3]===0&&u[4]===1}catch{t=!1}return t}return we=i,we}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fe,S3;function K8(){if(S3)return Fe;S3=1;var e=V8();return Fe=e,Fe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oe,E3;function Q8(){if(E3)return Oe;E3=1;var e=typeof Uint16Array=="function"?Uint16Array:void 0;return Oe=e,Oe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Te,w3;function Y8(){if(w3)return Te;w3=1;function e(){throw new Error("not implemented")}return Te=e,Te}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var He,F3;function J8(){if(F3)return He;F3=1;var e=K8(),r=Q8(),a=Y8(),i;return e()?i=r:i=a,He=i,He}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ge,O3;function Z8(){if(O3)return Ge;O3=1;var e=W8(),r=J8(),a={uint16:r,uint8:e};return Ge=a,Ge}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ce,T3;function j8(){if(T3)return Ce;T3=1;var e=Z8(),r;function a(){var i,t;return i=new e.uint16(1),i[0]=4660,t=new e.uint8(i.buffer),t[0]===52}return r=a(),Ce=r,Ce}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ke,H3;function Gr(){if(H3)return ke;H3=1;var e=j8();return ke=e,ke}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var We,G3;function z8(){if(G3)return We;G3=1;var e=Gr(),r;return e===!0?r=1:r=0,We=r,We}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Be,C3;function x8(){if(C3)return Be;C3=1;var e=Tr(),r=Hr(),a=z8(),i=new r(1),t=new e(i.buffer);function u(v){return i[0]=v,t[a]}return Be=u,Be}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var De,k3;function _r(){if(k3)return De;k3=1;var e=x8();return De=e,De}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ue,W3;function r9(){if(W3)return Ue;W3=1;var e=Gr(),r;return e===!0?r=1:r=0,Ue=r,Ue}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xe,B3;function e9(){if(B3)return Xe;B3=1;var e=Tr(),r=Hr(),a=r9(),i=new r(1),t=new e(i.buffer);function u(v,n){return i[0]=v,t[a]=n>>>0,i[0]}return Xe=u,Xe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ve,D3;function Yr(){if(D3)return Ve;D3=1;var e=e9();return Ve=e,Ve}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ke,U3;function a9(){if(U3)return Ke;U3=1;var e=Gr(),r,a,i;return e===!0?(a=1,i=0):(a=0,i=1),r={HIGH:a,LOW:i},Ke=r,Ke}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qe,X3;function i9(){if(X3)return Qe;X3=1;var e=Tr(),r=Hr(),a=a9(),i=new r(1),t=new e(i.buffer),u=a.HIGH,v=a.LOW;function n(o,f){return t[u]=o,t[v]=f,i[0]}return Qe=n,Qe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ye,V3;function t0(){if(V3)return Ye;V3=1;var e=i9();return Ye=e,Ye}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Je,K3;function ar(){if(K3)return Je;K3=1;var e=Number.POSITIVE_INFINITY;return Je=e,Je}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ze,Q3;function n9(){return Q3||(Q3=1,Ze=Number),Ze}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var je,Y3;function t9(){if(Y3)return je;Y3=1;var e=n9();return je=e,je}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ze,J3;function or(){if(J3)return ze;J3=1;var e=t9(),r=e.NEGATIVE_INFINITY;return ze=r,ze}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xe,Z3;function Sr(){if(Z3)return xe;Z3=1;var e=1023;return xe=e,xe}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ra,j3;function u9(){if(j3)return ra;j3=1;var e=.34657359027997264;return ra=e,ra}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ea,z3;function v9(){if(z3)return ea;z3=1;function e(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}return ea=e,ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_expm1.c} and [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_expm1.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var aa,x3;function f9(){if(x3)return aa;x3=1;var e=X(),r=_r(),a=Yr(),i=t0(),t=ar(),u=or(),v=Sr(),n=u9(),o=v9(),f=709.782712893384,l=.6931471803691238,s=19082149292705877e-26,q=1.4426950408889634,m=38.816242111356935,$=1.0397207708399179;function _(c){var h,y,L,g,I,P,A,S,M,b,d,p,R;if(c===t||e(c))return c;if(c===u)return-1;if(c===0)return c;if(c<0?(L=!0,S=-c):(L=!1,S=c),S>=m){if(L)return-1;if(S>=f)return t}if(P=r(S)|0,S>n)S<$?L?(g=c+l,I=-s,R=-1):(g=c-l,I=s,R=1):(L?R=q*c-.5:R=q*c+.5,R|=0,d=R,g=c-d*l,I=d*s),c=g-I,b=g-c-I;else{if(P<1016070144)return c;R=0}return h=.5*c,M=c*h,A=1+M*o(M),d=3-A*h,p=M*((A-d)/(6-c*d)),R===0?c-(c*p-M):(y=i(v+R<<20,0),p=c*(p-b)-b,p-=M,R===-1?.5*(c-p)-.5:R===1?c<-.25?-2*(p-(c+.5)):1+2*(c-p):R<=-2||R>56?(S=1-(p-c),R===1024?(g=r(S)+(R<<20)|0,S=a(S,g)):S*=y,S-1):(d=1,R<20?(g=1072693248-(2097152>>R)|0,d=a(d,g),S=d-(p-c)):(g=v-R<<20|0,d=a(d,g),S=c-(p+d),S+=1),S*=y,S))}return aa=_,aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ia,rf;function Cr(){if(rf)return ia;rf=1;var e=f9();return ia=e,ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var na,ef;function o9(){if(ef)return na;ef=1;var e=Math.floor;return na=e,na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ta,af;function pr(){if(af)return ta;af=1;var e=o9();return ta=e,ta}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ua,nf;function l9(){if(nf)return ua;nf=1;function e(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}return ua=e,ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_log1p.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var va,tf;function s9(){if(tf)return va;tf=1;var e=X(),r=_r(),a=Yr(),i=ar(),t=or(),u=Sr(),v=l9(),n=.6931471803691238,o=19082149292705877e-26,f=.41421356237309503,l=-.2928932188134525,s=1862645149230957e-24,q=5551115123125783e-32,m=9007199254740992,$=.6666666666666666;function _(c){var h,y,L,g,I,P,A,S,M,b;if(c<-1||e(c))return NaN;if(c===-1)return t;if(c===i||c===0)return c;if(c<0?L=-c:L=c,b=1,L<f){if(L<s)return L<q?c:c-c*c*.5;c>l&&(b=0,g=c,y=1)}return b!==0&&(L<m?(M=1+c,y=r(M),b=(y>>20)-u,b>0?I=1-(M-c):I=c-(M-1),I/=M):(M=c,y=r(M),b=(y>>20)-u,I=0),y&=1048575,y<434334?M=a(M,y|1072693248):(b+=1,M=a(M,y|1071644672),y=1048576-y>>2),g=M-1),h=.5*g*g,y===0?g===0?(I+=b*o,b*n+I):(S=h*(1-$*g),b*n-(S-(b*o+I)-g)):(P=g/(2+g),A=P*P,S=A*v(A),b===0?g-(h-P*(h+S)):b*n-(h-(P*(h+S)+(b*o+I))-g))}return va=_,va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fa,uf;function $r(){if(uf)return fa;uf=1;var e=s9();return fa=e,fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oa,vf;function c9(){if(vf)return oa;vf=1;var e=Math.sqrt;return oa=e,oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var la,ff;function J(){if(ff)return la;ff=1;var e=c9();return la=e,la}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sa,of;function lf(){if(of)return sa;of=1;var e=.7853981633974483;return sa=e,sa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ca,sf;function _9(){if(sf)return ca;sf=1;function e(r){var a,i,t;return r===0?.16666666666666713:(r<0?a=-r:a=r,a<=1?(i=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),t=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,i=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),t=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),i/t)}return ca=e,ca}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _a,cf;function $9(){if(cf)return _a;cf=1;function e(r){var a,i,t;return r===0?.08333333333333809:(r<0?a=-r:a=r,a<=1?(i=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),t=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,i=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),t=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),i/t)}return _a=e,_a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var $a,_f;function q9(){if(_f)return $a;_f=1;var e=X(),r=J(),a=lf(),i=_9(),t=$9(),u=6123233995736766e-32;function v(n){var o,f,l,s,q;if(e(n))return NaN;if(n>0?l=n:(o=!0,l=-n),l>1)return NaN;if(l>.625)f=1-l,s=f*t(f),f=r(f+f),q=a-f,f=f*s-u,q-=f,q+=a;else{if(l<1e-8)return n;f=l*l,q=f*i(f),q=l*q+l}return o?-q:q}return $a=v,$a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qa,$f;function ma(){if($f)return qa;$f=1;var e=q9();return qa=e,qa}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var da,qf;function m9(){if(qf)return da;qf=1;function e(r){return Math.abs(r)}return da=e,da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ha,mf;function Z(){if(mf)return ha;mf=1;var e=m9();return ha=e,ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pa,df;function d9(){if(df)return pa;df=1;var e=Math.ceil;return pa=e,pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ya,hf;function h9(){if(hf)return ya;hf=1;var e=d9();return ya=e,ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ra,pf;function p9(){if(pf)return Ra;pf=1;var e=pr(),r=h9();function a(i){return i<0?r(i):e(i)}return Ra=a,Ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ba,yf;function ga(){if(yf)return ba;yf=1;var e=p9();return ba=e,ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var La,Rf;function y9(){if(Rf)return La;Rf=1;var e=1023;return La=e,La}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Na,bf;function R9(){if(bf)return Na;bf=1;var e=-1023;return Na=e,Na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ia,gf;function b9(){if(gf)return Ia;gf=1;var e=-1074;return Ia=e,Ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Aa,Lf;function g9(){if(Lf)return Aa;Lf=1;var e=ar(),r=or();function a(i){return i===e||i===r}return Aa=a,Aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ma,Nf;function kr(){if(Nf)return Ma;Nf=1;var e=g9();return Ma=e,Ma}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pa,If;function L9(){if(If)return Pa;If=1;var e=2147483648;return Pa=e,Pa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sa,Af;function Er(){if(Af)return Sa;Af=1;var e=2147483647;return Sa=e,Sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ea,Mf;function N9(){if(Mf)return Ea;Mf=1;var e=Gr(),r,a,i;return e===!0?(a=1,i=0):(a=0,i=1),r={HIGH:a,LOW:i},Ea=r,Ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wa,Pf;function Sf(){if(Pf)return wa;Pf=1;var e=Tr(),r=Hr(),a=N9(),i=new r(1),t=new e(i.buffer),u=a.HIGH,v=a.LOW;function n(o,f,l,s){return i[0]=o,f[s]=t[u],f[s+l]=t[v],f}return wa=n,wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fa,Ef;function I9(){if(Ef)return Fa;Ef=1;var e=Sf();function r(a){return e(a,[0,0],1,0)}return Fa=r,Fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oa,wf;function Ta(){if(wf)return Oa;wf=1;var e=fr(),r=I9(),a=Sf();return e(r,"assign",a),Oa=r,Oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ha,Ff;function A9(){if(Ff)return Ha;Ff=1;var e=L9(),r=Er(),a=Ta(),i=_r(),t=t0(),u=[0,0];function v(n,o){var f,l;return a.assign(n,u,1,0),f=u[0],f&=r,l=i(o),l&=e,f|=l,t(f,u[1])}return Ha=v,Ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ga,Of;function Ca(){if(Of)return Ga;Of=1;var e=A9();return Ga=e,Ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ka,Tf;function wr(){if(Tf)return ka;Tf=1;var e=22250738585072014e-324;return ka=e,ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wa,Hf;function Gf(){if(Hf)return Wa;Hf=1;var e=wr(),r=kr(),a=X(),i=Z(),t=4503599627370496;function u(v,n,o,f){return a(v)||r(v)?(n[f]=v,n[f+o]=0,n):v!==0&&i(v)<e?(n[f]=v*t,n[f+o]=-52,n):(n[f]=v,n[f+o]=0,n)}return Wa=u,Wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ba,Cf;function M9(){if(Cf)return Ba;Cf=1;var e=Gf();function r(a){return e(a,[0,0],1,0)}return Ba=r,Ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Da,kf;function P9(){if(kf)return Da;kf=1;var e=fr(),r=M9(),a=Gf();return e(r,"assign",a),Da=r,Da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ua,Wf;function u0(){if(Wf)return Ua;Wf=1;var e=2146435072;return Ua=e,Ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xa,Bf;function S9(){if(Bf)return Xa;Bf=1;var e=_r(),r=u0(),a=Sr();function i(t){var u=e(t);return u=(u&r)>>>20,u-a|0}return Xa=i,Xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Va,Df;function E9(){if(Df)return Va;Df=1;var e=S9();return Va=e,Va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ka,Uf;function w9(){if(Uf)return Ka;Uf=1;var e=ar(),r=or(),a=Sr(),i=y9(),t=R9(),u=b9(),v=X(),n=kr(),o=Ca(),f=P9().assign,l=E9(),s=Ta(),q=t0(),m=2220446049250313e-31,$=2148532223,_=[0,0],c=[0,0];function h(y,L){var g,I;return L===0||y===0||v(y)||n(y)?y:(f(y,_,1,0),y=_[0],L+=_[1],L+=l(y),L<u?o(0,y):L>i?y<0?r:e:(L<=t?(L+=52,I=m):I=1,s.assign(y,c,1,0),g=c[0],g&=$,g|=L+a<<20,I*q(g,c[1])))}return Ka=h,Ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qa,Xf;function Wr(){if(Xf)return Qa;Xf=1;var e=w9();return Qa=e,Qa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ya,Vf;function F9(){if(Vf)return Ya;Vf=1;function e(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}return Ya=e,Ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Ja,Kf;function O9(){if(Kf)return Ja;Kf=1;var e=Wr(),r=F9();function a(i,t,u){var v,n,o,f;return v=i-t,n=v*v,o=v-n*r(n),f=1-(t-v*o/(2-o)-i),e(f,u)}return Ja=a,Ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Za,Qf;function T9(){if(Qf)return Za;Qf=1;var e=X(),r=ga(),a=or(),i=ar(),t=O9(),u=.6931471803691238,v=19082149292705877e-26,n=1.4426950408889634,o=709.782712893384,f=-745.1332191019411,l=1/(1<<28),s=-l;function q(m){var $,_,c;return e(m)||m===i?m:m===a?0:m>o?i:m<f?0:m>s&&m<l?1+m:(m<0?c=r(n*m-.5):c=r(n*m+.5),$=m-c*u,_=c*v,t($,_,c))}return Za=q,Za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ja,Yf;function ir(){if(Yf)return ja;Yf=1;var e=T9();return ja=e,ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var za,Jf;function H9(){if(Jf)return za;Jf=1;var e=pr();function r(a){return e(a)===a}return za=r,za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xa,Zf;function Br(){if(Zf)return xa;Zf=1;var e=H9();return xa=e,xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ri,jf;function G9(){if(jf)return ri;jf=1;var e=Br();function r(a){return e(a/2)}return ri=r,ri}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ei,zf;function C9(){if(zf)return ei;zf=1;var e=G9();return ei=e,ei}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ai,xf;function k9(){if(xf)return ai;xf=1;var e=C9();function r(a){return a>0?e(a-1):e(a+1)}return ai=r,ai}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ii,ro;function ni(){if(ro)return ii;ro=1;var e=k9();return ii=e,ii}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ti,eo;function W9(){if(eo)return ti;eo=1;var e=Gr(),r;return e===!0?r=0:r=1,ti=r,ti}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ui,ao;function B9(){if(ao)return ui;ao=1;var e=Tr(),r=Hr(),a=W9(),i=new r(1),t=new e(i.buffer);function u(v,n){return i[0]=v,t[a]=n>>>0,i[0]}return ui=u,ui}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vi,io;function Jr(){if(io)return vi;io=1;var e=B9();return vi=e,vi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fi,no;function D9(){if(no)return fi;no=1;function e(r){return r|0}return fi=e,fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oi,to;function uo(){if(to)return oi;to=1;var e=D9();return oi=e,oi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var li,vo;function U9(){if(vo)return li;vo=1;var e=ni(),r=Ca(),a=or(),i=ar();function t(u,v){return v===a?i:v===i?0:v>0?e(v)?u:0:e(v)?r(i,u):i}return li=t,li}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var si,fo;function X9(){if(fo)return si;fo=1;var e=Er(),r=_r(),a=1072693247,i=1e300,t=1e-300;function u(v,n){var o,f;return f=r(v),o=f&e,o<=a?n<0?i*i:t*t:n>0?i*i:t*t}return si=u,si}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ci,oo;function V9(){if(oo)return ci;oo=1;var e=Z(),r=ar();function a(i,t){return i===-1?(i-i)/(i-i):i===1?1:e(i)<1==(t===r)?0:r}return ci=a,ci}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _i,lo;function so(){if(lo)return _i;lo=1;var e=20;return _i=e,_i}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $i,co;function K9(){if(co)return $i;co=1;function e(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}return $i=e,$i}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var qi,_o;function Q9(){if(_o)return qi;_o=1;var e=_r(),r=Jr(),a=Yr(),i=Sr(),t=so(),u=K9(),v=1048575,n=1048576,o=1072693248,f=536870912,l=524288,s=9007199254740992,q=.9617966939259756,m=.9617967009544373,$=-7028461650952758e-24,_=[1,1.5],c=[0,.5849624872207642],h=[0,1350039202129749e-23];function y(L,g,I){var P,A,S,M,b,d,p,R,N,T,E,H,F,O,w,V,G,D,K,Y,C,W;return Y=0,I<n&&(g*=s,Y-=53,I=e(g)),Y+=(I>>t)-i|0,C=I&v|0,I=C|o|0,C<=235662?W=0:C<767610?W=1:(W=0,Y+=1,I-=n),g=a(g,I),R=_[W],D=g-R,K=1/(g+R),A=D*K,M=r(A,0),P=(I>>1|f)+l,P+=W<<18,d=a(0,P),p=g-(d-R),b=K*(D-M*d-M*p),S=A*A,G=S*S*u(S),G+=b*(M+A),S=M*M,d=3+S+G,d=r(d,0),p=G-(d-3-S),D=M*d,K=b*d+p*A,T=D+K,T=r(T,0),E=K-(T-D),H=m*T,F=$*T+E*q+h[W],N=c[W],V=Y,O=H+F+N+V,O=r(O,0),w=F-(O-V-N-H),L[0]=O,L[1]=w,L}return qi=y,qi}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mi,$o;function Y9(){if($o)return mi;$o=1;function e(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}return mi=e,mi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var di,qo;function J9(){if(qo)return di;qo=1;var e=Jr(),r=Y9(),a=1.4426950408889634,i=1.4426950216293335,t=19259629911266175e-24;function u(v,n){var o,f,l,s,q,m;return l=n-1,s=l*l*r(l),q=i*l,m=l*t-s*a,f=q+m,f=e(f,0),o=m-(f-q),v[0]=f,v[1]=o,v}return di=u,di}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hi,mo;function Z9(){if(mo)return hi;mo=1;var e=.6931471805599453;return hi=e,hi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pi,ho;function po(){if(ho)return pi;ho=1;var e=1048575;return pi=e,pi}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yi,yo;function j9(){if(yo)return yi;yo=1;function e(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}return yi=e,yi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Ri,Ro;function z9(){if(Ro)return Ri;Ro=1;var e=_r(),r=Yr(),a=Jr(),i=uo(),t=Wr(),u=Z9(),v=Sr(),n=Er(),o=po(),f=so(),l=j9(),s=1048576,q=1071644672,m=.6931471824645996,$=-1904654299957768e-24;function _(c,h,y){var L,g,I,P,A,S,M,b,d,p,R;return p=c&n|0,R=(p>>f)-v|0,d=0,p>q&&(d=c+(s>>R+1)>>>0,R=((d&n)>>f)-v|0,L=(d&~(o>>R))>>>0,I=r(0,L),d=(d&o|s)>>f-R>>>0,c<0&&(d=-d),h-=I),I=y+h,I=a(I,0),A=I*m,S=(y-(I-h))*u+I*$,b=A+S,M=S-(b-A),I=b*b,g=b-I*l(I),P=b*g/(g-2)-(M+b*M),b=1-(P-b),c=e(b),c=i(c),c+=d<<f>>>0,c>>f<=0?b=t(b,d):b=r(b,c),b}return Ri=_,Ri}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var bi,bo;function x9(){if(bo)return bi;bo=1;var e=X(),r=ni(),a=kr(),i=Br(),t=J(),u=Z(),v=Ta(),n=Jr(),o=uo(),f=or(),l=ar(),s=Er(),q=U9(),m=X9(),$=V9(),_=Q9(),c=J9(),h=z9(),y=1072693247,L=1105199104,g=1139802112,I=1083179008,P=1072693248,A=1083231232,S=3230714880,M=31,b=1e300,d=1e-300,p=8008566259537294e-32,R=[0,0],N=[0,0];function T(E,H){var F,O,w,V,G,D,K,Y,C,W,k,tr,rr,U,Q,ur;if(e(E)||e(H))return NaN;if(v.assign(H,R,1,0),D=R[0],K=R[1],K===0){if(H===0)return 1;if(H===1)return E;if(H===-1)return 1/E;if(H===.5)return t(E);if(H===-.5)return 1/t(E);if(H===2)return E*E;if(H===3)return E*E*E;if(H===4)return E*=E,E*E;if(a(H))return $(E,H)}if(v.assign(E,R,1,0),V=R[0],G=R[1],G===0){if(V===0)return q(E,H);if(E===1)return 1;if(E===-1&&r(H))return-1;if(a(E))return E===f?T(-0,-H):H<0?0:l}if(E<0&&i(H)===!1)return(E-E)/(E-E);if(w=u(E),F=V&s|0,O=D&s|0,Y=V>>>M|0,C=D>>>M|0,Y&&r(H)?Y=-1:Y=1,O>L){if(O>g)return m(E,H);if(F<y)return C===1?Y*b*b:Y*d*d;if(F>P)return C===0?Y*b*b:Y*d*d;rr=c(N,w)}else rr=_(N,w,F);if(W=n(H,0),tr=(H-W)*rr[0]+H*rr[1],k=W*rr[0],U=tr+k,v.assign(U,R,1,0),Q=o(R[0]),ur=o(R[1]),Q>=I){if((Q-I|ur)!==0||tr+p>U-k)return Y*b*b}else if((Q&s)>=A&&((Q-S|ur)!==0||tr<=U-k))return Y*d*d;return U=h(Q,k,tr),Y*U}return bi=T,bi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gi,go;function nr(){if(go)return gi;go=1;var e=x9();return gi=e,gi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Li,Lo;function Dr(){if(Lo)return Li;Lo=1;var e=2.718281828459045;return Li=e,Li}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ni,No;function yr(){if(No)return Ni;No=1;var e=2220446049250313e-31;return Ni=e,Ni}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ii,Io;function rc(){if(Io)return Ii;Io=1;function e(r){var a,i,t;return r===0?1/0:(r<0?a=-r:a=r,a<=1?(i=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,i=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),i/t)}return Ii=e,Ii}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Ai,Ao;function ec(){if(Ao)return Ai;Ao=1;var e=X(),r=$r(),a=J(),i=Z(),t=ir(),u=nr(),v=Dr(),n=yr(),o=rc(),f=10.900511;function l(s,q){var m,$,_,c,h,y,L;return e(s)||e(q)?NaN:s<0||q<0?NaN:q===1?1/s:s===1?1/q:(L=s+q,L<n?(h=L/s,h/=q,h):L===s&&q<n?1/q:L===q&&s<n?1/s:(s<q&&(y=q,q=s,s=y),$=s+f-.5,_=q+f-.5,c=L+f-.5,h=o(s)*(o(q)/o(L)),m=s-.5-q,i(q*m)<c*100&&s>100?h*=t(m*r(-q/c)):h*=u($/c,m),c>1e10?h*=u($/c*(_/c),q):h*=u($*_/(c*c),q),h*=a(v/_),h))}return Ai=l,Ai}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mi,Mo;function v0(){if(Mo)return Mi;Mo=1;var e=ec();return Mi=e,Mi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pi,Po;function ac(){if(Po)return Pi;Po=1;var e=ar();function r(a){return a===0&&1/a===e}return Pi=r,Pi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Si,So;function ic(){if(So)return Si;So=1;var e=ac();return Si=e,Si}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ei,Eo;function nc(){if(Eo)return Ei;Eo=1;var e=ic(),r=X(),a=ar();function i(t,u){return r(t)||r(u)?NaN:t===a||u===a?a:t===u&&t===0?e(t)?t:u:t>u?t:u}return Ei=i,Ei}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wi,wo;function Fr(){if(wo)return wi;wo=1;var e=nc();return wi=e,wi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fi,Fo;function tc(){if(Fo)return Fi;Fo=1;var e=or();function r(a){return a===0&&1/a===e}return Fi=r,Fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oi,Oo;function To(){if(Oo)return Oi;Oo=1;var e=tc();return Oi=e,Oi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ti,Ho;function uc(){if(Ho)return Ti;Ho=1;var e=To(),r=X(),a=or();function i(t,u){return r(t)||r(u)?NaN:t===a||u===a?a:t===u&&t===0?e(t)?t:u:t<u?t:u}return Ti=i,Ti}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hi,Go;function Nr(){if(Go)return Hi;Go=1;var e=uc();return Hi=e,Hi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gi,Co;function Or(){if(Co)return Gi;Co=1;var e=17976931348623157e292;return Gi=e,Gi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ci,ko;function Wo(){if(ko)return Ci;ko=1;var e=2147483647;return Ci=e,Ci}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ki,Bo;function Wi(){if(Bo)return ki;Bo=1;var e=1.5707963267948966;return ki=e,ki}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bi,Do;function Ir(){if(Do)return Bi;Do=1;var e=3.141592653589793;return Bi=e,Bi}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Di,Uo;function vc(){if(Uo)return Di;Uo=1;function e(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}return Di=e,Di}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ui,Xo;function fc(){if(Xo)return Ui;Xo=1;function e(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}return Ui=e,Ui}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Xi,Vo;function oc(){if(Vo)return Xi;Vo=1;var e=vc(),r=fc();function a(i,t){var u,v,n,o;return o=i*i,n=o*o,v=o*e(o),v+=n*n*r(o),u=.5*o,n=1-u,n+(1-n-u+(o*v-i*t))}return Xi=a,Xi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vi,Ko;function Qo(){if(Ko)return Vi;Ko=1;var e=oc();return Vi=e,Vi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Ki,Yo;function lc(){if(Yo)return Ki;Yo=1;var e=-.16666666666666632,r=.00833333333332249,a=-.0001984126982985795,i=27557313707070068e-22,t=-25050760253406863e-24,u=158969099521155e-24;function v(n,o){var f,l,s,q;return q=n*n,s=q*q,f=r+q*(a+q*i)+q*s*(t+q*u),l=q*n,o===0?n+l*(e+q*f):n-(q*(.5*o-l*f)-o-l*e)}return Ki=v,Ki}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qi,Jo;function Zo(){if(Jo)return Qi;Jo=1;var e=lc();return Qi=e,Qi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yi,jo;function sc(){if(jo)return Yi;jo=1;var e=Gr(),r;return e===!0?r=0:r=1,Yi=r,Yi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ji,zo;function cc(){if(zo)return Ji;zo=1;var e=Tr(),r=Hr(),a=sc(),i=new r(1),t=new e(i.buffer);function u(v){return i[0]=v,t[a]}return Ji=u,Ji}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zi,xo;function _c(){if(xo)return Zi;xo=1;var e=cc();return Zi=e,Zi}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ji,r6;function $c(){if(r6)return ji;r6=1;function e(r,a){var i,t;for(i=[],t=0;t<a;t++)i.push(r);return i}return ji=e,ji}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zi,e6;function qc(){if(e6)return zi;e6=1;var e=$c();return zi=e,zi}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xi,a6;function mc(){if(a6)return xi;a6=1;var e=qc();function r(a){return e(0,a)}return xi=r,xi}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rn,i6;function dc(){if(i6)return rn;i6=1;var e=mc();return rn=e,rn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var en,n6;function hc(){if(n6)return en;n6=1;var e=pr(),r=Wr(),a=dc(),i=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],t=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],u=16777216,v=5960464477539063e-23,n=a(20),o=a(20),f=a(20),l=a(20);function s(m,$,_,c,h,y,L,g,I){var P,A,S,M,b,d,p,R,N;for(M=y,N=c[_],R=_,b=0;R>0;b++)A=v*N|0,l[b]=N-u*A|0,N=c[R-1]+A,R-=1;if(N=r(N,h),N-=8*e(N*.125),p=N|0,N-=p,S=0,h>0?(b=l[_-1]>>24-h,p+=b,l[_-1]-=b<<24-h,S=l[_-1]>>23-h):h===0?S=l[_-1]>>23:N>=.5&&(S=2),S>0){for(p+=1,P=0,b=0;b<_;b++)R=l[b],P===0?R!==0&&(P=1,l[b]=16777216-R):l[b]=16777215-R;if(h>0)switch(h){case 1:l[_-1]&=8388607;break;case 2:l[_-1]&=4194303;break}S===2&&(N=1-N,P!==0&&(N-=r(1,h)))}if(N===0){for(R=0,b=_-1;b>=y;b--)R|=l[b];if(R===0){for(d=1;l[y-d]===0;d++);for(b=_+1;b<=_+d;b++){for(I[g+b]=i[L+b],A=0,R=0;R<=g;R++)A+=m[R]*I[g+(b-R)];c[b]=A}return _+=d,s(m,$,_,c,h,y,L,g,I)}for(_-=1,h-=24;l[_]===0;)_-=1,h-=24}else N=r(N,-h),N>=u?(A=v*N|0,l[_]=N-u*A|0,_+=1,h+=24,l[_]=A):l[_]=N|0;for(A=r(1,h),b=_;b>=0;b--)c[b]=A*l[b],A*=v;for(b=_;b>=0;b--){for(A=0,d=0;d<=M&&d<=_-b;d++)A+=t[d]*c[b+d];f[_-b]=A}for(A=0,b=_;b>=0;b--)A+=f[b];for(S===0?$[0]=A:$[0]=-A,A=f[0]-A,b=1;b<=_;b++)A+=f[b];return S===0?$[1]=A:$[1]=-A,p&7}function q(m,$,_,c){var h,y,L,g,I,P,A,S,M;for(y=4,g=c-1,L=(_-3)/24|0,L<0&&(L=0),P=_-24*(L+1),S=L-g,M=g+y,A=0;A<=M;A++)S<0?n[A]=0:n[A]=i[S],S+=1;for(A=0;A<=y;A++){for(h=0,S=0;S<=g;S++)h+=m[S]*n[g+(A-S)];o[A]=h}return I=y,s(m,$,I,o,P,y,L,g,n)}return en=q,en}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var an,t6;function pc(){if(t6)return an;t6=1;var e=Math.round;return an=e,an}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nn,u6;function v6(){if(u6)return nn;u6=1;var e=pc();return nn=e,nn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var tn,f6;function yc(){if(f6)return tn;f6=1;var e=v6(),r=_r(),a=.6366197723675814,i=1.5707963267341256,t=6077100506506192e-26,u=6077100506303966e-26,v=20222662487959506e-37,n=20222662487111665e-37,o=84784276603689e-45,f=2047;function l(s,q,m){var $,_,c,h,y,L,g;return _=e(s*a),h=s-_*i,y=_*t,g=q>>20|0,m[0]=h-y,$=r(m[0]),L=g-($>>20&f),L>16&&(c=h,y=_*u,h=c-y,y=_*v-(c-h-y),m[0]=h-y,$=r(m[0]),L=g-($>>20&f),L>49&&(c=h,y=_*n,h=c-y,y=_*o-(c-h-y),m[0]=h-y)),m[1]=h-m[0]-y,_}return tn=l,tn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
*
* Optimized by Bruce D. Evans.
* ```
*/var un,o6;function Rc(){if(o6)return un;o6=1;var e=Er(),r=u0(),a=po(),i=_r(),t=_c(),u=t0(),v=hc(),n=yc(),o=0,f=16777216,l=1.5707963267341256,s=6077100506506192e-26,q=2*s,m=3*s,$=4*s,_=598523,c=1072243195,h=1073928572,y=1074752122,L=1074977148,g=1075183036,I=1075388923,P=1075594811,A=1094263291,S=[0,0,0],M=[0,0];function b(d,p){var R,N,T,E,H,F,O,w;if(T=i(d)|0,E=T&e|0,E<=c)return p[0]=d,p[1]=0,0;if(E<=y)return(E&a)===_?n(d,E,p):E<=h?T>0?(w=d-l,p[0]=w-s,p[1]=w-p[0]-s,1):(w=d+l,p[0]=w+s,p[1]=w-p[0]+s,-1):T>0?(w=d-2*l,p[0]=w-q,p[1]=w-p[0]-q,2):(w=d+2*l,p[0]=w+q,p[1]=w-p[0]+q,-2);if(E<=P)return E<=g?E===L?n(d,E,p):T>0?(w=d-3*l,p[0]=w-m,p[1]=w-p[0]-m,3):(w=d+3*l,p[0]=w+m,p[1]=w-p[0]+m,-3):E===I?n(d,E,p):T>0?(w=d-4*l,p[0]=w-$,p[1]=w-p[0]-$,4):(w=d+4*l,p[0]=w+$,p[1]=w-p[0]+$,-4);if(E<A)return n(d,E,p);if(E>=r)return p[0]=NaN,p[1]=NaN,0;for(R=t(d),N=(E>>20)-1046,w=u(E-(N<<20|0),R),F=0;F<2;F++)S[F]=w|0,w=(w-S[F])*f;for(S[2]=w,H=3;S[H-1]===o;)H-=1;return O=v(S,M,N,H,1),T<0?(p[0]=-M[0],p[1]=-M[1],-O):(p[0]=M[0],p[1]=M[1],O)}return un=b,un}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vn,l6;function s6(){if(l6)return vn;l6=1;var e=Rc();return vn=e,vn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var fn,c6;function bc(){if(c6)return fn;c6=1;var e=Er(),r=u0(),a=_r(),i=Qo(),t=Zo(),u=s6(),v=1072243195,n=1045430272,o=[0,0];function f(l){var s,q;if(s=a(l),s&=e,s<=v)return s<n?l:t(l,0);if(s>=r)return NaN;switch(q=u(l,o),q&3){case 0:return t(o[0],o[1]);case 1:return i(o[0],o[1]);case 2:return-t(o[0],o[1]);default:return-i(o[0],o[1])}}return fn=f,fn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var on,_6;function Zr(){if(_6)return on;_6=1;var e=bc();return on=e,on}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ln,$6;function f0(){if($6)return ln;$6=1;var e=2.5066282746310007;return ln=e,ln}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sn,q6;function gc(){if(q6)return sn;q6=1;function e(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}return sn=e,sn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var cn,m6;function Lc(){if(m6)return cn;m6=1;var e=f0(),r=nr(),a=ir(),i=gc(),t=143.01608;function u(v){var n,o,f;return n=1/v,n=1+n*i(n),o=a(v),v>t?(f=r(v,.5*v-.25),o=f*(f/o)):o=r(v,v-.5)/o,e*o*n}return cn=u,cn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _n,d6;function Nc(){if(d6)return _n;d6=1;var e=.5772156649015329;return _n=e,_n}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var $n,h6;function Ic(){if(h6)return $n;h6=1;var e=Nc();function r(a,i){return i/((1+e*a)*a)}return $n=r,$n}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qn,p6;function Ac(){if(p6)return qn;p6=1;function e(r){var a,i,t;return r===0?1:(r<0?a=-r:a=r,a<=1?(i=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),t=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,i=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),t=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),i/t)}return qn=e,qn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var mn,y6;function Mc(){if(y6)return mn;y6=1;var e=X(),r=Br(),a=To(),i=Z(),t=pr(),u=Zr(),v=ar(),n=or(),o=Ir(),f=Lc(),l=Ic(),s=Ac();function q(m){var $,_,c,h;if(r(m)&&m<0||m===n||e(m))return NaN;if(m===0)return a(m)?n:v;if(m>171.61447887182297)return v;if(m<-170.5674972726612)return 0;if(_=i(m),_>33)return m>=0?f(m):(c=t(_),(c&1)===0?$=-1:$=1,h=_-c,h>.5&&(c+=1,h=_-c),h=_*u(o*h),$*o/(i(h)*f(_)));for(h=1;m>=3;)m-=1,h*=m;for(;m<0;){if(m>-1e-9)return l(m,h);h/=m,m+=1}for(;m<2;){if(m<1e-9)return l(m,h);h/=m,m+=1}return m===2?h:(m-=2,h*s(m))}return mn=q,mn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dn,R6;function Rr(){if(R6)return dn;R6=1;var e=Mc();return dn=e,dn}/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hn,b6;function o0(){if(b6)return hn;b6=1;var e=170;return hn=e,hn}var Pc=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pn,g6;function Sc(){if(g6)return pn;g6=1;var e=X(),r=Br(),a=Rr(),i=ar(),t=o0(),u=Pc;function v(n){return e(n)?NaN:r(n)?n<0?NaN:n<=t?u[n]:i:a(n+1)}return pn=v,pn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yn,L6;function N6(){if(L6)return yn;L6=1;var e=Sc();return yn=e,yn}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rn,I6;function Ec(){if(I6)return Rn;I6=1;function e(r){var a,i,t;return r===0?1/0:(r<0?a=-r:a=r,a<=1?(i=3847467039331777e-5+r*(3685766504351951e-5+r*(1588920245372942e-5+r*(4059208354298835e-6+r*(6805476611834733e-7+r*(7823975500312005e-8+r*(6246580776401795e-9+r*(341986.3488721347+r*(12287.194511824551+r*(261.61404416416684+r*2.5066282746310007))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,i=2.5066282746310007+r*(261.61404416416684+r*(12287.194511824551+r*(341986.3488721347+r*(6246580776401795e-9+r*(7823975500312005e-8+r*(6805476611834733e-7+r*(4059208354298835e-6+r*(1588920245372942e-5+r*(3685766504351951e-5+r*3847467039331777e-5))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),i/t)}return Rn=e,Rn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/lanczos.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var bn,A6;function wc(){if(A6)return bn;A6=1;var e=Ec();return bn=e,bn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gn,M6;function Fc(){if(M6)return gn;M6=1;var e=wc();return gn=e,gn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ln,P6;function jr(){if(P6)return Ln;P6=1;var e=10.900511;return Ln=e,Ln}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Nn,S6;function Oc(){if(S6)return Nn;S6=1;var e=Fc(),r=Rr(),a=$r(),i=Z(),t=ir(),u=nr(),v=yr(),n=Dr(),o=jr(),f=o0(),l=4269068009004705e289;function s(q,m){var $,_,c;return q<v?m>=f?(_=s(m,f-m),_*=q,_*=l,1/_):1/(q*r(q+m)):(c=q+o-.5,q+m===q?i(m/c)<v?$=t(-m):$=1:(i(m)<10?$=t((.5-q)*a(m/c)):$=u(c/(c+m),q-.5),$*=e(q)/e(q+m)),$*=u(n/(c+m),m),$)}return Nn=s,Nn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var In,E6;function Tc(){if(E6)return In;E6=1;var e=Z(),r=pr(),a=Rr(),i=N6(),t=o0(),u=Oc();function v(n,o){var f,l,s;if(n<=0||n+o<=0)return a(n)/a(n+o);if(l=r(o),l===o){if(s=r(n),s===n&&n<=t&&n+o<=t)return i(s-1)/i(l+s-1);if(e(o)<20){if(o===0)return 1;if(o<0){for(n-=1,f=n,o+=1;o!==0;)n-=1,f*=n,o+=1;return f}for(f=1/n,o-=1;o!==0;)n+=1,f/=n,o-=1;return f}}return u(n,o)}return In=v,In}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var An,w6;function Mn(){if(w6)return An;w6=1;var e=Tc();return An=e,An}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pn,F6;function Hc(){if(F6)return Pn;F6=1;function e(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}return Pn=e,Pn}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sn,O6;function Gc(){if(O6)return Sn;O6=1;function e(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}return Sn=e,Sn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var En,T6;function Cc(){if(T6)return En;T6=1;var e=_r(),r=Yr(),a=X(),i=Sr(),t=or(),u=Hc(),v=Gc(),n=.6931471803691238,o=19082149292705877e-26,f=0x40000000000000,l=.3333333333333333,s=1048575,q=2146435072,m=1048576,$=1072693248;function _(c){var h,y,L,g,I,P,A,S,M,b,d,p;return c===0?t:a(c)||c<0?NaN:(y=e(c),I=0,y<m&&(I-=54,c*=f,y=e(c)),y>=q?c+c:(I+=(y>>20)-i|0,y&=s,S=y+614244&1048576|0,c=r(c,y|S^$),I+=S>>20|0,A=c-1,(s&2+y)<3?A===0?I===0?0:I*n+I*o:(P=A*A*(.5-l*A),I===0?A-P:I*n-(P-I*o-A)):(b=A/(2+A),p=b*b,S=y-398458|0,d=p*p,M=440401-y|0,g=d*u(d),L=p*v(d),S|=M,P=L+g,S>0?(h=.5*A*A,I===0?A-(h-b*(h+P)):I*n-(h-(b*(h+P)+I*o)-A)):I===0?A-b*(A-P):I*n-(b*(A-P)-I*o-A))))}return En=_,En}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wn,H6;function x(){if(H6)return wn;H6=1;var e=Cc();return wn=e,wn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Fn,G6;function kc(){if(G6)return Fn;G6=1;var e=_r(),r=Qo(),a=Zo(),i=s6(),t=Er(),u=u0(),v=[0,0],n=1072243195,o=1044381696;function f(l){var s,q;if(s=e(l),s&=t,s<=n)return s<o?1:r(l,0);if(s>=u)return NaN;switch(q=i(l,v),q&3){case 0:return r(v[0],v[1]);case 1:return-a(v[0],v[1]);case 2:return-r(v[0],v[1]);default:return a(v[0],v[1])}}return Fn=f,Fn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var On,C6;function Tn(){if(C6)return On;C6=1;var e=kc();return On=e,On}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hn,k6;function Wc(){if(k6)return Hn;k6=1;var e=X(),r=kr(),a=Tn(),i=Zr(),t=Z(),u=Ca(),v=Ir();function n(o){var f,l;return e(o)?NaN:r(o)?NaN:(l=o%2,f=t(l),f===0||f===1?u(0,l):f<.25?i(v*l):f<.75?(f=.5-f,u(a(v*f),l)):f<1.25?(l=u(1,l)-l,i(v*l)):f<1.75?(f-=1.5,-u(a(v*f),l)):(l-=u(2,l),i(v*l)))}return Hn=n,Hn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gn,W6;function Bc(){if(W6)return Gn;W6=1;var e=Wc();return Gn=e,Gn}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cn,B6;function Dc(){if(B6)return Cn;B6=1;function e(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}return Cn=e,Cn}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kn,D6;function Uc(){if(D6)return kn;D6=1;function e(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}return kn=e,kn}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wn,U6;function Xc(){if(U6)return Wn;U6=1;function e(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}return Wn=e,Wn}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bn,X6;function Vc(){if(X6)return Bn;X6=1;function e(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}return Bn=e,Bn}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dn,V6;function Kc(){if(V6)return Dn;V6=1;function e(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}return Dn=e,Dn}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Un,K6;function Qc(){if(K6)return Un;K6=1;function e(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}return Un=e,Un}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xn,Q6;function Yc(){if(Q6)return Xn;Q6=1;function e(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}return Xn=e,Xn}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vn,Y6;function Jc(){if(Y6)return Vn;Y6=1;function e(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}return Vn=e,Vn}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kn,J6;function Zc(){if(J6)return Kn;J6=1;function e(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}return Kn=e,Kn}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qn,Z6;function jc(){if(Z6)return Qn;Z6=1;function e(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}return Qn=e,Qn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_lgamma_r.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Yn,j6;function zc(){if(j6)return Yn;j6=1;var e=X(),r=kr(),a=Z(),i=x(),t=ga(),u=Bc(),v=Ir(),n=ar(),o=Dc(),f=Uc(),l=Xc(),s=Vc(),q=Kc(),m=Qc(),$=Yc(),_=Jc(),c=Zc(),h=jc(),y=.07721566490153287,L=.3224670334241136,g=1,I=-.07721566490153287,P=.48383612272381005,A=-.1475877229945939,S=.06462494023913339,M=-.07721566490153287,b=1,d=.4189385332046727,p=1.4616321449683622,R=4503599627370496,N=72057594037927940,T=13877787807814457e-33,E=1.4616321449683622,H=-.12148629053584961,F=-3638676997039505e-33;function O(w){var V,G,D,K,Y,C,W,k,tr,rr,U,Q,ur;if(e(w)||r(w))return w;if(w===0)return n;if(w<0?(V=!0,w=-w):V=!1,w<T)return-i(w);if(V){if(w>=R||(tr=u(w),tr===0))return n;G=i(v/a(tr*w))}if(w===1||w===2)return 0;if(w<2)switch(w<=.9?(ur=-i(w),w>=p-1+.27?(U=1-w,D=0):w>=p-1-.27?(U=w-(E-1),D=1):(U=w,D=2)):(ur=0,w>=p+.27?(U=2-w,D=0):w>=p-.27?(U=w-E,D=1):(U=w-1,D=2)),D){case 0:Q=U*U,C=y+Q*o(Q),Y=Q*(L+Q*f(Q)),W=U*C+Y,ur+=W-.5*U;break;case 1:Q=U*U,rr=Q*U,C=P+rr*q(rr),Y=A+rr*m(rr),K=S+rr*$(rr),W=Q*C-(F-rr*(Y+U*K)),ur+=H+W;break;case 2:C=U*(M+U*_(U)),Y=b+U*c(U),ur+=-.5*U+C/Y;break}else if(w<8)switch(D=t(w),U=w-D,W=U*(I+U*s(U)),k=g+U*l(U),ur=.5*U+W/k,Q=1,D){case 7:Q*=U+6;case 6:Q*=U+5;case 5:Q*=U+4;case 4:Q*=U+3;case 3:Q*=U+2,ur+=i(Q)}else w<N?(tr=i(w),Q=1/w,U=Q*Q,rr=d+Q*h(U),ur=(w-.5)*(tr-1)+rr):ur=w*(i(w)-1);return V&&(ur=G-ur),ur}return Yn=O,Yn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jn,z6;function Ur(){if(z6)return Jn;z6=1;var e=zc();return Jn=e,Jn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zn,x6;function Ar(){if(x6)return Zn;x6=1;var e=709.782712893384;return Zn=e,Zn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jn,r4;function xc(){if(r4)return jn;r4=1;var e=14901161193847656e-24;return jn=e,jn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zn,e4;function r_(){if(e4)return zn;e4=1;var e=eval;return zn=e,zn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xn,a4;function e_(){if(a4)return xn;a4=1;var e=r_();function r(){var a;try{e('"use strict"; (function* () {})'),a=!0}catch{a=!1}return a}return xn=r,xn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r1,i4;function n4(){if(i4)return r1;i4=1;var e=e_();return r1=e,r1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e1,t4;function a_(){if(t4)return e1;t4=1;var e=Z(),r=yr(),a=1e6;function i(t,u){var v,n,o,f,l,s;if(s={},arguments.length>1&&(s=u),n=s.tolerance||r,f=s.maxTerms||a,l=s.initialValue||0,v=typeof t.next=="function",v===!0){for(o of t)if(l+=o,e(n*l)>=e(o)||--f===0)break}else do o=t(),l+=o;while(e(n*l)<e(o)&&--f);return l}return e1=i,e1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a1,u4;function i_(){if(u4)return a1;u4=1;var e=Z(),r=yr(),a=1e6;function i(t,u){var v,n,o,f,l;l={},arguments.length>1&&(l=u),v=l.tolerance||r,o=l.maxTerms||a,f=l.initialValue||0;do n=t(),f+=n;while(e(v*f)<e(n)&&--o);return f}return a1=i,a1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i1,v4;function zr(){if(v4)return i1;v4=1;var e=n4(),r=a_(),a=i_(),i;return e()?i=r:i=a,i1=i,i1}/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var n1,f4;function n_(){if(f4)return n1;f4=1;function e(r,a){var i=1,t=r,u=a;return v;function v(){var n=i;return i*=t/u,t-=1,n}}return n1=e,n1}/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var t1,o4;function t_(){if(o4)return t1;o4=1;var e=zr(),r=n_();function a(i,t){var u,v;return v=r(i,t),u=e(v),u}return t1=a,t1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var u1,l4;function u_(){if(l4)return u1;l4=1;var e=ir();function r(a,i){var t,u,v,n;if(v=e(-i),u=v,u!==0)for(t=u,n=1;n<a;++n)t/=n,t*=i,u+=t;return u}return u1=r,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v1,s4;function v_(){if(s4)return v1;s4=1;function e(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}return v1=e,v1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f1,c4;function f_(){if(c4)return f1;c4=1;function e(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}return f1=e,f1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o1,_4;function o_(){if(_4)return o1;_4=1;function e(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}return o1=e,o1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l1,$4;function l_(){if($4)return l1;$4=1;function e(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}return l1=e,l1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s1,q4;function s_(){if(q4)return s1;q4=1;function e(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}return s1=e,s1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c1,m4;function c_(){if(m4)return c1;m4=1;function e(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}return c1=e,c1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _1,d4;function __(){if(d4)return _1;d4=1;function e(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}return _1=e,_1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $1,h4;function $_(){if(h4)return $1;h4=1;function e(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}return $1=e,$1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_erf.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var q1,p4;function q_(){if(p4)return q1;p4=1;var e=X(),r=ir(),a=Jr(),i=ar(),t=or(),u=v_(),v=f_(),n=o_(),o=l_(),f=s_(),l=c_(),s=__(),q=$_(),m=1e-300,$=13877787807814457e-33,_=.8450629115104675,c=.12837916709551256,h=1,y=-.0023621185607526594,L=1,g=-.009864944034847148,I=1,P=-.0098649429247001,A=1;function S(M){var b,d,p,R,N,T,E,H;if(e(M))return NaN;if(M===i)return 0;if(M===t)return 2;if(M===0)return 1;if(M<0?(b=!0,d=-M):(b=!1,d=M),d<.84375)return d<$?1-M:(p=M*M,R=c+p*u(p),N=h+p*v(p),T=R/N,M<.25?1-(M+M*T):(R=M*T,R+=M-.5,.5-R));if(d<1.25)return N=d-1,E=y+N*n(N),H=L+N*o(N),b?1+_+E/H:1-_-E/H;if(d<28){if(N=1/(d*d),d<2.857142857142857)R=g+N*f(N),N=I+N*l(N);else{if(M<-6)return 2-m;R=P+N*s(N),N=A+N*q(N)}return p=a(d,0),R=r(-(p*p)-.5625)*r((p-d)*(p+d)+R/N),b?2-R/d:R/d}return b?2-m:m*m}return q1=S,q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m1,y4;function l0(){if(y4)return m1;y4=1;var e=q_();return m1=e,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var d1,R4;function m_(){if(R4)return d1;R4=1;var e=l0(),r=J(),a=ir(),i=Ir();function t(u,v){var n,o,f,l,s;if(l=e(r(v)),l!==0&&u>1){for(o=a(-v)/r(i*v),o*=v,n=.5,o/=n,f=o,s=2;s<u;++s)o/=s-n,o*=v,f+=o;l+=f}return l}return d1=t,d1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h1,b4;function Xr(){if(b4)return h1;b4=1;var e=-708.3964185322641;return h1=e,h1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var p1,g4;function d_(){if(g4)return p1;g4=1;var e=ir(),r=nr(),a=x(),i=Ar(),t=Xr();function u(v,n){var o,f;return f=v*a(n),n>=1?f<i&&-n>t?o=r(n,v)*e(-n):v>=1?o=r(n/e(n/v),v):o=e(f-n):f>t?o=r(n,v)*e(-n):n/v<i?o=r(n/e(n/v),v):o=e(f-n),o}return p1=u,p1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y1,L4;function N4(){if(L4)return y1;L4=1;function e(r,a){var i,t;if(t=r.length,t<2||a===0)return t===0?0:r[0];for(t-=1,i=r[t]*a+r[t-1],t-=2;t>=0;)i=i*a+r[t],t-=1;return i}return y1=e,y1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R1,I4;function h_(){if(I4)return R1;I4=1;var e=Function;return R1=e,R1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1,A4;function p_(){if(A4)return b1;A4=1;var e=h_();return b1=e,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1,M4;function y_(){if(M4)return g1;M4=1;var e=p_(),r=N4();function a(i){var t,u,v,n;if(i.length>500)return o;if(t="return function evalpoly(x){",u=i.length,u===0)t+="return 0.0;";else if(u===1)t+="return "+i[0]+";";else{for(t+="if(x===0.0){return "+i[0]+";}",t+="return "+i[0],v=u-1,n=1;n<u;n++)t+="+x*",n<v&&(t+="("),t+=i[n];for(n=0;n<v-1;n++)t+=")";t+=";"}return t+="}",t+="//# sourceURL=evalpoly.factory.js",new e(t)();function o(f){return r(i,f)}}return g1=a,g1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L1,P4;function Mr(){if(P4)return L1;P4=1;var e=fr(),r=N4(),a=y_();return e(r,"factory",a),L1=r,L1}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_83_0/boost/math/special_functions/log1p.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2005-2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
*/var N1,S4;function R_(){if(S4)return N1;S4=1;function e(r){var a=-r,i=-1,t=0;return u;function u(){return i*=a,t+=1,i/t}}return N1=e,N1}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_83_0/boost/math/special_functions/log1p.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2005-2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var I1,E4;function b_(){if(E4)return I1;E4=1;var e=Z(),r=x(),a=yr(),i=zr(),t=R_();function u(v){var n,o;return v<=-1?NaN:(o=e(v),o>.95?r(1+v)-v:o<a?-v*v/2:(n={initialValue:-v},i(t(v),n)))}return I1=u,I1}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A1,w4;function F4(){if(w4)return A1;w4=1;var e=b_();return A1=e,A1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M1,O4;function s0(){if(O4)return M1;O4=1;var e=6.283185307179586;return M1=e,M1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P1,T4;function g_(){if(T4)return P1;T4=1;function e(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}return P1=e,P1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S1,H4;function L_(){if(H4)return S1;H4=1;function e(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}return S1=e,S1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E1,G4;function N_(){if(G4)return E1;G4=1;function e(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}return E1=e,E1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w1,C4;function I_(){if(C4)return w1;C4=1;function e(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}return w1=e,w1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F1,k4;function A_(){if(k4)return F1;k4=1;function e(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}return F1=e,F1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O1,W4;function M_(){if(W4)return O1;W4=1;function e(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}return O1=e,O1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T1,B4;function P_(){if(B4)return T1;B4=1;function e(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}return T1=e,T1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H1,D4;function S_(){if(D4)return H1;D4=1;function e(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}return H1=e,H1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G1,U4;function E_(){if(U4)return G1;U4=1;function e(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}return G1=e,G1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var C1,X4;function w_(){if(X4)return C1;X4=1;var e=Mr(),r=F4(),a=l0(),i=J(),t=ir(),u=s0(),v=g_(),n=L_(),o=N_(),f=I_(),l=A_(),s=M_(),q=P_(),m=S_(),$=E_(),_=[0,0,0,0,0,0,0,0,0,0];function c(h,y){var L,g,I,P,A;return g=(y-h)/h,I=-r(g),P=h*I,A=i(2*I),y<h&&(A=-A),_[0]=v(A),_[1]=n(A),_[2]=o(A),_[3]=f(A),_[4]=l(A),_[5]=s(A),_[6]=q(A),_[7]=m(A),_[8]=$(A),_[9]=-.0005967612901927463,L=e(_,1/h),L*=t(-P)/i(u*h),y<h&&(L=-L),L+=a(i(P))/2,L}return C1=c,C1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var k1,V4;function F_(){if(V4)return k1;V4=1;function e(r,a){var i=1,t=r,u=a;return v;function v(){var n=i;return t+=1,i*=u/t,n}}return k1=e,k1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var W1,K4;function Q4(){if(K4)return W1;K4=1;var e=zr(),r=F_();function a(i,t,u){var v,n;return u=u||0,n=r(i,t),v=e(n,{initialValue:u}),v}return W1=a,W1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B1,Y4;function O_(){if(Y4)return B1;Y4=1;function e(r){var a,i,t;return r===0?1/0:(r<0?a=-r:a=r,a<=1?(i=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,i=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),i/t)}return B1=e,B1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/lanczos.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var D1,J4;function T_(){if(J4)return D1;J4=1;var e=O_();return D1=e,D1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U1,Z4;function c0(){if(Z4)return U1;Z4=1;var e=T_();return U1=e,U1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var X1,j4;function H_(){if(j4)return X1;j4=1;var e=c0(),r=Ur(),a=Rr(),i=F4(),t=J(),u=Z(),v=ir(),n=nr(),o=Fr(),f=Nr(),l=x(),s=Or(),q=Ar(),m=Xr(),$=jr(),_=Dr();function c(h,y){var L,g,I,P,A,S,M;return I=h+$-.5,M=(y-h-$+.5)/I,h<1?y<=m||h<1/s?v(h*l(y)-y-r(h)):n(y,h)*v(-y)/a(h):(u(M*M*h)<=100&&h>150?(L=h*i(M)+y*(.5-$)/I,L=v(L)):(P=h*l(y/I),A=h-y,f(P,A)<=m||o(P,A)>=q?(g=A/h,f(P,A)/2>m&&o(P,A)/2<q?(S=n(y/I,h/2)*v(A/2),L=S*S):f(P,A)/4>m&&o(P,A)/4<q&&y>h?(S=n(y/I,h/4)*v(A/4),L=S*S,L*=L):g>m&&g<q?L=n(y*v(g)/I,h):L=v(P+A)):L=n(y/I,h)*v(A)),L*=t(I/_)/e(h),L)}return X1=c,X1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/powm1.hpp}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var V1,z4;function G_(){if(z4)return V1;z4=1;var e=X(),r=kr(),a=Z(),i=Cr(),t=x(),u=nr(),v=ga();function n(o,f){var l,s;if(e(o)||e(f))return NaN;if(f===0)return 0;if(o===0)return-1;if(o<0&&f%2===0&&(o=-o),o>0){if((a(f*(o-1))<.5||a(f)<.2)&&(s=t(o)*f,s<.5))return i(s)}else if(v(f)!==f)return NaN;return l=u(o,f)-1,r(l)||e(l)?NaN:l}return V1=n,V1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K1,x4;function C_(){if(x4)return K1;x4=1;var e=G_();return K1=e,K1}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q1,r5;function k_(){if(r5)return Q1;r5=1;function e(r){var a,i,t;return r===0?-.01803556856784494:(r<0?a=-r:a=r,a<=1?(i=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),t=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,i=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),t=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),i/t)}return Q1=e,Q1}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y1,e5;function W_(){if(e5)return Y1;e5=1;function e(r){var a,i,t;return r===0?.04906224540690395:(r<0?a=-r:a=r,a<=1?(i=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),t=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,i=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),t=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),i/t)}return Y1=e,Y1}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J1,a5;function B_(){if(a5)return J1;a5=1;function e(r){var a,i,t;return r===0?-.029232972183027003:(r<0?a=-r:a=r,a<=1?(i=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),t=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,i=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),t=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),i/t)}return J1=e,J1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/detail/lgamma_small.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Z1,i5;function D_(){if(i5)return Z1;i5=1;var e=x(),r=yr(),a=k_(),i=W_(),t=B_(),u=.15896368026733398,v=.5281534194946289,n=.45201730728149414;function o(f,l,s){var q,m,$,_;if(f<r)return-e(f);if(l===0||s===0)return 0;if(m=0,f>2){if(f>=3){do f-=1,s-=1,m+=e(f);while(f>=3);s=f-2}return $=s*(f+1),_=a(s),m+=$*u+$*_,m}return f<1&&(m+=-e(f),s=l,l=f,f+=1),f<=1.5?($=i(l),q=l*s,m+=q*v+q*$,m):($=s*l,_=t(-s),m+=$*n+$*_,m)}return Z1=o,Z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var j1,n5;function U_(){if(n5)return j1;n5=1;var e=Rr(),r=Cr(),a=$r(),i=X(),t=D_();function u(v){return i(v)?NaN:v<0?v<-.5?e(1+v)-1:r(-a(v)+t(v+2,v+1,v)):v<2?r(t(v+1,v,v-1)):e(1+v)-1}return j1=u,j1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z1,t5;function X_(){if(t5)return z1;t5=1;var e=U_();return z1=e,z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var x1,u5;function V_(){if(u5)return x1;u5=1;function e(r,a){var i,t,u,v;return i=-a,a=-a,t=r+1,u=1,n;function n(){return v=i/t,i*=a,u+=1,i/=u,t+=1,v}}return x1=e,x1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var rt,v5;function K_(){if(v5)return rt;v5=1;var e=C_(),r=zr(),a=X_(),i=V_();function t(u,v,n){var o,f,l,s,q;return f=a(u),l=(f+1)/u,s=e(v,u),f-=s,f/=u,q=i(u,v),s+=1,o=n?l:0,f=-s*r(q,{initialValue:(o-f)/s}),n&&(f=-f),[f,l]}return rt=t,rt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var et,f5;function _0(){if(f5)return et;f5=1;var e=11754943508222875e-54;return et=e,et}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var at,o5;function Q_(){if(o5)return at;o5=1;var e=Z(),r=_0(),a=yr(),i=1e6;function t(n,o,f){var l,s,q,m,$,_,c;if(l=typeof n.next=="function",c=l?n.next().value:n(),m=c[1],q=c[0],m===0&&(m=r),$=m,_=0,l===!0)do c=n.next().value,c&&(_=c[1]+c[0]*_,_===0&&(_=r),$=c[1]+c[0]/$,$===0&&($=r),_=1/_,s=$*_,m*=s);while(e(s-1)>o&&--f);else do c=n(),c&&(_=c[1]+c[0]*_,_===0&&(_=r),$=c[1]+c[0]/$,$===0&&($=r),_=1/_,s=$*_,m*=s);while(c&&e(s-1)>o&&--f);return q/m}function u(n,o,f){var l,s,q,m,$,_;if(l=typeof n.next=="function",_=l?n.next().value:n(),q=_[1],q===0&&(q=r),m=q,$=0,l===!0)do _=n.next().value,_&&($=_[1]+_[0]*$,$===0&&($=r),m=_[1]+_[0]/m,m===0&&(m=r),$=1/$,s=m*$,q*=s);while(_&&e(s-1)>o&&--f);else do _=n(),_&&($=_[1]+_[0]*$,$===0&&($=r),m=_[1]+_[0]/m,m===0&&(m=r),$=1/$,s=m*$,q*=s);while(_&&e(s-1)>o&&--f);return q}function v(n,o){var f,l,s;return l={},arguments.length>1&&(l=o),f=l.maxIter||i,s=l.tolerance||a,l.keep?u(n,s,f):t(n,s,f)}return at=v,at}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var it,l5;function Y_(){if(l5)return it;l5=1;var e=Z(),r=yr(),a=_0(),i=1e6;function t(n,o,f){var l,s,q,m,$,_;_=n(),$=_[1],s=_[0],$===0&&($=a),q=$,m=0;do _=n(),_&&(m=_[1]+_[0]*m,m===0&&(m=a),q=_[1]+_[0]/q,q===0&&(q=a),m=1/m,l=q*m,$*=l);while(_&&e(l-1)>o&&--f);return s/$}function u(n,o,f){var l,s,q,m,$;$=n(),m=$[1],m===0&&(m=a),s=m,q=0;do $=n(),$&&(q=$[1]+$[0]*q,q===0&&(q=a),s=$[1]+$[0]/s,s===0&&(s=a),q=1/q,l=s*q,m*=l);while($&&e(l-1)>o&&--f);return m}function v(n,o){var f,l,s;return l={},arguments.length>1&&(l=o),s=l.tolerance||r,f=l.maxIter||i,l.keep?u(n,s,f):t(n,s,f)}return it=v,it}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nt,s5;function c5(){if(s5)return nt;s5=1;var e=n4(),r=Q_(),a=Y_(),i;return e()?i=r:i=a,nt=i,nt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var tt,_5;function J_(){if(_5)return tt;_5=1;function e(r,a){var i=a-r+1,t=r,u=0;return v;function v(){return u+=1,i+=2,[u*(t-u),i]}}return tt=e,tt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var ut,$5;function q5(){if($5)return ut;$5=1;var e=c5(),r=J_();function a(i,t){var u=r(i,t);return 1/(t-i+1+e(u))}return ut=a,ut}/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var vt,m5;function Z_(){if(m5)return vt;m5=1;var e=pr(),r=Rr(),a=Z(),i=nr(),t=x(),u=xc(),v=Or(),n=Ar(),o=t_(),f=u_(),l=m_(),s=d_(),q=w_(),m=Q4(),$=H_(),_=K_(),c=q5();function h(y,L,g,I){var P,A,S,M,b,d,p,R,N,T,E,H,F,O;switch(p=0,R=I,d=L<30&&L<=y+1&&y<n,d?(F=e(L),N=F===L,S=N?!1:a(F-L)===.5):(N=!1,S=!1),N&&y>.6?(R=!R,A=0):S&&y>.2?(R=!R,A=1):y<u&&L>1?A=6:y>1e3&&(L<y||a(L-50)/y<1)?(R=!R,A=7):y<.5?-.4/t(y)<L?A=2:A=3:y<1.1?y*.75<L?A=2:A=3:(b=!1,g&&L>20&&(T=a((y-L)/L),L>200?20/L>T*T&&(b=!0):T<.4&&(b=!0)),b?A=5:y-1/(3*y)<L?A=2:(A=4,R=!R)),A){case 0:p=f(L,y),g===!1&&(p*=r(L));break;case 1:p=l(L,y),g===!1&&(p*=r(L));break;case 2:p=g?$(L,y):s(L,y),p!==0&&(M=0,P=!1,R&&(M=g?1:r(L),g||p>=1||v*p>M?(M/=p,g||L<1||v/L>M?(M*=-L,P=!0):M=0):M=0),p*=m(L,y,M)/L,P&&(R=!1,p=-p));break;case 3:R=!R,E=_(L,y,R),p=E[0],O=E[1],R=!1,g&&(p/=O);break;case 4:p=g?$(L,y):s(L,y),p!==0&&(p*=c(L,y));break;case 5:p=q(L,y),y>=L&&(R=!R);break;case 6:p=g?i(y,L)/r(L+1):i(y,L)/L,p*=1-L*y/(L+1);break;case 7:p=g?$(L,y):s(L,y),p/=y,p!==0&&(p*=o(L,y));break}return g&&p>1&&(p=1),R&&(H=g?1:r(L),p=H-p),p}return vt=h,vt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var ft,d5;function j_(){if(d5)return ft;d5=1;var e=Ur(),r=ir(),a=x(),i=f0(),t=Ar(),u=ar(),v=o0(),n=Z_(),o=Q4(),f=q5();function l(s,q,m,$){var _,c,h,y;return s<0||q<=0?NaN:(_=m===void 0?!0:m,h=$,q>=v&&!_?(h&&q*4<s?(y=q*a(s)-s,y+=a(f(q,s))):!h&&q>4*s?(y=q*a(s)-s,c=0,y+=a(o(q,s,c)/q)):(y=n(s,q,!0,h),y===0?h?(y=1+1/(12*q)+1/(288*q*q),y=a(y)-q+(q-.5)*a(q),y+=a(i)):(y=q*a(s)-s,c=0,y+=a(o(q,s,c)/q)):y=a(y)+e(q)),y>t?u:r(y)):n(s,q,_,h))}return ft=l,ft}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ot,h5;function p5(){if(h5)return ot;h5=1;var e=j_();return ot=e,ot}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var lt,y5;function z_(){if(y5)return lt;y5=1;var e=ir(),r=nr(),a=x(),i=Ar(),t=Xr();function u(v,n){var o,f;return f=v*a(n),n>=1?f<i&&-n>t?o=r(n,v)*e(-n):v>=1?o=r(n/e(n/v),v):o=e(f-n):f>t?o=r(n,v)*e(-n):n/v<i?o=r(n/e(n/v),v):o=e(f-n),o}return lt=u,lt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var st,R5;function x_(){if(R5)return st;R5=1;var e=c0(),r=Ur(),a=Rr(),i=$r(),t=J(),u=Z(),v=ir(),n=nr(),o=Fr(),f=Nr(),l=x(),s=Ar(),q=Xr(),m=jr(),$=Dr();function _(c,h){var y,L,g,I,P,A,S;return g=c+m-.5,S=(h-c-m+.5)/g,c<1?h<=q?v(c*l(h)-h-r(c)):n(h,c)*v(-h)/a(c):(u(S*S*c)<=100&&c>150?(y=c*(i(S)-S)+h*(.5-m)/g,y=v(y)):(I=c*l(h/g),P=c-h,f(I,P)<=q||o(I,P)>=s?(L=P/c,f(I,P)/2>q&&o(I,P)/2<s?(A=n(h/g,c/2)*v(P/2),y=A*A):f(I,P)/4>q&&o(I,P)/4<s&&h>c?(A=n(h/g,c/4)*v(P/4),y=A*A,y*=y):L>q&&L<s?y=n(h*v(L)/g,c):y=v(I+P)):y=n(h/g,c)*v(P)),y*=t(g/$)/e(c),y)}return st=_,st}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var ct,b5;function r$(){if(b5)return ct;b5=1;var e=Mn(),r=N6(),a=p5(),i=$r(),t=Z(),u=nr(),v=x(),n=wr(),o=yr(),f=z_(),l=x_(),s=new Array(30);function q(m,$,_,c,h,y,L){var g,I,P,A,S,M,b,d,p,R,N,T,E,H,F,O,w,V;if(M=$-1,w=m+M/2,c<.35?R=i(-c):R=v(_),V=-w*R,T=l($,V),T<=n)return h;for(L?(g=T/e(m,$),g/=u(w,$)):g=f($,V)/u(w,$),g*=y,s[0]=1,E=a(V,$,!0,!0),E/=T,A=h+g*E,P=1,b=R/2,b*=b,d=1,N=4*w*w,S=$,F=1;F<s.length;++F){for(P+=2,s[F]=0,p=$-F,I=3,H=1;H<F;++H)p=H*$-F,s[F]+=p*s[F-H]/r(I),I+=2;if(s[F]/=F,s[F]+=M/r(P),E=(S*(S+1)*E+(V+S+1)*d)/N,d*=b,S+=2,O=g*s[F]*E,A+=O,O>1){if(t(O)<t(o*A))break}else if(t(O/o)<t(A))break}return A}return ct=q,ct}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var _t,g5;function e$(){if(g5)return _t;g5=1;function e(r,a,i){var t,u;if(i===0)return 1;for(t=1,u=0;u<i;u++)t*=(r+u)/(a+u);return t}return _t=e,_t}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $t,L5;function a$(){if(L5)return $t;L5=1;var e=Z(),r=Fr();function a(i,t){return r(e(i),e(t))}return $t=a,$t}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qt,N5;function i$(){if(N5)return qt;N5=1;var e=a$();return qt=e,qt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mt,I5;function n$(){if(I5)return mt;I5=1;var e=Z(),r=Nr();function a(i,t){return r(e(i),e(t))}return mt=a,mt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dt,A5;function t$(){if(A5)return dt;A5=1;var e=n$();return dt=e,dt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var ht,M5;function pt(){if(M5)return ht;M5=1;var e=c0(),r=i$(),a=t$(),i=Cr(),t=$r(),u=J(),v=Z(),n=ir(),o=nr(),f=Nr(),l=x(),s=Ar(),q=Xr(),m=jr(),$=Dr();function _(c,h,y,L,g){var I,P,A,S,M,b,d,p,R,N,T,E,H,F;if(!g)return o(y,c)*o(L,h);if(H=c+h,S=c+m-.5,M=h+m-.5,b=H+m-.5,I=e(H),I/=e(c)*e(h),I*=u(M/$),I*=u(S/b),d=(y*h-L*S)/S,p=(L*c-y*M)/M,a(d,p)<.2)if(d*p>0||f(c,h)<1)v(d)<.1?I*=n(c*t(d)):I*=o(y*b/S,c),v(p)<.1?I*=n(h*t(p)):I*=o(L*b/M,h);else if(r(d,p)<.5)P=c<h,A=h/c,P&&A*p<.1||!P&&d/A>.1?(R=i(A*t(p)),R=d+R+R*d,R=c*t(R),I*=n(R)):(R=i(t(d)/A),R=p+R+R*p,R=h*t(R),I*=n(R));else if(v(d)<v(p))if(F=c*t(d)+h*l(L*b/M),F<=q||F>=s){if(F+=l(I),F>=s)return NaN;I=n(F)}else I*=n(F);else if(F=h*t(p)+c*l(y*b/S),F<=q||F>=s){if(F+=l(I),F>=s)return NaN;I=n(F)}else I*=n(F);else if(T=y*b/S,E=L*b/M,d=c*l(T),p=h*l(E),d>=s||d<=q||p>=s||p<=q)if(c<h)if(N=o(E,h/c),R=c*(l(T)+l(N)),R<s&&R>q)I*=o(N*T,c);else{if(p+=d+l(I),p>=s)return NaN;I=n(p)}else if(N=o(T,c/h),R=(l(N)+l(E))*h,R<s&&R>q)I*=o(N*E,h);else{if(p+=d+l(I),p>=s)return NaN;I=n(p)}else I*=o(T,c)*o(E,h);return I}return ht=_,ht}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var yt,P5;function u$(){if(P5)return yt;P5=1;var e=c5(),r=pt(),a={keep:!0,maxIter:1e3};function i(u,v,n,o){var f=0;return l;function l(){var s,q,m;return q=(u+f-1)*(u+v+f-1)*f*(v-f)*n*n,s=u+2*f-1,q/=s*s,m=f,m+=f*(v-f)*n/(u+2*f-1),m+=(u+f)*(u*o-v*n+1+f*(2-n))/(u+2*f+1),f+=1,[q,m]}}function t(u,v,n,o,f,l){var s,q,m;return s=r(u,v,n,o,f),l&&(l[1]=s),s===0?s:(m=i(u,v,n,o),q=e(m,a),s/q)}return yt=t,yt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rt,S5;function v$(){if(S5)return Rt;S5=1;var e=9007199254740991;return Rt=e,Rt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bt,E5;function f$(){if(E5)return bt;E5=1;function e(r,a){var i=0,t;if(r===0)return a;if(a===0)return r;for(;(r&1)===0&&(a&1)===0;)r>>>=1,a>>>=1,i+=1;for(;(r&1)===0;)r>>>=1;for(;a;){for(;(a&1)===0;)a>>>=1;r>a&&(t=a,a=r,r=t),a-=r}return r<<i}return bt=e,bt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gt,w5;function o$(){if(w5)return gt;w5=1;function e(r,a){var i=1,t;if(r===0)return a;if(a===0)return r;for(;r%2===0&&a%2===0;)r/=2,a/=2,i*=2;for(;r%2===0;)r/=2;for(;a;){for(;a%2===0;)a/=2;r>a&&(t=a,a=r,r=t),a-=r}return i*r}return gt=e,gt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lt,F5;function l$(){if(F5)return Lt;F5=1;var e=X(),r=Br(),a=ar(),i=or(),t=Wo(),u=f$(),v=o$();function n(o,f){return e(o)||e(f)?NaN:o===a||f===a||o===i||f===i?NaN:r(o)&&r(f)?(o<0&&(o=-o),f<0&&(f=-f),o<=t&&f<=t?u(o,f):v(o,f)):NaN}return Lt=n,Lt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nt,O5;function s$(){if(O5)return Nt;O5=1;var e=l$();return Nt=e,Nt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var It,T5;function c$(){if(T5)return It;T5=1;var e=v$(),r=ar(),a=Br(),i=X(),t=ni(),u=pr(),v=s$();function n(o,f){var l,s,q,m,$,_,c;if(i(o)||i(f))return NaN;if(!a(o)||!a(f))return NaN;if(f<0||(s=1,o<0&&(o=-o+f-1,t(f)&&(s*=-1)),f>o))return 0;if(f===0||f===o)return s;if(f===1||f===o-1)return s*o;for(o-f<f&&(f=o-f),c=u(e/o),l=1,$=1;$<=f&&!(l>c);$++)l*=o,l/=$,o-=1;return $>f?s*l:(q=n(o,f-$+1),q===r?s*q:(m=n(f,f-$+1),_=v(q,m),q/=_,m/=_,l/=m,s*l*q))}return It=n,It}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var At,H5;function _$(){if(H5)return At;H5=1;var e=c$();return At=e,At}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Mt,G5;function $$(){if(G5)return Mt;G5=1;var e=_$(),r=pr(),a=nr(),i=wr();function t(u,v,n,o){var f,l,s,q,m;if(l=a(n,u),l>i)for(q=l,m=r(u-1);m>v;m--)q*=(m+1)*o/((u-m)*n),l+=q;else if(s=r(u*n),s<=v+1&&(s=r(v+2)),l=a(n,s)*a(o,u-s),l*=e(r(u),r(s)),l===0)for(m=s-1;m>v;m--)l+=a(n,m)*a(o,u-m),l*=e(r(u),r(m));else{for(q=l,f=l,m=s-1;m>v;m--)q*=(m+1)*o/((u-m)*n),l+=q;for(q=f,m=s+1;m<=u;m++)q*=(u-m+1)*n/(m*o),l+=q}return l}return Mt=t,Mt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Pt,C5;function q$(){if(C5)return Pt;C5=1;var e=pt();function r(a,i,t,u,v,n,o){var f,l,s,q;if(f=e(a,i,t,u,n),o&&(o[1]=f),f/=a,f===0)return f;for(s=1,l=1,q=0;q<v-1;++q)l*=(a+i+q)*t/(a+q+1),s+=l;return f*=s,f}return Pt=r,Pt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var St,k5;function m$(){if(k5)return St;k5=1;var e=c0(),r=zr(),a=$r(),i=J(),t=ir(),u=nr(),v=x(),n=wr(),o=Ar(),f=Xr(),l=jr(),s=Dr(),q={maxTerms:100};function m(_,c,h,y){var L=1-c,g=1;return I;function I(){var P=y/_;return _+=1,y*=L*h/g,g+=1,L+=1,P}}function $(_,c,h,y,L,g,I){var P,A,S,M,b,d,p,R;return L?(p=_+c,A=_+l-.5,S=c+l-.5,M=p+l-.5,P=e(p)/(e(_)*e(c)),b=v(M/S)*(c-.5),d=v(h*M/A)*_,b>f&&b<o&&d>f&&d<o?(_*c<S*10?P*=t((c-.5)*a(_/S)):P*=u(M/S,c-.5),P*=u(h*M/A,_),P*=i(A/s),g&&(g[1]=P*u(I,c))):(P=v(P)+b+d+(v(A)-1)/2,g&&(g[1]=t(P+c*v(I))),P=t(P))):P=u(h,_),P<n?y:(R=m(_,c,h,P),q.initialValue=y,r(R,q))}return St=$,St}var Et,W5;function B5(){if(W5)return Et;W5=1;var e=X(),r=Cr(),a=pr(),i=$r(),t=ma(),u=v0(),v=J(),n=ir(),o=nr(),f=Fr(),l=Nr(),s=Or(),q=wr(),m=Wo(),$=Wi(),_=Ir(),c=r$(),h=e$(),y=pt(),L=u$(),g=$$(),I=q$(),P=m$(),A=1/_;function S(M,b,d,p,R,N,T,E){var H,F,O,w,V,G,D,K,Y,C,W,k;if(k=1-M,D=E,K=E+T,N[K]=-1,e(M)||M<0||M>1)return N[D]=NaN,N[K]=NaN,N;if(p){if(b<0||d<0)return N[D]=NaN,N[K]=NaN,N;if(b===0){if(d===0)return N[D]=NaN,N[K]=NaN,N;if(d>0)return N[D]=R?0:1,N}else if(d===0&&b>0)return N[D]=R?1:0,N}else if(b<=0||d<=0)return N[D]=NaN,N[K]=NaN,N;return M===0?(b===1?N[K]=1:N[K]=b<1?s/2:q*2,R?(N[D]=p?1:u(b,d),N):(N[D]=0,N)):M===1?(d===1?N[K]=1:N[K]=d<1?s/2:q*2,R?N[D]=0:N[D]=p?1:u(b,d),N):b===.5&&d===.5?(N[K]=A*v(k*M),W=t(v(R?k:M)),W/=$,p||(W*=_),N[D]=W,N):(b===1&&(G=d,d=b,b=G,G=k,k=M,M=G,R=!R),d===1?b===1?(N[D]=R?k:M,N[K]=1,N):(N[K]=b*o(M,b-1),k<.5?W=R?-r(b*i(-k)):n(b*i(-k)):W=R?-(o(M,b)-1):o(M,b),p||(W/=b),N[D]=W,N):(l(b,d)<=1?(M>.5&&(G=d,d=b,b=G,G=k,k=M,M=G,R=!R),f(b,d)<=1?b>=l(.2,d)||o(M,b)<=.9?R?(O=-(p?1:u(b,d)),R=!1,O=-P(b,d,M,O,p,N,k)):O=P(b,d,M,0,p,N,k):(G=d,d=b,b=G,G=k,k=M,M=G,R=!R,k>=.3?R?(O=-(p?1:u(b,d)),R=!1,O=-P(b,d,M,O,p,N,k)):O=P(b,d,M,0,p,N,k):(p?F=1:F=h(b+d,b,20),O=I(b,d,M,k,20,p,N),R?(O-=p?1:u(b,d),R=!1,O=-c(b+20,d,M,k,O,F,p)):O=c(b+20,d,M,k,O,F,p))):d<=1||M<.1&&o(d*M,b)<=.7?R?(O=-(p?1:u(b,d)),R=!1,O=-P(b,d,M,O,p,N,k)):O=P(b,d,M,0,p,N,k):(G=d,d=b,b=G,G=k,k=M,M=G,R=!R,k>=.3?R?(O=-(p?1:u(b,d)),R=!1,O=-P(b,d,M,O,p,N,k)):O=P(b,d,M,0,p,N,k):b>=15?R?(O=-(p?1:u(b,d)),R=!1,O=-c(b,d,M,k,O,1,p)):O=c(b,d,M,k,0,1,p):(p?F=1:F=h(b+d,b,20),O=I(b,d,M,k,20,p,N),R?(O-=p?1:u(b,d),R=!1,O=-c(b+20,d,M,k,O,F,p)):O=c(b+20,d,M,k,O,F,p)))):(b<d?H=b-(b+d)*M:H=(b+d)*k-d,H<0&&(G=d,d=b,b=G,G=k,k=M,M=G,R=!R),d<40?a(b)===b&&a(d)===d&&b<m-100?(Y=b-1,C=d+Y,O=g(C,Y,M,k),p||(O*=u(b,d))):d*M<=.7?R?(O=-(p?1:u(b,d)),R=!1,O=-P(b,d,M,O,p,N,k)):O=P(b,d,M,0,p,N,k):b>15?(C=a(d),C===d&&(C-=1),w=d-C,p?F=1:F=h(b+w,w,C),O=I(w,b,k,M,C,p),O=c(b,w,M,k,O,1,p),O/=F):p?(C=a(d),w=d-C,w<=0&&(C-=1,w+=1),O=I(w,b,k,M,C,p),O+=I(b,w,M,k,20,p),R&&(O-=1),O=c(b+20,w,M,k,O,1,p),R&&(O=-O,R=!1)):O=L(b,d,M,k,p,N):O=L(b,d,M,k,p,N)),N[K]<0&&(N[K]=y(b,d,M,k,!0)),V=k*M,N[K]!==0&&(s*V<N[K]?N[K]=s/2:N[K]/=V),N[D]=R?(p?1:u(b,d))-O:O,N))}return Et=S,Et}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wt,D5;function d$(){if(D5)return wt;D5=1;var e=B5();function r(a,i,t,u,v){return e(a,i,t,u,v,[0,0],1,0)}return wt=r,wt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ft,U5;function X5(){if(U5)return Ft;U5=1;var e=fr(),r=d$(),a=B5();return e(r,"assign",a),Ft=r,Ft}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ot,V5;function h$(){if(V5)return Ot;V5=1;var e=X5().assign;function r(a,i,t,u,v){var n=[0,0];return u=u!==!1,v=v===!0,e(a,i,t,u,v,n,1,0),n[0]}return Ot=r,Ot}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tt,K5;function xr(){if(K5)return Tt;K5=1;var e=h$();return Tt=e,Tt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ht,Q5;function p$(){if(Q5)return Ht;Q5=1;var e=xr(),r=X();function a(i,t,u){return r(i)||r(t)||r(u)||t<=0||u<=0?NaN:i<=0?0:i>=1?1:e(i,t,u)}return Ht=a,Ht}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gt,Y5;function y$(){if(Y5)return Gt;Y5=1;function e(r){return a;function a(){return r}}return Gt=e,Gt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ct,J5;function qr(){if(J5)return Ct;J5=1;var e=y$();return Ct=e,Ct}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kt,Z5;function R$(){if(Z5)return kt;Z5=1;var e=qr(),r=xr(),a=X();function i(t,u){if(a(t)||a(u)||t<=0||u<=0)return e(NaN);return v;function v(n){return a(n)?NaN:n<=0?0:n>=1?1:r(n,t,u)}}return kt=i,kt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wt,j5;function b$(){if(j5)return Wt;j5=1;var e=fr(),r=p$(),a=R$();return e(r,"factory",a),Wt=r,Wt}var g$=b$(),L$=br(g$);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bt,z5;function x5(){if(z5)return Bt;z5=1;var e=.9189385332046728;return Bt=e,Bt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The code is adapted from the Fortran routine from the FNLIB library of the [SLATEC Common Mathematical Library]{@link https://netlib.org/slatec/fnlib/dcsevl.f}.
*
* The original code was developed by W. Fullerton of Los Alamos Scientific Laboratory, a governmental institution, and is therefore public domain.
*/var Dt,rl;function N$(){if(rl)return Dt;rl=1;var e=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],r=e.length;function a(i){var t,u,v,n,o;if(i<-1.1||i>1.1)return NaN;for(v=0,n=0,t=2*i,o=0;o<r;o++)u=v,v=n,n=t*v-u+e[o];return(n-u)*.5}return Dt=a,Dt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The code is adapted from the Fortran routine from the FNLIB library of the [SLATEC Common Mathematical Library]{@link https://netlib.org/fn/d9lgmc.f}.
*
* The original code was developed by W. Fullerton of Los Alamos Scientific Laboratory, a governmental institution, and is therefore public domain.
*/var Ut,el;function I$(){if(el)return Ut;el=1;var e=nr(),r=N$(),a=9490626562425156e-8,i=3745194030963158e291;function t(u){return u<10?NaN:u>=i?0:u<a?r(2*e(10/u,2)-1)/u:1/(u*12)}return Ut=t,Ut}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The code is adapted from the Fortran routine from the FNLIB library of the [SLATEC Common Mathematical Library]{@link https://www.netlib.org/slatec/fnlib/albeta.f}.
*
* The original code was developed by W. Fullerton of Los Alamos Scientific Laboratory, a governmental institution, and is therefore public domain.
*/var Xt,al;function A$(){if(al)return Xt;al=1;var e=Ur(),r=$r(),a=Rr(),i=Fr(),t=Nr(),u=x(),v=x5(),n=or(),o=ar(),f=I$();function l(s,q){var m,$,_;return $=t(s,q),_=i(s,q),$<0?NaN:$===0?o:_===o?n:$>=10?(m=f($)+f(_)-f($+_),-.5*u(_)+v+m+($-.5)*u($/($+_))+_*r(-$/($+_))):_>=10?(m=f(_)-f($+_),e($)+m+$-$*u($+_)+(_-.5)*r(-$/($+_))):u(a($)*(a(_)/a($+_)))}return Xt=l,Xt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vt,il;function nl(){if(il)return Vt;il=1;var e=A$();return Vt=e,Vt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kt,tl;function M$(){if(tl)return Kt;tl=1;var e=nl(),r=X(),a=$r(),i=ir(),t=x(),u=ar();function v(n,o,f){var l;return r(n)||r(o)||r(f)||o<=0||f<=0?NaN:n<0||n>1?0:n===0?o<1?u:o>1?0:f:n===1?f<1?u:f>1?0:o:(l=(o-1)*t(n),l+=(f-1)*a(-n),l-=e(o,f),i(l))}return Kt=v,Kt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qt,ul;function P$(){if(ul)return Qt;ul=1;var e=qr(),r=nl(),a=X(),i=$r(),t=ir(),u=x(),v=ar();function n(o,f){var l;if(a(o)||a(f)||o<=0||f<=0)return e(NaN);return l=r(o,f),s;function s(q){var m;return a(q)?NaN:q<0||q>1?0:q===0?o<1?v:o>1?0:f:q===1?f<1?v:f>1?0:o:(m=-l,m+=(o-1)*u(q),m+=(f-1)*i(-q),t(m))}}return Qt=n,Qt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yt,vl;function S$(){if(vl)return Yt;vl=1;var e=fr(),r=M$(),a=P$();return e(r,"factory",a),Yt=r,Yt}var E$=S$(),w$=br(E$);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jt,fl;function F$(){if(fl)return Jt;fl=1;function e(r){var a,i,t;return r===0?-.0005087819496582806:(r<0?a=-r:a=r,a<=1?(i=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),t=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,i=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),t=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),i/t)}return Jt=e,Jt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zt,ol;function O$(){if(ol)return Zt;ol=1;function e(r){var a,i,t;return r===0?-.20243350835593876:(r<0?a=-r:a=r,a<=1?(i=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),t=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,i=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),t=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),i/t)}return Zt=e,Zt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jt,ll;function T$(){if(ll)return jt;ll=1;function e(r){var a,i,t;return r===0?-.1311027816799519:(r<0?a=-r:a=r,a<=1?(i=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),t=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,i=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),t=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),i/t)}return jt=e,jt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zt,sl;function H$(){if(sl)return zt;sl=1;function e(r){var a,i,t;return r===0?-.0350353787183178:(r<0?a=-r:a=r,a<=1?(i=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),t=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,i=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),t=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),i/t)}return zt=e,zt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xt,cl;function G$(){if(cl)return xt;cl=1;function e(r){var a,i,t;return r===0?-.016743100507663373:(r<0?a=-r:a=r,a<=1?(i=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),t=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,i=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),t=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),i/t)}return xt=e,xt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_81_0/boost/math/special_functions/detail/erf_inv.hpp}. This implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var ru,_l;function C$(){if(_l)return ru;_l=1;var e=X(),r=J(),a=x(),i=ar(),t=or(),u=F$(),v=O$(),n=T$(),o=H$(),f=G$(),l=.08913147449493408,s=2.249481201171875,q=.807220458984375,m=.9399557113647461,$=.9836282730102539;function _(c){var h,y,L,g,I;return e(c)?NaN:c===0?i:c===2?t:c===1?0:c>2||c<0?NaN:(c>1?(h=-1,L=2-c):(h=1,L=c),c=1-L,c<=.5?(g=c*(c+10),I=u(c),h*(g*l+g*I)):L>=.25?(g=r(-2*a(L)),L-=.25,I=v(L),h*(g/(s+I))):(L=r(-a(L)),L<3?(y=L-1.125,I=n(y),h*(q*L+I*L)):L<6?(y=L-3,I=o(y),h*(m*L+I*L)):(y=L-6,I=f(y),h*($*L+I*L))))}return ru=_,ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eu,$l;function r0(){if($l)return eu;$l=1;var e=C$();return eu=e,eu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var au,ql;function k$(){if(ql)return au;ql=1;var e=X(),r=ma(),a=J(),i=lf(),t=6123233995736766e-32;function u(v){var n;return e(v)?NaN:v<-1||v>1?NaN:v>.5?2*r(a(.5-.5*v)):(n=i-r(v),n+=t,n+=i,n)}return au=u,au}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iu,ml;function W$(){if(ml)return iu;ml=1;var e=k$();return iu=e,iu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nu,dl;function tu(){if(dl)return nu;dl=1;var e=1.4142135623730951;return nu=e,nu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uu,hl;function B$(){if(hl)return uu;hl=1;function e(r){return r===0?.16666666666666666:.16666666666666666+r*.16666666666666666}return uu=e,uu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vu,pl;function D$(){if(pl)return vu;pl=1;function e(r){return r===0?.058333333333333334:.058333333333333334+r*(.06666666666666667+r*.008333333333333333)}return vu=e,vu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fu,yl;function U$(){if(yl)return fu;yl=1;function e(r){return r===0?.0251984126984127:.0251984126984127+r*(.026785714285714284+r*(.0017857142857142857+r*.0001984126984126984))}return fu=e,fu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ou,Rl;function X$(){if(Rl)return ou;Rl=1;function e(r){return r===0?.012039792768959435:.012039792768959435+r*(.010559964726631394+r*(-.0011078042328042327+r*(.0003747795414462081+r*27557319223985893e-22)))}return ou=e,ou}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lu,bl;function V$(){if(bl)return lu;bl=1;function e(r){return r===0?.003837005972422639:.003837005972422639+r*(.00610392115600449+r*(-.0016095979637646305+r*(.0005945867404200738+r*(-6270542728876062e-20+r*2505210838544172e-23))))}return lu=e,lu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var su,gl;function K$(){if(gl)return su;gl=1;function e(r){return r===0?.0032177478835464946:.0032177478835464946+r*(.0010898206731540065+r*(-.0012579159844784845+r*(.0006908420797309686+r*(-.00016376804137220805+r*(154012654012654e-19+r*16059043836821613e-26)))))}return su=e,su}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cu,Ll;function Q$(){if(Ll)return cu;Ll=1;function e(r){return r===0?.001743826229834001:.001743826229834001+r*(3353097688001788e-20+r*(-.0007624513544032393+r*(.0006451304695145635+r*(-.000249472580470431+r*(49255746366361444e-21+r*(-39851014346715405e-22+r*7647163731819816e-28))))))}return cu=e,cu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _u,Nl;function Y$(){if(Nl)return _u;Nl=1;function e(r){return r===0?.0009647274732138864:.0009647274732138864+r*(-.0003110108632631878+r*(-.00036307660358786886+r*(.0005140660578834113+r*(-.00029133414466938067+r*(9086710793521991e-20+r*(-15303004486655377e-21+r*(10914179173496788e-22+r*28114572543455206e-31)))))))}return _u=e,_u}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $u,Il;function J$(){if(Il)return $u;Il=1;function e(r){return r===0?.0005422926281312969:.0005422926281312969+r*(-.0003694266780000966+r*(-.00010230378073700413+r*(.00035764655430568635+r*(-.00028690924218514614+r*(.00012645437628698076+r*(-33202652391372056e-21+r*(4890304529197534e-21+r*(-3123956959982987e-22+r*822063524662433e-32))))))))}return $u=e,$u}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var qu,Al;function Z$(){if(Al)return qu;Al=1;var e=Mn(),r=Mr(),a=J(),i=Ir(),t=B$(),u=D$(),v=U$(),n=X$(),o=V$(),f=K$(),l=Q$(),s=Y$(),q=J$(),m=0,$=[1,0,0,0,0,0,0,0,0,0];function _(c,h){var y,L;return L=e(c/2,.5)*a(c*i)*(h-.5),y=1/c,$[1]=t(y),$[2]=u(y),$[3]=v(y),$[4]=n(y),$[5]=o(y),$[6]=f(y),$[7]=l(y),$[8]=s(y),$[9]=q(y),m+L*r($,L*L)}return qu=_,qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var mu,Ml;function j$(){if(Ml)return mu;Ml=1;var e=Mn(),r=Mr(),a=J(),i=nr(),t=Ir(),u=[0,0,0,0,0,0,0];function v(n,o){var f,l,s,q,m,$,_,c;return c=e(n/2,.5)*a(n*t)*o,q=n+2,m=n+4,$=n+6,u[0]=1,u[1]=-(n+1)/(2*q),q*=n+2,u[2]=-n*(n+1)*(n+3)/(8*q*m),q*=n+2,u[3]=-n*(n+1)*(n+5)*((3*n+7)*n-2)/(48*q*m*$),q*=n+2,m*=n+4,u[4]=-n*(n+1)*(n+7)*(((((15*n+154)*n+465)*n+286)*n-336)*n+64)/(384*q*m*$*(n+8)),q*=n+2,u[5]=-n*(n+1)*(n+3)*(n+9)*((((((35*n+452)*n+1573)*n+600)*n-2020)*n+928)*n-128)/(1280*q*m*$*(n+8)*(n+10)),q*=n+2,m*=n+4,$*=n+6,u[6]=-n*(n+1)*(n+11)*(((((((((((945*n+31506)*n+425858)*n+2980236)*n+11266745)*n+20675018)*n+7747124)*n-22574632)*n-8565600)*n+18108416)*n-7099392)*n+884736)/(46080*q*m*$*(n+8)*(n+10)*(n+12)),_=a(n),s=i(_*c,1/n),l=s*s,f=r(u,l),f*=_,f/=s,-f}return mu=v,mu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var du,Pl;function z$(){if(Pl)return du;Pl=1;var e=r0(),r=Cr(),a=J(),i=nr(),t=Wi(),u=tu();function v(n,o){var f,l,s,q,m,$,_;return n>1e20?-e(2*o)*u:(f=1/(n-.5),l=48/(f*f),s=((20700*f/l-98)*f-16)*f+96.36,q=((94.5/(l+s)-3)/l+1)*a(f*t)*n,_=i(q*2*o,2/n),_>.05+f?($=-e(2*o)*u,_=$*$,n<5&&(s+=.3*(n-4.5)*($+.6)),s+=(((.05*q*$-5)*$-7)*$-2)*$+l,_=(((((.4*_+6.3)*_+36)*_+94.5)/s-_-3)/l+1)*$,_=r(f*_*_)):_=((1/(((n+6)/(n*_)-.089*q-.822)*(n+2)*3)+.5/(n+4))*_-1)*(n+1)/(n+2)+1/_,m=a(n*_),-m)}return du=v,du}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var hu,Sl;function x$(){if(Sl)return hu;Sl=1;var e=r0(),r=pr(),a=Wr(),i=v6(),t=W$(),u=J(),v=Z(),n=Tn(),o=nr(),f=Zr(),l=tu(),s=Ir(),q=Z$(),m=j$(),$=z$(),_=268435456,c=1/3,h=106/3,y=.8549879733383485;function L(g,I,P){var A,S,M,b,d,p,R,N,T,E,H,F,O,w,V,G;if(d=0,I>P?(R=P,P=I,I=R,b=!0):b=!1,r(g)===g&&g<20)switch(S=a(1,h),r(g)){case 1:I===.5?d=0:d=-n(s*I)/f(s*I);break;case 2:d=(2*I-1)/u(2*I*P);break;case 4:p=4*I*P,M=u(p),O=4*n(t(M)/3)/M,w=u(O-4),d=I-.5<0?-w:w;break;case 6:if(I<1e-150)return(b?-1:1)*$(g,I);V=4*(I-I*I),G=o(V,c),F=6*(1+y*(1/G-1));do T=F*F,E=T*T,H=F*E,N=F,F=2*(8*V*H-270*T+2187)/(5*(4*V*E-216*F-243));while(v((F-N)/F)>S);F=u(F-g),d=I-.5<0?-F:F;break;default:g>_?d=e(2*I)*l:g<3?(A=.2742-g*.0242143,I>A?d=q(g,I):d=m(g,I)):(A=a(1,i(g/-.654)),I>A?d=$(g,I):d=m(g,I))}else g>_?d=-e(2*I)*l:g<3?(A=.2742-g*.0242143,I>A?d=q(g,I):d=m(g,I)):(A=a(1,i(g/-.654)),I>A?d=$(g,I):d=m(g,I));return b?-d:d}return hu=L,hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var pu,El;function rq(){if(El)return pu;El=1;var e=x$();function r(a,i,t){var u,v,n,o;return v=i/2,n=1-v,u=a*2,o=e(u,v,n),t&&(t.value=o*o/(u+o*o)),u/(u+o*o)}return pu=r,pu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var yu,wl;function eq(){if(wl)return yu;wl=1;var e=Mr(),r=r0(),a=J(),i=ir(),t=tu(),u=[0,0,0,0,0,0,0],v=[0,0,0,0];function n(o,f,l){var s,q,m,$,_,c,h;return s=r(2*l),s/=-a(o/2),v[0]=s,c=f-o,$=c*c,_=$*c,u[0]=-c*t/2,u[1]=(1-2*c)/8,u[2]=-(c*t/48),u[3]=-1/192,u[4]=-c*t/3840,u[5]=0,u[6]=0,v[1]=e(u,s),u[0]=c*t*(3*c-2)/12,u[1]=(20*$-12*c+1)/128,u[2]=c*t*(20*c-1)/960,u[3]=(16*$+30*c-15)/4608,u[4]=c*t*(21*c+32)/53760,u[5]=(-(32*$)+63)/368640,u[6]=-c*t*(120*c+17)/25804480,v[2]=e(u,s),u[0]=c*t*(-75*$+80*c-16)/480,u[1]=(-1080*_+868*$-90*c-45)/9216,u[2]=c*t*(-1190*$+84*c+373)/53760,u[3]=(-2240*_-2508*$+2100*c-165)/368640,u[4]=0,u[5]=0,u[6]=0,v[3]=e(u,s),m=e(v,1/o),q=m*m,h=-i(-q/2),q===0?.5:(1+m*a((1+h)/q))/2}return yu=n,yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Ru,Fl;function Ol(){if(Fl)return Ru;Fl=1;var e=x(),r=Or(),a=r/4;function i(t,u){return v;function v(n){var o,f,l;return l=1-n,l===0?[-a,-a]:n===0?[-a,-a]:(f=e(n)+u*e(l)+t,o=1/n-u/l,[f,o])}}return Ru=i,Ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bu,Tl;function aq(){if(Tl)return bu;Tl=1;var e=X();function r(a){return a===0||e(a)?a:a<0?-1:1}return bu=r,bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gu,Hl;function $0(){if(Hl)return gu;Hl=1;var e=aq();return gu=e,gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/tools/roots.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Lu,Gl;function Cl(){if(Gl)return Lu;Gl=1;var e=$0(),r=Z(),a=Wr(),i=Or();function t(u,v,n,o,f,l){var s,q,m,$,_,c,h,y,L,g;L=0,s=0,_=v,$=a(1,1-f),h=i,q=i,m=i,c=l;do{if(s=L,m=q,q=h,y=u(_),L=y[0],g=y[1],c-=1,L===0)break;if(g===0?(s===0&&(_===n?v=o:v=n,s=u(v),h=v-_),e(s)*e(L)<0?h<0?h=(_-n)/2:h=(_-o)/2:h<0?h=(_-o)/2:h=(_-n)/2):h=L/g,r(h*2)>r(m)&&(h=h>0?(_-n)/2:(_-o)/2),v=_,_-=h,_<=n){if(h=.5*(v-n),_=v-h,_===n||_===o)break}else if(_>=o&&(h=.5*(v-o),_=v-h,_===n||_===o))break;h>0?o=v:n=v}while(c&&r(_*$)<r(h));return _}return Lu=t,Lu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nu,kl;function iq(){if(kl)return Nu;kl=1;function e(r){return r===0?-1:-1+r*(-5+r*5)}return Nu=e,Nu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iu,Wl;function nq(){if(Wl)return Iu;Wl=1;function e(r){return r===0?1:1+r*(21+r*(-69+r*46))}return Iu=e,Iu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Au,Bl;function tq(){if(Bl)return Au;Bl=1;function e(r){return r===0?7:7+r*(-2+r*(33+r*(-62+r*31)))}return Au=e,Au}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mu,Dl;function uq(){if(Dl)return Mu;Dl=1;function e(r){return r===0?25:25+r*(-52+r*(-17+r*(88+r*(-115+r*46))))}return Mu=e,Mu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pu,Ul;function vq(){if(Ul)return Pu;Ul=1;function e(r){return r===0?7:7+r*(12+r*(-78+r*52))}return Pu=e,Pu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Su,Xl;function fq(){if(Xl)return Su;Xl=1;function e(r){return r===0?-7:-7+r*(2+r*(183+r*(-370+r*185)))}return Su=e,Su}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eu,Vl;function oq(){if(Vl)return Eu;Vl=1;function e(r){return r===0?-533:-533+r*(776+r*(-1835+r*(10240+r*(-13525+r*5410))))}return Eu=e,Eu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wu,Kl;function lq(){if(Kl)return wu;Kl=1;function e(r){return r===0?-1579:-1579+r*(3747+r*(-3372+r*(-15821+r*(45588+r*(-45213+r*15071)))))}return wu=e,wu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fu,Ql;function sq(){if(Ql)return Fu;Ql=1;function e(r){return r===0?449:449+r*(-1259+r*(-769+r*(6686+r*(-9260+r*3704))))}return Fu=e,Fu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ou,Yl;function cq(){if(Yl)return Ou;Yl=1;function e(r){return r===0?63149:63149+r*(-151557+r*(140052+r*(-727469+r*(2239932+r*(-2251437+r*750479)))))}return Ou=e,Ou}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tu,Jl;function _q(){if(Jl)return Tu;Jl=1;function e(r){return r===0?29233:29233+r*(-78755+r*(105222+r*(146879+r*(-1602610+r*(3195183+r*(-2554139+r*729754))))))}return Tu=e,Tu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hu,Zl;function $q(){if(Zl)return Hu;Zl=1;function e(r){return r===0?1:1+r*(-13+r*13)}return Hu=e,Hu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gu,jl;function qq(){if(jl)return Gu;jl=1;function e(r){return r===0?1:1+r*(21+r*(-69+r*46))}return Gu=e,Gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Cu,zl;function mq(){if(zl)return Cu;zl=1;var e=Mr(),r=r0(),a=Z(),i=ir(),t=x(),u=J(),v=Zr(),n=Tn(),o=Ol(),f=Cl(),l=iq(),s=nq(),q=tq(),m=uq(),$=vq(),_=fq(),c=oq(),h=lq(),y=sq(),L=cq(),g=_q(),I=$q(),P=qq(),A=[0,0,0,0,0,0],S=[0,0,0,0];function M(b,d,p){var R,N,T,E,H,F,O,w,V,G,D,K,Y,C,W,k,tr,rr,U,Q;return H=r(2*b)/-u(d/2),rr=v(p),tr=n(p),S[0]=H,W=rr*rr,k=tr*tr,Y=rr*tr,K=Y*Y,D=K*Y,G=K*K,V=K*D,w=D*D,O=G*D,A[0]=(2*W-1)/(3*Y),A[1]=-l(W)/(36*K),A[2]=s(W)/(1620*D),A[3]=q(W)/(6480*G),A[4]=m(W)/(90720*V),A[5]=0,S[1]=e(A,H),A[0]=-$(W)/(405*D),A[1]=_(W)/(2592*G),A[2]=-c(W)/(204120*V),A[3]=-h(W)/(2099520*w),A[4]=0,A[5]=0,S[2]=e(A,H),A[0]=y(W)/(102060*V),A[1]=-L(W)/(20995200*w),A[2]=g(W)/(36741600*O),A[3]=0,A[4]=0,A[5]=0,S[3]=e(A,H),F=e(S,1/d),T=tr/rr,T*=T,C=-(F*F)/(2*W)+t(W)+k*t(k)/W,a(F)<.7?(A[0]=W,A[1]=Y,A[2]=(1-2*W)/3,A[3]=I(W)/(36*Y),A[4]=P(W)/(270*K),A[5]=0,Q=e(A,F)):(U=i(C),A[0]=U,A[1]=T,A[2]=0,A[3]=3*T*(3*T+1)/6,A[4]=4*T*(4*T+1)*(4*T+2)/24,A[5]=5*T*(5*T+1)*(5*T+2)*(5*T+3)/120,Q=e(A,U),(Q-W)*F<0&&(Q=1-Q)),F<0?(N=0,R=W):(N=W,R=1),(Q<N||Q>R)&&(Q=(N+R)/2),E=o(-C,T),Q=f(E,Q,N,R,32,100),Q}return Cu=M,Cu}var q0={exports:{}},m0={exports:{}},ku,xl;function dq(){if(xl)return ku;xl=1;var e=1e3,r=e*60,a=r*60,i=a*24,t=i*365.25;ku=function(f,l){l=l||{};var s=typeof f;if(s==="string"&&f.length>0)return u(f);if(s==="number"&&isNaN(f)===!1)return l.long?n(f):v(f);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(f))};function u(f){if(f=String(f),!(f.length>100)){var l=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(f);if(l){var s=parseFloat(l[1]),q=(l[2]||"ms").toLowerCase();switch(q){case"years":case"year":case"yrs":case"yr":case"y":return s*t;case"days":case"day":case"d":return s*i;case"hours":case"hour":case"hrs":case"hr":case"h":return s*a;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}function v(f){return f>=i?Math.round(f/i)+"d":f>=a?Math.round(f/a)+"h":f>=r?Math.round(f/r)+"m":f>=e?Math.round(f/e)+"s":f+"ms"}function n(f){return o(f,i,"day")||o(f,a,"hour")||o(f,r,"minute")||o(f,e,"second")||f+" ms"}function o(f,l,s){if(!(f<l))return f<l*1.5?Math.floor(f/l)+" "+s:Math.ceil(f/l)+" "+s+"s"}return ku}var r7;function hq(){return r7||(r7=1,(function(e,r){r=e.exports=t.debug=t.default=t,r.coerce=o,r.disable=v,r.enable=u,r.enabled=n,r.humanize=dq(),r.names=[],r.skips=[],r.formatters={};var a;function i(f){var l=0,s;for(s in f)l=(l<<5)-l+f.charCodeAt(s),l|=0;return r.colors[Math.abs(l)%r.colors.length]}function t(f){function l(){if(l.enabled){var s=l,q=+new Date,m=q-(a||q);s.diff=m,s.prev=a,s.curr=q,a=q;for(var $=new Array(arguments.length),_=0;_<$.length;_++)$[_]=arguments[_];$[0]=r.coerce($[0]),typeof $[0]!="string"&&$.unshift("%O");var c=0;$[0]=$[0].replace(/%([a-zA-Z%])/g,function(y,L){if(y==="%%")return y;c++;var g=r.formatters[L];if(typeof g=="function"){var I=$[c];y=g.call(s,I),$.splice(c,1),c--}return y}),r.formatArgs.call(s,$);var h=l.log||r.log||console.log.bind(console);h.apply(s,$)}}return l.namespace=f,l.enabled=r.enabled(f),l.useColors=r.useColors(),l.color=i(f),typeof r.init=="function"&&r.init(l),l}function u(f){r.save(f),r.names=[],r.skips=[];for(var l=(typeof f=="string"?f:"").split(/[\s,]+/),s=l.length,q=0;q<s;q++)l[q]&&(f=l[q].replace(/\*/g,".*?"),f[0]==="-"?r.skips.push(new RegExp("^"+f.substr(1)+"$")):r.names.push(new RegExp("^"+f+"$")))}function v(){r.enable("")}function n(f){var l,s;for(l=0,s=r.skips.length;l<s;l++)if(r.skips[l].test(f))return!1;for(l=0,s=r.names.length;l<s;l++)if(r.names[l].test(f))return!0;return!1}function o(f){return f instanceof Error?f.stack||f.message:f}})(m0,m0.exports)),m0.exports}var e7;function a7(){return e7||(e7=1,(function(e,r){var a={};r=e.exports=hq(),r.log=u,r.formatArgs=t,r.save=v,r.load=n,r.useColors=i,r.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:o(),r.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function i(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}r.formatters.j=function(f){try{return JSON.stringify(f)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}};function t(f){var l=this.useColors;if(f[0]=(l?"%c":"")+this.namespace+(l?" %c":" ")+f[0]+(l?"%c ":" ")+"+"+r.humanize(this.diff),!!l){var s="color: "+this.color;f.splice(1,0,s,"color: inherit");var q=0,m=0;f[0].replace(/%[a-zA-Z%]/g,function($){$!=="%%"&&(q++,$==="%c"&&(m=q))}),f.splice(m,0,s)}}function u(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function v(f){try{f==null?r.storage.removeItem("debug"):r.storage.debug=f}catch{}}function n(){var f;try{f=r.storage.debug}catch{}return!f&&typeof process<"u"&&"env"in process&&(f=a.DEBUG),f}r.enable(n());function o(){try{return window.localStorage}catch{}}})(q0,q0.exports)),q0.exports}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wu,i7;function d0(){if(i7)return Wu;i7=1;var e=34028234663852886e22;return Wu=e,Wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bu,n7;function pq(){if(n7)return Bu;n7=1;var e=a7(),r=p5(),a=Z(),i=ir(),t=x(),u=d0(),v=e("gammaincinv:higher_newton");function n(o,f,l,s,q,m,$,_){var c,h,y,L,g,I,P,A,S,M,b,d,p,R;R=o,b=1,d=1,I=f*f,h=o;do{if(R=o,P=R*R,l===0){if(c=(1-f)*t(R)+R+m,c>t(u))return v("Warning: overflow problems in one or more steps of the computation. The initial approximation to the root is returned."),h;p=i(c)}else p=-$*R;_?(A=r(R,f,!0,!1),y=-p*(A-s)):(S=r(R,f,!0,!0),y=p*(S-q)),p=y,s>1e-120||d>1?(L=.5*(R-f+1)/R,g=(2*P-4*R*f+4*R+2*I-3*f+1)/P,g/=6,o=R+p*(1+p*(L+p*g))):o=R+p,b=a(R/o-1),d+=1,R=o,R<0&&(R=h,d=100)}while(b>2e-14&&d<35);return(b>2e-14||d>99)&&v("Warning: the number of iterations in the Newton method reached the upper limit N=35. The last value obtained for the root is given as output."),M=R||0,M}return Bu=n,Bu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Du,t7;function yq(){if(t7)return Du;t7=1;function e(r){return r===0?0:0+r*(1+r*(1+r*(1.5+r*(2.6666666666666665+r*(5.208333333333333+r*10.8)))))}return Du=e,Du}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uu,u7;function Rq(){if(u7)return Uu;u7=1;function e(r){return r===0?1:1+r*(1+r*(.3333333333333333+r*(.027777777777777776+r*(-.003703703703703704+r*(.0002314814814814815+r*5878894767783657e-20)))))}return Uu=e,Uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xu,v7;function f7(){if(v7)return Xu;v7=1;var e=Z(),r=ir(),a=x(),i=Mr(),t=yq(),u=Rq(),v=1e-8,n=.08333333333333333,o=.008333333333333333,f=[1,0,0,0,0,0];function l(s){var q,m,$,_,c,h,y,L,g;if(g=s*s*.5,s===0?c=0:s<-1?(L=r(-1-g),c=t(L)):s<1?(L=s,c=u(L)):(L=11+g,h=a(L),c=L+h,L=1/L,q=h*h,m=q*h,$=m*h,_=$*h,f[1]=(2-h)*.5,f[2]=(-9*h+6+2*q)/6,f[3]=-(3*m+36*h-22*q-12)*n,f[4]=(60+350*q-300*h-125*m+12*$)/60,f[5]=-(-120-274*$+900*h-1700*q+1125*m+20*_)*o,c+=h*L*i(f,L)),L=1,s>-3.5&&s<-.03||s>.03&&s<40){L=1,y=c;do c=y*(g+a(y))/(y-1),L=e(y/c-1),y=c;while(L>v)}return c}return Xu=l,Xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vu,o7;function bq(){if(o7)return Vu;o7=1;var e=[1.9963790515900766,-.0017971032528832887,13129285796384672e-21,-2340875228178749e-22,72291210671127e-22,-3280997607821e-22,19875070901e-21,-1509214183e-21,1375340084e-22,-145728923e-22,17532367e-22,-2351465e-22,346551e-22,-55471e-22,9548e-22,-1748e-22,332e-22,-58e-22];function r(a,i){var t,u,v,n,o;u=0,v=0,t=i+i,o=a;do n=v,v=u,u=t*v-n+e[o],o-=1;while(o>=0);return(u-n)/2}return Vu=r,Vu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ku,l7;function gq(){if(l7)return Ku;l7=1;function e(r){return r===0?.025721014990011306:.025721014990011306+r*(.08247596616699963+r*(-.0025328157302663564+r*(.0006099292666946337+r*(-.00033543297638406+r*.000250505279903))))}return Ku=e,Ku}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qu,s7;function Lq(){if(s7)return Qu;s7=1;function e(r){return r===0?.08333333333333333:.08333333333333333+r*(-.002777777777777778+r*(.0007936507936507937+r*-.0005952380952380953))}return Qu=e,Qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yu,c7;function Nq(){if(c7)return Yu;c7=1;var e=Ur(),r=x(),a=x5(),i=_0(),t=d0(),u=bq(),v=gq(),n=Lq(),o=.30865217988013566;function f(l){var s;return l<i?t:l<1?e(l+1)-(l+.5)*r(l)+l-a:l<2?e(l)-(l-.5)*r(l)+l-a:l<3?e(l-1)-(l-.5)*r(l)+l-a+r(l-1):l<12?(s=18/(l*l)-1,u(17,s)/(12*l)):(s=1/(l*l),l<1e3?v(s)/(o+s)/l:n(s)/l)}return Yu=f,Yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ju,_7;function Iq(){if(_7)return Ju;_7=1;var e=ir(),r=Rr(),a=x(),i=d0(),t=f0(),u=Nq();function v(n){return n>=3?e(u(n)):n>0?r(n)/(e(-n+(n-.5)*a(n))*t):i}return Ju=v,Ju}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zu,$7;function Aq(){if($7)return Zu;$7=1;function e(r){var a,i,t;return r===0?-.3333333333438:(r<0?a=-r:a=r,a<=1?(i=-.3333333333438+r*(-.2070740359969+r*(-.05041806657154+r*(-.004923635739372+r*-4293658292782e-17))),t=1+r*(.7045554412463+r*(.2118190062224+r*(.03048648397436+r*.001605037988091)))):(r=1/r,i=-4293658292782e-17+r*(-.004923635739372+r*(-.05041806657154+r*(-.2070740359969+r*-.3333333333438))),t=.001605037988091+r*(.03048648397436+r*(.2118190062224+r*(.7045554412463+r*1)))),i/t)}return Zu=e,Zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ju,q7;function Mq(){if(q7)return ju;q7=1;var e=Z(),r=x(),a=f7(),i=Aq();function t(u){var v;return e(u)<1?i(u):(v=a(u),r(u/(v-1))/u)}return ju=t,ju}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zu,m7;function Pq(){if(m7)return zu;m7=1;function e(r){var a,i,t;return r===0?-.0172847633523:(r<0?a=-r:a=r,a<=1?(i=-.0172847633523+r*(-.0159372646475+r*(-.00464910887221+r*(-.00060683488776+r*-614830384279e-17))),t=1+r*(.764050615669+r*(.297143406325+r*(.0579490176079+r*.00574558524851)))):(r=1/r,i=-614830384279e-17+r*(-.00060683488776+r*(-.00464910887221+r*(-.0159372646475+r*-.0172847633523))),t=.00574558524851+r*(.0579490176079+r*(.297143406325+r*(.764050615669+r*1)))),i/t)}return zu=e,zu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xu,d7;function Sq(){if(d7)return xu;d7=1;function e(r){var a,i,t;return r===0?-.0172839517431:(r<0?a=-r:a=r,a<=1?(i=-.0172839517431+r*(-.0146362417966+r*(-.00357406772616+r*(-.000391032032692+r*249634036069e-17))),t=1+r*(.690560400696+r*(.249962384741+r*(.0443843438769+r*.00424073217211)))):(r=1/r,i=249634036069e-17+r*(-.000391032032692+r*(-.00357406772616+r*(-.0146362417966+r*-.0172839517431))),t=.00424073217211+r*(.0443843438769+r*(.249962384741+r*(.690560400696+r*1)))),i/t)}return xu=e,xu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rv,h7;function Eq(){if(h7)return rv;h7=1;function e(r){var a,i,t;return r===0?.99994466948:(r<0?a=-r:a=r,a<=1?(i=.99994466948+r*(104.649839762+r*(857.204033806+r*(731.901559577+r*45.5174411671))),t=1+r*(104.526456943+r*(823.313447808+r*(3119.93802124+r*3970.03311219)))):(r=1/r,i=45.5174411671+r*(731.901559577+r*(857.204033806+r*(104.649839762+r*.99994466948))),t=3970.03311219+r*(3119.93802124+r*(823.313447808+r*(104.526456943+r*1)))),i/t)}return rv=e,rv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ev,p7;function wq(){if(p7)return ev;p7=1;var e=x(),r=Pq(),a=Sq(),i=Eq();function t(u){var v,n;return u<-5?(n=u*u,v=e(-u),(12-n-6*(v*v))/(12*n*u)):u<-2?r(u):u<2?a(u):u<1e3?(n=1/u,i(u)/(-12*u)):-1/(12*u)}return ev=t,ev}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var av,y7;function Fq(){if(y7)return av;y7=1;function e(r){var a,i,t;return r===0?.0495346498136:(r<0?a=-r:a=r,a<=1?(i=.0495346498136+r*(.0299521337141+r*(.00688296911516+r*(.000512634846317+r*-201411722031e-16))),t=1+r*(.759803615283+r*(.261547111595+r*(.0464854522477+r*.00403751193496)))):(r=1/r,i=-201411722031e-16+r*(.000512634846317+r*(.00688296911516+r*(.0299521337141+r*.0495346498136))),t=.00403751193496+r*(.0464854522477+r*(.261547111595+r*(.759803615283+r*1)))),i/t)}return av=e,av}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iv,R7;function Oq(){if(R7)return iv;R7=1;function e(r){var a,i,t;return r===0?.00452313583942:(r<0?a=-r:a=r,a<=1?(i=.00452313583942+r*(.00120744920113+r*(-789724156582e-16+r*(-504476066942e-16+r*-535770949796e-17))),t=1+r*(.912203410349+r*(.405368773071+r*(.0901638932349+r*.00948935714996)))):(r=1/r,i=-535770949796e-17+r*(-504476066942e-16+r*(-789724156582e-16+r*(.00120744920113+r*.00452313583942))),t=.00948935714996+r*(.0901638932349+r*(.405368773071+r*(.912203410349+r*1)))),i/t)}return iv=e,iv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nv,b7;function Tq(){if(b7)return nv;b7=1;function e(r){var a,i,t;return r===0?.00439937562904:(r<0?a=-r:a=r,a<=1?(i=.00439937562904+r*(.000487225670639+r*(-.000128470657374+r*(529110969589e-17+r*15716677175e-17))),t=1+r*(.794435257415+r*(.333094721709+r*(.0703527806143+r*.00806110846078)))):(r=1/r,i=15716677175e-17+r*(529110969589e-17+r*(-.000128470657374+r*(.000487225670639+r*.00439937562904))),t=.00806110846078+r*(.0703527806143+r*(.333094721709+r*(.794435257415+r*1)))),i/t)}return nv=e,nv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tv,g7;function Hq(){if(g7)return tv;g7=1;function e(r){var a,i,t;return r===0?-.0011481191232:(r<0?a=-r:a=r,a<=1?(i=-.0011481191232+r*(-.112850923276+r*(1.51623048511+r*(-.218472031183+r*.0730002451555))),t=1+r*(14.2482206905+r*(69.7360396285+r*(218.938950816+r*277.067027185)))):(r=1/r,i=.0730002451555+r*(-.218472031183+r*(1.51623048511+r*(-.112850923276+r*-.0011481191232))),t=277.067027185+r*(218.938950816+r*(69.7360396285+r*(14.2482206905+r*1)))),i/t)}return tv=e,tv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uv,L7;function Gq(){if(L7)return uv;L7=1;function e(r){var a,i,t;return r===0?-.000145727889667:(r<0?a=-r:a=r,a<=1?(i=-.000145727889667+r*(-.290806748131+r*(-13.308504545+r*(199.722374056+r*-11.4311378756))),t=1+r*(139.612587808+r*(2189.01116348+r*(7115.24019009+r*45574.6081453)))):(r=1/r,i=-11.4311378756+r*(199.722374056+r*(-13.308504545+r*(-.290806748131+r*-.000145727889667))),t=45574.6081453+r*(7115.24019009+r*(2189.01116348+r*(139.612587808+r*1)))),i/t)}return uv=e,uv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vv,N7;function Cq(){if(N7)return vv;N7=1;var e=x(),r=Fq(),a=Oq(),i=Tq(),t=Hq(),u=Gq();function v(n){var o,f;return n<-8?(o=n*n,f=e(-n)/n,(-30+n*f*(6*o*f*f-12+o))/(12*n*o*o)):n<-4?r(n)/(n*n):n<-2?a(n):n<2?i(n):n<10?(o=1/n,t(o)/(n*n)):n<100?(o=1/n,u(o)/(n*n)):-e(n)/(12*n*n*n)}return vv=v,vv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fv,I7;function kq(){if(I7)return fv;I7=1;var e=a7(),r=Mr(),a=Ur(),i=r0(),t=Rr(),u=J(),v=Z(),n=ir(),o=Nr(),f=nr(),l=x(),s=f0(),q=d0(),m=s0(),$=pq(),_=f7(),c=Iq(),h=Mq(),y=wq(),L=Cq(),g=e("gammaincinv:compute"),I=.5,P=.3333333333333333,A=.25,S=.2,M=.16666666666666666,b=.08333333333333333,d=.041666666666666664,p=[0,0,0,0,0];function R(N,T,E){var H,F,O,w,V,G,D,K,Y,C,W,k,tr,rr,U,Q,ur,er,Vr,dr,j,gr,lr,Pr,a0,B,z,u2,ks,Ws,v2,f2,o2,l2,Bs,sr,vr,s2,cr,Lr,hr,c2,_2,$2;if(T<I?(w=!0,V=T,c2=-1):(w=!1,V=E,c2=1),cr=0,v(N-1)<1e-4&&(Lr=0,w?T<.001?(f2=T*T,u2=f2*T,v2=u2*T,dr=v2*T,Vr=dr*T,j=T+f2*I+u2*P+v2*A+dr*S+Vr*M):j=-l(1-T):j=-l(E),N===1?(cr=2,l2=j):(O=a(N),cr=1)),E<1e-30&&N<I&&(Lr=0,j=-l(E*t(N))+(N-1)*l(-l(E*t(N))),cr=1,O=a(N)),N>1&&N<500&&T<1e-80){for(Lr=0,G=1/N,H=1/(N+1),j=(a(N+1)+l(T))*G,j=n(j),rr=j,s2=0;s2<10;s2++)j=rr*n(j*G)*f(1-j*H,G);cr=1,O=a(N)}if(D=1/N*(l(T)+a(N+1)),D<l(S*(1+N))&&cr===0&&(hr=n(D),Lr=0,gr=N*N,o2=gr*N,ks=o2*N,U=N+1,W=U*U,C=U*W,Y=W*W,Q=N+2,K=Q*Q,ur=N+3,p[0]=1,p[1]=1/U,p[2]=I*(3*N+5)/(W*Q),p[3]=P*(31+8*gr+33*N)/(C*Q*ur),p[4]=d*(2888+1179*o2+125*ks+3971*gr+5661*N)/(Y*K*ur*(N+4)),j=hr*r(p,hr),O=a(N),cr=1),N<10&&cr===0&&(k=u(N)/(c(N)*s),tr=o(.02,k),E<tr&&(Lr=0,sr=1-N,B=sr*sr,z=B*sr,er=u(-2/N*l(E/k)),j=N*_(er),vr=l(j),j>5?(lr=vr*vr,Pr=lr*vr,a0=Pr*vr,hr=1/j,p[0]=vr-1,p[1]=(3*sr-2*sr*vr+lr-2*vr+2)*I,p[2]=(24*sr*vr-11*B-24*sr-6*lr+12*vr-12-9*sr*lr+6*B*vr+2*Pr)*M,p[3]=(-12*z*vr+8.04*sr*lr-114*B*vr+(72+36*lr)+(3*a0-72*vr+162)*(sr-168*sr*vr)-(12*Pr+25*z)-(22*sr*Pr+36*B*lr+120*B))*b,p[4]=0,j=j-vr+sr*hr*r(p,hr)):(hr=1/j,lr=vr*vr,Bs=vr-1,_2=vr-sr*hr*Bs,_2<j&&(j-=_2)),O=a(N),cr=1)),v(V-I)<1e-5&&cr===0&&(Lr=0,G=1/N,j=N-P+(.019753086419753086+.007211444248481286*G)*G,O=a(N),cr=1),N<1&&cr===0&&(Lr=0,w?j=n(1/N*(l(V)+a(N+1))):j=n(1/N*(l(1-V)+a(N+1))),O=a(N),cr=1),cr===0)if(Lr=1,G=1/N,hr=i(2*V),er=c2*hr/u(N*I),hr<q)er+=(h(er)+(y(er)+L(er)*G)*G)*G,j=N*_(er),$2=er,Ws=-u(N/m)*n(-I*N*$2*$2)/c(N),F=1/Ws;else return g("Warning: Overflow problems in one or more steps of the computation."),NaN;return cr<2&&(l2=$(j,N,Lr,T,E,O,F,w)),l2}return fv=R,fv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ov,A7;function Wq(){if(A7)return ov;A7=1;var e=X(),r=_0(),a=ar(),i=kq();function t(u,v,n){return e(u)||e(v)?NaN:v<r?NaN:u>1||u<0?NaN:n===!0?u===0?a:u===1?0:i(v,1-u,u):u===0?0:u===1?a:i(v,u,1-u)}return ov=t,ov}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lv,M7;function Bq(){if(M7)return lv;M7=1;var e=Wq();return lv=e,lv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sv,P7;function Dq(){if(P7)return sv;P7=1;var e=5e-324;return sv=e,sv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var cv,S7;function Uq(){if(S7)return cv;S7=1;var e=Bq(),r=x(),a=J(),i=Dq(),t=Ol(),u=Cl();function v(n,o,f,l){var s,q,m,$,_,c,h,y,L,g,I,P,A,S,M,b,d,p,R,N,T,E,H,F,O,w,V,G,D,K;return f<l?_=e(f,o,!0):_=e(l,o,!1),_/=n,S=o/n,G=a(1+S),p=G*G,R=p*G,N=p*p,T=R*p,E=R*R,H=N*R,F=N*N,O=T*N,h=T*T,V=_-S,M=V*V,b=M*V,d=M*M,w=G+1,y=w*w,L=w*y,g=y*y,I=(G+2)*(G-1)/(3*G),I+=(R+9*p+21*G+5)*V/(36*p*w),I-=(N-13*R+69*p+167*G+46)*M/(1620*y*R),I-=(7*T+21*N+70*R+26*p-93*G-31)*b/(6480*L*N),I-=(75*E+202*T+188*N-888*R-1345*p+118*G+138)*d/(272160*g*T),P=(28*N+131*R+402*p+581*G+208)*(G-1)/(1620*w*R),P-=(35*E-154*T-623*N-1636*R-3983*p-3514*G-925)*V/(12960*y*N),P-=(2132*H+7915*E+16821*T+35066*N+87490*R+141183*p+95993*G+21640)*M/(816480*T*L),P-=(11053*F+53308*H+117010*E+163924*T+116188*N-258428*R-677042*p-481940*G-105497)*b/(14696640*g*E),A=-((3592*H+8375*E-1323*T-29198*N-89578*R-154413*p-116063*G-29632)*(G-1))/(816480*T*y),A-=(442043*O+2054169*F+3803094*H+3470754*E+2141568*T-2393568*N-19904934*R-34714674*p-23128299*G-5253353)*V/(146966400*E*L),A-=(116932*h+819281*O+2378172*F+4341330*H+6806004*E+10622748*T+18739500*N+30651894*R+30869976*p+15431867*G+2919016)*M/(146966400*g*H),c=_+I/n+P/(n*n)+A/(n*n*n),c<=0&&(c=i),D=c-S*r(c)+(1+S)*r(1+S)-S,s=1/(1+S),m=c<S?s:0,$=c<S?1:s,K=(m+$)/2,q=t(D,S),u(q,K,m,$,32,100)}return cv=v,cv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/tools/roots.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var _v,E7;function Xq(){if(E7)return _v;E7=1;var e=Z(),r=Wr(),a=$0(),i=Fr(),t=Or();function u(v,n,o,f,l,s){var q,m,$,_,c,h,y,L,g,I,P,A,S,M,b,d;M=0,m=!1,h=n,c=r(1,1-l),g=i(1e7*n,1e7),y=0,$=g,_=g,L=s;do{if(y=M,_=$,$=g,S=v(h),M=S[0],b=S[1],d=S[2],L-=1,M===0)break;if(b===0?(y===0&&(h===o?n=f:n=o,y=v(n),g=n-h),a(y)*a(M)<0?g<0?g=(h-o)/2:g=(h-f)/2:g<0?g=(h-f)/2:g=(h-o)/2):d===0?g=M/b:(I=2*M,A=2*b-M*(d/b),e(A)<1&&e(I)>=e(A)*t?g=M/b:g=I/A,g*b/M<0&&(g=M/b,e(g)>2*e(n)&&(g=(g<0?-1:1)*2*e(n)))),q=e(g/_),q>.8&&q<2&&(g=g>0?(h-o)/2:(h-f)/2,e(g)>h&&(g=a(g)*h),_=g*3),n=h,h-=g,h<o){if(e(o)<1&&e(h)>1&&t/e(h)<e(o)?P=1e3:P=h/o,e(P)<1&&(P=1/P),!m&&P>0&&P<3)g=.99*(n-o),h=n-g,m=!0;else if(g=(n-o)/2,h=n-g,h===o||h===f)break}else if(h>f){if(e(f)<1&&e(h)>1&&t/e(h)<e(f)?P=1e3:P=h/f,e(P)<1&&(P=1/P),!m&&P>0&&P<3)g=.99*(n-f),h=n-g,m=!0;else if(g=(n-f)/2,h=n-g,h===o||h===f)break}g>0?f=n:o=n}while(L&&e(h*c)<e(g));return h}return _v=u,_v}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var $v,w7;function Vq(){if(w7)return $v;w7=1;var e=X5().assign,r=Z(),a=Or(),i=wr();function t(u,v,n,o){return f;function f(l){var s,q,m,$,_;return _=1-l,s=[0,0],e(l,u,v,!0,o,s,1,0),$=s[0]-n,q=s[1],o&&(q=-q),_===0&&(_=i*64),l===0&&(l=i*64),m=q*(-(_*u)+(v-2)*l+1),r(m)<_*l*a&&(m/=_*l),o&&(m=-m),q===0&&(q=(o?-1:1)*i*64),[$,q,m]}}return $v=t,$v}var qv,F7;function Kq(){if(F7)return qv;F7=1;var e=Mr(),r=xr(),a=Cr(),i=$r(),t=ma(),u=v0(),v=J(),n=Z(),o=ir(),f=nr(),l=Zr(),s=Fr(),q=Nr(),m=x(),$=wr(),_=Wi(),c=yr(),h=rq(),y=eq(),L=mq(),g=Uq(),I=Xq(),P=Vq(),A=32,S=1e3,M=[0,0,0,0,0];function b(d,p,R,N){var T,E,H,F,O,w,V,G,D,K,Y,C,W,k,tr,rr,U,Q,ur,er,Vr,dr,j,gr,lr,Pr,a0,B,z;if(E=!1,N===0)return[1,0];if(R===0)return[0,1];if(d===1){if(p===1)return[R,1-R];C=p,p=d,d=C,C=N,N=R,R=C,E=!0}if(B=0,F=0,w=1,d===.5){if(p===.5)return B=l(R*_),B*=B,z=l(N*_),z*=z,[B,z];p>.5&&(C=p,p=d,d=C,C=N,N=R,R=C,E=!E)}if(p===.5&&d>=.5&&R!==1)Vr={},B=h(d,R,Vr),z=Vr.value;else{if(p===1)return R<N?d>1?(B=f(R,1/d),z=-a(m(R)/d)):(B=f(R,1/d),z=1-B):(B=o(i(-N)/d),z=-a(i(-N)/d)),E&&(C=z,z=B,B=C),[B,z];if(d+p>5)R>.5&&(C=p,p=d,d=C,C=N,N=R,R=C,E=!E),D=q(d,p),G=s(d,p),v(D)>G-D&&D>5?(B=y(d,p,R),z=1-B):(lr=d+p,O=t(v(d/lr)),H=D/lr,H>=.2&&H<=.8&&lr>=10?(Y=f(R,1/d),Y<.0025&&d+p<200?B=Y*f(d*u(d,p),1/d):B=L(R,lr,O),z=1-B):(d<p&&(C=p,p=d,d=C,C=N,N=R,R=C,E=!E),K=0,p<2&&(K=u(d,p)),K===0?z=1:(z=f(p*N*K,1/p),B=1-z)),z>1e-5&&(B=g(d,p,R,N),z=1-B));else if(d<1&&p<1){if(er=(1-d)/(2-d-p),rr=r(er,d,p)-R,n(rr)/R<c*3)return E?[1-er,er]:[er,1-er];rr<0&&(C=p,p=d,d=C,C=N,N=R,R=C,E=!E,er=1-er),ur=f(d*R*u(d,p),1/d),B=ur/(1+ur),z=1/(1+ur),B>er&&(B=er),w=er}else d>1&&p>1?(er=(d-1)/(d+p-2),W=(p-1)/(d+p-2),Q=r(er,d,p)-R,Q<0&&(C=p,p=d,d=C,C=N,N=R,R=C,C=W,W=er,er=C,E=!E),U=m(R*d*u(d,p))/d,B=o(U),z=B<.9?1-B:-a(U),p<d&&B<.2&&(k=d-1,tr=p-1,dr=d*d,j=d*dr,gr=p*p,M[0]=0,M[1]=1,M[2]=tr/k,k*=k,M[3]=tr*(3*d*p+5*p+dr-d-4)/(2*(d+2)*k),k*=d+1,M[4]=tr*(33*d*gr+31*gr+8*dr*gr-30*d*p-47*p+11*dr*p+6*j*p+18+4*d-j+dr*dr-10*dr),M[4]/=3*(d+3)*(d+2)*k,B=e(M,B)),B>er&&(B=er),w=er):(p<d&&(C=p,p=d,d=C,C=N,N=R,R=C,E=!E),f(R,1/d)<.5?(B=f(R*d*u(d,p),1/d),B===0&&(B=$),z=1-B):(z=f(1-f(R,p*u(d,p)),1/p),z===0&&(z=$),B=1-z))}return B>.5&&(C=p,p=d,d=C,C=N,N=R,R=C,C=z,z=B,B=C,E=!E,Pr=1-w,a0=1-F,F=Pr,w=a0),F===0&&(E?(F=c,B<F&&(B=F)):F=$,B<F&&(B=F)),T=A,B<1e-50&&(d<1||p<1)&&(T*=3,T/=2),V=P(d,p,R<N?R:N,R>=N),B=I(V,B,F,w,T,S),B===F&&(B=0),E?[1-B,B]:[B,1-B]}return qv=b,qv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mv,O7;function dv(){if(O7)return mv;O7=1;var e=Kq();return mv=e,mv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hv,T7;function Qq(){if(T7)return hv;T7=1;var e=X(),r=dv();function a(i,t,u,v){return e(i)||e(t)||e(u)?NaN:t<=0||u<=0?NaN:i<0||i>1?NaN:v?r(t,u,1-i,i)[0]:r(t,u,i,1-i)[0]}return hv=a,hv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pv,H7;function G7(){if(H7)return pv;H7=1;var e=Qq();return pv=e,pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yv,C7;function Yq(){if(C7)return yv;C7=1;var e=G7(),r=X();function a(i,t,u){return r(i)||r(t)||r(u)||t<=0||u<=0||i<0||i>1?NaN:e(i,t,u)}return yv=a,yv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rv,k7;function Jq(){if(k7)return Rv;k7=1;var e=qr(),r=G7(),a=X();function i(t,u){if(a(t)||a(u)||t<=0||u<=0)return e(NaN);return v;function v(n){return a(n)||n<0||n>1?NaN:r(n,t,u)}}return Rv=i,Rv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bv,W7;function Zq(){if(W7)return bv;W7=1;var e=fr(),r=Yq(),a=Jq();return e(r,"factory",a),bv=r,bv}var jq=Zq(),zq=br(jq);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gv,B7;function xq(){if(B7)return gv;B7=1;var e=l0(),r=J(),a=X();function i(t,u,v){var n,o;return a(t)||a(u)||a(v)||v<0?NaN:v===0?t<u?0:1:(n=v*r(2),o=t-u,.5*e(-o/n))}return gv=i,gv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lv,D7;function rm(){if(D7)return Lv;D7=1;var e=X();function r(a,i){return e(a)||e(i)?NaN:a<i?0:1}return Lv=r,Lv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nv,U7;function em(){if(U7)return Nv;U7=1;var e=qr(),r=X();function a(i){if(r(i))return e(NaN);return t;function t(u){return r(u)?NaN:u<i?0:1}}return Nv=a,Nv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iv,X7;function am(){if(X7)return Iv;X7=1;var e=fr(),r=rm(),a=em();return e(r,"factory",a),Iv=r,Iv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Av,V7;function im(){if(V7)return Av;V7=1;var e=qr(),r=am().factory,a=X(),i=J(),t=l0();function u(v,n){var o;if(a(v)||a(n)||n<0)return e(NaN);if(n===0)return r(v);return o=n*i(2),f;function f(l){var s;return a(l)?NaN:(s=l-v,.5*t(-s/o))}}return Av=u,Av}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mv,K7;function nm(){if(K7)return Mv;K7=1;var e=fr(),r=xq(),a=im();return e(r,"factory",a),Mv=r,Mv}var tm=nm(),um=br(tm);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pv,Q7;function vm(){if(Q7)return Pv;Q7=1;var e=ir(),r=nr(),a=J(),i=s0(),t=ar(),u=X();function v(n,o,f){var l,s,q;return u(n)||u(o)||u(f)||f<0?NaN:f===0?n===o?t:0:(l=r(f,2),s=1/a(l*i),q=-1/(2*l),s*e(q*r(n-o,2)))}return Pv=v,Pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sv,Y7;function fm(){if(Y7)return Sv;Y7=1;var e=ar(),r=X();function a(i,t){return r(i)||r(t)?NaN:i===t?e:0}return Sv=a,Sv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ev,J7;function om(){if(J7)return Ev;J7=1;var e=qr(),r=ar(),a=X();function i(t){if(a(t))return e(NaN);return u;function u(v){return a(v)?NaN:v===t?r:0}}return Ev=i,Ev}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wv,Z7;function lm(){if(Z7)return wv;Z7=1;var e=fr(),r=fm(),a=om();return e(r,"factory",a),wv=r,wv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fv,j7;function sm(){if(j7)return Fv;j7=1;var e=qr(),r=lm().factory,a=X(),i=J(),t=ir(),u=nr(),v=s0();function n(o,f){var l,s,q;if(a(o)||a(f)||f<0)return e(NaN);if(f===0)return r(o);return l=u(f,2),s=1/i(l*v),q=-1/(2*l),m;function m($){return a($)?NaN:s*t(q*u($-o,2))}}return Fv=n,Fv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ov,z7;function cm(){if(z7)return Ov;z7=1;var e=fr(),r=vm(),a=sm();return e(r,"factory",a),Ov=r,Ov}var _m=cm(),$m=br(_m);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tv,x7;function qm(){if(x7)return Tv;x7=1;function e(r){var a,i,t;return r===0?-.0005087819496582806:(r<0?a=-r:a=r,a<=1?(i=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),t=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,i=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),t=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),i/t)}return Tv=e,Tv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hv,rs;function mm(){if(rs)return Hv;rs=1;function e(r){var a,i,t;return r===0?-.20243350835593876:(r<0?a=-r:a=r,a<=1?(i=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),t=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,i=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),t=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),i/t)}return Hv=e,Hv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gv,es;function dm(){if(es)return Gv;es=1;function e(r){var a,i,t;return r===0?-.1311027816799519:(r<0?a=-r:a=r,a<=1?(i=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),t=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,i=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),t=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),i/t)}return Gv=e,Gv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cv,as;function hm(){if(as)return Cv;as=1;function e(r){var a,i,t;return r===0?-.0350353787183178:(r<0?a=-r:a=r,a<=1?(i=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),t=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,i=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),t=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),i/t)}return Cv=e,Cv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kv,is;function pm(){if(is)return kv;is=1;function e(r){var a,i,t;return r===0?-.016743100507663373:(r<0?a=-r:a=r,a<=1?(i=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),t=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,i=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),t=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),i/t)}return kv=e,kv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_48_0/boost/math/special_functions/detail/erf_inv.hpp}. This implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Wv,ns;function ym(){if(ns)return Wv;ns=1;var e=X(),r=J(),a=x(),i=ar(),t=or(),u=qm(),v=mm(),n=dm(),o=hm(),f=pm(),l=.08913147449493408,s=2.249481201171875,q=.807220458984375,m=.9399557113647461,$=.9836282730102539;function _(c){var h,y,L,g,I,P;return e(c)?NaN:c===1?i:c===-1?t:c===0?c:c>1||c<-1?NaN:(c<0?(h=-1,y=-c):(h=1,y=c),g=1-y,y<=.5?(I=y*(y+10),P=u(y),h*(I*l+I*P)):g>=.25?(I=r(-2*a(g)),g-=.25,P=v(g),h*(I/(s+P))):(g=r(-a(g)),g<3?(L=g-1.125,P=n(L),h*(q*g+P*g)):g<6?(L=g-3,P=o(L),h*(m*g+P*g)):(L=g-6,P=f(L),h*($*g+P*g))))}return Wv=_,Wv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bv,ts;function us(){if(ts)return Bv;ts=1;var e=ym();return Bv=e,Bv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dv,vs;function Rm(){if(vs)return Dv;vs=1;var e=us(),r=X(),a=J();function i(t,u,v){var n,o;return r(u)||r(v)||r(t)||v<0||t<0||t>1?NaN:v===0?u:(n=u,o=v*a(2),n+o*e(2*t-1))}return Dv=i,Dv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uv,fs;function bm(){if(fs)return Uv;fs=1;var e=X();function r(a,i){return e(a)||a<0||a>1?NaN:i}return Uv=r,Uv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xv,os;function gm(){if(os)return Xv;os=1;var e=qr(),r=X();function a(i){if(r(i))return e(NaN);return t;function t(u){return r(u)||u<0||u>1?NaN:i}}return Xv=a,Xv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vv,ls;function Lm(){if(ls)return Vv;ls=1;var e=fr(),r=bm(),a=gm();return e(r,"factory",a),Vv=r,Vv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kv,ss;function Nm(){if(ss)return Kv;ss=1;var e=qr(),r=Lm().factory,a=us(),i=X(),t=J();function u(v,n){var o,f;if(i(v)||i(n)||n<0)return e(NaN);return n===0&&r(v),o=v,f=n*t(2),l;function l(s){return i(s)||s<0||s>1?NaN:o+f*a(2*s-1)}}return Kv=u,Kv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qv,cs;function Im(){if(cs)return Qv;cs=1;var e=fr(),r=Rm(),a=Nm();return e(r,"factory",a),Qv=r,Qv}var Am=Im(),Mm=br(Am);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yv,_s;function Pm(){if(_s)return Yv;_s=1;var e=xr(),r=X(),a=nr();function i(t,u){var v,n,o;return r(t)||r(u)||u<=0?NaN:t===0?.5:(v=a(t,2),u>2*v?(o=v/(u+v),n=e(o,.5,u/2,!0,!0)/2):(o=u/(u+v),n=e(o,u/2,.5,!0,!1)/2),t>0?1-n:n)}return Yv=i,Yv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jv,$s;function Sm(){if($s)return Jv;$s=1;var e=qr(),r=xr(),a=X(),i=nr();function t(u){if(a(u)||u<=0)return e(NaN);return v;function v(n){var o,f,l;return a(n)?NaN:n===0?.5:(o=i(n,2),u>2*o?(l=o/(u+o),f=r(l,.5,u/2,!0,!0)/2):(l=u/(u+o),f=r(l,u/2,.5,!0,!1)/2),n>0?1-f:f)}}return Jv=t,Jv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zv,qs;function Em(){if(qs)return Zv;qs=1;var e=fr(),r=Pm(),a=Sm();return e(r,"factory",a),Zv=r,Zv}var wm=Em(),Fm=br(wm);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jv,ms;function Om(){if(ms)return jv;ms=1;var e=X(),r=v0(),a=J(),i=nr();function t(u,v){var n;return e(u)||e(v)||v<=0?NaN:(n=a(v)*r(v/2,.5),i(v/(v+i(u,2)),(1+v)/2)/n)}return jv=t,jv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zv,ds;function Tm(){if(ds)return zv;ds=1;var e=qr(),r=X(),a=v0(),i=J(),t=nr();function u(v){var n,o;if(r(v)||v<=0)return e(NaN);return o=i(v)*a(v/2,.5),n=(1+v)/2,f;function f(l){return r(l)?NaN:t(v/(v+t(l,2)),n)/o}}return zv=u,zv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xv,hs;function Hm(){if(hs)return xv;hs=1;var e=fr(),r=Om(),a=Tm();return e(r,"factory",a),xv=r,xv}var Gm=Hm(),Cm=br(Gm);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r2,ps;function km(){if(ps)return r2;ps=1;var e=dv(),r=X(),a=$0(),i=J();function t(u,v){var n,o;return r(v)||r(u)||v<=0||u<0||u>1?NaN:(n=u>.5?1-u:u,o=e(v/2,.5,2*n,1-2*n),a(u-.5)*i(v*o[1]/o[0]))}return r2=t,r2}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e2,ys;function Wm(){if(ys)return e2;ys=1;var e=qr(),r=dv(),a=X(),i=$0(),t=J();function u(v){if(a(v)||v<=0)return e(NaN);return n;function n(o){var f,l;return a(o)||o<0||o>1?NaN:(f=o>.5?1-o:o,l=r(v/2,.5,2*f,1-2*f),i(o-.5)*t(v*l[1]/l[0]))}}return e2=u,e2}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a2,Rs;function Bm(){if(Rs)return a2;Rs=1;var e=fr(),r=km(),a=Wm();return e(r,"factory",a),a2=r,a2}var Dm=Bm(),Um=br(Dm);const bs=1e-9,Xm=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,Vm=/^\s*([a-z][a-z-]*)\s*\((.*)\)\s*$/;function Km(e){const[r,a,i]=e;return r<i?r<=a&&a<=i?null:`requires lo <= peak <= hi, got lo=${r}, peak=${a}, hi=${i}`:`requires lo < hi, got lo=${r}, hi=${i}`}function Qm(e){const[r,a]=e;return r<a?null:`requires lo < hi, got lo=${r}, hi=${a}`}function Ym(e){const[r,a]=e;return r>0&&a>0?null:`requires a > 0 and b > 0, got a=${r}, b=${a}`}function gs(e){const r=e[1];return r>0?null:`requires sigma > 0, got sigma=${r}`}function Jm(e){const[r,a]=e;return 0<r&&r<a?null:`requires 0 < lo < hi, got lo=${r}, hi=${a}`}function Ls(e){const[,r,a]=e;return r<=0?`requires sigma > 0, got sigma=${r}`:a<=0?`requires df > 0, got df=${a}`:null}function Ns(e,r){const a=r-e;return{cdf:i=>i<=e?0:i>=r?1:(i-e)/a,ppf:i=>e+i*a,pdf:i=>i>=e&&i<=r?1/a:0}}function Zm(e,r,a){const i=a-e,t=(r-e)/i;return{cdf:u=>u<=e?0:u>=a?1:u<=r?(u-e)*(u-e)/(i*(r-e)):1-(a-u)*(a-u)/(i*(a-r)),ppf:u=>u<t?e+Math.sqrt(u*i*(r-e)):a-Math.sqrt((1-u)*i*(a-r)),pdf:u=>u<e||u>a?0:u===r?2/i:u<r?2*(u-e)/(i*(r-e)):2*(a-u)/(i*(a-r))}}function Is(e,r){return{cdf:a=>um(a,e,r),ppf:a=>Mm(a,e,r),pdf:a=>$m(a,e,r)}}function As(e,r,a){return{cdf:i=>Fm((i-e)/r,a),ppf:i=>e+r*Um(i,a),pdf:i=>Cm((i-e)/r,a)/r}}function jm(e,r){return{cdf:a=>L$(a,e,r),ppf:a=>zq(a,e,r),pdf:a=>w$(a,e,r)}}const e0={tri:{signature:"tri(lo, peak, hi)",note:"triangular",nParams:3,check:Km,build:e=>({latent:Zm(e[0],e[1],e[2]),logX:!1})},uniform:{signature:"uniform(lo, hi)",note:"uniform",nParams:2,check:Qm,build:e=>({latent:Ns(e[0],e[1]),logX:!1})},beta:{signature:"beta(a, b)",note:"Beta on [0, 1]; a, b > 0",nParams:2,check:Ym,build:e=>({latent:jm(e[0],e[1]),logX:!1})},normal:{signature:"normal(mu, sigma)",note:"normal; sigma > 0",nParams:2,check:gs,build:e=>({latent:Is(e[0],e[1]),logX:!1})},lognormal:{signature:"lognormal(mu, sigma)",note:"mu/sigma are mean/sd of log(X); sigma > 0",nParams:2,check:gs,build:e=>({latent:Is(e[0],e[1]),logX:!0})},loguniform:{signature:"loguniform(lo, hi)",note:"uniform in log space; 0 < lo < hi",nParams:2,check:Jm,build:e=>({latent:Ns(Math.log(e[0]),Math.log(e[1])),logX:!0})},t:{signature:"t(mu, sigma, df)",note:"location-scale Student-t; sigma > 0, df > 0",nParams:3,check:Ls,build:e=>({latent:As(e[0],e[1],e[2]),logX:!1})},logt:{signature:"logt(mu, sigma, df)",note:"exp of location-scale Student-t; log-space params like lognormal",nParams:3,check:Ls,build:e=>({latent:As(e[0],e[1],e[2]),logX:!0})}},zm=["normal","lognormal","t","logt"];function xm(e){const[r,a]=e;return r<a?null:`requires lo < hi in the truncation window, got lo=${r}, hi=${a}`}function rd(e,r){const a=r.signature.split("(",2)[1].slice(0,-1);return{signature:`${e}-trunc(${a}, lo, hi)`,note:`${r.note}; explicitly truncated to [lo, hi]`,nParams:r.nParams+2,check:i=>r.check(i.slice(0,r.nParams))??xm(i.slice(r.nParams)),build:i=>r.build(i),hasTruncWindow:!0}}for(const e of zm)e0[`${e}-trunc`]=rd(e,e0[e]);function Ms(e){const r=Vm.exec(e);if(!r)throw new Error(`malformed family spec ${JSON.stringify(e)}: expected "family(num, num, ...)"`);const a=r[1],i=r[2],t=e0[a];if(t===void 0)throw new Error(`unknown distribution family ${JSON.stringify(a)}; available: `+Object.values(e0).map(o=>o.signature).join(", "));const u=i.split(",").map(o=>o.trim());for(const o of u)if(!Xm.test(o))throw new Error(`family spec ${JSON.stringify(e.trim())}: bad numeric argument ${JSON.stringify(o)}`);const v=u.map(Number);if(v.length!==t.nParams)throw new Error(`${a} takes ${t.nParams} arguments as ${t.signature}, got ${v.length}`);const n=t.check(v);if(n)throw new Error(`${e.trim()}: ${t.signature} ${n}`);return t.hasTruncWindow?{family:a,params:v.slice(0,-2),text:e.trim(),truncWindow:[v[v.length-2],v[v.length-1]]}:{family:a,params:v,text:e.trim(),truncWindow:null}}function mr(e,...r){const a=r.map(i=>{if(typeof i!="number"||!Number.isFinite(i))throw new Error(`family spec parameter must be a finite number, got ${JSON.stringify(i)}`);return String(i)});return Ms(`${e}(${a.join(", ")})`).text}function Ps(e,r){return r===-1/0?0:r===1/0?1:e.cdf(r)}class ed{constructor(r,a,i,t,u,v,n){this.spec=r,this.latent=a,this.logX=i,this.cdfLo=t,this.mass=u,this.xLo=v,this.xHi=n}inverseCdf(r){const a=this.latent.ppf(this.cdfLo+r*this.mass),i=this.logX?Math.exp(a):a;return Math.min(Math.max(i,this.xLo),this.xHi)}pdf(r){return r<this.xLo||r>this.xHi?0:this.logX?r<=0?0:this.latent.pdf(Math.log(r))/r/this.mass:this.latent.pdf(r)/this.mass}}function ad(e,r,a){const i=e0[e.family];if(i===void 0)throw new Error(`unknown distribution family ${JSON.stringify(e.family)}`);const{latent:t,logX:u}=i.build(e.params);let v=r===null?-1/0:r,n=a===null?1/0:a;e.truncWindow!==null&&(v=Math.max(v,e.truncWindow[0]),n=Math.min(n,e.truncWindow[1]));let o,f;u?(o=v>0?Math.log(v):-1/0,f=n>0?Math.log(n):-1/0):(o=v,f=n);const l=Ps(t,o),q=Ps(t,f)-l;if(q<bs){let m=`the variable's range [${r}, ${a}]`;throw e.truncWindow!==null&&(m+=` ∩ the spec's truncation window [${e.truncWindow[0]}, ${e.truncWindow[1]}]`),new Error(`family spec ${JSON.stringify(e.text)}: essentially no probability mass in ${m} (mass ${q.toExponential(2)} < ${bs})`)}return new ed(e,t,u,l,q,v,n)}const h0="pointmass",id="[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?",nd=new RegExp(`^\\s*${h0}\\s*\\(\\s*(${id})\\s*\\)\\s*$`),td=new RegExp(`^\\s*${h0}\\b`);function ud(e){const r=nd.exec(e);if(r===null)throw new Error(`malformed ${h0} spec ${JSON.stringify(e)}: expected "${h0}(num)"`);return Number(r[1])}function Ss(e){return td.test(e)?ud(e):null}const Es=8,vd=1e-9;function p0(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function i2(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function fd(e,r,a){const i=`lloads.latents[${r}]`;if(!i2(e))return`${i}: expected an object, got ${p0(e)}`;for(const u of["name","description"]){const v=e[u];if(typeof v!="string"||v.trim()==="")return`${i}.${u}: expected a non-empty string, got ${JSON.stringify(v)}`}const t=e.loadings;if(!i2(t))return`${i}.loadings: expected an object, got ${p0(t)}`;if(Object.keys(t).length===0)return`${i}.loadings: empty — name the subjective variables this latent applies to, with 0 for any you considered and declined`;for(const[u,v]of Object.entries(t)){if(!a.has(u))return`${i}.loadings: '${u}' is not one of the subjective variables this jprob samples (${[...a].sort().join(", ")}), so a loading on it would have no effect`;if(typeof v!="number")return`${i}.loadings['${u}']: expected a number, got ${JSON.stringify(v)}`;if(!Number.isFinite(v))return`${i}.loadings['${u}']: ${v} is not finite`;if(v<-1||v>1)return`${i}.loadings['${u}']: ${v} not in [-1, 1]`}return null}function od(e,r,a=[]){if(e==null)return null;if(!i2(e))return`lloads: expected an object, got ${p0(e)}`;const i=Object.keys(e).filter(f=>f!=="latents").sort();if(i.length>0)return`lloads: unexpected key(s) ${JSON.stringify(i)}`;const t=e.latents;if(!Array.isArray(t))return`lloads.latents: expected a list, got ${p0(t)}`;if(t.length>Es)return`lloads.latents: ${t.length} latents exceeds the cap of ${Es}`;const u=new Set(r);for(const[f,l]of t.entries()){const s=fd(l,f,u);if(s!==null)return s}const v=new Map;for(const f of t)for(const[l,s]of Object.entries(f.loadings))v.set(l,(v.get(l)??0)+s**2);for(const[f,l]of[...v.entries()].sort((s,q)=>s[0]<q[0]?-1:1))if(l>1+vd)return`lloads: loading budget exceeded for '${f}' — the sum of squared loadings across latents is ${ws(l)}, over the limit of 1 by ${ws(l-1)}; no residual variance is left for it`;const n=new Set(a),o=[...v.entries()].filter(([f,l])=>l>0&&n.has(f)).map(([f])=>f).sort();return o.length>0?`lloads: ${o.map(f=>`'${f}'`).join(", ")} ${o.length===1?"has":"have"} a point-mass distribution in this response, so a loading on it has no effect; remove the loading or give it a non-degenerate distribution`:null}function ws(e){return String(Number(e.toPrecision(6)))}const ld=1e-15;function sd(e,r){return r.filter(a=>{const i=e[a];if(typeof i=="string")return Ss(i)!==null;if(!Array.isArray(i)||i.length===0)return!1;const t=i[0];return i[i.length-1][0]-t[0]<ld})}function cd(e,r,a,i=null,t=!1){if(!n2(e))return`expected object, got ${y0(e)}`;for(const _ of["point","bounds","sample"]){if(!(_ in e))return`missing required key '${_}'`;if(!n2(e[_]))return`'${_}' must be an object, got ${y0(e[_])}`}const u=e.point,v=e.bounds,n=e.sample,o=new Set(Object.keys(u)),f=new Set(Object.keys(v)),l=new Set(Object.keys(n));if(!t2(f,l))return`bounds/sample key mismatch: bounds=${JSON.stringify([...f].sort())}, sample=${JSON.stringify([...l].sort())}`;if(!t2(o,f))return`parameter name mismatch across dicts: point=${JSON.stringify([...o].sort())}, bounds=${JSON.stringify([...f].sort())}, sample=${JSON.stringify([...l].sort())}`;if(r!==null){const _=_d("point/bounds/sample",o,r);if(_!==null)return _}for(const[_,c]of Object.entries(u)){if(typeof c!="number"||!Number.isFinite(c))return`point['${_}']: expected number, got ${y0(c)}`;const h=(a==null?void 0:a[_])??i0;if(!Kr(h,c))return`point['${_}']: ${c} not in ${Qr(h)}`}for(const[_,c]of Object.entries(v)){if(!Array.isArray(c)||c.length!==2)return`bounds['${_}']: expected [lo, hi] pair`;const[h,y]=c;if(typeof h!="number"||typeof y!="number"||!Number.isFinite(h)||!Number.isFinite(y))return`bounds['${_}']: lo and hi must be numbers`;if(h>y)return`bounds['${_}']: lo=${h} > hi=${y}`;const L=(a==null?void 0:a[_])??i0;if(!Kr(L,h))return`bounds['${_}']: lo=${h} not in ${Qr(L)}`;if(!Kr(L,y))return`bounds['${_}']: hi=${y} not in ${Qr(L)}`}for(const[_,c]of Object.entries(n)){if(typeof c=="string"){const I=Ss(c),P=(a==null?void 0:a[_])??i0;if(I!==null){if(!Kr(P,I))return`sample['${_}']: pointmass value ${I} not in ${Qr(P)}`;continue}try{ad(Ms(c),P.lo,P.hi)}catch(A){return`sample['${_}']: ${A instanceof Error?A.message:String(A)}`}continue}if(!Array.isArray(c))return`sample['${_}']: expected family spec string or array of [x, y] pairs, got ${y0(c)}`;const h=c.length;if(h<2)return`sample['${_}']: need at least 2 [x, y] pairs, got ${h}`;const y=(a==null?void 0:a[_])??i0;let L=!1,g=-1/0;for(let I=0;I<h;I++){const P=c[I];if(!Array.isArray(P)||P.length!==2)return`sample['${_}'][${I}]: expected [x, y] pair, got ${JSON.stringify(P)}`;const[A,S]=P;if(typeof A!="number"||typeof S!="number"||!Number.isFinite(A)||!Number.isFinite(S))return`sample['${_}'][${I}]: x and y must be numbers`;if(!Kr(y,A))return`sample['${_}'][${I}]: x=${A} not in ${Qr(y)}`;if(S<0||S>1)return`sample['${_}'][${I}]: y=${S} not in [0, 1]`;if(A<g)return`sample['${_}'][${I}]: x=${A} not sorted (prev was ${g})`;g=A,Math.abs(S-1)<1e-9&&(L=!0)}if(!L)return`sample['${_}']: no pair has y ≈ 1.0 (need at least one peak)`}const s=e.lloads;if(s==null)return null;const q=i??r??[...l],m=sd(n,q),$=od(s,q,m);return $!==null?$:t&&n2(s)&&Array.isArray(s.latents)&&s.latents.length>0?"lloads: non-empty latent lists are not supported for a jprob with an expectation barrier, because dependence across E[·] has no defined semantics":null}function n2(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function y0(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function t2(e,r){if(e.size!==r.size)return!1;for(const a of e)if(!r.has(a))return!1;return!0}function _d(e,r,a){const i=new Set(a);if(t2(r,i))return null;const t=[...i].filter(n=>!r.has(n)).sort(),u=[...r].filter(n=>!i.has(n)).sort(),v=[];return t.length>0&&v.push(`missing=${JSON.stringify(t)}`),u.length>0&&v.push(`unexpected=${JSON.stringify(u)}`),`${e} parameter name mismatch vs expected: ${v.join(", ")}`}const Fs=["tri","uniform","uni","beta","normal","lognormal","loguniform","t","logt","normal_trunc","lognormal_trunc","t_trunc","logt_trunc","trap","clamp","exp","log","log2","log10","sqrt"];function $d(e,r,a){return mr("tri",e,r,a)}function Os(e,r){return mr("uniform",e,r)}const qd=Os;function md(e,r){return mr("beta",e,r)}function dd(e,r){return mr("normal",e,r)}function hd(e,r){return mr("lognormal",e,r)}function pd(e,r){return mr("loguniform",e,r)}function yd(e,r,a){return mr("t",e,r,a)}function Rd(e,r,a){return mr("logt",e,r,a)}function bd(e,r,a,i){return mr("normal-trunc",e,r,a,i)}function gd(e,r,a,i){return mr("lognormal-trunc",e,r,a,i)}function Ld(e,r,a,i,t){return mr("t-trunc",e,r,a,i,t)}function Nd(e,r,a,i,t){return mr("logt-trunc",e,r,a,i,t)}function Id(e,r,a,i){return[[e,0],[r,1],[a,1],[i,0]]}function Ad(e,r,a){return Math.min(Math.max(e,r),a)}const Ts={tri:$d,uniform:Os,uni:qd,beta:md,normal:dd,lognormal:hd,loguniform:pd,t:yd,logt:Rd,normal_trunc:bd,lognormal_trunc:gd,t_trunc:Ld,logt_trunc:Nd,trap:Id,clamp:Ad,exp:Math.exp,log:Math.log,log2:Math.log2,log10:Math.log10,sqrt:Math.sqrt};{const e=Object.keys(Ts),r=[...Fs],a=e.filter(t=>!r.includes(t)),i=r.filter(t=>!e.includes(t));if(a.length>0||i.length>0)throw new Error(`belief_helpers: HELPER_NAMES ↔ HELPERS drift. Missing from names: ${JSON.stringify(a)}. Missing from bundle: ${JSON.stringify(i)}.`)}const Hs="__belief_helpers",Md=`const { ${Fs.join(", ")} } = ${Hs};
`;function Pd(e){let r;try{r=new Function(...e.cparamNames,Hs,Md+e.source)}catch(t){return{wellformed:[],malformed:[],compileError:Gs(t)}}const a=[],i=[];for(const t of e.combinations){const u=e.cparamNames.map(l=>t[l]);let v;try{v=r(...u,Ts)}catch(l){i.push({cparams:t,error:Gs(l)});continue}const n=cd(v,e.expectedSvars,e.paramRanges,e.formulaSvars??null,e.hasExpectationBarrier??!1);if(n!==null){i.push({cparams:t,error:n});continue}const o=v,f={cparams:t,point:o.point,bounds:o.bounds,sample:o.sample};o.lloads!==void 0&&(f.lloads=o.lloads),a.push(f)}return{wellformed:a,malformed:i}}function Gs(e){return e instanceof Error?`${e.name}: ${e.message}`:String(e)}const Cs=self;Cs.addEventListener("message",e=>{const r=Pd(e.data);Cs.postMessage(r)})})();
