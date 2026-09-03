const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C9S2EzXY.js","assets/form_types-CDdbkj6v.js","assets/index-CWpE2PVT.js","assets/index-Dseb8AkB.js","assets/index-WMjxkd5L.js","assets/index-CTXbJLTF.js","assets/index-DhbvDADw.js","assets/index-BWfTBSGi.js","assets/index-IXKXrGv6.js"])))=>i.map(i=>d[i]);
var _S=Object.defineProperty;var yS=(n,e,r)=>e in n?_S(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r;var Te=(n,e,r)=>yS(n,typeof e!="symbol"?e+"":e,r);import{P as ES,f as q9}from"./form_types-CDdbkj6v.js";import{_ as Ge,s as wS,a as $S,r as Nu}from"./app_bootstrap-CqSdkBBl.js";const Kt={lo:0,hi:1,loClosed:!0,hiClosed:!0};function Gi(n,e){return!(n.lo!==null&&(n.loClosed?e<n.lo:e<=n.lo)||n.hi!==null&&(n.hiClosed?e>n.hi:e>=n.hi))}function Vi(n){const e=n.loClosed&&n.lo!==null?"[":"(",r=n.hiClosed&&n.hi!==null?"]":")";return`${e}${n.lo??"-inf"}, ${n.hi??"inf"}${r}`}const SS={closed_real_interval:[!0,!0],left_open_real_interval:[!1,!0],right_open_real_interval:[!0,!1],open_real_interval:[!1,!1]};function F9(n){var i;const[e,r]=SS[n.type_mathlevel]??[!0,!0],t=((i=n.type_detail)==null?void 0:i.range)??[0,1];return{lo:t[0],hi:t[1],loClosed:e,hiClosed:r}}function hr(n){return n.map(F9)}function O9(n){return Object.fromEntries(n.map(e=>[e.bareName,F9(e.decl)]))}const AS=["aopt:","cparam:"];function Fe(n){for(const e of AS)if(n.startsWith(e))return n.slice(e.length);return n}function Sr(n){return n.startsWith("cparam:")}function Gp(n){return!Sr(n.id)}function Xi(n){return Sr(n.id)}function Oo(n){const e=n[0];if(e===void 0)throw new Error("cparam allowed_values must be a non-empty list");if(typeof e=="boolean")throw new Error(`cparam allowed_values must not contain booleans (got ${e}); a two-valued qualitative switch is an aopt, not a cparam`);return typeof e=="string"?"string":"number"}const Yi="tchoice:";function Ft(n){return n.startsWith(Yi)?n.slice(Yi.length):n}function Ur(n){return n.response_kind==="enum"}function P9(n){return n.response_kind==="real"}const Ki="svar:",_p="estimatorInstruct",LS="flabels_enabled",ev="framing_POVs_enabled";function D9(n){const e=new Set(n),r=[LS,ev].filter(t=>e.has(t));if(r.length>1)throw new Error(`A jprob may declare only one of ${r.join(", ")}; '${ev}' is the deprecated spelling, kept only by jprobs with archived methodical trial results`);return r[0]??null}function x9(n,e){if(!Array.isArray(n)||!n.every(r=>typeof r=="string"))throw new Error(`${e} must be a list of strings, got ${JSON.stringify(n)}`);return[...n]}function B9(n,e){return!n.limit_reporting_to||n.limit_reporting_to.includes(e)}function H9(n,e){if(!Array.isArray(e)||e.length!==3||e[0]!=="eq"||typeof e[1]!="string")throw new Error(`Formula ${n} must have an equality s-expression with a string LHS`);return e[1]}function U9(n){if(n.includes("{")||n.includes("}"))throw new Error(`Unexpected brace in sexpr reference leaf: ${n}`);if(n.startsWith(Ki))return`expr:${n.slice(Ki.length)}`;if(!n.startsWith("expr:"))throw new Error(`Unexpected expression reference ${JSON.stringify(n)}; expected expr:* or svar:*`);return n}function j9(n){return n.startsWith(Ki)?n.slice(Ki.length):n}const nv="ax:";function Ot(n){return n.startsWith(nv)?n.slice(nv.length):n}const rv="form:";function Po(n){return n.startsWith(rv)?n.slice(rv.length):n}const tv="textchunk:",iv="textdefn:";class W9{constructor(e){Te(this,"_data");Te(this,"aid");Te(this,"options");Te(this,"cparam_combo_filter");Te(this,"config");Te(this,"layout");Te(this,"svar_list");Te(this,"svar");Te(this,"tchoice");Te(this,"textchunk");Te(this,"display");Te(this,"isym");Te(this,"ax");Te(this,"expr");Te(this,"form");Te(this,"definedSym");Te(this,"textdefn");Te(this,"framing");Te(this,"srcquote");this._data=e,this.aid=e.aid,this.options=e.options,this.cparam_combo_filter=e.cparam_combo_filter,this.config=e.config,this.layout=e.layout,this.svar_list=e.svar_list,this.svar=e.svar,this.tchoice=e.tchoice??[],this.textchunk=e.textchunk,this.display=e.display,this.isym=e.isym,this.ax=e.ax,this.expr=e.expr,this.form=e.form,this.definedSym=e.definedSym,this.textdefn=e.textdefn,this.framing=e.framing??[],this.srcquote=e.srcquote??[]}_get_data(){return this._data}get_options(){return this.options}get_aopts(){return this.options.filter(Gp)}get_cparams(){return this.options.filter(Xi)}has_cparams(){return this.options.some(Xi)}get_option(e){const r=this.options.find(t=>Fe(t.id)===e);if(!r)throw new Error(`No option named "${e}"`);return r}get_aopt(e){const r=this.get_aopts().find(t=>Fe(t.id)===e);if(!r)throw new Error(`No aopt named "${e}"`);return r}get_cparam(e){const r=this.find_cparam(e);if(!r)throw new Error(`No cparam named "${e}"`);return r}find_cparam(e){return this.get_cparams().find(r=>Fe(r.id)===e)}cparam_value_kind(e){return Oo(this.get_cparam(e).allowed_values)}get_option_bare_names(){return this.options.map(e=>Fe(e.id))}get_aopt_bare_names(){return this.get_aopts().map(e=>Fe(e.id))}get_cparam_bare_names(){return this.get_cparams().map(e=>Fe(e.id))}get_option_ids(){return this.options.map(e=>e.id)}get_aopt_ids(){return this.get_aopts().map(e=>e.id)}get_cparam_ids(){return this.get_cparams().map(e=>e.id)}get_tchoice_decls(){return this.tchoice}get_tchoice_bare_names(){return new Set(this.tchoice.map(e=>Ft(e.id)))}get_tchoice(e){const r=e.startsWith(Yi)?e:`${Yi}${e}`,t=this.tchoice.find(i=>i.id===r);if(t===void 0)throw new Error(`No tchoice named "${e}"`);return t}get_tchoice_default(e){const r=this.get_tchoice(e);if(!Ur(r))throw new Error(`tchoice "${e}" is not an enum kind; it has no default_value`);return r.default_value}get_enum_tchoice_defaults(){const e={};for(const r of this.tchoice)Ur(r)&&(e[Ft(r.id)]=r.default_value);return e}get_textchunks(){return this.textchunk}find_textchunk(e){const r=this.strip_textchunk_prefix(e);return this.textchunk.find(t=>this.strip_textchunk_prefix(t.id)===r)}get_textchunk(e){const r=this.find_textchunk(e);if(!r)throw new Error(`No textchunk named "${e}"`);return r}find_textchunk_defn(e){var r;return(r=this.find_textchunk(e))==null?void 0:r.defn}get_textchunk_defn(e){return this.get_textchunk(e).defn}strip_textchunk_prefix(e){return e.startsWith(tv)?e.slice(tv.length):e}get_textdefn_entries(){return this.textdefn.map(e=>{const r=e.aliases??[];return{bareName:this.strip_textdefn_prefix(e.id),id:e.id,defn:e.defn,aliases:r,displayTerm:r[0]??e.id}})}find_textdefn(e){const r=this.strip_textdefn_prefix(e);return this.textdefn.find(t=>this.strip_textdefn_prefix(t.id)===r)}get_textdefn(e){const r=this.find_textdefn(e);if(!r)throw new Error(`No textdefn named "${e}"`);return r}get_textdefns(){return this.textdefn}strip_textdefn_prefix(e){return e.startsWith(iv)?e.slice(iv.length):e}get_svar_bare_names(){return this.svar_list}svar_decls(){return this.svar}get_svar(e){const r=e.startsWith("svar:")?e:`svar:${e}`,t=this.svar.find(i=>i.id===r);if(t===void 0)throw new Error(`No svar named "${e}"`);return t}get_svar_gloss_defn(e){return this.get_svar(e).defn}svar_entries(){const e=new Map;for(const r of this.svar)e.set(j9(r.id),r);return this.svar_list.map(r=>{const t=e.get(r);if(!t)throw new Error(`svar_list entry "${r}" has no matching svar decl`);return{bareName:r,decl:t}})}has_standard_rendering_framing_notes(){const e=this.standard_rendering_flabels();return this.framing.some(r=>e.has(r.flabel))}has_examples(){return this.isym.some(e=>{var r,t;return(((r=e.pos)==null?void 0:r.length)??0)>0||(((t=e.neg)==null?void 0:t.length)??0)>0})}isym_entries(){return this.isym}get_isym(e){const r=e.startsWith("isym:")?e:`isym:${e}`,t=this.isym.find(i=>i.id===r);if(t===void 0)throw new Error(`No isym named "${e}"`);return t}has_srcquotes(){return this.srcquote.length>0}resolve_srcquotes(e){const r=new Map(this.srcquote.map(t=>[t.id,t]));return e.map(t=>{const i=r.get(t);if(!i)throw new Error(`Unknown srcquote id: ${t}`);return i})}framing_static_anchor_ids(){const e=new Set;for(const r of this.framing)r.static_anchor!==null&&e.add(r.static_anchor);return e}get_axioms(){return this.ax}get_axioms_in_display_section(e){return this.ax.filter(r=>(r.simplifying??!1)===e)}find_ax(e){const r=Ot(e);return this.ax.find(t=>Ot(t.id)===r)}get_ax(e){const r=this.find_ax(e);if(r===void 0)throw new Error(`No axiom named "${e}"`);return r}get_ax_sexpr(e){return this.get_ax(e).sexpr}get_ax_defn(e){return this.get_ax(e).defn}can_consolidate_isym_svar(e){var u,a;const r=e.slice(5),t=this.isym.find(s=>s.id===e);if(!t||t.kind!=="real"||(((u=t.pos)==null?void 0:u.length)??0)>0||(((a=t.neg)==null?void 0:a.length)??0)>0||!this.svar_list.includes(r))return!1;const i=this.svar.find(s=>s.id===`svar:${r}`);if(!i)return!1;const o=this.expr.find(s=>s.id===`expr:${r}`);return!o||o.sexpr!==e?!1:i.defn===""}get_display_ax(e){return this.display.ax[e]}get_display_ax_or_none(e){return this.display.ax[e]??null}get_display_expr(e){return this.display.expr[e]}get_display_form(e){return this.display.form[e]}get_display_form_or_none(e){return this.display.form[e]??null}get_display_definedSym(e){return this.display.definedSym[e]}get_display_definedSym_or_none(e){return this.display.definedSym[e]??null}get_display_expr_keys(){return Object.keys(this.display.expr)}get_display_form_keys(){return Object.keys(this.display.form)}get_fgroups(){const e=this.config.framing;if(e===void 0){if(this.framing.length>0)throw new Error(`${this.aid}: ${this.framing.length} framing note(s) but no config.framing declaring the fgroups their flabels belong to`);return{}}return e.fgroups}fgroup_of_flabel(e){const r=this.get_fgroups();for(const[t,i]of Object.entries(r))if(i.flabels.includes(e))return[t,i];throw new Error(`${this.aid}: framing flabel '${e}' belongs to no declared fgroup (declared: ${Object.keys(r).sort().join(", ")})`)}standard_fgroups_in_order(){return Object.entries(this.get_fgroups()).filter(([,e])=>e.standard_rendering)}standard_rendering_flabels(){const e=new Set;for(const[,r]of this.standard_fgroups_in_order())for(const t of r.flabels)e.add(t);return e}nonstandard_notes(e,r){const t=this.get_fgroups(),i=t[e];if(i===void 0)throw new Error(`${this.aid}: no declared fgroup '${e}' (declared: ${Object.keys(t).sort().join(", ")})`);if(i.standard_rendering)throw new Error(`${this.aid}: fgroup '${e}' is standard-rendering; its notes are placed by get_framing_layout, not bespoke code`);const o=new Set(i.flabels),u=new Set(r);return this.framing.filter(a=>o.has(a.flabel)&&u.has(a.flabel))}get_framing_layout(e){const r=this.standard_rendering_flabels(),t=new Set([...e].filter(l=>r.has(l))),i=new Map(this.framing.map(l=>[l.id,l])),o=new Map,u=l=>{if(o.has(l))return o.get(l)??null;const f=i.get(l);if(!f)throw new Error(`Unknown framing note id: ${l}`);let d=null;if(t.has(f.flabel)){const p=f.framing_target;if(p!==null){const h=u(p);h!==null&&(d={anchor_id:h.anchor_id,depth:h.depth+1,visible_parent_id:p})}d===null&&f.static_anchor!==null&&(d={anchor_id:f.static_anchor,depth:1,visible_parent_id:null})}return o.set(l,d),d};for(const l of this.framing)u(l.id);const a=new Map,s=[],c=new Map;for(const l of this.framing){const f=o.get(l.id);f!=null&&a.set(l.id,{depth:f.depth,note:l,children:[]})}for(const l of this.framing){const f=o.get(l.id);if(f==null)continue;const d=a.get(l.id);if(f.visible_parent_id!==null)a.get(f.visible_parent_id).children.push(d);else if(f.anchor_id==="root")s.push(d);else{const p=c.get(f.anchor_id)??[];p.push(d),c.set(f.anchor_id,p)}}return{root_section:{static_anchor_id:"root",layout_nodes:s},nonroot_anchor_sections:new Map(Array.from(c.entries(),([l,f])=>[l,{static_anchor_id:l,layout_nodes:f}]))}}}function Vp(n){return n.get_textdefn_entries().map(e=>{const r=`def-${e.bareName.toLowerCase()}`;return{...e,anchorId:r,anchor:`#${r}`}})}const IS=["options","config","layout","svar","textchunk","display","isym","ax","expr","form","definedSym","textdefn"];function kS(n){if(typeof n!="object"||n===null)throw new Error("Jprob template data must be a non-null object");const e=n,r=IS.filter(t=>!(t in e));if(r.length>0)throw new Error(`Jprob template data missing required keys: ${r.join(", ")}`);return new W9(n)}function RS(n){return kS(n)}const Ji="data-popover-target";function CS(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function ov(n,e){const r=Object.keys(n).sort(),t=[...e].sort();return r.length===t.length&&r.every((i,o)=>i===t[o])}function G9(n){return encodeURIComponent(JSON.stringify(n))}function uv(n){let e;try{e=JSON.parse(decodeURIComponent(n))}catch(r){throw new Error("Malformed popover target encoding.",{cause:r})}if(!CS(e)||typeof e.kind!="string")throw new Error("Popover target must be an object with a recognized kind.");if(e.kind==="entity"){if(!ov(e,["kind","targetId"])||typeof e.targetId!="string"||e.targetId.length===0)throw new Error("Malformed entity popover target.");return{kind:"entity",targetId:e.targetId}}if(e.kind==="sourcequote"){if(!ov(e,["kind","sourcequoteIds"])||!Array.isArray(e.sourcequoteIds)||e.sourcequoteIds.length===0||!e.sourcequoteIds.every(r=>typeof r=="string"&&r.startsWith("srcquote:")&&r.length>9))throw new Error("Malformed source-quote popover target.");return{kind:"sourcequote",sourcequoteIds:e.sourcequoteIds}}throw new Error(`Unknown popover target kind: ${e.kind}`)}function K(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function se(n){return n.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const V9="[",X9="]",Y9="{",K9="}",MS=new RegExp("(?<!\\\\)\\{([^\\}]+)\\}","g"),zi=new RegExp("(?<!\\\\)\\{((?:expr|form):[^\\}]+)\\}","g"),NS=new RegExp("(?<!\\\\)\\[([^\\]]+?)\\|(\\w[\\w:-]*)\\](?!\\((?:https?:\\/\\/|#|mailto:))","g"),TS=new RegExp("(?<!\\\\)\\[([^\\]|]+)\\](?!\\((?:https?:\\/\\/|#|mailto:))","g"),J9=new RegExp("(?<!\\\\)\\[([^\\]]+)\\]\\(((?:https?:\\/\\/|#|mailto:)[^)\\s]*)\\)","g"),av=/‹\+(.*?)\+›/g,qS=new RegExp("(?<!\\\\)\\[([^\\]|]*?)(?:\\|[^\\]]*?)?\\](?!\\((?:https?:\\/\\/|#|mailto:))","g"),FS=new RegExp("(?<!\\\\)\\{[^\\}]*\\}","g"),OS=/\\([\{\}])/g,PS=/\\([\[\]])/g,yp="symbol-ref-name",Xp="ax-",Yp="svar-";function z9(n){return n.form.filter(e=>!e.hide&&n.get_display_form(e.id)).map(e=>e.id)}function Kp(n,e={}){const r=new Map,t=e.symbolMnames??!1,i=DS(n);for(const o of n.isym_entries()){const u=o.id.startsWith("isym:")?o.id:`isym:${o.id}`,a=u.startsWith("isym:")?u.slice(5):u,s=`#isym-${a}`,c={bareId:a,mname:i.get(u)??a},l=i.get(u);l&&(r.set(l,{anchor:s,displayText:l}),r.set(`${a}:long`,{anchor:s,displayText:l}),r.set(`isym:${a}:long`,{anchor:s,displayText:l})),r.set(a,{anchor:s,displayText:$i(c,t),symbolName:c}),r.set(u,{anchor:s,displayText:$i(c,t),symbolName:c})}for(const o of Vp(n))for(const u of o.aliases)r.set(u,{anchor:o.anchor,displayText:u});for(const o of n.isym_entries()){const u=o.id.replace(/^isym:/,"");let a=0;for(const s of["pos","neg"])for(const c of o[s]??[])a++,c.alias&&r.set(c.alias,{anchor:`#ex-${c.alias}`,displayText:`${u} example ${a}`})}for(const o of n.get_axioms()){if(!n.get_display_ax(o.id))continue;const a=Ot(o.id);r.set(o.id,{anchor:`#${Xp}${a}`,displayText:a})}for(const o of z9(n)){if(r.has(o))continue;const u=Po(o);r.set(o,{anchor:`#form-${u}`,displayText:u})}for(const o of n.get_options()){const u=Fe(o.id),a=`#opt-${u}`,s={bareId:u,mname:o.longname??u},c=$i(s,t),l={anchor:a,displayText:c,symbolName:s};r.has(o.id)||r.set(o.id,l),r.has(u)||r.set(u,l);const f=`${u}:short`;r.has(f)||r.set(f,{anchor:a,displayText:u})}for(const o of n.get_tchoice_decls()){const u=Ft(o.id),a=`#tchoice-${u}`,s={bareId:u,mname:o.longname??u};r.has(o.id)||r.set(o.id,{anchor:a,displayText:$i(s,t),symbolName:s})}for(const o of n.get_svar_bare_names()){const u=`svar:${o}`;r.has(u)||r.set(u,{anchor:`#${Yp}${o}`,displayText:o})}for(const o of n.definedSym){const u=o.id.startsWith("definedSym:")?o.id.slice(11):o.id,s={anchor:`#defsym-${u}`,displayText:u};r.has(u)||r.set(u,s),r.has(o.id)||r.set(o.id,s)}return r}function DS(n){const e=new Map;for(const r of n.isym_entries()){if(!r.longname)continue;const t=r.id.startsWith("isym:")?r.id:`isym:${r.id}`;e.set(t,r.longname)}return e}function $i(n,e){return e?n.mname:n.bareId}const xS={point:"=",sample:"~",bounds:"∈"};function Q9(n){return xS[n]}function Jt(n){return n.svar_entries().map(({bareName:e})=>`{expr:${e}}`)}function sv(n,e,r){const t=Z9(r),i=se(G9({kind:"entity",targetId:e}));return`<button type="button" class="ref-popover${t.classSuffix}" ${Ji}="${i}" aria-expanded="false"${t.dataAttrs}>${n}</button>`}function BS(n,e,r){const t=Z9(r);return`<a href="${n}"${t.classAttr}${t.dataAttrs}>${e}</a>`}function Z9(n){if(!n)return{classAttr:"",classSuffix:"",dataAttrs:""};const e=` data-bareid="${se(n.bareId)}" data-mname="${se(n.mname)}"`;return{classAttr:` class="${yp}"`,classSuffix:` ${yp}`,dataAttrs:e}}function HS(n,e,r,t){const i=(r==null?void 0:r.popoverAllRefs)??!1;let o=n;return o=o.replace(NS,(u,a,s)=>{const c=e.get(s);return i&&c?sv(a,c.anchor):`<a href="${c?c.anchor:`#isym-${s}`}">${a}</a>`}),o=o.replace(TS,(u,a)=>{const s=e.get(a);return s?i?sv(s.displayText,s.anchor,s.symbolName):BS(s.anchor,s.displayText,s.symbolName):(t==null||t.add(a),`${V9}${a}${X9}`)}),o}const US=10;function jS(n,e,r,t){let i=n;for(let o=0;o<US;o++){const u=HS(i,e,r,t);if(u===i)break;i=u}return i.replace(PS,"$1")}const WS=/\*\*/g;function GS(n){return n.replace(J9,"$1").replace(qS,"$1").replace(FS,"").replace(WS,"")}class VS extends W9{constructor(r,t,i){super(r);Te(this,"cparam_overrides");Te(this,"aopt_overrides");Te(this,"query_mode");const o=new Set(this.get_option_bare_names()),u=this.get_tchoice_bare_names(),a=new Map,s=new Map;for(const[c,l]of Object.entries(t)){if(u.has(c))throw new Error(`Cannot override tchoice entity "${c}" for ${this.aid}: it is left free for the responder to choose.`);if(!o.has(c))throw new Error(`Unknown option key "${c}" for ${this.aid}. Valid keys: ${[...o].sort().join(", ")}`);const f=this.find_cparam(c);if(f){if(i!=="plainnum")throw new Error(`Cannot fix cparam "${c}" for ${this.aid} in ${i} mode: cparams are free in plaincode/richcode (the responder covers all combinations).`);a.set(f.id,l)}else s.set(this.get_aopt(c).id,l)}this.cparam_overrides=a,this.aopt_overrides=s,this.query_mode=i}is_code_mode(){return this.query_mode!=="plainnum"}option_value(r){const t=this.find_cparam(r);if(t)return this.cparam_overrides.get(t.id)??t.default_value;const i=this.get_aopt(r);return this.aopt_overrides.get(i.id)??i.default_value}option_value_or(r,t){return this.get_option_bare_names().includes(r)?this.option_value(r):t}enabled_flabels(){const r=D9(this.get_option_bare_names());return r===null?[]:x9(this.option_value(r),r)}}function e7(n,e,r){return new VS(n._get_data(),e,r)}function Jp(n,e){if("input_type"in n&&n.input_type==="MultiStringFromSet"){if(!Array.isArray(e)||!e.every(i=>typeof i=="string"))throw new Error(`Invalid MultiStringFromSet value for ${n.id}: expected a string array`);if(!Array.isArray(n.allowed_values))throw new Error(`Invalid MultiStringFromSet declaration for ${n.id}: missing allowed_values`);const r=new Set(n.allowed_values),t=e.filter(i=>!r.has(i));if(t.length>0)throw new Error(`Invalid MultiStringFromSet value for ${n.id}: values not in allowed_values: `+t.join(", "));return[...e]}if(typeof e=="object")throw new Error(`Invalid scalar value for ${n.id}: expected string, number, or boolean`);if(Xi(n)){if(Oo(n.allowed_values)==="string"){if(typeof e!="string")throw new Error(`Invalid string value for ${n.id}: ${e}`);return e}const r=Number(e);if(typeof e=="boolean"||!Number.isFinite(r))throw new Error(`Invalid numeric value for ${n.id}: ${e}`);return r}if(typeof n.default_value=="boolean"){if(typeof e=="boolean")return e;if(e==="true")return!0;if(e==="false")return!1;throw new Error(`Invalid boolean value for ${n.id}: ${e}`)}if(typeof n.default_value=="number"){if(typeof e=="boolean"||typeof e=="string"&&e.trim()==="")throw new Error(`Invalid numeric value for ${n.id}: ${e}`);const r=Number(e);if(!Number.isFinite(r))throw new Error(`Invalid numeric value for ${n.id}: ${e}`);return r}if(typeof n.default_value=="string"){if(typeof e!="string")throw new Error(`Invalid string value for ${n.id}: ${e}`);return e}throw new Error(`Option ${n.id} has no supported default value type`)}const n7=!0;function cv(n,e){return n!=="typical"||e}function XS(n,e){const r=n.map(u=>({name:Fe(u.id),values:u.allowed_values.filter(a=>typeof a!="boolean")}));if(r.length===0)return{names:[],combinations:[{}]};const t=r.map(u=>u.name),i=r.map(u=>u.values);let o=[{}];for(let u=0;u<t.length;u++){const a=t[u],s=i[u],c=[];for(const l of o)for(const f of s)c.push({...l,[a]:f});o=c}return e!==void 0&&(o=o.filter(u=>e(u))),{names:t,combinations:o}}function r7(n,e,r){const t=new Set(n.get_cparam_bare_names()),i=r!=="plainnum",o={};for(const[u,a]of Object.entries(e))i&&t.has(u)||(o[u]=a);return o}const YS=[{id:"symbolMnames",description:"Long symbol names",type:"boolean",default:!1},{id:"popoverAllRefs",description:"Popovers for all refs",type:"boolean",default:!0},{id:"persistentPopovers",description:"Persistent popovers (multiple, Esc to close)",type:"boolean",default:!0},{id:"inputMode",description:"Response type",type:"enum",values:["point","bounds","sample"],default:"sample"},{id:"probAsOdds",description:"Stats display",type:"enum",values:["probability","odds"],default:"probability"},{id:"showExampleClassification",description:"Show example classifications",type:"boolean",default:!0},{id:"showFramingNotes",description:"Show framing notes",type:"boolean",default:!0},{id:"framingNoteAbbrev",description:"Abbreviate framing notes",type:"boolean",default:!0},{id:"framingNoteAbbrevThreshold",description:"Abbreviation soft threshold",type:"integer",default:800,min:25,step:25},{id:"mcItersInitialPerPlot",description:"MC iters per plot (initial)",type:"integer",default:1e4,min:1e3,step:1e3},{id:"mcItersPerClickPerPlot",description:"MC iters per plot (+ click)",type:"integer",default:5e3,min:1e3,step:1e3},{id:"plaincodeEvalTimeoutMs",description:"Code eval timeout (ms)",type:"integer",default:5e3,min:1e3,step:1e3}],KS={options:YS},zp=KS.options,JS=new Map(zp.map(n=>[n.id,n.description]));function Qi(n){return JS.get(n)??n}const Tu=Object.freeze(zp.reduce((n,e)=>(n[e.id]=e.default,n),{})),t7="global_options";function cn(){try{const n=localStorage.getItem(t7);if(n===null)return{...Tu};const e=JSON.parse(n);return{...Tu,...e}}catch{return{...Tu}}}function zS(n){localStorage.setItem(t7,JSON.stringify(n))}function Do(n,e){const r=cn();r[n]=e,zS(r)}const QS=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ZS=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);function Tn(n,e){return n>>>e|n<<32-e}function i7(n){const e=new TextEncoder().encode(n),r=e.length<<3>>>0,t=Math.floor(e.length/536870912),i=e.length+9+63&-64,o=new Uint8Array(i);o.set(e),o[e.length]=128;const u=new DataView(o.buffer);u.setUint32(i-8,t),u.setUint32(i-4,r);const a=new Uint32Array(ZS),s=new Uint32Array(64);for(let l=0;l<i;l+=64){for(let _=0;_<16;_++)s[_]=u.getUint32(l+_*4);for(let _=16;_<64;_++){const y=s[_-15],E=s[_-2],A=Tn(y,7)^Tn(y,18)^y>>>3,L=Tn(E,17)^Tn(E,19)^E>>>10;s[_]=s[_-16]+A+s[_-7]+L|0}let f=a[0],d=a[1],p=a[2],h=a[3],m=a[4],v=a[5],b=a[6],g=a[7];for(let _=0;_<64;_++){const y=Tn(m,6)^Tn(m,11)^Tn(m,25),E=m&v^~m&b,A=g+y+E+QS[_]+s[_]|0,L=Tn(f,2)^Tn(f,13)^Tn(f,22),C=f&d^f&p^d&p,I=L+C|0;g=b,b=v,v=m,m=h+A|0,h=p,p=d,d=f,f=A+I|0}a[0]=a[0]+f|0,a[1]=a[1]+d|0,a[2]=a[2]+p|0,a[3]=a[3]+h|0,a[4]=a[4]+m|0,a[5]=a[5]+v|0,a[6]=a[6]+b|0,a[7]=a[7]+g|0}let c="";for(let l=0;l<8;l++)c+=(a[l]>>>0).toString(16).padStart(8,"0");return c}const o7=5;function lv(n){const e={};for(const r of Object.keys(n).sort())e[r]=n[r];return e}function eA(n){return i7(JSON.stringify(n)).slice(0,o7)}function u7(n,e,r,t){const i=[e,lv(r)];return n==="plainnum"&&i.push(lv(t??{})),i7(JSON.stringify(i)).slice(0,o7)}const nA={boolrv:"BoolRV",real:"ℝ",prop:"Prop"},Ep="dag-ref",rA="dag-lhs",wp="dag-glyph",Zi="data-dag-id",tA="↖",iA="↘";function oA(n){const e=n.sexpr;if(!Array.isArray(e)||e[0]!=="eq")return null;const r=e[1];return typeof r!="string"||!r.startsWith("expr:")?null:r.slice(5)}function uA(n){zi.lastIndex=0;const e=[];for(const r of n.matchAll(zi)){const t=r[1];if(!t.startsWith("expr:"))continue;const i=t.slice(5);i.includes(":")||e.push(i)}return e}function aA(n,e){const r=new Map(n.form.map(s=>[s.id,s])),t=e.map(s=>n.get_display_form(s)),i=new Map,o=e.map((s,c)=>{const l=r.get(s),f=l?oA(l):null;return f!==null&&!i.has(f)&&i.set(f,c),f}),u=new Set;t.forEach((s,c)=>{for(const l of uA(s)){const f=i.get(l);f!==void 0&&f<c&&u.add(l)}});const a=new Map;return e.forEach((s,c)=>{const l=t[c].replace(zi,(f,d)=>{if(!d.startsWith("expr:"))return f;const p=d.slice(5);if(p.includes(":"))return f;if(p===o[c])return u.has(p)?`<span class="${Ep} ${rA}" ${Zi}="${se(p)}"><span class="${wp}">${iA}</span>${f}</span>`:f;const h=i.get(p);if(h===void 0||h>=c)return f;const m=Po(e[h]);return`<span class="${Ep}" ${Zi}="${se(p)}"><a class="${wp}" href="#form-${se(m)}">${tA}</a>${f}</span>`});a.set(s,l)}),a}const sA=["expr:","form:"],cA=["textchunk:","aopt:","cparam:"],lA=10;function fA(n){const e=new Map;for(const r of n.get_options()){if(Gp(r)&&r.variant_producing)continue;const t=a7(r.id);if(n.is_code_mode()&&Sr(r.id)){e.set(t,`${V9}${t}:short${X9}`);continue}e.set(t,String(n.option_value(t)))}for(const r of n.get_textchunks()){const t=r.id.startsWith("textchunk:")?r.id.slice(10):r.id;e.set(t,r.defn)}return e}function a7(n){for(const e of cA)if(n.startsWith(e))return n.slice(e.length);return n}function dA(n,e){const r=fA(e);let t=n;for(let i=0;i<lA;i++){const o=t.replace(MS,(u,a)=>{for(const l of sA)if(a.startsWith(l))return u;const s=a7(a),c=r.get(s);if(c===void 0)throw new Error(`Template variable ${Y9}${a}${K9} not found in non-variant-producing options or textchunks`);return c});if(o===t)break;t=o}return t.replace(OS,"$1")}const pA=10;function hA(n){const e=new Map;for(const t of n.get_display_expr_keys())e.set(t,n.get_display_expr(t));const r=new Set(n.form.filter(t=>!t.hide).map(t=>t.id));for(const t of n.get_display_form_keys())r.has(t)&&e.set(t,n.get_display_form(t));return e}function vA(n,e){let r=n;for(let t=0;t<pA;t++){const i=r.replace(zi,(o,u)=>{const a=e.get(u);if(a===void 0)throw new Error(`Display ref ${Y9}${u}${K9} not found in display.expr or display.form`);return a});if(i===r)break;r=i}return r}const fv={};function mA(n){let e=fv[n];if(e)return e;e=fv[n]=[];for(let r=0;r<128;r++){const t=String.fromCharCode(r);e.push(t)}for(let r=0;r<n.length;r++){const t=n.charCodeAt(r);e[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2)}return e}function Vr(n,e){typeof e!="string"&&(e=Vr.defaultChars);const r=mA(e);return n.replace(/(%[a-f0-9]{2})+/gi,function(t){let i="";for(let o=0,u=t.length;o<u;o+=3){const a=parseInt(t.slice(o+1,o+3),16);if(a<128){i+=r[a];continue}if((a&224)===192&&o+3<u){const s=parseInt(t.slice(o+4,o+6),16);if((s&192)===128){const c=a<<6&1984|s&63;c<128?i+="��":i+=String.fromCharCode(c),o+=3;continue}}if((a&240)===224&&o+6<u){const s=parseInt(t.slice(o+4,o+6),16),c=parseInt(t.slice(o+7,o+9),16);if((s&192)===128&&(c&192)===128){const l=a<<12&61440|s<<6&4032|c&63;l<2048||l>=55296&&l<=57343?i+="���":i+=String.fromCharCode(l),o+=6;continue}}if((a&248)===240&&o+9<u){const s=parseInt(t.slice(o+4,o+6),16),c=parseInt(t.slice(o+7,o+9),16),l=parseInt(t.slice(o+10,o+12),16);if((s&192)===128&&(c&192)===128&&(l&192)===128){let f=a<<18&1835008|s<<12&258048|c<<6&4032|l&63;f<65536||f>1114111?i+="����":(f-=65536,i+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),o+=9;continue}}i+="�"}return i})}Vr.defaultChars=";/?:@&=+$,#";Vr.componentChars="";const dv={};function bA(n){let e=dv[n];if(e)return e;e=dv[n]=[];for(let r=0;r<128;r++){const t=String.fromCharCode(r);/^[0-9a-z]$/i.test(t)?e.push(t):e.push("%"+("0"+r.toString(16).toUpperCase()).slice(-2))}for(let r=0;r<n.length;r++)e[n.charCodeAt(r)]=n[r];return e}function zt(n,e,r){typeof e!="string"&&(r=e,e=zt.defaultChars),typeof r>"u"&&(r=!0);const t=bA(e);let i="";for(let o=0,u=n.length;o<u;o++){const a=n.charCodeAt(o);if(r&&a===37&&o+2<u&&/^[0-9a-f]{2}$/i.test(n.slice(o+1,o+3))){i+=n.slice(o,o+3),o+=2;continue}if(a<128){i+=t[a];continue}if(a>=55296&&a<=57343){if(a>=55296&&a<=56319&&o+1<u){const s=n.charCodeAt(o+1);if(s>=56320&&s<=57343){i+=encodeURIComponent(n[o]+n[o+1]),o++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(n[o])}return i}zt.defaultChars=";/?:@&=+$,-_.!~*'()#";zt.componentChars="-_.!~*'()";function Qp(n){let e="";return e+=n.protocol||"",e+=n.slashes?"//":"",e+=n.auth?n.auth+"@":"",n.hostname&&n.hostname.indexOf(":")!==-1?e+="["+n.hostname+"]":e+=n.hostname||"",e+=n.port?":"+n.port:"",e+=n.pathname||"",e+=n.search||"",e+=n.hash||"",e}function eo(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const gA=/^([a-z0-9.+-]+:)/i,_A=/:[0-9]*$/,yA=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,EA=["<",">",'"',"`"," ","\r",`
`,"	"],wA=["{","}","|","\\","^","`"].concat(EA),$A=["'"].concat(wA),pv=["%","/","?",";","#"].concat($A),hv=["/","?","#"],SA=255,vv=/^[+a-z0-9A-Z_-]{0,63}$/,AA=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,mv={javascript:!0,"javascript:":!0},bv={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Zp(n,e){if(n&&n instanceof eo)return n;const r=new eo;return r.parse(n,e),r}eo.prototype.parse=function(n,e){let r,t,i,o=n;if(o=o.trim(),!e&&n.split("#").length===1){const c=yA.exec(o);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let u=gA.exec(o);if(u&&(u=u[0],r=u.toLowerCase(),this.protocol=u,o=o.substr(u.length)),(e||u||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=o.substr(0,2)==="//",i&&!(u&&mv[u])&&(o=o.substr(2),this.slashes=!0)),!mv[u]&&(i||u&&!bv[u])){let c=-1;for(let h=0;h<hv.length;h++)t=o.indexOf(hv[h]),t!==-1&&(c===-1||t<c)&&(c=t);let l,f;c===-1?f=o.lastIndexOf("@"):f=o.lastIndexOf("@",c),f!==-1&&(l=o.slice(0,f),o=o.slice(f+1),this.auth=l),c=-1;for(let h=0;h<pv.length;h++)t=o.indexOf(pv[h]),t!==-1&&(c===-1||t<c)&&(c=t);c===-1&&(c=o.length),o[c-1]===":"&&c--;const d=o.slice(0,c);o=o.slice(c),this.parseHost(d),this.hostname=this.hostname||"";const p=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!p){const h=this.hostname.split(/\./);for(let m=0,v=h.length;m<v;m++){const b=h[m];if(b&&!b.match(vv)){let g="";for(let _=0,y=b.length;_<y;_++)b.charCodeAt(_)>127?g+="x":g+=b[_];if(!g.match(vv)){const _=h.slice(0,m),y=h.slice(m+1),E=b.match(AA);E&&(_.push(E[1]),y.unshift(E[2])),y.length&&(o=y.join(".")+o),this.hostname=_.join(".");break}}}}this.hostname.length>SA&&(this.hostname=""),p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const a=o.indexOf("#");a!==-1&&(this.hash=o.substr(a),o=o.slice(0,a));const s=o.indexOf("?");return s!==-1&&(this.search=o.substr(s),o=o.slice(0,s)),o&&(this.pathname=o),bv[r]&&this.hostname&&!this.pathname&&(this.pathname=""),this};eo.prototype.parseHost=function(n){let e=_A.exec(n);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),n=n.substr(0,n.length-e.length)),n&&(this.hostname=n)};const LA=Object.freeze(Object.defineProperty({__proto__:null,decode:Vr,encode:zt,format:Qp,parse:Zp},Symbol.toStringTag,{value:"Module"})),s7=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,c7=/[\0-\x1F\x7F-\x9F]/,IA=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,e2=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,l7=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,f7=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,kA=Object.freeze(Object.defineProperty({__proto__:null,Any:s7,Cc:c7,Cf:IA,P:e2,S:l7,Z:f7},Symbol.toStringTag,{value:"Module"})),RA=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(n=>n.charCodeAt(0))),CA=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(n=>n.charCodeAt(0)));var qu;const MA=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),NA=(qu=String.fromCodePoint)!==null&&qu!==void 0?qu:function(n){let e="";return n>65535&&(n-=65536,e+=String.fromCharCode(n>>>10&1023|55296),n=56320|n&1023),e+=String.fromCharCode(n),e};function TA(n){var e;return n>=55296&&n<=57343||n>1114111?65533:(e=MA.get(n))!==null&&e!==void 0?e:n}var Ye;(function(n){n[n.NUM=35]="NUM",n[n.SEMI=59]="SEMI",n[n.EQUALS=61]="EQUALS",n[n.ZERO=48]="ZERO",n[n.NINE=57]="NINE",n[n.LOWER_A=97]="LOWER_A",n[n.LOWER_F=102]="LOWER_F",n[n.LOWER_X=120]="LOWER_X",n[n.LOWER_Z=122]="LOWER_Z",n[n.UPPER_A=65]="UPPER_A",n[n.UPPER_F=70]="UPPER_F",n[n.UPPER_Z=90]="UPPER_Z"})(Ye||(Ye={}));const qA=32;var cr;(function(n){n[n.VALUE_LENGTH=49152]="VALUE_LENGTH",n[n.BRANCH_LENGTH=16256]="BRANCH_LENGTH",n[n.JUMP_TABLE=127]="JUMP_TABLE"})(cr||(cr={}));function $p(n){return n>=Ye.ZERO&&n<=Ye.NINE}function FA(n){return n>=Ye.UPPER_A&&n<=Ye.UPPER_F||n>=Ye.LOWER_A&&n<=Ye.LOWER_F}function OA(n){return n>=Ye.UPPER_A&&n<=Ye.UPPER_Z||n>=Ye.LOWER_A&&n<=Ye.LOWER_Z||$p(n)}function PA(n){return n===Ye.EQUALS||OA(n)}var Ve;(function(n){n[n.EntityStart=0]="EntityStart",n[n.NumericStart=1]="NumericStart",n[n.NumericDecimal=2]="NumericDecimal",n[n.NumericHex=3]="NumericHex",n[n.NamedEntity=4]="NamedEntity"})(Ve||(Ve={}));var sr;(function(n){n[n.Legacy=0]="Legacy",n[n.Strict=1]="Strict",n[n.Attribute=2]="Attribute"})(sr||(sr={}));class DA{constructor(e,r,t){this.decodeTree=e,this.emitCodePoint=r,this.errors=t,this.state=Ve.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=sr.Strict}startEntity(e){this.decodeMode=e,this.state=Ve.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,r){switch(this.state){case Ve.EntityStart:return e.charCodeAt(r)===Ye.NUM?(this.state=Ve.NumericStart,this.consumed+=1,this.stateNumericStart(e,r+1)):(this.state=Ve.NamedEntity,this.stateNamedEntity(e,r));case Ve.NumericStart:return this.stateNumericStart(e,r);case Ve.NumericDecimal:return this.stateNumericDecimal(e,r);case Ve.NumericHex:return this.stateNumericHex(e,r);case Ve.NamedEntity:return this.stateNamedEntity(e,r)}}stateNumericStart(e,r){return r>=e.length?-1:(e.charCodeAt(r)|qA)===Ye.LOWER_X?(this.state=Ve.NumericHex,this.consumed+=1,this.stateNumericHex(e,r+1)):(this.state=Ve.NumericDecimal,this.stateNumericDecimal(e,r))}addToNumericResult(e,r,t,i){if(r!==t){const o=t-r;this.result=this.result*Math.pow(i,o)+parseInt(e.substr(r,o),i),this.consumed+=o}}stateNumericHex(e,r){const t=r;for(;r<e.length;){const i=e.charCodeAt(r);if($p(i)||FA(i))r+=1;else return this.addToNumericResult(e,t,r,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(e,t,r,16),-1}stateNumericDecimal(e,r){const t=r;for(;r<e.length;){const i=e.charCodeAt(r);if($p(i))r+=1;else return this.addToNumericResult(e,t,r,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(e,t,r,10),-1}emitNumericEntity(e,r){var t;if(this.consumed<=r)return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===Ye.SEMI)this.consumed+=1;else if(this.decodeMode===sr.Strict)return 0;return this.emitCodePoint(TA(this.result),this.consumed),this.errors&&(e!==Ye.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,r){const{decodeTree:t}=this;let i=t[this.treeIndex],o=(i&cr.VALUE_LENGTH)>>14;for(;r<e.length;r++,this.excess++){const u=e.charCodeAt(r);if(this.treeIndex=xA(t,i,this.treeIndex+Math.max(1,o),u),this.treeIndex<0)return this.result===0||this.decodeMode===sr.Attribute&&(o===0||PA(u))?0:this.emitNotTerminatedNamedEntity();if(i=t[this.treeIndex],o=(i&cr.VALUE_LENGTH)>>14,o!==0){if(u===Ye.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==sr.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;const{result:r,decodeTree:t}=this,i=(t[r]&cr.VALUE_LENGTH)>>14;return this.emitNamedEntityData(r,i,this.consumed),(e=this.errors)===null||e===void 0||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,r,t){const{decodeTree:i}=this;return this.emitCodePoint(r===1?i[e]&~cr.VALUE_LENGTH:i[e+1],t),r===3&&this.emitCodePoint(i[e+2],t),t}end(){var e;switch(this.state){case Ve.NamedEntity:return this.result!==0&&(this.decodeMode!==sr.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Ve.NumericDecimal:return this.emitNumericEntity(0,2);case Ve.NumericHex:return this.emitNumericEntity(0,3);case Ve.NumericStart:return(e=this.errors)===null||e===void 0||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Ve.EntityStart:return 0}}}function d7(n){let e="";const r=new DA(n,t=>e+=NA(t));return function(i,o){let u=0,a=0;for(;(a=i.indexOf("&",a))>=0;){e+=i.slice(u,a),r.startEntity(o);const c=r.write(i,a+1);if(c<0){u=a+r.end();break}u=a+c,a=c===0?u+1:u}const s=e+i.slice(u);return e="",s}}function xA(n,e,r,t){const i=(e&cr.BRANCH_LENGTH)>>7,o=e&cr.JUMP_TABLE;if(i===0)return o!==0&&t===o?r:-1;if(o){const s=t-o;return s<0||s>=i?-1:n[r+s]-1}let u=r,a=u+i-1;for(;u<=a;){const s=u+a>>>1,c=n[s];if(c<t)u=s+1;else if(c>t)a=s-1;else return n[s+i]}return-1}const BA=d7(RA);d7(CA);function p7(n,e=sr.Legacy){return BA(n,e)}function HA(n){return Object.prototype.toString.call(n)}function n2(n){return HA(n)==="[object String]"}const UA=Object.prototype.hasOwnProperty;function jA(n,e){return UA.call(n,e)}function xo(n){return Array.prototype.slice.call(arguments,1).forEach(function(r){if(r){if(typeof r!="object")throw new TypeError(r+"must be object");Object.keys(r).forEach(function(t){n[t]=r[t]})}}),n}function h7(n,e,r){return[].concat(n.slice(0,e),r,n.slice(e+1))}function r2(n){return!(n>=55296&&n<=57343||n>=64976&&n<=65007||(n&65535)===65535||(n&65535)===65534||n>=0&&n<=8||n===11||n>=14&&n<=31||n>=127&&n<=159||n>1114111)}function no(n){if(n>65535){n-=65536;const e=55296+(n>>10),r=56320+(n&1023);return String.fromCharCode(e,r)}return String.fromCharCode(n)}const v7=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,WA=/&([a-z#][a-z0-9]{1,31});/gi,GA=new RegExp(v7.source+"|"+WA.source,"gi"),VA=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function XA(n,e){if(e.charCodeAt(0)===35&&VA.test(e)){const t=e[1].toLowerCase()==="x"?parseInt(e.slice(2),16):parseInt(e.slice(1),10);return r2(t)?no(t):n}const r=p7(n);return r!==n?r:n}function YA(n){return n.indexOf("\\")<0?n:n.replace(v7,"$1")}function Xr(n){return n.indexOf("\\")<0&&n.indexOf("&")<0?n:n.replace(GA,function(e,r,t){return r||XA(e,t)})}const KA=/[&<>"]/,JA=/[&<>"]/g,zA={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function QA(n){return zA[n]}function dr(n){return KA.test(n)?n.replace(JA,QA):n}const ZA=/[.?*+^$[\]\\(){}|-]/g;function eL(n){return n.replace(ZA,"\\$&")}function Re(n){switch(n){case 9:case 32:return!0}return!1}function Pt(n){if(n>=8192&&n<=8202)return!0;switch(n){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Dt(n){return e2.test(n)||l7.test(n)}function xt(n){switch(n){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Bo(n){return n=n.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(n=n.replace(/ẞ/g,"ß")),n.toLowerCase().toUpperCase()}const nL={mdurl:LA,ucmicro:kA},rL=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:h7,assign:xo,escapeHtml:dr,escapeRE:eL,fromCodePoint:no,has:jA,isMdAsciiPunct:xt,isPunctChar:Dt,isSpace:Re,isString:n2,isValidEntityCode:r2,isWhiteSpace:Pt,lib:nL,normalizeReference:Bo,unescapeAll:Xr,unescapeMd:YA},Symbol.toStringTag,{value:"Module"}));function tL(n,e,r){let t,i,o,u;const a=n.posMax,s=n.pos;for(n.pos=e+1,t=1;n.pos<a;){if(o=n.src.charCodeAt(n.pos),o===93&&(t--,t===0)){i=!0;break}if(u=n.pos,n.md.inline.skipToken(n),o===91){if(u===n.pos-1)t++;else if(r)return n.pos=s,-1}}let c=-1;return i&&(c=n.pos),n.pos=s,c}function iL(n,e,r){let t,i=e;const o={ok:!1,pos:0,str:""};if(n.charCodeAt(i)===60){for(i++;i<r;){if(t=n.charCodeAt(i),t===10||t===60)return o;if(t===62)return o.pos=i+1,o.str=Xr(n.slice(e+1,i)),o.ok=!0,o;if(t===92&&i+1<r){i+=2;continue}i++}return o}let u=0;for(;i<r&&(t=n.charCodeAt(i),!(t===32||t<32||t===127));){if(t===92&&i+1<r){if(n.charCodeAt(i+1)===32)break;i+=2;continue}if(t===40&&(u++,u>32))return o;if(t===41){if(u===0)break;u--}i++}return e===i||u!==0||(o.str=Xr(n.slice(e,i)),o.pos=i,o.ok=!0),o}function oL(n,e,r,t){let i,o=e;const u={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(t)u.str=t.str,u.marker=t.marker;else{if(o>=r)return u;let a=n.charCodeAt(o);if(a!==34&&a!==39&&a!==40)return u;e++,o++,a===40&&(a=41),u.marker=a}for(;o<r;){if(i=n.charCodeAt(o),i===u.marker)return u.pos=o+1,u.str+=Xr(n.slice(e,o)),u.ok=!0,u;if(i===40&&u.marker===41)return u;i===92&&o+1<r&&o++,o++}return u.can_continue=!0,u.str+=Xr(n.slice(e,o)),u}const uL=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:iL,parseLinkLabel:tL,parseLinkTitle:oL},Symbol.toStringTag,{value:"Module"})),Wn={};Wn.code_inline=function(n,e,r,t,i){const o=n[e];return"<code"+i.renderAttrs(o)+">"+dr(o.content)+"</code>"};Wn.code_block=function(n,e,r,t,i){const o=n[e];return"<pre"+i.renderAttrs(o)+"><code>"+dr(n[e].content)+`</code></pre>
`};Wn.fence=function(n,e,r,t,i){const o=n[e],u=o.info?Xr(o.info).trim():"";let a="",s="";if(u){const l=u.split(/(\s+)/g);a=l[0],s=l.slice(2).join("")}let c;if(r.highlight?c=r.highlight(o.content,a,s)||dr(o.content):c=dr(o.content),c.indexOf("<pre")===0)return c+`
`;if(u){const l=o.attrIndex("class"),f=o.attrs?o.attrs.slice():[];l<0?f.push(["class",r.langPrefix+a]):(f[l]=f[l].slice(),f[l][1]+=" "+r.langPrefix+a);const d={attrs:f};return`<pre><code${i.renderAttrs(d)}>${c}</code></pre>
`}return`<pre><code${i.renderAttrs(o)}>${c}</code></pre>
`};Wn.image=function(n,e,r,t,i){const o=n[e];return o.attrs[o.attrIndex("alt")][1]=i.renderInlineAsText(o.children,r,t),i.renderToken(n,e,r)};Wn.hardbreak=function(n,e,r){return r.xhtmlOut?`<br />
`:`<br>
`};Wn.softbreak=function(n,e,r){return r.breaks?r.xhtmlOut?`<br />
`:`<br>
`:`
`};Wn.text=function(n,e){return dr(n[e].content)};Wn.html_block=function(n,e){return n[e].content};Wn.html_inline=function(n,e){return n[e].content};function tt(){this.rules=xo({},Wn)}tt.prototype.renderAttrs=function(e){let r,t,i;if(!e.attrs)return"";for(i="",r=0,t=e.attrs.length;r<t;r++)i+=" "+dr(e.attrs[r][0])+'="'+dr(e.attrs[r][1])+'"';return i};tt.prototype.renderToken=function(e,r,t){const i=e[r];let o="";if(i.hidden)return"";i.block&&i.nesting!==-1&&r&&e[r-1].hidden&&(o+=`
`),o+=(i.nesting===-1?"</":"<")+i.tag,o+=this.renderAttrs(i),i.nesting===0&&t.xhtmlOut&&(o+=" /");let u=!1;if(i.block&&(u=!0,i.nesting===1&&r+1<e.length)){const a=e[r+1];(a.type==="inline"||a.hidden||a.nesting===-1&&a.tag===i.tag)&&(u=!1)}return o+=u?`>
`:">",o};tt.prototype.renderInline=function(n,e,r){let t="";const i=this.rules;for(let o=0,u=n.length;o<u;o++){const a=n[o].type;typeof i[a]<"u"?t+=i[a](n,o,e,r,this):t+=this.renderToken(n,o,e)}return t};tt.prototype.renderInlineAsText=function(n,e,r){let t="";for(let i=0,o=n.length;i<o;i++)switch(n[i].type){case"text":t+=n[i].content;break;case"image":t+=this.renderInlineAsText(n[i].children,e,r);break;case"html_inline":case"html_block":t+=n[i].content;break;case"softbreak":case"hardbreak":t+=`
`;break}return t};tt.prototype.render=function(n,e,r){let t="";const i=this.rules;for(let o=0,u=n.length;o<u;o++){const a=n[o].type;a==="inline"?t+=this.renderInline(n[o].children,e,r):typeof i[a]<"u"?t+=i[a](n,o,e,r,this):t+=this.renderToken(n,o,e,r)}return t};function ln(){this.__rules__=[],this.__cache__=null}ln.prototype.__find__=function(n){for(let e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===n)return e;return-1};ln.prototype.__compile__=function(){const n=this,e=[""];n.__rules__.forEach(function(r){r.enabled&&r.alt.forEach(function(t){e.indexOf(t)<0&&e.push(t)})}),n.__cache__={},e.forEach(function(r){n.__cache__[r]=[],n.__rules__.forEach(function(t){t.enabled&&(r&&t.alt.indexOf(r)<0||n.__cache__[r].push(t.fn))})})};ln.prototype.at=function(n,e,r){const t=this.__find__(n),i=r||{};if(t===-1)throw new Error("Parser rule not found: "+n);this.__rules__[t].fn=e,this.__rules__[t].alt=i.alt||[],this.__cache__=null};ln.prototype.before=function(n,e,r,t){const i=this.__find__(n),o=t||{};if(i===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(i,0,{name:e,enabled:!0,fn:r,alt:o.alt||[]}),this.__cache__=null};ln.prototype.after=function(n,e,r,t){const i=this.__find__(n),o=t||{};if(i===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(i+1,0,{name:e,enabled:!0,fn:r,alt:o.alt||[]}),this.__cache__=null};ln.prototype.push=function(n,e,r){const t=r||{};this.__rules__.push({name:n,enabled:!0,fn:e,alt:t.alt||[]}),this.__cache__=null};ln.prototype.enable=function(n,e){Array.isArray(n)||(n=[n]);const r=[];return n.forEach(function(t){const i=this.__find__(t);if(i<0){if(e)return;throw new Error("Rules manager: invalid rule name "+t)}this.__rules__[i].enabled=!0,r.push(t)},this),this.__cache__=null,r};ln.prototype.enableOnly=function(n,e){Array.isArray(n)||(n=[n]),this.__rules__.forEach(function(r){r.enabled=!1}),this.enable(n,e)};ln.prototype.disable=function(n,e){Array.isArray(n)||(n=[n]);const r=[];return n.forEach(function(t){const i=this.__find__(t);if(i<0){if(e)return;throw new Error("Rules manager: invalid rule name "+t)}this.__rules__[i].enabled=!1,r.push(t)},this),this.__cache__=null,r};ln.prototype.getRules=function(n){return this.__cache__===null&&this.__compile__(),this.__cache__[n]||[]};function Cn(n,e,r){this.type=n,this.tag=e,this.attrs=null,this.map=null,this.nesting=r,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Cn.prototype.attrIndex=function(e){if(!this.attrs)return-1;const r=this.attrs;for(let t=0,i=r.length;t<i;t++)if(r[t][0]===e)return t;return-1};Cn.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};Cn.prototype.attrSet=function(e,r){const t=this.attrIndex(e),i=[e,r];t<0?this.attrPush(i):this.attrs[t]=i};Cn.prototype.attrGet=function(e){const r=this.attrIndex(e);let t=null;return r>=0&&(t=this.attrs[r][1]),t};Cn.prototype.attrJoin=function(e,r){const t=this.attrIndex(e);t<0?this.attrPush([e,r]):this.attrs[t][1]=this.attrs[t][1]+" "+r};function m7(n,e,r){this.src=n,this.env=r,this.tokens=[],this.inlineMode=!1,this.md=e}m7.prototype.Token=Cn;const aL=/\r\n?|\n/g,sL=/\0/g;function cL(n){let e;e=n.src.replace(aL,`
`),e=e.replace(sL,"�"),n.src=e}function lL(n){let e;n.inlineMode?(e=new n.Token("inline","",0),e.content=n.src,e.map=[0,1],e.children=[],n.tokens.push(e)):n.md.block.parse(n.src,n.md,n.env,n.tokens)}function fL(n){const e=n.tokens;for(let r=0,t=e.length;r<t;r++){const i=e[r];i.type==="inline"&&n.md.inline.parse(i.content,n.md,n.env,i.children)}}function dL(n){return/^<a[>\s]/i.test(n)}function pL(n){return/^<\/a\s*>/i.test(n)}function hL(n){const e=n.tokens;if(n.md.options.linkify)for(let r=0,t=e.length;r<t;r++){if(e[r].type!=="inline"||!n.md.linkify.pretest(e[r].content))continue;let i=e[r].children,o=0;for(let u=i.length-1;u>=0;u--){const a=i[u];if(a.type==="link_close"){for(u--;i[u].level!==a.level&&i[u].type!=="link_open";)u--;continue}if(a.type==="html_inline"&&(dL(a.content)&&o>0&&o--,pL(a.content)&&o++),!(o>0)&&a.type==="text"&&n.md.linkify.test(a.content)){const s=a.content;let c=n.md.linkify.match(s);const l=[];let f=a.level,d=0;c.length>0&&c[0].index===0&&u>0&&i[u-1].type==="text_special"&&(c=c.slice(1));for(let p=0;p<c.length;p++){const h=c[p].url,m=n.md.normalizeLink(h);if(!n.md.validateLink(m))continue;let v=c[p].text;c[p].schema?c[p].schema==="mailto:"&&!/^mailto:/i.test(v)?v=n.md.normalizeLinkText("mailto:"+v).replace(/^mailto:/,""):v=n.md.normalizeLinkText(v):v=n.md.normalizeLinkText("http://"+v).replace(/^http:\/\//,"");const b=c[p].index;if(b>d){const E=new n.Token("text","",0);E.content=s.slice(d,b),E.level=f,l.push(E)}const g=new n.Token("link_open","a",1);g.attrs=[["href",m]],g.level=f++,g.markup="linkify",g.info="auto",l.push(g);const _=new n.Token("text","",0);_.content=v,_.level=f,l.push(_);const y=new n.Token("link_close","a",-1);y.level=--f,y.markup="linkify",y.info="auto",l.push(y),d=c[p].lastIndex}if(d<s.length){const p=new n.Token("text","",0);p.content=s.slice(d),p.level=f,l.push(p)}e[r].children=i=h7(i,u,l)}}}}const b7=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,vL=/\((c|tm|r)\)/i,mL=/\((c|tm|r)\)/ig,bL={c:"©",r:"®",tm:"™"};function gL(n,e){return bL[e.toLowerCase()]}function _L(n){let e=0;for(let r=n.length-1;r>=0;r--){const t=n[r];t.type==="text"&&!e&&(t.content=t.content.replace(mL,gL)),t.type==="link_open"&&t.info==="auto"&&e--,t.type==="link_close"&&t.info==="auto"&&e++}}function yL(n){let e=0;for(let r=n.length-1;r>=0;r--){const t=n[r];t.type==="text"&&!e&&b7.test(t.content)&&(t.content=t.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),t.type==="link_open"&&t.info==="auto"&&e--,t.type==="link_close"&&t.info==="auto"&&e++}}function EL(n){let e;if(n.md.options.typographer)for(e=n.tokens.length-1;e>=0;e--)n.tokens[e].type==="inline"&&(vL.test(n.tokens[e].content)&&_L(n.tokens[e].children),b7.test(n.tokens[e].content)&&yL(n.tokens[e].children))}const wL=/['"]/,gv=/['"]/g,_v="’";function Si(n,e,r){return n.slice(0,e)+r+n.slice(e+1)}function $L(n,e){let r;const t=[];for(let i=0;i<n.length;i++){const o=n[i],u=n[i].level;for(r=t.length-1;r>=0&&!(t[r].level<=u);r--);if(t.length=r+1,o.type!=="text")continue;let a=o.content,s=0,c=a.length;e:for(;s<c;){gv.lastIndex=s;const l=gv.exec(a);if(!l)break;let f=!0,d=!0;s=l.index+1;const p=l[0]==="'";let h=32;if(l.index-1>=0)h=a.charCodeAt(l.index-1);else for(r=i-1;r>=0&&!(n[r].type==="softbreak"||n[r].type==="hardbreak");r--)if(n[r].content){h=n[r].content.charCodeAt(n[r].content.length-1);break}let m=32;if(s<c)m=a.charCodeAt(s);else for(r=i+1;r<n.length&&!(n[r].type==="softbreak"||n[r].type==="hardbreak");r++)if(n[r].content){m=n[r].content.charCodeAt(0);break}const v=xt(h)||Dt(String.fromCharCode(h)),b=xt(m)||Dt(String.fromCharCode(m)),g=Pt(h),_=Pt(m);if(_?f=!1:b&&(g||v||(f=!1)),g?d=!1:v&&(_||b||(d=!1)),m===34&&l[0]==='"'&&h>=48&&h<=57&&(d=f=!1),f&&d&&(f=v,d=b),!f&&!d){p&&(o.content=Si(o.content,l.index,_v));continue}if(d)for(r=t.length-1;r>=0;r--){let y=t[r];if(t[r].level<u)break;if(y.single===p&&t[r].level===u){y=t[r];let E,A;p?(E=e.md.options.quotes[2],A=e.md.options.quotes[3]):(E=e.md.options.quotes[0],A=e.md.options.quotes[1]),o.content=Si(o.content,l.index,A),n[y.token].content=Si(n[y.token].content,y.pos,E),s+=A.length-1,y.token===i&&(s+=E.length-1),a=o.content,c=a.length,t.length=r;continue e}}f?t.push({token:i,pos:l.index,single:p,level:u}):d&&p&&(o.content=Si(o.content,l.index,_v))}}}function SL(n){if(n.md.options.typographer)for(let e=n.tokens.length-1;e>=0;e--)n.tokens[e].type!=="inline"||!wL.test(n.tokens[e].content)||$L(n.tokens[e].children,n)}function AL(n){let e,r;const t=n.tokens,i=t.length;for(let o=0;o<i;o++){if(t[o].type!=="inline")continue;const u=t[o].children,a=u.length;for(e=0;e<a;e++)u[e].type==="text_special"&&(u[e].type="text");for(e=r=0;e<a;e++)u[e].type==="text"&&e+1<a&&u[e+1].type==="text"?u[e+1].content=u[e].content+u[e+1].content:(e!==r&&(u[r]=u[e]),r++);e!==r&&(u.length=r)}}const Fu=[["normalize",cL],["block",lL],["inline",fL],["linkify",hL],["replacements",EL],["smartquotes",SL],["text_join",AL]];function t2(){this.ruler=new ln;for(let n=0;n<Fu.length;n++)this.ruler.push(Fu[n][0],Fu[n][1])}t2.prototype.process=function(n){const e=this.ruler.getRules("");for(let r=0,t=e.length;r<t;r++)e[r](n)};t2.prototype.State=m7;function Gn(n,e,r,t){this.src=n,this.md=e,this.env=r,this.tokens=t,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let o=0,u=0,a=0,s=0,c=i.length,l=!1;u<c;u++){const f=i.charCodeAt(u);if(!l)if(Re(f)){a++,f===9?s+=4-s%4:s++;continue}else l=!0;(f===10||u===c-1)&&(f!==10&&u++,this.bMarks.push(o),this.eMarks.push(u),this.tShift.push(a),this.sCount.push(s),this.bsCount.push(0),l=!1,a=0,s=0,o=u+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Gn.prototype.push=function(n,e,r){const t=new Cn(n,e,r);return t.block=!0,r<0&&this.level--,t.level=this.level,r>0&&this.level++,this.tokens.push(t),t};Gn.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};Gn.prototype.skipEmptyLines=function(e){for(let r=this.lineMax;e<r&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};Gn.prototype.skipSpaces=function(e){for(let r=this.src.length;e<r;e++){const t=this.src.charCodeAt(e);if(!Re(t))break}return e};Gn.prototype.skipSpacesBack=function(e,r){if(e<=r)return e;for(;e>r;)if(!Re(this.src.charCodeAt(--e)))return e+1;return e};Gn.prototype.skipChars=function(e,r){for(let t=this.src.length;e<t&&this.src.charCodeAt(e)===r;e++);return e};Gn.prototype.skipCharsBack=function(e,r,t){if(e<=t)return e;for(;e>t;)if(r!==this.src.charCodeAt(--e))return e+1;return e};Gn.prototype.getLines=function(e,r,t,i){if(e>=r)return"";const o=new Array(r-e);for(let u=0,a=e;a<r;a++,u++){let s=0;const c=this.bMarks[a];let l=c,f;for(a+1<r||i?f=this.eMarks[a]+1:f=this.eMarks[a];l<f&&s<t;){const d=this.src.charCodeAt(l);if(Re(d))d===9?s+=4-(s+this.bsCount[a])%4:s++;else if(l-c<this.tShift[a])s++;else break;l++}s>t?o[u]=new Array(s-t+1).join(" ")+this.src.slice(l,f):o[u]=this.src.slice(l,f)}return o.join("")};Gn.prototype.Token=Cn;const LL=65536;function Ou(n,e){const r=n.bMarks[e]+n.tShift[e],t=n.eMarks[e];return n.src.slice(r,t)}function yv(n){const e=[],r=n.length;let t=0,i=n.charCodeAt(t),o=!1,u=0,a="";for(;t<r;)i===124&&(o?(a+=n.substring(u,t-1),u=t):(e.push(a+n.substring(u,t)),a="",u=t+1)),o=i===92,t++,i=n.charCodeAt(t);return e.push(a+n.substring(u)),e}function IL(n,e,r,t){if(e+2>r)return!1;let i=e+1;if(n.sCount[i]<n.blkIndent||n.sCount[i]-n.blkIndent>=4)return!1;let o=n.bMarks[i]+n.tShift[i];if(o>=n.eMarks[i])return!1;const u=n.src.charCodeAt(o++);if(u!==124&&u!==45&&u!==58||o>=n.eMarks[i])return!1;const a=n.src.charCodeAt(o++);if(a!==124&&a!==45&&a!==58&&!Re(a)||u===45&&Re(a))return!1;for(;o<n.eMarks[i];){const y=n.src.charCodeAt(o);if(y!==124&&y!==45&&y!==58&&!Re(y))return!1;o++}let s=Ou(n,e+1),c=s.split("|");const l=[];for(let y=0;y<c.length;y++){const E=c[y].trim();if(!E){if(y===0||y===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(E))return!1;E.charCodeAt(E.length-1)===58?l.push(E.charCodeAt(0)===58?"center":"right"):E.charCodeAt(0)===58?l.push("left"):l.push("")}if(s=Ou(n,e).trim(),s.indexOf("|")===-1||n.sCount[e]-n.blkIndent>=4)return!1;c=yv(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const f=c.length;if(f===0||f!==l.length)return!1;if(t)return!0;const d=n.parentType;n.parentType="table";const p=n.md.block.ruler.getRules("blockquote"),h=n.push("table_open","table",1),m=[e,0];h.map=m;const v=n.push("thead_open","thead",1);v.map=[e,e+1];const b=n.push("tr_open","tr",1);b.map=[e,e+1];for(let y=0;y<c.length;y++){const E=n.push("th_open","th",1);l[y]&&(E.attrs=[["style","text-align:"+l[y]]]);const A=n.push("inline","",0);A.content=c[y].trim(),A.children=[],n.push("th_close","th",-1)}n.push("tr_close","tr",-1),n.push("thead_close","thead",-1);let g,_=0;for(i=e+2;i<r&&!(n.sCount[i]<n.blkIndent);i++){let y=!1;for(let A=0,L=p.length;A<L;A++)if(p[A](n,i,r,!0)){y=!0;break}if(y||(s=Ou(n,i).trim(),!s)||n.sCount[i]-n.blkIndent>=4||(c=yv(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),_+=f-c.length,_>LL))break;if(i===e+2){const A=n.push("tbody_open","tbody",1);A.map=g=[e+2,0]}const E=n.push("tr_open","tr",1);E.map=[i,i+1];for(let A=0;A<f;A++){const L=n.push("td_open","td",1);l[A]&&(L.attrs=[["style","text-align:"+l[A]]]);const C=n.push("inline","",0);C.content=c[A]?c[A].trim():"",C.children=[],n.push("td_close","td",-1)}n.push("tr_close","tr",-1)}return g&&(n.push("tbody_close","tbody",-1),g[1]=i),n.push("table_close","table",-1),m[1]=i,n.parentType=d,n.line=i,!0}function kL(n,e,r){if(n.sCount[e]-n.blkIndent<4)return!1;let t=e+1,i=t;for(;t<r;){if(n.isEmpty(t)){t++;continue}if(n.sCount[t]-n.blkIndent>=4){t++,i=t;continue}break}n.line=i;const o=n.push("code_block","code",0);return o.content=n.getLines(e,i,4+n.blkIndent,!1)+`
`,o.map=[e,n.line],!0}function RL(n,e,r,t){let i=n.bMarks[e]+n.tShift[e],o=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4||i+3>o)return!1;const u=n.src.charCodeAt(i);if(u!==126&&u!==96)return!1;let a=i;i=n.skipChars(i,u);let s=i-a;if(s<3)return!1;const c=n.src.slice(a,i),l=n.src.slice(i,o);if(u===96&&l.indexOf(String.fromCharCode(u))>=0)return!1;if(t)return!0;let f=e,d=!1;for(;f++,!(f>=r||(i=a=n.bMarks[f]+n.tShift[f],o=n.eMarks[f],i<o&&n.sCount[f]<n.blkIndent));)if(n.src.charCodeAt(i)===u&&!(n.sCount[f]-n.blkIndent>=4)&&(i=n.skipChars(i,u),!(i-a<s)&&(i=n.skipSpaces(i),!(i<o)))){d=!0;break}s=n.sCount[e],n.line=f+(d?1:0);const p=n.push("fence","code",0);return p.info=l,p.content=n.getLines(e+1,f,s,!0),p.markup=c,p.map=[e,n.line],!0}function CL(n,e,r,t){let i=n.bMarks[e]+n.tShift[e],o=n.eMarks[e];const u=n.lineMax;if(n.sCount[e]-n.blkIndent>=4||n.src.charCodeAt(i)!==62)return!1;if(t)return!0;const a=[],s=[],c=[],l=[],f=n.md.block.ruler.getRules("blockquote"),d=n.parentType;n.parentType="blockquote";let p=!1,h;for(h=e;h<r;h++){const _=n.sCount[h]<n.blkIndent;if(i=n.bMarks[h]+n.tShift[h],o=n.eMarks[h],i>=o)break;if(n.src.charCodeAt(i++)===62&&!_){let E=n.sCount[h]+1,A,L;n.src.charCodeAt(i)===32?(i++,E++,L=!1,A=!0):n.src.charCodeAt(i)===9?(A=!0,(n.bsCount[h]+E)%4===3?(i++,E++,L=!1):L=!0):A=!1;let C=E;for(a.push(n.bMarks[h]),n.bMarks[h]=i;i<o;){const I=n.src.charCodeAt(i);if(Re(I))I===9?C+=4-(C+n.bsCount[h]+(L?1:0))%4:C++;else break;i++}p=i>=o,s.push(n.bsCount[h]),n.bsCount[h]=n.sCount[h]+1+(A?1:0),c.push(n.sCount[h]),n.sCount[h]=C-E,l.push(n.tShift[h]),n.tShift[h]=i-n.bMarks[h];continue}if(p)break;let y=!1;for(let E=0,A=f.length;E<A;E++)if(f[E](n,h,r,!0)){y=!0;break}if(y){n.lineMax=h,n.blkIndent!==0&&(a.push(n.bMarks[h]),s.push(n.bsCount[h]),l.push(n.tShift[h]),c.push(n.sCount[h]),n.sCount[h]-=n.blkIndent);break}a.push(n.bMarks[h]),s.push(n.bsCount[h]),l.push(n.tShift[h]),c.push(n.sCount[h]),n.sCount[h]=-1}const m=n.blkIndent;n.blkIndent=0;const v=n.push("blockquote_open","blockquote",1);v.markup=">";const b=[e,0];v.map=b,n.md.block.tokenize(n,e,h);const g=n.push("blockquote_close","blockquote",-1);g.markup=">",n.lineMax=u,n.parentType=d,b[1]=n.line;for(let _=0;_<l.length;_++)n.bMarks[_+e]=a[_],n.tShift[_+e]=l[_],n.sCount[_+e]=c[_],n.bsCount[_+e]=s[_];return n.blkIndent=m,!0}function ML(n,e,r,t){const i=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4)return!1;let o=n.bMarks[e]+n.tShift[e];const u=n.src.charCodeAt(o++);if(u!==42&&u!==45&&u!==95)return!1;let a=1;for(;o<i;){const c=n.src.charCodeAt(o++);if(c!==u&&!Re(c))return!1;c===u&&a++}if(a<3)return!1;if(t)return!0;n.line=e+1;const s=n.push("hr","hr",0);return s.map=[e,n.line],s.markup=Array(a+1).join(String.fromCharCode(u)),!0}function Ev(n,e){const r=n.eMarks[e];let t=n.bMarks[e]+n.tShift[e];const i=n.src.charCodeAt(t++);if(i!==42&&i!==45&&i!==43)return-1;if(t<r){const o=n.src.charCodeAt(t);if(!Re(o))return-1}return t}function wv(n,e){const r=n.bMarks[e]+n.tShift[e],t=n.eMarks[e];let i=r;if(i+1>=t)return-1;let o=n.src.charCodeAt(i++);if(o<48||o>57)return-1;for(;;){if(i>=t)return-1;if(o=n.src.charCodeAt(i++),o>=48&&o<=57){if(i-r>=10)return-1;continue}if(o===41||o===46)break;return-1}return i<t&&(o=n.src.charCodeAt(i),!Re(o))?-1:i}function NL(n,e){const r=n.level+2;for(let t=e+2,i=n.tokens.length-2;t<i;t++)n.tokens[t].level===r&&n.tokens[t].type==="paragraph_open"&&(n.tokens[t+2].hidden=!0,n.tokens[t].hidden=!0,t+=2)}function TL(n,e,r,t){let i,o,u,a,s=e,c=!0;if(n.sCount[s]-n.blkIndent>=4||n.listIndent>=0&&n.sCount[s]-n.listIndent>=4&&n.sCount[s]<n.blkIndent)return!1;let l=!1;t&&n.parentType==="paragraph"&&n.sCount[s]>=n.blkIndent&&(l=!0);let f,d,p;if((p=wv(n,s))>=0){if(f=!0,u=n.bMarks[s]+n.tShift[s],d=Number(n.src.slice(u,p-1)),l&&d!==1)return!1}else if((p=Ev(n,s))>=0)f=!1;else return!1;if(l&&n.skipSpaces(p)>=n.eMarks[s])return!1;if(t)return!0;const h=n.src.charCodeAt(p-1),m=n.tokens.length;f?(a=n.push("ordered_list_open","ol",1),d!==1&&(a.attrs=[["start",d]])):a=n.push("bullet_list_open","ul",1);const v=[s,0];a.map=v,a.markup=String.fromCharCode(h);let b=!1;const g=n.md.block.ruler.getRules("list"),_=n.parentType;for(n.parentType="list";s<r;){o=p,i=n.eMarks[s];const y=n.sCount[s]+p-(n.bMarks[s]+n.tShift[s]);let E=y;for(;o<i;){const F=n.src.charCodeAt(o);if(F===9)E+=4-(E+n.bsCount[s])%4;else if(F===32)E++;else break;o++}const A=o;let L;A>=i?L=1:L=E-y,L>4&&(L=1);const C=y+L;a=n.push("list_item_open","li",1),a.markup=String.fromCharCode(h);const I=[s,0];a.map=I,f&&(a.info=n.src.slice(u,p-1));const S=n.tight,w=n.tShift[s],$=n.sCount[s],k=n.listIndent;if(n.listIndent=n.blkIndent,n.blkIndent=C,n.tight=!0,n.tShift[s]=A-n.bMarks[s],n.sCount[s]=E,A>=i&&n.isEmpty(s+1)?n.line=Math.min(n.line+2,r):n.md.block.tokenize(n,s,r,!0),(!n.tight||b)&&(c=!1),b=n.line-s>1&&n.isEmpty(n.line-1),n.blkIndent=n.listIndent,n.listIndent=k,n.tShift[s]=w,n.sCount[s]=$,n.tight=S,a=n.push("list_item_close","li",-1),a.markup=String.fromCharCode(h),s=n.line,I[1]=s,s>=r||n.sCount[s]<n.blkIndent||n.sCount[s]-n.blkIndent>=4)break;let R=!1;for(let F=0,T=g.length;F<T;F++)if(g[F](n,s,r,!0)){R=!0;break}if(R)break;if(f){if(p=wv(n,s),p<0)break;u=n.bMarks[s]+n.tShift[s]}else if(p=Ev(n,s),p<0)break;if(h!==n.src.charCodeAt(p-1))break}return f?a=n.push("ordered_list_close","ol",-1):a=n.push("bullet_list_close","ul",-1),a.markup=String.fromCharCode(h),v[1]=s,n.line=s,n.parentType=_,c&&NL(n,m),!0}function qL(n,e,r,t){let i=n.bMarks[e]+n.tShift[e],o=n.eMarks[e],u=e+1;if(n.sCount[e]-n.blkIndent>=4||n.src.charCodeAt(i)!==91)return!1;function a(g){const _=n.lineMax;if(g>=_||n.isEmpty(g))return null;let y=!1;if(n.sCount[g]-n.blkIndent>3&&(y=!0),n.sCount[g]<0&&(y=!0),!y){const L=n.md.block.ruler.getRules("reference"),C=n.parentType;n.parentType="reference";let I=!1;for(let S=0,w=L.length;S<w;S++)if(L[S](n,g,_,!0)){I=!0;break}if(n.parentType=C,I)return null}const E=n.bMarks[g]+n.tShift[g],A=n.eMarks[g];return n.src.slice(E,A+1)}let s=n.src.slice(i,o+1);o=s.length;let c=-1;for(i=1;i<o;i++){const g=s.charCodeAt(i);if(g===91)return!1;if(g===93){c=i;break}else if(g===10){const _=a(u);_!==null&&(s+=_,o=s.length,u++)}else if(g===92&&(i++,i<o&&s.charCodeAt(i)===10)){const _=a(u);_!==null&&(s+=_,o=s.length,u++)}}if(c<0||s.charCodeAt(c+1)!==58)return!1;for(i=c+2;i<o;i++){const g=s.charCodeAt(i);if(g===10){const _=a(u);_!==null&&(s+=_,o=s.length,u++)}else if(!Re(g))break}const l=n.md.helpers.parseLinkDestination(s,i,o);if(!l.ok)return!1;const f=n.md.normalizeLink(l.str);if(!n.md.validateLink(f))return!1;i=l.pos;const d=i,p=u,h=i;for(;i<o;i++){const g=s.charCodeAt(i);if(g===10){const _=a(u);_!==null&&(s+=_,o=s.length,u++)}else if(!Re(g))break}let m=n.md.helpers.parseLinkTitle(s,i,o);for(;m.can_continue;){const g=a(u);if(g===null)break;s+=g,i=o,o=s.length,u++,m=n.md.helpers.parseLinkTitle(s,i,o,m)}let v;for(i<o&&h!==i&&m.ok?(v=m.str,i=m.pos):(v="",i=d,u=p);i<o;){const g=s.charCodeAt(i);if(!Re(g))break;i++}if(i<o&&s.charCodeAt(i)!==10&&v)for(v="",i=d,u=p;i<o;){const g=s.charCodeAt(i);if(!Re(g))break;i++}if(i<o&&s.charCodeAt(i)!==10)return!1;const b=Bo(s.slice(1,c));return b?(t||(typeof n.env.references>"u"&&(n.env.references={}),typeof n.env.references[b]>"u"&&(n.env.references[b]={title:v,href:f}),n.line=u),!0):!1}const FL=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],OL="[a-zA-Z_:][a-zA-Z0-9:._-]*",PL="[^\"'=<>`\\x00-\\x20]+",DL="'[^']*'",xL='"[^"]*"',BL="(?:"+PL+"|"+DL+"|"+xL+")",HL="(?:\\s+"+OL+"(?:\\s*=\\s*"+BL+")?)",g7="<[A-Za-z][A-Za-z0-9\\-]*"+HL+"*\\s*\\/?>",_7="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",UL="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",jL="<[?][\\s\\S]*?[?]>",WL="<![A-Za-z][^>]*>",GL="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",VL=new RegExp("^(?:"+g7+"|"+_7+"|"+UL+"|"+jL+"|"+WL+"|"+GL+")"),XL=new RegExp("^(?:"+g7+"|"+_7+")"),Dr=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+FL.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(XL.source+"\\s*$"),/^$/,!1]];function YL(n,e,r,t){let i=n.bMarks[e]+n.tShift[e],o=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4||!n.md.options.html||n.src.charCodeAt(i)!==60)return!1;let u=n.src.slice(i,o),a=0;for(;a<Dr.length&&!Dr[a][0].test(u);a++);if(a===Dr.length)return!1;if(t)return Dr[a][2];let s=e+1;if(!Dr[a][1].test(u)){for(;s<r&&!(n.sCount[s]<n.blkIndent);s++)if(i=n.bMarks[s]+n.tShift[s],o=n.eMarks[s],u=n.src.slice(i,o),Dr[a][1].test(u)){u.length!==0&&s++;break}}n.line=s;const c=n.push("html_block","",0);return c.map=[e,s],c.content=n.getLines(e,s,n.blkIndent,!0),!0}function KL(n,e,r,t){let i=n.bMarks[e]+n.tShift[e],o=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4)return!1;let u=n.src.charCodeAt(i);if(u!==35||i>=o)return!1;let a=1;for(u=n.src.charCodeAt(++i);u===35&&i<o&&a<=6;)a++,u=n.src.charCodeAt(++i);if(a>6||i<o&&!Re(u))return!1;if(t)return!0;o=n.skipSpacesBack(o,i);const s=n.skipCharsBack(o,35,i);s>i&&Re(n.src.charCodeAt(s-1))&&(o=s),n.line=e+1;const c=n.push("heading_open","h"+String(a),1);c.markup="########".slice(0,a),c.map=[e,n.line];const l=n.push("inline","",0);l.content=n.src.slice(i,o).trim(),l.map=[e,n.line],l.children=[];const f=n.push("heading_close","h"+String(a),-1);return f.markup="########".slice(0,a),!0}function JL(n,e,r){const t=n.md.block.ruler.getRules("paragraph");if(n.sCount[e]-n.blkIndent>=4)return!1;const i=n.parentType;n.parentType="paragraph";let o=0,u,a=e+1;for(;a<r&&!n.isEmpty(a);a++){if(n.sCount[a]-n.blkIndent>3)continue;if(n.sCount[a]>=n.blkIndent){let p=n.bMarks[a]+n.tShift[a];const h=n.eMarks[a];if(p<h&&(u=n.src.charCodeAt(p),(u===45||u===61)&&(p=n.skipChars(p,u),p=n.skipSpaces(p),p>=h))){o=u===61?1:2;break}}if(n.sCount[a]<0)continue;let d=!1;for(let p=0,h=t.length;p<h;p++)if(t[p](n,a,r,!0)){d=!0;break}if(d)break}if(!o)return!1;const s=n.getLines(e,a,n.blkIndent,!1).trim();n.line=a+1;const c=n.push("heading_open","h"+String(o),1);c.markup=String.fromCharCode(u),c.map=[e,n.line];const l=n.push("inline","",0);l.content=s,l.map=[e,n.line-1],l.children=[];const f=n.push("heading_close","h"+String(o),-1);return f.markup=String.fromCharCode(u),n.parentType=i,!0}function zL(n,e,r){const t=n.md.block.ruler.getRules("paragraph"),i=n.parentType;let o=e+1;for(n.parentType="paragraph";o<r&&!n.isEmpty(o);o++){if(n.sCount[o]-n.blkIndent>3||n.sCount[o]<0)continue;let c=!1;for(let l=0,f=t.length;l<f;l++)if(t[l](n,o,r,!0)){c=!0;break}if(c)break}const u=n.getLines(e,o,n.blkIndent,!1).trim();n.line=o;const a=n.push("paragraph_open","p",1);a.map=[e,n.line];const s=n.push("inline","",0);return s.content=u,s.map=[e,n.line],s.children=[],n.push("paragraph_close","p",-1),n.parentType=i,!0}const Ai=[["table",IL,["paragraph","reference"]],["code",kL],["fence",RL,["paragraph","reference","blockquote","list"]],["blockquote",CL,["paragraph","reference","blockquote","list"]],["hr",ML,["paragraph","reference","blockquote","list"]],["list",TL,["paragraph","reference","blockquote"]],["reference",qL],["html_block",YL,["paragraph","reference","blockquote"]],["heading",KL,["paragraph","reference","blockquote"]],["lheading",JL],["paragraph",zL]];function Ho(){this.ruler=new ln;for(let n=0;n<Ai.length;n++)this.ruler.push(Ai[n][0],Ai[n][1],{alt:(Ai[n][2]||[]).slice()})}Ho.prototype.tokenize=function(n,e,r){const t=this.ruler.getRules(""),i=t.length,o=n.md.options.maxNesting;let u=e,a=!1;for(;u<r&&(n.line=u=n.skipEmptyLines(u),!(u>=r||n.sCount[u]<n.blkIndent));){if(n.level>=o){n.line=r;break}const s=n.line;let c=!1;for(let l=0;l<i;l++)if(c=t[l](n,u,r,!1),c){if(s>=n.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");n.tight=!a,n.isEmpty(n.line-1)&&(a=!0),u=n.line,u<r&&n.isEmpty(u)&&(a=!0,u++,n.line=u)}};Ho.prototype.parse=function(n,e,r,t){if(!n)return;const i=new this.State(n,e,r,t);this.tokenize(i,i.line,i.lineMax)};Ho.prototype.State=Gn;function Qt(n,e,r,t){this.src=n,this.env=r,this.md=e,this.tokens=t,this.tokens_meta=Array(t.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Qt.prototype.pushPending=function(){const n=new Cn("text","",0);return n.content=this.pending,n.level=this.pendingLevel,this.tokens.push(n),this.pending="",n};Qt.prototype.push=function(n,e,r){this.pending&&this.pushPending();const t=new Cn(n,e,r);let i=null;return r<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),t.level=this.level,r>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(t),this.tokens_meta.push(i),t};Qt.prototype.scanDelims=function(n,e){const r=this.posMax,t=this.src.charCodeAt(n),i=n>0?this.src.charCodeAt(n-1):32;let o=n;for(;o<r&&this.src.charCodeAt(o)===t;)o++;const u=o-n,a=o<r?this.src.charCodeAt(o):32,s=xt(i)||Dt(String.fromCharCode(i)),c=xt(a)||Dt(String.fromCharCode(a)),l=Pt(i),f=Pt(a),d=!f&&(!c||l||s),p=!l&&(!s||f||c);return{can_open:d&&(e||!p||s),can_close:p&&(e||!d||c),length:u}};Qt.prototype.Token=Cn;function QL(n){switch(n){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function ZL(n,e){let r=n.pos;for(;r<n.posMax&&!QL(n.src.charCodeAt(r));)r++;return r===n.pos?!1:(e||(n.pending+=n.src.slice(n.pos,r)),n.pos=r,!0)}const eI=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function nI(n,e){if(!n.md.options.linkify||n.linkLevel>0)return!1;const r=n.pos,t=n.posMax;if(r+3>t||n.src.charCodeAt(r)!==58||n.src.charCodeAt(r+1)!==47||n.src.charCodeAt(r+2)!==47)return!1;const i=n.pending.match(eI);if(!i)return!1;const o=i[1],u=n.md.linkify.matchAtStart(n.src.slice(r-o.length));if(!u)return!1;let a=u.url;if(a.length<=o.length)return!1;let s=a.length;for(;s>0&&a.charCodeAt(s-1)===42;)s--;s!==a.length&&(a=a.slice(0,s));const c=n.md.normalizeLink(a);if(!n.md.validateLink(c))return!1;if(!e){n.pending=n.pending.slice(0,-o.length);const l=n.push("link_open","a",1);l.attrs=[["href",c]],l.markup="linkify",l.info="auto";const f=n.push("text","",0);f.content=n.md.normalizeLinkText(a);const d=n.push("link_close","a",-1);d.markup="linkify",d.info="auto"}return n.pos+=a.length-o.length,!0}function rI(n,e){let r=n.pos;if(n.src.charCodeAt(r)!==10)return!1;const t=n.pending.length-1,i=n.posMax;if(!e)if(t>=0&&n.pending.charCodeAt(t)===32)if(t>=1&&n.pending.charCodeAt(t-1)===32){let o=t-1;for(;o>=1&&n.pending.charCodeAt(o-1)===32;)o--;n.pending=n.pending.slice(0,o),n.push("hardbreak","br",0)}else n.pending=n.pending.slice(0,-1),n.push("softbreak","br",0);else n.push("softbreak","br",0);for(r++;r<i&&Re(n.src.charCodeAt(r));)r++;return n.pos=r,!0}const i2=[];for(let n=0;n<256;n++)i2.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(n){i2[n.charCodeAt(0)]=1});function tI(n,e){let r=n.pos;const t=n.posMax;if(n.src.charCodeAt(r)!==92||(r++,r>=t))return!1;let i=n.src.charCodeAt(r);if(i===10){for(e||n.push("hardbreak","br",0),r++;r<t&&(i=n.src.charCodeAt(r),!!Re(i));)r++;return n.pos=r,!0}let o=n.src[r];if(i>=55296&&i<=56319&&r+1<t){const a=n.src.charCodeAt(r+1);a>=56320&&a<=57343&&(o+=n.src[r+1],r++)}const u="\\"+o;if(!e){const a=n.push("text_special","",0);i<256&&i2[i]!==0?a.content=o:a.content=u,a.markup=u,a.info="escape"}return n.pos=r+1,!0}function iI(n,e){let r=n.pos;if(n.src.charCodeAt(r)!==96)return!1;const i=r;r++;const o=n.posMax;for(;r<o&&n.src.charCodeAt(r)===96;)r++;const u=n.src.slice(i,r),a=u.length;if(n.backticksScanned&&(n.backticks[a]||0)<=i)return e||(n.pending+=u),n.pos+=a,!0;let s=r,c;for(;(c=n.src.indexOf("`",s))!==-1;){for(s=c+1;s<o&&n.src.charCodeAt(s)===96;)s++;const l=s-c;if(l===a){if(!e){const f=n.push("code_inline","code",0);f.markup=u,f.content=n.src.slice(r,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return n.pos=s,!0}n.backticks[l]=c}return n.backticksScanned=!0,e||(n.pending+=u),n.pos+=a,!0}function oI(n,e){const r=n.pos,t=n.src.charCodeAt(r);if(e||t!==126)return!1;const i=n.scanDelims(n.pos,!0);let o=i.length;const u=String.fromCharCode(t);if(o<2)return!1;let a;o%2&&(a=n.push("text","",0),a.content=u,o--);for(let s=0;s<o;s+=2)a=n.push("text","",0),a.content=u+u,n.delimiters.push({marker:t,length:0,token:n.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return n.pos+=i.length,!0}function $v(n,e){let r;const t=[],i=e.length;for(let o=0;o<i;o++){const u=e[o];if(u.marker!==126||u.end===-1)continue;const a=e[u.end];r=n.tokens[u.token],r.type="s_open",r.tag="s",r.nesting=1,r.markup="~~",r.content="",r=n.tokens[a.token],r.type="s_close",r.tag="s",r.nesting=-1,r.markup="~~",r.content="",n.tokens[a.token-1].type==="text"&&n.tokens[a.token-1].content==="~"&&t.push(a.token-1)}for(;t.length;){const o=t.pop();let u=o+1;for(;u<n.tokens.length&&n.tokens[u].type==="s_close";)u++;u--,o!==u&&(r=n.tokens[u],n.tokens[u]=n.tokens[o],n.tokens[o]=r)}}function uI(n){const e=n.tokens_meta,r=n.tokens_meta.length;$v(n,n.delimiters);for(let t=0;t<r;t++)e[t]&&e[t].delimiters&&$v(n,e[t].delimiters)}const y7={tokenize:oI,postProcess:uI};function aI(n,e){const r=n.pos,t=n.src.charCodeAt(r);if(e||t!==95&&t!==42)return!1;const i=n.scanDelims(n.pos,t===42);for(let o=0;o<i.length;o++){const u=n.push("text","",0);u.content=String.fromCharCode(t),n.delimiters.push({marker:t,length:i.length,token:n.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return n.pos+=i.length,!0}function Sv(n,e){const r=e.length;for(let t=r-1;t>=0;t--){const i=e[t];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const o=e[i.end],u=t>0&&e[t-1].end===i.end+1&&e[t-1].marker===i.marker&&e[t-1].token===i.token-1&&e[i.end+1].token===o.token+1,a=String.fromCharCode(i.marker),s=n.tokens[i.token];s.type=u?"strong_open":"em_open",s.tag=u?"strong":"em",s.nesting=1,s.markup=u?a+a:a,s.content="";const c=n.tokens[o.token];c.type=u?"strong_close":"em_close",c.tag=u?"strong":"em",c.nesting=-1,c.markup=u?a+a:a,c.content="",u&&(n.tokens[e[t-1].token].content="",n.tokens[e[i.end+1].token].content="",t--)}}function sI(n){const e=n.tokens_meta,r=n.tokens_meta.length;Sv(n,n.delimiters);for(let t=0;t<r;t++)e[t]&&e[t].delimiters&&Sv(n,e[t].delimiters)}const E7={tokenize:aI,postProcess:sI};function cI(n,e){let r,t,i,o,u="",a="",s=n.pos,c=!0;if(n.src.charCodeAt(n.pos)!==91)return!1;const l=n.pos,f=n.posMax,d=n.pos+1,p=n.md.helpers.parseLinkLabel(n,n.pos,!0);if(p<0)return!1;let h=p+1;if(h<f&&n.src.charCodeAt(h)===40){for(c=!1,h++;h<f&&(r=n.src.charCodeAt(h),!(!Re(r)&&r!==10));h++);if(h>=f)return!1;if(s=h,i=n.md.helpers.parseLinkDestination(n.src,h,n.posMax),i.ok){for(u=n.md.normalizeLink(i.str),n.md.validateLink(u)?h=i.pos:u="",s=h;h<f&&(r=n.src.charCodeAt(h),!(!Re(r)&&r!==10));h++);if(i=n.md.helpers.parseLinkTitle(n.src,h,n.posMax),h<f&&s!==h&&i.ok)for(a=i.str,h=i.pos;h<f&&(r=n.src.charCodeAt(h),!(!Re(r)&&r!==10));h++);}(h>=f||n.src.charCodeAt(h)!==41)&&(c=!0),h++}if(c){if(typeof n.env.references>"u")return!1;if(h<f&&n.src.charCodeAt(h)===91?(s=h+1,h=n.md.helpers.parseLinkLabel(n,h),h>=0?t=n.src.slice(s,h++):h=p+1):h=p+1,t||(t=n.src.slice(d,p)),o=n.env.references[Bo(t)],!o)return n.pos=l,!1;u=o.href,a=o.title}if(!e){n.pos=d,n.posMax=p;const m=n.push("link_open","a",1),v=[["href",u]];m.attrs=v,a&&v.push(["title",a]),n.linkLevel++,n.md.inline.tokenize(n),n.linkLevel--,n.push("link_close","a",-1)}return n.pos=h,n.posMax=f,!0}function lI(n,e){let r,t,i,o,u,a,s,c,l="";const f=n.pos,d=n.posMax;if(n.src.charCodeAt(n.pos)!==33||n.src.charCodeAt(n.pos+1)!==91)return!1;const p=n.pos+2,h=n.md.helpers.parseLinkLabel(n,n.pos+1,!1);if(h<0)return!1;if(o=h+1,o<d&&n.src.charCodeAt(o)===40){for(o++;o<d&&(r=n.src.charCodeAt(o),!(!Re(r)&&r!==10));o++);if(o>=d)return!1;for(c=o,a=n.md.helpers.parseLinkDestination(n.src,o,n.posMax),a.ok&&(l=n.md.normalizeLink(a.str),n.md.validateLink(l)?o=a.pos:l=""),c=o;o<d&&(r=n.src.charCodeAt(o),!(!Re(r)&&r!==10));o++);if(a=n.md.helpers.parseLinkTitle(n.src,o,n.posMax),o<d&&c!==o&&a.ok)for(s=a.str,o=a.pos;o<d&&(r=n.src.charCodeAt(o),!(!Re(r)&&r!==10));o++);else s="";if(o>=d||n.src.charCodeAt(o)!==41)return n.pos=f,!1;o++}else{if(typeof n.env.references>"u")return!1;if(o<d&&n.src.charCodeAt(o)===91?(c=o+1,o=n.md.helpers.parseLinkLabel(n,o),o>=0?i=n.src.slice(c,o++):o=h+1):o=h+1,i||(i=n.src.slice(p,h)),u=n.env.references[Bo(i)],!u)return n.pos=f,!1;l=u.href,s=u.title}if(!e){t=n.src.slice(p,h);const m=[];n.md.inline.parse(t,n.md,n.env,m);const v=n.push("image","img",0),b=[["src",l],["alt",""]];v.attrs=b,v.children=m,v.content=t,s&&b.push(["title",s])}return n.pos=o,n.posMax=d,!0}const fI=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,dI=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function pI(n,e){let r=n.pos;if(n.src.charCodeAt(r)!==60)return!1;const t=n.pos,i=n.posMax;for(;;){if(++r>=i)return!1;const u=n.src.charCodeAt(r);if(u===60)return!1;if(u===62)break}const o=n.src.slice(t+1,r);if(dI.test(o)){const u=n.md.normalizeLink(o);if(!n.md.validateLink(u))return!1;if(!e){const a=n.push("link_open","a",1);a.attrs=[["href",u]],a.markup="autolink",a.info="auto";const s=n.push("text","",0);s.content=n.md.normalizeLinkText(o);const c=n.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return n.pos+=o.length+2,!0}if(fI.test(o)){const u=n.md.normalizeLink("mailto:"+o);if(!n.md.validateLink(u))return!1;if(!e){const a=n.push("link_open","a",1);a.attrs=[["href",u]],a.markup="autolink",a.info="auto";const s=n.push("text","",0);s.content=n.md.normalizeLinkText(o);const c=n.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return n.pos+=o.length+2,!0}return!1}function hI(n){return/^<a[>\s]/i.test(n)}function vI(n){return/^<\/a\s*>/i.test(n)}function mI(n){const e=n|32;return e>=97&&e<=122}function bI(n,e){if(!n.md.options.html)return!1;const r=n.posMax,t=n.pos;if(n.src.charCodeAt(t)!==60||t+2>=r)return!1;const i=n.src.charCodeAt(t+1);if(i!==33&&i!==63&&i!==47&&!mI(i))return!1;const o=n.src.slice(t).match(VL);if(!o)return!1;if(!e){const u=n.push("html_inline","",0);u.content=o[0],hI(u.content)&&n.linkLevel++,vI(u.content)&&n.linkLevel--}return n.pos+=o[0].length,!0}const gI=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,_I=/^&([a-z][a-z0-9]{1,31});/i;function yI(n,e){const r=n.pos,t=n.posMax;if(n.src.charCodeAt(r)!==38||r+1>=t)return!1;if(n.src.charCodeAt(r+1)===35){const o=n.src.slice(r).match(gI);if(o){if(!e){const u=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),a=n.push("text_special","",0);a.content=r2(u)?no(u):no(65533),a.markup=o[0],a.info="entity"}return n.pos+=o[0].length,!0}}else{const o=n.src.slice(r).match(_I);if(o){const u=p7(o[0]);if(u!==o[0]){if(!e){const a=n.push("text_special","",0);a.content=u,a.markup=o[0],a.info="entity"}return n.pos+=o[0].length,!0}}}return!1}function Av(n){const e={},r=n.length;if(!r)return;let t=0,i=-2;const o=[];for(let u=0;u<r;u++){const a=n[u];if(o.push(0),(n[t].marker!==a.marker||i!==a.token-1)&&(t=u),i=a.token,a.length=a.length||0,!a.close)continue;e.hasOwnProperty(a.marker)||(e[a.marker]=[-1,-1,-1,-1,-1,-1]);const s=e[a.marker][(a.open?3:0)+a.length%3];let c=t-o[t]-1,l=c;for(;c>s;c-=o[c]+1){const f=n[c];if(f.marker===a.marker&&f.open&&f.end<0){let d=!1;if((f.close||a.open)&&(f.length+a.length)%3===0&&(f.length%3!==0||a.length%3!==0)&&(d=!0),!d){const p=c>0&&!n[c-1].open?o[c-1]+1:0;o[u]=u-c+p,o[c]=p,a.open=!1,f.end=u,f.close=!1,l=-1,i=-2;break}}}l!==-1&&(e[a.marker][(a.open?3:0)+(a.length||0)%3]=l)}}function EI(n){const e=n.tokens_meta,r=n.tokens_meta.length;Av(n.delimiters);for(let t=0;t<r;t++)e[t]&&e[t].delimiters&&Av(e[t].delimiters)}function wI(n){let e,r,t=0;const i=n.tokens,o=n.tokens.length;for(e=r=0;e<o;e++)i[e].nesting<0&&t--,i[e].level=t,i[e].nesting>0&&t++,i[e].type==="text"&&e+1<o&&i[e+1].type==="text"?i[e+1].content=i[e].content+i[e+1].content:(e!==r&&(i[r]=i[e]),r++);e!==r&&(i.length=r)}const Pu=[["text",ZL],["linkify",nI],["newline",rI],["escape",tI],["backticks",iI],["strikethrough",y7.tokenize],["emphasis",E7.tokenize],["link",cI],["image",lI],["autolink",pI],["html_inline",bI],["entity",yI]],Du=[["balance_pairs",EI],["strikethrough",y7.postProcess],["emphasis",E7.postProcess],["fragments_join",wI]];function Zt(){this.ruler=new ln;for(let n=0;n<Pu.length;n++)this.ruler.push(Pu[n][0],Pu[n][1]);this.ruler2=new ln;for(let n=0;n<Du.length;n++)this.ruler2.push(Du[n][0],Du[n][1])}Zt.prototype.skipToken=function(n){const e=n.pos,r=this.ruler.getRules(""),t=r.length,i=n.md.options.maxNesting,o=n.cache;if(typeof o[e]<"u"){n.pos=o[e];return}let u=!1;if(n.level<i){for(let a=0;a<t;a++)if(n.level++,u=r[a](n,!0),n.level--,u){if(e>=n.pos)throw new Error("inline rule didn't increment state.pos");break}}else n.pos=n.posMax;u||n.pos++,o[e]=n.pos};Zt.prototype.tokenize=function(n){const e=this.ruler.getRules(""),r=e.length,t=n.posMax,i=n.md.options.maxNesting;for(;n.pos<t;){const o=n.pos;let u=!1;if(n.level<i){for(let a=0;a<r;a++)if(u=e[a](n,!1),u){if(o>=n.pos)throw new Error("inline rule didn't increment state.pos");break}}if(u){if(n.pos>=t)break;continue}n.pending+=n.src[n.pos++]}n.pending&&n.pushPending()};Zt.prototype.parse=function(n,e,r,t){const i=new this.State(n,e,r,t);this.tokenize(i);const o=this.ruler2.getRules(""),u=o.length;for(let a=0;a<u;a++)o[a](i)};Zt.prototype.State=Qt;function $I(n){const e={};n=n||{},e.src_Any=s7.source,e.src_Cc=c7.source,e.src_Z=f7.source,e.src_P=e2.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");const r="[><｜]";return e.src_pseudo_letter="(?:(?!"+r+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+r+"|"+e.src_ZPCc+")(?!"+(n["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+r+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(n["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+r+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}function Sp(n){return Array.prototype.slice.call(arguments,1).forEach(function(r){r&&Object.keys(r).forEach(function(t){n[t]=r[t]})}),n}function Uo(n){return Object.prototype.toString.call(n)}function SI(n){return Uo(n)==="[object String]"}function AI(n){return Uo(n)==="[object Object]"}function LI(n){return Uo(n)==="[object RegExp]"}function Lv(n){return Uo(n)==="[object Function]"}function II(n){return n.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const w7={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function kI(n){return Object.keys(n||{}).reduce(function(e,r){return e||w7.hasOwnProperty(r)},!1)}const RI={"http:":{validate:function(n,e,r){const t=n.slice(e);return r.re.http||(r.re.http=new RegExp("^\\/\\/"+r.re.src_auth+r.re.src_host_port_strict+r.re.src_path,"i")),r.re.http.test(t)?t.match(r.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(n,e,r){const t=n.slice(e);return r.re.no_http||(r.re.no_http=new RegExp("^"+r.re.src_auth+"(?:localhost|(?:(?:"+r.re.src_domain+")\\.)+"+r.re.src_domain_root+")"+r.re.src_port+r.re.src_host_terminator+r.re.src_path,"i")),r.re.no_http.test(t)?e>=3&&n[e-3]===":"||e>=3&&n[e-3]==="/"?0:t.match(r.re.no_http)[0].length:0}},"mailto:":{validate:function(n,e,r){const t=n.slice(e);return r.re.mailto||(r.re.mailto=new RegExp("^"+r.re.src_email_name+"@"+r.re.src_host_strict,"i")),r.re.mailto.test(t)?t.match(r.re.mailto)[0].length:0}}},CI="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",MI="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function NI(n){n.__index__=-1,n.__text_cache__=""}function TI(n){return function(e,r){const t=e.slice(r);return n.test(t)?t.match(n)[0].length:0}}function Iv(){return function(n,e){e.normalize(n)}}function ro(n){const e=n.re=$I(n.__opts__),r=n.__tlds__.slice();n.onCompile(),n.__tlds_replaced__||r.push(CI),r.push(e.src_xn),e.src_tlds=r.join("|");function t(a){return a.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(t(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(t(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(t(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(t(e.tpl_host_fuzzy_test),"i");const i=[];n.__compiled__={};function o(a,s){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+s)}Object.keys(n.__schemas__).forEach(function(a){const s=n.__schemas__[a];if(s===null)return;const c={validate:null,link:null};if(n.__compiled__[a]=c,AI(s)){LI(s.validate)?c.validate=TI(s.validate):Lv(s.validate)?c.validate=s.validate:o(a,s),Lv(s.normalize)?c.normalize=s.normalize:s.normalize?o(a,s):c.normalize=Iv();return}if(SI(s)){i.push(a);return}o(a,s)}),i.forEach(function(a){n.__compiled__[n.__schemas__[a]]&&(n.__compiled__[a].validate=n.__compiled__[n.__schemas__[a]].validate,n.__compiled__[a].normalize=n.__compiled__[n.__schemas__[a]].normalize)}),n.__compiled__[""]={validate:null,normalize:Iv()};const u=Object.keys(n.__compiled__).filter(function(a){return a.length>0&&n.__compiled__[a]}).map(II).join("|");n.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+u+")","i"),n.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+u+")","ig"),n.re.schema_at_start=RegExp("^"+n.re.schema_search.source,"i"),n.re.pretest=RegExp("("+n.re.schema_test.source+")|("+n.re.host_fuzzy_test.source+")|@","i"),NI(n)}function qI(n,e){const r=n.__index__,t=n.__last_index__,i=n.__text_cache__.slice(r,t);this.schema=n.__schema__.toLowerCase(),this.index=r+e,this.lastIndex=t+e,this.raw=i,this.text=i,this.url=i}function Ap(n,e){const r=new qI(n,e);return n.__compiled__[r.schema].normalize(r,n),r}function gn(n,e){if(!(this instanceof gn))return new gn(n,e);e||kI(n)&&(e=n,n={}),this.__opts__=Sp({},w7,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Sp({},RI,n),this.__compiled__={},this.__tlds__=MI,this.__tlds_replaced__=!1,this.re={},ro(this)}gn.prototype.add=function(e,r){return this.__schemas__[e]=r,ro(this),this};gn.prototype.set=function(e){return this.__opts__=Sp(this.__opts__,e),this};gn.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;let r,t,i,o,u,a,s,c,l;if(this.re.schema_test.test(e)){for(s=this.re.schema_search,s.lastIndex=0;(r=s.exec(e))!==null;)if(o=this.testSchemaAt(e,r[2],s.lastIndex),o){this.__schema__=r[2],this.__index__=r.index+r[1].length,this.__last_index__=r.index+r[0].length+o;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=e.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(t=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(u=t.index+t[1].length,(this.__index__<0||u<this.__index__)&&(this.__schema__="",this.__index__=u,this.__last_index__=t.index+t[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(l=e.indexOf("@"),l>=0&&(i=e.match(this.re.email_fuzzy))!==null&&(u=i.index+i[1].length,a=i.index+i[0].length,(this.__index__<0||u<this.__index__||u===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=u,this.__last_index__=a))),this.__index__>=0};gn.prototype.pretest=function(e){return this.re.pretest.test(e)};gn.prototype.testSchemaAt=function(e,r,t){return this.__compiled__[r.toLowerCase()]?this.__compiled__[r.toLowerCase()].validate(e,t,this):0};gn.prototype.match=function(e){const r=[];let t=0;this.__index__>=0&&this.__text_cache__===e&&(r.push(Ap(this,t)),t=this.__last_index__);let i=t?e.slice(t):e;for(;this.test(i);)r.push(Ap(this,t)),i=i.slice(this.__last_index__),t+=this.__last_index__;return r.length?r:null};gn.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;const r=this.re.schema_at_start.exec(e);if(!r)return null;const t=this.testSchemaAt(e,r[2],r[0].length);return t?(this.__schema__=r[2],this.__index__=r.index+r[1].length,this.__last_index__=r.index+r[0].length+t,Ap(this,0)):null};gn.prototype.tlds=function(e,r){return e=Array.isArray(e)?e:[e],r?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(t,i,o){return t!==o[i-1]}).reverse(),ro(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,ro(this),this)};gn.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};gn.prototype.onCompile=function(){};const jr=2147483647,xn=36,o2=1,Bt=26,FI=38,OI=700,$7=72,S7=128,A7="-",PI=/^xn--/,DI=/[^\0-\x7F]/,xI=/[\x2E\u3002\uFF0E\uFF61]/g,BI={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},xu=xn-o2,Bn=Math.floor,Bu=String.fromCharCode;function ar(n){throw new RangeError(BI[n])}function HI(n,e){const r=[];let t=n.length;for(;t--;)r[t]=e(n[t]);return r}function L7(n,e){const r=n.split("@");let t="";r.length>1&&(t=r[0]+"@",n=r[1]),n=n.replace(xI,".");const i=n.split("."),o=HI(i,e).join(".");return t+o}function I7(n){const e=[];let r=0;const t=n.length;for(;r<t;){const i=n.charCodeAt(r++);if(i>=55296&&i<=56319&&r<t){const o=n.charCodeAt(r++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),r--)}else e.push(i)}return e}const UI=n=>String.fromCodePoint(...n),jI=function(n){return n>=48&&n<58?26+(n-48):n>=65&&n<91?n-65:n>=97&&n<123?n-97:xn},kv=function(n,e){return n+22+75*(n<26)-((e!=0)<<5)},k7=function(n,e,r){let t=0;for(n=r?Bn(n/OI):n>>1,n+=Bn(n/e);n>xu*Bt>>1;t+=xn)n=Bn(n/xu);return Bn(t+(xu+1)*n/(n+FI))},R7=function(n){const e=[],r=n.length;let t=0,i=S7,o=$7,u=n.lastIndexOf(A7);u<0&&(u=0);for(let a=0;a<u;++a)n.charCodeAt(a)>=128&&ar("not-basic"),e.push(n.charCodeAt(a));for(let a=u>0?u+1:0;a<r;){const s=t;for(let l=1,f=xn;;f+=xn){a>=r&&ar("invalid-input");const d=jI(n.charCodeAt(a++));d>=xn&&ar("invalid-input"),d>Bn((jr-t)/l)&&ar("overflow"),t+=d*l;const p=f<=o?o2:f>=o+Bt?Bt:f-o;if(d<p)break;const h=xn-p;l>Bn(jr/h)&&ar("overflow"),l*=h}const c=e.length+1;o=k7(t-s,c,s==0),Bn(t/c)>jr-i&&ar("overflow"),i+=Bn(t/c),t%=c,e.splice(t++,0,i)}return String.fromCodePoint(...e)},C7=function(n){const e=[];n=I7(n);const r=n.length;let t=S7,i=0,o=$7;for(const s of n)s<128&&e.push(Bu(s));const u=e.length;let a=u;for(u&&e.push(A7);a<r;){let s=jr;for(const l of n)l>=t&&l<s&&(s=l);const c=a+1;s-t>Bn((jr-i)/c)&&ar("overflow"),i+=(s-t)*c,t=s;for(const l of n)if(l<t&&++i>jr&&ar("overflow"),l===t){let f=i;for(let d=xn;;d+=xn){const p=d<=o?o2:d>=o+Bt?Bt:d-o;if(f<p)break;const h=f-p,m=xn-p;e.push(Bu(kv(p+h%m,0))),f=Bn(h/m)}e.push(Bu(kv(f,0))),o=k7(i,c,a===u),i=0,++a}++i,++t}return e.join("")},WI=function(n){return L7(n,function(e){return PI.test(e)?R7(e.slice(4).toLowerCase()):e})},GI=function(n){return L7(n,function(e){return DI.test(e)?"xn--"+C7(e):e})},M7={version:"2.3.1",ucs2:{decode:I7,encode:UI},decode:R7,encode:C7,toASCII:GI,toUnicode:WI},VI={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},XI={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},YI={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},KI={default:VI,zero:XI,commonmark:YI},JI=/^(vbscript|javascript|file|data):/,zI=/^data:image\/(gif|png|jpeg|webp);/;function QI(n){const e=n.trim().toLowerCase();return JI.test(e)?zI.test(e):!0}const N7=["http:","https:","mailto:"];function ZI(n){const e=Zp(n,!0);if(e.hostname&&(!e.protocol||N7.indexOf(e.protocol)>=0))try{e.hostname=M7.toASCII(e.hostname)}catch{}return zt(Qp(e))}function ek(n){const e=Zp(n,!0);if(e.hostname&&(!e.protocol||N7.indexOf(e.protocol)>=0))try{e.hostname=M7.toUnicode(e.hostname)}catch{}return Vr(Qp(e),Vr.defaultChars+"%")}function fn(n,e){if(!(this instanceof fn))return new fn(n,e);e||n2(n)||(e=n||{},n="default"),this.inline=new Zt,this.block=new Ho,this.core=new t2,this.renderer=new tt,this.linkify=new gn,this.validateLink=QI,this.normalizeLink=ZI,this.normalizeLinkText=ek,this.utils=rL,this.helpers=xo({},uL),this.options={},this.configure(n),e&&this.set(e)}fn.prototype.set=function(n){return xo(this.options,n),this};fn.prototype.configure=function(n){const e=this;if(n2(n)){const r=n;if(n=KI[r],!n)throw new Error('Wrong `markdown-it` preset "'+r+'", check name')}if(!n)throw new Error("Wrong `markdown-it` preset, can't be empty");return n.options&&e.set(n.options),n.components&&Object.keys(n.components).forEach(function(r){n.components[r].rules&&e[r].ruler.enableOnly(n.components[r].rules),n.components[r].rules2&&e[r].ruler2.enableOnly(n.components[r].rules2)}),this};fn.prototype.enable=function(n,e){let r=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(i){r=r.concat(this[i].ruler.enable(n,!0))},this),r=r.concat(this.inline.ruler2.enable(n,!0));const t=n.filter(function(i){return r.indexOf(i)<0});if(t.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+t);return this};fn.prototype.disable=function(n,e){let r=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(i){r=r.concat(this[i].ruler.disable(n,!0))},this),r=r.concat(this.inline.ruler2.disable(n,!0));const t=n.filter(function(i){return r.indexOf(i)<0});if(t.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+t);return this};fn.prototype.use=function(n){const e=[this].concat(Array.prototype.slice.call(arguments,1));return n.apply(n,e),this};fn.prototype.parse=function(n,e){if(typeof n!="string")throw new Error("Input data should be a String");const r=new this.core.State(n,this,e);return this.core.process(r),r.tokens};fn.prototype.render=function(n,e){return e=e||{},this.renderer.render(this.parse(n,e),this.options,e)};fn.prototype.parseInline=function(n,e){const r=new this.core.State(n,this,e);return r.inlineMode=!0,this.core.process(r),r.tokens};fn.prototype.renderInline=function(n,e){return e=e||{},this.renderer.render(this.parseInline(n,e),this.options,e)};const T7="text-paragraph",u2="text-blockquote",q7="text-list",F7="text-ordered-list",O7="text-list-item",nk="prose-link",rk=["paragraph","list","blockquote","newline","emphasis","html_inline","text","balance_pairs","fragments_join","text_join"],tk="prose_link",Rv=new RegExp(J9.source,"y");function ik(n,e){if(n.src.charCodeAt(n.pos)!==91)return!1;Rv.lastIndex=n.pos;const r=Rv.exec(n.src);if(r===null)return!1;const[t,i,o]=r;if(i===void 0||o===void 0)throw new Error("prose markdown: MD_LINK_RE lost a capture group");if(!e){const u=n.push("link_open","a",1);u.attrs=[["href",o]];const a=n.push("text","",0);a.content=i,n.push("link_close","a",-1)}return n.pos+=t.length,!0}const P7=new fn("zero",{html:!0,breaks:!0,linkify:!1}).enable([...rk]);P7.inline.ruler.push(tk,ik);function ok(n,e){const r=P7.parse(n,{});return uk(r,e)}function uk(n,e){return ak(n,e),Fi(n,0,n.length,!0)}function ak(n,e){for(const r of n)if(r.type==="inline"&&r.children)for(const t of r.children)t.type==="text"&&(t.type="html_inline",t.content=t.content===""?"":e(t.content))}function fr(n,e){const r=n[e];if(r===void 0)throw new Error(`prose markdown: token index ${e} out of range`);return r}function Li(n,e,r){let t=0;for(let i=e;i<r;i++)if(t+=fr(n,i).nesting,t===0)return i;throw new Error(`prose markdown: unclosed ${fr(n,e).type} at token ${e}`)}function sk(n,e,r){return r-e===3&&fr(n,e).type==="paragraph_open"&&fr(n,e+1).type==="inline"&&fr(n,e+2).type==="paragraph_close"}function Fi(n,e,r,t){if(t&&sk(n,e,r))return Cv(fr(n,e+1));let i="",o=e;for(;o<r;){const u=fr(n,o);switch(u.type){case"paragraph_open":{const a=Li(n,o,r),s=fr(n,o+1);if(a!==o+2||s.type!=="inline")throw new Error("prose markdown: paragraph without a single inline child");const c=Cv(s);i+=u.hidden?c:`<span class="${T7}">${c}</span>`,o=a+1;break}case"blockquote_open":{const a=Li(n,o,r);i+=`<span class="${u2}">`+Fi(n,o+1,a,!0)+"</span>",o=a+1;break}case"bullet_list_open":case"ordered_list_open":{const a=Li(n,o,r);i+=ck(u)+Fi(n,o+1,a,!1)+"</span>",o=a+1;break}case"list_item_open":{const a=Li(n,o,r);i+=`<span class="${O7}">`+Fi(n,o+1,a,!1)+"</span>",o=a+1;break}default:throw new Error(`prose markdown: unsupported block token '${u.type}'`)}}return i}function ck(n){if(n.type==="bullet_list_open")return`<span class="${q7}">`;const e=n.attrGet("start"),r=e===null?"":` style="counter-reset: list-item ${Number(e)-1}"`;return`<span class="${F7}"${r}>`}function Cv(n){let e="";for(const r of n.children??[])switch(r.type){case"html_inline":e+=r.content;break;case"softbreak":case"hardbreak":e+="<br>";break;case"strong_open":e+="<strong>";break;case"strong_close":e+="</strong>";break;case"em_open":case"em_close":e+=r.markup;break;case"link_open":{const t=r.attrGet("href")??"";e+=`<a class="${nk}" href="${se(t)}" target="_blank" rel="noopener">`;break}case"link_close":e+="</a>";break;default:throw new Error(`prose markdown: unsupported inline token '${r.type}'`)}return e}const lk="inline-note-ref",D7="inline-note-popover-trigger",x7="data-popover-inline-body";function fk(n){return encodeURIComponent(n)}function dk(n){return decodeURIComponent(n)}function pk(n){return av.lastIndex=0,n.replace(av,(e,r)=>{const t=se(fk(r));return`<sup class="${lk}"><button type="button" class="${D7}" ${x7}="${t}" aria-label="Show note" aria-expanded="false"></button></sup>`})}const hk=2,vk="&nbsp;".repeat(hk),B7="framing-slot",H7="data-framing-anchor";function ei(n,e){return n.jprobInstance.framing_static_anchor_ids().has(e)?`<div class="${B7}" ${H7}="${se(e)}"></div>`:""}const U7="bare-id-label";function j7(n,e){return n.showBareIds??!1?`<span class="${U7}">${K(e)}</span>`:""}function mk(n,e){return`<span class="${U7}" id="${se(e)}">${K(n)}</span>`}const bk="❝",It="srcquote-widget",Oi="srcquote-glyph",gk="srcquote-popover",_k="srcquote-attribution",yk="srcquotes-inline",Ek={atStart:"",atEnd:""};function W7(n,e){return Ae(n.defn,e)+`<span class="${_k}">— ${K(n.attribution)}</span>`}function wk(n){const e=se(G9({kind:"sourcequote",sourcequoteIds:n}));return`<span class="${It}"><button class="${Oi}" type="button" aria-expanded="false" ${Ji}="${e}" aria-label="Source quotes">${bk}</button></span>`}function $k(n,e){return n.map(r=>W7(r,e)).join("")}function Sk(n,e){const r=n.map(t=>W7(t,e));return`<span class="${yk}">${r.join("")}</span>`}function Rn(n,e){if(!n||n.length===0)return Ek;if(e.srcquotesInlined??!1){const r=e.jprobInstance.resolve_srcquotes(n);return{atStart:"",atEnd:Sk(r,e)}}return{atStart:wk(n),atEnd:""}}const Ak=!0;function Rt(n,e,r){var t;return((t=n==null?void 0:n[e])==null?void 0:t[r])??Ak}function Ae(n,e){const r=dA(n,e.jprobInstance),t=hA(e.jprobInstance),i=e.popoverAllRefs?{popoverAllRefs:!0}:void 0;return ok(r,u=>{let a=vA(u,t);return a=jS(a,e.refLookup,i,e.unresolvedRefs),a=pk(a),a})}function Lk(n,e){return n.get_isym(e).longname??e}function Ik(n){return n.startsWith("isym:")?n.slice(5):n}function kk(n,e){return n.get_isym(e).kind}function Rk(n,e){const r=nA[kk(n,e)];let t=`${e} : ${r}`;const i=Lk(n,e);return i&&e!==i&&(t+=`${vk}(aka ${i})`),t}function Ck(n){if(!n.args||n.args.length===0)return n.id.slice(11);const e=n.id.slice(11),r=n.args.map(t=>`<i>${typeof t=="string"?t:t.name}</i>`);return`${e}(${r.join(", ")})`}function Mk(n){const e=[];for(const r of n.jprobInstance.definedSym){if(r.always_inline)continue;const t=n.jprobInstance.get_display_definedSym_or_none(r.id);if(!t)continue;const o=`defsym-${r.id.slice(11)}`,u=Ck(r),a=Ae(t,n),c=[`<h3>${`${u} ≔ ${a}`}</h3>`],l=Rn(r.srcquotes,n);r.defn?c.push(`<p class="definition">${l.atStart}${Ae(r.defn,n)}${l.atEnd}</p>`):(l.atStart||l.atEnd)&&c.push(`<p class="definition">${l.atStart}${l.atEnd}</p>`),c.push(ei(n,r.id)),e.push(`<div class="defsym-card" id="${o}">${c.join("")}</div>`)}return e.join("")}function Nk(n){const e=Vp(n.jprobInstance);if(!e.length)return"";const r=[];for(const t of e){const i=Rn(n.jprobInstance.get_textdefn(t.id).srcquotes,n);r.push(`<dt id="${t.anchorId}">${t.displayTerm}</dt><dd>${i.atStart}${Ae(t.defn,n)}${i.atEnd}${ei(n,`textdefn:${t.bareName}`)}</dd>`)}return`<dl class="definitions">${r.join("")}</dl>`}function Tk(n){const e=n.jprobInstance.isym_entries();if(!e.length)return"";const r=[];for(const t of e){const i=Ik(t.id);if(n.jprobInstance.can_consolidate_isym_svar(`isym:${i}`))continue;const o=[];o.push(`<h3>${Rk(n.jprobInstance,i)}</h3>`);const u=Rn(t.srcquotes,n);o.push(`<p class="definition">${u.atStart}${Ae(t.defn,n)}${u.atEnd}</p>`);const a=(t.pos??[]).filter(f=>cv(f.classification,n.showTypical)),s=(t.neg??[]).filter(f=>cv(f.classification,n.showTypical)),c=Rt(n.exampleFoldState,i,"pos"),l=Rt(n.exampleFoldState,i,"neg");if(a.length>0||s.length>0){const f=[];a.length>0&&f.push(`<button class="ex-btn pos${c?" active":""}" data-isym="${i}" data-type="pos" title="Satisfying examples">+</button>`),s.length>0&&f.push(`<button class="ex-btn neg${l?" active":""}" data-isym="${i}" data-type="neg" title="Falsifying examples">&minus;</button>`),o.push(`<div class="example-controls">${f.join("")}</div>`)}if(a.length>0){const f=a.map(d=>{const p=d.alias?` id="ex-${d.alias}"`:"",h=n.showExampleClassification?`<span class="classification">${d.classification.charAt(0).toUpperCase()+d.classification.slice(1)}:</span> `:"",m=Rn(d.srcquotes,n);return`<li${p}>${h}${m.atStart}${Ae(d.defn,n)}${m.atEnd}</li>`});o.push(`<div class="examples pos${c?" visible":""}"><p>Satisfying examples:</p><ul>${f.join("")}</ul></div>`)}if(s.length>0){const f=s.map(d=>{const p=d.alias?` id="ex-${d.alias}"`:"",h=n.showExampleClassification?`<span class="classification">${d.classification.charAt(0).toUpperCase()+d.classification.slice(1)}:</span> `:"",m=Rn(d.srcquotes,n);return`<li${p}>${h}${m.atStart}${Ae(d.defn,n)}${m.atEnd}</li>`});o.push(`<div class="examples neg${l?" visible":""}"><p>Falsifying examples:</p><ul>${f.join("")}</ul></div>`)}o.push(ei(n,`isym:${i}`)),r.push(`<div class="isym-card" id="isym-${i}">${o.join("")}</div>`)}return r.join("")}function Mv(n,{simplifying:e}){const r=[];for(const t of n.jprobInstance.get_axioms_in_display_section(e)){const i=n.jprobInstance.get_display_ax(t.id);if(!i)continue;const o=Ot(t.id),u=t.defn?`<div class="ax-defn">${Ae(t.defn,n)}</div>`:"",a=ei(n,t.id),s=Rn(t.srcquotes,n);r.push(`<div class="ax-card" id="${Xp}${o}">`+j7(n,o)+`<div class="ax-expr">${s.atStart}${Ae(i,n)}</div>${u}${s.atEnd}${a}</div>`)}return r.length===0?"":`<div class="axioms">${r.join("")}</div>`}function qk(n){const e=[],r=z9(n.jprobInstance),t=aA(n.jprobInstance,r);for(const i of r){const o=t.get(i),u=Po(i);e.push(`<div class="formula" id="form-${u}">`+j7(n,u)+Ae(o,n)+ei(n,i)+"</div>")}return e.join("")}const dn="0",Yr="1",G7=["plaincode","plainnum"];function V7(n,e){return e==="plainnum"?n.adhocPlainnumEntries:n.adhocPlaincodeEntries}function Fk(n,e,r){return e==="plainnum"?n.plainnum[r.resultIndex]:n.plaincode[r.resultIndex]}function Ok(n){const e=Object.keys(n.reasoning_response).some(u=>n.reasoning_response[u]!==""),r=n.misc_response!=="",t=n.verified_code_input!==void 0&&n.verified_code_input!=="",i=n.trial_choices!==void 0&&Object.keys(n.trial_choices).length>0;if(!e&&!r&&!t&&!i)return[];const o={};return t&&(o.source_code=n.verified_code_input),e&&(o.reasoning=n.reasoning_response),r&&(o.misc=n.misc_response),i&&(o.trial_choices=n.trial_choices),[o]}function jo(n){return{...n,model:"user",version:"",effort:null,pool_id:"",prompt_file_basename:"yours-plaincode",trial_metadata:Ok(n)}}function Pk(n){const e=[],r=[];for(let t=0;t<n.length;t++){const i=n[t];for(let o=0;o<i.plainnum.length;o++)e.push({presetIndex:t,resultIndex:o});for(let o=0;o<i.plaincode.length;o++)r.push({presetIndex:t,resultIndex:o})}return{plainnum:e,plaincode:r}}function Dk(n,e,r){const t=n.name_or_pseudoname,o=n.plainnum.length>0&&n.plaincode.length>0?` [${e}]`:"",u=r.prompt_file_basename?` (${r.prompt_file_basename})`:"";return`${t}${o} ${r.label}${u}`}const xk=["prompt","plainnum"];function Bk(n){return n.filter(e=>xk.some(r=>e.prompt_file_basename.startsWith(r)))}function Hk(n){return n.filter(e=>e.prompt_file_basename.startsWith("plaincode"))}function Uk(n){return n.filter(e=>e.prompt_file_basename.startsWith("richcode"))}function jk(n){const e=new Map,r=(o,u,a,s,c)=>`${o}\0${u}\0${a??""}\0${s}\0${c??""}`,t=o=>({model:o.model,version:o.version,effort:o.effort,label:o.label,pool_id:o.pool_id,aggregate:o.aggregate,plainnumIndex:null,plaincodeIndex:null,richcodeIndex:null,availableModes:[]});for(let o=0;o<n.plainnumResults.length;o++){const u=n.plainnumResults[o],a=r(u.model,u.version,u.effort,u.pool_id),s=e.get(a);if(s)s.plainnumIndex===null&&(s.plainnumIndex=o,s.availableModes=["plainnum",...s.availableModes.filter(c=>c!=="plainnum")]);else{const c=t(u);c.plainnumIndex=o,c.availableModes=["plainnum"],e.set(a,c)}}for(let o=0;o<n.plaincodeResults.length;o++){const u=n.plaincodeResults[o],a=r(u.model,u.version,u.effort,u.pool_id,u.aggregate),s=e.get(a);if(s)s.plaincodeIndex===null&&(s.plaincodeIndex=o,s.availableModes.includes("plaincode")||s.availableModes.push("plaincode"));else{const c=t(u);c.plaincodeIndex=o,c.availableModes=["plaincode"],e.set(a,c)}}for(let o=0;o<n.richcodeResults.length;o++){const u=n.richcodeResults[o],a=r(u.model,u.version,u.effort,u.pool_id,u.aggregate),s=e.get(a);if(s)s.richcodeIndex===null&&(s.richcodeIndex=o,s.availableModes.includes("richcode")||s.availableModes.push("richcode"));else{const c=t(u);c.richcodeIndex=o,c.availableModes=["richcode"],e.set(a,c)}}const i=o=>o.aggregate==="all"?0:o.aggregate==="model_size"?1:o.aggregate==="model_size__version"?2:3;return Array.from(e.values()).sort((o,u)=>i(o)-i(u))}function Wk(n){return n.effort?`${n.label} ${n.effort}`:n.label}function Gk(n){const e=new Map,r=n.map(Wk);for(const t of r)e.set(t,(e.get(t)??0)+1);return r.map((t,i)=>e.get(t)>1?`${t} [${n[i].pool_id}]`:t)}function ve(n){const e=n.indexOf(":");return e===-1?{source:n,index:-1}:{source:n.slice(0,e),index:parseInt(n.slice(e+1))}}function Ze(n){return n.slice(0,n.indexOf("-"))}function yn(n){return n.slice(n.indexOf("-")+1)}function Pe(n){return Ze(ve(n).source)==="yours"}function X7(n){return Ze(n)==="adhoc"}function Vk(n){return Ze(n)==="metho"}function en(n,e){var i,o;const{source:r,index:t}=ve(n);if(Ze(r)==="yours")return null;if(r==="adhoc-plainnum"){const u=e.adhocPlainnumEntries[t];return u?((i=e.adhocPresets[u.presetIndex])==null?void 0:i.plainnum[u.resultIndex])??null:null}if(r==="adhoc-plaincode"){const u=e.adhocPlaincodeEntries[t];if(!u)return null;const a=(o=e.adhocPresets[u.presetIndex])==null?void 0:o.plaincode[u.resultIndex];return a?jo(a):null}return r==="metho-plainnum"?e.plainnumResults[t]??null:r==="metho-plaincode"?e.plaincodeResults[t]??null:r==="metho-richcode"?e.richcodeResults[t]??null:null}function Y7(n,e){var o;const{source:r,index:t}=ve(n);if(r!=="adhoc-plaincode")return null;const i=e.adhocPlaincodeEntries[t];return i?((o=e.adhocPresets[i.presetIndex])==null?void 0:o.plaincode[i.resultIndex])??null:null}function Xk(n,e){const r=en(n,e);if(!Pe(n)&&r===null)throw new Error(`Chosen result ${JSON.stringify(n)} is missing from the loaded data`)}function Yk(n,e){const{source:r,index:t}=ve(n);if(r==="adhoc-plainnum"){const i=e.adhocPlainnumEntries[t];return i?e.adhocPresets[i.presetIndex]??null:null}if(r==="adhoc-plaincode"){const i=e.adhocPlaincodeEntries[t];return i?e.adhocPresets[i.presetIndex]??null:null}return null}function K7(n,e){if(!e)return{point:!0,bounds:!0,sample:!0};const{source:r}=ve(n),i=yn(r)!=="plainnum";i&&s2(e);const o=i?e.cparam_combos.flatMap(a=>a.trials):e.trials,u=a=>o.some(s=>Object.keys(s[a]).length>0);return{point:u("point"),bounds:(!i||a2(e))&&u("bounds"),sample:u("sample")}}function a2(n){return n.count===1}function s2(n){for(const[e,r]of n.cparam_combos.entries())if(r.trials.length===0||r.trials.length>n.count)throw new Error(`Code result cparam combo ${e} carries ${r.trials.length} trials; expected between 1 and the record trial count ${n.count}`)}function c2(n,e,r){if(e==="point"){const i=n.point[r];return i===void 0?"":String(i)}if(e==="bounds"){const i=n.bounds[r];return i?`${i[0]} ${i[1]}`:""}const t=n.sample[r];return t?typeof t=="string"?t:t.map(([i,o])=>`(${i} ${o})`).join(" "):""}function J7(n,e){return["point","bounds","sample"].filter(r=>e.length>0&&e.every(t=>c2(n,r,t)!==""))}function Kk(n,e,r){return r.map(t=>c2(n,e,t)).join(`
`)}function Jk(n,e,r,t){const{source:i}=ve(n);return i==="adhoc-plainnum"||i==="metho-plainnum"?e.trials.map(u=>t.map(a=>c2(u,r,a))):[]}function Kr(n,e,r){const t=[];for(const i of n){if(r==="code"&&Sr(i.id))continue;const o=Fe(i.id);if(!Object.prototype.hasOwnProperty.call(e,o))throw new Error(`Cannot compute optionDictKey: missing value for ${i.id}`);t.push([i.id,e[o]])}return t.sort(([i],[o])=>i<o?-1:i>o?1:0),JSON.stringify(t)}const z7="yours_code";function Wo(n,e){return`${z7}_${n}_${e}`}function Q7(n,e){const r={};for(const t of n.get_aopts()){const i=Fe(t.id);i in e&&(r[i]=e[i])}return{aid:n.aid,label:"code",aopts:r,count:1,cparam_names:[],cparam_combos:[],raw_code_input:"",reasoning_response:{},misc_response:"",trial_choices:n.get_enum_tchoice_defaults()}}function zk(n,e,r){const t=Zk(Wo(n.aid,e));return t||Q7(n,r)}function ni(n,e,r,t){t.timestamp||(t.timestamp=new Date().toISOString()),t.content_hash=u7("code",e,t.aopts,void 0),eR(Wo(n.aid,r),t)}function l2(n){const e=`${z7}_${n}_`,r=[];for(let t=0;t<localStorage.length;t++){const i=localStorage.key(t);if(i===null||!i.startsWith(e))continue;const o=localStorage.getItem(i);if(o===null)continue;let u;try{u=JSON.parse(o)}catch{continue}r.push({codeOptionDictKey:i.slice(e.length),record:u})}return r.sort((t,i)=>{const o=t.record.timestamp??"";return(i.record.timestamp??"").localeCompare(o)}),r}function Qk(n,e){localStorage.removeItem(Wo(n,e))}function Zk(n){try{const e=localStorage.getItem(n);return e===null?null:JSON.parse(e)}catch{return null}}function eR(n,e){localStorage.setItem(n,JSON.stringify(e))}function Go(n,e){const r={};for(const t of n){const i=Fe(t.id),o=e[i]??t.default_value;r[i]=Jp(t,o)}return r}function nR(n,e){const r={...e};for(const t of n){if(!("input_type"in t)||t.input_type!=="MultiStringFromSet")continue;const i=Fe(t.id),o=e[i];if(!Array.isArray(o)||!o.every(s=>typeof s=="string")||!Array.isArray(t.allowed_values))continue;const u=new Set(t.allowed_values),a=o.filter(s=>!u.has(s));a.length!==0&&(console.warn(`Ignoring MultiStringFromSet values no longer allowed for ${t.id}: `+a.join(", ")),r[i]=o.filter(s=>u.has(s)))}return r}const Z7="aopt",ey="ui",rR="yours";function to(n,e){return`${n}_${e}`}function Vo(n,e){return`${rR}_${n}_${e}`}const tR={whose:"yours-plainnum",lastYoursWhose:"yours-plainnum",lastAdhocWhose:"",lastMethoWhose:"",exampleFoldState:{},framingFoldState:{},jointDependenceEditorOpen:!0,srcquotesInlinedOverride:null,cparamPinned:{},cparamValues:{},codeSweepMode:"average",codePlotTargetKind:"formula",codePlotFormulaId:"",codePlotRawResponseName:"",modelEffortPinned:!0,modelEffortSweepScope:null,assumptionTrialIndex:0,presetQueryModeFilter:"all"};function ny(n){const e=cn();return{...structuredClone(tR),inputMode:e.inputMode,probAsOdds:e.probAsOdds,symbolMnames:e.symbolMnames,popoverAllRefs:e.popoverAllRefs,persistentPopovers:e.persistentPopovers,showExampleClassification:e.showExampleClassification,showFramingNotes:e.showFramingNotes,framingNoteAbbrev:e.framingNoteAbbrev}}function ry(n,e){const r={},t={};for(const i of n){const o=Fe(i.id);o in e&&(Sr(i.id)?t[o]=e[o]:r[o]=e[o])}return{aopts:r,cparam_values:t}}function ty(n,e){const{aopts:r,cparam_values:t}=ry(n.get_options(),e);return{aid:n.aid,label:"",prompt_file_basename:"",aopts:r,cparam_values:t,count:1,trials:[{point:{},bounds:{},sample:{}}],precomputed:{},raw_input:{},trial_choices:n.get_enum_tchoice_defaults()}}function iR(n){const e=Go(n.get_options(),{}),r=Kr(n.get_options(),e,"plainnum"),t=Kr(n.get_options(),e,"code");return{optionValues:e,plainnumOptionDictKey:r,codeOptionDictKey:t,ui:ny(),yoursRecord:ty(n,e),yoursCodeRecord:Q7(n,e)}}function oR(n,e,r){return{...n,[e]:{pos:Rt(n,e,"pos"),neg:Rt(n,e,"neg"),[r]:!Rt(n,e,r)}}}function uR(n){if(n==="yours")return"yours-plainnum";const e=n.indexOf(":");if(e===-1)return n;const r=n.slice(0,e),t=n.slice(e);return r==="plainnum"?"metho-plainnum"+t:r==="plaincode"?"metho-plaincode"+t:r==="richcode"?"metho-richcode"+t:n}function iy(n,e){return!e&&n==="yours-plaincode"?"yours-plainnum":n}function aR(n,e,r){const t=Ht(Vo(n.aid,e));return t||ty(n,r)}function sR(n){const e=n.config.localStorage_prefix,r=n.get_options(),t=iR(n),i=Ht(to(e,Z7)),o=i?Go(r,nR(r,i)):t.optionValues,u=Kr(r,o,"plainnum"),a=Kr(r,o,"code"),s=ny(),c=Ht(to(e,ey));c&&typeof c.whose=="string"&&(c.whose=uR(c.whose));let l=c?{...s,...c}:{...s};l={...l,whose:iy(l.whose,n.has_cparams())},(l.whose==="yours-plainnum"||l.whose==="yours-plaincode")&&(l={...l,lastYoursWhose:l.whose});const f=Ze(ve(l.whose).source);f==="adhoc"?l={...l,lastAdhocWhose:l.whose}:f==="metho"&&(l={...l,lastMethoWhose:l.whose});const d=aR(n,u,o),p=zk(n,a,o);return{optionValues:o,plainnumOptionDictKey:u,codeOptionDictKey:a,ui:l,yoursRecord:d,yoursCodeRecord:p}}function f2(n,e){const r=n.localStorage_prefix;p2(to(r,Z7),e)}function qe(n,e){const r=n.localStorage_prefix;p2(to(r,ey),e)}function d2(n,e,r,t){t.timestamp||(t.timestamp=new Date().toISOString()),t.content_hash=u7("plainnum",e,t.aopts,t.cparam_values??{}),p2(Vo(n.aid,r),t)}function cR(n,e,r){const{aopts:t,cparam_values:i}=ry(e.get_options(),r);return{...n,aopts:t,cparam_values:i,raw_input:{...n.raw_input??{}},trial_choices:{...n.trial_choices??{}},lloads_draft:n.lloads_draft===void 0?void 0:structuredClone(n.lloads_draft),trials:n.trials.map(o=>({point:{...o.point},bounds:{...o.bounds},sample:{...o.sample},lloads:o.lloads===void 0?void 0:structuredClone(o.lloads)})),timestamp:void 0}}function lR(n,e,r){const t={};for(const i of e.get_aopts()){const o=Fe(i.id);o in r&&(t[o]=r[o])}return{...n,aopts:t,reasoning_response:{...n.reasoning_response},trial_choices:{...n.trial_choices??{}},cparam_combos:[],cparam_names:[],verified_code_input:void 0,timestamp:void 0}}function Nv(n,e,r,t){const i={...n.optionValues,[r]:t},o=Kr(e.get_options(),i,"plainnum"),u=Kr(e.get_options(),i,"code");let a=n.yoursRecord;o!==n.plainnumOptionDictKey&&(a=Ht(Vo(e.aid,o))??cR(n.yoursRecord,e,i));let s=n.yoursCodeRecord;return u!==n.codeOptionDictKey&&(s=Ht(Wo(e.aid,u))??lR(n.yoursCodeRecord,e,i)),(o!==n.plainnumOptionDictKey||u!==n.codeOptionDictKey)&&f2(e.config,i),{optionValues:i,plainnumOptionDictKey:o,codeOptionDictKey:u,ui:n.ui,yoursRecord:a,yoursCodeRecord:s}}function fR(){const n={};for(let e=0;e<localStorage.length;e++){const r=localStorage.key(e);n[r]=localStorage.getItem(r)}return n}function dR(n){localStorage.clear();for(const[e,r]of Object.entries(n))localStorage.setItem(e,String(r))}function pR(){const n=new URLSearchParams(window.location.search),e=n.get("_preload");if(!e)return;try{const t=atob(e),i=JSON.parse(t);for(const[o,u]of Object.entries(i))localStorage.setItem(o,String(u))}catch(t){alert(`Failed to load preload state: ${t}`)}n.delete("_preload");const r=n.toString()?`${window.location.pathname}?${n}`:window.location.pathname;history.replaceState(null,"",r)}function Ht(n){try{const e=localStorage.getItem(n);return e===null?null:JSON.parse(e)}catch{return null}}function p2(n,e){localStorage.setItem(n,JSON.stringify(e))}const io=8,oy=1e-9;function oo(n){return n===null?"null":Array.isArray(n)?"array":typeof n}function Lp(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function hR(n,e,r){const t=`lloads.latents[${e}]`;if(!Lp(n))return`${t}: expected an object, got ${oo(n)}`;for(const o of["name","description"]){const u=n[o];if(typeof u!="string"||u.trim()==="")return`${t}.${o}: expected a non-empty string, got ${JSON.stringify(u)}`}const i=n.loadings;if(!Lp(i))return`${t}.loadings: expected an object, got ${oo(i)}`;if(Object.keys(i).length===0)return`${t}.loadings: empty — name the subjective variables this latent applies to, with 0 for any you considered and declined`;for(const[o,u]of Object.entries(i)){if(!r.has(o))return`${t}.loadings: '${o}' is not one of the subjective variables this jprob samples (${[...r].sort().join(", ")}), so a loading on it would have no effect`;if(typeof u!="number")return`${t}.loadings['${o}']: expected a number, got ${JSON.stringify(u)}`;if(!Number.isFinite(u))return`${t}.loadings['${o}']: ${u} is not finite`;if(u<-1||u>1)return`${t}.loadings['${o}']: ${u} not in [-1, 1]`}return null}function Xo(n,e,r=[]){if(n==null)return null;if(!Lp(n))return`lloads: expected an object, got ${oo(n)}`;const t=Object.keys(n).filter(c=>c!=="latents").sort();if(t.length>0)return`lloads: unexpected key(s) ${JSON.stringify(t)}`;const i=n.latents;if(!Array.isArray(i))return`lloads.latents: expected a list, got ${oo(i)}`;if(i.length>io)return`lloads.latents: ${i.length} latents exceeds the cap of ${io}`;const o=new Set(e);for(const[c,l]of i.entries()){const f=hR(l,c,o);if(f!==null)return f}const u=new Map;for(const c of i)for(const[l,f]of Object.entries(c.loadings))u.set(l,(u.get(l)??0)+f**2);for(const[c,l]of[...u.entries()].sort((f,d)=>f[0]<d[0]?-1:1))if(l>1+oy)return`lloads: loading budget exceeded for '${c}' — the sum of squared loadings across latents is ${Tv(l)}, over the limit of 1 by ${Tv(l-1)}; no residual variance is left for it`;const a=new Set(r),s=[...u.entries()].filter(([c,l])=>l>0&&a.has(c)).map(([c])=>c).sort();return s.length>0?`lloads: ${s.map(c=>`'${c}'`).join(", ")} ${s.length===1?"has":"have"} a point-mass distribution in this response, so a loading on it has no effect; remove the loading or give it a non-degenerate distribution`:null}function Tv(n){return String(Number(n.toPrecision(6)))}function Yo(n){return n==null?!1:n.latents.some(e=>Object.values(e.loadings).some(r=>r!==0))}function vR(n,e,r=1){if(!(r>=0&&r<=1))throw new Error(`lloads dependence strength ${r} not in [0, 1]`);const t=Xo(n,e);if(t!==null)throw new Error(t);const i=(n==null?void 0:n.latents)??[],o=Math.sqrt(r),u=new Map(e.map((c,l)=>[c,l])),a=e.map(()=>i.map(()=>0));for(const[c,l]of i.entries())for(const[f,d]of Object.entries(l.loadings))a[u.get(f)][c]=d*o;const s=a.map(c=>Math.sqrt(Math.max(0,1-c.reduce((l,f)=>l+f*f,0))));return{loadingMatrix:a,residualSds:s}}function qv(n,e="",r=""){return{name:e,description:r,loadings:Object.fromEntries(n.map(t=>[t,0]))}}function uy(n,e){const r=new Set(e);return{latents:n.latents.map(t=>{const i=Object.entries(t.loadings).filter(([o,u])=>!r.has(o)&&u!==0);return i.length>0&&console.warn(`joint-dependence draft: dropping loadings on subjective variable(s) ${i.map(([o])=>o).join(", ")}, which this jprob no longer samples`),{...t,loadings:Object.fromEntries(e.map(o=>[o,t.loadings[o]??0]))}})}}function ay(n,e){return n==null?{latents:[]}:uy({latents:n.latents.map(r=>({name:r.name,description:r.description,loadings:{...r.loadings}}))},e)}function mR(n){return n.latents.length===0?null:{latents:n.latents.map(e=>({name:e.name.trim(),description:e.description.trim(),loadings:Object.fromEntries(Object.entries(e.loadings).filter(r=>r[1]!==null))}))}}function sy(n,e){return Object.fromEntries(e.map(r=>[r,n.latents.reduce((t,i)=>{const o=i.loadings[r]??0;return t+o*o},0)]))}function bR(n,e){return e.map(r=>e.map(t=>r===t?1:n.latents.reduce((i,o)=>i+(o.loadings[r]??0)*(o.loadings[t]??0),0)))}function gR(n){return n.latents.some(e=>Object.values(e.loadings).some(r=>r!==null&&r!==0))}function cy(n,e,r=[],t={}){const i=c=>t[c]??c,o=[];n.latents.length>io&&o.push({message:`${n.latents.length} latents exceeds the limit of ${io}.`});const u=new Set;n.latents.forEach((c,l)=>{const f=`Latent ${l+1}`;c.name.trim()===""&&o.push({message:`${f} needs a short name.`,latentIndex:l,field:"name"}),c.description.trim()===""&&o.push({message:`${f} needs a description saying what its positive direction means.`,latentIndex:l,field:"description"});for(const d of e){const p=c.loadings[d]??null;p===null?(u.add(d),o.push({message:`${f}: no loading given for ${i(d)} — enter a number from −1 to +1 (0 if the latent does not apply to it).`,latentIndex:l,svar:d})):(!Number.isFinite(p)||p<-1||p>1)&&(u.add(d),o.push({message:`${f}: the loading on ${i(d)} must be between −1 and +1.`,latentIndex:l,svar:d}))}});const a=sy(n,e),s=new Set(r);for(const c of e){const l=a[c];!u.has(c)&&l>1+oy&&o.push({message:`The squared loadings on ${i(c)} sum to ${l.toFixed(3)}, over its budget of 1 by ${(l-1).toFixed(3)} — no independent variation is left for it.`,svar:c}),l>0&&s.has(c)&&o.push({message:`${i(c)} has a single-value distribution in this response, so a loading on it has no effect — zero the loading or give it a spread distribution.`,svar:c})}return o}function ly(n,e,r=[]){const t=cy(n,e,r);if(t.length>0)return{kind:"invalid",problems:t};const i=mR(n),o=Xo(i,e,r);if(o!==null)throw new Error("joint-dependence draft passed the editor's checks but not validateLloads: "+o);return{kind:"valid",lloads:i}}const fy=4,_R=3,yR=1e-4,ER=1e4,Fv=3;function Ov(n){const[e,r]=n.split("e"),t=e.includes(".")?e.replace(/0+$/,"").replace(/\.$/,""):e;return r===void 0?t:`${t}e${r}`}function wR(n){switch(n){case"deterministic":return fy;case"monte-carlo":return _R;default:{const e=n;throw new Error(`Unknown calculation precision: ${String(e)}`)}}}function uo(n,e){if(Number.isNaN(n))return String(n);if(!Number.isFinite(n))return n>0?"∞":"-∞";if(n===0)return"0";const r=Number(n.toPrecision(e));if(r===0)return"0";const t=Math.abs(r);if(t<yR||t>=ER)return Ov(r.toExponential(e-1));const i=Math.floor(Math.log10(t)),o=Math.max(0,e-1-i);return Ov(r.toFixed(o))}function $R(n){return Number.isFinite(n)?n>=1?"∞:1":n<=0?"1:∞":n>=.5?`${uo(n/(1-n),Fv)}:1`:`1:${uo((1-n)/n,Fv)}`:"—"}function ao(n,e){if(!Number.isFinite(n)||n===0)return n;const r=fy,t=Number(n.toPrecision(r));if(e==="floor"?t<=n:t>=n)return t;const i=Math.floor(Math.log10(Math.abs(t))),o=Math.pow(10,i-r+1),u=e==="floor"?t-o:t+o;return Number(u.toPrecision(r))}function Be(n,e,r,t="deterministic"){const i=wR(t);switch(e){case"probability":return r==="odds"?$R(n):uo(n*100,i)+"%";default:return uo(n,i)}}function Vn(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}/**
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
*/var Hu,Pv;function SR(){if(Pv)return Hu;Pv=1;var n=typeof Object.defineProperty=="function"?Object.defineProperty:null;return Hu=n,Hu}/**
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
*/var Uu,Dv;function AR(){if(Dv)return Uu;Dv=1;var n=SR();function e(){try{return n({},"x",{}),!0}catch{return!1}}return Uu=e,Uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ju,xv;function LR(){if(xv)return ju;xv=1;var n=Object.defineProperty;return ju=n,ju}/**
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
*/var Wu,Bv;function dy(){if(Bv)return Wu;Bv=1;function n(e){return typeof e=="number"}return Wu=n,Wu}/**
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
*/var Gu,Hv;function py(){if(Hv)return Gu;Hv=1;function n(t){return t[0]==="-"}function e(t){var i="",o;for(o=0;o<t;o++)i+="0";return i}function r(t,i,o){var u=!1,a=i-t.length;return a<0||(n(t)&&(u=!0,t=t.substr(1)),t=o?t+e(a):e(a)+t,u&&(t="-"+t)),t}return Gu=r,Gu}/**
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
*/var Vu,Uv;function IR(){if(Uv)return Vu;Uv=1;var n=dy(),e=py(),r=String.prototype.toLowerCase,t=String.prototype.toUpperCase;function i(o){var u,a,s;switch(o.specifier){case"b":u=2;break;case"o":u=8;break;case"x":case"X":u=16;break;case"d":case"i":case"u":default:u=10;break}if(a=o.arg,s=parseInt(a,10),!isFinite(s)){if(!n(a))throw new Error("invalid integer. Value: "+a);s=0}return s<0&&(o.specifier==="u"||u!==10)&&(s=4294967295+s+1),s<0?(a=(-s).toString(u),o.precision&&(a=e(a,o.precision,o.padRight)),a="-"+a):(a=s.toString(u),!s&&!o.precision?a="":o.precision&&(a=e(a,o.precision,o.padRight)),o.sign&&(a=o.sign+a)),u===16&&(o.alternate&&(a="0x"+a),a=o.specifier===t.call(o.specifier)?t.call(a):r.call(a)),u===8&&o.alternate&&a.charAt(0)!=="0"&&(a="0"+a),a}return Vu=i,Vu}/**
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
*/var Xu,jv;function kR(){if(jv)return Xu;jv=1;function n(e){return typeof e=="string"}return Xu=n,Xu}/**
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
*/var Yu,Wv;function RR(){if(Wv)return Yu;Wv=1;var n=Math.abs,e=String.prototype.toLowerCase,r=String.prototype.toUpperCase,t=String.prototype.replace,i=/e\+(\d)$/,o=/e-(\d)$/,u=/^(\d+)$/,a=/^(\d+)e/,s=/\.0$/,c=/\.0*e/,l=/(\..*[^0])0*e/;function f(d,p){var h,m;switch(p.specifier){case"e":case"E":m=d.toExponential(p.precision);break;case"f":case"F":m=d.toFixed(p.precision);break;case"g":case"G":n(d)<1e-4?(h=p.precision,h>0&&(h-=1),m=d.toExponential(h)):m=d.toPrecision(p.precision),p.alternate||(m=t.call(m,l,"$1e"),m=t.call(m,c,"e"),m=t.call(m,s,""));break;default:throw new Error("invalid double notation. Value: "+p.specifier)}return m=t.call(m,i,"e+0$1"),m=t.call(m,o,"e-0$1"),p.alternate&&(m=t.call(m,u,"$1."),m=t.call(m,a,"$1.e")),d>=0&&p.sign&&(m=p.sign+m),m=p.specifier===r.call(p.specifier)?r.call(m):e.call(m),m}return Yu=f,Yu}/**
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
*/var Ku,Gv;function CR(){if(Gv)return Ku;Gv=1;function n(r){var t="",i;for(i=0;i<r;i++)t+=" ";return t}function e(r,t,i){var o=t-r.length;return o<0||(r=i?r+n(o):n(o)+r),r}return Ku=e,Ku}/**
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
*/var Ju,Vv;function MR(){if(Vv)return Ju;Vv=1;var n=IR(),e=kR(),r=dy(),t=RR(),i=CR(),o=py(),u=String.fromCharCode,a=Array.isArray;function s(f){return f!==f}function c(f){var d={};return d.specifier=f.specifier,d.precision=f.precision===void 0?1:f.precision,d.width=f.width,d.flags=f.flags||"",d.mapping=f.mapping,d}function l(f){var d,p,h,m,v,b,g,_,y,E;if(!a(f))throw new TypeError("invalid argument. First argument must be an array. Value: `"+f+"`.");for(b="",g=1,y=0;y<f.length;y++)if(h=f[y],e(h))b+=h;else{if(d=h.precision!==void 0,h=c(h),!h.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+y+"`. Value: `"+h+"`.");for(h.mapping&&(g=h.mapping),p=h.flags,E=0;E<p.length;E++)switch(m=p.charAt(E),m){case" ":h.sign=" ";break;case"+":h.sign="+";break;case"-":h.padRight=!0,h.padZeros=!1;break;case"0":h.padZeros=p.indexOf("-")<0;break;case"#":h.alternate=!0;break;default:throw new Error("invalid flag: "+m)}if(h.width==="*"){if(h.width=parseInt(arguments[g],10),g+=1,s(h.width))throw new TypeError("the argument for * width at position "+g+" is not a number. Value: `"+h.width+"`.");h.width<0&&(h.padRight=!0,h.width=-h.width)}if(d&&h.precision==="*"){if(h.precision=parseInt(arguments[g],10),g+=1,s(h.precision))throw new TypeError("the argument for * precision at position "+g+" is not a number. Value: `"+h.precision+"`.");h.precision<0&&(h.precision=1,d=!1)}switch(h.arg=arguments[g],h.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":d&&(h.padZeros=!1),h.arg=n(h);break;case"s":h.maxWidth=d?h.precision:-1,h.arg=String(h.arg);break;case"c":if(!s(h.arg)){if(v=parseInt(h.arg,10),v<0||v>127)throw new Error("invalid character code. Value: "+h.arg);h.arg=s(v)?String(h.arg):u(v)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(d||(h.precision=6),_=parseFloat(h.arg),!isFinite(_)){if(!r(h.arg))throw new Error("invalid floating-point number. Value: "+b);_=h.arg,h.padZeros=!1}h.arg=t(_,h);break;default:throw new Error("invalid specifier: "+h.specifier)}h.maxWidth>=0&&h.arg.length>h.maxWidth&&(h.arg=h.arg.substring(0,h.maxWidth)),h.padZeros?h.arg=o(h.arg,h.width||h.precision,h.padRight):h.width&&(h.arg=i(h.arg,h.width,h.padRight)),b+=h.arg||"",g+=1}return b}return Ju=l,Ju}/**
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
*/var zu,Xv;function NR(){if(Xv)return zu;Xv=1;var n=MR();return zu=n,zu}/**
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
*/var Qu,Yv;function TR(){if(Yv)return Qu;Yv=1;var n=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function e(t){var i={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return t[4]==="."&&t[5]===void 0&&(i.precision="1"),i}function r(t){var i,o,u,a;for(o=[],a=0,u=n.exec(t);u;)i=t.slice(a,n.lastIndex-u[0].length),i.length&&o.push(i),u[6]==="%"?o.push("%"):o.push(e(u)),a=n.lastIndex,u=n.exec(t);return i=t.slice(a),i.length&&o.push(i),o}return Qu=r,Qu}/**
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
*/var Zu,Kv;function qR(){if(Kv)return Zu;Kv=1;var n=TR();return Zu=n,Zu}/**
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
*/var ea,Jv;function FR(){if(Jv)return ea;Jv=1;function n(e){return typeof e=="string"}return ea=n,ea}/**
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
*/var na,zv;function OR(){if(zv)return na;zv=1;var n=NR(),e=qR(),r=FR();function t(i){var o,u;if(!r(i))throw new TypeError(t("invalid argument. First argument must be a string. Value: `%s`.",i));for(o=[e(i)],u=1;u<arguments.length;u++)o.push(arguments[u]);return n.apply(null,o)}return na=t,na}/**
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
*/var ra,Qv;function PR(){if(Qv)return ra;Qv=1;var n=OR();return ra=n,ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ta,Zv;function DR(){if(Zv)return ta;Zv=1;var n=PR(),e=Object.prototype,r=e.toString,t=e.__defineGetter__,i=e.__defineSetter__,o=e.__lookupGetter__,u=e.__lookupSetter__;function a(s,c,l){var f,d,p,h;if(typeof s!="object"||s===null||r.call(s)==="[object Array]")throw new TypeError(n("invalid argument. First argument must be an object. Value: `%s`.",s));if(typeof l!="object"||l===null||r.call(l)==="[object Array]")throw new TypeError(n("invalid argument. Property descriptor must be an object. Value: `%s`.",l));if(d="value"in l,d&&(o.call(s,c)||u.call(s,c)?(f=s.__proto__,s.__proto__=e,delete s[c],s[c]=l.value,s.__proto__=f):s[c]=l.value),p="get"in l,h="set"in l,d&&(p||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&t&&t.call(s,c,l.get),h&&i&&i.call(s,c,l.set),s}return ta=a,ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ia,em;function xR(){if(em)return ia;em=1;var n=AR(),e=LR(),r=DR(),t;return n()?t=e:t=r,ia=t,ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oa,nm;function BR(){if(nm)return oa;nm=1;var n=xR();function e(r,t,i){n(r,t,{configurable:!1,enumerable:!1,writable:!1,value:i})}return oa=e,oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ua,rm;function rn(){if(rm)return ua;rm=1;var n=BR();return ua=n,ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aa,tm;function HR(){if(tm)return aa;tm=1;function n(e){return e!==e}return aa=n,aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sa,im;function ue(){if(im)return sa;im=1;var n=HR();return sa=n,sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ca,om;function UR(){if(om)return ca;om=1;function n(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return ca=n,ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var la,um;function jR(){if(um)return la;um=1;var n=UR();return la=n,la}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fa,am;function WR(){if(am)return fa;am=1;var n=jR(),e=n();function r(){return e&&typeof Symbol.toStringTag=="symbol"}return fa=r,fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var da,sm;function GR(){if(sm)return da;sm=1;var n=WR();return da=n,da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pa,cm;function hy(){if(cm)return pa;cm=1;var n=Object.prototype.toString;return pa=n,pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ha,lm;function VR(){if(lm)return ha;lm=1;var n=hy();function e(r){return n.call(r)}return ha=e,ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var va,fm;function XR(){if(fm)return va;fm=1;var n=Object.prototype.hasOwnProperty;function e(r,t){return r==null?!1:n.call(r,t)}return va=e,va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ma,dm;function YR(){if(dm)return ma;dm=1;var n=XR();return ma=n,ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ba,pm;function KR(){if(pm)return ba;pm=1;var n=typeof Symbol=="function"?Symbol:void 0;return ba=n,ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ga,hm;function JR(){if(hm)return ga;hm=1;var n=KR();return ga=n,ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _a,vm;function zR(){if(vm)return _a;vm=1;var n=JR(),e=typeof n=="function"?n.toStringTag:"";return _a=e,_a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ya,mm;function QR(){if(mm)return ya;mm=1;var n=YR(),e=zR(),r=hy();function t(i){var o,u,a;if(i==null)return r.call(i);u=i[e],o=n(i,e);try{i[e]=void 0}catch{return r.call(i)}return a=r.call(i),o?i[e]=u:delete i[e],a}return ya=t,ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ea,bm;function Ko(){if(bm)return Ea;bm=1;var n=GR(),e=VR(),r=QR(),t;return n()?t=r:t=e,Ea=t,Ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wa,gm;function ZR(){if(gm)return wa;gm=1;var n=Ko(),e=typeof Uint32Array=="function";function r(t){return e&&t instanceof Uint32Array||n(t)==="[object Uint32Array]"}return wa=r,wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $a,_m;function eC(){if(_m)return $a;_m=1;var n=ZR();return $a=n,$a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sa,ym;function nC(){if(ym)return Sa;ym=1;var n=4294967295;return Sa=n,Sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Aa,Em;function rC(){if(Em)return Aa;Em=1;var n=typeof Uint32Array=="function"?Uint32Array:null;return Aa=n,Aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var La,wm;function tC(){if(wm)return La;wm=1;var n=eC(),e=nC(),r=rC();function t(){var i,o;if(typeof r!="function")return!1;try{o=[1,3.14,-3.14,e+1,e+2],o=new r(o),i=n(o)&&o[0]===1&&o[1]===3&&o[2]===e-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return La=t,La}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ia,$m;function iC(){if($m)return Ia;$m=1;var n=tC();return Ia=n,Ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ka,Sm;function oC(){if(Sm)return ka;Sm=1;var n=typeof Uint32Array=="function"?Uint32Array:void 0;return ka=n,ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ra,Am;function uC(){if(Am)return Ra;Am=1;function n(){throw new Error("not implemented")}return Ra=n,Ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ca,Lm;function it(){if(Lm)return Ca;Lm=1;var n=iC(),e=oC(),r=uC(),t;return n()?t=e:t=r,Ca=t,Ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ma,Im;function aC(){if(Im)return Ma;Im=1;var n=Ko(),e=typeof Float64Array=="function";function r(t){return e&&t instanceof Float64Array||n(t)==="[object Float64Array]"}return Ma=r,Ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Na,km;function sC(){if(km)return Na;km=1;var n=aC();return Na=n,Na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ta,Rm;function cC(){if(Rm)return Ta;Rm=1;var n=typeof Float64Array=="function"?Float64Array:null;return Ta=n,Ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qa,Cm;function lC(){if(Cm)return qa;Cm=1;var n=sC(),e=cC();function r(){var t,i;if(typeof e!="function")return!1;try{i=new e([1,3.14,-3.14,NaN]),t=n(i)&&i[0]===1&&i[1]===3.14&&i[2]===-3.14&&i[3]!==i[3]}catch{t=!1}return t}return qa=r,qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fa,Mm;function fC(){if(Mm)return Fa;Mm=1;var n=lC();return Fa=n,Fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oa,Nm;function dC(){if(Nm)return Oa;Nm=1;var n=typeof Float64Array=="function"?Float64Array:void 0;return Oa=n,Oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pa,Tm;function pC(){if(Tm)return Pa;Tm=1;function n(){throw new Error("not implemented")}return Pa=n,Pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Da,qm;function ot(){if(qm)return Da;qm=1;var n=fC(),e=dC(),r=pC(),t;return n()?t=e:t=r,Da=t,Da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xa,Fm;function hC(){if(Fm)return xa;Fm=1;var n=Ko(),e=typeof Uint8Array=="function";function r(t){return e&&t instanceof Uint8Array||n(t)==="[object Uint8Array]"}return xa=r,xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ba,Om;function vC(){if(Om)return Ba;Om=1;var n=hC();return Ba=n,Ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ha,Pm;function mC(){if(Pm)return Ha;Pm=1;var n=255;return Ha=n,Ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ua,Dm;function bC(){if(Dm)return Ua;Dm=1;var n=typeof Uint8Array=="function"?Uint8Array:null;return Ua=n,Ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ja,xm;function gC(){if(xm)return ja;xm=1;var n=vC(),e=mC(),r=bC();function t(){var i,o;if(typeof r!="function")return!1;try{o=[1,3.14,-3.14,e+1,e+2],o=new r(o),i=n(o)&&o[0]===1&&o[1]===3&&o[2]===e-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return ja=t,ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wa,Bm;function _C(){if(Bm)return Wa;Bm=1;var n=gC();return Wa=n,Wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ga,Hm;function yC(){if(Hm)return Ga;Hm=1;var n=typeof Uint8Array=="function"?Uint8Array:void 0;return Ga=n,Ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Va,Um;function EC(){if(Um)return Va;Um=1;function n(){throw new Error("not implemented")}return Va=n,Va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xa,jm;function wC(){if(jm)return Xa;jm=1;var n=_C(),e=yC(),r=EC(),t;return n()?t=e:t=r,Xa=t,Xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ya,Wm;function $C(){if(Wm)return Ya;Wm=1;var n=Ko(),e=typeof Uint16Array=="function";function r(t){return e&&t instanceof Uint16Array||n(t)==="[object Uint16Array]"}return Ya=r,Ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ka,Gm;function SC(){if(Gm)return Ka;Gm=1;var n=$C();return Ka=n,Ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ja,Vm;function AC(){if(Vm)return Ja;Vm=1;var n=65535;return Ja=n,Ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var za,Xm;function LC(){if(Xm)return za;Xm=1;var n=typeof Uint16Array=="function"?Uint16Array:null;return za=n,za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qa,Ym;function IC(){if(Ym)return Qa;Ym=1;var n=SC(),e=AC(),r=LC();function t(){var i,o;if(typeof r!="function")return!1;try{o=[1,3.14,-3.14,e+1,e+2],o=new r(o),i=n(o)&&o[0]===1&&o[1]===3&&o[2]===e-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return Qa=t,Qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Za,Km;function kC(){if(Km)return Za;Km=1;var n=IC();return Za=n,Za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var es,Jm;function RC(){if(Jm)return es;Jm=1;var n=typeof Uint16Array=="function"?Uint16Array:void 0;return es=n,es}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ns,zm;function CC(){if(zm)return ns;zm=1;function n(){throw new Error("not implemented")}return ns=n,ns}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rs,Qm;function MC(){if(Qm)return rs;Qm=1;var n=kC(),e=RC(),r=CC(),t;return n()?t=e:t=r,rs=t,rs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ts,Zm;function NC(){if(Zm)return ts;Zm=1;var n=wC(),e=MC(),r={uint16:e,uint8:n};return ts=r,ts}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var is,e3;function TC(){if(e3)return is;e3=1;var n=NC(),e;function r(){var t,i;return t=new n.uint16(1),t[0]=4660,i=new n.uint8(t.buffer),i[0]===52}return e=r(),is=e,is}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var os,n3;function ut(){if(n3)return os;n3=1;var n=TC();return os=n,os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var us,r3;function qC(){if(r3)return us;r3=1;var n=ut(),e;return n===!0?e=1:e=0,us=e,us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var as,t3;function FC(){if(t3)return as;t3=1;var n=it(),e=ot(),r=qC(),t=new e(1),i=new n(t.buffer);function o(u){return t[0]=u,i[r]}return as=o,as}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ss,i3;function En(){if(i3)return ss;i3=1;var n=FC();return ss=n,ss}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cs,o3;function OC(){if(o3)return cs;o3=1;var n=ut(),e;return n===!0?e=1:e=0,cs=e,cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ls,u3;function PC(){if(u3)return ls;u3=1;var n=it(),e=ot(),r=OC(),t=new e(1),i=new n(t.buffer);function o(u,a){return t[0]=u,i[r]=a>>>0,t[0]}return ls=o,ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fs,a3;function ri(){if(a3)return fs;a3=1;var n=PC();return fs=n,fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ds,s3;function DC(){if(s3)return ds;s3=1;var n=ut(),e,r,t;return n===!0?(r=1,t=0):(r=0,t=1),e={HIGH:r,LOW:t},ds=e,ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ps,c3;function xC(){if(c3)return ps;c3=1;var n=it(),e=ot(),r=DC(),t=new e(1),i=new n(t.buffer),o=r.HIGH,u=r.LOW;function a(s,c){return i[o]=s,i[u]=c,t[0]}return ps=a,ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hs,l3;function Jo(){if(l3)return hs;l3=1;var n=xC();return hs=n,hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vs,f3;function Ce(){if(f3)return vs;f3=1;var n=Number.POSITIVE_INFINITY;return vs=n,vs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ms,d3;function BC(){return d3||(d3=1,ms=Number),ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bs,p3;function HC(){if(p3)return bs;p3=1;var n=BC();return bs=n,bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gs,h3;function tn(){if(h3)return gs;h3=1;var n=HC(),e=n.NEGATIVE_INFINITY;return gs=e,gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _s,v3;function Lr(){if(v3)return _s;v3=1;var n=1023;return _s=n,_s}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ys,m3;function UC(){if(m3)return ys;m3=1;var n=.34657359027997264;return ys=n,ys}/**
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
*/var Es,b3;function jC(){if(b3)return Es;b3=1;function n(e){return e===0?-.03333333333333313:-.03333333333333313+e*(.0015873015872548146+e*(-793650757867488e-19+e*(4008217827329362e-21+e*-20109921818362437e-23)))}return Es=n,Es}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ws,g3;function WC(){if(g3)return ws;g3=1;var n=ue(),e=En(),r=ri(),t=Jo(),i=Ce(),o=tn(),u=Lr(),a=UC(),s=jC(),c=709.782712893384,l=.6931471803691238,f=19082149292705877e-26,d=1.4426950408889634,p=38.816242111356935,h=1.0397207708399179;function m(v){var b,g,_,y,E,A,L,C,I,S,w,$,k;if(v===i||n(v))return v;if(v===o)return-1;if(v===0)return v;if(v<0?(_=!0,C=-v):(_=!1,C=v),C>=p){if(_)return-1;if(C>=c)return i}if(A=e(C)|0,C>a)C<h?_?(y=v+l,E=-f,k=-1):(y=v-l,E=f,k=1):(_?k=d*v-.5:k=d*v+.5,k|=0,w=k,y=v-w*l,E=w*f),v=y-E,S=y-v-E;else{if(A<1016070144)return v;k=0}return b=.5*v,I=v*b,L=1+I*s(I),w=3-L*b,$=I*((L-w)/(6-v*w)),k===0?v-(v*$-I):(g=t(u+k<<20,0),$=v*($-S)-S,$-=I,k===-1?.5*(v-$)-.5:k===1?v<-.25?-2*($-(v+.5)):1+2*(v-$):k<=-2||k>56?(C=1-($-v),k===1024?(y=e(C)+(k<<20)|0,C=r(C,y)):C*=g,C-1):(w=1,k<20?(y=1072693248-(2097152>>k)|0,w=r(w,y),C=w-($-v)):(y=u-k<<20|0,w=r(w,y),C=v-($+w),C+=1),C*=g,C))}return ws=m,ws}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $s,_3;function at(){if(_3)return $s;_3=1;var n=WC();return $s=n,$s}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ss,y3;function GC(){if(y3)return Ss;y3=1;var n=Math.floor;return Ss=n,Ss}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var As,E3;function Xn(){if(E3)return As;E3=1;var n=GC();return As=n,As}/**
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
*/var Ls,w3;function VC(){if(w3)return Ls;w3=1;function n(e){return e===0?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+e*.14798198605116586)))))}return Ls=n,Ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Is,$3;function XC(){if($3)return Is;$3=1;var n=ue(),e=En(),r=ri(),t=Ce(),i=tn(),o=Lr(),u=VC(),a=.6931471803691238,s=19082149292705877e-26,c=.41421356237309503,l=-.2928932188134525,f=1862645149230957e-24,d=5551115123125783e-32,p=9007199254740992,h=.6666666666666666;function m(v){var b,g,_,y,E,A,L,C,I,S;if(v<-1||n(v))return NaN;if(v===-1)return i;if(v===t||v===0)return v;if(v<0?_=-v:_=v,S=1,_<c){if(_<f)return _<d?v:v-v*v*.5;v>l&&(S=0,y=v,g=1)}return S!==0&&(_<p?(I=1+v,g=e(I),S=(g>>20)-o,S>0?E=1-(I-v):E=v-(I-1),E/=I):(I=v,g=e(I),S=(g>>20)-o,E=0),g&=1048575,g<434334?I=r(I,g|1072693248):(S+=1,I=r(I,g|1071644672),g=1048576-g>>2),y=I-1),b=.5*y*y,g===0?y===0?(E+=S*s,S*a+E):(C=b*(1-h*y),S*a-(C-(S*s+E)-y)):(A=y/(2+y),L=A*A,C=L*u(L),S===0?y-(b-A*(b+C)):S*a-(b-(A*(b+C)+(S*s+E))-y))}return Is=m,Is}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ks,S3;function wn(){if(S3)return ks;S3=1;var n=XC();return ks=n,ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rs,A3;function YC(){if(A3)return Rs;A3=1;var n=Math.sqrt;return Rs=n,Rs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cs,L3;function ye(){if(L3)return Cs;L3=1;var n=YC();return Cs=n,Cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ms,I3;function vy(){if(I3)return Ms;I3=1;var n=.7853981633974483;return Ms=n,Ms}/**
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
*/var Ns,k3;function KC(){if(k3)return Ns;k3=1;function n(e){var r,t,i;return e===0?.16666666666666713:(e<0?r=-e:r=e,r<=1?(t=-8.198089802484825+e*(19.562619833175948+e*(-16.262479672107002+e*(5.444622390564711+e*(-.6019598008014124+e*.004253011369004428)))),i=-49.18853881490881+e*(139.51056146574857+e*(-147.1791292232726+e*(70.49610280856842+e*(-14.740913729888538+e*1))))):(e=1/e,t=.004253011369004428+e*(-.6019598008014124+e*(5.444622390564711+e*(-16.262479672107002+e*(19.562619833175948+e*-8.198089802484825)))),i=1+e*(-14.740913729888538+e*(70.49610280856842+e*(-147.1791292232726+e*(139.51056146574857+e*-49.18853881490881))))),t/i)}return Ns=n,Ns}/**
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
*/var Ts,R3;function JC(){if(R3)return Ts;R3=1;function n(e){var r,t,i;return e===0?.08333333333333809:(e<0?r=-e:r=e,r<=1?(t=28.536655482610616+e*(-25.56901049652825+e*(6.968710824104713+e*(-.5634242780008963+e*.002967721961301243))),i=342.43986579130785+e*(-383.8770957603691+e*(147.0656354026815+e*(-21.947795316429207+e*1)))):(e=1/e,t=.002967721961301243+e*(-.5634242780008963+e*(6.968710824104713+e*(-25.56901049652825+e*28.536655482610616))),i=1+e*(-21.947795316429207+e*(147.0656354026815+e*(-383.8770957603691+e*342.43986579130785)))),t/i)}return Ts=n,Ts}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qs,C3;function zC(){if(C3)return qs;C3=1;var n=ue(),e=ye(),r=vy(),t=KC(),i=JC(),o=6123233995736766e-32;function u(a){var s,c,l,f,d;if(n(a))return NaN;if(a>0?l=a:(s=!0,l=-a),l>1)return NaN;if(l>.625)c=1-l,f=c*i(c),c=e(c+c),d=r-c,c=c*f-o,d-=c,d+=r;else{if(l<1e-8)return a;c=l*l,d=c*t(c),d=l*d+l}return s?-d:d}return qs=u,qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fs,M3;function h2(){if(M3)return Fs;M3=1;var n=zC();return Fs=n,Fs}/**
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
*/var Os,N3;function QC(){if(N3)return Os;N3=1;function n(e){return Math.abs(e)}return Os=n,Os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ps,T3;function Ee(){if(T3)return Ps;T3=1;var n=QC();return Ps=n,Ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ds,q3;function ZC(){if(q3)return Ds;q3=1;var n=Math.ceil;return Ds=n,Ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xs,F3;function eM(){if(F3)return xs;F3=1;var n=ZC();return xs=n,xs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bs,O3;function nM(){if(O3)return Bs;O3=1;var n=Xn(),e=eM();function r(t){return t<0?e(t):n(t)}return Bs=r,Bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hs,P3;function v2(){if(P3)return Hs;P3=1;var n=nM();return Hs=n,Hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Us,D3;function rM(){if(D3)return Us;D3=1;var n=1023;return Us=n,Us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var js,x3;function tM(){if(x3)return js;x3=1;var n=-1023;return js=n,js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ws,B3;function iM(){if(B3)return Ws;B3=1;var n=-1074;return Ws=n,Ws}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gs,H3;function oM(){if(H3)return Gs;H3=1;var n=Ce(),e=tn();function r(t){return t===n||t===e}return Gs=r,Gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vs,U3;function st(){if(U3)return Vs;U3=1;var n=oM();return Vs=n,Vs}/**
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
*/var Xs,j3;function uM(){if(j3)return Xs;j3=1;var n=2147483648;return Xs=n,Xs}/**
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
*/var Ys,W3;function Ir(){if(W3)return Ys;W3=1;var n=2147483647;return Ys=n,Ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ks,G3;function aM(){if(G3)return Ks;G3=1;var n=ut(),e,r,t;return n===!0?(r=1,t=0):(r=0,t=1),e={HIGH:r,LOW:t},Ks=e,Ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Js,V3;function my(){if(V3)return Js;V3=1;var n=it(),e=ot(),r=aM(),t=new e(1),i=new n(t.buffer),o=r.HIGH,u=r.LOW;function a(s,c,l,f){return t[0]=s,c[f]=i[o],c[f+l]=i[u],c}return Js=a,Js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zs,X3;function sM(){if(X3)return zs;X3=1;var n=my();function e(r){return n(r,[0,0],1,0)}return zs=e,zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qs,Y3;function m2(){if(Y3)return Qs;Y3=1;var n=rn(),e=sM(),r=my();return n(e,"assign",r),Qs=e,Qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zs,K3;function cM(){if(K3)return Zs;K3=1;var n=uM(),e=Ir(),r=m2(),t=En(),i=Jo(),o=[0,0];function u(a,s){var c,l;return r.assign(a,o,1,0),c=o[0],c&=e,l=t(s),l&=n,c|=l,i(c,o[1])}return Zs=u,Zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ec,J3;function b2(){if(J3)return ec;J3=1;var n=cM();return ec=n,ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nc,z3;function kr(){if(z3)return nc;z3=1;var n=22250738585072014e-324;return nc=n,nc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rc,Q3;function by(){if(Q3)return rc;Q3=1;var n=kr(),e=st(),r=ue(),t=Ee(),i=4503599627370496;function o(u,a,s,c){return r(u)||e(u)?(a[c]=u,a[c+s]=0,a):u!==0&&t(u)<n?(a[c]=u*i,a[c+s]=-52,a):(a[c]=u,a[c+s]=0,a)}return rc=o,rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tc,Z3;function lM(){if(Z3)return tc;Z3=1;var n=by();function e(r){return n(r,[0,0],1,0)}return tc=e,tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ic,e6;function fM(){if(e6)return ic;e6=1;var n=rn(),e=lM(),r=by();return n(e,"assign",r),ic=e,ic}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oc,n6;function zo(){if(n6)return oc;n6=1;var n=2146435072;return oc=n,oc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uc,r6;function dM(){if(r6)return uc;r6=1;var n=En(),e=zo(),r=Lr();function t(i){var o=n(i);return o=(o&e)>>>20,o-r|0}return uc=t,uc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ac,t6;function pM(){if(t6)return ac;t6=1;var n=dM();return ac=n,ac}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sc,i6;function hM(){if(i6)return sc;i6=1;var n=Ce(),e=tn(),r=Lr(),t=rM(),i=tM(),o=iM(),u=ue(),a=st(),s=b2(),c=fM().assign,l=pM(),f=m2(),d=Jo(),p=2220446049250313e-31,h=2148532223,m=[0,0],v=[0,0];function b(g,_){var y,E;return _===0||g===0||u(g)||a(g)?g:(c(g,m,1,0),g=m[0],_+=m[1],_+=l(g),_<o?s(0,g):_>t?g<0?e:n:(_<=i?(_+=52,E=p):E=1,f.assign(g,v,1,0),y=v[0],y&=h,y|=_+r<<20,E*d(y,v[1])))}return sc=b,sc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cc,o6;function ct(){if(o6)return cc;o6=1;var n=hM();return cc=n,cc}/**
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
*/var lc,u6;function vM(){if(u6)return lc;u6=1;function n(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}return lc=n,lc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var fc,a6;function mM(){if(a6)return fc;a6=1;var n=ct(),e=vM();function r(t,i,o){var u,a,s,c;return u=t-i,a=u*u,s=u-a*e(a),c=1-(i-u*s/(2-s)-t),n(c,o)}return fc=r,fc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var dc,s6;function bM(){if(s6)return dc;s6=1;var n=ue(),e=v2(),r=tn(),t=Ce(),i=mM(),o=.6931471803691238,u=19082149292705877e-26,a=1.4426950408889634,s=709.782712893384,c=-745.1332191019411,l=1/(1<<28),f=-l;function d(p){var h,m,v;return n(p)||p===t?p:p===r?0:p>s?t:p<c?0:p>f&&p<l?1+p:(p<0?v=e(a*p-.5):v=e(a*p+.5),h=p-v*o,m=v*u,i(h,m,v))}return dc=d,dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pc,c6;function Me(){if(c6)return pc;c6=1;var n=bM();return pc=n,pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hc,l6;function gM(){if(l6)return hc;l6=1;var n=Xn();function e(r){return n(r)===r}return hc=e,hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vc,f6;function lt(){if(f6)return vc;f6=1;var n=gM();return vc=n,vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mc,d6;function _M(){if(d6)return mc;d6=1;var n=lt();function e(r){return n(r/2)}return mc=e,mc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bc,p6;function yM(){if(p6)return bc;p6=1;var n=_M();return bc=n,bc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gc,h6;function EM(){if(h6)return gc;h6=1;var n=yM();function e(r){return r>0?n(r-1):n(r+1)}return gc=e,gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _c,v6;function g2(){if(v6)return _c;v6=1;var n=EM();return _c=n,_c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yc,m6;function wM(){if(m6)return yc;m6=1;var n=ut(),e;return n===!0?e=0:e=1,yc=e,yc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ec,b6;function $M(){if(b6)return Ec;b6=1;var n=it(),e=ot(),r=wM(),t=new e(1),i=new n(t.buffer);function o(u,a){return t[0]=u,i[r]=a>>>0,t[0]}return Ec=o,Ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wc,g6;function ti(){if(g6)return wc;g6=1;var n=$M();return wc=n,wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $c,_6;function SM(){if(_6)return $c;_6=1;function n(e){return e|0}return $c=n,$c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sc,y6;function gy(){if(y6)return Sc;y6=1;var n=SM();return Sc=n,Sc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ac,E6;function AM(){if(E6)return Ac;E6=1;var n=g2(),e=b2(),r=tn(),t=Ce();function i(o,u){return u===r?t:u===t?0:u>0?n(u)?o:0:n(u)?e(t,o):t}return Ac=i,Ac}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Lc,w6;function LM(){if(w6)return Lc;w6=1;var n=Ir(),e=En(),r=1072693247,t=1e300,i=1e-300;function o(u,a){var s,c;return c=e(u),s=c&n,s<=r?a<0?t*t:i*i:a>0?t*t:i*i}return Lc=o,Lc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ic,$6;function IM(){if($6)return Ic;$6=1;var n=Ee(),e=Ce();function r(t,i){return t===-1?(t-t)/(t-t):t===1?1:n(t)<1==(i===e)?0:e}return Ic=r,Ic}/**
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
*/var kc,S6;function _y(){if(S6)return kc;S6=1;var n=20;return kc=n,kc}/**
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
*/var Rc,A6;function kM(){if(A6)return Rc;A6=1;function n(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}return Rc=n,Rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Cc,L6;function RM(){if(L6)return Cc;L6=1;var n=En(),e=ti(),r=ri(),t=Lr(),i=_y(),o=kM(),u=1048575,a=1048576,s=1072693248,c=536870912,l=524288,f=9007199254740992,d=.9617966939259756,p=.9617967009544373,h=-7028461650952758e-24,m=[1,1.5],v=[0,.5849624872207642],b=[0,1350039202129749e-23];function g(_,y,E){var A,L,C,I,S,w,$,k,R,F,T,U,O,D,q,ne,W,Y,Z,ie,G,B;return ie=0,E<a&&(y*=f,ie-=53,E=n(y)),ie+=(E>>i)-t|0,G=E&u|0,E=G|s|0,G<=235662?B=0:G<767610?B=1:(B=0,ie+=1,E-=a),y=r(y,E),k=m[B],Y=y-k,Z=1/(y+k),L=Y*Z,I=e(L,0),A=(E>>1|c)+l,A+=B<<18,w=r(0,A),$=y-(w-k),S=Z*(Y-I*w-I*$),C=L*L,W=C*C*o(C),W+=S*(I+L),C=I*I,w=3+C+W,w=e(w,0),$=W-(w-3-C),Y=I*w,Z=S*w+$*L,F=Y+Z,F=e(F,0),T=Z-(F-Y),U=p*F,O=h*F+T*d+b[B],R=v[B],ne=ie,D=U+O+R+ne,D=e(D,0),q=O-(D-ne-R-U),_[0]=D,_[1]=q,_}return Cc=g,Cc}/**
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
*/var Mc,I6;function CM(){if(I6)return Mc;I6=1;function n(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}return Mc=n,Mc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Nc,k6;function MM(){if(k6)return Nc;k6=1;var n=ti(),e=CM(),r=1.4426950408889634,t=1.4426950216293335,i=19259629911266175e-24;function o(u,a){var s,c,l,f,d,p;return l=a-1,f=l*l*e(l),d=t*l,p=l*i-f*r,c=d+p,c=n(c,0),s=p-(c-d),u[0]=c,u[1]=s,u}return Nc=o,Nc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tc,R6;function NM(){if(R6)return Tc;R6=1;var n=.6931471805599453;return Tc=n,Tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qc,C6;function yy(){if(C6)return qc;C6=1;var n=1048575;return qc=n,qc}/**
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
*/var Fc,M6;function TM(){if(M6)return Fc;M6=1;function n(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}return Fc=n,Fc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Oc,N6;function qM(){if(N6)return Oc;N6=1;var n=En(),e=ri(),r=ti(),t=gy(),i=ct(),o=NM(),u=Lr(),a=Ir(),s=yy(),c=_y(),l=TM(),f=1048576,d=1071644672,p=.6931471824645996,h=-1904654299957768e-24;function m(v,b,g){var _,y,E,A,L,C,I,S,w,$,k;return $=v&a|0,k=($>>c)-u|0,w=0,$>d&&(w=v+(f>>k+1)>>>0,k=((w&a)>>c)-u|0,_=(w&~(s>>k))>>>0,E=e(0,_),w=(w&s|f)>>c-k>>>0,v<0&&(w=-w),b-=E),E=g+b,E=r(E,0),L=E*p,C=(g-(E-b))*o+E*h,S=L+C,I=C-(S-L),E=S*S,y=S-E*l(E),A=S*y/(y-2)-(I+S*I),S=1-(A-S),v=n(S),v=t(v),v+=w<<c>>>0,v>>c<=0?S=i(S,w):S=e(S,v),S}return Oc=m,Oc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Pc,T6;function FM(){if(T6)return Pc;T6=1;var n=ue(),e=g2(),r=st(),t=lt(),i=ye(),o=Ee(),u=m2(),a=ti(),s=gy(),c=tn(),l=Ce(),f=Ir(),d=AM(),p=LM(),h=IM(),m=RM(),v=MM(),b=qM(),g=1072693247,_=1105199104,y=1139802112,E=1083179008,A=1072693248,L=1083231232,C=3230714880,I=31,S=1e300,w=1e-300,$=8008566259537294e-32,k=[0,0],R=[0,0];function F(T,U){var O,D,q,ne,W,Y,Z,ie,G,B,H,ge,pe,Q,oe,$e;if(n(T)||n(U))return NaN;if(u.assign(U,k,1,0),Y=k[0],Z=k[1],Z===0){if(U===0)return 1;if(U===1)return T;if(U===-1)return 1/T;if(U===.5)return i(T);if(U===-.5)return 1/i(T);if(U===2)return T*T;if(U===3)return T*T*T;if(U===4)return T*=T,T*T;if(r(U))return h(T,U)}if(u.assign(T,k,1,0),ne=k[0],W=k[1],W===0){if(ne===0)return d(T,U);if(T===1)return 1;if(T===-1&&e(U))return-1;if(r(T))return T===c?F(-0,-U):U<0?0:l}if(T<0&&t(U)===!1)return(T-T)/(T-T);if(q=o(T),O=ne&f|0,D=Y&f|0,ie=ne>>>I|0,G=Y>>>I|0,ie&&e(U)?ie=-1:ie=1,D>_){if(D>y)return p(T,U);if(O<g)return G===1?ie*S*S:ie*w*w;if(O>A)return G===0?ie*S*S:ie*w*w;pe=v(R,q)}else pe=m(R,q,O);if(B=a(U,0),ge=(U-B)*pe[0]+U*pe[1],H=B*pe[0],Q=ge+H,u.assign(Q,k,1,0),oe=s(k[0]),$e=s(k[1]),oe>=E){if((oe-E|$e)!==0||ge+$>Q-H)return ie*S*S}else if((oe&f)>=L&&((oe-C|$e)!==0||ge<=Q-H))return ie*w*w;return Q=b(oe,H,ge),ie*Q}return Pc=F,Pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dc,q6;function Ne(){if(q6)return Dc;q6=1;var n=FM();return Dc=n,Dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xc,F6;function ft(){if(F6)return xc;F6=1;var n=2.718281828459045;return xc=n,xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bc,O6;function Yn(){if(O6)return Bc;O6=1;var n=2220446049250313e-31;return Bc=n,Bc}/**
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
*/var Hc,P6;function OM(){if(P6)return Hc;P6=1;function n(e){var r,t,i;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(t=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),i=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),i=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/i)}return Hc=n,Hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Uc,D6;function PM(){if(D6)return Uc;D6=1;var n=ue(),e=wn(),r=ye(),t=Ee(),i=Me(),o=Ne(),u=ft(),a=Yn(),s=OM(),c=10.900511;function l(f,d){var p,h,m,v,b,g,_;return n(f)||n(d)?NaN:f<0||d<0?NaN:d===1?1/f:f===1?1/d:(_=f+d,_<a?(b=_/f,b/=d,b):_===f&&d<a?1/d:_===d&&f<a?1/f:(f<d&&(g=d,d=f,f=g),h=f+c-.5,m=d+c-.5,v=_+c-.5,b=s(f)*(s(d)/s(_)),p=f-.5-d,t(d*p)<v*100&&f>100?b*=i(p*e(-d/v)):b*=o(h/v,p),v>1e10?b*=o(h/v*(m/v),d):b*=o(h*m/(v*v),d),b*=r(u/m),b))}return Uc=l,Uc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jc,x6;function Qo(){if(x6)return jc;x6=1;var n=PM();return jc=n,jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wc,B6;function DM(){if(B6)return Wc;B6=1;var n=Ce();function e(r){return r===0&&1/r===n}return Wc=e,Wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gc,H6;function xM(){if(H6)return Gc;H6=1;var n=DM();return Gc=n,Gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vc,U6;function BM(){if(U6)return Vc;U6=1;var n=xM(),e=ue(),r=Ce();function t(i,o){return e(i)||e(o)?NaN:i===r||o===r?r:i===o&&i===0?n(i)?i:o:i>o?i:o}return Vc=t,Vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xc,j6;function Rr(){if(j6)return Xc;j6=1;var n=BM();return Xc=n,Xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yc,W6;function HM(){if(W6)return Yc;W6=1;var n=tn();function e(r){return r===0&&1/r===n}return Yc=e,Yc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kc,G6;function Ey(){if(G6)return Kc;G6=1;var n=HM();return Kc=n,Kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jc,V6;function UM(){if(V6)return Jc;V6=1;var n=Ey(),e=ue(),r=tn();function t(i,o){return e(i)||e(o)?NaN:i===r||o===r?r:i===o&&i===0?n(i)?i:o:i<o?i:o}return Jc=t,Jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zc,X6;function vr(){if(X6)return zc;X6=1;var n=UM();return zc=n,zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qc,Y6;function Cr(){if(Y6)return Qc;Y6=1;var n=17976931348623157e292;return Qc=n,Qc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zc,K6;function wy(){if(K6)return Zc;K6=1;var n=2147483647;return Zc=n,Zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e0,J6;function _2(){if(J6)return e0;J6=1;var n=1.5707963267948966;return e0=n,e0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n0,z6;function mr(){if(z6)return n0;z6=1;var n=3.141592653589793;return n0=n,n0}/**
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
*/var r0,Q6;function jM(){if(Q6)return r0;Q6=1;function n(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}return r0=n,r0}/**
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
*/var t0,Z6;function WM(){if(Z6)return t0;Z6=1;function n(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}return t0=n,t0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var i0,e4;function GM(){if(e4)return i0;e4=1;var n=jM(),e=WM();function r(t,i){var o,u,a,s;return s=t*t,a=s*s,u=s*n(s),u+=a*a*e(s),o=.5*s,a=1-o,a+(1-a-o+(s*u-t*i))}return i0=r,i0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o0,n4;function $y(){if(n4)return o0;n4=1;var n=GM();return o0=n,o0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var u0,r4;function VM(){if(r4)return u0;r4=1;var n=-.16666666666666632,e=.00833333333332249,r=-.0001984126982985795,t=27557313707070068e-22,i=-25050760253406863e-24,o=158969099521155e-24;function u(a,s){var c,l,f,d;return d=a*a,f=d*d,c=e+d*(r+d*t)+d*f*(i+d*o),l=d*a,s===0?a+l*(n+d*c):a-(d*(.5*s-l*c)-s-l*n)}return u0=u,u0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a0,t4;function Sy(){if(t4)return a0;t4=1;var n=VM();return a0=n,a0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s0,i4;function XM(){if(i4)return s0;i4=1;var n=ut(),e;return n===!0?e=0:e=1,s0=e,s0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c0,o4;function YM(){if(o4)return c0;o4=1;var n=it(),e=ot(),r=XM(),t=new e(1),i=new n(t.buffer);function o(u){return t[0]=u,i[r]}return c0=o,c0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l0,u4;function KM(){if(u4)return l0;u4=1;var n=YM();return l0=n,l0}/**
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
*/var f0,a4;function JM(){if(a4)return f0;a4=1;function n(e,r){var t,i;for(t=[],i=0;i<r;i++)t.push(e);return t}return f0=n,f0}/**
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
*/var d0,s4;function zM(){if(s4)return d0;s4=1;var n=JM();return d0=n,d0}/**
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
*/var p0,c4;function QM(){if(c4)return p0;c4=1;var n=zM();function e(r){return n(0,r)}return p0=e,p0}/**
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
*/var h0,l4;function ZM(){if(l4)return h0;l4=1;var n=QM();return h0=n,h0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var v0,f4;function eN(){if(f4)return v0;f4=1;var n=Xn(),e=ct(),r=ZM(),t=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],i=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],o=16777216,u=5960464477539063e-23,a=r(20),s=r(20),c=r(20),l=r(20);function f(p,h,m,v,b,g,_,y,E){var A,L,C,I,S,w,$,k,R;for(I=g,R=v[m],k=m,S=0;k>0;S++)L=u*R|0,l[S]=R-o*L|0,R=v[k-1]+L,k-=1;if(R=e(R,b),R-=8*n(R*.125),$=R|0,R-=$,C=0,b>0?(S=l[m-1]>>24-b,$+=S,l[m-1]-=S<<24-b,C=l[m-1]>>23-b):b===0?C=l[m-1]>>23:R>=.5&&(C=2),C>0){for($+=1,A=0,S=0;S<m;S++)k=l[S],A===0?k!==0&&(A=1,l[S]=16777216-k):l[S]=16777215-k;if(b>0)switch(b){case 1:l[m-1]&=8388607;break;case 2:l[m-1]&=4194303;break}C===2&&(R=1-R,A!==0&&(R-=e(1,b)))}if(R===0){for(k=0,S=m-1;S>=g;S--)k|=l[S];if(k===0){for(w=1;l[g-w]===0;w++);for(S=m+1;S<=m+w;S++){for(E[y+S]=t[_+S],L=0,k=0;k<=y;k++)L+=p[k]*E[y+(S-k)];v[S]=L}return m+=w,f(p,h,m,v,b,g,_,y,E)}for(m-=1,b-=24;l[m]===0;)m-=1,b-=24}else R=e(R,-b),R>=o?(L=u*R|0,l[m]=R-o*L|0,m+=1,b+=24,l[m]=L):l[m]=R|0;for(L=e(1,b),S=m;S>=0;S--)v[S]=L*l[S],L*=u;for(S=m;S>=0;S--){for(L=0,w=0;w<=I&&w<=m-S;w++)L+=i[w]*v[S+w];c[m-S]=L}for(L=0,S=m;S>=0;S--)L+=c[S];for(C===0?h[0]=L:h[0]=-L,L=c[0]-L,S=1;S<=m;S++)L+=c[S];return C===0?h[1]=L:h[1]=-L,$&7}function d(p,h,m,v){var b,g,_,y,E,A,L,C,I;for(g=4,y=v-1,_=(m-3)/24|0,_<0&&(_=0),A=m-24*(_+1),C=_-y,I=y+g,L=0;L<=I;L++)C<0?a[L]=0:a[L]=t[C],C+=1;for(L=0;L<=g;L++){for(b=0,C=0;C<=y;C++)b+=p[C]*a[y+(L-C)];s[L]=b}return E=g,f(p,h,E,s,A,g,_,y,a)}return v0=d,v0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m0,d4;function nN(){if(d4)return m0;d4=1;var n=Math.round;return m0=n,m0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b0,p4;function Ay(){if(p4)return b0;p4=1;var n=nN();return b0=n,b0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var g0,h4;function rN(){if(h4)return g0;h4=1;var n=Ay(),e=En(),r=.6366197723675814,t=1.5707963267341256,i=6077100506506192e-26,o=6077100506303966e-26,u=20222662487959506e-37,a=20222662487111665e-37,s=84784276603689e-45,c=2047;function l(f,d,p){var h,m,v,b,g,_,y;return m=n(f*r),b=f-m*t,g=m*i,y=d>>20|0,p[0]=b-g,h=e(p[0]),_=y-(h>>20&c),_>16&&(v=b,g=m*o,b=v-g,g=m*u-(v-b-g),p[0]=b-g,h=e(p[0]),_=y-(h>>20&c),_>49&&(v=b,g=m*a,b=v-g,g=m*s-(v-b-g),p[0]=b-g)),p[1]=b-p[0]-g,m}return g0=l,g0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _0,v4;function tN(){if(v4)return _0;v4=1;var n=Ir(),e=zo(),r=yy(),t=En(),i=KM(),o=Jo(),u=eN(),a=rN(),s=0,c=16777216,l=1.5707963267341256,f=6077100506506192e-26,d=2*f,p=3*f,h=4*f,m=598523,v=1072243195,b=1073928572,g=1074752122,_=1074977148,y=1075183036,E=1075388923,A=1075594811,L=1094263291,C=[0,0,0],I=[0,0];function S(w,$){var k,R,F,T,U,O,D,q;if(F=t(w)|0,T=F&n|0,T<=v)return $[0]=w,$[1]=0,0;if(T<=g)return(T&r)===m?a(w,T,$):T<=b?F>0?(q=w-l,$[0]=q-f,$[1]=q-$[0]-f,1):(q=w+l,$[0]=q+f,$[1]=q-$[0]+f,-1):F>0?(q=w-2*l,$[0]=q-d,$[1]=q-$[0]-d,2):(q=w+2*l,$[0]=q+d,$[1]=q-$[0]+d,-2);if(T<=A)return T<=y?T===_?a(w,T,$):F>0?(q=w-3*l,$[0]=q-p,$[1]=q-$[0]-p,3):(q=w+3*l,$[0]=q+p,$[1]=q-$[0]+p,-3):T===E?a(w,T,$):F>0?(q=w-4*l,$[0]=q-h,$[1]=q-$[0]-h,4):(q=w+4*l,$[0]=q+h,$[1]=q-$[0]+h,-4);if(T<L)return a(w,T,$);if(T>=e)return $[0]=NaN,$[1]=NaN,0;for(k=i(w),R=(T>>20)-1046,q=o(T-(R<<20|0),k),O=0;O<2;O++)C[O]=q|0,q=(q-C[O])*c;for(C[2]=q,U=3;C[U-1]===s;)U-=1;return D=u(C,I,R,U,1),F<0?($[0]=-I[0],$[1]=-I[1],-D):($[0]=I[0],$[1]=I[1],D)}return _0=S,_0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y0,m4;function Ly(){if(m4)return y0;m4=1;var n=tN();return y0=n,y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var E0,b4;function iN(){if(b4)return E0;b4=1;var n=Ir(),e=zo(),r=En(),t=$y(),i=Sy(),o=Ly(),u=1072243195,a=1045430272,s=[0,0];function c(l){var f,d;if(f=r(l),f&=n,f<=u)return f<a?l:i(l,0);if(f>=e)return NaN;switch(d=o(l,s),d&3){case 0:return i(s[0],s[1]);case 1:return t(s[0],s[1]);case 2:return-i(s[0],s[1]);default:return-t(s[0],s[1])}}return E0=c,E0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w0,g4;function ii(){if(g4)return w0;g4=1;var n=iN();return w0=n,w0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $0,_4;function Zo(){if(_4)return $0;_4=1;var n=2.5066282746310007;return $0=n,$0}/**
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
*/var S0,y4;function oN(){if(y4)return S0;y4=1;function n(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}return S0=n,S0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var A0,E4;function uN(){if(E4)return A0;E4=1;var n=Zo(),e=Ne(),r=Me(),t=oN(),i=143.01608;function o(u){var a,s,c;return a=1/u,a=1+a*t(a),s=r(u),u>i?(c=e(u,.5*u-.25),s=c*(c/s)):s=e(u,u-.5)/s,n*s*a}return A0=o,A0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L0,w4;function aN(){if(w4)return L0;w4=1;var n=.5772156649015329;return L0=n,L0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var I0,$4;function sN(){if($4)return I0;$4=1;var n=aN();function e(r,t){return t/((1+n*r)*r)}return I0=e,I0}/**
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
*/var k0,S4;function cN(){if(S4)return k0;S4=1;function n(e){var r,t,i;return e===0?1:(e<0?r=-e:r=e,r<=1?(t=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),i=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,t=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),i=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),t/i)}return k0=n,k0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var R0,A4;function lN(){if(A4)return R0;A4=1;var n=ue(),e=lt(),r=Ey(),t=Ee(),i=Xn(),o=ii(),u=Ce(),a=tn(),s=mr(),c=uN(),l=sN(),f=cN();function d(p){var h,m,v,b;if(e(p)&&p<0||p===a||n(p))return NaN;if(p===0)return r(p)?a:u;if(p>171.61447887182297)return u;if(p<-170.5674972726612)return 0;if(m=t(p),m>33)return p>=0?c(p):(v=i(m),(v&1)===0?h=-1:h=1,b=m-v,b>.5&&(v+=1,b=m-v),b=m*o(s*b),h*s/(t(b)*c(m)));for(b=1;p>=3;)p-=1,b*=p;for(;p<0;){if(p>-1e-9)return l(p,b);b/=p,p+=1}for(;p<2;){if(p<1e-9)return l(p,b);b/=p,p+=1}return p===2?b:(p-=2,b*f(p))}return R0=d,R0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C0,L4;function Kn(){if(L4)return C0;L4=1;var n=lN();return C0=n,C0}/**
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
*/var M0,I4;function eu(){if(I4)return M0;I4=1;var n=170;return M0=n,M0}const fN=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N0,k4;function dN(){if(k4)return N0;k4=1;var n=ue(),e=lt(),r=Kn(),t=Ce(),i=eu(),o=fN;function u(a){return n(a)?NaN:e(a)?a<0?NaN:a<=i?o[a]:t:r(a+1)}return N0=u,N0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T0,R4;function Iy(){if(R4)return T0;R4=1;var n=dN();return T0=n,T0}/**
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
*/var q0,C4;function pN(){if(C4)return q0;C4=1;function n(e){var r,t,i;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(t=3847467039331777e-5+e*(3685766504351951e-5+e*(1588920245372942e-5+e*(4059208354298835e-6+e*(6805476611834733e-7+e*(7823975500312005e-8+e*(6246580776401795e-9+e*(341986.3488721347+e*(12287.194511824551+e*(261.61404416416684+e*2.5066282746310007))))))))),i=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=2.5066282746310007+e*(261.61404416416684+e*(12287.194511824551+e*(341986.3488721347+e*(6246580776401795e-9+e*(7823975500312005e-8+e*(6805476611834733e-7+e*(4059208354298835e-6+e*(1588920245372942e-5+e*(3685766504351951e-5+e*3847467039331777e-5))))))))),i=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/i)}return q0=n,q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var F0,M4;function hN(){if(M4)return F0;M4=1;var n=pN();return F0=n,F0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O0,N4;function vN(){if(N4)return O0;N4=1;var n=hN();return O0=n,O0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P0,T4;function oi(){if(T4)return P0;T4=1;var n=10.900511;return P0=n,P0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var D0,q4;function mN(){if(q4)return D0;q4=1;var n=vN(),e=Kn(),r=wn(),t=Ee(),i=Me(),o=Ne(),u=Yn(),a=ft(),s=oi(),c=eu(),l=4269068009004705e289;function f(d,p){var h,m,v;return d<u?p>=c?(m=f(p,c-p),m*=d,m*=l,1/m):1/(d*e(d+p)):(v=d+s-.5,d+p===d?t(p/v)<u?h=i(-p):h=1:(t(p)<10?h=i((.5-d)*r(p/v)):h=o(v/(v+p),d-.5),h*=n(d)/n(d+p)),h*=o(a/(v+p),p),h)}return D0=f,D0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var x0,F4;function bN(){if(F4)return x0;F4=1;var n=Ee(),e=Xn(),r=Kn(),t=Iy(),i=eu(),o=mN();function u(a,s){var c,l,f;if(a<=0||a+s<=0)return r(a)/r(a+s);if(l=e(s),l===s){if(f=e(a),f===a&&a<=i&&a+s<=i)return t(f-1)/t(l+f-1);if(n(s)<20){if(s===0)return 1;if(s<0){for(a-=1,c=a,s+=1;s!==0;)a-=1,c*=a,s+=1;return c}for(c=1/a,s-=1;s!==0;)a+=1,c/=a,s-=1;return c}}return o(a,s)}return x0=u,x0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0,O4;function y2(){if(O4)return B0;O4=1;var n=bN();return B0=n,B0}/**
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
*/var H0,P4;function gN(){if(P4)return H0;P4=1;function n(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}return H0=n,H0}/**
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
*/var U0,D4;function _N(){if(D4)return U0;D4=1;function n(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}return U0=n,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var j0,x4;function yN(){if(x4)return j0;x4=1;var n=En(),e=ri(),r=ue(),t=Lr(),i=tn(),o=gN(),u=_N(),a=.6931471803691238,s=19082149292705877e-26,c=0x40000000000000,l=.3333333333333333,f=1048575,d=2146435072,p=1048576,h=1072693248;function m(v){var b,g,_,y,E,A,L,C,I,S,w,$;return v===0?i:r(v)||v<0?NaN:(g=n(v),E=0,g<p&&(E-=54,v*=c,g=n(v)),g>=d?v+v:(E+=(g>>20)-t|0,g&=f,C=g+614244&1048576|0,v=e(v,g|C^h),E+=C>>20|0,L=v-1,(f&2+g)<3?L===0?E===0?0:E*a+E*s:(A=L*L*(.5-l*L),E===0?L-A:E*a-(A-E*s-L)):(S=L/(2+L),$=S*S,C=g-398458|0,w=$*$,I=440401-g|0,y=w*o(w),_=$*u(w),C|=I,A=_+y,C>0?(b=.5*L*L,E===0?L-(b-S*(b+A)):E*a-(b-(S*(b+A)+E*s)-L)):E===0?L-S*(L-A):E*a-(S*(L-A)-E*s-L))))}return j0=m,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,B4;function we(){if(B4)return W0;B4=1;var n=yN();return W0=n,W0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var G0,H4;function EN(){if(H4)return G0;H4=1;var n=En(),e=$y(),r=Sy(),t=Ly(),i=Ir(),o=zo(),u=[0,0],a=1072243195,s=1044381696;function c(l){var f,d;if(f=n(l),f&=i,f<=a)return f<s?1:e(l,0);if(f>=o)return NaN;switch(d=t(l,u),d&3){case 0:return e(u[0],u[1]);case 1:return-r(u[0],u[1]);case 2:return-e(u[0],u[1]);default:return r(u[0],u[1])}}return G0=c,G0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0,U4;function E2(){if(U4)return V0;U4=1;var n=EN();return V0=n,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X0,j4;function wN(){if(j4)return X0;j4=1;var n=ue(),e=st(),r=E2(),t=ii(),i=Ee(),o=b2(),u=mr();function a(s){var c,l;return n(s)?NaN:e(s)?NaN:(l=s%2,c=i(l),c===0||c===1?o(0,l):c<.25?t(u*l):c<.75?(c=.5-c,o(r(u*c),l)):c<1.25?(l=o(1,l)-l,t(u*l)):c<1.75?(c-=1.5,-o(r(u*c),l)):(l-=o(2,l),t(u*l)))}return X0=a,X0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y0,W4;function $N(){if(W4)return Y0;W4=1;var n=wN();return Y0=n,Y0}/**
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
*/var K0,G4;function SN(){if(G4)return K0;G4=1;function n(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}return K0=n,K0}/**
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
*/var J0,V4;function AN(){if(V4)return J0;V4=1;function n(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}return J0=n,J0}/**
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
*/var z0,X4;function LN(){if(X4)return z0;X4=1;function n(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}return z0=n,z0}/**
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
*/var Q0,Y4;function IN(){if(Y4)return Q0;Y4=1;function n(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}return Q0=n,Q0}/**
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
*/var Z0,K4;function kN(){if(K4)return Z0;K4=1;function n(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}return Z0=n,Z0}/**
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
*/var el,J4;function RN(){if(J4)return el;J4=1;function n(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}return el=n,el}/**
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
*/var nl,z4;function CN(){if(z4)return nl;z4=1;function n(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}return nl=n,nl}/**
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
*/var rl,Q4;function MN(){if(Q4)return rl;Q4=1;function n(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}return rl=n,rl}/**
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
*/var tl,Z4;function NN(){if(Z4)return tl;Z4=1;function n(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}return tl=n,tl}/**
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
*/var il,eb;function TN(){if(eb)return il;eb=1;function n(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}return il=n,il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ol,nb;function qN(){if(nb)return ol;nb=1;var n=ue(),e=st(),r=Ee(),t=we(),i=v2(),o=$N(),u=mr(),a=Ce(),s=SN(),c=AN(),l=LN(),f=IN(),d=kN(),p=RN(),h=CN(),m=MN(),v=NN(),b=TN(),g=.07721566490153287,_=.3224670334241136,y=1,E=-.07721566490153287,A=.48383612272381005,L=-.1475877229945939,C=.06462494023913339,I=-.07721566490153287,S=1,w=.4189385332046727,$=1.4616321449683622,k=4503599627370496,R=72057594037927940,F=13877787807814457e-33,T=1.4616321449683622,U=-.12148629053584961,O=-3638676997039505e-33;function D(q){var ne,W,Y,Z,ie,G,B,H,ge,pe,Q,oe,$e;if(n(q)||e(q))return q;if(q===0)return a;if(q<0?(ne=!0,q=-q):ne=!1,q<F)return-t(q);if(ne){if(q>=k||(ge=o(q),ge===0))return a;W=t(u/r(ge*q))}if(q===1||q===2)return 0;if(q<2)switch(q<=.9?($e=-t(q),q>=$-1+.27?(Q=1-q,Y=0):q>=$-1-.27?(Q=q-(T-1),Y=1):(Q=q,Y=2)):($e=0,q>=$+.27?(Q=2-q,Y=0):q>=$-.27?(Q=q-T,Y=1):(Q=q-1,Y=2)),Y){case 0:oe=Q*Q,G=g+oe*s(oe),ie=oe*(_+oe*c(oe)),B=Q*G+ie,$e+=B-.5*Q;break;case 1:oe=Q*Q,pe=oe*Q,G=A+pe*d(pe),ie=L+pe*p(pe),Z=C+pe*h(pe),B=oe*G-(O-pe*(ie+Q*Z)),$e+=U+B;break;case 2:G=Q*(I+Q*m(Q)),ie=S+Q*v(Q),$e+=-.5*Q+G/ie;break}else if(q<8)switch(Y=i(q),Q=q-Y,B=Q*(E+Q*f(Q)),H=y+Q*l(Q),$e=.5*Q+B/H,oe=1,Y){case 7:oe*=Q+6;case 6:oe*=Q+5;case 5:oe*=Q+4;case 4:oe*=Q+3;case 3:oe*=Q+2,$e+=t(oe)}else q<R?(ge=t(q),oe=1/q,Q=oe*oe,pe=w+oe*b(Q),$e=(q-.5)*(ge-1)+pe):$e=q*(t(q)-1);return ne&&($e=W-$e),$e}return ol=D,ol}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ul,rb;function dt(){if(rb)return ul;rb=1;var n=qN();return ul=n,ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var al,tb;function br(){if(tb)return al;tb=1;var n=709.782712893384;return al=n,al}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sl,ib;function FN(){if(ib)return sl;ib=1;var n=14901161193847656e-24;return sl=n,sl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cl,ob;function ON(){if(ob)return cl;ob=1;var n=eval;return cl=n,cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ll,ub;function PN(){if(ub)return ll;ub=1;var n=ON();function e(){var r;try{n('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}return ll=e,ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fl,ab;function ky(){if(ab)return fl;ab=1;var n=PN();return fl=n,fl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dl,sb;function DN(){if(sb)return dl;sb=1;var n=Ee(),e=Yn(),r=1e6;function t(i,o){var u,a,s,c,l,f;if(f={},arguments.length>1&&(f=o),a=f.tolerance||e,c=f.maxTerms||r,l=f.initialValue||0,u=typeof i.next=="function",u===!0){for(s of i)if(l+=s,n(a*l)>=n(s)||--c===0)break}else do s=i(),l+=s;while(n(a*l)<n(s)&&--c);return l}return dl=t,dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pl,cb;function xN(){if(cb)return pl;cb=1;var n=Ee(),e=Yn(),r=1e6;function t(i,o){var u,a,s,c,l;l={},arguments.length>1&&(l=o),u=l.tolerance||e,s=l.maxTerms||r,c=l.initialValue||0;do a=i(),c+=a;while(n(u*c)<n(a)&&--s);return c}return pl=t,pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hl,lb;function ui(){if(lb)return hl;lb=1;var n=ky(),e=DN(),r=xN(),t;return n()?t=e:t=r,hl=t,hl}/**
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
*/var vl,fb;function BN(){if(fb)return vl;fb=1;function n(e,r){var t=1,i=e,o=r;return u;function u(){var a=t;return t*=i/o,i-=1,a}}return vl=n,vl}/**
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
*/var ml,db;function HN(){if(db)return ml;db=1;var n=ui(),e=BN();function r(t,i){var o,u;return u=e(t,i),o=n(u),o}return ml=r,ml}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bl,pb;function UN(){if(pb)return bl;pb=1;var n=Me();function e(r,t){var i,o,u,a;if(u=n(-t),o=u,o!==0)for(i=o,a=1;a<r;++a)i/=a,i*=t,o+=i;return o}return bl=e,bl}/**
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
*/var gl,hb;function jN(){if(hb)return gl;hb=1;function n(e){return e===0?-.3250421072470015:-.3250421072470015+e*(-.02848174957559851+e*(-.005770270296489442+e*-23763016656650163e-21))}return gl=n,gl}/**
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
*/var _l,vb;function WN(){if(vb)return _l;vb=1;function n(e){return e===0?.39791722395915535:.39791722395915535+e*(.0650222499887673+e*(.005081306281875766+e*(.00013249473800432164+e*-3960228278775368e-21)))}return _l=n,_l}/**
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
*/var yl,mb;function GN(){if(mb)return yl;mb=1;function n(e){return e===0?.41485611868374833:.41485611868374833+e*(-.3722078760357013+e*(.31834661990116175+e*(-.11089469428239668+e*(.035478304325618236+e*-.002166375594868791))))}return yl=n,yl}/**
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
*/var El,bb;function VN(){if(bb)return El;bb=1;function n(e){return e===0?.10642088040084423:.10642088040084423+e*(.540397917702171+e*(.07182865441419627+e*(.12617121980876164+e*(.01363708391202905+e*.011984499846799107))))}return El=n,El}/**
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
*/var wl,gb;function XN(){if(gb)return wl;gb=1;function n(e){return e===0?-.6938585727071818:-.6938585727071818+e*(-10.558626225323291+e*(-62.375332450326006+e*(-162.39666946257347+e*(-184.60509290671104+e*(-81.2874355063066+e*-9.814329344169145)))))}return wl=n,wl}/**
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
*/var $l,_b;function YN(){if(_b)return $l;_b=1;function n(e){return e===0?19.651271667439257:19.651271667439257+e*(137.65775414351904+e*(434.56587747522923+e*(645.3872717332679+e*(429.00814002756783+e*(108.63500554177944+e*(6.570249770319282+e*-.0604244152148581))))))}return $l=n,$l}/**
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
*/var Sl,yb;function KN(){if(yb)return Sl;yb=1;function n(e){return e===0?-.799283237680523:-.799283237680523+e*(-17.757954917754752+e*(-160.63638485582192+e*(-637.5664433683896+e*(-1025.0951316110772+e*-483.5191916086514))))}return Sl=n,Sl}/**
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
*/var Al,Eb;function JN(){if(Eb)return Al;Eb=1;function n(e){return e===0?30.33806074348246:30.33806074348246+e*(325.7925129965739+e*(1536.729586084437+e*(3199.8582195085955+e*(2553.0504064331644+e*(474.52854120695537+e*-22.44095244658582)))))}return Al=n,Al}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ll,wb;function zN(){if(wb)return Ll;wb=1;var n=ue(),e=Me(),r=ti(),t=Ce(),i=tn(),o=jN(),u=WN(),a=GN(),s=VN(),c=XN(),l=YN(),f=KN(),d=JN(),p=1e-300,h=13877787807814457e-33,m=.8450629115104675,v=.12837916709551256,b=1,g=-.0023621185607526594,_=1,y=-.009864944034847148,E=1,A=-.0098649429247001,L=1;function C(I){var S,w,$,k,R,F,T,U;if(n(I))return NaN;if(I===t)return 0;if(I===i)return 2;if(I===0)return 1;if(I<0?(S=!0,w=-I):(S=!1,w=I),w<.84375)return w<h?1-I:($=I*I,k=v+$*o($),R=b+$*u($),F=k/R,I<.25?1-(I+I*F):(k=I*F,k+=I-.5,.5-k));if(w<1.25)return R=w-1,T=g+R*a(R),U=_+R*s(R),S?1+m+T/U:1-m-T/U;if(w<28){if(R=1/(w*w),w<2.857142857142857)k=y+R*c(R),R=E+R*l(R);else{if(I<-6)return 2-p;k=A+R*f(R),R=L+R*d(R)}return $=r(w,0),k=e(-($*$)-.5625)*e(($-w)*($+w)+k/R),S?2-k/w:k/w}return S?2-p:p*p}return Ll=C,Ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Il,$b;function nu(){if($b)return Il;$b=1;var n=zN();return Il=n,Il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var kl,Sb;function QN(){if(Sb)return kl;Sb=1;var n=nu(),e=ye(),r=Me(),t=mr();function i(o,u){var a,s,c,l,f;if(l=n(e(u)),l!==0&&o>1){for(s=r(-u)/e(t*u),s*=u,a=.5,s/=a,c=s,f=2;f<o;++f)s/=f-a,s*=u,c+=s;l+=c}return l}return kl=i,kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rl,Ab;function pt(){if(Ab)return Rl;Ab=1;var n=-708.3964185322641;return Rl=n,Rl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Cl,Lb;function ZN(){if(Lb)return Cl;Lb=1;var n=Me(),e=Ne(),r=we(),t=br(),i=pt();function o(u,a){var s,c;return c=u*r(a),a>=1?c<t&&-a>i?s=e(a,u)*n(-a):u>=1?s=e(a/n(a/u),u):s=n(c-a):c>i?s=e(a,u)*n(-a):a/u<t?s=e(a/n(a/u),u):s=n(c-a),s}return Cl=o,Cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ml,Ib;function Ry(){if(Ib)return Ml;Ib=1;function n(e,r){var t,i;if(i=e.length,i<2||r===0)return i===0?0:e[0];for(i-=1,t=e[i]*r+e[i-1],i-=2;i>=0;)t=t*r+e[i],i-=1;return t}return Ml=n,Ml}/**
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
*/var Nl,kb;function eT(){if(kb)return Nl;kb=1;var n=Function;return Nl=n,Nl}/**
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
*/var Tl,Rb;function nT(){if(Rb)return Tl;Rb=1;var n=eT();return Tl=n,Tl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ql,Cb;function rT(){if(Cb)return ql;Cb=1;var n=nT(),e=Ry();function r(t){var i,o,u,a;if(t.length>500)return s;if(i="return function evalpoly(x){",o=t.length,o===0)i+="return 0.0;";else if(o===1)i+="return "+t[0]+";";else{for(i+="if(x===0.0){return "+t[0]+";}",i+="return "+t[0],u=o-1,a=1;a<o;a++)i+="+x*",a<u&&(i+="("),i+=t[a];for(a=0;a<u-1;a++)i+=")";i+=";"}return i+="}",i+="//# sourceURL=evalpoly.factory.js",new n(i)();function s(c){return e(t,c)}}return ql=r,ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fl,Mb;function gr(){if(Mb)return Fl;Mb=1;var n=rn(),e=Ry(),r=rT();return n(e,"factory",r),Fl=e,Fl}/**
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
*/var Ol,Nb;function tT(){if(Nb)return Ol;Nb=1;function n(e){var r=-e,t=-1,i=0;return o;function o(){return t*=r,i+=1,t/i}}return Ol=n,Ol}/**
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
*/var Pl,Tb;function iT(){if(Tb)return Pl;Tb=1;var n=Ee(),e=we(),r=Yn(),t=ui(),i=tT();function o(u){var a,s;return u<=-1?NaN:(s=n(u),s>.95?e(1+u)-u:s<r?-u*u/2:(a={initialValue:-u},t(i(u),a)))}return Pl=o,Pl}/**
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
*/var Dl,qb;function Cy(){if(qb)return Dl;qb=1;var n=iT();return Dl=n,Dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xl,Fb;function ru(){if(Fb)return xl;Fb=1;var n=6.283185307179586;return xl=n,xl}/**
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
*/var Bl,Ob;function oT(){if(Ob)return Bl;Ob=1;function n(e){return e===0?-.3333333333333333:-.3333333333333333+e*(.08333333333333333+e*(-.014814814814814815+e*(.0011574074074074073+e*(.0003527336860670194+e*(-.0001787551440329218+e*(3919263178522438e-20+e*(-21854485106799924e-22+e*(-185406221071516e-20+e*(8296711340953087e-22+e*(-17665952736826078e-23+e*(6707853543401498e-24+e*(10261809784240309e-24+e*(-4382036018453353e-24+e*914769958223679e-24)))))))))))))}return Bl=n,Bl}/**
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
*/var Hl,Pb;function uT(){if(Pb)return Hl;Pb=1;function n(e){return e===0?-.001851851851851852:-.001851851851851852+e*(-.003472222222222222+e*(.0026455026455026454+e*(-.0009902263374485596+e*(.00020576131687242798+e*(-4018775720164609e-22+e*(-18098550334489977e-21+e*(764916091608111e-20+e*(-16120900894563446e-22+e*(4647127802807434e-24+e*(1378633446915721e-22+e*(-5752545603517705e-23+e*11951628599778148e-24)))))))))))}return Hl=n,Hl}/**
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
*/var Ul,Db;function aT(){if(Db)return Ul;Db=1;function n(e){return e===0?.004133597883597883:.004133597883597883+e*(-.0026813271604938273+e*(.0007716049382716049+e*(20093878600823047e-22+e*(-.00010736653226365161+e*(52923448829120125e-21+e*(-12760635188618728e-21+e*(3423578734096138e-23+e*(13721957309062932e-22+e*(-6298992138380055e-22+e*14280614206064242e-23)))))))))}return Ul=n,Ul}/**
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
*/var jl,xb;function sT(){if(xb)return jl;xb=1;function n(e){return e===0?.0006494341563786008:.0006494341563786008+e*(.00022947209362139917+e*(-.0004691894943952557+e*(.00026772063206283885+e*(-7561801671883977e-20+e*(-2396505113867297e-22+e*(11082654115347302e-21+e*(-56749528269915965e-22+e*14230900732435883e-22)))))))}return jl=n,jl}/**
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
*/var Wl,Bb;function cT(){if(Bb)return Wl;Bb=1;function n(e){return e===0?-.0008618882909167117:-.0008618882909167117+e*(.0007840392217200666+e*(-.0002990724803031902+e*(-14638452578843418e-22+e*(6641498215465122e-20+e*(-3968365047179435e-20+e*11375726970678419e-21)))))}return Wl=n,Wl}/**
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
*/var Gl,Hb;function lT(){if(Hb)return Gl;Hb=1;function n(e){return e===0?-.00033679855336635813:-.00033679855336635813+e*(-6972813758365858e-20+e*(.0002772753244959392+e*(-.00019932570516188847+e*(6797780477937208e-20+e*(1419062920643967e-22+e*(-13594048189768693e-21+e*(8018470256334202e-21+e*-2291481176508095e-21)))))))}return Gl=n,Gl}/**
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
*/var Vl,Ub;function fT(){if(Ub)return Vl;Ub=1;function n(e){return e===0?.0005313079364639922:.0005313079364639922+e*(-.0005921664373536939+e*(.0002708782096718045+e*(7902353232660328e-22+e*(-8153969367561969e-20+e*(561168275310625e-19+e*-18329116582843375e-21)))))}return Vl=n,Vl}/**
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
*/var Xl,jb;function dT(){if(jb)return Xl;jb=1;function n(e){return e===0?.00034436760689237765:.00034436760689237765+e*(5171790908260592e-20+e*(-.00033493161081142234+e*(.0002812695154763237+e*-.00010976582244684731)))}return Xl=n,Xl}/**
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
*/var Yl,Wb;function pT(){if(Wb)return Yl;Wb=1;function n(e){return e===0?-.0006526239185953094:-.0006526239185953094+e*(.0008394987206720873+e*-.000438297098541721)}return Yl=n,Yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Kl,Gb;function hT(){if(Gb)return Kl;Gb=1;var n=gr(),e=Cy(),r=nu(),t=ye(),i=Me(),o=ru(),u=oT(),a=uT(),s=aT(),c=sT(),l=cT(),f=lT(),d=fT(),p=dT(),h=pT(),m=[0,0,0,0,0,0,0,0,0,0];function v(b,g){var _,y,E,A,L;return y=(g-b)/b,E=-e(y),A=b*E,L=t(2*E),g<b&&(L=-L),m[0]=u(L),m[1]=a(L),m[2]=s(L),m[3]=c(L),m[4]=l(L),m[5]=f(L),m[6]=d(L),m[7]=p(L),m[8]=h(L),m[9]=-.0005967612901927463,_=n(m,1/b),_*=i(-A)/t(o*b),g<b&&(_=-_),_+=r(t(A))/2,_}return Kl=v,Kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Jl,Vb;function vT(){if(Vb)return Jl;Vb=1;function n(e,r){var t=1,i=e,o=r;return u;function u(){var a=t;return i+=1,t*=o/i,a}}return Jl=n,Jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var zl,Xb;function My(){if(Xb)return zl;Xb=1;var n=ui(),e=vT();function r(t,i,o){var u,a;return o=o||0,a=e(t,i),u=n(a,{initialValue:o}),u}return zl=r,zl}/**
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
*/var Ql,Yb;function mT(){if(Yb)return Ql;Yb=1;function n(e){var r,t,i;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(t=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),i=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),i=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/i)}return Ql=n,Ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Zl,Kb;function bT(){if(Kb)return Zl;Kb=1;var n=mT();return Zl=n,Zl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ef,Jb;function tu(){if(Jb)return ef;Jb=1;var n=bT();return ef=n,ef}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var nf,zb;function gT(){if(zb)return nf;zb=1;var n=tu(),e=dt(),r=Kn(),t=Cy(),i=ye(),o=Ee(),u=Me(),a=Ne(),s=Rr(),c=vr(),l=we(),f=Cr(),d=br(),p=pt(),h=oi(),m=ft();function v(b,g){var _,y,E,A,L,C,I;return E=b+h-.5,I=(g-b-h+.5)/E,b<1?g<=p||b<1/f?u(b*l(g)-g-e(b)):a(g,b)*u(-g)/r(b):(o(I*I*b)<=100&&b>150?(_=b*t(I)+g*(.5-h)/E,_=u(_)):(A=b*l(g/E),L=b-g,c(A,L)<=p||s(A,L)>=d?(y=L/b,c(A,L)/2>p&&s(A,L)/2<d?(C=a(g/E,b/2)*u(L/2),_=C*C):c(A,L)/4>p&&s(A,L)/4<d&&g>b?(C=a(g/E,b/4)*u(L/4),_=C*C,_*=_):y>p&&y<d?_=a(g*u(y)/E,b):_=u(A+L)):_=a(g/E,b)*u(L)),_*=i(E/m)/n(b),_)}return nf=v,nf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var rf,Qb;function _T(){if(Qb)return rf;Qb=1;var n=ue(),e=st(),r=Ee(),t=at(),i=we(),o=Ne(),u=v2();function a(s,c){var l,f;if(n(s)||n(c))return NaN;if(c===0)return 0;if(s===0)return-1;if(s<0&&c%2===0&&(s=-s),s>0){if((r(c*(s-1))<.5||r(c)<.2)&&(f=i(s)*c,f<.5))return t(f)}else if(u(c)!==c)return NaN;return l=o(s,c)-1,e(l)||n(l)?NaN:l}return rf=a,rf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tf,Zb;function yT(){if(Zb)return tf;Zb=1;var n=_T();return tf=n,tf}/**
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
*/var of,eg;function ET(){if(eg)return of;eg=1;function n(e){var r,t,i;return e===0?-.01803556856784494:(e<0?r=-e:r=e,r<=1?(t=-.01803556856784494+e*(.02512664961998968+e*(.049410315156753225+e*(.0172491608709614+e*(-.0002594535632054381+e*(-.0005410098692152044+e*(-3245886498259485e-20+e*0)))))),i=1+e*(1.962029871977952+e*(1.4801966942423133+e*(.5413914320717209+e*(.09885042511280101+e*(.008213096746488934+e*(.00022493629192211576+e*-22335276320861708e-23))))))):(e=1/e,t=0+e*(-3245886498259485e-20+e*(-.0005410098692152044+e*(-.0002594535632054381+e*(.0172491608709614+e*(.049410315156753225+e*(.02512664961998968+e*-.01803556856784494)))))),i=-22335276320861708e-23+e*(.00022493629192211576+e*(.008213096746488934+e*(.09885042511280101+e*(.5413914320717209+e*(1.4801966942423133+e*(1.962029871977952+e*1))))))),t/i)}return of=n,of}/**
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
*/var uf,ng;function wT(){if(ng)return uf;ng=1;function n(e){var r,t,i;return e===0?.04906224540690395:(e<0?r=-e:r=e,r<=1?(t=.04906224540690395+e*(-.09691175301595212+e*(-.4149833583594954+e*(-.4065671242119384+e*(-.1584135863906922+e*(-.024014982064857155+e*-.0010034668769627955))))),i=1+e*(3.0234982984646304+e*(3.4873958536072385+e*(1.9141558827442668+e*(.5071377386143635+e*(.05770397226904519+e*.001957681026011072)))))):(e=1/e,t=-.0010034668769627955+e*(-.024014982064857155+e*(-.1584135863906922+e*(-.4065671242119384+e*(-.4149833583594954+e*(-.09691175301595212+e*.04906224540690395))))),i=.001957681026011072+e*(.05770397226904519+e*(.5071377386143635+e*(1.9141558827442668+e*(3.4873958536072385+e*(3.0234982984646304+e*1)))))),t/i)}return uf=n,uf}/**
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
*/var af,rg;function $T(){if(rg)return af;rg=1;function n(e){var r,t,i;return e===0?-.029232972183027003:(e<0?r=-e:r=e,r<=1?(t=-.029232972183027003+e*(.14421626775719232+e*(-.14244039073863127+e*(.05428096940550536+e*(-.008505359768683364+e*(.0004311713426792973+e*0))))),i=1+e*(-1.5016935605448505+e*(.846973248876495+e*(-.22009515181499575+e*(.02558279715597587+e*(-.0010066679553914337+e*-8271935218912905e-22)))))):(e=1/e,t=0+e*(.0004311713426792973+e*(-.008505359768683364+e*(.05428096940550536+e*(-.14244039073863127+e*(.14421626775719232+e*-.029232972183027003))))),i=-8271935218912905e-22+e*(-.0010066679553914337+e*(.02558279715597587+e*(-.22009515181499575+e*(.846973248876495+e*(-1.5016935605448505+e*1)))))),t/i)}return af=n,af}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var sf,tg;function ST(){if(tg)return sf;tg=1;var n=we(),e=Yn(),r=ET(),t=wT(),i=$T(),o=.15896368026733398,u=.5281534194946289,a=.45201730728149414;function s(c,l,f){var d,p,h,m;if(c<e)return-n(c);if(l===0||f===0)return 0;if(p=0,c>2){if(c>=3){do c-=1,f-=1,p+=n(c);while(c>=3);f=c-2}return h=f*(c+1),m=r(f),p+=h*o+h*m,p}return c<1&&(p+=-n(c),f=l,l=c,c+=1),c<=1.5?(h=t(l),d=l*f,p+=d*u+d*h,p):(h=f*l,m=i(-f),p+=h*a+h*m,p)}return sf=s,sf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var cf,ig;function AT(){if(ig)return cf;ig=1;var n=Kn(),e=at(),r=wn(),t=ue(),i=ST();function o(u){return t(u)?NaN:u<0?u<-.5?n(1+u)-1:e(-r(u)+i(u+2,u+1,u)):u<2?e(i(u+1,u,u-1)):n(1+u)-1}return cf=o,cf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lf,og;function LT(){if(og)return lf;og=1;var n=AT();return lf=n,lf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ff,ug;function IT(){if(ug)return ff;ug=1;function n(e,r){var t,i,o,u;return t=-r,r=-r,i=e+1,o=1,a;function a(){return u=t/i,t*=r,o+=1,t/=o,i+=1,u}}return ff=n,ff}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var df,ag;function kT(){if(ag)return df;ag=1;var n=yT(),e=ui(),r=LT(),t=IT();function i(o,u,a){var s,c,l,f,d;return c=r(o),l=(c+1)/o,f=n(u,o),c-=f,c/=o,d=t(o,u),f+=1,s=a?l:0,c=-f*e(d,{initialValue:(s-c)/f}),a&&(c=-c),[c,l]}return df=i,df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pf,sg;function iu(){if(sg)return pf;sg=1;var n=11754943508222875e-54;return pf=n,pf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hf,cg;function RT(){if(cg)return hf;cg=1;var n=Ee(),e=iu(),r=Yn(),t=1e6;function i(a,s,c){var l,f,d,p,h,m,v;if(l=typeof a.next=="function",v=l?a.next().value:a(),p=v[1],d=v[0],p===0&&(p=e),h=p,m=0,l===!0)do v=a.next().value,v&&(m=v[1]+v[0]*m,m===0&&(m=e),h=v[1]+v[0]/h,h===0&&(h=e),m=1/m,f=h*m,p*=f);while(n(f-1)>s&&--c);else do v=a(),v&&(m=v[1]+v[0]*m,m===0&&(m=e),h=v[1]+v[0]/h,h===0&&(h=e),m=1/m,f=h*m,p*=f);while(v&&n(f-1)>s&&--c);return d/p}function o(a,s,c){var l,f,d,p,h,m;if(l=typeof a.next=="function",m=l?a.next().value:a(),d=m[1],d===0&&(d=e),p=d,h=0,l===!0)do m=a.next().value,m&&(h=m[1]+m[0]*h,h===0&&(h=e),p=m[1]+m[0]/p,p===0&&(p=e),h=1/h,f=p*h,d*=f);while(m&&n(f-1)>s&&--c);else do m=a(),m&&(h=m[1]+m[0]*h,h===0&&(h=e),p=m[1]+m[0]/p,p===0&&(p=e),h=1/h,f=p*h,d*=f);while(m&&n(f-1)>s&&--c);return d}function u(a,s){var c,l,f;return l={},arguments.length>1&&(l=s),c=l.maxIter||t,f=l.tolerance||r,l.keep?o(a,f,c):i(a,f,c)}return hf=u,hf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vf,lg;function CT(){if(lg)return vf;lg=1;var n=Ee(),e=Yn(),r=iu(),t=1e6;function i(a,s,c){var l,f,d,p,h,m;m=a(),h=m[1],f=m[0],h===0&&(h=r),d=h,p=0;do m=a(),m&&(p=m[1]+m[0]*p,p===0&&(p=r),d=m[1]+m[0]/d,d===0&&(d=r),p=1/p,l=d*p,h*=l);while(m&&n(l-1)>s&&--c);return f/h}function o(a,s,c){var l,f,d,p,h;h=a(),p=h[1],p===0&&(p=r),f=p,d=0;do h=a(),h&&(d=h[1]+h[0]*d,d===0&&(d=r),f=h[1]+h[0]/f,f===0&&(f=r),d=1/d,l=f*d,p*=l);while(h&&n(l-1)>s&&--c);return p}function u(a,s){var c,l,f;return l={},arguments.length>1&&(l=s),f=l.tolerance||e,c=l.maxIter||t,l.keep?o(a,f,c):i(a,f,c)}return vf=u,vf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mf,fg;function Ny(){if(fg)return mf;fg=1;var n=ky(),e=RT(),r=CT(),t;return n()?t=e:t=r,mf=t,mf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bf,dg;function MT(){if(dg)return bf;dg=1;function n(e,r){var t=r-e+1,i=e,o=0;return u;function u(){return o+=1,t+=2,[o*(i-o),t]}}return bf=n,bf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var gf,pg;function Ty(){if(pg)return gf;pg=1;var n=Ny(),e=MT();function r(t,i){var o=e(t,i);return 1/(i-t+1+n(o))}return gf=r,gf}/**
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
*/var _f,hg;function NT(){if(hg)return _f;hg=1;var n=Xn(),e=Kn(),r=Ee(),t=Ne(),i=we(),o=FN(),u=Cr(),a=br(),s=HN(),c=UN(),l=QN(),f=ZN(),d=hT(),p=My(),h=gT(),m=kT(),v=Ty();function b(g,_,y,E){var A,L,C,I,S,w,$,k,R,F,T,U,O,D;switch($=0,k=E,w=_<30&&_<=g+1&&g<a,w?(O=n(_),R=O===_,C=R?!1:r(O-_)===.5):(R=!1,C=!1),R&&g>.6?(k=!k,L=0):C&&g>.2?(k=!k,L=1):g<o&&_>1?L=6:g>1e3&&(_<g||r(_-50)/g<1)?(k=!k,L=7):g<.5?-.4/i(g)<_?L=2:L=3:g<1.1?g*.75<_?L=2:L=3:(S=!1,y&&_>20&&(F=r((g-_)/_),_>200?20/_>F*F&&(S=!0):F<.4&&(S=!0)),S?L=5:g-1/(3*g)<_?L=2:(L=4,k=!k)),L){case 0:$=c(_,g),y===!1&&($*=e(_));break;case 1:$=l(_,g),y===!1&&($*=e(_));break;case 2:$=y?h(_,g):f(_,g),$!==0&&(I=0,A=!1,k&&(I=y?1:e(_),y||$>=1||u*$>I?(I/=$,y||_<1||u/_>I?(I*=-_,A=!0):I=0):I=0),$*=p(_,g,I)/_,A&&(k=!1,$=-$));break;case 3:k=!k,T=m(_,g,k),$=T[0],D=T[1],k=!1,y&&($/=D);break;case 4:$=y?h(_,g):f(_,g),$!==0&&($*=v(_,g));break;case 5:$=d(_,g),g>=_&&(k=!k);break;case 6:$=y?t(g,_)/e(_+1):t(g,_)/_,$*=1-_*g/(_+1);break;case 7:$=y?h(_,g):f(_,g),$/=g,$!==0&&($*=s(_,g));break}return y&&$>1&&($=1),k&&(U=y?1:e(_),$=U-$),$}return _f=b,_f}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var yf,vg;function TT(){if(vg)return yf;vg=1;var n=dt(),e=Me(),r=we(),t=Zo(),i=br(),o=Ce(),u=eu(),a=NT(),s=My(),c=Ty();function l(f,d,p,h){var m,v,b,g;return f<0||d<=0?NaN:(m=p===void 0?!0:p,b=h,d>=u&&!m?(b&&d*4<f?(g=d*r(f)-f,g+=r(c(d,f))):!b&&d>4*f?(g=d*r(f)-f,v=0,g+=r(s(d,f,v)/d)):(g=a(f,d,!0,b),g===0?b?(g=1+1/(12*d)+1/(288*d*d),g=r(g)-d+(d-.5)*r(d),g+=r(t)):(g=d*r(f)-f,v=0,g+=r(s(d,f,v)/d)):g=r(g)+n(d)),g>i?o:e(g)):a(f,d,m,b))}return yf=l,yf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ef,mg;function qy(){if(mg)return Ef;mg=1;var n=TT();return Ef=n,Ef}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var wf,bg;function qT(){if(bg)return wf;bg=1;var n=Me(),e=Ne(),r=we(),t=br(),i=pt();function o(u,a){var s,c;return c=u*r(a),a>=1?c<t&&-a>i?s=e(a,u)*n(-a):u>=1?s=e(a/n(a/u),u):s=n(c-a):c>i?s=e(a,u)*n(-a):a/u<t?s=e(a/n(a/u),u):s=n(c-a),s}return wf=o,wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $f,gg;function FT(){if(gg)return $f;gg=1;var n=tu(),e=dt(),r=Kn(),t=wn(),i=ye(),o=Ee(),u=Me(),a=Ne(),s=Rr(),c=vr(),l=we(),f=br(),d=pt(),p=oi(),h=ft();function m(v,b){var g,_,y,E,A,L,C;return y=v+p-.5,C=(b-v-p+.5)/y,v<1?b<=d?u(v*l(b)-b-e(v)):a(b,v)*u(-b)/r(v):(o(C*C*v)<=100&&v>150?(g=v*(t(C)-C)+b*(.5-p)/y,g=u(g)):(E=v*l(b/y),A=v-b,c(E,A)<=d||s(E,A)>=f?(_=A/v,c(E,A)/2>d&&s(E,A)/2<f?(L=a(b/y,v/2)*u(A/2),g=L*L):c(E,A)/4>d&&s(E,A)/4<f&&b>v?(L=a(b/y,v/4)*u(A/4),g=L*L,g*=g):_>d&&_<f?g=a(b*u(_)/y,v):g=u(E+A)):g=a(b/y,v)*u(A)),g*=i(y/h)/n(v),g)}return $f=m,$f}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Sf,_g;function OT(){if(_g)return Sf;_g=1;var n=y2(),e=Iy(),r=qy(),t=wn(),i=Ee(),o=Ne(),u=we(),a=kr(),s=Yn(),c=qT(),l=FT(),f=new Array(30);function d(p,h,m,v,b,g,_){var y,E,A,L,C,I,S,w,$,k,R,F,T,U,O,D,q,ne;if(I=h-1,q=p+I/2,v<.35?k=t(-v):k=u(m),ne=-q*k,F=l(h,ne),F<=a)return b;for(_?(y=F/n(p,h),y/=o(q,h)):y=c(h,ne)/o(q,h),y*=g,f[0]=1,T=r(ne,h,!0,!0),T/=F,L=b+y*T,A=1,S=k/2,S*=S,w=1,R=4*q*q,C=h,O=1;O<f.length;++O){for(A+=2,f[O]=0,$=h-O,E=3,U=1;U<O;++U)$=U*h-O,f[O]+=$*f[O-U]/e(E),E+=2;if(f[O]/=O,f[O]+=I/e(A),T=(C*(C+1)*T+(ne+C+1)*w)/R,w*=S,C+=2,D=y*f[O]*T,L+=D,D>1){if(i(D)<i(s*L))break}else if(i(D/s)<i(L))break}return L}return Sf=d,Sf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Af,yg;function PT(){if(yg)return Af;yg=1;function n(e,r,t){var i,o;if(t===0)return 1;for(i=1,o=0;o<t;o++)i*=(e+o)/(r+o);return i}return Af=n,Af}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lf,Eg;function DT(){if(Eg)return Lf;Eg=1;var n=Ee(),e=Rr();function r(t,i){return e(n(t),n(i))}return Lf=r,Lf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var If,wg;function xT(){if(wg)return If;wg=1;var n=DT();return If=n,If}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kf,$g;function BT(){if($g)return kf;$g=1;var n=Ee(),e=vr();function r(t,i){return e(n(t),n(i))}return kf=r,kf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rf,Sg;function HT(){if(Sg)return Rf;Sg=1;var n=BT();return Rf=n,Rf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Cf,Ag;function w2(){if(Ag)return Cf;Ag=1;var n=tu(),e=xT(),r=HT(),t=at(),i=wn(),o=ye(),u=Ee(),a=Me(),s=Ne(),c=vr(),l=we(),f=br(),d=pt(),p=oi(),h=ft();function m(v,b,g,_,y){var E,A,L,C,I,S,w,$,k,R,F,T,U,O;if(!y)return s(g,v)*s(_,b);if(U=v+b,C=v+p-.5,I=b+p-.5,S=U+p-.5,E=n(U),E/=n(v)*n(b),E*=o(I/h),E*=o(C/S),w=(g*b-_*C)/C,$=(_*v-g*I)/I,r(w,$)<.2)if(w*$>0||c(v,b)<1)u(w)<.1?E*=a(v*i(w)):E*=s(g*S/C,v),u($)<.1?E*=a(b*i($)):E*=s(_*S/I,b);else if(e(w,$)<.5)A=v<b,L=b/v,A&&L*$<.1||!A&&w/L>.1?(k=t(L*i($)),k=w+k+k*w,k=v*i(k),E*=a(k)):(k=t(i(w)/L),k=$+k+k*$,k=b*i(k),E*=a(k));else if(u(w)<u($))if(O=v*i(w)+b*l(_*S/I),O<=d||O>=f){if(O+=l(E),O>=f)return NaN;E=a(O)}else E*=a(O);else if(O=b*i($)+v*l(g*S/C),O<=d||O>=f){if(O+=l(E),O>=f)return NaN;E=a(O)}else E*=a(O);else if(F=g*S/C,T=_*S/I,w=v*l(F),$=b*l(T),w>=f||w<=d||$>=f||$<=d)if(v<b)if(R=s(T,b/v),k=v*(l(F)+l(R)),k<f&&k>d)E*=s(R*F,v);else{if($+=w+l(E),$>=f)return NaN;E=a($)}else if(R=s(F,v/b),k=(l(R)+l(T))*b,k<f&&k>d)E*=s(R*T,b);else{if($+=w+l(E),$>=f)return NaN;E=a($)}else E*=s(F,v)*s(T,b);return E}return Cf=m,Cf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Mf,Lg;function UT(){if(Lg)return Mf;Lg=1;var n=Ny(),e=w2(),r={keep:!0,maxIter:1e3};function t(o,u,a,s){var c=0;return l;function l(){var f,d,p;return d=(o+c-1)*(o+u+c-1)*c*(u-c)*a*a,f=o+2*c-1,d/=f*f,p=c,p+=c*(u-c)*a/(o+2*c-1),p+=(o+c)*(o*s-u*a+1+c*(2-a))/(o+2*c+1),c+=1,[d,p]}}function i(o,u,a,s,c,l){var f,d,p;return f=e(o,u,a,s,c),l&&(l[1]=f),f===0?f:(p=t(o,u,a,s),d=n(p,r),f/d)}return Mf=i,Mf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nf,Ig;function jT(){if(Ig)return Nf;Ig=1;var n=9007199254740991;return Nf=n,Nf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tf,kg;function WT(){if(kg)return Tf;kg=1;function n(e,r){var t=0,i;if(e===0)return r;if(r===0)return e;for(;(e&1)===0&&(r&1)===0;)e>>>=1,r>>>=1,t+=1;for(;(e&1)===0;)e>>>=1;for(;r;){for(;(r&1)===0;)r>>>=1;e>r&&(i=r,r=e,e=i),r-=e}return e<<t}return Tf=n,Tf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qf,Rg;function GT(){if(Rg)return qf;Rg=1;function n(e,r){var t=1,i;if(e===0)return r;if(r===0)return e;for(;e%2===0&&r%2===0;)e/=2,r/=2,t*=2;for(;e%2===0;)e/=2;for(;r;){for(;r%2===0;)r/=2;e>r&&(i=r,r=e,e=i),r-=e}return t*e}return qf=n,qf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ff,Cg;function VT(){if(Cg)return Ff;Cg=1;var n=ue(),e=lt(),r=Ce(),t=tn(),i=wy(),o=WT(),u=GT();function a(s,c){return n(s)||n(c)?NaN:s===r||c===r||s===t||c===t?NaN:e(s)&&e(c)?(s<0&&(s=-s),c<0&&(c=-c),s<=i&&c<=i?o(s,c):u(s,c)):NaN}return Ff=a,Ff}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Of,Mg;function XT(){if(Mg)return Of;Mg=1;var n=VT();return Of=n,Of}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pf,Ng;function YT(){if(Ng)return Pf;Ng=1;var n=jT(),e=Ce(),r=lt(),t=ue(),i=g2(),o=Xn(),u=XT();function a(s,c){var l,f,d,p,h,m,v;if(t(s)||t(c))return NaN;if(!r(s)||!r(c))return NaN;if(c<0||(f=1,s<0&&(s=-s+c-1,i(c)&&(f*=-1)),c>s))return 0;if(c===0||c===s)return f;if(c===1||c===s-1)return f*s;for(s-c<c&&(c=s-c),v=o(n/s),l=1,h=1;h<=c&&!(l>v);h++)l*=s,l/=h,s-=1;return h>c?f*l:(d=a(s,c-h+1),d===e?f*d:(p=a(c,c-h+1),m=u(d,p),d/=m,p/=m,l/=p,f*l*d))}return Pf=a,Pf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Df,Tg;function KT(){if(Tg)return Df;Tg=1;var n=YT();return Df=n,Df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xf,qg;function JT(){if(qg)return xf;qg=1;var n=KT(),e=Xn(),r=Ne(),t=kr();function i(o,u,a,s){var c,l,f,d,p;if(l=r(a,o),l>t)for(d=l,p=e(o-1);p>u;p--)d*=(p+1)*s/((o-p)*a),l+=d;else if(f=e(o*a),f<=u+1&&(f=e(u+2)),l=r(a,f)*r(s,o-f),l*=n(e(o),e(f)),l===0)for(p=f-1;p>u;p--)l+=r(a,p)*r(s,o-p),l*=n(e(o),e(p));else{for(d=l,c=l,p=f-1;p>u;p--)d*=(p+1)*s/((o-p)*a),l+=d;for(d=c,p=f+1;p<=o;p++)d*=(o-p+1)*a/(p*s),l+=d}return l}return xf=i,xf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Bf,Fg;function zT(){if(Fg)return Bf;Fg=1;var n=w2();function e(r,t,i,o,u,a,s){var c,l,f,d;if(c=n(r,t,i,o,a),s&&(s[1]=c),c/=r,c===0)return c;for(f=1,l=1,d=0;d<u-1;++d)l*=(r+t+d)*i/(r+d+1),f+=l;return c*=f,c}return Bf=e,Bf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Hf,Og;function QT(){if(Og)return Hf;Og=1;var n=tu(),e=ui(),r=wn(),t=ye(),i=Me(),o=Ne(),u=we(),a=kr(),s=br(),c=pt(),l=oi(),f=ft(),d={maxTerms:100};function p(m,v,b,g){var _=1-v,y=1;return E;function E(){var A=g/m;return m+=1,g*=_*b/y,y+=1,_+=1,A}}function h(m,v,b,g,_,y,E){var A,L,C,I,S,w,$,k;return _?($=m+v,L=m+l-.5,C=v+l-.5,I=$+l-.5,A=n($)/(n(m)*n(v)),S=u(I/C)*(v-.5),w=u(b*I/L)*m,S>c&&S<s&&w>c&&w<s?(m*v<C*10?A*=i((v-.5)*r(m/C)):A*=o(I/C,v-.5),A*=o(b*I/L,m),A*=t(L/f),y&&(y[1]=A*o(E,v))):(A=u(A)+S+w+(u(L)-1)/2,y&&(y[1]=i(A+v*u(E))),A=i(A))):A=o(b,m),A<a?g:(k=p(m,v,b,A),d.initialValue=g,e(k,d))}return Hf=h,Hf}var Uf,Pg;function Fy(){if(Pg)return Uf;Pg=1;var n=ue(),e=at(),r=Xn(),t=wn(),i=h2(),o=Qo(),u=ye(),a=Me(),s=Ne(),c=Rr(),l=vr(),f=Cr(),d=kr(),p=wy(),h=_2(),m=mr(),v=OT(),b=PT(),g=w2(),_=UT(),y=JT(),E=zT(),A=QT(),L=1/m;function C(I,S,w,$,k,R,F,T){var U,O,D,q,ne,W,Y,Z,ie,G,B,H;if(H=1-I,Y=T,Z=T+F,R[Z]=-1,n(I)||I<0||I>1)return R[Y]=NaN,R[Z]=NaN,R;if($){if(S<0||w<0)return R[Y]=NaN,R[Z]=NaN,R;if(S===0){if(w===0)return R[Y]=NaN,R[Z]=NaN,R;if(w>0)return R[Y]=k?0:1,R}else if(w===0&&S>0)return R[Y]=k?1:0,R}else if(S<=0||w<=0)return R[Y]=NaN,R[Z]=NaN,R;return I===0?(S===1?R[Z]=1:R[Z]=S<1?f/2:d*2,k?(R[Y]=$?1:o(S,w),R):(R[Y]=0,R)):I===1?(w===1?R[Z]=1:R[Z]=w<1?f/2:d*2,k?R[Y]=0:R[Y]=$?1:o(S,w),R):S===.5&&w===.5?(R[Z]=L*u(H*I),B=i(u(k?H:I)),B/=h,$||(B*=m),R[Y]=B,R):(S===1&&(W=w,w=S,S=W,W=H,H=I,I=W,k=!k),w===1?S===1?(R[Y]=k?H:I,R[Z]=1,R):(R[Z]=S*s(I,S-1),H<.5?B=k?-e(S*t(-H)):a(S*t(-H)):B=k?-(s(I,S)-1):s(I,S),$||(B/=S),R[Y]=B,R):(l(S,w)<=1?(I>.5&&(W=w,w=S,S=W,W=H,H=I,I=W,k=!k),c(S,w)<=1?S>=l(.2,w)||s(I,S)<=.9?k?(D=-($?1:o(S,w)),k=!1,D=-A(S,w,I,D,$,R,H)):D=A(S,w,I,0,$,R,H):(W=w,w=S,S=W,W=H,H=I,I=W,k=!k,H>=.3?k?(D=-($?1:o(S,w)),k=!1,D=-A(S,w,I,D,$,R,H)):D=A(S,w,I,0,$,R,H):($?O=1:O=b(S+w,S,20),D=E(S,w,I,H,20,$,R),k?(D-=$?1:o(S,w),k=!1,D=-v(S+20,w,I,H,D,O,$)):D=v(S+20,w,I,H,D,O,$))):w<=1||I<.1&&s(w*I,S)<=.7?k?(D=-($?1:o(S,w)),k=!1,D=-A(S,w,I,D,$,R,H)):D=A(S,w,I,0,$,R,H):(W=w,w=S,S=W,W=H,H=I,I=W,k=!k,H>=.3?k?(D=-($?1:o(S,w)),k=!1,D=-A(S,w,I,D,$,R,H)):D=A(S,w,I,0,$,R,H):S>=15?k?(D=-($?1:o(S,w)),k=!1,D=-v(S,w,I,H,D,1,$)):D=v(S,w,I,H,0,1,$):($?O=1:O=b(S+w,S,20),D=E(S,w,I,H,20,$,R),k?(D-=$?1:o(S,w),k=!1,D=-v(S+20,w,I,H,D,O,$)):D=v(S+20,w,I,H,D,O,$)))):(S<w?U=S-(S+w)*I:U=(S+w)*H-w,U<0&&(W=w,w=S,S=W,W=H,H=I,I=W,k=!k),w<40?r(S)===S&&r(w)===w&&S<p-100?(ie=S-1,G=w+ie,D=y(G,ie,I,H),$||(D*=o(S,w))):w*I<=.7?k?(D=-($?1:o(S,w)),k=!1,D=-A(S,w,I,D,$,R,H)):D=A(S,w,I,0,$,R,H):S>15?(G=r(w),G===w&&(G-=1),q=w-G,$?O=1:O=b(S+q,q,G),D=E(q,S,H,I,G,$),D=v(S,q,I,H,D,1,$),D/=O):$?(G=r(w),q=w-G,q<=0&&(G-=1,q+=1),D=E(q,S,H,I,G,$),D+=E(S,q,I,H,20,$),k&&(D-=1),D=v(S+20,q,I,H,D,1,$),k&&(D=-D,k=!1)):D=_(S,w,I,H,$,R):D=_(S,w,I,H,$,R)),R[Z]<0&&(R[Z]=g(S,w,I,H,!0)),ne=H*I,R[Z]!==0&&(f*ne<R[Z]?R[Z]=f/2:R[Z]/=ne),R[Y]=k?($?1:o(S,w))-D:D,R))}return Uf=C,Uf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jf,Dg;function ZT(){if(Dg)return jf;Dg=1;var n=Fy();function e(r,t,i,o,u){return n(r,t,i,o,u,[0,0],1,0)}return jf=e,jf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wf,xg;function Oy(){if(xg)return Wf;xg=1;var n=rn(),e=ZT(),r=Fy();return n(e,"assign",r),Wf=e,Wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gf,Bg;function eq(){if(Bg)return Gf;Bg=1;var n=Oy().assign;function e(r,t,i,o,u){var a=[0,0];return o=o!==!1,u=u===!0,n(r,t,i,o,u,a,1,0),a[0]}return Gf=e,Gf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vf,Hg;function ai(){if(Hg)return Vf;Hg=1;var n=eq();return Vf=n,Vf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xf,Ug;function nq(){if(Ug)return Xf;Ug=1;var n=ai(),e=ue();function r(t,i,o){return e(t)||e(i)||e(o)||i<=0||o<=0?NaN:t<=0?0:t>=1?1:n(t,i,o)}return Xf=r,Xf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yf,jg;function rq(){if(jg)return Yf;jg=1;function n(e){return r;function r(){return e}}return Yf=n,Yf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kf,Wg;function $n(){if(Wg)return Kf;Wg=1;var n=rq();return Kf=n,Kf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jf,Gg;function tq(){if(Gg)return Jf;Gg=1;var n=$n(),e=ai(),r=ue();function t(i,o){if(r(i)||r(o)||i<=0||o<=0)return n(NaN);return u;function u(a){return r(a)?NaN:a<=0?0:a>=1?1:e(a,i,o)}}return Jf=t,Jf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zf,Vg;function iq(){if(Vg)return zf;Vg=1;var n=rn(),e=nq(),r=tq();return n(e,"factory",r),zf=e,zf}var oq=iq();const Ip=Vn(oq);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qf,Xg;function Py(){if(Xg)return Qf;Xg=1;var n=.9189385332046728;return Qf=n,Qf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Zf,Yg;function uq(){if(Yg)return Zf;Yg=1;var n=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],e=n.length;function r(t){var i,o,u,a,s;if(t<-1.1||t>1.1)return NaN;for(u=0,a=0,i=2*t,s=0;s<e;s++)o=u,u=a,a=i*u-o+n[s];return(a-o)*.5}return Zf=r,Zf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ed,Kg;function aq(){if(Kg)return ed;Kg=1;var n=Ne(),e=uq(),r=9490626562425156e-8,t=3745194030963158e291;function i(o){return o<10?NaN:o>=t?0:o<r?e(2*n(10/o,2)-1)/o:1/(o*12)}return ed=i,ed}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var nd,Jg;function sq(){if(Jg)return nd;Jg=1;var n=dt(),e=wn(),r=Kn(),t=Rr(),i=vr(),o=we(),u=Py(),a=tn(),s=Ce(),c=aq();function l(f,d){var p,h,m;return h=i(f,d),m=t(f,d),h<0?NaN:h===0?s:m===s?a:h>=10?(p=c(h)+c(m)-c(h+m),-.5*o(m)+u+p+(h-.5)*o(h/(h+m))+m*e(-h/(h+m))):m>=10?(p=c(m)-c(h+m),n(h)+p+h-h*o(h+m)+(m-.5)*e(-h/(h+m))):o(r(h)*(r(m)/r(h+m)))}return nd=l,nd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rd,zg;function Dy(){if(zg)return rd;zg=1;var n=sq();return rd=n,rd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var td,Qg;function cq(){if(Qg)return td;Qg=1;var n=Dy(),e=ue(),r=wn(),t=Me(),i=we(),o=Ce();function u(a,s,c){var l;return e(a)||e(s)||e(c)||s<=0||c<=0?NaN:a<0||a>1?0:a===0?s<1?o:s>1?0:c:a===1?c<1?o:c>1?0:s:(l=(s-1)*i(a),l+=(c-1)*r(-a),l-=n(s,c),t(l))}return td=u,td}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var id,Zg;function lq(){if(Zg)return id;Zg=1;var n=$n(),e=Dy(),r=ue(),t=wn(),i=Me(),o=we(),u=Ce();function a(s,c){var l;if(r(s)||r(c)||s<=0||c<=0)return n(NaN);return l=e(s,c),f;function f(d){var p;return r(d)?NaN:d<0||d>1?0:d===0?s<1?u:s>1?0:c:d===1?c<1?u:c>1?0:s:(p=-l,p+=(s-1)*o(d),p+=(c-1)*t(-d),i(p))}}return id=a,id}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var od,e_;function fq(){if(e_)return od;e_=1;var n=rn(),e=cq(),r=lq();return n(e,"factory",r),od=e,od}var dq=fq();const pq=Vn(dq);/**
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
*/var ud,n_;function hq(){if(n_)return ud;n_=1;function n(e){var r,t,i;return e===0?-.0005087819496582806:(e<0?r=-e:r=e,r<=1?(t=-.0005087819496582806+e*(-.008368748197417368+e*(.03348066254097446+e*(-.012692614766297404+e*(-.03656379714117627+e*(.02198786811111689+e*(.008226878746769157+e*(-.005387729650712429+e*(0+e*0)))))))),i=1+e*(-.9700050433032906+e*(-1.5657455823417585+e*(1.5622155839842302+e*(.662328840472003+e*(-.7122890234154284+e*(-.05273963823400997+e*(.07952836873415717+e*(-.0023339375937419+e*.0008862163904564247))))))))):(e=1/e,t=0+e*(0+e*(-.005387729650712429+e*(.008226878746769157+e*(.02198786811111689+e*(-.03656379714117627+e*(-.012692614766297404+e*(.03348066254097446+e*(-.008368748197417368+e*-.0005087819496582806)))))))),i=.0008862163904564247+e*(-.0023339375937419+e*(.07952836873415717+e*(-.05273963823400997+e*(-.7122890234154284+e*(.662328840472003+e*(1.5622155839842302+e*(-1.5657455823417585+e*(-.9700050433032906+e*1))))))))),t/i)}return ud=n,ud}/**
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
*/var ad,r_;function vq(){if(r_)return ad;r_=1;function n(e){var r,t,i;return e===0?-.20243350835593876:(e<0?r=-e:r=e,r<=1?(t=-.20243350835593876+e*(.10526468069939171+e*(8.3705032834312+e*(17.644729840837403+e*(-18.851064805871424+e*(-44.6382324441787+e*(17.445385985570866+e*(21.12946554483405+e*-3.6719225470772936))))))),i=1+e*(6.242641248542475+e*(3.971343795334387+e*(-28.66081804998+e*(-20.14326346804852+e*(48.560921310873994+e*(10.826866735546016+e*(-22.643693341313973+e*1.7211476576120028)))))))):(e=1/e,t=-3.6719225470772936+e*(21.12946554483405+e*(17.445385985570866+e*(-44.6382324441787+e*(-18.851064805871424+e*(17.644729840837403+e*(8.3705032834312+e*(.10526468069939171+e*-.20243350835593876))))))),i=1.7211476576120028+e*(-22.643693341313973+e*(10.826866735546016+e*(48.560921310873994+e*(-20.14326346804852+e*(-28.66081804998+e*(3.971343795334387+e*(6.242641248542475+e*1)))))))),t/i)}return ad=n,ad}/**
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
*/var sd,t_;function mq(){if(t_)return sd;t_=1;function n(e){var r,t,i;return e===0?-.1311027816799519:(e<0?r=-e:r=e,r<=1?(t=-.1311027816799519+e*(-.16379404719331705+e*(.11703015634199525+e*(.38707973897260434+e*(.3377855389120359+e*(.14286953440815717+e*(.029015791000532906+e*(.0021455899538880526+e*(-6794655751811263e-22+e*(28522533178221704e-24+e*-681149956853777e-24))))))))),i=1+e*(3.4662540724256723+e*(5.381683457070069+e*(4.778465929458438+e*(2.5930192162362027+e*(.848854343457902+e*(.15226433829533179+e*(.011059242293464892+e*(0+e*(0+e*0)))))))))):(e=1/e,t=-681149956853777e-24+e*(28522533178221704e-24+e*(-6794655751811263e-22+e*(.0021455899538880526+e*(.029015791000532906+e*(.14286953440815717+e*(.3377855389120359+e*(.38707973897260434+e*(.11703015634199525+e*(-.16379404719331705+e*-.1311027816799519))))))))),i=0+e*(0+e*(0+e*(.011059242293464892+e*(.15226433829533179+e*(.848854343457902+e*(2.5930192162362027+e*(4.778465929458438+e*(5.381683457070069+e*(3.4662540724256723+e*1)))))))))),t/i)}return sd=n,sd}/**
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
*/var cd,i_;function bq(){if(i_)return cd;i_=1;function n(e){var r,t,i;return e===0?-.0350353787183178:(e<0?r=-e:r=e,r<=1?(t=-.0350353787183178+e*(-.0022242652921344794+e*(.018557330651423107+e*(.009508047013259196+e*(.0018712349281955923+e*(.00015754461742496055+e*(460469890584318e-20+e*(-2304047769118826e-25+e*26633922742578204e-28))))))),i=1+e*(1.3653349817554064+e*(.7620591645536234+e*(.22009110576413124+e*(.03415891436709477+e*(.00263861676657016+e*(7646752923027944e-20+e*(0+e*0)))))))):(e=1/e,t=26633922742578204e-28+e*(-2304047769118826e-25+e*(460469890584318e-20+e*(.00015754461742496055+e*(.0018712349281955923+e*(.009508047013259196+e*(.018557330651423107+e*(-.0022242652921344794+e*-.0350353787183178))))))),i=0+e*(0+e*(7646752923027944e-20+e*(.00263861676657016+e*(.03415891436709477+e*(.22009110576413124+e*(.7620591645536234+e*(1.3653349817554064+e*1)))))))),t/i)}return cd=n,cd}/**
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
*/var ld,o_;function gq(){if(o_)return ld;o_=1;function n(e){var r,t,i;return e===0?-.016743100507663373:(e<0?r=-e:r=e,r<=1?(t=-.016743100507663373+e*(-.0011295143874558028+e*(.001056288621524929+e*(.00020938631748758808+e*(14962478375834237e-21+e*(44969678992770644e-23+e*(4625961635228786e-24+e*(-2811287356288318e-29+e*9905570997331033e-32))))))),i=1+e*(.5914293448864175+e*(.1381518657490833+e*(.016074608709367652+e*(.0009640118070051656+e*(27533547476472603e-21+e*(282243172016108e-21+e*(0+e*0)))))))):(e=1/e,t=9905570997331033e-32+e*(-2811287356288318e-29+e*(4625961635228786e-24+e*(44969678992770644e-23+e*(14962478375834237e-21+e*(.00020938631748758808+e*(.001056288621524929+e*(-.0011295143874558028+e*-.016743100507663373))))))),i=0+e*(0+e*(282243172016108e-21+e*(27533547476472603e-21+e*(.0009640118070051656+e*(.016074608709367652+e*(.1381518657490833+e*(.5914293448864175+e*1)))))))),t/i)}return ld=n,ld}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var fd,u_;function _q(){if(u_)return fd;u_=1;var n=ue(),e=ye(),r=we(),t=Ce(),i=tn(),o=hq(),u=vq(),a=mq(),s=bq(),c=gq(),l=.08913147449493408,f=2.249481201171875,d=.807220458984375,p=.9399557113647461,h=.9836282730102539;function m(v){var b,g,_,y,E;return n(v)?NaN:v===0?t:v===2?i:v===1?0:v>2||v<0?NaN:(v>1?(b=-1,_=2-v):(b=1,_=v),v=1-_,v<=.5?(y=v*(v+10),E=o(v),b*(y*l+y*E)):_>=.25?(y=e(-2*r(_)),_-=.25,E=u(_),b*(y/(f+E))):(_=e(-r(_)),_<3?(g=_-1.125,E=a(g),b*(d*_+E*_)):_<6?(g=_-3,E=s(g),b*(p*_+E*_)):(g=_-6,E=c(g),b*(h*_+E*_))))}return fd=m,fd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dd,a_;function si(){if(a_)return dd;a_=1;var n=_q();return dd=n,dd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var pd,s_;function yq(){if(s_)return pd;s_=1;var n=ue(),e=h2(),r=ye(),t=vy(),i=6123233995736766e-32;function o(u){var a;return n(u)?NaN:u<-1||u>1?NaN:u>.5?2*e(r(.5-.5*u)):(a=t-e(u),a+=i,a+=t,a)}return pd=o,pd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hd,c_;function Eq(){if(c_)return hd;c_=1;var n=yq();return hd=n,hd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vd,l_;function $2(){if(l_)return vd;l_=1;var n=1.4142135623730951;return vd=n,vd}/**
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
*/var md,f_;function wq(){if(f_)return md;f_=1;function n(e){return e===0?.16666666666666666:.16666666666666666+e*.16666666666666666}return md=n,md}/**
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
*/var bd,d_;function $q(){if(d_)return bd;d_=1;function n(e){return e===0?.058333333333333334:.058333333333333334+e*(.06666666666666667+e*.008333333333333333)}return bd=n,bd}/**
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
*/var gd,p_;function Sq(){if(p_)return gd;p_=1;function n(e){return e===0?.0251984126984127:.0251984126984127+e*(.026785714285714284+e*(.0017857142857142857+e*.0001984126984126984))}return gd=n,gd}/**
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
*/var _d,h_;function Aq(){if(h_)return _d;h_=1;function n(e){return e===0?.012039792768959435:.012039792768959435+e*(.010559964726631394+e*(-.0011078042328042327+e*(.0003747795414462081+e*27557319223985893e-22)))}return _d=n,_d}/**
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
*/var yd,v_;function Lq(){if(v_)return yd;v_=1;function n(e){return e===0?.003837005972422639:.003837005972422639+e*(.00610392115600449+e*(-.0016095979637646305+e*(.0005945867404200738+e*(-6270542728876062e-20+e*2505210838544172e-23))))}return yd=n,yd}/**
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
*/var Ed,m_;function Iq(){if(m_)return Ed;m_=1;function n(e){return e===0?.0032177478835464946:.0032177478835464946+e*(.0010898206731540065+e*(-.0012579159844784845+e*(.0006908420797309686+e*(-.00016376804137220805+e*(154012654012654e-19+e*16059043836821613e-26)))))}return Ed=n,Ed}/**
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
*/var wd,b_;function kq(){if(b_)return wd;b_=1;function n(e){return e===0?.001743826229834001:.001743826229834001+e*(3353097688001788e-20+e*(-.0007624513544032393+e*(.0006451304695145635+e*(-.000249472580470431+e*(49255746366361444e-21+e*(-39851014346715405e-22+e*7647163731819816e-28))))))}return wd=n,wd}/**
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
*/var $d,g_;function Rq(){if(g_)return $d;g_=1;function n(e){return e===0?.0009647274732138864:.0009647274732138864+e*(-.0003110108632631878+e*(-.00036307660358786886+e*(.0005140660578834113+e*(-.00029133414466938067+e*(9086710793521991e-20+e*(-15303004486655377e-21+e*(10914179173496788e-22+e*28114572543455206e-31)))))))}return $d=n,$d}/**
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
*/var Sd,__;function Cq(){if(__)return Sd;__=1;function n(e){return e===0?.0005422926281312969:.0005422926281312969+e*(-.0003694266780000966+e*(-.00010230378073700413+e*(.00035764655430568635+e*(-.00028690924218514614+e*(.00012645437628698076+e*(-33202652391372056e-21+e*(4890304529197534e-21+e*(-3123956959982987e-22+e*822063524662433e-32))))))))}return Sd=n,Sd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ad,y_;function Mq(){if(y_)return Ad;y_=1;var n=y2(),e=gr(),r=ye(),t=mr(),i=wq(),o=$q(),u=Sq(),a=Aq(),s=Lq(),c=Iq(),l=kq(),f=Rq(),d=Cq(),p=0,h=[1,0,0,0,0,0,0,0,0,0];function m(v,b){var g,_;return _=n(v/2,.5)*r(v*t)*(b-.5),g=1/v,h[1]=i(g),h[2]=o(g),h[3]=u(g),h[4]=a(g),h[5]=s(g),h[6]=c(g),h[7]=l(g),h[8]=f(g),h[9]=d(g),p+_*e(h,_*_)}return Ad=m,Ad}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ld,E_;function Nq(){if(E_)return Ld;E_=1;var n=y2(),e=gr(),r=ye(),t=Ne(),i=mr(),o=[0,0,0,0,0,0,0];function u(a,s){var c,l,f,d,p,h,m,v;return v=n(a/2,.5)*r(a*i)*s,d=a+2,p=a+4,h=a+6,o[0]=1,o[1]=-(a+1)/(2*d),d*=a+2,o[2]=-a*(a+1)*(a+3)/(8*d*p),d*=a+2,o[3]=-a*(a+1)*(a+5)*((3*a+7)*a-2)/(48*d*p*h),d*=a+2,p*=a+4,o[4]=-a*(a+1)*(a+7)*(((((15*a+154)*a+465)*a+286)*a-336)*a+64)/(384*d*p*h*(a+8)),d*=a+2,o[5]=-a*(a+1)*(a+3)*(a+9)*((((((35*a+452)*a+1573)*a+600)*a-2020)*a+928)*a-128)/(1280*d*p*h*(a+8)*(a+10)),d*=a+2,p*=a+4,h*=a+6,o[6]=-a*(a+1)*(a+11)*(((((((((((945*a+31506)*a+425858)*a+2980236)*a+11266745)*a+20675018)*a+7747124)*a-22574632)*a-8565600)*a+18108416)*a-7099392)*a+884736)/(46080*d*p*h*(a+8)*(a+10)*(a+12)),m=r(a),f=t(m*v,1/a),l=f*f,c=e(o,l),c*=m,c/=f,-c}return Ld=u,Ld}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Id,w_;function Tq(){if(w_)return Id;w_=1;var n=si(),e=at(),r=ye(),t=Ne(),i=_2(),o=$2();function u(a,s){var c,l,f,d,p,h,m;return a>1e20?-n(2*s)*o:(c=1/(a-.5),l=48/(c*c),f=((20700*c/l-98)*c-16)*c+96.36,d=((94.5/(l+f)-3)/l+1)*r(c*i)*a,m=t(d*2*s,2/a),m>.05+c?(h=-n(2*s)*o,m=h*h,a<5&&(f+=.3*(a-4.5)*(h+.6)),f+=(((.05*d*h-5)*h-7)*h-2)*h+l,m=(((((.4*m+6.3)*m+36)*m+94.5)/f-m-3)/l+1)*h,m=e(c*m*m)):m=((1/(((a+6)/(a*m)-.089*d-.822)*(a+2)*3)+.5/(a+4))*m-1)*(a+1)/(a+2)+1/m,p=r(a*m),-p)}return Id=u,Id}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var kd,$_;function qq(){if($_)return kd;$_=1;var n=si(),e=Xn(),r=ct(),t=Ay(),i=Eq(),o=ye(),u=Ee(),a=E2(),s=Ne(),c=ii(),l=$2(),f=mr(),d=Mq(),p=Nq(),h=Tq(),m=268435456,v=1/3,b=106/3,g=.8549879733383485;function _(y,E,A){var L,C,I,S,w,$,k,R,F,T,U,O,D,q,ne,W;if(w=0,E>A?(k=A,A=E,E=k,S=!0):S=!1,e(y)===y&&y<20)switch(C=r(1,b),e(y)){case 1:E===.5?w=0:w=-a(f*E)/c(f*E);break;case 2:w=(2*E-1)/o(2*E*A);break;case 4:$=4*E*A,I=o($),D=4*a(i(I)/3)/I,q=o(D-4),w=E-.5<0?-q:q;break;case 6:if(E<1e-150)return(S?-1:1)*h(y,E);ne=4*(E-E*E),W=s(ne,v),O=6*(1+g*(1/W-1));do F=O*O,T=F*F,U=O*T,R=O,O=2*(8*ne*U-270*F+2187)/(5*(4*ne*T-216*O-243));while(u((O-R)/O)>C);O=o(O-y),w=E-.5<0?-O:O;break;default:y>m?w=n(2*E)*l:y<3?(L=.2742-y*.0242143,E>L?w=d(y,E):w=p(y,E)):(L=r(1,t(y/-.654)),E>L?w=h(y,E):w=p(y,E))}else y>m?w=-n(2*E)*l:y<3?(L=.2742-y*.0242143,E>L?w=d(y,E):w=p(y,E)):(L=r(1,t(y/-.654)),E>L?w=h(y,E):w=p(y,E));return S?-w:w}return kd=_,kd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Rd,S_;function Fq(){if(S_)return Rd;S_=1;var n=qq();function e(r,t,i){var o,u,a,s;return u=t/2,a=1-u,o=r*2,s=n(o,u,a),i&&(i.value=s*s/(o+s*s)),o/(o+s*s)}return Rd=e,Rd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Cd,A_;function Oq(){if(A_)return Cd;A_=1;var n=gr(),e=si(),r=ye(),t=Me(),i=$2(),o=[0,0,0,0,0,0,0],u=[0,0,0,0];function a(s,c,l){var f,d,p,h,m,v,b;return f=e(2*l),f/=-r(s/2),u[0]=f,v=c-s,h=v*v,m=h*v,o[0]=-v*i/2,o[1]=(1-2*v)/8,o[2]=-(v*i/48),o[3]=-1/192,o[4]=-v*i/3840,o[5]=0,o[6]=0,u[1]=n(o,f),o[0]=v*i*(3*v-2)/12,o[1]=(20*h-12*v+1)/128,o[2]=v*i*(20*v-1)/960,o[3]=(16*h+30*v-15)/4608,o[4]=v*i*(21*v+32)/53760,o[5]=(-(32*h)+63)/368640,o[6]=-v*i*(120*v+17)/25804480,u[2]=n(o,f),o[0]=v*i*(-75*h+80*v-16)/480,o[1]=(-1080*m+868*h-90*v-45)/9216,o[2]=v*i*(-1190*h+84*v+373)/53760,o[3]=(-2240*m-2508*h+2100*v-165)/368640,o[4]=0,o[5]=0,o[6]=0,u[3]=n(o,f),p=n(u,1/s),d=p*p,b=-t(-d/2),d===0?.5:(1+p*r((1+b)/d))/2}return Cd=a,Cd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Md,L_;function xy(){if(L_)return Md;L_=1;var n=we(),e=Cr(),r=e/4;function t(i,o){return u;function u(a){var s,c,l;return l=1-a,l===0?[-r,-r]:a===0?[-r,-r]:(c=n(a)+o*n(l)+i,s=1/a-o/l,[c,s])}}return Md=t,Md}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nd,I_;function Pq(){if(I_)return Nd;I_=1;var n=ue();function e(r){return r===0||n(r)?r:r<0?-1:1}return Nd=e,Nd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Td,k_;function ou(){if(k_)return Td;k_=1;var n=Pq();return Td=n,Td}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qd,R_;function By(){if(R_)return qd;R_=1;var n=ou(),e=Ee(),r=ct(),t=Cr();function i(o,u,a,s,c,l){var f,d,p,h,m,v,b,g,_,y;_=0,f=0,m=u,h=r(1,1-c),b=t,d=t,p=t,v=l;do{if(f=_,p=d,d=b,g=o(m),_=g[0],y=g[1],v-=1,_===0)break;if(y===0?(f===0&&(m===a?u=s:u=a,f=o(u),b=u-m),n(f)*n(_)<0?b<0?b=(m-a)/2:b=(m-s)/2:b<0?b=(m-s)/2:b=(m-a)/2):b=_/y,e(b*2)>e(p)&&(b=b>0?(m-a)/2:(m-s)/2),u=m,m-=b,m<=a){if(b=.5*(u-a),m=u-b,m===a||m===s)break}else if(m>=s&&(b=.5*(u-s),m=u-b,m===a||m===s))break;b>0?s=u:a=u}while(v&&e(m*h)<e(b));return m}return qd=i,qd}/**
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
*/var Fd,C_;function Dq(){if(C_)return Fd;C_=1;function n(e){return e===0?-1:-1+e*(-5+e*5)}return Fd=n,Fd}/**
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
*/var Od,M_;function xq(){if(M_)return Od;M_=1;function n(e){return e===0?1:1+e*(21+e*(-69+e*46))}return Od=n,Od}/**
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
*/var Pd,N_;function Bq(){if(N_)return Pd;N_=1;function n(e){return e===0?7:7+e*(-2+e*(33+e*(-62+e*31)))}return Pd=n,Pd}/**
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
*/var Dd,T_;function Hq(){if(T_)return Dd;T_=1;function n(e){return e===0?25:25+e*(-52+e*(-17+e*(88+e*(-115+e*46))))}return Dd=n,Dd}/**
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
*/var xd,q_;function Uq(){if(q_)return xd;q_=1;function n(e){return e===0?7:7+e*(12+e*(-78+e*52))}return xd=n,xd}/**
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
*/var Bd,F_;function jq(){if(F_)return Bd;F_=1;function n(e){return e===0?-7:-7+e*(2+e*(183+e*(-370+e*185)))}return Bd=n,Bd}/**
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
*/var Hd,O_;function Wq(){if(O_)return Hd;O_=1;function n(e){return e===0?-533:-533+e*(776+e*(-1835+e*(10240+e*(-13525+e*5410))))}return Hd=n,Hd}/**
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
*/var Ud,P_;function Gq(){if(P_)return Ud;P_=1;function n(e){return e===0?-1579:-1579+e*(3747+e*(-3372+e*(-15821+e*(45588+e*(-45213+e*15071)))))}return Ud=n,Ud}/**
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
*/var jd,D_;function Vq(){if(D_)return jd;D_=1;function n(e){return e===0?449:449+e*(-1259+e*(-769+e*(6686+e*(-9260+e*3704))))}return jd=n,jd}/**
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
*/var Wd,x_;function Xq(){if(x_)return Wd;x_=1;function n(e){return e===0?63149:63149+e*(-151557+e*(140052+e*(-727469+e*(2239932+e*(-2251437+e*750479)))))}return Wd=n,Wd}/**
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
*/var Gd,B_;function Yq(){if(B_)return Gd;B_=1;function n(e){return e===0?29233:29233+e*(-78755+e*(105222+e*(146879+e*(-1602610+e*(3195183+e*(-2554139+e*729754))))))}return Gd=n,Gd}/**
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
*/var Vd,H_;function Kq(){if(H_)return Vd;H_=1;function n(e){return e===0?1:1+e*(-13+e*13)}return Vd=n,Vd}/**
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
*/var Xd,U_;function Jq(){if(U_)return Xd;U_=1;function n(e){return e===0?1:1+e*(21+e*(-69+e*46))}return Xd=n,Xd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Yd,j_;function zq(){if(j_)return Yd;j_=1;var n=gr(),e=si(),r=Ee(),t=Me(),i=we(),o=ye(),u=ii(),a=E2(),s=xy(),c=By(),l=Dq(),f=xq(),d=Bq(),p=Hq(),h=Uq(),m=jq(),v=Wq(),b=Gq(),g=Vq(),_=Xq(),y=Yq(),E=Kq(),A=Jq(),L=[0,0,0,0,0,0],C=[0,0,0,0];function I(S,w,$){var k,R,F,T,U,O,D,q,ne,W,Y,Z,ie,G,B,H,ge,pe,Q,oe;return U=e(2*S)/-o(w/2),pe=u($),ge=a($),C[0]=U,B=pe*pe,H=ge*ge,ie=pe*ge,Z=ie*ie,Y=Z*ie,W=Z*Z,ne=Z*Y,q=Y*Y,D=W*Y,L[0]=(2*B-1)/(3*ie),L[1]=-l(B)/(36*Z),L[2]=f(B)/(1620*Y),L[3]=d(B)/(6480*W),L[4]=p(B)/(90720*ne),L[5]=0,C[1]=n(L,U),L[0]=-h(B)/(405*Y),L[1]=m(B)/(2592*W),L[2]=-v(B)/(204120*ne),L[3]=-b(B)/(2099520*q),L[4]=0,L[5]=0,C[2]=n(L,U),L[0]=g(B)/(102060*ne),L[1]=-_(B)/(20995200*q),L[2]=y(B)/(36741600*D),L[3]=0,L[4]=0,L[5]=0,C[3]=n(L,U),O=n(C,1/w),F=ge/pe,F*=F,G=-(O*O)/(2*B)+i(B)+H*i(H)/B,r(O)<.7?(L[0]=B,L[1]=ie,L[2]=(1-2*B)/3,L[3]=E(B)/(36*ie),L[4]=A(B)/(270*Z),L[5]=0,oe=n(L,O)):(Q=t(G),L[0]=Q,L[1]=F,L[2]=0,L[3]=3*F*(3*F+1)/6,L[4]=4*F*(4*F+1)*(4*F+2)/24,L[5]=5*F*(5*F+1)*(5*F+2)*(5*F+3)/120,oe=n(L,Q),(oe-B)*O<0&&(oe=1-oe)),O<0?(R=0,k=B):(R=B,k=1),(oe<R||oe>k)&&(oe=(R+k)/2),T=s(-G,F),oe=c(T,oe,R,k,32,100),oe}return Yd=I,Yd}var Ii={exports:{}},ki={exports:{}},Kd,W_;function Qq(){if(W_)return Kd;W_=1;var n=1e3,e=n*60,r=e*60,t=r*24,i=t*365.25;Kd=function(c,l){l=l||{};var f=typeof c;if(f==="string"&&c.length>0)return o(c);if(f==="number"&&isNaN(c)===!1)return l.long?a(c):u(c);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(c))};function o(c){if(c=String(c),!(c.length>100)){var l=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(c);if(l){var f=parseFloat(l[1]),d=(l[2]||"ms").toLowerCase();switch(d){case"years":case"year":case"yrs":case"yr":case"y":return f*i;case"days":case"day":case"d":return f*t;case"hours":case"hour":case"hrs":case"hr":case"h":return f*r;case"minutes":case"minute":case"mins":case"min":case"m":return f*e;case"seconds":case"second":case"secs":case"sec":case"s":return f*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return f;default:return}}}}function u(c){return c>=t?Math.round(c/t)+"d":c>=r?Math.round(c/r)+"h":c>=e?Math.round(c/e)+"m":c>=n?Math.round(c/n)+"s":c+"ms"}function a(c){return s(c,t,"day")||s(c,r,"hour")||s(c,e,"minute")||s(c,n,"second")||c+" ms"}function s(c,l,f){if(!(c<l))return c<l*1.5?Math.floor(c/l)+" "+f:Math.ceil(c/l)+" "+f+"s"}return Kd}var G_;function Zq(){return G_||(G_=1,(function(n,e){e=n.exports=i.debug=i.default=i,e.coerce=s,e.disable=u,e.enable=o,e.enabled=a,e.humanize=Qq(),e.names=[],e.skips=[],e.formatters={};var r;function t(c){var l=0,f;for(f in c)l=(l<<5)-l+c.charCodeAt(f),l|=0;return e.colors[Math.abs(l)%e.colors.length]}function i(c){function l(){if(l.enabled){var f=l,d=+new Date,p=d-(r||d);f.diff=p,f.prev=r,f.curr=d,r=d;for(var h=new Array(arguments.length),m=0;m<h.length;m++)h[m]=arguments[m];h[0]=e.coerce(h[0]),typeof h[0]!="string"&&h.unshift("%O");var v=0;h[0]=h[0].replace(/%([a-zA-Z%])/g,function(g,_){if(g==="%%")return g;v++;var y=e.formatters[_];if(typeof y=="function"){var E=h[v];g=y.call(f,E),h.splice(v,1),v--}return g}),e.formatArgs.call(f,h);var b=l.log||e.log||console.log.bind(console);b.apply(f,h)}}return l.namespace=c,l.enabled=e.enabled(c),l.useColors=e.useColors(),l.color=t(c),typeof e.init=="function"&&e.init(l),l}function o(c){e.save(c),e.names=[],e.skips=[];for(var l=(typeof c=="string"?c:"").split(/[\s,]+/),f=l.length,d=0;d<f;d++)l[d]&&(c=l[d].replace(/\*/g,".*?"),c[0]==="-"?e.skips.push(new RegExp("^"+c.substr(1)+"$")):e.names.push(new RegExp("^"+c+"$")))}function u(){e.enable("")}function a(c){var l,f;for(l=0,f=e.skips.length;l<f;l++)if(e.skips[l].test(c))return!1;for(l=0,f=e.names.length;l<f;l++)if(e.names[l].test(c))return!0;return!1}function s(c){return c instanceof Error?c.stack||c.message:c}})(ki,ki.exports)),ki.exports}var V_;function Hy(){return V_||(V_=1,(function(n,e){var r={};e=n.exports=Zq(),e.log=o,e.formatArgs=i,e.save=u,e.load=a,e.useColors=t,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:s(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function t(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(c){try{return JSON.stringify(c)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}};function i(c){var l=this.useColors;if(c[0]=(l?"%c":"")+this.namespace+(l?" %c":" ")+c[0]+(l?"%c ":" ")+"+"+e.humanize(this.diff),!!l){var f="color: "+this.color;c.splice(1,0,f,"color: inherit");var d=0,p=0;c[0].replace(/%[a-zA-Z%]/g,function(h){h!=="%%"&&(d++,h==="%c"&&(p=d))}),c.splice(p,0,f)}}function o(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function u(c){try{c==null?e.storage.removeItem("debug"):e.storage.debug=c}catch{}}function a(){var c;try{c=e.storage.debug}catch{}return!c&&typeof process<"u"&&"env"in process&&(c=r.DEBUG),c}e.enable(a());function s(){try{return window.localStorage}catch{}}})(Ii,Ii.exports)),Ii.exports}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jd,X_;function uu(){if(X_)return Jd;X_=1;var n=34028234663852886e22;return Jd=n,Jd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zd,Y_;function eF(){if(Y_)return zd;Y_=1;var n=Hy(),e=qy(),r=Ee(),t=Me(),i=we(),o=uu(),u=n("gammaincinv:higher_newton");function a(s,c,l,f,d,p,h,m){var v,b,g,_,y,E,A,L,C,I,S,w,$,k;k=s,S=1,w=1,E=c*c,b=s;do{if(k=s,A=k*k,l===0){if(v=(1-c)*i(k)+k+p,v>i(o))return u("Warning: overflow problems in one or more steps of the computation. The initial approximation to the root is returned."),b;$=t(v)}else $=-h*k;m?(L=e(k,c,!0,!1),g=-$*(L-f)):(C=e(k,c,!0,!0),g=$*(C-d)),$=g,f>1e-120||w>1?(_=.5*(k-c+1)/k,y=(2*A-4*k*c+4*k+2*E-3*c+1)/A,y/=6,s=k+$*(1+$*(_+$*y))):s=k+$,S=r(k/s-1),w+=1,k=s,k<0&&(k=b,w=100)}while(S>2e-14&&w<35);return(S>2e-14||w>99)&&u("Warning: the number of iterations in the Newton method reached the upper limit N=35. The last value obtained for the root is given as output."),I=k||0,I}return zd=a,zd}/**
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
*/var Qd,K_;function nF(){if(K_)return Qd;K_=1;function n(e){return e===0?0:0+e*(1+e*(1+e*(1.5+e*(2.6666666666666665+e*(5.208333333333333+e*10.8)))))}return Qd=n,Qd}/**
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
*/var Zd,J_;function rF(){if(J_)return Zd;J_=1;function n(e){return e===0?1:1+e*(1+e*(.3333333333333333+e*(.027777777777777776+e*(-.003703703703703704+e*(.0002314814814814815+e*5878894767783657e-20)))))}return Zd=n,Zd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e1,z_;function Uy(){if(z_)return e1;z_=1;var n=Ee(),e=Me(),r=we(),t=gr(),i=nF(),o=rF(),u=1e-8,a=.08333333333333333,s=.008333333333333333,c=[1,0,0,0,0,0];function l(f){var d,p,h,m,v,b,g,_,y;if(y=f*f*.5,f===0?v=0:f<-1?(_=e(-1-y),v=i(_)):f<1?(_=f,v=o(_)):(_=11+y,b=r(_),v=_+b,_=1/_,d=b*b,p=d*b,h=p*b,m=h*b,c[1]=(2-b)*.5,c[2]=(-9*b+6+2*d)/6,c[3]=-(3*p+36*b-22*d-12)*a,c[4]=(60+350*d-300*b-125*p+12*h)/60,c[5]=-(-120-274*h+900*b-1700*d+1125*p+20*m)*s,v+=b*_*t(c,_)),_=1,f>-3.5&&f<-.03||f>.03&&f<40){_=1,g=v;do v=g*(y+r(g))/(g-1),_=n(g/v-1),g=v;while(_>u)}return v}return e1=l,e1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n1,Q_;function tF(){if(Q_)return n1;Q_=1;var n=[1.9963790515900766,-.0017971032528832887,13129285796384672e-21,-2340875228178749e-22,72291210671127e-22,-3280997607821e-22,19875070901e-21,-1509214183e-21,1375340084e-22,-145728923e-22,17532367e-22,-2351465e-22,346551e-22,-55471e-22,9548e-22,-1748e-22,332e-22,-58e-22];function e(r,t){var i,o,u,a,s;o=0,u=0,i=t+t,s=r;do a=u,u=o,o=i*u-a+n[s],s-=1;while(s>=0);return(o-a)/2}return n1=e,n1}/**
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
*/var r1,Z_;function iF(){if(Z_)return r1;Z_=1;function n(e){return e===0?.025721014990011306:.025721014990011306+e*(.08247596616699963+e*(-.0025328157302663564+e*(.0006099292666946337+e*(-.00033543297638406+e*.000250505279903))))}return r1=n,r1}/**
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
*/var t1,e5;function oF(){if(e5)return t1;e5=1;function n(e){return e===0?.08333333333333333:.08333333333333333+e*(-.002777777777777778+e*(.0007936507936507937+e*-.0005952380952380953))}return t1=n,t1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i1,n5;function uF(){if(n5)return i1;n5=1;var n=dt(),e=we(),r=Py(),t=iu(),i=uu(),o=tF(),u=iF(),a=oF(),s=.30865217988013566;function c(l){var f;return l<t?i:l<1?n(l+1)-(l+.5)*e(l)+l-r:l<2?n(l)-(l-.5)*e(l)+l-r:l<3?n(l-1)-(l-.5)*e(l)+l-r+e(l-1):l<12?(f=18/(l*l)-1,o(17,f)/(12*l)):(f=1/(l*l),l<1e3?u(f)/(s+f)/l:a(f)/l)}return i1=c,i1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o1,r5;function aF(){if(r5)return o1;r5=1;var n=Me(),e=Kn(),r=we(),t=uu(),i=Zo(),o=uF();function u(a){return a>=3?n(o(a)):a>0?e(a)/(n(-a+(a-.5)*r(a))*i):t}return o1=u,o1}/**
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
*/var u1,t5;function sF(){if(t5)return u1;t5=1;function n(e){var r,t,i;return e===0?-.3333333333438:(e<0?r=-e:r=e,r<=1?(t=-.3333333333438+e*(-.2070740359969+e*(-.05041806657154+e*(-.004923635739372+e*-4293658292782e-17))),i=1+e*(.7045554412463+e*(.2118190062224+e*(.03048648397436+e*.001605037988091)))):(e=1/e,t=-4293658292782e-17+e*(-.004923635739372+e*(-.05041806657154+e*(-.2070740359969+e*-.3333333333438))),i=.001605037988091+e*(.03048648397436+e*(.2118190062224+e*(.7045554412463+e*1)))),t/i)}return u1=n,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a1,i5;function cF(){if(i5)return a1;i5=1;var n=Ee(),e=we(),r=Uy(),t=sF();function i(o){var u;return n(o)<1?t(o):(u=r(o),e(o/(u-1))/o)}return a1=i,a1}/**
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
*/var s1,o5;function lF(){if(o5)return s1;o5=1;function n(e){var r,t,i;return e===0?-.0172847633523:(e<0?r=-e:r=e,r<=1?(t=-.0172847633523+e*(-.0159372646475+e*(-.00464910887221+e*(-.00060683488776+e*-614830384279e-17))),i=1+e*(.764050615669+e*(.297143406325+e*(.0579490176079+e*.00574558524851)))):(e=1/e,t=-614830384279e-17+e*(-.00060683488776+e*(-.00464910887221+e*(-.0159372646475+e*-.0172847633523))),i=.00574558524851+e*(.0579490176079+e*(.297143406325+e*(.764050615669+e*1)))),t/i)}return s1=n,s1}/**
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
*/var c1,u5;function fF(){if(u5)return c1;u5=1;function n(e){var r,t,i;return e===0?-.0172839517431:(e<0?r=-e:r=e,r<=1?(t=-.0172839517431+e*(-.0146362417966+e*(-.00357406772616+e*(-.000391032032692+e*249634036069e-17))),i=1+e*(.690560400696+e*(.249962384741+e*(.0443843438769+e*.00424073217211)))):(e=1/e,t=249634036069e-17+e*(-.000391032032692+e*(-.00357406772616+e*(-.0146362417966+e*-.0172839517431))),i=.00424073217211+e*(.0443843438769+e*(.249962384741+e*(.690560400696+e*1)))),t/i)}return c1=n,c1}/**
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
*/var l1,a5;function dF(){if(a5)return l1;a5=1;function n(e){var r,t,i;return e===0?.99994466948:(e<0?r=-e:r=e,r<=1?(t=.99994466948+e*(104.649839762+e*(857.204033806+e*(731.901559577+e*45.5174411671))),i=1+e*(104.526456943+e*(823.313447808+e*(3119.93802124+e*3970.03311219)))):(e=1/e,t=45.5174411671+e*(731.901559577+e*(857.204033806+e*(104.649839762+e*.99994466948))),i=3970.03311219+e*(3119.93802124+e*(823.313447808+e*(104.526456943+e*1)))),t/i)}return l1=n,l1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f1,s5;function pF(){if(s5)return f1;s5=1;var n=we(),e=lF(),r=fF(),t=dF();function i(o){var u,a;return o<-5?(a=o*o,u=n(-o),(12-a-6*(u*u))/(12*a*o)):o<-2?e(o):o<2?r(o):o<1e3?(a=1/o,t(o)/(-12*o)):-1/(12*o)}return f1=i,f1}/**
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
*/var d1,c5;function hF(){if(c5)return d1;c5=1;function n(e){var r,t,i;return e===0?.0495346498136:(e<0?r=-e:r=e,r<=1?(t=.0495346498136+e*(.0299521337141+e*(.00688296911516+e*(.000512634846317+e*-201411722031e-16))),i=1+e*(.759803615283+e*(.261547111595+e*(.0464854522477+e*.00403751193496)))):(e=1/e,t=-201411722031e-16+e*(.000512634846317+e*(.00688296911516+e*(.0299521337141+e*.0495346498136))),i=.00403751193496+e*(.0464854522477+e*(.261547111595+e*(.759803615283+e*1)))),t/i)}return d1=n,d1}/**
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
*/var p1,l5;function vF(){if(l5)return p1;l5=1;function n(e){var r,t,i;return e===0?.00452313583942:(e<0?r=-e:r=e,r<=1?(t=.00452313583942+e*(.00120744920113+e*(-789724156582e-16+e*(-504476066942e-16+e*-535770949796e-17))),i=1+e*(.912203410349+e*(.405368773071+e*(.0901638932349+e*.00948935714996)))):(e=1/e,t=-535770949796e-17+e*(-504476066942e-16+e*(-789724156582e-16+e*(.00120744920113+e*.00452313583942))),i=.00948935714996+e*(.0901638932349+e*(.405368773071+e*(.912203410349+e*1)))),t/i)}return p1=n,p1}/**
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
*/var h1,f5;function mF(){if(f5)return h1;f5=1;function n(e){var r,t,i;return e===0?.00439937562904:(e<0?r=-e:r=e,r<=1?(t=.00439937562904+e*(.000487225670639+e*(-.000128470657374+e*(529110969589e-17+e*15716677175e-17))),i=1+e*(.794435257415+e*(.333094721709+e*(.0703527806143+e*.00806110846078)))):(e=1/e,t=15716677175e-17+e*(529110969589e-17+e*(-.000128470657374+e*(.000487225670639+e*.00439937562904))),i=.00806110846078+e*(.0703527806143+e*(.333094721709+e*(.794435257415+e*1)))),t/i)}return h1=n,h1}/**
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
*/var v1,d5;function bF(){if(d5)return v1;d5=1;function n(e){var r,t,i;return e===0?-.0011481191232:(e<0?r=-e:r=e,r<=1?(t=-.0011481191232+e*(-.112850923276+e*(1.51623048511+e*(-.218472031183+e*.0730002451555))),i=1+e*(14.2482206905+e*(69.7360396285+e*(218.938950816+e*277.067027185)))):(e=1/e,t=.0730002451555+e*(-.218472031183+e*(1.51623048511+e*(-.112850923276+e*-.0011481191232))),i=277.067027185+e*(218.938950816+e*(69.7360396285+e*(14.2482206905+e*1)))),t/i)}return v1=n,v1}/**
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
*/var m1,p5;function gF(){if(p5)return m1;p5=1;function n(e){var r,t,i;return e===0?-.000145727889667:(e<0?r=-e:r=e,r<=1?(t=-.000145727889667+e*(-.290806748131+e*(-13.308504545+e*(199.722374056+e*-11.4311378756))),i=1+e*(139.612587808+e*(2189.01116348+e*(7115.24019009+e*45574.6081453)))):(e=1/e,t=-11.4311378756+e*(199.722374056+e*(-13.308504545+e*(-.290806748131+e*-.000145727889667))),i=45574.6081453+e*(7115.24019009+e*(2189.01116348+e*(139.612587808+e*1)))),t/i)}return m1=n,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1,h5;function _F(){if(h5)return b1;h5=1;var n=we(),e=hF(),r=vF(),t=mF(),i=bF(),o=gF();function u(a){var s,c;return a<-8?(s=a*a,c=n(-a)/a,(-30+a*c*(6*s*c*c-12+s))/(12*a*s*s)):a<-4?e(a)/(a*a):a<-2?r(a):a<2?t(a):a<10?(s=1/a,i(s)/(a*a)):a<100?(s=1/a,o(s)/(a*a)):-n(a)/(12*a*a*a)}return b1=u,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1,v5;function yF(){if(v5)return g1;v5=1;var n=Hy(),e=gr(),r=dt(),t=si(),i=Kn(),o=ye(),u=Ee(),a=Me(),s=vr(),c=Ne(),l=we(),f=Zo(),d=uu(),p=ru(),h=eF(),m=Uy(),v=aF(),b=cF(),g=pF(),_=_F(),y=n("gammaincinv:compute"),E=.5,A=.3333333333333333,L=.25,C=.2,I=.16666666666666666,S=.08333333333333333,w=.041666666666666664,$=[0,0,0,0,0];function k(R,F,T){var U,O,D,q,ne,W,Y,Z,ie,G,B,H,ge,pe,Q,oe,$e,_e,tr,an,be,Sn,Ke,An,yr,z,me,Ln,Et,Jn,ir,Tr,wt,$t,bi,Je,Oe,qr,ze,In,hn,Er,Fr,Or;if(F<E?(q=!0,ne=F,Er=-1):(q=!1,ne=T,Er=1),ze=0,u(R-1)<1e-4&&(In=0,q?F<.001?(Tr=F*F,Ln=Tr*F,ir=Ln*F,an=ir*F,tr=an*F,be=F+Tr*E+Ln*A+ir*L+an*C+tr*I):be=-l(1-F):be=-l(T),R===1?(ze=2,$t=be):(D=r(R),ze=1)),T<1e-30&&R<E&&(In=0,be=-l(T*i(R))+(R-1)*l(-l(T*i(R))),ze=1,D=r(R)),R>1&&R<500&&F<1e-80){for(In=0,W=1/R,U=1/(R+1),be=(r(R+1)+l(F))*W,be=a(be),pe=be,qr=0;qr<10;qr++)be=pe*a(be*W)*c(1-be*U,W);ze=1,D=r(R)}if(Y=1/R*(l(F)+r(R+1)),Y<l(C*(1+R))&&ze===0&&(hn=a(Y),In=0,Sn=R*R,wt=Sn*R,Et=wt*R,Q=R+1,B=Q*Q,G=Q*B,ie=B*B,oe=R+2,Z=oe*oe,$e=R+3,$[0]=1,$[1]=1/Q,$[2]=E*(3*R+5)/(B*oe),$[3]=A*(31+8*Sn+33*R)/(G*oe*$e),$[4]=w*(2888+1179*wt+125*Et+3971*Sn+5661*R)/(ie*Z*$e*(R+4)),be=hn*e($,hn),D=r(R),ze=1),R<10&&ze===0&&(H=o(R)/(v(R)*f),ge=s(.02,H),T<ge&&(In=0,Je=1-R,z=Je*Je,me=z*Je,_e=o(-2/R*l(T/H)),be=R*m(_e),Oe=l(be),be>5?(Ke=Oe*Oe,An=Ke*Oe,yr=An*Oe,hn=1/be,$[0]=Oe-1,$[1]=(3*Je-2*Je*Oe+Ke-2*Oe+2)*E,$[2]=(24*Je*Oe-11*z-24*Je-6*Ke+12*Oe-12-9*Je*Ke+6*z*Oe+2*An)*I,$[3]=(-12*me*Oe+8.04*Je*Ke-114*z*Oe+(72+36*Ke)+(3*yr-72*Oe+162)*(Je-168*Je*Oe)-(12*An+25*me)-(22*Je*An+36*z*Ke+120*z))*S,$[4]=0,be=be-Oe+Je*hn*e($,hn)):(hn=1/be,Ke=Oe*Oe,bi=Oe-1,Fr=Oe-Je*hn*bi,Fr<be&&(be-=Fr)),D=r(R),ze=1)),u(ne-E)<1e-5&&ze===0&&(In=0,W=1/R,be=R-A+(.019753086419753086+.007211444248481286*W)*W,D=r(R),ze=1),R<1&&ze===0&&(In=0,q?be=a(1/R*(l(ne)+r(R+1))):be=a(1/R*(l(1-ne)+r(R+1))),D=r(R),ze=1),ze===0)if(In=1,W=1/R,hn=t(2*ne),_e=Er*hn/o(R*E),hn<d)_e+=(b(_e)+(g(_e)+_(_e)*W)*W)*W,be=R*m(_e),Or=_e,Jn=-o(R/p)*a(-E*R*Or*Or)/v(R),O=1/Jn;else return y("Warning: Overflow problems in one or more steps of the computation."),NaN;return ze<2&&($t=h(be,R,In,F,T,D,O,q)),$t}return g1=k,g1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _1,m5;function EF(){if(m5)return _1;m5=1;var n=ue(),e=iu(),r=Ce(),t=yF();function i(o,u,a){return n(o)||n(u)?NaN:u<e?NaN:o>1||o<0?NaN:a===!0?o===0?r:o===1?0:t(u,1-o,o):o===0?0:o===1?r:t(u,o,1-o)}return _1=i,_1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y1,b5;function wF(){if(b5)return y1;b5=1;var n=EF();return y1=n,y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E1,g5;function $F(){if(g5)return E1;g5=1;var n=5e-324;return E1=n,E1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var w1,_5;function SF(){if(_5)return w1;_5=1;var n=wF(),e=we(),r=ye(),t=$F(),i=xy(),o=By();function u(a,s,c,l){var f,d,p,h,m,v,b,g,_,y,E,A,L,C,I,S,w,$,k,R,F,T,U,O,D,q,ne,W,Y,Z;return c<l?m=n(c,s,!0):m=n(l,s,!1),m/=a,C=s/a,W=r(1+C),$=W*W,k=$*W,R=$*$,F=k*$,T=k*k,U=R*k,O=R*R,D=F*R,b=F*F,ne=m-C,I=ne*ne,S=I*ne,w=I*I,q=W+1,g=q*q,_=q*g,y=g*g,E=(W+2)*(W-1)/(3*W),E+=(k+9*$+21*W+5)*ne/(36*$*q),E-=(R-13*k+69*$+167*W+46)*I/(1620*g*k),E-=(7*F+21*R+70*k+26*$-93*W-31)*S/(6480*_*R),E-=(75*T+202*F+188*R-888*k-1345*$+118*W+138)*w/(272160*y*F),A=(28*R+131*k+402*$+581*W+208)*(W-1)/(1620*q*k),A-=(35*T-154*F-623*R-1636*k-3983*$-3514*W-925)*ne/(12960*g*R),A-=(2132*U+7915*T+16821*F+35066*R+87490*k+141183*$+95993*W+21640)*I/(816480*F*_),A-=(11053*O+53308*U+117010*T+163924*F+116188*R-258428*k-677042*$-481940*W-105497)*S/(14696640*y*T),L=-((3592*U+8375*T-1323*F-29198*R-89578*k-154413*$-116063*W-29632)*(W-1))/(816480*F*g),L-=(442043*D+2054169*O+3803094*U+3470754*T+2141568*F-2393568*R-19904934*k-34714674*$-23128299*W-5253353)*ne/(146966400*T*_),L-=(116932*b+819281*D+2378172*O+4341330*U+6806004*T+10622748*F+18739500*R+30651894*k+30869976*$+15431867*W+2919016)*I/(146966400*y*U),v=m+E/a+A/(a*a)+L/(a*a*a),v<=0&&(v=t),Y=v-C*e(v)+(1+C)*e(1+C)-C,f=1/(1+C),p=v<C?f:0,h=v<C?1:f,Z=(p+h)/2,d=i(Y,C),o(d,Z,p,h,32,100)}return w1=u,w1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $1,y5;function AF(){if(y5)return $1;y5=1;var n=Ee(),e=ct(),r=ou(),t=Rr(),i=Cr();function o(u,a,s,c,l,f){var d,p,h,m,v,b,g,_,y,E,A,L,C,I,S,w;I=0,p=!1,b=a,v=e(1,1-l),y=t(1e7*a,1e7),g=0,h=y,m=y,_=f;do{if(g=I,m=h,h=y,C=u(b),I=C[0],S=C[1],w=C[2],_-=1,I===0)break;if(S===0?(g===0&&(b===s?a=c:a=s,g=u(a),y=a-b),r(g)*r(I)<0?y<0?y=(b-s)/2:y=(b-c)/2:y<0?y=(b-c)/2:y=(b-s)/2):w===0?y=I/S:(E=2*I,L=2*S-I*(w/S),n(L)<1&&n(E)>=n(L)*i?y=I/S:y=E/L,y*S/I<0&&(y=I/S,n(y)>2*n(a)&&(y=(y<0?-1:1)*2*n(a)))),d=n(y/m),d>.8&&d<2&&(y=y>0?(b-s)/2:(b-c)/2,n(y)>b&&(y=r(y)*b),m=y*3),a=b,b-=y,b<s){if(n(s)<1&&n(b)>1&&i/n(b)<n(s)?A=1e3:A=b/s,n(A)<1&&(A=1/A),!p&&A>0&&A<3)y=.99*(a-s),b=a-y,p=!0;else if(y=(a-s)/2,b=a-y,b===s||b===c)break}else if(b>c){if(n(c)<1&&n(b)>1&&i/n(b)<n(c)?A=1e3:A=b/c,n(A)<1&&(A=1/A),!p&&A>0&&A<3)y=.99*(a-c),b=a-y,p=!0;else if(y=(a-c)/2,b=a-y,b===s||b===c)break}y>0?c=a:s=a}while(_&&n(b*v)<n(y));return b}return $1=o,$1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var S1,E5;function LF(){if(E5)return S1;E5=1;var n=Oy().assign,e=Ee(),r=Cr(),t=kr();function i(o,u,a,s){return c;function c(l){var f,d,p,h,m;return m=1-l,f=[0,0],n(l,o,u,!0,s,f,1,0),h=f[0]-a,d=f[1],s&&(d=-d),m===0&&(m=t*64),l===0&&(l=t*64),p=d*(-(m*o)+(u-2)*l+1),e(p)<m*l*r&&(p/=m*l),s&&(p=-p),d===0&&(d=(s?-1:1)*t*64),[h,d,p]}}return S1=i,S1}var A1,w5;function IF(){if(w5)return A1;w5=1;var n=gr(),e=ai(),r=at(),t=wn(),i=h2(),o=Qo(),u=ye(),a=Ee(),s=Me(),c=Ne(),l=ii(),f=Rr(),d=vr(),p=we(),h=kr(),m=_2(),v=Yn(),b=Fq(),g=Oq(),_=zq(),y=SF(),E=AF(),A=LF(),L=32,C=1e3,I=[0,0,0,0,0];function S(w,$,k,R){var F,T,U,O,D,q,ne,W,Y,Z,ie,G,B,H,ge,pe,Q,oe,$e,_e,tr,an,be,Sn,Ke,An,yr,z,me;if(T=!1,R===0)return[1,0];if(k===0)return[0,1];if(w===1){if($===1)return[k,1-k];G=$,$=w,w=G,G=R,R=k,k=G,T=!0}if(z=0,O=0,q=1,w===.5){if($===.5)return z=l(k*m),z*=z,me=l(R*m),me*=me,[z,me];$>.5&&(G=$,$=w,w=G,G=R,R=k,k=G,T=!T)}if($===.5&&w>=.5&&k!==1)tr={},z=b(w,k,tr),me=tr.value;else{if($===1)return k<R?w>1?(z=c(k,1/w),me=-r(p(k)/w)):(z=c(k,1/w),me=1-z):(z=s(t(-R)/w),me=-r(t(-R)/w)),T&&(G=me,me=z,z=G),[z,me];if(w+$>5)k>.5&&(G=$,$=w,w=G,G=R,R=k,k=G,T=!T),Y=d(w,$),W=f(w,$),u(Y)>W-Y&&Y>5?(z=g(w,$,k),me=1-z):(Ke=w+$,D=i(u(w/Ke)),U=Y/Ke,U>=.2&&U<=.8&&Ke>=10?(ie=c(k,1/w),ie<.0025&&w+$<200?z=ie*c(w*o(w,$),1/w):z=_(k,Ke,D),me=1-z):(w<$&&(G=$,$=w,w=G,G=R,R=k,k=G,T=!T),Z=0,$<2&&(Z=o(w,$)),Z===0?me=1:(me=c($*R*Z,1/$),z=1-me)),me>1e-5&&(z=y(w,$,k,R),me=1-z));else if(w<1&&$<1){if(_e=(1-w)/(2-w-$),pe=e(_e,w,$)-k,a(pe)/k<v*3)return T?[1-_e,_e]:[_e,1-_e];pe<0&&(G=$,$=w,w=G,G=R,R=k,k=G,T=!T,_e=1-_e),$e=c(w*k*o(w,$),1/w),z=$e/(1+$e),me=1/(1+$e),z>_e&&(z=_e),q=_e}else w>1&&$>1?(_e=(w-1)/(w+$-2),B=($-1)/(w+$-2),oe=e(_e,w,$)-k,oe<0&&(G=$,$=w,w=G,G=R,R=k,k=G,G=B,B=_e,_e=G,T=!T),Q=p(k*w*o(w,$))/w,z=s(Q),me=z<.9?1-z:-r(Q),$<w&&z<.2&&(H=w-1,ge=$-1,an=w*w,be=w*an,Sn=$*$,I[0]=0,I[1]=1,I[2]=ge/H,H*=H,I[3]=ge*(3*w*$+5*$+an-w-4)/(2*(w+2)*H),H*=w+1,I[4]=ge*(33*w*Sn+31*Sn+8*an*Sn-30*w*$-47*$+11*an*$+6*be*$+18+4*w-be+an*an-10*an),I[4]/=3*(w+3)*(w+2)*H,z=n(I,z)),z>_e&&(z=_e),q=_e):($<w&&(G=$,$=w,w=G,G=R,R=k,k=G,T=!T),c(k,1/w)<.5?(z=c(k*w*o(w,$),1/w),z===0&&(z=h),me=1-z):(me=c(1-c(k,$*o(w,$)),1/$),me===0&&(me=h),z=1-me))}return z>.5&&(G=$,$=w,w=G,G=R,R=k,k=G,G=me,me=z,z=G,T=!T,An=1-q,yr=1-O,O=An,q=yr),O===0&&(T?(O=v,z<O&&(z=O)):O=h,z<O&&(z=O)),F=L,z<1e-50&&(w<1||$<1)&&(F*=3,F/=2),ne=A(w,$,k<R?k:R,k>=R),z=E(ne,z,O,q,F,C),z===O&&(z=0),T?[1-z,z]:[z,1-z]}return A1=S,A1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L1,$5;function S2(){if($5)return L1;$5=1;var n=IF();return L1=n,L1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I1,S5;function kF(){if(S5)return I1;S5=1;var n=ue(),e=S2();function r(t,i,o,u){return n(t)||n(i)||n(o)?NaN:i<=0||o<=0?NaN:t<0||t>1?NaN:u?e(i,o,1-t,t)[0]:e(i,o,t,1-t)[0]}return I1=r,I1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k1,A5;function jy(){if(A5)return k1;A5=1;var n=kF();return k1=n,k1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R1,L5;function RF(){if(L5)return R1;L5=1;var n=jy(),e=ue();function r(t,i,o){return e(t)||e(i)||e(o)||i<=0||o<=0||t<0||t>1?NaN:n(t,i,o)}return R1=r,R1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C1,I5;function CF(){if(I5)return C1;I5=1;var n=$n(),e=jy(),r=ue();function t(i,o){if(r(i)||r(o)||i<=0||o<=0)return n(NaN);return u;function u(a){return r(a)||a<0||a>1?NaN:e(a,i,o)}}return C1=t,C1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M1,k5;function MF(){if(k5)return M1;k5=1;var n=rn(),e=RF(),r=CF();return n(e,"factory",r),M1=e,M1}var NF=MF();const TF=Vn(NF);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N1,R5;function qF(){if(R5)return N1;R5=1;var n=nu(),e=ye(),r=ue();function t(i,o,u){var a,s;return r(i)||r(o)||r(u)||u<0?NaN:u===0?i<o?0:1:(a=u*e(2),s=i-o,.5*n(-s/a))}return N1=t,N1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T1,C5;function FF(){if(C5)return T1;C5=1;var n=ue();function e(r,t){return n(r)||n(t)?NaN:r<t?0:1}return T1=e,T1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q1,M5;function OF(){if(M5)return q1;M5=1;var n=$n(),e=ue();function r(t){if(e(t))return n(NaN);return i;function i(o){return e(o)?NaN:o<t?0:1}}return q1=r,q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F1,N5;function PF(){if(N5)return F1;N5=1;var n=rn(),e=FF(),r=OF();return n(e,"factory",r),F1=e,F1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O1,T5;function DF(){if(T5)return O1;T5=1;var n=$n(),e=PF().factory,r=ue(),t=ye(),i=nu();function o(u,a){var s;if(r(u)||r(a)||a<0)return n(NaN);if(a===0)return e(u);return s=a*t(2),c;function c(l){var f;return r(l)?NaN:(f=l-u,.5*i(-f/s))}}return O1=o,O1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P1,q5;function xF(){if(q5)return P1;q5=1;var n=rn(),e=qF(),r=DF();return n(e,"factory",r),P1=e,P1}var BF=xF();const Wy=Vn(BF);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D1,F5;function HF(){if(F5)return D1;F5=1;var n=Me(),e=Ne(),r=ye(),t=ru(),i=Ce(),o=ue();function u(a,s,c){var l,f,d;return o(a)||o(s)||o(c)||c<0?NaN:c===0?a===s?i:0:(l=e(c,2),f=1/r(l*t),d=-1/(2*l),f*n(d*e(a-s,2)))}return D1=u,D1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x1,O5;function UF(){if(O5)return x1;O5=1;var n=Ce(),e=ue();function r(t,i){return e(t)||e(i)?NaN:t===i?n:0}return x1=r,x1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B1,P5;function jF(){if(P5)return B1;P5=1;var n=$n(),e=Ce(),r=ue();function t(i){if(r(i))return n(NaN);return o;function o(u){return r(u)?NaN:u===i?e:0}}return B1=t,B1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H1,D5;function WF(){if(D5)return H1;D5=1;var n=rn(),e=UF(),r=jF();return n(e,"factory",r),H1=e,H1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U1,x5;function GF(){if(x5)return U1;x5=1;var n=$n(),e=WF().factory,r=ue(),t=ye(),i=Me(),o=Ne(),u=ru();function a(s,c){var l,f,d;if(r(s)||r(c)||c<0)return n(NaN);if(c===0)return e(s);return l=o(c,2),f=1/t(l*u),d=-1/(2*l),p;function p(h){return r(h)?NaN:f*i(d*o(h-s,2))}}return U1=a,U1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j1,B5;function VF(){if(B5)return j1;B5=1;var n=rn(),e=HF(),r=GF();return n(e,"factory",r),j1=e,j1}var XF=VF();const Gy=Vn(XF);/**
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
*/var W1,H5;function YF(){if(H5)return W1;H5=1;function n(e){var r,t,i;return e===0?-.0005087819496582806:(e<0?r=-e:r=e,r<=1?(t=-.0005087819496582806+e*(-.008368748197417368+e*(.03348066254097446+e*(-.012692614766297404+e*(-.03656379714117627+e*(.02198786811111689+e*(.008226878746769157+e*(-.005387729650712429+e*(0+e*0)))))))),i=1+e*(-.9700050433032906+e*(-1.5657455823417585+e*(1.5622155839842302+e*(.662328840472003+e*(-.7122890234154284+e*(-.05273963823400997+e*(.07952836873415717+e*(-.0023339375937419+e*.0008862163904564247))))))))):(e=1/e,t=0+e*(0+e*(-.005387729650712429+e*(.008226878746769157+e*(.02198786811111689+e*(-.03656379714117627+e*(-.012692614766297404+e*(.03348066254097446+e*(-.008368748197417368+e*-.0005087819496582806)))))))),i=.0008862163904564247+e*(-.0023339375937419+e*(.07952836873415717+e*(-.05273963823400997+e*(-.7122890234154284+e*(.662328840472003+e*(1.5622155839842302+e*(-1.5657455823417585+e*(-.9700050433032906+e*1))))))))),t/i)}return W1=n,W1}/**
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
*/var G1,U5;function KF(){if(U5)return G1;U5=1;function n(e){var r,t,i;return e===0?-.20243350835593876:(e<0?r=-e:r=e,r<=1?(t=-.20243350835593876+e*(.10526468069939171+e*(8.3705032834312+e*(17.644729840837403+e*(-18.851064805871424+e*(-44.6382324441787+e*(17.445385985570866+e*(21.12946554483405+e*-3.6719225470772936))))))),i=1+e*(6.242641248542475+e*(3.971343795334387+e*(-28.66081804998+e*(-20.14326346804852+e*(48.560921310873994+e*(10.826866735546016+e*(-22.643693341313973+e*1.7211476576120028)))))))):(e=1/e,t=-3.6719225470772936+e*(21.12946554483405+e*(17.445385985570866+e*(-44.6382324441787+e*(-18.851064805871424+e*(17.644729840837403+e*(8.3705032834312+e*(.10526468069939171+e*-.20243350835593876))))))),i=1.7211476576120028+e*(-22.643693341313973+e*(10.826866735546016+e*(48.560921310873994+e*(-20.14326346804852+e*(-28.66081804998+e*(3.971343795334387+e*(6.242641248542475+e*1)))))))),t/i)}return G1=n,G1}/**
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
*/var V1,j5;function JF(){if(j5)return V1;j5=1;function n(e){var r,t,i;return e===0?-.1311027816799519:(e<0?r=-e:r=e,r<=1?(t=-.1311027816799519+e*(-.16379404719331705+e*(.11703015634199525+e*(.38707973897260434+e*(.3377855389120359+e*(.14286953440815717+e*(.029015791000532906+e*(.0021455899538880526+e*(-6794655751811263e-22+e*(28522533178221704e-24+e*-681149956853777e-24))))))))),i=1+e*(3.4662540724256723+e*(5.381683457070069+e*(4.778465929458438+e*(2.5930192162362027+e*(.848854343457902+e*(.15226433829533179+e*(.011059242293464892+e*(0+e*(0+e*0)))))))))):(e=1/e,t=-681149956853777e-24+e*(28522533178221704e-24+e*(-6794655751811263e-22+e*(.0021455899538880526+e*(.029015791000532906+e*(.14286953440815717+e*(.3377855389120359+e*(.38707973897260434+e*(.11703015634199525+e*(-.16379404719331705+e*-.1311027816799519))))))))),i=0+e*(0+e*(0+e*(.011059242293464892+e*(.15226433829533179+e*(.848854343457902+e*(2.5930192162362027+e*(4.778465929458438+e*(5.381683457070069+e*(3.4662540724256723+e*1)))))))))),t/i)}return V1=n,V1}/**
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
*/var X1,W5;function zF(){if(W5)return X1;W5=1;function n(e){var r,t,i;return e===0?-.0350353787183178:(e<0?r=-e:r=e,r<=1?(t=-.0350353787183178+e*(-.0022242652921344794+e*(.018557330651423107+e*(.009508047013259196+e*(.0018712349281955923+e*(.00015754461742496055+e*(460469890584318e-20+e*(-2304047769118826e-25+e*26633922742578204e-28))))))),i=1+e*(1.3653349817554064+e*(.7620591645536234+e*(.22009110576413124+e*(.03415891436709477+e*(.00263861676657016+e*(7646752923027944e-20+e*(0+e*0)))))))):(e=1/e,t=26633922742578204e-28+e*(-2304047769118826e-25+e*(460469890584318e-20+e*(.00015754461742496055+e*(.0018712349281955923+e*(.009508047013259196+e*(.018557330651423107+e*(-.0022242652921344794+e*-.0350353787183178))))))),i=0+e*(0+e*(7646752923027944e-20+e*(.00263861676657016+e*(.03415891436709477+e*(.22009110576413124+e*(.7620591645536234+e*(1.3653349817554064+e*1)))))))),t/i)}return X1=n,X1}/**
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
*/var Y1,G5;function QF(){if(G5)return Y1;G5=1;function n(e){var r,t,i;return e===0?-.016743100507663373:(e<0?r=-e:r=e,r<=1?(t=-.016743100507663373+e*(-.0011295143874558028+e*(.001056288621524929+e*(.00020938631748758808+e*(14962478375834237e-21+e*(44969678992770644e-23+e*(4625961635228786e-24+e*(-2811287356288318e-29+e*9905570997331033e-32))))))),i=1+e*(.5914293448864175+e*(.1381518657490833+e*(.016074608709367652+e*(.0009640118070051656+e*(27533547476472603e-21+e*(282243172016108e-21+e*(0+e*0)))))))):(e=1/e,t=9905570997331033e-32+e*(-2811287356288318e-29+e*(4625961635228786e-24+e*(44969678992770644e-23+e*(14962478375834237e-21+e*(.00020938631748758808+e*(.001056288621524929+e*(-.0011295143874558028+e*-.016743100507663373))))))),i=0+e*(0+e*(282243172016108e-21+e*(27533547476472603e-21+e*(.0009640118070051656+e*(.016074608709367652+e*(.1381518657490833+e*(.5914293448864175+e*1)))))))),t/i)}return Y1=n,Y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var K1,V5;function ZF(){if(V5)return K1;V5=1;var n=ue(),e=ye(),r=we(),t=Ce(),i=tn(),o=YF(),u=KF(),a=JF(),s=zF(),c=QF(),l=.08913147449493408,f=2.249481201171875,d=.807220458984375,p=.9399557113647461,h=.9836282730102539;function m(v){var b,g,_,y,E,A;return n(v)?NaN:v===1?t:v===-1?i:v===0?v:v>1||v<-1?NaN:(v<0?(b=-1,g=-v):(b=1,g=v),y=1-g,g<=.5?(E=g*(g+10),A=o(g),b*(E*l+E*A)):y>=.25?(E=e(-2*r(y)),y-=.25,A=u(y),b*(E/(f+A))):(y=e(-r(y)),y<3?(_=y-1.125,A=a(_),b*(d*y+A*y)):y<6?(_=y-3,A=s(_),b*(p*y+A*y)):(_=y-6,A=c(_),b*(h*y+A*y))))}return K1=m,K1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J1,X5;function Vy(){if(X5)return J1;X5=1;var n=ZF();return J1=n,J1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z1,Y5;function eO(){if(Y5)return z1;Y5=1;var n=Vy(),e=ue(),r=ye();function t(i,o,u){var a,s;return e(o)||e(u)||e(i)||u<0||i<0||i>1?NaN:u===0?o:(a=o,s=u*r(2),a+s*n(2*i-1))}return z1=t,z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q1,K5;function nO(){if(K5)return Q1;K5=1;var n=ue();function e(r,t){return n(r)||r<0||r>1?NaN:t}return Q1=e,Q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z1,J5;function rO(){if(J5)return Z1;J5=1;var n=$n(),e=ue();function r(t){if(e(t))return n(NaN);return i;function i(o){return e(o)||o<0||o>1?NaN:t}}return Z1=r,Z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ep,z5;function tO(){if(z5)return ep;z5=1;var n=rn(),e=nO(),r=rO();return n(e,"factory",r),ep=e,ep}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var np,Q5;function iO(){if(Q5)return np;Q5=1;var n=$n(),e=tO().factory,r=Vy(),t=ue(),i=ye();function o(u,a){var s,c;if(t(u)||t(a)||a<0)return n(NaN);return a===0&&e(u),s=u,c=a*i(2),l;function l(f){return t(f)||f<0||f>1?NaN:s+c*r(2*f-1)}}return np=o,np}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rp,Z5;function oO(){if(Z5)return rp;Z5=1;var n=rn(),e=eO(),r=iO();return n(e,"factory",r),rp=e,rp}var uO=oO();const aO=Vn(uO);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tp,e8;function sO(){if(e8)return tp;e8=1;var n=ai(),e=ue(),r=Ne();function t(i,o){var u,a,s;return e(i)||e(o)||o<=0?NaN:i===0?.5:(u=r(i,2),o>2*u?(s=u/(o+u),a=n(s,.5,o/2,!0,!0)/2):(s=o/(o+u),a=n(s,o/2,.5,!0,!1)/2),i>0?1-a:a)}return tp=t,tp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ip,n8;function cO(){if(n8)return ip;n8=1;var n=$n(),e=ai(),r=ue(),t=Ne();function i(o){if(r(o)||o<=0)return n(NaN);return u;function u(a){var s,c,l;return r(a)?NaN:a===0?.5:(s=t(a,2),o>2*s?(l=s/(o+s),c=e(l,.5,o/2,!0,!0)/2):(l=o/(o+s),c=e(l,o/2,.5,!0,!1)/2),a>0?1-c:c)}}return ip=i,ip}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var op,r8;function lO(){if(r8)return op;r8=1;var n=rn(),e=sO(),r=cO();return n(e,"factory",r),op=e,op}var fO=lO();const Xy=Vn(fO);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var up,t8;function dO(){if(t8)return up;t8=1;var n=ue(),e=Qo(),r=ye(),t=Ne();function i(o,u){var a;return n(o)||n(u)||u<=0?NaN:(a=r(u)*e(u/2,.5),t(u/(u+t(o,2)),(1+u)/2)/a)}return up=i,up}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ap,i8;function pO(){if(i8)return ap;i8=1;var n=$n(),e=ue(),r=Qo(),t=ye(),i=Ne();function o(u){var a,s;if(e(u)||u<=0)return n(NaN);return s=t(u)*r(u/2,.5),a=(1+u)/2,c;function c(l){return e(l)?NaN:i(u/(u+i(l,2)),a)/s}}return ap=o,ap}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sp,o8;function hO(){if(o8)return sp;o8=1;var n=rn(),e=dO(),r=pO();return n(e,"factory",r),sp=e,sp}var vO=hO();const A2=Vn(vO);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cp,u8;function mO(){if(u8)return cp;u8=1;var n=S2(),e=ue(),r=ou(),t=ye();function i(o,u){var a,s;return e(u)||e(o)||u<=0||o<0||o>1?NaN:(a=o>.5?1-o:o,s=n(u/2,.5,2*a,1-2*a),r(o-.5)*t(u*s[1]/s[0]))}return cp=i,cp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lp,a8;function bO(){if(a8)return lp;a8=1;var n=$n(),e=S2(),r=ue(),t=ou(),i=ye();function o(u){if(r(u)||u<=0)return n(NaN);return a;function a(s){var c,l;return r(s)||s<0||s>1?NaN:(c=s>.5?1-s:s,l=e(u/2,.5,2*c,1-2*c),t(s-.5)*i(u*l[1]/l[0]))}}return lp=o,lp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fp,s8;function gO(){if(s8)return fp;s8=1;var n=rn(),e=mO(),r=bO();return n(e,"factory",r),fp=e,fp}var _O=gO();const yO=Vn(_O),c8=1e-9,EO=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,Yy=/^\s*([a-z][a-z-]*)\s*\((.*)\)\s*$/;function wO(n){const[e,r,t]=n;return e<t?e<=r&&r<=t?null:`requires lo <= peak <= hi, got lo=${e}, peak=${r}, hi=${t}`:`requires lo < hi, got lo=${e}, hi=${t}`}function $O(n){const[e,r]=n;return e<r?null:`requires lo < hi, got lo=${e}, hi=${r}`}function SO(n){const[e,r]=n;return e>0&&r>0?null:`requires a > 0 and b > 0, got a=${e}, b=${r}`}function l8(n){const e=n[1];return e>0?null:`requires sigma > 0, got sigma=${e}`}function AO(n){const[e,r]=n;return 0<e&&e<r?null:`requires 0 < lo < hi, got lo=${e}, hi=${r}`}function f8(n){const[,e,r]=n;return e<=0?`requires sigma > 0, got sigma=${e}`:r<=0?`requires df > 0, got df=${r}`:null}function d8(n,e){const r=e-n;return{cdf:t=>t<=n?0:t>=e?1:(t-n)/r,ppf:t=>n+t*r,pdf:t=>t>=n&&t<=e?1/r:0}}function LO(n,e,r){const t=r-n,i=(e-n)/t;return{cdf:o=>o<=n?0:o>=r?1:o<=e?(o-n)*(o-n)/(t*(e-n)):1-(r-o)*(r-o)/(t*(r-e)),ppf:o=>o<i?n+Math.sqrt(o*t*(e-n)):r-Math.sqrt((1-o)*t*(r-e)),pdf:o=>o<n||o>r?0:o===e?2/t:o<e?2*(o-n)/(t*(e-n)):2*(r-o)/(t*(r-e))}}function p8(n,e){return{cdf:r=>Wy(r,n,e),ppf:r=>aO(r,n,e),pdf:r=>Gy(r,n,e)}}function kp(n,e,r){return{cdf:t=>Xy((t-n)/e,r),ppf:t=>n+e*yO(t,r),pdf:t=>A2((t-n)/e,r)/e}}function IO(n,e){return{cdf:r=>Ip(r,n,e),ppf:r=>TF(r,n,e),pdf:r=>pq(r,n,e)}}const kO=1e-10,RO=20,CO=1e-300,h8=24,MO=60,NO=.001;function Rp(n,e,r,t,i){return(e-n)/6*(r+4*t+i)}function Cp(n,e,r,t,i,o,u,a){const s=(e+r)/2,c=(e+s)/2,l=(s+r)/2,f=n(c),d=n(l),p=Rp(e,s,t,f,i),h=Rp(s,r,i,d,o),m=p+h,v=kO*Math.max(Math.abs(m),CO);return a>=RO||Math.abs(m-u)<=15*v?m+(m-u)/15:Cp(n,e,s,t,f,i,p,a+1)+Cp(n,s,r,i,d,o,h,a+1)}function TO(n,e,r){if(!(r>e))return 0;const t=(e+r)/2,i=n(e),o=n(t),u=n(r);return Cp(n,e,r,i,o,u,Rp(e,r,i,o,u),0)}const qO=(()=>{const n=[0];for(let e=h8;e>=1;e--)n.push(.5*2**-e);for(let e=h8;e>=0;e--)n.push(1-.5*2**-e);return n})();function FO(n){return Ky(n,qO)}function Ky(n,e){let r=0;for(let t=0;t<e.length-1;t++)r+=TO(n,e[t],e[t+1]);return r}function OO(n,e,r,t){const i=[e];for(let o=t;o>=1;o--){const u=r*2**-o;u>e&&i.push(u)}return i.push(r),Ky(n,i)}function PO(n,e,r){const t=Ut(n,e),i=Ut(n,r)-t;return i>0?i*FO(o=>Math.min(Math.max(n.ppf(t+o*i),e),r)):0}function v8(n,e,r,t){return t>r?n*(t**3-r**3)/3+e*(t**2-r**2)/2:0}function DO(n,e,r){const[t,i]=n,o=Math.max(t,e),u=Math.min(i,r);return u>o?(u*u-o*o)/(2*(i-t)):0}function xO(n,e,r){const[t,i,o]=n,u=o-t,a=i-t,s=o-i;let c=0;if(a>0){const l=2/(u*a);c+=v8(l,-t*l,Math.max(t,e),Math.min(i,r))}if(s>0){const l=2/(u*s);c+=v8(-l,o*l,Math.max(i,e),Math.min(o,r))}return c}function BO(n,e,r){const[t,i]=n,o=Math.min(Math.max(e,0),1),u=Math.min(Math.max(r,0),1);return u>o?t/(t+i)*(Ip(u,t+1,i)-Ip(o,t+1,i)):0}function m8(n){return Number.isFinite(n)?Gy(n,0,1):0}function so(n){return n===-1/0?0:n===1/0?1:Wy(n,0,1)}function HO(n,e,r){const[t,i]=n,o=(e-t)/i,u=(r-t)/i;return t*(so(u)-so(o))-i*(m8(u)-m8(o))}function UO(n,e,r){const[t,i]=n,o=u=>Number.isFinite(u)?(u-t)/i-i:u;return Math.exp(t+i*i/2)*(so(o(r))-so(o(e)))}function jO(n,e,r){const[t,i]=n,o=Math.log(t),u=Math.log(i),a=Math.max(o,e),s=Math.min(u,r);return s>a?(Math.exp(s)-Math.exp(a))/(u-o):0}function dp(n,e){return-(e+n*n)*A2(n,e)/(e-1)}function WO(n,e,r){if(!Number.isFinite(n)||!Number.isFinite(e)){if(r<=1)return!Number.isFinite(n)&&!Number.isFinite(e)?NaN:Number.isFinite(n)?1/0:-1/0;const t=i=>Number.isFinite(i)?dp(i,r):0;return t(e)-t(n)}return Math.abs(r-1)<NO?PO(kp(0,1,r),n,e):dp(e,r)-dp(n,r)}function GO(n,e,r){const[t,i,o]=n,u=(e-t)/i,a=(r-t)/i,s=c=>c===-1/0?0:c===1/0?1:Xy(c,o);return t*(s(a)-s(u))+i*WO(u,a,o)}function VO(n,e,r){const[t,i,o]=n;if(r===1/0)return 1/0;const u=A2(0,o)/i,a=c=>{const l=(c-t)/i;return u*(1+l*l/o)**(-(o+1)/2)},s=e===-1/0?0:Math.exp(e-r);return Math.exp(r)*OO(c=>c<=0?0:a(r+Math.log(c)),s,1,MO)}const pr={tri:{signature:"tri(lo, peak, hi)",note:"triangular",nParams:3,check:wO,build:n=>({latent:LO(n[0],n[1],n[2]),logX:!1}),partialFirstMoment:xO},uniform:{signature:"uniform(lo, hi)",note:"uniform",nParams:2,check:$O,build:n=>({latent:d8(n[0],n[1]),logX:!1}),partialFirstMoment:DO},beta:{signature:"beta(a, b)",note:"Beta on [0, 1]; a, b > 0",nParams:2,check:SO,build:n=>({latent:IO(n[0],n[1]),logX:!1}),partialFirstMoment:BO},normal:{signature:"normal(mu, sigma)",note:"normal; sigma > 0",nParams:2,check:l8,build:n=>({latent:p8(n[0],n[1]),logX:!1}),partialFirstMoment:HO},lognormal:{signature:"lognormal(mu, sigma)",note:"mu/sigma are mean/sd of log(X); sigma > 0",nParams:2,check:l8,build:n=>({latent:p8(n[0],n[1]),logX:!0}),partialFirstMoment:UO},loguniform:{signature:"loguniform(lo, hi)",note:"uniform in log space; 0 < lo < hi",nParams:2,check:AO,build:n=>({latent:d8(Math.log(n[0]),Math.log(n[1])),logX:!0}),partialFirstMoment:jO},t:{signature:"t(mu, sigma, df)",note:"location-scale Student-t; sigma > 0, df > 0",nParams:3,check:f8,build:n=>({latent:kp(n[0],n[1],n[2]),logX:!1}),partialFirstMoment:GO},logt:{signature:"logt(mu, sigma, df)",note:"exp of location-scale Student-t; log-space params like lognormal",nParams:3,check:f8,build:n=>({latent:kp(n[0],n[1],n[2]),logX:!0}),partialFirstMoment:VO}},XO=["normal","lognormal","t","logt"];function YO(n){const[e,r]=n;return e<r?null:`requires lo < hi in the truncation window, got lo=${e}, hi=${r}`}function KO(n,e){const r=e.signature.split("(",2)[1].slice(0,-1);return{signature:`${n}-trunc(${r}, lo, hi)`,note:`${e.note}; explicitly truncated to [lo, hi]`,nParams:e.nParams+2,check:t=>e.check(t.slice(0,e.nParams))??YO(t.slice(e.nParams)),build:t=>e.build(t),partialFirstMoment:e.partialFirstMoment,hasTruncWindow:!0}}for(const n of XO)pr[`${n}-trunc`]=KO(n,pr[n]);function JO(n){return Yy.test(n)}function Jy(n){const e=Yy.exec(n);if(!e)throw new Error(`malformed family spec ${JSON.stringify(n)}: expected "family(num, num, ...)"`);const r=e[1],t=e[2],i=pr[r];if(i===void 0)throw new Error(`unknown distribution family ${JSON.stringify(r)}; available: `+Object.values(pr).map(s=>s.signature).join(", "));const o=t.split(",").map(s=>s.trim());for(const s of o)if(!EO.test(s))throw new Error(`family spec ${JSON.stringify(n.trim())}: bad numeric argument ${JSON.stringify(s)}`);const u=o.map(Number);if(u.length!==i.nParams)throw new Error(`${r} takes ${i.nParams} arguments as ${i.signature}, got ${u.length}`);const a=i.check(u);if(a)throw new Error(`${n.trim()}: ${i.signature} ${a}`);return i.hasTruncWindow?{family:r,params:u.slice(0,-2),text:n.trim(),truncWindow:[u[u.length-2],u[u.length-1]]}:{family:r,params:u,text:n.trim(),truncWindow:null}}function Ut(n,e){return e===-1/0?0:e===1/0?1:n.cdf(e)}class L2{constructor(e,r,t,i,o,u,a,s,c){this.spec=e,this.latent=r,this.logX=t,this.cdfLo=i,this.mass=o,this.xLo=u,this.xHi=a,this.yLo=s,this.yHi=c}inverseCdf(e){const r=this.latent.ppf(this.cdfLo+e*this.mass),t=this.logX?Math.exp(r):r;return Math.min(Math.max(t,this.xLo),this.xHi)}cdf(e){if(e<=this.xLo)return 0;if(e>=this.xHi)return 1;if(this.logX&&e<=0)return 0;const r=this.logX?Math.log(e):e;return(Ut(this.latent,r)-this.cdfLo)/this.mass}mean(){const e=pr[this.spec.family];if(e===void 0)throw new Error(`unknown distribution family ${JSON.stringify(this.spec.family)}`);const t=e.partialFirstMoment(this.spec.params,this.yLo,this.yHi)/this.mass;return Number.isFinite(t)?t:null}pdf(e){return e<this.xLo||e>this.xHi?0:this.logX?e<=0?0:this.latent.pdf(Math.log(e))/e/this.mass:this.latent.pdf(e)/this.mass}}function I2(n,e,r){const t=pr[n.family];if(t===void 0)throw new Error(`unknown distribution family ${JSON.stringify(n.family)}`);const{latent:i,logX:o}=t.build(n.params);let u=e===null?-1/0:e,a=r===null?1/0:r;n.truncWindow!==null&&(u=Math.max(u,n.truncWindow[0]),a=Math.min(a,n.truncWindow[1]));let s,c;o?(s=u>0?Math.log(u):-1/0,c=a>0?Math.log(a):-1/0):(s=u,c=a);const l=Ut(i,s),d=Ut(i,c)-l;if(d<c8){let p=`the variable's range [${e}, ${r}]`;throw n.truncWindow!==null&&(p+=` ∩ the spec's truncation window [${n.truncWindow[0]}, ${n.truncWindow[1]}]`),new Error(`family spec ${JSON.stringify(n.text)}: essentially no probability mass in ${p} (mass ${d.toExponential(2)} < ${c8})`)}return new L2(n,i,o,l,d,u,a,s,c)}const co="pointmass",zO="[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?",QO=new RegExp(`^\\s*${co}\\s*\\(\\s*(${zO})\\s*\\)\\s*$`),ZO=new RegExp(`^\\s*${co}\\b`);function zy(n){const e=QO.exec(n);if(e===null)throw new Error(`malformed ${co} spec ${JSON.stringify(n)}: expected "${co}(num)"`);return Number(e[1])}function k2(n){return ZO.test(n)?zy(n):null}function Qy(n){const e=zy(n);return[[e,1],[e,1]]}function eP(n,e){let r=1/0,t=-1/0;for(const i of n){const{lo:o,hi:u}=e(i);r=Math.min(r,o),t=Math.max(t,u)}return{lo:r,hi:t}}function Mp(n){const e=.254829592,r=-.284496736,t=1.421413741,i=-1.453152027,o=1.061405429,u=.3275911,a=n<0?-1:1,s=Math.abs(n)/Math.SQRT2,c=1/(1+u*s),l=1-((((o*c+i)*c+t)*c+r)*c+e)*c*Math.exp(-s*s);return .5*(1+a*l)}function lo(){const n=Math.random(),e=Math.random(),r=Math.sqrt(-2*Math.log(n)),t=2*Math.PI*e;return[r*Math.cos(t),r*Math.sin(t)]}const ci=1e-15;function nP(n,e){const r=n.length;if(r<2)throw new Error(`buildFromXsHs: need at least 2 breakpoints, got ${r}`);let t=0;for(let u=0;u<r-1;u++)t+=(n[u+1]-n[u])*(e[u]+e[u+1])/2;if(t<=0)throw new Error("buildPieceLinear: distribution has zero or negative area");const i=new Float64Array(r);for(let u=0;u<r;u++)i[u]=e[u]/t;const o=new Float64Array(r);o[0]=0;for(let u=0;u<r-1;u++)o[u+1]=o[u]+(n[u+1]-n[u])*(i[u]+i[u+1])/2;return o[r-1]=1,{xs:new Float64Array(n),fs:i,Fs:o}}function Zy(n){const{pairs:e}=n,r=e[0][0];if(e[e.length-1][0]-r<ci)return{xs:new Float64Array([r,r]),fs:new Float64Array([1,1]),Fs:new Float64Array([0,1])};const i=e.map(u=>u[0]),o=e.map(u=>u[1]);return nP(i,o)}function fo(n,e){if(n.kind==="family"){if(e===void 0)throw new Error(`family spec ${JSON.stringify(n.spec.text)} needs the svar's declared range for implicit truncation, but no paramRange was provided (thread paramRanges through the caller)`);return I2(n.spec,e.lo,e.hi)}return Zy(n)}function Wr(n,e){return e instanceof L2?e.inverseCdf(n):tP(n,e)}const rP=1e-12;function tP(n,e){const{xs:r,fs:t,Fs:i}=e,o=r.length-1;if(o<=0||n<=0)return r[0];if(n>=1)return r[o];let u=0,a=o;for(;u<a-1;){const p=u+a>>1;i[p]<=n?u=p:a=p}const s=u,c=r[s+1]-r[s];if(c<ci)return r[s];const l=n-i[s],f=(t[s+1]-t[s])/c;let d;if(Math.abs(f)<rP)d=l/t[s];else{const p=t[s]*t[s]+2*f*l;d=(-t[s]+Math.sqrt(Math.max(0,p)))/f}return r[s]+d}function iP(n,e){if(n.kind==="family"){const t=(o,u)=>e!==void 0&&(e.lo===null||o>=e.lo)&&(e.hi===null||u<=e.hi),i=n.spec.params;return n.spec.family==="tri"&&t(i[0],i[2])?{kind:"triangular",lo:i[0],peak:i[1],hi:i[2]}:n.spec.family==="uniform"&&t(i[0],i[1])?{kind:"uniform",lo:i[0],hi:i[1]}:null}const{pairs:r}=n;if(r.length===2){const[t,i]=r[0],[o,u]=r[1];return i===u&&i>0?{kind:"uniform",lo:t,hi:o}:i===0&&u>0?{kind:"triangular",lo:t,peak:o,hi:o}:i>0&&u===0?{kind:"triangular",lo:t,peak:t,hi:o}:null}if(r.length===3){const[t,i]=r[0],[o,u]=r[1],[a,s]=r[2];if(i===0&&s===0&&u>0)return{kind:"triangular",lo:t,peak:o,hi:a}}return null}function oP(n){const e=n.length;let r=0,t=0;for(const a of n){let s=1,c=1;for(const l of a){const f=1-l.hi,d=1-l.lo;if(l.kind==="triangular"){const p=1-l.peak;s*=(f+d+p)/3,c*=(f*f+d*d+p*p+f*d+f*p+d*p)/6}else s*=(f+d)/2,c*=(f*f+f*d+d*d)/3}r+=s,t+=c}const i=r/e,u=t/e-i*i;return{mean:i,sigma:Math.sqrt(Math.max(0,u))}}function uP(n,e,r){if(e!==ES)return null;const t=[];for(const i of n){const o=[];for(const[u,a]of i.entries()){const s=iP(a,r==null?void 0:r[u]);if(s===null)return null;o.push(s)}t.push(o)}return oP(t)}function Np(n,e,r,t){var s;const{trialCount:i,nParams:o,perTrialLoadings:u}=eE(n,e,r),a=Array.from({length:o},()=>new Float64Array(t));for(let c=0;c<t;c++){const l=Math.floor(Math.random()*i),f=n[l],{loadingMatrix:d,residualSds:p}=u[l],h=((s=d[0])==null?void 0:s.length)??0;if(h===0)for(let m=0;m<o;m++)a[m][c]=Wr(Math.random(),f[m]);else{const m=[];for(let v=0;v<h;v++)m.push(lo()[0]);for(let v=0;v<o;v++){const b=lo()[0],g=d[v];let _=p[v]*b;for(let y=0;y<h;y++)_+=g[y]*m[y];a[v][c]=Wr(Mp(_),f[v])}}}return a}function eE(n,e,r){const t=n.length;if(t===0)throw new Error("sampleCopulaMatrix: need at least one trial");const i=r.length;if(n.some(u=>u.length!==i))throw new Error(`sampleCopulaMatrix: trials disagree with params on parameter count (${i} params)`);if(e.length!==t)throw new Error(`sampleCopulaMatrix: ${e.length} per-trial lloads specs for ${t} trials`);const o=e.map(u=>vR(u,r));return{trialCount:t,nParams:i,perTrialLoadings:o}}function aP(n,e,r,t){var l;const{trialCount:i,nParams:o,perTrialLoadings:u}=eE(n,e,r),a=Array.from({length:o},()=>new Float64Array(t)),c=u.some(({loadingMatrix:f})=>{var d;return(((d=f[0])==null?void 0:d.length)??0)>0})?Array.from({length:o},()=>new Float64Array(t)):a;for(let f=0;f<t;f++){const d=Math.floor(Math.random()*i),p=n[d],{loadingMatrix:h,residualSds:m}=u[d],v=((l=h[0])==null?void 0:l.length)??0;if(v===0)for(let b=0;b<o;b++){const g=Wr(Math.random(),p[b]);a[b][f]=g,c[b][f]=g}else{const b=[];for(let g=0;g<v;g++)b.push(lo()[0]);for(let g=0;g<o;g++){const _=lo()[0];a[g][f]=Wr(Mp(_),p[g]);const y=h[g];let E=m[g]*_;for(let A=0;A<v;A++)E+=y[A]*b[A];c[g][f]=Wr(Mp(E),p[g])}}}return{independent:a,joint:c}}function li(n,e){if(n.length===0)throw new Error("combineSampleColumns: need at least one sampled column");const r=n[0].length,t=new Float64Array(r),i=new Array(n.length);for(let o=0;o<r;o++){for(let u=0;u<n.length;u++)i[u]=n[u][o];t[o]=e(i)}return t}function sP(n){if(typeof n=="string")return k2(n)!==null?{kind:"pairs",pairs:Qy(n)}:{kind:"family",spec:Jy(n)};if(!n||n.length===0)throw new Error("sampleValueToSpec: no sample value present (gate on sampleValueHasData to tolerate absence)");return{kind:"pairs",pairs:n}}const cP=/\(\s*([\d.eE+-]+)\s+([\d.eE+-]+)\s*\)/g;function R2(n,e){const r=n.trim(),t=k2(r);if(t!==null){if(!Gi(e,t))throw new Error(`pointmass value ${t} not in ${Vi(e)}`);return{kind:"pairs",pairs:Qy(r)}}if(JO(r)){const a=Jy(r);return I2(a,e.lo,e.hi),{kind:"family",spec:a}}if(!r.includes("("))throw new Error(`expected a family spec "name(num, ...)" or PWL pairs "(x y) ..." (pointmass(num) is also accepted), got "${r}"`);const i=[...r.matchAll(cP)];if(i.length<2)throw new Error(`need at least 2 (x y) pairs, got ${i.length}`);const o=i.map(a=>[Number(a[1]),Number(a[2])]);let u=-1/0;for(let a=0;a<o.length;a++){const[s,c]=o[a];if(isNaN(s)||!Gi(e,s))throw new Error(`pair ${a+1} x=${s} not in ${Vi(e)}`);if(isNaN(c)||c<0||c>1)throw new Error(`pair ${a+1} y=${c} not in [0, 1]`);if(s<u)throw new Error(`pair ${a+1} x=${s} not sorted (prev was ${u})`);u=s}return{kind:"pairs",pairs:o}}function nE(n){return typeof n=="string"?n.length>0:((n==null?void 0:n.length)??0)>0}function au(n){const e=new Float64Array(n);e.sort();const r=e.length;let t=0;for(let i=0;i<r;i++)t+=e[i];return{mean:t/r,median:e[Math.floor(r*.5)],p5:e[Math.floor(r*.05)],p95:e[Math.floor(r*.95)],samples:e,count:r}}const lP=32,fP=4e6,Fn=new Map;let Pi=0;function _r(n){return JSON.stringify(n,(e,r)=>{if(typeof r=="function"||typeof r=="symbol")throw new Error(`mc_memo key parts must be JSON-serializable data; got a ${typeof r}. Identify a combine function by a string tag / form id instead.`);return r})}function su(n,e){const r=_r(n),t=Fn.get(r);if(t!==void 0)return Fn.delete(r),Fn.set(r,t),t;const i=e();for(Fn.set(r,i),Pi+=i.samples.length;(Fn.size>lP||Pi>fP)&&Fn.size>1;){const o=Fn.keys().next().value;Pi-=Fn.get(o).samples.length,Fn.delete(o)}return i}function dP(){Fn.clear(),Pi=0}const pP=256,Qn=new Map,jt=new Map;let rE=1;function tE(n){const e=_r(n),r=Qn.get(e);if(r!==void 0)return Qn.delete(e),Qn.set(e,r),r;const t={token:`mcpool-${rE++}`,extraBlocks:0};for(Qn.set(e,t),jt.set(t.token,t);Qn.size>pP;){const i=Qn.keys().next().value;jt.delete(Qn.get(i).token),Qn.delete(i)}return t}const hP=64,po=new Map,Zn=new Map;function iE(n){const e=_r([...n].sort()),r=Zn.get(e);if(r!==void 0)return Zn.delete(e),Zn.set(e,r),r;const t=`mcpoolgroup-${rE++}`;for(Zn.set(e,t),po.set(t,[...n]);Zn.size>hP;){const i=Zn.keys().next().value;po.delete(Zn.get(i)),Zn.delete(i)}return t}function vP(n){const e=po.get(n);if(e!==void 0){let t=!1;for(const i of e){const o=jt.get(i);o!==void 0&&(o.extraBlocks+=1,t=!0)}return t}const r=jt.get(n);return r===void 0?!1:(r.extraBlocks+=1,!0)}function mP(){Qn.clear(),jt.clear(),po.clear(),Zn.clear()}const bP=2048,nr=new Map;function b8(n){const e=_r(n),r=nr.get(e);if(r!==void 0)return nr.delete(e),nr.set(e,r),r}function g8(n){const e=_r(n);if(nr.has(e))throw new Error(`streaming mean entry already exists for key ${e}`);const r={n:0,mean:0,m2:0,blocksFolded:0};for(nr.set(e,r);nr.size>bP;){const t=nr.keys().next().value;nr.delete(t)}return r}function pp(n,e,r){let{n:t,mean:i,m2:o}=n;for(let u=0;u<e.length;u++){const a=e[u];if(!Number.isFinite(a))throw new Error(`streaming mean fold: non-finite sample value ${a} at block index ${u}`);t+=1;const s=a-i;i+=s/t,o+=s*(a-i)}n.n=t,n.mean=i,n.m2=o,n.blocksFolded=r}function _8(n){return Math.sqrt(n.m2/(n.n-1)/n.n)}function gP(){nr.clear()}const fi="Bounds are not available for this formula: no interval for it follows from bounds responses. Its point and distribution results are unaffected.",cu="copula-matrix";function oE(n,e,r){if(e.bounds&&!e.boundsTightness)throw new Error(`form ${n} has a bounds implementation but no boundsTightness — regenerate form_fns`);return{key:n,params:e.params,typeHighlevel:e.typeHighlevel,point:e.point,bounds:e.bounds??null,boundsTightness:e.bounds?e.boundsTightness:null,closedFormMomentsShape:e.closedFormMomentsShape,sampleStage:e.sampleStage,barrierRegistry:r}}function Hn(n,e,r){return e==="point"?{mode:e,trials:n.map(t=>t.point)}:e==="bounds"?{mode:e,trials:n.map(t=>t.bounds)}:{mode:e,ranges:r,trials:n.map(t=>{const i={};for(const[o,u]of Object.entries(t.sample))nE(u)&&(i[o]=sP(u));return{specs:i,lloads:t.lloads??null}})}}class Wt extends Error{constructor(e,r){super(`no trial has ${e} data for ${JSON.stringify(r)}`),this.missingParams=r,this.name="NoUsableTrialsError"}}function Un(n,e,r){switch(e.mode){case"point":{const i=Jr(e.mode,e.trials,n.params,r.onIncompleteTrial).map(a=>n.params.map(s=>a[s])),o=i.map(a=>n.point(a));return{kind:"point",value:o.reduce((a,s)=>a+s,0)/o.length,perTrial:o,perTrialInputs:i}}case"bounds":{const t=Jr(e.mode,e.trials,n.params,r.onIncompleteTrial),i=t.map(s=>n.params.map(c=>s[c])),o=n.bounds;if(!o)throw new Error(fi);const{lo:u,hi:a}=eP(i,o);return{kind:"bounds",lo:u,hi:a,tightness:n.boundsTightness??"loose",trialCount:t.length}}case"sample":return _P(n,e,r)}}function Jr(n,e,r,t){const i=u=>n==="sample"?u.specs:u;if(e.length===0)throw t==="skip"?new Wt(n,r):new Error(`record has no trials with ${n} data`);if(t==="error"){for(const[u,a]of e.entries()){const s=r.filter(c=>i(a)[c]===void 0);if(s.length>0)throw new Error(`Missing required ${n} input(s) for trial ${u+1}: ${JSON.stringify(s)}`)}return e}const o=e.filter(u=>r.every(a=>i(u)[a]!==void 0));if(o.length===0){const u=r.filter(a=>i(e[0])[a]===void 0);throw new Wt(n,u)}return o}function _P(n,e,r){if(r.precomputed)return Tp(r.precomputed.stats,r.precomputed.strengthKey);const t=r.mcIters;if(t===void 0)throw new Error("live sample evaluation requires opts.mcIters");if(n.params.length===0)throw new Error(`form ${n.key} has no params to Monte-Carlo over`);const i=Jr(e.mode,e.trials,n.params,r.onIncompleteTrial);if(n.sampleStage!==void 0)return wP(n,n.sampleStage,e,i,t,r.mcItersPerClick);const{matrixContentParts:o,sampleFreshBlock:u}=lu(e,i),a=ho(cu,o,t,r.mcItersPerClick,u),s=su([...a.matrixKeyParts,"form",n.key],()=>au(li(n.params.map(l=>a.matrices.joint.get(l)),n.point))),c=i.some(l=>Yo(l.lloads))?null:aE(n,e,i);return{kind:"mc",mean:s.mean,median:s.median,p5:s.p5,p95:s.p95,samples:s.samples,densityCurve:null,provenance:"live",mcIters:a.totalIters,barrierInnerIters:null,mcPoolToken:a.poolToken,trialCount:i.length,exact:c}}function Tp(n,e){return{kind:"mc",mean:n.mean,median:n.median,p5:n.p5,p95:n.p95,samples:null,densityCurve:n.density_curve??null,provenance:"precomputed",mcIters:n.mc_iters,barrierInnerIters:null,mcPoolToken:null,trialCount:0,exact:e===dn&&n.sigma!=null?{mean:n.mean,sigma:n.sigma}:null}}function uE(n){return{independent:Tp(n.independent,dn),joint:Tp(n.joint,Yr)}}function aE(n,e,r){return uP(r.map(t=>n.params.map(i=>t.specs[i])),n.closedFormMomentsShape,n.params.map(t=>e.ranges[t]))}function C2(n,e,r){if(e.mode!=="sample")throw new Error(`joint-dependence comparison requires sample inputs, got ${e.mode}`);if(r.precomputed)return uE(r.precomputed);const t=r.mcIters;if(t===void 0)throw new Error("live joint-dependence comparison requires opts.mcIters");if(n.params.length===0)throw new Error(`form ${n.key} has no params to Monte-Carlo over`);const i=Jr(e.mode,e.trials,n.params,r.onIncompleteTrial);if(n.sampleStage!==void 0)throw new Error(`joint dependence is not supported for form ${n.key}: correlation across an E[·] aggregation barrier has no defined semantics`);const{matrixContentParts:o,sampleFreshBlock:u}=lu(e,i),a=ho(cu,o,t,r.mcItersPerClick,u),s=(d,p)=>su([...a.matrixKeyParts,...p,"form",n.key],()=>au(li(n.params.map(h=>d.get(h)),n.point))),c=s(a.matrices.joint,[]),l=s(a.matrices.independent,["independent"]),f=(d,p)=>({kind:"mc",mean:d.mean,median:d.median,p5:d.p5,p95:d.p95,samples:d.samples,densityCurve:null,provenance:"live",mcIters:a.totalIters,barrierInnerIters:null,mcPoolToken:a.poolToken,trialCount:i.length,exact:p});return{independent:f(l,aE(n,e,i)),joint:f(c,null)}}function yP(n,e,r){if(e.mode!=="sample")throw new Error(`live sample MC key requires sample inputs, got ${e.mode}`);if(n.sampleStage!==void 0)throw new Error(`live sample MC key is not defined for E[·] barrier form ${n.key}`);const t=Jr(e.mode,e.trials,n.params,r.onIncompleteTrial),{matrixContentParts:i}=lu(e,t);return sE(cu,i,r.mcIters,r.mcItersPerClick)}function lu(n,e){const r=Object.keys(e[0].specs).filter(s=>e.every(c=>c.specs[s]!==void 0)).sort(),t=[r,e.map(s=>r.map(c=>s.specs[c])),r.map(s=>n.ranges[s]??null),e.map(s=>s.lloads)],i=()=>e.map(s=>r.map(c=>fo(s.specs[c],n.ranges[c]))),o=s=>new Map(r.map((c,l)=>[c,s[l]]));return{matrixContentParts:t,sampleFreshBlock:s=>{const c=aP(i(),e.map(d=>d.lloads),r,s),l=o(c.independent),f=c.joint===c.independent?l:o(c.joint);return{independent:l,joint:f}},sampleFreshJointBlock:s=>o(Np(i(),e.map(c=>c.lloads),r,s))}}function EP(n,e,r){if(e.mode!=="sample")throw new Error(`streaming mean evaluation requires sample inputs, got ${e.mode}`);if(n.sampleStage!==void 0)throw new Error(`streaming mean evaluation of ${n.key} is not supported for formulas with E[·] aggregation barriers`);const t=r.mcIters;if(t===void 0)throw new Error("streaming mean evaluation requires opts.mcIters");if(n.params.length===0)throw new Error(`form ${n.key} has no params to Monte-Carlo over`);const i=Jr(e.mode,e.trials,n.params,r.onIncompleteTrial),{matrixContentParts:o,sampleFreshJointBlock:u}=lu(e,i),a=p=>li(n.params.map(h=>u(p).get(h)),n.point),s=r.mcItersPerClick;if(s===void 0){const p=["stream-mean",...o,t,"form",n.key];let h=b8(p);return h===void 0&&(h=g8(p),pp(h,a(t),0)),{mean:h.mean,n:h.n,standardError:_8(h),mcPoolToken:null}}const c=["stream-mean-pool",...o,t,s],l=tE(c),f=[...c,"form",n.key];let d=b8(f);return d===void 0?(d=g8(f),pp(d,a(t+l.extraBlocks*s),l.extraBlocks)):l.extraBlocks>d.blocksFolded?pp(d,a((l.extraBlocks-d.blocksFolded)*s),l.extraBlocks):l.extraBlocks<d.blocksFolded&&(d.blocksFolded=l.extraBlocks),{mean:d.mean,n:d.n,standardError:_8(d),mcPoolToken:l.token}}function sE(n,e,r,t){return[`${n}-pool`,...e,r,t]}function ho(n,e,r,t,i){if(t===void 0){const a=[n,...e,r];return{matrixKeyParts:a,poolToken:null,extraBlocks:0,totalIters:r,matrices:LP(a,()=>i(r))}}const o=sE(n,e,r,t),u=tE(o);return{matrixKeyParts:[...o,"blocks",u.extraBlocks],poolToken:u.token,extraBlocks:u.extraBlocks,totalIters:r+u.extraBlocks*t,matrices:kP(o,u.extraBlocks,r,t,i)}}function wP(n,e,r,t,i,o){if(t.some(E=>{var A;return(((A=E.lloads)==null?void 0:A.latents.length)??0)>0}))throw new Error(`joint dependence is not supported for form ${n.key}: correlation across an E[·] aggregation barrier has no defined semantics`);const u=n.barrierRegistry;if(u===void 0)throw new Error(`form ${n.key} contains an E[·] barrier but no barrier registry was provided — evaluating it without one would silently compute per-draw (pre-E) semantics`);if(n.closedFormMomentsShape!==void 0)throw new Error(`form ${n.key} contains an E[·] barrier yet carries closed-form-moments shape "${n.closedFormMomentsShape}" — codegen must suppress the tag for barrier forms, since the exact-moments path would override the barrier-aware mean`);const a=e.params.filter(E=>E.barrier);for(const E of a)if(u[E.name]===void 0)throw new Error(`form ${n.key}: barrier ${E.name} is not in the barrier registry`);const s=[...new Set(Object.values(u).flatMap(E=>E.params))].sort(),c=[],l=[],f=[],d=[];for(const E of t){const A=s.filter(I=>E.specs[I]!==void 0),L=[A,A.map(I=>E.specs[I]),A.map(I=>r.ranges[I]??null)],C=ho("barrier-inner-matrix",L,i,o,I=>{const S=A.map($=>fo(E.specs[$],r.ranges[$])),w=Np([S],[null],A,I);return y8(new Map(A.map(($,k)=>[$,w[k]])))});C.poolToken!==null&&c.push(C.poolToken),l.push(C.extraBlocks),f.push(C.totalIters),d.push(a.map(I=>$P(C.matrixKeyParts,C.matrices.joint,I.name,u[I.name])))}const p=Object.keys(t[0].specs).filter(E=>t.every(A=>A.specs[E]!==void 0)).sort(),h=a.map(E=>E.name),m=[p,t.map(E=>p.map(A=>E.specs[A])),p.map(E=>r.ranges[E]??null),"barriers",h,i,o??null,l,d],b=ho(cu,m,i,o,E=>{const A=[...p,...h],L=t.map((S,w)=>[...p.map($=>fo(S.specs[$],r.ranges[$])),...d[w].map($=>Zy({pairs:[[$,1],[$,1]]}))]),C=Np(L,t.map(()=>null),A,E),I=new Map(A.map((S,w)=>[S,C[w]]));if(I.size!==A.length)throw new Error(`barrier key collides with a svar column name (${JSON.stringify(A)})`);return y8(I)}),g=e.params.map(E=>{const A=b.matrices.joint.get(E.name);if(A===void 0)throw new Error(`form ${n.key}: no sampled column for sample-stage param ${E.name}`);return A}),_=su([...b.matrixKeyParts,"form",n.key],()=>au(li(g,e.point))),y=b.poolToken===null?null:iE([b.poolToken,...c]);return{kind:"mc",mean:_.mean,median:_.median,p5:_.p5,p95:_.p95,samples:_.samples,densityCurve:null,provenance:"live",mcIters:b.totalIters,barrierInnerIters:Math.min(...f),mcPoolToken:y,trialCount:t.length,exact:null}}function $P(n,e,r,t){return su([...n,"barrier",r],()=>{const o=t.params.map(f=>{const d=e.get(f);if(d===void 0)throw new Error(`barrier ${r}: trial has no inner sample column for leaf ${f}`);return d}),u=li(o,t.point);for(const f of u)if(!Number.isFinite(f))throw new Error(`barrier ${r}: non-finite operand draw (${f})`);const a=au(u);if(!Number.isFinite(a.mean))throw new Error(`barrier ${r}: non-finite mean (${a.mean})`);const s=u.length;let c=0;for(const f of u)c+=(f-a.mean)**2;const l=Math.sqrt(c/s/s)/Math.abs(a.mean);return console.debug(`[E-barrier] ${r}: n=${s} mean=${a.mean} relSE=${l}`),a}).mean}const SP=8,AP=6e6,On=new Map;let Di=0;function y8(n){return{independent:n,joint:n}}function E8(n){let e=0;const r=new Set;for(const t of[n.independent,n.joint])for(const i of t.values())r.has(i)||(r.add(i),e+=i.length);return e}function qp(n){const e=On.get(n);return e!==void 0&&(On.delete(n),On.set(n,e)),e}function Fp(n,e){for(On.set(n,e),Di+=E8(e);(On.size>SP||Di>AP)&&On.size>1;){const r=On.keys().next().value;Di-=E8(On.get(r)),On.delete(r)}return e}function LP(n,e){const r=_r(n);return qp(r)??Fp(r,e())}function w8(n,e){const r=new Map;for(const[t,i]of n){const o=e.get(t);if(o===void 0)throw new Error(`concatSampleMatrices: fresh block lacks column for svar ${t}`);const u=new Float64Array(i.length+o.length);u.set(i,0),u.set(o,i.length),r.set(t,u)}return r}function IP(n,e){const r=w8(n.independent,e.independent),t=n.independent===n.joint&&e.independent===e.joint?r:w8(n.joint,e.joint);return{independent:r,joint:t}}function kP(n,e,r,t,i){const o=c=>_r([...n,"blocks",c]),u=qp(o(e));if(u!==void 0)return u;let a=e-1,s;for(;a>=0&&(s=qp(o(a)))===void 0;)a--;s===void 0&&(s=Fp(o(0),i(r)),a=0);for(let c=a+1;c<=e;c++)s=Fp(o(c),IP(s,i(t)));return s}function RP(){On.clear(),Di=0}const CP=5,MP=5,NP=[0,.25,.5,.75,1];function Ar(n){return n==="probability"?[0,1]:null}function fu(n,e){const r=CP/100*(e-n);return[n-r,e+r]}function M2(n,e,r){return n??fu(e,r)}function TP(n){return Math.max(0,-Math.floor(Math.log10(n)))}function qP(n){const e=10**Math.floor(Math.log10(n)),r=n/e;return(r<=1?1:r<=2?2:r<=5?5:10)*e}function vo(n,e){if(n===0&&e===1)return NP.map(u=>({value:u,label:u.toFixed(2)}));if(e<=n)return[{value:n,label:n.toFixed(2)}];const r=qP((e-n)/MP),t=TP(r),i=[],o=r*1e-9;for(let u=Math.ceil(n/r)*r;u<=e+o;u+=r){const a=Math.abs(u)<o?0:u;i.push({value:a,label:a.toFixed(t)})}return i}const $8={ui:"sans-serif",mono:"monospace"},FP={ui:"--font-ui",mono:"--font-mono"},S8=new Map;function cE(n){const e=S8.get(n);if(e!==void 0)return e;if(typeof getComputedStyle>"u"||typeof document>"u")return $8[n];const r=getComputedStyle(document.documentElement).getPropertyValue(FP[n]).trim();return r?(S8.set(n,r),r):$8[n]}function lE(n){return`${n}px ${cE("ui")}`}function Gr(n){return`${n}px ${cE("mono")}`}const A8=4,OP=.25,PP=2.5066282746310002;function fE(n,e,r,t){const i=n.length;let o=0,u=0;for(let p=0;p<i;p++)o+=n[p],u+=n[p]*n[p];const a=o/i,s=Math.max(0,u/i-a*a),c=Math.sqrt(s),l=OP*c*i**-.2;if(l<=0)return null;const f=new Float64Array(e);let d=0;for(let p=0;p<e;p++){const h=r+(t-r)*p/(e-1);let m=0;for(let v=0;v<i;v++){const b=(h-n[v])/l;if(!(b>A8)){if(b<-A8)break;m+=Math.exp(-.5*b*b)}}f[p]=m/(i*l*PP),f[p]>d&&(d=f[p])}return{density:f,maxD:d}}const ke={top:4,bottom:18,left:4,right:4},DP=12,N2="#333",du=1.5,xP="#777",dE="#2166ac",BP="rgba(110, 110, 110, 0.12)",pE="rgba(33, 102, 172, 0.12)",mo=N2,hE="rgba(51, 51, 51, 0.10)",bo=dE,vE=pE;function zr(n,e,r,t,i){const o=n.width,u=n.height,a=n.getContext("2d");if(!a)return;a.clearRect(0,0,o,u);const s=o-ke.left-ke.right,c=u-ke.top-ke.bottom,l=ke.top+c;let f,d;if(e instanceof Float64Array){if(e.length===0)return;[f,d]=M2(i,e[0],e[e.length-1])}else f=e.start,d=e.end;if(d<=f){I8(a,ke.left+s/2,c),Ct(a,[{value:f,label:f.toFixed(2)}],()=>ke.left+s/2,l);return}const p=b=>ke.left+(b-f)/(d-f)*s;let h,m;const v=Math.round(s);if(e instanceof Float64Array){if(e[e.length-1]-e[0]<(d-f)/s){I8(a,p((e[0]+e[e.length-1])/2),c),Ct(a,vo(f,d),p,l);return}const g=fE(e,v,f,d);if(!g)return;h=g.density,m=g.maxD}else{h=new Float64Array(v),m=1;const b=e.heights.length;for(let g=0;g<v;g++){const y=(f+(d-f)*g/(v-1)-e.start)/(e.end-e.start)*(b-1),E=Math.floor(y),A=Math.min(E+1,b-1),L=y-E;h[g]=e.heights[E]*(1-L)+e.heights[A]*L}}if(!(m<=0)){a.fillStyle="#e8e8e8",a.fillRect(p(r),ke.top,p(t)-p(r),c),a.beginPath();for(let b=0;b<v;b++){const g=ke.left+b/(v-1)*s,_=ke.top+c-h[b]/m*c;b===0?a.moveTo(g,_):a.lineTo(g,_)}a.strokeStyle=N2,a.lineWidth=du,a.stroke(),Ct(a,vo(f,d),p,l)}}function go(n,e,r){const t=n.width,i=n.height,o=n.getContext("2d");if(!o||(o.clearRect(0,0,t,i),e.length===0))return;const u=t-ke.left-ke.right,a=i-ke.top-ke.bottom,s=ke.top+a,c=e.map(v=>T2(v.source,r)),l=(r==null?void 0:r[0])??Math.min(...c.map(v=>v[0])),f=(r==null?void 0:r[1])??Math.max(...c.map(v=>v[1])),d=v=>ke.left+(v-l)/(f-l)*u;if(f<=l){for(const v of e)mE(o,ke.left+u/2,a,v.color);Ct(o,[{value:l,label:l.toFixed(2)}],()=>ke.left+u/2,s);return}const p=Math.round(u),h=e.map(v=>HP(v.source,p,l,f));let m=0;for(const v of h)if(v.density!==null)for(const b of v.density)m=Math.max(m,b);for(const v of e)v.bandFill!==null&&(o.fillStyle=v.bandFill,o.fillRect(d(v.p5),ke.top,d(v.p95)-d(v.p5),a));e.forEach((v,b)=>{UP(o,h[b],p,u,a,m,v.color,v.dashed,d)}),Ct(o,vo(l,f),d,s)}function T2(n,e){if(!(n instanceof Float64Array))return[n.start,n.end];if(n.length===0)throw new Error("density overlay source has no samples");return M2(e,n[0],n[n.length-1])}function HP(n,e,r,t){if(n instanceof Float64Array){if(n.length===0)throw new Error("density overlay source has no samples");if(n[n.length-1]-n[0]<(t-r)/e)return{density:null,pointMassX:(n[0]+n[n.length-1])/2};const a=fE(n,e,r,t);return a===null?{density:null,pointMassX:(n[0]+n[n.length-1])/2}:(L8(a.density,r,t),{density:a.density,pointMassX:null})}const i=new Float64Array(e),o=n.heights.length;for(let u=0;u<e;u++){const a=r+(t-r)*u/(e-1);if(a<n.start||a>n.end||n.end<=n.start||o===0){i[u]=0;continue}const s=(a-n.start)/(n.end-n.start)*(o-1),c=Math.floor(s),l=Math.min(c+1,o-1),f=s-c;i[u]=n.heights[c]*(1-f)+n.heights[l]*f}return L8(i,r,t),{density:i,pointMassX:null}}function L8(n,e,r){const t=(r-e)/Math.max(1,n.length-1);let i=0;for(const o of n)i+=o*t;if(!(i<=0))for(let o=0;o<n.length;o++)n[o]=n[o]/i}function UP(n,e,r,t,i,o,u,a,s){if(e.pointMassX!==null){mE(n,s(e.pointMassX),i,u);return}if(!(e.density===null||o<=0)){n.beginPath();for(let c=0;c<r;c++){const l=ke.left+c/(r-1)*t,f=ke.top+i-e.density[c]/o*i;c===0?n.moveTo(l,f):n.lineTo(l,f)}n.strokeStyle=u,n.lineWidth=du,n.setLineDash(a?[5,4]:[]),n.stroke(),n.setLineDash([])}}function I8(n,e,r){n.beginPath(),n.moveTo(e,ke.top+r),n.lineTo(e,ke.top),n.strokeStyle=N2,n.lineWidth=du,n.stroke()}function mE(n,e,r,t){n.beginPath(),n.moveTo(e,ke.top+r),n.lineTo(e,ke.top),n.strokeStyle=t,n.lineWidth=du,n.stroke()}function Ct(n,e,r,t){n.strokeStyle="#bbb",n.lineWidth=.5,n.fillStyle="#4d4d4d",n.font=lE(DP),n.textAlign="center";for(const i of e){const o=r(i.value);n.beginPath(),n.moveTo(o,t),n.lineTo(o,t+3),n.stroke(),n.fillText(i.label,o,t+12)}}const jP=.5,WP=.05,GP=.95,VP=1e-12,XP=200;function di(n){return!(n instanceof L2)}function q2(n){const{xs:e}=n,r=e[0];return e[e.length-1]-r<ci?r:null}function bE(n,e){let r=0,t=n.length-1;for(;r<t-1;){const i=r+t>>1;n[i]<=e?r=i:t=i}return r}function YP(n,e){const{xs:r,fs:t,Fs:i}=n,o=r.length-1;if(e<r[0])return 0;if(e>=r[o])return 1;const u=bE(r,e),a=r[u+1]-r[u];if(a<ci)return i[u];const s=e-r[u],c=(t[u+1]-t[u])/a;return i[u]+t[u]*s+c*s*s/2}function KP(n,e){if(q2(n)!==null)return 0;const{xs:r,fs:t}=n,i=r.length-1;if(e<r[0]||e>r[i])return 0;if(e===r[i])return t[i];const o=bE(r,e),u=r[o+1]-r[o];return u<ci?t[o]:t[o]+(t[o+1]-t[o])*(e-r[o])/u}function JP(n){const e=q2(n);if(e!==null)return e;const{xs:r,fs:t}=n;let i=0;for(let o=0;o<r.length-1;o++){const u=r[o+1]-r[o];if(u<=0)continue;const a=(t[o+1]-t[o])/u;i+=r[o]*t[o]*u+(r[o]*a+t[o])*u*u/2+a*u**3/3}return i}function zP(n,e){return di(n)?YP(n,e):n.cdf(e)}function QP(n,e){return di(n)?KP(n,e):n.pdf(e)}function k8(n,e){return Wr(e,n)}function ZP(n){return di(n)?JP(n):n.mean()}function eD(n){return di(n)?q2(n):null}function nD(n){return di(n)?Array.from(n.xs):[]}function ht(n,e){if(n.length===0)throw new Error(`${e}: need at least one distribution`)}function rD(n,e){ht(n,"mixtureCdf");let r=0;for(const t of n)r+=zP(t,e);return r/n.length}function tD(n,e){ht(n,"mixturePdf");let r=0;for(const t of n)r+=QP(t,e);return r/n.length}function gE(n){ht(n,"mixtureMean");let e=0;for(const r of n){const t=ZP(r);if(t===null)return null;e+=t}return e/n.length}function Mt(n,e){if(ht(n,"mixtureQuantile"),!(e>0&&e<1))throw new Error(`mixtureQuantile: quantile level ${e} is not in (0, 1)`);if(n.length===1)return k8(n[0],e);const r=n.map(o=>k8(o,e));let t=Math.min(...r),i=Math.max(...r);for(let o=0;o<XP&&!(i-t<=VP*Math.max(Math.abs(t),Math.abs(i)));o++){const u=t+(i-t)/2;rD(n,u)>=e?i=u:t=u}return i}function _E(n){ht(n,"mixtureAtoms");const e=new Map;for(const r of n){const t=eD(r);t!==null&&e.set(t,(e.get(t)??0)+1)}return[...e.entries()].sort(([r],[t])=>r-t).map(([r,t])=>({x:r,count:t,mass:t/n.length}))}function iD(n){return ht(n,"mixtureStats"),{mean:gE(n),median:Mt(n,jP),p5:Mt(n,WP),p95:Mt(n,GP)}}function oD(n,e){if(n.length!==e.length)throw new Error(`pwlToShape: xs length ${n.length} !== ys length ${e.length}`);return{points:n.map((r,t)=>({x:r,y:e[t]}))}}const _o=.001,yo=101,uD=.04;function aD(n){const e=n.inverseCdf(_o),r=n.inverseCdf(1-_o);if(!(r>e))return{points:[{x:e,y:1}]};const t=[],i=[];for(let u=0;u<yo;u++){const a=e+u/(yo-1)*(r-e);t.push(a),i.push(n.pdf(a))}const o=Math.max(...i);if(o<=0)throw new Error("familyToShape: zero density over the display window");return{points:t.map((u,a)=>({x:u,y:i[a]/o}))}}function sD(n){const e=_E(n),r=e.map(d=>d.x),t=Math.min(Mt(n,_o),...r),i=Math.max(Mt(n,1-_o),...r);if(!(i>t))return{points:[{x:t,y:1}]};const o=[];for(let d=0;d<yo;d++)o.push(t+d/(yo-1)*(i-t));for(const d of n)for(const p of nD(d))p>t&&p<i&&o.push(p);const u=new Set(r),a=[...new Set(o)].filter(d=>!u.has(d)).sort((d,p)=>d-p),s=a.map(d=>tD(n,d)),c=Math.max(0,...s),l=c>0?1:Math.max(...e.map(d=>d.mass));return{points:[...a.map((d,p)=>({x:d,points:[{x:d,y:c>0?s[p]/c:0}]})),...e.map(d=>{const p=Math.max(d.mass/l,uD);return{x:d.x,points:[{x:d.x,y:0},{x:d.x,y:p},{x:d.x,y:0}]}})].sort((d,p)=>d.x-p.x).flatMap(d=>d.points)}}function yE(n,e){const r=n.points;return M2(e?Ar(e):null,r[0].x,r[r.length-1].x)}const qn={top:4,bottom:18,left:4,right:4},cD=10,lD="rgba(100, 149, 237, 0.25)",R8="#4477bb",C8=1.5,fD="#e8e8e8";function Gt(n,e,r,t){const i=n.width,o=n.height,u=n.getContext("2d");if(!u)return;u.clearRect(0,0,i,o);const{points:a}=e;if(a.length===0)return;const s=i-qn.left-qn.right,c=o-qn.top-qn.bottom,l=qn.top+c,[f,d]=r;if(d<=f){const g=qn.left+s/2;Math.max(...a.map(_=>_.y))>0&&(u.beginPath(),u.moveTo(g,l),u.lineTo(g,qn.top),u.strokeStyle=R8,u.lineWidth=C8,u.stroke()),M8(u,[{value:f,label:f.toFixed(2)}],()=>g,l);return}const p=g=>qn.left+(g-f)/(d-f)*s,h=Math.max(...a.map(g=>g.y));if(h<=0)return;const m=g=>qn.top+c-g/h*c;if(t){const[g,_]=t;u.fillStyle=fD,u.fillRect(p(g),qn.top,p(_)-p(g),c)}u.beginPath(),u.moveTo(p(a[0].x),l);for(const g of a)u.lineTo(p(g.x),m(g.y));u.lineTo(p(a[a.length-1].x),l),u.closePath(),u.fillStyle=lD,u.fill(),u.beginPath();const v=a[0],b=a[a.length-1];v.y>0?(u.moveTo(p(v.x),l),u.lineTo(p(v.x),m(v.y))):u.moveTo(p(v.x),m(v.y));for(let g=1;g<a.length;g++)u.lineTo(p(a[g].x),m(a[g].y));b.y>0&&u.lineTo(p(b.x),l),u.strokeStyle=R8,u.lineWidth=C8,u.stroke(),M8(u,vo(f,d),p,l)}function M8(n,e,r,t){n.strokeStyle="#bbb",n.lineWidth=.5,n.fillStyle="#4d4d4d",n.font=lE(cD),n.textAlign="center";for(const i of e){const o=r(i.value);n.beginPath(),n.moveTo(o,t),n.lineTo(o,t+3),n.stroke(),n.fillText(i.label,o,t+12)}}const EE="density-log-badge",dD="density-log-badge-left",pD="density-log-badge-right",hD="log",vD="Hover (or focus) to redraw as the density of ln(value); tick labels in that view are ln(value). Leave to restore.",F2=new Set(["probability","oddsratio","posreal"]),mD=.25,hp=256;function wE(n){const e=new Float64Array(n.length);for(let r=0;r<n.length;r++)e[r]=Math.log(n[r]);return e}function $E(n){return n.length>0&&n[0]>0}function bD(n,e){const r=n.heights.length;if(r===0||n.end<=n.start||e<n.start||e>n.end)return 0;const t=(e-n.start)/(n.end-n.start)*(r-1),i=Math.floor(t),o=Math.min(i+1,r-1),u=t-i;return n.heights[i]*(1-u)+n.heights[o]*u}function SE(n){const e=n.heights.length;if(e<2||n.end<=0||n.end<=n.start)return null;let r=n.start;if(r<=0){const a=(n.end-n.start)/(e-1);if(r=n.start+Math.ceil(-n.start/a+1e-12)*a,r<=0||r>=n.end)return null}const t=Math.log(r),i=Math.log(n.end),o=new Array(e);let u=0;for(let a=0;a<e;a++){const s=t+(i-t)*a/(e-1),c=Math.exp(s),l=bD(n,c)*c;o[a]=l,l>u&&(u=l)}if(u<=0)return null;for(let a=0;a<e;a++)o[a]=o[a]/u;return{start:t,end:i,sep:(i-t)/(e-1),heights:o}}function gD(n){const e=n.points.filter(r=>r.x>0).map(r=>({x:Math.log(r.x),y:r.y*r.x}));return e.length===0||Math.max(...e.map(r=>r.y))<=0?null:{points:e}}function Qr(n,e){return n>0?Math.log(n):e}function O2(n,e){return e<n?"right":"left"}function P2(n,e,r){const t=(r-e)*mD,i=e+t,o=r-t;if(n instanceof Float64Array){let l=0,f=0;for(const d of n)d<=i?l++:d>=o&&f++;return{left:l/n.length,right:f/n.length}}const u=n.heights.length;let a=0,s=0,c=0;for(let l=0;l<u;l++){const f=n.start+(n.end-n.start)*(u===1?0:l/(u-1)),d=n.heights[l];c+=d,f<=i?a+=d:f>=o&&(s+=d)}return c<=0?{left:0,right:0}:{left:a/c,right:s/c}}function _D(n,e,r){const t=n.points,i=new Array(hp);let o=0;for(let u=0;u<hp;u++){const a=e+(r-e)*u/(hp-1);for(;o<t.length-1&&t[o+1].x<a;)o++;const s=t[o],c=t[Math.min(o+1,t.length-1)];if(a<s.x||a>c.x){i[u]=0;continue}i[u]=c.x===s.x?s.y:s.y+(c.y-s.y)*(a-s.x)/(c.x-s.x)}return P2({start:e,end:r,sep:0,heights:i},e,r)}function yD(n){var e;(e=n.querySelector(`.${EE}`))==null||e.remove()}function D2(n){const e=n.parentElement;return e!=null&&e.classList.contains("resizable-canvas-wrapper")?(yD(e),e):(console.warn("density_log_hover: canvas is not wrapped by makeResizable"),null)}function x2(n,e,r,t){const i=document.createElement("span");i.className=`${EE} `+(e==="left"?dD:pD),i.textContent=hD,i.title=vD,i.tabIndex=0,i.addEventListener("pointerenter",r),i.addEventListener("pointerleave",t),i.addEventListener("focus",r),i.addEventListener("blur",t),n.appendChild(i)}function AE(n,e,r,t,i){const o=D2(n);if(o===null||!F2.has(i))return;const u=Ar(i),a=()=>zr(n,e,r,t,u);let s,c;if(e instanceof Float64Array){if(!$E(e))return;s=wE(e),c=fu(s[0],s[s.length-1])[0]}else{const h=SE(e);if(h===null)return;s=h,c=h.start}const l=()=>zr(n,s,Qr(r,c),Qr(t,c),null),[f,d]=T2(e,u),p=P2(e,f,d);x2(o,O2(p.left,p.right),l,a)}function LE(n,e,r){const t=D2(n);if(t===null||!F2.has(r)||e.length===0)return;const i=Ar(r),o=()=>go(n,e,i),u=[];for(const p of e){let h,m;if(p.source instanceof Float64Array){if(!$E(p.source))return;h=wE(p.source),m=fu(h[0],h[h.length-1])[0]}else{const v=SE(p.source);if(v===null)return;h=v,m=v.start}u.push({...p,source:h,p5:Qr(p.p5,m),p95:Qr(p.p95,m)})}const a=()=>go(n,u,null),s=e.map(p=>T2(p.source,i)),c=(i==null?void 0:i[0])??Math.min(...s.map(p=>p[0])),l=(i==null?void 0:i[1])??Math.max(...s.map(p=>p[1]));let f=0,d=0;for(const p of e){const h=P2(p.source,c,l);f+=h.left/e.length,d+=h.right/e.length}x2(t,O2(f,d),a,o)}function IE(n,e,r,t,i){const o=D2(n);if(o===null||t===void 0||!F2.has(t))return;const u=gD(e);if(u===null)return;const a=u.points[0],s=u.points[u.points.length-1],c=s.x>a.x?fu(a.x,s.x):[a.x,s.x],l=i?[Qr(i[0],c[0]),Qr(i[1],c[0])]:null,f=()=>Gt(n,e,r,i),d=()=>Gt(n,u,c,l),p=_D(e,r[0],r[1]);x2(o,O2(p.left,p.right),d,f)}function B2(n){return n.some(e=>Yo(e.lloads))}function kE(n){return new Error(`A record with stated joint dependence must carry both its independence precompute (${dn}) and joint precompute (${Yr}), or neither for ${n}`)}function RE(n,e){if(n===void 0)return;const r=n[dn],t=n[Yr];if(!e)return r===void 0?void 0:{stats:r,strengthKey:dn};if(!(r===void 0&&t===void 0)){if(r===void 0||t===void 0)throw kE("live evaluation");return{stats:t,strengthKey:Yr}}}function CE(n){const e=n[dn],r=n[Yr];if(e===void 0&&r===void 0)return null;if(e===void 0||r===void 0)throw kE("live comparison");return{independent:e,joint:r}}function ED(n,e,r,t){var o;const i=e===r?n.precomputed:(o=n.precomputed_aux_forms)==null?void 0:o[e];return RE(i,t)}const pu=["plainnum","plaincode","richcode"];function ME(n){return n==="all"||pu.includes(n)}function H2(n){return pu.filter(e=>n.some(r=>r.availableModes.includes(e)))}function hu(n,e){return n==="all"?"all":H2(e).includes(n)?n:"all"}function vu(n,e){return n.availableModes.includes(e)}function wD(n,e,r){const t=hu(e,r);return t==="all"?Eo(n,n.availableModes[0]):vu(n,t)?Eo(n,t):null}function NE(n,e){const r=hu(e,n);for(const t of n){const i=r==="all"?Eo(t,t.availableModes[0]):vu(t,r)?Eo(t,r):null;if(i)return i}return null}function Eo(n,e){return e==="plainnum"&&n.plainnumIndex!==null?`metho-plainnum:${n.plainnumIndex}`:e==="plaincode"&&n.plaincodeIndex!==null?`metho-plaincode:${n.plaincodeIndex}`:e==="richcode"&&n.richcodeIndex!==null?`metho-richcode:${n.richcodeIndex}`:null}function U2(n,e){const{source:r,index:t}=ve(n);if(Ze(r)!=="metho")return null;const i=yn(r);for(let o=0;o<e.length;o++){const u=e[o];if(i==="plainnum"&&u.plainnumIndex===t)return{group:u,groupIndex:o,mode:"plainnum"};if(i==="plaincode"&&u.plaincodeIndex===t)return{group:u,groupIndex:o,mode:"plaincode"};if(i==="richcode"&&u.richcodeIndex===t)return{group:u,groupIndex:o,mode:"richcode"}}return null}function TE(n,e){return e==="plainnum"&&n.plainnumIndex!==null?`metho-plainnum:${n.plainnumIndex}`:e==="plaincode"&&n.plaincodeIndex!==null?`metho-plaincode:${n.plaincodeIndex}`:e==="richcode"&&n.richcodeIndex!==null?`metho-richcode:${n.richcodeIndex}`:null}function $D(n,e,r,t,i){const o=t.ui.whose,{source:u}=ve(o),a=Ze(u)==="metho",s=X7(u);let c='<div class="whose-toggle">';const l=Pe(o)?o:t.ui.lastYoursWhose;if(c+=`<button class="whose-btn${Pe(o)?" active":""}" data-whose="${l}">Yours</button>`,Pe(o)&&e.has_cparams()){const p=o==="yours-plaincode";c+='<div class="mode-radio yours-fixfree-radio">',c+=`<button class="mode-radio-btn${p?"":" active"}" data-whose="yours-plainnum">fix</button>`,c+=`<button class="mode-radio-btn${p?" active":""}" data-whose="yours-plaincode">free</button>`,c+="</div>"}if(r.adhocPlainnumEntries.length>0||r.adhocPlaincodeEntries.length>0){c+=`<select id="adhoc-result-select" class="whose-select${s?" whose-select-active":""}${a?" whose-select-faded":""}" data-whose-source="adhoc">`,c+=`<option value="" disabled${s?"":" selected"}>Adhoc…</option>`;for(const m of G7){const v=V7(r,m);for(let b=0;b<v.length;b++){const g=v[b],_=r.adhocPresets[g.presetIndex],y=Fk(_,m,g);if(!y)continue;const E=Dk(_,m,y),A=`adhoc-${m}:${b}`;c+=`<option value="${A}"${o===A?" selected":""}>${K(E)}</option>`}}c+="</select>"}if(i.length>0){const p=a?U2(o,i):null,h=s?" whose-select-faded":"",m=a?" whose-select-active":"",v=Gk(i),b=H2(i),g=hu(t.ui.presetQueryModeFilter,i),_=b.length>=2,y=i.map((E,A)=>({group:E,groupIndex:A})).filter(({group:E})=>g==="all"||vu(E,g));if(c+='<div class="methodical-select-stack">',_){c+='<select id="preset-query-mode-filter" class="preset-query-mode-filter">',c+=`<option value="all"${g==="all"?" selected":""}>all</option>`;for(const E of pu){if(!b.includes(E))continue;c+=`<option value="${E}"${g===E?" selected":""}>${E}</option>`}c+="</select>"}c+=`<select id="methodical-result-select" class="whose-select${m}${h}" data-whose-source="ai-results">`,c+=`<option value="" disabled${a?"":" selected"}>AI results…</option>`;for(const{groupIndex:E}of y){const A=v[E],L=p&&p.groupIndex===E?" selected":"";c+=`<option value="group:${E}"${L}>${K(A)}</option>`}if(c+="</select>",c+="</div>",p&&p.group.availableModes.length>=1){c+='<div id="query-mode-radio" class="mode-radio">';for(const E of p.group.availableModes){const A=p.mode===E;c+=`<button class="mode-radio-btn${A?" active":""}" data-mode="${E}">${E}</button>`}c+="</div>"}}c+="</div>";const d=D9(e.get_aopt_bare_names());if(a&&d!==null){const p=en(o,r);if(!p)throw new Error(`No active methodical result for whose selection ${JSON.stringify(o)}`);const h=x9(p.aopts[d],`Methodical result ${d}`);c+=`<div class="methodical-framing-flabels">Framing: ${K(h.join(" "))}</div>`}n.innerHTML=c}function SD(n,e,r,t){var p;const i=t.ui.whose;if(Pe(i))return n.innerHTML="",!1;const o=en(i,r);if(!o)return n.innerHTML='<div style="color: #888; font-size: 13px;">No data.</div>',!1;const u=t.ui.inputMode,a=e.svar_entries().map(h=>h.bareName),s=a.length,c=Jk(i,o,u,a),l=c.length;if(l===0)return n.innerHTML='<div style="color: #888; font-size: 13px;">No data for this mode.</div>',!1;const f=l>1;let d='<div class="sample-grid">';for(let h=0;h<l;h++){d+='<div class="sample-col">',f&&(d+=`<div class="sample-col-header">Sample ${h+1}</div>`);for(let m=0;m<s;m++){const v=((p=c[h])==null?void 0:p[m])??"";d+=`<div class="sample-cell">${K(v)}</div>`}d+="</div>"}return d+="</div>",n.innerHTML=d,f}function AD(n){const e=n.precomputed[dn];return e===void 0?null:{stats:e,strengthKey:dn}}function N8(n,e,r){if(Pe(n))return!0;const t=en(n,e);return t?K7(n,t)[r]:!1}function LD(n){const e=n.config.conclusion_expr;return n.get_display_expr(e)??e}function pi(n,e){return Ae(LD(n),e)}function qE(n,e){return`<div class="density-overlay-plot"><div class="density-overlay-legend" aria-label="Density curve legend">${e.map(t=>`<span style="--density-legend-color: ${se(t.color)}; --density-legend-style: ${t.dashed?"dashed":"solid"}">${K(t.label)}</span>`).join("")}</div><canvas id="${se(n)}" width="400" height="200"></canvas></div>`}const xr={top:10,bottom:35,left:50,right:15},ID=800,kD=500,T8=12,RD=5,CD=3,MD=2,q8=3,F8=5,ND=10,TD=1,qD=15,O8=["#333","#c44","#44c","#4c4","#c84","#84c","#4cc","#c4c","#888","#ca4"],FE="#333",OE=2,FD=1.5,OD={color:FE,lineWidth:OE};function PD(n,e,r=ND,t=[]){if(e)return e;let i=1/0,o=-1/0;const u=l=>{l<i&&(i=l),l>o&&(o=l)};for(const l of n)for(const f of l.points)u(f.y);for(const l of t)u(l.y);if(!Number.isFinite(i)||!Number.isFinite(o))return null;const c=(o-i||TD)*r/100;return[i-c,o+c]}function wo(n,e,r){n.width||(n.width=ID),n.height||(n.height=kD);const t=n.width,i=n.height,o=n.getContext("2d");if(!o)return;o.clearRect(0,0,t,i);const u=r.scatterOverlay;if(e.length===0&&!u)return;const a=i-xr.top-xr.bottom,s=PD(e,r.yRange,r.yRangePaddingPercent,u==null?void 0:u.points);if(!s)return;const[c,l]=s,f=DD(c,l,RD),d=f.length>1?f[1]-f[0]:l-c,p=f.map(S=>xD(S,d));o.font=Gr(T8);const h=p.reduce((S,w)=>Math.max(S,o.measureText(w).width),0),m=Math.max(xr.left,Math.ceil(h)+q8+F8),v=t-m-xr.right;if(v<=0)return;const b=r.xLabels.length,g=b>1?v/(b-1):0,_=S=>m+S*g,y=S=>xr.top+a-(S-c)/(l-c)*a;o.save(),o.strokeStyle="#ddd",o.lineWidth=.5,o.setLineDash([3,3]);for(const S of f){const w=y(S);o.beginPath(),o.moveTo(m,w),o.lineTo(m+v,w),o.stroke()}if(o.restore(),u){o.fillStyle=u.color;for(const S of u.points)o.beginPath(),o.arc(_(S.x),y(S.y),MD,0,Math.PI*2),o.fill()}const E=e.length===1;for(let S=0;S<e.length;S++){const w=e[S],$=w.color??(E?FE:O8[S%O8.length]),k=w.lineWidth??(E?OE:FD);o.beginPath();for(let R=0;R<w.points.length;R++){const F=w.points[R],T=_(F.x),U=y(F.y);R===0?o.moveTo(T,U):o.lineTo(T,U)}o.strokeStyle=$,o.lineWidth=k,o.stroke(),o.fillStyle=$;for(const R of w.points)o.beginPath(),o.arc(_(R.x),y(R.y),CD,0,Math.PI*2),o.fill()}const A=xr.top+a;o.strokeStyle="#bbb",o.lineWidth=.5,o.fillStyle="#4d4d4d",o.font=Gr(T8),o.textAlign="center",o.textBaseline="top";const L=r.xLabels.reduce((S,w)=>Math.max(S,o.measureText(w).width),0),C=b>1?g:v,I=L>C-4;for(let S=0;S<b;S++){const w=_(S);o.beginPath(),o.moveTo(w,A),o.lineTo(w,A+3),o.stroke(),o.save(),I?(o.translate(w,A+5),o.rotate(-Math.PI/4),o.textAlign="right",o.fillText(r.xLabels[S],0,0)):o.fillText(r.xLabels[S],w,A+5),o.restore()}o.fillStyle="#777",o.textAlign="center",o.textBaseline="bottom",o.fillText(r.xAxisLabel,m+v/2,i-1),o.fillStyle="#4d4d4d",o.textAlign="right",o.textBaseline="middle";for(let S=0;S<f.length;S++){const w=f[S],$=y(w);o.strokeStyle="#bbb",o.lineWidth=.5,o.beginPath(),o.moveTo(m-q8,$),o.lineTo(m,$),o.stroke(),o.fillText(p[S],m-F8,$)}}function DD(n,e,r){const t=e-n;if(t<=0)return[n];const i=t/(r-1),o=Math.pow(10,Math.floor(Math.log10(i))),u=i/o;let a;u<=1.5?a=1*o:u<=3.5?a=2*o:u<=7.5?a=5*o:a=10*o;const s=Math.ceil(n/a)*a,c=[];for(let l=s;l<=e+a*.001;l+=a)c.push(l);return c}function xD(n,e){if(Number.isInteger(n)||!Number.isFinite(e)||e<=0)return n.toString();const r=Math.min(qD,Math.max(0,-Math.floor(Math.log10(e)))),t=n.toFixed(r).replace(/0+$/,"").replace(/\.$/,"");return t==="-0"?"0":t}const Xe={top:10,bottom:35,left:60,right:60},P8=80,D8=60,BD=35,Op=12,HD=12,PE="#ddd",UD="#eee",jD=220,x8=10,WD=80,GD=25,B8=95,Ri=12,VD=8,H8=4,vp=64;function $o(n,e){var v;const r=e.xLabels.length,t=e.yLabels.length;if(r===0||t===0)return;let i,o,u,a;n.width&&n.height?(i=n.width,o=n.height,u=(i-Xe.left-Xe.right)/r,a=(o-Xe.top-Xe.bottom)/t):(u=Math.max(P8,P8),a=Math.max(D8,D8),i=Xe.left+r*u+Xe.right,o=Xe.top+t*a+Xe.bottom,n.width=i,n.height=o);const s=n.getContext("2d");if(!s)return;s.clearRect(0,0,i,o);let c,l,f;if(e.valueRange)[c,l]=e.valueRange,f=!0;else{c=1/0,l=-1/0;for(const b of e.cells)for(const g of b)g!==null&&(g<c&&(c=g),g>l&&(l=g));f=isFinite(c)&&isFinite(l)}const d=f&&l-c||1,p=u>=BD;s.font=Gr(HD),s.textAlign="center",s.textBaseline="middle";for(let b=0;b<t;b++)for(let g=0;g<r;g++){const _=Xe.left+g*u,y=Xe.top+b*a,E=((v=e.cells[b])==null?void 0:v[g])??null;if(E===null)s.fillStyle=UD,s.fillRect(_,y,u,a);else{const A=f?(E-c)/d:0;s.fillStyle=DE(A),s.fillRect(_,y,u,a),p&&(s.fillStyle=A>.55?"#fff":"#333",s.fillText(Pp(E),_+u/2,y+a/2))}s.strokeStyle=PE,s.lineWidth=1,s.strokeRect(_,y,u,a)}s.fillStyle="#4d4d4d",s.font=Gr(Op),s.textBaseline="top";const m=e.xLabels.reduce((b,g)=>Math.max(b,s.measureText(g).width),0)>u-4;for(let b=0;b<r;b++){const g=Xe.left+b*u+u/2,_=Xe.top+t*a+4;s.save(),s.textAlign="center",m?(s.translate(g,_),s.rotate(-Math.PI/4),s.textAlign="right",s.fillText(e.xLabels[b],0,0)):s.fillText(e.xLabels[b],g,_),s.restore()}s.fillStyle="#777",s.textAlign="center",s.textBaseline="bottom",s.fillText(e.xAxisLabel,Xe.left+r*u/2,o-1),s.fillStyle="#4d4d4d",s.font=Gr(Op),s.textAlign="right",s.textBaseline="middle";for(let b=0;b<t;b++){const g=Xe.top+b*a+a/2;s.fillText(e.yLabels[b],Xe.left-5,g)}s.save(),s.fillStyle="#777",s.textAlign="center",s.textBaseline="top",s.translate(8,Xe.top+t*a/2),s.rotate(-Math.PI/2),s.fillText(e.yAxisLabel,0,0),s.restore(),f&&XD(s,i,o,t*a,c,l)}function DE(n){const e=x8+(WD-x8)*n,r=B8+(GD-B8)*n;return`hsl(${jD}, ${e.toFixed(0)}%, ${r.toFixed(0)}%)`}function Pp(n){return Number.isInteger(n)?n.toString():n.toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}function XD(n,e,r,t,i,o){const u=e-Xe.right+VD,a=Xe.top,s=t,c=s/vp;for(let l=0;l<vp;l++){const f=1-l/(vp-1);n.fillStyle=DE(f),n.fillRect(u,a+l*c,Ri,c+1)}n.strokeStyle=PE,n.lineWidth=1,n.strokeRect(u,a,Ri,s),n.fillStyle="#4d4d4d",n.font=Gr(Op),n.textAlign="left",n.textBaseline="middle",n.fillText(Pp(o),u+Ri+H8,a),n.fillText(Pp(i),u+Ri+H8,a+s)}const xE=new fn({html:!1,linkify:!0,breaks:!0}),BE="calculator-inline-reasoning",U8="calculator-adhoc-meta";function j2(n,e){const r=document.getElementById(U8);if(!e){r==null||r.remove();return}const t=r??(()=>{const o=document.createElement("div");return o.id=U8,n.insertAdjacentElement("beforebegin",o),o})();t.className="adhoc-meta",t.innerHTML="";const i=document.createElement("div");i.className="adhoc-meta-body";try{i.innerHTML=xE.render(e)}catch{i.textContent=e}t.appendChild(i)}function HE(n,e){const r=new Set(Object.keys(n)),t=[];for(const i of e)r.has(i)&&(t.push(i),r.delete(i));for(const i of[...r].sort())t.push(i);return t}function W2(n,e,r){const t=document.getElementById(BE),i=e.map((l,f)=>{var h;const d=Object.fromEntries(Object.entries(l.reasoning??{}).filter(([,m])=>m.trim()!=="")),p=(h=l.misc)!=null&&h.trim()?l.misc:void 0;return{trialIndex:f,reasoning:d,misc:p}}).filter(({reasoning:l,misc:f})=>Object.keys(l).length>0||f!==void 0);if(i.length===0){t==null||t.remove();return}const o=t??YD(n);o.innerHTML="";const u=document.createElement("details");u.className="reasoning-inline",u.open=!0;const a=document.createElement("summary");a.className="reasoning-inline-summary";const s=i.some(({reasoning:l})=>Object.keys(l).length>0),c=i.some(({misc:l})=>l!==void 0);s&&c?a.textContent="Reasoning and misc":s?a.textContent="Reasoning":a.textContent="Misc",u.appendChild(a);for(const{trialIndex:l,reasoning:f,misc:d}of i){if(e.length>1){const p=document.createElement("div");p.className="reasoning-trial-label",p.textContent=`Trial ${l+1}`,u.appendChild(p)}d!==void 0&&u.appendChild(j8("Misc",d));for(const p of HE(f,r))u.appendChild(j8(p,f[p]))}o.appendChild(u)}function YD(n){const e=document.createElement("div");return e.id=BE,n.insertAdjacentElement("afterend",e),e}function j8(n,e){const r=document.createElement("div");r.className="reasoning-item";const t=document.createElement("div");t.className="reasoning-svar-label",t.textContent=n,r.appendChild(t);const i=document.createElement("div");i.className="reasoning-md";try{i.innerHTML=xE.render(e)}catch{i.textContent=e}return r.appendChild(i),r}var mp,W8;function KD(){if(W8)return mp;W8=1;function n(M){return M instanceof Map?M.clear=M.delete=M.set=function(){throw new Error("map is read-only")}:M instanceof Set&&(M.add=M.clear=M.delete=function(){throw new Error("set is read-only")}),Object.freeze(M),Object.getOwnPropertyNames(M).forEach(P=>{const V=M[P],ce=typeof V;(ce==="object"||ce==="function")&&!Object.isFrozen(V)&&n(V)}),M}class e{constructor(P){P.data===void 0&&(P.data={}),this.data=P.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function r(M){return M.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function t(M,...P){const V=Object.create(null);for(const ce in M)V[ce]=M[ce];return P.forEach(function(ce){for(const De in ce)V[De]=ce[De]}),V}const i="</span>",o=M=>!!M.scope,u=(M,{prefix:P})=>{if(M.startsWith("language:"))return M.replace("language:","language-");if(M.includes(".")){const V=M.split(".");return[`${P}${V.shift()}`,...V.map((ce,De)=>`${ce}${"_".repeat(De+1)}`)].join(" ")}return`${P}${M}`};class a{constructor(P,V){this.buffer="",this.classPrefix=V.classPrefix,P.walk(this)}addText(P){this.buffer+=r(P)}openNode(P){if(!o(P))return;const V=u(P.scope,{prefix:this.classPrefix});this.span(V)}closeNode(P){o(P)&&(this.buffer+=i)}value(){return this.buffer}span(P){this.buffer+=`<span class="${P}">`}}const s=(M={})=>{const P={children:[]};return Object.assign(P,M),P};class c{constructor(){this.rootNode=s(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(P){this.top.children.push(P)}openNode(P){const V=s({scope:P});this.add(V),this.stack.push(V)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(P){return this.constructor._walk(P,this.rootNode)}static _walk(P,V){return typeof V=="string"?P.addText(V):V.children&&(P.openNode(V),V.children.forEach(ce=>this._walk(P,ce)),P.closeNode(V)),P}static _collapse(P){typeof P!="string"&&P.children&&(P.children.every(V=>typeof V=="string")?P.children=[P.children.join("")]:P.children.forEach(V=>{c._collapse(V)}))}}class l extends c{constructor(P){super(),this.options=P}addText(P){P!==""&&this.add(P)}startScope(P){this.openNode(P)}endScope(){this.closeNode()}__addSublanguage(P,V){const ce=P.root;V&&(ce.scope=`language:${V}`),this.add(ce)}toHTML(){return new a(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function f(M){return M?typeof M=="string"?M:M.source:null}function d(M){return m("(?=",M,")")}function p(M){return m("(?:",M,")*")}function h(M){return m("(?:",M,")?")}function m(...M){return M.map(V=>f(V)).join("")}function v(M){const P=M[M.length-1];return typeof P=="object"&&P.constructor===Object?(M.splice(M.length-1,1),P):{}}function b(...M){return"("+(v(M).capture?"":"?:")+M.map(ce=>f(ce)).join("|")+")"}function g(M){return new RegExp(M.toString()+"|").exec("").length-1}function _(M,P){const V=M&&M.exec(P);return V&&V.index===0}const y=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function E(M,{joinWith:P}){let V=0;return M.map(ce=>{V+=1;const De=V;let xe=f(ce),ee="";for(;xe.length>0;){const J=y.exec(xe);if(!J){ee+=xe;break}ee+=xe.substring(0,J.index),xe=xe.substring(J.index+J[0].length),J[0][0]==="\\"&&J[1]?ee+="\\"+String(Number(J[1])+De):(ee+=J[0],J[0]==="("&&V++)}return ee}).map(ce=>`(${ce})`).join(P)}const A=/\b\B/,L="[a-zA-Z]\\w*",C="[a-zA-Z_]\\w*",I="\\b\\d+(\\.\\d+)?",S="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",w="\\b(0b[01]+)",$="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",k=(M={})=>{const P=/^#![ ]*\//;return M.binary&&(M.begin=m(P,/.*\b/,M.binary,/\b.*/)),t({scope:"meta",begin:P,end:/$/,relevance:0,"on:begin":(V,ce)=>{V.index!==0&&ce.ignoreMatch()}},M)},R={begin:"\\\\[\\s\\S]",relevance:0},F={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[R]},T={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[R]},U={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},O=function(M,P,V={}){const ce=t({scope:"comment",begin:M,end:P,contains:[]},V);ce.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const De=b("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return ce.contains.push({begin:m(/[ ]+/,"(",De,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),ce},D=O("//","$"),q=O("/\\*","\\*/"),ne=O("#","$"),W={scope:"number",begin:I,relevance:0},Y={scope:"number",begin:S,relevance:0},Z={scope:"number",begin:w,relevance:0},ie={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[R,{begin:/\[/,end:/\]/,relevance:0,contains:[R]}]},G={scope:"title",begin:L,relevance:0},B={scope:"title",begin:C,relevance:0},H={begin:"\\.\\s*"+C,relevance:0};var pe=Object.freeze({__proto__:null,APOS_STRING_MODE:F,BACKSLASH_ESCAPE:R,BINARY_NUMBER_MODE:Z,BINARY_NUMBER_RE:w,COMMENT:O,C_BLOCK_COMMENT_MODE:q,C_LINE_COMMENT_MODE:D,C_NUMBER_MODE:Y,C_NUMBER_RE:S,END_SAME_AS_BEGIN:function(M){return Object.assign(M,{"on:begin":(P,V)=>{V.data._beginMatch=P[1]},"on:end":(P,V)=>{V.data._beginMatch!==P[1]&&V.ignoreMatch()}})},HASH_COMMENT_MODE:ne,IDENT_RE:L,MATCH_NOTHING_RE:A,METHOD_GUARD:H,NUMBER_MODE:W,NUMBER_RE:I,PHRASAL_WORDS_MODE:U,QUOTE_STRING_MODE:T,REGEXP_MODE:ie,RE_STARTERS_RE:$,SHEBANG:k,TITLE_MODE:G,UNDERSCORE_IDENT_RE:C,UNDERSCORE_TITLE_MODE:B});function Q(M,P){M.input[M.index-1]==="."&&P.ignoreMatch()}function oe(M,P){M.className!==void 0&&(M.scope=M.className,delete M.className)}function $e(M,P){P&&M.beginKeywords&&(M.begin="\\b("+M.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",M.__beforeBegin=Q,M.keywords=M.keywords||M.beginKeywords,delete M.beginKeywords,M.relevance===void 0&&(M.relevance=0))}function _e(M,P){Array.isArray(M.illegal)&&(M.illegal=b(...M.illegal))}function tr(M,P){if(M.match){if(M.begin||M.end)throw new Error("begin & end are not supported with match");M.begin=M.match,delete M.match}}function an(M,P){M.relevance===void 0&&(M.relevance=1)}const be=(M,P)=>{if(!M.beforeMatch)return;if(M.starts)throw new Error("beforeMatch cannot be used with starts");const V=Object.assign({},M);Object.keys(M).forEach(ce=>{delete M[ce]}),M.keywords=V.keywords,M.begin=m(V.beforeMatch,d(V.begin)),M.starts={relevance:0,contains:[Object.assign(V,{endsParent:!0})]},M.relevance=0,delete V.beforeMatch},Sn=["of","and","for","in","not","or","if","then","parent","list","value"],Ke="keyword";function An(M,P,V=Ke){const ce=Object.create(null);return typeof M=="string"?De(V,M.split(" ")):Array.isArray(M)?De(V,M):Object.keys(M).forEach(function(xe){Object.assign(ce,An(M[xe],P,xe))}),ce;function De(xe,ee){P&&(ee=ee.map(J=>J.toLowerCase())),ee.forEach(function(J){const ae=J.split("|");ce[ae[0]]=[xe,yr(ae[0],ae[1])]})}}function yr(M,P){return P?Number(P):z(M)?0:1}function z(M){return Sn.includes(M.toLowerCase())}const me={},Ln=M=>{console.error(M)},Et=(M,...P)=>{console.log(`WARN: ${M}`,...P)},Jn=(M,P)=>{me[`${M}/${P}`]||(console.log(`Deprecated as of ${M}. ${P}`),me[`${M}/${P}`]=!0)},ir=new Error;function Tr(M,P,{key:V}){let ce=0;const De=M[V],xe={},ee={};for(let J=1;J<=P.length;J++)ee[J+ce]=De[J],xe[J+ce]=!0,ce+=g(P[J-1]);M[V]=ee,M[V]._emit=xe,M[V]._multi=!0}function wt(M){if(Array.isArray(M.begin)){if(M.skip||M.excludeBegin||M.returnBegin)throw Ln("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ir;if(typeof M.beginScope!="object"||M.beginScope===null)throw Ln("beginScope must be object"),ir;Tr(M,M.begin,{key:"beginScope"}),M.begin=E(M.begin,{joinWith:""})}}function $t(M){if(Array.isArray(M.end)){if(M.skip||M.excludeEnd||M.returnEnd)throw Ln("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ir;if(typeof M.endScope!="object"||M.endScope===null)throw Ln("endScope must be object"),ir;Tr(M,M.end,{key:"endScope"}),M.end=E(M.end,{joinWith:""})}}function bi(M){M.scope&&typeof M.scope=="object"&&M.scope!==null&&(M.beginScope=M.scope,delete M.scope)}function Je(M){bi(M),typeof M.beginScope=="string"&&(M.beginScope={_wrap:M.beginScope}),typeof M.endScope=="string"&&(M.endScope={_wrap:M.endScope}),wt(M),$t(M)}function Oe(M){function P(ee,J){return new RegExp(f(ee),"m"+(M.case_insensitive?"i":"")+(M.unicodeRegex?"u":"")+(J?"g":""))}class V{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(J,ae){ae.position=this.position++,this.matchIndexes[this.matchAt]=ae,this.regexes.push([ae,J]),this.matchAt+=g(J)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const J=this.regexes.map(ae=>ae[1]);this.matcherRe=P(E(J,{joinWith:"|"}),!0),this.lastIndex=0}exec(J){this.matcherRe.lastIndex=this.lastIndex;const ae=this.matcherRe.exec(J);if(!ae)return null;const We=ae.findIndex((St,Lu)=>Lu>0&&St!==void 0),He=this.matchIndexes[We];return ae.splice(0,We),Object.assign(ae,He)}}class ce{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(J){if(this.multiRegexes[J])return this.multiRegexes[J];const ae=new V;return this.rules.slice(J).forEach(([We,He])=>ae.addRule(We,He)),ae.compile(),this.multiRegexes[J]=ae,ae}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(J,ae){this.rules.push([J,ae]),ae.type==="begin"&&this.count++}exec(J){const ae=this.getMatcher(this.regexIndex);ae.lastIndex=this.lastIndex;let We=ae.exec(J);if(this.resumingScanAtSamePosition()&&!(We&&We.index===this.lastIndex)){const He=this.getMatcher(0);He.lastIndex=this.lastIndex+1,We=He.exec(J)}return We&&(this.regexIndex+=We.position+1,this.regexIndex===this.count&&this.considerAll()),We}}function De(ee){const J=new ce;return ee.contains.forEach(ae=>J.addRule(ae.begin,{rule:ae,type:"begin"})),ee.terminatorEnd&&J.addRule(ee.terminatorEnd,{type:"end"}),ee.illegal&&J.addRule(ee.illegal,{type:"illegal"}),J}function xe(ee,J){const ae=ee;if(ee.isCompiled)return ae;[oe,tr,Je,be].forEach(He=>He(ee,J)),M.compilerExtensions.forEach(He=>He(ee,J)),ee.__beforeBegin=null,[$e,_e,an].forEach(He=>He(ee,J)),ee.isCompiled=!0;let We=null;return typeof ee.keywords=="object"&&ee.keywords.$pattern&&(ee.keywords=Object.assign({},ee.keywords),We=ee.keywords.$pattern,delete ee.keywords.$pattern),We=We||/\w+/,ee.keywords&&(ee.keywords=An(ee.keywords,M.case_insensitive)),ae.keywordPatternRe=P(We,!0),J&&(ee.begin||(ee.begin=/\B|\b/),ae.beginRe=P(ae.begin),!ee.end&&!ee.endsWithParent&&(ee.end=/\B|\b/),ee.end&&(ae.endRe=P(ae.end)),ae.terminatorEnd=f(ae.end)||"",ee.endsWithParent&&J.terminatorEnd&&(ae.terminatorEnd+=(ee.end?"|":"")+J.terminatorEnd)),ee.illegal&&(ae.illegalRe=P(ee.illegal)),ee.contains||(ee.contains=[]),ee.contains=[].concat(...ee.contains.map(function(He){return ze(He==="self"?ee:He)})),ee.contains.forEach(function(He){xe(He,ae)}),ee.starts&&xe(ee.starts,J),ae.matcher=De(ae),ae}if(M.compilerExtensions||(M.compilerExtensions=[]),M.contains&&M.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return M.classNameAliases=t(M.classNameAliases||{}),xe(M)}function qr(M){return M?M.endsWithParent||qr(M.starts):!1}function ze(M){return M.variants&&!M.cachedVariants&&(M.cachedVariants=M.variants.map(function(P){return t(M,{variants:null},P)})),M.cachedVariants?M.cachedVariants:qr(M)?t(M,{starts:M.starts?t(M.starts):null}):Object.isFrozen(M)?t(M):M}var In="11.11.1";class hn extends Error{constructor(P,V){super(P),this.name="HTMLInjectionError",this.html=V}}const Er=r,Fr=t,Or=Symbol("nomatch"),eS=7,Gh=function(M){const P=Object.create(null),V=Object.create(null),ce=[];let De=!0;const xe="Could not find the language '{}', did you forget to load/include a language module?",ee={disableAutodetect:!0,name:"Plain text",contains:[]};let J={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:l};function ae(j){return J.noHighlightRe.test(j)}function We(j){let te=j.className+" ";te+=j.parentNode?j.parentNode.className:"";const he=J.languageDetectRe.exec(te);if(he){const Le=or(he[1]);return Le||(Et(xe.replace("{}",he[1])),Et("Falling back to no-highlight mode for this block.",j)),Le?he[1]:"no-highlight"}return te.split(/\s+/).find(Le=>ae(Le)||or(Le))}function He(j,te,he){let Le="",Ue="";typeof te=="object"?(Le=j,he=te.ignoreIllegals,Ue=te.language):(Jn("10.7.0","highlight(lang, code, ...args) has been deprecated."),Jn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Ue=j,Le=te),he===void 0&&(he=!0);const kn={code:Le,language:Ue};_i("before:highlight",kn);const ur=kn.result?kn.result:St(kn.language,kn.code,he);return ur.code=kn.code,_i("after:highlight",ur),ur}function St(j,te,he,Le){const Ue=Object.create(null);function kn(X,re){return X.keywords[re]}function ur(){if(!le.keywords){Qe.addText(Ie);return}let X=0;le.keywordPatternRe.lastIndex=0;let re=le.keywordPatternRe.exec(Ie),fe="";for(;re;){fe+=Ie.substring(X,re.index);const Se=Nn.case_insensitive?re[0].toLowerCase():re[0],nn=kn(le,Se);if(nn){const[zn,bS]=nn;if(Qe.addText(fe),fe="",Ue[Se]=(Ue[Se]||0)+1,Ue[Se]<=eS&&(wi+=bS),zn.startsWith("_"))fe+=re[0];else{const gS=Nn.classNameAliases[zn]||zn;Mn(re[0],gS)}}else fe+=re[0];X=le.keywordPatternRe.lastIndex,re=le.keywordPatternRe.exec(Ie)}fe+=Ie.substring(X),Qe.addText(fe)}function yi(){if(Ie==="")return;let X=null;if(typeof le.subLanguage=="string"){if(!P[le.subLanguage]){Qe.addText(Ie);return}X=St(le.subLanguage,Ie,!0,Zh[le.subLanguage]),Zh[le.subLanguage]=X._top}else X=Iu(Ie,le.subLanguage.length?le.subLanguage:null);le.relevance>0&&(wi+=X.relevance),Qe.__addSublanguage(X._emitter,X.language)}function vn(){le.subLanguage!=null?yi():ur(),Ie=""}function Mn(X,re){X!==""&&(Qe.startScope(re),Qe.addText(X),Qe.endScope())}function Kh(X,re){let fe=1;const Se=re.length-1;for(;fe<=Se;){if(!X._emit[fe]){fe++;continue}const nn=Nn.classNameAliases[X[fe]]||X[fe],zn=re[fe];nn?Mn(zn,nn):(Ie=zn,ur(),Ie=""),fe++}}function Jh(X,re){return X.scope&&typeof X.scope=="string"&&Qe.openNode(Nn.classNameAliases[X.scope]||X.scope),X.beginScope&&(X.beginScope._wrap?(Mn(Ie,Nn.classNameAliases[X.beginScope._wrap]||X.beginScope._wrap),Ie=""):X.beginScope._multi&&(Kh(X.beginScope,re),Ie="")),le=Object.create(X,{parent:{value:le}}),le}function zh(X,re,fe){let Se=_(X.endRe,fe);if(Se){if(X["on:end"]){const nn=new e(X);X["on:end"](re,nn),nn.isMatchIgnored&&(Se=!1)}if(Se){for(;X.endsParent&&X.parent;)X=X.parent;return X}}if(X.endsWithParent)return zh(X.parent,re,fe)}function dS(X){return le.matcher.regexIndex===0?(Ie+=X[0],1):(Mu=!0,0)}function pS(X){const re=X[0],fe=X.rule,Se=new e(fe),nn=[fe.__beforeBegin,fe["on:begin"]];for(const zn of nn)if(zn&&(zn(X,Se),Se.isMatchIgnored))return dS(re);return fe.skip?Ie+=re:(fe.excludeBegin&&(Ie+=re),vn(),!fe.returnBegin&&!fe.excludeBegin&&(Ie=re)),Jh(fe,X),fe.returnBegin?0:re.length}function hS(X){const re=X[0],fe=te.substring(X.index),Se=zh(le,X,fe);if(!Se)return Or;const nn=le;le.endScope&&le.endScope._wrap?(vn(),Mn(re,le.endScope._wrap)):le.endScope&&le.endScope._multi?(vn(),Kh(le.endScope,X)):nn.skip?Ie+=re:(nn.returnEnd||nn.excludeEnd||(Ie+=re),vn(),nn.excludeEnd&&(Ie=re));do le.scope&&Qe.closeNode(),!le.skip&&!le.subLanguage&&(wi+=le.relevance),le=le.parent;while(le!==Se.parent);return Se.starts&&Jh(Se.starts,X),nn.returnEnd?0:re.length}function vS(){const X=[];for(let re=le;re!==Nn;re=re.parent)re.scope&&X.unshift(re.scope);X.forEach(re=>Qe.openNode(re))}let Ei={};function Qh(X,re){const fe=re&&re[0];if(Ie+=X,fe==null)return vn(),0;if(Ei.type==="begin"&&re.type==="end"&&Ei.index===re.index&&fe===""){if(Ie+=te.slice(re.index,re.index+1),!De){const Se=new Error(`0 width match regex (${j})`);throw Se.languageName=j,Se.badRule=Ei.rule,Se}return 1}if(Ei=re,re.type==="begin")return pS(re);if(re.type==="illegal"&&!he){const Se=new Error('Illegal lexeme "'+fe+'" for mode "'+(le.scope||"<unnamed>")+'"');throw Se.mode=le,Se}else if(re.type==="end"){const Se=hS(re);if(Se!==Or)return Se}if(re.type==="illegal"&&fe==="")return Ie+=`
`,1;if(Cu>1e5&&Cu>re.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Ie+=fe,fe.length}const Nn=or(j);if(!Nn)throw Ln(xe.replace("{}",j)),new Error('Unknown language: "'+j+'"');const mS=Oe(Nn);let Ru="",le=Le||mS;const Zh={},Qe=new J.__emitter(J);vS();let Ie="",wi=0,wr=0,Cu=0,Mu=!1;try{if(Nn.__emitTokens)Nn.__emitTokens(te,Qe);else{for(le.matcher.considerAll();;){Cu++,Mu?Mu=!1:le.matcher.considerAll(),le.matcher.lastIndex=wr;const X=le.matcher.exec(te);if(!X)break;const re=te.substring(wr,X.index),fe=Qh(re,X);wr=X.index+fe}Qh(te.substring(wr))}return Qe.finalize(),Ru=Qe.toHTML(),{language:j,value:Ru,relevance:wi,illegal:!1,_emitter:Qe,_top:le}}catch(X){if(X.message&&X.message.includes("Illegal"))return{language:j,value:Er(te),illegal:!0,relevance:0,_illegalBy:{message:X.message,index:wr,context:te.slice(wr-100,wr+100),mode:X.mode,resultSoFar:Ru},_emitter:Qe};if(De)return{language:j,value:Er(te),illegal:!1,relevance:0,errorRaised:X,_emitter:Qe,_top:le};throw X}}function Lu(j){const te={value:Er(j),illegal:!1,relevance:0,_top:ee,_emitter:new J.__emitter(J)};return te._emitter.addText(j),te}function Iu(j,te){te=te||J.languages||Object.keys(P);const he=Lu(j),Le=te.filter(or).filter(Yh).map(vn=>St(vn,j,!1));Le.unshift(he);const Ue=Le.sort((vn,Mn)=>{if(vn.relevance!==Mn.relevance)return Mn.relevance-vn.relevance;if(vn.language&&Mn.language){if(or(vn.language).supersetOf===Mn.language)return 1;if(or(Mn.language).supersetOf===vn.language)return-1}return 0}),[kn,ur]=Ue,yi=kn;return yi.secondBest=ur,yi}function nS(j,te,he){const Le=te&&V[te]||he;j.classList.add("hljs"),j.classList.add(`language-${Le}`)}function ku(j){let te=null;const he=We(j);if(ae(he))return;if(_i("before:highlightElement",{el:j,language:he}),j.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",j);return}if(j.children.length>0&&(J.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(j)),J.throwUnescapedHTML))throw new hn("One of your code blocks includes unescaped HTML.",j.innerHTML);te=j;const Le=te.textContent,Ue=he?He(Le,{language:he,ignoreIllegals:!0}):Iu(Le);j.innerHTML=Ue.value,j.dataset.highlighted="yes",nS(j,he,Ue.language),j.result={language:Ue.language,re:Ue.relevance,relevance:Ue.relevance},Ue.secondBest&&(j.secondBest={language:Ue.secondBest.language,relevance:Ue.secondBest.relevance}),_i("after:highlightElement",{el:j,result:Ue,text:Le})}function rS(j){J=Fr(J,j)}const tS=()=>{gi(),Jn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function iS(){gi(),Jn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Vh=!1;function gi(){function j(){gi()}if(document.readyState==="loading"){Vh||window.addEventListener("DOMContentLoaded",j,!1),Vh=!0;return}document.querySelectorAll(J.cssSelector).forEach(ku)}function oS(j,te){let he=null;try{he=te(M)}catch(Le){if(Ln("Language definition for '{}' could not be registered.".replace("{}",j)),De)Ln(Le);else throw Le;he=ee}he.name||(he.name=j),P[j]=he,he.rawDefinition=te.bind(null,M),he.aliases&&Xh(he.aliases,{languageName:j})}function uS(j){delete P[j];for(const te of Object.keys(V))V[te]===j&&delete V[te]}function aS(){return Object.keys(P)}function or(j){return j=(j||"").toLowerCase(),P[j]||P[V[j]]}function Xh(j,{languageName:te}){typeof j=="string"&&(j=[j]),j.forEach(he=>{V[he.toLowerCase()]=te})}function Yh(j){const te=or(j);return te&&!te.disableAutodetect}function sS(j){j["before:highlightBlock"]&&!j["before:highlightElement"]&&(j["before:highlightElement"]=te=>{j["before:highlightBlock"](Object.assign({block:te.el},te))}),j["after:highlightBlock"]&&!j["after:highlightElement"]&&(j["after:highlightElement"]=te=>{j["after:highlightBlock"](Object.assign({block:te.el},te))})}function cS(j){sS(j),ce.push(j)}function lS(j){const te=ce.indexOf(j);te!==-1&&ce.splice(te,1)}function _i(j,te){const he=j;ce.forEach(function(Le){Le[he]&&Le[he](te)})}function fS(j){return Jn("10.7.0","highlightBlock will be removed entirely in v12.0"),Jn("10.7.0","Please use highlightElement now."),ku(j)}Object.assign(M,{highlight:He,highlightAuto:Iu,highlightAll:gi,highlightElement:ku,highlightBlock:fS,configure:rS,initHighlighting:tS,initHighlightingOnLoad:iS,registerLanguage:oS,unregisterLanguage:uS,listLanguages:aS,getLanguage:or,registerAliases:Xh,autoDetection:Yh,inherit:Fr,addPlugin:cS,removePlugin:lS}),M.debugMode=function(){De=!1},M.safeMode=function(){De=!0},M.versionString=In,M.regex={concat:m,lookahead:d,either:b,optional:h,anyNumberOfTimes:p};for(const j in pe)typeof pe[j]=="object"&&n(pe[j]);return Object.assign(M,pe),M},Pr=Gh({});return Pr.newInstance=()=>Gh({}),mp=Pr,Pr.HighlightJS=Pr,Pr.default=Pr,mp}var JD=KD();const UE=Vn(JD);function zD(n){const e=n.regex,r=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),t=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],a={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:t,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},s={className:"meta",begin:/^(>>>|\.\.\.) /},c={className:"subst",begin:/\{/,end:/\}/,keywords:a,illegal:/#/},l={begin:/\{\{/,relevance:0},f={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,s,l,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,s,l,c]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[n.BACKSLASH_ESCAPE,l,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,l,c]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},d="[0-9](_?[0-9])*",p=`(\\b(${d}))?\\.(${d})|\\b(${d})\\.`,h=`\\b|${t.join("|")}`,m={className:"number",relevance:0,variants:[{begin:`(\\b(${d})|(${p}))[eE][+-]?(${d})[jJ]?(?=${h})`},{begin:`(${p})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${h})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${h})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${h})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${h})`},{begin:`\\b(${d})[jJ](?=${h})`}]},v={className:"comment",begin:e.lookahead(/# type:/),end:/$/,keywords:a,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},b={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:["self",s,m,f,n.HASH_COMMENT_MODE]}]};return c.contains=[f,m,s],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:a,illegal:/(<\/|\?)|=>/,contains:[s,m,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},f,v,n.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,r],scope:{1:"keyword",3:"title.function"},contains:[b]},{variants:[{match:[/\bclass/,/\s+/,r,/\s*/,/\(\s*/,r,/\s*\)/]},{match:[/\bclass/,/\s+/,r]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[m,b,f]}]}}UE.registerLanguage("python",zD);const G8=UE,V8=new fn({html:!1,linkify:!0,breaks:!0}),jE="payload-modal-backdrop";function QD(n){const e=n.trial_metadata;return!e||e.length===0?!1:e.some(r=>r.reasoning&&Object.keys(r.reasoning).length>0||r.misc||r.agent_code||r.source_code)}function ZD(n,e){xi();const r=n.trial_metadata;if(!r||r.length===0)return;const t=document.createElement("div");t.id=jE,t.className="payload-backdrop";const i=document.createElement("div");i.className="payload-modal";const o=document.createElement("button");o.className="payload-close-btn",o.textContent="×",o.title="Close (Esc)",o.addEventListener("click",xi),i.appendChild(o);const u=document.createElement("h2");u.className="payload-header",u.textContent=`${n.label} — payload`,i.appendChild(u);const a=document.createElement("div");if(a.className="payload-content",r.length>1){const s=document.createElement("div");s.className="payload-trial-tabs";for(let c=0;c<r.length;c++){const l=document.createElement("button");l.className="payload-trial-tab"+(c===0?" active":""),l.dataset.trial=String(c),l.textContent=`Trial ${c+1}`,l.addEventListener("click",()=>{for(const f of s.querySelectorAll(".payload-trial-tab"))f.classList.toggle("active",f===l);X8(a,r[c],e)}),s.appendChild(l)}i.appendChild(s)}i.appendChild(a),X8(a,r[0],e),t.appendChild(i),document.body.appendChild(t),document.addEventListener("keydown",WE),t.addEventListener("click",s=>{s.target===t&&xi()})}function xi(){const n=document.getElementById(jE);n&&(n.remove(),document.removeEventListener("keydown",WE))}function WE(n){n.key==="Escape"&&xi()}function X8(n,e,r){if(n.innerHTML="",e.misc){const t=At("Misc",!0);t.querySelector(".payload-detail-body").appendChild(Y8(e.misc)),n.appendChild(t)}if(e.reasoning&&Object.keys(e.reasoning).length>0){const t=At("Reasoning",!0),i=HE(e.reasoning,r);for(const o of i){const u=e.reasoning[o],a=At(o,!0);a.querySelector(".payload-detail-body").appendChild(Y8(u)),t.querySelector(".payload-detail-body").appendChild(a)}n.appendChild(t)}if(e.agent_code){const t=At("Agent Code",!1);t.querySelector(".payload-detail-body").appendChild(K8(e.agent_code)),n.appendChild(t)}if(e.source_code){const t=At("Source Code (full)",!1);t.querySelector(".payload-detail-body").appendChild(K8(e.source_code)),n.appendChild(t)}}function At(n,e){const r=document.createElement("details");r.className="payload-detail",e&&(r.open=!0);const t=document.createElement("summary");t.className="payload-summary",t.textContent=n,r.appendChild(t);const i=document.createElement("div");return i.className="payload-detail-body",r.appendChild(i),r}function Y8(n){if(V8)try{const r=document.createElement("div");return r.className="payload-md",r.innerHTML=V8.render(n),r}catch{}const e=document.createElement("pre");return e.className="payload-pre-fallback",e.textContent=n,e}function K8(n){const e=document.createElement("pre");e.className="payload-code";const r=document.createElement("code");if(G8)try{return r.innerHTML=G8.highlight(n,{language:"python"}).value,e.appendChild(r),e}catch{}return r.textContent=n,e.appendChild(r),e}function ex(){const n=new WeakMap;return{get(e,r){var t;return(t=n.get(e))==null?void 0:t.get(r)},set(e,r,t){let i=n.get(e);i===void 0&&(i=new Map,n.set(e,i)),i.set(r,t)}}}const nx=.5,rx=3,J8=new WeakMap,z8=new WeakMap,Q8=ex();function jn(n,e,r){var d;if(J8.set(n,e),(d=n.parentElement)!=null&&d.classList.contains("resizable-canvas-wrapper"))return;const t=n.width,i=n.height;z8.set(n,{w:t,h:i});const o=r===void 0?1:Q8.get(r.stateHost,r.stateKey)??1,u=document.createElement("div");u.className="resizable-canvas-wrapper",n.parentElement.insertBefore(u,n),u.appendChild(n);const a=document.createElement("div");a.className="resizable-canvas-handle",u.appendChild(a),o!==1&&(n.width=Math.round(t*o),n.height=Math.round(i*o)),u.style.width=`${n.width}px`,o!==1&&e();let s=!1,c=0,l=t;a.addEventListener("pointerdown",p=>{var h;s=!0,c=p.clientX,l=n.width,(h=a.setPointerCapture)==null||h.call(a,p.pointerId),p.preventDefault()}),a.addEventListener("pointermove",p=>{var _;if(!s)return;const h=z8.get(n)??{w:t,h:i},m=p.clientX-c,v=Math.max(h.w*nx,Math.min(h.w*rx,l+m)),b=v/h.w,g=Math.round(h.h*b);n.width=Math.round(v),n.height=g,u.style.width=`${n.width}px`,r!==void 0&&Q8.set(r.stateHost,r.stateKey,n.width/h.w),(_=J8.get(n))==null||_()});const f=()=>{s=!1};a.addEventListener("pointerup",f),a.addEventListener("lostpointercapture",f)}const GE=18,VE=80,tx=16,So=new Set;let Z8=!1;function ix(){Z8||(Z8=!0,document.addEventListener("click",n=>{for(const e of[...So])document.contains(e.wrapper)?e.wrapper.contains(n.target)||e.close():So.delete(e)}))}function ox(n,e=GE,r=VE){return XE(t=>{t.textContent=n},!1,!0,e,r)}function Mr(n,e=GE,r=VE){return XE(t=>{t.innerHTML=n()},!0,!1,e,r)}function XE(n,e,r,t,i){const o=document.createElement("span");o.className="help-widget",o.style.display="inline-block";const u=document.createElement("button");u.className="help-widget-btn",u.type="button",u.textContent="?",u.setAttribute("aria-label","Help"),u.style.width=`${t}px`,u.style.height=`${t}px`,u.style.fontSize=`${Math.round(t*.6)}px`,u.style.lineHeight=`${t}px`;const a=document.createElement("div");a.className="help-widget-popover",a.hidden=!0;const s=document.createElement("button");s.className="help-widget-close",s.type="button",s.textContent="×",s.setAttribute("aria-label","Close");const c=document.createElement("div");c.className=e?"help-widget-body html-content":"help-widget-body",a.appendChild(s),a.appendChild(c),o.appendChild(u),o.appendChild(a),r&&n(c);const l={wrapper:o,close:()=>d()};function f(){n(c),a.hidden=!1,So.add(l);const p=window.innerWidth,h=window.innerHeight,m=Math.round(p*i/100),v=h-2*tx;a.style.width=`${m}px`,a.style.maxHeight=`${v}px`;const b=Math.min(a.offsetHeight,v);a.style.left=`${Math.round((p-m)/2)}px`,a.style.top=`${Math.round((h-b)/2)}px`}function d(){a.hidden=!0,So.delete(l)}return u.addEventListener("click",p=>{p.stopPropagation(),a.hidden?f():d()}),s.addEventListener("click",p=>{p.stopPropagation(),d()}),a.addEventListener("keydown",p=>{p.key==="Escape"&&(d(),u.focus())}),o.addEventListener("keydown",p=>{p.key==="Escape"&&!a.hidden&&(d(),u.focus())}),ix(),o}const YE=1,ux="shortcutKeys",ax=new Set(["","date","datetime-local","email","month","number","password","search","tel","text","time","url","week"]),vt=Object.freeze([{id:"toggle_mnames",description:"Toggle longer meaning-carrying names",default_shortcut:"n",enabled:!0},{id:"goto_calculator",description:"Move to Calculator section",default_shortcut:"c",enabled:!0},{id:"goto_top",description:"Move to top of page",default_shortcut:"t",enabled:!0},{id:"goto_next_section",description:"Jump to next section",default_shortcut:"s",enabled:!0},{id:"toggle_srcquotes_inlined",description:"Toggle source quotes inline in the text vs. behind a glyph",default_shortcut:"q",enabled:!0},{id:"toggle_framing_notes",description:"Show/hide all framing notes",default_shortcut:"f",enabled:!0},{id:"toggle_framing_note_abbrev",description:"Toggle framing note abbreviation",default_shortcut:"a",enabled:!0},{id:"switch_whose_mode",description:"Switch whose mode (Yours / Adhoc / AI results), restoring its last viewed preset",default_shortcut:"m",enabled:!0},{id:"toggle_settings_shortcuts",description:"Show/hide settings/shortcuts",default_shortcut:"?",enabled:!0}]);function KE(){return vt}function e9(n){return vt.find(e=>e.id===n)}function G2(n){const e=n.trim().toLowerCase();return e===""?{ok:!0,key:e}:[...e].length!==YE?{ok:!1,key:e,error:"Use a single key, or clear the field to disable this shortcut."}:{ok:!0,key:e}}function JE(n){if(!n||typeof n!="object"||Array.isArray(n))return{};const e={};for(const[r,t]of Object.entries(n)){if(typeof t!="string"){console.error(`Ignoring non-string shortcut key for ${r}.`);continue}const i=G2(t);if(!i.ok){console.error(`Ignoring invalid persisted shortcut key for ${r}: ${t}`);continue}e[r]=i.key}return e}function sx(){const n={};for(const e of vt)n[e.id]=e.default_shortcut;return n}function mt(){const n=JE(cn().shortcutKeys);return{...sx(),...n}}function zE(n,e,r=mt()){if(e==="")return null;for(const t of KE())if(t.id!==n&&r[t.id]===e)return t.id;return null}function cx(n,e){var a;if(!e9(n))throw new Error(`Unknown shortcut id: ${n}`);const t=G2(e);if(!t.ok)return{ok:!1,key:t.key,error:t.error};const i=mt(),o=zE(n,t.key,{...i,[n]:t.key});if(o)return{ok:!1,key:t.key,conflictId:o,error:`Already assigned to "${((a=e9(o))==null?void 0:a.description)??o}".`};const u=JE(cn().shortcutKeys);return u[n]=t.key,Do(ux,u),{ok:!0,key:t.key}}function lx(n){if(n.altKey||n.ctrlKey||n.metaKey)return null;const e=n.key.toLowerCase();return[...e].length!==YE?null:e}function fx(n){if(!(n instanceof HTMLElement))return!1;if(n.isContentEditable)return!0;let e=n;for(;e;){if(e.isContentEditable||e.contentEditable==="true")return!0;const r=e.getAttribute("contenteditable");if(r!==null&&r.toLowerCase()!=="false")return!0;e=e.parentElement}return n instanceof HTMLTextAreaElement?!0:n instanceof HTMLInputElement?ax.has(n.type.toLowerCase()):!1}function dx(n){const e=r=>{if(fx(r.target))return;const t=lx(r);if(t===null)return;const i=mt();for(const o of KE()){if(i[o.id]!==t)continue;const u=n[o.id];if(!u)return;r.preventDefault(),u();return}};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}const px=[{aid:"alpoker"},{aid:"mcovidB6",family:"mcovidB"},{aid:"mcovidB7",family:"mcovidB"},{aid:"mcovidB8",family:"mcovidB"},{aid:"mcovidB9",family:"mcovidB"},{aid:"mcovidB10",family:"mcovidB"},{aid:"mcovidB11",family:"mcovidB"},{aid:"mcovidB12",family:"mcovidB"},{aid:"mcovidB13",family:"mcovidB"},{aid:"mcovidA",family:"mcovidA"},{aid:"mcovidA2",family:"mcovidA"},{aid:"covid0",family:"cov-origin-ATC"},{aid:"covatc1",family:"cov-origin-ATC"},{aid:"eggsFH1",family:"eggs"},{aid:"eggsFH2",family:"eggs"},{aid:"lhcFXH1",family:"lhc"},{aid:"lhcFXH_SolMax",family:"lhc"},{aid:"lhcFXH_SolMax_Ultra",family:"lhc"}],hx={"cov-origin-ATC":{sequence:[{aid:"covid0",version:"1.0.0"},{aid:"covatc1",version:"2.0.0"}]},mcovidB:{sequence:[{aid:"mcovidB1",version:"0.0.0"},{aid:"mcovidB2",version:"0.0.1"},{aid:"mcovidB3",version:"0.0.2"},{aid:"mcovidB4",version:"0.0.3"},{aid:"mcovidB5",version:"0.0.4"},{aid:"mcovidB6",version:"1.0.0"},{aid:"mcovidB7",version:"2.0.0"},{aid:"mcovidB8",version:"2.1.0"},{aid:"mcovidB9",version:"2.2.0"},{aid:"mcovidB10",version:"2.3.0"},{aid:"mcovidB11",version:"3.0.0"},{aid:"mcovidB12",version:"3.1.0"},{aid:"mcovidB13",version:"4.0.0"},{aid:"mcovidB14",version:"4.1.0"}]},mcovidA:{sequence:[{aid:"mcovidA",version:"0.0.0"},{aid:"mcovidA2",version:"0.0.1"}]},eggs:{sequence:[{aid:"eggsFH1",version:"0.1.0"},{aid:"eggsFH2",version:"0.2.0"}]},lhc:{sequence:[{aid:"lhcFXH1",version:"1.0.0"},{aid:"lhcFXH_SolMax",version:"2.0.0"},{aid:"lhcFXH_SolMax_Ultra",version:"3.0.0"}]},testE:{sequence:[{aid:"testprob_preE",version:"pre"},{aid:"testprob_postE",version:"post"},{aid:"testprob_postE_extra",version:"postextra"}]}},vx={navList:px,families:hx},mx="../../data/",bx="/index.ts",QE=Object.assign({"../../data/alpoker/index.ts":()=>Ge(()=>import("./index-BEYfrfLJ.js"),[]),"../../data/covatc1/index.ts":()=>Ge(()=>import("./index-ts2WGdot.js"),[]),"../../data/covid0/index.ts":()=>Ge(()=>import("./index-IHirFFmg.js"),[]),"../../data/eggsFH1/index.ts":()=>Ge(()=>import("./index-fIkG-jle.js"),[]),"../../data/eggsFH2/index.ts":()=>Ge(()=>import("./index-B915YPaG.js"),[]),"../../data/lhcFXH1/index.ts":()=>Ge(()=>import("./index-CQiV11Sr.js"),[]),"../../data/lhcFXH_SolMax/index.ts":()=>Ge(()=>import("./index-BsTaMBze.js"),[]),"../../data/lhcFXH_SolMax_Ultra/index.ts":()=>Ge(()=>import("./index-OhFp7qBd.js"),[]),"../../data/mcovidA/index.ts":()=>Ge(()=>import("./index-C9S2EzXY.js"),__vite__mapDeps([0,1])),"../../data/mcovidA2/index.ts":()=>Ge(()=>import("./index-CWpE2PVT.js"),__vite__mapDeps([2,1])),"../../data/mcovidB10/index.ts":()=>Ge(()=>import("./index-Dseb8AkB.js"),__vite__mapDeps([3,1])),"../../data/mcovidB11/index.ts":()=>Ge(()=>import("./index-WMjxkd5L.js"),__vite__mapDeps([4,1])),"../../data/mcovidB12/index.ts":()=>Ge(()=>import("./index-Cb56eS_S.js"),[]),"../../data/mcovidB13/index.ts":()=>Ge(()=>import("./index-B-Yq1Y3V.js"),[]),"../../data/mcovidB6/index.ts":()=>Ge(()=>import("./index-CTXbJLTF.js"),__vite__mapDeps([5,1])),"../../data/mcovidB7/index.ts":()=>Ge(()=>import("./index-DhbvDADw.js"),__vite__mapDeps([6,1])),"../../data/mcovidB8/index.ts":()=>Ge(()=>import("./index-BWfTBSGi.js"),__vite__mapDeps([7,1])),"../../data/mcovidB9/index.ts":()=>Ge(()=>import("./index-IXKXrGv6.js"),__vite__mapDeps([8,1]))});function V2(n){return`${mx}${n}${bx}`}function gx(n){return QE[V2(n)]}function X2(n){return V2(n)in QE}const mu=vx,ZE=(()=>{const n=new Map;for(const[e,{sequence:r}]of Object.entries(mu.families))r.forEach((t,i)=>n.set(t.aid,{family:e,index:i}));return n})();function _x(){return mu.navList}function yx(){const n={};for(const[e,{sequence:r}]of Object.entries(mu.families))n[e]=r;return n}function ew(n){var e;return(e=ZE.get(n))==null?void 0:e.family}function n9(n,e,r,t){for(let i=e+r;i>=0&&i<n.length;i+=r){const o=n[i].aid;if(t(o))return o}}function Ex(n,e=X2){const r=ZE.get(n);if(r===void 0)return;const t=mu.families[r.family].sequence,i={version:t[r.index].version},o=n9(t,r.index,-1,e);o!==void 0&&(i.prev=o);const u=n9(t,r.index,1,e);return u!==void 0&&(i.next=u),i}const Y2=["yours","adhoc","metho"];function K2(n,e){const r=["yours"];return(n.adhocPlainnumEntries.length>0||n.adhocPlaincodeEntries.length>0)&&r.push("adhoc"),e.length>0&&r.push("metho"),r}function nw(n,e,r,t){return K2(r,t).includes(e)?e==="yours"?n.lastYoursWhose:e==="adhoc"?r9(n.lastAdhocWhose,"adhoc",r)?n.lastAdhocWhose:$x(r):r9(n.lastMethoWhose,"metho",r)?n.lastMethoWhose:NE(t,n.presetQueryModeFilter):null}function wx(n,e,r){const t=K2(e,r);if(t.length<2)return null;const i=Ze(ve(n.whose).source);if(!Y2.includes(i))throw new Error(`nextWhoseForModeCycle: unrecognized whose ${JSON.stringify(n.whose)}`);const o=t.indexOf(i),u=t[(o+1)%t.length];return nw(n,u,e,r)}function $x(n){for(const e of G7)if(V7(n,e).length>0)return`adhoc-${e}:0`;throw new Error("firstAdhocWhose: adhoc mode reached with no adhoc entries")}function r9(n,e,r){return!n||Ze(ve(n).source)!==e?!1:en(n,r)!==null}const Sx={point:"point",bounds:"bounds",sample:"distribution"},Ax="timeline-nav",J2="whose-mode-toggle",rw={yours:"Yours",adhoc:"Adhoc",metho:"AI"},Lx="jprob-selector",z2="sticky-bar",tw="--sticky-bar-h",bu="options-controls",iw="options-expand-btn",Q2="options-panel",Zr="options-panel-open",ow="visible",uw="settings ▴",aw="settings ▾",sw="jprob-selector-select",cw="error-console-btn",lw="view-url-btn";function Ix(n,e,r,t,i){Tx(n),kx(i),Px(n,r),Nx(e),Mx(t)}function kx(n){const e=document.getElementById(J2);if(e){if(n.available.length<=1){e.hidden=!0,e.innerHTML="";return}e.hidden=!1,e.innerHTML=Y2.filter(r=>n.available.includes(r)).map(r=>`<button class="mode-radio-btn${r===n.active?" active":""}" data-whose-mode="${r}">${rw[r]}</button>`).join("")}}function Rx(){const n=document.getElementById(J2);return n!==null&&!n.hidden}function Cx(n,e,r,t,i=X2){var c;const o=new Set(n.map(l=>l.aid).filter(i)),u=[],a=new Set;let s=r;for(const l of n){const f=l.family;if(f===void 0){o.has(l.aid)&&u.push({label:l.aid,value:l.aid});continue}if(a.has(f))continue;a.add(f);const p=(c=[...e[f]??[]].reverse().find(h=>o.has(h.aid)))==null?void 0:c.aid;p!==void 0&&(u.push({label:f,value:p}),f===t&&(s=p))}return{options:u,selectedValue:s}}function Mx(n,e=_x(),r=yx(),t=X2){const i=document.getElementById(Lx);if(!i)return;const{options:o,selectedValue:u}=Cx(e,r,n.currentAid,n.currentFamily,t);if(o.length<=1){i.hidden=!0,i.innerHTML="";return}i.hidden=!1;const a=o.map(s=>`<option value="${s.value}"${s.value===u?" selected":""}>${s.label}</option>`).join("");i.innerHTML=`<select id="${sw}" class="jprob-selector-select" title="Switch to another problem">${a}</select>`}function Nx(n){const e=document.getElementById(Ax);if(!e)return;const{prev:r,next:t,version:i}=n;if(r===void 0&&t===void 0&&i===void 0){e.hidden=!0,e.innerHTML="";return}e.hidden=!1;const o=[];r!==void 0&&o.push(`<button class="timeline-nav-btn" data-timeline-target="${r}" title="Previous version">◀</button>`),o.push(`<span class="timeline-version">${i??""}</span>`),t!==void 0&&o.push(`<button class="timeline-nav-btn" data-timeline-target="${t}" title="Next version">▶</button>`),e.innerHTML=o.join("")}function Tx(n){const e=document.getElementById(bu);if(!e)return;const r=e.classList.contains(Zr);let i=`<button class="options-expand-btn${r?" active":""}" id="${iw}">${r?uw:aw}</button>`;i+=`<div class="${Q2}${r?` ${ow}`:""}">`,i+=xx(n),i+=`<div class="options-buttons-row"><button id="${lw}" class="g-btn" title="Copy a link to this view (and put it in the address bar)">url</button> <button id="keymap-btn" class="g-btn">keymap</button> <button id="${cw}" class="g-btn">error console</button> <button id="save-all-data-btn" class="g-btn">save all data</button> <button id="load-all-data-btn" class="g-btn">load all data</button></div>`,i+="</div>",e.innerHTML=i,r&&e.classList.add(Zr)}function fw(){const n=document.getElementById(bu);return(n==null?void 0:n.classList.contains(Zr))??!1}function Z2(n){const e=document.getElementById(bu);if(!e||e.classList.contains(Zr)===n)return;e.classList.toggle(Zr,n);const r=e.querySelector(".options-expand-btn"),t=e.querySelector(`.${Q2}`);r&&(r.textContent=n?uw:aw,r.classList.toggle("active",n)),t&&t.classList.toggle(ow,n)}function qx(){Z2(!fw())}function Fx(){Z2(!0)}function dw(){Z2(!1)}function Ox(){const n=document.getElementById(bu),e=document.getElementById(z2);if(!n||!e)return null;const t=(n.classList.contains(Zr)?n.querySelector(`.${Q2}`):null)??e;return{left:n.getBoundingClientRect().left,bottom:t.getBoundingClientRect().bottom}}function Px(n,e){const r=document.getElementById("response-type-toggle");r&&pw(r,n,e)}function pw(n,e,r){const t=[];for(const[i,o]of Object.entries(Sx)){const u=i===e.ui.inputMode?" active":"",a=r[i]?"":" hidden";t.push(`<button class="atog-btn${u}${a}" data-mode="${i}">${o}</button>`)}n.innerHTML="<span>response type</span>"+t.join("")}function kt(n){return`pref-${n}`}const Dx=new Set(["inputMode"]);function xx(n){const e=[];for(const r of zp)if(!Dx.has(r.id)){if(r.type==="boolean"){const t=r.id,i=n.ui[t]?" checked":"";e.push(`<div class="options-pref-row"><label for="${kt(r.id)}" class="option-label">${r.description}</label><input id="${kt(r.id)}" class="option-checkbox pref-checkbox" type="checkbox" data-pref="${r.id}"${i}></div>`)}else if(r.type==="integer"){const i=cn()[r.id]??r.default,o=r.min===void 0?"":` min="${r.min}"`,u=r.step===void 0?"":` step="${r.step}"`;e.push(`<div class="options-pref-row"><label for="${kt(r.id)}" class="option-label">${r.description}</label><input id="${kt(r.id)}" class="pref-number-input" type="number" data-pref-int="${r.id}" value="${i}"${o}${u}></div>`)}}return e.join("")}const Bx=`<p>Joint dependence lets you say how your distributions move <em>together</em>, beyond what each one says on its own. You express it as <b>named latents</b>: each latent is one shared influence, described in your own words, with a signed <b>loading</b> on each quantity it touches.</p>
<ul>
<li>A latent&#39;s description must make its <b>positive direction</b> explicit — the loading signs are relative to it, and nothing else records what the latent means.</li>
<li><code>+0.7</code>: the quantity tends to be high when the latent is high. <code>−0.7</code>: it tends to be low. <code>0</code>: the latent does not touch it.</li>
<li><b>Your marginals are unchanged.</b> Whatever dependence you state, each quantity&#39;s own distribution stays exactly as you gave it. Dependence changes only how the quantities move together, never what any one of them looks like alone.</li>
<li>Per quantity, the squared loadings across all latents may sum to at most 1. Whatever is left over is that quantity&#39;s own independent variation; at a total of 1 the latents fully determine it.</li>
</ul>
<h4>Two legitimate stories, same math</h4>
<ul>
<li><b>Correlated error in your own estimates</b> — e.g. &quot;if one of my probabilities is too high, the others likely are too&quot;. The conclusion&#39;s spread then reflects distrust of your own estimation.</li>
<li><b>A shared, unresolved state of the world</b> the problem does not condition on — one mechanism, source, or scenario standing behind several quantities. Its loadings take their signs from that causal structure and are often mixed-sign. The conclusion&#39;s spread then reflects irreducible uncertainty given the evidence.</li>
</ul>
<p>Say which one you mean. And note that dependence does not only widen: loading a ratio&#39;s numerator and its denominator in the same direction makes them rise and fall together, which <em>narrows</em> that ratio. That is sometimes exactly the belief you hold — but check the independent-vs-joint comparison, rather than reasoning from the signs alone.</p>`,hw={joint_dependence:Bx,"srcquote-explainer":"Text in this style is source material related to the entity above it."},Hx="joint_dependence";function Ux(){return hw[Hx]}function jx(){return"<p>Version numbers are semantic versioning inspired, incremented according to:</p><ul><li><b>1st/major</b>: Improved and clean enough over previous major version to run a full set of AI trials.</li><li><b>2nd/minor</b>: Improvements/fixes affecting semantics</li><li><b>3rd/patch</b>: Everything else</li></ul>"}function Bi(n){return n?`<b>${K(n)}</b>`:"<i>(unbound)</i>"}const Wx={toggle_mnames:"toggle between short and long names for some defined entities",goto_top:"jump to top of the page",goto_calculator:"jump to the Calculator section",switch_whose_mode:"switch between <b>Yours</b> / <b>Adhoc</b> / <b>AI results</b> modes, restoring the last viewed preset in each",toggle_srcquotes_inlined:`toggle source quotes inlined in the text (mirroring what AI agents see when source quotes are enabled) vs. accessible by clicking the <button class="srcquote-glyph" type="button" tabindex="-1">❝</button> buttons. This is a view setting only — it never changes what a preset's estimator actually read`,toggle_framing_notes:"show or hide all framing notes at once, without disturbing which ones the problem itself enables",goto_next_section:"jump to the next top-level section, wrapping from the last back to the first",toggle_framing_note_abbrev:"abbreviate or unabbreviate every long framing note at once — the same switch as the <b>Abbreviate framing notes</b> preference",toggle_settings_shortcuts:"show the <b>settings</b> dropdown together with this shortcut list; press it again with both showing to hide both"};function Gx(){return'<li>When relevant (not all Adhoc / AI-results presets have all response modes), you can switch between estimation response modes <b>point</b> | <b>bounds</b> | <b>distribution</b>. For each subjective variable (the cards in the <b>Estimation</b> section) they mean:<ul><li><b>point</b>: A single real value. Use for low-effort estimation.</li><li><b>bounds</b>: A real interval given as <code>low high</code>. Use to incorporate flat uncertainty, without any sampling interpretation. The Calculator will show the interval each compute formula can range over, given your intervals: "≅ [low, high]" means the shown interval is exactly that range; "⫇ [low, high]" means it is an outer enclosure — the true range may be narrower, but never wider. Displayed endpoints are rounded outward, so rounding also never narrows a shown interval.</li><li><b>distribution</b>: A belief distribution; Monte Carlo sampling evaluates. This is the advanced mode. The <b>settings</b> dropdown on the left side of the sticky bar has parameters for controlling the number of iterations, in case the defaults make your experience too slow. When in distribution mode, click the help icon in any Estimation card to learn what you can put in the input fields. The Calculator section has a redundant single input box for the same data; useful for copy-pasting from a read-only Adhoc or AI result.</li></ul></li>'}function Vx(){return Y2.map(n=>`<b>${rw[n]}</b>`).join(" | ")}function Xx(n,e){const r=mt(),t=[];e.whoseModeToggle&&t.push(`<p>The ${Vx()} buttons switch between entering your own estimations and interacting with preset responses; the ${Bi(r.switch_whose_mode)} shortcut cycles through the same modes. For more control, scroll down to the Calculator section (${Bi(r.goto_calculator)} shortcut) to switch between:</p><ul><li>entering your own estimations (<b>Yours</b>), and when available,</li><li>viewing adhoc prepared estimations (<b>Adhoc…</b> dropdown), or</li><li>viewing AI agent estimation trial results (<b>AI results…</b> dropdown).</li></ul>`),t.push("<h4>Sticky bar</h4><ul>"),t.push("<li>On the far right of the sticky bar, there's a dropdown for switching to a different judgement problem (hidden when there are no others).</li>"),ew(n.aid)!==void 0&&t.push("<li>This judgement problem is part of a development timeline exposition sequence. The ◀ and/or ▶ buttons move backward and forward in the timeline.</li>"),e.exampleFoldControls&&t.push("<li><b>open</b> unfolds all examples, <b>close</b> folds all. <b>peek</b> saves your fold state and temporarily unfolds all examples, and <b>unpeek</b> restores your fold state.</li>"),t.push(Gx()),t.push("</ul>"),t.push("<h4>Keyboard shortcuts</h4><p>There are just a few, which you can customize by clicking the <b>keymap</b> button in the sticky bar's <b>settings</b> dropdown. Currently:</p>"),t.push("<ul>");for(const i of vt){const o=Wx[i.id]??K(i.description);t.push(`<li>${Bi(r[i.id])} : ${o}</li>`)}return t.push("</ul>"),t.join("")}function Yx(){const n=Object.values(pr).filter(i=>!i.hasTruncWindow),e=Object.entries(pr).filter(([,i])=>i.hasTruncWindow),r=n.map(i=>`<li><code>${K(i.signature)}</code> — ${K(i.note)}</li>`),t=e.map(([i])=>`<code>${K(i)}(…)</code>`);return`<p>Enter your belief distribution over this variable in one of three forms:</p><ul><li><b>Point mass</b>: <code>pointmass(x)</code> — all probability mass at <code>x</code>.</li><li><b>Distribution family</b> (preferred when one fits your belief), e.g. <code>lognormal(-4.2, 1.3)</code>. Available families:<ul>${r.join("")}</ul>Every family is automatically truncated to the variable's allowed range and renormalized, so e.g. <code>normal(mu, sigma)</code> on a probability variable means a normal truncated to [0, 1]. The ${t.join(", ")} variants take two extra trailing arguments <code>lo, hi</code> — an explicit truncation window — for when your belief has its own truncation. Most important for a heavy-tailed family on an unbounded-range variable (e.g. a Student-t on a log-odds variable), where automatic truncation is a no-op.</li><li><b>Piecewise linear density</b> (fully general): space-separated pairs <code>(x1 y1) (x2 y2) …</code>, minimum 2. x values are sorted positions spanning your uncertainty, anywhere in the variable's allowed range; y values are unnormalized density heights in [0, 1].</li></ul>`}function Kx(n,e){const r=mt(),t=[];return t.push("<p><b>This help text changes based on Yours/Adhoc/Whose mode.</b></p>"),Vk(ve(e).source)&&t.push("<p>To see detailed results for an entry, click the <b>pin</b> checkbox.</p>","<p><b>CONFUSING UI NOTE</b>: when Model × Version × Effort is unchecked, the slider does load a different record, but the changes are too far above your viewport to see them without scrolling.</p>","<p>To see AIs' plain text reasoning and notes, click <b>View payload</b>. If you do this with an <b>All AI</b> or <b>(pooled)</b> entry selected, you'll get tabs for the different trials.</p>","<p>To explore compute formula results other than the main conclusion, there's a drop down below next to the <b>formulas</b> / <b>raw responses</b> radio buttons.</p>","<p>Use the <b>stats display</b> dropdown to switch between seeing probabilities as percentages or as odds.</p>"),n.has_cparams()&&Pe(e)&&t.push("<p><b>fix</b> | <b>free</b> toggle (next to <b>Yours</b>): <b>fix</b> requires setting each parameter to one of its allowed values in the <b>Parameters</b> section, and your estimates apply to that one setting. <b>free</b> opens a code editor in which you write a function giving your estimates for every allowed parameter combination at once.</p>"),Pe(e)?t.push(`<p>To modify a preset, switch to the <b>Adhoc</b> or <b>AI results</b> view (${Bi(r.switch_whose_mode)} shortcut), select an entry from the dropdown to the right of this help icon, and find the <b>Copy to Yours</b> button.</p><p>From scratch: Suggest starting with <b>point</b> response mode, then try <b>bounds</b>. If you're experienced or courageous, try <b>distribution</b> and start with <code>tri(low, peak, hi)</code> or <code>uniform(low, high)</code> lines. For full syntax of distribution inputs accepted, find the help icon in any of <b>Estimation</b> cards above.</p>`):X7(ve(e).source)&&t.push("<p>To modify this preset for your own estimation, find the <b>Copy to Yours</b> button below.</p><p>For advanced users, in <b>distribution</b> mode, there is a second type of <b>Copy to Yours</b> button inside the <b>Joint-dependence specification</b> section (latent factor copula), when the entry states one.</p>"),t.join("")}function Jx(n){const e=K(Qi("mcItersPerClickPerPlot")),r=K(Qi("mcItersInitialPerPlot")),t=n.itersPerTarget.toLocaleString(),i=["<p>The <b>+</b> button above pools another block of Monte&nbsp;Carlo draws into this plot and redraws it. Draws accumulate — nothing already sampled is thrown away — so the plot starts cheap and you click until its shape stops moving.</p>"];return n.targetCount===1?i.push(`<p>Each click adds <b>${t}</b> draws to this plot`+(n.pooledSampleCount===null?".</p>":` (pooled so far: ${n.pooledSampleCount.toLocaleString()}).</p>`)):i.push(`<p>Each click adds <b>${t}</b> draws to <i>each</i> of the ${n.targetCount.toLocaleString()} plotted points/cells. The setting is a budget for the whole plot, divided equally among the targets it draws, so a plot over a wider axis gets fewer draws per point per click than a single density does — same cost per click, spread thinner.</p>`),n.pooledSampleCount===null?i.push("<p>This plot's button stays yellow: it displays a mean per point/cell rather than a distribution, so the green convergence indicator — which reads a distribution's quantiles — does not apply. Means converge as 1/&radic;n; a few clicks go a long way.</p>"):n.converged?i.push(`<p><b>Green</b>: with ${n.convergedMinSamples.toLocaleString()} or more pooled draws, every quantile of the displayed distribution is pinned to within ${n.displayEpsilon} probability mass at ${n.confidencePercent}% confidence (a distribution-free Dvoretzky&ndash;Kiefer&ndash;Wolfowitz bound). Green is not a stop sign: further clicks keep sharpening the curve.</p>`):i.push(`<p><b>Yellow &rarr; green</b>: the button turns green at ${n.convergedMinSamples.toLocaleString()} pooled draws, the point where every quantile of the displayed distribution is pinned to within ${n.displayEpsilon} probability mass at ${n.confidencePercent}% confidence (a distribution-free Dvoretzky&ndash;Kiefer&ndash;Wolfowitz bound).</p>`),i.push(`<p>To change how much a click adds, open <b>settings</b> in the bar at the top of the page and edit <b>${e}</b>. <b>${r}</b> sets what a plot draws before you click at all.</p>`),i.join("")}function zx(n){const e=K(Qi("mcItersPerClickPerPlot")),r=K(Qi("mcItersInitialPerPlot"));return`<p>This plot is drawn from a <b>precomputed</b> curve: the result generator sampled it once, with a far larger draw budget than a browser would spend, and stored the shape. Nothing is being sampled here.</p><p>The <b>&#9654;</b> button above runs <b>${n.initialIters.toLocaleString()}</b> live Monte&nbsp;Carlo draws in your browser from the same estimates, and draws them on the same axis beside the stored curve; both summaries stay on screen so you can compare the numbers. The button then becomes the ordinary <b>+</b> accumulate control, adding <b>${n.itersPerTarget.toLocaleString()}</b> draws per click until the live shape stops moving.</p><p>Expect the live curve to be the rougher of the two at first — it is the same distribution with fewer draws behind it. A difference that survives many clicks is worth a closer look.</p><p>Both draw counts are settings: open <b>settings</b> in the bar at the top of the page and edit <b>${r}</b> and <b>${e}</b>.</p>`}const Vt="mc-accumulate-btn",vw="mc-activate-live-btn",Ao="mc-accumulate-help",Qx="mc-converged",Hi=.05,Nt=.01;function Zx(n){if(!Number.isInteger(n)||n<1)throw new Error(`distributionCount must be a positive integer, got ${n}`);return Math.ceil(Math.log(2*n/Hi)/(2*Nt*Nt))}const mw=16;function hi(n,e,r,t,i=1){var f,d;const o=n.parentElement;if(!(o!=null&&o.classList.contains("resizable-canvas-wrapper"))){console.warn("attachMcAccumulateButton: canvas is not wrapped by makeResizable");return}(f=o.querySelector(`.${Vt}`))==null||f.remove(),(d=o.querySelector(`.${Ao}`))==null||d.remove();const u=t.itersPerTarget,a=Zx(i),s=r!==null&&r>=a,c=document.createElement("button");c.className=Vt+(s?` ${Qx}`:""),c.dataset.mcPoolToken=e,c.textContent="+",c.title=r===null?`Pool ${u.toLocaleString()} more MC samples into every plotted point/cell.`:`Pool ${u.toLocaleString()} more MC samples into this plot (n=${r.toLocaleString()}). `+(s?`Green: every displayed quantile is within ${Nt} probability mass at ${(1-Hi)*100}% confidence; further clicks keep sharpening.`:`Turns green when every displayed quantile is within ${Nt} probability mass at ${(1-Hi)*100}% confidence.`),o.appendChild(c);const l=Mr(()=>Jx({itersPerTarget:u,targetCount:t.targetCount,pooledSampleCount:r,converged:s,convergedMinSamples:a,displayEpsilon:Nt,confidencePercent:(1-Hi)*100}),mw);l.classList.add(Ao),o.appendChild(l)}function eB(n,e,r,t){var a,s;const i=n.parentElement;if(!(i!=null&&i.classList.contains("resizable-canvas-wrapper"))){console.warn("attachLiveMcActivationButton: canvas is not wrapped by makeResizable");return}(a=i.querySelector(`.${Vt}`))==null||a.remove(),(s=i.querySelector(`.${Ao}`))==null||s.remove();const o=document.createElement("button");o.className=`${Vt} ${vw}`,o.dataset.mcLiveActivationToken=e,o.textContent="▶",o.title=`Run ${r.toLocaleString()} live Monte Carlo draws in your browser and overlay them on the precomputed curve. Nothing is sampled until you ask.`,i.appendChild(o);const u=Mr(()=>zx({initialIters:r,itersPerTarget:t.itersPerTarget}),mw);u.classList.add(Ao),i.appendChild(u)}const nB=256,er=new Map,Lo=new Map;let rB=1;function tB(n){const e=_r(n),r=er.get(e);if(r!==void 0)return er.delete(e),er.set(e,r),r;const t={token:`mclive-${rB++}`,activated:!1};for(er.set(e,t),Lo.set(t.token,t);er.size>nB;){const i=er.keys().next().value;Lo.delete(er.get(i).token),er.delete(i)}return t}function iB(n){const e=Lo.get(n);return e===void 0?!1:(e.activated=!0,!0)}function oB(){er.clear(),Lo.clear()}const uB=1;function bw(n,e){const r=Math.max(1,e),t=i=>Math.max(uB,Math.floor(i/r));return{mcIters:t(n.mcItersInitialPerPlot),mcItersPerClick:t(n.mcItersPerClickPerPlot)}}function et(n){return bw(n,1)}const aB="no finite mean (the tail is too heavy for one)";function $r(n,e,r,t,i){return'<div class="result-main">'+(i===""?"":`${i} = `)+`mean ≈ <span class="hl">${Be(n.mean,e,r,t)}</span>, median ≈ <span class="hl">${Be(n.median,e,r,t)}</span></div><div class="result-detail">90% interval: [${Be(n.p5,e,r,t)}, ${Be(n.p95,e,r,t)}]</div>`}function sB(n,e,r){return{valueHtml:`mean <span class="derived-value">${Be(n.mean,e,r,"monte-carlo")}</span>, median <span class="derived-value">${Be(n.median,e,r,"monte-carlo")}</span>`,detailHtml:`<span class="derived-detail">· 90% interval [${Be(n.p5,e,r,"monte-carlo")}, ${Be(n.p95,e,r,"monte-carlo")}]</span>`}}function cB(n,e,r,t){const i=u=>Be(u,e,r,"deterministic"),o=n.mean===null?`<span class="hl">${aB}</span>`:`mean = <span class="hl">${i(n.mean)}</span>`;return'<div class="result-main">'+(t===""?"":`${t}: `)+`${o}, median = <span class="hl">${i(n.median)}</span></div><div class="result-detail">90% interval: [${i(n.p5)}, ${i(n.p95)}]</div>`}const eh="Your beliefs specification yields infinite or undefined values. Consider using non-zero numbers.",lB="≅",fB="⫇",gw="The interval computed for this formula from the bounds responses is unbounded on both sides, i.e. carries no information. Point and distribution results are unaffected.";function _w(n,e){return n===-1/0&&e===1/0}function yw(n){return n==="tight"?lB:fB}const Io="from point estimates";function Tt(n){return n.some(Number.isNaN)?"undefined":n.some(e=>!Number.isFinite(e))?"infinite":null}function ko(){return`<p class="arg-warning">${eh}</p>`}function dB(n,e,r,t){const i=ao(n,"floor"),o=ao(e,"ceil");return`[${Be(i,r,t)}, ${Be(o,r,t)}]`}function pB(n,e,r,t){const i=(n+e)/2;return Number.isNaN(i)?"undefined":Be(i,r,t)}function Ro({labelHtml:n,value:e,typeHighlevel:r,statsDisplay:t,labelPrefix:i="",detail:o}){const u=Tt([e]);if(u==="undefined")throw new Error(eh);return`<div class="result-main">${K(i)}${n} = <span class="hl">${Be(e,r,t)}</span></div>`+(o===void 0?"":`<div class="result-detail">${K(o)}</div>`)+(u==="infinite"?ko():"")}function nh({labelHtml:n,lo:e,hi:r,tightness:t,typeHighlevel:i,statsDisplay:o,midpointDetailSuffix:u=""}){if(e>r)throw new Error(`Invalid calculated bounds: lo=${e} is greater than hi=${r}`);const a=Tt([e,r]);if(a==="undefined")throw new Error(eh);if(_w(e,r))return`<div class="result-detail">${K(gw)}</div>`;const s=ao(e,"floor"),c=ao(r,"ceil"),l=a==="infinite"&&t==="tight";return`<div class="result-main">${n} ${yw(t)} [<span class="hl">${Be(s,i,o)}</span>, <span class="hl">${Be(c,i,o)}</span>]</div><div class="result-detail">midpoint: ${pB(e,r,i,o)}${K(u)}</div>`+(l?ko():"")}function Xt(n,e){if(typeof n!="number"||Number.isNaN(n))throw new Error(`${e}: expected a number, got ${JSON.stringify(n)}`);return n}function Dp(n,e){if(!Array.isArray(n)||n.length!==2)throw new Error(`${e}: expected [lo, hi], got ${JSON.stringify(n)}`);const r=Xt(n[0],`${e} lo`),t=Xt(n[1],`${e} hi`);if(r>t)throw new Error(`${e}: lo=${r} is greater than hi=${t}`);return[r,t]}function Ew(n,e){return Xt(n.point[e],`Code result point data for ${JSON.stringify(e)}`)}function ww(n,e){return Dp(n.bounds[e],`Code result bounds data for ${JSON.stringify(e)}`)}function $w(n,e,r){var o;const t=(o=n.compform_point_val)==null?void 0:o[e];if(t!==void 0)return Xt(t,`Code result computed point value for ${e}`);if(!r)throw new Error(`Code result has no computed point value or form implementation for ${e}`);const i=r.params.map(u=>Ew(n,u));return Xt(r.point(i),`Directly evaluated code result point value for ${e}`)}function Sw(n,e,r){var u,a;const t=(u=n.compform_bounds_val)==null?void 0:u[e];if(t!==void 0){const s=(a=n.compform_bounds_tightness)==null?void 0:a[e];return{interval:Dp(t,`Code result computed bounds value for ${e}`),tightness:s==="tight"?"tight":"loose"}}if(!r)throw new Error(`Code result has no computed bounds value or form implementation for ${e}`);if(!r.bounds)return null;if(!r.boundsTightness)throw new Error(`form ${e} has a bounds implementation but no boundsTightness — regenerate form_fns`);const i=r.params.map(s=>ww(n,s)),o=r.bounds(i);return{interval:Dp([o.lo,o.hi],`Directly evaluated code result bounds value for ${e}`),tightness:r.boundsTightness}}const Aw=[{name:"low",abbreviation:"L"},{name:"medium",abbreviation:"M"},{name:"high",abbreviation:"H"}],Br=[...Aw,{name:"xhigh",abbreviation:"XH"},{name:"max",abbreviation:"MAX"}],t9=[{model:"haiku",abbreviation:"h",agentCli:"claudecode",efforts:Aw},{model:"luna",abbreviation:"gl",agentCli:"codex",efforts:Br},{model:"sonnet",abbreviation:"s",agentCli:"claudecode",efforts:Br},{model:"terra",abbreviation:"gt",agentCli:"codex",efforts:Br},{model:"opus",abbreviation:"o",agentCli:"claudecode",efforts:Br},{model:"sol",abbreviation:"gs",agentCli:"codex",efforts:Br},{model:"fable",abbreviation:"f",agentCli:"claudecode",efforts:Br}],Lw=":";function gu(n){const e=t9.findIndex(r=>r.model===n);if(e<0)throw new Error(`unknown model ${JSON.stringify(n)}. Add it to MODEL_EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return{config:t9[e],order:e}}function hB(n){return gu(n).config.agentCli}function rh(n,e){const{config:r}=gu(n),t=r.efforts.findIndex(i=>i.name===e);if(t<0)throw new Error(`unknown effort ${JSON.stringify(e)} for model ${JSON.stringify(n)}. Add it to MODEL_EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return{config:r.efforts[t],order:t}}function vB(n,e){return n===e?0:n<e?-1:1}function th(n,e,r){if(e.length===0)throw new Error(`makeModelVersionEffortKey: empty version not supported (model=${n}).`);if(r===null)throw new Error(`makeModelVersionEffortKey: null effort not supported (model=${n}, version=${e}). Null-effort records do not participate in the model/version/effort sweep; pooled aggregates are handled separately.`);return[n,encodeURIComponent(e),r].join(Lw)}function bt(n){const e=n.split(Lw);if(e.length!==3||e.some(u=>u.length===0))throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(n)}`);const[r,t,i]=e;let o;try{o=decodeURIComponent(t)}catch{throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(n)}`)}if(o.length===0)throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(n)}`);return{model:r,version:o,effort:i}}function mB(n){const{model:e,version:r,effort:t}=bt(n);return`${e} ${r} ${t}`}function bB(n){const{model:e,version:r,effort:t}=bt(n),{config:i}=gu(e),{config:o}=rh(e,t);return`${i.abbreviation}${r}${o.abbreviation}`}function gB(n){const{model:e,version:r}=bt(n);return`${e} ${r}`}function _B(n){const{model:e,effort:r}=bt(n);return rh(e,r).config.abbreviation}function yB(n){const e=Array.from(n,r=>{const t=bt(r),i=gu(t.model).order,o=rh(t.model,t.effort).order;return{key:r,parsed:t,modelOrder:i,effortOrder:o}});return e.sort((r,t)=>r.modelOrder-t.modelOrder||vB(r.parsed.version,t.parsed.version)||r.effortOrder-t.effortOrder),e.map(({key:r})=>r)}function ih(n,e,r,t={}){const i=e.svar_entries().map(p=>p.bareName);let o=!1,u=!1;for(const p of n){if(p.lloads===null||p.lloads===void 0)continue;o=!0;const h=Xo(p.lloads,i);if(h!==null)throw new Error(h);u||(u=Yo(p.lloads))}if(!o)return{hasDependence:!1,specHtml:""};const a=Jt(e);if(a.length!==i.length)throw new Error(`joint-dependence disclosure has ${i.length} eligible variables but ${a.length} display labels`);const s=new Map(i.map((p,h)=>[p,Ae(a[h],r)])),c=new Map;n.forEach((p,h)=>{const m=p.lloads??null,v=JSON.stringify(m),b=c.get(v);b?b.trialNumbers.push(h+1):c.set(v,{spec:m,trialNumbers:[h+1]})});const l=n.length>1,f=[...c.values()].map(p=>{const h=l?`<div class="lloads-trial-label">${wB(p.trialNumbers)}</div>`:"";if(p.spec===null)return`<section class="lloads-spec-group">${h}<div class="lloads-independent-trial">No named latents; sampled independently.</div></section>`;const m=EB(h,p.spec,t.offerCopyToYours??!1),v=p.spec.latents.map(b=>{const g=Object.entries(b.loadings).map(([_,y])=>{const E=s.get(_);if(E===void 0)throw new Error(`joint-dependence disclosure has no display label for loaded variable ${_}`);return`<li><span class="lloads-svar-label">${E}</span>: <span class="lloads-loading">${$B(y)}</span></li>`}).join("");return`<article class="lloads-latent"><div class="lloads-latent-name">${K(b.name)}</div><div class="lloads-latent-description">${K(b.description)}</div><ul class="lloads-loadings">${g}</ul></article>`}).join("");return`<section class="lloads-spec-group">${m}${v}</section>`}).join(""),d=u&&!(t.keepFolded??!1);return{hasDependence:u,specHtml:`<details class="lloads-spec-view"${d?" open":""}><summary>Joint-dependence specification</summary><div class="lloads-spec-body">${f}</div></details>`}}function EB(n,e,r){const t=r?`<button class="copy-to-yours-btn lloads-copy-to-yours-btn" type="button" data-lloads-spec="${se(JSON.stringify(e))}" title="Copy this joint-dependence specification into your editable Yours inputs">Copy to Yours</button>`:"";return n===""&&t===""?"":`<div class="lloads-group-header">${n}${t}</div>`}function wB(n){return`${n.length===1?"Trial":"Trials"} ${n.join(", ")}`}function $B(n){if(Object.is(n,-0)||n===0)return"0";const e=Math.abs(n).toPrecision(6).replace(/\.?0+$/,"");return n>0?`+${e}`:`−${e}`}function Iw(n){switch(n){case"series":return{independent:{color:xP,bandFill:BP},joint:{color:dE,bandFill:pE}};case"stored":return{independent:{color:mo,bandFill:null},joint:{color:mo,bandFill:hE}};case"live":return{independent:{color:bo,bandFill:null},joint:{color:bo,bandFill:vE}}}}const kw="Independent",Rw="Stated joint";function Cw(n){const e=(r,t)=>{switch(t){case"series":return r;case"stored":return`${r} (precomputed)`;case"live":return`${r} (live MC)`}};return n.flatMap(r=>{const t=Iw(r);return[{label:e(kw,r),color:t.independent.color,dashed:!0},{label:e(Rw,r),color:t.joint.color,dashed:!1}]})}function Co(n){const{comparison:e,typeHighlevel:r,statsDisplay:t,targetLabelHtml:i}=n,o=n.canvasId===void 0?"":qE(n.canvasId,n.legend??Cw(["series"]));return`<div class="result-label">Joint-dependence comparison (${n.provenanceDetail})</div><div class="dependence-comparison density-result-row"><div class="dependence-comparison-stats density-result-text"><div class="dependence-series-label dependence-series-independent">${kw}</div>`+$r(e.independent,r,t,"monte-carlo",i)+`<div class="dependence-series-label dependence-series-joint">${Rw}</div>`+$r(e.joint,r,t,"monte-carlo",i)+`</div>${o}</div>`}function oh(n){const e=n.box.querySelector(`#${n.canvasId}`);if(e===null)return!1;const r=[];for(const o of n.layers){const u=Iw(o.palette),a=i9(o.comparison.independent,u.independent,!0),s=i9(o.comparison.joint,u.joint,!1);if(a===null||s===null)return!1;r.push(a,s)}if(r.length===0)return!1;const t=Ar(n.typeHighlevel),i=()=>go(e,r,t);i(),jn(e,i,{stateHost:n.box,stateKey:n.resizeStateKey}),LE(e,r,n.typeHighlevel);for(const{comparison:o}of n.layers){const{independent:u,joint:a}=o;if(u.mcPoolToken!==a.mcPoolToken)throw new Error("CRN-paired density results do not share one MC pool token");a.mcPoolToken!==null&&hi(e,a.mcPoolToken,a.samples.length,{itersPerTarget:n.mcItersPerClick,targetCount:1},r.length)}return!0}function i9(n,e,r){const t=n.samples??n.densityCurve;return t===null?null:{source:t,p5:n.p5,p95:n.p95,color:e.color,dashed:r,bandFill:e.bandFill}}const SB=5,AB="rgb(59, 130, 246)",LB="Dots show each trial's own precomputed mean.",Ui="code-density",Mw="code-line",Nw="code-heatmap";function IB(n){return n.startsWith("form:")?n.slice(5):n}function Tw(n,e,r){return n.form.filter(t=>B9(t,e)).map(t=>{const i=(r==null?void 0:r[t.id])??null;return{kind:"formula",id:t.id,bareId:IB(t.id),typeHighlevel:(i==null?void 0:i.typeHighlevel)??t.type_highlevel,isConclusion:t.id===n.config.conclusion_form,formEntry:i}})}function qw(n){return n.svar_entries().map(({bareName:e,decl:r})=>({kind:"raw_response",bareName:e,typeHighlevel:r.type_highlevel,isConclusion:!1}))}function kB(n,e,r){const t=Tw(n,e.ui.inputMode,r),i=qw(n);if(e.ui.codePlotTargetKind==="raw_response"&&i.length>0)return i.find(a=>a.bareName===e.ui.codePlotRawResponseName)??i[0];if(t.length===0)return i[0]??null;const u=e.ui.codePlotFormulaId||n.config.conclusion_form;return t.find(a=>a.id===u)??t.find(a=>a.id===n.config.conclusion_form)??t[0]}function RB(n){var e,r;return{key:n.id,paramKeys:((e=n.formEntry)==null?void 0:e.params)??null,combine:((r=n.formEntry)==null?void 0:r.point)??null}}function Fw(n,e){if(e===null)throw new Error(`Distribution view for ${n.id} has no sample evaluator`);return e}function Ow(n,e){if(e.paramKeys===null||e.combine===null)throw new Error(`Distribution view for ${n.id} requires its generated form implementation`);return{paramKeys:e.paramKeys,combine:e.combine}}function uh(n,e){return e.kind==="raw_response"?Ew(n,e.bareName):$w(n,e.id,e.formEntry)}function CB(n,e){return e.kind==="raw_response"?{interval:ww(n,e.bareName),tightness:"tight"}:Sw(n,e.id,e.formEntry)}function MB(n){if(n.length===0)return null;const e=[...n].sort((i,o)=>i-o),r=i=>{const o=Math.min(e.length-1,Math.max(0,Math.round(i*(e.length-1))));return e[o]},t=n.reduce((i,o)=>i+o,0)/n.length;return{count:n.length,mean:t,median:r(.5),p5:r(.05),p95:r(.95)}}function _u(n,e){return MB(n.trials.map(r=>uh(r,e)))}function un(n,e){for(const r of n.cparam_combos){let t=!0;for(const i of n.cparam_names)if(r.cparams[i]!==e[i]){t=!1;break}if(t)return r}return null}function ah(n,e,r){const t=new Set;for(const i of n.cparam_combos){const o=i.cparams[e];o!==void 0&&t.add(o)}return r?r.filter(i=>typeof i!="boolean"&&t.has(i)):Array.from(t)}function Pw(n,e){let r=0;for(const t of n)e[t]===!1&&r++;return r}function NB(n,e){return n.filter(r=>e[r]===!1)}function Dw(n,e){var t,i;if(e.kind!=="formula")return;const r=e.isConclusion?n.precomputed:(t=n.precomputed_aux_forms)==null?void 0:t[e.id];return(i=RE(r,B2(n.trials)))==null?void 0:i.stats}function TB(n,e){return e.kind!=="formula"||!e.isConclusion?null:CE(n.precomputed)}function qB(n,e){if(e.kind!=="formula"||!e.isConclusion)return[];const r=B2(n.trials)?Yr:dn,t=[];for(const i of n.trials){const o=i.conclusion_mc_mean;if(o===void 0)continue;const u=o[r]??o[dn];u!==void 0&&t.push(u)}return t}function yu(n,e,r){var o;if(((o=e.formEntry)==null?void 0:o.sampleStage)!==void 0)throw new Error(`Distribution view for ${e.id} is not supported for formulas with E[·] barriers (v1)`);const{paramKeys:t,combine:i}=Ow(e,r);for(const u of n.trials){const a=t.filter(s=>!nE(u.sample[s]));if(a.length>0)throw new Error(`Code distribution MC for ${r.key}: a trial lacks sample data for parameter(s) ${JSON.stringify(a)}`)}return{key:r.key,params:t,typeHighlevel:e.typeHighlevel,point:i,bounds:null,boundsTightness:null}}function xw(n,e,r){const t=Hn(n.trials,"sample",r);if(t.mode!=="sample")throw new Error(`Exact distribution for ${e.bareName} needs sample-mode inputs`);return t.trials.map((i,o)=>{const u=i.specs[e.bareName];if(u===void 0)throw new Error(`Exact distribution for ${e.bareName}: trial ${o+1} of ${t.trials.length} has no sample response`);return fo(u,t.ranges[e.bareName])})}function o9(n,e,r,t,i){const o=yu(n,e,r);return Un(o,Hn(n.trials,"sample",t),{onIncompleteTrial:"error",mcIters:i.mcIters,mcItersPerClick:i.mcItersPerClick})}function FB(n,e,r,t,i){const o=yu(n,e,r);return EP(o,Hn(n.trials,"sample",t),{onIncompleteTrial:"error",mcIters:i.mcIters,mcItersPerClick:i.mcItersPerClick})}function OB(n,e,r,t,i,o,u){if(e.kind==="raw_response"){const c=gE(xw(n,e,t));if(c===null){u&&(u.encountered=!0);return}return{mean:c}}const a=Dw(n,e);if(a)return a;const s=FB(n,e,Fw(e,r),t,i);return s.mcPoolToken!==null&&(o==null||o.add(s.mcPoolToken)),s}function PB(n,e,r,t){let i=r?t:1;for(const o of n)i*=(e.get(o)??[]).length;return i}function DB(n){if(n===void 0||n==="probability")return[0,1]}function xB(n){return n==="probability"?[0,1]:void 0}function gt(n,e,r,t){const i=e.ui.cparamValues[n];if(i!==void 0&&t.includes(i))return i;if((r==null?void 0:r.default_value)!==void 0){const o=r.default_value;if(t.includes(o))return o}return t[0]}function BB(n,e,r,t){const i=ch(n,e,t.ui.modelEffortSweepScope);if(Bw(i).length>=2&&!t.ui.modelEffortPinned||Pw(n.cparam_names,t.ui.cparamPinned)>0)return null;const a={};for(const s of n.cparam_names){const c=r.find_cparam(s),l=ah(n,s,c==null?void 0:c.allowed_values);a[s]=gt(s,t,c,l)}return un(n,a)}const HB="model × version × effort",UB="effort";function Eu(n){return n==="effort"?UB:HB}function _t(n,e){return e==="effort"?_B(n):bB(n)}function sh(n,e){return n.aggregate==="model_size__version"?{model:n.model,version:n.version,poolId:n.pool_id}:e!==null&&n.model===e.model&&n.version===e.version&&n.pool_id===e.poolId?e:null}function ch(n,e,r){const t=e.filter(o=>o.effort!==null&&o.pool_id===n.pool_id),i=sh(n,r);return i===null?t:t.filter(o=>o.model===i.model&&o.version===i.version)}function Bw(n){const e=new Set;for(const r of n)r.effort!==null&&e.add(th(r.model,r.version,r.effort));return yB(e)}function vi(n,e){for(const r of n)if(r.effort!==null&&th(r.model,r.version,r.effort)===e)return r;return null}function jB(n){if(n.length===0)return;const e=n[0].cparam_names;for(let r=1;r<n.length;r++){const t=n[r].cparam_names;if(t.length!==e.length||!t.every((o,u)=>o===e[u]))throw new Error(`validateRecsCparamCompat: incompatible cparam_names: ${JSON.stringify(e)} vs ${JSON.stringify(t)}. Cannot sweep across model/version/effort with mismatched cparam shapes.`)}}function WB(n,e,r,t,i,o,u,a,s){const c=r.map(String);if(i==="average"){const d=[],p=[];for(let h=0;h<r.length;h++){const m={...t,[e]:r[h]},v=un(n,m);if(!v)continue;const b=a?a(v):v.precomputed[dn];if(b){d.push({x:h,y:b.mean});for(const g of(s==null?void 0:s(v))??[])p.push({x:h,y:g})}}return{series:[{points:d,label:"avg"}],xLabels:c,scatterPoints:p}}if(!o||!u)throw new Error("extractSweepLineSeries separate mode requires combine and paramKeys");const l=n.count,f=[];for(let d=0;d<l;d++){const p=[];for(let h=0;h<r.length;h++){const m={...t,[e]:r[h]},v=un(n,m);if(!v||!v.trials[d])continue;const b=v.trials[d],g=o(u.map(_=>b.point[_]));p.push({x:h,y:g})}f.push({points:p,label:`trial ${d+1}`})}return{series:f,xLabels:c,scatterPoints:[]}}function GB(n,e,r,t,i,o,u){const a=r.map(String),s=i.map(String),c=[];for(let l=0;l<i.length;l++){const f=[];for(let d=0;d<r.length;d++){const p={...o,[e]:r[d],[t]:i[l]},h=un(n,p);if(!h){f.push(null);continue}const m=u?u(h):h.precomputed[dn];f.push((m==null?void 0:m.mean)??null)}c.push(f)}return{cells:c,xLabels:a,yLabels:s,xAxisLabel:e,yAxisLabel:t}}function VB(n,e,r,t,i,o){const u=r.map(String);if(i==="average"){const s=[];for(let c=0;c<r.length;c++){const l={...t,[e]:r[c]},f=un(n,l);if(!f)continue;const d=_u(f,o);d&&s.push({x:c,y:d.mean})}return{series:[{points:s,label:"avg"}],xLabels:u,scatterPoints:[]}}const a=[];for(let s=0;s<n.count;s++){const c=[];for(let l=0;l<r.length;l++){const f={...t,[e]:r[l]},d=un(n,f),p=d==null?void 0:d.trials[s];if(!p)continue;const h=uh(p,o);c.push({x:l,y:h})}a.push({points:c,label:`trial ${s+1}`})}return{series:a,xLabels:u,scatterPoints:[]}}function XB(n,e,r,t,i,o,u){const a=r.map(String),s=i.map(String),c=[];for(let l=0;l<i.length;l++){const f=[];for(let d=0;d<r.length;d++){const p={...o,[e]:r[d],[t]:i[l]},h=un(n,p),m=h?_u(h,u):null;f.push((m==null?void 0:m.mean)??null)}c.push(f)}return{cells:c,xLabels:a,yLabels:s,xAxisLabel:e,yAxisLabel:t}}function Hw(n,e){const r=new Map;for(const t of e){const i=gB(n[t.x]),o=r.get(i);o?o.push(t):r.set(i,[t])}return Array.from(r,([t,i])=>({points:i,label:t,...OD}))}function YB(n,e,r,t="model_version_effort",i,o){const u=e.map(c=>_t(c,t)),a=[],s=[];for(let c=0;c<e.length;c++){const l=vi(n,e[c]);if(!l)continue;const f=un(l,r);if(!f)continue;const d=i?i(f):f.precomputed[dn];if(d){a.push({x:c,y:d.mean});for(const p of(o==null?void 0:o(f))??[])s.push({x:c,y:p})}}return{series:Hw(e,a),xLabels:u,scatterPoints:s}}function KB(n,e,r,t,i,o="model_version_effort",u){const a=t.map(String),s=e.map(l=>_t(l,o)),c=[];for(let l=0;l<e.length;l++){const f=[],d=vi(n,e[l]);for(let p=0;p<t.length;p++){if(!d){f.push(null);continue}const h={...i,[r]:t[p]},m=un(d,h);if(!m){f.push(null);continue}const v=u?u(m):m.precomputed[dn];f.push((v==null?void 0:v.mean)??null)}c.push(f)}return{cells:c,xLabels:a,yLabels:s,xAxisLabel:r,yAxisLabel:Eu(o)}}function JB(n,e,r,t,i="model_version_effort"){const o=e.map(a=>_t(a,i)),u=[];for(let a=0;a<e.length;a++){const s=vi(n,e[a]);if(!s)continue;const c=un(s,r);if(!c)continue;const l=_u(c,t);l&&u.push({x:a,y:l.mean})}return{series:Hw(e,u),xLabels:o,scatterPoints:[]}}function zB(n,e,r,t,i,o,u="model_version_effort"){const a=t.map(String),s=e.map(l=>_t(l,u)),c=[];for(let l=0;l<e.length;l++){const f=[],d=vi(n,e[l]);for(let p=0;p<t.length;p++){if(!d){f.push(null);continue}const h={...i,[r]:t[p]},m=un(d,h),v=m?_u(m,o):null;f.push((v==null?void 0:v.mean)??null)}c.push(f)}return{cells:c,xLabels:a,yLabels:s,xAxisLabel:r,yAxisLabel:Eu(u)}}function QB(n,e,r,t){var l;const i=Tw(n,e.ui.inputMode,t),o=qw(n);if(i.length===0&&o.length===0)return"";const u=(r==null?void 0:r.kind)??"formula",a=(r==null?void 0:r.kind)==="formula"?r.id:e.ui.codePlotFormulaId||n.config.conclusion_form,s=(r==null?void 0:r.kind)==="raw_response"?r.bareName:e.ui.codePlotRawResponseName||(((l=o[0])==null?void 0:l.bareName)??"");let c='<div class="code-plot-target-controls">';if(c+='<div class="code-plot-target-kind">',c+=`<label><input type="radio" name="code-plot-target-kind" class="code-plot-target-kind-radio" value="formula"${u==="formula"?" checked":""}${i.length===0?" disabled":""}> formulas</label>`,c+=`<label><input type="radio" name="code-plot-target-kind" class="code-plot-target-kind-radio" value="raw_response"${u==="raw_response"?" checked":""}${o.length===0?" disabled":""}> raw responses</label>`,c+="</div>",u==="formula")if(i.length>1){c+='<select class="code-plot-formula-select" aria-label="Plot formula">';for(const f of i)c+=`<option value="${se(f.id)}"${f.id===a?" selected":""}>${K(f.bareId)}</option>`;c+="</select>"}else i.length===1&&(c+=`<span class="code-plot-target-single">${K(i[0].bareId)}</span>`);else if(o.length>1){c+='<select class="code-plot-raw-response-select" aria-label="Plot raw response">';for(const f of o)c+=`<option value="${se(f.bareName)}"${f.bareName===s?" selected":""}>${K(f.bareName)}</option>`;c+="</select>"}else o.length===1&&(c+=`<span class="code-plot-target-single">${K(o[0].bareName)}</span>`);return c+="</div>",c}function Uw(n,e,r,t,i,o,u){if(!i||!o)return"";const a={};for(const s of n.cparam_names){const c=t.find_cparam(s),l=r.get(s)??[];if(l.length===0)return"";const f=gt(s,e,c,l);if((c!==void 0?Oo(c.allowed_values):typeof f=="string"?"string":"number")==="string"){a[s]=f;continue}const p=Number(f);if(!Number.isFinite(p))return"";a[s]=p}return i(a)?"":`<p class="arg-warning">${u(o)}</p>`}function jw(n,e,r,t){const i=r===null?[null,...e]:e,o=r===null?0:i.indexOf(r),u=r===null?n.label:t==="effort"?bt(r).effort:mB(r);return{sliderKeys:i,mveIdx:o,currentLabel:u}}function ZB(n,e,r,t,i,o,u,a,s,c,l,f,d){const p=Uw(e,t,i,r,l,f,d);let h=QB(r,t,s,c);if(h+=p+'<div class="cparam-controls">',o.length>=2){const{sliderKeys:m,mveIdx:v,currentLabel:b}=jw(e,o,u,a),g=t.ui.modelEffortPinned;h+='<div class="cparam-row model-version-effort-row">',h+=`<label class="cparam-label">${a==="effort"?"Effort":"Model × Version × Effort"}</label>`,h+='<input type="range" class="model-version-effort-slider" ',h+=`min="0" max="${m.length-1}" step="1" `,h+=`value="${v>=0?v:0}" `,h+=`data-keys='${K(JSON.stringify(m))}'>`,h+=`<span class="cparam-value-label">${K(b)}</span>`,h+='<label class="cparam-pin-label"><input type="checkbox" ',h+='class="model-version-effort-pin-checkbox"',h+=`${g?" checked":""}> pin</label>`,h+="</div>"}for(const m of e.cparam_names){const v=r.find_cparam(m),b=i.get(m)??[];if(b.length===0)continue;const g=gt(m,t,v,b),_=b.indexOf(g),y=t.ui.cparamPinned[m]!==!1,E=(v==null?void 0:v.longname)??m;h+='<div class="cparam-row">',h+=`<label class="cparam-label">${K(E)}</label>`,h+=`<input type="range" class="cparam-slider" data-cparam="${m}" `,h+=`min="0" max="${b.length-1}" step="1" value="${_>=0?_:0}" `,h+=`data-values='${K(JSON.stringify(b))}'>`,h+=`<span class="cparam-value-label">${K(String(g))}</span>`,h+='<label class="cparam-pin-label"><input type="checkbox" class="cparam-pin-checkbox" ',h+=`data-cparam="${m}"${y?" checked":""}> pin</label>`,h+="</div>"}h+="</div>",n.innerHTML=h}function Ci(n){return console.warn(`code viewer controls sync: ${n}; falling back to a full controls rebuild`),!1}function eH(n,e,r,t,i,o,u,a,s,c,l){const f=n.querySelector(".cparam-controls");if(!f)return Ci("no existing .cparam-controls block");const d=Uw(e,t,i,r,s,c,l),p=n.querySelector(":scope > .arg-warning");d===""?p==null||p.remove():p?p.outerHTML=d:f.insertAdjacentHTML("beforebegin",d);const h=f.querySelector(".model-version-effort-row");if(o.length>=2!==(h!==null))return Ci("model/version/effort row does not match the current sweep structure");if(h){const{mveIdx:v,currentLabel:b}=jw(e,o,u,a),g=h.querySelector(".model-version-effort-slider"),_=h.querySelector(".cparam-value-label"),y=h.querySelector(".model-version-effort-pin-checkbox");if(!g||!_||!y)return Ci("model/version/effort row is missing expected controls");g.value=String(v>=0?v:0),_.textContent=b,y.checked=t.ui.modelEffortPinned}for(const v of e.cparam_names){const b=i.get(v)??[];if(b.length===0)continue;const g=r.find_cparam(v),_=gt(v,t,g,b),y=b.indexOf(_),E=f.querySelector(`.cparam-slider[data-cparam="${v}"]`),A=E==null?void 0:E.closest(".cparam-row"),L=A==null?void 0:A.querySelector(".cparam-value-label"),C=A==null?void 0:A.querySelector(".cparam-pin-checkbox");if(!E||!L||!C)return Ci(`cparam row for ${v} is missing expected controls`);E.value=String(y>=0?y:0),L.textContent=String(_),C.checked=t.ui.cparamPinned[v]!==!1}return!0}function nH(n){return`<div class="sweep-mode-toggle"><button class="sweep-mode-btn${n==="average"?" active":""}" data-sweep-mode="average">Average</button><button class="sweep-mode-btn${n==="separate"?" active":""}" data-sweep-mode="separate">Separate</button></div>`}const lh='<div class="code-info">No data for this parameter combination.</div>';function fh(n,e,r){if(n.kind==="formula"&&n.isConclusion)return pi(e,r);let t,i;if(n.kind==="raw_response")t=`svar:${n.bareName}`,i=n.bareName;else{const u=e.form.find(a=>a.id===n.id);if(!u)throw new Error(`Code plot formula ${n.id} is not in the template`);t=H9(n.id,u.sexpr),i=n.bareId}const o=U9(t);return Ae(e.get_display_expr(o)??i,r)}function rH(n,e,r,t,i,o,u){const a=un(e,r);if(!a){n.innerHTML=lh;return}if(!t){n.innerHTML='<div class="code-info">No point plot target is available.</div>';return}if(a.trials.length===0)throw new Error("Code point result has no trials for the selected parameter combination");const s=a.trials.map(d=>uh(d,t)),c=s.reduce((d,p)=>d+p,0)/s.length,l=t.typeHighlevel,f=s.length===1?Io:`per trial: ${s.map(d=>Be(d,l,u.ui.probAsOdds)).join(", ")}`;n.innerHTML=Ro({labelHtml:fh(t,i,o),value:c,typeHighlevel:l,statsDisplay:u.ui.probAsOdds,labelPrefix:s.length===1?"":"mean ",detail:f})}function tH(n,e,r,t,i,o,u){const a=un(e,r);if(!a){n.innerHTML=lh;return}if(!t){n.innerHTML='<div class="code-info">No bounds plot target is available.</div>';return}if(!a2(e)||a.trials.length!==1)throw new Error(`Code bounds display requires one trial; record count=${e.count}, selected combo trials=${a.trials.length}`);const s=CB(a.trials[0],t);if(!s){n.innerHTML=`<div class="code-info">${K(fi)}</div>`;return}const[c,l]=s.interval;n.innerHTML=nh({labelHtml:fh(t,i,o),lo:c,hi:l,tightness:s.tightness,typeHighlevel:t.typeHighlevel,statsDisplay:u.ui.probAsOdds})}function u9(n,e,r,t,i,o,u,a,s,c,l){Ww(n,e,r,t,i,o,u,a,s,c,l,!1)}function a9(n,e,r,t,i,o,u,a,s,c,l){Ww(n,e,r,t,i,o,u,a,s,c,l,!0)}function Ww(n,e,r,t,i,o,u,a,s,c,l,f){var ie,G;s2(r);const d=kB(i,u,s),p=new Map;for(const B of r.cparam_names){const H=i.find_cparam(B),ge=ah(r,B,H==null?void 0:H.allowed_values);p.set(B,ge)}const h=sh(r,u.ui.modelEffortSweepScope),m=ch(r,t,u.ui.modelEffortSweepScope),v=h===null?"model_version_effort":"effort",b=Bw(m),g=b.length>=2,_=r.effort!==null?th(r.model,r.version,r.effort):null,y=g&&!u.ui.modelEffortPinned;if(y&&jB(m),!(f&&eH(n,r,i,u,p,b,_,v,c,l,B=>Ae(B,o)))){const B=document.getElementById("calculator-whose-toggle");if(B&&((ie=B.querySelector(".payload-view-btn"))==null||ie.remove(),QD(r))){const H=document.createElement("button");H.className="payload-view-btn",H.textContent="View payload",H.addEventListener("click",()=>ZD(r,i.get_svar_bare_names())),B.appendChild(H)}ZB(n,r,i,u,p,b,_,v,d,s,c,l,H=>Ae(H,o))}const A=Pw(r.cparam_names,u.ui.cparamPinned),L=NB(r.cparam_names,u.ui.cparamPinned),C=A+(y?1:0),I=u.ui.inputMode,S=u.ui.codeSweepMode,w={};for(const B of r.cparam_names)if(u.ui.cparamPinned[B]!==!1){const H=i.find_cparam(B),ge=p.get(B)??[];w[B]=gt(B,u,H,ge)}const $=(d==null?void 0:d.kind)==="formula"&&d.isConclusion,k=(d==null?void 0:d.typeHighlevel)??i.config.conclusion_type_highlevel,R=$?DB(i.config.conclusion_type_highlevel):xB(k),F=k==="probability"?SB:void 0;if(I==="bounds"){C>0?e.innerHTML='<div class="code-info">Pin every axis to display code-response bounds.</div>':tH(e,r,w,d,i,o,u);return}let T=null;if(I==="sample"){if(!d){e.innerHTML='<div class="code-info">No distribution plot target is available.</div>';return}if(d.kind==="formula"&&((G=d.formEntry)==null?void 0:G.sampleStage)!==void 0){e.innerHTML='<div class="code-info">Distribution view is not yet supported for formulas containing E[·] aggregation.</div>';return}d.kind==="formula"&&(T=RB(d))}const U=I==="sample"?O9(i.svar_entries()):null,O=PB(L,p,y,b.length),D=bw(a,O),q=new Set,ne={encountered:!1},W=d!==null&&U!==null?B=>OB(B,d,T,U,D,q,ne):void 0,Y=T!==null&&d!==null?B=>qB(B,d):void 0,Z=I;if(C===0)if(I==="point")rH(e,r,w,d,i,o,u);else{if(d===null||U===null)throw new Error("Sample-mode code density routing has no resolved sample target");lH(e,r,u,a,w,d,T,U,i,o,fh(d,i,o))}else if(C===1)y?pH(e,m,b,w,F,d,Z,v,W,Y):fH(e,r,L[0],p,w,S,T,F,d,Z,W,Y);else if(C===2)if(y){const B=L[0],H=p.get(B)??[];hH(e,m,b,B,H,w,R,d,Z,v,W)}else dH(e,r,L,p,w,R,d,Z,W);else{const B=r.cparam_names.length-(y?1:2);e.innerHTML=`<div class="code-info"><p>Pin at least ${B} parameter${B===1?"":"s"} to visualize results.</p><p>Currently ${A} cparam${A===1?"":"s"} unpinned${y?" + model/version/effort axis":""}.</p></div>`}if(q.size>0){const B=e.querySelector("#code-line-canvas, #code-heatmap-canvas");B&&hi(B,iE([...q]),null,{itersPerTarget:D.mcItersPerClick,targetCount:O})}ne.encountered&&e.insertAdjacentHTML("beforeend",aH)}const iH="Precomputed",oH="Live MC";function s9(n,e,r,t,i){if(r.combine===null||r.paramKeys===null)return null;const o=yP(yu(n,e,r),Hn(n.trials,"sample",t),{onIncompleteTrial:"error",mcIters:i.mcIters,mcItersPerClick:i.mcItersPerClick});return tB([...o,"target",r.key])}function c9(n,e,r,t,i){if(e!==null&&e.mcPoolToken!==null){hi(n,e.mcPoolToken,e.sampleCount,{itersPerTarget:t.mcItersPerClick,targetCount:1},i);return}r!==null&&eB(n,r.token,t.mcIters,{itersPerTarget:t.mcItersPerClick})}const uH='<div class="code-info">The stated dependence below does not change this view: coupling describes how responses move together, not how any one of them is distributed on its own.</div>',aH='<div class="code-info">Some parameter combinations are not plotted: the response there has no finite mean, so there is no value to place on this axis. Its distribution view still shows an exact median and interval.</div>';function sH(n,e,r,t){const i=n.map(o=>`${Be(o.x,r,t,"deterministic")} (${o.count} of ${e})`).join(", ");return`<div class="code-info">Point-mass responses: ${K(i)}. Each is drawn as a spike whose height is its share of the responses, not a density.</div>`}function cH(n,e,r,t,i,o,u){const a=xw(e,r,t),s=iD(a),c=_E(a),l=sD(a),f=r.typeHighlevel,d=i.ui.probAsOdds,p=a.length,h=[`<div class="result-label">Exact (${p} agent trial${p===1?"":"s"})</div>`,'<div class="density-result-row"><div class="density-result-text">'+cB(s,f,d,o)+'</div><canvas id="code-density-canvas" width="400" height="200"></canvas></div>'];c.length>0&&h.push(sH(c,p,f,d)),u.hasDependence&&h.push(uH),h.push(u.specHtml),n.innerHTML=h.join("");const m=n.querySelector("#code-density-canvas");if(!m)return;const v=yE(l,f),b=[s.p5,s.p95],g=()=>Gt(m,l,v,b);g(),jn(m,g,{stateHost:n,stateKey:Ui}),IE(m,l,v,f,b)}function lH(n,e,r,t,i,o,u,a,s,c,l){const f=un(e,i);if(!f){n.innerHTML=lh;return}const d=o.typeHighlevel,p=[],h=ih(f.trials,s,c,{offerCopyToYours:!Pe(r.ui.whose)});if(o.kind==="raw_response"){cH(n,f,o,a,r,l,h);return}const m=Fw(o,u),v=et(t),b=r.ui.probAsOdds,g=`${f.trials.length} agent trial${f.trials.length===1?"":"s"}`;if(h.hasDependence){const C=TB(f,o),I=C===null?null:uE(C),S=I!==null&&I.independent.densityCurve!==null&&I.joint.densityCurve!==null?I:null,w=S===null?null:s9(f,o,m,a,v),k=S===null||((w==null?void 0:w.activated)??!1)?C2(yu(f,o,m),Hn(f.trials,"sample",a),{onIncompleteTrial:"error",mcIters:v.mcIters,mcItersPerClick:v.mcItersPerClick}):null,R=[];S!==null&&R.push({comparison:S,palette:"stored"}),k!==null&&R.push({comparison:k,palette:R.length===0?"series":"live"});const F=Cw(R.map(T=>T.palette));if(I!==null&&p.push(Co({comparison:I,typeHighlevel:d,statsDisplay:b,targetLabelHtml:l,canvasId:S===null?void 0:"code-density-canvas",legend:F,provenanceDetail:`precomputed, ${g}`})),k!==null&&p.push(Co({comparison:k,typeHighlevel:d,statsDisplay:b,targetLabelHtml:l,canvasId:S===null?"code-density-canvas":void 0,legend:F,provenanceDetail:`live Monte Carlo, n=${k.joint.samples.length.toLocaleString()}`})),p.push(h.specHtml),n.innerHTML=p.join(""),oh({box:n,canvasId:"code-density-canvas",layers:R,typeHighlevel:d,resizeStateKey:Ui,mcItersPerClick:v.mcItersPerClick}),k===null){const T=n.querySelector("#code-density-canvas");T&&c9(T,null,w,v,R.length*2)}return}const _=Dw(f,o),y=m.combine!==null&&m.paramKeys!==null;!y&&_===void 0&&Ow(o,m);const E=`<div class="result-label">Precomputed (independent, ${g})</div>`;if(_!==void 0&&_.density_curve!==void 0){const C=_.density_curve,I=y?s9(f,o,m,a,v):null,S=I!=null&&I.activated?o9(f,o,m,a,v):null,w=S===null?[]:[{label:iH,color:mo,dashed:!1},{label:oH,color:bo,dashed:!1}];p.push(E+'<div class="density-result-row"><div class="density-result-text">'+$r(_,d,b,"monte-carlo",l)+"</div>"+(w.length===0?'<canvas id="code-density-canvas" width="400" height="200"></canvas>':qE("code-density-canvas",w))+"</div>"),S!==null&&p.push(`<div class="result-label">Live MC (independent, n=${S.samples.length.toLocaleString()})</div><div class="density-result-row"><div class="density-result-text">`+$r(S,d,b,"monte-carlo",l)+"</div></div>"),n.innerHTML=p.join("");const $=n.querySelector("#code-density-canvas");if($){const k=[{source:C,p5:_.p5,p95:_.p95,color:mo,dashed:!1,bandFill:hE}];S!==null&&k.push({source:S.samples,p5:S.p5,p95:S.p95,color:bo,dashed:!1,bandFill:vE});const R=Ar(d),F=()=>go($,k,R);F(),jn($,F,{stateHost:n,stateKey:Ui}),LE($,k,d),c9($,S===null?null:{mcPoolToken:S.mcPoolToken,sampleCount:S.samples.length},I,v,k.length)}return}if(_!==void 0&&p.push(E+$r(_,d,b,"monte-carlo",l)),!y){n.innerHTML=p.join("");return}const A=o9(f,o,m,a,v);p.push(`<div class="result-label">Live MC (independent, n=${A.samples.length.toLocaleString()})</div><div class="density-result-row"><div class="density-result-text">`+$r(A,d,b,"monte-carlo",l)+'</div><canvas id="code-density-canvas" width="400" height="200"></canvas></div>'),n.innerHTML=p.join("");const L=n.querySelector("#code-density-canvas");if(L){const C=Ar(d);zr(L,A.samples,A.p5,A.p95,C),jn(L,()=>zr(L,A.samples,A.p5,A.p95,C),{stateHost:n,stateKey:Ui}),AE(L,A.samples,A.p5,A.p95,d),A.mcPoolToken!==null&&hi(L,A.mcPoolToken,A.samples.length,{itersPerTarget:v.mcItersPerClick,targetCount:1})}}function Gw(n){return n.length===0?{}:{scatterOverlay:{points:n,color:AB}}}function Vw(n){return n.length===0?"":`<div class="code-info" style="margin-top: 6px;">${LB}</div>`}function fH(n,e,r,t,i,o,u,a,s,c,l,f){const d=t.get(r)??[],p=c==="sample",h=e.count>1&&!(p&&(u==null?void 0:u.combine)===null),m=h?o:"average",{series:v,xLabels:b,scatterPoints:g}=p?WB(e,r,d,i,m,(u==null?void 0:u.combine)??void 0,(u==null?void 0:u.paramKeys)??void 0,l,f):s?VB(e,r,d,i,m,s):{series:[],xLabels:d.map(String),scatterPoints:[]};let _='<div class="code-plot-container">';_+='<canvas id="code-line-canvas" class="code-plot-canvas" width="800" height="500"></canvas>',h&&(_+=nH(m),m==="separate"?_+=`<div class="code-info" style="margin-top: 6px;">${p?"Separate mode uses point estimates only (no distributional MC).":"Separate mode shows per-trial point values."}</div>`:p||(_+='<div class="code-info" style="margin-top: 6px;">Average mode uses point values only.</div>')),_+=Vw(g),_+="</div>",n.innerHTML=_;const y=n.querySelector("#code-line-canvas");if(y){const E={xLabels:b,xAxisLabel:r,...a===void 0?{}:{yRangePaddingPercent:a},...Gw(g)};wo(y,v,E),jn(y,()=>wo(y,v,E),{stateHost:n,stateKey:Mw})}}function dH(n,e,r,t,i,o,u,a,s){const c=r[0],l=r[1],f=t.get(c)??[],d=t.get(l)??[],p=a==="sample",h=p?GB(e,c,f,l,d,i,s):u?XB(e,c,f,l,d,i,u):{cells:[],xLabels:f.map(String),yLabels:d.map(String),xAxisLabel:c,yAxisLabel:l};o&&(h.valueRange=o);const m=Math.max(80,Math.min(120,Math.floor(1e3/f.length))),v=Math.max(60,Math.min(90,Math.floor(800/d.length))),b=60+f.length*m+60,g=10+d.length*v+35;let _='<div class="code-plot-container">';_+=`<canvas id="code-heatmap-canvas" class="code-plot-canvas" width="${b}" height="${g}"></canvas>`,p||(_+='<div class="code-info" style="margin-top: 6px;">Cells show average point values.</div>'),_+="</div>",n.innerHTML=_;const y=n.querySelector("#code-heatmap-canvas");y&&($o(y,h),jn(y,()=>$o(y,h),{stateHost:n,stateKey:Nw}))}function pH(n,e,r,t,i,o,u,a,s,c){const l=u==="sample",{series:f,xLabels:d,scatterPoints:p}=l?YB(e,r,t,a,s,c):o?JB(e,r,t,o,a):{series:[],xLabels:r.map(v=>_t(v,a)),scatterPoints:[]};let h='<div class="code-plot-container">';h+='<canvas id="code-line-canvas" class="code-plot-canvas" width="800" height="500"></canvas>',l||(h+='<div class="code-info" style="margin-top: 6px;">Average mode uses point values only.</div>'),h+=Vw(p),h+="</div>",n.innerHTML=h;const m=n.querySelector("#code-line-canvas");if(m){const v={xLabels:d,xAxisLabel:Eu(a),...i===void 0?{}:{yRangePaddingPercent:i},...Gw(p)};wo(m,f,v),jn(m,()=>wo(m,f,v),{stateHost:n,stateKey:Mw})}}function hH(n,e,r,t,i,o,u,a,s,c,l){const f=s==="sample",d=f?KB(e,r,t,i,o,c,l):a?zB(e,r,t,i,o,a,c):{cells:[],xLabels:i.map(String),yLabels:r.map(_=>_t(_,c)),xAxisLabel:t,yAxisLabel:Eu(c)};u&&(d.valueRange=u);const p=Math.max(80,Math.min(120,Math.floor(1e3/i.length))),h=Math.max(60,Math.min(90,Math.floor(800/r.length))),m=60+i.length*p+60,v=10+r.length*h+35;let b='<div class="code-plot-container">';b+=`<canvas id="code-heatmap-canvas" class="code-plot-canvas" width="${m}" height="${v}"></canvas>`,f||(b+='<div class="code-info" style="margin-top: 6px;">Cells show average point values.</div>'),b+="</div>",n.innerHTML=b;const g=n.querySelector("#code-heatmap-canvas");g&&($o(g,d),jn(g,()=>$o(g,d),{stateHost:n,stateKey:Nw}))}const rr={VISIBLE_AOPTS:"visible-aopts",TCHOICE:"tchoice",CPARAMS_SECTION:"cparams",TEXT_DEFINITIONS:"text-definitions",INTERPRETED_SYMBOL_SEMANTICS:"interpreted-symbols",DEFINED_SYMBOLS:"defined-symbols",AXIOMS:"axioms",SIMPLIFYING_ASSUMPTIONS:"simplifying-assumptions",SVARS:"svars",COMPUTED_FORMULAS:"formulas",FRAMING_ROOT:"framing-notes-root",FRAMING_EXPLAINER:"framing-notes-explainer",SRCQUOTE_EXPLAINER:"srcquote-explainer",CALCULATOR:"calculator"},Xw="estimator-instructions",Yw="estimator-instructions-fold",vH="Estimator Instructions",mH={TEXT_DEFINITIONS:n=>Nk(n),INTERPRETED_SYMBOL_SEMANTICS:n=>Tk(n),DEFINED_SYMBOLS:n=>Mk(n),AXIOMS:n=>Mv(n,{simplifying:!1}),SIMPLIFYING_ASSUMPTIONS:n=>Mv(n,{simplifying:!0}),COMPUTED_FORMULAS:n=>qk(n)},bH=`<div class="dag-legend">Each formula computes its left-hand side. <span class="dag-glyph">↖</span> marks a value computed by an earlier formula (click to jump to it); <span class="dag-glyph">↘</span> marks a left-hand side used by a later formula; hovering either highlights every occurrence of the value. Undecorated leaf names are estimated directly — each names a card in <a href="#${rr.SVARS}-section">Estimation</a> (click to jump to it).</div>`,gH="DERIVED_FORMS",Kw="derived-forms-fold",_H="Computed auxiliary formulas",yH="CALCULATOR_RESULTS",Jw="stats-display-control";function EH(n){const e=new Set;for(const r of n.layout.sections.html)if("subentries"in r)for(const t of r.subentries)typeof t=="object"&&"formid"in t&&e.add(t.formid);return e}function wH(n){const e=n.config.conclusion_form,r=EH(n);return n.form.filter(t=>t.id!==e&&!r.has(t.id)).map(t=>t.id)}function $H(n,e,r){let t;if(r)t={...r,unresolvedRefs:r.unresolvedRefs??new Set};else{const o=Kp(n),u=e7(n,r7(n,{},"plainnum"),"plainnum"),a=u.option_value_or("show_typical_examples",n7),s=u.option_value_or("srcquotes_inlined",!1),c={};for(const l of u.get_option_bare_names())c[l]=u.option_value(l);t={jprobInstance:u,showTypical:a,srcquotesInlined:s,refLookup:o,displayOptionValues:c,unresolvedRefs:new Set}}const i=[];_p in n.get_fgroups()&&i.push(`<details id="${Yw}" class="hir-fold estimator-instructions-fold" hidden><summary>${vH}</summary><div id="${Xw}" class="hir-fold-body"></div></details>`);for(const o of n.layout.sections.html)i.push(SH(o,n,t));return{html:i.join(""),unresolvedRefs:[...t.unresolvedRefs].sort()}}function SH(n,e,r){if("chunkid"in n)return zw(n.chunkid,e,r,n.style)??"";if("subentries"in n){if(n.delegation_id!=="CALCULATOR")throw new Error("Only expected use of this currently-hacky-structured feature is for the Calculator section (delegation_id 'CALCULATOR').");const a=rr[n.delegation_id],s=n.subentries.map(c=>AH(c,e,r,n.delegation_id));return`<section id="${a}-section"><h2 id="${a}-section-header">${n.header}</h2>${s.join("")}</section>`}const{delegation_id:t,header:i}=n,o=rr[t];if(!o)throw new Error("Expected `delegation_id` field here to be an element of DelegatedLayoutEntryId.");if((t==="FRAMING_ROOT"||t==="FRAMING_EXPLAINER")&&!e.has_standard_rendering_framing_notes()||t==="SRCQUOTE_EXPLAINER"&&!e.has_srcquotes())return"";const u=mH[t];if(u){const a=u(r),s=i!=null?`<h2 id="${o}-section">${i}</h2>`:"",c=t==="COMPUTED_FORMULAS"?bH:"";return a.trim()?s+c+a:""}return t==="FRAMING_EXPLAINER"||t==="SRCQUOTE_EXPLAINER"?`<div id="${o}-section"><div id="${o}-content"></div></div>`:`<section id="${o}-section"><h2 id="${o}-section-header">${i??""}</h2><div id="${o}-content"></div></section>`}function AH(n,e,r,t){if(typeof n=="string"){if(n===gH){const a=wH(e).map(s=>`<div id="derived-${Mi(s)}" class="derived-form" data-form-id="${s}"></div>`).join("");return a===""?"":`<details id="${Kw}" class="hir-fold derived-forms-fold"><summary>${_H}</summary><div class="hir-fold-body derived-forms-fold-body">${a}</div></details>`}const u=`${Mi(t)}-${Mi(n)}`;return n===yH?`<div id="${Jw}"></div><div id="${u}"></div>`:`<div id="${u}"></div>`}if("chunkid"in n)return zw(n.chunkid,e,r,n.style)??"";const i=n.formid;return`<div id="${`derived-${Mi(i)}`}" class="derived-form" data-form-id="${i}"></div>`}function zw(n,e,r,t){const i=e.find_textchunk_defn(n);if(i===void 0)throw new Error(`Layout references textchunk "${n}", which the jprob template does not declare`);if(!i)return null;const o=Ae(i,r);switch(t){case"title":return`<h1 class="arg-title">${o}</h1>`;case"subtitle":return`<p class="arg-subtitle">${o}</p>`;case"note":return`<div class="hir-loud-note">${o}</div>`;case"warning":return`<p class="arg-warning">${o}</p>`;default:return`<div class="textchunk">${o}</div>`}}function Mi(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-$/,"").replace(/^-/,"")}const LH="root";function Qw(n){return`framing-fgroup-${n}`}const IH=14;function kH(n,e,r){return`<strong>${K(n)}${e}:</strong><span class="framing-note-content">${r}</span>`}function dh(n){return n.jprobInstance.enabled_flabels()}function Zw(n){return n.showFramingNotes!==!1}function ph(n,e){const r=dh(e);return!Zw(e)||!r.length?null:n.get_framing_layout(r)}function RH(n,e,r){var t;return((t=n[e])==null?void 0:t[r])??!0}function e$(n,e,r,t){const i=RH(r,t,n.note.id),o=n.children.map(v=>e$(v,e,r,t)).join(""),u=i?" visible":"",a=i?" active":"",s=IH*(n.depth-1),c=K(n.note.flabel),l=Rn(n.note.srcquotes,e),f=l.atStart+Ae(n.note.defn,e)+l.atEnd,[d,p]=e.jprobInstance.fgroup_of_flabel(n.note.flabel),h=kH(p.label_prefix,c,f),m=se(Qw(d));return`<div class="framingnote${u} ${m}" style="margin-left: ${s}px" data-framing-anchor="${se(t)}" data-framing-id="${se(n.note.id)}"><div class="framing-note-summary"><button class="framing-fold-btn${a}" data-framing-anchor="${se(t)}" data-framing-id="${se(n.note.id)}" title="Toggle framing note">&plusmn;</button>`+h+"</div>"+o+"</div>"}function hh(n,e,r,t){return n.layout_nodes.map(i=>e$(i,e,r,t)).join("")}function CH(n,e,r,t){return n===void 0||n.layout_nodes.length===0?"":"<div>"+hh(n,e,r,t)+"</div>"}function MH(n,e,r){const t=ph(n,e),i=document.querySelectorAll(`.${B7}`);for(const o of i){const u=o.getAttribute(H7);if(!u)continue;const a=t==null?void 0:t.nonroot_anchor_sections.get(u);o.innerHTML=t&&a?hh(a,e,r.framingFoldState,u):""}}function NH(n,e,r,t){const i=document.getElementById("framing-notes-root-section"),o=ph(e,r),u=o===null?"":hh(o.root_section,r,t.framingFoldState,LH);if(!u){n.innerHTML="",i&&(i.hidden=!0);return}i&&(i.hidden=!1),n.innerHTML=u}function TH(n,e){const r=e.jprobInstance,t=_p in r.get_fgroups()?r.nonstandard_notes(_p,dh(e)):[];n.innerHTML=t.map(o=>`<div class="estimator-instruction">${Ae(o.defn,e)}</div>`).join("");const i=document.getElementById(Yw);i&&(i.hidden=t.length===0)}function qH(n,e){const r=document.getElementById("framing-notes-explainer-section"),t=new Set(dh(e));if(!Zw(e)||!t.size){n.innerHTML="",r&&(r.hidden=!0);return}const i=[];for(const[o,u]of e.jprobInstance.standard_fgroups_in_order())u.defn&&u.flabels.some(a=>t.has(a))&&i.push(`<div class="framing-explainer ${se(Qw(o))}">`+Ae(u.defn,e)+"</div>");r&&(r.hidden=i.length===0),n.innerHTML=i.join("")}const FH=280,OH=110;function n$(n,e,r){if(r==="point")return String(n.point[e]??"");if(r==="bounds"){const i=n.bounds[e];return i?`${i[0]} ${i[1]}`:""}const t=n.sample[e];return t?typeof t=="string"?t:t.map(([i,o])=>`(${i} ${o})`).join(" "):""}function r$(n,e){return n.svar_entries().map(({bareName:r},t)=>({bareName:r,cardMode:e,inputIndex:t}))}function t$(n,e,r){const t=en(e.ui.whose,r);if(!t)return[];const{source:i}=ve(e.ui.whose);if(i==="metho-plaincode"||i==="metho-richcode"||i==="adhoc-plaincode"){const o=t,u={};for(const s of o.cparam_names){const c=n.find_cparam(s),l=ah(o,s,c==null?void 0:c.allowed_values);u[s]=gt(s,e,c,l)}const a=un(o,u);return a?a.trials:[]}return i==="adhoc-plainnum"||i==="metho-plainnum"?t.trials:[]}function vh(n,e){return n>0?Math.max(0,Math.min(e,n-1)):0}function mh(n,e){return'<div class="assumption-trial-bar"><span class="assumption-trial-label">trial</span><div class="assumption-trial-buttons">'+Array.from({length:n},(r,t)=>`<button class="assumption-trial-btn${t===e?" active":""}" data-trial="${t}">${t+1}</button>`).join("")+"</div></div>"}function PH(n,e,r,t,i){var A,L;const o=document.getElementById("svars-section"),u=t.ui.whose==="yours-plaincode",a=t.ui.inputMode,s=!Pe(t.ui.whose),c=e.get_svar_bare_names(),l=ph(e,r),f=Jt(e);if(f.length===0){n.innerHTML="",o&&(o.hidden=!0);return}o&&(o.hidden=!1);const d=r$(e,a),p=s?t$(e,t,i).map(C=>d.map(I=>n$(C,I.bareName,I.cardMode))):[],h=(((A=t.yoursRecord.raw_input)==null?void 0:A[a])??"").split(`
`),m=p.length,v=s&&m>1,b=vh(m,t.ui.assumptionTrialIndex),g=v?mh(m,b):"",_=s?'<div class="assumption-preset-hint">preset selected; select Yours in Calculator to edit</div>':"",y=e.svar_entries().map(C=>C.decl.type_highlevel),E=[];for(let C=0;C<f.length;C++){const I=d[C],S=I.cardMode,w=S==="sample"&&!u,$=S==="bounds"?" bounds-mode":S==="sample"?" sample-mode":"",k=Ae(f[C],r),R=c[C],F=R?e.get_svar(R):void 0,T=R?`isym:${R}`:null,U=T!==null&&e.can_consolidate_isym_svar(T),O=U?e.get_isym(T):void 0,D=(O==null?void 0:O.defn)??(F==null?void 0:F.defn),q=O?O.srcquotes:F==null?void 0:F.srcquotes,ne=Rn(q,r),W=D?ne.atStart+Ae(D,r)+ne.atEnd:"",Y=R?`svar:${R}`:null,Z=U?` id="isym-${se(R??"")}"`:"",ie=Y&&l?CH(l.nonroot_anchor_sections.get(Y),r,t.ui.framingFoldState,Y):"",G=w?`<canvas class="param-density-canvas" data-param-index="${I.inputIndex}" data-type-highlevel="${y[I.inputIndex]}" width="${FH}" height="${OH}"></canvas>`:"";let B;if(s){const Q=((L=p[b])==null?void 0:L[C])??"",oe=p.map(($e,_e)=>`data-trial-${_e}="${se($e[C]??"")}"`).join(" ");B=`<span class="assumption-readonly${$}" data-param-index="${C}" ${oe}>${K(Q)}</span>`}else{const Q=(h[I.inputIndex]??"").trim();B=`<input class="assumption-input${$}" data-param-index="${I.inputIndex}" data-group="${a}" value="${se(Q)}" placeholder="${GH(S)}">`}const H=!s&&!u&&S==="sample"?'<span class="assumption-help-slot"></span>':"";!s&&S==="sample"&&a$(h[I.inputIndex]??"");const ge="",pe=`<span class="assumption-op">${K(Q9(S))}</span>`;E.push(`<div class="assumption-card${s?" preset-mode":""}"${Z}>`+mk(R??"",`${Yp}${R??""}`)+`<div class="assumption-header"><span class="assumption-cond">${k}</span><span class="assumption-input-row"${u?" hidden":""}>`+pe+B+H+"</span></div>"+(W?`<div id="gloss-${R??""}" class="assumption-narrative">${W}</div>`:"")+G+ge+g+_+ie+"</div>")}n.innerHTML=E.join("");for(const C of n.querySelectorAll(".assumption-help-slot"))C.appendChild(Mr(Yx));if(a==="sample"&&!u){const C=hr(e.svar_entries().map(I=>I.decl));s?bh(n,C):gh(n,C)}}function DH(n,e,r,t){var c;if(Pe(r.ui.whose))return;const i=r.ui.inputMode,o=r$(e,i),u=t$(e,r,t).map(l=>o.map(f=>n$(l,f.bareName,f.cardMode))),a=u.length,s=vh(a,r.ui.assumptionTrialIndex);for(const l of n.querySelectorAll(".assumption-readonly")){const f=Number(l.dataset.paramIndex);for(const d of l.getAttributeNames())d.startsWith("data-trial-")&&l.removeAttribute(d);u.forEach((d,p)=>{l.setAttribute(`data-trial-${p}`,d[f]??"")}),l.textContent=((c=u[s])==null?void 0:c[f])??""}xH(n,a,s),i==="sample"&&bh(n,hr(e.svar_entries().map(l=>l.decl)))}function xH(n,e,r){const t=e>1;for(const i of n.querySelectorAll(".assumption-card")){const o=i.querySelector(".assumption-trial-bar");if(!t){o==null||o.remove();continue}const u=mh(e,r);if(o)o.outerHTML=u;else{const a=i.querySelector(".assumption-preset-hint");a?a.insertAdjacentHTML("beforebegin",u):i.insertAdjacentHTML("beforeend",u)}}}function BH(n,e,r){n.querySelectorAll(".assumption-trial-btn").forEach(o=>{o.classList.toggle("active",o.dataset.trial===String(e))});const i=n.querySelectorAll(".assumption-readonly");for(const o of i){const u=o.getAttribute(`data-trial-${e}`)??"";o.textContent=u}bh(n,r)}function HH(n,e){const r=n.dataset.typeHighlevel,t=yE(e,r);Gt(n,e,t),jn(n,()=>Gt(n,e,t)),IE(n,e,t,r)}function UH(n){const e=n.parentElement;return e!=null&&e.classList.contains("resizable-canvas-wrapper")?e:n}function i$(n,e){const r=UH(n);if(!e){r.hidden=!0;return}r.hidden=!1,HH(n,e)}function bh(n,e){const r=n.querySelectorAll(".param-density-canvas");for(const t of r){const i=t.closest(".assumption-card"),o=i==null?void 0:i.querySelector(".assumption-readonly"),u=(o==null?void 0:o.textContent)??"",a=Number(t.dataset.paramIndex??0);i$(t,o$(u,e==null?void 0:e[a]))}}function jH(n,e,r){var a;const t=e.ui.inputMode,i=((a=e.yoursRecord.raw_input)==null?void 0:a[t])??"",o=i?i.split(`
`):[];n.querySelectorAll(".assumption-input").forEach(s=>{const c=Number(s.dataset.paramIndex),l=(o[c]??"").trim();s.value!==l&&document.activeElement!==s&&(s.value=l)}),t==="sample"&&(gh(n,r),s$(n))}function gh(n,e){const r=n.querySelectorAll(".param-density-canvas");for(const t of r){const i=t.closest(".assumption-card"),o=i==null?void 0:i.querySelector(".assumption-input"),u=(o==null?void 0:o.value)??"",a=Number(t.dataset.paramIndex??0);i$(t,o$(u,e==null?void 0:e[a]))}}function o$(n,e){const r=n.trim();if(!r)return null;const t=e??Kt;let i;try{i=R2(r,t)}catch{return null}switch(i.kind){case"family":return aD(I2(i.spec,t.lo,t.hi));case"pairs":return oD(i.pairs.map(o=>o[0]),i.pairs.map(o=>o[1]))}}function u$(n){return n.trim()}function WH(n,e,r,t){var a;const i=n.ui.inputMode,u=(((a=n.yoursRecord.raw_input)==null?void 0:a[i])??"").split(`
`);for(;u.length<t;)u.push("");return u[e]=i==="sample"?u$(r):r,u.join(`
`)}function a$(n){return null}function s$(n){const e=n.querySelectorAll(".assumption-card");for(const r of e){const t=r.querySelector(".assumption-input");if(!t)continue;a$(t.value);let i=r.querySelector(".arg-warning");i&&i.remove()}}function GH(n){switch(n){case"point":return"e.g. .5";case"bounds":return"e.g. .01 1";case"sample":return"e.g. "+c$}}const c$="tri(0, .5, .99)",_h="conclusion-density";function VH(n,e){const r=n.config.conclusion_form;if(!r)throw new Error("config.conclusion_form is not set");const t=e[r];if(!t)throw new Error(`Form "${r}" not found in form registry`);return t}function XH(n,e){return Jt(n).map(r=>`<div class="calc-label-row"><span class="label-full">${Ae(r,e)}</span></div>`).join("")}function YH(n,e){const r=K(Q9(e));return Array.from({length:n},()=>`<div class="calc-op-row">${r}</div>`).join("")}function yh(n,e,r,t,i,o,u,a,s,c){var g,_,y;const l=i.ui.inputMode;if(o){const{source:E}=ve(i.ui.whose);if(E==="metho-plaincode"||E==="metho-richcode"||E==="adhoc-plaincode"){const A=en(i.ui.whose,o);if(A){const L=cn();u9(n,e,A,Eh(E,A,o),r,t,i,L,u,s,c);return}}if(E==="yours-plaincode"){const A=i.yoursCodeRecord;if(n.innerHTML="",A.verified_code_input&&A.cparam_combos.length>0){const L=jo(A),C=cn();u9(n,e,L,[L],r,t,i,C,u,s,c)}else e.innerHTML='<div class="result-detail">Write code below and click Sample to compute results.</div>';return}}const f=((g=i.yoursRecord.raw_input)==null?void 0:g[l])??"",p=Jt(r).length,h=!Pe(i.ui.whose),m=XH(r,t),v=p>0?`<div class="calc-operators">${YH(p,l)}</div>`:"";let b;if(h)b='<div id="sample-columns"></div>';else{const E=l==="bounds"?" bounds-mode":l==="sample"?" sample-mode":"",A=tU(l,p);b=`<div class="calc-input"><textarea class="calc-textarea${E}" data-group="${l}" rows="${p}" spellcheck="false" placeholder="${A}">${K(f)}</textarea></div>`}if(n.innerHTML=`
    <div class="calc-layout">
      <div class="calc-labels">${m}</div>
      ${v}
      ${b}
    </div>
  `,h&&o){const E=n.querySelector("#sample-columns");E&&SD(E,r,o,i)&&((_=n.querySelector(".calc-labels"))==null||_.classList.add("has-sample-col-headers"),(y=n.querySelector(".calc-operators"))==null||y.classList.add("has-sample-col-headers"));const{source:A}=ve(i.ui.whose);if(A==="adhoc-plainnum"){const L=en(i.ui.whose,o),C=L==null?void 0:L.trials[0],I=r.svar_entries().map(S=>S.bareName);C&&J7(C,I).length>0&&n.insertAdjacentHTML("beforeend",`<div class="calc-copy-to-yours"><button class="copy-to-yours-btn" type="button" title="Copy this entry's estimates into your editable Yours inputs">Copy to Yours</button></div>`)}}wu(e,r,t,i,o,u,a)}function Eh(n,e,r){return n==="metho-plaincode"?r.plaincodeResults:n==="metho-richcode"?r.richcodeResults:[e]}function KH(n,e,r,t,i,o,u,a,s,c){const{source:l}=ve(i.ui.whose),f=cn();if(o&&(l==="metho-plaincode"||l==="metho-richcode"||l==="adhoc-plaincode")){const d=en(i.ui.whose,o);if(d){a9(n,e,d,Eh(l,d,o),r,t,i,f,u,s,c);return}}else if(l==="yours-plaincode"){const d=i.yoursCodeRecord;if(d.verified_code_input&&d.cparam_combos.length>0){const p=jo(d);a9(n,e,p,[p],r,t,i,f,u,s,c);return}}console.warn(`Code-control change outside a code result view (whose=${JSON.stringify(i.ui.whose)}); falling back to a full calculator render`),yh(n,e,r,t,i,o,u,a,s,c)}function wu(n,e,r,t,i,o,u){iU(n,e,r,t,i,o,u)}function JH(n,e,r,t,i,o,u,a){const s=o[e];if(!s){n.innerHTML="",console.warn(`derived-form ${e}: not in form registry (cannot compute)`);return}const c=r.form.find(b=>b.id===e);if(!c){n.innerHTML="",console.error(`derived-form ${e}: not found in jprob template form list`);return}const l=i.ui.inputMode;if(!B9(c,l)){n.innerHTML="";return}const f=H9(e,c.sexpr),d=zH(r,f),p=Ae(d,t),h=!Pe(i.ui.whose),m=r.get_svar_bare_names().length;let v;try{v=nU(e,s,r,i,l,h,m,a,u)}catch(b){n.innerHTML="",console.error(`derived-form ${e}: ${b.message}`);return}switch(v.kind){case"ok":const b=v.valueHtml??`<span class="derived-value">${v.value}</span>`,g=v.detailHtml??(v.detail?` <span class="derived-detail">${v.detail}</span>`:"");n.innerHTML=`<div class="hir-loud-note">${p} ${v.label} ${v.relation??"≈"} `+b+(g?` ${g}`:"")+"</div>"+(v.nonFiniteWarning?ko():"");return;case"non-finite":n.innerHTML=ko();return;case"unavailable":n.innerHTML=`<div class="hir-loud-note">${p} — <span class="derived-detail">${K(v.explanation)}</span></div>`;return;case"pending":n.innerHTML="";return;case"missing":n.innerHTML="",console.warn(`derived-form ${e}: ${v.reason}`);return;case"error":n.innerHTML="",console.error(`derived-form ${e}: ${v.message}`);return}}function zH(n,e){const r=U9(e);return n.get_display_expr(r)??r}function nt(n){return O9(n.svar_entries())}function l$(n,e,r){return n.provenance!=="precomputed"?r:`precomputed, ${e} trial${e===1?"":"s"}`}const QH={point:()=>Io,bounds:"from bounds",mc:()=>"MC"};function ZH(n){return{point:e=>e.perTrial.length>1?`mean of ${e.perTrial.length} samples`:"from preset",bounds:"from preset",mc:e=>l$(e,n,e.trialCount>1?`MC of ${e.trialCount} trials`:"MC")}}function eU(n){return{point:e=>e.perTrial.length>1?`${Io} (mean of ${e.perTrial.length} trials)`:Io,bounds:"from bounds",mc:e=>l$(e,n,"MC")}}function qt(n,e,r,t){switch(n.kind){case"point":{const i=Tt([...n.perTrial,n.value]);return i==="undefined"?{kind:"non-finite"}:{kind:"ok",label:t.point(n),value:Be(n.value,e,r),nonFiniteWarning:i==="infinite"}}case"bounds":{const i=Tt([n.lo,n.hi]);return i==="undefined"?{kind:"non-finite"}:_w(n.lo,n.hi)?{kind:"unavailable",explanation:gw}:{kind:"ok",label:t.bounds,relation:yw(n.tightness),value:dB(n.lo,n.hi,e,r),nonFiniteWarning:i==="infinite"&&n.tightness==="tight"}}case"mc":{const i=Tt([n.mean,n.median,n.p5,n.p95]);if(i==="undefined")return{kind:"non-finite"};const o=sB(n,e,r);return{kind:"ok",label:t.mc(n),value:"",valueHtml:o.valueHtml,detailHtml:o.detailHtml,nonFiniteWarning:i==="infinite"}}}}function nU(n,e,r,t,i,o,u,a,s){var v;const c=r.get_svar_bare_names(),l=e.params.filter(b=>!c.includes(b));if(l.length>0)return{kind:"error",message:`params not in svar_list: ${JSON.stringify(l)} (form.params=${JSON.stringify(e.params)}, svar_list=${JSON.stringify(c)})`};const f=oE(n,e,s),d=t.ui.probAsOdds,{source:p}=ve(t.ui.whose);if(yn(p)==="plaincode"||yn(p)==="richcode")return rU(n,e,f,r,t,p,a);if(i==="bounds"&&!e.bounds)return{kind:"unavailable",explanation:fi};if(o){if(!a)return{kind:"pending"};const b=en(t.ui.whose,a);if(!b)return{kind:"pending"};if(p!=="adhoc-plainnum"&&p!=="metho-plainnum")return{kind:"pending"};const g=b;try{const _=et(cn()),y=Un(f,Hn(g.trials,i,nt(r)),{onIncompleteTrial:"skip",mcIters:_.mcIters,mcItersPerClick:_.mcItersPerClick});return qt(y,e.typeHighlevel,d,ZH(g.trials.length))}catch(_){if(_ instanceof Wt)return{kind:"missing",reason:`record: ${_.message}`};throw _}}const h=((v=t.yoursRecord.raw_input)==null?void 0:v[i])??"";if(!h.trim())return{kind:"pending"};const m=Su(r,i,h,"tolerant",p$(t));try{const b=et(cn()),g=Un(f,m,{onIncompleteTrial:"skip",mcIters:b.mcIters,mcItersPerClick:b.mcItersPerClick});return qt(g,e.typeHighlevel,d,QH)}catch(b){if(b instanceof Wt)return{kind:"pending"};throw b}}function rU(n,e,r,t,i,o,u){let a,s;if(Ze(o)==="yours"){const p=i.yoursCodeRecord;if(!p.verified_code_input||p.cparam_combos.length===0)return{kind:"pending"};a=jo(p),s=[a]}else{if(!u)return{kind:"pending"};if(a=en(i.ui.whose,u),!a)return{kind:"pending"};s=Eh(o,a,u)}s2(a);const c=BB(a,s,t,i);if(!c)return{kind:"pending"};if(c.trials.length===0)return{kind:"missing",reason:"no trials for the selected scenario combination"};const l=i.ui.probAsOdds,f=eU(c.trials.length);if(i.ui.inputMode==="point"){const p=c.trials.map(m=>$w(m,n,e)),h=p.reduce((m,v)=>m+v,0)/p.length;return qt({kind:"point",value:h,perTrial:p,perTrialInputs:[]},e.typeHighlevel,l,f)}if(i.ui.inputMode==="bounds"){if(!a2(a))throw new Error("code bounds derived-form display reached with a multi-trial record; bounds mode should not have been selectable");const p=Sw(c.trials[0],n,e);if(!p)return{kind:"unavailable",explanation:fi};const[h,m]=p.interval;return qt({kind:"bounds",lo:h,hi:m,tightness:p.tightness,trialCount:1},e.typeHighlevel,l,f)}const d=ED(c,n,t.config.conclusion_form,B2(c.trials));try{const p=et(cn()),h=Un(r,Hn(c.trials,"sample",nt(t)),{onIncompleteTrial:"skip",mcIters:p.mcIters,mcItersPerClick:p.mcItersPerClick,precomputed:d});return qt(h,e.typeHighlevel,l,f)}catch(p){if(p instanceof Wt)return{kind:"missing",reason:`combo trials: ${p.message}`};throw p}}function tU(n,e){const r=n==="sample"?c$:n==="bounds"?".01 1":".5";return"e.g. "+Array.from({length:e},()=>r).join(`
`)}function iU(n,e,r,t,i,o,u){var p;const a=o?VH(e,o):null,s=t.ui.inputMode,c=!Pe(t.ui.whose),l=cn();if(c&&i){try{sU(n,e,r,t,i,a,l,u)}catch(h){n.innerHTML=`<div class="result-error">${K(h.message)}</div>`}return}const f=((p=t.yoursRecord.raw_input)==null?void 0:p[s])??"",d=e.svar_entries().length;if(!f.trim()){n.innerHTML='<div class="result-detail">Enter probabilities above.</div>';return}try{switch(s){case"point":oU(n,f,e,r,d,a,t.ui.probAsOdds);break;case"bounds":uU(n,f,e,r,d,a,t.ui.probAsOdds);break;case"sample":aU(n,f,e,r,d,t,a,l,u);break}}catch(h){n.innerHTML=`<div class="result-error">${K(h.message)}</div>`}}function xp(n,e){return!isNaN(n)&&Gi(e,n)}function f$(n,e,r){const t=n.trim().split(/\n/).map(i=>i.trim()).filter(i=>i.length>0);if(t.length!==e)throw new Error(`Expected ${e} values, got ${t.length}`);return t.map((i,o)=>{const u=Number(i),a=(r==null?void 0:r[o])??Kt;if(!xp(u,a))throw new Error(`Line ${o+1}: "${i}" is not a valid value in ${Vi(a)}`);return u})}function $u(n,e,r){return e?oE(n.config.conclusion_form??"form:conclusion",e,r):{key:"conclusion-unavailable",params:[],typeHighlevel:n.config.conclusion_type_highlevel,point:()=>NaN,bounds:null,boundsTightness:null}}function d$(){return`<div class="result-detail">${K(fi)}</div>`}function wh(n,e){for(const r of e.params)if(!n.includes(r))throw new Error(`form param "${r}" is not an input subjective variable`)}function Su(n,e,r,t,i=null){const o=n.svar_entries(),u=o.map(f=>f.bareName),a=hr(o.map(f=>f.decl)),s=nt(n);if(t==="strict"){if(e==="point"){const d=f$(r,u.length,a);return{mode:e,trials:[Object.fromEntries(u.map((p,h)=>[p,d[h]]))]}}if(e==="bounds"){const d=h$(r,u.length,a);return{mode:e,trials:[Object.fromEntries(u.map((p,h)=>[p,d[h]]))]}}const{specs:f}=v$(r,u.length,a);return{mode:"sample",ranges:s,trials:[{specs:Object.fromEntries(u.map((d,p)=>[d,f[p]])),lloads:i}]}}const c=r.trim().split(/\n/).map(f=>f.trim()).filter(f=>f.length>0);if(e==="point"){const f={};return u.forEach((d,p)=>{const h=Number(c[p]);isNaN(h)||(f[d]=h)}),{mode:e,trials:[f]}}if(e==="bounds"){const f={};return u.forEach((d,p)=>{const h=(c[p]??"").split(/\s+/);if(h.length!==2)return;const m=Number(h[0]),v=Number(h[1]);isNaN(m)||isNaN(v)||(f[d]=[m,v])}),{mode:e,trials:[f]}}const l={};return u.forEach((f,d)=>{try{l[f]=R2(c[d]??"",a[d]??Kt)}catch{}}),{mode:"sample",ranges:s,trials:[{specs:l,lloads:i}]}}function p$(n){var e;return((e=n.yoursRecord.trials[0])==null?void 0:e.lloads)??null}function oU(n,e,r,t,i,o,u){const a=r.svar_entries().map(p=>p.bareName);o&&wh(a,o);const s=Su(r,"point",e,"strict"),c=Un($u(r,o),s,{onIncompleteTrial:"error"}),l=pi(r,t),f=r.config.conclusion_type_highlevel,d=s.trials[0];n.innerHTML=Ro({labelHtml:l,value:c.value,typeHighlevel:f,statsDisplay:u,detail:`from: ${a.map(p=>d[p]).join(", ")}`})}function h$(n,e,r){const t=n.trim().split(/\n/).map(i=>i.trim()).filter(i=>i.length>0);if(t.length!==e)throw new Error(`Expected ${e} lines of "lo hi", got ${t.length}`);return t.map((i,o)=>{const u=i.split(/\s+/);if(u.length!==2)throw new Error(`Line ${o+1}: expected "lo hi", got "${i}"`);const a=Number(u[0]),s=Number(u[1]),c=(r==null?void 0:r[o])??Kt;if(!xp(a,c)||!xp(s,c)||a>s)throw new Error(`Line ${o+1}: invalid bounds "${i}" (need lo ≤ hi within ${Vi(c)})`);return[a,s]})}function uU(n,e,r,t,i,o,u){const a=r.svar_entries().map(d=>d.bareName);o&&wh(a,o);const s=Su(r,"bounds",e,"strict");if(o&&!o.bounds){n.innerHTML=d$();return}const c=Un($u(r,o),s,{onIncompleteTrial:"error"}),l=pi(r,t),f=r.config.conclusion_type_highlevel;n.innerHTML=nh({labelHtml:l,lo:c.lo,hi:c.hi,tightness:c.tightness,typeHighlevel:f,statsDisplay:u})}function v$(n,e,r){const t=n.trim().split(/\n/).map(o=>o.trim()).filter(o=>o.length>0);if(t.length!==e)throw new Error(`Expected ${e} lines, got ${t.length}`);return{specs:t.map((o,u)=>{try{return R2(o,(r==null?void 0:r[u])??Kt)}catch(a){throw new Error(`Line ${u+1}: ${a.message}`)}}),warnings:[]}}const m$="⟦",b$="⟧";function Mo(n,e,r,t){return`<div class="result-label">Exact moments (independent)</div><div class="result-main">E${m$}${e}${b$} = <span class="hl">${Be(n.mean,r,t)}</span></div><div class="result-detail">σ = ${Be(n.sigma,r,"probability")}</div>`}function No(n){const e=`${l9("n")}=${n.samples.length.toLocaleString()}`;return n.barrierInnerIters===null?e:`${e}, E${m$}·${b$} ${l9("n")}=${n.barrierInnerIters.toLocaleString()}`}function Bp(n,e,r,t){return'<div class="density-result-row"><div class="density-result-text">'+$r(n,e,r,"monte-carlo",t)+'</div><canvas id="density-canvas" width="400" height="200"></canvas></div>'}function g$(n,e,r,t){const i=n.querySelector("#density-canvas");if(!i)return;const o=e.samples??e.densityCurve;if(!o)return;const u=Ar(r);zr(i,o,e.p5,e.p95,u),jn(i,()=>zr(i,o,e.p5,e.p95,u),{stateHost:n,stateKey:_h}),AE(i,o,e.p5,e.p95,r),e.mcPoolToken!==null&&hi(i,e.mcPoolToken,e.samples.length,{itersPerTarget:t,targetCount:1})}function aU(n,e,r,t,i,o,u,a,s){const c=r.svar_entries().map(_=>_.bareName);u&&wh(c,u);const l=p$(o),f=Su(r,"sample",e,"strict",l),d=pi(r,t),p=r.config.conclusion_type_highlevel,h=o.ui.probAsOdds,m=$u(r,u,s),v=et(a);if(Yo(l)){const _=C2(m,f,{onIncompleteTrial:"error",mcIters:v.mcIters,mcItersPerClick:v.mcItersPerClick}),y=[];_.independent.exact&&y.push(Mo(_.independent.exact,d,p,h)),y.push(Co({comparison:_,typeHighlevel:p,statsDisplay:h,targetLabelHtml:d,canvasId:"density-canvas",provenanceDetail:`Monte Carlo, ${No(_.joint)}`})),n.innerHTML=y.join(""),oh({box:n,canvasId:"density-canvas",layers:[{comparison:_,palette:"series"}],typeHighlevel:p,resizeStateKey:_h,mcItersPerClick:v.mcItersPerClick});return}const b=Un(m,f,{onIncompleteTrial:"error",mcIters:v.mcIters,mcItersPerClick:v.mcItersPerClick}),g=[];b.exact&&g.push(Mo(b.exact,d,p,h)),g.push(`<div class="result-label">Monte Carlo (independent, ${No(b)})</div>`+Bp(b,p,h,d)),n.innerHTML=g.join(""),g$(n,b,p,v.mcItersPerClick)}function sU(n,e,r,t,i,o,u,a){const s=en(t.ui.whose,i);if(!s){n.innerHTML='<div class="result-detail">No data for this preset.</div>';return}const{source:c}=ve(t.ui.whose),l=pi(e,r);if(c==="adhoc-plainnum"||c==="metho-plainnum"){cU(n,s,e,r,t,l,o,u,a);return}n.innerHTML='<div class="result-detail">Unknown preset source.</div>'}function cU(n,e,r,t,i,o,u,a,s){const c=i.ui.inputMode,l=r.config.conclusion_type_highlevel,f=i.ui.probAsOdds;if(e.trials.length===0)throw new Error("Plainnum record has no trials to display");const d=$u(r,u,s);if(c==="point"){const p=Un(d,Hn(e.trials,"point",nt(r)),{onIncompleteTrial:"error"});if(p.perTrial.length===1)n.innerHTML=Ro({labelHtml:o,value:p.perTrial[0],typeHighlevel:l,statsDisplay:f,detail:`from: ${p.perTrialInputs[0].join(", ")}`});else{const h=p.perTrial.map(m=>Be(m,l,f)).join(", ");n.innerHTML=Ro({labelHtml:o,value:p.value,typeHighlevel:l,statsDisplay:f,labelPrefix:"mean ",detail:`per sample: ${h}`})}return}if(c==="bounds"){if(u&&!u.bounds){n.innerHTML=d$();return}const p=Un(d,Hn(e.trials,"bounds",nt(r)),{onIncompleteTrial:"error"});n.innerHTML=nh({labelHtml:o,lo:p.lo,hi:p.hi,tightness:p.tightness,typeHighlevel:l,statsDisplay:f,midpointDetailSuffix:` (envelope of ${p.trialCount} sample${p.trialCount>1?"s":""})`});return}lU(n,e,d,r,t,i,o,a)}function lU(n,e,r,t,i,o,u,a){const s=t.config.conclusion_type_highlevel,c=o.ui.probAsOdds,l=et(a),f=Hn(e.trials,"sample",nt(t)),d=ih(e.trials,t,i,{offerCopyToYours:!0});if(d.hasDependence){const m=CE(e.precomputed),v=C2(r,f,{onIncompleteTrial:"error",mcIters:l.mcIters,mcItersPerClick:l.mcItersPerClick,precomputed:m}),b=[];v.independent.exact&&b.push(Mo(v.independent.exact,u,s,c));const g=v.joint.provenance==="precomputed"?`precomputed, ${e.count} agent trial${e.count===1?"":"s"}`+(v.joint.mcIters?`, ${f9(v.joint.mcIters)} MC iters`:""):`Monte Carlo, ${No(v.joint)}`;b.push(Co({comparison:v,typeHighlevel:s,statsDisplay:c,targetLabelHtml:u,canvasId:"density-canvas",provenanceDetail:g})),b.push(d.specHtml),n.innerHTML=b.join(""),oh({box:n,canvasId:"density-canvas",layers:[{comparison:v,palette:"series"}],typeHighlevel:s,resizeStateKey:_h,mcItersPerClick:l.mcItersPerClick});return}const p=Un(r,f,{onIncompleteTrial:"error",mcIters:l.mcIters,mcItersPerClick:l.mcItersPerClick,precomputed:AD(e)}),h=[];if(p.exact&&h.push(Mo(p.exact,u,s,c)),p.provenance==="precomputed"){const m=p.mcIters?`, ${f9(p.mcIters)} MC iters`:"";h.push(`<div class="result-label">Precomputed (independent, ${e.count} agent trials${m})</div>`+Bp(p,s,c,u))}else h.push(`<div class="result-label">Monte Carlo (independent, ${No(p)})</div>`+Bp(p,s,c,u));d.specHtml&&h.push(d.specHtml),n.innerHTML=h.join(""),g$(n,p,s,l.mcItersPerClick)}function l9(n){return`<span class="lc">${n}</span>`}const fU=1e6;function f9(n){const e=n/fU;return e>=1&&e===Math.floor(e)?`${e}M`:`${e.toFixed(1)}M`}function dU(n,e,r,t,i){if(!e.trim())return null;try{if(n==="point"){const a=f$(e,r,i),s={};for(let c=0;c<t.length;c++)s[t[c]]=a[c];return s}if(n==="bounds"){const a=h$(e,r,i),s={};for(let c=0;c<t.length;c++)s[t[c]]=a[c];return s}const{specs:o}=v$(e,r,i),u={};for(let a=0;a<t.length;a++){const s=o[a];u[t[a]]=s.kind==="family"?s.spec.text:s.pairs}return u}catch{return null}}function $h(n,e,r,t,i){const o=n.yoursRecord;o.raw_input={...o.raw_input??{},[t]:i};const u=e.svar_entries(),a=u.map(f=>f.bareName),s=a.length,c=hr(u.map(f=>f.decl)),l=dU(t,i,s,a,c);if(l!==null){const f=o.trials[0];t==="point"?f.point=l:t==="bounds"?f.bounds=l:f.sample=l}d2(e,r,n.plainnumOptionDictKey,o)}function Sh(n,e,r,t,i,o){const u=n.yoursRecord;u.lloads_draft=t;const a=ly(t,i,o);return a.kind==="valid"&&(u.trials[0].lloads=a.lloads),d2(e,r,n.plainnumOptionDictKey,u),a}function d9(n,e,r,t,i,o){if(t==="plaincode"){const u=n.yoursCodeRecord;u.trial_choices={...u.trial_choices??{},[i]:o},ni(e,r,n.codeOptionDictKey,u)}else{const u=n.yoursRecord;u.trial_choices={...u.trial_choices??{},[i]:o},d2(e,r,n.plainnumOptionDictKey,u)}}function pU(n,e){n.addEventListener("input",r=>{const t=r.target;if(t.classList.contains("calc-textarea")){e.persistCalcTextarea(t);return}if(t.classList.contains("assumption-input")){e.persistAssumptionCard(t);return}}),n.addEventListener("change",r=>{const t=r.target;if(t.classList.contains("calc-textarea")){e.recomputeAfterCalcTextarea();return}if(t.classList.contains("assumption-input")){e.recomputeAfterAssumptionCard(t);return}})}function Ah(n,e,r,t){const i=n.yoursCodeRecord;i.raw_code_input=t,ni(e,r,n.codeOptionDictKey,i)}function hU(n,e,r,t,i){const o=n.yoursCodeRecord;o.reasoning_response={...o.reasoning_response,[t]:i},ni(e,r,n.codeOptionDictKey,o)}function vU(n,e,r,t){const i=n.yoursCodeRecord;i.misc_response=t,ni(e,r,n.codeOptionDictKey,i)}function Lh(n){const e=`yours_${n}_`,r=[];for(let i=0;i<localStorage.length;i++){const o=localStorage.key(i);o!==null&&o.startsWith(e)&&r.push(o)}const t=[];for(const i of r){const o=localStorage.getItem(i);if(o===null)continue;let u;try{u=JSON.parse(o)}catch{continue}t.push({plainnumOptionDictKey:i.slice(e.length),record:u})}return t.sort((i,o)=>{const u=i.record.timestamp??"";return(o.record.timestamp??"").localeCompare(u)}),t}function mU(n,e){localStorage.removeItem(Vo(n,e))}function bU(n){const e=Lh(n).map(i=>({kind:"plainnum",plainnumOptionDictKey:i.plainnumOptionDictKey,record:i.record})),r=l2(n).map(i=>({kind:"plaincode",codeOptionDictKey:i.codeOptionDictKey,record:i.record})),t=[...e,...r];return t.sort((i,o)=>{const u=i.record.timestamp??"";return(o.record.timestamp??"").localeCompare(u)}),t}function gU(n,e,r,t){const i={};for(const[a,s]of Object.entries(t.cparam_values??{}))Ih(s)&&(i[a]=s);for(const[a,s]of Object.entries(t.aopts))_$(s)&&(i[a]=s);const o=Go(e.get_options(),i);f2(e.config,o);const u={...n.ui,whose:"yours-plainnum"};return qe(e.config,u),{...n,optionValues:o,plainnumOptionDictKey:r,ui:u,yoursRecord:t}}function _U(n,e,r,t){const i={};for(const[a,s]of Object.entries(t.aopts))_$(s)&&(i[a]=s);for(const a of e.get_cparams()){const s=Fe(a.id);if(s in n.optionValues){const c=n.optionValues[s];if(!Ih(c))throw new Error(`Cparam ${a.id} has a non-scalar state value`);i[s]=c}}const o=Go(e.get_options(),i);f2(e.config,o);const u={...n.ui,whose:"yours-plaincode"};return qe(e.config,u),{...n,optionValues:o,codeOptionDictKey:r,ui:u,yoursCodeRecord:t}}function Ih(n){const e=typeof n;return e==="string"||e==="number"||e==="boolean"}function _$(n){return Ih(n)||Array.isArray(n)&&n.every(e=>typeof e=="string")}function y$(n,e){const r=[];for(const t of n.get_options()){const i=Fe(t.id),o=Sr(t.id)?e.cparam_values:e.aopts,u=o==null?void 0:o[i];u!==void 0&&(!Sr(t.id)&&u===t.default_value||r.push(`${i}=${w$(u)}`))}return r.join(" ")}function E$(n,e){const r=["code"];for(const t of n.get_aopts()){const i=Fe(t.id),o=e.aopts[i];o!==void 0&&o!==t.default_value&&r.push(`${i}=${w$(o)}`)}return r.join(" ")}function w$(n){return typeof n=="boolean"?n?"true":"false":String(n)}function yU(n,e){const r=bU(n.aid),t='<div class="yours-saved-header">Saved estimations</div>';if(r.length===0)return t+'<div class="yours-saved-empty">No saved estimations yet.</div>';const i=r.map(o=>EU(n,e,o)).join("");return t+`<div class="yours-saved-list">${i}</div>`}function EU(n,e,r){if(r.kind==="plainnum"){const u=K(y$(n,r.record)||"(default options)"),a=K(r.plainnumOptionDictKey);return`<div class="yours-saved-row${e.ui.whose==="yours-plainnum"&&r.plainnumOptionDictKey===e.plainnumOptionDictKey?" yours-saved-row-current":""}" data-kind="plainnum" data-key="${a}" role="button" tabindex="0"><span class="yours-saved-label">${u}</span><button class="yours-saved-delete" data-kind="plainnum" data-key="${a}" aria-label="Delete" title="Delete this saved estimation">×</button></div>`}const t=K(E$(n,r.record)),i=K(r.codeOptionDictKey);return`<div class="yours-saved-row yours-saved-row-code${e.ui.whose==="yours-plaincode"&&r.codeOptionDictKey===e.codeOptionDictKey?" yours-saved-row-current":""}" data-kind="plaincode" data-key="${i}" role="button" tabindex="0"><span class="yours-saved-label">${t}</span><button class="yours-saved-delete" data-kind="plaincode" data-key="${i}" aria-label="Delete" title="Delete this saved estimation">×</button></div>`}function kh(n,e,r){n.innerHTML=yU(e,r)}const wU=["tri","uniform","uni","beta","normal","lognormal","loguniform","t","logt","normal_trunc","lognormal_trunc","t_trunc","logt_trunc","trap","clamp","exp","log","log2","log10","sqrt"],$U=`/**
 * Top-level helper functions injected into the user's \`belief_spec_for_cparam_combo\`.
 *
 * All helpers are available as bare names inside the user's function body
 * (see plaincode_execute.ts for the destructure preamble mechanism).
 *
 * The distribution helpers return family-spec strings (exact — no PWL
 * approximation; see distribution_families.ts for the family set, grammar,
 * and implicit truncation to the svar's range). \`trap\` is the one
 * non-family extra and returns PWL pairs. Mirrors the Python agent-side
 * helper set (hp/query_agents/richcode_eval_src/distribution_families.py
 * FAMILY_SPEC_HELPERS + trap/clamp/math in eval_code_shared.py /
 * belief_helpers_richcode.py) — keep in sync, names included.
 *
 * Name-collision caveat: these bare names are destructured inside the
 * user's function body after the cparam parameters, so a cparam whose name
 * matches a helper (most plausibly \`t\`) is a compile error for user code.
 */

import { formatFamilySpec } from './distribution_families.js';
import { HELPER_NAMES } from './belief_helper_names.js';
export { HELPER_NAMES };


// ── Family spec-string helpers ───────────────────────────────────────────

/** Triangular over [lo, hi] with mode at peak. */
export function tri(lo: number, peak: number, hi: number): string {
  return formatFamilySpec('tri', lo, peak, hi);
}

/** Uniform over [lo, hi]. */
export function uniform(lo: number, hi: number): string {
  return formatFamilySpec('uniform', lo, hi);
}

/** Legacy alias of \`uniform\` (pre-family helper name). */
export const uni = uniform;

/** Beta(a, b) on [0, 1]; a, b > 0. */
export function beta(a: number, b: number): string {
  return formatFamilySpec('beta', a, b);
}

/** Normal(mu, sigma); truncated to the variable's range downstream. */
export function normal(mu: number, sigma: number): string {
  return formatFamilySpec('normal', mu, sigma);
}

/** Log-normal: mu/sigma are mean/sd of log(X). */
export function lognormal(mu: number, sigma: number): string {
  return formatFamilySpec('lognormal', mu, sigma);
}

/** Uniform in log space over [lo, hi]; 0 < lo < hi. */
export function loguniform(lo: number, hi: number): string {
  return formatFamilySpec('loguniform', lo, hi);
}

/** Location-scale Student-t (sigma is the scale parameter, not the std). */
export function t(mu: number, sigma: number, df: number): string {
  return formatFamilySpec('t', mu, sigma, df);
}

/** Exp of location-scale Student-t; log-space params like lognormal. */
export function logt(mu: number, sigma: number, df: number): string {
  return formatFamilySpec('logt', mu, sigma, df);
}

/** Normal explicitly truncated to [lo, hi]. */
export function normal_trunc(mu: number, sigma: number, lo: number, hi: number): string {
  return formatFamilySpec('normal-trunc', mu, sigma, lo, hi);
}

/** Log-normal explicitly truncated to [lo, hi] (x-space bounds). */
export function lognormal_trunc(mu: number, sigma: number, lo: number, hi: number): string {
  return formatFamilySpec('lognormal-trunc', mu, sigma, lo, hi);
}

/** Location-scale Student-t explicitly truncated to [lo, hi]. */
export function t_trunc(mu: number, sigma: number, df: number, lo: number, hi: number): string {
  return formatFamilySpec('t-trunc', mu, sigma, df, lo, hi);
}

/** Exp of location-scale Student-t explicitly truncated to [lo, hi]
 *  (x-space bounds). */
export function logt_trunc(mu: number, sigma: number, df: number, lo: number, hi: number): string {
  return formatFamilySpec('logt-trunc', mu, sigma, df, lo, hi);
}


// ── PWL / utility helpers ────────────────────────────────────────────────

/** Trapezoidal distribution: [[lo, 0], [peak_lo, 1], [peak_hi, 1], [hi, 0]].
 *  No family-spec form; returns PWL pairs. */
export function trap(
  lo: number, peak_lo: number, peak_hi: number, hi: number,
): number[][] {
  return [[lo, 0], [peak_lo, 1], [peak_hi, 1], [hi, 0]];
}

/** Clamp x to [lo, hi]. */
export function clamp(x: number, lo: number, hi: number): number {
  return Math.min(Math.max(x, lo), hi);
}


// ── Math re-exports (match Python richcode's \`from math import ...\`) ─────

export const exp = Math.exp;
export const log = Math.log;
export const log2 = Math.log2;
export const log10 = Math.log10;
export const sqrt = Math.sqrt;


// ── Single bundle for injection into user code ──────────────────────────

/**
 * The bundle destructured inside the user's \`belief_spec_for_cparam_combo\` body.
 * Names in this object are the bare identifiers the user can call.
 *
 * Keys here must match \`HELPER_NAMES\` exactly (asserted at module load).
 */
export const HELPERS = {
  tri,
  uniform,
  uni,
  beta,
  normal,
  lognormal,
  loguniform,
  t,
  logt,
  normal_trunc,
  lognormal_trunc,
  t_trunc,
  logt_trunc,
  trap,
  clamp,
  exp,
  log,
  log2,
  log10,
  sqrt,
} as const;

// Assert HELPER_NAMES and HELPERS agree — protects against silent drift
// since the names list lives in a separate module (so code that only needs
// the names doesn't pull in the distribution machinery).
{
  const keysFromBundle = Object.keys(HELPERS);
  const namesList = [...HELPER_NAMES];
  const missingInNames = keysFromBundle.filter(k => !namesList.includes(k));
  const missingInBundle = namesList.filter(n => !keysFromBundle.includes(n));
  if (missingInNames.length > 0 || missingInBundle.length > 0) {
    throw new Error(
      \`belief_helpers: HELPER_NAMES ↔ HELPERS drift. \` +
      \`Missing from names: \${JSON.stringify(missingInNames)}. \` +
      \`Missing from bundle: \${JSON.stringify(missingInBundle)}.\`
    );
  }
}
`;function SU(n){if(n.length===0)return["return {","  point:  {},","  bounds: {},","  sample: {},","};"].join(`
`);const e=n.map(i=>`${i}: 0`).join(", "),r=n.map(i=>`${i}: [0, 1]`).join(", "),t=n.map(i=>`    ${i}: tri(0, 0.4, 1),`).join(`
`);return["return {",`  point:  { ${e} },`,`  bounds: { ${r} },`,"  sample: {",t,"  },","};"].join(`
`)}function AU(n,e){return e}function LU(n){const e=[];for(const r of n.get_cparams()){const t=r.allowed_values;t===void 0||typeof t=="string"||e.push(r.id.slice(7))}return e}const IU="// code data missing";function kU(n,e,r){const t=LU(n),i=n.get_svar_bare_names(),o=`function belief_spec_for_cparam_combo(${t.join(", ")}) {`,u=e.raw_code_input!==""?e.raw_code_input:r==="edit"?SU(i):IU,a=r==="view"?" readonly":"",s=i.map(p=>{const h=K(AU(n,p)),m=K(e.reasoning_response[p]??"");return`<div class="code-reasoning-row"><label class="code-reasoning-label">${h}</label><textarea class="code-reasoning-input auto-expand" data-svar="${K(p)}" rows="1" spellcheck="false"${a}>${m}</textarea></div>`}).join(""),c=K(e.misc_response),f=`// ${wU.join(", ")} are injected helper functions. For details (warning: the literal code with some irrelevant docs): `,d=r==="edit"?'<div class="code-action-row"><button class="code-sample-btn" type="button">Sample</button><span class="code-status" aria-live="polite"></span></div><div class="code-error-area"></div><div class="result-detail">The remaining fields below are only notes for you, unless you choose to contribute your estimation to appear in the `Adhoc...` dropdown in future builds, which we strongly encourage!</div>':e.raw_code_input===""?"":`<div class="code-action-row"><button class="copy-to-yours-btn" type="button" title="Copy this entry's code into your editable Yours-plaincode code">Copy to Yours</button></div>`;return`<div class="yours-code-input" data-variant="${r}"><div class="code-editor"><pre class="code-signature-line">${K(o)}</pre><pre class="code-helpers-comment"><span class="code-helpers-comment-text">${K(f)}</span><span class="code-helpers-help-slot"></span></pre><textarea class="code-body-input auto-expand" rows="10" spellcheck="false"${a}>${K(u)}</textarea><pre class="code-signature-line">}</pre></div>`+d+'<div class="code-reasoning-section"><div class="code-section-header">Reasoning</div>'+s+`</div><div class="code-misc-section"><div class="code-section-header">Misc</div><textarea class="code-misc-input auto-expand" rows="1" spellcheck="false"${a}>${c}</textarea></div></div>`}function RU(n){const e=()=>{n.style.height="auto",n.style.height=`${n.scrollHeight}px`};n.addEventListener("input",e),e()}function $$(n){for(const e of n.querySelectorAll("textarea.auto-expand"))RU(e)}function p9(n,e,r,t){n.innerHTML=kU(e,r,t),$$(n),CU(n)}function CU(n){for(const e of n.querySelectorAll(".code-helpers-help-slot"))e.childElementCount>0||e.appendChild(ox($U))}const MU=1e-15;function NU(n,e){return e.filter(r=>{const t=n[r];if(typeof t=="string")return k2(t)!==null;if(!Array.isArray(t)||t.length===0)return!1;const i=t[0];return t[t.length-1][0]-i[0]<MU})}function TU(n){var r;const e={};for(const t of n){const i=t.id.startsWith("svar:")?t.id.slice(5):t.id,[o,u]=qU[t.type_mathlevel]??[!0,!0],a=((r=t.type_detail)==null?void 0:r.range)??[0,1];e[i]={lo:a[0],hi:a[1],loClosed:o,hiClosed:u}}return e}const qU={closed_real_interval:[!0,!0],left_open_real_interval:[!1,!0],right_open_real_interval:[!0,!1],open_real_interval:[!1,!1]},FU=.8,h9=.05,OU="Positive values mean…",PU=2;function DU(n,e,r){if(!e||r&&Object.keys(r).length>0)return null;const t=q9(e,n.get_svar_bare_names());return t.length<PU?null:t}function S$(n,e,r,t){var o;const i=DU(e,r,t);return i===null?null:{eligibleSvars:i,degenerateSvars:NU(((o=n.yoursRecord.trials[0])==null?void 0:o.sample)??{},i)}}function Rh(n,e,r,t){return ve(n.ui.whose).source!=="yours-plainnum"||n.ui.inputMode!=="sample"?null:S$(n,e,r,t)}function Ch(n,e){var t;const r=n.yoursRecord;return r.lloads_draft===void 0?ay((t=r.trials[0])==null?void 0:t.lloads,e.eligibleSvars):uy(r.lloads_draft,e.eligibleSvars)}function A$(n,e,r){const t=n.get_svar_bare_names(),i=Jt(n);if(i.length!==t.length)throw new Error(`joint-dependence editor has ${t.length} subjective variables but ${i.length} display labels`);const o=new Map(t.map((u,a)=>[u,i[a]]));return new Map(r.map(u=>[u,Ae(o.get(u),e)]))}function xU(n,e,r,t,i,o){const u=Rh(e,r,i,o);if(u===null){n.innerHTML="";return}const a=Ch(e,u);n.innerHTML=BU(a,u,A$(r,t,u.eligibleSvars),e.ui.jointDependenceEditorOpen),$$(n);const s=n.querySelector(".jde-help-slot");s&&s.appendChild(Mr(Ux)),L$(n,a,u),I$(n,a,u,r,t)}function BU(n,e,r,t){const i=n.latents.length===0?HU():UU(n,e,r);return`<details class="joint-dependence-editor"${t?" open":""}><summary class="jde-summary"><span class="jde-summary-title">Joint dependence</span><span class="jde-summary-explainer">Optional named uncertainties shared across your distributions</span><span class="jde-status-pill"></span></summary><div class="jde-body"><div class="jde-intro"><span class="jde-help-slot"></span><p>A latent is one shared uncertainty that can move two or more of your quantities together, or in opposite directions. Describe what it means, then give it signed loadings. Nothing you state here changes the distributions you gave above.</p></div>`+i+"</div></details>"}function HU(){return'<div class="jde-empty-state"><div class="jde-empty-title">Currently sampled independently</div><p>Add a latent only when the distributions above do not tell the whole joint-belief story.</p><button class="jde-btn jde-add-latent-btn" type="button">Add a shared uncertainty</button></div>'}function UU(n,e,r){return'<div class="jde-active"><div class="jde-toolbar"><div class="jde-section-title">Shared uncertainties</div><button class="jde-btn jde-add-latent-btn" type="button">+ Add latent</button></div><div class="jde-latent-list">'+n.latents.map(jU).join("")+`</div><div class="jde-matrix-section"><div class="jde-matrix-heading"><div class="jde-section-title">Signed loadings</div><div class="jde-matrix-hint">−1 falls as the latent rises · +1 rises with it · 0 unaffected</div></div><div class="jde-matrix-scroll">${WU(n,e,r)}</div><div class="jde-banner" role="status"></div></div><div class="jde-bottom-actions"><button class="jde-btn jde-zero-loadings-btn" type="button">Zero all loadings</button><button class="jde-btn jde-remove-all-btn" type="button">Remove all latents</button></div><details class="jde-correlations"><summary>Implied pairwise correlations</summary><p class="jde-correlations-note">Derived from the loadings; feedback, not another input surface. Quantities your latents leave uncoupled are omitted.</p><div class="jde-matrix-scroll">`+VU(e,r)+'</div></details><div class="jde-artifact"><div class="jde-artifact-caption">What your response discloses:</div><div class="jde-artifact-host"></div></div></div>'}function jU(n,e){const r=`jde-latent-name-${e}`,t=`jde-latent-description-${e}`;return`<div class="jde-latent-card" data-latent-index="${e}"><div class="jde-latent-header"><span class="jde-latent-number">${e+1}</span><button class="jde-btn jde-remove-latent-btn" type="button" data-latent-index="${e}">Remove</button></div><div class="jde-latent-fields"><div class="jde-field"><label for="${r}">Short name</label><input id="${r}" class="jde-latent-text" type="text" data-latent-index="${e}" data-latent-field="name" placeholder="e.g. shared evidence quality" value="${se(n.name)}"></div><div class="jde-field"><label for="${t}">Meaning and positive direction</label><textarea id="${t}" class="jde-latent-text auto-expand" rows="2" data-latent-index="${e}" data-latent-field="description" placeholder="${se(OU)}">${K(n.description)}</textarea></div></div></div>`}function WU(n,e,r){const t='<tr><th class="jde-variable-col">Quantity</th>'+n.latents.map((u,a)=>`<th class="jde-loading-col"><span class="jde-matrix-latent-name" data-latent-index="${a}"></span><span class="jde-matrix-latent-hint">−1 to +1</span></th>`).join("")+'<th class="jde-budget-col">Loading budget</th></tr>',i=new Set(e.degenerateSvars),o=e.eligibleSvars.map(u=>{const a=i.has(u),s=r.get(u),c=a?'<span class="jde-svar-note">single value — no dependence possible</span>':"",l=n.latents.map((f,d)=>`<td>${GU(f.loadings[u]??null,d,u,s,a)}</td>`).join("");return`<tr data-svar="${se(u)}" data-svar-label="${se(k$(s))}"${a?' class="jde-row-ineligible"':""}><th scope="row" class="jde-svar-cell" data-svar="${se(u)}"><span class="jde-svar-label">${s}</span>${c}</th>`+l+`<td><div class="jde-budget-track"><span class="jde-budget-fill" data-svar="${se(u)}"></span></div><div class="jde-budget-copy" data-svar="${se(u)}"></div></td></tr>`}).join("");return`<table class="jde-loading-matrix"><thead>${t}</thead><tbody>${o}</tbody></table>`}function GU(n,e,r,t,i){const o=se(`Loading of ${k$(t)} on latent ${e+1}`),u=`data-latent-index="${e}" data-svar="${se(r)}"${i?" disabled":""}`,a=n===null?"":R$(n);return`<div class="jde-loading-control"><input class="jde-loading-range" type="range" min="-1" max="1" step="${h9}" value="${n??0}" ${u} aria-label="${o}"><input class="jde-loading-number" type="number" min="-1" max="1" step="${h9}" value="${a}" ${u} aria-label="${o}, numeric"></div>`}function VU(n,e){const r=n.eligibleSvars,t=r.map(o=>`<th class="jde-svar-cell" data-svar="${se(o)}"><span class="jde-svar-label">${e.get(o)}</span></th>`).join(""),i=r.map(o=>`<tr><th class="jde-svar-cell" data-svar="${se(o)}"><span class="jde-svar-label">${e.get(o)}</span></th>`+r.map(()=>"<td></td>").join("")+"</tr>").join("");return`<table class="jde-correlation-table"><thead><tr><th></th>${t}</tr></thead><tbody>${i}</tbody></table>`}function L$(n,e,r){const t=cy(e,r.eligibleSvars,r.degenerateSvars,oj(n)),i=gR(e),o=n.querySelector(".jde-status-pill");o&&(o.className=`jde-status-pill ${XU(t,e,i)}`.trimEnd(),o.textContent=YU(t,e,i)),KU(n,e),JU(n,t),zU(n,e),QU(n,e,r),ZU(n,t,e,i),ej(n,e,r)}function XU(n,e,r){return n.length>0?"invalid":r?"valid":e.latents.length>0?"warning":""}function YU(n,e,r){if(n.length>0)return`${n.length} issue${n.length===1?"":"s"}`;const t=e.latents.length;return r?`${t} latent${t===1?"":"s"} · valid`:t>0?`${t} considered · independent`:"Independent"}function KU(n,e){var r;for(const t of n.querySelectorAll(".jde-loading-range, .jde-loading-number")){if(t===document.activeElement)continue;const i=t.dataset.svar;if(i===void 0)continue;const o=((r=e.latents[Number(t.dataset.latentIndex)])==null?void 0:r.loadings[i])??null;o!==null&&(t.value=R$(o))}}function JU(n,e){const r=new Set(e.filter(i=>i.field!==void 0).map(i=>`${i.latentIndex}:${i.field}`));for(const i of n.querySelectorAll(".jde-latent-text"))i.classList.toggle("jde-field-invalid",r.has(`${i.dataset.latentIndex}:${i.dataset.latentField}`));const t=new Set(e.filter(i=>i.svar!==void 0&&i.latentIndex!==void 0).map(i=>`${i.latentIndex}:${i.svar}`));for(const i of n.querySelectorAll(".jde-loading-number"))i.classList.toggle("jde-field-invalid",t.has(`${i.dataset.latentIndex}:${i.dataset.svar}`))}function zU(n,e){var r;for(const t of n.querySelectorAll(".jde-matrix-latent-name")){const i=Number(t.dataset.latentIndex),o=(r=e.latents[i])==null?void 0:r.name.trim();t.textContent=o||`Latent ${i+1}`,t.title=t.textContent}}function QU(n,e,r){const t=sy(e,r.eligibleSvars);for(const i of n.querySelectorAll(".jde-budget-fill")){const o=t[i.dataset.svar??""];o!==void 0&&(i.style.width=`${Math.min(100,Math.max(0,o*100))}%`,i.className="jde-budget-fill"+(o>1?" over":o>FU?" near":""))}for(const i of n.querySelectorAll(".jde-budget-copy")){const o=t[i.dataset.svar??""];if(o===void 0)continue;const u=o>1;i.className=`jde-budget-copy${u?" over":""}`,i.textContent=u?`${o.toFixed(3)} / 1 · over by ${(o-1).toFixed(3)}`:`${o.toFixed(3)} / 1`}}function ZU(n,e,r,t){const i=n.querySelector(".jde-banner");if(i){if(e.length>0){i.className="jde-banner invalid";const o=e.length>1?` (${e.length-1} more)`:"";i.textContent=`${e[0].message}${o} The calculator keeps using your last valid joint specification until this is repaired.`;return}if(!t){i.className="jde-banner warning",i.textContent=r.latents.length>0?"Valid, and exactly independent: the latents you named are disclosed as considered, with every loading at zero.":"Valid: sampled independently.";return}i.className="jde-banner",i.textContent="Valid joint specification. Every quantity is within its loading budget."}}function ej(n,e,r){const t=n.querySelector(".jde-correlations"),i=n.querySelector(".jde-correlation-table thead tr"),o=n.querySelector(".jde-correlation-table tbody");if(t===null||i===null||o===null)return;const u=bR(e,r.eligibleSvars),a=r.eligibleSvars.map((s,c)=>r.eligibleSvars.some((l,f)=>f!==c&&u[c][f]!==0));t.hidden=a.filter(Boolean).length<2,i.querySelectorAll("th").forEach((s,c)=>{c>0&&(s.hidden=!a[c-1])}),o.querySelectorAll("tr").forEach((s,c)=>{s.hidden=!a[c],s.querySelectorAll("td").forEach((l,f)=>{var d;l.hidden=!a[f],l.textContent=uj(((d=u[c])==null?void 0:d[f])??NaN)})})}function nj(n,e,r,t,i,o){if(n.querySelector(".joint-dependence-editor")===null)return;const u=Rh(e,r,i,o);if(u===null)return;const a=A$(r,t,u.eligibleSvars);for(const s of n.querySelectorAll(".jde-svar-cell")){const c=a.get(s.dataset.svar??""),l=s.querySelector(".jde-svar-label");c!==void 0&&l!==null&&(l.innerHTML=c)}I$(n,Ch(e,u),u,r,t)}function I$(n,e,r,t,i){const o=n.querySelector(".jde-artifact-host");if(o===null)return;const u=ly(e,r.eligibleSvars,r.degenerateSvars);o.innerHTML=u.kind==="invalid"?'<div class="jde-artifact-pending">Preview pauses until the issues above are repaired.</div>':ih([{point:{},bounds:{},sample:{},lloads:u.lloads}],t,i,{keepFolded:!0}).specHtml}function v9(n){const e=Number(n.dataset.latentIndex);if(!Number.isInteger(e))return null;if(n.classList.contains("jde-latent-text")){const r=n.dataset.latentField;return r!=="name"&&r!=="description"?null:{kind:"text",latentIndex:e,field:r,value:n.value}}if(n.classList.contains("jde-loading-range")||n.classList.contains("jde-loading-number")){const r=n.dataset.svar;if(r===void 0)return null;const t=n.value.trim(),i=t===""||!Number.isFinite(Number(t))?null:Number(t);return{kind:"loading",latentIndex:e,svar:r,value:i}}return null}function rj(n,e){return{latents:n.latents.map((r,t)=>t!==e.latentIndex?r:e.kind==="text"?{...r,[e.field]:e.value}:{...r,loadings:{...r.loadings,[e.svar]:e.value}})}}function tj(n){const e=n.closest("button");if(e===null)return null;if(e.classList.contains("jde-add-latent-btn"))return{kind:"add"};if(e.classList.contains("jde-zero-loadings-btn"))return{kind:"zero-all"};if(e.classList.contains("jde-remove-all-btn"))return{kind:"remove-all"};if(e.classList.contains("jde-remove-latent-btn")){const r=Number(e.dataset.latentIndex);return Number.isInteger(r)?{kind:"remove",latentIndex:r}:null}return null}function ij(n,e,r){switch(e.kind){case"add":return{latents:[...n.latents,qv(r)]};case"remove":return{latents:n.latents.filter((t,i)=>i!==e.latentIndex)};case"zero-all":return{latents:n.latents.map(t=>({...t,loadings:qv(r).loadings}))};case"remove-all":return{latents:[]}}}function k$(n){return n.replace(/<[^>]*>/g,"").trim()}function oj(n){const e={};for(const r of n.querySelectorAll("tr[data-svar-label]")){const t=r.dataset.svar;t!==void 0&&(e[t]=r.dataset.svarLabel)}return e}function R$(n){return String(n)}function uj(n){return Number.isFinite(n)?n===0?"0.000":`${n>0?"+":"−"}${Math.abs(n).toFixed(3)}`:"invalid"}function Mh(n,e){return n??!!(e??!1)}function aj(n,e){return!Mh(n,e)}function sj(n){return!Pe(n)}const C$="execution timed out",Hp="execution aborted";function cj(n,e){const t=(e.workerFactory??lj)();return new Promise((i,o)=>{var l,f;let u=!1;const a=()=>{var d;u=!0,clearTimeout(c),(d=e.signal)==null||d.removeEventListener("abort",s),t.terminate()},s=()=>{u||(a(),o(new Error(Hp)))};if((l=e.signal)!=null&&l.aborted){t.terminate(),o(new Error(Hp));return}(f=e.signal)==null||f.addEventListener("abort",s);const c=setTimeout(()=>{u||(a(),o(new Error(C$)))},e.timeoutMs);t.addEventListener("message",d=>{u||(a(),i(d.data))}),t.addEventListener("error",d=>{u||(a(),o(new Error(d.message||"worker error")))}),t.postMessage(n)})}function lj(){return new Worker(new URL("/hirwebdev/assets/plaincode_eval_worker-ChjrGsV-.js",import.meta.url),{type:"module"})}function fj(n,e,r,t){const{html:i}=$H(e,void 0,r);n.innerHTML=i}const Nh="keymap-popover",dj=70,pj=620,hj=260,vj=120,Ni=16;function mj(){return vt}function M$(n){const e=window.innerWidth,r=window.innerHeight,t=Ox(),i=(t==null?void 0:t.left)??Ni,o=(t==null?void 0:t.bottom)??Ni,u=Math.max(hj,Math.min(pj,Math.round(e*dj/100),e-i-Ni)),a=Math.max(vj,r-o-Ni);n.style.width=`${u}px`,n.style.maxHeight=`${a}px`,n.style.left=`${Math.round(i)}px`,n.style.top=`${Math.round(o)}px`}function Th(){return document.getElementById(Nh)}function bj(){return Th()!==null}function ji(){var n;(n=Th())==null||n.remove()}function To(){const n=Th();n&&M$(n)}function gj(){const n=fw(),e=bj();if(n&&e){dw(),ji();return}n||Fx(),e?To():N$()}function Ti(n,e){n.classList.toggle("keymap-row-invalid",e!=="");const r=n.querySelector(".keymap-error");r&&(r.textContent=e)}function _j(n){const e=mt();n.innerHTML="";for(const r of mj()){const t=document.createElement("div");t.className="keymap-row";const i=document.createElement("label");i.className="keymap-label",i.htmlFor=`keymap-input-${r.id}`,i.textContent=r.description;const o=document.createElement("input");o.id=`keymap-input-${r.id}`,o.className="keymap-input",o.type="text",o.maxLength=1,o.autocomplete="off",o.spellcheck=!1,o.value=e[r.id]??"",o.dataset.shortcutId=r.id,o.setAttribute("aria-label",`${r.description} shortcut key`);const u=document.createElement("div");u.className="keymap-error",o.addEventListener("input",()=>{const a=o.dataset.shortcutId,s=G2(o.value);if(!s.ok){Ti(t,s.error??"Invalid shortcut key.");return}const c=zE(a,s.key);if(c){const f=vt.find(d=>d.id===c);Ti(t,`Already assigned to "${(f==null?void 0:f.description)??c}".`);return}const l=cx(a,s.key);if(!l.ok){Ti(t,l.error??"Invalid shortcut key.");return}o.value=l.key,Ti(t,"")}),t.appendChild(i),t.appendChild(o),t.appendChild(u),n.appendChild(t)}}function N$(){ji();const n=document.createElement("div");n.id=Nh,n.className="keymap-popover",n.tabIndex=-1;const e=document.createElement("button");e.className="help-widget-close",e.type="button",e.textContent="×",e.setAttribute("aria-label","Close");const r=document.createElement("h3");r.className="keymap-title",r.textContent="Keymap";const t=document.createElement("div");t.className="keymap-body",_j(t),e.addEventListener("click",ji),n.addEventListener("keydown",i=>{i.key==="Escape"&&ji()}),n.appendChild(e),n.appendChild(r),n.appendChild(t),document.body.appendChild(n),M$(n),n.focus()}const yj="arg-title-help",Ej=20,wj=50,m9=/\b\d+\.\d+\.\d+\b/;function $j(n,e){return m9.test(n)||e!==void 0&&m9.test(e)}function Sj(n,e){const r=n.querySelector(".arg-title");if(!r||!$j(r.textContent??"",e))return;const t=Mr(jx,Ej,wj);t.classList.add(yj),r.prepend(t)}const qh="global-example-controls",Aj=5;function Lj(n){return n.querySelectorAll(".examples").length}function Ij(n){const e=document.getElementById(qh);e&&(e.hidden=Lj(n)<Aj)}function kj(){const n=document.getElementById(qh);return n!==null&&!n.hidden}const Up="stats-display-select",Rj=["probability","odds"],Cj="Mean, median, and credible interval probabilities displayed as odds",Mj="Computed probabilities displayed as odds";function Nj(n){const e=yn(ve(n.ui.whose).source);return e==="plaincode"||e==="richcode"||n.ui.inputMode==="sample"}function Tj(n){return n?Object.values(n).some(e=>e.typeHighlevel==="probability"):!1}function qj(n,e,r){if(!Tj(r)){n.innerHTML="";return}const t=e.ui.probAsOdds,i=Rj.map(a=>`<option value="${a}"${a===t?" selected":""}>${a}</option>`).join(""),o=Nj(e)?Cj:Mj,u=t==="odds"?`<p class="stats-display-odds-note"><strong>${o}</strong></p>`:"";n.innerHTML=`<div class="stats-display-row"><label for="${Up}">stats display</label><select id="${Up}">${i}</select></div>`+u}const Fj="framingnote",Oj=":scope > .framing-note-summary > .framing-note-content",qo="framing-note-abbreviable",Fh="framing-note-abbreviated",Oh="framing-note-abbrev-tail",T$="framing-note-abbrev-control",Ph="framing-note-abbrev-toggle",Pj="framing-note-abbrev-expand",Dj="framing-note-abbrev-collapse",xj="more",Bj="abbrev",Hj="…",Uj=20,jj=.5,q$=[T7],Wj=[...q$,u2,"srcquotes-inline",q7,F7,O7],Gj="a, .ref-popover, .symbol-ref-name, .inline-note-ref, .srcquote-widget",Vj=`<span class="${T$} ${Pj}">${Hj}<button class="${Ph}">${xj}</button></span>`,Xj=`<button class="${T$} ${Ph} ${Dj}">${Bj}</button>`;function Yj(n,{thresholdChars:e,startAbbreviated:r}){if(!Number.isFinite(e)||e<1)return;const t=[];for(const i of n.querySelectorAll(`.${Fj}`)){if(i.classList.contains(qo))continue;const o=i.querySelector(Oj);if(o===null)continue;const{totalChars:u,cut:a}=Zj(zj(o),e);a===null||u<=e||u-a.headChars<e*jj||t.push({note:i,content:o,cut:a})}for(const{note:i,content:o,cut:u}of t){const a=nW(u,o);oW(a,o).insertAdjacentHTML("afterend",Vj),uW(o).insertAdjacentHTML("beforeend",Xj),i.classList.add(qo),i.classList.toggle(Fh,r)}}function Kj(n,e){for(const r of n.querySelectorAll(`.${qo}`))r.classList.toggle(Fh,e)}function Jj(n){const e=n.closest(`.${qo}`);e!==null&&e.classList.toggle(Fh)}function zj(n){const e=[],r=t=>{for(const i of t.childNodes)i.nodeType===Node.TEXT_NODE?e.push(i):i.nodeType===Node.ELEMENT_NODE&&!Qj(i)&&r(i)};return r(n),e}function Qj(n){return n.hasAttribute("hidden")||n.localName==="svg"?!0:getComputedStyle(n).display==="none"}function Zj(n,e){let r=0,t=!0,i=null;for(const o of n)for(let u=0;u<o.data.length;u++){const a=eW(o.data[u]);a&&t||(t=a,r++,i===null&&r===e&&(i={node:o,offset:u+1,headChars:r}))}return{totalChars:r,cut:i}}function eW(n){return n.trim()===""}function nW(n,e){const r=rW(n.node,e);let t;r!==null?(r.classList.add(Oh),t=r):t=F$(n.node.splitText(tW(n.node.data,n.offset)));let i=t;for(;i.parentNode!==null&&i!==e;){const o=[];for(let u=i.nextSibling;u!==null;u=u.nextSibling)o.push(u);for(const u of o)iW(u);i=i.parentNode}return t}function rW(n,e){let r=null;for(let t=n.parentElement;t!==null&&t!==e;t=t.parentElement)t.matches(Gj)&&(r=t);return r}function tW(n,e){const r=n.lastIndexOf(" ",e);return r<=0||e-r>Uj?e:r}function iW(n){n.nodeType===Node.ELEMENT_NODE?n.classList.add(Oh):n.nodeType===Node.TEXT_NODE&&F$(n)}function F$(n){const e=document.createElement("span");return e.className=Oh,n.parentNode.insertBefore(e,n),e.appendChild(n),e}function oW(n,e){let r=n,t=r.parentElement;for(;t!==null&&t!==e&&!aW(t);)r=t,t=r.parentElement;return r}function uW(n){const e=n.lastElementChild;return e!==null&&q$.some(r=>e.classList.contains(r))?e:n}function aW(n){return Wj.some(e=>n.classList.contains(e))}const sW="srcquote-explainer",cW="srcquote-explainer";function lW(){return hw[sW]}function fW(n,e,r){n.innerHTML=`<div class="${cW}"><span class="${u2}">`+Ae(lW(),r)+"</span></div>"}function b9(n,e){if(e.kind==="sourcequote")return{kind:"sourcequote",quotes:n.resolve_srcquotes(e.sourcequoteIds)};if(![...Kp(n).values()].some(t=>t.anchor===e.targetId))throw new Error(`Popover target ${JSON.stringify(e.targetId)} is not present in ${n.aid}.`);return{kind:"entity",rawBody:dW(n).get(e.targetId)??"",anchor:e.targetId}}function dW(n){const e=new Map;for(const r of n.isym_entries()){const t=r.id.replace(/^isym:/,"");e.set(`#isym-${t}`,r.defn)}for(const r of Vp(n))e.set(r.anchor,r.defn);for(const r of n.svar_decls()){const t=j9(r.id);e.set(`#gloss-${t}`,r.defn);const i=`isym:${t}`,o=n.can_consolidate_isym_svar(i)?n.get_isym(i).defn:r.defn,u=[`{expr:${t}}`];o&&u.push(o),e.set(`#${Yp}${t}`,u.join(`

`))}for(const r of n.get_display_form_keys())e.set(`#form-${Po(r)}`,n.get_display_form(r));for(const r of n.get_axioms()){const t=n.get_display_ax(r.id);t&&e.set(`#${Xp}${Ot(r.id)}`,t)}for(const r of n.get_options())e.set(`#opt-${Fe(r.id)}`,r.defn);for(const r of n.get_tchoice_decls())e.set(`#tchoice-${Ft(r.id)}`,r.defn);for(const r of n.definedSym){const t=r.id.startsWith("definedSym:")?r.id.slice(11):r.id,i=n.get_display_definedSym_or_none(r.id)??"",o=[];i&&o.push(`:= ${i}`),r.defn&&o.push(r.defn),e.set(`#defsym-${t}`,o.join(" — "))}return e}const g9="hir-popover",pW="hir-popover-rail",hW="hir-popover-rail-card",vW="hir-popover-content",_9="hir-popover-close",mW="ref-popover",Lt="srcquote-pinned";function qi(n,e){if(!(n instanceof Element))return null;const r=n.closest(e);return r instanceof HTMLButtonElement?r:null}function bW(n,e){return e instanceof Node&&n.contains(e)}function gW(n){const e=n.devMode??!1,r=new Map,t=[];let i=null;const o=_=>{if(console.error("Failed to open popover.",_),e)throw _},u=()=>(i!=null&&i.isConnected||(i=document.createElement("aside"),i.className=pW,i.setAttribute("aria-label","Open notes"),document.body.append(i)),i),a=_=>{const y=t.indexOf(_);y!==-1&&t.splice(y,1)},s=(_,y=!1)=>{var E;r.delete(_.trigger),a(_),_.popover.remove(),_.trigger.setAttribute("aria-expanded","false"),_.kind==="sourcequote"&&((E=_.trigger.closest(`.${It}`))==null||E.classList.remove(Lt)),y&&_.trigger.isConnected&&_.trigger.focus(),i&&i.childElementCount===0&&(i.remove(),i=null)},c=_=>{for(const y of[...t])y.trigger!==_&&s(y)},l=(_,y)=>{const E=document.createElement(_==="sourcequote"?"span":"section");return E.className=_==="sourcequote"?`${g9} ${gk}`:`${g9} ${hW}`,E.setAttribute("role","dialog"),E.setAttribute("aria-label",_==="sourcequote"?"Source quotes":"Reference details"),E.innerHTML=`<button type="button" class="${_9}" aria-label="Close popover">×</button><span class="${vW}">${y}</span>`,E},f=(_,y,E)=>{const A={trigger:_,popover:y,kind:E};return r.set(_,A),t.push(A),_.setAttribute("aria-expanded","true"),A},d=_=>{const y=_.getAttribute(x7);if(y!==null)return dk(y);const E=_.getAttribute(Ji);if(E===null)throw new Error("Popover trigger is missing target data.");const A=n.getContext(),L=b9(A.jprobInstance,uv(E));if(L.kind!=="entity")throw new Error("A rail trigger must resolve to an entity source.");return(L.rawBody?Ae(L.rawBody,A):"")+`<a href="${L.anchor}" class="popover-go">go →</a>`},p=_=>{n.getPersistentPopovers()||c(_);const y=l("rail",d(_));u().append(y),f(_,y,"rail")},h=(_,y)=>{const E=_.closest(`.${It}`);if(E===null)throw new Error("Source-quote trigger has no widget parent.");const A=_.getAttribute(Ji);if(A===null)throw new Error("Source-quote trigger is missing target data.");const L=n.getContext(),C=b9(L.jprobInstance,uv(A));if(C.kind!=="sourcequote")throw new Error("A source-quote trigger must resolve to source quotes.");n.getPersistentPopovers()||c(_);const I=$k(C.quotes,L),S=l("sourcequote",I);E.append(S),f(_,S,"sourcequote"),E.classList.toggle(Lt,y)},m=_=>{const y=qi(_.target,`.${_9}`);if(y){const L=[...r.values()].find(C=>C.popover.contains(y));L&&s(L,!0);return}const E=qi(_.target,`.${Oi}`);if(E){const L=r.get(E);if(L){const C=E.closest(`.${It}`);C!=null&&C.classList.contains(Lt)?s(L):C==null||C.classList.add(Lt)}else try{h(E,!0)}catch(C){o(C)}return}const A=qi(_.target,`.${mW}, .${D7}`);if(A){const L=r.get(A);if(L)s(L);else try{p(A)}catch(C){o(C)}return}!n.getPersistentPopovers()&&_.target instanceof Node&&!t.some(L=>L.popover.contains(_.target))&&c()},v=_=>{const y=qi(_.target,`.${Oi}`);if(!(!y||r.has(y)))try{h(y,!1)}catch(E){o(E)}},b=_=>{const y=_.target,E=y instanceof Element?y.closest(`.${It}`):null;if(!E||bW(E,_.relatedTarget)||E.classList.contains(Lt))return;const A=E.querySelector(`.${Oi}`);if(!A)return;const L=r.get(A);L&&s(L)},g=_=>{if(_.key!=="Escape")return;const y=t.at(-1);y&&(_.preventDefault(),s(y,!0))};return document.addEventListener("click",m),document.addEventListener("mouseover",v),document.addEventListener("mouseout",b),document.addEventListener("focusin",v),document.addEventListener("focusout",b),document.addEventListener("keydown",g),{closeDisconnectedTriggers:()=>{for(const _ of[...t])_.trigger.isConnected||s(_)},teardown:()=>{document.removeEventListener("click",m),document.removeEventListener("mouseover",v),document.removeEventListener("mouseout",b),document.removeEventListener("focusin",v),document.removeEventListener("focusout",b),document.removeEventListener("keydown",g),c(),i==null||i.remove(),i=null}}}const _W="dag-highlight";function y9(n,e){var o;const r=(o=n.closest(`.${Ep}`))==null?void 0:o.getAttribute(Zi);if(!r)return;const t=r.replace(/[\\"]/g,"\\$&"),i=document.querySelectorAll(`[${Zi}="${t}"]`);for(const u of i)u.classList.toggle(_W,e)}function yW(){const n=e=>{const r=e.target;return r instanceof Element?r.closest(`.${wp}`):null};document.addEventListener("mouseover",e=>{const r=n(e);r&&y9(r,!0)}),document.addEventListener("mouseout",e=>{const r=n(e);r&&y9(r,!1)})}function E9(n,e,r){if(r==="Bool"&&e.type==="checkbox")return e.checked===!0;const t=Jp(n,e.value);if(typeof t=="object")throw new Error(`Invalid scalar control parser use for ${n.id}`);return t}function EW(n,e){const r=e.map(t=>{if(t.type!=="checkbox")throw new Error(`Invalid MultiStringFromSet control for ${n.id}: expected checkbox`);return t.checked===!0?t.value:void 0}).filter(t=>t!==void 0);return Jp(n,r)}function Dh(n,e){let r=`<span class="cparam-or-aopt-name">${K(n)}</span>`;return e.longname&&(r+=` <span class="cparam-or-aopt-longname">(${K(e.longname)})</span>`),r}function Fo(n,e,r,t,i){const o=`${t.dataAttribute}="${se(n)}"`;if(i==="StringFromSet"){if(!Array.isArray(e.allowed_values))throw new Error(`StringFromSet option ${e.id} is missing allowed_values`);const c=e.allowed_values.map(l=>{const f=String(l),d=f===String(r)?" selected":"";return`<option value="${se(f)}"${d}>${K(f)}</option>`}).join("");return`<select class="${t.selectClass}" ${o}>${c}</select>`}if(i==="Number")return`<input class="${t.inputClass}" type="number" ${o} value="${se(String(r))}">`;if(i==="Bool"){const c=r?" checked":"";return`<input class="${t.checkboxClass??t.inputClass}" type="checkbox" ${o}${c}>`}if(i==="FreeString")return`<input class="${[t.inputClass,t.textInputClass].filter(Boolean).join(" ")}" type="text" ${o} value="${se(String(r))}">`;if(!Array.isArray(e.allowed_values))throw new Error(`MultiStringFromSet option ${e.id} is missing allowed_values`);if(!Array.isArray(r))throw new Error(`MultiStringFromSet option ${e.id} has a non-array current value`);const u=new Set(r),a=t.checkboxClass??t.inputClass,s=e.allowed_values.map(c=>{if(typeof c!="string")throw new Error(`MultiStringFromSet option ${e.id} has a non-string allowed value`);const l=u.has(c)?" checked":"";return`<label><input class="${a}" type="checkbox" ${o} value="${se(c)}"${l}> <span>${K(c)}</span></label>`}).join("");return`<span class="${t.checkboxGroupClass??""}">${s}</span>`}const O$="StringFromSet",wW="Parameters",$W="Fixed Parameters",SW="Free Parameters";function AW(n,e,r,t,i,o,u){const a=n.filter(Xi);if(a.length===0)return{headerText:"",bodyHtml:""};const{source:s}=ve(e),c=yn(s)!=="plainnum",l=Ze(s)==="yours",f=c?SW:l?wW:$W,d=t??K;let p="";if(!c&&i&&o){const m=LW(a,r);m!==null&&!i(m)&&(p=`<p class="arg-warning">${d(o)}</p>`)}const h=[];for(const m of a){const v=Fe(m.id),b=d(m.defn),g=(u==null?void 0:u(m))??{atStart:"",atEnd:""},_=r[v]??m.default_value;if(typeof _=="object")throw new Error(`Cparam ${m.id} has a non-scalar current value`);let y=Dh(v,m);c||(l?y+=" = "+IW(v,m,_):y+=` <span class="cparam-or-aopt-value">= ${K(String(_))}</span>`),h.push(`<div class="cparam-or-aopt" id="opt-${v}"><div class="cparam-or-aopt-header">${y}</div><div class="cparam-or-aopt-defn">${g.atStart}${b}${g.atEnd}</div></div>`)}return{headerText:f,bodyHtml:p+h.join("")}}function LW(n,e){const r={};for(const t of n){const i=Fe(t.id),o=e[i]??t.default_value;if(Oo(t.allowed_values)==="string"){if(typeof o!="string")return null;r[i]=o;continue}const u=Number(o);if(!Number.isFinite(u))return null;r[i]=u}return r}function IW(n,e,r){return Fo(n,e,r,{dataAttribute:"data-cparam-body",selectClass:"cparam-body-select",inputClass:"cparam-body-input"},O$)}function kW(n,e,r,t,i,o){const{headerText:u,bodyHtml:a}=AW(e.get_cparams(),t.ui.whose,r.displayOptionValues,l=>Ae(l,r),i,o,l=>Rn(l.srcquotes,r)),s=document.getElementById("cparams-section");if(!a){n.innerHTML="",s&&(s.hidden=!0);return}s&&(s.hidden=!1);const c=document.getElementById("cparams-section-header");c&&(c.textContent=u),n.innerHTML=a}const RW=["VISIBLE_AOPTS"],CW={dataAttribute:"data-aopt-body",selectClass:"aopt-body-select",inputClass:"aopt-body-input",textInputClass:"aopt-body-text-input",checkboxClass:"aopt-body-checkbox",checkboxGroupClass:"aopt-body-checkbox-group"};function MW(n,e,r,t=K,i){const o=Pe(e),u=[];for(const a of n){if(!Gp(a))continue;const s=Fe(a.id),c=r[s]??a.default_value,l=(i==null?void 0:i(a))??{atStart:"",atEnd:""};let f=Dh(s,a);const d=a.input_type==="MultiStringFromSet"?1:2,p=Array.isArray(a.allowed_values)&&a.allowed_values.length>=d;if(o&&(p||a.allowed_values===void 0))f+=" = "+Fo(s,a,c,CW,a.input_type);else{const m=Array.isArray(c)?c.join(", "):String(c);f+=` <span class="cparam-or-aopt-value">= ${K(m)}</span>`}u.push(`<div class="cparam-or-aopt" id="opt-${se(s)}"><div class="cparam-or-aopt-header">${f}</div><div class="cparam-or-aopt-defn">${l.atStart}${t(a.defn)}${l.atEnd}</div></div>`)}return u.join("")}function NW(n,e,r,t,i){const o=MW(r.get_aopts(),i.ui.whose,t.displayOptionValues,a=>Ae(a,t),a=>Rn(a.srcquotes,t)),u=document.getElementById(`${rr[e]}-section`);if(!o){n.innerHTML="",u&&(u.hidden=!0);return}u&&(u.hidden=!1),n.innerHTML=o}const TW=2,qW="(no recorded choice)",P$="data-tchoice-recorded",w9={dataAttribute:"data-tchoice-body",selectClass:"tchoice-body-select",inputClass:"tchoice-body-input",checkboxClass:"tchoice-body-checkbox"};function FW(n){return n.input_type==="Bool"||n.allowed_values.length>=TW}function $9(n,e,r){var i;const t=(i=n[e])==null?void 0:i[r];return t===void 0?"":String(t)}function D$(n){return n===""?qW:n}function OW(n,e,r){const t=e.map((u,a)=>`data-trial-${a}="${se($9(e,a,n))}"`).join(" "),i=$9(e,r,n);return`<span class="tchoice-recorded${i===""?" tchoice-recorded-empty":""}" ${P$}="${se(n)}" ${t}>${K(D$(i))}</span>`}function PW(n,e,r,t={}){const{resultChoicesPerTrial:i,activeTrial:o=0,processDefn:u=K,renderSrcquotes:a}=t,s=[],c=(i==null?void 0:i.length)??0;for(const l of n){const f=Ft(l.id),d=(a==null?void 0:a(l))??{atStart:"",atEnd:""};let p=Dh(f,l);const h=P9(l),v=Ur(l)&&FW(l)||h,b=e&&v,g=!e&&v&&i!==void 0&&i.some(y=>y[f]!==void 0);let _="";if(b&&h){const y=r[f]??"";p+=" = "+Fo(f,l,y,w9,"Number")}else if(b&&Ur(l)){const y=r[f]??l.default_value;p+=" = "+Fo(f,l,y,w9,l.input_type)}else g?(p+=" = "+OW(f,i,o),c>1&&(_=mh(c,o))):Ur(l)&&(_=`<div class="tchoice-allowed">One of: ${l.allowed_values.map(E=>K(String(E))).join(", ")}</div>`);s.push(`<div class="cparam-or-aopt" id="tchoice-${se(f)}"><div class="cparam-or-aopt-header">${p}</div><div class="cparam-or-aopt-defn">${d.atStart}${u(l.defn)}${d.atEnd}</div>`+_+"</div>")}return s.join("")}function DW(n){return(yn(ve(n.ui.whose).source)==="plaincode"?n.yoursCodeRecord:n.yoursRecord).trial_choices??{}}function xW(n,e,r,t,i){const o=e.get_tchoice_decls(),u=Pe(t.ui.whose),a=vh((i==null?void 0:i.length)??0,t.ui.assumptionTrialIndex),s=PW(o,u,DW(t),{resultChoicesPerTrial:u?void 0:i,activeTrial:a,processDefn:l=>Ae(l,r),renderSrcquotes:l=>Rn(l.srcquotes,r)}),c=document.getElementById(`${rr.TCHOICE}-section`);if(!s){n.innerHTML="",c&&(c.hidden=!0);return}c&&(c.hidden=!1),n.innerHTML=s}function BW(n,e){for(const r of n.querySelectorAll(".assumption-trial-btn"))r.classList.toggle("active",r.dataset.trial===String(e));for(const r of n.querySelectorAll(`[${P$}]`)){const t=r.getAttribute(`data-trial-${e}`)??"";r.textContent=D$(t),r.classList.toggle("tchoice-recorded-empty",t==="")}}function HW(n,e){if(n.input_type==="Bool"){if(e.type!=="checkbox")throw new Error(`Bool tchoice ${n.id} expected a checkbox control`);return e.checked===!0}if(n.input_type==="Number"){const r=Number(e.value);if(!Number.isFinite(r))throw new Error(`Invalid numeric tchoice value for ${n.id}: ${e.value}`);return r}return e.value}function UW(n,e){if(e.value.trim()==="")return null;const r=Number(e.value);if(!Number.isFinite(r))return null;const[t]=hr([n]);return Gi(t,r)?r:null}function x$(n,e,r){if(e===void 0)return null;if(e!=="claudecode"&&e!=="codex")return`${r} carries invalid agent_cli ${JSON.stringify(e)}`;if(typeof n!="string")return`${r} carries agent_cli ${JSON.stringify(e)} without a model family`;let t;try{t=hB(n)}catch(i){return`${r} carries agent_cli ${JSON.stringify(e)} for unknown model ${JSON.stringify(n)}: ${String(i)}`}return e!==t?`${r} model ${JSON.stringify(n)} carries agent_cli ${JSON.stringify(e)}; expected ${JSON.stringify(t)}`:null}function jW(n){if(n===void 0)return null;for(let e=0;e<n.length;e++){const r=n[e],t=x$(r.model,r.agent_cli,`trial_metadata[${e}]`);if(t!==null)return t}return null}function WW(n){return"aggregate"in n&&n.aggregate!==void 0?jW(n.trial_metadata):x$(n.model,n.agent_cli,"result")}function bp(n,e,r){const t=[];for(const i of n){const o=WW(i);if(o===null){t.push(i);continue}const u=`methodical ${e} provenance mismatch for ${JSON.stringify(i.label)}: ${o}`;console.warn(`omitting ${u}`)}return t}const lr="model_effort",jp={point:"point",bounds:"bounds",distr:"sample"},GW=Object.fromEntries(Object.entries(jp).map(([n,e])=>[e,n])),S9={inline:!0,glyph:!1},VW="inline",XW="glyph",A9={true:!0,false:!1},L9=["probability","odds"],I9=["yours-plainnum","yours-plaincode","adhoc-plainnum","adhoc-plaincode","metho-plainnum","metho-plaincode","metho-richcode"];function YW(n,e){const r={},t=[],i=n.get("response_type");if(i!==null){const l=jp[i];l!==void 0?r.inputMode=l:t.push(`response_type=${JSON.stringify(i)} invalid; expected one of: ${Object.keys(jp).join(", ")}`)}zW(n.get("whose"),n.get("preset"),e,r,t);const o=n.get("preset_query_mode");o!==null&&JW(o,e.modelParamGroups,r,t);const u=n.get("trial_index");if(u!==null){const l=H$(u);l===null?t.push(`trial_index=${JSON.stringify(u)} is not a non-negative integer`):r.assumptionTrialIndex=l}const a=n.get("prob_as_odds");a!==null&&(L9.includes(a)?r.probAsOdds=a:t.push(`prob_as_odds=${JSON.stringify(a)} invalid; expected one of: ${L9.join(", ")}`));const s=n.get("show_framing");if(s!==null){const l=A9[s];l===void 0?t.push(`show_framing=${JSON.stringify(s)} invalid; expected one of: ${Object.keys(A9).join(", ")}`):r.showFramingNotes=l}const c=n.get("srcquotes_view");if(c!==null){const l=S9[c];l===void 0?t.push(`srcquotes_view=${JSON.stringify(c)} invalid; expected one of: ${Object.keys(S9).join(", ")}`):r.srcquotesInlinedOverride=l}return KW(n,e.jprobTemplate,r,t),{overrides:r,errors:t}}function KW(n,e,r,t){const i=n.getAll("calc_pin"),o=n.getAll("calc_unpin");if(i.length===0&&o.length===0)return;const u=new Set(e.get_cparam_bare_names()),a=new Set(i.filter(c=>o.includes(c)));for(const c of a)t.push(`${JSON.stringify(c)} appears in both calc_pin and calc_unpin; skipped`);const s=u.has(lr);for(const[c,l]of[[i,!0],[o,!1]]){const f=l?"calc_pin":"calc_unpin";for(const d of c)if(!a.has(d)){if(d===lr){if(s){t.push(`${f}=${lr} is ambiguous: this jprob declares a parameter by that name, which collides with the reserved model/version/effort axis name`);continue}r.modelEffortPinned=l;continue}if(!u.has(d)){t.push(`${f}=${JSON.stringify(d)} is not a parameter of this jprob; expected one of: ${[...u,lr].join(", ")}`);continue}(r.cparamPinned??(r.cparamPinned={}))[d]=l}}}function JW(n,e,r,t){if(!ME(n)){t.push(`preset_query_mode=${JSON.stringify(n)} invalid; expected one of: all, ${pu.join(", ")}`);return}if(n!=="all"&&!H2(e).includes(n)){t.push(`preset_query_mode=${JSON.stringify(n)} unavailable for current methodical data`);return}r.presetQueryModeFilter=n}function zW(n,e,r,t,i){if(n===null&&e===null)return;if(n===null){i.push(`preset=${JSON.stringify(e)} given without whose`);return}if(!I9.includes(n)){i.push(`whose=${JSON.stringify(n)} invalid; expected one of: ${I9.join(", ")}`);return}if(n.startsWith("yours-")){if(e!==null){i.push(`preset=${JSON.stringify(e)} incompatible with whose=${n} (preset is only valid for adhoc-* or metho-*)`);return}t.whose=n;return}if(e===null){i.push(`whose=${n} requires preset`);return}const o=H$(e);if(o===null){i.push(`preset=${JSON.stringify(e)} is not a non-negative integer`);return}const u=QW(n,o,r.presetData,r.modelParamGroups);u.error!==null?i.push(u.error):t.whose=u.whose}function QW(n,e,r,t){if(n==="adhoc-plainnum")return e>=r.adhocPlainnumEntries.length?{error:`preset=${e} out of range; ${r.adhocPlainnumEntries.length} adhoc-plainnum entr${r.adhocPlainnumEntries.length===1?"y":"ies"} available`}:{whose:`adhoc-plainnum:${e}`,error:null};if(n==="adhoc-plaincode")return e>=r.adhocPlaincodeEntries.length?{error:`preset=${e} out of range; ${r.adhocPlaincodeEntries.length} adhoc-plaincode entr${r.adhocPlaincodeEntries.length===1?"y":"ies"} available`}:{whose:`adhoc-plaincode:${e}`,error:null};if(e>=t.length)return{error:`preset=${e} out of range; ${t.length} methodical group${t.length===1?"":"s"} available`};const i=t[e],o=n.slice(6),u=B$(i,o);return u===null?{error:`preset=${e} (group: ${i.label}) has no ${o} result; available mode${i.availableModes.length===1?"":"s"}: ${i.availableModes.join(", ")}`}:{whose:`metho-${o}:${u}`,error:null}}function B$(n,e){return e==="plainnum"?n.plainnumIndex:e==="plaincode"?n.plaincodeIndex:n.richcodeIndex}function H$(n){if(n===""||/\D/.test(n))return null;const e=parseInt(n,10);return!Number.isInteger(e)||e<0?null:e}function ZW(n,e){if(typeof window>"u")return;const r=new URLSearchParams(window.location.search),{overrides:t,errors:i}=YW(r,e);for(const o of i)console.error(`[url_view_overrides] ${o}`);if(t.inputMode!==void 0&&(n.ui.inputMode=t.inputMode),t.probAsOdds!==void 0&&(n.ui.probAsOdds=t.probAsOdds),t.assumptionTrialIndex!==void 0&&(n.ui.assumptionTrialIndex=t.assumptionTrialIndex),t.presetQueryModeFilter!==void 0&&(n.ui.presetQueryModeFilter=t.presetQueryModeFilter),t.showFramingNotes!==void 0&&(n.ui.showFramingNotes=t.showFramingNotes),t.srcquotesInlinedOverride!==void 0&&(n.ui.srcquotesInlinedOverride=t.srcquotesInlinedOverride),t.modelEffortPinned!==void 0&&(n.ui.modelEffortPinned=t.modelEffortPinned),t.cparamPinned!==void 0&&Object.assign(n.ui.cparamPinned,t.cparamPinned),t.whose!==void 0){n.ui.whose=t.whose,(t.whose==="yours-plainnum"||t.whose==="yours-plaincode")&&(n.ui.lastYoursWhose=t.whose);const o=Ze(ve(t.whose).source);o==="adhoc"?n.ui.lastAdhocWhose=t.whose:o==="metho"&&(n.ui.lastMethoWhose=t.whose)}}function eG(n,e){const{ui:r,srcquotesInlined:t}=n,{jprobTemplate:i,modelParamGroups:o}=e,u=new URLSearchParams,a=[];return u.set("response_type",GW[r.inputMode]),u.set("prob_as_odds",r.probAsOdds),u.set("trial_index",String(r.assumptionTrialIndex)),u.set("preset_query_mode",r.presetQueryModeFilter),u.set("show_framing",String(r.showFramingNotes)),i.has_srcquotes()&&u.set("srcquotes_view",t?VW:XW),nG(r.whose,o,u,a),rG(r,i,u,a),{params:u,errors:a}}function nG(n,e,r,t){const{source:i,index:o}=ve(n),u=Ze(i);if(u==="yours"){r.set("whose",i);return}if(u==="adhoc"){r.set("whose",i),r.set("preset",String(o));return}const a=yn(i),s=e.findIndex(c=>B$(c,a)===o);if(s===-1){t.push(`no methodical group holds the current result ${JSON.stringify(n)}; omitting whose/preset from the link`);return}r.set("whose",i),r.set("preset",String(s))}function rG(n,e,r,t){const i=yn(ve(n.whose).source);if(i!=="plaincode"&&i!=="richcode")return;const o=e.get_cparam_bare_names(),u=o.includes(lr);for(const a of o)a!==lr&&r.append(n.cparamPinned[a]!==!1?"calc_pin":"calc_unpin",a);if(u){t.push(`this jprob declares a parameter named ${lr}, which collides with the reserved model/version/effort axis name; omitting both from the link`);return}r.append(n.modelEffortPinned?"calc_pin":"calc_unpin",lr)}function sn(n){if(typeof window>"u")return;const e=new URL(window.location.href);if(!e.searchParams.has(n))return;e.searchParams.delete(n);const r=e.searchParams.toString(),t=`${e.pathname}${r?"?"+r:""}${e.hash}`;window.history.replaceState(null,"",t)}const tG=["framing-notes-explainer","srcquote-explainer"],iG=Object.values(rr).filter(n=>!tG.includes(n)).map(n=>`${n}-section`),U$=2;function j$(n,e){const r=e+U$;let t=null;for(const i of n)i.top>r||(t===null||i.top>t.top)&&(t=i);return t===null?null:t.id}function oG(n,e,r){const t=[...n].sort((l,f)=>l.top-f.top);if(t.length===0)return null;const i=t[0],o=j$(n,e),u=o===null?-1:t.findIndex(l=>l.id===o),a=t[u+1];return a===void 0?i.id:a.top-e<=r+U$?a.id:i.id}function uG(n=document){return j$(G$(n),W$(n))}function aG(n=document){return oG(G$(n),W$(n),sG(n))}function W$(n){var t;const e=parseFloat(((t=n.defaultView)==null?void 0:t.getComputedStyle(n.documentElement).getPropertyValue(tw))??"");if(Number.isFinite(e))return e;const r=n.getElementById(z2);return r===null?0:r.getBoundingClientRect().bottom}function sG(n){var r;const e=n.documentElement;return Math.max(0,e.scrollHeight-e.clientHeight-(((r=n.defaultView)==null?void 0:r.scrollY)??0))}function G$(n){const e=[];for(const r of iG){const t=n.getElementById(r);if(t===null)continue;const i=t.getBoundingClientRect();i.width===0&&i.height===0||e.push({id:r,top:i.top})}return e}const cG="url",lG="copied ✓",fG="in address bar",dG=1200;function pG(n,e,r){const t=e.toString(),i=r===null?"":`#${encodeURIComponent(r)}`;return`${n.origin}${n.pathname}${t?"?"+t:""}${i}`}function hG(n,e,r=document){const{params:t,errors:i}=eG(n,e),o=uG(r);return{href:pG(new URL(r.location.href),t,o),errors:i}}function k9(n,e){n.textContent=e,setTimeout(()=>{n.textContent=cG},dG)}async function vG(n,e,r){var o;const{href:t,errors:i}=hG(e,r);for(const u of i)console.error(`[view_share_link] ${u}`);window.history.replaceState(null,"",t);try{if(!((o=navigator.clipboard)!=null&&o.writeText))throw new Error("Clipboard access is unavailable in this browser.");await navigator.clipboard.writeText(t),k9(n,lG)}catch(u){console.error("[view_share_link] copying the view link failed",u),k9(n,fG)}}function mG(n,e){for(const r of n.querySelectorAll(`.${yp}`)){const t=r.dataset.bareid,i=r.dataset.mname;if(t===void 0||i===void 0)throw new Error("Toggleable symbol ref is missing data-bareid or data-mname.");r.textContent=e?i:t}}function bG(n,e){const r=document.getElementById(n);if(!r)throw new Error(`Viewport anchor #${n} not found before render`);const t=r.getBoundingClientRect().top,i=document.activeElement===r;e();const o=document.getElementById(n);if(!o)throw new Error(`Viewport anchor #${n} was not replaced during render`);i&&o.focus({preventScroll:!0});const a=o.getBoundingClientRect().top-t;a!==0&&window.scrollBy(0,a)}function gG(n){const e=n.getWhose();try{n.renderCurrentView();return}catch(r){if(!n.shouldRecover(e))throw r;try{n.switchToSafeYours(e),n.renderSafeYoursView()}catch(t){throw new AggregateError([r,t],`View ${JSON.stringify(e)} failed, and the fail-safe Yours view also failed`)}n.recovered(e,r)}}let x,N,de,bn,on,pn,_n,rt,Yt,je=null,Wi=0,Pn=null;const R9="calculator-section",C9="yours-plainnum";function rV(n){pR(),V$(n),CG(),MG(),dx($G()),je=gW({getContext:Nr,getPersistentPopovers:()=>N.ui.persistentPopovers}),yW(),window.addEventListener("resize",z$),window.addEventListener("resize",To),wS(mn)}function V$(n){Wi++,Pn==null||Pn.abort(),Pn=null,dP(),gP(),RP(),mP(),oB(),x=RS(n.jpdefn),N=sR(x);const e=n.adhocPresets??[],r=Pk(e);de={adhocPresets:e,adhocPlainnumEntries:r.plainnum,adhocPlaincodeEntries:r.plaincode,plainnumResults:bp(Bk(n.plainnumResults??[]),"plainnum"),plaincodeResults:bp(Hk(n.plaincodeResults??[]),"plaincode"),richcodeResults:bp(Uk(n.richcodeResults??[]),"richcode")},bn=jk(de),on=eA(n.jpdefn),pn=n.formRegistry,_n=n.barrierRegistry??{},rt=n.cparamComboFilter,Yt=n.cparamFilterDescription,ZW(N,X$()),N.ui.whose=Wh(N.ui.whose),wG(),mn()}function X$(){return{jprobTemplate:x,presetData:de,modelParamGroups:bn}}function M9(){sn("calc_pin"),sn("calc_unpin")}const _G={showFramingNotes:"show_framing"};function Wp(n,e){N.ui[n]=e,qe(x.config,N.ui),Do(n,e);const r=_G[n];if(r!==void 0&&sn(r),n==="framingNoteAbbrev"){Kj(document,e),yG(n,e);return}mn()}function yG(n,e){const r=document.getElementById(kt(n));r instanceof HTMLInputElement&&(r.checked=e)}function EG(){return{ui:N.ui,srcquotesInlined:Mh(N.ui.srcquotesInlinedOverride,xh().srcquotes_inlined)}}function wG(){const n=x.layout.sections.html.find(e=>"chunkid"in e&&e.style==="title");if(n&&"chunkid"in n){const e=x.find_textchunk_defn(n.chunkid);e&&(document.title=GS(e))}}async function N9(n){const e=gx(n);if(!e)throw new Error(`swapJprob: no manifest module for aid '${n}' (looked for ${V2(n)}).`);const r=await e(),t=window.location.pathname.replace(/[^/]+\.html$/,`${n}.html`);history.pushState(null,"",t),V$(r.manifest)}function $G(){return{toggle_mnames:()=>{N.ui.symbolMnames=!N.ui.symbolMnames,qe(x.config,N.ui),Do("symbolMnames",N.ui.symbolMnames),mG(document,N.ui.symbolMnames)},goto_calculator:()=>{const n=document.getElementById(R9);if(!n)throw new Error(`#${R9} not found.`);n.scrollIntoView({block:"start"})},goto_top:()=>{window.scrollTo({top:0})},switch_whose_mode:()=>{Z$(wx(Q$(),de,bn))},toggle_srcquotes_inlined:()=>{x.has_srcquotes()&&(N.ui.srcquotesInlinedOverride=aj(N.ui.srcquotesInlinedOverride,xh().srcquotes_inlined),qe(x.config,N.ui),sn("srcquotes_view"),mn())},toggle_settings_shortcuts:gj,toggle_framing_notes:()=>{Wp("showFramingNotes",!N.ui.showFramingNotes)},toggle_framing_note_abbrev:()=>{Wp("framingNoteAbbrev",!N.ui.framingNoteAbbrev)},goto_next_section:()=>{var e;const n=aG();n!==null&&((e=document.getElementById(n))==null||e.scrollIntoView({block:"start"}))}}}function xh(){if(Pe(N.ui.whose))return N.optionValues;const n=en(N.ui.whose,de);if(!n)return N.optionValues;const e={...N.optionValues};for(const r of x.get_aopts()){const t=Fe(r.id);t in n.aopts&&(e[t]=n.aopts[t])}if("cparam_values"in n&&n.cparam_values)for(const r of x.get_cparams()){const t=Fe(r.id);t in n.cparam_values&&(e[t]=n.cparam_values[t])}return e}function Nr(){const n=xh(),e=!!(n.show_typical_examples??n7),r=Mh(N.ui.srcquotesInlinedOverride,n.srcquotes_inlined),t=Kp(x,{symbolMnames:N.ui.symbolMnames}),{source:i}=ve(N.ui.whose),o=yn(i);return{jprobInstance:e7(x,r7(x,n,o),o),showTypical:e,refLookup:t,srcquotesInlined:r,showFramingNotes:N.ui.showFramingNotes,displayOptionValues:n,showExampleClassification:N.ui.showExampleClassification,showBareIds:sj(N.ui.whose),exampleFoldState:N.ui.exampleFoldState,popoverAllRefs:N.ui.popoverAllRefs}}function mn(){Bh(Y$)}function Bh(n){gG({getWhose:()=>N.ui.whose,shouldRecover:e=>!Pe(e)||SG(),renderCurrentView:()=>{Xk(N.ui.whose,de),n()},switchToSafeYours:AG,renderSafeYoursView:Y$,recovered:LG})}function SG(){return de.adhocPresets.length>0||de.plainnumResults.length>0||de.plaincodeResults.length>0||de.richcodeResults.length>0}function AG(n){const e=ve(n).source;N.ui.whose=C9,N.ui.lastYoursWhose=C9,N.ui.modelEffortSweepScope=null,Ze(e)==="adhoc"&&(N.ui.lastAdhocWhose=""),Ze(e)==="metho"&&(N.ui.lastMethoWhose=""),de={adhocPresets:[],adhocPlainnumEntries:[],adhocPlaincodeEntries:[],plainnumResults:[],plaincodeResults:[],richcodeResults:[]},bn=[]}function LG(n,e){try{qe(x.config,N.ui)}catch(t){Nu("Persisting the fail-safe Yours selection",t)}for(const t of["whose","preset"])try{sn(t)}catch(i){Nu(`Clearing the failed ${t} URL override`,i)}const r=Pe(n)?"Rendering Yours with loaded result data":`Rendering chosen result ${JSON.stringify(n)}`;Nu(`${r}; switched safely to Yours and disabled loaded result data until reload`,e)}function Y$(){BG(N.ui.whose);const n=Nr(),e=document.getElementById("main-content");fj(e,x,n);const r=Ex(x.aid);Sj(e,r==null?void 0:r.version);const t=K7(N.ui.whose,en(N.ui.whose,de));Ix(N,r??{},t,{currentAid:x.aid,currentFamily:ew(x.aid)},{available:K2(de,bn),active:Ze(ve(N.ui.whose).source)}),IG(n,t),Ij(e),z$(),je==null||je.closeDisconnectedTriggers(),Yj(e,{thresholdChars:cn().framingNoteAbbrevThreshold,startAbbreviated:N.ui.framingNoteAbbrev})}function IG(n,e){for(const m of RW){const v=document.getElementById(`${rr[m]}-content`);v&&NW(v,m,x,n,N)}const r=document.getElementById(`${rr.TCHOICE}-content`);r&&xW(r,x,n,N,DG(N,de));const t=document.getElementById("cparams-content");t&&kW(t,x,n,N,rt,Yt);const i=document.getElementById("calculator-whose-toggle");if(i){$D(i,x,de,N,bn),i.prepend(Mr(()=>Kx(x,N.ui.whose)));const m=document.createElement("div");m.id="calc-response-type-toggle",i.appendChild(m),pw(m,N,e)}const o=document.getElementById("calculator-calculator-input"),u=document.getElementById("calculator-calculator-results");o&&u&&(yh(o,u,x,n,N,de,pn,_n,rt,Yt),j2(u,jh(N,de)),W2(u,Uh(N,de),x.get_svar_bare_names()));const a=document.getElementById(Jw);a&&qj(a,N,pn),yt(n);const s=document.getElementById(Xw);s&&TH(s,n);const c=document.getElementById("framing-notes-root-content");c&&NH(c,x,n,N.ui),MH(x,n,N.ui);const l=document.getElementById("framing-notes-explainer-content");l&&qH(l,n);const f=document.getElementById("srcquote-explainer-content");f&&fW(f,x,n);const d=document.getElementById("svars-content");d&&PH(d,x,n,N,de);const p=document.getElementById("calculator-yours-saved-list");p&&kh(p,x,N),mi(n);const h=document.getElementById("calculator-yours-code-input");if(h){const m=Y7(N.ui.whose,de);N.ui.whose==="yours-plaincode"?p9(h,x,N.yoursCodeRecord,"edit"):m?p9(h,x,m,"view"):h.innerHTML=""}}function yt(n){const e=document.querySelectorAll(".derived-form");if(e.length===0)return;for(const t of e){const i=t.dataset.formId;i&&JH(t,i,x,n,N,pn,_n,de)}const r=document.getElementById(Kw);r&&(r.hidden=[...r.querySelectorAll(".derived-form")].every(t=>t.innerHTML===""))}const Au="calculator-joint-dependence-editor";function mi(n){const e=document.getElementById(Au);e&&xU(e,N,x,n,pn,_n)}function K$(){const n=document.getElementById(Au);if(!n)return null;const e=Rh(N,x,pn,_n);return e===null?null:{container:n,editorCtx:e,draft:Ch(N,e)}}function kG(n,e){Sh(N,x,on,e,n.editorCtx.eligibleSvars,n.editorCtx.degenerateSvars),L$(n.container,e,n.editorCtx)}function J$(n){const e=Nr(),r=document.getElementById("calculator-calculator-results");if(r&&wu(r,x,e,N,de,pn,_n),yt(e),n)mi(e);else{const t=document.getElementById(Au);t&&nj(t,N,x,e,pn,_n)}Hh(),je==null||je.closeDisconnectedTriggers()}function RG(n){var t;const e=K$();if(!e)return;const r=ij(e.draft,n,e.editorCtx.eligibleSvars);Sh(N,x,on,r,e.editorCtx.eligibleSvars,e.editorCtx.degenerateSvars),J$(!0),n.kind==="add"&&((t=document.querySelector(`#${Au} .jde-latent-card:last-child [data-latent-field="name"]`))==null||t.focus({preventScroll:!0}))}function CG(){const n=document.getElementById("sticky-help");n&&n.appendChild(Mr(()=>Xx(x,{exampleFoldControls:kj(),whoseModeToggle:Rx()})))}function z$(){const n=document.getElementById(z2);n&&document.documentElement.style.setProperty(tw,`${n.offsetHeight+4}px`)}function MG(){var e,r,t,i,o,u,a,s;document.addEventListener("click",c=>{if(!c.target.closest("#response-type-toggle, #calc-response-type-toggle"))return;const f=c.target.closest("[data-mode]");if(!f)return;const d=f.dataset.mode;d!==N.ui.inputMode&&(N.ui.inputMode=d,qe(x.config,N.ui),sn("response_type"),mn())}),document.addEventListener("change",c=>{const l=c.target;if(l.id!==Up)return;const f=l.value;f!==N.ui.probAsOdds&&(N.ui.probAsOdds=f,qe(x.config,N.ui),sn("prob_as_odds"),mn())}),document.addEventListener("click",c=>{const l=c.target.closest(".timeline-nav-btn");if(!l)return;const f=l.dataset.timelineTarget;f&&N9(f)}),document.addEventListener("change",c=>{const l=c.target;if(l.id!==sw)return;const f=l.value;f&&f!==x.aid&&N9(f)}),(e=document.getElementById(J2))==null||e.addEventListener("click",c=>{const l=c.target.closest("[data-whose-mode]");if(!l)return;const f=l.dataset.whoseMode;Z$(nw(Q$(),f,de,bn))}),(r=document.getElementById(qh))==null||r.addEventListener("click",c=>{const l=c.target.closest("[data-action]");if(!l)return;const f=l.dataset.action;QG(f)}),(t=document.getElementById("options-controls"))==null||t.addEventListener("change",c=>{const l=c.target;if(l.dataset.pref){Wp(l.dataset.pref,l.checked);return}if(l.dataset.prefInt){const f=l.dataset.prefInt,d=parseInt(l.value,10);!isNaN(d)&&d>0&&(Do(f,d),mn());return}}),(i=document.getElementById("options-controls"))==null||i.addEventListener("click",c=>{const l=c.target;if(l.id===iw||l.closest(".options-expand-btn")){qx(),To();return}if(l.id===lw){vG(l,EG(),X$());return}if(l.id==="keymap-btn"){N$();return}if(l.id===cw){$S();return}if(l.id==="save-all-data-btn"){JG();return}if(l.id==="load-all-data-btn"){zG();return}}),document.addEventListener("click",c=>{const l=c.target,f=document.getElementById("options-controls");!f||f.contains(l)||l.closest(`#${Nh}`)||(dw(),To())}),(o=document.getElementById("main-content"))==null||o.addEventListener("input",c=>{var d;const l=c.target;if(l.closest('.yours-code-input[data-variant="view"]'))return;if(l.classList.contains("code-body-input")){Ah(N,x,on,l.value);return}if(l.classList.contains("code-reasoning-input")){const p=l,h=p.dataset.svar;if(!h)return;hU(N,x,on,h,p.value);return}if(l.classList.contains("code-misc-input")){vU(N,x,on,l.value);return}const f=v9(l);if(f!==null){const p=K$();p&&kG(p,rj(p.draft,f));return}if(l.classList.contains("cparam-slider")){const p=l,h=p.dataset.cparam;if(!h)return;const m=JSON.parse(p.dataset.values??"[]"),v=parseInt(p.value),b=m[v];if(b===void 0)return;N.ui.cparamValues[h]=b,qe(x.config,N.ui),gp();const g=document.getElementById("svars-content");g&&DH(g,x,N,de);return}if(l.classList.contains("model-version-effort-slider")){const p=l,h=JSON.parse(p.dataset.keys??"[]"),m=parseInt(p.value),v=h[m];if(!v)return;const{source:b,index:g}=ve(N.ui.whose);if(b!=="metho-plaincode"&&b!=="metho-richcode")return;const _=b==="metho-plaincode"?de.plaincodeResults:de.richcodeResults,y=_[g];if(!y)return;const E=sh(y,N.ui.modelEffortSweepScope),A=ch(y,_,N.ui.modelEffortSweepScope),L=vi(A,v),C=L===null?-1:_.indexOf(L);if(C<0)return;const I=`${b}:${C}`;I!==N.ui.whose&&(N.ui.modelEffortSweepScope=E,Dn(I,!0),(d=document.querySelector("#calculator-calculator-input .model-version-effort-slider"))==null||d.focus({preventScroll:!0}));return}});const n=document.getElementById("main-content");n&&pU(n,{persistCalcTextarea:qG,recomputeAfterCalcTextarea:FG,persistAssumptionCard:OG,recomputeAfterAssumptionCard:PG}),(u=document.getElementById("main-content"))==null||u.addEventListener("click",c=>{const l=c.target;if(l.classList.contains("code-sample-btn")){UG();return}const f=l.closest(".lloads-copy-to-yours-btn");if(f){XG(f);return}if(l.classList.contains("copy-to-yours-btn")){jG();return}const d=l.closest(".jde-summary");if(d){const I=d.closest("details");I&&(N.ui.jointDependenceEditorOpen=!I.open,qe(x.config,N.ui));return}const p=tj(l);if(p!==null){RG(p);return}const h=l.closest(".yours-saved-delete");if(h){c.stopPropagation();const I=h.dataset.key,S=h.dataset.kind;I&&HG(I,S??"plainnum");return}const m=l.closest(".yours-saved-row");if(m){const I=m.dataset.key,S=m.dataset.kind;I&&T9(I,S??"plainnum");return}const v=l.closest(".whose-btn");if(v){const I=v.dataset.whose;I&&I!==N.ui.whose&&Dn(I);return}const b=l.closest(".mode-radio-btn");if(b){const I=b.dataset.whose;if(I&&I!==N.ui.whose){Dn(I);return}const S=b.dataset.mode;if(S){const w=U2(N.ui.whose,bn);if(w){const $=TE(w.group,S);$&&$!==N.ui.whose&&Dn($)}}return}const g=l.closest(".ex-btn");if(g){YG(g);return}const _=l.closest(".framing-fold-btn");if(_){KG(_);return}const y=l.closest(`.${Ph}`);if(y){Jj(y);return}const E=l.closest(".assumption-trial-btn");if(E){const I=parseInt(E.dataset.trial??"0");N.ui.assumptionTrialIndex=I,qe(x.config,N.ui),sn("trial_index");const S=document.getElementById("svars-content");S&&BH(S,I,hr(x.svar_entries().map($=>$.decl)));const w=document.getElementById(`${rr.TCHOICE}-content`);w&&BW(w,I);return}const A=l.closest(`.${vw}`);if(A){const I=A.dataset.mcLiveActivationToken;(I===void 0||!iB(I))&&console.warn(`MC activation: unknown token ${JSON.stringify(I)}; re-rendering without activating`),Hr();return}const L=l.closest(`.${Vt}`);if(L){const I=L.dataset.mcPoolToken;(I===void 0||!vP(I))&&console.warn(`MC accumulate: unknown pool token ${JSON.stringify(I)}; re-rendering without accumulating`),Hr();return}const C=l.closest(".sweep-mode-btn");if(C){N.ui.codeSweepMode=C.dataset.sweepMode,qe(x.config,N.ui),Hr();return}}),(a=document.getElementById("main-content"))==null||a.addEventListener("keydown",c=>{if(c.key!=="Enter"&&c.key!==" ")return;const l=c.target,f=l.closest(".yours-saved-row");if(!f||l.closest(".yours-saved-delete"))return;c.preventDefault();const d=f.dataset.key,p=f.dataset.kind;d&&T9(d,p??"plainnum")}),(s=document.getElementById("main-content"))==null||s.addEventListener("change",c=>{const l=c.target;if(v9(l)!==null){J$(!1);return}if(l.dataset.aoptBody){const d=l.dataset.aoptBody,p=l,h=x.get_aopt(d);let m;if(h.input_type==="MultiStringFromSet"){const v=l.closest(".cparam-or-aopt");if(v===null)throw new Error(`MultiStringFromSet control for ${d} is outside an option row`);const b=[...v.querySelectorAll("input[data-aopt-body]")].filter(g=>g.dataset.aoptBody===d);if(b.length===0)throw new Error(`MultiStringFromSet option ${d} has no checkbox controls`);m=EW(h,b)}else m=E9(h,p,h.input_type);d==="srcquotes_inlined"&&N.ui.srcquotesInlinedOverride!==null&&(N.ui.srcquotesInlinedOverride=null,qe(x.config,N.ui),sn("srcquotes_view")),N=Nv(N,x,d,m),mn();return}if(l.dataset.cparamBody){const d=l.dataset.cparamBody,p=x.get_cparam(d),h=E9(p,l,O$);N=Nv(N,x,d,h),mn();return}if(l.dataset.tchoiceBody){const d=l.dataset.tchoiceBody,p=x.get_tchoice(d),h=yn(ve(N.ui.whose).source);if(h!=="plainnum"&&h!=="plaincode")throw new Error(`tchoice edit fired in unexpected query mode "${h}"`);if(P9(p)){const v=UW(p,l);v!==null&&d9(N,x,on,h,d,v);return}if(!Ur(p))throw new Error(`tchoice "${d}" has unrecognized response_kind`);const m=HW(p,l);d9(N,x,on,h,d,m);return}if(l.id==="preset-query-mode-filter"){const d=l.value;if(!ME(d))return;N.ui.presetQueryModeFilter=d;const p=Wh(N.ui.whose);if(sn("preset_query_mode"),p!==N.ui.whose){Dn(p);return}qe(x.config,N.ui),mn();return}const f=l.closest(".whose-select");if(f){let d=f.value;if(d.startsWith("group:")){const p=parseInt(d.slice(6)),h=bn[p];if(!h)return;const m=wD(h,N.ui.presetQueryModeFilter,bn);if(!m)return;d=m}if(d&&d!==N.ui.whose){if(!f.id)throw new Error("Whose-result select must have an id for viewport anchoring");bG(f.id,()=>{Dn(d)})}return}if(l.classList.contains("code-plot-target-kind-radio")){const d=l.value;if(d!=="formula"&&d!=="raw_response")return;N.ui.codePlotTargetKind=d,qe(x.config,N.ui),Hr();return}if(l.classList.contains("code-plot-formula-select")){N.ui.codePlotTargetKind="formula",N.ui.codePlotFormulaId=l.value,qe(x.config,N.ui),Hr();return}if(l.classList.contains("code-plot-raw-response-select")){N.ui.codePlotTargetKind="raw_response",N.ui.codePlotRawResponseName=l.value,qe(x.config,N.ui),Hr();return}if(l.classList.contains("cparam-pin-checkbox")){const d=l.dataset.cparam;if(!d)return;N.ui.cparamPinned[d]=l.checked,qe(x.config,N.ui),M9(),gp();return}if(l.classList.contains("model-version-effort-pin-checkbox")){N.ui.modelEffortPinned=l.checked,qe(x.config,N.ui),M9(),gp();return}})}function NG(){var e;const n=document.querySelector(".calc-textarea");if(n&&document.activeElement!==n){const r=n.dataset.group;r&&(n.value=((e=N.yoursRecord.raw_input)==null?void 0:e[r])??"")}}function TG(){const n=document.getElementById("svars-content");n&&jH(n,N,hr(x.svar_entries().map(e=>e.decl)))}function Hh(){const n=document.getElementById("calculator-yours-saved-list");n&&kh(n,x,N)}function qG(n){const e=n.dataset.group;if(!e)return;const r=e==="sample"?n.value.split(`
`).map(t=>u$(t)).join(`
`):n.value;$h(N,x,on,e,r)}function FG(){const n=Nr(),e=document.getElementById("calculator-calculator-results");e&&wu(e,x,n,N,de,pn,_n),yt(n),mi(n),TG(),Hh(),je==null||je.closeDisconnectedTriggers()}function OG(n){const e=n.dataset.paramIndex,r=n.dataset.group;if(e==null||!r)return;const t=x.svar_entries().length,i=WH(N,parseInt(e),n.value,t);$h(N,x,on,r,i)}function PG(n){NG(),Hh();const e=Nr(),r=document.getElementById("calculator-calculator-results");r&&wu(r,x,e,N,de,pn,_n),yt(e),mi(e);const t=document.getElementById("svars-content");t&&(gh(t,hr(x.svar_entries().map(i=>i.decl))),s$(t)),je==null||je.closeDisconnectedTriggers()}function Uh(n,e){if(!e)return[];const{source:r}=ve(n.ui.whose);if(r!=="adhoc-plainnum"&&r!=="metho-plainnum")return[];const t=en(n.ui.whose,e);return t?t.trials:[]}function DG(n,e){if(!e||Pe(n.ui.whose))return;const r=en(n.ui.whose,e);if(r)return yn(ve(n.ui.whose).source)==="plainnum"?r.trials.map(t=>t.trial_choices??{}):(r.trial_metadata??[]).map(t=>t.trial_choices??{})}function jh(n,e){var r;if(e)return(r=Yk(n.ui.whose,e))==null?void 0:r.meta}function Hr(){Bh(xG)}function xG(){const n=Nr(),e=document.getElementById("calculator-calculator-input"),r=document.getElementById("calculator-calculator-results");e&&r&&(yh(e,r,x,n,N,de,pn,_n,rt,Yt),j2(r,jh(N,de)),W2(r,Uh(N,de),x.get_svar_bare_names())),yt(n),mi(n),je==null||je.closeDisconnectedTriggers()}function gp(){Bh(()=>{const n=Nr(),e=document.getElementById("calculator-calculator-input"),r=document.getElementById("calculator-calculator-results");e&&r&&(KH(e,r,x,n,N,de,pn,_n,rt,Yt),j2(r,jh(N,de)),W2(r,Uh(N,de),x.get_svar_bare_names())),yt(n),je==null||je.closeDisconnectedTriggers()})}function Dn(n,e=!1){N.ui.whose=n,e||(N.ui.modelEffortSweepScope=null),(n==="yours-plainnum"||n==="yours-plaincode")&&(N.ui.lastYoursWhose=n);const r=Ze(ve(n).source);r==="adhoc"?N.ui.lastAdhocWhose=n:r==="metho"&&(N.ui.lastMethoWhose=n),qe(x.config,N.ui),sn("whose"),sn("preset"),mn()}function Q$(){return{whose:N.ui.whose,lastYoursWhose:N.ui.lastYoursWhose,lastAdhocWhose:N.ui.lastAdhocWhose,lastMethoWhose:N.ui.lastMethoWhose,presetQueryModeFilter:N.ui.presetQueryModeFilter}}function Z$(n){if(n===null)return;const e=iy(Wh(n),x.has_cparams());e!==N.ui.whose&&Dn(e)}function Wh(n){const e=U2(n,bn);if(!e)return n;const r=hu(N.ui.presetQueryModeFilter,bn);return r==="all"?n:vu(e.group,r)?TE(e.group,r)??n:NE(bn,r)??n}function BG(n){if(!(Pe(n)||N8(n,de,N.ui.inputMode))){for(const e of["sample","bounds","point"])if(N8(n,de,e)){N.ui.inputMode=e;return}}}function HG(n,e){if(e==="plaincode"){const t=l2(x.aid).find(o=>o.codeOptionDictKey===n);if(!t)return;const i=E$(x,t.record);if(!confirm(`Delete saved estimation?
${i}`))return;Qk(x.aid,n)}else{const t=Lh(x.aid).find(o=>o.plainnumOptionDictKey===n);if(!t)return;const i=y$(x,t.record)||"(default options)";if(!confirm(`Delete saved estimation?
${i}`))return;mU(x.aid,n)}const r=document.getElementById("calculator-yours-saved-list");r&&kh(r,x,N)}function T9(n,e){if(e==="plaincode"){const r=l2(x.aid).find(t=>t.codeOptionDictKey===n);if(!r)return;N=_U(N,x,n,r.record)}else{const r=Lh(x.aid).find(t=>t.plainnumOptionDictKey===n);if(!r)return;N=gU(N,x,n,r.record)}mn()}async function UG(){const n=Wi,e=document.getElementById("calculator-yours-code-input"),r=e==null?void 0:e.querySelector(".code-error-area"),t=e==null?void 0:e.querySelector(".code-status");r&&(r.innerHTML=""),t&&(t.textContent="Running…");const i=e==null?void 0:e.querySelector(".code-body-input"),o=i?i.value:N.yoursCodeRecord.raw_code_input;i&&o!==N.yoursCodeRecord.raw_code_input&&Ah(N,x,on,o);const{names:u,combinations:a}=XS(x.get_cparams(),rt),s=TU(x.svar_decls()),c=cn();try{new Function(...u,o)}catch(b){t&&(t.textContent=""),r&&(r.textContent=`Syntax error: ${b.message}`);return}Pn==null||Pn.abort();const l=new AbortController;Pn=l;let f;try{f=await cj({source:o,cparamNames:u,combinations:a,expectedSvars:x.get_svar_bare_names(),formulaSvars:q9(pn,x.get_svar_bare_names()),hasExpectationBarrier:Object.keys(_n).length>0,paramRanges:s},{timeoutMs:c.plaincodeEvalTimeoutMs,signal:l.signal})}catch(b){if(n!==Wi||b.message===Hp)return;if(t&&(t.textContent=""),r){const g=b.message;r.textContent=g===C$?`Timed out after ${c.plaincodeEvalTimeoutMs}ms. Possible infinite loop — check your code.`:`Worker error: ${g}`}return}finally{Pn===l&&(Pn=null)}if(n!==Wi)return;if(f.compileError){t&&(t.textContent=""),r&&(r.textContent=`Compile error: ${f.compileError}`);return}const d=f.wellformed.map(b=>{const g={point:b.point,bounds:b.bounds,sample:b.sample};return b.lloads!==void 0&&(g.lloads=b.lloads),{cparams:b.cparams,trials:[g],precomputed:{}}}),p=N.yoursCodeRecord;p.verified_code_input=o,p.cparam_names=u,p.cparam_combos=d,p.count=1,p.timestamp=new Date().toISOString(),ni(x,on,N.codeOptionDictKey,p),N.ui.whose!=="yours-plaincode"&&(N.ui.whose="yours-plaincode",qe(x.config,N.ui),sn("whose"),sn("preset")),N.ui.lastYoursWhose="yours-plaincode",mn();const h=document.getElementById("calculator-yours-code-input"),m=h==null?void 0:h.querySelector(".code-status"),v=h==null?void 0:h.querySelector(".code-error-area");if(m&&(m.textContent=""),v&&f.malformed.length>0){const b=f.malformed.slice(0,3).map(g=>`${JSON.stringify(g.cparams)}: ${g.error}`).join(`
`);v.textContent=`${f.wellformed.length}/${f.wellformed.length+f.malformed.length} combinations succeeded. First failures:
${b}`}}function jG(){const{source:n}=ve(N.ui.whose);if(n==="adhoc-plaincode"){WG();return}if(n==="adhoc-plainnum"){VG();return}throw new Error(`Copy to Yours clicked outside an adhoc entry view (whose=${JSON.stringify(N.ui.whose)})`)}function WG(){const n=Y7(N.ui.whose,de);if(!n)throw new Error(`Copy to Yours clicked outside an adhoc-plaincode view (whose=${JSON.stringify(N.ui.whose)})`);confirm(`Copy this entry's code into your Yours editor?
Your current Yours-plaincode code will be overwritten.`)&&(Ah(N,x,on,n.raw_code_input),Dn("yours-plaincode"))}const GG={point:"point",bounds:"bounds",sample:"distribution"};function VG(){const n=en(N.ui.whose,de),e=n==null?void 0:n.trials[0];if(!e)throw new Error(`Copy to Yours clicked without a viewable adhoc-plainnum trial (whose=${JSON.stringify(N.ui.whose)})`);const r=x.svar_entries().map(u=>u.bareName),t=J7(e,r);if(t.length===0)throw new Error("Copy to Yours clicked for an entry with no complete response group");const i=t.map(u=>GG[u]).join(" + ");if(confirm(`Copy this entry's ${i} estimates into your Yours inputs?
Your current Yours ${i} input${t.length>1?"s":""} will be overwritten.`)){for(const u of t)$h(N,x,on,u,Kk(e,u,r));t.includes(N.ui.inputMode)||(N.ui.inputMode=t.includes("sample")?"sample":t.includes("bounds")?"bounds":"point"),Dn("yours-plainnum")}}function XG(n){const e=n.dataset.lloadsSpec;if(e===void 0)throw new Error("Joint-dependence Copy to Yours button carries no specification");const r=JSON.parse(e),t=S$(N,x,pn,_n);if(t===null)throw new Error("Joint-dependence Copy to Yours clicked on a jprob with no joint-dependence box");const i=Xo(r,t.eligibleSvars);if(i!==null)throw new Error(`Disclosed joint-dependence specification is not valid here: ${i}`);confirm(`Copy this joint-dependence specification into your Yours inputs?
Your current Yours latents and loadings will be overwritten.`)&&(Sh(N,x,on,ay(r,t.eligibleSvars),t.eligibleSvars,t.degenerateSvars),N.ui.inputMode="sample",N.ui.jointDependenceEditorOpen=!0,Dn("yours-plainnum"))}function YG(n){const e=n.dataset.isym,r=n.dataset.type;if(!e||!r)return;n.classList.toggle("active");const t=n.closest(".isym-card");if(!t)return;const i=t.querySelector(`.examples.${r}`);i&&i.classList.toggle("visible"),N.ui.exampleFoldState=oR(N.ui.exampleFoldState,e,r),qe(x.config,N.ui)}function KG(n){const e=n.dataset.framingAnchor,r=n.dataset.framingId;if(!e||!r)return;n.classList.toggle("active");const t=n.closest(".framingnote");t&&(t.classList.toggle("visible"),N.ui.framingFoldState[e]||(N.ui.framingFoldState[e]={}),N.ui.framingFoldState[e][r]=t.classList.contains("visible"),qe(x.config,N.ui))}function JG(){const n=fR(),e=JSON.stringify(n,null,2),r=new Blob([e],{type:"application/json"}),t=URL.createObjectURL(r),i=document.createElement("a"),o=new Date().toISOString().slice(0,10);i.href=t,i.download=`${x.config.localStorage_prefix}-state-${o}.json`,i.click(),URL.revokeObjectURL(t)}function zG(){const n=document.createElement("input");n.type="file",n.accept=".json",n.addEventListener("change",()=>{var r;const e=(r=n.files)==null?void 0:r[0];e&&e.text().then(t=>{let i;try{i=JSON.parse(t)}catch(o){alert(`Invalid JSON: ${o}`);return}if(!i||typeof i!="object"){alert("Expected a JSON object");return}dR(i),window.location.reload()})}),n.click()}function QG(n){const e=document.querySelectorAll(".examples"),r=document.querySelectorAll(".ex-btn");switch(n){case"open":e.forEach(t=>t.classList.add("visible")),r.forEach(t=>t.classList.add("active"));break;case"close":e.forEach(t=>t.classList.remove("visible")),r.forEach(t=>t.classList.remove("active"));break;case"peek":e.forEach(t=>{t.setAttribute("data-was-visible",t.classList.contains("visible")?"1":"0"),t.classList.add("visible")}),r.forEach(t=>{t.setAttribute("data-was-active",t.classList.contains("active")?"1":"0"),t.classList.add("active")});break;case"unpeek":e.forEach(t=>{t.getAttribute("data-was-visible")==="0"&&t.classList.remove("visible")}),r.forEach(t=>{t.getAttribute("data-was-active")==="0"&&t.classList.remove("active")});break}}export{rV as initApp,N9 as swapJprob};
