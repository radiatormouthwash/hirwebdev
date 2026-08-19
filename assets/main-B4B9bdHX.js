const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CN2v_cI4.js","assets/form_types-CDdbkj6v.js","assets/index-Cg9o9HmK.js","assets/index-BxKFJloI.js","assets/index-C5Q_NJjS.js","assets/index-DtsuLorU.js","assets/index-CB9zQYg_.js","assets/index-CM_35eWU.js","assets/index-DbjvDssA.js"])))=>i.map(i=>d[i]);
var gw=Object.defineProperty;var _w=(n,e,r)=>e in n?gw(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r;var qe=(n,e,r)=>_w(n,typeof e!="symbol"?e+"":e,r);import{s as yw,a as Ew,_ as Ze,r as hu}from"./app_bootstrap-DS3c0EM1.js";import{P as $w,f as p7}from"./form_types-CDdbkj6v.js";const jt={lo:0,hi:1,loClosed:!0,hiClosed:!0};function Ni(n,e){return!(n.lo!==null&&(n.loClosed?e<n.lo:e<=n.lo)||n.hi!==null&&(n.hiClosed?e>n.hi:e>=n.hi))}function Ti(n){const e=n.loClosed&&n.lo!==null?"[":"(",r=n.hiClosed&&n.hi!==null?"]":")";return`${e}${n.lo??"-inf"}, ${n.hi??"inf"}${r}`}const ww={closed_real_interval:[!0,!0],left_open_real_interval:[!1,!0],right_open_real_interval:[!0,!1],open_real_interval:[!1,!1]};function h7(n){var i;const[e,r]=ww[n.type_mathlevel]??[!0,!0],t=((i=n.type_detail)==null?void 0:i.range)??[0,1];return{lo:t[0],hi:t[1],loClosed:e,hiClosed:r}}function pr(n){return n.map(h7)}function v7(n){return Object.fromEntries(n.map(e=>[e.bareName,h7(e.decl)]))}const Sw=["aopt:","cparam:"];function Fe(n){for(const e of Sw)if(n.startsWith(e))return n.slice(e.length);return n}function wr(n){return n.startsWith("cparam:")}function Hp(n){return!wr(n.id)}function up(n){return wr(n.id)}const qi="tchoice:";function Rt(n){return n.startsWith(qi)?n.slice(qi.length):n}function Hr(n){return n.response_kind==="enum"}function m7(n){return n.response_kind==="real"}const Fi="svar:";function b7(n,e){return!n.limit_reporting_to||n.limit_reporting_to.includes(e)}function g7(n,e){if(!Array.isArray(e)||e.length!==3||e[0]!=="eq"||typeof e[1]!="string")throw new Error(`Formula ${n} must have an equality s-expression with a string LHS`);return e[1]}function _7(n){if(n.includes("{")||n.includes("}"))throw new Error(`Unexpected brace in sexpr reference leaf: ${n}`);if(n.startsWith(Fi))return`expr:${n.slice(Fi.length)}`;if(!n.startsWith("expr:"))throw new Error(`Unexpected expression reference ${JSON.stringify(n)}; expected expr:* or svar:*`);return n}function ap(n){return n.startsWith(Fi)?n.slice(Fi.length):n}const Fh="ax:";function Mt(n){return n.startsWith(Fh)?n.slice(Fh.length):n}const Oh="form:";function Eo(n){return n.startsWith(Oh)?n.slice(Oh.length):n}const Dh="textchunk:",Ph="textdefn:";class y7{constructor(e){qe(this,"_data");qe(this,"aid");qe(this,"options");qe(this,"cparam_combo_filter");qe(this,"config");qe(this,"layout");qe(this,"svar_list");qe(this,"svar");qe(this,"tchoice");qe(this,"textchunk");qe(this,"display");qe(this,"isym");qe(this,"ax");qe(this,"expr");qe(this,"form");qe(this,"definedSym");qe(this,"textdefn");qe(this,"framing");qe(this,"srcquote");this._data=e,this.aid=e.aid,this.options=e.options,this.cparam_combo_filter=e.cparam_combo_filter,this.config=e.config,this.layout=e.layout,this.svar_list=e.svar_list,this.svar=e.svar,this.tchoice=e.tchoice??[],this.textchunk=e.textchunk,this.display=e.display,this.isym=e.isym,this.ax=e.ax,this.expr=e.expr,this.form=e.form,this.definedSym=e.definedSym,this.textdefn=e.textdefn,this.framing=e.framing??[],this.srcquote=e.srcquote??[]}_get_data(){return this._data}get_options(){return this.options}get_aopts(){return this.options.filter(Hp)}get_cparams(){return this.options.filter(up)}has_cparams(){return this.options.some(up)}get_option(e){const r=this.options.find(t=>Fe(t.id)===e);if(!r)throw new Error(`No option named "${e}"`);return r}get_aopt(e){const r=this.get_aopts().find(t=>Fe(t.id)===e);if(!r)throw new Error(`No aopt named "${e}"`);return r}get_cparam(e){const r=this.find_cparam(e);if(!r)throw new Error(`No cparam named "${e}"`);return r}find_cparam(e){return this.get_cparams().find(r=>Fe(r.id)===e)}get_option_bare_names(){return this.options.map(e=>Fe(e.id))}get_aopt_bare_names(){return this.get_aopts().map(e=>Fe(e.id))}get_cparam_bare_names(){return this.get_cparams().map(e=>Fe(e.id))}get_option_ids(){return this.options.map(e=>e.id)}get_aopt_ids(){return this.get_aopts().map(e=>e.id)}get_cparam_ids(){return this.get_cparams().map(e=>e.id)}get_tchoice_decls(){return this.tchoice}get_tchoice_bare_names(){return new Set(this.tchoice.map(e=>Rt(e.id)))}get_tchoice(e){const r=e.startsWith(qi)?e:`${qi}${e}`,t=this.tchoice.find(i=>i.id===r);if(t===void 0)throw new Error(`No tchoice named "${e}"`);return t}get_tchoice_default(e){const r=this.get_tchoice(e);if(!Hr(r))throw new Error(`tchoice "${e}" is not an enum kind; it has no default_value`);return r.default_value}get_enum_tchoice_defaults(){const e={};for(const r of this.tchoice)Hr(r)&&(e[Rt(r.id)]=r.default_value);return e}get_textchunks(){return this.textchunk}find_textchunk(e){const r=this.strip_textchunk_prefix(e);return this.textchunk.find(t=>this.strip_textchunk_prefix(t.id)===r)}get_textchunk(e){const r=this.find_textchunk(e);if(!r)throw new Error(`No textchunk named "${e}"`);return r}find_textchunk_defn(e){var r;return(r=this.find_textchunk(e))==null?void 0:r.defn}get_textchunk_defn(e){return this.get_textchunk(e).defn}strip_textchunk_prefix(e){return e.startsWith(Dh)?e.slice(Dh.length):e}get_textdefn_entries(){return this.textdefn.map(e=>{const r=e.aliases??[];return{bareName:this.strip_textdefn_prefix(e.id),id:e.id,defn:e.defn,aliases:r,displayTerm:r[0]??e.id}})}find_textdefn(e){const r=this.strip_textdefn_prefix(e);return this.textdefn.find(t=>this.strip_textdefn_prefix(t.id)===r)}get_textdefn(e){const r=this.find_textdefn(e);if(!r)throw new Error(`No textdefn named "${e}"`);return r}get_textdefns(){return this.textdefn}strip_textdefn_prefix(e){return e.startsWith(Ph)?e.slice(Ph.length):e}get_svar_bare_names(){return this.svar_list}svar_decls(){return this.svar}get_svar(e){const r=e.startsWith("svar:")?e:`svar:${e}`,t=this.svar.find(i=>i.id===r);if(t===void 0)throw new Error(`No svar named "${e}"`);return t}get_svar_gloss_defn(e){return this.get_svar(e).defn}svar_entries(){const e=new Map;for(const r of this.svar)e.set(ap(r.id),r);return this.svar_list.map(r=>{const t=e.get(r);if(!t)throw new Error(`svar_list entry "${r}" has no matching svar decl`);return{bareName:r,decl:t}})}has_framing_notes(){return this.framing.length>0}has_examples(){return this.isym.some(e=>{var r,t;return(((r=e.pos)==null?void 0:r.length)??0)>0||(((t=e.neg)==null?void 0:t.length)??0)>0})}isym_entries(){return this.isym}get_isym(e){const r=e.startsWith("isym:")?e:`isym:${e}`,t=this.isym.find(i=>i.id===r);if(t===void 0)throw new Error(`No isym named "${e}"`);return t}has_srcquotes(){return this.srcquote.length>0}resolve_srcquotes(e){const r=new Map(this.srcquote.map(t=>[t.id,t]));return e.map(t=>{const i=r.get(t);if(!i)throw new Error(`Unknown srcquote id: ${t}`);return i})}framing_static_anchor_ids(){const e=new Set;for(const r of this.framing)r.static_anchor!==null&&e.add(r.static_anchor);return e}get_axioms(){return this.ax}get_axioms_in_display_section(e){return this.ax.filter(r=>(r.simplifying??!1)===e)}find_ax(e){const r=Mt(e);return this.ax.find(t=>Mt(t.id)===r)}get_ax(e){const r=this.find_ax(e);if(r===void 0)throw new Error(`No axiom named "${e}"`);return r}get_ax_sexpr(e){return this.get_ax(e).sexpr}get_ax_defn(e){return this.get_ax(e).defn}can_consolidate_isym_svar(e){var u,a;const r=e.slice(5),t=this.isym.find(c=>c.id===e);if(!t||t.kind!=="real"||(((u=t.pos)==null?void 0:u.length)??0)>0||(((a=t.neg)==null?void 0:a.length)??0)>0||!this.svar_list.includes(r))return!1;const i=this.svar.find(c=>c.id===`svar:${r}`);if(!i)return!1;const o=this.expr.find(c=>c.id===`expr:${r}`);return!o||o.sexpr!==e?!1:i.defn===""}get_display_ax(e){return this.display.ax[e]}get_display_ax_or_none(e){return this.display.ax[e]??null}get_display_expr(e){return this.display.expr[e]}get_display_form(e){return this.display.form[e]}get_display_form_or_none(e){return this.display.form[e]??null}get_display_definedSym(e){return this.display.definedSym[e]}get_display_definedSym_or_none(e){return this.display.definedSym[e]??null}get_display_expr_keys(){return Object.keys(this.display.expr)}get_display_form_keys(){return Object.keys(this.display.form)}get_framing_layout(e){const r=new Set(e),t=new Map(this.framing.map(s=>[s.id,s])),i=new Map,o=s=>{if(i.has(s))return i.get(s)??null;const l=t.get(s);if(!l)throw new Error(`Unknown framing note id: ${s}`);let f=null;if(r.has(l.flabel)){const d=l.framing_target;if(d!==null){const p=o(d);p!==null&&(f={anchor_id:p.anchor_id,depth:p.depth+1,visible_parent_id:d})}f===null&&l.static_anchor!==null&&(f={anchor_id:l.static_anchor,depth:1,visible_parent_id:null})}return i.set(s,f),f};for(const s of this.framing)o(s.id);const u=new Map,a=[],c=new Map;for(const s of this.framing){const l=i.get(s.id);l!=null&&u.set(s.id,{depth:l.depth,note:s,children:[]})}for(const s of this.framing){const l=i.get(s.id);if(l==null)continue;const f=u.get(s.id);if(l.visible_parent_id!==null)u.get(l.visible_parent_id).children.push(f);else if(l.anchor_id==="root")a.push(f);else{const d=c.get(l.anchor_id)??[];d.push(f),c.set(l.anchor_id,d)}}return{root_section:{static_anchor_id:"root",layout_nodes:a},nonroot_anchor_sections:new Map(Array.from(c.entries(),([s,l])=>[s,{static_anchor_id:s,layout_nodes:l}]))}}}function Bp(n){return n.get_textdefn_entries().map(e=>{const r=`def-${e.bareName.toLowerCase()}`;return{...e,anchorId:r,anchor:`#${r}`}})}const Aw=["options","config","layout","svar","textchunk","display","isym","ax","expr","form","definedSym","textdefn"];function Lw(n){if(typeof n!="object"||n===null)throw new Error("Jprob template data must be a non-null object");const e=n,r=Aw.filter(t=>!(t in e));if(r.length>0)throw new Error(`Jprob template data missing required keys: ${r.join(", ")}`);return new y7(n)}function kw(n){return Lw(n)}function J(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function fe(n){return n.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const sp="[",cp="]",E7="{",$7="}",Iw=new RegExp("(?<!\\\\)\\{([^\\}]+)\\}","g"),Oi=new RegExp("(?<!\\\\)\\{((?:expr|form):[^\\}]+)\\}","g"),Cw=new RegExp("(?<!\\\\)\\[([^\\]]+?)\\|(\\w[\\w:-]*)\\]","g"),Rw=new RegExp("(?<!\\\\)\\[([^\\]|]+)\\]","g"),Di=/‹\+(.*?)\+›/g,Mw=new RegExp("(?<!\\\\)\\[([^\\]|]*?)(?:\\|[^\\]]*?)?\\]","g"),Nw=new RegExp("(?<!\\\\)\\{[^\\}]*\\}","g"),Tw=/\\([\{\}])/g,qw=/\\([\[\]])/g,lp="symbol-ref-name",Up="ax-",Wp="svar-";function w7(n){return n.form.filter(e=>!e.hide&&n.get_display_form(e.id)).map(e=>e.id)}function S7(n,e={}){const r=new Map,t=e.symbolMnames??!1,i=Fw(n);for(const o of n.isym_entries()){const u=o.id.startsWith("isym:")?o.id:`isym:${o.id}`,a=u.startsWith("isym:")?u.slice(5):u,c=`#isym-${a}`,s={bareId:a,mname:i.get(u)??a},l=i.get(u);l&&(r.set(l,{anchor:c,displayText:l}),r.set(`${a}:long`,{anchor:c,displayText:l}),r.set(`isym:${a}:long`,{anchor:c,displayText:l})),r.set(a,{anchor:c,displayText:bi(s,t),symbolName:s}),r.set(u,{anchor:c,displayText:bi(s,t),symbolName:s})}for(const o of Bp(n))for(const u of o.aliases)r.set(u,{anchor:o.anchor,displayText:u});for(const o of n.isym_entries()){const u=o.id.replace(/^isym:/,"");let a=0;for(const c of["pos","neg"])for(const s of o[c]??[])a++,s.alias&&r.set(s.alias,{anchor:`#ex-${s.alias}`,displayText:`${u} example ${a}`})}for(const o of n.get_axioms()){if(!n.get_display_ax(o.id))continue;const a=Mt(o.id);r.set(o.id,{anchor:`#${Up}${a}`,displayText:a})}for(const o of w7(n)){if(r.has(o))continue;const u=Eo(o);r.set(o,{anchor:`#form-${u}`,displayText:u})}for(const o of n.get_options()){const u=Fe(o.id),a=`#opt-${u}`,c={bareId:u,mname:o.longname??u},s=bi(c,t),l={anchor:a,displayText:s,symbolName:c};r.has(o.id)||r.set(o.id,l),r.has(u)||r.set(u,l);const f=`${u}:short`;r.has(f)||r.set(f,{anchor:a,displayText:u})}for(const o of n.get_tchoice_decls()){const u=Rt(o.id),a=`#tchoice-${u}`,c={bareId:u,mname:o.longname??u};r.has(o.id)||r.set(o.id,{anchor:a,displayText:bi(c,t),symbolName:c})}for(const o of n.get_svar_bare_names()){const u=`svar:${o}`;r.has(u)||r.set(u,{anchor:`#${Wp}${o}`,displayText:o})}for(const o of n.definedSym){const u=o.id.startsWith("definedSym:")?o.id.slice(11):o.id,c={anchor:`#defsym-${u}`,displayText:u};r.has(u)||r.set(u,c),r.has(o.id)||r.set(o.id,c)}return r}function Fw(n){const e=new Map;for(const r of n.isym_entries()){if(!r.longname)continue;const t=r.id.startsWith("isym:")?r.id:`isym:${r.id}`;e.set(t,r.longname)}return e}function bi(n,e){return e?n.mname:n.bareId}const Ow={point:"=",sample:"~",bounds:"∈"};function A7(n){return Ow[n]}function Gt(n){return n.svar_entries().map(({bareName:e})=>`{expr:${e}}`)}function xh(n,e,r,t,i){t.footnoteCounter.n++;const o=t.footnoteCounter.n,u=`${t.footnoteIdNamespace??""}${o}`,a=e?t.renderBody(e):"",c=r?`<a href="${r}" class="popover-go">go →</a>`:"";t.footnotes.push({id:u,body:a+c});const s=L7(i);return`<span class="ref-popover${s.classSuffix}" data-fnref="fnref:${u}"${s.dataAttrs}>${n}</span><sup id="fnref:${u}" class="lf-zero"><a href="#fn:${u}">${o}</a></sup>`}function Dw(n,e,r){const t=L7(r);return`<a href="${n}"${t.classAttr}${t.dataAttrs}>${e}</a>`}function L7(n){if(!n)return{classAttr:"",classSuffix:"",dataAttrs:""};const e=` data-bareid="${fe(n.bareId)}" data-mname="${fe(n.mname)}"`;return{classAttr:` class="${lp}"`,classSuffix:` ${lp}`,dataAttrs:e}}function Pw(n,e,r,t){const i=u=>r!==void 0&&r.popoverAllRefs;let o=n;return o=o.replace(Cw,(u,a,c)=>{if(i()){const f=r.lookup.get(c),d=(f==null?void 0:f.anchor)??`#${c}`,p=(f==null?void 0:f.body)??"";return xh(a,p,d,r)}const s=e.get(c);return`<a href="${s?s.anchor:`#isym-${c}`}">${a}</a>`}),o=o.replace(Rw,(u,a)=>{if(i()){const s=r.lookup.get(a);if(!s)return t==null||t.add(a),`${sp}${a}${cp}`;const l=e.get(a);return xh(s.label,s.body,s.anchor,r,l==null?void 0:l.symbolName)}const c=e.get(a);return c?Dw(c.anchor,c.displayText,c.symbolName):(t==null||t.add(a),`${sp}${a}${cp}`)}),o}const xw=10;function Hw(n,e,r,t){let i=n;for(let o=0;o<xw;o++){const u=Pw(i,e,r,t);if(u===i)break;i=u}return i.replace(qw,"$1")}function fp(n,e){const r=Bw(n),t=new Map;for(const[i,o]of e){const u=r.get(o.anchor)??"";t.set(i,{label:o.displayText,body:u,anchor:o.anchor})}return t}function Bw(n){const e=new Map;for(const r of n.isym_entries()){const t=r.id.replace(/^isym:/,"");e.set(`#isym-${t}`,r.defn)}for(const r of Bp(n))e.set(r.anchor,r.defn);for(const r of n.svar_decls()){const t=ap(r.id);e.set(`#gloss-${t}`,r.defn)}for(const r of n.svar_decls()){const t=ap(r.id),i=`isym:${t}`,o=n.can_consolidate_isym_svar(i)?n.get_isym(i).defn:r.defn,u=o?[o]:[];u.push(`{expr:${t}}`),e.set(`#${Wp}${t}`,u.join(`
`))}for(const r of n.get_display_form_keys()){const t=n.get_display_form(r);e.set(`#form-${Eo(r)}`,t)}for(const r of n.get_axioms()){const t=n.get_display_ax(r.id);t&&e.set(`#${Up}${Mt(r.id)}`,t)}for(const r of n.get_options()){const t=Fe(r.id);e.set(`#opt-${t}`,r.defn)}for(const r of n.get_tchoice_decls())e.set(`#tchoice-${Rt(r.id)}`,r.defn);for(const r of n.definedSym){const t=r.id.startsWith("definedSym:")?r.id.slice(11):r.id,i=n.get_display_definedSym_or_none(r.id)??"",o=[];i&&o.push(`:= ${i}`),r.defn&&o.push(r.defn),e.set(`#defsym-${t}`,o.join(" — "))}return e}class Uw extends y7{constructor(r,t,i){super(r);qe(this,"cparam_overrides");qe(this,"aopt_overrides");qe(this,"query_mode");const o=new Set(this.get_option_bare_names()),u=this.get_tchoice_bare_names(),a=new Map,c=new Map;for(const[s,l]of Object.entries(t)){if(u.has(s))throw new Error(`Cannot override tchoice entity "${s}" for ${this.aid}: it is left free for the responder to choose.`);if(!o.has(s))throw new Error(`Unknown option key "${s}" for ${this.aid}. Valid keys: ${[...o].sort().join(", ")}`);const f=this.find_cparam(s);if(f){if(i!=="plainnum")throw new Error(`Cannot fix cparam "${s}" for ${this.aid} in ${i} mode: cparams are free in plaincode/richcode (the responder covers all combinations).`);a.set(f.id,l)}else c.set(this.get_aopt(s).id,l)}this.cparam_overrides=a,this.aopt_overrides=c,this.query_mode=i}is_code_mode(){return this.query_mode!=="plainnum"}option_value(r){const t=this.find_cparam(r);if(t)return this.cparam_overrides.get(t.id)??t.default_value;const i=this.get_aopt(r);return this.aopt_overrides.get(i.id)??i.default_value}option_value_or(r,t){return this.get_option_bare_names().includes(r)?this.option_value(r):t}}function k7(n,e,r){return new Uw(n._get_data(),e,r)}function jp(n,e){if("input_type"in n&&n.input_type==="MultiStringFromSet"){if(!Array.isArray(e)||!e.every(i=>typeof i=="string"))throw new Error(`Invalid MultiStringFromSet value for ${n.id}: expected a string array`);if(!Array.isArray(n.allowed_values))throw new Error(`Invalid MultiStringFromSet declaration for ${n.id}: missing allowed_values`);const r=new Set(n.allowed_values),t=e.filter(i=>!r.has(i));if(t.length>0)throw new Error(`Invalid MultiStringFromSet value for ${n.id}: values not in allowed_values: `+t.join(", "));return[...e]}if(typeof e=="object")throw new Error(`Invalid scalar value for ${n.id}: expected string, number, or boolean`);if(typeof n.default_value=="boolean"){if(typeof e=="boolean")return e;if(e==="true")return!0;if(e==="false")return!1;throw new Error(`Invalid boolean value for ${n.id}: ${e}`)}if(typeof n.default_value=="number"){if(typeof e=="boolean"||typeof e=="string"&&e.trim()==="")throw new Error(`Invalid numeric value for ${n.id}: ${e}`);const r=Number(e);if(!Number.isFinite(r))throw new Error(`Invalid numeric value for ${n.id}: ${e}`);return r}if(typeof n.default_value=="string"){if(typeof e!="string")throw new Error(`Invalid string value for ${n.id}: ${e}`);return e}throw new Error(`Option ${n.id} has no supported default value type`)}const I7=!0;function Hh(n,e){return n!=="typical"||e}function Ww(n,e){const r=n.map(u=>({name:Fe(u.id),values:u.allowed_values.filter(a=>typeof a!="boolean")}));if(r.length===0)return{names:[],combinations:[{}]};const t=r.map(u=>u.name),i=r.map(u=>u.values);let o=[{}];for(let u=0;u<t.length;u++){const a=t[u],c=i[u],s=[];for(const l of o)for(const f of c)s.push({...l,[a]:f});o=s}return e!==void 0&&(o=o.filter(u=>e(u))),{names:t,combinations:o}}function C7(n,e,r){const t=new Set(n.get_cparam_bare_names()),i=r!=="plainnum",o={};for(const[u,a]of Object.entries(e))i&&t.has(u)||(o[u]=a);return o}const jw=[{id:"symbolMnames",description:"Long symbol names",type:"boolean",default:!1},{id:"popoverAllRefs",description:"Popovers for all refs",type:"boolean",default:!0},{id:"persistentPopovers",description:"Persistent popovers (multiple, Esc to close)",type:"boolean",default:!1},{id:"inputMode",description:"Response type",type:"enum",values:["point","bounds","sample"],default:"sample"},{id:"probAsOdds",description:"Stats display",type:"enum",values:["probability","odds"],default:"probability"},{id:"showExampleClassification",description:"Show example classifications",type:"boolean",default:!0},{id:"showFramingNotes",description:"Show framing notes",type:"boolean",default:!0},{id:"framingNoteAbbrev",description:"Abbreviate framing notes",type:"boolean",default:!0},{id:"framingNoteAbbrevThreshold",description:"Abbreviation soft threshold",type:"integer",default:800,min:25,step:25},{id:"mcItersInitialPerPlot",description:"MC iters per plot (initial)",type:"integer",default:1e4,min:1e3,step:1e3},{id:"mcItersPerClickPerPlot",description:"MC iters per plot (+ click)",type:"integer",default:5e3,min:1e3,step:1e3},{id:"plaincodeEvalTimeoutMs",description:"Code eval timeout (ms)",type:"integer",default:5e3,min:1e3,step:1e3}],Gw={options:jw},Gp=Gw.options,Vw=new Map(Gp.map(n=>[n.id,n.description]));function Pi(n){return Vw.get(n)??n}const vu=Object.freeze(Gp.reduce((n,e)=>(n[e.id]=e.default,n),{})),R7="global_options";function cn(){try{const n=localStorage.getItem(R7);if(n===null)return{...vu};const e=JSON.parse(n);return{...vu,...e}}catch{return{...vu}}}function Xw(n){localStorage.setItem(R7,JSON.stringify(n))}function Nt(n,e){const r=cn();r[n]=e,Xw(r)}const Yw=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Kw=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);function Nn(n,e){return n>>>e|n<<32-e}function M7(n){const e=new TextEncoder().encode(n),r=e.length<<3>>>0,t=Math.floor(e.length/536870912),i=e.length+9+63&-64,o=new Uint8Array(i);o.set(e),o[e.length]=128;const u=new DataView(o.buffer);u.setUint32(i-8,t),u.setUint32(i-4,r);const a=new Uint32Array(Kw),c=new Uint32Array(64);for(let l=0;l<i;l+=64){for(let _=0;_<16;_++)c[_]=u.getUint32(l+_*4);for(let _=16;_<64;_++){const y=c[_-15],E=c[_-2],I=Nn(y,7)^Nn(y,18)^y>>>3,L=Nn(E,17)^Nn(E,19)^E>>>10;c[_]=c[_-16]+I+c[_-7]+L|0}let f=a[0],d=a[1],p=a[2],h=a[3],m=a[4],v=a[5],b=a[6],g=a[7];for(let _=0;_<64;_++){const y=Nn(m,6)^Nn(m,11)^Nn(m,25),E=m&v^~m&b,I=g+y+E+Yw[_]+c[_]|0,L=Nn(f,2)^Nn(f,13)^Nn(f,22),R=f&d^f&p^d&p,A=L+R|0;g=b,b=v,v=m,m=h+I|0,h=p,p=d,d=f,f=I+A|0}a[0]=a[0]+f|0,a[1]=a[1]+d|0,a[2]=a[2]+p|0,a[3]=a[3]+h|0,a[4]=a[4]+m|0,a[5]=a[5]+v|0,a[6]=a[6]+b|0,a[7]=a[7]+g|0}let s="";for(let l=0;l<8;l++)s+=(a[l]>>>0).toString(16).padStart(8,"0");return s}const N7=5;function Bh(n){const e={};for(const r of Object.keys(n).sort())e[r]=n[r];return e}function Jw(n){return M7(JSON.stringify(n)).slice(0,N7)}function T7(n,e,r,t){const i=[e,Bh(r)];return n==="plainnum"&&i.push(Bh(t??{})),M7(JSON.stringify(i)).slice(0,N7)}const zw={boolrv:"BoolRV",real:"ℝ",prop:"Prop"},dp="dag-ref",Qw="dag-lhs",pp="dag-glyph",xi="data-dag-id",Zw="↖",eS="↘";function nS(n){const e=n.sexpr;if(!Array.isArray(e)||e[0]!=="eq")return null;const r=e[1];return typeof r!="string"||!r.startsWith("expr:")?null:r.slice(5)}function rS(n){Oi.lastIndex=0;const e=[];for(const r of n.matchAll(Oi)){const t=r[1];if(!t.startsWith("expr:"))continue;const i=t.slice(5);i.includes(":")||e.push(i)}return e}function tS(n,e){const r=new Map(n.form.map(c=>[c.id,c])),t=e.map(c=>n.get_display_form(c)),i=new Map,o=e.map((c,s)=>{const l=r.get(c),f=l?nS(l):null;return f!==null&&!i.has(f)&&i.set(f,s),f}),u=new Set;t.forEach((c,s)=>{for(const l of rS(c)){const f=i.get(l);f!==void 0&&f<s&&u.add(l)}});const a=new Map;return e.forEach((c,s)=>{const l=t[s].replace(Oi,(f,d)=>{if(!d.startsWith("expr:"))return f;const p=d.slice(5);if(p.includes(":"))return f;if(p===o[s])return u.has(p)?`<span class="${dp} ${Qw}" ${xi}="${fe(p)}"><span class="${pp}">${eS}</span>${f}</span>`:f;const h=i.get(p);if(h===void 0||h>=s)return f;const m=Eo(e[h]);return`<span class="${dp}" ${xi}="${fe(p)}"><a class="${pp}" href="#form-${fe(m)}">${Zw}</a>${f}</span>`});a.set(c,l)}),a}const iS=["expr:","form:"],oS=["textchunk:","aopt:","cparam:"],uS=10;function aS(n){const e=new Map;for(const r of n.get_options()){if(Hp(r)&&r.variant_producing)continue;const t=q7(r.id);if(n.is_code_mode()&&wr(r.id)){e.set(t,`${sp}${t}:short${cp}`);continue}e.set(t,String(n.option_value(t)))}for(const r of n.get_textchunks()){const t=r.id.startsWith("textchunk:")?r.id.slice(10):r.id;e.set(t,r.defn)}return e}function q7(n){for(const e of oS)if(n.startsWith(e))return n.slice(e.length);return n}function sS(n,e){const r=aS(e);let t=n;for(let i=0;i<uS;i++){const o=t.replace(Iw,(u,a)=>{for(const l of iS)if(a.startsWith(l))return u;const c=q7(a),s=r.get(c);if(s===void 0)throw new Error(`Template variable ${E7}${a}${$7} not found in non-variant-producing options or textchunks`);return s});if(o===t)break;t=o}return t.replace(Tw,"$1")}const cS=10;function lS(n){const e=new Map;for(const t of n.get_display_expr_keys())e.set(t,n.get_display_expr(t));const r=new Set(n.form.filter(t=>!t.hide).map(t=>t.id));for(const t of n.get_display_form_keys())r.has(t)&&e.set(t,n.get_display_form(t));return e}function fS(n,e){let r=n;for(let t=0;t<cS;t++){const i=r.replace(Oi,(o,u)=>{const a=e.get(u);if(a===void 0)throw new Error(`Display ref ${E7}${u}${$7} not found in display.expr or display.form`);return a});if(i===r)break;r=i}return r}const F7="footnotes-container",Vp="footnotes-container-calc",dS="calc:";function pS(n,e,r,t=""){return Di.lastIndex=0,n.replace(Di,(i,o)=>{e.n++;const u=e.n,a=`${t}${u}`;return r.push({id:a,body:o}),`<sup id="fnref:${a}"><a href="#fn:${a}">${u}</a></sup>`})}function hS(n){return Di.lastIndex=0,n.replace(Di,(e,r)=>`(${r})`)}function vS(n,e){return n.filter(r=>e.querySelector(`[href="#fn:${r.id}"]`)!==null)}function O7(n){return n.map(e=>`<li id="fn:${e.id}"><p>${e.body}<a href="#fnref:${e.id}" class="footnote-backref">↩</a></p></li>`).join("")}const mS=2,bS="&nbsp;".repeat(mS),D7="framing-slot",P7="data-framing-anchor";function Vt(n,e){return n.jprobInstance.framing_static_anchor_ids().has(e)?`<div class="${D7}" ${P7}="${fe(e)}"></div>`:""}const x7="bare-id-label";function H7(n,e){return n.showBareIds??!1?`<span class="${x7}">${J(e)}</span>`:""}function gS(n,e){return`<span class="${x7}" id="${fe(e)}">${J(n)}</span>`}const hp="text-paragraph",B7="text-unindented-paragraph",U7="text-blockquote",Uh=/^>[ ]?/,_S="❝",W7="srcquote-widget",Xp="srcquote-glyph",j7="srcquote-popover",yS="srcquote-attribution",ES="srcquotes-inline",$S={atStart:"",atEnd:""};function G7(n,e){return Se(n.defn,e)+`<span class="${yS}">— ${J(n.attribution)}</span>`}function wS(n,e){const r={...e,insidePopoverBody:!0},t=n.map(i=>G7(i,r)).join("");return`<span class="${W7}"><button class="${Xp}" type="button" aria-expanded="false" aria-label="Source quotes">${_S}</button><span class="${j7}" hidden>${t}</span></span>`}function SS(n,e){const r=n.map(t=>G7(t,e));return`<span class="${ES}">${r.join("")}</span>`}function Ln(n,e){if(!n||n.length===0)return $S;const r=e.jprobInstance.resolve_srcquotes(n);return e.srcquotesInlined??!1?{atStart:"",atEnd:SS(r,e)}:{atStart:wS(r,e),atEnd:""}}const AS=!0;function wt(n,e,r){var t;return((t=n==null?void 0:n[e])==null?void 0:t[r])??AS}function Se(n,e){let r=sS(n,e.jprobInstance);const t=lS(e.jprobInstance);r=fS(r,t);const i=kS(e);return r=Hw(r,e.refLookup,i,e.unresolvedRefs),e.insidePopoverBody?r=hS(r):e.footnoteCounter&&e.footnotes&&(r=pS(r,e.footnoteCounter,e.footnotes,e.footnoteIdNamespace)),r=LS(r),r}function LS(n){const e=n.split(/(\n\t)|(\n{2,})/);if(e.length===1)return mu(n,null);let r=mu(e[0],hp);for(let t=1;t<e.length;t+=3){const i=e[t],o=e[t+2];r+=mu(o,i!==void 0?hp:B7)}return r}function mu(n,e){if(!n)return"";const r=[];for(const u of n.split(`
`)){const a=Uh.test(u),c=a?u.replace(Uh,""):u,s=r[r.length-1];s&&s.isQuote===a?s.lines.push(c):r.push({isQuote:a,lines:[c]})}const t=u=>{const a=u.lines.join("<br>");return u.isQuote?`<span class="${U7}">${a}</span>`:a},i=r.length===1?r[0]:void 0;if(i!=null&&i.isQuote)return t(i);const o=r.map(t).join("");return e===null?o:`<span class="${e}">${o}</span>`}function kS(n){if(!n.popoverLookup||!n.footnoteCounter||!n.footnotes||n.insidePopoverBody||!n.popoverAllRefs)return;const e={...n,insidePopoverBody:!0};return{lookup:n.popoverLookup,footnoteCounter:n.footnoteCounter,footnotes:n.footnotes,footnoteIdNamespace:n.footnoteIdNamespace,popoverAllRefs:n.popoverAllRefs??!1,renderBody:r=>Se(r,e)}}function IS(n,e){return n.get_isym(e).longname??e}function CS(n){return n.startsWith("isym:")?n.slice(5):n}function RS(n,e){return n.get_isym(e).kind}function MS(n,e){const r=zw[RS(n,e)];let t=`${e} : ${r}`;const i=IS(n,e);return i&&e!==i&&(t+=`${bS}(aka ${i})`),t}function NS(n){if(!n.args||n.args.length===0)return n.id.slice(11);const e=n.id.slice(11),r=n.args.map(t=>`<i>${typeof t=="string"?t:t.name}</i>`);return`${e}(${r.join(", ")})`}function TS(n){const e=[];for(const r of n.jprobInstance.definedSym){if(r.always_inline)continue;const t=n.jprobInstance.get_display_definedSym_or_none(r.id);if(!t)continue;const o=`defsym-${r.id.slice(11)}`,u=NS(r),a=Se(t,n),s=[`<h3>${`${u} ≔ ${a}`}</h3>`],l=Ln(r.srcquotes,n);r.defn?s.push(`<p class="definition">${l.atStart}${Se(r.defn,n)}${l.atEnd}</p>`):(l.atStart||l.atEnd)&&s.push(`<p class="definition">${l.atStart}${l.atEnd}</p>`),s.push(Vt(n,r.id)),e.push(`<div class="defsym-card" id="${o}">${s.join("")}</div>`)}return e.join("")}function qS(n){const e=Bp(n.jprobInstance);if(!e.length)return"";const r=[];for(const t of e){const i=Ln(n.jprobInstance.get_textdefn(t.id).srcquotes,n);r.push(`<dt id="${t.anchorId}">${t.displayTerm}</dt><dd>${i.atStart}${Se(t.defn,n)}${i.atEnd}${Vt(n,`textdefn:${t.bareName}`)}</dd>`)}return`<dl class="definitions">${r.join("")}</dl>`}function FS(n){const e=n.jprobInstance.isym_entries();if(!e.length)return"";const r=[];for(const t of e){const i=CS(t.id);if(n.jprobInstance.can_consolidate_isym_svar(`isym:${i}`))continue;const o=[];o.push(`<h3>${MS(n.jprobInstance,i)}</h3>`);const u=Ln(t.srcquotes,n);o.push(`<p class="definition">${u.atStart}${Se(t.defn,n)}${u.atEnd}</p>`);const a=(t.pos??[]).filter(f=>Hh(f.classification,n.showTypical)),c=(t.neg??[]).filter(f=>Hh(f.classification,n.showTypical)),s=wt(n.exampleFoldState,i,"pos"),l=wt(n.exampleFoldState,i,"neg");if(a.length>0||c.length>0){const f=[];a.length>0&&f.push(`<button class="ex-btn pos${s?" active":""}" data-isym="${i}" data-type="pos" title="Satisfying examples">+</button>`),c.length>0&&f.push(`<button class="ex-btn neg${l?" active":""}" data-isym="${i}" data-type="neg" title="Falsifying examples">&minus;</button>`),o.push(`<div class="example-controls">${f.join("")}</div>`)}if(a.length>0){const f=a.map(d=>{const p=d.alias?` id="ex-${d.alias}"`:"",h=n.showExampleClassification?`<span class="classification">${d.classification.charAt(0).toUpperCase()+d.classification.slice(1)}:</span> `:"",m=Ln(d.srcquotes,n);return`<li${p}>${h}${m.atStart}${Se(d.defn,n)}${m.atEnd}</li>`});o.push(`<div class="examples pos${s?" visible":""}"><p>Satisfying examples:</p><ul>${f.join("")}</ul></div>`)}if(c.length>0){const f=c.map(d=>{const p=d.alias?` id="ex-${d.alias}"`:"",h=n.showExampleClassification?`<span class="classification">${d.classification.charAt(0).toUpperCase()+d.classification.slice(1)}:</span> `:"",m=Ln(d.srcquotes,n);return`<li${p}>${h}${m.atStart}${Se(d.defn,n)}${m.atEnd}</li>`});o.push(`<div class="examples neg${l?" visible":""}"><p>Falsifying examples:</p><ul>${f.join("")}</ul></div>`)}o.push(Vt(n,`isym:${i}`)),r.push(`<div class="isym-card" id="isym-${i}">${o.join("")}</div>`)}return r.join("")}function Wh(n,{simplifying:e}){const r=[];for(const t of n.jprobInstance.get_axioms_in_display_section(e)){const i=n.jprobInstance.get_display_ax(t.id);if(!i)continue;const o=Mt(t.id),u=t.defn?`<div class="ax-defn">${Se(t.defn,n)}</div>`:"",a=Vt(n,t.id),c=Ln(t.srcquotes,n);r.push(`<div class="ax-card" id="${Up}${o}">`+H7(n,o)+`<div class="ax-expr">${c.atStart}${Se(i,n)}</div>${u}${c.atEnd}${a}</div>`)}return r.length===0?"":`<div class="axioms">${r.join("")}</div>`}function OS(n){const e=[],r=w7(n.jprobInstance),t=tS(n.jprobInstance,r);for(const i of r){const o=t.get(i),u=Eo(i);e.push(`<div class="formula" id="form-${u}">`+H7(n,u)+Se(o,n)+Vt(n,i)+"</div>")}return e.join("")}const In="0",Tt="1",V7=["plaincode","plainnum"];function X7(n,e){return e==="plainnum"?n.adhocPlainnumEntries:n.adhocPlaincodeEntries}function DS(n,e,r){return e==="plainnum"?n.plainnum[r.resultIndex]:n.plaincode[r.resultIndex]}function PS(n){const e=Object.keys(n.reasoning_response).some(u=>n.reasoning_response[u]!==""),r=n.misc_response!=="",t=n.verified_code_input!==void 0&&n.verified_code_input!=="",i=n.trial_choices!==void 0&&Object.keys(n.trial_choices).length>0;if(!e&&!r&&!t&&!i)return[];const o={};return t&&(o.source_code=n.verified_code_input),e&&(o.reasoning=n.reasoning_response),r&&(o.misc=n.misc_response),i&&(o.trial_choices=n.trial_choices),[o]}function $o(n){return{...n,model:"user",version:"",effort:null,content_hash:"",prompt_file_basename:"yours-plaincode",trial_metadata:PS(n)}}function xS(n){const e=[],r=[];for(let t=0;t<n.length;t++){const i=n[t];for(let o=0;o<i.plainnum.length;o++)e.push({presetIndex:t,resultIndex:o});for(let o=0;o<i.plaincode.length;o++)r.push({presetIndex:t,resultIndex:o})}return{plainnum:e,plaincode:r}}function HS(n,e,r){const t=n.name_or_pseudoname,o=n.plainnum.length>0&&n.plaincode.length>0?` [${e}]`:"",u=r.prompt_file_basename?` (${r.prompt_file_basename})`:"";return`${t}${o} ${r.label}${u}`}const BS=["prompt","plainnum"];function US(n){return n.filter(e=>BS.some(r=>e.prompt_file_basename.startsWith(r)))}function WS(n){return n.filter(e=>e.prompt_file_basename.startsWith("plaincode"))}function jS(n){return n.filter(e=>e.prompt_file_basename.startsWith("richcode"))}function GS(n){const e=new Map,r=(o,u,a,c,s)=>`${o}\0${u}\0${a??""}\0${c}\0${s??""}`,t=o=>({model:o.model,version:o.version,effort:o.effort,label:o.label,content_hash:o.content_hash,aggregate:o.aggregate,plainnumIndex:null,plaincodeIndex:null,richcodeIndex:null,availableModes:[]});for(let o=0;o<n.plainnumResults.length;o++){const u=n.plainnumResults[o],a=r(u.model,u.version,u.effort,u.content_hash),c=e.get(a);if(c)c.plainnumIndex===null&&(c.plainnumIndex=o,c.availableModes=["plainnum",...c.availableModes.filter(s=>s!=="plainnum")]);else{const s=t(u);s.plainnumIndex=o,s.availableModes=["plainnum"],e.set(a,s)}}for(let o=0;o<n.plaincodeResults.length;o++){const u=n.plaincodeResults[o],a=r(u.model,u.version,u.effort,u.content_hash,u.aggregate),c=e.get(a);if(c)c.plaincodeIndex===null&&(c.plaincodeIndex=o,c.availableModes.includes("plaincode")||c.availableModes.push("plaincode"));else{const s=t(u);s.plaincodeIndex=o,s.availableModes=["plaincode"],e.set(a,s)}}for(let o=0;o<n.richcodeResults.length;o++){const u=n.richcodeResults[o],a=r(u.model,u.version,u.effort,u.content_hash,u.aggregate),c=e.get(a);if(c)c.richcodeIndex===null&&(c.richcodeIndex=o,c.availableModes.includes("richcode")||c.availableModes.push("richcode"));else{const s=t(u);s.richcodeIndex=o,s.availableModes=["richcode"],e.set(a,s)}}const i=o=>o.aggregate==="all"?0:o.aggregate==="model_size"?1:o.aggregate==="model_size__version"?2:3;return Array.from(e.values()).sort((o,u)=>i(o)-i(u))}function VS(n){return n.effort?`${n.label} ${n.effort}`:n.label}function XS(n){const e=new Map,r=n.map(VS);for(const t of r)e.set(t,(e.get(t)??0)+1);return r.map((t,i)=>e.get(t)>1?`${t} [${n[i].content_hash}]`:t)}function me(n){const e=n.indexOf(":");return e===-1?{source:n,index:-1}:{source:n.slice(0,e),index:parseInt(n.slice(e+1))}}function en(n){return n.slice(0,n.indexOf("-"))}function bn(n){return n.slice(n.indexOf("-")+1)}function De(n){return en(me(n).source)==="yours"}function Y7(n){return en(n)==="adhoc"}function YS(n){return en(n)==="metho"}function ze(n,e){var i,o;const{source:r,index:t}=me(n);if(en(r)==="yours")return null;if(r==="adhoc-plainnum"){const u=e.adhocPlainnumEntries[t];return u?((i=e.adhocPresets[u.presetIndex])==null?void 0:i.plainnum[u.resultIndex])??null:null}if(r==="adhoc-plaincode"){const u=e.adhocPlaincodeEntries[t];if(!u)return null;const a=(o=e.adhocPresets[u.presetIndex])==null?void 0:o.plaincode[u.resultIndex];return a?$o(a):null}return r==="metho-plainnum"?e.plainnumResults[t]??null:r==="metho-plaincode"?e.plaincodeResults[t]??null:r==="metho-richcode"?e.richcodeResults[t]??null:null}function K7(n,e){var o;const{source:r,index:t}=me(n);if(r!=="adhoc-plaincode")return null;const i=e.adhocPlaincodeEntries[t];return i?((o=e.adhocPresets[i.presetIndex])==null?void 0:o.plaincode[i.resultIndex])??null:null}function KS(n,e){const r=ze(n,e);if(!De(n)&&r===null)throw new Error(`Chosen result ${JSON.stringify(n)} is missing from the loaded data`)}function JS(n,e){const{source:r,index:t}=me(n);if(r==="adhoc-plainnum"){const i=e.adhocPlainnumEntries[t];return i?e.adhocPresets[i.presetIndex]??null:null}if(r==="adhoc-plaincode"){const i=e.adhocPlaincodeEntries[t];return i?e.adhocPresets[i.presetIndex]??null:null}return null}function J7(n,e){if(!e)return{point:!0,bounds:!0,sample:!0};const{source:r}=me(n),i=bn(r)!=="plainnum";i&&Kp(e);const o=i?e.cparam_combos.flatMap(a=>a.trials):e.trials,u=a=>o.some(c=>Object.keys(c[a]).length>0);return{point:u("point"),bounds:(!i||Yp(e))&&u("bounds"),sample:u("sample")}}function Yp(n){return n.count===1}function Kp(n){for(const[e,r]of n.cparam_combos.entries())if(r.trials.length===0||r.trials.length>n.count)throw new Error(`Code result cparam combo ${e} carries ${r.trials.length} trials; expected between 1 and the record trial count ${n.count}`)}function Jp(n,e,r){if(e==="point"){const i=n.point[r];return i===void 0?"":String(i)}if(e==="bounds"){const i=n.bounds[r];return i?`${i[0]} ${i[1]}`:""}const t=n.sample[r];return t?typeof t=="string"?t:t.map(([i,o])=>`(${i} ${o})`).join(" "):""}function z7(n,e){return["point","bounds","sample"].filter(r=>e.length>0&&e.every(t=>Jp(n,r,t)!==""))}function zS(n,e,r){return r.map(t=>Jp(n,e,t)).join(`
`)}function QS(n,e,r,t){const{source:i}=me(n);return i==="adhoc-plainnum"||i==="metho-plainnum"?e.trials.map(u=>t.map(a=>Jp(u,r,a))):[]}function Ur(n,e,r){const t=[];for(const i of n){if(r==="code"&&wr(i.id))continue;const o=Fe(i.id);if(!Object.prototype.hasOwnProperty.call(e,o))throw new Error(`Cannot compute optionDictKey: missing value for ${i.id}`);t.push([i.id,e[o]])}return t.sort(([i],[o])=>i<o?-1:i>o?1:0),JSON.stringify(t)}const Q7="yours_code";function wo(n,e){return`${Q7}_${n}_${e}`}function Z7(n,e){const r={};for(const t of n.get_aopts()){const i=Fe(t.id);i in e&&(r[i]=e[i])}return{aid:n.aid,label:"code",aopts:r,count:1,cparam_names:[],cparam_combos:[],raw_code_input:"",reasoning_response:{},misc_response:"",trial_choices:n.get_enum_tchoice_defaults()}}function ZS(n,e,r){const t=nA(wo(n.aid,e));return t||Z7(n,r)}function Xt(n,e,r,t){t.timestamp||(t.timestamp=new Date().toISOString()),t.content_hash=T7("code",e,t.aopts,void 0),rA(wo(n.aid,r),t)}function zp(n){const e=`${Q7}_${n}_`,r=[];for(let t=0;t<localStorage.length;t++){const i=localStorage.key(t);if(i===null||!i.startsWith(e))continue;const o=localStorage.getItem(i);if(o===null)continue;let u;try{u=JSON.parse(o)}catch{continue}r.push({codeOptionDictKey:i.slice(e.length),record:u})}return r.sort((t,i)=>{const o=t.record.timestamp??"";return(i.record.timestamp??"").localeCompare(o)}),r}function eA(n,e){localStorage.removeItem(wo(n,e))}function nA(n){try{const e=localStorage.getItem(n);return e===null?null:JSON.parse(e)}catch{return null}}function rA(n,e){localStorage.setItem(n,JSON.stringify(e))}function So(n,e){const r={};for(const t of n){const i=Fe(t.id),o=e[i]??t.default_value;r[i]=jp(t,o)}return r}function tA(n,e){const r={...e};for(const t of n){if(!("input_type"in t)||t.input_type!=="MultiStringFromSet")continue;const i=Fe(t.id),o=e[i];if(!Array.isArray(o)||!o.every(c=>typeof c=="string")||!Array.isArray(t.allowed_values))continue;const u=new Set(t.allowed_values),a=o.filter(c=>!u.has(c));a.length!==0&&(console.warn(`Ignoring MultiStringFromSet values no longer allowed for ${t.id}: `+a.join(", ")),r[i]=o.filter(c=>u.has(c)))}return r}const e9="aopt",n9="ui",iA="yours";function Hi(n,e){return`${n}_${e}`}function Ao(n,e){return`${iA}_${n}_${e}`}const oA={whose:"yours-plainnum",lastYoursWhose:"yours-plainnum",lastAdhocWhose:"",lastMethoWhose:"",exampleFoldState:{},framingFoldState:{},jointDependenceEditorOpen:!0,srcquotesInlinedOverride:null,cparamPinned:{},cparamValues:{},codeSweepMode:"average",codePlotTargetKind:"formula",codePlotFormulaId:"",codePlotRawResponseName:"",modelEffortPinned:!0,modelEffortSweepScope:null,assumptionTrialIndex:0,presetQueryModeFilter:"all"};function r9(n){const e=cn();return{...structuredClone(oA),inputMode:e.inputMode,probAsOdds:e.probAsOdds,symbolMnames:e.symbolMnames,popoverAllRefs:e.popoverAllRefs,persistentPopovers:e.persistentPopovers,showExampleClassification:e.showExampleClassification,showFramingNotes:e.showFramingNotes,framingNoteAbbrev:e.framingNoteAbbrev}}function t9(n,e){const r={},t={};for(const i of n){const o=Fe(i.id);o in e&&(wr(i.id)?t[o]=e[o]:r[o]=e[o])}return{aopts:r,cparam_values:t}}function i9(n,e){const{aopts:r,cparam_values:t}=t9(n.get_options(),e);return{aid:n.aid,label:"",prompt_file_basename:"",aopts:r,cparam_values:t,count:1,trials:[{point:{},bounds:{},sample:{}}],precomputed:{},raw_input:{},trial_choices:n.get_enum_tchoice_defaults()}}function uA(n){const e=So(n.get_options(),{}),r=Ur(n.get_options(),e,"plainnum"),t=Ur(n.get_options(),e,"code");return{optionValues:e,plainnumOptionDictKey:r,codeOptionDictKey:t,ui:r9(),yoursRecord:i9(n,e),yoursCodeRecord:Z7(n,e)}}function aA(n,e,r){return{...n,[e]:{pos:wt(n,e,"pos"),neg:wt(n,e,"neg"),[r]:!wt(n,e,r)}}}function sA(n){if(n==="yours")return"yours-plainnum";const e=n.indexOf(":");if(e===-1)return n;const r=n.slice(0,e),t=n.slice(e);return r==="plainnum"?"metho-plainnum"+t:r==="plaincode"?"metho-plaincode"+t:r==="richcode"?"metho-richcode"+t:n}function o9(n,e){return!e&&n==="yours-plaincode"?"yours-plainnum":n}function cA(n,e,r){const t=qt(Ao(n.aid,e));return t||i9(n,r)}function lA(n){const e=n.config.localStorage_prefix,r=n.get_options(),t=uA(n),i=qt(Hi(e,e9)),o=i?So(r,tA(r,i)):t.optionValues,u=Ur(r,o,"plainnum"),a=Ur(r,o,"code"),c=r9(),s=qt(Hi(e,n9));s&&typeof s.whose=="string"&&(s.whose=sA(s.whose));let l=s?{...c,...s}:{...c};l={...l,whose:o9(l.whose,n.has_cparams())},(l.whose==="yours-plainnum"||l.whose==="yours-plaincode")&&(l={...l,lastYoursWhose:l.whose});const f=en(me(l.whose).source);f==="adhoc"?l={...l,lastAdhocWhose:l.whose}:f==="metho"&&(l={...l,lastMethoWhose:l.whose});const d=cA(n,u,o),p=ZS(n,a,o);return{optionValues:o,plainnumOptionDictKey:u,codeOptionDictKey:a,ui:l,yoursRecord:d,yoursCodeRecord:p}}function Qp(n,e){const r=n.localStorage_prefix;e2(Hi(r,e9),e)}function Te(n,e){const r=n.localStorage_prefix;e2(Hi(r,n9),e)}function Zp(n,e,r,t){t.timestamp||(t.timestamp=new Date().toISOString()),t.content_hash=T7("plainnum",e,t.aopts,t.cparam_values??{}),e2(Ao(n.aid,r),t)}function fA(n,e,r){const{aopts:t,cparam_values:i}=t9(e.get_options(),r);return{...n,aopts:t,cparam_values:i,raw_input:{...n.raw_input??{}},trial_choices:{...n.trial_choices??{}},lloads_draft:n.lloads_draft===void 0?void 0:structuredClone(n.lloads_draft),trials:n.trials.map(o=>({point:{...o.point},bounds:{...o.bounds},sample:{...o.sample},lloads:o.lloads===void 0?void 0:structuredClone(o.lloads)})),timestamp:void 0}}function dA(n,e,r){const t={};for(const i of e.get_aopts()){const o=Fe(i.id);o in r&&(t[o]=r[o])}return{...n,aopts:t,reasoning_response:{...n.reasoning_response},trial_choices:{...n.trial_choices??{}},cparam_combos:[],cparam_names:[],verified_code_input:void 0,timestamp:void 0}}function jh(n,e,r,t){const i={...n.optionValues,[r]:t},o=Ur(e.get_options(),i,"plainnum"),u=Ur(e.get_options(),i,"code");let a=n.yoursRecord;o!==n.plainnumOptionDictKey&&(a=qt(Ao(e.aid,o))??fA(n.yoursRecord,e,i));let c=n.yoursCodeRecord;return u!==n.codeOptionDictKey&&(c=qt(wo(e.aid,u))??dA(n.yoursCodeRecord,e,i)),(o!==n.plainnumOptionDictKey||u!==n.codeOptionDictKey)&&Qp(e.config,i),{optionValues:i,plainnumOptionDictKey:o,codeOptionDictKey:u,ui:n.ui,yoursRecord:a,yoursCodeRecord:c}}function pA(){const n={};for(let e=0;e<localStorage.length;e++){const r=localStorage.key(e);n[r]=localStorage.getItem(r)}return n}function hA(n){localStorage.clear();for(const[e,r]of Object.entries(n))localStorage.setItem(e,String(r))}function vA(){const n=new URLSearchParams(window.location.search),e=n.get("_preload");if(!e)return;try{const t=atob(e),i=JSON.parse(t);for(const[o,u]of Object.entries(i))localStorage.setItem(o,String(u))}catch(t){alert(`Failed to load preload state: ${t}`)}n.delete("_preload");const r=n.toString()?`${window.location.pathname}?${n}`:window.location.pathname;history.replaceState(null,"",r)}function qt(n){try{const e=localStorage.getItem(n);return e===null?null:JSON.parse(e)}catch{return null}}function e2(n,e){localStorage.setItem(n,JSON.stringify(e))}const Bi=8,u9=1e-9;function Ui(n){return n===null?"null":Array.isArray(n)?"array":typeof n}function vp(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function mA(n,e,r){const t=`lloads.latents[${e}]`;if(!vp(n))return`${t}: expected an object, got ${Ui(n)}`;for(const o of["name","description"]){const u=n[o];if(typeof u!="string"||u.trim()==="")return`${t}.${o}: expected a non-empty string, got ${JSON.stringify(u)}`}const i=n.loadings;if(!vp(i))return`${t}.loadings: expected an object, got ${Ui(i)}`;if(Object.keys(i).length===0)return`${t}.loadings: empty — name the subjective variables this latent applies to, with 0 for any you considered and declined`;for(const[o,u]of Object.entries(i)){if(!r.has(o))return`${t}.loadings: '${o}' is not one of the subjective variables this jprob samples (${[...r].sort().join(", ")}), so a loading on it would have no effect`;if(typeof u!="number")return`${t}.loadings['${o}']: expected a number, got ${JSON.stringify(u)}`;if(!Number.isFinite(u))return`${t}.loadings['${o}']: ${u} is not finite`;if(u<-1||u>1)return`${t}.loadings['${o}']: ${u} not in [-1, 1]`}return null}function Lo(n,e,r=[]){if(n==null)return null;if(!vp(n))return`lloads: expected an object, got ${Ui(n)}`;const t=Object.keys(n).filter(s=>s!=="latents").sort();if(t.length>0)return`lloads: unexpected key(s) ${JSON.stringify(t)}`;const i=n.latents;if(!Array.isArray(i))return`lloads.latents: expected a list, got ${Ui(i)}`;if(i.length>Bi)return`lloads.latents: ${i.length} latents exceeds the cap of ${Bi}`;const o=new Set(e);for(const[s,l]of i.entries()){const f=mA(l,s,o);if(f!==null)return f}const u=new Map;for(const s of i)for(const[l,f]of Object.entries(s.loadings))u.set(l,(u.get(l)??0)+f**2);for(const[s,l]of[...u.entries()].sort((f,d)=>f[0]<d[0]?-1:1))if(l>1+u9)return`lloads: loading budget exceeded for '${s}' — the sum of squared loadings across latents is ${Gh(l)}, over the limit of 1 by ${Gh(l-1)}; no residual variance is left for it`;const a=new Set(r),c=[...u.entries()].filter(([s,l])=>l>0&&a.has(s)).map(([s])=>s).sort();return c.length>0?`lloads: ${c.map(s=>`'${s}'`).join(", ")} ${c.length===1?"has":"have"} a point-mass distribution in this response, so a loading on it has no effect; remove the loading or give it a non-degenerate distribution`:null}function Gh(n){return String(Number(n.toPrecision(6)))}function ko(n){return n==null?!1:n.latents.some(e=>Object.values(e.loadings).some(r=>r!==0))}function bA(n,e,r=1){if(!(r>=0&&r<=1))throw new Error(`lloads dependence strength ${r} not in [0, 1]`);const t=Lo(n,e);if(t!==null)throw new Error(t);const i=(n==null?void 0:n.latents)??[],o=Math.sqrt(r),u=new Map(e.map((s,l)=>[s,l])),a=e.map(()=>i.map(()=>0));for(const[s,l]of i.entries())for(const[f,d]of Object.entries(l.loadings))a[u.get(f)][s]=d*o;const c=a.map(s=>Math.sqrt(Math.max(0,1-s.reduce((l,f)=>l+f*f,0))));return{loadingMatrix:a,residualSds:c}}function Vh(n,e="",r=""){return{name:e,description:r,loadings:Object.fromEntries(n.map(t=>[t,0]))}}function a9(n,e){const r=new Set(e);return{latents:n.latents.map(t=>{const i=Object.entries(t.loadings).filter(([o,u])=>!r.has(o)&&u!==0);return i.length>0&&console.warn(`joint-dependence draft: dropping loadings on subjective variable(s) ${i.map(([o])=>o).join(", ")}, which this jprob no longer samples`),{...t,loadings:Object.fromEntries(e.map(o=>[o,t.loadings[o]??0]))}})}}function s9(n,e){return n==null?{latents:[]}:a9({latents:n.latents.map(r=>({name:r.name,description:r.description,loadings:{...r.loadings}}))},e)}function gA(n){return n.latents.length===0?null:{latents:n.latents.map(e=>({name:e.name.trim(),description:e.description.trim(),loadings:Object.fromEntries(Object.entries(e.loadings).filter(r=>r[1]!==null))}))}}function c9(n,e){return Object.fromEntries(e.map(r=>[r,n.latents.reduce((t,i)=>{const o=i.loadings[r]??0;return t+o*o},0)]))}function _A(n,e){return e.map(r=>e.map(t=>r===t?1:n.latents.reduce((i,o)=>i+(o.loadings[r]??0)*(o.loadings[t]??0),0)))}function yA(n){return n.latents.some(e=>Object.values(e.loadings).some(r=>r!==null&&r!==0))}function l9(n,e,r=[],t={}){const i=s=>t[s]??s,o=[];n.latents.length>Bi&&o.push({message:`${n.latents.length} latents exceeds the limit of ${Bi}.`});const u=new Set;n.latents.forEach((s,l)=>{const f=`Latent ${l+1}`;s.name.trim()===""&&o.push({message:`${f} needs a short name.`,latentIndex:l,field:"name"}),s.description.trim()===""&&o.push({message:`${f} needs a description saying what its positive direction means.`,latentIndex:l,field:"description"});for(const d of e){const p=s.loadings[d]??null;p===null?(u.add(d),o.push({message:`${f}: no loading given for ${i(d)} — enter a number from −1 to +1 (0 if the latent does not apply to it).`,latentIndex:l,svar:d})):(!Number.isFinite(p)||p<-1||p>1)&&(u.add(d),o.push({message:`${f}: the loading on ${i(d)} must be between −1 and +1.`,latentIndex:l,svar:d}))}});const a=c9(n,e),c=new Set(r);for(const s of e){const l=a[s];!u.has(s)&&l>1+u9&&o.push({message:`The squared loadings on ${i(s)} sum to ${l.toFixed(3)}, over its budget of 1 by ${(l-1).toFixed(3)} — no independent variation is left for it.`,svar:s}),l>0&&c.has(s)&&o.push({message:`${i(s)} has a single-value distribution in this response, so a loading on it has no effect — zero the loading or give it a spread distribution.`,svar:s})}return o}function f9(n,e,r=[]){const t=l9(n,e,r);if(t.length>0)return{kind:"invalid",problems:t};const i=gA(n),o=Lo(i,e,r);if(o!==null)throw new Error("joint-dependence draft passed the editor's checks but not validateLloads: "+o);return{kind:"valid",lloads:i}}const d9=4,EA=3,$A=1e-4,wA=1e4,Xh=3;function Yh(n){const[e,r]=n.split("e"),t=e.includes(".")?e.replace(/0+$/,"").replace(/\.$/,""):e;return r===void 0?t:`${t}e${r}`}function SA(n){switch(n){case"deterministic":return d9;case"monte-carlo":return EA;default:{const e=n;throw new Error(`Unknown calculation precision: ${String(e)}`)}}}function Wi(n,e){if(Number.isNaN(n))return String(n);if(!Number.isFinite(n))return n>0?"∞":"-∞";if(n===0)return"0";const r=Number(n.toPrecision(e));if(r===0)return"0";const t=Math.abs(r);if(t<$A||t>=wA)return Yh(r.toExponential(e-1));const i=Math.floor(Math.log10(t)),o=Math.max(0,e-1-i);return Yh(r.toFixed(o))}function AA(n){return Number.isFinite(n)?n>=1?"∞:1":n<=0?"1:∞":n>=.5?`${Wi(n/(1-n),Xh)}:1`:`1:${Wi((1-n)/n,Xh)}`:"—"}function ji(n,e){if(!Number.isFinite(n)||n===0)return n;const r=d9,t=Number(n.toPrecision(r));if(e==="floor"?t<=n:t>=n)return t;const i=Math.floor(Math.log10(Math.abs(t))),o=Math.pow(10,i-r+1),u=e==="floor"?t-o:t+o;return Number(u.toPrecision(r))}function Ue(n,e,r,t="deterministic"){const i=SA(t);switch(e){case"probability":return r==="odds"?AA(n):Wi(n*100,i)+"%";default:return Wi(n,i)}}function Hn(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}/**
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
*/var bu,Kh;function LA(){if(Kh)return bu;Kh=1;var n=typeof Object.defineProperty=="function"?Object.defineProperty:null;return bu=n,bu}/**
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
*/var gu,Jh;function kA(){if(Jh)return gu;Jh=1;var n=LA();function e(){try{return n({},"x",{}),!0}catch{return!1}}return gu=e,gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _u,zh;function IA(){if(zh)return _u;zh=1;var n=Object.defineProperty;return _u=n,_u}/**
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
*/var yu,Qh;function p9(){if(Qh)return yu;Qh=1;function n(e){return typeof e=="number"}return yu=n,yu}/**
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
*/var Eu,Zh;function h9(){if(Zh)return Eu;Zh=1;function n(t){return t[0]==="-"}function e(t){var i="",o;for(o=0;o<t;o++)i+="0";return i}function r(t,i,o){var u=!1,a=i-t.length;return a<0||(n(t)&&(u=!0,t=t.substr(1)),t=o?t+e(a):e(a)+t,u&&(t="-"+t)),t}return Eu=r,Eu}/**
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
*/var $u,ev;function CA(){if(ev)return $u;ev=1;var n=p9(),e=h9(),r=String.prototype.toLowerCase,t=String.prototype.toUpperCase;function i(o){var u,a,c;switch(o.specifier){case"b":u=2;break;case"o":u=8;break;case"x":case"X":u=16;break;case"d":case"i":case"u":default:u=10;break}if(a=o.arg,c=parseInt(a,10),!isFinite(c)){if(!n(a))throw new Error("invalid integer. Value: "+a);c=0}return c<0&&(o.specifier==="u"||u!==10)&&(c=4294967295+c+1),c<0?(a=(-c).toString(u),o.precision&&(a=e(a,o.precision,o.padRight)),a="-"+a):(a=c.toString(u),!c&&!o.precision?a="":o.precision&&(a=e(a,o.precision,o.padRight)),o.sign&&(a=o.sign+a)),u===16&&(o.alternate&&(a="0x"+a),a=o.specifier===t.call(o.specifier)?t.call(a):r.call(a)),u===8&&o.alternate&&a.charAt(0)!=="0"&&(a="0"+a),a}return $u=i,$u}/**
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
*/var wu,nv;function RA(){if(nv)return wu;nv=1;function n(e){return typeof e=="string"}return wu=n,wu}/**
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
*/var Su,rv;function MA(){if(rv)return Su;rv=1;var n=Math.abs,e=String.prototype.toLowerCase,r=String.prototype.toUpperCase,t=String.prototype.replace,i=/e\+(\d)$/,o=/e-(\d)$/,u=/^(\d+)$/,a=/^(\d+)e/,c=/\.0$/,s=/\.0*e/,l=/(\..*[^0])0*e/;function f(d,p){var h,m;switch(p.specifier){case"e":case"E":m=d.toExponential(p.precision);break;case"f":case"F":m=d.toFixed(p.precision);break;case"g":case"G":n(d)<1e-4?(h=p.precision,h>0&&(h-=1),m=d.toExponential(h)):m=d.toPrecision(p.precision),p.alternate||(m=t.call(m,l,"$1e"),m=t.call(m,s,"e"),m=t.call(m,c,""));break;default:throw new Error("invalid double notation. Value: "+p.specifier)}return m=t.call(m,i,"e+0$1"),m=t.call(m,o,"e-0$1"),p.alternate&&(m=t.call(m,u,"$1."),m=t.call(m,a,"$1.e")),d>=0&&p.sign&&(m=p.sign+m),m=p.specifier===r.call(p.specifier)?r.call(m):e.call(m),m}return Su=f,Su}/**
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
*/var Au,tv;function NA(){if(tv)return Au;tv=1;function n(r){var t="",i;for(i=0;i<r;i++)t+=" ";return t}function e(r,t,i){var o=t-r.length;return o<0||(r=i?r+n(o):n(o)+r),r}return Au=e,Au}/**
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
*/var Lu,iv;function TA(){if(iv)return Lu;iv=1;var n=CA(),e=RA(),r=p9(),t=MA(),i=NA(),o=h9(),u=String.fromCharCode,a=Array.isArray;function c(f){return f!==f}function s(f){var d={};return d.specifier=f.specifier,d.precision=f.precision===void 0?1:f.precision,d.width=f.width,d.flags=f.flags||"",d.mapping=f.mapping,d}function l(f){var d,p,h,m,v,b,g,_,y,E;if(!a(f))throw new TypeError("invalid argument. First argument must be an array. Value: `"+f+"`.");for(b="",g=1,y=0;y<f.length;y++)if(h=f[y],e(h))b+=h;else{if(d=h.precision!==void 0,h=s(h),!h.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+y+"`. Value: `"+h+"`.");for(h.mapping&&(g=h.mapping),p=h.flags,E=0;E<p.length;E++)switch(m=p.charAt(E),m){case" ":h.sign=" ";break;case"+":h.sign="+";break;case"-":h.padRight=!0,h.padZeros=!1;break;case"0":h.padZeros=p.indexOf("-")<0;break;case"#":h.alternate=!0;break;default:throw new Error("invalid flag: "+m)}if(h.width==="*"){if(h.width=parseInt(arguments[g],10),g+=1,c(h.width))throw new TypeError("the argument for * width at position "+g+" is not a number. Value: `"+h.width+"`.");h.width<0&&(h.padRight=!0,h.width=-h.width)}if(d&&h.precision==="*"){if(h.precision=parseInt(arguments[g],10),g+=1,c(h.precision))throw new TypeError("the argument for * precision at position "+g+" is not a number. Value: `"+h.precision+"`.");h.precision<0&&(h.precision=1,d=!1)}switch(h.arg=arguments[g],h.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":d&&(h.padZeros=!1),h.arg=n(h);break;case"s":h.maxWidth=d?h.precision:-1,h.arg=String(h.arg);break;case"c":if(!c(h.arg)){if(v=parseInt(h.arg,10),v<0||v>127)throw new Error("invalid character code. Value: "+h.arg);h.arg=c(v)?String(h.arg):u(v)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(d||(h.precision=6),_=parseFloat(h.arg),!isFinite(_)){if(!r(h.arg))throw new Error("invalid floating-point number. Value: "+b);_=h.arg,h.padZeros=!1}h.arg=t(_,h);break;default:throw new Error("invalid specifier: "+h.specifier)}h.maxWidth>=0&&h.arg.length>h.maxWidth&&(h.arg=h.arg.substring(0,h.maxWidth)),h.padZeros?h.arg=o(h.arg,h.width||h.precision,h.padRight):h.width&&(h.arg=i(h.arg,h.width,h.padRight)),b+=h.arg||"",g+=1}return b}return Lu=l,Lu}/**
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
*/var ku,ov;function qA(){if(ov)return ku;ov=1;var n=TA();return ku=n,ku}/**
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
*/var Iu,uv;function FA(){if(uv)return Iu;uv=1;var n=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function e(t){var i={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return t[4]==="."&&t[5]===void 0&&(i.precision="1"),i}function r(t){var i,o,u,a;for(o=[],a=0,u=n.exec(t);u;)i=t.slice(a,n.lastIndex-u[0].length),i.length&&o.push(i),u[6]==="%"?o.push("%"):o.push(e(u)),a=n.lastIndex,u=n.exec(t);return i=t.slice(a),i.length&&o.push(i),o}return Iu=r,Iu}/**
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
*/var Cu,av;function OA(){if(av)return Cu;av=1;var n=FA();return Cu=n,Cu}/**
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
*/var Ru,sv;function DA(){if(sv)return Ru;sv=1;function n(e){return typeof e=="string"}return Ru=n,Ru}/**
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
*/var Mu,cv;function PA(){if(cv)return Mu;cv=1;var n=qA(),e=OA(),r=DA();function t(i){var o,u;if(!r(i))throw new TypeError(t("invalid argument. First argument must be a string. Value: `%s`.",i));for(o=[e(i)],u=1;u<arguments.length;u++)o.push(arguments[u]);return n.apply(null,o)}return Mu=t,Mu}/**
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
*/var Nu,lv;function xA(){if(lv)return Nu;lv=1;var n=PA();return Nu=n,Nu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tu,fv;function HA(){if(fv)return Tu;fv=1;var n=xA(),e=Object.prototype,r=e.toString,t=e.__defineGetter__,i=e.__defineSetter__,o=e.__lookupGetter__,u=e.__lookupSetter__;function a(c,s,l){var f,d,p,h;if(typeof c!="object"||c===null||r.call(c)==="[object Array]")throw new TypeError(n("invalid argument. First argument must be an object. Value: `%s`.",c));if(typeof l!="object"||l===null||r.call(l)==="[object Array]")throw new TypeError(n("invalid argument. Property descriptor must be an object. Value: `%s`.",l));if(d="value"in l,d&&(o.call(c,s)||u.call(c,s)?(f=c.__proto__,c.__proto__=e,delete c[s],c[s]=l.value,c.__proto__=f):c[s]=l.value),p="get"in l,h="set"in l,d&&(p||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&t&&t.call(c,s,l.get),h&&i&&i.call(c,s,l.set),c}return Tu=a,Tu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qu,dv;function BA(){if(dv)return qu;dv=1;var n=kA(),e=IA(),r=HA(),t;return n()?t=e:t=r,qu=t,qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fu,pv;function UA(){if(pv)return Fu;pv=1;var n=BA();function e(r,t,i){n(r,t,{configurable:!1,enumerable:!1,writable:!1,value:i})}return Fu=e,Fu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ou,hv;function nn(){if(hv)return Ou;hv=1;var n=UA();return Ou=n,Ou}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Du,vv;function WA(){if(vv)return Du;vv=1;function n(e){return e!==e}return Du=n,Du}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pu,mv;function ue(){if(mv)return Pu;mv=1;var n=WA();return Pu=n,Pu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xu,bv;function jA(){if(bv)return xu;bv=1;function n(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return xu=n,xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hu,gv;function GA(){if(gv)return Hu;gv=1;var n=jA();return Hu=n,Hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bu,_v;function VA(){if(_v)return Bu;_v=1;var n=GA(),e=n();function r(){return e&&typeof Symbol.toStringTag=="symbol"}return Bu=r,Bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uu,yv;function XA(){if(yv)return Uu;yv=1;var n=VA();return Uu=n,Uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wu,Ev;function v9(){if(Ev)return Wu;Ev=1;var n=Object.prototype.toString;return Wu=n,Wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ju,$v;function YA(){if($v)return ju;$v=1;var n=v9();function e(r){return n.call(r)}return ju=e,ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gu,wv;function KA(){if(wv)return Gu;wv=1;var n=Object.prototype.hasOwnProperty;function e(r,t){return r==null?!1:n.call(r,t)}return Gu=e,Gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vu,Sv;function JA(){if(Sv)return Vu;Sv=1;var n=KA();return Vu=n,Vu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xu,Av;function zA(){if(Av)return Xu;Av=1;var n=typeof Symbol=="function"?Symbol:void 0;return Xu=n,Xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yu,Lv;function QA(){if(Lv)return Yu;Lv=1;var n=zA();return Yu=n,Yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ku,kv;function ZA(){if(kv)return Ku;kv=1;var n=QA(),e=typeof n=="function"?n.toStringTag:"";return Ku=e,Ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ju,Iv;function eL(){if(Iv)return Ju;Iv=1;var n=JA(),e=ZA(),r=v9();function t(i){var o,u,a;if(i==null)return r.call(i);u=i[e],o=n(i,e);try{i[e]=void 0}catch{return r.call(i)}return a=r.call(i),o?i[e]=u:delete i[e],a}return Ju=t,Ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zu,Cv;function Io(){if(Cv)return zu;Cv=1;var n=XA(),e=YA(),r=eL(),t;return n()?t=r:t=e,zu=t,zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qu,Rv;function nL(){if(Rv)return Qu;Rv=1;var n=Io(),e=typeof Uint32Array=="function";function r(t){return e&&t instanceof Uint32Array||n(t)==="[object Uint32Array]"}return Qu=r,Qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zu,Mv;function rL(){if(Mv)return Zu;Mv=1;var n=nL();return Zu=n,Zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ea,Nv;function tL(){if(Nv)return ea;Nv=1;var n=4294967295;return ea=n,ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var na,Tv;function iL(){if(Tv)return na;Tv=1;var n=typeof Uint32Array=="function"?Uint32Array:null;return na=n,na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ra,qv;function oL(){if(qv)return ra;qv=1;var n=rL(),e=tL(),r=iL();function t(){var i,o;if(typeof r!="function")return!1;try{o=[1,3.14,-3.14,e+1,e+2],o=new r(o),i=n(o)&&o[0]===1&&o[1]===3&&o[2]===e-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return ra=t,ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ta,Fv;function uL(){if(Fv)return ta;Fv=1;var n=oL();return ta=n,ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ia,Ov;function aL(){if(Ov)return ia;Ov=1;var n=typeof Uint32Array=="function"?Uint32Array:void 0;return ia=n,ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oa,Dv;function sL(){if(Dv)return oa;Dv=1;function n(){throw new Error("not implemented")}return oa=n,oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ua,Pv;function Jr(){if(Pv)return ua;Pv=1;var n=uL(),e=aL(),r=sL(),t;return n()?t=e:t=r,ua=t,ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aa,xv;function cL(){if(xv)return aa;xv=1;var n=Io(),e=typeof Float64Array=="function";function r(t){return e&&t instanceof Float64Array||n(t)==="[object Float64Array]"}return aa=r,aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sa,Hv;function lL(){if(Hv)return sa;Hv=1;var n=cL();return sa=n,sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ca,Bv;function fL(){if(Bv)return ca;Bv=1;var n=typeof Float64Array=="function"?Float64Array:null;return ca=n,ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var la,Uv;function dL(){if(Uv)return la;Uv=1;var n=lL(),e=fL();function r(){var t,i;if(typeof e!="function")return!1;try{i=new e([1,3.14,-3.14,NaN]),t=n(i)&&i[0]===1&&i[1]===3.14&&i[2]===-3.14&&i[3]!==i[3]}catch{t=!1}return t}return la=r,la}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fa,Wv;function pL(){if(Wv)return fa;Wv=1;var n=dL();return fa=n,fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var da,jv;function hL(){if(jv)return da;jv=1;var n=typeof Float64Array=="function"?Float64Array:void 0;return da=n,da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pa,Gv;function vL(){if(Gv)return pa;Gv=1;function n(){throw new Error("not implemented")}return pa=n,pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ha,Vv;function zr(){if(Vv)return ha;Vv=1;var n=pL(),e=hL(),r=vL(),t;return n()?t=e:t=r,ha=t,ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var va,Xv;function mL(){if(Xv)return va;Xv=1;var n=Io(),e=typeof Uint8Array=="function";function r(t){return e&&t instanceof Uint8Array||n(t)==="[object Uint8Array]"}return va=r,va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ma,Yv;function bL(){if(Yv)return ma;Yv=1;var n=mL();return ma=n,ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ba,Kv;function gL(){if(Kv)return ba;Kv=1;var n=255;return ba=n,ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ga,Jv;function _L(){if(Jv)return ga;Jv=1;var n=typeof Uint8Array=="function"?Uint8Array:null;return ga=n,ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _a,zv;function yL(){if(zv)return _a;zv=1;var n=bL(),e=gL(),r=_L();function t(){var i,o;if(typeof r!="function")return!1;try{o=[1,3.14,-3.14,e+1,e+2],o=new r(o),i=n(o)&&o[0]===1&&o[1]===3&&o[2]===e-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return _a=t,_a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ya,Qv;function EL(){if(Qv)return ya;Qv=1;var n=yL();return ya=n,ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ea,Zv;function $L(){if(Zv)return Ea;Zv=1;var n=typeof Uint8Array=="function"?Uint8Array:void 0;return Ea=n,Ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $a,em;function wL(){if(em)return $a;em=1;function n(){throw new Error("not implemented")}return $a=n,$a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wa,nm;function SL(){if(nm)return wa;nm=1;var n=EL(),e=$L(),r=wL(),t;return n()?t=e:t=r,wa=t,wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sa,rm;function AL(){if(rm)return Sa;rm=1;var n=Io(),e=typeof Uint16Array=="function";function r(t){return e&&t instanceof Uint16Array||n(t)==="[object Uint16Array]"}return Sa=r,Sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Aa,tm;function LL(){if(tm)return Aa;tm=1;var n=AL();return Aa=n,Aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var La,im;function kL(){if(im)return La;im=1;var n=65535;return La=n,La}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ka,om;function IL(){if(om)return ka;om=1;var n=typeof Uint16Array=="function"?Uint16Array:null;return ka=n,ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ia,um;function CL(){if(um)return Ia;um=1;var n=LL(),e=kL(),r=IL();function t(){var i,o;if(typeof r!="function")return!1;try{o=[1,3.14,-3.14,e+1,e+2],o=new r(o),i=n(o)&&o[0]===1&&o[1]===3&&o[2]===e-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return Ia=t,Ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ca,am;function RL(){if(am)return Ca;am=1;var n=CL();return Ca=n,Ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ra,sm;function ML(){if(sm)return Ra;sm=1;var n=typeof Uint16Array=="function"?Uint16Array:void 0;return Ra=n,Ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ma,cm;function NL(){if(cm)return Ma;cm=1;function n(){throw new Error("not implemented")}return Ma=n,Ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Na,lm;function TL(){if(lm)return Na;lm=1;var n=RL(),e=ML(),r=NL(),t;return n()?t=e:t=r,Na=t,Na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ta,fm;function qL(){if(fm)return Ta;fm=1;var n=SL(),e=TL(),r={uint16:e,uint8:n};return Ta=r,Ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qa,dm;function FL(){if(dm)return qa;dm=1;var n=qL(),e;function r(){var t,i;return t=new n.uint16(1),t[0]=4660,i=new n.uint8(t.buffer),i[0]===52}return e=r(),qa=e,qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fa,pm;function Qr(){if(pm)return Fa;pm=1;var n=FL();return Fa=n,Fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oa,hm;function OL(){if(hm)return Oa;hm=1;var n=Qr(),e;return n===!0?e=1:e=0,Oa=e,Oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Da,vm;function DL(){if(vm)return Da;vm=1;var n=Jr(),e=zr(),r=OL(),t=new e(1),i=new n(t.buffer);function o(u){return t[0]=u,i[r]}return Da=o,Da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pa,mm;function gn(){if(mm)return Pa;mm=1;var n=DL();return Pa=n,Pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xa,bm;function PL(){if(bm)return xa;bm=1;var n=Qr(),e;return n===!0?e=1:e=0,xa=e,xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ha,gm;function xL(){if(gm)return Ha;gm=1;var n=Jr(),e=zr(),r=PL(),t=new e(1),i=new n(t.buffer);function o(u,a){return t[0]=u,i[r]=a>>>0,t[0]}return Ha=o,Ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ba,_m;function Yt(){if(_m)return Ba;_m=1;var n=xL();return Ba=n,Ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ua,ym;function HL(){if(ym)return Ua;ym=1;var n=Qr(),e,r,t;return n===!0?(r=1,t=0):(r=0,t=1),e={HIGH:r,LOW:t},Ua=e,Ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wa,Em;function BL(){if(Em)return Wa;Em=1;var n=Jr(),e=zr(),r=HL(),t=new e(1),i=new n(t.buffer),o=r.HIGH,u=r.LOW;function a(c,s){return i[o]=c,i[u]=s,t[0]}return Wa=a,Wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ja,$m;function Co(){if($m)return ja;$m=1;var n=BL();return ja=n,ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ga,wm;function Re(){if(wm)return Ga;wm=1;var n=Number.POSITIVE_INFINITY;return Ga=n,Ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Va,Sm;function UL(){return Sm||(Sm=1,Va=Number),Va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xa,Am;function WL(){if(Am)return Xa;Am=1;var n=UL();return Xa=n,Xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ya,Lm;function rn(){if(Lm)return Ya;Lm=1;var n=WL(),e=n.NEGATIVE_INFINITY;return Ya=e,Ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ka,km;function Lr(){if(km)return Ka;km=1;var n=1023;return Ka=n,Ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ja,Im;function jL(){if(Im)return Ja;Im=1;var n=.34657359027997264;return Ja=n,Ja}/**
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
*/var za,Cm;function GL(){if(Cm)return za;Cm=1;function n(e){return e===0?-.03333333333333313:-.03333333333333313+e*(.0015873015872548146+e*(-793650757867488e-19+e*(4008217827329362e-21+e*-20109921818362437e-23)))}return za=n,za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Qa,Rm;function VL(){if(Rm)return Qa;Rm=1;var n=ue(),e=gn(),r=Yt(),t=Co(),i=Re(),o=rn(),u=Lr(),a=jL(),c=GL(),s=709.782712893384,l=.6931471803691238,f=19082149292705877e-26,d=1.4426950408889634,p=38.816242111356935,h=1.0397207708399179;function m(v){var b,g,_,y,E,I,L,R,A,S,$,w,k;if(v===i||n(v))return v;if(v===o)return-1;if(v===0)return v;if(v<0?(_=!0,R=-v):(_=!1,R=v),R>=p){if(_)return-1;if(R>=s)return i}if(I=e(R)|0,R>a)R<h?_?(y=v+l,E=-f,k=-1):(y=v-l,E=f,k=1):(_?k=d*v-.5:k=d*v+.5,k|=0,$=k,y=v-$*l,E=$*f),v=y-E,S=y-v-E;else{if(I<1016070144)return v;k=0}return b=.5*v,A=v*b,L=1+A*c(A),$=3-L*b,w=A*((L-$)/(6-v*$)),k===0?v-(v*w-A):(g=t(u+k<<20,0),w=v*(w-S)-S,w-=A,k===-1?.5*(v-w)-.5:k===1?v<-.25?-2*(w-(v+.5)):1+2*(v-w):k<=-2||k>56?(R=1-(w-v),k===1024?(y=e(R)+(k<<20)|0,R=r(R,y)):R*=g,R-1):($=1,k<20?(y=1072693248-(2097152>>k)|0,$=r($,y),R=$-(w-v)):(y=u-k<<20|0,$=r($,y),R=v-(w+$),R+=1),R*=g,R))}return Qa=m,Qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Za,Mm;function Zr(){if(Mm)return Za;Mm=1;var n=VL();return Za=n,Za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var es,Nm;function XL(){if(Nm)return es;Nm=1;var n=Math.floor;return es=n,es}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ns,Tm;function Bn(){if(Tm)return ns;Tm=1;var n=XL();return ns=n,ns}/**
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
*/var rs,qm;function YL(){if(qm)return rs;qm=1;function n(e){return e===0?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+e*.14798198605116586)))))}return rs=n,rs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ts,Fm;function KL(){if(Fm)return ts;Fm=1;var n=ue(),e=gn(),r=Yt(),t=Re(),i=rn(),o=Lr(),u=YL(),a=.6931471803691238,c=19082149292705877e-26,s=.41421356237309503,l=-.2928932188134525,f=1862645149230957e-24,d=5551115123125783e-32,p=9007199254740992,h=.6666666666666666;function m(v){var b,g,_,y,E,I,L,R,A,S;if(v<-1||n(v))return NaN;if(v===-1)return i;if(v===t||v===0)return v;if(v<0?_=-v:_=v,S=1,_<s){if(_<f)return _<d?v:v-v*v*.5;v>l&&(S=0,y=v,g=1)}return S!==0&&(_<p?(A=1+v,g=e(A),S=(g>>20)-o,S>0?E=1-(A-v):E=v-(A-1),E/=A):(A=v,g=e(A),S=(g>>20)-o,E=0),g&=1048575,g<434334?A=r(A,g|1072693248):(S+=1,A=r(A,g|1071644672),g=1048576-g>>2),y=A-1),b=.5*y*y,g===0?y===0?(E+=S*c,S*a+E):(R=b*(1-h*y),S*a-(R-(S*c+E)-y)):(I=y/(2+y),L=I*I,R=L*u(L),S===0?y-(b-I*(b+R)):S*a-(b-(I*(b+R)+(S*c+E))-y))}return ts=m,ts}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var is,Om;function _n(){if(Om)return is;Om=1;var n=KL();return is=n,is}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var os,Dm;function JL(){if(Dm)return os;Dm=1;var n=Math.sqrt;return os=n,os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var us,Pm;function _e(){if(Pm)return us;Pm=1;var n=JL();return us=n,us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var as,xm;function m9(){if(xm)return as;xm=1;var n=.7853981633974483;return as=n,as}/**
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
*/var ss,Hm;function zL(){if(Hm)return ss;Hm=1;function n(e){var r,t,i;return e===0?.16666666666666713:(e<0?r=-e:r=e,r<=1?(t=-8.198089802484825+e*(19.562619833175948+e*(-16.262479672107002+e*(5.444622390564711+e*(-.6019598008014124+e*.004253011369004428)))),i=-49.18853881490881+e*(139.51056146574857+e*(-147.1791292232726+e*(70.49610280856842+e*(-14.740913729888538+e*1))))):(e=1/e,t=.004253011369004428+e*(-.6019598008014124+e*(5.444622390564711+e*(-16.262479672107002+e*(19.562619833175948+e*-8.198089802484825)))),i=1+e*(-14.740913729888538+e*(70.49610280856842+e*(-147.1791292232726+e*(139.51056146574857+e*-49.18853881490881))))),t/i)}return ss=n,ss}/**
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
*/var cs,Bm;function QL(){if(Bm)return cs;Bm=1;function n(e){var r,t,i;return e===0?.08333333333333809:(e<0?r=-e:r=e,r<=1?(t=28.536655482610616+e*(-25.56901049652825+e*(6.968710824104713+e*(-.5634242780008963+e*.002967721961301243))),i=342.43986579130785+e*(-383.8770957603691+e*(147.0656354026815+e*(-21.947795316429207+e*1)))):(e=1/e,t=.002967721961301243+e*(-.5634242780008963+e*(6.968710824104713+e*(-25.56901049652825+e*28.536655482610616))),i=1+e*(-21.947795316429207+e*(147.0656354026815+e*(-383.8770957603691+e*342.43986579130785)))),t/i)}return cs=n,cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ls,Um;function ZL(){if(Um)return ls;Um=1;var n=ue(),e=_e(),r=m9(),t=zL(),i=QL(),o=6123233995736766e-32;function u(a){var c,s,l,f,d;if(n(a))return NaN;if(a>0?l=a:(c=!0,l=-a),l>1)return NaN;if(l>.625)s=1-l,f=s*i(s),s=e(s+s),d=r-s,s=s*f-o,d-=s,d+=r;else{if(l<1e-8)return a;s=l*l,d=s*t(s),d=l*d+l}return c?-d:d}return ls=u,ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fs,Wm;function n2(){if(Wm)return fs;Wm=1;var n=ZL();return fs=n,fs}/**
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
*/var ds,jm;function ek(){if(jm)return ds;jm=1;function n(e){return Math.abs(e)}return ds=n,ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ps,Gm;function ye(){if(Gm)return ps;Gm=1;var n=ek();return ps=n,ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hs,Vm;function nk(){if(Vm)return hs;Vm=1;var n=Math.ceil;return hs=n,hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vs,Xm;function rk(){if(Xm)return vs;Xm=1;var n=nk();return vs=n,vs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ms,Ym;function tk(){if(Ym)return ms;Ym=1;var n=Bn(),e=rk();function r(t){return t<0?e(t):n(t)}return ms=r,ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bs,Km;function r2(){if(Km)return bs;Km=1;var n=tk();return bs=n,bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gs,Jm;function ik(){if(Jm)return gs;Jm=1;var n=1023;return gs=n,gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _s,zm;function ok(){if(zm)return _s;zm=1;var n=-1023;return _s=n,_s}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ys,Qm;function uk(){if(Qm)return ys;Qm=1;var n=-1074;return ys=n,ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Es,Zm;function ak(){if(Zm)return Es;Zm=1;var n=Re(),e=rn();function r(t){return t===n||t===e}return Es=r,Es}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $s,e3;function et(){if(e3)return $s;e3=1;var n=ak();return $s=n,$s}/**
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
*/var ws,n3;function sk(){if(n3)return ws;n3=1;var n=2147483648;return ws=n,ws}/**
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
*/var Ss,r3;function kr(){if(r3)return Ss;r3=1;var n=2147483647;return Ss=n,Ss}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var As,t3;function ck(){if(t3)return As;t3=1;var n=Qr(),e,r,t;return n===!0?(r=1,t=0):(r=0,t=1),e={HIGH:r,LOW:t},As=e,As}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ls,i3;function b9(){if(i3)return Ls;i3=1;var n=Jr(),e=zr(),r=ck(),t=new e(1),i=new n(t.buffer),o=r.HIGH,u=r.LOW;function a(c,s,l,f){return t[0]=c,s[f]=i[o],s[f+l]=i[u],s}return Ls=a,Ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ks,o3;function lk(){if(o3)return ks;o3=1;var n=b9();function e(r){return n(r,[0,0],1,0)}return ks=e,ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Is,u3;function t2(){if(u3)return Is;u3=1;var n=nn(),e=lk(),r=b9();return n(e,"assign",r),Is=e,Is}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cs,a3;function fk(){if(a3)return Cs;a3=1;var n=sk(),e=kr(),r=t2(),t=gn(),i=Co(),o=[0,0];function u(a,c){var s,l;return r.assign(a,o,1,0),s=o[0],s&=e,l=t(c),l&=n,s|=l,i(s,o[1])}return Cs=u,Cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rs,s3;function i2(){if(s3)return Rs;s3=1;var n=fk();return Rs=n,Rs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ms,c3;function Ir(){if(c3)return Ms;c3=1;var n=22250738585072014e-324;return Ms=n,Ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ns,l3;function g9(){if(l3)return Ns;l3=1;var n=Ir(),e=et(),r=ue(),t=ye(),i=4503599627370496;function o(u,a,c,s){return r(u)||e(u)?(a[s]=u,a[s+c]=0,a):u!==0&&t(u)<n?(a[s]=u*i,a[s+c]=-52,a):(a[s]=u,a[s+c]=0,a)}return Ns=o,Ns}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ts,f3;function dk(){if(f3)return Ts;f3=1;var n=g9();function e(r){return n(r,[0,0],1,0)}return Ts=e,Ts}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qs,d3;function pk(){if(d3)return qs;d3=1;var n=nn(),e=dk(),r=g9();return n(e,"assign",r),qs=e,qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fs,p3;function Ro(){if(p3)return Fs;p3=1;var n=2146435072;return Fs=n,Fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Os,h3;function hk(){if(h3)return Os;h3=1;var n=gn(),e=Ro(),r=Lr();function t(i){var o=n(i);return o=(o&e)>>>20,o-r|0}return Os=t,Os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ds,v3;function vk(){if(v3)return Ds;v3=1;var n=hk();return Ds=n,Ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ps,m3;function mk(){if(m3)return Ps;m3=1;var n=Re(),e=rn(),r=Lr(),t=ik(),i=ok(),o=uk(),u=ue(),a=et(),c=i2(),s=pk().assign,l=vk(),f=t2(),d=Co(),p=2220446049250313e-31,h=2148532223,m=[0,0],v=[0,0];function b(g,_){var y,E;return _===0||g===0||u(g)||a(g)?g:(s(g,m,1,0),g=m[0],_+=m[1],_+=l(g),_<o?c(0,g):_>t?g<0?e:n:(_<=i?(_+=52,E=p):E=1,f.assign(g,v,1,0),y=v[0],y&=h,y|=_+r<<20,E*d(y,v[1])))}return Ps=b,Ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xs,b3;function nt(){if(b3)return xs;b3=1;var n=mk();return xs=n,xs}/**
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
*/var Hs,g3;function bk(){if(g3)return Hs;g3=1;function n(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}return Hs=n,Hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Bs,_3;function gk(){if(_3)return Bs;_3=1;var n=nt(),e=bk();function r(t,i,o){var u,a,c,s;return u=t-i,a=u*u,c=u-a*e(a),s=1-(i-u*c/(2-c)-t),n(s,o)}return Bs=r,Bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Us,y3;function _k(){if(y3)return Us;y3=1;var n=ue(),e=r2(),r=rn(),t=Re(),i=gk(),o=.6931471803691238,u=19082149292705877e-26,a=1.4426950408889634,c=709.782712893384,s=-745.1332191019411,l=1/(1<<28),f=-l;function d(p){var h,m,v;return n(p)||p===t?p:p===r?0:p>c?t:p<s?0:p>f&&p<l?1+p:(p<0?v=e(a*p-.5):v=e(a*p+.5),h=p-v*o,m=v*u,i(h,m,v))}return Us=d,Us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ws,E3;function Me(){if(E3)return Ws;E3=1;var n=_k();return Ws=n,Ws}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var js,$3;function yk(){if($3)return js;$3=1;var n=Bn();function e(r){return n(r)===r}return js=e,js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gs,w3;function rt(){if(w3)return Gs;w3=1;var n=yk();return Gs=n,Gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vs,S3;function Ek(){if(S3)return Vs;S3=1;var n=rt();function e(r){return n(r/2)}return Vs=e,Vs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xs,A3;function $k(){if(A3)return Xs;A3=1;var n=Ek();return Xs=n,Xs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ys,L3;function wk(){if(L3)return Ys;L3=1;var n=$k();function e(r){return r>0?n(r-1):n(r+1)}return Ys=e,Ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ks,k3;function o2(){if(k3)return Ks;k3=1;var n=wk();return Ks=n,Ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Js,I3;function Sk(){if(I3)return Js;I3=1;var n=Qr(),e;return n===!0?e=0:e=1,Js=e,Js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zs,C3;function Ak(){if(C3)return zs;C3=1;var n=Jr(),e=zr(),r=Sk(),t=new e(1),i=new n(t.buffer);function o(u,a){return t[0]=u,i[r]=a>>>0,t[0]}return zs=o,zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qs,R3;function Kt(){if(R3)return Qs;R3=1;var n=Ak();return Qs=n,Qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zs,M3;function Lk(){if(M3)return Zs;M3=1;function n(e){return e|0}return Zs=n,Zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ec,N3;function _9(){if(N3)return ec;N3=1;var n=Lk();return ec=n,ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var nc,T3;function kk(){if(T3)return nc;T3=1;var n=o2(),e=i2(),r=rn(),t=Re();function i(o,u){return u===r?t:u===t?0:u>0?n(u)?o:0:n(u)?e(t,o):t}return nc=i,nc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var rc,q3;function Ik(){if(q3)return rc;q3=1;var n=kr(),e=gn(),r=1072693247,t=1e300,i=1e-300;function o(u,a){var c,s;return s=e(u),c=s&n,c<=r?a<0?t*t:i*i:a>0?t*t:i*i}return rc=o,rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tc,F3;function Ck(){if(F3)return tc;F3=1;var n=ye(),e=Re();function r(t,i){return t===-1?(t-t)/(t-t):t===1?1:n(t)<1==(i===e)?0:e}return tc=r,tc}/**
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
*/var ic,O3;function y9(){if(O3)return ic;O3=1;var n=20;return ic=n,ic}/**
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
*/var oc,D3;function Rk(){if(D3)return oc;D3=1;function n(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}return oc=n,oc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var uc,P3;function Mk(){if(P3)return uc;P3=1;var n=gn(),e=Kt(),r=Yt(),t=Lr(),i=y9(),o=Rk(),u=1048575,a=1048576,c=1072693248,s=536870912,l=524288,f=9007199254740992,d=.9617966939259756,p=.9617967009544373,h=-7028461650952758e-24,m=[1,1.5],v=[0,.5849624872207642],b=[0,1350039202129749e-23];function g(_,y,E){var I,L,R,A,S,$,w,k,C,F,T,B,O,x,q,Q,W,Y,ne,ie,H,j;return ie=0,E<a&&(y*=f,ie-=53,E=n(y)),ie+=(E>>i)-t|0,H=E&u|0,E=H|c|0,H<=235662?j=0:H<767610?j=1:(j=0,ie+=1,E-=a),y=r(y,E),k=m[j],Y=y-k,ne=1/(y+k),L=Y*ne,A=e(L,0),I=(E>>1|s)+l,I+=j<<18,$=r(0,I),w=y-($-k),S=ne*(Y-A*$-A*w),R=L*L,W=R*R*o(R),W+=S*(A+L),R=A*A,$=3+R+W,$=e($,0),w=W-($-3-R),Y=A*$,ne=S*$+w*L,F=Y+ne,F=e(F,0),T=ne-(F-Y),B=p*F,O=h*F+T*d+b[j],C=v[j],Q=ie,x=B+O+C+Q,x=e(x,0),q=O-(x-Q-C-B),_[0]=x,_[1]=q,_}return uc=g,uc}/**
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
*/var ac,x3;function Nk(){if(x3)return ac;x3=1;function n(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}return ac=n,ac}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var sc,H3;function Tk(){if(H3)return sc;H3=1;var n=Kt(),e=Nk(),r=1.4426950408889634,t=1.4426950216293335,i=19259629911266175e-24;function o(u,a){var c,s,l,f,d,p;return l=a-1,f=l*l*e(l),d=t*l,p=l*i-f*r,s=d+p,s=n(s,0),c=p-(s-d),u[0]=s,u[1]=c,u}return sc=o,sc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cc,B3;function qk(){if(B3)return cc;B3=1;var n=.6931471805599453;return cc=n,cc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lc,U3;function E9(){if(U3)return lc;U3=1;var n=1048575;return lc=n,lc}/**
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
*/var fc,W3;function Fk(){if(W3)return fc;W3=1;function n(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}return fc=n,fc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var dc,j3;function Ok(){if(j3)return dc;j3=1;var n=gn(),e=Yt(),r=Kt(),t=_9(),i=nt(),o=qk(),u=Lr(),a=kr(),c=E9(),s=y9(),l=Fk(),f=1048576,d=1071644672,p=.6931471824645996,h=-1904654299957768e-24;function m(v,b,g){var _,y,E,I,L,R,A,S,$,w,k;return w=v&a|0,k=(w>>s)-u|0,$=0,w>d&&($=v+(f>>k+1)>>>0,k=(($&a)>>s)-u|0,_=($&~(c>>k))>>>0,E=e(0,_),$=($&c|f)>>s-k>>>0,v<0&&($=-$),b-=E),E=g+b,E=r(E,0),L=E*p,R=(g-(E-b))*o+E*h,S=L+R,A=R-(S-L),E=S*S,y=S-E*l(E),I=S*y/(y-2)-(A+S*A),S=1-(I-S),v=n(S),v=t(v),v+=$<<s>>>0,v>>s<=0?S=i(S,$):S=e(S,v),S}return dc=m,dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var pc,G3;function Dk(){if(G3)return pc;G3=1;var n=ue(),e=o2(),r=et(),t=rt(),i=_e(),o=ye(),u=t2(),a=Kt(),c=_9(),s=rn(),l=Re(),f=kr(),d=kk(),p=Ik(),h=Ck(),m=Mk(),v=Tk(),b=Ok(),g=1072693247,_=1105199104,y=1139802112,E=1083179008,I=1072693248,L=1083231232,R=3230714880,A=31,S=1e300,$=1e-300,w=8008566259537294e-32,k=[0,0],C=[0,0];function F(T,B){var O,x,q,Q,W,Y,ne,ie,H,j,G,Ae,de,Z,oe,$e;if(n(T)||n(B))return NaN;if(u.assign(B,k,1,0),Y=k[0],ne=k[1],ne===0){if(B===0)return 1;if(B===1)return T;if(B===-1)return 1/T;if(B===.5)return i(T);if(B===-.5)return 1/i(T);if(B===2)return T*T;if(B===3)return T*T*T;if(B===4)return T*=T,T*T;if(r(B))return h(T,B)}if(u.assign(T,k,1,0),Q=k[0],W=k[1],W===0){if(Q===0)return d(T,B);if(T===1)return 1;if(T===-1&&e(B))return-1;if(r(T))return T===s?F(-0,-B):B<0?0:l}if(T<0&&t(B)===!1)return(T-T)/(T-T);if(q=o(T),O=Q&f|0,x=Y&f|0,ie=Q>>>A|0,H=Y>>>A|0,ie&&e(B)?ie=-1:ie=1,x>_){if(x>y)return p(T,B);if(O<g)return H===1?ie*S*S:ie*$*$;if(O>I)return H===0?ie*S*S:ie*$*$;de=v(C,q)}else de=m(C,q,O);if(j=a(B,0),Ae=(B-j)*de[0]+B*de[1],G=j*de[0],Z=Ae+G,u.assign(Z,k,1,0),oe=c(k[0]),$e=c(k[1]),oe>=E){if((oe-E|$e)!==0||Ae+w>Z-G)return ie*S*S}else if((oe&f)>=L&&((oe-R|$e)!==0||Ae<=Z-G))return ie*$*$;return Z=b(oe,G,Ae),ie*Z}return pc=F,pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hc,V3;function Ne(){if(V3)return hc;V3=1;var n=Dk();return hc=n,hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vc,X3;function tt(){if(X3)return vc;X3=1;var n=2.718281828459045;return vc=n,vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mc,Y3;function Un(){if(Y3)return mc;Y3=1;var n=2220446049250313e-31;return mc=n,mc}/**
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
*/var bc,K3;function Pk(){if(K3)return bc;K3=1;function n(e){var r,t,i;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(t=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),i=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),i=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/i)}return bc=n,bc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var gc,J3;function xk(){if(J3)return gc;J3=1;var n=ue(),e=_n(),r=_e(),t=ye(),i=Me(),o=Ne(),u=tt(),a=Un(),c=Pk(),s=10.900511;function l(f,d){var p,h,m,v,b,g,_;return n(f)||n(d)?NaN:f<0||d<0?NaN:d===1?1/f:f===1?1/d:(_=f+d,_<a?(b=_/f,b/=d,b):_===f&&d<a?1/d:_===d&&f<a?1/f:(f<d&&(g=d,d=f,f=g),h=f+s-.5,m=d+s-.5,v=_+s-.5,b=c(f)*(c(d)/c(_)),p=f-.5-d,t(d*p)<v*100&&f>100?b*=i(p*e(-d/v)):b*=o(h/v,p),v>1e10?b*=o(h/v*(m/v),d):b*=o(h*m/(v*v),d),b*=r(u/m),b))}return gc=l,gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _c,z3;function Mo(){if(z3)return _c;z3=1;var n=xk();return _c=n,_c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yc,Q3;function Hk(){if(Q3)return yc;Q3=1;var n=Re();function e(r){return r===0&&1/r===n}return yc=e,yc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ec,Z3;function Bk(){if(Z3)return Ec;Z3=1;var n=Hk();return Ec=n,Ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $c,e6;function Uk(){if(e6)return $c;e6=1;var n=Bk(),e=ue(),r=Re();function t(i,o){return e(i)||e(o)?NaN:i===r||o===r?r:i===o&&i===0?n(i)?i:o:i>o?i:o}return $c=t,$c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wc,n6;function Cr(){if(n6)return wc;n6=1;var n=Uk();return wc=n,wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sc,r6;function Wk(){if(r6)return Sc;r6=1;var n=rn();function e(r){return r===0&&1/r===n}return Sc=e,Sc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ac,t6;function $9(){if(t6)return Ac;t6=1;var n=Wk();return Ac=n,Ac}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lc,i6;function jk(){if(i6)return Lc;i6=1;var n=$9(),e=ue(),r=rn();function t(i,o){return e(i)||e(o)?NaN:i===r||o===r?r:i===o&&i===0?n(i)?i:o:i<o?i:o}return Lc=t,Lc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kc,o6;function hr(){if(o6)return kc;o6=1;var n=jk();return kc=n,kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ic,u6;function Rr(){if(u6)return Ic;u6=1;var n=17976931348623157e292;return Ic=n,Ic}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cc,a6;function w9(){if(a6)return Cc;a6=1;var n=2147483647;return Cc=n,Cc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rc,s6;function u2(){if(s6)return Rc;s6=1;var n=1.5707963267948966;return Rc=n,Rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mc,c6;function vr(){if(c6)return Mc;c6=1;var n=3.141592653589793;return Mc=n,Mc}/**
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
*/var Nc,l6;function Gk(){if(l6)return Nc;l6=1;function n(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}return Nc=n,Nc}/**
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
*/var Tc,f6;function Vk(){if(f6)return Tc;f6=1;function n(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}return Tc=n,Tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qc,d6;function Xk(){if(d6)return qc;d6=1;var n=Gk(),e=Vk();function r(t,i){var o,u,a,c;return c=t*t,a=c*c,u=c*n(c),u+=a*a*e(c),o=.5*c,a=1-o,a+(1-a-o+(c*u-t*i))}return qc=r,qc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fc,p6;function S9(){if(p6)return Fc;p6=1;var n=Xk();return Fc=n,Fc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Oc,h6;function Yk(){if(h6)return Oc;h6=1;var n=-.16666666666666632,e=.00833333333332249,r=-.0001984126982985795,t=27557313707070068e-22,i=-25050760253406863e-24,o=158969099521155e-24;function u(a,c){var s,l,f,d;return d=a*a,f=d*d,s=e+d*(r+d*t)+d*f*(i+d*o),l=d*a,c===0?a+l*(n+d*s):a-(d*(.5*c-l*s)-c-l*n)}return Oc=u,Oc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dc,v6;function A9(){if(v6)return Dc;v6=1;var n=Yk();return Dc=n,Dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pc,m6;function Kk(){if(m6)return Pc;m6=1;var n=Qr(),e;return n===!0?e=0:e=1,Pc=e,Pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xc,b6;function Jk(){if(b6)return xc;b6=1;var n=Jr(),e=zr(),r=Kk(),t=new e(1),i=new n(t.buffer);function o(u){return t[0]=u,i[r]}return xc=o,xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hc,g6;function zk(){if(g6)return Hc;g6=1;var n=Jk();return Hc=n,Hc}/**
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
*/var Bc,_6;function Qk(){if(_6)return Bc;_6=1;function n(e,r){var t,i;for(t=[],i=0;i<r;i++)t.push(e);return t}return Bc=n,Bc}/**
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
*/var Uc,y6;function Zk(){if(y6)return Uc;y6=1;var n=Qk();return Uc=n,Uc}/**
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
*/var Wc,E6;function eI(){if(E6)return Wc;E6=1;var n=Zk();function e(r){return n(0,r)}return Wc=e,Wc}/**
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
*/var jc,$6;function nI(){if($6)return jc;$6=1;var n=eI();return jc=n,jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Gc,w6;function rI(){if(w6)return Gc;w6=1;var n=Bn(),e=nt(),r=nI(),t=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],i=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],o=16777216,u=5960464477539063e-23,a=r(20),c=r(20),s=r(20),l=r(20);function f(p,h,m,v,b,g,_,y,E){var I,L,R,A,S,$,w,k,C;for(A=g,C=v[m],k=m,S=0;k>0;S++)L=u*C|0,l[S]=C-o*L|0,C=v[k-1]+L,k-=1;if(C=e(C,b),C-=8*n(C*.125),w=C|0,C-=w,R=0,b>0?(S=l[m-1]>>24-b,w+=S,l[m-1]-=S<<24-b,R=l[m-1]>>23-b):b===0?R=l[m-1]>>23:C>=.5&&(R=2),R>0){for(w+=1,I=0,S=0;S<m;S++)k=l[S],I===0?k!==0&&(I=1,l[S]=16777216-k):l[S]=16777215-k;if(b>0)switch(b){case 1:l[m-1]&=8388607;break;case 2:l[m-1]&=4194303;break}R===2&&(C=1-C,I!==0&&(C-=e(1,b)))}if(C===0){for(k=0,S=m-1;S>=g;S--)k|=l[S];if(k===0){for($=1;l[g-$]===0;$++);for(S=m+1;S<=m+$;S++){for(E[y+S]=t[_+S],L=0,k=0;k<=y;k++)L+=p[k]*E[y+(S-k)];v[S]=L}return m+=$,f(p,h,m,v,b,g,_,y,E)}for(m-=1,b-=24;l[m]===0;)m-=1,b-=24}else C=e(C,-b),C>=o?(L=u*C|0,l[m]=C-o*L|0,m+=1,b+=24,l[m]=L):l[m]=C|0;for(L=e(1,b),S=m;S>=0;S--)v[S]=L*l[S],L*=u;for(S=m;S>=0;S--){for(L=0,$=0;$<=A&&$<=m-S;$++)L+=i[$]*v[S+$];s[m-S]=L}for(L=0,S=m;S>=0;S--)L+=s[S];for(R===0?h[0]=L:h[0]=-L,L=s[0]-L,S=1;S<=m;S++)L+=s[S];return R===0?h[1]=L:h[1]=-L,w&7}function d(p,h,m,v){var b,g,_,y,E,I,L,R,A;for(g=4,y=v-1,_=(m-3)/24|0,_<0&&(_=0),I=m-24*(_+1),R=_-y,A=y+g,L=0;L<=A;L++)R<0?a[L]=0:a[L]=t[R],R+=1;for(L=0;L<=g;L++){for(b=0,R=0;R<=y;R++)b+=p[R]*a[y+(L-R)];c[L]=b}return E=g,f(p,h,E,c,I,g,_,y,a)}return Gc=d,Gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vc,S6;function tI(){if(S6)return Vc;S6=1;var n=Math.round;return Vc=n,Vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xc,A6;function L9(){if(A6)return Xc;A6=1;var n=tI();return Xc=n,Xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Yc,L6;function iI(){if(L6)return Yc;L6=1;var n=L9(),e=gn(),r=.6366197723675814,t=1.5707963267341256,i=6077100506506192e-26,o=6077100506303966e-26,u=20222662487959506e-37,a=20222662487111665e-37,c=84784276603689e-45,s=2047;function l(f,d,p){var h,m,v,b,g,_,y;return m=n(f*r),b=f-m*t,g=m*i,y=d>>20|0,p[0]=b-g,h=e(p[0]),_=y-(h>>20&s),_>16&&(v=b,g=m*o,b=v-g,g=m*u-(v-b-g),p[0]=b-g,h=e(p[0]),_=y-(h>>20&s),_>49&&(v=b,g=m*a,b=v-g,g=m*c-(v-b-g),p[0]=b-g)),p[1]=b-p[0]-g,m}return Yc=l,Yc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Kc,k6;function oI(){if(k6)return Kc;k6=1;var n=kr(),e=Ro(),r=E9(),t=gn(),i=zk(),o=Co(),u=rI(),a=iI(),c=0,s=16777216,l=1.5707963267341256,f=6077100506506192e-26,d=2*f,p=3*f,h=4*f,m=598523,v=1072243195,b=1073928572,g=1074752122,_=1074977148,y=1075183036,E=1075388923,I=1075594811,L=1094263291,R=[0,0,0],A=[0,0];function S($,w){var k,C,F,T,B,O,x,q;if(F=t($)|0,T=F&n|0,T<=v)return w[0]=$,w[1]=0,0;if(T<=g)return(T&r)===m?a($,T,w):T<=b?F>0?(q=$-l,w[0]=q-f,w[1]=q-w[0]-f,1):(q=$+l,w[0]=q+f,w[1]=q-w[0]+f,-1):F>0?(q=$-2*l,w[0]=q-d,w[1]=q-w[0]-d,2):(q=$+2*l,w[0]=q+d,w[1]=q-w[0]+d,-2);if(T<=I)return T<=y?T===_?a($,T,w):F>0?(q=$-3*l,w[0]=q-p,w[1]=q-w[0]-p,3):(q=$+3*l,w[0]=q+p,w[1]=q-w[0]+p,-3):T===E?a($,T,w):F>0?(q=$-4*l,w[0]=q-h,w[1]=q-w[0]-h,4):(q=$+4*l,w[0]=q+h,w[1]=q-w[0]+h,-4);if(T<L)return a($,T,w);if(T>=e)return w[0]=NaN,w[1]=NaN,0;for(k=i($),C=(T>>20)-1046,q=o(T-(C<<20|0),k),O=0;O<2;O++)R[O]=q|0,q=(q-R[O])*s;for(R[2]=q,B=3;R[B-1]===c;)B-=1;return x=u(R,A,C,B,1),F<0?(w[0]=-A[0],w[1]=-A[1],-x):(w[0]=A[0],w[1]=A[1],x)}return Kc=S,Kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jc,I6;function k9(){if(I6)return Jc;I6=1;var n=oI();return Jc=n,Jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var zc,C6;function uI(){if(C6)return zc;C6=1;var n=kr(),e=Ro(),r=gn(),t=S9(),i=A9(),o=k9(),u=1072243195,a=1045430272,c=[0,0];function s(l){var f,d;if(f=r(l),f&=n,f<=u)return f<a?l:i(l,0);if(f>=e)return NaN;switch(d=o(l,c),d&3){case 0:return i(c[0],c[1]);case 1:return t(c[0],c[1]);case 2:return-i(c[0],c[1]);default:return-t(c[0],c[1])}}return zc=s,zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qc,R6;function Jt(){if(R6)return Qc;R6=1;var n=uI();return Qc=n,Qc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zc,M6;function No(){if(M6)return Zc;M6=1;var n=2.5066282746310007;return Zc=n,Zc}/**
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
*/var e0,N6;function aI(){if(N6)return e0;N6=1;function n(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}return e0=n,e0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var n0,T6;function sI(){if(T6)return n0;T6=1;var n=No(),e=Ne(),r=Me(),t=aI(),i=143.01608;function o(u){var a,c,s;return a=1/u,a=1+a*t(a),c=r(u),u>i?(s=e(u,.5*u-.25),c=s*(s/c)):c=e(u,u-.5)/c,n*c*a}return n0=o,n0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r0,q6;function cI(){if(q6)return r0;q6=1;var n=.5772156649015329;return r0=n,r0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var t0,F6;function lI(){if(F6)return t0;F6=1;var n=cI();function e(r,t){return t/((1+n*r)*r)}return t0=e,t0}/**
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
*/var i0,O6;function fI(){if(O6)return i0;O6=1;function n(e){var r,t,i;return e===0?1:(e<0?r=-e:r=e,r<=1?(t=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),i=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,t=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),i=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),t/i)}return i0=n,i0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var o0,D6;function dI(){if(D6)return o0;D6=1;var n=ue(),e=rt(),r=$9(),t=ye(),i=Bn(),o=Jt(),u=Re(),a=rn(),c=vr(),s=sI(),l=lI(),f=fI();function d(p){var h,m,v,b;if(e(p)&&p<0||p===a||n(p))return NaN;if(p===0)return r(p)?a:u;if(p>171.61447887182297)return u;if(p<-170.5674972726612)return 0;if(m=t(p),m>33)return p>=0?s(p):(v=i(m),(v&1)===0?h=-1:h=1,b=m-v,b>.5&&(v+=1,b=m-v),b=m*o(c*b),h*c/(t(b)*s(m)));for(b=1;p>=3;)p-=1,b*=p;for(;p<0;){if(p>-1e-9)return l(p,b);b/=p,p+=1}for(;p<2;){if(p<1e-9)return l(p,b);b/=p,p+=1}return p===2?b:(p-=2,b*f(p))}return o0=d,o0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u0,P6;function Wn(){if(P6)return u0;P6=1;var n=dI();return u0=n,u0}/**
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
*/var a0,x6;function To(){if(x6)return a0;x6=1;var n=170;return a0=n,a0}const pI=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s0,H6;function hI(){if(H6)return s0;H6=1;var n=ue(),e=rt(),r=Wn(),t=Re(),i=To(),o=pI;function u(a){return n(a)?NaN:e(a)?a<0?NaN:a<=i?o[a]:t:r(a+1)}return s0=u,s0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c0,B6;function I9(){if(B6)return c0;B6=1;var n=hI();return c0=n,c0}/**
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
*/var l0,U6;function vI(){if(U6)return l0;U6=1;function n(e){var r,t,i;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(t=3847467039331777e-5+e*(3685766504351951e-5+e*(1588920245372942e-5+e*(4059208354298835e-6+e*(6805476611834733e-7+e*(7823975500312005e-8+e*(6246580776401795e-9+e*(341986.3488721347+e*(12287.194511824551+e*(261.61404416416684+e*2.5066282746310007))))))))),i=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=2.5066282746310007+e*(261.61404416416684+e*(12287.194511824551+e*(341986.3488721347+e*(6246580776401795e-9+e*(7823975500312005e-8+e*(6805476611834733e-7+e*(4059208354298835e-6+e*(1588920245372942e-5+e*(3685766504351951e-5+e*3847467039331777e-5))))))))),i=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/i)}return l0=n,l0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var f0,W6;function mI(){if(W6)return f0;W6=1;var n=vI();return f0=n,f0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d0,j6;function bI(){if(j6)return d0;j6=1;var n=mI();return d0=n,d0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p0,G6;function zt(){if(G6)return p0;G6=1;var n=10.900511;return p0=n,p0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var h0,V6;function gI(){if(V6)return h0;V6=1;var n=bI(),e=Wn(),r=_n(),t=ye(),i=Me(),o=Ne(),u=Un(),a=tt(),c=zt(),s=To(),l=4269068009004705e289;function f(d,p){var h,m,v;return d<u?p>=s?(m=f(p,s-p),m*=d,m*=l,1/m):1/(d*e(d+p)):(v=d+c-.5,d+p===d?t(p/v)<u?h=i(-p):h=1:(t(p)<10?h=i((.5-d)*r(p/v)):h=o(v/(v+p),d-.5),h*=n(d)/n(d+p)),h*=o(a/(v+p),p),h)}return h0=f,h0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var v0,X6;function _I(){if(X6)return v0;X6=1;var n=ye(),e=Bn(),r=Wn(),t=I9(),i=To(),o=gI();function u(a,c){var s,l,f;if(a<=0||a+c<=0)return r(a)/r(a+c);if(l=e(c),l===c){if(f=e(a),f===a&&a<=i&&a+c<=i)return t(f-1)/t(l+f-1);if(n(c)<20){if(c===0)return 1;if(c<0){for(a-=1,s=a,c+=1;c!==0;)a-=1,s*=a,c+=1;return s}for(s=1/a,c-=1;c!==0;)a+=1,s/=a,c-=1;return s}}return o(a,c)}return v0=u,v0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m0,Y6;function a2(){if(Y6)return m0;Y6=1;var n=_I();return m0=n,m0}/**
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
*/var b0,K6;function yI(){if(K6)return b0;K6=1;function n(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}return b0=n,b0}/**
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
*/var g0,J6;function EI(){if(J6)return g0;J6=1;function n(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}return g0=n,g0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _0,z6;function $I(){if(z6)return _0;z6=1;var n=gn(),e=Yt(),r=ue(),t=Lr(),i=rn(),o=yI(),u=EI(),a=.6931471803691238,c=19082149292705877e-26,s=0x40000000000000,l=.3333333333333333,f=1048575,d=2146435072,p=1048576,h=1072693248;function m(v){var b,g,_,y,E,I,L,R,A,S,$,w;return v===0?i:r(v)||v<0?NaN:(g=n(v),E=0,g<p&&(E-=54,v*=s,g=n(v)),g>=d?v+v:(E+=(g>>20)-t|0,g&=f,R=g+614244&1048576|0,v=e(v,g|R^h),E+=R>>20|0,L=v-1,(f&2+g)<3?L===0?E===0?0:E*a+E*c:(I=L*L*(.5-l*L),E===0?L-I:E*a-(I-E*c-L)):(S=L/(2+L),w=S*S,R=g-398458|0,$=w*w,A=440401-g|0,y=$*o($),_=w*u($),R|=A,I=_+y,R>0?(b=.5*L*L,E===0?L-(b-S*(b+I)):E*a-(b-(S*(b+I)+E*c)-L)):E===0?L-S*(L-I):E*a-(S*(L-I)-E*c-L))))}return _0=m,_0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y0,Q6;function Ee(){if(Q6)return y0;Q6=1;var n=$I();return y0=n,y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var E0,Z6;function wI(){if(Z6)return E0;Z6=1;var n=gn(),e=S9(),r=A9(),t=k9(),i=kr(),o=Ro(),u=[0,0],a=1072243195,c=1044381696;function s(l){var f,d;if(f=n(l),f&=i,f<=a)return f<c?1:e(l,0);if(f>=o)return NaN;switch(d=t(l,u),d&3){case 0:return e(u[0],u[1]);case 1:return-r(u[0],u[1]);case 2:return-e(u[0],u[1]);default:return r(u[0],u[1])}}return E0=s,E0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $0,e4;function s2(){if(e4)return $0;e4=1;var n=wI();return $0=n,$0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w0,n4;function SI(){if(n4)return w0;n4=1;var n=ue(),e=et(),r=s2(),t=Jt(),i=ye(),o=i2(),u=vr();function a(c){var s,l;return n(c)?NaN:e(c)?NaN:(l=c%2,s=i(l),s===0||s===1?o(0,l):s<.25?t(u*l):s<.75?(s=.5-s,o(r(u*s),l)):s<1.25?(l=o(1,l)-l,t(u*l)):s<1.75?(s-=1.5,-o(r(u*s),l)):(l-=o(2,l),t(u*l)))}return w0=a,w0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S0,r4;function AI(){if(r4)return S0;r4=1;var n=SI();return S0=n,S0}/**
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
*/var A0,t4;function LI(){if(t4)return A0;t4=1;function n(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}return A0=n,A0}/**
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
*/var L0,i4;function kI(){if(i4)return L0;i4=1;function n(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}return L0=n,L0}/**
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
*/var k0,o4;function II(){if(o4)return k0;o4=1;function n(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}return k0=n,k0}/**
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
*/var I0,u4;function CI(){if(u4)return I0;u4=1;function n(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}return I0=n,I0}/**
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
*/var C0,a4;function RI(){if(a4)return C0;a4=1;function n(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}return C0=n,C0}/**
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
*/var R0,s4;function MI(){if(s4)return R0;s4=1;function n(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}return R0=n,R0}/**
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
*/var M0,c4;function NI(){if(c4)return M0;c4=1;function n(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}return M0=n,M0}/**
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
*/var N0,l4;function TI(){if(l4)return N0;l4=1;function n(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}return N0=n,N0}/**
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
*/var T0,f4;function qI(){if(f4)return T0;f4=1;function n(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}return T0=n,T0}/**
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
*/var q0,d4;function FI(){if(d4)return q0;d4=1;function n(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}return q0=n,q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var F0,p4;function OI(){if(p4)return F0;p4=1;var n=ue(),e=et(),r=ye(),t=Ee(),i=r2(),o=AI(),u=vr(),a=Re(),c=LI(),s=kI(),l=II(),f=CI(),d=RI(),p=MI(),h=NI(),m=TI(),v=qI(),b=FI(),g=.07721566490153287,_=.3224670334241136,y=1,E=-.07721566490153287,I=.48383612272381005,L=-.1475877229945939,R=.06462494023913339,A=-.07721566490153287,S=1,$=.4189385332046727,w=1.4616321449683622,k=4503599627370496,C=72057594037927940,F=13877787807814457e-33,T=1.4616321449683622,B=-.12148629053584961,O=-3638676997039505e-33;function x(q){var Q,W,Y,ne,ie,H,j,G,Ae,de,Z,oe,$e;if(n(q)||e(q))return q;if(q===0)return a;if(q<0?(Q=!0,q=-q):Q=!1,q<F)return-t(q);if(Q){if(q>=k||(Ae=o(q),Ae===0))return a;W=t(u/r(Ae*q))}if(q===1||q===2)return 0;if(q<2)switch(q<=.9?($e=-t(q),q>=w-1+.27?(Z=1-q,Y=0):q>=w-1-.27?(Z=q-(T-1),Y=1):(Z=q,Y=2)):($e=0,q>=w+.27?(Z=2-q,Y=0):q>=w-.27?(Z=q-T,Y=1):(Z=q-1,Y=2)),Y){case 0:oe=Z*Z,H=g+oe*c(oe),ie=oe*(_+oe*s(oe)),j=Z*H+ie,$e+=j-.5*Z;break;case 1:oe=Z*Z,de=oe*Z,H=I+de*d(de),ie=L+de*p(de),ne=R+de*h(de),j=oe*H-(O-de*(ie+Z*ne)),$e+=B+j;break;case 2:H=Z*(A+Z*m(Z)),ie=S+Z*v(Z),$e+=-.5*Z+H/ie;break}else if(q<8)switch(Y=i(q),Z=q-Y,j=Z*(E+Z*f(Z)),G=y+Z*l(Z),$e=.5*Z+j/G,oe=1,Y){case 7:oe*=Z+6;case 6:oe*=Z+5;case 5:oe*=Z+4;case 4:oe*=Z+3;case 3:oe*=Z+2,$e+=t(oe)}else q<C?(Ae=t(q),oe=1/q,Z=oe*oe,de=$+oe*b(Z),$e=(q-.5)*(Ae-1)+de):$e=q*(t(q)-1);return Q&&($e=W-$e),$e}return F0=x,F0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O0,h4;function it(){if(h4)return O0;h4=1;var n=OI();return O0=n,O0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D0,v4;function mr(){if(v4)return D0;v4=1;var n=709.782712893384;return D0=n,D0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P0,m4;function DI(){if(m4)return P0;m4=1;var n=14901161193847656e-24;return P0=n,P0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x0,b4;function PI(){if(b4)return x0;b4=1;var n=eval;return x0=n,x0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H0,g4;function xI(){if(g4)return H0;g4=1;var n=PI();function e(){var r;try{n('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}return H0=e,H0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0,_4;function C9(){if(_4)return B0;_4=1;var n=xI();return B0=n,B0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U0,y4;function HI(){if(y4)return U0;y4=1;var n=ye(),e=Un(),r=1e6;function t(i,o){var u,a,c,s,l,f;if(f={},arguments.length>1&&(f=o),a=f.tolerance||e,s=f.maxTerms||r,l=f.initialValue||0,u=typeof i.next=="function",u===!0){for(c of i)if(l+=c,n(a*l)>=n(c)||--s===0)break}else do c=i(),l+=c;while(n(a*l)<n(c)&&--s);return l}return U0=t,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,E4;function BI(){if(E4)return W0;E4=1;var n=ye(),e=Un(),r=1e6;function t(i,o){var u,a,c,s,l;l={},arguments.length>1&&(l=o),u=l.tolerance||e,c=l.maxTerms||r,s=l.initialValue||0;do a=i(),s+=a;while(n(u*s)<n(a)&&--c);return s}return W0=t,W0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j0,$4;function Qt(){if($4)return j0;$4=1;var n=C9(),e=HI(),r=BI(),t;return n()?t=e:t=r,j0=t,j0}/**
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
*/var G0,w4;function UI(){if(w4)return G0;w4=1;function n(e,r){var t=1,i=e,o=r;return u;function u(){var a=t;return t*=i/o,i-=1,a}}return G0=n,G0}/**
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
*/var V0,S4;function WI(){if(S4)return V0;S4=1;var n=Qt(),e=UI();function r(t,i){var o,u;return u=e(t,i),o=n(u),o}return V0=r,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var X0,A4;function jI(){if(A4)return X0;A4=1;var n=Me();function e(r,t){var i,o,u,a;if(u=n(-t),o=u,o!==0)for(i=o,a=1;a<r;++a)i/=a,i*=t,o+=i;return o}return X0=e,X0}/**
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
*/var Y0,L4;function GI(){if(L4)return Y0;L4=1;function n(e){return e===0?-.3250421072470015:-.3250421072470015+e*(-.02848174957559851+e*(-.005770270296489442+e*-23763016656650163e-21))}return Y0=n,Y0}/**
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
*/var K0,k4;function VI(){if(k4)return K0;k4=1;function n(e){return e===0?.39791722395915535:.39791722395915535+e*(.0650222499887673+e*(.005081306281875766+e*(.00013249473800432164+e*-3960228278775368e-21)))}return K0=n,K0}/**
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
*/var J0,I4;function XI(){if(I4)return J0;I4=1;function n(e){return e===0?.41485611868374833:.41485611868374833+e*(-.3722078760357013+e*(.31834661990116175+e*(-.11089469428239668+e*(.035478304325618236+e*-.002166375594868791))))}return J0=n,J0}/**
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
*/var z0,C4;function YI(){if(C4)return z0;C4=1;function n(e){return e===0?.10642088040084423:.10642088040084423+e*(.540397917702171+e*(.07182865441419627+e*(.12617121980876164+e*(.01363708391202905+e*.011984499846799107))))}return z0=n,z0}/**
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
*/var Q0,R4;function KI(){if(R4)return Q0;R4=1;function n(e){return e===0?-.6938585727071818:-.6938585727071818+e*(-10.558626225323291+e*(-62.375332450326006+e*(-162.39666946257347+e*(-184.60509290671104+e*(-81.2874355063066+e*-9.814329344169145)))))}return Q0=n,Q0}/**
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
*/var Z0,M4;function JI(){if(M4)return Z0;M4=1;function n(e){return e===0?19.651271667439257:19.651271667439257+e*(137.65775414351904+e*(434.56587747522923+e*(645.3872717332679+e*(429.00814002756783+e*(108.63500554177944+e*(6.570249770319282+e*-.0604244152148581))))))}return Z0=n,Z0}/**
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
*/var el,N4;function zI(){if(N4)return el;N4=1;function n(e){return e===0?-.799283237680523:-.799283237680523+e*(-17.757954917754752+e*(-160.63638485582192+e*(-637.5664433683896+e*(-1025.0951316110772+e*-483.5191916086514))))}return el=n,el}/**
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
*/var nl,T4;function QI(){if(T4)return nl;T4=1;function n(e){return e===0?30.33806074348246:30.33806074348246+e*(325.7925129965739+e*(1536.729586084437+e*(3199.8582195085955+e*(2553.0504064331644+e*(474.52854120695537+e*-22.44095244658582)))))}return nl=n,nl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var rl,q4;function ZI(){if(q4)return rl;q4=1;var n=ue(),e=Me(),r=Kt(),t=Re(),i=rn(),o=GI(),u=VI(),a=XI(),c=YI(),s=KI(),l=JI(),f=zI(),d=QI(),p=1e-300,h=13877787807814457e-33,m=.8450629115104675,v=.12837916709551256,b=1,g=-.0023621185607526594,_=1,y=-.009864944034847148,E=1,I=-.0098649429247001,L=1;function R(A){var S,$,w,k,C,F,T,B;if(n(A))return NaN;if(A===t)return 0;if(A===i)return 2;if(A===0)return 1;if(A<0?(S=!0,$=-A):(S=!1,$=A),$<.84375)return $<h?1-A:(w=A*A,k=v+w*o(w),C=b+w*u(w),F=k/C,A<.25?1-(A+A*F):(k=A*F,k+=A-.5,.5-k));if($<1.25)return C=$-1,T=g+C*a(C),B=_+C*c(C),S?1+m+T/B:1-m-T/B;if($<28){if(C=1/($*$),$<2.857142857142857)k=y+C*s(C),C=E+C*l(C);else{if(A<-6)return 2-p;k=I+C*f(C),C=L+C*d(C)}return w=r($,0),k=e(-(w*w)-.5625)*e((w-$)*(w+$)+k/C),S?2-k/$:k/$}return S?2-p:p*p}return rl=R,rl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tl,F4;function qo(){if(F4)return tl;F4=1;var n=ZI();return tl=n,tl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var il,O4;function eC(){if(O4)return il;O4=1;var n=qo(),e=_e(),r=Me(),t=vr();function i(o,u){var a,c,s,l,f;if(l=n(e(u)),l!==0&&o>1){for(c=r(-u)/e(t*u),c*=u,a=.5,c/=a,s=c,f=2;f<o;++f)c/=f-a,c*=u,s+=c;l+=s}return l}return il=i,il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ol,D4;function ot(){if(D4)return ol;D4=1;var n=-708.3964185322641;return ol=n,ol}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ul,P4;function nC(){if(P4)return ul;P4=1;var n=Me(),e=Ne(),r=Ee(),t=mr(),i=ot();function o(u,a){var c,s;return s=u*r(a),a>=1?s<t&&-a>i?c=e(a,u)*n(-a):u>=1?c=e(a/n(a/u),u):c=n(s-a):s>i?c=e(a,u)*n(-a):a/u<t?c=e(a/n(a/u),u):c=n(s-a),c}return ul=o,ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var al,x4;function R9(){if(x4)return al;x4=1;function n(e,r){var t,i;if(i=e.length,i<2||r===0)return i===0?0:e[0];for(i-=1,t=e[i]*r+e[i-1],i-=2;i>=0;)t=t*r+e[i],i-=1;return t}return al=n,al}/**
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
*/var sl,H4;function rC(){if(H4)return sl;H4=1;var n=Function;return sl=n,sl}/**
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
*/var cl,B4;function tC(){if(B4)return cl;B4=1;var n=rC();return cl=n,cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ll,U4;function iC(){if(U4)return ll;U4=1;var n=tC(),e=R9();function r(t){var i,o,u,a;if(t.length>500)return c;if(i="return function evalpoly(x){",o=t.length,o===0)i+="return 0.0;";else if(o===1)i+="return "+t[0]+";";else{for(i+="if(x===0.0){return "+t[0]+";}",i+="return "+t[0],u=o-1,a=1;a<o;a++)i+="+x*",a<u&&(i+="("),i+=t[a];for(a=0;a<u-1;a++)i+=")";i+=";"}return i+="}",i+="//# sourceURL=evalpoly.factory.js",new n(i)();function c(s){return e(t,s)}}return ll=r,ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fl,W4;function br(){if(W4)return fl;W4=1;var n=nn(),e=R9(),r=iC();return n(e,"factory",r),fl=e,fl}/**
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
*/var dl,j4;function oC(){if(j4)return dl;j4=1;function n(e){var r=-e,t=-1,i=0;return o;function o(){return t*=r,i+=1,t/i}}return dl=n,dl}/**
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
*/var pl,G4;function uC(){if(G4)return pl;G4=1;var n=ye(),e=Ee(),r=Un(),t=Qt(),i=oC();function o(u){var a,c;return u<=-1?NaN:(c=n(u),c>.95?e(1+u)-u:c<r?-u*u/2:(a={initialValue:-u},t(i(u),a)))}return pl=o,pl}/**
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
*/var hl,V4;function M9(){if(V4)return hl;V4=1;var n=uC();return hl=n,hl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vl,X4;function Fo(){if(X4)return vl;X4=1;var n=6.283185307179586;return vl=n,vl}/**
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
*/var ml,Y4;function aC(){if(Y4)return ml;Y4=1;function n(e){return e===0?-.3333333333333333:-.3333333333333333+e*(.08333333333333333+e*(-.014814814814814815+e*(.0011574074074074073+e*(.0003527336860670194+e*(-.0001787551440329218+e*(3919263178522438e-20+e*(-21854485106799924e-22+e*(-185406221071516e-20+e*(8296711340953087e-22+e*(-17665952736826078e-23+e*(6707853543401498e-24+e*(10261809784240309e-24+e*(-4382036018453353e-24+e*914769958223679e-24)))))))))))))}return ml=n,ml}/**
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
*/var bl,K4;function sC(){if(K4)return bl;K4=1;function n(e){return e===0?-.001851851851851852:-.001851851851851852+e*(-.003472222222222222+e*(.0026455026455026454+e*(-.0009902263374485596+e*(.00020576131687242798+e*(-4018775720164609e-22+e*(-18098550334489977e-21+e*(764916091608111e-20+e*(-16120900894563446e-22+e*(4647127802807434e-24+e*(1378633446915721e-22+e*(-5752545603517705e-23+e*11951628599778148e-24)))))))))))}return bl=n,bl}/**
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
*/var gl,J4;function cC(){if(J4)return gl;J4=1;function n(e){return e===0?.004133597883597883:.004133597883597883+e*(-.0026813271604938273+e*(.0007716049382716049+e*(20093878600823047e-22+e*(-.00010736653226365161+e*(52923448829120125e-21+e*(-12760635188618728e-21+e*(3423578734096138e-23+e*(13721957309062932e-22+e*(-6298992138380055e-22+e*14280614206064242e-23)))))))))}return gl=n,gl}/**
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
*/var _l,z4;function lC(){if(z4)return _l;z4=1;function n(e){return e===0?.0006494341563786008:.0006494341563786008+e*(.00022947209362139917+e*(-.0004691894943952557+e*(.00026772063206283885+e*(-7561801671883977e-20+e*(-2396505113867297e-22+e*(11082654115347302e-21+e*(-56749528269915965e-22+e*14230900732435883e-22)))))))}return _l=n,_l}/**
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
*/var yl,Q4;function fC(){if(Q4)return yl;Q4=1;function n(e){return e===0?-.0008618882909167117:-.0008618882909167117+e*(.0007840392217200666+e*(-.0002990724803031902+e*(-14638452578843418e-22+e*(6641498215465122e-20+e*(-3968365047179435e-20+e*11375726970678419e-21)))))}return yl=n,yl}/**
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
*/var El,Z4;function dC(){if(Z4)return El;Z4=1;function n(e){return e===0?-.00033679855336635813:-.00033679855336635813+e*(-6972813758365858e-20+e*(.0002772753244959392+e*(-.00019932570516188847+e*(6797780477937208e-20+e*(1419062920643967e-22+e*(-13594048189768693e-21+e*(8018470256334202e-21+e*-2291481176508095e-21)))))))}return El=n,El}/**
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
*/var $l,eb;function pC(){if(eb)return $l;eb=1;function n(e){return e===0?.0005313079364639922:.0005313079364639922+e*(-.0005921664373536939+e*(.0002708782096718045+e*(7902353232660328e-22+e*(-8153969367561969e-20+e*(561168275310625e-19+e*-18329116582843375e-21)))))}return $l=n,$l}/**
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
*/var wl,nb;function hC(){if(nb)return wl;nb=1;function n(e){return e===0?.00034436760689237765:.00034436760689237765+e*(5171790908260592e-20+e*(-.00033493161081142234+e*(.0002812695154763237+e*-.00010976582244684731)))}return wl=n,wl}/**
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
*/var Sl,rb;function vC(){if(rb)return Sl;rb=1;function n(e){return e===0?-.0006526239185953094:-.0006526239185953094+e*(.0008394987206720873+e*-.000438297098541721)}return Sl=n,Sl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Al,tb;function mC(){if(tb)return Al;tb=1;var n=br(),e=M9(),r=qo(),t=_e(),i=Me(),o=Fo(),u=aC(),a=sC(),c=cC(),s=lC(),l=fC(),f=dC(),d=pC(),p=hC(),h=vC(),m=[0,0,0,0,0,0,0,0,0,0];function v(b,g){var _,y,E,I,L;return y=(g-b)/b,E=-e(y),I=b*E,L=t(2*E),g<b&&(L=-L),m[0]=u(L),m[1]=a(L),m[2]=c(L),m[3]=s(L),m[4]=l(L),m[5]=f(L),m[6]=d(L),m[7]=p(L),m[8]=h(L),m[9]=-.0005967612901927463,_=n(m,1/b),_*=i(-I)/t(o*b),g<b&&(_=-_),_+=r(t(I))/2,_}return Al=v,Al}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ll,ib;function bC(){if(ib)return Ll;ib=1;function n(e,r){var t=1,i=e,o=r;return u;function u(){var a=t;return i+=1,t*=o/i,a}}return Ll=n,Ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var kl,ob;function N9(){if(ob)return kl;ob=1;var n=Qt(),e=bC();function r(t,i,o){var u,a;return o=o||0,a=e(t,i),u=n(a,{initialValue:o}),u}return kl=r,kl}/**
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
*/var Il,ub;function gC(){if(ub)return Il;ub=1;function n(e){var r,t,i;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(t=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),i=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),i=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/i)}return Il=n,Il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Cl,ab;function _C(){if(ab)return Cl;ab=1;var n=gC();return Cl=n,Cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rl,sb;function Oo(){if(sb)return Rl;sb=1;var n=_C();return Rl=n,Rl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ml,cb;function yC(){if(cb)return Ml;cb=1;var n=Oo(),e=it(),r=Wn(),t=M9(),i=_e(),o=ye(),u=Me(),a=Ne(),c=Cr(),s=hr(),l=Ee(),f=Rr(),d=mr(),p=ot(),h=zt(),m=tt();function v(b,g){var _,y,E,I,L,R,A;return E=b+h-.5,A=(g-b-h+.5)/E,b<1?g<=p||b<1/f?u(b*l(g)-g-e(b)):a(g,b)*u(-g)/r(b):(o(A*A*b)<=100&&b>150?(_=b*t(A)+g*(.5-h)/E,_=u(_)):(I=b*l(g/E),L=b-g,s(I,L)<=p||c(I,L)>=d?(y=L/b,s(I,L)/2>p&&c(I,L)/2<d?(R=a(g/E,b/2)*u(L/2),_=R*R):s(I,L)/4>p&&c(I,L)/4<d&&g>b?(R=a(g/E,b/4)*u(L/4),_=R*R,_*=_):y>p&&y<d?_=a(g*u(y)/E,b):_=u(I+L)):_=a(g/E,b)*u(L)),_*=i(E/m)/n(b),_)}return Ml=v,Ml}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Nl,lb;function EC(){if(lb)return Nl;lb=1;var n=ue(),e=et(),r=ye(),t=Zr(),i=Ee(),o=Ne(),u=r2();function a(c,s){var l,f;if(n(c)||n(s))return NaN;if(s===0)return 0;if(c===0)return-1;if(c<0&&s%2===0&&(c=-c),c>0){if((r(s*(c-1))<.5||r(s)<.2)&&(f=i(c)*s,f<.5))return t(f)}else if(u(s)!==s)return NaN;return l=o(c,s)-1,e(l)||n(l)?NaN:l}return Nl=a,Nl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tl,fb;function $C(){if(fb)return Tl;fb=1;var n=EC();return Tl=n,Tl}/**
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
*/var ql,db;function wC(){if(db)return ql;db=1;function n(e){var r,t,i;return e===0?-.01803556856784494:(e<0?r=-e:r=e,r<=1?(t=-.01803556856784494+e*(.02512664961998968+e*(.049410315156753225+e*(.0172491608709614+e*(-.0002594535632054381+e*(-.0005410098692152044+e*(-3245886498259485e-20+e*0)))))),i=1+e*(1.962029871977952+e*(1.4801966942423133+e*(.5413914320717209+e*(.09885042511280101+e*(.008213096746488934+e*(.00022493629192211576+e*-22335276320861708e-23))))))):(e=1/e,t=0+e*(-3245886498259485e-20+e*(-.0005410098692152044+e*(-.0002594535632054381+e*(.0172491608709614+e*(.049410315156753225+e*(.02512664961998968+e*-.01803556856784494)))))),i=-22335276320861708e-23+e*(.00022493629192211576+e*(.008213096746488934+e*(.09885042511280101+e*(.5413914320717209+e*(1.4801966942423133+e*(1.962029871977952+e*1))))))),t/i)}return ql=n,ql}/**
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
*/var Fl,pb;function SC(){if(pb)return Fl;pb=1;function n(e){var r,t,i;return e===0?.04906224540690395:(e<0?r=-e:r=e,r<=1?(t=.04906224540690395+e*(-.09691175301595212+e*(-.4149833583594954+e*(-.4065671242119384+e*(-.1584135863906922+e*(-.024014982064857155+e*-.0010034668769627955))))),i=1+e*(3.0234982984646304+e*(3.4873958536072385+e*(1.9141558827442668+e*(.5071377386143635+e*(.05770397226904519+e*.001957681026011072)))))):(e=1/e,t=-.0010034668769627955+e*(-.024014982064857155+e*(-.1584135863906922+e*(-.4065671242119384+e*(-.4149833583594954+e*(-.09691175301595212+e*.04906224540690395))))),i=.001957681026011072+e*(.05770397226904519+e*(.5071377386143635+e*(1.9141558827442668+e*(3.4873958536072385+e*(3.0234982984646304+e*1)))))),t/i)}return Fl=n,Fl}/**
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
*/var Ol,hb;function AC(){if(hb)return Ol;hb=1;function n(e){var r,t,i;return e===0?-.029232972183027003:(e<0?r=-e:r=e,r<=1?(t=-.029232972183027003+e*(.14421626775719232+e*(-.14244039073863127+e*(.05428096940550536+e*(-.008505359768683364+e*(.0004311713426792973+e*0))))),i=1+e*(-1.5016935605448505+e*(.846973248876495+e*(-.22009515181499575+e*(.02558279715597587+e*(-.0010066679553914337+e*-8271935218912905e-22)))))):(e=1/e,t=0+e*(.0004311713426792973+e*(-.008505359768683364+e*(.05428096940550536+e*(-.14244039073863127+e*(.14421626775719232+e*-.029232972183027003))))),i=-8271935218912905e-22+e*(-.0010066679553914337+e*(.02558279715597587+e*(-.22009515181499575+e*(.846973248876495+e*(-1.5016935605448505+e*1)))))),t/i)}return Ol=n,Ol}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Dl,vb;function LC(){if(vb)return Dl;vb=1;var n=Ee(),e=Un(),r=wC(),t=SC(),i=AC(),o=.15896368026733398,u=.5281534194946289,a=.45201730728149414;function c(s,l,f){var d,p,h,m;if(s<e)return-n(s);if(l===0||f===0)return 0;if(p=0,s>2){if(s>=3){do s-=1,f-=1,p+=n(s);while(s>=3);f=s-2}return h=f*(s+1),m=r(f),p+=h*o+h*m,p}return s<1&&(p+=-n(s),f=l,l=s,s+=1),s<=1.5?(h=t(l),d=l*f,p+=d*u+d*h,p):(h=f*l,m=i(-f),p+=h*a+h*m,p)}return Dl=c,Dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Pl,mb;function kC(){if(mb)return Pl;mb=1;var n=Wn(),e=Zr(),r=_n(),t=ue(),i=LC();function o(u){return t(u)?NaN:u<0?u<-.5?n(1+u)-1:e(-r(u)+i(u+2,u+1,u)):u<2?e(i(u+1,u,u-1)):n(1+u)-1}return Pl=o,Pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xl,bb;function IC(){if(bb)return xl;bb=1;var n=kC();return xl=n,xl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Hl,gb;function CC(){if(gb)return Hl;gb=1;function n(e,r){var t,i,o,u;return t=-r,r=-r,i=e+1,o=1,a;function a(){return u=t/i,t*=r,o+=1,t/=o,i+=1,u}}return Hl=n,Hl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Bl,_b;function RC(){if(_b)return Bl;_b=1;var n=$C(),e=Qt(),r=IC(),t=CC();function i(o,u,a){var c,s,l,f,d;return s=r(o),l=(s+1)/o,f=n(u,o),s-=f,s/=o,d=t(o,u),f+=1,c=a?l:0,s=-f*e(d,{initialValue:(c-s)/f}),a&&(s=-s),[s,l]}return Bl=i,Bl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ul,yb;function Do(){if(yb)return Ul;yb=1;var n=11754943508222875e-54;return Ul=n,Ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wl,Eb;function MC(){if(Eb)return Wl;Eb=1;var n=ye(),e=Do(),r=Un(),t=1e6;function i(a,c,s){var l,f,d,p,h,m,v;if(l=typeof a.next=="function",v=l?a.next().value:a(),p=v[1],d=v[0],p===0&&(p=e),h=p,m=0,l===!0)do v=a.next().value,v&&(m=v[1]+v[0]*m,m===0&&(m=e),h=v[1]+v[0]/h,h===0&&(h=e),m=1/m,f=h*m,p*=f);while(n(f-1)>c&&--s);else do v=a(),v&&(m=v[1]+v[0]*m,m===0&&(m=e),h=v[1]+v[0]/h,h===0&&(h=e),m=1/m,f=h*m,p*=f);while(v&&n(f-1)>c&&--s);return d/p}function o(a,c,s){var l,f,d,p,h,m;if(l=typeof a.next=="function",m=l?a.next().value:a(),d=m[1],d===0&&(d=e),p=d,h=0,l===!0)do m=a.next().value,m&&(h=m[1]+m[0]*h,h===0&&(h=e),p=m[1]+m[0]/p,p===0&&(p=e),h=1/h,f=p*h,d*=f);while(m&&n(f-1)>c&&--s);else do m=a(),m&&(h=m[1]+m[0]*h,h===0&&(h=e),p=m[1]+m[0]/p,p===0&&(p=e),h=1/h,f=p*h,d*=f);while(m&&n(f-1)>c&&--s);return d}function u(a,c){var s,l,f;return l={},arguments.length>1&&(l=c),s=l.maxIter||t,f=l.tolerance||r,l.keep?o(a,f,s):i(a,f,s)}return Wl=u,Wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jl,$b;function NC(){if($b)return jl;$b=1;var n=ye(),e=Un(),r=Do(),t=1e6;function i(a,c,s){var l,f,d,p,h,m;m=a(),h=m[1],f=m[0],h===0&&(h=r),d=h,p=0;do m=a(),m&&(p=m[1]+m[0]*p,p===0&&(p=r),d=m[1]+m[0]/d,d===0&&(d=r),p=1/p,l=d*p,h*=l);while(m&&n(l-1)>c&&--s);return f/h}function o(a,c,s){var l,f,d,p,h;h=a(),p=h[1],p===0&&(p=r),f=p,d=0;do h=a(),h&&(d=h[1]+h[0]*d,d===0&&(d=r),f=h[1]+h[0]/f,f===0&&(f=r),d=1/d,l=f*d,p*=l);while(h&&n(l-1)>c&&--s);return p}function u(a,c){var s,l,f;return l={},arguments.length>1&&(l=c),f=l.tolerance||e,s=l.maxIter||t,l.keep?o(a,f,s):i(a,f,s)}return jl=u,jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gl,wb;function T9(){if(wb)return Gl;wb=1;var n=C9(),e=MC(),r=NC(),t;return n()?t=e:t=r,Gl=t,Gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Vl,Sb;function TC(){if(Sb)return Vl;Sb=1;function n(e,r){var t=r-e+1,i=e,o=0;return u;function u(){return o+=1,t+=2,[o*(i-o),t]}}return Vl=n,Vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Xl,Ab;function q9(){if(Ab)return Xl;Ab=1;var n=T9(),e=TC();function r(t,i){var o=e(t,i);return 1/(i-t+1+n(o))}return Xl=r,Xl}/**
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
*/var Yl,Lb;function qC(){if(Lb)return Yl;Lb=1;var n=Bn(),e=Wn(),r=ye(),t=Ne(),i=Ee(),o=DI(),u=Rr(),a=mr(),c=WI(),s=jI(),l=eC(),f=nC(),d=mC(),p=N9(),h=yC(),m=RC(),v=q9();function b(g,_,y,E){var I,L,R,A,S,$,w,k,C,F,T,B,O,x;switch(w=0,k=E,$=_<30&&_<=g+1&&g<a,$?(O=n(_),C=O===_,R=C?!1:r(O-_)===.5):(C=!1,R=!1),C&&g>.6?(k=!k,L=0):R&&g>.2?(k=!k,L=1):g<o&&_>1?L=6:g>1e3&&(_<g||r(_-50)/g<1)?(k=!k,L=7):g<.5?-.4/i(g)<_?L=2:L=3:g<1.1?g*.75<_?L=2:L=3:(S=!1,y&&_>20&&(F=r((g-_)/_),_>200?20/_>F*F&&(S=!0):F<.4&&(S=!0)),S?L=5:g-1/(3*g)<_?L=2:(L=4,k=!k)),L){case 0:w=s(_,g),y===!1&&(w*=e(_));break;case 1:w=l(_,g),y===!1&&(w*=e(_));break;case 2:w=y?h(_,g):f(_,g),w!==0&&(A=0,I=!1,k&&(A=y?1:e(_),y||w>=1||u*w>A?(A/=w,y||_<1||u/_>A?(A*=-_,I=!0):A=0):A=0),w*=p(_,g,A)/_,I&&(k=!1,w=-w));break;case 3:k=!k,T=m(_,g,k),w=T[0],x=T[1],k=!1,y&&(w/=x);break;case 4:w=y?h(_,g):f(_,g),w!==0&&(w*=v(_,g));break;case 5:w=d(_,g),g>=_&&(k=!k);break;case 6:w=y?t(g,_)/e(_+1):t(g,_)/_,w*=1-_*g/(_+1);break;case 7:w=y?h(_,g):f(_,g),w/=g,w!==0&&(w*=c(_,g));break}return y&&w>1&&(w=1),k&&(B=y?1:e(_),w=B-w),w}return Yl=b,Yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Kl,kb;function FC(){if(kb)return Kl;kb=1;var n=it(),e=Me(),r=Ee(),t=No(),i=mr(),o=Re(),u=To(),a=qC(),c=N9(),s=q9();function l(f,d,p,h){var m,v,b,g;return f<0||d<=0?NaN:(m=p===void 0?!0:p,b=h,d>=u&&!m?(b&&d*4<f?(g=d*r(f)-f,g+=r(s(d,f))):!b&&d>4*f?(g=d*r(f)-f,v=0,g+=r(c(d,f,v)/d)):(g=a(f,d,!0,b),g===0?b?(g=1+1/(12*d)+1/(288*d*d),g=r(g)-d+(d-.5)*r(d),g+=r(t)):(g=d*r(f)-f,v=0,g+=r(c(d,f,v)/d)):g=r(g)+n(d)),g>i?o:e(g)):a(f,d,m,b))}return Kl=l,Kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jl,Ib;function F9(){if(Ib)return Jl;Ib=1;var n=FC();return Jl=n,Jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var zl,Cb;function OC(){if(Cb)return zl;Cb=1;var n=Me(),e=Ne(),r=Ee(),t=mr(),i=ot();function o(u,a){var c,s;return s=u*r(a),a>=1?s<t&&-a>i?c=e(a,u)*n(-a):u>=1?c=e(a/n(a/u),u):c=n(s-a):s>i?c=e(a,u)*n(-a):a/u<t?c=e(a/n(a/u),u):c=n(s-a),c}return zl=o,zl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ql,Rb;function DC(){if(Rb)return Ql;Rb=1;var n=Oo(),e=it(),r=Wn(),t=_n(),i=_e(),o=ye(),u=Me(),a=Ne(),c=Cr(),s=hr(),l=Ee(),f=mr(),d=ot(),p=zt(),h=tt();function m(v,b){var g,_,y,E,I,L,R;return y=v+p-.5,R=(b-v-p+.5)/y,v<1?b<=d?u(v*l(b)-b-e(v)):a(b,v)*u(-b)/r(v):(o(R*R*v)<=100&&v>150?(g=v*(t(R)-R)+b*(.5-p)/y,g=u(g)):(E=v*l(b/y),I=v-b,s(E,I)<=d||c(E,I)>=f?(_=I/v,s(E,I)/2>d&&c(E,I)/2<f?(L=a(b/y,v/2)*u(I/2),g=L*L):s(E,I)/4>d&&c(E,I)/4<f&&b>v?(L=a(b/y,v/4)*u(I/4),g=L*L,g*=g):_>d&&_<f?g=a(b*u(_)/y,v):g=u(E+I)):g=a(b/y,v)*u(I)),g*=i(y/h)/n(v),g)}return Ql=m,Ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Zl,Mb;function PC(){if(Mb)return Zl;Mb=1;var n=a2(),e=I9(),r=F9(),t=_n(),i=ye(),o=Ne(),u=Ee(),a=Ir(),c=Un(),s=OC(),l=DC(),f=new Array(30);function d(p,h,m,v,b,g,_){var y,E,I,L,R,A,S,$,w,k,C,F,T,B,O,x,q,Q;if(A=h-1,q=p+A/2,v<.35?k=t(-v):k=u(m),Q=-q*k,F=l(h,Q),F<=a)return b;for(_?(y=F/n(p,h),y/=o(q,h)):y=s(h,Q)/o(q,h),y*=g,f[0]=1,T=r(Q,h,!0,!0),T/=F,L=b+y*T,I=1,S=k/2,S*=S,$=1,C=4*q*q,R=h,O=1;O<f.length;++O){for(I+=2,f[O]=0,w=h-O,E=3,B=1;B<O;++B)w=B*h-O,f[O]+=w*f[O-B]/e(E),E+=2;if(f[O]/=O,f[O]+=A/e(I),T=(R*(R+1)*T+(Q+R+1)*$)/C,$*=S,R+=2,x=y*f[O]*T,L+=x,x>1){if(i(x)<i(c*L))break}else if(i(x/c)<i(L))break}return L}return Zl=d,Zl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ef,Nb;function xC(){if(Nb)return ef;Nb=1;function n(e,r,t){var i,o;if(t===0)return 1;for(i=1,o=0;o<t;o++)i*=(e+o)/(r+o);return i}return ef=n,ef}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nf,Tb;function HC(){if(Tb)return nf;Tb=1;var n=ye(),e=Cr();function r(t,i){return e(n(t),n(i))}return nf=r,nf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rf,qb;function BC(){if(qb)return rf;qb=1;var n=HC();return rf=n,rf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tf,Fb;function UC(){if(Fb)return tf;Fb=1;var n=ye(),e=hr();function r(t,i){return e(n(t),n(i))}return tf=r,tf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var of,Ob;function WC(){if(Ob)return of;Ob=1;var n=UC();return of=n,of}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var uf,Db;function c2(){if(Db)return uf;Db=1;var n=Oo(),e=BC(),r=WC(),t=Zr(),i=_n(),o=_e(),u=ye(),a=Me(),c=Ne(),s=hr(),l=Ee(),f=mr(),d=ot(),p=zt(),h=tt();function m(v,b,g,_,y){var E,I,L,R,A,S,$,w,k,C,F,T,B,O;if(!y)return c(g,v)*c(_,b);if(B=v+b,R=v+p-.5,A=b+p-.5,S=B+p-.5,E=n(B),E/=n(v)*n(b),E*=o(A/h),E*=o(R/S),$=(g*b-_*R)/R,w=(_*v-g*A)/A,r($,w)<.2)if($*w>0||s(v,b)<1)u($)<.1?E*=a(v*i($)):E*=c(g*S/R,v),u(w)<.1?E*=a(b*i(w)):E*=c(_*S/A,b);else if(e($,w)<.5)I=v<b,L=b/v,I&&L*w<.1||!I&&$/L>.1?(k=t(L*i(w)),k=$+k+k*$,k=v*i(k),E*=a(k)):(k=t(i($)/L),k=w+k+k*w,k=b*i(k),E*=a(k));else if(u($)<u(w))if(O=v*i($)+b*l(_*S/A),O<=d||O>=f){if(O+=l(E),O>=f)return NaN;E=a(O)}else E*=a(O);else if(O=b*i(w)+v*l(g*S/R),O<=d||O>=f){if(O+=l(E),O>=f)return NaN;E=a(O)}else E*=a(O);else if(F=g*S/R,T=_*S/A,$=v*l(F),w=b*l(T),$>=f||$<=d||w>=f||w<=d)if(v<b)if(C=c(T,b/v),k=v*(l(F)+l(C)),k<f&&k>d)E*=c(C*F,v);else{if(w+=$+l(E),w>=f)return NaN;E=a(w)}else if(C=c(F,v/b),k=(l(C)+l(T))*b,k<f&&k>d)E*=c(C*T,b);else{if(w+=$+l(E),w>=f)return NaN;E=a(w)}else E*=c(F,v)*c(T,b);return E}return uf=m,uf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var af,Pb;function jC(){if(Pb)return af;Pb=1;var n=T9(),e=c2(),r={keep:!0,maxIter:1e3};function t(o,u,a,c){var s=0;return l;function l(){var f,d,p;return d=(o+s-1)*(o+u+s-1)*s*(u-s)*a*a,f=o+2*s-1,d/=f*f,p=s,p+=s*(u-s)*a/(o+2*s-1),p+=(o+s)*(o*c-u*a+1+s*(2-a))/(o+2*s+1),s+=1,[d,p]}}function i(o,u,a,c,s,l){var f,d,p;return f=e(o,u,a,c,s),l&&(l[1]=f),f===0?f:(p=t(o,u,a,c),d=n(p,r),f/d)}return af=i,af}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sf,xb;function GC(){if(xb)return sf;xb=1;var n=9007199254740991;return sf=n,sf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cf,Hb;function VC(){if(Hb)return cf;Hb=1;function n(e,r){var t=0,i;if(e===0)return r;if(r===0)return e;for(;(e&1)===0&&(r&1)===0;)e>>>=1,r>>>=1,t+=1;for(;(e&1)===0;)e>>>=1;for(;r;){for(;(r&1)===0;)r>>>=1;e>r&&(i=r,r=e,e=i),r-=e}return e<<t}return cf=n,cf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lf,Bb;function XC(){if(Bb)return lf;Bb=1;function n(e,r){var t=1,i;if(e===0)return r;if(r===0)return e;for(;e%2===0&&r%2===0;)e/=2,r/=2,t*=2;for(;e%2===0;)e/=2;for(;r;){for(;r%2===0;)r/=2;e>r&&(i=r,r=e,e=i),r-=e}return t*e}return lf=n,lf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ff,Ub;function YC(){if(Ub)return ff;Ub=1;var n=ue(),e=rt(),r=Re(),t=rn(),i=w9(),o=VC(),u=XC();function a(c,s){return n(c)||n(s)?NaN:c===r||s===r||c===t||s===t?NaN:e(c)&&e(s)?(c<0&&(c=-c),s<0&&(s=-s),c<=i&&s<=i?o(c,s):u(c,s)):NaN}return ff=a,ff}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var df,Wb;function KC(){if(Wb)return df;Wb=1;var n=YC();return df=n,df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pf,jb;function JC(){if(jb)return pf;jb=1;var n=GC(),e=Re(),r=rt(),t=ue(),i=o2(),o=Bn(),u=KC();function a(c,s){var l,f,d,p,h,m,v;if(t(c)||t(s))return NaN;if(!r(c)||!r(s))return NaN;if(s<0||(f=1,c<0&&(c=-c+s-1,i(s)&&(f*=-1)),s>c))return 0;if(s===0||s===c)return f;if(s===1||s===c-1)return f*c;for(c-s<s&&(s=c-s),v=o(n/c),l=1,h=1;h<=s&&!(l>v);h++)l*=c,l/=h,c-=1;return h>s?f*l:(d=a(c,s-h+1),d===e?f*d:(p=a(s,s-h+1),m=u(d,p),d/=m,p/=m,l/=p,f*l*d))}return pf=a,pf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hf,Gb;function zC(){if(Gb)return hf;Gb=1;var n=JC();return hf=n,hf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var vf,Vb;function QC(){if(Vb)return vf;Vb=1;var n=zC(),e=Bn(),r=Ne(),t=Ir();function i(o,u,a,c){var s,l,f,d,p;if(l=r(a,o),l>t)for(d=l,p=e(o-1);p>u;p--)d*=(p+1)*c/((o-p)*a),l+=d;else if(f=e(o*a),f<=u+1&&(f=e(u+2)),l=r(a,f)*r(c,o-f),l*=n(e(o),e(f)),l===0)for(p=f-1;p>u;p--)l+=r(a,p)*r(c,o-p),l*=n(e(o),e(p));else{for(d=l,s=l,p=f-1;p>u;p--)d*=(p+1)*c/((o-p)*a),l+=d;for(d=s,p=f+1;p<=o;p++)d*=(o-p+1)*a/(p*c),l+=d}return l}return vf=i,vf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var mf,Xb;function ZC(){if(Xb)return mf;Xb=1;var n=c2();function e(r,t,i,o,u,a,c){var s,l,f,d;if(s=n(r,t,i,o,a),c&&(c[1]=s),s/=r,s===0)return s;for(f=1,l=1,d=0;d<u-1;++d)l*=(r+t+d)*i/(r+d+1),f+=l;return s*=f,s}return mf=e,mf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bf,Yb;function eR(){if(Yb)return bf;Yb=1;var n=Oo(),e=Qt(),r=_n(),t=_e(),i=Me(),o=Ne(),u=Ee(),a=Ir(),c=mr(),s=ot(),l=zt(),f=tt(),d={maxTerms:100};function p(m,v,b,g){var _=1-v,y=1;return E;function E(){var I=g/m;return m+=1,g*=_*b/y,y+=1,_+=1,I}}function h(m,v,b,g,_,y,E){var I,L,R,A,S,$,w,k;return _?(w=m+v,L=m+l-.5,R=v+l-.5,A=w+l-.5,I=n(w)/(n(m)*n(v)),S=u(A/R)*(v-.5),$=u(b*A/L)*m,S>s&&S<c&&$>s&&$<c?(m*v<R*10?I*=i((v-.5)*r(m/R)):I*=o(A/R,v-.5),I*=o(b*A/L,m),I*=t(L/f),y&&(y[1]=I*o(E,v))):(I=u(I)+S+$+(u(L)-1)/2,y&&(y[1]=i(I+v*u(E))),I=i(I))):I=o(b,m),I<a?g:(k=p(m,v,b,I),d.initialValue=g,e(k,d))}return bf=h,bf}var gf,Kb;function O9(){if(Kb)return gf;Kb=1;var n=ue(),e=Zr(),r=Bn(),t=_n(),i=n2(),o=Mo(),u=_e(),a=Me(),c=Ne(),s=Cr(),l=hr(),f=Rr(),d=Ir(),p=w9(),h=u2(),m=vr(),v=PC(),b=xC(),g=c2(),_=jC(),y=QC(),E=ZC(),I=eR(),L=1/m;function R(A,S,$,w,k,C,F,T){var B,O,x,q,Q,W,Y,ne,ie,H,j,G;if(G=1-A,Y=T,ne=T+F,C[ne]=-1,n(A)||A<0||A>1)return C[Y]=NaN,C[ne]=NaN,C;if(w){if(S<0||$<0)return C[Y]=NaN,C[ne]=NaN,C;if(S===0){if($===0)return C[Y]=NaN,C[ne]=NaN,C;if($>0)return C[Y]=k?0:1,C}else if($===0&&S>0)return C[Y]=k?1:0,C}else if(S<=0||$<=0)return C[Y]=NaN,C[ne]=NaN,C;return A===0?(S===1?C[ne]=1:C[ne]=S<1?f/2:d*2,k?(C[Y]=w?1:o(S,$),C):(C[Y]=0,C)):A===1?($===1?C[ne]=1:C[ne]=$<1?f/2:d*2,k?C[Y]=0:C[Y]=w?1:o(S,$),C):S===.5&&$===.5?(C[ne]=L*u(G*A),j=i(u(k?G:A)),j/=h,w||(j*=m),C[Y]=j,C):(S===1&&(W=$,$=S,S=W,W=G,G=A,A=W,k=!k),$===1?S===1?(C[Y]=k?G:A,C[ne]=1,C):(C[ne]=S*c(A,S-1),G<.5?j=k?-e(S*t(-G)):a(S*t(-G)):j=k?-(c(A,S)-1):c(A,S),w||(j/=S),C[Y]=j,C):(l(S,$)<=1?(A>.5&&(W=$,$=S,S=W,W=G,G=A,A=W,k=!k),s(S,$)<=1?S>=l(.2,$)||c(A,S)<=.9?k?(x=-(w?1:o(S,$)),k=!1,x=-I(S,$,A,x,w,C,G)):x=I(S,$,A,0,w,C,G):(W=$,$=S,S=W,W=G,G=A,A=W,k=!k,G>=.3?k?(x=-(w?1:o(S,$)),k=!1,x=-I(S,$,A,x,w,C,G)):x=I(S,$,A,0,w,C,G):(w?O=1:O=b(S+$,S,20),x=E(S,$,A,G,20,w,C),k?(x-=w?1:o(S,$),k=!1,x=-v(S+20,$,A,G,x,O,w)):x=v(S+20,$,A,G,x,O,w))):$<=1||A<.1&&c($*A,S)<=.7?k?(x=-(w?1:o(S,$)),k=!1,x=-I(S,$,A,x,w,C,G)):x=I(S,$,A,0,w,C,G):(W=$,$=S,S=W,W=G,G=A,A=W,k=!k,G>=.3?k?(x=-(w?1:o(S,$)),k=!1,x=-I(S,$,A,x,w,C,G)):x=I(S,$,A,0,w,C,G):S>=15?k?(x=-(w?1:o(S,$)),k=!1,x=-v(S,$,A,G,x,1,w)):x=v(S,$,A,G,0,1,w):(w?O=1:O=b(S+$,S,20),x=E(S,$,A,G,20,w,C),k?(x-=w?1:o(S,$),k=!1,x=-v(S+20,$,A,G,x,O,w)):x=v(S+20,$,A,G,x,O,w)))):(S<$?B=S-(S+$)*A:B=(S+$)*G-$,B<0&&(W=$,$=S,S=W,W=G,G=A,A=W,k=!k),$<40?r(S)===S&&r($)===$&&S<p-100?(ie=S-1,H=$+ie,x=y(H,ie,A,G),w||(x*=o(S,$))):$*A<=.7?k?(x=-(w?1:o(S,$)),k=!1,x=-I(S,$,A,x,w,C,G)):x=I(S,$,A,0,w,C,G):S>15?(H=r($),H===$&&(H-=1),q=$-H,w?O=1:O=b(S+q,q,H),x=E(q,S,G,A,H,w),x=v(S,q,A,G,x,1,w),x/=O):w?(H=r($),q=$-H,q<=0&&(H-=1,q+=1),x=E(q,S,G,A,H,w),x+=E(S,q,A,G,20,w),k&&(x-=1),x=v(S+20,q,A,G,x,1,w),k&&(x=-x,k=!1)):x=_(S,$,A,G,w,C):x=_(S,$,A,G,w,C)),C[ne]<0&&(C[ne]=g(S,$,A,G,!0)),Q=G*A,C[ne]!==0&&(f*Q<C[ne]?C[ne]=f/2:C[ne]/=Q),C[Y]=k?(w?1:o(S,$))-x:x,C))}return gf=R,gf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _f,Jb;function nR(){if(Jb)return _f;Jb=1;var n=O9();function e(r,t,i,o,u){return n(r,t,i,o,u,[0,0],1,0)}return _f=e,_f}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yf,zb;function D9(){if(zb)return yf;zb=1;var n=nn(),e=nR(),r=O9();return n(e,"assign",r),yf=e,yf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ef,Qb;function rR(){if(Qb)return Ef;Qb=1;var n=D9().assign;function e(r,t,i,o,u){var a=[0,0];return o=o!==!1,u=u===!0,n(r,t,i,o,u,a,1,0),a[0]}return Ef=e,Ef}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $f,Zb;function Zt(){if(Zb)return $f;Zb=1;var n=rR();return $f=n,$f}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wf,eg;function tR(){if(eg)return wf;eg=1;var n=Zt(),e=ue();function r(t,i,o){return e(t)||e(i)||e(o)||i<=0||o<=0?NaN:t<=0?0:t>=1?1:n(t,i,o)}return wf=r,wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sf,ng;function iR(){if(ng)return Sf;ng=1;function n(e){return r;function r(){return e}}return Sf=n,Sf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Af,rg;function yn(){if(rg)return Af;rg=1;var n=iR();return Af=n,Af}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lf,tg;function oR(){if(tg)return Lf;tg=1;var n=yn(),e=Zt(),r=ue();function t(i,o){if(r(i)||r(o)||i<=0||o<=0)return n(NaN);return u;function u(a){return r(a)?NaN:a<=0?0:a>=1?1:e(a,i,o)}}return Lf=t,Lf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kf,ig;function uR(){if(ig)return kf;ig=1;var n=nn(),e=tR(),r=oR();return n(e,"factory",r),kf=e,kf}var aR=uR();const sR=Hn(aR);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var If,og;function P9(){if(og)return If;og=1;var n=.9189385332046728;return If=n,If}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Cf,ug;function cR(){if(ug)return Cf;ug=1;var n=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],e=n.length;function r(t){var i,o,u,a,c;if(t<-1.1||t>1.1)return NaN;for(u=0,a=0,i=2*t,c=0;c<e;c++)o=u,u=a,a=i*u-o+n[c];return(a-o)*.5}return Cf=r,Cf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Rf,ag;function lR(){if(ag)return Rf;ag=1;var n=Ne(),e=cR(),r=9490626562425156e-8,t=3745194030963158e291;function i(o){return o<10?NaN:o>=t?0:o<r?e(2*n(10/o,2)-1)/o:1/(o*12)}return Rf=i,Rf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Mf,sg;function fR(){if(sg)return Mf;sg=1;var n=it(),e=_n(),r=Wn(),t=Cr(),i=hr(),o=Ee(),u=P9(),a=rn(),c=Re(),s=lR();function l(f,d){var p,h,m;return h=i(f,d),m=t(f,d),h<0?NaN:h===0?c:m===c?a:h>=10?(p=s(h)+s(m)-s(h+m),-.5*o(m)+u+p+(h-.5)*o(h/(h+m))+m*e(-h/(h+m))):m>=10?(p=s(m)-s(h+m),n(h)+p+h-h*o(h+m)+(m-.5)*e(-h/(h+m))):o(r(h)*(r(m)/r(h+m)))}return Mf=l,Mf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nf,cg;function x9(){if(cg)return Nf;cg=1;var n=fR();return Nf=n,Nf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tf,lg;function dR(){if(lg)return Tf;lg=1;var n=x9(),e=ue(),r=_n(),t=Me(),i=Ee(),o=Re();function u(a,c,s){var l;return e(a)||e(c)||e(s)||c<=0||s<=0?NaN:a<0||a>1?0:a===0?c<1?o:c>1?0:s:a===1?s<1?o:s>1?0:c:(l=(c-1)*i(a),l+=(s-1)*r(-a),l-=n(c,s),t(l))}return Tf=u,Tf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qf,fg;function pR(){if(fg)return qf;fg=1;var n=yn(),e=x9(),r=ue(),t=_n(),i=Me(),o=Ee(),u=Re();function a(c,s){var l;if(r(c)||r(s)||c<=0||s<=0)return n(NaN);return l=e(c,s),f;function f(d){var p;return r(d)?NaN:d<0||d>1?0:d===0?c<1?u:c>1?0:s:d===1?s<1?u:s>1?0:c:(p=-l,p+=(c-1)*o(d),p+=(s-1)*t(-d),i(p))}}return qf=a,qf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ff,dg;function hR(){if(dg)return Ff;dg=1;var n=nn(),e=dR(),r=pR();return n(e,"factory",r),Ff=e,Ff}var vR=hR();const mR=Hn(vR);/**
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
*/var Of,pg;function bR(){if(pg)return Of;pg=1;function n(e){var r,t,i;return e===0?-.0005087819496582806:(e<0?r=-e:r=e,r<=1?(t=-.0005087819496582806+e*(-.008368748197417368+e*(.03348066254097446+e*(-.012692614766297404+e*(-.03656379714117627+e*(.02198786811111689+e*(.008226878746769157+e*(-.005387729650712429+e*(0+e*0)))))))),i=1+e*(-.9700050433032906+e*(-1.5657455823417585+e*(1.5622155839842302+e*(.662328840472003+e*(-.7122890234154284+e*(-.05273963823400997+e*(.07952836873415717+e*(-.0023339375937419+e*.0008862163904564247))))))))):(e=1/e,t=0+e*(0+e*(-.005387729650712429+e*(.008226878746769157+e*(.02198786811111689+e*(-.03656379714117627+e*(-.012692614766297404+e*(.03348066254097446+e*(-.008368748197417368+e*-.0005087819496582806)))))))),i=.0008862163904564247+e*(-.0023339375937419+e*(.07952836873415717+e*(-.05273963823400997+e*(-.7122890234154284+e*(.662328840472003+e*(1.5622155839842302+e*(-1.5657455823417585+e*(-.9700050433032906+e*1))))))))),t/i)}return Of=n,Of}/**
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
*/var Df,hg;function gR(){if(hg)return Df;hg=1;function n(e){var r,t,i;return e===0?-.20243350835593876:(e<0?r=-e:r=e,r<=1?(t=-.20243350835593876+e*(.10526468069939171+e*(8.3705032834312+e*(17.644729840837403+e*(-18.851064805871424+e*(-44.6382324441787+e*(17.445385985570866+e*(21.12946554483405+e*-3.6719225470772936))))))),i=1+e*(6.242641248542475+e*(3.971343795334387+e*(-28.66081804998+e*(-20.14326346804852+e*(48.560921310873994+e*(10.826866735546016+e*(-22.643693341313973+e*1.7211476576120028)))))))):(e=1/e,t=-3.6719225470772936+e*(21.12946554483405+e*(17.445385985570866+e*(-44.6382324441787+e*(-18.851064805871424+e*(17.644729840837403+e*(8.3705032834312+e*(.10526468069939171+e*-.20243350835593876))))))),i=1.7211476576120028+e*(-22.643693341313973+e*(10.826866735546016+e*(48.560921310873994+e*(-20.14326346804852+e*(-28.66081804998+e*(3.971343795334387+e*(6.242641248542475+e*1)))))))),t/i)}return Df=n,Df}/**
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
*/var Pf,vg;function _R(){if(vg)return Pf;vg=1;function n(e){var r,t,i;return e===0?-.1311027816799519:(e<0?r=-e:r=e,r<=1?(t=-.1311027816799519+e*(-.16379404719331705+e*(.11703015634199525+e*(.38707973897260434+e*(.3377855389120359+e*(.14286953440815717+e*(.029015791000532906+e*(.0021455899538880526+e*(-6794655751811263e-22+e*(28522533178221704e-24+e*-681149956853777e-24))))))))),i=1+e*(3.4662540724256723+e*(5.381683457070069+e*(4.778465929458438+e*(2.5930192162362027+e*(.848854343457902+e*(.15226433829533179+e*(.011059242293464892+e*(0+e*(0+e*0)))))))))):(e=1/e,t=-681149956853777e-24+e*(28522533178221704e-24+e*(-6794655751811263e-22+e*(.0021455899538880526+e*(.029015791000532906+e*(.14286953440815717+e*(.3377855389120359+e*(.38707973897260434+e*(.11703015634199525+e*(-.16379404719331705+e*-.1311027816799519))))))))),i=0+e*(0+e*(0+e*(.011059242293464892+e*(.15226433829533179+e*(.848854343457902+e*(2.5930192162362027+e*(4.778465929458438+e*(5.381683457070069+e*(3.4662540724256723+e*1)))))))))),t/i)}return Pf=n,Pf}/**
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
*/var xf,mg;function yR(){if(mg)return xf;mg=1;function n(e){var r,t,i;return e===0?-.0350353787183178:(e<0?r=-e:r=e,r<=1?(t=-.0350353787183178+e*(-.0022242652921344794+e*(.018557330651423107+e*(.009508047013259196+e*(.0018712349281955923+e*(.00015754461742496055+e*(460469890584318e-20+e*(-2304047769118826e-25+e*26633922742578204e-28))))))),i=1+e*(1.3653349817554064+e*(.7620591645536234+e*(.22009110576413124+e*(.03415891436709477+e*(.00263861676657016+e*(7646752923027944e-20+e*(0+e*0)))))))):(e=1/e,t=26633922742578204e-28+e*(-2304047769118826e-25+e*(460469890584318e-20+e*(.00015754461742496055+e*(.0018712349281955923+e*(.009508047013259196+e*(.018557330651423107+e*(-.0022242652921344794+e*-.0350353787183178))))))),i=0+e*(0+e*(7646752923027944e-20+e*(.00263861676657016+e*(.03415891436709477+e*(.22009110576413124+e*(.7620591645536234+e*(1.3653349817554064+e*1)))))))),t/i)}return xf=n,xf}/**
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
*/var Hf,bg;function ER(){if(bg)return Hf;bg=1;function n(e){var r,t,i;return e===0?-.016743100507663373:(e<0?r=-e:r=e,r<=1?(t=-.016743100507663373+e*(-.0011295143874558028+e*(.001056288621524929+e*(.00020938631748758808+e*(14962478375834237e-21+e*(44969678992770644e-23+e*(4625961635228786e-24+e*(-2811287356288318e-29+e*9905570997331033e-32))))))),i=1+e*(.5914293448864175+e*(.1381518657490833+e*(.016074608709367652+e*(.0009640118070051656+e*(27533547476472603e-21+e*(282243172016108e-21+e*(0+e*0)))))))):(e=1/e,t=9905570997331033e-32+e*(-2811287356288318e-29+e*(4625961635228786e-24+e*(44969678992770644e-23+e*(14962478375834237e-21+e*(.00020938631748758808+e*(.001056288621524929+e*(-.0011295143874558028+e*-.016743100507663373))))))),i=0+e*(0+e*(282243172016108e-21+e*(27533547476472603e-21+e*(.0009640118070051656+e*(.016074608709367652+e*(.1381518657490833+e*(.5914293448864175+e*1)))))))),t/i)}return Hf=n,Hf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Bf,gg;function $R(){if(gg)return Bf;gg=1;var n=ue(),e=_e(),r=Ee(),t=Re(),i=rn(),o=bR(),u=gR(),a=_R(),c=yR(),s=ER(),l=.08913147449493408,f=2.249481201171875,d=.807220458984375,p=.9399557113647461,h=.9836282730102539;function m(v){var b,g,_,y,E;return n(v)?NaN:v===0?t:v===2?i:v===1?0:v>2||v<0?NaN:(v>1?(b=-1,_=2-v):(b=1,_=v),v=1-_,v<=.5?(y=v*(v+10),E=o(v),b*(y*l+y*E)):_>=.25?(y=e(-2*r(_)),_-=.25,E=u(_),b*(y/(f+E))):(_=e(-r(_)),_<3?(g=_-1.125,E=a(g),b*(d*_+E*_)):_<6?(g=_-3,E=c(g),b*(p*_+E*_)):(g=_-6,E=s(g),b*(h*_+E*_))))}return Bf=m,Bf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uf,_g;function ei(){if(_g)return Uf;_g=1;var n=$R();return Uf=n,Uf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Wf,yg;function wR(){if(yg)return Wf;yg=1;var n=ue(),e=n2(),r=_e(),t=m9(),i=6123233995736766e-32;function o(u){var a;return n(u)?NaN:u<-1||u>1?NaN:u>.5?2*e(r(.5-.5*u)):(a=t-e(u),a+=i,a+=t,a)}return Wf=o,Wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jf,Eg;function SR(){if(Eg)return jf;Eg=1;var n=wR();return jf=n,jf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gf,$g;function l2(){if($g)return Gf;$g=1;var n=1.4142135623730951;return Gf=n,Gf}/**
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
*/var Vf,wg;function AR(){if(wg)return Vf;wg=1;function n(e){return e===0?.16666666666666666:.16666666666666666+e*.16666666666666666}return Vf=n,Vf}/**
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
*/var Xf,Sg;function LR(){if(Sg)return Xf;Sg=1;function n(e){return e===0?.058333333333333334:.058333333333333334+e*(.06666666666666667+e*.008333333333333333)}return Xf=n,Xf}/**
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
*/var Yf,Ag;function kR(){if(Ag)return Yf;Ag=1;function n(e){return e===0?.0251984126984127:.0251984126984127+e*(.026785714285714284+e*(.0017857142857142857+e*.0001984126984126984))}return Yf=n,Yf}/**
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
*/var Kf,Lg;function IR(){if(Lg)return Kf;Lg=1;function n(e){return e===0?.012039792768959435:.012039792768959435+e*(.010559964726631394+e*(-.0011078042328042327+e*(.0003747795414462081+e*27557319223985893e-22)))}return Kf=n,Kf}/**
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
*/var Jf,kg;function CR(){if(kg)return Jf;kg=1;function n(e){return e===0?.003837005972422639:.003837005972422639+e*(.00610392115600449+e*(-.0016095979637646305+e*(.0005945867404200738+e*(-6270542728876062e-20+e*2505210838544172e-23))))}return Jf=n,Jf}/**
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
*/var zf,Ig;function RR(){if(Ig)return zf;Ig=1;function n(e){return e===0?.0032177478835464946:.0032177478835464946+e*(.0010898206731540065+e*(-.0012579159844784845+e*(.0006908420797309686+e*(-.00016376804137220805+e*(154012654012654e-19+e*16059043836821613e-26)))))}return zf=n,zf}/**
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
*/var Qf,Cg;function MR(){if(Cg)return Qf;Cg=1;function n(e){return e===0?.001743826229834001:.001743826229834001+e*(3353097688001788e-20+e*(-.0007624513544032393+e*(.0006451304695145635+e*(-.000249472580470431+e*(49255746366361444e-21+e*(-39851014346715405e-22+e*7647163731819816e-28))))))}return Qf=n,Qf}/**
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
*/var Zf,Rg;function NR(){if(Rg)return Zf;Rg=1;function n(e){return e===0?.0009647274732138864:.0009647274732138864+e*(-.0003110108632631878+e*(-.00036307660358786886+e*(.0005140660578834113+e*(-.00029133414466938067+e*(9086710793521991e-20+e*(-15303004486655377e-21+e*(10914179173496788e-22+e*28114572543455206e-31)))))))}return Zf=n,Zf}/**
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
*/var ed,Mg;function TR(){if(Mg)return ed;Mg=1;function n(e){return e===0?.0005422926281312969:.0005422926281312969+e*(-.0003694266780000966+e*(-.00010230378073700413+e*(.00035764655430568635+e*(-.00028690924218514614+e*(.00012645437628698076+e*(-33202652391372056e-21+e*(4890304529197534e-21+e*(-3123956959982987e-22+e*822063524662433e-32))))))))}return ed=n,ed}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var nd,Ng;function qR(){if(Ng)return nd;Ng=1;var n=a2(),e=br(),r=_e(),t=vr(),i=AR(),o=LR(),u=kR(),a=IR(),c=CR(),s=RR(),l=MR(),f=NR(),d=TR(),p=0,h=[1,0,0,0,0,0,0,0,0,0];function m(v,b){var g,_;return _=n(v/2,.5)*r(v*t)*(b-.5),g=1/v,h[1]=i(g),h[2]=o(g),h[3]=u(g),h[4]=a(g),h[5]=c(g),h[6]=s(g),h[7]=l(g),h[8]=f(g),h[9]=d(g),p+_*e(h,_*_)}return nd=m,nd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var rd,Tg;function FR(){if(Tg)return rd;Tg=1;var n=a2(),e=br(),r=_e(),t=Ne(),i=vr(),o=[0,0,0,0,0,0,0];function u(a,c){var s,l,f,d,p,h,m,v;return v=n(a/2,.5)*r(a*i)*c,d=a+2,p=a+4,h=a+6,o[0]=1,o[1]=-(a+1)/(2*d),d*=a+2,o[2]=-a*(a+1)*(a+3)/(8*d*p),d*=a+2,o[3]=-a*(a+1)*(a+5)*((3*a+7)*a-2)/(48*d*p*h),d*=a+2,p*=a+4,o[4]=-a*(a+1)*(a+7)*(((((15*a+154)*a+465)*a+286)*a-336)*a+64)/(384*d*p*h*(a+8)),d*=a+2,o[5]=-a*(a+1)*(a+3)*(a+9)*((((((35*a+452)*a+1573)*a+600)*a-2020)*a+928)*a-128)/(1280*d*p*h*(a+8)*(a+10)),d*=a+2,p*=a+4,h*=a+6,o[6]=-a*(a+1)*(a+11)*(((((((((((945*a+31506)*a+425858)*a+2980236)*a+11266745)*a+20675018)*a+7747124)*a-22574632)*a-8565600)*a+18108416)*a-7099392)*a+884736)/(46080*d*p*h*(a+8)*(a+10)*(a+12)),m=r(a),f=t(m*v,1/a),l=f*f,s=e(o,l),s*=m,s/=f,-s}return rd=u,rd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var td,qg;function OR(){if(qg)return td;qg=1;var n=ei(),e=Zr(),r=_e(),t=Ne(),i=u2(),o=l2();function u(a,c){var s,l,f,d,p,h,m;return a>1e20?-n(2*c)*o:(s=1/(a-.5),l=48/(s*s),f=((20700*s/l-98)*s-16)*s+96.36,d=((94.5/(l+f)-3)/l+1)*r(s*i)*a,m=t(d*2*c,2/a),m>.05+s?(h=-n(2*c)*o,m=h*h,a<5&&(f+=.3*(a-4.5)*(h+.6)),f+=(((.05*d*h-5)*h-7)*h-2)*h+l,m=(((((.4*m+6.3)*m+36)*m+94.5)/f-m-3)/l+1)*h,m=e(s*m*m)):m=((1/(((a+6)/(a*m)-.089*d-.822)*(a+2)*3)+.5/(a+4))*m-1)*(a+1)/(a+2)+1/m,p=r(a*m),-p)}return td=u,td}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var id,Fg;function DR(){if(Fg)return id;Fg=1;var n=ei(),e=Bn(),r=nt(),t=L9(),i=SR(),o=_e(),u=ye(),a=s2(),c=Ne(),s=Jt(),l=l2(),f=vr(),d=qR(),p=FR(),h=OR(),m=268435456,v=1/3,b=106/3,g=.8549879733383485;function _(y,E,I){var L,R,A,S,$,w,k,C,F,T,B,O,x,q,Q,W;if($=0,E>I?(k=I,I=E,E=k,S=!0):S=!1,e(y)===y&&y<20)switch(R=r(1,b),e(y)){case 1:E===.5?$=0:$=-a(f*E)/s(f*E);break;case 2:$=(2*E-1)/o(2*E*I);break;case 4:w=4*E*I,A=o(w),x=4*a(i(A)/3)/A,q=o(x-4),$=E-.5<0?-q:q;break;case 6:if(E<1e-150)return(S?-1:1)*h(y,E);Q=4*(E-E*E),W=c(Q,v),O=6*(1+g*(1/W-1));do F=O*O,T=F*F,B=O*T,C=O,O=2*(8*Q*B-270*F+2187)/(5*(4*Q*T-216*O-243));while(u((O-C)/O)>R);O=o(O-y),$=E-.5<0?-O:O;break;default:y>m?$=n(2*E)*l:y<3?(L=.2742-y*.0242143,E>L?$=d(y,E):$=p(y,E)):(L=r(1,t(y/-.654)),E>L?$=h(y,E):$=p(y,E))}else y>m?$=-n(2*E)*l:y<3?(L=.2742-y*.0242143,E>L?$=d(y,E):$=p(y,E)):(L=r(1,t(y/-.654)),E>L?$=h(y,E):$=p(y,E));return S?-$:$}return id=_,id}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var od,Og;function PR(){if(Og)return od;Og=1;var n=DR();function e(r,t,i){var o,u,a,c;return u=t/2,a=1-u,o=r*2,c=n(o,u,a),i&&(i.value=c*c/(o+c*c)),o/(o+c*c)}return od=e,od}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ud,Dg;function xR(){if(Dg)return ud;Dg=1;var n=br(),e=ei(),r=_e(),t=Me(),i=l2(),o=[0,0,0,0,0,0,0],u=[0,0,0,0];function a(c,s,l){var f,d,p,h,m,v,b;return f=e(2*l),f/=-r(c/2),u[0]=f,v=s-c,h=v*v,m=h*v,o[0]=-v*i/2,o[1]=(1-2*v)/8,o[2]=-(v*i/48),o[3]=-1/192,o[4]=-v*i/3840,o[5]=0,o[6]=0,u[1]=n(o,f),o[0]=v*i*(3*v-2)/12,o[1]=(20*h-12*v+1)/128,o[2]=v*i*(20*v-1)/960,o[3]=(16*h+30*v-15)/4608,o[4]=v*i*(21*v+32)/53760,o[5]=(-(32*h)+63)/368640,o[6]=-v*i*(120*v+17)/25804480,u[2]=n(o,f),o[0]=v*i*(-75*h+80*v-16)/480,o[1]=(-1080*m+868*h-90*v-45)/9216,o[2]=v*i*(-1190*h+84*v+373)/53760,o[3]=(-2240*m-2508*h+2100*v-165)/368640,o[4]=0,o[5]=0,o[6]=0,u[3]=n(o,f),p=n(u,1/c),d=p*p,b=-t(-d/2),d===0?.5:(1+p*r((1+b)/d))/2}return ud=a,ud}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ad,Pg;function H9(){if(Pg)return ad;Pg=1;var n=Ee(),e=Rr(),r=e/4;function t(i,o){return u;function u(a){var c,s,l;return l=1-a,l===0?[-r,-r]:a===0?[-r,-r]:(s=n(a)+o*n(l)+i,c=1/a-o/l,[s,c])}}return ad=t,ad}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sd,xg;function HR(){if(xg)return sd;xg=1;var n=ue();function e(r){return r===0||n(r)?r:r<0?-1:1}return sd=e,sd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cd,Hg;function Po(){if(Hg)return cd;Hg=1;var n=HR();return cd=n,cd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ld,Bg;function B9(){if(Bg)return ld;Bg=1;var n=Po(),e=ye(),r=nt(),t=Rr();function i(o,u,a,c,s,l){var f,d,p,h,m,v,b,g,_,y;_=0,f=0,m=u,h=r(1,1-s),b=t,d=t,p=t,v=l;do{if(f=_,p=d,d=b,g=o(m),_=g[0],y=g[1],v-=1,_===0)break;if(y===0?(f===0&&(m===a?u=c:u=a,f=o(u),b=u-m),n(f)*n(_)<0?b<0?b=(m-a)/2:b=(m-c)/2:b<0?b=(m-c)/2:b=(m-a)/2):b=_/y,e(b*2)>e(p)&&(b=b>0?(m-a)/2:(m-c)/2),u=m,m-=b,m<=a){if(b=.5*(u-a),m=u-b,m===a||m===c)break}else if(m>=c&&(b=.5*(u-c),m=u-b,m===a||m===c))break;b>0?c=u:a=u}while(v&&e(m*h)<e(b));return m}return ld=i,ld}/**
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
*/var fd,Ug;function BR(){if(Ug)return fd;Ug=1;function n(e){return e===0?-1:-1+e*(-5+e*5)}return fd=n,fd}/**
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
*/var dd,Wg;function UR(){if(Wg)return dd;Wg=1;function n(e){return e===0?1:1+e*(21+e*(-69+e*46))}return dd=n,dd}/**
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
*/var pd,jg;function WR(){if(jg)return pd;jg=1;function n(e){return e===0?7:7+e*(-2+e*(33+e*(-62+e*31)))}return pd=n,pd}/**
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
*/var hd,Gg;function jR(){if(Gg)return hd;Gg=1;function n(e){return e===0?25:25+e*(-52+e*(-17+e*(88+e*(-115+e*46))))}return hd=n,hd}/**
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
*/var vd,Vg;function GR(){if(Vg)return vd;Vg=1;function n(e){return e===0?7:7+e*(12+e*(-78+e*52))}return vd=n,vd}/**
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
*/var md,Xg;function VR(){if(Xg)return md;Xg=1;function n(e){return e===0?-7:-7+e*(2+e*(183+e*(-370+e*185)))}return md=n,md}/**
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
*/var bd,Yg;function XR(){if(Yg)return bd;Yg=1;function n(e){return e===0?-533:-533+e*(776+e*(-1835+e*(10240+e*(-13525+e*5410))))}return bd=n,bd}/**
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
*/var gd,Kg;function YR(){if(Kg)return gd;Kg=1;function n(e){return e===0?-1579:-1579+e*(3747+e*(-3372+e*(-15821+e*(45588+e*(-45213+e*15071)))))}return gd=n,gd}/**
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
*/var _d,Jg;function KR(){if(Jg)return _d;Jg=1;function n(e){return e===0?449:449+e*(-1259+e*(-769+e*(6686+e*(-9260+e*3704))))}return _d=n,_d}/**
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
*/var yd,zg;function JR(){if(zg)return yd;zg=1;function n(e){return e===0?63149:63149+e*(-151557+e*(140052+e*(-727469+e*(2239932+e*(-2251437+e*750479)))))}return yd=n,yd}/**
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
*/var Ed,Qg;function zR(){if(Qg)return Ed;Qg=1;function n(e){return e===0?29233:29233+e*(-78755+e*(105222+e*(146879+e*(-1602610+e*(3195183+e*(-2554139+e*729754))))))}return Ed=n,Ed}/**
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
*/var $d,Zg;function QR(){if(Zg)return $d;Zg=1;function n(e){return e===0?1:1+e*(-13+e*13)}return $d=n,$d}/**
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
*/var wd,e_;function ZR(){if(e_)return wd;e_=1;function n(e){return e===0?1:1+e*(21+e*(-69+e*46))}return wd=n,wd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Sd,n_;function eM(){if(n_)return Sd;n_=1;var n=br(),e=ei(),r=ye(),t=Me(),i=Ee(),o=_e(),u=Jt(),a=s2(),c=H9(),s=B9(),l=BR(),f=UR(),d=WR(),p=jR(),h=GR(),m=VR(),v=XR(),b=YR(),g=KR(),_=JR(),y=zR(),E=QR(),I=ZR(),L=[0,0,0,0,0,0],R=[0,0,0,0];function A(S,$,w){var k,C,F,T,B,O,x,q,Q,W,Y,ne,ie,H,j,G,Ae,de,Z,oe;return B=e(2*S)/-o($/2),de=u(w),Ae=a(w),R[0]=B,j=de*de,G=Ae*Ae,ie=de*Ae,ne=ie*ie,Y=ne*ie,W=ne*ne,Q=ne*Y,q=Y*Y,x=W*Y,L[0]=(2*j-1)/(3*ie),L[1]=-l(j)/(36*ne),L[2]=f(j)/(1620*Y),L[3]=d(j)/(6480*W),L[4]=p(j)/(90720*Q),L[5]=0,R[1]=n(L,B),L[0]=-h(j)/(405*Y),L[1]=m(j)/(2592*W),L[2]=-v(j)/(204120*Q),L[3]=-b(j)/(2099520*q),L[4]=0,L[5]=0,R[2]=n(L,B),L[0]=g(j)/(102060*Q),L[1]=-_(j)/(20995200*q),L[2]=y(j)/(36741600*x),L[3]=0,L[4]=0,L[5]=0,R[3]=n(L,B),O=n(R,1/$),F=Ae/de,F*=F,H=-(O*O)/(2*j)+i(j)+G*i(G)/j,r(O)<.7?(L[0]=j,L[1]=ie,L[2]=(1-2*j)/3,L[3]=E(j)/(36*ie),L[4]=I(j)/(270*ne),L[5]=0,oe=n(L,O)):(Z=t(H),L[0]=Z,L[1]=F,L[2]=0,L[3]=3*F*(3*F+1)/6,L[4]=4*F*(4*F+1)*(4*F+2)/24,L[5]=5*F*(5*F+1)*(5*F+2)*(5*F+3)/120,oe=n(L,Z),(oe-j)*O<0&&(oe=1-oe)),O<0?(C=0,k=j):(C=j,k=1),(oe<C||oe>k)&&(oe=(C+k)/2),T=c(-H,F),oe=s(T,oe,C,k,32,100),oe}return Sd=A,Sd}var gi={exports:{}},_i={exports:{}},Ad,r_;function nM(){if(r_)return Ad;r_=1;var n=1e3,e=n*60,r=e*60,t=r*24,i=t*365.25;Ad=function(s,l){l=l||{};var f=typeof s;if(f==="string"&&s.length>0)return o(s);if(f==="number"&&isNaN(s)===!1)return l.long?a(s):u(s);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(s))};function o(s){if(s=String(s),!(s.length>100)){var l=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(s);if(l){var f=parseFloat(l[1]),d=(l[2]||"ms").toLowerCase();switch(d){case"years":case"year":case"yrs":case"yr":case"y":return f*i;case"days":case"day":case"d":return f*t;case"hours":case"hour":case"hrs":case"hr":case"h":return f*r;case"minutes":case"minute":case"mins":case"min":case"m":return f*e;case"seconds":case"second":case"secs":case"sec":case"s":return f*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return f;default:return}}}}function u(s){return s>=t?Math.round(s/t)+"d":s>=r?Math.round(s/r)+"h":s>=e?Math.round(s/e)+"m":s>=n?Math.round(s/n)+"s":s+"ms"}function a(s){return c(s,t,"day")||c(s,r,"hour")||c(s,e,"minute")||c(s,n,"second")||s+" ms"}function c(s,l,f){if(!(s<l))return s<l*1.5?Math.floor(s/l)+" "+f:Math.ceil(s/l)+" "+f+"s"}return Ad}var t_;function rM(){return t_||(t_=1,(function(n,e){e=n.exports=i.debug=i.default=i,e.coerce=c,e.disable=u,e.enable=o,e.enabled=a,e.humanize=nM(),e.names=[],e.skips=[],e.formatters={};var r;function t(s){var l=0,f;for(f in s)l=(l<<5)-l+s.charCodeAt(f),l|=0;return e.colors[Math.abs(l)%e.colors.length]}function i(s){function l(){if(l.enabled){var f=l,d=+new Date,p=d-(r||d);f.diff=p,f.prev=r,f.curr=d,r=d;for(var h=new Array(arguments.length),m=0;m<h.length;m++)h[m]=arguments[m];h[0]=e.coerce(h[0]),typeof h[0]!="string"&&h.unshift("%O");var v=0;h[0]=h[0].replace(/%([a-zA-Z%])/g,function(g,_){if(g==="%%")return g;v++;var y=e.formatters[_];if(typeof y=="function"){var E=h[v];g=y.call(f,E),h.splice(v,1),v--}return g}),e.formatArgs.call(f,h);var b=l.log||e.log||console.log.bind(console);b.apply(f,h)}}return l.namespace=s,l.enabled=e.enabled(s),l.useColors=e.useColors(),l.color=t(s),typeof e.init=="function"&&e.init(l),l}function o(s){e.save(s),e.names=[],e.skips=[];for(var l=(typeof s=="string"?s:"").split(/[\s,]+/),f=l.length,d=0;d<f;d++)l[d]&&(s=l[d].replace(/\*/g,".*?"),s[0]==="-"?e.skips.push(new RegExp("^"+s.substr(1)+"$")):e.names.push(new RegExp("^"+s+"$")))}function u(){e.enable("")}function a(s){var l,f;for(l=0,f=e.skips.length;l<f;l++)if(e.skips[l].test(s))return!1;for(l=0,f=e.names.length;l<f;l++)if(e.names[l].test(s))return!0;return!1}function c(s){return s instanceof Error?s.stack||s.message:s}})(_i,_i.exports)),_i.exports}var i_;function U9(){return i_||(i_=1,(function(n,e){var r={};e=n.exports=rM(),e.log=o,e.formatArgs=i,e.save=u,e.load=a,e.useColors=t,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:c(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function t(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(s){try{return JSON.stringify(s)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}};function i(s){var l=this.useColors;if(s[0]=(l?"%c":"")+this.namespace+(l?" %c":" ")+s[0]+(l?"%c ":" ")+"+"+e.humanize(this.diff),!!l){var f="color: "+this.color;s.splice(1,0,f,"color: inherit");var d=0,p=0;s[0].replace(/%[a-zA-Z%]/g,function(h){h!=="%%"&&(d++,h==="%c"&&(p=d))}),s.splice(p,0,f)}}function o(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function u(s){try{s==null?e.storage.removeItem("debug"):e.storage.debug=s}catch{}}function a(){var s;try{s=e.storage.debug}catch{}return!s&&typeof process<"u"&&"env"in process&&(s=r.DEBUG),s}e.enable(a());function c(){try{return window.localStorage}catch{}}})(gi,gi.exports)),gi.exports}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ld,o_;function xo(){if(o_)return Ld;o_=1;var n=34028234663852886e22;return Ld=n,Ld}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kd,u_;function tM(){if(u_)return kd;u_=1;var n=U9(),e=F9(),r=ye(),t=Me(),i=Ee(),o=xo(),u=n("gammaincinv:higher_newton");function a(c,s,l,f,d,p,h,m){var v,b,g,_,y,E,I,L,R,A,S,$,w,k;k=c,S=1,$=1,E=s*s,b=c;do{if(k=c,I=k*k,l===0){if(v=(1-s)*i(k)+k+p,v>i(o))return u("Warning: overflow problems in one or more steps of the computation. The initial approximation to the root is returned."),b;w=t(v)}else w=-h*k;m?(L=e(k,s,!0,!1),g=-w*(L-f)):(R=e(k,s,!0,!0),g=w*(R-d)),w=g,f>1e-120||$>1?(_=.5*(k-s+1)/k,y=(2*I-4*k*s+4*k+2*E-3*s+1)/I,y/=6,c=k+w*(1+w*(_+w*y))):c=k+w,S=r(k/c-1),$+=1,k=c,k<0&&(k=b,$=100)}while(S>2e-14&&$<35);return(S>2e-14||$>99)&&u("Warning: the number of iterations in the Newton method reached the upper limit N=35. The last value obtained for the root is given as output."),A=k||0,A}return kd=a,kd}/**
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
*/var Id,a_;function iM(){if(a_)return Id;a_=1;function n(e){return e===0?0:0+e*(1+e*(1+e*(1.5+e*(2.6666666666666665+e*(5.208333333333333+e*10.8)))))}return Id=n,Id}/**
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
*/var Cd,s_;function oM(){if(s_)return Cd;s_=1;function n(e){return e===0?1:1+e*(1+e*(.3333333333333333+e*(.027777777777777776+e*(-.003703703703703704+e*(.0002314814814814815+e*5878894767783657e-20)))))}return Cd=n,Cd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rd,c_;function W9(){if(c_)return Rd;c_=1;var n=ye(),e=Me(),r=Ee(),t=br(),i=iM(),o=oM(),u=1e-8,a=.08333333333333333,c=.008333333333333333,s=[1,0,0,0,0,0];function l(f){var d,p,h,m,v,b,g,_,y;if(y=f*f*.5,f===0?v=0:f<-1?(_=e(-1-y),v=i(_)):f<1?(_=f,v=o(_)):(_=11+y,b=r(_),v=_+b,_=1/_,d=b*b,p=d*b,h=p*b,m=h*b,s[1]=(2-b)*.5,s[2]=(-9*b+6+2*d)/6,s[3]=-(3*p+36*b-22*d-12)*a,s[4]=(60+350*d-300*b-125*p+12*h)/60,s[5]=-(-120-274*h+900*b-1700*d+1125*p+20*m)*c,v+=b*_*t(s,_)),_=1,f>-3.5&&f<-.03||f>.03&&f<40){_=1,g=v;do v=g*(y+r(g))/(g-1),_=n(g/v-1),g=v;while(_>u)}return v}return Rd=l,Rd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Md,l_;function uM(){if(l_)return Md;l_=1;var n=[1.9963790515900766,-.0017971032528832887,13129285796384672e-21,-2340875228178749e-22,72291210671127e-22,-3280997607821e-22,19875070901e-21,-1509214183e-21,1375340084e-22,-145728923e-22,17532367e-22,-2351465e-22,346551e-22,-55471e-22,9548e-22,-1748e-22,332e-22,-58e-22];function e(r,t){var i,o,u,a,c;o=0,u=0,i=t+t,c=r;do a=u,u=o,o=i*u-a+n[c],c-=1;while(c>=0);return(o-a)/2}return Md=e,Md}/**
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
*/var Nd,f_;function aM(){if(f_)return Nd;f_=1;function n(e){return e===0?.025721014990011306:.025721014990011306+e*(.08247596616699963+e*(-.0025328157302663564+e*(.0006099292666946337+e*(-.00033543297638406+e*.000250505279903))))}return Nd=n,Nd}/**
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
*/var Td,d_;function sM(){if(d_)return Td;d_=1;function n(e){return e===0?.08333333333333333:.08333333333333333+e*(-.002777777777777778+e*(.0007936507936507937+e*-.0005952380952380953))}return Td=n,Td}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qd,p_;function cM(){if(p_)return qd;p_=1;var n=it(),e=Ee(),r=P9(),t=Do(),i=xo(),o=uM(),u=aM(),a=sM(),c=.30865217988013566;function s(l){var f;return l<t?i:l<1?n(l+1)-(l+.5)*e(l)+l-r:l<2?n(l)-(l-.5)*e(l)+l-r:l<3?n(l-1)-(l-.5)*e(l)+l-r+e(l-1):l<12?(f=18/(l*l)-1,o(17,f)/(12*l)):(f=1/(l*l),l<1e3?u(f)/(c+f)/l:a(f)/l)}return qd=s,qd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fd,h_;function lM(){if(h_)return Fd;h_=1;var n=Me(),e=Wn(),r=Ee(),t=xo(),i=No(),o=cM();function u(a){return a>=3?n(o(a)):a>0?e(a)/(n(-a+(a-.5)*r(a))*i):t}return Fd=u,Fd}/**
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
*/var Od,v_;function fM(){if(v_)return Od;v_=1;function n(e){var r,t,i;return e===0?-.3333333333438:(e<0?r=-e:r=e,r<=1?(t=-.3333333333438+e*(-.2070740359969+e*(-.05041806657154+e*(-.004923635739372+e*-4293658292782e-17))),i=1+e*(.7045554412463+e*(.2118190062224+e*(.03048648397436+e*.001605037988091)))):(e=1/e,t=-4293658292782e-17+e*(-.004923635739372+e*(-.05041806657154+e*(-.2070740359969+e*-.3333333333438))),i=.001605037988091+e*(.03048648397436+e*(.2118190062224+e*(.7045554412463+e*1)))),t/i)}return Od=n,Od}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dd,m_;function dM(){if(m_)return Dd;m_=1;var n=ye(),e=Ee(),r=W9(),t=fM();function i(o){var u;return n(o)<1?t(o):(u=r(o),e(o/(u-1))/o)}return Dd=i,Dd}/**
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
*/var Pd,b_;function pM(){if(b_)return Pd;b_=1;function n(e){var r,t,i;return e===0?-.0172847633523:(e<0?r=-e:r=e,r<=1?(t=-.0172847633523+e*(-.0159372646475+e*(-.00464910887221+e*(-.00060683488776+e*-614830384279e-17))),i=1+e*(.764050615669+e*(.297143406325+e*(.0579490176079+e*.00574558524851)))):(e=1/e,t=-614830384279e-17+e*(-.00060683488776+e*(-.00464910887221+e*(-.0159372646475+e*-.0172847633523))),i=.00574558524851+e*(.0579490176079+e*(.297143406325+e*(.764050615669+e*1)))),t/i)}return Pd=n,Pd}/**
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
*/var xd,g_;function hM(){if(g_)return xd;g_=1;function n(e){var r,t,i;return e===0?-.0172839517431:(e<0?r=-e:r=e,r<=1?(t=-.0172839517431+e*(-.0146362417966+e*(-.00357406772616+e*(-.000391032032692+e*249634036069e-17))),i=1+e*(.690560400696+e*(.249962384741+e*(.0443843438769+e*.00424073217211)))):(e=1/e,t=249634036069e-17+e*(-.000391032032692+e*(-.00357406772616+e*(-.0146362417966+e*-.0172839517431))),i=.00424073217211+e*(.0443843438769+e*(.249962384741+e*(.690560400696+e*1)))),t/i)}return xd=n,xd}/**
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
*/var Hd,__;function vM(){if(__)return Hd;__=1;function n(e){var r,t,i;return e===0?.99994466948:(e<0?r=-e:r=e,r<=1?(t=.99994466948+e*(104.649839762+e*(857.204033806+e*(731.901559577+e*45.5174411671))),i=1+e*(104.526456943+e*(823.313447808+e*(3119.93802124+e*3970.03311219)))):(e=1/e,t=45.5174411671+e*(731.901559577+e*(857.204033806+e*(104.649839762+e*.99994466948))),i=3970.03311219+e*(3119.93802124+e*(823.313447808+e*(104.526456943+e*1)))),t/i)}return Hd=n,Hd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bd,y_;function mM(){if(y_)return Bd;y_=1;var n=Ee(),e=pM(),r=hM(),t=vM();function i(o){var u,a;return o<-5?(a=o*o,u=n(-o),(12-a-6*(u*u))/(12*a*o)):o<-2?e(o):o<2?r(o):o<1e3?(a=1/o,t(o)/(-12*o)):-1/(12*o)}return Bd=i,Bd}/**
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
*/var Ud,E_;function bM(){if(E_)return Ud;E_=1;function n(e){var r,t,i;return e===0?.0495346498136:(e<0?r=-e:r=e,r<=1?(t=.0495346498136+e*(.0299521337141+e*(.00688296911516+e*(.000512634846317+e*-201411722031e-16))),i=1+e*(.759803615283+e*(.261547111595+e*(.0464854522477+e*.00403751193496)))):(e=1/e,t=-201411722031e-16+e*(.000512634846317+e*(.00688296911516+e*(.0299521337141+e*.0495346498136))),i=.00403751193496+e*(.0464854522477+e*(.261547111595+e*(.759803615283+e*1)))),t/i)}return Ud=n,Ud}/**
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
*/var Wd,$_;function gM(){if($_)return Wd;$_=1;function n(e){var r,t,i;return e===0?.00452313583942:(e<0?r=-e:r=e,r<=1?(t=.00452313583942+e*(.00120744920113+e*(-789724156582e-16+e*(-504476066942e-16+e*-535770949796e-17))),i=1+e*(.912203410349+e*(.405368773071+e*(.0901638932349+e*.00948935714996)))):(e=1/e,t=-535770949796e-17+e*(-504476066942e-16+e*(-789724156582e-16+e*(.00120744920113+e*.00452313583942))),i=.00948935714996+e*(.0901638932349+e*(.405368773071+e*(.912203410349+e*1)))),t/i)}return Wd=n,Wd}/**
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
*/var jd,w_;function _M(){if(w_)return jd;w_=1;function n(e){var r,t,i;return e===0?.00439937562904:(e<0?r=-e:r=e,r<=1?(t=.00439937562904+e*(.000487225670639+e*(-.000128470657374+e*(529110969589e-17+e*15716677175e-17))),i=1+e*(.794435257415+e*(.333094721709+e*(.0703527806143+e*.00806110846078)))):(e=1/e,t=15716677175e-17+e*(529110969589e-17+e*(-.000128470657374+e*(.000487225670639+e*.00439937562904))),i=.00806110846078+e*(.0703527806143+e*(.333094721709+e*(.794435257415+e*1)))),t/i)}return jd=n,jd}/**
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
*/var Gd,S_;function yM(){if(S_)return Gd;S_=1;function n(e){var r,t,i;return e===0?-.0011481191232:(e<0?r=-e:r=e,r<=1?(t=-.0011481191232+e*(-.112850923276+e*(1.51623048511+e*(-.218472031183+e*.0730002451555))),i=1+e*(14.2482206905+e*(69.7360396285+e*(218.938950816+e*277.067027185)))):(e=1/e,t=.0730002451555+e*(-.218472031183+e*(1.51623048511+e*(-.112850923276+e*-.0011481191232))),i=277.067027185+e*(218.938950816+e*(69.7360396285+e*(14.2482206905+e*1)))),t/i)}return Gd=n,Gd}/**
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
*/var Vd,A_;function EM(){if(A_)return Vd;A_=1;function n(e){var r,t,i;return e===0?-.000145727889667:(e<0?r=-e:r=e,r<=1?(t=-.000145727889667+e*(-.290806748131+e*(-13.308504545+e*(199.722374056+e*-11.4311378756))),i=1+e*(139.612587808+e*(2189.01116348+e*(7115.24019009+e*45574.6081453)))):(e=1/e,t=-11.4311378756+e*(199.722374056+e*(-13.308504545+e*(-.290806748131+e*-.000145727889667))),i=45574.6081453+e*(7115.24019009+e*(2189.01116348+e*(139.612587808+e*1)))),t/i)}return Vd=n,Vd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xd,L_;function $M(){if(L_)return Xd;L_=1;var n=Ee(),e=bM(),r=gM(),t=_M(),i=yM(),o=EM();function u(a){var c,s;return a<-8?(c=a*a,s=n(-a)/a,(-30+a*s*(6*c*s*s-12+c))/(12*a*c*c)):a<-4?e(a)/(a*a):a<-2?r(a):a<2?t(a):a<10?(c=1/a,i(c)/(a*a)):a<100?(c=1/a,o(c)/(a*a)):-n(a)/(12*a*a*a)}return Xd=u,Xd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yd,k_;function wM(){if(k_)return Yd;k_=1;var n=U9(),e=br(),r=it(),t=ei(),i=Wn(),o=_e(),u=ye(),a=Me(),c=hr(),s=Ne(),l=Ee(),f=No(),d=xo(),p=Fo(),h=tM(),m=W9(),v=lM(),b=dM(),g=mM(),_=$M(),y=n("gammaincinv:compute"),E=.5,I=.3333333333333333,L=.25,R=.2,A=.16666666666666666,S=.08333333333333333,$=.041666666666666664,w=[0,0,0,0,0];function k(C,F,T){var B,O,x,q,Q,W,Y,ne,ie,H,j,G,Ae,de,Z,oe,$e,ge,rr,an,be,En,Xe,$n,_r,z,ve,wn,vt,Vn,tr,Mr,mt,bt,fi,Ye,Oe,Nr,Ke,Sn,dn,yr,Tr,qr;if(F<E?(q=!0,Q=F,yr=-1):(q=!1,Q=T,yr=1),Ke=0,u(C-1)<1e-4&&(Sn=0,q?F<.001?(Mr=F*F,wn=Mr*F,tr=wn*F,an=tr*F,rr=an*F,be=F+Mr*E+wn*I+tr*L+an*R+rr*A):be=-l(1-F):be=-l(T),C===1?(Ke=2,bt=be):(x=r(C),Ke=1)),T<1e-30&&C<E&&(Sn=0,be=-l(T*i(C))+(C-1)*l(-l(T*i(C))),Ke=1,x=r(C)),C>1&&C<500&&F<1e-80){for(Sn=0,W=1/C,B=1/(C+1),be=(r(C+1)+l(F))*W,be=a(be),de=be,Nr=0;Nr<10;Nr++)be=de*a(be*W)*s(1-be*B,W);Ke=1,x=r(C)}if(Y=1/C*(l(F)+r(C+1)),Y<l(R*(1+C))&&Ke===0&&(dn=a(Y),Sn=0,En=C*C,mt=En*C,vt=mt*C,Z=C+1,j=Z*Z,H=Z*j,ie=j*j,oe=C+2,ne=oe*oe,$e=C+3,w[0]=1,w[1]=1/Z,w[2]=E*(3*C+5)/(j*oe),w[3]=I*(31+8*En+33*C)/(H*oe*$e),w[4]=$*(2888+1179*mt+125*vt+3971*En+5661*C)/(ie*ne*$e*(C+4)),be=dn*e(w,dn),x=r(C),Ke=1),C<10&&Ke===0&&(G=o(C)/(v(C)*f),Ae=c(.02,G),T<Ae&&(Sn=0,Ye=1-C,z=Ye*Ye,ve=z*Ye,ge=o(-2/C*l(T/G)),be=C*m(ge),Oe=l(be),be>5?(Xe=Oe*Oe,$n=Xe*Oe,_r=$n*Oe,dn=1/be,w[0]=Oe-1,w[1]=(3*Ye-2*Ye*Oe+Xe-2*Oe+2)*E,w[2]=(24*Ye*Oe-11*z-24*Ye-6*Xe+12*Oe-12-9*Ye*Xe+6*z*Oe+2*$n)*A,w[3]=(-12*ve*Oe+8.04*Ye*Xe-114*z*Oe+(72+36*Xe)+(3*_r-72*Oe+162)*(Ye-168*Ye*Oe)-(12*$n+25*ve)-(22*Ye*$n+36*z*Xe+120*z))*S,w[4]=0,be=be-Oe+Ye*dn*e(w,dn)):(dn=1/be,Xe=Oe*Oe,fi=Oe-1,Tr=Oe-Ye*dn*fi,Tr<be&&(be-=Tr)),x=r(C),Ke=1)),u(Q-E)<1e-5&&Ke===0&&(Sn=0,W=1/C,be=C-I+(.019753086419753086+.007211444248481286*W)*W,x=r(C),Ke=1),C<1&&Ke===0&&(Sn=0,q?be=a(1/C*(l(Q)+r(C+1))):be=a(1/C*(l(1-Q)+r(C+1))),x=r(C),Ke=1),Ke===0)if(Sn=1,W=1/C,dn=t(2*Q),ge=yr*dn/o(C*E),dn<d)ge+=(b(ge)+(g(ge)+_(ge)*W)*W)*W,be=C*m(ge),qr=ge,Vn=-o(C/p)*a(-E*C*qr*qr)/v(C),O=1/Vn;else return y("Warning: Overflow problems in one or more steps of the computation."),NaN;return Ke<2&&(bt=h(be,C,Sn,F,T,x,O,q)),bt}return Yd=k,Yd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kd,I_;function SM(){if(I_)return Kd;I_=1;var n=ue(),e=Do(),r=Re(),t=wM();function i(o,u,a){return n(o)||n(u)?NaN:u<e?NaN:o>1||o<0?NaN:a===!0?o===0?r:o===1?0:t(u,1-o,o):o===0?0:o===1?r:t(u,o,1-o)}return Kd=i,Kd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jd,C_;function AM(){if(C_)return Jd;C_=1;var n=SM();return Jd=n,Jd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zd,R_;function LM(){if(R_)return zd;R_=1;var n=5e-324;return zd=n,zd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Qd,M_;function kM(){if(M_)return Qd;M_=1;var n=AM(),e=Ee(),r=_e(),t=LM(),i=H9(),o=B9();function u(a,c,s,l){var f,d,p,h,m,v,b,g,_,y,E,I,L,R,A,S,$,w,k,C,F,T,B,O,x,q,Q,W,Y,ne;return s<l?m=n(s,c,!0):m=n(l,c,!1),m/=a,R=c/a,W=r(1+R),w=W*W,k=w*W,C=w*w,F=k*w,T=k*k,B=C*k,O=C*C,x=F*C,b=F*F,Q=m-R,A=Q*Q,S=A*Q,$=A*A,q=W+1,g=q*q,_=q*g,y=g*g,E=(W+2)*(W-1)/(3*W),E+=(k+9*w+21*W+5)*Q/(36*w*q),E-=(C-13*k+69*w+167*W+46)*A/(1620*g*k),E-=(7*F+21*C+70*k+26*w-93*W-31)*S/(6480*_*C),E-=(75*T+202*F+188*C-888*k-1345*w+118*W+138)*$/(272160*y*F),I=(28*C+131*k+402*w+581*W+208)*(W-1)/(1620*q*k),I-=(35*T-154*F-623*C-1636*k-3983*w-3514*W-925)*Q/(12960*g*C),I-=(2132*B+7915*T+16821*F+35066*C+87490*k+141183*w+95993*W+21640)*A/(816480*F*_),I-=(11053*O+53308*B+117010*T+163924*F+116188*C-258428*k-677042*w-481940*W-105497)*S/(14696640*y*T),L=-((3592*B+8375*T-1323*F-29198*C-89578*k-154413*w-116063*W-29632)*(W-1))/(816480*F*g),L-=(442043*x+2054169*O+3803094*B+3470754*T+2141568*F-2393568*C-19904934*k-34714674*w-23128299*W-5253353)*Q/(146966400*T*_),L-=(116932*b+819281*x+2378172*O+4341330*B+6806004*T+10622748*F+18739500*C+30651894*k+30869976*w+15431867*W+2919016)*A/(146966400*y*B),v=m+E/a+I/(a*a)+L/(a*a*a),v<=0&&(v=t),Y=v-R*e(v)+(1+R)*e(1+R)-R,f=1/(1+R),p=v<R?f:0,h=v<R?1:f,ne=(p+h)/2,d=i(Y,R),o(d,ne,p,h,32,100)}return Qd=u,Qd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Zd,N_;function IM(){if(N_)return Zd;N_=1;var n=ye(),e=nt(),r=Po(),t=Cr(),i=Rr();function o(u,a,c,s,l,f){var d,p,h,m,v,b,g,_,y,E,I,L,R,A,S,$;A=0,p=!1,b=a,v=e(1,1-l),y=t(1e7*a,1e7),g=0,h=y,m=y,_=f;do{if(g=A,m=h,h=y,R=u(b),A=R[0],S=R[1],$=R[2],_-=1,A===0)break;if(S===0?(g===0&&(b===c?a=s:a=c,g=u(a),y=a-b),r(g)*r(A)<0?y<0?y=(b-c)/2:y=(b-s)/2:y<0?y=(b-s)/2:y=(b-c)/2):$===0?y=A/S:(E=2*A,L=2*S-A*($/S),n(L)<1&&n(E)>=n(L)*i?y=A/S:y=E/L,y*S/A<0&&(y=A/S,n(y)>2*n(a)&&(y=(y<0?-1:1)*2*n(a)))),d=n(y/m),d>.8&&d<2&&(y=y>0?(b-c)/2:(b-s)/2,n(y)>b&&(y=r(y)*b),m=y*3),a=b,b-=y,b<c){if(n(c)<1&&n(b)>1&&i/n(b)<n(c)?I=1e3:I=b/c,n(I)<1&&(I=1/I),!p&&I>0&&I<3)y=.99*(a-c),b=a-y,p=!0;else if(y=(a-c)/2,b=a-y,b===c||b===s)break}else if(b>s){if(n(s)<1&&n(b)>1&&i/n(b)<n(s)?I=1e3:I=b/s,n(I)<1&&(I=1/I),!p&&I>0&&I<3)y=.99*(a-s),b=a-y,p=!0;else if(y=(a-s)/2,b=a-y,b===c||b===s)break}y>0?s=a:c=a}while(_&&n(b*v)<n(y));return b}return Zd=o,Zd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var e1,T_;function CM(){if(T_)return e1;T_=1;var n=D9().assign,e=ye(),r=Rr(),t=Ir();function i(o,u,a,c){return s;function s(l){var f,d,p,h,m;return m=1-l,f=[0,0],n(l,o,u,!0,c,f,1,0),h=f[0]-a,d=f[1],c&&(d=-d),m===0&&(m=t*64),l===0&&(l=t*64),p=d*(-(m*o)+(u-2)*l+1),e(p)<m*l*r&&(p/=m*l),c&&(p=-p),d===0&&(d=(c?-1:1)*t*64),[h,d,p]}}return e1=i,e1}var n1,q_;function RM(){if(q_)return n1;q_=1;var n=br(),e=Zt(),r=Zr(),t=_n(),i=n2(),o=Mo(),u=_e(),a=ye(),c=Me(),s=Ne(),l=Jt(),f=Cr(),d=hr(),p=Ee(),h=Ir(),m=u2(),v=Un(),b=PR(),g=xR(),_=eM(),y=kM(),E=IM(),I=CM(),L=32,R=1e3,A=[0,0,0,0,0];function S($,w,k,C){var F,T,B,O,x,q,Q,W,Y,ne,ie,H,j,G,Ae,de,Z,oe,$e,ge,rr,an,be,En,Xe,$n,_r,z,ve;if(T=!1,C===0)return[1,0];if(k===0)return[0,1];if($===1){if(w===1)return[k,1-k];H=w,w=$,$=H,H=C,C=k,k=H,T=!0}if(z=0,O=0,q=1,$===.5){if(w===.5)return z=l(k*m),z*=z,ve=l(C*m),ve*=ve,[z,ve];w>.5&&(H=w,w=$,$=H,H=C,C=k,k=H,T=!T)}if(w===.5&&$>=.5&&k!==1)rr={},z=b($,k,rr),ve=rr.value;else{if(w===1)return k<C?$>1?(z=s(k,1/$),ve=-r(p(k)/$)):(z=s(k,1/$),ve=1-z):(z=c(t(-C)/$),ve=-r(t(-C)/$)),T&&(H=ve,ve=z,z=H),[z,ve];if($+w>5)k>.5&&(H=w,w=$,$=H,H=C,C=k,k=H,T=!T),Y=d($,w),W=f($,w),u(Y)>W-Y&&Y>5?(z=g($,w,k),ve=1-z):(Xe=$+w,x=i(u($/Xe)),B=Y/Xe,B>=.2&&B<=.8&&Xe>=10?(ie=s(k,1/$),ie<.0025&&$+w<200?z=ie*s($*o($,w),1/$):z=_(k,Xe,x),ve=1-z):($<w&&(H=w,w=$,$=H,H=C,C=k,k=H,T=!T),ne=0,w<2&&(ne=o($,w)),ne===0?ve=1:(ve=s(w*C*ne,1/w),z=1-ve)),ve>1e-5&&(z=y($,w,k,C),ve=1-z));else if($<1&&w<1){if(ge=(1-$)/(2-$-w),de=e(ge,$,w)-k,a(de)/k<v*3)return T?[1-ge,ge]:[ge,1-ge];de<0&&(H=w,w=$,$=H,H=C,C=k,k=H,T=!T,ge=1-ge),$e=s($*k*o($,w),1/$),z=$e/(1+$e),ve=1/(1+$e),z>ge&&(z=ge),q=ge}else $>1&&w>1?(ge=($-1)/($+w-2),j=(w-1)/($+w-2),oe=e(ge,$,w)-k,oe<0&&(H=w,w=$,$=H,H=C,C=k,k=H,H=j,j=ge,ge=H,T=!T),Z=p(k*$*o($,w))/$,z=c(Z),ve=z<.9?1-z:-r(Z),w<$&&z<.2&&(G=$-1,Ae=w-1,an=$*$,be=$*an,En=w*w,A[0]=0,A[1]=1,A[2]=Ae/G,G*=G,A[3]=Ae*(3*$*w+5*w+an-$-4)/(2*($+2)*G),G*=$+1,A[4]=Ae*(33*$*En+31*En+8*an*En-30*$*w-47*w+11*an*w+6*be*w+18+4*$-be+an*an-10*an),A[4]/=3*($+3)*($+2)*G,z=n(A,z)),z>ge&&(z=ge),q=ge):(w<$&&(H=w,w=$,$=H,H=C,C=k,k=H,T=!T),s(k,1/$)<.5?(z=s(k*$*o($,w),1/$),z===0&&(z=h),ve=1-z):(ve=s(1-s(k,w*o($,w)),1/w),ve===0&&(ve=h),z=1-ve))}return z>.5&&(H=w,w=$,$=H,H=C,C=k,k=H,H=ve,ve=z,z=H,T=!T,$n=1-q,_r=1-O,O=$n,q=_r),O===0&&(T?(O=v,z<O&&(z=O)):O=h,z<O&&(z=O)),F=L,z<1e-50&&($<1||w<1)&&(F*=3,F/=2),Q=I($,w,k<C?k:C,k>=C),z=E(Q,z,O,q,F,R),z===O&&(z=0),T?[1-z,z]:[z,1-z]}return n1=S,n1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r1,F_;function f2(){if(F_)return r1;F_=1;var n=RM();return r1=n,r1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t1,O_;function MM(){if(O_)return t1;O_=1;var n=ue(),e=f2();function r(t,i,o,u){return n(t)||n(i)||n(o)?NaN:i<=0||o<=0?NaN:t<0||t>1?NaN:u?e(i,o,1-t,t)[0]:e(i,o,t,1-t)[0]}return t1=r,t1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i1,D_;function j9(){if(D_)return i1;D_=1;var n=MM();return i1=n,i1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o1,P_;function NM(){if(P_)return o1;P_=1;var n=j9(),e=ue();function r(t,i,o){return e(t)||e(i)||e(o)||i<=0||o<=0||t<0||t>1?NaN:n(t,i,o)}return o1=r,o1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u1,x_;function TM(){if(x_)return u1;x_=1;var n=yn(),e=j9(),r=ue();function t(i,o){if(r(i)||r(o)||i<=0||o<=0)return n(NaN);return u;function u(a){return r(a)||a<0||a>1?NaN:e(a,i,o)}}return u1=t,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a1,H_;function qM(){if(H_)return a1;H_=1;var n=nn(),e=NM(),r=TM();return n(e,"factory",r),a1=e,a1}var FM=qM();const OM=Hn(FM);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s1,B_;function DM(){if(B_)return s1;B_=1;var n=qo(),e=_e(),r=ue();function t(i,o,u){var a,c;return r(i)||r(o)||r(u)||u<0?NaN:u===0?i<o?0:1:(a=u*e(2),c=i-o,.5*n(-c/a))}return s1=t,s1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c1,U_;function PM(){if(U_)return c1;U_=1;var n=ue();function e(r,t){return n(r)||n(t)?NaN:r<t?0:1}return c1=e,c1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l1,W_;function xM(){if(W_)return l1;W_=1;var n=yn(),e=ue();function r(t){if(e(t))return n(NaN);return i;function i(o){return e(o)?NaN:o<t?0:1}}return l1=r,l1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f1,j_;function HM(){if(j_)return f1;j_=1;var n=nn(),e=PM(),r=xM();return n(e,"factory",r),f1=e,f1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d1,G_;function BM(){if(G_)return d1;G_=1;var n=yn(),e=HM().factory,r=ue(),t=_e(),i=qo();function o(u,a){var c;if(r(u)||r(a)||a<0)return n(NaN);if(a===0)return e(u);return c=a*t(2),s;function s(l){var f;return r(l)?NaN:(f=l-u,.5*i(-f/c))}}return d1=o,d1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p1,V_;function UM(){if(V_)return p1;V_=1;var n=nn(),e=DM(),r=BM();return n(e,"factory",r),p1=e,p1}var WM=UM();const jM=Hn(WM);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h1,X_;function GM(){if(X_)return h1;X_=1;var n=Me(),e=Ne(),r=_e(),t=Fo(),i=Re(),o=ue();function u(a,c,s){var l,f,d;return o(a)||o(c)||o(s)||s<0?NaN:s===0?a===c?i:0:(l=e(s,2),f=1/r(l*t),d=-1/(2*l),f*n(d*e(a-c,2)))}return h1=u,h1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v1,Y_;function VM(){if(Y_)return v1;Y_=1;var n=Re(),e=ue();function r(t,i){return e(t)||e(i)?NaN:t===i?n:0}return v1=r,v1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m1,K_;function XM(){if(K_)return m1;K_=1;var n=yn(),e=Re(),r=ue();function t(i){if(r(i))return n(NaN);return o;function o(u){return r(u)?NaN:u===i?e:0}}return m1=t,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1,J_;function YM(){if(J_)return b1;J_=1;var n=nn(),e=VM(),r=XM();return n(e,"factory",r),b1=e,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1,z_;function KM(){if(z_)return g1;z_=1;var n=yn(),e=YM().factory,r=ue(),t=_e(),i=Me(),o=Ne(),u=Fo();function a(c,s){var l,f,d;if(r(c)||r(s)||s<0)return n(NaN);if(s===0)return e(c);return l=o(s,2),f=1/t(l*u),d=-1/(2*l),p;function p(h){return r(h)?NaN:f*i(d*o(h-c,2))}}return g1=a,g1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _1,Q_;function JM(){if(Q_)return _1;Q_=1;var n=nn(),e=GM(),r=KM();return n(e,"factory",r),_1=e,_1}var zM=JM();const QM=Hn(zM);/**
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
*/var y1,Z_;function ZM(){if(Z_)return y1;Z_=1;function n(e){var r,t,i;return e===0?-.0005087819496582806:(e<0?r=-e:r=e,r<=1?(t=-.0005087819496582806+e*(-.008368748197417368+e*(.03348066254097446+e*(-.012692614766297404+e*(-.03656379714117627+e*(.02198786811111689+e*(.008226878746769157+e*(-.005387729650712429+e*(0+e*0)))))))),i=1+e*(-.9700050433032906+e*(-1.5657455823417585+e*(1.5622155839842302+e*(.662328840472003+e*(-.7122890234154284+e*(-.05273963823400997+e*(.07952836873415717+e*(-.0023339375937419+e*.0008862163904564247))))))))):(e=1/e,t=0+e*(0+e*(-.005387729650712429+e*(.008226878746769157+e*(.02198786811111689+e*(-.03656379714117627+e*(-.012692614766297404+e*(.03348066254097446+e*(-.008368748197417368+e*-.0005087819496582806)))))))),i=.0008862163904564247+e*(-.0023339375937419+e*(.07952836873415717+e*(-.05273963823400997+e*(-.7122890234154284+e*(.662328840472003+e*(1.5622155839842302+e*(-1.5657455823417585+e*(-.9700050433032906+e*1))))))))),t/i)}return y1=n,y1}/**
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
*/var E1,e5;function eN(){if(e5)return E1;e5=1;function n(e){var r,t,i;return e===0?-.20243350835593876:(e<0?r=-e:r=e,r<=1?(t=-.20243350835593876+e*(.10526468069939171+e*(8.3705032834312+e*(17.644729840837403+e*(-18.851064805871424+e*(-44.6382324441787+e*(17.445385985570866+e*(21.12946554483405+e*-3.6719225470772936))))))),i=1+e*(6.242641248542475+e*(3.971343795334387+e*(-28.66081804998+e*(-20.14326346804852+e*(48.560921310873994+e*(10.826866735546016+e*(-22.643693341313973+e*1.7211476576120028)))))))):(e=1/e,t=-3.6719225470772936+e*(21.12946554483405+e*(17.445385985570866+e*(-44.6382324441787+e*(-18.851064805871424+e*(17.644729840837403+e*(8.3705032834312+e*(.10526468069939171+e*-.20243350835593876))))))),i=1.7211476576120028+e*(-22.643693341313973+e*(10.826866735546016+e*(48.560921310873994+e*(-20.14326346804852+e*(-28.66081804998+e*(3.971343795334387+e*(6.242641248542475+e*1)))))))),t/i)}return E1=n,E1}/**
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
*/var $1,n5;function nN(){if(n5)return $1;n5=1;function n(e){var r,t,i;return e===0?-.1311027816799519:(e<0?r=-e:r=e,r<=1?(t=-.1311027816799519+e*(-.16379404719331705+e*(.11703015634199525+e*(.38707973897260434+e*(.3377855389120359+e*(.14286953440815717+e*(.029015791000532906+e*(.0021455899538880526+e*(-6794655751811263e-22+e*(28522533178221704e-24+e*-681149956853777e-24))))))))),i=1+e*(3.4662540724256723+e*(5.381683457070069+e*(4.778465929458438+e*(2.5930192162362027+e*(.848854343457902+e*(.15226433829533179+e*(.011059242293464892+e*(0+e*(0+e*0)))))))))):(e=1/e,t=-681149956853777e-24+e*(28522533178221704e-24+e*(-6794655751811263e-22+e*(.0021455899538880526+e*(.029015791000532906+e*(.14286953440815717+e*(.3377855389120359+e*(.38707973897260434+e*(.11703015634199525+e*(-.16379404719331705+e*-.1311027816799519))))))))),i=0+e*(0+e*(0+e*(.011059242293464892+e*(.15226433829533179+e*(.848854343457902+e*(2.5930192162362027+e*(4.778465929458438+e*(5.381683457070069+e*(3.4662540724256723+e*1)))))))))),t/i)}return $1=n,$1}/**
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
*/var w1,r5;function rN(){if(r5)return w1;r5=1;function n(e){var r,t,i;return e===0?-.0350353787183178:(e<0?r=-e:r=e,r<=1?(t=-.0350353787183178+e*(-.0022242652921344794+e*(.018557330651423107+e*(.009508047013259196+e*(.0018712349281955923+e*(.00015754461742496055+e*(460469890584318e-20+e*(-2304047769118826e-25+e*26633922742578204e-28))))))),i=1+e*(1.3653349817554064+e*(.7620591645536234+e*(.22009110576413124+e*(.03415891436709477+e*(.00263861676657016+e*(7646752923027944e-20+e*(0+e*0)))))))):(e=1/e,t=26633922742578204e-28+e*(-2304047769118826e-25+e*(460469890584318e-20+e*(.00015754461742496055+e*(.0018712349281955923+e*(.009508047013259196+e*(.018557330651423107+e*(-.0022242652921344794+e*-.0350353787183178))))))),i=0+e*(0+e*(7646752923027944e-20+e*(.00263861676657016+e*(.03415891436709477+e*(.22009110576413124+e*(.7620591645536234+e*(1.3653349817554064+e*1)))))))),t/i)}return w1=n,w1}/**
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
*/var S1,t5;function tN(){if(t5)return S1;t5=1;function n(e){var r,t,i;return e===0?-.016743100507663373:(e<0?r=-e:r=e,r<=1?(t=-.016743100507663373+e*(-.0011295143874558028+e*(.001056288621524929+e*(.00020938631748758808+e*(14962478375834237e-21+e*(44969678992770644e-23+e*(4625961635228786e-24+e*(-2811287356288318e-29+e*9905570997331033e-32))))))),i=1+e*(.5914293448864175+e*(.1381518657490833+e*(.016074608709367652+e*(.0009640118070051656+e*(27533547476472603e-21+e*(282243172016108e-21+e*(0+e*0)))))))):(e=1/e,t=9905570997331033e-32+e*(-2811287356288318e-29+e*(4625961635228786e-24+e*(44969678992770644e-23+e*(14962478375834237e-21+e*(.00020938631748758808+e*(.001056288621524929+e*(-.0011295143874558028+e*-.016743100507663373))))))),i=0+e*(0+e*(282243172016108e-21+e*(27533547476472603e-21+e*(.0009640118070051656+e*(.016074608709367652+e*(.1381518657490833+e*(.5914293448864175+e*1)))))))),t/i)}return S1=n,S1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var A1,i5;function iN(){if(i5)return A1;i5=1;var n=ue(),e=_e(),r=Ee(),t=Re(),i=rn(),o=ZM(),u=eN(),a=nN(),c=rN(),s=tN(),l=.08913147449493408,f=2.249481201171875,d=.807220458984375,p=.9399557113647461,h=.9836282730102539;function m(v){var b,g,_,y,E,I;return n(v)?NaN:v===1?t:v===-1?i:v===0?v:v>1||v<-1?NaN:(v<0?(b=-1,g=-v):(b=1,g=v),y=1-g,g<=.5?(E=g*(g+10),I=o(g),b*(E*l+E*I)):y>=.25?(E=e(-2*r(y)),y-=.25,I=u(y),b*(E/(f+I))):(y=e(-r(y)),y<3?(_=y-1.125,I=a(_),b*(d*y+I*y)):y<6?(_=y-3,I=c(_),b*(p*y+I*y)):(_=y-6,I=s(_),b*(h*y+I*y))))}return A1=m,A1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L1,o5;function G9(){if(o5)return L1;o5=1;var n=iN();return L1=n,L1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k1,u5;function oN(){if(u5)return k1;u5=1;var n=G9(),e=ue(),r=_e();function t(i,o,u){var a,c;return e(o)||e(u)||e(i)||u<0||i<0||i>1?NaN:u===0?o:(a=o,c=u*r(2),a+c*n(2*i-1))}return k1=t,k1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I1,a5;function uN(){if(a5)return I1;a5=1;var n=ue();function e(r,t){return n(r)||r<0||r>1?NaN:t}return I1=e,I1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C1,s5;function aN(){if(s5)return C1;s5=1;var n=yn(),e=ue();function r(t){if(e(t))return n(NaN);return i;function i(o){return e(o)||o<0||o>1?NaN:t}}return C1=r,C1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R1,c5;function sN(){if(c5)return R1;c5=1;var n=nn(),e=uN(),r=aN();return n(e,"factory",r),R1=e,R1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M1,l5;function cN(){if(l5)return M1;l5=1;var n=yn(),e=sN().factory,r=G9(),t=ue(),i=_e();function o(u,a){var c,s;if(t(u)||t(a)||a<0)return n(NaN);return a===0&&e(u),c=u,s=a*i(2),l;function l(f){return t(f)||f<0||f>1?NaN:c+s*r(2*f-1)}}return M1=o,M1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N1,f5;function lN(){if(f5)return N1;f5=1;var n=nn(),e=oN(),r=cN();return n(e,"factory",r),N1=e,N1}var fN=lN();const dN=Hn(fN);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T1,d5;function pN(){if(d5)return T1;d5=1;var n=Zt(),e=ue(),r=Ne();function t(i,o){var u,a,c;return e(i)||e(o)||o<=0?NaN:i===0?.5:(u=r(i,2),o>2*u?(c=u/(o+u),a=n(c,.5,o/2,!0,!0)/2):(c=o/(o+u),a=n(c,o/2,.5,!0,!1)/2),i>0?1-a:a)}return T1=t,T1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q1,p5;function hN(){if(p5)return q1;p5=1;var n=yn(),e=Zt(),r=ue(),t=Ne();function i(o){if(r(o)||o<=0)return n(NaN);return u;function u(a){var c,s,l;return r(a)?NaN:a===0?.5:(c=t(a,2),o>2*c?(l=c/(o+c),s=e(l,.5,o/2,!0,!0)/2):(l=o/(o+c),s=e(l,o/2,.5,!0,!1)/2),a>0?1-s:s)}}return q1=i,q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F1,h5;function vN(){if(h5)return F1;h5=1;var n=nn(),e=pN(),r=hN();return n(e,"factory",r),F1=e,F1}var mN=vN();const bN=Hn(mN);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O1,v5;function gN(){if(v5)return O1;v5=1;var n=ue(),e=Mo(),r=_e(),t=Ne();function i(o,u){var a;return n(o)||n(u)||u<=0?NaN:(a=r(u)*e(u/2,.5),t(u/(u+t(o,2)),(1+u)/2)/a)}return O1=i,O1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D1,m5;function _N(){if(m5)return D1;m5=1;var n=yn(),e=ue(),r=Mo(),t=_e(),i=Ne();function o(u){var a,c;if(e(u)||u<=0)return n(NaN);return c=t(u)*r(u/2,.5),a=(1+u)/2,s;function s(l){return e(l)?NaN:i(u/(u+i(l,2)),a)/c}}return D1=o,D1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P1,b5;function yN(){if(b5)return P1;b5=1;var n=nn(),e=gN(),r=_N();return n(e,"factory",r),P1=e,P1}var EN=yN();const $N=Hn(EN);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x1,g5;function wN(){if(g5)return x1;g5=1;var n=f2(),e=ue(),r=Po(),t=_e();function i(o,u){var a,c;return e(u)||e(o)||u<=0||o<0||o>1?NaN:(a=o>.5?1-o:o,c=n(u/2,.5,2*a,1-2*a),r(o-.5)*t(u*c[1]/c[0]))}return x1=i,x1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H1,_5;function SN(){if(_5)return H1;_5=1;var n=yn(),e=f2(),r=ue(),t=Po(),i=_e();function o(u){if(r(u)||u<=0)return n(NaN);return a;function a(c){var s,l;return r(c)||c<0||c>1?NaN:(s=c>.5?1-c:c,l=e(u/2,.5,2*s,1-2*s),t(c-.5)*i(u*l[1]/l[0]))}}return H1=o,H1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B1,y5;function AN(){if(y5)return B1;y5=1;var n=nn(),e=wN(),r=SN();return n(e,"factory",r),B1=e,B1}var LN=AN();const kN=Hn(LN),E5=1e-9,IN=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,V9=/^\s*([a-z][a-z-]*)\s*\((.*)\)\s*$/;function CN(n){const[e,r,t]=n;return e<t?e<=r&&r<=t?null:`requires lo <= peak <= hi, got lo=${e}, peak=${r}, hi=${t}`:`requires lo < hi, got lo=${e}, hi=${t}`}function RN(n){const[e,r]=n;return e<r?null:`requires lo < hi, got lo=${e}, hi=${r}`}function MN(n){const[e,r]=n;return e>0&&r>0?null:`requires a > 0 and b > 0, got a=${e}, b=${r}`}function $5(n){const e=n[1];return e>0?null:`requires sigma > 0, got sigma=${e}`}function NN(n){const[e,r]=n;return 0<e&&e<r?null:`requires 0 < lo < hi, got lo=${e}, hi=${r}`}function w5(n){const[,e,r]=n;return e<=0?`requires sigma > 0, got sigma=${e}`:r<=0?`requires df > 0, got df=${r}`:null}function S5(n,e){const r=e-n;return{cdf:t=>t<=n?0:t>=e?1:(t-n)/r,ppf:t=>n+t*r,pdf:t=>t>=n&&t<=e?1/r:0}}function TN(n,e,r){const t=r-n,i=(e-n)/t;return{cdf:o=>o<=n?0:o>=r?1:o<=e?(o-n)*(o-n)/(t*(e-n)):1-(r-o)*(r-o)/(t*(r-e)),ppf:o=>o<i?n+Math.sqrt(o*t*(e-n)):r-Math.sqrt((1-o)*t*(r-e)),pdf:o=>o<n||o>r?0:o===e?2/t:o<e?2*(o-n)/(t*(e-n)):2*(r-o)/(t*(r-e))}}function A5(n,e){return{cdf:r=>jM(r,n,e),ppf:r=>dN(r,n,e),pdf:r=>QM(r,n,e)}}function L5(n,e,r){return{cdf:t=>bN((t-n)/e,r),ppf:t=>n+e*kN(t,r),pdf:t=>$N((t-n)/e,r)/e}}function qN(n,e){return{cdf:r=>sR(r,n,e),ppf:r=>OM(r,n,e),pdf:r=>mR(r,n,e)}}const Sr={tri:{signature:"tri(lo, peak, hi)",note:"triangular",nParams:3,check:CN,build:n=>({latent:TN(n[0],n[1],n[2]),logX:!1})},uniform:{signature:"uniform(lo, hi)",note:"uniform",nParams:2,check:RN,build:n=>({latent:S5(n[0],n[1]),logX:!1})},beta:{signature:"beta(a, b)",note:"Beta on [0, 1]; a, b > 0",nParams:2,check:MN,build:n=>({latent:qN(n[0],n[1]),logX:!1})},normal:{signature:"normal(mu, sigma)",note:"normal; sigma > 0",nParams:2,check:$5,build:n=>({latent:A5(n[0],n[1]),logX:!1})},lognormal:{signature:"lognormal(mu, sigma)",note:"mu/sigma are mean/sd of log(X); sigma > 0",nParams:2,check:$5,build:n=>({latent:A5(n[0],n[1]),logX:!0})},loguniform:{signature:"loguniform(lo, hi)",note:"uniform in log space; 0 < lo < hi",nParams:2,check:NN,build:n=>({latent:S5(Math.log(n[0]),Math.log(n[1])),logX:!0})},t:{signature:"t(mu, sigma, df)",note:"location-scale Student-t; sigma > 0, df > 0",nParams:3,check:w5,build:n=>({latent:L5(n[0],n[1],n[2]),logX:!1})},logt:{signature:"logt(mu, sigma, df)",note:"exp of location-scale Student-t; log-space params like lognormal",nParams:3,check:w5,build:n=>({latent:L5(n[0],n[1],n[2]),logX:!0})}},FN=["normal","lognormal","t","logt"];function ON(n){const[e,r]=n;return e<r?null:`requires lo < hi in the truncation window, got lo=${e}, hi=${r}`}function DN(n,e){const r=e.signature.split("(",2)[1].slice(0,-1);return{signature:`${n}-trunc(${r}, lo, hi)`,note:`${e.note}; explicitly truncated to [lo, hi]`,nParams:e.nParams+2,check:t=>e.check(t.slice(0,e.nParams))??ON(t.slice(e.nParams)),build:t=>e.build(t),hasTruncWindow:!0}}for(const n of FN)Sr[`${n}-trunc`]=DN(n,Sr[n]);function PN(n){return V9.test(n)}function X9(n){const e=V9.exec(n);if(!e)throw new Error(`malformed family spec ${JSON.stringify(n)}: expected "family(num, num, ...)"`);const r=e[1],t=e[2],i=Sr[r];if(i===void 0)throw new Error(`unknown distribution family ${JSON.stringify(r)}; available: `+Object.values(Sr).map(c=>c.signature).join(", "));const o=t.split(",").map(c=>c.trim());for(const c of o)if(!IN.test(c))throw new Error(`family spec ${JSON.stringify(n.trim())}: bad numeric argument ${JSON.stringify(c)}`);const u=o.map(Number);if(u.length!==i.nParams)throw new Error(`${r} takes ${i.nParams} arguments as ${i.signature}, got ${u.length}`);const a=i.check(u);if(a)throw new Error(`${n.trim()}: ${i.signature} ${a}`);return i.hasTruncWindow?{family:r,params:u.slice(0,-2),text:n.trim(),truncWindow:[u[u.length-2],u[u.length-1]]}:{family:r,params:u,text:n.trim(),truncWindow:null}}function k5(n,e){return e===-1/0?0:e===1/0?1:n.cdf(e)}class Y9{constructor(e,r,t,i,o,u,a){this.spec=e,this.latent=r,this.logX=t,this.cdfLo=i,this.mass=o,this.xLo=u,this.xHi=a}inverseCdf(e){const r=this.latent.ppf(this.cdfLo+e*this.mass),t=this.logX?Math.exp(r):r;return Math.min(Math.max(t,this.xLo),this.xHi)}pdf(e){return e<this.xLo||e>this.xHi?0:this.logX?e<=0?0:this.latent.pdf(Math.log(e))/e/this.mass:this.latent.pdf(e)/this.mass}}function d2(n,e,r){const t=Sr[n.family];if(t===void 0)throw new Error(`unknown distribution family ${JSON.stringify(n.family)}`);const{latent:i,logX:o}=t.build(n.params);let u=e===null?-1/0:e,a=r===null?1/0:r;n.truncWindow!==null&&(u=Math.max(u,n.truncWindow[0]),a=Math.min(a,n.truncWindow[1]));let c,s;o?(c=u>0?Math.log(u):-1/0,s=a>0?Math.log(a):-1/0):(c=u,s=a);const l=k5(i,c),d=k5(i,s)-l;if(d<E5){let p=`the variable's range [${e}, ${r}]`;throw n.truncWindow!==null&&(p+=` ∩ the spec's truncation window [${n.truncWindow[0]}, ${n.truncWindow[1]}]`),new Error(`family spec ${JSON.stringify(n.text)}: essentially no probability mass in ${p} (mass ${d.toExponential(2)} < ${E5})`)}return new Y9(n,i,o,l,d,u,a)}const Gi="pointmass",xN="[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?",HN=new RegExp(`^\\s*${Gi}\\s*\\(\\s*(${xN})\\s*\\)\\s*$`),BN=new RegExp(`^\\s*${Gi}\\b`);function K9(n){const e=HN.exec(n);if(e===null)throw new Error(`malformed ${Gi} spec ${JSON.stringify(n)}: expected "${Gi}(num)"`);return Number(e[1])}function p2(n){return BN.test(n)?K9(n):null}function J9(n){const e=K9(n);return[[e,1],[e,1]]}function UN(n,e){let r=1/0,t=-1/0;for(const i of n){const{lo:o,hi:u}=e(i);r=Math.min(r,o),t=Math.max(t,u)}return{lo:r,hi:t}}function mp(n){const e=.254829592,r=-.284496736,t=1.421413741,i=-1.453152027,o=1.061405429,u=.3275911,a=n<0?-1:1,c=Math.abs(n)/Math.SQRT2,s=1/(1+u*c),l=1-((((o*s+i)*s+t)*s+r)*s+e)*s*Math.exp(-c*c);return .5*(1+a*l)}function Vi(){const n=Math.random(),e=Math.random(),r=Math.sqrt(-2*Math.log(n)),t=2*Math.PI*e;return[r*Math.cos(t),r*Math.sin(t)]}function WN(n,e){const r=n.length;if(r<2)throw new Error(`buildFromXsHs: need at least 2 breakpoints, got ${r}`);let t=0;for(let u=0;u<r-1;u++)t+=(n[u+1]-n[u])*(e[u]+e[u+1])/2;if(t<=0)throw new Error("buildPieceLinear: distribution has zero or negative area");const i=new Float64Array(r);for(let u=0;u<r;u++)i[u]=e[u]/t;const o=new Float64Array(r);o[0]=0;for(let u=0;u<r-1;u++)o[u+1]=o[u]+(n[u+1]-n[u])*(i[u]+i[u+1])/2;return o[r-1]=1,{xs:new Float64Array(n),fs:i,Fs:o}}function z9(n){const{pairs:e}=n,r=e[0][0];if(e[e.length-1][0]-r<1e-15)return{xs:new Float64Array([r,r]),fs:new Float64Array([1,1]),Fs:new Float64Array([0,1])};const i=e.map(u=>u[0]),o=e.map(u=>u[1]);return WN(i,o)}function bp(n,e){if(n.kind==="family"){if(e===void 0)throw new Error(`family spec ${JSON.stringify(n.spec.text)} needs the svar's declared range for implicit truncation, but no paramRange was provided (thread paramRanges through the caller)`);return d2(n.spec,e.lo,e.hi)}return z9(n)}function St(n,e){return e instanceof Y9?e.inverseCdf(n):GN(n,e)}const jN=1e-12;function GN(n,e){const{xs:r,fs:t,Fs:i}=e,o=r.length-1;if(o<=0||n<=0)return r[0];if(n>=1)return r[o];let u=0,a=o;for(;u<a-1;){const p=u+a>>1;i[p]<=n?u=p:a=p}const c=u,s=r[c+1]-r[c];if(s<1e-15)return r[c];const l=n-i[c],f=(t[c+1]-t[c])/s;let d;if(Math.abs(f)<jN)d=l/t[c];else{const p=t[c]*t[c]+2*f*l;d=(-t[c]+Math.sqrt(Math.max(0,p)))/f}return r[c]+d}function VN(n,e){if(n.kind==="family"){const t=(o,u)=>e!==void 0&&(e.lo===null||o>=e.lo)&&(e.hi===null||u<=e.hi),i=n.spec.params;return n.spec.family==="tri"&&t(i[0],i[2])?{kind:"triangular",lo:i[0],peak:i[1],hi:i[2]}:n.spec.family==="uniform"&&t(i[0],i[1])?{kind:"uniform",lo:i[0],hi:i[1]}:null}const{pairs:r}=n;if(r.length===2){const[t,i]=r[0],[o,u]=r[1];return i===u&&i>0?{kind:"uniform",lo:t,hi:o}:i===0&&u>0?{kind:"triangular",lo:t,peak:o,hi:o}:i>0&&u===0?{kind:"triangular",lo:t,peak:t,hi:o}:null}if(r.length===3){const[t,i]=r[0],[o,u]=r[1],[a,c]=r[2];if(i===0&&c===0&&u>0)return{kind:"triangular",lo:t,peak:o,hi:a}}return null}function XN(n){const e=n.length;let r=0,t=0;for(const a of n){let c=1,s=1;for(const l of a){const f=1-l.hi,d=1-l.lo;if(l.kind==="triangular"){const p=1-l.peak;c*=(f+d+p)/3,s*=(f*f+d*d+p*p+f*d+f*p+d*p)/6}else c*=(f+d)/2,s*=(f*f+f*d+d*d)/3}r+=c,t+=s}const i=r/e,u=t/e-i*i;return{mean:i,sigma:Math.sqrt(Math.max(0,u))}}function YN(n,e,r){if(e!==$w)return null;const t=[];for(const i of n){const o=[];for(const[u,a]of i.entries()){const c=VN(a,r==null?void 0:r[u]);if(c===null)return null;o.push(c)}t.push(o)}return XN(t)}function gp(n,e,r,t){var c;const{trialCount:i,nParams:o,perTrialLoadings:u}=Q9(n,e,r),a=Array.from({length:o},()=>new Float64Array(t));for(let s=0;s<t;s++){const l=Math.floor(Math.random()*i),f=n[l],{loadingMatrix:d,residualSds:p}=u[l],h=((c=d[0])==null?void 0:c.length)??0;if(h===0)for(let m=0;m<o;m++)a[m][s]=St(Math.random(),f[m]);else{const m=[];for(let v=0;v<h;v++)m.push(Vi()[0]);for(let v=0;v<o;v++){const b=Vi()[0],g=d[v];let _=p[v]*b;for(let y=0;y<h;y++)_+=g[y]*m[y];a[v][s]=St(mp(_),f[v])}}}return a}function Q9(n,e,r){const t=n.length;if(t===0)throw new Error("sampleCopulaMatrix: need at least one trial");const i=r.length;if(n.some(u=>u.length!==i))throw new Error(`sampleCopulaMatrix: trials disagree with params on parameter count (${i} params)`);if(e.length!==t)throw new Error(`sampleCopulaMatrix: ${e.length} per-trial lloads specs for ${t} trials`);const o=e.map(u=>bA(u,r));return{trialCount:t,nParams:i,perTrialLoadings:o}}function KN(n,e,r,t){var l;const{trialCount:i,nParams:o,perTrialLoadings:u}=Q9(n,e,r),a=Array.from({length:o},()=>new Float64Array(t)),s=u.some(({loadingMatrix:f})=>{var d;return(((d=f[0])==null?void 0:d.length)??0)>0})?Array.from({length:o},()=>new Float64Array(t)):a;for(let f=0;f<t;f++){const d=Math.floor(Math.random()*i),p=n[d],{loadingMatrix:h,residualSds:m}=u[d],v=((l=h[0])==null?void 0:l.length)??0;if(v===0)for(let b=0;b<o;b++){const g=St(Math.random(),p[b]);a[b][f]=g,s[b][f]=g}else{const b=[];for(let g=0;g<v;g++)b.push(Vi()[0]);for(let g=0;g<o;g++){const _=Vi()[0];a[g][f]=St(mp(_),p[g]);const y=h[g];let E=m[g]*_;for(let I=0;I<v;I++)E+=y[I]*b[I];s[g][f]=St(mp(E),p[g])}}}return{independent:a,joint:s}}function ni(n,e){if(n.length===0)throw new Error("combineSampleColumns: need at least one sampled column");const r=n[0].length,t=new Float64Array(r),i=new Array(n.length);for(let o=0;o<r;o++){for(let u=0;u<n.length;u++)i[u]=n[u][o];t[o]=e(i)}return t}function JN(n){if(typeof n=="string")return p2(n)!==null?{kind:"pairs",pairs:J9(n)}:{kind:"family",spec:X9(n)};if(!n||n.length===0)throw new Error("sampleValueToSpec: no sample value present (gate on sampleValueHasData to tolerate absence)");return{kind:"pairs",pairs:n}}const zN=/\(\s*([\d.eE+-]+)\s+([\d.eE+-]+)\s*\)/g;function h2(n,e){const r=n.trim(),t=p2(r);if(t!==null){if(!Ni(e,t))throw new Error(`pointmass value ${t} not in ${Ti(e)}`);return{kind:"pairs",pairs:J9(r)}}if(PN(r)){const a=X9(r);return d2(a,e.lo,e.hi),{kind:"family",spec:a}}if(!r.includes("("))throw new Error(`expected a family spec "name(num, ...)" or PWL pairs "(x y) ..." (pointmass(num) is also accepted), got "${r}"`);const i=[...r.matchAll(zN)];if(i.length<2)throw new Error(`need at least 2 (x y) pairs, got ${i.length}`);const o=i.map(a=>[Number(a[1]),Number(a[2])]);let u=-1/0;for(let a=0;a<o.length;a++){const[c,s]=o[a];if(isNaN(c)||!Ni(e,c))throw new Error(`pair ${a+1} x=${c} not in ${Ti(e)}`);if(isNaN(s)||s<0||s>1)throw new Error(`pair ${a+1} y=${s} not in [0, 1]`);if(c<u)throw new Error(`pair ${a+1} x=${c} not sorted (prev was ${u})`);u=c}return{kind:"pairs",pairs:o}}function Z9(n){return typeof n=="string"?n.length>0:((n==null?void 0:n.length)??0)>0}function Ho(n){const e=new Float64Array(n);e.sort();const r=e.length;let t=0;for(let i=0;i<r;i++)t+=e[i];return{mean:t/r,median:e[Math.floor(r*.5)],p5:e[Math.floor(r*.05)],p95:e[Math.floor(r*.95)],samples:e,count:r}}const QN=32,ZN=4e6,Tn=new Map;let Li=0;function gr(n){return JSON.stringify(n,(e,r)=>{if(typeof r=="function"||typeof r=="symbol")throw new Error(`mc_memo key parts must be JSON-serializable data; got a ${typeof r}. Identify a combine function by a string tag / form id instead.`);return r})}function Bo(n,e){const r=gr(n),t=Tn.get(r);if(t!==void 0)return Tn.delete(r),Tn.set(r,t),t;const i=e();for(Tn.set(r,i),Li+=i.samples.length;(Tn.size>QN||Li>ZN)&&Tn.size>1;){const o=Tn.keys().next().value;Li-=Tn.get(o).samples.length,Tn.delete(o)}return i}function eT(){Tn.clear(),Li=0}const nT=256,Kn=new Map,Ft=new Map;let ey=1;function ny(n){const e=gr(n),r=Kn.get(e);if(r!==void 0)return Kn.delete(e),Kn.set(e,r),r;const t={token:`mcpool-${ey++}`,extraBlocks:0};for(Kn.set(e,t),Ft.set(t.token,t);Kn.size>nT;){const i=Kn.keys().next().value;Ft.delete(Kn.get(i).token),Kn.delete(i)}return t}const rT=64,Xi=new Map,Jn=new Map;function ry(n){const e=gr([...n].sort()),r=Jn.get(e);if(r!==void 0)return Jn.delete(e),Jn.set(e,r),r;const t=`mcpoolgroup-${ey++}`;for(Jn.set(e,t),Xi.set(t,[...n]);Jn.size>rT;){const i=Jn.keys().next().value;Xi.delete(Jn.get(i)),Jn.delete(i)}return t}function tT(n){const e=Xi.get(n);if(e!==void 0){let t=!1;for(const i of e){const o=Ft.get(i);o!==void 0&&(o.extraBlocks+=1,t=!0)}return t}const r=Ft.get(n);return r===void 0?!1:(r.extraBlocks+=1,!0)}function iT(){Kn.clear(),Ft.clear(),Xi.clear(),Jn.clear()}const oT=2048,Qn=new Map;function I5(n){const e=gr(n),r=Qn.get(e);if(r!==void 0)return Qn.delete(e),Qn.set(e,r),r}function C5(n){const e=gr(n);if(Qn.has(e))throw new Error(`streaming mean entry already exists for key ${e}`);const r={n:0,mean:0,m2:0,blocksFolded:0};for(Qn.set(e,r);Qn.size>oT;){const t=Qn.keys().next().value;Qn.delete(t)}return r}function U1(n,e,r){let{n:t,mean:i,m2:o}=n;for(let u=0;u<e.length;u++){const a=e[u];if(!Number.isFinite(a))throw new Error(`streaming mean fold: non-finite sample value ${a} at block index ${u}`);t+=1;const c=a-i;i+=c/t,o+=c*(a-i)}n.n=t,n.mean=i,n.m2=o,n.blocksFolded=r}function R5(n){return Math.sqrt(n.m2/(n.n-1)/n.n)}function uT(){Qn.clear()}const ri="Bounds are not available for this formula: no interval for it follows from bounds responses. Its point and distribution results are unaffected.",Uo="copula-matrix";function ty(n,e,r){if(e.bounds&&!e.boundsTightness)throw new Error(`form ${n} has a bounds implementation but no boundsTightness — regenerate form_fns`);return{key:n,params:e.params,typeHighlevel:e.typeHighlevel,point:e.point,bounds:e.bounds??null,boundsTightness:e.bounds?e.boundsTightness:null,closedFormMomentsShape:e.closedFormMomentsShape,sampleStage:e.sampleStage,barrierRegistry:r}}function Zn(n,e,r){return e==="point"?{mode:e,trials:n.map(t=>t.point)}:e==="bounds"?{mode:e,trials:n.map(t=>t.bounds)}:{mode:e,ranges:r,trials:n.map(t=>{const i={};for(const[o,u]of Object.entries(t.sample))Z9(u)&&(i[o]=JN(u));return{specs:i,lloads:t.lloads??null}})}}class Ot extends Error{constructor(e,r){super(`no trial has ${e} data for ${JSON.stringify(r)}`),this.missingParams=r,this.name="NoUsableTrialsError"}}function xn(n,e,r){switch(e.mode){case"point":{const i=Wr(e.mode,e.trials,n.params,r.onIncompleteTrial).map(a=>n.params.map(c=>a[c])),o=i.map(a=>n.point(a));return{kind:"point",value:o.reduce((a,c)=>a+c,0)/o.length,perTrial:o,perTrialInputs:i}}case"bounds":{const t=Wr(e.mode,e.trials,n.params,r.onIncompleteTrial),i=t.map(c=>n.params.map(s=>c[s])),o=n.bounds;if(!o)throw new Error(ri);const{lo:u,hi:a}=UN(i,o);return{kind:"bounds",lo:u,hi:a,tightness:n.boundsTightness??"loose",trialCount:t.length}}case"sample":return aT(n,e,r)}}function Wr(n,e,r,t){const i=u=>n==="sample"?u.specs:u;if(e.length===0)throw t==="skip"?new Ot(n,r):new Error(`record has no trials with ${n} data`);if(t==="error"){for(const[u,a]of e.entries()){const c=r.filter(s=>i(a)[s]===void 0);if(c.length>0)throw new Error(`Missing required ${n} input(s) for trial ${u+1}: ${JSON.stringify(c)}`)}return e}const o=e.filter(u=>r.every(a=>i(u)[a]!==void 0));if(o.length===0){const u=r.filter(a=>i(e[0])[a]===void 0);throw new Ot(n,u)}return o}function aT(n,e,r){if(r.precomputed)return _p(r.precomputed,!0);const t=r.mcIters;if(t===void 0)throw new Error("live sample evaluation requires opts.mcIters");if(n.params.length===0)throw new Error(`form ${n.key} has no params to Monte-Carlo over`);const i=Wr(e.mode,e.trials,n.params,r.onIncompleteTrial);if(n.sampleStage!==void 0)return lT(n,n.sampleStage,e,i,t,r.mcItersPerClick);const{matrixContentParts:o,sampleFreshBlock:u}=Wo(e,i),a=Yi(Uo,o,t,r.mcItersPerClick,u),c=Bo([...a.matrixKeyParts,"form",n.key],()=>Ho(ni(n.params.map(l=>a.matrices.joint.get(l)),n.point))),s=i.some(l=>ko(l.lloads))?null:oy(n,e,i);return{kind:"mc",mean:c.mean,median:c.median,p5:c.p5,p95:c.p95,samples:c.samples,densityCurve:null,provenance:"live",mcIters:a.totalIters,barrierInnerIters:null,mcPoolToken:a.poolToken,trialCount:i.length,exact:s}}function _p(n,e){return{kind:"mc",mean:n.mean,median:n.median,p5:n.p5,p95:n.p95,samples:null,densityCurve:n.density_curve??null,provenance:"precomputed",mcIters:n.mc_iters,barrierInnerIters:null,mcPoolToken:null,trialCount:0,exact:e&&n.sigma!=null?{mean:n.mean,sigma:n.sigma}:null}}function iy(n){return{independent:_p(n.independent,!0),joint:_p(n.joint,!1)}}function oy(n,e,r){return YN(r.map(t=>n.params.map(i=>t.specs[i])),n.closedFormMomentsShape,n.params.map(t=>e.ranges[t]))}function v2(n,e,r){if(e.mode!=="sample")throw new Error(`joint-dependence comparison requires sample inputs, got ${e.mode}`);if(r.precomputed)return iy(r.precomputed);const t=r.mcIters;if(t===void 0)throw new Error("live joint-dependence comparison requires opts.mcIters");if(n.params.length===0)throw new Error(`form ${n.key} has no params to Monte-Carlo over`);const i=Wr(e.mode,e.trials,n.params,r.onIncompleteTrial);if(n.sampleStage!==void 0)throw new Error(`joint dependence is not supported for form ${n.key}: correlation across an E[·] aggregation barrier has no defined semantics`);const{matrixContentParts:o,sampleFreshBlock:u}=Wo(e,i),a=Yi(Uo,o,t,r.mcItersPerClick,u),c=(d,p)=>Bo([...a.matrixKeyParts,...p,"form",n.key],()=>Ho(ni(n.params.map(h=>d.get(h)),n.point))),s=c(a.matrices.joint,[]),l=c(a.matrices.independent,["independent"]),f=(d,p)=>({kind:"mc",mean:d.mean,median:d.median,p5:d.p5,p95:d.p95,samples:d.samples,densityCurve:null,provenance:"live",mcIters:a.totalIters,barrierInnerIters:null,mcPoolToken:a.poolToken,trialCount:i.length,exact:p});return{independent:f(l,oy(n,e,i)),joint:f(s,null)}}function sT(n,e,r){if(e.mode!=="sample")throw new Error(`live sample MC key requires sample inputs, got ${e.mode}`);if(n.sampleStage!==void 0)throw new Error(`live sample MC key is not defined for E[·] barrier form ${n.key}`);const t=Wr(e.mode,e.trials,n.params,r.onIncompleteTrial),{matrixContentParts:i}=Wo(e,t);return uy(Uo,i,r.mcIters,r.mcItersPerClick)}function Wo(n,e){const r=Object.keys(e[0].specs).filter(c=>e.every(s=>s.specs[c]!==void 0)).sort(),t=[r,e.map(c=>r.map(s=>c.specs[s])),r.map(c=>n.ranges[c]??null),e.map(c=>c.lloads)],i=()=>e.map(c=>r.map(s=>bp(c.specs[s],n.ranges[s]))),o=c=>new Map(r.map((s,l)=>[s,c[l]]));return{matrixContentParts:t,sampleFreshBlock:c=>{const s=KN(i(),e.map(d=>d.lloads),r,c),l=o(s.independent),f=s.joint===s.independent?l:o(s.joint);return{independent:l,joint:f}},sampleFreshJointBlock:c=>o(gp(i(),e.map(s=>s.lloads),r,c))}}function cT(n,e,r){if(e.mode!=="sample")throw new Error(`streaming mean evaluation requires sample inputs, got ${e.mode}`);if(n.sampleStage!==void 0)throw new Error(`streaming mean evaluation of ${n.key} is not supported for formulas with E[·] aggregation barriers`);const t=r.mcIters;if(t===void 0)throw new Error("streaming mean evaluation requires opts.mcIters");if(n.params.length===0)throw new Error(`form ${n.key} has no params to Monte-Carlo over`);const i=Wr(e.mode,e.trials,n.params,r.onIncompleteTrial),{matrixContentParts:o,sampleFreshJointBlock:u}=Wo(e,i),a=p=>ni(n.params.map(h=>u(p).get(h)),n.point),c=r.mcItersPerClick;if(c===void 0){const p=["stream-mean",...o,t,"form",n.key];let h=I5(p);return h===void 0&&(h=C5(p),U1(h,a(t),0)),{mean:h.mean,n:h.n,standardError:R5(h),mcPoolToken:null}}const s=["stream-mean-pool",...o,t,c],l=ny(s),f=[...s,"form",n.key];let d=I5(f);return d===void 0?(d=C5(f),U1(d,a(t+l.extraBlocks*c),l.extraBlocks)):l.extraBlocks>d.blocksFolded?U1(d,a((l.extraBlocks-d.blocksFolded)*c),l.extraBlocks):l.extraBlocks<d.blocksFolded&&(d.blocksFolded=l.extraBlocks),{mean:d.mean,n:d.n,standardError:R5(d),mcPoolToken:l.token}}function uy(n,e,r,t){return[`${n}-pool`,...e,r,t]}function Yi(n,e,r,t,i){if(t===void 0){const a=[n,...e,r];return{matrixKeyParts:a,poolToken:null,extraBlocks:0,totalIters:r,matrices:hT(a,()=>i(r))}}const o=uy(n,e,r,t),u=ny(o);return{matrixKeyParts:[...o,"blocks",u.extraBlocks],poolToken:u.token,extraBlocks:u.extraBlocks,totalIters:r+u.extraBlocks*t,matrices:mT(o,u.extraBlocks,r,t,i)}}function lT(n,e,r,t,i,o){if(t.some(E=>{var I;return(((I=E.lloads)==null?void 0:I.latents.length)??0)>0}))throw new Error(`joint dependence is not supported for form ${n.key}: correlation across an E[·] aggregation barrier has no defined semantics`);const u=n.barrierRegistry;if(u===void 0)throw new Error(`form ${n.key} contains an E[·] barrier but no barrier registry was provided — evaluating it without one would silently compute per-draw (pre-E) semantics`);if(n.closedFormMomentsShape!==void 0)throw new Error(`form ${n.key} contains an E[·] barrier yet carries closed-form-moments shape "${n.closedFormMomentsShape}" — codegen must suppress the tag for barrier forms, since the exact-moments path would override the barrier-aware mean`);const a=e.params.filter(E=>E.barrier);for(const E of a)if(u[E.name]===void 0)throw new Error(`form ${n.key}: barrier ${E.name} is not in the barrier registry`);const c=[...new Set(Object.values(u).flatMap(E=>E.params))].sort(),s=[],l=[],f=[],d=[];for(const E of t){const I=c.filter(A=>E.specs[A]!==void 0),L=[I,I.map(A=>E.specs[A]),I.map(A=>r.ranges[A]??null)],R=Yi("barrier-inner-matrix",L,i,o,A=>{const S=I.map(w=>bp(E.specs[w],r.ranges[w])),$=gp([S],[null],I,A);return M5(new Map(I.map((w,k)=>[w,$[k]])))});R.poolToken!==null&&s.push(R.poolToken),l.push(R.extraBlocks),f.push(R.totalIters),d.push(a.map(A=>fT(R.matrixKeyParts,R.matrices.joint,A.name,u[A.name])))}const p=Object.keys(t[0].specs).filter(E=>t.every(I=>I.specs[E]!==void 0)).sort(),h=a.map(E=>E.name),m=[p,t.map(E=>p.map(I=>E.specs[I])),p.map(E=>r.ranges[E]??null),"barriers",h,i,o??null,l,d],b=Yi(Uo,m,i,o,E=>{const I=[...p,...h],L=t.map((S,$)=>[...p.map(w=>bp(S.specs[w],r.ranges[w])),...d[$].map(w=>z9({pairs:[[w,1],[w,1]]}))]),R=gp(L,t.map(()=>null),I,E),A=new Map(I.map((S,$)=>[S,R[$]]));if(A.size!==I.length)throw new Error(`barrier key collides with a svar column name (${JSON.stringify(I)})`);return M5(A)}),g=e.params.map(E=>{const I=b.matrices.joint.get(E.name);if(I===void 0)throw new Error(`form ${n.key}: no sampled column for sample-stage param ${E.name}`);return I}),_=Bo([...b.matrixKeyParts,"form",n.key],()=>Ho(ni(g,e.point))),y=b.poolToken===null?null:ry([b.poolToken,...s]);return{kind:"mc",mean:_.mean,median:_.median,p5:_.p5,p95:_.p95,samples:_.samples,densityCurve:null,provenance:"live",mcIters:b.totalIters,barrierInnerIters:Math.min(...f),mcPoolToken:y,trialCount:t.length,exact:null}}function fT(n,e,r,t){return Bo([...n,"barrier",r],()=>{const o=t.params.map(f=>{const d=e.get(f);if(d===void 0)throw new Error(`barrier ${r}: trial has no inner sample column for leaf ${f}`);return d}),u=ni(o,t.point);for(const f of u)if(!Number.isFinite(f))throw new Error(`barrier ${r}: non-finite operand draw (${f})`);const a=Ho(u);if(!Number.isFinite(a.mean))throw new Error(`barrier ${r}: non-finite mean (${a.mean})`);const c=u.length;let s=0;for(const f of u)s+=(f-a.mean)**2;const l=Math.sqrt(s/c/c)/Math.abs(a.mean);return console.debug(`[E-barrier] ${r}: n=${c} mean=${a.mean} relSE=${l}`),a}).mean}const dT=8,pT=6e6,qn=new Map;let ki=0;function M5(n){return{independent:n,joint:n}}function N5(n){let e=0;const r=new Set;for(const t of[n.independent,n.joint])for(const i of t.values())r.has(i)||(r.add(i),e+=i.length);return e}function yp(n){const e=qn.get(n);return e!==void 0&&(qn.delete(n),qn.set(n,e)),e}function Ep(n,e){for(qn.set(n,e),ki+=N5(e);(qn.size>dT||ki>pT)&&qn.size>1;){const r=qn.keys().next().value;ki-=N5(qn.get(r)),qn.delete(r)}return e}function hT(n,e){const r=gr(n);return yp(r)??Ep(r,e())}function T5(n,e){const r=new Map;for(const[t,i]of n){const o=e.get(t);if(o===void 0)throw new Error(`concatSampleMatrices: fresh block lacks column for svar ${t}`);const u=new Float64Array(i.length+o.length);u.set(i,0),u.set(o,i.length),r.set(t,u)}return r}function vT(n,e){const r=T5(n.independent,e.independent),t=n.independent===n.joint&&e.independent===e.joint?r:T5(n.joint,e.joint);return{independent:r,joint:t}}function mT(n,e,r,t,i){const o=s=>gr([...n,"blocks",s]),u=yp(o(e));if(u!==void 0)return u;let a=e-1,c;for(;a>=0&&(c=yp(o(a)))===void 0;)a--;c===void 0&&(c=Ep(o(0),i(r)),a=0);for(let s=a+1;s<=e;s++)c=Ep(o(s),vT(c,i(t)));return c}function bT(){qn.clear(),ki=0}const gT=5,_T=5,yT=[0,.25,.5,.75,1];function Ar(n){return n==="probability"?[0,1]:null}function jo(n,e){const r=gT/100*(e-n);return[n-r,e+r]}function m2(n,e,r){return n??jo(e,r)}function ET(n){return Math.max(0,-Math.floor(Math.log10(n)))}function $T(n){const e=10**Math.floor(Math.log10(n)),r=n/e;return(r<=1?1:r<=2?2:r<=5?5:10)*e}function Ki(n,e){if(n===0&&e===1)return yT.map(u=>({value:u,label:u.toFixed(2)}));if(e<=n)return[{value:n,label:n.toFixed(2)}];const r=$T((e-n)/_T),t=ET(r),i=[],o=r*1e-9;for(let u=Math.ceil(n/r)*r;u<=e+o;u+=r){const a=Math.abs(u)<o?0:u;i.push({value:a,label:a.toFixed(t)})}return i}const q5=4,wT=.25,ST=2.5066282746310002;function ay(n,e,r,t){const i=n.length;let o=0,u=0;for(let p=0;p<i;p++)o+=n[p],u+=n[p]*n[p];const a=o/i,c=Math.max(0,u/i-a*a),s=Math.sqrt(c),l=wT*s*i**-.2;if(l<=0)return null;const f=new Float64Array(e);let d=0;for(let p=0;p<e;p++){const h=r+(t-r)*p/(e-1);let m=0;for(let v=0;v<i;v++){const b=(h-n[v])/l;if(!(b>q5)){if(b<-q5)break;m+=Math.exp(-.5*b*b)}}f[p]=m/(i*l*ST),f[p]>d&&(d=f[p])}return{density:f,maxD:d}}const Ie={top:4,bottom:18,left:4,right:4},AT="12px -apple-system, Helvetica, sans-serif",b2="#333",Go=1.5,LT="#777",sy="#2166ac",kT="rgba(110, 110, 110, 0.12)",cy="rgba(33, 102, 172, 0.12)",Ji=b2,ly="rgba(51, 51, 51, 0.10)",zi=sy,fy=cy;function jr(n,e,r,t,i){const o=n.width,u=n.height,a=n.getContext("2d");if(!a)return;a.clearRect(0,0,o,u);const c=o-Ie.left-Ie.right,s=u-Ie.top-Ie.bottom,l=Ie.top+s;let f,d;if(e instanceof Float64Array){if(e.length===0)return;[f,d]=m2(i,e[0],e[e.length-1])}else f=e.start,d=e.end;if(d<=f){O5(a,Ie.left+c/2,s),At(a,[{value:f,label:f.toFixed(2)}],()=>Ie.left+c/2,l);return}const p=b=>Ie.left+(b-f)/(d-f)*c;let h,m;const v=Math.round(c);if(e instanceof Float64Array){if(e[e.length-1]-e[0]<(d-f)/c){O5(a,p((e[0]+e[e.length-1])/2),s),At(a,Ki(f,d),p,l);return}const g=ay(e,v,f,d);if(!g)return;h=g.density,m=g.maxD}else{h=new Float64Array(v),m=1;const b=e.heights.length;for(let g=0;g<v;g++){const y=(f+(d-f)*g/(v-1)-e.start)/(e.end-e.start)*(b-1),E=Math.floor(y),I=Math.min(E+1,b-1),L=y-E;h[g]=e.heights[E]*(1-L)+e.heights[I]*L}}if(!(m<=0)){a.fillStyle="#e8e8e8",a.fillRect(p(r),Ie.top,p(t)-p(r),s),a.beginPath();for(let b=0;b<v;b++){const g=Ie.left+b/(v-1)*c,_=Ie.top+s-h[b]/m*s;b===0?a.moveTo(g,_):a.lineTo(g,_)}a.strokeStyle=b2,a.lineWidth=Go,a.stroke(),At(a,Ki(f,d),p,l)}}function Qi(n,e,r){const t=n.width,i=n.height,o=n.getContext("2d");if(!o||(o.clearRect(0,0,t,i),e.length===0))return;const u=t-Ie.left-Ie.right,a=i-Ie.top-Ie.bottom,c=Ie.top+a,s=e.map(v=>g2(v.source,r)),l=(r==null?void 0:r[0])??Math.min(...s.map(v=>v[0])),f=(r==null?void 0:r[1])??Math.max(...s.map(v=>v[1])),d=v=>Ie.left+(v-l)/(f-l)*u;if(f<=l){for(const v of e)dy(o,Ie.left+u/2,a,v.color);At(o,[{value:l,label:l.toFixed(2)}],()=>Ie.left+u/2,c);return}const p=Math.round(u),h=e.map(v=>IT(v.source,p,l,f));let m=0;for(const v of h)if(v.density!==null)for(const b of v.density)m=Math.max(m,b);for(const v of e)v.bandFill!==null&&(o.fillStyle=v.bandFill,o.fillRect(d(v.p5),Ie.top,d(v.p95)-d(v.p5),a));e.forEach((v,b)=>{CT(o,h[b],p,u,a,m,v.color,v.dashed,d)}),At(o,Ki(l,f),d,c)}function g2(n,e){if(!(n instanceof Float64Array))return[n.start,n.end];if(n.length===0)throw new Error("density overlay source has no samples");return m2(e,n[0],n[n.length-1])}function IT(n,e,r,t){if(n instanceof Float64Array){if(n.length===0)throw new Error("density overlay source has no samples");if(n[n.length-1]-n[0]<(t-r)/e)return{density:null,pointMassX:(n[0]+n[n.length-1])/2};const a=ay(n,e,r,t);return a===null?{density:null,pointMassX:(n[0]+n[n.length-1])/2}:(F5(a.density,r,t),{density:a.density,pointMassX:null})}const i=new Float64Array(e),o=n.heights.length;for(let u=0;u<e;u++){const a=r+(t-r)*u/(e-1);if(a<n.start||a>n.end||n.end<=n.start||o===0){i[u]=0;continue}const c=(a-n.start)/(n.end-n.start)*(o-1),s=Math.floor(c),l=Math.min(s+1,o-1),f=c-s;i[u]=n.heights[s]*(1-f)+n.heights[l]*f}return F5(i,r,t),{density:i,pointMassX:null}}function F5(n,e,r){const t=(r-e)/Math.max(1,n.length-1);let i=0;for(const o of n)i+=o*t;if(!(i<=0))for(let o=0;o<n.length;o++)n[o]=n[o]/i}function CT(n,e,r,t,i,o,u,a,c){if(e.pointMassX!==null){dy(n,c(e.pointMassX),i,u);return}if(!(e.density===null||o<=0)){n.beginPath();for(let s=0;s<r;s++){const l=Ie.left+s/(r-1)*t,f=Ie.top+i-e.density[s]/o*i;s===0?n.moveTo(l,f):n.lineTo(l,f)}n.strokeStyle=u,n.lineWidth=Go,n.setLineDash(a?[5,4]:[]),n.stroke(),n.setLineDash([])}}function O5(n,e,r){n.beginPath(),n.moveTo(e,Ie.top+r),n.lineTo(e,Ie.top),n.strokeStyle=b2,n.lineWidth=Go,n.stroke()}function dy(n,e,r,t){n.beginPath(),n.moveTo(e,Ie.top+r),n.lineTo(e,Ie.top),n.strokeStyle=t,n.lineWidth=Go,n.stroke()}function At(n,e,r,t){n.strokeStyle="#bbb",n.lineWidth=.5,n.fillStyle="#4d4d4d",n.font=AT,n.textAlign="center";for(const i of e){const o=r(i.value);n.beginPath(),n.moveTo(o,t),n.lineTo(o,t+3),n.stroke(),n.fillText(i.label,o,t+12)}}function RT(n,e){if(n.length!==e.length)throw new Error(`pwlToShape: xs length ${n.length} !== ys length ${e.length}`);return{points:n.map((r,t)=>({x:r,y:e[t]}))}}const D5=.001,P5=101;function MT(n){const e=n.inverseCdf(D5),r=n.inverseCdf(1-D5);if(!(r>e))return{points:[{x:e,y:1}]};const t=[],i=[];for(let u=0;u<P5;u++){const a=e+u/(P5-1)*(r-e);t.push(a),i.push(n.pdf(a))}const o=Math.max(...i);if(o<=0)throw new Error("familyToShape: zero density over the display window");return{points:t.map((u,a)=>({x:u,y:i[a]/o}))}}const Yn={top:4,bottom:18,left:4,right:4},NT="10px -apple-system, Helvetica, sans-serif",TT="rgba(100, 149, 237, 0.25)",x5="#4477bb",H5=1.5;function Zi(n,e,r){const t=n.width,i=n.height,o=n.getContext("2d");if(!o)return;o.clearRect(0,0,t,i);const{points:u}=e;if(u.length===0)return;const a=t-Yn.left-Yn.right,c=i-Yn.top-Yn.bottom,s=Yn.top+c,[l,f]=r;if(f<=l){const b=Yn.left+a/2;Math.max(...u.map(g=>g.y))>0&&(o.beginPath(),o.moveTo(b,s),o.lineTo(b,Yn.top),o.strokeStyle=x5,o.lineWidth=H5,o.stroke()),B5(o,[{value:l,label:l.toFixed(2)}],()=>b,s);return}const d=b=>Yn.left+(b-l)/(f-l)*a,p=Math.max(...u.map(b=>b.y));if(p<=0)return;const h=b=>Yn.top+c-b/p*c;o.beginPath(),o.moveTo(d(u[0].x),s);for(const b of u)o.lineTo(d(b.x),h(b.y));o.lineTo(d(u[u.length-1].x),s),o.closePath(),o.fillStyle=TT,o.fill(),o.beginPath();const m=u[0],v=u[u.length-1];m.y>0?(o.moveTo(d(m.x),s),o.lineTo(d(m.x),h(m.y))):o.moveTo(d(m.x),h(m.y));for(let b=1;b<u.length;b++)o.lineTo(d(u[b].x),h(u[b].y));v.y>0&&o.lineTo(d(v.x),s),o.strokeStyle=x5,o.lineWidth=H5,o.stroke(),B5(o,Ki(l,f),d,s)}function B5(n,e,r,t){n.strokeStyle="#bbb",n.lineWidth=.5,n.fillStyle="#4d4d4d",n.font=NT,n.textAlign="center";for(const i of e){const o=r(i.value);n.beginPath(),n.moveTo(o,t),n.lineTo(o,t+3),n.stroke(),n.fillText(i.label,o,t+12)}}const py="density-log-badge",qT="density-log-badge-left",FT="density-log-badge-right",OT="log",DT="Hover (or focus) to redraw as the density of ln(value); tick labels in that view are ln(value). Leave to restore.",_2=new Set(["probability","oddsratio","posreal"]),PT=.25,W1=256;function hy(n){const e=new Float64Array(n.length);for(let r=0;r<n.length;r++)e[r]=Math.log(n[r]);return e}function vy(n){return n.length>0&&n[0]>0}function xT(n,e){const r=n.heights.length;if(r===0||n.end<=n.start||e<n.start||e>n.end)return 0;const t=(e-n.start)/(n.end-n.start)*(r-1),i=Math.floor(t),o=Math.min(i+1,r-1),u=t-i;return n.heights[i]*(1-u)+n.heights[o]*u}function my(n){const e=n.heights.length;if(e<2||n.end<=0||n.end<=n.start)return null;let r=n.start;if(r<=0){const a=(n.end-n.start)/(e-1);if(r=n.start+Math.ceil(-n.start/a+1e-12)*a,r<=0||r>=n.end)return null}const t=Math.log(r),i=Math.log(n.end),o=new Array(e);let u=0;for(let a=0;a<e;a++){const c=t+(i-t)*a/(e-1),s=Math.exp(c),l=xT(n,s)*s;o[a]=l,l>u&&(u=l)}if(u<=0)return null;for(let a=0;a<e;a++)o[a]=o[a]/u;return{start:t,end:i,sep:(i-t)/(e-1),heights:o}}function HT(n){const e=n.points.filter(r=>r.x>0).map(r=>({x:Math.log(r.x),y:r.y*r.x}));return e.length===0||Math.max(...e.map(r=>r.y))<=0?null:{points:e}}function eo(n,e){return n>0?Math.log(n):e}function y2(n,e){return e<n?"right":"left"}function E2(n,e,r){const t=(r-e)*PT,i=e+t,o=r-t;if(n instanceof Float64Array){let l=0,f=0;for(const d of n)d<=i?l++:d>=o&&f++;return{left:l/n.length,right:f/n.length}}const u=n.heights.length;let a=0,c=0,s=0;for(let l=0;l<u;l++){const f=n.start+(n.end-n.start)*(u===1?0:l/(u-1)),d=n.heights[l];s+=d,f<=i?a+=d:f>=o&&(c+=d)}return s<=0?{left:0,right:0}:{left:a/s,right:c/s}}function BT(n,e,r){const t=n.points,i=new Array(W1);let o=0;for(let u=0;u<W1;u++){const a=e+(r-e)*u/(W1-1);for(;o<t.length-1&&t[o+1].x<a;)o++;const c=t[o],s=t[Math.min(o+1,t.length-1)];if(a<c.x||a>s.x){i[u]=0;continue}i[u]=s.x===c.x?c.y:c.y+(s.y-c.y)*(a-c.x)/(s.x-c.x)}return E2({start:e,end:r,sep:0,heights:i},e,r)}function UT(n){var e;(e=n.querySelector(`.${py}`))==null||e.remove()}function $2(n){const e=n.parentElement;return e!=null&&e.classList.contains("resizable-canvas-wrapper")?(UT(e),e):(console.warn("density_log_hover: canvas is not wrapped by makeResizable"),null)}function w2(n,e,r,t){const i=document.createElement("span");i.className=`${py} `+(e==="left"?qT:FT),i.textContent=OT,i.title=DT,i.tabIndex=0,i.addEventListener("pointerenter",r),i.addEventListener("pointerleave",t),i.addEventListener("focus",r),i.addEventListener("blur",t),n.appendChild(i)}function by(n,e,r,t,i){const o=$2(n);if(o===null||!_2.has(i))return;const u=Ar(i),a=()=>jr(n,e,r,t,u);let c,s;if(e instanceof Float64Array){if(!vy(e))return;c=hy(e),s=jo(c[0],c[c.length-1])[0]}else{const h=my(e);if(h===null)return;c=h,s=h.start}const l=()=>jr(n,c,eo(r,s),eo(t,s),null),[f,d]=g2(e,u),p=E2(e,f,d);w2(o,y2(p.left,p.right),l,a)}function gy(n,e,r){const t=$2(n);if(t===null||!_2.has(r)||e.length===0)return;const i=Ar(r),o=()=>Qi(n,e,i),u=[];for(const p of e){let h,m;if(p.source instanceof Float64Array){if(!vy(p.source))return;h=hy(p.source),m=jo(h[0],h[h.length-1])[0]}else{const v=my(p.source);if(v===null)return;h=v,m=v.start}u.push({...p,source:h,p5:eo(p.p5,m),p95:eo(p.p95,m)})}const a=()=>Qi(n,u,null),c=e.map(p=>g2(p.source,i)),s=(i==null?void 0:i[0])??Math.min(...c.map(p=>p[0])),l=(i==null?void 0:i[1])??Math.max(...c.map(p=>p[1]));let f=0,d=0;for(const p of e){const h=E2(p.source,s,l);f+=h.left/e.length,d+=h.right/e.length}w2(t,y2(f,d),a,o)}function WT(n,e,r,t){const i=$2(n);if(i===null||t===void 0||!_2.has(t))return;const o=HT(e);if(o===null)return;const u=o.points[0],a=o.points[o.points.length-1],c=a.x>u.x?jo(u.x,a.x):[u.x,a.x],s=()=>Zi(n,e,r),l=()=>Zi(n,o,c),f=BT(e,r[0],r[1]);w2(i,y2(f.left,f.right),l,s)}const Vo=["plainnum","plaincode","richcode"];function _y(n){return n==="all"||Vo.includes(n)}function S2(n){return Vo.filter(e=>n.some(r=>r.availableModes.includes(e)))}function Xo(n,e){return n==="all"?"all":S2(e).includes(n)?n:"all"}function Yo(n,e){return n.availableModes.includes(e)}function jT(n,e,r){const t=Xo(e,r);return t==="all"?no(n,n.availableModes[0]):Yo(n,t)?no(n,t):null}function yy(n,e){const r=Xo(e,n);for(const t of n){const i=r==="all"?no(t,t.availableModes[0]):Yo(t,r)?no(t,r):null;if(i)return i}return null}function no(n,e){return e==="plainnum"&&n.plainnumIndex!==null?`metho-plainnum:${n.plainnumIndex}`:e==="plaincode"&&n.plaincodeIndex!==null?`metho-plaincode:${n.plaincodeIndex}`:e==="richcode"&&n.richcodeIndex!==null?`metho-richcode:${n.richcodeIndex}`:null}function A2(n,e){const{source:r,index:t}=me(n);if(en(r)!=="metho")return null;const i=bn(r);for(let o=0;o<e.length;o++){const u=e[o];if(i==="plainnum"&&u.plainnumIndex===t)return{group:u,groupIndex:o,mode:"plainnum"};if(i==="plaincode"&&u.plaincodeIndex===t)return{group:u,groupIndex:o,mode:"plaincode"};if(i==="richcode"&&u.richcodeIndex===t)return{group:u,groupIndex:o,mode:"richcode"}}return null}function Ey(n,e){return e==="plainnum"&&n.plainnumIndex!==null?`metho-plainnum:${n.plainnumIndex}`:e==="plaincode"&&n.plaincodeIndex!==null?`metho-plaincode:${n.plaincodeIndex}`:e==="richcode"&&n.richcodeIndex!==null?`metho-richcode:${n.richcodeIndex}`:null}function GT(n,e,r,t,i){const o=t.ui.whose,{source:u}=me(o),a=en(u)==="metho",c=Y7(u);let s='<div class="whose-toggle">';const l=De(o)?o:t.ui.lastYoursWhose;if(s+=`<button class="whose-btn${De(o)?" active":""}" data-whose="${l}">Yours</button>`,De(o)&&e.has_cparams()){const d=o==="yours-plaincode";s+='<div class="mode-radio yours-fixfree-radio">',s+=`<button class="mode-radio-btn${d?"":" active"}" data-whose="yours-plainnum">fix</button>`,s+=`<button class="mode-radio-btn${d?" active":""}" data-whose="yours-plaincode">free</button>`,s+="</div>"}if(r.adhocPlainnumEntries.length>0||r.adhocPlaincodeEntries.length>0){s+=`<select id="adhoc-result-select" class="whose-select${c?" whose-select-active":""}${a?" whose-select-faded":""}" data-whose-source="adhoc">`,s+=`<option value="" disabled${c?"":" selected"}>Adhoc…</option>`;for(const h of V7){const m=X7(r,h);for(let v=0;v<m.length;v++){const b=m[v],g=r.adhocPresets[b.presetIndex],_=DS(g,h,b);if(!_)continue;const y=HS(g,h,_),E=`adhoc-${h}:${v}`;s+=`<option value="${E}"${o===E?" selected":""}>${J(y)}</option>`}}s+="</select>"}if(i.length>0){const d=a?A2(o,i):null,p=c?" whose-select-faded":"",h=a?" whose-select-active":"",m=XS(i),v=S2(i),b=Xo(t.ui.presetQueryModeFilter,i),g=v.length>=2,_=i.map((y,E)=>({group:y,groupIndex:E})).filter(({group:y})=>b==="all"||Yo(y,b));if(s+='<div class="methodical-select-stack">',g){s+='<select id="preset-query-mode-filter" class="preset-query-mode-filter">',s+=`<option value="all"${b==="all"?" selected":""}>all</option>`;for(const y of Vo){if(!v.includes(y))continue;s+=`<option value="${y}"${b===y?" selected":""}>${y}</option>`}s+="</select>"}s+=`<select id="methodical-result-select" class="whose-select${h}${p}" data-whose-source="ai-results">`,s+=`<option value="" disabled${a?"":" selected"}>AI results…</option>`;for(const{groupIndex:y}of _){const E=m[y],I=d&&d.groupIndex===y?" selected":"";s+=`<option value="group:${y}"${I}>${J(E)}</option>`}if(s+="</select>",s+="</div>",d&&d.group.availableModes.length>=1){s+='<div id="query-mode-radio" class="mode-radio">';for(const y of d.group.availableModes){const E=d.mode===y;s+=`<button class="mode-radio-btn${E?" active":""}" data-mode="${y}">${y}</button>`}s+="</div>"}}if(s+="</div>",a&&e.get_aopt_bare_names().includes("framing_POVs_enabled")){const d=ze(o,r);if(!d)throw new Error(`No active methodical result for whose selection ${JSON.stringify(o)}`);const p=d.aopts.framing_POVs_enabled;if(!Array.isArray(p)||!p.every(h=>typeof h=="string"))throw new Error("Methodical result framing_POVs_enabled must be a string array, got "+JSON.stringify(p));s+=`<div class="methodical-framing-flabels">Framing: ${J(p.join(" "))}</div>`}n.innerHTML=s}function VT(n,e,r,t){var p;const i=t.ui.whose;if(De(i))return n.innerHTML="",!1;const o=ze(i,r);if(!o)return n.innerHTML='<div style="color: #888; font-size: 13px;">No data.</div>',!1;const u=t.ui.inputMode,a=e.svar_entries().map(h=>h.bareName),c=a.length,s=QS(i,o,u,a),l=s.length;if(l===0)return n.innerHTML='<div style="color: #888; font-size: 13px;">No data for this mode.</div>',!1;const f=l>1;let d='<div class="sample-grid">';for(let h=0;h<l;h++){d+='<div class="sample-col">',f&&(d+=`<div class="sample-col-header">Sample ${h+1}</div>`);for(let m=0;m<c;m++){const v=((p=s[h])==null?void 0:p[m])??"";d+=`<div class="sample-cell">${J(v)}</div>`}d+="</div>"}return d+="</div>",n.innerHTML=d,f}function XT(n){return n.precomputed[In]??null}function U5(n,e,r){if(De(n))return!0;const t=ze(n,e);return t?J7(n,t)[r]:!1}function YT(n){const e=n.config.conclusion_expr;return n.get_display_expr(e)??e}function ti(n,e){return Se(YT(n),e)}function $y(n,e){return`<div class="density-overlay-plot"><div class="density-overlay-legend" aria-label="Density curve legend">${e.map(t=>`<span style="--density-legend-color: ${fe(t.color)}; --density-legend-style: ${t.dashed?"dashed":"solid"}">${J(t.label)}</span>`).join("")}</div><canvas id="${fe(n)}" width="400" height="200"></canvas></div>`}const Or={top:10,bottom:35,left:50,right:15},KT=800,JT=500,W5="12px Consolas, Monaco, Courier New, monospace",zT=5,QT=3,ZT=2,j5=3,G5=5,eq=10,nq=1,rq=15,V5=["#333","#c44","#44c","#4c4","#c84","#84c","#4cc","#c4c","#888","#ca4"],wy="#333",Sy=2,tq=1.5,iq={color:wy,lineWidth:Sy};function oq(n,e,r=eq,t=[]){if(e)return e;let i=1/0,o=-1/0;const u=l=>{l<i&&(i=l),l>o&&(o=l)};for(const l of n)for(const f of l.points)u(f.y);for(const l of t)u(l.y);if(!Number.isFinite(i)||!Number.isFinite(o))return null;const s=(o-i||nq)*r/100;return[i-s,o+s]}function ro(n,e,r){n.width||(n.width=KT),n.height||(n.height=JT);const t=n.width,i=n.height,o=n.getContext("2d");if(!o)return;o.clearRect(0,0,t,i);const u=r.scatterOverlay;if(e.length===0&&!u)return;const a=i-Or.top-Or.bottom,c=oq(e,r.yRange,r.yRangePaddingPercent,u==null?void 0:u.points);if(!c)return;const[s,l]=c,f=uq(s,l,zT),d=f.length>1?f[1]-f[0]:l-s,p=f.map(S=>aq(S,d));o.font=W5;const h=p.reduce((S,$)=>Math.max(S,o.measureText($).width),0),m=Math.max(Or.left,Math.ceil(h)+j5+G5),v=t-m-Or.right;if(v<=0)return;const b=r.xLabels.length,g=b>1?v/(b-1):0,_=S=>m+S*g,y=S=>Or.top+a-(S-s)/(l-s)*a;o.save(),o.strokeStyle="#ddd",o.lineWidth=.5,o.setLineDash([3,3]);for(const S of f){const $=y(S);o.beginPath(),o.moveTo(m,$),o.lineTo(m+v,$),o.stroke()}if(o.restore(),u){o.fillStyle=u.color;for(const S of u.points)o.beginPath(),o.arc(_(S.x),y(S.y),ZT,0,Math.PI*2),o.fill()}const E=e.length===1;for(let S=0;S<e.length;S++){const $=e[S],w=$.color??(E?wy:V5[S%V5.length]),k=$.lineWidth??(E?Sy:tq);o.beginPath();for(let C=0;C<$.points.length;C++){const F=$.points[C],T=_(F.x),B=y(F.y);C===0?o.moveTo(T,B):o.lineTo(T,B)}o.strokeStyle=w,o.lineWidth=k,o.stroke(),o.fillStyle=w;for(const C of $.points)o.beginPath(),o.arc(_(C.x),y(C.y),QT,0,Math.PI*2),o.fill()}const I=Or.top+a;o.strokeStyle="#bbb",o.lineWidth=.5,o.fillStyle="#4d4d4d",o.font=W5,o.textAlign="center",o.textBaseline="top";const L=r.xLabels.reduce((S,$)=>Math.max(S,o.measureText($).width),0),R=b>1?g:v,A=L>R-4;for(let S=0;S<b;S++){const $=_(S);o.beginPath(),o.moveTo($,I),o.lineTo($,I+3),o.stroke(),o.save(),A?(o.translate($,I+5),o.rotate(-Math.PI/4),o.textAlign="right",o.fillText(r.xLabels[S],0,0)):o.fillText(r.xLabels[S],$,I+5),o.restore()}o.fillStyle="#777",o.textAlign="center",o.textBaseline="bottom",o.fillText(r.xAxisLabel,m+v/2,i-1),o.fillStyle="#4d4d4d",o.textAlign="right",o.textBaseline="middle";for(let S=0;S<f.length;S++){const $=f[S],w=y($);o.strokeStyle="#bbb",o.lineWidth=.5,o.beginPath(),o.moveTo(m-j5,w),o.lineTo(m,w),o.stroke(),o.fillText(p[S],m-G5,w)}}function uq(n,e,r){const t=e-n;if(t<=0)return[n];const i=t/(r-1),o=Math.pow(10,Math.floor(Math.log10(i))),u=i/o;let a;u<=1.5?a=1*o:u<=3.5?a=2*o:u<=7.5?a=5*o:a=10*o;const c=Math.ceil(n/a)*a,s=[];for(let l=c;l<=e+a*.001;l+=a)s.push(l);return s}function aq(n,e){if(Number.isInteger(n)||!Number.isFinite(e)||e<=0)return n.toString();const r=Math.min(rq,Math.max(0,-Math.floor(Math.log10(e)))),t=n.toFixed(r).replace(/0+$/,"").replace(/\.$/,"");return t==="-0"?"0":t}const je={top:10,bottom:35,left:60,right:60},X5=80,Y5=60,sq=35,$p="12px Consolas, Monaco, Courier New, monospace",cq="12px Consolas, Monaco, Courier New, monospace",Ay="#ddd",lq="#eee",fq=220,K5=10,dq=80,pq=25,J5=95,yi=12,hq=8,z5=4,j1=64;function to(n,e){var v;const r=e.xLabels.length,t=e.yLabels.length;if(r===0||t===0)return;let i,o,u,a;n.width&&n.height?(i=n.width,o=n.height,u=(i-je.left-je.right)/r,a=(o-je.top-je.bottom)/t):(u=Math.max(X5,X5),a=Math.max(Y5,Y5),i=je.left+r*u+je.right,o=je.top+t*a+je.bottom,n.width=i,n.height=o);const c=n.getContext("2d");if(!c)return;c.clearRect(0,0,i,o);let s,l,f;if(e.valueRange)[s,l]=e.valueRange,f=!0;else{s=1/0,l=-1/0;for(const b of e.cells)for(const g of b)g!==null&&(g<s&&(s=g),g>l&&(l=g));f=isFinite(s)&&isFinite(l)}const d=f&&l-s||1,p=u>=sq;c.font=cq,c.textAlign="center",c.textBaseline="middle";for(let b=0;b<t;b++)for(let g=0;g<r;g++){const _=je.left+g*u,y=je.top+b*a,E=((v=e.cells[b])==null?void 0:v[g])??null;if(E===null)c.fillStyle=lq,c.fillRect(_,y,u,a);else{const I=f?(E-s)/d:0;c.fillStyle=Ly(I),c.fillRect(_,y,u,a),p&&(c.fillStyle=I>.55?"#fff":"#333",c.fillText(wp(E),_+u/2,y+a/2))}c.strokeStyle=Ay,c.lineWidth=1,c.strokeRect(_,y,u,a)}c.fillStyle="#4d4d4d",c.font=$p,c.textBaseline="top";const m=e.xLabels.reduce((b,g)=>Math.max(b,c.measureText(g).width),0)>u-4;for(let b=0;b<r;b++){const g=je.left+b*u+u/2,_=je.top+t*a+4;c.save(),c.textAlign="center",m?(c.translate(g,_),c.rotate(-Math.PI/4),c.textAlign="right",c.fillText(e.xLabels[b],0,0)):c.fillText(e.xLabels[b],g,_),c.restore()}c.fillStyle="#777",c.textAlign="center",c.textBaseline="bottom",c.fillText(e.xAxisLabel,je.left+r*u/2,o-1),c.fillStyle="#4d4d4d",c.font=$p,c.textAlign="right",c.textBaseline="middle";for(let b=0;b<t;b++){const g=je.top+b*a+a/2;c.fillText(e.yLabels[b],je.left-5,g)}c.save(),c.fillStyle="#777",c.textAlign="center",c.textBaseline="top",c.translate(8,je.top+t*a/2),c.rotate(-Math.PI/2),c.fillText(e.yAxisLabel,0,0),c.restore(),f&&vq(c,i,o,t*a,s,l)}function Ly(n){const e=K5+(dq-K5)*n,r=J5+(pq-J5)*n;return`hsl(${fq}, ${e.toFixed(0)}%, ${r.toFixed(0)}%)`}function wp(n){return Number.isInteger(n)?n.toString():n.toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}function vq(n,e,r,t,i,o){const u=e-je.right+hq,a=je.top,c=t,s=c/j1;for(let l=0;l<j1;l++){const f=1-l/(j1-1);n.fillStyle=Ly(f),n.fillRect(u,a+l*s,yi,s+1)}n.strokeStyle=Ay,n.lineWidth=1,n.strokeRect(u,a,yi,c),n.fillStyle="#4d4d4d",n.font=$p,n.textAlign="left",n.textBaseline="middle",n.fillText(wp(o),u+yi+z5,a),n.fillText(wp(i),u+yi+z5,a+c)}const Q5={};function mq(n){let e=Q5[n];if(e)return e;e=Q5[n]=[];for(let r=0;r<128;r++){const t=String.fromCharCode(r);e.push(t)}for(let r=0;r<n.length;r++){const t=n.charCodeAt(r);e[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2)}return e}function Gr(n,e){typeof e!="string"&&(e=Gr.defaultChars);const r=mq(e);return n.replace(/(%[a-f0-9]{2})+/gi,function(t){let i="";for(let o=0,u=t.length;o<u;o+=3){const a=parseInt(t.slice(o+1,o+3),16);if(a<128){i+=r[a];continue}if((a&224)===192&&o+3<u){const c=parseInt(t.slice(o+4,o+6),16);if((c&192)===128){const s=a<<6&1984|c&63;s<128?i+="��":i+=String.fromCharCode(s),o+=3;continue}}if((a&240)===224&&o+6<u){const c=parseInt(t.slice(o+4,o+6),16),s=parseInt(t.slice(o+7,o+9),16);if((c&192)===128&&(s&192)===128){const l=a<<12&61440|c<<6&4032|s&63;l<2048||l>=55296&&l<=57343?i+="���":i+=String.fromCharCode(l),o+=6;continue}}if((a&248)===240&&o+9<u){const c=parseInt(t.slice(o+4,o+6),16),s=parseInt(t.slice(o+7,o+9),16),l=parseInt(t.slice(o+10,o+12),16);if((c&192)===128&&(s&192)===128&&(l&192)===128){let f=a<<18&1835008|c<<12&258048|s<<6&4032|l&63;f<65536||f>1114111?i+="����":(f-=65536,i+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),o+=9;continue}}i+="�"}return i})}Gr.defaultChars=";/?:@&=+$,#";Gr.componentChars="";const Z5={};function bq(n){let e=Z5[n];if(e)return e;e=Z5[n]=[];for(let r=0;r<128;r++){const t=String.fromCharCode(r);/^[0-9a-z]$/i.test(t)?e.push(t):e.push("%"+("0"+r.toString(16).toUpperCase()).slice(-2))}for(let r=0;r<n.length;r++)e[n.charCodeAt(r)]=n[r];return e}function ii(n,e,r){typeof e!="string"&&(r=e,e=ii.defaultChars),typeof r>"u"&&(r=!0);const t=bq(e);let i="";for(let o=0,u=n.length;o<u;o++){const a=n.charCodeAt(o);if(r&&a===37&&o+2<u&&/^[0-9a-f]{2}$/i.test(n.slice(o+1,o+3))){i+=n.slice(o,o+3),o+=2;continue}if(a<128){i+=t[a];continue}if(a>=55296&&a<=57343){if(a>=55296&&a<=56319&&o+1<u){const c=n.charCodeAt(o+1);if(c>=56320&&c<=57343){i+=encodeURIComponent(n[o]+n[o+1]),o++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(n[o])}return i}ii.defaultChars=";/?:@&=+$,-_.!~*'()#";ii.componentChars="-_.!~*'()";function L2(n){let e="";return e+=n.protocol||"",e+=n.slashes?"//":"",e+=n.auth?n.auth+"@":"",n.hostname&&n.hostname.indexOf(":")!==-1?e+="["+n.hostname+"]":e+=n.hostname||"",e+=n.port?":"+n.port:"",e+=n.pathname||"",e+=n.search||"",e+=n.hash||"",e}function io(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const gq=/^([a-z0-9.+-]+:)/i,_q=/:[0-9]*$/,yq=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Eq=["<",">",'"',"`"," ","\r",`
`,"	"],$q=["{","}","|","\\","^","`"].concat(Eq),wq=["'"].concat($q),e8=["%","/","?",";","#"].concat(wq),n8=["/","?","#"],Sq=255,r8=/^[+a-z0-9A-Z_-]{0,63}$/,Aq=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,t8={javascript:!0,"javascript:":!0},i8={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function k2(n,e){if(n&&n instanceof io)return n;const r=new io;return r.parse(n,e),r}io.prototype.parse=function(n,e){let r,t,i,o=n;if(o=o.trim(),!e&&n.split("#").length===1){const s=yq.exec(o);if(s)return this.pathname=s[1],s[2]&&(this.search=s[2]),this}let u=gq.exec(o);if(u&&(u=u[0],r=u.toLowerCase(),this.protocol=u,o=o.substr(u.length)),(e||u||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=o.substr(0,2)==="//",i&&!(u&&t8[u])&&(o=o.substr(2),this.slashes=!0)),!t8[u]&&(i||u&&!i8[u])){let s=-1;for(let h=0;h<n8.length;h++)t=o.indexOf(n8[h]),t!==-1&&(s===-1||t<s)&&(s=t);let l,f;s===-1?f=o.lastIndexOf("@"):f=o.lastIndexOf("@",s),f!==-1&&(l=o.slice(0,f),o=o.slice(f+1),this.auth=l),s=-1;for(let h=0;h<e8.length;h++)t=o.indexOf(e8[h]),t!==-1&&(s===-1||t<s)&&(s=t);s===-1&&(s=o.length),o[s-1]===":"&&s--;const d=o.slice(0,s);o=o.slice(s),this.parseHost(d),this.hostname=this.hostname||"";const p=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!p){const h=this.hostname.split(/\./);for(let m=0,v=h.length;m<v;m++){const b=h[m];if(b&&!b.match(r8)){let g="";for(let _=0,y=b.length;_<y;_++)b.charCodeAt(_)>127?g+="x":g+=b[_];if(!g.match(r8)){const _=h.slice(0,m),y=h.slice(m+1),E=b.match(Aq);E&&(_.push(E[1]),y.unshift(E[2])),y.length&&(o=y.join(".")+o),this.hostname=_.join(".");break}}}}this.hostname.length>Sq&&(this.hostname=""),p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const a=o.indexOf("#");a!==-1&&(this.hash=o.substr(a),o=o.slice(0,a));const c=o.indexOf("?");return c!==-1&&(this.search=o.substr(c),o=o.slice(0,c)),o&&(this.pathname=o),i8[r]&&this.hostname&&!this.pathname&&(this.pathname=""),this};io.prototype.parseHost=function(n){let e=_q.exec(n);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),n=n.substr(0,n.length-e.length)),n&&(this.hostname=n)};const Lq=Object.freeze(Object.defineProperty({__proto__:null,decode:Gr,encode:ii,format:L2,parse:k2},Symbol.toStringTag,{value:"Module"})),ky=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Iy=/[\0-\x1F\x7F-\x9F]/,kq=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,I2=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,Cy=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Ry=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Iq=Object.freeze(Object.defineProperty({__proto__:null,Any:ky,Cc:Iy,Cf:kq,P:I2,S:Cy,Z:Ry},Symbol.toStringTag,{value:"Module"})),Cq=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(n=>n.charCodeAt(0))),Rq=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(n=>n.charCodeAt(0)));var G1;const Mq=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),Nq=(G1=String.fromCodePoint)!==null&&G1!==void 0?G1:function(n){let e="";return n>65535&&(n-=65536,e+=String.fromCharCode(n>>>10&1023|55296),n=56320|n&1023),e+=String.fromCharCode(n),e};function Tq(n){var e;return n>=55296&&n<=57343||n>1114111?65533:(e=Mq.get(n))!==null&&e!==void 0?e:n}var Ve;(function(n){n[n.NUM=35]="NUM",n[n.SEMI=59]="SEMI",n[n.EQUALS=61]="EQUALS",n[n.ZERO=48]="ZERO",n[n.NINE=57]="NINE",n[n.LOWER_A=97]="LOWER_A",n[n.LOWER_F=102]="LOWER_F",n[n.LOWER_X=120]="LOWER_X",n[n.LOWER_Z=122]="LOWER_Z",n[n.UPPER_A=65]="UPPER_A",n[n.UPPER_F=70]="UPPER_F",n[n.UPPER_Z=90]="UPPER_Z"})(Ve||(Ve={}));const qq=32;var lr;(function(n){n[n.VALUE_LENGTH=49152]="VALUE_LENGTH",n[n.BRANCH_LENGTH=16256]="BRANCH_LENGTH",n[n.JUMP_TABLE=127]="JUMP_TABLE"})(lr||(lr={}));function Sp(n){return n>=Ve.ZERO&&n<=Ve.NINE}function Fq(n){return n>=Ve.UPPER_A&&n<=Ve.UPPER_F||n>=Ve.LOWER_A&&n<=Ve.LOWER_F}function Oq(n){return n>=Ve.UPPER_A&&n<=Ve.UPPER_Z||n>=Ve.LOWER_A&&n<=Ve.LOWER_Z||Sp(n)}function Dq(n){return n===Ve.EQUALS||Oq(n)}var Ge;(function(n){n[n.EntityStart=0]="EntityStart",n[n.NumericStart=1]="NumericStart",n[n.NumericDecimal=2]="NumericDecimal",n[n.NumericHex=3]="NumericHex",n[n.NamedEntity=4]="NamedEntity"})(Ge||(Ge={}));var ar;(function(n){n[n.Legacy=0]="Legacy",n[n.Strict=1]="Strict",n[n.Attribute=2]="Attribute"})(ar||(ar={}));class Pq{constructor(e,r,t){this.decodeTree=e,this.emitCodePoint=r,this.errors=t,this.state=Ge.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=ar.Strict}startEntity(e){this.decodeMode=e,this.state=Ge.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,r){switch(this.state){case Ge.EntityStart:return e.charCodeAt(r)===Ve.NUM?(this.state=Ge.NumericStart,this.consumed+=1,this.stateNumericStart(e,r+1)):(this.state=Ge.NamedEntity,this.stateNamedEntity(e,r));case Ge.NumericStart:return this.stateNumericStart(e,r);case Ge.NumericDecimal:return this.stateNumericDecimal(e,r);case Ge.NumericHex:return this.stateNumericHex(e,r);case Ge.NamedEntity:return this.stateNamedEntity(e,r)}}stateNumericStart(e,r){return r>=e.length?-1:(e.charCodeAt(r)|qq)===Ve.LOWER_X?(this.state=Ge.NumericHex,this.consumed+=1,this.stateNumericHex(e,r+1)):(this.state=Ge.NumericDecimal,this.stateNumericDecimal(e,r))}addToNumericResult(e,r,t,i){if(r!==t){const o=t-r;this.result=this.result*Math.pow(i,o)+parseInt(e.substr(r,o),i),this.consumed+=o}}stateNumericHex(e,r){const t=r;for(;r<e.length;){const i=e.charCodeAt(r);if(Sp(i)||Fq(i))r+=1;else return this.addToNumericResult(e,t,r,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(e,t,r,16),-1}stateNumericDecimal(e,r){const t=r;for(;r<e.length;){const i=e.charCodeAt(r);if(Sp(i))r+=1;else return this.addToNumericResult(e,t,r,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(e,t,r,10),-1}emitNumericEntity(e,r){var t;if(this.consumed<=r)return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===Ve.SEMI)this.consumed+=1;else if(this.decodeMode===ar.Strict)return 0;return this.emitCodePoint(Tq(this.result),this.consumed),this.errors&&(e!==Ve.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,r){const{decodeTree:t}=this;let i=t[this.treeIndex],o=(i&lr.VALUE_LENGTH)>>14;for(;r<e.length;r++,this.excess++){const u=e.charCodeAt(r);if(this.treeIndex=xq(t,i,this.treeIndex+Math.max(1,o),u),this.treeIndex<0)return this.result===0||this.decodeMode===ar.Attribute&&(o===0||Dq(u))?0:this.emitNotTerminatedNamedEntity();if(i=t[this.treeIndex],o=(i&lr.VALUE_LENGTH)>>14,o!==0){if(u===Ve.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==ar.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;const{result:r,decodeTree:t}=this,i=(t[r]&lr.VALUE_LENGTH)>>14;return this.emitNamedEntityData(r,i,this.consumed),(e=this.errors)===null||e===void 0||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,r,t){const{decodeTree:i}=this;return this.emitCodePoint(r===1?i[e]&~lr.VALUE_LENGTH:i[e+1],t),r===3&&this.emitCodePoint(i[e+2],t),t}end(){var e;switch(this.state){case Ge.NamedEntity:return this.result!==0&&(this.decodeMode!==ar.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Ge.NumericDecimal:return this.emitNumericEntity(0,2);case Ge.NumericHex:return this.emitNumericEntity(0,3);case Ge.NumericStart:return(e=this.errors)===null||e===void 0||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Ge.EntityStart:return 0}}}function My(n){let e="";const r=new Pq(n,t=>e+=Nq(t));return function(i,o){let u=0,a=0;for(;(a=i.indexOf("&",a))>=0;){e+=i.slice(u,a),r.startEntity(o);const s=r.write(i,a+1);if(s<0){u=a+r.end();break}u=a+s,a=s===0?u+1:u}const c=e+i.slice(u);return e="",c}}function xq(n,e,r,t){const i=(e&lr.BRANCH_LENGTH)>>7,o=e&lr.JUMP_TABLE;if(i===0)return o!==0&&t===o?r:-1;if(o){const c=t-o;return c<0||c>=i?-1:n[r+c]-1}let u=r,a=u+i-1;for(;u<=a;){const c=u+a>>>1,s=n[c];if(s<t)u=c+1;else if(s>t)a=c-1;else return n[c+i]}return-1}const Hq=My(Cq);My(Rq);function Ny(n,e=ar.Legacy){return Hq(n,e)}function Bq(n){return Object.prototype.toString.call(n)}function C2(n){return Bq(n)==="[object String]"}const Uq=Object.prototype.hasOwnProperty;function Wq(n,e){return Uq.call(n,e)}function Ko(n){return Array.prototype.slice.call(arguments,1).forEach(function(r){if(r){if(typeof r!="object")throw new TypeError(r+"must be object");Object.keys(r).forEach(function(t){n[t]=r[t]})}}),n}function Ty(n,e,r){return[].concat(n.slice(0,e),r,n.slice(e+1))}function R2(n){return!(n>=55296&&n<=57343||n>=64976&&n<=65007||(n&65535)===65535||(n&65535)===65534||n>=0&&n<=8||n===11||n>=14&&n<=31||n>=127&&n<=159||n>1114111)}function oo(n){if(n>65535){n-=65536;const e=55296+(n>>10),r=56320+(n&1023);return String.fromCharCode(e,r)}return String.fromCharCode(n)}const qy=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,jq=/&([a-z#][a-z0-9]{1,31});/gi,Gq=new RegExp(qy.source+"|"+jq.source,"gi"),Vq=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function Xq(n,e){if(e.charCodeAt(0)===35&&Vq.test(e)){const t=e[1].toLowerCase()==="x"?parseInt(e.slice(2),16):parseInt(e.slice(1),10);return R2(t)?oo(t):n}const r=Ny(n);return r!==n?r:n}function Yq(n){return n.indexOf("\\")<0?n:n.replace(qy,"$1")}function Vr(n){return n.indexOf("\\")<0&&n.indexOf("&")<0?n:n.replace(Gq,function(e,r,t){return r||Xq(e,t)})}const Kq=/[&<>"]/,Jq=/[&<>"]/g,zq={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function Qq(n){return zq[n]}function dr(n){return Kq.test(n)?n.replace(Jq,Qq):n}const Zq=/[.?*+^$[\]\\(){}|-]/g;function eF(n){return n.replace(Zq,"\\$&")}function Ce(n){switch(n){case 9:case 32:return!0}return!1}function Dt(n){if(n>=8192&&n<=8202)return!0;switch(n){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Pt(n){return I2.test(n)||Cy.test(n)}function xt(n){switch(n){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Jo(n){return n=n.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(n=n.replace(/ẞ/g,"ß")),n.toLowerCase().toUpperCase()}const nF={mdurl:Lq,ucmicro:Iq},rF=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:Ty,assign:Ko,escapeHtml:dr,escapeRE:eF,fromCodePoint:oo,has:Wq,isMdAsciiPunct:xt,isPunctChar:Pt,isSpace:Ce,isString:C2,isValidEntityCode:R2,isWhiteSpace:Dt,lib:nF,normalizeReference:Jo,unescapeAll:Vr,unescapeMd:Yq},Symbol.toStringTag,{value:"Module"}));function tF(n,e,r){let t,i,o,u;const a=n.posMax,c=n.pos;for(n.pos=e+1,t=1;n.pos<a;){if(o=n.src.charCodeAt(n.pos),o===93&&(t--,t===0)){i=!0;break}if(u=n.pos,n.md.inline.skipToken(n),o===91){if(u===n.pos-1)t++;else if(r)return n.pos=c,-1}}let s=-1;return i&&(s=n.pos),n.pos=c,s}function iF(n,e,r){let t,i=e;const o={ok:!1,pos:0,str:""};if(n.charCodeAt(i)===60){for(i++;i<r;){if(t=n.charCodeAt(i),t===10||t===60)return o;if(t===62)return o.pos=i+1,o.str=Vr(n.slice(e+1,i)),o.ok=!0,o;if(t===92&&i+1<r){i+=2;continue}i++}return o}let u=0;for(;i<r&&(t=n.charCodeAt(i),!(t===32||t<32||t===127));){if(t===92&&i+1<r){if(n.charCodeAt(i+1)===32)break;i+=2;continue}if(t===40&&(u++,u>32))return o;if(t===41){if(u===0)break;u--}i++}return e===i||u!==0||(o.str=Vr(n.slice(e,i)),o.pos=i,o.ok=!0),o}function oF(n,e,r,t){let i,o=e;const u={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(t)u.str=t.str,u.marker=t.marker;else{if(o>=r)return u;let a=n.charCodeAt(o);if(a!==34&&a!==39&&a!==40)return u;e++,o++,a===40&&(a=41),u.marker=a}for(;o<r;){if(i=n.charCodeAt(o),i===u.marker)return u.pos=o+1,u.str+=Vr(n.slice(e,o)),u.ok=!0,u;if(i===40&&u.marker===41)return u;i===92&&o+1<r&&o++,o++}return u.can_continue=!0,u.str+=Vr(n.slice(e,o)),u}const uF=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:iF,parseLinkLabel:tF,parseLinkTitle:oF},Symbol.toStringTag,{value:"Module"})),jn={};jn.code_inline=function(n,e,r,t,i){const o=n[e];return"<code"+i.renderAttrs(o)+">"+dr(o.content)+"</code>"};jn.code_block=function(n,e,r,t,i){const o=n[e];return"<pre"+i.renderAttrs(o)+"><code>"+dr(n[e].content)+`</code></pre>
`};jn.fence=function(n,e,r,t,i){const o=n[e],u=o.info?Vr(o.info).trim():"";let a="",c="";if(u){const l=u.split(/(\s+)/g);a=l[0],c=l.slice(2).join("")}let s;if(r.highlight?s=r.highlight(o.content,a,c)||dr(o.content):s=dr(o.content),s.indexOf("<pre")===0)return s+`
`;if(u){const l=o.attrIndex("class"),f=o.attrs?o.attrs.slice():[];l<0?f.push(["class",r.langPrefix+a]):(f[l]=f[l].slice(),f[l][1]+=" "+r.langPrefix+a);const d={attrs:f};return`<pre><code${i.renderAttrs(d)}>${s}</code></pre>
`}return`<pre><code${i.renderAttrs(o)}>${s}</code></pre>
`};jn.image=function(n,e,r,t,i){const o=n[e];return o.attrs[o.attrIndex("alt")][1]=i.renderInlineAsText(o.children,r,t),i.renderToken(n,e,r)};jn.hardbreak=function(n,e,r){return r.xhtmlOut?`<br />
`:`<br>
`};jn.softbreak=function(n,e,r){return r.breaks?r.xhtmlOut?`<br />
`:`<br>
`:`
`};jn.text=function(n,e){return dr(n[e].content)};jn.html_block=function(n,e){return n[e].content};jn.html_inline=function(n,e){return n[e].content};function ut(){this.rules=Ko({},jn)}ut.prototype.renderAttrs=function(e){let r,t,i;if(!e.attrs)return"";for(i="",r=0,t=e.attrs.length;r<t;r++)i+=" "+dr(e.attrs[r][0])+'="'+dr(e.attrs[r][1])+'"';return i};ut.prototype.renderToken=function(e,r,t){const i=e[r];let o="";if(i.hidden)return"";i.block&&i.nesting!==-1&&r&&e[r-1].hidden&&(o+=`
`),o+=(i.nesting===-1?"</":"<")+i.tag,o+=this.renderAttrs(i),i.nesting===0&&t.xhtmlOut&&(o+=" /");let u=!1;if(i.block&&(u=!0,i.nesting===1&&r+1<e.length)){const a=e[r+1];(a.type==="inline"||a.hidden||a.nesting===-1&&a.tag===i.tag)&&(u=!1)}return o+=u?`>
`:">",o};ut.prototype.renderInline=function(n,e,r){let t="";const i=this.rules;for(let o=0,u=n.length;o<u;o++){const a=n[o].type;typeof i[a]<"u"?t+=i[a](n,o,e,r,this):t+=this.renderToken(n,o,e)}return t};ut.prototype.renderInlineAsText=function(n,e,r){let t="";for(let i=0,o=n.length;i<o;i++)switch(n[i].type){case"text":t+=n[i].content;break;case"image":t+=this.renderInlineAsText(n[i].children,e,r);break;case"html_inline":case"html_block":t+=n[i].content;break;case"softbreak":case"hardbreak":t+=`
`;break}return t};ut.prototype.render=function(n,e,r){let t="";const i=this.rules;for(let o=0,u=n.length;o<u;o++){const a=n[o].type;a==="inline"?t+=this.renderInline(n[o].children,e,r):typeof i[a]<"u"?t+=i[a](n,o,e,r,this):t+=this.renderToken(n,o,e,r)}return t};function ln(){this.__rules__=[],this.__cache__=null}ln.prototype.__find__=function(n){for(let e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===n)return e;return-1};ln.prototype.__compile__=function(){const n=this,e=[""];n.__rules__.forEach(function(r){r.enabled&&r.alt.forEach(function(t){e.indexOf(t)<0&&e.push(t)})}),n.__cache__={},e.forEach(function(r){n.__cache__[r]=[],n.__rules__.forEach(function(t){t.enabled&&(r&&t.alt.indexOf(r)<0||n.__cache__[r].push(t.fn))})})};ln.prototype.at=function(n,e,r){const t=this.__find__(n),i=r||{};if(t===-1)throw new Error("Parser rule not found: "+n);this.__rules__[t].fn=e,this.__rules__[t].alt=i.alt||[],this.__cache__=null};ln.prototype.before=function(n,e,r,t){const i=this.__find__(n),o=t||{};if(i===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(i,0,{name:e,enabled:!0,fn:r,alt:o.alt||[]}),this.__cache__=null};ln.prototype.after=function(n,e,r,t){const i=this.__find__(n),o=t||{};if(i===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(i+1,0,{name:e,enabled:!0,fn:r,alt:o.alt||[]}),this.__cache__=null};ln.prototype.push=function(n,e,r){const t=r||{};this.__rules__.push({name:n,enabled:!0,fn:e,alt:t.alt||[]}),this.__cache__=null};ln.prototype.enable=function(n,e){Array.isArray(n)||(n=[n]);const r=[];return n.forEach(function(t){const i=this.__find__(t);if(i<0){if(e)return;throw new Error("Rules manager: invalid rule name "+t)}this.__rules__[i].enabled=!0,r.push(t)},this),this.__cache__=null,r};ln.prototype.enableOnly=function(n,e){Array.isArray(n)||(n=[n]),this.__rules__.forEach(function(r){r.enabled=!1}),this.enable(n,e)};ln.prototype.disable=function(n,e){Array.isArray(n)||(n=[n]);const r=[];return n.forEach(function(t){const i=this.__find__(t);if(i<0){if(e)return;throw new Error("Rules manager: invalid rule name "+t)}this.__rules__[i].enabled=!1,r.push(t)},this),this.__cache__=null,r};ln.prototype.getRules=function(n){return this.__cache__===null&&this.__compile__(),this.__cache__[n]||[]};function Cn(n,e,r){this.type=n,this.tag=e,this.attrs=null,this.map=null,this.nesting=r,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Cn.prototype.attrIndex=function(e){if(!this.attrs)return-1;const r=this.attrs;for(let t=0,i=r.length;t<i;t++)if(r[t][0]===e)return t;return-1};Cn.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};Cn.prototype.attrSet=function(e,r){const t=this.attrIndex(e),i=[e,r];t<0?this.attrPush(i):this.attrs[t]=i};Cn.prototype.attrGet=function(e){const r=this.attrIndex(e);let t=null;return r>=0&&(t=this.attrs[r][1]),t};Cn.prototype.attrJoin=function(e,r){const t=this.attrIndex(e);t<0?this.attrPush([e,r]):this.attrs[t][1]=this.attrs[t][1]+" "+r};function Fy(n,e,r){this.src=n,this.env=r,this.tokens=[],this.inlineMode=!1,this.md=e}Fy.prototype.Token=Cn;const aF=/\r\n?|\n/g,sF=/\0/g;function cF(n){let e;e=n.src.replace(aF,`
`),e=e.replace(sF,"�"),n.src=e}function lF(n){let e;n.inlineMode?(e=new n.Token("inline","",0),e.content=n.src,e.map=[0,1],e.children=[],n.tokens.push(e)):n.md.block.parse(n.src,n.md,n.env,n.tokens)}function fF(n){const e=n.tokens;for(let r=0,t=e.length;r<t;r++){const i=e[r];i.type==="inline"&&n.md.inline.parse(i.content,n.md,n.env,i.children)}}function dF(n){return/^<a[>\s]/i.test(n)}function pF(n){return/^<\/a\s*>/i.test(n)}function hF(n){const e=n.tokens;if(n.md.options.linkify)for(let r=0,t=e.length;r<t;r++){if(e[r].type!=="inline"||!n.md.linkify.pretest(e[r].content))continue;let i=e[r].children,o=0;for(let u=i.length-1;u>=0;u--){const a=i[u];if(a.type==="link_close"){for(u--;i[u].level!==a.level&&i[u].type!=="link_open";)u--;continue}if(a.type==="html_inline"&&(dF(a.content)&&o>0&&o--,pF(a.content)&&o++),!(o>0)&&a.type==="text"&&n.md.linkify.test(a.content)){const c=a.content;let s=n.md.linkify.match(c);const l=[];let f=a.level,d=0;s.length>0&&s[0].index===0&&u>0&&i[u-1].type==="text_special"&&(s=s.slice(1));for(let p=0;p<s.length;p++){const h=s[p].url,m=n.md.normalizeLink(h);if(!n.md.validateLink(m))continue;let v=s[p].text;s[p].schema?s[p].schema==="mailto:"&&!/^mailto:/i.test(v)?v=n.md.normalizeLinkText("mailto:"+v).replace(/^mailto:/,""):v=n.md.normalizeLinkText(v):v=n.md.normalizeLinkText("http://"+v).replace(/^http:\/\//,"");const b=s[p].index;if(b>d){const E=new n.Token("text","",0);E.content=c.slice(d,b),E.level=f,l.push(E)}const g=new n.Token("link_open","a",1);g.attrs=[["href",m]],g.level=f++,g.markup="linkify",g.info="auto",l.push(g);const _=new n.Token("text","",0);_.content=v,_.level=f,l.push(_);const y=new n.Token("link_close","a",-1);y.level=--f,y.markup="linkify",y.info="auto",l.push(y),d=s[p].lastIndex}if(d<c.length){const p=new n.Token("text","",0);p.content=c.slice(d),p.level=f,l.push(p)}e[r].children=i=Ty(i,u,l)}}}}const Oy=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,vF=/\((c|tm|r)\)/i,mF=/\((c|tm|r)\)/ig,bF={c:"©",r:"®",tm:"™"};function gF(n,e){return bF[e.toLowerCase()]}function _F(n){let e=0;for(let r=n.length-1;r>=0;r--){const t=n[r];t.type==="text"&&!e&&(t.content=t.content.replace(mF,gF)),t.type==="link_open"&&t.info==="auto"&&e--,t.type==="link_close"&&t.info==="auto"&&e++}}function yF(n){let e=0;for(let r=n.length-1;r>=0;r--){const t=n[r];t.type==="text"&&!e&&Oy.test(t.content)&&(t.content=t.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),t.type==="link_open"&&t.info==="auto"&&e--,t.type==="link_close"&&t.info==="auto"&&e++}}function EF(n){let e;if(n.md.options.typographer)for(e=n.tokens.length-1;e>=0;e--)n.tokens[e].type==="inline"&&(vF.test(n.tokens[e].content)&&_F(n.tokens[e].children),Oy.test(n.tokens[e].content)&&yF(n.tokens[e].children))}const $F=/['"]/,o8=/['"]/g,u8="’";function Ei(n,e,r){return n.slice(0,e)+r+n.slice(e+1)}function wF(n,e){let r;const t=[];for(let i=0;i<n.length;i++){const o=n[i],u=n[i].level;for(r=t.length-1;r>=0&&!(t[r].level<=u);r--);if(t.length=r+1,o.type!=="text")continue;let a=o.content,c=0,s=a.length;e:for(;c<s;){o8.lastIndex=c;const l=o8.exec(a);if(!l)break;let f=!0,d=!0;c=l.index+1;const p=l[0]==="'";let h=32;if(l.index-1>=0)h=a.charCodeAt(l.index-1);else for(r=i-1;r>=0&&!(n[r].type==="softbreak"||n[r].type==="hardbreak");r--)if(n[r].content){h=n[r].content.charCodeAt(n[r].content.length-1);break}let m=32;if(c<s)m=a.charCodeAt(c);else for(r=i+1;r<n.length&&!(n[r].type==="softbreak"||n[r].type==="hardbreak");r++)if(n[r].content){m=n[r].content.charCodeAt(0);break}const v=xt(h)||Pt(String.fromCharCode(h)),b=xt(m)||Pt(String.fromCharCode(m)),g=Dt(h),_=Dt(m);if(_?f=!1:b&&(g||v||(f=!1)),g?d=!1:v&&(_||b||(d=!1)),m===34&&l[0]==='"'&&h>=48&&h<=57&&(d=f=!1),f&&d&&(f=v,d=b),!f&&!d){p&&(o.content=Ei(o.content,l.index,u8));continue}if(d)for(r=t.length-1;r>=0;r--){let y=t[r];if(t[r].level<u)break;if(y.single===p&&t[r].level===u){y=t[r];let E,I;p?(E=e.md.options.quotes[2],I=e.md.options.quotes[3]):(E=e.md.options.quotes[0],I=e.md.options.quotes[1]),o.content=Ei(o.content,l.index,I),n[y.token].content=Ei(n[y.token].content,y.pos,E),c+=I.length-1,y.token===i&&(c+=E.length-1),a=o.content,s=a.length,t.length=r;continue e}}f?t.push({token:i,pos:l.index,single:p,level:u}):d&&p&&(o.content=Ei(o.content,l.index,u8))}}}function SF(n){if(n.md.options.typographer)for(let e=n.tokens.length-1;e>=0;e--)n.tokens[e].type!=="inline"||!$F.test(n.tokens[e].content)||wF(n.tokens[e].children,n)}function AF(n){let e,r;const t=n.tokens,i=t.length;for(let o=0;o<i;o++){if(t[o].type!=="inline")continue;const u=t[o].children,a=u.length;for(e=0;e<a;e++)u[e].type==="text_special"&&(u[e].type="text");for(e=r=0;e<a;e++)u[e].type==="text"&&e+1<a&&u[e+1].type==="text"?u[e+1].content=u[e].content+u[e+1].content:(e!==r&&(u[r]=u[e]),r++);e!==r&&(u.length=r)}}const V1=[["normalize",cF],["block",lF],["inline",fF],["linkify",hF],["replacements",EF],["smartquotes",SF],["text_join",AF]];function M2(){this.ruler=new ln;for(let n=0;n<V1.length;n++)this.ruler.push(V1[n][0],V1[n][1])}M2.prototype.process=function(n){const e=this.ruler.getRules("");for(let r=0,t=e.length;r<t;r++)e[r](n)};M2.prototype.State=Fy;function Gn(n,e,r,t){this.src=n,this.md=e,this.env=r,this.tokens=t,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let o=0,u=0,a=0,c=0,s=i.length,l=!1;u<s;u++){const f=i.charCodeAt(u);if(!l)if(Ce(f)){a++,f===9?c+=4-c%4:c++;continue}else l=!0;(f===10||u===s-1)&&(f!==10&&u++,this.bMarks.push(o),this.eMarks.push(u),this.tShift.push(a),this.sCount.push(c),this.bsCount.push(0),l=!1,a=0,c=0,o=u+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Gn.prototype.push=function(n,e,r){const t=new Cn(n,e,r);return t.block=!0,r<0&&this.level--,t.level=this.level,r>0&&this.level++,this.tokens.push(t),t};Gn.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};Gn.prototype.skipEmptyLines=function(e){for(let r=this.lineMax;e<r&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};Gn.prototype.skipSpaces=function(e){for(let r=this.src.length;e<r;e++){const t=this.src.charCodeAt(e);if(!Ce(t))break}return e};Gn.prototype.skipSpacesBack=function(e,r){if(e<=r)return e;for(;e>r;)if(!Ce(this.src.charCodeAt(--e)))return e+1;return e};Gn.prototype.skipChars=function(e,r){for(let t=this.src.length;e<t&&this.src.charCodeAt(e)===r;e++);return e};Gn.prototype.skipCharsBack=function(e,r,t){if(e<=t)return e;for(;e>t;)if(r!==this.src.charCodeAt(--e))return e+1;return e};Gn.prototype.getLines=function(e,r,t,i){if(e>=r)return"";const o=new Array(r-e);for(let u=0,a=e;a<r;a++,u++){let c=0;const s=this.bMarks[a];let l=s,f;for(a+1<r||i?f=this.eMarks[a]+1:f=this.eMarks[a];l<f&&c<t;){const d=this.src.charCodeAt(l);if(Ce(d))d===9?c+=4-(c+this.bsCount[a])%4:c++;else if(l-s<this.tShift[a])c++;else break;l++}c>t?o[u]=new Array(c-t+1).join(" ")+this.src.slice(l,f):o[u]=this.src.slice(l,f)}return o.join("")};Gn.prototype.Token=Cn;const LF=65536;function X1(n,e){const r=n.bMarks[e]+n.tShift[e],t=n.eMarks[e];return n.src.slice(r,t)}function a8(n){const e=[],r=n.length;let t=0,i=n.charCodeAt(t),o=!1,u=0,a="";for(;t<r;)i===124&&(o?(a+=n.substring(u,t-1),u=t):(e.push(a+n.substring(u,t)),a="",u=t+1)),o=i===92,t++,i=n.charCodeAt(t);return e.push(a+n.substring(u)),e}function kF(n,e,r,t){if(e+2>r)return!1;let i=e+1;if(n.sCount[i]<n.blkIndent||n.sCount[i]-n.blkIndent>=4)return!1;let o=n.bMarks[i]+n.tShift[i];if(o>=n.eMarks[i])return!1;const u=n.src.charCodeAt(o++);if(u!==124&&u!==45&&u!==58||o>=n.eMarks[i])return!1;const a=n.src.charCodeAt(o++);if(a!==124&&a!==45&&a!==58&&!Ce(a)||u===45&&Ce(a))return!1;for(;o<n.eMarks[i];){const y=n.src.charCodeAt(o);if(y!==124&&y!==45&&y!==58&&!Ce(y))return!1;o++}let c=X1(n,e+1),s=c.split("|");const l=[];for(let y=0;y<s.length;y++){const E=s[y].trim();if(!E){if(y===0||y===s.length-1)continue;return!1}if(!/^:?-+:?$/.test(E))return!1;E.charCodeAt(E.length-1)===58?l.push(E.charCodeAt(0)===58?"center":"right"):E.charCodeAt(0)===58?l.push("left"):l.push("")}if(c=X1(n,e).trim(),c.indexOf("|")===-1||n.sCount[e]-n.blkIndent>=4)return!1;s=a8(c),s.length&&s[0]===""&&s.shift(),s.length&&s[s.length-1]===""&&s.pop();const f=s.length;if(f===0||f!==l.length)return!1;if(t)return!0;const d=n.parentType;n.parentType="table";const p=n.md.block.ruler.getRules("blockquote"),h=n.push("table_open","table",1),m=[e,0];h.map=m;const v=n.push("thead_open","thead",1);v.map=[e,e+1];const b=n.push("tr_open","tr",1);b.map=[e,e+1];for(let y=0;y<s.length;y++){const E=n.push("th_open","th",1);l[y]&&(E.attrs=[["style","text-align:"+l[y]]]);const I=n.push("inline","",0);I.content=s[y].trim(),I.children=[],n.push("th_close","th",-1)}n.push("tr_close","tr",-1),n.push("thead_close","thead",-1);let g,_=0;for(i=e+2;i<r&&!(n.sCount[i]<n.blkIndent);i++){let y=!1;for(let I=0,L=p.length;I<L;I++)if(p[I](n,i,r,!0)){y=!0;break}if(y||(c=X1(n,i).trim(),!c)||n.sCount[i]-n.blkIndent>=4||(s=a8(c),s.length&&s[0]===""&&s.shift(),s.length&&s[s.length-1]===""&&s.pop(),_+=f-s.length,_>LF))break;if(i===e+2){const I=n.push("tbody_open","tbody",1);I.map=g=[e+2,0]}const E=n.push("tr_open","tr",1);E.map=[i,i+1];for(let I=0;I<f;I++){const L=n.push("td_open","td",1);l[I]&&(L.attrs=[["style","text-align:"+l[I]]]);const R=n.push("inline","",0);R.content=s[I]?s[I].trim():"",R.children=[],n.push("td_close","td",-1)}n.push("tr_close","tr",-1)}return g&&(n.push("tbody_close","tbody",-1),g[1]=i),n.push("table_close","table",-1),m[1]=i,n.parentType=d,n.line=i,!0}function IF(n,e,r){if(n.sCount[e]-n.blkIndent<4)return!1;let t=e+1,i=t;for(;t<r;){if(n.isEmpty(t)){t++;continue}if(n.sCount[t]-n.blkIndent>=4){t++,i=t;continue}break}n.line=i;const o=n.push("code_block","code",0);return o.content=n.getLines(e,i,4+n.blkIndent,!1)+`
`,o.map=[e,n.line],!0}function CF(n,e,r,t){let i=n.bMarks[e]+n.tShift[e],o=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4||i+3>o)return!1;const u=n.src.charCodeAt(i);if(u!==126&&u!==96)return!1;let a=i;i=n.skipChars(i,u);let c=i-a;if(c<3)return!1;const s=n.src.slice(a,i),l=n.src.slice(i,o);if(u===96&&l.indexOf(String.fromCharCode(u))>=0)return!1;if(t)return!0;let f=e,d=!1;for(;f++,!(f>=r||(i=a=n.bMarks[f]+n.tShift[f],o=n.eMarks[f],i<o&&n.sCount[f]<n.blkIndent));)if(n.src.charCodeAt(i)===u&&!(n.sCount[f]-n.blkIndent>=4)&&(i=n.skipChars(i,u),!(i-a<c)&&(i=n.skipSpaces(i),!(i<o)))){d=!0;break}c=n.sCount[e],n.line=f+(d?1:0);const p=n.push("fence","code",0);return p.info=l,p.content=n.getLines(e+1,f,c,!0),p.markup=s,p.map=[e,n.line],!0}function RF(n,e,r,t){let i=n.bMarks[e]+n.tShift[e],o=n.eMarks[e];const u=n.lineMax;if(n.sCount[e]-n.blkIndent>=4||n.src.charCodeAt(i)!==62)return!1;if(t)return!0;const a=[],c=[],s=[],l=[],f=n.md.block.ruler.getRules("blockquote"),d=n.parentType;n.parentType="blockquote";let p=!1,h;for(h=e;h<r;h++){const _=n.sCount[h]<n.blkIndent;if(i=n.bMarks[h]+n.tShift[h],o=n.eMarks[h],i>=o)break;if(n.src.charCodeAt(i++)===62&&!_){let E=n.sCount[h]+1,I,L;n.src.charCodeAt(i)===32?(i++,E++,L=!1,I=!0):n.src.charCodeAt(i)===9?(I=!0,(n.bsCount[h]+E)%4===3?(i++,E++,L=!1):L=!0):I=!1;let R=E;for(a.push(n.bMarks[h]),n.bMarks[h]=i;i<o;){const A=n.src.charCodeAt(i);if(Ce(A))A===9?R+=4-(R+n.bsCount[h]+(L?1:0))%4:R++;else break;i++}p=i>=o,c.push(n.bsCount[h]),n.bsCount[h]=n.sCount[h]+1+(I?1:0),s.push(n.sCount[h]),n.sCount[h]=R-E,l.push(n.tShift[h]),n.tShift[h]=i-n.bMarks[h];continue}if(p)break;let y=!1;for(let E=0,I=f.length;E<I;E++)if(f[E](n,h,r,!0)){y=!0;break}if(y){n.lineMax=h,n.blkIndent!==0&&(a.push(n.bMarks[h]),c.push(n.bsCount[h]),l.push(n.tShift[h]),s.push(n.sCount[h]),n.sCount[h]-=n.blkIndent);break}a.push(n.bMarks[h]),c.push(n.bsCount[h]),l.push(n.tShift[h]),s.push(n.sCount[h]),n.sCount[h]=-1}const m=n.blkIndent;n.blkIndent=0;const v=n.push("blockquote_open","blockquote",1);v.markup=">";const b=[e,0];v.map=b,n.md.block.tokenize(n,e,h);const g=n.push("blockquote_close","blockquote",-1);g.markup=">",n.lineMax=u,n.parentType=d,b[1]=n.line;for(let _=0;_<l.length;_++)n.bMarks[_+e]=a[_],n.tShift[_+e]=l[_],n.sCount[_+e]=s[_],n.bsCount[_+e]=c[_];return n.blkIndent=m,!0}function MF(n,e,r,t){const i=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4)return!1;let o=n.bMarks[e]+n.tShift[e];const u=n.src.charCodeAt(o++);if(u!==42&&u!==45&&u!==95)return!1;let a=1;for(;o<i;){const s=n.src.charCodeAt(o++);if(s!==u&&!Ce(s))return!1;s===u&&a++}if(a<3)return!1;if(t)return!0;n.line=e+1;const c=n.push("hr","hr",0);return c.map=[e,n.line],c.markup=Array(a+1).join(String.fromCharCode(u)),!0}function s8(n,e){const r=n.eMarks[e];let t=n.bMarks[e]+n.tShift[e];const i=n.src.charCodeAt(t++);if(i!==42&&i!==45&&i!==43)return-1;if(t<r){const o=n.src.charCodeAt(t);if(!Ce(o))return-1}return t}function c8(n,e){const r=n.bMarks[e]+n.tShift[e],t=n.eMarks[e];let i=r;if(i+1>=t)return-1;let o=n.src.charCodeAt(i++);if(o<48||o>57)return-1;for(;;){if(i>=t)return-1;if(o=n.src.charCodeAt(i++),o>=48&&o<=57){if(i-r>=10)return-1;continue}if(o===41||o===46)break;return-1}return i<t&&(o=n.src.charCodeAt(i),!Ce(o))?-1:i}function NF(n,e){const r=n.level+2;for(let t=e+2,i=n.tokens.length-2;t<i;t++)n.tokens[t].level===r&&n.tokens[t].type==="paragraph_open"&&(n.tokens[t+2].hidden=!0,n.tokens[t].hidden=!0,t+=2)}function TF(n,e,r,t){let i,o,u,a,c=e,s=!0;if(n.sCount[c]-n.blkIndent>=4||n.listIndent>=0&&n.sCount[c]-n.listIndent>=4&&n.sCount[c]<n.blkIndent)return!1;let l=!1;t&&n.parentType==="paragraph"&&n.sCount[c]>=n.blkIndent&&(l=!0);let f,d,p;if((p=c8(n,c))>=0){if(f=!0,u=n.bMarks[c]+n.tShift[c],d=Number(n.src.slice(u,p-1)),l&&d!==1)return!1}else if((p=s8(n,c))>=0)f=!1;else return!1;if(l&&n.skipSpaces(p)>=n.eMarks[c])return!1;if(t)return!0;const h=n.src.charCodeAt(p-1),m=n.tokens.length;f?(a=n.push("ordered_list_open","ol",1),d!==1&&(a.attrs=[["start",d]])):a=n.push("bullet_list_open","ul",1);const v=[c,0];a.map=v,a.markup=String.fromCharCode(h);let b=!1;const g=n.md.block.ruler.getRules("list"),_=n.parentType;for(n.parentType="list";c<r;){o=p,i=n.eMarks[c];const y=n.sCount[c]+p-(n.bMarks[c]+n.tShift[c]);let E=y;for(;o<i;){const F=n.src.charCodeAt(o);if(F===9)E+=4-(E+n.bsCount[c])%4;else if(F===32)E++;else break;o++}const I=o;let L;I>=i?L=1:L=E-y,L>4&&(L=1);const R=y+L;a=n.push("list_item_open","li",1),a.markup=String.fromCharCode(h);const A=[c,0];a.map=A,f&&(a.info=n.src.slice(u,p-1));const S=n.tight,$=n.tShift[c],w=n.sCount[c],k=n.listIndent;if(n.listIndent=n.blkIndent,n.blkIndent=R,n.tight=!0,n.tShift[c]=I-n.bMarks[c],n.sCount[c]=E,I>=i&&n.isEmpty(c+1)?n.line=Math.min(n.line+2,r):n.md.block.tokenize(n,c,r,!0),(!n.tight||b)&&(s=!1),b=n.line-c>1&&n.isEmpty(n.line-1),n.blkIndent=n.listIndent,n.listIndent=k,n.tShift[c]=$,n.sCount[c]=w,n.tight=S,a=n.push("list_item_close","li",-1),a.markup=String.fromCharCode(h),c=n.line,A[1]=c,c>=r||n.sCount[c]<n.blkIndent||n.sCount[c]-n.blkIndent>=4)break;let C=!1;for(let F=0,T=g.length;F<T;F++)if(g[F](n,c,r,!0)){C=!0;break}if(C)break;if(f){if(p=c8(n,c),p<0)break;u=n.bMarks[c]+n.tShift[c]}else if(p=s8(n,c),p<0)break;if(h!==n.src.charCodeAt(p-1))break}return f?a=n.push("ordered_list_close","ol",-1):a=n.push("bullet_list_close","ul",-1),a.markup=String.fromCharCode(h),v[1]=c,n.line=c,n.parentType=_,s&&NF(n,m),!0}function qF(n,e,r,t){let i=n.bMarks[e]+n.tShift[e],o=n.eMarks[e],u=e+1;if(n.sCount[e]-n.blkIndent>=4||n.src.charCodeAt(i)!==91)return!1;function a(g){const _=n.lineMax;if(g>=_||n.isEmpty(g))return null;let y=!1;if(n.sCount[g]-n.blkIndent>3&&(y=!0),n.sCount[g]<0&&(y=!0),!y){const L=n.md.block.ruler.getRules("reference"),R=n.parentType;n.parentType="reference";let A=!1;for(let S=0,$=L.length;S<$;S++)if(L[S](n,g,_,!0)){A=!0;break}if(n.parentType=R,A)return null}const E=n.bMarks[g]+n.tShift[g],I=n.eMarks[g];return n.src.slice(E,I+1)}let c=n.src.slice(i,o+1);o=c.length;let s=-1;for(i=1;i<o;i++){const g=c.charCodeAt(i);if(g===91)return!1;if(g===93){s=i;break}else if(g===10){const _=a(u);_!==null&&(c+=_,o=c.length,u++)}else if(g===92&&(i++,i<o&&c.charCodeAt(i)===10)){const _=a(u);_!==null&&(c+=_,o=c.length,u++)}}if(s<0||c.charCodeAt(s+1)!==58)return!1;for(i=s+2;i<o;i++){const g=c.charCodeAt(i);if(g===10){const _=a(u);_!==null&&(c+=_,o=c.length,u++)}else if(!Ce(g))break}const l=n.md.helpers.parseLinkDestination(c,i,o);if(!l.ok)return!1;const f=n.md.normalizeLink(l.str);if(!n.md.validateLink(f))return!1;i=l.pos;const d=i,p=u,h=i;for(;i<o;i++){const g=c.charCodeAt(i);if(g===10){const _=a(u);_!==null&&(c+=_,o=c.length,u++)}else if(!Ce(g))break}let m=n.md.helpers.parseLinkTitle(c,i,o);for(;m.can_continue;){const g=a(u);if(g===null)break;c+=g,i=o,o=c.length,u++,m=n.md.helpers.parseLinkTitle(c,i,o,m)}let v;for(i<o&&h!==i&&m.ok?(v=m.str,i=m.pos):(v="",i=d,u=p);i<o;){const g=c.charCodeAt(i);if(!Ce(g))break;i++}if(i<o&&c.charCodeAt(i)!==10&&v)for(v="",i=d,u=p;i<o;){const g=c.charCodeAt(i);if(!Ce(g))break;i++}if(i<o&&c.charCodeAt(i)!==10)return!1;const b=Jo(c.slice(1,s));return b?(t||(typeof n.env.references>"u"&&(n.env.references={}),typeof n.env.references[b]>"u"&&(n.env.references[b]={title:v,href:f}),n.line=u),!0):!1}const FF=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],OF="[a-zA-Z_:][a-zA-Z0-9:._-]*",DF="[^\"'=<>`\\x00-\\x20]+",PF="'[^']*'",xF='"[^"]*"',HF="(?:"+DF+"|"+PF+"|"+xF+")",BF="(?:\\s+"+OF+"(?:\\s*=\\s*"+HF+")?)",Dy="<[A-Za-z][A-Za-z0-9\\-]*"+BF+"*\\s*\\/?>",Py="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",UF="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",WF="<[?][\\s\\S]*?[?]>",jF="<![A-Za-z][^>]*>",GF="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",VF=new RegExp("^(?:"+Dy+"|"+Py+"|"+UF+"|"+WF+"|"+jF+"|"+GF+")"),XF=new RegExp("^(?:"+Dy+"|"+Py+")"),Dr=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+FF.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(XF.source+"\\s*$"),/^$/,!1]];function YF(n,e,r,t){let i=n.bMarks[e]+n.tShift[e],o=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4||!n.md.options.html||n.src.charCodeAt(i)!==60)return!1;let u=n.src.slice(i,o),a=0;for(;a<Dr.length&&!Dr[a][0].test(u);a++);if(a===Dr.length)return!1;if(t)return Dr[a][2];let c=e+1;if(!Dr[a][1].test(u)){for(;c<r&&!(n.sCount[c]<n.blkIndent);c++)if(i=n.bMarks[c]+n.tShift[c],o=n.eMarks[c],u=n.src.slice(i,o),Dr[a][1].test(u)){u.length!==0&&c++;break}}n.line=c;const s=n.push("html_block","",0);return s.map=[e,c],s.content=n.getLines(e,c,n.blkIndent,!0),!0}function KF(n,e,r,t){let i=n.bMarks[e]+n.tShift[e],o=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4)return!1;let u=n.src.charCodeAt(i);if(u!==35||i>=o)return!1;let a=1;for(u=n.src.charCodeAt(++i);u===35&&i<o&&a<=6;)a++,u=n.src.charCodeAt(++i);if(a>6||i<o&&!Ce(u))return!1;if(t)return!0;o=n.skipSpacesBack(o,i);const c=n.skipCharsBack(o,35,i);c>i&&Ce(n.src.charCodeAt(c-1))&&(o=c),n.line=e+1;const s=n.push("heading_open","h"+String(a),1);s.markup="########".slice(0,a),s.map=[e,n.line];const l=n.push("inline","",0);l.content=n.src.slice(i,o).trim(),l.map=[e,n.line],l.children=[];const f=n.push("heading_close","h"+String(a),-1);return f.markup="########".slice(0,a),!0}function JF(n,e,r){const t=n.md.block.ruler.getRules("paragraph");if(n.sCount[e]-n.blkIndent>=4)return!1;const i=n.parentType;n.parentType="paragraph";let o=0,u,a=e+1;for(;a<r&&!n.isEmpty(a);a++){if(n.sCount[a]-n.blkIndent>3)continue;if(n.sCount[a]>=n.blkIndent){let p=n.bMarks[a]+n.tShift[a];const h=n.eMarks[a];if(p<h&&(u=n.src.charCodeAt(p),(u===45||u===61)&&(p=n.skipChars(p,u),p=n.skipSpaces(p),p>=h))){o=u===61?1:2;break}}if(n.sCount[a]<0)continue;let d=!1;for(let p=0,h=t.length;p<h;p++)if(t[p](n,a,r,!0)){d=!0;break}if(d)break}if(!o)return!1;const c=n.getLines(e,a,n.blkIndent,!1).trim();n.line=a+1;const s=n.push("heading_open","h"+String(o),1);s.markup=String.fromCharCode(u),s.map=[e,n.line];const l=n.push("inline","",0);l.content=c,l.map=[e,n.line-1],l.children=[];const f=n.push("heading_close","h"+String(o),-1);return f.markup=String.fromCharCode(u),n.parentType=i,!0}function zF(n,e,r){const t=n.md.block.ruler.getRules("paragraph"),i=n.parentType;let o=e+1;for(n.parentType="paragraph";o<r&&!n.isEmpty(o);o++){if(n.sCount[o]-n.blkIndent>3||n.sCount[o]<0)continue;let s=!1;for(let l=0,f=t.length;l<f;l++)if(t[l](n,o,r,!0)){s=!0;break}if(s)break}const u=n.getLines(e,o,n.blkIndent,!1).trim();n.line=o;const a=n.push("paragraph_open","p",1);a.map=[e,n.line];const c=n.push("inline","",0);return c.content=u,c.map=[e,n.line],c.children=[],n.push("paragraph_close","p",-1),n.parentType=i,!0}const $i=[["table",kF,["paragraph","reference"]],["code",IF],["fence",CF,["paragraph","reference","blockquote","list"]],["blockquote",RF,["paragraph","reference","blockquote","list"]],["hr",MF,["paragraph","reference","blockquote","list"]],["list",TF,["paragraph","reference","blockquote"]],["reference",qF],["html_block",YF,["paragraph","reference","blockquote"]],["heading",KF,["paragraph","reference","blockquote"]],["lheading",JF],["paragraph",zF]];function zo(){this.ruler=new ln;for(let n=0;n<$i.length;n++)this.ruler.push($i[n][0],$i[n][1],{alt:($i[n][2]||[]).slice()})}zo.prototype.tokenize=function(n,e,r){const t=this.ruler.getRules(""),i=t.length,o=n.md.options.maxNesting;let u=e,a=!1;for(;u<r&&(n.line=u=n.skipEmptyLines(u),!(u>=r||n.sCount[u]<n.blkIndent));){if(n.level>=o){n.line=r;break}const c=n.line;let s=!1;for(let l=0;l<i;l++)if(s=t[l](n,u,r,!1),s){if(c>=n.line)throw new Error("block rule didn't increment state.line");break}if(!s)throw new Error("none of the block rules matched");n.tight=!a,n.isEmpty(n.line-1)&&(a=!0),u=n.line,u<r&&n.isEmpty(u)&&(a=!0,u++,n.line=u)}};zo.prototype.parse=function(n,e,r,t){if(!n)return;const i=new this.State(n,e,r,t);this.tokenize(i,i.line,i.lineMax)};zo.prototype.State=Gn;function oi(n,e,r,t){this.src=n,this.env=r,this.md=e,this.tokens=t,this.tokens_meta=Array(t.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}oi.prototype.pushPending=function(){const n=new Cn("text","",0);return n.content=this.pending,n.level=this.pendingLevel,this.tokens.push(n),this.pending="",n};oi.prototype.push=function(n,e,r){this.pending&&this.pushPending();const t=new Cn(n,e,r);let i=null;return r<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),t.level=this.level,r>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(t),this.tokens_meta.push(i),t};oi.prototype.scanDelims=function(n,e){const r=this.posMax,t=this.src.charCodeAt(n),i=n>0?this.src.charCodeAt(n-1):32;let o=n;for(;o<r&&this.src.charCodeAt(o)===t;)o++;const u=o-n,a=o<r?this.src.charCodeAt(o):32,c=xt(i)||Pt(String.fromCharCode(i)),s=xt(a)||Pt(String.fromCharCode(a)),l=Dt(i),f=Dt(a),d=!f&&(!s||l||c),p=!l&&(!c||f||s);return{can_open:d&&(e||!p||c),can_close:p&&(e||!d||s),length:u}};oi.prototype.Token=Cn;function QF(n){switch(n){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function ZF(n,e){let r=n.pos;for(;r<n.posMax&&!QF(n.src.charCodeAt(r));)r++;return r===n.pos?!1:(e||(n.pending+=n.src.slice(n.pos,r)),n.pos=r,!0)}const eO=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function nO(n,e){if(!n.md.options.linkify||n.linkLevel>0)return!1;const r=n.pos,t=n.posMax;if(r+3>t||n.src.charCodeAt(r)!==58||n.src.charCodeAt(r+1)!==47||n.src.charCodeAt(r+2)!==47)return!1;const i=n.pending.match(eO);if(!i)return!1;const o=i[1],u=n.md.linkify.matchAtStart(n.src.slice(r-o.length));if(!u)return!1;let a=u.url;if(a.length<=o.length)return!1;let c=a.length;for(;c>0&&a.charCodeAt(c-1)===42;)c--;c!==a.length&&(a=a.slice(0,c));const s=n.md.normalizeLink(a);if(!n.md.validateLink(s))return!1;if(!e){n.pending=n.pending.slice(0,-o.length);const l=n.push("link_open","a",1);l.attrs=[["href",s]],l.markup="linkify",l.info="auto";const f=n.push("text","",0);f.content=n.md.normalizeLinkText(a);const d=n.push("link_close","a",-1);d.markup="linkify",d.info="auto"}return n.pos+=a.length-o.length,!0}function rO(n,e){let r=n.pos;if(n.src.charCodeAt(r)!==10)return!1;const t=n.pending.length-1,i=n.posMax;if(!e)if(t>=0&&n.pending.charCodeAt(t)===32)if(t>=1&&n.pending.charCodeAt(t-1)===32){let o=t-1;for(;o>=1&&n.pending.charCodeAt(o-1)===32;)o--;n.pending=n.pending.slice(0,o),n.push("hardbreak","br",0)}else n.pending=n.pending.slice(0,-1),n.push("softbreak","br",0);else n.push("softbreak","br",0);for(r++;r<i&&Ce(n.src.charCodeAt(r));)r++;return n.pos=r,!0}const N2=[];for(let n=0;n<256;n++)N2.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(n){N2[n.charCodeAt(0)]=1});function tO(n,e){let r=n.pos;const t=n.posMax;if(n.src.charCodeAt(r)!==92||(r++,r>=t))return!1;let i=n.src.charCodeAt(r);if(i===10){for(e||n.push("hardbreak","br",0),r++;r<t&&(i=n.src.charCodeAt(r),!!Ce(i));)r++;return n.pos=r,!0}let o=n.src[r];if(i>=55296&&i<=56319&&r+1<t){const a=n.src.charCodeAt(r+1);a>=56320&&a<=57343&&(o+=n.src[r+1],r++)}const u="\\"+o;if(!e){const a=n.push("text_special","",0);i<256&&N2[i]!==0?a.content=o:a.content=u,a.markup=u,a.info="escape"}return n.pos=r+1,!0}function iO(n,e){let r=n.pos;if(n.src.charCodeAt(r)!==96)return!1;const i=r;r++;const o=n.posMax;for(;r<o&&n.src.charCodeAt(r)===96;)r++;const u=n.src.slice(i,r),a=u.length;if(n.backticksScanned&&(n.backticks[a]||0)<=i)return e||(n.pending+=u),n.pos+=a,!0;let c=r,s;for(;(s=n.src.indexOf("`",c))!==-1;){for(c=s+1;c<o&&n.src.charCodeAt(c)===96;)c++;const l=c-s;if(l===a){if(!e){const f=n.push("code_inline","code",0);f.markup=u,f.content=n.src.slice(r,s).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return n.pos=c,!0}n.backticks[l]=s}return n.backticksScanned=!0,e||(n.pending+=u),n.pos+=a,!0}function oO(n,e){const r=n.pos,t=n.src.charCodeAt(r);if(e||t!==126)return!1;const i=n.scanDelims(n.pos,!0);let o=i.length;const u=String.fromCharCode(t);if(o<2)return!1;let a;o%2&&(a=n.push("text","",0),a.content=u,o--);for(let c=0;c<o;c+=2)a=n.push("text","",0),a.content=u+u,n.delimiters.push({marker:t,length:0,token:n.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return n.pos+=i.length,!0}function l8(n,e){let r;const t=[],i=e.length;for(let o=0;o<i;o++){const u=e[o];if(u.marker!==126||u.end===-1)continue;const a=e[u.end];r=n.tokens[u.token],r.type="s_open",r.tag="s",r.nesting=1,r.markup="~~",r.content="",r=n.tokens[a.token],r.type="s_close",r.tag="s",r.nesting=-1,r.markup="~~",r.content="",n.tokens[a.token-1].type==="text"&&n.tokens[a.token-1].content==="~"&&t.push(a.token-1)}for(;t.length;){const o=t.pop();let u=o+1;for(;u<n.tokens.length&&n.tokens[u].type==="s_close";)u++;u--,o!==u&&(r=n.tokens[u],n.tokens[u]=n.tokens[o],n.tokens[o]=r)}}function uO(n){const e=n.tokens_meta,r=n.tokens_meta.length;l8(n,n.delimiters);for(let t=0;t<r;t++)e[t]&&e[t].delimiters&&l8(n,e[t].delimiters)}const xy={tokenize:oO,postProcess:uO};function aO(n,e){const r=n.pos,t=n.src.charCodeAt(r);if(e||t!==95&&t!==42)return!1;const i=n.scanDelims(n.pos,t===42);for(let o=0;o<i.length;o++){const u=n.push("text","",0);u.content=String.fromCharCode(t),n.delimiters.push({marker:t,length:i.length,token:n.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return n.pos+=i.length,!0}function f8(n,e){const r=e.length;for(let t=r-1;t>=0;t--){const i=e[t];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const o=e[i.end],u=t>0&&e[t-1].end===i.end+1&&e[t-1].marker===i.marker&&e[t-1].token===i.token-1&&e[i.end+1].token===o.token+1,a=String.fromCharCode(i.marker),c=n.tokens[i.token];c.type=u?"strong_open":"em_open",c.tag=u?"strong":"em",c.nesting=1,c.markup=u?a+a:a,c.content="";const s=n.tokens[o.token];s.type=u?"strong_close":"em_close",s.tag=u?"strong":"em",s.nesting=-1,s.markup=u?a+a:a,s.content="",u&&(n.tokens[e[t-1].token].content="",n.tokens[e[i.end+1].token].content="",t--)}}function sO(n){const e=n.tokens_meta,r=n.tokens_meta.length;f8(n,n.delimiters);for(let t=0;t<r;t++)e[t]&&e[t].delimiters&&f8(n,e[t].delimiters)}const Hy={tokenize:aO,postProcess:sO};function cO(n,e){let r,t,i,o,u="",a="",c=n.pos,s=!0;if(n.src.charCodeAt(n.pos)!==91)return!1;const l=n.pos,f=n.posMax,d=n.pos+1,p=n.md.helpers.parseLinkLabel(n,n.pos,!0);if(p<0)return!1;let h=p+1;if(h<f&&n.src.charCodeAt(h)===40){for(s=!1,h++;h<f&&(r=n.src.charCodeAt(h),!(!Ce(r)&&r!==10));h++);if(h>=f)return!1;if(c=h,i=n.md.helpers.parseLinkDestination(n.src,h,n.posMax),i.ok){for(u=n.md.normalizeLink(i.str),n.md.validateLink(u)?h=i.pos:u="",c=h;h<f&&(r=n.src.charCodeAt(h),!(!Ce(r)&&r!==10));h++);if(i=n.md.helpers.parseLinkTitle(n.src,h,n.posMax),h<f&&c!==h&&i.ok)for(a=i.str,h=i.pos;h<f&&(r=n.src.charCodeAt(h),!(!Ce(r)&&r!==10));h++);}(h>=f||n.src.charCodeAt(h)!==41)&&(s=!0),h++}if(s){if(typeof n.env.references>"u")return!1;if(h<f&&n.src.charCodeAt(h)===91?(c=h+1,h=n.md.helpers.parseLinkLabel(n,h),h>=0?t=n.src.slice(c,h++):h=p+1):h=p+1,t||(t=n.src.slice(d,p)),o=n.env.references[Jo(t)],!o)return n.pos=l,!1;u=o.href,a=o.title}if(!e){n.pos=d,n.posMax=p;const m=n.push("link_open","a",1),v=[["href",u]];m.attrs=v,a&&v.push(["title",a]),n.linkLevel++,n.md.inline.tokenize(n),n.linkLevel--,n.push("link_close","a",-1)}return n.pos=h,n.posMax=f,!0}function lO(n,e){let r,t,i,o,u,a,c,s,l="";const f=n.pos,d=n.posMax;if(n.src.charCodeAt(n.pos)!==33||n.src.charCodeAt(n.pos+1)!==91)return!1;const p=n.pos+2,h=n.md.helpers.parseLinkLabel(n,n.pos+1,!1);if(h<0)return!1;if(o=h+1,o<d&&n.src.charCodeAt(o)===40){for(o++;o<d&&(r=n.src.charCodeAt(o),!(!Ce(r)&&r!==10));o++);if(o>=d)return!1;for(s=o,a=n.md.helpers.parseLinkDestination(n.src,o,n.posMax),a.ok&&(l=n.md.normalizeLink(a.str),n.md.validateLink(l)?o=a.pos:l=""),s=o;o<d&&(r=n.src.charCodeAt(o),!(!Ce(r)&&r!==10));o++);if(a=n.md.helpers.parseLinkTitle(n.src,o,n.posMax),o<d&&s!==o&&a.ok)for(c=a.str,o=a.pos;o<d&&(r=n.src.charCodeAt(o),!(!Ce(r)&&r!==10));o++);else c="";if(o>=d||n.src.charCodeAt(o)!==41)return n.pos=f,!1;o++}else{if(typeof n.env.references>"u")return!1;if(o<d&&n.src.charCodeAt(o)===91?(s=o+1,o=n.md.helpers.parseLinkLabel(n,o),o>=0?i=n.src.slice(s,o++):o=h+1):o=h+1,i||(i=n.src.slice(p,h)),u=n.env.references[Jo(i)],!u)return n.pos=f,!1;l=u.href,c=u.title}if(!e){t=n.src.slice(p,h);const m=[];n.md.inline.parse(t,n.md,n.env,m);const v=n.push("image","img",0),b=[["src",l],["alt",""]];v.attrs=b,v.children=m,v.content=t,c&&b.push(["title",c])}return n.pos=o,n.posMax=d,!0}const fO=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,dO=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function pO(n,e){let r=n.pos;if(n.src.charCodeAt(r)!==60)return!1;const t=n.pos,i=n.posMax;for(;;){if(++r>=i)return!1;const u=n.src.charCodeAt(r);if(u===60)return!1;if(u===62)break}const o=n.src.slice(t+1,r);if(dO.test(o)){const u=n.md.normalizeLink(o);if(!n.md.validateLink(u))return!1;if(!e){const a=n.push("link_open","a",1);a.attrs=[["href",u]],a.markup="autolink",a.info="auto";const c=n.push("text","",0);c.content=n.md.normalizeLinkText(o);const s=n.push("link_close","a",-1);s.markup="autolink",s.info="auto"}return n.pos+=o.length+2,!0}if(fO.test(o)){const u=n.md.normalizeLink("mailto:"+o);if(!n.md.validateLink(u))return!1;if(!e){const a=n.push("link_open","a",1);a.attrs=[["href",u]],a.markup="autolink",a.info="auto";const c=n.push("text","",0);c.content=n.md.normalizeLinkText(o);const s=n.push("link_close","a",-1);s.markup="autolink",s.info="auto"}return n.pos+=o.length+2,!0}return!1}function hO(n){return/^<a[>\s]/i.test(n)}function vO(n){return/^<\/a\s*>/i.test(n)}function mO(n){const e=n|32;return e>=97&&e<=122}function bO(n,e){if(!n.md.options.html)return!1;const r=n.posMax,t=n.pos;if(n.src.charCodeAt(t)!==60||t+2>=r)return!1;const i=n.src.charCodeAt(t+1);if(i!==33&&i!==63&&i!==47&&!mO(i))return!1;const o=n.src.slice(t).match(VF);if(!o)return!1;if(!e){const u=n.push("html_inline","",0);u.content=o[0],hO(u.content)&&n.linkLevel++,vO(u.content)&&n.linkLevel--}return n.pos+=o[0].length,!0}const gO=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,_O=/^&([a-z][a-z0-9]{1,31});/i;function yO(n,e){const r=n.pos,t=n.posMax;if(n.src.charCodeAt(r)!==38||r+1>=t)return!1;if(n.src.charCodeAt(r+1)===35){const o=n.src.slice(r).match(gO);if(o){if(!e){const u=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),a=n.push("text_special","",0);a.content=R2(u)?oo(u):oo(65533),a.markup=o[0],a.info="entity"}return n.pos+=o[0].length,!0}}else{const o=n.src.slice(r).match(_O);if(o){const u=Ny(o[0]);if(u!==o[0]){if(!e){const a=n.push("text_special","",0);a.content=u,a.markup=o[0],a.info="entity"}return n.pos+=o[0].length,!0}}}return!1}function d8(n){const e={},r=n.length;if(!r)return;let t=0,i=-2;const o=[];for(let u=0;u<r;u++){const a=n[u];if(o.push(0),(n[t].marker!==a.marker||i!==a.token-1)&&(t=u),i=a.token,a.length=a.length||0,!a.close)continue;e.hasOwnProperty(a.marker)||(e[a.marker]=[-1,-1,-1,-1,-1,-1]);const c=e[a.marker][(a.open?3:0)+a.length%3];let s=t-o[t]-1,l=s;for(;s>c;s-=o[s]+1){const f=n[s];if(f.marker===a.marker&&f.open&&f.end<0){let d=!1;if((f.close||a.open)&&(f.length+a.length)%3===0&&(f.length%3!==0||a.length%3!==0)&&(d=!0),!d){const p=s>0&&!n[s-1].open?o[s-1]+1:0;o[u]=u-s+p,o[s]=p,a.open=!1,f.end=u,f.close=!1,l=-1,i=-2;break}}}l!==-1&&(e[a.marker][(a.open?3:0)+(a.length||0)%3]=l)}}function EO(n){const e=n.tokens_meta,r=n.tokens_meta.length;d8(n.delimiters);for(let t=0;t<r;t++)e[t]&&e[t].delimiters&&d8(e[t].delimiters)}function $O(n){let e,r,t=0;const i=n.tokens,o=n.tokens.length;for(e=r=0;e<o;e++)i[e].nesting<0&&t--,i[e].level=t,i[e].nesting>0&&t++,i[e].type==="text"&&e+1<o&&i[e+1].type==="text"?i[e+1].content=i[e].content+i[e+1].content:(e!==r&&(i[r]=i[e]),r++);e!==r&&(i.length=r)}const Y1=[["text",ZF],["linkify",nO],["newline",rO],["escape",tO],["backticks",iO],["strikethrough",xy.tokenize],["emphasis",Hy.tokenize],["link",cO],["image",lO],["autolink",pO],["html_inline",bO],["entity",yO]],K1=[["balance_pairs",EO],["strikethrough",xy.postProcess],["emphasis",Hy.postProcess],["fragments_join",$O]];function ui(){this.ruler=new ln;for(let n=0;n<Y1.length;n++)this.ruler.push(Y1[n][0],Y1[n][1]);this.ruler2=new ln;for(let n=0;n<K1.length;n++)this.ruler2.push(K1[n][0],K1[n][1])}ui.prototype.skipToken=function(n){const e=n.pos,r=this.ruler.getRules(""),t=r.length,i=n.md.options.maxNesting,o=n.cache;if(typeof o[e]<"u"){n.pos=o[e];return}let u=!1;if(n.level<i){for(let a=0;a<t;a++)if(n.level++,u=r[a](n,!0),n.level--,u){if(e>=n.pos)throw new Error("inline rule didn't increment state.pos");break}}else n.pos=n.posMax;u||n.pos++,o[e]=n.pos};ui.prototype.tokenize=function(n){const e=this.ruler.getRules(""),r=e.length,t=n.posMax,i=n.md.options.maxNesting;for(;n.pos<t;){const o=n.pos;let u=!1;if(n.level<i){for(let a=0;a<r;a++)if(u=e[a](n,!1),u){if(o>=n.pos)throw new Error("inline rule didn't increment state.pos");break}}if(u){if(n.pos>=t)break;continue}n.pending+=n.src[n.pos++]}n.pending&&n.pushPending()};ui.prototype.parse=function(n,e,r,t){const i=new this.State(n,e,r,t);this.tokenize(i);const o=this.ruler2.getRules(""),u=o.length;for(let a=0;a<u;a++)o[a](i)};ui.prototype.State=oi;function wO(n){const e={};n=n||{},e.src_Any=ky.source,e.src_Cc=Iy.source,e.src_Z=Ry.source,e.src_P=I2.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");const r="[><｜]";return e.src_pseudo_letter="(?:(?!"+r+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+r+"|"+e.src_ZPCc+")(?!"+(n["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+r+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(n["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+r+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}function Ap(n){return Array.prototype.slice.call(arguments,1).forEach(function(r){r&&Object.keys(r).forEach(function(t){n[t]=r[t]})}),n}function Qo(n){return Object.prototype.toString.call(n)}function SO(n){return Qo(n)==="[object String]"}function AO(n){return Qo(n)==="[object Object]"}function LO(n){return Qo(n)==="[object RegExp]"}function p8(n){return Qo(n)==="[object Function]"}function kO(n){return n.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const By={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function IO(n){return Object.keys(n||{}).reduce(function(e,r){return e||By.hasOwnProperty(r)},!1)}const CO={"http:":{validate:function(n,e,r){const t=n.slice(e);return r.re.http||(r.re.http=new RegExp("^\\/\\/"+r.re.src_auth+r.re.src_host_port_strict+r.re.src_path,"i")),r.re.http.test(t)?t.match(r.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(n,e,r){const t=n.slice(e);return r.re.no_http||(r.re.no_http=new RegExp("^"+r.re.src_auth+"(?:localhost|(?:(?:"+r.re.src_domain+")\\.)+"+r.re.src_domain_root+")"+r.re.src_port+r.re.src_host_terminator+r.re.src_path,"i")),r.re.no_http.test(t)?e>=3&&n[e-3]===":"||e>=3&&n[e-3]==="/"?0:t.match(r.re.no_http)[0].length:0}},"mailto:":{validate:function(n,e,r){const t=n.slice(e);return r.re.mailto||(r.re.mailto=new RegExp("^"+r.re.src_email_name+"@"+r.re.src_host_strict,"i")),r.re.mailto.test(t)?t.match(r.re.mailto)[0].length:0}}},RO="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",MO="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function NO(n){n.__index__=-1,n.__text_cache__=""}function TO(n){return function(e,r){const t=e.slice(r);return n.test(t)?t.match(n)[0].length:0}}function h8(){return function(n,e){e.normalize(n)}}function uo(n){const e=n.re=wO(n.__opts__),r=n.__tlds__.slice();n.onCompile(),n.__tlds_replaced__||r.push(RO),r.push(e.src_xn),e.src_tlds=r.join("|");function t(a){return a.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(t(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(t(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(t(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(t(e.tpl_host_fuzzy_test),"i");const i=[];n.__compiled__={};function o(a,c){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+c)}Object.keys(n.__schemas__).forEach(function(a){const c=n.__schemas__[a];if(c===null)return;const s={validate:null,link:null};if(n.__compiled__[a]=s,AO(c)){LO(c.validate)?s.validate=TO(c.validate):p8(c.validate)?s.validate=c.validate:o(a,c),p8(c.normalize)?s.normalize=c.normalize:c.normalize?o(a,c):s.normalize=h8();return}if(SO(c)){i.push(a);return}o(a,c)}),i.forEach(function(a){n.__compiled__[n.__schemas__[a]]&&(n.__compiled__[a].validate=n.__compiled__[n.__schemas__[a]].validate,n.__compiled__[a].normalize=n.__compiled__[n.__schemas__[a]].normalize)}),n.__compiled__[""]={validate:null,normalize:h8()};const u=Object.keys(n.__compiled__).filter(function(a){return a.length>0&&n.__compiled__[a]}).map(kO).join("|");n.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+u+")","i"),n.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+u+")","ig"),n.re.schema_at_start=RegExp("^"+n.re.schema_search.source,"i"),n.re.pretest=RegExp("("+n.re.schema_test.source+")|("+n.re.host_fuzzy_test.source+")|@","i"),NO(n)}function qO(n,e){const r=n.__index__,t=n.__last_index__,i=n.__text_cache__.slice(r,t);this.schema=n.__schema__.toLowerCase(),this.index=r+e,this.lastIndex=t+e,this.raw=i,this.text=i,this.url=i}function Lp(n,e){const r=new qO(n,e);return n.__compiled__[r.schema].normalize(r,n),r}function hn(n,e){if(!(this instanceof hn))return new hn(n,e);e||IO(n)&&(e=n,n={}),this.__opts__=Ap({},By,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Ap({},CO,n),this.__compiled__={},this.__tlds__=MO,this.__tlds_replaced__=!1,this.re={},uo(this)}hn.prototype.add=function(e,r){return this.__schemas__[e]=r,uo(this),this};hn.prototype.set=function(e){return this.__opts__=Ap(this.__opts__,e),this};hn.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;let r,t,i,o,u,a,c,s,l;if(this.re.schema_test.test(e)){for(c=this.re.schema_search,c.lastIndex=0;(r=c.exec(e))!==null;)if(o=this.testSchemaAt(e,r[2],c.lastIndex),o){this.__schema__=r[2],this.__index__=r.index+r[1].length,this.__last_index__=r.index+r[0].length+o;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(s=e.search(this.re.host_fuzzy_test),s>=0&&(this.__index__<0||s<this.__index__)&&(t=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(u=t.index+t[1].length,(this.__index__<0||u<this.__index__)&&(this.__schema__="",this.__index__=u,this.__last_index__=t.index+t[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(l=e.indexOf("@"),l>=0&&(i=e.match(this.re.email_fuzzy))!==null&&(u=i.index+i[1].length,a=i.index+i[0].length,(this.__index__<0||u<this.__index__||u===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=u,this.__last_index__=a))),this.__index__>=0};hn.prototype.pretest=function(e){return this.re.pretest.test(e)};hn.prototype.testSchemaAt=function(e,r,t){return this.__compiled__[r.toLowerCase()]?this.__compiled__[r.toLowerCase()].validate(e,t,this):0};hn.prototype.match=function(e){const r=[];let t=0;this.__index__>=0&&this.__text_cache__===e&&(r.push(Lp(this,t)),t=this.__last_index__);let i=t?e.slice(t):e;for(;this.test(i);)r.push(Lp(this,t)),i=i.slice(this.__last_index__),t+=this.__last_index__;return r.length?r:null};hn.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;const r=this.re.schema_at_start.exec(e);if(!r)return null;const t=this.testSchemaAt(e,r[2],r[0].length);return t?(this.__schema__=r[2],this.__index__=r.index+r[1].length,this.__last_index__=r.index+r[0].length+t,Lp(this,0)):null};hn.prototype.tlds=function(e,r){return e=Array.isArray(e)?e:[e],r?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(t,i,o){return t!==o[i-1]}).reverse(),uo(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,uo(this),this)};hn.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};hn.prototype.onCompile=function(){};const Br=2147483647,Dn=36,T2=1,Ht=26,FO=38,OO=700,Uy=72,Wy=128,jy="-",DO=/^xn--/,PO=/[^\0-\x7F]/,xO=/[\x2E\u3002\uFF0E\uFF61]/g,HO={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},J1=Dn-T2,Pn=Math.floor,z1=String.fromCharCode;function ur(n){throw new RangeError(HO[n])}function BO(n,e){const r=[];let t=n.length;for(;t--;)r[t]=e(n[t]);return r}function Gy(n,e){const r=n.split("@");let t="";r.length>1&&(t=r[0]+"@",n=r[1]),n=n.replace(xO,".");const i=n.split("."),o=BO(i,e).join(".");return t+o}function Vy(n){const e=[];let r=0;const t=n.length;for(;r<t;){const i=n.charCodeAt(r++);if(i>=55296&&i<=56319&&r<t){const o=n.charCodeAt(r++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),r--)}else e.push(i)}return e}const UO=n=>String.fromCodePoint(...n),WO=function(n){return n>=48&&n<58?26+(n-48):n>=65&&n<91?n-65:n>=97&&n<123?n-97:Dn},v8=function(n,e){return n+22+75*(n<26)-((e!=0)<<5)},Xy=function(n,e,r){let t=0;for(n=r?Pn(n/OO):n>>1,n+=Pn(n/e);n>J1*Ht>>1;t+=Dn)n=Pn(n/J1);return Pn(t+(J1+1)*n/(n+FO))},Yy=function(n){const e=[],r=n.length;let t=0,i=Wy,o=Uy,u=n.lastIndexOf(jy);u<0&&(u=0);for(let a=0;a<u;++a)n.charCodeAt(a)>=128&&ur("not-basic"),e.push(n.charCodeAt(a));for(let a=u>0?u+1:0;a<r;){const c=t;for(let l=1,f=Dn;;f+=Dn){a>=r&&ur("invalid-input");const d=WO(n.charCodeAt(a++));d>=Dn&&ur("invalid-input"),d>Pn((Br-t)/l)&&ur("overflow"),t+=d*l;const p=f<=o?T2:f>=o+Ht?Ht:f-o;if(d<p)break;const h=Dn-p;l>Pn(Br/h)&&ur("overflow"),l*=h}const s=e.length+1;o=Xy(t-c,s,c==0),Pn(t/s)>Br-i&&ur("overflow"),i+=Pn(t/s),t%=s,e.splice(t++,0,i)}return String.fromCodePoint(...e)},Ky=function(n){const e=[];n=Vy(n);const r=n.length;let t=Wy,i=0,o=Uy;for(const c of n)c<128&&e.push(z1(c));const u=e.length;let a=u;for(u&&e.push(jy);a<r;){let c=Br;for(const l of n)l>=t&&l<c&&(c=l);const s=a+1;c-t>Pn((Br-i)/s)&&ur("overflow"),i+=(c-t)*s,t=c;for(const l of n)if(l<t&&++i>Br&&ur("overflow"),l===t){let f=i;for(let d=Dn;;d+=Dn){const p=d<=o?T2:d>=o+Ht?Ht:d-o;if(f<p)break;const h=f-p,m=Dn-p;e.push(z1(v8(p+h%m,0))),f=Pn(h/m)}e.push(z1(v8(f,0))),o=Xy(i,s,a===u),i=0,++a}++i,++t}return e.join("")},jO=function(n){return Gy(n,function(e){return DO.test(e)?Yy(e.slice(4).toLowerCase()):e})},GO=function(n){return Gy(n,function(e){return PO.test(e)?"xn--"+Ky(e):e})},Jy={version:"2.3.1",ucs2:{decode:Vy,encode:UO},decode:Yy,encode:Ky,toASCII:GO,toUnicode:jO},VO={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},XO={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},YO={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},KO={default:VO,zero:XO,commonmark:YO},JO=/^(vbscript|javascript|file|data):/,zO=/^data:image\/(gif|png|jpeg|webp);/;function QO(n){const e=n.trim().toLowerCase();return JO.test(e)?zO.test(e):!0}const zy=["http:","https:","mailto:"];function ZO(n){const e=k2(n,!0);if(e.hostname&&(!e.protocol||zy.indexOf(e.protocol)>=0))try{e.hostname=Jy.toASCII(e.hostname)}catch{}return ii(L2(e))}function eD(n){const e=k2(n,!0);if(e.hostname&&(!e.protocol||zy.indexOf(e.protocol)>=0))try{e.hostname=Jy.toUnicode(e.hostname)}catch{}return Gr(L2(e),Gr.defaultChars+"%")}function vn(n,e){if(!(this instanceof vn))return new vn(n,e);e||C2(n)||(e=n||{},n="default"),this.inline=new ui,this.block=new zo,this.core=new M2,this.renderer=new ut,this.linkify=new hn,this.validateLink=QO,this.normalizeLink=ZO,this.normalizeLinkText=eD,this.utils=rF,this.helpers=Ko({},uF),this.options={},this.configure(n),e&&this.set(e)}vn.prototype.set=function(n){return Ko(this.options,n),this};vn.prototype.configure=function(n){const e=this;if(C2(n)){const r=n;if(n=KO[r],!n)throw new Error('Wrong `markdown-it` preset "'+r+'", check name')}if(!n)throw new Error("Wrong `markdown-it` preset, can't be empty");return n.options&&e.set(n.options),n.components&&Object.keys(n.components).forEach(function(r){n.components[r].rules&&e[r].ruler.enableOnly(n.components[r].rules),n.components[r].rules2&&e[r].ruler2.enableOnly(n.components[r].rules2)}),this};vn.prototype.enable=function(n,e){let r=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(i){r=r.concat(this[i].ruler.enable(n,!0))},this),r=r.concat(this.inline.ruler2.enable(n,!0));const t=n.filter(function(i){return r.indexOf(i)<0});if(t.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+t);return this};vn.prototype.disable=function(n,e){let r=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(i){r=r.concat(this[i].ruler.disable(n,!0))},this),r=r.concat(this.inline.ruler2.disable(n,!0));const t=n.filter(function(i){return r.indexOf(i)<0});if(t.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+t);return this};vn.prototype.use=function(n){const e=[this].concat(Array.prototype.slice.call(arguments,1));return n.apply(n,e),this};vn.prototype.parse=function(n,e){if(typeof n!="string")throw new Error("Input data should be a String");const r=new this.core.State(n,this,e);return this.core.process(r),r.tokens};vn.prototype.render=function(n,e){return e=e||{},this.renderer.render(this.parse(n,e),this.options,e)};vn.prototype.parseInline=function(n,e){const r=new this.core.State(n,this,e);return r.inlineMode=!0,this.core.process(r),r.tokens};vn.prototype.renderInline=function(n,e){return e=e||{},this.renderer.render(this.parseInline(n,e),this.options,e)};const Qy=new vn({html:!1,linkify:!0,breaks:!0}),Zy="calculator-inline-reasoning",m8="calculator-adhoc-meta";function q2(n,e){const r=document.getElementById(m8);if(!e){r==null||r.remove();return}const t=r??(()=>{const o=document.createElement("div");return o.id=m8,n.insertAdjacentElement("beforebegin",o),o})();t.className="adhoc-meta",t.innerHTML="";const i=document.createElement("div");i.className="adhoc-meta-body";try{i.innerHTML=Qy.render(e)}catch{i.textContent=e}t.appendChild(i)}function eE(n,e){const r=new Set(Object.keys(n)),t=[];for(const i of e)r.has(i)&&(t.push(i),r.delete(i));for(const i of[...r].sort())t.push(i);return t}function F2(n,e,r){const t=document.getElementById(Zy),i=e.map((l,f)=>{var h;const d=Object.fromEntries(Object.entries(l.reasoning??{}).filter(([,m])=>m.trim()!=="")),p=(h=l.misc)!=null&&h.trim()?l.misc:void 0;return{trialIndex:f,reasoning:d,misc:p}}).filter(({reasoning:l,misc:f})=>Object.keys(l).length>0||f!==void 0);if(i.length===0){t==null||t.remove();return}const o=t??nD(n);o.innerHTML="";const u=document.createElement("details");u.className="reasoning-inline",u.open=!0;const a=document.createElement("summary");a.className="reasoning-inline-summary";const c=i.some(({reasoning:l})=>Object.keys(l).length>0),s=i.some(({misc:l})=>l!==void 0);c&&s?a.textContent="Reasoning and misc":c?a.textContent="Reasoning":a.textContent="Misc",u.appendChild(a);for(const{trialIndex:l,reasoning:f,misc:d}of i){if(e.length>1){const p=document.createElement("div");p.className="reasoning-trial-label",p.textContent=`Trial ${l+1}`,u.appendChild(p)}d!==void 0&&u.appendChild(b8("Misc",d));for(const p of eE(f,r))u.appendChild(b8(p,f[p]))}o.appendChild(u)}function nD(n){const e=document.createElement("div");return e.id=Zy,n.insertAdjacentElement("afterend",e),e}function b8(n,e){const r=document.createElement("div");r.className="reasoning-item";const t=document.createElement("div");t.className="reasoning-svar-label",t.textContent=n,r.appendChild(t);const i=document.createElement("div");i.className="reasoning-md";try{i.innerHTML=Qy.render(e)}catch{i.textContent=e}return r.appendChild(i),r}var Q1,g8;function rD(){if(g8)return Q1;g8=1;function n(M){return M instanceof Map?M.clear=M.delete=M.set=function(){throw new Error("map is read-only")}:M instanceof Set&&(M.add=M.clear=M.delete=function(){throw new Error("set is read-only")}),Object.freeze(M),Object.getOwnPropertyNames(M).forEach(D=>{const V=M[D],se=typeof V;(se==="object"||se==="function")&&!Object.isFrozen(V)&&n(V)}),M}class e{constructor(D){D.data===void 0&&(D.data={}),this.data=D.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function r(M){return M.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function t(M,...D){const V=Object.create(null);for(const se in M)V[se]=M[se];return D.forEach(function(se){for(const Pe in se)V[Pe]=se[Pe]}),V}const i="</span>",o=M=>!!M.scope,u=(M,{prefix:D})=>{if(M.startsWith("language:"))return M.replace("language:","language-");if(M.includes(".")){const V=M.split(".");return[`${D}${V.shift()}`,...V.map((se,Pe)=>`${se}${"_".repeat(Pe+1)}`)].join(" ")}return`${D}${M}`};class a{constructor(D,V){this.buffer="",this.classPrefix=V.classPrefix,D.walk(this)}addText(D){this.buffer+=r(D)}openNode(D){if(!o(D))return;const V=u(D.scope,{prefix:this.classPrefix});this.span(V)}closeNode(D){o(D)&&(this.buffer+=i)}value(){return this.buffer}span(D){this.buffer+=`<span class="${D}">`}}const c=(M={})=>{const D={children:[]};return Object.assign(D,M),D};class s{constructor(){this.rootNode=c(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(D){this.top.children.push(D)}openNode(D){const V=c({scope:D});this.add(V),this.stack.push(V)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(D){return this.constructor._walk(D,this.rootNode)}static _walk(D,V){return typeof V=="string"?D.addText(V):V.children&&(D.openNode(V),V.children.forEach(se=>this._walk(D,se)),D.closeNode(V)),D}static _collapse(D){typeof D!="string"&&D.children&&(D.children.every(V=>typeof V=="string")?D.children=[D.children.join("")]:D.children.forEach(V=>{s._collapse(V)}))}}class l extends s{constructor(D){super(),this.options=D}addText(D){D!==""&&this.add(D)}startScope(D){this.openNode(D)}endScope(){this.closeNode()}__addSublanguage(D,V){const se=D.root;V&&(se.scope=`language:${V}`),this.add(se)}toHTML(){return new a(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function f(M){return M?typeof M=="string"?M:M.source:null}function d(M){return m("(?=",M,")")}function p(M){return m("(?:",M,")*")}function h(M){return m("(?:",M,")?")}function m(...M){return M.map(V=>f(V)).join("")}function v(M){const D=M[M.length-1];return typeof D=="object"&&D.constructor===Object?(M.splice(M.length-1,1),D):{}}function b(...M){return"("+(v(M).capture?"":"?:")+M.map(se=>f(se)).join("|")+")"}function g(M){return new RegExp(M.toString()+"|").exec("").length-1}function _(M,D){const V=M&&M.exec(D);return V&&V.index===0}const y=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function E(M,{joinWith:D}){let V=0;return M.map(se=>{V+=1;const Pe=V;let xe=f(se),ee="";for(;xe.length>0;){const K=y.exec(xe);if(!K){ee+=xe;break}ee+=xe.substring(0,K.index),xe=xe.substring(K.index+K[0].length),K[0][0]==="\\"&&K[1]?ee+="\\"+String(Number(K[1])+Pe):(ee+=K[0],K[0]==="("&&V++)}return ee}).map(se=>`(${se})`).join(D)}const I=/\b\B/,L="[a-zA-Z]\\w*",R="[a-zA-Z_]\\w*",A="\\b\\d+(\\.\\d+)?",S="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",$="\\b(0b[01]+)",w="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",k=(M={})=>{const D=/^#![ ]*\//;return M.binary&&(M.begin=m(D,/.*\b/,M.binary,/\b.*/)),t({scope:"meta",begin:D,end:/$/,relevance:0,"on:begin":(V,se)=>{V.index!==0&&se.ignoreMatch()}},M)},C={begin:"\\\\[\\s\\S]",relevance:0},F={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[C]},T={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[C]},B={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},O=function(M,D,V={}){const se=t({scope:"comment",begin:M,end:D,contains:[]},V);se.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Pe=b("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return se.contains.push({begin:m(/[ ]+/,"(",Pe,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),se},x=O("//","$"),q=O("/\\*","\\*/"),Q=O("#","$"),W={scope:"number",begin:A,relevance:0},Y={scope:"number",begin:S,relevance:0},ne={scope:"number",begin:$,relevance:0},ie={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[C,{begin:/\[/,end:/\]/,relevance:0,contains:[C]}]},H={scope:"title",begin:L,relevance:0},j={scope:"title",begin:R,relevance:0},G={begin:"\\.\\s*"+R,relevance:0};var de=Object.freeze({__proto__:null,APOS_STRING_MODE:F,BACKSLASH_ESCAPE:C,BINARY_NUMBER_MODE:ne,BINARY_NUMBER_RE:$,COMMENT:O,C_BLOCK_COMMENT_MODE:q,C_LINE_COMMENT_MODE:x,C_NUMBER_MODE:Y,C_NUMBER_RE:S,END_SAME_AS_BEGIN:function(M){return Object.assign(M,{"on:begin":(D,V)=>{V.data._beginMatch=D[1]},"on:end":(D,V)=>{V.data._beginMatch!==D[1]&&V.ignoreMatch()}})},HASH_COMMENT_MODE:Q,IDENT_RE:L,MATCH_NOTHING_RE:I,METHOD_GUARD:G,NUMBER_MODE:W,NUMBER_RE:A,PHRASAL_WORDS_MODE:B,QUOTE_STRING_MODE:T,REGEXP_MODE:ie,RE_STARTERS_RE:w,SHEBANG:k,TITLE_MODE:H,UNDERSCORE_IDENT_RE:R,UNDERSCORE_TITLE_MODE:j});function Z(M,D){M.input[M.index-1]==="."&&D.ignoreMatch()}function oe(M,D){M.className!==void 0&&(M.scope=M.className,delete M.className)}function $e(M,D){D&&M.beginKeywords&&(M.begin="\\b("+M.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",M.__beforeBegin=Z,M.keywords=M.keywords||M.beginKeywords,delete M.beginKeywords,M.relevance===void 0&&(M.relevance=0))}function ge(M,D){Array.isArray(M.illegal)&&(M.illegal=b(...M.illegal))}function rr(M,D){if(M.match){if(M.begin||M.end)throw new Error("begin & end are not supported with match");M.begin=M.match,delete M.match}}function an(M,D){M.relevance===void 0&&(M.relevance=1)}const be=(M,D)=>{if(!M.beforeMatch)return;if(M.starts)throw new Error("beforeMatch cannot be used with starts");const V=Object.assign({},M);Object.keys(M).forEach(se=>{delete M[se]}),M.keywords=V.keywords,M.begin=m(V.beforeMatch,d(V.begin)),M.starts={relevance:0,contains:[Object.assign(V,{endsParent:!0})]},M.relevance=0,delete V.beforeMatch},En=["of","and","for","in","not","or","if","then","parent","list","value"],Xe="keyword";function $n(M,D,V=Xe){const se=Object.create(null);return typeof M=="string"?Pe(V,M.split(" ")):Array.isArray(M)?Pe(V,M):Object.keys(M).forEach(function(xe){Object.assign(se,$n(M[xe],D,xe))}),se;function Pe(xe,ee){D&&(ee=ee.map(K=>K.toLowerCase())),ee.forEach(function(K){const ae=K.split("|");se[ae[0]]=[xe,_r(ae[0],ae[1])]})}}function _r(M,D){return D?Number(D):z(M)?0:1}function z(M){return En.includes(M.toLowerCase())}const ve={},wn=M=>{console.error(M)},vt=(M,...D)=>{console.log(`WARN: ${M}`,...D)},Vn=(M,D)=>{ve[`${M}/${D}`]||(console.log(`Deprecated as of ${M}. ${D}`),ve[`${M}/${D}`]=!0)},tr=new Error;function Mr(M,D,{key:V}){let se=0;const Pe=M[V],xe={},ee={};for(let K=1;K<=D.length;K++)ee[K+se]=Pe[K],xe[K+se]=!0,se+=g(D[K-1]);M[V]=ee,M[V]._emit=xe,M[V]._multi=!0}function mt(M){if(Array.isArray(M.begin)){if(M.skip||M.excludeBegin||M.returnBegin)throw wn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),tr;if(typeof M.beginScope!="object"||M.beginScope===null)throw wn("beginScope must be object"),tr;Mr(M,M.begin,{key:"beginScope"}),M.begin=E(M.begin,{joinWith:""})}}function bt(M){if(Array.isArray(M.end)){if(M.skip||M.excludeEnd||M.returnEnd)throw wn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),tr;if(typeof M.endScope!="object"||M.endScope===null)throw wn("endScope must be object"),tr;Mr(M,M.end,{key:"endScope"}),M.end=E(M.end,{joinWith:""})}}function fi(M){M.scope&&typeof M.scope=="object"&&M.scope!==null&&(M.beginScope=M.scope,delete M.scope)}function Ye(M){fi(M),typeof M.beginScope=="string"&&(M.beginScope={_wrap:M.beginScope}),typeof M.endScope=="string"&&(M.endScope={_wrap:M.endScope}),mt(M),bt(M)}function Oe(M){function D(ee,K){return new RegExp(f(ee),"m"+(M.case_insensitive?"i":"")+(M.unicodeRegex?"u":"")+(K?"g":""))}class V{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(K,ae){ae.position=this.position++,this.matchIndexes[this.matchAt]=ae,this.regexes.push([ae,K]),this.matchAt+=g(K)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const K=this.regexes.map(ae=>ae[1]);this.matcherRe=D(E(K,{joinWith:"|"}),!0),this.lastIndex=0}exec(K){this.matcherRe.lastIndex=this.lastIndex;const ae=this.matcherRe.exec(K);if(!ae)return null;const We=ae.findIndex((gt,su)=>su>0&&gt!==void 0),He=this.matchIndexes[We];return ae.splice(0,We),Object.assign(ae,He)}}class se{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(K){if(this.multiRegexes[K])return this.multiRegexes[K];const ae=new V;return this.rules.slice(K).forEach(([We,He])=>ae.addRule(We,He)),ae.compile(),this.multiRegexes[K]=ae,ae}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(K,ae){this.rules.push([K,ae]),ae.type==="begin"&&this.count++}exec(K){const ae=this.getMatcher(this.regexIndex);ae.lastIndex=this.lastIndex;let We=ae.exec(K);if(this.resumingScanAtSamePosition()&&!(We&&We.index===this.lastIndex)){const He=this.getMatcher(0);He.lastIndex=this.lastIndex+1,We=He.exec(K)}return We&&(this.regexIndex+=We.position+1,this.regexIndex===this.count&&this.considerAll()),We}}function Pe(ee){const K=new se;return ee.contains.forEach(ae=>K.addRule(ae.begin,{rule:ae,type:"begin"})),ee.terminatorEnd&&K.addRule(ee.terminatorEnd,{type:"end"}),ee.illegal&&K.addRule(ee.illegal,{type:"illegal"}),K}function xe(ee,K){const ae=ee;if(ee.isCompiled)return ae;[oe,rr,Ye,be].forEach(He=>He(ee,K)),M.compilerExtensions.forEach(He=>He(ee,K)),ee.__beforeBegin=null,[$e,ge,an].forEach(He=>He(ee,K)),ee.isCompiled=!0;let We=null;return typeof ee.keywords=="object"&&ee.keywords.$pattern&&(ee.keywords=Object.assign({},ee.keywords),We=ee.keywords.$pattern,delete ee.keywords.$pattern),We=We||/\w+/,ee.keywords&&(ee.keywords=$n(ee.keywords,M.case_insensitive)),ae.keywordPatternRe=D(We,!0),K&&(ee.begin||(ee.begin=/\B|\b/),ae.beginRe=D(ae.begin),!ee.end&&!ee.endsWithParent&&(ee.end=/\B|\b/),ee.end&&(ae.endRe=D(ae.end)),ae.terminatorEnd=f(ae.end)||"",ee.endsWithParent&&K.terminatorEnd&&(ae.terminatorEnd+=(ee.end?"|":"")+K.terminatorEnd)),ee.illegal&&(ae.illegalRe=D(ee.illegal)),ee.contains||(ee.contains=[]),ee.contains=[].concat(...ee.contains.map(function(He){return Ke(He==="self"?ee:He)})),ee.contains.forEach(function(He){xe(He,ae)}),ee.starts&&xe(ee.starts,K),ae.matcher=Pe(ae),ae}if(M.compilerExtensions||(M.compilerExtensions=[]),M.contains&&M.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return M.classNameAliases=t(M.classNameAliases||{}),xe(M)}function Nr(M){return M?M.endsWithParent||Nr(M.starts):!1}function Ke(M){return M.variants&&!M.cachedVariants&&(M.cachedVariants=M.variants.map(function(D){return t(M,{variants:null},D)})),M.cachedVariants?M.cachedVariants:Nr(M)?t(M,{starts:M.starts?t(M.starts):null}):Object.isFrozen(M)?t(M):M}var Sn="11.11.1";class dn extends Error{constructor(D,V){super(D),this.name="HTMLInjectionError",this.html=V}}const yr=r,Tr=t,qr=Symbol("nomatch"),Z$=7,Lh=function(M){const D=Object.create(null),V=Object.create(null),se=[];let Pe=!0;const xe="Could not find the language '{}', did you forget to load/include a language module?",ee={disableAutodetect:!0,name:"Plain text",contains:[]};let K={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:l};function ae(U){return K.noHighlightRe.test(U)}function We(U){let te=U.className+" ";te+=U.parentNode?U.parentNode.className:"";const he=K.languageDetectRe.exec(te);if(he){const Le=ir(he[1]);return Le||(vt(xe.replace("{}",he[1])),vt("Falling back to no-highlight mode for this block.",U)),Le?he[1]:"no-highlight"}return te.split(/\s+/).find(Le=>ae(Le)||ir(Le))}function He(U,te,he){let Le="",Be="";typeof te=="object"?(Le=U,he=te.ignoreIllegals,Be=te.language):(Vn("10.7.0","highlight(lang, code, ...args) has been deprecated."),Vn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Be=U,Le=te),he===void 0&&(he=!0);const An={code:Le,language:Be};pi("before:highlight",An);const or=An.result?An.result:gt(An.language,An.code,he);return or.code=An.code,pi("after:highlight",or),or}function gt(U,te,he,Le){const Be=Object.create(null);function An(X,re){return X.keywords[re]}function or(){if(!ce.keywords){Je.addText(ke);return}let X=0;ce.keywordPatternRe.lastIndex=0;let re=ce.keywordPatternRe.exec(ke),le="";for(;re;){le+=ke.substring(X,re.index);const we=Mn.case_insensitive?re[0].toLowerCase():re[0],Qe=An(ce,we);if(Qe){const[Xn,mw]=Qe;if(Je.addText(le),le="",Be[we]=(Be[we]||0)+1,Be[we]<=Z$&&(mi+=mw),Xn.startsWith("_"))le+=re[0];else{const bw=Mn.classNameAliases[Xn]||Xn;Rn(re[0],bw)}}else le+=re[0];X=ce.keywordPatternRe.lastIndex,re=ce.keywordPatternRe.exec(ke)}le+=ke.substring(X),Je.addText(le)}function hi(){if(ke==="")return;let X=null;if(typeof ce.subLanguage=="string"){if(!D[ce.subLanguage]){Je.addText(ke);return}X=gt(ce.subLanguage,ke,!0,qh[ce.subLanguage]),qh[ce.subLanguage]=X._top}else X=cu(ke,ce.subLanguage.length?ce.subLanguage:null);ce.relevance>0&&(mi+=X.relevance),Je.__addSublanguage(X._emitter,X.language)}function pn(){ce.subLanguage!=null?hi():or(),ke=""}function Rn(X,re){X!==""&&(Je.startScope(re),Je.addText(X),Je.endScope())}function Rh(X,re){let le=1;const we=re.length-1;for(;le<=we;){if(!X._emit[le]){le++;continue}const Qe=Mn.classNameAliases[X[le]]||X[le],Xn=re[le];Qe?Rn(Xn,Qe):(ke=Xn,or(),ke=""),le++}}function Mh(X,re){return X.scope&&typeof X.scope=="string"&&Je.openNode(Mn.classNameAliases[X.scope]||X.scope),X.beginScope&&(X.beginScope._wrap?(Rn(ke,Mn.classNameAliases[X.beginScope._wrap]||X.beginScope._wrap),ke=""):X.beginScope._multi&&(Rh(X.beginScope,re),ke="")),ce=Object.create(X,{parent:{value:ce}}),ce}function Nh(X,re,le){let we=_(X.endRe,le);if(we){if(X["on:end"]){const Qe=new e(X);X["on:end"](re,Qe),Qe.isMatchIgnored&&(we=!1)}if(we){for(;X.endsParent&&X.parent;)X=X.parent;return X}}if(X.endsWithParent)return Nh(X.parent,re,le)}function fw(X){return ce.matcher.regexIndex===0?(ke+=X[0],1):(pu=!0,0)}function dw(X){const re=X[0],le=X.rule,we=new e(le),Qe=[le.__beforeBegin,le["on:begin"]];for(const Xn of Qe)if(Xn&&(Xn(X,we),we.isMatchIgnored))return fw(re);return le.skip?ke+=re:(le.excludeBegin&&(ke+=re),pn(),!le.returnBegin&&!le.excludeBegin&&(ke=re)),Mh(le,X),le.returnBegin?0:re.length}function pw(X){const re=X[0],le=te.substring(X.index),we=Nh(ce,X,le);if(!we)return qr;const Qe=ce;ce.endScope&&ce.endScope._wrap?(pn(),Rn(re,ce.endScope._wrap)):ce.endScope&&ce.endScope._multi?(pn(),Rh(ce.endScope,X)):Qe.skip?ke+=re:(Qe.returnEnd||Qe.excludeEnd||(ke+=re),pn(),Qe.excludeEnd&&(ke=re));do ce.scope&&Je.closeNode(),!ce.skip&&!ce.subLanguage&&(mi+=ce.relevance),ce=ce.parent;while(ce!==we.parent);return we.starts&&Mh(we.starts,X),Qe.returnEnd?0:re.length}function hw(){const X=[];for(let re=ce;re!==Mn;re=re.parent)re.scope&&X.unshift(re.scope);X.forEach(re=>Je.openNode(re))}let vi={};function Th(X,re){const le=re&&re[0];if(ke+=X,le==null)return pn(),0;if(vi.type==="begin"&&re.type==="end"&&vi.index===re.index&&le===""){if(ke+=te.slice(re.index,re.index+1),!Pe){const we=new Error(`0 width match regex (${U})`);throw we.languageName=U,we.badRule=vi.rule,we}return 1}if(vi=re,re.type==="begin")return dw(re);if(re.type==="illegal"&&!he){const we=new Error('Illegal lexeme "'+le+'" for mode "'+(ce.scope||"<unnamed>")+'"');throw we.mode=ce,we}else if(re.type==="end"){const we=pw(re);if(we!==qr)return we}if(re.type==="illegal"&&le==="")return ke+=`
`,1;if(du>1e5&&du>re.index*3)throw new Error("potential infinite loop, way more iterations than matches");return ke+=le,le.length}const Mn=ir(U);if(!Mn)throw wn(xe.replace("{}",U)),new Error('Unknown language: "'+U+'"');const vw=Oe(Mn);let fu="",ce=Le||vw;const qh={},Je=new K.__emitter(K);hw();let ke="",mi=0,Er=0,du=0,pu=!1;try{if(Mn.__emitTokens)Mn.__emitTokens(te,Je);else{for(ce.matcher.considerAll();;){du++,pu?pu=!1:ce.matcher.considerAll(),ce.matcher.lastIndex=Er;const X=ce.matcher.exec(te);if(!X)break;const re=te.substring(Er,X.index),le=Th(re,X);Er=X.index+le}Th(te.substring(Er))}return Je.finalize(),fu=Je.toHTML(),{language:U,value:fu,relevance:mi,illegal:!1,_emitter:Je,_top:ce}}catch(X){if(X.message&&X.message.includes("Illegal"))return{language:U,value:yr(te),illegal:!0,relevance:0,_illegalBy:{message:X.message,index:Er,context:te.slice(Er-100,Er+100),mode:X.mode,resultSoFar:fu},_emitter:Je};if(Pe)return{language:U,value:yr(te),illegal:!1,relevance:0,errorRaised:X,_emitter:Je,_top:ce};throw X}}function su(U){const te={value:yr(U),illegal:!1,relevance:0,_top:ee,_emitter:new K.__emitter(K)};return te._emitter.addText(U),te}function cu(U,te){te=te||K.languages||Object.keys(D);const he=su(U),Le=te.filter(ir).filter(Ch).map(pn=>gt(pn,U,!1));Le.unshift(he);const Be=Le.sort((pn,Rn)=>{if(pn.relevance!==Rn.relevance)return Rn.relevance-pn.relevance;if(pn.language&&Rn.language){if(ir(pn.language).supersetOf===Rn.language)return 1;if(ir(Rn.language).supersetOf===pn.language)return-1}return 0}),[An,or]=Be,hi=An;return hi.secondBest=or,hi}function ew(U,te,he){const Le=te&&V[te]||he;U.classList.add("hljs"),U.classList.add(`language-${Le}`)}function lu(U){let te=null;const he=We(U);if(ae(he))return;if(pi("before:highlightElement",{el:U,language:he}),U.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",U);return}if(U.children.length>0&&(K.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(U)),K.throwUnescapedHTML))throw new dn("One of your code blocks includes unescaped HTML.",U.innerHTML);te=U;const Le=te.textContent,Be=he?He(Le,{language:he,ignoreIllegals:!0}):cu(Le);U.innerHTML=Be.value,U.dataset.highlighted="yes",ew(U,he,Be.language),U.result={language:Be.language,re:Be.relevance,relevance:Be.relevance},Be.secondBest&&(U.secondBest={language:Be.secondBest.language,relevance:Be.secondBest.relevance}),pi("after:highlightElement",{el:U,result:Be,text:Le})}function nw(U){K=Tr(K,U)}const rw=()=>{di(),Vn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function tw(){di(),Vn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let kh=!1;function di(){function U(){di()}if(document.readyState==="loading"){kh||window.addEventListener("DOMContentLoaded",U,!1),kh=!0;return}document.querySelectorAll(K.cssSelector).forEach(lu)}function iw(U,te){let he=null;try{he=te(M)}catch(Le){if(wn("Language definition for '{}' could not be registered.".replace("{}",U)),Pe)wn(Le);else throw Le;he=ee}he.name||(he.name=U),D[U]=he,he.rawDefinition=te.bind(null,M),he.aliases&&Ih(he.aliases,{languageName:U})}function ow(U){delete D[U];for(const te of Object.keys(V))V[te]===U&&delete V[te]}function uw(){return Object.keys(D)}function ir(U){return U=(U||"").toLowerCase(),D[U]||D[V[U]]}function Ih(U,{languageName:te}){typeof U=="string"&&(U=[U]),U.forEach(he=>{V[he.toLowerCase()]=te})}function Ch(U){const te=ir(U);return te&&!te.disableAutodetect}function aw(U){U["before:highlightBlock"]&&!U["before:highlightElement"]&&(U["before:highlightElement"]=te=>{U["before:highlightBlock"](Object.assign({block:te.el},te))}),U["after:highlightBlock"]&&!U["after:highlightElement"]&&(U["after:highlightElement"]=te=>{U["after:highlightBlock"](Object.assign({block:te.el},te))})}function sw(U){aw(U),se.push(U)}function cw(U){const te=se.indexOf(U);te!==-1&&se.splice(te,1)}function pi(U,te){const he=U;se.forEach(function(Le){Le[he]&&Le[he](te)})}function lw(U){return Vn("10.7.0","highlightBlock will be removed entirely in v12.0"),Vn("10.7.0","Please use highlightElement now."),lu(U)}Object.assign(M,{highlight:He,highlightAuto:cu,highlightAll:di,highlightElement:lu,highlightBlock:lw,configure:nw,initHighlighting:rw,initHighlightingOnLoad:tw,registerLanguage:iw,unregisterLanguage:ow,listLanguages:uw,getLanguage:ir,registerAliases:Ih,autoDetection:Ch,inherit:Tr,addPlugin:sw,removePlugin:cw}),M.debugMode=function(){Pe=!1},M.safeMode=function(){Pe=!0},M.versionString=Sn,M.regex={concat:m,lookahead:d,either:b,optional:h,anyNumberOfTimes:p};for(const U in de)typeof de[U]=="object"&&n(de[U]);return Object.assign(M,de),M},Fr=Lh({});return Fr.newInstance=()=>Lh({}),Q1=Fr,Fr.HighlightJS=Fr,Fr.default=Fr,Q1}var tD=rD();const nE=Hn(tD);function iD(n){const e=n.regex,r=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),t=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],a={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:t,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},c={className:"meta",begin:/^(>>>|\.\.\.) /},s={className:"subst",begin:/\{/,end:/\}/,keywords:a,illegal:/#/},l={begin:/\{\{/,relevance:0},f={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,c,l,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,c,l,s]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[n.BACKSLASH_ESCAPE,l,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,l,s]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},d="[0-9](_?[0-9])*",p=`(\\b(${d}))?\\.(${d})|\\b(${d})\\.`,h=`\\b|${t.join("|")}`,m={className:"number",relevance:0,variants:[{begin:`(\\b(${d})|(${p}))[eE][+-]?(${d})[jJ]?(?=${h})`},{begin:`(${p})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${h})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${h})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${h})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${h})`},{begin:`\\b(${d})[jJ](?=${h})`}]},v={className:"comment",begin:e.lookahead(/# type:/),end:/$/,keywords:a,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},b={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:["self",c,m,f,n.HASH_COMMENT_MODE]}]};return s.contains=[f,m,c],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:a,illegal:/(<\/|\?)|=>/,contains:[c,m,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},f,v,n.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,r],scope:{1:"keyword",3:"title.function"},contains:[b]},{variants:[{match:[/\bclass/,/\s+/,r,/\s*/,/\(\s*/,r,/\s*\)/]},{match:[/\bclass/,/\s+/,r]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[m,b,f]}]}}nE.registerLanguage("python",iD);const _8=nE,y8=new vn({html:!1,linkify:!0,breaks:!0}),rE="payload-modal-backdrop";function oD(n){const e=n.trial_metadata;return!e||e.length===0?!1:e.some(r=>r.reasoning&&Object.keys(r.reasoning).length>0||r.misc||r.agent_code||r.source_code)}function uD(n,e){Ii();const r=n.trial_metadata;if(!r||r.length===0)return;const t=document.createElement("div");t.id=rE,t.className="payload-backdrop";const i=document.createElement("div");i.className="payload-modal";const o=document.createElement("button");o.className="payload-close-btn",o.textContent="×",o.title="Close (Esc)",o.addEventListener("click",Ii),i.appendChild(o);const u=document.createElement("h2");u.className="payload-header",u.textContent=`${n.label} — payload`,i.appendChild(u);const a=document.createElement("div");if(a.className="payload-content",r.length>1){const c=document.createElement("div");c.className="payload-trial-tabs";for(let s=0;s<r.length;s++){const l=document.createElement("button");l.className="payload-trial-tab"+(s===0?" active":""),l.dataset.trial=String(s),l.textContent=`Trial ${s+1}`,l.addEventListener("click",()=>{for(const f of c.querySelectorAll(".payload-trial-tab"))f.classList.toggle("active",f===l);E8(a,r[s],e)}),c.appendChild(l)}i.appendChild(c)}i.appendChild(a),E8(a,r[0],e),t.appendChild(i),document.body.appendChild(t),document.addEventListener("keydown",tE),t.addEventListener("click",c=>{c.target===t&&Ii()})}function Ii(){const n=document.getElementById(rE);n&&(n.remove(),document.removeEventListener("keydown",tE))}function tE(n){n.key==="Escape"&&Ii()}function E8(n,e,r){if(n.innerHTML="",e.misc){const t=_t("Misc",!0);t.querySelector(".payload-detail-body").appendChild($8(e.misc)),n.appendChild(t)}if(e.reasoning&&Object.keys(e.reasoning).length>0){const t=_t("Reasoning",!0),i=eE(e.reasoning,r);for(const o of i){const u=e.reasoning[o],a=_t(o,!0);a.querySelector(".payload-detail-body").appendChild($8(u)),t.querySelector(".payload-detail-body").appendChild(a)}n.appendChild(t)}if(e.agent_code){const t=_t("Agent Code",!1);t.querySelector(".payload-detail-body").appendChild(w8(e.agent_code)),n.appendChild(t)}if(e.source_code){const t=_t("Source Code (full)",!1);t.querySelector(".payload-detail-body").appendChild(w8(e.source_code)),n.appendChild(t)}}function _t(n,e){const r=document.createElement("details");r.className="payload-detail",e&&(r.open=!0);const t=document.createElement("summary");t.className="payload-summary",t.textContent=n,r.appendChild(t);const i=document.createElement("div");return i.className="payload-detail-body",r.appendChild(i),r}function $8(n){if(y8)try{const r=document.createElement("div");return r.className="payload-md",r.innerHTML=y8.render(n),r}catch{}const e=document.createElement("pre");return e.className="payload-pre-fallback",e.textContent=n,e}function w8(n){const e=document.createElement("pre");e.className="payload-code";const r=document.createElement("code");if(_8)try{return r.innerHTML=_8.highlight(n,{language:"python"}).value,e.appendChild(r),e}catch{}return r.textContent=n,e.appendChild(r),e}function aD(){const n=new WeakMap;return{get(e,r){var t;return(t=n.get(e))==null?void 0:t.get(r)},set(e,r,t){let i=n.get(e);i===void 0&&(i=new Map,n.set(e,i)),i.set(r,t)}}}const sD=.5,cD=3,S8=new WeakMap,A8=new WeakMap,L8=aD();function er(n,e,r){var d;if(S8.set(n,e),(d=n.parentElement)!=null&&d.classList.contains("resizable-canvas-wrapper"))return;const t=n.width,i=n.height;A8.set(n,{w:t,h:i});const o=r===void 0?1:L8.get(r.stateHost,r.stateKey)??1,u=document.createElement("div");u.className="resizable-canvas-wrapper",n.parentElement.insertBefore(u,n),u.appendChild(n);const a=document.createElement("div");a.className="resizable-canvas-handle",u.appendChild(a),o!==1&&(n.width=Math.round(t*o),n.height=Math.round(i*o)),u.style.width=`${n.width}px`,o!==1&&e();let c=!1,s=0,l=t;a.addEventListener("pointerdown",p=>{var h;c=!0,s=p.clientX,l=n.width,(h=a.setPointerCapture)==null||h.call(a,p.pointerId),p.preventDefault()}),a.addEventListener("pointermove",p=>{var _;if(!c)return;const h=A8.get(n)??{w:t,h:i},m=p.clientX-s,v=Math.max(h.w*sD,Math.min(h.w*cD,l+m)),b=v/h.w,g=Math.round(h.h*b);n.width=Math.round(v),n.height=g,u.style.width=`${n.width}px`,r!==void 0&&L8.set(r.stateHost,r.stateKey,n.width/h.w),(_=S8.get(n))==null||_()});const f=()=>{c=!1};a.addEventListener("pointerup",f),a.addEventListener("lostpointercapture",f)}const iE=18,oE=80,lD=16,ao=new Set;let k8=!1;function fD(){k8||(k8=!0,document.addEventListener("click",n=>{for(const e of[...ao])document.contains(e.wrapper)?e.wrapper.contains(n.target)||e.close():ao.delete(e)}))}function dD(n,e=iE,r=oE){return uE(t=>{t.textContent=n},!1,!0,e,r)}function at(n,e=iE,r=oE){return uE(t=>{t.innerHTML=n()},!0,!1,e,r)}function uE(n,e,r,t,i){const o=document.createElement("span");o.className="help-widget",o.style.display="inline-block";const u=document.createElement("button");u.className="help-widget-btn",u.type="button",u.textContent="?",u.setAttribute("aria-label","Help"),u.style.width=`${t}px`,u.style.height=`${t}px`,u.style.fontSize=`${Math.round(t*.6)}px`,u.style.lineHeight=`${t}px`;const a=document.createElement("div");a.className="help-widget-popover",a.hidden=!0;const c=document.createElement("button");c.className="help-widget-close",c.type="button",c.textContent="×",c.setAttribute("aria-label","Close");const s=document.createElement("div");s.className=e?"help-widget-body html-content":"help-widget-body",a.appendChild(c),a.appendChild(s),o.appendChild(u),o.appendChild(a),r&&n(s);const l={wrapper:o,close:()=>d()};function f(){n(s),a.hidden=!1,ao.add(l);const p=window.innerWidth,h=window.innerHeight,m=Math.round(p*i/100),v=h-2*lD;a.style.width=`${m}px`,a.style.maxHeight=`${v}px`;const b=Math.min(a.offsetHeight,v);a.style.left=`${Math.round((p-m)/2)}px`,a.style.top=`${Math.round((h-b)/2)}px`}function d(){a.hidden=!0,ao.delete(l)}return u.addEventListener("click",p=>{p.stopPropagation(),a.hidden?f():d()}),c.addEventListener("click",p=>{p.stopPropagation(),d()}),a.addEventListener("keydown",p=>{p.key==="Escape"&&(d(),u.focus())}),o.addEventListener("keydown",p=>{p.key==="Escape"&&!a.hidden&&(d(),u.focus())}),fD(),o}const aE=1,pD="shortcutKeys",hD=new Set(["","date","datetime-local","email","month","number","password","search","tel","text","time","url","week"]),st=Object.freeze([{id:"toggle_mnames",description:"Toggle longer meaning-carrying names",default_shortcut:"n",enabled:!0},{id:"goto_calculator",description:"Move to Calculator section",default_shortcut:"c",enabled:!0},{id:"goto_top",description:"Move to top of page",default_shortcut:"t",enabled:!0},{id:"toggle_srcquotes_inlined",description:"Toggle source quotes inline in the text vs. behind a glyph",default_shortcut:"q",enabled:!0},{id:"toggle_framing_notes",description:"Show/hide all framing notes",default_shortcut:"f",enabled:!0},{id:"switch_whose_mode",description:"Switch whose mode (Yours / Adhoc / AI results), restoring its last viewed preset",default_shortcut:"m",enabled:!0}]);function sE(){return st}function I8(n){return st.find(e=>e.id===n)}function O2(n){const e=n.trim().toLowerCase();return e===""?{ok:!0,key:e}:[...e].length!==aE?{ok:!1,key:e,error:"Use a single key, or clear the field to disable this shortcut."}:{ok:!0,key:e}}function cE(n){if(!n||typeof n!="object"||Array.isArray(n))return{};const e={};for(const[r,t]of Object.entries(n)){if(typeof t!="string"){console.error(`Ignoring non-string shortcut key for ${r}.`);continue}const i=O2(t);if(!i.ok){console.error(`Ignoring invalid persisted shortcut key for ${r}: ${t}`);continue}e[r]=i.key}return e}function vD(){const n={};for(const e of st)n[e.id]=e.default_shortcut;return n}function ct(){const n=cE(cn().shortcutKeys);return{...vD(),...n}}function lE(n,e,r=ct()){if(e==="")return null;for(const t of sE())if(t.id!==n&&r[t.id]===e)return t.id;return null}function mD(n,e){var a;if(!I8(n))throw new Error(`Unknown shortcut id: ${n}`);const t=O2(e);if(!t.ok)return{ok:!1,key:t.key,error:t.error};const i=ct(),o=lE(n,t.key,{...i,[n]:t.key});if(o)return{ok:!1,key:t.key,conflictId:o,error:`Already assigned to "${((a=I8(o))==null?void 0:a.description)??o}".`};const u=cE(cn().shortcutKeys);return u[n]=t.key,Nt(pD,u),{ok:!0,key:t.key}}function bD(n){if(n.altKey||n.ctrlKey||n.metaKey)return null;const e=n.key.toLowerCase();return[...e].length!==aE?null:e}function gD(n){if(!(n instanceof HTMLElement))return!1;if(n.isContentEditable)return!0;let e=n;for(;e;){if(e.isContentEditable||e.contentEditable==="true")return!0;const r=e.getAttribute("contenteditable");if(r!==null&&r.toLowerCase()!=="false")return!0;e=e.parentElement}return n instanceof HTMLTextAreaElement?!0:n instanceof HTMLInputElement?hD.has(n.type.toLowerCase()):!1}function _D(n){const e=r=>{if(gD(r.target))return;const t=bD(r);if(t===null)return;const i=ct();for(const o of sE()){if(i[o.id]!==t)continue;const u=n[o.id];if(!u)return;r.preventDefault(),u();return}};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}const yD=[{aid:"alpoker"},{aid:"mcovidB6",family:"mcovidB"},{aid:"mcovidB7",family:"mcovidB"},{aid:"mcovidB8",family:"mcovidB"},{aid:"mcovidB9",family:"mcovidB"},{aid:"mcovidB10",family:"mcovidB"},{aid:"mcovidB11",family:"mcovidB"},{aid:"mcovidA",family:"mcovidA"},{aid:"mcovidA2",family:"mcovidA"},{aid:"covid0",family:"cov-origin-ATC"},{aid:"covatc1",family:"cov-origin-ATC"},{aid:"eggsFH1",family:"eggs"},{aid:"eggsFH2",family:"eggs"},{aid:"lhcFXH1",family:"lhc"},{aid:"lhcFXH_SolMax",family:"lhc"},{aid:"lhcFXH_SolMax_Ultra",family:"lhc"}],ED={"cov-origin-ATC":{sequence:[{aid:"covid0",version:"v0"},{aid:"covatc1",version:"v1"}]},mcovidB:{sequence:[{aid:"mcovidB6",version:"v6"},{aid:"mcovidB7",version:"v7"},{aid:"mcovidB8",version:"v8"},{aid:"mcovidB9",version:"v9"},{aid:"mcovidB10",version:"v10"},{aid:"mcovidB11",version:"v11"}]},mcovidA:{sequence:[{aid:"mcovidA",version:"v1"},{aid:"mcovidA2",version:"v2"}]},eggs:{sequence:[{aid:"eggsFH1",version:"v1"},{aid:"eggsFH2",version:"v2"}]},lhc:{sequence:[{aid:"lhcFXH1",version:"v1"},{aid:"lhcFXH_SolMax",version:"v2"},{aid:"lhcFXH_SolMax_Ultra",version:"v3"}]},testE:{sequence:[{aid:"testprob_preE",version:"pre"},{aid:"testprob_postE",version:"post"},{aid:"testprob_postE_extra",version:"postextra"}]}},$D={navList:yD,families:ED},Zo=$D,fE=(()=>{const n=new Map;for(const[e,{sequence:r}]of Object.entries(Zo.families))r.forEach((t,i)=>n.set(t.aid,{family:e,index:i}));return n})();function wD(){return Zo.navList}function SD(){const n={};for(const[e,{sequence:r}]of Object.entries(Zo.families))n[e]=r;return n}function dE(n){var e;return(e=fE.get(n))==null?void 0:e.family}function AD(n){const e=fE.get(n);if(e===void 0)return;const r=Zo.families[e.family].sequence,t={version:r[e.index].version};return e.index>0&&(t.prev=r[e.index-1].aid),e.index+1<r.length&&(t.next=r[e.index+1].aid),t}const LD=`<p>Joint dependence lets you say how your distributions move <em>together</em>, beyond what each one says on its own. You express it as <b>named latents</b>: each latent is one shared influence, described in your own words, with a signed <b>loading</b> on each quantity it touches.</p>
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
<p>Say which one you mean. And note that dependence does not only widen: loading a ratio&#39;s numerator and its denominator in the same direction makes them rise and fall together, which <em>narrows</em> that ratio. That is sometimes exactly the belief you hold — but check the independent-vs-joint comparison, rather than reasoning from the signs alone.</p>`,so={joint_dependence:LD,"framing-explainer-persuasive":"Text in this style is expected or intended to be persuasive, with the point of view given by the POV label.","framing-explainer-nonpersuasive":"Text in this style is supplementary context not intended to be persuasive on its own.","srcquote-explainer":"Text in this style is source material related to the entity above it."},kD="joint_dependence";function ID(){return so[kD]}function Ci(n){return n?`<b>${J(n)}</b>`:"<i>(unbound)</i>"}const CD={toggle_mnames:"toggle between short and long names for some defined entities",goto_top:"jump to top of the page",goto_calculator:"jump to the Calculator section",switch_whose_mode:"switch between <b>Yours</b> / <b>Adhoc</b> / <b>AI results</b> modes, restoring the last viewed preset in each",toggle_srcquotes_inlined:`toggle source quotes inlined in the text (mirroring what AI agents see when source quotes are enabled) vs. accessible by clicking the <button class="srcquote-glyph" type="button" tabindex="-1">❝</button> buttons. This is a view setting only — it never changes what a preset's estimator actually read`,toggle_framing_notes:"show or hide all framing notes at once, without disturbing which ones the problem itself enables"};function RD(){return'<li>When relevant (not all Adhoc / AI-results presets have all response modes), you can switch between estimation response modes <b>point</b> | <b>bounds</b> | <b>distribution</b>. For each subjective variable (the cards in the <b>Estimation</b> section) they mean:<ul><li><b>point</b>: A single real value. Use for low-effort estimation.</li><li><b>bounds</b>: A real interval given as <code>low high</code>. Use to incorporate flat uncertainty, without any sampling interpretation. The Calculator will show the interval each compute formula can range over, given your intervals: "≅ [low, high]" means the shown interval is exactly that range; "⫇ [low, high]" means it is an outer enclosure — the true range may be narrower, but never wider. Displayed endpoints are rounded outward, so rounding also never narrows a shown interval.</li><li><b>distribution</b>: A belief distribution; Monte Carlo sampling evaluates. This is the advanced mode. The <b>settings</b> dropdown on the left side of the sticky bar has parameters for controlling the number of iterations, in case the defaults make your experience too slow. When in distribution mode, click the help icon in any Estimation card to learn what you can put in the input fields. The Calculator section has a redundant single input box for the same data; useful for copy-pasting from a read-only Adhoc or AI result.</li></ul></li>'}function MD(n){const e=ct(),r=[];r.push(`<p>Use the ${Ci(e.switch_whose_mode)} shortcut to switch between entering your own estimations and interacting with preset responses — or, for more control, scroll down to the Calculator section (${Ci(e.goto_calculator)} shortcut) to switch between:</p><ul><li>entering your own estimations (<b>Yours</b>), and when available,</li><li>viewing adhoc prepared estimations (<b>Adhoc…</b> dropdown), or</li><li>viewing AI agent estimation trial results (<b>AI results…</b> dropdown).</li></ul>`),r.push("<h4>Sticky bar</h4><ul>"),r.push("<li>On the far right of the sticky bar, there's a dropdown for switching to a different judgement problem (hidden when there are no others).</li>"),dE(n.aid)!==void 0&&r.push("<li>This judgement problem is part of a development timeline exposition sequence. The ◀ and/or ▶ buttons move backward and forward in the timeline.</li>"),n.has_examples()&&r.push("<li><b>open</b> unfolds all examples, <b>close</b> folds all. <b>peek</b> saves your fold state and temporarily unfolds all examples, and <b>unpeek</b> restores your fold state.</li>"),r.push(RD()),r.push("</ul>"),r.push("<h4>Keyboard shortcuts</h4><p>There are just a few, which you can customize by clicking the <b>keymap</b> button in the sticky bar's <b>settings</b> dropdown. Currently:</p>"),r.push("<ul>");for(const t of st){const i=CD[t.id]??J(t.description);r.push(`<li>${Ci(e[t.id])} : ${i}</li>`)}return r.push("</ul>"),r.join("")}function ND(){const n=Object.values(Sr).filter(i=>!i.hasTruncWindow),e=Object.entries(Sr).filter(([,i])=>i.hasTruncWindow),r=n.map(i=>`<li><code>${J(i.signature)}</code> — ${J(i.note)}</li>`),t=e.map(([i])=>`<code>${J(i)}(…)</code>`);return`<p>Enter your belief distribution over this variable in one of three forms:</p><ul><li><b>Point mass</b>: <code>pointmass(x)</code> — all probability mass at <code>x</code>.</li><li><b>Distribution family</b> (preferred when one fits your belief), e.g. <code>lognormal(-4.2, 1.3)</code>. Available families:<ul>${r.join("")}</ul>Every family is automatically truncated to the variable's allowed range and renormalized, so e.g. <code>normal(mu, sigma)</code> on a probability variable means a normal truncated to [0, 1]. The ${t.join(", ")} variants take two extra trailing arguments <code>lo, hi</code> — an explicit truncation window — for when your belief has its own truncation. Most important for a heavy-tailed family on an unbounded-range variable (e.g. a Student-t on a log-odds variable), where automatic truncation is a no-op.</li><li><b>Piecewise linear density</b> (fully general): space-separated pairs <code>(x1 y1) (x2 y2) …</code>, minimum 2. x values are sorted positions spanning your uncertainty, anywhere in the variable's allowed range; y values are unnormalized density heights in [0, 1].</li></ul>`}function TD(n,e){const r=ct(),t=[];return t.push("<p><b>This help text changes based on Yours/Adhoc/Whose mode.</b></p>"),YS(me(e).source)&&t.push("<p>To see detailed results for an entry, click the <b>pin</b> checkbox.</p>","<p><b>CONFUSING UI NOTE</b>: when Model × Version × Effort is unchecked, the slider does load a different record, but the changes are too far above your viewport to see them without scrolling.</p>","<p>To see AIs' plain text reasoning and notes, click <b>View payload</b>. If you do this with an <b>All AI</b> or <b>(pooled)</b> entry selected, you'll get tabs for the different trials.</p>","<p>To explore compute formula results other than the main conclusion, there's a drop down below next to the <b>formulas</b> / <b>raw responses</b> radio buttons.</p>","<p>Use the <b>stats display</b> dropdown to switch between seeing probabilities as percentages or as odds.</p>"),n.has_cparams()&&De(e)&&t.push("<p><b>fix</b> | <b>free</b> toggle (next to <b>Yours</b>): <b>fix</b> requires setting each parameter to one of its allowed values in the <b>Parameters</b> section, and your estimates apply to that one setting. <b>free</b> opens a code editor in which you write a function giving your estimates for every allowed parameter combination at once.</p>"),De(e)?t.push(`<p>To modify a preset, switch to the <b>Adhoc</b> or <b>AI results</b> view (${Ci(r.switch_whose_mode)} shortcut), select an entry from the dropdown to the right of this help icon, and find the <b>Copy to Yours</b> button.</p><p>From scratch: Suggest starting with <b>point</b> response mode, then try <b>bounds</b>. If you're experienced or courageous, try <b>distribution</b> and start with <code>tri(low, peak, hi)</code> or <code>uniform(low, high)</code> lines. For full syntax of distribution inputs accepted, find the help icon in any of <b>Estimation</b> cards above.</p>`):Y7(me(e).source)&&t.push("<p>To modify this preset for your own estimation, find the <b>Copy to Yours</b> button below.</p><p>For advanced users, in <b>distribution</b> mode, there is a second type of <b>Copy to Yours</b> button inside the <b>Joint-dependence specification</b> section (latent factor copula), when the entry states one.</p>"),t.join("")}function qD(n){const e=J(Pi("mcItersPerClickPerPlot")),r=J(Pi("mcItersInitialPerPlot")),t=n.itersPerTarget.toLocaleString(),i=["<p>The <b>+</b> button above pools another block of Monte&nbsp;Carlo draws into this plot and redraws it. Draws accumulate — nothing already sampled is thrown away — so the plot starts cheap and you click until its shape stops moving.</p>"];return n.targetCount===1?i.push(`<p>Each click adds <b>${t}</b> draws to this plot`+(n.pooledSampleCount===null?".</p>":` (pooled so far: ${n.pooledSampleCount.toLocaleString()}).</p>`)):i.push(`<p>Each click adds <b>${t}</b> draws to <i>each</i> of the ${n.targetCount.toLocaleString()} plotted points/cells. The setting is a budget for the whole plot, divided equally among the targets it draws, so a plot over a wider axis gets fewer draws per point per click than a single density does — same cost per click, spread thinner.</p>`),n.pooledSampleCount===null?i.push("<p>This plot's button stays yellow: it displays a mean per point/cell rather than a distribution, so the green convergence indicator — which reads a distribution's quantiles — does not apply. Means converge as 1/&radic;n; a few clicks go a long way.</p>"):n.converged?i.push(`<p><b>Green</b>: with ${n.convergedMinSamples.toLocaleString()} or more pooled draws, every quantile of the displayed distribution is pinned to within ${n.displayEpsilon} probability mass at ${n.confidencePercent}% confidence (a distribution-free Dvoretzky&ndash;Kiefer&ndash;Wolfowitz bound). Green is not a stop sign: further clicks keep sharpening the curve.</p>`):i.push(`<p><b>Yellow &rarr; green</b>: the button turns green at ${n.convergedMinSamples.toLocaleString()} pooled draws, the point where every quantile of the displayed distribution is pinned to within ${n.displayEpsilon} probability mass at ${n.confidencePercent}% confidence (a distribution-free Dvoretzky&ndash;Kiefer&ndash;Wolfowitz bound).</p>`),i.push(`<p>To change how much a click adds, open <b>settings</b> in the bar at the top of the page and edit <b>${e}</b>. <b>${r}</b> sets what a plot draws before you click at all.</p>`),i.join("")}function FD(n){const e=J(Pi("mcItersPerClickPerPlot")),r=J(Pi("mcItersInitialPerPlot"));return`<p>This plot is drawn from a <b>precomputed</b> curve: the result generator sampled it once, with a far larger draw budget than a browser would spend, and stored the shape. Nothing is being sampled here.</p><p>The <b>&#9654;</b> button above runs <b>${n.initialIters.toLocaleString()}</b> live Monte&nbsp;Carlo draws in your browser from the same estimates, and draws them on the same axis beside the stored curve; both summaries stay on screen so you can compare the numbers. The button then becomes the ordinary <b>+</b> accumulate control, adding <b>${n.itersPerTarget.toLocaleString()}</b> draws per click until the live shape stops moving.</p><p>Expect the live curve to be the rougher of the two at first — it is the same distribution with fewer draws behind it. A difference that survives many clicks is worth a closer look.</p><p>Both draw counts are settings: open <b>settings</b> in the bar at the top of the page and edit <b>${r}</b> and <b>${e}</b>.</p>`}const Bt="mc-accumulate-btn",pE="mc-activate-live-btn",co="mc-accumulate-help",OD="mc-converged",Ri=.05,Lt=.01;function DD(n){if(!Number.isInteger(n)||n<1)throw new Error(`distributionCount must be a positive integer, got ${n}`);return Math.ceil(Math.log(2*n/Ri)/(2*Lt*Lt))}const hE=16;function ai(n,e,r,t,i=1){var f,d;const o=n.parentElement;if(!(o!=null&&o.classList.contains("resizable-canvas-wrapper"))){console.warn("attachMcAccumulateButton: canvas is not wrapped by makeResizable");return}(f=o.querySelector(`.${Bt}`))==null||f.remove(),(d=o.querySelector(`.${co}`))==null||d.remove();const u=t.itersPerTarget,a=DD(i),c=r!==null&&r>=a,s=document.createElement("button");s.className=Bt+(c?` ${OD}`:""),s.dataset.mcPoolToken=e,s.textContent="+",s.title=r===null?`Pool ${u.toLocaleString()} more MC samples into every plotted point/cell.`:`Pool ${u.toLocaleString()} more MC samples into this plot (n=${r.toLocaleString()}). `+(c?`Green: every displayed quantile is within ${Lt} probability mass at ${(1-Ri)*100}% confidence; further clicks keep sharpening.`:`Turns green when every displayed quantile is within ${Lt} probability mass at ${(1-Ri)*100}% confidence.`),o.appendChild(s);const l=at(()=>qD({itersPerTarget:u,targetCount:t.targetCount,pooledSampleCount:r,converged:c,convergedMinSamples:a,displayEpsilon:Lt,confidencePercent:(1-Ri)*100}),hE);l.classList.add(co),o.appendChild(l)}function PD(n,e,r,t){var a,c;const i=n.parentElement;if(!(i!=null&&i.classList.contains("resizable-canvas-wrapper"))){console.warn("attachLiveMcActivationButton: canvas is not wrapped by makeResizable");return}(a=i.querySelector(`.${Bt}`))==null||a.remove(),(c=i.querySelector(`.${co}`))==null||c.remove();const o=document.createElement("button");o.className=`${Bt} ${pE}`,o.dataset.mcLiveActivationToken=e,o.textContent="▶",o.title=`Run ${r.toLocaleString()} live Monte Carlo draws in your browser and overlay them on the precomputed curve. Nothing is sampled until you ask.`,i.appendChild(o);const u=at(()=>FD({initialIters:r,itersPerTarget:t.itersPerTarget}),hE);u.classList.add(co),i.appendChild(u)}const xD=256,zn=new Map,lo=new Map;let HD=1;function BD(n){const e=gr(n),r=zn.get(e);if(r!==void 0)return zn.delete(e),zn.set(e,r),r;const t={token:`mclive-${HD++}`,activated:!1};for(zn.set(e,t),lo.set(t.token,t);zn.size>xD;){const i=zn.keys().next().value;lo.delete(zn.get(i).token),zn.delete(i)}return t}function UD(n){const e=lo.get(n);return e===void 0?!1:(e.activated=!0,!0)}function WD(){zn.clear(),lo.clear()}const jD=1;function vE(n,e){const r=Math.max(1,e),t=i=>Math.max(jD,Math.floor(i/r));return{mcIters:t(n.mcItersInitialPerPlot),mcItersPerClick:t(n.mcItersPerClickPerPlot)}}function Xr(n){return vE(n,1)}function $r(n,e,r,t,i){return'<div class="result-main">'+(i===""?"":`${i} = `)+`mean ≈ <span class="hl">${Ue(n.mean,e,r,t)}</span>, median ≈ <span class="hl">${Ue(n.median,e,r,t)}</span></div><div class="result-detail">90% interval: [${Ue(n.p5,e,r,t)}, ${Ue(n.p95,e,r,t)}]</div>`}function GD(n,e,r){return{valueHtml:`mean <span class="derived-value">${Ue(n.mean,e,r,"monte-carlo")}</span>, median <span class="derived-value">${Ue(n.median,e,r,"monte-carlo")}</span>`,detailHtml:`<span class="derived-detail">· 90% interval [${Ue(n.p5,e,r,"monte-carlo")}, ${Ue(n.p95,e,r,"monte-carlo")}]</span>`}}const D2="Your beliefs specification yields infinite or undefined values. Consider using non-zero numbers.",VD="≅",XD="⫇",mE="The interval computed for this formula from the bounds responses is unbounded on both sides, i.e. carries no information. Point and distribution results are unaffected.";function bE(n,e){return n===-1/0&&e===1/0}function gE(n){return n==="tight"?VD:XD}const fo="from point estimates";function kt(n){return n.some(Number.isNaN)?"undefined":n.some(e=>!Number.isFinite(e))?"infinite":null}function po(){return`<p class="arg-warning">${D2}</p>`}function YD(n,e,r,t){const i=ji(n,"floor"),o=ji(e,"ceil");return`[${Ue(i,r,t)}, ${Ue(o,r,t)}]`}function KD(n,e,r,t){const i=(n+e)/2;return Number.isNaN(i)?"undefined":Ue(i,r,t)}function ho({labelHtml:n,value:e,typeHighlevel:r,statsDisplay:t,labelPrefix:i="",detail:o}){const u=kt([e]);if(u==="undefined")throw new Error(D2);return`<div class="result-main">${J(i)}${n} = <span class="hl">${Ue(e,r,t)}</span></div>`+(o===void 0?"":`<div class="result-detail">${J(o)}</div>`)+(u==="infinite"?po():"")}function P2({labelHtml:n,lo:e,hi:r,tightness:t,typeHighlevel:i,statsDisplay:o,midpointDetailSuffix:u=""}){if(e>r)throw new Error(`Invalid calculated bounds: lo=${e} is greater than hi=${r}`);const a=kt([e,r]);if(a==="undefined")throw new Error(D2);if(bE(e,r))return`<div class="result-detail">${J(mE)}</div>`;const c=ji(e,"floor"),s=ji(r,"ceil"),l=a==="infinite"&&t==="tight";return`<div class="result-main">${n} ${gE(t)} [<span class="hl">${Ue(c,i,o)}</span>, <span class="hl">${Ue(s,i,o)}</span>]</div><div class="result-detail">midpoint: ${KD(e,r,i,o)}${J(u)}</div>`+(l?po():"")}function Ut(n,e){if(typeof n!="number"||Number.isNaN(n))throw new Error(`${e}: expected a number, got ${JSON.stringify(n)}`);return n}function kp(n,e){if(!Array.isArray(n)||n.length!==2)throw new Error(`${e}: expected [lo, hi], got ${JSON.stringify(n)}`);const r=Ut(n[0],`${e} lo`),t=Ut(n[1],`${e} hi`);if(r>t)throw new Error(`${e}: lo=${r} is greater than hi=${t}`);return[r,t]}function _E(n,e){return Ut(n.point[e],`Code result point data for ${JSON.stringify(e)}`)}function yE(n,e){return kp(n.bounds[e],`Code result bounds data for ${JSON.stringify(e)}`)}function EE(n,e,r){var o;const t=(o=n.compform_point_val)==null?void 0:o[e];if(t!==void 0)return Ut(t,`Code result computed point value for ${e}`);if(!r)throw new Error(`Code result has no computed point value or form implementation for ${e}`);const i=r.params.map(u=>_E(n,u));return Ut(r.point(i),`Directly evaluated code result point value for ${e}`)}function $E(n,e,r){var u,a;const t=(u=n.compform_bounds_val)==null?void 0:u[e];if(t!==void 0){const c=(a=n.compform_bounds_tightness)==null?void 0:a[e];return{interval:kp(t,`Code result computed bounds value for ${e}`),tightness:c==="tight"?"tight":"loose"}}if(!r)throw new Error(`Code result has no computed bounds value or form implementation for ${e}`);if(!r.bounds)return null;if(!r.boundsTightness)throw new Error(`form ${e} has a bounds implementation but no boundsTightness — regenerate form_fns`);const i=r.params.map(c=>yE(n,c)),o=r.bounds(i);return{interval:kp([o.lo,o.hi],`Directly evaluated code result bounds value for ${e}`),tightness:r.boundsTightness}}const wE=[{name:"low",abbreviation:"L"},{name:"medium",abbreviation:"M"},{name:"high",abbreviation:"H"}],Pr=[...wE,{name:"xhigh",abbreviation:"XH"},{name:"max",abbreviation:"MAX"}],C8=[{model:"haiku",abbreviation:"h",agentCli:"claudecode",efforts:wE},{model:"luna",abbreviation:"gl",agentCli:"codex",efforts:Pr},{model:"sonnet",abbreviation:"s",agentCli:"claudecode",efforts:Pr},{model:"terra",abbreviation:"gt",agentCli:"codex",efforts:Pr},{model:"opus",abbreviation:"o",agentCli:"claudecode",efforts:Pr},{model:"sol",abbreviation:"gs",agentCli:"codex",efforts:Pr},{model:"fable",abbreviation:"f",agentCli:"claudecode",efforts:Pr}],SE=":";function eu(n){const e=C8.findIndex(r=>r.model===n);if(e<0)throw new Error(`unknown model ${JSON.stringify(n)}. Add it to MODEL_EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return{config:C8[e],order:e}}function JD(n){return eu(n).config.agentCli}function x2(n,e){const{config:r}=eu(n),t=r.efforts.findIndex(i=>i.name===e);if(t<0)throw new Error(`unknown effort ${JSON.stringify(e)} for model ${JSON.stringify(n)}. Add it to MODEL_EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return{config:r.efforts[t],order:t}}function zD(n,e){return n===e?0:n<e?-1:1}function H2(n,e,r){if(e.length===0)throw new Error(`makeModelVersionEffortKey: empty version not supported (model=${n}).`);if(r===null)throw new Error(`makeModelVersionEffortKey: null effort not supported (model=${n}, version=${e}). Null-effort records do not participate in the model/version/effort sweep; pooled aggregates are handled separately.`);return[n,encodeURIComponent(e),r].join(SE)}function lt(n){const e=n.split(SE);if(e.length!==3||e.some(u=>u.length===0))throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(n)}`);const[r,t,i]=e;let o;try{o=decodeURIComponent(t)}catch{throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(n)}`)}if(o.length===0)throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(n)}`);return{model:r,version:o,effort:i}}function QD(n){const{model:e,version:r,effort:t}=lt(n);return`${e} ${r} ${t}`}function ZD(n){const{model:e,version:r,effort:t}=lt(n),{config:i}=eu(e),{config:o}=x2(e,t);return`${i.abbreviation}${r}${o.abbreviation}`}function eP(n){const{model:e,version:r}=lt(n);return`${e} ${r}`}function nP(n){const{model:e,effort:r}=lt(n);return x2(e,r).config.abbreviation}function rP(n){const e=Array.from(n,r=>{const t=lt(r),i=eu(t.model).order,o=x2(t.model,t.effort).order;return{key:r,parsed:t,modelOrder:i,effortOrder:o}});return e.sort((r,t)=>r.modelOrder-t.modelOrder||zD(r.parsed.version,t.parsed.version)||r.effortOrder-t.effortOrder),e.map(({key:r})=>r)}function B2(n,e,r,t={}){const i=e.svar_entries().map(p=>p.bareName);let o=!1,u=!1;for(const p of n){if(p.lloads===null||p.lloads===void 0)continue;o=!0;const h=Lo(p.lloads,i);if(h!==null)throw new Error(h);u||(u=ko(p.lloads))}if(!o)return{hasDependence:!1,specHtml:""};const a=Gt(e);if(a.length!==i.length)throw new Error(`joint-dependence disclosure has ${i.length} eligible variables but ${a.length} display labels`);const c=new Map(i.map((p,h)=>[p,Se(a[h],r)])),s=new Map;n.forEach((p,h)=>{const m=p.lloads??null,v=JSON.stringify(m),b=s.get(v);b?b.trialNumbers.push(h+1):s.set(v,{spec:m,trialNumbers:[h+1]})});const l=n.length>1,f=[...s.values()].map(p=>{const h=l?`<div class="lloads-trial-label">${iP(p.trialNumbers)}</div>`:"";if(p.spec===null)return`<section class="lloads-spec-group">${h}<div class="lloads-independent-trial">No named latents; sampled independently.</div></section>`;const m=tP(h,p.spec,t.offerCopyToYours??!1),v=p.spec.latents.map(b=>{const g=Object.entries(b.loadings).map(([_,y])=>{const E=c.get(_);if(E===void 0)throw new Error(`joint-dependence disclosure has no display label for loaded variable ${_}`);return`<li><span class="lloads-svar-label">${E}</span>: <span class="lloads-loading">${oP(y)}</span></li>`}).join("");return`<article class="lloads-latent"><div class="lloads-latent-name">${J(b.name)}</div><div class="lloads-latent-description">${J(b.description)}</div><ul class="lloads-loadings">${g}</ul></article>`}).join("");return`<section class="lloads-spec-group">${m}${v}</section>`}).join(""),d=u&&!(t.keepFolded??!1);return{hasDependence:u,specHtml:`<details class="lloads-spec-view"${d?" open":""}><summary>Joint-dependence specification</summary><div class="lloads-spec-body">${f}</div></details>`}}function tP(n,e,r){const t=r?`<button class="copy-to-yours-btn lloads-copy-to-yours-btn" type="button" data-lloads-spec="${fe(JSON.stringify(e))}" title="Copy this joint-dependence specification into your editable Yours inputs">Copy to Yours</button>`:"";return n===""&&t===""?"":`<div class="lloads-group-header">${n}${t}</div>`}function iP(n){return`${n.length===1?"Trial":"Trials"} ${n.join(", ")}`}function oP(n){if(Object.is(n,-0)||n===0)return"0";const e=Math.abs(n).toPrecision(6).replace(/\.?0+$/,"");return n>0?`+${e}`:`−${e}`}function AE(n){switch(n){case"series":return{independent:{color:LT,bandFill:kT},joint:{color:sy,bandFill:cy}};case"stored":return{independent:{color:Ji,bandFill:null},joint:{color:Ji,bandFill:ly}};case"live":return{independent:{color:zi,bandFill:null},joint:{color:zi,bandFill:fy}}}}const LE="Independent",kE="Stated joint";function IE(n){const e=(r,t)=>{switch(t){case"series":return r;case"stored":return`${r} (precomputed)`;case"live":return`${r} (live MC)`}};return n.flatMap(r=>{const t=AE(r);return[{label:e(LE,r),color:t.independent.color,dashed:!0},{label:e(kE,r),color:t.joint.color,dashed:!1}]})}function vo(n){const{comparison:e,typeHighlevel:r,statsDisplay:t,targetLabelHtml:i}=n,o=n.canvasId===void 0?"":$y(n.canvasId,n.legend??IE(["series"]));return`<div class="result-label">Joint-dependence comparison (${n.provenanceDetail})</div><div class="dependence-comparison mc-row"><div class="dependence-comparison-stats mc-text"><div class="dependence-series-label dependence-series-independent">${LE}</div>`+$r(e.independent,r,t,"monte-carlo",i)+`<div class="dependence-series-label dependence-series-joint">${kE}</div>`+$r(e.joint,r,t,"monte-carlo",i)+`</div>${o}</div>`}function U2(n){const e=n.box.querySelector(`#${n.canvasId}`);if(e===null)return!1;const r=[];for(const o of n.layers){const u=AE(o.palette),a=R8(o.comparison.independent,u.independent,!0),c=R8(o.comparison.joint,u.joint,!1);if(a===null||c===null)return!1;r.push(a,c)}if(r.length===0)return!1;const t=Ar(n.typeHighlevel),i=()=>Qi(e,r,t);i(),er(e,i,{stateHost:n.box,stateKey:n.resizeStateKey}),gy(e,r,n.typeHighlevel);for(const{comparison:o}of n.layers){const{independent:u,joint:a}=o;if(u.mcPoolToken!==a.mcPoolToken)throw new Error("CRN-paired density results do not share one MC pool token");a.mcPoolToken!==null&&ai(e,a.mcPoolToken,a.samples.length,{itersPerTarget:n.mcItersPerClick,targetCount:1},r.length)}return!0}function R8(n,e,r){const t=n.samples??n.densityCurve;return t===null?null:{source:t,p5:n.p5,p95:n.p95,color:e.color,dashed:r,bandFill:e.bandFill}}const uP=5,aP="rgb(59, 130, 246)",sP="Dots show each trial's own precomputed mean.",Z1="code-density",CE="code-line",RE="code-heatmap";function cP(n){return n.startsWith("form:")?n.slice(5):n}function ME(n,e,r){return n.form.filter(t=>b7(t,e)).map(t=>{const i=(r==null?void 0:r[t.id])??null;return{kind:"formula",id:t.id,bareId:cP(t.id),typeHighlevel:(i==null?void 0:i.typeHighlevel)??t.type_highlevel,isConclusion:t.id===n.config.conclusion_form,formEntry:i}})}function NE(n){return n.svar_entries().map(({bareName:e,decl:r})=>({kind:"raw_response",bareName:e,typeHighlevel:r.type_highlevel,isConclusion:!1}))}function lP(n,e,r){const t=ME(n,e.ui.inputMode,r),i=NE(n);if(e.ui.codePlotTargetKind==="raw_response"&&i.length>0)return i.find(a=>a.bareName===e.ui.codePlotRawResponseName)??i[0];if(t.length===0)return i[0]??null;const u=e.ui.codePlotFormulaId||n.config.conclusion_form;return t.find(a=>a.id===u)??t.find(a=>a.id===n.config.conclusion_form)??t[0]}function fP(n){var e,r;return n.kind==="raw_response"?{key:`raw_response:${n.bareName}`,paramKeys:[n.bareName],combine:([t])=>t}:{key:n.id,paramKeys:((e=n.formEntry)==null?void 0:e.params)??null,combine:((r=n.formEntry)==null?void 0:r.point)??null}}function TE(n,e){if(e.paramKeys===null||e.combine===null){const r=n.kind==="formula"?n.id:n.bareName;throw new Error(`Distribution view for ${r} requires its generated form implementation`)}return{paramKeys:e.paramKeys,combine:e.combine}}function W2(n,e){return e.kind==="raw_response"?_E(n,e.bareName):EE(n,e.id,e.formEntry)}function dP(n,e){return e.kind==="raw_response"?{interval:yE(n,e.bareName),tightness:"tight"}:$E(n,e.id,e.formEntry)}function pP(n){if(n.length===0)return null;const e=[...n].sort((i,o)=>i-o),r=i=>{const o=Math.min(e.length-1,Math.max(0,Math.round(i*(e.length-1))));return e[o]},t=n.reduce((i,o)=>i+o,0)/n.length;return{count:n.length,mean:t,median:r(.5),p5:r(.05),p95:r(.95)}}function nu(n,e){return pP(n.trials.map(r=>W2(r,e)))}function un(n,e){for(const r of n.cparam_combos){let t=!0;for(const i of n.cparam_names)if(r.cparams[i]!==e[i]){t=!1;break}if(t)return r}return null}function j2(n,e,r){const t=new Set;for(const i of n.cparam_combos){const o=i.cparams[e];o!==void 0&&t.add(o)}return!r||typeof r=="string"?Array.from(t).sort((i,o)=>Number(i)-Number(o)):r.filter(i=>typeof i!="boolean"&&t.has(i))}function qE(n,e){let r=0;for(const t of n)e[t]===!1&&r++;return r}function hP(n,e){return n.filter(r=>e[r]===!1)}function FE(n){return n.trials.some(e=>ko(e.lloads))}function OE(n,e){var o;if(e.kind!=="formula")return;const r=e.isConclusion?n.precomputed:(o=n.precomputed_aux_forms)==null?void 0:o[e.id];if(r===void 0)return;const t=r[In],i=r[Tt];if(!FE(n))return t;if(!(t===void 0&&i===void 0)){if(t===void 0||i===void 0)throw new Error("A code-result combo with stated joint dependence must carry both its independence and joint precomputes, or neither for live evaluation");return i}}function vP(n,e){if(e.kind!=="formula"||!e.isConclusion)return null;const r=n.precomputed[In],t=n.precomputed[Tt];if(r===void 0&&t===void 0)return null;if(r===void 0||t===void 0)throw new Error("A code-result combo with stated joint dependence must carry both its independence and joint precomputes, or neither for live comparison");return{independent:r,joint:t}}function mP(n,e){if(e.kind!=="formula"||!e.isConclusion)return[];const r=FE(n)?Tt:In,t=[];for(const i of n.trials){const o=i.conclusion_mc_mean;if(o===void 0)continue;const u=o[r]??o[In];u!==void 0&&t.push(u)}return t}function ru(n,e,r){var o;if(e.kind==="formula"&&((o=e.formEntry)==null?void 0:o.sampleStage)!==void 0)throw new Error(`Distribution view for ${e.id} is not supported for formulas with E[·] barriers (v1)`);const{paramKeys:t,combine:i}=TE(e,r);for(const u of n.trials){const a=t.filter(c=>!Z9(u.sample[c]));if(a.length>0)throw new Error(`Code distribution MC for ${r.key}: a trial lacks sample data for parameter(s) ${JSON.stringify(a)}`)}return{key:r.key,params:t,typeHighlevel:e.typeHighlevel,point:i,bounds:null,boundsTightness:null}}function M8(n,e,r,t,i){const o=ru(n,e,r);return xn(o,Zn(n.trials,"sample",t),{onIncompleteTrial:"error",mcIters:i.mcIters,mcItersPerClick:i.mcItersPerClick})}function bP(n,e,r,t,i){const o=ru(n,e,r);return cT(o,Zn(n.trials,"sample",t),{onIncompleteTrial:"error",mcIters:i.mcIters,mcItersPerClick:i.mcItersPerClick})}function gP(n,e,r,t,i,o){const u=OE(n,e);if(u)return u;const a=bP(n,e,r,t,i);return a.mcPoolToken!==null&&(o==null||o.add(a.mcPoolToken)),a}function _P(n,e,r,t){let i=r?t:1;for(const o of n)i*=(e.get(o)??[]).length;return i}function yP(n){if(n===void 0||n==="probability")return[0,1]}function EP(n){return n==="probability"?[0,1]:void 0}function ft(n,e,r,t){const i=e.ui.cparamValues[n];if(i!==void 0&&t.includes(i))return i;if((r==null?void 0:r.default_value)!==void 0){const o=r.default_value;if(t.includes(o))return o}return t[0]}function $P(n,e,r,t){const i=V2(n,e,t.ui.modelEffortSweepScope);if(DE(i).length>=2&&!t.ui.modelEffortPinned||qE(n.cparam_names,t.ui.cparamPinned)>0)return null;const a={};for(const c of n.cparam_names){const s=r.find_cparam(c),l=j2(n,c,s==null?void 0:s.allowed_values);a[c]=ft(c,t,s,l)}return un(n,a)}const wP="model × version × effort",SP="effort";function tu(n){return n==="effort"?SP:wP}function dt(n,e){return e==="effort"?nP(n):ZD(n)}function G2(n,e){return n.aggregate==="model_size__version"?{model:n.model,version:n.version,contentHash:n.content_hash}:e!==null&&n.model===e.model&&n.version===e.version&&n.content_hash===e.contentHash?e:null}function V2(n,e,r){const t=e.filter(o=>o.effort!==null&&o.content_hash===n.content_hash),i=G2(n,r);return i===null?t:t.filter(o=>o.model===i.model&&o.version===i.version)}function DE(n){const e=new Set;for(const r of n)r.effort!==null&&e.add(H2(r.model,r.version,r.effort));return rP(e)}function si(n,e){for(const r of n)if(r.effort!==null&&H2(r.model,r.version,r.effort)===e)return r;return null}function AP(n){if(n.length===0)return;const e=n[0].cparam_names;for(let r=1;r<n.length;r++){const t=n[r].cparam_names;if(t.length!==e.length||!t.every((o,u)=>o===e[u]))throw new Error(`validateRecsCparamCompat: incompatible cparam_names: ${JSON.stringify(e)} vs ${JSON.stringify(t)}. Cannot sweep across model/version/effort with mismatched cparam shapes.`)}}function LP(n,e,r,t,i,o,u,a,c){const s=r.map(String);if(i==="average"){const d=[],p=[];for(let h=0;h<r.length;h++){const m={...t,[e]:r[h]},v=un(n,m);if(!v)continue;const b=a?a(v):v.precomputed[In];if(b){d.push({x:h,y:b.mean});for(const g of(c==null?void 0:c(v))??[])p.push({x:h,y:g})}}return{series:[{points:d,label:"avg"}],xLabels:s,scatterPoints:p}}if(!o||!u)throw new Error("extractSweepLineSeries separate mode requires combine and paramKeys");const l=n.count,f=[];for(let d=0;d<l;d++){const p=[];for(let h=0;h<r.length;h++){const m={...t,[e]:r[h]},v=un(n,m);if(!v||!v.trials[d])continue;const b=v.trials[d],g=o(u.map(_=>b.point[_]));p.push({x:h,y:g})}f.push({points:p,label:`trial ${d+1}`})}return{series:f,xLabels:s,scatterPoints:[]}}function kP(n,e,r,t,i,o,u){const a=r.map(String),c=i.map(String),s=[];for(let l=0;l<i.length;l++){const f=[];for(let d=0;d<r.length;d++){const p={...o,[e]:r[d],[t]:i[l]},h=un(n,p);if(!h){f.push(null);continue}const m=u?u(h):h.precomputed[In];f.push((m==null?void 0:m.mean)??null)}s.push(f)}return{cells:s,xLabels:a,yLabels:c,xAxisLabel:e,yAxisLabel:t}}function IP(n,e,r,t,i,o){const u=r.map(String);if(i==="average"){const c=[];for(let s=0;s<r.length;s++){const l={...t,[e]:r[s]},f=un(n,l);if(!f)continue;const d=nu(f,o);d&&c.push({x:s,y:d.mean})}return{series:[{points:c,label:"avg"}],xLabels:u,scatterPoints:[]}}const a=[];for(let c=0;c<n.count;c++){const s=[];for(let l=0;l<r.length;l++){const f={...t,[e]:r[l]},d=un(n,f),p=d==null?void 0:d.trials[c];if(!p)continue;const h=W2(p,o);s.push({x:l,y:h})}a.push({points:s,label:`trial ${c+1}`})}return{series:a,xLabels:u,scatterPoints:[]}}function CP(n,e,r,t,i,o,u){const a=r.map(String),c=i.map(String),s=[];for(let l=0;l<i.length;l++){const f=[];for(let d=0;d<r.length;d++){const p={...o,[e]:r[d],[t]:i[l]},h=un(n,p),m=h?nu(h,u):null;f.push((m==null?void 0:m.mean)??null)}s.push(f)}return{cells:s,xLabels:a,yLabels:c,xAxisLabel:e,yAxisLabel:t}}function PE(n,e){const r=new Map;for(const t of e){const i=eP(n[t.x]),o=r.get(i);o?o.push(t):r.set(i,[t])}return Array.from(r,([t,i])=>({points:i,label:t,...iq}))}function RP(n,e,r,t="model_version_effort",i,o){const u=e.map(s=>dt(s,t)),a=[],c=[];for(let s=0;s<e.length;s++){const l=si(n,e[s]);if(!l)continue;const f=un(l,r);if(!f)continue;const d=i?i(f):f.precomputed[In];if(d){a.push({x:s,y:d.mean});for(const p of(o==null?void 0:o(f))??[])c.push({x:s,y:p})}}return{series:PE(e,a),xLabels:u,scatterPoints:c}}function MP(n,e,r,t,i,o="model_version_effort",u){const a=t.map(String),c=e.map(l=>dt(l,o)),s=[];for(let l=0;l<e.length;l++){const f=[],d=si(n,e[l]);for(let p=0;p<t.length;p++){if(!d){f.push(null);continue}const h={...i,[r]:t[p]},m=un(d,h);if(!m){f.push(null);continue}const v=u?u(m):m.precomputed[In];f.push((v==null?void 0:v.mean)??null)}s.push(f)}return{cells:s,xLabels:a,yLabels:c,xAxisLabel:r,yAxisLabel:tu(o)}}function NP(n,e,r,t,i="model_version_effort"){const o=e.map(a=>dt(a,i)),u=[];for(let a=0;a<e.length;a++){const c=si(n,e[a]);if(!c)continue;const s=un(c,r);if(!s)continue;const l=nu(s,t);l&&u.push({x:a,y:l.mean})}return{series:PE(e,u),xLabels:o,scatterPoints:[]}}function TP(n,e,r,t,i,o,u="model_version_effort"){const a=t.map(String),c=e.map(l=>dt(l,u)),s=[];for(let l=0;l<e.length;l++){const f=[],d=si(n,e[l]);for(let p=0;p<t.length;p++){if(!d){f.push(null);continue}const h={...i,[r]:t[p]},m=un(d,h),v=m?nu(m,o):null;f.push((v==null?void 0:v.mean)??null)}s.push(f)}return{cells:s,xLabels:a,yLabels:c,xAxisLabel:r,yAxisLabel:tu(u)}}function qP(n,e,r,t){var l;const i=ME(n,e.ui.inputMode,t),o=NE(n);if(i.length===0&&o.length===0)return"";const u=(r==null?void 0:r.kind)??"formula",a=(r==null?void 0:r.kind)==="formula"?r.id:e.ui.codePlotFormulaId||n.config.conclusion_form,c=(r==null?void 0:r.kind)==="raw_response"?r.bareName:e.ui.codePlotRawResponseName||(((l=o[0])==null?void 0:l.bareName)??"");let s='<div class="code-plot-target-controls">';if(s+='<div class="code-plot-target-kind">',s+=`<label><input type="radio" name="code-plot-target-kind" class="code-plot-target-kind-radio" value="formula"${u==="formula"?" checked":""}${i.length===0?" disabled":""}> formulas</label>`,s+=`<label><input type="radio" name="code-plot-target-kind" class="code-plot-target-kind-radio" value="raw_response"${u==="raw_response"?" checked":""}${o.length===0?" disabled":""}> raw responses</label>`,s+="</div>",u==="formula")if(i.length>1){s+='<select class="code-plot-formula-select" aria-label="Plot formula">';for(const f of i)s+=`<option value="${fe(f.id)}"${f.id===a?" selected":""}>${J(f.bareId)}</option>`;s+="</select>"}else i.length===1&&(s+=`<span class="code-plot-target-single">${J(i[0].bareId)}</span>`);else if(o.length>1){s+='<select class="code-plot-raw-response-select" aria-label="Plot raw response">';for(const f of o)s+=`<option value="${fe(f.bareName)}"${f.bareName===c?" selected":""}>${J(f.bareName)}</option>`;s+="</select>"}else o.length===1&&(s+=`<span class="code-plot-target-single">${J(o[0].bareName)}</span>`);return s+="</div>",s}function xE(n,e,r,t,i,o,u){if(!i||!o)return"";const a={};for(const c of n.cparam_names){const s=t.find_cparam(c),l=r.get(c)??[];if(l.length===0)return"";const f=ft(c,e,s,l),d=Number(f);if(!Number.isFinite(d))return"";a[c]=d}return i(a)?"":`<p class="arg-warning">${u(o)}</p>`}function HE(n,e,r,t){const i=r===null?[null,...e]:e,o=r===null?0:i.indexOf(r),u=r===null?n.label:t==="effort"?lt(r).effort:QD(r);return{sliderKeys:i,mveIdx:o,currentLabel:u}}function FP(n,e,r,t,i,o,u,a,c,s,l,f,d){const p=xE(e,t,i,r,l,f,d);let h=qP(r,t,c,s);if(h+=p+'<div class="cparam-controls">',o.length>=2){const{sliderKeys:m,mveIdx:v,currentLabel:b}=HE(e,o,u,a),g=t.ui.modelEffortPinned;h+='<div class="cparam-row model-version-effort-row">',h+=`<label class="cparam-label">${a==="effort"?"Effort":"Model × Version × Effort"}</label>`,h+='<input type="range" class="model-version-effort-slider" ',h+=`min="0" max="${m.length-1}" step="1" `,h+=`value="${v>=0?v:0}" `,h+=`data-keys='${J(JSON.stringify(m))}'>`,h+=`<span class="cparam-value-label">${J(b)}</span>`,h+='<label class="cparam-pin-label"><input type="checkbox" ',h+='class="model-version-effort-pin-checkbox"',h+=`${g?" checked":""}> pin</label>`,h+="</div>"}for(const m of e.cparam_names){const v=r.find_cparam(m),b=i.get(m)??[];if(b.length===0)continue;const g=ft(m,t,v,b),_=b.indexOf(g),y=t.ui.cparamPinned[m]!==!1,E=(v==null?void 0:v.longname)??m;h+='<div class="cparam-row">',h+=`<label class="cparam-label">${J(E)}</label>`,h+=`<input type="range" class="cparam-slider" data-cparam="${m}" `,h+=`min="0" max="${b.length-1}" step="1" value="${_>=0?_:0}" `,h+=`data-values='${JSON.stringify(b)}'>`,h+=`<span class="cparam-value-label">${g}</span>`,h+='<label class="cparam-pin-label"><input type="checkbox" class="cparam-pin-checkbox" ',h+=`data-cparam="${m}"${y?" checked":""}> pin</label>`,h+="</div>"}h+="</div>",n.innerHTML=h}function wi(n){return console.warn(`code viewer controls sync: ${n}; falling back to a full controls rebuild`),!1}function OP(n,e,r,t,i,o,u,a,c,s,l){const f=n.querySelector(".cparam-controls");if(!f)return wi("no existing .cparam-controls block");const d=xE(e,t,i,r,c,s,l),p=n.querySelector(":scope > .arg-warning");d===""?p==null||p.remove():p?p.outerHTML=d:f.insertAdjacentHTML("beforebegin",d);const h=f.querySelector(".model-version-effort-row");if(o.length>=2!==(h!==null))return wi("model/version/effort row does not match the current sweep structure");if(h){const{mveIdx:v,currentLabel:b}=HE(e,o,u,a),g=h.querySelector(".model-version-effort-slider"),_=h.querySelector(".cparam-value-label"),y=h.querySelector(".model-version-effort-pin-checkbox");if(!g||!_||!y)return wi("model/version/effort row is missing expected controls");g.value=String(v>=0?v:0),_.textContent=b,y.checked=t.ui.modelEffortPinned}for(const v of e.cparam_names){const b=i.get(v)??[];if(b.length===0)continue;const g=r.find_cparam(v),_=ft(v,t,g,b),y=b.indexOf(_),E=f.querySelector(`.cparam-slider[data-cparam="${v}"]`),I=E==null?void 0:E.closest(".cparam-row"),L=I==null?void 0:I.querySelector(".cparam-value-label"),R=I==null?void 0:I.querySelector(".cparam-pin-checkbox");if(!E||!L||!R)return wi(`cparam row for ${v} is missing expected controls`);E.value=String(y>=0?y:0),L.textContent=String(_),R.checked=t.ui.cparamPinned[v]!==!1}return!0}function DP(n){return`<div class="sweep-mode-toggle"><button class="sweep-mode-btn${n==="average"?" active":""}" data-sweep-mode="average">Average</button><button class="sweep-mode-btn${n==="separate"?" active":""}" data-sweep-mode="separate">Separate</button></div>`}const X2='<div class="code-info">No data for this parameter combination.</div>';function Y2(n,e,r){if(n.kind==="formula"&&n.isConclusion)return ti(e,r);let t,i;if(n.kind==="raw_response")t=`svar:${n.bareName}`,i=n.bareName;else{const u=e.form.find(a=>a.id===n.id);if(!u)throw new Error(`Code plot formula ${n.id} is not in the template`);t=g7(n.id,u.sexpr),i=n.bareId}const o=_7(t);return Se(e.get_display_expr(o)??i,r)}function PP(n,e,r,t,i,o,u){const a=un(e,r);if(!a){n.innerHTML=X2;return}if(!t){n.innerHTML='<div class="code-info">No point plot target is available.</div>';return}if(a.trials.length===0)throw new Error("Code point result has no trials for the selected parameter combination");const c=a.trials.map(d=>W2(d,t)),s=c.reduce((d,p)=>d+p,0)/c.length,l=t.typeHighlevel,f=c.length===1?fo:`per trial: ${c.map(d=>Ue(d,l,u.ui.probAsOdds)).join(", ")}`;n.innerHTML=ho({labelHtml:Y2(t,i,o),value:s,typeHighlevel:l,statsDisplay:u.ui.probAsOdds,labelPrefix:c.length===1?"":"mean ",detail:f})}function xP(n,e,r,t,i,o,u){const a=un(e,r);if(!a){n.innerHTML=X2;return}if(!t){n.innerHTML='<div class="code-info">No bounds plot target is available.</div>';return}if(!Yp(e)||a.trials.length!==1)throw new Error(`Code bounds display requires one trial; record count=${e.count}, selected combo trials=${a.trials.length}`);const c=dP(a.trials[0],t);if(!c){n.innerHTML=`<div class="code-info">${J(ri)}</div>`;return}const[s,l]=c.interval;n.innerHTML=P2({labelHtml:Y2(t,i,o),lo:s,hi:l,tightness:c.tightness,typeHighlevel:t.typeHighlevel,statsDisplay:u.ui.probAsOdds})}function N8(n,e,r,t,i,o,u,a,c,s,l){BE(n,e,r,t,i,o,u,a,c,s,l,!1)}function T8(n,e,r,t,i,o,u,a,c,s,l){BE(n,e,r,t,i,o,u,a,c,s,l,!0)}function BE(n,e,r,t,i,o,u,a,c,s,l,f){var ne,ie;Kp(r);const d=lP(i,u,c),p=new Map;for(const H of r.cparam_names){const j=i.find_cparam(H),G=j2(r,H,j==null?void 0:j.allowed_values);p.set(H,G)}const h=G2(r,u.ui.modelEffortSweepScope),m=V2(r,t,u.ui.modelEffortSweepScope),v=h===null?"model_version_effort":"effort",b=DE(m),g=b.length>=2,_=r.effort!==null?H2(r.model,r.version,r.effort):null,y=g&&!u.ui.modelEffortPinned;if(y&&AP(m),!(f&&OP(n,r,i,u,p,b,_,v,s,l,H=>Se(H,o)))){const H=document.getElementById("calculator-whose-toggle");if(H&&((ne=H.querySelector(".payload-view-btn"))==null||ne.remove(),oD(r))){const j=document.createElement("button");j.className="payload-view-btn",j.textContent="View payload",j.addEventListener("click",()=>uD(r,i.get_svar_bare_names())),H.appendChild(j)}FP(n,r,i,u,p,b,_,v,d,c,s,l,j=>Se(j,o))}const I=qE(r.cparam_names,u.ui.cparamPinned),L=hP(r.cparam_names,u.ui.cparamPinned),R=I+(y?1:0),A=u.ui.inputMode,S=u.ui.codeSweepMode,$={};for(const H of r.cparam_names)if(u.ui.cparamPinned[H]!==!1){const j=i.find_cparam(H),G=p.get(H)??[];$[H]=ft(H,u,j,G)}const w=(d==null?void 0:d.kind)==="formula"&&d.isConclusion,k=(d==null?void 0:d.typeHighlevel)??i.config.conclusion_type_highlevel,C=w?yP(i.config.conclusion_type_highlevel):EP(k),F=k==="probability"?uP:void 0;if(A==="bounds"){R>0?e.innerHTML='<div class="code-info">Pin every axis to display code-response bounds.</div>':xP(e,r,$,d,i,o,u);return}let T=null;if(A==="sample"){if(!d){e.innerHTML='<div class="code-info">No distribution plot target is available.</div>';return}if(d.kind==="formula"&&((ie=d.formEntry)==null?void 0:ie.sampleStage)!==void 0){e.innerHTML='<div class="code-info">Distribution view is not yet supported for formulas containing E[·] aggregation.</div>';return}T=fP(d)}const B=T===null?null:v7(i.svar_entries()),O=_P(L,p,y,b.length),x=vE(a,O),q=new Set,Q=T!==null&&d!==null&&B!==null?H=>gP(H,d,T,B,x,q):void 0,W=T!==null&&d!==null?H=>mP(H,d):void 0,Y=A;if(R===0)if(A==="point")PP(e,r,$,d,i,o,u);else{if(d===null||T===null||B===null)throw new Error("Sample-mode code density routing has no resolved sample target");UP(e,r,u,a,$,d,T,B,i,o,Y2(d,i,o))}else if(R===1)y?GP(e,m,b,$,F,d,Y,v,Q,W):WP(e,r,L[0],p,$,S,T,F,d,Y,Q,W);else if(R===2)if(y){const H=L[0],j=p.get(H)??[];VP(e,m,b,H,j,$,C,d,Y,v,Q)}else jP(e,r,L,p,$,C,d,Y,Q);else{const H=r.cparam_names.length-(y?1:2);e.innerHTML=`<div class="code-info"><p>Pin at least ${H} parameter${H===1?"":"s"} to visualize results.</p><p>Currently ${I} cparam${I===1?"":"s"} unpinned${y?" + model/version/effort axis":""}.</p></div>`}if(q.size>0){const H=e.querySelector("#code-line-canvas, #code-heatmap-canvas");H&&ai(H,ry([...q]),null,{itersPerTarget:x.mcItersPerClick,targetCount:O})}}const HP="Precomputed",BP="Live MC";function q8(n,e,r,t,i){if(r.combine===null||r.paramKeys===null)return null;const o=sT(ru(n,e,r),Zn(n.trials,"sample",t),{onIncompleteTrial:"error",mcIters:i.mcIters,mcItersPerClick:i.mcItersPerClick});return BD([...o,"target",r.key])}function F8(n,e,r,t,i){if(e!==null&&e.mcPoolToken!==null){ai(n,e.mcPoolToken,e.sampleCount,{itersPerTarget:t.mcItersPerClick,targetCount:1},i);return}r!==null&&PD(n,r.token,t.mcIters,{itersPerTarget:t.mcItersPerClick})}function UP(n,e,r,t,i,o,u,a,c,s,l){const f=un(e,i);if(!f){n.innerHTML=X2;return}const d=o.typeHighlevel,p=[],h=B2(f.trials,c,s,{offerCopyToYours:!De(r.ui.whose)}),m=Xr(t),v=r.ui.probAsOdds,b=`${f.trials.length} agent trial${f.trials.length===1?"":"s"}`;if(h.hasDependence){const L=vP(f,o),R=L===null?null:iy(L),A=R!==null&&R.independent.densityCurve!==null&&R.joint.densityCurve!==null?R:null,S=A===null?null:q8(f,o,u,a,m),w=A===null||((S==null?void 0:S.activated)??!1)?v2(ru(f,o,u),Zn(f.trials,"sample",a),{onIncompleteTrial:"error",mcIters:m.mcIters,mcItersPerClick:m.mcItersPerClick}):null,k=[];A!==null&&k.push({comparison:A,palette:"stored"}),w!==null&&k.push({comparison:w,palette:k.length===0?"series":"live"});const C=IE(k.map(F=>F.palette));if(R!==null&&p.push(vo({comparison:R,typeHighlevel:d,statsDisplay:v,targetLabelHtml:l,canvasId:A===null?void 0:"code-density-canvas",legend:C,provenanceDetail:`precomputed, ${b}`})),w!==null&&p.push(vo({comparison:w,typeHighlevel:d,statsDisplay:v,targetLabelHtml:l,canvasId:A===null?"code-density-canvas":void 0,legend:C,provenanceDetail:`live Monte Carlo, n=${w.joint.samples.length.toLocaleString()}`})),p.push(h.specHtml),n.innerHTML=p.join(""),U2({box:n,canvasId:"code-density-canvas",layers:k,typeHighlevel:d,resizeStateKey:Z1,mcItersPerClick:m.mcItersPerClick}),w===null){const F=n.querySelector("#code-density-canvas");F&&F8(F,null,S,m,k.length*2)}return}const g=OE(f,o),_=u.combine!==null&&u.paramKeys!==null;!_&&g===void 0&&TE(o,u);const y=`<div class="result-label">Precomputed (independent, ${b})</div>`;if(g!==void 0&&g.density_curve!==void 0){const L=g.density_curve,R=_?q8(f,o,u,a,m):null,A=R!=null&&R.activated?M8(f,o,u,a,m):null,S=A===null?[]:[{label:HP,color:Ji,dashed:!1},{label:BP,color:zi,dashed:!1}];p.push(y+'<div class="mc-row"><div class="mc-text">'+$r(g,d,v,"monte-carlo",l)+"</div>"+(S.length===0?'<canvas id="code-density-canvas" width="400" height="200"></canvas>':$y("code-density-canvas",S))+"</div>"),A!==null&&p.push(`<div class="result-label">Live MC (independent, n=${A.samples.length.toLocaleString()})</div><div class="mc-row"><div class="mc-text">`+$r(A,d,v,"monte-carlo",l)+"</div></div>"),n.innerHTML=p.join("");const $=n.querySelector("#code-density-canvas");if($){const w=[{source:L,p5:g.p5,p95:g.p95,color:Ji,dashed:!1,bandFill:ly}];A!==null&&w.push({source:A.samples,p5:A.p5,p95:A.p95,color:zi,dashed:!1,bandFill:fy});const k=Ar(d),C=()=>Qi($,w,k);C(),er($,C,{stateHost:n,stateKey:Z1}),gy($,w,d),F8($,A===null?null:{mcPoolToken:A.mcPoolToken,sampleCount:A.samples.length},R,m,w.length)}return}if(g!==void 0&&p.push(y+$r(g,d,v,"monte-carlo",l)),!_){n.innerHTML=p.join("");return}const E=M8(f,o,u,a,m);p.push(`<div class="result-label">Live MC (independent, n=${E.samples.length.toLocaleString()})</div><div class="mc-row"><div class="mc-text">`+$r(E,d,v,"monte-carlo",l)+'</div><canvas id="code-density-canvas" width="400" height="200"></canvas></div>'),n.innerHTML=p.join("");const I=n.querySelector("#code-density-canvas");if(I){const L=Ar(d);jr(I,E.samples,E.p5,E.p95,L),er(I,()=>jr(I,E.samples,E.p5,E.p95,L),{stateHost:n,stateKey:Z1}),by(I,E.samples,E.p5,E.p95,d),E.mcPoolToken!==null&&ai(I,E.mcPoolToken,E.samples.length,{itersPerTarget:m.mcItersPerClick,targetCount:1})}}function UE(n){return n.length===0?{}:{scatterOverlay:{points:n,color:aP}}}function WE(n){return n.length===0?"":`<div class="code-info" style="margin-top: 6px;">${sP}</div>`}function WP(n,e,r,t,i,o,u,a,c,s,l,f){const d=t.get(r)??[],p=s==="sample",h=e.count>1&&!(p&&(u==null?void 0:u.combine)===null),m=h?o:"average",{series:v,xLabels:b,scatterPoints:g}=p?LP(e,r,d,i,m,(u==null?void 0:u.combine)??void 0,(u==null?void 0:u.paramKeys)??void 0,l,f):c?IP(e,r,d,i,m,c):{series:[],xLabels:d.map(String),scatterPoints:[]};let _='<div class="code-plot-container">';_+='<canvas id="code-line-canvas" class="code-plot-canvas" width="800" height="500"></canvas>',h&&(_+=DP(m),m==="separate"?_+=`<div class="code-info" style="margin-top: 6px;">${p?"Separate mode uses point estimates only (no distributional MC).":"Separate mode shows per-trial point values."}</div>`:p||(_+='<div class="code-info" style="margin-top: 6px;">Average mode uses point values only.</div>')),_+=WE(g),_+="</div>",n.innerHTML=_;const y=n.querySelector("#code-line-canvas");if(y){const E={xLabels:b,xAxisLabel:r,...a===void 0?{}:{yRangePaddingPercent:a},...UE(g)};ro(y,v,E),er(y,()=>ro(y,v,E),{stateHost:n,stateKey:CE})}}function jP(n,e,r,t,i,o,u,a,c){const s=r[0],l=r[1],f=t.get(s)??[],d=t.get(l)??[],p=a==="sample",h=p?kP(e,s,f,l,d,i,c):u?CP(e,s,f,l,d,i,u):{cells:[],xLabels:f.map(String),yLabels:d.map(String),xAxisLabel:s,yAxisLabel:l};o&&(h.valueRange=o);const m=Math.max(80,Math.min(120,Math.floor(1e3/f.length))),v=Math.max(60,Math.min(90,Math.floor(800/d.length))),b=60+f.length*m+60,g=10+d.length*v+35;let _='<div class="code-plot-container">';_+=`<canvas id="code-heatmap-canvas" class="code-plot-canvas" width="${b}" height="${g}"></canvas>`,p||(_+='<div class="code-info" style="margin-top: 6px;">Cells show average point values.</div>'),_+="</div>",n.innerHTML=_;const y=n.querySelector("#code-heatmap-canvas");y&&(to(y,h),er(y,()=>to(y,h),{stateHost:n,stateKey:RE}))}function GP(n,e,r,t,i,o,u,a,c,s){const l=u==="sample",{series:f,xLabels:d,scatterPoints:p}=l?RP(e,r,t,a,c,s):o?NP(e,r,t,o,a):{series:[],xLabels:r.map(v=>dt(v,a)),scatterPoints:[]};let h='<div class="code-plot-container">';h+='<canvas id="code-line-canvas" class="code-plot-canvas" width="800" height="500"></canvas>',l||(h+='<div class="code-info" style="margin-top: 6px;">Average mode uses point values only.</div>'),h+=WE(p),h+="</div>",n.innerHTML=h;const m=n.querySelector("#code-line-canvas");if(m){const v={xLabels:d,xAxisLabel:tu(a),...i===void 0?{}:{yRangePaddingPercent:i},...UE(p)};ro(m,f,v),er(m,()=>ro(m,f,v),{stateHost:n,stateKey:CE})}}function VP(n,e,r,t,i,o,u,a,c,s,l){const f=c==="sample",d=f?MP(e,r,t,i,o,s,l):a?TP(e,r,t,i,o,a,s):{cells:[],xLabels:i.map(String),yLabels:r.map(_=>dt(_,s)),xAxisLabel:t,yAxisLabel:tu(s)};u&&(d.valueRange=u);const p=Math.max(80,Math.min(120,Math.floor(1e3/i.length))),h=Math.max(60,Math.min(90,Math.floor(800/r.length))),m=60+i.length*p+60,v=10+r.length*h+35;let b='<div class="code-plot-container">';b+=`<canvas id="code-heatmap-canvas" class="code-plot-canvas" width="${m}" height="${v}"></canvas>`,f||(b+='<div class="code-info" style="margin-top: 6px;">Cells show average point values.</div>'),b+="</div>",n.innerHTML=b;const g=n.querySelector("#code-heatmap-canvas");g&&(to(g,d),er(g,()=>to(g,d),{stateHost:n,stateKey:RE}))}const Ip=new Set(["info","clarification","meta","version","math-help","ai-hidden","instruction"]),XP="framing-explainer-persuasive",YP="framing-explainer-nonpersuasive",KP="root",JP=14,zP=(n,e)=>`<strong>POV ${n}:</strong><span class="framing-note-content">${e}</span>`,QP=(n,e)=>`<strong>${n}:</strong><span class="framing-note-content">${e}</span>`;function jE(n){const e=n.jprobInstance.option_value_or("framing_POVs_enabled",[]);if(!Array.isArray(e)||!e.every(r=>typeof r=="string"))throw new Error("framing_POVs_enabled must be a string array, got "+JSON.stringify(e));return e}function GE(n){return n.showFramingNotes===!1?!1:!!n.jprobInstance.option_value_or("framing_enabled",!0)}function K2(n,e){const r=jE(e);return!GE(e)||!r.length?null:n.get_framing_layout(r)}function ZP(n,e,r){var t;return((t=n[e])==null?void 0:t[r])??!0}function VE(n,e,r,t){const i=ZP(r,t,n.note.id),o=n.children.map(h=>VE(h,e,r,t)).join(""),u=i?" visible":"",a=i?" active":"",c=JP*(n.depth-1),s=J(n.note.flabel),l=Ln(n.note.srcquotes,e),f=l.atStart+Se(n.note.defn,e)+l.atEnd;let d,p;return Ip.has(n.note.flabel)?(d=QP(s,f),p="framing-nonpersuasive"):(d=zP(s,f),p="framing-persuasive"),`<div class="framingnote${u} ${p}" style="margin-left: ${c}px" data-framing-anchor="${fe(t)}" data-framing-id="${fe(n.note.id)}"><div class="framing-note-summary"><button class="framing-fold-btn${a}" data-framing-anchor="${fe(t)}" data-framing-id="${fe(n.note.id)}" title="Toggle framing note">&plusmn;</button>`+d+"</div>"+o+"</div>"}function J2(n,e,r,t){return n.layout_nodes.map(i=>VE(i,e,r,t)).join("")}function ex(n,e,r,t){return n===void 0||n.layout_nodes.length===0?"":"<div>"+J2(n,e,r,t)+"</div>"}function nx(n,e,r){const t=K2(n,e),i=document.querySelectorAll(`.${D7}`);for(const o of i){const u=o.getAttribute(P7);if(!u)continue;const a=t==null?void 0:t.nonroot_anchor_sections.get(u);o.innerHTML=t&&a?J2(a,e,r.framingFoldState,u):""}}function rx(n,e,r,t){const i=document.getElementById("framing-notes-root-section"),o=K2(e,r),u=o===null?"":J2(o.root_section,r,t.framingFoldState,KP);if(!u){n.innerHTML="",i&&(i.hidden=!0);return}i&&(i.hidden=!1),n.innerHTML=u}function tx(n,e){const r=document.getElementById("framing-notes-explainer-section"),t=jE(e);if(!GE(e)||!t.length){n.innerHTML="",r&&(r.hidden=!0);return}const i=t.some(s=>Ip.has(s)),o=t.some(s=>!Ip.has(s)),u=so[XP],a=so[YP];r&&(r.hidden=!1);const c=[];o&&c.push('<div class="framing-explainer framing-persuasive">'+Se(u,e)+"</div>"),i&&c.push('<div class="framing-explainer framing-nonpersuasive">'+Se(a,e)+"</div>"),n.innerHTML=c.join("")}const ix=280,ox=110;function XE(n,e,r){if(r==="point")return String(n.point[e]??"");if(r==="bounds"){const i=n.bounds[e];return i?`${i[0]} ${i[1]}`:""}const t=n.sample[e];return t?typeof t=="string"?t:t.map(([i,o])=>`(${i} ${o})`).join(" "):""}function YE(n,e){return n.svar_entries().map(({bareName:r},t)=>({bareName:r,cardMode:e,inputIndex:t}))}function KE(n,e,r){const t=ze(e.ui.whose,r);if(!t)return[];const{source:i}=me(e.ui.whose);if(i==="metho-plaincode"||i==="metho-richcode"||i==="adhoc-plaincode"){const o=t,u={};for(const c of o.cparam_names){const s=n.find_cparam(c),l=j2(o,c,s==null?void 0:s.allowed_values);u[c]=ft(c,e,s,l)}const a=un(o,u);return a?a.trials:[]}return i==="adhoc-plainnum"||i==="metho-plainnum"?t.trials:[]}function z2(n,e){return n>0?Math.max(0,Math.min(e,n-1)):0}function Q2(n,e){return'<div class="assumption-trial-bar"><span class="assumption-trial-label">trial</span><div class="assumption-trial-buttons">'+Array.from({length:n},(r,t)=>`<button class="assumption-trial-btn${t===e?" active":""}" data-trial="${t}">${t+1}</button>`).join("")+"</div></div>"}function ux(n,e,r,t,i){var I,L;const o=document.getElementById("svars-section"),u=t.ui.whose==="yours-plaincode",a=t.ui.inputMode,c=!De(t.ui.whose),s=e.get_svar_bare_names(),l=K2(e,r),f=Gt(e);if(f.length===0){n.innerHTML="",o&&(o.hidden=!0);return}o&&(o.hidden=!1);const d=YE(e,a),p=c?KE(e,t,i).map(R=>d.map(A=>XE(R,A.bareName,A.cardMode))):[],h=(((I=t.yoursRecord.raw_input)==null?void 0:I[a])??"").split(`
`),m=p.length,v=c&&m>1,b=z2(m,t.ui.assumptionTrialIndex),g=v?Q2(m,b):"",_=c?'<div class="assumption-preset-hint">preset selected; select Yours in Calculator to edit</div>':"",y=e.svar_entries().map(R=>R.decl.type_highlevel),E=[];for(let R=0;R<f.length;R++){const A=d[R],S=A.cardMode,$=S==="sample"&&!u,w=S==="bounds"?" bounds-mode":S==="sample"?" sample-mode":"",k=Se(f[R],r),C=s[R],F=C?e.get_svar(C):void 0,T=C?`isym:${C}`:null,B=T!==null&&e.can_consolidate_isym_svar(T),O=B?e.get_isym(T):void 0,x=(O==null?void 0:O.defn)??(F==null?void 0:F.defn),q=O?O.srcquotes:F==null?void 0:F.srcquotes,Q=Ln(q,r),W=x?Q.atStart+Se(x,r)+Q.atEnd:"",Y=C?`svar:${C}`:null,ne=B?` id="isym-${fe(C??"")}"`:"",ie=Y&&l?ex(l.nonroot_anchor_sections.get(Y),r,t.ui.framingFoldState,Y):"",H=$?`<canvas class="param-density-canvas" data-param-index="${A.inputIndex}" data-type-highlevel="${y[A.inputIndex]}" width="${ix}" height="${ox}"></canvas>`:"";let j;if(c){const Z=((L=p[b])==null?void 0:L[R])??"",oe=p.map(($e,ge)=>`data-trial-${ge}="${fe($e[R]??"")}"`).join(" ");j=`<span class="assumption-readonly${w}" data-param-index="${R}" ${oe}>${J(Z)}</span>`}else{const Z=(h[A.inputIndex]??"").trim();j=`<input class="assumption-input${w}" data-param-index="${A.inputIndex}" data-group="${a}" value="${fe(Z)}" placeholder="${hx(S)}">`}const G=!c&&!u&&S==="sample"?'<span class="assumption-help-slot"></span>':"";!c&&S==="sample"&&ZE(h[A.inputIndex]??"");const Ae="",de=`<span class="assumption-op">${J(A7(S))}</span>`;E.push(`<div class="assumption-card${c?" preset-mode":""}"${ne}>`+gS(C??"",`${Wp}${C??""}`)+`<div class="assumption-header"><span class="assumption-cond">${k}</span><span class="assumption-input-row"${u?" hidden":""}>`+de+j+G+"</span></div>"+(W?`<div id="gloss-${C??""}" class="assumption-narrative">${W}</div>`:"")+H+Ae+g+_+ie+"</div>")}n.innerHTML=E.join("");for(const R of n.querySelectorAll(".assumption-help-slot"))R.appendChild(at(ND));if(a==="sample"&&!u){const R=pr(e.svar_entries().map(A=>A.decl));c?Z2(n,R):eh(n,R)}}function ax(n,e,r,t){var s;if(De(r.ui.whose))return;const i=r.ui.inputMode,o=YE(e,i),u=KE(e,r,t).map(l=>o.map(f=>XE(l,f.bareName,f.cardMode))),a=u.length,c=z2(a,r.ui.assumptionTrialIndex);for(const l of n.querySelectorAll(".assumption-readonly")){const f=Number(l.dataset.paramIndex);for(const d of l.getAttributeNames())d.startsWith("data-trial-")&&l.removeAttribute(d);u.forEach((d,p)=>{l.setAttribute(`data-trial-${p}`,d[f]??"")}),l.textContent=((s=u[c])==null?void 0:s[f])??""}sx(n,a,c),i==="sample"&&Z2(n,pr(e.svar_entries().map(l=>l.decl)))}function sx(n,e,r){const t=e>1;for(const i of n.querySelectorAll(".assumption-card")){const o=i.querySelector(".assumption-trial-bar");if(!t){o==null||o.remove();continue}const u=Q2(e,r);if(o)o.outerHTML=u;else{const a=i.querySelector(".assumption-preset-hint");a?a.insertAdjacentHTML("beforebegin",u):i.insertAdjacentHTML("beforeend",u)}}}function cx(n,e,r){n.querySelectorAll(".assumption-trial-btn").forEach(o=>{o.classList.toggle("active",o.dataset.trial===String(e))});const i=n.querySelectorAll(".assumption-readonly");for(const o of i){const u=o.getAttribute(`data-trial-${e}`)??"";o.textContent=u}Z2(n,r)}function lx(n,e){const r=n.dataset.typeHighlevel,t=r?Ar(r):null,i=e.points,o=m2(t,i[0].x,i[i.length-1].x);Zi(n,e,o),er(n,()=>Zi(n,e,o)),WT(n,e,o,r)}function fx(n){const e=n.parentElement;return e!=null&&e.classList.contains("resizable-canvas-wrapper")?e:n}function JE(n,e){const r=fx(n);if(!e){r.hidden=!0;return}r.hidden=!1,lx(n,e)}function Z2(n,e){const r=n.querySelectorAll(".param-density-canvas");for(const t of r){const i=t.closest(".assumption-card"),o=i==null?void 0:i.querySelector(".assumption-readonly"),u=(o==null?void 0:o.textContent)??"",a=Number(t.dataset.paramIndex??0);JE(t,zE(u,e==null?void 0:e[a]))}}function dx(n,e,r){var a;const t=e.ui.inputMode,i=((a=e.yoursRecord.raw_input)==null?void 0:a[t])??"",o=i?i.split(`
`):[];n.querySelectorAll(".assumption-input").forEach(c=>{const s=Number(c.dataset.paramIndex),l=(o[s]??"").trim();c.value!==l&&document.activeElement!==c&&(c.value=l)}),t==="sample"&&(eh(n,r),e$(n))}function eh(n,e){const r=n.querySelectorAll(".param-density-canvas");for(const t of r){const i=t.closest(".assumption-card"),o=i==null?void 0:i.querySelector(".assumption-input"),u=(o==null?void 0:o.value)??"",a=Number(t.dataset.paramIndex??0);JE(t,zE(u,e==null?void 0:e[a]))}}function zE(n,e){const r=n.trim();if(!r)return null;const t=e??jt;let i;try{i=h2(r,t)}catch{return null}switch(i.kind){case"family":return MT(d2(i.spec,t.lo,t.hi));case"pairs":return RT(i.pairs.map(o=>o[0]),i.pairs.map(o=>o[1]))}}function QE(n){return n.trim()}function px(n,e,r,t){var a;const i=n.ui.inputMode,u=(((a=n.yoursRecord.raw_input)==null?void 0:a[i])??"").split(`
`);for(;u.length<t;)u.push("");return u[e]=i==="sample"?QE(r):r,u.join(`
`)}function ZE(n){return null}function e$(n){const e=n.querySelectorAll(".assumption-card");for(const r of e){const t=r.querySelector(".assumption-input");if(!t)continue;ZE(t.value);let i=r.querySelector(".arg-warning");i&&i.remove()}}function hx(n){switch(n){case"point":return"e.g. .5";case"bounds":return"e.g. .01 1";case"sample":return"e.g. "+n$}}const n$="tri(0, .5, .99)",nh="conclusion-density";function vx(n,e){const r=n.config.conclusion_form;if(!r)throw new Error("config.conclusion_form is not set");const t=e[r];if(!t)throw new Error(`Form "${r}" not found in form registry`);return t}function r$(n,e){return Gt(n).map(r=>`<div class="calc-label-row"><span class="label-full">${Se(r,e)}</span></div>`).join("")}function mx(n,e){const r=J(A7(e));return Array.from({length:n},()=>`<div class="calc-op-row">${r}</div>`).join("")}function rh(n,e,r,t,i,o,u,a,c,s){var g,_,y;const l=i.ui.inputMode;if(o){const{source:E}=me(i.ui.whose);if(E==="metho-plaincode"||E==="metho-richcode"||E==="adhoc-plaincode"){const I=ze(i.ui.whose,o);if(I){const L=cn();N8(n,e,I,th(E,I,o),r,t,i,L,u,c,s);return}}if(E==="yours-plaincode"){const I=i.yoursCodeRecord;if(n.innerHTML="",I.verified_code_input&&I.cparam_combos.length>0){const L=$o(I),R=cn();N8(n,e,L,[L],r,t,i,R,u,c,s)}else e.innerHTML='<div class="result-detail">Write code below and click Sample to compute results.</div>';return}}const f=((g=i.yoursRecord.raw_input)==null?void 0:g[l])??"",p=Gt(r).length,h=!De(i.ui.whose),m=r$(r,t),v=p>0?`<div class="calc-operators">${mx(p,l)}</div>`:"";let b;if(h)b='<div id="sample-columns"></div>';else{const E=l==="bounds"?" bounds-mode":l==="sample"?" sample-mode":"",I=Ax(l,p);b=`<div class="calc-input"><textarea class="calc-textarea${E}" data-group="${l}" rows="${p}" spellcheck="false" placeholder="${I}">${J(f)}</textarea></div>`}if(n.innerHTML=`
    <div class="calc-layout">
      <div class="calc-labels">${m}</div>
      ${v}
      ${b}
    </div>
  `,h&&o){const E=n.querySelector("#sample-columns");E&&VT(E,r,o,i)&&((_=n.querySelector(".calc-labels"))==null||_.classList.add("has-sample-col-headers"),(y=n.querySelector(".calc-operators"))==null||y.classList.add("has-sample-col-headers"));const{source:I}=me(i.ui.whose);if(I==="adhoc-plainnum"){const L=ze(i.ui.whose,o),R=L==null?void 0:L.trials[0],A=r.svar_entries().map(S=>S.bareName);R&&z7(R,A).length>0&&n.insertAdjacentHTML("beforeend",`<div class="calc-copy-to-yours"><button class="copy-to-yours-btn" type="button" title="Copy this entry's estimates into your editable Yours inputs">Copy to Yours</button></div>`)}}iu(e,r,t,i,o,u,a)}function th(n,e,r){return n==="metho-plaincode"?r.plaincodeResults:n==="metho-richcode"?r.richcodeResults:[e]}function bx(n,e,r,t,i,o,u,a,c,s){const{source:l}=me(i.ui.whose),f=cn();if(o&&(l==="metho-plaincode"||l==="metho-richcode"||l==="adhoc-plaincode")){const d=ze(i.ui.whose,o);if(d){T8(n,e,d,th(l,d,o),r,t,i,f,u,c,s);return}}else if(l==="yours-plaincode"){const d=i.yoursCodeRecord;if(d.verified_code_input&&d.cparam_combos.length>0){const p=$o(d);T8(n,e,p,[p],r,t,i,f,u,c,s);return}}console.warn(`Code-control change outside a code result view (whose=${JSON.stringify(i.ui.whose)}); falling back to a full calculator render`),rh(n,e,r,t,i,o,u,a,c,s)}function iu(n,e,r,t,i,o,u){Lx(n,e,r,t,i,o,u)}function gx(n,e,r,t,i,o,u,a){const c=o[e];if(!c){n.innerHTML="",console.warn(`derived-form ${e}: not in form registry (cannot compute)`);return}const s=r.form.find(b=>b.id===e);if(!s){n.innerHTML="",console.error(`derived-form ${e}: not found in jprob template form list`);return}const l=i.ui.inputMode;if(!b7(s,l)){n.innerHTML="";return}const f=g7(e,s.sexpr),d=_x(r,f),p=Se(d,t),h=!De(i.ui.whose),m=r.get_svar_bare_names().length;let v;try{v=wx(e,c,r,i,l,h,m,a,u)}catch(b){n.innerHTML="",console.error(`derived-form ${e}: ${b.message}`);return}switch(v.kind){case"ok":const b=v.valueHtml??`<span class="derived-value">${v.value}</span>`,g=v.detailHtml??(v.detail?` <span class="derived-detail">${v.detail}</span>`:"");n.innerHTML=`<div class="hir-loud-note">${p} ${v.label} ${v.relation??"≈"} `+b+(g?` ${g}`:"")+"</div>"+(v.nonFiniteWarning?po():"");return;case"non-finite":n.innerHTML=po();return;case"unavailable":n.innerHTML=`<div class="hir-loud-note">${p} — <span class="derived-detail">${J(v.explanation)}</span></div>`;return;case"pending":n.innerHTML="";return;case"missing":n.innerHTML="",console.warn(`derived-form ${e}: ${v.reason}`);return;case"error":n.innerHTML="",console.error(`derived-form ${e}: ${v.message}`);return}}function _x(n,e){const r=_7(e);return n.get_display_expr(r)??r}function Yr(n){return v7(n.svar_entries())}const yx={point:()=>fo,bounds:"from bounds",mc:()=>"MC"},Ex={point:n=>n.perTrial.length>1?`mean of ${n.perTrial.length} samples`:"from preset",bounds:"from preset",mc:n=>n.trialCount>1?`MC of ${n.trialCount} trials`:"MC"},$x={point:n=>n.perTrial.length>1?`${fo} (mean of ${n.perTrial.length} trials)`:fo,bounds:"from bounds",mc:()=>"MC"};function It(n,e,r,t){switch(n.kind){case"point":{const i=kt([...n.perTrial,n.value]);return i==="undefined"?{kind:"non-finite"}:{kind:"ok",label:t.point(n),value:Ue(n.value,e,r),nonFiniteWarning:i==="infinite"}}case"bounds":{const i=kt([n.lo,n.hi]);return i==="undefined"?{kind:"non-finite"}:bE(n.lo,n.hi)?{kind:"unavailable",explanation:mE}:{kind:"ok",label:t.bounds,relation:gE(n.tightness),value:YD(n.lo,n.hi,e,r),nonFiniteWarning:i==="infinite"&&n.tightness==="tight"}}case"mc":{const i=kt([n.mean,n.median,n.p5,n.p95]);if(i==="undefined")return{kind:"non-finite"};const o=GD(n,e,r);return{kind:"ok",label:t.mc(n),value:"",valueHtml:o.valueHtml,detailHtml:o.detailHtml,nonFiniteWarning:i==="infinite"}}}}function wx(n,e,r,t,i,o,u,a,c){var v;const s=r.get_svar_bare_names(),l=e.params.filter(b=>!s.includes(b));if(l.length>0)return{kind:"error",message:`params not in svar_list: ${JSON.stringify(l)} (form.params=${JSON.stringify(e.params)}, svar_list=${JSON.stringify(s)})`};const f=ty(n,e,c),d=t.ui.probAsOdds,{source:p}=me(t.ui.whose);if(bn(p)==="plaincode"||bn(p)==="richcode")return Sx(n,e,f,r,t,p,a);if(i==="bounds"&&!e.bounds)return{kind:"unavailable",explanation:ri};if(o){if(!a)return{kind:"pending"};const b=ze(t.ui.whose,a);if(!b)return{kind:"pending"};if(p!=="adhoc-plainnum"&&p!=="metho-plainnum")return{kind:"pending"};const g=b;try{const _=Xr(cn()),y=xn(f,Zn(g.trials,i,Yr(r)),{onIncompleteTrial:"skip",mcIters:_.mcIters,mcItersPerClick:_.mcItersPerClick});return It(y,e.typeHighlevel,d,Ex)}catch(_){if(_ instanceof Ot)return{kind:"missing",reason:`record: ${_.message}`};throw _}}const h=((v=t.yoursRecord.raw_input)==null?void 0:v[i])??"";if(!h.trim())return{kind:"pending"};const m=uu(r,i,h,"tolerant",o$(t));try{const b=Xr(cn()),g=xn(f,m,{onIncompleteTrial:"skip",mcIters:b.mcIters,mcItersPerClick:b.mcItersPerClick});return It(g,e.typeHighlevel,d,yx)}catch(b){if(b instanceof Ot)return{kind:"pending"};throw b}}function Sx(n,e,r,t,i,o,u){let a,c;if(en(o)==="yours"){const d=i.yoursCodeRecord;if(!d.verified_code_input||d.cparam_combos.length===0)return{kind:"pending"};a=$o(d),c=[a]}else{if(!u)return{kind:"pending"};if(a=ze(i.ui.whose,u),!a)return{kind:"pending"};c=th(o,a,u)}Kp(a);const s=$P(a,c,t,i);if(!s)return{kind:"pending"};if(s.trials.length===0)return{kind:"missing",reason:"no trials for the selected scenario combination"};const l=i.ui.probAsOdds,f=$x;if(i.ui.inputMode==="point"){const d=s.trials.map(h=>EE(h,n,e)),p=d.reduce((h,m)=>h+m,0)/d.length;return It({kind:"point",value:p,perTrial:d,perTrialInputs:[]},e.typeHighlevel,l,f)}if(i.ui.inputMode==="bounds"){if(!Yp(a))throw new Error("code bounds derived-form display reached with a multi-trial record; bounds mode should not have been selectable");const d=$E(s.trials[0],n,e);if(!d)return{kind:"unavailable",explanation:ri};const[p,h]=d.interval;return It({kind:"bounds",lo:p,hi:h,tightness:d.tightness,trialCount:1},e.typeHighlevel,l,f)}try{const d=Xr(cn()),p=xn(r,Zn(s.trials,"sample",Yr(t)),{onIncompleteTrial:"skip",mcIters:d.mcIters,mcItersPerClick:d.mcItersPerClick});return It(p,e.typeHighlevel,l,f)}catch(d){if(d instanceof Ot)return{kind:"missing",reason:`combo trials: ${d.message}`};throw d}}function Ax(n,e){const r=n==="sample"?n$:n==="bounds"?".01 1":".5";return"e.g. "+Array.from({length:e},()=>r).join(`
`)}function Lx(n,e,r,t,i,o,u){var p;const a=o?vx(e,o):null,c=t.ui.inputMode,s=!De(t.ui.whose),l=cn();if(s&&i){try{Rx(n,e,r,t,i,a,l,u)}catch(h){n.innerHTML=`<div class="result-error">${J(h.message)}</div>`}return}const f=((p=t.yoursRecord.raw_input)==null?void 0:p[c])??"",d=e.svar_entries().length;if(!f.trim()){n.innerHTML='<div class="result-detail">Enter probabilities above.</div>';return}try{switch(c){case"point":kx(n,f,e,r,d,a,t.ui.probAsOdds);break;case"bounds":Ix(n,f,e,r,d,a,t.ui.probAsOdds);break;case"sample":Cx(n,f,e,r,d,t,a,l,u);break}}catch(h){n.innerHTML=`<div class="result-error">${J(h.message)}</div>`}}function Cp(n,e){return!isNaN(n)&&Ni(e,n)}function t$(n,e,r){const t=n.trim().split(/\n/).map(i=>i.trim()).filter(i=>i.length>0);if(t.length!==e)throw new Error(`Expected ${e} values, got ${t.length}`);return t.map((i,o)=>{const u=Number(i),a=(r==null?void 0:r[o])??jt;if(!Cp(u,a))throw new Error(`Line ${o+1}: "${i}" is not a valid value in ${Ti(a)}`);return u})}function ou(n,e,r){return e?ty(n.config.conclusion_form??"form:conclusion",e,r):{key:"conclusion-unavailable",params:[],typeHighlevel:n.config.conclusion_type_highlevel,point:()=>NaN,bounds:null,boundsTightness:null}}function i$(){return`<div class="result-detail">${J(ri)}</div>`}function ih(n,e){for(const r of e.params)if(!n.includes(r))throw new Error(`form param "${r}" is not an input subjective variable`)}function uu(n,e,r,t,i=null){const o=n.svar_entries(),u=o.map(f=>f.bareName),a=pr(o.map(f=>f.decl)),c=Yr(n);if(t==="strict"){if(e==="point"){const d=t$(r,u.length,a);return{mode:e,trials:[Object.fromEntries(u.map((p,h)=>[p,d[h]]))]}}if(e==="bounds"){const d=u$(r,u.length,a);return{mode:e,trials:[Object.fromEntries(u.map((p,h)=>[p,d[h]]))]}}const{specs:f}=a$(r,u.length,a);return{mode:"sample",ranges:c,trials:[{specs:Object.fromEntries(u.map((d,p)=>[d,f[p]])),lloads:i}]}}const s=r.trim().split(/\n/).map(f=>f.trim()).filter(f=>f.length>0);if(e==="point"){const f={};return u.forEach((d,p)=>{const h=Number(s[p]);isNaN(h)||(f[d]=h)}),{mode:e,trials:[f]}}if(e==="bounds"){const f={};return u.forEach((d,p)=>{const h=(s[p]??"").split(/\s+/);if(h.length!==2)return;const m=Number(h[0]),v=Number(h[1]);isNaN(m)||isNaN(v)||(f[d]=[m,v])}),{mode:e,trials:[f]}}const l={};return u.forEach((f,d)=>{try{l[f]=h2(s[d]??"",a[d]??jt)}catch{}}),{mode:"sample",ranges:c,trials:[{specs:l,lloads:i}]}}function o$(n){var e;return((e=n.yoursRecord.trials[0])==null?void 0:e.lloads)??null}function kx(n,e,r,t,i,o,u){const a=r.svar_entries().map(p=>p.bareName);o&&ih(a,o);const c=uu(r,"point",e,"strict"),s=xn(ou(r,o),c,{onIncompleteTrial:"error"}),l=ti(r,t),f=r.config.conclusion_type_highlevel,d=c.trials[0];n.innerHTML=ho({labelHtml:l,value:s.value,typeHighlevel:f,statsDisplay:u,detail:`from: ${a.map(p=>d[p]).join(", ")}`})}function u$(n,e,r){const t=n.trim().split(/\n/).map(i=>i.trim()).filter(i=>i.length>0);if(t.length!==e)throw new Error(`Expected ${e} lines of "lo hi", got ${t.length}`);return t.map((i,o)=>{const u=i.split(/\s+/);if(u.length!==2)throw new Error(`Line ${o+1}: expected "lo hi", got "${i}"`);const a=Number(u[0]),c=Number(u[1]),s=(r==null?void 0:r[o])??jt;if(!Cp(a,s)||!Cp(c,s)||a>c)throw new Error(`Line ${o+1}: invalid bounds "${i}" (need lo ≤ hi within ${Ti(s)})`);return[a,c]})}function Ix(n,e,r,t,i,o,u){const a=r.svar_entries().map(d=>d.bareName);o&&ih(a,o);const c=uu(r,"bounds",e,"strict");if(o&&!o.bounds){n.innerHTML=i$();return}const s=xn(ou(r,o),c,{onIncompleteTrial:"error"}),l=ti(r,t),f=r.config.conclusion_type_highlevel;n.innerHTML=P2({labelHtml:l,lo:s.lo,hi:s.hi,tightness:s.tightness,typeHighlevel:f,statsDisplay:u})}function a$(n,e,r){const t=n.trim().split(/\n/).map(o=>o.trim()).filter(o=>o.length>0);if(t.length!==e)throw new Error(`Expected ${e} lines, got ${t.length}`);return{specs:t.map((o,u)=>{try{return h2(o,(r==null?void 0:r[u])??jt)}catch(a){throw new Error(`Line ${u+1}: ${a.message}`)}}),warnings:[]}}const s$="⟦",c$="⟧";function mo(n,e,r,t){return`<div class="result-label">Exact moments (independent)</div><div class="result-main">E${s$}${e}${c$} = <span class="hl">${Ue(n.mean,r,t)}</span></div><div class="result-detail">σ = ${Ue(n.sigma,r,"probability")}</div>`}function bo(n){const e=`${O8("n")}=${n.samples.length.toLocaleString()}`;return n.barrierInnerIters===null?e:`${e}, E${s$}·${c$} ${O8("n")}=${n.barrierInnerIters.toLocaleString()}`}function Rp(n,e,r,t){return'<div class="mc-row"><div class="mc-text">'+$r(n,e,r,"monte-carlo",t)+'</div><canvas id="density-canvas" width="400" height="200"></canvas></div>'}function l$(n,e,r,t){const i=n.querySelector("#density-canvas");if(!i)return;const o=e.samples??e.densityCurve;if(!o)return;const u=Ar(r);jr(i,o,e.p5,e.p95,u),er(i,()=>jr(i,o,e.p5,e.p95,u),{stateHost:n,stateKey:nh}),by(i,o,e.p5,e.p95,r),e.mcPoolToken!==null&&ai(i,e.mcPoolToken,e.samples.length,{itersPerTarget:t,targetCount:1})}function Cx(n,e,r,t,i,o,u,a,c){const s=r.svar_entries().map(_=>_.bareName);u&&ih(s,u);const l=o$(o),f=uu(r,"sample",e,"strict",l),d=ti(r,t),p=r.config.conclusion_type_highlevel,h=o.ui.probAsOdds,m=ou(r,u,c),v=Xr(a);if(ko(l)){const _=v2(m,f,{onIncompleteTrial:"error",mcIters:v.mcIters,mcItersPerClick:v.mcItersPerClick}),y=[];_.independent.exact&&y.push(mo(_.independent.exact,d,p,h)),y.push(vo({comparison:_,typeHighlevel:p,statsDisplay:h,targetLabelHtml:d,canvasId:"density-canvas",provenanceDetail:`Monte Carlo, ${bo(_.joint)}`})),n.innerHTML=y.join(""),U2({box:n,canvasId:"density-canvas",layers:[{comparison:_,palette:"series"}],typeHighlevel:p,resizeStateKey:nh,mcItersPerClick:v.mcItersPerClick});return}const b=xn(m,f,{onIncompleteTrial:"error",mcIters:v.mcIters,mcItersPerClick:v.mcItersPerClick}),g=[];b.exact&&g.push(mo(b.exact,d,p,h)),g.push(`<div class="result-label">Monte Carlo (independent, ${bo(b)})</div>`+Rp(b,p,h,d)),n.innerHTML=g.join(""),l$(n,b,p,v.mcItersPerClick)}function Rx(n,e,r,t,i,o,u,a){const c=ze(t.ui.whose,i);if(!c){n.innerHTML='<div class="result-detail">No data for this preset.</div>';return}const{source:s}=me(t.ui.whose),l=ti(e,r);if(s==="adhoc-plainnum"||s==="metho-plainnum"){Mx(n,c,e,r,t,l,o,u,a);return}n.innerHTML='<div class="result-detail">Unknown preset source.</div>'}function Mx(n,e,r,t,i,o,u,a,c){const s=i.ui.inputMode,l=r.config.conclusion_type_highlevel,f=i.ui.probAsOdds;if(e.trials.length===0)throw new Error("Plainnum record has no trials to display");const d=ou(r,u,c);if(s==="point"){const p=xn(d,Zn(e.trials,"point",Yr(r)),{onIncompleteTrial:"error"});if(p.perTrial.length===1)n.innerHTML=ho({labelHtml:o,value:p.perTrial[0],typeHighlevel:l,statsDisplay:f,detail:`from: ${p.perTrialInputs[0].join(", ")}`});else{const h=p.perTrial.map(m=>Ue(m,l,f)).join(", ");n.innerHTML=ho({labelHtml:o,value:p.value,typeHighlevel:l,statsDisplay:f,labelPrefix:"mean ",detail:`per sample: ${h}`})}return}if(s==="bounds"){if(u&&!u.bounds){n.innerHTML=i$();return}const p=xn(d,Zn(e.trials,"bounds",Yr(r)),{onIncompleteTrial:"error"});n.innerHTML=P2({labelHtml:o,lo:p.lo,hi:p.hi,tightness:p.tightness,typeHighlevel:l,statsDisplay:f,midpointDetailSuffix:` (envelope of ${p.trialCount} sample${p.trialCount>1?"s":""})`});return}Nx(n,e,d,r,t,i,o,a)}function Nx(n,e,r,t,i,o,u,a){const c=t.config.conclusion_type_highlevel,s=o.ui.probAsOdds,l=Xr(a),f=Zn(e.trials,"sample",Yr(t)),d=B2(e.trials,t,i,{offerCopyToYours:!0});if(d.hasDependence){const m=Tx(e),v=v2(r,f,{onIncompleteTrial:"error",mcIters:l.mcIters,mcItersPerClick:l.mcItersPerClick,precomputed:m}),b=[];v.independent.exact&&b.push(mo(v.independent.exact,u,c,s));const g=v.joint.provenance==="precomputed"?`precomputed, ${e.count} agent trial${e.count===1?"":"s"}`+(v.joint.mcIters?`, ${D8(v.joint.mcIters)} MC iters`:""):`Monte Carlo, ${bo(v.joint)}`;b.push(vo({comparison:v,typeHighlevel:c,statsDisplay:s,targetLabelHtml:u,canvasId:"density-canvas",provenanceDetail:g})),b.push(d.specHtml),n.innerHTML=b.join(""),U2({box:n,canvasId:"density-canvas",layers:[{comparison:v,palette:"series"}],typeHighlevel:c,resizeStateKey:nh,mcItersPerClick:l.mcItersPerClick});return}const p=xn(r,f,{onIncompleteTrial:"error",mcIters:l.mcIters,mcItersPerClick:l.mcItersPerClick,precomputed:XT(e)}),h=[];if(p.exact&&h.push(mo(p.exact,u,c,s)),p.provenance==="precomputed"){const m=p.mcIters?`, ${D8(p.mcIters)} MC iters`:"";h.push(`<div class="result-label">Precomputed (independent, ${e.count} agent trials${m})</div>`+Rp(p,c,s,u))}else h.push(`<div class="result-label">Monte Carlo (independent, ${bo(p)})</div>`+Rp(p,c,s,u));d.specHtml&&h.push(d.specHtml),n.innerHTML=h.join(""),l$(n,p,c,l.mcItersPerClick)}function Tx(n){const e=n.precomputed[In],r=n.precomputed[Tt];if(e===void 0&&r===void 0)return null;if(e===void 0||r===void 0)throw new Error(`A record with stated joint dependence must carry both the independence precompute (${In}) and joint precompute (${Tt}), or neither for live comparison`);return{independent:e,joint:r}}function O8(n){return`<span class="lc">${n}</span>`}const qx=1e6;function D8(n){const e=n/qx;return e>=1&&e===Math.floor(e)?`${e}M`:`${e.toFixed(1)}M`}function Fx(n,e,r,t,i){if(!e.trim())return null;try{if(n==="point"){const a=t$(e,r,i),c={};for(let s=0;s<t.length;s++)c[t[s]]=a[s];return c}if(n==="bounds"){const a=u$(e,r,i),c={};for(let s=0;s<t.length;s++)c[t[s]]=a[s];return c}const{specs:o}=a$(e,r,i),u={};for(let a=0;a<t.length;a++){const c=o[a];u[t[a]]=c.kind==="family"?c.spec.text:c.pairs}return u}catch{return null}}function oh(n,e,r,t,i){const o=n.yoursRecord;o.raw_input={...o.raw_input??{},[t]:i};const u=e.svar_entries(),a=u.map(f=>f.bareName),c=a.length,s=pr(u.map(f=>f.decl)),l=Fx(t,i,c,a,s);if(l!==null){const f=o.trials[0];t==="point"?f.point=l:t==="bounds"?f.bounds=l:f.sample=l}Zp(e,r,n.plainnumOptionDictKey,o)}function uh(n,e,r,t,i,o){const u=n.yoursRecord;u.lloads_draft=t;const a=f9(t,i,o);return a.kind==="valid"&&(u.trials[0].lloads=a.lloads),Zp(e,r,n.plainnumOptionDictKey,u),a}function P8(n,e,r,t,i,o){if(t==="plaincode"){const u=n.yoursCodeRecord;u.trial_choices={...u.trial_choices??{},[i]:o},Xt(e,r,n.codeOptionDictKey,u)}else{const u=n.yoursRecord;u.trial_choices={...u.trial_choices??{},[i]:o},Zp(e,r,n.plainnumOptionDictKey,u)}}function Ox(n,e){n.addEventListener("input",r=>{const t=r.target;if(t.classList.contains("calc-textarea")){e.persistCalcTextarea(t);return}if(t.classList.contains("assumption-input")){e.persistAssumptionCard(t);return}}),n.addEventListener("change",r=>{const t=r.target;if(t.classList.contains("calc-textarea")){e.recomputeAfterCalcTextarea();return}if(t.classList.contains("assumption-input")){e.recomputeAfterAssumptionCard(t);return}})}function ah(n,e,r,t){const i=n.yoursCodeRecord;i.raw_code_input=t,Xt(e,r,n.codeOptionDictKey,i)}function Dx(n,e,r,t,i){const o=n.yoursCodeRecord;o.reasoning_response={...o.reasoning_response,[t]:i},Xt(e,r,n.codeOptionDictKey,o)}function Px(n,e,r,t){const i=n.yoursCodeRecord;i.misc_response=t,Xt(e,r,n.codeOptionDictKey,i)}function sh(n){const e=`yours_${n}_`,r=[];for(let i=0;i<localStorage.length;i++){const o=localStorage.key(i);o!==null&&o.startsWith(e)&&r.push(o)}const t=[];for(const i of r){const o=localStorage.getItem(i);if(o===null)continue;let u;try{u=JSON.parse(o)}catch{continue}t.push({plainnumOptionDictKey:i.slice(e.length),record:u})}return t.sort((i,o)=>{const u=i.record.timestamp??"";return(o.record.timestamp??"").localeCompare(u)}),t}function xx(n,e){localStorage.removeItem(Ao(n,e))}function Hx(n){const e=sh(n).map(i=>({kind:"plainnum",plainnumOptionDictKey:i.plainnumOptionDictKey,record:i.record})),r=zp(n).map(i=>({kind:"plaincode",codeOptionDictKey:i.codeOptionDictKey,record:i.record})),t=[...e,...r];return t.sort((i,o)=>{const u=i.record.timestamp??"";return(o.record.timestamp??"").localeCompare(u)}),t}function Bx(n,e,r,t){const i={};for(const[a,c]of Object.entries(t.cparam_values??{}))ch(c)&&(i[a]=c);for(const[a,c]of Object.entries(t.aopts))f$(c)&&(i[a]=c);const o=So(e.get_options(),i);Qp(e.config,o);const u={...n.ui,whose:"yours-plainnum"};return Te(e.config,u),{...n,optionValues:o,plainnumOptionDictKey:r,ui:u,yoursRecord:t}}function Ux(n,e,r,t){const i={};for(const[a,c]of Object.entries(t.aopts))f$(c)&&(i[a]=c);for(const a of e.get_cparams()){const c=Fe(a.id);if(c in n.optionValues){const s=n.optionValues[c];if(!ch(s))throw new Error(`Cparam ${a.id} has a non-scalar state value`);i[c]=s}}const o=So(e.get_options(),i);Qp(e.config,o);const u={...n.ui,whose:"yours-plaincode"};return Te(e.config,u),{...n,optionValues:o,codeOptionDictKey:r,ui:u,yoursCodeRecord:t}}function ch(n){const e=typeof n;return e==="string"||e==="number"||e==="boolean"}function f$(n){return ch(n)||Array.isArray(n)&&n.every(e=>typeof e=="string")}function d$(n,e){const r=[];for(const t of n.get_options()){const i=Fe(t.id),o=wr(t.id)?e.cparam_values:e.aopts,u=o==null?void 0:o[i];u!==void 0&&(!wr(t.id)&&u===t.default_value||r.push(`${i}=${h$(u)}`))}return r.join(" ")}function p$(n,e){const r=["code"];for(const t of n.get_aopts()){const i=Fe(t.id),o=e.aopts[i];o!==void 0&&o!==t.default_value&&r.push(`${i}=${h$(o)}`)}return r.join(" ")}function h$(n){return typeof n=="boolean"?n?"true":"false":String(n)}function Wx(n,e){const r=Hx(n.aid),t='<div class="yours-saved-header">Saved estimations</div>';if(r.length===0)return t+'<div class="yours-saved-empty">No saved estimations yet.</div>';const i=r.map(o=>jx(n,e,o)).join("");return t+`<div class="yours-saved-list">${i}</div>`}function jx(n,e,r){if(r.kind==="plainnum"){const u=J(d$(n,r.record)||"(default options)"),a=J(r.plainnumOptionDictKey);return`<div class="yours-saved-row${e.ui.whose==="yours-plainnum"&&r.plainnumOptionDictKey===e.plainnumOptionDictKey?" yours-saved-row-current":""}" data-kind="plainnum" data-key="${a}" role="button" tabindex="0"><span class="yours-saved-label">${u}</span><button class="yours-saved-delete" data-kind="plainnum" data-key="${a}" aria-label="Delete" title="Delete this saved estimation">×</button></div>`}const t=J(p$(n,r.record)),i=J(r.codeOptionDictKey);return`<div class="yours-saved-row yours-saved-row-code${e.ui.whose==="yours-plaincode"&&r.codeOptionDictKey===e.codeOptionDictKey?" yours-saved-row-current":""}" data-kind="plaincode" data-key="${i}" role="button" tabindex="0"><span class="yours-saved-label">${t}</span><button class="yours-saved-delete" data-kind="plaincode" data-key="${i}" aria-label="Delete" title="Delete this saved estimation">×</button></div>`}function lh(n,e,r){n.innerHTML=Wx(e,r)}const Gx=["tri","uniform","uni","beta","normal","lognormal","loguniform","t","logt","normal_trunc","lognormal_trunc","t_trunc","logt_trunc","trap","clamp","exp","log","log2","log10","sqrt"],Vx=`/**
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
`;function Xx(n){if(n.length===0)return["return {","  point:  {},","  bounds: {},","  sample: {},","};"].join(`
`);const e=n.map(i=>`${i}: 0`).join(", "),r=n.map(i=>`${i}: [0, 1]`).join(", "),t=n.map(i=>`    ${i}: tri(0, 0.4, 1),`).join(`
`);return["return {",`  point:  { ${e} },`,`  bounds: { ${r} },`,"  sample: {",t,"  },","};"].join(`
`)}function Yx(n,e){return e}function Kx(n){const e=[];for(const r of n.get_cparams()){const t=r.allowed_values;t===void 0||typeof t=="string"||e.push(r.id.slice(7))}return e}const Jx="// code data missing";function zx(n,e,r){const t=Kx(n),i=n.get_svar_bare_names(),o=`function belief_spec_for_cparam_combo(${t.join(", ")}) {`,u=e.raw_code_input!==""?e.raw_code_input:r==="edit"?Xx(i):Jx,a=r==="view"?" readonly":"",c=i.map(p=>{const h=J(Yx(n,p)),m=J(e.reasoning_response[p]??"");return`<div class="code-reasoning-row"><label class="code-reasoning-label">${h}</label><textarea class="code-reasoning-input auto-expand" data-svar="${J(p)}" rows="1" spellcheck="false"${a}>${m}</textarea></div>`}).join(""),s=J(e.misc_response),f=`// ${Gx.join(", ")} are injected helper functions. For details (warning: the literal code with some irrelevant docs): `,d=r==="edit"?'<div class="code-action-row"><button class="code-sample-btn" type="button">Sample</button><span class="code-status" aria-live="polite"></span></div><div class="code-error-area"></div><div class="result-detail">The remaining fields below are only notes for you, unless you choose to contribute your estimation to appear in the `Adhoc...` dropdown in future builds, which we strongly encourage!</div>':e.raw_code_input===""?"":`<div class="code-action-row"><button class="copy-to-yours-btn" type="button" title="Copy this entry's code into your editable Yours-plaincode code">Copy to Yours</button></div>`;return`<div class="yours-code-input" data-variant="${r}"><div class="code-editor"><pre class="code-signature-line">${J(o)}</pre><pre class="code-helpers-comment"><span class="code-helpers-comment-text">${J(f)}</span><span class="code-helpers-help-slot"></span></pre><textarea class="code-body-input auto-expand" rows="10" spellcheck="false"${a}>${J(u)}</textarea><pre class="code-signature-line">}</pre></div>`+d+'<div class="code-reasoning-section"><div class="code-section-header">Reasoning</div>'+c+`</div><div class="code-misc-section"><div class="code-section-header">Misc</div><textarea class="code-misc-input auto-expand" rows="1" spellcheck="false"${a}>${s}</textarea></div></div>`}function Qx(n){const e=()=>{n.style.height="auto",n.style.height=`${n.scrollHeight}px`};n.addEventListener("input",e),e()}function v$(n){for(const e of n.querySelectorAll("textarea.auto-expand"))Qx(e)}function x8(n,e,r,t){n.innerHTML=zx(e,r,t),v$(n),Zx(n)}function Zx(n){for(const e of n.querySelectorAll(".code-helpers-help-slot"))e.childElementCount>0||e.appendChild(dD(Vx))}const eH=1e-15;function nH(n,e){return e.filter(r=>{const t=n[r];if(typeof t=="string")return p2(t)!==null;if(!Array.isArray(t)||t.length===0)return!1;const i=t[0];return t[t.length-1][0]-i[0]<eH})}function rH(n){var r;const e={};for(const t of n){const i=t.id.startsWith("svar:")?t.id.slice(5):t.id,[o,u]=tH[t.type_mathlevel]??[!0,!0],a=((r=t.type_detail)==null?void 0:r.range)??[0,1];e[i]={lo:a[0],hi:a[1],loClosed:o,hiClosed:u}}return e}const tH={closed_real_interval:[!0,!0],left_open_real_interval:[!1,!0],right_open_real_interval:[!0,!1],open_real_interval:[!1,!1]},iH=.8,H8=.05,oH="Positive values mean…",uH=2;function aH(n,e,r){if(!e||r&&Object.keys(r).length>0)return null;const t=p7(e,n.get_svar_bare_names());return t.length<uH?null:t}function m$(n,e,r,t){var o;const i=aH(e,r,t);return i===null?null:{eligibleSvars:i,degenerateSvars:nH(((o=n.yoursRecord.trials[0])==null?void 0:o.sample)??{},i)}}function fh(n,e,r,t){return me(n.ui.whose).source!=="yours-plainnum"||n.ui.inputMode!=="sample"?null:m$(n,e,r,t)}function dh(n,e){var t;const r=n.yoursRecord;return r.lloads_draft===void 0?s9((t=r.trials[0])==null?void 0:t.lloads,e.eligibleSvars):a9(r.lloads_draft,e.eligibleSvars)}function b$(n,e,r){const t=n.get_svar_bare_names(),i=Gt(n);if(i.length!==t.length)throw new Error(`joint-dependence editor has ${t.length} subjective variables but ${i.length} display labels`);const o=new Map(t.map((u,a)=>[u,i[a]]));return new Map(r.map(u=>[u,Se(o.get(u),e)]))}function sH(n,e,r,t,i,o){const u=fh(e,r,i,o);if(u===null){n.innerHTML="";return}const a=dh(e,u);n.innerHTML=cH(a,u,b$(r,t,u.eligibleSvars),e.ui.jointDependenceEditorOpen),v$(n);const c=n.querySelector(".jde-help-slot");c&&c.appendChild(at(ID)),g$(n,a,u),_$(n,a,u,r,t)}function cH(n,e,r,t){const i=n.latents.length===0?lH():fH(n,e,r);return`<details class="joint-dependence-editor"${t?" open":""}><summary class="jde-summary"><span class="jde-summary-title">Joint dependence</span><span class="jde-summary-explainer">Optional named uncertainties shared across your distributions</span><span class="jde-status-pill"></span></summary><div class="jde-body"><div class="jde-intro"><span class="jde-help-slot"></span><p>A latent is one shared uncertainty that can move two or more of your quantities together, or in opposite directions. Describe what it means, then give it signed loadings. Nothing you state here changes the distributions you gave above.</p></div>`+i+"</div></details>"}function lH(){return'<div class="jde-empty-state"><div class="jde-empty-title">Currently sampled independently</div><p>Add a latent only when the distributions above do not tell the whole joint-belief story.</p><button class="jde-btn jde-add-latent-btn" type="button">Add a shared uncertainty</button></div>'}function fH(n,e,r){return'<div class="jde-active"><div class="jde-toolbar"><div class="jde-section-title">Shared uncertainties</div><button class="jde-btn jde-add-latent-btn" type="button">+ Add latent</button></div><div class="jde-latent-list">'+n.latents.map(dH).join("")+`</div><div class="jde-matrix-section"><div class="jde-matrix-heading"><div class="jde-section-title">Signed loadings</div><div class="jde-matrix-hint">−1 falls as the latent rises · +1 rises with it · 0 unaffected</div></div><div class="jde-matrix-scroll">${pH(n,e,r)}</div><div class="jde-banner" role="status"></div></div><div class="jde-bottom-actions"><button class="jde-btn jde-zero-loadings-btn" type="button">Zero all loadings</button><button class="jde-btn jde-remove-all-btn" type="button">Remove all latents</button></div><details class="jde-correlations"><summary>Implied pairwise correlations</summary><p class="jde-correlations-note">Derived from the loadings; feedback, not another input surface. Quantities your latents leave uncoupled are omitted.</p><div class="jde-matrix-scroll">`+vH(e,r)+'</div></details><div class="jde-artifact"><div class="jde-artifact-caption">What your response discloses:</div><div class="jde-artifact-host"></div></div></div>'}function dH(n,e){const r=`jde-latent-name-${e}`,t=`jde-latent-description-${e}`;return`<div class="jde-latent-card" data-latent-index="${e}"><div class="jde-latent-header"><span class="jde-latent-number">${e+1}</span><button class="jde-btn jde-remove-latent-btn" type="button" data-latent-index="${e}">Remove</button></div><div class="jde-latent-fields"><div class="jde-field"><label for="${r}">Short name</label><input id="${r}" class="jde-latent-text" type="text" data-latent-index="${e}" data-latent-field="name" placeholder="e.g. shared evidence quality" value="${fe(n.name)}"></div><div class="jde-field"><label for="${t}">Meaning and positive direction</label><textarea id="${t}" class="jde-latent-text auto-expand" rows="2" data-latent-index="${e}" data-latent-field="description" placeholder="${fe(oH)}">${J(n.description)}</textarea></div></div></div>`}function pH(n,e,r){const t='<tr><th class="jde-variable-col">Quantity</th>'+n.latents.map((u,a)=>`<th class="jde-loading-col"><span class="jde-matrix-latent-name" data-latent-index="${a}"></span><span class="jde-matrix-latent-hint">−1 to +1</span></th>`).join("")+'<th class="jde-budget-col">Loading budget</th></tr>',i=new Set(e.degenerateSvars),o=e.eligibleSvars.map(u=>{const a=i.has(u),c=r.get(u),s=a?'<span class="jde-svar-note">single value — no dependence possible</span>':"",l=n.latents.map((f,d)=>`<td>${hH(f.loadings[u]??null,d,u,c,a)}</td>`).join("");return`<tr data-svar="${fe(u)}" data-svar-label="${fe(y$(c))}"${a?' class="jde-row-ineligible"':""}><th scope="row" class="jde-svar-cell" data-svar="${fe(u)}"><span class="jde-svar-label">${c}</span>${s}</th>`+l+`<td><div class="jde-budget-track"><span class="jde-budget-fill" data-svar="${fe(u)}"></span></div><div class="jde-budget-copy" data-svar="${fe(u)}"></div></td></tr>`}).join("");return`<table class="jde-loading-matrix"><thead>${t}</thead><tbody>${o}</tbody></table>`}function hH(n,e,r,t,i){const o=fe(`Loading of ${y$(t)} on latent ${e+1}`),u=`data-latent-index="${e}" data-svar="${fe(r)}"${i?" disabled":""}`,a=n===null?"":E$(n);return`<div class="jde-loading-control"><input class="jde-loading-range" type="range" min="-1" max="1" step="${H8}" value="${n??0}" ${u} aria-label="${o}"><input class="jde-loading-number" type="number" min="-1" max="1" step="${H8}" value="${a}" ${u} aria-label="${o}, numeric"></div>`}function vH(n,e){const r=n.eligibleSvars,t=r.map(o=>`<th class="jde-svar-cell" data-svar="${fe(o)}"><span class="jde-svar-label">${e.get(o)}</span></th>`).join(""),i=r.map(o=>`<tr><th class="jde-svar-cell" data-svar="${fe(o)}"><span class="jde-svar-label">${e.get(o)}</span></th>`+r.map(()=>"<td></td>").join("")+"</tr>").join("");return`<table class="jde-correlation-table"><thead><tr><th></th>${t}</tr></thead><tbody>${i}</tbody></table>`}function g$(n,e,r){const t=l9(e,r.eligibleSvars,r.degenerateSvars,CH(n)),i=yA(e),o=n.querySelector(".jde-status-pill");o&&(o.className=`jde-status-pill ${mH(t,e,i)}`.trimEnd(),o.textContent=bH(t,e,i)),gH(n,e),_H(n,t),yH(n,e),EH(n,e,r),$H(n,t,e,i),wH(n,e,r)}function mH(n,e,r){return n.length>0?"invalid":r?"valid":e.latents.length>0?"warning":""}function bH(n,e,r){if(n.length>0)return`${n.length} issue${n.length===1?"":"s"}`;const t=e.latents.length;return r?`${t} latent${t===1?"":"s"} · valid`:t>0?`${t} considered · independent`:"Independent"}function gH(n,e){var r;for(const t of n.querySelectorAll(".jde-loading-range, .jde-loading-number")){if(t===document.activeElement)continue;const i=t.dataset.svar;if(i===void 0)continue;const o=((r=e.latents[Number(t.dataset.latentIndex)])==null?void 0:r.loadings[i])??null;o!==null&&(t.value=E$(o))}}function _H(n,e){const r=new Set(e.filter(i=>i.field!==void 0).map(i=>`${i.latentIndex}:${i.field}`));for(const i of n.querySelectorAll(".jde-latent-text"))i.classList.toggle("jde-field-invalid",r.has(`${i.dataset.latentIndex}:${i.dataset.latentField}`));const t=new Set(e.filter(i=>i.svar!==void 0&&i.latentIndex!==void 0).map(i=>`${i.latentIndex}:${i.svar}`));for(const i of n.querySelectorAll(".jde-loading-number"))i.classList.toggle("jde-field-invalid",t.has(`${i.dataset.latentIndex}:${i.dataset.svar}`))}function yH(n,e){var r;for(const t of n.querySelectorAll(".jde-matrix-latent-name")){const i=Number(t.dataset.latentIndex),o=(r=e.latents[i])==null?void 0:r.name.trim();t.textContent=o||`Latent ${i+1}`,t.title=t.textContent}}function EH(n,e,r){const t=c9(e,r.eligibleSvars);for(const i of n.querySelectorAll(".jde-budget-fill")){const o=t[i.dataset.svar??""];o!==void 0&&(i.style.width=`${Math.min(100,Math.max(0,o*100))}%`,i.className="jde-budget-fill"+(o>1?" over":o>iH?" near":""))}for(const i of n.querySelectorAll(".jde-budget-copy")){const o=t[i.dataset.svar??""];if(o===void 0)continue;const u=o>1;i.className=`jde-budget-copy${u?" over":""}`,i.textContent=u?`${o.toFixed(3)} / 1 · over by ${(o-1).toFixed(3)}`:`${o.toFixed(3)} / 1`}}function $H(n,e,r,t){const i=n.querySelector(".jde-banner");if(i){if(e.length>0){i.className="jde-banner invalid";const o=e.length>1?` (${e.length-1} more)`:"";i.textContent=`${e[0].message}${o} The calculator keeps using your last valid joint specification until this is repaired.`;return}if(!t){i.className="jde-banner warning",i.textContent=r.latents.length>0?"Valid, and exactly independent: the latents you named are disclosed as considered, with every loading at zero.":"Valid: sampled independently.";return}i.className="jde-banner",i.textContent="Valid joint specification. Every quantity is within its loading budget."}}function wH(n,e,r){const t=n.querySelector(".jde-correlations"),i=n.querySelector(".jde-correlation-table thead tr"),o=n.querySelector(".jde-correlation-table tbody");if(t===null||i===null||o===null)return;const u=_A(e,r.eligibleSvars),a=r.eligibleSvars.map((c,s)=>r.eligibleSvars.some((l,f)=>f!==s&&u[s][f]!==0));t.hidden=a.filter(Boolean).length<2,i.querySelectorAll("th").forEach((c,s)=>{s>0&&(c.hidden=!a[s-1])}),o.querySelectorAll("tr").forEach((c,s)=>{c.hidden=!a[s],c.querySelectorAll("td").forEach((l,f)=>{var d;l.hidden=!a[f],l.textContent=RH(((d=u[s])==null?void 0:d[f])??NaN)})})}function SH(n,e,r,t,i,o){if(n.querySelector(".joint-dependence-editor")===null)return;const u=fh(e,r,i,o);if(u===null)return;const a=b$(r,t,u.eligibleSvars);for(const c of n.querySelectorAll(".jde-svar-cell")){const s=a.get(c.dataset.svar??""),l=c.querySelector(".jde-svar-label");s!==void 0&&l!==null&&(l.innerHTML=s)}_$(n,dh(e,u),u,r,t)}function _$(n,e,r,t,i){const o=n.querySelector(".jde-artifact-host");if(o===null)return;const u=f9(e,r.eligibleSvars,r.degenerateSvars);o.innerHTML=u.kind==="invalid"?'<div class="jde-artifact-pending">Preview pauses until the issues above are repaired.</div>':B2([{point:{},bounds:{},sample:{},lloads:u.lloads}],t,i,{keepFolded:!0}).specHtml}function B8(n){const e=Number(n.dataset.latentIndex);if(!Number.isInteger(e))return null;if(n.classList.contains("jde-latent-text")){const r=n.dataset.latentField;return r!=="name"&&r!=="description"?null:{kind:"text",latentIndex:e,field:r,value:n.value}}if(n.classList.contains("jde-loading-range")||n.classList.contains("jde-loading-number")){const r=n.dataset.svar;if(r===void 0)return null;const t=n.value.trim(),i=t===""||!Number.isFinite(Number(t))?null:Number(t);return{kind:"loading",latentIndex:e,svar:r,value:i}}return null}function AH(n,e){return{latents:n.latents.map((r,t)=>t!==e.latentIndex?r:e.kind==="text"?{...r,[e.field]:e.value}:{...r,loadings:{...r.loadings,[e.svar]:e.value}})}}function LH(n){const e=n.closest("button");if(e===null)return null;if(e.classList.contains("jde-add-latent-btn"))return{kind:"add"};if(e.classList.contains("jde-zero-loadings-btn"))return{kind:"zero-all"};if(e.classList.contains("jde-remove-all-btn"))return{kind:"remove-all"};if(e.classList.contains("jde-remove-latent-btn")){const r=Number(e.dataset.latentIndex);return Number.isInteger(r)?{kind:"remove",latentIndex:r}:null}return null}function kH(n,e,r){switch(e.kind){case"add":return{latents:[...n.latents,Vh(r)]};case"remove":return{latents:n.latents.filter((t,i)=>i!==e.latentIndex)};case"zero-all":return{latents:n.latents.map(t=>({...t,loadings:Vh(r).loadings}))};case"remove-all":return{latents:[]}}}const IH=/<sup\b[^>]*\bid="fnref:[^"]*"[^>]*>[\s\S]*?<\/sup>/g;function y$(n){return n.replace(IH,"").replace(/<[^>]*>/g,"").trim()}function CH(n){const e={};for(const r of n.querySelectorAll("tr[data-svar-label]")){const t=r.dataset.svar;t!==void 0&&(e[t]=r.dataset.svarLabel)}return e}function E$(n){return String(n)}function RH(n){return Number.isFinite(n)?n===0?"0.000":`${n>0?"+":"−"}${Math.abs(n).toFixed(3)}`:"invalid"}function ph(n,e){return n??!!(e??!1)}function MH(n,e){return!ph(n,e)}function NH(n){return!De(n)}const $$="execution timed out",Mp="execution aborted";function TH(n,e){const t=(e.workerFactory??qH)();return new Promise((i,o)=>{var l,f;let u=!1;const a=()=>{var d;u=!0,clearTimeout(s),(d=e.signal)==null||d.removeEventListener("abort",c),t.terminate()},c=()=>{u||(a(),o(new Error(Mp)))};if((l=e.signal)!=null&&l.aborted){t.terminate(),o(new Error(Mp));return}(f=e.signal)==null||f.addEventListener("abort",c);const s=setTimeout(()=>{u||(a(),o(new Error($$)))},e.timeoutMs);t.addEventListener("message",d=>{u||(a(),i(d.data))}),t.addEventListener("error",d=>{u||(a(),o(new Error(d.message||"worker error")))}),t.postMessage(n)})}function qH(){return new Worker(new URL("/hirwebdev/assets/plaincode_eval_worker-DDiEqs08.js",import.meta.url),{type:"module"})}const nr={VISIBLE_AOPTS:"visible-aopts",TCHOICE:"tchoice",CPARAMS_SECTION:"cparams",TEXT_DEFINITIONS:"text-definitions",INTERPRETED_SYMBOL_SEMANTICS:"interpreted-symbols",DEFINED_SYMBOLS:"defined-symbols",AXIOMS:"axioms",SIMPLIFYING_ASSUMPTIONS:"simplifying-assumptions",SVARS:"svars",COMPUTED_FORMULAS:"formulas",FRAMING_ROOT:"framing-notes-root",FRAMING_EXPLAINER:"framing-notes-explainer",SRCQUOTE_EXPLAINER:"srcquote-explainer",CALCULATOR:"calculator"},FH={TEXT_DEFINITIONS:n=>qS(n),INTERPRETED_SYMBOL_SEMANTICS:n=>FS(n),DEFINED_SYMBOLS:n=>TS(n),AXIOMS:n=>Wh(n,{simplifying:!1}),SIMPLIFYING_ASSUMPTIONS:n=>Wh(n,{simplifying:!0}),COMPUTED_FORMULAS:n=>OS(n)},OH=`<div class="dag-legend">Each formula computes its left-hand side. <span class="dag-glyph">↖</span> marks a value computed by an earlier formula (click to jump to it); <span class="dag-glyph">↘</span> marks a left-hand side used by a later formula; hovering either highlights every occurrence of the value. Undecorated leaf names are estimated directly — each names a card in <a href="#${nr.SVARS}-section">Estimation</a> (click to jump to it).</div>`,DH="DERIVED_FORMS",PH="CALCULATOR_RESULTS",w$="stats-display-control";function xH(n){const e=new Set;for(const r of n.layout.sections.html)if("subentries"in r)for(const t of r.subentries)typeof t=="object"&&"formid"in t&&e.add(t.formid);return e}function HH(n){const e=n.config.conclusion_form,r=xH(n);return n.form.filter(t=>t.id!==e&&!r.has(t.id)).map(t=>t.id)}function BH(n,e,r){let t;if(r)t={...r,unresolvedRefs:r.unresolvedRefs??new Set,footnoteCounter:r.footnoteCounter??{n:0},footnotes:r.footnotes??[],popoverLookup:r.popoverLookup??fp(n,r.refLookup)};else{const o=S7(n),u=k7(n,C7(n,{},"plainnum"),"plainnum"),a=u.option_value_or("show_typical_examples",I7),c=u.option_value_or("srcquotes_inlined",!1),s={};for(const l of u.get_option_bare_names())s[l]=u.option_value(l);t={jprobInstance:u,showTypical:a,srcquotesInlined:c,refLookup:o,displayOptionValues:s,unresolvedRefs:new Set,footnoteCounter:{n:0},footnotes:[],popoverLookup:fp(n,o)}}const i=[];for(const o of n.layout.sections.html)i.push(UH(o,n,t));return i.push(`<div class="footnotes" id="${F7}">`),t.footnotes&&t.footnotes.length>0&&i.push(`<ol>${O7(t.footnotes)}</ol>`),i.push("</div>"),i.push(`<div class="footnotes" id="${Vp}"></div>`),{html:i.join(""),unresolvedRefs:[...t.unresolvedRefs].sort()}}function UH(n,e,r){if("chunkid"in n)return S$(n.chunkid,e,r,n.style)??"";if("subentries"in n){if(n.delegation_id!=="CALCULATOR")throw new Error("Only expected use of this currently-hacky-structured feature is for the Calculator section (delegation_id 'CALCULATOR').");const a=nr[n.delegation_id],c=n.subentries.map(s=>WH(s,e,r,n.delegation_id));return`<section id="${a}-section"><h2 id="${a}-section-header">${n.header}</h2>${c.join("")}</section>`}const{delegation_id:t,header:i}=n,o=nr[t];if(!o)throw new Error("Expected `delegation_id` field here to be an element of DelegatedLayoutEntryId.");if((t==="FRAMING_ROOT"||t==="FRAMING_EXPLAINER")&&!e.has_framing_notes()||t==="SRCQUOTE_EXPLAINER"&&!e.has_srcquotes())return"";const u=FH[t];if(u){const a=u(r),c=i!=null?`<h2 id="${o}-section">${i}</h2>`:"",s=t==="COMPUTED_FORMULAS"?OH:"";return a.trim()?c+s+a:""}return t==="FRAMING_EXPLAINER"||t==="SRCQUOTE_EXPLAINER"?`<div id="${o}-section"><div id="${o}-content"></div></div>`:`<section id="${o}-section"><h2 id="${o}-section-header">${i??""}</h2><div id="${o}-content"></div></section>`}function WH(n,e,r,t){if(typeof n=="string"){if(n===DH)return HH(e).map(a=>`<div id="derived-${Si(a)}" class="derived-form" data-form-id="${a}"></div>`).join("");const u=`${Si(t)}-${Si(n)}`;return n===PH?`<div id="${w$}"></div><div id="${u}"></div>`:`<div id="${u}"></div>`}if("chunkid"in n)return S$(n.chunkid,e,r,n.style)??"";const i=n.formid;return`<div id="${`derived-${Si(i)}`}" class="derived-form" data-form-id="${i}"></div>`}function S$(n,e,r,t){const i=e.find_textchunk_defn(n);if(i===void 0)throw new Error(`Layout references textchunk "${n}", which the jprob template does not declare`);if(!i)return null;const o=Se(i,r);switch(t){case"title":return`<h1 class="arg-title">${o}</h1>`;case"subtitle":return`<p class="arg-subtitle">${o}</p>`;case"note":return`<div class="hir-loud-note">${o}</div>`;case"warning":return`<p class="arg-warning">${o}</p>`;default:return`<div class="textchunk">${o}</div>`}}function Si(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-$/,"").replace(/^-/,"")}function jH(n,e,r,t){const{html:i}=BH(e,void 0,r);n.innerHTML=i}const fr="model_effort",Np={point:"point",bounds:"bounds",distr:"sample"},GH=Object.fromEntries(Object.entries(Np).map(([n,e])=>[e,n])),U8={inline:!0,glyph:!1},VH="inline",XH="glyph",W8={true:!0,false:!1},j8=["probability","odds"],G8=["yours-plainnum","yours-plaincode","adhoc-plainnum","adhoc-plaincode","metho-plainnum","metho-plaincode","metho-richcode"];function YH(n,e){const r={},t=[],i=n.get("response_type");if(i!==null){const l=Np[i];l!==void 0?r.inputMode=l:t.push(`response_type=${JSON.stringify(i)} invalid; expected one of: ${Object.keys(Np).join(", ")}`)}zH(n.get("whose"),n.get("preset"),e,r,t);const o=n.get("preset_query_mode");o!==null&&JH(o,e.modelParamGroups,r,t);const u=n.get("trial_index");if(u!==null){const l=L$(u);l===null?t.push(`trial_index=${JSON.stringify(u)} is not a non-negative integer`):r.assumptionTrialIndex=l}const a=n.get("prob_as_odds");a!==null&&(j8.includes(a)?r.probAsOdds=a:t.push(`prob_as_odds=${JSON.stringify(a)} invalid; expected one of: ${j8.join(", ")}`));const c=n.get("show_framing");if(c!==null){const l=W8[c];l===void 0?t.push(`show_framing=${JSON.stringify(c)} invalid; expected one of: ${Object.keys(W8).join(", ")}`):r.showFramingNotes=l}const s=n.get("srcquotes_view");if(s!==null){const l=U8[s];l===void 0?t.push(`srcquotes_view=${JSON.stringify(s)} invalid; expected one of: ${Object.keys(U8).join(", ")}`):r.srcquotesInlinedOverride=l}return KH(n,e.jprobTemplate,r,t),{overrides:r,errors:t}}function KH(n,e,r,t){const i=n.getAll("calc_pin"),o=n.getAll("calc_unpin");if(i.length===0&&o.length===0)return;const u=new Set(e.get_cparam_bare_names()),a=new Set(i.filter(s=>o.includes(s)));for(const s of a)t.push(`${JSON.stringify(s)} appears in both calc_pin and calc_unpin; skipped`);const c=u.has(fr);for(const[s,l]of[[i,!0],[o,!1]]){const f=l?"calc_pin":"calc_unpin";for(const d of s)if(!a.has(d)){if(d===fr){if(c){t.push(`${f}=${fr} is ambiguous: this jprob declares a parameter by that name, which collides with the reserved model/version/effort axis name`);continue}r.modelEffortPinned=l;continue}if(!u.has(d)){t.push(`${f}=${JSON.stringify(d)} is not a parameter of this jprob; expected one of: ${[...u,fr].join(", ")}`);continue}(r.cparamPinned??(r.cparamPinned={}))[d]=l}}}function JH(n,e,r,t){if(!_y(n)){t.push(`preset_query_mode=${JSON.stringify(n)} invalid; expected one of: all, ${Vo.join(", ")}`);return}if(n!=="all"&&!S2(e).includes(n)){t.push(`preset_query_mode=${JSON.stringify(n)} unavailable for current methodical data`);return}r.presetQueryModeFilter=n}function zH(n,e,r,t,i){if(n===null&&e===null)return;if(n===null){i.push(`preset=${JSON.stringify(e)} given without whose`);return}if(!G8.includes(n)){i.push(`whose=${JSON.stringify(n)} invalid; expected one of: ${G8.join(", ")}`);return}if(n.startsWith("yours-")){if(e!==null){i.push(`preset=${JSON.stringify(e)} incompatible with whose=${n} (preset is only valid for adhoc-* or metho-*)`);return}t.whose=n;return}if(e===null){i.push(`whose=${n} requires preset`);return}const o=L$(e);if(o===null){i.push(`preset=${JSON.stringify(e)} is not a non-negative integer`);return}const u=QH(n,o,r.presetData,r.modelParamGroups);u.error!==null?i.push(u.error):t.whose=u.whose}function QH(n,e,r,t){if(n==="adhoc-plainnum")return e>=r.adhocPlainnumEntries.length?{error:`preset=${e} out of range; ${r.adhocPlainnumEntries.length} adhoc-plainnum entr${r.adhocPlainnumEntries.length===1?"y":"ies"} available`}:{whose:`adhoc-plainnum:${e}`,error:null};if(n==="adhoc-plaincode")return e>=r.adhocPlaincodeEntries.length?{error:`preset=${e} out of range; ${r.adhocPlaincodeEntries.length} adhoc-plaincode entr${r.adhocPlaincodeEntries.length===1?"y":"ies"} available`}:{whose:`adhoc-plaincode:${e}`,error:null};if(e>=t.length)return{error:`preset=${e} out of range; ${t.length} methodical group${t.length===1?"":"s"} available`};const i=t[e],o=n.slice(6),u=A$(i,o);return u===null?{error:`preset=${e} (group: ${i.label}) has no ${o} result; available mode${i.availableModes.length===1?"":"s"}: ${i.availableModes.join(", ")}`}:{whose:`metho-${o}:${u}`,error:null}}function A$(n,e){return e==="plainnum"?n.plainnumIndex:e==="plaincode"?n.plaincodeIndex:n.richcodeIndex}function L$(n){if(n===""||/\D/.test(n))return null;const e=parseInt(n,10);return!Number.isInteger(e)||e<0?null:e}function ZH(n,e){if(typeof window>"u")return;const r=new URLSearchParams(window.location.search),{overrides:t,errors:i}=YH(r,e);for(const o of i)console.error(`[url_view_overrides] ${o}`);if(t.inputMode!==void 0&&(n.ui.inputMode=t.inputMode),t.probAsOdds!==void 0&&(n.ui.probAsOdds=t.probAsOdds),t.assumptionTrialIndex!==void 0&&(n.ui.assumptionTrialIndex=t.assumptionTrialIndex),t.presetQueryModeFilter!==void 0&&(n.ui.presetQueryModeFilter=t.presetQueryModeFilter),t.showFramingNotes!==void 0&&(n.ui.showFramingNotes=t.showFramingNotes),t.srcquotesInlinedOverride!==void 0&&(n.ui.srcquotesInlinedOverride=t.srcquotesInlinedOverride),t.modelEffortPinned!==void 0&&(n.ui.modelEffortPinned=t.modelEffortPinned),t.cparamPinned!==void 0&&Object.assign(n.ui.cparamPinned,t.cparamPinned),t.whose!==void 0){n.ui.whose=t.whose,(t.whose==="yours-plainnum"||t.whose==="yours-plaincode")&&(n.ui.lastYoursWhose=t.whose);const o=en(me(t.whose).source);o==="adhoc"?n.ui.lastAdhocWhose=t.whose:o==="metho"&&(n.ui.lastMethoWhose=t.whose)}}function eB(n,e){const{ui:r,srcquotesInlined:t}=n,{jprobTemplate:i,modelParamGroups:o}=e,u=new URLSearchParams,a=[];return u.set("response_type",GH[r.inputMode]),u.set("prob_as_odds",r.probAsOdds),u.set("trial_index",String(r.assumptionTrialIndex)),u.set("preset_query_mode",r.presetQueryModeFilter),u.set("show_framing",String(r.showFramingNotes)),i.has_srcquotes()&&u.set("srcquotes_view",t?VH:XH),nB(r.whose,o,u,a),rB(r,i,u,a),{params:u,errors:a}}function nB(n,e,r,t){const{source:i,index:o}=me(n),u=en(i);if(u==="yours"){r.set("whose",i);return}if(u==="adhoc"){r.set("whose",i),r.set("preset",String(o));return}const a=bn(i),c=e.findIndex(s=>A$(s,a)===o);if(c===-1){t.push(`no methodical group holds the current result ${JSON.stringify(n)}; omitting whose/preset from the link`);return}r.set("whose",i),r.set("preset",String(c))}function rB(n,e,r,t){const i=bn(me(n.whose).source);if(i!=="plaincode"&&i!=="richcode")return;const o=e.get_cparam_bare_names(),u=o.includes(fr);for(const a of o)a!==fr&&r.append(n.cparamPinned[a]!==!1?"calc_pin":"calc_unpin",a);if(u){t.push(`this jprob declares a parameter named ${fr}, which collides with the reserved model/version/effort axis name; omitting both from the link`);return}r.append(n.modelEffortPinned?"calc_pin":"calc_unpin",fr)}function tn(n){if(typeof window>"u")return;const e=new URL(window.location.href);if(!e.searchParams.has(n))return;e.searchParams.delete(n);const r=e.searchParams.toString(),t=`${e.pathname}${r?"?"+r:""}${e.hash}`;window.history.replaceState(null,"",t)}const k$="view-url-btn",tB="url",iB="copied ✓",oB="in address bar",uB=1200,aB="sticky-bar",sB="--sticky-bar-h",cB=["framing-notes-explainer","srcquote-explainer"],lB=Object.values(nr).filter(n=>!cB.includes(n)).map(n=>`${n}-section`),fB=2;function dB(n,e){const r=e+fB;let t=null;for(const i of n)i.top>r||(t===null||i.top>t.top)&&(t=i);return t===null?null:t.id}function pB(n=document){return dB(vB(n),hB(n))}function hB(n){var t;const e=parseFloat(((t=n.defaultView)==null?void 0:t.getComputedStyle(n.documentElement).getPropertyValue(sB))??"");if(Number.isFinite(e))return e;const r=n.getElementById(aB);return r===null?0:r.getBoundingClientRect().bottom}function vB(n){const e=[];for(const r of lB){const t=n.getElementById(r);if(t===null)continue;const i=t.getBoundingClientRect();i.width===0&&i.height===0||e.push({id:r,top:i.top})}return e}function mB(n,e,r){const t=e.toString(),i=r===null?"":`#${encodeURIComponent(r)}`;return`${n.origin}${n.pathname}${t?"?"+t:""}${i}`}function bB(n,e,r=document){const{params:t,errors:i}=eB(n,e),o=pB(r);return{href:mB(new URL(r.location.href),t,o),errors:i}}function V8(n,e){n.textContent=e,setTimeout(()=>{n.textContent=tB},uB)}async function gB(n,e,r){var o;const{href:t,errors:i}=bB(e,r);for(const u of i)console.error(`[view_share_link] ${u}`);window.history.replaceState(null,"",t);try{if(!((o=navigator.clipboard)!=null&&o.writeText))throw new Error("Clipboard access is unavailable in this browser.");await navigator.clipboard.writeText(t),V8(n,iB)}catch(u){console.error("[view_share_link] copying the view link failed",u),V8(n,oB)}}const _B={point:"point",bounds:"bounds",sample:"distribution"},yB="timeline-nav",EB="jprob-selector",I$="jprob-selector-select",C$="error-console-btn";function $B(n,e,r,t){LB(n),CB(n,r),AB(e),SB(t)}function wB(n,e,r,t){const i=new Set(n.map(c=>c.aid)),o=[],u=new Set;let a=r;for(const c of n){const s=c.family;if(s===void 0){o.push({label:c.aid,value:c.aid});continue}if(u.has(s))continue;u.add(s);const l=e[s]??[];let f=c.aid;for(let d=l.length-1;d>=0;d--)if(i.has(l[d].aid)){f=l[d].aid;break}o.push({label:s,value:f}),s===t&&(a=f)}return{options:o,selectedValue:a}}function SB(n,e=wD(),r=SD()){const t=document.getElementById(EB);if(!t)return;const{options:i,selectedValue:o}=wB(e,r,n.currentAid,n.currentFamily);if(i.length<=1){t.hidden=!0,t.innerHTML="";return}t.hidden=!1;const u=i.map(a=>`<option value="${a.value}"${a.value===o?" selected":""}>${a.label}</option>`).join("");t.innerHTML=`<select id="${I$}" class="jprob-selector-select" title="Switch to another problem">${u}</select>`}function AB(n){const e=document.getElementById(yB);if(!e)return;const{prev:r,next:t,version:i}=n;if(r===void 0&&t===void 0){e.hidden=!0,e.innerHTML="";return}e.hidden=!1;const o=[];r!==void 0&&o.push(`<button class="timeline-nav-btn" data-timeline-target="${r}" title="Previous version">◀</button>`),o.push(`<span class="timeline-version">${i??""}</span>`),t!==void 0&&o.push(`<button class="timeline-nav-btn" data-timeline-target="${t}" title="Next version">▶</button>`),e.innerHTML=o.join("")}function LB(n){const e=document.getElementById("options-controls");if(!e)return;const r=e.classList.contains("options-panel-open");let i=`<button class="options-expand-btn${r?" active":""}" id="options-expand-btn">settings ${r?"▴":"▾"}</button>`;i+=`<div class="options-panel${r?" visible":""}">`,i+=MB(n),i+=`<div class="options-buttons-row"><button id="${k$}" class="g-btn" title="Copy a link to this view (and put it in the address bar)">url</button> <button id="keymap-btn" class="g-btn">keymap</button> <button id="${C$}" class="g-btn">error console</button> <button id="save-all-data-btn" class="g-btn">save all data</button> <button id="load-all-data-btn" class="g-btn">load all data</button></div>`,i+="</div>",e.innerHTML=i,r&&e.classList.add("options-panel-open")}function kB(){const n=document.getElementById("options-controls");if(!n)return;n.classList.toggle("options-panel-open");const e=n.querySelector(".options-expand-btn"),r=n.querySelector(".options-panel");if(!e||!r)return;const t=n.classList.contains("options-panel-open");e.textContent=t?"settings ▴":"settings ▾",e.classList.toggle("active",t),r.classList.toggle("visible",t)}function IB(){const n=document.getElementById("options-controls");if(!n||!n.classList.contains("options-panel-open"))return;n.classList.remove("options-panel-open");const e=n.querySelector(".options-expand-btn"),r=n.querySelector(".options-panel");e&&(e.textContent="settings ▾",e.classList.remove("active")),r&&r.classList.remove("visible")}function CB(n,e){const r=document.getElementById("response-type-toggle");r&&R$(r,n,e)}function R$(n,e,r){const t=[];for(const[i,o]of Object.entries(_B)){const u=i===e.ui.inputMode?" active":"",a=r[i]?"":" hidden";t.push(`<button class="atog-btn${u}${a}" data-mode="${i}">${o}</button>`)}n.innerHTML="<span>response type</span>"+t.join("")}const RB=new Set(["inputMode"]);function MB(n){const e=[];for(const r of Gp)if(!RB.has(r.id)){if(r.type==="boolean"){const t=r.id,i=n.ui[t]?" checked":"";e.push(`<div class="options-pref-row"><label for="pref-${r.id}" class="option-label">${r.description}</label><input id="pref-${r.id}" class="option-checkbox pref-checkbox" type="checkbox" data-pref="${r.id}"${i}></div>`)}else if(r.type==="integer"){const i=cn()[r.id]??r.default,o=r.min===void 0?"":` min="${r.min}"`,u=r.step===void 0?"":` step="${r.step}"`;e.push(`<div class="options-pref-row"><label for="pref-${r.id}" class="option-label">${r.description}</label><input id="pref-${r.id}" class="pref-number-input" type="number" data-pref-int="${r.id}" value="${i}"${o}${u}></div>`)}}return e.join("")}const X8="keymap-popover",NB=70,TB=620,qB=16;function FB(){return st}function OB(n){const e=window.innerWidth,r=window.innerHeight,t=Math.min(TB,Math.round(e*NB/100)),i=r-2*qB;n.style.width=`${t}px`,n.style.maxHeight=`${i}px`;const o=Math.min(n.offsetHeight,i);n.style.left=`${Math.round((e-t)/2)}px`,n.style.top=`${Math.round((r-o)/2)}px`}function Ai(n,e){n.classList.toggle("keymap-row-invalid",e!=="");const r=n.querySelector(".keymap-error");r&&(r.textContent=e)}function DB(n){const e=ct();n.innerHTML="";for(const r of FB()){const t=document.createElement("div");t.className="keymap-row";const i=document.createElement("label");i.className="keymap-label",i.htmlFor=`keymap-input-${r.id}`,i.textContent=r.description;const o=document.createElement("input");o.id=`keymap-input-${r.id}`,o.className="keymap-input",o.type="text",o.maxLength=1,o.autocomplete="off",o.spellcheck=!1,o.value=e[r.id]??"",o.dataset.shortcutId=r.id,o.setAttribute("aria-label",`${r.description} shortcut key`);const u=document.createElement("div");u.className="keymap-error",o.addEventListener("input",()=>{const a=o.dataset.shortcutId,c=O2(o.value);if(!c.ok){Ai(t,c.error??"Invalid shortcut key.");return}const s=lE(a,c.key);if(s){const f=st.find(d=>d.id===s);Ai(t,`Already assigned to "${(f==null?void 0:f.description)??s}".`);return}const l=mD(a,c.key);if(!l.ok){Ai(t,l.error??"Invalid shortcut key.");return}o.value=l.key,Ai(t,"")}),t.appendChild(i),t.appendChild(o),t.appendChild(u),n.appendChild(t)}}function PB(){var o;(o=document.getElementById(X8))==null||o.remove();const n=document.createElement("div");n.id=X8,n.className="keymap-popover",n.tabIndex=-1;const e=document.createElement("button");e.className="help-widget-close",e.type="button",e.textContent="×",e.setAttribute("aria-label","Close");const r=document.createElement("h3");r.className="keymap-title",r.textContent="Keymap";const t=document.createElement("div");t.className="keymap-body",DB(t);function i(){n.remove()}e.addEventListener("click",i),n.addEventListener("keydown",u=>{u.key==="Escape"&&i()}),n.appendChild(e),n.appendChild(r),n.appendChild(t),document.body.appendChild(n),OB(n),n.focus()}const Tp="stats-display-select",xB=["probability","odds"],HB="Mean, median, and credible interval probabilities displayed as odds",BB="Computed probabilities displayed as odds";function UB(n){const e=bn(me(n.ui.whose).source);return e==="plaincode"||e==="richcode"||n.ui.inputMode==="sample"}function WB(n){return n?Object.values(n).some(e=>e.typeHighlevel==="probability"):!1}function jB(n,e,r){if(!WB(r)){n.innerHTML="";return}const t=e.ui.probAsOdds,i=xB.map(a=>`<option value="${a}"${a===t?" selected":""}>${a}</option>`).join(""),o=UB(e)?HB:BB,u=t==="odds"?`<p class="stats-display-odds-note"><strong>${o}</strong></p>`:"";n.innerHTML=`<div class="stats-display-row"><label for="${Tp}">stats display</label><select id="${Tp}">${i}</select></div>`+u}const GB="framingnote",VB=":scope > .framing-note-summary > .framing-note-content",go="framing-note-abbreviable",hh="framing-note-abbreviated",vh="framing-note-abbrev-tail",M$="framing-note-abbrev-control",mh="framing-note-abbrev-toggle",XB="framing-note-abbrev-expand",YB="framing-note-abbrev-collapse",KB="more",JB="abbrev",zB="…",QB=20,ZB=.5,N$=[hp,B7],eU=[...N$,"text-blockquote","srcquotes-inline"],nU="a, .ref-popover, .symbol-ref-name, .littlefoot, .lf-zero, .srcquote-widget",rU="littlefoot",tU=`<span class="${M$} ${XB}">${zB}<button class="${mh}">${KB}</button></span>`,iU=`<button class="${M$} ${mh} ${YB}">${JB}</button>`;function oU(n,{thresholdChars:e,startAbbreviated:r}){if(!Number.isFinite(e)||e<1)return;const t=[];for(const i of n.querySelectorAll(`.${GB}`)){if(i.classList.contains(go))continue;const o=i.querySelector(VB);if(o===null)continue;const{totalChars:u,cut:a}=lU(sU(o),e);a===null||u<=e||u-a.headChars<e*ZB||t.push({note:i,content:o,cut:a})}for(const{note:i,content:o,cut:u}of t){const a=dU(u,o);mU(a,o).insertAdjacentHTML("afterend",tU),bU(o).insertAdjacentHTML("beforeend",iU),i.classList.add(go),i.classList.toggle(hh,r)}}function uU(n,e){for(const r of n.querySelectorAll(`.${go}`))r.classList.toggle(hh,e)}function aU(n){const e=n.closest(`.${go}`);e!==null&&e.classList.toggle(hh)}function sU(n){const e=[],r=t=>{for(const i of t.childNodes)i.nodeType===Node.TEXT_NODE?e.push(i):i.nodeType===Node.ELEMENT_NODE&&!cU(i)&&r(i)};return r(n),e}function cU(n){return n.hasAttribute("hidden")||n.localName==="svg"?!0:getComputedStyle(n).display==="none"}function lU(n,e){let r=0,t=!0,i=null;for(const o of n)for(let u=0;u<o.data.length;u++){const a=fU(o.data[u]);a&&t||(t=a,r++,i===null&&r===e&&(i={node:o,offset:u+1,headChars:r}))}return{totalChars:r,cut:i}}function fU(n){return n.trim()===""}function dU(n,e){const r=pU(n.node,e);let t;r!==null?(r.classList.add(vh),t=r):t=T$(n.node.splitText(hU(n.node.data,n.offset)));let i=t;for(;i.parentNode!==null&&i!==e;){const o=[];for(let u=i.nextSibling;u!==null;u=u.nextSibling)o.push(u);for(const u of o)vU(u);i=i.parentNode}return t}function pU(n,e){let r=null;for(let t=n.parentElement;t!==null&&t!==e;t=t.parentElement)t.matches(nU)&&(r=t);return r}function hU(n,e){const r=n.lastIndexOf(" ",e);return r<=0||e-r>QB?e:r}function vU(n){n.nodeType===Node.ELEMENT_NODE?n.classList.add(vh):n.nodeType===Node.TEXT_NODE&&T$(n)}function T$(n){const e=document.createElement("span");return e.className=vh,n.parentNode.insertBefore(e,n),e.appendChild(n),e}function mU(n,e){let r=n,t=r.parentElement;for(;t!==null&&t!==e&&!gU(t);)r=t,t=r.parentElement;const i=r.nextElementSibling;return i!==null&&i.classList.contains(rU)?i:r}function bU(n){const e=n.lastElementChild;return e!==null&&N$.some(r=>e.classList.contains(r))?e:n}function gU(n){return eU.some(e=>n.classList.contains(e))}const _U="srcquote-explainer",yU="srcquote-explainer",ep="srcquote-pinned";function EU(){return so[_U]}function $U(n,e,r){n.innerHTML=`<div class="${yU}"><span class="${U7}">`+Se(EU(),r)+"</span></div>"}function np(n,e){const r=n.querySelector(`.${j7}`),t=n.querySelector(`.${Xp}`);r&&(r.hidden=!e),t&&t.setAttribute("aria-expanded",String(e))}function rp(n){return n instanceof Element?n.closest(`.${W7}`):null}function wU(n,e){return e instanceof Node&&n.contains(e)}function SU(){const n=t=>{const i=rp(t.target);i&&np(i,!0)},e=t=>{const i=rp(t.target);i&&(wU(i,t.relatedTarget)||i.classList.contains(ep)||np(i,!1))},r=t=>{const i=t.target,o=i instanceof Element?i.closest(`.${Xp}`):null;if(!o)return;const u=rp(o);if(!u)return;const a=!u.classList.contains(ep);u.classList.toggle(ep,a),np(u,a)};return document.addEventListener("mouseover",n),document.addEventListener("mouseout",e),document.addEventListener("focusin",n),document.addEventListener("focusout",e),document.addEventListener("click",r),()=>{document.removeEventListener("mouseover",n),document.removeEventListener("mouseout",e),document.removeEventListener("focusin",n),document.removeEventListener("focusout",e),document.removeEventListener("click",r)}}const AU="dag-highlight";function Y8(n,e){var o;const r=(o=n.closest(`.${dp}`))==null?void 0:o.getAttribute(xi);if(!r)return;const t=r.replace(/[\\"]/g,"\\$&"),i=document.querySelectorAll(`[${xi}="${t}"]`);for(const u of i)u.classList.toggle(AU,e)}function LU(){const n=e=>{const r=e.target;return r instanceof Element?r.closest(`.${pp}`):null};document.addEventListener("mouseover",e=>{const r=n(e);r&&Y8(r,!0)}),document.addEventListener("mouseout",e=>{const r=n(e);r&&Y8(r,!1)})}function K8(n,e,r){if(r==="Bool"&&e.type==="checkbox")return e.checked===!0;const t=jp(n,e.value);if(typeof t=="object")throw new Error(`Invalid scalar control parser use for ${n.id}`);return t}function kU(n,e){const r=e.map(t=>{if(t.type!=="checkbox")throw new Error(`Invalid MultiStringFromSet control for ${n.id}: expected checkbox`);return t.checked===!0?t.value:void 0}).filter(t=>t!==void 0);return jp(n,r)}function bh(n,e){let r=`<span class="cparam-or-aopt-name">${J(n)}</span>`;return e.longname&&(r+=` <span class="cparam-or-aopt-longname">(${J(e.longname)})</span>`),r}function _o(n,e,r,t,i){const o=`${t.dataAttribute}="${fe(n)}"`;if(i==="StringFromSet"){if(!Array.isArray(e.allowed_values))throw new Error(`StringFromSet option ${e.id} is missing allowed_values`);const s=e.allowed_values.map(l=>{const f=String(l),d=f===String(r)?" selected":"";return`<option value="${fe(f)}"${d}>${J(f)}</option>`}).join("");return`<select class="${t.selectClass}" ${o}>${s}</select>`}if(i==="Number")return`<input class="${t.inputClass}" type="number" ${o} value="${fe(String(r))}">`;if(i==="Bool"){const s=r?" checked":"";return`<input class="${t.checkboxClass??t.inputClass}" type="checkbox" ${o}${s}>`}if(i==="FreeString")return`<input class="${[t.inputClass,t.textInputClass].filter(Boolean).join(" ")}" type="text" ${o} value="${fe(String(r))}">`;if(!Array.isArray(e.allowed_values))throw new Error(`MultiStringFromSet option ${e.id} is missing allowed_values`);if(!Array.isArray(r))throw new Error(`MultiStringFromSet option ${e.id} has a non-array current value`);const u=new Set(r),a=t.checkboxClass??t.inputClass,c=e.allowed_values.map(s=>{if(typeof s!="string")throw new Error(`MultiStringFromSet option ${e.id} has a non-string allowed value`);const l=u.has(s)?" checked":"";return`<label><input class="${a}" type="checkbox" ${o} value="${fe(s)}"${l}> <span>${J(s)}</span></label>`}).join("");return`<span class="${t.checkboxGroupClass??""}">${c}</span>`}const IU="Parameters",CU="Fixed Parameters",RU="Free Parameters";function MU(n,e,r,t,i,o,u){const a=n.filter(up);if(a.length===0)return{headerText:"",bodyHtml:""};const{source:c}=me(e),s=bn(c)!=="plainnum",l=en(c)==="yours",f=s?RU:l?IU:CU,d=t??J;let p="";if(!s&&i&&o){const m=NU(a,r);m!==null&&!i(m)&&(p=`<p class="arg-warning">${d(o)}</p>`)}const h=[];for(const m of a){const v=Fe(m.id),b=d(m.defn),g=(u==null?void 0:u(m))??{atStart:"",atEnd:""},_=r[v]??m.default_value;if(typeof _=="object")throw new Error(`Cparam ${m.id} has a non-scalar current value`);let y=bh(v,m);s||(l?y+=" = "+TU(v,m,_):y+=` <span class="cparam-or-aopt-value">= ${J(String(_))}</span>`),h.push(`<div class="cparam-or-aopt" id="opt-${v}"><div class="cparam-or-aopt-header">${y}</div><div class="cparam-or-aopt-defn">${g.atStart}${b}${g.atEnd}</div></div>`)}return{headerText:f,bodyHtml:p+h.join("")}}function NU(n,e){const r={};for(const t of n){const i=Fe(t.id),o=e[i]??t.default_value,u=Number(o);if(!Number.isFinite(u))return null;r[i]=u}return r}function TU(n,e,r){if(Array.isArray(e.allowed_values)||typeof e.default_value=="number"){const t=Array.isArray(e.allowed_values)?"StringFromSet":"Number";return _o(n,e,r,{dataAttribute:"data-cparam-body",selectClass:"cparam-body-select",inputClass:"cparam-body-input"},t)}return`<span class="cparam-or-aopt-value">${J(String(r))}</span>`}function qU(n,e,r,t,i,o){const{headerText:u,bodyHtml:a}=MU(e.get_cparams(),t.ui.whose,r.displayOptionValues,l=>Se(l,r),i,o,l=>Ln(l.srcquotes,r)),c=document.getElementById("cparams-section");if(!a){n.innerHTML="",c&&(c.hidden=!0);return}c&&(c.hidden=!1);const s=document.getElementById("cparams-section-header");s&&(s.textContent=u),n.innerHTML=a}const FU=["VISIBLE_AOPTS"],OU={dataAttribute:"data-aopt-body",selectClass:"aopt-body-select",inputClass:"aopt-body-input",textInputClass:"aopt-body-text-input",checkboxClass:"aopt-body-checkbox",checkboxGroupClass:"aopt-body-checkbox-group"};function DU(n,e,r,t=J,i){const o=De(e),u=[];for(const a of n){if(!Hp(a))continue;const c=Fe(a.id),s=r[c]??a.default_value,l=(i==null?void 0:i(a))??{atStart:"",atEnd:""};let f=bh(c,a);const d=a.input_type==="MultiStringFromSet"?1:2,p=Array.isArray(a.allowed_values)&&a.allowed_values.length>=d;if(o&&(p||a.allowed_values===void 0))f+=" = "+_o(c,a,s,OU,a.input_type);else{const m=Array.isArray(s)?s.join(", "):String(s);f+=` <span class="cparam-or-aopt-value">= ${J(m)}</span>`}u.push(`<div class="cparam-or-aopt" id="opt-${fe(c)}"><div class="cparam-or-aopt-header">${f}</div><div class="cparam-or-aopt-defn">${l.atStart}${t(a.defn)}${l.atEnd}</div></div>`)}return u.join("")}function PU(n,e,r,t,i){const o=DU(r.get_aopts(),i.ui.whose,t.displayOptionValues,a=>Se(a,t),a=>Ln(a.srcquotes,t)),u=document.getElementById(`${nr[e]}-section`);if(!o){n.innerHTML="",u&&(u.hidden=!0);return}u&&(u.hidden=!1),n.innerHTML=o}const xU=2,HU="(no recorded choice)",q$="data-tchoice-recorded",J8={dataAttribute:"data-tchoice-body",selectClass:"tchoice-body-select",inputClass:"tchoice-body-input",checkboxClass:"tchoice-body-checkbox"};function BU(n){return n.input_type==="Bool"||n.allowed_values.length>=xU}function z8(n,e,r){var i;const t=(i=n[e])==null?void 0:i[r];return t===void 0?"":String(t)}function F$(n){return n===""?HU:n}function UU(n,e,r){const t=e.map((u,a)=>`data-trial-${a}="${fe(z8(e,a,n))}"`).join(" "),i=z8(e,r,n);return`<span class="tchoice-recorded${i===""?" tchoice-recorded-empty":""}" ${q$}="${fe(n)}" ${t}>${J(F$(i))}</span>`}function WU(n,e,r,t={}){const{resultChoicesPerTrial:i,activeTrial:o=0,processDefn:u=J,renderSrcquotes:a}=t,c=[],s=(i==null?void 0:i.length)??0;for(const l of n){const f=Rt(l.id),d=(a==null?void 0:a(l))??{atStart:"",atEnd:""};let p=bh(f,l);const h=m7(l),v=Hr(l)&&BU(l)||h,b=e&&v,g=!e&&v&&i!==void 0&&i.some(y=>y[f]!==void 0);let _="";if(b&&h){const y=r[f]??"";p+=" = "+_o(f,l,y,J8,"Number")}else if(b&&Hr(l)){const y=r[f]??l.default_value;p+=" = "+_o(f,l,y,J8,l.input_type)}else g?(p+=" = "+UU(f,i,o),s>1&&(_=Q2(s,o))):Hr(l)&&(_=`<div class="tchoice-allowed">One of: ${l.allowed_values.map(E=>J(String(E))).join(", ")}</div>`);c.push(`<div class="cparam-or-aopt" id="tchoice-${fe(f)}"><div class="cparam-or-aopt-header">${p}</div><div class="cparam-or-aopt-defn">${d.atStart}${u(l.defn)}${d.atEnd}</div>`+_+"</div>")}return c.join("")}function jU(n){return(bn(me(n.ui.whose).source)==="plaincode"?n.yoursCodeRecord:n.yoursRecord).trial_choices??{}}function GU(n,e,r,t,i){const o=e.get_tchoice_decls(),u=De(t.ui.whose),a=z2((i==null?void 0:i.length)??0,t.ui.assumptionTrialIndex),c=WU(o,u,jU(t),{resultChoicesPerTrial:u?void 0:i,activeTrial:a,processDefn:l=>Se(l,r),renderSrcquotes:l=>Ln(l.srcquotes,r)}),s=document.getElementById(`${nr.TCHOICE}-section`);if(!c){n.innerHTML="",s&&(s.hidden=!0);return}s&&(s.hidden=!1),n.innerHTML=c}function VU(n,e){for(const r of n.querySelectorAll(".assumption-trial-btn"))r.classList.toggle("active",r.dataset.trial===String(e));for(const r of n.querySelectorAll(`[${q$}]`)){const t=r.getAttribute(`data-trial-${e}`)??"";r.textContent=F$(t),r.classList.toggle("tchoice-recorded-empty",t==="")}}function XU(n,e){if(n.input_type==="Bool"){if(e.type!=="checkbox")throw new Error(`Bool tchoice ${n.id} expected a checkbox control`);return e.checked===!0}if(n.input_type==="Number"){const r=Number(e.value);if(!Number.isFinite(r))throw new Error(`Invalid numeric tchoice value for ${n.id}: ${e.value}`);return r}return e.value}function YU(n,e){if(e.value.trim()==="")return null;const r=Number(e.value);if(!Number.isFinite(r))return null;const[t]=pr([n]);return Ni(t,r)?r:null}function O$(n,e,r){if(e===void 0)return null;if(e!=="claudecode"&&e!=="codex")return`${r} carries invalid agent_cli ${JSON.stringify(e)}`;if(typeof n!="string")return`${r} carries agent_cli ${JSON.stringify(e)} without a model family`;let t;try{t=JD(n)}catch(i){return`${r} carries agent_cli ${JSON.stringify(e)} for unknown model ${JSON.stringify(n)}: ${String(i)}`}return e!==t?`${r} model ${JSON.stringify(n)} carries agent_cli ${JSON.stringify(e)}; expected ${JSON.stringify(t)}`:null}function KU(n){if(n===void 0)return null;for(let e=0;e<n.length;e++){const r=n[e],t=O$(r.model,r.agent_cli,`trial_metadata[${e}]`);if(t!==null)return t}return null}function JU(n){return"aggregate"in n&&n.aggregate!==void 0?KU(n.trial_metadata):O$(n.model,n.agent_cli,"result")}function tp(n,e,r){const t=[];for(const i of n){const o=JU(i);if(o===null){t.push(i);continue}const u=`methodical ${e} provenance mismatch for ${JSON.stringify(i.label)}: ${o}`;console.warn(`omitting ${u}`)}return t}const zU=["yours","adhoc","metho"];function QU(n,e,r){const t=e.adhocPlainnumEntries.length>0||e.adhocPlaincodeEntries.length>0,i=r.length>0,o=["yours"];if(t&&o.push("adhoc"),i&&o.push("metho"),o.length<2)return null;const u=en(me(n.whose).source);if(!zU.includes(u))throw new Error(`nextWhoseForModeCycle: unrecognized whose ${JSON.stringify(n.whose)}`);const a=o.indexOf(u),c=o[(a+1)%o.length];return c==="yours"?n.lastYoursWhose:c==="adhoc"?Q8(n.lastAdhocWhose,"adhoc",e)?n.lastAdhocWhose:ZU(e):Q8(n.lastMethoWhose,"metho",e)?n.lastMethoWhose:yy(r,n.presetQueryModeFilter)}function ZU(n){for(const e of V7)if(X7(n,e).length>0)return`adhoc-${e}:0`;throw new Error("firstAdhocWhose: adhoc mode reached with no adhoc entries")}function Q8(n,e,r){return!n||en(me(n).source)!==e?!1:ze(n,r)!==null}function eW(n,e){for(const r of n.querySelectorAll(`.${lp}`)){const t=r.dataset.bareid,i=r.dataset.mname;if(t===void 0||i===void 0)throw new Error("Toggleable symbol ref is missing data-bareid or data-mname.");r.textContent=e?i:t}}function sr(n,e){n.classList.add(e)}function cr(n,e){n.classList.remove(e)}function Z8(n,e){return n.classList.contains(e)}const D$="littlefoot__tooltip";function P$(n,e){var r,t;return((t=(r=n.ownerDocument)===null||r===void 0?void 0:r.defaultView)!==null&&t!==void 0?t:window).getComputedStyle(n).getPropertyValue(e)||""}function gh(n,e){const r=Number.parseFloat(P$(n,e));return Number.isNaN(r)?0:r}function qp(n){const e=gh(n,"margin-left"),r=n.offsetWidth-e;return(n.getBoundingClientRect().left+r/2)/window.innerWidth}function nW(n,e,r){const[t,i]=(function(o,u){const a=gh(u,"margin-top"),c=2*a+u.offsetHeight,s=o.getBoundingClientRect().top+o.offsetHeight/2,l=window.innerHeight-s;return l>=c||l>=s?["below",l-a-15]:["above",s-a-15]})(e,n);if(r!==t){cr(n,"is-"+r),sr(n,"is-"+t);const o=100*qp(e)+"%",u=t==="above"?"100%":"0";n.style.transformOrigin=o+" "+u}return[t,i]}const yt="is-active",Et="is-changing",e7="is-scrollable";function rW({id:n,button:e,content:r,host:t,popover:i,wrapper:o}){let u=0,a="above";const c=()=>document.body.contains(i);return{id:n,activate:s=>{e.setAttribute("aria-expanded","true"),sr(e,Et),sr(e,yt),e.insertAdjacentElement("afterend",i),i.style.maxWidth=document.body.clientWidth+"px",u=(function(l){const f=P$(l,"max-height");if(f===""||f==="none")return Number.POSITIVE_INFINITY;const d=Number.parseFloat(f);return Number.isNaN(d)?Number.POSITIVE_INFINITY:Math.round(d)})(r),s==null||s(i,e)},dismiss:s=>{e.setAttribute("aria-expanded","false"),sr(e,Et),cr(e,yt),cr(i,yt),s==null||s(i,e)},isActive:()=>Z8(e,yt),isReady:()=>!Z8(e,Et),ready:()=>{sr(i,yt),cr(e,Et)},remove:()=>{i.remove(),cr(e,Et)},reposition:()=>{if(c()){const[s,l]=nW(i,e,a);a=s,r.style.maxHeight=Math.min(u,l)+"px",i.offsetHeight<r.scrollHeight?(sr(i,e7),r.setAttribute("tabindex","0")):(cr(i,e7),r.removeAttribute("tabindex"))}},resize:()=>{c()&&(i.style.left=(function(s,l){const f=s.offsetWidth;return-qp(l)*f+gh(l,"margin-left")+l.offsetWidth/2})(r,e)+"px",o.style.maxWidth=r.offsetWidth+"px",(function(s,l){const f=s.querySelector("."+D$);f&&(f.style.left=100*qp(l)+"%")})(i,e))},destroy:()=>t.remove()}}function Fp(n,e=0){let r,t=0;return function(...i){const o=Date.now(),u=Math.max(0,t+e-o);if(u===0)return t=o,void n.apply(this,i);r!==void 0&&window.clearTimeout(r),r=window.setTimeout((()=>{t=Date.now(),r=void 0,n.apply(this,i)}),u)}}const n7="is-fully-scrolled",tW=n=>e=>{const r=e.currentTarget,t=-e.deltaY;t>0&&cr(n,n7),r&&t<=0&&t<r.clientHeight+r.scrollTop-r.scrollHeight&&sr(n,n7)},x$="littlefoot__content",H$="littlefoot__wrapper",yo="littlefoot--print",B$=(...n)=>n.forEach((e=>{sr(e,yo)}));function Ct(n,e){return Array.from(n.querySelectorAll(e))}function r7(n,e){return n.querySelector("."+e)||n.firstElementChild||n}function Op(n){const e=document.createElement("div");e.innerHTML=n;const r=e.firstElementChild;return r.remove(),r}function iW(n){return n!==void 0}function U$(n){const e=n.parentElement,r=Ct(e,":scope > :not(."+yo+")"),t=r.filter((i=>i.tagName==="HR"));r.length===t.length&&(B$(...t.concat(e)),U$(e))}function W$(n,e){const r=n.parentElement;n.remove(),r&&r!==e&&!r.innerHTML.replace(/(\[\]|&nbsp;|\s)/g,"")&&W$(r,e)}function oW([n,e,r],t){const i=Op(r.outerHTML);Ct(i,'[href$="#'+n+'"]').forEach((u=>{W$(u,i)}));const o=i.innerHTML.trim();return[e,r,{id:String(t+1),number:t+1,reference:"lf-"+n,content:o.startsWith("<")?o:"<p>"+o+"</p>"}]}function t7(n){return e=>n.replace(/<%=?\s*(\w+?)\s*%>/g,((r,t)=>{var i;return String((i=e[t])!==null&&i!==void 0?i:"")}))}function uW(n,e){const r=t7(n),t=t7(e);return([i,o])=>{const u=o.id,a=Op('<span class="littlefoot">'+r(o)+"</span>"),c=a.firstElementChild;c.setAttribute("aria-expanded","false"),c.dataset.footnoteButton="",c.dataset.footnoteId=u;const s=Op(t(o));s.dataset.footnotePopover="",s.dataset.footnoteId=u;const l=r7(s,H$),f=r7(s,x$);return(function(d,p){d.addEventListener("wheel",Fp(tW(p),16))})(f,s),i.insertAdjacentElement("beforebegin",a),{id:u,button:c,host:a,popover:s,content:f,wrapper:l}}}function aW({allowDuplicates:n,anchorParentSelector:e,anchorPattern:r,buttonTemplate:t,contentTemplate:i,footnoteSelector:o,numberResetSelector:u,scope:a}){const c=(function(s,l,f){return Ct(s,f+' a[href*="#"]').filter((d=>(d.href+d.rel).match(l)))})(document,r,a).map((function(s,l,f,d){const p=[];return h=>{var m;const v=h.href.split("#")[1];if(!v)return;const b=(m=Ct(s,"#"+window.CSS.escape(v)).find((_=>l||!p.includes(_))))===null||m===void 0?void 0:m.closest(d);if(!b)return;p.push(b);const g=h.closest(f)||h;return[g.id||h.id,g,b]}})(document,n,e,o)).filter(iW).map(oW).map(u?(function(s){let l=0,f=null;return([d,p,h])=>{const m=d.closest(s);return l=f===m?l+1:1,f=m,[d,p,Object.assign(Object.assign({},h),{number:l})]}})(u):s=>s).map((([s,l,f])=>(B$(s,l),U$(l),[s,f]))).map(uW(t,i)).map(rW);return{footnotes:c,unmount(){c.forEach((s=>{s.destroy()})),Ct(document,"."+yo).forEach((s=>{cr(s,yo)}))}}}const Dp="[data-footnote-id]",Pp=(n,e)=>n.target.closest(e),j$=n=>n==null?void 0:n.dataset.footnoteId,i7=n=>e=>{e.preventDefault();const r=Pp(e,Dp),t=j$(r);t&&n(t)},$t=document.addEventListener,o7=window.addEventListener,u7=(n,e,r,t)=>$t(n,(i=>{const o=i.target;o!=null&&o.closest(e)&&r.call(o,i)}),t),sW={activateDelay:100,activateOnHover:!1,allowDuplicates:!0,allowMultiple:!1,anchorParentSelector:"sup",anchorPattern:/(fn|footnote|note)[:\-_\d]/gi,dismissDelay:100,dismissOnUnhover:!1,dismissOnDocumentTouch:!0,footnoteSelector:"li",hoverDelay:250,numberResetSelector:"",scope:"",contentTemplate:`<aside class="littlefoot__popover" id="fncontent:<% id %>"><div class="${H$}"><div class="${x$}"><% content %></div></div><div class="${D$}"></div></aside>`,buttonTemplate:'<button class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>"><svg role="img" aria-labelledby="title-<% reference %>" viewbox="0 0 31 6" preserveAspectRatio="xMidYMid"><title id="title-<% reference %>">Footnote <% number %></title><circle r="3" cx="3" cy="3" fill="white"></circle><circle r="3" cx="15" cy="3" fill="white"></circle><circle r="3" cx="27" cy="3" fill="white"></circle></svg></button>'};function cW(n={}){const e=Object.assign(Object.assign({},sW),n),r=(function({footnotes:i,unmount:o},u){let a;const c=d=>p=>{p.isReady()&&(p.dismiss(u.dismissCallback),setTimeout(p.remove,d))},s=d=>p=>{u.allowMultiple||i.filter((h=>h.id!==p.id)).forEach(c(u.dismissDelay)),p.isReady()&&(p.activate(u.activateCallback),p.reposition(),p.resize(),setTimeout(p.ready,d))},l=d=>p=>{const h=i.find((m=>m.id===p));h&&d(h)},f=()=>i.forEach(c(u.dismissDelay));return{activate:(d,p)=>l(s(p))(d),dismiss:(d,p)=>l(c(p))(d),dismissAll:f,touchOutside:()=>{u.dismissOnDocumentTouch&&f()},repositionAll:()=>i.forEach((d=>{d.reposition()})),resizeAll:()=>i.forEach((d=>{d.resize()})),toggle:l((d=>d.isActive()?c(u.dismissDelay)(d):s(u.activateDelay)(d))),hover:l((d=>{a=d.id,u.activateOnHover&&!d.isActive()&&s(u.hoverDelay)(d)})),unhover:l((d=>{d.id===a&&(a=null),u.dismissOnUnhover&&setTimeout((()=>i.filter((p=>p.id!==a)).forEach(c(u.dismissDelay))),u.hoverDelay)})),unmount:o}})(aW(e),e),t=(function(i){const o=d=>{const p=Pp(d,"[data-footnote-button]"),h=j$(p);h?(d.preventDefault(),i.toggle(h)):Pp(d,"[data-footnote-popover]")||i.touchOutside()},u=Fp(i.repositionAll,16),a=Fp(i.resizeAll,16),c=i7(i.hover),s=i7(i.unhover),l=new AbortController,f={signal:l.signal};return $t("touchend",o,f),$t("click",o,f),$t("keyup",(d=>{d.keyCode!==27&&d.key!=="Escape"&&d.key!=="Esc"||i.dismissAll()}),f),$t("gestureend",u,f),o7("scroll",u,f),o7("resize",a,f),u7("mouseover",Dp,c,f),u7("mouseout",Dp,s,f),()=>{l.abort()}})(r);return{activate(i,o=e.activateDelay){r.activate(i,o)},dismiss(i,o=e.dismissDelay){i===void 0?r.dismissAll():r.dismiss(i,o)},unmount(){t(),r.unmount()},getSetting:i=>e[i],updateSetting(i,o){e[i]=o}}}function lW(n,e){const r=document.getElementById(n);if(!r)throw new Error(`Viewport anchor #${n} not found before render`);const t=r.getBoundingClientRect().top,i=document.activeElement===r;e();const o=document.getElementById(n);if(!o)throw new Error(`Viewport anchor #${n} was not replaced during render`);i&&o.focus({preventScroll:!0});const a=o.getBoundingClientRect().top-t;a!==0&&window.scrollBy(0,a)}function fW(n){const e=n.getWhose();try{n.renderCurrentView();return}catch(r){if(!n.shouldRecover(e))throw r;try{n.switchToSafeYours(e),n.renderSafeYoursView()}catch(t){throw new AggregateError([r,t],`View ${JSON.stringify(e)} failed, and the fail-safe Yours view also failed`)}n.recovered(e,r)}}let P,N,pe,kn,on,fn,mn,Kr,Wt,ip=null,Mi=0,Fn=null;const a7="calculator-section",s7="yours-plainnum";function zW(n){vA(),G$(n),SW(),LW(),_D(mW()),SU(),LU(),window.addEventListener("resize",Q$),yw(sn)}function G$(n){Mi++,Fn==null||Fn.abort(),Fn=null,eT(),uT(),bT(),iT(),WD(),P=kw(n.jpdefn),N=lA(P);const e=n.adhocPresets??[],r=xS(e);pe={adhocPresets:e,adhocPlainnumEntries:r.plainnum,adhocPlaincodeEntries:r.plaincode,plainnumResults:tp(US(n.plainnumResults??[]),"plainnum"),plaincodeResults:tp(WS(n.plaincodeResults??[]),"plaincode"),richcodeResults:tp(jS(n.richcodeResults??[]),"richcode")},kn=GS(pe),on=Jw(n.jpdefn),fn=n.formRegistry,mn=n.barrierRegistry??{},Kr=n.cparamComboFilter,Wt=n.cparamFilterDescription,ZH(N,V$()),N.ui.whose=Ah(N.ui.whose),hW(),sn()}function V$(){return{jprobTemplate:P,presetData:pe,modelParamGroups:kn}}function c7(){tn("calc_pin"),tn("calc_unpin")}const dW={showFramingNotes:"show_framing"};function pW(){return{ui:N.ui,srcquotesInlined:ph(N.ui.srcquotesInlinedOverride,_h().srcquotes_inlined)}}function hW(){const n=P.layout.sections.html.find(e=>"chunkid"in e&&e.style==="title");if(n&&"chunkid"in n){const e=P.find_textchunk_defn(n.chunkid);e&&(document.title=e.replace(Mw,"$1").replace(Nw,""))}}const vW=Object.assign({"../../data/alpoker/index.ts":()=>Ze(()=>import("./index-Dn9-wBuq.js"),[]),"../../data/covatc1/index.ts":()=>Ze(()=>import("./index-DxjnVEKR.js"),[]),"../../data/covid0/index.ts":()=>Ze(()=>import("./index-BkYz4MMT.js"),[]),"../../data/eggsFH1/index.ts":()=>Ze(()=>import("./index-D1WMu4M1.js"),[]),"../../data/eggsFH2/index.ts":()=>Ze(()=>import("./index-DU2ONJ6q.js"),[]),"../../data/lhcFXH1/index.ts":()=>Ze(()=>import("./index-DxhrMXtm.js"),[]),"../../data/lhcFXH_SolMax/index.ts":()=>Ze(()=>import("./index-DBOkqT5S.js"),[]),"../../data/lhcFXH_SolMax_Ultra/index.ts":()=>Ze(()=>import("./index-BxzLvlGv.js"),[]),"../../data/mcovidA/index.ts":()=>Ze(()=>import("./index-CN2v_cI4.js"),__vite__mapDeps([0,1])),"../../data/mcovidA2/index.ts":()=>Ze(()=>import("./index-Cg9o9HmK.js"),__vite__mapDeps([2,1])),"../../data/mcovidB10/index.ts":()=>Ze(()=>import("./index-BxKFJloI.js"),__vite__mapDeps([3,1])),"../../data/mcovidB11/index.ts":()=>Ze(()=>import("./index-C5Q_NJjS.js"),__vite__mapDeps([4,1])),"../../data/mcovidB6/index.ts":()=>Ze(()=>import("./index-DtsuLorU.js"),__vite__mapDeps([5,1])),"../../data/mcovidB7/index.ts":()=>Ze(()=>import("./index-CB9zQYg_.js"),__vite__mapDeps([6,1])),"../../data/mcovidB8/index.ts":()=>Ze(()=>import("./index-CM_35eWU.js"),__vite__mapDeps([7,1])),"../../data/mcovidB9/index.ts":()=>Ze(()=>import("./index-DbjvDssA.js"),__vite__mapDeps([8,1]))});function l7(n){return`../../data/${n}/index.ts`}async function f7(n){const e=vW[l7(n)];if(!e)throw new Error(`swapJprob: no manifest module for aid '${n}' (looked for ${l7(n)}).`);const r=await e(),t=window.location.pathname.replace(/[^/]+\.html$/,`${n}.html`);history.pushState(null,"",t),G$(r.manifest)}function mW(){return{toggle_mnames:()=>{N.ui.symbolMnames=!N.ui.symbolMnames,Te(P.config,N.ui),Nt("symbolMnames",N.ui.symbolMnames),eW(document,N.ui.symbolMnames)},goto_calculator:()=>{const n=document.getElementById(a7);if(!n)throw new Error(`#${a7} not found.`);n.scrollIntoView({block:"start"})},goto_top:()=>{window.scrollTo({top:0})},switch_whose_mode:()=>{const n=QU({whose:N.ui.whose,lastYoursWhose:N.ui.lastYoursWhose,lastAdhocWhose:N.ui.lastAdhocWhose,lastMethoWhose:N.ui.lastMethoWhose,presetQueryModeFilter:N.ui.presetQueryModeFilter},pe,kn);if(n===null)return;const e=o9(Ah(n),P.has_cparams());e!==N.ui.whose&&On(e)},toggle_srcquotes_inlined:()=>{P.has_srcquotes()&&(N.ui.srcquotesInlinedOverride=MH(N.ui.srcquotesInlinedOverride,_h().srcquotes_inlined),Te(P.config,N.ui),tn("srcquotes_view"),sn())},toggle_framing_notes:()=>{N.ui.showFramingNotes=!N.ui.showFramingNotes,Te(P.config,N.ui),Nt("showFramingNotes",N.ui.showFramingNotes),tn("show_framing"),sn()}}}function _h(){if(De(N.ui.whose))return N.optionValues;const n=ze(N.ui.whose,pe);if(!n)return N.optionValues;const e={...N.optionValues};for(const r of P.get_aopts()){const t=Fe(r.id);t in n.aopts&&(e[t]=n.aopts[t])}if("cparam_values"in n&&n.cparam_values)for(const r of P.get_cparams()){const t=Fe(r.id);t in n.cparam_values&&(e[t]=n.cparam_values[t])}return e}function X$(){const n=_h(),e=!!(n.show_typical_examples??I7),r=ph(N.ui.srcquotesInlinedOverride,n.srcquotes_inlined),t=S7(P,{symbolMnames:N.ui.symbolMnames}),i=fp(P,t),{source:o}=me(N.ui.whose),u=bn(o);return{jprobInstance:k7(P,C7(P,n,u),u),showTypical:e,refLookup:t,srcquotesInlined:r,showFramingNotes:N.ui.showFramingNotes,displayOptionValues:n,showExampleClassification:N.ui.showExampleClassification,showBareIds:NH(N.ui.whose),exampleFoldState:N.ui.exampleFoldState,footnoteCounter:{n:0},footnotes:[],popoverLookup:i,popoverAllRefs:N.ui.popoverAllRefs}}function pt(){return{...X$(),footnoteIdNamespace:dS}}function sn(){yh(Y$)}function yh(n){fW({getWhose:()=>N.ui.whose,shouldRecover:e=>!De(e)||bW(),renderCurrentView:()=>{KS(N.ui.whose,pe),n()},switchToSafeYours:gW,renderSafeYoursView:Y$,recovered:_W})}function bW(){return pe.adhocPresets.length>0||pe.plainnumResults.length>0||pe.plaincodeResults.length>0||pe.richcodeResults.length>0}function gW(n){const e=me(n).source;N.ui.whose=s7,N.ui.lastYoursWhose=s7,N.ui.modelEffortSweepScope=null,en(e)==="adhoc"&&(N.ui.lastAdhocWhose=""),en(e)==="metho"&&(N.ui.lastMethoWhose=""),pe={adhocPresets:[],adhocPlainnumEntries:[],adhocPlaincodeEntries:[],plainnumResults:[],plaincodeResults:[],richcodeResults:[]},kn=[]}function _W(n,e){try{Te(P.config,N.ui)}catch(t){hu("Persisting the fail-safe Yours selection",t)}for(const t of["whose","preset"])try{tn(t)}catch(i){hu(`Clearing the failed ${t} URL override`,i)}const r=De(n)?"Rendering Yours with loaded result data":`Rendering chosen result ${JSON.stringify(n)}`;hu(`${r}; switched safely to Yours and disabled loaded result data until reload`,e)}function Y$(){FW(N.ui.whose);const n=X$(),e=pt(),r=document.getElementById("main-content");jH(r,P,n);const t=J7(N.ui.whose,ze(N.ui.whose,pe));$B(N,AD(P.aid)??{},t,{currentAid:P.aid,currentFamily:dE(P.aid)}),EW(n,e,t),AW(r),Q$(),xp(F7,n.footnotes),xp(Vp,e.footnotes),K$(r),oU(r,{thresholdChars:cn().framingNoteAbbrevThreshold,startAbbreviated:N.ui.framingNoteAbbrev})}function xp(n,e){const r=document.getElementById(n);if(!r)return;const t=document.getElementById("main-content"),i=e??[],o=t?vS(i,t):i;r.innerHTML=o.length>0?`<ol>${O7(o)}</ol>`:""}function ci(n){xp(Vp,n.footnotes),yW()}function Eh(n){const e=document.querySelector("#calculator-calculator-input .calc-labels");e&&(e.innerHTML=r$(P,n))}function K$(n){ip&&ip.unmount(),ip=cW({scope:"#main-content",allowMultiple:N.ui.persistentPopovers,dismissOnDocumentTouch:!N.ui.persistentPopovers,buttonTemplate:`<button class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>">
  <svg role="img" aria-labelledby="title-<% reference %>" viewbox="0 0 24 6" preserveAspectRatio="xMidYMid">
    <title id="title-<% reference %>">Footnote <% number %></title>
    <circle r="2.5" cx="3" cy="3" fill="white"></circle>
    <circle r="2.5" cx="12" cy="3" fill="white"></circle>
    <circle r="2.5" cx="21" cy="3" fill="white"></circle>
  </svg>
</button>`});for(const e of n.querySelectorAll(".ref-popover[data-fnref]")){const r=e.nextElementSibling;r!=null&&r.classList.contains("littlefoot")&&r.classList.add("lf-popover-ref")}}function yW(){const n=document.getElementById("main-content");n&&K$(n)}function EW(n,e,r){for(const m of FU){const v=document.getElementById(`${nr[m]}-content`);v&&PU(v,m,P,n,N)}const t=document.getElementById(`${nr.TCHOICE}-content`);t&&GU(t,P,n,N,TW(N,pe));const i=document.getElementById("cparams-content");i&&qU(i,P,n,N,Kr,Wt);const o=document.getElementById("calculator-whose-toggle");if(o){GT(o,P,pe,N,kn),o.prepend(at(()=>TD(P,N.ui.whose)));const m=document.createElement("div");m.id="calc-response-type-toggle",o.appendChild(m),R$(m,N,r)}const u=document.getElementById("calculator-calculator-input"),a=document.getElementById("calculator-calculator-results");u&&a&&(rh(u,a,P,e,N,pe,fn,mn,Kr,Wt),q2(a,Sh(N,pe)),F2(a,wh(N,pe),P.get_svar_bare_names()));const c=document.getElementById(w$);c&&jB(c,N,fn),ht(e);const s=document.getElementById("framing-notes-root-content");s&&rx(s,P,n,N.ui),nx(P,n,N.ui);const l=document.getElementById("framing-notes-explainer-content");l&&tx(l,n);const f=document.getElementById("srcquote-explainer-content");f&&$U(f,P,n);const d=document.getElementById("svars-content");d&&ux(d,P,n,N,pe);const p=document.getElementById("calculator-yours-saved-list");p&&lh(p,P,N),li(e);const h=document.getElementById("calculator-yours-code-input");if(h){const m=K7(N.ui.whose,pe);N.ui.whose==="yours-plaincode"?x8(h,P,N.yoursCodeRecord,"edit"):m?x8(h,P,m,"view"):h.innerHTML=""}}function ht(n){const e=document.querySelectorAll(".derived-form");if(e.length!==0)for(const r of e){const t=r.dataset.formId;t&&gx(r,t,P,n,N,fn,mn,pe)}}const au="calculator-joint-dependence-editor";function li(n){const e=document.getElementById(au);e&&sH(e,N,P,n,fn,mn)}function J$(){const n=document.getElementById(au);if(!n)return null;const e=fh(N,P,fn,mn);return e===null?null:{container:n,editorCtx:e,draft:dh(N,e)}}function $W(n,e){uh(N,P,on,e,n.editorCtx.eligibleSvars,n.editorCtx.degenerateSvars),g$(n.container,e,n.editorCtx)}function z$(n){const e=pt();Eh(e);const r=document.getElementById("calculator-calculator-results");if(r&&iu(r,P,e,N,pe,fn,mn),ht(e),n)li(e);else{const t=document.getElementById(au);t&&SH(t,N,P,e,fn,mn)}$h(),ci(e)}function wW(n){var t;const e=J$();if(!e)return;const r=kH(e.draft,n,e.editorCtx.eligibleSvars);uh(N,P,on,r,e.editorCtx.eligibleSvars,e.editorCtx.degenerateSvars),z$(!0),n.kind==="add"&&((t=document.querySelector(`#${au} .jde-latent-card:last-child [data-latent-field="name"]`))==null||t.focus({preventScroll:!0}))}function SW(){const n=document.getElementById("sticky-help");n&&n.appendChild(at(()=>MD(P)))}function Q$(){const n=document.getElementById("sticky-bar");n&&document.documentElement.style.setProperty("--sticky-bar-h",`${n.offsetHeight+4}px`)}function AW(n){const e=document.getElementById("global-example-controls");e&&(e.hidden=n.querySelector(".examples")===null)}function LW(){var e,r,t,i,o,u,a,c;(e=document.getElementById("main-content"))==null||e.addEventListener("click",s=>{const l=s.target.closest(".ref-popover");if(!l)return;const f=l.nextElementSibling;if(!(f!=null&&f.classList.contains("littlefoot")))return;const d=f.querySelector(".littlefoot__button");d&&d.click()}),document.addEventListener("click",s=>{if(!s.target.closest("#response-type-toggle, #calc-response-type-toggle"))return;const f=s.target.closest("[data-mode]");if(!f)return;const d=f.dataset.mode;d!==N.ui.inputMode&&(N.ui.inputMode=d,Te(P.config,N.ui),tn("response_type"),sn())}),document.addEventListener("change",s=>{const l=s.target;if(l.id!==Tp)return;const f=l.value;f!==N.ui.probAsOdds&&(N.ui.probAsOdds=f,Te(P.config,N.ui),tn("prob_as_odds"),sn())}),document.addEventListener("click",s=>{const l=s.target.closest(".timeline-nav-btn");if(!l)return;const f=l.dataset.timelineTarget;f&&f7(f)}),document.addEventListener("change",s=>{const l=s.target;if(l.id!==I$)return;const f=l.value;f&&f!==P.aid&&f7(f)}),(r=document.getElementById("global-example-controls"))==null||r.addEventListener("click",s=>{const l=s.target.closest("[data-action]");if(!l)return;const f=l.dataset.action;XW(f)}),(t=document.getElementById("options-controls"))==null||t.addEventListener("change",s=>{const l=s.target;if(l.dataset.pref){const f=l.dataset.pref,d=l.checked;N.ui[f]=d,Te(P.config,N.ui),Nt(f,d);const p=dW[f];p!==void 0&&tn(p),f==="framingNoteAbbrev"?uU(document,d):sn();return}if(l.dataset.prefInt){const f=l.dataset.prefInt,d=parseInt(l.value,10);!isNaN(d)&&d>0&&(Nt(f,d),sn());return}}),(i=document.getElementById("options-controls"))==null||i.addEventListener("click",s=>{const l=s.target;if(l.id==="options-expand-btn"||l.closest(".options-expand-btn")){kB();return}if(l.id===k$){gB(l,pW(),V$());return}if(l.id==="keymap-btn"){PB();return}if(l.id===C$){Ew();return}if(l.id==="save-all-data-btn"){GW();return}if(l.id==="load-all-data-btn"){VW();return}}),document.addEventListener("click",s=>{const l=s.target,f=document.getElementById("options-controls");f&&!f.contains(l)&&IB()}),(o=document.getElementById("main-content"))==null||o.addEventListener("input",s=>{var d;const l=s.target;if(l.closest('.yours-code-input[data-variant="view"]'))return;if(l.classList.contains("code-body-input")){ah(N,P,on,l.value);return}if(l.classList.contains("code-reasoning-input")){const p=l,h=p.dataset.svar;if(!h)return;Dx(N,P,on,h,p.value);return}if(l.classList.contains("code-misc-input")){Px(N,P,on,l.value);return}const f=B8(l);if(f!==null){const p=J$();p&&$W(p,AH(p.draft,f));return}if(l.classList.contains("cparam-slider")){const p=l,h=p.dataset.cparam;if(!h)return;const m=JSON.parse(p.dataset.values??"[]"),v=parseInt(p.value),b=m[v];if(b===void 0)return;N.ui.cparamValues[h]=b,Te(P.config,N.ui),op();const g=document.getElementById("svars-content");g&&ax(g,P,N,pe);return}if(l.classList.contains("model-version-effort-slider")){const p=l,h=JSON.parse(p.dataset.keys??"[]"),m=parseInt(p.value),v=h[m];if(!v)return;const{source:b,index:g}=me(N.ui.whose);if(b!=="metho-plaincode"&&b!=="metho-richcode")return;const _=b==="metho-plaincode"?pe.plaincodeResults:pe.richcodeResults,y=_[g];if(!y)return;const E=G2(y,N.ui.modelEffortSweepScope),I=V2(y,_,N.ui.modelEffortSweepScope),L=si(I,v),R=L===null?-1:_.indexOf(L);if(R<0)return;const A=`${b}:${R}`;A!==N.ui.whose&&(N.ui.modelEffortSweepScope=E,On(A,!0),(d=document.querySelector("#calculator-calculator-input .model-version-effort-slider"))==null||d.focus({preventScroll:!0}));return}});const n=document.getElementById("main-content");n&&Ox(n,{persistCalcTextarea:CW,recomputeAfterCalcTextarea:RW,persistAssumptionCard:MW,recomputeAfterAssumptionCard:NW}),(u=document.getElementById("main-content"))==null||u.addEventListener("click",s=>{const l=s.target;if(l.classList.contains("code-sample-btn")){DW();return}const f=l.closest(".lloads-copy-to-yours-btn");if(f){UW(f);return}if(l.classList.contains("copy-to-yours-btn")){PW();return}const d=l.closest(".jde-summary");if(d){const A=d.closest("details");A&&(N.ui.jointDependenceEditorOpen=!A.open,Te(P.config,N.ui));return}const p=LH(l);if(p!==null){wW(p);return}const h=l.closest(".yours-saved-delete");if(h){s.stopPropagation();const A=h.dataset.key,S=h.dataset.kind;A&&OW(A,S??"plainnum");return}const m=l.closest(".yours-saved-row");if(m){const A=m.dataset.key,S=m.dataset.kind;A&&d7(A,S??"plainnum");return}const v=l.closest(".whose-btn");if(v){const A=v.dataset.whose;A&&A!==N.ui.whose&&On(A);return}const b=l.closest(".mode-radio-btn");if(b){const A=b.dataset.whose;if(A&&A!==N.ui.whose){On(A);return}const S=b.dataset.mode;if(S){const $=A2(N.ui.whose,kn);if($){const w=Ey($.group,S);w&&w!==N.ui.whose&&On(w)}}return}const g=l.closest(".ex-btn");if(g){WW(g);return}const _=l.closest(".framing-fold-btn");if(_){jW(_);return}const y=l.closest(`.${mh}`);if(y){aU(y);return}const E=l.closest(".assumption-trial-btn");if(E){const A=parseInt(E.dataset.trial??"0");N.ui.assumptionTrialIndex=A,Te(P.config,N.ui),tn("trial_index");const S=document.getElementById("svars-content");S&&cx(S,A,pr(P.svar_entries().map(w=>w.decl)));const $=document.getElementById(`${nr.TCHOICE}-content`);$&&VU($,A);return}const I=l.closest(`.${pE}`);if(I){const A=I.dataset.mcLiveActivationToken;(A===void 0||!UD(A))&&console.warn(`MC activation: unknown token ${JSON.stringify(A)}; re-rendering without activating`),xr();return}const L=l.closest(`.${Bt}`);if(L){const A=L.dataset.mcPoolToken;(A===void 0||!tT(A))&&console.warn(`MC accumulate: unknown pool token ${JSON.stringify(A)}; re-rendering without accumulating`),xr();return}const R=l.closest(".sweep-mode-btn");if(R){N.ui.codeSweepMode=R.dataset.sweepMode,Te(P.config,N.ui),xr();return}}),(a=document.getElementById("main-content"))==null||a.addEventListener("keydown",s=>{if(s.key!=="Enter"&&s.key!==" ")return;const l=s.target,f=l.closest(".yours-saved-row");if(!f||l.closest(".yours-saved-delete"))return;s.preventDefault();const d=f.dataset.key,p=f.dataset.kind;d&&d7(d,p??"plainnum")}),(c=document.getElementById("main-content"))==null||c.addEventListener("change",s=>{const l=s.target;if(B8(l)!==null){z$(!1);return}if(l.dataset.aoptBody){const d=l.dataset.aoptBody,p=l,h=P.get_aopt(d);let m;if(h.input_type==="MultiStringFromSet"){const v=l.closest(".cparam-or-aopt");if(v===null)throw new Error(`MultiStringFromSet control for ${d} is outside an option row`);const b=[...v.querySelectorAll("input[data-aopt-body]")].filter(g=>g.dataset.aoptBody===d);if(b.length===0)throw new Error(`MultiStringFromSet option ${d} has no checkbox controls`);m=kU(h,b)}else m=K8(h,p,h.input_type);d==="srcquotes_inlined"&&N.ui.srcquotesInlinedOverride!==null&&(N.ui.srcquotesInlinedOverride=null,Te(P.config,N.ui),tn("srcquotes_view")),N=jh(N,P,d,m),sn();return}if(l.dataset.cparamBody){const d=l.dataset.cparamBody,p=P.get_cparam(d),h=K8(p,l,Array.isArray(p.allowed_values)?"StringFromSet":"Number");N=jh(N,P,d,h),sn();return}if(l.dataset.tchoiceBody){const d=l.dataset.tchoiceBody,p=P.get_tchoice(d),h=bn(me(N.ui.whose).source);if(h!=="plainnum"&&h!=="plaincode")throw new Error(`tchoice edit fired in unexpected query mode "${h}"`);if(m7(p)){const v=YU(p,l);v!==null&&P8(N,P,on,h,d,v);return}if(!Hr(p))throw new Error(`tchoice "${d}" has unrecognized response_kind`);const m=XU(p,l);P8(N,P,on,h,d,m);return}if(l.id==="preset-query-mode-filter"){const d=l.value;if(!_y(d))return;N.ui.presetQueryModeFilter=d;const p=Ah(N.ui.whose);if(tn("preset_query_mode"),p!==N.ui.whose){On(p);return}Te(P.config,N.ui),sn();return}const f=l.closest(".whose-select");if(f){let d=f.value;if(d.startsWith("group:")){const p=parseInt(d.slice(6)),h=kn[p];if(!h)return;const m=jT(h,N.ui.presetQueryModeFilter,kn);if(!m)return;d=m}if(d&&d!==N.ui.whose){if(!f.id)throw new Error("Whose-result select must have an id for viewport anchoring");lW(f.id,()=>{On(d)})}return}if(l.classList.contains("code-plot-target-kind-radio")){const d=l.value;if(d!=="formula"&&d!=="raw_response")return;N.ui.codePlotTargetKind=d,Te(P.config,N.ui),xr();return}if(l.classList.contains("code-plot-formula-select")){N.ui.codePlotTargetKind="formula",N.ui.codePlotFormulaId=l.value,Te(P.config,N.ui),xr();return}if(l.classList.contains("code-plot-raw-response-select")){N.ui.codePlotTargetKind="raw_response",N.ui.codePlotRawResponseName=l.value,Te(P.config,N.ui),xr();return}if(l.classList.contains("cparam-pin-checkbox")){const d=l.dataset.cparam;if(!d)return;N.ui.cparamPinned[d]=l.checked,Te(P.config,N.ui),c7(),op();return}if(l.classList.contains("model-version-effort-pin-checkbox")){N.ui.modelEffortPinned=l.checked,Te(P.config,N.ui),c7(),op();return}})}function kW(){var e;const n=document.querySelector(".calc-textarea");if(n&&document.activeElement!==n){const r=n.dataset.group;r&&(n.value=((e=N.yoursRecord.raw_input)==null?void 0:e[r])??"")}}function IW(){const n=document.getElementById("svars-content");n&&dx(n,N,pr(P.svar_entries().map(e=>e.decl)))}function $h(){const n=document.getElementById("calculator-yours-saved-list");n&&lh(n,P,N)}function CW(n){const e=n.dataset.group;if(!e)return;const r=e==="sample"?n.value.split(`
`).map(t=>QE(t)).join(`
`):n.value;oh(N,P,on,e,r)}function RW(){const n=pt();Eh(n);const e=document.getElementById("calculator-calculator-results");e&&iu(e,P,n,N,pe,fn,mn),ht(n),li(n),IW(),$h(),ci(n)}function MW(n){const e=n.dataset.paramIndex,r=n.dataset.group;if(e==null||!r)return;const t=P.svar_entries().length,i=px(N,parseInt(e),n.value,t);oh(N,P,on,r,i)}function NW(n){kW(),$h();const e=pt();Eh(e);const r=document.getElementById("calculator-calculator-results");r&&iu(r,P,e,N,pe,fn,mn),ht(e),li(e);const t=document.getElementById("svars-content");t&&(eh(t,pr(P.svar_entries().map(i=>i.decl))),e$(t)),ci(e)}function wh(n,e){if(!e)return[];const{source:r}=me(n.ui.whose);if(r!=="adhoc-plainnum"&&r!=="metho-plainnum")return[];const t=ze(n.ui.whose,e);return t?t.trials:[]}function TW(n,e){if(!e||De(n.ui.whose))return;const r=ze(n.ui.whose,e);if(r)return bn(me(n.ui.whose).source)==="plainnum"?r.trials.map(t=>t.trial_choices??{}):(r.trial_metadata??[]).map(t=>t.trial_choices??{})}function Sh(n,e){var r;if(e)return(r=JS(n.ui.whose,e))==null?void 0:r.meta}function xr(){yh(qW)}function qW(){const n=pt(),e=document.getElementById("calculator-calculator-input"),r=document.getElementById("calculator-calculator-results");e&&r&&(rh(e,r,P,n,N,pe,fn,mn,Kr,Wt),q2(r,Sh(N,pe)),F2(r,wh(N,pe),P.get_svar_bare_names())),ht(n),li(n),ci(n)}function op(){yh(()=>{const n=pt(),e=document.getElementById("calculator-calculator-input"),r=document.getElementById("calculator-calculator-results");e&&r&&(bx(e,r,P,n,N,pe,fn,mn,Kr,Wt),q2(r,Sh(N,pe)),F2(r,wh(N,pe),P.get_svar_bare_names())),ht(n),ci(n)})}function On(n,e=!1){N.ui.whose=n,e||(N.ui.modelEffortSweepScope=null),(n==="yours-plainnum"||n==="yours-plaincode")&&(N.ui.lastYoursWhose=n);const r=en(me(n).source);r==="adhoc"?N.ui.lastAdhocWhose=n:r==="metho"&&(N.ui.lastMethoWhose=n),Te(P.config,N.ui),tn("whose"),tn("preset"),sn()}function Ah(n){const e=A2(n,kn);if(!e)return n;const r=Xo(N.ui.presetQueryModeFilter,kn);return r==="all"?n:Yo(e.group,r)?Ey(e.group,r)??n:yy(kn,r)??n}function FW(n){if(!(De(n)||U5(n,pe,N.ui.inputMode))){for(const e of["sample","bounds","point"])if(U5(n,pe,e)){N.ui.inputMode=e;return}}}function OW(n,e){if(e==="plaincode"){const t=zp(P.aid).find(o=>o.codeOptionDictKey===n);if(!t)return;const i=p$(P,t.record);if(!confirm(`Delete saved estimation?
${i}`))return;eA(P.aid,n)}else{const t=sh(P.aid).find(o=>o.plainnumOptionDictKey===n);if(!t)return;const i=d$(P,t.record)||"(default options)";if(!confirm(`Delete saved estimation?
${i}`))return;xx(P.aid,n)}const r=document.getElementById("calculator-yours-saved-list");r&&lh(r,P,N)}function d7(n,e){if(e==="plaincode"){const r=zp(P.aid).find(t=>t.codeOptionDictKey===n);if(!r)return;N=Ux(N,P,n,r.record)}else{const r=sh(P.aid).find(t=>t.plainnumOptionDictKey===n);if(!r)return;N=Bx(N,P,n,r.record)}sn()}async function DW(){const n=Mi,e=document.getElementById("calculator-yours-code-input"),r=e==null?void 0:e.querySelector(".code-error-area"),t=e==null?void 0:e.querySelector(".code-status");r&&(r.innerHTML=""),t&&(t.textContent="Running…");const i=e==null?void 0:e.querySelector(".code-body-input"),o=i?i.value:N.yoursCodeRecord.raw_code_input;i&&o!==N.yoursCodeRecord.raw_code_input&&ah(N,P,on,o);const{names:u,combinations:a}=Ww(P.get_cparams(),Kr),c=rH(P.svar_decls()),s=cn();try{new Function(...u,o)}catch(b){t&&(t.textContent=""),r&&(r.textContent=`Syntax error: ${b.message}`);return}Fn==null||Fn.abort();const l=new AbortController;Fn=l;let f;try{f=await TH({source:o,cparamNames:u,combinations:a,expectedSvars:P.get_svar_bare_names(),formulaSvars:p7(fn,P.get_svar_bare_names()),hasExpectationBarrier:Object.keys(mn).length>0,paramRanges:c},{timeoutMs:s.plaincodeEvalTimeoutMs,signal:l.signal})}catch(b){if(n!==Mi||b.message===Mp)return;if(t&&(t.textContent=""),r){const g=b.message;r.textContent=g===$$?`Timed out after ${s.plaincodeEvalTimeoutMs}ms. Possible infinite loop — check your code.`:`Worker error: ${g}`}return}finally{Fn===l&&(Fn=null)}if(n!==Mi)return;if(f.compileError){t&&(t.textContent=""),r&&(r.textContent=`Compile error: ${f.compileError}`);return}const d=f.wellformed.map(b=>{const g={point:b.point,bounds:b.bounds,sample:b.sample};return b.lloads!==void 0&&(g.lloads=b.lloads),{cparams:b.cparams,trials:[g],precomputed:{}}}),p=N.yoursCodeRecord;p.verified_code_input=o,p.cparam_names=u,p.cparam_combos=d,p.count=1,p.timestamp=new Date().toISOString(),Xt(P,on,N.codeOptionDictKey,p),N.ui.whose!=="yours-plaincode"&&(N.ui.whose="yours-plaincode",Te(P.config,N.ui),tn("whose"),tn("preset")),N.ui.lastYoursWhose="yours-plaincode",sn();const h=document.getElementById("calculator-yours-code-input"),m=h==null?void 0:h.querySelector(".code-status"),v=h==null?void 0:h.querySelector(".code-error-area");if(m&&(m.textContent=""),v&&f.malformed.length>0){const b=f.malformed.slice(0,3).map(g=>`${JSON.stringify(g.cparams)}: ${g.error}`).join(`
`);v.textContent=`${f.wellformed.length}/${f.wellformed.length+f.malformed.length} combinations succeeded. First failures:
${b}`}}function PW(){const{source:n}=me(N.ui.whose);if(n==="adhoc-plaincode"){xW();return}if(n==="adhoc-plainnum"){BW();return}throw new Error(`Copy to Yours clicked outside an adhoc entry view (whose=${JSON.stringify(N.ui.whose)})`)}function xW(){const n=K7(N.ui.whose,pe);if(!n)throw new Error(`Copy to Yours clicked outside an adhoc-plaincode view (whose=${JSON.stringify(N.ui.whose)})`);confirm(`Copy this entry's code into your Yours editor?
Your current Yours-plaincode code will be overwritten.`)&&(ah(N,P,on,n.raw_code_input),On("yours-plaincode"))}const HW={point:"point",bounds:"bounds",sample:"distribution"};function BW(){const n=ze(N.ui.whose,pe),e=n==null?void 0:n.trials[0];if(!e)throw new Error(`Copy to Yours clicked without a viewable adhoc-plainnum trial (whose=${JSON.stringify(N.ui.whose)})`);const r=P.svar_entries().map(u=>u.bareName),t=z7(e,r);if(t.length===0)throw new Error("Copy to Yours clicked for an entry with no complete response group");const i=t.map(u=>HW[u]).join(" + ");if(confirm(`Copy this entry's ${i} estimates into your Yours inputs?
Your current Yours ${i} input${t.length>1?"s":""} will be overwritten.`)){for(const u of t)oh(N,P,on,u,zS(e,u,r));t.includes(N.ui.inputMode)||(N.ui.inputMode=t.includes("sample")?"sample":t.includes("bounds")?"bounds":"point"),On("yours-plainnum")}}function UW(n){const e=n.dataset.lloadsSpec;if(e===void 0)throw new Error("Joint-dependence Copy to Yours button carries no specification");const r=JSON.parse(e),t=m$(N,P,fn,mn);if(t===null)throw new Error("Joint-dependence Copy to Yours clicked on a jprob with no joint-dependence box");const i=Lo(r,t.eligibleSvars);if(i!==null)throw new Error(`Disclosed joint-dependence specification is not valid here: ${i}`);confirm(`Copy this joint-dependence specification into your Yours inputs?
Your current Yours latents and loadings will be overwritten.`)&&(uh(N,P,on,s9(r,t.eligibleSvars),t.eligibleSvars,t.degenerateSvars),N.ui.inputMode="sample",N.ui.jointDependenceEditorOpen=!0,On("yours-plainnum"))}function WW(n){const e=n.dataset.isym,r=n.dataset.type;if(!e||!r)return;n.classList.toggle("active");const t=n.closest(".isym-card");if(!t)return;const i=t.querySelector(`.examples.${r}`);i&&i.classList.toggle("visible"),N.ui.exampleFoldState=aA(N.ui.exampleFoldState,e,r),Te(P.config,N.ui)}function jW(n){const e=n.dataset.framingAnchor,r=n.dataset.framingId;if(!e||!r)return;n.classList.toggle("active");const t=n.closest(".framingnote");t&&(t.classList.toggle("visible"),N.ui.framingFoldState[e]||(N.ui.framingFoldState[e]={}),N.ui.framingFoldState[e][r]=t.classList.contains("visible"),Te(P.config,N.ui))}function GW(){const n=pA(),e=JSON.stringify(n,null,2),r=new Blob([e],{type:"application/json"}),t=URL.createObjectURL(r),i=document.createElement("a"),o=new Date().toISOString().slice(0,10);i.href=t,i.download=`${P.config.localStorage_prefix}-state-${o}.json`,i.click(),URL.revokeObjectURL(t)}function VW(){const n=document.createElement("input");n.type="file",n.accept=".json",n.addEventListener("change",()=>{var r;const e=(r=n.files)==null?void 0:r[0];e&&e.text().then(t=>{let i;try{i=JSON.parse(t)}catch(o){alert(`Invalid JSON: ${o}`);return}if(!i||typeof i!="object"){alert("Expected a JSON object");return}hA(i),window.location.reload()})}),n.click()}function XW(n){const e=document.querySelectorAll(".examples"),r=document.querySelectorAll(".ex-btn");switch(n){case"open":e.forEach(t=>t.classList.add("visible")),r.forEach(t=>t.classList.add("active"));break;case"close":e.forEach(t=>t.classList.remove("visible")),r.forEach(t=>t.classList.remove("active"));break;case"peek":e.forEach(t=>{t.setAttribute("data-was-visible",t.classList.contains("visible")?"1":"0"),t.classList.add("visible")}),r.forEach(t=>{t.setAttribute("data-was-active",t.classList.contains("active")?"1":"0"),t.classList.add("active")});break;case"unpeek":e.forEach(t=>{t.getAttribute("data-was-visible")==="0"&&t.classList.remove("visible")}),r.forEach(t=>{t.getAttribute("data-was-active")==="0"&&t.classList.remove("active")});break}}export{zW as initApp,f7 as swapJprob,AW as syncGlobalExampleControlsVisibility};
