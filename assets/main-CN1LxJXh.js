const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BRicf-QN.js","assets/form_types-CDdbkj6v.js","assets/index-Bc1wW7B-.js","assets/index-dlSO4A9J.js","assets/index-BHTD4kQB.js","assets/index-DTa1Op3H.js","assets/index-CwxdzyU8.js","assets/index-CUWAIAiW.js","assets/index-CTCCNKrg.js"])))=>i.map(i=>d[i]);
var dw=Object.defineProperty;var pw=(n,e,r)=>e in n?dw(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r;var Fe=(n,e,r)=>pw(n,typeof e!="symbol"?e+"":e,r);import{s as hw,a as vw,_ as an,r as Yo}from"./app_bootstrap-DaTrVj0E.js";import{P as mw,f as O_}from"./form_types-CDdbkj6v.js";const Ot={lo:0,hi:1,loClosed:!0,hiClosed:!0};function Ai(n,e){return!(n.lo!==null&&(n.loClosed?e<n.lo:e<=n.lo)||n.hi!==null&&(n.hiClosed?e>n.hi:e>=n.hi))}function ki(n){const e=n.loClosed&&n.lo!==null?"[":"(",r=n.hiClosed&&n.hi!==null?"]":")";return`${e}${n.lo??"-inf"}, ${n.hi??"inf"}${r}`}const bw={closed_real_interval:[!0,!0],left_open_real_interval:[!1,!0],right_open_real_interval:[!0,!1],open_real_interval:[!1,!1]};function D_(n){var i;const[e,r]=bw[n.type_mathlevel]??[!0,!0],t=((i=n.type_detail)==null?void 0:i.range)??[0,1];return{lo:t[0],hi:t[1],loClosed:e,hiClosed:r}}function fr(n){return n.map(D_)}function P_(n){return Object.fromEntries(n.map(e=>[e.bareName,D_(e.decl)]))}const gw=["aopt:","cparam:"];function Te(n){for(const e of gw)if(n.startsWith(e))return n.slice(e.length);return n}function yr(n){return n.startsWith("cparam:")}function hp(n){return!yr(n.id)}function D1(n){return yr(n.id)}const Li="tchoice:";function wt(n){return n.startsWith(Li)?n.slice(Li.length):n}function Or(n){return n.response_kind==="enum"}function H_(n){return n.response_kind==="real"}const Ii="svar:";function x_(n,e){return n.hide?!1:!n.limit_reporting_to||n.limit_reporting_to.includes(e)}function B_(n,e){if(!Array.isArray(e)||e.length!==3||e[0]!=="eq"||typeof e[1]!="string")throw new Error(`Formula ${n} must have an equality s-expression with a string LHS`);return e[1]}function U_(n){if(n.includes("{")||n.includes("}"))throw new Error(`Unexpected brace in sexpr reference leaf: ${n}`);if(n.startsWith(Ii))return`expr:${n.slice(Ii.length)}`;if(!n.startsWith("expr:"))throw new Error(`Unexpected expression reference ${JSON.stringify(n)}; expected expr:* or svar:*`);return n}function W_(n){return n.startsWith(Ii)?n.slice(Ii.length):n}const rh="ax:";function $t(n){return n.startsWith(rh)?n.slice(rh.length):n}const th="form:";function vp(n){return n.startsWith(th)?n.slice(th.length):n}const ih="textchunk:",oh="textdefn:";class j_{constructor(e){Fe(this,"_data");Fe(this,"aid");Fe(this,"options");Fe(this,"cparam_combo_filter");Fe(this,"config");Fe(this,"layout");Fe(this,"svar_list");Fe(this,"svar");Fe(this,"tchoice");Fe(this,"textchunk");Fe(this,"display");Fe(this,"isym");Fe(this,"ax");Fe(this,"expr");Fe(this,"form");Fe(this,"definedSym");Fe(this,"textdefn");Fe(this,"framing");Fe(this,"srcquote");this._data=e,this.aid=e.aid,this.options=e.options,this.cparam_combo_filter=e.cparam_combo_filter,this.config=e.config,this.layout=e.layout,this.svar_list=e.svar_list,this.svar=e.svar,this.tchoice=e.tchoice??[],this.textchunk=e.textchunk,this.display=e.display,this.isym=e.isym,this.ax=e.ax,this.expr=e.expr,this.form=e.form,this.definedSym=e.definedSym,this.textdefn=e.textdefn,this.framing=e.framing??[],this.srcquote=e.srcquote??[]}_get_data(){return this._data}get_options(){return this.options}get_aopts(){return this.options.filter(hp)}get_cparams(){return this.options.filter(D1)}has_cparams(){return this.options.some(D1)}get_option(e){const r=this.options.find(t=>Te(t.id)===e);if(!r)throw new Error(`No option named "${e}"`);return r}get_aopt(e){const r=this.get_aopts().find(t=>Te(t.id)===e);if(!r)throw new Error(`No aopt named "${e}"`);return r}get_cparam(e){const r=this.find_cparam(e);if(!r)throw new Error(`No cparam named "${e}"`);return r}find_cparam(e){return this.get_cparams().find(r=>Te(r.id)===e)}get_option_bare_names(){return this.options.map(e=>Te(e.id))}get_aopt_bare_names(){return this.get_aopts().map(e=>Te(e.id))}get_cparam_bare_names(){return this.get_cparams().map(e=>Te(e.id))}get_option_ids(){return this.options.map(e=>e.id)}get_aopt_ids(){return this.get_aopts().map(e=>e.id)}get_cparam_ids(){return this.get_cparams().map(e=>e.id)}get_tchoice_decls(){return this.tchoice}get_tchoice_bare_names(){return new Set(this.tchoice.map(e=>wt(e.id)))}get_tchoice(e){const r=e.startsWith(Li)?e:`${Li}${e}`,t=this.tchoice.find(i=>i.id===r);if(t===void 0)throw new Error(`No tchoice named "${e}"`);return t}get_tchoice_default(e){const r=this.get_tchoice(e);if(!Or(r))throw new Error(`tchoice "${e}" is not an enum kind; it has no default_value`);return r.default_value}get_enum_tchoice_defaults(){const e={};for(const r of this.tchoice)Or(r)&&(e[wt(r.id)]=r.default_value);return e}get_textchunks(){return this.textchunk}find_textchunk(e){const r=this.strip_textchunk_prefix(e);return this.textchunk.find(t=>this.strip_textchunk_prefix(t.id)===r)}get_textchunk(e){const r=this.find_textchunk(e);if(!r)throw new Error(`No textchunk named "${e}"`);return r}find_textchunk_defn(e){var r;return(r=this.find_textchunk(e))==null?void 0:r.defn}get_textchunk_defn(e){return this.get_textchunk(e).defn}strip_textchunk_prefix(e){return e.startsWith(ih)?e.slice(ih.length):e}get_textdefn_entries(){return this.textdefn.map(e=>{const r=e.aliases??[];return{bareName:this.strip_textdefn_prefix(e.id),id:e.id,defn:e.defn,aliases:r,displayTerm:r[0]??e.id}})}find_textdefn(e){const r=this.strip_textdefn_prefix(e);return this.textdefn.find(t=>this.strip_textdefn_prefix(t.id)===r)}get_textdefn(e){const r=this.find_textdefn(e);if(!r)throw new Error(`No textdefn named "${e}"`);return r}get_textdefns(){return this.textdefn}strip_textdefn_prefix(e){return e.startsWith(oh)?e.slice(oh.length):e}get_svar_bare_names(){return this.svar_list}svar_decls(){return this.svar}get_svar(e){const r=e.startsWith("svar:")?e:`svar:${e}`,t=this.svar.find(i=>i.id===r);if(t===void 0)throw new Error(`No svar named "${e}"`);return t}get_svar_gloss_defn(e){return this.get_svar(e).defn}svar_entries(){const e=new Map;for(const r of this.svar)e.set(W_(r.id),r);return this.svar_list.map(r=>{const t=e.get(r);if(!t)throw new Error(`svar_list entry "${r}" has no matching svar decl`);return{bareName:r,decl:t}})}has_framing_notes(){return this.framing.length>0}has_examples(){return this.isym.some(e=>{var r,t;return(((r=e.pos)==null?void 0:r.length)??0)>0||(((t=e.neg)==null?void 0:t.length)??0)>0})}isym_entries(){return this.isym}get_isym(e){const r=e.startsWith("isym:")?e:`isym:${e}`,t=this.isym.find(i=>i.id===r);if(t===void 0)throw new Error(`No isym named "${e}"`);return t}has_srcquotes(){return this.srcquote.length>0}resolve_srcquotes(e){const r=new Map(this.srcquote.map(t=>[t.id,t]));return e.map(t=>{const i=r.get(t);if(!i)throw new Error(`Unknown srcquote id: ${t}`);return i})}framing_static_anchor_ids(){const e=new Set;for(const r of this.framing)r.static_anchor!==null&&e.add(r.static_anchor);return e}get_axioms(){return this.ax}find_ax(e){const r=$t(e);return this.ax.find(t=>$t(t.id)===r)}get_ax(e){const r=this.find_ax(e);if(r===void 0)throw new Error(`No axiom named "${e}"`);return r}get_ax_sexpr(e){return this.get_ax(e).sexpr}get_ax_defn(e){return this.get_ax(e).defn}can_consolidate_isym_svar(e){var u,a;const r=e.slice(5),t=this.isym.find(c=>c.id===e);if(!t||t.kind!=="real"||(((u=t.pos)==null?void 0:u.length)??0)>0||(((a=t.neg)==null?void 0:a.length)??0)>0||!this.svar_list.includes(r))return!1;const i=this.svar.find(c=>c.id===`svar:${r}`);if(!i)return!1;const o=this.expr.find(c=>c.id===`expr:${r}`);return!o||o.sexpr!==e?!1:i.defn===""}get_display_ax(e){return this.display.ax[e]}get_display_ax_or_none(e){return this.display.ax[e]??null}get_display_expr(e){return this.display.expr[e]}get_display_form(e){return this.display.form[e]}get_display_form_or_none(e){return this.display.form[e]??null}get_display_definedSym(e){return this.display.definedSym[e]}get_display_definedSym_or_none(e){return this.display.definedSym[e]??null}get_display_expr_keys(){return Object.keys(this.display.expr)}get_display_form_keys(){return Object.keys(this.display.form)}get_framing_layout(e){const r=new Set(e),t=new Map(this.framing.map(s=>[s.id,s])),i=new Map,o=s=>{if(i.has(s))return i.get(s)??null;const l=t.get(s);if(!l)throw new Error(`Unknown framing note id: ${s}`);let f=null;if(r.has(l.pov)){const d=l.framing_target;if(d!==null){const p=o(d);p!==null&&(f={anchor_id:p.anchor_id,depth:p.depth+1,visible_parent_id:d})}f===null&&l.static_anchor!==null&&(f={anchor_id:l.static_anchor,depth:1,visible_parent_id:null})}return i.set(s,f),f};for(const s of this.framing)o(s.id);const u=new Map,a=[],c=new Map;for(const s of this.framing){const l=i.get(s.id);l!=null&&u.set(s.id,{depth:l.depth,note:s,children:[]})}for(const s of this.framing){const l=i.get(s.id);if(l==null)continue;const f=u.get(s.id);if(l.visible_parent_id!==null)u.get(l.visible_parent_id).children.push(f);else if(l.anchor_id==="root")a.push(f);else{const d=c.get(l.anchor_id)??[];d.push(f),c.set(l.anchor_id,d)}}return{root_section:{static_anchor_id:"root",layout_nodes:a},nonroot_anchor_sections:new Map(Array.from(c.entries(),([s,l])=>[s,{static_anchor_id:s,layout_nodes:l}]))}}}function mp(n){return n.get_textdefn_entries().map(e=>{const r=`def-${e.bareName.toLowerCase()}`;return{...e,anchorId:r,anchor:`#${r}`}})}const _w=["options","config","layout","svar","textchunk","display","isym","ax","expr","form","definedSym","textdefn"];function yw(n){if(typeof n!="object"||n===null)throw new Error("Jprob template data must be a non-null object");const e=n,r=_w.filter(t=>!(t in e));if(r.length>0)throw new Error(`Jprob template data missing required keys: ${r.join(", ")}`);return new j_(n)}function Ew(n){return yw(n)}function ne(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ve(n){return n.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const P1="[",H1="]",G_="{",V_="}",ww=new RegExp("(?<!\\\\)\\{([^\\}]+)\\}","g"),$w=new RegExp("(?<!\\\\)\\{((?:expr|form):[^\\}]+)\\}","g"),Sw=new RegExp("(?<!\\\\)\\[([^\\]]+?)\\|(\\w[\\w:-]*)\\]","g"),Aw=new RegExp("(?<!\\\\)\\[([^\\]|]+)\\]","g"),Ri=/‹\+(.*?)\+›/g,kw=new RegExp("(?<!\\\\)\\[([^\\]|]*?)(?:\\|[^\\]]*?)?\\]","g"),Lw=new RegExp("(?<!\\\\)\\{[^\\}]*\\}","g"),Iw=/\\([\{\}])/g,Rw=/\\([\[\]])/g,x1="symbol-ref-name",bp="fixed-ax-";function X_(n){return n.form.filter(e=>!e.hide&&n.get_display_form(e.id)).map(e=>e.id)}function Y_(n,e={}){const r=new Map,t=e.symbolMnames??!1,i=Cw(n);for(const o of n.isym_entries()){const u=o.id.startsWith("isym:")?o.id:`isym:${o.id}`,a=u.startsWith("isym:")?u.slice(5):u,c=`#isym-${a}`,s={bareId:a,mname:i.get(u)??a},l=i.get(u);l&&(r.set(l,{anchor:c,displayText:l}),r.set(`${a}:long`,{anchor:c,displayText:l}),r.set(`isym:${a}:long`,{anchor:c,displayText:l})),r.set(a,{anchor:c,displayText:ci(s,t),symbolName:s}),r.set(u,{anchor:c,displayText:ci(s,t),symbolName:s})}for(const o of mp(n))for(const u of o.aliases)r.set(u,{anchor:o.anchor,displayText:u});for(const o of n.isym_entries()){const u=o.id.replace(/^isym:/,"");let a=0;for(const c of["pos","neg"])for(const s of o[c]??[])a++,s.alias&&r.set(s.alias,{anchor:`#ex-${s.alias}`,displayText:`${u} example ${a}`})}for(const o of n.get_axioms()){if(!n.get_display_ax(o.id))continue;const a=$t(o.id);r.set(o.id,{anchor:`#${bp}${a}`,displayText:a})}for(const o of X_(n)){if(r.has(o))continue;const u=vp(o);r.set(o,{anchor:`#form-${u}`,displayText:u})}for(const o of n.get_options()){const u=Te(o.id),a=`#opt-${u}`,c={bareId:u,mname:o.longname??u},s=ci(c,t),l={anchor:a,displayText:s,symbolName:c};r.has(o.id)||r.set(o.id,l),r.has(u)||r.set(u,l);const f=`${u}:short`;r.has(f)||r.set(f,{anchor:a,displayText:u})}for(const o of n.get_tchoice_decls()){const u=wt(o.id),a=`#tchoice-${u}`,c={bareId:u,mname:o.longname??u};r.has(o.id)||r.set(o.id,{anchor:a,displayText:ci(c,t),symbolName:c})}for(const o of n.definedSym){const u=o.id.startsWith("definedSym:")?o.id.slice(11):o.id,c={anchor:`#defsym-${u}`,displayText:u};r.has(u)||r.set(u,c),r.has(o.id)||r.set(o.id,c)}return r}function Cw(n){const e=new Map;for(const r of n.isym_entries()){if(!r.longname)continue;const t=r.id.startsWith("isym:")?r.id:`isym:${r.id}`;e.set(t,r.longname)}return e}function ci(n,e){return e?n.mname:n.bareId}const Mw={point:"=",sample:"~",bounds:"∈"};function K_(n){return Mw[n]}function Dt(n){return n.svar_entries().map(({bareName:e})=>`{expr:${e}}`)}function uh(n,e,r,t,i){t.footnoteCounter.n++;const o=t.footnoteCounter.n,u=`${t.footnoteIdNamespace??""}${o}`,a=e?t.renderBody(e):"",c=r?`<a href="${r}" class="popover-go">go →</a>`:"";t.footnotes.push({id:u,body:a+c});const s=z_(i);return`<span class="ref-popover${s.classSuffix}" data-fnref="fnref:${u}"${s.dataAttrs}>${n}</span><sup id="fnref:${u}" class="lf-zero"><a href="#fn:${u}">${o}</a></sup>`}function qw(n,e,r){const t=z_(r);return`<a href="${n}"${t.classAttr}${t.dataAttrs}>${e}</a>`}function z_(n){if(!n)return{classAttr:"",classSuffix:"",dataAttrs:""};const e=` data-bareid="${ve(n.bareId)}" data-mname="${ve(n.mname)}"`;return{classAttr:` class="${x1}"`,classSuffix:` ${x1}`,dataAttrs:e}}function Nw(n,e,r,t){const i=u=>r!==void 0&&r.popoverAllRefs;let o=n;return o=o.replace(Sw,(u,a,c)=>{if(i()){const f=r.lookup.get(c),d=(f==null?void 0:f.anchor)??`#${c}`,p=(f==null?void 0:f.body)??"";return uh(a,p,d,r)}const s=e.get(c);return`<a href="${s?s.anchor:`#isym-${c}`}">${a}</a>`}),o=o.replace(Aw,(u,a)=>{if(i()){const s=r.lookup.get(a);if(!s)return t==null||t.add(a),`${P1}${a}${H1}`;const l=e.get(a);return uh(s.label,s.body,s.anchor,r,l==null?void 0:l.symbolName)}const c=e.get(a);return c?qw(c.anchor,c.displayText,c.symbolName):(t==null||t.add(a),`${P1}${a}${H1}`)}),o}const Fw=10;function Tw(n,e,r,t){let i=n;for(let o=0;o<Fw;o++){const u=Nw(i,e,r,t);if(u===i)break;i=u}return i.replace(Rw,"$1")}function B1(n,e){const r=Ow(n),t=new Map;for(const[i,o]of e){const u=r.get(o.anchor)??"";t.set(i,{label:o.displayText,body:u,anchor:o.anchor})}return t}function Ow(n){const e=new Map;for(const r of n.isym_entries()){const t=r.id.replace(/^isym:/,"");e.set(`#isym-${t}`,r.defn)}for(const r of mp(n))e.set(r.anchor,r.defn);for(const r of n.svar_decls()){const t=W_(r.id);e.set(`#gloss-${t}`,r.defn)}for(const r of n.get_display_form_keys()){const t=n.get_display_form(r);e.set(`#form-${vp(r)}`,t)}for(const r of n.get_axioms()){const t=n.get_display_ax(r.id);t&&e.set(`#${bp}${$t(r.id)}`,t)}for(const r of n.get_options()){const t=Te(r.id);e.set(`#opt-${t}`,r.defn)}for(const r of n.get_tchoice_decls())e.set(`#tchoice-${wt(r.id)}`,r.defn);for(const r of n.definedSym){const t=r.id.startsWith("definedSym:")?r.id.slice(11):r.id,i=n.get_display_definedSym_or_none(r.id)??"",o=[];i&&o.push(`:= ${i}`),r.defn&&o.push(r.defn),e.set(`#defsym-${t}`,o.join(" — "))}return e}class Dw extends j_{constructor(r,t,i){super(r);Fe(this,"cparam_overrides");Fe(this,"aopt_overrides");Fe(this,"query_mode");const o=new Set(this.get_option_bare_names()),u=this.get_tchoice_bare_names(),a=new Map,c=new Map;for(const[s,l]of Object.entries(t)){if(u.has(s))throw new Error(`Cannot override tchoice entity "${s}" for ${this.aid}: it is left free for the responder to choose.`);if(!o.has(s))throw new Error(`Unknown option key "${s}" for ${this.aid}. Valid keys: ${[...o].sort().join(", ")}`);const f=this.find_cparam(s);if(f){if(i!=="plainnum")throw new Error(`Cannot fix cparam "${s}" for ${this.aid} in ${i} mode: cparams are free in plaincode/richcode (the responder covers all combinations).`);a.set(f.id,l)}else c.set(this.get_aopt(s).id,l)}this.cparam_overrides=a,this.aopt_overrides=c,this.query_mode=i}is_code_mode(){return this.query_mode!=="plainnum"}option_value(r){const t=this.find_cparam(r);if(t)return this.cparam_overrides.get(t.id)??t.default_value;const i=this.get_aopt(r);return this.aopt_overrides.get(i.id)??i.default_value}option_value_or(r,t){return this.get_option_bare_names().includes(r)?this.option_value(r):t}}function J_(n,e,r){return new Dw(n._get_data(),e,r)}function gp(n,e){if("input_type"in n&&n.input_type==="MultiStringFromSet"){if(!Array.isArray(e)||!e.every(i=>typeof i=="string"))throw new Error(`Invalid MultiStringFromSet value for ${n.id}: expected a string array`);if(!Array.isArray(n.allowed_values))throw new Error(`Invalid MultiStringFromSet declaration for ${n.id}: missing allowed_values`);const r=new Set(n.allowed_values),t=e.filter(i=>!r.has(i));if(t.length>0)throw new Error(`Invalid MultiStringFromSet value for ${n.id}: values not in allowed_values: `+t.join(", "));return[...e]}if(typeof e=="object")throw new Error(`Invalid scalar value for ${n.id}: expected string, number, or boolean`);if(typeof n.default_value=="boolean"){if(typeof e=="boolean")return e;if(e==="true")return!0;if(e==="false")return!1;throw new Error(`Invalid boolean value for ${n.id}: ${e}`)}if(typeof n.default_value=="number"){if(typeof e=="boolean"||typeof e=="string"&&e.trim()==="")throw new Error(`Invalid numeric value for ${n.id}: ${e}`);const r=Number(e);if(!Number.isFinite(r))throw new Error(`Invalid numeric value for ${n.id}: ${e}`);return r}if(typeof n.default_value=="string"){if(typeof e!="string")throw new Error(`Invalid string value for ${n.id}: ${e}`);return e}throw new Error(`Option ${n.id} has no supported default value type`)}function ah(n,e){return n!=="typical"||e}function Pw(n,e){const r=n.map(u=>({name:Te(u.id),values:u.allowed_values.filter(a=>typeof a!="boolean")}));if(r.length===0)return{names:[],combinations:[{}]};const t=r.map(u=>u.name),i=r.map(u=>u.values);let o=[{}];for(let u=0;u<t.length;u++){const a=t[u],c=i[u],s=[];for(const l of o)for(const f of c)s.push({...l,[a]:f});o=s}return e!==void 0&&(o=o.filter(u=>e(u))),{names:t,combinations:o}}function Q_(n,e,r){const t=new Set(n.get_cparam_bare_names()),i=r!=="plainnum",o={};for(const[u,a]of Object.entries(e))i&&t.has(u)||(o[u]=a);return o}const Hw=[{id:"symbolMnames",description:"Long symbol names",type:"boolean",default:!1},{id:"popoverAllRefs",description:"Popovers for all refs",type:"boolean",default:!0},{id:"persistentPopovers",description:"Persistent popovers (multiple, Esc to close)",type:"boolean",default:!1},{id:"inputMode",description:"Response type",type:"enum",values:["point","bounds","sample"],default:"sample"},{id:"probAsOdds",description:"Stats display",type:"enum",values:["probability","odds"],default:"probability"},{id:"showExampleClassification",description:"Show example classifications",type:"boolean",default:!0},{id:"showFramingNotes",description:"Show framing notes",type:"boolean",default:!0},{id:"mcItersInitialPerPlot",description:"MC iters per plot (initial)",type:"integer",default:1e4},{id:"mcItersPerClickPerPlot",description:"MC iters per plot (+ click)",type:"integer",default:5e3},{id:"plaincodeEvalTimeoutMs",description:"Code eval timeout (ms)",type:"integer",default:5e3}],xw={options:Hw},_p=xw.options,Bw=new Map(_p.map(n=>[n.id,n.description]));function sh(n){return Bw.get(n)??n}const Ko=Object.freeze(_p.reduce((n,e)=>(n[e.id]=e.default,n),{})),Z_="global_options";function pn(){try{const n=localStorage.getItem(Z_);if(n===null)return{...Ko};const e=JSON.parse(n);return{...Ko,...e}}catch{return{...Ko}}}function Uw(n){localStorage.setItem(Z_,JSON.stringify(n))}function St(n,e){const r=pn();r[n]=e,Uw(r)}const Ww=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),jw=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);function Mn(n,e){return n>>>e|n<<32-e}function e7(n){const e=new TextEncoder().encode(n),r=e.length<<3>>>0,t=Math.floor(e.length/536870912),i=e.length+9+63&-64,o=new Uint8Array(i);o.set(e),o[e.length]=128;const u=new DataView(o.buffer);u.setUint32(i-8,t),u.setUint32(i-4,r);const a=new Uint32Array(jw),c=new Uint32Array(64);for(let l=0;l<i;l+=64){for(let _=0;_<16;_++)c[_]=u.getUint32(l+_*4);for(let _=16;_<64;_++){const y=c[_-15],E=c[_-2],I=Mn(y,7)^Mn(y,18)^y>>>3,A=Mn(E,17)^Mn(E,19)^E>>>10;c[_]=c[_-16]+I+c[_-7]+A|0}let f=a[0],d=a[1],p=a[2],h=a[3],v=a[4],m=a[5],b=a[6],g=a[7];for(let _=0;_<64;_++){const y=Mn(v,6)^Mn(v,11)^Mn(v,25),E=v&m^~v&b,I=g+y+E+Ww[_]+c[_]|0,A=Mn(f,2)^Mn(f,13)^Mn(f,22),C=f&d^f&p^d&p,k=A+C|0;g=b,b=m,m=v,v=h+I|0,h=p,p=d,d=f,f=I+k|0}a[0]=a[0]+f|0,a[1]=a[1]+d|0,a[2]=a[2]+p|0,a[3]=a[3]+h|0,a[4]=a[4]+v|0,a[5]=a[5]+m|0,a[6]=a[6]+b|0,a[7]=a[7]+g|0}let s="";for(let l=0;l<8;l++)s+=(a[l]>>>0).toString(16).padStart(8,"0");return s}const n7=5;function ch(n){const e={};for(const r of Object.keys(n).sort())e[r]=n[r];return e}function Gw(n){return e7(JSON.stringify(n)).slice(0,n7)}function r7(n,e,r,t){const i=[e,ch(r)];return n==="plainnum"&&i.push(ch(t??{})),e7(JSON.stringify(i)).slice(0,n7)}const Vw={boolrv:"BoolRV",real:"ℝ",prop:"Prop"},Xw=["expr:","form:"],Yw=["textchunk:","aopt:","cparam:"],Kw=10;function zw(n){const e=new Map;for(const r of n.get_options()){if(hp(r)&&r.variant_producing)continue;const t=t7(r.id);if(n.is_code_mode()&&yr(r.id)){e.set(t,`${P1}${t}:short${H1}`);continue}e.set(t,String(n.option_value(t)))}for(const r of n.get_textchunks()){const t=r.id.startsWith("textchunk:")?r.id.slice(10):r.id;e.set(t,r.defn)}return e}function t7(n){for(const e of Yw)if(n.startsWith(e))return n.slice(e.length);return n}function Jw(n,e){const r=zw(e);let t=n;for(let i=0;i<Kw;i++){const o=t.replace(ww,(u,a)=>{for(const l of Xw)if(a.startsWith(l))return u;const c=t7(a),s=r.get(c);if(s===void 0)throw new Error(`Template variable ${G_}${a}${V_} not found in non-variant-producing options or textchunks`);return s});if(o===t)break;t=o}return t.replace(Iw,"$1")}const Qw=10;function Zw(n){const e=new Map;for(const t of n.get_display_expr_keys())e.set(t,n.get_display_expr(t));const r=new Set(n.form.filter(t=>!t.hide).map(t=>t.id));for(const t of n.get_display_form_keys())r.has(t)&&e.set(t,n.get_display_form(t));return e}function e$(n,e){let r=n;for(let t=0;t<Qw;t++){const i=r.replace($w,(o,u)=>{const a=e.get(u);if(a===void 0)throw new Error(`Display ref ${G_}${u}${V_} not found in display.expr or display.form`);return a});if(i===r)break;r=i}return r}const i7="footnotes-container",yp="footnotes-container-calc",n$="calc:";function r$(n,e,r,t=""){return Ri.lastIndex=0,n.replace(Ri,(i,o)=>{e.n++;const u=e.n,a=`${t}${u}`;return r.push({id:a,body:o}),`<sup id="fnref:${a}"><a href="#fn:${a}">${u}</a></sup>`})}function t$(n){return Ri.lastIndex=0,n.replace(Ri,(e,r)=>`(${r})`)}function i$(n,e){return n.filter(r=>e.querySelector(`[href="#fn:${r.id}"]`)!==null)}function o7(n){return n.map(e=>`<li id="fn:${e.id}"><p>${e.body}<a href="#fnref:${e.id}" class="footnote-backref">↩</a></p></li>`).join("")}const o$=2,u$="&nbsp;".repeat(o$),u7="framing-slot",a7="data-framing-anchor";function Pt(n,e){return n.jprobInstance.framing_static_anchor_ids().has(e)?`<div class="${u7}" ${a7}="${ve(e)}"></div>`:""}const a$="bare-id-label";function Ep(n,e){return n.showBareIds??!1?`<span class="${a$}">${ne(e)}</span>`:""}const lh="text-paragraph",s$="text-unindented-paragraph",c$="text-blockquote",fh=/^>[ ]?/,l$="❝",s7="srcquote-widget",wp="srcquote-glyph",c7="srcquote-popover",f$="srcquote-attribution",d$="srcquotes-inline",p$={atStart:"",atEnd:""};function l7(n,e){return Se(n.defn,e)+`<span class="${f$}">— ${ne(n.attribution)}</span>`}function h$(n,e){const r={...e,insidePopoverBody:!0},t=n.map(i=>l7(i,r)).join("");return`<span class="${s7}"><button class="${wp}" type="button" aria-expanded="false" aria-label="Source quotes">${l$}</button><span class="${c7}" hidden>${t}</span></span>`}function v$(n,e){const r=n.map(t=>l7(t,e));return`<span class="${d$}">${r.join("")}</span>`}function kn(n,e){if(!n||n.length===0)return p$;const r=e.jprobInstance.resolve_srcquotes(n);return e.srcquotesInlined??!1?{atStart:"",atEnd:v$(r,e)}:{atStart:h$(r,e),atEnd:""}}const m$=!0;function vt(n,e,r){var t;return((t=n==null?void 0:n[e])==null?void 0:t[r])??m$}function Se(n,e){let r=Jw(n,e.jprobInstance);const t=Zw(e.jprobInstance);r=e$(r,t);const i=g$(e);return r=Tw(r,e.refLookup,i,e.unresolvedRefs),e.insidePopoverBody?r=t$(r):e.footnoteCounter&&e.footnotes&&(r=r$(r,e.footnoteCounter,e.footnotes,e.footnoteIdNamespace)),r=b$(r),r}function b$(n){const e=n.split(/(\n\t)|(\n{2,})/);if(e.length===1)return zo(n,null);let r=zo(e[0],lh);for(let t=1;t<e.length;t+=3){const i=e[t],o=e[t+2];r+=zo(o,i!==void 0?lh:s$)}return r}function zo(n,e){if(!n)return"";const r=[];for(const u of n.split(`
`)){const a=fh.test(u),c=a?u.replace(fh,""):u,s=r[r.length-1];s&&s.isQuote===a?s.lines.push(c):r.push({isQuote:a,lines:[c]})}const t=u=>{const a=u.lines.join("<br>");return u.isQuote?`<span class="${c$}">${a}</span>`:a},i=r.length===1?r[0]:void 0;if(i!=null&&i.isQuote)return t(i);const o=r.map(t).join("");return e===null?o:`<span class="${e}">${o}</span>`}function g$(n){if(!n.popoverLookup||!n.footnoteCounter||!n.footnotes||n.insidePopoverBody||!n.popoverAllRefs)return;const e={...n,insidePopoverBody:!0};return{lookup:n.popoverLookup,footnoteCounter:n.footnoteCounter,footnotes:n.footnotes,footnoteIdNamespace:n.footnoteIdNamespace,popoverAllRefs:n.popoverAllRefs??!1,renderBody:r=>Se(r,e)}}function _$(n,e){return n.get_isym(e).longname??e}function y$(n){return n.startsWith("isym:")?n.slice(5):n}function E$(n,e){return n.get_isym(e).kind}function w$(n,e){const r=Vw[E$(n,e)];let t=`${e} : ${r}`;const i=_$(n,e);return i&&e!==i&&(t+=`${u$}(aka ${i})`),t}function $$(n){if(!n.args||n.args.length===0)return n.id.slice(11);const e=n.id.slice(11),r=n.args.map(t=>`<i>${typeof t=="string"?t:t.name}</i>`);return`${e}(${r.join(", ")})`}function S$(n){const e=[];for(const r of n.jprobInstance.definedSym){if(r.always_inline)continue;const t=n.jprobInstance.get_display_definedSym_or_none(r.id);if(!t)continue;const o=`defsym-${r.id.slice(11)}`,u=$$(r),a=Se(t,n),s=[`<h3>${`${u} ≔ ${a}`}</h3>`],l=kn(r.srcquotes,n);r.defn?s.push(`<p class="definition">${l.atStart}${Se(r.defn,n)}${l.atEnd}</p>`):(l.atStart||l.atEnd)&&s.push(`<p class="definition">${l.atStart}${l.atEnd}</p>`),s.push(Pt(n,r.id)),e.push(`<div class="defsym-card" id="${o}">${s.join("")}</div>`)}return e.join("")}function A$(n){const e=mp(n.jprobInstance);if(!e.length)return"";const r=[];for(const t of e){const i=kn(n.jprobInstance.get_textdefn(t.id).srcquotes,n);r.push(`<dt id="${t.anchorId}">${t.displayTerm}</dt><dd>${i.atStart}${Se(t.defn,n)}${i.atEnd}${Pt(n,`textdefn:${t.bareName}`)}</dd>`)}return`<dl class="definitions">${r.join("")}</dl>`}function k$(n){const e=n.jprobInstance.isym_entries();if(!e.length)return"";const r=[];for(const t of e){const i=y$(t.id);if(n.jprobInstance.can_consolidate_isym_svar(`isym:${i}`))continue;const o=[];o.push(`<h3>${w$(n.jprobInstance,i)}</h3>`);const u=kn(t.srcquotes,n);o.push(`<p class="definition">${u.atStart}${Se(t.defn,n)}${u.atEnd}</p>`);const a=(t.pos??[]).filter(f=>ah(f.classification,n.showTypical)),c=(t.neg??[]).filter(f=>ah(f.classification,n.showTypical)),s=vt(n.exampleFoldState,i,"pos"),l=vt(n.exampleFoldState,i,"neg");if(a.length>0||c.length>0){const f=[];a.length>0&&f.push(`<button class="ex-btn pos${s?" active":""}" data-isym="${i}" data-type="pos" title="Satisfying examples">+</button>`),c.length>0&&f.push(`<button class="ex-btn neg${l?" active":""}" data-isym="${i}" data-type="neg" title="Falsifying examples">&minus;</button>`),o.push(`<div class="example-controls">${f.join("")}</div>`)}if(a.length>0){const f=a.map(d=>{const p=d.alias?` id="ex-${d.alias}"`:"",h=n.showExampleClassification?`<span class="classification">${d.classification.charAt(0).toUpperCase()+d.classification.slice(1)}:</span> `:"",v=kn(d.srcquotes,n);return`<li${p}>${h}${v.atStart}${Se(d.defn,n)}${v.atEnd}</li>`});o.push(`<div class="examples pos${s?" visible":""}"><p>Satisfying examples:</p><ul>${f.join("")}</ul></div>`)}if(c.length>0){const f=c.map(d=>{const p=d.alias?` id="ex-${d.alias}"`:"",h=n.showExampleClassification?`<span class="classification">${d.classification.charAt(0).toUpperCase()+d.classification.slice(1)}:</span> `:"",v=kn(d.srcquotes,n);return`<li${p}>${h}${v.atStart}${Se(d.defn,n)}${v.atEnd}</li>`});o.push(`<div class="examples neg${l?" visible":""}"><p>Falsifying examples:</p><ul>${f.join("")}</ul></div>`)}o.push(Pt(n,`isym:${i}`)),r.push(`<div class="isym-card" id="isym-${i}">${o.join("")}</div>`)}return r.join("")}function L$(n){const e=[];for(const r of n.jprobInstance.get_axioms()){const t=n.jprobInstance.get_display_ax(r.id);if(!t)continue;const i=$t(r.id),o=r.defn?`<div class="fixed-ax-defn">${Se(r.defn,n)}</div>`:"",u=Pt(n,r.id),a=kn(r.srcquotes,n);e.push(`<div class="fixed-ax-card" id="${bp}${i}">`+Ep(n,i)+`<div class="fixed-ax-expr">${a.atStart}${Se(t,n)}</div>${o}${a.atEnd}${u}</div>`)}return e.length===0?"":`<div class="fixed-assumptions">${e.join("")}</div>`}function I$(n){const e=[];for(const r of X_(n.jprobInstance)){const t=n.jprobInstance.get_display_form(r),i=vp(r);e.push(`<div class="formula" id="form-${i}">`+Ep(n,i)+Se(t,n)+Pt(n,r)+"</div>")}return e.join("")}const Jn="0",Ci="1",f7=["plaincode","plainnum"];function d7(n,e){return e==="plainnum"?n.adhocPlainnumEntries:n.adhocPlaincodeEntries}function R$(n,e,r){return e==="plainnum"?n.plainnum[r.resultIndex]:n.plaincode[r.resultIndex]}function C$(n){const e=Object.keys(n.reasoning_response).some(u=>n.reasoning_response[u]!==""),r=n.misc_response!=="",t=n.verified_code_input!==void 0&&n.verified_code_input!=="",i=n.trial_choices!==void 0&&Object.keys(n.trial_choices).length>0;if(!e&&!r&&!t&&!i)return[];const o={};return t&&(o.source_code=n.verified_code_input),e&&(o.reasoning=n.reasoning_response),r&&(o.misc=n.misc_response),i&&(o.trial_choices=n.trial_choices),[o]}function io(n){return{...n,model:"user",version:"",effort:null,content_hash:"",prompt_file_basename:"yours-plaincode",trial_metadata:C$(n)}}function M$(n){const e=[],r=[];for(let t=0;t<n.length;t++){const i=n[t];for(let o=0;o<i.plainnum.length;o++)e.push({presetIndex:t,resultIndex:o});for(let o=0;o<i.plaincode.length;o++)r.push({presetIndex:t,resultIndex:o})}return{plainnum:e,plaincode:r}}function q$(n,e,r){const t=n.name_or_pseudoname,o=n.plainnum.length>0&&n.plaincode.length>0?` [${e}]`:"",u=r.prompt_file_basename?` (${r.prompt_file_basename})`:"";return`${t}${o} ${r.label}${u}`}const N$=["prompt","plainnum"];function F$(n){return n.filter(e=>N$.some(r=>e.prompt_file_basename.startsWith(r)))}function T$(n){return n.filter(e=>e.prompt_file_basename.startsWith("plaincode"))}function O$(n){return n.filter(e=>e.prompt_file_basename.startsWith("richcode"))}function D$(n){const e=new Map,r=(o,u,a,c,s)=>`${o}\0${u}\0${a??""}\0${c}\0${s??""}`,t=o=>({model:o.model,version:o.version,effort:o.effort,label:o.label,content_hash:o.content_hash,aggregate:o.aggregate,plainnumIndex:null,plaincodeIndex:null,richcodeIndex:null,availableModes:[]});for(let o=0;o<n.plainnumResults.length;o++){const u=n.plainnumResults[o],a=r(u.model,u.version,u.effort,u.content_hash),c=e.get(a);if(c)c.plainnumIndex===null&&(c.plainnumIndex=o,c.availableModes=["plainnum",...c.availableModes.filter(s=>s!=="plainnum")]);else{const s=t(u);s.plainnumIndex=o,s.availableModes=["plainnum"],e.set(a,s)}}for(let o=0;o<n.plaincodeResults.length;o++){const u=n.plaincodeResults[o],a=r(u.model,u.version,u.effort,u.content_hash,u.aggregate),c=e.get(a);if(c)c.plaincodeIndex===null&&(c.plaincodeIndex=o,c.availableModes.includes("plaincode")||c.availableModes.push("plaincode"));else{const s=t(u);s.plaincodeIndex=o,s.availableModes=["plaincode"],e.set(a,s)}}for(let o=0;o<n.richcodeResults.length;o++){const u=n.richcodeResults[o],a=r(u.model,u.version,u.effort,u.content_hash,u.aggregate),c=e.get(a);if(c)c.richcodeIndex===null&&(c.richcodeIndex=o,c.availableModes.includes("richcode")||c.availableModes.push("richcode"));else{const s=t(u);s.richcodeIndex=o,s.availableModes=["richcode"],e.set(a,s)}}const i=o=>o.aggregate==="all"?0:o.aggregate==="model_size"?1:o.aggregate==="model_size__version"?2:3;return Array.from(e.values()).sort((o,u)=>i(o)-i(u))}function P$(n){return n.effort?`${n.label} ${n.effort}`:n.label}function H$(n){const e=new Map,r=n.map(P$);for(const t of r)e.set(t,(e.get(t)??0)+1);return r.map((t,i)=>e.get(t)>1?`${t} [${n[i].content_hash}]`:t)}function me(n){const e=n.indexOf(":");return e===-1?{source:n,index:-1}:{source:n.slice(0,e),index:parseInt(n.slice(e+1))}}function Ze(n){return n.slice(0,n.indexOf("-"))}function bn(n){return n.slice(n.indexOf("-")+1)}function De(n){return Ze(me(n).source)==="yours"}function p7(n){return Ze(n)==="adhoc"}function x$(n){return Ze(n)==="metho"}function Je(n,e){var i,o;const{source:r,index:t}=me(n);if(Ze(r)==="yours")return null;if(r==="adhoc-plainnum"){const u=e.adhocPlainnumEntries[t];return u?((i=e.adhocPresets[u.presetIndex])==null?void 0:i.plainnum[u.resultIndex])??null:null}if(r==="adhoc-plaincode"){const u=e.adhocPlaincodeEntries[t];if(!u)return null;const a=(o=e.adhocPresets[u.presetIndex])==null?void 0:o.plaincode[u.resultIndex];return a?io(a):null}return r==="metho-plainnum"?e.plainnumResults[t]??null:r==="metho-plaincode"?e.plaincodeResults[t]??null:r==="metho-richcode"?e.richcodeResults[t]??null:null}function h7(n,e){var o;const{source:r,index:t}=me(n);if(r!=="adhoc-plaincode")return null;const i=e.adhocPlaincodeEntries[t];return i?((o=e.adhocPresets[i.presetIndex])==null?void 0:o.plaincode[i.resultIndex])??null:null}function B$(n,e){const r=Je(n,e);if(!De(n)&&r===null)throw new Error(`Chosen result ${JSON.stringify(n)} is missing from the loaded data`)}function U$(n,e){const{source:r,index:t}=me(n);if(r==="adhoc-plainnum"){const i=e.adhocPlainnumEntries[t];return i?e.adhocPresets[i.presetIndex]??null:null}if(r==="adhoc-plaincode"){const i=e.adhocPlaincodeEntries[t];return i?e.adhocPresets[i.presetIndex]??null:null}return null}function v7(n,e){if(!e)return{point:!0,bounds:!0,sample:!0};const{source:r}=me(n),i=bn(r)!=="plainnum";i&&Sp(e);const o=i?e.cparam_combos.flatMap(a=>a.trials):e.trials,u=a=>o.some(c=>Object.keys(c[a]).length>0);return{point:u("point"),bounds:(!i||$p(e))&&u("bounds"),sample:u("sample")}}function $p(n){return n.count===1}function Sp(n){for(const[e,r]of n.cparam_combos.entries())if(r.trials.length===0||r.trials.length>n.count)throw new Error(`Code result cparam combo ${e} carries ${r.trials.length} trials; expected between 1 and the record trial count ${n.count}`)}function Ap(n,e,r){if(e==="point"){const i=n.point[r];return i===void 0?"":String(i)}if(e==="bounds"){const i=n.bounds[r];return i?`${i[0]} ${i[1]}`:""}const t=n.sample[r];return t?typeof t=="string"?t:t.map(([i,o])=>`(${i} ${o})`).join(" "):""}function m7(n,e){return["point","bounds","sample"].filter(r=>e.length>0&&e.every(t=>Ap(n,r,t)!==""))}function W$(n,e,r){return r.map(t=>Ap(n,e,t)).join(`
`)}function j$(n,e,r,t){const{source:i}=me(n);return i==="adhoc-plainnum"||i==="metho-plainnum"?e.trials.map(u=>t.map(a=>Ap(u,r,a))):[]}function Pr(n,e,r){const t=[];for(const i of n){if(r==="code"&&yr(i.id))continue;const o=Te(i.id);if(!Object.prototype.hasOwnProperty.call(e,o))throw new Error(`Cannot compute optionDictKey: missing value for ${i.id}`);t.push([i.id,e[o]])}return t.sort(([i],[o])=>i<o?-1:i>o?1:0),JSON.stringify(t)}const b7="yours_code";function oo(n,e){return`${b7}_${n}_${e}`}function g7(n,e){const r={};for(const t of n.get_aopts()){const i=Te(t.id);i in e&&(r[i]=e[i])}return{aid:n.aid,label:"code",aopts:r,count:1,cparam_names:[],cparam_combos:[],raw_code_input:"",reasoning_response:{},misc_response:"",trial_choices:n.get_enum_tchoice_defaults()}}function G$(n,e,r){const t=X$(oo(n.aid,e));return t||g7(n,r)}function Ht(n,e,r,t){t.timestamp||(t.timestamp=new Date().toISOString()),t.content_hash=r7("code",e,t.aopts,void 0),Y$(oo(n.aid,r),t)}function kp(n){const e=`${b7}_${n}_`,r=[];for(let t=0;t<localStorage.length;t++){const i=localStorage.key(t);if(i===null||!i.startsWith(e))continue;const o=localStorage.getItem(i);if(o===null)continue;let u;try{u=JSON.parse(o)}catch{continue}r.push({codeOptionDictKey:i.slice(e.length),record:u})}return r.sort((t,i)=>{const o=t.record.timestamp??"";return(i.record.timestamp??"").localeCompare(o)}),r}function V$(n,e){localStorage.removeItem(oo(n,e))}function X$(n){try{const e=localStorage.getItem(n);return e===null?null:JSON.parse(e)}catch{return null}}function Y$(n,e){localStorage.setItem(n,JSON.stringify(e))}function uo(n,e){const r={};for(const t of n){const i=Te(t.id),o=e[i]??t.default_value;r[i]=gp(t,o)}return r}function K$(n,e){const r={...e};for(const t of n){if(!("input_type"in t)||t.input_type!=="MultiStringFromSet")continue;const i=Te(t.id),o=e[i];if(!Array.isArray(o)||!o.every(c=>typeof c=="string")||!Array.isArray(t.allowed_values))continue;const u=new Set(t.allowed_values),a=o.filter(c=>!u.has(c));a.length!==0&&(console.warn(`Ignoring MultiStringFromSet values no longer allowed for ${t.id}: `+a.join(", ")),r[i]=o.filter(c=>u.has(c)))}return r}const _7="aopt",y7="ui",z$="yours";function Mi(n,e){return`${n}_${e}`}function ao(n,e){return`${z$}_${n}_${e}`}const J$={whose:"yours-plainnum",lastYoursWhose:"yours-plainnum",lastAdhocWhose:"",lastMethoWhose:"",exampleFoldState:{},framingFoldState:{},jointDependenceEditorOpen:!1,srcquotesInlinedOverride:null,cparamPinned:{},cparamValues:{},codeSweepMode:"average",codePlotTargetKind:"formula",codePlotFormulaId:"",codePlotRawResponseName:"",modelEffortPinned:!0,modelEffortSweepScope:null,assumptionTrialIndex:0,presetQueryModeFilter:"all"};function E7(n){const e=pn();return{...structuredClone(J$),inputMode:e.inputMode,probAsOdds:e.probAsOdds,symbolMnames:e.symbolMnames,popoverAllRefs:e.popoverAllRefs,persistentPopovers:e.persistentPopovers,showExampleClassification:e.showExampleClassification,showFramingNotes:e.showFramingNotes}}function w7(n,e){const r={},t={};for(const i of n){const o=Te(i.id);o in e&&(yr(i.id)?t[o]=e[o]:r[o]=e[o])}return{aopts:r,cparam_values:t}}function $7(n,e){const{aopts:r,cparam_values:t}=w7(n.get_options(),e);return{aid:n.aid,label:"",prompt_file_basename:"",aopts:r,cparam_values:t,count:1,trials:[{point:{},bounds:{},sample:{}}],precomputed:{},raw_input:{},trial_choices:n.get_enum_tchoice_defaults()}}function Q$(n){const e=uo(n.get_options(),{}),r=Pr(n.get_options(),e,"plainnum"),t=Pr(n.get_options(),e,"code");return{optionValues:e,plainnumOptionDictKey:r,codeOptionDictKey:t,ui:E7(),yoursRecord:$7(n,e),yoursCodeRecord:g7(n,e)}}function Z$(n,e,r){return{...n,[e]:{pos:vt(n,e,"pos"),neg:vt(n,e,"neg"),[r]:!vt(n,e,r)}}}function eS(n){if(n==="yours")return"yours-plainnum";const e=n.indexOf(":");if(e===-1)return n;const r=n.slice(0,e),t=n.slice(e);return r==="plainnum"?"metho-plainnum"+t:r==="plaincode"?"metho-plaincode"+t:r==="richcode"?"metho-richcode"+t:n}function S7(n,e){return!e&&n==="yours-plaincode"?"yours-plainnum":n}function nS(n,e,r){const t=At(ao(n.aid,e));return t||$7(n,r)}function rS(n){const e=n.config.localStorage_prefix,r=n.get_options(),t=Q$(n),i=At(Mi(e,_7)),o=i?uo(r,K$(r,i)):t.optionValues,u=Pr(r,o,"plainnum"),a=Pr(r,o,"code"),c=E7(),s=At(Mi(e,y7));s&&typeof s.whose=="string"&&(s.whose=eS(s.whose));let l=s?{...c,...s}:{...c};l={...l,whose:S7(l.whose,n.has_cparams())},(l.whose==="yours-plainnum"||l.whose==="yours-plaincode")&&(l={...l,lastYoursWhose:l.whose});const f=Ze(me(l.whose).source);f==="adhoc"?l={...l,lastAdhocWhose:l.whose}:f==="metho"&&(l={...l,lastMethoWhose:l.whose});const d=nS(n,u,o),p=G$(n,a,o);return{optionValues:o,plainnumOptionDictKey:u,codeOptionDictKey:a,ui:l,yoursRecord:d,yoursCodeRecord:p}}function Lp(n,e){const r=n.localStorage_prefix;Rp(Mi(r,_7),e)}function Ne(n,e){const r=n.localStorage_prefix;Rp(Mi(r,y7),e)}function Ip(n,e,r,t){t.timestamp||(t.timestamp=new Date().toISOString()),t.content_hash=r7("plainnum",e,t.aopts,t.cparam_values??{}),Rp(ao(n.aid,r),t)}function tS(n,e,r){const{aopts:t,cparam_values:i}=w7(e.get_options(),r);return{...n,aopts:t,cparam_values:i,raw_input:{...n.raw_input??{}},trial_choices:{...n.trial_choices??{}},lloads_draft:n.lloads_draft===void 0?void 0:structuredClone(n.lloads_draft),trials:n.trials.map(o=>({point:{...o.point},bounds:{...o.bounds},sample:{...o.sample},lloads:o.lloads===void 0?void 0:structuredClone(o.lloads)})),timestamp:void 0}}function iS(n,e,r){const t={};for(const i of e.get_aopts()){const o=Te(i.id);o in r&&(t[o]=r[o])}return{...n,aopts:t,reasoning_response:{...n.reasoning_response},trial_choices:{...n.trial_choices??{}},cparam_combos:[],cparam_names:[],verified_code_input:void 0,timestamp:void 0}}function dh(n,e,r,t){const i={...n.optionValues,[r]:t},o=Pr(e.get_options(),i,"plainnum"),u=Pr(e.get_options(),i,"code");let a=n.yoursRecord;o!==n.plainnumOptionDictKey&&(a=At(ao(e.aid,o))??tS(n.yoursRecord,e,i));let c=n.yoursCodeRecord;return u!==n.codeOptionDictKey&&(c=At(oo(e.aid,u))??iS(n.yoursCodeRecord,e,i)),(o!==n.plainnumOptionDictKey||u!==n.codeOptionDictKey)&&Lp(e.config,i),{optionValues:i,plainnumOptionDictKey:o,codeOptionDictKey:u,ui:n.ui,yoursRecord:a,yoursCodeRecord:c}}function oS(){const n={};for(let e=0;e<localStorage.length;e++){const r=localStorage.key(e);n[r]=localStorage.getItem(r)}return n}function uS(n){localStorage.clear();for(const[e,r]of Object.entries(n))localStorage.setItem(e,String(r))}function aS(){const n=new URLSearchParams(window.location.search),e=n.get("_preload");if(!e)return;try{const t=atob(e),i=JSON.parse(t);for(const[o,u]of Object.entries(i))localStorage.setItem(o,String(u))}catch(t){alert(`Failed to load preload state: ${t}`)}n.delete("_preload");const r=n.toString()?`${window.location.pathname}?${n}`:window.location.pathname;history.replaceState(null,"",r)}function At(n){try{const e=localStorage.getItem(n);return e===null?null:JSON.parse(e)}catch{return null}}function Rp(n,e){localStorage.setItem(n,JSON.stringify(e))}const qi=8,A7=1e-9;function Ni(n){return n===null?"null":Array.isArray(n)?"array":typeof n}function U1(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function sS(n,e,r){const t=`lloads.latents[${e}]`;if(!U1(n))return`${t}: expected an object, got ${Ni(n)}`;for(const o of["name","description"]){const u=n[o];if(typeof u!="string"||u.trim()==="")return`${t}.${o}: expected a non-empty string, got ${JSON.stringify(u)}`}const i=n.loadings;if(!U1(i))return`${t}.loadings: expected an object, got ${Ni(i)}`;if(Object.keys(i).length===0)return`${t}.loadings: empty — name the subjective variables this latent applies to, with 0 for any you considered and declined`;for(const[o,u]of Object.entries(i)){if(!r.has(o))return`${t}.loadings: '${o}' is not one of the subjective variables this jprob samples (${[...r].sort().join(", ")}), so a loading on it would have no effect`;if(typeof u!="number")return`${t}.loadings['${o}']: expected a number, got ${JSON.stringify(u)}`;if(!Number.isFinite(u))return`${t}.loadings['${o}']: ${u} is not finite`;if(u<-1||u>1)return`${t}.loadings['${o}']: ${u} not in [-1, 1]`}return null}function so(n,e,r=[]){if(n==null)return null;if(!U1(n))return`lloads: expected an object, got ${Ni(n)}`;const t=Object.keys(n).filter(s=>s!=="latents").sort();if(t.length>0)return`lloads: unexpected key(s) ${JSON.stringify(t)}`;const i=n.latents;if(!Array.isArray(i))return`lloads.latents: expected a list, got ${Ni(i)}`;if(i.length>qi)return`lloads.latents: ${i.length} latents exceeds the cap of ${qi}`;const o=new Set(e);for(const[s,l]of i.entries()){const f=sS(l,s,o);if(f!==null)return f}const u=new Map;for(const s of i)for(const[l,f]of Object.entries(s.loadings))u.set(l,(u.get(l)??0)+f**2);for(const[s,l]of[...u.entries()].sort((f,d)=>f[0]<d[0]?-1:1))if(l>1+A7)return`lloads: loading budget exceeded for '${s}' — the sum of squared loadings across latents is ${ph(l)}, over the limit of 1 by ${ph(l-1)}; no residual variance is left for it`;const a=new Set(r),c=[...u.entries()].filter(([s,l])=>l>0&&a.has(s)).map(([s])=>s).sort();return c.length>0?`lloads: ${c.map(s=>`'${s}'`).join(", ")} ${c.length===1?"has":"have"} a point-mass distribution in this response, so a loading on it has no effect; remove the loading or give it a non-degenerate distribution`:null}function ph(n){return String(Number(n.toPrecision(6)))}function co(n){return n==null?!1:n.latents.some(e=>Object.values(e.loadings).some(r=>r!==0))}function cS(n,e,r=1){if(!(r>=0&&r<=1))throw new Error(`lloads dependence strength ${r} not in [0, 1]`);const t=so(n,e);if(t!==null)throw new Error(t);const i=(n==null?void 0:n.latents)??[],o=Math.sqrt(r),u=new Map(e.map((s,l)=>[s,l])),a=e.map(()=>i.map(()=>0));for(const[s,l]of i.entries())for(const[f,d]of Object.entries(l.loadings))a[u.get(f)][s]=d*o;const c=a.map(s=>Math.sqrt(Math.max(0,1-s.reduce((l,f)=>l+f*f,0))));return{loadingMatrix:a,residualSds:c}}function hh(n,e="",r=""){return{name:e,description:r,loadings:Object.fromEntries(n.map(t=>[t,0]))}}function k7(n,e){const r=new Set(e);return{latents:n.latents.map(t=>{const i=Object.entries(t.loadings).filter(([o,u])=>!r.has(o)&&u!==0);return i.length>0&&console.warn(`joint-dependence draft: dropping loadings on subjective variable(s) ${i.map(([o])=>o).join(", ")}, which this jprob no longer samples`),{...t,loadings:Object.fromEntries(e.map(o=>[o,t.loadings[o]??0]))}})}}function L7(n,e){return n==null?{latents:[]}:k7({latents:n.latents.map(r=>({name:r.name,description:r.description,loadings:{...r.loadings}}))},e)}function lS(n){return n.latents.length===0?null:{latents:n.latents.map(e=>({name:e.name.trim(),description:e.description.trim(),loadings:Object.fromEntries(Object.entries(e.loadings).filter(r=>r[1]!==null))}))}}function I7(n,e){return Object.fromEntries(e.map(r=>[r,n.latents.reduce((t,i)=>{const o=i.loadings[r]??0;return t+o*o},0)]))}function fS(n,e){return e.map(r=>e.map(t=>r===t?1:n.latents.reduce((i,o)=>i+(o.loadings[r]??0)*(o.loadings[t]??0),0)))}function dS(n){return n.latents.some(e=>Object.values(e.loadings).some(r=>r!==null&&r!==0))}function R7(n,e,r=[],t={}){const i=s=>t[s]??s,o=[];n.latents.length>qi&&o.push({message:`${n.latents.length} latents exceeds the limit of ${qi}.`});const u=new Set;n.latents.forEach((s,l)=>{const f=`Latent ${l+1}`;s.name.trim()===""&&o.push({message:`${f} needs a short name.`,latentIndex:l,field:"name"}),s.description.trim()===""&&o.push({message:`${f} needs a description saying what its positive direction means.`,latentIndex:l,field:"description"});for(const d of e){const p=s.loadings[d]??null;p===null?(u.add(d),o.push({message:`${f}: no loading given for ${i(d)} — enter a number from −1 to +1 (0 if the latent does not apply to it).`,latentIndex:l,svar:d})):(!Number.isFinite(p)||p<-1||p>1)&&(u.add(d),o.push({message:`${f}: the loading on ${i(d)} must be between −1 and +1.`,latentIndex:l,svar:d}))}});const a=I7(n,e),c=new Set(r);for(const s of e){const l=a[s];!u.has(s)&&l>1+A7&&o.push({message:`The squared loadings on ${i(s)} sum to ${l.toFixed(3)}, over its budget of 1 by ${(l-1).toFixed(3)} — no independent variation is left for it.`,svar:s}),l>0&&c.has(s)&&o.push({message:`${i(s)} has a single-value distribution in this response, so a loading on it has no effect — zero the loading or give it a spread distribution.`,svar:s})}return o}function C7(n,e,r=[]){const t=R7(n,e,r);if(t.length>0)return{kind:"invalid",problems:t};const i=lS(n),o=so(i,e,r);if(o!==null)throw new Error("joint-dependence draft passed the editor's checks but not validateLloads: "+o);return{kind:"valid",lloads:i}}const M7=4,pS=3,hS=1e-4,vS=1e4,vh=3;function mh(n){const[e,r]=n.split("e"),t=e.includes(".")?e.replace(/0+$/,"").replace(/\.$/,""):e;return r===void 0?t:`${t}e${r}`}function mS(n){switch(n){case"deterministic":return M7;case"monte-carlo":return pS;default:{const e=n;throw new Error(`Unknown calculation precision: ${String(e)}`)}}}function Fi(n,e){if(Number.isNaN(n))return String(n);if(!Number.isFinite(n))return n>0?"∞":"-∞";if(n===0)return"0";const r=Number(n.toPrecision(e));if(r===0)return"0";const t=Math.abs(r);if(t<hS||t>=vS)return mh(r.toExponential(e-1));const i=Math.floor(Math.log10(t)),o=Math.max(0,e-1-i);return mh(r.toFixed(o))}function bS(n){return Number.isFinite(n)?n>=1?"∞:1":n<=0?"1:∞":n>=.5?`${Fi(n/(1-n),vh)}:1`:`1:${Fi((1-n)/n,vh)}`:"—"}function Ti(n,e){if(!Number.isFinite(n)||n===0)return n;const r=M7,t=Number(n.toPrecision(r));if(e==="floor"?t<=n:t>=n)return t;const i=Math.floor(Math.log10(Math.abs(t))),o=Math.pow(10,i-r+1),u=e==="floor"?t-o:t+o;return Number(u.toPrecision(r))}function Ue(n,e,r,t="deterministic"){const i=mS(t);switch(e){case"probability":return r==="odds"?bS(n):Fi(n*100,i)+"%";default:return Fi(n,i)}}function Hn(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}/**
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
*/var Jo,bh;function gS(){if(bh)return Jo;bh=1;var n=typeof Object.defineProperty=="function"?Object.defineProperty:null;return Jo=n,Jo}/**
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
*/var Qo,gh;function _S(){if(gh)return Qo;gh=1;var n=gS();function e(){try{return n({},"x",{}),!0}catch{return!1}}return Qo=e,Qo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zo,_h;function yS(){if(_h)return Zo;_h=1;var n=Object.defineProperty;return Zo=n,Zo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eu,yh;function q7(){if(yh)return eu;yh=1;function n(e){return typeof e=="number"}return eu=n,eu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nu,Eh;function N7(){if(Eh)return nu;Eh=1;function n(t){return t[0]==="-"}function e(t){var i="",o;for(o=0;o<t;o++)i+="0";return i}function r(t,i,o){var u=!1,a=i-t.length;return a<0||(n(t)&&(u=!0,t=t.substr(1)),t=o?t+e(a):e(a)+t,u&&(t="-"+t)),t}return nu=r,nu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ru,wh;function ES(){if(wh)return ru;wh=1;var n=q7(),e=N7(),r=String.prototype.toLowerCase,t=String.prototype.toUpperCase;function i(o){var u,a,c;switch(o.specifier){case"b":u=2;break;case"o":u=8;break;case"x":case"X":u=16;break;case"d":case"i":case"u":default:u=10;break}if(a=o.arg,c=parseInt(a,10),!isFinite(c)){if(!n(a))throw new Error("invalid integer. Value: "+a);c=0}return c<0&&(o.specifier==="u"||u!==10)&&(c=4294967295+c+1),c<0?(a=(-c).toString(u),o.precision&&(a=e(a,o.precision,o.padRight)),a="-"+a):(a=c.toString(u),!c&&!o.precision?a="":o.precision&&(a=e(a,o.precision,o.padRight)),o.sign&&(a=o.sign+a)),u===16&&(o.alternate&&(a="0x"+a),a=o.specifier===t.call(o.specifier)?t.call(a):r.call(a)),u===8&&o.alternate&&a.charAt(0)!=="0"&&(a="0"+a),a}return ru=i,ru}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tu,$h;function wS(){if($h)return tu;$h=1;function n(e){return typeof e=="string"}return tu=n,tu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iu,Sh;function $S(){if(Sh)return iu;Sh=1;var n=Math.abs,e=String.prototype.toLowerCase,r=String.prototype.toUpperCase,t=String.prototype.replace,i=/e\+(\d)$/,o=/e-(\d)$/,u=/^(\d+)$/,a=/^(\d+)e/,c=/\.0$/,s=/\.0*e/,l=/(\..*[^0])0*e/;function f(d,p){var h,v;switch(p.specifier){case"e":case"E":v=d.toExponential(p.precision);break;case"f":case"F":v=d.toFixed(p.precision);break;case"g":case"G":n(d)<1e-4?(h=p.precision,h>0&&(h-=1),v=d.toExponential(h)):v=d.toPrecision(p.precision),p.alternate||(v=t.call(v,l,"$1e"),v=t.call(v,s,"e"),v=t.call(v,c,""));break;default:throw new Error("invalid double notation. Value: "+p.specifier)}return v=t.call(v,i,"e+0$1"),v=t.call(v,o,"e-0$1"),p.alternate&&(v=t.call(v,u,"$1."),v=t.call(v,a,"$1.e")),d>=0&&p.sign&&(v=p.sign+v),v=p.specifier===r.call(p.specifier)?r.call(v):e.call(v),v}return iu=f,iu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ou,Ah;function SS(){if(Ah)return ou;Ah=1;function n(r){var t="",i;for(i=0;i<r;i++)t+=" ";return t}function e(r,t,i){var o=t-r.length;return o<0||(r=i?r+n(o):n(o)+r),r}return ou=e,ou}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uu,kh;function AS(){if(kh)return uu;kh=1;var n=ES(),e=wS(),r=q7(),t=$S(),i=SS(),o=N7(),u=String.fromCharCode,a=Array.isArray;function c(f){return f!==f}function s(f){var d={};return d.specifier=f.specifier,d.precision=f.precision===void 0?1:f.precision,d.width=f.width,d.flags=f.flags||"",d.mapping=f.mapping,d}function l(f){var d,p,h,v,m,b,g,_,y,E;if(!a(f))throw new TypeError("invalid argument. First argument must be an array. Value: `"+f+"`.");for(b="",g=1,y=0;y<f.length;y++)if(h=f[y],e(h))b+=h;else{if(d=h.precision!==void 0,h=s(h),!h.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+y+"`. Value: `"+h+"`.");for(h.mapping&&(g=h.mapping),p=h.flags,E=0;E<p.length;E++)switch(v=p.charAt(E),v){case" ":h.sign=" ";break;case"+":h.sign="+";break;case"-":h.padRight=!0,h.padZeros=!1;break;case"0":h.padZeros=p.indexOf("-")<0;break;case"#":h.alternate=!0;break;default:throw new Error("invalid flag: "+v)}if(h.width==="*"){if(h.width=parseInt(arguments[g],10),g+=1,c(h.width))throw new TypeError("the argument for * width at position "+g+" is not a number. Value: `"+h.width+"`.");h.width<0&&(h.padRight=!0,h.width=-h.width)}if(d&&h.precision==="*"){if(h.precision=parseInt(arguments[g],10),g+=1,c(h.precision))throw new TypeError("the argument for * precision at position "+g+" is not a number. Value: `"+h.precision+"`.");h.precision<0&&(h.precision=1,d=!1)}switch(h.arg=arguments[g],h.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":d&&(h.padZeros=!1),h.arg=n(h);break;case"s":h.maxWidth=d?h.precision:-1,h.arg=String(h.arg);break;case"c":if(!c(h.arg)){if(m=parseInt(h.arg,10),m<0||m>127)throw new Error("invalid character code. Value: "+h.arg);h.arg=c(m)?String(h.arg):u(m)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(d||(h.precision=6),_=parseFloat(h.arg),!isFinite(_)){if(!r(h.arg))throw new Error("invalid floating-point number. Value: "+b);_=h.arg,h.padZeros=!1}h.arg=t(_,h);break;default:throw new Error("invalid specifier: "+h.specifier)}h.maxWidth>=0&&h.arg.length>h.maxWidth&&(h.arg=h.arg.substring(0,h.maxWidth)),h.padZeros?h.arg=o(h.arg,h.width||h.precision,h.padRight):h.width&&(h.arg=i(h.arg,h.width,h.padRight)),b+=h.arg||"",g+=1}return b}return uu=l,uu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var au,Lh;function kS(){if(Lh)return au;Lh=1;var n=AS();return au=n,au}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var su,Ih;function LS(){if(Ih)return su;Ih=1;var n=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function e(t){var i={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return t[4]==="."&&t[5]===void 0&&(i.precision="1"),i}function r(t){var i,o,u,a;for(o=[],a=0,u=n.exec(t);u;)i=t.slice(a,n.lastIndex-u[0].length),i.length&&o.push(i),u[6]==="%"?o.push("%"):o.push(e(u)),a=n.lastIndex,u=n.exec(t);return i=t.slice(a),i.length&&o.push(i),o}return su=r,su}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cu,Rh;function IS(){if(Rh)return cu;Rh=1;var n=LS();return cu=n,cu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lu,Ch;function RS(){if(Ch)return lu;Ch=1;function n(e){return typeof e=="string"}return lu=n,lu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fu,Mh;function CS(){if(Mh)return fu;Mh=1;var n=kS(),e=IS(),r=RS();function t(i){var o,u;if(!r(i))throw new TypeError(t("invalid argument. First argument must be a string. Value: `%s`.",i));for(o=[e(i)],u=1;u<arguments.length;u++)o.push(arguments[u]);return n.apply(null,o)}return fu=t,fu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var du,qh;function MS(){if(qh)return du;qh=1;var n=CS();return du=n,du}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pu,Nh;function qS(){if(Nh)return pu;Nh=1;var n=MS(),e=Object.prototype,r=e.toString,t=e.__defineGetter__,i=e.__defineSetter__,o=e.__lookupGetter__,u=e.__lookupSetter__;function a(c,s,l){var f,d,p,h;if(typeof c!="object"||c===null||r.call(c)==="[object Array]")throw new TypeError(n("invalid argument. First argument must be an object. Value: `%s`.",c));if(typeof l!="object"||l===null||r.call(l)==="[object Array]")throw new TypeError(n("invalid argument. Property descriptor must be an object. Value: `%s`.",l));if(d="value"in l,d&&(o.call(c,s)||u.call(c,s)?(f=c.__proto__,c.__proto__=e,delete c[s],c[s]=l.value,c.__proto__=f):c[s]=l.value),p="get"in l,h="set"in l,d&&(p||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&t&&t.call(c,s,l.get),h&&i&&i.call(c,s,l.set),c}return pu=a,pu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hu,Fh;function NS(){if(Fh)return hu;Fh=1;var n=_S(),e=yS(),r=qS(),t;return n()?t=e:t=r,hu=t,hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vu,Th;function FS(){if(Th)return vu;Th=1;var n=NS();function e(r,t,i){n(r,t,{configurable:!1,enumerable:!1,writable:!1,value:i})}return vu=e,vu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mu,Oh;function en(){if(Oh)return mu;Oh=1;var n=FS();return mu=n,mu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bu,Dh;function TS(){if(Dh)return bu;Dh=1;function n(e){return e!==e}return bu=n,bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gu,Ph;function ue(){if(Ph)return gu;Ph=1;var n=TS();return gu=n,gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _u,Hh;function OS(){if(Hh)return _u;Hh=1;function n(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return _u=n,_u}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yu,xh;function DS(){if(xh)return yu;xh=1;var n=OS();return yu=n,yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eu,Bh;function PS(){if(Bh)return Eu;Bh=1;var n=DS(),e=n();function r(){return e&&typeof Symbol.toStringTag=="symbol"}return Eu=r,Eu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wu,Uh;function HS(){if(Uh)return wu;Uh=1;var n=PS();return wu=n,wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $u,Wh;function F7(){if(Wh)return $u;Wh=1;var n=Object.prototype.toString;return $u=n,$u}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Su,jh;function xS(){if(jh)return Su;jh=1;var n=F7();function e(r){return n.call(r)}return Su=e,Su}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Au,Gh;function BS(){if(Gh)return Au;Gh=1;var n=Object.prototype.hasOwnProperty;function e(r,t){return r==null?!1:n.call(r,t)}return Au=e,Au}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ku,Vh;function US(){if(Vh)return ku;Vh=1;var n=BS();return ku=n,ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lu,Xh;function WS(){if(Xh)return Lu;Xh=1;var n=typeof Symbol=="function"?Symbol:void 0;return Lu=n,Lu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iu,Yh;function jS(){if(Yh)return Iu;Yh=1;var n=WS();return Iu=n,Iu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ru,Kh;function GS(){if(Kh)return Ru;Kh=1;var n=jS(),e=typeof n=="function"?n.toStringTag:"";return Ru=e,Ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cu,zh;function VS(){if(zh)return Cu;zh=1;var n=US(),e=GS(),r=F7();function t(i){var o,u,a;if(i==null)return r.call(i);u=i[e],o=n(i,e);try{i[e]=void 0}catch{return r.call(i)}return a=r.call(i),o?i[e]=u:delete i[e],a}return Cu=t,Cu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mu,Jh;function lo(){if(Jh)return Mu;Jh=1;var n=HS(),e=xS(),r=VS(),t;return n()?t=r:t=e,Mu=t,Mu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qu,Qh;function XS(){if(Qh)return qu;Qh=1;var n=lo(),e=typeof Uint32Array=="function";function r(t){return e&&t instanceof Uint32Array||n(t)==="[object Uint32Array]"}return qu=r,qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nu,Zh;function YS(){if(Zh)return Nu;Zh=1;var n=XS();return Nu=n,Nu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fu,ev;function KS(){if(ev)return Fu;ev=1;var n=4294967295;return Fu=n,Fu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tu,nv;function zS(){if(nv)return Tu;nv=1;var n=typeof Uint32Array=="function"?Uint32Array:null;return Tu=n,Tu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ou,rv;function JS(){if(rv)return Ou;rv=1;var n=YS(),e=KS(),r=zS();function t(){var i,o;if(typeof r!="function")return!1;try{o=[1,3.14,-3.14,e+1,e+2],o=new r(o),i=n(o)&&o[0]===1&&o[1]===3&&o[2]===e-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return Ou=t,Ou}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Du,tv;function QS(){if(tv)return Du;tv=1;var n=JS();return Du=n,Du}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pu,iv;function ZS(){if(iv)return Pu;iv=1;var n=typeof Uint32Array=="function"?Uint32Array:void 0;return Pu=n,Pu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hu,ov;function eA(){if(ov)return Hu;ov=1;function n(){throw new Error("not implemented")}return Hu=n,Hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xu,uv;function Wr(){if(uv)return xu;uv=1;var n=QS(),e=ZS(),r=eA(),t;return n()?t=e:t=r,xu=t,xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bu,av;function nA(){if(av)return Bu;av=1;var n=lo(),e=typeof Float64Array=="function";function r(t){return e&&t instanceof Float64Array||n(t)==="[object Float64Array]"}return Bu=r,Bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uu,sv;function rA(){if(sv)return Uu;sv=1;var n=nA();return Uu=n,Uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wu,cv;function tA(){if(cv)return Wu;cv=1;var n=typeof Float64Array=="function"?Float64Array:null;return Wu=n,Wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ju,lv;function iA(){if(lv)return ju;lv=1;var n=rA(),e=tA();function r(){var t,i;if(typeof e!="function")return!1;try{i=new e([1,3.14,-3.14,NaN]),t=n(i)&&i[0]===1&&i[1]===3.14&&i[2]===-3.14&&i[3]!==i[3]}catch{t=!1}return t}return ju=r,ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gu,fv;function oA(){if(fv)return Gu;fv=1;var n=iA();return Gu=n,Gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vu,dv;function uA(){if(dv)return Vu;dv=1;var n=typeof Float64Array=="function"?Float64Array:void 0;return Vu=n,Vu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xu,pv;function aA(){if(pv)return Xu;pv=1;function n(){throw new Error("not implemented")}return Xu=n,Xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yu,hv;function jr(){if(hv)return Yu;hv=1;var n=oA(),e=uA(),r=aA(),t;return n()?t=e:t=r,Yu=t,Yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ku,vv;function sA(){if(vv)return Ku;vv=1;var n=lo(),e=typeof Uint8Array=="function";function r(t){return e&&t instanceof Uint8Array||n(t)==="[object Uint8Array]"}return Ku=r,Ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zu,mv;function cA(){if(mv)return zu;mv=1;var n=sA();return zu=n,zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ju,bv;function lA(){if(bv)return Ju;bv=1;var n=255;return Ju=n,Ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qu,gv;function fA(){if(gv)return Qu;gv=1;var n=typeof Uint8Array=="function"?Uint8Array:null;return Qu=n,Qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zu,_v;function dA(){if(_v)return Zu;_v=1;var n=cA(),e=lA(),r=fA();function t(){var i,o;if(typeof r!="function")return!1;try{o=[1,3.14,-3.14,e+1,e+2],o=new r(o),i=n(o)&&o[0]===1&&o[1]===3&&o[2]===e-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return Zu=t,Zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ea,yv;function pA(){if(yv)return ea;yv=1;var n=dA();return ea=n,ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var na,Ev;function hA(){if(Ev)return na;Ev=1;var n=typeof Uint8Array=="function"?Uint8Array:void 0;return na=n,na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ra,wv;function vA(){if(wv)return ra;wv=1;function n(){throw new Error("not implemented")}return ra=n,ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ta,$v;function mA(){if($v)return ta;$v=1;var n=pA(),e=hA(),r=vA(),t;return n()?t=e:t=r,ta=t,ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ia,Sv;function bA(){if(Sv)return ia;Sv=1;var n=lo(),e=typeof Uint16Array=="function";function r(t){return e&&t instanceof Uint16Array||n(t)==="[object Uint16Array]"}return ia=r,ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oa,Av;function gA(){if(Av)return oa;Av=1;var n=bA();return oa=n,oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ua,kv;function _A(){if(kv)return ua;kv=1;var n=65535;return ua=n,ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aa,Lv;function yA(){if(Lv)return aa;Lv=1;var n=typeof Uint16Array=="function"?Uint16Array:null;return aa=n,aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sa,Iv;function EA(){if(Iv)return sa;Iv=1;var n=gA(),e=_A(),r=yA();function t(){var i,o;if(typeof r!="function")return!1;try{o=[1,3.14,-3.14,e+1,e+2],o=new r(o),i=n(o)&&o[0]===1&&o[1]===3&&o[2]===e-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return sa=t,sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ca,Rv;function wA(){if(Rv)return ca;Rv=1;var n=EA();return ca=n,ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var la,Cv;function $A(){if(Cv)return la;Cv=1;var n=typeof Uint16Array=="function"?Uint16Array:void 0;return la=n,la}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fa,Mv;function SA(){if(Mv)return fa;Mv=1;function n(){throw new Error("not implemented")}return fa=n,fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var da,qv;function AA(){if(qv)return da;qv=1;var n=wA(),e=$A(),r=SA(),t;return n()?t=e:t=r,da=t,da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pa,Nv;function kA(){if(Nv)return pa;Nv=1;var n=mA(),e=AA(),r={uint16:e,uint8:n};return pa=r,pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ha,Fv;function LA(){if(Fv)return ha;Fv=1;var n=kA(),e;function r(){var t,i;return t=new n.uint16(1),t[0]=4660,i=new n.uint8(t.buffer),i[0]===52}return e=r(),ha=e,ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var va,Tv;function Gr(){if(Tv)return va;Tv=1;var n=LA();return va=n,va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ma,Ov;function IA(){if(Ov)return ma;Ov=1;var n=Gr(),e;return n===!0?e=1:e=0,ma=e,ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ba,Dv;function RA(){if(Dv)return ba;Dv=1;var n=Wr(),e=jr(),r=IA(),t=new e(1),i=new n(t.buffer);function o(u){return t[0]=u,i[r]}return ba=o,ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ga,Pv;function gn(){if(Pv)return ga;Pv=1;var n=RA();return ga=n,ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _a,Hv;function CA(){if(Hv)return _a;Hv=1;var n=Gr(),e;return n===!0?e=1:e=0,_a=e,_a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ya,xv;function MA(){if(xv)return ya;xv=1;var n=Wr(),e=jr(),r=CA(),t=new e(1),i=new n(t.buffer);function o(u,a){return t[0]=u,i[r]=a>>>0,t[0]}return ya=o,ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ea,Bv;function xt(){if(Bv)return Ea;Bv=1;var n=MA();return Ea=n,Ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wa,Uv;function qA(){if(Uv)return wa;Uv=1;var n=Gr(),e,r,t;return n===!0?(r=1,t=0):(r=0,t=1),e={HIGH:r,LOW:t},wa=e,wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $a,Wv;function NA(){if(Wv)return $a;Wv=1;var n=Wr(),e=jr(),r=qA(),t=new e(1),i=new n(t.buffer),o=r.HIGH,u=r.LOW;function a(c,s){return i[o]=c,i[u]=s,t[0]}return $a=a,$a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sa,jv;function fo(){if(jv)return Sa;jv=1;var n=NA();return Sa=n,Sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Aa,Gv;function Ce(){if(Gv)return Aa;Gv=1;var n=Number.POSITIVE_INFINITY;return Aa=n,Aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ka,Vv;function FA(){return Vv||(Vv=1,ka=Number),ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var La,Xv;function TA(){if(Xv)return La;Xv=1;var n=FA();return La=n,La}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ia,Yv;function nn(){if(Yv)return Ia;Yv=1;var n=TA(),e=n.NEGATIVE_INFINITY;return Ia=e,Ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ra,Kv;function $r(){if(Kv)return Ra;Kv=1;var n=1023;return Ra=n,Ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ca,zv;function OA(){if(zv)return Ca;zv=1;var n=.34657359027997264;return Ca=n,Ca}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ma,Jv;function DA(){if(Jv)return Ma;Jv=1;function n(e){return e===0?-.03333333333333313:-.03333333333333313+e*(.0015873015872548146+e*(-793650757867488e-19+e*(4008217827329362e-21+e*-20109921818362437e-23)))}return Ma=n,Ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qa,Qv;function PA(){if(Qv)return qa;Qv=1;var n=ue(),e=gn(),r=xt(),t=fo(),i=Ce(),o=nn(),u=$r(),a=OA(),c=DA(),s=709.782712893384,l=.6931471803691238,f=19082149292705877e-26,d=1.4426950408889634,p=38.816242111356935,h=1.0397207708399179;function v(m){var b,g,_,y,E,I,A,C,k,S,w,$,L;if(m===i||n(m))return m;if(m===o)return-1;if(m===0)return m;if(m<0?(_=!0,C=-m):(_=!1,C=m),C>=p){if(_)return-1;if(C>=s)return i}if(I=e(C)|0,C>a)C<h?_?(y=m+l,E=-f,L=-1):(y=m-l,E=f,L=1):(_?L=d*m-.5:L=d*m+.5,L|=0,w=L,y=m-w*l,E=w*f),m=y-E,S=y-m-E;else{if(I<1016070144)return m;L=0}return b=.5*m,k=m*b,A=1+k*c(k),w=3-A*b,$=k*((A-w)/(6-m*w)),L===0?m-(m*$-k):(g=t(u+L<<20,0),$=m*($-S)-S,$-=k,L===-1?.5*(m-$)-.5:L===1?m<-.25?-2*($-(m+.5)):1+2*(m-$):L<=-2||L>56?(C=1-($-m),L===1024?(y=e(C)+(L<<20)|0,C=r(C,y)):C*=g,C-1):(w=1,L<20?(y=1072693248-(2097152>>L)|0,w=r(w,y),C=w-($-m)):(y=u-L<<20|0,w=r(w,y),C=m-($+w),C+=1),C*=g,C))}return qa=v,qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Na,Zv;function Vr(){if(Zv)return Na;Zv=1;var n=PA();return Na=n,Na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fa,em;function HA(){if(em)return Fa;em=1;var n=Math.floor;return Fa=n,Fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ta,nm;function xn(){if(nm)return Ta;nm=1;var n=HA();return Ta=n,Ta}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oa,rm;function xA(){if(rm)return Oa;rm=1;function n(e){return e===0?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+e*.14798198605116586)))))}return Oa=n,Oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Da,tm;function BA(){if(tm)return Da;tm=1;var n=ue(),e=gn(),r=xt(),t=Ce(),i=nn(),o=$r(),u=xA(),a=.6931471803691238,c=19082149292705877e-26,s=.41421356237309503,l=-.2928932188134525,f=1862645149230957e-24,d=5551115123125783e-32,p=9007199254740992,h=.6666666666666666;function v(m){var b,g,_,y,E,I,A,C,k,S;if(m<-1||n(m))return NaN;if(m===-1)return i;if(m===t||m===0)return m;if(m<0?_=-m:_=m,S=1,_<s){if(_<f)return _<d?m:m-m*m*.5;m>l&&(S=0,y=m,g=1)}return S!==0&&(_<p?(k=1+m,g=e(k),S=(g>>20)-o,S>0?E=1-(k-m):E=m-(k-1),E/=k):(k=m,g=e(k),S=(g>>20)-o,E=0),g&=1048575,g<434334?k=r(k,g|1072693248):(S+=1,k=r(k,g|1071644672),g=1048576-g>>2),y=k-1),b=.5*y*y,g===0?y===0?(E+=S*c,S*a+E):(C=b*(1-h*y),S*a-(C-(S*c+E)-y)):(I=y/(2+y),A=I*I,C=A*u(A),S===0?y-(b-I*(b+C)):S*a-(b-(I*(b+C)+(S*c+E))-y))}return Da=v,Da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pa,im;function _n(){if(im)return Pa;im=1;var n=BA();return Pa=n,Pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ha,om;function UA(){if(om)return Ha;om=1;var n=Math.sqrt;return Ha=n,Ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xa,um;function _e(){if(um)return xa;um=1;var n=UA();return xa=n,xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ba,am;function T7(){if(am)return Ba;am=1;var n=.7853981633974483;return Ba=n,Ba}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ua,sm;function WA(){if(sm)return Ua;sm=1;function n(e){var r,t,i;return e===0?.16666666666666713:(e<0?r=-e:r=e,r<=1?(t=-8.198089802484825+e*(19.562619833175948+e*(-16.262479672107002+e*(5.444622390564711+e*(-.6019598008014124+e*.004253011369004428)))),i=-49.18853881490881+e*(139.51056146574857+e*(-147.1791292232726+e*(70.49610280856842+e*(-14.740913729888538+e*1))))):(e=1/e,t=.004253011369004428+e*(-.6019598008014124+e*(5.444622390564711+e*(-16.262479672107002+e*(19.562619833175948+e*-8.198089802484825)))),i=1+e*(-14.740913729888538+e*(70.49610280856842+e*(-147.1791292232726+e*(139.51056146574857+e*-49.18853881490881))))),t/i)}return Ua=n,Ua}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wa,cm;function jA(){if(cm)return Wa;cm=1;function n(e){var r,t,i;return e===0?.08333333333333809:(e<0?r=-e:r=e,r<=1?(t=28.536655482610616+e*(-25.56901049652825+e*(6.968710824104713+e*(-.5634242780008963+e*.002967721961301243))),i=342.43986579130785+e*(-383.8770957603691+e*(147.0656354026815+e*(-21.947795316429207+e*1)))):(e=1/e,t=.002967721961301243+e*(-.5634242780008963+e*(6.968710824104713+e*(-25.56901049652825+e*28.536655482610616))),i=1+e*(-21.947795316429207+e*(147.0656354026815+e*(-383.8770957603691+e*342.43986579130785)))),t/i)}return Wa=n,Wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ja,lm;function GA(){if(lm)return ja;lm=1;var n=ue(),e=_e(),r=T7(),t=WA(),i=jA(),o=6123233995736766e-32;function u(a){var c,s,l,f,d;if(n(a))return NaN;if(a>0?l=a:(c=!0,l=-a),l>1)return NaN;if(l>.625)s=1-l,f=s*i(s),s=e(s+s),d=r-s,s=s*f-o,d-=s,d+=r;else{if(l<1e-8)return a;s=l*l,d=s*t(s),d=l*d+l}return c?-d:d}return ja=u,ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ga,fm;function Cp(){if(fm)return Ga;fm=1;var n=GA();return Ga=n,Ga}/**
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
*/var Va,dm;function VA(){if(dm)return Va;dm=1;function n(e){return Math.abs(e)}return Va=n,Va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xa,pm;function ye(){if(pm)return Xa;pm=1;var n=VA();return Xa=n,Xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ya,hm;function XA(){if(hm)return Ya;hm=1;var n=Math.ceil;return Ya=n,Ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ka,vm;function YA(){if(vm)return Ka;vm=1;var n=XA();return Ka=n,Ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var za,mm;function KA(){if(mm)return za;mm=1;var n=xn(),e=YA();function r(t){return t<0?e(t):n(t)}return za=r,za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ja,bm;function Mp(){if(bm)return Ja;bm=1;var n=KA();return Ja=n,Ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qa,gm;function zA(){if(gm)return Qa;gm=1;var n=1023;return Qa=n,Qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Za,_m;function JA(){if(_m)return Za;_m=1;var n=-1023;return Za=n,Za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var es,ym;function QA(){if(ym)return es;ym=1;var n=-1074;return es=n,es}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ns,Em;function ZA(){if(Em)return ns;Em=1;var n=Ce(),e=nn();function r(t){return t===n||t===e}return ns=r,ns}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rs,wm;function Xr(){if(wm)return rs;wm=1;var n=ZA();return rs=n,rs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ts,$m;function ek(){if($m)return ts;$m=1;var n=2147483648;return ts=n,ts}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var is,Sm;function Sr(){if(Sm)return is;Sm=1;var n=2147483647;return is=n,is}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var os,Am;function nk(){if(Am)return os;Am=1;var n=Gr(),e,r,t;return n===!0?(r=1,t=0):(r=0,t=1),e={HIGH:r,LOW:t},os=e,os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var us,km;function O7(){if(km)return us;km=1;var n=Wr(),e=jr(),r=nk(),t=new e(1),i=new n(t.buffer),o=r.HIGH,u=r.LOW;function a(c,s,l,f){return t[0]=c,s[f]=i[o],s[f+l]=i[u],s}return us=a,us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var as,Lm;function rk(){if(Lm)return as;Lm=1;var n=O7();function e(r){return n(r,[0,0],1,0)}return as=e,as}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ss,Im;function qp(){if(Im)return ss;Im=1;var n=en(),e=rk(),r=O7();return n(e,"assign",r),ss=e,ss}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cs,Rm;function tk(){if(Rm)return cs;Rm=1;var n=ek(),e=Sr(),r=qp(),t=gn(),i=fo(),o=[0,0];function u(a,c){var s,l;return r.assign(a,o,1,0),s=o[0],s&=e,l=t(c),l&=n,s|=l,i(s,o[1])}return cs=u,cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ls,Cm;function Np(){if(Cm)return ls;Cm=1;var n=tk();return ls=n,ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fs,Mm;function Ar(){if(Mm)return fs;Mm=1;var n=22250738585072014e-324;return fs=n,fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ds,qm;function D7(){if(qm)return ds;qm=1;var n=Ar(),e=Xr(),r=ue(),t=ye(),i=4503599627370496;function o(u,a,c,s){return r(u)||e(u)?(a[s]=u,a[s+c]=0,a):u!==0&&t(u)<n?(a[s]=u*i,a[s+c]=-52,a):(a[s]=u,a[s+c]=0,a)}return ds=o,ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ps,Nm;function ik(){if(Nm)return ps;Nm=1;var n=D7();function e(r){return n(r,[0,0],1,0)}return ps=e,ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hs,Fm;function ok(){if(Fm)return hs;Fm=1;var n=en(),e=ik(),r=D7();return n(e,"assign",r),hs=e,hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vs,Tm;function po(){if(Tm)return vs;Tm=1;var n=2146435072;return vs=n,vs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ms,Om;function uk(){if(Om)return ms;Om=1;var n=gn(),e=po(),r=$r();function t(i){var o=n(i);return o=(o&e)>>>20,o-r|0}return ms=t,ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bs,Dm;function ak(){if(Dm)return bs;Dm=1;var n=uk();return bs=n,bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gs,Pm;function sk(){if(Pm)return gs;Pm=1;var n=Ce(),e=nn(),r=$r(),t=zA(),i=JA(),o=QA(),u=ue(),a=Xr(),c=Np(),s=ok().assign,l=ak(),f=qp(),d=fo(),p=2220446049250313e-31,h=2148532223,v=[0,0],m=[0,0];function b(g,_){var y,E;return _===0||g===0||u(g)||a(g)?g:(s(g,v,1,0),g=v[0],_+=v[1],_+=l(g),_<o?c(0,g):_>t?g<0?e:n:(_<=i?(_+=52,E=p):E=1,f.assign(g,m,1,0),y=m[0],y&=h,y|=_+r<<20,E*d(y,m[1])))}return gs=b,gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _s,Hm;function Yr(){if(Hm)return _s;Hm=1;var n=sk();return _s=n,_s}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ys,xm;function ck(){if(xm)return ys;xm=1;function n(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}return ys=n,ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Es,Bm;function lk(){if(Bm)return Es;Bm=1;var n=Yr(),e=ck();function r(t,i,o){var u,a,c,s;return u=t-i,a=u*u,c=u-a*e(a),s=1-(i-u*c/(2-c)-t),n(s,o)}return Es=r,Es}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ws,Um;function fk(){if(Um)return ws;Um=1;var n=ue(),e=Mp(),r=nn(),t=Ce(),i=lk(),o=.6931471803691238,u=19082149292705877e-26,a=1.4426950408889634,c=709.782712893384,s=-745.1332191019411,l=1/(1<<28),f=-l;function d(p){var h,v,m;return n(p)||p===t?p:p===r?0:p>c?t:p<s?0:p>f&&p<l?1+p:(p<0?m=e(a*p-.5):m=e(a*p+.5),h=p-m*o,v=m*u,i(h,v,m))}return ws=d,ws}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $s,Wm;function Me(){if(Wm)return $s;Wm=1;var n=fk();return $s=n,$s}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ss,jm;function dk(){if(jm)return Ss;jm=1;var n=xn();function e(r){return n(r)===r}return Ss=e,Ss}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var As,Gm;function Kr(){if(Gm)return As;Gm=1;var n=dk();return As=n,As}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ks,Vm;function pk(){if(Vm)return ks;Vm=1;var n=Kr();function e(r){return n(r/2)}return ks=e,ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ls,Xm;function hk(){if(Xm)return Ls;Xm=1;var n=pk();return Ls=n,Ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Is,Ym;function vk(){if(Ym)return Is;Ym=1;var n=hk();function e(r){return r>0?n(r-1):n(r+1)}return Is=e,Is}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rs,Km;function Fp(){if(Km)return Rs;Km=1;var n=vk();return Rs=n,Rs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cs,zm;function mk(){if(zm)return Cs;zm=1;var n=Gr(),e;return n===!0?e=0:e=1,Cs=e,Cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ms,Jm;function bk(){if(Jm)return Ms;Jm=1;var n=Wr(),e=jr(),r=mk(),t=new e(1),i=new n(t.buffer);function o(u,a){return t[0]=u,i[r]=a>>>0,t[0]}return Ms=o,Ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qs,Qm;function Bt(){if(Qm)return qs;Qm=1;var n=bk();return qs=n,qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ns,Zm;function gk(){if(Zm)return Ns;Zm=1;function n(e){return e|0}return Ns=n,Ns}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fs,e3;function P7(){if(e3)return Fs;e3=1;var n=gk();return Fs=n,Fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ts,n3;function _k(){if(n3)return Ts;n3=1;var n=Fp(),e=Np(),r=nn(),t=Ce();function i(o,u){return u===r?t:u===t?0:u>0?n(u)?o:0:n(u)?e(t,o):t}return Ts=i,Ts}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Os,r3;function yk(){if(r3)return Os;r3=1;var n=Sr(),e=gn(),r=1072693247,t=1e300,i=1e-300;function o(u,a){var c,s;return s=e(u),c=s&n,c<=r?a<0?t*t:i*i:a>0?t*t:i*i}return Os=o,Os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ds,t3;function Ek(){if(t3)return Ds;t3=1;var n=ye(),e=Ce();function r(t,i){return t===-1?(t-t)/(t-t):t===1?1:n(t)<1==(i===e)?0:e}return Ds=r,Ds}/**
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
*/var Ps,i3;function H7(){if(i3)return Ps;i3=1;var n=20;return Ps=n,Ps}/**
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
*/var Hs,o3;function wk(){if(o3)return Hs;o3=1;function n(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}return Hs=n,Hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xs,u3;function $k(){if(u3)return xs;u3=1;var n=gn(),e=Bt(),r=xt(),t=$r(),i=H7(),o=wk(),u=1048575,a=1048576,c=1072693248,s=536870912,l=524288,f=9007199254740992,d=.9617966939259756,p=.9617967009544373,h=-7028461650952758e-24,v=[1,1.5],m=[0,.5849624872207642],b=[0,1350039202129749e-23];function g(_,y,E){var I,A,C,k,S,w,$,L,R,T,N,B,O,H,F,Q,W,K,re,G,x,Y;return G=0,E<a&&(y*=f,G-=53,E=n(y)),G+=(E>>i)-t|0,x=E&u|0,E=x|c|0,x<=235662?Y=0:x<767610?Y=1:(Y=0,G+=1,E-=a),y=r(y,E),L=v[Y],K=y-L,re=1/(y+L),A=K*re,k=e(A,0),I=(E>>1|s)+l,I+=Y<<18,w=r(0,I),$=y-(w-L),S=re*(K-k*w-k*$),C=A*A,W=C*C*o(C),W+=S*(k+A),C=k*k,w=3+C+W,w=e(w,0),$=W-(w-3-C),K=k*w,re=S*w+$*A,T=K+re,T=e(T,0),N=re-(T-K),B=p*T,O=h*T+N*d+b[Y],R=m[Y],Q=G,H=B+O+R+Q,H=e(H,0),F=O-(H-Q-R-B),_[0]=H,_[1]=F,_}return xs=g,xs}/**
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
*/var Bs,a3;function Sk(){if(a3)return Bs;a3=1;function n(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}return Bs=n,Bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Us,s3;function Ak(){if(s3)return Us;s3=1;var n=Bt(),e=Sk(),r=1.4426950408889634,t=1.4426950216293335,i=19259629911266175e-24;function o(u,a){var c,s,l,f,d,p;return l=a-1,f=l*l*e(l),d=t*l,p=l*i-f*r,s=d+p,s=n(s,0),c=p-(s-d),u[0]=s,u[1]=c,u}return Us=o,Us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ws,c3;function kk(){if(c3)return Ws;c3=1;var n=.6931471805599453;return Ws=n,Ws}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var js,l3;function x7(){if(l3)return js;l3=1;var n=1048575;return js=n,js}/**
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
*/var Gs,f3;function Lk(){if(f3)return Gs;f3=1;function n(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}return Gs=n,Gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Vs,d3;function Ik(){if(d3)return Vs;d3=1;var n=gn(),e=xt(),r=Bt(),t=P7(),i=Yr(),o=kk(),u=$r(),a=Sr(),c=x7(),s=H7(),l=Lk(),f=1048576,d=1071644672,p=.6931471824645996,h=-1904654299957768e-24;function v(m,b,g){var _,y,E,I,A,C,k,S,w,$,L;return $=m&a|0,L=($>>s)-u|0,w=0,$>d&&(w=m+(f>>L+1)>>>0,L=((w&a)>>s)-u|0,_=(w&~(c>>L))>>>0,E=e(0,_),w=(w&c|f)>>s-L>>>0,m<0&&(w=-w),b-=E),E=g+b,E=r(E,0),A=E*p,C=(g-(E-b))*o+E*h,S=A+C,k=C-(S-A),E=S*S,y=S-E*l(E),I=S*y/(y-2)-(k+S*k),S=1-(I-S),m=n(S),m=t(m),m+=w<<s>>>0,m>>s<=0?S=i(S,w):S=e(S,m),S}return Vs=v,Vs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Xs,p3;function Rk(){if(p3)return Xs;p3=1;var n=ue(),e=Fp(),r=Xr(),t=Kr(),i=_e(),o=ye(),u=qp(),a=Bt(),c=P7(),s=nn(),l=Ce(),f=Sr(),d=_k(),p=yk(),h=Ek(),v=$k(),m=Ak(),b=Ik(),g=1072693247,_=1105199104,y=1139802112,E=1083179008,I=1072693248,A=1083231232,C=3230714880,k=31,S=1e300,w=1e-300,$=8008566259537294e-32,L=[0,0],R=[0,0];function T(N,B){var O,H,F,Q,W,K,re,G,x,Y,j,Ae,fe,Z,oe,we;if(n(N)||n(B))return NaN;if(u.assign(B,L,1,0),K=L[0],re=L[1],re===0){if(B===0)return 1;if(B===1)return N;if(B===-1)return 1/N;if(B===.5)return i(N);if(B===-.5)return 1/i(N);if(B===2)return N*N;if(B===3)return N*N*N;if(B===4)return N*=N,N*N;if(r(B))return h(N,B)}if(u.assign(N,L,1,0),Q=L[0],W=L[1],W===0){if(Q===0)return d(N,B);if(N===1)return 1;if(N===-1&&e(B))return-1;if(r(N))return N===s?T(-0,-B):B<0?0:l}if(N<0&&t(B)===!1)return(N-N)/(N-N);if(F=o(N),O=Q&f|0,H=K&f|0,G=Q>>>k|0,x=K>>>k|0,G&&e(B)?G=-1:G=1,H>_){if(H>y)return p(N,B);if(O<g)return x===1?G*S*S:G*w*w;if(O>I)return x===0?G*S*S:G*w*w;fe=m(R,F)}else fe=v(R,F,O);if(Y=a(B,0),Ae=(B-Y)*fe[0]+B*fe[1],j=Y*fe[0],Z=Ae+j,u.assign(Z,L,1,0),oe=c(L[0]),we=c(L[1]),oe>=E){if((oe-E|we)!==0||Ae+$>Z-j)return G*S*S}else if((oe&f)>=A&&((oe-C|we)!==0||Ae<=Z-j))return G*w*w;return Z=b(oe,j,Ae),G*Z}return Xs=T,Xs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ys,h3;function qe(){if(h3)return Ys;h3=1;var n=Rk();return Ys=n,Ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ks,v3;function zr(){if(v3)return Ks;v3=1;var n=2.718281828459045;return Ks=n,Ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zs,m3;function Bn(){if(m3)return zs;m3=1;var n=2220446049250313e-31;return zs=n,zs}/**
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
*/var Js,b3;function Ck(){if(b3)return Js;b3=1;function n(e){var r,t,i;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(t=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),i=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),i=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/i)}return Js=n,Js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Qs,g3;function Mk(){if(g3)return Qs;g3=1;var n=ue(),e=_n(),r=_e(),t=ye(),i=Me(),o=qe(),u=zr(),a=Bn(),c=Ck(),s=10.900511;function l(f,d){var p,h,v,m,b,g,_;return n(f)||n(d)?NaN:f<0||d<0?NaN:d===1?1/f:f===1?1/d:(_=f+d,_<a?(b=_/f,b/=d,b):_===f&&d<a?1/d:_===d&&f<a?1/f:(f<d&&(g=d,d=f,f=g),h=f+s-.5,v=d+s-.5,m=_+s-.5,b=c(f)*(c(d)/c(_)),p=f-.5-d,t(d*p)<m*100&&f>100?b*=i(p*e(-d/m)):b*=o(h/m,p),m>1e10?b*=o(h/m*(v/m),d):b*=o(h*v/(m*m),d),b*=r(u/v),b))}return Qs=l,Qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zs,_3;function ho(){if(_3)return Zs;_3=1;var n=Mk();return Zs=n,Zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e0,y3;function qk(){if(y3)return e0;y3=1;var n=Ce();function e(r){return r===0&&1/r===n}return e0=e,e0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n0,E3;function Nk(){if(E3)return n0;E3=1;var n=qk();return n0=n,n0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r0,w3;function Fk(){if(w3)return r0;w3=1;var n=Nk(),e=ue(),r=Ce();function t(i,o){return e(i)||e(o)?NaN:i===r||o===r?r:i===o&&i===0?n(i)?i:o:i>o?i:o}return r0=t,r0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t0,$3;function kr(){if($3)return t0;$3=1;var n=Fk();return t0=n,t0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i0,S3;function Tk(){if(S3)return i0;S3=1;var n=nn();function e(r){return r===0&&1/r===n}return i0=e,i0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o0,A3;function B7(){if(A3)return o0;A3=1;var n=Tk();return o0=n,o0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u0,k3;function Ok(){if(k3)return u0;k3=1;var n=B7(),e=ue(),r=nn();function t(i,o){return e(i)||e(o)?NaN:i===r||o===r?r:i===o&&i===0?n(i)?i:o:i<o?i:o}return u0=t,u0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a0,L3;function dr(){if(L3)return a0;L3=1;var n=Ok();return a0=n,a0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s0,I3;function Lr(){if(I3)return s0;I3=1;var n=17976931348623157e292;return s0=n,s0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c0,R3;function U7(){if(R3)return c0;R3=1;var n=2147483647;return c0=n,c0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l0,C3;function Tp(){if(C3)return l0;C3=1;var n=1.5707963267948966;return l0=n,l0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f0,M3;function pr(){if(M3)return f0;M3=1;var n=3.141592653589793;return f0=n,f0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d0,q3;function Dk(){if(q3)return d0;q3=1;function n(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}return d0=n,d0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p0,N3;function Pk(){if(N3)return p0;N3=1;function n(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}return p0=n,p0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var h0,F3;function Hk(){if(F3)return h0;F3=1;var n=Dk(),e=Pk();function r(t,i){var o,u,a,c;return c=t*t,a=c*c,u=c*n(c),u+=a*a*e(c),o=.5*c,a=1-o,a+(1-a-o+(c*u-t*i))}return h0=r,h0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v0,T3;function W7(){if(T3)return v0;T3=1;var n=Hk();return v0=n,v0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var m0,O3;function xk(){if(O3)return m0;O3=1;var n=-.16666666666666632,e=.00833333333332249,r=-.0001984126982985795,t=27557313707070068e-22,i=-25050760253406863e-24,o=158969099521155e-24;function u(a,c){var s,l,f,d;return d=a*a,f=d*d,s=e+d*(r+d*t)+d*f*(i+d*o),l=d*a,c===0?a+l*(n+d*s):a-(d*(.5*c-l*s)-c-l*n)}return m0=u,m0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b0,D3;function j7(){if(D3)return b0;D3=1;var n=xk();return b0=n,b0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g0,P3;function Bk(){if(P3)return g0;P3=1;var n=Gr(),e;return n===!0?e=0:e=1,g0=e,g0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _0,H3;function Uk(){if(H3)return _0;H3=1;var n=Wr(),e=jr(),r=Bk(),t=new e(1),i=new n(t.buffer);function o(u){return t[0]=u,i[r]}return _0=o,_0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y0,x3;function Wk(){if(x3)return y0;x3=1;var n=Uk();return y0=n,y0}/**
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
*/var E0,B3;function jk(){if(B3)return E0;B3=1;function n(e,r){var t,i;for(t=[],i=0;i<r;i++)t.push(e);return t}return E0=n,E0}/**
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
*/var w0,U3;function Gk(){if(U3)return w0;U3=1;var n=jk();return w0=n,w0}/**
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
*/var $0,W3;function Vk(){if(W3)return $0;W3=1;var n=Gk();function e(r){return n(0,r)}return $0=e,$0}/**
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
*/var S0,j3;function Xk(){if(j3)return S0;j3=1;var n=Vk();return S0=n,S0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var A0,G3;function Yk(){if(G3)return A0;G3=1;var n=xn(),e=Yr(),r=Xk(),t=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],i=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],o=16777216,u=5960464477539063e-23,a=r(20),c=r(20),s=r(20),l=r(20);function f(p,h,v,m,b,g,_,y,E){var I,A,C,k,S,w,$,L,R;for(k=g,R=m[v],L=v,S=0;L>0;S++)A=u*R|0,l[S]=R-o*A|0,R=m[L-1]+A,L-=1;if(R=e(R,b),R-=8*n(R*.125),$=R|0,R-=$,C=0,b>0?(S=l[v-1]>>24-b,$+=S,l[v-1]-=S<<24-b,C=l[v-1]>>23-b):b===0?C=l[v-1]>>23:R>=.5&&(C=2),C>0){for($+=1,I=0,S=0;S<v;S++)L=l[S],I===0?L!==0&&(I=1,l[S]=16777216-L):l[S]=16777215-L;if(b>0)switch(b){case 1:l[v-1]&=8388607;break;case 2:l[v-1]&=4194303;break}C===2&&(R=1-R,I!==0&&(R-=e(1,b)))}if(R===0){for(L=0,S=v-1;S>=g;S--)L|=l[S];if(L===0){for(w=1;l[g-w]===0;w++);for(S=v+1;S<=v+w;S++){for(E[y+S]=t[_+S],A=0,L=0;L<=y;L++)A+=p[L]*E[y+(S-L)];m[S]=A}return v+=w,f(p,h,v,m,b,g,_,y,E)}for(v-=1,b-=24;l[v]===0;)v-=1,b-=24}else R=e(R,-b),R>=o?(A=u*R|0,l[v]=R-o*A|0,v+=1,b+=24,l[v]=A):l[v]=R|0;for(A=e(1,b),S=v;S>=0;S--)m[S]=A*l[S],A*=u;for(S=v;S>=0;S--){for(A=0,w=0;w<=k&&w<=v-S;w++)A+=i[w]*m[S+w];s[v-S]=A}for(A=0,S=v;S>=0;S--)A+=s[S];for(C===0?h[0]=A:h[0]=-A,A=s[0]-A,S=1;S<=v;S++)A+=s[S];return C===0?h[1]=A:h[1]=-A,$&7}function d(p,h,v,m){var b,g,_,y,E,I,A,C,k;for(g=4,y=m-1,_=(v-3)/24|0,_<0&&(_=0),I=v-24*(_+1),C=_-y,k=y+g,A=0;A<=k;A++)C<0?a[A]=0:a[A]=t[C],C+=1;for(A=0;A<=g;A++){for(b=0,C=0;C<=y;C++)b+=p[C]*a[y+(A-C)];c[A]=b}return E=g,f(p,h,E,c,I,g,_,y,a)}return A0=d,A0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k0,V3;function Kk(){if(V3)return k0;V3=1;var n=Math.round;return k0=n,k0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L0,X3;function G7(){if(X3)return L0;X3=1;var n=Kk();return L0=n,L0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var I0,Y3;function zk(){if(Y3)return I0;Y3=1;var n=G7(),e=gn(),r=.6366197723675814,t=1.5707963267341256,i=6077100506506192e-26,o=6077100506303966e-26,u=20222662487959506e-37,a=20222662487111665e-37,c=84784276603689e-45,s=2047;function l(f,d,p){var h,v,m,b,g,_,y;return v=n(f*r),b=f-v*t,g=v*i,y=d>>20|0,p[0]=b-g,h=e(p[0]),_=y-(h>>20&s),_>16&&(m=b,g=v*o,b=m-g,g=v*u-(m-b-g),p[0]=b-g,h=e(p[0]),_=y-(h>>20&s),_>49&&(m=b,g=v*a,b=m-g,g=v*c-(m-b-g),p[0]=b-g)),p[1]=b-p[0]-g,v}return I0=l,I0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var R0,K3;function Jk(){if(K3)return R0;K3=1;var n=Sr(),e=po(),r=x7(),t=gn(),i=Wk(),o=fo(),u=Yk(),a=zk(),c=0,s=16777216,l=1.5707963267341256,f=6077100506506192e-26,d=2*f,p=3*f,h=4*f,v=598523,m=1072243195,b=1073928572,g=1074752122,_=1074977148,y=1075183036,E=1075388923,I=1075594811,A=1094263291,C=[0,0,0],k=[0,0];function S(w,$){var L,R,T,N,B,O,H,F;if(T=t(w)|0,N=T&n|0,N<=m)return $[0]=w,$[1]=0,0;if(N<=g)return(N&r)===v?a(w,N,$):N<=b?T>0?(F=w-l,$[0]=F-f,$[1]=F-$[0]-f,1):(F=w+l,$[0]=F+f,$[1]=F-$[0]+f,-1):T>0?(F=w-2*l,$[0]=F-d,$[1]=F-$[0]-d,2):(F=w+2*l,$[0]=F+d,$[1]=F-$[0]+d,-2);if(N<=I)return N<=y?N===_?a(w,N,$):T>0?(F=w-3*l,$[0]=F-p,$[1]=F-$[0]-p,3):(F=w+3*l,$[0]=F+p,$[1]=F-$[0]+p,-3):N===E?a(w,N,$):T>0?(F=w-4*l,$[0]=F-h,$[1]=F-$[0]-h,4):(F=w+4*l,$[0]=F+h,$[1]=F-$[0]+h,-4);if(N<A)return a(w,N,$);if(N>=e)return $[0]=NaN,$[1]=NaN,0;for(L=i(w),R=(N>>20)-1046,F=o(N-(R<<20|0),L),O=0;O<2;O++)C[O]=F|0,F=(F-C[O])*s;for(C[2]=F,B=3;C[B-1]===c;)B-=1;return H=u(C,k,R,B,1),T<0?($[0]=-k[0],$[1]=-k[1],-H):($[0]=k[0],$[1]=k[1],H)}return R0=S,R0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C0,z3;function V7(){if(z3)return C0;z3=1;var n=Jk();return C0=n,C0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var M0,J3;function Qk(){if(J3)return M0;J3=1;var n=Sr(),e=po(),r=gn(),t=W7(),i=j7(),o=V7(),u=1072243195,a=1045430272,c=[0,0];function s(l){var f,d;if(f=r(l),f&=n,f<=u)return f<a?l:i(l,0);if(f>=e)return NaN;switch(d=o(l,c),d&3){case 0:return i(c[0],c[1]);case 1:return t(c[0],c[1]);case 2:return-i(c[0],c[1]);default:return-t(c[0],c[1])}}return M0=s,M0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q0,Q3;function Ut(){if(Q3)return q0;Q3=1;var n=Qk();return q0=n,q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N0,Z3;function vo(){if(Z3)return N0;Z3=1;var n=2.5066282746310007;return N0=n,N0}/**
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
*/var F0,e6;function Zk(){if(e6)return F0;e6=1;function n(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}return F0=n,F0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var T0,n6;function eL(){if(n6)return T0;n6=1;var n=vo(),e=qe(),r=Me(),t=Zk(),i=143.01608;function o(u){var a,c,s;return a=1/u,a=1+a*t(a),c=r(u),u>i?(s=e(u,.5*u-.25),c=s*(s/c)):c=e(u,u-.5)/c,n*c*a}return T0=o,T0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O0,r6;function nL(){if(r6)return O0;r6=1;var n=.5772156649015329;return O0=n,O0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var D0,t6;function rL(){if(t6)return D0;t6=1;var n=nL();function e(r,t){return t/((1+n*r)*r)}return D0=e,D0}/**
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
*/var P0,i6;function tL(){if(i6)return P0;i6=1;function n(e){var r,t,i;return e===0?1:(e<0?r=-e:r=e,r<=1?(t=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),i=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,t=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),i=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),t/i)}return P0=n,P0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var H0,o6;function iL(){if(o6)return H0;o6=1;var n=ue(),e=Kr(),r=B7(),t=ye(),i=xn(),o=Ut(),u=Ce(),a=nn(),c=pr(),s=eL(),l=rL(),f=tL();function d(p){var h,v,m,b;if(e(p)&&p<0||p===a||n(p))return NaN;if(p===0)return r(p)?a:u;if(p>171.61447887182297)return u;if(p<-170.5674972726612)return 0;if(v=t(p),v>33)return p>=0?s(p):(m=i(v),(m&1)===0?h=-1:h=1,b=v-m,b>.5&&(m+=1,b=v-m),b=v*o(c*b),h*c/(t(b)*s(v)));for(b=1;p>=3;)p-=1,b*=p;for(;p<0;){if(p>-1e-9)return l(p,b);b/=p,p+=1}for(;p<2;){if(p<1e-9)return l(p,b);b/=p,p+=1}return p===2?b:(p-=2,b*f(p))}return H0=d,H0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x0,u6;function Un(){if(u6)return x0;u6=1;var n=iL();return x0=n,x0}/**
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
*/var B0,a6;function mo(){if(a6)return B0;a6=1;var n=170;return B0=n,B0}const oL=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U0,s6;function uL(){if(s6)return U0;s6=1;var n=ue(),e=Kr(),r=Un(),t=Ce(),i=mo(),o=oL;function u(a){return n(a)?NaN:e(a)?a<0?NaN:a<=i?o[a]:t:r(a+1)}return U0=u,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,c6;function X7(){if(c6)return W0;c6=1;var n=uL();return W0=n,W0}/**
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
*/var j0,l6;function aL(){if(l6)return j0;l6=1;function n(e){var r,t,i;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(t=3847467039331777e-5+e*(3685766504351951e-5+e*(1588920245372942e-5+e*(4059208354298835e-6+e*(6805476611834733e-7+e*(7823975500312005e-8+e*(6246580776401795e-9+e*(341986.3488721347+e*(12287.194511824551+e*(261.61404416416684+e*2.5066282746310007))))))))),i=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=2.5066282746310007+e*(261.61404416416684+e*(12287.194511824551+e*(341986.3488721347+e*(6246580776401795e-9+e*(7823975500312005e-8+e*(6805476611834733e-7+e*(4059208354298835e-6+e*(1588920245372942e-5+e*(3685766504351951e-5+e*3847467039331777e-5))))))))),i=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/i)}return j0=n,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var G0,f6;function sL(){if(f6)return G0;f6=1;var n=aL();return G0=n,G0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0,d6;function cL(){if(d6)return V0;d6=1;var n=sL();return V0=n,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X0,p6;function Wt(){if(p6)return X0;p6=1;var n=10.900511;return X0=n,X0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Y0,h6;function lL(){if(h6)return Y0;h6=1;var n=cL(),e=Un(),r=_n(),t=ye(),i=Me(),o=qe(),u=Bn(),a=zr(),c=Wt(),s=mo(),l=4269068009004705e289;function f(d,p){var h,v,m;return d<u?p>=s?(v=f(p,s-p),v*=d,v*=l,1/v):1/(d*e(d+p)):(m=d+c-.5,d+p===d?t(p/m)<u?h=i(-p):h=1:(t(p)<10?h=i((.5-d)*r(p/m)):h=o(m/(m+p),d-.5),h*=n(d)/n(d+p)),h*=o(a/(m+p),p),h)}return Y0=f,Y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var K0,v6;function fL(){if(v6)return K0;v6=1;var n=ye(),e=xn(),r=Un(),t=X7(),i=mo(),o=lL();function u(a,c){var s,l,f;if(a<=0||a+c<=0)return r(a)/r(a+c);if(l=e(c),l===c){if(f=e(a),f===a&&a<=i&&a+c<=i)return t(f-1)/t(l+f-1);if(n(c)<20){if(c===0)return 1;if(c<0){for(a-=1,s=a,c+=1;c!==0;)a-=1,s*=a,c+=1;return s}for(s=1/a,c-=1;c!==0;)a+=1,s/=a,c-=1;return s}}return o(a,c)}return K0=u,K0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z0,m6;function Op(){if(m6)return z0;m6=1;var n=fL();return z0=n,z0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J0,b6;function dL(){if(b6)return J0;b6=1;function n(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}return J0=n,J0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q0,g6;function pL(){if(g6)return Q0;g6=1;function n(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}return Q0=n,Q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Z0,_6;function hL(){if(_6)return Z0;_6=1;var n=gn(),e=xt(),r=ue(),t=$r(),i=nn(),o=dL(),u=pL(),a=.6931471803691238,c=19082149292705877e-26,s=0x40000000000000,l=.3333333333333333,f=1048575,d=2146435072,p=1048576,h=1072693248;function v(m){var b,g,_,y,E,I,A,C,k,S,w,$;return m===0?i:r(m)||m<0?NaN:(g=n(m),E=0,g<p&&(E-=54,m*=s,g=n(m)),g>=d?m+m:(E+=(g>>20)-t|0,g&=f,C=g+614244&1048576|0,m=e(m,g|C^h),E+=C>>20|0,A=m-1,(f&2+g)<3?A===0?E===0?0:E*a+E*c:(I=A*A*(.5-l*A),E===0?A-I:E*a-(I-E*c-A)):(S=A/(2+A),$=S*S,C=g-398458|0,w=$*$,k=440401-g|0,y=w*o(w),_=$*u(w),C|=k,I=_+y,C>0?(b=.5*A*A,E===0?A-(b-S*(b+I)):E*a-(b-(S*(b+I)+E*c)-A)):E===0?A-S*(A-I):E*a-(S*(A-I)-E*c-A))))}return Z0=v,Z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ec,y6;function Ee(){if(y6)return ec;y6=1;var n=hL();return ec=n,ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var nc,E6;function vL(){if(E6)return nc;E6=1;var n=gn(),e=W7(),r=j7(),t=V7(),i=Sr(),o=po(),u=[0,0],a=1072243195,c=1044381696;function s(l){var f,d;if(f=n(l),f&=i,f<=a)return f<c?1:e(l,0);if(f>=o)return NaN;switch(d=t(l,u),d&3){case 0:return e(u[0],u[1]);case 1:return-r(u[0],u[1]);case 2:return-e(u[0],u[1]);default:return r(u[0],u[1])}}return nc=s,nc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rc,w6;function Dp(){if(w6)return rc;w6=1;var n=vL();return rc=n,rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tc,$6;function mL(){if($6)return tc;$6=1;var n=ue(),e=Xr(),r=Dp(),t=Ut(),i=ye(),o=Np(),u=pr();function a(c){var s,l;return n(c)?NaN:e(c)?NaN:(l=c%2,s=i(l),s===0||s===1?o(0,l):s<.25?t(u*l):s<.75?(s=.5-s,o(r(u*s),l)):s<1.25?(l=o(1,l)-l,t(u*l)):s<1.75?(s-=1.5,-o(r(u*s),l)):(l-=o(2,l),t(u*l)))}return tc=a,tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ic,S6;function bL(){if(S6)return ic;S6=1;var n=mL();return ic=n,ic}/**
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
*/var oc,A6;function gL(){if(A6)return oc;A6=1;function n(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}return oc=n,oc}/**
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
*/var uc,k6;function _L(){if(k6)return uc;k6=1;function n(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}return uc=n,uc}/**
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
*/var ac,L6;function yL(){if(L6)return ac;L6=1;function n(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}return ac=n,ac}/**
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
*/var sc,I6;function EL(){if(I6)return sc;I6=1;function n(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}return sc=n,sc}/**
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
*/var cc,R6;function wL(){if(R6)return cc;R6=1;function n(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}return cc=n,cc}/**
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
*/var lc,C6;function $L(){if(C6)return lc;C6=1;function n(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}return lc=n,lc}/**
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
*/var fc,M6;function SL(){if(M6)return fc;M6=1;function n(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}return fc=n,fc}/**
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
*/var dc,q6;function AL(){if(q6)return dc;q6=1;function n(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}return dc=n,dc}/**
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
*/var pc,N6;function kL(){if(N6)return pc;N6=1;function n(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}return pc=n,pc}/**
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
*/var hc,F6;function LL(){if(F6)return hc;F6=1;function n(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}return hc=n,hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var vc,T6;function IL(){if(T6)return vc;T6=1;var n=ue(),e=Xr(),r=ye(),t=Ee(),i=Mp(),o=bL(),u=pr(),a=Ce(),c=gL(),s=_L(),l=yL(),f=EL(),d=wL(),p=$L(),h=SL(),v=AL(),m=kL(),b=LL(),g=.07721566490153287,_=.3224670334241136,y=1,E=-.07721566490153287,I=.48383612272381005,A=-.1475877229945939,C=.06462494023913339,k=-.07721566490153287,S=1,w=.4189385332046727,$=1.4616321449683622,L=4503599627370496,R=72057594037927940,T=13877787807814457e-33,N=1.4616321449683622,B=-.12148629053584961,O=-3638676997039505e-33;function H(F){var Q,W,K,re,G,x,Y,j,Ae,fe,Z,oe,we;if(n(F)||e(F))return F;if(F===0)return a;if(F<0?(Q=!0,F=-F):Q=!1,F<T)return-t(F);if(Q){if(F>=L||(Ae=o(F),Ae===0))return a;W=t(u/r(Ae*F))}if(F===1||F===2)return 0;if(F<2)switch(F<=.9?(we=-t(F),F>=$-1+.27?(Z=1-F,K=0):F>=$-1-.27?(Z=F-(N-1),K=1):(Z=F,K=2)):(we=0,F>=$+.27?(Z=2-F,K=0):F>=$-.27?(Z=F-N,K=1):(Z=F-1,K=2)),K){case 0:oe=Z*Z,x=g+oe*c(oe),G=oe*(_+oe*s(oe)),Y=Z*x+G,we+=Y-.5*Z;break;case 1:oe=Z*Z,fe=oe*Z,x=I+fe*d(fe),G=A+fe*p(fe),re=C+fe*h(fe),Y=oe*x-(O-fe*(G+Z*re)),we+=B+Y;break;case 2:x=Z*(k+Z*v(Z)),G=S+Z*m(Z),we+=-.5*Z+x/G;break}else if(F<8)switch(K=i(F),Z=F-K,Y=Z*(E+Z*f(Z)),j=y+Z*l(Z),we=.5*Z+Y/j,oe=1,K){case 7:oe*=Z+6;case 6:oe*=Z+5;case 5:oe*=Z+4;case 4:oe*=Z+3;case 3:oe*=Z+2,we+=t(oe)}else F<R?(Ae=t(F),oe=1/F,Z=oe*oe,fe=w+oe*b(Z),we=(F-.5)*(Ae-1)+fe):we=F*(t(F)-1);return Q&&(we=W-we),we}return vc=H,vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mc,O6;function Jr(){if(O6)return mc;O6=1;var n=IL();return mc=n,mc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bc,D6;function hr(){if(D6)return bc;D6=1;var n=709.782712893384;return bc=n,bc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gc,P6;function RL(){if(P6)return gc;P6=1;var n=14901161193847656e-24;return gc=n,gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _c,H6;function CL(){if(H6)return _c;H6=1;var n=eval;return _c=n,_c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yc,x6;function ML(){if(x6)return yc;x6=1;var n=CL();function e(){var r;try{n('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}return yc=e,yc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ec,B6;function Y7(){if(B6)return Ec;B6=1;var n=ML();return Ec=n,Ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wc,U6;function qL(){if(U6)return wc;U6=1;var n=ye(),e=Bn(),r=1e6;function t(i,o){var u,a,c,s,l,f;if(f={},arguments.length>1&&(f=o),a=f.tolerance||e,s=f.maxTerms||r,l=f.initialValue||0,u=typeof i.next=="function",u===!0){for(c of i)if(l+=c,n(a*l)>=n(c)||--s===0)break}else do c=i(),l+=c;while(n(a*l)<n(c)&&--s);return l}return wc=t,wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $c,W6;function NL(){if(W6)return $c;W6=1;var n=ye(),e=Bn(),r=1e6;function t(i,o){var u,a,c,s,l;l={},arguments.length>1&&(l=o),u=l.tolerance||e,c=l.maxTerms||r,s=l.initialValue||0;do a=i(),s+=a;while(n(u*s)<n(a)&&--c);return s}return $c=t,$c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sc,j6;function jt(){if(j6)return Sc;j6=1;var n=Y7(),e=qL(),r=NL(),t;return n()?t=e:t=r,Sc=t,Sc}/**
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
*/var Ac,G6;function FL(){if(G6)return Ac;G6=1;function n(e,r){var t=1,i=e,o=r;return u;function u(){var a=t;return t*=i/o,i-=1,a}}return Ac=n,Ac}/**
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
*/var kc,V6;function TL(){if(V6)return kc;V6=1;var n=jt(),e=FL();function r(t,i){var o,u;return u=e(t,i),o=n(u),o}return kc=r,kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Lc,X6;function OL(){if(X6)return Lc;X6=1;var n=Me();function e(r,t){var i,o,u,a;if(u=n(-t),o=u,o!==0)for(i=o,a=1;a<r;++a)i/=a,i*=t,o+=i;return o}return Lc=e,Lc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ic,Y6;function DL(){if(Y6)return Ic;Y6=1;function n(e){return e===0?-.3250421072470015:-.3250421072470015+e*(-.02848174957559851+e*(-.005770270296489442+e*-23763016656650163e-21))}return Ic=n,Ic}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rc,K6;function PL(){if(K6)return Rc;K6=1;function n(e){return e===0?.39791722395915535:.39791722395915535+e*(.0650222499887673+e*(.005081306281875766+e*(.00013249473800432164+e*-3960228278775368e-21)))}return Rc=n,Rc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cc,z6;function HL(){if(z6)return Cc;z6=1;function n(e){return e===0?.41485611868374833:.41485611868374833+e*(-.3722078760357013+e*(.31834661990116175+e*(-.11089469428239668+e*(.035478304325618236+e*-.002166375594868791))))}return Cc=n,Cc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mc,J6;function xL(){if(J6)return Mc;J6=1;function n(e){return e===0?.10642088040084423:.10642088040084423+e*(.540397917702171+e*(.07182865441419627+e*(.12617121980876164+e*(.01363708391202905+e*.011984499846799107))))}return Mc=n,Mc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qc,Q6;function BL(){if(Q6)return qc;Q6=1;function n(e){return e===0?-.6938585727071818:-.6938585727071818+e*(-10.558626225323291+e*(-62.375332450326006+e*(-162.39666946257347+e*(-184.60509290671104+e*(-81.2874355063066+e*-9.814329344169145)))))}return qc=n,qc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nc,Z6;function UL(){if(Z6)return Nc;Z6=1;function n(e){return e===0?19.651271667439257:19.651271667439257+e*(137.65775414351904+e*(434.56587747522923+e*(645.3872717332679+e*(429.00814002756783+e*(108.63500554177944+e*(6.570249770319282+e*-.0604244152148581))))))}return Nc=n,Nc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fc,e4;function WL(){if(e4)return Fc;e4=1;function n(e){return e===0?-.799283237680523:-.799283237680523+e*(-17.757954917754752+e*(-160.63638485582192+e*(-637.5664433683896+e*(-1025.0951316110772+e*-483.5191916086514))))}return Fc=n,Fc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tc,n4;function jL(){if(n4)return Tc;n4=1;function n(e){return e===0?30.33806074348246:30.33806074348246+e*(325.7925129965739+e*(1536.729586084437+e*(3199.8582195085955+e*(2553.0504064331644+e*(474.52854120695537+e*-22.44095244658582)))))}return Tc=n,Tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Oc,r4;function GL(){if(r4)return Oc;r4=1;var n=ue(),e=Me(),r=Bt(),t=Ce(),i=nn(),o=DL(),u=PL(),a=HL(),c=xL(),s=BL(),l=UL(),f=WL(),d=jL(),p=1e-300,h=13877787807814457e-33,v=.8450629115104675,m=.12837916709551256,b=1,g=-.0023621185607526594,_=1,y=-.009864944034847148,E=1,I=-.0098649429247001,A=1;function C(k){var S,w,$,L,R,T,N,B;if(n(k))return NaN;if(k===t)return 0;if(k===i)return 2;if(k===0)return 1;if(k<0?(S=!0,w=-k):(S=!1,w=k),w<.84375)return w<h?1-k:($=k*k,L=m+$*o($),R=b+$*u($),T=L/R,k<.25?1-(k+k*T):(L=k*T,L+=k-.5,.5-L));if(w<1.25)return R=w-1,N=g+R*a(R),B=_+R*c(R),S?1+v+N/B:1-v-N/B;if(w<28){if(R=1/(w*w),w<2.857142857142857)L=y+R*s(R),R=E+R*l(R);else{if(k<-6)return 2-p;L=I+R*f(R),R=A+R*d(R)}return $=r(w,0),L=e(-($*$)-.5625)*e(($-w)*($+w)+L/R),S?2-L/w:L/w}return S?2-p:p*p}return Oc=C,Oc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dc,t4;function bo(){if(t4)return Dc;t4=1;var n=GL();return Dc=n,Dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Pc,i4;function VL(){if(i4)return Pc;i4=1;var n=bo(),e=_e(),r=Me(),t=pr();function i(o,u){var a,c,s,l,f;if(l=n(e(u)),l!==0&&o>1){for(c=r(-u)/e(t*u),c*=u,a=.5,c/=a,s=c,f=2;f<o;++f)c/=f-a,c*=u,s+=c;l+=s}return l}return Pc=i,Pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hc,o4;function Qr(){if(o4)return Hc;o4=1;var n=-708.3964185322641;return Hc=n,Hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xc,u4;function XL(){if(u4)return xc;u4=1;var n=Me(),e=qe(),r=Ee(),t=hr(),i=Qr();function o(u,a){var c,s;return s=u*r(a),a>=1?s<t&&-a>i?c=e(a,u)*n(-a):u>=1?c=e(a/n(a/u),u):c=n(s-a):s>i?c=e(a,u)*n(-a):a/u<t?c=e(a/n(a/u),u):c=n(s-a),c}return xc=o,xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bc,a4;function K7(){if(a4)return Bc;a4=1;function n(e,r){var t,i;if(i=e.length,i<2||r===0)return i===0?0:e[0];for(i-=1,t=e[i]*r+e[i-1],i-=2;i>=0;)t=t*r+e[i],i-=1;return t}return Bc=n,Bc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uc,s4;function YL(){if(s4)return Uc;s4=1;var n=Function;return Uc=n,Uc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wc,c4;function KL(){if(c4)return Wc;c4=1;var n=YL();return Wc=n,Wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jc,l4;function zL(){if(l4)return jc;l4=1;var n=KL(),e=K7();function r(t){var i,o,u,a;if(t.length>500)return c;if(i="return function evalpoly(x){",o=t.length,o===0)i+="return 0.0;";else if(o===1)i+="return "+t[0]+";";else{for(i+="if(x===0.0){return "+t[0]+";}",i+="return "+t[0],u=o-1,a=1;a<o;a++)i+="+x*",a<u&&(i+="("),i+=t[a];for(a=0;a<u-1;a++)i+=")";i+=";"}return i+="}",i+="//# sourceURL=evalpoly.factory.js",new n(i)();function c(s){return e(t,s)}}return jc=r,jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gc,f4;function vr(){if(f4)return Gc;f4=1;var n=en(),e=K7(),r=zL();return n(e,"factory",r),Gc=e,Gc}/**
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
*/var Vc,d4;function JL(){if(d4)return Vc;d4=1;function n(e){var r=-e,t=-1,i=0;return o;function o(){return t*=r,i+=1,t/i}}return Vc=n,Vc}/**
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
*/var Xc,p4;function QL(){if(p4)return Xc;p4=1;var n=ye(),e=Ee(),r=Bn(),t=jt(),i=JL();function o(u){var a,c;return u<=-1?NaN:(c=n(u),c>.95?e(1+u)-u:c<r?-u*u/2:(a={initialValue:-u},t(i(u),a)))}return Xc=o,Xc}/**
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
*/var Yc,h4;function z7(){if(h4)return Yc;h4=1;var n=QL();return Yc=n,Yc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kc,v4;function go(){if(v4)return Kc;v4=1;var n=6.283185307179586;return Kc=n,Kc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zc,m4;function ZL(){if(m4)return zc;m4=1;function n(e){return e===0?-.3333333333333333:-.3333333333333333+e*(.08333333333333333+e*(-.014814814814814815+e*(.0011574074074074073+e*(.0003527336860670194+e*(-.0001787551440329218+e*(3919263178522438e-20+e*(-21854485106799924e-22+e*(-185406221071516e-20+e*(8296711340953087e-22+e*(-17665952736826078e-23+e*(6707853543401498e-24+e*(10261809784240309e-24+e*(-4382036018453353e-24+e*914769958223679e-24)))))))))))))}return zc=n,zc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jc,b4;function eI(){if(b4)return Jc;b4=1;function n(e){return e===0?-.001851851851851852:-.001851851851851852+e*(-.003472222222222222+e*(.0026455026455026454+e*(-.0009902263374485596+e*(.00020576131687242798+e*(-4018775720164609e-22+e*(-18098550334489977e-21+e*(764916091608111e-20+e*(-16120900894563446e-22+e*(4647127802807434e-24+e*(1378633446915721e-22+e*(-5752545603517705e-23+e*11951628599778148e-24)))))))))))}return Jc=n,Jc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qc,g4;function nI(){if(g4)return Qc;g4=1;function n(e){return e===0?.004133597883597883:.004133597883597883+e*(-.0026813271604938273+e*(.0007716049382716049+e*(20093878600823047e-22+e*(-.00010736653226365161+e*(52923448829120125e-21+e*(-12760635188618728e-21+e*(3423578734096138e-23+e*(13721957309062932e-22+e*(-6298992138380055e-22+e*14280614206064242e-23)))))))))}return Qc=n,Qc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zc,_4;function rI(){if(_4)return Zc;_4=1;function n(e){return e===0?.0006494341563786008:.0006494341563786008+e*(.00022947209362139917+e*(-.0004691894943952557+e*(.00026772063206283885+e*(-7561801671883977e-20+e*(-2396505113867297e-22+e*(11082654115347302e-21+e*(-56749528269915965e-22+e*14230900732435883e-22)))))))}return Zc=n,Zc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var el,y4;function tI(){if(y4)return el;y4=1;function n(e){return e===0?-.0008618882909167117:-.0008618882909167117+e*(.0007840392217200666+e*(-.0002990724803031902+e*(-14638452578843418e-22+e*(6641498215465122e-20+e*(-3968365047179435e-20+e*11375726970678419e-21)))))}return el=n,el}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nl,E4;function iI(){if(E4)return nl;E4=1;function n(e){return e===0?-.00033679855336635813:-.00033679855336635813+e*(-6972813758365858e-20+e*(.0002772753244959392+e*(-.00019932570516188847+e*(6797780477937208e-20+e*(1419062920643967e-22+e*(-13594048189768693e-21+e*(8018470256334202e-21+e*-2291481176508095e-21)))))))}return nl=n,nl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rl,w4;function oI(){if(w4)return rl;w4=1;function n(e){return e===0?.0005313079364639922:.0005313079364639922+e*(-.0005921664373536939+e*(.0002708782096718045+e*(7902353232660328e-22+e*(-8153969367561969e-20+e*(561168275310625e-19+e*-18329116582843375e-21)))))}return rl=n,rl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tl,$4;function uI(){if($4)return tl;$4=1;function n(e){return e===0?.00034436760689237765:.00034436760689237765+e*(5171790908260592e-20+e*(-.00033493161081142234+e*(.0002812695154763237+e*-.00010976582244684731)))}return tl=n,tl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var il,S4;function aI(){if(S4)return il;S4=1;function n(e){return e===0?-.0006526239185953094:-.0006526239185953094+e*(.0008394987206720873+e*-.000438297098541721)}return il=n,il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ol,A4;function sI(){if(A4)return ol;A4=1;var n=vr(),e=z7(),r=bo(),t=_e(),i=Me(),o=go(),u=ZL(),a=eI(),c=nI(),s=rI(),l=tI(),f=iI(),d=oI(),p=uI(),h=aI(),v=[0,0,0,0,0,0,0,0,0,0];function m(b,g){var _,y,E,I,A;return y=(g-b)/b,E=-e(y),I=b*E,A=t(2*E),g<b&&(A=-A),v[0]=u(A),v[1]=a(A),v[2]=c(A),v[3]=s(A),v[4]=l(A),v[5]=f(A),v[6]=d(A),v[7]=p(A),v[8]=h(A),v[9]=-.0005967612901927463,_=n(v,1/b),_*=i(-I)/t(o*b),g<b&&(_=-_),_+=r(t(I))/2,_}return ol=m,ol}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ul,k4;function cI(){if(k4)return ul;k4=1;function n(e,r){var t=1,i=e,o=r;return u;function u(){var a=t;return i+=1,t*=o/i,a}}return ul=n,ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var al,L4;function J7(){if(L4)return al;L4=1;var n=jt(),e=cI();function r(t,i,o){var u,a;return o=o||0,a=e(t,i),u=n(a,{initialValue:o}),u}return al=r,al}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sl,I4;function lI(){if(I4)return sl;I4=1;function n(e){var r,t,i;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(t=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),i=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),i=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/i)}return sl=n,sl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var cl,R4;function fI(){if(R4)return cl;R4=1;var n=lI();return cl=n,cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ll,C4;function _o(){if(C4)return ll;C4=1;var n=fI();return ll=n,ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var fl,M4;function dI(){if(M4)return fl;M4=1;var n=_o(),e=Jr(),r=Un(),t=z7(),i=_e(),o=ye(),u=Me(),a=qe(),c=kr(),s=dr(),l=Ee(),f=Lr(),d=hr(),p=Qr(),h=Wt(),v=zr();function m(b,g){var _,y,E,I,A,C,k;return E=b+h-.5,k=(g-b-h+.5)/E,b<1?g<=p||b<1/f?u(b*l(g)-g-e(b)):a(g,b)*u(-g)/r(b):(o(k*k*b)<=100&&b>150?(_=b*t(k)+g*(.5-h)/E,_=u(_)):(I=b*l(g/E),A=b-g,s(I,A)<=p||c(I,A)>=d?(y=A/b,s(I,A)/2>p&&c(I,A)/2<d?(C=a(g/E,b/2)*u(A/2),_=C*C):s(I,A)/4>p&&c(I,A)/4<d&&g>b?(C=a(g/E,b/4)*u(A/4),_=C*C,_*=_):y>p&&y<d?_=a(g*u(y)/E,b):_=u(I+A)):_=a(g/E,b)*u(A)),_*=i(E/v)/n(b),_)}return fl=m,fl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var dl,q4;function pI(){if(q4)return dl;q4=1;var n=ue(),e=Xr(),r=ye(),t=Vr(),i=Ee(),o=qe(),u=Mp();function a(c,s){var l,f;if(n(c)||n(s))return NaN;if(s===0)return 0;if(c===0)return-1;if(c<0&&s%2===0&&(c=-c),c>0){if((r(s*(c-1))<.5||r(s)<.2)&&(f=i(c)*s,f<.5))return t(f)}else if(u(s)!==s)return NaN;return l=o(c,s)-1,e(l)||n(l)?NaN:l}return dl=a,dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pl,N4;function hI(){if(N4)return pl;N4=1;var n=pI();return pl=n,pl}/**
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
*/var hl,F4;function vI(){if(F4)return hl;F4=1;function n(e){var r,t,i;return e===0?-.01803556856784494:(e<0?r=-e:r=e,r<=1?(t=-.01803556856784494+e*(.02512664961998968+e*(.049410315156753225+e*(.0172491608709614+e*(-.0002594535632054381+e*(-.0005410098692152044+e*(-3245886498259485e-20+e*0)))))),i=1+e*(1.962029871977952+e*(1.4801966942423133+e*(.5413914320717209+e*(.09885042511280101+e*(.008213096746488934+e*(.00022493629192211576+e*-22335276320861708e-23))))))):(e=1/e,t=0+e*(-3245886498259485e-20+e*(-.0005410098692152044+e*(-.0002594535632054381+e*(.0172491608709614+e*(.049410315156753225+e*(.02512664961998968+e*-.01803556856784494)))))),i=-22335276320861708e-23+e*(.00022493629192211576+e*(.008213096746488934+e*(.09885042511280101+e*(.5413914320717209+e*(1.4801966942423133+e*(1.962029871977952+e*1))))))),t/i)}return hl=n,hl}/**
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
*/var vl,T4;function mI(){if(T4)return vl;T4=1;function n(e){var r,t,i;return e===0?.04906224540690395:(e<0?r=-e:r=e,r<=1?(t=.04906224540690395+e*(-.09691175301595212+e*(-.4149833583594954+e*(-.4065671242119384+e*(-.1584135863906922+e*(-.024014982064857155+e*-.0010034668769627955))))),i=1+e*(3.0234982984646304+e*(3.4873958536072385+e*(1.9141558827442668+e*(.5071377386143635+e*(.05770397226904519+e*.001957681026011072)))))):(e=1/e,t=-.0010034668769627955+e*(-.024014982064857155+e*(-.1584135863906922+e*(-.4065671242119384+e*(-.4149833583594954+e*(-.09691175301595212+e*.04906224540690395))))),i=.001957681026011072+e*(.05770397226904519+e*(.5071377386143635+e*(1.9141558827442668+e*(3.4873958536072385+e*(3.0234982984646304+e*1)))))),t/i)}return vl=n,vl}/**
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
*/var ml,O4;function bI(){if(O4)return ml;O4=1;function n(e){var r,t,i;return e===0?-.029232972183027003:(e<0?r=-e:r=e,r<=1?(t=-.029232972183027003+e*(.14421626775719232+e*(-.14244039073863127+e*(.05428096940550536+e*(-.008505359768683364+e*(.0004311713426792973+e*0))))),i=1+e*(-1.5016935605448505+e*(.846973248876495+e*(-.22009515181499575+e*(.02558279715597587+e*(-.0010066679553914337+e*-8271935218912905e-22)))))):(e=1/e,t=0+e*(.0004311713426792973+e*(-.008505359768683364+e*(.05428096940550536+e*(-.14244039073863127+e*(.14421626775719232+e*-.029232972183027003))))),i=-8271935218912905e-22+e*(-.0010066679553914337+e*(.02558279715597587+e*(-.22009515181499575+e*(.846973248876495+e*(-1.5016935605448505+e*1)))))),t/i)}return ml=n,ml}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bl,D4;function gI(){if(D4)return bl;D4=1;var n=Ee(),e=Bn(),r=vI(),t=mI(),i=bI(),o=.15896368026733398,u=.5281534194946289,a=.45201730728149414;function c(s,l,f){var d,p,h,v;if(s<e)return-n(s);if(l===0||f===0)return 0;if(p=0,s>2){if(s>=3){do s-=1,f-=1,p+=n(s);while(s>=3);f=s-2}return h=f*(s+1),v=r(f),p+=h*o+h*v,p}return s<1&&(p+=-n(s),f=l,l=s,s+=1),s<=1.5?(h=t(l),d=l*f,p+=d*u+d*h,p):(h=f*l,v=i(-f),p+=h*a+h*v,p)}return bl=c,bl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var gl,P4;function _I(){if(P4)return gl;P4=1;var n=Un(),e=Vr(),r=_n(),t=ue(),i=gI();function o(u){return t(u)?NaN:u<0?u<-.5?n(1+u)-1:e(-r(u)+i(u+2,u+1,u)):u<2?e(i(u+1,u,u-1)):n(1+u)-1}return gl=o,gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _l,H4;function yI(){if(H4)return _l;H4=1;var n=_I();return _l=n,_l}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var yl,x4;function EI(){if(x4)return yl;x4=1;function n(e,r){var t,i,o,u;return t=-r,r=-r,i=e+1,o=1,a;function a(){return u=t/i,t*=r,o+=1,t/=o,i+=1,u}}return yl=n,yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var El,B4;function wI(){if(B4)return El;B4=1;var n=hI(),e=jt(),r=yI(),t=EI();function i(o,u,a){var c,s,l,f,d;return s=r(o),l=(s+1)/o,f=n(u,o),s-=f,s/=o,d=t(o,u),f+=1,c=a?l:0,s=-f*e(d,{initialValue:(c-s)/f}),a&&(s=-s),[s,l]}return El=i,El}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wl,U4;function yo(){if(U4)return wl;U4=1;var n=11754943508222875e-54;return wl=n,wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $l,W4;function $I(){if(W4)return $l;W4=1;var n=ye(),e=yo(),r=Bn(),t=1e6;function i(a,c,s){var l,f,d,p,h,v,m;if(l=typeof a.next=="function",m=l?a.next().value:a(),p=m[1],d=m[0],p===0&&(p=e),h=p,v=0,l===!0)do m=a.next().value,m&&(v=m[1]+m[0]*v,v===0&&(v=e),h=m[1]+m[0]/h,h===0&&(h=e),v=1/v,f=h*v,p*=f);while(n(f-1)>c&&--s);else do m=a(),m&&(v=m[1]+m[0]*v,v===0&&(v=e),h=m[1]+m[0]/h,h===0&&(h=e),v=1/v,f=h*v,p*=f);while(m&&n(f-1)>c&&--s);return d/p}function o(a,c,s){var l,f,d,p,h,v;if(l=typeof a.next=="function",v=l?a.next().value:a(),d=v[1],d===0&&(d=e),p=d,h=0,l===!0)do v=a.next().value,v&&(h=v[1]+v[0]*h,h===0&&(h=e),p=v[1]+v[0]/p,p===0&&(p=e),h=1/h,f=p*h,d*=f);while(v&&n(f-1)>c&&--s);else do v=a(),v&&(h=v[1]+v[0]*h,h===0&&(h=e),p=v[1]+v[0]/p,p===0&&(p=e),h=1/h,f=p*h,d*=f);while(v&&n(f-1)>c&&--s);return d}function u(a,c){var s,l,f;return l={},arguments.length>1&&(l=c),s=l.maxIter||t,f=l.tolerance||r,l.keep?o(a,f,s):i(a,f,s)}return $l=u,$l}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sl,j4;function SI(){if(j4)return Sl;j4=1;var n=ye(),e=Bn(),r=yo(),t=1e6;function i(a,c,s){var l,f,d,p,h,v;v=a(),h=v[1],f=v[0],h===0&&(h=r),d=h,p=0;do v=a(),v&&(p=v[1]+v[0]*p,p===0&&(p=r),d=v[1]+v[0]/d,d===0&&(d=r),p=1/p,l=d*p,h*=l);while(v&&n(l-1)>c&&--s);return f/h}function o(a,c,s){var l,f,d,p,h;h=a(),p=h[1],p===0&&(p=r),f=p,d=0;do h=a(),h&&(d=h[1]+h[0]*d,d===0&&(d=r),f=h[1]+h[0]/f,f===0&&(f=r),d=1/d,l=f*d,p*=l);while(h&&n(l-1)>c&&--s);return p}function u(a,c){var s,l,f;return l={},arguments.length>1&&(l=c),f=l.tolerance||e,s=l.maxIter||t,l.keep?o(a,f,s):i(a,f,s)}return Sl=u,Sl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Al,G4;function Q7(){if(G4)return Al;G4=1;var n=Y7(),e=$I(),r=SI(),t;return n()?t=e:t=r,Al=t,Al}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var kl,V4;function AI(){if(V4)return kl;V4=1;function n(e,r){var t=r-e+1,i=e,o=0;return u;function u(){return o+=1,t+=2,[o*(i-o),t]}}return kl=n,kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ll,X4;function Z7(){if(X4)return Ll;X4=1;var n=Q7(),e=AI();function r(t,i){var o=e(t,i);return 1/(i-t+1+n(o))}return Ll=r,Ll}/**
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
*/var Il,Y4;function kI(){if(Y4)return Il;Y4=1;var n=xn(),e=Un(),r=ye(),t=qe(),i=Ee(),o=RL(),u=Lr(),a=hr(),c=TL(),s=OL(),l=VL(),f=XL(),d=sI(),p=J7(),h=dI(),v=wI(),m=Z7();function b(g,_,y,E){var I,A,C,k,S,w,$,L,R,T,N,B,O,H;switch($=0,L=E,w=_<30&&_<=g+1&&g<a,w?(O=n(_),R=O===_,C=R?!1:r(O-_)===.5):(R=!1,C=!1),R&&g>.6?(L=!L,A=0):C&&g>.2?(L=!L,A=1):g<o&&_>1?A=6:g>1e3&&(_<g||r(_-50)/g<1)?(L=!L,A=7):g<.5?-.4/i(g)<_?A=2:A=3:g<1.1?g*.75<_?A=2:A=3:(S=!1,y&&_>20&&(T=r((g-_)/_),_>200?20/_>T*T&&(S=!0):T<.4&&(S=!0)),S?A=5:g-1/(3*g)<_?A=2:(A=4,L=!L)),A){case 0:$=s(_,g),y===!1&&($*=e(_));break;case 1:$=l(_,g),y===!1&&($*=e(_));break;case 2:$=y?h(_,g):f(_,g),$!==0&&(k=0,I=!1,L&&(k=y?1:e(_),y||$>=1||u*$>k?(k/=$,y||_<1||u/_>k?(k*=-_,I=!0):k=0):k=0),$*=p(_,g,k)/_,I&&(L=!1,$=-$));break;case 3:L=!L,N=v(_,g,L),$=N[0],H=N[1],L=!1,y&&($/=H);break;case 4:$=y?h(_,g):f(_,g),$!==0&&($*=m(_,g));break;case 5:$=d(_,g),g>=_&&(L=!L);break;case 6:$=y?t(g,_)/e(_+1):t(g,_)/_,$*=1-_*g/(_+1);break;case 7:$=y?h(_,g):f(_,g),$/=g,$!==0&&($*=c(_,g));break}return y&&$>1&&($=1),L&&(B=y?1:e(_),$=B-$),$}return Il=b,Il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Rl,K4;function LI(){if(K4)return Rl;K4=1;var n=Jr(),e=Me(),r=Ee(),t=vo(),i=hr(),o=Ce(),u=mo(),a=kI(),c=J7(),s=Z7();function l(f,d,p,h){var v,m,b,g;return f<0||d<=0?NaN:(v=p===void 0?!0:p,b=h,d>=u&&!v?(b&&d*4<f?(g=d*r(f)-f,g+=r(s(d,f))):!b&&d>4*f?(g=d*r(f)-f,m=0,g+=r(c(d,f,m)/d)):(g=a(f,d,!0,b),g===0?b?(g=1+1/(12*d)+1/(288*d*d),g=r(g)-d+(d-.5)*r(d),g+=r(t)):(g=d*r(f)-f,m=0,g+=r(c(d,f,m)/d)):g=r(g)+n(d)),g>i?o:e(g)):a(f,d,v,b))}return Rl=l,Rl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cl,z4;function e9(){if(z4)return Cl;z4=1;var n=LI();return Cl=n,Cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ml,J4;function II(){if(J4)return Ml;J4=1;var n=Me(),e=qe(),r=Ee(),t=hr(),i=Qr();function o(u,a){var c,s;return s=u*r(a),a>=1?s<t&&-a>i?c=e(a,u)*n(-a):u>=1?c=e(a/n(a/u),u):c=n(s-a):s>i?c=e(a,u)*n(-a):a/u<t?c=e(a/n(a/u),u):c=n(s-a),c}return Ml=o,Ml}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ql,Q4;function RI(){if(Q4)return ql;Q4=1;var n=_o(),e=Jr(),r=Un(),t=_n(),i=_e(),o=ye(),u=Me(),a=qe(),c=kr(),s=dr(),l=Ee(),f=hr(),d=Qr(),p=Wt(),h=zr();function v(m,b){var g,_,y,E,I,A,C;return y=m+p-.5,C=(b-m-p+.5)/y,m<1?b<=d?u(m*l(b)-b-e(m)):a(b,m)*u(-b)/r(m):(o(C*C*m)<=100&&m>150?(g=m*(t(C)-C)+b*(.5-p)/y,g=u(g)):(E=m*l(b/y),I=m-b,s(E,I)<=d||c(E,I)>=f?(_=I/m,s(E,I)/2>d&&c(E,I)/2<f?(A=a(b/y,m/2)*u(I/2),g=A*A):s(E,I)/4>d&&c(E,I)/4<f&&b>m?(A=a(b/y,m/4)*u(I/4),g=A*A,g*=g):_>d&&_<f?g=a(b*u(_)/y,m):g=u(E+I)):g=a(b/y,m)*u(I)),g*=i(y/h)/n(m),g)}return ql=v,ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Nl,Z4;function CI(){if(Z4)return Nl;Z4=1;var n=Op(),e=X7(),r=e9(),t=_n(),i=ye(),o=qe(),u=Ee(),a=Ar(),c=Bn(),s=II(),l=RI(),f=new Array(30);function d(p,h,v,m,b,g,_){var y,E,I,A,C,k,S,w,$,L,R,T,N,B,O,H,F,Q;if(k=h-1,F=p+k/2,m<.35?L=t(-m):L=u(v),Q=-F*L,T=l(h,Q),T<=a)return b;for(_?(y=T/n(p,h),y/=o(F,h)):y=s(h,Q)/o(F,h),y*=g,f[0]=1,N=r(Q,h,!0,!0),N/=T,A=b+y*N,I=1,S=L/2,S*=S,w=1,R=4*F*F,C=h,O=1;O<f.length;++O){for(I+=2,f[O]=0,$=h-O,E=3,B=1;B<O;++B)$=B*h-O,f[O]+=$*f[O-B]/e(E),E+=2;if(f[O]/=O,f[O]+=k/e(I),N=(C*(C+1)*N+(Q+C+1)*w)/R,w*=S,C+=2,H=y*f[O]*N,A+=H,H>1){if(i(H)<i(c*A))break}else if(i(H/c)<i(A))break}return A}return Nl=d,Nl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Fl,eb;function MI(){if(eb)return Fl;eb=1;function n(e,r,t){var i,o;if(t===0)return 1;for(i=1,o=0;o<t;o++)i*=(e+o)/(r+o);return i}return Fl=n,Fl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tl,nb;function qI(){if(nb)return Tl;nb=1;var n=ye(),e=kr();function r(t,i){return e(n(t),n(i))}return Tl=r,Tl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ol,rb;function NI(){if(rb)return Ol;rb=1;var n=qI();return Ol=n,Ol}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dl,tb;function FI(){if(tb)return Dl;tb=1;var n=ye(),e=dr();function r(t,i){return e(n(t),n(i))}return Dl=r,Dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pl,ib;function TI(){if(ib)return Pl;ib=1;var n=FI();return Pl=n,Pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Hl,ob;function Pp(){if(ob)return Hl;ob=1;var n=_o(),e=NI(),r=TI(),t=Vr(),i=_n(),o=_e(),u=ye(),a=Me(),c=qe(),s=dr(),l=Ee(),f=hr(),d=Qr(),p=Wt(),h=zr();function v(m,b,g,_,y){var E,I,A,C,k,S,w,$,L,R,T,N,B,O;if(!y)return c(g,m)*c(_,b);if(B=m+b,C=m+p-.5,k=b+p-.5,S=B+p-.5,E=n(B),E/=n(m)*n(b),E*=o(k/h),E*=o(C/S),w=(g*b-_*C)/C,$=(_*m-g*k)/k,r(w,$)<.2)if(w*$>0||s(m,b)<1)u(w)<.1?E*=a(m*i(w)):E*=c(g*S/C,m),u($)<.1?E*=a(b*i($)):E*=c(_*S/k,b);else if(e(w,$)<.5)I=m<b,A=b/m,I&&A*$<.1||!I&&w/A>.1?(L=t(A*i($)),L=w+L+L*w,L=m*i(L),E*=a(L)):(L=t(i(w)/A),L=$+L+L*$,L=b*i(L),E*=a(L));else if(u(w)<u($))if(O=m*i(w)+b*l(_*S/k),O<=d||O>=f){if(O+=l(E),O>=f)return NaN;E=a(O)}else E*=a(O);else if(O=b*i($)+m*l(g*S/C),O<=d||O>=f){if(O+=l(E),O>=f)return NaN;E=a(O)}else E*=a(O);else if(T=g*S/C,N=_*S/k,w=m*l(T),$=b*l(N),w>=f||w<=d||$>=f||$<=d)if(m<b)if(R=c(N,b/m),L=m*(l(T)+l(R)),L<f&&L>d)E*=c(R*T,m);else{if($+=w+l(E),$>=f)return NaN;E=a($)}else if(R=c(T,m/b),L=(l(R)+l(N))*b,L<f&&L>d)E*=c(R*N,b);else{if($+=w+l(E),$>=f)return NaN;E=a($)}else E*=c(T,m)*c(N,b);return E}return Hl=v,Hl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xl,ub;function OI(){if(ub)return xl;ub=1;var n=Q7(),e=Pp(),r={keep:!0,maxIter:1e3};function t(o,u,a,c){var s=0;return l;function l(){var f,d,p;return d=(o+s-1)*(o+u+s-1)*s*(u-s)*a*a,f=o+2*s-1,d/=f*f,p=s,p+=s*(u-s)*a/(o+2*s-1),p+=(o+s)*(o*c-u*a+1+s*(2-a))/(o+2*s+1),s+=1,[d,p]}}function i(o,u,a,c,s,l){var f,d,p;return f=e(o,u,a,c,s),l&&(l[1]=f),f===0?f:(p=t(o,u,a,c),d=n(p,r),f/d)}return xl=i,xl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bl,ab;function DI(){if(ab)return Bl;ab=1;var n=9007199254740991;return Bl=n,Bl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ul,sb;function PI(){if(sb)return Ul;sb=1;function n(e,r){var t=0,i;if(e===0)return r;if(r===0)return e;for(;(e&1)===0&&(r&1)===0;)e>>>=1,r>>>=1,t+=1;for(;(e&1)===0;)e>>>=1;for(;r;){for(;(r&1)===0;)r>>>=1;e>r&&(i=r,r=e,e=i),r-=e}return e<<t}return Ul=n,Ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wl,cb;function HI(){if(cb)return Wl;cb=1;function n(e,r){var t=1,i;if(e===0)return r;if(r===0)return e;for(;e%2===0&&r%2===0;)e/=2,r/=2,t*=2;for(;e%2===0;)e/=2;for(;r;){for(;r%2===0;)r/=2;e>r&&(i=r,r=e,e=i),r-=e}return t*e}return Wl=n,Wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jl,lb;function xI(){if(lb)return jl;lb=1;var n=ue(),e=Kr(),r=Ce(),t=nn(),i=U7(),o=PI(),u=HI();function a(c,s){return n(c)||n(s)?NaN:c===r||s===r||c===t||s===t?NaN:e(c)&&e(s)?(c<0&&(c=-c),s<0&&(s=-s),c<=i&&s<=i?o(c,s):u(c,s)):NaN}return jl=a,jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gl,fb;function BI(){if(fb)return Gl;fb=1;var n=xI();return Gl=n,Gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vl,db;function UI(){if(db)return Vl;db=1;var n=DI(),e=Ce(),r=Kr(),t=ue(),i=Fp(),o=xn(),u=BI();function a(c,s){var l,f,d,p,h,v,m;if(t(c)||t(s))return NaN;if(!r(c)||!r(s))return NaN;if(s<0||(f=1,c<0&&(c=-c+s-1,i(s)&&(f*=-1)),s>c))return 0;if(s===0||s===c)return f;if(s===1||s===c-1)return f*c;for(c-s<s&&(s=c-s),m=o(n/c),l=1,h=1;h<=s&&!(l>m);h++)l*=c,l/=h,c-=1;return h>s?f*l:(d=a(c,s-h+1),d===e?f*d:(p=a(s,s-h+1),v=u(d,p),d/=v,p/=v,l/=p,f*l*d))}return Vl=a,Vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xl,pb;function WI(){if(pb)return Xl;pb=1;var n=UI();return Xl=n,Xl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Yl,hb;function jI(){if(hb)return Yl;hb=1;var n=WI(),e=xn(),r=qe(),t=Ar();function i(o,u,a,c){var s,l,f,d,p;if(l=r(a,o),l>t)for(d=l,p=e(o-1);p>u;p--)d*=(p+1)*c/((o-p)*a),l+=d;else if(f=e(o*a),f<=u+1&&(f=e(u+2)),l=r(a,f)*r(c,o-f),l*=n(e(o),e(f)),l===0)for(p=f-1;p>u;p--)l+=r(a,p)*r(c,o-p),l*=n(e(o),e(p));else{for(d=l,s=l,p=f-1;p>u;p--)d*=(p+1)*c/((o-p)*a),l+=d;for(d=s,p=f+1;p<=o;p++)d*=(o-p+1)*a/(p*c),l+=d}return l}return Yl=i,Yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Kl,vb;function GI(){if(vb)return Kl;vb=1;var n=Pp();function e(r,t,i,o,u,a,c){var s,l,f,d;if(s=n(r,t,i,o,a),c&&(c[1]=s),s/=r,s===0)return s;for(f=1,l=1,d=0;d<u-1;++d)l*=(r+t+d)*i/(r+d+1),f+=l;return s*=f,s}return Kl=e,Kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var zl,mb;function VI(){if(mb)return zl;mb=1;var n=_o(),e=jt(),r=_n(),t=_e(),i=Me(),o=qe(),u=Ee(),a=Ar(),c=hr(),s=Qr(),l=Wt(),f=zr(),d={maxTerms:100};function p(v,m,b,g){var _=1-m,y=1;return E;function E(){var I=g/v;return v+=1,g*=_*b/y,y+=1,_+=1,I}}function h(v,m,b,g,_,y,E){var I,A,C,k,S,w,$,L;return _?($=v+m,A=v+l-.5,C=m+l-.5,k=$+l-.5,I=n($)/(n(v)*n(m)),S=u(k/C)*(m-.5),w=u(b*k/A)*v,S>s&&S<c&&w>s&&w<c?(v*m<C*10?I*=i((m-.5)*r(v/C)):I*=o(k/C,m-.5),I*=o(b*k/A,v),I*=t(A/f),y&&(y[1]=I*o(E,m))):(I=u(I)+S+w+(u(A)-1)/2,y&&(y[1]=i(I+m*u(E))),I=i(I))):I=o(b,v),I<a?g:(L=p(v,m,b,I),d.initialValue=g,e(L,d))}return zl=h,zl}var Jl,bb;function n9(){if(bb)return Jl;bb=1;var n=ue(),e=Vr(),r=xn(),t=_n(),i=Cp(),o=ho(),u=_e(),a=Me(),c=qe(),s=kr(),l=dr(),f=Lr(),d=Ar(),p=U7(),h=Tp(),v=pr(),m=CI(),b=MI(),g=Pp(),_=OI(),y=jI(),E=GI(),I=VI(),A=1/v;function C(k,S,w,$,L,R,T,N){var B,O,H,F,Q,W,K,re,G,x,Y,j;if(j=1-k,K=N,re=N+T,R[re]=-1,n(k)||k<0||k>1)return R[K]=NaN,R[re]=NaN,R;if($){if(S<0||w<0)return R[K]=NaN,R[re]=NaN,R;if(S===0){if(w===0)return R[K]=NaN,R[re]=NaN,R;if(w>0)return R[K]=L?0:1,R}else if(w===0&&S>0)return R[K]=L?1:0,R}else if(S<=0||w<=0)return R[K]=NaN,R[re]=NaN,R;return k===0?(S===1?R[re]=1:R[re]=S<1?f/2:d*2,L?(R[K]=$?1:o(S,w),R):(R[K]=0,R)):k===1?(w===1?R[re]=1:R[re]=w<1?f/2:d*2,L?R[K]=0:R[K]=$?1:o(S,w),R):S===.5&&w===.5?(R[re]=A*u(j*k),Y=i(u(L?j:k)),Y/=h,$||(Y*=v),R[K]=Y,R):(S===1&&(W=w,w=S,S=W,W=j,j=k,k=W,L=!L),w===1?S===1?(R[K]=L?j:k,R[re]=1,R):(R[re]=S*c(k,S-1),j<.5?Y=L?-e(S*t(-j)):a(S*t(-j)):Y=L?-(c(k,S)-1):c(k,S),$||(Y/=S),R[K]=Y,R):(l(S,w)<=1?(k>.5&&(W=w,w=S,S=W,W=j,j=k,k=W,L=!L),s(S,w)<=1?S>=l(.2,w)||c(k,S)<=.9?L?(H=-($?1:o(S,w)),L=!1,H=-I(S,w,k,H,$,R,j)):H=I(S,w,k,0,$,R,j):(W=w,w=S,S=W,W=j,j=k,k=W,L=!L,j>=.3?L?(H=-($?1:o(S,w)),L=!1,H=-I(S,w,k,H,$,R,j)):H=I(S,w,k,0,$,R,j):($?O=1:O=b(S+w,S,20),H=E(S,w,k,j,20,$,R),L?(H-=$?1:o(S,w),L=!1,H=-m(S+20,w,k,j,H,O,$)):H=m(S+20,w,k,j,H,O,$))):w<=1||k<.1&&c(w*k,S)<=.7?L?(H=-($?1:o(S,w)),L=!1,H=-I(S,w,k,H,$,R,j)):H=I(S,w,k,0,$,R,j):(W=w,w=S,S=W,W=j,j=k,k=W,L=!L,j>=.3?L?(H=-($?1:o(S,w)),L=!1,H=-I(S,w,k,H,$,R,j)):H=I(S,w,k,0,$,R,j):S>=15?L?(H=-($?1:o(S,w)),L=!1,H=-m(S,w,k,j,H,1,$)):H=m(S,w,k,j,0,1,$):($?O=1:O=b(S+w,S,20),H=E(S,w,k,j,20,$,R),L?(H-=$?1:o(S,w),L=!1,H=-m(S+20,w,k,j,H,O,$)):H=m(S+20,w,k,j,H,O,$)))):(S<w?B=S-(S+w)*k:B=(S+w)*j-w,B<0&&(W=w,w=S,S=W,W=j,j=k,k=W,L=!L),w<40?r(S)===S&&r(w)===w&&S<p-100?(G=S-1,x=w+G,H=y(x,G,k,j),$||(H*=o(S,w))):w*k<=.7?L?(H=-($?1:o(S,w)),L=!1,H=-I(S,w,k,H,$,R,j)):H=I(S,w,k,0,$,R,j):S>15?(x=r(w),x===w&&(x-=1),F=w-x,$?O=1:O=b(S+F,F,x),H=E(F,S,j,k,x,$),H=m(S,F,k,j,H,1,$),H/=O):$?(x=r(w),F=w-x,F<=0&&(x-=1,F+=1),H=E(F,S,j,k,x,$),H+=E(S,F,k,j,20,$),L&&(H-=1),H=m(S+20,F,k,j,H,1,$),L&&(H=-H,L=!1)):H=_(S,w,k,j,$,R):H=_(S,w,k,j,$,R)),R[re]<0&&(R[re]=g(S,w,k,j,!0)),Q=j*k,R[re]!==0&&(f*Q<R[re]?R[re]=f/2:R[re]/=Q),R[K]=L?($?1:o(S,w))-H:H,R))}return Jl=C,Jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ql,gb;function XI(){if(gb)return Ql;gb=1;var n=n9();function e(r,t,i,o,u){return n(r,t,i,o,u,[0,0],1,0)}return Ql=e,Ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zl,_b;function r9(){if(_b)return Zl;_b=1;var n=en(),e=XI(),r=n9();return n(e,"assign",r),Zl=e,Zl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ef,yb;function YI(){if(yb)return ef;yb=1;var n=r9().assign;function e(r,t,i,o,u){var a=[0,0];return o=o!==!1,u=u===!0,n(r,t,i,o,u,a,1,0),a[0]}return ef=e,ef}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nf,Eb;function Gt(){if(Eb)return nf;Eb=1;var n=YI();return nf=n,nf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rf,wb;function KI(){if(wb)return rf;wb=1;var n=Gt(),e=ue();function r(t,i,o){return e(t)||e(i)||e(o)||i<=0||o<=0?NaN:t<=0?0:t>=1?1:n(t,i,o)}return rf=r,rf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tf,$b;function zI(){if($b)return tf;$b=1;function n(e){return r;function r(){return e}}return tf=n,tf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var of,Sb;function yn(){if(Sb)return of;Sb=1;var n=zI();return of=n,of}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uf,Ab;function JI(){if(Ab)return uf;Ab=1;var n=yn(),e=Gt(),r=ue();function t(i,o){if(r(i)||r(o)||i<=0||o<=0)return n(NaN);return u;function u(a){return r(a)?NaN:a<=0?0:a>=1?1:e(a,i,o)}}return uf=t,uf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var af,kb;function QI(){if(kb)return af;kb=1;var n=en(),e=KI(),r=JI();return n(e,"factory",r),af=e,af}var ZI=QI();const eR=Hn(ZI);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sf,Lb;function t9(){if(Lb)return sf;Lb=1;var n=.9189385332046728;return sf=n,sf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var cf,Ib;function nR(){if(Ib)return cf;Ib=1;var n=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],e=n.length;function r(t){var i,o,u,a,c;if(t<-1.1||t>1.1)return NaN;for(u=0,a=0,i=2*t,c=0;c<e;c++)o=u,u=a,a=i*u-o+n[c];return(a-o)*.5}return cf=r,cf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var lf,Rb;function rR(){if(Rb)return lf;Rb=1;var n=qe(),e=nR(),r=9490626562425156e-8,t=3745194030963158e291;function i(o){return o<10?NaN:o>=t?0:o<r?e(2*n(10/o,2)-1)/o:1/(o*12)}return lf=i,lf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ff,Cb;function tR(){if(Cb)return ff;Cb=1;var n=Jr(),e=_n(),r=Un(),t=kr(),i=dr(),o=Ee(),u=t9(),a=nn(),c=Ce(),s=rR();function l(f,d){var p,h,v;return h=i(f,d),v=t(f,d),h<0?NaN:h===0?c:v===c?a:h>=10?(p=s(h)+s(v)-s(h+v),-.5*o(v)+u+p+(h-.5)*o(h/(h+v))+v*e(-h/(h+v))):v>=10?(p=s(v)-s(h+v),n(h)+p+h-h*o(h+v)+(v-.5)*e(-h/(h+v))):o(r(h)*(r(v)/r(h+v)))}return ff=l,ff}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var df,Mb;function i9(){if(Mb)return df;Mb=1;var n=tR();return df=n,df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pf,qb;function iR(){if(qb)return pf;qb=1;var n=i9(),e=ue(),r=_n(),t=Me(),i=Ee(),o=Ce();function u(a,c,s){var l;return e(a)||e(c)||e(s)||c<=0||s<=0?NaN:a<0||a>1?0:a===0?c<1?o:c>1?0:s:a===1?s<1?o:s>1?0:c:(l=(c-1)*i(a),l+=(s-1)*r(-a),l-=n(c,s),t(l))}return pf=u,pf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hf,Nb;function oR(){if(Nb)return hf;Nb=1;var n=yn(),e=i9(),r=ue(),t=_n(),i=Me(),o=Ee(),u=Ce();function a(c,s){var l;if(r(c)||r(s)||c<=0||s<=0)return n(NaN);return l=e(c,s),f;function f(d){var p;return r(d)?NaN:d<0||d>1?0:d===0?c<1?u:c>1?0:s:d===1?s<1?u:s>1?0:c:(p=-l,p+=(c-1)*o(d),p+=(s-1)*t(-d),i(p))}}return hf=a,hf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vf,Fb;function uR(){if(Fb)return vf;Fb=1;var n=en(),e=iR(),r=oR();return n(e,"factory",r),vf=e,vf}var aR=uR();const sR=Hn(aR);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mf,Tb;function cR(){if(Tb)return mf;Tb=1;function n(e){var r,t,i;return e===0?-.0005087819496582806:(e<0?r=-e:r=e,r<=1?(t=-.0005087819496582806+e*(-.008368748197417368+e*(.03348066254097446+e*(-.012692614766297404+e*(-.03656379714117627+e*(.02198786811111689+e*(.008226878746769157+e*(-.005387729650712429+e*(0+e*0)))))))),i=1+e*(-.9700050433032906+e*(-1.5657455823417585+e*(1.5622155839842302+e*(.662328840472003+e*(-.7122890234154284+e*(-.05273963823400997+e*(.07952836873415717+e*(-.0023339375937419+e*.0008862163904564247))))))))):(e=1/e,t=0+e*(0+e*(-.005387729650712429+e*(.008226878746769157+e*(.02198786811111689+e*(-.03656379714117627+e*(-.012692614766297404+e*(.03348066254097446+e*(-.008368748197417368+e*-.0005087819496582806)))))))),i=.0008862163904564247+e*(-.0023339375937419+e*(.07952836873415717+e*(-.05273963823400997+e*(-.7122890234154284+e*(.662328840472003+e*(1.5622155839842302+e*(-1.5657455823417585+e*(-.9700050433032906+e*1))))))))),t/i)}return mf=n,mf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bf,Ob;function lR(){if(Ob)return bf;Ob=1;function n(e){var r,t,i;return e===0?-.20243350835593876:(e<0?r=-e:r=e,r<=1?(t=-.20243350835593876+e*(.10526468069939171+e*(8.3705032834312+e*(17.644729840837403+e*(-18.851064805871424+e*(-44.6382324441787+e*(17.445385985570866+e*(21.12946554483405+e*-3.6719225470772936))))))),i=1+e*(6.242641248542475+e*(3.971343795334387+e*(-28.66081804998+e*(-20.14326346804852+e*(48.560921310873994+e*(10.826866735546016+e*(-22.643693341313973+e*1.7211476576120028)))))))):(e=1/e,t=-3.6719225470772936+e*(21.12946554483405+e*(17.445385985570866+e*(-44.6382324441787+e*(-18.851064805871424+e*(17.644729840837403+e*(8.3705032834312+e*(.10526468069939171+e*-.20243350835593876))))))),i=1.7211476576120028+e*(-22.643693341313973+e*(10.826866735546016+e*(48.560921310873994+e*(-20.14326346804852+e*(-28.66081804998+e*(3.971343795334387+e*(6.242641248542475+e*1)))))))),t/i)}return bf=n,bf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gf,Db;function fR(){if(Db)return gf;Db=1;function n(e){var r,t,i;return e===0?-.1311027816799519:(e<0?r=-e:r=e,r<=1?(t=-.1311027816799519+e*(-.16379404719331705+e*(.11703015634199525+e*(.38707973897260434+e*(.3377855389120359+e*(.14286953440815717+e*(.029015791000532906+e*(.0021455899538880526+e*(-6794655751811263e-22+e*(28522533178221704e-24+e*-681149956853777e-24))))))))),i=1+e*(3.4662540724256723+e*(5.381683457070069+e*(4.778465929458438+e*(2.5930192162362027+e*(.848854343457902+e*(.15226433829533179+e*(.011059242293464892+e*(0+e*(0+e*0)))))))))):(e=1/e,t=-681149956853777e-24+e*(28522533178221704e-24+e*(-6794655751811263e-22+e*(.0021455899538880526+e*(.029015791000532906+e*(.14286953440815717+e*(.3377855389120359+e*(.38707973897260434+e*(.11703015634199525+e*(-.16379404719331705+e*-.1311027816799519))))))))),i=0+e*(0+e*(0+e*(.011059242293464892+e*(.15226433829533179+e*(.848854343457902+e*(2.5930192162362027+e*(4.778465929458438+e*(5.381683457070069+e*(3.4662540724256723+e*1)))))))))),t/i)}return gf=n,gf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _f,Pb;function dR(){if(Pb)return _f;Pb=1;function n(e){var r,t,i;return e===0?-.0350353787183178:(e<0?r=-e:r=e,r<=1?(t=-.0350353787183178+e*(-.0022242652921344794+e*(.018557330651423107+e*(.009508047013259196+e*(.0018712349281955923+e*(.00015754461742496055+e*(460469890584318e-20+e*(-2304047769118826e-25+e*26633922742578204e-28))))))),i=1+e*(1.3653349817554064+e*(.7620591645536234+e*(.22009110576413124+e*(.03415891436709477+e*(.00263861676657016+e*(7646752923027944e-20+e*(0+e*0)))))))):(e=1/e,t=26633922742578204e-28+e*(-2304047769118826e-25+e*(460469890584318e-20+e*(.00015754461742496055+e*(.0018712349281955923+e*(.009508047013259196+e*(.018557330651423107+e*(-.0022242652921344794+e*-.0350353787183178))))))),i=0+e*(0+e*(7646752923027944e-20+e*(.00263861676657016+e*(.03415891436709477+e*(.22009110576413124+e*(.7620591645536234+e*(1.3653349817554064+e*1)))))))),t/i)}return _f=n,_f}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yf,Hb;function pR(){if(Hb)return yf;Hb=1;function n(e){var r,t,i;return e===0?-.016743100507663373:(e<0?r=-e:r=e,r<=1?(t=-.016743100507663373+e*(-.0011295143874558028+e*(.001056288621524929+e*(.00020938631748758808+e*(14962478375834237e-21+e*(44969678992770644e-23+e*(4625961635228786e-24+e*(-2811287356288318e-29+e*9905570997331033e-32))))))),i=1+e*(.5914293448864175+e*(.1381518657490833+e*(.016074608709367652+e*(.0009640118070051656+e*(27533547476472603e-21+e*(282243172016108e-21+e*(0+e*0)))))))):(e=1/e,t=9905570997331033e-32+e*(-2811287356288318e-29+e*(4625961635228786e-24+e*(44969678992770644e-23+e*(14962478375834237e-21+e*(.00020938631748758808+e*(.001056288621524929+e*(-.0011295143874558028+e*-.016743100507663373))))))),i=0+e*(0+e*(282243172016108e-21+e*(27533547476472603e-21+e*(.0009640118070051656+e*(.016074608709367652+e*(.1381518657490833+e*(.5914293448864175+e*1)))))))),t/i)}return yf=n,yf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ef,xb;function hR(){if(xb)return Ef;xb=1;var n=ue(),e=_e(),r=Ee(),t=Ce(),i=nn(),o=cR(),u=lR(),a=fR(),c=dR(),s=pR(),l=.08913147449493408,f=2.249481201171875,d=.807220458984375,p=.9399557113647461,h=.9836282730102539;function v(m){var b,g,_,y,E;return n(m)?NaN:m===0?t:m===2?i:m===1?0:m>2||m<0?NaN:(m>1?(b=-1,_=2-m):(b=1,_=m),m=1-_,m<=.5?(y=m*(m+10),E=o(m),b*(y*l+y*E)):_>=.25?(y=e(-2*r(_)),_-=.25,E=u(_),b*(y/(f+E))):(_=e(-r(_)),_<3?(g=_-1.125,E=a(g),b*(d*_+E*_)):_<6?(g=_-3,E=c(g),b*(p*_+E*_)):(g=_-6,E=s(g),b*(h*_+E*_))))}return Ef=v,Ef}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wf,Bb;function Vt(){if(Bb)return wf;Bb=1;var n=hR();return wf=n,wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $f,Ub;function vR(){if(Ub)return $f;Ub=1;var n=ue(),e=Cp(),r=_e(),t=T7(),i=6123233995736766e-32;function o(u){var a;return n(u)?NaN:u<-1||u>1?NaN:u>.5?2*e(r(.5-.5*u)):(a=t-e(u),a+=i,a+=t,a)}return $f=o,$f}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sf,Wb;function mR(){if(Wb)return Sf;Wb=1;var n=vR();return Sf=n,Sf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Af,jb;function Hp(){if(jb)return Af;jb=1;var n=1.4142135623730951;return Af=n,Af}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kf,Gb;function bR(){if(Gb)return kf;Gb=1;function n(e){return e===0?.16666666666666666:.16666666666666666+e*.16666666666666666}return kf=n,kf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lf,Vb;function gR(){if(Vb)return Lf;Vb=1;function n(e){return e===0?.058333333333333334:.058333333333333334+e*(.06666666666666667+e*.008333333333333333)}return Lf=n,Lf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var If,Xb;function _R(){if(Xb)return If;Xb=1;function n(e){return e===0?.0251984126984127:.0251984126984127+e*(.026785714285714284+e*(.0017857142857142857+e*.0001984126984126984))}return If=n,If}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rf,Yb;function yR(){if(Yb)return Rf;Yb=1;function n(e){return e===0?.012039792768959435:.012039792768959435+e*(.010559964726631394+e*(-.0011078042328042327+e*(.0003747795414462081+e*27557319223985893e-22)))}return Rf=n,Rf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cf,Kb;function ER(){if(Kb)return Cf;Kb=1;function n(e){return e===0?.003837005972422639:.003837005972422639+e*(.00610392115600449+e*(-.0016095979637646305+e*(.0005945867404200738+e*(-6270542728876062e-20+e*2505210838544172e-23))))}return Cf=n,Cf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mf,zb;function wR(){if(zb)return Mf;zb=1;function n(e){return e===0?.0032177478835464946:.0032177478835464946+e*(.0010898206731540065+e*(-.0012579159844784845+e*(.0006908420797309686+e*(-.00016376804137220805+e*(154012654012654e-19+e*16059043836821613e-26)))))}return Mf=n,Mf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qf,Jb;function $R(){if(Jb)return qf;Jb=1;function n(e){return e===0?.001743826229834001:.001743826229834001+e*(3353097688001788e-20+e*(-.0007624513544032393+e*(.0006451304695145635+e*(-.000249472580470431+e*(49255746366361444e-21+e*(-39851014346715405e-22+e*7647163731819816e-28))))))}return qf=n,qf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nf,Qb;function SR(){if(Qb)return Nf;Qb=1;function n(e){return e===0?.0009647274732138864:.0009647274732138864+e*(-.0003110108632631878+e*(-.00036307660358786886+e*(.0005140660578834113+e*(-.00029133414466938067+e*(9086710793521991e-20+e*(-15303004486655377e-21+e*(10914179173496788e-22+e*28114572543455206e-31)))))))}return Nf=n,Nf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ff,Zb;function AR(){if(Zb)return Ff;Zb=1;function n(e){return e===0?.0005422926281312969:.0005422926281312969+e*(-.0003694266780000966+e*(-.00010230378073700413+e*(.00035764655430568635+e*(-.00028690924218514614+e*(.00012645437628698076+e*(-33202652391372056e-21+e*(4890304529197534e-21+e*(-3123956959982987e-22+e*822063524662433e-32))))))))}return Ff=n,Ff}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Tf,e5;function kR(){if(e5)return Tf;e5=1;var n=Op(),e=vr(),r=_e(),t=pr(),i=bR(),o=gR(),u=_R(),a=yR(),c=ER(),s=wR(),l=$R(),f=SR(),d=AR(),p=0,h=[1,0,0,0,0,0,0,0,0,0];function v(m,b){var g,_;return _=n(m/2,.5)*r(m*t)*(b-.5),g=1/m,h[1]=i(g),h[2]=o(g),h[3]=u(g),h[4]=a(g),h[5]=c(g),h[6]=s(g),h[7]=l(g),h[8]=f(g),h[9]=d(g),p+_*e(h,_*_)}return Tf=v,Tf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Of,n5;function LR(){if(n5)return Of;n5=1;var n=Op(),e=vr(),r=_e(),t=qe(),i=pr(),o=[0,0,0,0,0,0,0];function u(a,c){var s,l,f,d,p,h,v,m;return m=n(a/2,.5)*r(a*i)*c,d=a+2,p=a+4,h=a+6,o[0]=1,o[1]=-(a+1)/(2*d),d*=a+2,o[2]=-a*(a+1)*(a+3)/(8*d*p),d*=a+2,o[3]=-a*(a+1)*(a+5)*((3*a+7)*a-2)/(48*d*p*h),d*=a+2,p*=a+4,o[4]=-a*(a+1)*(a+7)*(((((15*a+154)*a+465)*a+286)*a-336)*a+64)/(384*d*p*h*(a+8)),d*=a+2,o[5]=-a*(a+1)*(a+3)*(a+9)*((((((35*a+452)*a+1573)*a+600)*a-2020)*a+928)*a-128)/(1280*d*p*h*(a+8)*(a+10)),d*=a+2,p*=a+4,h*=a+6,o[6]=-a*(a+1)*(a+11)*(((((((((((945*a+31506)*a+425858)*a+2980236)*a+11266745)*a+20675018)*a+7747124)*a-22574632)*a-8565600)*a+18108416)*a-7099392)*a+884736)/(46080*d*p*h*(a+8)*(a+10)*(a+12)),v=r(a),f=t(v*m,1/a),l=f*f,s=e(o,l),s*=v,s/=f,-s}return Of=u,Of}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Df,r5;function IR(){if(r5)return Df;r5=1;var n=Vt(),e=Vr(),r=_e(),t=qe(),i=Tp(),o=Hp();function u(a,c){var s,l,f,d,p,h,v;return a>1e20?-n(2*c)*o:(s=1/(a-.5),l=48/(s*s),f=((20700*s/l-98)*s-16)*s+96.36,d=((94.5/(l+f)-3)/l+1)*r(s*i)*a,v=t(d*2*c,2/a),v>.05+s?(h=-n(2*c)*o,v=h*h,a<5&&(f+=.3*(a-4.5)*(h+.6)),f+=(((.05*d*h-5)*h-7)*h-2)*h+l,v=(((((.4*v+6.3)*v+36)*v+94.5)/f-v-3)/l+1)*h,v=e(s*v*v)):v=((1/(((a+6)/(a*v)-.089*d-.822)*(a+2)*3)+.5/(a+4))*v-1)*(a+1)/(a+2)+1/v,p=r(a*v),-p)}return Df=u,Df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Pf,t5;function RR(){if(t5)return Pf;t5=1;var n=Vt(),e=xn(),r=Yr(),t=G7(),i=mR(),o=_e(),u=ye(),a=Dp(),c=qe(),s=Ut(),l=Hp(),f=pr(),d=kR(),p=LR(),h=IR(),v=268435456,m=1/3,b=106/3,g=.8549879733383485;function _(y,E,I){var A,C,k,S,w,$,L,R,T,N,B,O,H,F,Q,W;if(w=0,E>I?(L=I,I=E,E=L,S=!0):S=!1,e(y)===y&&y<20)switch(C=r(1,b),e(y)){case 1:E===.5?w=0:w=-a(f*E)/s(f*E);break;case 2:w=(2*E-1)/o(2*E*I);break;case 4:$=4*E*I,k=o($),H=4*a(i(k)/3)/k,F=o(H-4),w=E-.5<0?-F:F;break;case 6:if(E<1e-150)return(S?-1:1)*h(y,E);Q=4*(E-E*E),W=c(Q,m),O=6*(1+g*(1/W-1));do T=O*O,N=T*T,B=O*N,R=O,O=2*(8*Q*B-270*T+2187)/(5*(4*Q*N-216*O-243));while(u((O-R)/O)>C);O=o(O-y),w=E-.5<0?-O:O;break;default:y>v?w=n(2*E)*l:y<3?(A=.2742-y*.0242143,E>A?w=d(y,E):w=p(y,E)):(A=r(1,t(y/-.654)),E>A?w=h(y,E):w=p(y,E))}else y>v?w=-n(2*E)*l:y<3?(A=.2742-y*.0242143,E>A?w=d(y,E):w=p(y,E)):(A=r(1,t(y/-.654)),E>A?w=h(y,E):w=p(y,E));return S?-w:w}return Pf=_,Pf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Hf,i5;function CR(){if(i5)return Hf;i5=1;var n=RR();function e(r,t,i){var o,u,a,c;return u=t/2,a=1-u,o=r*2,c=n(o,u,a),i&&(i.value=c*c/(o+c*c)),o/(o+c*c)}return Hf=e,Hf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xf,o5;function MR(){if(o5)return xf;o5=1;var n=vr(),e=Vt(),r=_e(),t=Me(),i=Hp(),o=[0,0,0,0,0,0,0],u=[0,0,0,0];function a(c,s,l){var f,d,p,h,v,m,b;return f=e(2*l),f/=-r(c/2),u[0]=f,m=s-c,h=m*m,v=h*m,o[0]=-m*i/2,o[1]=(1-2*m)/8,o[2]=-(m*i/48),o[3]=-1/192,o[4]=-m*i/3840,o[5]=0,o[6]=0,u[1]=n(o,f),o[0]=m*i*(3*m-2)/12,o[1]=(20*h-12*m+1)/128,o[2]=m*i*(20*m-1)/960,o[3]=(16*h+30*m-15)/4608,o[4]=m*i*(21*m+32)/53760,o[5]=(-(32*h)+63)/368640,o[6]=-m*i*(120*m+17)/25804480,u[2]=n(o,f),o[0]=m*i*(-75*h+80*m-16)/480,o[1]=(-1080*v+868*h-90*m-45)/9216,o[2]=m*i*(-1190*h+84*m+373)/53760,o[3]=(-2240*v-2508*h+2100*m-165)/368640,o[4]=0,o[5]=0,o[6]=0,u[3]=n(o,f),p=n(u,1/c),d=p*p,b=-t(-d/2),d===0?.5:(1+p*r((1+b)/d))/2}return xf=a,xf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Bf,u5;function o9(){if(u5)return Bf;u5=1;var n=Ee(),e=Lr(),r=e/4;function t(i,o){return u;function u(a){var c,s,l;return l=1-a,l===0?[-r,-r]:a===0?[-r,-r]:(s=n(a)+o*n(l)+i,c=1/a-o/l,[s,c])}}return Bf=t,Bf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uf,a5;function qR(){if(a5)return Uf;a5=1;var n=ue();function e(r){return r===0||n(r)?r:r<0?-1:1}return Uf=e,Uf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wf,s5;function Eo(){if(s5)return Wf;s5=1;var n=qR();return Wf=n,Wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var jf,c5;function u9(){if(c5)return jf;c5=1;var n=Eo(),e=ye(),r=Yr(),t=Lr();function i(o,u,a,c,s,l){var f,d,p,h,v,m,b,g,_,y;_=0,f=0,v=u,h=r(1,1-s),b=t,d=t,p=t,m=l;do{if(f=_,p=d,d=b,g=o(v),_=g[0],y=g[1],m-=1,_===0)break;if(y===0?(f===0&&(v===a?u=c:u=a,f=o(u),b=u-v),n(f)*n(_)<0?b<0?b=(v-a)/2:b=(v-c)/2:b<0?b=(v-c)/2:b=(v-a)/2):b=_/y,e(b*2)>e(p)&&(b=b>0?(v-a)/2:(v-c)/2),u=v,v-=b,v<=a){if(b=.5*(u-a),v=u-b,v===a||v===c)break}else if(v>=c&&(b=.5*(u-c),v=u-b,v===a||v===c))break;b>0?c=u:a=u}while(m&&e(v*h)<e(b));return v}return jf=i,jf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gf,l5;function NR(){if(l5)return Gf;l5=1;function n(e){return e===0?-1:-1+e*(-5+e*5)}return Gf=n,Gf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vf,f5;function FR(){if(f5)return Vf;f5=1;function n(e){return e===0?1:1+e*(21+e*(-69+e*46))}return Vf=n,Vf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xf,d5;function TR(){if(d5)return Xf;d5=1;function n(e){return e===0?7:7+e*(-2+e*(33+e*(-62+e*31)))}return Xf=n,Xf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yf,p5;function OR(){if(p5)return Yf;p5=1;function n(e){return e===0?25:25+e*(-52+e*(-17+e*(88+e*(-115+e*46))))}return Yf=n,Yf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kf,h5;function DR(){if(h5)return Kf;h5=1;function n(e){return e===0?7:7+e*(12+e*(-78+e*52))}return Kf=n,Kf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zf,v5;function PR(){if(v5)return zf;v5=1;function n(e){return e===0?-7:-7+e*(2+e*(183+e*(-370+e*185)))}return zf=n,zf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jf,m5;function HR(){if(m5)return Jf;m5=1;function n(e){return e===0?-533:-533+e*(776+e*(-1835+e*(10240+e*(-13525+e*5410))))}return Jf=n,Jf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qf,b5;function xR(){if(b5)return Qf;b5=1;function n(e){return e===0?-1579:-1579+e*(3747+e*(-3372+e*(-15821+e*(45588+e*(-45213+e*15071)))))}return Qf=n,Qf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zf,g5;function BR(){if(g5)return Zf;g5=1;function n(e){return e===0?449:449+e*(-1259+e*(-769+e*(6686+e*(-9260+e*3704))))}return Zf=n,Zf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ed,_5;function UR(){if(_5)return ed;_5=1;function n(e){return e===0?63149:63149+e*(-151557+e*(140052+e*(-727469+e*(2239932+e*(-2251437+e*750479)))))}return ed=n,ed}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nd,y5;function WR(){if(y5)return nd;y5=1;function n(e){return e===0?29233:29233+e*(-78755+e*(105222+e*(146879+e*(-1602610+e*(3195183+e*(-2554139+e*729754))))))}return nd=n,nd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rd,E5;function jR(){if(E5)return rd;E5=1;function n(e){return e===0?1:1+e*(-13+e*13)}return rd=n,rd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var td,w5;function GR(){if(w5)return td;w5=1;function n(e){return e===0?1:1+e*(21+e*(-69+e*46))}return td=n,td}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var id,$5;function VR(){if($5)return id;$5=1;var n=vr(),e=Vt(),r=ye(),t=Me(),i=Ee(),o=_e(),u=Ut(),a=Dp(),c=o9(),s=u9(),l=NR(),f=FR(),d=TR(),p=OR(),h=DR(),v=PR(),m=HR(),b=xR(),g=BR(),_=UR(),y=WR(),E=jR(),I=GR(),A=[0,0,0,0,0,0],C=[0,0,0,0];function k(S,w,$){var L,R,T,N,B,O,H,F,Q,W,K,re,G,x,Y,j,Ae,fe,Z,oe;return B=e(2*S)/-o(w/2),fe=u($),Ae=a($),C[0]=B,Y=fe*fe,j=Ae*Ae,G=fe*Ae,re=G*G,K=re*G,W=re*re,Q=re*K,F=K*K,H=W*K,A[0]=(2*Y-1)/(3*G),A[1]=-l(Y)/(36*re),A[2]=f(Y)/(1620*K),A[3]=d(Y)/(6480*W),A[4]=p(Y)/(90720*Q),A[5]=0,C[1]=n(A,B),A[0]=-h(Y)/(405*K),A[1]=v(Y)/(2592*W),A[2]=-m(Y)/(204120*Q),A[3]=-b(Y)/(2099520*F),A[4]=0,A[5]=0,C[2]=n(A,B),A[0]=g(Y)/(102060*Q),A[1]=-_(Y)/(20995200*F),A[2]=y(Y)/(36741600*H),A[3]=0,A[4]=0,A[5]=0,C[3]=n(A,B),O=n(C,1/w),T=Ae/fe,T*=T,x=-(O*O)/(2*Y)+i(Y)+j*i(j)/Y,r(O)<.7?(A[0]=Y,A[1]=G,A[2]=(1-2*Y)/3,A[3]=E(Y)/(36*G),A[4]=I(Y)/(270*re),A[5]=0,oe=n(A,O)):(Z=t(x),A[0]=Z,A[1]=T,A[2]=0,A[3]=3*T*(3*T+1)/6,A[4]=4*T*(4*T+1)*(4*T+2)/24,A[5]=5*T*(5*T+1)*(5*T+2)*(5*T+3)/120,oe=n(A,Z),(oe-Y)*O<0&&(oe=1-oe)),O<0?(R=0,L=Y):(R=Y,L=1),(oe<R||oe>L)&&(oe=(R+L)/2),N=c(-x,T),oe=s(N,oe,R,L,32,100),oe}return id=k,id}var li={exports:{}},fi={exports:{}},od,S5;function XR(){if(S5)return od;S5=1;var n=1e3,e=n*60,r=e*60,t=r*24,i=t*365.25;od=function(s,l){l=l||{};var f=typeof s;if(f==="string"&&s.length>0)return o(s);if(f==="number"&&isNaN(s)===!1)return l.long?a(s):u(s);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(s))};function o(s){if(s=String(s),!(s.length>100)){var l=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(s);if(l){var f=parseFloat(l[1]),d=(l[2]||"ms").toLowerCase();switch(d){case"years":case"year":case"yrs":case"yr":case"y":return f*i;case"days":case"day":case"d":return f*t;case"hours":case"hour":case"hrs":case"hr":case"h":return f*r;case"minutes":case"minute":case"mins":case"min":case"m":return f*e;case"seconds":case"second":case"secs":case"sec":case"s":return f*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return f;default:return}}}}function u(s){return s>=t?Math.round(s/t)+"d":s>=r?Math.round(s/r)+"h":s>=e?Math.round(s/e)+"m":s>=n?Math.round(s/n)+"s":s+"ms"}function a(s){return c(s,t,"day")||c(s,r,"hour")||c(s,e,"minute")||c(s,n,"second")||s+" ms"}function c(s,l,f){if(!(s<l))return s<l*1.5?Math.floor(s/l)+" "+f:Math.ceil(s/l)+" "+f+"s"}return od}var A5;function YR(){return A5||(A5=1,(function(n,e){e=n.exports=i.debug=i.default=i,e.coerce=c,e.disable=u,e.enable=o,e.enabled=a,e.humanize=XR(),e.names=[],e.skips=[],e.formatters={};var r;function t(s){var l=0,f;for(f in s)l=(l<<5)-l+s.charCodeAt(f),l|=0;return e.colors[Math.abs(l)%e.colors.length]}function i(s){function l(){if(l.enabled){var f=l,d=+new Date,p=d-(r||d);f.diff=p,f.prev=r,f.curr=d,r=d;for(var h=new Array(arguments.length),v=0;v<h.length;v++)h[v]=arguments[v];h[0]=e.coerce(h[0]),typeof h[0]!="string"&&h.unshift("%O");var m=0;h[0]=h[0].replace(/%([a-zA-Z%])/g,function(g,_){if(g==="%%")return g;m++;var y=e.formatters[_];if(typeof y=="function"){var E=h[m];g=y.call(f,E),h.splice(m,1),m--}return g}),e.formatArgs.call(f,h);var b=l.log||e.log||console.log.bind(console);b.apply(f,h)}}return l.namespace=s,l.enabled=e.enabled(s),l.useColors=e.useColors(),l.color=t(s),typeof e.init=="function"&&e.init(l),l}function o(s){e.save(s),e.names=[],e.skips=[];for(var l=(typeof s=="string"?s:"").split(/[\s,]+/),f=l.length,d=0;d<f;d++)l[d]&&(s=l[d].replace(/\*/g,".*?"),s[0]==="-"?e.skips.push(new RegExp("^"+s.substr(1)+"$")):e.names.push(new RegExp("^"+s+"$")))}function u(){e.enable("")}function a(s){var l,f;for(l=0,f=e.skips.length;l<f;l++)if(e.skips[l].test(s))return!1;for(l=0,f=e.names.length;l<f;l++)if(e.names[l].test(s))return!0;return!1}function c(s){return s instanceof Error?s.stack||s.message:s}})(fi,fi.exports)),fi.exports}var k5;function a9(){return k5||(k5=1,(function(n,e){var r={};e=n.exports=YR(),e.log=o,e.formatArgs=i,e.save=u,e.load=a,e.useColors=t,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:c(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function t(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(s){try{return JSON.stringify(s)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}};function i(s){var l=this.useColors;if(s[0]=(l?"%c":"")+this.namespace+(l?" %c":" ")+s[0]+(l?"%c ":" ")+"+"+e.humanize(this.diff),!!l){var f="color: "+this.color;s.splice(1,0,f,"color: inherit");var d=0,p=0;s[0].replace(/%[a-zA-Z%]/g,function(h){h!=="%%"&&(d++,h==="%c"&&(p=d))}),s.splice(p,0,f)}}function o(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function u(s){try{s==null?e.storage.removeItem("debug"):e.storage.debug=s}catch{}}function a(){var s;try{s=e.storage.debug}catch{}return!s&&typeof process<"u"&&"env"in process&&(s=r.DEBUG),s}e.enable(a());function c(){try{return window.localStorage}catch{}}})(li,li.exports)),li.exports}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ud,L5;function wo(){if(L5)return ud;L5=1;var n=34028234663852886e22;return ud=n,ud}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ad,I5;function KR(){if(I5)return ad;I5=1;var n=a9(),e=e9(),r=ye(),t=Me(),i=Ee(),o=wo(),u=n("gammaincinv:higher_newton");function a(c,s,l,f,d,p,h,v){var m,b,g,_,y,E,I,A,C,k,S,w,$,L;L=c,S=1,w=1,E=s*s,b=c;do{if(L=c,I=L*L,l===0){if(m=(1-s)*i(L)+L+p,m>i(o))return u("Warning: overflow problems in one or more steps of the computation. The initial approximation to the root is returned."),b;$=t(m)}else $=-h*L;v?(A=e(L,s,!0,!1),g=-$*(A-f)):(C=e(L,s,!0,!0),g=$*(C-d)),$=g,f>1e-120||w>1?(_=.5*(L-s+1)/L,y=(2*I-4*L*s+4*L+2*E-3*s+1)/I,y/=6,c=L+$*(1+$*(_+$*y))):c=L+$,S=r(L/c-1),w+=1,L=c,L<0&&(L=b,w=100)}while(S>2e-14&&w<35);return(S>2e-14||w>99)&&u("Warning: the number of iterations in the Newton method reached the upper limit N=35. The last value obtained for the root is given as output."),k=L||0,k}return ad=a,ad}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sd,R5;function zR(){if(R5)return sd;R5=1;function n(e){return e===0?0:0+e*(1+e*(1+e*(1.5+e*(2.6666666666666665+e*(5.208333333333333+e*10.8)))))}return sd=n,sd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cd,C5;function JR(){if(C5)return cd;C5=1;function n(e){return e===0?1:1+e*(1+e*(.3333333333333333+e*(.027777777777777776+e*(-.003703703703703704+e*(.0002314814814814815+e*5878894767783657e-20)))))}return cd=n,cd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ld,M5;function s9(){if(M5)return ld;M5=1;var n=ye(),e=Me(),r=Ee(),t=vr(),i=zR(),o=JR(),u=1e-8,a=.08333333333333333,c=.008333333333333333,s=[1,0,0,0,0,0];function l(f){var d,p,h,v,m,b,g,_,y;if(y=f*f*.5,f===0?m=0:f<-1?(_=e(-1-y),m=i(_)):f<1?(_=f,m=o(_)):(_=11+y,b=r(_),m=_+b,_=1/_,d=b*b,p=d*b,h=p*b,v=h*b,s[1]=(2-b)*.5,s[2]=(-9*b+6+2*d)/6,s[3]=-(3*p+36*b-22*d-12)*a,s[4]=(60+350*d-300*b-125*p+12*h)/60,s[5]=-(-120-274*h+900*b-1700*d+1125*p+20*v)*c,m+=b*_*t(s,_)),_=1,f>-3.5&&f<-.03||f>.03&&f<40){_=1,g=m;do m=g*(y+r(g))/(g-1),_=n(g/m-1),g=m;while(_>u)}return m}return ld=l,ld}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fd,q5;function QR(){if(q5)return fd;q5=1;var n=[1.9963790515900766,-.0017971032528832887,13129285796384672e-21,-2340875228178749e-22,72291210671127e-22,-3280997607821e-22,19875070901e-21,-1509214183e-21,1375340084e-22,-145728923e-22,17532367e-22,-2351465e-22,346551e-22,-55471e-22,9548e-22,-1748e-22,332e-22,-58e-22];function e(r,t){var i,o,u,a,c;o=0,u=0,i=t+t,c=r;do a=u,u=o,o=i*u-a+n[c],c-=1;while(c>=0);return(o-a)/2}return fd=e,fd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dd,N5;function ZR(){if(N5)return dd;N5=1;function n(e){return e===0?.025721014990011306:.025721014990011306+e*(.08247596616699963+e*(-.0025328157302663564+e*(.0006099292666946337+e*(-.00033543297638406+e*.000250505279903))))}return dd=n,dd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pd,F5;function eC(){if(F5)return pd;F5=1;function n(e){return e===0?.08333333333333333:.08333333333333333+e*(-.002777777777777778+e*(.0007936507936507937+e*-.0005952380952380953))}return pd=n,pd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hd,T5;function nC(){if(T5)return hd;T5=1;var n=Jr(),e=Ee(),r=t9(),t=yo(),i=wo(),o=QR(),u=ZR(),a=eC(),c=.30865217988013566;function s(l){var f;return l<t?i:l<1?n(l+1)-(l+.5)*e(l)+l-r:l<2?n(l)-(l-.5)*e(l)+l-r:l<3?n(l-1)-(l-.5)*e(l)+l-r+e(l-1):l<12?(f=18/(l*l)-1,o(17,f)/(12*l)):(f=1/(l*l),l<1e3?u(f)/(c+f)/l:a(f)/l)}return hd=s,hd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vd,O5;function rC(){if(O5)return vd;O5=1;var n=Me(),e=Un(),r=Ee(),t=wo(),i=vo(),o=nC();function u(a){return a>=3?n(o(a)):a>0?e(a)/(n(-a+(a-.5)*r(a))*i):t}return vd=u,vd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var md,D5;function tC(){if(D5)return md;D5=1;function n(e){var r,t,i;return e===0?-.3333333333438:(e<0?r=-e:r=e,r<=1?(t=-.3333333333438+e*(-.2070740359969+e*(-.05041806657154+e*(-.004923635739372+e*-4293658292782e-17))),i=1+e*(.7045554412463+e*(.2118190062224+e*(.03048648397436+e*.001605037988091)))):(e=1/e,t=-4293658292782e-17+e*(-.004923635739372+e*(-.05041806657154+e*(-.2070740359969+e*-.3333333333438))),i=.001605037988091+e*(.03048648397436+e*(.2118190062224+e*(.7045554412463+e*1)))),t/i)}return md=n,md}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bd,P5;function iC(){if(P5)return bd;P5=1;var n=ye(),e=Ee(),r=s9(),t=tC();function i(o){var u;return n(o)<1?t(o):(u=r(o),e(o/(u-1))/o)}return bd=i,bd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gd,H5;function oC(){if(H5)return gd;H5=1;function n(e){var r,t,i;return e===0?-.0172847633523:(e<0?r=-e:r=e,r<=1?(t=-.0172847633523+e*(-.0159372646475+e*(-.00464910887221+e*(-.00060683488776+e*-614830384279e-17))),i=1+e*(.764050615669+e*(.297143406325+e*(.0579490176079+e*.00574558524851)))):(e=1/e,t=-614830384279e-17+e*(-.00060683488776+e*(-.00464910887221+e*(-.0159372646475+e*-.0172847633523))),i=.00574558524851+e*(.0579490176079+e*(.297143406325+e*(.764050615669+e*1)))),t/i)}return gd=n,gd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _d,x5;function uC(){if(x5)return _d;x5=1;function n(e){var r,t,i;return e===0?-.0172839517431:(e<0?r=-e:r=e,r<=1?(t=-.0172839517431+e*(-.0146362417966+e*(-.00357406772616+e*(-.000391032032692+e*249634036069e-17))),i=1+e*(.690560400696+e*(.249962384741+e*(.0443843438769+e*.00424073217211)))):(e=1/e,t=249634036069e-17+e*(-.000391032032692+e*(-.00357406772616+e*(-.0146362417966+e*-.0172839517431))),i=.00424073217211+e*(.0443843438769+e*(.249962384741+e*(.690560400696+e*1)))),t/i)}return _d=n,_d}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yd,B5;function aC(){if(B5)return yd;B5=1;function n(e){var r,t,i;return e===0?.99994466948:(e<0?r=-e:r=e,r<=1?(t=.99994466948+e*(104.649839762+e*(857.204033806+e*(731.901559577+e*45.5174411671))),i=1+e*(104.526456943+e*(823.313447808+e*(3119.93802124+e*3970.03311219)))):(e=1/e,t=45.5174411671+e*(731.901559577+e*(857.204033806+e*(104.649839762+e*.99994466948))),i=3970.03311219+e*(3119.93802124+e*(823.313447808+e*(104.526456943+e*1)))),t/i)}return yd=n,yd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ed,U5;function sC(){if(U5)return Ed;U5=1;var n=Ee(),e=oC(),r=uC(),t=aC();function i(o){var u,a;return o<-5?(a=o*o,u=n(-o),(12-a-6*(u*u))/(12*a*o)):o<-2?e(o):o<2?r(o):o<1e3?(a=1/o,t(o)/(-12*o)):-1/(12*o)}return Ed=i,Ed}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wd,W5;function cC(){if(W5)return wd;W5=1;function n(e){var r,t,i;return e===0?.0495346498136:(e<0?r=-e:r=e,r<=1?(t=.0495346498136+e*(.0299521337141+e*(.00688296911516+e*(.000512634846317+e*-201411722031e-16))),i=1+e*(.759803615283+e*(.261547111595+e*(.0464854522477+e*.00403751193496)))):(e=1/e,t=-201411722031e-16+e*(.000512634846317+e*(.00688296911516+e*(.0299521337141+e*.0495346498136))),i=.00403751193496+e*(.0464854522477+e*(.261547111595+e*(.759803615283+e*1)))),t/i)}return wd=n,wd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $d,j5;function lC(){if(j5)return $d;j5=1;function n(e){var r,t,i;return e===0?.00452313583942:(e<0?r=-e:r=e,r<=1?(t=.00452313583942+e*(.00120744920113+e*(-789724156582e-16+e*(-504476066942e-16+e*-535770949796e-17))),i=1+e*(.912203410349+e*(.405368773071+e*(.0901638932349+e*.00948935714996)))):(e=1/e,t=-535770949796e-17+e*(-504476066942e-16+e*(-789724156582e-16+e*(.00120744920113+e*.00452313583942))),i=.00948935714996+e*(.0901638932349+e*(.405368773071+e*(.912203410349+e*1)))),t/i)}return $d=n,$d}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sd,G5;function fC(){if(G5)return Sd;G5=1;function n(e){var r,t,i;return e===0?.00439937562904:(e<0?r=-e:r=e,r<=1?(t=.00439937562904+e*(.000487225670639+e*(-.000128470657374+e*(529110969589e-17+e*15716677175e-17))),i=1+e*(.794435257415+e*(.333094721709+e*(.0703527806143+e*.00806110846078)))):(e=1/e,t=15716677175e-17+e*(529110969589e-17+e*(-.000128470657374+e*(.000487225670639+e*.00439937562904))),i=.00806110846078+e*(.0703527806143+e*(.333094721709+e*(.794435257415+e*1)))),t/i)}return Sd=n,Sd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ad,V5;function dC(){if(V5)return Ad;V5=1;function n(e){var r,t,i;return e===0?-.0011481191232:(e<0?r=-e:r=e,r<=1?(t=-.0011481191232+e*(-.112850923276+e*(1.51623048511+e*(-.218472031183+e*.0730002451555))),i=1+e*(14.2482206905+e*(69.7360396285+e*(218.938950816+e*277.067027185)))):(e=1/e,t=.0730002451555+e*(-.218472031183+e*(1.51623048511+e*(-.112850923276+e*-.0011481191232))),i=277.067027185+e*(218.938950816+e*(69.7360396285+e*(14.2482206905+e*1)))),t/i)}return Ad=n,Ad}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kd,X5;function pC(){if(X5)return kd;X5=1;function n(e){var r,t,i;return e===0?-.000145727889667:(e<0?r=-e:r=e,r<=1?(t=-.000145727889667+e*(-.290806748131+e*(-13.308504545+e*(199.722374056+e*-11.4311378756))),i=1+e*(139.612587808+e*(2189.01116348+e*(7115.24019009+e*45574.6081453)))):(e=1/e,t=-11.4311378756+e*(199.722374056+e*(-13.308504545+e*(-.290806748131+e*-.000145727889667))),i=45574.6081453+e*(7115.24019009+e*(2189.01116348+e*(139.612587808+e*1)))),t/i)}return kd=n,kd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ld,Y5;function hC(){if(Y5)return Ld;Y5=1;var n=Ee(),e=cC(),r=lC(),t=fC(),i=dC(),o=pC();function u(a){var c,s;return a<-8?(c=a*a,s=n(-a)/a,(-30+a*s*(6*c*s*s-12+c))/(12*a*c*c)):a<-4?e(a)/(a*a):a<-2?r(a):a<2?t(a):a<10?(c=1/a,i(c)/(a*a)):a<100?(c=1/a,o(c)/(a*a)):-n(a)/(12*a*a*a)}return Ld=u,Ld}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Id,K5;function vC(){if(K5)return Id;K5=1;var n=a9(),e=vr(),r=Jr(),t=Vt(),i=Un(),o=_e(),u=ye(),a=Me(),c=dr(),s=qe(),l=Ee(),f=vo(),d=wo(),p=go(),h=KR(),v=s9(),m=rC(),b=iC(),g=sC(),_=hC(),y=n("gammaincinv:compute"),E=.5,I=.3333333333333333,A=.25,C=.2,k=.16666666666666666,S=.08333333333333333,w=.041666666666666664,$=[0,0,0,0,0];function L(R,T,N){var B,O,H,F,Q,W,K,re,G,x,Y,j,Ae,fe,Z,oe,we,ge,Qn,un,be,En,Xe,wn,br,J,he,$n,ut,Gn,Zn,Rr,at,st,ti,Ye,Oe,Cr,Ke,Sn,fn,gr,Mr,qr;if(T<E?(F=!0,Q=T,gr=-1):(F=!1,Q=N,gr=1),Ke=0,u(R-1)<1e-4&&(Sn=0,F?T<.001?(Rr=T*T,$n=Rr*T,Zn=$n*T,un=Zn*T,Qn=un*T,be=T+Rr*E+$n*I+Zn*A+un*C+Qn*k):be=-l(1-T):be=-l(N),R===1?(Ke=2,st=be):(H=r(R),Ke=1)),N<1e-30&&R<E&&(Sn=0,be=-l(N*i(R))+(R-1)*l(-l(N*i(R))),Ke=1,H=r(R)),R>1&&R<500&&T<1e-80){for(Sn=0,W=1/R,B=1/(R+1),be=(r(R+1)+l(T))*W,be=a(be),fe=be,Cr=0;Cr<10;Cr++)be=fe*a(be*W)*s(1-be*B,W);Ke=1,H=r(R)}if(K=1/R*(l(T)+r(R+1)),K<l(C*(1+R))&&Ke===0&&(fn=a(K),Sn=0,En=R*R,at=En*R,ut=at*R,Z=R+1,Y=Z*Z,x=Z*Y,G=Y*Y,oe=R+2,re=oe*oe,we=R+3,$[0]=1,$[1]=1/Z,$[2]=E*(3*R+5)/(Y*oe),$[3]=I*(31+8*En+33*R)/(x*oe*we),$[4]=w*(2888+1179*at+125*ut+3971*En+5661*R)/(G*re*we*(R+4)),be=fn*e($,fn),H=r(R),Ke=1),R<10&&Ke===0&&(j=o(R)/(m(R)*f),Ae=c(.02,j),N<Ae&&(Sn=0,Ye=1-R,J=Ye*Ye,he=J*Ye,ge=o(-2/R*l(N/j)),be=R*v(ge),Oe=l(be),be>5?(Xe=Oe*Oe,wn=Xe*Oe,br=wn*Oe,fn=1/be,$[0]=Oe-1,$[1]=(3*Ye-2*Ye*Oe+Xe-2*Oe+2)*E,$[2]=(24*Ye*Oe-11*J-24*Ye-6*Xe+12*Oe-12-9*Ye*Xe+6*J*Oe+2*wn)*k,$[3]=(-12*he*Oe+8.04*Ye*Xe-114*J*Oe+(72+36*Xe)+(3*br-72*Oe+162)*(Ye-168*Ye*Oe)-(12*wn+25*he)-(22*Ye*wn+36*J*Xe+120*J))*S,$[4]=0,be=be-Oe+Ye*fn*e($,fn)):(fn=1/be,Xe=Oe*Oe,ti=Oe-1,Mr=Oe-Ye*fn*ti,Mr<be&&(be-=Mr)),H=r(R),Ke=1)),u(Q-E)<1e-5&&Ke===0&&(Sn=0,W=1/R,be=R-I+(.019753086419753086+.007211444248481286*W)*W,H=r(R),Ke=1),R<1&&Ke===0&&(Sn=0,F?be=a(1/R*(l(Q)+r(R+1))):be=a(1/R*(l(1-Q)+r(R+1))),H=r(R),Ke=1),Ke===0)if(Sn=1,W=1/R,fn=t(2*Q),ge=gr*fn/o(R*E),fn<d)ge+=(b(ge)+(g(ge)+_(ge)*W)*W)*W,be=R*v(ge),qr=ge,Gn=-o(R/p)*a(-E*R*qr*qr)/m(R),O=1/Gn;else return y("Warning: Overflow problems in one or more steps of the computation."),NaN;return Ke<2&&(st=h(be,R,Sn,T,N,H,O,F)),st}return Id=L,Id}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rd,z5;function mC(){if(z5)return Rd;z5=1;var n=ue(),e=yo(),r=Ce(),t=vC();function i(o,u,a){return n(o)||n(u)?NaN:u<e?NaN:o>1||o<0?NaN:a===!0?o===0?r:o===1?0:t(u,1-o,o):o===0?0:o===1?r:t(u,o,1-o)}return Rd=i,Rd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cd,J5;function bC(){if(J5)return Cd;J5=1;var n=mC();return Cd=n,Cd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Md,Q5;function gC(){if(Q5)return Md;Q5=1;var n=5e-324;return Md=n,Md}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qd,Z5;function _C(){if(Z5)return qd;Z5=1;var n=bC(),e=Ee(),r=_e(),t=gC(),i=o9(),o=u9();function u(a,c,s,l){var f,d,p,h,v,m,b,g,_,y,E,I,A,C,k,S,w,$,L,R,T,N,B,O,H,F,Q,W,K,re;return s<l?v=n(s,c,!0):v=n(l,c,!1),v/=a,C=c/a,W=r(1+C),$=W*W,L=$*W,R=$*$,T=L*$,N=L*L,B=R*L,O=R*R,H=T*R,b=T*T,Q=v-C,k=Q*Q,S=k*Q,w=k*k,F=W+1,g=F*F,_=F*g,y=g*g,E=(W+2)*(W-1)/(3*W),E+=(L+9*$+21*W+5)*Q/(36*$*F),E-=(R-13*L+69*$+167*W+46)*k/(1620*g*L),E-=(7*T+21*R+70*L+26*$-93*W-31)*S/(6480*_*R),E-=(75*N+202*T+188*R-888*L-1345*$+118*W+138)*w/(272160*y*T),I=(28*R+131*L+402*$+581*W+208)*(W-1)/(1620*F*L),I-=(35*N-154*T-623*R-1636*L-3983*$-3514*W-925)*Q/(12960*g*R),I-=(2132*B+7915*N+16821*T+35066*R+87490*L+141183*$+95993*W+21640)*k/(816480*T*_),I-=(11053*O+53308*B+117010*N+163924*T+116188*R-258428*L-677042*$-481940*W-105497)*S/(14696640*y*N),A=-((3592*B+8375*N-1323*T-29198*R-89578*L-154413*$-116063*W-29632)*(W-1))/(816480*T*g),A-=(442043*H+2054169*O+3803094*B+3470754*N+2141568*T-2393568*R-19904934*L-34714674*$-23128299*W-5253353)*Q/(146966400*N*_),A-=(116932*b+819281*H+2378172*O+4341330*B+6806004*N+10622748*T+18739500*R+30651894*L+30869976*$+15431867*W+2919016)*k/(146966400*y*B),m=v+E/a+I/(a*a)+A/(a*a*a),m<=0&&(m=t),K=m-C*e(m)+(1+C)*e(1+C)-C,f=1/(1+C),p=m<C?f:0,h=m<C?1:f,re=(p+h)/2,d=i(K,C),o(d,re,p,h,32,100)}return qd=u,qd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Nd,e8;function yC(){if(e8)return Nd;e8=1;var n=ye(),e=Yr(),r=Eo(),t=kr(),i=Lr();function o(u,a,c,s,l,f){var d,p,h,v,m,b,g,_,y,E,I,A,C,k,S,w;k=0,p=!1,b=a,m=e(1,1-l),y=t(1e7*a,1e7),g=0,h=y,v=y,_=f;do{if(g=k,v=h,h=y,C=u(b),k=C[0],S=C[1],w=C[2],_-=1,k===0)break;if(S===0?(g===0&&(b===c?a=s:a=c,g=u(a),y=a-b),r(g)*r(k)<0?y<0?y=(b-c)/2:y=(b-s)/2:y<0?y=(b-s)/2:y=(b-c)/2):w===0?y=k/S:(E=2*k,A=2*S-k*(w/S),n(A)<1&&n(E)>=n(A)*i?y=k/S:y=E/A,y*S/k<0&&(y=k/S,n(y)>2*n(a)&&(y=(y<0?-1:1)*2*n(a)))),d=n(y/v),d>.8&&d<2&&(y=y>0?(b-c)/2:(b-s)/2,n(y)>b&&(y=r(y)*b),v=y*3),a=b,b-=y,b<c){if(n(c)<1&&n(b)>1&&i/n(b)<n(c)?I=1e3:I=b/c,n(I)<1&&(I=1/I),!p&&I>0&&I<3)y=.99*(a-c),b=a-y,p=!0;else if(y=(a-c)/2,b=a-y,b===c||b===s)break}else if(b>s){if(n(s)<1&&n(b)>1&&i/n(b)<n(s)?I=1e3:I=b/s,n(I)<1&&(I=1/I),!p&&I>0&&I<3)y=.99*(a-s),b=a-y,p=!0;else if(y=(a-s)/2,b=a-y,b===c||b===s)break}y>0?s=a:c=a}while(_&&n(b*m)<n(y));return b}return Nd=o,Nd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Fd,n8;function EC(){if(n8)return Fd;n8=1;var n=r9().assign,e=ye(),r=Lr(),t=Ar();function i(o,u,a,c){return s;function s(l){var f,d,p,h,v;return v=1-l,f=[0,0],n(l,o,u,!0,c,f,1,0),h=f[0]-a,d=f[1],c&&(d=-d),v===0&&(v=t*64),l===0&&(l=t*64),p=d*(-(v*o)+(u-2)*l+1),e(p)<v*l*r&&(p/=v*l),c&&(p=-p),d===0&&(d=(c?-1:1)*t*64),[h,d,p]}}return Fd=i,Fd}var Td,r8;function wC(){if(r8)return Td;r8=1;var n=vr(),e=Gt(),r=Vr(),t=_n(),i=Cp(),o=ho(),u=_e(),a=ye(),c=Me(),s=qe(),l=Ut(),f=kr(),d=dr(),p=Ee(),h=Ar(),v=Tp(),m=Bn(),b=CR(),g=MR(),_=VR(),y=_C(),E=yC(),I=EC(),A=32,C=1e3,k=[0,0,0,0,0];function S(w,$,L,R){var T,N,B,O,H,F,Q,W,K,re,G,x,Y,j,Ae,fe,Z,oe,we,ge,Qn,un,be,En,Xe,wn,br,J,he;if(N=!1,R===0)return[1,0];if(L===0)return[0,1];if(w===1){if($===1)return[L,1-L];x=$,$=w,w=x,x=R,R=L,L=x,N=!0}if(J=0,O=0,F=1,w===.5){if($===.5)return J=l(L*v),J*=J,he=l(R*v),he*=he,[J,he];$>.5&&(x=$,$=w,w=x,x=R,R=L,L=x,N=!N)}if($===.5&&w>=.5&&L!==1)Qn={},J=b(w,L,Qn),he=Qn.value;else{if($===1)return L<R?w>1?(J=s(L,1/w),he=-r(p(L)/w)):(J=s(L,1/w),he=1-J):(J=c(t(-R)/w),he=-r(t(-R)/w)),N&&(x=he,he=J,J=x),[J,he];if(w+$>5)L>.5&&(x=$,$=w,w=x,x=R,R=L,L=x,N=!N),K=d(w,$),W=f(w,$),u(K)>W-K&&K>5?(J=g(w,$,L),he=1-J):(Xe=w+$,H=i(u(w/Xe)),B=K/Xe,B>=.2&&B<=.8&&Xe>=10?(G=s(L,1/w),G<.0025&&w+$<200?J=G*s(w*o(w,$),1/w):J=_(L,Xe,H),he=1-J):(w<$&&(x=$,$=w,w=x,x=R,R=L,L=x,N=!N),re=0,$<2&&(re=o(w,$)),re===0?he=1:(he=s($*R*re,1/$),J=1-he)),he>1e-5&&(J=y(w,$,L,R),he=1-J));else if(w<1&&$<1){if(ge=(1-w)/(2-w-$),fe=e(ge,w,$)-L,a(fe)/L<m*3)return N?[1-ge,ge]:[ge,1-ge];fe<0&&(x=$,$=w,w=x,x=R,R=L,L=x,N=!N,ge=1-ge),we=s(w*L*o(w,$),1/w),J=we/(1+we),he=1/(1+we),J>ge&&(J=ge),F=ge}else w>1&&$>1?(ge=(w-1)/(w+$-2),Y=($-1)/(w+$-2),oe=e(ge,w,$)-L,oe<0&&(x=$,$=w,w=x,x=R,R=L,L=x,x=Y,Y=ge,ge=x,N=!N),Z=p(L*w*o(w,$))/w,J=c(Z),he=J<.9?1-J:-r(Z),$<w&&J<.2&&(j=w-1,Ae=$-1,un=w*w,be=w*un,En=$*$,k[0]=0,k[1]=1,k[2]=Ae/j,j*=j,k[3]=Ae*(3*w*$+5*$+un-w-4)/(2*(w+2)*j),j*=w+1,k[4]=Ae*(33*w*En+31*En+8*un*En-30*w*$-47*$+11*un*$+6*be*$+18+4*w-be+un*un-10*un),k[4]/=3*(w+3)*(w+2)*j,J=n(k,J)),J>ge&&(J=ge),F=ge):($<w&&(x=$,$=w,w=x,x=R,R=L,L=x,N=!N),s(L,1/w)<.5?(J=s(L*w*o(w,$),1/w),J===0&&(J=h),he=1-J):(he=s(1-s(L,$*o(w,$)),1/$),he===0&&(he=h),J=1-he))}return J>.5&&(x=$,$=w,w=x,x=R,R=L,L=x,x=he,he=J,J=x,N=!N,wn=1-F,br=1-O,O=wn,F=br),O===0&&(N?(O=m,J<O&&(J=O)):O=h,J<O&&(J=O)),T=A,J<1e-50&&(w<1||$<1)&&(T*=3,T/=2),Q=I(w,$,L<R?L:R,L>=R),J=E(Q,J,O,F,T,C),J===O&&(J=0),N?[1-J,J]:[J,1-J]}return Td=S,Td}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Od,t8;function xp(){if(t8)return Od;t8=1;var n=wC();return Od=n,Od}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dd,i8;function $C(){if(i8)return Dd;i8=1;var n=ue(),e=xp();function r(t,i,o,u){return n(t)||n(i)||n(o)?NaN:i<=0||o<=0?NaN:t<0||t>1?NaN:u?e(i,o,1-t,t)[0]:e(i,o,t,1-t)[0]}return Dd=r,Dd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pd,o8;function c9(){if(o8)return Pd;o8=1;var n=$C();return Pd=n,Pd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hd,u8;function SC(){if(u8)return Hd;u8=1;var n=c9(),e=ue();function r(t,i,o){return e(t)||e(i)||e(o)||i<=0||o<=0||t<0||t>1?NaN:n(t,i,o)}return Hd=r,Hd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xd,a8;function AC(){if(a8)return xd;a8=1;var n=yn(),e=c9(),r=ue();function t(i,o){if(r(i)||r(o)||i<=0||o<=0)return n(NaN);return u;function u(a){return r(a)||a<0||a>1?NaN:e(a,i,o)}}return xd=t,xd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bd,s8;function kC(){if(s8)return Bd;s8=1;var n=en(),e=SC(),r=AC();return n(e,"factory",r),Bd=e,Bd}var LC=kC();const IC=Hn(LC);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ud,c8;function RC(){if(c8)return Ud;c8=1;var n=bo(),e=_e(),r=ue();function t(i,o,u){var a,c;return r(i)||r(o)||r(u)||u<0?NaN:u===0?i<o?0:1:(a=u*e(2),c=i-o,.5*n(-c/a))}return Ud=t,Ud}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wd,l8;function CC(){if(l8)return Wd;l8=1;var n=ue();function e(r,t){return n(r)||n(t)?NaN:r<t?0:1}return Wd=e,Wd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jd,f8;function MC(){if(f8)return jd;f8=1;var n=yn(),e=ue();function r(t){if(e(t))return n(NaN);return i;function i(o){return e(o)?NaN:o<t?0:1}}return jd=r,jd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gd,d8;function qC(){if(d8)return Gd;d8=1;var n=en(),e=CC(),r=MC();return n(e,"factory",r),Gd=e,Gd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vd,p8;function NC(){if(p8)return Vd;p8=1;var n=yn(),e=qC().factory,r=ue(),t=_e(),i=bo();function o(u,a){var c;if(r(u)||r(a)||a<0)return n(NaN);if(a===0)return e(u);return c=a*t(2),s;function s(l){var f;return r(l)?NaN:(f=l-u,.5*i(-f/c))}}return Vd=o,Vd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xd,h8;function FC(){if(h8)return Xd;h8=1;var n=en(),e=RC(),r=NC();return n(e,"factory",r),Xd=e,Xd}var TC=FC();const OC=Hn(TC);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yd,v8;function DC(){if(v8)return Yd;v8=1;var n=Me(),e=qe(),r=_e(),t=go(),i=Ce(),o=ue();function u(a,c,s){var l,f,d;return o(a)||o(c)||o(s)||s<0?NaN:s===0?a===c?i:0:(l=e(s,2),f=1/r(l*t),d=-1/(2*l),f*n(d*e(a-c,2)))}return Yd=u,Yd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kd,m8;function PC(){if(m8)return Kd;m8=1;var n=Ce(),e=ue();function r(t,i){return e(t)||e(i)?NaN:t===i?n:0}return Kd=r,Kd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zd,b8;function HC(){if(b8)return zd;b8=1;var n=yn(),e=Ce(),r=ue();function t(i){if(r(i))return n(NaN);return o;function o(u){return r(u)?NaN:u===i?e:0}}return zd=t,zd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jd,g8;function xC(){if(g8)return Jd;g8=1;var n=en(),e=PC(),r=HC();return n(e,"factory",r),Jd=e,Jd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qd,_8;function BC(){if(_8)return Qd;_8=1;var n=yn(),e=xC().factory,r=ue(),t=_e(),i=Me(),o=qe(),u=go();function a(c,s){var l,f,d;if(r(c)||r(s)||s<0)return n(NaN);if(s===0)return e(c);return l=o(s,2),f=1/t(l*u),d=-1/(2*l),p;function p(h){return r(h)?NaN:f*i(d*o(h-c,2))}}return Qd=a,Qd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zd,y8;function UC(){if(y8)return Zd;y8=1;var n=en(),e=DC(),r=BC();return n(e,"factory",r),Zd=e,Zd}var WC=UC();const jC=Hn(WC);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e1,E8;function GC(){if(E8)return e1;E8=1;function n(e){var r,t,i;return e===0?-.0005087819496582806:(e<0?r=-e:r=e,r<=1?(t=-.0005087819496582806+e*(-.008368748197417368+e*(.03348066254097446+e*(-.012692614766297404+e*(-.03656379714117627+e*(.02198786811111689+e*(.008226878746769157+e*(-.005387729650712429+e*(0+e*0)))))))),i=1+e*(-.9700050433032906+e*(-1.5657455823417585+e*(1.5622155839842302+e*(.662328840472003+e*(-.7122890234154284+e*(-.05273963823400997+e*(.07952836873415717+e*(-.0023339375937419+e*.0008862163904564247))))))))):(e=1/e,t=0+e*(0+e*(-.005387729650712429+e*(.008226878746769157+e*(.02198786811111689+e*(-.03656379714117627+e*(-.012692614766297404+e*(.03348066254097446+e*(-.008368748197417368+e*-.0005087819496582806)))))))),i=.0008862163904564247+e*(-.0023339375937419+e*(.07952836873415717+e*(-.05273963823400997+e*(-.7122890234154284+e*(.662328840472003+e*(1.5622155839842302+e*(-1.5657455823417585+e*(-.9700050433032906+e*1))))))))),t/i)}return e1=n,e1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n1,w8;function VC(){if(w8)return n1;w8=1;function n(e){var r,t,i;return e===0?-.20243350835593876:(e<0?r=-e:r=e,r<=1?(t=-.20243350835593876+e*(.10526468069939171+e*(8.3705032834312+e*(17.644729840837403+e*(-18.851064805871424+e*(-44.6382324441787+e*(17.445385985570866+e*(21.12946554483405+e*-3.6719225470772936))))))),i=1+e*(6.242641248542475+e*(3.971343795334387+e*(-28.66081804998+e*(-20.14326346804852+e*(48.560921310873994+e*(10.826866735546016+e*(-22.643693341313973+e*1.7211476576120028)))))))):(e=1/e,t=-3.6719225470772936+e*(21.12946554483405+e*(17.445385985570866+e*(-44.6382324441787+e*(-18.851064805871424+e*(17.644729840837403+e*(8.3705032834312+e*(.10526468069939171+e*-.20243350835593876))))))),i=1.7211476576120028+e*(-22.643693341313973+e*(10.826866735546016+e*(48.560921310873994+e*(-20.14326346804852+e*(-28.66081804998+e*(3.971343795334387+e*(6.242641248542475+e*1)))))))),t/i)}return n1=n,n1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r1,$8;function XC(){if($8)return r1;$8=1;function n(e){var r,t,i;return e===0?-.1311027816799519:(e<0?r=-e:r=e,r<=1?(t=-.1311027816799519+e*(-.16379404719331705+e*(.11703015634199525+e*(.38707973897260434+e*(.3377855389120359+e*(.14286953440815717+e*(.029015791000532906+e*(.0021455899538880526+e*(-6794655751811263e-22+e*(28522533178221704e-24+e*-681149956853777e-24))))))))),i=1+e*(3.4662540724256723+e*(5.381683457070069+e*(4.778465929458438+e*(2.5930192162362027+e*(.848854343457902+e*(.15226433829533179+e*(.011059242293464892+e*(0+e*(0+e*0)))))))))):(e=1/e,t=-681149956853777e-24+e*(28522533178221704e-24+e*(-6794655751811263e-22+e*(.0021455899538880526+e*(.029015791000532906+e*(.14286953440815717+e*(.3377855389120359+e*(.38707973897260434+e*(.11703015634199525+e*(-.16379404719331705+e*-.1311027816799519))))))))),i=0+e*(0+e*(0+e*(.011059242293464892+e*(.15226433829533179+e*(.848854343457902+e*(2.5930192162362027+e*(4.778465929458438+e*(5.381683457070069+e*(3.4662540724256723+e*1)))))))))),t/i)}return r1=n,r1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t1,S8;function YC(){if(S8)return t1;S8=1;function n(e){var r,t,i;return e===0?-.0350353787183178:(e<0?r=-e:r=e,r<=1?(t=-.0350353787183178+e*(-.0022242652921344794+e*(.018557330651423107+e*(.009508047013259196+e*(.0018712349281955923+e*(.00015754461742496055+e*(460469890584318e-20+e*(-2304047769118826e-25+e*26633922742578204e-28))))))),i=1+e*(1.3653349817554064+e*(.7620591645536234+e*(.22009110576413124+e*(.03415891436709477+e*(.00263861676657016+e*(7646752923027944e-20+e*(0+e*0)))))))):(e=1/e,t=26633922742578204e-28+e*(-2304047769118826e-25+e*(460469890584318e-20+e*(.00015754461742496055+e*(.0018712349281955923+e*(.009508047013259196+e*(.018557330651423107+e*(-.0022242652921344794+e*-.0350353787183178))))))),i=0+e*(0+e*(7646752923027944e-20+e*(.00263861676657016+e*(.03415891436709477+e*(.22009110576413124+e*(.7620591645536234+e*(1.3653349817554064+e*1)))))))),t/i)}return t1=n,t1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i1,A8;function KC(){if(A8)return i1;A8=1;function n(e){var r,t,i;return e===0?-.016743100507663373:(e<0?r=-e:r=e,r<=1?(t=-.016743100507663373+e*(-.0011295143874558028+e*(.001056288621524929+e*(.00020938631748758808+e*(14962478375834237e-21+e*(44969678992770644e-23+e*(4625961635228786e-24+e*(-2811287356288318e-29+e*9905570997331033e-32))))))),i=1+e*(.5914293448864175+e*(.1381518657490833+e*(.016074608709367652+e*(.0009640118070051656+e*(27533547476472603e-21+e*(282243172016108e-21+e*(0+e*0)))))))):(e=1/e,t=9905570997331033e-32+e*(-2811287356288318e-29+e*(4625961635228786e-24+e*(44969678992770644e-23+e*(14962478375834237e-21+e*(.00020938631748758808+e*(.001056288621524929+e*(-.0011295143874558028+e*-.016743100507663373))))))),i=0+e*(0+e*(282243172016108e-21+e*(27533547476472603e-21+e*(.0009640118070051656+e*(.016074608709367652+e*(.1381518657490833+e*(.5914293448864175+e*1)))))))),t/i)}return i1=n,i1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var o1,k8;function zC(){if(k8)return o1;k8=1;var n=ue(),e=_e(),r=Ee(),t=Ce(),i=nn(),o=GC(),u=VC(),a=XC(),c=YC(),s=KC(),l=.08913147449493408,f=2.249481201171875,d=.807220458984375,p=.9399557113647461,h=.9836282730102539;function v(m){var b,g,_,y,E,I;return n(m)?NaN:m===1?t:m===-1?i:m===0?m:m>1||m<-1?NaN:(m<0?(b=-1,g=-m):(b=1,g=m),y=1-g,g<=.5?(E=g*(g+10),I=o(g),b*(E*l+E*I)):y>=.25?(E=e(-2*r(y)),y-=.25,I=u(y),b*(E/(f+I))):(y=e(-r(y)),y<3?(_=y-1.125,I=a(_),b*(d*y+I*y)):y<6?(_=y-3,I=c(_),b*(p*y+I*y)):(_=y-6,I=s(_),b*(h*y+I*y))))}return o1=v,o1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u1,L8;function l9(){if(L8)return u1;L8=1;var n=zC();return u1=n,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a1,I8;function JC(){if(I8)return a1;I8=1;var n=l9(),e=ue(),r=_e();function t(i,o,u){var a,c;return e(o)||e(u)||e(i)||u<0||i<0||i>1?NaN:u===0?o:(a=o,c=u*r(2),a+c*n(2*i-1))}return a1=t,a1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s1,R8;function QC(){if(R8)return s1;R8=1;var n=ue();function e(r,t){return n(r)||r<0||r>1?NaN:t}return s1=e,s1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c1,C8;function ZC(){if(C8)return c1;C8=1;var n=yn(),e=ue();function r(t){if(e(t))return n(NaN);return i;function i(o){return e(o)||o<0||o>1?NaN:t}}return c1=r,c1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l1,M8;function eM(){if(M8)return l1;M8=1;var n=en(),e=QC(),r=ZC();return n(e,"factory",r),l1=e,l1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f1,q8;function nM(){if(q8)return f1;q8=1;var n=yn(),e=eM().factory,r=l9(),t=ue(),i=_e();function o(u,a){var c,s;if(t(u)||t(a)||a<0)return n(NaN);return a===0&&e(u),c=u,s=a*i(2),l;function l(f){return t(f)||f<0||f>1?NaN:c+s*r(2*f-1)}}return f1=o,f1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d1,N8;function rM(){if(N8)return d1;N8=1;var n=en(),e=JC(),r=nM();return n(e,"factory",r),d1=e,d1}var tM=rM();const iM=Hn(tM);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p1,F8;function oM(){if(F8)return p1;F8=1;var n=Gt(),e=ue(),r=qe();function t(i,o){var u,a,c;return e(i)||e(o)||o<=0?NaN:i===0?.5:(u=r(i,2),o>2*u?(c=u/(o+u),a=n(c,.5,o/2,!0,!0)/2):(c=o/(o+u),a=n(c,o/2,.5,!0,!1)/2),i>0?1-a:a)}return p1=t,p1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h1,T8;function uM(){if(T8)return h1;T8=1;var n=yn(),e=Gt(),r=ue(),t=qe();function i(o){if(r(o)||o<=0)return n(NaN);return u;function u(a){var c,s,l;return r(a)?NaN:a===0?.5:(c=t(a,2),o>2*c?(l=c/(o+c),s=e(l,.5,o/2,!0,!0)/2):(l=o/(o+c),s=e(l,o/2,.5,!0,!1)/2),a>0?1-s:s)}}return h1=i,h1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v1,O8;function aM(){if(O8)return v1;O8=1;var n=en(),e=oM(),r=uM();return n(e,"factory",r),v1=e,v1}var sM=aM();const cM=Hn(sM);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m1,D8;function lM(){if(D8)return m1;D8=1;var n=ue(),e=ho(),r=_e(),t=qe();function i(o,u){var a;return n(o)||n(u)||u<=0?NaN:(a=r(u)*e(u/2,.5),t(u/(u+t(o,2)),(1+u)/2)/a)}return m1=i,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1,P8;function fM(){if(P8)return b1;P8=1;var n=yn(),e=ue(),r=ho(),t=_e(),i=qe();function o(u){var a,c;if(e(u)||u<=0)return n(NaN);return c=t(u)*r(u/2,.5),a=(1+u)/2,s;function s(l){return e(l)?NaN:i(u/(u+i(l,2)),a)/c}}return b1=o,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1,H8;function dM(){if(H8)return g1;H8=1;var n=en(),e=lM(),r=fM();return n(e,"factory",r),g1=e,g1}var pM=dM();const hM=Hn(pM);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _1,x8;function vM(){if(x8)return _1;x8=1;var n=xp(),e=ue(),r=Eo(),t=_e();function i(o,u){var a,c;return e(u)||e(o)||u<=0||o<0||o>1?NaN:(a=o>.5?1-o:o,c=n(u/2,.5,2*a,1-2*a),r(o-.5)*t(u*c[1]/c[0]))}return _1=i,_1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y1,B8;function mM(){if(B8)return y1;B8=1;var n=yn(),e=xp(),r=ue(),t=Eo(),i=_e();function o(u){if(r(u)||u<=0)return n(NaN);return a;function a(c){var s,l;return r(c)||c<0||c>1?NaN:(s=c>.5?1-c:c,l=e(u/2,.5,2*s,1-2*s),t(c-.5)*i(u*l[1]/l[0]))}}return y1=o,y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E1,U8;function bM(){if(U8)return E1;U8=1;var n=en(),e=vM(),r=mM();return n(e,"factory",r),E1=e,E1}var gM=bM();const _M=Hn(gM),W8=1e-9,yM=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,f9=/^\s*([a-z][a-z-]*)\s*\((.*)\)\s*$/;function EM(n){const[e,r,t]=n;return e<t?e<=r&&r<=t?null:`requires lo <= peak <= hi, got lo=${e}, peak=${r}, hi=${t}`:`requires lo < hi, got lo=${e}, hi=${t}`}function wM(n){const[e,r]=n;return e<r?null:`requires lo < hi, got lo=${e}, hi=${r}`}function $M(n){const[e,r]=n;return e>0&&r>0?null:`requires a > 0 and b > 0, got a=${e}, b=${r}`}function j8(n){const e=n[1];return e>0?null:`requires sigma > 0, got sigma=${e}`}function SM(n){const[e,r]=n;return 0<e&&e<r?null:`requires 0 < lo < hi, got lo=${e}, hi=${r}`}function G8(n){const[,e,r]=n;return e<=0?`requires sigma > 0, got sigma=${e}`:r<=0?`requires df > 0, got df=${r}`:null}function V8(n,e){const r=e-n;return{cdf:t=>t<=n?0:t>=e?1:(t-n)/r,ppf:t=>n+t*r,pdf:t=>t>=n&&t<=e?1/r:0}}function AM(n,e,r){const t=r-n,i=(e-n)/t;return{cdf:o=>o<=n?0:o>=r?1:o<=e?(o-n)*(o-n)/(t*(e-n)):1-(r-o)*(r-o)/(t*(r-e)),ppf:o=>o<i?n+Math.sqrt(o*t*(e-n)):r-Math.sqrt((1-o)*t*(r-e)),pdf:o=>o<n||o>r?0:o===e?2/t:o<e?2*(o-n)/(t*(e-n)):2*(r-o)/(t*(r-e))}}function X8(n,e){return{cdf:r=>OC(r,n,e),ppf:r=>iM(r,n,e),pdf:r=>jC(r,n,e)}}function Y8(n,e,r){return{cdf:t=>cM((t-n)/e,r),ppf:t=>n+e*_M(t,r),pdf:t=>hM((t-n)/e,r)/e}}function kM(n,e){return{cdf:r=>eR(r,n,e),ppf:r=>IC(r,n,e),pdf:r=>sR(r,n,e)}}const Er={tri:{signature:"tri(lo, peak, hi)",note:"triangular",nParams:3,check:EM,build:n=>({latent:AM(n[0],n[1],n[2]),logX:!1})},uniform:{signature:"uniform(lo, hi)",note:"uniform",nParams:2,check:wM,build:n=>({latent:V8(n[0],n[1]),logX:!1})},beta:{signature:"beta(a, b)",note:"Beta on [0, 1]; a, b > 0",nParams:2,check:$M,build:n=>({latent:kM(n[0],n[1]),logX:!1})},normal:{signature:"normal(mu, sigma)",note:"normal; sigma > 0",nParams:2,check:j8,build:n=>({latent:X8(n[0],n[1]),logX:!1})},lognormal:{signature:"lognormal(mu, sigma)",note:"mu/sigma are mean/sd of log(X); sigma > 0",nParams:2,check:j8,build:n=>({latent:X8(n[0],n[1]),logX:!0})},loguniform:{signature:"loguniform(lo, hi)",note:"uniform in log space; 0 < lo < hi",nParams:2,check:SM,build:n=>({latent:V8(Math.log(n[0]),Math.log(n[1])),logX:!0})},t:{signature:"t(mu, sigma, df)",note:"location-scale Student-t; sigma > 0, df > 0",nParams:3,check:G8,build:n=>({latent:Y8(n[0],n[1],n[2]),logX:!1})},logt:{signature:"logt(mu, sigma, df)",note:"exp of location-scale Student-t; log-space params like lognormal",nParams:3,check:G8,build:n=>({latent:Y8(n[0],n[1],n[2]),logX:!0})}},LM=["normal","lognormal","t","logt"];function IM(n){const[e,r]=n;return e<r?null:`requires lo < hi in the truncation window, got lo=${e}, hi=${r}`}function RM(n,e){const r=e.signature.split("(",2)[1].slice(0,-1);return{signature:`${n}-trunc(${r}, lo, hi)`,note:`${e.note}; explicitly truncated to [lo, hi]`,nParams:e.nParams+2,check:t=>e.check(t.slice(0,e.nParams))??IM(t.slice(e.nParams)),build:t=>e.build(t),hasTruncWindow:!0}}for(const n of LM)Er[`${n}-trunc`]=RM(n,Er[n]);function CM(n){return f9.test(n)}function d9(n){const e=f9.exec(n);if(!e)throw new Error(`malformed family spec ${JSON.stringify(n)}: expected "family(num, num, ...)"`);const r=e[1],t=e[2],i=Er[r];if(i===void 0)throw new Error(`unknown distribution family ${JSON.stringify(r)}; available: `+Object.values(Er).map(c=>c.signature).join(", "));const o=t.split(",").map(c=>c.trim());for(const c of o)if(!yM.test(c))throw new Error(`family spec ${JSON.stringify(n.trim())}: bad numeric argument ${JSON.stringify(c)}`);const u=o.map(Number);if(u.length!==i.nParams)throw new Error(`${r} takes ${i.nParams} arguments as ${i.signature}, got ${u.length}`);const a=i.check(u);if(a)throw new Error(`${n.trim()}: ${i.signature} ${a}`);return i.hasTruncWindow?{family:r,params:u.slice(0,-2),text:n.trim(),truncWindow:[u[u.length-2],u[u.length-1]]}:{family:r,params:u,text:n.trim(),truncWindow:null}}function K8(n,e){return e===-1/0?0:e===1/0?1:n.cdf(e)}class p9{constructor(e,r,t,i,o,u,a){this.spec=e,this.latent=r,this.logX=t,this.cdfLo=i,this.mass=o,this.xLo=u,this.xHi=a}inverseCdf(e){const r=this.latent.ppf(this.cdfLo+e*this.mass),t=this.logX?Math.exp(r):r;return Math.min(Math.max(t,this.xLo),this.xHi)}pdf(e){return e<this.xLo||e>this.xHi?0:this.logX?e<=0?0:this.latent.pdf(Math.log(e))/e/this.mass:this.latent.pdf(e)/this.mass}}function Bp(n,e,r){const t=Er[n.family];if(t===void 0)throw new Error(`unknown distribution family ${JSON.stringify(n.family)}`);const{latent:i,logX:o}=t.build(n.params);let u=e===null?-1/0:e,a=r===null?1/0:r;n.truncWindow!==null&&(u=Math.max(u,n.truncWindow[0]),a=Math.min(a,n.truncWindow[1]));let c,s;o?(c=u>0?Math.log(u):-1/0,s=a>0?Math.log(a):-1/0):(c=u,s=a);const l=K8(i,c),d=K8(i,s)-l;if(d<W8){let p=`the variable's range [${e}, ${r}]`;throw n.truncWindow!==null&&(p+=` ∩ the spec's truncation window [${n.truncWindow[0]}, ${n.truncWindow[1]}]`),new Error(`family spec ${JSON.stringify(n.text)}: essentially no probability mass in ${p} (mass ${d.toExponential(2)} < ${W8})`)}return new p9(n,i,o,l,d,u,a)}const Oi="pointmass",MM="[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?",qM=new RegExp(`^\\s*${Oi}\\s*\\(\\s*(${MM})\\s*\\)\\s*$`),NM=new RegExp(`^\\s*${Oi}\\b`);function h9(n){const e=qM.exec(n);if(e===null)throw new Error(`malformed ${Oi} spec ${JSON.stringify(n)}: expected "${Oi}(num)"`);return Number(e[1])}function Up(n){return NM.test(n)?h9(n):null}function v9(n){const e=h9(n);return[[e,1],[e,1]]}function FM(n,e){let r=1/0,t=-1/0;for(const i of n){const{lo:o,hi:u}=e(i);r=Math.min(r,o),t=Math.max(t,u)}return{lo:r,hi:t}}function W1(n){const e=.254829592,r=-.284496736,t=1.421413741,i=-1.453152027,o=1.061405429,u=.3275911,a=n<0?-1:1,c=Math.abs(n)/Math.SQRT2,s=1/(1+u*c),l=1-((((o*s+i)*s+t)*s+r)*s+e)*s*Math.exp(-c*c);return .5*(1+a*l)}function Di(){const n=Math.random(),e=Math.random(),r=Math.sqrt(-2*Math.log(n)),t=2*Math.PI*e;return[r*Math.cos(t),r*Math.sin(t)]}function TM(n,e){const r=n.length;if(r<2)throw new Error(`buildFromXsHs: need at least 2 breakpoints, got ${r}`);let t=0;for(let u=0;u<r-1;u++)t+=(n[u+1]-n[u])*(e[u]+e[u+1])/2;if(t<=0)throw new Error("buildPieceLinear: distribution has zero or negative area");const i=new Float64Array(r);for(let u=0;u<r;u++)i[u]=e[u]/t;const o=new Float64Array(r);o[0]=0;for(let u=0;u<r-1;u++)o[u+1]=o[u]+(n[u+1]-n[u])*(i[u]+i[u+1])/2;return o[r-1]=1,{xs:new Float64Array(n),fs:i,Fs:o}}function m9(n){const{pairs:e}=n,r=e[0][0];if(e[e.length-1][0]-r<1e-15)return{xs:new Float64Array([r,r]),fs:new Float64Array([1,1]),Fs:new Float64Array([0,1])};const i=e.map(u=>u[0]),o=e.map(u=>u[1]);return TM(i,o)}function j1(n,e){if(n.kind==="family"){if(e===void 0)throw new Error(`family spec ${JSON.stringify(n.spec.text)} needs the svar's declared range for implicit truncation, but no paramRange was provided (thread paramRanges through the caller)`);return Bp(n.spec,e.lo,e.hi)}return m9(n)}function mt(n,e){return e instanceof p9?e.inverseCdf(n):DM(n,e)}const OM=1e-12;function DM(n,e){const{xs:r,fs:t,Fs:i}=e,o=r.length-1;if(o<=0||n<=0)return r[0];if(n>=1)return r[o];let u=0,a=o;for(;u<a-1;){const p=u+a>>1;i[p]<=n?u=p:a=p}const c=u,s=r[c+1]-r[c];if(s<1e-15)return r[c];const l=n-i[c],f=(t[c+1]-t[c])/s;let d;if(Math.abs(f)<OM)d=l/t[c];else{const p=t[c]*t[c]+2*f*l;d=(-t[c]+Math.sqrt(Math.max(0,p)))/f}return r[c]+d}function PM(n,e){if(n.kind==="family"){const t=(o,u)=>e!==void 0&&(e.lo===null||o>=e.lo)&&(e.hi===null||u<=e.hi),i=n.spec.params;return n.spec.family==="tri"&&t(i[0],i[2])?{kind:"triangular",lo:i[0],peak:i[1],hi:i[2]}:n.spec.family==="uniform"&&t(i[0],i[1])?{kind:"uniform",lo:i[0],hi:i[1]}:null}const{pairs:r}=n;if(r.length===2){const[t,i]=r[0],[o,u]=r[1];return i===u&&i>0?{kind:"uniform",lo:t,hi:o}:i===0&&u>0?{kind:"triangular",lo:t,peak:o,hi:o}:i>0&&u===0?{kind:"triangular",lo:t,peak:t,hi:o}:null}if(r.length===3){const[t,i]=r[0],[o,u]=r[1],[a,c]=r[2];if(i===0&&c===0&&u>0)return{kind:"triangular",lo:t,peak:o,hi:a}}return null}function HM(n){const e=n.length;let r=0,t=0;for(const a of n){let c=1,s=1;for(const l of a){const f=1-l.hi,d=1-l.lo;if(l.kind==="triangular"){const p=1-l.peak;c*=(f+d+p)/3,s*=(f*f+d*d+p*p+f*d+f*p+d*p)/6}else c*=(f+d)/2,s*=(f*f+f*d+d*d)/3}r+=c,t+=s}const i=r/e,u=t/e-i*i;return{mean:i,sigma:Math.sqrt(Math.max(0,u))}}function xM(n,e,r){if(e!==mw)return null;const t=[];for(const i of n){const o=[];for(const[u,a]of i.entries()){const c=PM(a,r==null?void 0:r[u]);if(c===null)return null;o.push(c)}t.push(o)}return HM(t)}function G1(n,e,r,t){var c;const{trialCount:i,nParams:o,perTrialLoadings:u}=b9(n,e,r),a=Array.from({length:o},()=>new Float64Array(t));for(let s=0;s<t;s++){const l=Math.floor(Math.random()*i),f=n[l],{loadingMatrix:d,residualSds:p}=u[l],h=((c=d[0])==null?void 0:c.length)??0;if(h===0)for(let v=0;v<o;v++)a[v][s]=mt(Math.random(),f[v]);else{const v=[];for(let m=0;m<h;m++)v.push(Di()[0]);for(let m=0;m<o;m++){const b=Di()[0],g=d[m];let _=p[m]*b;for(let y=0;y<h;y++)_+=g[y]*v[y];a[m][s]=mt(W1(_),f[m])}}}return a}function b9(n,e,r){const t=n.length;if(t===0)throw new Error("sampleCopulaMatrix: need at least one trial");const i=r.length;if(n.some(u=>u.length!==i))throw new Error(`sampleCopulaMatrix: trials disagree with params on parameter count (${i} params)`);if(e.length!==t)throw new Error(`sampleCopulaMatrix: ${e.length} per-trial lloads specs for ${t} trials`);const o=e.map(u=>cS(u,r));return{trialCount:t,nParams:i,perTrialLoadings:o}}function BM(n,e,r,t){var l;const{trialCount:i,nParams:o,perTrialLoadings:u}=b9(n,e,r),a=Array.from({length:o},()=>new Float64Array(t)),s=u.some(({loadingMatrix:f})=>{var d;return(((d=f[0])==null?void 0:d.length)??0)>0})?Array.from({length:o},()=>new Float64Array(t)):a;for(let f=0;f<t;f++){const d=Math.floor(Math.random()*i),p=n[d],{loadingMatrix:h,residualSds:v}=u[d],m=((l=h[0])==null?void 0:l.length)??0;if(m===0)for(let b=0;b<o;b++){const g=mt(Math.random(),p[b]);a[b][f]=g,s[b][f]=g}else{const b=[];for(let g=0;g<m;g++)b.push(Di()[0]);for(let g=0;g<o;g++){const _=Di()[0];a[g][f]=mt(W1(_),p[g]);const y=h[g];let E=v[g]*_;for(let I=0;I<m;I++)E+=y[I]*b[I];s[g][f]=mt(W1(E),p[g])}}}return{independent:a,joint:s}}function Xt(n,e){if(n.length===0)throw new Error("combineSampleColumns: need at least one sampled column");const r=n[0].length,t=new Float64Array(r),i=new Array(n.length);for(let o=0;o<r;o++){for(let u=0;u<n.length;u++)i[u]=n[u][o];t[o]=e(i)}return t}function UM(n){if(typeof n=="string")return Up(n)!==null?{kind:"pairs",pairs:v9(n)}:{kind:"family",spec:d9(n)};if(!n||n.length===0)throw new Error("sampleValueToSpec: no sample value present (gate on sampleValueHasData to tolerate absence)");return{kind:"pairs",pairs:n}}const WM=/\(\s*([\d.eE+-]+)\s+([\d.eE+-]+)\s*\)/g;function Wp(n,e){const r=n.trim(),t=Up(r);if(t!==null){if(!Ai(e,t))throw new Error(`pointmass value ${t} not in ${ki(e)}`);return{kind:"pairs",pairs:v9(r)}}if(CM(r)){const a=d9(r);return Bp(a,e.lo,e.hi),{kind:"family",spec:a}}if(!r.includes("("))throw new Error(`expected a family spec "name(num, ...)" or PWL pairs "(x y) ..." (pointmass(num) is also accepted), got "${r}"`);const i=[...r.matchAll(WM)];if(i.length<2)throw new Error(`need at least 2 (x y) pairs, got ${i.length}`);const o=i.map(a=>[Number(a[1]),Number(a[2])]);let u=-1/0;for(let a=0;a<o.length;a++){const[c,s]=o[a];if(isNaN(c)||!Ai(e,c))throw new Error(`pair ${a+1} x=${c} not in ${ki(e)}`);if(isNaN(s)||s<0||s>1)throw new Error(`pair ${a+1} y=${s} not in [0, 1]`);if(c<u)throw new Error(`pair ${a+1} x=${c} not sorted (prev was ${u})`);u=c}return{kind:"pairs",pairs:o}}function g9(n){return typeof n=="string"?n.length>0:((n==null?void 0:n.length)??0)>0}function $o(n){const e=new Float64Array(n);e.sort();const r=e.length;let t=0;for(let i=0;i<r;i++)t+=e[i];return{mean:t/r,median:e[Math.floor(r*.5)],p5:e[Math.floor(r*.05)],p95:e[Math.floor(r*.95)],samples:e,count:r}}const jM=32,GM=4e6,qn=new Map;let gi=0;function Ir(n){return JSON.stringify(n,(e,r)=>{if(typeof r=="function"||typeof r=="symbol")throw new Error(`mc_memo key parts must be JSON-serializable data; got a ${typeof r}. Identify a combine function by a string tag / form id instead.`);return r})}function So(n,e){const r=Ir(n),t=qn.get(r);if(t!==void 0)return qn.delete(r),qn.set(r,t),t;const i=e();for(qn.set(r,i),gi+=i.samples.length;(qn.size>jM||gi>GM)&&qn.size>1;){const o=qn.keys().next().value;gi-=qn.get(o).samples.length,qn.delete(o)}return i}function VM(){qn.clear(),gi=0}const XM=256,Yn=new Map,kt=new Map;let _9=1;function y9(n){const e=Ir(n),r=Yn.get(e);if(r!==void 0)return Yn.delete(e),Yn.set(e,r),r;const t={token:`mcpool-${_9++}`,extraBlocks:0};for(Yn.set(e,t),kt.set(t.token,t);Yn.size>XM;){const i=Yn.keys().next().value;kt.delete(Yn.get(i).token),Yn.delete(i)}return t}const YM=64,Pi=new Map,Kn=new Map;function E9(n){const e=Ir([...n].sort()),r=Kn.get(e);if(r!==void 0)return Kn.delete(e),Kn.set(e,r),r;const t=`mcpoolgroup-${_9++}`;for(Kn.set(e,t),Pi.set(t,[...n]);Kn.size>YM;){const i=Kn.keys().next().value;Pi.delete(Kn.get(i)),Kn.delete(i)}return t}function KM(n){const e=Pi.get(n);if(e!==void 0){let t=!1;for(const i of e){const o=kt.get(i);o!==void 0&&(o.extraBlocks+=1,t=!0)}return t}const r=kt.get(n);return r===void 0?!1:(r.extraBlocks+=1,!0)}function zM(){Yn.clear(),kt.clear(),Pi.clear(),Kn.clear()}const JM=2048,zn=new Map;function z8(n){const e=Ir(n),r=zn.get(e);if(r!==void 0)return zn.delete(e),zn.set(e,r),r}function J8(n){const e=Ir(n);if(zn.has(e))throw new Error(`streaming mean entry already exists for key ${e}`);const r={n:0,mean:0,m2:0,blocksFolded:0};for(zn.set(e,r);zn.size>JM;){const t=zn.keys().next().value;zn.delete(t)}return r}function w1(n,e,r){let{n:t,mean:i,m2:o}=n;for(let u=0;u<e.length;u++){const a=e[u];if(!Number.isFinite(a))throw new Error(`streaming mean fold: non-finite sample value ${a} at block index ${u}`);t+=1;const c=a-i;i+=c/t,o+=c*(a-i)}n.n=t,n.mean=i,n.m2=o,n.blocksFolded=r}function Q8(n){return Math.sqrt(n.m2/(n.n-1)/n.n)}function QM(){zn.clear()}const Yt="Bounds are not available for this formula: no interval for it follows from bounds responses. Its point and distribution results are unaffected.";function w9(n,e,r){if(e.bounds&&!e.boundsTightness)throw new Error(`form ${n} has a bounds implementation but no boundsTightness — regenerate form_fns`);return{key:n,params:e.params,typeHighlevel:e.typeHighlevel,point:e.point,bounds:e.bounds??null,boundsTightness:e.bounds?e.boundsTightness:null,closedFormMomentsShape:e.closedFormMomentsShape,sampleStage:e.sampleStage,barrierRegistry:r}}function sr(n,e,r){return e==="point"?{mode:e,trials:n.map(t=>t.point)}:e==="bounds"?{mode:e,trials:n.map(t=>t.bounds)}:{mode:e,ranges:r,trials:n.map(t=>{const i={};for(const[o,u]of Object.entries(t.sample))g9(u)&&(i[o]=UM(u));return{specs:i,lloads:t.lloads??null}})}}class Lt extends Error{constructor(e,r){super(`no trial has ${e} data for ${JSON.stringify(r)}`),this.missingParams=r,this.name="NoUsableTrialsError"}}function Pn(n,e,r){switch(e.mode){case"point":{const i=It(e.mode,e.trials,n.params,r.onIncompleteTrial).map(a=>n.params.map(c=>a[c])),o=i.map(a=>n.point(a));return{kind:"point",value:o.reduce((a,c)=>a+c,0)/o.length,perTrial:o,perTrialInputs:i}}case"bounds":{const t=It(e.mode,e.trials,n.params,r.onIncompleteTrial),i=t.map(c=>n.params.map(s=>c[s])),o=n.bounds;if(!o)throw new Error(Yt);const{lo:u,hi:a}=FM(i,o);return{kind:"bounds",lo:u,hi:a,tightness:n.boundsTightness??"loose",trialCount:t.length}}case"sample":return ZM(n,e,r)}}function It(n,e,r,t){const i=u=>n==="sample"?u.specs:u;if(e.length===0)throw t==="skip"?new Lt(n,r):new Error(`record has no trials with ${n} data`);if(t==="error"){for(const[u,a]of e.entries()){const c=r.filter(s=>i(a)[s]===void 0);if(c.length>0)throw new Error(`Missing required ${n} input(s) for trial ${u+1}: ${JSON.stringify(c)}`)}return e}const o=e.filter(u=>r.every(a=>i(u)[a]!==void 0));if(o.length===0){const u=r.filter(a=>i(e[0])[a]===void 0);throw new Lt(n,u)}return o}function ZM(n,e,r){if(r.precomputed)return V1(r.precomputed,!0);const t=r.mcIters;if(t===void 0)throw new Error("live sample evaluation requires opts.mcIters");if(n.params.length===0)throw new Error(`form ${n.key} has no params to Monte-Carlo over`);const i=It(e.mode,e.trials,n.params,r.onIncompleteTrial);if(n.sampleStage!==void 0)return nq(n,n.sampleStage,e,i,t,r.mcItersPerClick);const{matrixContentParts:o,sampleFreshBlock:u}=Gp(e,i),a=Hi("copula-matrix",o,t,r.mcItersPerClick,u),c=So([...a.matrixKeyParts,"form",n.key],()=>$o(Xt(n.params.map(l=>a.matrices.joint.get(l)),n.point))),s=i.some(l=>co(l.lloads))?null:S9(n,e,i);return{kind:"mc",mean:c.mean,median:c.median,p5:c.p5,p95:c.p95,samples:c.samples,densityCurve:null,provenance:"live",mcIters:a.totalIters,barrierInnerIters:null,mcPoolToken:a.poolToken,trialCount:i.length,exact:s}}function V1(n,e){return{kind:"mc",mean:n.mean,median:n.median,p5:n.p5,p95:n.p95,samples:null,densityCurve:n.density_curve??null,provenance:"precomputed",mcIters:n.mc_iters,barrierInnerIters:null,mcPoolToken:null,trialCount:0,exact:e&&n.sigma!=null?{mean:n.mean,sigma:n.sigma}:null}}function $9(n){return{independent:V1(n.independent,!0),joint:V1(n.joint,!1)}}function S9(n,e,r){return xM(r.map(t=>n.params.map(i=>t.specs[i])),n.closedFormMomentsShape,n.params.map(t=>e.ranges[t]))}function jp(n,e,r){if(e.mode!=="sample")throw new Error(`joint-dependence comparison requires sample inputs, got ${e.mode}`);if(r.precomputed)return $9(r.precomputed);const t=r.mcIters;if(t===void 0)throw new Error("live joint-dependence comparison requires opts.mcIters");if(n.params.length===0)throw new Error(`form ${n.key} has no params to Monte-Carlo over`);const i=It(e.mode,e.trials,n.params,r.onIncompleteTrial);if(n.sampleStage!==void 0)throw new Error(`joint dependence is not supported for form ${n.key}: correlation across an E[·] aggregation barrier has no defined semantics`);const{matrixContentParts:o,sampleFreshBlock:u}=Gp(e,i),a=Hi("copula-matrix",o,t,r.mcItersPerClick,u),c=(d,p)=>So([...a.matrixKeyParts,...p,"form",n.key],()=>$o(Xt(n.params.map(h=>d.get(h)),n.point))),s=c(a.matrices.joint,[]),l=c(a.matrices.independent,["independent"]),f=(d,p)=>({kind:"mc",mean:d.mean,median:d.median,p5:d.p5,p95:d.p95,samples:d.samples,densityCurve:null,provenance:"live",mcIters:a.totalIters,barrierInnerIters:null,mcPoolToken:a.poolToken,trialCount:i.length,exact:p});return{independent:f(l,S9(n,e,i)),joint:f(s,null)}}function Gp(n,e){const r=Object.keys(e[0].specs).filter(c=>e.every(s=>s.specs[c]!==void 0)).sort(),t=[r,e.map(c=>r.map(s=>c.specs[s])),r.map(c=>n.ranges[c]??null),e.map(c=>c.lloads)],i=()=>e.map(c=>r.map(s=>j1(c.specs[s],n.ranges[s]))),o=c=>new Map(r.map((s,l)=>[s,c[l]]));return{matrixContentParts:t,sampleFreshBlock:c=>{const s=BM(i(),e.map(d=>d.lloads),r,c),l=o(s.independent),f=s.joint===s.independent?l:o(s.joint);return{independent:l,joint:f}},sampleFreshJointBlock:c=>o(G1(i(),e.map(s=>s.lloads),r,c))}}function eq(n,e,r){if(e.mode!=="sample")throw new Error(`streaming mean evaluation requires sample inputs, got ${e.mode}`);if(n.sampleStage!==void 0)throw new Error(`streaming mean evaluation of ${n.key} is not supported for formulas with E[·] aggregation barriers`);const t=r.mcIters;if(t===void 0)throw new Error("streaming mean evaluation requires opts.mcIters");if(n.params.length===0)throw new Error(`form ${n.key} has no params to Monte-Carlo over`);const i=It(e.mode,e.trials,n.params,r.onIncompleteTrial),{matrixContentParts:o,sampleFreshJointBlock:u}=Gp(e,i),a=p=>Xt(n.params.map(h=>u(p).get(h)),n.point),c=r.mcItersPerClick;if(c===void 0){const p=["stream-mean",...o,t,"form",n.key];let h=z8(p);return h===void 0&&(h=J8(p),w1(h,a(t),0)),{mean:h.mean,n:h.n,standardError:Q8(h),mcPoolToken:null}}const s=["stream-mean-pool",...o,t,c],l=y9(s),f=[...s,"form",n.key];let d=z8(f);return d===void 0?(d=J8(f),w1(d,a(t+l.extraBlocks*c),l.extraBlocks)):l.extraBlocks>d.blocksFolded?w1(d,a((l.extraBlocks-d.blocksFolded)*c),l.extraBlocks):l.extraBlocks<d.blocksFolded&&(d.blocksFolded=l.extraBlocks),{mean:d.mean,n:d.n,standardError:Q8(d),mcPoolToken:l.token}}function Hi(n,e,r,t,i){if(t===void 0){const a=[n,...e,r];return{matrixKeyParts:a,poolToken:null,extraBlocks:0,totalIters:r,matrices:oq(a,()=>i(r))}}const o=[`${n}-pool`,...e,r,t],u=y9(o);return{matrixKeyParts:[...o,"blocks",u.extraBlocks],poolToken:u.token,extraBlocks:u.extraBlocks,totalIters:r+u.extraBlocks*t,matrices:aq(o,u.extraBlocks,r,t,i)}}function nq(n,e,r,t,i,o){if(t.some(E=>{var I;return(((I=E.lloads)==null?void 0:I.latents.length)??0)>0}))throw new Error(`joint dependence is not supported for form ${n.key}: correlation across an E[·] aggregation barrier has no defined semantics`);const u=n.barrierRegistry;if(u===void 0)throw new Error(`form ${n.key} contains an E[·] barrier but no barrier registry was provided — evaluating it without one would silently compute per-draw (pre-E) semantics`);if(n.closedFormMomentsShape!==void 0)throw new Error(`form ${n.key} contains an E[·] barrier yet carries closed-form-moments shape "${n.closedFormMomentsShape}" — codegen must suppress the tag for barrier forms, since the exact-moments path would override the barrier-aware mean`);const a=e.params.filter(E=>E.barrier);for(const E of a)if(u[E.name]===void 0)throw new Error(`form ${n.key}: barrier ${E.name} is not in the barrier registry`);const c=[...new Set(Object.values(u).flatMap(E=>E.params))].sort(),s=[],l=[],f=[],d=[];for(const E of t){const I=c.filter(k=>E.specs[k]!==void 0),A=[I,I.map(k=>E.specs[k]),I.map(k=>r.ranges[k]??null)],C=Hi("barrier-inner-matrix",A,i,o,k=>{const S=I.map($=>j1(E.specs[$],r.ranges[$])),w=G1([S],[null],I,k);return Z8(new Map(I.map(($,L)=>[$,w[L]])))});C.poolToken!==null&&s.push(C.poolToken),l.push(C.extraBlocks),f.push(C.totalIters),d.push(a.map(k=>rq(C.matrixKeyParts,C.matrices.joint,k.name,u[k.name])))}const p=Object.keys(t[0].specs).filter(E=>t.every(I=>I.specs[E]!==void 0)).sort(),h=a.map(E=>E.name),v=[p,t.map(E=>p.map(I=>E.specs[I])),p.map(E=>r.ranges[E]??null),"barriers",h,i,o??null,l,d],b=Hi("copula-matrix",v,i,o,E=>{const I=[...p,...h],A=t.map((S,w)=>[...p.map($=>j1(S.specs[$],r.ranges[$])),...d[w].map($=>m9({pairs:[[$,1],[$,1]]}))]),C=G1(A,t.map(()=>null),I,E),k=new Map(I.map((S,w)=>[S,C[w]]));if(k.size!==I.length)throw new Error(`barrier key collides with a svar column name (${JSON.stringify(I)})`);return Z8(k)}),g=e.params.map(E=>{const I=b.matrices.joint.get(E.name);if(I===void 0)throw new Error(`form ${n.key}: no sampled column for sample-stage param ${E.name}`);return I}),_=So([...b.matrixKeyParts,"form",n.key],()=>$o(Xt(g,e.point))),y=b.poolToken===null?null:E9([b.poolToken,...s]);return{kind:"mc",mean:_.mean,median:_.median,p5:_.p5,p95:_.p95,samples:_.samples,densityCurve:null,provenance:"live",mcIters:b.totalIters,barrierInnerIters:Math.min(...f),mcPoolToken:y,trialCount:t.length,exact:null}}function rq(n,e,r,t){return So([...n,"barrier",r],()=>{const o=t.params.map(f=>{const d=e.get(f);if(d===void 0)throw new Error(`barrier ${r}: trial has no inner sample column for leaf ${f}`);return d}),u=Xt(o,t.point);for(const f of u)if(!Number.isFinite(f))throw new Error(`barrier ${r}: non-finite operand draw (${f})`);const a=$o(u);if(!Number.isFinite(a.mean))throw new Error(`barrier ${r}: non-finite mean (${a.mean})`);const c=u.length;let s=0;for(const f of u)s+=(f-a.mean)**2;const l=Math.sqrt(s/c/c)/Math.abs(a.mean);return console.debug(`[E-barrier] ${r}: n=${c} mean=${a.mean} relSE=${l}`),a}).mean}const tq=8,iq=6e6,Nn=new Map;let _i=0;function Z8(n){return{independent:n,joint:n}}function eg(n){let e=0;const r=new Set;for(const t of[n.independent,n.joint])for(const i of t.values())r.has(i)||(r.add(i),e+=i.length);return e}function X1(n){const e=Nn.get(n);return e!==void 0&&(Nn.delete(n),Nn.set(n,e)),e}function Y1(n,e){for(Nn.set(n,e),_i+=eg(e);(Nn.size>tq||_i>iq)&&Nn.size>1;){const r=Nn.keys().next().value;_i-=eg(Nn.get(r)),Nn.delete(r)}return e}function oq(n,e){const r=Ir(n);return X1(r)??Y1(r,e())}function ng(n,e){const r=new Map;for(const[t,i]of n){const o=e.get(t);if(o===void 0)throw new Error(`concatSampleMatrices: fresh block lacks column for svar ${t}`);const u=new Float64Array(i.length+o.length);u.set(i,0),u.set(o,i.length),r.set(t,u)}return r}function uq(n,e){const r=ng(n.independent,e.independent),t=n.independent===n.joint&&e.independent===e.joint?r:ng(n.joint,e.joint);return{independent:r,joint:t}}function aq(n,e,r,t,i){const o=s=>Ir([...n,"blocks",s]),u=X1(o(e));if(u!==void 0)return u;let a=e-1,c;for(;a>=0&&(c=X1(o(a)))===void 0;)a--;c===void 0&&(c=Y1(o(0),i(r)),a=0);for(let s=a+1;s<=e;s++)c=Y1(o(s),uq(c,i(t)));return c}function sq(){Nn.clear(),_i=0}const cq=5,lq=5,fq=[0,.25,.5,.75,1];function Ao(n){return n==="probability"?[0,1]:null}function dq(n,e){const r=cq/100*(e-n);return[n-r,e+r]}function Vp(n,e,r){return n??dq(e,r)}function pq(n){return Math.max(0,-Math.floor(Math.log10(n)))}function hq(n){const e=10**Math.floor(Math.log10(n)),r=n/e;return(r<=1?1:r<=2?2:r<=5?5:10)*e}function xi(n,e){if(n===0&&e===1)return fq.map(u=>({value:u,label:u.toFixed(2)}));if(e<=n)return[{value:n,label:n.toFixed(2)}];const r=hq((e-n)/lq),t=pq(r),i=[],o=r*1e-9;for(let u=Math.ceil(n/r)*r;u<=e+o;u+=r){const a=Math.abs(u)<o?0:u;i.push({value:a,label:a.toFixed(t)})}return i}const rg=4,vq=.25,mq=2.5066282746310002;function A9(n,e,r,t){const i=n.length;let o=0,u=0;for(let p=0;p<i;p++)o+=n[p],u+=n[p]*n[p];const a=o/i,c=Math.max(0,u/i-a*a),s=Math.sqrt(c),l=vq*s*i**-.2;if(l<=0)return null;const f=new Float64Array(e);let d=0;for(let p=0;p<e;p++){const h=r+(t-r)*p/(e-1);let v=0;for(let m=0;m<i;m++){const b=(h-n[m])/l;if(!(b>rg)){if(b<-rg)break;v+=Math.exp(-.5*b*b)}}f[p]=v/(i*l*mq),f[p]>d&&(d=f[p])}return{density:f,maxD:d}}const ke={top:4,bottom:18,left:4,right:4},bq="12px -apple-system, Helvetica, sans-serif",k9="#333",ko=1.5;function Bi(n,e,r,t,i){const o=n.width,u=n.height,a=n.getContext("2d");if(!a)return;a.clearRect(0,0,o,u);const c=o-ke.left-ke.right,s=u-ke.top-ke.bottom,l=ke.top+s;let f,d;if(e instanceof Float64Array){if(e.length===0)return;[f,d]=Vp(i,e[0],e[e.length-1])}else f=e.start,d=e.end;if(d<=f){ug(a,ke.left+c/2,s),bt(a,[{value:f,label:f.toFixed(2)}],()=>ke.left+c/2,l);return}const p=b=>ke.left+(b-f)/(d-f)*c;let h,v;const m=Math.round(c);if(e instanceof Float64Array){if(e[e.length-1]-e[0]<(d-f)/c){ug(a,p((e[0]+e[e.length-1])/2),s),bt(a,xi(f,d),p,l);return}const g=A9(e,m,f,d);if(!g)return;h=g.density,v=g.maxD}else{h=new Float64Array(m),v=1;const b=e.heights.length;for(let g=0;g<m;g++){const y=(f+(d-f)*g/(m-1)-e.start)/(e.end-e.start)*(b-1),E=Math.floor(y),I=Math.min(E+1,b-1),A=y-E;h[g]=e.heights[E]*(1-A)+e.heights[I]*A}}if(!(v<=0)){a.fillStyle="#e8e8e8",a.fillRect(p(r),ke.top,p(t)-p(r),s),a.beginPath();for(let b=0;b<m;b++){const g=ke.left+b/(m-1)*c,_=ke.top+s-h[b]/v*s;b===0?a.moveTo(g,_):a.lineTo(g,_)}a.strokeStyle=k9,a.lineWidth=ko,a.stroke(),bt(a,xi(f,d),p,l)}}function gq(n,e,r,t){const i=n.width,o=n.height,u=n.getContext("2d");if(!u)return;u.clearRect(0,0,i,o);const a=i-ke.left-ke.right,c=o-ke.top-ke.bottom,s=ke.top+c,l=[e.source,r.source].map(g=>_q(g,t)),f=(t==null?void 0:t[0])??Math.min(l[0][0],l[1][0]),d=(t==null?void 0:t[1])??Math.max(l[0][1],l[1][1]),p=g=>ke.left+(g-f)/(d-f)*a;if(d<=f){L9(u,ke.left+a/2,c,"#2166ac"),bt(u,[{value:f,label:f.toFixed(2)}],()=>ke.left+a/2,s);return}const h=Math.round(a),v=tg(e.source,h,f,d),m=tg(r.source,h,f,d);let b=0;for(const g of[v,m])if(g.density!==null)for(const _ of g.density)b=Math.max(b,_);u.fillStyle="rgba(110, 110, 110, 0.12)",u.fillRect(p(e.p5),ke.top,p(e.p95)-p(e.p5),c),u.fillStyle="rgba(33, 102, 172, 0.12)",u.fillRect(p(r.p5),ke.top,p(r.p95)-p(r.p5),c),og(u,v,h,a,c,b,"#777",!0,p),og(u,m,h,a,c,b,"#2166ac",!1,p),bt(u,xi(f,d),p,s)}function _q(n,e){if(!(n instanceof Float64Array))return[n.start,n.end];if(n.length===0)throw new Error("density overlay source has no samples");return Vp(e,n[0],n[n.length-1])}function tg(n,e,r,t){if(n instanceof Float64Array){if(n.length===0)throw new Error("density overlay source has no samples");if(n[n.length-1]-n[0]<(t-r)/e)return{density:null,pointMassX:(n[0]+n[n.length-1])/2};const a=A9(n,e,r,t);return a===null?{density:null,pointMassX:(n[0]+n[n.length-1])/2}:(ig(a.density,r,t),{density:a.density,pointMassX:null})}const i=new Float64Array(e),o=n.heights.length;for(let u=0;u<e;u++){const a=r+(t-r)*u/(e-1);if(a<n.start||a>n.end||n.end<=n.start||o===0){i[u]=0;continue}const c=(a-n.start)/(n.end-n.start)*(o-1),s=Math.floor(c),l=Math.min(s+1,o-1),f=c-s;i[u]=n.heights[s]*(1-f)+n.heights[l]*f}return ig(i,r,t),{density:i,pointMassX:null}}function ig(n,e,r){const t=(r-e)/Math.max(1,n.length-1);let i=0;for(const o of n)i+=o*t;if(!(i<=0))for(let o=0;o<n.length;o++)n[o]=n[o]/i}function og(n,e,r,t,i,o,u,a,c){if(e.pointMassX!==null){L9(n,c(e.pointMassX),i,u);return}if(!(e.density===null||o<=0)){n.beginPath();for(let s=0;s<r;s++){const l=ke.left+s/(r-1)*t,f=ke.top+i-e.density[s]/o*i;s===0?n.moveTo(l,f):n.lineTo(l,f)}n.strokeStyle=u,n.lineWidth=ko,n.setLineDash(a?[5,4]:[]),n.stroke(),n.setLineDash([])}}function ug(n,e,r){n.beginPath(),n.moveTo(e,ke.top+r),n.lineTo(e,ke.top),n.strokeStyle=k9,n.lineWidth=ko,n.stroke()}function L9(n,e,r,t){n.beginPath(),n.moveTo(e,ke.top+r),n.lineTo(e,ke.top),n.strokeStyle=t,n.lineWidth=ko,n.stroke()}function bt(n,e,r,t){n.strokeStyle="#bbb",n.lineWidth=.5,n.fillStyle="#4d4d4d",n.font=bq,n.textAlign="center";for(const i of e){const o=r(i.value);n.beginPath(),n.moveTo(o,t),n.lineTo(o,t+3),n.stroke(),n.fillText(i.label,o,t+12)}}const Lo=["plainnum","plaincode","richcode"];function I9(n){return n==="all"||Lo.includes(n)}function Xp(n){return Lo.filter(e=>n.some(r=>r.availableModes.includes(e)))}function Io(n,e){return n==="all"?"all":Xp(e).includes(n)?n:"all"}function Ro(n,e){return n.availableModes.includes(e)}function yq(n,e,r){const t=Io(e,r);return t==="all"?Ui(n,n.availableModes[0]):Ro(n,t)?Ui(n,t):null}function R9(n,e){const r=Io(e,n);for(const t of n){const i=r==="all"?Ui(t,t.availableModes[0]):Ro(t,r)?Ui(t,r):null;if(i)return i}return null}function Ui(n,e){return e==="plainnum"&&n.plainnumIndex!==null?`metho-plainnum:${n.plainnumIndex}`:e==="plaincode"&&n.plaincodeIndex!==null?`metho-plaincode:${n.plaincodeIndex}`:e==="richcode"&&n.richcodeIndex!==null?`metho-richcode:${n.richcodeIndex}`:null}function Yp(n,e){const{source:r,index:t}=me(n);if(Ze(r)!=="metho")return null;const i=bn(r);for(let o=0;o<e.length;o++){const u=e[o];if(i==="plainnum"&&u.plainnumIndex===t)return{group:u,groupIndex:o,mode:"plainnum"};if(i==="plaincode"&&u.plaincodeIndex===t)return{group:u,groupIndex:o,mode:"plaincode"};if(i==="richcode"&&u.richcodeIndex===t)return{group:u,groupIndex:o,mode:"richcode"}}return null}function C9(n,e){return e==="plainnum"&&n.plainnumIndex!==null?`metho-plainnum:${n.plainnumIndex}`:e==="plaincode"&&n.plaincodeIndex!==null?`metho-plaincode:${n.plaincodeIndex}`:e==="richcode"&&n.richcodeIndex!==null?`metho-richcode:${n.richcodeIndex}`:null}function Eq(n,e,r,t,i){const o=t.ui.whose,{source:u}=me(o),a=Ze(u)==="metho",c=p7(u);let s='<div class="whose-toggle">';const l=De(o)?o:t.ui.lastYoursWhose;if(s+=`<button class="whose-btn${De(o)?" active":""}" data-whose="${l}">Yours</button>`,De(o)&&e.has_cparams()){const d=o==="yours-plaincode";s+='<div class="mode-radio yours-fixfree-radio">',s+=`<button class="mode-radio-btn${d?"":" active"}" data-whose="yours-plainnum">fix</button>`,s+=`<button class="mode-radio-btn${d?" active":""}" data-whose="yours-plaincode">free</button>`,s+="</div>"}if(r.adhocPlainnumEntries.length>0||r.adhocPlaincodeEntries.length>0){s+=`<select id="adhoc-result-select" class="whose-select${c?" whose-select-active":""}${a?" whose-select-faded":""}" data-whose-source="adhoc">`,s+=`<option value="" disabled${c?"":" selected"}>Adhoc…</option>`;for(const h of f7){const v=d7(r,h);for(let m=0;m<v.length;m++){const b=v[m],g=r.adhocPresets[b.presetIndex],_=R$(g,h,b);if(!_)continue;const y=q$(g,h,_),E=`adhoc-${h}:${m}`;s+=`<option value="${E}"${o===E?" selected":""}>${ne(y)}</option>`}}s+="</select>"}if(i.length>0){const d=a?Yp(o,i):null,p=c?" whose-select-faded":"",h=a?" whose-select-active":"",v=H$(i),m=Xp(i),b=Io(t.ui.presetQueryModeFilter,i),g=m.length>=2,_=i.map((y,E)=>({group:y,groupIndex:E})).filter(({group:y})=>b==="all"||Ro(y,b));if(s+='<div class="methodical-select-stack">',g){s+='<select id="preset-query-mode-filter" class="preset-query-mode-filter">',s+=`<option value="all"${b==="all"?" selected":""}>all</option>`;for(const y of Lo){if(!m.includes(y))continue;s+=`<option value="${y}"${b===y?" selected":""}>${y}</option>`}s+="</select>"}s+=`<select id="methodical-result-select" class="whose-select${h}${p}" data-whose-source="ai-results">`,s+=`<option value="" disabled${a?"":" selected"}>AI results…</option>`;for(const{groupIndex:y}of _){const E=v[y],I=d&&d.groupIndex===y?" selected":"";s+=`<option value="group:${y}"${I}>${ne(E)}</option>`}if(s+="</select>",s+="</div>",d&&d.group.availableModes.length>=1){s+='<div id="query-mode-radio" class="mode-radio">';for(const y of d.group.availableModes){const E=d.mode===y;s+=`<button class="mode-radio-btn${E?" active":""}" data-mode="${y}">${y}</button>`}s+="</div>"}}if(s+="</div>",a&&e.get_aopt_bare_names().includes("framing_POVs_enabled")){const d=Je(o,r);if(!d)throw new Error(`No active methodical result for whose selection ${JSON.stringify(o)}`);const p=d.aopts.framing_POVs_enabled;if(!Array.isArray(p)||!p.every(h=>typeof h=="string"))throw new Error("Methodical result framing_POVs_enabled must be a string array, got "+JSON.stringify(p));s+=`<div class="methodical-framing-povs">Framing: ${ne(p.join(" "))}</div>`}n.innerHTML=s}function wq(n,e,r,t){var p;const i=t.ui.whose;if(De(i))return n.innerHTML="",!1;const o=Je(i,r);if(!o)return n.innerHTML='<div style="color: #888; font-size: 13px;">No data.</div>',!1;const u=t.ui.inputMode,a=e.svar_entries().map(h=>h.bareName),c=a.length,s=j$(i,o,u,a),l=s.length;if(l===0)return n.innerHTML='<div style="color: #888; font-size: 13px;">No data for this mode.</div>',!1;const f=l>1;let d='<div class="sample-grid">';for(let h=0;h<l;h++){d+='<div class="sample-col">',f&&(d+=`<div class="sample-col-header">Sample ${h+1}</div>`);for(let v=0;v<c;v++){const m=((p=s[h])==null?void 0:p[v])??"";d+=`<div class="sample-cell">${ne(m)}</div>`}d+="</div>"}return d+="</div>",n.innerHTML=d,f}function $q(n){return n.precomputed[Jn]??null}function ag(n,e,r){if(De(n))return!0;const t=Je(n,e);return t?v7(n,t)[r]:!1}function Sq(n){const e=n.config.conclusion_expr;return n.get_display_expr(e)??e}function Kt(n,e){return Se(Sq(n),e)}const Fr={top:10,bottom:35,left:50,right:15},Aq=800,kq=500,sg="12px Consolas, Monaco, Courier New, monospace",Lq=5,Iq=3,cg=3,lg=5,Rq=10,Cq=1,Mq=15,fg=["#333","#c44","#44c","#4c4","#c84","#84c","#4cc","#c4c","#888","#ca4"];function qq(n,e,r=Rq){if(e)return e;let t=1/0,i=-1/0;for(const c of n)for(const s of c.points)s.y<t&&(t=s.y),s.y>i&&(i=s.y);if(!Number.isFinite(t)||!Number.isFinite(i))return null;const a=(i-t||Cq)*r/100;return[t-a,i+a]}function Wi(n,e,r){n.width||(n.width=Aq),n.height||(n.height=kq);const t=n.width,i=n.height,o=n.getContext("2d");if(!o||(o.clearRect(0,0,t,i),e.length===0))return;const u=i-Fr.top-Fr.bottom,a=qq(e,r.yRange,r.yRangePaddingPercent);if(!a)return;const[c,s]=a,l=Nq(c,s,Lq),f=l.length>1?l[1]-l[0]:s-c,d=l.map(k=>Fq(k,f));o.font=sg;const p=d.reduce((k,S)=>Math.max(k,o.measureText(S).width),0),h=Math.max(Fr.left,Math.ceil(p)+cg+lg),v=t-h-Fr.right;if(v<=0)return;const m=r.xLabels.length,b=m>1?v/(m-1):0,g=k=>h+k*b,_=k=>Fr.top+u-(k-c)/(s-c)*u;o.save(),o.strokeStyle="#ddd",o.lineWidth=.5,o.setLineDash([3,3]);for(const k of l){const S=_(k);o.beginPath(),o.moveTo(h,S),o.lineTo(h+v,S),o.stroke()}o.restore();const y=e.length===1;for(let k=0;k<e.length;k++){const S=e[k],w=S.color??(y?"#333":fg[k%fg.length]),$=y?2:1.5;o.beginPath();for(let L=0;L<S.points.length;L++){const R=g(L),T=_(S.points[L].y);L===0?o.moveTo(R,T):o.lineTo(R,T)}o.strokeStyle=w,o.lineWidth=$,o.stroke(),o.fillStyle=w;for(let L=0;L<S.points.length;L++){const R=g(L),T=_(S.points[L].y);o.beginPath(),o.arc(R,T,Iq,0,Math.PI*2),o.fill()}}const E=Fr.top+u;o.strokeStyle="#bbb",o.lineWidth=.5,o.fillStyle="#4d4d4d",o.font=sg,o.textAlign="center",o.textBaseline="top";const I=r.xLabels.reduce((k,S)=>Math.max(k,o.measureText(S).width),0),A=m>1?b:v,C=I>A-4;for(let k=0;k<m;k++){const S=g(k);o.beginPath(),o.moveTo(S,E),o.lineTo(S,E+3),o.stroke(),o.save(),C?(o.translate(S,E+5),o.rotate(-Math.PI/4),o.textAlign="right",o.fillText(r.xLabels[k],0,0)):o.fillText(r.xLabels[k],S,E+5),o.restore()}o.fillStyle="#777",o.textAlign="center",o.textBaseline="bottom",o.fillText(r.xAxisLabel,h+v/2,i-1),o.fillStyle="#4d4d4d",o.textAlign="right",o.textBaseline="middle";for(let k=0;k<l.length;k++){const S=l[k],w=_(S);o.strokeStyle="#bbb",o.lineWidth=.5,o.beginPath(),o.moveTo(h-cg,w),o.lineTo(h,w),o.stroke(),o.fillText(d[k],h-lg,w)}}function Nq(n,e,r){const t=e-n;if(t<=0)return[n];const i=t/(r-1),o=Math.pow(10,Math.floor(Math.log10(i))),u=i/o;let a;u<=1.5?a=1*o:u<=3.5?a=2*o:u<=7.5?a=5*o:a=10*o;const c=Math.ceil(n/a)*a,s=[];for(let l=c;l<=e+a*.001;l+=a)s.push(l);return s}function Fq(n,e){if(Number.isInteger(n)||!Number.isFinite(e)||e<=0)return n.toString();const r=Math.min(Mq,Math.max(0,-Math.floor(Math.log10(e)))),t=n.toFixed(r).replace(/0+$/,"").replace(/\.$/,"");return t==="-0"?"0":t}const je={top:10,bottom:35,left:60,right:60},dg=80,pg=60,Tq=35,K1="12px Consolas, Monaco, Courier New, monospace",Oq="12px Consolas, Monaco, Courier New, monospace",M9="#ddd",Dq="#eee",Pq=220,hg=10,Hq=80,xq=25,vg=95,di=12,Bq=8,mg=4,$1=64;function ji(n,e){var m;const r=e.xLabels.length,t=e.yLabels.length;if(r===0||t===0)return;let i,o,u,a;n.width&&n.height?(i=n.width,o=n.height,u=(i-je.left-je.right)/r,a=(o-je.top-je.bottom)/t):(u=Math.max(dg,dg),a=Math.max(pg,pg),i=je.left+r*u+je.right,o=je.top+t*a+je.bottom,n.width=i,n.height=o);const c=n.getContext("2d");if(!c)return;c.clearRect(0,0,i,o);let s,l,f;if(e.valueRange)[s,l]=e.valueRange,f=!0;else{s=1/0,l=-1/0;for(const b of e.cells)for(const g of b)g!==null&&(g<s&&(s=g),g>l&&(l=g));f=isFinite(s)&&isFinite(l)}const d=f&&l-s||1,p=u>=Tq;c.font=Oq,c.textAlign="center",c.textBaseline="middle";for(let b=0;b<t;b++)for(let g=0;g<r;g++){const _=je.left+g*u,y=je.top+b*a,E=((m=e.cells[b])==null?void 0:m[g])??null;if(E===null)c.fillStyle=Dq,c.fillRect(_,y,u,a);else{const I=f?(E-s)/d:0;c.fillStyle=q9(I),c.fillRect(_,y,u,a),p&&(c.fillStyle=I>.55?"#fff":"#333",c.fillText(z1(E),_+u/2,y+a/2))}c.strokeStyle=M9,c.lineWidth=1,c.strokeRect(_,y,u,a)}c.fillStyle="#4d4d4d",c.font=K1,c.textBaseline="top";const v=e.xLabels.reduce((b,g)=>Math.max(b,c.measureText(g).width),0)>u-4;for(let b=0;b<r;b++){const g=je.left+b*u+u/2,_=je.top+t*a+4;c.save(),c.textAlign="center",v?(c.translate(g,_),c.rotate(-Math.PI/4),c.textAlign="right",c.fillText(e.xLabels[b],0,0)):c.fillText(e.xLabels[b],g,_),c.restore()}c.fillStyle="#777",c.textAlign="center",c.textBaseline="bottom",c.fillText(e.xAxisLabel,je.left+r*u/2,o-1),c.fillStyle="#4d4d4d",c.font=K1,c.textAlign="right",c.textBaseline="middle";for(let b=0;b<t;b++){const g=je.top+b*a+a/2;c.fillText(e.yLabels[b],je.left-5,g)}c.save(),c.fillStyle="#777",c.textAlign="center",c.textBaseline="top",c.translate(8,je.top+t*a/2),c.rotate(-Math.PI/2),c.fillText(e.yAxisLabel,0,0),c.restore(),f&&Uq(c,i,o,t*a,s,l)}function q9(n){const e=hg+(Hq-hg)*n,r=vg+(xq-vg)*n;return`hsl(${Pq}, ${e.toFixed(0)}%, ${r.toFixed(0)}%)`}function z1(n){return Number.isInteger(n)?n.toString():n.toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}function Uq(n,e,r,t,i,o){const u=e-je.right+Bq,a=je.top,c=t,s=c/$1;for(let l=0;l<$1;l++){const f=1-l/($1-1);n.fillStyle=q9(f),n.fillRect(u,a+l*s,di,s+1)}n.strokeStyle=M9,n.lineWidth=1,n.strokeRect(u,a,di,c),n.fillStyle="#4d4d4d",n.font=K1,n.textAlign="left",n.textBaseline="middle",n.fillText(z1(o),u+di+mg,a),n.fillText(z1(i),u+di+mg,a+c)}const bg={};function Wq(n){let e=bg[n];if(e)return e;e=bg[n]=[];for(let r=0;r<128;r++){const t=String.fromCharCode(r);e.push(t)}for(let r=0;r<n.length;r++){const t=n.charCodeAt(r);e[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2)}return e}function Hr(n,e){typeof e!="string"&&(e=Hr.defaultChars);const r=Wq(e);return n.replace(/(%[a-f0-9]{2})+/gi,function(t){let i="";for(let o=0,u=t.length;o<u;o+=3){const a=parseInt(t.slice(o+1,o+3),16);if(a<128){i+=r[a];continue}if((a&224)===192&&o+3<u){const c=parseInt(t.slice(o+4,o+6),16);if((c&192)===128){const s=a<<6&1984|c&63;s<128?i+="��":i+=String.fromCharCode(s),o+=3;continue}}if((a&240)===224&&o+6<u){const c=parseInt(t.slice(o+4,o+6),16),s=parseInt(t.slice(o+7,o+9),16);if((c&192)===128&&(s&192)===128){const l=a<<12&61440|c<<6&4032|s&63;l<2048||l>=55296&&l<=57343?i+="���":i+=String.fromCharCode(l),o+=6;continue}}if((a&248)===240&&o+9<u){const c=parseInt(t.slice(o+4,o+6),16),s=parseInt(t.slice(o+7,o+9),16),l=parseInt(t.slice(o+10,o+12),16);if((c&192)===128&&(s&192)===128&&(l&192)===128){let f=a<<18&1835008|c<<12&258048|s<<6&4032|l&63;f<65536||f>1114111?i+="����":(f-=65536,i+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),o+=9;continue}}i+="�"}return i})}Hr.defaultChars=";/?:@&=+$,#";Hr.componentChars="";const gg={};function jq(n){let e=gg[n];if(e)return e;e=gg[n]=[];for(let r=0;r<128;r++){const t=String.fromCharCode(r);/^[0-9a-z]$/i.test(t)?e.push(t):e.push("%"+("0"+r.toString(16).toUpperCase()).slice(-2))}for(let r=0;r<n.length;r++)e[n.charCodeAt(r)]=n[r];return e}function zt(n,e,r){typeof e!="string"&&(r=e,e=zt.defaultChars),typeof r>"u"&&(r=!0);const t=jq(e);let i="";for(let o=0,u=n.length;o<u;o++){const a=n.charCodeAt(o);if(r&&a===37&&o+2<u&&/^[0-9a-f]{2}$/i.test(n.slice(o+1,o+3))){i+=n.slice(o,o+3),o+=2;continue}if(a<128){i+=t[a];continue}if(a>=55296&&a<=57343){if(a>=55296&&a<=56319&&o+1<u){const c=n.charCodeAt(o+1);if(c>=56320&&c<=57343){i+=encodeURIComponent(n[o]+n[o+1]),o++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(n[o])}return i}zt.defaultChars=";/?:@&=+$,-_.!~*'()#";zt.componentChars="-_.!~*'()";function Kp(n){let e="";return e+=n.protocol||"",e+=n.slashes?"//":"",e+=n.auth?n.auth+"@":"",n.hostname&&n.hostname.indexOf(":")!==-1?e+="["+n.hostname+"]":e+=n.hostname||"",e+=n.port?":"+n.port:"",e+=n.pathname||"",e+=n.search||"",e+=n.hash||"",e}function Gi(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const Gq=/^([a-z0-9.+-]+:)/i,Vq=/:[0-9]*$/,Xq=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Yq=["<",">",'"',"`"," ","\r",`
`,"	"],Kq=["{","}","|","\\","^","`"].concat(Yq),zq=["'"].concat(Kq),_g=["%","/","?",";","#"].concat(zq),yg=["/","?","#"],Jq=255,Eg=/^[+a-z0-9A-Z_-]{0,63}$/,Qq=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,wg={javascript:!0,"javascript:":!0},$g={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function zp(n,e){if(n&&n instanceof Gi)return n;const r=new Gi;return r.parse(n,e),r}Gi.prototype.parse=function(n,e){let r,t,i,o=n;if(o=o.trim(),!e&&n.split("#").length===1){const s=Xq.exec(o);if(s)return this.pathname=s[1],s[2]&&(this.search=s[2]),this}let u=Gq.exec(o);if(u&&(u=u[0],r=u.toLowerCase(),this.protocol=u,o=o.substr(u.length)),(e||u||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=o.substr(0,2)==="//",i&&!(u&&wg[u])&&(o=o.substr(2),this.slashes=!0)),!wg[u]&&(i||u&&!$g[u])){let s=-1;for(let h=0;h<yg.length;h++)t=o.indexOf(yg[h]),t!==-1&&(s===-1||t<s)&&(s=t);let l,f;s===-1?f=o.lastIndexOf("@"):f=o.lastIndexOf("@",s),f!==-1&&(l=o.slice(0,f),o=o.slice(f+1),this.auth=l),s=-1;for(let h=0;h<_g.length;h++)t=o.indexOf(_g[h]),t!==-1&&(s===-1||t<s)&&(s=t);s===-1&&(s=o.length),o[s-1]===":"&&s--;const d=o.slice(0,s);o=o.slice(s),this.parseHost(d),this.hostname=this.hostname||"";const p=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!p){const h=this.hostname.split(/\./);for(let v=0,m=h.length;v<m;v++){const b=h[v];if(b&&!b.match(Eg)){let g="";for(let _=0,y=b.length;_<y;_++)b.charCodeAt(_)>127?g+="x":g+=b[_];if(!g.match(Eg)){const _=h.slice(0,v),y=h.slice(v+1),E=b.match(Qq);E&&(_.push(E[1]),y.unshift(E[2])),y.length&&(o=y.join(".")+o),this.hostname=_.join(".");break}}}}this.hostname.length>Jq&&(this.hostname=""),p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const a=o.indexOf("#");a!==-1&&(this.hash=o.substr(a),o=o.slice(0,a));const c=o.indexOf("?");return c!==-1&&(this.search=o.substr(c),o=o.slice(0,c)),o&&(this.pathname=o),$g[r]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Gi.prototype.parseHost=function(n){let e=Vq.exec(n);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),n=n.substr(0,n.length-e.length)),n&&(this.hostname=n)};const Zq=Object.freeze(Object.defineProperty({__proto__:null,decode:Hr,encode:zt,format:Kp,parse:zp},Symbol.toStringTag,{value:"Module"})),N9=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,F9=/[\0-\x1F\x7F-\x9F]/,eN=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Jp=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,T9=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,O9=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,nN=Object.freeze(Object.defineProperty({__proto__:null,Any:N9,Cc:F9,Cf:eN,P:Jp,S:T9,Z:O9},Symbol.toStringTag,{value:"Module"})),rN=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(n=>n.charCodeAt(0))),tN=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(n=>n.charCodeAt(0)));var S1;const iN=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),oN=(S1=String.fromCodePoint)!==null&&S1!==void 0?S1:function(n){let e="";return n>65535&&(n-=65536,e+=String.fromCharCode(n>>>10&1023|55296),n=56320|n&1023),e+=String.fromCharCode(n),e};function uN(n){var e;return n>=55296&&n<=57343||n>1114111?65533:(e=iN.get(n))!==null&&e!==void 0?e:n}var Ve;(function(n){n[n.NUM=35]="NUM",n[n.SEMI=59]="SEMI",n[n.EQUALS=61]="EQUALS",n[n.ZERO=48]="ZERO",n[n.NINE=57]="NINE",n[n.LOWER_A=97]="LOWER_A",n[n.LOWER_F=102]="LOWER_F",n[n.LOWER_X=120]="LOWER_X",n[n.LOWER_Z=122]="LOWER_Z",n[n.UPPER_A=65]="UPPER_A",n[n.UPPER_F=70]="UPPER_F",n[n.UPPER_Z=90]="UPPER_Z"})(Ve||(Ve={}));const aN=32;var ur;(function(n){n[n.VALUE_LENGTH=49152]="VALUE_LENGTH",n[n.BRANCH_LENGTH=16256]="BRANCH_LENGTH",n[n.JUMP_TABLE=127]="JUMP_TABLE"})(ur||(ur={}));function J1(n){return n>=Ve.ZERO&&n<=Ve.NINE}function sN(n){return n>=Ve.UPPER_A&&n<=Ve.UPPER_F||n>=Ve.LOWER_A&&n<=Ve.LOWER_F}function cN(n){return n>=Ve.UPPER_A&&n<=Ve.UPPER_Z||n>=Ve.LOWER_A&&n<=Ve.LOWER_Z||J1(n)}function lN(n){return n===Ve.EQUALS||cN(n)}var Ge;(function(n){n[n.EntityStart=0]="EntityStart",n[n.NumericStart=1]="NumericStart",n[n.NumericDecimal=2]="NumericDecimal",n[n.NumericHex=3]="NumericHex",n[n.NamedEntity=4]="NamedEntity"})(Ge||(Ge={}));var tr;(function(n){n[n.Legacy=0]="Legacy",n[n.Strict=1]="Strict",n[n.Attribute=2]="Attribute"})(tr||(tr={}));class fN{constructor(e,r,t){this.decodeTree=e,this.emitCodePoint=r,this.errors=t,this.state=Ge.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=tr.Strict}startEntity(e){this.decodeMode=e,this.state=Ge.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,r){switch(this.state){case Ge.EntityStart:return e.charCodeAt(r)===Ve.NUM?(this.state=Ge.NumericStart,this.consumed+=1,this.stateNumericStart(e,r+1)):(this.state=Ge.NamedEntity,this.stateNamedEntity(e,r));case Ge.NumericStart:return this.stateNumericStart(e,r);case Ge.NumericDecimal:return this.stateNumericDecimal(e,r);case Ge.NumericHex:return this.stateNumericHex(e,r);case Ge.NamedEntity:return this.stateNamedEntity(e,r)}}stateNumericStart(e,r){return r>=e.length?-1:(e.charCodeAt(r)|aN)===Ve.LOWER_X?(this.state=Ge.NumericHex,this.consumed+=1,this.stateNumericHex(e,r+1)):(this.state=Ge.NumericDecimal,this.stateNumericDecimal(e,r))}addToNumericResult(e,r,t,i){if(r!==t){const o=t-r;this.result=this.result*Math.pow(i,o)+parseInt(e.substr(r,o),i),this.consumed+=o}}stateNumericHex(e,r){const t=r;for(;r<e.length;){const i=e.charCodeAt(r);if(J1(i)||sN(i))r+=1;else return this.addToNumericResult(e,t,r,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(e,t,r,16),-1}stateNumericDecimal(e,r){const t=r;for(;r<e.length;){const i=e.charCodeAt(r);if(J1(i))r+=1;else return this.addToNumericResult(e,t,r,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(e,t,r,10),-1}emitNumericEntity(e,r){var t;if(this.consumed<=r)return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===Ve.SEMI)this.consumed+=1;else if(this.decodeMode===tr.Strict)return 0;return this.emitCodePoint(uN(this.result),this.consumed),this.errors&&(e!==Ve.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,r){const{decodeTree:t}=this;let i=t[this.treeIndex],o=(i&ur.VALUE_LENGTH)>>14;for(;r<e.length;r++,this.excess++){const u=e.charCodeAt(r);if(this.treeIndex=dN(t,i,this.treeIndex+Math.max(1,o),u),this.treeIndex<0)return this.result===0||this.decodeMode===tr.Attribute&&(o===0||lN(u))?0:this.emitNotTerminatedNamedEntity();if(i=t[this.treeIndex],o=(i&ur.VALUE_LENGTH)>>14,o!==0){if(u===Ve.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==tr.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;const{result:r,decodeTree:t}=this,i=(t[r]&ur.VALUE_LENGTH)>>14;return this.emitNamedEntityData(r,i,this.consumed),(e=this.errors)===null||e===void 0||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,r,t){const{decodeTree:i}=this;return this.emitCodePoint(r===1?i[e]&~ur.VALUE_LENGTH:i[e+1],t),r===3&&this.emitCodePoint(i[e+2],t),t}end(){var e;switch(this.state){case Ge.NamedEntity:return this.result!==0&&(this.decodeMode!==tr.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Ge.NumericDecimal:return this.emitNumericEntity(0,2);case Ge.NumericHex:return this.emitNumericEntity(0,3);case Ge.NumericStart:return(e=this.errors)===null||e===void 0||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Ge.EntityStart:return 0}}}function D9(n){let e="";const r=new fN(n,t=>e+=oN(t));return function(i,o){let u=0,a=0;for(;(a=i.indexOf("&",a))>=0;){e+=i.slice(u,a),r.startEntity(o);const s=r.write(i,a+1);if(s<0){u=a+r.end();break}u=a+s,a=s===0?u+1:u}const c=e+i.slice(u);return e="",c}}function dN(n,e,r,t){const i=(e&ur.BRANCH_LENGTH)>>7,o=e&ur.JUMP_TABLE;if(i===0)return o!==0&&t===o?r:-1;if(o){const c=t-o;return c<0||c>=i?-1:n[r+c]-1}let u=r,a=u+i-1;for(;u<=a;){const c=u+a>>>1,s=n[c];if(s<t)u=c+1;else if(s>t)a=c-1;else return n[c+i]}return-1}const pN=D9(rN);D9(tN);function P9(n,e=tr.Legacy){return pN(n,e)}function hN(n){return Object.prototype.toString.call(n)}function Qp(n){return hN(n)==="[object String]"}const vN=Object.prototype.hasOwnProperty;function mN(n,e){return vN.call(n,e)}function Co(n){return Array.prototype.slice.call(arguments,1).forEach(function(r){if(r){if(typeof r!="object")throw new TypeError(r+"must be object");Object.keys(r).forEach(function(t){n[t]=r[t]})}}),n}function H9(n,e,r){return[].concat(n.slice(0,e),r,n.slice(e+1))}function Zp(n){return!(n>=55296&&n<=57343||n>=64976&&n<=65007||(n&65535)===65535||(n&65535)===65534||n>=0&&n<=8||n===11||n>=14&&n<=31||n>=127&&n<=159||n>1114111)}function Vi(n){if(n>65535){n-=65536;const e=55296+(n>>10),r=56320+(n&1023);return String.fromCharCode(e,r)}return String.fromCharCode(n)}const x9=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,bN=/&([a-z#][a-z0-9]{1,31});/gi,gN=new RegExp(x9.source+"|"+bN.source,"gi"),_N=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function yN(n,e){if(e.charCodeAt(0)===35&&_N.test(e)){const t=e[1].toLowerCase()==="x"?parseInt(e.slice(2),16):parseInt(e.slice(1),10);return Zp(t)?Vi(t):n}const r=P9(n);return r!==n?r:n}function EN(n){return n.indexOf("\\")<0?n:n.replace(x9,"$1")}function xr(n){return n.indexOf("\\")<0&&n.indexOf("&")<0?n:n.replace(gN,function(e,r,t){return r||yN(e,t)})}const wN=/[&<>"]/,$N=/[&<>"]/g,SN={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function AN(n){return SN[n]}function cr(n){return wN.test(n)?n.replace($N,AN):n}const kN=/[.?*+^$[\]\\(){}|-]/g;function LN(n){return n.replace(kN,"\\$&")}function Re(n){switch(n){case 9:case 32:return!0}return!1}function Rt(n){if(n>=8192&&n<=8202)return!0;switch(n){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Ct(n){return Jp.test(n)||T9.test(n)}function Mt(n){switch(n){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Mo(n){return n=n.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(n=n.replace(/ẞ/g,"ß")),n.toLowerCase().toUpperCase()}const IN={mdurl:Zq,ucmicro:nN},RN=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:H9,assign:Co,escapeHtml:cr,escapeRE:LN,fromCodePoint:Vi,has:mN,isMdAsciiPunct:Mt,isPunctChar:Ct,isSpace:Re,isString:Qp,isValidEntityCode:Zp,isWhiteSpace:Rt,lib:IN,normalizeReference:Mo,unescapeAll:xr,unescapeMd:EN},Symbol.toStringTag,{value:"Module"}));function CN(n,e,r){let t,i,o,u;const a=n.posMax,c=n.pos;for(n.pos=e+1,t=1;n.pos<a;){if(o=n.src.charCodeAt(n.pos),o===93&&(t--,t===0)){i=!0;break}if(u=n.pos,n.md.inline.skipToken(n),o===91){if(u===n.pos-1)t++;else if(r)return n.pos=c,-1}}let s=-1;return i&&(s=n.pos),n.pos=c,s}function MN(n,e,r){let t,i=e;const o={ok:!1,pos:0,str:""};if(n.charCodeAt(i)===60){for(i++;i<r;){if(t=n.charCodeAt(i),t===10||t===60)return o;if(t===62)return o.pos=i+1,o.str=xr(n.slice(e+1,i)),o.ok=!0,o;if(t===92&&i+1<r){i+=2;continue}i++}return o}let u=0;for(;i<r&&(t=n.charCodeAt(i),!(t===32||t<32||t===127));){if(t===92&&i+1<r){if(n.charCodeAt(i+1)===32)break;i+=2;continue}if(t===40&&(u++,u>32))return o;if(t===41){if(u===0)break;u--}i++}return e===i||u!==0||(o.str=xr(n.slice(e,i)),o.pos=i,o.ok=!0),o}function qN(n,e,r,t){let i,o=e;const u={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(t)u.str=t.str,u.marker=t.marker;else{if(o>=r)return u;let a=n.charCodeAt(o);if(a!==34&&a!==39&&a!==40)return u;e++,o++,a===40&&(a=41),u.marker=a}for(;o<r;){if(i=n.charCodeAt(o),i===u.marker)return u.pos=o+1,u.str+=xr(n.slice(e,o)),u.ok=!0,u;if(i===40&&u.marker===41)return u;i===92&&o+1<r&&o++,o++}return u.can_continue=!0,u.str+=xr(n.slice(e,o)),u}const NN=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:MN,parseLinkLabel:CN,parseLinkTitle:qN},Symbol.toStringTag,{value:"Module"})),Wn={};Wn.code_inline=function(n,e,r,t,i){const o=n[e];return"<code"+i.renderAttrs(o)+">"+cr(o.content)+"</code>"};Wn.code_block=function(n,e,r,t,i){const o=n[e];return"<pre"+i.renderAttrs(o)+"><code>"+cr(n[e].content)+`</code></pre>
`};Wn.fence=function(n,e,r,t,i){const o=n[e],u=o.info?xr(o.info).trim():"";let a="",c="";if(u){const l=u.split(/(\s+)/g);a=l[0],c=l.slice(2).join("")}let s;if(r.highlight?s=r.highlight(o.content,a,c)||cr(o.content):s=cr(o.content),s.indexOf("<pre")===0)return s+`
`;if(u){const l=o.attrIndex("class"),f=o.attrs?o.attrs.slice():[];l<0?f.push(["class",r.langPrefix+a]):(f[l]=f[l].slice(),f[l][1]+=" "+r.langPrefix+a);const d={attrs:f};return`<pre><code${i.renderAttrs(d)}>${s}</code></pre>
`}return`<pre><code${i.renderAttrs(o)}>${s}</code></pre>
`};Wn.image=function(n,e,r,t,i){const o=n[e];return o.attrs[o.attrIndex("alt")][1]=i.renderInlineAsText(o.children,r,t),i.renderToken(n,e,r)};Wn.hardbreak=function(n,e,r){return r.xhtmlOut?`<br />
`:`<br>
`};Wn.softbreak=function(n,e,r){return r.breaks?r.xhtmlOut?`<br />
`:`<br>
`:`
`};Wn.text=function(n,e){return cr(n[e].content)};Wn.html_block=function(n,e){return n[e].content};Wn.html_inline=function(n,e){return n[e].content};function Zr(){this.rules=Co({},Wn)}Zr.prototype.renderAttrs=function(e){let r,t,i;if(!e.attrs)return"";for(i="",r=0,t=e.attrs.length;r<t;r++)i+=" "+cr(e.attrs[r][0])+'="'+cr(e.attrs[r][1])+'"';return i};Zr.prototype.renderToken=function(e,r,t){const i=e[r];let o="";if(i.hidden)return"";i.block&&i.nesting!==-1&&r&&e[r-1].hidden&&(o+=`
`),o+=(i.nesting===-1?"</":"<")+i.tag,o+=this.renderAttrs(i),i.nesting===0&&t.xhtmlOut&&(o+=" /");let u=!1;if(i.block&&(u=!0,i.nesting===1&&r+1<e.length)){const a=e[r+1];(a.type==="inline"||a.hidden||a.nesting===-1&&a.tag===i.tag)&&(u=!1)}return o+=u?`>
`:">",o};Zr.prototype.renderInline=function(n,e,r){let t="";const i=this.rules;for(let o=0,u=n.length;o<u;o++){const a=n[o].type;typeof i[a]<"u"?t+=i[a](n,o,e,r,this):t+=this.renderToken(n,o,e)}return t};Zr.prototype.renderInlineAsText=function(n,e,r){let t="";for(let i=0,o=n.length;i<o;i++)switch(n[i].type){case"text":t+=n[i].content;break;case"image":t+=this.renderInlineAsText(n[i].children,e,r);break;case"html_inline":case"html_block":t+=n[i].content;break;case"softbreak":case"hardbreak":t+=`
`;break}return t};Zr.prototype.render=function(n,e,r){let t="";const i=this.rules;for(let o=0,u=n.length;o<u;o++){const a=n[o].type;a==="inline"?t+=this.renderInline(n[o].children,e,r):typeof i[a]<"u"?t+=i[a](n,o,e,r,this):t+=this.renderToken(n,o,e,r)}return t};function cn(){this.__rules__=[],this.__cache__=null}cn.prototype.__find__=function(n){for(let e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===n)return e;return-1};cn.prototype.__compile__=function(){const n=this,e=[""];n.__rules__.forEach(function(r){r.enabled&&r.alt.forEach(function(t){e.indexOf(t)<0&&e.push(t)})}),n.__cache__={},e.forEach(function(r){n.__cache__[r]=[],n.__rules__.forEach(function(t){t.enabled&&(r&&t.alt.indexOf(r)<0||n.__cache__[r].push(t.fn))})})};cn.prototype.at=function(n,e,r){const t=this.__find__(n),i=r||{};if(t===-1)throw new Error("Parser rule not found: "+n);this.__rules__[t].fn=e,this.__rules__[t].alt=i.alt||[],this.__cache__=null};cn.prototype.before=function(n,e,r,t){const i=this.__find__(n),o=t||{};if(i===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(i,0,{name:e,enabled:!0,fn:r,alt:o.alt||[]}),this.__cache__=null};cn.prototype.after=function(n,e,r,t){const i=this.__find__(n),o=t||{};if(i===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(i+1,0,{name:e,enabled:!0,fn:r,alt:o.alt||[]}),this.__cache__=null};cn.prototype.push=function(n,e,r){const t=r||{};this.__rules__.push({name:n,enabled:!0,fn:e,alt:t.alt||[]}),this.__cache__=null};cn.prototype.enable=function(n,e){Array.isArray(n)||(n=[n]);const r=[];return n.forEach(function(t){const i=this.__find__(t);if(i<0){if(e)return;throw new Error("Rules manager: invalid rule name "+t)}this.__rules__[i].enabled=!0,r.push(t)},this),this.__cache__=null,r};cn.prototype.enableOnly=function(n,e){Array.isArray(n)||(n=[n]),this.__rules__.forEach(function(r){r.enabled=!1}),this.enable(n,e)};cn.prototype.disable=function(n,e){Array.isArray(n)||(n=[n]);const r=[];return n.forEach(function(t){const i=this.__find__(t);if(i<0){if(e)return;throw new Error("Rules manager: invalid rule name "+t)}this.__rules__[i].enabled=!1,r.push(t)},this),this.__cache__=null,r};cn.prototype.getRules=function(n){return this.__cache__===null&&this.__compile__(),this.__cache__[n]||[]};function In(n,e,r){this.type=n,this.tag=e,this.attrs=null,this.map=null,this.nesting=r,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}In.prototype.attrIndex=function(e){if(!this.attrs)return-1;const r=this.attrs;for(let t=0,i=r.length;t<i;t++)if(r[t][0]===e)return t;return-1};In.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};In.prototype.attrSet=function(e,r){const t=this.attrIndex(e),i=[e,r];t<0?this.attrPush(i):this.attrs[t]=i};In.prototype.attrGet=function(e){const r=this.attrIndex(e);let t=null;return r>=0&&(t=this.attrs[r][1]),t};In.prototype.attrJoin=function(e,r){const t=this.attrIndex(e);t<0?this.attrPush([e,r]):this.attrs[t][1]=this.attrs[t][1]+" "+r};function B9(n,e,r){this.src=n,this.env=r,this.tokens=[],this.inlineMode=!1,this.md=e}B9.prototype.Token=In;const FN=/\r\n?|\n/g,TN=/\0/g;function ON(n){let e;e=n.src.replace(FN,`
`),e=e.replace(TN,"�"),n.src=e}function DN(n){let e;n.inlineMode?(e=new n.Token("inline","",0),e.content=n.src,e.map=[0,1],e.children=[],n.tokens.push(e)):n.md.block.parse(n.src,n.md,n.env,n.tokens)}function PN(n){const e=n.tokens;for(let r=0,t=e.length;r<t;r++){const i=e[r];i.type==="inline"&&n.md.inline.parse(i.content,n.md,n.env,i.children)}}function HN(n){return/^<a[>\s]/i.test(n)}function xN(n){return/^<\/a\s*>/i.test(n)}function BN(n){const e=n.tokens;if(n.md.options.linkify)for(let r=0,t=e.length;r<t;r++){if(e[r].type!=="inline"||!n.md.linkify.pretest(e[r].content))continue;let i=e[r].children,o=0;for(let u=i.length-1;u>=0;u--){const a=i[u];if(a.type==="link_close"){for(u--;i[u].level!==a.level&&i[u].type!=="link_open";)u--;continue}if(a.type==="html_inline"&&(HN(a.content)&&o>0&&o--,xN(a.content)&&o++),!(o>0)&&a.type==="text"&&n.md.linkify.test(a.content)){const c=a.content;let s=n.md.linkify.match(c);const l=[];let f=a.level,d=0;s.length>0&&s[0].index===0&&u>0&&i[u-1].type==="text_special"&&(s=s.slice(1));for(let p=0;p<s.length;p++){const h=s[p].url,v=n.md.normalizeLink(h);if(!n.md.validateLink(v))continue;let m=s[p].text;s[p].schema?s[p].schema==="mailto:"&&!/^mailto:/i.test(m)?m=n.md.normalizeLinkText("mailto:"+m).replace(/^mailto:/,""):m=n.md.normalizeLinkText(m):m=n.md.normalizeLinkText("http://"+m).replace(/^http:\/\//,"");const b=s[p].index;if(b>d){const E=new n.Token("text","",0);E.content=c.slice(d,b),E.level=f,l.push(E)}const g=new n.Token("link_open","a",1);g.attrs=[["href",v]],g.level=f++,g.markup="linkify",g.info="auto",l.push(g);const _=new n.Token("text","",0);_.content=m,_.level=f,l.push(_);const y=new n.Token("link_close","a",-1);y.level=--f,y.markup="linkify",y.info="auto",l.push(y),d=s[p].lastIndex}if(d<c.length){const p=new n.Token("text","",0);p.content=c.slice(d),p.level=f,l.push(p)}e[r].children=i=H9(i,u,l)}}}}const U9=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,UN=/\((c|tm|r)\)/i,WN=/\((c|tm|r)\)/ig,jN={c:"©",r:"®",tm:"™"};function GN(n,e){return jN[e.toLowerCase()]}function VN(n){let e=0;for(let r=n.length-1;r>=0;r--){const t=n[r];t.type==="text"&&!e&&(t.content=t.content.replace(WN,GN)),t.type==="link_open"&&t.info==="auto"&&e--,t.type==="link_close"&&t.info==="auto"&&e++}}function XN(n){let e=0;for(let r=n.length-1;r>=0;r--){const t=n[r];t.type==="text"&&!e&&U9.test(t.content)&&(t.content=t.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),t.type==="link_open"&&t.info==="auto"&&e--,t.type==="link_close"&&t.info==="auto"&&e++}}function YN(n){let e;if(n.md.options.typographer)for(e=n.tokens.length-1;e>=0;e--)n.tokens[e].type==="inline"&&(UN.test(n.tokens[e].content)&&VN(n.tokens[e].children),U9.test(n.tokens[e].content)&&XN(n.tokens[e].children))}const KN=/['"]/,Sg=/['"]/g,Ag="’";function pi(n,e,r){return n.slice(0,e)+r+n.slice(e+1)}function zN(n,e){let r;const t=[];for(let i=0;i<n.length;i++){const o=n[i],u=n[i].level;for(r=t.length-1;r>=0&&!(t[r].level<=u);r--);if(t.length=r+1,o.type!=="text")continue;let a=o.content,c=0,s=a.length;e:for(;c<s;){Sg.lastIndex=c;const l=Sg.exec(a);if(!l)break;let f=!0,d=!0;c=l.index+1;const p=l[0]==="'";let h=32;if(l.index-1>=0)h=a.charCodeAt(l.index-1);else for(r=i-1;r>=0&&!(n[r].type==="softbreak"||n[r].type==="hardbreak");r--)if(n[r].content){h=n[r].content.charCodeAt(n[r].content.length-1);break}let v=32;if(c<s)v=a.charCodeAt(c);else for(r=i+1;r<n.length&&!(n[r].type==="softbreak"||n[r].type==="hardbreak");r++)if(n[r].content){v=n[r].content.charCodeAt(0);break}const m=Mt(h)||Ct(String.fromCharCode(h)),b=Mt(v)||Ct(String.fromCharCode(v)),g=Rt(h),_=Rt(v);if(_?f=!1:b&&(g||m||(f=!1)),g?d=!1:m&&(_||b||(d=!1)),v===34&&l[0]==='"'&&h>=48&&h<=57&&(d=f=!1),f&&d&&(f=m,d=b),!f&&!d){p&&(o.content=pi(o.content,l.index,Ag));continue}if(d)for(r=t.length-1;r>=0;r--){let y=t[r];if(t[r].level<u)break;if(y.single===p&&t[r].level===u){y=t[r];let E,I;p?(E=e.md.options.quotes[2],I=e.md.options.quotes[3]):(E=e.md.options.quotes[0],I=e.md.options.quotes[1]),o.content=pi(o.content,l.index,I),n[y.token].content=pi(n[y.token].content,y.pos,E),c+=I.length-1,y.token===i&&(c+=E.length-1),a=o.content,s=a.length,t.length=r;continue e}}f?t.push({token:i,pos:l.index,single:p,level:u}):d&&p&&(o.content=pi(o.content,l.index,Ag))}}}function JN(n){if(n.md.options.typographer)for(let e=n.tokens.length-1;e>=0;e--)n.tokens[e].type!=="inline"||!KN.test(n.tokens[e].content)||zN(n.tokens[e].children,n)}function QN(n){let e,r;const t=n.tokens,i=t.length;for(let o=0;o<i;o++){if(t[o].type!=="inline")continue;const u=t[o].children,a=u.length;for(e=0;e<a;e++)u[e].type==="text_special"&&(u[e].type="text");for(e=r=0;e<a;e++)u[e].type==="text"&&e+1<a&&u[e+1].type==="text"?u[e+1].content=u[e].content+u[e+1].content:(e!==r&&(u[r]=u[e]),r++);e!==r&&(u.length=r)}}const A1=[["normalize",ON],["block",DN],["inline",PN],["linkify",BN],["replacements",YN],["smartquotes",JN],["text_join",QN]];function e2(){this.ruler=new cn;for(let n=0;n<A1.length;n++)this.ruler.push(A1[n][0],A1[n][1])}e2.prototype.process=function(n){const e=this.ruler.getRules("");for(let r=0,t=e.length;r<t;r++)e[r](n)};e2.prototype.State=B9;function jn(n,e,r,t){this.src=n,this.md=e,this.env=r,this.tokens=t,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let o=0,u=0,a=0,c=0,s=i.length,l=!1;u<s;u++){const f=i.charCodeAt(u);if(!l)if(Re(f)){a++,f===9?c+=4-c%4:c++;continue}else l=!0;(f===10||u===s-1)&&(f!==10&&u++,this.bMarks.push(o),this.eMarks.push(u),this.tShift.push(a),this.sCount.push(c),this.bsCount.push(0),l=!1,a=0,c=0,o=u+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}jn.prototype.push=function(n,e,r){const t=new In(n,e,r);return t.block=!0,r<0&&this.level--,t.level=this.level,r>0&&this.level++,this.tokens.push(t),t};jn.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};jn.prototype.skipEmptyLines=function(e){for(let r=this.lineMax;e<r&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};jn.prototype.skipSpaces=function(e){for(let r=this.src.length;e<r;e++){const t=this.src.charCodeAt(e);if(!Re(t))break}return e};jn.prototype.skipSpacesBack=function(e,r){if(e<=r)return e;for(;e>r;)if(!Re(this.src.charCodeAt(--e)))return e+1;return e};jn.prototype.skipChars=function(e,r){for(let t=this.src.length;e<t&&this.src.charCodeAt(e)===r;e++);return e};jn.prototype.skipCharsBack=function(e,r,t){if(e<=t)return e;for(;e>t;)if(r!==this.src.charCodeAt(--e))return e+1;return e};jn.prototype.getLines=function(e,r,t,i){if(e>=r)return"";const o=new Array(r-e);for(let u=0,a=e;a<r;a++,u++){let c=0;const s=this.bMarks[a];let l=s,f;for(a+1<r||i?f=this.eMarks[a]+1:f=this.eMarks[a];l<f&&c<t;){const d=this.src.charCodeAt(l);if(Re(d))d===9?c+=4-(c+this.bsCount[a])%4:c++;else if(l-s<this.tShift[a])c++;else break;l++}c>t?o[u]=new Array(c-t+1).join(" ")+this.src.slice(l,f):o[u]=this.src.slice(l,f)}return o.join("")};jn.prototype.Token=In;const ZN=65536;function k1(n,e){const r=n.bMarks[e]+n.tShift[e],t=n.eMarks[e];return n.src.slice(r,t)}function kg(n){const e=[],r=n.length;let t=0,i=n.charCodeAt(t),o=!1,u=0,a="";for(;t<r;)i===124&&(o?(a+=n.substring(u,t-1),u=t):(e.push(a+n.substring(u,t)),a="",u=t+1)),o=i===92,t++,i=n.charCodeAt(t);return e.push(a+n.substring(u)),e}function eF(n,e,r,t){if(e+2>r)return!1;let i=e+1;if(n.sCount[i]<n.blkIndent||n.sCount[i]-n.blkIndent>=4)return!1;let o=n.bMarks[i]+n.tShift[i];if(o>=n.eMarks[i])return!1;const u=n.src.charCodeAt(o++);if(u!==124&&u!==45&&u!==58||o>=n.eMarks[i])return!1;const a=n.src.charCodeAt(o++);if(a!==124&&a!==45&&a!==58&&!Re(a)||u===45&&Re(a))return!1;for(;o<n.eMarks[i];){const y=n.src.charCodeAt(o);if(y!==124&&y!==45&&y!==58&&!Re(y))return!1;o++}let c=k1(n,e+1),s=c.split("|");const l=[];for(let y=0;y<s.length;y++){const E=s[y].trim();if(!E){if(y===0||y===s.length-1)continue;return!1}if(!/^:?-+:?$/.test(E))return!1;E.charCodeAt(E.length-1)===58?l.push(E.charCodeAt(0)===58?"center":"right"):E.charCodeAt(0)===58?l.push("left"):l.push("")}if(c=k1(n,e).trim(),c.indexOf("|")===-1||n.sCount[e]-n.blkIndent>=4)return!1;s=kg(c),s.length&&s[0]===""&&s.shift(),s.length&&s[s.length-1]===""&&s.pop();const f=s.length;if(f===0||f!==l.length)return!1;if(t)return!0;const d=n.parentType;n.parentType="table";const p=n.md.block.ruler.getRules("blockquote"),h=n.push("table_open","table",1),v=[e,0];h.map=v;const m=n.push("thead_open","thead",1);m.map=[e,e+1];const b=n.push("tr_open","tr",1);b.map=[e,e+1];for(let y=0;y<s.length;y++){const E=n.push("th_open","th",1);l[y]&&(E.attrs=[["style","text-align:"+l[y]]]);const I=n.push("inline","",0);I.content=s[y].trim(),I.children=[],n.push("th_close","th",-1)}n.push("tr_close","tr",-1),n.push("thead_close","thead",-1);let g,_=0;for(i=e+2;i<r&&!(n.sCount[i]<n.blkIndent);i++){let y=!1;for(let I=0,A=p.length;I<A;I++)if(p[I](n,i,r,!0)){y=!0;break}if(y||(c=k1(n,i).trim(),!c)||n.sCount[i]-n.blkIndent>=4||(s=kg(c),s.length&&s[0]===""&&s.shift(),s.length&&s[s.length-1]===""&&s.pop(),_+=f-s.length,_>ZN))break;if(i===e+2){const I=n.push("tbody_open","tbody",1);I.map=g=[e+2,0]}const E=n.push("tr_open","tr",1);E.map=[i,i+1];for(let I=0;I<f;I++){const A=n.push("td_open","td",1);l[I]&&(A.attrs=[["style","text-align:"+l[I]]]);const C=n.push("inline","",0);C.content=s[I]?s[I].trim():"",C.children=[],n.push("td_close","td",-1)}n.push("tr_close","tr",-1)}return g&&(n.push("tbody_close","tbody",-1),g[1]=i),n.push("table_close","table",-1),v[1]=i,n.parentType=d,n.line=i,!0}function nF(n,e,r){if(n.sCount[e]-n.blkIndent<4)return!1;let t=e+1,i=t;for(;t<r;){if(n.isEmpty(t)){t++;continue}if(n.sCount[t]-n.blkIndent>=4){t++,i=t;continue}break}n.line=i;const o=n.push("code_block","code",0);return o.content=n.getLines(e,i,4+n.blkIndent,!1)+`
`,o.map=[e,n.line],!0}function rF(n,e,r,t){let i=n.bMarks[e]+n.tShift[e],o=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4||i+3>o)return!1;const u=n.src.charCodeAt(i);if(u!==126&&u!==96)return!1;let a=i;i=n.skipChars(i,u);let c=i-a;if(c<3)return!1;const s=n.src.slice(a,i),l=n.src.slice(i,o);if(u===96&&l.indexOf(String.fromCharCode(u))>=0)return!1;if(t)return!0;let f=e,d=!1;for(;f++,!(f>=r||(i=a=n.bMarks[f]+n.tShift[f],o=n.eMarks[f],i<o&&n.sCount[f]<n.blkIndent));)if(n.src.charCodeAt(i)===u&&!(n.sCount[f]-n.blkIndent>=4)&&(i=n.skipChars(i,u),!(i-a<c)&&(i=n.skipSpaces(i),!(i<o)))){d=!0;break}c=n.sCount[e],n.line=f+(d?1:0);const p=n.push("fence","code",0);return p.info=l,p.content=n.getLines(e+1,f,c,!0),p.markup=s,p.map=[e,n.line],!0}function tF(n,e,r,t){let i=n.bMarks[e]+n.tShift[e],o=n.eMarks[e];const u=n.lineMax;if(n.sCount[e]-n.blkIndent>=4||n.src.charCodeAt(i)!==62)return!1;if(t)return!0;const a=[],c=[],s=[],l=[],f=n.md.block.ruler.getRules("blockquote"),d=n.parentType;n.parentType="blockquote";let p=!1,h;for(h=e;h<r;h++){const _=n.sCount[h]<n.blkIndent;if(i=n.bMarks[h]+n.tShift[h],o=n.eMarks[h],i>=o)break;if(n.src.charCodeAt(i++)===62&&!_){let E=n.sCount[h]+1,I,A;n.src.charCodeAt(i)===32?(i++,E++,A=!1,I=!0):n.src.charCodeAt(i)===9?(I=!0,(n.bsCount[h]+E)%4===3?(i++,E++,A=!1):A=!0):I=!1;let C=E;for(a.push(n.bMarks[h]),n.bMarks[h]=i;i<o;){const k=n.src.charCodeAt(i);if(Re(k))k===9?C+=4-(C+n.bsCount[h]+(A?1:0))%4:C++;else break;i++}p=i>=o,c.push(n.bsCount[h]),n.bsCount[h]=n.sCount[h]+1+(I?1:0),s.push(n.sCount[h]),n.sCount[h]=C-E,l.push(n.tShift[h]),n.tShift[h]=i-n.bMarks[h];continue}if(p)break;let y=!1;for(let E=0,I=f.length;E<I;E++)if(f[E](n,h,r,!0)){y=!0;break}if(y){n.lineMax=h,n.blkIndent!==0&&(a.push(n.bMarks[h]),c.push(n.bsCount[h]),l.push(n.tShift[h]),s.push(n.sCount[h]),n.sCount[h]-=n.blkIndent);break}a.push(n.bMarks[h]),c.push(n.bsCount[h]),l.push(n.tShift[h]),s.push(n.sCount[h]),n.sCount[h]=-1}const v=n.blkIndent;n.blkIndent=0;const m=n.push("blockquote_open","blockquote",1);m.markup=">";const b=[e,0];m.map=b,n.md.block.tokenize(n,e,h);const g=n.push("blockquote_close","blockquote",-1);g.markup=">",n.lineMax=u,n.parentType=d,b[1]=n.line;for(let _=0;_<l.length;_++)n.bMarks[_+e]=a[_],n.tShift[_+e]=l[_],n.sCount[_+e]=s[_],n.bsCount[_+e]=c[_];return n.blkIndent=v,!0}function iF(n,e,r,t){const i=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4)return!1;let o=n.bMarks[e]+n.tShift[e];const u=n.src.charCodeAt(o++);if(u!==42&&u!==45&&u!==95)return!1;let a=1;for(;o<i;){const s=n.src.charCodeAt(o++);if(s!==u&&!Re(s))return!1;s===u&&a++}if(a<3)return!1;if(t)return!0;n.line=e+1;const c=n.push("hr","hr",0);return c.map=[e,n.line],c.markup=Array(a+1).join(String.fromCharCode(u)),!0}function Lg(n,e){const r=n.eMarks[e];let t=n.bMarks[e]+n.tShift[e];const i=n.src.charCodeAt(t++);if(i!==42&&i!==45&&i!==43)return-1;if(t<r){const o=n.src.charCodeAt(t);if(!Re(o))return-1}return t}function Ig(n,e){const r=n.bMarks[e]+n.tShift[e],t=n.eMarks[e];let i=r;if(i+1>=t)return-1;let o=n.src.charCodeAt(i++);if(o<48||o>57)return-1;for(;;){if(i>=t)return-1;if(o=n.src.charCodeAt(i++),o>=48&&o<=57){if(i-r>=10)return-1;continue}if(o===41||o===46)break;return-1}return i<t&&(o=n.src.charCodeAt(i),!Re(o))?-1:i}function oF(n,e){const r=n.level+2;for(let t=e+2,i=n.tokens.length-2;t<i;t++)n.tokens[t].level===r&&n.tokens[t].type==="paragraph_open"&&(n.tokens[t+2].hidden=!0,n.tokens[t].hidden=!0,t+=2)}function uF(n,e,r,t){let i,o,u,a,c=e,s=!0;if(n.sCount[c]-n.blkIndent>=4||n.listIndent>=0&&n.sCount[c]-n.listIndent>=4&&n.sCount[c]<n.blkIndent)return!1;let l=!1;t&&n.parentType==="paragraph"&&n.sCount[c]>=n.blkIndent&&(l=!0);let f,d,p;if((p=Ig(n,c))>=0){if(f=!0,u=n.bMarks[c]+n.tShift[c],d=Number(n.src.slice(u,p-1)),l&&d!==1)return!1}else if((p=Lg(n,c))>=0)f=!1;else return!1;if(l&&n.skipSpaces(p)>=n.eMarks[c])return!1;if(t)return!0;const h=n.src.charCodeAt(p-1),v=n.tokens.length;f?(a=n.push("ordered_list_open","ol",1),d!==1&&(a.attrs=[["start",d]])):a=n.push("bullet_list_open","ul",1);const m=[c,0];a.map=m,a.markup=String.fromCharCode(h);let b=!1;const g=n.md.block.ruler.getRules("list"),_=n.parentType;for(n.parentType="list";c<r;){o=p,i=n.eMarks[c];const y=n.sCount[c]+p-(n.bMarks[c]+n.tShift[c]);let E=y;for(;o<i;){const T=n.src.charCodeAt(o);if(T===9)E+=4-(E+n.bsCount[c])%4;else if(T===32)E++;else break;o++}const I=o;let A;I>=i?A=1:A=E-y,A>4&&(A=1);const C=y+A;a=n.push("list_item_open","li",1),a.markup=String.fromCharCode(h);const k=[c,0];a.map=k,f&&(a.info=n.src.slice(u,p-1));const S=n.tight,w=n.tShift[c],$=n.sCount[c],L=n.listIndent;if(n.listIndent=n.blkIndent,n.blkIndent=C,n.tight=!0,n.tShift[c]=I-n.bMarks[c],n.sCount[c]=E,I>=i&&n.isEmpty(c+1)?n.line=Math.min(n.line+2,r):n.md.block.tokenize(n,c,r,!0),(!n.tight||b)&&(s=!1),b=n.line-c>1&&n.isEmpty(n.line-1),n.blkIndent=n.listIndent,n.listIndent=L,n.tShift[c]=w,n.sCount[c]=$,n.tight=S,a=n.push("list_item_close","li",-1),a.markup=String.fromCharCode(h),c=n.line,k[1]=c,c>=r||n.sCount[c]<n.blkIndent||n.sCount[c]-n.blkIndent>=4)break;let R=!1;for(let T=0,N=g.length;T<N;T++)if(g[T](n,c,r,!0)){R=!0;break}if(R)break;if(f){if(p=Ig(n,c),p<0)break;u=n.bMarks[c]+n.tShift[c]}else if(p=Lg(n,c),p<0)break;if(h!==n.src.charCodeAt(p-1))break}return f?a=n.push("ordered_list_close","ol",-1):a=n.push("bullet_list_close","ul",-1),a.markup=String.fromCharCode(h),m[1]=c,n.line=c,n.parentType=_,s&&oF(n,v),!0}function aF(n,e,r,t){let i=n.bMarks[e]+n.tShift[e],o=n.eMarks[e],u=e+1;if(n.sCount[e]-n.blkIndent>=4||n.src.charCodeAt(i)!==91)return!1;function a(g){const _=n.lineMax;if(g>=_||n.isEmpty(g))return null;let y=!1;if(n.sCount[g]-n.blkIndent>3&&(y=!0),n.sCount[g]<0&&(y=!0),!y){const A=n.md.block.ruler.getRules("reference"),C=n.parentType;n.parentType="reference";let k=!1;for(let S=0,w=A.length;S<w;S++)if(A[S](n,g,_,!0)){k=!0;break}if(n.parentType=C,k)return null}const E=n.bMarks[g]+n.tShift[g],I=n.eMarks[g];return n.src.slice(E,I+1)}let c=n.src.slice(i,o+1);o=c.length;let s=-1;for(i=1;i<o;i++){const g=c.charCodeAt(i);if(g===91)return!1;if(g===93){s=i;break}else if(g===10){const _=a(u);_!==null&&(c+=_,o=c.length,u++)}else if(g===92&&(i++,i<o&&c.charCodeAt(i)===10)){const _=a(u);_!==null&&(c+=_,o=c.length,u++)}}if(s<0||c.charCodeAt(s+1)!==58)return!1;for(i=s+2;i<o;i++){const g=c.charCodeAt(i);if(g===10){const _=a(u);_!==null&&(c+=_,o=c.length,u++)}else if(!Re(g))break}const l=n.md.helpers.parseLinkDestination(c,i,o);if(!l.ok)return!1;const f=n.md.normalizeLink(l.str);if(!n.md.validateLink(f))return!1;i=l.pos;const d=i,p=u,h=i;for(;i<o;i++){const g=c.charCodeAt(i);if(g===10){const _=a(u);_!==null&&(c+=_,o=c.length,u++)}else if(!Re(g))break}let v=n.md.helpers.parseLinkTitle(c,i,o);for(;v.can_continue;){const g=a(u);if(g===null)break;c+=g,i=o,o=c.length,u++,v=n.md.helpers.parseLinkTitle(c,i,o,v)}let m;for(i<o&&h!==i&&v.ok?(m=v.str,i=v.pos):(m="",i=d,u=p);i<o;){const g=c.charCodeAt(i);if(!Re(g))break;i++}if(i<o&&c.charCodeAt(i)!==10&&m)for(m="",i=d,u=p;i<o;){const g=c.charCodeAt(i);if(!Re(g))break;i++}if(i<o&&c.charCodeAt(i)!==10)return!1;const b=Mo(c.slice(1,s));return b?(t||(typeof n.env.references>"u"&&(n.env.references={}),typeof n.env.references[b]>"u"&&(n.env.references[b]={title:m,href:f}),n.line=u),!0):!1}const sF=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],cF="[a-zA-Z_:][a-zA-Z0-9:._-]*",lF="[^\"'=<>`\\x00-\\x20]+",fF="'[^']*'",dF='"[^"]*"',pF="(?:"+lF+"|"+fF+"|"+dF+")",hF="(?:\\s+"+cF+"(?:\\s*=\\s*"+pF+")?)",W9="<[A-Za-z][A-Za-z0-9\\-]*"+hF+"*\\s*\\/?>",j9="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",vF="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",mF="<[?][\\s\\S]*?[?]>",bF="<![A-Za-z][^>]*>",gF="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",_F=new RegExp("^(?:"+W9+"|"+j9+"|"+vF+"|"+mF+"|"+bF+"|"+gF+")"),yF=new RegExp("^(?:"+W9+"|"+j9+")"),Tr=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+sF.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(yF.source+"\\s*$"),/^$/,!1]];function EF(n,e,r,t){let i=n.bMarks[e]+n.tShift[e],o=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4||!n.md.options.html||n.src.charCodeAt(i)!==60)return!1;let u=n.src.slice(i,o),a=0;for(;a<Tr.length&&!Tr[a][0].test(u);a++);if(a===Tr.length)return!1;if(t)return Tr[a][2];let c=e+1;if(!Tr[a][1].test(u)){for(;c<r&&!(n.sCount[c]<n.blkIndent);c++)if(i=n.bMarks[c]+n.tShift[c],o=n.eMarks[c],u=n.src.slice(i,o),Tr[a][1].test(u)){u.length!==0&&c++;break}}n.line=c;const s=n.push("html_block","",0);return s.map=[e,c],s.content=n.getLines(e,c,n.blkIndent,!0),!0}function wF(n,e,r,t){let i=n.bMarks[e]+n.tShift[e],o=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4)return!1;let u=n.src.charCodeAt(i);if(u!==35||i>=o)return!1;let a=1;for(u=n.src.charCodeAt(++i);u===35&&i<o&&a<=6;)a++,u=n.src.charCodeAt(++i);if(a>6||i<o&&!Re(u))return!1;if(t)return!0;o=n.skipSpacesBack(o,i);const c=n.skipCharsBack(o,35,i);c>i&&Re(n.src.charCodeAt(c-1))&&(o=c),n.line=e+1;const s=n.push("heading_open","h"+String(a),1);s.markup="########".slice(0,a),s.map=[e,n.line];const l=n.push("inline","",0);l.content=n.src.slice(i,o).trim(),l.map=[e,n.line],l.children=[];const f=n.push("heading_close","h"+String(a),-1);return f.markup="########".slice(0,a),!0}function $F(n,e,r){const t=n.md.block.ruler.getRules("paragraph");if(n.sCount[e]-n.blkIndent>=4)return!1;const i=n.parentType;n.parentType="paragraph";let o=0,u,a=e+1;for(;a<r&&!n.isEmpty(a);a++){if(n.sCount[a]-n.blkIndent>3)continue;if(n.sCount[a]>=n.blkIndent){let p=n.bMarks[a]+n.tShift[a];const h=n.eMarks[a];if(p<h&&(u=n.src.charCodeAt(p),(u===45||u===61)&&(p=n.skipChars(p,u),p=n.skipSpaces(p),p>=h))){o=u===61?1:2;break}}if(n.sCount[a]<0)continue;let d=!1;for(let p=0,h=t.length;p<h;p++)if(t[p](n,a,r,!0)){d=!0;break}if(d)break}if(!o)return!1;const c=n.getLines(e,a,n.blkIndent,!1).trim();n.line=a+1;const s=n.push("heading_open","h"+String(o),1);s.markup=String.fromCharCode(u),s.map=[e,n.line];const l=n.push("inline","",0);l.content=c,l.map=[e,n.line-1],l.children=[];const f=n.push("heading_close","h"+String(o),-1);return f.markup=String.fromCharCode(u),n.parentType=i,!0}function SF(n,e,r){const t=n.md.block.ruler.getRules("paragraph"),i=n.parentType;let o=e+1;for(n.parentType="paragraph";o<r&&!n.isEmpty(o);o++){if(n.sCount[o]-n.blkIndent>3||n.sCount[o]<0)continue;let s=!1;for(let l=0,f=t.length;l<f;l++)if(t[l](n,o,r,!0)){s=!0;break}if(s)break}const u=n.getLines(e,o,n.blkIndent,!1).trim();n.line=o;const a=n.push("paragraph_open","p",1);a.map=[e,n.line];const c=n.push("inline","",0);return c.content=u,c.map=[e,n.line],c.children=[],n.push("paragraph_close","p",-1),n.parentType=i,!0}const hi=[["table",eF,["paragraph","reference"]],["code",nF],["fence",rF,["paragraph","reference","blockquote","list"]],["blockquote",tF,["paragraph","reference","blockquote","list"]],["hr",iF,["paragraph","reference","blockquote","list"]],["list",uF,["paragraph","reference","blockquote"]],["reference",aF],["html_block",EF,["paragraph","reference","blockquote"]],["heading",wF,["paragraph","reference","blockquote"]],["lheading",$F],["paragraph",SF]];function qo(){this.ruler=new cn;for(let n=0;n<hi.length;n++)this.ruler.push(hi[n][0],hi[n][1],{alt:(hi[n][2]||[]).slice()})}qo.prototype.tokenize=function(n,e,r){const t=this.ruler.getRules(""),i=t.length,o=n.md.options.maxNesting;let u=e,a=!1;for(;u<r&&(n.line=u=n.skipEmptyLines(u),!(u>=r||n.sCount[u]<n.blkIndent));){if(n.level>=o){n.line=r;break}const c=n.line;let s=!1;for(let l=0;l<i;l++)if(s=t[l](n,u,r,!1),s){if(c>=n.line)throw new Error("block rule didn't increment state.line");break}if(!s)throw new Error("none of the block rules matched");n.tight=!a,n.isEmpty(n.line-1)&&(a=!0),u=n.line,u<r&&n.isEmpty(u)&&(a=!0,u++,n.line=u)}};qo.prototype.parse=function(n,e,r,t){if(!n)return;const i=new this.State(n,e,r,t);this.tokenize(i,i.line,i.lineMax)};qo.prototype.State=jn;function Jt(n,e,r,t){this.src=n,this.env=r,this.md=e,this.tokens=t,this.tokens_meta=Array(t.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Jt.prototype.pushPending=function(){const n=new In("text","",0);return n.content=this.pending,n.level=this.pendingLevel,this.tokens.push(n),this.pending="",n};Jt.prototype.push=function(n,e,r){this.pending&&this.pushPending();const t=new In(n,e,r);let i=null;return r<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),t.level=this.level,r>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(t),this.tokens_meta.push(i),t};Jt.prototype.scanDelims=function(n,e){const r=this.posMax,t=this.src.charCodeAt(n),i=n>0?this.src.charCodeAt(n-1):32;let o=n;for(;o<r&&this.src.charCodeAt(o)===t;)o++;const u=o-n,a=o<r?this.src.charCodeAt(o):32,c=Mt(i)||Ct(String.fromCharCode(i)),s=Mt(a)||Ct(String.fromCharCode(a)),l=Rt(i),f=Rt(a),d=!f&&(!s||l||c),p=!l&&(!c||f||s);return{can_open:d&&(e||!p||c),can_close:p&&(e||!d||s),length:u}};Jt.prototype.Token=In;function AF(n){switch(n){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function kF(n,e){let r=n.pos;for(;r<n.posMax&&!AF(n.src.charCodeAt(r));)r++;return r===n.pos?!1:(e||(n.pending+=n.src.slice(n.pos,r)),n.pos=r,!0)}const LF=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function IF(n,e){if(!n.md.options.linkify||n.linkLevel>0)return!1;const r=n.pos,t=n.posMax;if(r+3>t||n.src.charCodeAt(r)!==58||n.src.charCodeAt(r+1)!==47||n.src.charCodeAt(r+2)!==47)return!1;const i=n.pending.match(LF);if(!i)return!1;const o=i[1],u=n.md.linkify.matchAtStart(n.src.slice(r-o.length));if(!u)return!1;let a=u.url;if(a.length<=o.length)return!1;let c=a.length;for(;c>0&&a.charCodeAt(c-1)===42;)c--;c!==a.length&&(a=a.slice(0,c));const s=n.md.normalizeLink(a);if(!n.md.validateLink(s))return!1;if(!e){n.pending=n.pending.slice(0,-o.length);const l=n.push("link_open","a",1);l.attrs=[["href",s]],l.markup="linkify",l.info="auto";const f=n.push("text","",0);f.content=n.md.normalizeLinkText(a);const d=n.push("link_close","a",-1);d.markup="linkify",d.info="auto"}return n.pos+=a.length-o.length,!0}function RF(n,e){let r=n.pos;if(n.src.charCodeAt(r)!==10)return!1;const t=n.pending.length-1,i=n.posMax;if(!e)if(t>=0&&n.pending.charCodeAt(t)===32)if(t>=1&&n.pending.charCodeAt(t-1)===32){let o=t-1;for(;o>=1&&n.pending.charCodeAt(o-1)===32;)o--;n.pending=n.pending.slice(0,o),n.push("hardbreak","br",0)}else n.pending=n.pending.slice(0,-1),n.push("softbreak","br",0);else n.push("softbreak","br",0);for(r++;r<i&&Re(n.src.charCodeAt(r));)r++;return n.pos=r,!0}const n2=[];for(let n=0;n<256;n++)n2.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(n){n2[n.charCodeAt(0)]=1});function CF(n,e){let r=n.pos;const t=n.posMax;if(n.src.charCodeAt(r)!==92||(r++,r>=t))return!1;let i=n.src.charCodeAt(r);if(i===10){for(e||n.push("hardbreak","br",0),r++;r<t&&(i=n.src.charCodeAt(r),!!Re(i));)r++;return n.pos=r,!0}let o=n.src[r];if(i>=55296&&i<=56319&&r+1<t){const a=n.src.charCodeAt(r+1);a>=56320&&a<=57343&&(o+=n.src[r+1],r++)}const u="\\"+o;if(!e){const a=n.push("text_special","",0);i<256&&n2[i]!==0?a.content=o:a.content=u,a.markup=u,a.info="escape"}return n.pos=r+1,!0}function MF(n,e){let r=n.pos;if(n.src.charCodeAt(r)!==96)return!1;const i=r;r++;const o=n.posMax;for(;r<o&&n.src.charCodeAt(r)===96;)r++;const u=n.src.slice(i,r),a=u.length;if(n.backticksScanned&&(n.backticks[a]||0)<=i)return e||(n.pending+=u),n.pos+=a,!0;let c=r,s;for(;(s=n.src.indexOf("`",c))!==-1;){for(c=s+1;c<o&&n.src.charCodeAt(c)===96;)c++;const l=c-s;if(l===a){if(!e){const f=n.push("code_inline","code",0);f.markup=u,f.content=n.src.slice(r,s).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return n.pos=c,!0}n.backticks[l]=s}return n.backticksScanned=!0,e||(n.pending+=u),n.pos+=a,!0}function qF(n,e){const r=n.pos,t=n.src.charCodeAt(r);if(e||t!==126)return!1;const i=n.scanDelims(n.pos,!0);let o=i.length;const u=String.fromCharCode(t);if(o<2)return!1;let a;o%2&&(a=n.push("text","",0),a.content=u,o--);for(let c=0;c<o;c+=2)a=n.push("text","",0),a.content=u+u,n.delimiters.push({marker:t,length:0,token:n.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return n.pos+=i.length,!0}function Rg(n,e){let r;const t=[],i=e.length;for(let o=0;o<i;o++){const u=e[o];if(u.marker!==126||u.end===-1)continue;const a=e[u.end];r=n.tokens[u.token],r.type="s_open",r.tag="s",r.nesting=1,r.markup="~~",r.content="",r=n.tokens[a.token],r.type="s_close",r.tag="s",r.nesting=-1,r.markup="~~",r.content="",n.tokens[a.token-1].type==="text"&&n.tokens[a.token-1].content==="~"&&t.push(a.token-1)}for(;t.length;){const o=t.pop();let u=o+1;for(;u<n.tokens.length&&n.tokens[u].type==="s_close";)u++;u--,o!==u&&(r=n.tokens[u],n.tokens[u]=n.tokens[o],n.tokens[o]=r)}}function NF(n){const e=n.tokens_meta,r=n.tokens_meta.length;Rg(n,n.delimiters);for(let t=0;t<r;t++)e[t]&&e[t].delimiters&&Rg(n,e[t].delimiters)}const G9={tokenize:qF,postProcess:NF};function FF(n,e){const r=n.pos,t=n.src.charCodeAt(r);if(e||t!==95&&t!==42)return!1;const i=n.scanDelims(n.pos,t===42);for(let o=0;o<i.length;o++){const u=n.push("text","",0);u.content=String.fromCharCode(t),n.delimiters.push({marker:t,length:i.length,token:n.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return n.pos+=i.length,!0}function Cg(n,e){const r=e.length;for(let t=r-1;t>=0;t--){const i=e[t];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const o=e[i.end],u=t>0&&e[t-1].end===i.end+1&&e[t-1].marker===i.marker&&e[t-1].token===i.token-1&&e[i.end+1].token===o.token+1,a=String.fromCharCode(i.marker),c=n.tokens[i.token];c.type=u?"strong_open":"em_open",c.tag=u?"strong":"em",c.nesting=1,c.markup=u?a+a:a,c.content="";const s=n.tokens[o.token];s.type=u?"strong_close":"em_close",s.tag=u?"strong":"em",s.nesting=-1,s.markup=u?a+a:a,s.content="",u&&(n.tokens[e[t-1].token].content="",n.tokens[e[i.end+1].token].content="",t--)}}function TF(n){const e=n.tokens_meta,r=n.tokens_meta.length;Cg(n,n.delimiters);for(let t=0;t<r;t++)e[t]&&e[t].delimiters&&Cg(n,e[t].delimiters)}const V9={tokenize:FF,postProcess:TF};function OF(n,e){let r,t,i,o,u="",a="",c=n.pos,s=!0;if(n.src.charCodeAt(n.pos)!==91)return!1;const l=n.pos,f=n.posMax,d=n.pos+1,p=n.md.helpers.parseLinkLabel(n,n.pos,!0);if(p<0)return!1;let h=p+1;if(h<f&&n.src.charCodeAt(h)===40){for(s=!1,h++;h<f&&(r=n.src.charCodeAt(h),!(!Re(r)&&r!==10));h++);if(h>=f)return!1;if(c=h,i=n.md.helpers.parseLinkDestination(n.src,h,n.posMax),i.ok){for(u=n.md.normalizeLink(i.str),n.md.validateLink(u)?h=i.pos:u="",c=h;h<f&&(r=n.src.charCodeAt(h),!(!Re(r)&&r!==10));h++);if(i=n.md.helpers.parseLinkTitle(n.src,h,n.posMax),h<f&&c!==h&&i.ok)for(a=i.str,h=i.pos;h<f&&(r=n.src.charCodeAt(h),!(!Re(r)&&r!==10));h++);}(h>=f||n.src.charCodeAt(h)!==41)&&(s=!0),h++}if(s){if(typeof n.env.references>"u")return!1;if(h<f&&n.src.charCodeAt(h)===91?(c=h+1,h=n.md.helpers.parseLinkLabel(n,h),h>=0?t=n.src.slice(c,h++):h=p+1):h=p+1,t||(t=n.src.slice(d,p)),o=n.env.references[Mo(t)],!o)return n.pos=l,!1;u=o.href,a=o.title}if(!e){n.pos=d,n.posMax=p;const v=n.push("link_open","a",1),m=[["href",u]];v.attrs=m,a&&m.push(["title",a]),n.linkLevel++,n.md.inline.tokenize(n),n.linkLevel--,n.push("link_close","a",-1)}return n.pos=h,n.posMax=f,!0}function DF(n,e){let r,t,i,o,u,a,c,s,l="";const f=n.pos,d=n.posMax;if(n.src.charCodeAt(n.pos)!==33||n.src.charCodeAt(n.pos+1)!==91)return!1;const p=n.pos+2,h=n.md.helpers.parseLinkLabel(n,n.pos+1,!1);if(h<0)return!1;if(o=h+1,o<d&&n.src.charCodeAt(o)===40){for(o++;o<d&&(r=n.src.charCodeAt(o),!(!Re(r)&&r!==10));o++);if(o>=d)return!1;for(s=o,a=n.md.helpers.parseLinkDestination(n.src,o,n.posMax),a.ok&&(l=n.md.normalizeLink(a.str),n.md.validateLink(l)?o=a.pos:l=""),s=o;o<d&&(r=n.src.charCodeAt(o),!(!Re(r)&&r!==10));o++);if(a=n.md.helpers.parseLinkTitle(n.src,o,n.posMax),o<d&&s!==o&&a.ok)for(c=a.str,o=a.pos;o<d&&(r=n.src.charCodeAt(o),!(!Re(r)&&r!==10));o++);else c="";if(o>=d||n.src.charCodeAt(o)!==41)return n.pos=f,!1;o++}else{if(typeof n.env.references>"u")return!1;if(o<d&&n.src.charCodeAt(o)===91?(s=o+1,o=n.md.helpers.parseLinkLabel(n,o),o>=0?i=n.src.slice(s,o++):o=h+1):o=h+1,i||(i=n.src.slice(p,h)),u=n.env.references[Mo(i)],!u)return n.pos=f,!1;l=u.href,c=u.title}if(!e){t=n.src.slice(p,h);const v=[];n.md.inline.parse(t,n.md,n.env,v);const m=n.push("image","img",0),b=[["src",l],["alt",""]];m.attrs=b,m.children=v,m.content=t,c&&b.push(["title",c])}return n.pos=o,n.posMax=d,!0}const PF=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,HF=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function xF(n,e){let r=n.pos;if(n.src.charCodeAt(r)!==60)return!1;const t=n.pos,i=n.posMax;for(;;){if(++r>=i)return!1;const u=n.src.charCodeAt(r);if(u===60)return!1;if(u===62)break}const o=n.src.slice(t+1,r);if(HF.test(o)){const u=n.md.normalizeLink(o);if(!n.md.validateLink(u))return!1;if(!e){const a=n.push("link_open","a",1);a.attrs=[["href",u]],a.markup="autolink",a.info="auto";const c=n.push("text","",0);c.content=n.md.normalizeLinkText(o);const s=n.push("link_close","a",-1);s.markup="autolink",s.info="auto"}return n.pos+=o.length+2,!0}if(PF.test(o)){const u=n.md.normalizeLink("mailto:"+o);if(!n.md.validateLink(u))return!1;if(!e){const a=n.push("link_open","a",1);a.attrs=[["href",u]],a.markup="autolink",a.info="auto";const c=n.push("text","",0);c.content=n.md.normalizeLinkText(o);const s=n.push("link_close","a",-1);s.markup="autolink",s.info="auto"}return n.pos+=o.length+2,!0}return!1}function BF(n){return/^<a[>\s]/i.test(n)}function UF(n){return/^<\/a\s*>/i.test(n)}function WF(n){const e=n|32;return e>=97&&e<=122}function jF(n,e){if(!n.md.options.html)return!1;const r=n.posMax,t=n.pos;if(n.src.charCodeAt(t)!==60||t+2>=r)return!1;const i=n.src.charCodeAt(t+1);if(i!==33&&i!==63&&i!==47&&!WF(i))return!1;const o=n.src.slice(t).match(_F);if(!o)return!1;if(!e){const u=n.push("html_inline","",0);u.content=o[0],BF(u.content)&&n.linkLevel++,UF(u.content)&&n.linkLevel--}return n.pos+=o[0].length,!0}const GF=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,VF=/^&([a-z][a-z0-9]{1,31});/i;function XF(n,e){const r=n.pos,t=n.posMax;if(n.src.charCodeAt(r)!==38||r+1>=t)return!1;if(n.src.charCodeAt(r+1)===35){const o=n.src.slice(r).match(GF);if(o){if(!e){const u=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),a=n.push("text_special","",0);a.content=Zp(u)?Vi(u):Vi(65533),a.markup=o[0],a.info="entity"}return n.pos+=o[0].length,!0}}else{const o=n.src.slice(r).match(VF);if(o){const u=P9(o[0]);if(u!==o[0]){if(!e){const a=n.push("text_special","",0);a.content=u,a.markup=o[0],a.info="entity"}return n.pos+=o[0].length,!0}}}return!1}function Mg(n){const e={},r=n.length;if(!r)return;let t=0,i=-2;const o=[];for(let u=0;u<r;u++){const a=n[u];if(o.push(0),(n[t].marker!==a.marker||i!==a.token-1)&&(t=u),i=a.token,a.length=a.length||0,!a.close)continue;e.hasOwnProperty(a.marker)||(e[a.marker]=[-1,-1,-1,-1,-1,-1]);const c=e[a.marker][(a.open?3:0)+a.length%3];let s=t-o[t]-1,l=s;for(;s>c;s-=o[s]+1){const f=n[s];if(f.marker===a.marker&&f.open&&f.end<0){let d=!1;if((f.close||a.open)&&(f.length+a.length)%3===0&&(f.length%3!==0||a.length%3!==0)&&(d=!0),!d){const p=s>0&&!n[s-1].open?o[s-1]+1:0;o[u]=u-s+p,o[s]=p,a.open=!1,f.end=u,f.close=!1,l=-1,i=-2;break}}}l!==-1&&(e[a.marker][(a.open?3:0)+(a.length||0)%3]=l)}}function YF(n){const e=n.tokens_meta,r=n.tokens_meta.length;Mg(n.delimiters);for(let t=0;t<r;t++)e[t]&&e[t].delimiters&&Mg(e[t].delimiters)}function KF(n){let e,r,t=0;const i=n.tokens,o=n.tokens.length;for(e=r=0;e<o;e++)i[e].nesting<0&&t--,i[e].level=t,i[e].nesting>0&&t++,i[e].type==="text"&&e+1<o&&i[e+1].type==="text"?i[e+1].content=i[e].content+i[e+1].content:(e!==r&&(i[r]=i[e]),r++);e!==r&&(i.length=r)}const L1=[["text",kF],["linkify",IF],["newline",RF],["escape",CF],["backticks",MF],["strikethrough",G9.tokenize],["emphasis",V9.tokenize],["link",OF],["image",DF],["autolink",xF],["html_inline",jF],["entity",XF]],I1=[["balance_pairs",YF],["strikethrough",G9.postProcess],["emphasis",V9.postProcess],["fragments_join",KF]];function Qt(){this.ruler=new cn;for(let n=0;n<L1.length;n++)this.ruler.push(L1[n][0],L1[n][1]);this.ruler2=new cn;for(let n=0;n<I1.length;n++)this.ruler2.push(I1[n][0],I1[n][1])}Qt.prototype.skipToken=function(n){const e=n.pos,r=this.ruler.getRules(""),t=r.length,i=n.md.options.maxNesting,o=n.cache;if(typeof o[e]<"u"){n.pos=o[e];return}let u=!1;if(n.level<i){for(let a=0;a<t;a++)if(n.level++,u=r[a](n,!0),n.level--,u){if(e>=n.pos)throw new Error("inline rule didn't increment state.pos");break}}else n.pos=n.posMax;u||n.pos++,o[e]=n.pos};Qt.prototype.tokenize=function(n){const e=this.ruler.getRules(""),r=e.length,t=n.posMax,i=n.md.options.maxNesting;for(;n.pos<t;){const o=n.pos;let u=!1;if(n.level<i){for(let a=0;a<r;a++)if(u=e[a](n,!1),u){if(o>=n.pos)throw new Error("inline rule didn't increment state.pos");break}}if(u){if(n.pos>=t)break;continue}n.pending+=n.src[n.pos++]}n.pending&&n.pushPending()};Qt.prototype.parse=function(n,e,r,t){const i=new this.State(n,e,r,t);this.tokenize(i);const o=this.ruler2.getRules(""),u=o.length;for(let a=0;a<u;a++)o[a](i)};Qt.prototype.State=Jt;function zF(n){const e={};n=n||{},e.src_Any=N9.source,e.src_Cc=F9.source,e.src_Z=O9.source,e.src_P=Jp.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");const r="[><｜]";return e.src_pseudo_letter="(?:(?!"+r+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+r+"|"+e.src_ZPCc+")(?!"+(n["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+r+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(n["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+r+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}function Q1(n){return Array.prototype.slice.call(arguments,1).forEach(function(r){r&&Object.keys(r).forEach(function(t){n[t]=r[t]})}),n}function No(n){return Object.prototype.toString.call(n)}function JF(n){return No(n)==="[object String]"}function QF(n){return No(n)==="[object Object]"}function ZF(n){return No(n)==="[object RegExp]"}function qg(n){return No(n)==="[object Function]"}function eT(n){return n.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const X9={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function nT(n){return Object.keys(n||{}).reduce(function(e,r){return e||X9.hasOwnProperty(r)},!1)}const rT={"http:":{validate:function(n,e,r){const t=n.slice(e);return r.re.http||(r.re.http=new RegExp("^\\/\\/"+r.re.src_auth+r.re.src_host_port_strict+r.re.src_path,"i")),r.re.http.test(t)?t.match(r.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(n,e,r){const t=n.slice(e);return r.re.no_http||(r.re.no_http=new RegExp("^"+r.re.src_auth+"(?:localhost|(?:(?:"+r.re.src_domain+")\\.)+"+r.re.src_domain_root+")"+r.re.src_port+r.re.src_host_terminator+r.re.src_path,"i")),r.re.no_http.test(t)?e>=3&&n[e-3]===":"||e>=3&&n[e-3]==="/"?0:t.match(r.re.no_http)[0].length:0}},"mailto:":{validate:function(n,e,r){const t=n.slice(e);return r.re.mailto||(r.re.mailto=new RegExp("^"+r.re.src_email_name+"@"+r.re.src_host_strict,"i")),r.re.mailto.test(t)?t.match(r.re.mailto)[0].length:0}}},tT="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",iT="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function oT(n){n.__index__=-1,n.__text_cache__=""}function uT(n){return function(e,r){const t=e.slice(r);return n.test(t)?t.match(n)[0].length:0}}function Ng(){return function(n,e){e.normalize(n)}}function Xi(n){const e=n.re=zF(n.__opts__),r=n.__tlds__.slice();n.onCompile(),n.__tlds_replaced__||r.push(tT),r.push(e.src_xn),e.src_tlds=r.join("|");function t(a){return a.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(t(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(t(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(t(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(t(e.tpl_host_fuzzy_test),"i");const i=[];n.__compiled__={};function o(a,c){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+c)}Object.keys(n.__schemas__).forEach(function(a){const c=n.__schemas__[a];if(c===null)return;const s={validate:null,link:null};if(n.__compiled__[a]=s,QF(c)){ZF(c.validate)?s.validate=uT(c.validate):qg(c.validate)?s.validate=c.validate:o(a,c),qg(c.normalize)?s.normalize=c.normalize:c.normalize?o(a,c):s.normalize=Ng();return}if(JF(c)){i.push(a);return}o(a,c)}),i.forEach(function(a){n.__compiled__[n.__schemas__[a]]&&(n.__compiled__[a].validate=n.__compiled__[n.__schemas__[a]].validate,n.__compiled__[a].normalize=n.__compiled__[n.__schemas__[a]].normalize)}),n.__compiled__[""]={validate:null,normalize:Ng()};const u=Object.keys(n.__compiled__).filter(function(a){return a.length>0&&n.__compiled__[a]}).map(eT).join("|");n.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+u+")","i"),n.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+u+")","ig"),n.re.schema_at_start=RegExp("^"+n.re.schema_search.source,"i"),n.re.pretest=RegExp("("+n.re.schema_test.source+")|("+n.re.host_fuzzy_test.source+")|@","i"),oT(n)}function aT(n,e){const r=n.__index__,t=n.__last_index__,i=n.__text_cache__.slice(r,t);this.schema=n.__schema__.toLowerCase(),this.index=r+e,this.lastIndex=t+e,this.raw=i,this.text=i,this.url=i}function Z1(n,e){const r=new aT(n,e);return n.__compiled__[r.schema].normalize(r,n),r}function hn(n,e){if(!(this instanceof hn))return new hn(n,e);e||nT(n)&&(e=n,n={}),this.__opts__=Q1({},X9,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Q1({},rT,n),this.__compiled__={},this.__tlds__=iT,this.__tlds_replaced__=!1,this.re={},Xi(this)}hn.prototype.add=function(e,r){return this.__schemas__[e]=r,Xi(this),this};hn.prototype.set=function(e){return this.__opts__=Q1(this.__opts__,e),this};hn.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;let r,t,i,o,u,a,c,s,l;if(this.re.schema_test.test(e)){for(c=this.re.schema_search,c.lastIndex=0;(r=c.exec(e))!==null;)if(o=this.testSchemaAt(e,r[2],c.lastIndex),o){this.__schema__=r[2],this.__index__=r.index+r[1].length,this.__last_index__=r.index+r[0].length+o;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(s=e.search(this.re.host_fuzzy_test),s>=0&&(this.__index__<0||s<this.__index__)&&(t=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(u=t.index+t[1].length,(this.__index__<0||u<this.__index__)&&(this.__schema__="",this.__index__=u,this.__last_index__=t.index+t[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(l=e.indexOf("@"),l>=0&&(i=e.match(this.re.email_fuzzy))!==null&&(u=i.index+i[1].length,a=i.index+i[0].length,(this.__index__<0||u<this.__index__||u===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=u,this.__last_index__=a))),this.__index__>=0};hn.prototype.pretest=function(e){return this.re.pretest.test(e)};hn.prototype.testSchemaAt=function(e,r,t){return this.__compiled__[r.toLowerCase()]?this.__compiled__[r.toLowerCase()].validate(e,t,this):0};hn.prototype.match=function(e){const r=[];let t=0;this.__index__>=0&&this.__text_cache__===e&&(r.push(Z1(this,t)),t=this.__last_index__);let i=t?e.slice(t):e;for(;this.test(i);)r.push(Z1(this,t)),i=i.slice(this.__last_index__),t+=this.__last_index__;return r.length?r:null};hn.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;const r=this.re.schema_at_start.exec(e);if(!r)return null;const t=this.testSchemaAt(e,r[2],r[0].length);return t?(this.__schema__=r[2],this.__index__=r.index+r[1].length,this.__last_index__=r.index+r[0].length+t,Z1(this,0)):null};hn.prototype.tlds=function(e,r){return e=Array.isArray(e)?e:[e],r?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(t,i,o){return t!==o[i-1]}).reverse(),Xi(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,Xi(this),this)};hn.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};hn.prototype.onCompile=function(){};const Dr=2147483647,On=36,r2=1,qt=26,sT=38,cT=700,Y9=72,K9=128,z9="-",lT=/^xn--/,fT=/[^\0-\x7F]/,dT=/[\x2E\u3002\uFF0E\uFF61]/g,pT={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},R1=On-r2,Dn=Math.floor,C1=String.fromCharCode;function rr(n){throw new RangeError(pT[n])}function hT(n,e){const r=[];let t=n.length;for(;t--;)r[t]=e(n[t]);return r}function J9(n,e){const r=n.split("@");let t="";r.length>1&&(t=r[0]+"@",n=r[1]),n=n.replace(dT,".");const i=n.split("."),o=hT(i,e).join(".");return t+o}function Q9(n){const e=[];let r=0;const t=n.length;for(;r<t;){const i=n.charCodeAt(r++);if(i>=55296&&i<=56319&&r<t){const o=n.charCodeAt(r++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),r--)}else e.push(i)}return e}const vT=n=>String.fromCodePoint(...n),mT=function(n){return n>=48&&n<58?26+(n-48):n>=65&&n<91?n-65:n>=97&&n<123?n-97:On},Fg=function(n,e){return n+22+75*(n<26)-((e!=0)<<5)},Z9=function(n,e,r){let t=0;for(n=r?Dn(n/cT):n>>1,n+=Dn(n/e);n>R1*qt>>1;t+=On)n=Dn(n/R1);return Dn(t+(R1+1)*n/(n+sT))},ey=function(n){const e=[],r=n.length;let t=0,i=K9,o=Y9,u=n.lastIndexOf(z9);u<0&&(u=0);for(let a=0;a<u;++a)n.charCodeAt(a)>=128&&rr("not-basic"),e.push(n.charCodeAt(a));for(let a=u>0?u+1:0;a<r;){const c=t;for(let l=1,f=On;;f+=On){a>=r&&rr("invalid-input");const d=mT(n.charCodeAt(a++));d>=On&&rr("invalid-input"),d>Dn((Dr-t)/l)&&rr("overflow"),t+=d*l;const p=f<=o?r2:f>=o+qt?qt:f-o;if(d<p)break;const h=On-p;l>Dn(Dr/h)&&rr("overflow"),l*=h}const s=e.length+1;o=Z9(t-c,s,c==0),Dn(t/s)>Dr-i&&rr("overflow"),i+=Dn(t/s),t%=s,e.splice(t++,0,i)}return String.fromCodePoint(...e)},ny=function(n){const e=[];n=Q9(n);const r=n.length;let t=K9,i=0,o=Y9;for(const c of n)c<128&&e.push(C1(c));const u=e.length;let a=u;for(u&&e.push(z9);a<r;){let c=Dr;for(const l of n)l>=t&&l<c&&(c=l);const s=a+1;c-t>Dn((Dr-i)/s)&&rr("overflow"),i+=(c-t)*s,t=c;for(const l of n)if(l<t&&++i>Dr&&rr("overflow"),l===t){let f=i;for(let d=On;;d+=On){const p=d<=o?r2:d>=o+qt?qt:d-o;if(f<p)break;const h=f-p,v=On-p;e.push(C1(Fg(p+h%v,0))),f=Dn(h/v)}e.push(C1(Fg(f,0))),o=Z9(i,s,a===u),i=0,++a}++i,++t}return e.join("")},bT=function(n){return J9(n,function(e){return lT.test(e)?ey(e.slice(4).toLowerCase()):e})},gT=function(n){return J9(n,function(e){return fT.test(e)?"xn--"+ny(e):e})},ry={version:"2.3.1",ucs2:{decode:Q9,encode:vT},decode:ey,encode:ny,toASCII:gT,toUnicode:bT},_T={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},yT={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},ET={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},wT={default:_T,zero:yT,commonmark:ET},$T=/^(vbscript|javascript|file|data):/,ST=/^data:image\/(gif|png|jpeg|webp);/;function AT(n){const e=n.trim().toLowerCase();return $T.test(e)?ST.test(e):!0}const ty=["http:","https:","mailto:"];function kT(n){const e=zp(n,!0);if(e.hostname&&(!e.protocol||ty.indexOf(e.protocol)>=0))try{e.hostname=ry.toASCII(e.hostname)}catch{}return zt(Kp(e))}function LT(n){const e=zp(n,!0);if(e.hostname&&(!e.protocol||ty.indexOf(e.protocol)>=0))try{e.hostname=ry.toUnicode(e.hostname)}catch{}return Hr(Kp(e),Hr.defaultChars+"%")}function vn(n,e){if(!(this instanceof vn))return new vn(n,e);e||Qp(n)||(e=n||{},n="default"),this.inline=new Qt,this.block=new qo,this.core=new e2,this.renderer=new Zr,this.linkify=new hn,this.validateLink=AT,this.normalizeLink=kT,this.normalizeLinkText=LT,this.utils=RN,this.helpers=Co({},NN),this.options={},this.configure(n),e&&this.set(e)}vn.prototype.set=function(n){return Co(this.options,n),this};vn.prototype.configure=function(n){const e=this;if(Qp(n)){const r=n;if(n=wT[r],!n)throw new Error('Wrong `markdown-it` preset "'+r+'", check name')}if(!n)throw new Error("Wrong `markdown-it` preset, can't be empty");return n.options&&e.set(n.options),n.components&&Object.keys(n.components).forEach(function(r){n.components[r].rules&&e[r].ruler.enableOnly(n.components[r].rules),n.components[r].rules2&&e[r].ruler2.enableOnly(n.components[r].rules2)}),this};vn.prototype.enable=function(n,e){let r=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(i){r=r.concat(this[i].ruler.enable(n,!0))},this),r=r.concat(this.inline.ruler2.enable(n,!0));const t=n.filter(function(i){return r.indexOf(i)<0});if(t.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+t);return this};vn.prototype.disable=function(n,e){let r=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(i){r=r.concat(this[i].ruler.disable(n,!0))},this),r=r.concat(this.inline.ruler2.disable(n,!0));const t=n.filter(function(i){return r.indexOf(i)<0});if(t.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+t);return this};vn.prototype.use=function(n){const e=[this].concat(Array.prototype.slice.call(arguments,1));return n.apply(n,e),this};vn.prototype.parse=function(n,e){if(typeof n!="string")throw new Error("Input data should be a String");const r=new this.core.State(n,this,e);return this.core.process(r),r.tokens};vn.prototype.render=function(n,e){return e=e||{},this.renderer.render(this.parse(n,e),this.options,e)};vn.prototype.parseInline=function(n,e){const r=new this.core.State(n,this,e);return r.inlineMode=!0,this.core.process(r),r.tokens};vn.prototype.renderInline=function(n,e){return e=e||{},this.renderer.render(this.parseInline(n,e),this.options,e)};const iy=new vn({html:!1,linkify:!0,breaks:!0}),oy="calculator-inline-reasoning",Tg="calculator-adhoc-meta";function t2(n,e){const r=document.getElementById(Tg);if(!e){r==null||r.remove();return}const t=r??(()=>{const o=document.createElement("div");return o.id=Tg,n.insertAdjacentElement("beforebegin",o),o})();t.className="adhoc-meta",t.innerHTML="";const i=document.createElement("div");i.className="adhoc-meta-body";try{i.innerHTML=iy.render(e)}catch{i.textContent=e}t.appendChild(i)}function uy(n,e){const r=new Set(Object.keys(n)),t=[];for(const i of e)r.has(i)&&(t.push(i),r.delete(i));for(const i of[...r].sort())t.push(i);return t}function i2(n,e,r){const t=document.getElementById(oy),i=e.map((l,f)=>{var h;const d=Object.fromEntries(Object.entries(l.reasoning??{}).filter(([,v])=>v.trim()!=="")),p=(h=l.misc)!=null&&h.trim()?l.misc:void 0;return{trialIndex:f,reasoning:d,misc:p}}).filter(({reasoning:l,misc:f})=>Object.keys(l).length>0||f!==void 0);if(i.length===0){t==null||t.remove();return}const o=t??IT(n);o.innerHTML="";const u=document.createElement("details");u.className="reasoning-inline",u.open=!0;const a=document.createElement("summary");a.className="reasoning-inline-summary";const c=i.some(({reasoning:l})=>Object.keys(l).length>0),s=i.some(({misc:l})=>l!==void 0);c&&s?a.textContent="Reasoning and misc":c?a.textContent="Reasoning":a.textContent="Misc",u.appendChild(a);for(const{trialIndex:l,reasoning:f,misc:d}of i){if(e.length>1){const p=document.createElement("div");p.className="reasoning-trial-label",p.textContent=`Trial ${l+1}`,u.appendChild(p)}for(const p of uy(f,r))u.appendChild(Og(p,f[p]));d!==void 0&&u.appendChild(Og("Misc",d))}o.appendChild(u)}function IT(n){const e=document.createElement("div");return e.id=oy,n.insertAdjacentElement("afterend",e),e}function Og(n,e){const r=document.createElement("div");r.className="reasoning-item";const t=document.createElement("div");t.className="reasoning-svar-label",t.textContent=n,r.appendChild(t);const i=document.createElement("div");i.className="reasoning-md";try{i.innerHTML=iy.render(e)}catch{i.textContent=e}return r.appendChild(i),r}var M1,Dg;function RT(){if(Dg)return M1;Dg=1;function n(M){return M instanceof Map?M.clear=M.delete=M.set=function(){throw new Error("map is read-only")}:M instanceof Set&&(M.add=M.clear=M.delete=function(){throw new Error("set is read-only")}),Object.freeze(M),Object.getOwnPropertyNames(M).forEach(D=>{const V=M[D],se=typeof V;(se==="object"||se==="function")&&!Object.isFrozen(V)&&n(V)}),M}class e{constructor(D){D.data===void 0&&(D.data={}),this.data=D.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function r(M){return M.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function t(M,...D){const V=Object.create(null);for(const se in M)V[se]=M[se];return D.forEach(function(se){for(const Pe in se)V[Pe]=se[Pe]}),V}const i="</span>",o=M=>!!M.scope,u=(M,{prefix:D})=>{if(M.startsWith("language:"))return M.replace("language:","language-");if(M.includes(".")){const V=M.split(".");return[`${D}${V.shift()}`,...V.map((se,Pe)=>`${se}${"_".repeat(Pe+1)}`)].join(" ")}return`${D}${M}`};class a{constructor(D,V){this.buffer="",this.classPrefix=V.classPrefix,D.walk(this)}addText(D){this.buffer+=r(D)}openNode(D){if(!o(D))return;const V=u(D.scope,{prefix:this.classPrefix});this.span(V)}closeNode(D){o(D)&&(this.buffer+=i)}value(){return this.buffer}span(D){this.buffer+=`<span class="${D}">`}}const c=(M={})=>{const D={children:[]};return Object.assign(D,M),D};class s{constructor(){this.rootNode=c(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(D){this.top.children.push(D)}openNode(D){const V=c({scope:D});this.add(V),this.stack.push(V)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(D){return this.constructor._walk(D,this.rootNode)}static _walk(D,V){return typeof V=="string"?D.addText(V):V.children&&(D.openNode(V),V.children.forEach(se=>this._walk(D,se)),D.closeNode(V)),D}static _collapse(D){typeof D!="string"&&D.children&&(D.children.every(V=>typeof V=="string")?D.children=[D.children.join("")]:D.children.forEach(V=>{s._collapse(V)}))}}class l extends s{constructor(D){super(),this.options=D}addText(D){D!==""&&this.add(D)}startScope(D){this.openNode(D)}endScope(){this.closeNode()}__addSublanguage(D,V){const se=D.root;V&&(se.scope=`language:${V}`),this.add(se)}toHTML(){return new a(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function f(M){return M?typeof M=="string"?M:M.source:null}function d(M){return v("(?=",M,")")}function p(M){return v("(?:",M,")*")}function h(M){return v("(?:",M,")?")}function v(...M){return M.map(V=>f(V)).join("")}function m(M){const D=M[M.length-1];return typeof D=="object"&&D.constructor===Object?(M.splice(M.length-1,1),D):{}}function b(...M){return"("+(m(M).capture?"":"?:")+M.map(se=>f(se)).join("|")+")"}function g(M){return new RegExp(M.toString()+"|").exec("").length-1}function _(M,D){const V=M&&M.exec(D);return V&&V.index===0}const y=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function E(M,{joinWith:D}){let V=0;return M.map(se=>{V+=1;const Pe=V;let He=f(se),ee="";for(;He.length>0;){const z=y.exec(He);if(!z){ee+=He;break}ee+=He.substring(0,z.index),He=He.substring(z.index+z[0].length),z[0][0]==="\\"&&z[1]?ee+="\\"+String(Number(z[1])+Pe):(ee+=z[0],z[0]==="("&&V++)}return ee}).map(se=>`(${se})`).join(D)}const I=/\b\B/,A="[a-zA-Z]\\w*",C="[a-zA-Z_]\\w*",k="\\b\\d+(\\.\\d+)?",S="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",w="\\b(0b[01]+)",$="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",L=(M={})=>{const D=/^#![ ]*\//;return M.binary&&(M.begin=v(D,/.*\b/,M.binary,/\b.*/)),t({scope:"meta",begin:D,end:/$/,relevance:0,"on:begin":(V,se)=>{V.index!==0&&se.ignoreMatch()}},M)},R={begin:"\\\\[\\s\\S]",relevance:0},T={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[R]},N={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[R]},B={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},O=function(M,D,V={}){const se=t({scope:"comment",begin:M,end:D,contains:[]},V);se.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Pe=b("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return se.contains.push({begin:v(/[ ]+/,"(",Pe,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),se},H=O("//","$"),F=O("/\\*","\\*/"),Q=O("#","$"),W={scope:"number",begin:k,relevance:0},K={scope:"number",begin:S,relevance:0},re={scope:"number",begin:w,relevance:0},G={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[R,{begin:/\[/,end:/\]/,relevance:0,contains:[R]}]},x={scope:"title",begin:A,relevance:0},Y={scope:"title",begin:C,relevance:0},j={begin:"\\.\\s*"+C,relevance:0};var fe=Object.freeze({__proto__:null,APOS_STRING_MODE:T,BACKSLASH_ESCAPE:R,BINARY_NUMBER_MODE:re,BINARY_NUMBER_RE:w,COMMENT:O,C_BLOCK_COMMENT_MODE:F,C_LINE_COMMENT_MODE:H,C_NUMBER_MODE:K,C_NUMBER_RE:S,END_SAME_AS_BEGIN:function(M){return Object.assign(M,{"on:begin":(D,V)=>{V.data._beginMatch=D[1]},"on:end":(D,V)=>{V.data._beginMatch!==D[1]&&V.ignoreMatch()}})},HASH_COMMENT_MODE:Q,IDENT_RE:A,MATCH_NOTHING_RE:I,METHOD_GUARD:j,NUMBER_MODE:W,NUMBER_RE:k,PHRASAL_WORDS_MODE:B,QUOTE_STRING_MODE:N,REGEXP_MODE:G,RE_STARTERS_RE:$,SHEBANG:L,TITLE_MODE:x,UNDERSCORE_IDENT_RE:C,UNDERSCORE_TITLE_MODE:Y});function Z(M,D){M.input[M.index-1]==="."&&D.ignoreMatch()}function oe(M,D){M.className!==void 0&&(M.scope=M.className,delete M.className)}function we(M,D){D&&M.beginKeywords&&(M.begin="\\b("+M.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",M.__beforeBegin=Z,M.keywords=M.keywords||M.beginKeywords,delete M.beginKeywords,M.relevance===void 0&&(M.relevance=0))}function ge(M,D){Array.isArray(M.illegal)&&(M.illegal=b(...M.illegal))}function Qn(M,D){if(M.match){if(M.begin||M.end)throw new Error("begin & end are not supported with match");M.begin=M.match,delete M.match}}function un(M,D){M.relevance===void 0&&(M.relevance=1)}const be=(M,D)=>{if(!M.beforeMatch)return;if(M.starts)throw new Error("beforeMatch cannot be used with starts");const V=Object.assign({},M);Object.keys(M).forEach(se=>{delete M[se]}),M.keywords=V.keywords,M.begin=v(V.beforeMatch,d(V.begin)),M.starts={relevance:0,contains:[Object.assign(V,{endsParent:!0})]},M.relevance=0,delete V.beforeMatch},En=["of","and","for","in","not","or","if","then","parent","list","value"],Xe="keyword";function wn(M,D,V=Xe){const se=Object.create(null);return typeof M=="string"?Pe(V,M.split(" ")):Array.isArray(M)?Pe(V,M):Object.keys(M).forEach(function(He){Object.assign(se,wn(M[He],D,He))}),se;function Pe(He,ee){D&&(ee=ee.map(z=>z.toLowerCase())),ee.forEach(function(z){const ae=z.split("|");se[ae[0]]=[He,br(ae[0],ae[1])]})}}function br(M,D){return D?Number(D):J(M)?0:1}function J(M){return En.includes(M.toLowerCase())}const he={},$n=M=>{console.error(M)},ut=(M,...D)=>{console.log(`WARN: ${M}`,...D)},Gn=(M,D)=>{he[`${M}/${D}`]||(console.log(`Deprecated as of ${M}. ${D}`),he[`${M}/${D}`]=!0)},Zn=new Error;function Rr(M,D,{key:V}){let se=0;const Pe=M[V],He={},ee={};for(let z=1;z<=D.length;z++)ee[z+se]=Pe[z],He[z+se]=!0,se+=g(D[z-1]);M[V]=ee,M[V]._emit=He,M[V]._multi=!0}function at(M){if(Array.isArray(M.begin)){if(M.skip||M.excludeBegin||M.returnBegin)throw $n("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Zn;if(typeof M.beginScope!="object"||M.beginScope===null)throw $n("beginScope must be object"),Zn;Rr(M,M.begin,{key:"beginScope"}),M.begin=E(M.begin,{joinWith:""})}}function st(M){if(Array.isArray(M.end)){if(M.skip||M.excludeEnd||M.returnEnd)throw $n("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Zn;if(typeof M.endScope!="object"||M.endScope===null)throw $n("endScope must be object"),Zn;Rr(M,M.end,{key:"endScope"}),M.end=E(M.end,{joinWith:""})}}function ti(M){M.scope&&typeof M.scope=="object"&&M.scope!==null&&(M.beginScope=M.scope,delete M.scope)}function Ye(M){ti(M),typeof M.beginScope=="string"&&(M.beginScope={_wrap:M.beginScope}),typeof M.endScope=="string"&&(M.endScope={_wrap:M.endScope}),at(M),st(M)}function Oe(M){function D(ee,z){return new RegExp(f(ee),"m"+(M.case_insensitive?"i":"")+(M.unicodeRegex?"u":"")+(z?"g":""))}class V{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(z,ae){ae.position=this.position++,this.matchIndexes[this.matchAt]=ae,this.regexes.push([ae,z]),this.matchAt+=g(z)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const z=this.regexes.map(ae=>ae[1]);this.matcherRe=D(E(z,{joinWith:"|"}),!0),this.lastIndex=0}exec(z){this.matcherRe.lastIndex=this.lastIndex;const ae=this.matcherRe.exec(z);if(!ae)return null;const We=ae.findIndex((ct,Uo)=>Uo>0&&ct!==void 0),xe=this.matchIndexes[We];return ae.splice(0,We),Object.assign(ae,xe)}}class se{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(z){if(this.multiRegexes[z])return this.multiRegexes[z];const ae=new V;return this.rules.slice(z).forEach(([We,xe])=>ae.addRule(We,xe)),ae.compile(),this.multiRegexes[z]=ae,ae}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(z,ae){this.rules.push([z,ae]),ae.type==="begin"&&this.count++}exec(z){const ae=this.getMatcher(this.regexIndex);ae.lastIndex=this.lastIndex;let We=ae.exec(z);if(this.resumingScanAtSamePosition()&&!(We&&We.index===this.lastIndex)){const xe=this.getMatcher(0);xe.lastIndex=this.lastIndex+1,We=xe.exec(z)}return We&&(this.regexIndex+=We.position+1,this.regexIndex===this.count&&this.considerAll()),We}}function Pe(ee){const z=new se;return ee.contains.forEach(ae=>z.addRule(ae.begin,{rule:ae,type:"begin"})),ee.terminatorEnd&&z.addRule(ee.terminatorEnd,{type:"end"}),ee.illegal&&z.addRule(ee.illegal,{type:"illegal"}),z}function He(ee,z){const ae=ee;if(ee.isCompiled)return ae;[oe,Qn,Ye,be].forEach(xe=>xe(ee,z)),M.compilerExtensions.forEach(xe=>xe(ee,z)),ee.__beforeBegin=null,[we,ge,un].forEach(xe=>xe(ee,z)),ee.isCompiled=!0;let We=null;return typeof ee.keywords=="object"&&ee.keywords.$pattern&&(ee.keywords=Object.assign({},ee.keywords),We=ee.keywords.$pattern,delete ee.keywords.$pattern),We=We||/\w+/,ee.keywords&&(ee.keywords=wn(ee.keywords,M.case_insensitive)),ae.keywordPatternRe=D(We,!0),z&&(ee.begin||(ee.begin=/\B|\b/),ae.beginRe=D(ae.begin),!ee.end&&!ee.endsWithParent&&(ee.end=/\B|\b/),ee.end&&(ae.endRe=D(ae.end)),ae.terminatorEnd=f(ae.end)||"",ee.endsWithParent&&z.terminatorEnd&&(ae.terminatorEnd+=(ee.end?"|":"")+z.terminatorEnd)),ee.illegal&&(ae.illegalRe=D(ee.illegal)),ee.contains||(ee.contains=[]),ee.contains=[].concat(...ee.contains.map(function(xe){return Ke(xe==="self"?ee:xe)})),ee.contains.forEach(function(xe){He(xe,ae)}),ee.starts&&He(ee.starts,z),ae.matcher=Pe(ae),ae}if(M.compilerExtensions||(M.compilerExtensions=[]),M.contains&&M.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return M.classNameAliases=t(M.classNameAliases||{}),He(M)}function Cr(M){return M?M.endsWithParent||Cr(M.starts):!1}function Ke(M){return M.variants&&!M.cachedVariants&&(M.cachedVariants=M.variants.map(function(D){return t(M,{variants:null},D)})),M.cachedVariants?M.cachedVariants:Cr(M)?t(M,{starts:M.starts?t(M.starts):null}):Object.isFrozen(M)?t(M):M}var Sn="11.11.1";class fn extends Error{constructor(D,V){super(D),this.name="HTMLInjectionError",this.html=V}}const gr=r,Mr=t,qr=Symbol("nomatch"),XE=7,X2=function(M){const D=Object.create(null),V=Object.create(null),se=[];let Pe=!0;const He="Could not find the language '{}', did you forget to load/include a language module?",ee={disableAutodetect:!0,name:"Plain text",contains:[]};let z={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:l};function ae(U){return z.noHighlightRe.test(U)}function We(U){let ie=U.className+" ";ie+=U.parentNode?U.parentNode.className:"";const pe=z.languageDetectRe.exec(ie);if(pe){const Le=er(pe[1]);return Le||(ut(He.replace("{}",pe[1])),ut("Falling back to no-highlight mode for this block.",U)),Le?pe[1]:"no-highlight"}return ie.split(/\s+/).find(Le=>ae(Le)||er(Le))}function xe(U,ie,pe){let Le="",Be="";typeof ie=="object"?(Le=U,pe=ie.ignoreIllegals,Be=ie.language):(Gn("10.7.0","highlight(lang, code, ...args) has been deprecated."),Gn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Be=U,Le=ie),pe===void 0&&(pe=!0);const An={code:Le,language:Be};oi("before:highlight",An);const nr=An.result?An.result:ct(An.language,An.code,pe);return nr.code=An.code,oi("after:highlight",nr),nr}function ct(U,ie,pe,Le){const Be=Object.create(null);function An(X,te){return X.keywords[te]}function nr(){if(!ce.keywords){ze.addText(Ie);return}let X=0;ce.keywordPatternRe.lastIndex=0;let te=ce.keywordPatternRe.exec(Ie),le="";for(;te;){le+=Ie.substring(X,te.index);const $e=Cn.case_insensitive?te[0].toLowerCase():te[0],Qe=An(ce,$e);if(Qe){const[Vn,lw]=Qe;if(ze.addText(le),le="",Be[$e]=(Be[$e]||0)+1,Be[$e]<=XE&&(si+=lw),Vn.startsWith("_"))le+=te[0];else{const fw=Cn.classNameAliases[Vn]||Vn;Rn(te[0],fw)}}else le+=te[0];X=ce.keywordPatternRe.lastIndex,te=ce.keywordPatternRe.exec(Ie)}le+=Ie.substring(X),ze.addText(le)}function ui(){if(Ie==="")return;let X=null;if(typeof ce.subLanguage=="string"){if(!D[ce.subLanguage]){ze.addText(Ie);return}X=ct(ce.subLanguage,Ie,!0,nh[ce.subLanguage]),nh[ce.subLanguage]=X._top}else X=Wo(Ie,ce.subLanguage.length?ce.subLanguage:null);ce.relevance>0&&(si+=X.relevance),ze.__addSublanguage(X._emitter,X.language)}function dn(){ce.subLanguage!=null?ui():nr(),Ie=""}function Rn(X,te){X!==""&&(ze.startScope(te),ze.addText(X),ze.endScope())}function J2(X,te){let le=1;const $e=te.length-1;for(;le<=$e;){if(!X._emit[le]){le++;continue}const Qe=Cn.classNameAliases[X[le]]||X[le],Vn=te[le];Qe?Rn(Vn,Qe):(Ie=Vn,nr(),Ie=""),le++}}function Q2(X,te){return X.scope&&typeof X.scope=="string"&&ze.openNode(Cn.classNameAliases[X.scope]||X.scope),X.beginScope&&(X.beginScope._wrap?(Rn(Ie,Cn.classNameAliases[X.beginScope._wrap]||X.beginScope._wrap),Ie=""):X.beginScope._multi&&(J2(X.beginScope,te),Ie="")),ce=Object.create(X,{parent:{value:ce}}),ce}function Z2(X,te,le){let $e=_(X.endRe,le);if($e){if(X["on:end"]){const Qe=new e(X);X["on:end"](te,Qe),Qe.isMatchIgnored&&($e=!1)}if($e){for(;X.endsParent&&X.parent;)X=X.parent;return X}}if(X.endsWithParent)return Z2(X.parent,te,le)}function ow(X){return ce.matcher.regexIndex===0?(Ie+=X[0],1):(Xo=!0,0)}function uw(X){const te=X[0],le=X.rule,$e=new e(le),Qe=[le.__beforeBegin,le["on:begin"]];for(const Vn of Qe)if(Vn&&(Vn(X,$e),$e.isMatchIgnored))return ow(te);return le.skip?Ie+=te:(le.excludeBegin&&(Ie+=te),dn(),!le.returnBegin&&!le.excludeBegin&&(Ie=te)),Q2(le,X),le.returnBegin?0:te.length}function aw(X){const te=X[0],le=ie.substring(X.index),$e=Z2(ce,X,le);if(!$e)return qr;const Qe=ce;ce.endScope&&ce.endScope._wrap?(dn(),Rn(te,ce.endScope._wrap)):ce.endScope&&ce.endScope._multi?(dn(),J2(ce.endScope,X)):Qe.skip?Ie+=te:(Qe.returnEnd||Qe.excludeEnd||(Ie+=te),dn(),Qe.excludeEnd&&(Ie=te));do ce.scope&&ze.closeNode(),!ce.skip&&!ce.subLanguage&&(si+=ce.relevance),ce=ce.parent;while(ce!==$e.parent);return $e.starts&&Q2($e.starts,X),Qe.returnEnd?0:te.length}function sw(){const X=[];for(let te=ce;te!==Cn;te=te.parent)te.scope&&X.unshift(te.scope);X.forEach(te=>ze.openNode(te))}let ai={};function eh(X,te){const le=te&&te[0];if(Ie+=X,le==null)return dn(),0;if(ai.type==="begin"&&te.type==="end"&&ai.index===te.index&&le===""){if(Ie+=ie.slice(te.index,te.index+1),!Pe){const $e=new Error(`0 width match regex (${U})`);throw $e.languageName=U,$e.badRule=ai.rule,$e}return 1}if(ai=te,te.type==="begin")return uw(te);if(te.type==="illegal"&&!pe){const $e=new Error('Illegal lexeme "'+le+'" for mode "'+(ce.scope||"<unnamed>")+'"');throw $e.mode=ce,$e}else if(te.type==="end"){const $e=aw(te);if($e!==qr)return $e}if(te.type==="illegal"&&le==="")return Ie+=`
`,1;if(Vo>1e5&&Vo>te.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Ie+=le,le.length}const Cn=er(U);if(!Cn)throw $n(He.replace("{}",U)),new Error('Unknown language: "'+U+'"');const cw=Oe(Cn);let Go="",ce=Le||cw;const nh={},ze=new z.__emitter(z);sw();let Ie="",si=0,_r=0,Vo=0,Xo=!1;try{if(Cn.__emitTokens)Cn.__emitTokens(ie,ze);else{for(ce.matcher.considerAll();;){Vo++,Xo?Xo=!1:ce.matcher.considerAll(),ce.matcher.lastIndex=_r;const X=ce.matcher.exec(ie);if(!X)break;const te=ie.substring(_r,X.index),le=eh(te,X);_r=X.index+le}eh(ie.substring(_r))}return ze.finalize(),Go=ze.toHTML(),{language:U,value:Go,relevance:si,illegal:!1,_emitter:ze,_top:ce}}catch(X){if(X.message&&X.message.includes("Illegal"))return{language:U,value:gr(ie),illegal:!0,relevance:0,_illegalBy:{message:X.message,index:_r,context:ie.slice(_r-100,_r+100),mode:X.mode,resultSoFar:Go},_emitter:ze};if(Pe)return{language:U,value:gr(ie),illegal:!1,relevance:0,errorRaised:X,_emitter:ze,_top:ce};throw X}}function Uo(U){const ie={value:gr(U),illegal:!1,relevance:0,_top:ee,_emitter:new z.__emitter(z)};return ie._emitter.addText(U),ie}function Wo(U,ie){ie=ie||z.languages||Object.keys(D);const pe=Uo(U),Le=ie.filter(er).filter(z2).map(dn=>ct(dn,U,!1));Le.unshift(pe);const Be=Le.sort((dn,Rn)=>{if(dn.relevance!==Rn.relevance)return Rn.relevance-dn.relevance;if(dn.language&&Rn.language){if(er(dn.language).supersetOf===Rn.language)return 1;if(er(Rn.language).supersetOf===dn.language)return-1}return 0}),[An,nr]=Be,ui=An;return ui.secondBest=nr,ui}function YE(U,ie,pe){const Le=ie&&V[ie]||pe;U.classList.add("hljs"),U.classList.add(`language-${Le}`)}function jo(U){let ie=null;const pe=We(U);if(ae(pe))return;if(oi("before:highlightElement",{el:U,language:pe}),U.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",U);return}if(U.children.length>0&&(z.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(U)),z.throwUnescapedHTML))throw new fn("One of your code blocks includes unescaped HTML.",U.innerHTML);ie=U;const Le=ie.textContent,Be=pe?xe(Le,{language:pe,ignoreIllegals:!0}):Wo(Le);U.innerHTML=Be.value,U.dataset.highlighted="yes",YE(U,pe,Be.language),U.result={language:Be.language,re:Be.relevance,relevance:Be.relevance},Be.secondBest&&(U.secondBest={language:Be.secondBest.language,relevance:Be.secondBest.relevance}),oi("after:highlightElement",{el:U,result:Be,text:Le})}function KE(U){z=Mr(z,U)}const zE=()=>{ii(),Gn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function JE(){ii(),Gn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Y2=!1;function ii(){function U(){ii()}if(document.readyState==="loading"){Y2||window.addEventListener("DOMContentLoaded",U,!1),Y2=!0;return}document.querySelectorAll(z.cssSelector).forEach(jo)}function QE(U,ie){let pe=null;try{pe=ie(M)}catch(Le){if($n("Language definition for '{}' could not be registered.".replace("{}",U)),Pe)$n(Le);else throw Le;pe=ee}pe.name||(pe.name=U),D[U]=pe,pe.rawDefinition=ie.bind(null,M),pe.aliases&&K2(pe.aliases,{languageName:U})}function ZE(U){delete D[U];for(const ie of Object.keys(V))V[ie]===U&&delete V[ie]}function ew(){return Object.keys(D)}function er(U){return U=(U||"").toLowerCase(),D[U]||D[V[U]]}function K2(U,{languageName:ie}){typeof U=="string"&&(U=[U]),U.forEach(pe=>{V[pe.toLowerCase()]=ie})}function z2(U){const ie=er(U);return ie&&!ie.disableAutodetect}function nw(U){U["before:highlightBlock"]&&!U["before:highlightElement"]&&(U["before:highlightElement"]=ie=>{U["before:highlightBlock"](Object.assign({block:ie.el},ie))}),U["after:highlightBlock"]&&!U["after:highlightElement"]&&(U["after:highlightElement"]=ie=>{U["after:highlightBlock"](Object.assign({block:ie.el},ie))})}function rw(U){nw(U),se.push(U)}function tw(U){const ie=se.indexOf(U);ie!==-1&&se.splice(ie,1)}function oi(U,ie){const pe=U;se.forEach(function(Le){Le[pe]&&Le[pe](ie)})}function iw(U){return Gn("10.7.0","highlightBlock will be removed entirely in v12.0"),Gn("10.7.0","Please use highlightElement now."),jo(U)}Object.assign(M,{highlight:xe,highlightAuto:Wo,highlightAll:ii,highlightElement:jo,highlightBlock:iw,configure:KE,initHighlighting:zE,initHighlightingOnLoad:JE,registerLanguage:QE,unregisterLanguage:ZE,listLanguages:ew,getLanguage:er,registerAliases:K2,autoDetection:z2,inherit:Mr,addPlugin:rw,removePlugin:tw}),M.debugMode=function(){Pe=!1},M.safeMode=function(){Pe=!0},M.versionString=Sn,M.regex={concat:v,lookahead:d,either:b,optional:h,anyNumberOfTimes:p};for(const U in fe)typeof fe[U]=="object"&&n(fe[U]);return Object.assign(M,fe),M},Nr=X2({});return Nr.newInstance=()=>X2({}),M1=Nr,Nr.HighlightJS=Nr,Nr.default=Nr,M1}var CT=RT();const ay=Hn(CT);function MT(n){const e=n.regex,r=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),t=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],a={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:t,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},c={className:"meta",begin:/^(>>>|\.\.\.) /},s={className:"subst",begin:/\{/,end:/\}/,keywords:a,illegal:/#/},l={begin:/\{\{/,relevance:0},f={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,c,l,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,c,l,s]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[n.BACKSLASH_ESCAPE,l,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,l,s]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},d="[0-9](_?[0-9])*",p=`(\\b(${d}))?\\.(${d})|\\b(${d})\\.`,h=`\\b|${t.join("|")}`,v={className:"number",relevance:0,variants:[{begin:`(\\b(${d})|(${p}))[eE][+-]?(${d})[jJ]?(?=${h})`},{begin:`(${p})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${h})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${h})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${h})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${h})`},{begin:`\\b(${d})[jJ](?=${h})`}]},m={className:"comment",begin:e.lookahead(/# type:/),end:/$/,keywords:a,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},b={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:["self",c,v,f,n.HASH_COMMENT_MODE]}]};return s.contains=[f,v,c],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:a,illegal:/(<\/|\?)|=>/,contains:[c,v,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},f,m,n.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,r],scope:{1:"keyword",3:"title.function"},contains:[b]},{variants:[{match:[/\bclass/,/\s+/,r,/\s*/,/\(\s*/,r,/\s*\)/]},{match:[/\bclass/,/\s+/,r]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[v,b,f]}]}}ay.registerLanguage("python",MT);const Pg=ay,Hg=new vn({html:!1,linkify:!0,breaks:!0}),sy="payload-modal-backdrop";function qT(n){const e=n.trial_metadata;return!e||e.length===0?!1:e.some(r=>r.reasoning&&Object.keys(r.reasoning).length>0||r.misc||r.agent_code||r.source_code)}function NT(n,e){yi();const r=n.trial_metadata;if(!r||r.length===0)return;const t=document.createElement("div");t.id=sy,t.className="payload-backdrop";const i=document.createElement("div");i.className="payload-modal";const o=document.createElement("button");o.className="payload-close-btn",o.textContent="×",o.title="Close (Esc)",o.addEventListener("click",yi),i.appendChild(o);const u=document.createElement("h2");u.className="payload-header",u.textContent=`${n.label} — payload`,i.appendChild(u);const a=document.createElement("div");if(a.className="payload-content",r.length>1){const c=document.createElement("div");c.className="payload-trial-tabs";for(let s=0;s<r.length;s++){const l=document.createElement("button");l.className="payload-trial-tab"+(s===0?" active":""),l.dataset.trial=String(s),l.textContent=`Trial ${s+1}`,l.addEventListener("click",()=>{for(const f of c.querySelectorAll(".payload-trial-tab"))f.classList.toggle("active",f===l);xg(a,r[s],e)}),c.appendChild(l)}i.appendChild(c)}i.appendChild(a),xg(a,r[0],e),t.appendChild(i),document.body.appendChild(t),document.addEventListener("keydown",cy),t.addEventListener("click",c=>{c.target===t&&yi()})}function yi(){const n=document.getElementById(sy);n&&(n.remove(),document.removeEventListener("keydown",cy))}function cy(n){n.key==="Escape"&&yi()}function xg(n,e,r){if(n.innerHTML="",e.reasoning&&Object.keys(e.reasoning).length>0){const t=lt("Reasoning",!0),i=uy(e.reasoning,r);for(const o of i){const u=e.reasoning[o],a=lt(o,!0);a.querySelector(".payload-detail-body").appendChild(Bg(u)),t.querySelector(".payload-detail-body").appendChild(a)}n.appendChild(t)}if(e.misc){const t=lt("Misc",!0);t.querySelector(".payload-detail-body").appendChild(Bg(e.misc)),n.appendChild(t)}if(e.agent_code){const t=lt("Agent Code",!1);t.querySelector(".payload-detail-body").appendChild(Ug(e.agent_code)),n.appendChild(t)}if(e.source_code){const t=lt("Source Code (full)",!1);t.querySelector(".payload-detail-body").appendChild(Ug(e.source_code)),n.appendChild(t)}}function lt(n,e){const r=document.createElement("details");r.className="payload-detail",e&&(r.open=!0);const t=document.createElement("summary");t.className="payload-summary",t.textContent=n,r.appendChild(t);const i=document.createElement("div");return i.className="payload-detail-body",r.appendChild(i),r}function Bg(n){if(Hg)try{const r=document.createElement("div");return r.className="payload-md",r.innerHTML=Hg.render(n),r}catch{}const e=document.createElement("pre");return e.className="payload-pre-fallback",e.textContent=n,e}function Ug(n){const e=document.createElement("pre");e.className="payload-code";const r=document.createElement("code");if(Pg)try{return r.innerHTML=Pg.highlight(n,{language:"python"}).value,e.appendChild(r),e}catch{}return r.textContent=n,e.appendChild(r),e}function FT(){const n=new WeakMap;return{get(e,r){var t;return(t=n.get(e))==null?void 0:t.get(r)},set(e,r,t){let i=n.get(e);i===void 0&&(i=new Map,n.set(e,i)),i.set(r,t)}}}const TT=.5,OT=3,Wg=new WeakMap,jg=new WeakMap,Gg=FT();function mr(n,e,r){var d;if(Wg.set(n,e),(d=n.parentElement)!=null&&d.classList.contains("resizable-canvas-wrapper"))return;const t=n.width,i=n.height;jg.set(n,{w:t,h:i});const o=r===void 0?1:Gg.get(r.stateHost,r.stateKey)??1,u=document.createElement("div");u.className="resizable-canvas-wrapper",n.parentElement.insertBefore(u,n),u.appendChild(n);const a=document.createElement("div");a.className="resizable-canvas-handle",u.appendChild(a),o!==1&&(n.width=Math.round(t*o),n.height=Math.round(i*o)),u.style.width=`${n.width}px`,o!==1&&e();let c=!1,s=0,l=t;a.addEventListener("pointerdown",p=>{var h;c=!0,s=p.clientX,l=n.width,(h=a.setPointerCapture)==null||h.call(a,p.pointerId),p.preventDefault()}),a.addEventListener("pointermove",p=>{var _;if(!c)return;const h=jg.get(n)??{w:t,h:i},v=p.clientX-s,m=Math.max(h.w*TT,Math.min(h.w*OT,l+v)),b=m/h.w,g=Math.round(h.h*b);n.width=Math.round(m),n.height=g,u.style.width=`${n.width}px`,r!==void 0&&Gg.set(r.stateHost,r.stateKey,n.width/h.w),(_=Wg.get(n))==null||_()});const f=()=>{c=!1};a.addEventListener("pointerup",f),a.addEventListener("lostpointercapture",f)}const ly=18,fy=80,DT=16,Yi=new Set;let Vg=!1;function PT(){Vg||(Vg=!0,document.addEventListener("click",n=>{for(const e of[...Yi])document.contains(e.wrapper)?e.wrapper.contains(n.target)||e.close():Yi.delete(e)}))}function HT(n,e=ly,r=fy){return dy(t=>{t.textContent=n},!1,!0,e,r)}function Zt(n,e=ly,r=fy){return dy(t=>{t.innerHTML=n()},!0,!1,e,r)}function dy(n,e,r,t,i){const o=document.createElement("span");o.className="help-widget",o.style.display="inline-block";const u=document.createElement("button");u.className="help-widget-btn",u.type="button",u.textContent="?",u.setAttribute("aria-label","Help"),u.style.width=`${t}px`,u.style.height=`${t}px`,u.style.fontSize=`${Math.round(t*.6)}px`,u.style.lineHeight=`${t}px`;const a=document.createElement("div");a.className="help-widget-popover",a.hidden=!0;const c=document.createElement("button");c.className="help-widget-close",c.type="button",c.textContent="×",c.setAttribute("aria-label","Close");const s=document.createElement("div");s.className=e?"help-widget-body html-content":"help-widget-body",a.appendChild(c),a.appendChild(s),o.appendChild(u),o.appendChild(a),r&&n(s);const l={wrapper:o,close:()=>d()};function f(){n(s),a.hidden=!1,Yi.add(l);const p=window.innerWidth,h=window.innerHeight,v=Math.round(p*i/100),m=h-2*DT;a.style.width=`${v}px`,a.style.maxHeight=`${m}px`;const b=Math.min(a.offsetHeight,m);a.style.left=`${Math.round((p-v)/2)}px`,a.style.top=`${Math.round((h-b)/2)}px`}function d(){a.hidden=!0,Yi.delete(l)}return u.addEventListener("click",p=>{p.stopPropagation(),a.hidden?f():d()}),c.addEventListener("click",p=>{p.stopPropagation(),d()}),a.addEventListener("keydown",p=>{p.key==="Escape"&&(d(),u.focus())}),o.addEventListener("keydown",p=>{p.key==="Escape"&&!a.hidden&&(d(),u.focus())}),PT(),o}const py=1,xT="shortcutKeys",BT=new Set(["","date","datetime-local","email","month","number","password","search","tel","text","time","url","week"]),et=Object.freeze([{id:"toggle_mnames",description:"Toggle longer meaning-carrying names",default_shortcut:"n",enabled:!0},{id:"goto_calculator",description:"Move to Calculator section",default_shortcut:"c",enabled:!0},{id:"goto_top",description:"Move to top of page",default_shortcut:"t",enabled:!0},{id:"toggle_srcquotes_inlined",description:"Toggle source quotes inline in the text vs. behind a glyph",default_shortcut:"q",enabled:!0},{id:"toggle_framing_notes",description:"Show/hide all framing notes",default_shortcut:"f",enabled:!0},{id:"switch_whose_mode",description:"Switch whose mode (Yours / Adhoc / AI results), restoring its last viewed preset",default_shortcut:"m",enabled:!0}]);function hy(){return et}function Xg(n){return et.find(e=>e.id===n)}function o2(n){const e=n.trim().toLowerCase();return e===""?{ok:!0,key:e}:[...e].length!==py?{ok:!1,key:e,error:"Use a single key, or clear the field to disable this shortcut."}:{ok:!0,key:e}}function vy(n){if(!n||typeof n!="object"||Array.isArray(n))return{};const e={};for(const[r,t]of Object.entries(n)){if(typeof t!="string"){console.error(`Ignoring non-string shortcut key for ${r}.`);continue}const i=o2(t);if(!i.ok){console.error(`Ignoring invalid persisted shortcut key for ${r}: ${t}`);continue}e[r]=i.key}return e}function UT(){const n={};for(const e of et)n[e.id]=e.default_shortcut;return n}function nt(){const n=vy(pn().shortcutKeys);return{...UT(),...n}}function my(n,e,r=nt()){if(e==="")return null;for(const t of hy())if(t.id!==n&&r[t.id]===e)return t.id;return null}function WT(n,e){var a;if(!Xg(n))throw new Error(`Unknown shortcut id: ${n}`);const t=o2(e);if(!t.ok)return{ok:!1,key:t.key,error:t.error};const i=nt(),o=my(n,t.key,{...i,[n]:t.key});if(o)return{ok:!1,key:t.key,conflictId:o,error:`Already assigned to "${((a=Xg(o))==null?void 0:a.description)??o}".`};const u=vy(pn().shortcutKeys);return u[n]=t.key,St(xT,u),{ok:!0,key:t.key}}function jT(n){if(n.altKey||n.ctrlKey||n.metaKey)return null;const e=n.key.toLowerCase();return[...e].length!==py?null:e}function GT(n){if(!(n instanceof HTMLElement))return!1;if(n.isContentEditable)return!0;let e=n;for(;e;){if(e.isContentEditable||e.contentEditable==="true")return!0;const r=e.getAttribute("contenteditable");if(r!==null&&r.toLowerCase()!=="false")return!0;e=e.parentElement}return n instanceof HTMLTextAreaElement?!0:n instanceof HTMLInputElement?BT.has(n.type.toLowerCase()):!1}function VT(n){const e=r=>{if(GT(r.target))return;const t=jT(r);if(t===null)return;const i=nt();for(const o of hy()){if(i[o.id]!==t)continue;const u=n[o.id];if(!u)return;r.preventDefault(),u();return}};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}const XT=[{aid:"mcovidB6",family:"mcovidB"},{aid:"mcovidB7",family:"mcovidB"},{aid:"mcovidB8",family:"mcovidB"},{aid:"mcovidB9",family:"mcovidB"},{aid:"mcovidB10",family:"mcovidB"},{aid:"mcovidB11",family:"mcovidB"},{aid:"mcovidA",family:"mcovidA"},{aid:"mcovidA2",family:"mcovidA"},{aid:"covid0"},{aid:"eggsFH1",family:"eggsFH"},{aid:"eggsFH2",family:"eggsFH"},{aid:"lhcFXH1",family:"lhc"},{aid:"lhcFXH_SolMax",family:"lhc"},{aid:"lhcFXH_SolMax_Ultra",family:"lhc"}],YT={mcovidB:{sequence:[{aid:"mcovidB6",version:"v6"},{aid:"mcovidB7",version:"v7"},{aid:"mcovidB8",version:"v8"},{aid:"mcovidB9",version:"v9"},{aid:"mcovidB10",version:"v10"},{aid:"mcovidB11",version:"v11"}]},mcovidA:{sequence:[{aid:"mcovidA",version:"v1"},{aid:"mcovidA2",version:"v2"}]},eggsFH:{sequence:[{aid:"eggsFH1",version:"v1"},{aid:"eggsFH2",version:"v2"}]},lhc:{sequence:[{aid:"lhcFXH1",version:"v1"},{aid:"lhcFXH_SolMax",version:"v2"},{aid:"lhcFXH_SolMax_Ultra",version:"v3"}]},testE:{sequence:[{aid:"testprob_preE",version:"pre"},{aid:"testprob_postE",version:"post"},{aid:"testprob_postE_extra",version:"postextra"}]}},KT={navList:XT,families:YT},Fo=KT,by=(()=>{const n=new Map;for(const[e,{sequence:r}]of Object.entries(Fo.families))r.forEach((t,i)=>n.set(t.aid,{family:e,index:i}));return n})();function zT(){return Fo.navList}function JT(){const n={};for(const[e,{sequence:r}]of Object.entries(Fo.families))n[e]=r;return n}function gy(n){var e;return(e=by.get(n))==null?void 0:e.family}function QT(n){const e=by.get(n);if(e===void 0)return;const r=Fo.families[e.family].sequence,t={version:r[e.index].version};return e.index>0&&(t.prev=r[e.index-1].aid),e.index+1<r.length&&(t.next=r[e.index+1].aid),t}const ZT=`<p>Joint dependence lets you say how your distributions move <em>together</em>, beyond what each one says on its own. You express it as <b>named latents</b>: each latent is one shared influence, described in your own words, with a signed <b>loading</b> on each quantity it touches.</p>
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
<p>Say which one you mean. And note that dependence does not only widen: loading a ratio&#39;s numerator and its denominator in the same direction makes them rise and fall together, which <em>narrows</em> that ratio. That is sometimes exactly the belief you hold — but check the independent-vs-joint comparison, rather than reasoning from the signs alone.</p>`,Ki={joint_dependence:ZT,"framing-explainer-persuasive":"Text marked up in this style is either intentionally persuasive or expected to be persuasive, with the POV label providing the point of view on whose behalf the context is provided. It is not required for estimation.","framing-explainer-nonpersuasive":"Text marked up in this style is supplementary context not intended by the judgement problem designer to be biased on it own (but take that with a grain of salt), and not strictly required for estimation.","srcquote-explainer":"Quoted passages shown beneath a definition or within a framing note are source material that entity was derived from."},eO="joint_dependence";function nO(){return Ki[eO]}function Ei(n){return n?`<b>${ne(n)}</b>`:"<i>(unbound)</i>"}const rO={toggle_mnames:"toggle between short and long names for some defined entities",goto_top:"jump to top of the page",goto_calculator:"jump to the Calculator section",switch_whose_mode:"switch between <b>Yours</b> / <b>Adhoc</b> / <b>AI results</b> modes, restoring the last viewed preset in each",toggle_srcquotes_inlined:`toggle source quotes inlined in the text (mirroring what AI agents see when source quotes are enabled) vs. accessible by clicking the <button class="srcquote-glyph" type="button" tabindex="-1">❝</button> buttons. This is a view setting only — it never changes what a preset's estimator actually read`,toggle_framing_notes:"show or hide all framing notes at once, without disturbing which ones the problem itself enables"};function tO(){return'<li>When relevant (not all Adhoc / AI-results presets have all response modes), you can switch between estimation response modes <b>point</b> | <b>bounds</b> | <b>distribution</b>. For each subjective variable (the cards in the <b>Estimation</b> section) they mean:<ul><li><b>point</b>: A single real value. Use for low-effort estimation.</li><li><b>bounds</b>: A real interval given as <code>low high</code>. Use to incorporate flat uncertainty, without any sampling interpretation. The Calculator will show the interval each compute formula can range over, given your intervals: "≅ [low, high]" means the shown interval is exactly that range; "⫇ [low, high]" means it is an outer enclosure — the true range may be narrower, but never wider. Displayed endpoints are rounded outward, so rounding also never narrows a shown interval.</li><li><b>distribution</b>: A belief distribution; Monte Carlo sampling evaluates. This is the advanced mode. The <b>settings</b> dropdown on the left side of the sticky bar has parameters for controlling the number of iterations, in case the defaults make your experience too slow. When in distribution mode, click the help icon in any Estimation card to learn what you can put in the input fields. The Calculator section has a redundant single input box for the same data; useful for copy-pasting from a read-only Adhoc or AI result.</li></ul></li>'}function iO(n){const e=nt(),r=[];r.push(`<p>Use the ${Ei(e.switch_whose_mode)} shortcut to switch between entering your own estimations and interacting with preset responses — or, for more control, scroll down to the Calculator section (${Ei(e.goto_calculator)} shortcut) to switch between:</p><ul><li>entering your own estimations (<b>Yours</b>), and when available,</li><li>viewing adhoc prepared estimations (<b>Adhoc…</b> dropdown), or</li><li>viewing AI agent estimation trial results (<b>AI results…</b> dropdown).</li></ul>`),r.push("<h4>Sticky bar</h4><ul>"),r.push("<li>On the far right of the sticky bar, there's a dropdown for switching to a different judgement problem (hidden when there are no others).</li>"),gy(n.aid)!==void 0&&r.push("<li>This judgement problem is part of a development timeline exposition sequence. The ◀ and/or ▶ buttons move backward and forward in the timeline.</li>"),n.has_examples()&&r.push("<li><b>open</b> unfolds all examples, <b>close</b> folds all. <b>peek</b> saves your fold state and temporarily unfolds all examples, and <b>unpeek</b> restores your fold state.</li>"),r.push(tO()),r.push("</ul>"),r.push("<h4>Keyboard shortcuts</h4><p>There are just a few, which you can customize by clicking the <b>keymap</b> button in the sticky bar's <b>settings</b> dropdown. Currently:</p>"),r.push("<ul>");for(const t of et){const i=rO[t.id]??ne(t.description);r.push(`<li>${Ei(e[t.id])} : ${i}</li>`)}return r.push("</ul>"),r.join("")}function oO(){const n=Object.values(Er).filter(i=>!i.hasTruncWindow),e=Object.entries(Er).filter(([,i])=>i.hasTruncWindow),r=n.map(i=>`<li><code>${ne(i.signature)}</code> — ${ne(i.note)}</li>`),t=e.map(([i])=>`<code>${ne(i)}(…)</code>`);return`<p>Enter your belief distribution over this variable in one of three forms:</p><ul><li><b>Point mass</b>: <code>pointmass(x)</code> — all probability mass at <code>x</code>.</li><li><b>Distribution family</b> (preferred when one fits your belief), e.g. <code>lognormal(-4.2, 1.3)</code>. Available families:<ul>${r.join("")}</ul>Every family is automatically truncated to the variable's allowed range and renormalized, so e.g. <code>normal(mu, sigma)</code> on a probability variable means a normal truncated to [0, 1]. The ${t.join(", ")} variants take two extra trailing arguments <code>lo, hi</code> — an explicit truncation window — for when your belief has its own truncation. Most important for a heavy-tailed family on an unbounded-range variable (e.g. a Student-t on a log-odds variable), where automatic truncation is a no-op.</li><li><b>Piecewise linear density</b> (fully general): space-separated pairs <code>(x1 y1) (x2 y2) …</code>, minimum 2. x values are sorted positions spanning your uncertainty, anywhere in the variable's allowed range; y values are unnormalized density heights in [0, 1].</li></ul>`}function uO(n,e){const r=nt(),t=[];return t.push("<p><b>This help text changes based on Yours/Adhoc/Whose mode.</b></p>"),x$(me(e).source)&&t.push("<p>To see detailed results for an entry, click the <b>pin</b> checkbox.</p>","<p><b>CONFUSING UI NOTE</b>: when Model × Effort is unchecked, the slider does load a different record, but the changes are too far above your viewport to see them without scrolling.</p>","<p>To see AIs' plain text reasoning and notes, click <b>View payload</b>. If you do this with an <b>All AI</b> or <b>(pooled)</b> entry selected, you'll get tabs for the different trials.</p>","<p>To explore compute formula results other than the main conclusion, there's a drop down below next to the <b>formulas</b> / <b>raw responses</b> radio buttons.</p>","<p>Use the <b>stats display</b> dropdown to switch between seeing probabilities as percentages or as odds.</p>"),n.has_cparams()&&De(e)&&t.push("<p><b>fix</b> | <b>free</b> toggle (next to <b>Yours</b>): <b>fix</b> requires setting each parameter to one of its allowed values in the <b>Parameters</b> section, and your estimates apply to that one setting. <b>free</b> opens a code editor in which you write a function giving your estimates for every allowed parameter combination at once.</p>"),De(e)?t.push(`<p>To modify a preset, switch to the <b>Adhoc</b> or <b>AI results</b> view (${Ei(r.switch_whose_mode)} shortcut), select an entry from the dropdown to the right of this help icon, and find the <b>Copy to Yours</b> button.</p><p>From scratch: Suggest starting with <b>point</b> response mode, then try <b>bounds</b>. If you're experienced or courageous, try <b>distribution</b> and start with <code>tri(low, peak, hi)</code> or <code>uniform(low, high)</code> lines. For full syntax of distribution inputs accepted, find the help icon in any of <b>Estimation</b> cards above.</p>`):p7(me(e).source)&&t.push("<p>To modify this preset for your own estimation, find the <b>Copy to Yours</b> button below.</p><p>For advanced users, in <b>distribution</b> mode, there is a second type of <b>Copy to Yours</b> button inside the <b>Joint-dependence specification</b> folded section (latent factor copula).</p>"),t.join("")}function aO(n){const e=ne(sh("mcItersPerClickPerPlot")),r=ne(sh("mcItersInitialPerPlot")),t=n.itersPerTarget.toLocaleString(),i=["<p>The <b>+</b> button above pools another block of Monte&nbsp;Carlo draws into this plot and redraws it. Draws accumulate — nothing already sampled is thrown away — so the plot starts cheap and you click until its shape stops moving.</p>"];return n.targetCount===1?i.push(`<p>Each click adds <b>${t}</b> draws to this plot`+(n.pooledSampleCount===null?".</p>":` (pooled so far: ${n.pooledSampleCount.toLocaleString()}).</p>`)):i.push(`<p>Each click adds <b>${t}</b> draws to <i>each</i> of the ${n.targetCount.toLocaleString()} plotted points/cells. The setting is a budget for the whole plot, divided equally among the targets it draws, so a plot over a wider axis gets fewer draws per point per click than a single density does — same cost per click, spread thinner.</p>`),n.pooledSampleCount===null?i.push("<p>This plot's button stays yellow: it displays a mean per point/cell rather than a distribution, so the green convergence indicator — which reads a distribution's quantiles — does not apply. Means converge as 1/&radic;n; a few clicks go a long way.</p>"):n.converged?i.push(`<p><b>Green</b>: with ${n.convergedMinSamples.toLocaleString()} or more pooled draws, every quantile of the displayed distribution is pinned to within ${n.displayEpsilon} probability mass at ${n.confidencePercent}% confidence (a distribution-free Dvoretzky&ndash;Kiefer&ndash;Wolfowitz bound). Green is not a stop sign: further clicks keep sharpening the curve.</p>`):i.push(`<p><b>Yellow &rarr; green</b>: the button turns green at ${n.convergedMinSamples.toLocaleString()} pooled draws, the point where every quantile of the displayed distribution is pinned to within ${n.displayEpsilon} probability mass at ${n.confidencePercent}% confidence (a distribution-free Dvoretzky&ndash;Kiefer&ndash;Wolfowitz bound).</p>`),i.push(`<p>To change how much a click adds, open <b>settings</b> in the bar at the top of the page and edit <b>${e}</b>. <b>${r}</b> sets what a plot draws before you click at all.</p>`),i.join("")}const ep="mc-accumulate-btn",Yg="mc-accumulate-help",sO="mc-converged",wi=.05,gt=.01;function cO(n){if(!Number.isInteger(n)||n<1)throw new Error(`distributionCount must be a positive integer, got ${n}`);return Math.ceil(Math.log(2*n/wi)/(2*gt*gt))}const lO=16;function To(n,e,r,t,i=1){var f,d;const o=n.parentElement;if(!(o!=null&&o.classList.contains("resizable-canvas-wrapper"))){console.warn("attachMcAccumulateButton: canvas is not wrapped by makeResizable");return}(f=o.querySelector(`.${ep}`))==null||f.remove(),(d=o.querySelector(`.${Yg}`))==null||d.remove();const u=t.itersPerTarget,a=cO(i),c=r!==null&&r>=a,s=document.createElement("button");s.className=ep+(c?` ${sO}`:""),s.dataset.mcPoolToken=e,s.textContent="+",s.title=r===null?`Pool ${u.toLocaleString()} more MC samples into every plotted point/cell.`:`Pool ${u.toLocaleString()} more MC samples into this plot (n=${r.toLocaleString()}). `+(c?`Green: every displayed quantile is within ${gt} probability mass at ${(1-wi)*100}% confidence; further clicks keep sharpening.`:`Turns green when every displayed quantile is within ${gt} probability mass at ${(1-wi)*100}% confidence.`),o.appendChild(s);const l=Zt(()=>aO({itersPerTarget:u,targetCount:t.targetCount,pooledSampleCount:r,converged:c,convergedMinSamples:a,displayEpsilon:gt,confidencePercent:(1-wi)*100}),lO);l.classList.add(Yg),o.appendChild(l)}const fO=1;function _y(n,e){const r=Math.max(1,e),t=i=>Math.max(fO,Math.floor(i/r));return{mcIters:t(n.mcItersInitialPerPlot),mcItersPerClick:t(n.mcItersPerClickPerPlot)}}function wr(n){return _y(n,1)}function Nt(n,e,r,t,i){return'<div class="result-main">'+(i===""?"":`${i} = `)+`mean ≈ <span class="hl">${Ue(n.mean,e,r,t)}</span>, median ≈ <span class="hl">${Ue(n.median,e,r,t)}</span></div><div class="result-detail">90% interval: [${Ue(n.p5,e,r,t)}, ${Ue(n.p95,e,r,t)}]</div>`}function dO(n,e,r){return{valueHtml:`mean <span class="derived-value">${Ue(n.mean,e,r,"monte-carlo")}</span>, median <span class="derived-value">${Ue(n.median,e,r,"monte-carlo")}</span>`,detailHtml:`<span class="derived-detail">· 90% interval [${Ue(n.p5,e,r,"monte-carlo")}, ${Ue(n.p95,e,r,"monte-carlo")}]</span>`}}const u2="Your beliefs specification yields infinite or undefined values. Consider using non-zero numbers.",pO="≅",hO="⫇",yy="The interval computed for this formula from the bounds responses is unbounded on both sides, i.e. carries no information. Point and distribution results are unaffected.";function Ey(n,e){return n===-1/0&&e===1/0}function wy(n){return n==="tight"?pO:hO}const zi="from point estimates";function _t(n){return n.some(Number.isNaN)?"undefined":n.some(e=>!Number.isFinite(e))?"infinite":null}function Ji(){return`<p class="arg-warning">${u2}</p>`}function vO(n,e,r,t){const i=Ti(n,"floor"),o=Ti(e,"ceil");return`[${Ue(i,r,t)}, ${Ue(o,r,t)}]`}function mO(n,e,r,t){const i=(n+e)/2;return Number.isNaN(i)?"undefined":Ue(i,r,t)}function Qi({labelHtml:n,value:e,typeHighlevel:r,statsDisplay:t,labelPrefix:i="",detail:o}){const u=_t([e]);if(u==="undefined")throw new Error(u2);return`<div class="result-main">${ne(i)}${n} = <span class="hl">${Ue(e,r,t)}</span></div>`+(o===void 0?"":`<div class="result-detail">${ne(o)}</div>`)+(u==="infinite"?Ji():"")}function a2({labelHtml:n,lo:e,hi:r,tightness:t,typeHighlevel:i,statsDisplay:o,midpointDetailSuffix:u=""}){if(e>r)throw new Error(`Invalid calculated bounds: lo=${e} is greater than hi=${r}`);const a=_t([e,r]);if(a==="undefined")throw new Error(u2);if(Ey(e,r))return`<div class="result-detail">${ne(yy)}</div>`;const c=Ti(e,"floor"),s=Ti(r,"ceil"),l=a==="infinite"&&t==="tight";return`<div class="result-main">${n} ${wy(t)} [<span class="hl">${Ue(c,i,o)}</span>, <span class="hl">${Ue(s,i,o)}</span>]</div><div class="result-detail">midpoint: ${mO(e,r,i,o)}${ne(u)}</div>`+(l?Ji():"")}function Ft(n,e){if(typeof n!="number"||Number.isNaN(n))throw new Error(`${e}: expected a number, got ${JSON.stringify(n)}`);return n}function np(n,e){if(!Array.isArray(n)||n.length!==2)throw new Error(`${e}: expected [lo, hi], got ${JSON.stringify(n)}`);const r=Ft(n[0],`${e} lo`),t=Ft(n[1],`${e} hi`);if(r>t)throw new Error(`${e}: lo=${r} is greater than hi=${t}`);return[r,t]}function $y(n,e){return Ft(n.point[e],`Code result point data for ${JSON.stringify(e)}`)}function Sy(n,e){return np(n.bounds[e],`Code result bounds data for ${JSON.stringify(e)}`)}function Ay(n,e,r){var o;const t=(o=n.compform_point_val)==null?void 0:o[e];if(t!==void 0)return Ft(t,`Code result computed point value for ${e}`);if(!r)throw new Error(`Code result has no computed point value or form implementation for ${e}`);const i=r.params.map(u=>$y(n,u));return Ft(r.point(i),`Directly evaluated code result point value for ${e}`)}function ky(n,e,r){var u,a;const t=(u=n.compform_bounds_val)==null?void 0:u[e];if(t!==void 0){const c=(a=n.compform_bounds_tightness)==null?void 0:a[e];return{interval:np(t,`Code result computed bounds value for ${e}`),tightness:c==="tight"?"tight":"loose"}}if(!r)throw new Error(`Code result has no computed bounds value or form implementation for ${e}`);if(!r.bounds)return null;if(!r.boundsTightness)throw new Error(`form ${e} has a bounds implementation but no boundsTightness — regenerate form_fns`);const i=r.params.map(c=>Sy(n,c)),o=r.bounds(i);return{interval:np([o.lo,o.hi],`Directly evaluated code result bounds value for ${e}`),tightness:r.boundsTightness}}const Ly=[{name:"low",abbreviation:"L"},{name:"medium",abbreviation:"M"},{name:"high",abbreviation:"H"}],$i=[...Ly,{name:"xhigh",abbreviation:"XH"},{name:"max",abbreviation:"MAX"}],Iy=[{model:"haiku",abbreviation:"h",efforts:Ly},{model:"sonnet",abbreviation:"s",efforts:$i},{model:"opus",abbreviation:"o",efforts:$i},{model:"fable",abbreviation:"f",efforts:$i}],Kg=Iy.flatMap(({model:n,efforts:e})=>e.map(({name:r})=>`${n}:${r}`)),bO=Object.fromEntries(Iy.flatMap(({model:n,abbreviation:e,efforts:r})=>r.map(({name:t,abbreviation:i})=>[`${n}:${t}`,`${e}${i}`]))),gO=Object.fromEntries($i.map(({name:n,abbreviation:e})=>[n,e])),Ry=":";function s2(n,e){if(e===null)throw new Error(`makeModelEffortKey: null effort not supported (model=${n}). Non-reasoning models cannot participate in the model/effort sweep.`);return`${n}${Ry}${e}`}function c2(n){const e=n.indexOf(Ry);if(e<=0||e===n.length-1)throw new Error(`parseModelEffortKey: invalid key ${JSON.stringify(n)}`);return{model:n.slice(0,e),effort:n.slice(e+1)}}function _O(n){const{model:e,effort:r}=c2(n);return`${e} ${r}`}function yO(n){const e=bO[n];if(e===void 0)throw new Error(`modelEffortPlotLabel: no abbreviation for ${JSON.stringify(n)}. Add it to MODEL_EFFORT_PLOT_LABEL in model_effort_plot_support.ts.`);return e}function EO(n){const{effort:e}=c2(n),r=gO[e];if(r===void 0)throw new Error(`effortPlotLabel: no abbreviation for effort ${JSON.stringify(e)}. Add it to MODEL_EFFORT_AXIS_CONFIG in model_effort_plot_support.ts.`);return r}function wO(n){const e=new Map;for(let t=0;t<Kg.length;t++)e.set(Kg[t],t);const r=[];for(const t of n){if(!e.has(t))throw new Error(`sortModelEffortKeys: unknown key ${JSON.stringify(t)}. Add it to MODEL_EFFORT_CANONICAL_ORDER in model_effort_plot_support.ts.`);r.push(t)}return r.sort((t,i)=>e.get(t)-e.get(i)),r}function l2(n,e,r,t={}){const i=e.svar_entries().map(d=>d.bareName);let o=!1,u=!1;for(const d of n){if(d.lloads===null||d.lloads===void 0)continue;o=!0;const p=so(d.lloads,i);if(p!==null)throw new Error(p);u||(u=co(d.lloads))}if(!o)return{hasDependence:!1,specHtml:""};const a=Dt(e);if(a.length!==i.length)throw new Error(`joint-dependence disclosure has ${i.length} eligible variables but ${a.length} display labels`);const c=new Map(i.map((d,p)=>[d,Se(a[p],r)])),s=new Map;n.forEach((d,p)=>{const h=d.lloads??null,v=JSON.stringify(h),m=s.get(v);m?m.trialNumbers.push(p+1):s.set(v,{spec:h,trialNumbers:[p+1]})});const l=n.length>1,f=[...s.values()].map(d=>{const p=l?`<div class="lloads-trial-label">${SO(d.trialNumbers)}</div>`:"";if(d.spec===null)return`<section class="lloads-spec-group">${p}<div class="lloads-independent-trial">No named latents; sampled independently.</div></section>`;const h=$O(p,d.spec,t.offerCopyToYours??!1),v=d.spec.latents.map(m=>{const b=Object.entries(m.loadings).map(([g,_])=>{const y=c.get(g);if(y===void 0)throw new Error(`joint-dependence disclosure has no display label for loaded variable ${g}`);return`<li><span class="lloads-svar-label">${y}</span>: <span class="lloads-loading">${AO(_)}</span></li>`}).join("");return`<article class="lloads-latent"><div class="lloads-latent-name">${ne(m.name)}</div><div class="lloads-latent-description">${ne(m.description)}</div><ul class="lloads-loadings">${b}</ul></article>`}).join("");return`<section class="lloads-spec-group">${h}${v}</section>`}).join("");return{hasDependence:u,specHtml:`<details class="lloads-spec-view"><summary>Joint-dependence specification</summary><div class="lloads-spec-body">${f}</div></details>`}}function $O(n,e,r){const t=r?`<button class="copy-to-yours-btn lloads-copy-to-yours-btn" type="button" data-lloads-spec="${ve(JSON.stringify(e))}" title="Copy this joint-dependence specification into your editable Yours inputs">Copy to Yours</button>`:"";return n===""&&t===""?"":`<div class="lloads-group-header">${n}${t}</div>`}function SO(n){return`${n.length===1?"Trial":"Trials"} ${n.join(", ")}`}function AO(n){if(Object.is(n,-0)||n===0)return"0";const e=Math.abs(n).toPrecision(6).replace(/\.?0+$/,"");return n>0?`+${e}`:`−${e}`}function Zi(n){const{comparison:e,typeHighlevel:r,statsDisplay:t,targetLabelHtml:i}=n,o=n.canvasId===void 0?"":`<div class="density-overlay-plot"><div class="density-overlay-legend" aria-label="Density curve legend"><span class="density-overlay-legend-independent">Independent</span><span class="density-overlay-legend-joint">Stated joint</span></div><canvas id="${ve(n.canvasId)}" width="400" height="200"></canvas></div>`;return`<div class="result-label">Joint-dependence comparison (${n.provenanceDetail})</div><div class="dependence-comparison mc-row"><div class="dependence-comparison-stats mc-text"><div class="dependence-series-label dependence-series-independent">Independent</div>`+Nt(e.independent,r,t,"monte-carlo",i)+'<div class="dependence-series-label dependence-series-joint">Stated joint</div>'+Nt(e.joint,r,t,"monte-carlo",i)+`</div>${o}</div>`}function f2(n){const e=n.box.querySelector(`#${n.canvasId}`);if(e===null)return!1;const r=zg(n.comparison.independent),t=zg(n.comparison.joint);if(r===null||t===null)return!1;const i=Ao(n.typeHighlevel),o=()=>gq(e,r,t,i);o(),mr(e,o,{stateHost:n.box,stateKey:n.resizeStateKey});const{independent:u,joint:a}=n.comparison;if(u.mcPoolToken!==a.mcPoolToken)throw new Error("CRN-paired density results do not share one MC pool token");return a.mcPoolToken!==null&&To(e,a.mcPoolToken,a.samples.length,{itersPerTarget:n.mcItersPerClick,targetCount:1},2),!0}function zg(n){const e=n.samples??n.densityCurve;return e===null?null:{source:e,p5:n.p5,p95:n.p95}}const kO=5,Jg="code-density",Cy="code-line",My="code-heatmap";function LO(n){return n.startsWith("form:")?n.slice(5):n}function qy(n,e,r){return n.form.filter(t=>x_(t,e)).map(t=>{const i=(r==null?void 0:r[t.id])??null;return{kind:"formula",id:t.id,bareId:LO(t.id),typeHighlevel:(i==null?void 0:i.typeHighlevel)??t.type_highlevel,isConclusion:t.id===n.config.conclusion_form,formEntry:i}})}function Ny(n){return n.svar_entries().map(({bareName:e,decl:r})=>({kind:"raw_response",bareName:e,typeHighlevel:r.type_highlevel,isConclusion:!1}))}function IO(n,e,r){const t=qy(n,e.ui.inputMode,r),i=Ny(n);if(e.ui.codePlotTargetKind==="raw_response"&&i.length>0)return i.find(a=>a.bareName===e.ui.codePlotRawResponseName)??i[0];if(t.length===0)return i[0]??null;const u=e.ui.codePlotFormulaId||n.config.conclusion_form;return t.find(a=>a.id===u)??t.find(a=>a.id===n.config.conclusion_form)??t[0]}function RO(n){var e,r;return n.kind==="raw_response"?{key:`raw_response:${n.bareName}`,paramKeys:[n.bareName],combine:([t])=>t}:{key:n.id,paramKeys:((e=n.formEntry)==null?void 0:e.params)??null,combine:((r=n.formEntry)==null?void 0:r.point)??null}}function Fy(n,e){if(e.paramKeys===null||e.combine===null){const r=n.kind==="formula"?n.id:n.bareName;throw new Error(`Distribution view for ${r} requires its generated form implementation`)}return{paramKeys:e.paramKeys,combine:e.combine}}function d2(n,e){return e.kind==="raw_response"?$y(n,e.bareName):Ay(n,e.id,e.formEntry)}function CO(n,e){return e.kind==="raw_response"?{interval:Sy(n,e.bareName),tightness:"tight"}:ky(n,e.id,e.formEntry)}function MO(n){if(n.length===0)return null;const e=[...n].sort((i,o)=>i-o),r=i=>{const o=Math.min(e.length-1,Math.max(0,Math.round(i*(e.length-1))));return e[o]},t=n.reduce((i,o)=>i+o,0)/n.length;return{count:n.length,mean:t,median:r(.5),p5:r(.05),p95:r(.95)}}function Oo(n,e){return MO(n.trials.map(r=>d2(r,e)))}function on(n,e){for(const r of n.cparam_combos){let t=!0;for(const i of n.cparam_names)if(r.cparams[i]!==e[i]){t=!1;break}if(t)return r}return null}function p2(n,e,r){const t=new Set;for(const i of n.cparam_combos){const o=i.cparams[e];o!==void 0&&t.add(o)}return!r||typeof r=="string"?Array.from(t).sort((i,o)=>Number(i)-Number(o)):r.filter(i=>typeof i!="boolean"&&t.has(i))}function Ty(n,e){let r=0;for(const t of n)e[t]===!1&&r++;return r}function qO(n,e){return n.filter(r=>e[r]===!1)}function Oy(n,e){if(e.kind!=="formula"||!e.isConclusion)return;const r=n.precomputed[Jn],t=n.precomputed[Ci];if(!n.trials.some(o=>co(o.lloads)))return r;if(!(r===void 0&&t===void 0)){if(r===void 0||t===void 0)throw new Error("A code-result combo with stated joint dependence must carry both its independence and joint precomputes, or neither for live evaluation");return t}}function NO(n,e){if(e.kind!=="formula"||!e.isConclusion)return null;const r=n.precomputed[Jn],t=n.precomputed[Ci];if(r===void 0&&t===void 0)return null;if(r===void 0||t===void 0)throw new Error("A code-result combo with stated joint dependence must carry both its independence and joint precomputes, or neither for live comparison");return{independent:r,joint:t}}function h2(n,e,r){var o;if(e.kind==="formula"&&((o=e.formEntry)==null?void 0:o.sampleStage)!==void 0)throw new Error(`Distribution view for ${e.id} is not supported for formulas with E[·] barriers (v1)`);const{paramKeys:t,combine:i}=Fy(e,r);for(const u of n.trials){const a=t.filter(c=>!g9(u.sample[c]));if(a.length>0)throw new Error(`Code distribution MC for ${r.key}: a trial lacks sample data for parameter(s) ${JSON.stringify(a)}`)}return{key:r.key,params:t,typeHighlevel:e.typeHighlevel,point:i,bounds:null,boundsTightness:null}}function FO(n,e,r,t,i){const o=h2(n,e,r);return Pn(o,sr(n.trials,"sample",t),{onIncompleteTrial:"error",mcIters:i.mcIters,mcItersPerClick:i.mcItersPerClick})}function TO(n,e,r,t,i){const o=h2(n,e,r);return eq(o,sr(n.trials,"sample",t),{onIncompleteTrial:"error",mcIters:i.mcIters,mcItersPerClick:i.mcItersPerClick})}function OO(n,e,r,t,i,o){const u=Oy(n,e);if(u)return u;const a=TO(n,e,r,t,i);return a.mcPoolToken!==null&&(o==null||o.add(a.mcPoolToken)),a}function DO(n,e,r,t){let i=r?t:1;for(const o of n)i*=(e.get(o)??[]).length;return i}function PO(n){if(n===void 0||n==="probability")return[0,1]}function HO(n){return n==="probability"?[0,1]:void 0}function rt(n,e,r,t){const i=e.ui.cparamValues[n];if(i!==void 0&&t.includes(i))return i;if((r==null?void 0:r.default_value)!==void 0){const o=r.default_value;if(t.includes(o))return o}return t[0]}function xO(n,e,r,t){const i=m2(n,e,t.ui.modelEffortSweepScope);if(Dy(i).length>=2&&!t.ui.modelEffortPinned||Ty(n.cparam_names,t.ui.cparamPinned)>0)return null;const a={};for(const c of n.cparam_names){const s=r.find_cparam(c),l=p2(n,c,s==null?void 0:s.allowed_values);a[c]=rt(c,t,s,l)}return on(n,a)}const BO="model × effort",UO="effort";function Do(n){return n==="effort"?UO:BO}function tt(n,e){return e==="effort"?EO(n):yO(n)}function v2(n,e){return n.aggregate==="model_size__version"?{model:n.model,version:n.version,contentHash:n.content_hash}:e!==null&&n.model===e.model&&n.version===e.version&&n.content_hash===e.contentHash?e:null}function m2(n,e,r){const t=e.filter(o=>o.effort!==null&&o.content_hash===n.content_hash),i=v2(n,r);return i===null?t:t.filter(o=>o.model===i.model&&o.version===i.version)}function Dy(n){const e=new Set;for(const r of n)r.effort!==null&&e.add(s2(r.model,r.effort));return wO(e)}function ei(n,e){for(const r of n)if(r.effort!==null&&s2(r.model,r.effort)===e)return r;return null}function WO(n){if(n.length===0)return;const e=n[0].cparam_names;for(let r=1;r<n.length;r++){const t=n[r].cparam_names;if(t.length!==e.length||!t.every((o,u)=>o===e[u]))throw new Error(`validateRecsCparamCompat: incompatible cparam_names: ${JSON.stringify(e)} vs ${JSON.stringify(t)}. Cannot sweep across model/effort with mismatched cparam shapes.`)}}function jO(n,e,r,t,i,o,u,a){const c=r.map(String);if(i==="average"){const f=[];for(let d=0;d<r.length;d++){const p={...t,[e]:r[d]},h=on(n,p);if(!h)continue;const v=a?a(h):h.precomputed[Jn];v&&f.push({x:d,y:v.mean})}return{series:[{points:f,label:"avg"}],xLabels:c}}if(!o||!u)throw new Error("extractSweepLineSeries separate mode requires combine and paramKeys");const s=n.count,l=[];for(let f=0;f<s;f++){const d=[];for(let p=0;p<r.length;p++){const h={...t,[e]:r[p]},v=on(n,h);if(!v||!v.trials[f])continue;const m=v.trials[f],b=o(u.map(g=>m.point[g]));d.push({x:p,y:b})}l.push({points:d,label:`trial ${f+1}`})}return{series:l,xLabels:c}}function GO(n,e,r,t,i,o,u){const a=r.map(String),c=i.map(String),s=[];for(let l=0;l<i.length;l++){const f=[];for(let d=0;d<r.length;d++){const p={...o,[e]:r[d],[t]:i[l]},h=on(n,p);if(!h){f.push(null);continue}const v=u?u(h):h.precomputed[Jn];f.push((v==null?void 0:v.mean)??null)}s.push(f)}return{cells:s,xLabels:a,yLabels:c,xAxisLabel:e,yAxisLabel:t}}function VO(n,e,r,t,i,o){const u=r.map(String);if(i==="average"){const c=[];for(let s=0;s<r.length;s++){const l={...t,[e]:r[s]},f=on(n,l);if(!f)continue;const d=Oo(f,o);d&&c.push({x:s,y:d.mean})}return{series:[{points:c,label:"avg"}],xLabels:u}}const a=[];for(let c=0;c<n.count;c++){const s=[];for(let l=0;l<r.length;l++){const f={...t,[e]:r[l]},d=on(n,f),p=d==null?void 0:d.trials[c];if(!p)continue;const h=d2(p,o);s.push({x:l,y:h})}a.push({points:s,label:`trial ${c+1}`})}return{series:a,xLabels:u}}function XO(n,e,r,t,i,o,u){const a=r.map(String),c=i.map(String),s=[];for(let l=0;l<i.length;l++){const f=[];for(let d=0;d<r.length;d++){const p={...o,[e]:r[d],[t]:i[l]},h=on(n,p),v=h?Oo(h,u):null;f.push((v==null?void 0:v.mean)??null)}s.push(f)}return{cells:s,xLabels:a,yLabels:c,xAxisLabel:e,yAxisLabel:t}}function YO(n,e,r,t="model_effort",i){const o=e.map(a=>tt(a,t)),u=[];for(let a=0;a<e.length;a++){const c=ei(n,e[a]);if(!c)continue;const s=on(c,r);if(!s)continue;const l=i?i(s):s.precomputed[Jn];l&&u.push({x:a,y:l.mean})}return{series:[{points:u,label:"avg"}],xLabels:o}}function KO(n,e,r,t,i,o="model_effort",u){const a=t.map(String),c=e.map(l=>tt(l,o)),s=[];for(let l=0;l<e.length;l++){const f=[],d=ei(n,e[l]);for(let p=0;p<t.length;p++){if(!d){f.push(null);continue}const h={...i,[r]:t[p]},v=on(d,h);if(!v){f.push(null);continue}const m=u?u(v):v.precomputed[Jn];f.push((m==null?void 0:m.mean)??null)}s.push(f)}return{cells:s,xLabels:a,yLabels:c,xAxisLabel:r,yAxisLabel:Do(o)}}function zO(n,e,r,t,i="model_effort"){const o=e.map(a=>tt(a,i)),u=[];for(let a=0;a<e.length;a++){const c=ei(n,e[a]);if(!c)continue;const s=on(c,r);if(!s)continue;const l=Oo(s,t);l&&u.push({x:a,y:l.mean})}return{series:[{points:u,label:"avg"}],xLabels:o}}function JO(n,e,r,t,i,o,u="model_effort"){const a=t.map(String),c=e.map(l=>tt(l,u)),s=[];for(let l=0;l<e.length;l++){const f=[],d=ei(n,e[l]);for(let p=0;p<t.length;p++){if(!d){f.push(null);continue}const h={...i,[r]:t[p]},v=on(d,h),m=v?Oo(v,o):null;f.push((m==null?void 0:m.mean)??null)}s.push(f)}return{cells:s,xLabels:a,yLabels:c,xAxisLabel:r,yAxisLabel:Do(u)}}function QO(n,e,r,t){var l;const i=qy(n,e.ui.inputMode,t),o=Ny(n);if(i.length===0&&o.length===0)return"";const u=(r==null?void 0:r.kind)??"formula",a=(r==null?void 0:r.kind)==="formula"?r.id:e.ui.codePlotFormulaId||n.config.conclusion_form,c=(r==null?void 0:r.kind)==="raw_response"?r.bareName:e.ui.codePlotRawResponseName||(((l=o[0])==null?void 0:l.bareName)??"");let s='<div class="code-plot-target-controls">';if(s+='<div class="code-plot-target-kind">',s+=`<label><input type="radio" name="code-plot-target-kind" class="code-plot-target-kind-radio" value="formula"${u==="formula"?" checked":""}${i.length===0?" disabled":""}> formulas</label>`,s+=`<label><input type="radio" name="code-plot-target-kind" class="code-plot-target-kind-radio" value="raw_response"${u==="raw_response"?" checked":""}${o.length===0?" disabled":""}> raw responses</label>`,s+="</div>",u==="formula")if(i.length>1){s+='<select class="code-plot-formula-select" aria-label="Plot formula">';for(const f of i)s+=`<option value="${ve(f.id)}"${f.id===a?" selected":""}>${ne(f.bareId)}</option>`;s+="</select>"}else i.length===1&&(s+=`<span class="code-plot-target-single">${ne(i[0].bareId)}</span>`);else if(o.length>1){s+='<select class="code-plot-raw-response-select" aria-label="Plot raw response">';for(const f of o)s+=`<option value="${ve(f.bareName)}"${f.bareName===c?" selected":""}>${ne(f.bareName)}</option>`;s+="</select>"}else o.length===1&&(s+=`<span class="code-plot-target-single">${ne(o[0].bareName)}</span>`);return s+="</div>",s}function Py(n,e,r,t,i,o,u){if(!i||!o)return"";const a={};for(const c of n.cparam_names){const s=t.find_cparam(c),l=r.get(c)??[];if(l.length===0)return"";const f=rt(c,e,s,l),d=Number(f);if(!Number.isFinite(d))return"";a[c]=d}return i(a)?"":`<p class="arg-warning">${u(o)}</p>`}function Hy(n,e,r,t){const i=r===null?[null,...e]:e,o=r===null?0:i.indexOf(r),u=r===null?n.label:t==="effort"?c2(r).effort:_O(r);return{sliderKeys:i,meIdx:o,currentLabel:u}}function ZO(n,e,r,t,i,o,u,a,c,s,l,f,d){const p=Py(e,t,i,r,l,f,d);let h=QO(r,t,c,s);if(h+=p+'<div class="cparam-controls">',o.length>=2){const{sliderKeys:v,meIdx:m,currentLabel:b}=Hy(e,o,u,a),g=t.ui.modelEffortPinned;h+='<div class="cparam-row model-effort-row">',h+=`<label class="cparam-label">${a==="effort"?"Effort":"Model × Effort"}</label>`,h+='<input type="range" class="model-effort-slider" ',h+=`min="0" max="${v.length-1}" step="1" value="${m>=0?m:0}" `,h+=`data-keys='${JSON.stringify(v)}'>`,h+=`<span class="cparam-value-label">${ne(b)}</span>`,h+='<label class="cparam-pin-label"><input type="checkbox" class="model-effort-pin-checkbox"',h+=`${g?" checked":""}> pin</label>`,h+="</div>"}for(const v of e.cparam_names){const m=r.find_cparam(v),b=i.get(v)??[];if(b.length===0)continue;const g=rt(v,t,m,b),_=b.indexOf(g),y=t.ui.cparamPinned[v]!==!1,E=(m==null?void 0:m.longname)??v;h+='<div class="cparam-row">',h+=`<label class="cparam-label">${ne(E)}</label>`,h+=`<input type="range" class="cparam-slider" data-cparam="${v}" `,h+=`min="0" max="${b.length-1}" step="1" value="${_>=0?_:0}" `,h+=`data-values='${JSON.stringify(b)}'>`,h+=`<span class="cparam-value-label">${g}</span>`,h+='<label class="cparam-pin-label"><input type="checkbox" class="cparam-pin-checkbox" ',h+=`data-cparam="${v}"${y?" checked":""}> pin</label>`,h+="</div>"}h+="</div>",n.innerHTML=h}function vi(n){return console.warn(`code viewer controls sync: ${n}; falling back to a full controls rebuild`),!1}function eD(n,e,r,t,i,o,u,a,c,s,l){const f=n.querySelector(".cparam-controls");if(!f)return vi("no existing .cparam-controls block");const d=Py(e,t,i,r,c,s,l),p=n.querySelector(":scope > .arg-warning");d===""?p==null||p.remove():p?p.outerHTML=d:f.insertAdjacentHTML("beforebegin",d);const h=f.querySelector(".model-effort-row");if(o.length>=2!==(h!==null))return vi("model/effort row does not match the current sweep structure");if(h){const{meIdx:m,currentLabel:b}=Hy(e,o,u,a),g=h.querySelector(".model-effort-slider"),_=h.querySelector(".cparam-value-label"),y=h.querySelector(".model-effort-pin-checkbox");if(!g||!_||!y)return vi("model/effort row is missing expected controls");g.value=String(m>=0?m:0),_.textContent=b,y.checked=t.ui.modelEffortPinned}for(const m of e.cparam_names){const b=i.get(m)??[];if(b.length===0)continue;const g=r.find_cparam(m),_=rt(m,t,g,b),y=b.indexOf(_),E=f.querySelector(`.cparam-slider[data-cparam="${m}"]`),I=E==null?void 0:E.closest(".cparam-row"),A=I==null?void 0:I.querySelector(".cparam-value-label"),C=I==null?void 0:I.querySelector(".cparam-pin-checkbox");if(!E||!A||!C)return vi(`cparam row for ${m} is missing expected controls`);E.value=String(y>=0?y:0),A.textContent=String(_),C.checked=t.ui.cparamPinned[m]!==!1}return!0}function nD(n){return`<div class="sweep-mode-toggle"><button class="sweep-mode-btn${n==="average"?" active":""}" data-sweep-mode="average">Average</button><button class="sweep-mode-btn${n==="separate"?" active":""}" data-sweep-mode="separate">Separate</button></div>`}const b2='<div class="code-info">No data for this parameter combination.</div>';function g2(n,e,r){if(n.kind==="formula"&&n.isConclusion)return Kt(e,r);let t,i;if(n.kind==="raw_response")t=`svar:${n.bareName}`,i=n.bareName;else{const u=e.form.find(a=>a.id===n.id);if(!u)throw new Error(`Code plot formula ${n.id} is not in the template`);t=B_(n.id,u.sexpr),i=n.bareId}const o=U_(t);return Se(e.get_display_expr(o)??i,r)}function rD(n,e,r,t,i,o,u){const a=on(e,r);if(!a){n.innerHTML=b2;return}if(!t){n.innerHTML='<div class="code-info">No point plot target is available.</div>';return}if(a.trials.length===0)throw new Error("Code point result has no trials for the selected parameter combination");const c=a.trials.map(d=>d2(d,t)),s=c.reduce((d,p)=>d+p,0)/c.length,l=t.typeHighlevel,f=c.length===1?zi:`per trial: ${c.map(d=>Ue(d,l,u.ui.probAsOdds)).join(", ")}`;n.innerHTML=Qi({labelHtml:g2(t,i,o),value:s,typeHighlevel:l,statsDisplay:u.ui.probAsOdds,labelPrefix:c.length===1?"":"mean ",detail:f})}function tD(n,e,r,t,i,o,u){const a=on(e,r);if(!a){n.innerHTML=b2;return}if(!t){n.innerHTML='<div class="code-info">No bounds plot target is available.</div>';return}if(!$p(e)||a.trials.length!==1)throw new Error(`Code bounds display requires one trial; record count=${e.count}, selected combo trials=${a.trials.length}`);const c=CO(a.trials[0],t);if(!c){n.innerHTML=`<div class="code-info">${ne(Yt)}</div>`;return}const[s,l]=c.interval;n.innerHTML=a2({labelHtml:g2(t,i,o),lo:s,hi:l,tightness:c.tightness,typeHighlevel:t.typeHighlevel,statsDisplay:u.ui.probAsOdds})}function Qg(n,e,r,t,i,o,u,a,c,s,l){xy(n,e,r,t,i,o,u,a,c,s,l,!1)}function Zg(n,e,r,t,i,o,u,a,c,s,l){xy(n,e,r,t,i,o,u,a,c,s,l,!0)}function xy(n,e,r,t,i,o,u,a,c,s,l,f){var K,re;Sp(r);const d=IO(i,u,c),p=new Map;for(const G of r.cparam_names){const x=i.find_cparam(G),Y=p2(r,G,x==null?void 0:x.allowed_values);p.set(G,Y)}const h=v2(r,u.ui.modelEffortSweepScope),v=m2(r,t,u.ui.modelEffortSweepScope),m=h===null?"model_effort":"effort",b=Dy(v),g=b.length>=2,_=r.effort!==null?s2(r.model,r.effort):null,y=g&&!u.ui.modelEffortPinned;if(y&&WO(v),!(f&&eD(n,r,i,u,p,b,_,m,s,l,G=>Se(G,o)))){const G=document.getElementById("calculator-whose-toggle");if(G&&((K=G.querySelector(".payload-view-btn"))==null||K.remove(),qT(r))){const x=document.createElement("button");x.className="payload-view-btn",x.textContent="View payload",x.addEventListener("click",()=>NT(r,i.get_svar_bare_names())),G.appendChild(x)}ZO(n,r,i,u,p,b,_,m,d,c,s,l,x=>Se(x,o))}const I=Ty(r.cparam_names,u.ui.cparamPinned),A=qO(r.cparam_names,u.ui.cparamPinned),C=I+(y?1:0),k=u.ui.inputMode,S=u.ui.codeSweepMode,w={};for(const G of r.cparam_names)if(u.ui.cparamPinned[G]!==!1){const x=i.find_cparam(G),Y=p.get(G)??[];w[G]=rt(G,u,x,Y)}const $=(d==null?void 0:d.kind)==="formula"&&d.isConclusion,L=(d==null?void 0:d.typeHighlevel)??i.config.conclusion_type_highlevel,R=$?PO(i.config.conclusion_type_highlevel):HO(L),T=L==="probability"?kO:void 0;if(k==="bounds"){C>0?e.innerHTML='<div class="code-info">Pin every axis to display code-response bounds.</div>':tD(e,r,w,d,i,o,u);return}let N=null;if(k==="sample"){if(!d){e.innerHTML='<div class="code-info">No distribution plot target is available.</div>';return}if(d.kind==="formula"&&((re=d.formEntry)==null?void 0:re.sampleStage)!==void 0){e.innerHTML='<div class="code-info">Distribution view is not yet supported for formulas containing E[·] aggregation.</div>';return}N=RO(d)}const B=N===null?null:P_(i.svar_entries()),O=DO(A,p,y,b.length),H=_y(a,O),F=new Set,Q=N!==null&&d!==null&&B!==null?G=>OO(G,d,N,B,H,F):void 0,W=k;if(C===0)if(k==="point")rD(e,r,w,d,i,o,u);else{if(d===null||N===null||B===null)throw new Error("Sample-mode code density routing has no resolved sample target");iD(e,r,u,a,w,d,N,B,i,o,g2(d,i,o))}else if(C===1)y?aD(e,v,b,w,T,d,W,m,Q):oD(e,r,A[0],p,w,S,N,T,d,W,Q);else if(C===2)if(y){const G=A[0],x=p.get(G)??[];sD(e,v,b,G,x,w,R,d,W,m,Q)}else uD(e,r,A,p,w,R,d,W,Q);else{const G=r.cparam_names.length-(y?1:2);e.innerHTML=`<div class="code-info"><p>Pin at least ${G} parameter${G===1?"":"s"} to visualize results.</p><p>Currently ${I} cparam${I===1?"":"s"} unpinned${y?" + model/effort axis":""}.</p></div>`}if(F.size>0){const G=e.querySelector("#code-line-canvas, #code-heatmap-canvas");G&&To(G,E9([...F]),null,{itersPerTarget:H.mcItersPerClick,targetCount:O})}}function iD(n,e,r,t,i,o,u,a,c,s,l){const f=on(e,i);if(!f){n.innerHTML=b2;return}const d=o.typeHighlevel,p=[],h=l2(f.trials,c,s,{offerCopyToYours:!De(r.ui.whose)});if(h.hasDependence){const _=wr(t),y=NO(f,o);let E;if(y!==null){const I=$9(y),A=I.independent.densityCurve!==null&&I.joint.densityCurve!==null;p.push(Zi({comparison:I,typeHighlevel:d,statsDisplay:r.ui.probAsOdds,targetLabelHtml:l,canvasId:A?"code-density-canvas":void 0,provenanceDetail:`precomputed, ${f.trials.length} agent trial${f.trials.length===1?"":"s"}`})),A&&(E=I)}if(E===void 0){const I=jp(h2(f,o,u),sr(f.trials,"sample",a),{onIncompleteTrial:"error",mcIters:_.mcIters,mcItersPerClick:_.mcItersPerClick});p.push(Zi({comparison:I,typeHighlevel:d,statsDisplay:r.ui.probAsOdds,targetLabelHtml:l,canvasId:"code-density-canvas",provenanceDetail:`live Monte Carlo, n=${I.joint.samples.length.toLocaleString()}`})),E=I}p.push(h.specHtml),n.innerHTML=p.join(""),f2({box:n,canvasId:"code-density-canvas",comparison:E,typeHighlevel:d,resizeStateKey:Jg,mcItersPerClick:_.mcItersPerClick});return}const v=Oy(f,o);if(v&&p.push(`<div class="result-label">Precomputed (independent, ${f.trials.length} agent trial${f.trials.length===1?"":"s"})</div>`+Nt(v,d,r.ui.probAsOdds,"monte-carlo",l)),u.combine===null||u.paramKeys===null){v||Fy(o,u),n.innerHTML=p.join("");return}const m=wr(t),b=FO(f,o,u,a,m);p.push(`<div class="result-label">Live MC (independent, n=${b.samples.length.toLocaleString()})</div><div class="mc-row"><div class="mc-text">`+Nt(b,d,r.ui.probAsOdds,"monte-carlo",l)+'</div><canvas id="code-density-canvas" width="400" height="200"></canvas></div>'),n.innerHTML=p.join("");const g=n.querySelector("#code-density-canvas");if(g){const _=Ao(d);Bi(g,b.samples,b.p5,b.p95,_),mr(g,()=>Bi(g,b.samples,b.p5,b.p95,_),{stateHost:n,stateKey:Jg}),b.mcPoolToken!==null&&To(g,b.mcPoolToken,b.samples.length,{itersPerTarget:m.mcItersPerClick,targetCount:1})}}function oD(n,e,r,t,i,o,u,a,c,s,l){const f=t.get(r)??[],d=s==="sample",p=e.count>1&&!(d&&(u==null?void 0:u.combine)===null),h=p?o:"average",{series:v,xLabels:m}=d?jO(e,r,f,i,h,(u==null?void 0:u.combine)??void 0,(u==null?void 0:u.paramKeys)??void 0,l):c?VO(e,r,f,i,h,c):{series:[],xLabels:f.map(String)};let b='<div class="code-plot-container">';b+='<canvas id="code-line-canvas" class="code-plot-canvas" width="800" height="500"></canvas>',p&&(b+=nD(h),h==="separate"?b+=`<div class="code-info" style="margin-top: 6px;">${d?"Separate mode uses point estimates only (no distributional MC).":"Separate mode shows per-trial point values."}</div>`:d||(b+='<div class="code-info" style="margin-top: 6px;">Average mode uses point values only.</div>')),b+="</div>",n.innerHTML=b;const g=n.querySelector("#code-line-canvas");if(g){const _={xLabels:m,xAxisLabel:r,...a===void 0?{}:{yRangePaddingPercent:a}};Wi(g,v,_),mr(g,()=>Wi(g,v,_),{stateHost:n,stateKey:Cy})}}function uD(n,e,r,t,i,o,u,a,c){const s=r[0],l=r[1],f=t.get(s)??[],d=t.get(l)??[],p=a==="sample",h=p?GO(e,s,f,l,d,i,c):u?XO(e,s,f,l,d,i,u):{cells:[],xLabels:f.map(String),yLabels:d.map(String),xAxisLabel:s,yAxisLabel:l};o&&(h.valueRange=o);const v=Math.max(80,Math.min(120,Math.floor(1e3/f.length))),m=Math.max(60,Math.min(90,Math.floor(800/d.length))),b=60+f.length*v+60,g=10+d.length*m+35;let _='<div class="code-plot-container">';_+=`<canvas id="code-heatmap-canvas" class="code-plot-canvas" width="${b}" height="${g}"></canvas>`,p||(_+='<div class="code-info" style="margin-top: 6px;">Cells show average point values.</div>'),_+="</div>",n.innerHTML=_;const y=n.querySelector("#code-heatmap-canvas");y&&(ji(y,h),mr(y,()=>ji(y,h),{stateHost:n,stateKey:My}))}function aD(n,e,r,t,i,o,u,a,c){const s=u==="sample",{series:l,xLabels:f}=s?YO(e,r,t,a,c):o?zO(e,r,t,o,a):{series:[],xLabels:r.map(h=>tt(h,a))};let d='<div class="code-plot-container">';d+='<canvas id="code-line-canvas" class="code-plot-canvas" width="800" height="500"></canvas>',s||(d+='<div class="code-info" style="margin-top: 6px;">Average mode uses point values only.</div>'),d+="</div>",n.innerHTML=d;const p=n.querySelector("#code-line-canvas");if(p){const h={xLabels:f,xAxisLabel:Do(a),...i===void 0?{}:{yRangePaddingPercent:i}};Wi(p,l,h),mr(p,()=>Wi(p,l,h),{stateHost:n,stateKey:Cy})}}function sD(n,e,r,t,i,o,u,a,c,s,l){const f=c==="sample",d=f?KO(e,r,t,i,o,s,l):a?JO(e,r,t,i,o,a,s):{cells:[],xLabels:i.map(String),yLabels:r.map(_=>tt(_,s)),xAxisLabel:t,yAxisLabel:Do(s)};u&&(d.valueRange=u);const p=Math.max(80,Math.min(120,Math.floor(1e3/i.length))),h=Math.max(60,Math.min(90,Math.floor(800/r.length))),v=60+i.length*p+60,m=10+r.length*h+35;let b='<div class="code-plot-container">';b+=`<canvas id="code-heatmap-canvas" class="code-plot-canvas" width="${v}" height="${m}"></canvas>`,f||(b+='<div class="code-info" style="margin-top: 6px;">Cells show average point values.</div>'),b+="</div>",n.innerHTML=b;const g=n.querySelector("#code-heatmap-canvas");g&&(ji(g,d),mr(g,()=>ji(g,d),{stateHost:n,stateKey:My}))}function cD(n,e){if(n.length!==e.length)throw new Error(`pwlToShape: xs length ${n.length} !== ys length ${e.length}`);return{points:n.map((r,t)=>({x:r,y:e[t]}))}}const e_=.001,n_=101;function lD(n){const e=n.inverseCdf(e_),r=n.inverseCdf(1-e_);if(!(r>e))return{points:[{x:e,y:1}]};const t=[],i=[];for(let u=0;u<n_;u++){const a=e+u/(n_-1)*(r-e);t.push(a),i.push(n.pdf(a))}const o=Math.max(...i);if(o<=0)throw new Error("familyToShape: zero density over the display window");return{points:t.map((u,a)=>({x:u,y:i[a]/o}))}}const Xn={top:4,bottom:18,left:4,right:4},fD="10px -apple-system, Helvetica, sans-serif",dD="rgba(100, 149, 237, 0.25)",r_="#4477bb",t_=1.5;function i_(n,e,r){const t=n.width,i=n.height,o=n.getContext("2d");if(!o)return;o.clearRect(0,0,t,i);const{points:u}=e;if(u.length===0)return;const a=t-Xn.left-Xn.right,c=i-Xn.top-Xn.bottom,s=Xn.top+c,[l,f]=r;if(f<=l){const b=Xn.left+a/2;Math.max(...u.map(g=>g.y))>0&&(o.beginPath(),o.moveTo(b,s),o.lineTo(b,Xn.top),o.strokeStyle=r_,o.lineWidth=t_,o.stroke()),o_(o,[{value:l,label:l.toFixed(2)}],()=>b,s);return}const d=b=>Xn.left+(b-l)/(f-l)*a,p=Math.max(...u.map(b=>b.y));if(p<=0)return;const h=b=>Xn.top+c-b/p*c;o.beginPath(),o.moveTo(d(u[0].x),s);for(const b of u)o.lineTo(d(b.x),h(b.y));o.lineTo(d(u[u.length-1].x),s),o.closePath(),o.fillStyle=dD,o.fill(),o.beginPath();const v=u[0],m=u[u.length-1];v.y>0?(o.moveTo(d(v.x),s),o.lineTo(d(v.x),h(v.y))):o.moveTo(d(v.x),h(v.y));for(let b=1;b<u.length;b++)o.lineTo(d(u[b].x),h(u[b].y));m.y>0&&o.lineTo(d(m.x),s),o.strokeStyle=r_,o.lineWidth=t_,o.stroke(),o_(o,xi(l,f),d,s)}function o_(n,e,r,t){n.strokeStyle="#bbb",n.lineWidth=.5,n.fillStyle="#4d4d4d",n.font=fD,n.textAlign="center";for(const i of e){const o=r(i.value);n.beginPath(),n.moveTo(o,t),n.lineTo(o,t+3),n.stroke(),n.fillText(i.label,o,t+12)}}const rp=new Set(["info","clarification","meta","version","math-help","ai-hidden"]),pD="framing-explainer-persuasive",hD="framing-explainer-nonpersuasive",vD="root",mD=14,bD=(n,e)=>`<strong>POV ${n}:</strong><span class="framing-note-content">${e}</span>`,gD=(n,e)=>`<strong>${n}:</strong><span class="framing-note-content">${e}</span>`;function By(n){const e=n.jprobInstance.option_value_or("framing_POVs_enabled",[]);if(!Array.isArray(e)||!e.every(r=>typeof r=="string"))throw new Error("framing_POVs_enabled must be a string array, got "+JSON.stringify(e));return e}function Uy(n){return n.showFramingNotes===!1?!1:!!n.jprobInstance.option_value_or("framing_enabled",!0)}function _2(n,e){const r=By(e);return!Uy(e)||!r.length?null:n.get_framing_layout(r)}function _D(n,e,r){var t;return((t=n[e])==null?void 0:t[r])??!0}function Wy(n,e,r,t){const i=_D(r,t,n.note.id),o=n.children.map(h=>Wy(h,e,r,t)).join(""),u=i?" visible":"",a=i?" active":"",c=mD*(n.depth-1),s=ne(n.note.pov),l=kn(n.note.srcquotes,e),f=l.atStart+Se(n.note.defn,e)+l.atEnd;let d,p;return rp.has(n.note.pov)?(d=gD(s,f),p="framing-nonpersuasive"):(d=bD(s,f),p="framing-persuasive"),`<div class="framingnote${u} ${p}" style="margin-left: ${c}px" data-framing-anchor="${ve(t)}" data-framing-id="${ve(n.note.id)}"><div class="framing-note-summary"><button class="framing-fold-btn${a}" data-framing-anchor="${ve(t)}" data-framing-id="${ve(n.note.id)}" title="Toggle framing note">&plusmn;</button>`+d+"</div>"+o+"</div>"}function y2(n,e,r,t){return n.layout_nodes.map(i=>Wy(i,e,r,t)).join("")}function yD(n,e,r,t){return n===void 0||n.layout_nodes.length===0?"":"<div>"+y2(n,e,r,t)+"</div>"}function ED(n,e,r){const t=_2(n,e),i=document.querySelectorAll(`.${u7}`);for(const o of i){const u=o.getAttribute(a7);if(!u)continue;const a=t==null?void 0:t.nonroot_anchor_sections.get(u);o.innerHTML=t&&a?y2(a,e,r.framingFoldState,u):""}}function wD(n,e,r,t){const i=document.getElementById("framing-notes-root-section"),o=_2(e,r),u=o===null?"":y2(o.root_section,r,t.framingFoldState,vD);if(!u){n.innerHTML="",i&&(i.hidden=!0);return}i&&(i.hidden=!1),n.innerHTML=u}function $D(n,e){const r=document.getElementById("framing-notes-explainer-section"),t=By(e);if(!Uy(e)||!t.length){n.innerHTML="",r&&(r.hidden=!0);return}const i=t.some(s=>rp.has(s)),o=t.some(s=>!rp.has(s)),u=Ki[pD],a=Ki[hD];r&&(r.hidden=!1);const c=[];o&&c.push('<div class="framing-explainer framing-persuasive">'+Se(u,e)+"</div>"),i&&c.push('<div class="framing-explainer framing-nonpersuasive">'+Se(a,e)+"</div>"),n.innerHTML=c.join("")}const SD=280,AD=110;function jy(n,e,r){if(r==="point")return String(n.point[e]??"");if(r==="bounds"){const i=n.bounds[e];return i?`${i[0]} ${i[1]}`:""}const t=n.sample[e];return t?typeof t=="string"?t:t.map(([i,o])=>`(${i} ${o})`).join(" "):""}function Gy(n,e){return n.svar_entries().map(({bareName:r},t)=>({bareName:r,cardMode:e,inputIndex:t}))}function Vy(n,e,r){const t=Je(e.ui.whose,r);if(!t)return[];const{source:i}=me(e.ui.whose);if(i==="metho-plaincode"||i==="metho-richcode"||i==="adhoc-plaincode"){const o=t,u={};for(const c of o.cparam_names){const s=n.find_cparam(c),l=p2(o,c,s==null?void 0:s.allowed_values);u[c]=rt(c,e,s,l)}const a=on(o,u);return a?a.trials:[]}return i==="adhoc-plainnum"||i==="metho-plainnum"?t.trials:[]}function E2(n,e){return n>0?Math.max(0,Math.min(e,n-1)):0}function w2(n,e){return'<div class="assumption-trial-bar"><span class="assumption-trial-label">trial</span><div class="assumption-trial-buttons">'+Array.from({length:n},(r,t)=>`<button class="assumption-trial-btn${t===e?" active":""}" data-trial="${t}">${t+1}</button>`).join("")+"</div></div>"}function kD(n,e,r,t,i){var I,A;const o=document.getElementById("custom-assumptions-section"),u=t.ui.whose==="yours-plaincode",a=t.ui.inputMode,c=!De(t.ui.whose),s=e.get_svar_bare_names(),l=_2(e,r),f=Dt(e);if(f.length===0){n.innerHTML="",o&&(o.hidden=!0);return}o&&(o.hidden=!1);const d=Gy(e,a),p=c?Vy(e,t,i).map(C=>d.map(k=>jy(C,k.bareName,k.cardMode))):[],h=(((I=t.yoursRecord.raw_input)==null?void 0:I[a])??"").split(`
`),v=p.length,m=c&&v>1,b=E2(v,t.ui.assumptionTrialIndex),g=m?w2(v,b):"",_=c?'<div class="assumption-preset-hint">preset selected; select Yours in Calculator to edit</div>':"",y=e.svar_entries().map(C=>C.decl.type_highlevel),E=[];for(let C=0;C<f.length;C++){const k=d[C],S=k.cardMode,w=S==="sample"&&!u,$=S==="bounds"?" bounds-mode":S==="sample"?" sample-mode":"",L=Se(f[C],r),R=s[C],T=R?e.get_svar(R):void 0,N=R?`isym:${R}`:null,B=N!==null&&e.can_consolidate_isym_svar(N),O=B?e.get_isym(N):void 0,H=(O==null?void 0:O.defn)??(T==null?void 0:T.defn),F=O?O.srcquotes:T==null?void 0:T.srcquotes,Q=kn(F,r),W=H?Q.atStart+Se(H,r)+Q.atEnd:"",K=R?`svar:${R}`:null,re=B?` id="isym-${ve(R??"")}"`:"",G=K&&l?yD(l.nonroot_anchor_sections.get(K),r,t.ui.framingFoldState,K):"",x=w?`<canvas class="param-density-canvas" data-param-index="${k.inputIndex}" data-type-highlevel="${y[k.inputIndex]}" width="${SD}" height="${AD}"></canvas>`:"";let Y;if(c){const Z=((A=p[b])==null?void 0:A[C])??"",oe=p.map((we,ge)=>`data-trial-${ge}="${ve(we[C]??"")}"`).join(" ");Y=`<span class="assumption-readonly${$}" data-param-index="${C}" ${oe}>${ne(Z)}</span>`}else{const Z=(h[k.inputIndex]??"").trim();Y=`<input class="assumption-input${$}" data-param-index="${k.inputIndex}" data-group="${a}" value="${ve(Z)}" placeholder="${FD(S)}">`}const j=!c&&!u&&S==="sample"?'<span class="assumption-help-slot"></span>':"";!c&&S==="sample"&&zy(h[k.inputIndex]??"");const Ae="",fe=`<span class="assumption-op">${ne(K_(S))}</span>`;E.push(`<div class="assumption-card${c?" preset-mode":""}"${re}>`+Ep(r,R??"")+`<div class="assumption-header"><span class="assumption-cond">${L}</span><span class="assumption-input-row"${u?" hidden":""}>`+fe+Y+j+"</span></div>"+(W?`<div id="gloss-${R??""}" class="assumption-narrative">${W}</div>`:"")+x+Ae+g+_+G+"</div>")}n.innerHTML=E.join("");for(const C of n.querySelectorAll(".assumption-help-slot"))C.appendChild(Zt(oO));if(a==="sample"&&!u){const C=fr(e.svar_entries().map(k=>k.decl));c?$2(n,C):S2(n,C)}}function LD(n,e,r,t){var s;if(De(r.ui.whose))return;const i=r.ui.inputMode,o=Gy(e,i),u=Vy(e,r,t).map(l=>o.map(f=>jy(l,f.bareName,f.cardMode))),a=u.length,c=E2(a,r.ui.assumptionTrialIndex);for(const l of n.querySelectorAll(".assumption-readonly")){const f=Number(l.dataset.paramIndex);for(const d of l.getAttributeNames())d.startsWith("data-trial-")&&l.removeAttribute(d);u.forEach((d,p)=>{l.setAttribute(`data-trial-${p}`,d[f]??"")}),l.textContent=((s=u[c])==null?void 0:s[f])??""}ID(n,a,c),i==="sample"&&$2(n,fr(e.svar_entries().map(l=>l.decl)))}function ID(n,e,r){const t=e>1;for(const i of n.querySelectorAll(".assumption-card")){const o=i.querySelector(".assumption-trial-bar");if(!t){o==null||o.remove();continue}const u=w2(e,r);if(o)o.outerHTML=u;else{const a=i.querySelector(".assumption-preset-hint");a?a.insertAdjacentHTML("beforebegin",u):i.insertAdjacentHTML("beforeend",u)}}}function RD(n,e,r){n.querySelectorAll(".assumption-trial-btn").forEach(o=>{o.classList.toggle("active",o.dataset.trial===String(e))});const i=n.querySelectorAll(".assumption-readonly");for(const o of i){const u=o.getAttribute(`data-trial-${e}`)??"";o.textContent=u}$2(n,r)}function CD(n,e){const r=n.dataset.typeHighlevel,t=r?Ao(r):null,i=e.points,o=Vp(t,i[0].x,i[i.length-1].x);i_(n,e,o),mr(n,()=>i_(n,e,o))}function MD(n){const e=n.parentElement;return e!=null&&e.classList.contains("resizable-canvas-wrapper")?e:n}function Xy(n,e){const r=MD(n);if(!e){r.hidden=!0;return}r.hidden=!1,CD(n,e)}function $2(n,e){const r=n.querySelectorAll(".param-density-canvas");for(const t of r){const i=t.closest(".assumption-card"),o=i==null?void 0:i.querySelector(".assumption-readonly"),u=(o==null?void 0:o.textContent)??"",a=Number(t.dataset.paramIndex??0);Xy(t,Yy(u,e==null?void 0:e[a]))}}function qD(n,e,r){var a;const t=e.ui.inputMode,i=((a=e.yoursRecord.raw_input)==null?void 0:a[t])??"",o=i?i.split(`
`):[];n.querySelectorAll(".assumption-input").forEach(c=>{const s=Number(c.dataset.paramIndex),l=(o[s]??"").trim();c.value!==l&&document.activeElement!==c&&(c.value=l)}),t==="sample"&&(S2(n,r),Jy(n))}function S2(n,e){const r=n.querySelectorAll(".param-density-canvas");for(const t of r){const i=t.closest(".assumption-card"),o=i==null?void 0:i.querySelector(".assumption-input"),u=(o==null?void 0:o.value)??"",a=Number(t.dataset.paramIndex??0);Xy(t,Yy(u,e==null?void 0:e[a]))}}function Yy(n,e){const r=n.trim();if(!r)return null;const t=e??Ot;let i;try{i=Wp(r,t)}catch{return null}switch(i.kind){case"family":return lD(Bp(i.spec,t.lo,t.hi));case"pairs":return cD(i.pairs.map(o=>o[0]),i.pairs.map(o=>o[1]))}}function Ky(n){return n.trim()}function ND(n,e,r,t){var a;const i=n.ui.inputMode,u=(((a=n.yoursRecord.raw_input)==null?void 0:a[i])??"").split(`
`);for(;u.length<t;)u.push("");return u[e]=i==="sample"?Ky(r):r,u.join(`
`)}function zy(n){return null}function Jy(n){const e=n.querySelectorAll(".assumption-card");for(const r of e){const t=r.querySelector(".assumption-input");if(!t)continue;zy(t.value);let i=r.querySelector(".arg-warning");i&&i.remove()}}function FD(n){switch(n){case"point":return"e.g. .5";case"bounds":return"e.g. .01 1";case"sample":return"e.g. "+Qy}}const Qy="tri(0, .5, .99)",A2="conclusion-density";function TD(n,e){const r=n.config.conclusion_form;if(!r)throw new Error("config.conclusion_form is not set");const t=e[r];if(!t)throw new Error(`Form "${r}" not found in form registry`);return t}function Zy(n,e){return Dt(n).map(r=>`<div class="calc-label-row"><span class="label-full">${Se(r,e)}</span></div>`).join("")}function OD(n,e){const r=ne(K_(e));return Array.from({length:n},()=>`<div class="calc-op-row">${r}</div>`).join("")}function k2(n,e,r,t,i,o,u,a,c,s){var g,_,y;const l=i.ui.inputMode;if(o){const{source:E}=me(i.ui.whose);if(E==="metho-plaincode"||E==="metho-richcode"||E==="adhoc-plaincode"){const I=Je(i.ui.whose,o);if(I){const A=pn();Qg(n,e,I,L2(E,I,o),r,t,i,A,u,c,s);return}}if(E==="yours-plaincode"){const I=i.yoursCodeRecord;if(n.innerHTML="",I.verified_code_input&&I.cparam_combos.length>0){const A=io(I),C=pn();Qg(n,e,A,[A],r,t,i,C,u,c,s)}else e.innerHTML='<div class="result-detail">Write code below and click Sample to compute results.</div>';return}}const f=((g=i.yoursRecord.raw_input)==null?void 0:g[l])??"",p=Dt(r).length,h=!De(i.ui.whose),v=Zy(r,t),m=p>0?`<div class="calc-operators">${OD(p,l)}</div>`:"";let b;if(h)b='<div id="sample-columns"></div>';else{const E=l==="bounds"?" bounds-mode":l==="sample"?" sample-mode":"",I=GD(l,p);b=`<div class="calc-input"><textarea class="calc-textarea${E}" data-group="${l}" rows="${p}" spellcheck="false" placeholder="${I}">${ne(f)}</textarea></div>`}if(n.innerHTML=`
    <div class="calc-layout">
      <div class="calc-labels">${v}</div>
      ${m}
      ${b}
    </div>
  `,h&&o){const E=n.querySelector("#sample-columns");E&&wq(E,r,o,i)&&((_=n.querySelector(".calc-labels"))==null||_.classList.add("has-sample-col-headers"),(y=n.querySelector(".calc-operators"))==null||y.classList.add("has-sample-col-headers"));const{source:I}=me(i.ui.whose);if(I==="adhoc-plainnum"){const A=Je(i.ui.whose,o),C=A==null?void 0:A.trials[0],k=r.svar_entries().map(S=>S.bareName);C&&m7(C,k).length>0&&n.insertAdjacentHTML("beforeend",`<div class="calc-copy-to-yours"><button class="copy-to-yours-btn" type="button" title="Copy this entry's estimates into your editable Yours inputs">Copy to Yours</button></div>`)}}Po(e,r,t,i,o,u,a)}function L2(n,e,r){return n==="metho-plaincode"?r.plaincodeResults:n==="metho-richcode"?r.richcodeResults:[e]}function DD(n,e,r,t,i,o,u,a,c,s){const{source:l}=me(i.ui.whose),f=pn();if(o&&(l==="metho-plaincode"||l==="metho-richcode"||l==="adhoc-plaincode")){const d=Je(i.ui.whose,o);if(d){Zg(n,e,d,L2(l,d,o),r,t,i,f,u,c,s);return}}else if(l==="yours-plaincode"){const d=i.yoursCodeRecord;if(d.verified_code_input&&d.cparam_combos.length>0){const p=io(d);Zg(n,e,p,[p],r,t,i,f,u,c,s);return}}console.warn(`Code-control change outside a code result view (whose=${JSON.stringify(i.ui.whose)}); falling back to a full calculator render`),k2(n,e,r,t,i,o,u,a,c,s)}function Po(n,e,r,t,i,o,u){VD(n,e,r,t,i,o,u)}function PD(n,e,r,t,i,o,u,a){const c=o[e];if(!c){n.innerHTML="",console.warn(`derived-form ${e}: not in form registry (cannot compute)`);return}const s=r.form.find(b=>b.id===e);if(!s){n.innerHTML="",console.error(`derived-form ${e}: not found in jprob template form list`);return}const l=i.ui.inputMode;if(!x_(s,l)){n.innerHTML="";return}const f=B_(e,s.sexpr),d=HD(r,f),p=Se(d,t),h=!De(i.ui.whose),v=r.get_svar_bare_names().length;let m;try{m=WD(e,c,r,i,l,h,v,a,u)}catch(b){n.innerHTML="",console.error(`derived-form ${e}: ${b.message}`);return}switch(m.kind){case"ok":const b=m.valueHtml??`<span class="derived-value">${m.value}</span>`,g=m.detailHtml??(m.detail?` <span class="derived-detail">${m.detail}</span>`:"");n.innerHTML=`<div class="hir-loud-note">${p} ${m.label} ${m.relation??"≈"} `+b+(g?` ${g}`:"")+"</div>"+(m.nonFiniteWarning?Ji():"");return;case"non-finite":n.innerHTML=Ji();return;case"unavailable":n.innerHTML=`<div class="hir-loud-note">${p} — <span class="derived-detail">${ne(m.explanation)}</span></div>`;return;case"pending":n.innerHTML="";return;case"missing":n.innerHTML="",console.warn(`derived-form ${e}: ${m.reason}`);return;case"error":n.innerHTML="",console.error(`derived-form ${e}: ${m.message}`);return}}function HD(n,e){const r=U_(e);return n.get_display_expr(r)??r}function Br(n){return P_(n.svar_entries())}const xD={point:()=>zi,bounds:"from bounds",mc:()=>"MC"},BD={point:n=>n.perTrial.length>1?`mean of ${n.perTrial.length} samples`:"from preset",bounds:"from preset",mc:n=>n.trialCount>1?`MC of ${n.trialCount} trials`:"MC"},UD={point:n=>n.perTrial.length>1?`${zi} (mean of ${n.perTrial.length} trials)`:zi,bounds:"from bounds",mc:()=>"MC"};function yt(n,e,r,t){switch(n.kind){case"point":{const i=_t([...n.perTrial,n.value]);return i==="undefined"?{kind:"non-finite"}:{kind:"ok",label:t.point(n),value:Ue(n.value,e,r),nonFiniteWarning:i==="infinite"}}case"bounds":{const i=_t([n.lo,n.hi]);return i==="undefined"?{kind:"non-finite"}:Ey(n.lo,n.hi)?{kind:"unavailable",explanation:yy}:{kind:"ok",label:t.bounds,relation:wy(n.tightness),value:vO(n.lo,n.hi,e,r),nonFiniteWarning:i==="infinite"&&n.tightness==="tight"}}case"mc":{const i=_t([n.mean,n.median,n.p5,n.p95]);if(i==="undefined")return{kind:"non-finite"};const o=dO(n,e,r);return{kind:"ok",label:t.mc(n),value:"",valueHtml:o.valueHtml,detailHtml:o.detailHtml,nonFiniteWarning:i==="infinite"}}}}function WD(n,e,r,t,i,o,u,a,c){var m;const s=r.get_svar_bare_names(),l=e.params.filter(b=>!s.includes(b));if(l.length>0)return{kind:"error",message:`params not in svar_list: ${JSON.stringify(l)} (form.params=${JSON.stringify(e.params)}, svar_list=${JSON.stringify(s)})`};const f=w9(n,e,c),d=t.ui.probAsOdds,{source:p}=me(t.ui.whose);if(bn(p)==="plaincode"||bn(p)==="richcode")return jD(n,e,f,r,t,p,a);if(i==="bounds"&&!e.bounds)return{kind:"unavailable",explanation:Yt};if(o){if(!a)return{kind:"pending"};const b=Je(t.ui.whose,a);if(!b)return{kind:"pending"};if(p!=="adhoc-plainnum"&&p!=="metho-plainnum")return{kind:"pending"};const g=b;try{const _=wr(pn()),y=Pn(f,sr(g.trials,i,Br(r)),{onIncompleteTrial:"skip",mcIters:_.mcIters,mcItersPerClick:_.mcItersPerClick});return yt(y,e.typeHighlevel,d,BD)}catch(_){if(_ instanceof Lt)return{kind:"missing",reason:`record: ${_.message}`};throw _}}const h=((m=t.yoursRecord.raw_input)==null?void 0:m[i])??"";if(!h.trim())return{kind:"pending"};const v=xo(r,i,h,"tolerant",rE(t));try{const b=wr(pn()),g=Pn(f,v,{onIncompleteTrial:"skip",mcIters:b.mcIters,mcItersPerClick:b.mcItersPerClick});return yt(g,e.typeHighlevel,d,xD)}catch(b){if(b instanceof Lt)return{kind:"pending"};throw b}}function jD(n,e,r,t,i,o,u){let a,c;if(Ze(o)==="yours"){const d=i.yoursCodeRecord;if(!d.verified_code_input||d.cparam_combos.length===0)return{kind:"pending"};a=io(d),c=[a]}else{if(!u)return{kind:"pending"};if(a=Je(i.ui.whose,u),!a)return{kind:"pending"};c=L2(o,a,u)}Sp(a);const s=xO(a,c,t,i);if(!s)return{kind:"pending"};if(s.trials.length===0)return{kind:"missing",reason:"no trials for the selected scenario combination"};const l=i.ui.probAsOdds,f=UD;if(i.ui.inputMode==="point"){const d=s.trials.map(h=>Ay(h,n,e)),p=d.reduce((h,v)=>h+v,0)/d.length;return yt({kind:"point",value:p,perTrial:d,perTrialInputs:[]},e.typeHighlevel,l,f)}if(i.ui.inputMode==="bounds"){if(!$p(a))throw new Error("code bounds derived-form display reached with a multi-trial record; bounds mode should not have been selectable");const d=ky(s.trials[0],n,e);if(!d)return{kind:"unavailable",explanation:Yt};const[p,h]=d.interval;return yt({kind:"bounds",lo:p,hi:h,tightness:d.tightness,trialCount:1},e.typeHighlevel,l,f)}try{const d=wr(pn()),p=Pn(r,sr(s.trials,"sample",Br(t)),{onIncompleteTrial:"skip",mcIters:d.mcIters,mcItersPerClick:d.mcItersPerClick});return yt(p,e.typeHighlevel,l,f)}catch(d){if(d instanceof Lt)return{kind:"missing",reason:`combo trials: ${d.message}`};throw d}}function GD(n,e){const r=n==="sample"?Qy:n==="bounds"?".01 1":".5";return"e.g. "+Array.from({length:e},()=>r).join(`
`)}function VD(n,e,r,t,i,o,u){var p;const a=o?TD(e,o):null,c=t.ui.inputMode,s=!De(t.ui.whose),l=pn();if(s&&i){try{zD(n,e,r,t,i,a,l,u)}catch(h){n.innerHTML=`<div class="result-error">${ne(h.message)}</div>`}return}const f=((p=t.yoursRecord.raw_input)==null?void 0:p[c])??"",d=e.svar_entries().length;if(!f.trim()){n.innerHTML='<div class="result-detail">Enter probabilities above.</div>';return}try{switch(c){case"point":XD(n,f,e,r,d,a,t.ui.probAsOdds);break;case"bounds":YD(n,f,e,r,d,a,t.ui.probAsOdds);break;case"sample":KD(n,f,e,r,d,t,a,l,u);break}}catch(h){n.innerHTML=`<div class="result-error">${ne(h.message)}</div>`}}function tp(n,e){return!isNaN(n)&&Ai(e,n)}function eE(n,e,r){const t=n.trim().split(/\n/).map(i=>i.trim()).filter(i=>i.length>0);if(t.length!==e)throw new Error(`Expected ${e} values, got ${t.length}`);return t.map((i,o)=>{const u=Number(i),a=(r==null?void 0:r[o])??Ot;if(!tp(u,a))throw new Error(`Line ${o+1}: "${i}" is not a valid value in ${ki(a)}`);return u})}function Ho(n,e,r){return e?w9(n.config.conclusion_form??"form:conclusion",e,r):{key:"conclusion-unavailable",params:[],typeHighlevel:n.config.conclusion_type_highlevel,point:()=>NaN,bounds:null,boundsTightness:null}}function nE(){return`<div class="result-detail">${ne(Yt)}</div>`}function I2(n,e){for(const r of e.params)if(!n.includes(r))throw new Error(`form param "${r}" is not an input subjective variable`)}function xo(n,e,r,t,i=null){const o=n.svar_entries(),u=o.map(f=>f.bareName),a=fr(o.map(f=>f.decl)),c=Br(n);if(t==="strict"){if(e==="point"){const d=eE(r,u.length,a);return{mode:e,trials:[Object.fromEntries(u.map((p,h)=>[p,d[h]]))]}}if(e==="bounds"){const d=tE(r,u.length,a);return{mode:e,trials:[Object.fromEntries(u.map((p,h)=>[p,d[h]]))]}}const{specs:f}=iE(r,u.length,a);return{mode:"sample",ranges:c,trials:[{specs:Object.fromEntries(u.map((d,p)=>[d,f[p]])),lloads:i}]}}const s=r.trim().split(/\n/).map(f=>f.trim()).filter(f=>f.length>0);if(e==="point"){const f={};return u.forEach((d,p)=>{const h=Number(s[p]);isNaN(h)||(f[d]=h)}),{mode:e,trials:[f]}}if(e==="bounds"){const f={};return u.forEach((d,p)=>{const h=(s[p]??"").split(/\s+/);if(h.length!==2)return;const v=Number(h[0]),m=Number(h[1]);isNaN(v)||isNaN(m)||(f[d]=[v,m])}),{mode:e,trials:[f]}}const l={};return u.forEach((f,d)=>{try{l[f]=Wp(s[d]??"",a[d]??Ot)}catch{}}),{mode:"sample",ranges:c,trials:[{specs:l,lloads:i}]}}function rE(n){var e;return((e=n.yoursRecord.trials[0])==null?void 0:e.lloads)??null}function XD(n,e,r,t,i,o,u){const a=r.svar_entries().map(p=>p.bareName);o&&I2(a,o);const c=xo(r,"point",e,"strict"),s=Pn(Ho(r,o),c,{onIncompleteTrial:"error"}),l=Kt(r,t),f=r.config.conclusion_type_highlevel,d=c.trials[0];n.innerHTML=Qi({labelHtml:l,value:s.value,typeHighlevel:f,statsDisplay:u,detail:`from: ${a.map(p=>d[p]).join(", ")}`})}function tE(n,e,r){const t=n.trim().split(/\n/).map(i=>i.trim()).filter(i=>i.length>0);if(t.length!==e)throw new Error(`Expected ${e} lines of "lo hi", got ${t.length}`);return t.map((i,o)=>{const u=i.split(/\s+/);if(u.length!==2)throw new Error(`Line ${o+1}: expected "lo hi", got "${i}"`);const a=Number(u[0]),c=Number(u[1]),s=(r==null?void 0:r[o])??Ot;if(!tp(a,s)||!tp(c,s)||a>c)throw new Error(`Line ${o+1}: invalid bounds "${i}" (need lo ≤ hi within ${ki(s)})`);return[a,c]})}function YD(n,e,r,t,i,o,u){const a=r.svar_entries().map(d=>d.bareName);o&&I2(a,o);const c=xo(r,"bounds",e,"strict");if(o&&!o.bounds){n.innerHTML=nE();return}const s=Pn(Ho(r,o),c,{onIncompleteTrial:"error"}),l=Kt(r,t),f=r.config.conclusion_type_highlevel;n.innerHTML=a2({labelHtml:l,lo:s.lo,hi:s.hi,tightness:s.tightness,typeHighlevel:f,statsDisplay:u})}function iE(n,e,r){const t=n.trim().split(/\n/).map(o=>o.trim()).filter(o=>o.length>0);if(t.length!==e)throw new Error(`Expected ${e} lines, got ${t.length}`);return{specs:t.map((o,u)=>{try{return Wp(o,(r==null?void 0:r[u])??Ot)}catch(a){throw new Error(`Line ${u+1}: ${a.message}`)}}),warnings:[]}}const oE="⟦",uE="⟧";function eo(n,e,r,t){return`<div class="result-label">Exact moments (independent)</div><div class="result-main">E${oE}${e}${uE} = <span class="hl">${Ue(n.mean,r,t)}</span></div><div class="result-detail">σ = ${Ue(n.sigma,r,"probability")}</div>`}function no(n){const e=`${u_("n")}=${n.samples.length.toLocaleString()}`;return n.barrierInnerIters===null?e:`${e}, E${oE}·${uE} ${u_("n")}=${n.barrierInnerIters.toLocaleString()}`}function ip(n,e,r,t){return'<div class="mc-row"><div class="mc-text">'+Nt(n,e,r,"monte-carlo",t)+'</div><canvas id="density-canvas" width="400" height="200"></canvas></div>'}function aE(n,e,r,t){const i=n.querySelector("#density-canvas");if(!i)return;const o=e.samples??e.densityCurve;if(!o)return;const u=Ao(r);Bi(i,o,e.p5,e.p95,u),mr(i,()=>Bi(i,o,e.p5,e.p95,u),{stateHost:n,stateKey:A2}),e.mcPoolToken!==null&&To(i,e.mcPoolToken,e.samples.length,{itersPerTarget:t,targetCount:1})}function KD(n,e,r,t,i,o,u,a,c){const s=r.svar_entries().map(_=>_.bareName);u&&I2(s,u);const l=rE(o),f=xo(r,"sample",e,"strict",l),d=Kt(r,t),p=r.config.conclusion_type_highlevel,h=o.ui.probAsOdds,v=Ho(r,u,c),m=wr(a);if(co(l)){const _=jp(v,f,{onIncompleteTrial:"error",mcIters:m.mcIters,mcItersPerClick:m.mcItersPerClick}),y=[];_.independent.exact&&y.push(eo(_.independent.exact,d,p,h)),y.push(Zi({comparison:_,typeHighlevel:p,statsDisplay:h,targetLabelHtml:d,canvasId:"density-canvas",provenanceDetail:`Monte Carlo, ${no(_.joint)}`})),n.innerHTML=y.join(""),f2({box:n,canvasId:"density-canvas",comparison:_,typeHighlevel:p,resizeStateKey:A2,mcItersPerClick:m.mcItersPerClick});return}const b=Pn(v,f,{onIncompleteTrial:"error",mcIters:m.mcIters,mcItersPerClick:m.mcItersPerClick}),g=[];b.exact&&g.push(eo(b.exact,d,p,h)),g.push(`<div class="result-label">Monte Carlo (independent, ${no(b)})</div>`+ip(b,p,h,d)),n.innerHTML=g.join(""),aE(n,b,p,m.mcItersPerClick)}function zD(n,e,r,t,i,o,u,a){const c=Je(t.ui.whose,i);if(!c){n.innerHTML='<div class="result-detail">No data for this preset.</div>';return}const{source:s}=me(t.ui.whose),l=Kt(e,r);if(s==="adhoc-plainnum"||s==="metho-plainnum"){JD(n,c,e,r,t,l,o,u,a);return}n.innerHTML='<div class="result-detail">Unknown preset source.</div>'}function JD(n,e,r,t,i,o,u,a,c){const s=i.ui.inputMode,l=r.config.conclusion_type_highlevel,f=i.ui.probAsOdds;if(e.trials.length===0)throw new Error("Plainnum record has no trials to display");const d=Ho(r,u,c);if(s==="point"){const p=Pn(d,sr(e.trials,"point",Br(r)),{onIncompleteTrial:"error"});if(p.perTrial.length===1)n.innerHTML=Qi({labelHtml:o,value:p.perTrial[0],typeHighlevel:l,statsDisplay:f,detail:`from: ${p.perTrialInputs[0].join(", ")}`});else{const h=p.perTrial.map(v=>Ue(v,l,f)).join(", ");n.innerHTML=Qi({labelHtml:o,value:p.value,typeHighlevel:l,statsDisplay:f,labelPrefix:"mean ",detail:`per sample: ${h}`})}return}if(s==="bounds"){if(u&&!u.bounds){n.innerHTML=nE();return}const p=Pn(d,sr(e.trials,"bounds",Br(r)),{onIncompleteTrial:"error"});n.innerHTML=a2({labelHtml:o,lo:p.lo,hi:p.hi,tightness:p.tightness,typeHighlevel:l,statsDisplay:f,midpointDetailSuffix:` (envelope of ${p.trialCount} sample${p.trialCount>1?"s":""})`});return}QD(n,e,d,r,t,i,o,a)}function QD(n,e,r,t,i,o,u,a){const c=t.config.conclusion_type_highlevel,s=o.ui.probAsOdds,l=wr(a),f=sr(e.trials,"sample",Br(t)),d=l2(e.trials,t,i,{offerCopyToYours:!0});if(d.hasDependence){const v=ZD(e),m=jp(r,f,{onIncompleteTrial:"error",mcIters:l.mcIters,mcItersPerClick:l.mcItersPerClick,precomputed:v}),b=[];m.independent.exact&&b.push(eo(m.independent.exact,u,c,s));const g=m.joint.provenance==="precomputed"?`precomputed, ${e.count} agent trial${e.count===1?"":"s"}`+(m.joint.mcIters?`, ${a_(m.joint.mcIters)} MC iters`:""):`Monte Carlo, ${no(m.joint)}`;b.push(Zi({comparison:m,typeHighlevel:c,statsDisplay:s,targetLabelHtml:u,canvasId:"density-canvas",provenanceDetail:g})),b.push(d.specHtml),n.innerHTML=b.join(""),f2({box:n,canvasId:"density-canvas",comparison:m,typeHighlevel:c,resizeStateKey:A2,mcItersPerClick:l.mcItersPerClick});return}const p=Pn(r,f,{onIncompleteTrial:"error",mcIters:l.mcIters,mcItersPerClick:l.mcItersPerClick,precomputed:$q(e)}),h=[];if(p.exact&&h.push(eo(p.exact,u,c,s)),p.provenance==="precomputed"){const v=p.mcIters?`, ${a_(p.mcIters)} MC iters`:"";h.push(`<div class="result-label">Precomputed (independent, ${e.count} agent trials${v})</div>`+ip(p,c,s,u))}else h.push(`<div class="result-label">Monte Carlo (independent, ${no(p)})</div>`+ip(p,c,s,u));d.specHtml&&h.push(d.specHtml),n.innerHTML=h.join(""),aE(n,p,c,l.mcItersPerClick)}function ZD(n){const e=n.precomputed[Jn],r=n.precomputed[Ci];if(e===void 0&&r===void 0)return null;if(e===void 0||r===void 0)throw new Error(`A record with stated joint dependence must carry both the independence precompute (${Jn}) and joint precompute (${Ci}), or neither for live comparison`);return{independent:e,joint:r}}function u_(n){return`<span class="lc">${n}</span>`}const eP=1e6;function a_(n){const e=n/eP;return e>=1&&e===Math.floor(e)?`${e}M`:`${e.toFixed(1)}M`}function nP(n,e,r,t,i){if(!e.trim())return null;try{if(n==="point"){const a=eE(e,r,i),c={};for(let s=0;s<t.length;s++)c[t[s]]=a[s];return c}if(n==="bounds"){const a=tE(e,r,i),c={};for(let s=0;s<t.length;s++)c[t[s]]=a[s];return c}const{specs:o}=iE(e,r,i),u={};for(let a=0;a<t.length;a++){const c=o[a];u[t[a]]=c.kind==="family"?c.spec.text:c.pairs}return u}catch{return null}}function R2(n,e,r,t,i){const o=n.yoursRecord;o.raw_input={...o.raw_input??{},[t]:i};const u=e.svar_entries(),a=u.map(f=>f.bareName),c=a.length,s=fr(u.map(f=>f.decl)),l=nP(t,i,c,a,s);if(l!==null){const f=o.trials[0];t==="point"?f.point=l:t==="bounds"?f.bounds=l:f.sample=l}Ip(e,r,n.plainnumOptionDictKey,o)}function C2(n,e,r,t,i,o){const u=n.yoursRecord;u.lloads_draft=t;const a=C7(t,i,o);return a.kind==="valid"&&(u.trials[0].lloads=a.lloads),Ip(e,r,n.plainnumOptionDictKey,u),a}function s_(n,e,r,t,i,o){if(t==="plaincode"){const u=n.yoursCodeRecord;u.trial_choices={...u.trial_choices??{},[i]:o},Ht(e,r,n.codeOptionDictKey,u)}else{const u=n.yoursRecord;u.trial_choices={...u.trial_choices??{},[i]:o},Ip(e,r,n.plainnumOptionDictKey,u)}}function rP(n,e){n.addEventListener("input",r=>{const t=r.target;if(t.classList.contains("calc-textarea")){e.persistCalcTextarea(t);return}if(t.classList.contains("assumption-input")){e.persistAssumptionCard(t);return}}),n.addEventListener("change",r=>{const t=r.target;if(t.classList.contains("calc-textarea")){e.recomputeAfterCalcTextarea();return}if(t.classList.contains("assumption-input")){e.recomputeAfterAssumptionCard(t);return}})}function M2(n,e,r,t){const i=n.yoursCodeRecord;i.raw_code_input=t,Ht(e,r,n.codeOptionDictKey,i)}function tP(n,e,r,t,i){const o=n.yoursCodeRecord;o.reasoning_response={...o.reasoning_response,[t]:i},Ht(e,r,n.codeOptionDictKey,o)}function iP(n,e,r,t){const i=n.yoursCodeRecord;i.misc_response=t,Ht(e,r,n.codeOptionDictKey,i)}function q2(n){const e=`yours_${n}_`,r=[];for(let i=0;i<localStorage.length;i++){const o=localStorage.key(i);o!==null&&o.startsWith(e)&&r.push(o)}const t=[];for(const i of r){const o=localStorage.getItem(i);if(o===null)continue;let u;try{u=JSON.parse(o)}catch{continue}t.push({plainnumOptionDictKey:i.slice(e.length),record:u})}return t.sort((i,o)=>{const u=i.record.timestamp??"";return(o.record.timestamp??"").localeCompare(u)}),t}function oP(n,e){localStorage.removeItem(ao(n,e))}function uP(n){const e=q2(n).map(i=>({kind:"plainnum",plainnumOptionDictKey:i.plainnumOptionDictKey,record:i.record})),r=kp(n).map(i=>({kind:"plaincode",codeOptionDictKey:i.codeOptionDictKey,record:i.record})),t=[...e,...r];return t.sort((i,o)=>{const u=i.record.timestamp??"";return(o.record.timestamp??"").localeCompare(u)}),t}function aP(n,e,r,t){const i={};for(const[a,c]of Object.entries(t.cparam_values??{}))N2(c)&&(i[a]=c);for(const[a,c]of Object.entries(t.aopts))sE(c)&&(i[a]=c);const o=uo(e.get_options(),i);Lp(e.config,o);const u={...n.ui,whose:"yours-plainnum"};return Ne(e.config,u),{...n,optionValues:o,plainnumOptionDictKey:r,ui:u,yoursRecord:t}}function sP(n,e,r,t){const i={};for(const[a,c]of Object.entries(t.aopts))sE(c)&&(i[a]=c);for(const a of e.get_cparams()){const c=Te(a.id);if(c in n.optionValues){const s=n.optionValues[c];if(!N2(s))throw new Error(`Cparam ${a.id} has a non-scalar state value`);i[c]=s}}const o=uo(e.get_options(),i);Lp(e.config,o);const u={...n.ui,whose:"yours-plaincode"};return Ne(e.config,u),{...n,optionValues:o,codeOptionDictKey:r,ui:u,yoursCodeRecord:t}}function N2(n){const e=typeof n;return e==="string"||e==="number"||e==="boolean"}function sE(n){return N2(n)||Array.isArray(n)&&n.every(e=>typeof e=="string")}function cE(n,e){const r=[];for(const t of n.get_options()){const i=Te(t.id),o=yr(t.id)?e.cparam_values:e.aopts,u=o==null?void 0:o[i];u!==void 0&&(!yr(t.id)&&u===t.default_value||r.push(`${i}=${fE(u)}`))}return r.join(" ")}function lE(n,e){const r=["code"];for(const t of n.get_aopts()){const i=Te(t.id),o=e.aopts[i];o!==void 0&&o!==t.default_value&&r.push(`${i}=${fE(o)}`)}return r.join(" ")}function fE(n){return typeof n=="boolean"?n?"true":"false":String(n)}function cP(n,e){const r=uP(n.aid),t='<div class="yours-saved-header">Saved estimations</div>';if(r.length===0)return t+'<div class="yours-saved-empty">No saved estimations yet.</div>';const i=r.map(o=>lP(n,e,o)).join("");return t+`<div class="yours-saved-list">${i}</div>`}function lP(n,e,r){if(r.kind==="plainnum"){const u=ne(cE(n,r.record)||"(default options)"),a=ne(r.plainnumOptionDictKey);return`<div class="yours-saved-row${e.ui.whose==="yours-plainnum"&&r.plainnumOptionDictKey===e.plainnumOptionDictKey?" yours-saved-row-current":""}" data-kind="plainnum" data-key="${a}" role="button" tabindex="0"><span class="yours-saved-label">${u}</span><button class="yours-saved-delete" data-kind="plainnum" data-key="${a}" aria-label="Delete" title="Delete this saved estimation">×</button></div>`}const t=ne(lE(n,r.record)),i=ne(r.codeOptionDictKey);return`<div class="yours-saved-row yours-saved-row-code${e.ui.whose==="yours-plaincode"&&r.codeOptionDictKey===e.codeOptionDictKey?" yours-saved-row-current":""}" data-kind="plaincode" data-key="${i}" role="button" tabindex="0"><span class="yours-saved-label">${t}</span><button class="yours-saved-delete" data-kind="plaincode" data-key="${i}" aria-label="Delete" title="Delete this saved estimation">×</button></div>`}function F2(n,e,r){n.innerHTML=cP(e,r)}const fP=["tri","uniform","uni","beta","normal","lognormal","loguniform","t","logt","normal_trunc","lognormal_trunc","t_trunc","logt_trunc","trap","clamp","exp","log","log2","log10","sqrt"],dP=`/**
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
`;function pP(n){if(n.length===0)return["return {","  point:  {},","  bounds: {},","  sample: {},","};"].join(`
`);const e=n.map(i=>`${i}: 0`).join(", "),r=n.map(i=>`${i}: [0, 1]`).join(", "),t=n.map(i=>`    ${i}: tri(0, 0.4, 1),`).join(`
`);return["return {",`  point:  { ${e} },`,`  bounds: { ${r} },`,"  sample: {",t,"  },","};"].join(`
`)}function hP(n,e){return e}function vP(n){const e=[];for(const r of n.get_cparams()){const t=r.allowed_values;t===void 0||typeof t=="string"||e.push(r.id.slice(7))}return e}const mP="// code data missing";function bP(n,e,r){const t=vP(n),i=n.get_svar_bare_names(),o=`function belief_spec_for_cparam_combo(${t.join(", ")}) {`,u=e.raw_code_input!==""?e.raw_code_input:r==="edit"?pP(i):mP,a=r==="view"?" readonly":"",c=i.map(p=>{const h=ne(hP(n,p)),v=ne(e.reasoning_response[p]??"");return`<div class="code-reasoning-row"><label class="code-reasoning-label">${h}</label><textarea class="code-reasoning-input auto-expand" data-svar="${ne(p)}" rows="1" spellcheck="false"${a}>${v}</textarea></div>`}).join(""),s=ne(e.misc_response),f=`// ${fP.join(", ")} are injected helper functions. For details (warning: the literal code with some irrelevant docs): `,d=r==="edit"?'<div class="code-action-row"><button class="code-sample-btn" type="button">Sample</button><span class="code-status" aria-live="polite"></span></div><div class="code-error-area"></div><div class="result-detail">The remaining fields below are only notes for you, unless you choose to contribute your estimation to appear in the `Adhoc...` dropdown in future builds, which we strongly encourage!</div>':e.raw_code_input===""?"":`<div class="code-action-row"><button class="copy-to-yours-btn" type="button" title="Copy this entry's code into your editable Yours-plaincode code">Copy to Yours</button></div>`;return`<div class="yours-code-input" data-variant="${r}"><div class="code-editor"><pre class="code-signature-line">${ne(o)}</pre><pre class="code-helpers-comment"><span class="code-helpers-comment-text">${ne(f)}</span><span class="code-helpers-help-slot"></span></pre><textarea class="code-body-input auto-expand" rows="10" spellcheck="false"${a}>${ne(u)}</textarea><pre class="code-signature-line">}</pre></div>`+d+'<div class="code-reasoning-section"><div class="code-section-header">Reasoning</div>'+c+`</div><div class="code-misc-section"><div class="code-section-header">Misc</div><textarea class="code-misc-input auto-expand" rows="1" spellcheck="false"${a}>${s}</textarea></div></div>`}function gP(n){const e=()=>{n.style.height="auto",n.style.height=`${n.scrollHeight}px`};n.addEventListener("input",e),e()}function dE(n){for(const e of n.querySelectorAll("textarea.auto-expand"))gP(e)}function c_(n,e,r,t){n.innerHTML=bP(e,r,t),dE(n),_P(n)}function _P(n){for(const e of n.querySelectorAll(".code-helpers-help-slot"))e.childElementCount>0||e.appendChild(HT(dP))}const yP=1e-15;function EP(n,e){return e.filter(r=>{const t=n[r];if(typeof t=="string")return Up(t)!==null;if(!Array.isArray(t)||t.length===0)return!1;const i=t[0];return t[t.length-1][0]-i[0]<yP})}function wP(n){var r;const e={};for(const t of n){const i=t.id.startsWith("svar:")?t.id.slice(5):t.id,[o,u]=$P[t.type_mathlevel]??[!0,!0],a=((r=t.type_detail)==null?void 0:r.range)??[0,1];e[i]={lo:a[0],hi:a[1],loClosed:o,hiClosed:u}}return e}const $P={closed_real_interval:[!0,!0],left_open_real_interval:[!1,!0],right_open_real_interval:[!0,!1],open_real_interval:[!1,!1]},SP=.8,l_=.05,AP="Positive values mean…",kP=2;function LP(n,e,r){if(!e||r&&Object.keys(r).length>0)return null;const t=O_(e,n.get_svar_bare_names());return t.length<kP?null:t}function pE(n,e,r,t){var o;const i=LP(e,r,t);return i===null?null:{eligibleSvars:i,degenerateSvars:EP(((o=n.yoursRecord.trials[0])==null?void 0:o.sample)??{},i)}}function T2(n,e,r,t){return me(n.ui.whose).source!=="yours-plainnum"||n.ui.inputMode!=="sample"?null:pE(n,e,r,t)}function O2(n,e){var t;const r=n.yoursRecord;return r.lloads_draft===void 0?L7((t=r.trials[0])==null?void 0:t.lloads,e.eligibleSvars):k7(r.lloads_draft,e.eligibleSvars)}function hE(n,e,r){const t=n.get_svar_bare_names(),i=Dt(n);if(i.length!==t.length)throw new Error(`joint-dependence editor has ${t.length} subjective variables but ${i.length} display labels`);const o=new Map(t.map((u,a)=>[u,i[a]]));return new Map(r.map(u=>[u,Se(o.get(u),e)]))}function IP(n,e,r,t,i,o){const u=T2(e,r,i,o);if(u===null){n.innerHTML="";return}const a=O2(e,u);n.innerHTML=RP(a,u,hE(r,t,u.eligibleSvars),e.ui.jointDependenceEditorOpen),dE(n);const c=n.querySelector(".jde-help-slot");c&&c.appendChild(Zt(nO)),vE(n,a,u),mE(n,a,u,r,t)}function RP(n,e,r,t){const i=n.latents.length===0?CP():MP(n,e,r);return`<details class="joint-dependence-editor"${t?" open":""}><summary class="jde-summary"><span class="jde-summary-title">Joint dependence</span><span class="jde-summary-explainer">Optional named uncertainties shared across your distributions</span><span class="jde-status-pill"></span></summary><div class="jde-body"><div class="jde-intro"><span class="jde-help-slot"></span><p>A latent is one shared uncertainty that can move two or more of your quantities together, or in opposite directions. Describe what it means, then give it signed loadings. Nothing you state here changes the distributions you gave above.</p></div>`+i+"</div></details>"}function CP(){return'<div class="jde-empty-state"><div class="jde-empty-title">Currently sampled independently</div><p>Add a latent only when the distributions above do not tell the whole joint-belief story.</p><button class="jde-btn jde-add-latent-btn" type="button">Add a shared uncertainty</button></div>'}function MP(n,e,r){return'<div class="jde-active"><div class="jde-toolbar"><div class="jde-section-title">Shared uncertainties</div><button class="jde-btn jde-add-latent-btn" type="button">+ Add latent</button></div><div class="jde-latent-list">'+n.latents.map(qP).join("")+`</div><div class="jde-matrix-section"><div class="jde-matrix-heading"><div class="jde-section-title">Signed loadings</div><div class="jde-matrix-hint">−1 falls as the latent rises · +1 rises with it · 0 unaffected</div></div><div class="jde-matrix-scroll">${NP(n,e,r)}</div><div class="jde-banner" role="status"></div></div><div class="jde-bottom-actions"><button class="jde-btn jde-zero-loadings-btn" type="button">Zero all loadings</button><button class="jde-btn jde-remove-all-btn" type="button">Remove all latents</button></div><details class="jde-correlations"><summary>Implied pairwise correlations</summary><p class="jde-correlations-note">Derived from the loadings; feedback, not another input surface. Quantities your latents leave uncoupled are omitted.</p><div class="jde-matrix-scroll">`+TP(e,r)+'</div></details><div class="jde-artifact"><div class="jde-artifact-caption">What your response discloses:</div><div class="jde-artifact-host"></div></div></div>'}function qP(n,e){const r=`jde-latent-name-${e}`,t=`jde-latent-description-${e}`;return`<div class="jde-latent-card" data-latent-index="${e}"><div class="jde-latent-header"><span class="jde-latent-number">${e+1}</span><button class="jde-btn jde-remove-latent-btn" type="button" data-latent-index="${e}">Remove</button></div><div class="jde-latent-fields"><div class="jde-field"><label for="${r}">Short name</label><input id="${r}" class="jde-latent-text" type="text" data-latent-index="${e}" data-latent-field="name" placeholder="e.g. shared evidence quality" value="${ve(n.name)}"></div><div class="jde-field"><label for="${t}">Meaning and positive direction</label><textarea id="${t}" class="jde-latent-text auto-expand" rows="2" data-latent-index="${e}" data-latent-field="description" placeholder="${ve(AP)}">${ne(n.description)}</textarea></div></div></div>`}function NP(n,e,r){const t='<tr><th class="jde-variable-col">Quantity</th>'+n.latents.map((u,a)=>`<th class="jde-loading-col"><span class="jde-matrix-latent-name" data-latent-index="${a}"></span><span class="jde-matrix-latent-hint">−1 to +1</span></th>`).join("")+'<th class="jde-budget-col">Loading budget</th></tr>',i=new Set(e.degenerateSvars),o=e.eligibleSvars.map(u=>{const a=i.has(u),c=r.get(u),s=a?'<span class="jde-svar-note">single value — no dependence possible</span>':"",l=n.latents.map((f,d)=>`<td>${FP(f.loadings[u]??null,d,u,c,a)}</td>`).join("");return`<tr data-svar="${ve(u)}" data-svar-label="${ve(bE(c))}"${a?' class="jde-row-ineligible"':""}><th scope="row" class="jde-svar-cell" data-svar="${ve(u)}"><span class="jde-svar-label">${c}</span>${s}</th>`+l+`<td><div class="jde-budget-track"><span class="jde-budget-fill" data-svar="${ve(u)}"></span></div><div class="jde-budget-copy" data-svar="${ve(u)}"></div></td></tr>`}).join("");return`<table class="jde-loading-matrix"><thead>${t}</thead><tbody>${o}</tbody></table>`}function FP(n,e,r,t,i){const o=ve(`Loading of ${bE(t)} on latent ${e+1}`),u=`data-latent-index="${e}" data-svar="${ve(r)}"${i?" disabled":""}`,a=n===null?"":gE(n);return`<div class="jde-loading-control"><input class="jde-loading-range" type="range" min="-1" max="1" step="${l_}" value="${n??0}" ${u} aria-label="${o}"><input class="jde-loading-number" type="number" min="-1" max="1" step="${l_}" value="${a}" ${u} aria-label="${o}, numeric"></div>`}function TP(n,e){const r=n.eligibleSvars,t=r.map(o=>`<th class="jde-svar-cell" data-svar="${ve(o)}"><span class="jde-svar-label">${e.get(o)}</span></th>`).join(""),i=r.map(o=>`<tr><th class="jde-svar-cell" data-svar="${ve(o)}"><span class="jde-svar-label">${e.get(o)}</span></th>`+r.map(()=>"<td></td>").join("")+"</tr>").join("");return`<table class="jde-correlation-table"><thead><tr><th></th>${t}</tr></thead><tbody>${i}</tbody></table>`}function vE(n,e,r){const t=R7(e,r.eligibleSvars,r.degenerateSvars,KP(n)),i=dS(e),o=n.querySelector(".jde-status-pill");o&&(o.className=`jde-status-pill ${OP(t,e,i)}`.trimEnd(),o.textContent=DP(t,e,i)),PP(n,e),HP(n,t),xP(n,e),BP(n,e,r),UP(n,t,e,i),WP(n,e,r)}function OP(n,e,r){return n.length>0?"invalid":r?"valid":e.latents.length>0?"warning":""}function DP(n,e,r){if(n.length>0)return`${n.length} issue${n.length===1?"":"s"}`;const t=e.latents.length;return r?`${t} latent${t===1?"":"s"} · valid`:t>0?`${t} considered · independent`:"Independent"}function PP(n,e){var r;for(const t of n.querySelectorAll(".jde-loading-range, .jde-loading-number")){if(t===document.activeElement)continue;const i=t.dataset.svar;if(i===void 0)continue;const o=((r=e.latents[Number(t.dataset.latentIndex)])==null?void 0:r.loadings[i])??null;o!==null&&(t.value=gE(o))}}function HP(n,e){const r=new Set(e.filter(i=>i.field!==void 0).map(i=>`${i.latentIndex}:${i.field}`));for(const i of n.querySelectorAll(".jde-latent-text"))i.classList.toggle("jde-field-invalid",r.has(`${i.dataset.latentIndex}:${i.dataset.latentField}`));const t=new Set(e.filter(i=>i.svar!==void 0&&i.latentIndex!==void 0).map(i=>`${i.latentIndex}:${i.svar}`));for(const i of n.querySelectorAll(".jde-loading-number"))i.classList.toggle("jde-field-invalid",t.has(`${i.dataset.latentIndex}:${i.dataset.svar}`))}function xP(n,e){var r;for(const t of n.querySelectorAll(".jde-matrix-latent-name")){const i=Number(t.dataset.latentIndex),o=(r=e.latents[i])==null?void 0:r.name.trim();t.textContent=o||`Latent ${i+1}`,t.title=t.textContent}}function BP(n,e,r){const t=I7(e,r.eligibleSvars);for(const i of n.querySelectorAll(".jde-budget-fill")){const o=t[i.dataset.svar??""];o!==void 0&&(i.style.width=`${Math.min(100,Math.max(0,o*100))}%`,i.className="jde-budget-fill"+(o>1?" over":o>SP?" near":""))}for(const i of n.querySelectorAll(".jde-budget-copy")){const o=t[i.dataset.svar??""];if(o===void 0)continue;const u=o>1;i.className=`jde-budget-copy${u?" over":""}`,i.textContent=u?`${o.toFixed(3)} / 1 · over by ${(o-1).toFixed(3)}`:`${o.toFixed(3)} / 1`}}function UP(n,e,r,t){const i=n.querySelector(".jde-banner");if(i){if(e.length>0){i.className="jde-banner invalid";const o=e.length>1?` (${e.length-1} more)`:"";i.textContent=`${e[0].message}${o} The calculator keeps using your last valid joint specification until this is repaired.`;return}if(!t){i.className="jde-banner warning",i.textContent=r.latents.length>0?"Valid, and exactly independent: the latents you named are disclosed as considered, with every loading at zero.":"Valid: sampled independently.";return}i.className="jde-banner",i.textContent="Valid joint specification. Every quantity is within its loading budget."}}function WP(n,e,r){const t=n.querySelector(".jde-correlations"),i=n.querySelector(".jde-correlation-table thead tr"),o=n.querySelector(".jde-correlation-table tbody");if(t===null||i===null||o===null)return;const u=fS(e,r.eligibleSvars),a=r.eligibleSvars.map((c,s)=>r.eligibleSvars.some((l,f)=>f!==s&&u[s][f]!==0));t.hidden=a.filter(Boolean).length<2,i.querySelectorAll("th").forEach((c,s)=>{s>0&&(c.hidden=!a[s-1])}),o.querySelectorAll("tr").forEach((c,s)=>{c.hidden=!a[s],c.querySelectorAll("td").forEach((l,f)=>{var d;l.hidden=!a[f],l.textContent=zP(((d=u[s])==null?void 0:d[f])??NaN)})})}function jP(n,e,r,t,i,o){if(n.querySelector(".joint-dependence-editor")===null)return;const u=T2(e,r,i,o);if(u===null)return;const a=hE(r,t,u.eligibleSvars);for(const c of n.querySelectorAll(".jde-svar-cell")){const s=a.get(c.dataset.svar??""),l=c.querySelector(".jde-svar-label");s!==void 0&&l!==null&&(l.innerHTML=s)}mE(n,O2(e,u),u,r,t)}function mE(n,e,r,t,i){const o=n.querySelector(".jde-artifact-host");if(o===null)return;const u=C7(e,r.eligibleSvars,r.degenerateSvars);o.innerHTML=u.kind==="invalid"?'<div class="jde-artifact-pending">Preview pauses until the issues above are repaired.</div>':l2([{point:{},bounds:{},sample:{},lloads:u.lloads}],t,i).specHtml}function f_(n){const e=Number(n.dataset.latentIndex);if(!Number.isInteger(e))return null;if(n.classList.contains("jde-latent-text")){const r=n.dataset.latentField;return r!=="name"&&r!=="description"?null:{kind:"text",latentIndex:e,field:r,value:n.value}}if(n.classList.contains("jde-loading-range")||n.classList.contains("jde-loading-number")){const r=n.dataset.svar;if(r===void 0)return null;const t=n.value.trim(),i=t===""||!Number.isFinite(Number(t))?null:Number(t);return{kind:"loading",latentIndex:e,svar:r,value:i}}return null}function GP(n,e){return{latents:n.latents.map((r,t)=>t!==e.latentIndex?r:e.kind==="text"?{...r,[e.field]:e.value}:{...r,loadings:{...r.loadings,[e.svar]:e.value}})}}function VP(n){const e=n.closest("button");if(e===null)return null;if(e.classList.contains("jde-add-latent-btn"))return{kind:"add"};if(e.classList.contains("jde-zero-loadings-btn"))return{kind:"zero-all"};if(e.classList.contains("jde-remove-all-btn"))return{kind:"remove-all"};if(e.classList.contains("jde-remove-latent-btn")){const r=Number(e.dataset.latentIndex);return Number.isInteger(r)?{kind:"remove",latentIndex:r}:null}return null}function XP(n,e,r){switch(e.kind){case"add":return{latents:[...n.latents,hh(r)]};case"remove":return{latents:n.latents.filter((t,i)=>i!==e.latentIndex)};case"zero-all":return{latents:n.latents.map(t=>({...t,loadings:hh(r).loadings}))};case"remove-all":return{latents:[]}}}const YP=/<sup\b[^>]*\bid="fnref:[^"]*"[^>]*>[\s\S]*?<\/sup>/g;function bE(n){return n.replace(YP,"").replace(/<[^>]*>/g,"").trim()}function KP(n){const e={};for(const r of n.querySelectorAll("tr[data-svar-label]")){const t=r.dataset.svar;t!==void 0&&(e[t]=r.dataset.svarLabel)}return e}function gE(n){return String(n)}function zP(n){return Number.isFinite(n)?n===0?"0.000":`${n>0?"+":"−"}${Math.abs(n).toFixed(3)}`:"invalid"}function D2(n,e){return n??!!(e??!1)}function JP(n,e){return!D2(n,e)}function QP(n){return!De(n)}const _E="execution timed out",op="execution aborted";function ZP(n,e){const t=(e.workerFactory??eH)();return new Promise((i,o)=>{var l,f;let u=!1;const a=()=>{var d;u=!0,clearTimeout(s),(d=e.signal)==null||d.removeEventListener("abort",c),t.terminate()},c=()=>{u||(a(),o(new Error(op)))};if((l=e.signal)!=null&&l.aborted){t.terminate(),o(new Error(op));return}(f=e.signal)==null||f.addEventListener("abort",c);const s=setTimeout(()=>{u||(a(),o(new Error(_E)))},e.timeoutMs);t.addEventListener("message",d=>{u||(a(),i(d.data))}),t.addEventListener("error",d=>{u||(a(),o(new Error(d.message||"worker error")))}),t.postMessage(n)})}function eH(){return new Worker(new URL("/hirwebdev/assets/plaincode_eval_worker-DDiEqs08.js",import.meta.url),{type:"module"})}const lr={VISIBLE_AOPTS:"visible-aopts",TCHOICE:"tchoice",CPARAMS_SECTION:"cparams",TEXT_DEFINITIONS:"text-definitions",INTERPRETED_SYMBOL_SEMANTICS:"interpreted-symbols",DEFINED_SYMBOLS:"defined-symbols",FIXED_ASSUMPTIONS:"fixed-assumptions",CUSTOM_ASSUMPTIONS:"custom-assumptions",COMPUTED_FORMULAS:"formulas",FRAMING_ROOT:"framing-notes-root",FRAMING_EXPLAINER:"framing-notes-explainer",SRCQUOTE_EXPLAINER:"srcquote-explainer",CALCULATOR:"calculator"},nH={TEXT_DEFINITIONS:n=>A$(n),INTERPRETED_SYMBOL_SEMANTICS:n=>k$(n),DEFINED_SYMBOLS:n=>S$(n),FIXED_ASSUMPTIONS:n=>L$(n),COMPUTED_FORMULAS:n=>I$(n)},rH="DERIVED_FORMS",tH="CALCULATOR_RESULTS",yE="stats-display-control";function EE(n){return!n.hide}function iH(n){const e=new Set;for(const r of n.layout.sections.html)if("subentries"in r)for(const t of r.subentries)typeof t=="object"&&"formid"in t&&e.add(t.formid);return e}function oH(n){const e=n.config.conclusion_form,r=iH(n);return n.form.filter(t=>t.id!==e&&!r.has(t.id)&&EE(t)).map(t=>t.id)}function uH(n,e,r){let t;if(r)t={...r,unresolvedRefs:r.unresolvedRefs??new Set,footnoteCounter:r.footnoteCounter??{n:0},footnotes:r.footnotes??[],popoverLookup:r.popoverLookup??B1(n,r.refLookup)};else{const o=Y_(n),u=J_(n,Q_(n,{},"plainnum"),"plainnum"),a=u.option_value_or("show_typical_examples",!1),c=u.option_value_or("srcquotes_inlined",!1),s={};for(const l of u.get_option_bare_names())s[l]=u.option_value(l);t={jprobInstance:u,showTypical:a,srcquotesInlined:c,refLookup:o,displayOptionValues:s,unresolvedRefs:new Set,footnoteCounter:{n:0},footnotes:[],popoverLookup:B1(n,o)}}const i=[];for(const o of n.layout.sections.html)i.push(aH(o,n,t));return i.push(`<div class="footnotes" id="${i7}">`),t.footnotes&&t.footnotes.length>0&&i.push(`<ol>${o7(t.footnotes)}</ol>`),i.push("</div>"),i.push(`<div class="footnotes" id="${yp}"></div>`),{html:i.join(""),unresolvedRefs:[...t.unresolvedRefs].sort()}}function aH(n,e,r){if("chunkid"in n){const a=wE(n.chunkid,e,r,n.style);if(a==null)throw new Error("Unexpected failure of renderTextChunk to return string");return a}if("subentries"in n){if(n.delegation_id!=="CALCULATOR")throw new Error("Only expected use of this currently-hacky-structured feature is for the Calculator section (delegation_id 'CALCULATOR').");const a=lr[n.delegation_id],c=n.subentries.map(s=>sH(s,e,r,n.delegation_id));return`<section id="${a}-section"><h2 id="${a}-section-header">${n.header}</h2>${c.join("")}</section>`}const{delegation_id:t,header:i}=n,o=lr[t];if(!o)throw new Error("Expected `delegation_id` field here to be an element of DelegatedLayoutEntryId.");if((t==="FRAMING_ROOT"||t==="FRAMING_EXPLAINER")&&!e.has_framing_notes()||t==="SRCQUOTE_EXPLAINER"&&!e.has_srcquotes())return"";const u=nH[t];if(u){const a=u(r),c=i!=null?`<h2 id="${o}-section">${i}</h2>`:"";return a.trim()?c+a:""}return t==="FRAMING_EXPLAINER"||t==="SRCQUOTE_EXPLAINER"?`<div id="${o}-section"><div id="${o}-content"></div></div>`:`<section id="${o}-section"><h2 id="${o}-section-header">${i??""}</h2><div id="${o}-content"></div></section>`}function sH(n,e,r,t){if(typeof n=="string"){if(n===rH)return oH(e).map(c=>`<div id="derived-${mi(c)}" class="derived-form" data-form-id="${c}"></div>`).join("");const a=`${mi(t)}-${mi(n)}`;return n===tH?`<div id="${yE}"></div><div id="${a}"></div>`:`<div id="${a}"></div>`}if("chunkid"in n)return wE(n.chunkid,e,r,n.style)??"";const i=n.formid,o=e.form.find(a=>a.id===i);if(o&&!EE(o))throw new Error(`Layout explicitly places ${i}, but the formula is marked hide (not displayed anywhere). Remove the layout entry or drop the formula's hide flag.`);return`<div id="${`derived-${mi(i)}`}" class="derived-form" data-form-id="${i}"></div>`}function wE(n,e,r,t){const i=e.find_textchunk_defn(n);if(!i)return null;const o=Se(i,r);switch(t){case"title":return`<h1 class="arg-title">${o}</h1>`;case"subtitle":return`<p class="arg-subtitle">${o}</p>`;case"note":return`<div class="hir-loud-note">${o}</div>`;case"warning":return`<p class="arg-warning">${o}</p>`;default:return`<div class="textchunk">${o}</div>`}}function mi(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-$/,"").replace(/^-/,"")}function cH(n,e,r,t){const{html:i}=uH(e,void 0,r);n.innerHTML=i}const ar="model_effort",up={point:"point",bounds:"bounds",distr:"sample"},lH=Object.fromEntries(Object.entries(up).map(([n,e])=>[e,n])),d_={inline:!0,glyph:!1},fH="inline",dH="glyph",p_={true:!0,false:!1},h_=["probability","odds"],v_=["yours-plainnum","yours-plaincode","adhoc-plainnum","adhoc-plaincode","metho-plainnum","metho-plaincode","metho-richcode"];function pH(n,e){const r={},t=[],i=n.get("response_type");if(i!==null){const l=up[i];l!==void 0?r.inputMode=l:t.push(`response_type=${JSON.stringify(i)} invalid; expected one of: ${Object.keys(up).join(", ")}`)}mH(n.get("whose"),n.get("preset"),e,r,t);const o=n.get("preset_query_mode");o!==null&&vH(o,e.modelParamGroups,r,t);const u=n.get("trial_index");if(u!==null){const l=SE(u);l===null?t.push(`trial_index=${JSON.stringify(u)} is not a non-negative integer`):r.assumptionTrialIndex=l}const a=n.get("prob_as_odds");a!==null&&(h_.includes(a)?r.probAsOdds=a:t.push(`prob_as_odds=${JSON.stringify(a)} invalid; expected one of: ${h_.join(", ")}`));const c=n.get("show_framing");if(c!==null){const l=p_[c];l===void 0?t.push(`show_framing=${JSON.stringify(c)} invalid; expected one of: ${Object.keys(p_).join(", ")}`):r.showFramingNotes=l}const s=n.get("srcquotes_view");if(s!==null){const l=d_[s];l===void 0?t.push(`srcquotes_view=${JSON.stringify(s)} invalid; expected one of: ${Object.keys(d_).join(", ")}`):r.srcquotesInlinedOverride=l}return hH(n,e.jprobTemplate,r,t),{overrides:r,errors:t}}function hH(n,e,r,t){const i=n.getAll("calc_pin"),o=n.getAll("calc_unpin");if(i.length===0&&o.length===0)return;const u=new Set(e.get_cparam_bare_names()),a=new Set(i.filter(s=>o.includes(s)));for(const s of a)t.push(`${JSON.stringify(s)} appears in both calc_pin and calc_unpin; skipped`);const c=u.has(ar);for(const[s,l]of[[i,!0],[o,!1]]){const f=l?"calc_pin":"calc_unpin";for(const d of s)if(!a.has(d)){if(d===ar){if(c){t.push(`${f}=${ar} is ambiguous: this jprob declares a parameter by that name, which collides with the reserved model/effort axis name`);continue}r.modelEffortPinned=l;continue}if(!u.has(d)){t.push(`${f}=${JSON.stringify(d)} is not a parameter of this jprob; expected one of: ${[...u,ar].join(", ")}`);continue}(r.cparamPinned??(r.cparamPinned={}))[d]=l}}}function vH(n,e,r,t){if(!I9(n)){t.push(`preset_query_mode=${JSON.stringify(n)} invalid; expected one of: all, ${Lo.join(", ")}`);return}if(n!=="all"&&!Xp(e).includes(n)){t.push(`preset_query_mode=${JSON.stringify(n)} unavailable for current methodical data`);return}r.presetQueryModeFilter=n}function mH(n,e,r,t,i){if(n===null&&e===null)return;if(n===null){i.push(`preset=${JSON.stringify(e)} given without whose`);return}if(!v_.includes(n)){i.push(`whose=${JSON.stringify(n)} invalid; expected one of: ${v_.join(", ")}`);return}if(n.startsWith("yours-")){if(e!==null){i.push(`preset=${JSON.stringify(e)} incompatible with whose=${n} (preset is only valid for adhoc-* or metho-*)`);return}t.whose=n;return}if(e===null){i.push(`whose=${n} requires preset`);return}const o=SE(e);if(o===null){i.push(`preset=${JSON.stringify(e)} is not a non-negative integer`);return}const u=bH(n,o,r.presetData,r.modelParamGroups);u.error!==null?i.push(u.error):t.whose=u.whose}function bH(n,e,r,t){if(n==="adhoc-plainnum")return e>=r.adhocPlainnumEntries.length?{error:`preset=${e} out of range; ${r.adhocPlainnumEntries.length} adhoc-plainnum entr${r.adhocPlainnumEntries.length===1?"y":"ies"} available`}:{whose:`adhoc-plainnum:${e}`,error:null};if(n==="adhoc-plaincode")return e>=r.adhocPlaincodeEntries.length?{error:`preset=${e} out of range; ${r.adhocPlaincodeEntries.length} adhoc-plaincode entr${r.adhocPlaincodeEntries.length===1?"y":"ies"} available`}:{whose:`adhoc-plaincode:${e}`,error:null};if(e>=t.length)return{error:`preset=${e} out of range; ${t.length} methodical group${t.length===1?"":"s"} available`};const i=t[e],o=n.slice(6),u=$E(i,o);return u===null?{error:`preset=${e} (group: ${i.label}) has no ${o} result; available mode${i.availableModes.length===1?"":"s"}: ${i.availableModes.join(", ")}`}:{whose:`metho-${o}:${u}`,error:null}}function $E(n,e){return e==="plainnum"?n.plainnumIndex:e==="plaincode"?n.plaincodeIndex:n.richcodeIndex}function SE(n){if(n===""||/\D/.test(n))return null;const e=parseInt(n,10);return!Number.isInteger(e)||e<0?null:e}function gH(n,e){if(typeof window>"u")return;const r=new URLSearchParams(window.location.search),{overrides:t,errors:i}=pH(r,e);for(const o of i)console.error(`[url_view_overrides] ${o}`);if(t.inputMode!==void 0&&(n.ui.inputMode=t.inputMode),t.probAsOdds!==void 0&&(n.ui.probAsOdds=t.probAsOdds),t.assumptionTrialIndex!==void 0&&(n.ui.assumptionTrialIndex=t.assumptionTrialIndex),t.presetQueryModeFilter!==void 0&&(n.ui.presetQueryModeFilter=t.presetQueryModeFilter),t.showFramingNotes!==void 0&&(n.ui.showFramingNotes=t.showFramingNotes),t.srcquotesInlinedOverride!==void 0&&(n.ui.srcquotesInlinedOverride=t.srcquotesInlinedOverride),t.modelEffortPinned!==void 0&&(n.ui.modelEffortPinned=t.modelEffortPinned),t.cparamPinned!==void 0&&Object.assign(n.ui.cparamPinned,t.cparamPinned),t.whose!==void 0){n.ui.whose=t.whose,(t.whose==="yours-plainnum"||t.whose==="yours-plaincode")&&(n.ui.lastYoursWhose=t.whose);const o=Ze(me(t.whose).source);o==="adhoc"?n.ui.lastAdhocWhose=t.whose:o==="metho"&&(n.ui.lastMethoWhose=t.whose)}}function _H(n,e){const{ui:r,srcquotesInlined:t}=n,{jprobTemplate:i,modelParamGroups:o}=e,u=new URLSearchParams,a=[];return u.set("response_type",lH[r.inputMode]),u.set("prob_as_odds",r.probAsOdds),u.set("trial_index",String(r.assumptionTrialIndex)),u.set("preset_query_mode",r.presetQueryModeFilter),u.set("show_framing",String(r.showFramingNotes)),i.has_srcquotes()&&u.set("srcquotes_view",t?fH:dH),yH(r.whose,o,u,a),EH(r,i,u,a),{params:u,errors:a}}function yH(n,e,r,t){const{source:i,index:o}=me(n),u=Ze(i);if(u==="yours"){r.set("whose",i);return}if(u==="adhoc"){r.set("whose",i),r.set("preset",String(o));return}const a=bn(i),c=e.findIndex(s=>$E(s,a)===o);if(c===-1){t.push(`no methodical group holds the current result ${JSON.stringify(n)}; omitting whose/preset from the link`);return}r.set("whose",i),r.set("preset",String(c))}function EH(n,e,r,t){const i=bn(me(n.whose).source);if(i!=="plaincode"&&i!=="richcode")return;const o=e.get_cparam_bare_names(),u=o.includes(ar);for(const a of o)a!==ar&&r.append(n.cparamPinned[a]!==!1?"calc_pin":"calc_unpin",a);if(u){t.push(`this jprob declares a parameter named ${ar}, which collides with the reserved model/effort axis name; omitting both from the link`);return}r.append(n.modelEffortPinned?"calc_pin":"calc_unpin",ar)}function rn(n){if(typeof window>"u")return;const e=new URL(window.location.href);if(!e.searchParams.has(n))return;e.searchParams.delete(n);const r=e.searchParams.toString(),t=`${e.pathname}${r?"?"+r:""}${e.hash}`;window.history.replaceState(null,"",t)}const AE="view-url-btn",wH="url",$H="copied ✓",SH="in address bar",AH=1200,kH="sticky-bar",LH="--sticky-bar-h",IH=["framing-notes-explainer","srcquote-explainer"],RH=Object.values(lr).filter(n=>!IH.includes(n)).map(n=>`${n}-section`),CH=2;function MH(n,e){const r=e+CH;let t=null;for(const i of n)i.top>r||(t===null||i.top>t.top)&&(t=i);return t===null?null:t.id}function qH(n=document){return MH(FH(n),NH(n))}function NH(n){var t;const e=parseFloat(((t=n.defaultView)==null?void 0:t.getComputedStyle(n.documentElement).getPropertyValue(LH))??"");if(Number.isFinite(e))return e;const r=n.getElementById(kH);return r===null?0:r.getBoundingClientRect().bottom}function FH(n){const e=[];for(const r of RH){const t=n.getElementById(r);if(t===null)continue;const i=t.getBoundingClientRect();i.width===0&&i.height===0||e.push({id:r,top:i.top})}return e}function TH(n,e,r){const t=e.toString(),i=r===null?"":`#${encodeURIComponent(r)}`;return`${n.origin}${n.pathname}${t?"?"+t:""}${i}`}function OH(n,e,r=document){const{params:t,errors:i}=_H(n,e),o=qH(r);return{href:TH(new URL(r.location.href),t,o),errors:i}}function m_(n,e){n.textContent=e,setTimeout(()=>{n.textContent=wH},AH)}async function DH(n,e,r){var o;const{href:t,errors:i}=OH(e,r);for(const u of i)console.error(`[view_share_link] ${u}`);window.history.replaceState(null,"",t);try{if(!((o=navigator.clipboard)!=null&&o.writeText))throw new Error("Clipboard access is unavailable in this browser.");await navigator.clipboard.writeText(t),m_(n,$H)}catch(u){console.error("[view_share_link] copying the view link failed",u),m_(n,SH)}}const PH={point:"point",bounds:"bounds",sample:"distribution"},HH="timeline-nav",xH="jprob-selector",kE="jprob-selector-select",LE="error-console-btn";function BH(n,e,r,t){GH(n),YH(n,r),jH(e),WH(t)}function UH(n,e,r,t){const i=new Set(n.map(c=>c.aid)),o=[],u=new Set;let a=r;for(const c of n){const s=c.family;if(s===void 0){o.push({label:c.aid,value:c.aid});continue}if(u.has(s))continue;u.add(s);const l=e[s]??[];let f=c.aid;for(let d=l.length-1;d>=0;d--)if(i.has(l[d].aid)){f=l[d].aid;break}o.push({label:s,value:f}),s===t&&(a=f)}return{options:o,selectedValue:a}}function WH(n,e=zT(),r=JT()){const t=document.getElementById(xH);if(!t)return;const{options:i,selectedValue:o}=UH(e,r,n.currentAid,n.currentFamily);if(i.length<=1){t.hidden=!0,t.innerHTML="";return}t.hidden=!1;const u=i.map(a=>`<option value="${a.value}"${a.value===o?" selected":""}>${a.label}</option>`).join("");t.innerHTML=`<select id="${kE}" class="jprob-selector-select" title="Switch to another problem">${u}</select>`}function jH(n){const e=document.getElementById(HH);if(!e)return;const{prev:r,next:t,version:i}=n;if(r===void 0&&t===void 0){e.hidden=!0,e.innerHTML="";return}e.hidden=!1;const o=[];r!==void 0&&o.push(`<button class="timeline-nav-btn" data-timeline-target="${r}" title="Previous version">◀</button>`),o.push(`<span class="timeline-version">${i??""}</span>`),t!==void 0&&o.push(`<button class="timeline-nav-btn" data-timeline-target="${t}" title="Next version">▶</button>`),e.innerHTML=o.join("")}function GH(n){const e=document.getElementById("options-controls");if(!e)return;const r=e.classList.contains("options-panel-open");let i=`<button class="options-expand-btn${r?" active":""}" id="options-expand-btn">settings ${r?"▴":"▾"}</button>`;i+=`<div class="options-panel${r?" visible":""}">`,i+=zH(n),i+=`<div class="options-buttons-row"><button id="${AE}" class="g-btn" title="Copy a link to this view (and put it in the address bar)">url</button> <button id="keymap-btn" class="g-btn">keymap</button> <button id="${LE}" class="g-btn">error console</button> <button id="save-all-data-btn" class="g-btn">save all data</button> <button id="load-all-data-btn" class="g-btn">load all data</button></div>`,i+="</div>",e.innerHTML=i,r&&e.classList.add("options-panel-open")}function VH(){const n=document.getElementById("options-controls");if(!n)return;n.classList.toggle("options-panel-open");const e=n.querySelector(".options-expand-btn"),r=n.querySelector(".options-panel");if(!e||!r)return;const t=n.classList.contains("options-panel-open");e.textContent=t?"settings ▴":"settings ▾",e.classList.toggle("active",t),r.classList.toggle("visible",t)}function XH(){const n=document.getElementById("options-controls");if(!n||!n.classList.contains("options-panel-open"))return;n.classList.remove("options-panel-open");const e=n.querySelector(".options-expand-btn"),r=n.querySelector(".options-panel");e&&(e.textContent="settings ▾",e.classList.remove("active")),r&&r.classList.remove("visible")}function YH(n,e){const r=document.getElementById("response-type-toggle");r&&IE(r,n,e)}function IE(n,e,r){const t=[];for(const[i,o]of Object.entries(PH)){const u=i===e.ui.inputMode?" active":"",a=r[i]?"":" hidden";t.push(`<button class="atog-btn${u}${a}" data-mode="${i}">${o}</button>`)}n.innerHTML="<span>response type</span>"+t.join("")}const KH=new Set(["inputMode"]);function zH(n){const e=[];for(const r of _p)if(!KH.has(r.id)){if(r.type==="boolean"){const t=r.id,i=n.ui[t]?" checked":"";e.push(`<div class="options-pref-row"><label for="pref-${r.id}" class="option-label">${r.description}</label><input id="pref-${r.id}" class="option-checkbox pref-checkbox" type="checkbox" data-pref="${r.id}"${i}></div>`)}else if(r.type==="integer"){const i=pn()[r.id]??r.default;e.push(`<div class="options-pref-row"><label for="pref-${r.id}" class="option-label">${r.description}</label><input id="pref-${r.id}" class="pref-number-input" type="number" data-pref-int="${r.id}" value="${i}" min="1000" step="1000"></div>`)}}return e.join("")}const b_="keymap-popover",JH=70,QH=620,ZH=16;function ex(){return et}function nx(n){const e=window.innerWidth,r=window.innerHeight,t=Math.min(QH,Math.round(e*JH/100)),i=r-2*ZH;n.style.width=`${t}px`,n.style.maxHeight=`${i}px`;const o=Math.min(n.offsetHeight,i);n.style.left=`${Math.round((e-t)/2)}px`,n.style.top=`${Math.round((r-o)/2)}px`}function bi(n,e){n.classList.toggle("keymap-row-invalid",e!=="");const r=n.querySelector(".keymap-error");r&&(r.textContent=e)}function rx(n){const e=nt();n.innerHTML="";for(const r of ex()){const t=document.createElement("div");t.className="keymap-row";const i=document.createElement("label");i.className="keymap-label",i.htmlFor=`keymap-input-${r.id}`,i.textContent=r.description;const o=document.createElement("input");o.id=`keymap-input-${r.id}`,o.className="keymap-input",o.type="text",o.maxLength=1,o.autocomplete="off",o.spellcheck=!1,o.value=e[r.id]??"",o.dataset.shortcutId=r.id,o.setAttribute("aria-label",`${r.description} shortcut key`);const u=document.createElement("div");u.className="keymap-error",o.addEventListener("input",()=>{const a=o.dataset.shortcutId,c=o2(o.value);if(!c.ok){bi(t,c.error??"Invalid shortcut key.");return}const s=my(a,c.key);if(s){const f=et.find(d=>d.id===s);bi(t,`Already assigned to "${(f==null?void 0:f.description)??s}".`);return}const l=WT(a,c.key);if(!l.ok){bi(t,l.error??"Invalid shortcut key.");return}o.value=l.key,bi(t,"")}),t.appendChild(i),t.appendChild(o),t.appendChild(u),n.appendChild(t)}}function tx(){var o;(o=document.getElementById(b_))==null||o.remove();const n=document.createElement("div");n.id=b_,n.className="keymap-popover",n.tabIndex=-1;const e=document.createElement("button");e.className="help-widget-close",e.type="button",e.textContent="×",e.setAttribute("aria-label","Close");const r=document.createElement("h3");r.className="keymap-title",r.textContent="Keymap";const t=document.createElement("div");t.className="keymap-body",rx(t);function i(){n.remove()}e.addEventListener("click",i),n.addEventListener("keydown",u=>{u.key==="Escape"&&i()}),n.appendChild(e),n.appendChild(r),n.appendChild(t),document.body.appendChild(n),nx(n),n.focus()}const ap="stats-display-select",ix=["probability","odds"],ox="Mean, median, and credible interval probabilities displayed as odds",ux="Computed probabilities displayed as odds";function ax(n){const e=bn(me(n.ui.whose).source);return e==="plaincode"||e==="richcode"||n.ui.inputMode==="sample"}function sx(n){return n?Object.values(n).some(e=>e.typeHighlevel==="probability"):!1}function cx(n,e,r){if(!sx(r)){n.innerHTML="";return}const t=e.ui.probAsOdds,i=ix.map(a=>`<option value="${a}"${a===t?" selected":""}>${a}</option>`).join(""),o=ax(e)?ox:ux,u=t==="odds"?`<p class="stats-display-odds-note"><strong>${o}</strong></p>`:"";n.innerHTML=`<div class="stats-display-row"><label for="${ap}">stats display</label><select id="${ap}">${i}</select></div>`+u}const lx="srcquote-explainer",q1="srcquote-pinned";function fx(){return Ki[lx]}function dx(n,e,r){n.innerHTML=`<div class="srcquote-explainer">${Se(fx(),r)}</div>`}function N1(n,e){const r=n.querySelector(`.${c7}`),t=n.querySelector(`.${wp}`);r&&(r.hidden=!e),t&&t.setAttribute("aria-expanded",String(e))}function F1(n){return n instanceof Element?n.closest(`.${s7}`):null}function px(n,e){return e instanceof Node&&n.contains(e)}function hx(){const n=t=>{const i=F1(t.target);i&&N1(i,!0)},e=t=>{const i=F1(t.target);i&&(px(i,t.relatedTarget)||i.classList.contains(q1)||N1(i,!1))},r=t=>{const i=t.target,o=i instanceof Element?i.closest(`.${wp}`):null;if(!o)return;const u=F1(o);if(!u)return;const a=!u.classList.contains(q1);u.classList.toggle(q1,a),N1(u,a)};return document.addEventListener("mouseover",n),document.addEventListener("mouseout",e),document.addEventListener("focusin",n),document.addEventListener("focusout",e),document.addEventListener("click",r),()=>{document.removeEventListener("mouseover",n),document.removeEventListener("mouseout",e),document.removeEventListener("focusin",n),document.removeEventListener("focusout",e),document.removeEventListener("click",r)}}function g_(n,e,r){if(r==="Bool"&&e.type==="checkbox")return e.checked===!0;const t=gp(n,e.value);if(typeof t=="object")throw new Error(`Invalid scalar control parser use for ${n.id}`);return t}function vx(n,e){const r=e.map(t=>{if(t.type!=="checkbox")throw new Error(`Invalid MultiStringFromSet control for ${n.id}: expected checkbox`);return t.checked===!0?t.value:void 0}).filter(t=>t!==void 0);return gp(n,r)}function P2(n,e){let r=`<span class="cparam-or-aopt-name">${ne(n)}</span>`;return e.longname&&(r+=` <span class="cparam-or-aopt-longname">(${ne(e.longname)})</span>`),r}function ro(n,e,r,t,i){const o=`${t.dataAttribute}="${ve(n)}"`;if(i==="StringFromSet"){if(!Array.isArray(e.allowed_values))throw new Error(`StringFromSet option ${e.id} is missing allowed_values`);const s=e.allowed_values.map(l=>{const f=String(l),d=f===String(r)?" selected":"";return`<option value="${ve(f)}"${d}>${ne(f)}</option>`}).join("");return`<select class="${t.selectClass}" ${o}>${s}</select>`}if(i==="Number")return`<input class="${t.inputClass}" type="number" ${o} value="${ve(String(r))}">`;if(i==="Bool"){const s=r?" checked":"";return`<input class="${t.checkboxClass??t.inputClass}" type="checkbox" ${o}${s}>`}if(i==="FreeString")return`<input class="${[t.inputClass,t.textInputClass].filter(Boolean).join(" ")}" type="text" ${o} value="${ve(String(r))}">`;if(!Array.isArray(e.allowed_values))throw new Error(`MultiStringFromSet option ${e.id} is missing allowed_values`);if(!Array.isArray(r))throw new Error(`MultiStringFromSet option ${e.id} has a non-array current value`);const u=new Set(r),a=t.checkboxClass??t.inputClass,c=e.allowed_values.map(s=>{if(typeof s!="string")throw new Error(`MultiStringFromSet option ${e.id} has a non-string allowed value`);const l=u.has(s)?" checked":"";return`<label><input class="${a}" type="checkbox" ${o} value="${ve(s)}"${l}> <span>${ne(s)}</span></label>`}).join("");return`<span class="${t.checkboxGroupClass??""}">${c}</span>`}const mx="Parameters",bx="Fixed Parameters",gx="Free Parameters";function _x(n,e,r,t,i,o,u){const a=n.filter(D1);if(a.length===0)return{headerText:"",bodyHtml:""};const{source:c}=me(e),s=bn(c)!=="plainnum",l=Ze(c)==="yours",f=s?gx:l?mx:bx,d=t??ne;let p="";if(!s&&i&&o){const v=yx(a,r);v!==null&&!i(v)&&(p=`<p class="arg-warning">${d(o)}</p>`)}const h=[];for(const v of a){const m=Te(v.id),b=d(v.defn),g=(u==null?void 0:u(v))??{atStart:"",atEnd:""},_=r[m]??v.default_value;if(typeof _=="object")throw new Error(`Cparam ${v.id} has a non-scalar current value`);let y=P2(m,v);s||(l?y+=" = "+Ex(m,v,_):y+=` <span class="cparam-or-aopt-value">= ${ne(String(_))}</span>`),h.push(`<div class="cparam-or-aopt" id="opt-${m}"><div class="cparam-or-aopt-header">${y}</div><div class="cparam-or-aopt-defn">${g.atStart}${b}${g.atEnd}</div></div>`)}return{headerText:f,bodyHtml:p+h.join("")}}function yx(n,e){const r={};for(const t of n){const i=Te(t.id),o=e[i]??t.default_value,u=Number(o);if(!Number.isFinite(u))return null;r[i]=u}return r}function Ex(n,e,r){if(Array.isArray(e.allowed_values)||typeof e.default_value=="number"){const t=Array.isArray(e.allowed_values)?"StringFromSet":"Number";return ro(n,e,r,{dataAttribute:"data-cparam-body",selectClass:"cparam-body-select",inputClass:"cparam-body-input"},t)}return`<span class="cparam-or-aopt-value">${ne(String(r))}</span>`}function wx(n,e,r,t,i,o){const{headerText:u,bodyHtml:a}=_x(e.get_cparams(),t.ui.whose,r.displayOptionValues,l=>Se(l,r),i,o,l=>kn(l.srcquotes,r)),c=document.getElementById("cparams-section");if(!a){n.innerHTML="",c&&(c.hidden=!0);return}c&&(c.hidden=!1);const s=document.getElementById("cparams-section-header");s&&(s.textContent=u),n.innerHTML=a}const $x=["VISIBLE_AOPTS"],Sx={dataAttribute:"data-aopt-body",selectClass:"aopt-body-select",inputClass:"aopt-body-input",textInputClass:"aopt-body-text-input",checkboxClass:"aopt-body-checkbox",checkboxGroupClass:"aopt-body-checkbox-group"};function Ax(n,e,r,t=ne,i){const o=De(e),u=[];for(const a of n){if(!hp(a))continue;const c=Te(a.id),s=r[c]??a.default_value,l=(i==null?void 0:i(a))??{atStart:"",atEnd:""};let f=P2(c,a);const d=a.input_type==="MultiStringFromSet"?1:2,p=Array.isArray(a.allowed_values)&&a.allowed_values.length>=d;if(o&&(p||a.allowed_values===void 0))f+=" = "+ro(c,a,s,Sx,a.input_type);else{const v=Array.isArray(s)?s.join(", "):String(s);f+=` <span class="cparam-or-aopt-value">= ${ne(v)}</span>`}u.push(`<div class="cparam-or-aopt" id="opt-${ve(c)}"><div class="cparam-or-aopt-header">${f}</div><div class="cparam-or-aopt-defn">${l.atStart}${t(a.defn)}${l.atEnd}</div></div>`)}return u.join("")}function kx(n,e,r,t,i){const o=Ax(r.get_aopts(),i.ui.whose,t.displayOptionValues,a=>Se(a,t),a=>kn(a.srcquotes,t)),u=document.getElementById(`${lr[e]}-section`);if(!o){n.innerHTML="",u&&(u.hidden=!0);return}u&&(u.hidden=!1),n.innerHTML=o}const Lx=2,Ix="(no recorded choice)",RE="data-tchoice-recorded",__={dataAttribute:"data-tchoice-body",selectClass:"tchoice-body-select",inputClass:"tchoice-body-input",checkboxClass:"tchoice-body-checkbox"};function Rx(n){return n.input_type==="Bool"||n.allowed_values.length>=Lx}function y_(n,e,r){var i;const t=(i=n[e])==null?void 0:i[r];return t===void 0?"":String(t)}function CE(n){return n===""?Ix:n}function Cx(n,e,r){const t=e.map((u,a)=>`data-trial-${a}="${ve(y_(e,a,n))}"`).join(" "),i=y_(e,r,n);return`<span class="tchoice-recorded${i===""?" tchoice-recorded-empty":""}" ${RE}="${ve(n)}" ${t}>${ne(CE(i))}</span>`}function Mx(n,e,r,t={}){const{resultChoicesPerTrial:i,activeTrial:o=0,processDefn:u=ne,renderSrcquotes:a}=t,c=[],s=(i==null?void 0:i.length)??0;for(const l of n){const f=wt(l.id),d=(a==null?void 0:a(l))??{atStart:"",atEnd:""};let p=P2(f,l);const h=H_(l),m=Or(l)&&Rx(l)||h,b=e&&m,g=!e&&m&&i!==void 0&&i.some(y=>y[f]!==void 0);let _="";if(b&&h){const y=r[f]??"";p+=" = "+ro(f,l,y,__,"Number")}else if(b&&Or(l)){const y=r[f]??l.default_value;p+=" = "+ro(f,l,y,__,l.input_type)}else g?(p+=" = "+Cx(f,i,o),s>1&&(_=w2(s,o))):Or(l)&&(_=`<div class="tchoice-allowed">One of: ${l.allowed_values.map(E=>ne(String(E))).join(", ")}</div>`);c.push(`<div class="cparam-or-aopt" id="tchoice-${ve(f)}"><div class="cparam-or-aopt-header">${p}</div><div class="cparam-or-aopt-defn">${d.atStart}${u(l.defn)}${d.atEnd}</div>`+_+"</div>")}return c.join("")}function qx(n){return(bn(me(n.ui.whose).source)==="plaincode"?n.yoursCodeRecord:n.yoursRecord).trial_choices??{}}function Nx(n,e,r,t,i){const o=e.get_tchoice_decls(),u=De(t.ui.whose),a=E2((i==null?void 0:i.length)??0,t.ui.assumptionTrialIndex),c=Mx(o,u,qx(t),{resultChoicesPerTrial:u?void 0:i,activeTrial:a,processDefn:l=>Se(l,r),renderSrcquotes:l=>kn(l.srcquotes,r)}),s=document.getElementById(`${lr.TCHOICE}-section`);if(!c){n.innerHTML="",s&&(s.hidden=!0);return}s&&(s.hidden=!1),n.innerHTML=c}function Fx(n,e){for(const r of n.querySelectorAll(".assumption-trial-btn"))r.classList.toggle("active",r.dataset.trial===String(e));for(const r of n.querySelectorAll(`[${RE}]`)){const t=r.getAttribute(`data-trial-${e}`)??"";r.textContent=CE(t),r.classList.toggle("tchoice-recorded-empty",t==="")}}function Tx(n,e){if(n.input_type==="Bool"){if(e.type!=="checkbox")throw new Error(`Bool tchoice ${n.id} expected a checkbox control`);return e.checked===!0}if(n.input_type==="Number"){const r=Number(e.value);if(!Number.isFinite(r))throw new Error(`Invalid numeric tchoice value for ${n.id}: ${e.value}`);return r}return e.value}function Ox(n,e){if(e.value.trim()==="")return null;const r=Number(e.value);if(!Number.isFinite(r))return null;const[t]=fr([n]);return Ai(t,r)?r:null}const Dx=["yours","adhoc","metho"];function Px(n,e,r){const t=e.adhocPlainnumEntries.length>0||e.adhocPlaincodeEntries.length>0,i=r.length>0,o=["yours"];if(t&&o.push("adhoc"),i&&o.push("metho"),o.length<2)return null;const u=Ze(me(n.whose).source);if(!Dx.includes(u))throw new Error(`nextWhoseForModeCycle: unrecognized whose ${JSON.stringify(n.whose)}`);const a=o.indexOf(u),c=o[(a+1)%o.length];return c==="yours"?n.lastYoursWhose:c==="adhoc"?E_(n.lastAdhocWhose,"adhoc",e)?n.lastAdhocWhose:Hx(e):E_(n.lastMethoWhose,"metho",e)?n.lastMethoWhose:R9(r,n.presetQueryModeFilter)}function Hx(n){for(const e of f7)if(d7(n,e).length>0)return`adhoc-${e}:0`;throw new Error("firstAdhocWhose: adhoc mode reached with no adhoc entries")}function E_(n,e,r){return!n||Ze(me(n).source)!==e?!1:Je(n,r)!==null}function xx(n,e){for(const r of n.querySelectorAll(`.${x1}`)){const t=r.dataset.bareid,i=r.dataset.mname;if(t===void 0||i===void 0)throw new Error("Toggleable symbol ref is missing data-bareid or data-mname.");r.textContent=e?i:t}}function ir(n,e){n.classList.add(e)}function or(n,e){n.classList.remove(e)}function w_(n,e){return n.classList.contains(e)}const ME="littlefoot__tooltip";function qE(n,e){var r,t;return((t=(r=n.ownerDocument)===null||r===void 0?void 0:r.defaultView)!==null&&t!==void 0?t:window).getComputedStyle(n).getPropertyValue(e)||""}function H2(n,e){const r=Number.parseFloat(qE(n,e));return Number.isNaN(r)?0:r}function sp(n){const e=H2(n,"margin-left"),r=n.offsetWidth-e;return(n.getBoundingClientRect().left+r/2)/window.innerWidth}function Bx(n,e,r){const[t,i]=(function(o,u){const a=H2(u,"margin-top"),c=2*a+u.offsetHeight,s=o.getBoundingClientRect().top+o.offsetHeight/2,l=window.innerHeight-s;return l>=c||l>=s?["below",l-a-15]:["above",s-a-15]})(e,n);if(r!==t){or(n,"is-"+r),ir(n,"is-"+t);const o=100*sp(e)+"%",u=t==="above"?"100%":"0";n.style.transformOrigin=o+" "+u}return[t,i]}const ft="is-active",dt="is-changing",$_="is-scrollable";function Ux({id:n,button:e,content:r,host:t,popover:i,wrapper:o}){let u=0,a="above";const c=()=>document.body.contains(i);return{id:n,activate:s=>{e.setAttribute("aria-expanded","true"),ir(e,dt),ir(e,ft),e.insertAdjacentElement("afterend",i),i.style.maxWidth=document.body.clientWidth+"px",u=(function(l){const f=qE(l,"max-height");if(f===""||f==="none")return Number.POSITIVE_INFINITY;const d=Number.parseFloat(f);return Number.isNaN(d)?Number.POSITIVE_INFINITY:Math.round(d)})(r),s==null||s(i,e)},dismiss:s=>{e.setAttribute("aria-expanded","false"),ir(e,dt),or(e,ft),or(i,ft),s==null||s(i,e)},isActive:()=>w_(e,ft),isReady:()=>!w_(e,dt),ready:()=>{ir(i,ft),or(e,dt)},remove:()=>{i.remove(),or(e,dt)},reposition:()=>{if(c()){const[s,l]=Bx(i,e,a);a=s,r.style.maxHeight=Math.min(u,l)+"px",i.offsetHeight<r.scrollHeight?(ir(i,$_),r.setAttribute("tabindex","0")):(or(i,$_),r.removeAttribute("tabindex"))}},resize:()=>{c()&&(i.style.left=(function(s,l){const f=s.offsetWidth;return-sp(l)*f+H2(l,"margin-left")+l.offsetWidth/2})(r,e)+"px",o.style.maxWidth=r.offsetWidth+"px",(function(s,l){const f=s.querySelector("."+ME);f&&(f.style.left=100*sp(l)+"%")})(i,e))},destroy:()=>t.remove()}}function cp(n,e=0){let r,t=0;return function(...i){const o=Date.now(),u=Math.max(0,t+e-o);if(u===0)return t=o,void n.apply(this,i);r!==void 0&&window.clearTimeout(r),r=window.setTimeout((()=>{t=Date.now(),r=void 0,n.apply(this,i)}),u)}}const S_="is-fully-scrolled",Wx=n=>e=>{const r=e.currentTarget,t=-e.deltaY;t>0&&or(n,S_),r&&t<=0&&t<r.clientHeight+r.scrollTop-r.scrollHeight&&ir(n,S_)},NE="littlefoot__content",FE="littlefoot__wrapper",to="littlefoot--print",TE=(...n)=>n.forEach((e=>{ir(e,to)}));function Et(n,e){return Array.from(n.querySelectorAll(e))}function A_(n,e){return n.querySelector("."+e)||n.firstElementChild||n}function lp(n){const e=document.createElement("div");e.innerHTML=n;const r=e.firstElementChild;return r.remove(),r}function jx(n){return n!==void 0}function OE(n){const e=n.parentElement,r=Et(e,":scope > :not(."+to+")"),t=r.filter((i=>i.tagName==="HR"));r.length===t.length&&(TE(...t.concat(e)),OE(e))}function DE(n,e){const r=n.parentElement;n.remove(),r&&r!==e&&!r.innerHTML.replace(/(\[\]|&nbsp;|\s)/g,"")&&DE(r,e)}function Gx([n,e,r],t){const i=lp(r.outerHTML);Et(i,'[href$="#'+n+'"]').forEach((u=>{DE(u,i)}));const o=i.innerHTML.trim();return[e,r,{id:String(t+1),number:t+1,reference:"lf-"+n,content:o.startsWith("<")?o:"<p>"+o+"</p>"}]}function k_(n){return e=>n.replace(/<%=?\s*(\w+?)\s*%>/g,((r,t)=>{var i;return String((i=e[t])!==null&&i!==void 0?i:"")}))}function Vx(n,e){const r=k_(n),t=k_(e);return([i,o])=>{const u=o.id,a=lp('<span class="littlefoot">'+r(o)+"</span>"),c=a.firstElementChild;c.setAttribute("aria-expanded","false"),c.dataset.footnoteButton="",c.dataset.footnoteId=u;const s=lp(t(o));s.dataset.footnotePopover="",s.dataset.footnoteId=u;const l=A_(s,FE),f=A_(s,NE);return(function(d,p){d.addEventListener("wheel",cp(Wx(p),16))})(f,s),i.insertAdjacentElement("beforebegin",a),{id:u,button:c,host:a,popover:s,content:f,wrapper:l}}}function Xx({allowDuplicates:n,anchorParentSelector:e,anchorPattern:r,buttonTemplate:t,contentTemplate:i,footnoteSelector:o,numberResetSelector:u,scope:a}){const c=(function(s,l,f){return Et(s,f+' a[href*="#"]').filter((d=>(d.href+d.rel).match(l)))})(document,r,a).map((function(s,l,f,d){const p=[];return h=>{var v;const m=h.href.split("#")[1];if(!m)return;const b=(v=Et(s,"#"+window.CSS.escape(m)).find((_=>l||!p.includes(_))))===null||v===void 0?void 0:v.closest(d);if(!b)return;p.push(b);const g=h.closest(f)||h;return[g.id||h.id,g,b]}})(document,n,e,o)).filter(jx).map(Gx).map(u?(function(s){let l=0,f=null;return([d,p,h])=>{const v=d.closest(s);return l=f===v?l+1:1,f=v,[d,p,Object.assign(Object.assign({},h),{number:l})]}})(u):s=>s).map((([s,l,f])=>(TE(s,l),OE(l),[s,f]))).map(Vx(t,i)).map(Ux);return{footnotes:c,unmount(){c.forEach((s=>{s.destroy()})),Et(document,"."+to).forEach((s=>{or(s,to)}))}}}const fp="[data-footnote-id]",dp=(n,e)=>n.target.closest(e),PE=n=>n==null?void 0:n.dataset.footnoteId,L_=n=>e=>{e.preventDefault();const r=dp(e,fp),t=PE(r);t&&n(t)},ht=document.addEventListener,I_=window.addEventListener,R_=(n,e,r,t)=>ht(n,(i=>{const o=i.target;o!=null&&o.closest(e)&&r.call(o,i)}),t),Yx={activateDelay:100,activateOnHover:!1,allowDuplicates:!0,allowMultiple:!1,anchorParentSelector:"sup",anchorPattern:/(fn|footnote|note)[:\-_\d]/gi,dismissDelay:100,dismissOnUnhover:!1,dismissOnDocumentTouch:!0,footnoteSelector:"li",hoverDelay:250,numberResetSelector:"",scope:"",contentTemplate:`<aside class="littlefoot__popover" id="fncontent:<% id %>"><div class="${FE}"><div class="${NE}"><% content %></div></div><div class="${ME}"></div></aside>`,buttonTemplate:'<button class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>"><svg role="img" aria-labelledby="title-<% reference %>" viewbox="0 0 31 6" preserveAspectRatio="xMidYMid"><title id="title-<% reference %>">Footnote <% number %></title><circle r="3" cx="3" cy="3" fill="white"></circle><circle r="3" cx="15" cy="3" fill="white"></circle><circle r="3" cx="27" cy="3" fill="white"></circle></svg></button>'};function Kx(n={}){const e=Object.assign(Object.assign({},Yx),n),r=(function({footnotes:i,unmount:o},u){let a;const c=d=>p=>{p.isReady()&&(p.dismiss(u.dismissCallback),setTimeout(p.remove,d))},s=d=>p=>{u.allowMultiple||i.filter((h=>h.id!==p.id)).forEach(c(u.dismissDelay)),p.isReady()&&(p.activate(u.activateCallback),p.reposition(),p.resize(),setTimeout(p.ready,d))},l=d=>p=>{const h=i.find((v=>v.id===p));h&&d(h)},f=()=>i.forEach(c(u.dismissDelay));return{activate:(d,p)=>l(s(p))(d),dismiss:(d,p)=>l(c(p))(d),dismissAll:f,touchOutside:()=>{u.dismissOnDocumentTouch&&f()},repositionAll:()=>i.forEach((d=>{d.reposition()})),resizeAll:()=>i.forEach((d=>{d.resize()})),toggle:l((d=>d.isActive()?c(u.dismissDelay)(d):s(u.activateDelay)(d))),hover:l((d=>{a=d.id,u.activateOnHover&&!d.isActive()&&s(u.hoverDelay)(d)})),unhover:l((d=>{d.id===a&&(a=null),u.dismissOnUnhover&&setTimeout((()=>i.filter((p=>p.id!==a)).forEach(c(u.dismissDelay))),u.hoverDelay)})),unmount:o}})(Xx(e),e),t=(function(i){const o=d=>{const p=dp(d,"[data-footnote-button]"),h=PE(p);h?(d.preventDefault(),i.toggle(h)):dp(d,"[data-footnote-popover]")||i.touchOutside()},u=cp(i.repositionAll,16),a=cp(i.resizeAll,16),c=L_(i.hover),s=L_(i.unhover),l=new AbortController,f={signal:l.signal};return ht("touchend",o,f),ht("click",o,f),ht("keyup",(d=>{d.keyCode!==27&&d.key!=="Escape"&&d.key!=="Esc"||i.dismissAll()}),f),ht("gestureend",u,f),I_("scroll",u,f),I_("resize",a,f),R_("mouseover",fp,c,f),R_("mouseout",fp,s,f),()=>{l.abort()}})(r);return{activate(i,o=e.activateDelay){r.activate(i,o)},dismiss(i,o=e.dismissDelay){i===void 0?r.dismissAll():r.dismiss(i,o)},unmount(){t(),r.unmount()},getSetting:i=>e[i],updateSetting(i,o){e[i]=o}}}function zx(n,e){const r=document.getElementById(n);if(!r)throw new Error(`Viewport anchor #${n} not found before render`);const t=r.getBoundingClientRect().top,i=document.activeElement===r;e();const o=document.getElementById(n);if(!o)throw new Error(`Viewport anchor #${n} was not replaced during render`);i&&o.focus({preventScroll:!0});const a=o.getBoundingClientRect().top-t;a!==0&&window.scrollBy(0,a)}function Jx(n){const e=n.getWhose();try{n.renderCurrentView();return}catch(r){if(!n.shouldRecover(e))throw r;try{n.switchToSafeYours(e),n.renderSafeYoursView()}catch(t){throw new AggregateError([r,t],`View ${JSON.stringify(e)} failed, and the fail-safe Yours view also failed`)}n.recovered(e,r)}}let P,q,de,Ln,tn,ln,mn,Ur,Tt,T1=null,Si=0,Fn=null;const C_="calculator-section",M_="yours-plainnum";function DB(n){aS(),HE(n),lB(),dB(),VT(rB()),hx(),window.addEventListener("resize",VE),hw(sn)}function HE(n){Si++,Fn==null||Fn.abort(),Fn=null,VM(),QM(),sq(),zM(),P=Ew(n.jpdefn),q=rS(P);const e=n.adhocPresets??[],r=M$(e);de={adhocPresets:e,adhocPlainnumEntries:r.plainnum,adhocPlaincodeEntries:r.plaincode,plainnumResults:F$(n.plainnumResults??[]),plaincodeResults:T$(n.plaincodeResults??[]),richcodeResults:O$(n.richcodeResults??[])},Ln=D$(de),tn=Gw(n.jpdefn),ln=n.formRegistry,mn=n.barrierRegistry??{},Ur=n.cparamComboFilter,Tt=n.cparamFilterDescription,gH(q,xE()),q.ui.whose=V2(q.ui.whose),eB(),sn()}function xE(){return{jprobTemplate:P,presetData:de,modelParamGroups:Ln}}function q_(){rn("calc_pin"),rn("calc_unpin")}const Qx={showFramingNotes:"show_framing"};function Zx(){return{ui:q.ui,srcquotesInlined:D2(q.ui.srcquotesInlinedOverride,x2().srcquotes_inlined)}}function eB(){const n=P.layout.sections.html.find(e=>"chunkid"in e&&e.style==="title");if(n&&"chunkid"in n){const e=P.find_textchunk_defn(n.chunkid);e&&(document.title=e.replace(kw,"$1").replace(Lw,""))}}const nB=Object.assign({"../../data/covid0/index.ts":()=>an(()=>import("./index-Dj1hAjF2.js"),[]),"../../data/eggsFH1/index.ts":()=>an(()=>import("./index-BH6VzBGI.js"),[]),"../../data/eggsFH2/index.ts":()=>an(()=>import("./index-De-qMCo3.js"),[]),"../../data/lhcFXH1/index.ts":()=>an(()=>import("./index-DI-RxyFO.js"),[]),"../../data/lhcFXH_SolMax/index.ts":()=>an(()=>import("./index-BnWrWIVd.js"),[]),"../../data/lhcFXH_SolMax_Ultra/index.ts":()=>an(()=>import("./index-kumUQUnU.js"),[]),"../../data/mcovidA/index.ts":()=>an(()=>import("./index-BRicf-QN.js"),__vite__mapDeps([0,1])),"../../data/mcovidA2/index.ts":()=>an(()=>import("./index-Bc1wW7B-.js"),__vite__mapDeps([2,1])),"../../data/mcovidB10/index.ts":()=>an(()=>import("./index-dlSO4A9J.js"),__vite__mapDeps([3,1])),"../../data/mcovidB11/index.ts":()=>an(()=>import("./index-BHTD4kQB.js"),__vite__mapDeps([4,1])),"../../data/mcovidB6/index.ts":()=>an(()=>import("./index-DTa1Op3H.js"),__vite__mapDeps([5,1])),"../../data/mcovidB7/index.ts":()=>an(()=>import("./index-CwxdzyU8.js"),__vite__mapDeps([6,1])),"../../data/mcovidB8/index.ts":()=>an(()=>import("./index-CUWAIAiW.js"),__vite__mapDeps([7,1])),"../../data/mcovidB9/index.ts":()=>an(()=>import("./index-CTCCNKrg.js"),__vite__mapDeps([8,1]))});function N_(n){return`../../data/${n}/index.ts`}async function F_(n){const e=nB[N_(n)];if(!e)throw new Error(`swapJprob: no manifest module for aid '${n}' (looked for ${N_(n)}).`);const r=await e(),t=window.location.pathname.replace(/[^/]+\.html$/,`${n}.html`);history.pushState(null,"",t),HE(r.manifest)}function rB(){return{toggle_mnames:()=>{q.ui.symbolMnames=!q.ui.symbolMnames,Ne(P.config,q.ui),St("symbolMnames",q.ui.symbolMnames),xx(document,q.ui.symbolMnames)},goto_calculator:()=>{const n=document.getElementById(C_);if(!n)throw new Error(`#${C_} not found.`);n.scrollIntoView({block:"start"})},goto_top:()=>{window.scrollTo({top:0})},switch_whose_mode:()=>{const n=Px({whose:q.ui.whose,lastYoursWhose:q.ui.lastYoursWhose,lastAdhocWhose:q.ui.lastAdhocWhose,lastMethoWhose:q.ui.lastMethoWhose,presetQueryModeFilter:q.ui.presetQueryModeFilter},de,Ln);if(n===null)return;const e=S7(V2(n),P.has_cparams());e!==q.ui.whose&&Tn(e)},toggle_srcquotes_inlined:()=>{P.has_srcquotes()&&(q.ui.srcquotesInlinedOverride=JP(q.ui.srcquotesInlinedOverride,x2().srcquotes_inlined),Ne(P.config,q.ui),rn("srcquotes_view"),sn())},toggle_framing_notes:()=>{q.ui.showFramingNotes=!q.ui.showFramingNotes,Ne(P.config,q.ui),St("showFramingNotes",q.ui.showFramingNotes),rn("show_framing"),sn()}}}function x2(){if(De(q.ui.whose))return q.optionValues;const n=Je(q.ui.whose,de);if(!n)return q.optionValues;const e={...q.optionValues};for(const r of P.get_aopts()){const t=Te(r.id);t in n.aopts&&(e[t]=n.aopts[t])}if("cparam_values"in n&&n.cparam_values)for(const r of P.get_cparams()){const t=Te(r.id);t in n.cparam_values&&(e[t]=n.cparam_values[t])}return e}function BE(){const n=x2(),e=n.show_typical_examples,r=D2(q.ui.srcquotesInlinedOverride,n.srcquotes_inlined),t=Y_(P,{symbolMnames:q.ui.symbolMnames}),i=B1(P,t),{source:o}=me(q.ui.whose),u=bn(o);return{jprobInstance:J_(P,Q_(P,n,u),u),showTypical:e,refLookup:t,srcquotesInlined:r,showFramingNotes:q.ui.showFramingNotes,displayOptionValues:n,showExampleClassification:q.ui.showExampleClassification,showBareIds:QP(q.ui.whose),exampleFoldState:q.ui.exampleFoldState,footnoteCounter:{n:0},footnotes:[],popoverLookup:i,popoverAllRefs:q.ui.popoverAllRefs}}function it(){return{...BE(),footnoteIdNamespace:n$}}function sn(){B2(UE)}function B2(n){Jx({getWhose:()=>q.ui.whose,shouldRecover:e=>!De(e)||tB(),renderCurrentView:()=>{B$(q.ui.whose,de),n()},switchToSafeYours:iB,renderSafeYoursView:UE,recovered:oB})}function tB(){return de.adhocPresets.length>0||de.plainnumResults.length>0||de.plaincodeResults.length>0||de.richcodeResults.length>0}function iB(n){const e=me(n).source;q.ui.whose=M_,q.ui.lastYoursWhose=M_,q.ui.modelEffortSweepScope=null,Ze(e)==="adhoc"&&(q.ui.lastAdhocWhose=""),Ze(e)==="metho"&&(q.ui.lastMethoWhose=""),de={adhocPresets:[],adhocPlainnumEntries:[],adhocPlaincodeEntries:[],plainnumResults:[],plaincodeResults:[],richcodeResults:[]},Ln=[]}function oB(n,e){try{Ne(P.config,q.ui)}catch(t){Yo("Persisting the fail-safe Yours selection",t)}for(const t of["whose","preset"])try{rn(t)}catch(i){Yo(`Clearing the failed ${t} URL override`,i)}const r=De(n)?"Rendering Yours with loaded result data":`Rendering chosen result ${JSON.stringify(n)}`;Yo(`${r}; switched safely to Yours and disabled loaded result data until reload`,e)}function UE(){EB(q.ui.whose);const n=BE(),e=it(),r=document.getElementById("main-content");cH(r,P,n);const t=v7(q.ui.whose,Je(q.ui.whose,de));BH(q,QT(P.aid)??{},t,{currentAid:P.aid,currentFamily:gy(P.aid)}),aB(n,e,t),fB(r),VE(),pp(i7,n.footnotes),pp(yp,e.footnotes),WE(r)}function pp(n,e){const r=document.getElementById(n);if(!r)return;const t=document.getElementById("main-content"),i=e??[],o=t?i$(i,t):i;r.innerHTML=o.length>0?`<ol>${o7(o)}</ol>`:""}function ni(n){pp(yp,n.footnotes),uB()}function U2(n){const e=document.querySelector("#calculator-calculator-input .calc-labels");e&&(e.innerHTML=Zy(P,n))}function WE(n){T1&&T1.unmount(),T1=Kx({scope:"#main-content",allowMultiple:q.ui.persistentPopovers,dismissOnDocumentTouch:!q.ui.persistentPopovers,buttonTemplate:`<button class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>">
  <svg role="img" aria-labelledby="title-<% reference %>" viewbox="0 0 24 6" preserveAspectRatio="xMidYMid">
    <title id="title-<% reference %>">Footnote <% number %></title>
    <circle r="2.5" cx="3" cy="3" fill="white"></circle>
    <circle r="2.5" cx="12" cy="3" fill="white"></circle>
    <circle r="2.5" cx="21" cy="3" fill="white"></circle>
  </svg>
</button>`});for(const e of n.querySelectorAll(".ref-popover[data-fnref]")){const r=e.nextElementSibling;r!=null&&r.classList.contains("littlefoot")&&r.classList.add("lf-popover-ref")}}function uB(){const n=document.getElementById("main-content");n&&WE(n)}function aB(n,e,r){for(const v of $x){const m=document.getElementById(`${lr[v]}-content`);m&&kx(m,v,P,n,q)}const t=document.getElementById(`${lr.TCHOICE}-content`);t&&Nx(t,P,n,q,_B(q,de));const i=document.getElementById("cparams-content");i&&wx(i,P,n,q,Ur,Tt);const o=document.getElementById("calculator-whose-toggle");if(o){Eq(o,P,de,q,Ln),o.prepend(Zt(()=>uO(P,q.ui.whose)));const v=document.createElement("div");v.id="calc-response-type-toggle",o.appendChild(v),IE(v,q,r)}const u=document.getElementById("calculator-calculator-input"),a=document.getElementById("calculator-calculator-results");u&&a&&(k2(u,a,P,e,q,de,ln,mn,Ur,Tt),t2(a,G2(q,de)),i2(a,j2(q,de),P.get_svar_bare_names()));const c=document.getElementById(yE);c&&cx(c,q,ln),ot(e);const s=document.getElementById("framing-notes-root-content");s&&wD(s,P,n,q.ui),ED(P,n,q.ui);const l=document.getElementById("framing-notes-explainer-content");l&&$D(l,n);const f=document.getElementById("srcquote-explainer-content");f&&dx(f,P,n);const d=document.getElementById("custom-assumptions-content");d&&kD(d,P,n,q,de);const p=document.getElementById("calculator-yours-saved-list");p&&F2(p,P,q),ri(e);const h=document.getElementById("calculator-yours-code-input");if(h){const v=h7(q.ui.whose,de);q.ui.whose==="yours-plaincode"?c_(h,P,q.yoursCodeRecord,"edit"):v?c_(h,P,v,"view"):h.innerHTML=""}}function ot(n){const e=document.querySelectorAll(".derived-form");if(e.length!==0)for(const r of e){const t=r.dataset.formId;t&&PD(r,t,P,n,q,ln,mn,de)}}const Bo="calculator-joint-dependence-editor";function ri(n){const e=document.getElementById(Bo);e&&IP(e,q,P,n,ln,mn)}function jE(){const n=document.getElementById(Bo);if(!n)return null;const e=T2(q,P,ln,mn);return e===null?null:{container:n,editorCtx:e,draft:O2(q,e)}}function sB(n,e){C2(q,P,tn,e,n.editorCtx.eligibleSvars,n.editorCtx.degenerateSvars),vE(n.container,e,n.editorCtx)}function GE(n){const e=it();U2(e);const r=document.getElementById("calculator-calculator-results");if(r&&Po(r,P,e,q,de,ln,mn),ot(e),n)ri(e);else{const t=document.getElementById(Bo);t&&jP(t,q,P,e,ln,mn)}W2(),ni(e)}function cB(n){var t;const e=jE();if(!e)return;const r=XP(e.draft,n,e.editorCtx.eligibleSvars);C2(q,P,tn,r,e.editorCtx.eligibleSvars,e.editorCtx.degenerateSvars),GE(!0),n.kind==="add"&&((t=document.querySelector(`#${Bo} .jde-latent-card:last-child [data-latent-field="name"]`))==null||t.focus({preventScroll:!0}))}function lB(){const n=document.getElementById("sticky-help");n&&n.appendChild(Zt(()=>iO(P)))}function VE(){const n=document.getElementById("sticky-bar");n&&document.documentElement.style.setProperty("--sticky-bar-h",`${n.offsetHeight+4}px`)}function fB(n){const e=document.getElementById("global-example-controls");e&&(e.hidden=n.querySelector(".examples")===null)}function dB(){var e,r,t,i,o,u,a,c;(e=document.getElementById("main-content"))==null||e.addEventListener("click",s=>{const l=s.target.closest(".ref-popover");if(!l)return;const f=l.nextElementSibling;if(!(f!=null&&f.classList.contains("littlefoot")))return;const d=f.querySelector(".littlefoot__button");d&&d.click()}),document.addEventListener("click",s=>{if(!s.target.closest("#response-type-toggle, #calc-response-type-toggle"))return;const f=s.target.closest("[data-mode]");if(!f)return;const d=f.dataset.mode;d!==q.ui.inputMode&&(q.ui.inputMode=d,Ne(P.config,q.ui),rn("response_type"),sn())}),document.addEventListener("change",s=>{const l=s.target;if(l.id!==ap)return;const f=l.value;f!==q.ui.probAsOdds&&(q.ui.probAsOdds=f,Ne(P.config,q.ui),rn("prob_as_odds"),sn())}),document.addEventListener("click",s=>{const l=s.target.closest(".timeline-nav-btn");if(!l)return;const f=l.dataset.timelineTarget;f&&F_(f)}),document.addEventListener("change",s=>{const l=s.target;if(l.id!==kE)return;const f=l.value;f&&f!==P.aid&&F_(f)}),(r=document.getElementById("global-example-controls"))==null||r.addEventListener("click",s=>{const l=s.target.closest("[data-action]");if(!l)return;const f=l.dataset.action;NB(f)}),(t=document.getElementById("options-controls"))==null||t.addEventListener("change",s=>{const l=s.target;if(l.dataset.pref){const f=l.dataset.pref,d=l.checked;q.ui[f]=d,Ne(P.config,q.ui),St(f,d);const p=Qx[f];p!==void 0&&rn(p),sn();return}if(l.dataset.prefInt){const f=l.dataset.prefInt,d=parseInt(l.value,10);!isNaN(d)&&d>0&&(St(f,d),sn());return}}),(i=document.getElementById("options-controls"))==null||i.addEventListener("click",s=>{const l=s.target;if(l.id==="options-expand-btn"||l.closest(".options-expand-btn")){VH();return}if(l.id===AE){DH(l,Zx(),xE());return}if(l.id==="keymap-btn"){tx();return}if(l.id===LE){vw();return}if(l.id==="save-all-data-btn"){MB();return}if(l.id==="load-all-data-btn"){qB();return}}),document.addEventListener("click",s=>{const l=s.target,f=document.getElementById("options-controls");f&&!f.contains(l)&&XH()}),(o=document.getElementById("main-content"))==null||o.addEventListener("input",s=>{var d;const l=s.target;if(l.closest('.yours-code-input[data-variant="view"]'))return;if(l.classList.contains("code-body-input")){M2(q,P,tn,l.value);return}if(l.classList.contains("code-reasoning-input")){const p=l,h=p.dataset.svar;if(!h)return;tP(q,P,tn,h,p.value);return}if(l.classList.contains("code-misc-input")){iP(q,P,tn,l.value);return}const f=f_(l);if(f!==null){const p=jE();p&&sB(p,GP(p.draft,f));return}if(l.classList.contains("cparam-slider")){const p=l,h=p.dataset.cparam;if(!h)return;const v=JSON.parse(p.dataset.values??"[]"),m=parseInt(p.value),b=v[m];if(b===void 0)return;q.ui.cparamValues[h]=b,Ne(P.config,q.ui),O1();const g=document.getElementById("custom-assumptions-content");g&&LD(g,P,q,de);return}if(l.classList.contains("model-effort-slider")){const p=l,h=JSON.parse(p.dataset.keys??"[]"),v=parseInt(p.value),m=h[v];if(!m)return;const{source:b,index:g}=me(q.ui.whose);if(b!=="metho-plaincode"&&b!=="metho-richcode")return;const _=b==="metho-plaincode"?de.plaincodeResults:de.richcodeResults,y=_[g];if(!y)return;const E=v2(y,q.ui.modelEffortSweepScope),I=m2(y,_,q.ui.modelEffortSweepScope),A=ei(I,m),C=A===null?-1:_.indexOf(A);if(C<0)return;const k=`${b}:${C}`;k!==q.ui.whose&&(q.ui.modelEffortSweepScope=E,Tn(k,!0),(d=document.querySelector("#calculator-calculator-input .model-effort-slider"))==null||d.focus({preventScroll:!0}));return}});const n=document.getElementById("main-content");n&&rP(n,{persistCalcTextarea:vB,recomputeAfterCalcTextarea:mB,persistAssumptionCard:bB,recomputeAfterAssumptionCard:gB}),(u=document.getElementById("main-content"))==null||u.addEventListener("click",s=>{const l=s.target;if(l.classList.contains("code-sample-btn")){$B();return}const f=l.closest(".lloads-copy-to-yours-btn");if(f){IB(f);return}if(l.classList.contains("copy-to-yours-btn")){SB();return}const d=l.closest(".jde-summary");if(d){const A=d.closest("details");A&&(q.ui.jointDependenceEditorOpen=!A.open,Ne(P.config,q.ui));return}const p=VP(l);if(p!==null){cB(p);return}const h=l.closest(".yours-saved-delete");if(h){s.stopPropagation();const A=h.dataset.key,C=h.dataset.kind;A&&wB(A,C??"plainnum");return}const v=l.closest(".yours-saved-row");if(v){const A=v.dataset.key,C=v.dataset.kind;A&&T_(A,C??"plainnum");return}const m=l.closest(".whose-btn");if(m){const A=m.dataset.whose;A&&A!==q.ui.whose&&Tn(A);return}const b=l.closest(".mode-radio-btn");if(b){const A=b.dataset.whose;if(A&&A!==q.ui.whose){Tn(A);return}const C=b.dataset.mode;if(C){const k=Yp(q.ui.whose,Ln);if(k){const S=C9(k.group,C);S&&S!==q.ui.whose&&Tn(S)}}return}const g=l.closest(".ex-btn");if(g){RB(g);return}const _=l.closest(".framing-fold-btn");if(_){CB(_);return}const y=l.closest(".assumption-trial-btn");if(y){const A=parseInt(y.dataset.trial??"0");q.ui.assumptionTrialIndex=A,Ne(P.config,q.ui),rn("trial_index");const C=document.getElementById("custom-assumptions-content");C&&RD(C,A,fr(P.svar_entries().map(S=>S.decl)));const k=document.getElementById(`${lr.TCHOICE}-content`);k&&Fx(k,A);return}const E=l.closest(`.${ep}`);if(E){const A=E.dataset.mcPoolToken;(A===void 0||!KM(A))&&console.warn(`MC accumulate: unknown pool token ${JSON.stringify(A)}; re-rendering without accumulating`),pt();return}const I=l.closest(".sweep-mode-btn");if(I){q.ui.codeSweepMode=I.dataset.sweepMode,Ne(P.config,q.ui),pt();return}}),(a=document.getElementById("main-content"))==null||a.addEventListener("keydown",s=>{if(s.key!=="Enter"&&s.key!==" ")return;const l=s.target,f=l.closest(".yours-saved-row");if(!f||l.closest(".yours-saved-delete"))return;s.preventDefault();const d=f.dataset.key,p=f.dataset.kind;d&&T_(d,p??"plainnum")}),(c=document.getElementById("main-content"))==null||c.addEventListener("change",s=>{const l=s.target;if(f_(l)!==null){GE(!1);return}if(l.dataset.aoptBody){const d=l.dataset.aoptBody,p=l,h=P.get_aopt(d);let v;if(h.input_type==="MultiStringFromSet"){const m=l.closest(".cparam-or-aopt");if(m===null)throw new Error(`MultiStringFromSet control for ${d} is outside an option row`);const b=[...m.querySelectorAll("input[data-aopt-body]")].filter(g=>g.dataset.aoptBody===d);if(b.length===0)throw new Error(`MultiStringFromSet option ${d} has no checkbox controls`);v=vx(h,b)}else v=g_(h,p,h.input_type);d==="srcquotes_inlined"&&q.ui.srcquotesInlinedOverride!==null&&(q.ui.srcquotesInlinedOverride=null,Ne(P.config,q.ui),rn("srcquotes_view")),q=dh(q,P,d,v),sn();return}if(l.dataset.cparamBody){const d=l.dataset.cparamBody,p=P.get_cparam(d),h=g_(p,l,Array.isArray(p.allowed_values)?"StringFromSet":"Number");q=dh(q,P,d,h),sn();return}if(l.dataset.tchoiceBody){const d=l.dataset.tchoiceBody,p=P.get_tchoice(d),h=bn(me(q.ui.whose).source);if(h!=="plainnum"&&h!=="plaincode")throw new Error(`tchoice edit fired in unexpected query mode "${h}"`);if(H_(p)){const m=Ox(p,l);m!==null&&s_(q,P,tn,h,d,m);return}if(!Or(p))throw new Error(`tchoice "${d}" has unrecognized response_kind`);const v=Tx(p,l);s_(q,P,tn,h,d,v);return}if(l.id==="preset-query-mode-filter"){const d=l.value;if(!I9(d))return;q.ui.presetQueryModeFilter=d;const p=V2(q.ui.whose);if(rn("preset_query_mode"),p!==q.ui.whose){Tn(p);return}Ne(P.config,q.ui),sn();return}const f=l.closest(".whose-select");if(f){let d=f.value;if(d.startsWith("group:")){const p=parseInt(d.slice(6)),h=Ln[p];if(!h)return;const v=yq(h,q.ui.presetQueryModeFilter,Ln);if(!v)return;d=v}if(d&&d!==q.ui.whose){if(!f.id)throw new Error("Whose-result select must have an id for viewport anchoring");zx(f.id,()=>{Tn(d)})}return}if(l.classList.contains("code-plot-target-kind-radio")){const d=l.value;if(d!=="formula"&&d!=="raw_response")return;q.ui.codePlotTargetKind=d,Ne(P.config,q.ui),pt();return}if(l.classList.contains("code-plot-formula-select")){q.ui.codePlotTargetKind="formula",q.ui.codePlotFormulaId=l.value,Ne(P.config,q.ui),pt();return}if(l.classList.contains("code-plot-raw-response-select")){q.ui.codePlotTargetKind="raw_response",q.ui.codePlotRawResponseName=l.value,Ne(P.config,q.ui),pt();return}if(l.classList.contains("cparam-pin-checkbox")){const d=l.dataset.cparam;if(!d)return;q.ui.cparamPinned[d]=l.checked,Ne(P.config,q.ui),q_(),O1();return}if(l.classList.contains("model-effort-pin-checkbox")){q.ui.modelEffortPinned=l.checked,Ne(P.config,q.ui),q_(),O1();return}})}function pB(){var e;const n=document.querySelector(".calc-textarea");if(n&&document.activeElement!==n){const r=n.dataset.group;r&&(n.value=((e=q.yoursRecord.raw_input)==null?void 0:e[r])??"")}}function hB(){const n=document.getElementById("custom-assumptions-content");n&&qD(n,q,fr(P.svar_entries().map(e=>e.decl)))}function W2(){const n=document.getElementById("calculator-yours-saved-list");n&&F2(n,P,q)}function vB(n){const e=n.dataset.group;if(!e)return;const r=e==="sample"?n.value.split(`
`).map(t=>Ky(t)).join(`
`):n.value;R2(q,P,tn,e,r)}function mB(){const n=it();U2(n);const e=document.getElementById("calculator-calculator-results");e&&Po(e,P,n,q,de,ln,mn),ot(n),ri(n),hB(),W2(),ni(n)}function bB(n){const e=n.dataset.paramIndex,r=n.dataset.group;if(e==null||!r)return;const t=P.svar_entries().length,i=ND(q,parseInt(e),n.value,t);R2(q,P,tn,r,i)}function gB(n){pB(),W2();const e=it();U2(e);const r=document.getElementById("calculator-calculator-results");r&&Po(r,P,e,q,de,ln,mn),ot(e),ri(e);const t=document.getElementById("custom-assumptions-content");t&&(S2(t,fr(P.svar_entries().map(i=>i.decl))),Jy(t)),ni(e)}function j2(n,e){if(!e)return[];const{source:r}=me(n.ui.whose);if(r!=="adhoc-plainnum"&&r!=="metho-plainnum")return[];const t=Je(n.ui.whose,e);return t?t.trials:[]}function _B(n,e){if(!e||De(n.ui.whose))return;const r=Je(n.ui.whose,e);if(r)return bn(me(n.ui.whose).source)==="plainnum"?r.trials.map(t=>t.trial_choices??{}):(r.trial_metadata??[]).map(t=>t.trial_choices??{})}function G2(n,e){var r;if(e)return(r=U$(n.ui.whose,e))==null?void 0:r.meta}function pt(){B2(yB)}function yB(){const n=it(),e=document.getElementById("calculator-calculator-input"),r=document.getElementById("calculator-calculator-results");e&&r&&(k2(e,r,P,n,q,de,ln,mn,Ur,Tt),t2(r,G2(q,de)),i2(r,j2(q,de),P.get_svar_bare_names())),ot(n),ri(n),ni(n)}function O1(){B2(()=>{const n=it(),e=document.getElementById("calculator-calculator-input"),r=document.getElementById("calculator-calculator-results");e&&r&&(DD(e,r,P,n,q,de,ln,mn,Ur,Tt),t2(r,G2(q,de)),i2(r,j2(q,de),P.get_svar_bare_names())),ot(n),ni(n)})}function Tn(n,e=!1){q.ui.whose=n,e||(q.ui.modelEffortSweepScope=null),(n==="yours-plainnum"||n==="yours-plaincode")&&(q.ui.lastYoursWhose=n);const r=Ze(me(n).source);r==="adhoc"?q.ui.lastAdhocWhose=n:r==="metho"&&(q.ui.lastMethoWhose=n),Ne(P.config,q.ui),rn("whose"),rn("preset"),sn()}function V2(n){const e=Yp(n,Ln);if(!e)return n;const r=Io(q.ui.presetQueryModeFilter,Ln);return r==="all"?n:Ro(e.group,r)?C9(e.group,r)??n:R9(Ln,r)??n}function EB(n){if(!(De(n)||ag(n,de,q.ui.inputMode))){for(const e of["sample","bounds","point"])if(ag(n,de,e)){q.ui.inputMode=e;return}}}function wB(n,e){if(e==="plaincode"){const t=kp(P.aid).find(o=>o.codeOptionDictKey===n);if(!t)return;const i=lE(P,t.record);if(!confirm(`Delete saved estimation?
${i}`))return;V$(P.aid,n)}else{const t=q2(P.aid).find(o=>o.plainnumOptionDictKey===n);if(!t)return;const i=cE(P,t.record)||"(default options)";if(!confirm(`Delete saved estimation?
${i}`))return;oP(P.aid,n)}const r=document.getElementById("calculator-yours-saved-list");r&&F2(r,P,q)}function T_(n,e){if(e==="plaincode"){const r=kp(P.aid).find(t=>t.codeOptionDictKey===n);if(!r)return;q=sP(q,P,n,r.record)}else{const r=q2(P.aid).find(t=>t.plainnumOptionDictKey===n);if(!r)return;q=aP(q,P,n,r.record)}sn()}async function $B(){const n=Si,e=document.getElementById("calculator-yours-code-input"),r=e==null?void 0:e.querySelector(".code-error-area"),t=e==null?void 0:e.querySelector(".code-status");r&&(r.innerHTML=""),t&&(t.textContent="Running…");const i=e==null?void 0:e.querySelector(".code-body-input"),o=i?i.value:q.yoursCodeRecord.raw_code_input;i&&o!==q.yoursCodeRecord.raw_code_input&&M2(q,P,tn,o);const{names:u,combinations:a}=Pw(P.get_cparams(),Ur),c=wP(P.svar_decls()),s=pn();try{new Function(...u,o)}catch(b){t&&(t.textContent=""),r&&(r.textContent=`Syntax error: ${b.message}`);return}Fn==null||Fn.abort();const l=new AbortController;Fn=l;let f;try{f=await ZP({source:o,cparamNames:u,combinations:a,expectedSvars:P.get_svar_bare_names(),formulaSvars:O_(ln,P.get_svar_bare_names()),hasExpectationBarrier:Object.keys(mn).length>0,paramRanges:c},{timeoutMs:s.plaincodeEvalTimeoutMs,signal:l.signal})}catch(b){if(n!==Si||b.message===op)return;if(t&&(t.textContent=""),r){const g=b.message;r.textContent=g===_E?`Timed out after ${s.plaincodeEvalTimeoutMs}ms. Possible infinite loop — check your code.`:`Worker error: ${g}`}return}finally{Fn===l&&(Fn=null)}if(n!==Si)return;if(f.compileError){t&&(t.textContent=""),r&&(r.textContent=`Compile error: ${f.compileError}`);return}const d=f.wellformed.map(b=>{const g={point:b.point,bounds:b.bounds,sample:b.sample};return b.lloads!==void 0&&(g.lloads=b.lloads),{cparams:b.cparams,trials:[g],precomputed:{}}}),p=q.yoursCodeRecord;p.verified_code_input=o,p.cparam_names=u,p.cparam_combos=d,p.count=1,p.timestamp=new Date().toISOString(),Ht(P,tn,q.codeOptionDictKey,p),q.ui.whose!=="yours-plaincode"&&(q.ui.whose="yours-plaincode",Ne(P.config,q.ui),rn("whose"),rn("preset")),q.ui.lastYoursWhose="yours-plaincode",sn();const h=document.getElementById("calculator-yours-code-input"),v=h==null?void 0:h.querySelector(".code-status"),m=h==null?void 0:h.querySelector(".code-error-area");if(v&&(v.textContent=""),m&&f.malformed.length>0){const b=f.malformed.slice(0,3).map(g=>`${JSON.stringify(g.cparams)}: ${g.error}`).join(`
`);m.textContent=`${f.wellformed.length}/${f.wellformed.length+f.malformed.length} combinations succeeded. First failures:
${b}`}}function SB(){const{source:n}=me(q.ui.whose);if(n==="adhoc-plaincode"){AB();return}if(n==="adhoc-plainnum"){LB();return}throw new Error(`Copy to Yours clicked outside an adhoc entry view (whose=${JSON.stringify(q.ui.whose)})`)}function AB(){const n=h7(q.ui.whose,de);if(!n)throw new Error(`Copy to Yours clicked outside an adhoc-plaincode view (whose=${JSON.stringify(q.ui.whose)})`);confirm(`Copy this entry's code into your Yours editor?
Your current Yours-plaincode code will be overwritten.`)&&(M2(q,P,tn,n.raw_code_input),Tn("yours-plaincode"))}const kB={point:"point",bounds:"bounds",sample:"distribution"};function LB(){const n=Je(q.ui.whose,de),e=n==null?void 0:n.trials[0];if(!e)throw new Error(`Copy to Yours clicked without a viewable adhoc-plainnum trial (whose=${JSON.stringify(q.ui.whose)})`);const r=P.svar_entries().map(u=>u.bareName),t=m7(e,r);if(t.length===0)throw new Error("Copy to Yours clicked for an entry with no complete response group");const i=t.map(u=>kB[u]).join(" + ");if(confirm(`Copy this entry's ${i} estimates into your Yours inputs?
Your current Yours ${i} input${t.length>1?"s":""} will be overwritten.`)){for(const u of t)R2(q,P,tn,u,W$(e,u,r));t.includes(q.ui.inputMode)||(q.ui.inputMode=t.includes("sample")?"sample":t.includes("bounds")?"bounds":"point"),Tn("yours-plainnum")}}function IB(n){const e=n.dataset.lloadsSpec;if(e===void 0)throw new Error("Joint-dependence Copy to Yours button carries no specification");const r=JSON.parse(e),t=pE(q,P,ln,mn);if(t===null)throw new Error("Joint-dependence Copy to Yours clicked on a jprob with no joint-dependence box");const i=so(r,t.eligibleSvars);if(i!==null)throw new Error(`Disclosed joint-dependence specification is not valid here: ${i}`);confirm(`Copy this joint-dependence specification into your Yours inputs?
Your current Yours latents and loadings will be overwritten.`)&&(C2(q,P,tn,L7(r,t.eligibleSvars),t.eligibleSvars,t.degenerateSvars),q.ui.inputMode="sample",q.ui.jointDependenceEditorOpen=!0,Tn("yours-plainnum"))}function RB(n){const e=n.dataset.isym,r=n.dataset.type;if(!e||!r)return;n.classList.toggle("active");const t=n.closest(".isym-card");if(!t)return;const i=t.querySelector(`.examples.${r}`);i&&i.classList.toggle("visible"),q.ui.exampleFoldState=Z$(q.ui.exampleFoldState,e,r),Ne(P.config,q.ui)}function CB(n){const e=n.dataset.framingAnchor,r=n.dataset.framingId;if(!e||!r)return;n.classList.toggle("active");const t=n.closest(".framingnote");t&&(t.classList.toggle("visible"),q.ui.framingFoldState[e]||(q.ui.framingFoldState[e]={}),q.ui.framingFoldState[e][r]=t.classList.contains("visible"),Ne(P.config,q.ui))}function MB(){const n=oS(),e=JSON.stringify(n,null,2),r=new Blob([e],{type:"application/json"}),t=URL.createObjectURL(r),i=document.createElement("a"),o=new Date().toISOString().slice(0,10);i.href=t,i.download=`${P.config.localStorage_prefix}-state-${o}.json`,i.click(),URL.revokeObjectURL(t)}function qB(){const n=document.createElement("input");n.type="file",n.accept=".json",n.addEventListener("change",()=>{var r;const e=(r=n.files)==null?void 0:r[0];e&&e.text().then(t=>{let i;try{i=JSON.parse(t)}catch(o){alert(`Invalid JSON: ${o}`);return}if(!i||typeof i!="object"){alert("Expected a JSON object");return}uS(i),window.location.reload()})}),n.click()}function NB(n){const e=document.querySelectorAll(".examples"),r=document.querySelectorAll(".ex-btn");switch(n){case"open":e.forEach(t=>t.classList.add("visible")),r.forEach(t=>t.classList.add("active"));break;case"close":e.forEach(t=>t.classList.remove("visible")),r.forEach(t=>t.classList.remove("active"));break;case"peek":e.forEach(t=>{t.setAttribute("data-was-visible",t.classList.contains("visible")?"1":"0"),t.classList.add("visible")}),r.forEach(t=>{t.setAttribute("data-was-active",t.classList.contains("active")?"1":"0"),t.classList.add("active")});break;case"unpeek":e.forEach(t=>{t.getAttribute("data-was-visible")==="0"&&t.classList.remove("visible")}),r.forEach(t=>{t.getAttribute("data-was-active")==="0"&&t.classList.remove("active")});break}}export{DB as initApp,F_ as swapJprob,fB as syncGlobalExampleControlsVisibility};
