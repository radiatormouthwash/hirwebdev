const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-_QS2r6Z_.js","assets/form_types-BSE-4If2.js","assets/index-H4AmFyxy.js","assets/index-7chFl3FY.js","assets/index-vh6nPuAP.js","assets/index-CyX5Ik3Y.js","assets/index-B9bl5E9z.js","assets/index-DwppGuas.js"])))=>i.map(i=>d[i]);
var PL=Object.defineProperty;var FL=(e,n,t)=>n in e?PL(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var qe=(e,n,t)=>FL(e,typeof n!="symbol"?n+"":n,t);import{P as DL,b as li,a as xL,f as G7,c as V7}from"./form_types-BSE-4If2.js";import{_ as Ye,s as BL,a as HL,r as ia}from"./app_bootstrap-CjC6xqSA.js";const cr={lo:0,hi:1,loClosed:!0,hiClosed:!0};function co(e,n){return!(e.lo!==null&&(e.loClosed?n<e.lo:n<=e.lo)||e.hi!==null&&(e.hiClosed?n>e.hi:n>=e.hi))}function lo(e){const n=e.loClosed&&e.lo!==null?"[":"(",t=e.hiClosed&&e.hi!==null?"]":")";return`${n}${e.lo??"-inf"}, ${e.hi??"inf"}${t}`}const UL={closed_real_interval:[!0,!0],left_open_real_interval:[!1,!0],right_open_real_interval:[!0,!1],open_real_interval:[!1,!1]};function W7(e){var i;const[n,t]=UL[e.type_mathlevel]??[!0,!0],r=((i=e.type_detail)==null?void 0:i.range)??[0,1];return{lo:r[0],hi:r[1],loClosed:n,hiClosed:t}}function ut(e){return e.map(W7)}function j7(e){return Object.fromEntries(e.map(n=>[n.bareName,W7(n.decl)]))}const GL=["aopt:","cparam:"];function Le(e){for(const n of GL)if(e.startsWith(n))return e.slice(n.length);return e}function kt(e){return e.startsWith("cparam:")}function Th(e){return!kt(e.id)}function fo(e){return kt(e.id)}function Qo(e){const n=e[0];if(n===void 0)throw new Error("cparam allowed_values must be a non-empty list");if(typeof n=="boolean")throw new Error(`cparam allowed_values must not contain booleans (got ${n}); a two-valued qualitative switch is an aopt, not a cparam`);return typeof n=="string"?"string":"number"}const po="tchoice:";function Vr(e){return e.startsWith(po)?e.slice(po.length):e}function zt(e){return e.response_kind==="enum"}function X7(e){return e.response_kind==="real"}const ho="svar:",Kp="estimatorInstruct",VL="flabels_enabled",ev="framing_POVs_enabled";function Y7(e){const n=new Set(e),t=[VL,ev].filter(r=>n.has(r));if(t.length>1)throw new Error(`A jprob may declare only one of ${t.join(", ")}; '${ev}' is the deprecated spelling, kept only by jprobs with archived methodical trial results`);return t[0]??null}function K7(e,n){if(!Array.isArray(e)||!e.every(t=>typeof t=="string"))throw new Error(`${n} must be a list of strings, got ${JSON.stringify(e)}`);return[...e]}function J7(e,n){return!e.limit_reporting_to||e.limit_reporting_to.includes(n)}function z7(e,n){if(!Array.isArray(n)||n.length!==3||n[0]!=="eq"||typeof n[1]!="string")throw new Error(`Formula ${e} must have an equality s-expression with a string LHS`);return n[1]}function Z7(e){if(e.includes("{")||e.includes("}"))throw new Error(`Unexpected brace in sexpr reference leaf: ${e}`);if(e.startsWith(ho))return`expr:${e.slice(ho.length)}`;if(!e.startsWith("expr:"))throw new Error(`Unexpected expression reference ${JSON.stringify(e)}; expected expr:* or svar:*`);return e}function Q7(e){return e.startsWith(ho)?e.slice(ho.length):e}const nv="ax:";function Wr(e){return e.startsWith(nv)?e.slice(nv.length):e}function WL(e){if(e.simplifying&&e.derived)throw new Error(`Axiom "${e.id}" is flagged both simplifying and derived`);return e.simplifying?"simplifying":e.derived?"derived":"ordinary"}const tv="form:";function eu(e){return e.startsWith(tv)?e.slice(tv.length):e}const rv="textchunk:",iv="textdefn:";class ey{constructor(n){qe(this,"_data");qe(this,"aid");qe(this,"options");qe(this,"cparam_combo_filter");qe(this,"config");qe(this,"layout");qe(this,"svar_list");qe(this,"svar");qe(this,"tchoice");qe(this,"textchunk");qe(this,"display");qe(this,"isym");qe(this,"ax");qe(this,"expr");qe(this,"form");qe(this,"definedSym");qe(this,"textdefn");qe(this,"framing");qe(this,"srcquote");this._data=n,this.aid=n.aid,this.options=n.options,this.cparam_combo_filter=n.cparam_combo_filter,this.config=n.config,this.layout=n.layout,this.svar_list=n.svar_list,this.svar=n.svar,this.tchoice=n.tchoice??[],this.textchunk=n.textchunk,this.display=n.display,this.isym=n.isym,this.ax=n.ax,this.expr=n.expr,this.form=n.form,this.definedSym=n.definedSym,this.textdefn=n.textdefn,this.framing=n.framing??[],this.srcquote=n.srcquote??[]}_get_data(){return this._data}get_options(){return this.options}get_aopts(){return this.options.filter(Th)}get_cparams(){return this.options.filter(fo)}has_cparams(){return this.options.some(fo)}get_option(n){const t=this.options.find(r=>Le(r.id)===n);if(!t)throw new Error(`No option named "${n}"`);return t}get_aopt(n){const t=this.get_aopts().find(r=>Le(r.id)===n);if(!t)throw new Error(`No aopt named "${n}"`);return t}get_cparam(n){const t=this.find_cparam(n);if(!t)throw new Error(`No cparam named "${n}"`);return t}find_cparam(n){return this.get_cparams().find(t=>Le(t.id)===n)}cparam_value_kind(n){return Qo(this.get_cparam(n).allowed_values)}get_option_bare_names(){return this.options.map(n=>Le(n.id))}get_aopt_bare_names(){return this.get_aopts().map(n=>Le(n.id))}get_cparam_bare_names(){return this.get_cparams().map(n=>Le(n.id))}get_option_ids(){return this.options.map(n=>n.id)}get_aopt_ids(){return this.get_aopts().map(n=>n.id)}get_cparam_ids(){return this.get_cparams().map(n=>n.id)}get_tchoice_decls(){return this.tchoice}get_tchoice_bare_names(){return new Set(this.tchoice.map(n=>Vr(n.id)))}get_tchoice(n){const t=n.startsWith(po)?n:`${po}${n}`,r=this.tchoice.find(i=>i.id===t);if(r===void 0)throw new Error(`No tchoice named "${n}"`);return r}get_tchoice_default(n){const t=this.get_tchoice(n);if(!zt(t))throw new Error(`tchoice "${n}" is not an enum kind; it has no default_value`);return t.default_value}get_enum_tchoice_defaults(){const n={};for(const t of this.tchoice)zt(t)&&(n[Vr(t.id)]=t.default_value);return n}get_textchunks(){return this.textchunk}find_textchunk(n){const t=this.strip_textchunk_prefix(n);return this.textchunk.find(r=>this.strip_textchunk_prefix(r.id)===t)}get_textchunk(n){const t=this.find_textchunk(n);if(!t)throw new Error(`No textchunk named "${n}"`);return t}find_textchunk_defn(n){var t;return(t=this.find_textchunk(n))==null?void 0:t.defn}get_textchunk_defn(n){return this.get_textchunk(n).defn}strip_textchunk_prefix(n){return n.startsWith(rv)?n.slice(rv.length):n}get_textdefn_entries(){return this.textdefn.map(n=>{const t=n.aliases??[];return{bareName:this.strip_textdefn_prefix(n.id),id:n.id,defn:n.defn,aliases:t,displayTerm:t[0]??n.id}})}find_textdefn(n){const t=this.strip_textdefn_prefix(n);return this.textdefn.find(r=>this.strip_textdefn_prefix(r.id)===t)}get_textdefn(n){const t=this.find_textdefn(n);if(!t)throw new Error(`No textdefn named "${n}"`);return t}get_textdefns(){return this.textdefn}strip_textdefn_prefix(n){return n.startsWith(iv)?n.slice(iv.length):n}get_svar_bare_names(){return this.svar_list}svar_decls(){return this.svar}get_svar(n){const t=n.startsWith("svar:")?n:`svar:${n}`,r=this.svar.find(i=>i.id===t);if(r===void 0)throw new Error(`No svar named "${n}"`);return r}get_svar_gloss_defn(n){return this.get_svar(n).defn}svar_entries(){const n=new Map;for(const t of this.svar)n.set(Q7(t.id),t);return this.svar_list.map(t=>{const r=n.get(t);if(!r)throw new Error(`svar_list entry "${t}" has no matching svar decl`);return{bareName:t,decl:r}})}has_standard_rendering_framing_notes(){const n=this.standard_rendering_flabels();return this.framing.some(t=>n.has(t.flabel))}has_examples(){return this.isym.some(n=>{var t,r;return(((t=n.pos)==null?void 0:t.length)??0)>0||(((r=n.neg)==null?void 0:r.length)??0)>0})}isym_entries(){return this.isym}get_isym(n){const t=n.startsWith("isym:")?n:`isym:${n}`,r=this.isym.find(i=>i.id===t);if(r===void 0)throw new Error(`No isym named "${n}"`);return r}has_srcquotes(){return this.srcquote.length>0}resolve_srcquotes(n){const t=new Map(this.srcquote.map(r=>[r.id,r]));return n.map(r=>{const i=t.get(r);if(!i)throw new Error(`Unknown srcquote id: ${r}`);return i})}framing_static_anchor_ids(){const n=new Set;for(const t of this.framing)t.static_anchor!==null&&n.add(t.static_anchor);return n}get_axioms(){return this.ax}get_axioms_in_display_section(n){return this.ax.filter(t=>WL(t)===n)}find_ax(n){const t=Wr(n);return this.ax.find(r=>Wr(r.id)===t)}get_ax(n){const t=this.find_ax(n);if(t===void 0)throw new Error(`No axiom named "${n}"`);return t}get_ax_sexpr(n){return this.get_ax(n).sexpr}get_ax_defn(n){return this.get_ax(n).defn}can_consolidate_isym_svar(n){var u,a;const t=n.slice(5),r=this.isym.find(s=>s.id===n);if(!r||r.kind!=="real"||(((u=r.pos)==null?void 0:u.length)??0)>0||(((a=r.neg)==null?void 0:a.length)??0)>0||!this.svar_list.includes(t))return!1;const i=this.svar.find(s=>s.id===`svar:${t}`);if(!i)return!1;const o=this.expr.find(s=>s.id===`expr:${t}`);return!o||o.sexpr!==n?!1:i.defn===""}get_display_ax(n){return this.display.ax[n]}get_display_ax_or_none(n){return this.display.ax[n]??null}get_display_expr(n){return this.display.expr[n]}get_display_form(n){return this.display.form[n]}get_display_form_or_none(n){return this.display.form[n]??null}get_display_definedSym(n){return this.display.definedSym[n]}get_display_definedSym_or_none(n){return this.display.definedSym[n]??null}get_display_expr_keys(){return Object.keys(this.display.expr)}get_display_form_keys(){return Object.keys(this.display.form)}conclusion_form_or_none(){return this.config.conclusion_form??null}conclusion_expr_or_none(){const n=this.conclusion_form_or_none();if(n===null)return null;const t=this.form.find(i=>i.id===n);if(t===void 0)throw new Error(`${this.aid}: config.conclusion_form "${n}" names no registered formula`);const r=t.sexpr;if(!Array.isArray(r)||r.length!==3||r[0]!=="eq")throw new Error(`${this.aid}: conclusion formula "${n}" is not an (eq LHS RHS) triple, so it produces no conclusion expression`);return r[1]}get_fgroups(){const n=this.config.framing;if(n===void 0){if(this.framing.length>0)throw new Error(`${this.aid}: ${this.framing.length} framing note(s) but no config.framing declaring the fgroups their flabels belong to`);return{}}return n.fgroups}fgroup_of_flabel(n){const t=this.get_fgroups();for(const[r,i]of Object.entries(t))if(i.flabels.includes(n))return[r,i];throw new Error(`${this.aid}: framing flabel '${n}' belongs to no declared fgroup (declared: ${Object.keys(t).sort().join(", ")})`)}standard_fgroups_in_order(){return Object.entries(this.get_fgroups()).filter(([,n])=>n.standard_rendering)}standard_rendering_flabels(){const n=new Set;for(const[,t]of this.standard_fgroups_in_order())for(const r of t.flabels)n.add(r);return n}nonstandard_notes(n,t){const r=this.get_fgroups(),i=r[n];if(i===void 0)throw new Error(`${this.aid}: no declared fgroup '${n}' (declared: ${Object.keys(r).sort().join(", ")})`);if(i.standard_rendering)throw new Error(`${this.aid}: fgroup '${n}' is standard-rendering; its notes are placed by get_framing_layout, not bespoke code`);const o=new Set(i.flabels),u=new Set(t);return this.framing.filter(a=>o.has(a.flabel)&&u.has(a.flabel))}get_framing_layout(n){const t=this.standard_rendering_flabels(),r=new Set([...n].filter(l=>t.has(l))),i=new Map(this.framing.map(l=>[l.id,l])),o=new Map,u=l=>{if(o.has(l))return o.get(l)??null;const f=i.get(l);if(!f)throw new Error(`Unknown framing note id: ${l}`);let d=null;if(r.has(f.flabel)){const h=f.framing_target;if(h!==null){const p=u(h);p!==null&&(d={anchor_id:p.anchor_id,depth:p.depth+1,visible_parent_id:h})}d===null&&f.static_anchor!==null&&(d={anchor_id:f.static_anchor,depth:1,visible_parent_id:null})}return o.set(l,d),d};for(const l of this.framing)u(l.id);const a=new Map,s=[],c=new Map;for(const l of this.framing){const f=o.get(l.id);f!=null&&a.set(l.id,{depth:f.depth,note:l,children:[]})}for(const l of this.framing){const f=o.get(l.id);if(f==null)continue;const d=a.get(l.id);if(f.visible_parent_id!==null)a.get(f.visible_parent_id).children.push(d);else if(f.anchor_id==="root")s.push(d);else{const h=c.get(f.anchor_id)??[];h.push(d),c.set(f.anchor_id,h)}}return{root_section:{static_anchor_id:"root",layout_nodes:s},nonroot_anchor_sections:new Map(Array.from(c.entries(),([l,f])=>[l,{static_anchor_id:l,layout_nodes:f}]))}}}function Rh(e){return e.get_textdefn_entries().map(n=>{const t=`def-${n.bareName.toLowerCase()}`;return{...n,anchorId:t,anchor:`#${t}`}})}const jL=["options","config","layout","svar","textchunk","display","isym","ax","expr","form","definedSym","textdefn"];function XL(e){if(typeof e!="object"||e===null)throw new Error("Jprob template data must be a non-null object");const n=e,t=jL.filter(r=>!(r in n));if(t.length>0)throw new Error(`Jprob template data missing required keys: ${t.join(", ")}`);return new ey(e)}function YL(e){return XL(e)}const mo="data-popover-target";function KL(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function ov(e,n){const t=Object.keys(e).sort(),r=[...n].sort();return t.length===r.length&&t.every((i,o)=>i===r[o])}function ny(e){return encodeURIComponent(JSON.stringify(e))}function uv(e){let n;try{n=JSON.parse(decodeURIComponent(e))}catch(t){throw new Error("Malformed popover target encoding.",{cause:t})}if(!KL(n)||typeof n.kind!="string")throw new Error("Popover target must be an object with a recognized kind.");if(n.kind==="entity"){if(!ov(n,["kind","targetId"])||typeof n.targetId!="string"||n.targetId.length===0)throw new Error("Malformed entity popover target.");return{kind:"entity",targetId:n.targetId}}if(n.kind==="sourcequote"){if(!ov(n,["kind","sourcequoteIds"])||!Array.isArray(n.sourcequoteIds)||n.sourcequoteIds.length===0||!n.sourcequoteIds.every(t=>typeof t=="string"&&t.startsWith("srcquote:")&&t.length>9))throw new Error("Malformed source-quote popover target.");return{kind:"sourcequote",sourcequoteIds:n.sourcequoteIds}}throw new Error(`Unknown popover target kind: ${n.kind}`)}function X(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ae(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const ty="[",ry="]",iy="{",oy="}",JL=new RegExp("(?<!\\\\)\\{([^\\}]+)\\}","g"),vo=new RegExp("(?<!\\\\)\\{((?:expr|form):[^\\}]+)\\}","g"),zL=new RegExp("(?<!\\\\)\\[([^\\]]+?)\\|(\\w[\\w:-]*)\\](?!\\((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)])))","g"),ZL=new RegExp("(?<!\\\\)\\[([^\\]|]+)\\](?!\\((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)])))","g"),uy=new RegExp("(?<!\\\\)\\[([^\\]]+)\\]\\(((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)]))[^)\\s]*)\\)","g"),av=/‹\+(.*?)\+›/g,QL=new RegExp("(?<!\\\\)\\[([^\\]|]*?)(?:\\|[^\\]]*?)?\\](?!\\((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)])))","g"),eI=new RegExp("(?<!\\\\)\\{[^\\}]*\\}","g"),nI=/\\([\{\}])/g,tI=/\\([\[\]])/g,Jp="symbol-ref-name",kh="ax-",Nh="svar-";function ay(e){return e.form.filter(n=>!n.hide&&e.get_display_form(n.id)).map(n=>n.id)}function Mh(e,n={}){const t=new Map,r=n.symbolMnames??!1,i=rI(e);for(const o of e.isym_entries()){const u=o.id.startsWith("isym:")?o.id:`isym:${o.id}`,a=u.startsWith("isym:")?u.slice(5):u,s=`#isym-${a}`,c={bareId:a,mname:i.get(u)??a},l=i.get(u);l&&(t.set(l,{anchor:s,displayText:l}),t.set(`${a}:long`,{anchor:s,displayText:l}),t.set(`isym:${a}:long`,{anchor:s,displayText:l})),t.set(a,{anchor:s,displayText:Gi(c,r),symbolName:c}),t.set(u,{anchor:s,displayText:Gi(c,r),symbolName:c})}for(const o of Rh(e))for(const u of o.aliases)t.set(u,{anchor:o.anchor,displayText:u});for(const o of e.isym_entries()){const u=o.id.replace(/^isym:/,"");let a=0;for(const s of["pos","neg"])for(const c of o[s]??[])a++,c.alias&&t.set(c.alias,{anchor:`#ex-${c.alias}`,displayText:`${u} example ${a}`})}for(const o of e.get_axioms()){if(!e.get_display_ax(o.id))continue;const a=Wr(o.id);t.set(o.id,{anchor:`#${kh}${a}`,displayText:a})}for(const o of ay(e)){if(t.has(o))continue;const u=eu(o);t.set(o,{anchor:`#form-${u}`,displayText:u})}for(const o of e.get_options()){const u=Le(o.id),a=`#opt-${u}`,s={bareId:u,mname:o.longname??u},c=Gi(s,r),l={anchor:a,displayText:c,symbolName:s};t.has(o.id)||t.set(o.id,l),t.has(u)||t.set(u,l);const f=`${u}:short`;t.has(f)||t.set(f,{anchor:a,displayText:u})}for(const o of e.get_tchoice_decls()){const u=Vr(o.id),a=`#tchoice-${u}`,s={bareId:u,mname:o.longname??u};t.has(o.id)||t.set(o.id,{anchor:a,displayText:Gi(s,r),symbolName:s})}for(const o of e.get_svar_bare_names()){const u=`svar:${o}`;t.has(u)||t.set(u,{anchor:`#${Nh}${o}`,displayText:o})}for(const o of e.definedSym){const u=o.id.startsWith("definedSym:")?o.id.slice(11):o.id,s={anchor:`#defsym-${u}`,displayText:u};t.has(u)||t.set(u,s),t.has(o.id)||t.set(o.id,s)}return t}function rI(e){const n=new Map;for(const t of e.isym_entries()){if(!t.longname)continue;const r=t.id.startsWith("isym:")?t.id:`isym:${t.id}`;n.set(r,t.longname)}return n}function Gi(e,n){return n?e.mname:e.bareId}const iI={point:"=",sample:"~",bounds:"∈"};function sy(e){return iI[e]}function fi(e){return e.svar_entries().map(({bareName:n})=>`{expr:${n}}`)}function sv(e,n,t){const r=cy(t),i=ae(ny({kind:"entity",targetId:n}));return`<button type="button" class="ref-popover${r.classSuffix}" ${mo}="${i}" aria-expanded="false"${r.dataAttrs}>${e}</button>`}function oI(e,n,t){const r=cy(t);return`<a href="${e}"${r.classAttr}${r.dataAttrs}>${n}</a>`}function cy(e){if(!e)return{classAttr:"",classSuffix:"",dataAttrs:""};const n=` data-bareid="${ae(e.bareId)}" data-mname="${ae(e.mname)}"`;return{classAttr:` class="${Jp}"`,classSuffix:` ${Jp}`,dataAttrs:n}}function uI(e,n,t,r){const i=(t==null?void 0:t.popoverAllRefs)??!1;let o=e;return o=o.replace(zL,(u,a,s)=>{const c=n.get(s);return i&&c?sv(a,c.anchor):`<a href="${c?c.anchor:`#isym-${s}`}">${a}</a>`}),o=o.replace(ZL,(u,a)=>{const s=n.get(a);return s?i?sv(s.displayText,s.anchor,s.symbolName):oI(s.anchor,s.displayText,s.symbolName):(r==null||r.add(a),`${ty}${a}${ry}`)}),o}const aI=10;function sI(e,n,t,r){let i=e;for(let o=0;o<aI;o++){const u=uI(i,n,t,r);if(u===i)break;i=u}return i.replace(tI,"$1")}const cI=/\*\*/g;function lI(e){return e.replace(uy,"$1").replace(QL,"$1").replace(eI,"").replace(cI,"")}class fI extends ey{constructor(t,r,i){super(t);qe(this,"cparam_overrides");qe(this,"aopt_overrides");qe(this,"query_mode");const o=new Set(this.get_option_bare_names()),u=this.get_tchoice_bare_names(),a=new Map,s=new Map;for(const[c,l]of Object.entries(r)){if(u.has(c))throw new Error(`Cannot override tchoice entity "${c}" for ${this.aid}: it is left free for the responder to choose.`);if(!o.has(c))throw new Error(`Unknown option key "${c}" for ${this.aid}. Valid keys: ${[...o].sort().join(", ")}`);const f=this.find_cparam(c);if(f){if(i!=="plainnum")throw new Error(`Cannot fix cparam "${c}" for ${this.aid} in ${i} mode: cparams are free in plaincode/richcode (the responder covers all combinations).`);a.set(f.id,l)}else s.set(this.get_aopt(c).id,l)}this.cparam_overrides=a,this.aopt_overrides=s,this.query_mode=i}is_code_mode(){return this.query_mode!=="plainnum"}option_value(t){const r=this.find_cparam(t);if(r)return this.cparam_overrides.get(r.id)??r.default_value;const i=this.get_aopt(t);return this.aopt_overrides.get(i.id)??i.default_value}option_value_or(t,r){return this.get_option_bare_names().includes(t)?this.option_value(t):r}enabled_flabels(){const t=Y7(this.get_option_bare_names());return t===null?[]:K7(this.option_value(t),t)}}function ly(e,n,t){return new fI(e._get_data(),n,t)}function Oh(e,n){if("input_type"in e&&e.input_type==="MultiStringFromSet"){if(!Array.isArray(n)||!n.every(i=>typeof i=="string"))throw new Error(`Invalid MultiStringFromSet value for ${e.id}: expected a string array`);if(!Array.isArray(e.allowed_values))throw new Error(`Invalid MultiStringFromSet declaration for ${e.id}: missing allowed_values`);const t=new Set(e.allowed_values),r=n.filter(i=>!t.has(i));if(r.length>0)throw new Error(`Invalid MultiStringFromSet value for ${e.id}: values not in allowed_values: `+r.join(", "));return[...n]}if(typeof n=="object")throw new Error(`Invalid scalar value for ${e.id}: expected string, number, or boolean`);if(fo(e)){if(Qo(e.allowed_values)==="string"){if(typeof n!="string")throw new Error(`Invalid string value for ${e.id}: ${n}`);return n}const t=Number(n);if(typeof n=="boolean"||!Number.isFinite(t))throw new Error(`Invalid numeric value for ${e.id}: ${n}`);return t}if(typeof e.default_value=="boolean"){if(typeof n=="boolean")return n;if(n==="true")return!0;if(n==="false")return!1;throw new Error(`Invalid boolean value for ${e.id}: ${n}`)}if(typeof e.default_value=="number"){if(typeof n=="boolean"||typeof n=="string"&&n.trim()==="")throw new Error(`Invalid numeric value for ${e.id}: ${n}`);const t=Number(n);if(!Number.isFinite(t))throw new Error(`Invalid numeric value for ${e.id}: ${n}`);return t}if(typeof e.default_value=="string"){if(typeof n!="string")throw new Error(`Invalid string value for ${e.id}: ${n}`);return n}throw new Error(`Option ${e.id} has no supported default value type`)}const fy=!0;function cv(e,n){return e!=="typical"||n}function dI(e,n){const t=e.map(u=>({name:Le(u.id),values:u.allowed_values.filter(a=>typeof a!="boolean")}));if(t.length===0)return{names:[],combinations:[{}]};const r=t.map(u=>u.name),i=t.map(u=>u.values);let o=[{}];for(let u=0;u<r.length;u++){const a=r[u],s=i[u],c=[];for(const l of o)for(const f of s)c.push({...l,[a]:f});o=c}return n!==void 0&&(o=o.filter(u=>n(u))),{names:r,combinations:o}}function dy(e,n,t){const r=new Set(e.get_cparam_bare_names()),i=t!=="plainnum",o={};for(const[u,a]of Object.entries(n))i&&r.has(u)||(o[u]=a);return o}const pI={boolrv:"BoolRV",real:"ℝ",prop:"Prop",set:"Set",fn:"Function"},zp="dag-ref",hI="dag-lhs",Zp="dag-glyph",_o="data-dag-id",mI="↖",vI="↘";function _I(e){const n=e.sexpr;if(!Array.isArray(n)||n[0]!=="eq")return null;const t=n[1];return typeof t!="string"||!t.startsWith("expr:")?null:t.slice(5)}function gI(e){vo.lastIndex=0;const n=[];for(const t of e.matchAll(vo)){const r=t[1];if(!r.startsWith("expr:"))continue;const i=r.slice(5);i.includes(":")||n.push(i)}return n}function bI(e,n){const t=new Map(e.form.map(s=>[s.id,s])),r=n.map(s=>e.get_display_form(s)),i=new Map,o=n.map((s,c)=>{const l=t.get(s),f=l?_I(l):null;return f!==null&&!i.has(f)&&i.set(f,c),f}),u=new Set;r.forEach((s,c)=>{for(const l of gI(s)){const f=i.get(l);f!==void 0&&f<c&&u.add(l)}});const a=new Map;return n.forEach((s,c)=>{const l=r[c].replace(vo,(f,d)=>{if(!d.startsWith("expr:"))return f;const h=d.slice(5);if(h.includes(":"))return f;if(h===o[c])return u.has(h)?`<span class="${zp} ${hI}" ${_o}="${ae(h)}"><span class="${Zp}">${vI}</span>${f}</span>`:f;const p=i.get(h);if(p===void 0||p>=c)return f;const v=eu(n[p]);return`<span class="${zp}" ${_o}="${ae(h)}"><a class="${Zp}" href="#form-${ae(v)}">${mI}</a>${f}</span>`});a.set(s,l)}),a}const yI=["expr:","form:"],EI=["textchunk:","aopt:","cparam:"],wI=10;function SI(e){const n=new Map;for(const t of e.get_options()){if(Th(t)&&t.variant_producing)continue;const r=py(t.id);if(e.is_code_mode()&&kt(t.id)){n.set(r,`${ty}${r}:short${ry}`);continue}n.set(r,String(e.option_value(r)))}for(const t of e.get_textchunks()){const r=t.id.startsWith("textchunk:")?t.id.slice(10):t.id;n.set(r,t.defn)}return n}function py(e){for(const n of EI)if(e.startsWith(n))return e.slice(n.length);return e}function $I(e,n){const t=SI(n);let r=e;for(let i=0;i<wI;i++){const o=r.replace(JL,(u,a)=>{for(const l of yI)if(a.startsWith(l))return u;const s=py(a),c=t.get(s);if(c===void 0)throw new Error(`Template variable ${iy}${a}${oy} not found in non-variant-producing options or textchunks`);return c});if(o===r)break;r=o}return r.replace(nI,"$1")}const AI=10;function LI(e){const n=new Map;for(const r of e.get_display_expr_keys())n.set(r,e.get_display_expr(r));const t=new Set(e.form.filter(r=>!r.hide).map(r=>r.id));for(const r of e.get_display_form_keys())t.has(r)&&n.set(r,e.get_display_form(r));return n}function II(e,n){let t=e;for(let r=0;r<AI;r++){const i=t.replace(vo,(o,u)=>{const a=n.get(u);if(a===void 0)throw new Error(`Display ref ${iy}${u}${oy} not found in display.expr or display.form`);return a});if(i===t)break;t=i}return t}const lv={};function CI(e){let n=lv[e];if(n)return n;n=lv[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);n.push(r)}for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);n[r]="%"+("0"+r.toString(16).toUpperCase()).slice(-2)}return n}function Zt(e,n){typeof n!="string"&&(n=Zt.defaultChars);const t=CI(n);return e.replace(/(%[a-f0-9]{2})+/gi,function(r){let i="";for(let o=0,u=r.length;o<u;o+=3){const a=parseInt(r.slice(o+1,o+3),16);if(a<128){i+=t[a];continue}if((a&224)===192&&o+3<u){const s=parseInt(r.slice(o+4,o+6),16);if((s&192)===128){const c=a<<6&1984|s&63;c<128?i+="��":i+=String.fromCharCode(c),o+=3;continue}}if((a&240)===224&&o+6<u){const s=parseInt(r.slice(o+4,o+6),16),c=parseInt(r.slice(o+7,o+9),16);if((s&192)===128&&(c&192)===128){const l=a<<12&61440|s<<6&4032|c&63;l<2048||l>=55296&&l<=57343?i+="���":i+=String.fromCharCode(l),o+=6;continue}}if((a&248)===240&&o+9<u){const s=parseInt(r.slice(o+4,o+6),16),c=parseInt(r.slice(o+7,o+9),16),l=parseInt(r.slice(o+10,o+12),16);if((s&192)===128&&(c&192)===128&&(l&192)===128){let f=a<<18&1835008|s<<12&258048|c<<6&4032|l&63;f<65536||f>1114111?i+="����":(f-=65536,i+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),o+=9;continue}}i+="�"}return i})}Zt.defaultChars=";/?:@&=+$,#";Zt.componentChars="";const fv={};function TI(e){let n=fv[e];if(n)return n;n=fv[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);/^[0-9a-z]$/i.test(r)?n.push(r):n.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let t=0;t<e.length;t++)n[e.charCodeAt(t)]=e[t];return n}function di(e,n,t){typeof n!="string"&&(t=n,n=di.defaultChars),typeof t>"u"&&(t=!0);const r=TI(n);let i="";for(let o=0,u=e.length;o<u;o++){const a=e.charCodeAt(o);if(t&&a===37&&o+2<u&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3))){i+=e.slice(o,o+3),o+=2;continue}if(a<128){i+=r[a];continue}if(a>=55296&&a<=57343){if(a>=55296&&a<=56319&&o+1<u){const s=e.charCodeAt(o+1);if(s>=56320&&s<=57343){i+=encodeURIComponent(e[o]+e[o+1]),o++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(e[o])}return i}di.defaultChars=";/?:@&=+$,-_.!~*'()#";di.componentChars="-_.!~*'()";function qh(e){let n="";return n+=e.protocol||"",n+=e.slashes?"//":"",n+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?n+="["+e.hostname+"]":n+=e.hostname||"",n+=e.port?":"+e.port:"",n+=e.pathname||"",n+=e.search||"",n+=e.hash||"",n}function go(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const RI=/^([a-z0-9.+-]+:)/i,kI=/:[0-9]*$/,NI=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,MI=["<",">",'"',"`"," ","\r",`
`,"	"],OI=["{","}","|","\\","^","`"].concat(MI),qI=["'"].concat(OI),dv=["%","/","?",";","#"].concat(qI),pv=["/","?","#"],PI=255,hv=/^[+a-z0-9A-Z_-]{0,63}$/,FI=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,mv={javascript:!0,"javascript:":!0},vv={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Ph(e,n){if(e&&e instanceof go)return e;const t=new go;return t.parse(e,n),t}go.prototype.parse=function(e,n){let t,r,i,o=e;if(o=o.trim(),!n&&e.split("#").length===1){const c=NI.exec(o);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let u=RI.exec(o);if(u&&(u=u[0],t=u.toLowerCase(),this.protocol=u,o=o.substr(u.length)),(n||u||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=o.substr(0,2)==="//",i&&!(u&&mv[u])&&(o=o.substr(2),this.slashes=!0)),!mv[u]&&(i||u&&!vv[u])){let c=-1;for(let p=0;p<pv.length;p++)r=o.indexOf(pv[p]),r!==-1&&(c===-1||r<c)&&(c=r);let l,f;c===-1?f=o.lastIndexOf("@"):f=o.lastIndexOf("@",c),f!==-1&&(l=o.slice(0,f),o=o.slice(f+1),this.auth=l),c=-1;for(let p=0;p<dv.length;p++)r=o.indexOf(dv[p]),r!==-1&&(c===-1||r<c)&&(c=r);c===-1&&(c=o.length),o[c-1]===":"&&c--;const d=o.slice(0,c);o=o.slice(c),this.parseHost(d),this.hostname=this.hostname||"";const h=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!h){const p=this.hostname.split(/\./);for(let v=0,m=p.length;v<m;v++){const g=p[v];if(g&&!g.match(hv)){let _="";for(let y=0,b=g.length;y<b;y++)g.charCodeAt(y)>127?_+="x":_+=g[y];if(!_.match(hv)){const y=p.slice(0,v),b=p.slice(v+1),E=g.match(FI);E&&(y.push(E[1]),b.unshift(E[2])),b.length&&(o=b.join(".")+o),this.hostname=y.join(".");break}}}}this.hostname.length>PI&&(this.hostname=""),h&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const a=o.indexOf("#");a!==-1&&(this.hash=o.substr(a),o=o.slice(0,a));const s=o.indexOf("?");return s!==-1&&(this.search=o.substr(s),o=o.slice(0,s)),o&&(this.pathname=o),vv[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this};go.prototype.parseHost=function(e){let n=kI.exec(e);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),e=e.substr(0,e.length-n.length)),e&&(this.hostname=e)};const DI=Object.freeze(Object.defineProperty({__proto__:null,decode:Zt,encode:di,format:qh,parse:Ph},Symbol.toStringTag,{value:"Module"})),hy=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,my=/[\0-\x1F\x7F-\x9F]/,xI=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Fh=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,vy=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,_y=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,BI=Object.freeze(Object.defineProperty({__proto__:null,Any:hy,Cc:my,Cf:xI,P:Fh,S:vy,Z:_y},Symbol.toStringTag,{value:"Module"})),HI=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),UI=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var oa;const GI=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),VI=(oa=String.fromCodePoint)!==null&&oa!==void 0?oa:function(e){let n="";return e>65535&&(e-=65536,n+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),n+=String.fromCharCode(e),n};function WI(e){var n;return e>=55296&&e<=57343||e>1114111?65533:(n=GI.get(e))!==null&&n!==void 0?n:e}var Je;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(Je||(Je={}));const jI=32;var pt;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(pt||(pt={}));function Qp(e){return e>=Je.ZERO&&e<=Je.NINE}function XI(e){return e>=Je.UPPER_A&&e<=Je.UPPER_F||e>=Je.LOWER_A&&e<=Je.LOWER_F}function YI(e){return e>=Je.UPPER_A&&e<=Je.UPPER_Z||e>=Je.LOWER_A&&e<=Je.LOWER_Z||Qp(e)}function KI(e){return e===Je.EQUALS||YI(e)}var Ke;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(Ke||(Ke={}));var dt;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(dt||(dt={}));class JI{constructor(n,t,r){this.decodeTree=n,this.emitCodePoint=t,this.errors=r,this.state=Ke.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=dt.Strict}startEntity(n){this.decodeMode=n,this.state=Ke.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(n,t){switch(this.state){case Ke.EntityStart:return n.charCodeAt(t)===Je.NUM?(this.state=Ke.NumericStart,this.consumed+=1,this.stateNumericStart(n,t+1)):(this.state=Ke.NamedEntity,this.stateNamedEntity(n,t));case Ke.NumericStart:return this.stateNumericStart(n,t);case Ke.NumericDecimal:return this.stateNumericDecimal(n,t);case Ke.NumericHex:return this.stateNumericHex(n,t);case Ke.NamedEntity:return this.stateNamedEntity(n,t)}}stateNumericStart(n,t){return t>=n.length?-1:(n.charCodeAt(t)|jI)===Je.LOWER_X?(this.state=Ke.NumericHex,this.consumed+=1,this.stateNumericHex(n,t+1)):(this.state=Ke.NumericDecimal,this.stateNumericDecimal(n,t))}addToNumericResult(n,t,r,i){if(t!==r){const o=r-t;this.result=this.result*Math.pow(i,o)+parseInt(n.substr(t,o),i),this.consumed+=o}}stateNumericHex(n,t){const r=t;for(;t<n.length;){const i=n.charCodeAt(t);if(Qp(i)||XI(i))t+=1;else return this.addToNumericResult(n,r,t,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(n,r,t,16),-1}stateNumericDecimal(n,t){const r=t;for(;t<n.length;){const i=n.charCodeAt(t);if(Qp(i))t+=1;else return this.addToNumericResult(n,r,t,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(n,r,t,10),-1}emitNumericEntity(n,t){var r;if(this.consumed<=t)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(n===Je.SEMI)this.consumed+=1;else if(this.decodeMode===dt.Strict)return 0;return this.emitCodePoint(WI(this.result),this.consumed),this.errors&&(n!==Je.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(n,t){const{decodeTree:r}=this;let i=r[this.treeIndex],o=(i&pt.VALUE_LENGTH)>>14;for(;t<n.length;t++,this.excess++){const u=n.charCodeAt(t);if(this.treeIndex=zI(r,i,this.treeIndex+Math.max(1,o),u),this.treeIndex<0)return this.result===0||this.decodeMode===dt.Attribute&&(o===0||KI(u))?0:this.emitNotTerminatedNamedEntity();if(i=r[this.treeIndex],o=(i&pt.VALUE_LENGTH)>>14,o!==0){if(u===Je.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==dt.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var n;const{result:t,decodeTree:r}=this,i=(r[t]&pt.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,i,this.consumed),(n=this.errors)===null||n===void 0||n.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(n,t,r){const{decodeTree:i}=this;return this.emitCodePoint(t===1?i[n]&~pt.VALUE_LENGTH:i[n+1],r),t===3&&this.emitCodePoint(i[n+2],r),r}end(){var n;switch(this.state){case Ke.NamedEntity:return this.result!==0&&(this.decodeMode!==dt.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Ke.NumericDecimal:return this.emitNumericEntity(0,2);case Ke.NumericHex:return this.emitNumericEntity(0,3);case Ke.NumericStart:return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Ke.EntityStart:return 0}}}function gy(e){let n="";const t=new JI(e,r=>n+=VI(r));return function(i,o){let u=0,a=0;for(;(a=i.indexOf("&",a))>=0;){n+=i.slice(u,a),t.startEntity(o);const c=t.write(i,a+1);if(c<0){u=a+t.end();break}u=a+c,a=c===0?u+1:u}const s=n+i.slice(u);return n="",s}}function zI(e,n,t,r){const i=(n&pt.BRANCH_LENGTH)>>7,o=n&pt.JUMP_TABLE;if(i===0)return o!==0&&r===o?t:-1;if(o){const s=r-o;return s<0||s>=i?-1:e[t+s]-1}let u=t,a=u+i-1;for(;u<=a;){const s=u+a>>>1,c=e[s];if(c<r)u=s+1;else if(c>r)a=s-1;else return e[s+i]}return-1}const ZI=gy(HI);gy(UI);function by(e,n=dt.Legacy){return ZI(e,n)}function QI(e){return Object.prototype.toString.call(e)}function Dh(e){return QI(e)==="[object String]"}const eC=Object.prototype.hasOwnProperty;function nC(e,n){return eC.call(e,n)}function nu(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(r){e[r]=t[r]})}}),e}function yy(e,n,t){return[].concat(e.slice(0,n),t,e.slice(n+1))}function xh(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function bo(e){if(e>65535){e-=65536;const n=55296+(e>>10),t=56320+(e&1023);return String.fromCharCode(n,t)}return String.fromCharCode(e)}const Ey=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,tC=/&([a-z#][a-z0-9]{1,31});/gi,rC=new RegExp(Ey.source+"|"+tC.source,"gi"),iC=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function oC(e,n){if(n.charCodeAt(0)===35&&iC.test(n)){const r=n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10);return xh(r)?bo(r):e}const t=by(e);return t!==e?t:e}function uC(e){return e.indexOf("\\")<0?e:e.replace(Ey,"$1")}function Qt(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(rC,function(n,t,r){return t||oC(n,r)})}const aC=/[&<>"]/,sC=/[&<>"]/g,cC={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function lC(e){return cC[e]}function _t(e){return aC.test(e)?e.replace(sC,lC):e}const fC=/[.?*+^$[\]\\(){}|-]/g;function dC(e){return e.replace(fC,"\\$&")}function Re(e){switch(e){case 9:case 32:return!0}return!1}function jr(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Xr(e){return Fh.test(e)||vy.test(e)}function Yr(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function tu(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const pC={mdurl:DI,ucmicro:BI},hC=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:yy,assign:nu,escapeHtml:_t,escapeRE:dC,fromCodePoint:bo,has:nC,isMdAsciiPunct:Yr,isPunctChar:Xr,isSpace:Re,isString:Dh,isValidEntityCode:xh,isWhiteSpace:jr,lib:pC,normalizeReference:tu,unescapeAll:Qt,unescapeMd:uC},Symbol.toStringTag,{value:"Module"}));function mC(e,n,t){let r,i,o,u;const a=e.posMax,s=e.pos;for(e.pos=n+1,r=1;e.pos<a;){if(o=e.src.charCodeAt(e.pos),o===93&&(r--,r===0)){i=!0;break}if(u=e.pos,e.md.inline.skipToken(e),o===91){if(u===e.pos-1)r++;else if(t)return e.pos=s,-1}}let c=-1;return i&&(c=e.pos),e.pos=s,c}function vC(e,n,t){let r,i=n;const o={ok:!1,pos:0,str:""};if(e.charCodeAt(i)===60){for(i++;i<t;){if(r=e.charCodeAt(i),r===10||r===60)return o;if(r===62)return o.pos=i+1,o.str=Qt(e.slice(n+1,i)),o.ok=!0,o;if(r===92&&i+1<t){i+=2;continue}i++}return o}let u=0;for(;i<t&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<t){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(r===40&&(u++,u>32))return o;if(r===41){if(u===0)break;u--}i++}return n===i||u!==0||(o.str=Qt(e.slice(n,i)),o.pos=i,o.ok=!0),o}function _C(e,n,t,r){let i,o=n;const u={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(r)u.str=r.str,u.marker=r.marker;else{if(o>=t)return u;let a=e.charCodeAt(o);if(a!==34&&a!==39&&a!==40)return u;n++,o++,a===40&&(a=41),u.marker=a}for(;o<t;){if(i=e.charCodeAt(o),i===u.marker)return u.pos=o+1,u.str+=Qt(e.slice(n,o)),u.ok=!0,u;if(i===40&&u.marker===41)return u;i===92&&o+1<t&&o++,o++}return u.can_continue=!0,u.str+=Qt(e.slice(n,o)),u}const gC=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:vC,parseLinkLabel:mC,parseLinkTitle:_C},Symbol.toStringTag,{value:"Module"})),Vn={};Vn.code_inline=function(e,n,t,r,i){const o=e[n];return"<code"+i.renderAttrs(o)+">"+_t(o.content)+"</code>"};Vn.code_block=function(e,n,t,r,i){const o=e[n];return"<pre"+i.renderAttrs(o)+"><code>"+_t(e[n].content)+`</code></pre>
`};Vn.fence=function(e,n,t,r,i){const o=e[n],u=o.info?Qt(o.info).trim():"";let a="",s="";if(u){const l=u.split(/(\s+)/g);a=l[0],s=l.slice(2).join("")}let c;if(t.highlight?c=t.highlight(o.content,a,s)||_t(o.content):c=_t(o.content),c.indexOf("<pre")===0)return c+`
`;if(u){const l=o.attrIndex("class"),f=o.attrs?o.attrs.slice():[];l<0?f.push(["class",t.langPrefix+a]):(f[l]=f[l].slice(),f[l][1]+=" "+t.langPrefix+a);const d={attrs:f};return`<pre><code${i.renderAttrs(d)}>${c}</code></pre>
`}return`<pre><code${i.renderAttrs(o)}>${c}</code></pre>
`};Vn.image=function(e,n,t,r,i){const o=e[n];return o.attrs[o.attrIndex("alt")][1]=i.renderInlineAsText(o.children,t,r),i.renderToken(e,n,t)};Vn.hardbreak=function(e,n,t){return t.xhtmlOut?`<br />
`:`<br>
`};Vn.softbreak=function(e,n,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};Vn.text=function(e,n){return _t(e[n].content)};Vn.html_block=function(e,n){return e[n].content};Vn.html_inline=function(e,n){return e[n].content};function lr(){this.rules=nu({},Vn)}lr.prototype.renderAttrs=function(n){let t,r,i;if(!n.attrs)return"";for(i="",t=0,r=n.attrs.length;t<r;t++)i+=" "+_t(n.attrs[t][0])+'="'+_t(n.attrs[t][1])+'"';return i};lr.prototype.renderToken=function(n,t,r){const i=n[t];let o="";if(i.hidden)return"";i.block&&i.nesting!==-1&&t&&n[t-1].hidden&&(o+=`
`),o+=(i.nesting===-1?"</":"<")+i.tag,o+=this.renderAttrs(i),i.nesting===0&&r.xhtmlOut&&(o+=" /");let u=!1;if(i.block&&(u=!0,i.nesting===1&&t+1<n.length)){const a=n[t+1];(a.type==="inline"||a.hidden||a.nesting===-1&&a.tag===i.tag)&&(u=!1)}return o+=u?`>
`:">",o};lr.prototype.renderInline=function(e,n,t){let r="";const i=this.rules;for(let o=0,u=e.length;o<u;o++){const a=e[o].type;typeof i[a]<"u"?r+=i[a](e,o,n,t,this):r+=this.renderToken(e,o,n)}return r};lr.prototype.renderInlineAsText=function(e,n,t){let r="";for(let i=0,o=e.length;i<o;i++)switch(e[i].type){case"text":r+=e[i].content;break;case"image":r+=this.renderInlineAsText(e[i].children,n,t);break;case"html_inline":case"html_block":r+=e[i].content;break;case"softbreak":case"hardbreak":r+=`
`;break}return r};lr.prototype.render=function(e,n,t){let r="";const i=this.rules;for(let o=0,u=e.length;o<u;o++){const a=e[o].type;a==="inline"?r+=this.renderInline(e[o].children,n,t):typeof i[a]<"u"?r+=i[a](e,o,n,t,this):r+=this.renderToken(e,o,n,t)}return r};function sn(){this.__rules__=[],this.__cache__=null}sn.prototype.__find__=function(e){for(let n=0;n<this.__rules__.length;n++)if(this.__rules__[n].name===e)return n;return-1};sn.prototype.__compile__=function(){const e=this,n=[""];e.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(r){n.indexOf(r)<0&&n.push(r)})}),e.__cache__={},n.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(r){r.enabled&&(t&&r.alt.indexOf(t)<0||e.__cache__[t].push(r.fn))})})};sn.prototype.at=function(e,n,t){const r=this.__find__(e),i=t||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__[r].fn=n,this.__rules__[r].alt=i.alt||[],this.__cache__=null};sn.prototype.before=function(e,n,t,r){const i=this.__find__(e),o=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i,0,{name:n,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};sn.prototype.after=function(e,n,t,r){const i=this.__find__(e),o=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i+1,0,{name:n,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};sn.prototype.push=function(e,n,t){const r=t||{};this.__rules__.push({name:e,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};sn.prototype.enable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const i=this.__find__(r);if(i<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!0,t.push(r)},this),this.__cache__=null,t};sn.prototype.enableOnly=function(e,n){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,n)};sn.prototype.disable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const i=this.__find__(r);if(i<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!1,t.push(r)},this),this.__cache__=null,t};sn.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function Rn(e,n,t){this.type=e,this.tag=n,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Rn.prototype.attrIndex=function(n){if(!this.attrs)return-1;const t=this.attrs;for(let r=0,i=t.length;r<i;r++)if(t[r][0]===n)return r;return-1};Rn.prototype.attrPush=function(n){this.attrs?this.attrs.push(n):this.attrs=[n]};Rn.prototype.attrSet=function(n,t){const r=this.attrIndex(n),i=[n,t];r<0?this.attrPush(i):this.attrs[r]=i};Rn.prototype.attrGet=function(n){const t=this.attrIndex(n);let r=null;return t>=0&&(r=this.attrs[t][1]),r};Rn.prototype.attrJoin=function(n,t){const r=this.attrIndex(n);r<0?this.attrPush([n,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};function wy(e,n,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=n}wy.prototype.Token=Rn;const bC=/\r\n?|\n/g,yC=/\0/g;function EC(e){let n;n=e.src.replace(bC,`
`),n=n.replace(yC,"�"),e.src=n}function wC(e){let n;e.inlineMode?(n=new e.Token("inline","",0),n.content=e.src,n.map=[0,1],n.children=[],e.tokens.push(n)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function SC(e){const n=e.tokens;for(let t=0,r=n.length;t<r;t++){const i=n[t];i.type==="inline"&&e.md.inline.parse(i.content,e.md,e.env,i.children)}}function $C(e){return/^<a[>\s]/i.test(e)}function AC(e){return/^<\/a\s*>/i.test(e)}function LC(e){const n=e.tokens;if(e.md.options.linkify)for(let t=0,r=n.length;t<r;t++){if(n[t].type!=="inline"||!e.md.linkify.pretest(n[t].content))continue;let i=n[t].children,o=0;for(let u=i.length-1;u>=0;u--){const a=i[u];if(a.type==="link_close"){for(u--;i[u].level!==a.level&&i[u].type!=="link_open";)u--;continue}if(a.type==="html_inline"&&($C(a.content)&&o>0&&o--,AC(a.content)&&o++),!(o>0)&&a.type==="text"&&e.md.linkify.test(a.content)){const s=a.content;let c=e.md.linkify.match(s);const l=[];let f=a.level,d=0;c.length>0&&c[0].index===0&&u>0&&i[u-1].type==="text_special"&&(c=c.slice(1));for(let h=0;h<c.length;h++){const p=c[h].url,v=e.md.normalizeLink(p);if(!e.md.validateLink(v))continue;let m=c[h].text;c[h].schema?c[h].schema==="mailto:"&&!/^mailto:/i.test(m)?m=e.md.normalizeLinkText("mailto:"+m).replace(/^mailto:/,""):m=e.md.normalizeLinkText(m):m=e.md.normalizeLinkText("http://"+m).replace(/^http:\/\//,"");const g=c[h].index;if(g>d){const E=new e.Token("text","",0);E.content=s.slice(d,g),E.level=f,l.push(E)}const _=new e.Token("link_open","a",1);_.attrs=[["href",v]],_.level=f++,_.markup="linkify",_.info="auto",l.push(_);const y=new e.Token("text","",0);y.content=m,y.level=f,l.push(y);const b=new e.Token("link_close","a",-1);b.level=--f,b.markup="linkify",b.info="auto",l.push(b),d=c[h].lastIndex}if(d<s.length){const h=new e.Token("text","",0);h.content=s.slice(d),h.level=f,l.push(h)}n[t].children=i=yy(i,u,l)}}}}const Sy=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,IC=/\((c|tm|r)\)/i,CC=/\((c|tm|r)\)/ig,TC={c:"©",r:"®",tm:"™"};function RC(e,n){return TC[n.toLowerCase()]}function kC(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&(r.content=r.content.replace(CC,RC)),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function NC(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&Sy.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function MC(e){let n;if(e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type==="inline"&&(IC.test(e.tokens[n].content)&&kC(e.tokens[n].children),Sy.test(e.tokens[n].content)&&NC(e.tokens[n].children))}const OC=/['"]/,_v=/['"]/g,gv="’";function Vi(e,n,t){return e.slice(0,n)+t+e.slice(n+1)}function qC(e,n){let t;const r=[];for(let i=0;i<e.length;i++){const o=e[i],u=e[i].level;for(t=r.length-1;t>=0&&!(r[t].level<=u);t--);if(r.length=t+1,o.type!=="text")continue;let a=o.content,s=0,c=a.length;e:for(;s<c;){_v.lastIndex=s;const l=_v.exec(a);if(!l)break;let f=!0,d=!0;s=l.index+1;const h=l[0]==="'";let p=32;if(l.index-1>=0)p=a.charCodeAt(l.index-1);else for(t=i-1;t>=0&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t--)if(e[t].content){p=e[t].content.charCodeAt(e[t].content.length-1);break}let v=32;if(s<c)v=a.charCodeAt(s);else for(t=i+1;t<e.length&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t++)if(e[t].content){v=e[t].content.charCodeAt(0);break}const m=Yr(p)||Xr(String.fromCharCode(p)),g=Yr(v)||Xr(String.fromCharCode(v)),_=jr(p),y=jr(v);if(y?f=!1:g&&(_||m||(f=!1)),_?d=!1:m&&(y||g||(d=!1)),v===34&&l[0]==='"'&&p>=48&&p<=57&&(d=f=!1),f&&d&&(f=m,d=g),!f&&!d){h&&(o.content=Vi(o.content,l.index,gv));continue}if(d)for(t=r.length-1;t>=0;t--){let b=r[t];if(r[t].level<u)break;if(b.single===h&&r[t].level===u){b=r[t];let E,A;h?(E=n.md.options.quotes[2],A=n.md.options.quotes[3]):(E=n.md.options.quotes[0],A=n.md.options.quotes[1]),o.content=Vi(o.content,l.index,A),e[b.token].content=Vi(e[b.token].content,b.pos,E),s+=A.length-1,b.token===i&&(s+=E.length-1),a=o.content,c=a.length,r.length=t;continue e}}f?r.push({token:i,pos:l.index,single:h,level:u}):d&&h&&(o.content=Vi(o.content,l.index,gv))}}}function PC(e){if(e.md.options.typographer)for(let n=e.tokens.length-1;n>=0;n--)e.tokens[n].type!=="inline"||!OC.test(e.tokens[n].content)||qC(e.tokens[n].children,e)}function FC(e){let n,t;const r=e.tokens,i=r.length;for(let o=0;o<i;o++){if(r[o].type!=="inline")continue;const u=r[o].children,a=u.length;for(n=0;n<a;n++)u[n].type==="text_special"&&(u[n].type="text");for(n=t=0;n<a;n++)u[n].type==="text"&&n+1<a&&u[n+1].type==="text"?u[n+1].content=u[n].content+u[n+1].content:(n!==t&&(u[t]=u[n]),t++);n!==t&&(u.length=t)}}const ua=[["normalize",EC],["block",wC],["inline",SC],["linkify",LC],["replacements",MC],["smartquotes",PC],["text_join",FC]];function Bh(){this.ruler=new sn;for(let e=0;e<ua.length;e++)this.ruler.push(ua[e][0],ua[e][1])}Bh.prototype.process=function(e){const n=this.ruler.getRules("");for(let t=0,r=n.length;t<r;t++)n[t](e)};Bh.prototype.State=wy;function Wn(e,n,t,r){this.src=e,this.md=n,this.env=t,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let o=0,u=0,a=0,s=0,c=i.length,l=!1;u<c;u++){const f=i.charCodeAt(u);if(!l)if(Re(f)){a++,f===9?s+=4-s%4:s++;continue}else l=!0;(f===10||u===c-1)&&(f!==10&&u++,this.bMarks.push(o),this.eMarks.push(u),this.tShift.push(a),this.sCount.push(s),this.bsCount.push(0),l=!1,a=0,s=0,o=u+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Wn.prototype.push=function(e,n,t){const r=new Rn(e,n,t);return r.block=!0,t<0&&this.level--,r.level=this.level,t>0&&this.level++,this.tokens.push(r),r};Wn.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]};Wn.prototype.skipEmptyLines=function(n){for(let t=this.lineMax;n<t&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n};Wn.prototype.skipSpaces=function(n){for(let t=this.src.length;n<t;n++){const r=this.src.charCodeAt(n);if(!Re(r))break}return n};Wn.prototype.skipSpacesBack=function(n,t){if(n<=t)return n;for(;n>t;)if(!Re(this.src.charCodeAt(--n)))return n+1;return n};Wn.prototype.skipChars=function(n,t){for(let r=this.src.length;n<r&&this.src.charCodeAt(n)===t;n++);return n};Wn.prototype.skipCharsBack=function(n,t,r){if(n<=r)return n;for(;n>r;)if(t!==this.src.charCodeAt(--n))return n+1;return n};Wn.prototype.getLines=function(n,t,r,i){if(n>=t)return"";const o=new Array(t-n);for(let u=0,a=n;a<t;a++,u++){let s=0;const c=this.bMarks[a];let l=c,f;for(a+1<t||i?f=this.eMarks[a]+1:f=this.eMarks[a];l<f&&s<r;){const d=this.src.charCodeAt(l);if(Re(d))d===9?s+=4-(s+this.bsCount[a])%4:s++;else if(l-c<this.tShift[a])s++;else break;l++}s>r?o[u]=new Array(s-r+1).join(" ")+this.src.slice(l,f):o[u]=this.src.slice(l,f)}return o.join("")};Wn.prototype.Token=Rn;const DC=65536;function aa(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];return e.src.slice(t,r)}function bv(e){const n=[],t=e.length;let r=0,i=e.charCodeAt(r),o=!1,u=0,a="";for(;r<t;)i===124&&(o?(a+=e.substring(u,r-1),u=r):(n.push(a+e.substring(u,r)),a="",u=r+1)),o=i===92,r++,i=e.charCodeAt(r);return n.push(a+e.substring(u)),n}function xC(e,n,t,r){if(n+2>t)return!1;let i=n+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let o=e.bMarks[i]+e.tShift[i];if(o>=e.eMarks[i])return!1;const u=e.src.charCodeAt(o++);if(u!==124&&u!==45&&u!==58||o>=e.eMarks[i])return!1;const a=e.src.charCodeAt(o++);if(a!==124&&a!==45&&a!==58&&!Re(a)||u===45&&Re(a))return!1;for(;o<e.eMarks[i];){const b=e.src.charCodeAt(o);if(b!==124&&b!==45&&b!==58&&!Re(b))return!1;o++}let s=aa(e,n+1),c=s.split("|");const l=[];for(let b=0;b<c.length;b++){const E=c[b].trim();if(!E){if(b===0||b===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(E))return!1;E.charCodeAt(E.length-1)===58?l.push(E.charCodeAt(0)===58?"center":"right"):E.charCodeAt(0)===58?l.push("left"):l.push("")}if(s=aa(e,n).trim(),s.indexOf("|")===-1||e.sCount[n]-e.blkIndent>=4)return!1;c=bv(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const f=c.length;if(f===0||f!==l.length)return!1;if(r)return!0;const d=e.parentType;e.parentType="table";const h=e.md.block.ruler.getRules("blockquote"),p=e.push("table_open","table",1),v=[n,0];p.map=v;const m=e.push("thead_open","thead",1);m.map=[n,n+1];const g=e.push("tr_open","tr",1);g.map=[n,n+1];for(let b=0;b<c.length;b++){const E=e.push("th_open","th",1);l[b]&&(E.attrs=[["style","text-align:"+l[b]]]);const A=e.push("inline","",0);A.content=c[b].trim(),A.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let _,y=0;for(i=n+2;i<t&&!(e.sCount[i]<e.blkIndent);i++){let b=!1;for(let A=0,L=h.length;A<L;A++)if(h[A](e,i,t,!0)){b=!0;break}if(b||(s=aa(e,i).trim(),!s)||e.sCount[i]-e.blkIndent>=4||(c=bv(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),y+=f-c.length,y>DC))break;if(i===n+2){const A=e.push("tbody_open","tbody",1);A.map=_=[n+2,0]}const E=e.push("tr_open","tr",1);E.map=[i,i+1];for(let A=0;A<f;A++){const L=e.push("td_open","td",1);l[A]&&(L.attrs=[["style","text-align:"+l[A]]]);const R=e.push("inline","",0);R.content=c[A]?c[A].trim():"",R.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return _&&(e.push("tbody_close","tbody",-1),_[1]=i),e.push("table_close","table",-1),v[1]=i,e.parentType=d,e.line=i,!0}function BC(e,n,t){if(e.sCount[n]-e.blkIndent<4)return!1;let r=n+1,i=r;for(;r<t;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;const o=e.push("code_block","code",0);return o.content=e.getLines(n,i,4+e.blkIndent,!1)+`
`,o.map=[n,e.line],!0}function HC(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||i+3>o)return!1;const u=e.src.charCodeAt(i);if(u!==126&&u!==96)return!1;let a=i;i=e.skipChars(i,u);let s=i-a;if(s<3)return!1;const c=e.src.slice(a,i),l=e.src.slice(i,o);if(u===96&&l.indexOf(String.fromCharCode(u))>=0)return!1;if(r)return!0;let f=n,d=!1;for(;f++,!(f>=t||(i=a=e.bMarks[f]+e.tShift[f],o=e.eMarks[f],i<o&&e.sCount[f]<e.blkIndent));)if(e.src.charCodeAt(i)===u&&!(e.sCount[f]-e.blkIndent>=4)&&(i=e.skipChars(i,u),!(i-a<s)&&(i=e.skipSpaces(i),!(i<o)))){d=!0;break}s=e.sCount[n],e.line=f+(d?1:0);const h=e.push("fence","code",0);return h.info=l,h.content=e.getLines(n+1,f,s,!0),h.markup=c,h.map=[n,e.line],!0}function UC(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];const u=e.lineMax;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;const a=[],s=[],c=[],l=[],f=e.md.block.ruler.getRules("blockquote"),d=e.parentType;e.parentType="blockquote";let h=!1,p;for(p=n;p<t;p++){const y=e.sCount[p]<e.blkIndent;if(i=e.bMarks[p]+e.tShift[p],o=e.eMarks[p],i>=o)break;if(e.src.charCodeAt(i++)===62&&!y){let E=e.sCount[p]+1,A,L;e.src.charCodeAt(i)===32?(i++,E++,L=!1,A=!0):e.src.charCodeAt(i)===9?(A=!0,(e.bsCount[p]+E)%4===3?(i++,E++,L=!1):L=!0):A=!1;let R=E;for(a.push(e.bMarks[p]),e.bMarks[p]=i;i<o;){const T=e.src.charCodeAt(i);if(Re(T))T===9?R+=4-(R+e.bsCount[p]+(L?1:0))%4:R++;else break;i++}h=i>=o,s.push(e.bsCount[p]),e.bsCount[p]=e.sCount[p]+1+(A?1:0),c.push(e.sCount[p]),e.sCount[p]=R-E,l.push(e.tShift[p]),e.tShift[p]=i-e.bMarks[p];continue}if(h)break;let b=!1;for(let E=0,A=f.length;E<A;E++)if(f[E](e,p,t,!0)){b=!0;break}if(b){e.lineMax=p,e.blkIndent!==0&&(a.push(e.bMarks[p]),s.push(e.bsCount[p]),l.push(e.tShift[p]),c.push(e.sCount[p]),e.sCount[p]-=e.blkIndent);break}a.push(e.bMarks[p]),s.push(e.bsCount[p]),l.push(e.tShift[p]),c.push(e.sCount[p]),e.sCount[p]=-1}const v=e.blkIndent;e.blkIndent=0;const m=e.push("blockquote_open","blockquote",1);m.markup=">";const g=[n,0];m.map=g,e.md.block.tokenize(e,n,p);const _=e.push("blockquote_close","blockquote",-1);_.markup=">",e.lineMax=u,e.parentType=d,g[1]=e.line;for(let y=0;y<l.length;y++)e.bMarks[y+n]=a[y],e.tShift[y+n]=l[y],e.sCount[y+n]=c[y],e.bsCount[y+n]=s[y];return e.blkIndent=v,!0}function GC(e,n,t,r){const i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let o=e.bMarks[n]+e.tShift[n];const u=e.src.charCodeAt(o++);if(u!==42&&u!==45&&u!==95)return!1;let a=1;for(;o<i;){const c=e.src.charCodeAt(o++);if(c!==u&&!Re(c))return!1;c===u&&a++}if(a<3)return!1;if(r)return!0;e.line=n+1;const s=e.push("hr","hr",0);return s.map=[n,e.line],s.markup=Array(a+1).join(String.fromCharCode(u)),!0}function yv(e,n){const t=e.eMarks[n];let r=e.bMarks[n]+e.tShift[n];const i=e.src.charCodeAt(r++);if(i!==42&&i!==45&&i!==43)return-1;if(r<t){const o=e.src.charCodeAt(r);if(!Re(o))return-1}return r}function Ev(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];let i=t;if(i+1>=r)return-1;let o=e.src.charCodeAt(i++);if(o<48||o>57)return-1;for(;;){if(i>=r)return-1;if(o=e.src.charCodeAt(i++),o>=48&&o<=57){if(i-t>=10)return-1;continue}if(o===41||o===46)break;return-1}return i<r&&(o=e.src.charCodeAt(i),!Re(o))?-1:i}function VC(e,n){const t=e.level+2;for(let r=n+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===t&&e.tokens[r].type==="paragraph_open"&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function WC(e,n,t,r){let i,o,u,a,s=n,c=!0;if(e.sCount[s]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[s]-e.listIndent>=4&&e.sCount[s]<e.blkIndent)return!1;let l=!1;r&&e.parentType==="paragraph"&&e.sCount[s]>=e.blkIndent&&(l=!0);let f,d,h;if((h=Ev(e,s))>=0){if(f=!0,u=e.bMarks[s]+e.tShift[s],d=Number(e.src.slice(u,h-1)),l&&d!==1)return!1}else if((h=yv(e,s))>=0)f=!1;else return!1;if(l&&e.skipSpaces(h)>=e.eMarks[s])return!1;if(r)return!0;const p=e.src.charCodeAt(h-1),v=e.tokens.length;f?(a=e.push("ordered_list_open","ol",1),d!==1&&(a.attrs=[["start",d]])):a=e.push("bullet_list_open","ul",1);const m=[s,0];a.map=m,a.markup=String.fromCharCode(p);let g=!1;const _=e.md.block.ruler.getRules("list"),y=e.parentType;for(e.parentType="list";s<t;){o=h,i=e.eMarks[s];const b=e.sCount[s]+h-(e.bMarks[s]+e.tShift[s]);let E=b;for(;o<i;){const P=e.src.charCodeAt(o);if(P===9)E+=4-(E+e.bsCount[s])%4;else if(P===32)E++;else break;o++}const A=o;let L;A>=i?L=1:L=E-b,L>4&&(L=1);const R=b+L;a=e.push("list_item_open","li",1),a.markup=String.fromCharCode(p);const T=[s,0];a.map=T,f&&(a.info=e.src.slice(u,h-1));const $=e.tight,w=e.tShift[s],S=e.sCount[s],I=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=R,e.tight=!0,e.tShift[s]=A-e.bMarks[s],e.sCount[s]=E,A>=i&&e.isEmpty(s+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,s,t,!0),(!e.tight||g)&&(c=!1),g=e.line-s>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=I,e.tShift[s]=w,e.sCount[s]=S,e.tight=$,a=e.push("list_item_close","li",-1),a.markup=String.fromCharCode(p),s=e.line,T[1]=s,s>=t||e.sCount[s]<e.blkIndent||e.sCount[s]-e.blkIndent>=4)break;let C=!1;for(let P=0,M=_.length;P<M;P++)if(_[P](e,s,t,!0)){C=!0;break}if(C)break;if(f){if(h=Ev(e,s),h<0)break;u=e.bMarks[s]+e.tShift[s]}else if(h=yv(e,s),h<0)break;if(p!==e.src.charCodeAt(h-1))break}return f?a=e.push("ordered_list_close","ol",-1):a=e.push("bullet_list_close","ul",-1),a.markup=String.fromCharCode(p),m[1]=s,e.line=s,e.parentType=y,c&&VC(e,v),!0}function jC(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n],u=n+1;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function a(_){const y=e.lineMax;if(_>=y||e.isEmpty(_))return null;let b=!1;if(e.sCount[_]-e.blkIndent>3&&(b=!0),e.sCount[_]<0&&(b=!0),!b){const L=e.md.block.ruler.getRules("reference"),R=e.parentType;e.parentType="reference";let T=!1;for(let $=0,w=L.length;$<w;$++)if(L[$](e,_,y,!0)){T=!0;break}if(e.parentType=R,T)return null}const E=e.bMarks[_]+e.tShift[_],A=e.eMarks[_];return e.src.slice(E,A+1)}let s=e.src.slice(i,o+1);o=s.length;let c=-1;for(i=1;i<o;i++){const _=s.charCodeAt(i);if(_===91)return!1;if(_===93){c=i;break}else if(_===10){const y=a(u);y!==null&&(s+=y,o=s.length,u++)}else if(_===92&&(i++,i<o&&s.charCodeAt(i)===10)){const y=a(u);y!==null&&(s+=y,o=s.length,u++)}}if(c<0||s.charCodeAt(c+1)!==58)return!1;for(i=c+2;i<o;i++){const _=s.charCodeAt(i);if(_===10){const y=a(u);y!==null&&(s+=y,o=s.length,u++)}else if(!Re(_))break}const l=e.md.helpers.parseLinkDestination(s,i,o);if(!l.ok)return!1;const f=e.md.normalizeLink(l.str);if(!e.md.validateLink(f))return!1;i=l.pos;const d=i,h=u,p=i;for(;i<o;i++){const _=s.charCodeAt(i);if(_===10){const y=a(u);y!==null&&(s+=y,o=s.length,u++)}else if(!Re(_))break}let v=e.md.helpers.parseLinkTitle(s,i,o);for(;v.can_continue;){const _=a(u);if(_===null)break;s+=_,i=o,o=s.length,u++,v=e.md.helpers.parseLinkTitle(s,i,o,v)}let m;for(i<o&&p!==i&&v.ok?(m=v.str,i=v.pos):(m="",i=d,u=h);i<o;){const _=s.charCodeAt(i);if(!Re(_))break;i++}if(i<o&&s.charCodeAt(i)!==10&&m)for(m="",i=d,u=h;i<o;){const _=s.charCodeAt(i);if(!Re(_))break;i++}if(i<o&&s.charCodeAt(i)!==10)return!1;const g=tu(s.slice(1,c));return g?(r||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[g]>"u"&&(e.env.references[g]={title:m,href:f}),e.line=u),!0):!1}const XC=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],YC="[a-zA-Z_:][a-zA-Z0-9:._-]*",KC="[^\"'=<>`\\x00-\\x20]+",JC="'[^']*'",zC='"[^"]*"',ZC="(?:"+KC+"|"+JC+"|"+zC+")",QC="(?:\\s+"+YC+"(?:\\s*=\\s*"+ZC+")?)",$y="<[A-Za-z][A-Za-z0-9\\-]*"+QC+"*\\s*\\/?>",Ay="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",eT="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",nT="<[?][\\s\\S]*?[?]>",tT="<![A-Za-z][^>]*>",rT="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",iT=new RegExp("^(?:"+$y+"|"+Ay+"|"+eT+"|"+nT+"|"+tT+"|"+rT+")"),oT=new RegExp("^(?:"+$y+"|"+Ay+")"),Vt=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+XC.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(oT.source+"\\s*$"),/^$/,!1]];function uT(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let u=e.src.slice(i,o),a=0;for(;a<Vt.length&&!Vt[a][0].test(u);a++);if(a===Vt.length)return!1;if(r)return Vt[a][2];let s=n+1;if(!Vt[a][1].test(u)){for(;s<t&&!(e.sCount[s]<e.blkIndent);s++)if(i=e.bMarks[s]+e.tShift[s],o=e.eMarks[s],u=e.src.slice(i,o),Vt[a][1].test(u)){u.length!==0&&s++;break}}e.line=s;const c=e.push("html_block","",0);return c.map=[n,s],c.content=e.getLines(n,s,e.blkIndent,!0),!0}function aT(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let u=e.src.charCodeAt(i);if(u!==35||i>=o)return!1;let a=1;for(u=e.src.charCodeAt(++i);u===35&&i<o&&a<=6;)a++,u=e.src.charCodeAt(++i);if(a>6||i<o&&!Re(u))return!1;if(r)return!0;o=e.skipSpacesBack(o,i);const s=e.skipCharsBack(o,35,i);s>i&&Re(e.src.charCodeAt(s-1))&&(o=s),e.line=n+1;const c=e.push("heading_open","h"+String(a),1);c.markup="########".slice(0,a),c.map=[n,e.line];const l=e.push("inline","",0);l.content=e.src.slice(i,o).trim(),l.map=[n,e.line],l.children=[];const f=e.push("heading_close","h"+String(a),-1);return f.markup="########".slice(0,a),!0}function sT(e,n,t){const r=e.md.block.ruler.getRules("paragraph");if(e.sCount[n]-e.blkIndent>=4)return!1;const i=e.parentType;e.parentType="paragraph";let o=0,u,a=n+1;for(;a<t&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3)continue;if(e.sCount[a]>=e.blkIndent){let h=e.bMarks[a]+e.tShift[a];const p=e.eMarks[a];if(h<p&&(u=e.src.charCodeAt(h),(u===45||u===61)&&(h=e.skipChars(h,u),h=e.skipSpaces(h),h>=p))){o=u===61?1:2;break}}if(e.sCount[a]<0)continue;let d=!1;for(let h=0,p=r.length;h<p;h++)if(r[h](e,a,t,!0)){d=!0;break}if(d)break}if(!o)return!1;const s=e.getLines(n,a,e.blkIndent,!1).trim();e.line=a+1;const c=e.push("heading_open","h"+String(o),1);c.markup=String.fromCharCode(u),c.map=[n,e.line];const l=e.push("inline","",0);l.content=s,l.map=[n,e.line-1],l.children=[];const f=e.push("heading_close","h"+String(o),-1);return f.markup=String.fromCharCode(u),e.parentType=i,!0}function cT(e,n,t){const r=e.md.block.ruler.getRules("paragraph"),i=e.parentType;let o=n+1;for(e.parentType="paragraph";o<t&&!e.isEmpty(o);o++){if(e.sCount[o]-e.blkIndent>3||e.sCount[o]<0)continue;let c=!1;for(let l=0,f=r.length;l<f;l++)if(r[l](e,o,t,!0)){c=!0;break}if(c)break}const u=e.getLines(n,o,e.blkIndent,!1).trim();e.line=o;const a=e.push("paragraph_open","p",1);a.map=[n,e.line];const s=e.push("inline","",0);return s.content=u,s.map=[n,e.line],s.children=[],e.push("paragraph_close","p",-1),e.parentType=i,!0}const Wi=[["table",xC,["paragraph","reference"]],["code",BC],["fence",HC,["paragraph","reference","blockquote","list"]],["blockquote",UC,["paragraph","reference","blockquote","list"]],["hr",GC,["paragraph","reference","blockquote","list"]],["list",WC,["paragraph","reference","blockquote"]],["reference",jC],["html_block",uT,["paragraph","reference","blockquote"]],["heading",aT,["paragraph","reference","blockquote"]],["lheading",sT],["paragraph",cT]];function ru(){this.ruler=new sn;for(let e=0;e<Wi.length;e++)this.ruler.push(Wi[e][0],Wi[e][1],{alt:(Wi[e][2]||[]).slice()})}ru.prototype.tokenize=function(e,n,t){const r=this.ruler.getRules(""),i=r.length,o=e.md.options.maxNesting;let u=n,a=!1;for(;u<t&&(e.line=u=e.skipEmptyLines(u),!(u>=t||e.sCount[u]<e.blkIndent));){if(e.level>=o){e.line=t;break}const s=e.line;let c=!1;for(let l=0;l<i;l++)if(c=r[l](e,u,t,!1),c){if(s>=e.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");e.tight=!a,e.isEmpty(e.line-1)&&(a=!0),u=e.line,u<t&&e.isEmpty(u)&&(a=!0,u++,e.line=u)}};ru.prototype.parse=function(e,n,t,r){if(!e)return;const i=new this.State(e,n,t,r);this.tokenize(i,i.line,i.lineMax)};ru.prototype.State=Wn;function pi(e,n,t,r){this.src=e,this.env=t,this.md=n,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}pi.prototype.pushPending=function(){const e=new Rn("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};pi.prototype.push=function(e,n,t){this.pending&&this.pushPending();const r=new Rn(e,n,t);let i=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r};pi.prototype.scanDelims=function(e,n){const t=this.posMax,r=this.src.charCodeAt(e),i=e>0?this.src.charCodeAt(e-1):32;let o=e;for(;o<t&&this.src.charCodeAt(o)===r;)o++;const u=o-e,a=o<t?this.src.charCodeAt(o):32,s=Yr(i)||Xr(String.fromCharCode(i)),c=Yr(a)||Xr(String.fromCharCode(a)),l=jr(i),f=jr(a),d=!f&&(!c||l||s),h=!l&&(!s||f||c);return{can_open:d&&(n||!h||s),can_close:h&&(n||!d||c),length:u}};pi.prototype.Token=Rn;function lT(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function fT(e,n){let t=e.pos;for(;t<e.posMax&&!lT(e.src.charCodeAt(t));)t++;return t===e.pos?!1:(n||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}const dT=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function pT(e,n){if(!e.md.options.linkify||e.linkLevel>0)return!1;const t=e.pos,r=e.posMax;if(t+3>r||e.src.charCodeAt(t)!==58||e.src.charCodeAt(t+1)!==47||e.src.charCodeAt(t+2)!==47)return!1;const i=e.pending.match(dT);if(!i)return!1;const o=i[1],u=e.md.linkify.matchAtStart(e.src.slice(t-o.length));if(!u)return!1;let a=u.url;if(a.length<=o.length)return!1;let s=a.length;for(;s>0&&a.charCodeAt(s-1)===42;)s--;s!==a.length&&(a=a.slice(0,s));const c=e.md.normalizeLink(a);if(!e.md.validateLink(c))return!1;if(!n){e.pending=e.pending.slice(0,-o.length);const l=e.push("link_open","a",1);l.attrs=[["href",c]],l.markup="linkify",l.info="auto";const f=e.push("text","",0);f.content=e.md.normalizeLinkText(a);const d=e.push("link_close","a",-1);d.markup="linkify",d.info="auto"}return e.pos+=a.length-o.length,!0}function hT(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==10)return!1;const r=e.pending.length-1,i=e.posMax;if(!n)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let o=r-1;for(;o>=1&&e.pending.charCodeAt(o-1)===32;)o--;e.pending=e.pending.slice(0,o),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(t++;t<i&&Re(e.src.charCodeAt(t));)t++;return e.pos=t,!0}const Hh=[];for(let e=0;e<256;e++)Hh.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){Hh[e.charCodeAt(0)]=1});function mT(e,n){let t=e.pos;const r=e.posMax;if(e.src.charCodeAt(t)!==92||(t++,t>=r))return!1;let i=e.src.charCodeAt(t);if(i===10){for(n||e.push("hardbreak","br",0),t++;t<r&&(i=e.src.charCodeAt(t),!!Re(i));)t++;return e.pos=t,!0}let o=e.src[t];if(i>=55296&&i<=56319&&t+1<r){const a=e.src.charCodeAt(t+1);a>=56320&&a<=57343&&(o+=e.src[t+1],t++)}const u="\\"+o;if(!n){const a=e.push("text_special","",0);i<256&&Hh[i]!==0?a.content=o:a.content=u,a.markup=u,a.info="escape"}return e.pos=t+1,!0}function vT(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==96)return!1;const i=t;t++;const o=e.posMax;for(;t<o&&e.src.charCodeAt(t)===96;)t++;const u=e.src.slice(i,t),a=u.length;if(e.backticksScanned&&(e.backticks[a]||0)<=i)return n||(e.pending+=u),e.pos+=a,!0;let s=t,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<o&&e.src.charCodeAt(s)===96;)s++;const l=s-c;if(l===a){if(!n){const f=e.push("code_inline","code",0);f.markup=u,f.content=e.src.slice(t,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=s,!0}e.backticks[l]=c}return e.backticksScanned=!0,n||(e.pending+=u),e.pos+=a,!0}function _T(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==126)return!1;const i=e.scanDelims(e.pos,!0);let o=i.length;const u=String.fromCharCode(r);if(o<2)return!1;let a;o%2&&(a=e.push("text","",0),a.content=u,o--);for(let s=0;s<o;s+=2)a=e.push("text","",0),a.content=u+u,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function wv(e,n){let t;const r=[],i=n.length;for(let o=0;o<i;o++){const u=n[o];if(u.marker!==126||u.end===-1)continue;const a=n[u.end];t=e.tokens[u.token],t.type="s_open",t.tag="s",t.nesting=1,t.markup="~~",t.content="",t=e.tokens[a.token],t.type="s_close",t.tag="s",t.nesting=-1,t.markup="~~",t.content="",e.tokens[a.token-1].type==="text"&&e.tokens[a.token-1].content==="~"&&r.push(a.token-1)}for(;r.length;){const o=r.pop();let u=o+1;for(;u<e.tokens.length&&e.tokens[u].type==="s_close";)u++;u--,o!==u&&(t=e.tokens[u],e.tokens[u]=e.tokens[o],e.tokens[o]=t)}}function gT(e){const n=e.tokens_meta,t=e.tokens_meta.length;wv(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&wv(e,n[r].delimiters)}const Ly={tokenize:_T,postProcess:gT};function bT(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==95&&r!==42)return!1;const i=e.scanDelims(e.pos,r===42);for(let o=0;o<i.length;o++){const u=e.push("text","",0);u.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function Sv(e,n){const t=n.length;for(let r=t-1;r>=0;r--){const i=n[r];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const o=n[i.end],u=r>0&&n[r-1].end===i.end+1&&n[r-1].marker===i.marker&&n[r-1].token===i.token-1&&n[i.end+1].token===o.token+1,a=String.fromCharCode(i.marker),s=e.tokens[i.token];s.type=u?"strong_open":"em_open",s.tag=u?"strong":"em",s.nesting=1,s.markup=u?a+a:a,s.content="";const c=e.tokens[o.token];c.type=u?"strong_close":"em_close",c.tag=u?"strong":"em",c.nesting=-1,c.markup=u?a+a:a,c.content="",u&&(e.tokens[n[r-1].token].content="",e.tokens[n[i.end+1].token].content="",r--)}}function yT(e){const n=e.tokens_meta,t=e.tokens_meta.length;Sv(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&Sv(e,n[r].delimiters)}const Iy={tokenize:bT,postProcess:yT};function ET(e,n){let t,r,i,o,u="",a="",s=e.pos,c=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const l=e.pos,f=e.posMax,d=e.pos+1,h=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(h<0)return!1;let p=h+1;if(p<f&&e.src.charCodeAt(p)===40){for(c=!1,p++;p<f&&(t=e.src.charCodeAt(p),!(!Re(t)&&t!==10));p++);if(p>=f)return!1;if(s=p,i=e.md.helpers.parseLinkDestination(e.src,p,e.posMax),i.ok){for(u=e.md.normalizeLink(i.str),e.md.validateLink(u)?p=i.pos:u="",s=p;p<f&&(t=e.src.charCodeAt(p),!(!Re(t)&&t!==10));p++);if(i=e.md.helpers.parseLinkTitle(e.src,p,e.posMax),p<f&&s!==p&&i.ok)for(a=i.str,p=i.pos;p<f&&(t=e.src.charCodeAt(p),!(!Re(t)&&t!==10));p++);}(p>=f||e.src.charCodeAt(p)!==41)&&(c=!0),p++}if(c){if(typeof e.env.references>"u")return!1;if(p<f&&e.src.charCodeAt(p)===91?(s=p+1,p=e.md.helpers.parseLinkLabel(e,p),p>=0?r=e.src.slice(s,p++):p=h+1):p=h+1,r||(r=e.src.slice(d,h)),o=e.env.references[tu(r)],!o)return e.pos=l,!1;u=o.href,a=o.title}if(!n){e.pos=d,e.posMax=h;const v=e.push("link_open","a",1),m=[["href",u]];v.attrs=m,a&&m.push(["title",a]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=p,e.posMax=f,!0}function wT(e,n){let t,r,i,o,u,a,s,c,l="";const f=e.pos,d=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const h=e.pos+2,p=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(p<0)return!1;if(o=p+1,o<d&&e.src.charCodeAt(o)===40){for(o++;o<d&&(t=e.src.charCodeAt(o),!(!Re(t)&&t!==10));o++);if(o>=d)return!1;for(c=o,a=e.md.helpers.parseLinkDestination(e.src,o,e.posMax),a.ok&&(l=e.md.normalizeLink(a.str),e.md.validateLink(l)?o=a.pos:l=""),c=o;o<d&&(t=e.src.charCodeAt(o),!(!Re(t)&&t!==10));o++);if(a=e.md.helpers.parseLinkTitle(e.src,o,e.posMax),o<d&&c!==o&&a.ok)for(s=a.str,o=a.pos;o<d&&(t=e.src.charCodeAt(o),!(!Re(t)&&t!==10));o++);else s="";if(o>=d||e.src.charCodeAt(o)!==41)return e.pos=f,!1;o++}else{if(typeof e.env.references>"u")return!1;if(o<d&&e.src.charCodeAt(o)===91?(c=o+1,o=e.md.helpers.parseLinkLabel(e,o),o>=0?i=e.src.slice(c,o++):o=p+1):o=p+1,i||(i=e.src.slice(h,p)),u=e.env.references[tu(i)],!u)return e.pos=f,!1;l=u.href,s=u.title}if(!n){r=e.src.slice(h,p);const v=[];e.md.inline.parse(r,e.md,e.env,v);const m=e.push("image","img",0),g=[["src",l],["alt",""]];m.attrs=g,m.children=v,m.content=r,s&&g.push(["title",s])}return e.pos=o,e.posMax=d,!0}const ST=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,$T=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function AT(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==60)return!1;const r=e.pos,i=e.posMax;for(;;){if(++t>=i)return!1;const u=e.src.charCodeAt(t);if(u===60)return!1;if(u===62)break}const o=e.src.slice(r+1,t);if($T.test(o)){const u=e.md.normalizeLink(o);if(!e.md.validateLink(u))return!1;if(!n){const a=e.push("link_open","a",1);a.attrs=[["href",u]],a.markup="autolink",a.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(o);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=o.length+2,!0}if(ST.test(o)){const u=e.md.normalizeLink("mailto:"+o);if(!e.md.validateLink(u))return!1;if(!n){const a=e.push("link_open","a",1);a.attrs=[["href",u]],a.markup="autolink",a.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(o);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=o.length+2,!0}return!1}function LT(e){return/^<a[>\s]/i.test(e)}function IT(e){return/^<\/a\s*>/i.test(e)}function CT(e){const n=e|32;return n>=97&&n<=122}function TT(e,n){if(!e.md.options.html)return!1;const t=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=t)return!1;const i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!CT(i))return!1;const o=e.src.slice(r).match(iT);if(!o)return!1;if(!n){const u=e.push("html_inline","",0);u.content=o[0],LT(u.content)&&e.linkLevel++,IT(u.content)&&e.linkLevel--}return e.pos+=o[0].length,!0}const RT=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,kT=/^&([a-z][a-z0-9]{1,31});/i;function NT(e,n){const t=e.pos,r=e.posMax;if(e.src.charCodeAt(t)!==38||t+1>=r)return!1;if(e.src.charCodeAt(t+1)===35){const o=e.src.slice(t).match(RT);if(o){if(!n){const u=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),a=e.push("text_special","",0);a.content=xh(u)?bo(u):bo(65533),a.markup=o[0],a.info="entity"}return e.pos+=o[0].length,!0}}else{const o=e.src.slice(t).match(kT);if(o){const u=by(o[0]);if(u!==o[0]){if(!n){const a=e.push("text_special","",0);a.content=u,a.markup=o[0],a.info="entity"}return e.pos+=o[0].length,!0}}}return!1}function $v(e){const n={},t=e.length;if(!t)return;let r=0,i=-2;const o=[];for(let u=0;u<t;u++){const a=e[u];if(o.push(0),(e[r].marker!==a.marker||i!==a.token-1)&&(r=u),i=a.token,a.length=a.length||0,!a.close)continue;n.hasOwnProperty(a.marker)||(n[a.marker]=[-1,-1,-1,-1,-1,-1]);const s=n[a.marker][(a.open?3:0)+a.length%3];let c=r-o[r]-1,l=c;for(;c>s;c-=o[c]+1){const f=e[c];if(f.marker===a.marker&&f.open&&f.end<0){let d=!1;if((f.close||a.open)&&(f.length+a.length)%3===0&&(f.length%3!==0||a.length%3!==0)&&(d=!0),!d){const h=c>0&&!e[c-1].open?o[c-1]+1:0;o[u]=u-c+h,o[c]=h,a.open=!1,f.end=u,f.close=!1,l=-1,i=-2;break}}}l!==-1&&(n[a.marker][(a.open?3:0)+(a.length||0)%3]=l)}}function MT(e){const n=e.tokens_meta,t=e.tokens_meta.length;$v(e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&$v(n[r].delimiters)}function OT(e){let n,t,r=0;const i=e.tokens,o=e.tokens.length;for(n=t=0;n<o;n++)i[n].nesting<0&&r--,i[n].level=r,i[n].nesting>0&&r++,i[n].type==="text"&&n+1<o&&i[n+1].type==="text"?i[n+1].content=i[n].content+i[n+1].content:(n!==t&&(i[t]=i[n]),t++);n!==t&&(i.length=t)}const sa=[["text",fT],["linkify",pT],["newline",hT],["escape",mT],["backticks",vT],["strikethrough",Ly.tokenize],["emphasis",Iy.tokenize],["link",ET],["image",wT],["autolink",AT],["html_inline",TT],["entity",NT]],ca=[["balance_pairs",MT],["strikethrough",Ly.postProcess],["emphasis",Iy.postProcess],["fragments_join",OT]];function hi(){this.ruler=new sn;for(let e=0;e<sa.length;e++)this.ruler.push(sa[e][0],sa[e][1]);this.ruler2=new sn;for(let e=0;e<ca.length;e++)this.ruler2.push(ca[e][0],ca[e][1])}hi.prototype.skipToken=function(e){const n=e.pos,t=this.ruler.getRules(""),r=t.length,i=e.md.options.maxNesting,o=e.cache;if(typeof o[n]<"u"){e.pos=o[n];return}let u=!1;if(e.level<i){for(let a=0;a<r;a++)if(e.level++,u=t[a](e,!0),e.level--,u){if(n>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;u||e.pos++,o[n]=e.pos};hi.prototype.tokenize=function(e){const n=this.ruler.getRules(""),t=n.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){const o=e.pos;let u=!1;if(e.level<i){for(let a=0;a<t;a++)if(u=n[a](e,!1),u){if(o>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(u){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};hi.prototype.parse=function(e,n,t,r){const i=new this.State(e,n,t,r);this.tokenize(i);const o=this.ruler2.getRules(""),u=o.length;for(let a=0;a<u;a++)o[a](i)};hi.prototype.State=pi;function qT(e){const n={};e=e||{},n.src_Any=hy.source,n.src_Cc=my.source,n.src_Z=_y.source,n.src_P=Fh.source,n.src_ZPCc=[n.src_Z,n.src_P,n.src_Cc].join("|"),n.src_ZCc=[n.src_Z,n.src_Cc].join("|");const t="[><｜]";return n.src_pseudo_letter="(?:(?!"+t+"|"+n.src_ZPCc+")"+n.src_Any+")",n.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",n.src_auth="(?:(?:(?!"+n.src_ZCc+"|[@/\\[\\]()]).)+@)?",n.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",n.src_host_terminator="(?=$|"+t+"|"+n.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+n.src_ZPCc+"))",n.src_path="(?:[/?#](?:(?!"+n.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+n.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+n.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+n.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+n.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+n.src_ZCc+"|[']).)+\\'|\\'(?="+n.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+n.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+n.src_ZCc+"|$)|;(?!"+n.src_ZCc+"|$)|\\!+(?!"+n.src_ZCc+"|[!]|$)|\\?(?!"+n.src_ZCc+"|[?]|$))+|\\/)?",n.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',n.src_xn="xn--[a-z0-9\\-]{1,59}",n.src_domain_root="(?:"+n.src_xn+"|"+n.src_pseudo_letter+"{1,63})",n.src_domain="(?:"+n.src_xn+"|(?:"+n.src_pseudo_letter+")|(?:"+n.src_pseudo_letter+"(?:-|"+n.src_pseudo_letter+"){0,61}"+n.src_pseudo_letter+"))",n.src_host="(?:(?:(?:(?:"+n.src_domain+")\\.)*"+n.src_domain+"))",n.tpl_host_fuzzy="(?:"+n.src_ip4+"|(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%)))",n.tpl_host_no_ip_fuzzy="(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%))",n.src_host_strict=n.src_host+n.src_host_terminator,n.tpl_host_fuzzy_strict=n.tpl_host_fuzzy+n.src_host_terminator,n.src_host_port_strict=n.src_host+n.src_port+n.src_host_terminator,n.tpl_host_port_fuzzy_strict=n.tpl_host_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_port_no_ip_fuzzy_strict=n.tpl_host_no_ip_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+n.src_ZPCc+"|>|$))",n.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+n.src_ZCc+")("+n.src_email_name+"@"+n.tpl_host_fuzzy_strict+")",n.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+n.src_ZPCc+"))((?![$+<=>^`|｜])"+n.tpl_host_port_fuzzy_strict+n.src_path+")",n.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+n.src_ZPCc+"))((?![$+<=>^`|｜])"+n.tpl_host_port_no_ip_fuzzy_strict+n.src_path+")",n}function eh(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(r){e[r]=t[r]})}),e}function iu(e){return Object.prototype.toString.call(e)}function PT(e){return iu(e)==="[object String]"}function FT(e){return iu(e)==="[object Object]"}function DT(e){return iu(e)==="[object RegExp]"}function Av(e){return iu(e)==="[object Function]"}function xT(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const Cy={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function BT(e){return Object.keys(e||{}).reduce(function(n,t){return n||Cy.hasOwnProperty(t)},!1)}const HT={"http:":{validate:function(e,n,t){const r=e.slice(n);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(r)?r.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,n,t){const r=e.slice(n);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(r)?n>=3&&e[n-3]===":"||n>=3&&e[n-3]==="/"?0:r.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,n,t){const r=e.slice(n);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(r)?r.match(t.re.mailto)[0].length:0}}},UT="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",GT="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function VT(e){e.__index__=-1,e.__text_cache__=""}function WT(e){return function(n,t){const r=n.slice(t);return e.test(r)?r.match(e)[0].length:0}}function Lv(){return function(e,n){n.normalize(e)}}function yo(e){const n=e.re=qT(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push(UT),t.push(n.src_xn),n.src_tlds=t.join("|");function r(a){return a.replace("%TLDS%",n.src_tlds)}n.email_fuzzy=RegExp(r(n.tpl_email_fuzzy),"i"),n.link_fuzzy=RegExp(r(n.tpl_link_fuzzy),"i"),n.link_no_ip_fuzzy=RegExp(r(n.tpl_link_no_ip_fuzzy),"i"),n.host_fuzzy_test=RegExp(r(n.tpl_host_fuzzy_test),"i");const i=[];e.__compiled__={};function o(a,s){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+s)}Object.keys(e.__schemas__).forEach(function(a){const s=e.__schemas__[a];if(s===null)return;const c={validate:null,link:null};if(e.__compiled__[a]=c,FT(s)){DT(s.validate)?c.validate=WT(s.validate):Av(s.validate)?c.validate=s.validate:o(a,s),Av(s.normalize)?c.normalize=s.normalize:s.normalize?o(a,s):c.normalize=Lv();return}if(PT(s)){i.push(a);return}o(a,s)}),i.forEach(function(a){e.__compiled__[e.__schemas__[a]]&&(e.__compiled__[a].validate=e.__compiled__[e.__schemas__[a]].validate,e.__compiled__[a].normalize=e.__compiled__[e.__schemas__[a]].normalize)}),e.__compiled__[""]={validate:null,normalize:Lv()};const u=Object.keys(e.__compiled__).filter(function(a){return a.length>0&&e.__compiled__[a]}).map(xT).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+n.src_ZPCc+"))("+u+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+n.src_ZPCc+"))("+u+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),VT(e)}function jT(e,n){const t=e.__index__,r=e.__last_index__,i=e.__text_cache__.slice(t,r);this.schema=e.__schema__.toLowerCase(),this.index=t+n,this.lastIndex=r+n,this.raw=i,this.text=i,this.url=i}function nh(e,n){const t=new jT(e,n);return e.__compiled__[t.schema].normalize(t,e),t}function mn(e,n){if(!(this instanceof mn))return new mn(e,n);n||BT(e)&&(n=e,e={}),this.__opts__=eh({},Cy,n),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=eh({},HT,e),this.__compiled__={},this.__tlds__=GT,this.__tlds_replaced__=!1,this.re={},yo(this)}mn.prototype.add=function(n,t){return this.__schemas__[n]=t,yo(this),this};mn.prototype.set=function(n){return this.__opts__=eh(this.__opts__,n),this};mn.prototype.test=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return!1;let t,r,i,o,u,a,s,c,l;if(this.re.schema_test.test(n)){for(s=this.re.schema_search,s.lastIndex=0;(t=s.exec(n))!==null;)if(o=this.testSchemaAt(n,t[2],s.lastIndex),o){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+o;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=n.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(r=n.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(u=r.index+r[1].length,(this.__index__<0||u<this.__index__)&&(this.__schema__="",this.__index__=u,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(l=n.indexOf("@"),l>=0&&(i=n.match(this.re.email_fuzzy))!==null&&(u=i.index+i[1].length,a=i.index+i[0].length,(this.__index__<0||u<this.__index__||u===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=u,this.__last_index__=a))),this.__index__>=0};mn.prototype.pretest=function(n){return this.re.pretest.test(n)};mn.prototype.testSchemaAt=function(n,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(n,r,this):0};mn.prototype.match=function(n){const t=[];let r=0;this.__index__>=0&&this.__text_cache__===n&&(t.push(nh(this,r)),r=this.__last_index__);let i=r?n.slice(r):n;for(;this.test(i);)t.push(nh(this,r)),i=i.slice(this.__last_index__),r+=this.__last_index__;return t.length?t:null};mn.prototype.matchAtStart=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return null;const t=this.re.schema_at_start.exec(n);if(!t)return null;const r=this.testSchemaAt(n,t[2],t[0].length);return r?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+r,nh(this,0)):null};mn.prototype.tlds=function(n,t){return n=Array.isArray(n)?n:[n],t?(this.__tlds__=this.__tlds__.concat(n).sort().filter(function(r,i,o){return r!==o[i-1]}).reverse(),yo(this),this):(this.__tlds__=n.slice(),this.__tlds_replaced__=!0,yo(this),this)};mn.prototype.normalize=function(n){n.schema||(n.url="http://"+n.url),n.schema==="mailto:"&&!/^mailto:/i.test(n.url)&&(n.url="mailto:"+n.url)};mn.prototype.onCompile=function(){};const Xt=2147483647,Dn=36,Uh=1,Kr=26,XT=38,YT=700,Ty=72,Ry=128,ky="-",KT=/^xn--/,JT=/[^\0-\x7F]/,zT=/[\x2E\u3002\uFF0E\uFF61]/g,ZT={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},la=Dn-Uh,xn=Math.floor,fa=String.fromCharCode;function ft(e){throw new RangeError(ZT[e])}function QT(e,n){const t=[];let r=e.length;for(;r--;)t[r]=n(e[r]);return t}function Ny(e,n){const t=e.split("@");let r="";t.length>1&&(r=t[0]+"@",e=t[1]),e=e.replace(zT,".");const i=e.split("."),o=QT(i,n).join(".");return r+o}function My(e){const n=[];let t=0;const r=e.length;for(;t<r;){const i=e.charCodeAt(t++);if(i>=55296&&i<=56319&&t<r){const o=e.charCodeAt(t++);(o&64512)==56320?n.push(((i&1023)<<10)+(o&1023)+65536):(n.push(i),t--)}else n.push(i)}return n}const eR=e=>String.fromCodePoint(...e),nR=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:Dn},Iv=function(e,n){return e+22+75*(e<26)-((n!=0)<<5)},Oy=function(e,n,t){let r=0;for(e=t?xn(e/YT):e>>1,e+=xn(e/n);e>la*Kr>>1;r+=Dn)e=xn(e/la);return xn(r+(la+1)*e/(e+XT))},qy=function(e){const n=[],t=e.length;let r=0,i=Ry,o=Ty,u=e.lastIndexOf(ky);u<0&&(u=0);for(let a=0;a<u;++a)e.charCodeAt(a)>=128&&ft("not-basic"),n.push(e.charCodeAt(a));for(let a=u>0?u+1:0;a<t;){const s=r;for(let l=1,f=Dn;;f+=Dn){a>=t&&ft("invalid-input");const d=nR(e.charCodeAt(a++));d>=Dn&&ft("invalid-input"),d>xn((Xt-r)/l)&&ft("overflow"),r+=d*l;const h=f<=o?Uh:f>=o+Kr?Kr:f-o;if(d<h)break;const p=Dn-h;l>xn(Xt/p)&&ft("overflow"),l*=p}const c=n.length+1;o=Oy(r-s,c,s==0),xn(r/c)>Xt-i&&ft("overflow"),i+=xn(r/c),r%=c,n.splice(r++,0,i)}return String.fromCodePoint(...n)},Py=function(e){const n=[];e=My(e);const t=e.length;let r=Ry,i=0,o=Ty;for(const s of e)s<128&&n.push(fa(s));const u=n.length;let a=u;for(u&&n.push(ky);a<t;){let s=Xt;for(const l of e)l>=r&&l<s&&(s=l);const c=a+1;s-r>xn((Xt-i)/c)&&ft("overflow"),i+=(s-r)*c,r=s;for(const l of e)if(l<r&&++i>Xt&&ft("overflow"),l===r){let f=i;for(let d=Dn;;d+=Dn){const h=d<=o?Uh:d>=o+Kr?Kr:d-o;if(f<h)break;const p=f-h,v=Dn-h;n.push(fa(Iv(h+p%v,0))),f=xn(p/v)}n.push(fa(Iv(f,0))),o=Oy(i,c,a===u),i=0,++a}++i,++r}return n.join("")},tR=function(e){return Ny(e,function(n){return KT.test(n)?qy(n.slice(4).toLowerCase()):n})},rR=function(e){return Ny(e,function(n){return JT.test(n)?"xn--"+Py(n):n})},Fy={version:"2.3.1",ucs2:{decode:My,encode:eR},decode:qy,encode:Py,toASCII:rR,toUnicode:tR},iR={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},oR={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},uR={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},aR={default:iR,zero:oR,commonmark:uR},sR=/^(vbscript|javascript|file|data):/,cR=/^data:image\/(gif|png|jpeg|webp);/;function lR(e){const n=e.trim().toLowerCase();return sR.test(n)?cR.test(n):!0}const Dy=["http:","https:","mailto:"];function fR(e){const n=Ph(e,!0);if(n.hostname&&(!n.protocol||Dy.indexOf(n.protocol)>=0))try{n.hostname=Fy.toASCII(n.hostname)}catch{}return di(qh(n))}function dR(e){const n=Ph(e,!0);if(n.hostname&&(!n.protocol||Dy.indexOf(n.protocol)>=0))try{n.hostname=Fy.toUnicode(n.hostname)}catch{}return Zt(qh(n),Zt.defaultChars+"%")}function vn(e,n){if(!(this instanceof vn))return new vn(e,n);n||Dh(e)||(n=e||{},e="default"),this.inline=new hi,this.block=new ru,this.core=new Bh,this.renderer=new lr,this.linkify=new mn,this.validateLink=lR,this.normalizeLink=fR,this.normalizeLinkText=dR,this.utils=hC,this.helpers=nu({},gC),this.options={},this.configure(e),n&&this.set(n)}vn.prototype.set=function(e){return nu(this.options,e),this};vn.prototype.configure=function(e){const n=this;if(Dh(e)){const t=e;if(e=aR[t],!e)throw new Error('Wrong `markdown-it` preset "'+t+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach(function(t){e.components[t].rules&&n[t].ruler.enableOnly(e.components[t].rules),e.components[t].rules2&&n[t].ruler2.enableOnly(e.components[t].rules2)}),this};vn.prototype.enable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){t=t.concat(this[i].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));const r=e.filter(function(i){return t.indexOf(i)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};vn.prototype.disable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){t=t.concat(this[i].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));const r=e.filter(function(i){return t.indexOf(i)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};vn.prototype.use=function(e){const n=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,n),this};vn.prototype.parse=function(e,n){if(typeof e!="string")throw new Error("Input data should be a String");const t=new this.core.State(e,this,n);return this.core.process(t),t.tokens};vn.prototype.render=function(e,n){return n=n||{},this.renderer.render(this.parse(e,n),this.options,n)};vn.prototype.parseInline=function(e,n){const t=new this.core.State(e,this,n);return t.inlineMode=!0,this.core.process(t),t.tokens};vn.prototype.renderInline=function(e,n){return n=n||{},this.renderer.render(this.parseInline(e,n),this.options,n)};const xy="text-paragraph",Gh="text-blockquote",By="text-list",Hy="text-ordered-list",Uy="text-list-item",pR="prose-link",hR=["paragraph","list","blockquote","newline","emphasis","html_inline","text","balance_pairs","fragments_join","text_join"],mR="prose_link",Cv=new RegExp(uy.source,"y");function vR(e,n){if(e.src.charCodeAt(e.pos)!==91)return!1;Cv.lastIndex=e.pos;const t=Cv.exec(e.src);if(t===null)return!1;const[r,i,o]=t;if(i===void 0||o===void 0)throw new Error("prose markdown: MD_LINK_RE lost a capture group");if(!n){const u=e.push("link_open","a",1);u.attrs=[["href",o]];const a=e.push("text","",0);a.content=i,e.push("link_close","a",-1)}return e.pos+=r.length,!0}const Gy=new vn("zero",{html:!0,breaks:!0,linkify:!1}).enable([...hR]);Gy.inline.ruler.push(mR,vR);function _R(e,n){const t=Gy.parse(e,{});return gR(t,n)}function gR(e,n){return bR(e,n),eo(e,0,e.length,!0)}function bR(e,n){for(const t of e)if(t.type==="inline"&&t.children)for(const r of t.children)r.type==="text"&&(r.type="html_inline",r.content=r.content===""?"":n(r.content))}function mt(e,n){const t=e[n];if(t===void 0)throw new Error(`prose markdown: token index ${n} out of range`);return t}function ji(e,n,t){let r=0;for(let i=n;i<t;i++)if(r+=mt(e,i).nesting,r===0)return i;throw new Error(`prose markdown: unclosed ${mt(e,n).type} at token ${n}`)}function yR(e,n,t){return t-n===3&&mt(e,n).type==="paragraph_open"&&mt(e,n+1).type==="inline"&&mt(e,n+2).type==="paragraph_close"}function eo(e,n,t,r){if(r&&yR(e,n,t))return Tv(mt(e,n+1));let i="",o=n;for(;o<t;){const u=mt(e,o);switch(u.type){case"paragraph_open":{const a=ji(e,o,t),s=mt(e,o+1);if(a!==o+2||s.type!=="inline")throw new Error("prose markdown: paragraph without a single inline child");const c=Tv(s);i+=u.hidden?c:`<span class="${xy}">${c}</span>`,o=a+1;break}case"blockquote_open":{const a=ji(e,o,t);i+=`<span class="${Gh}">`+eo(e,o+1,a,!0)+"</span>",o=a+1;break}case"bullet_list_open":case"ordered_list_open":{const a=ji(e,o,t);i+=ER(u)+eo(e,o+1,a,!1)+"</span>",o=a+1;break}case"list_item_open":{const a=ji(e,o,t);i+=`<span class="${Uy}">`+eo(e,o+1,a,!1)+"</span>",o=a+1;break}default:throw new Error(`prose markdown: unsupported block token '${u.type}'`)}}return i}function ER(e){if(e.type==="bullet_list_open")return`<span class="${By}">`;const n=e.attrGet("start"),t=n===null?"":` style="counter-reset: list-item ${Number(n)-1}"`;return`<span class="${Hy}"${t}>`}function Tv(e){let n="";for(const t of e.children??[])switch(t.type){case"html_inline":n+=t.content;break;case"softbreak":case"hardbreak":n+="<br>";break;case"strong_open":n+="<strong>";break;case"strong_close":n+="</strong>";break;case"em_open":case"em_close":n+=t.markup;break;case"link_open":{const r=t.attrGet("href")??"";n+=`<a class="${pR}" href="${ae(r)}" target="_blank" rel="noopener">`;break}case"link_close":n+="</a>";break;default:throw new Error(`prose markdown: unsupported inline token '${t.type}'`)}return n}const wR="inline-note-ref",Vy="inline-note-popover-trigger",Wy="data-popover-inline-body";function SR(e){return encodeURIComponent(e)}function $R(e){return decodeURIComponent(e)}function AR(e){return av.lastIndex=0,e.replace(av,(n,t)=>{const r=ae(SR(t));return`<sup class="${wR}"><button type="button" class="${Vy}" ${Wy}="${r}" aria-label="Show note" aria-expanded="false"></button></sup>`})}const LR=2,IR="&nbsp;".repeat(LR),jy="framing-slot",Xy="data-framing-anchor";function mi(e,n){return e.jprobInstance.framing_static_anchor_ids().has(n)?`<div class="${jy}" ${Xy}="${ae(n)}"></div>`:""}const Yy="bare-id-label";function Ky(e,n){return e.showBareIds??!1?`<span class="${Yy}">${X(n)}</span>`:""}function CR(e,n){return`<span class="${Yy}" id="${ae(n)}">${X(e)}</span>`}const TR="❝",Mr="srcquote-widget",no="srcquote-glyph",RR="srcquote-popover",kR="srcquote-attribution",NR="srcquotes-inline",MR={atStart:"",atEnd:""};function Jy(e,n){return Ee(e.defn,n)+`<span class="${kR}">— ${X(e.attribution)}</span>`}function OR(e){const n=ae(ny({kind:"sourcequote",sourcequoteIds:e}));return`<span class="${Mr}"><button class="${no}" type="button" aria-expanded="false" ${mo}="${n}" aria-label="Source quotes">${TR}</button></span>`}function qR(e,n){return e.map(t=>Jy(t,n)).join("")}function PR(e,n){const t=e.map(r=>Jy(r,n));return`<span class="${NR}">${t.join("")}</span>`}function Tn(e,n){var t;if(!e||e.length===0)return MR;for(const r of e)(t=n.renderedSrcquoteIds)==null||t.add(r);if(n.srcquotesInlined??!1){const r=n.jprobInstance.resolve_srcquotes(e);return{atStart:"",atEnd:PR(r,n)}}return{atStart:OR(e),atEnd:""}}const FR=!0;function Pr(e,n,t){var r;return((r=e==null?void 0:e[n])==null?void 0:r[t])??FR}function Ee(e,n){const t=$I(e,n.jprobInstance),r=LI(n.jprobInstance),i=n.popoverAllRefs?{popoverAllRefs:!0}:void 0;return _R(t,u=>{let a=II(u,r);return a=sI(a,n.refLookup,i,n.unresolvedRefs),a=AR(a),a})}function DR(e,n){return e.get_isym(n).longname??n}function xR(e){return e.startsWith("isym:")?e.slice(5):e}function BR(e,n){return e.get_isym(n).kind}function HR(e,n){const t=pI[BR(e,n)];let r=`${n} : ${t}`;const i=DR(e,n);return i&&n!==i&&(r+=`${IR}(aka ${i})`),r}function UR(e){if(!e.args||e.args.length===0)return e.id.slice(11);const n=e.id.slice(11),t=e.args.map(r=>`<i>${typeof r=="string"?r:r.name}</i>`);return`${n}(${t.join(", ")})`}function GR(e){const n=[];for(const t of e.jprobInstance.definedSym){if(t.always_inline)continue;const r=e.jprobInstance.get_display_definedSym_or_none(t.id);if(!r)continue;const o=`defsym-${t.id.slice(11)}`,u=UR(t),a=Ee(r,e),c=[`<h3>${`${u} ≔ ${a}`}</h3>`],l=Tn(t.srcquotes,e);t.defn?c.push(`<p class="definition">${l.atStart}${Ee(t.defn,e)}${l.atEnd}</p>`):(l.atStart||l.atEnd)&&c.push(`<p class="definition">${l.atStart}${l.atEnd}</p>`),c.push(mi(e,t.id)),n.push(`<div class="defsym-card" id="${o}">${c.join("")}</div>`)}return n.join("")}function VR(e){const n=Rh(e.jprobInstance);if(!n.length)return"";const t=[];for(const r of n){const i=Tn(e.jprobInstance.get_textdefn(r.id).srcquotes,e);t.push(`<dt id="${r.anchorId}">${r.displayTerm}</dt><dd>${i.atStart}${Ee(r.defn,e)}${i.atEnd}${mi(e,`textdefn:${r.bareName}`)}</dd>`)}return`<dl class="definitions">${t.join("")}</dl>`}function WR(e){const n=e.jprobInstance.isym_entries();if(!n.length)return"";const t=[];for(const r of n){const i=xR(r.id);if(e.jprobInstance.can_consolidate_isym_svar(`isym:${i}`))continue;const o=[];o.push(`<h3>${HR(e.jprobInstance,i)}</h3>`);const u=Tn(r.srcquotes,e);o.push(`<p class="definition">${u.atStart}${Ee(r.defn,e)}${u.atEnd}</p>`);const a=(r.pos??[]).filter(f=>cv(f.classification,e.showTypical)),s=(r.neg??[]).filter(f=>cv(f.classification,e.showTypical)),c=Pr(e.exampleFoldState,i,"pos"),l=Pr(e.exampleFoldState,i,"neg");if(a.length>0||s.length>0){const f=[];a.length>0&&f.push(`<button class="ex-btn pos${c?" active":""}" data-isym="${i}" data-type="pos" title="Satisfying examples">+</button>`),s.length>0&&f.push(`<button class="ex-btn neg${l?" active":""}" data-isym="${i}" data-type="neg" title="Falsifying examples">&minus;</button>`),o.push(`<div class="example-controls">${f.join("")}</div>`)}if(a.length>0){const f=a.map(d=>{const h=d.alias?` id="ex-${d.alias}"`:"",p=e.showExampleClassification?`<span class="classification">${d.classification.charAt(0).toUpperCase()+d.classification.slice(1)}:</span> `:"",v=Tn(d.srcquotes,e);return`<li${h}>${p}${v.atStart}${Ee(d.defn,e)}${v.atEnd}</li>`});o.push(`<div class="examples pos${c?" visible":""}"><p>Satisfying examples:</p><ul>${f.join("")}</ul></div>`)}if(s.length>0){const f=s.map(d=>{const h=d.alias?` id="ex-${d.alias}"`:"",p=e.showExampleClassification?`<span class="classification">${d.classification.charAt(0).toUpperCase()+d.classification.slice(1)}:</span> `:"",v=Tn(d.srcquotes,e);return`<li${h}>${p}${v.atStart}${Ee(d.defn,e)}${v.atEnd}</li>`});o.push(`<div class="examples neg${l?" visible":""}"><p>Falsifying examples:</p><ul>${f.join("")}</ul></div>`)}o.push(mi(e,`isym:${i}`)),t.push(`<div class="isym-card" id="isym-${i}">${o.join("")}</div>`)}return t.join("")}function da(e,{classification:n}){const t=[];for(const r of e.jprobInstance.get_axioms_in_display_section(n)){const i=e.jprobInstance.get_display_ax(r.id);if(!i)continue;const o=Wr(r.id),u=r.defn?`<div class="ax-defn">${Ee(r.defn,e)}</div>`:"",a=mi(e,r.id),s=Tn(r.srcquotes,e);t.push(`<div class="ax-card" id="${kh}${o}">`+Ky(e,o)+`<div class="ax-expr">${s.atStart}${Ee(i,e)}</div>${u}${s.atEnd}${a}</div>`)}return t.length===0?"":`<div class="axioms">${t.join("")}</div>`}function jR(e){const n=[],t=ay(e.jprobInstance),r=bI(e.jprobInstance,t);for(const i of t){const o=r.get(i),u=eu(i);n.push(`<div class="formula" id="form-${u}">`+Ky(e,u)+Ee(o,e)+mi(e,i)+"</div>")}return n.join("")}const XR=[{id:"symbolMnames",description:"Long symbol names",type:"boolean",default:!1},{id:"popoverAllRefs",description:"Popovers for all refs",type:"boolean",default:!0},{id:"persistentPopovers",description:"Persistent popovers (multiple, Esc to close)",type:"boolean",default:!0},{id:"inputMode",description:"Response type",type:"enum",values:["point","bounds","sample"],default:"sample"},{id:"probAsOdds",description:"Stats display",type:"enum",values:["probability","odds"],default:"probability"},{id:"showExampleClassification",description:"Show example classifications",type:"boolean",default:!0},{id:"showGlobalExampleControls",description:"Global example folding controls",type:"boolean",default:!1},{id:"showFramingNotes",description:"Show framing notes",type:"boolean",default:!0},{id:"longTextAbbrev",description:"Abbreviate long text",type:"boolean",default:!0},{id:"longTextAbbrevThreshold",description:"Abbreviation soft threshold",type:"integer",default:800,min:25,step:25},{id:"mcItersInitialPerPlot",description:"MC iters per plot (initial)",type:"integer",default:1e4,min:1e3,step:1e3},{id:"mcItersPerClickPerPlot",description:"MC iters per plot (+ click)",type:"integer",default:5e3,min:1e3,step:1e3},{id:"plaincodeEvalTimeoutMs",description:"Code eval timeout (ms)",type:"integer",default:5e3,min:1e3,step:1e3}],YR={options:XR},Vh=YR.options,KR=new Map(Vh.map(e=>[e.id,e.description]));function Jr(e){return KR.get(e)??e}const pa=Object.freeze(Vh.reduce((e,n)=>(e[n.id]=n.default,e),{})),zy="global_options";function cn(){try{const e=localStorage.getItem(zy);if(e===null)return{...pa};const n=JSON.parse(e);return{...pa,...n}}catch{return{...pa}}}function JR(e){localStorage.setItem(zy,JSON.stringify(e))}function ou(e,n){const t=cn();t[e]=n,JR(t)}const zR=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ZR=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);function Mn(e,n){return e>>>n|e<<32-n}function Zy(e){const n=new TextEncoder().encode(e),t=n.length<<3>>>0,r=Math.floor(n.length/536870912),i=n.length+9+63&-64,o=new Uint8Array(i);o.set(n),o[n.length]=128;const u=new DataView(o.buffer);u.setUint32(i-8,r),u.setUint32(i-4,t);const a=new Uint32Array(ZR),s=new Uint32Array(64);for(let l=0;l<i;l+=64){for(let y=0;y<16;y++)s[y]=u.getUint32(l+y*4);for(let y=16;y<64;y++){const b=s[y-15],E=s[y-2],A=Mn(b,7)^Mn(b,18)^b>>>3,L=Mn(E,17)^Mn(E,19)^E>>>10;s[y]=s[y-16]+A+s[y-7]+L|0}let f=a[0],d=a[1],h=a[2],p=a[3],v=a[4],m=a[5],g=a[6],_=a[7];for(let y=0;y<64;y++){const b=Mn(v,6)^Mn(v,11)^Mn(v,25),E=v&m^~v&g,A=_+b+E+zR[y]+s[y]|0,L=Mn(f,2)^Mn(f,13)^Mn(f,22),R=f&d^f&h^d&h,T=L+R|0;_=g,g=m,m=v,v=p+A|0,p=h,h=d,d=f,f=A+T|0}a[0]=a[0]+f|0,a[1]=a[1]+d|0,a[2]=a[2]+h|0,a[3]=a[3]+p|0,a[4]=a[4]+v|0,a[5]=a[5]+m|0,a[6]=a[6]+g|0,a[7]=a[7]+_|0}let c="";for(let l=0;l<8;l++)c+=(a[l]>>>0).toString(16).padStart(8,"0");return c}const Qy=5;function Rv(e){const n={};for(const t of Object.keys(e).sort())n[t]=e[t];return n}function QR(e){return Zy(JSON.stringify(e)).slice(0,Qy)}function eE(e,n,t,r){const i=[n,Rv(t)];return e==="plainnum"&&i.push(Rv(r??{})),Zy(JSON.stringify(i)).slice(0,Qy)}const gn="0",vt="1",nE=["plaincode","plainnum"];function tE(e,n){return n==="plainnum"?e.adhocPlainnumEntries:e.adhocPlaincodeEntries}function ek(e,n,t){return n==="plainnum"?e.plainnum[t.resultIndex]:e.plaincode[t.resultIndex]}function nk(e){const n=Object.keys(e.reasoning_response).some(o=>e.reasoning_response[o]!==""),t=e.misc_response!=="",r=e.trial_choices!==void 0&&Object.keys(e.trial_choices).length>0;if(!n&&!t&&!r)return[];const i={};return n&&(i.reasoning=e.reasoning_response),t&&(i.misc=e.misc_response),r&&(i.trial_choices=e.trial_choices),[i]}function vi(e){if(e.count!==1)throw new Error(`Plaincode record "${e.label}" has count ${e.count}; a yours or adhoc plaincode record is always single-trial`);return{...e,cparam_combos:e.cparam_combos.map(n=>({...n,trials:n.trials.map(t=>({trial_index:0,...t}))})),model:"user",version:"",effort:null,pool_id:"",prompt_file_basename:"yours-plaincode",trial_metadata:nk(e)}}function tk(e,n){const t=e.find(r=>r.mode==="richcode"&&r.name===n);return t?t.note:null}function rk(e){const n=[],t=[];for(let r=0;r<e.length;r++){const i=e[r];for(let o=0;o<i.plainnum.length;o++)n.push({presetIndex:r,resultIndex:o});for(let o=0;o<i.plaincode.length;o++)t.push({presetIndex:r,resultIndex:o})}return{plainnum:n,plaincode:t}}function ik(e,n,t){const r=e.name_or_pseudoname,o=e.plainnum.length>0&&e.plaincode.length>0?` [${n}]`:"",u=t.prompt_file_basename?` (${t.prompt_file_basename})`:"";return`${r}${o} ${t.label}${u}`}function ok(e){return e.filter(n=>n.prompt_file_basename.startsWith("richcode"))}function uk(e){const n=new Map,t=(u,a,s,c,l)=>`${u}\0${a}\0${s??""}\0${c}\0${l??""}`;for(let u=0;u<e.richcodeResults.length;u++){const a=e.richcodeResults[u],s=t(a.model,a.version,a.effort,a.pool_id,a.aggregate);n.has(s)||n.set(s,{model:a.model,version:a.version,effort:a.effort,label:a.label,pool_id:a.pool_id,aggregate:a.aggregate,richcodeIndex:u})}const r=Array.from(n.values()),i=new Map(fk(r.map(u=>u.pool_id),e.jtaskHashGroups).map((u,a)=>[u,a])),o=u=>u.aggregate==="all"?0:u.aggregate==="model_size"?1:u.aggregate==="model_size__version"?2:3;return r.sort((u,a)=>i.get(u.pool_id)-i.get(a.pool_id)||o(u)-o(a))}function ak(e){return e.effort?`${e.label} ${e.effort}`:e.label}const sk=/^[0-9a-f]{5}$/;function rE(e){return!sk.test(e)}const kv=0,ck=1,lk=2;function fk(e,n){const t=new Map;for(const i of n)i.mode==="richcode"&&i.declared_display_position!==null&&t.set(i.name,i.declared_display_position);const r=i=>t.has(i)?kv:rE(i)?ck:lk;return[...new Set(e)].sort((i,o)=>{const u=r(i),a=r(o);return u!==a?u-a:u===kv?t.get(i)-t.get(o):i<o?-1:i>o?1:0})}function dk(e,n){const t=new Map,r=e.map(ak);if(n)return r;for(const i of r)t.set(i,(t.get(i)??0)+1);return r.map((i,o)=>{const u=e[o].pool_id;return rE(u)||t.get(i)>1?`${i} [${u}]`:i})}function pe(e){const n=e.indexOf(":");return n===-1?{source:e,index:-1}:{source:e.slice(0,n),index:parseInt(e.slice(n+1))}}function on(e){return e.slice(0,e.indexOf("-"))}function Bn(e){return e.slice(e.indexOf("-")+1)}function De(e){return on(pe(e).source)==="yours"}function iE(e){return on(e)==="adhoc"}function _i(e){return on(e)==="metho"}function uu(e){return`metho-richcode:${e.richcodeIndex}`}function er(e,n){const{source:t,index:r}=pe(e);if(!_i(t))return null;for(let i=0;i<n.length;i++){const o=n[i];if(o.richcodeIndex===r)return{group:o,groupIndex:i}}return null}function je(e,n){var i,o;const{source:t,index:r}=pe(e);if(on(t)==="yours")return null;if(t==="adhoc-plainnum"){const u=n.adhocPlainnumEntries[r];return u?((i=n.adhocPresets[u.presetIndex])==null?void 0:i.plainnum[u.resultIndex])??null:null}if(t==="adhoc-plaincode"){const u=n.adhocPlaincodeEntries[r];if(!u)return null;const a=(o=n.adhocPresets[u.presetIndex])==null?void 0:o.plaincode[u.resultIndex];return a?vi(a):null}return t==="metho-richcode"?n.richcodeResults[r]??null:null}function th(e,n){var o;const{source:t,index:r}=pe(e);if(t!=="adhoc-plaincode")return null;const i=n.adhocPlaincodeEntries[r];return i?((o=n.adhocPresets[i.presetIndex])==null?void 0:o.plaincode[i.resultIndex])??null:null}function pk(e,n){const t=je(e,n);if(!De(e)&&t===null)throw new Error(`Chosen result ${JSON.stringify(e)} is missing from the loaded data`)}function hk(e,n){const{source:t,index:r}=pe(e);if(t==="adhoc-plainnum"){const i=n.adhocPlainnumEntries[r];return i?n.adhocPresets[i.presetIndex]??null:null}if(t==="adhoc-plaincode"){const i=n.adhocPlaincodeEntries[r];return i?n.adhocPresets[i.presetIndex]??null:null}return null}function Wh(e,n){if(!n)return{point:!0,bounds:!0,sample:!0};const{source:t}=pe(e),i=Bn(t)!=="plainnum";i&&Xh(n);const o=i?n.cparam_combos.flatMap(a=>a.trials):n.trials,u=a=>o.some(s=>Object.keys(s[a]).length>0);return{point:u("point"),bounds:(!i||jh(n))&&u("bounds"),sample:u("sample")}}function jh(e){return e.count===1}function Xh(e){for(const[t,r]of e.cparam_combos.entries()){if(r.trials.length===0||r.trials.length>e.count)throw new Error(`Code result cparam combo ${t} carries ${r.trials.length} trials; expected between 1 and the record trial count ${e.count}`);const i=new Set;for(const o of r.trials){const u=o.trial_index;if(u===void 0)throw new Error(`Code result cparam combo ${t} carries a trial with no trial_index; regenerate the result data (trial-dict schema >= 9)`);if(!Number.isInteger(u)||u<0||u>=e.count)throw new Error(`Code result cparam combo ${t} carries trial_index ${u}; expected an integer in [0, ${e.count})`);if(i.has(u))throw new Error(`Code result cparam combo ${t} carries record trial ${u} more than once`);i.add(u)}}const n=e.trial_metadata;if(n!==void 0&&n.length>0&&n.length!==e.count)throw new Error(`Code result carries ${n.length} trial_metadata entries; expected one per trial (record trial count ${e.count})`)}function oE(e){if(e.trial_index===void 0)throw new Error("Code-mode combo trial carries no trial_index");return e.trial_index}function Yh(e){return Kh(e)?e.count:e.trials.length}function uE(e,n){return e.find(t=>oE(t)===n)}function aE(e,n){var t;return Kh(e)?(t=e.trial_metadata)==null?void 0:t[n]:e.trials[n]}function mk(e,n){return aE(e,n)}function vk(e,n){var t;return Kh(e)?(t=e.trial_metadata)==null?void 0:t[n]:void 0}function _k(e,n){var t;return(t=aE(e,n))==null?void 0:t.trial_choices}function Kh(e){return"cparam_combos"in e}function Jh(e,n,t){if(n==="point"){const i=e.point[t];return i===void 0?"":String(i)}if(n==="bounds"){const i=e.bounds[t];return i?`${i[0]} ${i[1]}`:""}const r=e.sample[t];return r?typeof r=="string"?r:r.map(([i,o])=>`(${i} ${o})`).join(" "):""}function sE(e,n){return["point","bounds","sample"].filter(t=>n.length>0&&n.every(r=>Jh(e,t,r)!==""))}function gk(e,n,t){return t.map(r=>Jh(e,n,r)).join(`
`)}function bk(e,n,t,r){const{source:i}=pe(e);return i==="adhoc-plainnum"?n.trials.map(u=>r.map(a=>Jh(u,t,a))):[]}function nr(e,n,t){const r=[];for(const i of e){if(t==="code"&&kt(i.id))continue;const o=Le(i.id);if(!Object.prototype.hasOwnProperty.call(n,o))throw new Error(`Cannot compute optionDictKey: missing value for ${i.id}`);r.push([i.id,n[o]])}return r.sort(([i],[o])=>i<o?-1:i>o?1:0),JSON.stringify(r)}function rh(e,n,t){if(t==="Bool"&&n.type==="checkbox")return n.checked===!0;const r=Oh(e,n.value);if(typeof r=="object")throw new Error(`Invalid scalar control parser use for ${e.id}`);return r}function yk(e,n){const t=n.map(r=>{if(r.type!=="checkbox")throw new Error(`Invalid MultiStringFromSet control for ${e.id}: expected checkbox`);return r.checked===!0?r.value:void 0}).filter(r=>r!==void 0);return Oh(e,t)}function cE(e,n,t){return e!==void 0&&t.includes(e)?e:n!==void 0&&t.includes(n)?n:t[0]}const lE="declared-value-space",Ek="One of:";function fE(e){const n=e.map(t=>X(String(t))).join(", ");return`<div class="${lE}">${Ek} ${n}</div>`}function zh(e,n){let t=`<span class="cparam-or-aopt-name">${X(e)}</span>`;return n.longname&&(t+=` <span class="cparam-or-aopt-longname">(${X(n.longname)})</span>`),t}function Eo(e,n,t,r,i){const o=`${r.dataAttribute}="${ae(e)}"`;if(i==="StringFromSet"){if(!Array.isArray(n.allowed_values))throw new Error(`StringFromSet option ${n.id} is missing allowed_values`);const c=n.allowed_values.map(l=>{const f=String(l),d=f===String(t)?" selected":"";return`<option value="${ae(f)}"${d}>${X(f)}</option>`}).join("");return`<select class="${r.selectClass}" ${o}>${c}</select>`}if(i==="Number")return`<input class="${r.inputClass}" type="number" ${o} value="${ae(String(t))}">`;if(i==="Bool"){const c=t?" checked":"";return`<input class="${r.checkboxClass??r.inputClass}" type="checkbox" ${o}${c}>`}if(i==="FreeString")return`<input class="${[r.inputClass,r.textInputClass].filter(Boolean).join(" ")}" type="text" ${o} value="${ae(String(t))}">`;if(!Array.isArray(n.allowed_values))throw new Error(`MultiStringFromSet option ${n.id} is missing allowed_values`);if(!Array.isArray(t))throw new Error(`MultiStringFromSet option ${n.id} has a non-array current value`);const u=new Set(t),a=r.checkboxClass??r.inputClass,s=n.allowed_values.map(c=>{if(typeof c!="string")throw new Error(`MultiStringFromSet option ${n.id} has a non-string allowed value`);const l=u.has(c)?" checked":"";return`<label><input class="${a}" type="checkbox" ${o} value="${ae(c)}"${l}> <span>${X(c)}</span></label>`}).join("");return`<span class="${r.checkboxGroupClass??""}">${s}</span>`}function Zh(e){return e.allowed_values.filter(n=>typeof n!="boolean")}function dE(e,n){return cE(n.ui.inspectedCparamValues[Le(e.id)],e.default_value,Zh(e))}function pE(e,n){const t={};for(const r of e.get_cparams())t[Le(r.id)]=dE(r,n);return t}function wk(e,n,t){if(n===void 0)return{};if(typeof n!="object"||n===null||Array.isArray(n))return Nv(`persisted inspected combination is not a value map: ${JSON.stringify(n)}`),{};const r={};for(const[i,o]of Object.entries(n)){if(!Sk(o)){Nv(`persisted inspected value for ${i} is not a scalar: ${JSON.stringify(o)}`);continue}const u=e.find_cparam(i);if(u===void 0){console.warn(`Ignoring inspected value for ${i}, which this jprob no longer declares`);continue}if(!Zh(u).includes(o)){console.warn(`Ignoring inspected value for ${u.id}, which its declaration no longer allows: ${JSON.stringify(o)}; falling back to the declared default`);continue}r[i]=o}return r}function Sk(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Nv(e,n){console.warn(`${e}; falling back to the declared default`)}const zr="mix",au={kind:"mix"};function wo(e){return{kind:"trial",recordTrialIndex:e}}const su=au;function Qh(e){return e.kind==="mix"?zr:String(e.recordTrialIndex)}function e2(e){return e===zr?au:$k(e)?wo(Number(e)):null}function $k(e){return/^\d+$/.test(e)}function Ak(e){if(typeof e!="object"||e===null)return!1;const n=e;return n.kind==="mix"?!0:n.kind==="trial"&&typeof n.recordTrialIndex=="number"&&Number.isInteger(n.recordTrialIndex)&&n.recordTrialIndex>=0}function Lk(e,n,t){return e!==void 0?Ak(e)?e:Mv("selection",e):n===void 0?su:typeof n=="number"&&Number.isInteger(n)&&n>=0?wo(n):Mv("legacy trial index",n)}function Mv(e,n,t){const r=`persisted trial ${e} is not usable: ${JSON.stringify(n)??String(n)}`;return console.warn(`${r}; starting from the default selection`),su}const hE="yours_code";function cu(e,n){return`${hE}_${e}_${n}`}function mE(e,n){const t={};for(const r of e.get_aopts()){const i=Le(r.id);i in n&&(t[i]=n[i])}return{aid:e.aid,label:"code",aopts:t,count:1,cparam_names:[],cparam_combos:[],raw_code_input:"",reasoning_response:{},misc_response:"",trial_choices:e.get_enum_tchoice_defaults()}}function Ik(e,n,t){const r=Tk(cu(e.aid,n));return r||mE(e,t)}function gi(e,n,t,r){r.timestamp||(r.timestamp=new Date().toISOString()),r.content_hash=eE("code",n,r.aopts,void 0),Rk(cu(e.aid,t),r)}function n2(e){const n=`${hE}_${e}_`,t=[];for(let r=0;r<localStorage.length;r++){const i=localStorage.key(r);if(i===null||!i.startsWith(n))continue;const o=localStorage.getItem(i);if(o===null)continue;let u;try{u=JSON.parse(o)}catch{continue}t.push({codeOptionDictKey:i.slice(n.length),record:u})}return t.sort((r,i)=>{const o=r.record.timestamp??"";return(i.record.timestamp??"").localeCompare(o)}),t}function Ck(e,n){localStorage.removeItem(cu(e,n))}function Tk(e){try{const n=localStorage.getItem(e);return n===null?null:JSON.parse(n)}catch{return null}}function Rk(e,n){localStorage.setItem(e,JSON.stringify(n))}function lu(e,n){const t={};for(const r of e){const i=Le(r.id),o=n[i]??r.default_value;t[i]=Oh(r,o)}return t}function kk(e,n){const t={...n};for(const r of e){if(!("input_type"in r)||r.input_type!=="MultiStringFromSet")continue;const i=Le(r.id),o=n[i];if(!Array.isArray(o)||!o.every(s=>typeof s=="string")||!Array.isArray(r.allowed_values))continue;const u=new Set(r.allowed_values),a=o.filter(s=>!u.has(s));a.length!==0&&(console.warn(`Ignoring MultiStringFromSet values no longer allowed for ${r.id}: `+a.join(", ")),t[i]=o.filter(s=>u.has(s)))}return t}const vE="aopt",_E="ui",Nk="yours";function So(e,n){return`${e}_${n}`}function fu(e,n){return`${Nk}_${e}_${n}`}const gE={whose:"yours-plainnum",lastYoursWhose:"yours-plainnum",lastAdhocWhose:"",lastMethoWhose:"",selectedTaskGroupPoolId:"",exampleFoldState:{},framingFoldState:{},jointDependenceEditorOpen:!0,foldOpenById:{},srcquotesInlinedOverride:null,cparamPinned:{},cparamValues:{},inspectedCparamValues:{},codeSweepMode:"average",codePlotTargetKind:"formula",codePlotFormulaId:"",codePlotRawResponseName:"",modelEffortPinned:!0,modelEffortSweepScope:null,resultTrialSelection:su};function bE(e){const n=cn();return{...structuredClone(gE),inputMode:n.inputMode,probAsOdds:n.probAsOdds,symbolMnames:n.symbolMnames,popoverAllRefs:n.popoverAllRefs,persistentPopovers:n.persistentPopovers,showExampleClassification:n.showExampleClassification,showGlobalExampleControls:n.showGlobalExampleControls,showFramingNotes:n.showFramingNotes,longTextAbbrev:n.longTextAbbrev}}function yE(e,n){const t={},r={};for(const i of e){const o=Le(i.id);o in n&&(kt(i.id)?r[o]=n[o]:t[o]=n[o])}return{aopts:t,cparam_values:r}}function EE(e,n){const{aopts:t,cparam_values:r}=yE(e.get_options(),n);return{aid:e.aid,label:"",prompt_file_basename:"",aopts:t,cparam_values:r,count:1,trials:[{point:{},bounds:{},sample:{}}],raw_input:{},trial_choices:e.get_enum_tchoice_defaults()}}function Mk(e){const n=lu(e.get_options(),{}),t=nr(e.get_options(),n,"plainnum"),r=nr(e.get_options(),n,"code");return{optionValues:n,plainnumOptionDictKey:t,codeOptionDictKey:r,ui:bE(),yoursRecord:EE(e,n),yoursCodeRecord:mE(e,n)}}function Ok(e,n,t){return{...e,[n]:{pos:Pr(e,n,"pos"),neg:Pr(e,n,"neg"),[t]:!Pr(e,n,t)}}}const qk=gE.whose,Pk=["plaincode","plainnum"];function Fk(e){if(e==="yours")return"yours-plainnum";const n=e.indexOf(":");if(n===-1)return e;const t=e.slice(0,n),r=e.slice(n);return Pk.some(i=>t===i||t===`metho-${i}`)?qk:t==="richcode"?"metho-richcode"+r:e}function wE(e,n){return!n&&e==="yours-plaincode"?"yours-plainnum":e}function Dk(e,n,t){const r=Zr(fu(e.aid,n));return r||EE(e,t)}const xk="assumptionTrialIndex";function Bk(e){const n=e.config.localStorage_prefix,t=e.get_options(),r=Mk(e),i=Zr(So(n,vE)),o=i?lu(t,kk(t,i)):r.optionValues,u=nr(t,o,"plainnum"),a=nr(t,o,"code"),s=bE(),c=Zr(So(n,_E));c&&typeof c.whose=="string"&&(c.whose=Fk(c.whose));const{[xk]:l,...f}=c??{};let d={...s,...f,resultTrialSelection:Lk(f.resultTrialSelection,l),inspectedCparamValues:wk(e,f.inspectedCparamValues)};d={...d,whose:wE(d.whose,e.has_cparams())},(d.whose==="yours-plainnum"||d.whose==="yours-plaincode")&&(d={...d,lastYoursWhose:d.whose});const h=on(pe(d.whose).source);h==="adhoc"?d={...d,lastAdhocWhose:d.whose}:h==="metho"&&(d={...d,lastMethoWhose:d.whose});const p=Dk(e,u,o),v=Ik(e,a,o);return{optionValues:o,plainnumOptionDictKey:u,codeOptionDictKey:a,ui:d,yoursRecord:p,yoursCodeRecord:v}}function t2(e,n){const t=e.localStorage_prefix;i2(So(t,vE),n)}function Oe(e,n){const t=e.localStorage_prefix;i2(So(t,_E),n)}function r2(e,n,t,r){r.timestamp||(r.timestamp=new Date().toISOString()),r.content_hash=eE("plainnum",n,r.aopts,r.cparam_values??{}),i2(fu(e.aid,t),r)}function Hk(e,n,t){const{aopts:r,cparam_values:i}=yE(n.get_options(),t);return{...e,aopts:r,cparam_values:i,raw_input:{...e.raw_input??{}},trial_choices:{...e.trial_choices??{}},lloads_draft:e.lloads_draft===void 0?void 0:structuredClone(e.lloads_draft),trials:e.trials.map(o=>({point:{...o.point},bounds:{...o.bounds},sample:{...o.sample},lloads:o.lloads===void 0?void 0:structuredClone(o.lloads)})),timestamp:void 0}}function Uk(e,n,t){const r={};for(const i of n.get_aopts()){const o=Le(i.id);o in t&&(r[o]=t[o])}return{...e,aopts:r,reasoning_response:{...e.reasoning_response},trial_choices:{...e.trial_choices??{}},cparam_combos:[],cparam_names:[],verified_code_input:void 0,timestamp:void 0}}function Ov(e,n,t,r){const i={...e.optionValues,[t]:r},o=nr(n.get_options(),i,"plainnum"),u=nr(n.get_options(),i,"code");let a=e.yoursRecord;o!==e.plainnumOptionDictKey&&(a=Zr(fu(n.aid,o))??Hk(e.yoursRecord,n,i));let s=e.yoursCodeRecord;return u!==e.codeOptionDictKey&&(s=Zr(cu(n.aid,u))??Uk(e.yoursCodeRecord,n,i)),(o!==e.plainnumOptionDictKey||u!==e.codeOptionDictKey)&&t2(n.config,i),{optionValues:i,plainnumOptionDictKey:o,codeOptionDictKey:u,ui:e.ui,yoursRecord:a,yoursCodeRecord:s}}function Gk(){const e={};for(let n=0;n<localStorage.length;n++){const t=localStorage.key(n);e[t]=localStorage.getItem(t)}return e}function Vk(e){localStorage.clear();for(const[n,t]of Object.entries(e))localStorage.setItem(n,String(t))}function Wk(){const e=new URLSearchParams(window.location.search),n=e.get("_preload");if(!n)return;try{const r=atob(n),i=JSON.parse(r);for(const[o,u]of Object.entries(i))localStorage.setItem(o,String(u))}catch(r){alert(`Failed to load preload state: ${r}`)}e.delete("_preload");const t=e.toString()?`${window.location.pathname}?${e}`:window.location.pathname;history.replaceState(null,"",t)}function Zr(e){try{const n=localStorage.getItem(e);return n===null?null:JSON.parse(n)}catch{return null}}function i2(e,n){localStorage.setItem(e,JSON.stringify(n))}const $o=8,SE=1e-9;function Ao(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function ih(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function jk(e,n,t){const r=`lloads.latents[${n}]`;if(!ih(e))return`${r}: expected an object, got ${Ao(e)}`;for(const o of["name","description"]){const u=e[o];if(typeof u!="string"||u.trim()==="")return`${r}.${o}: expected a non-empty string, got ${JSON.stringify(u)}`}const i=e.loadings;if(!ih(i))return`${r}.loadings: expected an object, got ${Ao(i)}`;if(Object.keys(i).length===0)return`${r}.loadings: empty — name the subjective variables this latent applies to, with 0 for any you considered and declined`;for(const[o,u]of Object.entries(i)){if(!t.has(o))return`${r}.loadings: '${o}' is not one of the subjective variables this jprob samples (${[...t].sort().join(", ")}), so a loading on it would have no effect`;if(typeof u!="number")return`${r}.loadings['${o}']: expected a number, got ${JSON.stringify(u)}`;if(!Number.isFinite(u))return`${r}.loadings['${o}']: ${u} is not finite`;if(u<-1||u>1)return`${r}.loadings['${o}']: ${u} not in [-1, 1]`}return null}function bi(e,n,t=[]){if(e==null)return null;if(!ih(e))return`lloads: expected an object, got ${Ao(e)}`;const r=Object.keys(e).filter(c=>c!=="latents").sort();if(r.length>0)return`lloads: unexpected key(s) ${JSON.stringify(r)}`;const i=e.latents;if(!Array.isArray(i))return`lloads.latents: expected a list, got ${Ao(i)}`;if(i.length>$o)return`lloads.latents: ${i.length} latents exceeds the cap of ${$o}`;const o=new Set(n);for(const[c,l]of i.entries()){const f=jk(l,c,o);if(f!==null)return f}const u=new Map;for(const c of i)for(const[l,f]of Object.entries(c.loadings))u.set(l,(u.get(l)??0)+f**2);for(const[c,l]of[...u.entries()].sort((f,d)=>f[0]<d[0]?-1:1))if(l>1+SE)return`lloads: loading budget exceeded for '${c}' — the sum of squared loadings across latents is ${qv(l)}, over the limit of 1 by ${qv(l-1)}; no residual variance is left for it`;const a=new Set(t),s=[...u.entries()].filter(([c,l])=>l>0&&a.has(c)).map(([c])=>c).sort();return s.length>0?`lloads: ${s.map(c=>`'${c}'`).join(", ")} ${s.length===1?"has":"have"} a point-mass distribution in this response, so a loading on it has no effect; remove the loading or give it a non-degenerate distribution`:null}function qv(e){return String(Number(e.toPrecision(6)))}function yi(e){return e==null?!1:e.latents.some(n=>Object.values(n.loadings).some(t=>t!==0))}function Xk(e,n,t=1){if(!(t>=0&&t<=1))throw new Error(`lloads dependence strength ${t} not in [0, 1]`);const r=bi(e,n);if(r!==null)throw new Error(r);const i=(e==null?void 0:e.latents)??[],o=Math.sqrt(t),u=new Map(n.map((c,l)=>[c,l])),a=n.map(()=>i.map(()=>0));for(const[c,l]of i.entries())for(const[f,d]of Object.entries(l.loadings))a[u.get(f)][c]=d*o;const s=a.map(c=>Math.sqrt(Math.max(0,1-c.reduce((l,f)=>l+f*f,0))));return{loadingMatrix:a,residualSds:s}}function Pv(e,n="",t=""){return{name:n,description:t,loadings:Object.fromEntries(e.map(r=>[r,0]))}}function $E(e,n){const t=new Set(n);return{latents:e.latents.map(r=>{const i=Object.entries(r.loadings).filter(([o,u])=>!t.has(o)&&u!==0);return i.length>0&&console.warn(`joint-dependence draft: dropping loadings on subjective variable(s) ${i.map(([o])=>o).join(", ")}, which this jprob no longer samples`),{...r,loadings:Object.fromEntries(n.map(o=>[o,r.loadings[o]??0]))}})}}function AE(e,n){return e==null?{latents:[]}:$E({latents:e.latents.map(t=>({name:t.name,description:t.description,loadings:{...t.loadings}}))},n)}function Yk(e){return e.latents.length===0?null:{latents:e.latents.map(n=>({name:n.name.trim(),description:n.description.trim(),loadings:Object.fromEntries(Object.entries(n.loadings).filter(t=>t[1]!==null))}))}}function LE(e,n){return Object.fromEntries(n.map(t=>[t,e.latents.reduce((r,i)=>{const o=i.loadings[t]??0;return r+o*o},0)]))}function Kk(e,n){return n.map(t=>n.map(r=>t===r?1:e.latents.reduce((i,o)=>i+(o.loadings[t]??0)*(o.loadings[r]??0),0)))}function Jk(e){return e.latents.some(n=>Object.values(n.loadings).some(t=>t!==null&&t!==0))}function IE(e,n,t=[],r={}){const i=c=>r[c]??c,o=[];e.latents.length>$o&&o.push({message:`${e.latents.length} latents exceeds the limit of ${$o}.`});const u=new Set;e.latents.forEach((c,l)=>{const f=`Latent ${l+1}`;c.name.trim()===""&&o.push({message:`${f} needs a short name.`,latentIndex:l,field:"name"}),c.description.trim()===""&&o.push({message:`${f} needs a description saying what its positive direction means.`,latentIndex:l,field:"description"});for(const d of n){const h=c.loadings[d]??null;h===null?(u.add(d),o.push({message:`${f}: no loading given for ${i(d)} — enter a number from −1 to +1 (0 if the latent does not apply to it).`,latentIndex:l,svar:d})):(!Number.isFinite(h)||h<-1||h>1)&&(u.add(d),o.push({message:`${f}: the loading on ${i(d)} must be between −1 and +1.`,latentIndex:l,svar:d}))}});const a=LE(e,n),s=new Set(t);for(const c of n){const l=a[c];!u.has(c)&&l>1+SE&&o.push({message:`The squared loadings on ${i(c)} sum to ${l.toFixed(3)}, over its budget of 1 by ${(l-1).toFixed(3)} — no independent variation is left for it.`,svar:c}),l>0&&s.has(c)&&o.push({message:`${i(c)} has a single-value distribution in this response, so a loading on it has no effect — zero the loading or give it a spread distribution.`,svar:c})}return o}function CE(e,n,t=[]){const r=IE(e,n,t);if(r.length>0)return{kind:"invalid",problems:r};const i=Yk(e),o=bi(i,n,t);if(o!==null)throw new Error("joint-dependence draft passed the editor's checks but not validateLloads: "+o);return{kind:"valid",lloads:i}}const TE=4,zk=3,Zk=1e-4,Qk=1e4,Fv=3;function Dv(e){const[n,t]=e.split("e"),r=n.includes(".")?n.replace(/0+$/,"").replace(/\.$/,""):n;return t===void 0?r:`${r}e${t}`}function eN(e){switch(e){case"deterministic":return TE;case"monte-carlo":return zk;default:{const n=e;throw new Error(`Unknown calculation precision: ${String(n)}`)}}}function Lo(e,n){if(Number.isNaN(e))return String(e);if(!Number.isFinite(e))return e>0?"∞":"-∞";if(e===0)return"0";const t=Number(e.toPrecision(n));if(t===0)return"0";const r=Math.abs(t);if(r<Zk||r>=Qk)return Dv(t.toExponential(n-1));const i=Math.floor(Math.log10(r)),o=Math.max(0,n-1-i);return Dv(t.toFixed(o))}function nN(e){return Number.isFinite(e)?e>=1?"∞:1":e<=0?"1:∞":e>=.5?`${Lo(e/(1-e),Fv)}:1`:`1:${Lo((1-e)/e,Fv)}`:"—"}function Io(e,n){if(!Number.isFinite(e)||e===0)return e;const t=TE,r=Number(e.toPrecision(t));if(n==="floor"?r<=e:r>=e)return r;const i=Math.floor(Math.log10(Math.abs(r))),o=Math.pow(10,i-t+1),u=n==="floor"?r-o:r+o;return Number(u.toPrecision(t))}function Fe(e,n,t,r="deterministic"){const i=eN(r);switch(n){case"probability":return t==="odds"?nN(e):Lo(e*100,i)+"%";default:return Lo(e,i)}}function jn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/**
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
*/var ha,xv;function tN(){if(xv)return ha;xv=1;var e=typeof Object.defineProperty=="function"?Object.defineProperty:null;return ha=e,ha}/**
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
*/var ma,Bv;function rN(){if(Bv)return ma;Bv=1;var e=tN();function n(){try{return e({},"x",{}),!0}catch{return!1}}return ma=n,ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var va,Hv;function iN(){if(Hv)return va;Hv=1;var e=Object.defineProperty;return va=e,va}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _a,Uv;function RE(){if(Uv)return _a;Uv=1;function e(n){return typeof n=="number"}return _a=e,_a}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ga,Gv;function kE(){if(Gv)return ga;Gv=1;function e(r){return r[0]==="-"}function n(r){var i="",o;for(o=0;o<r;o++)i+="0";return i}function t(r,i,o){var u=!1,a=i-r.length;return a<0||(e(r)&&(u=!0,r=r.substr(1)),r=o?r+n(a):n(a)+r,u&&(r="-"+r)),r}return ga=t,ga}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ba,Vv;function oN(){if(Vv)return ba;Vv=1;var e=RE(),n=kE(),t=String.prototype.toLowerCase,r=String.prototype.toUpperCase;function i(o){var u,a,s;switch(o.specifier){case"b":u=2;break;case"o":u=8;break;case"x":case"X":u=16;break;case"d":case"i":case"u":default:u=10;break}if(a=o.arg,s=parseInt(a,10),!isFinite(s)){if(!e(a))throw new Error("invalid integer. Value: "+a);s=0}return s<0&&(o.specifier==="u"||u!==10)&&(s=4294967295+s+1),s<0?(a=(-s).toString(u),o.precision&&(a=n(a,o.precision,o.padRight)),a="-"+a):(a=s.toString(u),!s&&!o.precision?a="":o.precision&&(a=n(a,o.precision,o.padRight)),o.sign&&(a=o.sign+a)),u===16&&(o.alternate&&(a="0x"+a),a=o.specifier===r.call(o.specifier)?r.call(a):t.call(a)),u===8&&o.alternate&&a.charAt(0)!=="0"&&(a="0"+a),a}return ba=i,ba}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ya,Wv;function uN(){if(Wv)return ya;Wv=1;function e(n){return typeof n=="string"}return ya=e,ya}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ea,jv;function aN(){if(jv)return Ea;jv=1;var e=Math.abs,n=String.prototype.toLowerCase,t=String.prototype.toUpperCase,r=String.prototype.replace,i=/e\+(\d)$/,o=/e-(\d)$/,u=/^(\d+)$/,a=/^(\d+)e/,s=/\.0$/,c=/\.0*e/,l=/(\..*[^0])0*e/;function f(d,h){var p,v;switch(h.specifier){case"e":case"E":v=d.toExponential(h.precision);break;case"f":case"F":v=d.toFixed(h.precision);break;case"g":case"G":e(d)<1e-4?(p=h.precision,p>0&&(p-=1),v=d.toExponential(p)):v=d.toPrecision(h.precision),h.alternate||(v=r.call(v,l,"$1e"),v=r.call(v,c,"e"),v=r.call(v,s,""));break;default:throw new Error("invalid double notation. Value: "+h.specifier)}return v=r.call(v,i,"e+0$1"),v=r.call(v,o,"e-0$1"),h.alternate&&(v=r.call(v,u,"$1."),v=r.call(v,a,"$1.e")),d>=0&&h.sign&&(v=h.sign+v),v=h.specifier===t.call(h.specifier)?t.call(v):n.call(v),v}return Ea=f,Ea}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wa,Xv;function sN(){if(Xv)return wa;Xv=1;function e(t){var r="",i;for(i=0;i<t;i++)r+=" ";return r}function n(t,r,i){var o=r-t.length;return o<0||(t=i?t+e(o):e(o)+t),t}return wa=n,wa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sa,Yv;function cN(){if(Yv)return Sa;Yv=1;var e=oN(),n=uN(),t=RE(),r=aN(),i=sN(),o=kE(),u=String.fromCharCode,a=Array.isArray;function s(f){return f!==f}function c(f){var d={};return d.specifier=f.specifier,d.precision=f.precision===void 0?1:f.precision,d.width=f.width,d.flags=f.flags||"",d.mapping=f.mapping,d}function l(f){var d,h,p,v,m,g,_,y,b,E;if(!a(f))throw new TypeError("invalid argument. First argument must be an array. Value: `"+f+"`.");for(g="",_=1,b=0;b<f.length;b++)if(p=f[b],n(p))g+=p;else{if(d=p.precision!==void 0,p=c(p),!p.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+b+"`. Value: `"+p+"`.");for(p.mapping&&(_=p.mapping),h=p.flags,E=0;E<h.length;E++)switch(v=h.charAt(E),v){case" ":p.sign=" ";break;case"+":p.sign="+";break;case"-":p.padRight=!0,p.padZeros=!1;break;case"0":p.padZeros=h.indexOf("-")<0;break;case"#":p.alternate=!0;break;default:throw new Error("invalid flag: "+v)}if(p.width==="*"){if(p.width=parseInt(arguments[_],10),_+=1,s(p.width))throw new TypeError("the argument for * width at position "+_+" is not a number. Value: `"+p.width+"`.");p.width<0&&(p.padRight=!0,p.width=-p.width)}if(d&&p.precision==="*"){if(p.precision=parseInt(arguments[_],10),_+=1,s(p.precision))throw new TypeError("the argument for * precision at position "+_+" is not a number. Value: `"+p.precision+"`.");p.precision<0&&(p.precision=1,d=!1)}switch(p.arg=arguments[_],p.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":d&&(p.padZeros=!1),p.arg=e(p);break;case"s":p.maxWidth=d?p.precision:-1,p.arg=String(p.arg);break;case"c":if(!s(p.arg)){if(m=parseInt(p.arg,10),m<0||m>127)throw new Error("invalid character code. Value: "+p.arg);p.arg=s(m)?String(p.arg):u(m)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(d||(p.precision=6),y=parseFloat(p.arg),!isFinite(y)){if(!t(p.arg))throw new Error("invalid floating-point number. Value: "+g);y=p.arg,p.padZeros=!1}p.arg=r(y,p);break;default:throw new Error("invalid specifier: "+p.specifier)}p.maxWidth>=0&&p.arg.length>p.maxWidth&&(p.arg=p.arg.substring(0,p.maxWidth)),p.padZeros?p.arg=o(p.arg,p.width||p.precision,p.padRight):p.width&&(p.arg=i(p.arg,p.width,p.padRight)),g+=p.arg||"",_+=1}return g}return Sa=l,Sa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $a,Kv;function lN(){if(Kv)return $a;Kv=1;var e=cN();return $a=e,$a}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Aa,Jv;function fN(){if(Jv)return Aa;Jv=1;var e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function n(r){var i={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(i.precision="1"),i}function t(r){var i,o,u,a;for(o=[],a=0,u=e.exec(r);u;)i=r.slice(a,e.lastIndex-u[0].length),i.length&&o.push(i),u[6]==="%"?o.push("%"):o.push(n(u)),a=e.lastIndex,u=e.exec(r);return i=r.slice(a),i.length&&o.push(i),o}return Aa=t,Aa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var La,zv;function dN(){if(zv)return La;zv=1;var e=fN();return La=e,La}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ia,Zv;function pN(){if(Zv)return Ia;Zv=1;function e(n){return typeof n=="string"}return Ia=e,Ia}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ca,Qv;function hN(){if(Qv)return Ca;Qv=1;var e=lN(),n=dN(),t=pN();function r(i){var o,u;if(!t(i))throw new TypeError(r("invalid argument. First argument must be a string. Value: `%s`.",i));for(o=[n(i)],u=1;u<arguments.length;u++)o.push(arguments[u]);return e.apply(null,o)}return Ca=r,Ca}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ta,e3;function mN(){if(e3)return Ta;e3=1;var e=hN();return Ta=e,Ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ra,n3;function vN(){if(n3)return Ra;n3=1;var e=mN(),n=Object.prototype,t=n.toString,r=n.__defineGetter__,i=n.__defineSetter__,o=n.__lookupGetter__,u=n.__lookupSetter__;function a(s,c,l){var f,d,h,p;if(typeof s!="object"||s===null||t.call(s)==="[object Array]")throw new TypeError(e("invalid argument. First argument must be an object. Value: `%s`.",s));if(typeof l!="object"||l===null||t.call(l)==="[object Array]")throw new TypeError(e("invalid argument. Property descriptor must be an object. Value: `%s`.",l));if(d="value"in l,d&&(o.call(s,c)||u.call(s,c)?(f=s.__proto__,s.__proto__=n,delete s[c],s[c]=l.value,s.__proto__=f):s[c]=l.value),h="get"in l,p="set"in l,d&&(h||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return h&&r&&r.call(s,c,l.get),p&&i&&i.call(s,c,l.set),s}return Ra=a,Ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ka,t3;function _N(){if(t3)return ka;t3=1;var e=rN(),n=iN(),t=vN(),r;return e()?r=n:r=t,ka=r,ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Na,r3;function gN(){if(r3)return Na;r3=1;var e=_N();function n(t,r,i){e(t,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}return Na=n,Na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ma,i3;function tn(){if(i3)return Ma;i3=1;var e=gN();return Ma=e,Ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oa,o3;function bN(){if(o3)return Oa;o3=1;function e(n){return n!==n}return Oa=e,Oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qa,u3;function oe(){if(u3)return qa;u3=1;var e=bN();return qa=e,qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pa,a3;function yN(){if(a3)return Pa;a3=1;function e(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return Pa=e,Pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fa,s3;function EN(){if(s3)return Fa;s3=1;var e=yN();return Fa=e,Fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Da,c3;function wN(){if(c3)return Da;c3=1;var e=EN(),n=e();function t(){return n&&typeof Symbol.toStringTag=="symbol"}return Da=t,Da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xa,l3;function SN(){if(l3)return xa;l3=1;var e=wN();return xa=e,xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ba,f3;function NE(){if(f3)return Ba;f3=1;var e=Object.prototype.toString;return Ba=e,Ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ha,d3;function $N(){if(d3)return Ha;d3=1;var e=NE();function n(t){return e.call(t)}return Ha=n,Ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ua,p3;function AN(){if(p3)return Ua;p3=1;var e=Object.prototype.hasOwnProperty;function n(t,r){return t==null?!1:e.call(t,r)}return Ua=n,Ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ga,h3;function LN(){if(h3)return Ga;h3=1;var e=AN();return Ga=e,Ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Va,m3;function IN(){if(m3)return Va;m3=1;var e=typeof Symbol=="function"?Symbol:void 0;return Va=e,Va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wa,v3;function CN(){if(v3)return Wa;v3=1;var e=IN();return Wa=e,Wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ja,_3;function TN(){if(_3)return ja;_3=1;var e=CN(),n=typeof e=="function"?e.toStringTag:"";return ja=n,ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xa,g3;function RN(){if(g3)return Xa;g3=1;var e=LN(),n=TN(),t=NE();function r(i){var o,u,a;if(i==null)return t.call(i);u=i[n],o=e(i,n);try{i[n]=void 0}catch{return t.call(i)}return a=t.call(i),o?i[n]=u:delete i[n],a}return Xa=r,Xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ya,b3;function du(){if(b3)return Ya;b3=1;var e=SN(),n=$N(),t=RN(),r;return e()?r=t:r=n,Ya=r,Ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ka,y3;function kN(){if(y3)return Ka;y3=1;var e=du(),n=typeof Uint32Array=="function";function t(r){return n&&r instanceof Uint32Array||e(r)==="[object Uint32Array]"}return Ka=t,Ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ja,E3;function NN(){if(E3)return Ja;E3=1;var e=kN();return Ja=e,Ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var za,w3;function MN(){if(w3)return za;w3=1;var e=4294967295;return za=e,za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Za,S3;function ON(){if(S3)return Za;S3=1;var e=typeof Uint32Array=="function"?Uint32Array:null;return Za=e,Za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qa,$3;function qN(){if($3)return Qa;$3=1;var e=NN(),n=MN(),t=ON();function r(){var i,o;if(typeof t!="function")return!1;try{o=[1,3.14,-3.14,n+1,n+2],o=new t(o),i=e(o)&&o[0]===1&&o[1]===3&&o[2]===n-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return Qa=r,Qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var es,A3;function PN(){if(A3)return es;A3=1;var e=qN();return es=e,es}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ns,L3;function FN(){if(L3)return ns;L3=1;var e=typeof Uint32Array=="function"?Uint32Array:void 0;return ns=e,ns}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ts,I3;function DN(){if(I3)return ts;I3=1;function e(){throw new Error("not implemented")}return ts=e,ts}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rs,C3;function fr(){if(C3)return rs;C3=1;var e=PN(),n=FN(),t=DN(),r;return e()?r=n:r=t,rs=r,rs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var is,T3;function xN(){if(T3)return is;T3=1;var e=du(),n=typeof Float64Array=="function";function t(r){return n&&r instanceof Float64Array||e(r)==="[object Float64Array]"}return is=t,is}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var os,R3;function BN(){if(R3)return os;R3=1;var e=xN();return os=e,os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var us,k3;function HN(){if(k3)return us;k3=1;var e=typeof Float64Array=="function"?Float64Array:null;return us=e,us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var as,N3;function UN(){if(N3)return as;N3=1;var e=BN(),n=HN();function t(){var r,i;if(typeof n!="function")return!1;try{i=new n([1,3.14,-3.14,NaN]),r=e(i)&&i[0]===1&&i[1]===3.14&&i[2]===-3.14&&i[3]!==i[3]}catch{r=!1}return r}return as=t,as}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ss,M3;function GN(){if(M3)return ss;M3=1;var e=UN();return ss=e,ss}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cs,O3;function VN(){if(O3)return cs;O3=1;var e=typeof Float64Array=="function"?Float64Array:void 0;return cs=e,cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ls,q3;function WN(){if(q3)return ls;q3=1;function e(){throw new Error("not implemented")}return ls=e,ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fs,P3;function dr(){if(P3)return fs;P3=1;var e=GN(),n=VN(),t=WN(),r;return e()?r=n:r=t,fs=r,fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ds,F3;function jN(){if(F3)return ds;F3=1;var e=du(),n=typeof Uint8Array=="function";function t(r){return n&&r instanceof Uint8Array||e(r)==="[object Uint8Array]"}return ds=t,ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ps,D3;function XN(){if(D3)return ps;D3=1;var e=jN();return ps=e,ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hs,x3;function YN(){if(x3)return hs;x3=1;var e=255;return hs=e,hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ms,B3;function KN(){if(B3)return ms;B3=1;var e=typeof Uint8Array=="function"?Uint8Array:null;return ms=e,ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vs,H3;function JN(){if(H3)return vs;H3=1;var e=XN(),n=YN(),t=KN();function r(){var i,o;if(typeof t!="function")return!1;try{o=[1,3.14,-3.14,n+1,n+2],o=new t(o),i=e(o)&&o[0]===1&&o[1]===3&&o[2]===n-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return vs=r,vs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _s,U3;function zN(){if(U3)return _s;U3=1;var e=JN();return _s=e,_s}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gs,G3;function ZN(){if(G3)return gs;G3=1;var e=typeof Uint8Array=="function"?Uint8Array:void 0;return gs=e,gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bs,V3;function QN(){if(V3)return bs;V3=1;function e(){throw new Error("not implemented")}return bs=e,bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ys,W3;function eM(){if(W3)return ys;W3=1;var e=zN(),n=ZN(),t=QN(),r;return e()?r=n:r=t,ys=r,ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Es,j3;function nM(){if(j3)return Es;j3=1;var e=du(),n=typeof Uint16Array=="function";function t(r){return n&&r instanceof Uint16Array||e(r)==="[object Uint16Array]"}return Es=t,Es}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ws,X3;function tM(){if(X3)return ws;X3=1;var e=nM();return ws=e,ws}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ss,Y3;function rM(){if(Y3)return Ss;Y3=1;var e=65535;return Ss=e,Ss}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $s,K3;function iM(){if(K3)return $s;K3=1;var e=typeof Uint16Array=="function"?Uint16Array:null;return $s=e,$s}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var As,J3;function oM(){if(J3)return As;J3=1;var e=tM(),n=rM(),t=iM();function r(){var i,o;if(typeof t!="function")return!1;try{o=[1,3.14,-3.14,n+1,n+2],o=new t(o),i=e(o)&&o[0]===1&&o[1]===3&&o[2]===n-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return As=r,As}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ls,z3;function uM(){if(z3)return Ls;z3=1;var e=oM();return Ls=e,Ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Is,Z3;function aM(){if(Z3)return Is;Z3=1;var e=typeof Uint16Array=="function"?Uint16Array:void 0;return Is=e,Is}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cs,Q3;function sM(){if(Q3)return Cs;Q3=1;function e(){throw new Error("not implemented")}return Cs=e,Cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ts,e6;function cM(){if(e6)return Ts;e6=1;var e=uM(),n=aM(),t=sM(),r;return e()?r=n:r=t,Ts=r,Ts}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rs,n6;function lM(){if(n6)return Rs;n6=1;var e=eM(),n=cM(),t={uint16:n,uint8:e};return Rs=t,Rs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ks,t6;function fM(){if(t6)return ks;t6=1;var e=lM(),n;function t(){var r,i;return r=new e.uint16(1),r[0]=4660,i=new e.uint8(r.buffer),i[0]===52}return n=t(),ks=n,ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ns,r6;function pr(){if(r6)return Ns;r6=1;var e=fM();return Ns=e,Ns}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ms,i6;function dM(){if(i6)return Ms;i6=1;var e=pr(),n;return e===!0?n=1:n=0,Ms=n,Ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Os,o6;function pM(){if(o6)return Os;o6=1;var e=fr(),n=dr(),t=dM(),r=new n(1),i=new e(r.buffer);function o(u){return r[0]=u,i[t]}return Os=o,Os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qs,u6;function En(){if(u6)return qs;u6=1;var e=pM();return qs=e,qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ps,a6;function hM(){if(a6)return Ps;a6=1;var e=pr(),n;return e===!0?n=1:n=0,Ps=n,Ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fs,s6;function mM(){if(s6)return Fs;s6=1;var e=fr(),n=dr(),t=hM(),r=new n(1),i=new e(r.buffer);function o(u,a){return r[0]=u,i[t]=a>>>0,r[0]}return Fs=o,Fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ds,c6;function Ei(){if(c6)return Ds;c6=1;var e=mM();return Ds=e,Ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xs,l6;function vM(){if(l6)return xs;l6=1;var e=pr(),n,t,r;return e===!0?(t=1,r=0):(t=0,r=1),n={HIGH:t,LOW:r},xs=n,xs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bs,f6;function _M(){if(f6)return Bs;f6=1;var e=fr(),n=dr(),t=vM(),r=new n(1),i=new e(r.buffer),o=t.HIGH,u=t.LOW;function a(s,c){return i[o]=s,i[u]=c,r[0]}return Bs=a,Bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hs,d6;function pu(){if(d6)return Hs;d6=1;var e=_M();return Hs=e,Hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Us,p6;function ke(){if(p6)return Us;p6=1;var e=Number.POSITIVE_INFINITY;return Us=e,Us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gs,h6;function gM(){return h6||(h6=1,Gs=Number),Gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vs,m6;function bM(){if(m6)return Vs;m6=1;var e=gM();return Vs=e,Vs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ws,v6;function rn(){if(v6)return Ws;v6=1;var e=bM(),n=e.NEGATIVE_INFINITY;return Ws=n,Ws}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var js,_6;function Nt(){if(_6)return js;_6=1;var e=1023;return js=e,js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xs,g6;function yM(){if(g6)return Xs;g6=1;var e=.34657359027997264;return Xs=e,Xs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ys,b6;function EM(){if(b6)return Ys;b6=1;function e(n){return n===0?-.03333333333333313:-.03333333333333313+n*(.0015873015872548146+n*(-793650757867488e-19+n*(4008217827329362e-21+n*-20109921818362437e-23)))}return Ys=e,Ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ks,y6;function wM(){if(y6)return Ks;y6=1;var e=oe(),n=En(),t=Ei(),r=pu(),i=ke(),o=rn(),u=Nt(),a=yM(),s=EM(),c=709.782712893384,l=.6931471803691238,f=19082149292705877e-26,d=1.4426950408889634,h=38.816242111356935,p=1.0397207708399179;function v(m){var g,_,y,b,E,A,L,R,T,$,w,S,I;if(m===i||e(m))return m;if(m===o)return-1;if(m===0)return m;if(m<0?(y=!0,R=-m):(y=!1,R=m),R>=h){if(y)return-1;if(R>=c)return i}if(A=n(R)|0,R>a)R<p?y?(b=m+l,E=-f,I=-1):(b=m-l,E=f,I=1):(y?I=d*m-.5:I=d*m+.5,I|=0,w=I,b=m-w*l,E=w*f),m=b-E,$=b-m-E;else{if(A<1016070144)return m;I=0}return g=.5*m,T=m*g,L=1+T*s(T),w=3-L*g,S=T*((L-w)/(6-m*w)),I===0?m-(m*S-T):(_=r(u+I<<20,0),S=m*(S-$)-$,S-=T,I===-1?.5*(m-S)-.5:I===1?m<-.25?-2*(S-(m+.5)):1+2*(m-S):I<=-2||I>56?(R=1-(S-m),I===1024?(b=n(R)+(I<<20)|0,R=t(R,b)):R*=_,R-1):(w=1,I<20?(b=1072693248-(2097152>>I)|0,w=t(w,b),R=w-(S-m)):(b=u-I<<20|0,w=t(w,b),R=m-(S+w),R+=1),R*=_,R))}return Ks=v,Ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Js,E6;function hr(){if(E6)return Js;E6=1;var e=wM();return Js=e,Js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zs,w6;function SM(){if(w6)return zs;w6=1;var e=Math.floor;return zs=e,zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zs,S6;function Xn(){if(S6)return Zs;S6=1;var e=SM();return Zs=e,Zs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qs,$6;function $M(){if($6)return Qs;$6=1;function e(n){return n===0?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+n*.14798198605116586)))))}return Qs=e,Qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ec,A6;function AM(){if(A6)return ec;A6=1;var e=oe(),n=En(),t=Ei(),r=ke(),i=rn(),o=Nt(),u=$M(),a=.6931471803691238,s=19082149292705877e-26,c=.41421356237309503,l=-.2928932188134525,f=1862645149230957e-24,d=5551115123125783e-32,h=9007199254740992,p=.6666666666666666;function v(m){var g,_,y,b,E,A,L,R,T,$;if(m<-1||e(m))return NaN;if(m===-1)return i;if(m===r||m===0)return m;if(m<0?y=-m:y=m,$=1,y<c){if(y<f)return y<d?m:m-m*m*.5;m>l&&($=0,b=m,_=1)}return $!==0&&(y<h?(T=1+m,_=n(T),$=(_>>20)-o,$>0?E=1-(T-m):E=m-(T-1),E/=T):(T=m,_=n(T),$=(_>>20)-o,E=0),_&=1048575,_<434334?T=t(T,_|1072693248):($+=1,T=t(T,_|1071644672),_=1048576-_>>2),b=T-1),g=.5*b*b,_===0?b===0?(E+=$*s,$*a+E):(R=g*(1-p*b),$*a-(R-($*s+E)-b)):(A=b/(2+b),L=A*A,R=L*u(L),$===0?b-(g-A*(g+R)):$*a-(g-(A*(g+R)+($*s+E))-b))}return ec=v,ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nc,L6;function wn(){if(L6)return nc;L6=1;var e=AM();return nc=e,nc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tc,I6;function LM(){if(I6)return tc;I6=1;var e=Math.sqrt;return tc=e,tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rc,C6;function ge(){if(C6)return rc;C6=1;var e=LM();return rc=e,rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ic,T6;function ME(){if(T6)return ic;T6=1;var e=.7853981633974483;return ic=e,ic}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oc,R6;function IM(){if(R6)return oc;R6=1;function e(n){var t,r,i;return n===0?.16666666666666713:(n<0?t=-n:t=n,t<=1?(r=-8.198089802484825+n*(19.562619833175948+n*(-16.262479672107002+n*(5.444622390564711+n*(-.6019598008014124+n*.004253011369004428)))),i=-49.18853881490881+n*(139.51056146574857+n*(-147.1791292232726+n*(70.49610280856842+n*(-14.740913729888538+n*1))))):(n=1/n,r=.004253011369004428+n*(-.6019598008014124+n*(5.444622390564711+n*(-16.262479672107002+n*(19.562619833175948+n*-8.198089802484825)))),i=1+n*(-14.740913729888538+n*(70.49610280856842+n*(-147.1791292232726+n*(139.51056146574857+n*-49.18853881490881))))),r/i)}return oc=e,oc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uc,k6;function CM(){if(k6)return uc;k6=1;function e(n){var t,r,i;return n===0?.08333333333333809:(n<0?t=-n:t=n,t<=1?(r=28.536655482610616+n*(-25.56901049652825+n*(6.968710824104713+n*(-.5634242780008963+n*.002967721961301243))),i=342.43986579130785+n*(-383.8770957603691+n*(147.0656354026815+n*(-21.947795316429207+n*1)))):(n=1/n,r=.002967721961301243+n*(-.5634242780008963+n*(6.968710824104713+n*(-25.56901049652825+n*28.536655482610616))),i=1+n*(-21.947795316429207+n*(147.0656354026815+n*(-383.8770957603691+n*342.43986579130785)))),r/i)}return uc=e,uc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ac,N6;function TM(){if(N6)return ac;N6=1;var e=oe(),n=ge(),t=ME(),r=IM(),i=CM(),o=6123233995736766e-32;function u(a){var s,c,l,f,d;if(e(a))return NaN;if(a>0?l=a:(s=!0,l=-a),l>1)return NaN;if(l>.625)c=1-l,f=c*i(c),c=n(c+c),d=t-c,c=c*f-o,d-=c,d+=t;else{if(l<1e-8)return a;c=l*l,d=c*r(c),d=l*d+l}return s?-d:d}return ac=u,ac}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sc,M6;function o2(){if(M6)return sc;M6=1;var e=TM();return sc=e,sc}/**
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
*/var cc,O6;function RM(){if(O6)return cc;O6=1;function e(n){return Math.abs(n)}return cc=e,cc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lc,q6;function be(){if(q6)return lc;q6=1;var e=RM();return lc=e,lc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fc,P6;function kM(){if(P6)return fc;P6=1;var e=Math.ceil;return fc=e,fc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dc,F6;function NM(){if(F6)return dc;F6=1;var e=kM();return dc=e,dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pc,D6;function MM(){if(D6)return pc;D6=1;var e=Xn(),n=NM();function t(r){return r<0?n(r):e(r)}return pc=t,pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hc,x6;function u2(){if(x6)return hc;x6=1;var e=MM();return hc=e,hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mc,B6;function OM(){if(B6)return mc;B6=1;var e=1023;return mc=e,mc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vc,H6;function qM(){if(H6)return vc;H6=1;var e=-1023;return vc=e,vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _c,U6;function PM(){if(U6)return _c;U6=1;var e=-1074;return _c=e,_c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gc,G6;function FM(){if(G6)return gc;G6=1;var e=ke(),n=rn();function t(r){return r===e||r===n}return gc=t,gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bc,V6;function mr(){if(V6)return bc;V6=1;var e=FM();return bc=e,bc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yc,W6;function DM(){if(W6)return yc;W6=1;var e=2147483648;return yc=e,yc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ec,j6;function Mt(){if(j6)return Ec;j6=1;var e=2147483647;return Ec=e,Ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wc,X6;function xM(){if(X6)return wc;X6=1;var e=pr(),n,t,r;return e===!0?(t=1,r=0):(t=0,r=1),n={HIGH:t,LOW:r},wc=n,wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sc,Y6;function OE(){if(Y6)return Sc;Y6=1;var e=fr(),n=dr(),t=xM(),r=new n(1),i=new e(r.buffer),o=t.HIGH,u=t.LOW;function a(s,c,l,f){return r[0]=s,c[f]=i[o],c[f+l]=i[u],c}return Sc=a,Sc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $c,K6;function BM(){if(K6)return $c;K6=1;var e=OE();function n(t){return e(t,[0,0],1,0)}return $c=n,$c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ac,J6;function a2(){if(J6)return Ac;J6=1;var e=tn(),n=BM(),t=OE();return e(n,"assign",t),Ac=n,Ac}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lc,z6;function HM(){if(z6)return Lc;z6=1;var e=DM(),n=Mt(),t=a2(),r=En(),i=pu(),o=[0,0];function u(a,s){var c,l;return t.assign(a,o,1,0),c=o[0],c&=n,l=r(s),l&=e,c|=l,i(c,o[1])}return Lc=u,Lc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ic,Z6;function s2(){if(Z6)return Ic;Z6=1;var e=HM();return Ic=e,Ic}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cc,Q6;function Ot(){if(Q6)return Cc;Q6=1;var e=22250738585072014e-324;return Cc=e,Cc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tc,e_;function qE(){if(e_)return Tc;e_=1;var e=Ot(),n=mr(),t=oe(),r=be(),i=4503599627370496;function o(u,a,s,c){return t(u)||n(u)?(a[c]=u,a[c+s]=0,a):u!==0&&r(u)<e?(a[c]=u*i,a[c+s]=-52,a):(a[c]=u,a[c+s]=0,a)}return Tc=o,Tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rc,n_;function UM(){if(n_)return Rc;n_=1;var e=qE();function n(t){return e(t,[0,0],1,0)}return Rc=n,Rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kc,t_;function GM(){if(t_)return kc;t_=1;var e=tn(),n=UM(),t=qE();return e(n,"assign",t),kc=n,kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nc,r_;function hu(){if(r_)return Nc;r_=1;var e=2146435072;return Nc=e,Nc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mc,i_;function VM(){if(i_)return Mc;i_=1;var e=En(),n=hu(),t=Nt();function r(i){var o=e(i);return o=(o&n)>>>20,o-t|0}return Mc=r,Mc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oc,o_;function WM(){if(o_)return Oc;o_=1;var e=VM();return Oc=e,Oc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qc,u_;function jM(){if(u_)return qc;u_=1;var e=ke(),n=rn(),t=Nt(),r=OM(),i=qM(),o=PM(),u=oe(),a=mr(),s=s2(),c=GM().assign,l=WM(),f=a2(),d=pu(),h=2220446049250313e-31,p=2148532223,v=[0,0],m=[0,0];function g(_,y){var b,E;return y===0||_===0||u(_)||a(_)?_:(c(_,v,1,0),_=v[0],y+=v[1],y+=l(_),y<o?s(0,_):y>r?_<0?n:e:(y<=i?(y+=52,E=h):E=1,f.assign(_,m,1,0),b=m[0],b&=p,b|=y+t<<20,E*d(b,m[1])))}return qc=g,qc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pc,a_;function vr(){if(a_)return Pc;a_=1;var e=jM();return Pc=e,Pc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fc,s_;function XM(){if(s_)return Fc;s_=1;function e(n){return n===0?.16666666666666602:.16666666666666602+n*(-.0027777777777015593+n*(6613756321437934e-20+n*(-16533902205465252e-22+n*41381367970572385e-24)))}return Fc=e,Fc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Dc,c_;function YM(){if(c_)return Dc;c_=1;var e=vr(),n=XM();function t(r,i,o){var u,a,s,c;return u=r-i,a=u*u,s=u-a*n(a),c=1-(i-u*s/(2-s)-r),e(c,o)}return Dc=t,Dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var xc,l_;function KM(){if(l_)return xc;l_=1;var e=oe(),n=u2(),t=rn(),r=ke(),i=YM(),o=.6931471803691238,u=19082149292705877e-26,a=1.4426950408889634,s=709.782712893384,c=-745.1332191019411,l=1/(1<<28),f=-l;function d(h){var p,v,m;return e(h)||h===r?h:h===t?0:h>s?r:h<c?0:h>f&&h<l?1+h:(h<0?m=n(a*h-.5):m=n(a*h+.5),p=h-m*o,v=m*u,i(p,v,m))}return xc=d,xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bc,f_;function Ne(){if(f_)return Bc;f_=1;var e=KM();return Bc=e,Bc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hc,d_;function JM(){if(d_)return Hc;d_=1;var e=Xn();function n(t){return e(t)===t}return Hc=n,Hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uc,p_;function _r(){if(p_)return Uc;p_=1;var e=JM();return Uc=e,Uc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gc,h_;function zM(){if(h_)return Gc;h_=1;var e=_r();function n(t){return e(t/2)}return Gc=n,Gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vc,m_;function ZM(){if(m_)return Vc;m_=1;var e=zM();return Vc=e,Vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wc,v_;function QM(){if(v_)return Wc;v_=1;var e=ZM();function n(t){return t>0?e(t-1):e(t+1)}return Wc=n,Wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jc,__;function c2(){if(__)return jc;__=1;var e=QM();return jc=e,jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xc,g_;function eO(){if(g_)return Xc;g_=1;var e=pr(),n;return e===!0?n=0:n=1,Xc=n,Xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yc,b_;function nO(){if(b_)return Yc;b_=1;var e=fr(),n=dr(),t=eO(),r=new n(1),i=new e(r.buffer);function o(u,a){return r[0]=u,i[t]=a>>>0,r[0]}return Yc=o,Yc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kc,y_;function wi(){if(y_)return Kc;y_=1;var e=nO();return Kc=e,Kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jc,E_;function tO(){if(E_)return Jc;E_=1;function e(n){return n|0}return Jc=e,Jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zc,w_;function PE(){if(w_)return zc;w_=1;var e=tO();return zc=e,zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Zc,S_;function rO(){if(S_)return Zc;S_=1;var e=c2(),n=s2(),t=rn(),r=ke();function i(o,u){return u===t?r:u===r?0:u>0?e(u)?o:0:e(u)?n(r,o):r}return Zc=i,Zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Qc,$_;function iO(){if($_)return Qc;$_=1;var e=Mt(),n=En(),t=1072693247,r=1e300,i=1e-300;function o(u,a){var s,c;return c=n(u),s=c&e,s<=t?a<0?r*r:i*i:a>0?r*r:i*i}return Qc=o,Qc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var el,A_;function oO(){if(A_)return el;A_=1;var e=be(),n=ke();function t(r,i){return r===-1?(r-r)/(r-r):r===1?1:e(r)<1==(i===n)?0:n}return el=t,el}/**
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
*/var nl,L_;function FE(){if(L_)return nl;L_=1;var e=20;return nl=e,nl}/**
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
*/var tl,I_;function uO(){if(I_)return tl;I_=1;function e(n){return n===0?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+n*.20697501780033842))))}return tl=e,tl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var rl,C_;function aO(){if(C_)return rl;C_=1;var e=En(),n=wi(),t=Ei(),r=Nt(),i=FE(),o=uO(),u=1048575,a=1048576,s=1072693248,c=536870912,l=524288,f=9007199254740992,d=.9617966939259756,h=.9617967009544373,p=-7028461650952758e-24,v=[1,1.5],m=[0,.5849624872207642],g=[0,1350039202129749e-23];function _(y,b,E){var A,L,R,T,$,w,S,I,C,P,M,H,q,F,O,Z,U,K,Q,ie,B,j;return ie=0,E<a&&(b*=f,ie-=53,E=e(b)),ie+=(E>>i)-r|0,B=E&u|0,E=B|s|0,B<=235662?j=0:B<767610?j=1:(j=0,ie+=1,E-=a),b=t(b,E),I=v[j],K=b-I,Q=1/(b+I),L=K*Q,T=n(L,0),A=(E>>1|c)+l,A+=j<<18,w=t(0,A),S=b-(w-I),$=Q*(K-T*w-T*S),R=L*L,U=R*R*o(R),U+=$*(T+L),R=T*T,w=3+R+U,w=n(w,0),S=U-(w-3-R),K=T*w,Q=$*w+S*L,P=K+Q,P=n(P,0),M=Q-(P-K),H=h*P,q=p*P+M*d+g[j],C=m[j],Z=ie,F=H+q+C+Z,F=n(F,0),O=q-(F-Z-C-H),y[0]=F,y[1]=O,y}return rl=_,rl}/**
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
*/var il,T_;function sO(){if(T_)return il;T_=1;function e(n){return n===0?.5:.5+n*(-.3333333333333333+n*.25)}return il=e,il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ol,R_;function cO(){if(R_)return ol;R_=1;var e=wi(),n=sO(),t=1.4426950408889634,r=1.4426950216293335,i=19259629911266175e-24;function o(u,a){var s,c,l,f,d,h;return l=a-1,f=l*l*n(l),d=r*l,h=l*i-f*t,c=d+h,c=e(c,0),s=h-(c-d),u[0]=c,u[1]=s,u}return ol=o,ol}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ul,k_;function lO(){if(k_)return ul;k_=1;var e=.6931471805599453;return ul=e,ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var al,N_;function DE(){if(N_)return al;N_=1;var e=1048575;return al=e,al}/**
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
*/var sl,M_;function fO(){if(M_)return sl;M_=1;function e(n){return n===0?.16666666666666602:.16666666666666602+n*(-.0027777777777015593+n*(6613756321437934e-20+n*(-16533902205465252e-22+n*41381367970572385e-24)))}return sl=e,sl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var cl,O_;function dO(){if(O_)return cl;O_=1;var e=En(),n=Ei(),t=wi(),r=PE(),i=vr(),o=lO(),u=Nt(),a=Mt(),s=DE(),c=FE(),l=fO(),f=1048576,d=1071644672,h=.6931471824645996,p=-1904654299957768e-24;function v(m,g,_){var y,b,E,A,L,R,T,$,w,S,I;return S=m&a|0,I=(S>>c)-u|0,w=0,S>d&&(w=m+(f>>I+1)>>>0,I=((w&a)>>c)-u|0,y=(w&~(s>>I))>>>0,E=n(0,y),w=(w&s|f)>>c-I>>>0,m<0&&(w=-w),g-=E),E=_+g,E=t(E,0),L=E*h,R=(_-(E-g))*o+E*p,$=L+R,T=R-($-L),E=$*$,b=$-E*l(E),A=$*b/(b-2)-(T+$*T),$=1-(A-$),m=e($),m=r(m),m+=w<<c>>>0,m>>c<=0?$=i($,w):$=n($,m),$}return cl=v,cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ll,q_;function pO(){if(q_)return ll;q_=1;var e=oe(),n=c2(),t=mr(),r=_r(),i=ge(),o=be(),u=a2(),a=wi(),s=PE(),c=rn(),l=ke(),f=Mt(),d=rO(),h=iO(),p=oO(),v=aO(),m=cO(),g=dO(),_=1072693247,y=1105199104,b=1139802112,E=1083179008,A=1072693248,L=1083231232,R=3230714880,T=31,$=1e300,w=1e-300,S=8008566259537294e-32,I=[0,0],C=[0,0];function P(M,H){var q,F,O,Z,U,K,Q,ie,B,j,V,$e,me,ne,ue,Ae;if(e(M)||e(H))return NaN;if(u.assign(H,I,1,0),K=I[0],Q=I[1],Q===0){if(H===0)return 1;if(H===1)return M;if(H===-1)return 1/M;if(H===.5)return i(M);if(H===-.5)return 1/i(M);if(H===2)return M*M;if(H===3)return M*M*M;if(H===4)return M*=M,M*M;if(t(H))return p(M,H)}if(u.assign(M,I,1,0),Z=I[0],U=I[1],U===0){if(Z===0)return d(M,H);if(M===1)return 1;if(M===-1&&n(H))return-1;if(t(M))return M===c?P(-0,-H):H<0?0:l}if(M<0&&r(H)===!1)return(M-M)/(M-M);if(O=o(M),q=Z&f|0,F=K&f|0,ie=Z>>>T|0,B=K>>>T|0,ie&&n(H)?ie=-1:ie=1,F>y){if(F>b)return h(M,H);if(q<_)return B===1?ie*$*$:ie*w*w;if(q>A)return B===0?ie*$*$:ie*w*w;me=m(C,O)}else me=v(C,O,q);if(j=a(H,0),$e=(H-j)*me[0]+H*me[1],V=j*me[0],ne=$e+V,u.assign(ne,I,1,0),ue=s(I[0]),Ae=s(I[1]),ue>=E){if((ue-E|Ae)!==0||$e+S>ne-V)return ie*$*$}else if((ue&f)>=L&&((ue-R|Ae)!==0||$e<=ne-V))return ie*w*w;return ne=g(ue,V,$e),ie*ne}return ll=P,ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fl,P_;function Me(){if(P_)return fl;P_=1;var e=pO();return fl=e,fl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dl,F_;function gr(){if(F_)return dl;F_=1;var e=2.718281828459045;return dl=e,dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pl,D_;function Yn(){if(D_)return pl;D_=1;var e=2220446049250313e-31;return pl=e,pl}/**
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
*/var hl,x_;function hO(){if(x_)return hl;x_=1;function e(n){var t,r,i;return n===0?1/0:(n<0?t=-n:t=n,t<=1?(r=709811.662581658+n*(679979.8474157227+n*(293136.7857211597+n*(74887.54032914672+n*(12555.290582413863+n*(1443.4299244417066+n*(115.24194596137347+n*(6.309239205732627+n*(.22668404630224365+n*(.004826466289237662+n*4624429436045379e-20))))))))),i=0+n*(362880+n*(1026576+n*(1172700+n*(723680+n*(269325+n*(63273+n*(9450+n*(870+n*(45+n*1)))))))))):(n=1/n,r=4624429436045379e-20+n*(.004826466289237662+n*(.22668404630224365+n*(6.309239205732627+n*(115.24194596137347+n*(1443.4299244417066+n*(12555.290582413863+n*(74887.54032914672+n*(293136.7857211597+n*(679979.8474157227+n*709811.662581658))))))))),i=1+n*(45+n*(870+n*(9450+n*(63273+n*(269325+n*(723680+n*(1172700+n*(1026576+n*(362880+n*0)))))))))),r/i)}return hl=e,hl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ml,B_;function mO(){if(B_)return ml;B_=1;var e=oe(),n=wn(),t=ge(),r=be(),i=Ne(),o=Me(),u=gr(),a=Yn(),s=hO(),c=10.900511;function l(f,d){var h,p,v,m,g,_,y;return e(f)||e(d)?NaN:f<0||d<0?NaN:d===1?1/f:f===1?1/d:(y=f+d,y<a?(g=y/f,g/=d,g):y===f&&d<a?1/d:y===d&&f<a?1/f:(f<d&&(_=d,d=f,f=_),p=f+c-.5,v=d+c-.5,m=y+c-.5,g=s(f)*(s(d)/s(y)),h=f-.5-d,r(d*h)<m*100&&f>100?g*=i(h*n(-d/m)):g*=o(p/m,h),m>1e10?g*=o(p/m*(v/m),d):g*=o(p*v/(m*m),d),g*=t(u/v),g))}return ml=l,ml}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vl,H_;function mu(){if(H_)return vl;H_=1;var e=mO();return vl=e,vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _l,U_;function vO(){if(U_)return _l;U_=1;var e=ke();function n(t){return t===0&&1/t===e}return _l=n,_l}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gl,G_;function _O(){if(G_)return gl;G_=1;var e=vO();return gl=e,gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bl,V_;function gO(){if(V_)return bl;V_=1;var e=_O(),n=oe(),t=ke();function r(i,o){return n(i)||n(o)?NaN:i===t||o===t?t:i===o&&i===0?e(i)?i:o:i>o?i:o}return bl=r,bl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yl,W_;function qt(){if(W_)return yl;W_=1;var e=gO();return yl=e,yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var El,j_;function bO(){if(j_)return El;j_=1;var e=rn();function n(t){return t===0&&1/t===e}return El=n,El}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wl,X_;function xE(){if(X_)return wl;X_=1;var e=bO();return wl=e,wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sl,Y_;function yO(){if(Y_)return Sl;Y_=1;var e=xE(),n=oe(),t=rn();function r(i,o){return n(i)||n(o)?NaN:i===t||o===t?t:i===o&&i===0?e(i)?i:o:i<o?i:o}return Sl=r,Sl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $l,K_;function yt(){if(K_)return $l;K_=1;var e=yO();return $l=e,$l}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Al,J_;function Pt(){if(J_)return Al;J_=1;var e=17976931348623157e292;return Al=e,Al}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ll,z_;function BE(){if(z_)return Ll;z_=1;var e=2147483647;return Ll=e,Ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Il,Z_;function l2(){if(Z_)return Il;Z_=1;var e=1.5707963267948966;return Il=e,Il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cl,Q_;function Et(){if(Q_)return Cl;Q_=1;var e=3.141592653589793;return Cl=e,Cl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tl,eg;function EO(){if(eg)return Tl;eg=1;function e(n){return n===0?.0416666666666666:.0416666666666666+n*(-.001388888888887411+n*2480158728947673e-20)}return Tl=e,Tl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rl,ng;function wO(){if(ng)return Rl;ng=1;function e(n){return n===0?-27557314351390663e-23:-27557314351390663e-23+n*(2087572321298175e-24+n*-11359647557788195e-27)}return Rl=e,Rl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var kl,tg;function SO(){if(tg)return kl;tg=1;var e=EO(),n=wO();function t(r,i){var o,u,a,s;return s=r*r,a=s*s,u=s*e(s),u+=a*a*n(s),o=.5*s,a=1-o,a+(1-a-o+(s*u-r*i))}return kl=t,kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nl,rg;function HE(){if(rg)return Nl;rg=1;var e=SO();return Nl=e,Nl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ml,ig;function $O(){if(ig)return Ml;ig=1;var e=-.16666666666666632,n=.00833333333332249,t=-.0001984126982985795,r=27557313707070068e-22,i=-25050760253406863e-24,o=158969099521155e-24;function u(a,s){var c,l,f,d;return d=a*a,f=d*d,c=n+d*(t+d*r)+d*f*(i+d*o),l=d*a,s===0?a+l*(e+d*c):a-(d*(.5*s-l*c)-s-l*e)}return Ml=u,Ml}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ol,og;function UE(){if(og)return Ol;og=1;var e=$O();return Ol=e,Ol}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ql,ug;function AO(){if(ug)return ql;ug=1;var e=pr(),n;return e===!0?n=0:n=1,ql=n,ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pl,ag;function LO(){if(ag)return Pl;ag=1;var e=fr(),n=dr(),t=AO(),r=new n(1),i=new e(r.buffer);function o(u){return r[0]=u,i[t]}return Pl=o,Pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fl,sg;function IO(){if(sg)return Fl;sg=1;var e=LO();return Fl=e,Fl}/**
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
*/var Dl,cg;function CO(){if(cg)return Dl;cg=1;function e(n,t){var r,i;for(r=[],i=0;i<t;i++)r.push(n);return r}return Dl=e,Dl}/**
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
*/var xl,lg;function TO(){if(lg)return xl;lg=1;var e=CO();return xl=e,xl}/**
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
*/var Bl,fg;function RO(){if(fg)return Bl;fg=1;var e=TO();function n(t){return e(0,t)}return Bl=n,Bl}/**
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
*/var Hl,dg;function kO(){if(dg)return Hl;dg=1;var e=RO();return Hl=e,Hl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ul,pg;function NO(){if(pg)return Ul;pg=1;var e=Xn(),n=vr(),t=kO(),r=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],i=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],o=16777216,u=5960464477539063e-23,a=t(20),s=t(20),c=t(20),l=t(20);function f(h,p,v,m,g,_,y,b,E){var A,L,R,T,$,w,S,I,C;for(T=_,C=m[v],I=v,$=0;I>0;$++)L=u*C|0,l[$]=C-o*L|0,C=m[I-1]+L,I-=1;if(C=n(C,g),C-=8*e(C*.125),S=C|0,C-=S,R=0,g>0?($=l[v-1]>>24-g,S+=$,l[v-1]-=$<<24-g,R=l[v-1]>>23-g):g===0?R=l[v-1]>>23:C>=.5&&(R=2),R>0){for(S+=1,A=0,$=0;$<v;$++)I=l[$],A===0?I!==0&&(A=1,l[$]=16777216-I):l[$]=16777215-I;if(g>0)switch(g){case 1:l[v-1]&=8388607;break;case 2:l[v-1]&=4194303;break}R===2&&(C=1-C,A!==0&&(C-=n(1,g)))}if(C===0){for(I=0,$=v-1;$>=_;$--)I|=l[$];if(I===0){for(w=1;l[_-w]===0;w++);for($=v+1;$<=v+w;$++){for(E[b+$]=r[y+$],L=0,I=0;I<=b;I++)L+=h[I]*E[b+($-I)];m[$]=L}return v+=w,f(h,p,v,m,g,_,y,b,E)}for(v-=1,g-=24;l[v]===0;)v-=1,g-=24}else C=n(C,-g),C>=o?(L=u*C|0,l[v]=C-o*L|0,v+=1,g+=24,l[v]=L):l[v]=C|0;for(L=n(1,g),$=v;$>=0;$--)m[$]=L*l[$],L*=u;for($=v;$>=0;$--){for(L=0,w=0;w<=T&&w<=v-$;w++)L+=i[w]*m[$+w];c[v-$]=L}for(L=0,$=v;$>=0;$--)L+=c[$];for(R===0?p[0]=L:p[0]=-L,L=c[0]-L,$=1;$<=v;$++)L+=c[$];return R===0?p[1]=L:p[1]=-L,S&7}function d(h,p,v,m){var g,_,y,b,E,A,L,R,T;for(_=4,b=m-1,y=(v-3)/24|0,y<0&&(y=0),A=v-24*(y+1),R=y-b,T=b+_,L=0;L<=T;L++)R<0?a[L]=0:a[L]=r[R],R+=1;for(L=0;L<=_;L++){for(g=0,R=0;R<=b;R++)g+=h[R]*a[b+(L-R)];s[L]=g}return E=_,f(h,p,E,s,A,_,y,b,a)}return Ul=d,Ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gl,hg;function MO(){if(hg)return Gl;hg=1;var e=Math.round;return Gl=e,Gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vl,mg;function GE(){if(mg)return Vl;mg=1;var e=MO();return Vl=e,Vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Wl,vg;function OO(){if(vg)return Wl;vg=1;var e=GE(),n=En(),t=.6366197723675814,r=1.5707963267341256,i=6077100506506192e-26,o=6077100506303966e-26,u=20222662487959506e-37,a=20222662487111665e-37,s=84784276603689e-45,c=2047;function l(f,d,h){var p,v,m,g,_,y,b;return v=e(f*t),g=f-v*r,_=v*i,b=d>>20|0,h[0]=g-_,p=n(h[0]),y=b-(p>>20&c),y>16&&(m=g,_=v*o,g=m-_,_=v*u-(m-g-_),h[0]=g-_,p=n(h[0]),y=b-(p>>20&c),y>49&&(m=g,_=v*a,g=m-_,_=v*s-(m-g-_),h[0]=g-_)),h[1]=g-h[0]-_,v}return Wl=l,Wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var jl,_g;function qO(){if(_g)return jl;_g=1;var e=Mt(),n=hu(),t=DE(),r=En(),i=IO(),o=pu(),u=NO(),a=OO(),s=0,c=16777216,l=1.5707963267341256,f=6077100506506192e-26,d=2*f,h=3*f,p=4*f,v=598523,m=1072243195,g=1073928572,_=1074752122,y=1074977148,b=1075183036,E=1075388923,A=1075594811,L=1094263291,R=[0,0,0],T=[0,0];function $(w,S){var I,C,P,M,H,q,F,O;if(P=r(w)|0,M=P&e|0,M<=m)return S[0]=w,S[1]=0,0;if(M<=_)return(M&t)===v?a(w,M,S):M<=g?P>0?(O=w-l,S[0]=O-f,S[1]=O-S[0]-f,1):(O=w+l,S[0]=O+f,S[1]=O-S[0]+f,-1):P>0?(O=w-2*l,S[0]=O-d,S[1]=O-S[0]-d,2):(O=w+2*l,S[0]=O+d,S[1]=O-S[0]+d,-2);if(M<=A)return M<=b?M===y?a(w,M,S):P>0?(O=w-3*l,S[0]=O-h,S[1]=O-S[0]-h,3):(O=w+3*l,S[0]=O+h,S[1]=O-S[0]+h,-3):M===E?a(w,M,S):P>0?(O=w-4*l,S[0]=O-p,S[1]=O-S[0]-p,4):(O=w+4*l,S[0]=O+p,S[1]=O-S[0]+p,-4);if(M<L)return a(w,M,S);if(M>=n)return S[0]=NaN,S[1]=NaN,0;for(I=i(w),C=(M>>20)-1046,O=o(M-(C<<20|0),I),q=0;q<2;q++)R[q]=O|0,O=(O-R[q])*c;for(R[2]=O,H=3;R[H-1]===s;)H-=1;return F=u(R,T,C,H,1),P<0?(S[0]=-T[0],S[1]=-T[1],-F):(S[0]=T[0],S[1]=T[1],F)}return jl=$,jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xl,gg;function VE(){if(gg)return Xl;gg=1;var e=qO();return Xl=e,Xl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Yl,bg;function PO(){if(bg)return Yl;bg=1;var e=Mt(),n=hu(),t=En(),r=HE(),i=UE(),o=VE(),u=1072243195,a=1045430272,s=[0,0];function c(l){var f,d;if(f=t(l),f&=e,f<=u)return f<a?l:i(l,0);if(f>=n)return NaN;switch(d=o(l,s),d&3){case 0:return i(s[0],s[1]);case 1:return r(s[0],s[1]);case 2:return-i(s[0],s[1]);default:return-r(s[0],s[1])}}return Yl=c,Yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kl,yg;function Si(){if(yg)return Kl;yg=1;var e=PO();return Kl=e,Kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jl,Eg;function vu(){if(Eg)return Jl;Eg=1;var e=2.5066282746310007;return Jl=e,Jl}/**
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
*/var zl,wg;function FO(){if(wg)return zl;wg=1;function e(n){return n===0?.08333333333334822:.08333333333334822+n*(.0034722222160545866+n*(-.0026813261780578124+n*(-.00022954996161337813+n*.0007873113957930937)))}return zl=e,zl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Zl,Sg;function DO(){if(Sg)return Zl;Sg=1;var e=vu(),n=Me(),t=Ne(),r=FO(),i=143.01608;function o(u){var a,s,c;return a=1/u,a=1+a*r(a),s=t(u),u>i?(c=n(u,.5*u-.25),s=c*(c/s)):s=n(u,u-.5)/s,e*s*a}return Zl=o,Zl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ql,$g;function xO(){if($g)return Ql;$g=1;var e=.5772156649015329;return Ql=e,Ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var e0,Ag;function BO(){if(Ag)return e0;Ag=1;var e=xO();function n(t,r){return r/((1+e*t)*t)}return e0=n,e0}/**
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
*/var n0,Lg;function HO(){if(Lg)return n0;Lg=1;function e(n){var t,r,i;return n===0?1:(n<0?t=-n:t=n,t<=1?(r=1+n*(.4942148268014971+n*(.20744822764843598+n*(.04763678004571372+n*(.010421379756176158+n*(.0011913514700658638+n*(.00016011952247675185+n*0)))))),i=1+n*(.0714304917030273+n*(-.23459179571824335+n*(.035823639860549865+n*(.011813978522206043+n*(-.004456419138517973+n*(.0005396055804933034+n*-23158187332412014e-21))))))):(n=1/n,r=0+n*(.00016011952247675185+n*(.0011913514700658638+n*(.010421379756176158+n*(.04763678004571372+n*(.20744822764843598+n*(.4942148268014971+n*1)))))),i=-23158187332412014e-21+n*(.0005396055804933034+n*(-.004456419138517973+n*(.011813978522206043+n*(.035823639860549865+n*(-.23459179571824335+n*(.0714304917030273+n*1))))))),r/i)}return n0=e,n0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var t0,Ig;function UO(){if(Ig)return t0;Ig=1;var e=oe(),n=_r(),t=xE(),r=be(),i=Xn(),o=Si(),u=ke(),a=rn(),s=Et(),c=DO(),l=BO(),f=HO();function d(h){var p,v,m,g;if(n(h)&&h<0||h===a||e(h))return NaN;if(h===0)return t(h)?a:u;if(h>171.61447887182297)return u;if(h<-170.5674972726612)return 0;if(v=r(h),v>33)return h>=0?c(h):(m=i(v),(m&1)===0?p=-1:p=1,g=v-m,g>.5&&(m+=1,g=v-m),g=v*o(s*g),p*s/(r(g)*c(v)));for(g=1;h>=3;)h-=1,g*=h;for(;h<0;){if(h>-1e-9)return l(h,g);g/=h,h+=1}for(;h<2;){if(h<1e-9)return l(h,g);g/=h,h+=1}return h===2?g:(h-=2,g*f(h))}return t0=d,t0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r0,Cg;function Kn(){if(Cg)return r0;Cg=1;var e=UO();return r0=e,r0}/**
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
*/var i0,Tg;function _u(){if(Tg)return i0;Tg=1;var e=170;return i0=e,i0}const GO=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o0,Rg;function VO(){if(Rg)return o0;Rg=1;var e=oe(),n=_r(),t=Kn(),r=ke(),i=_u(),o=GO;function u(a){return e(a)?NaN:n(a)?a<0?NaN:a<=i?o[a]:r:t(a+1)}return o0=u,o0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u0,kg;function WE(){if(kg)return u0;kg=1;var e=VO();return u0=e,u0}/**
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
*/var a0,Ng;function WO(){if(Ng)return a0;Ng=1;function e(n){var t,r,i;return n===0?1/0:(n<0?t=-n:t=n,t<=1?(r=3847467039331777e-5+n*(3685766504351951e-5+n*(1588920245372942e-5+n*(4059208354298835e-6+n*(6805476611834733e-7+n*(7823975500312005e-8+n*(6246580776401795e-9+n*(341986.3488721347+n*(12287.194511824551+n*(261.61404416416684+n*2.5066282746310007))))))))),i=0+n*(362880+n*(1026576+n*(1172700+n*(723680+n*(269325+n*(63273+n*(9450+n*(870+n*(45+n*1)))))))))):(n=1/n,r=2.5066282746310007+n*(261.61404416416684+n*(12287.194511824551+n*(341986.3488721347+n*(6246580776401795e-9+n*(7823975500312005e-8+n*(6805476611834733e-7+n*(4059208354298835e-6+n*(1588920245372942e-5+n*(3685766504351951e-5+n*3847467039331777e-5))))))))),i=1+n*(45+n*(870+n*(9450+n*(63273+n*(269325+n*(723680+n*(1172700+n*(1026576+n*(362880+n*0)))))))))),r/i)}return a0=e,a0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var s0,Mg;function jO(){if(Mg)return s0;Mg=1;var e=WO();return s0=e,s0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c0,Og;function XO(){if(Og)return c0;Og=1;var e=jO();return c0=e,c0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l0,qg;function $i(){if(qg)return l0;qg=1;var e=10.900511;return l0=e,l0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var f0,Pg;function YO(){if(Pg)return f0;Pg=1;var e=XO(),n=Kn(),t=wn(),r=be(),i=Ne(),o=Me(),u=Yn(),a=gr(),s=$i(),c=_u(),l=4269068009004705e289;function f(d,h){var p,v,m;return d<u?h>=c?(v=f(h,c-h),v*=d,v*=l,1/v):1/(d*n(d+h)):(m=d+s-.5,d+h===d?r(h/m)<u?p=i(-h):p=1:(r(h)<10?p=i((.5-d)*t(h/m)):p=o(m/(m+h),d-.5),p*=e(d)/e(d+h)),p*=o(a/(m+h),h),p)}return f0=f,f0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var d0,Fg;function KO(){if(Fg)return d0;Fg=1;var e=be(),n=Xn(),t=Kn(),r=WE(),i=_u(),o=YO();function u(a,s){var c,l,f;if(a<=0||a+s<=0)return t(a)/t(a+s);if(l=n(s),l===s){if(f=n(a),f===a&&a<=i&&a+s<=i)return r(f-1)/r(l+f-1);if(e(s)<20){if(s===0)return 1;if(s<0){for(a-=1,c=a,s+=1;s!==0;)a-=1,c*=a,s+=1;return c}for(c=1/a,s-=1;s!==0;)a+=1,c/=a,s-=1;return c}}return o(a,s)}return d0=u,d0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p0,Dg;function f2(){if(Dg)return p0;Dg=1;var e=KO();return p0=e,p0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h0,xg;function JO(){if(xg)return h0;xg=1;function e(n){return n===0?.3999999999940942:.3999999999940942+n*(.22222198432149784+n*.15313837699209373)}return h0=e,h0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m0,Bg;function zO(){if(Bg)return m0;Bg=1;function e(n){return n===0?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+n*.14798198605116586))}return m0=e,m0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var v0,Hg;function ZO(){if(Hg)return v0;Hg=1;var e=En(),n=Ei(),t=oe(),r=Nt(),i=rn(),o=JO(),u=zO(),a=.6931471803691238,s=19082149292705877e-26,c=0x40000000000000,l=.3333333333333333,f=1048575,d=2146435072,h=1048576,p=1072693248;function v(m){var g,_,y,b,E,A,L,R,T,$,w,S;return m===0?i:t(m)||m<0?NaN:(_=e(m),E=0,_<h&&(E-=54,m*=c,_=e(m)),_>=d?m+m:(E+=(_>>20)-r|0,_&=f,R=_+614244&1048576|0,m=n(m,_|R^p),E+=R>>20|0,L=m-1,(f&2+_)<3?L===0?E===0?0:E*a+E*s:(A=L*L*(.5-l*L),E===0?L-A:E*a-(A-E*s-L)):($=L/(2+L),S=$*$,R=_-398458|0,w=S*S,T=440401-_|0,b=w*o(w),y=S*u(w),R|=T,A=y+b,R>0?(g=.5*L*L,E===0?L-(g-$*(g+A)):E*a-(g-($*(g+A)+E*s)-L)):E===0?L-$*(L-A):E*a-($*(L-A)-E*s-L))))}return v0=v,v0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _0,Ug;function we(){if(Ug)return _0;Ug=1;var e=ZO();return _0=e,_0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var g0,Gg;function QO(){if(Gg)return g0;Gg=1;var e=En(),n=HE(),t=UE(),r=VE(),i=Mt(),o=hu(),u=[0,0],a=1072243195,s=1044381696;function c(l){var f,d;if(f=e(l),f&=i,f<=a)return f<s?1:n(l,0);if(f>=o)return NaN;switch(d=r(l,u),d&3){case 0:return n(u[0],u[1]);case 1:return-t(u[0],u[1]);case 2:return-n(u[0],u[1]);default:return t(u[0],u[1])}}return g0=c,g0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b0,Vg;function d2(){if(Vg)return b0;Vg=1;var e=QO();return b0=e,b0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y0,Wg;function eq(){if(Wg)return y0;Wg=1;var e=oe(),n=mr(),t=d2(),r=Si(),i=be(),o=s2(),u=Et();function a(s){var c,l;return e(s)?NaN:n(s)?NaN:(l=s%2,c=i(l),c===0||c===1?o(0,l):c<.25?r(u*l):c<.75?(c=.5-c,o(t(u*c),l)):c<1.25?(l=o(1,l)-l,r(u*l)):c<1.75?(c-=1.5,-o(t(u*c),l)):(l-=o(2,l),r(u*l)))}return y0=a,y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E0,jg;function nq(){if(jg)return E0;jg=1;var e=eq();return E0=e,E0}/**
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
*/var w0,Xg;function tq(){if(Xg)return w0;Xg=1;function e(n){return n===0?.06735230105312927:.06735230105312927+n*(.007385550860814029+n*(.0011927076318336207+n*(.00022086279071390839+n*25214456545125733e-21)))}return w0=e,w0}/**
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
*/var S0,Yg;function rq(){if(Yg)return S0;Yg=1;function e(n){return n===0?.020580808432516733:.020580808432516733+n*(.0028905138367341563+n*(.0005100697921535113+n*(.00010801156724758394+n*44864094961891516e-21)))}return S0=e,S0}/**
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
*/var $0,Kg;function iq(){if(Kg)return $0;Kg=1;function e(n){return n===0?1.3920053346762105:1.3920053346762105+n*(.7219355475671381+n*(.17193386563280308+n*(.01864591917156529+n*(.0007779424963818936+n*7326684307446256e-21))))}return $0=e,$0}/**
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
*/var A0,Jg;function oq(){if(Jg)return A0;Jg=1;function e(n){return n===0?.21498241596060885:.21498241596060885+n*(.325778796408931+n*(.14635047265246445+n*(.02664227030336386+n*(.0018402845140733772+n*3194753265841009e-20))))}return A0=e,A0}/**
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
*/var L0,zg;function uq(){if(zg)return L0;zg=1;function e(n){return n===0?-.032788541075985965:-.032788541075985965+n*(.006100538702462913+n*(-.0014034646998923284+n*.00031563207090362595))}return L0=e,L0}/**
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
*/var I0,Zg;function aq(){if(Zg)return I0;Zg=1;function e(n){return n===0?.01797067508118204:.01797067508118204+n*(-.0036845201678113826+n*(.000881081882437654+n*-.00031275416837512086))}return I0=e,I0}/**
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
*/var C0,Qg;function sq(){if(Qg)return C0;Qg=1;function e(n){return n===0?-.010314224129834144:-.010314224129834144+n*(.0022596478090061247+n*(-.0005385953053567405+n*.0003355291926355191))}return C0=e,C0}/**
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
*/var T0,eb;function cq(){if(eb)return T0;eb=1;function e(n){return n===0?.6328270640250934:.6328270640250934+n*(1.4549225013723477+n*(.9777175279633727+n*(.22896372806469245+n*.013381091853678766)))}return T0=e,T0}/**
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
*/var R0,nb;function lq(){if(nb)return R0;nb=1;function e(n){return n===0?2.4559779371304113:2.4559779371304113+n*(2.128489763798934+n*(.7692851504566728+n*(.10422264559336913+n*.003217092422824239)))}return R0=e,R0}/**
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
*/var k0,tb;function fq(){if(tb)return k0;tb=1;function e(n){return n===0?.08333333333333297:.08333333333333297+n*(-.0027777777772877554+n*(.0007936505586430196+n*(-.00059518755745034+n*(.0008363399189962821+n*-.0016309293409657527))))}return k0=e,k0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var N0,rb;function dq(){if(rb)return N0;rb=1;var e=oe(),n=mr(),t=be(),r=we(),i=u2(),o=nq(),u=Et(),a=ke(),s=tq(),c=rq(),l=iq(),f=oq(),d=uq(),h=aq(),p=sq(),v=cq(),m=lq(),g=fq(),_=.07721566490153287,y=.3224670334241136,b=1,E=-.07721566490153287,A=.48383612272381005,L=-.1475877229945939,R=.06462494023913339,T=-.07721566490153287,$=1,w=.4189385332046727,S=1.4616321449683622,I=4503599627370496,C=72057594037927940,P=13877787807814457e-33,M=1.4616321449683622,H=-.12148629053584961,q=-3638676997039505e-33;function F(O){var Z,U,K,Q,ie,B,j,V,$e,me,ne,ue,Ae;if(e(O)||n(O))return O;if(O===0)return a;if(O<0?(Z=!0,O=-O):Z=!1,O<P)return-r(O);if(Z){if(O>=I||($e=o(O),$e===0))return a;U=r(u/t($e*O))}if(O===1||O===2)return 0;if(O<2)switch(O<=.9?(Ae=-r(O),O>=S-1+.27?(ne=1-O,K=0):O>=S-1-.27?(ne=O-(M-1),K=1):(ne=O,K=2)):(Ae=0,O>=S+.27?(ne=2-O,K=0):O>=S-.27?(ne=O-M,K=1):(ne=O-1,K=2)),K){case 0:ue=ne*ne,B=_+ue*s(ue),ie=ue*(y+ue*c(ue)),j=ne*B+ie,Ae+=j-.5*ne;break;case 1:ue=ne*ne,me=ue*ne,B=A+me*d(me),ie=L+me*h(me),Q=R+me*p(me),j=ue*B-(q-me*(ie+ne*Q)),Ae+=H+j;break;case 2:B=ne*(T+ne*v(ne)),ie=$+ne*m(ne),Ae+=-.5*ne+B/ie;break}else if(O<8)switch(K=i(O),ne=O-K,j=ne*(E+ne*f(ne)),V=b+ne*l(ne),Ae=.5*ne+j/V,ue=1,K){case 7:ue*=ne+6;case 6:ue*=ne+5;case 5:ue*=ne+4;case 4:ue*=ne+3;case 3:ue*=ne+2,Ae+=r(ue)}else O<C?($e=r(O),ue=1/O,ne=ue*ue,me=w+ue*g(ne),Ae=(O-.5)*($e-1)+me):Ae=O*(r(O)-1);return Z&&(Ae=U-Ae),Ae}return N0=F,N0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M0,ib;function br(){if(ib)return M0;ib=1;var e=dq();return M0=e,M0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O0,ob;function wt(){if(ob)return O0;ob=1;var e=709.782712893384;return O0=e,O0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q0,ub;function pq(){if(ub)return q0;ub=1;var e=14901161193847656e-24;return q0=e,q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P0,ab;function hq(){if(ab)return P0;ab=1;var e=eval;return P0=e,P0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F0,sb;function mq(){if(sb)return F0;sb=1;var e=hq();function n(){var t;try{e('"use strict"; (function* () {})'),t=!0}catch{t=!1}return t}return F0=n,F0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D0,cb;function jE(){if(cb)return D0;cb=1;var e=mq();return D0=e,D0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x0,lb;function vq(){if(lb)return x0;lb=1;var e=be(),n=Yn(),t=1e6;function r(i,o){var u,a,s,c,l,f;if(f={},arguments.length>1&&(f=o),a=f.tolerance||n,c=f.maxTerms||t,l=f.initialValue||0,u=typeof i.next=="function",u===!0){for(s of i)if(l+=s,e(a*l)>=e(s)||--c===0)break}else do s=i(),l+=s;while(e(a*l)<e(s)&&--c);return l}return x0=r,x0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0,fb;function _q(){if(fb)return B0;fb=1;var e=be(),n=Yn(),t=1e6;function r(i,o){var u,a,s,c,l;l={},arguments.length>1&&(l=o),u=l.tolerance||n,s=l.maxTerms||t,c=l.initialValue||0;do a=i(),c+=a;while(e(u*c)<e(a)&&--s);return c}return B0=r,B0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H0,db;function Ai(){if(db)return H0;db=1;var e=jE(),n=vq(),t=_q(),r;return e()?r=n:r=t,H0=r,H0}/**
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
*/var U0,pb;function gq(){if(pb)return U0;pb=1;function e(n,t){var r=1,i=n,o=t;return u;function u(){var a=r;return r*=i/o,i-=1,a}}return U0=e,U0}/**
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
*/var G0,hb;function bq(){if(hb)return G0;hb=1;var e=Ai(),n=gq();function t(r,i){var o,u;return u=n(r,i),o=e(u),o}return G0=t,G0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var V0,mb;function yq(){if(mb)return V0;mb=1;var e=Ne();function n(t,r){var i,o,u,a;if(u=e(-r),o=u,o!==0)for(i=o,a=1;a<t;++a)i/=a,i*=r,o+=i;return o}return V0=n,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,vb;function Eq(){if(vb)return W0;vb=1;function e(n){return n===0?-.3250421072470015:-.3250421072470015+n*(-.02848174957559851+n*(-.005770270296489442+n*-23763016656650163e-21))}return W0=e,W0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j0,_b;function wq(){if(_b)return j0;_b=1;function e(n){return n===0?.39791722395915535:.39791722395915535+n*(.0650222499887673+n*(.005081306281875766+n*(.00013249473800432164+n*-3960228278775368e-21)))}return j0=e,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X0,gb;function Sq(){if(gb)return X0;gb=1;function e(n){return n===0?.41485611868374833:.41485611868374833+n*(-.3722078760357013+n*(.31834661990116175+n*(-.11089469428239668+n*(.035478304325618236+n*-.002166375594868791))))}return X0=e,X0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y0,bb;function $q(){if(bb)return Y0;bb=1;function e(n){return n===0?.10642088040084423:.10642088040084423+n*(.540397917702171+n*(.07182865441419627+n*(.12617121980876164+n*(.01363708391202905+n*.011984499846799107))))}return Y0=e,Y0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K0,yb;function Aq(){if(yb)return K0;yb=1;function e(n){return n===0?-.6938585727071818:-.6938585727071818+n*(-10.558626225323291+n*(-62.375332450326006+n*(-162.39666946257347+n*(-184.60509290671104+n*(-81.2874355063066+n*-9.814329344169145)))))}return K0=e,K0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J0,Eb;function Lq(){if(Eb)return J0;Eb=1;function e(n){return n===0?19.651271667439257:19.651271667439257+n*(137.65775414351904+n*(434.56587747522923+n*(645.3872717332679+n*(429.00814002756783+n*(108.63500554177944+n*(6.570249770319282+n*-.0604244152148581))))))}return J0=e,J0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z0,wb;function Iq(){if(wb)return z0;wb=1;function e(n){return n===0?-.799283237680523:-.799283237680523+n*(-17.757954917754752+n*(-160.63638485582192+n*(-637.5664433683896+n*(-1025.0951316110772+n*-483.5191916086514))))}return z0=e,z0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z0,Sb;function Cq(){if(Sb)return Z0;Sb=1;function e(n){return n===0?30.33806074348246:30.33806074348246+n*(325.7925129965739+n*(1536.729586084437+n*(3199.8582195085955+n*(2553.0504064331644+n*(474.52854120695537+n*-22.44095244658582)))))}return Z0=e,Z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Q0,$b;function Tq(){if($b)return Q0;$b=1;var e=oe(),n=Ne(),t=wi(),r=ke(),i=rn(),o=Eq(),u=wq(),a=Sq(),s=$q(),c=Aq(),l=Lq(),f=Iq(),d=Cq(),h=1e-300,p=13877787807814457e-33,v=.8450629115104675,m=.12837916709551256,g=1,_=-.0023621185607526594,y=1,b=-.009864944034847148,E=1,A=-.0098649429247001,L=1;function R(T){var $,w,S,I,C,P,M,H;if(e(T))return NaN;if(T===r)return 0;if(T===i)return 2;if(T===0)return 1;if(T<0?($=!0,w=-T):($=!1,w=T),w<.84375)return w<p?1-T:(S=T*T,I=m+S*o(S),C=g+S*u(S),P=I/C,T<.25?1-(T+T*P):(I=T*P,I+=T-.5,.5-I));if(w<1.25)return C=w-1,M=_+C*a(C),H=y+C*s(C),$?1+v+M/H:1-v-M/H;if(w<28){if(C=1/(w*w),w<2.857142857142857)I=b+C*c(C),C=E+C*l(C);else{if(T<-6)return 2-h;I=A+C*f(C),C=L+C*d(C)}return S=t(w,0),I=n(-(S*S)-.5625)*n((S-w)*(S+w)+I/C),$?2-I/w:I/w}return $?2-h:h*h}return Q0=R,Q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ef,Ab;function gu(){if(Ab)return ef;Ab=1;var e=Tq();return ef=e,ef}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var nf,Lb;function Rq(){if(Lb)return nf;Lb=1;var e=gu(),n=ge(),t=Ne(),r=Et();function i(o,u){var a,s,c,l,f;if(l=e(n(u)),l!==0&&o>1){for(s=t(-u)/n(r*u),s*=u,a=.5,s/=a,c=s,f=2;f<o;++f)s/=f-a,s*=u,c+=s;l+=c}return l}return nf=i,nf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tf,Ib;function yr(){if(Ib)return tf;Ib=1;var e=-708.3964185322641;return tf=e,tf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var rf,Cb;function kq(){if(Cb)return rf;Cb=1;var e=Ne(),n=Me(),t=we(),r=wt(),i=yr();function o(u,a){var s,c;return c=u*t(a),a>=1?c<r&&-a>i?s=n(a,u)*e(-a):u>=1?s=n(a/e(a/u),u):s=e(c-a):c>i?s=n(a,u)*e(-a):a/u<r?s=n(a/e(a/u),u):s=e(c-a),s}return rf=o,rf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var of,Tb;function XE(){if(Tb)return of;Tb=1;function e(n,t){var r,i;if(i=n.length,i<2||t===0)return i===0?0:n[0];for(i-=1,r=n[i]*t+n[i-1],i-=2;i>=0;)r=r*t+n[i],i-=1;return r}return of=e,of}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uf,Rb;function Nq(){if(Rb)return uf;Rb=1;var e=Function;return uf=e,uf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var af,kb;function Mq(){if(kb)return af;kb=1;var e=Nq();return af=e,af}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sf,Nb;function Oq(){if(Nb)return sf;Nb=1;var e=Mq(),n=XE();function t(r){var i,o,u,a;if(r.length>500)return s;if(i="return function evalpoly(x){",o=r.length,o===0)i+="return 0.0;";else if(o===1)i+="return "+r[0]+";";else{for(i+="if(x===0.0){return "+r[0]+";}",i+="return "+r[0],u=o-1,a=1;a<o;a++)i+="+x*",a<u&&(i+="("),i+=r[a];for(a=0;a<u-1;a++)i+=")";i+=";"}return i+="}",i+="//# sourceURL=evalpoly.factory.js",new e(i)();function s(c){return n(r,c)}}return sf=t,sf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cf,Mb;function St(){if(Mb)return cf;Mb=1;var e=tn(),n=XE(),t=Oq();return e(n,"factory",t),cf=n,cf}/**
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
*/var lf,Ob;function qq(){if(Ob)return lf;Ob=1;function e(n){var t=-n,r=-1,i=0;return o;function o(){return r*=t,i+=1,r/i}}return lf=e,lf}/**
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
*/var ff,qb;function Pq(){if(qb)return ff;qb=1;var e=be(),n=we(),t=Yn(),r=Ai(),i=qq();function o(u){var a,s;return u<=-1?NaN:(s=e(u),s>.95?n(1+u)-u:s<t?-u*u/2:(a={initialValue:-u},r(i(u),a)))}return ff=o,ff}/**
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
*/var df,Pb;function YE(){if(Pb)return df;Pb=1;var e=Pq();return df=e,df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pf,Fb;function bu(){if(Fb)return pf;Fb=1;var e=6.283185307179586;return pf=e,pf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hf,Db;function Fq(){if(Db)return hf;Db=1;function e(n){return n===0?-.3333333333333333:-.3333333333333333+n*(.08333333333333333+n*(-.014814814814814815+n*(.0011574074074074073+n*(.0003527336860670194+n*(-.0001787551440329218+n*(3919263178522438e-20+n*(-21854485106799924e-22+n*(-185406221071516e-20+n*(8296711340953087e-22+n*(-17665952736826078e-23+n*(6707853543401498e-24+n*(10261809784240309e-24+n*(-4382036018453353e-24+n*914769958223679e-24)))))))))))))}return hf=e,hf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mf,xb;function Dq(){if(xb)return mf;xb=1;function e(n){return n===0?-.001851851851851852:-.001851851851851852+n*(-.003472222222222222+n*(.0026455026455026454+n*(-.0009902263374485596+n*(.00020576131687242798+n*(-4018775720164609e-22+n*(-18098550334489977e-21+n*(764916091608111e-20+n*(-16120900894563446e-22+n*(4647127802807434e-24+n*(1378633446915721e-22+n*(-5752545603517705e-23+n*11951628599778148e-24)))))))))))}return mf=e,mf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vf,Bb;function xq(){if(Bb)return vf;Bb=1;function e(n){return n===0?.004133597883597883:.004133597883597883+n*(-.0026813271604938273+n*(.0007716049382716049+n*(20093878600823047e-22+n*(-.00010736653226365161+n*(52923448829120125e-21+n*(-12760635188618728e-21+n*(3423578734096138e-23+n*(13721957309062932e-22+n*(-6298992138380055e-22+n*14280614206064242e-23)))))))))}return vf=e,vf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _f,Hb;function Bq(){if(Hb)return _f;Hb=1;function e(n){return n===0?.0006494341563786008:.0006494341563786008+n*(.00022947209362139917+n*(-.0004691894943952557+n*(.00026772063206283885+n*(-7561801671883977e-20+n*(-2396505113867297e-22+n*(11082654115347302e-21+n*(-56749528269915965e-22+n*14230900732435883e-22)))))))}return _f=e,_f}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gf,Ub;function Hq(){if(Ub)return gf;Ub=1;function e(n){return n===0?-.0008618882909167117:-.0008618882909167117+n*(.0007840392217200666+n*(-.0002990724803031902+n*(-14638452578843418e-22+n*(6641498215465122e-20+n*(-3968365047179435e-20+n*11375726970678419e-21)))))}return gf=e,gf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bf,Gb;function Uq(){if(Gb)return bf;Gb=1;function e(n){return n===0?-.00033679855336635813:-.00033679855336635813+n*(-6972813758365858e-20+n*(.0002772753244959392+n*(-.00019932570516188847+n*(6797780477937208e-20+n*(1419062920643967e-22+n*(-13594048189768693e-21+n*(8018470256334202e-21+n*-2291481176508095e-21)))))))}return bf=e,bf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yf,Vb;function Gq(){if(Vb)return yf;Vb=1;function e(n){return n===0?.0005313079364639922:.0005313079364639922+n*(-.0005921664373536939+n*(.0002708782096718045+n*(7902353232660328e-22+n*(-8153969367561969e-20+n*(561168275310625e-19+n*-18329116582843375e-21)))))}return yf=e,yf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ef,Wb;function Vq(){if(Wb)return Ef;Wb=1;function e(n){return n===0?.00034436760689237765:.00034436760689237765+n*(5171790908260592e-20+n*(-.00033493161081142234+n*(.0002812695154763237+n*-.00010976582244684731)))}return Ef=e,Ef}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wf,jb;function Wq(){if(jb)return wf;jb=1;function e(n){return n===0?-.0006526239185953094:-.0006526239185953094+n*(.0008394987206720873+n*-.000438297098541721)}return wf=e,wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Sf,Xb;function jq(){if(Xb)return Sf;Xb=1;var e=St(),n=YE(),t=gu(),r=ge(),i=Ne(),o=bu(),u=Fq(),a=Dq(),s=xq(),c=Bq(),l=Hq(),f=Uq(),d=Gq(),h=Vq(),p=Wq(),v=[0,0,0,0,0,0,0,0,0,0];function m(g,_){var y,b,E,A,L;return b=(_-g)/g,E=-n(b),A=g*E,L=r(2*E),_<g&&(L=-L),v[0]=u(L),v[1]=a(L),v[2]=s(L),v[3]=c(L),v[4]=l(L),v[5]=f(L),v[6]=d(L),v[7]=h(L),v[8]=p(L),v[9]=-.0005967612901927463,y=e(v,1/g),y*=i(-A)/r(o*g),_<g&&(y=-y),y+=t(r(A))/2,y}return Sf=m,Sf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var $f,Yb;function Xq(){if(Yb)return $f;Yb=1;function e(n,t){var r=1,i=n,o=t;return u;function u(){var a=r;return i+=1,r*=o/i,a}}return $f=e,$f}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Af,Kb;function KE(){if(Kb)return Af;Kb=1;var e=Ai(),n=Xq();function t(r,i,o){var u,a;return o=o||0,a=n(r,i),u=e(a,{initialValue:o}),u}return Af=t,Af}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lf,Jb;function Yq(){if(Jb)return Lf;Jb=1;function e(n){var t,r,i;return n===0?1/0:(n<0?t=-n:t=n,t<=1?(r=709811.662581658+n*(679979.8474157227+n*(293136.7857211597+n*(74887.54032914672+n*(12555.290582413863+n*(1443.4299244417066+n*(115.24194596137347+n*(6.309239205732627+n*(.22668404630224365+n*(.004826466289237662+n*4624429436045379e-20))))))))),i=0+n*(362880+n*(1026576+n*(1172700+n*(723680+n*(269325+n*(63273+n*(9450+n*(870+n*(45+n*1)))))))))):(n=1/n,r=4624429436045379e-20+n*(.004826466289237662+n*(.22668404630224365+n*(6.309239205732627+n*(115.24194596137347+n*(1443.4299244417066+n*(12555.290582413863+n*(74887.54032914672+n*(293136.7857211597+n*(679979.8474157227+n*709811.662581658))))))))),i=1+n*(45+n*(870+n*(9450+n*(63273+n*(269325+n*(723680+n*(1172700+n*(1026576+n*(362880+n*0)))))))))),r/i)}return Lf=e,Lf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var If,zb;function Kq(){if(zb)return If;zb=1;var e=Yq();return If=e,If}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cf,Zb;function yu(){if(Zb)return Cf;Zb=1;var e=Kq();return Cf=e,Cf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Tf,Qb;function Jq(){if(Qb)return Tf;Qb=1;var e=yu(),n=br(),t=Kn(),r=YE(),i=ge(),o=be(),u=Ne(),a=Me(),s=qt(),c=yt(),l=we(),f=Pt(),d=wt(),h=yr(),p=$i(),v=gr();function m(g,_){var y,b,E,A,L,R,T;return E=g+p-.5,T=(_-g-p+.5)/E,g<1?_<=h||g<1/f?u(g*l(_)-_-n(g)):a(_,g)*u(-_)/t(g):(o(T*T*g)<=100&&g>150?(y=g*r(T)+_*(.5-p)/E,y=u(y)):(A=g*l(_/E),L=g-_,c(A,L)<=h||s(A,L)>=d?(b=L/g,c(A,L)/2>h&&s(A,L)/2<d?(R=a(_/E,g/2)*u(L/2),y=R*R):c(A,L)/4>h&&s(A,L)/4<d&&_>g?(R=a(_/E,g/4)*u(L/4),y=R*R,y*=y):b>h&&b<d?y=a(_*u(b)/E,g):y=u(A+L)):y=a(_/E,g)*u(L)),y*=i(E/v)/e(g),y)}return Tf=m,Tf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Rf,e4;function zq(){if(e4)return Rf;e4=1;var e=oe(),n=mr(),t=be(),r=hr(),i=we(),o=Me(),u=u2();function a(s,c){var l,f;if(e(s)||e(c))return NaN;if(c===0)return 0;if(s===0)return-1;if(s<0&&c%2===0&&(s=-s),s>0){if((t(c*(s-1))<.5||t(c)<.2)&&(f=i(s)*c,f<.5))return r(f)}else if(u(c)!==c)return NaN;return l=o(s,c)-1,n(l)||e(l)?NaN:l}return Rf=a,Rf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kf,n4;function Zq(){if(n4)return kf;n4=1;var e=zq();return kf=e,kf}/**
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
*/var Nf,t4;function Qq(){if(t4)return Nf;t4=1;function e(n){var t,r,i;return n===0?-.01803556856784494:(n<0?t=-n:t=n,t<=1?(r=-.01803556856784494+n*(.02512664961998968+n*(.049410315156753225+n*(.0172491608709614+n*(-.0002594535632054381+n*(-.0005410098692152044+n*(-3245886498259485e-20+n*0)))))),i=1+n*(1.962029871977952+n*(1.4801966942423133+n*(.5413914320717209+n*(.09885042511280101+n*(.008213096746488934+n*(.00022493629192211576+n*-22335276320861708e-23))))))):(n=1/n,r=0+n*(-3245886498259485e-20+n*(-.0005410098692152044+n*(-.0002594535632054381+n*(.0172491608709614+n*(.049410315156753225+n*(.02512664961998968+n*-.01803556856784494)))))),i=-22335276320861708e-23+n*(.00022493629192211576+n*(.008213096746488934+n*(.09885042511280101+n*(.5413914320717209+n*(1.4801966942423133+n*(1.962029871977952+n*1))))))),r/i)}return Nf=e,Nf}/**
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
*/var Mf,r4;function eP(){if(r4)return Mf;r4=1;function e(n){var t,r,i;return n===0?.04906224540690395:(n<0?t=-n:t=n,t<=1?(r=.04906224540690395+n*(-.09691175301595212+n*(-.4149833583594954+n*(-.4065671242119384+n*(-.1584135863906922+n*(-.024014982064857155+n*-.0010034668769627955))))),i=1+n*(3.0234982984646304+n*(3.4873958536072385+n*(1.9141558827442668+n*(.5071377386143635+n*(.05770397226904519+n*.001957681026011072)))))):(n=1/n,r=-.0010034668769627955+n*(-.024014982064857155+n*(-.1584135863906922+n*(-.4065671242119384+n*(-.4149833583594954+n*(-.09691175301595212+n*.04906224540690395))))),i=.001957681026011072+n*(.05770397226904519+n*(.5071377386143635+n*(1.9141558827442668+n*(3.4873958536072385+n*(3.0234982984646304+n*1)))))),r/i)}return Mf=e,Mf}/**
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
*/var Of,i4;function nP(){if(i4)return Of;i4=1;function e(n){var t,r,i;return n===0?-.029232972183027003:(n<0?t=-n:t=n,t<=1?(r=-.029232972183027003+n*(.14421626775719232+n*(-.14244039073863127+n*(.05428096940550536+n*(-.008505359768683364+n*(.0004311713426792973+n*0))))),i=1+n*(-1.5016935605448505+n*(.846973248876495+n*(-.22009515181499575+n*(.02558279715597587+n*(-.0010066679553914337+n*-8271935218912905e-22)))))):(n=1/n,r=0+n*(.0004311713426792973+n*(-.008505359768683364+n*(.05428096940550536+n*(-.14244039073863127+n*(.14421626775719232+n*-.029232972183027003))))),i=-8271935218912905e-22+n*(-.0010066679553914337+n*(.02558279715597587+n*(-.22009515181499575+n*(.846973248876495+n*(-1.5016935605448505+n*1)))))),r/i)}return Of=e,Of}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var qf,o4;function tP(){if(o4)return qf;o4=1;var e=we(),n=Yn(),t=Qq(),r=eP(),i=nP(),o=.15896368026733398,u=.5281534194946289,a=.45201730728149414;function s(c,l,f){var d,h,p,v;if(c<n)return-e(c);if(l===0||f===0)return 0;if(h=0,c>2){if(c>=3){do c-=1,f-=1,h+=e(c);while(c>=3);f=c-2}return p=f*(c+1),v=t(f),h+=p*o+p*v,h}return c<1&&(h+=-e(c),f=l,l=c,c+=1),c<=1.5?(p=r(l),d=l*f,h+=d*u+d*p,h):(p=f*l,v=i(-f),h+=p*a+p*v,h)}return qf=s,qf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Pf,u4;function rP(){if(u4)return Pf;u4=1;var e=Kn(),n=hr(),t=wn(),r=oe(),i=tP();function o(u){return r(u)?NaN:u<0?u<-.5?e(1+u)-1:n(-t(u)+i(u+2,u+1,u)):u<2?n(i(u+1,u,u-1)):e(1+u)-1}return Pf=o,Pf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ff,a4;function iP(){if(a4)return Ff;a4=1;var e=rP();return Ff=e,Ff}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Df,s4;function oP(){if(s4)return Df;s4=1;function e(n,t){var r,i,o,u;return r=-t,t=-t,i=n+1,o=1,a;function a(){return u=r/i,r*=t,o+=1,r/=o,i+=1,u}}return Df=e,Df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var xf,c4;function uP(){if(c4)return xf;c4=1;var e=Zq(),n=Ai(),t=iP(),r=oP();function i(o,u,a){var s,c,l,f,d;return c=t(o),l=(c+1)/o,f=e(u,o),c-=f,c/=o,d=r(o,u),f+=1,s=a?l:0,c=-f*n(d,{initialValue:(s-c)/f}),a&&(c=-c),[c,l]}return xf=i,xf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bf,l4;function Eu(){if(l4)return Bf;l4=1;var e=11754943508222875e-54;return Bf=e,Bf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hf,f4;function aP(){if(f4)return Hf;f4=1;var e=be(),n=Eu(),t=Yn(),r=1e6;function i(a,s,c){var l,f,d,h,p,v,m;if(l=typeof a.next=="function",m=l?a.next().value:a(),h=m[1],d=m[0],h===0&&(h=n),p=h,v=0,l===!0)do m=a.next().value,m&&(v=m[1]+m[0]*v,v===0&&(v=n),p=m[1]+m[0]/p,p===0&&(p=n),v=1/v,f=p*v,h*=f);while(e(f-1)>s&&--c);else do m=a(),m&&(v=m[1]+m[0]*v,v===0&&(v=n),p=m[1]+m[0]/p,p===0&&(p=n),v=1/v,f=p*v,h*=f);while(m&&e(f-1)>s&&--c);return d/h}function o(a,s,c){var l,f,d,h,p,v;if(l=typeof a.next=="function",v=l?a.next().value:a(),d=v[1],d===0&&(d=n),h=d,p=0,l===!0)do v=a.next().value,v&&(p=v[1]+v[0]*p,p===0&&(p=n),h=v[1]+v[0]/h,h===0&&(h=n),p=1/p,f=h*p,d*=f);while(v&&e(f-1)>s&&--c);else do v=a(),v&&(p=v[1]+v[0]*p,p===0&&(p=n),h=v[1]+v[0]/h,h===0&&(h=n),p=1/p,f=h*p,d*=f);while(v&&e(f-1)>s&&--c);return d}function u(a,s){var c,l,f;return l={},arguments.length>1&&(l=s),c=l.maxIter||r,f=l.tolerance||t,l.keep?o(a,f,c):i(a,f,c)}return Hf=u,Hf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uf,d4;function sP(){if(d4)return Uf;d4=1;var e=be(),n=Yn(),t=Eu(),r=1e6;function i(a,s,c){var l,f,d,h,p,v;v=a(),p=v[1],f=v[0],p===0&&(p=t),d=p,h=0;do v=a(),v&&(h=v[1]+v[0]*h,h===0&&(h=t),d=v[1]+v[0]/d,d===0&&(d=t),h=1/h,l=d*h,p*=l);while(v&&e(l-1)>s&&--c);return f/p}function o(a,s,c){var l,f,d,h,p;p=a(),h=p[1],h===0&&(h=t),f=h,d=0;do p=a(),p&&(d=p[1]+p[0]*d,d===0&&(d=t),f=p[1]+p[0]/f,f===0&&(f=t),d=1/d,l=f*d,h*=l);while(p&&e(l-1)>s&&--c);return h}function u(a,s){var c,l,f;return l={},arguments.length>1&&(l=s),f=l.tolerance||n,c=l.maxIter||r,l.keep?o(a,f,c):i(a,f,c)}return Uf=u,Uf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gf,p4;function JE(){if(p4)return Gf;p4=1;var e=jE(),n=aP(),t=sP(),r;return e()?r=n:r=t,Gf=r,Gf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Vf,h4;function cP(){if(h4)return Vf;h4=1;function e(n,t){var r=t-n+1,i=n,o=0;return u;function u(){return o+=1,r+=2,[o*(i-o),r]}}return Vf=e,Vf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Wf,m4;function zE(){if(m4)return Wf;m4=1;var e=JE(),n=cP();function t(r,i){var o=n(r,i);return 1/(i-r+1+e(o))}return Wf=t,Wf}/**
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
*/var jf,v4;function lP(){if(v4)return jf;v4=1;var e=Xn(),n=Kn(),t=be(),r=Me(),i=we(),o=pq(),u=Pt(),a=wt(),s=bq(),c=yq(),l=Rq(),f=kq(),d=jq(),h=KE(),p=Jq(),v=uP(),m=zE();function g(_,y,b,E){var A,L,R,T,$,w,S,I,C,P,M,H,q,F;switch(S=0,I=E,w=y<30&&y<=_+1&&_<a,w?(q=e(y),C=q===y,R=C?!1:t(q-y)===.5):(C=!1,R=!1),C&&_>.6?(I=!I,L=0):R&&_>.2?(I=!I,L=1):_<o&&y>1?L=6:_>1e3&&(y<_||t(y-50)/_<1)?(I=!I,L=7):_<.5?-.4/i(_)<y?L=2:L=3:_<1.1?_*.75<y?L=2:L=3:($=!1,b&&y>20&&(P=t((_-y)/y),y>200?20/y>P*P&&($=!0):P<.4&&($=!0)),$?L=5:_-1/(3*_)<y?L=2:(L=4,I=!I)),L){case 0:S=c(y,_),b===!1&&(S*=n(y));break;case 1:S=l(y,_),b===!1&&(S*=n(y));break;case 2:S=b?p(y,_):f(y,_),S!==0&&(T=0,A=!1,I&&(T=b?1:n(y),b||S>=1||u*S>T?(T/=S,b||y<1||u/y>T?(T*=-y,A=!0):T=0):T=0),S*=h(y,_,T)/y,A&&(I=!1,S=-S));break;case 3:I=!I,M=v(y,_,I),S=M[0],F=M[1],I=!1,b&&(S/=F);break;case 4:S=b?p(y,_):f(y,_),S!==0&&(S*=m(y,_));break;case 5:S=d(y,_),_>=y&&(I=!I);break;case 6:S=b?r(_,y)/n(y+1):r(_,y)/y,S*=1-y*_/(y+1);break;case 7:S=b?p(y,_):f(y,_),S/=_,S!==0&&(S*=s(y,_));break}return b&&S>1&&(S=1),I&&(H=b?1:n(y),S=H-S),S}return jf=g,jf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Xf,_4;function fP(){if(_4)return Xf;_4=1;var e=br(),n=Ne(),t=we(),r=vu(),i=wt(),o=ke(),u=_u(),a=lP(),s=KE(),c=zE();function l(f,d,h,p){var v,m,g,_;return f<0||d<=0?NaN:(v=h===void 0?!0:h,g=p,d>=u&&!v?(g&&d*4<f?(_=d*t(f)-f,_+=t(c(d,f))):!g&&d>4*f?(_=d*t(f)-f,m=0,_+=t(s(d,f,m)/d)):(_=a(f,d,!0,g),_===0?g?(_=1+1/(12*d)+1/(288*d*d),_=t(_)-d+(d-.5)*t(d),_+=t(r)):(_=d*t(f)-f,m=0,_+=t(s(d,f,m)/d)):_=t(_)+e(d)),_>i?o:n(_)):a(f,d,v,g))}return Xf=l,Xf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yf,g4;function ZE(){if(g4)return Yf;g4=1;var e=fP();return Yf=e,Yf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Kf,b4;function dP(){if(b4)return Kf;b4=1;var e=Ne(),n=Me(),t=we(),r=wt(),i=yr();function o(u,a){var s,c;return c=u*t(a),a>=1?c<r&&-a>i?s=n(a,u)*e(-a):u>=1?s=n(a/e(a/u),u):s=e(c-a):c>i?s=n(a,u)*e(-a):a/u<r?s=n(a/e(a/u),u):s=e(c-a),s}return Kf=o,Kf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Jf,y4;function pP(){if(y4)return Jf;y4=1;var e=yu(),n=br(),t=Kn(),r=wn(),i=ge(),o=be(),u=Ne(),a=Me(),s=qt(),c=yt(),l=we(),f=wt(),d=yr(),h=$i(),p=gr();function v(m,g){var _,y,b,E,A,L,R;return b=m+h-.5,R=(g-m-h+.5)/b,m<1?g<=d?u(m*l(g)-g-n(m)):a(g,m)*u(-g)/t(m):(o(R*R*m)<=100&&m>150?(_=m*(r(R)-R)+g*(.5-h)/b,_=u(_)):(E=m*l(g/b),A=m-g,c(E,A)<=d||s(E,A)>=f?(y=A/m,c(E,A)/2>d&&s(E,A)/2<f?(L=a(g/b,m/2)*u(A/2),_=L*L):c(E,A)/4>d&&s(E,A)/4<f&&g>m?(L=a(g/b,m/4)*u(A/4),_=L*L,_*=_):y>d&&y<f?_=a(g*u(y)/b,m):_=u(E+A)):_=a(g/b,m)*u(A)),_*=i(b/p)/e(m),_)}return Jf=v,Jf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var zf,E4;function hP(){if(E4)return zf;E4=1;var e=f2(),n=WE(),t=ZE(),r=wn(),i=be(),o=Me(),u=we(),a=Ot(),s=Yn(),c=dP(),l=pP(),f=new Array(30);function d(h,p,v,m,g,_,y){var b,E,A,L,R,T,$,w,S,I,C,P,M,H,q,F,O,Z;if(T=p-1,O=h+T/2,m<.35?I=r(-m):I=u(v),Z=-O*I,P=l(p,Z),P<=a)return g;for(y?(b=P/e(h,p),b/=o(O,p)):b=c(p,Z)/o(O,p),b*=_,f[0]=1,M=t(Z,p,!0,!0),M/=P,L=g+b*M,A=1,$=I/2,$*=$,w=1,C=4*O*O,R=p,q=1;q<f.length;++q){for(A+=2,f[q]=0,S=p-q,E=3,H=1;H<q;++H)S=H*p-q,f[q]+=S*f[q-H]/n(E),E+=2;if(f[q]/=q,f[q]+=T/n(A),M=(R*(R+1)*M+(Z+R+1)*w)/C,w*=$,R+=2,F=b*f[q]*M,L+=F,F>1){if(i(F)<i(s*L))break}else if(i(F/s)<i(L))break}return L}return zf=d,zf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Zf,w4;function mP(){if(w4)return Zf;w4=1;function e(n,t,r){var i,o;if(r===0)return 1;for(i=1,o=0;o<r;o++)i*=(n+o)/(t+o);return i}return Zf=e,Zf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qf,S4;function vP(){if(S4)return Qf;S4=1;var e=be(),n=qt();function t(r,i){return n(e(r),e(i))}return Qf=t,Qf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ed,$4;function _P(){if($4)return ed;$4=1;var e=vP();return ed=e,ed}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nd,A4;function gP(){if(A4)return nd;A4=1;var e=be(),n=yt();function t(r,i){return n(e(r),e(i))}return nd=t,nd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var td,L4;function bP(){if(L4)return td;L4=1;var e=gP();return td=e,td}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var rd,I4;function p2(){if(I4)return rd;I4=1;var e=yu(),n=_P(),t=bP(),r=hr(),i=wn(),o=ge(),u=be(),a=Ne(),s=Me(),c=yt(),l=we(),f=wt(),d=yr(),h=$i(),p=gr();function v(m,g,_,y,b){var E,A,L,R,T,$,w,S,I,C,P,M,H,q;if(!b)return s(_,m)*s(y,g);if(H=m+g,R=m+h-.5,T=g+h-.5,$=H+h-.5,E=e(H),E/=e(m)*e(g),E*=o(T/p),E*=o(R/$),w=(_*g-y*R)/R,S=(y*m-_*T)/T,t(w,S)<.2)if(w*S>0||c(m,g)<1)u(w)<.1?E*=a(m*i(w)):E*=s(_*$/R,m),u(S)<.1?E*=a(g*i(S)):E*=s(y*$/T,g);else if(n(w,S)<.5)A=m<g,L=g/m,A&&L*S<.1||!A&&w/L>.1?(I=r(L*i(S)),I=w+I+I*w,I=m*i(I),E*=a(I)):(I=r(i(w)/L),I=S+I+I*S,I=g*i(I),E*=a(I));else if(u(w)<u(S))if(q=m*i(w)+g*l(y*$/T),q<=d||q>=f){if(q+=l(E),q>=f)return NaN;E=a(q)}else E*=a(q);else if(q=g*i(S)+m*l(_*$/R),q<=d||q>=f){if(q+=l(E),q>=f)return NaN;E=a(q)}else E*=a(q);else if(P=_*$/R,M=y*$/T,w=m*l(P),S=g*l(M),w>=f||w<=d||S>=f||S<=d)if(m<g)if(C=s(M,g/m),I=m*(l(P)+l(C)),I<f&&I>d)E*=s(C*P,m);else{if(S+=w+l(E),S>=f)return NaN;E=a(S)}else if(C=s(P,m/g),I=(l(C)+l(M))*g,I<f&&I>d)E*=s(C*M,g);else{if(S+=w+l(E),S>=f)return NaN;E=a(S)}else E*=s(P,m)*s(M,g);return E}return rd=v,rd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var id,C4;function yP(){if(C4)return id;C4=1;var e=JE(),n=p2(),t={keep:!0,maxIter:1e3};function r(o,u,a,s){var c=0;return l;function l(){var f,d,h;return d=(o+c-1)*(o+u+c-1)*c*(u-c)*a*a,f=o+2*c-1,d/=f*f,h=c,h+=c*(u-c)*a/(o+2*c-1),h+=(o+c)*(o*s-u*a+1+c*(2-a))/(o+2*c+1),c+=1,[d,h]}}function i(o,u,a,s,c,l){var f,d,h;return f=n(o,u,a,s,c),l&&(l[1]=f),f===0?f:(h=r(o,u,a,s),d=e(h,t),f/d)}return id=i,id}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var od,T4;function EP(){if(T4)return od;T4=1;var e=9007199254740991;return od=e,od}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ud,R4;function wP(){if(R4)return ud;R4=1;function e(n,t){var r=0,i;if(n===0)return t;if(t===0)return n;for(;(n&1)===0&&(t&1)===0;)n>>>=1,t>>>=1,r+=1;for(;(n&1)===0;)n>>>=1;for(;t;){for(;(t&1)===0;)t>>>=1;n>t&&(i=t,t=n,n=i),t-=n}return n<<r}return ud=e,ud}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ad,k4;function SP(){if(k4)return ad;k4=1;function e(n,t){var r=1,i;if(n===0)return t;if(t===0)return n;for(;n%2===0&&t%2===0;)n/=2,t/=2,r*=2;for(;n%2===0;)n/=2;for(;t;){for(;t%2===0;)t/=2;n>t&&(i=t,t=n,n=i),t-=n}return r*n}return ad=e,ad}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sd,N4;function $P(){if(N4)return sd;N4=1;var e=oe(),n=_r(),t=ke(),r=rn(),i=BE(),o=wP(),u=SP();function a(s,c){return e(s)||e(c)?NaN:s===t||c===t||s===r||c===r?NaN:n(s)&&n(c)?(s<0&&(s=-s),c<0&&(c=-c),s<=i&&c<=i?o(s,c):u(s,c)):NaN}return sd=a,sd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cd,M4;function AP(){if(M4)return cd;M4=1;var e=$P();return cd=e,cd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ld,O4;function LP(){if(O4)return ld;O4=1;var e=EP(),n=ke(),t=_r(),r=oe(),i=c2(),o=Xn(),u=AP();function a(s,c){var l,f,d,h,p,v,m;if(r(s)||r(c))return NaN;if(!t(s)||!t(c))return NaN;if(c<0||(f=1,s<0&&(s=-s+c-1,i(c)&&(f*=-1)),c>s))return 0;if(c===0||c===s)return f;if(c===1||c===s-1)return f*s;for(s-c<c&&(c=s-c),m=o(e/s),l=1,p=1;p<=c&&!(l>m);p++)l*=s,l/=p,s-=1;return p>c?f*l:(d=a(s,c-p+1),d===n?f*d:(h=a(c,c-p+1),v=u(d,h),d/=v,h/=v,l/=h,f*l*d))}return ld=a,ld}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fd,q4;function IP(){if(q4)return fd;q4=1;var e=LP();return fd=e,fd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var dd,P4;function CP(){if(P4)return dd;P4=1;var e=IP(),n=Xn(),t=Me(),r=Ot();function i(o,u,a,s){var c,l,f,d,h;if(l=t(a,o),l>r)for(d=l,h=n(o-1);h>u;h--)d*=(h+1)*s/((o-h)*a),l+=d;else if(f=n(o*a),f<=u+1&&(f=n(u+2)),l=t(a,f)*t(s,o-f),l*=e(n(o),n(f)),l===0)for(h=f-1;h>u;h--)l+=t(a,h)*t(s,o-h),l*=e(n(o),n(h));else{for(d=l,c=l,h=f-1;h>u;h--)d*=(h+1)*s/((o-h)*a),l+=d;for(d=c,h=f+1;h<=o;h++)d*=(o-h+1)*a/(h*s),l+=d}return l}return dd=i,dd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var pd,F4;function TP(){if(F4)return pd;F4=1;var e=p2();function n(t,r,i,o,u,a,s){var c,l,f,d;if(c=e(t,r,i,o,a),s&&(s[1]=c),c/=t,c===0)return c;for(f=1,l=1,d=0;d<u-1;++d)l*=(t+r+d)*i/(t+d+1),f+=l;return c*=f,c}return pd=n,pd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var hd,D4;function RP(){if(D4)return hd;D4=1;var e=yu(),n=Ai(),t=wn(),r=ge(),i=Ne(),o=Me(),u=we(),a=Ot(),s=wt(),c=yr(),l=$i(),f=gr(),d={maxTerms:100};function h(v,m,g,_){var y=1-m,b=1;return E;function E(){var A=_/v;return v+=1,_*=y*g/b,b+=1,y+=1,A}}function p(v,m,g,_,y,b,E){var A,L,R,T,$,w,S,I;return y?(S=v+m,L=v+l-.5,R=m+l-.5,T=S+l-.5,A=e(S)/(e(v)*e(m)),$=u(T/R)*(m-.5),w=u(g*T/L)*v,$>c&&$<s&&w>c&&w<s?(v*m<R*10?A*=i((m-.5)*t(v/R)):A*=o(T/R,m-.5),A*=o(g*T/L,v),A*=r(L/f),b&&(b[1]=A*o(E,m))):(A=u(A)+$+w+(u(L)-1)/2,b&&(b[1]=i(A+m*u(E))),A=i(A))):A=o(g,v),A<a?_:(I=h(v,m,g,A),d.initialValue=_,n(I,d))}return hd=p,hd}var md,x4;function QE(){if(x4)return md;x4=1;var e=oe(),n=hr(),t=Xn(),r=wn(),i=o2(),o=mu(),u=ge(),a=Ne(),s=Me(),c=qt(),l=yt(),f=Pt(),d=Ot(),h=BE(),p=l2(),v=Et(),m=hP(),g=mP(),_=p2(),y=yP(),b=CP(),E=TP(),A=RP(),L=1/v;function R(T,$,w,S,I,C,P,M){var H,q,F,O,Z,U,K,Q,ie,B,j,V;if(V=1-T,K=M,Q=M+P,C[Q]=-1,e(T)||T<0||T>1)return C[K]=NaN,C[Q]=NaN,C;if(S){if($<0||w<0)return C[K]=NaN,C[Q]=NaN,C;if($===0){if(w===0)return C[K]=NaN,C[Q]=NaN,C;if(w>0)return C[K]=I?0:1,C}else if(w===0&&$>0)return C[K]=I?1:0,C}else if($<=0||w<=0)return C[K]=NaN,C[Q]=NaN,C;return T===0?($===1?C[Q]=1:C[Q]=$<1?f/2:d*2,I?(C[K]=S?1:o($,w),C):(C[K]=0,C)):T===1?(w===1?C[Q]=1:C[Q]=w<1?f/2:d*2,I?C[K]=0:C[K]=S?1:o($,w),C):$===.5&&w===.5?(C[Q]=L*u(V*T),j=i(u(I?V:T)),j/=p,S||(j*=v),C[K]=j,C):($===1&&(U=w,w=$,$=U,U=V,V=T,T=U,I=!I),w===1?$===1?(C[K]=I?V:T,C[Q]=1,C):(C[Q]=$*s(T,$-1),V<.5?j=I?-n($*r(-V)):a($*r(-V)):j=I?-(s(T,$)-1):s(T,$),S||(j/=$),C[K]=j,C):(l($,w)<=1?(T>.5&&(U=w,w=$,$=U,U=V,V=T,T=U,I=!I),c($,w)<=1?$>=l(.2,w)||s(T,$)<=.9?I?(F=-(S?1:o($,w)),I=!1,F=-A($,w,T,F,S,C,V)):F=A($,w,T,0,S,C,V):(U=w,w=$,$=U,U=V,V=T,T=U,I=!I,V>=.3?I?(F=-(S?1:o($,w)),I=!1,F=-A($,w,T,F,S,C,V)):F=A($,w,T,0,S,C,V):(S?q=1:q=g($+w,$,20),F=E($,w,T,V,20,S,C),I?(F-=S?1:o($,w),I=!1,F=-m($+20,w,T,V,F,q,S)):F=m($+20,w,T,V,F,q,S))):w<=1||T<.1&&s(w*T,$)<=.7?I?(F=-(S?1:o($,w)),I=!1,F=-A($,w,T,F,S,C,V)):F=A($,w,T,0,S,C,V):(U=w,w=$,$=U,U=V,V=T,T=U,I=!I,V>=.3?I?(F=-(S?1:o($,w)),I=!1,F=-A($,w,T,F,S,C,V)):F=A($,w,T,0,S,C,V):$>=15?I?(F=-(S?1:o($,w)),I=!1,F=-m($,w,T,V,F,1,S)):F=m($,w,T,V,0,1,S):(S?q=1:q=g($+w,$,20),F=E($,w,T,V,20,S,C),I?(F-=S?1:o($,w),I=!1,F=-m($+20,w,T,V,F,q,S)):F=m($+20,w,T,V,F,q,S)))):($<w?H=$-($+w)*T:H=($+w)*V-w,H<0&&(U=w,w=$,$=U,U=V,V=T,T=U,I=!I),w<40?t($)===$&&t(w)===w&&$<h-100?(ie=$-1,B=w+ie,F=b(B,ie,T,V),S||(F*=o($,w))):w*T<=.7?I?(F=-(S?1:o($,w)),I=!1,F=-A($,w,T,F,S,C,V)):F=A($,w,T,0,S,C,V):$>15?(B=t(w),B===w&&(B-=1),O=w-B,S?q=1:q=g($+O,O,B),F=E(O,$,V,T,B,S),F=m($,O,T,V,F,1,S),F/=q):S?(B=t(w),O=w-B,O<=0&&(B-=1,O+=1),F=E(O,$,V,T,B,S),F+=E($,O,T,V,20,S),I&&(F-=1),F=m($+20,O,T,V,F,1,S),I&&(F=-F,I=!1)):F=y($,w,T,V,S,C):F=y($,w,T,V,S,C)),C[Q]<0&&(C[Q]=_($,w,T,V,!0)),Z=V*T,C[Q]!==0&&(f*Z<C[Q]?C[Q]=f/2:C[Q]/=Z),C[K]=I?(S?1:o($,w))-F:F,C))}return md=R,md}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vd,B4;function kP(){if(B4)return vd;B4=1;var e=QE();function n(t,r,i,o,u){return e(t,r,i,o,u,[0,0],1,0)}return vd=n,vd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _d,H4;function ew(){if(H4)return _d;H4=1;var e=tn(),n=kP(),t=QE();return e(n,"assign",t),_d=n,_d}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gd,U4;function NP(){if(U4)return gd;U4=1;var e=ew().assign;function n(t,r,i,o,u){var a=[0,0];return o=o!==!1,u=u===!0,e(t,r,i,o,u,a,1,0),a[0]}return gd=n,gd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bd,G4;function Li(){if(G4)return bd;G4=1;var e=NP();return bd=e,bd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yd,V4;function MP(){if(V4)return yd;V4=1;var e=Li(),n=oe();function t(r,i,o){return n(r)||n(i)||n(o)||i<=0||o<=0?NaN:r<=0?0:r>=1?1:e(r,i,o)}return yd=t,yd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ed,W4;function OP(){if(W4)return Ed;W4=1;function e(n){return t;function t(){return n}}return Ed=e,Ed}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wd,j4;function Sn(){if(j4)return wd;j4=1;var e=OP();return wd=e,wd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sd,X4;function qP(){if(X4)return Sd;X4=1;var e=Sn(),n=Li(),t=oe();function r(i,o){if(t(i)||t(o)||i<=0||o<=0)return e(NaN);return u;function u(a){return t(a)?NaN:a<=0?0:a>=1?1:n(a,i,o)}}return Sd=r,Sd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $d,Y4;function PP(){if(Y4)return $d;Y4=1;var e=tn(),n=MP(),t=qP();return e(n,"factory",t),$d=n,$d}var FP=PP();const oh=jn(FP);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ad,K4;function nw(){if(K4)return Ad;K4=1;var e=.9189385332046728;return Ad=e,Ad}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ld,J4;function DP(){if(J4)return Ld;J4=1;var e=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],n=e.length;function t(r){var i,o,u,a,s;if(r<-1.1||r>1.1)return NaN;for(u=0,a=0,i=2*r,s=0;s<n;s++)o=u,u=a,a=i*u-o+e[s];return(a-o)*.5}return Ld=t,Ld}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Id,z4;function xP(){if(z4)return Id;z4=1;var e=Me(),n=DP(),t=9490626562425156e-8,r=3745194030963158e291;function i(o){return o<10?NaN:o>=r?0:o<t?n(2*e(10/o,2)-1)/o:1/(o*12)}return Id=i,Id}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Cd,Z4;function BP(){if(Z4)return Cd;Z4=1;var e=br(),n=wn(),t=Kn(),r=qt(),i=yt(),o=we(),u=nw(),a=rn(),s=ke(),c=xP();function l(f,d){var h,p,v;return p=i(f,d),v=r(f,d),p<0?NaN:p===0?s:v===s?a:p>=10?(h=c(p)+c(v)-c(p+v),-.5*o(v)+u+h+(p-.5)*o(p/(p+v))+v*n(-p/(p+v))):v>=10?(h=c(v)-c(p+v),e(p)+h+p-p*o(p+v)+(v-.5)*n(-p/(p+v))):o(t(p)*(t(v)/t(p+v)))}return Cd=l,Cd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Td,Q4;function tw(){if(Q4)return Td;Q4=1;var e=BP();return Td=e,Td}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rd,e5;function HP(){if(e5)return Rd;e5=1;var e=tw(),n=oe(),t=wn(),r=Ne(),i=we(),o=ke();function u(a,s,c){var l;return n(a)||n(s)||n(c)||s<=0||c<=0?NaN:a<0||a>1?0:a===0?s<1?o:s>1?0:c:a===1?c<1?o:c>1?0:s:(l=(s-1)*i(a),l+=(c-1)*t(-a),l-=e(s,c),r(l))}return Rd=u,Rd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kd,n5;function UP(){if(n5)return kd;n5=1;var e=Sn(),n=tw(),t=oe(),r=wn(),i=Ne(),o=we(),u=ke();function a(s,c){var l;if(t(s)||t(c)||s<=0||c<=0)return e(NaN);return l=n(s,c),f;function f(d){var h;return t(d)?NaN:d<0||d>1?0:d===0?s<1?u:s>1?0:c:d===1?c<1?u:c>1?0:s:(h=-l,h+=(s-1)*o(d),h+=(c-1)*r(-d),i(h))}}return kd=a,kd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nd,t5;function GP(){if(t5)return Nd;t5=1;var e=tn(),n=HP(),t=UP();return e(n,"factory",t),Nd=n,Nd}var VP=GP();const WP=jn(VP);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Md,r5;function jP(){if(r5)return Md;r5=1;function e(n){var t,r,i;return n===0?-.0005087819496582806:(n<0?t=-n:t=n,t<=1?(r=-.0005087819496582806+n*(-.008368748197417368+n*(.03348066254097446+n*(-.012692614766297404+n*(-.03656379714117627+n*(.02198786811111689+n*(.008226878746769157+n*(-.005387729650712429+n*(0+n*0)))))))),i=1+n*(-.9700050433032906+n*(-1.5657455823417585+n*(1.5622155839842302+n*(.662328840472003+n*(-.7122890234154284+n*(-.05273963823400997+n*(.07952836873415717+n*(-.0023339375937419+n*.0008862163904564247))))))))):(n=1/n,r=0+n*(0+n*(-.005387729650712429+n*(.008226878746769157+n*(.02198786811111689+n*(-.03656379714117627+n*(-.012692614766297404+n*(.03348066254097446+n*(-.008368748197417368+n*-.0005087819496582806)))))))),i=.0008862163904564247+n*(-.0023339375937419+n*(.07952836873415717+n*(-.05273963823400997+n*(-.7122890234154284+n*(.662328840472003+n*(1.5622155839842302+n*(-1.5657455823417585+n*(-.9700050433032906+n*1))))))))),r/i)}return Md=e,Md}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Od,i5;function XP(){if(i5)return Od;i5=1;function e(n){var t,r,i;return n===0?-.20243350835593876:(n<0?t=-n:t=n,t<=1?(r=-.20243350835593876+n*(.10526468069939171+n*(8.3705032834312+n*(17.644729840837403+n*(-18.851064805871424+n*(-44.6382324441787+n*(17.445385985570866+n*(21.12946554483405+n*-3.6719225470772936))))))),i=1+n*(6.242641248542475+n*(3.971343795334387+n*(-28.66081804998+n*(-20.14326346804852+n*(48.560921310873994+n*(10.826866735546016+n*(-22.643693341313973+n*1.7211476576120028)))))))):(n=1/n,r=-3.6719225470772936+n*(21.12946554483405+n*(17.445385985570866+n*(-44.6382324441787+n*(-18.851064805871424+n*(17.644729840837403+n*(8.3705032834312+n*(.10526468069939171+n*-.20243350835593876))))))),i=1.7211476576120028+n*(-22.643693341313973+n*(10.826866735546016+n*(48.560921310873994+n*(-20.14326346804852+n*(-28.66081804998+n*(3.971343795334387+n*(6.242641248542475+n*1)))))))),r/i)}return Od=e,Od}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qd,o5;function YP(){if(o5)return qd;o5=1;function e(n){var t,r,i;return n===0?-.1311027816799519:(n<0?t=-n:t=n,t<=1?(r=-.1311027816799519+n*(-.16379404719331705+n*(.11703015634199525+n*(.38707973897260434+n*(.3377855389120359+n*(.14286953440815717+n*(.029015791000532906+n*(.0021455899538880526+n*(-6794655751811263e-22+n*(28522533178221704e-24+n*-681149956853777e-24))))))))),i=1+n*(3.4662540724256723+n*(5.381683457070069+n*(4.778465929458438+n*(2.5930192162362027+n*(.848854343457902+n*(.15226433829533179+n*(.011059242293464892+n*(0+n*(0+n*0)))))))))):(n=1/n,r=-681149956853777e-24+n*(28522533178221704e-24+n*(-6794655751811263e-22+n*(.0021455899538880526+n*(.029015791000532906+n*(.14286953440815717+n*(.3377855389120359+n*(.38707973897260434+n*(.11703015634199525+n*(-.16379404719331705+n*-.1311027816799519))))))))),i=0+n*(0+n*(0+n*(.011059242293464892+n*(.15226433829533179+n*(.848854343457902+n*(2.5930192162362027+n*(4.778465929458438+n*(5.381683457070069+n*(3.4662540724256723+n*1)))))))))),r/i)}return qd=e,qd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pd,u5;function KP(){if(u5)return Pd;u5=1;function e(n){var t,r,i;return n===0?-.0350353787183178:(n<0?t=-n:t=n,t<=1?(r=-.0350353787183178+n*(-.0022242652921344794+n*(.018557330651423107+n*(.009508047013259196+n*(.0018712349281955923+n*(.00015754461742496055+n*(460469890584318e-20+n*(-2304047769118826e-25+n*26633922742578204e-28))))))),i=1+n*(1.3653349817554064+n*(.7620591645536234+n*(.22009110576413124+n*(.03415891436709477+n*(.00263861676657016+n*(7646752923027944e-20+n*(0+n*0)))))))):(n=1/n,r=26633922742578204e-28+n*(-2304047769118826e-25+n*(460469890584318e-20+n*(.00015754461742496055+n*(.0018712349281955923+n*(.009508047013259196+n*(.018557330651423107+n*(-.0022242652921344794+n*-.0350353787183178))))))),i=0+n*(0+n*(7646752923027944e-20+n*(.00263861676657016+n*(.03415891436709477+n*(.22009110576413124+n*(.7620591645536234+n*(1.3653349817554064+n*1)))))))),r/i)}return Pd=e,Pd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fd,a5;function JP(){if(a5)return Fd;a5=1;function e(n){var t,r,i;return n===0?-.016743100507663373:(n<0?t=-n:t=n,t<=1?(r=-.016743100507663373+n*(-.0011295143874558028+n*(.001056288621524929+n*(.00020938631748758808+n*(14962478375834237e-21+n*(44969678992770644e-23+n*(4625961635228786e-24+n*(-2811287356288318e-29+n*9905570997331033e-32))))))),i=1+n*(.5914293448864175+n*(.1381518657490833+n*(.016074608709367652+n*(.0009640118070051656+n*(27533547476472603e-21+n*(282243172016108e-21+n*(0+n*0)))))))):(n=1/n,r=9905570997331033e-32+n*(-2811287356288318e-29+n*(4625961635228786e-24+n*(44969678992770644e-23+n*(14962478375834237e-21+n*(.00020938631748758808+n*(.001056288621524929+n*(-.0011295143874558028+n*-.016743100507663373))))))),i=0+n*(0+n*(282243172016108e-21+n*(27533547476472603e-21+n*(.0009640118070051656+n*(.016074608709367652+n*(.1381518657490833+n*(.5914293448864175+n*1)))))))),r/i)}return Fd=e,Fd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Dd,s5;function zP(){if(s5)return Dd;s5=1;var e=oe(),n=ge(),t=we(),r=ke(),i=rn(),o=jP(),u=XP(),a=YP(),s=KP(),c=JP(),l=.08913147449493408,f=2.249481201171875,d=.807220458984375,h=.9399557113647461,p=.9836282730102539;function v(m){var g,_,y,b,E;return e(m)?NaN:m===0?r:m===2?i:m===1?0:m>2||m<0?NaN:(m>1?(g=-1,y=2-m):(g=1,y=m),m=1-y,m<=.5?(b=m*(m+10),E=o(m),g*(b*l+b*E)):y>=.25?(b=n(-2*t(y)),y-=.25,E=u(y),g*(b/(f+E))):(y=n(-t(y)),y<3?(_=y-1.125,E=a(_),g*(d*y+E*y)):y<6?(_=y-3,E=s(_),g*(h*y+E*y)):(_=y-6,E=c(_),g*(p*y+E*y))))}return Dd=v,Dd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xd,c5;function Ii(){if(c5)return xd;c5=1;var e=zP();return xd=e,xd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Bd,l5;function ZP(){if(l5)return Bd;l5=1;var e=oe(),n=o2(),t=ge(),r=ME(),i=6123233995736766e-32;function o(u){var a;return e(u)?NaN:u<-1||u>1?NaN:u>.5?2*n(t(.5-.5*u)):(a=r-n(u),a+=i,a+=r,a)}return Bd=o,Bd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hd,f5;function QP(){if(f5)return Hd;f5=1;var e=ZP();return Hd=e,Hd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ud,d5;function h2(){if(d5)return Ud;d5=1;var e=1.4142135623730951;return Ud=e,Ud}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gd,p5;function eF(){if(p5)return Gd;p5=1;function e(n){return n===0?.16666666666666666:.16666666666666666+n*.16666666666666666}return Gd=e,Gd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vd,h5;function nF(){if(h5)return Vd;h5=1;function e(n){return n===0?.058333333333333334:.058333333333333334+n*(.06666666666666667+n*.008333333333333333)}return Vd=e,Vd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wd,m5;function tF(){if(m5)return Wd;m5=1;function e(n){return n===0?.0251984126984127:.0251984126984127+n*(.026785714285714284+n*(.0017857142857142857+n*.0001984126984126984))}return Wd=e,Wd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jd,v5;function rF(){if(v5)return jd;v5=1;function e(n){return n===0?.012039792768959435:.012039792768959435+n*(.010559964726631394+n*(-.0011078042328042327+n*(.0003747795414462081+n*27557319223985893e-22)))}return jd=e,jd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xd,_5;function iF(){if(_5)return Xd;_5=1;function e(n){return n===0?.003837005972422639:.003837005972422639+n*(.00610392115600449+n*(-.0016095979637646305+n*(.0005945867404200738+n*(-6270542728876062e-20+n*2505210838544172e-23))))}return Xd=e,Xd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yd,g5;function oF(){if(g5)return Yd;g5=1;function e(n){return n===0?.0032177478835464946:.0032177478835464946+n*(.0010898206731540065+n*(-.0012579159844784845+n*(.0006908420797309686+n*(-.00016376804137220805+n*(154012654012654e-19+n*16059043836821613e-26)))))}return Yd=e,Yd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kd,b5;function uF(){if(b5)return Kd;b5=1;function e(n){return n===0?.001743826229834001:.001743826229834001+n*(3353097688001788e-20+n*(-.0007624513544032393+n*(.0006451304695145635+n*(-.000249472580470431+n*(49255746366361444e-21+n*(-39851014346715405e-22+n*7647163731819816e-28))))))}return Kd=e,Kd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jd,y5;function aF(){if(y5)return Jd;y5=1;function e(n){return n===0?.0009647274732138864:.0009647274732138864+n*(-.0003110108632631878+n*(-.00036307660358786886+n*(.0005140660578834113+n*(-.00029133414466938067+n*(9086710793521991e-20+n*(-15303004486655377e-21+n*(10914179173496788e-22+n*28114572543455206e-31)))))))}return Jd=e,Jd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zd,E5;function sF(){if(E5)return zd;E5=1;function e(n){return n===0?.0005422926281312969:.0005422926281312969+n*(-.0003694266780000966+n*(-.00010230378073700413+n*(.00035764655430568635+n*(-.00028690924218514614+n*(.00012645437628698076+n*(-33202652391372056e-21+n*(4890304529197534e-21+n*(-3123956959982987e-22+n*822063524662433e-32))))))))}return zd=e,zd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Zd,w5;function cF(){if(w5)return Zd;w5=1;var e=f2(),n=St(),t=ge(),r=Et(),i=eF(),o=nF(),u=tF(),a=rF(),s=iF(),c=oF(),l=uF(),f=aF(),d=sF(),h=0,p=[1,0,0,0,0,0,0,0,0,0];function v(m,g){var _,y;return y=e(m/2,.5)*t(m*r)*(g-.5),_=1/m,p[1]=i(_),p[2]=o(_),p[3]=u(_),p[4]=a(_),p[5]=s(_),p[6]=c(_),p[7]=l(_),p[8]=f(_),p[9]=d(_),h+y*n(p,y*y)}return Zd=v,Zd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Qd,S5;function lF(){if(S5)return Qd;S5=1;var e=f2(),n=St(),t=ge(),r=Me(),i=Et(),o=[0,0,0,0,0,0,0];function u(a,s){var c,l,f,d,h,p,v,m;return m=e(a/2,.5)*t(a*i)*s,d=a+2,h=a+4,p=a+6,o[0]=1,o[1]=-(a+1)/(2*d),d*=a+2,o[2]=-a*(a+1)*(a+3)/(8*d*h),d*=a+2,o[3]=-a*(a+1)*(a+5)*((3*a+7)*a-2)/(48*d*h*p),d*=a+2,h*=a+4,o[4]=-a*(a+1)*(a+7)*(((((15*a+154)*a+465)*a+286)*a-336)*a+64)/(384*d*h*p*(a+8)),d*=a+2,o[5]=-a*(a+1)*(a+3)*(a+9)*((((((35*a+452)*a+1573)*a+600)*a-2020)*a+928)*a-128)/(1280*d*h*p*(a+8)*(a+10)),d*=a+2,h*=a+4,p*=a+6,o[6]=-a*(a+1)*(a+11)*(((((((((((945*a+31506)*a+425858)*a+2980236)*a+11266745)*a+20675018)*a+7747124)*a-22574632)*a-8565600)*a+18108416)*a-7099392)*a+884736)/(46080*d*h*p*(a+8)*(a+10)*(a+12)),v=t(a),f=r(v*m,1/a),l=f*f,c=n(o,l),c*=v,c/=f,-c}return Qd=u,Qd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var e1,$5;function fF(){if($5)return e1;$5=1;var e=Ii(),n=hr(),t=ge(),r=Me(),i=l2(),o=h2();function u(a,s){var c,l,f,d,h,p,v;return a>1e20?-e(2*s)*o:(c=1/(a-.5),l=48/(c*c),f=((20700*c/l-98)*c-16)*c+96.36,d=((94.5/(l+f)-3)/l+1)*t(c*i)*a,v=r(d*2*s,2/a),v>.05+c?(p=-e(2*s)*o,v=p*p,a<5&&(f+=.3*(a-4.5)*(p+.6)),f+=(((.05*d*p-5)*p-7)*p-2)*p+l,v=(((((.4*v+6.3)*v+36)*v+94.5)/f-v-3)/l+1)*p,v=n(c*v*v)):v=((1/(((a+6)/(a*v)-.089*d-.822)*(a+2)*3)+.5/(a+4))*v-1)*(a+1)/(a+2)+1/v,h=t(a*v),-h)}return e1=u,e1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var n1,A5;function dF(){if(A5)return n1;A5=1;var e=Ii(),n=Xn(),t=vr(),r=GE(),i=QP(),o=ge(),u=be(),a=d2(),s=Me(),c=Si(),l=h2(),f=Et(),d=cF(),h=lF(),p=fF(),v=268435456,m=1/3,g=106/3,_=.8549879733383485;function y(b,E,A){var L,R,T,$,w,S,I,C,P,M,H,q,F,O,Z,U;if(w=0,E>A?(I=A,A=E,E=I,$=!0):$=!1,n(b)===b&&b<20)switch(R=t(1,g),n(b)){case 1:E===.5?w=0:w=-a(f*E)/c(f*E);break;case 2:w=(2*E-1)/o(2*E*A);break;case 4:S=4*E*A,T=o(S),F=4*a(i(T)/3)/T,O=o(F-4),w=E-.5<0?-O:O;break;case 6:if(E<1e-150)return($?-1:1)*p(b,E);Z=4*(E-E*E),U=s(Z,m),q=6*(1+_*(1/U-1));do P=q*q,M=P*P,H=q*M,C=q,q=2*(8*Z*H-270*P+2187)/(5*(4*Z*M-216*q-243));while(u((q-C)/q)>R);q=o(q-b),w=E-.5<0?-q:q;break;default:b>v?w=e(2*E)*l:b<3?(L=.2742-b*.0242143,E>L?w=d(b,E):w=h(b,E)):(L=t(1,r(b/-.654)),E>L?w=p(b,E):w=h(b,E))}else b>v?w=-e(2*E)*l:b<3?(L=.2742-b*.0242143,E>L?w=d(b,E):w=h(b,E)):(L=t(1,r(b/-.654)),E>L?w=p(b,E):w=h(b,E));return $?-w:w}return n1=y,n1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var t1,L5;function pF(){if(L5)return t1;L5=1;var e=dF();function n(t,r,i){var o,u,a,s;return u=r/2,a=1-u,o=t*2,s=e(o,u,a),i&&(i.value=s*s/(o+s*s)),o/(o+s*s)}return t1=n,t1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var r1,I5;function hF(){if(I5)return r1;I5=1;var e=St(),n=Ii(),t=ge(),r=Ne(),i=h2(),o=[0,0,0,0,0,0,0],u=[0,0,0,0];function a(s,c,l){var f,d,h,p,v,m,g;return f=n(2*l),f/=-t(s/2),u[0]=f,m=c-s,p=m*m,v=p*m,o[0]=-m*i/2,o[1]=(1-2*m)/8,o[2]=-(m*i/48),o[3]=-1/192,o[4]=-m*i/3840,o[5]=0,o[6]=0,u[1]=e(o,f),o[0]=m*i*(3*m-2)/12,o[1]=(20*p-12*m+1)/128,o[2]=m*i*(20*m-1)/960,o[3]=(16*p+30*m-15)/4608,o[4]=m*i*(21*m+32)/53760,o[5]=(-(32*p)+63)/368640,o[6]=-m*i*(120*m+17)/25804480,u[2]=e(o,f),o[0]=m*i*(-75*p+80*m-16)/480,o[1]=(-1080*v+868*p-90*m-45)/9216,o[2]=m*i*(-1190*p+84*m+373)/53760,o[3]=(-2240*v-2508*p+2100*m-165)/368640,o[4]=0,o[5]=0,o[6]=0,u[3]=e(o,f),h=e(u,1/s),d=h*h,g=-r(-d/2),d===0?.5:(1+h*t((1+g)/d))/2}return r1=a,r1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var i1,C5;function rw(){if(C5)return i1;C5=1;var e=we(),n=Pt(),t=n/4;function r(i,o){return u;function u(a){var s,c,l;return l=1-a,l===0?[-t,-t]:a===0?[-t,-t]:(c=e(a)+o*e(l)+i,s=1/a-o/l,[c,s])}}return i1=r,i1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o1,T5;function mF(){if(T5)return o1;T5=1;var e=oe();function n(t){return t===0||e(t)?t:t<0?-1:1}return o1=n,o1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u1,R5;function wu(){if(R5)return u1;R5=1;var e=mF();return u1=e,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var a1,k5;function iw(){if(k5)return a1;k5=1;var e=wu(),n=be(),t=vr(),r=Pt();function i(o,u,a,s,c,l){var f,d,h,p,v,m,g,_,y,b;y=0,f=0,v=u,p=t(1,1-c),g=r,d=r,h=r,m=l;do{if(f=y,h=d,d=g,_=o(v),y=_[0],b=_[1],m-=1,y===0)break;if(b===0?(f===0&&(v===a?u=s:u=a,f=o(u),g=u-v),e(f)*e(y)<0?g<0?g=(v-a)/2:g=(v-s)/2:g<0?g=(v-s)/2:g=(v-a)/2):g=y/b,n(g*2)>n(h)&&(g=g>0?(v-a)/2:(v-s)/2),u=v,v-=g,v<=a){if(g=.5*(u-a),v=u-g,v===a||v===s)break}else if(v>=s&&(g=.5*(u-s),v=u-g,v===a||v===s))break;g>0?s=u:a=u}while(m&&n(v*p)<n(g));return v}return a1=i,a1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s1,N5;function vF(){if(N5)return s1;N5=1;function e(n){return n===0?-1:-1+n*(-5+n*5)}return s1=e,s1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c1,M5;function _F(){if(M5)return c1;M5=1;function e(n){return n===0?1:1+n*(21+n*(-69+n*46))}return c1=e,c1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l1,O5;function gF(){if(O5)return l1;O5=1;function e(n){return n===0?7:7+n*(-2+n*(33+n*(-62+n*31)))}return l1=e,l1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f1,q5;function bF(){if(q5)return f1;q5=1;function e(n){return n===0?25:25+n*(-52+n*(-17+n*(88+n*(-115+n*46))))}return f1=e,f1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d1,P5;function yF(){if(P5)return d1;P5=1;function e(n){return n===0?7:7+n*(12+n*(-78+n*52))}return d1=e,d1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p1,F5;function EF(){if(F5)return p1;F5=1;function e(n){return n===0?-7:-7+n*(2+n*(183+n*(-370+n*185)))}return p1=e,p1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h1,D5;function wF(){if(D5)return h1;D5=1;function e(n){return n===0?-533:-533+n*(776+n*(-1835+n*(10240+n*(-13525+n*5410))))}return h1=e,h1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m1,x5;function SF(){if(x5)return m1;x5=1;function e(n){return n===0?-1579:-1579+n*(3747+n*(-3372+n*(-15821+n*(45588+n*(-45213+n*15071)))))}return m1=e,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v1,B5;function $F(){if(B5)return v1;B5=1;function e(n){return n===0?449:449+n*(-1259+n*(-769+n*(6686+n*(-9260+n*3704))))}return v1=e,v1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _1,H5;function AF(){if(H5)return _1;H5=1;function e(n){return n===0?63149:63149+n*(-151557+n*(140052+n*(-727469+n*(2239932+n*(-2251437+n*750479)))))}return _1=e,_1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1,U5;function LF(){if(U5)return g1;U5=1;function e(n){return n===0?29233:29233+n*(-78755+n*(105222+n*(146879+n*(-1602610+n*(3195183+n*(-2554139+n*729754))))))}return g1=e,g1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1,G5;function IF(){if(G5)return b1;G5=1;function e(n){return n===0?1:1+n*(-13+n*13)}return b1=e,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y1,V5;function CF(){if(V5)return y1;V5=1;function e(n){return n===0?1:1+n*(21+n*(-69+n*46))}return y1=e,y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var E1,W5;function TF(){if(W5)return E1;W5=1;var e=St(),n=Ii(),t=be(),r=Ne(),i=we(),o=ge(),u=Si(),a=d2(),s=rw(),c=iw(),l=vF(),f=_F(),d=gF(),h=bF(),p=yF(),v=EF(),m=wF(),g=SF(),_=$F(),y=AF(),b=LF(),E=IF(),A=CF(),L=[0,0,0,0,0,0],R=[0,0,0,0];function T($,w,S){var I,C,P,M,H,q,F,O,Z,U,K,Q,ie,B,j,V,$e,me,ne,ue;return H=n(2*$)/-o(w/2),me=u(S),$e=a(S),R[0]=H,j=me*me,V=$e*$e,ie=me*$e,Q=ie*ie,K=Q*ie,U=Q*Q,Z=Q*K,O=K*K,F=U*K,L[0]=(2*j-1)/(3*ie),L[1]=-l(j)/(36*Q),L[2]=f(j)/(1620*K),L[3]=d(j)/(6480*U),L[4]=h(j)/(90720*Z),L[5]=0,R[1]=e(L,H),L[0]=-p(j)/(405*K),L[1]=v(j)/(2592*U),L[2]=-m(j)/(204120*Z),L[3]=-g(j)/(2099520*O),L[4]=0,L[5]=0,R[2]=e(L,H),L[0]=_(j)/(102060*Z),L[1]=-y(j)/(20995200*O),L[2]=b(j)/(36741600*F),L[3]=0,L[4]=0,L[5]=0,R[3]=e(L,H),q=e(R,1/w),P=$e/me,P*=P,B=-(q*q)/(2*j)+i(j)+V*i(V)/j,t(q)<.7?(L[0]=j,L[1]=ie,L[2]=(1-2*j)/3,L[3]=E(j)/(36*ie),L[4]=A(j)/(270*Q),L[5]=0,ue=e(L,q)):(ne=r(B),L[0]=ne,L[1]=P,L[2]=0,L[3]=3*P*(3*P+1)/6,L[4]=4*P*(4*P+1)*(4*P+2)/24,L[5]=5*P*(5*P+1)*(5*P+2)*(5*P+3)/120,ue=e(L,ne),(ue-j)*q<0&&(ue=1-ue)),q<0?(C=0,I=j):(C=j,I=1),(ue<C||ue>I)&&(ue=(C+I)/2),M=s(-B,P),ue=c(M,ue,C,I,32,100),ue}return E1=T,E1}var Xi={exports:{}},Yi={exports:{}},w1,j5;function RF(){if(j5)return w1;j5=1;var e=1e3,n=e*60,t=n*60,r=t*24,i=r*365.25;w1=function(c,l){l=l||{};var f=typeof c;if(f==="string"&&c.length>0)return o(c);if(f==="number"&&isNaN(c)===!1)return l.long?a(c):u(c);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(c))};function o(c){if(c=String(c),!(c.length>100)){var l=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(c);if(l){var f=parseFloat(l[1]),d=(l[2]||"ms").toLowerCase();switch(d){case"years":case"year":case"yrs":case"yr":case"y":return f*i;case"days":case"day":case"d":return f*r;case"hours":case"hour":case"hrs":case"hr":case"h":return f*t;case"minutes":case"minute":case"mins":case"min":case"m":return f*n;case"seconds":case"second":case"secs":case"sec":case"s":return f*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return f;default:return}}}}function u(c){return c>=r?Math.round(c/r)+"d":c>=t?Math.round(c/t)+"h":c>=n?Math.round(c/n)+"m":c>=e?Math.round(c/e)+"s":c+"ms"}function a(c){return s(c,r,"day")||s(c,t,"hour")||s(c,n,"minute")||s(c,e,"second")||c+" ms"}function s(c,l,f){if(!(c<l))return c<l*1.5?Math.floor(c/l)+" "+f:Math.ceil(c/l)+" "+f+"s"}return w1}var X5;function kF(){return X5||(X5=1,(function(e,n){n=e.exports=i.debug=i.default=i,n.coerce=s,n.disable=u,n.enable=o,n.enabled=a,n.humanize=RF(),n.names=[],n.skips=[],n.formatters={};var t;function r(c){var l=0,f;for(f in c)l=(l<<5)-l+c.charCodeAt(f),l|=0;return n.colors[Math.abs(l)%n.colors.length]}function i(c){function l(){if(l.enabled){var f=l,d=+new Date,h=d-(t||d);f.diff=h,f.prev=t,f.curr=d,t=d;for(var p=new Array(arguments.length),v=0;v<p.length;v++)p[v]=arguments[v];p[0]=n.coerce(p[0]),typeof p[0]!="string"&&p.unshift("%O");var m=0;p[0]=p[0].replace(/%([a-zA-Z%])/g,function(_,y){if(_==="%%")return _;m++;var b=n.formatters[y];if(typeof b=="function"){var E=p[m];_=b.call(f,E),p.splice(m,1),m--}return _}),n.formatArgs.call(f,p);var g=l.log||n.log||console.log.bind(console);g.apply(f,p)}}return l.namespace=c,l.enabled=n.enabled(c),l.useColors=n.useColors(),l.color=r(c),typeof n.init=="function"&&n.init(l),l}function o(c){n.save(c),n.names=[],n.skips=[];for(var l=(typeof c=="string"?c:"").split(/[\s,]+/),f=l.length,d=0;d<f;d++)l[d]&&(c=l[d].replace(/\*/g,".*?"),c[0]==="-"?n.skips.push(new RegExp("^"+c.substr(1)+"$")):n.names.push(new RegExp("^"+c+"$")))}function u(){n.enable("")}function a(c){var l,f;for(l=0,f=n.skips.length;l<f;l++)if(n.skips[l].test(c))return!1;for(l=0,f=n.names.length;l<f;l++)if(n.names[l].test(c))return!0;return!1}function s(c){return c instanceof Error?c.stack||c.message:c}})(Yi,Yi.exports)),Yi.exports}var Y5;function ow(){return Y5||(Y5=1,(function(e,n){var t={};n=e.exports=kF(),n.log=o,n.formatArgs=i,n.save=u,n.load=a,n.useColors=r,n.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:s(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function r(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}n.formatters.j=function(c){try{return JSON.stringify(c)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}};function i(c){var l=this.useColors;if(c[0]=(l?"%c":"")+this.namespace+(l?" %c":" ")+c[0]+(l?"%c ":" ")+"+"+n.humanize(this.diff),!!l){var f="color: "+this.color;c.splice(1,0,f,"color: inherit");var d=0,h=0;c[0].replace(/%[a-zA-Z%]/g,function(p){p!=="%%"&&(d++,p==="%c"&&(h=d))}),c.splice(h,0,f)}}function o(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function u(c){try{c==null?n.storage.removeItem("debug"):n.storage.debug=c}catch{}}function a(){var c;try{c=n.storage.debug}catch{}return!c&&typeof process<"u"&&"env"in process&&(c=t.DEBUG),c}n.enable(a());function s(){try{return window.localStorage}catch{}}})(Xi,Xi.exports)),Xi.exports}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S1,K5;function Su(){if(K5)return S1;K5=1;var e=34028234663852886e22;return S1=e,S1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $1,J5;function NF(){if(J5)return $1;J5=1;var e=ow(),n=ZE(),t=be(),r=Ne(),i=we(),o=Su(),u=e("gammaincinv:higher_newton");function a(s,c,l,f,d,h,p,v){var m,g,_,y,b,E,A,L,R,T,$,w,S,I;I=s,$=1,w=1,E=c*c,g=s;do{if(I=s,A=I*I,l===0){if(m=(1-c)*i(I)+I+h,m>i(o))return u("Warning: overflow problems in one or more steps of the computation. The initial approximation to the root is returned."),g;S=r(m)}else S=-p*I;v?(L=n(I,c,!0,!1),_=-S*(L-f)):(R=n(I,c,!0,!0),_=S*(R-d)),S=_,f>1e-120||w>1?(y=.5*(I-c+1)/I,b=(2*A-4*I*c+4*I+2*E-3*c+1)/A,b/=6,s=I+S*(1+S*(y+S*b))):s=I+S,$=t(I/s-1),w+=1,I=s,I<0&&(I=g,w=100)}while($>2e-14&&w<35);return($>2e-14||w>99)&&u("Warning: the number of iterations in the Newton method reached the upper limit N=35. The last value obtained for the root is given as output."),T=I||0,T}return $1=a,$1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A1,z5;function MF(){if(z5)return A1;z5=1;function e(n){return n===0?0:0+n*(1+n*(1+n*(1.5+n*(2.6666666666666665+n*(5.208333333333333+n*10.8)))))}return A1=e,A1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L1,Z5;function OF(){if(Z5)return L1;Z5=1;function e(n){return n===0?1:1+n*(1+n*(.3333333333333333+n*(.027777777777777776+n*(-.003703703703703704+n*(.0002314814814814815+n*5878894767783657e-20)))))}return L1=e,L1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I1,Q5;function uw(){if(Q5)return I1;Q5=1;var e=be(),n=Ne(),t=we(),r=St(),i=MF(),o=OF(),u=1e-8,a=.08333333333333333,s=.008333333333333333,c=[1,0,0,0,0,0];function l(f){var d,h,p,v,m,g,_,y,b;if(b=f*f*.5,f===0?m=0:f<-1?(y=n(-1-b),m=i(y)):f<1?(y=f,m=o(y)):(y=11+b,g=t(y),m=y+g,y=1/y,d=g*g,h=d*g,p=h*g,v=p*g,c[1]=(2-g)*.5,c[2]=(-9*g+6+2*d)/6,c[3]=-(3*h+36*g-22*d-12)*a,c[4]=(60+350*d-300*g-125*h+12*p)/60,c[5]=-(-120-274*p+900*g-1700*d+1125*h+20*v)*s,m+=g*y*r(c,y)),y=1,f>-3.5&&f<-.03||f>.03&&f<40){y=1,_=m;do m=_*(b+t(_))/(_-1),y=e(_/m-1),_=m;while(y>u)}return m}return I1=l,I1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C1,e8;function qF(){if(e8)return C1;e8=1;var e=[1.9963790515900766,-.0017971032528832887,13129285796384672e-21,-2340875228178749e-22,72291210671127e-22,-3280997607821e-22,19875070901e-21,-1509214183e-21,1375340084e-22,-145728923e-22,17532367e-22,-2351465e-22,346551e-22,-55471e-22,9548e-22,-1748e-22,332e-22,-58e-22];function n(t,r){var i,o,u,a,s;o=0,u=0,i=r+r,s=t;do a=u,u=o,o=i*u-a+e[s],s-=1;while(s>=0);return(o-a)/2}return C1=n,C1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T1,n8;function PF(){if(n8)return T1;n8=1;function e(n){return n===0?.025721014990011306:.025721014990011306+n*(.08247596616699963+n*(-.0025328157302663564+n*(.0006099292666946337+n*(-.00033543297638406+n*.000250505279903))))}return T1=e,T1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R1,t8;function FF(){if(t8)return R1;t8=1;function e(n){return n===0?.08333333333333333:.08333333333333333+n*(-.002777777777777778+n*(.0007936507936507937+n*-.0005952380952380953))}return R1=e,R1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k1,r8;function DF(){if(r8)return k1;r8=1;var e=br(),n=we(),t=nw(),r=Eu(),i=Su(),o=qF(),u=PF(),a=FF(),s=.30865217988013566;function c(l){var f;return l<r?i:l<1?e(l+1)-(l+.5)*n(l)+l-t:l<2?e(l)-(l-.5)*n(l)+l-t:l<3?e(l-1)-(l-.5)*n(l)+l-t+n(l-1):l<12?(f=18/(l*l)-1,o(17,f)/(12*l)):(f=1/(l*l),l<1e3?u(f)/(s+f)/l:a(f)/l)}return k1=c,k1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N1,i8;function xF(){if(i8)return N1;i8=1;var e=Ne(),n=Kn(),t=we(),r=Su(),i=vu(),o=DF();function u(a){return a>=3?e(o(a)):a>0?n(a)/(e(-a+(a-.5)*t(a))*i):r}return N1=u,N1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M1,o8;function BF(){if(o8)return M1;o8=1;function e(n){var t,r,i;return n===0?-.3333333333438:(n<0?t=-n:t=n,t<=1?(r=-.3333333333438+n*(-.2070740359969+n*(-.05041806657154+n*(-.004923635739372+n*-4293658292782e-17))),i=1+n*(.7045554412463+n*(.2118190062224+n*(.03048648397436+n*.001605037988091)))):(n=1/n,r=-4293658292782e-17+n*(-.004923635739372+n*(-.05041806657154+n*(-.2070740359969+n*-.3333333333438))),i=.001605037988091+n*(.03048648397436+n*(.2118190062224+n*(.7045554412463+n*1)))),r/i)}return M1=e,M1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O1,u8;function HF(){if(u8)return O1;u8=1;var e=be(),n=we(),t=uw(),r=BF();function i(o){var u;return e(o)<1?r(o):(u=t(o),n(o/(u-1))/o)}return O1=i,O1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q1,a8;function UF(){if(a8)return q1;a8=1;function e(n){var t,r,i;return n===0?-.0172847633523:(n<0?t=-n:t=n,t<=1?(r=-.0172847633523+n*(-.0159372646475+n*(-.00464910887221+n*(-.00060683488776+n*-614830384279e-17))),i=1+n*(.764050615669+n*(.297143406325+n*(.0579490176079+n*.00574558524851)))):(n=1/n,r=-614830384279e-17+n*(-.00060683488776+n*(-.00464910887221+n*(-.0159372646475+n*-.0172847633523))),i=.00574558524851+n*(.0579490176079+n*(.297143406325+n*(.764050615669+n*1)))),r/i)}return q1=e,q1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P1,s8;function GF(){if(s8)return P1;s8=1;function e(n){var t,r,i;return n===0?-.0172839517431:(n<0?t=-n:t=n,t<=1?(r=-.0172839517431+n*(-.0146362417966+n*(-.00357406772616+n*(-.000391032032692+n*249634036069e-17))),i=1+n*(.690560400696+n*(.249962384741+n*(.0443843438769+n*.00424073217211)))):(n=1/n,r=249634036069e-17+n*(-.000391032032692+n*(-.00357406772616+n*(-.0146362417966+n*-.0172839517431))),i=.00424073217211+n*(.0443843438769+n*(.249962384741+n*(.690560400696+n*1)))),r/i)}return P1=e,P1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F1,c8;function VF(){if(c8)return F1;c8=1;function e(n){var t,r,i;return n===0?.99994466948:(n<0?t=-n:t=n,t<=1?(r=.99994466948+n*(104.649839762+n*(857.204033806+n*(731.901559577+n*45.5174411671))),i=1+n*(104.526456943+n*(823.313447808+n*(3119.93802124+n*3970.03311219)))):(n=1/n,r=45.5174411671+n*(731.901559577+n*(857.204033806+n*(104.649839762+n*.99994466948))),i=3970.03311219+n*(3119.93802124+n*(823.313447808+n*(104.526456943+n*1)))),r/i)}return F1=e,F1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D1,l8;function WF(){if(l8)return D1;l8=1;var e=we(),n=UF(),t=GF(),r=VF();function i(o){var u,a;return o<-5?(a=o*o,u=e(-o),(12-a-6*(u*u))/(12*a*o)):o<-2?n(o):o<2?t(o):o<1e3?(a=1/o,r(o)/(-12*o)):-1/(12*o)}return D1=i,D1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x1,f8;function jF(){if(f8)return x1;f8=1;function e(n){var t,r,i;return n===0?.0495346498136:(n<0?t=-n:t=n,t<=1?(r=.0495346498136+n*(.0299521337141+n*(.00688296911516+n*(.000512634846317+n*-201411722031e-16))),i=1+n*(.759803615283+n*(.261547111595+n*(.0464854522477+n*.00403751193496)))):(n=1/n,r=-201411722031e-16+n*(.000512634846317+n*(.00688296911516+n*(.0299521337141+n*.0495346498136))),i=.00403751193496+n*(.0464854522477+n*(.261547111595+n*(.759803615283+n*1)))),r/i)}return x1=e,x1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B1,d8;function XF(){if(d8)return B1;d8=1;function e(n){var t,r,i;return n===0?.00452313583942:(n<0?t=-n:t=n,t<=1?(r=.00452313583942+n*(.00120744920113+n*(-789724156582e-16+n*(-504476066942e-16+n*-535770949796e-17))),i=1+n*(.912203410349+n*(.405368773071+n*(.0901638932349+n*.00948935714996)))):(n=1/n,r=-535770949796e-17+n*(-504476066942e-16+n*(-789724156582e-16+n*(.00120744920113+n*.00452313583942))),i=.00948935714996+n*(.0901638932349+n*(.405368773071+n*(.912203410349+n*1)))),r/i)}return B1=e,B1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H1,p8;function YF(){if(p8)return H1;p8=1;function e(n){var t,r,i;return n===0?.00439937562904:(n<0?t=-n:t=n,t<=1?(r=.00439937562904+n*(.000487225670639+n*(-.000128470657374+n*(529110969589e-17+n*15716677175e-17))),i=1+n*(.794435257415+n*(.333094721709+n*(.0703527806143+n*.00806110846078)))):(n=1/n,r=15716677175e-17+n*(529110969589e-17+n*(-.000128470657374+n*(.000487225670639+n*.00439937562904))),i=.00806110846078+n*(.0703527806143+n*(.333094721709+n*(.794435257415+n*1)))),r/i)}return H1=e,H1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U1,h8;function KF(){if(h8)return U1;h8=1;function e(n){var t,r,i;return n===0?-.0011481191232:(n<0?t=-n:t=n,t<=1?(r=-.0011481191232+n*(-.112850923276+n*(1.51623048511+n*(-.218472031183+n*.0730002451555))),i=1+n*(14.2482206905+n*(69.7360396285+n*(218.938950816+n*277.067027185)))):(n=1/n,r=.0730002451555+n*(-.218472031183+n*(1.51623048511+n*(-.112850923276+n*-.0011481191232))),i=277.067027185+n*(218.938950816+n*(69.7360396285+n*(14.2482206905+n*1)))),r/i)}return U1=e,U1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G1,m8;function JF(){if(m8)return G1;m8=1;function e(n){var t,r,i;return n===0?-.000145727889667:(n<0?t=-n:t=n,t<=1?(r=-.000145727889667+n*(-.290806748131+n*(-13.308504545+n*(199.722374056+n*-11.4311378756))),i=1+n*(139.612587808+n*(2189.01116348+n*(7115.24019009+n*45574.6081453)))):(n=1/n,r=-11.4311378756+n*(199.722374056+n*(-13.308504545+n*(-.290806748131+n*-.000145727889667))),i=45574.6081453+n*(7115.24019009+n*(2189.01116348+n*(139.612587808+n*1)))),r/i)}return G1=e,G1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V1,v8;function zF(){if(v8)return V1;v8=1;var e=we(),n=jF(),t=XF(),r=YF(),i=KF(),o=JF();function u(a){var s,c;return a<-8?(s=a*a,c=e(-a)/a,(-30+a*c*(6*s*c*c-12+s))/(12*a*s*s)):a<-4?n(a)/(a*a):a<-2?t(a):a<2?r(a):a<10?(s=1/a,i(s)/(a*a)):a<100?(s=1/a,o(s)/(a*a)):-e(a)/(12*a*a*a)}return V1=u,V1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W1,_8;function ZF(){if(_8)return W1;_8=1;var e=ow(),n=St(),t=br(),r=Ii(),i=Kn(),o=ge(),u=be(),a=Ne(),s=yt(),c=Me(),l=we(),f=vu(),d=Su(),h=bu(),p=NF(),v=uw(),m=xF(),g=HF(),_=WF(),y=zF(),b=e("gammaincinv:compute"),E=.5,A=.3333333333333333,L=.25,R=.2,T=.16666666666666666,$=.08333333333333333,w=.041666666666666664,S=[0,0,0,0,0];function I(C,P,M){var H,q,F,O,Z,U,K,Q,ie,B,j,V,$e,me,ne,ue,Ae,ye,at,un,_e,$n,ze,An,At,z,ve,Ln,Cr,zn,st,xt,Tr,Rr,Fi,Ze,Pe,Bt,Qe,In,fn,Lt,Ht,Ut;if(P<E?(O=!0,Z=P,Lt=-1):(O=!1,Z=M,Lt=1),Qe=0,u(C-1)<1e-4&&(In=0,O?P<.001?(xt=P*P,Ln=xt*P,st=Ln*P,un=st*P,at=un*P,_e=P+xt*E+Ln*A+st*L+un*R+at*T):_e=-l(1-P):_e=-l(M),C===1?(Qe=2,Rr=_e):(F=t(C),Qe=1)),M<1e-30&&C<E&&(In=0,_e=-l(M*i(C))+(C-1)*l(-l(M*i(C))),Qe=1,F=t(C)),C>1&&C<500&&P<1e-80){for(In=0,U=1/C,H=1/(C+1),_e=(t(C+1)+l(P))*U,_e=a(_e),me=_e,Bt=0;Bt<10;Bt++)_e=me*a(_e*U)*c(1-_e*H,U);Qe=1,F=t(C)}if(K=1/C*(l(P)+t(C+1)),K<l(R*(1+C))&&Qe===0&&(fn=a(K),In=0,$n=C*C,Tr=$n*C,Cr=Tr*C,ne=C+1,j=ne*ne,B=ne*j,ie=j*j,ue=C+2,Q=ue*ue,Ae=C+3,S[0]=1,S[1]=1/ne,S[2]=E*(3*C+5)/(j*ue),S[3]=A*(31+8*$n+33*C)/(B*ue*Ae),S[4]=w*(2888+1179*Tr+125*Cr+3971*$n+5661*C)/(ie*Q*Ae*(C+4)),_e=fn*n(S,fn),F=t(C),Qe=1),C<10&&Qe===0&&(V=o(C)/(m(C)*f),$e=s(.02,V),M<$e&&(In=0,Ze=1-C,z=Ze*Ze,ve=z*Ze,ye=o(-2/C*l(M/V)),_e=C*v(ye),Pe=l(_e),_e>5?(ze=Pe*Pe,An=ze*Pe,At=An*Pe,fn=1/_e,S[0]=Pe-1,S[1]=(3*Ze-2*Ze*Pe+ze-2*Pe+2)*E,S[2]=(24*Ze*Pe-11*z-24*Ze-6*ze+12*Pe-12-9*Ze*ze+6*z*Pe+2*An)*T,S[3]=(-12*ve*Pe+8.04*Ze*ze-114*z*Pe+(72+36*ze)+(3*At-72*Pe+162)*(Ze-168*Ze*Pe)-(12*An+25*ve)-(22*Ze*An+36*z*ze+120*z))*$,S[4]=0,_e=_e-Pe+Ze*fn*n(S,fn)):(fn=1/_e,ze=Pe*Pe,Fi=Pe-1,Ht=Pe-Ze*fn*Fi,Ht<_e&&(_e-=Ht)),F=t(C),Qe=1)),u(Z-E)<1e-5&&Qe===0&&(In=0,U=1/C,_e=C-A+(.019753086419753086+.007211444248481286*U)*U,F=t(C),Qe=1),C<1&&Qe===0&&(In=0,O?_e=a(1/C*(l(Z)+t(C+1))):_e=a(1/C*(l(1-Z)+t(C+1))),F=t(C),Qe=1),Qe===0)if(In=1,U=1/C,fn=r(2*Z),ye=Lt*fn/o(C*E),fn<d)ye+=(g(ye)+(_(ye)+y(ye)*U)*U)*U,_e=C*v(ye),Ut=ye,zn=-o(C/h)*a(-E*C*Ut*Ut)/m(C),q=1/zn;else return b("Warning: Overflow problems in one or more steps of the computation."),NaN;return Qe<2&&(Rr=p(_e,C,In,P,M,F,q,O)),Rr}return W1=I,W1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j1,g8;function QF(){if(g8)return j1;g8=1;var e=oe(),n=Eu(),t=ke(),r=ZF();function i(o,u,a){return e(o)||e(u)?NaN:u<n?NaN:o>1||o<0?NaN:a===!0?o===0?t:o===1?0:r(u,1-o,o):o===0?0:o===1?t:r(u,o,1-o)}return j1=i,j1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X1,b8;function eD(){if(b8)return X1;b8=1;var e=QF();return X1=e,X1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y1,y8;function nD(){if(y8)return Y1;y8=1;var e=5e-324;return Y1=e,Y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var K1,E8;function tD(){if(E8)return K1;E8=1;var e=eD(),n=we(),t=ge(),r=nD(),i=rw(),o=iw();function u(a,s,c,l){var f,d,h,p,v,m,g,_,y,b,E,A,L,R,T,$,w,S,I,C,P,M,H,q,F,O,Z,U,K,Q;return c<l?v=e(c,s,!0):v=e(l,s,!1),v/=a,R=s/a,U=t(1+R),S=U*U,I=S*U,C=S*S,P=I*S,M=I*I,H=C*I,q=C*C,F=P*C,g=P*P,Z=v-R,T=Z*Z,$=T*Z,w=T*T,O=U+1,_=O*O,y=O*_,b=_*_,E=(U+2)*(U-1)/(3*U),E+=(I+9*S+21*U+5)*Z/(36*S*O),E-=(C-13*I+69*S+167*U+46)*T/(1620*_*I),E-=(7*P+21*C+70*I+26*S-93*U-31)*$/(6480*y*C),E-=(75*M+202*P+188*C-888*I-1345*S+118*U+138)*w/(272160*b*P),A=(28*C+131*I+402*S+581*U+208)*(U-1)/(1620*O*I),A-=(35*M-154*P-623*C-1636*I-3983*S-3514*U-925)*Z/(12960*_*C),A-=(2132*H+7915*M+16821*P+35066*C+87490*I+141183*S+95993*U+21640)*T/(816480*P*y),A-=(11053*q+53308*H+117010*M+163924*P+116188*C-258428*I-677042*S-481940*U-105497)*$/(14696640*b*M),L=-((3592*H+8375*M-1323*P-29198*C-89578*I-154413*S-116063*U-29632)*(U-1))/(816480*P*_),L-=(442043*F+2054169*q+3803094*H+3470754*M+2141568*P-2393568*C-19904934*I-34714674*S-23128299*U-5253353)*Z/(146966400*M*y),L-=(116932*g+819281*F+2378172*q+4341330*H+6806004*M+10622748*P+18739500*C+30651894*I+30869976*S+15431867*U+2919016)*T/(146966400*b*H),m=v+E/a+A/(a*a)+L/(a*a*a),m<=0&&(m=r),K=m-R*n(m)+(1+R)*n(1+R)-R,f=1/(1+R),h=m<R?f:0,p=m<R?1:f,Q=(h+p)/2,d=i(K,R),o(d,Q,h,p,32,100)}return K1=u,K1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var J1,w8;function rD(){if(w8)return J1;w8=1;var e=be(),n=vr(),t=wu(),r=qt(),i=Pt();function o(u,a,s,c,l,f){var d,h,p,v,m,g,_,y,b,E,A,L,R,T,$,w;T=0,h=!1,g=a,m=n(1,1-l),b=r(1e7*a,1e7),_=0,p=b,v=b,y=f;do{if(_=T,v=p,p=b,R=u(g),T=R[0],$=R[1],w=R[2],y-=1,T===0)break;if($===0?(_===0&&(g===s?a=c:a=s,_=u(a),b=a-g),t(_)*t(T)<0?b<0?b=(g-s)/2:b=(g-c)/2:b<0?b=(g-c)/2:b=(g-s)/2):w===0?b=T/$:(E=2*T,L=2*$-T*(w/$),e(L)<1&&e(E)>=e(L)*i?b=T/$:b=E/L,b*$/T<0&&(b=T/$,e(b)>2*e(a)&&(b=(b<0?-1:1)*2*e(a)))),d=e(b/v),d>.8&&d<2&&(b=b>0?(g-s)/2:(g-c)/2,e(b)>g&&(b=t(b)*g),v=b*3),a=g,g-=b,g<s){if(e(s)<1&&e(g)>1&&i/e(g)<e(s)?A=1e3:A=g/s,e(A)<1&&(A=1/A),!h&&A>0&&A<3)b=.99*(a-s),g=a-b,h=!0;else if(b=(a-s)/2,g=a-b,g===s||g===c)break}else if(g>c){if(e(c)<1&&e(g)>1&&i/e(g)<e(c)?A=1e3:A=g/c,e(A)<1&&(A=1/A),!h&&A>0&&A<3)b=.99*(a-c),g=a-b,h=!0;else if(b=(a-c)/2,g=a-b,g===s||g===c)break}b>0?c=a:s=a}while(y&&e(g*m)<e(b));return g}return J1=o,J1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var z1,S8;function iD(){if(S8)return z1;S8=1;var e=ew().assign,n=be(),t=Pt(),r=Ot();function i(o,u,a,s){return c;function c(l){var f,d,h,p,v;return v=1-l,f=[0,0],e(l,o,u,!0,s,f,1,0),p=f[0]-a,d=f[1],s&&(d=-d),v===0&&(v=r*64),l===0&&(l=r*64),h=d*(-(v*o)+(u-2)*l+1),n(h)<v*l*t&&(h/=v*l),s&&(h=-h),d===0&&(d=(s?-1:1)*r*64),[p,d,h]}}return z1=i,z1}var Z1,$8;function oD(){if($8)return Z1;$8=1;var e=St(),n=Li(),t=hr(),r=wn(),i=o2(),o=mu(),u=ge(),a=be(),s=Ne(),c=Me(),l=Si(),f=qt(),d=yt(),h=we(),p=Ot(),v=l2(),m=Yn(),g=pF(),_=hF(),y=TF(),b=tD(),E=rD(),A=iD(),L=32,R=1e3,T=[0,0,0,0,0];function $(w,S,I,C){var P,M,H,q,F,O,Z,U,K,Q,ie,B,j,V,$e,me,ne,ue,Ae,ye,at,un,_e,$n,ze,An,At,z,ve;if(M=!1,C===0)return[1,0];if(I===0)return[0,1];if(w===1){if(S===1)return[I,1-I];B=S,S=w,w=B,B=C,C=I,I=B,M=!0}if(z=0,q=0,O=1,w===.5){if(S===.5)return z=l(I*v),z*=z,ve=l(C*v),ve*=ve,[z,ve];S>.5&&(B=S,S=w,w=B,B=C,C=I,I=B,M=!M)}if(S===.5&&w>=.5&&I!==1)at={},z=g(w,I,at),ve=at.value;else{if(S===1)return I<C?w>1?(z=c(I,1/w),ve=-t(h(I)/w)):(z=c(I,1/w),ve=1-z):(z=s(r(-C)/w),ve=-t(r(-C)/w)),M&&(B=ve,ve=z,z=B),[z,ve];if(w+S>5)I>.5&&(B=S,S=w,w=B,B=C,C=I,I=B,M=!M),K=d(w,S),U=f(w,S),u(K)>U-K&&K>5?(z=_(w,S,I),ve=1-z):(ze=w+S,F=i(u(w/ze)),H=K/ze,H>=.2&&H<=.8&&ze>=10?(ie=c(I,1/w),ie<.0025&&w+S<200?z=ie*c(w*o(w,S),1/w):z=y(I,ze,F),ve=1-z):(w<S&&(B=S,S=w,w=B,B=C,C=I,I=B,M=!M),Q=0,S<2&&(Q=o(w,S)),Q===0?ve=1:(ve=c(S*C*Q,1/S),z=1-ve)),ve>1e-5&&(z=b(w,S,I,C),ve=1-z));else if(w<1&&S<1){if(ye=(1-w)/(2-w-S),me=n(ye,w,S)-I,a(me)/I<m*3)return M?[1-ye,ye]:[ye,1-ye];me<0&&(B=S,S=w,w=B,B=C,C=I,I=B,M=!M,ye=1-ye),Ae=c(w*I*o(w,S),1/w),z=Ae/(1+Ae),ve=1/(1+Ae),z>ye&&(z=ye),O=ye}else w>1&&S>1?(ye=(w-1)/(w+S-2),j=(S-1)/(w+S-2),ue=n(ye,w,S)-I,ue<0&&(B=S,S=w,w=B,B=C,C=I,I=B,B=j,j=ye,ye=B,M=!M),ne=h(I*w*o(w,S))/w,z=s(ne),ve=z<.9?1-z:-t(ne),S<w&&z<.2&&(V=w-1,$e=S-1,un=w*w,_e=w*un,$n=S*S,T[0]=0,T[1]=1,T[2]=$e/V,V*=V,T[3]=$e*(3*w*S+5*S+un-w-4)/(2*(w+2)*V),V*=w+1,T[4]=$e*(33*w*$n+31*$n+8*un*$n-30*w*S-47*S+11*un*S+6*_e*S+18+4*w-_e+un*un-10*un),T[4]/=3*(w+3)*(w+2)*V,z=e(T,z)),z>ye&&(z=ye),O=ye):(S<w&&(B=S,S=w,w=B,B=C,C=I,I=B,M=!M),c(I,1/w)<.5?(z=c(I*w*o(w,S),1/w),z===0&&(z=p),ve=1-z):(ve=c(1-c(I,S*o(w,S)),1/S),ve===0&&(ve=p),z=1-ve))}return z>.5&&(B=S,S=w,w=B,B=C,C=I,I=B,B=ve,ve=z,z=B,M=!M,An=1-O,At=1-q,q=An,O=At),q===0&&(M?(q=m,z<q&&(z=q)):q=p,z<q&&(z=q)),P=L,z<1e-50&&(w<1||S<1)&&(P*=3,P/=2),Z=A(w,S,I<C?I:C,I>=C),z=E(Z,z,q,O,P,R),z===q&&(z=0),M?[1-z,z]:[z,1-z]}return Z1=$,Z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q1,A8;function m2(){if(A8)return Q1;A8=1;var e=oD();return Q1=e,Q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ep,L8;function uD(){if(L8)return ep;L8=1;var e=oe(),n=m2();function t(r,i,o,u){return e(r)||e(i)||e(o)?NaN:i<=0||o<=0?NaN:r<0||r>1?NaN:u?n(i,o,1-r,r)[0]:n(i,o,r,1-r)[0]}return ep=t,ep}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var np,I8;function aw(){if(I8)return np;I8=1;var e=uD();return np=e,np}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tp,C8;function aD(){if(C8)return tp;C8=1;var e=aw(),n=oe();function t(r,i,o){return n(r)||n(i)||n(o)||i<=0||o<=0||r<0||r>1?NaN:e(r,i,o)}return tp=t,tp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rp,T8;function sD(){if(T8)return rp;T8=1;var e=Sn(),n=aw(),t=oe();function r(i,o){if(t(i)||t(o)||i<=0||o<=0)return e(NaN);return u;function u(a){return t(a)||a<0||a>1?NaN:n(a,i,o)}}return rp=r,rp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ip,R8;function cD(){if(R8)return ip;R8=1;var e=tn(),n=aD(),t=sD();return e(n,"factory",t),ip=n,ip}var lD=cD();const fD=jn(lD);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var op,k8;function dD(){if(k8)return op;k8=1;var e=gu(),n=ge(),t=oe();function r(i,o,u){var a,s;return t(i)||t(o)||t(u)||u<0?NaN:u===0?i<o?0:1:(a=u*n(2),s=i-o,.5*e(-s/a))}return op=r,op}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var up,N8;function pD(){if(N8)return up;N8=1;var e=oe();function n(t,r){return e(t)||e(r)?NaN:t<r?0:1}return up=n,up}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ap,M8;function hD(){if(M8)return ap;M8=1;var e=Sn(),n=oe();function t(r){if(n(r))return e(NaN);return i;function i(o){return n(o)?NaN:o<r?0:1}}return ap=t,ap}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sp,O8;function mD(){if(O8)return sp;O8=1;var e=tn(),n=pD(),t=hD();return e(n,"factory",t),sp=n,sp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cp,q8;function vD(){if(q8)return cp;q8=1;var e=Sn(),n=mD().factory,t=oe(),r=ge(),i=gu();function o(u,a){var s;if(t(u)||t(a)||a<0)return e(NaN);if(a===0)return n(u);return s=a*r(2),c;function c(l){var f;return t(l)?NaN:(f=l-u,.5*i(-f/s))}}return cp=o,cp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lp,P8;function _D(){if(P8)return lp;P8=1;var e=tn(),n=dD(),t=vD();return e(n,"factory",t),lp=n,lp}var gD=_D();const sw=jn(gD);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fp,F8;function bD(){if(F8)return fp;F8=1;var e=Ne(),n=Me(),t=ge(),r=bu(),i=ke(),o=oe();function u(a,s,c){var l,f,d;return o(a)||o(s)||o(c)||c<0?NaN:c===0?a===s?i:0:(l=n(c,2),f=1/t(l*r),d=-1/(2*l),f*e(d*n(a-s,2)))}return fp=u,fp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dp,D8;function yD(){if(D8)return dp;D8=1;var e=ke(),n=oe();function t(r,i){return n(r)||n(i)?NaN:r===i?e:0}return dp=t,dp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pp,x8;function ED(){if(x8)return pp;x8=1;var e=Sn(),n=ke(),t=oe();function r(i){if(t(i))return e(NaN);return o;function o(u){return t(u)?NaN:u===i?n:0}}return pp=r,pp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hp,B8;function wD(){if(B8)return hp;B8=1;var e=tn(),n=yD(),t=ED();return e(n,"factory",t),hp=n,hp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mp,H8;function SD(){if(H8)return mp;H8=1;var e=Sn(),n=wD().factory,t=oe(),r=ge(),i=Ne(),o=Me(),u=bu();function a(s,c){var l,f,d;if(t(s)||t(c)||c<0)return e(NaN);if(c===0)return n(s);return l=o(c,2),f=1/r(l*u),d=-1/(2*l),h;function h(p){return t(p)?NaN:f*i(d*o(p-s,2))}}return mp=a,mp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vp,U8;function $D(){if(U8)return vp;U8=1;var e=tn(),n=bD(),t=SD();return e(n,"factory",t),vp=n,vp}var AD=$D();const cw=jn(AD);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _p,G8;function LD(){if(G8)return _p;G8=1;function e(n){var t,r,i;return n===0?-.0005087819496582806:(n<0?t=-n:t=n,t<=1?(r=-.0005087819496582806+n*(-.008368748197417368+n*(.03348066254097446+n*(-.012692614766297404+n*(-.03656379714117627+n*(.02198786811111689+n*(.008226878746769157+n*(-.005387729650712429+n*(0+n*0)))))))),i=1+n*(-.9700050433032906+n*(-1.5657455823417585+n*(1.5622155839842302+n*(.662328840472003+n*(-.7122890234154284+n*(-.05273963823400997+n*(.07952836873415717+n*(-.0023339375937419+n*.0008862163904564247))))))))):(n=1/n,r=0+n*(0+n*(-.005387729650712429+n*(.008226878746769157+n*(.02198786811111689+n*(-.03656379714117627+n*(-.012692614766297404+n*(.03348066254097446+n*(-.008368748197417368+n*-.0005087819496582806)))))))),i=.0008862163904564247+n*(-.0023339375937419+n*(.07952836873415717+n*(-.05273963823400997+n*(-.7122890234154284+n*(.662328840472003+n*(1.5622155839842302+n*(-1.5657455823417585+n*(-.9700050433032906+n*1))))))))),r/i)}return _p=e,_p}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gp,V8;function ID(){if(V8)return gp;V8=1;function e(n){var t,r,i;return n===0?-.20243350835593876:(n<0?t=-n:t=n,t<=1?(r=-.20243350835593876+n*(.10526468069939171+n*(8.3705032834312+n*(17.644729840837403+n*(-18.851064805871424+n*(-44.6382324441787+n*(17.445385985570866+n*(21.12946554483405+n*-3.6719225470772936))))))),i=1+n*(6.242641248542475+n*(3.971343795334387+n*(-28.66081804998+n*(-20.14326346804852+n*(48.560921310873994+n*(10.826866735546016+n*(-22.643693341313973+n*1.7211476576120028)))))))):(n=1/n,r=-3.6719225470772936+n*(21.12946554483405+n*(17.445385985570866+n*(-44.6382324441787+n*(-18.851064805871424+n*(17.644729840837403+n*(8.3705032834312+n*(.10526468069939171+n*-.20243350835593876))))))),i=1.7211476576120028+n*(-22.643693341313973+n*(10.826866735546016+n*(48.560921310873994+n*(-20.14326346804852+n*(-28.66081804998+n*(3.971343795334387+n*(6.242641248542475+n*1)))))))),r/i)}return gp=e,gp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bp,W8;function CD(){if(W8)return bp;W8=1;function e(n){var t,r,i;return n===0?-.1311027816799519:(n<0?t=-n:t=n,t<=1?(r=-.1311027816799519+n*(-.16379404719331705+n*(.11703015634199525+n*(.38707973897260434+n*(.3377855389120359+n*(.14286953440815717+n*(.029015791000532906+n*(.0021455899538880526+n*(-6794655751811263e-22+n*(28522533178221704e-24+n*-681149956853777e-24))))))))),i=1+n*(3.4662540724256723+n*(5.381683457070069+n*(4.778465929458438+n*(2.5930192162362027+n*(.848854343457902+n*(.15226433829533179+n*(.011059242293464892+n*(0+n*(0+n*0)))))))))):(n=1/n,r=-681149956853777e-24+n*(28522533178221704e-24+n*(-6794655751811263e-22+n*(.0021455899538880526+n*(.029015791000532906+n*(.14286953440815717+n*(.3377855389120359+n*(.38707973897260434+n*(.11703015634199525+n*(-.16379404719331705+n*-.1311027816799519))))))))),i=0+n*(0+n*(0+n*(.011059242293464892+n*(.15226433829533179+n*(.848854343457902+n*(2.5930192162362027+n*(4.778465929458438+n*(5.381683457070069+n*(3.4662540724256723+n*1)))))))))),r/i)}return bp=e,bp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yp,j8;function TD(){if(j8)return yp;j8=1;function e(n){var t,r,i;return n===0?-.0350353787183178:(n<0?t=-n:t=n,t<=1?(r=-.0350353787183178+n*(-.0022242652921344794+n*(.018557330651423107+n*(.009508047013259196+n*(.0018712349281955923+n*(.00015754461742496055+n*(460469890584318e-20+n*(-2304047769118826e-25+n*26633922742578204e-28))))))),i=1+n*(1.3653349817554064+n*(.7620591645536234+n*(.22009110576413124+n*(.03415891436709477+n*(.00263861676657016+n*(7646752923027944e-20+n*(0+n*0)))))))):(n=1/n,r=26633922742578204e-28+n*(-2304047769118826e-25+n*(460469890584318e-20+n*(.00015754461742496055+n*(.0018712349281955923+n*(.009508047013259196+n*(.018557330651423107+n*(-.0022242652921344794+n*-.0350353787183178))))))),i=0+n*(0+n*(7646752923027944e-20+n*(.00263861676657016+n*(.03415891436709477+n*(.22009110576413124+n*(.7620591645536234+n*(1.3653349817554064+n*1)))))))),r/i)}return yp=e,yp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ep,X8;function RD(){if(X8)return Ep;X8=1;function e(n){var t,r,i;return n===0?-.016743100507663373:(n<0?t=-n:t=n,t<=1?(r=-.016743100507663373+n*(-.0011295143874558028+n*(.001056288621524929+n*(.00020938631748758808+n*(14962478375834237e-21+n*(44969678992770644e-23+n*(4625961635228786e-24+n*(-2811287356288318e-29+n*9905570997331033e-32))))))),i=1+n*(.5914293448864175+n*(.1381518657490833+n*(.016074608709367652+n*(.0009640118070051656+n*(27533547476472603e-21+n*(282243172016108e-21+n*(0+n*0)))))))):(n=1/n,r=9905570997331033e-32+n*(-2811287356288318e-29+n*(4625961635228786e-24+n*(44969678992770644e-23+n*(14962478375834237e-21+n*(.00020938631748758808+n*(.001056288621524929+n*(-.0011295143874558028+n*-.016743100507663373))))))),i=0+n*(0+n*(282243172016108e-21+n*(27533547476472603e-21+n*(.0009640118070051656+n*(.016074608709367652+n*(.1381518657490833+n*(.5914293448864175+n*1)))))))),r/i)}return Ep=e,Ep}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var wp,Y8;function kD(){if(Y8)return wp;Y8=1;var e=oe(),n=ge(),t=we(),r=ke(),i=rn(),o=LD(),u=ID(),a=CD(),s=TD(),c=RD(),l=.08913147449493408,f=2.249481201171875,d=.807220458984375,h=.9399557113647461,p=.9836282730102539;function v(m){var g,_,y,b,E,A;return e(m)?NaN:m===1?r:m===-1?i:m===0?m:m>1||m<-1?NaN:(m<0?(g=-1,_=-m):(g=1,_=m),b=1-_,_<=.5?(E=_*(_+10),A=o(_),g*(E*l+E*A)):b>=.25?(E=n(-2*t(b)),b-=.25,A=u(b),g*(E/(f+A))):(b=n(-t(b)),b<3?(y=b-1.125,A=a(y),g*(d*b+A*b)):b<6?(y=b-3,A=s(y),g*(h*b+A*b)):(y=b-6,A=c(y),g*(p*b+A*b))))}return wp=v,wp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sp,K8;function lw(){if(K8)return Sp;K8=1;var e=kD();return Sp=e,Sp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $p,J8;function ND(){if(J8)return $p;J8=1;var e=lw(),n=oe(),t=ge();function r(i,o,u){var a,s;return n(o)||n(u)||n(i)||u<0||i<0||i>1?NaN:u===0?o:(a=o,s=u*t(2),a+s*e(2*i-1))}return $p=r,$p}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ap,z8;function MD(){if(z8)return Ap;z8=1;var e=oe();function n(t,r){return e(t)||t<0||t>1?NaN:r}return Ap=n,Ap}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lp,Z8;function OD(){if(Z8)return Lp;Z8=1;var e=Sn(),n=oe();function t(r){if(n(r))return e(NaN);return i;function i(o){return n(o)||o<0||o>1?NaN:r}}return Lp=t,Lp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ip,Q8;function qD(){if(Q8)return Ip;Q8=1;var e=tn(),n=MD(),t=OD();return e(n,"factory",t),Ip=n,Ip}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cp,e9;function PD(){if(e9)return Cp;e9=1;var e=Sn(),n=qD().factory,t=lw(),r=oe(),i=ge();function o(u,a){var s,c;if(r(u)||r(a)||a<0)return e(NaN);return a===0&&n(u),s=u,c=a*i(2),l;function l(f){return r(f)||f<0||f>1?NaN:s+c*t(2*f-1)}}return Cp=o,Cp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tp,n9;function FD(){if(n9)return Tp;n9=1;var e=tn(),n=ND(),t=PD();return e(n,"factory",t),Tp=n,Tp}var DD=FD();const xD=jn(DD);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rp,t9;function BD(){if(t9)return Rp;t9=1;var e=Li(),n=oe(),t=Me();function r(i,o){var u,a,s;return n(i)||n(o)||o<=0?NaN:i===0?.5:(u=t(i,2),o>2*u?(s=u/(o+u),a=e(s,.5,o/2,!0,!0)/2):(s=o/(o+u),a=e(s,o/2,.5,!0,!1)/2),i>0?1-a:a)}return Rp=r,Rp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kp,r9;function HD(){if(r9)return kp;r9=1;var e=Sn(),n=Li(),t=oe(),r=Me();function i(o){if(t(o)||o<=0)return e(NaN);return u;function u(a){var s,c,l;return t(a)?NaN:a===0?.5:(s=r(a,2),o>2*s?(l=s/(o+s),c=n(l,.5,o/2,!0,!0)/2):(l=o/(o+s),c=n(l,o/2,.5,!0,!1)/2),a>0?1-c:c)}}return kp=i,kp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Np,i9;function UD(){if(i9)return Np;i9=1;var e=tn(),n=BD(),t=HD();return e(n,"factory",t),Np=n,Np}var GD=UD();const fw=jn(GD);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mp,o9;function VD(){if(o9)return Mp;o9=1;var e=oe(),n=mu(),t=ge(),r=Me();function i(o,u){var a;return e(o)||e(u)||u<=0?NaN:(a=t(u)*n(u/2,.5),r(u/(u+r(o,2)),(1+u)/2)/a)}return Mp=i,Mp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Op,u9;function WD(){if(u9)return Op;u9=1;var e=Sn(),n=oe(),t=mu(),r=ge(),i=Me();function o(u){var a,s;if(n(u)||u<=0)return e(NaN);return s=r(u)*t(u/2,.5),a=(1+u)/2,c;function c(l){return n(l)?NaN:i(u/(u+i(l,2)),a)/s}}return Op=o,Op}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qp,a9;function jD(){if(a9)return qp;a9=1;var e=tn(),n=VD(),t=WD();return e(n,"factory",t),qp=n,qp}var XD=jD();const v2=jn(XD);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pp,s9;function YD(){if(s9)return Pp;s9=1;var e=m2(),n=oe(),t=wu(),r=ge();function i(o,u){var a,s;return n(u)||n(o)||u<=0||o<0||o>1?NaN:(a=o>.5?1-o:o,s=e(u/2,.5,2*a,1-2*a),t(o-.5)*r(u*s[1]/s[0]))}return Pp=i,Pp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fp,c9;function KD(){if(c9)return Fp;c9=1;var e=Sn(),n=m2(),t=oe(),r=wu(),i=ge();function o(u){if(t(u)||u<=0)return e(NaN);return a;function a(s){var c,l;return t(s)||s<0||s>1?NaN:(c=s>.5?1-s:s,l=n(u/2,.5,2*c,1-2*c),r(s-.5)*i(u*l[1]/l[0]))}}return Fp=o,Fp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dp,l9;function JD(){if(l9)return Dp;l9=1;var e=tn(),n=YD(),t=KD();return e(n,"factory",t),Dp=n,Dp}var zD=JD();const ZD=jn(zD),f9=1e-9,QD=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,dw=/^\s*([a-z][a-z-]*)\s*\((.*)\)\s*$/;function ex(e){const[n,t,r]=e;return n<r?n<=t&&t<=r?null:`requires lo <= peak <= hi, got lo=${n}, peak=${t}, hi=${r}`:`requires lo < hi, got lo=${n}, hi=${r}`}function nx(e){const[n,t]=e;return n<t?null:`requires lo < hi, got lo=${n}, hi=${t}`}function tx(e){const[n,t]=e;return n>0&&t>0?null:`requires a > 0 and b > 0, got a=${n}, b=${t}`}function d9(e){const n=e[1];return n>0?null:`requires sigma > 0, got sigma=${n}`}function rx(e){const[n,t]=e;return 0<n&&n<t?null:`requires 0 < lo < hi, got lo=${n}, hi=${t}`}function p9(e){const[,n,t]=e;return n<=0?`requires sigma > 0, got sigma=${n}`:t<=0?`requires df > 0, got df=${t}`:null}function h9(e,n){const t=n-e;return{cdf:r=>r<=e?0:r>=n?1:(r-e)/t,ppf:r=>e+r*t,pdf:r=>r>=e&&r<=n?1/t:0}}function ix(e,n,t){const r=t-e,i=(n-e)/r;return{cdf:o=>o<=e?0:o>=t?1:o<=n?(o-e)*(o-e)/(r*(n-e)):1-(t-o)*(t-o)/(r*(t-n)),ppf:o=>o<i?e+Math.sqrt(o*r*(n-e)):t-Math.sqrt((1-o)*r*(t-n)),pdf:o=>o<e||o>t?0:o===n?2/r:o<n?2*(o-e)/(r*(n-e)):2*(t-o)/(r*(t-n))}}function m9(e,n){return{cdf:t=>sw(t,e,n),ppf:t=>xD(t,e,n),pdf:t=>cw(t,e,n)}}function uh(e,n,t){return{cdf:r=>fw((r-e)/n,t),ppf:r=>e+n*ZD(r,t),pdf:r=>v2((r-e)/n,t)/n}}function ox(e,n){return{cdf:t=>oh(t,e,n),ppf:t=>fD(t,e,n),pdf:t=>WP(t,e,n)}}const ux=1e-10,ax=20,sx=1e-300,v9=24,cx=60,lx=.001;function ah(e,n,t,r,i){return(n-e)/6*(t+4*r+i)}function sh(e,n,t,r,i,o,u,a){const s=(n+t)/2,c=(n+s)/2,l=(s+t)/2,f=e(c),d=e(l),h=ah(n,s,r,f,i),p=ah(s,t,i,d,o),v=h+p,m=ux*Math.max(Math.abs(v),sx);return a>=ax||Math.abs(v-u)<=15*m?v+(v-u)/15:sh(e,n,s,r,f,i,h,a+1)+sh(e,s,t,i,d,o,p,a+1)}function fx(e,n,t){if(!(t>n))return 0;const r=(n+t)/2,i=e(n),o=e(r),u=e(t);return sh(e,n,t,i,o,u,ah(n,t,i,o,u),0)}const dx=(()=>{const e=[0];for(let n=v9;n>=1;n--)e.push(.5*2**-n);for(let n=v9;n>=0;n--)e.push(1-.5*2**-n);return e})();function px(e){return pw(e,dx)}function pw(e,n){let t=0;for(let r=0;r<n.length-1;r++)t+=fx(e,n[r],n[r+1]);return t}function hx(e,n,t,r){const i=[n];for(let o=r;o>=1;o--){const u=t*2**-o;u>n&&i.push(u)}return i.push(t),pw(e,i)}function mx(e,n,t){const r=Qr(e,n),i=Qr(e,t)-r;return i>0?i*px(o=>Math.min(Math.max(e.ppf(r+o*i),n),t)):0}function _9(e,n,t,r){return r>t?e*(r**3-t**3)/3+n*(r**2-t**2)/2:0}function vx(e,n,t){const[r,i]=e,o=Math.max(r,n),u=Math.min(i,t);return u>o?(u*u-o*o)/(2*(i-r)):0}function _x(e,n,t){const[r,i,o]=e,u=o-r,a=i-r,s=o-i;let c=0;if(a>0){const l=2/(u*a);c+=_9(l,-r*l,Math.max(r,n),Math.min(i,t))}if(s>0){const l=2/(u*s);c+=_9(-l,o*l,Math.max(i,n),Math.min(o,t))}return c}function gx(e,n,t){const[r,i]=e,o=Math.min(Math.max(n,0),1),u=Math.min(Math.max(t,0),1);return u>o?r/(r+i)*(oh(u,r+1,i)-oh(o,r+1,i)):0}function g9(e){return Number.isFinite(e)?cw(e,0,1):0}function Co(e){return e===-1/0?0:e===1/0?1:sw(e,0,1)}function bx(e,n,t){const[r,i]=e,o=(n-r)/i,u=(t-r)/i;return r*(Co(u)-Co(o))-i*(g9(u)-g9(o))}function yx(e,n,t){const[r,i]=e,o=u=>Number.isFinite(u)?(u-r)/i-i:u;return Math.exp(r+i*i/2)*(Co(o(t))-Co(o(n)))}function Ex(e,n,t){const[r,i]=e,o=Math.log(r),u=Math.log(i),a=Math.max(o,n),s=Math.min(u,t);return s>a?(Math.exp(s)-Math.exp(a))/(u-o):0}function xp(e,n){return-(n+e*e)*v2(e,n)/(n-1)}function wx(e,n,t){if(!Number.isFinite(e)||!Number.isFinite(n)){if(t<=1)return!Number.isFinite(e)&&!Number.isFinite(n)?NaN:Number.isFinite(e)?1/0:-1/0;const r=i=>Number.isFinite(i)?xp(i,t):0;return r(n)-r(e)}return Math.abs(t-1)<lx?mx(uh(0,1,t),e,n):xp(n,t)-xp(e,t)}function Sx(e,n,t){const[r,i,o]=e,u=(n-r)/i,a=(t-r)/i,s=c=>c===-1/0?0:c===1/0?1:fw(c,o);return r*(s(a)-s(u))+i*wx(u,a,o)}function $x(e,n,t){const[r,i,o]=e;if(t===1/0)return 1/0;const u=v2(0,o)/i,a=c=>{const l=(c-r)/i;return u*(1+l*l/o)**(-(o+1)/2)},s=n===-1/0?0:Math.exp(n-t);return Math.exp(t)*hx(c=>c<=0?0:a(t+Math.log(c)),s,1,cx)}const gt={tri:{signature:"tri(lo, peak, hi)",note:"triangular",nParams:3,check:ex,build:e=>({latent:ix(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:_x},uniform:{signature:"uniform(lo, hi)",note:"uniform",nParams:2,check:nx,build:e=>({latent:h9(e[0],e[1]),logX:!1}),partialFirstMoment:vx},beta:{signature:"beta(a, b)",note:"Beta on [0, 1]; a, b > 0",nParams:2,check:tx,build:e=>({latent:ox(e[0],e[1]),logX:!1}),partialFirstMoment:gx},normal:{signature:"normal(mu, sigma)",note:"normal; sigma > 0",nParams:2,check:d9,build:e=>({latent:m9(e[0],e[1]),logX:!1}),partialFirstMoment:bx},lognormal:{signature:"lognormal(mu, sigma)",note:"mu/sigma are mean/sd of log(X); sigma > 0",nParams:2,check:d9,build:e=>({latent:m9(e[0],e[1]),logX:!0}),partialFirstMoment:yx},loguniform:{signature:"loguniform(lo, hi)",note:"uniform in log space; 0 < lo < hi",nParams:2,check:rx,build:e=>({latent:h9(Math.log(e[0]),Math.log(e[1])),logX:!0}),partialFirstMoment:Ex},t:{signature:"t(mu, sigma, df)",note:"location-scale Student-t; sigma > 0, df > 0",nParams:3,check:p9,build:e=>({latent:uh(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:Sx},logt:{signature:"logt(mu, sigma, df)",note:"exp of location-scale Student-t; log-space params like lognormal",nParams:3,check:p9,build:e=>({latent:uh(e[0],e[1],e[2]),logX:!0}),partialFirstMoment:$x}},Ax=["normal","lognormal","t","logt"];function Lx(e){const[n,t]=e;return n<t?null:`requires lo < hi in the truncation window, got lo=${n}, hi=${t}`}function Ix(e,n){const t=n.signature.split("(",2)[1].slice(0,-1);return{signature:`${e}-trunc(${t}, lo, hi)`,note:`${n.note}; explicitly truncated to [lo, hi]`,nParams:n.nParams+2,check:r=>n.check(r.slice(0,n.nParams))??Lx(r.slice(n.nParams)),build:r=>n.build(r),partialFirstMoment:n.partialFirstMoment,hasTruncWindow:!0}}for(const e of Ax)gt[`${e}-trunc`]=Ix(e,gt[e]);function Cx(e){return dw.test(e)}function hw(e){const n=dw.exec(e);if(!n)throw new Error(`malformed family spec ${JSON.stringify(e)}: expected "family(num, num, ...)"`);const t=n[1],r=n[2],i=gt[t];if(i===void 0)throw new Error(`unknown distribution family ${JSON.stringify(t)}; available: `+Object.values(gt).map(s=>s.signature).join(", "));const o=r.split(",").map(s=>s.trim());for(const s of o)if(!QD.test(s))throw new Error(`family spec ${JSON.stringify(e.trim())}: bad numeric argument ${JSON.stringify(s)}`);const u=o.map(Number);if(u.length!==i.nParams)throw new Error(`${t} takes ${i.nParams} arguments as ${i.signature}, got ${u.length}`);const a=i.check(u);if(a)throw new Error(`${e.trim()}: ${i.signature} ${a}`);return i.hasTruncWindow?{family:t,params:u.slice(0,-2),text:e.trim(),truncWindow:[u[u.length-2],u[u.length-1]]}:{family:t,params:u,text:e.trim(),truncWindow:null}}function Qr(e,n){return n===-1/0?0:n===1/0?1:e.cdf(n)}class _2{constructor(n,t,r,i,o,u,a,s,c){this.spec=n,this.latent=t,this.logX=r,this.cdfLo=i,this.mass=o,this.xLo=u,this.xHi=a,this.yLo=s,this.yHi=c}inverseCdf(n){const t=this.latent.ppf(this.cdfLo+n*this.mass),r=this.logX?Math.exp(t):t;return Math.min(Math.max(r,this.xLo),this.xHi)}cdf(n){if(n<=this.xLo)return 0;if(n>=this.xHi)return 1;if(this.logX&&n<=0)return 0;const t=this.logX?Math.log(n):n;return(Qr(this.latent,t)-this.cdfLo)/this.mass}mean(){const n=gt[this.spec.family];if(n===void 0)throw new Error(`unknown distribution family ${JSON.stringify(this.spec.family)}`);const r=n.partialFirstMoment(this.spec.params,this.yLo,this.yHi)/this.mass;return Number.isFinite(r)?r:null}pdf(n){return n<this.xLo||n>this.xHi?0:this.logX?n<=0?0:this.latent.pdf(Math.log(n))/n/this.mass:this.latent.pdf(n)/this.mass}}function g2(e,n,t){const r=gt[e.family];if(r===void 0)throw new Error(`unknown distribution family ${JSON.stringify(e.family)}`);const{latent:i,logX:o}=r.build(e.params);let u=n===null?-1/0:n,a=t===null?1/0:t;e.truncWindow!==null&&(u=Math.max(u,e.truncWindow[0]),a=Math.min(a,e.truncWindow[1]));let s,c;o?(s=u>0?Math.log(u):-1/0,c=a>0?Math.log(a):-1/0):(s=u,c=a);const l=Qr(i,s),d=Qr(i,c)-l;if(d<f9){let h=`the variable's range [${n}, ${t}]`;throw e.truncWindow!==null&&(h+=` ∩ the spec's truncation window [${e.truncWindow[0]}, ${e.truncWindow[1]}]`),new Error(`family spec ${JSON.stringify(e.text)}: essentially no probability mass in ${h} (mass ${d.toExponential(2)} < ${f9})`)}return new _2(e,i,o,l,d,u,a,s,c)}const To="pointmass",Tx="[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?",Rx=new RegExp(`^\\s*${To}\\s*\\(\\s*(${Tx})\\s*\\)\\s*$`),kx=new RegExp(`^\\s*${To}\\b`);function mw(e){const n=Rx.exec(e);if(n===null)throw new Error(`malformed ${To} spec ${JSON.stringify(e)}: expected "${To}(num)"`);return Number(n[1])}function b2(e){return kx.test(e)?mw(e):null}function vw(e){const n=mw(e);return[[n,1],[n,1]]}function Nx(e,n){let t=1/0,r=-1/0;for(const i of e){const{lo:o,hi:u}=n(i);t=Math.min(t,o),r=Math.max(r,u)}return{lo:t,hi:r}}function ch(e){const n=.254829592,t=-.284496736,r=1.421413741,i=-1.453152027,o=1.061405429,u=.3275911,a=e<0?-1:1,s=Math.abs(e)/Math.SQRT2,c=1/(1+u*s),l=1-((((o*c+i)*c+r)*c+t)*c+n)*c*Math.exp(-s*s);return .5*(1+a*l)}function Ro(){const e=Math.random(),n=Math.random(),t=Math.sqrt(-2*Math.log(e)),r=2*Math.PI*n;return[t*Math.cos(r),t*Math.sin(r)]}const Ci=1e-15;function Mx(e,n){const t=e.length;if(t<2)throw new Error(`buildFromXsHs: need at least 2 breakpoints, got ${t}`);let r=0;for(let u=0;u<t-1;u++)r+=(e[u+1]-e[u])*(n[u]+n[u+1])/2;if(r<=0)throw new Error("buildPieceLinear: distribution has zero or negative area");const i=new Float64Array(t);for(let u=0;u<t;u++)i[u]=n[u]/r;const o=new Float64Array(t);o[0]=0;for(let u=0;u<t-1;u++)o[u+1]=o[u]+(e[u+1]-e[u])*(i[u]+i[u+1])/2;return o[t-1]=1,{xs:new Float64Array(e),fs:i,Fs:o}}function _w(e){const{pairs:n}=e,t=n[0][0];if(n[n.length-1][0]-t<Ci)return{xs:new Float64Array([t,t]),fs:new Float64Array([1,1]),Fs:new Float64Array([0,1])};const i=n.map(u=>u[0]),o=n.map(u=>u[1]);return Mx(i,o)}function ei(e,n){if(e.kind==="family"){if(n===void 0)throw new Error(`family spec ${JSON.stringify(e.spec.text)} needs the svar's declared range for implicit truncation, but no paramRange was provided (thread paramRanges through the caller)`);return g2(e.spec,n.lo,n.hi)}return _w(e)}function Yt(e,n){return n instanceof _2?n.inverseCdf(e):qx(e,n)}const Ox=1e-12;function qx(e,n){const{xs:t,fs:r,Fs:i}=n,o=t.length-1;if(o<=0||e<=0)return t[0];if(e>=1)return t[o];let u=0,a=o;for(;u<a-1;){const h=u+a>>1;i[h]<=e?u=h:a=h}const s=u,c=t[s+1]-t[s];if(c<Ci)return t[s];const l=e-i[s],f=(r[s+1]-r[s])/c;let d;if(Math.abs(f)<Ox)d=l/r[s];else{const h=r[s]*r[s]+2*f*l;d=(-r[s]+Math.sqrt(Math.max(0,h)))/f}return t[s]+d}function Px(e,n){if(e.kind==="family"){const r=(o,u)=>n!==void 0&&(n.lo===null||o>=n.lo)&&(n.hi===null||u<=n.hi),i=e.spec.params;return e.spec.family==="tri"&&r(i[0],i[2])?{kind:"triangular",lo:i[0],peak:i[1],hi:i[2]}:e.spec.family==="uniform"&&r(i[0],i[1])?{kind:"uniform",lo:i[0],hi:i[1]}:null}const{pairs:t}=e;if(t.length===2){const[r,i]=t[0],[o,u]=t[1];return i===u&&i>0?{kind:"uniform",lo:r,hi:o}:i===0&&u>0?{kind:"triangular",lo:r,peak:o,hi:o}:i>0&&u===0?{kind:"triangular",lo:r,peak:r,hi:o}:null}if(t.length===3){const[r,i]=t[0],[o,u]=t[1],[a,s]=t[2];if(i===0&&s===0&&u>0)return{kind:"triangular",lo:r,peak:o,hi:a}}return null}function Fx(e){const n=e.length;let t=0,r=0;for(const a of e){let s=1,c=1;for(const l of a){const f=1-l.hi,d=1-l.lo;if(l.kind==="triangular"){const h=1-l.peak;s*=(f+d+h)/3,c*=(f*f+d*d+h*h+f*d+f*h+d*h)/6}else s*=(f+d)/2,c*=(f*f+f*d+d*d)/3}t+=s,r+=c}const i=t/n,u=r/n-i*i;return{mean:i,sigma:Math.sqrt(Math.max(0,u))}}function Dx(e,n,t){if(n!==DL)return null;const r=[];for(const i of e){const o=[];for(const[u,a]of i.entries()){const s=Px(a,t==null?void 0:t[u]);if(s===null)return null;o.push(s)}r.push(o)}return Fx(r)}function lh(e,n,t,r){var s;const{trialCount:i,nParams:o,perTrialLoadings:u}=gw(e,n,t),a=Array.from({length:o},()=>new Float64Array(r));for(let c=0;c<r;c++){const l=Math.floor(Math.random()*i),f=e[l],{loadingMatrix:d,residualSds:h}=u[l],p=((s=d[0])==null?void 0:s.length)??0;if(p===0)for(let v=0;v<o;v++)a[v][c]=Yt(Math.random(),f[v]);else{const v=[];for(let m=0;m<p;m++)v.push(Ro()[0]);for(let m=0;m<o;m++){const g=Ro()[0],_=d[m];let y=h[m]*g;for(let b=0;b<p;b++)y+=_[b]*v[b];a[m][c]=Yt(ch(y),f[m])}}}return a}function gw(e,n,t){const r=e.length;if(r===0)throw new Error("sampleCopulaMatrix: need at least one trial");const i=t.length;if(e.some(u=>u.length!==i))throw new Error(`sampleCopulaMatrix: trials disagree with params on parameter count (${i} params)`);if(n.length!==r)throw new Error(`sampleCopulaMatrix: ${n.length} per-trial lloads specs for ${r} trials`);const o=n.map(u=>Xk(u,t));return{trialCount:r,nParams:i,perTrialLoadings:o}}function xx(e,n,t,r){var l;const{trialCount:i,nParams:o,perTrialLoadings:u}=gw(e,n,t),a=Array.from({length:o},()=>new Float64Array(r)),c=u.some(({loadingMatrix:f})=>{var d;return(((d=f[0])==null?void 0:d.length)??0)>0})?Array.from({length:o},()=>new Float64Array(r)):a;for(let f=0;f<r;f++){const d=Math.floor(Math.random()*i),h=e[d],{loadingMatrix:p,residualSds:v}=u[d],m=((l=p[0])==null?void 0:l.length)??0;if(m===0)for(let g=0;g<o;g++){const _=Yt(Math.random(),h[g]);a[g][f]=_,c[g][f]=_}else{const g=[];for(let _=0;_<m;_++)g.push(Ro()[0]);for(let _=0;_<o;_++){const y=Ro()[0];a[_][f]=Yt(ch(y),h[_]);const b=p[_];let E=v[_]*y;for(let A=0;A<m;A++)E+=b[A]*g[A];c[_][f]=Yt(ch(E),h[_])}}}return{independent:a,joint:c}}function Ti(e,n){if(e.length===0)throw new Error("combineSampleColumns: need at least one sampled column");const t=e[0].length,r=new Float64Array(t),i=new Array(e.length);for(let o=0;o<t;o++){for(let u=0;u<e.length;u++)i[u]=e[u][o];r[o]=n(i)}return r}function Bx(e){if(typeof e=="string")return b2(e)!==null?{kind:"pairs",pairs:vw(e)}:{kind:"family",spec:hw(e)};if(!e||e.length===0)throw new Error("sampleValueToSpec: no sample value present (gate on sampleValueHasData to tolerate absence)");return{kind:"pairs",pairs:e}}const Hx=/\(\s*([\d.eE+-]+)\s+([\d.eE+-]+)\s*\)/g;function y2(e,n){const t=e.trim(),r=b2(t);if(r!==null){if(!co(n,r))throw new Error(`pointmass value ${r} not in ${lo(n)}`);return{kind:"pairs",pairs:vw(t)}}if(Cx(t)){const a=hw(t);return g2(a,n.lo,n.hi),{kind:"family",spec:a}}if(!t.includes("("))throw new Error(`expected a family spec "name(num, ...)" or PWL pairs "(x y) ..." (pointmass(num) is also accepted), got "${t}"`);const i=[...t.matchAll(Hx)];if(i.length<2)throw new Error(`need at least 2 (x y) pairs, got ${i.length}`);const o=i.map(a=>[Number(a[1]),Number(a[2])]);let u=-1/0;for(let a=0;a<o.length;a++){const[s,c]=o[a];if(isNaN(s)||!co(n,s))throw new Error(`pair ${a+1} x=${s} not in ${lo(n)}`);if(isNaN(c)||c<0||c>1)throw new Error(`pair ${a+1} y=${c} not in [0, 1]`);if(s<u)throw new Error(`pair ${a+1} x=${s} not sorted (prev was ${u})`);u=s}return{kind:"pairs",pairs:o}}function bw(e){return typeof e=="string"?e.length>0:((e==null?void 0:e.length)??0)>0}function $u(e){const n=new Float64Array(e);n.sort();const t=n.length;let r=0;for(let i=0;i<t;i++)r+=n[i];return{mean:r/t,median:n[Math.floor(t*.5)],p5:n[Math.floor(t*.05)],p95:n[Math.floor(t*.95)],samples:n,count:t}}const Ux=32,Gx=4e6,qn=new Map;let to=0;function $t(e){return JSON.stringify(e,(n,t)=>{if(typeof t=="function"||typeof t=="symbol")throw new Error(`mc_memo key parts must be JSON-serializable data; got a ${typeof t}. Identify a combine function by a string tag / form id instead.`);return t})}function Au(e,n){const t=$t(e),r=qn.get(t);if(r!==void 0)return qn.delete(t),qn.set(t,r),r;const i=n();for(qn.set(t,i),to+=i.samples.length;(qn.size>Ux||to>Gx)&&qn.size>1;){const o=qn.keys().next().value;to-=qn.get(o).samples.length,qn.delete(o)}return i}function Vx(){qn.clear(),to=0}const Wx=256,Qn=new Map,ni=new Map;let yw=1;function Ew(e){const n=$t(e),t=Qn.get(n);if(t!==void 0)return Qn.delete(n),Qn.set(n,t),t;const r={token:`mcpool-${yw++}`,extraBlocks:0};for(Qn.set(n,r),ni.set(r.token,r);Qn.size>Wx;){const i=Qn.keys().next().value;ni.delete(Qn.get(i).token),Qn.delete(i)}return r}const jx=64,ko=new Map,et=new Map;function ww(e){const n=$t([...e].sort()),t=et.get(n);if(t!==void 0)return et.delete(n),et.set(n,t),t;const r=`mcpoolgroup-${yw++}`;for(et.set(n,r),ko.set(r,[...e]);et.size>jx;){const i=et.keys().next().value;ko.delete(et.get(i)),et.delete(i)}return r}function Xx(e){const n=ko.get(e);if(n!==void 0){let r=!1;for(const i of n){const o=ni.get(i);o!==void 0&&(o.extraBlocks+=1,r=!0)}return r}const t=ni.get(e);return t===void 0?!1:(t.extraBlocks+=1,!0)}function Yx(){Qn.clear(),ni.clear(),ko.clear(),et.clear()}const Kx=2048,rt=new Map;function b9(e){const n=$t(e),t=rt.get(n);if(t!==void 0)return rt.delete(n),rt.set(n,t),t}function y9(e){const n=$t(e);if(rt.has(n))throw new Error(`streaming mean entry already exists for key ${n}`);const t={n:0,mean:0,m2:0,blocksFolded:0};for(rt.set(n,t);rt.size>Kx;){const r=rt.keys().next().value;rt.delete(r)}return t}function Bp(e,n,t){let{n:r,mean:i,m2:o}=e;for(let u=0;u<n.length;u++){const a=n[u];if(!Number.isFinite(a))throw new Error(`streaming mean fold: non-finite sample value ${a} at block index ${u}`);r+=1;const s=a-i;i+=s/r,o+=s*(a-i)}e.n=r,e.mean=i,e.m2=o,e.blocksFolded=t}function E9(e){return Math.sqrt(e.m2/(e.n-1)/e.n)}function Jx(){rt.clear()}const Ri="Bounds are not available for this formula: no interval for it follows from bounds responses. Its point and distribution results are unaffected.",Lu="copula-matrix";function E2(e,n,t,r){const i=li(n,t);if(i.bounds&&!i.boundsTightness)throw new Error(`form ${e} has a bounds implementation but no boundsTightness — regenerate form_fns`);return{key:G7(e,n,t),params:i.params,typeHighlevel:i.typeHighlevel,point:i.point,bounds:i.bounds??null,boundsTightness:i.bounds?i.boundsTightness:null,closedFormMomentsShape:i.closedFormMomentsShape,sampleStage:i.sampleStage,barrierRegistry:r&&xL(r,t)}}function Hn(e,n,t){return n==="point"?{mode:n,trials:e.map(r=>r.point)}:n==="bounds"?{mode:n,trials:e.map(r=>r.bounds)}:{mode:n,ranges:t,trials:e.map(r=>{const i={};for(const[o,u]of Object.entries(r.sample))bw(u)&&(i[o]=Bx(u));return{specs:i,lloads:r.lloads??null}})}}class ti extends Error{constructor(n,t){super(`no trial has ${n} data for ${JSON.stringify(t)}`),this.missingParams=t,this.name="NoUsableTrialsError"}}function Un(e,n,t){switch(n.mode){case"point":{const i=tr(n.mode,n.trials,e.params,t.onIncompleteTrial).map(a=>e.params.map(s=>a[s])),o=i.map(a=>e.point(a));return{kind:"point",value:o.reduce((a,s)=>a+s,0)/o.length,perTrial:o,perTrialInputs:i}}case"bounds":{const r=tr(n.mode,n.trials,e.params,t.onIncompleteTrial),i=r.map(s=>e.params.map(c=>s[c])),o=e.bounds;if(!o)throw new Error(Ri);const{lo:u,hi:a}=Nx(i,o);return{kind:"bounds",lo:u,hi:a,tightness:e.boundsTightness??"loose",trialCount:r.length}}case"sample":return zx(e,n,t)}}function tr(e,n,t,r){const i=u=>e==="sample"?u.specs:u;if(n.length===0)throw r==="skip"?new ti(e,t):new Error(`record has no trials with ${e} data`);if(r==="error"){for(const[u,a]of n.entries()){const s=t.filter(c=>i(a)[c]===void 0);if(s.length>0)throw new Error(`Missing required ${e} input(s) for trial ${u+1}: ${JSON.stringify(s)}`)}return n}const o=n.filter(u=>t.every(a=>i(u)[a]!==void 0));if(o.length===0){const u=t.filter(a=>i(n[0])[a]===void 0);throw new ti(e,u)}return o}function zx(e,n,t){if(t.precomputed)return fh(t.precomputed.stats,t.precomputed.strengthKey);const r=t.mcIters;if(r===void 0)throw new Error("live sample evaluation requires opts.mcIters");if(e.params.length===0)throw new Error(`form ${e.key} has no params to Monte-Carlo over`);const i=tr(n.mode,n.trials,e.params,t.onIncompleteTrial);if(e.sampleStage!==void 0)return eB(e,e.sampleStage,n,i,r,t.mcItersPerClick);const{matrixContentParts:o,sampleFreshBlock:u}=Iu(n,i),a=No(Lu,o,r,t.mcItersPerClick,u),s=Au([...a.matrixKeyParts,"form",e.key],()=>$u(Ti(e.params.map(l=>a.matrices.joint.get(l)),e.point))),c=i.some(l=>yi(l.lloads))?null:Sw(e,n,i);return{kind:"mc",mean:s.mean,median:s.median,p5:s.p5,p95:s.p95,samples:s.samples,densityCurve:null,provenance:"live",mcIters:a.totalIters,barrierInnerIters:null,mcPoolToken:a.poolToken,trialCount:i.length,exact:c}}function fh(e,n){return{kind:"mc",mean:e.mean,median:e.median,p5:e.p5,p95:e.p95,samples:null,densityCurve:e.density_curve??null,provenance:"precomputed",mcIters:e.mc_iters,barrierInnerIters:null,mcPoolToken:null,trialCount:0,exact:n===gn&&e.sigma!=null?{mean:e.mean,sigma:e.sigma}:null}}function w2(e){return{independent:fh(e.independent,gn),joint:fh(e.joint,vt)}}function Sw(e,n,t){return Dx(t.map(r=>e.params.map(i=>r.specs[i])),e.closedFormMomentsShape,e.params.map(r=>n.ranges[r]))}function S2(e,n,t){if(n.mode!=="sample")throw new Error(`joint-dependence comparison requires sample inputs, got ${n.mode}`);if(t.precomputed)return w2(t.precomputed);const r=t.mcIters;if(r===void 0)throw new Error("live joint-dependence comparison requires opts.mcIters");if(e.params.length===0)throw new Error(`form ${e.key} has no params to Monte-Carlo over`);const i=tr(n.mode,n.trials,e.params,t.onIncompleteTrial);if(e.sampleStage!==void 0)throw new Error(`joint dependence is not supported for form ${e.key}: correlation across an E[·] aggregation barrier has no defined semantics`);const{matrixContentParts:o,sampleFreshBlock:u}=Iu(n,i),a=No(Lu,o,r,t.mcItersPerClick,u),s=(d,h)=>Au([...a.matrixKeyParts,...h,"form",e.key],()=>$u(Ti(e.params.map(p=>d.get(p)),e.point))),c=s(a.matrices.joint,[]),l=s(a.matrices.independent,["independent"]),f=(d,h)=>({kind:"mc",mean:d.mean,median:d.median,p5:d.p5,p95:d.p95,samples:d.samples,densityCurve:null,provenance:"live",mcIters:a.totalIters,barrierInnerIters:null,mcPoolToken:a.poolToken,trialCount:i.length,exact:h});return{independent:f(l,Sw(e,n,i)),joint:f(c,null)}}function Zx(e,n,t){if(n.mode!=="sample")throw new Error(`live sample MC key requires sample inputs, got ${n.mode}`);if(e.sampleStage!==void 0)throw new Error(`live sample MC key is not defined for E[·] barrier form ${e.key}`);const r=tr(n.mode,n.trials,e.params,t.onIncompleteTrial),{matrixContentParts:i}=Iu(n,r);return $w(Lu,i,t.mcIters,t.mcItersPerClick)}function Iu(e,n){const t=Object.keys(n[0].specs).filter(s=>n.every(c=>c.specs[s]!==void 0)).sort(),r=[t,n.map(s=>t.map(c=>s.specs[c])),t.map(s=>e.ranges[s]??null),n.map(s=>s.lloads)],i=()=>n.map(s=>t.map(c=>ei(s.specs[c],e.ranges[c]))),o=s=>new Map(t.map((c,l)=>[c,s[l]]));return{matrixContentParts:r,sampleFreshBlock:s=>{const c=xx(i(),n.map(d=>d.lloads),t,s),l=o(c.independent),f=c.joint===c.independent?l:o(c.joint);return{independent:l,joint:f}},sampleFreshJointBlock:s=>o(lh(i(),n.map(c=>c.lloads),t,s))}}function Qx(e,n,t){if(n.mode!=="sample")throw new Error(`streaming mean evaluation requires sample inputs, got ${n.mode}`);if(e.sampleStage!==void 0)throw new Error(`streaming mean evaluation of ${e.key} is not supported for formulas with E[·] aggregation barriers`);const r=t.mcIters;if(r===void 0)throw new Error("streaming mean evaluation requires opts.mcIters");if(e.params.length===0)throw new Error(`form ${e.key} has no params to Monte-Carlo over`);const i=tr(n.mode,n.trials,e.params,t.onIncompleteTrial),{matrixContentParts:o,sampleFreshJointBlock:u}=Iu(n,i),a=h=>Ti(e.params.map(p=>u(h).get(p)),e.point),s=t.mcItersPerClick;if(s===void 0){const h=["stream-mean",...o,r,"form",e.key];let p=b9(h);return p===void 0&&(p=y9(h),Bp(p,a(r),0)),{mean:p.mean,n:p.n,standardError:E9(p),mcPoolToken:null}}const c=["stream-mean-pool",...o,r,s],l=Ew(c),f=[...c,"form",e.key];let d=b9(f);return d===void 0?(d=y9(f),Bp(d,a(r+l.extraBlocks*s),l.extraBlocks)):l.extraBlocks>d.blocksFolded?Bp(d,a((l.extraBlocks-d.blocksFolded)*s),l.extraBlocks):l.extraBlocks<d.blocksFolded&&(d.blocksFolded=l.extraBlocks),{mean:d.mean,n:d.n,standardError:E9(d),mcPoolToken:l.token}}function $w(e,n,t,r){return[`${e}-pool`,...n,t,r]}function No(e,n,t,r,i){if(r===void 0){const a=[e,...n,t];return{matrixKeyParts:a,poolToken:null,extraBlocks:0,totalIters:t,matrices:iB(a,()=>i(t))}}const o=$w(e,n,t,r),u=Ew(o);return{matrixKeyParts:[...o,"blocks",u.extraBlocks],poolToken:u.token,extraBlocks:u.extraBlocks,totalIters:t+u.extraBlocks*r,matrices:uB(o,u.extraBlocks,t,r,i)}}function eB(e,n,t,r,i,o){if(r.some(E=>{var A;return(((A=E.lloads)==null?void 0:A.latents.length)??0)>0}))throw new Error(`joint dependence is not supported for form ${e.key}: correlation across an E[·] aggregation barrier has no defined semantics`);const u=e.barrierRegistry;if(u===void 0)throw new Error(`form ${e.key} contains an E[·] barrier but no barrier registry was provided — evaluating it without one would silently compute per-draw (pre-E) semantics`);if(e.closedFormMomentsShape!==void 0)throw new Error(`form ${e.key} contains an E[·] barrier yet carries closed-form-moments shape "${e.closedFormMomentsShape}" — codegen must suppress the tag for barrier forms, since the exact-moments path would override the barrier-aware mean`);const a=n.params.filter(E=>E.barrier);for(const E of a)if(u[E.name]===void 0)throw new Error(`form ${e.key}: barrier ${E.name} is not in the barrier registry`);const s=[...new Set(Object.values(u).flatMap(E=>E.params))].sort(),c=[],l=[],f=[],d=[];for(const E of r){const A=s.filter(T=>E.specs[T]!==void 0),L=[A,A.map(T=>E.specs[T]),A.map(T=>t.ranges[T]??null)],R=No("barrier-inner-matrix",L,i,o,T=>{const $=A.map(S=>ei(E.specs[S],t.ranges[S])),w=lh([$],[null],A,T);return w9(new Map(A.map((S,I)=>[S,w[I]])))});R.poolToken!==null&&c.push(R.poolToken),l.push(R.extraBlocks),f.push(R.totalIters),d.push(a.map(T=>nB(R.matrixKeyParts,R.matrices.joint,T.name,u[T.name])))}const h=Object.keys(r[0].specs).filter(E=>r.every(A=>A.specs[E]!==void 0)).sort(),p=a.map(E=>E.name),v=[h,r.map(E=>h.map(A=>E.specs[A])),h.map(E=>t.ranges[E]??null),"barriers",p,i,o??null,l,d],g=No(Lu,v,i,o,E=>{const A=[...h,...p],L=r.map(($,w)=>[...h.map(S=>ei($.specs[S],t.ranges[S])),...d[w].map(S=>_w({pairs:[[S,1],[S,1]]}))]),R=lh(L,r.map(()=>null),A,E),T=new Map(A.map(($,w)=>[$,R[w]]));if(T.size!==A.length)throw new Error(`barrier key collides with a svar column name (${JSON.stringify(A)})`);return w9(T)}),_=n.params.map(E=>{const A=g.matrices.joint.get(E.name);if(A===void 0)throw new Error(`form ${e.key}: no sampled column for sample-stage param ${E.name}`);return A}),y=Au([...g.matrixKeyParts,"form",e.key],()=>$u(Ti(_,n.point))),b=g.poolToken===null?null:ww([g.poolToken,...c]);return{kind:"mc",mean:y.mean,median:y.median,p5:y.p5,p95:y.p95,samples:y.samples,densityCurve:null,provenance:"live",mcIters:g.totalIters,barrierInnerIters:Math.min(...f),mcPoolToken:b,trialCount:r.length,exact:null}}function nB(e,n,t,r){const i=r.cparamBindingKey===void 0?[...e,"barrier",t]:[...e,"barrier",t,r.cparamBindingKey];return Au(i,()=>{const u=r.params.map(d=>{const h=n.get(d);if(h===void 0)throw new Error(`barrier ${t}: trial has no inner sample column for leaf ${d}`);return h}),a=Ti(u,r.point);for(const d of a)if(!Number.isFinite(d))throw new Error(`barrier ${t}: non-finite operand draw (${d})`);const s=$u(a);if(!Number.isFinite(s.mean))throw new Error(`barrier ${t}: non-finite mean (${s.mean})`);const c=a.length;let l=0;for(const d of a)l+=(d-s.mean)**2;const f=Math.sqrt(l/c/c)/Math.abs(s.mean);return console.debug(`[E-barrier] ${t}: n=${c} mean=${s.mean} relSE=${f}`),s}).mean}const tB=8,rB=6e6,Pn=new Map;let ro=0;function w9(e){return{independent:e,joint:e}}function S9(e){let n=0;const t=new Set;for(const r of[e.independent,e.joint])for(const i of r.values())t.has(i)||(t.add(i),n+=i.length);return n}function dh(e){const n=Pn.get(e);return n!==void 0&&(Pn.delete(e),Pn.set(e,n)),n}function ph(e,n){for(Pn.set(e,n),ro+=S9(n);(Pn.size>tB||ro>rB)&&Pn.size>1;){const t=Pn.keys().next().value;ro-=S9(Pn.get(t)),Pn.delete(t)}return n}function iB(e,n){const t=$t(e);return dh(t)??ph(t,n())}function $9(e,n){const t=new Map;for(const[r,i]of e){const o=n.get(r);if(o===void 0)throw new Error(`concatSampleMatrices: fresh block lacks column for svar ${r}`);const u=new Float64Array(i.length+o.length);u.set(i,0),u.set(o,i.length),t.set(r,u)}return t}function oB(e,n){const t=$9(e.independent,n.independent),r=e.independent===e.joint&&n.independent===n.joint?t:$9(e.joint,n.joint);return{independent:t,joint:r}}function uB(e,n,t,r,i){const o=c=>$t([...e,"blocks",c]),u=dh(o(n));if(u!==void 0)return u;let a=n-1,s;for(;a>=0&&(s=dh(o(a)))===void 0;)a--;s===void 0&&(s=ph(o(0),i(t)),a=0);for(let c=a+1;c<=n;c++)s=ph(o(c),oB(s,i(r)));return s}function aB(){Pn.clear(),ro=0}const sB=5,cB=5,lB=[0,.25,.5,.75,1];function Ft(e){return e==="probability"?[0,1]:null}function Cu(e,n){const t=sB/100*(n-e);return[e-t,n+t]}function $2(e,n,t){return e??Cu(n,t)}function fB(e){return Math.max(0,-Math.floor(Math.log10(e)))}function dB(e){const n=10**Math.floor(Math.log10(e)),t=e/n;return(t<=1?1:t<=2?2:t<=5?5:10)*n}function Mo(e,n){if(e===0&&n===1)return lB.map(u=>({value:u,label:u.toFixed(2)}));if(n<=e)return[{value:e,label:e.toFixed(2)}];const t=dB((n-e)/cB),r=fB(t),i=[],o=t*1e-9;for(let u=Math.ceil(e/t)*t;u<=n+o;u+=t){const a=Math.abs(u)<o?0:u;i.push({value:a,label:a.toFixed(r)})}return i}const A9={ui:"sans-serif",mono:"monospace"},pB={ui:"--font-ui",mono:"--font-mono"},L9=new Map;function Aw(e){const n=L9.get(e);if(n!==void 0)return n;if(typeof getComputedStyle>"u"||typeof document>"u")return A9[e];const t=getComputedStyle(document.documentElement).getPropertyValue(pB[e]).trim();return t?(L9.set(e,t),t):A9[e]}function A2(e){return`${e}px ${Aw("ui")}`}function Rt(e){return`${e}px ${Aw("mono")}`}const I9=4,hB=.25,mB=2.5066282746310002;function Lw(e,n,t,r){const i=e.length;let o=0,u=0;for(let h=0;h<i;h++)o+=e[h],u+=e[h]*e[h];const a=o/i,s=Math.max(0,u/i-a*a),c=Math.sqrt(s),l=hB*c*i**-.2;if(l<=0)return null;const f=new Float64Array(n);let d=0;for(let h=0;h<n;h++){const p=t+(r-t)*h/(n-1);let v=0;for(let m=0;m<i;m++){const g=(p-e[m])/l;if(!(g>I9)){if(g<-I9)break;v+=Math.exp(-.5*g*g)}}f[h]=v/(i*l*mB),f[h]>d&&(d=f[h])}return{density:f,maxD:d}}const Te={top:4,bottom:18,left:4,right:4},vB=12,L2="#333",Tu=1.5,_B="#777",Iw="#2166ac",gB="rgba(110, 110, 110, 0.12)",Cw="rgba(33, 102, 172, 0.12)",Oo=L2,Tw="rgba(51, 51, 51, 0.10)",qo=Iw,Rw=Cw;function kw(e){return e.density_curve===void 0?null:{source:e.density_curve,p5:e.p5,p95:e.p95,color:Oo,dashed:!1,bandFill:Tw}}function ri(e,n,t,r,i){const o=e.width,u=e.height,a=e.getContext("2d");if(!a)return;a.clearRect(0,0,o,u);const s=o-Te.left-Te.right,c=u-Te.top-Te.bottom,l=Te.top+c;let f,d;if(n instanceof Float64Array){if(n.length===0)return;[f,d]=$2(i,n[0],n[n.length-1])}else f=n.start,d=n.end;if(d<=f){R9(a,Te.left+s/2,c),Fr(a,[{value:f,label:f.toFixed(2)}],()=>Te.left+s/2,l);return}const h=g=>Te.left+(g-f)/(d-f)*s;let p,v;const m=Math.round(s);if(n instanceof Float64Array){if(n[n.length-1]-n[0]<(d-f)/s){R9(a,h((n[0]+n[n.length-1])/2),c),Fr(a,Mo(f,d),h,l);return}const _=Lw(n,m,f,d);if(!_)return;p=_.density,v=_.maxD}else{p=new Float64Array(m),v=1;const g=n.heights.length;for(let _=0;_<m;_++){const b=(f+(d-f)*_/(m-1)-n.start)/(n.end-n.start)*(g-1),E=Math.floor(b),A=Math.min(E+1,g-1),L=b-E;p[_]=n.heights[E]*(1-L)+n.heights[A]*L}}if(!(v<=0)){a.fillStyle="#e8e8e8",a.fillRect(h(t),Te.top,h(r)-h(t),c),a.beginPath();for(let g=0;g<m;g++){const _=Te.left+g/(m-1)*s,y=Te.top+c-p[g]/v*c;g===0?a.moveTo(_,y):a.lineTo(_,y)}a.strokeStyle=L2,a.lineWidth=Tu,a.stroke(),Fr(a,Mo(f,d),h,l)}}const bB=13,C9=20,yB="#777";function EB(e,n){const t=e.width,r=e.height,i=e.getContext("2d");if(!i)return;i.clearRect(0,0,t,r),i.save(),i.fillStyle=yB,i.font=A2(bB),i.textAlign="center",i.textBaseline="middle";const o=r/2-(n.length-1)*C9/2;n.forEach((u,a)=>{i.fillText(u,t/2,o+a*C9)}),i.restore()}function ii(e,n,t){const r=e.width,i=e.height,o=e.getContext("2d");if(!o||(o.clearRect(0,0,r,i),n.length===0))return;const u=r-Te.left-Te.right,a=i-Te.top-Te.bottom,s=Te.top+a,c=n.map(m=>I2(m.source,t)),l=(t==null?void 0:t[0])??Math.min(...c.map(m=>m[0])),f=(t==null?void 0:t[1])??Math.max(...c.map(m=>m[1])),d=m=>Te.left+(m-l)/(f-l)*u;if(f<=l){for(const m of n)Nw(o,Te.left+u/2,a,m.color);Fr(o,[{value:l,label:l.toFixed(2)}],()=>Te.left+u/2,s);return}const h=Math.round(u),p=n.map(m=>wB(m.source,h,l,f));let v=0;for(const m of p)if(m.density!==null)for(const g of m.density)v=Math.max(v,g);for(const m of n)m.bandFill!==null&&(o.fillStyle=m.bandFill,o.fillRect(d(m.p5),Te.top,d(m.p95)-d(m.p5),a));n.forEach((m,g)=>{SB(o,p[g],h,u,a,v,m.color,m.dashed,d)}),Fr(o,Mo(l,f),d,s)}function I2(e,n){if(!(e instanceof Float64Array))return[e.start,e.end];if(e.length===0)throw new Error("density overlay source has no samples");return $2(n,e[0],e[e.length-1])}function wB(e,n,t,r){if(e instanceof Float64Array){if(e.length===0)throw new Error("density overlay source has no samples");if(e[e.length-1]-e[0]<(r-t)/n)return{density:null,pointMassX:(e[0]+e[e.length-1])/2};const a=Lw(e,n,t,r);return a===null?{density:null,pointMassX:(e[0]+e[e.length-1])/2}:(T9(a.density,t,r),{density:a.density,pointMassX:null})}const i=new Float64Array(n),o=e.heights.length;for(let u=0;u<n;u++){const a=t+(r-t)*u/(n-1);if(a<e.start||a>e.end||e.end<=e.start||o===0){i[u]=0;continue}const s=(a-e.start)/(e.end-e.start)*(o-1),c=Math.floor(s),l=Math.min(c+1,o-1),f=s-c;i[u]=e.heights[c]*(1-f)+e.heights[l]*f}return T9(i,t,r),{density:i,pointMassX:null}}function T9(e,n,t){const r=(t-n)/Math.max(1,e.length-1);let i=0;for(const o of e)i+=o*r;if(!(i<=0))for(let o=0;o<e.length;o++)e[o]=e[o]/i}function SB(e,n,t,r,i,o,u,a,s){if(n.pointMassX!==null){Nw(e,s(n.pointMassX),i,u);return}if(!(n.density===null||o<=0)){e.beginPath();for(let c=0;c<t;c++){const l=Te.left+c/(t-1)*r,f=Te.top+i-n.density[c]/o*i;c===0?e.moveTo(l,f):e.lineTo(l,f)}e.strokeStyle=u,e.lineWidth=Tu,e.setLineDash(a?[5,4]:[]),e.stroke(),e.setLineDash([])}}function R9(e,n,t){e.beginPath(),e.moveTo(n,Te.top+t),e.lineTo(n,Te.top),e.strokeStyle=L2,e.lineWidth=Tu,e.stroke()}function Nw(e,n,t,r){e.beginPath(),e.moveTo(n,Te.top+t),e.lineTo(n,Te.top),e.strokeStyle=r,e.lineWidth=Tu,e.stroke()}function Fr(e,n,t,r){e.strokeStyle="#bbb",e.lineWidth=.5,e.fillStyle="#4d4d4d",e.font=A2(vB),e.textAlign="center";for(const i of n){const o=t(i.value);e.beginPath(),e.moveTo(o,r),e.lineTo(o,r+3),e.stroke(),e.fillText(i.label,o,r+12)}}const $B=.5,AB=.05,LB=.95,IB=1e-12,CB=200;function ki(e){return!(e instanceof _2)}function C2(e){const{xs:n}=e,t=n[0];return n[n.length-1]-t<Ci?t:null}function Mw(e,n){let t=0,r=e.length-1;for(;t<r-1;){const i=t+r>>1;e[i]<=n?t=i:r=i}return t}function TB(e,n){const{xs:t,fs:r,Fs:i}=e,o=t.length-1;if(n<t[0])return 0;if(n>=t[o])return 1;const u=Mw(t,n),a=t[u+1]-t[u];if(a<Ci)return i[u];const s=n-t[u],c=(r[u+1]-r[u])/a;return i[u]+r[u]*s+c*s*s/2}function RB(e,n){if(C2(e)!==null)return 0;const{xs:t,fs:r}=e,i=t.length-1;if(n<t[0]||n>t[i])return 0;if(n===t[i])return r[i];const o=Mw(t,n),u=t[o+1]-t[o];return u<Ci?r[o]:r[o]+(r[o+1]-r[o])*(n-t[o])/u}function kB(e){const n=C2(e);if(n!==null)return n;const{xs:t,fs:r}=e;let i=0;for(let o=0;o<t.length-1;o++){const u=t[o+1]-t[o];if(u<=0)continue;const a=(r[o+1]-r[o])/u;i+=t[o]*r[o]*u+(t[o]*a+r[o])*u*u/2+a*u**3/3}return i}function NB(e,n){return ki(e)?TB(e,n):e.cdf(n)}function MB(e,n){return ki(e)?RB(e,n):e.pdf(n)}function k9(e,n){return Yt(n,e)}function Ow(e){return ki(e)?kB(e):e.mean()}function OB(e){return ki(e)?C2(e):null}function qB(e){return ki(e)?Array.from(e.xs):[]}function Er(e,n){if(e.length===0)throw new Error(`${n}: need at least one distribution`)}function PB(e,n){Er(e,"mixtureCdf");let t=0;for(const r of e)t+=NB(r,n);return t/e.length}function FB(e,n){Er(e,"mixturePdf");let t=0;for(const r of e)t+=MB(r,n);return t/e.length}function qw(e){Er(e,"mixtureMean");let n=0;for(const t of e){const r=Ow(t);if(r===null)return null;n+=r}return n/e.length}function Dr(e,n){if(Er(e,"mixtureQuantile"),!(n>0&&n<1))throw new Error(`mixtureQuantile: quantile level ${n} is not in (0, 1)`);if(e.length===1)return k9(e[0],n);const t=e.map(o=>k9(o,n));let r=Math.min(...t),i=Math.max(...t);for(let o=0;o<CB&&!(i-r<=IB*Math.max(Math.abs(r),Math.abs(i)));o++){const u=r+(i-r)/2;PB(e,u)>=n?i=u:r=u}return i}function Pw(e){Er(e,"mixtureAtoms");const n=new Map;for(const t of e){const r=OB(t);r!==null&&n.set(r,(n.get(r)??0)+1)}return[...n.entries()].sort(([t],[r])=>t-r).map(([t,r])=>({x:t,count:r,mass:r/e.length}))}function Fw(e){return Er(e,"mixtureStats"),{mean:qw(e),median:Dr(e,$B),p5:Dr(e,AB),p95:Dr(e,LB)}}function DB(e,n){if(e.length!==n.length)throw new Error(`pwlToShape: xs length ${e.length} !== ys length ${n.length}`);return{points:e.map((t,r)=>({x:t,y:n[r]}))}}const Po=.001,Fo=101,xB=.04;function BB(e){const n=e.inverseCdf(Po),t=e.inverseCdf(1-Po);if(!(t>n))return{points:[{x:n,y:1}]};const r=[],i=[];for(let u=0;u<Fo;u++){const a=n+u/(Fo-1)*(t-n);r.push(a),i.push(e.pdf(a))}const o=Math.max(...i);if(o<=0)throw new Error("familyToShape: zero density over the display window");return{points:r.map((u,a)=>({x:u,y:i[a]/o}))}}function Dw(e){const n=Pw(e),t=n.map(d=>d.x),r=Math.min(Dr(e,Po),...t),i=Math.max(Dr(e,1-Po),...t);if(!(i>r))return{points:[{x:r,y:1}]};const o=[];for(let d=0;d<Fo;d++)o.push(r+d/(Fo-1)*(i-r));for(const d of e)for(const h of qB(d))h>r&&h<i&&o.push(h);const u=new Set(t),a=[...new Set(o)].filter(d=>!u.has(d)).sort((d,h)=>d-h),s=a.map(d=>FB(e,d)),c=Math.max(0,...s),l=c>0?1:Math.max(...n.map(d=>d.mass));return{points:[...a.map((d,h)=>({x:d,points:[{x:d,y:c>0?s[h]/c:0}]})),...n.map(d=>{const h=Math.max(d.mass/l,xB);return{x:d.x,points:[{x:d.x,y:0},{x:d.x,y:h},{x:d.x,y:0}]}})].sort((d,h)=>d.x-h.x).flatMap(d=>d.points)}}function xw(e,n){const t=e.points;return $2(n?Ft(n):null,t[0].x,t[t.length-1].x)}const On={top:4,bottom:18,left:4,right:4},HB=10,UB="rgba(100, 149, 237, 0.25)",N9="#4477bb",M9=1.5,GB="#e8e8e8";function oi(e,n,t,r){const i=e.width,o=e.height,u=e.getContext("2d");if(!u)return;u.clearRect(0,0,i,o);const{points:a}=n;if(a.length===0)return;const s=i-On.left-On.right,c=o-On.top-On.bottom,l=On.top+c,[f,d]=t;if(d<=f){const _=On.left+s/2;Math.max(...a.map(y=>y.y))>0&&(u.beginPath(),u.moveTo(_,l),u.lineTo(_,On.top),u.strokeStyle=N9,u.lineWidth=M9,u.stroke()),O9(u,[{value:f,label:f.toFixed(2)}],()=>_,l);return}const h=_=>On.left+(_-f)/(d-f)*s,p=Math.max(...a.map(_=>_.y));if(p<=0)return;const v=_=>On.top+c-_/p*c;if(r){const[_,y]=r;u.fillStyle=GB,u.fillRect(h(_),On.top,h(y)-h(_),c)}u.beginPath(),u.moveTo(h(a[0].x),l);for(const _ of a)u.lineTo(h(_.x),v(_.y));u.lineTo(h(a[a.length-1].x),l),u.closePath(),u.fillStyle=UB,u.fill(),u.beginPath();const m=a[0],g=a[a.length-1];m.y>0?(u.moveTo(h(m.x),l),u.lineTo(h(m.x),v(m.y))):u.moveTo(h(m.x),v(m.y));for(let _=1;_<a.length;_++)u.lineTo(h(a[_].x),v(a[_].y));g.y>0&&u.lineTo(h(g.x),l),u.strokeStyle=N9,u.lineWidth=M9,u.stroke(),O9(u,Mo(f,d),h,l)}function O9(e,n,t,r){e.strokeStyle="#bbb",e.lineWidth=.5,e.fillStyle="#4d4d4d",e.font=A2(HB),e.textAlign="center";for(const i of n){const o=t(i.value);e.beginPath(),e.moveTo(o,r),e.lineTo(o,r+3),e.stroke(),e.fillText(i.label,o,r+12)}}const Bw="density-log-badge",VB="density-log-badge-left",WB="density-log-badge-right",jB="log",XB="Hover (or focus) to redraw as the density of ln(value); tick labels in that view are ln(value). Leave to restore.",T2=new Set(["probability","oddsratio","posreal"]),YB=.25,Hp=256;function Hw(e){const n=new Float64Array(e.length);for(let t=0;t<e.length;t++)n[t]=Math.log(e[t]);return n}function Uw(e){return e.length>0&&e[0]>0}function KB(e,n){const t=e.heights.length;if(t===0||e.end<=e.start||n<e.start||n>e.end)return 0;const r=(n-e.start)/(e.end-e.start)*(t-1),i=Math.floor(r),o=Math.min(i+1,t-1),u=r-i;return e.heights[i]*(1-u)+e.heights[o]*u}function Gw(e){const n=e.heights.length;if(n<2||e.end<=0||e.end<=e.start)return null;let t=e.start;if(t<=0){const a=(e.end-e.start)/(n-1);if(t=e.start+Math.ceil(-e.start/a+1e-12)*a,t<=0||t>=e.end)return null}const r=Math.log(t),i=Math.log(e.end),o=new Array(n);let u=0;for(let a=0;a<n;a++){const s=r+(i-r)*a/(n-1),c=Math.exp(s),l=KB(e,c)*c;o[a]=l,l>u&&(u=l)}if(u<=0)return null;for(let a=0;a<n;a++)o[a]=o[a]/u;return{start:r,end:i,heights:o}}function JB(e){const n=e.points.filter(t=>t.x>0).map(t=>({x:Math.log(t.x),y:t.y*t.x}));return n.length===0||Math.max(...n.map(t=>t.y))<=0?null:{points:n}}function rr(e,n){return e>0?Math.log(e):n}function R2(e,n){return n<e?"right":"left"}function k2(e,n,t){const r=(t-n)*YB,i=n+r,o=t-r;if(e instanceof Float64Array){let l=0,f=0;for(const d of e)d<=i?l++:d>=o&&f++;return{left:l/e.length,right:f/e.length}}const u=e.heights.length;let a=0,s=0,c=0;for(let l=0;l<u;l++){const f=e.start+(e.end-e.start)*(u===1?0:l/(u-1)),d=e.heights[l];c+=d,f<=i?a+=d:f>=o&&(s+=d)}return c<=0?{left:0,right:0}:{left:a/c,right:s/c}}function zB(e,n,t){const r=e.points,i=new Array(Hp);let o=0;for(let u=0;u<Hp;u++){const a=n+(t-n)*u/(Hp-1);for(;o<r.length-1&&r[o+1].x<a;)o++;const s=r[o],c=r[Math.min(o+1,r.length-1)];if(a<s.x||a>c.x){i[u]=0;continue}i[u]=c.x===s.x?s.y:s.y+(c.y-s.y)*(a-s.x)/(c.x-s.x)}return k2({start:n,end:t,heights:i},n,t)}function ZB(e){var n;(n=e.querySelector(`.${Bw}`))==null||n.remove()}function N2(e){const n=e.parentElement;return n!=null&&n.classList.contains("resizable-canvas-wrapper")?(ZB(n),n):(console.warn("density_log_hover: canvas is not wrapped by makeResizable"),null)}function M2(e,n,t,r){const i=document.createElement("span");i.className=`${Bw} `+(n==="left"?VB:WB),i.textContent=jB,i.title=XB,i.tabIndex=0,i.addEventListener("pointerenter",t),i.addEventListener("pointerleave",r),i.addEventListener("focus",t),i.addEventListener("blur",r),e.appendChild(i)}function Vw(e,n,t,r,i){const o=N2(e);if(o===null||!T2.has(i))return;const u=Ft(i),a=()=>ri(e,n,t,r,u);let s,c;if(n instanceof Float64Array){if(!Uw(n))return;s=Hw(n),c=Cu(s[0],s[s.length-1])[0]}else{const p=Gw(n);if(p===null)return;s=p,c=p.start}const l=()=>ri(e,s,rr(t,c),rr(r,c),null),[f,d]=I2(n,u),h=k2(n,f,d);M2(o,R2(h.left,h.right),l,a)}function O2(e,n,t){const r=N2(e);if(r===null||!T2.has(t)||n.length===0)return;const i=Ft(t),o=()=>ii(e,n,i),u=[];for(const h of n){let p,v;if(h.source instanceof Float64Array){if(!Uw(h.source))return;p=Hw(h.source),v=Cu(p[0],p[p.length-1])[0]}else{const m=Gw(h.source);if(m===null)return;p=m,v=m.start}u.push({...h,source:p,p5:rr(h.p5,v),p95:rr(h.p95,v)})}const a=()=>ii(e,u,null),s=n.map(h=>I2(h.source,i)),c=(i==null?void 0:i[0])??Math.min(...s.map(h=>h[0])),l=(i==null?void 0:i[1])??Math.max(...s.map(h=>h[1]));let f=0,d=0;for(const h of n){const p=k2(h.source,c,l);f+=p.left/n.length,d+=p.right/n.length}M2(r,R2(f,d),a,o)}function Ww(e,n,t,r,i){const o=N2(e);if(o===null||r===void 0||!T2.has(r))return;const u=JB(n);if(u===null)return;const a=u.points[0],s=u.points[u.points.length-1],c=s.x>a.x?Cu(a.x,s.x):[a.x,s.x],l=i?[rr(i[0],c[0]),rr(i[1],c[0])]:null,f=()=>oi(e,n,t,i),d=()=>oi(e,u,c,l),h=zB(n,t[0],t[1]);M2(o,R2(h.left,h.right),d,f)}function Ru(e){return e.some(n=>yi(n.lloads))}function jw(e){return new Error(`A record with stated joint dependence must carry both its independence precompute (${gn}) and joint precompute (${vt}), or neither for ${e}`)}function ku(e,n){if(e===void 0)return;const t=e[gn],r=e[vt];if(!n)return t===void 0?void 0:{stats:t,strengthKey:gn};if(!(t===void 0&&r===void 0)){if(t===void 0||r===void 0)throw jw("live evaluation");return{stats:r,strengthKey:vt}}}function Xw(e){if(e===void 0)return null;const n=e[gn],t=e[vt];if(n===void 0&&t===void 0)return null;if(n===void 0||t===void 0)throw jw("live comparison");return{independent:n,joint:t}}function q2(e,n,t){var r;return t?e.precomputed:(r=e.precomputed_aux_forms)==null?void 0:r[n]}function QB(e,n,t,r){return ku(q2(e,n,n===t),r)}const q9=10,eH="…";function P2(e){return[...new Set(e.map(n=>n.pool_id))]}function nH(e){return P2(e).length>1}function Yw(e,n,t){const r=er(e,t);if(r!==null)return r.group.pool_id;const i=P2(t);return i.includes(n)?n:i[0]??null}function tH(e,n,t,r){var o;const i=er(e,r);return i!==null?i.group.pool_id:t!==""?t:((o=er(n,r))==null?void 0:o.group.pool_id)??""}function rH(e){const n=e.map(r=>r.length>q9?r.slice(0,q9)+eH:r),t=new Map;for(const r of n)t.set(r,(t.get(r)??0)+1);return n.map((r,i)=>t.get(r)>1?e[i]:r)}function Kw(e,n){const t=n.find(r=>r.pool_id===e);if(t===void 0)throw new Error(`firstMethodicalWhoseInTaskGroup: no methodical entry in task group ${JSON.stringify(e)}`);return uu(t)}function iH(e,n,t){const r=er(e,t);if(r===null)return null;const{model:i,version:o,effort:u,aggregate:a}=r.group,s=t.find(c=>c.pool_id===n&&c.model===i&&c.version===o&&c.effort===u&&c.aggregate===a);return s!==void 0?uu(s):Kw(n,t)}const Ge={VISIBLE_AOPTS:"visible-aopts",TCHOICE:"tchoice",CPARAMS_SECTION:"cparams",TEXT_DEFINITIONS:"text-definitions",INTERPRETED_SYMBOL_SEMANTICS:"interpreted-symbols",DEFINED_SYMBOLS:"defined-symbols",AXIOMS:"axioms",SIMPLIFYING_ASSUMPTIONS:"simplifying-assumptions",DERIVED_AXIOMS:"derived-axioms",ESTIMATION:"estimation",RESPONSE_NOTES:"response-notes",COMPUTED_FORMULAS:"formulas",FRAMING_ROOT:"framing-notes-root",FRAMING_EXPLAINER:"framing-notes-explainer",SRCQUOTE_EXPLAINER:"srcquote-explainer",CALCULATOR:"calculator"};function nt(e,n){return`${Ge[e]}-${vh(n)}`}const Jw="estimator-instructions",hh="estimator-instructions-fold",oH="Estimator Instructions",Ni="hir-persistent-fold",uH="hir-section-fold",aH=!0;function F2(e,n,t){var r;return((r=t.foldOpenById)==null?void 0:r[e])??n?" open":""}function Up(e,n,t,r){const i=F2(e,aH,r);return`<details id="${e}" class="${uH} ${Ni}"${i}><summary>${n}</summary>`+t+"</details>"}const sH={TEXT_DEFINITIONS:e=>VR(e),INTERPRETED_SYMBOL_SEMANTICS:e=>WR(e),DEFINED_SYMBOLS:e=>GR(e),AXIOMS:e=>da(e,{classification:"ordinary"}),SIMPLIFYING_ASSUMPTIONS:e=>da(e,{classification:"simplifying"}),DERIVED_AXIOMS:e=>da(e,{classification:"derived"}),COMPUTED_FORMULAS:e=>jR(e)},cH=`<div class="dag-legend">Each formula computes its left-hand side. <span class="dag-glyph">↖</span> marks a value computed by an earlier formula (click to jump to it); <span class="dag-glyph">↘</span> marks a left-hand side used by a later formula; hovering either highlights every occurrence of the value. Undecorated leaf names are estimated directly — each names a card in <a href="#${Ge.ESTIMATION}-section">Estimation</a> (click to jump to it).</div>`,lH="DERIVED_FORMS",mh="derived-forms-fold",fH="Computed auxiliary formulas",dH="CALCULATOR_RESULTS",zw="stats-display-control";function pH(e){const n=new Set;for(const t of e.layout.sections.html)if("subentries"in t)for(const r of t.subentries)typeof r=="object"&&"formid"in r&&n.add(r.formid);return n}function hH(e){const n=e.conclusion_form_or_none(),t=pH(e);return e.form.filter(r=>r.id!==n&&!t.has(r.id)).map(r=>r.id)}function mH(e,n,t){let r;if(t)r={...t,unresolvedRefs:t.unresolvedRefs??new Set};else{const o=Mh(e),u=ly(e,dy(e,{},"plainnum"),"plainnum"),a=u.option_value_or("show_typical_examples",fy),s=u.option_value_or("srcquotes_inlined",!1),c={};for(const l of u.get_option_bare_names())c[l]=u.option_value(l);r={jprobInstance:u,showTypical:a,srcquotesInlined:s,refLookup:o,displayOptionValues:c,unresolvedRefs:new Set}}const i=[];Kp in e.get_fgroups()&&i.push(`<details id="${hh}" class="hir-fold ${Ni} estimator-instructions-fold"${F2(hh,!1,r)} hidden><summary>${oH}</summary><div id="${Jw}" class="hir-fold-body"></div></details>`);for(const o of e.layout.sections.html)i.push(vH(o,e,r));return{html:i.join(""),unresolvedRefs:[...r.unresolvedRefs].sort()}}function vH(e,n,t){if("chunkid"in e)return Zw(e.chunkid,n,t,e.style)??"";if("subentries"in e){const a=Ge[e.delegation_id],s=e.subentries.map(c=>_H(c,n,t,e.delegation_id));return Up(`${a}-section`,`<h2 id="${a}-section-header">${e.header}</h2>`,s.join(""),t)}const{delegation_id:r,header:i}=e,o=Ge[r];if(!o)throw new Error("Expected `delegation_id` field here to be an element of DelegatedLayoutEntryId.");if((r==="FRAMING_ROOT"||r==="FRAMING_EXPLAINER")&&!n.has_standard_rendering_framing_notes()||r==="SRCQUOTE_EXPLAINER"&&!n.has_srcquotes())return"";const u=sH[r];if(u){const a=u(t);if(!a.trim())return"";const s=r==="COMPUTED_FORMULAS"?cH:"";return i==null?s+a:Up(`${o}-section`,`<h2 id="${o}-section-header">${i}</h2>`,s+a,t)}return r==="FRAMING_EXPLAINER"||r==="SRCQUOTE_EXPLAINER"?`<div id="${o}-section"><div id="${o}-content"></div></div>`:Up(`${o}-section`,`<h2 id="${o}-section-header">${i??""}</h2>`,`<div id="${o}-content"></div>`,t)}function _H(e,n,t,r){if(typeof e=="string"){if(e===lH){const a=hH(n).map(s=>`<div id="derived-${vh(s)}" class="derived-form" data-form-id="${s}"></div>`).join("");return a===""?"":`<details id="${mh}" class="hir-fold ${Ni} derived-forms-fold"${F2(mh,!1,t)}><summary>${fH}</summary><div class="hir-fold-body derived-forms-fold-body">${a}</div></details>`}const u=nt(r,e);return e===dH?`<div id="${zw}"></div><div id="${u}"></div>`:`<div id="${u}"></div>`}if("chunkid"in e)return Zw(e.chunkid,n,t,e.style)??"";const i=e.formid;return`<div id="${`derived-${vh(i)}`}" class="derived-form" data-form-id="${i}"></div>`}function Zw(e,n,t,r){const i=n.find_textchunk_defn(e);if(i===void 0)throw new Error(`Layout references textchunk "${e}", which the jprob template does not declare`);if(!i)return null;const o=Ee(i,t);switch(r){case"title":return`<h1 class="arg-title">${o}</h1>`;case"subtitle":return`<p class="arg-subtitle">${o}</p>`;case"note":return`<div class="hir-loud-note">${o}</div>`;case"warning":return`<p class="arg-warning">${o}</p>`;default:return`<div class="textchunk">${o}</div>`}}function vh(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-$/,"").replace(/^-/,"")}const P9="pool-note-fold",gH="Prompt hash group note",_h="task-group-select",bH="yours-fixfree-radio";function Qw(e,n){return De(e)&&n.has_cparams()}function eS(e){const n=e==="yours-plaincode";return`<div class="mode-radio ${bH}"><button class="mode-radio-btn${n?"":" active"}" data-whose="yours-plainnum">fix</button><button class="mode-radio-btn${n?" active":""}" data-whose="yours-plaincode">free</button></div>`}function yH(e,n,t,r,i){const o=r.ui.whose,{source:u}=pe(o),a=_i(u),s=iE(u),c=a?er(o,i):null;let l='<div class="whose-toggle">';const f=De(o)?o:r.ui.lastYoursWhose;if(l+=`<button class="whose-btn${De(o)?" active":""}" data-whose="${f}">Yours</button>`,Qw(o,n)&&(l+=eS(o)),t.adhocPlainnumEntries.length>0||t.adhocPlaincodeEntries.length>0){l+=`<select id="adhoc-result-select" class="whose-select${s?" whose-select-active":""}${a?" whose-select-faded":""}" data-whose-source="adhoc">`,l+=`<option value="" disabled${s?"":" selected"}>Adhoc…</option>`;for(const m of nE){const g=tE(t,m);for(let _=0;_<g.length;_++){const y=g[_],b=t.adhocPresets[y.presetIndex],E=ek(b,m,y);if(!E)continue;const A=ik(b,m,E),L=`adhoc-${m}:${_}`;l+=`<option value="${L}"${o===L?" selected":""}>${X(A)}</option>`}}l+="</select>"}if(i.length>0){const p=s?" whose-select-faded":"",v=a?" whose-select-active":"",m=nH(i),g=dk(i,m),_=Yw(o,r.ui.selectedTaskGroupPoolId,i);if(m){const y=P2(i),b=rH(y);l+='<div class="methodical-selection-group">',l+=`<select id="${_h}" class="task-group-select${p}" title="Task group: which prompt version the AI results answer">`;for(let E=0;E<y.length;E++){const A=y[E],L=A===_?" selected":"";l+=`<option value="${X(A)}" title="${X(A)}"${L}>${X(b[E])}</option>`}l+="</select>"}l+=`<select id="methodical-result-select" class="whose-select${v}${p}" data-whose-source="ai-results">`,l+=`<option value="" disabled${a?"":" selected"}>AI results…</option>`;for(let y=0;y<i.length;y++){if(m&&i[y].pool_id!==_)continue;const b=g[y],E=c&&c.groupIndex===y?" selected":"";l+=`<option value="group:${y}"${E}>${X(b)}</option>`}l+="</select>",m&&(l+="</div>")}l+="</div>";const h=Y7(n.get_aopt_bare_names());if(a&&h!==null){const p=je(o,t);if(!p)throw new Error(`No active methodical result for whose selection ${JSON.stringify(o)}`);const v=K7(p.aopts[h],`Methodical result ${h}`);l+=`<div class="methodical-framing-flabels">Framing: ${X(v.join(" "))}</div>`}if(c!==null){const p=tk(t.jtaskHashGroups,c.group.pool_id);if(p!==null){const v=r.ui.foldOpenById[P9]?" open":"";l+=`<details id="${P9}" class="hir-fold ${Ni} pool-note-fold"${v}><summary>${gH}</summary><div class="hir-fold-body">${X(p)}</div></details>`}}e.innerHTML=l}function EH(e,n,t,r){var h;const i=r.ui.whose;if(De(i))return e.innerHTML="",!1;const o=je(i,t);if(!o)return e.innerHTML='<div style="color: #888; font-size: 13px;">No data.</div>',!1;const u=r.ui.inputMode,a=n.svar_entries().map(p=>p.bareName),s=a.length,c=bk(i,o,u,a),l=c.length;if(l===0)return e.innerHTML='<div style="color: #888; font-size: 13px;">No data for this mode.</div>',!1;const f=l>1;let d='<div class="sample-grid">';for(let p=0;p<l;p++){d+='<div class="sample-col">',f&&(d+=`<div class="sample-col-header">Sample ${p+1}</div>`);for(let v=0;v<s;v++){const m=((h=c[p])==null?void 0:h[v])??"";d+=`<div class="sample-cell">${X(m)}</div>`}d+="</div>"}return d+="</div>",e.innerHTML=d,f}function F9(e,n,t){if(De(e))return!0;const r=je(e,n);return r?Wh(e,r)[t]:!1}function wH(e){const n=e.conclusion_expr_or_none();return n===null?null:e.get_display_expr(n)??n}function nS(e,n){const t=wH(e);return t===null?null:Ee(t,n)}function D2(e,n){return`<div class="density-overlay-plot"><div class="density-overlay-legend" aria-label="Density curve legend">${n.map(r=>`<span style="--density-legend-color: ${ae(r.color)}; --density-legend-style: ${r.dashed?"dashed":"solid"}">${X(r.label)}</span>`).join("")}</div><canvas id="${ae(e)}" width="400" height="200"></canvas></div>`}const Wt={top:10,bottom:35,left:50,right:15},SH=800,$H=500,D9=12,AH=5,LH=3,IH=2,x9=3,B9=5,CH=10,TH=1,RH=15,H9=["#333","#c44","#44c","#4c4","#c84","#84c","#4cc","#c4c","#888","#ca4"],tS="#333",rS=2,kH=1.5,NH={color:tS,lineWidth:rS};function MH(e,n,t=CH,r=[]){if(n)return n;let i=1/0,o=-1/0;const u=l=>{l<i&&(i=l),l>o&&(o=l)};for(const l of e)for(const f of l.points)u(f.y);for(const l of r)u(l.y);if(!Number.isFinite(i)||!Number.isFinite(o))return null;const c=(o-i||TH)*t/100;return[i-c,o+c]}function Do(e,n,t){e.width||(e.width=SH),e.height||(e.height=$H);const r=e.width,i=e.height,o=e.getContext("2d");if(!o)return;o.clearRect(0,0,r,i);const u=t.scatterOverlay;if(n.length===0&&!u)return;const a=i-Wt.top-Wt.bottom,s=MH(n,t.yRange,t.yRangePaddingPercent,u==null?void 0:u.points);if(!s)return;const[c,l]=s,f=qH(c,l,AH),d=f.length>1?f[1]-f[0]:l-c,h=f.map($=>PH($,d));o.font=Rt(D9);const p=h.reduce(($,w)=>Math.max($,o.measureText(w).width),0),v=Math.max(Wt.left,Math.ceil(p)+x9+B9),m=r-v-Wt.right;if(m<=0)return;const g=t.xLabels.length,_=g>1?m/(g-1):0,y=$=>v+$*_,b=$=>Wt.top+a-($-c)/(l-c)*a;o.save(),o.strokeStyle="#ddd",o.lineWidth=.5,o.setLineDash([3,3]);for(const $ of f){const w=b($);o.beginPath(),o.moveTo(v,w),o.lineTo(v+m,w),o.stroke()}if(o.restore(),u){o.fillStyle=u.color;for(const $ of u.points)o.beginPath(),o.arc(y($.x),b($.y),IH,0,Math.PI*2),o.fill()}const E=n.length===1;for(let $=0;$<n.length;$++){const w=n[$],S=w.color??(E?tS:H9[$%H9.length]),I=w.lineWidth??(E?rS:kH);o.strokeStyle=S,o.lineWidth=I;for(const C of OH(w.points))C.length<2||(o.beginPath(),C.forEach((P,M)=>{const H=y(P.x),q=b(P.y);M===0?o.moveTo(H,q):o.lineTo(H,q)}),o.stroke());o.fillStyle=S;for(const C of w.points)o.beginPath(),o.arc(y(C.x),b(C.y),LH,0,Math.PI*2),o.fill()}const A=Wt.top+a;o.strokeStyle="#bbb",o.lineWidth=.5,o.fillStyle="#4d4d4d",o.font=Rt(D9),o.textAlign="center",o.textBaseline="top";const L=t.xLabels.reduce(($,w)=>Math.max($,o.measureText(w).width),0),R=g>1?_:m,T=L>R-4;for(let $=0;$<g;$++){const w=y($);o.beginPath(),o.moveTo(w,A),o.lineTo(w,A+3),o.stroke(),o.save(),T?(o.translate(w,A+5),o.rotate(-Math.PI/4),o.textAlign="right",o.fillText(t.xLabels[$],0,0)):o.fillText(t.xLabels[$],w,A+5),o.restore()}o.fillStyle="#777",o.textAlign="center",o.textBaseline="bottom",o.fillText(t.xAxisLabel,v+m/2,i-1),o.fillStyle="#4d4d4d",o.textAlign="right",o.textBaseline="middle";for(let $=0;$<f.length;$++){const w=f[$],S=b(w);o.strokeStyle="#bbb",o.lineWidth=.5,o.beginPath(),o.moveTo(v-x9,S),o.lineTo(v,S),o.stroke(),o.fillText(h[$],v-B9,S)}}function OH(e){const n=[];for(const t of e){const r=n[n.length-1],i=r==null?void 0:r[r.length-1];r!==void 0&&i!==void 0&&t.x===i.x+1?r.push(t):n.push([t])}return n}function qH(e,n,t){const r=n-e;if(r<=0)return[e];const i=r/(t-1),o=Math.pow(10,Math.floor(Math.log10(i))),u=i/o;let a;u<=1.5?a=1*o:u<=3.5?a=2*o:u<=7.5?a=5*o:a=10*o;const s=Math.ceil(e/a)*a,c=[];for(let l=s;l<=n+a*.001;l+=a)c.push(l);return c}function PH(e,n){if(Number.isInteger(e)||!Number.isFinite(n)||n<=0)return e.toString();const t=Math.min(RH,Math.max(0,-Math.floor(Math.log10(n)))),r=e.toFixed(t).replace(/0+$/,"").replace(/\.$/,"");return r==="-0"?"0":r}const Nu={top:10,bottom:35,left:60,right:60},FH=80,DH=120,xH=1e3,BH=60,HH=90,UH=800,GH=35,bt=12,VH=12,iS="#ddd",WH="#eee",jH=220,U9=10,XH=80,YH=25,G9=95,Or=12,oS=8,gh=4,Gp=64,uS=8,KH=6,aS=5,sS=4,JH=4,cS=-Math.PI/4,zH=6,lS=1,ZH=.6;function QH(e){return Math.max(Nu.left,uS+bt+KH+Math.ceil(e)+aS)}function eU(e){return Math.max(Nu.right,oS+Or+gh+Math.ceil(e))}function nU(e){const n=Math.max(bt,e*Math.abs(Math.sin(cS)));return Math.max(Nu.bottom,sS+Math.ceil(n)+zH+bt+lS)}let Vp;function tU(){return Vp===void 0&&(Vp=typeof document>"u"?null:document.createElement("canvas").getContext("2d")),Vp}function Wp(e,n){return n?(n.font=Rt(bt),e.reduce((t,r)=>Math.max(t,n.measureText(r).width),0)):e.reduce((t,r)=>Math.max(t,r.length*ZH*bt),0)}function fS(e){if(e.valueRange){const[r,i]=e.valueRange;return{vMin:r,vMax:i,hasValues:!0}}let n=1/0,t=-1/0;for(const r of e.cells)for(const i of r)i!==null&&(i<n&&(n=i),i>t&&(t=i));return{vMin:n,vMax:t,hasValues:isFinite(n)&&isFinite(t)}}function rU(e,n){const{vMin:t,vMax:r,hasValues:i}=fS(e);return{yTickPx:Wp(e.yLabels,n),xTickPx:Wp(e.xLabels,n),legendPx:i?Wp([ui(t),ui(r)],n):0}}function dS(e,n){const t=rU(e,n);return{top:Nu.top,bottom:nU(t.xTickPx),left:QH(t.yTickPx),right:eU(t.legendPx)}}function V9(e,n,t){return Math.max(n,Math.min(t,Math.floor(e)))}function x2(e){const n=dS(e,tU()),t=V9(xH/e.xLabels.length,FH,DH),r=V9(UH/e.yLabels.length,BH,HH);return{width:n.left+e.xLabels.length*t+n.right,height:n.top+e.yLabels.length*r+n.bottom}}function xo(e,n){var g;const t=n.xLabels.length,r=n.yLabels.length;if(t===0||r===0)return;const i=e.getContext("2d");if(!i)return;if(!e.width||!e.height){const _=x2(n);e.width=_.width,e.height=_.height}const o=e.width,u=e.height;i.clearRect(0,0,o,u);const a=dS(n,i),s=(o-a.left-a.right)/t,c=(u-a.top-a.bottom)/r;if(s<=0||c<=0)return;const{vMin:l,vMax:f,hasValues:d}=fS(n),h=d&&f-l||1,p=s>=GH;i.font=Rt(VH),i.textAlign="center",i.textBaseline="middle";for(let _=0;_<r;_++)for(let y=0;y<t;y++){const b=a.left+y*s,E=a.top+_*c,A=((g=n.cells[_])==null?void 0:g[y])??null;if(A===null)i.fillStyle=WH,i.fillRect(b,E,s,c);else{const L=d?(A-l)/h:0;i.fillStyle=pS(L),i.fillRect(b,E,s,c),p&&(i.fillStyle=L>.55?"#fff":"#333",i.fillText(ui(A),b+s/2,E+c/2))}i.strokeStyle=iS,i.lineWidth=1,i.strokeRect(b,E,s,c)}i.fillStyle="#4d4d4d",i.font=Rt(bt),i.textBaseline="top";const m=n.xLabels.reduce((_,y)=>Math.max(_,i.measureText(y).width),0)>s-JH;for(let _=0;_<t;_++){const y=a.left+_*s+s/2,b=a.top+r*c+sS;i.save(),i.textAlign="center",m?(i.translate(y,b),i.rotate(cS),i.textAlign="right",i.fillText(n.xLabels[_],0,0)):i.fillText(n.xLabels[_],y,b),i.restore()}i.fillStyle="#777",i.textAlign="center",i.textBaseline="bottom",i.fillText(n.xAxisLabel,a.left+t*s/2,u-lS),i.fillStyle="#4d4d4d",i.font=Rt(bt),i.textAlign="right",i.textBaseline="middle";for(let _=0;_<r;_++){const y=a.top+_*c+c/2;i.fillText(n.yLabels[_],a.left-aS,y)}i.save(),i.fillStyle="#777",i.textAlign="center",i.textBaseline="top",i.translate(uS,a.top+r*c/2),i.rotate(-Math.PI/2),i.fillText(n.yAxisLabel,0,0),i.restore(),d&&iU(i,o,a,r*c,l,f)}function pS(e){const n=U9+(XH-U9)*e,t=G9+(YH-G9)*e;return`hsl(${jH}, ${n.toFixed(0)}%, ${t.toFixed(0)}%)`}function ui(e){return Number.isInteger(e)?e.toString():e.toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}function iU(e,n,t,r,i,o){const u=n-t.right+oS,a=t.top,s=r,c=s/Gp;for(let l=0;l<Gp;l++){const f=1-l/(Gp-1);e.fillStyle=pS(f),e.fillRect(u,a+l*c,Or,c+1)}e.strokeStyle=iS,e.lineWidth=1,e.strokeRect(u,a,Or,s),e.fillStyle="#4d4d4d",e.font=Rt(bt),e.textAlign="left",e.textBaseline="middle",e.fillText(ui(o),u+Or+gh,a),e.fillText(ui(i),u+Or+gh,a+s)}function oU(){const e=new WeakMap;return{get(n,t){var r;return(r=e.get(n))==null?void 0:r.get(t)},set(n,t,r){let i=e.get(n);i===void 0&&(i=new Map,e.set(n,i)),i.set(t,r)}}}const uU=.5,aU=3,W9=new WeakMap,j9=new WeakMap,X9=oU();function bn(e,n,t){var d;if(W9.set(e,n),(d=e.parentElement)!=null&&d.classList.contains("resizable-canvas-wrapper"))return;const r=e.width,i=e.height;j9.set(e,{w:r,h:i});const o=t===void 0?1:X9.get(t.stateHost,t.stateKey)??1,u=document.createElement("div");u.className="resizable-canvas-wrapper",e.parentElement.insertBefore(u,e),u.appendChild(e);const a=document.createElement("div");a.className="resizable-canvas-handle",u.appendChild(a),o!==1&&(e.width=Math.round(r*o),e.height=Math.round(i*o)),u.style.width=`${e.width}px`,o!==1&&n();let s=!1,c=0,l=r;a.addEventListener("pointerdown",h=>{var p;s=!0,c=h.clientX,l=e.width,(p=a.setPointerCapture)==null||p.call(a,h.pointerId),h.preventDefault()}),a.addEventListener("pointermove",h=>{var y;if(!s)return;const p=j9.get(e)??{w:r,h:i},v=h.clientX-c,m=Math.max(p.w*uU,Math.min(p.w*aU,l+v)),g=m/p.w,_=Math.round(p.h*g);e.width=Math.round(m),e.height=_,u.style.width=`${e.width}px`,t!==void 0&&X9.set(t.stateHost,t.stateKey,e.width/p.w),(y=W9.get(e))==null||y()});const f=()=>{s=!1};a.addEventListener("pointerup",f),a.addEventListener("lostpointercapture",f)}const hS=18,mS=80,sU=16,Bo=new Set;let Y9=!1;function cU(){Y9||(Y9=!0,document.addEventListener("click",e=>{for(const n of[...Bo])document.contains(n.wrapper)?n.wrapper.contains(e.target)||n.close():Bo.delete(n)}))}function lU(e,n=hS,t=mS){return vS(r=>{r.textContent=e},!1,!0,n,t)}function Dt(e,n=hS,t=mS){return vS(r=>{r.innerHTML=e()},!0,!1,n,t)}function vS(e,n,t,r,i){const o=document.createElement("span");o.className="help-widget",o.style.display="inline-block";const u=document.createElement("button");u.className="help-widget-btn",u.type="button",u.textContent="?",u.setAttribute("aria-label","Help"),u.style.width=`${r}px`,u.style.height=`${r}px`,u.style.fontSize=`${Math.round(r*.6)}px`,u.style.lineHeight=`${r}px`;const a=document.createElement("div");a.className="help-widget-popover",a.hidden=!0;const s=document.createElement("button");s.className="help-widget-close",s.type="button",s.textContent="×",s.setAttribute("aria-label","Close");const c=document.createElement("div");c.className=n?"help-widget-body html-content":"help-widget-body",a.appendChild(s),a.appendChild(c),o.appendChild(u),o.appendChild(a),t&&e(c);const l={wrapper:o,close:()=>d()};function f(){e(c),a.hidden=!1,Bo.add(l);const h=window.innerWidth,p=window.innerHeight,v=Math.round(h*i/100),m=p-2*sU;a.style.width=`${v}px`,a.style.maxHeight=`${m}px`;const g=Math.min(a.offsetHeight,m);a.style.left=`${Math.round((h-v)/2)}px`,a.style.top=`${Math.round((p-g)/2)}px`}function d(){a.hidden=!0,Bo.delete(l)}return u.addEventListener("click",h=>{h.stopPropagation(),a.hidden?f():d()}),s.addEventListener("click",h=>{h.stopPropagation(),d()}),a.addEventListener("keydown",h=>{h.key==="Escape"&&(d(),u.focus())}),o.addEventListener("keydown",h=>{h.key==="Escape"&&!a.hidden&&(d(),u.focus())}),cU(),o}const _S=1,fU="shortcutKeys",dU=new Set(["","date","datetime-local","email","month","number","password","search","tel","text","time","url","week"]),wr=Object.freeze([{id:"toggle_mnames",description:"Toggle longer meaning-carrying names",default_shortcut:"n",enabled:!0},{id:"goto_calculator",description:"Move to Calculator section",default_shortcut:"c",enabled:!0},{id:"goto_top",description:"Move to top of page",default_shortcut:"t",enabled:!0},{id:"goto_next_section",description:"Jump to next section",default_shortcut:"s",enabled:!0},{id:"toggle_srcquotes_inlined",description:"Toggle source quotes inline in the text vs. behind a glyph",default_shortcut:"q",enabled:!0},{id:"toggle_framing_notes",description:"Show/hide all framing notes",default_shortcut:"f",enabled:!0},{id:"toggle_long_text_abbrev",description:"Toggle abbreviation of long text",default_shortcut:"a",enabled:!0},{id:"switch_whose_mode",description:"Switch whose mode (Yours / Adhoc / AI results), restoring its last viewed preset",default_shortcut:"m",enabled:!0},{id:"toggle_settings_shortcuts",description:"Show/hide settings/shortcuts",default_shortcut:"?",enabled:!0}]);function gS(){return wr}function K9(e){return wr.find(n=>n.id===e)}function B2(e){const n=e.trim().toLowerCase();return n===""?{ok:!0,key:n}:[...n].length!==_S?{ok:!1,key:n,error:"Use a single key, or clear the field to disable this shortcut."}:{ok:!0,key:n}}function bS(e){if(!e||typeof e!="object"||Array.isArray(e))return{};const n={};for(const[t,r]of Object.entries(e)){if(typeof r!="string"){console.error(`Ignoring non-string shortcut key for ${t}.`);continue}const i=B2(r);if(!i.ok){console.error(`Ignoring invalid persisted shortcut key for ${t}: ${r}`);continue}n[t]=i.key}return n}function pU(){const e={};for(const n of wr)e[n.id]=n.default_shortcut;return e}function Sr(){const e=bS(cn().shortcutKeys);return{...pU(),...e}}function yS(e,n,t=Sr()){if(n==="")return null;for(const r of gS())if(r.id!==e&&t[r.id]===n)return r.id;return null}function hU(e,n){var a;if(!K9(e))throw new Error(`Unknown shortcut id: ${e}`);const r=B2(n);if(!r.ok)return{ok:!1,key:r.key,error:r.error};const i=Sr(),o=yS(e,r.key,{...i,[e]:r.key});if(o)return{ok:!1,key:r.key,conflictId:o,error:`Already assigned to "${((a=K9(o))==null?void 0:a.description)??o}".`};const u=bS(cn().shortcutKeys);return u[e]=r.key,ou(fU,u),{ok:!0,key:r.key}}function mU(e){if(e.altKey||e.ctrlKey||e.metaKey)return null;const n=e.key.toLowerCase();return[...n].length!==_S?null:n}function vU(e){if(!(e instanceof HTMLElement))return!1;if(e.isContentEditable)return!0;let n=e;for(;n;){if(n.isContentEditable||n.contentEditable==="true")return!0;const t=n.getAttribute("contenteditable");if(t!==null&&t.toLowerCase()!=="false")return!0;n=n.parentElement}return e instanceof HTMLTextAreaElement?!0:e instanceof HTMLInputElement?dU.has(e.type.toLowerCase()):!1}function _U(e){const n=t=>{if(vU(t.target))return;const r=mU(t);if(r===null)return;const i=Sr();for(const o of gS()){if(i[o.id]!==r)continue;const u=e[o.id];if(!u)return;t.preventDefault(),u();return}};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)}const gU=[{aid:"alpoker"},{aid:"mcovidB6",family:"mcovidB"},{aid:"mcovidB7",family:"mcovidB"},{aid:"mcovidB8",family:"mcovidB"},{aid:"mcovidB9",family:"mcovidB"},{aid:"mcovidB10",family:"mcovidB"},{aid:"mcovidB11",family:"mcovidB"},{aid:"mcovidB12",family:"mcovidB"},{aid:"mcovidB13",family:"mcovidB"},{aid:"covid0",family:"cov-origin-ATC"},{aid:"covatc1",family:"cov-origin-ATC"},{aid:"eggsFH1",family:"eggs"},{aid:"eggsFH2",family:"eggs"},{aid:"lhcFXH1",family:"lhc"},{aid:"lhcFXH_SolMax",family:"lhc"},{aid:"lhcFXH_SolMax_Ultra",family:"lhc"},{aid:"simfix",family:"sim"},{aid:"simBetter",family:"sim"}],bU={"cov-origin-ATC":{sequence:[{aid:"covid0",version:"1.0.0"},{aid:"covatc1",version:"2.0.0"}]},mcovidB:{sequence:[{aid:"mcovidB1",version:"0.0.0"},{aid:"mcovidB2",version:"0.0.1"},{aid:"mcovidB3",version:"0.0.2"},{aid:"mcovidB4",version:"0.0.3"},{aid:"mcovidB5",version:"0.0.4"},{aid:"mcovidB6",version:"1.0.0"},{aid:"mcovidB7",version:"2.0.0"},{aid:"mcovidB8",version:"2.1.0"},{aid:"mcovidB9",version:"2.2.0"},{aid:"mcovidB10",version:"2.3.0"},{aid:"mcovidB11",version:"3.0.0"},{aid:"mcovidB12",version:"3.1.0"},{aid:"mcovidB13",version:"4.0.0"},{aid:"mcovidB14",version:"4.1.0"}]},mcovidA:{sequence:[{aid:"mcovidA",version:"0.0.0"},{aid:"mcovidA2",version:"0.0.1"}]},eggs:{sequence:[{aid:"eggsFH1",version:"0.1.0"},{aid:"eggsFH2",version:"0.2.0"}]},lhc:{sequence:[{aid:"lhcFXH1",version:"1.0.0"},{aid:"lhcFXH_SolMax",version:"2.0.0"},{aid:"lhcFXH_SolMax_Ultra",version:"3.0.0"}]},aminds:{sequence:[{aid:"cmindsBareParam1",version:"1.0.0"},{aid:"aminds2",version:"2.0.0"},{aid:"aminds3",version:"3.0.0"}]},sim:{sequence:[{aid:"simfix",version:"0.1.0"},{aid:"simBetter",version:"0.2.0"}]},testE:{sequence:[{aid:"testprob_preE",version:"pre"},{aid:"testprob_postE",version:"post"},{aid:"testprob_postE_extra",version:"postextra"}]}},yU={navList:gU,families:bU},EU="../../data/",wU="/index.ts",ES=Object.assign({"../../data/alpoker/index.ts":()=>Ye(()=>import("./index-BdSD_IWs.js"),[]),"../../data/covatc1/index.ts":()=>Ye(()=>import("./index-RUEBVaus.js"),[]),"../../data/covid0/index.ts":()=>Ye(()=>import("./index-DppDGeVI.js"),[]),"../../data/eggsFH1/index.ts":()=>Ye(()=>import("./index-DzJgs7mA.js"),[]),"../../data/eggsFH2/index.ts":()=>Ye(()=>import("./index-jxHgSX60.js"),[]),"../../data/lhcFXH1/index.ts":()=>Ye(()=>import("./index-Nk9yEXP2.js"),[]),"../../data/lhcFXH_SolMax/index.ts":()=>Ye(()=>import("./index-CioQ-oZC.js"),[]),"../../data/lhcFXH_SolMax_Ultra/index.ts":()=>Ye(()=>import("./index-DAkAkFCw.js"),[]),"../../data/mcovidB10/index.ts":()=>Ye(()=>import("./index-_QS2r6Z_.js"),__vite__mapDeps([0,1])),"../../data/mcovidB11/index.ts":()=>Ye(()=>import("./index-H4AmFyxy.js"),__vite__mapDeps([2,1])),"../../data/mcovidB12/index.ts":()=>Ye(()=>import("./index-DgDGw_Sp.js"),[]),"../../data/mcovidB13/index.ts":()=>Ye(()=>import("./index-J1cXwD2y.js"),[]),"../../data/mcovidB6/index.ts":()=>Ye(()=>import("./index-7chFl3FY.js"),__vite__mapDeps([3,1])),"../../data/mcovidB7/index.ts":()=>Ye(()=>import("./index-vh6nPuAP.js"),__vite__mapDeps([4,1])),"../../data/mcovidB8/index.ts":()=>Ye(()=>import("./index-CyX5Ik3Y.js"),__vite__mapDeps([5,1])),"../../data/mcovidB9/index.ts":()=>Ye(()=>import("./index-B9bl5E9z.js"),__vite__mapDeps([6,1])),"../../data/simBetter/index.ts":()=>Ye(()=>import("./index-DLjfwhdc.js"),[]),"../../data/simfix/index.ts":()=>Ye(()=>import("./index-DwppGuas.js"),__vite__mapDeps([7,1]))});function H2(e){return`${EU}${e}${wU}`}function SU(e){return ES[H2(e)]}function U2(e){return H2(e)in ES}const Mu=yU,wS=(()=>{const e=new Map;for(const[n,{sequence:t}]of Object.entries(Mu.families))t.forEach((r,i)=>e.set(r.aid,{family:n,index:i}));return e})();function $U(){return Mu.navList}function AU(){const e={};for(const[n,{sequence:t}]of Object.entries(Mu.families))e[n]=t;return e}function SS(e){var n;return(n=wS.get(e))==null?void 0:n.family}function J9(e,n,t,r){for(let i=n+t;i>=0&&i<e.length;i+=t){const o=e[i].aid;if(r(o))return o}}function LU(e,n=U2){const t=wS.get(e);if(t===void 0)return;const r=Mu.families[t.family].sequence,i={version:r[t.index].version},o=J9(r,t.index,-1,n);o!==void 0&&(i.prev=o);const u=J9(r,t.index,1,n);return u!==void 0&&(i.next=u),i}const G2=["yours","adhoc","metho"];function V2(e,n){const t=["yours"];return(e.adhocPlainnumEntries.length>0||e.adhocPlaincodeEntries.length>0)&&t.push("adhoc"),n.length>0&&t.push("metho"),t}function $S(e,n,t,r){var o;if(!V2(t,r).includes(n))return null;if(n==="yours")return e.lastYoursWhose;if(n==="adhoc")return z9(e.lastAdhocWhose,"adhoc",t)?e.lastAdhocWhose:CU(t);const i=Yw(e.whose,e.selectedTaskGroupPoolId,r);if(i===null)throw new Error("whoseForMode: methodical mode available with no task group");return z9(e.lastMethoWhose,"metho",t)&&((o=er(e.lastMethoWhose,r))==null?void 0:o.group.pool_id)===i?e.lastMethoWhose:Kw(i,r)}function IU(e,n,t){const r=V2(n,t);if(r.length<2)return null;const i=on(pe(e.whose).source);if(!G2.includes(i))throw new Error(`nextWhoseForModeCycle: unrecognized whose ${JSON.stringify(e.whose)}`);const o=r.indexOf(i),u=r[(o+1)%r.length];return $S(e,u,n,t)}function CU(e){for(const n of nE)if(tE(e,n).length>0)return`adhoc-${n}:0`;throw new Error("firstAdhocWhose: adhoc mode reached with no adhoc entries")}function z9(e,n,t){return!e||on(pe(e).source)!==n?!1:je(e,t)!==null}const Tt={point:"point",bounds:"bounds",sample:"distr"},TU="response",RU="timeline-nav",W2="whose-mode-toggle",AS={yours:"Yours",adhoc:"Adhoc",metho:"AI"},j2="yours-fixfree-toggle",kU="jprob-selector",X2="sticky-bar",LS="--sticky-bar-h",Ou="options-controls",IS="options-expand-btn",Y2="options-panel",ir="options-panel-open",CS="visible",TS="⚙︎",Z9="Settings",RS="jprob-selector-select",kS="error-console-btn",NS="view-url-btn";function NU(e,n,t,r,i,o){BU(e),MU(i),qU(e.ui.whose,o),VU(e,t),xU(n),DU(r)}function MU(e){const n=document.getElementById(W2);if(n){if(e.available.length<=1){n.hidden=!0,n.innerHTML="";return}n.hidden=!1,n.innerHTML=G2.filter(t=>e.available.includes(t)).map(t=>`<button class="mode-radio-btn${t===e.active?" active":""}" data-whose-mode="${t}">${AS[t]}</button>`).join("")}}function OU(){const e=document.getElementById(W2);return e!==null&&!e.hidden}function qU(e,n){const t=document.getElementById(j2);if(t){if(!n){t.hidden=!0,t.innerHTML="";return}t.hidden=!1,t.innerHTML=eS(e)}}function PU(){const e=document.getElementById(j2);return e!==null&&!e.hidden}function FU(e,n,t,r,i=U2){var c;const o=new Set(e.map(l=>l.aid).filter(i)),u=[],a=new Set;let s=t;for(const l of e){const f=l.family;if(f===void 0){o.has(l.aid)&&u.push({label:l.aid,value:l.aid});continue}if(a.has(f))continue;a.add(f);const h=(c=[...n[f]??[]].reverse().find(p=>o.has(p.aid)))==null?void 0:c.aid;h!==void 0&&(u.push({label:f,value:h}),f===r&&(s=h))}return{options:u,selectedValue:s}}function DU(e,n=$U(),t=AU(),r=U2){const i=document.getElementById(kU);if(!i)return;const{options:o,selectedValue:u}=FU(n,t,e.currentAid,e.currentFamily,r),a=o.some(l=>l.value===u);if(o.length===0||o.length===1&&a){i.hidden=!0,i.innerHTML="";return}i.hidden=!1;const s=a?"":'<option value="" disabled selected>switch</option>',c=o.map(l=>`<option value="${l.value}"${l.value===u?" selected":""}>${l.label}</option>`).join("");i.innerHTML=`<select id="${RS}" class="jprob-selector-select" title="Switch to another problem">${s}${c}</select>`}function xU(e){const n=document.getElementById(RU);if(!n)return;const{prev:t,next:r,version:i}=e;if(t===void 0&&r===void 0&&i===void 0){n.hidden=!0,n.innerHTML="";return}n.hidden=!1;const o=[];t!==void 0&&o.push(`<button class="timeline-nav-btn" data-timeline-target="${t}" title="Previous version">◀</button>`),o.push(`<span class="timeline-version">${i??""}</span>`),r!==void 0&&o.push(`<button class="timeline-nav-btn" data-timeline-target="${r}" title="Next version">▶</button>`),n.innerHTML=o.join("")}function BU(e){const n=document.getElementById(Ou);if(!n)return;const t=n.classList.contains(ir);let r=`<button class="options-expand-btn${t?" active":""}" id="${IS}" type="button" aria-label="${Z9}" title="${Z9}" aria-expanded="${t}">${TS}</button>`;r+=`<div class="${Y2}${t?` ${CS}`:""}">`,r+=jU(e),r+=`<div class="options-buttons-row"><button id="${NS}" class="g-btn" title="Copy a link to this view (and put it in the address bar)">url</button> <button id="keymap-btn" class="g-btn">keymap</button> <button id="${kS}" class="g-btn">error console</button> <button id="save-all-data-btn" class="g-btn">save all data</button> <button id="load-all-data-btn" class="g-btn">load all data</button></div>`,r+="</div>",n.innerHTML=r,t&&n.classList.add(ir)}function MS(){const e=document.getElementById(Ou);return(e==null?void 0:e.classList.contains(ir))??!1}function K2(e){const n=document.getElementById(Ou);if(!n||n.classList.contains(ir)===e)return;n.classList.toggle(ir,e);const t=n.querySelector(".options-expand-btn"),r=n.querySelector(`.${Y2}`);t&&(t.classList.toggle("active",e),t.setAttribute("aria-expanded",String(e))),r&&r.classList.toggle(CS,e)}function HU(){K2(!MS())}function UU(){K2(!0)}function OS(){K2(!1)}function GU(){const e=document.getElementById(Ou),n=document.getElementById(X2);if(!e||!n)return null;const r=(e.classList.contains(ir)?e.querySelector(`.${Y2}`):null)??n;return{left:e.getBoundingClientRect().left,bottom:r.getBoundingClientRect().bottom}}function VU(e,n){const t=document.getElementById("response-type-toggle");t&&qS(t,e,n,null)}function qS(e,n,t,r){const i=[];for(const[u,a]of Object.entries(Tt)){const s=u===n.ui.inputMode?" active":"",c=t[u]?"":" hidden";i.push(`<button class="atog-btn${s}${c}" data-mode="${u}">${a}</button>`)}const o=r===null?"":`<span>${r}</span>`;e.innerHTML=o+i.join("")}function qr(e){return`pref-${e}`}const WU=new Set(["inputMode"]);function jU(e){const n=[];for(const t of Vh)if(!WU.has(t.id)){if(t.type==="boolean"){const r=t.id,i=e.ui[r]?" checked":"";n.push(`<div class="options-pref-row"><label for="${qr(t.id)}" class="option-label">${t.description}</label><input id="${qr(t.id)}" class="option-checkbox pref-checkbox" type="checkbox" data-pref="${t.id}"${i}></div>`)}else if(t.type==="integer"){const i=cn()[t.id]??t.default,o=t.min===void 0?"":` min="${t.min}"`,u=t.step===void 0?"":` step="${t.step}"`;n.push(`<div class="options-pref-row"><label for="${qr(t.id)}" class="option-label">${t.description}</label><input id="${qr(t.id)}" class="pref-number-input" type="number" data-pref-int="${t.id}" value="${i}"${o}${u}></div>`)}}return n.join("")}const XU=`<p>Joint dependence lets you say how your distributions move <em>together</em>, beyond what each one says on its own. You express it as <b>named latents</b>: each latent is one shared influence, described in your own words, with a signed <b>loading</b> on each quantity it touches.</p>
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
<p>Say which one you mean. And note that dependence does not only widen: loading a ratio&#39;s numerator and its denominator in the same direction makes them rise and fall together, which <em>narrows</em> that ratio. That is sometimes exactly the belief you hold — but check the independent-vs-joint comparison, rather than reasoning from the signs alone.</p>`,PS={joint_dependence:XU,"srcquote-explainer":"Text in this style is source material related to the entity above it."},or=`<b>${TS} settings</b>`,YU="joint_dependence";function KU(){return PS[YU]}function JU(){return"<p>Version numbers are semantic versioning inspired, incremented according to:</p><ul><li><b>1st/major</b>: Improved and clean enough over previous major version to run a full set of AI trials.</li><li><b>2nd/minor</b>: Improvements/fixes affecting semantics</li><li><b>3rd/patch</b>: Everything else</li></ul>"}function io(e){return e?`<b>${X(e)}</b>`:"<i>(unbound)</i>"}const zU={toggle_mnames:"toggle between short and long names for some defined entities",goto_top:"jump to top of the page",goto_calculator:"jump to the Calculator section",switch_whose_mode:"switch between <b>Yours</b> / <b>Adhoc</b> / <b>AI results</b> modes, restoring the last viewed preset in each",toggle_srcquotes_inlined:`toggle source quotes inlined in the text (mirroring what AI agents see when source quotes are enabled) vs. accessible by clicking the <button class="srcquote-glyph" type="button" tabindex="-1">❝</button> buttons. This is a view setting only — it never changes what a preset's estimator actually read`,toggle_framing_notes:"show or hide all framing notes at once, without disturbing which ones the problem itself enables",goto_next_section:"jump to the next top-level section, wrapping from the last back to the first",toggle_long_text_abbrev:"abbreviate or unabbreviate every long block of text at once — the same switch as the <b>Abbreviate long text</b> preference",toggle_settings_shortcuts:`show the ${or} dropdown together with this shortcut list; press it again with both showing to hide both`};function ZU(){return`<li>When relevant (not all Adhoc / AI-results presets have all response modes), you can switch between estimation response modes <b>${Tt.point}</b> | <b>${Tt.bounds}</b> | <b>${Tt.sample}</b>. For each subjective variable (the cards in the <b>Estimation</b> section) they mean:<ul><li><b>point</b>: A single real value. Use for low-effort estimation.</li><li><b>bounds</b>: A real interval given as <code>low high</code>. Use to incorporate flat uncertainty, without any sampling interpretation. The Calculator will show the interval each compute formula can range over, given your intervals: "≅ [low, high]" means the shown interval is exactly that range; "⫇ [low, high]" means it is an outer enclosure — the true range may be narrower, but never wider. Displayed endpoints are rounded outward, so rounding also never narrows a shown interval.</li><li><b>${Tt.sample}</b>: A belief distribution; Monte Carlo sampling evaluates. This is the advanced mode. The ${or} dropdown on the left side of the sticky bar has parameters for controlling the number of iterations, in case the defaults make your experience too slow. When in distribution mode, click the help icon in any Estimation card to learn what you can put in the input fields. The Calculator section has a redundant single input box for the same data; useful for copy-pasting from a read-only Adhoc or AI result.</li></ul></li>`}function FS(){return"<b>fix</b> requires setting each parameter to one of its allowed values in the <b>Parameters</b> section, and your estimates apply to that one setting. <b>free</b> opens a code editor in which you write a function giving your estimates for every allowed parameter combination at once."}function QU(){return G2.map(e=>`<b>${AS[e]}</b>`).join(" | ")}function eG(e,n){const t=Sr(),r=[];n.whoseModeToggle&&r.push(`<p>The ${QU()} buttons switch between entering your own estimations and interacting with preset responses; the ${io(t.switch_whose_mode)} shortcut cycles through the same modes. For more control, scroll down to the Calculator section (${io(t.goto_calculator)} shortcut) to switch between:</p><ul><li>entering your own estimations (<b>Yours</b>), and when available,</li><li>viewing adhoc prepared estimations (<b>Adhoc…</b> dropdown), or</li><li>viewing AI agent estimation trial results (<b>AI results…</b> dropdown).</li></ul>`),r.push("<h4>Sticky bar</h4><ul>"),r.push("<li>On the far right of the sticky bar, there's a dropdown for switching to a different judgement problem (hidden when there are no others).</li>"),SS(e.aid)!==void 0&&r.push("<li>This judgement problem is part of a development timeline exposition sequence. The ◀ and/or ▶ buttons move backward and forward in the timeline.</li>"),n.yoursFixFreeToggle&&r.push(`<li><b>fix</b> | <b>free</b>: ${FS()}</li>`),n.exampleFoldControls&&r.push("<li><b>open</b> unfolds all examples, <b>close</b> folds all. <b>peek</b> saves your fold state and temporarily unfolds all examples, and <b>unpeek</b> restores your fold state.</li>"),n.exampleFoldControlsOffInSettings&&r.push(`<li>Turn on <b>${X(Jr("showGlobalExampleControls"))}</b> in the ${or} dropdown for sticky-bar buttons that fold or unfold all examples at once.</li>`),r.push(ZU()),r.push("</ul>"),r.push(`<h4>Keyboard shortcuts</h4><p>There are just a few, which you can customize by clicking the <b>keymap</b> button in the sticky bar's ${or} dropdown. Currently:</p>`),r.push("<ul>");for(const i of wr){const o=zU[i.id]??X(i.description);r.push(`<li>${io(t[i.id])} : ${o}</li>`)}return r.push("</ul>"),r.join("")}function nG(){const e=Object.values(gt).filter(i=>!i.hasTruncWindow),n=Object.entries(gt).filter(([,i])=>i.hasTruncWindow),t=e.map(i=>`<li><code>${X(i.signature)}</code> — ${X(i.note)}</li>`),r=n.map(([i])=>`<code>${X(i)}(…)</code>`);return`<p>Enter your belief distribution over this variable in one of three forms:</p><ul><li><b>Point mass</b>: <code>pointmass(x)</code> — all probability mass at <code>x</code>.</li><li><b>Distribution family</b> (preferred when one fits your belief), e.g. <code>lognormal(-4.2, 1.3)</code>. Available families:<ul>${t.join("")}</ul>Every family is automatically truncated to the variable's allowed range and renormalized, so e.g. <code>normal(mu, sigma)</code> on a probability variable means a normal truncated to [0, 1]. The ${r.join(", ")} variants take two extra trailing arguments <code>lo, hi</code> — an explicit truncation window — for when your belief has its own truncation. Most important for a heavy-tailed family on an unbounded-range variable (e.g. a Student-t on a log-odds variable), where automatic truncation is a no-op.</li><li><b>Piecewise linear density</b> (fully general): space-separated pairs <code>(x1 y1) (x2 y2) …</code>, minimum 2. x values are sorted positions spanning your uncertainty, anywhere in the variable's allowed range; y values are unnormalized density heights in [0, 1].</li></ul>`}function tG(e,n){const t=Sr(),r=[];return r.push("<p><b>This help text changes based on Yours/Adhoc/Whose mode.</b></p>"),_i(pe(n).source)&&(r.push("<p>To see detailed results for an entry, click the <b>pin</b> checkbox.</p>","<p><b>CONFUSING UI NOTE</b>: when Model × Version × Effort is unchecked, the slider does load a different record, but the changes are too far above your viewport to see them without scrolling.</p>","<p>An AI's plain text reasoning about one subjective variable shows in that variable's own card, and its notes about the response as a whole in the <b>Response Notes</b> section. Both show the trial the cards' <b>trial</b> selector points at.</p>","<p>To read the code that trial wrote, click <b>View code</b> beside the <b>Estimation</b> heading.</p>"),e.form.length>0&&r.push("<p>To explore compute formula results other than the main conclusion, there's a drop down below next to the <b>formulas</b> / <b>raw responses</b> radio buttons.</p>","<p>Use the <b>stats display</b> dropdown to switch between seeing probabilities as percentages or as odds.</p>")),e.has_cparams()&&De(n)&&r.push(`<p><b>fix</b> | <b>free</b> toggle (next to <b>Yours</b>): ${FS()}</p>`),De(n)?r.push(`<p>To modify a preset, switch to the <b>Adhoc</b> or <b>AI results</b> view (${io(t.switch_whose_mode)} shortcut), select an entry from the dropdown to the right of this help icon, and find the <b>Copy to Yours</b> button.</p><p>From scratch: Suggest starting with <b>point</b> response mode, then try <b>bounds</b>. If you're experienced or courageous, try <b>${Tt.sample}</b> and start with <code>tri(low, peak, hi)</code> or <code>uniform(low, high)</code> lines. For full syntax of distribution inputs accepted, find the help icon in any of <b>Estimation</b> cards above.</p>`):iE(pe(n).source)&&r.push(`<p>To modify this preset for your own estimation, find the <b>Copy to Yours</b> button below.</p><p>For advanced users, in <b>${Tt.sample}</b> mode, there is a second type of <b>Copy to Yours</b> button inside the <b>Joint-dependence specification</b> section (latent factor copula), when the entry states one.</p>`),r.join("")}function rG(e){const n=X(Jr("mcItersPerClickPerPlot")),t=X(Jr("mcItersInitialPerPlot")),r=e.itersPerTarget.toLocaleString(),i=["<p>The <b>+</b> button above pools another block of Monte&nbsp;Carlo draws into this plot and redraws it. Draws accumulate — nothing already sampled is thrown away — so the plot starts cheap and you click until its shape stops moving.</p>"];return e.targetCount===1?i.push(`<p>Each click adds <b>${r}</b> draws to this plot`+(e.pooledSampleCount===null?".</p>":` (pooled so far: ${e.pooledSampleCount.toLocaleString()}).</p>`)):i.push(`<p>Each click adds <b>${r}</b> draws to <i>each</i> of the ${e.targetCount.toLocaleString()} plotted points/cells. The setting is a budget for the whole plot, divided equally among the targets it draws, so a plot over a wider axis gets fewer draws per point per click than a single density does — same cost per click, spread thinner.</p>`),e.pooledSampleCount===null?i.push("<p>This plot's button stays yellow: it displays a mean per point/cell rather than a distribution, so the green convergence indicator — which reads a distribution's quantiles — does not apply. Means converge as 1/&radic;n; a few clicks go a long way.</p>"):e.converged?i.push(`<p><b>Green</b>: with ${e.convergedMinSamples.toLocaleString()} or more pooled draws, every quantile of the displayed distribution is pinned to within ${e.displayEpsilon} probability mass at ${e.confidencePercent}% confidence (a distribution-free Dvoretzky&ndash;Kiefer&ndash;Wolfowitz bound). Green is not a stop sign: further clicks keep sharpening the curve.</p>`):i.push(`<p><b>Yellow &rarr; green</b>: the button turns green at ${e.convergedMinSamples.toLocaleString()} pooled draws, the point where every quantile of the displayed distribution is pinned to within ${e.displayEpsilon} probability mass at ${e.confidencePercent}% confidence (a distribution-free Dvoretzky&ndash;Kiefer&ndash;Wolfowitz bound).</p>`),i.push(`<p>To change how much a click adds, open ${or} in the bar at the top of the page and edit <b>${n}</b>. <b>${t}</b> sets what a plot draws before you click at all.</p>`),i.join("")}function iG(e){const n=X(Jr("mcItersPerClickPerPlot")),t=X(Jr("mcItersInitialPerPlot")),r=`<b>${e.initialIters.toLocaleString()}</b>`,i=e.storedCurveDrawn?`<p>This plot is drawn from a <b>precomputed</b> curve: the result generator sampled it once, with a far larger draw budget than a browser would spend, and stored the shape. Nothing is being sampled here.</p><p>The <b>&#9654;</b> button above runs ${r} live Monte&nbsp;Carlo draws in your browser from the same estimates, and draws them on the same axis beside the stored curve; both summaries stay on screen so you can compare the numbers. `:`<p>The numbers beside this plot are <b>precomputed</b>: the result generator sampled this quantity once, with a far larger draw budget than a browser would spend, and stored its summary, but no curve to draw. Nothing is being sampled here.</p><p>The <b>&#9654;</b> button above runs ${r} live Monte&nbsp;Carlo draws in your browser from the same estimates and plots them; the precomputed summary stays on screen so you can compare the numbers. `,o=e.storedCurveDrawn?"<p>Expect the live curve to be the rougher of the two at first — it is the same distribution with fewer draws behind it. ":"<p>Expect the live numbers to stray a little from the precomputed ones at first — they describe the same distribution with fewer draws behind them. ";return i+`The button then becomes the ordinary <b>+</b> accumulate control, adding <b>${e.itersPerTarget.toLocaleString()}</b> draws per click until the live shape stops moving.</p>`+o+`A difference that survives many clicks is worth a closer look.</p><p>Both draw counts are settings: open ${or} in the bar at the top of the page and edit <b>${t}</b> and <b>${n}</b>.</p>`}const ai="mc-accumulate-btn",DS="mc-activate-live-btn",Ho="mc-accumulate-help",oG="mc-converged",oo=.05,xr=.01;function uG(e){if(!Number.isInteger(e)||e<1)throw new Error(`distributionCount must be a positive integer, got ${e}`);return Math.ceil(Math.log(2*e/oo)/(2*xr*xr))}const xS=16;function qu(e,n,t,r,i=1){var f,d;const o=e.parentElement;if(!(o!=null&&o.classList.contains("resizable-canvas-wrapper"))){console.warn("attachMcAccumulateButton: canvas is not wrapped by makeResizable");return}(f=o.querySelector(`.${ai}`))==null||f.remove(),(d=o.querySelector(`.${Ho}`))==null||d.remove();const u=r.itersPerTarget,a=uG(i),s=t!==null&&t>=a,c=document.createElement("button");c.className=ai+(s?` ${oG}`:""),c.dataset.mcPoolToken=n,c.textContent="+",c.title=t===null?`Pool ${u.toLocaleString()} more MC samples into every plotted point/cell.`:`Pool ${u.toLocaleString()} more MC samples into this plot (n=${t.toLocaleString()}). `+(s?`Green: every displayed quantile is within ${xr} probability mass at ${(1-oo)*100}% confidence; further clicks keep sharpening.`:`Turns green when every displayed quantile is within ${xr} probability mass at ${(1-oo)*100}% confidence.`),o.appendChild(c);const l=Dt(()=>rG({itersPerTarget:u,targetCount:r.targetCount,pooledSampleCount:t,converged:s,convergedMinSamples:a,displayEpsilon:xr,confidencePercent:(1-oo)*100}),xS);l.classList.add(Ho),o.appendChild(l)}function aG(e,n,t,r,i){var s,c;const o=e.parentElement;if(!(o!=null&&o.classList.contains("resizable-canvas-wrapper"))){console.warn("attachLiveMcActivationButton: canvas is not wrapped by makeResizable");return}(s=o.querySelector(`.${ai}`))==null||s.remove(),(c=o.querySelector(`.${Ho}`))==null||c.remove();const u=document.createElement("button");u.className=`${ai} ${DS}`,u.dataset.mcLiveActivationToken=n,u.textContent="▶",u.title=`Run ${t.toLocaleString()} live Monte Carlo draws in your browser and `+(i?"overlay them on the precomputed curve.":"plot them beside the precomputed numbers.")+" Nothing is sampled until you ask.",o.appendChild(u);const a=Dt(()=>iG({initialIters:t,itersPerTarget:r.itersPerTarget,storedCurveDrawn:i}),xS);a.classList.add(Ho),o.appendChild(a)}const sG=256,tt=new Map,Uo=new Map;let cG=1;function lG(e){const n=$t(e),t=tt.get(n);if(t!==void 0)return tt.delete(n),tt.set(n,t),t;const r={token:`mclive-${cG++}`,activated:!1};for(tt.set(n,r),Uo.set(r.token,r);tt.size>sG;){const i=tt.keys().next().value;Uo.delete(tt.get(i).token),tt.delete(i)}return r}function fG(e){const n=Uo.get(e);return n===void 0?!1:(n.activated=!0,!0)}function dG(){tt.clear(),Uo.clear()}const pG=1;function BS(e,n){const t=Math.max(1,n),r=i=>Math.max(pG,Math.floor(i/t));return{mcIters:r(e.mcItersInitialPerPlot),mcItersPerClick:r(e.mcItersPerClickPerPlot)}}function ur(e){return BS(e,1)}const hG="no finite mean (the tail is too heavy for one)";function si(e,n,t,r,i){return'<div class="result-main">'+(i===""?"":`${i} = `)+`mean ≈ <span class="hl">${Fe(e.mean,n,t,r)}</span>, median ≈ <span class="hl">${Fe(e.median,n,t,r)}</span></div><div class="result-detail">90% interval: [${Fe(e.p5,n,t,r)}, ${Fe(e.p95,n,t,r)}]</div>`}function mG(e,n,t){return{valueHtml:`mean <span class="derived-value">${Fe(e.mean,n,t,"monte-carlo")}</span>, median <span class="derived-value">${Fe(e.median,n,t,"monte-carlo")}</span>`,detailHtml:`<span class="derived-detail">· 90% interval [${Fe(e.p5,n,t,"monte-carlo")}, ${Fe(e.p95,n,t,"monte-carlo")}]</span>`}}function vG(e,n,t,r){const i=u=>Fe(u,n,t,"deterministic"),o=e.mean===null?`<span class="hl">${hG}</span>`:`mean = <span class="hl">${i(e.mean)}</span>`;return'<div class="result-main">'+(r===""?"":`${r}: `)+`${o}, median = <span class="hl">${i(e.median)}</span></div><div class="result-detail">90% interval: [${i(e.p5)}, ${i(e.p95)}]</div>`}const J2="Your beliefs specification yields infinite or undefined values. Consider using non-zero numbers.",_G="≅",gG="⫇",HS="The interval computed for this formula from the bounds responses is unbounded on both sides, i.e. carries no information. Point and distribution results are unaffected.";function US(e,n){return e===-1/0&&n===1/0}function GS(e){return e==="tight"?_G:gG}const Go="from point estimates";function Br(e){return e.some(Number.isNaN)?"undefined":e.some(n=>!Number.isFinite(n))?"infinite":null}function Vo(){return`<p class="arg-warning">${J2}</p>`}function bG(e,n,t,r){const i=Io(e,"floor"),o=Io(n,"ceil");return`[${Fe(i,t,r)}, ${Fe(o,t,r)}]`}function yG(e,n,t,r){const i=(e+n)/2;return Number.isNaN(i)?"undefined":Fe(i,t,r)}function Wo({labelHtml:e,value:n,typeHighlevel:t,statsDisplay:r,labelPrefix:i="",detail:o}){const u=Br([n]);if(u==="undefined")throw new Error(J2);return`<div class="result-main">${X(i)}${e} = <span class="hl">${Fe(n,t,r)}</span></div>`+(o===void 0?"":`<div class="result-detail">${X(o)}</div>`)+(u==="infinite"?Vo():"")}function z2({labelHtml:e,lo:n,hi:t,tightness:r,typeHighlevel:i,statsDisplay:o,midpointDetailSuffix:u=""}){if(n>t)throw new Error(`Invalid calculated bounds: lo=${n} is greater than hi=${t}`);const a=Br([n,t]);if(a==="undefined")throw new Error(J2);if(US(n,t))return`<div class="result-detail">${X(HS)}</div>`;const s=Io(n,"floor"),c=Io(t,"ceil"),l=a==="infinite"&&r==="tight";return`<div class="result-main">${e} ${GS(r)} [<span class="hl">${Fe(s,i,o)}</span>, <span class="hl">${Fe(c,i,o)}</span>]</div><div class="result-detail">midpoint: ${yG(n,t,i,o)}${X(u)}</div>`+(l?Vo():"")}function ci(e,n){if(typeof e!="number"||Number.isNaN(e))throw new Error(`${n}: expected a number, got ${JSON.stringify(e)}`);return e}function bh(e,n){if(!Array.isArray(e)||e.length!==2)throw new Error(`${n}: expected [lo, hi], got ${JSON.stringify(e)}`);const t=ci(e[0],`${n} lo`),r=ci(e[1],`${n} hi`);if(t>r)throw new Error(`${n}: lo=${t} is greater than hi=${r}`);return[t,r]}function VS(e,n){return ci(e.point[n],`Code result point data for ${JSON.stringify(n)}`)}function WS(e,n){return bh(e.bounds[n],`Code result bounds data for ${JSON.stringify(n)}`)}function jS(e,n,t){var o;const r=(o=e.compform_point_val)==null?void 0:o[n];if(r!==void 0)return ci(r,`Code result computed point value for ${n}`);if(!t)throw new Error(`Code result has no computed point value or form implementation for ${n}`);const i=t.params.map(u=>VS(e,u));return ci(t.point(i),`Directly evaluated code result point value for ${n}`)}function XS(e,n,t){var u,a;const r=(u=e.compform_bounds_val)==null?void 0:u[n];if(r!==void 0){const s=(a=e.compform_bounds_tightness)==null?void 0:a[n];return{interval:bh(r,`Code result computed bounds value for ${n}`),tightness:s==="tight"?"tight":"loose"}}if(!t)throw new Error(`Code result has no computed bounds value or form implementation for ${n}`);if(!t.bounds)return null;if(!t.boundsTightness)throw new Error(`form ${n} has a bounds implementation but no boundsTightness — regenerate form_fns`);const i=t.params.map(s=>WS(e,s)),o=t.bounds(i);return{interval:bh([o.lo,o.hi],`Directly evaluated code result bounds value for ${n}`),tightness:t.boundsTightness}}const YS=[{name:"low",abbreviation:"L"},{name:"medium",abbreviation:"M"},{name:"high",abbreviation:"H"}],Ct=[...YS,{name:"xhigh",abbreviation:"XH"},{name:"max",abbreviation:"MAX"}],Q9=[{model:"haiku",abbreviation:"h",agentCli:"claudecode",efforts:YS},{model:"sonnet",abbreviation:"s",agentCli:"claudecode",efforts:Ct},{model:"opus",abbreviation:"o",agentCli:"claudecode",efforts:Ct},{model:"fable",abbreviation:"f",agentCli:"claudecode",efforts:Ct},{model:"luna",abbreviation:"gl",agentCli:"codex",efforts:Ct},{model:"terra",abbreviation:"gt",agentCli:"codex",efforts:Ct},{model:"sol",abbreviation:"gs",agentCli:"codex",efforts:Ct},{model:"astra",abbreviation:"ga",agentCli:"codex",efforts:Ct}],KS=":";function Pu(e){const n=Q9.findIndex(t=>t.model===e);if(n<0)throw new Error(`unknown model ${JSON.stringify(e)}. Add it to MODEL_EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return{config:Q9[n],order:n}}function EG(e){return Pu(e).config.agentCli}function Z2(e,n){const{config:t}=Pu(e),r=t.efforts.findIndex(i=>i.name===n);if(r<0)throw new Error(`unknown effort ${JSON.stringify(n)} for model ${JSON.stringify(e)}. Add it to MODEL_EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return{config:t.efforts[r],order:r}}function wG(e,n){return e===n?0:e<n?-1:1}function Q2(e,n,t){if(n.length===0)throw new Error(`makeModelVersionEffortKey: empty version not supported (model=${e}).`);if(t===null)throw new Error(`makeModelVersionEffortKey: null effort not supported (model=${e}, version=${n}). Null-effort records do not participate in the model/version/effort sweep; pooled aggregates are handled separately.`);return[e,encodeURIComponent(n),t].join(KS)}function $r(e){const n=e.split(KS);if(n.length!==3||n.some(u=>u.length===0))throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(e)}`);const[t,r,i]=n;let o;try{o=decodeURIComponent(r)}catch{throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(e)}`)}if(o.length===0)throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(e)}`);return{model:t,version:o,effort:i}}function SG(e){const{model:n,version:t,effort:r}=$r(e);return`${n} ${t} ${r}`}function $G(e){const{model:n,version:t,effort:r}=$r(e),{config:i}=Pu(n),{config:o}=Z2(n,r);return`${i.abbreviation}${t}${o.abbreviation}`}function AG(e){const{model:n,version:t}=$r(e);return`${n} ${t}`}function LG(e){const{model:n,effort:t}=$r(e);return Z2(n,t).config.abbreviation}function IG(e){const n=Array.from(e,t=>{const r=$r(t),i=Pu(r.model).order,o=Z2(r.model,r.effort).order;return{key:t,parsed:r,modelOrder:i,effortOrder:o}});return n.sort((t,r)=>t.modelOrder-r.modelOrder||wG(t.parsed.version,r.parsed.version)||t.effortOrder-r.effortOrder),n.map(({key:t})=>t)}const em=`<div class="lloads-spec-pointer">Each trial's joint-dependence specification is shown in <a href="#${Ge.ESTIMATION}-section">Estimation</a>.</div>`;function nm(e,n,t,r={}){if(e===void 0)return{hasDependence:!1,specHtml:""};const i=n.svar_entries().map(s=>s.bareName);let o,u=!1;if(e===null)o='<div class="lloads-independent-trial">No named latents; sampled independently.</div>';else{const s=bi(e,i);if(s!==null)throw new Error(s);u=yi(e),o=CG(e,i,n,t,r.offerCopyToYours??!1)}const a=u&&!(r.keepFolded??!1);return{hasDependence:u,specHtml:`<details class="lloads-spec-view"${a?" open":""}><summary>Joint-dependence specification</summary><div class="lloads-spec-body">${o}</div></details>`}}function JS(e,n){const t=n.svar_entries().map(i=>i.bareName);let r=!1;for(const i of e){if(i.lloads===null||i.lloads===void 0)continue;const o=bi(i.lloads,t);if(o!==null)throw new Error(o);r||(r=yi(i.lloads))}return r}function CG(e,n,t,r,i){const o=fi(t);if(o.length!==n.length)throw new Error(`joint-dependence disclosure has ${n.length} eligible variables but ${o.length} display labels`);const u=new Map(n.map((s,c)=>[s,Ee(o[c],r)])),a=e.latents.map(s=>{const c=Object.entries(s.loadings).map(([l,f])=>{const d=u.get(l);if(d===void 0)throw new Error(`joint-dependence disclosure has no display label for loaded variable ${l}`);return`<li><span class="lloads-svar-label">${d}</span>: <span class="lloads-loading">${RG(f)}</span></li>`}).join("");return`<article class="lloads-latent"><div class="lloads-latent-name">${X(s.name)}</div><div class="lloads-latent-description">${X(s.description)}</div><ul class="lloads-loadings">${c}</ul></article>`}).join("");return TG(e,i)+a}function TG(e,n){return n?`<div class="lloads-copy-row"><button class="copy-to-yours-btn lloads-copy-to-yours-btn" type="button" data-lloads-spec="${ae(JSON.stringify(e))}" title="Copy this joint-dependence specification into your editable Yours inputs">Copy to Yours</button></div>`:""}function RG(e){if(Object.is(e,-0)||e===0)return"0";const n=Math.abs(e).toPrecision(6).replace(/\.?0+$/,"");return e>0?`+${n}`:`−${n}`}function zS(e){switch(e){case"series":return{independent:{color:_B,bandFill:gB},joint:{color:Iw,bandFill:Cw}};case"stored":return{independent:{color:Oo,bandFill:null},joint:{color:Oo,bandFill:Tw}};case"live":return{independent:{color:qo,bandFill:null},joint:{color:qo,bandFill:Rw}}}}const ZS="Independent",QS="Stated joint";function tm(e){const n=(t,r)=>{switch(r){case"series":return t;case"stored":return`${t} (precomputed)`;case"live":return`${t} (live MC)`}};return e.flatMap(t=>{const r=zS(t);return[{label:n(ZS,t),color:r.independent.color,dashed:!0},{label:n(QS,t),color:r.joint.color,dashed:!1}]})}function jo(e){const{comparison:n,typeHighlevel:t,statsDisplay:r,targetLabelHtml:i}=e,o=e.canvasId===void 0?"":D2(e.canvasId,e.legend??tm(["series"]));return`<div class="result-label">Joint-dependence comparison (${e.provenanceDetail})</div><div class="dependence-comparison density-result-row"><div class="dependence-comparison-stats density-result-text"><div class="dependence-series-label dependence-series-independent">${ZS}</div>`+si(n.independent,t,r,"monte-carlo",i)+`<div class="dependence-series-label dependence-series-joint">${QS}</div>`+si(n.joint,t,r,"monte-carlo",i)+`</div>${o}</div>`}function Fu(e){const n=e.box.querySelector(`#${e.canvasId}`);if(n===null)return!1;const t=[];for(const o of e.layers){const u=zS(o.palette),a=e7(o.comparison.independent,u.independent,!0),s=e7(o.comparison.joint,u.joint,!1);if(a===null||s===null)return!1;t.push(a,s)}if(t.length===0)return!1;const r=Ft(e.typeHighlevel),i=()=>ii(n,t,r);i(),bn(n,i,{stateHost:e.box,stateKey:e.resizeStateKey}),O2(n,t,e.typeHighlevel);for(const{comparison:o}of e.layers){const{independent:u,joint:a}=o;if(u.mcPoolToken!==a.mcPoolToken)throw new Error("CRN-paired density results do not share one MC pool token");a.mcPoolToken!==null&&qu(n,a.mcPoolToken,a.samples.length,{itersPerTarget:e.mcItersPerClick,targetCount:1},t.length)}return!0}function e7(e,n,t){const r=e.samples??e.densityCurve;return r===null?null:{source:r,p5:e.p5,p95:e.p95,color:n.color,dashed:t,bandFill:n.bandFill}}const kG=5,NG="rgb(59, 130, 246)",MG="Dots show each trial's own distribution mean.",OG="Lines show each trial's own distribution mean.",qG=" Each comes from joint or independent sampling according to that trial's stated coupling.",Hr="code-density",e$="code-line",n$="code-heatmap";function PG(e){return e.startsWith("form:")?e.slice(5):e}function t$(e,n,t){return e.form.filter(r=>J7(r,n)).map(r=>{const i=(t==null?void 0:t[r.id])??null;return{kind:"formula",id:r.id,bareId:PG(r.id),typeHighlevel:(i==null?void 0:i.typeHighlevel)??r.type_highlevel,isConclusion:r.id===e.conclusion_form_or_none(),formEntry:i}})}function r$(e){return e.svar_entries().map(({bareName:n,decl:t})=>({kind:"raw_response",bareName:n,typeHighlevel:t.type_highlevel,isConclusion:!1}))}function FG(e,n,t){const r=t$(e,n.ui.inputMode,t),i=r$(e);if(n.ui.codePlotTargetKind==="raw_response"&&i.length>0)return i.find(s=>s.bareName===n.ui.codePlotRawResponseName)??i[0];if(r.length===0)return i[0]??null;const u=e.conclusion_form_or_none(),a=n.ui.codePlotFormulaId||u;return r.find(s=>s.id===a)??r.find(s=>s.id===u)??r[0]}function DG(e){return{key:e.id,formEntry:e.formEntry}}function i$(e,n){if(n===null)throw new Error(`Distribution view for ${e.id} has no sample evaluator`);return n}function o$(e,n,t){if(n.formEntry===null)throw new Error(`Distribution view for ${e.id} requires its generated form implementation`);const r=li(n.formEntry,t);return{paramKeys:r.params,combine:r.point}}function rm(e,n,t){return n.kind==="raw_response"?VS(e,n.bareName):jS(e,n.id,n.formEntry&&li(n.formEntry,t))}function xG(e,n,t){return n.kind==="raw_response"?{interval:WS(e,n.bareName),tightness:"tight"}:XS(e,n.id,n.formEntry&&li(n.formEntry,t))}function BG(e){if(e.length===0)return null;const n=[...e].sort((i,o)=>i-o),t=i=>{const o=Math.min(n.length-1,Math.max(0,Math.round(i*(n.length-1))));return n[o]},r=e.reduce((i,o)=>i+o,0)/e.length;return{count:e.length,mean:r,median:t(.5),p5:t(.05),p95:t(.95)}}function Du(e,n){return BG(e.trials.map(t=>rm(t,n,e.cparams)))}function ln(e,n){for(const t of e.cparam_combos){let r=!0;for(const i of e.cparam_names)if(t.cparams[i]!==n[i]){r=!1;break}if(r)return t}return null}function u$(e,n,t){const r=new Set;for(const i of e.cparam_combos){const o=i.cparams[n];o!==void 0&&r.add(o)}return t?t.filter(i=>typeof i!="boolean"&&r.has(i)):Array.from(r)}function im(e,n){return n[e]!==!1}function a$(e,n){let t=0;for(const r of e)n[r]===!1&&t++;return t}function HG(e,n){return e.filter(t=>n[t]===!1)}function s$(e,n){var t;if(n.kind==="formula")return(t=ku(q2(e,n.id,n.isConclusion),Ru(e.trials)))==null?void 0:t.stats}function UG(e,n){return n.kind!=="formula"?null:Xw(q2(e,n.id,n.isConclusion))}function GG(e,n){var t;if(!(n.kind!=="formula"||!n.isConclusion))return(t=ku(e.precomputed,Ru([e])))==null?void 0:t.stats.mean}function xu(e,n,t){var o;if(((o=n.formEntry)==null?void 0:o.sampleStage)!==void 0)throw new Error(`Distribution view for ${n.id} is not supported for formulas with E[·] barriers (v1)`);const{paramKeys:r,combine:i}=o$(n,t,e.cparams);for(const u of e.trials){const a=r.filter(s=>!bw(u.sample[s]));if(a.length>0)throw new Error(`Code distribution MC for ${t.key}: a trial lacks sample data for parameter(s) ${JSON.stringify(a)}`)}return{key:t.formEntry===null?t.key:G7(t.key,t.formEntry,e.cparams),params:r,typeHighlevel:n.typeHighlevel,point:i,bounds:null,boundsTightness:null}}function c$(e,n,t){const r=Hn([e],"sample",t);if(r.mode!=="sample")throw new Error(`Exact distribution for ${n.bareName} needs sample-mode inputs`);const i=r.trials[0].specs[n.bareName];if(i===void 0)throw new Error(`Exact distribution for ${n.bareName}: a trial has no sample response`);return ei(i,r.ranges[n.bareName])}function l$(e,n,t){return e.trials.map(r=>c$(r,n,t))}function VG(e,n){return n.kind==="raw_response"?!0:n.isConclusion?e.cparam_combos.some(t=>t.trials.some(r=>r.precomputed!==void 0)):!1}function WG(e,n,t,r){if(n.kind==="raw_response"){const i=Ow(c$(e,n,t));if(i===null){r&&(r.encountered=!0);return}return i}if(!n.isConclusion)throw new Error(`Per-trial distribution mean for ${n.id} is not available`);return GG(e,n)}function jG(e,n,t,r,i){const o=xu(e,n,t);return Un(o,Hn(e.trials,"sample",r),{onIncompleteTrial:"error",mcIters:i.mcIters,mcItersPerClick:i.mcItersPerClick})}function XG(e,n,t,r,i){const o=xu(e,n,t);return Qx(o,Hn(e.trials,"sample",r),{onIncompleteTrial:"error",mcIters:i.mcIters,mcItersPerClick:i.mcItersPerClick})}function YG(e,n,t,r,i,o,u){if(n.kind==="raw_response"){const c=qw(l$(e,n,r));if(c===null){u&&(u.encountered=!0);return}return{mean:c}}const a=s$(e,n);if(a)return a;const s=XG(e,n,i$(n,t),r,i);return s.mcPoolToken!==null&&(o==null||o.add(s.mcPoolToken)),s}function KG(e,n,t,r){let i=t?r:1;for(const o of e)i*=(n.get(o)??[]).length;return i}function JG(e){if(e===void 0||e==="probability")return[0,1]}function zG(e){return e==="probability"?[0,1]:void 0}function Mi(e,n,t,r){return cE(n.ui.cparamValues[e],t==null?void 0:t.default_value,r)}function ZG(e,n,t,r){const i=um(e,n,r.ui.modelEffortSweepScope);if(f$(i).length>=2&&!r.ui.modelEffortPinned||a$(e.cparam_names,r.ui.cparamPinned)>0)return null;const a={};for(const s of e.cparam_names){const c=t.find_cparam(s),l=u$(e,s,c==null?void 0:c.allowed_values);a[s]=Mi(s,r,c,l)}return ln(e,a)}const QG="model × version × effort",eV="effort";function Bu(e){return e==="effort"?eV:QG}function Ar(e,n){return n==="effort"?LG(e):$G(e)}function om(e,n){return e.aggregate==="model_size__version"?{model:e.model,version:e.version,poolId:e.pool_id}:n!==null&&e.model===n.model&&e.version===n.version&&e.pool_id===n.poolId?n:null}function um(e,n,t){const r=n.filter(o=>o.effort!==null&&o.pool_id===e.pool_id),i=om(e,t);return i===null?r:r.filter(o=>o.model===i.model&&o.version===i.version)}function f$(e){const n=new Set;for(const t of e)t.effort!==null&&n.add(Q2(t.model,t.version,t.effort));return IG(n)}function Oi(e,n){for(const t of e)if(t.effort!==null&&Q2(t.model,t.version,t.effort)===n)return t;return null}function nV(e){if(e.length===0)return;const n=e[0].cparam_names;for(let t=1;t<e.length;t++){const r=e[t].cparam_names;if(r.length!==n.length||!r.every((o,u)=>o===n[u]))throw new Error(`validateRecsCparamCompat: incompatible cparam_names: ${JSON.stringify(n)} vs ${JSON.stringify(r)}. Cannot sweep across model/version/effort with mismatched cparam shapes.`)}}function d$(e,n,t,r,i){const o=new Map;for(let u=0;u<t.length;u++){const a={...r,[n]:t[u]},s=ln(e,a);if(s)for(const c of s.trials){const l=i(c,s);if(l===void 0)continue;const f=oE(c),d=o.get(f),h={x:u,y:l};d?d.push(h):o.set(f,[h])}}return[...o.entries()].sort(([u],[a])=>u-a).map(([u,a])=>({points:a,label:`trial ${u+1}`}))}function tV(e){return(n,t)=>rm(n,e,t.cparams)}function rV(e,n,t,r,i,o,u){const a=t.map(String);if(i==="average"){const s=[],c=[];for(let l=0;l<t.length;l++){const f={...r,[n]:t[l]},d=ln(e,f);if(!d)continue;const h=o?o(d):d.precomputed[gn];if(h&&(s.push({x:l,y:h.mean}),u!==void 0))for(const p of d.trials){const v=u(p,d);v!==void 0&&c.push({x:l,y:v})}}return{series:[{points:s,label:"avg"}],xLabels:a,scatterPoints:c}}if(u===void 0)throw new Error("Separate mode of a distribution sweep needs a per-trial mean source");return{series:d$(e,n,t,r,u),xLabels:a,scatterPoints:[]}}function iV(e,n,t,r,i,o,u){const a=t.map(String),s=i.map(String),c=[];for(let l=0;l<i.length;l++){const f=[];for(let d=0;d<t.length;d++){const h={...o,[n]:t[d],[r]:i[l]},p=ln(e,h);if(!p){f.push(null);continue}const v=u?u(p):p.precomputed[gn];f.push((v==null?void 0:v.mean)??null)}c.push(f)}return{cells:c,xLabels:a,yLabels:s,xAxisLabel:n,yAxisLabel:r}}function oV(e,n,t,r,i,o){const u=t.map(String);if(i==="average"){const a=[];for(let s=0;s<t.length;s++){const c={...r,[n]:t[s]},l=ln(e,c);if(!l)continue;const f=Du(l,o);f&&a.push({x:s,y:f.mean})}return{series:[{points:a,label:"avg"}],xLabels:u,scatterPoints:[]}}return{series:d$(e,n,t,r,tV(o)),xLabels:u,scatterPoints:[]}}function uV(e,n,t,r,i,o,u){const a=t.map(String),s=i.map(String),c=[];for(let l=0;l<i.length;l++){const f=[];for(let d=0;d<t.length;d++){const h={...o,[n]:t[d],[r]:i[l]},p=ln(e,h),v=p?Du(p,u):null;f.push((v==null?void 0:v.mean)??null)}c.push(f)}return{cells:c,xLabels:a,yLabels:s,xAxisLabel:n,yAxisLabel:r}}function p$(e,n){const t=new Map;for(const r of n){const i=AG(e[r.x]),o=t.get(i);o?o.push(r):t.set(i,[r])}return Array.from(t,([r,i])=>({points:i,label:r,...NH}))}function aV(e,n,t,r="model_version_effort",i,o){const u=n.map(c=>Ar(c,r)),a=[],s=[];for(let c=0;c<n.length;c++){const l=Oi(e,n[c]);if(!l)continue;const f=ln(l,t);if(!f)continue;const d=i?i(f):f.precomputed[gn];if(d&&(a.push({x:c,y:d.mean}),o!==void 0))for(const h of f.trials){const p=o(h,f);p!==void 0&&s.push({x:c,y:p})}}return{series:p$(n,a),xLabels:u,scatterPoints:s}}function sV(e,n,t,r,i,o="model_version_effort",u){const a=r.map(String),s=n.map(l=>Ar(l,o)),c=[];for(let l=0;l<n.length;l++){const f=[],d=Oi(e,n[l]);for(let h=0;h<r.length;h++){if(!d){f.push(null);continue}const p={...i,[t]:r[h]},v=ln(d,p);if(!v){f.push(null);continue}const m=u?u(v):v.precomputed[gn];f.push((m==null?void 0:m.mean)??null)}c.push(f)}return{cells:c,xLabels:a,yLabels:s,xAxisLabel:t,yAxisLabel:Bu(o)}}function cV(e,n,t,r,i="model_version_effort"){const o=n.map(a=>Ar(a,i)),u=[];for(let a=0;a<n.length;a++){const s=Oi(e,n[a]);if(!s)continue;const c=ln(s,t);if(!c)continue;const l=Du(c,r);l&&u.push({x:a,y:l.mean})}return{series:p$(n,u),xLabels:o,scatterPoints:[]}}function lV(e,n,t,r,i,o,u="model_version_effort"){const a=r.map(String),s=n.map(l=>Ar(l,u)),c=[];for(let l=0;l<n.length;l++){const f=[],d=Oi(e,n[l]);for(let h=0;h<r.length;h++){if(!d){f.push(null);continue}const p={...i,[t]:r[h]},v=ln(d,p),m=v?Du(v,o):null;f.push((m==null?void 0:m.mean)??null)}c.push(f)}return{cells:c,xLabels:a,yLabels:s,xAxisLabel:t,yAxisLabel:Bu(u)}}function fV(e,n,t,r){var l;const i=t$(e,n.ui.inputMode,r),o=r$(e);if(i.length===0&&o.length===0)return"";const u=(t==null?void 0:t.kind)??"formula",a=(t==null?void 0:t.kind)==="formula"?t.id:n.ui.codePlotFormulaId||e.conclusion_form_or_none(),s=(t==null?void 0:t.kind)==="raw_response"?t.bareName:n.ui.codePlotRawResponseName||(((l=o[0])==null?void 0:l.bareName)??"");let c='<div class="code-plot-target-controls">';if(e.form.length>0&&(c+='<div class="code-plot-target-kind">',c+=`<label><input type="radio" name="code-plot-target-kind" class="code-plot-target-kind-radio" value="formula"${u==="formula"?" checked":""}${i.length===0?" disabled":""}> formulas</label>`,c+=`<label><input type="radio" name="code-plot-target-kind" class="code-plot-target-kind-radio" value="raw_response"${u==="raw_response"?" checked":""}${o.length===0?" disabled":""}> raw responses</label>`,c+="</div>"),u==="formula")if(i.length>1){c+='<select class="code-plot-formula-select" aria-label="Plot formula">';for(const f of i)c+=`<option value="${ae(f.id)}"${f.id===a?" selected":""}>${X(f.bareId)}</option>`;c+="</select>"}else i.length===1&&(c+=`<span class="code-plot-target-single">${X(i[0].bareId)}</span>`);else if(o.length>1){c+='<select class="code-plot-raw-response-select" aria-label="Plot raw response">';for(const f of o)c+=`<option value="${ae(f.bareName)}"${f.bareName===s?" selected":""}>${X(f.bareName)}</option>`;c+="</select>"}else o.length===1&&(c+=`<span class="code-plot-target-single">${X(o[0].bareName)}</span>`);return c+="</div>",c}function h$(e,n,t,r,i,o,u){if(!i||!o)return"";const a={};for(const s of e.cparam_names){const c=r.find_cparam(s),l=t.get(s)??[];if(l.length===0)return"";const f=Mi(s,n,c,l);if((c!==void 0?Qo(c.allowed_values):typeof f=="string"?"string":"number")==="string"){a[s]=f;continue}const h=Number(f);if(!Number.isFinite(h))return"";a[s]=h}return i(a)?"":`<p class="arg-warning">${u(o)}</p>`}function m$(e,n,t,r){const i=t===null?[null,...n]:n,o=t===null?0:i.indexOf(t),u=t===null?e.label:r==="effort"?$r(t).effort:SG(t);return{sliderKeys:i,mveIdx:o,currentLabel:u}}const dV="Except for Model × Version × Effort slider (when available), these controls change only this plot.",pV="cparam-controls-scope-note";function hV(e,n,t,r,i,o,u,a,s,c,l,f,d){const h=h$(n,r,i,t,l,f,d);let p=fV(t,r,s,c);if(p+=h+'<div class="cparam-controls">',o.length>=2){const{sliderKeys:m,mveIdx:g,currentLabel:_}=m$(n,o,u,a),y=r.ui.modelEffortPinned;p+='<div class="cparam-row model-version-effort-row">',p+=`<label class="cparam-label">${a==="effort"?"Effort":"Model × Version × Effort"}</label>`,p+='<input type="range" class="model-version-effort-slider" ',p+=`min="0" max="${m.length-1}" step="1" `,p+=`value="${g>=0?g:0}" `,p+=`data-keys='${X(JSON.stringify(m))}'>`,p+=`<span class="cparam-value-label">${X(_)}</span>`,p+='<label class="cparam-pin-label"><input type="checkbox" ',p+='class="model-version-effort-pin-checkbox"',p+=`${y?" checked":""}> pin</label>`,p+="</div>"}let v=0;for(const m of n.cparam_names){const g=t.find_cparam(m),_=i.get(m)??[];if(_.length===0)continue;const y=Mi(m,r,g,_),b=_.indexOf(y),E=im(m,r.ui.cparamPinned),A=(g==null?void 0:g.longname)??m;p+='<div class="cparam-row">',p+=`<label class="cparam-label">${X(A)}</label>`,p+=`<input type="range" class="cparam-slider" data-cparam="${m}" `,p+=`min="0" max="${_.length-1}" step="1" value="${b>=0?b:0}" `,p+=`${E?"":"disabled "}`,p+=`data-values='${X(JSON.stringify(_))}'>`,p+=`<span class="cparam-value-label">${X(String(y))}</span>`,p+='<label class="cparam-pin-label"><input type="checkbox" class="cparam-pin-checkbox" ',p+=`data-cparam="${m}"${E?" checked":""}> pin</label>`,p+="</div>",v++}v>0&&(p+=`<p class="${pV}">${X(dV)}</p>`),p+="</div>",e.innerHTML=p}function Ki(e){return console.warn(`code viewer controls sync: ${e}; falling back to a full controls rebuild`),!1}function mV(e,n,t,r,i,o,u,a,s,c,l){const f=e.querySelector(".cparam-controls");if(!f)return Ki("no existing .cparam-controls block");const d=h$(n,r,i,t,s,c,l),h=e.querySelector(":scope > .arg-warning");d===""?h==null||h.remove():h?h.outerHTML=d:f.insertAdjacentHTML("beforebegin",d);const p=f.querySelector(".model-version-effort-row");if(o.length>=2!==(p!==null))return Ki("model/version/effort row does not match the current sweep structure");if(p){const{mveIdx:m,currentLabel:g}=m$(n,o,u,a),_=p.querySelector(".model-version-effort-slider"),y=p.querySelector(".cparam-value-label"),b=p.querySelector(".model-version-effort-pin-checkbox");if(!_||!y||!b)return Ki("model/version/effort row is missing expected controls");_.value=String(m>=0?m:0),y.textContent=g,b.checked=r.ui.modelEffortPinned}for(const m of n.cparam_names){const g=i.get(m)??[];if(g.length===0)continue;const _=t.find_cparam(m),y=Mi(m,r,_,g),b=g.indexOf(y),E=f.querySelector(`.cparam-slider[data-cparam="${m}"]`),A=E==null?void 0:E.closest(".cparam-row"),L=A==null?void 0:A.querySelector(".cparam-value-label"),R=A==null?void 0:A.querySelector(".cparam-pin-checkbox");if(!E||!L||!R)return Ki(`cparam row for ${m} is missing expected controls`);const T=im(m,r.ui.cparamPinned);E.value=String(b>=0?b:0),E.disabled=!T,L.textContent=String(y),R.checked=T}return!0}function vV(e){return`<div class="sweep-mode-toggle"><button class="sweep-mode-btn${e==="average"?" active":""}" data-sweep-mode="average">Average</button><button class="sweep-mode-btn${e==="separate"?" active":""}" data-sweep-mode="separate">Separate</button></div>`}const am='<div class="code-info">No data for this parameter combination.</div>';function sm(e,n,t){if(e.kind==="formula"&&e.isConclusion){const u=nS(n,t);if(u!==null)return u}let r,i;if(e.kind==="raw_response")r=`svar:${e.bareName}`,i=e.bareName;else{const u=n.form.find(a=>a.id===e.id);if(!u)throw new Error(`Code plot formula ${e.id} is not in the template`);r=z7(e.id,u.sexpr),i=e.bareId}const o=Z7(r);return Ee(n.get_display_expr(o)??i,t)}function _V(e,n,t,r,i,o,u){const a=ln(n,t);if(!a){e.innerHTML=am;return}if(!r){e.innerHTML='<div class="code-info">No point plot target is available.</div>';return}if(a.trials.length===0)throw new Error("Code point result has no trials for the selected parameter combination");const s=a.trials.map(d=>rm(d,r,a.cparams)),c=s.reduce((d,h)=>d+h,0)/s.length,l=r.typeHighlevel,f=s.length===1?Go:`per trial: ${s.map(d=>Fe(d,l,u.ui.probAsOdds)).join(", ")}`;e.innerHTML=Wo({labelHtml:sm(r,i,o),value:c,typeHighlevel:l,statsDisplay:u.ui.probAsOdds,labelPrefix:s.length===1?"":"mean ",detail:f})}function gV(e,n,t,r,i,o,u){const a=ln(n,t);if(!a){e.innerHTML=am;return}if(!r){e.innerHTML='<div class="code-info">No bounds plot target is available.</div>';return}if(!jh(n)||a.trials.length!==1)throw new Error(`Code bounds display requires one trial; record count=${n.count}, selected combo trials=${a.trials.length}`);const s=xG(a.trials[0],r,a.cparams);if(!s){e.innerHTML=`<div class="code-info">${X(Ri)}</div>`;return}const[c,l]=s.interval;e.innerHTML=z2({labelHtml:sm(r,i,o),lo:c,hi:l,tightness:s.tightness,typeHighlevel:r.typeHighlevel,statsDisplay:u.ui.probAsOdds})}function n7(e,n,t,r,i,o,u,a,s,c,l){v$(e,n,t,r,i,o,u,a,s,c,l,!1)}function t7(e,n,t,r,i,o,u,a,s,c,l){v$(e,n,t,r,i,o,u,a,s,c,l,!0)}function v$(e,n,t,r,i,o,u,a,s,c,l,f){var ie;Xh(t);const d=FG(i,u,s),h=new Map;for(const B of t.cparam_names){const j=i.find_cparam(B),V=u$(t,B,j==null?void 0:j.allowed_values);h.set(B,V)}const p=om(t,u.ui.modelEffortSweepScope),v=um(t,r,u.ui.modelEffortSweepScope),m=p===null?"model_version_effort":"effort",g=f$(v),_=g.length>=2,y=t.effort!==null?Q2(t.model,t.version,t.effort):null,b=_&&!u.ui.modelEffortPinned;b&&nV(v),f&&mV(e,t,i,u,h,g,y,m,c,l,B=>Ee(B,o))||hV(e,t,i,u,h,g,y,m,d,s,c,l,B=>Ee(B,o));const A=a$(t.cparam_names,u.ui.cparamPinned),L=HG(t.cparam_names,u.ui.cparamPinned),R=A+(b?1:0),T=u.ui.inputMode,$=u.ui.codeSweepMode,w={};for(const B of t.cparam_names)if(im(B,u.ui.cparamPinned)){const j=i.find_cparam(B),V=h.get(B)??[];w[B]=Mi(B,u,j,V)}const S=(d==null?void 0:d.kind)==="formula"&&d.isConclusion,I=(d==null?void 0:d.typeHighlevel)??i.config.conclusion_type_highlevel,C=S?JG(i.config.conclusion_type_highlevel):zG(I),P=I==="probability"?kG:void 0;if(T==="bounds"){R>0?n.innerHTML='<div class="code-info">Pin every axis to display code-response bounds.</div>':gV(n,t,w,d,i,o,u);return}let M=null;if(T==="sample"){if(!d){n.innerHTML='<div class="code-info">No distribution plot target is available.</div>';return}if(d.kind==="formula"&&((ie=d.formEntry)==null?void 0:ie.sampleStage)!==void 0){n.innerHTML='<div class="code-info">Distribution view is not yet supported for formulas containing E[·] aggregation.</div>';return}d.kind==="formula"&&(M=DG(d))}const H=T==="sample"?j7(i.svar_entries()):null,q=KG(L,h,b,g.length),F=BS(a,q),O=new Set,Z={encountered:!1},U=d!==null&&H!==null?B=>YG(B,d,M,H,F,O,Z):void 0,K=H!==null&&d!==null&&VG(t,d)?B=>WG(B,d,H,Z):void 0,Q=T;if(R===0)if(T==="point")_V(n,t,w,d,i,o,u);else{if(d===null||H===null)throw new Error("Sample-mode code density routing has no resolved sample target");LV(n,t,u,a,w,d,M,H,i,sm(d,i,o))}else if(R===1)b?TV(n,v,g,w,P,d,Q,m,U,K):IV(n,t,L[0],h,w,$,P,d,Q,U,K);else if(R===2)if(b){const B=L[0],j=h.get(B)??[];RV(n,v,g,B,j,w,C,d,Q,m,U)}else CV(n,t,L,h,w,C,d,Q,U);else{const B=t.cparam_names.length-(b?1:2);n.innerHTML=`<div class="code-info"><p>Pin at least ${B} parameter${B===1?"":"s"} to visualize results.</p><p>Currently ${A} cparam${A===1?"":"s"} unpinned${b?" + model/version/effort axis":""}.</p></div>`}if(O.size>0){const B=n.querySelector("#code-line-canvas, #code-heatmap-canvas");B&&qu(B,ww([...O]),null,{itersPerTarget:F.mcItersPerClick,targetCount:q})}Z.encountered&&n.insertAdjacentHTML("beforeend",SV)}const bV="Precomputed",yV="Live MC",EV=["No precomputed plot here.","▶ draws it with live Monte Carlo."];function r7(e,n,t,r,i){if(t.formEntry===null)return null;const o=Zx(xu(e,n,t),Hn(e.trials,"sample",r),{onIncompleteTrial:"error",mcIters:i.mcIters,mcItersPerClick:i.mcItersPerClick});return lG([...o,"target",t.key])}function i7(e,n,t,r,i,o){if(n!==null&&n.mcPoolToken!==null){qu(e,n.mcPoolToken,n.sampleCount,{itersPerTarget:r.mcItersPerClick,targetCount:1},i);return}t!==null&&aG(e,t.token,r.mcIters,{itersPerTarget:r.mcItersPerClick},o)}function o7(e,n){const t=()=>EB(n,EV);t(),bn(n,t,{stateHost:e,stateKey:Hr})}const wV='<div class="code-info">The stated dependence below does not change this view: coupling describes how responses move together, not how any one of them is distributed on its own.</div>',SV='<div class="code-info">Some points are not plotted: the response there has no finite mean, so there is no value to place on this axis. Its distribution view still shows an exact median and interval.</div>';function $V(e,n,t,r){const i=e.map(o=>`${Fe(o.x,t,r,"deterministic")} (${o.count} of ${n})`).join(", ");return`<div class="code-info">Point-mass responses: ${X(i)}. Each is drawn as a spike whose height is its share of the responses, not a density.</div>`}function AV(e,n,t,r,i,o,u){const a=l$(n,t,r),s=Fw(a),c=Pw(a),l=Dw(a),f=t.typeHighlevel,d=i.ui.probAsOdds,h=a.length,p=[`<div class="result-label">Exact (${h} agent trial${h===1?"":"s"})</div>`,'<div class="density-result-row"><div class="density-result-text">'+vG(s,f,d,o)+'</div><canvas id="code-density-canvas" width="400" height="200"></canvas></div>'];c.length>0&&p.push($V(c,h,f,d)),u&&(p.push(wV),p.push(em)),e.innerHTML=p.join("");const v=e.querySelector("#code-density-canvas");if(!v)return;const m=xw(l,f),g=[s.p5,s.p95],_=()=>oi(v,l,m,g);_(),bn(v,_,{stateHost:e,stateKey:Hr}),Ww(v,l,m,f,g)}function LV(e,n,t,r,i,o,u,a,s,c){const l=ln(n,i);if(!l){e.innerHTML=am;return}const f=o.typeHighlevel,d=[],h=JS(l.trials,s);if(o.kind==="raw_response"){AV(e,l,o,a,t,c,h);return}const p=i$(o,u),v=ur(r),m=t.ui.probAsOdds,g=`${l.trials.length} agent trial${l.trials.length===1?"":"s"}`;if(h){const I=UG(l,o),C=I===null?null:w2(I),P=C!==null&&C.independent.densityCurve!==null&&C.joint.densityCurve!==null?C:null,M=C===null?null:r7(l,o,p,a,v),q=C===null||((M==null?void 0:M.activated)??!1)?S2(xu(l,o,p),Hn(l.trials,"sample",a),{onIncompleteTrial:"error",mcIters:v.mcIters,mcItersPerClick:v.mcItersPerClick}):null,F=[];P!==null&&F.push({comparison:P,palette:"stored"}),q!==null&&F.push({comparison:q,palette:F.length===0?"series":"live"});const O=tm(F.map(U=>U.palette)),Z=F.length>0||M!==null;if(C!==null&&d.push(jo({comparison:C,typeHighlevel:f,statsDisplay:m,targetLabelHtml:c,canvasId:Z?"code-density-canvas":void 0,legend:O,provenanceDetail:`precomputed, ${g}`})),q!==null&&d.push(jo({comparison:q,typeHighlevel:f,statsDisplay:m,targetLabelHtml:c,canvasId:C===null?"code-density-canvas":void 0,legend:O,provenanceDetail:`live Monte Carlo, n=${q.joint.samples.length.toLocaleString()}`})),d.push(em),e.innerHTML=d.join(""),F.length>0&&Fu({box:e,canvasId:"code-density-canvas",layers:F,typeHighlevel:f,resizeStateKey:Hr,mcItersPerClick:v.mcItersPerClick}),q===null){const U=e.querySelector("#code-density-canvas");U&&(F.length===0&&o7(e,U),i7(U,null,M,v,F.length*2,P!==null))}return}const _=s$(l,o),y=p.formEntry!==null;!y&&_===void 0&&o$(o,p,l.cparams);const b=_===void 0?null:kw(_),E=_!==void 0&&y?r7(l,o,p,a,v):null,L=_===void 0||((E==null?void 0:E.activated)??!1)?jG(l,o,p,a,v):null,R=b!==null||L!==null||E!==null,T=b===null||L===null?[]:[{label:bV,color:Oo,dashed:!1},{label:yV,color:qo,dashed:!1}],$=T.length===0?'<canvas id="code-density-canvas" width="400" height="200"></canvas>':D2("code-density-canvas",T);_!==void 0&&d.push(`<div class="result-label">Precomputed (independent, ${g})</div>`+u7(si(_,f,m,"monte-carlo",c),R?$:"")),L!==null&&d.push(`<div class="result-label">Live MC (independent, n=${L.samples.length.toLocaleString()})</div>`+u7(si(L,f,m,"monte-carlo",c),_===void 0?$:"")),e.innerHTML=d.join("");const w=e.querySelector("#code-density-canvas");if(w===null)return;const S=Ft(f);if(b!==null){const I=[b];L!==null&&I.push({source:L.samples,p5:L.p5,p95:L.p95,color:qo,dashed:!1,bandFill:Rw});const C=()=>ii(w,I,S);C(),bn(w,C,{stateHost:e,stateKey:Hr}),O2(w,I,f)}else if(L!==null){const I=L.samples,C=()=>ri(w,I,L.p5,L.p95,S);C(),bn(w,C,{stateHost:e,stateKey:Hr}),Vw(w,I,L.p5,L.p95,f)}else o7(e,w);i7(w,L===null?null:{mcPoolToken:L.mcPoolToken,sampleCount:L.samples.length},E,v,(b===null?0:1)+(L===null?0:1),b!==null)}function u7(e,n){return`<div class="density-result-row"><div class="density-result-text">${e}</div>${n}</div>`}function _$(e){return e.length===0?{}:{scatterOverlay:{points:e,color:NG}}}function g$(e,n){const t=n.kind==="formula"?qG:"";return`<div class="code-info" style="margin-top: 6px;">${e}${t}</div>`}function b$(e,n){return e.length===0||n===null?"":g$(MG,n)}function IV(e,n,t,r,i,o,u,a,s,c,l){const f=r.get(t)??[],d=s==="sample",h=!d||l!==void 0,p=n.count>1&&h,v=p?o:"average",{series:m,xLabels:g,scatterPoints:_}=a===null?{series:[],xLabels:f.map(String),scatterPoints:[]}:d?rV(n,t,f,i,v,c,l):oV(n,t,f,i,v,a);let y='<div class="code-plot-container">';y+='<canvas id="code-line-canvas" class="code-plot-canvas" width="800" height="500"></canvas>',p&&(y+=vV(v),v==="separate"?y+=d&&a!==null?g$(OG,a):'<div class="code-info" style="margin-top: 6px;">Separate mode shows per-trial point values.</div>':d||(y+='<div class="code-info" style="margin-top: 6px;">Average mode uses point values only.</div>')),y+=b$(_,a),y+="</div>",e.innerHTML=y;const b=e.querySelector("#code-line-canvas");if(b){const E={xLabels:g,xAxisLabel:t,...u===void 0?{}:{yRangePaddingPercent:u},..._$(_)};Do(b,m,E),bn(b,()=>Do(b,m,E),{stateHost:e,stateKey:e$})}}function CV(e,n,t,r,i,o,u,a,s){const c=t[0],l=t[1],f=r.get(c)??[],d=r.get(l)??[],h=a==="sample",p=h?iV(n,c,f,l,d,i,s):u?uV(n,c,f,l,d,i,u):{cells:[],xLabels:f.map(String),yLabels:d.map(String),xAxisLabel:c,yAxisLabel:l};o&&(p.valueRange=o);const{width:v,height:m}=x2(p);let g='<div class="code-plot-container">';g+=`<canvas id="code-heatmap-canvas" class="code-plot-canvas" width="${v}" height="${m}"></canvas>`,h||(g+='<div class="code-info" style="margin-top: 6px;">Cells show average point values.</div>'),g+="</div>",e.innerHTML=g;const _=e.querySelector("#code-heatmap-canvas");_&&(xo(_,p),bn(_,()=>xo(_,p),{stateHost:e,stateKey:n$}))}function TV(e,n,t,r,i,o,u,a,s,c){const l=u==="sample",{series:f,xLabels:d,scatterPoints:h}=l?aV(n,t,r,a,s,c):o?cV(n,t,r,o,a):{series:[],xLabels:t.map(m=>Ar(m,a)),scatterPoints:[]};let p='<div class="code-plot-container">';p+='<canvas id="code-line-canvas" class="code-plot-canvas" width="800" height="500"></canvas>',l||(p+='<div class="code-info" style="margin-top: 6px;">Average mode uses point values only.</div>'),p+=b$(h,o),p+="</div>",e.innerHTML=p;const v=e.querySelector("#code-line-canvas");if(v){const m={xLabels:d,xAxisLabel:Bu(a),...i===void 0?{}:{yRangePaddingPercent:i},..._$(h)};Do(v,f,m),bn(v,()=>Do(v,f,m),{stateHost:e,stateKey:e$})}}function RV(e,n,t,r,i,o,u,a,s,c,l){const f=s==="sample",d=f?sV(n,t,r,i,o,c,l):a?lV(n,t,r,i,o,a,c):{cells:[],xLabels:i.map(String),yLabels:t.map(g=>Ar(g,c)),xAxisLabel:r,yAxisLabel:Bu(c)};u&&(d.valueRange=u);const{width:h,height:p}=x2(d);let v='<div class="code-plot-container">';v+=`<canvas id="code-heatmap-canvas" class="code-plot-canvas" width="${h}" height="${p}"></canvas>`,f||(v+='<div class="code-info" style="margin-top: 6px;">Cells show average point values.</div>'),v+="</div>",e.innerHTML=v;const m=e.querySelector("#code-heatmap-canvas");m&&(xo(m,d),bn(m,()=>xo(m,d),{stateHost:e,stateKey:n$}))}function cm(e,n){return e>0?Math.max(0,Math.min(n,e-1)):0}function kV(e,n){return e<2?wo(0):n.kind==="mix"?au:wo(cm(e,n.recordTrialIndex))}function ot(e,n){return kV(Uu(e,n),e.ui.resultTrialSelection)}function Hu(e,n){return!n||De(e.ui.whose)?null:je(e.ui.whose,n)}function lm(e,n){return Array.from({length:Yh(e)},(t,r)=>n(r))}function Uu(e,n){const t=Hu(e,n);return t?Yh(t):0}function y$(e,n){const t=Hu(e,n);return t?lm(t,r=>mk(t,r)):[]}function fm(e,n){return y$(e,n).map(t=>t==null?void 0:t.reasoning)}function NV(e,n){const t=Hu(e,n);return t?lm(t,r=>vk(t,r)):[]}function dm(e,n,t){return ln(e,pE(n,t))}function pm(e,n,t){const r=je(n.ui.whose,t);if(!r)return[];const{source:i}=pe(n.ui.whose);if(i==="metho-richcode"||i==="adhoc-plaincode"){const o=r,u=dm(o,e,n);return Array.from({length:Yh(o)},(a,s)=>u?uE(u.trials,s):void 0)}return i==="adhoc-plainnum"?r.trials:[]}function E$(e,n){const t=Hu(e,n);return t?lm(t,r=>_k(t,r)??{}):void 0}const MV=new vn({html:!1,linkify:!0,breaks:!0}),OV="estimator-text";function w$(e,n){try{e.innerHTML=MV.render(n)}catch{e.textContent=n}}function S$(e,n){const t=document.createElement("div");return t.classList.add(OV,n),w$(t,e),t}const Gu="auto-expand",qV="estimator-text-input",PV="estimator-text-form",FV=1;function $$(e){const n=document.createElement("div");n.className=PV;const t=document.createElement("textarea");t.className=`${qV} ${e.className} ${Gu}`,t.rows=FV,t.spellcheck=!1,t.setAttribute("aria-label",e.ariaLabel);for(const[r,i]of Object.entries(e.dataset??{}))t.dataset[r]=i;return t.value=e.value,n.appendChild(t),A$(t),n}function A$(e){const n=()=>{e.style.height="auto",e.style.height=`${e.scrollHeight}px`};e.addEventListener("input",n),n()}function L$(e){for(const n of e.querySelectorAll(`textarea.${Gu}`))A$(n)}const hm="estimator-reasoning",I$="estimator-reasoning-body",DV="has-estimator-reasoning",C$="estimator-reasoning-input",T$="reasoningBare",xV="Your reasoning for ",BV={containerClass:hm,ownContentSelector:`:scope > .${I$}`};function HV(e,n){const t=e==null?void 0:e[n];return t!==void 0&&t.trim()!==""?t:void 0}function UV(e,n){const t=document.createElement("div");if(t.className=hm,n.mode==="edit")return t.appendChild($$({className:C$,value:n.reasoning[e]??"",ariaLabel:`${xV}${e}`,dataset:{[T$]:e}})),t;const r=HV(n.reasoning,e);return r===void 0?null:(t.appendChild(S$(r,I$)),t)}function R$(e,n,t,r){const i=e.querySelector(`:scope > .${hm}`),o=UV(n,t);if(e.classList.toggle(DV,o!==null),o===null){i==null||i.remove();return}i!==null?i.replaceWith(o):r!==null&&r.parentElement===e?r.after(o):e.appendChild(o)}const GV="root",VV={containerClass:"framingnote",ownContentSelector:":scope > .framing-note-summary > .framing-note-content"};function k$(e){return`framing-fgroup-${e}`}const WV=14;function jV(e,n,t){return`<strong>${X(e)}${n}:</strong><span class="framing-note-content">${t}</span>`}function mm(e){return e.jprobInstance.enabled_flabels()}function N$(e){return e.showFramingNotes!==!1}function vm(e,n){const t=mm(n);return!N$(n)||!t.length?null:e.get_framing_layout(t)}function XV(e,n,t){var r;return((r=e[n])==null?void 0:r[t])??!0}function M$(e,n,t,r){const i=XV(t,r,e.note.id),o=e.children.map(m=>M$(m,n,t,r)).join(""),u=i?" visible":"",a=i?" active":"",s=WV*(e.depth-1),c=X(e.note.flabel),l=Tn(e.note.srcquotes,n),f=l.atStart+Ee(e.note.defn,n)+l.atEnd,[d,h]=n.jprobInstance.fgroup_of_flabel(e.note.flabel),p=jV(h.label_prefix,c,f),v=ae(k$(d));return`<div class="framingnote${u} ${v}" style="margin-left: ${s}px" data-framing-anchor="${ae(r)}" data-framing-id="${ae(e.note.id)}"><div class="framing-note-summary"><button class="framing-fold-btn${a}" data-framing-anchor="${ae(r)}" data-framing-id="${ae(e.note.id)}" title="Toggle framing note">&plusmn;</button>`+p+"</div>"+o+"</div>"}function _m(e,n,t,r){return e.layout_nodes.map(i=>M$(i,n,t,r)).join("")}function YV(e,n,t,r){return e===void 0||e.layout_nodes.length===0?"":"<div>"+_m(e,n,t,r)+"</div>"}function KV(e,n,t){const r=vm(e,n),i=document.querySelectorAll(`.${jy}`);for(const o of i){const u=o.getAttribute(Xy);if(!u)continue;const a=r==null?void 0:r.nonroot_anchor_sections.get(u);o.innerHTML=r&&a?_m(a,n,t.framingFoldState,u):""}}function JV(e,n,t,r){const i=document.getElementById("framing-notes-root-section"),o=vm(n,t),u=o===null?"":_m(o.root_section,t,r.framingFoldState,GV);if(!u){e.innerHTML="",i&&(i.hidden=!0);return}i&&(i.hidden=!1),e.innerHTML=u}function zV(e,n){const t=n.jprobInstance,r=Kp in t.get_fgroups()?t.nonstandard_notes(Kp,mm(n)):[];e.innerHTML=r.map(o=>`<div class="estimator-instruction">${Ee(o.defn,n)}</div>`).join("");const i=document.getElementById(hh);i&&(i.hidden=r.length===0)}function ZV(e,n){const t=document.getElementById("framing-notes-explainer-section"),r=new Set(mm(n));if(!N$(n)||!r.size){e.innerHTML="",t&&(t.hidden=!0);return}const i=[];for(const[o,u]of n.jprobInstance.standard_fgroups_in_order())u.defn&&u.flabels.some(a=>r.has(a))&&i.push(`<div class="framing-explainer ${ae(k$(o))}">`+Ee(u.defn,n)+"</div>");t&&(t.hidden=i.length===0),e.innerHTML=i.join("")}const QV=280,eW=110,nW="(no response)",tW="This trial gave no response for these parameter values",O$="assumption-readonly-no-response",q$="assumption-mixture-caption";function rW(e,n,t){const r=Fw(e),i=o=>Fe(o,n,t,"deterministic");return`median = ${i(r.median)}, 90% interval [${i(r.p5)}, ${i(r.p95)}]`}function iW(e,n,t){if(t==="point")return String(e.point[n]??"");if(t==="bounds"){const i=e.bounds[n];return i?`${i[0]} ${i[1]}`:""}const r=e.sample[n];return r?typeof r=="string"?r:r.map(([i,o])=>`(${i} ${o})`).join(" "):""}function P$(e,n){return e.svar_entries().map(({bareName:t},r)=>({bareName:t,cardMode:n,inputIndex:r}))}function F$(e,n,t,r){return pm(e,n,t).map(i=>i&&r.map(o=>iW(i,o.bareName,o.cardMode)))}function gm(e){return`data-trial-${e}`}function D$(e,n){const t=e.getAttribute(gm(n));e.textContent=t??nW,e.classList.toggle(O$,t===null),t===null?e.title=tW:e.removeAttribute("title")}function oW(e){return e.classList.contains(O$)?"":e.textContent??""}function uW(e){return e.getAttributeNames().filter(n=>n.startsWith("data-trial-")).map(n=>e.getAttribute(n)??"")}function aW(e){return e.querySelector(":scope > .resizable-canvas-wrapper")??e.querySelector(":scope > .param-density-canvas")??e.querySelector(":scope > .assumption-header")}function yh(e,n){for(const t of e.querySelectorAll(".assumption-card")){const r=t.dataset.svarBare??"";R$(t,r,n,aW(t))}}function sW(e,n,t,r,i){var y;const o=document.getElementById(`${Ge.ESTIMATION}-section`),u=r.ui.whose==="yours-plaincode",a=r.ui.inputMode,s=!De(r.ui.whose),c=n.get_svar_bare_names(),l=vm(n,t),f=fi(n);if(f.length===0){e.innerHTML="",o&&(o.hidden=!0);return}o&&(o.hidden=!1);const d=P$(n,a),h=s?F$(n,r,i,d):[],p=(((y=r.yoursRecord.raw_input)==null?void 0:y[a])??"").split(`
`),v=s?'<div class="assumption-preset-hint">preset selected; select Yours in Calculator to edit</div>':"",m=n.svar_entries().map(b=>b.decl.type_highlevel),g=[];for(let b=0;b<f.length;b++){const E=d[b],A=E.cardMode,L=A==="sample"&&!u,R=A==="bounds"?" bounds-mode":A==="sample"?" sample-mode":"",T=Ee(f[b],t),$=c[b],w=$?n.get_svar($):void 0,S=$?`isym:${$}`:null,I=S!==null&&n.can_consolidate_isym_svar(S),C=I?n.get_isym(S):void 0,P=(C==null?void 0:C.defn)??(w==null?void 0:w.defn),M=C?C.srcquotes:w==null?void 0:w.srcquotes,H=Tn(M,t),q=P?H.atStart+Ee(P,t)+H.atEnd:"",F=$?`svar:${$}`:null,O=I?` id="isym-${ae($??"")}"`:"",Z=F&&l?YV(l.nonroot_anchor_sections.get(F),t,r.ui.framingFoldState,F):"",U=L?`<canvas class="param-density-canvas" data-param-index="${E.inputIndex}" data-type-highlevel="${m[E.inputIndex]}" width="${QV}" height="${eW}"></canvas>`+(s?`<div class="${q$}" hidden></div>`:""):"";let K;if(s){const j=h.flatMap((V,$e)=>V===void 0?[]:[`${gm($e)}="${ae(V[b]??"")}"`]).join(" ");K=`<span class="assumption-readonly${R}" data-param-index="${b}" ${j}></span>`}else{const j=(p[E.inputIndex]??"").trim();K=`<input class="assumption-input${R}" data-param-index="${E.inputIndex}" data-group="${a}" value="${ae(j)}" placeholder="${mW(A)}">`}const Q=!s&&!u&&A==="sample"?'<span class="assumption-help-slot"></span>':"";!s&&A==="sample"&&j$(p[E.inputIndex]??"");const ie="",B=`<span class="assumption-op">${X(sy(A))}</span>`;g.push(`<div class="assumption-card${s?" preset-mode":""}"${O} data-svar-bare="${ae($??"")}">`+CR($??"",`${Nh}${$??""}`)+`<div class="assumption-header"><span class="assumption-cond">${T}</span><span class="assumption-input-row"${u?" hidden":""}>`+B+K+Q+"</span></div>"+U+ie+(q?`<div id="gloss-${$??""}" class="assumption-narrative">${q}</div>`:"")+v+Z+"</div>")}e.innerHTML=g.join("");for(const b of e.querySelectorAll(".assumption-help-slot"))b.appendChild(Dt(nG));const _=ut(n.svar_entries().map(b=>b.decl));if(s){x$(e,ot(r,i),fm(r,i),r.ui.probAsOdds,_);return}a==="sample"&&!u&&ym(e,_),yh(e,u?{mode:"edit",reasoning:r.yoursCodeRecord.reasoning_response}:{mode:"read",reasoning:void 0})}function cW(e,n,t,r){if(De(t.ui.whose))return;const i=t.ui.inputMode,o=P$(n,i),u=F$(n,t,r,o),a=ot(t,r);for(const s of e.querySelectorAll(".assumption-readonly")){const c=Number(s.dataset.paramIndex);for(const l of s.getAttributeNames())l.startsWith("data-trial-")&&s.removeAttribute(l);u.forEach((l,f)=>{l!==void 0&&s.setAttribute(gm(f),l[c]??"")}),a.kind==="trial"&&D$(s,a.recordTrialIndex)}if(i==="sample"){const s=ut(n.svar_entries().map(c=>c.decl));a.kind==="trial"?H$(e,s):U$(e,t.ui.probAsOdds,s)}}function x$(e,n,t,r,i){const o=n.kind==="mix";for(const u of e.querySelectorAll(".assumption-input-row"))u.hidden=o;if(o){U$(e,r,i),yh(e,{mode:"read",reasoning:void 0});return}for(const u of e.querySelectorAll(".assumption-readonly"))D$(u,n.recordTrialIndex);H$(e,i),yh(e,{mode:"read",reasoning:t[n.recordTrialIndex]})}function lW(e,n){const t=e.dataset.typeHighlevel,r=xw(n,t);oi(e,n,r),bn(e,()=>oi(e,n,r)),Ww(e,n,r,t)}function fW(e){const n=e.parentElement;return n!=null&&n.classList.contains("resizable-canvas-wrapper")?n:e}function bm(e,n){const t=fW(e);if(!n){t.hidden=!0;return}t.hidden=!1,lW(e,n)}function B$(e){const n=e.querySelector(`.${q$}`);if(n===null)throw new Error("preset svar card is missing its mixture caption");return n}function H$(e,n){const t=e.querySelectorAll(".param-density-canvas");for(const r of t){const i=r.closest(".assumption-card"),o=i==null?void 0:i.querySelector(".assumption-readonly"),u=o?oW(o):"",a=Number(r.dataset.paramIndex??0);bm(r,G$(u,n==null?void 0:n[a])),i&&(B$(i).hidden=!0)}}function U$(e,n,t){const r=e.querySelectorAll(".param-density-canvas");for(const i of r){const o=i.closest(".assumption-card"),u=o==null?void 0:o.querySelector(".assumption-readonly"),a=Number(i.dataset.paramIndex??0),s=(u?uW(u):[]).map(c=>pW(c,t==null?void 0:t[a])).filter(c=>c!==null);if(bm(i,s.length>0?Dw(s):null),o){const c=B$(o);c.hidden=s.length===0,c.textContent=s.length>0?rW(s,i.dataset.typeHighlevel,n):""}}}function dW(e,n,t){var a;const r=n.ui.inputMode,i=((a=n.yoursRecord.raw_input)==null?void 0:a[r])??"",o=i?i.split(`
`):[];e.querySelectorAll(".assumption-input").forEach(s=>{const c=Number(s.dataset.paramIndex),l=(o[c]??"").trim();s.value!==l&&document.activeElement!==s&&(s.value=l)}),r==="sample"&&(ym(e,t),X$(e))}function ym(e,n){const t=e.querySelectorAll(".param-density-canvas");for(const r of t){const i=r.closest(".assumption-card"),o=i==null?void 0:i.querySelector(".assumption-input"),u=(o==null?void 0:o.value)??"",a=Number(r.dataset.paramIndex??0);bm(r,G$(u,n==null?void 0:n[a]))}}function G$(e,n){const t=n??cr,r=V$(e,t);if(r===null)return null;switch(r.kind){case"family":return BB(g2(r.spec,t.lo,t.hi));case"pairs":return DB(r.pairs.map(i=>i[0]),r.pairs.map(i=>i[1]))}}function pW(e,n){const t=n??cr,r=V$(e,t);return r===null?null:ei(r,t)}function V$(e,n){const t=e.trim();if(!t)return null;try{return y2(t,n)}catch{return null}}function W$(e){return e.trim()}function hW(e,n,t,r){var a;const i=e.ui.inputMode,u=(((a=e.yoursRecord.raw_input)==null?void 0:a[i])??"").split(`
`);for(;u.length<r;)u.push("");return u[n]=i==="sample"?W$(t):t,u.join(`
`)}function j$(e){return null}function X$(e){const n=e.querySelectorAll(".assumption-card");for(const t of n){const r=t.querySelector(".assumption-input");if(!r)continue;j$(r.value);let i=t.querySelector(".arg-warning");i&&i.remove()}}function mW(e){switch(e){case"point":return"e.g. .5";case"bounds":return"e.g. .01 1";case"sample":return"e.g. "+Y$}}const Y$="tri(0, .5, .99)",Em="conclusion-density";function K$(e,n){const t={};for(const r of e.get_cparams()){const i=Le(r.id),o=n[i]??r.default_value;typeof o!="object"&&(t[i]=o)}return t}function vW(e,n){const t=e.conclusion_form_or_none();if(t===null)return null;const r=n[t];if(!r)throw new Error(`Form "${t}" not found in form registry`);return r}function Vu(e,n){return nS(e,n)??""}function _W(e,n){return fi(e).map(t=>`<div class="calc-label-row"><span class="label-full">${Ee(t,n)}</span></div>`).join("")}function gW(e,n){const t=X(sy(n));return Array.from({length:e},()=>`<div class="calc-op-row">${t}</div>`).join("")}function J$(e,n,t,r,i,o,u,a,s,c){var _,y,b;const l=i.ui.inputMode;if(o){const{source:E}=pe(i.ui.whose);if(E==="metho-richcode"||E==="adhoc-plaincode"){const A=je(i.ui.whose,o);if(A){const L=cn();n7(e,n,A,wm(E,A,o),t,r,i,L,u,s,c);return}}if(E==="yours-plaincode"){const A=i.yoursCodeRecord;if(e.innerHTML="",A.verified_code_input&&A.cparam_combos.length>0){const L=vi(A),R=cn();n7(e,n,L,[L],t,r,i,R,u,s,c)}else n.innerHTML='<div class="result-detail">Write code below and click Sample to compute results.</div>';return}}const f=((_=i.yoursRecord.raw_input)==null?void 0:_[l])??"",h=fi(t).length,p=!De(i.ui.whose),v=_W(t,r),m=h>0?`<div class="calc-operators">${gW(h,l)}</div>`:"";let g;if(p)g='<div id="sample-columns"></div>';else{const E=l==="bounds"?" bounds-mode":l==="sample"?" sample-mode":"",A=IW(l,h);g=`<div class="calc-input"><textarea class="calc-textarea${E}" data-group="${l}" rows="${h}" spellcheck="false" placeholder="${A}">${X(f)}</textarea></div>`}if(e.innerHTML=`
    <div class="calc-layout">
      <div class="calc-labels">${v}</div>
      ${m}
      ${g}
    </div>
  `,p&&o){const E=e.querySelector("#sample-columns");E&&EH(E,t,o,i)&&((y=e.querySelector(".calc-labels"))==null||y.classList.add("has-sample-col-headers"),(b=e.querySelector(".calc-operators"))==null||b.classList.add("has-sample-col-headers"));const{source:A}=pe(i.ui.whose);if(A==="adhoc-plainnum"){const L=je(i.ui.whose,o),R=L==null?void 0:L.trials[0],T=t.svar_entries().map($=>$.bareName);R&&sE(R,T).length>0&&e.insertAdjacentHTML("beforeend",`<div class="calc-copy-to-yours"><button class="copy-to-yours-btn" type="button" title="Copy this entry's estimates into your editable Yours inputs">Copy to Yours</button></div>`)}}Wu(n,t,r,i,o,u,a)}function wm(e,n,t){return e==="metho-richcode"?t.richcodeResults:[n]}function bW(e,n,t,r,i,o,u,a,s,c){const{source:l}=pe(i.ui.whose),f=cn();if(o&&(l==="metho-richcode"||l==="adhoc-plaincode")){const d=je(i.ui.whose,o);if(d){t7(e,n,d,wm(l,d,o),t,r,i,f,u,s,c);return}}else if(l==="yours-plaincode"){const d=i.yoursCodeRecord;if(d.verified_code_input&&d.cparam_combos.length>0){const h=vi(d);t7(e,n,h,[h],t,r,i,f,u,s,c);return}}console.warn(`Code-control change outside a code result view (whose=${JSON.stringify(i.ui.whose)}); falling back to a full calculator render`),J$(e,n,t,r,i,o,u,a,s,c)}function Wu(e,n,t,r,i,o,u){CW(e,n,t,r,i,o,u)}function yW(e,n,t,r,i,o,u,a){const s=o[n];if(!s){e.innerHTML="",console.warn(`derived-form ${n}: not in form registry (cannot compute)`);return}const c=t.form.find(g=>g.id===n);if(!c){e.innerHTML="",console.error(`derived-form ${n}: not found in jprob template form list`);return}const l=i.ui.inputMode;if(!J7(c,l)){e.innerHTML="";return}const f=z7(n,c.sexpr),d=EW(t,f),h=Ee(d,r),p=!De(i.ui.whose),v=t.get_svar_bare_names().length;let m;try{m=AW(n,s,t,i,l,p,v,K$(t,r.displayOptionValues),a,u)}catch(g){e.innerHTML="",console.error(`derived-form ${n}: ${g.message}`);return}switch(m.kind){case"ok":const g=m.valueHtml??`<span class="derived-value">${m.value}</span>`,_=m.detailHtml??(m.detail?` <span class="derived-detail">${m.detail}</span>`:"");e.innerHTML=`<div class="hir-loud-note">${h} ${m.label} ${m.relation??"≈"} `+g+(_?` ${_}`:"")+"</div>"+(m.nonFiniteWarning?Vo():"");return;case"non-finite":e.innerHTML=Vo();return;case"unavailable":e.innerHTML=`<div class="hir-loud-note">${h} — <span class="derived-detail">${X(m.explanation)}</span></div>`;return;case"pending":e.innerHTML="";return;case"missing":e.innerHTML="",console.warn(`derived-form ${n}: ${m.reason}`);return;case"error":e.innerHTML="",console.error(`derived-form ${n}: ${m.message}`);return}}function EW(e,n){const t=Z7(n);return e.get_display_expr(t)??t}function ar(e){return j7(e.svar_entries())}function z$(e,n,t){return e.provenance!=="precomputed"?t:`precomputed, ${n} trial${n===1?"":"s"}`}const wW={point:()=>Go,bounds:"from bounds",mc:()=>"MC"};function SW(e){return{point:n=>n.perTrial.length>1?`mean of ${n.perTrial.length} samples`:"from preset",bounds:"from preset",mc:n=>z$(n,e,n.trialCount>1?`MC of ${n.trialCount} trials`:"MC")}}function $W(e){return{point:n=>n.perTrial.length>1?`${Go} (mean of ${n.perTrial.length} trials)`:Go,bounds:"from bounds",mc:n=>z$(n,e,"MC")}}function Ur(e,n,t,r){switch(e.kind){case"point":{const i=Br([...e.perTrial,e.value]);return i==="undefined"?{kind:"non-finite"}:{kind:"ok",label:r.point(e),value:Fe(e.value,n,t),nonFiniteWarning:i==="infinite"}}case"bounds":{const i=Br([e.lo,e.hi]);return i==="undefined"?{kind:"non-finite"}:US(e.lo,e.hi)?{kind:"unavailable",explanation:HS}:{kind:"ok",label:r.bounds,relation:GS(e.tightness),value:bG(e.lo,e.hi,n,t),nonFiniteWarning:i==="infinite"&&e.tightness==="tight"}}case"mc":{const i=Br([e.mean,e.median,e.p5,e.p95]);if(i==="undefined")return{kind:"non-finite"};const o=mG(e,n,t);return{kind:"ok",label:r.mc(e),value:"",valueHtml:o.valueHtml,detailHtml:o.detailHtml,nonFiniteWarning:i==="infinite"}}}}function AW(e,n,t,r,i,o,u,a,s,c){var g;const l=t.get_svar_bare_names(),f=n.params.filter(_=>!l.includes(_));if(f.length>0)return{kind:"error",message:`params not in svar_list: ${JSON.stringify(f)} (form.params=${JSON.stringify(n.params)}, svar_list=${JSON.stringify(l)})`};const d=r.ui.probAsOdds,{source:h}=pe(r.ui.whose);if(Bn(h)==="plaincode"||Bn(h)==="richcode")return LW(e,n,t,r,h,s,c);const p=E2(e,n,a,c);if(i==="bounds"&&p.bounds===null)return{kind:"unavailable",explanation:Ri};if(o){if(!s)return{kind:"pending"};const _=je(r.ui.whose,s);if(!_)return{kind:"pending"};if(h!=="adhoc-plainnum")return{kind:"pending"};const y=_;try{const b=ur(cn()),E=Un(p,Hn(y.trials,i,ar(t)),{onIncompleteTrial:"skip",mcIters:b.mcIters,mcItersPerClick:b.mcItersPerClick});return Ur(E,n.typeHighlevel,d,SW(y.trials.length))}catch(b){if(b instanceof ti)return{kind:"missing",reason:`record: ${b.message}`};throw b}}const v=((g=r.yoursRecord.raw_input)==null?void 0:g[i])??"";if(!v.trim())return{kind:"pending"};const m=Xu(t,i,v,"tolerant",eA(r));try{const _=ur(cn()),y=Un(p,m,{onIncompleteTrial:"skip",mcIters:_.mcIters,mcItersPerClick:_.mcItersPerClick});return Ur(y,n.typeHighlevel,d,wW)}catch(_){if(_ instanceof ti)return{kind:"pending"};throw _}}function LW(e,n,t,r,i,o,u){let a,s;if(on(i)==="yours"){const p=r.yoursCodeRecord;if(!p.verified_code_input||p.cparam_combos.length===0)return{kind:"pending"};a=vi(p),s=[a]}else{if(!o)return{kind:"pending"};if(a=je(r.ui.whose,o),!a)return{kind:"pending"};s=wm(i,a,o)}Xh(a);const c=ZG(a,s,t,r);if(!c)return{kind:"pending"};if(c.trials.length===0)return{kind:"missing",reason:"no trials for the selected scenario combination"};const l=r.ui.probAsOdds,f=$W(c.trials.length),d=li(n,c.cparams);if(r.ui.inputMode==="point"){const p=c.trials.map(m=>jS(m,e,d)),v=p.reduce((m,g)=>m+g,0)/p.length;return Ur({kind:"point",value:v,perTrial:p,perTrialInputs:[]},n.typeHighlevel,l,f)}if(r.ui.inputMode==="bounds"){if(!jh(a))throw new Error("code bounds derived-form display reached with a multi-trial record; bounds mode should not have been selectable");const p=XS(c.trials[0],e,d);if(!p)return{kind:"unavailable",explanation:Ri};const[v,m]=p.interval;return Ur({kind:"bounds",lo:v,hi:m,tightness:p.tightness,trialCount:1},n.typeHighlevel,l,f)}const h=QB(c,e,t.conclusion_form_or_none()??void 0,Ru(c.trials));try{const p=ur(cn()),v=Un(E2(e,n,c.cparams,u),Hn(c.trials,"sample",ar(t)),{onIncompleteTrial:"skip",mcIters:p.mcIters,mcItersPerClick:p.mcItersPerClick,precomputed:h});return Ur(v,n.typeHighlevel,l,f)}catch(p){if(p instanceof ti)return{kind:"missing",reason:`combo trials: ${p.message}`};throw p}}function IW(e,n){const t=e==="sample"?Y$:e==="bounds"?".01 1":".5";return"e.g. "+Array.from({length:n},()=>t).join(`
`)}function CW(e,n,t,r,i,o,u){var p;if(n.conclusion_form_or_none()===null){e.innerHTML="";return}const a=o?vW(n,o):null,s=K$(n,t.displayOptionValues),c=r.ui.inputMode,l=!De(r.ui.whose),f=cn();if(l&&i){try{NW(e,n,t,r,i,a,s,f,u)}catch(v){e.innerHTML=`<div class="result-error">${X(v.message)}</div>`}return}const d=((p=r.yoursRecord.raw_input)==null?void 0:p[c])??"",h=n.svar_entries().length;if(!d.trim()){e.innerHTML='<div class="result-detail">Enter probabilities above.</div>';return}try{switch(c){case"point":TW(e,d,n,t,h,a,s,r.ui.probAsOdds);break;case"bounds":RW(e,d,n,t,h,a,s,r.ui.probAsOdds);break;case"sample":kW(e,d,n,t,h,r,a,s,f,u);break}}catch(v){e.innerHTML=`<div class="result-error">${X(v.message)}</div>`}}function Eh(e,n){return!isNaN(e)&&co(n,e)}function Z$(e,n,t){const r=e.trim().split(/\n/).map(i=>i.trim()).filter(i=>i.length>0);if(r.length!==n)throw new Error(`Expected ${n} values, got ${r.length}`);return r.map((i,o)=>{const u=Number(i),a=(t==null?void 0:t[o])??cr;if(!Eh(u,a))throw new Error(`Line ${o+1}: "${i}" is not a valid value in ${lo(a)}`);return u})}function ju(e,n,t,r){return n?E2(e.conclusion_form_or_none()??"form:conclusion",n,t,r):{key:"conclusion-unavailable",params:[],typeHighlevel:e.config.conclusion_type_highlevel,point:()=>NaN,bounds:null,boundsTightness:null}}function Q$(){return`<div class="result-detail">${X(Ri)}</div>`}function Sm(e,n){for(const t of n.params)if(!e.includes(t))throw new Error(`form param "${t}" is not an input subjective variable`)}function Xu(e,n,t,r,i=null){const o=e.svar_entries(),u=o.map(f=>f.bareName),a=ut(o.map(f=>f.decl)),s=ar(e);if(r==="strict"){if(n==="point"){const d=Z$(t,u.length,a);return{mode:n,trials:[Object.fromEntries(u.map((h,p)=>[h,d[p]]))]}}if(n==="bounds"){const d=nA(t,u.length,a);return{mode:n,trials:[Object.fromEntries(u.map((h,p)=>[h,d[p]]))]}}const{specs:f}=tA(t,u.length,a);return{mode:"sample",ranges:s,trials:[{specs:Object.fromEntries(u.map((d,h)=>[d,f[h]])),lloads:i}]}}const c=t.trim().split(/\n/).map(f=>f.trim()).filter(f=>f.length>0);if(n==="point"){const f={};return u.forEach((d,h)=>{const p=Number(c[h]);isNaN(p)||(f[d]=p)}),{mode:n,trials:[f]}}if(n==="bounds"){const f={};return u.forEach((d,h)=>{const p=(c[h]??"").split(/\s+/);if(p.length!==2)return;const v=Number(p[0]),m=Number(p[1]);isNaN(v)||isNaN(m)||(f[d]=[v,m])}),{mode:n,trials:[f]}}const l={};return u.forEach((f,d)=>{try{l[f]=y2(c[d]??"",a[d]??cr)}catch{}}),{mode:"sample",ranges:s,trials:[{specs:l,lloads:i}]}}function eA(e){var n;return((n=e.yoursRecord.trials[0])==null?void 0:n.lloads)??null}function TW(e,n,t,r,i,o,u,a){const s=t.svar_entries().map(p=>p.bareName);o&&Sm(s,o);const c=Xu(t,"point",n,"strict"),l=Un(ju(t,o,u),c,{onIncompleteTrial:"error"}),f=Vu(t,r),d=t.config.conclusion_type_highlevel,h=c.trials[0];e.innerHTML=Wo({labelHtml:f,value:l.value,typeHighlevel:d,statsDisplay:a,detail:`from: ${s.map(p=>h[p]).join(", ")}`})}function nA(e,n,t){const r=e.trim().split(/\n/).map(i=>i.trim()).filter(i=>i.length>0);if(r.length!==n)throw new Error(`Expected ${n} lines of "lo hi", got ${r.length}`);return r.map((i,o)=>{const u=i.split(/\s+/);if(u.length!==2)throw new Error(`Line ${o+1}: expected "lo hi", got "${i}"`);const a=Number(u[0]),s=Number(u[1]),c=(t==null?void 0:t[o])??cr;if(!Eh(a,c)||!Eh(s,c)||a>s)throw new Error(`Line ${o+1}: invalid bounds "${i}" (need lo ≤ hi within ${lo(c)})`);return[a,s]})}function RW(e,n,t,r,i,o,u,a){const s=t.svar_entries().map(p=>p.bareName);o&&Sm(s,o);const c=Xu(t,"bounds",n,"strict"),l=ju(t,o,u);if(o&&l.bounds===null){e.innerHTML=Q$();return}const f=Un(l,c,{onIncompleteTrial:"error"}),d=Vu(t,r),h=t.config.conclusion_type_highlevel;e.innerHTML=z2({labelHtml:d,lo:f.lo,hi:f.hi,tightness:f.tightness,typeHighlevel:h,statsDisplay:a})}function tA(e,n,t){const r=e.trim().split(/\n/).map(o=>o.trim()).filter(o=>o.length>0);if(r.length!==n)throw new Error(`Expected ${n} lines, got ${r.length}`);return{specs:r.map((o,u)=>{try{return y2(o,(t==null?void 0:t[u])??cr)}catch(a){throw new Error(`Line ${u+1}: ${a.message}`)}}),warnings:[]}}const rA="⟦",iA="⟧";function Xo(e,n,t,r){return`<div class="result-label">Exact moments (independent)</div><div class="result-main">E${rA}${n}${iA} = <span class="hl">${Fe(e.mean,t,r)}</span></div><div class="result-detail">σ = ${Fe(e.sigma,t,"probability")}</div>`}function Yo(e){const n=`${a7("n")}=${e.samples.length.toLocaleString()}`;return e.barrierInnerIters===null?n:`${n}, E${rA}·${iA} ${a7("n")}=${e.barrierInnerIters.toLocaleString()}`}function oA(e,n,t,r){return'<div class="density-result-row"><div class="density-result-text">'+si(e,n,t,"monte-carlo",r)+'</div><canvas id="density-canvas" width="400" height="200"></canvas></div>'}function uA(e,n,t,r){const i=e.querySelector("#density-canvas");if(!i)return;const o=n.samples??n.densityCurve;if(!o)return;const u=Ft(t);ri(i,o,n.p5,n.p95,u),bn(i,()=>ri(i,o,n.p5,n.p95,u),{stateHost:e,stateKey:Em}),Vw(i,o,n.p5,n.p95,t),n.mcPoolToken!==null&&qu(i,n.mcPoolToken,n.samples.length,{itersPerTarget:r,targetCount:1})}function kW(e,n,t,r,i,o,u,a,s,c){const l=t.svar_entries().map(b=>b.bareName);u&&Sm(l,u);const f=eA(o),d=Xu(t,"sample",n,"strict",f),h=Vu(t,r),p=t.config.conclusion_type_highlevel,v=o.ui.probAsOdds,m=ju(t,u,a,c),g=ur(s);if(yi(f)){const b=S2(m,d,{onIncompleteTrial:"error",mcIters:g.mcIters,mcItersPerClick:g.mcItersPerClick}),E=[];b.independent.exact&&E.push(Xo(b.independent.exact,h,p,v)),E.push(jo({comparison:b,typeHighlevel:p,statsDisplay:v,targetLabelHtml:h,canvasId:"density-canvas",provenanceDetail:`Monte Carlo, ${Yo(b.joint)}`})),e.innerHTML=E.join(""),Fu({box:e,canvasId:"density-canvas",layers:[{comparison:b,palette:"series"}],typeHighlevel:p,resizeStateKey:Em,mcItersPerClick:g.mcItersPerClick});return}const _=Un(m,d,{onIncompleteTrial:"error",mcIters:g.mcIters,mcItersPerClick:g.mcItersPerClick}),y=[];_.exact&&y.push(Xo(_.exact,h,p,v)),y.push(`<div class="result-label">Monte Carlo (independent, ${Yo(_)})</div>`+oA(_,p,v,h)),e.innerHTML=y.join(""),uA(e,_,p,g.mcItersPerClick)}function NW(e,n,t,r,i,o,u,a,s){const c=je(r.ui.whose,i);if(!c){e.innerHTML='<div class="result-detail">No data for this preset.</div>';return}const{source:l}=pe(r.ui.whose),f=Vu(n,t);if(l==="adhoc-plainnum"){MW(e,c,n,t,r,f,o,u,a,s);return}e.innerHTML='<div class="result-detail">Unknown preset source.</div>'}function MW(e,n,t,r,i,o,u,a,s,c){const l=i.ui.inputMode,f=t.config.conclusion_type_highlevel,d=i.ui.probAsOdds;if(n.trials.length===0)throw new Error("Plainnum record has no trials to display");const h=ju(t,u,a,c);if(l==="point"){const p=Un(h,Hn(n.trials,"point",ar(t)),{onIncompleteTrial:"error"});if(p.perTrial.length===1)e.innerHTML=Wo({labelHtml:o,value:p.perTrial[0],typeHighlevel:f,statsDisplay:d,detail:`from: ${p.perTrialInputs[0].join(", ")}`});else{const v=p.perTrial.map(m=>Fe(m,f,d)).join(", ");e.innerHTML=Wo({labelHtml:o,value:p.value,typeHighlevel:f,statsDisplay:d,labelPrefix:"mean ",detail:`per sample: ${v}`})}return}if(l==="bounds"){if(u&&h.bounds===null){e.innerHTML=Q$();return}const p=Un(h,Hn(n.trials,"bounds",ar(t)),{onIncompleteTrial:"error"});e.innerHTML=z2({labelHtml:o,lo:p.lo,hi:p.hi,tightness:p.tightness,typeHighlevel:f,statsDisplay:d,midpointDetailSuffix:` (envelope of ${p.trialCount} sample${p.trialCount>1?"s":""})`});return}OW(e,n,h,t,i,o,s)}function OW(e,n,t,r,i,o,u){const a=r.config.conclusion_type_highlevel,s=i.ui.probAsOdds,c=ur(u),l=Hn(n.trials,"sample",ar(r));if(JS(n.trials,r)){const h=S2(t,l,{onIncompleteTrial:"error",mcIters:c.mcIters,mcItersPerClick:c.mcItersPerClick}),p=[];h.independent.exact&&p.push(Xo(h.independent.exact,o,a,s));const v=`Monte Carlo, ${Yo(h.joint)}`;p.push(jo({comparison:h,typeHighlevel:a,statsDisplay:s,targetLabelHtml:o,canvasId:"density-canvas",provenanceDetail:v})),p.push(em),e.innerHTML=p.join(""),Fu({box:e,canvasId:"density-canvas",layers:[{comparison:h,palette:"series"}],typeHighlevel:a,resizeStateKey:Em,mcItersPerClick:c.mcItersPerClick});return}const f=Un(t,l,{onIncompleteTrial:"error",mcIters:c.mcIters,mcItersPerClick:c.mcItersPerClick}),d=[];f.exact&&d.push(Xo(f.exact,o,a,s)),d.push(`<div class="result-label">Monte Carlo (independent, ${Yo(f)})</div>`+oA(f,a,s,o)),e.innerHTML=d.join(""),uA(e,f,a,c.mcItersPerClick)}function a7(e){return`<span class="lc">${e}</span>`}function qW(e,n,t,r,i){if(!n.trim())return null;try{if(e==="point"){const a=Z$(n,t,i),s={};for(let c=0;c<r.length;c++)s[r[c]]=a[c];return s}if(e==="bounds"){const a=nA(n,t,i),s={};for(let c=0;c<r.length;c++)s[r[c]]=a[c];return s}const{specs:o}=tA(n,t,i),u={};for(let a=0;a<r.length;a++){const s=o[a];u[r[a]]=s.kind==="family"?s.spec.text:s.pairs}return u}catch{return null}}function $m(e,n,t,r,i){const o=e.yoursRecord;o.raw_input={...o.raw_input??{},[r]:i};const u=n.svar_entries(),a=u.map(f=>f.bareName),s=a.length,c=ut(u.map(f=>f.decl)),l=qW(r,i,s,a,c);if(l!==null){const f=o.trials[0];r==="point"?f.point=l:r==="bounds"?f.bounds=l:f.sample=l}r2(n,t,e.plainnumOptionDictKey,o)}function Am(e,n,t,r,i,o){const u=e.yoursRecord;u.lloads_draft=r;const a=CE(r,i,o);return a.kind==="valid"&&(u.trials[0].lloads=a.lloads),r2(n,t,e.plainnumOptionDictKey,u),a}function s7(e,n,t,r,i,o){if(r==="plaincode"){const u=e.yoursCodeRecord;u.trial_choices={...u.trial_choices??{},[i]:o},gi(n,t,e.codeOptionDictKey,u)}else{const u=e.yoursRecord;u.trial_choices={...u.trial_choices??{},[i]:o},r2(n,t,e.plainnumOptionDictKey,u)}}function PW(e,n){e.addEventListener("input",t=>{const r=t.target;if(r.classList.contains("calc-textarea")){n.persistCalcTextarea(r);return}if(r.classList.contains("assumption-input")){n.persistAssumptionCard(r);return}}),e.addEventListener("change",t=>{const r=t.target;if(r.classList.contains("calc-textarea")){n.recomputeAfterCalcTextarea();return}if(r.classList.contains("assumption-input")){n.recomputeAfterAssumptionCard(r);return}})}const aA="response-note-block",sA="response-note-body",FW="response-note-key",cA="misc",lA="response-note-input",DW="Your notes about this response",xW={containerClass:aA,ownContentSelector:`:scope > .${sA}`};function fA(e){return e!==void 0&&e.trim()!==""?e:void 0}function BW(e){if(e===void 0)return[];const n=[];for(const t of Object.keys(e).sort()){const r=fA(e[t]);r!==void 0&&n.push([t,r])}return n}function dA(e){const n=document.createElement("div");n.className=aA;const t=document.createElement("h3");return t.className=FW,t.textContent=e,n.appendChild(t),n}function c7(e,n){const t=dA(e);return t.appendChild(S$(n,sA)),t}function HW(e){const n=dA(cA);return n.appendChild($$({className:lA,value:e,ariaLabel:DW})),n}function UW(e,n){const t=document.getElementById(`${Ge.RESPONSE_NOTES}-section`);if(e.innerHTML="",n.mode==="edit"){t&&(t.hidden=!1),e.appendChild(HW(n.misc));return}const{freeTextPerTrial:r,trialSelection:i}=n,o=i.kind==="mix"?void 0:r[cm(r.length,i.recordTrialIndex)],u=fA(o==null?void 0:o.misc),a=BW(o==null?void 0:o.extra);if(u===void 0&&a.length===0){t&&(t.hidden=!0);return}t&&(t.hidden=!1),u!==void 0&&e.appendChild(c7(cA,u));for(const[s,c]of a)e.appendChild(c7(s,c))}function Lm(e,n,t,r){const i=e.yoursCodeRecord;i.raw_code_input=r,gi(n,t,e.codeOptionDictKey,i)}function GW(e,n,t,r,i){const o=e.yoursCodeRecord;o.reasoning_response={...o.reasoning_response,[r]:i},gi(n,t,e.codeOptionDictKey,o)}function VW(e,n,t,r){const i=e.yoursCodeRecord;i.misc_response=r,gi(n,t,e.codeOptionDictKey,i)}function WW(e,n,t,r){if(e.classList.contains(C$)){const i=e,o=i.dataset[T$];return o===void 0||o===""?!1:(GW(n,t,r,o,i.value),!0)}return e.classList.contains(lA)?(VW(n,t,r,e.value),!0):!1}function Im(e){const n=`yours_${e}_`,t=[];for(let i=0;i<localStorage.length;i++){const o=localStorage.key(i);o!==null&&o.startsWith(n)&&t.push(o)}const r=[];for(const i of t){const o=localStorage.getItem(i);if(o===null)continue;let u;try{u=JSON.parse(o)}catch{continue}r.push({plainnumOptionDictKey:i.slice(n.length),record:u})}return r.sort((i,o)=>{const u=i.record.timestamp??"";return(o.record.timestamp??"").localeCompare(u)}),r}function jW(e,n){localStorage.removeItem(fu(e,n))}function XW(e){const n=Im(e).map(i=>({kind:"plainnum",plainnumOptionDictKey:i.plainnumOptionDictKey,record:i.record})),t=n2(e).map(i=>({kind:"plaincode",codeOptionDictKey:i.codeOptionDictKey,record:i.record})),r=[...n,...t];return r.sort((i,o)=>{const u=i.record.timestamp??"";return(o.record.timestamp??"").localeCompare(u)}),r}function YW(e,n,t,r){const i={};for(const[a,s]of Object.entries(r.cparam_values??{}))Cm(s)&&(i[a]=s);for(const[a,s]of Object.entries(r.aopts))pA(s)&&(i[a]=s);const o=lu(n.get_options(),i);t2(n.config,o);const u={...e.ui,whose:"yours-plainnum"};return Oe(n.config,u),{...e,optionValues:o,plainnumOptionDictKey:t,ui:u,yoursRecord:r}}function KW(e,n,t,r){const i={};for(const[a,s]of Object.entries(r.aopts))pA(s)&&(i[a]=s);for(const a of n.get_cparams()){const s=Le(a.id);if(s in e.optionValues){const c=e.optionValues[s];if(!Cm(c))throw new Error(`Cparam ${a.id} has a non-scalar state value`);i[s]=c}}const o=lu(n.get_options(),i);t2(n.config,o);const u={...e.ui,whose:"yours-plaincode"};return Oe(n.config,u),{...e,optionValues:o,codeOptionDictKey:t,ui:u,yoursCodeRecord:r}}function Cm(e){const n=typeof e;return n==="string"||n==="number"||n==="boolean"}function pA(e){return Cm(e)||Array.isArray(e)&&e.every(n=>typeof n=="string")}function hA(e,n){const t=[];for(const r of e.get_options()){const i=Le(r.id),o=kt(r.id)?n.cparam_values:n.aopts,u=o==null?void 0:o[i];u!==void 0&&(!kt(r.id)&&u===r.default_value||t.push(`${i}=${vA(u)}`))}return t.join(" ")}function mA(e,n){const t=["code"];for(const r of e.get_aopts()){const i=Le(r.id),o=n.aopts[i];o!==void 0&&o!==r.default_value&&t.push(`${i}=${vA(o)}`)}return t.join(" ")}function vA(e){return typeof e=="boolean"?e?"true":"false":String(e)}function JW(e,n){const t=XW(e.aid),r='<div class="yours-saved-header">Saved estimations</div>';if(t.length===0)return r+'<div class="yours-saved-empty">No saved estimations yet.</div>';const i=t.map(o=>zW(e,n,o)).join("");return r+`<div class="yours-saved-list">${i}</div>`}function zW(e,n,t){if(t.kind==="plainnum"){const u=X(hA(e,t.record)||"(default options)"),a=X(t.plainnumOptionDictKey);return`<div class="yours-saved-row${n.ui.whose==="yours-plainnum"&&t.plainnumOptionDictKey===n.plainnumOptionDictKey?" yours-saved-row-current":""}" data-kind="plainnum" data-key="${a}" role="button" tabindex="0"><span class="yours-saved-label">${u}</span><button class="yours-saved-delete" data-kind="plainnum" data-key="${a}" aria-label="Delete" title="Delete this saved estimation">×</button></div>`}const r=X(mA(e,t.record)),i=X(t.codeOptionDictKey);return`<div class="yours-saved-row yours-saved-row-code${n.ui.whose==="yours-plaincode"&&t.codeOptionDictKey===n.codeOptionDictKey?" yours-saved-row-current":""}" data-kind="plaincode" data-key="${i}" role="button" tabindex="0"><span class="yours-saved-label">${r}</span><button class="yours-saved-delete" data-kind="plaincode" data-key="${i}" aria-label="Delete" title="Delete this saved estimation">×</button></div>`}function ZW(e,n,t){e.innerHTML=JW(n,t)}const QW=["tri","uniform","uni","beta","normal","lognormal","loguniform","t","logt","normal_trunc","lognormal_trunc","t_trunc","logt_trunc","trap","clamp","exp","log","log2","log10","sqrt"],ej=`/**
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
`;function nj(e){if(e.length===0)return["return {","  point:  {},","  bounds: {},","  sample: {},","};"].join(`
`);const n=e.map(i=>`${i}: 0`).join(", "),t=e.map(i=>`${i}: [0, 1]`).join(", "),r=e.map(i=>`    ${i}: tri(0, 0.4, 1),`).join(`
`);return["return {",`  point:  { ${n} },`,`  bounds: { ${t} },`,"  sample: {",r,"  },","};"].join(`
`)}function tj(e){const n=[];for(const t of e.get_cparams()){const r=t.allowed_values;r===void 0||typeof r=="string"||n.push(t.id.slice(7))}return n}const rj="// code data missing",ij=10;function oj(e,n,t){const r=tj(e),i=e.get_svar_bare_names(),o=`function belief_spec_for_cparam_combo(${r.join(", ")}) {`,u=n.raw_code_input!==""?n.raw_code_input:t==="edit"?nj(i):rj,a=t==="view"?" readonly":"",c=`// ${QW.join(", ")} are injected helper functions. For details (warning: the literal code with some irrelevant docs): `,l=t==="edit"?'<div class="code-action-row"><button class="code-sample-btn" type="button">Sample</button><span class="code-status" aria-live="polite"></span></div><div class="code-error-area"></div>':n.raw_code_input===""?"":`<div class="code-action-row"><button class="copy-to-yours-btn" type="button" title="Copy this entry's code into your editable Yours-plaincode code">Copy to Yours</button></div>`;return`<div class="yours-code-input" data-variant="${t}"><div class="code-editor"><pre class="code-signature-line">${X(o)}</pre><pre class="code-helpers-comment"><span class="code-helpers-comment-text">${X(c)}</span><span class="code-helpers-help-slot"></span></pre><textarea class="code-body-input ${Gu}" rows="${ij}" spellcheck="false"${a}>${X(u)}</textarea><pre class="code-signature-line">}</pre></div>`+l+"</div>"}function l7(e,n,t,r){e.innerHTML=oj(n,t,r),L$(e),uj(e)}function uj(e){for(const n of e.querySelectorAll(".code-helpers-help-slot"))n.childElementCount>0||n.appendChild(lU(ej))}const aj=1e-15;function sj(e,n){return n.filter(t=>{const r=e[t];if(typeof r=="string")return b2(r)!==null;if(!Array.isArray(r)||r.length===0)return!1;const i=r[0];return r[r.length-1][0]-i[0]<aj})}function cj(e){var t;const n={};for(const r of e){const i=r.id.startsWith("svar:")?r.id.slice(5):r.id,[o,u]=lj[r.type_mathlevel]??[!0,!0],a=((t=r.type_detail)==null?void 0:t.range)??[0,1];n[i]={lo:a[0],hi:a[1],loClosed:o,hiClosed:u}}return n}const lj={closed_real_interval:[!0,!0],left_open_real_interval:[!1,!0],right_open_real_interval:[!0,!1],open_real_interval:[!1,!1]},fj=.8,f7=.05,dj="Positive values mean…",pj=2;function hj(e,n,t){if(!n||t&&Object.keys(t).length>0)return null;const r=V7(n,e.get_svar_bare_names());return r.length<pj?null:r}function _A(e,n,t,r){var o;const i=hj(n,t,r);return i===null?null:{eligibleSvars:i,degenerateSvars:sj(((o=e.yoursRecord.trials[0])==null?void 0:o.sample)??{},i)}}function Tm(e,n,t,r){return pe(e.ui.whose).source!=="yours-plainnum"||e.ui.inputMode!=="sample"?null:_A(e,n,t,r)}function Rm(e,n){var r;const t=e.yoursRecord;return t.lloads_draft===void 0?AE((r=t.trials[0])==null?void 0:r.lloads,n.eligibleSvars):$E(t.lloads_draft,n.eligibleSvars)}function gA(e,n,t){const r=e.get_svar_bare_names(),i=fi(e);if(i.length!==r.length)throw new Error(`joint-dependence editor has ${r.length} subjective variables but ${i.length} display labels`);const o=new Map(r.map((u,a)=>[u,i[a]]));return new Map(t.map(u=>[u,Ee(o.get(u),n)]))}function mj(e,n,t,r,i,o){const u=Tm(n,t,i,o);if(u===null){e.innerHTML="";return}const a=Rm(n,u);e.innerHTML=vj(a,u,gA(t,r,u.eligibleSvars),n.ui.jointDependenceEditorOpen),L$(e);const s=e.querySelector(".jde-help-slot");s&&s.appendChild(Dt(KU)),bA(e,a,u),yA(e,a,u,t,r)}function vj(e,n,t,r){const i=e.latents.length===0?_j():gj(e,n,t);return`<details class="joint-dependence-editor"${r?" open":""}><summary class="jde-summary"><span class="jde-summary-title">Joint dependence</span><span class="jde-summary-explainer">Optional named uncertainties shared across your distributions</span><span class="jde-status-pill"></span></summary><div class="jde-body"><div class="jde-intro"><span class="jde-help-slot"></span><p>A latent is one shared uncertainty that can move two or more of your quantities together, or in opposite directions. Describe what it means, then give it signed loadings. Nothing you state here changes the distributions you gave above.</p></div>`+i+"</div></details>"}function _j(){return'<div class="jde-empty-state"><div class="jde-empty-title">Currently sampled independently</div><p>Add a latent only when the distributions above do not tell the whole joint-belief story.</p><button class="jde-btn jde-add-latent-btn" type="button">Add a shared uncertainty</button></div>'}function gj(e,n,t){return'<div class="jde-active"><div class="jde-toolbar"><div class="jde-section-title">Shared uncertainties</div><button class="jde-btn jde-add-latent-btn" type="button">+ Add latent</button></div><div class="jde-latent-list">'+e.latents.map(bj).join("")+`</div><div class="jde-matrix-section"><div class="jde-matrix-heading"><div class="jde-section-title">Signed loadings</div><div class="jde-matrix-hint">−1 falls as the latent rises · +1 rises with it · 0 unaffected</div></div><div class="jde-matrix-scroll">${yj(e,n,t)}</div><div class="jde-banner" role="status"></div></div><div class="jde-bottom-actions"><button class="jde-btn jde-zero-loadings-btn" type="button">Zero all loadings</button><button class="jde-btn jde-remove-all-btn" type="button">Remove all latents</button></div><details class="jde-correlations"><summary>Implied pairwise correlations</summary><p class="jde-correlations-note">Derived from the loadings; feedback, not another input surface. Quantities your latents leave uncoupled are omitted.</p><div class="jde-matrix-scroll">`+wj(n,t)+'</div></details><div class="jde-artifact"><div class="jde-artifact-caption">What your response discloses:</div><div class="jde-artifact-host"></div></div></div>'}function bj(e,n){const t=`jde-latent-name-${n}`,r=`jde-latent-description-${n}`;return`<div class="jde-latent-card" data-latent-index="${n}"><div class="jde-latent-header"><span class="jde-latent-number">${n+1}</span><button class="jde-btn jde-remove-latent-btn" type="button" data-latent-index="${n}">Remove</button></div><div class="jde-latent-fields"><div class="jde-field"><label for="${t}">Short name</label><input id="${t}" class="jde-latent-text" type="text" data-latent-index="${n}" data-latent-field="name" placeholder="e.g. shared evidence quality" value="${ae(e.name)}"></div><div class="jde-field"><label for="${r}">Meaning and positive direction</label><textarea id="${r}" class="jde-latent-text ${Gu}" rows="2" data-latent-index="${n}" data-latent-field="description" placeholder="${ae(dj)}">${X(e.description)}</textarea></div></div></div>`}function yj(e,n,t){const r='<tr><th class="jde-variable-col">Quantity</th>'+e.latents.map((u,a)=>`<th class="jde-loading-col"><span class="jde-matrix-latent-name" data-latent-index="${a}"></span><span class="jde-matrix-latent-hint">−1 to +1</span></th>`).join("")+'<th class="jde-budget-col">Loading budget</th></tr>',i=new Set(n.degenerateSvars),o=n.eligibleSvars.map(u=>{const a=i.has(u),s=t.get(u),c=a?'<span class="jde-svar-note">single value — no dependence possible</span>':"",l=e.latents.map((f,d)=>`<td>${Ej(f.loadings[u]??null,d,u,s,a)}</td>`).join("");return`<tr data-svar="${ae(u)}" data-svar-label="${ae(EA(s))}"${a?' class="jde-row-ineligible"':""}><th scope="row" class="jde-svar-cell" data-svar="${ae(u)}"><span class="jde-svar-label">${s}</span>${c}</th>`+l+`<td><div class="jde-budget-track"><span class="jde-budget-fill" data-svar="${ae(u)}"></span></div><div class="jde-budget-copy" data-svar="${ae(u)}"></div></td></tr>`}).join("");return`<table class="jde-loading-matrix"><thead>${r}</thead><tbody>${o}</tbody></table>`}function Ej(e,n,t,r,i){const o=ae(`Loading of ${EA(r)} on latent ${n+1}`),u=`data-latent-index="${n}" data-svar="${ae(t)}"${i?" disabled":""}`,a=e===null?"":wA(e);return`<div class="jde-loading-control"><input class="jde-loading-range" type="range" min="-1" max="1" step="${f7}" value="${e??0}" ${u} aria-label="${o}"><input class="jde-loading-number" type="number" min="-1" max="1" step="${f7}" value="${a}" ${u} aria-label="${o}, numeric"></div>`}function wj(e,n){const t=e.eligibleSvars,r=t.map(o=>`<th class="jde-svar-cell" data-svar="${ae(o)}"><span class="jde-svar-label">${n.get(o)}</span></th>`).join(""),i=t.map(o=>`<tr><th class="jde-svar-cell" data-svar="${ae(o)}"><span class="jde-svar-label">${n.get(o)}</span></th>`+t.map(()=>"<td></td>").join("")+"</tr>").join("");return`<table class="jde-correlation-table"><thead><tr><th></th>${r}</tr></thead><tbody>${i}</tbody></table>`}function bA(e,n,t){const r=IE(n,t.eligibleSvars,t.degenerateSvars,qj(e)),i=Jk(n),o=e.querySelector(".jde-status-pill");o&&(o.className=`jde-status-pill ${Sj(r,n,i)}`.trimEnd(),o.textContent=$j(r,n,i)),Aj(e,n),Lj(e,r),Ij(e,n),Cj(e,n,t),Tj(e,r,n,i),Rj(e,n,t)}function Sj(e,n,t){return e.length>0?"invalid":t?"valid":n.latents.length>0?"warning":""}function $j(e,n,t){if(e.length>0)return`${e.length} issue${e.length===1?"":"s"}`;const r=n.latents.length;return t?`${r} latent${r===1?"":"s"} · valid`:r>0?`${r} considered · independent`:"Independent"}function Aj(e,n){var t;for(const r of e.querySelectorAll(".jde-loading-range, .jde-loading-number")){if(r===document.activeElement)continue;const i=r.dataset.svar;if(i===void 0)continue;const o=((t=n.latents[Number(r.dataset.latentIndex)])==null?void 0:t.loadings[i])??null;o!==null&&(r.value=wA(o))}}function Lj(e,n){const t=new Set(n.filter(i=>i.field!==void 0).map(i=>`${i.latentIndex}:${i.field}`));for(const i of e.querySelectorAll(".jde-latent-text"))i.classList.toggle("jde-field-invalid",t.has(`${i.dataset.latentIndex}:${i.dataset.latentField}`));const r=new Set(n.filter(i=>i.svar!==void 0&&i.latentIndex!==void 0).map(i=>`${i.latentIndex}:${i.svar}`));for(const i of e.querySelectorAll(".jde-loading-number"))i.classList.toggle("jde-field-invalid",r.has(`${i.dataset.latentIndex}:${i.dataset.svar}`))}function Ij(e,n){var t;for(const r of e.querySelectorAll(".jde-matrix-latent-name")){const i=Number(r.dataset.latentIndex),o=(t=n.latents[i])==null?void 0:t.name.trim();r.textContent=o||`Latent ${i+1}`,r.title=r.textContent}}function Cj(e,n,t){const r=LE(n,t.eligibleSvars);for(const i of e.querySelectorAll(".jde-budget-fill")){const o=r[i.dataset.svar??""];o!==void 0&&(i.style.width=`${Math.min(100,Math.max(0,o*100))}%`,i.className="jde-budget-fill"+(o>1?" over":o>fj?" near":""))}for(const i of e.querySelectorAll(".jde-budget-copy")){const o=r[i.dataset.svar??""];if(o===void 0)continue;const u=o>1;i.className=`jde-budget-copy${u?" over":""}`,i.textContent=u?`${o.toFixed(3)} / 1 · over by ${(o-1).toFixed(3)}`:`${o.toFixed(3)} / 1`}}function Tj(e,n,t,r){const i=e.querySelector(".jde-banner");if(i){if(n.length>0){i.className="jde-banner invalid";const o=n.length>1?` (${n.length-1} more)`:"";i.textContent=`${n[0].message}${o} The calculator keeps using your last valid joint specification until this is repaired.`;return}if(!r){i.className="jde-banner warning",i.textContent=t.latents.length>0?"Valid, and exactly independent: the latents you named are disclosed as considered, with every loading at zero.":"Valid: sampled independently.";return}i.className="jde-banner",i.textContent="Valid joint specification. Every quantity is within its loading budget."}}function Rj(e,n,t){const r=e.querySelector(".jde-correlations"),i=e.querySelector(".jde-correlation-table thead tr"),o=e.querySelector(".jde-correlation-table tbody");if(r===null||i===null||o===null)return;const u=Kk(n,t.eligibleSvars),a=t.eligibleSvars.map((s,c)=>t.eligibleSvars.some((l,f)=>f!==c&&u[c][f]!==0));r.hidden=a.filter(Boolean).length<2,i.querySelectorAll("th").forEach((s,c)=>{c>0&&(s.hidden=!a[c-1])}),o.querySelectorAll("tr").forEach((s,c)=>{s.hidden=!a[c],s.querySelectorAll("td").forEach((l,f)=>{var d;l.hidden=!a[f],l.textContent=Pj(((d=u[c])==null?void 0:d[f])??NaN)})})}function kj(e,n,t,r,i,o){if(e.querySelector(".joint-dependence-editor")===null)return;const u=Tm(n,t,i,o);if(u===null)return;const a=gA(t,r,u.eligibleSvars);for(const s of e.querySelectorAll(".jde-svar-cell")){const c=a.get(s.dataset.svar??""),l=s.querySelector(".jde-svar-label");c!==void 0&&l!==null&&(l.innerHTML=c)}yA(e,Rm(n,u),u,t,r)}function yA(e,n,t,r,i){const o=e.querySelector(".jde-artifact-host");if(o===null)return;const u=CE(n,t.eligibleSvars,t.degenerateSvars);o.innerHTML=u.kind==="invalid"?'<div class="jde-artifact-pending">Preview pauses until the issues above are repaired.</div>':nm(u.lloads,r,i,{keepFolded:!0}).specHtml}function d7(e){const n=Number(e.dataset.latentIndex);if(!Number.isInteger(n))return null;if(e.classList.contains("jde-latent-text")){const t=e.dataset.latentField;return t!=="name"&&t!=="description"?null:{kind:"text",latentIndex:n,field:t,value:e.value}}if(e.classList.contains("jde-loading-range")||e.classList.contains("jde-loading-number")){const t=e.dataset.svar;if(t===void 0)return null;const r=e.value.trim(),i=r===""||!Number.isFinite(Number(r))?null:Number(r);return{kind:"loading",latentIndex:n,svar:t,value:i}}return null}function Nj(e,n){return{latents:e.latents.map((t,r)=>r!==n.latentIndex?t:n.kind==="text"?{...t,[n.field]:n.value}:{...t,loadings:{...t.loadings,[n.svar]:n.value}})}}function Mj(e){const n=e.closest("button");if(n===null)return null;if(n.classList.contains("jde-add-latent-btn"))return{kind:"add"};if(n.classList.contains("jde-zero-loadings-btn"))return{kind:"zero-all"};if(n.classList.contains("jde-remove-all-btn"))return{kind:"remove-all"};if(n.classList.contains("jde-remove-latent-btn")){const t=Number(n.dataset.latentIndex);return Number.isInteger(t)?{kind:"remove",latentIndex:t}:null}return null}function Oj(e,n,t){switch(n.kind){case"add":return{latents:[...e.latents,Pv(t)]};case"remove":return{latents:e.latents.filter((r,i)=>i!==n.latentIndex)};case"zero-all":return{latents:e.latents.map(r=>({...r,loadings:Pv(t).loadings}))};case"remove-all":return{latents:[]}}}function EA(e){return e.replace(/<[^>]*>/g,"").trim()}function qj(e){const n={};for(const t of e.querySelectorAll("tr[data-svar-label]")){const r=t.dataset.svar;r!==void 0&&(n[r]=t.dataset.svarLabel)}return n}function wA(e){return String(e)}function Pj(e){return Number.isFinite(e)?e===0?"0.000":`${e>0?"+":"−"}${Math.abs(e).toFixed(3)}`:"invalid"}function Fj(e,n,t,r,i,o,u){const{source:a}=pe(n.ui.whose);if(a==="yours-plainnum"){mj(e,n,t,r,o,u);return}if(a==="yours-plaincode"){xj(e,n,t,r);return}Dj(e,n,t,r,i)}function Dj(e,n,t,r,i){if(!i){e.innerHTML="";return}const o=pm(t,n,i),u=ot(n,i);if(o.length===0||u.kind==="mix"){e.innerHTML="";return}const a=o[u.recordTrialIndex];e.innerHTML=a===void 0?"":nm(a.lloads,t,r,{offerCopyToYours:!De(n.ui.whose)}).specHtml}function xj(e,n,t,r){var a;const i=n.yoursCodeRecord;if(!i.verified_code_input||i.cparam_combos.length===0){e.innerHTML="";return}const o=vi(i),u=(a=dm(o,t,n))==null?void 0:a.trials[0];e.innerHTML=u===void 0?"":nm(u.lloads,t,r).specHtml}function km(e,n){return e??!!(n??!1)}function Bj(e,n){return!km(e,n)}function Hj(e){return!De(e)}const SA="execution timed out",wh="execution aborted";function Uj(e,n){const r=(n.workerFactory??Gj)();return new Promise((i,o)=>{var l,f;let u=!1;const a=()=>{var d;u=!0,clearTimeout(c),(d=n.signal)==null||d.removeEventListener("abort",s),r.terminate()},s=()=>{u||(a(),o(new Error(wh)))};if((l=n.signal)!=null&&l.aborted){r.terminate(),o(new Error(wh));return}(f=n.signal)==null||f.addEventListener("abort",s);const c=setTimeout(()=>{u||(a(),o(new Error(SA)))},n.timeoutMs);r.addEventListener("message",d=>{u||(a(),i(d.data))}),r.addEventListener("error",d=>{u||(a(),o(new Error(d.message||"worker error")))}),r.postMessage(e)})}function Gj(){return new Worker(new URL("/hirwebdev/assets/plaincode_eval_worker-ChjrGsV-.js",import.meta.url),{type:"module"})}function Vj(e,n,t,r){const{html:i}=mH(n,void 0,t);e.innerHTML=i}const Nm="keymap-popover",Wj=70,jj=620,Xj=260,Yj=120,Ji=16;function Kj(){return wr}function $A(e){const n=window.innerWidth,t=window.innerHeight,r=GU(),i=(r==null?void 0:r.left)??Ji,o=(r==null?void 0:r.bottom)??Ji,u=Math.max(Xj,Math.min(jj,Math.round(n*Wj/100),n-i-Ji)),a=Math.max(Yj,t-o-Ji);e.style.width=`${u}px`,e.style.maxHeight=`${a}px`,e.style.left=`${Math.round(i)}px`,e.style.top=`${Math.round(o)}px`}function Mm(){return document.getElementById(Nm)}function Jj(){return Mm()!==null}function uo(){var e;(e=Mm())==null||e.remove()}function Ko(){const e=Mm();e&&$A(e)}function zj(){const e=MS(),n=Jj();if(e&&n){OS(),uo();return}e||UU(),n?Ko():AA()}function zi(e,n){e.classList.toggle("keymap-row-invalid",n!=="");const t=e.querySelector(".keymap-error");t&&(t.textContent=n)}function Zj(e){const n=Sr();e.innerHTML="";for(const t of Kj()){const r=document.createElement("div");r.className="keymap-row";const i=document.createElement("label");i.className="keymap-label",i.htmlFor=`keymap-input-${t.id}`,i.textContent=t.description;const o=document.createElement("input");o.id=`keymap-input-${t.id}`,o.className="keymap-input",o.type="text",o.maxLength=1,o.autocomplete="off",o.spellcheck=!1,o.value=n[t.id]??"",o.dataset.shortcutId=t.id,o.setAttribute("aria-label",`${t.description} shortcut key`);const u=document.createElement("div");u.className="keymap-error",o.addEventListener("input",()=>{const a=o.dataset.shortcutId,s=B2(o.value);if(!s.ok){zi(r,s.error??"Invalid shortcut key.");return}const c=yS(a,s.key);if(c){const f=wr.find(d=>d.id===c);zi(r,`Already assigned to "${(f==null?void 0:f.description)??c}".`);return}const l=hU(a,s.key);if(!l.ok){zi(r,l.error??"Invalid shortcut key.");return}o.value=l.key,zi(r,"")}),r.appendChild(i),r.appendChild(o),r.appendChild(u),e.appendChild(r)}}function AA(){uo();const e=document.createElement("div");e.id=Nm,e.className="keymap-popover",e.tabIndex=-1;const n=document.createElement("button");n.className="help-widget-close",n.type="button",n.textContent="×",n.setAttribute("aria-label","Close");const t=document.createElement("h3");t.className="keymap-title",t.textContent="Keymap";const r=document.createElement("div");r.className="keymap-body",Zj(r),n.addEventListener("click",uo),e.addEventListener("keydown",i=>{i.key==="Escape"&&uo()}),e.appendChild(n),e.appendChild(t),e.appendChild(r),document.body.appendChild(e),$A(e),e.focus()}const Qj="arg-title-help",eX=20,nX=50,p7=/\b\d+\.\d+\.\d+\b/;function tX(e,n){return p7.test(e)||n!==void 0&&p7.test(n)}function rX(e,n){const t=e.querySelector(".arg-title");if(!t||!tX(t.textContent??"",n))return;const r=Dt(JU,eX,nX);r.classList.add(Qj),t.prepend(r)}const Om="global-example-controls",iX=5;function oX(e){return e.querySelectorAll(".examples").length}function LA(e){return oX(e)>=iX}function IA(e,n){const t=document.getElementById(Om);t&&(t.hidden=!(n&&LA(e)))}function uX(){const e=document.getElementById(Om);return e!==null&&!e.hidden}const Jo="temp-selected-trial-conclusion-density",Zi=`${Jo}-canvas`,h7=Jo,aX=0;function sX(e){return`Temp pending UI redesign: conclusion density for trial ${e} selected in Estimation section:`}function cX(e,n){const t=n===void 0?"":`, ${n.toLocaleString()} MC iters`;return`Precomputed (trial ${e}${t})`}function lX(e,n,t,r){const i=fX(e);i.replaceChildren();const o=dX(n,t,r);if(o===null)return;const u=n.config.conclusion_type_highlevel,a=o.kind==="comparison"?tm(["stored"]):[];if(i.innerHTML=`<div class="result-label">${X(sX(o.trialNumber))}</div>`+(a.length===0?`<canvas id="${Zi}" width="400" height="200"></canvas>`:D2(Zi,a))+`<div class="code-info">${X(cX(o.trialNumber,o.mcIters))}</div>`,o.kind==="comparison"){Fu({box:i,canvasId:Zi,layers:[{comparison:o.comparison,palette:"stored"}],typeHighlevel:u,resizeStateKey:h7,mcItersPerClick:aX});return}const s=i.querySelector(`#${Zi}`);if(s===null)return;const c=[o.series],l=Ft(u),f=()=>ii(s,c,l);f(),bn(s,f,{stateHost:i,stateKey:h7}),O2(s,c,u)}function fX(e){const n=e.querySelector(`#${Jo}`);if(n!==null)return n;const t=document.createElement("div");return t.id=Jo,e.appendChild(t),t}function dX(e,n,t){var d;const{source:r}=pe(n.ui.whose);if(!_i(r))return null;const i=je(n.ui.whose,t);if(i===null||!("cparam_combos"in i)||n.ui.resultTrialSelection.kind!=="trial")return null;const o=ot(n,t);if(o.kind!=="trial")return null;const u=dm(i,e,n);if(u===null)return null;const a=uE(u.trials,o.recordTrialIndex);if(a===void 0)return null;const s=o.recordTrialIndex+1,c=Ru([a]);if(c){const h=Xw(a.precomputed);return h===null||h.independent.density_curve===void 0||h.joint.density_curve===void 0?null:{kind:"comparison",trialNumber:s,mcIters:h.joint.mc_iters,comparison:w2(h)}}const l=(d=ku(a.precomputed,c))==null?void 0:d.stats;if(l===void 0)return null;const f=kw(l);return f===null?null:{kind:"single",trialNumber:s,mcIters:l.mc_iters,series:f}}const m7="calculator-adhoc-meta";function CA(e,n){const t=document.getElementById(m7);if(!n){t==null||t.remove();return}const r=t??(()=>{const o=document.createElement("div");return o.id=m7,e.insertAdjacentElement("beforebegin",o),o})();r.className="adhoc-meta",r.innerHTML="";const i=document.createElement("div");i.className="adhoc-meta-body",w$(i,n),r.appendChild(i)}const Sh="stats-display-select",pX=["probability","odds"],hX="Mean, median, and credible interval probabilities displayed as odds",mX="Computed probabilities displayed as odds";function vX(e){const n=Bn(pe(e.ui.whose).source);return n==="plaincode"||n==="richcode"||e.ui.inputMode==="sample"}function _X(e){return e?Object.values(e).some(n=>n.typeHighlevel==="probability"):!1}function gX(e,n,t){if(!_X(t)){e.innerHTML="";return}const r=n.ui.probAsOdds,i=pX.map(a=>`<option value="${a}"${a===r?" selected":""}>${a}</option>`).join(""),o=vX(n)?hX:mX,u=r==="odds"?`<p class="stats-display-odds-note"><strong>${o}</strong></p>`:"";e.innerHTML=`<div class="stats-display-row"><label for="${Sh}">stats display</label><select id="${Sh}">${i}</select></div>`+u}const TA={INSPECTION_SELECTORS:nt("ESTIMATION","INSPECTION_SELECTORS"),SVAR_CARDS:nt("ESTIMATION","SVAR_CARDS"),JOINT_DEPENDENCE:nt("ESTIMATION","JOINT_DEPENDENCE"),WHOSE_TOGGLE:nt("CALCULATOR","WHOSE_TOGGLE"),CALCULATOR_INPUT:nt("CALCULATOR","CALCULATOR_INPUT"),CALCULATOR_RESULTS:nt("CALCULATOR","CALCULATOR_RESULTS"),DERIVED_FORMS:mh,YOURS_CODE_INPUT:nt("CALCULATOR","YOURS_CODE_INPUT"),YOURS_SAVED_LIST:nt("CALCULATOR","YOURS_SAVED_LIST")};function qm(e){return TA[e]}function bX(e){const n=new Map;for(const i of e){const o=i.kind==="pair"?i.pair:[i.subentry];for(const u of o){if(n.has(u))throw new Error(`Duplicate subentry mount: ${u}`);n.set(u,i)}}for(const i of Object.keys(TA))if(!n.has(i))throw new Error(`Missing subentry mount: ${i}`);function t(i){return document.getElementById(qm(i))}function r(i,o){var u;if(i.visible&&!i.visible(o)){const a=i.kind==="pair"?i.pair:[i.subentry];for(const s of a)(u=t(s))==null||u.replaceChildren();return}if(i.kind==="pair"){const a=t(i.pair[0]),s=t(i.pair[1]);a&&s&&i.render(a,s,o)}else{const a=t(i.subentry);a&&i.render(a,o)}}return{container:t,render(i,o){r(n.get(i),o)},renderAll(i){for(const o of e)r(o,i)}}}var jp,v7;function yX(){if(v7)return jp;v7=1;function e(k){return k instanceof Map?k.clear=k.delete=k.set=function(){throw new Error("map is read-only")}:k instanceof Set&&(k.add=k.clear=k.delete=function(){throw new Error("set is read-only")}),Object.freeze(k),Object.getOwnPropertyNames(k).forEach(D=>{const W=k[D],le=typeof W;(le==="object"||le==="function")&&!Object.isFrozen(W)&&e(W)}),k}class n{constructor(D){D.data===void 0&&(D.data={}),this.data=D.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(k){return k.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(k,...D){const W=Object.create(null);for(const le in k)W[le]=k[le];return D.forEach(function(le){for(const xe in le)W[xe]=le[xe]}),W}const i="</span>",o=k=>!!k.scope,u=(k,{prefix:D})=>{if(k.startsWith("language:"))return k.replace("language:","language-");if(k.includes(".")){const W=k.split(".");return[`${D}${W.shift()}`,...W.map((le,xe)=>`${le}${"_".repeat(xe+1)}`)].join(" ")}return`${D}${k}`};class a{constructor(D,W){this.buffer="",this.classPrefix=W.classPrefix,D.walk(this)}addText(D){this.buffer+=t(D)}openNode(D){if(!o(D))return;const W=u(D.scope,{prefix:this.classPrefix});this.span(W)}closeNode(D){o(D)&&(this.buffer+=i)}value(){return this.buffer}span(D){this.buffer+=`<span class="${D}">`}}const s=(k={})=>{const D={children:[]};return Object.assign(D,k),D};class c{constructor(){this.rootNode=s(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(D){this.top.children.push(D)}openNode(D){const W=s({scope:D});this.add(W),this.stack.push(W)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(D){return this.constructor._walk(D,this.rootNode)}static _walk(D,W){return typeof W=="string"?D.addText(W):W.children&&(D.openNode(W),W.children.forEach(le=>this._walk(D,le)),D.closeNode(W)),D}static _collapse(D){typeof D!="string"&&D.children&&(D.children.every(W=>typeof W=="string")?D.children=[D.children.join("")]:D.children.forEach(W=>{c._collapse(W)}))}}class l extends c{constructor(D){super(),this.options=D}addText(D){D!==""&&this.add(D)}startScope(D){this.openNode(D)}endScope(){this.closeNode()}__addSublanguage(D,W){const le=D.root;W&&(le.scope=`language:${W}`),this.add(le)}toHTML(){return new a(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function f(k){return k?typeof k=="string"?k:k.source:null}function d(k){return v("(?=",k,")")}function h(k){return v("(?:",k,")*")}function p(k){return v("(?:",k,")?")}function v(...k){return k.map(W=>f(W)).join("")}function m(k){const D=k[k.length-1];return typeof D=="object"&&D.constructor===Object?(k.splice(k.length-1,1),D):{}}function g(...k){return"("+(m(k).capture?"":"?:")+k.map(le=>f(le)).join("|")+")"}function _(k){return new RegExp(k.toString()+"|").exec("").length-1}function y(k,D){const W=k&&k.exec(D);return W&&W.index===0}const b=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function E(k,{joinWith:D}){let W=0;return k.map(le=>{W+=1;const xe=W;let Be=f(le),ee="";for(;Be.length>0;){const J=b.exec(Be);if(!J){ee+=Be;break}ee+=Be.substring(0,J.index),Be=Be.substring(J.index+J[0].length),J[0][0]==="\\"&&J[1]?ee+="\\"+String(Number(J[1])+xe):(ee+=J[0],J[0]==="("&&W++)}return ee}).map(le=>`(${le})`).join(D)}const A=/\b\B/,L="[a-zA-Z]\\w*",R="[a-zA-Z_]\\w*",T="\\b\\d+(\\.\\d+)?",$="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",w="\\b(0b[01]+)",S="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",I=(k={})=>{const D=/^#![ ]*\//;return k.binary&&(k.begin=v(D,/.*\b/,k.binary,/\b.*/)),r({scope:"meta",begin:D,end:/$/,relevance:0,"on:begin":(W,le)=>{W.index!==0&&le.ignoreMatch()}},k)},C={begin:"\\\\[\\s\\S]",relevance:0},P={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[C]},M={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[C]},H={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},q=function(k,D,W={}){const le=r({scope:"comment",begin:k,end:D,contains:[]},W);le.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const xe=g("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return le.contains.push({begin:v(/[ ]+/,"(",xe,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),le},F=q("//","$"),O=q("/\\*","\\*/"),Z=q("#","$"),U={scope:"number",begin:T,relevance:0},K={scope:"number",begin:$,relevance:0},Q={scope:"number",begin:w,relevance:0},ie={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[C,{begin:/\[/,end:/\]/,relevance:0,contains:[C]}]},B={scope:"title",begin:L,relevance:0},j={scope:"title",begin:R,relevance:0},V={begin:"\\.\\s*"+R,relevance:0};var me=Object.freeze({__proto__:null,APOS_STRING_MODE:P,BACKSLASH_ESCAPE:C,BINARY_NUMBER_MODE:Q,BINARY_NUMBER_RE:w,COMMENT:q,C_BLOCK_COMMENT_MODE:O,C_LINE_COMMENT_MODE:F,C_NUMBER_MODE:K,C_NUMBER_RE:$,END_SAME_AS_BEGIN:function(k){return Object.assign(k,{"on:begin":(D,W)=>{W.data._beginMatch=D[1]},"on:end":(D,W)=>{W.data._beginMatch!==D[1]&&W.ignoreMatch()}})},HASH_COMMENT_MODE:Z,IDENT_RE:L,MATCH_NOTHING_RE:A,METHOD_GUARD:V,NUMBER_MODE:U,NUMBER_RE:T,PHRASAL_WORDS_MODE:H,QUOTE_STRING_MODE:M,REGEXP_MODE:ie,RE_STARTERS_RE:S,SHEBANG:I,TITLE_MODE:B,UNDERSCORE_IDENT_RE:R,UNDERSCORE_TITLE_MODE:j});function ne(k,D){k.input[k.index-1]==="."&&D.ignoreMatch()}function ue(k,D){k.className!==void 0&&(k.scope=k.className,delete k.className)}function Ae(k,D){D&&k.beginKeywords&&(k.begin="\\b("+k.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",k.__beforeBegin=ne,k.keywords=k.keywords||k.beginKeywords,delete k.beginKeywords,k.relevance===void 0&&(k.relevance=0))}function ye(k,D){Array.isArray(k.illegal)&&(k.illegal=g(...k.illegal))}function at(k,D){if(k.match){if(k.begin||k.end)throw new Error("begin & end are not supported with match");k.begin=k.match,delete k.match}}function un(k,D){k.relevance===void 0&&(k.relevance=1)}const _e=(k,D)=>{if(!k.beforeMatch)return;if(k.starts)throw new Error("beforeMatch cannot be used with starts");const W=Object.assign({},k);Object.keys(k).forEach(le=>{delete k[le]}),k.keywords=W.keywords,k.begin=v(W.beforeMatch,d(W.begin)),k.starts={relevance:0,contains:[Object.assign(W,{endsParent:!0})]},k.relevance=0,delete W.beforeMatch},$n=["of","and","for","in","not","or","if","then","parent","list","value"],ze="keyword";function An(k,D,W=ze){const le=Object.create(null);return typeof k=="string"?xe(W,k.split(" ")):Array.isArray(k)?xe(W,k):Object.keys(k).forEach(function(Be){Object.assign(le,An(k[Be],D,Be))}),le;function xe(Be,ee){D&&(ee=ee.map(J=>J.toLowerCase())),ee.forEach(function(J){const ce=J.split("|");le[ce[0]]=[Be,At(ce[0],ce[1])]})}}function At(k,D){return D?Number(D):z(k)?0:1}function z(k){return $n.includes(k.toLowerCase())}const ve={},Ln=k=>{console.error(k)},Cr=(k,...D)=>{console.log(`WARN: ${k}`,...D)},zn=(k,D)=>{ve[`${k}/${D}`]||(console.log(`Deprecated as of ${k}. ${D}`),ve[`${k}/${D}`]=!0)},st=new Error;function xt(k,D,{key:W}){let le=0;const xe=k[W],Be={},ee={};for(let J=1;J<=D.length;J++)ee[J+le]=xe[J],Be[J+le]=!0,le+=_(D[J-1]);k[W]=ee,k[W]._emit=Be,k[W]._multi=!0}function Tr(k){if(Array.isArray(k.begin)){if(k.skip||k.excludeBegin||k.returnBegin)throw Ln("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),st;if(typeof k.beginScope!="object"||k.beginScope===null)throw Ln("beginScope must be object"),st;xt(k,k.begin,{key:"beginScope"}),k.begin=E(k.begin,{joinWith:""})}}function Rr(k){if(Array.isArray(k.end)){if(k.skip||k.excludeEnd||k.returnEnd)throw Ln("skip, excludeEnd, returnEnd not compatible with endScope: {}"),st;if(typeof k.endScope!="object"||k.endScope===null)throw Ln("endScope must be object"),st;xt(k,k.end,{key:"endScope"}),k.end=E(k.end,{joinWith:""})}}function Fi(k){k.scope&&typeof k.scope=="object"&&k.scope!==null&&(k.beginScope=k.scope,delete k.scope)}function Ze(k){Fi(k),typeof k.beginScope=="string"&&(k.beginScope={_wrap:k.beginScope}),typeof k.endScope=="string"&&(k.endScope={_wrap:k.endScope}),Tr(k),Rr(k)}function Pe(k){function D(ee,J){return new RegExp(f(ee),"m"+(k.case_insensitive?"i":"")+(k.unicodeRegex?"u":"")+(J?"g":""))}class W{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(J,ce){ce.position=this.position++,this.matchIndexes[this.matchAt]=ce,this.regexes.push([ce,J]),this.matchAt+=_(J)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const J=this.regexes.map(ce=>ce[1]);this.matcherRe=D(E(J,{joinWith:"|"}),!0),this.lastIndex=0}exec(J){this.matcherRe.lastIndex=this.lastIndex;const ce=this.matcherRe.exec(J);if(!ce)return null;const Xe=ce.findIndex((kr,Zu)=>Zu>0&&kr!==void 0),Ue=this.matchIndexes[Xe];return ce.splice(0,Xe),Object.assign(ce,Ue)}}class le{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(J){if(this.multiRegexes[J])return this.multiRegexes[J];const ce=new W;return this.rules.slice(J).forEach(([Xe,Ue])=>ce.addRule(Xe,Ue)),ce.compile(),this.multiRegexes[J]=ce,ce}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(J,ce){this.rules.push([J,ce]),ce.type==="begin"&&this.count++}exec(J){const ce=this.getMatcher(this.regexIndex);ce.lastIndex=this.lastIndex;let Xe=ce.exec(J);if(this.resumingScanAtSamePosition()&&!(Xe&&Xe.index===this.lastIndex)){const Ue=this.getMatcher(0);Ue.lastIndex=this.lastIndex+1,Xe=Ue.exec(J)}return Xe&&(this.regexIndex+=Xe.position+1,this.regexIndex===this.count&&this.considerAll()),Xe}}function xe(ee){const J=new le;return ee.contains.forEach(ce=>J.addRule(ce.begin,{rule:ce,type:"begin"})),ee.terminatorEnd&&J.addRule(ee.terminatorEnd,{type:"end"}),ee.illegal&&J.addRule(ee.illegal,{type:"illegal"}),J}function Be(ee,J){const ce=ee;if(ee.isCompiled)return ce;[ue,at,Ze,_e].forEach(Ue=>Ue(ee,J)),k.compilerExtensions.forEach(Ue=>Ue(ee,J)),ee.__beforeBegin=null,[Ae,ye,un].forEach(Ue=>Ue(ee,J)),ee.isCompiled=!0;let Xe=null;return typeof ee.keywords=="object"&&ee.keywords.$pattern&&(ee.keywords=Object.assign({},ee.keywords),Xe=ee.keywords.$pattern,delete ee.keywords.$pattern),Xe=Xe||/\w+/,ee.keywords&&(ee.keywords=An(ee.keywords,k.case_insensitive)),ce.keywordPatternRe=D(Xe,!0),J&&(ee.begin||(ee.begin=/\B|\b/),ce.beginRe=D(ce.begin),!ee.end&&!ee.endsWithParent&&(ee.end=/\B|\b/),ee.end&&(ce.endRe=D(ce.end)),ce.terminatorEnd=f(ce.end)||"",ee.endsWithParent&&J.terminatorEnd&&(ce.terminatorEnd+=(ee.end?"|":"")+J.terminatorEnd)),ee.illegal&&(ce.illegalRe=D(ee.illegal)),ee.contains||(ee.contains=[]),ee.contains=[].concat(...ee.contains.map(function(Ue){return Qe(Ue==="self"?ee:Ue)})),ee.contains.forEach(function(Ue){Be(Ue,ce)}),ee.starts&&Be(ee.starts,J),ce.matcher=xe(ce),ce}if(k.compilerExtensions||(k.compilerExtensions=[]),k.contains&&k.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return k.classNameAliases=r(k.classNameAliases||{}),Be(k)}function Bt(k){return k?k.endsWithParent||Bt(k.starts):!1}function Qe(k){return k.variants&&!k.cachedVariants&&(k.cachedVariants=k.variants.map(function(D){return r(k,{variants:null},D)})),k.cachedVariants?k.cachedVariants:Bt(k)?r(k,{starts:k.starts?r(k.starts):null}):Object.isFrozen(k)?r(k):k}var In="11.11.1";class fn extends Error{constructor(D,W){super(D),this.name="HTMLInjectionError",this.html=W}}const Lt=t,Ht=r,Ut=Symbol("nomatch"),_L=7,Wm=function(k){const D=Object.create(null),W=Object.create(null),le=[];let xe=!0;const Be="Could not find the language '{}', did you forget to load/include a language module?",ee={disableAutodetect:!0,name:"Plain text",contains:[]};let J={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:l};function ce(G){return J.noHighlightRe.test(G)}function Xe(G){let re=G.className+" ";re+=G.parentNode?G.parentNode.className:"";const he=J.languageDetectRe.exec(re);if(he){const Ie=ct(he[1]);return Ie||(Cr(Be.replace("{}",he[1])),Cr("Falling back to no-highlight mode for this block.",G)),Ie?he[1]:"no-highlight"}return re.split(/\s+/).find(Ie=>ce(Ie)||ct(Ie))}function Ue(G,re,he){let Ie="",Ve="";typeof re=="object"?(Ie=G,he=re.ignoreIllegals,Ve=re.language):(zn("10.7.0","highlight(lang, code, ...args) has been deprecated."),zn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Ve=G,Ie=re),he===void 0&&(he=!0);const Cn={code:Ie,language:Ve};xi("before:highlight",Cn);const lt=Cn.result?Cn.result:kr(Cn.language,Cn.code,he);return lt.code=Cn.code,xi("after:highlight",lt),lt}function kr(G,re,he,Ie){const Ve=Object.create(null);function Cn(Y,te){return Y.keywords[te]}function lt(){if(!fe.keywords){en.addText(Ce);return}let Y=0;fe.keywordPatternRe.lastIndex=0;let te=fe.keywordPatternRe.exec(Ce),de="";for(;te;){de+=Ce.substring(Y,te.index);const Se=Nn.case_insensitive?te[0].toLowerCase():te[0],nn=Cn(fe,Se);if(nn){const[Zn,OL]=nn;if(en.addText(de),de="",Ve[Se]=(Ve[Se]||0)+1,Ve[Se]<=_L&&(Ui+=OL),Zn.startsWith("_"))de+=te[0];else{const qL=Nn.classNameAliases[Zn]||Zn;kn(te[0],qL)}}else de+=te[0];Y=fe.keywordPatternRe.lastIndex,te=fe.keywordPatternRe.exec(Ce)}de+=Ce.substring(Y),en.addText(de)}function Bi(){if(Ce==="")return;let Y=null;if(typeof fe.subLanguage=="string"){if(!D[fe.subLanguage]){en.addText(Ce);return}Y=kr(fe.subLanguage,Ce,!0,Qm[fe.subLanguage]),Qm[fe.subLanguage]=Y._top}else Y=Qu(Ce,fe.subLanguage.length?fe.subLanguage:null);fe.relevance>0&&(Ui+=Y.relevance),en.__addSublanguage(Y._emitter,Y.language)}function dn(){fe.subLanguage!=null?Bi():lt(),Ce=""}function kn(Y,te){Y!==""&&(en.startScope(te),en.addText(Y),en.endScope())}function Km(Y,te){let de=1;const Se=te.length-1;for(;de<=Se;){if(!Y._emit[de]){de++;continue}const nn=Nn.classNameAliases[Y[de]]||Y[de],Zn=te[de];nn?kn(Zn,nn):(Ce=Zn,lt(),Ce=""),de++}}function Jm(Y,te){return Y.scope&&typeof Y.scope=="string"&&en.openNode(Nn.classNameAliases[Y.scope]||Y.scope),Y.beginScope&&(Y.beginScope._wrap?(kn(Ce,Nn.classNameAliases[Y.beginScope._wrap]||Y.beginScope._wrap),Ce=""):Y.beginScope._multi&&(Km(Y.beginScope,te),Ce="")),fe=Object.create(Y,{parent:{value:fe}}),fe}function zm(Y,te,de){let Se=y(Y.endRe,de);if(Se){if(Y["on:end"]){const nn=new n(Y);Y["on:end"](te,nn),nn.isMatchIgnored&&(Se=!1)}if(Se){for(;Y.endsParent&&Y.parent;)Y=Y.parent;return Y}}if(Y.endsWithParent)return zm(Y.parent,te,de)}function TL(Y){return fe.matcher.regexIndex===0?(Ce+=Y[0],1):(ra=!0,0)}function RL(Y){const te=Y[0],de=Y.rule,Se=new n(de),nn=[de.__beforeBegin,de["on:begin"]];for(const Zn of nn)if(Zn&&(Zn(Y,Se),Se.isMatchIgnored))return TL(te);return de.skip?Ce+=te:(de.excludeBegin&&(Ce+=te),dn(),!de.returnBegin&&!de.excludeBegin&&(Ce=te)),Jm(de,Y),de.returnBegin?0:te.length}function kL(Y){const te=Y[0],de=re.substring(Y.index),Se=zm(fe,Y,de);if(!Se)return Ut;const nn=fe;fe.endScope&&fe.endScope._wrap?(dn(),kn(te,fe.endScope._wrap)):fe.endScope&&fe.endScope._multi?(dn(),Km(fe.endScope,Y)):nn.skip?Ce+=te:(nn.returnEnd||nn.excludeEnd||(Ce+=te),dn(),nn.excludeEnd&&(Ce=te));do fe.scope&&en.closeNode(),!fe.skip&&!fe.subLanguage&&(Ui+=fe.relevance),fe=fe.parent;while(fe!==Se.parent);return Se.starts&&Jm(Se.starts,Y),nn.returnEnd?0:te.length}function NL(){const Y=[];for(let te=fe;te!==Nn;te=te.parent)te.scope&&Y.unshift(te.scope);Y.forEach(te=>en.openNode(te))}let Hi={};function Zm(Y,te){const de=te&&te[0];if(Ce+=Y,de==null)return dn(),0;if(Hi.type==="begin"&&te.type==="end"&&Hi.index===te.index&&de===""){if(Ce+=re.slice(te.index,te.index+1),!xe){const Se=new Error(`0 width match regex (${G})`);throw Se.languageName=G,Se.badRule=Hi.rule,Se}return 1}if(Hi=te,te.type==="begin")return RL(te);if(te.type==="illegal"&&!he){const Se=new Error('Illegal lexeme "'+de+'" for mode "'+(fe.scope||"<unnamed>")+'"');throw Se.mode=fe,Se}else if(te.type==="end"){const Se=kL(te);if(Se!==Ut)return Se}if(te.type==="illegal"&&de==="")return Ce+=`
`,1;if(ta>1e5&&ta>te.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Ce+=de,de.length}const Nn=ct(G);if(!Nn)throw Ln(Be.replace("{}",G)),new Error('Unknown language: "'+G+'"');const ML=Pe(Nn);let na="",fe=Ie||ML;const Qm={},en=new J.__emitter(J);NL();let Ce="",Ui=0,It=0,ta=0,ra=!1;try{if(Nn.__emitTokens)Nn.__emitTokens(re,en);else{for(fe.matcher.considerAll();;){ta++,ra?ra=!1:fe.matcher.considerAll(),fe.matcher.lastIndex=It;const Y=fe.matcher.exec(re);if(!Y)break;const te=re.substring(It,Y.index),de=Zm(te,Y);It=Y.index+de}Zm(re.substring(It))}return en.finalize(),na=en.toHTML(),{language:G,value:na,relevance:Ui,illegal:!1,_emitter:en,_top:fe}}catch(Y){if(Y.message&&Y.message.includes("Illegal"))return{language:G,value:Lt(re),illegal:!0,relevance:0,_illegalBy:{message:Y.message,index:It,context:re.slice(It-100,It+100),mode:Y.mode,resultSoFar:na},_emitter:en};if(xe)return{language:G,value:Lt(re),illegal:!1,relevance:0,errorRaised:Y,_emitter:en,_top:fe};throw Y}}function Zu(G){const re={value:Lt(G),illegal:!1,relevance:0,_top:ee,_emitter:new J.__emitter(J)};return re._emitter.addText(G),re}function Qu(G,re){re=re||J.languages||Object.keys(D);const he=Zu(G),Ie=re.filter(ct).filter(Ym).map(dn=>kr(dn,G,!1));Ie.unshift(he);const Ve=Ie.sort((dn,kn)=>{if(dn.relevance!==kn.relevance)return kn.relevance-dn.relevance;if(dn.language&&kn.language){if(ct(dn.language).supersetOf===kn.language)return 1;if(ct(kn.language).supersetOf===dn.language)return-1}return 0}),[Cn,lt]=Ve,Bi=Cn;return Bi.secondBest=lt,Bi}function gL(G,re,he){const Ie=re&&W[re]||he;G.classList.add("hljs"),G.classList.add(`language-${Ie}`)}function ea(G){let re=null;const he=Xe(G);if(ce(he))return;if(xi("before:highlightElement",{el:G,language:he}),G.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",G);return}if(G.children.length>0&&(J.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(G)),J.throwUnescapedHTML))throw new fn("One of your code blocks includes unescaped HTML.",G.innerHTML);re=G;const Ie=re.textContent,Ve=he?Ue(Ie,{language:he,ignoreIllegals:!0}):Qu(Ie);G.innerHTML=Ve.value,G.dataset.highlighted="yes",gL(G,he,Ve.language),G.result={language:Ve.language,re:Ve.relevance,relevance:Ve.relevance},Ve.secondBest&&(G.secondBest={language:Ve.secondBest.language,relevance:Ve.secondBest.relevance}),xi("after:highlightElement",{el:G,result:Ve,text:Ie})}function bL(G){J=Ht(J,G)}const yL=()=>{Di(),zn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function EL(){Di(),zn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let jm=!1;function Di(){function G(){Di()}if(document.readyState==="loading"){jm||window.addEventListener("DOMContentLoaded",G,!1),jm=!0;return}document.querySelectorAll(J.cssSelector).forEach(ea)}function wL(G,re){let he=null;try{he=re(k)}catch(Ie){if(Ln("Language definition for '{}' could not be registered.".replace("{}",G)),xe)Ln(Ie);else throw Ie;he=ee}he.name||(he.name=G),D[G]=he,he.rawDefinition=re.bind(null,k),he.aliases&&Xm(he.aliases,{languageName:G})}function SL(G){delete D[G];for(const re of Object.keys(W))W[re]===G&&delete W[re]}function $L(){return Object.keys(D)}function ct(G){return G=(G||"").toLowerCase(),D[G]||D[W[G]]}function Xm(G,{languageName:re}){typeof G=="string"&&(G=[G]),G.forEach(he=>{W[he.toLowerCase()]=re})}function Ym(G){const re=ct(G);return re&&!re.disableAutodetect}function AL(G){G["before:highlightBlock"]&&!G["before:highlightElement"]&&(G["before:highlightElement"]=re=>{G["before:highlightBlock"](Object.assign({block:re.el},re))}),G["after:highlightBlock"]&&!G["after:highlightElement"]&&(G["after:highlightElement"]=re=>{G["after:highlightBlock"](Object.assign({block:re.el},re))})}function LL(G){AL(G),le.push(G)}function IL(G){const re=le.indexOf(G);re!==-1&&le.splice(re,1)}function xi(G,re){const he=G;le.forEach(function(Ie){Ie[he]&&Ie[he](re)})}function CL(G){return zn("10.7.0","highlightBlock will be removed entirely in v12.0"),zn("10.7.0","Please use highlightElement now."),ea(G)}Object.assign(k,{highlight:Ue,highlightAuto:Qu,highlightAll:Di,highlightElement:ea,highlightBlock:CL,configure:bL,initHighlighting:yL,initHighlightingOnLoad:EL,registerLanguage:wL,unregisterLanguage:SL,listLanguages:$L,getLanguage:ct,registerAliases:Xm,autoDetection:Ym,inherit:Ht,addPlugin:LL,removePlugin:IL}),k.debugMode=function(){xe=!1},k.safeMode=function(){xe=!0},k.versionString=In,k.regex={concat:v,lookahead:d,either:g,optional:p,anyNumberOfTimes:h};for(const G in me)typeof me[G]=="object"&&e(me[G]);return Object.assign(k,me),k},Gt=Wm({});return Gt.newInstance=()=>Wm({}),jp=Gt,Gt.HighlightJS=Gt,Gt.default=Gt,jp}var EX=yX();const RA=jn(EX);function wX(e){const n=e.regex,t=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),r=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],a={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:r,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},s={className:"meta",begin:/^(>>>|\.\.\.) /},c={className:"subst",begin:/\{/,end:/\}/,keywords:a,illegal:/#/},l={begin:/\{\{/,relevance:0},f={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,s,l,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,s,l,c]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,l,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,l,c]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},d="[0-9](_?[0-9])*",h=`(\\b(${d}))?\\.(${d})|\\b(${d})\\.`,p=`\\b|${r.join("|")}`,v={className:"number",relevance:0,variants:[{begin:`(\\b(${d})|(${h}))[eE][+-]?(${d})[jJ]?(?=${p})`},{begin:`(${h})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${p})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${p})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${p})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${p})`},{begin:`\\b(${d})[jJ](?=${p})`}]},m={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:a,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},g={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:["self",s,v,f,e.HASH_COMMENT_MODE]}]};return c.contains=[f,v,s],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:a,illegal:/(<\/|\?)|=>/,contains:[s,v,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},f,m,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,t],scope:{1:"keyword",3:"title.function"},contains:[g]},{variants:[{match:[/\bclass/,/\s+/,t,/\s*/,/\(\s*/,t,/\s*\)/]},{match:[/\bclass/,/\s+/,t]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[v,g,f]}]}}RA.registerLanguage("python",wX);const _7=RA,kA="agent-code-modal-backdrop",$h="agent-code-view-btn",SX="agent-code-block",$X="View code";function AX(e){const n=e==null?void 0:e.agent_code;return n!==void 0&&n.trim()!==""?n:void 0}function LX(e,n){const t=`trial ${n+1} code`;return e===""?t:`${e} — ${t}`}function IX(e,n,t,r){var s;if(Gr(),(s=e.querySelector(`:scope > .${$h}`))==null||s.remove(),t.kind==="mix")return;const i=cm(n.length,t.recordTrialIndex),o=AX(n[i]);if(o===void 0)return;const u=LX(r,i),a=document.createElement("button");a.className=$h,a.textContent=$X,a.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation(),CX(o,u)}),e.appendChild(a)}function CX(e,n){Gr();const t=document.createElement("div");t.id=kA,t.className="agent-code-backdrop";const r=document.createElement("div");r.className="agent-code-modal";const i=document.createElement("button");i.className="agent-code-close-btn",i.textContent="×",i.title="Close (Esc)",i.addEventListener("click",Gr),r.appendChild(i);const o=document.createElement("h2");o.className="agent-code-modal-header",o.textContent=n,r.appendChild(o),r.appendChild(TX(e)),t.appendChild(r),document.body.appendChild(t),document.addEventListener("keydown",NA),t.addEventListener("click",u=>{u.target===t&&Gr()})}function Gr(){const e=document.getElementById(kA);e&&(e.remove(),document.removeEventListener("keydown",NA))}function NA(e){e.key==="Escape"&&Gr()}function TX(e){const n=document.createElement("pre");n.className=SX;const t=document.createElement("code");if(_7)try{return t.innerHTML=_7.highlight(e,{language:"python"}).value,n.appendChild(t),n}catch{}return t.textContent=e,n.appendChild(t),n}const Pm="StringFromSet",RX="Parameters",kX="Fixed Parameters",NX="Free Parameters";function MX(e,n,t,r,i,o,u){const a=e.filter(fo);if(a.length===0)return{headerText:"",bodyHtml:""};const{source:s}=pe(n),c=Bn(s)!=="plainnum",l=on(s)==="yours",f=c?NX:l?RX:kX,d=r??X,h=c?"":MA(a,t,d,i,o),p=[];for(const v of a){const m=Le(v.id),g=d(v.defn),_=(u==null?void 0:u(v))??{atStart:"",atEnd:""},y=t[m]??v.default_value;if(typeof y=="object")throw new Error(`Cparam ${v.id} has a non-scalar current value`);let b=zh(m,v),E="";c?E=fE(v.allowed_values):l?b+=" = "+qX(m,v,y):b+=` <span class="cparam-or-aopt-value">= ${X(String(y))}</span>`,p.push(`<div class="cparam-or-aopt" id="opt-${m}"><div class="cparam-or-aopt-header">${b}</div><div class="cparam-or-aopt-defn">${_.atStart}${g}${_.atEnd}</div>`+E+"</div>")}return{headerText:f,bodyHtml:h+p.join("")}}function MA(e,n,t,r,i){if(!r||!i)return"";const o=OX(e,n);return o===null||r(o)?"":`<p class="arg-warning">${t(i)}</p>`}function OX(e,n){const t={};for(const r of e){const i=Le(r.id),o=n[i]??r.default_value;if(Qo(r.allowed_values)==="string"){if(typeof o!="string")return null;t[i]=o;continue}const u=Number(o);if(!Number.isFinite(u))return null;t[i]=u}return t}function qX(e,n,t){return Eo(e,n,t,{dataAttribute:"data-cparam-body",selectClass:"cparam-body-select",inputClass:"cparam-body-input"},Pm)}function PX(e,n,t,r,i,o){const{headerText:u,bodyHtml:a}=MX(n.get_cparams(),r.ui.whose,t.displayOptionValues,l=>Ee(l,t),i,o,l=>Tn(l.srcquotes,t)),s=document.getElementById("cparams-section");if(!a){e.innerHTML="",s&&(s.hidden=!0);return}s&&(s.hidden=!1);const c=document.getElementById("cparams-section-header");c&&(c.textContent=u),e.innerHTML=a}const OA="combination-selector",FX="combination-selector-pair",DX="combination-selector-param-name",xX="inspected-cparam-select",BX="data-inspected-cparam",HX="Inspect at",UX="combination-selector-label",GX=".arg-warning";function VX(e,n){return e.has_cparams()&&Bn(pe(n).source)!=="plainnum"}function WX(e,n,t){if(!VX(e,n.ui.whose))return"";const r=e.get_cparams().map(i=>XX(i,dE(i,n))).join("");return`<div class="${OA}"><span class="${UX}">${HX}</span>`+r+qA(e,n,t)+"</div>"}function jX(e,n,t,r){const i=e.querySelector(`.${OA}`);if(i===null)return;const o=qA(n,t,r),u=i.querySelector(`:scope > ${GX}`);o===""?u==null||u.remove():u?u.outerHTML=o:i.insertAdjacentHTML("beforeend",o)}function qA(e,n,t){return MA(e.get_cparams(),pE(e,n),t.renderDefn??X,t.filter,t.description)}function XX(e,n){const t=Le(e.id),r=e.longname??t,i=Zh(e).map(o=>{const u=String(o),a=u===String(n)?" selected":"";return`<option value="${ae(u)}"${a}>${X(u)}</option>`}).join("");return`<span class="${FX}"><span class="${DX}">${X(r)}</span><select class="${xX}" ${BX}="${ae(t)}">${i}</select></span>`}const YX="inspection-selectors-row",KX="trial-selector",Yu="trial-selector-btn",Ku="data-trial-selection",PA="trial-selector-btn-no-response",g7="trial-selection-suffix",JX="showing",FA="This trial gave no response for these parameter values",DA=2,zX=[Ge.ESTIMATION,Ge.TCHOICE,Ge.RESPONSE_NOTES];function ZX(e,n,t,r,i={}){const o=Uu(t,r),u=[o<DA?"":eY(o,xA(n,t,r)),WX(n,t,i)].filter(a=>a!=="");if(u.length===0){e.replaceChildren();return}e.innerHTML=`<div class="${YX}">${u.join("")}</div>`,BA(e,ot(t,r))}function xA(e,n,t){const r=new Set;return pm(e,n,t).forEach((i,o)=>{i===void 0&&r.add(o)}),r}function QX(e,n,t,r){const i=xA(n,t,r);for(const o of e.querySelectorAll(`.${Yu}`)){const u=e2(o.getAttribute(Ku)??""),a=u!==null&&u.kind==="trial"&&i.has(u.recordTrialIndex);o.classList.toggle(PA,a),a?o.title=FA:o.removeAttribute("title")}}function eY(e,n){const t=[b7(zr,zr,!1)];for(let r=0;r<e;r++)t.push(b7(Qh({kind:"trial",recordTrialIndex:r}),String(r+1),n.has(r)));return`<div class="${KX}"><span class="trial-selector-label">${JX}</span><div class="trial-selector-buttons">${t.join("")}</div></div>`}function b7(e,n,t){const r=[Yu];t&&r.push(PA);const i=t?` title="${FA}"`:"";return`<button class="${r.join(" ")}"${i} ${Ku}="${e}">${n}</button>`}function BA(e,n){const t=Qh(n);for(const r of e.querySelectorAll(`.${Yu}`))r.classList.toggle("active",r.getAttribute(Ku)===t)}function nY(e,n){return n<DA?null:e.kind==="mix"?`mixture of ${n} trials`:`trial ${e.recordTrialIndex+1}`}function HA(e,n){const t=nY(e,n);for(const r of zX){const i=document.getElementById(`${r}-section-header`);i&&tY(i,t)}}function tY(e,n){var i;if((i=e.querySelector(`:scope > .${g7}`))==null||i.remove(),n===null)return;const t=document.createElement("span");t.className=g7,t.textContent=n;const r=e.querySelector(`:scope > .${$h}`);r?e.insertBefore(t,r):e.appendChild(t)}const zo="long-text-abbreviable",Fm="long-text-abbreviated",Dm="long-text-abbrev-tail",UA="long-text-abbrev-control",xm="long-text-abbrev-toggle",rY="long-text-abbrev-expand",iY="long-text-abbrev-collapse",oY="more",uY="abbrev",aY="…",sY=20,cY=.5,GA=[xy],lY=[...GA,Gh,"srcquotes-inline",By,Hy,Uy],fY="a, .ref-popover, .symbol-ref-name, .inline-note-ref, .srcquote-widget",dY=`<span class="${UA} ${rY}">${aY}<button class="${xm}">${oY}</button></span>`,pY=`<button class="${UA} ${xm} ${iY}">${uY}</button>`;function hY(e,{containers:n,thresholdChars:t,startAbbreviated:r}){if(!Number.isFinite(t)||t<1)return;const i=[];for(const o of n)for(const u of e.querySelectorAll(`.${o.containerClass}`)){if(u.classList.contains(zo))continue;const a=u.querySelector(o.ownContentSelector);if(a===null)continue;const{totalChars:s,cut:c}=bY(_Y(a),t);c===null||s<=t||s-c.headChars<t*cY||i.push({container:u,content:a,cut:c})}for(const{container:o,content:u,cut:a}of i){const s=EY(a,u);AY(s,u).insertAdjacentHTML("afterend",dY),LY(u).insertAdjacentHTML("beforeend",pY),o.classList.add(zo),o.classList.toggle(Fm,r)}}function mY(e,n){for(const t of e.querySelectorAll(`.${zo}`))t.classList.toggle(Fm,n)}function vY(e){const n=e.closest(`.${zo}`);n!==null&&n.classList.toggle(Fm)}function _Y(e){const n=[],t=r=>{for(const i of r.childNodes)i.nodeType===Node.TEXT_NODE?n.push(i):i.nodeType===Node.ELEMENT_NODE&&!gY(i)&&t(i)};return t(e),n}function gY(e){return e.hasAttribute("hidden")||e.localName==="svg"?!0:getComputedStyle(e).display==="none"}function bY(e,n){let t=0,r=!0,i=null;for(const o of e)for(let u=0;u<o.data.length;u++){const a=yY(o.data[u]);a&&r||(r=a,t++,i===null&&t===n&&(i={node:o,offset:u+1,headChars:t}))}return{totalChars:t,cut:i}}function yY(e){return e.trim()===""}function EY(e,n){const t=wY(e.node,n);let r;t!==null?(t.classList.add(Dm),r=t):r=VA(e.node.splitText(SY(e.node.data,e.offset)));let i=r;for(;i.parentNode!==null&&i!==n;){const o=[];for(let u=i.nextSibling;u!==null;u=u.nextSibling)o.push(u);for(const u of o)$Y(u);i=i.parentNode}return r}function wY(e,n){let t=null;for(let r=e.parentElement;r!==null&&r!==n;r=r.parentElement)r.matches(fY)&&(t=r);return t}function SY(e,n){const t=e.lastIndexOf(" ",n);return t<=0||n-t>sY?n:t}function $Y(e){e.nodeType===Node.ELEMENT_NODE?e.classList.add(Dm):e.nodeType===Node.TEXT_NODE&&VA(e)}function VA(e){const n=document.createElement("span");return n.className=Dm,e.parentNode.insertBefore(n,e),n.appendChild(e),n}function AY(e,n){let t=e,r=t.parentElement;for(;r!==null&&r!==n&&!IY(r);)t=r,r=t.parentElement;return t}function LY(e){const n=e.lastElementChild;return n!==null&&GA.some(t=>n.classList.contains(t))?n:e}function IY(e){return lY.some(n=>e.classList.contains(n))}const CY="srcquote-explainer",TY="srcquote-explainer",RY=`${Ge.SRCQUOTE_EXPLAINER}-section`;function kY(){return PS[CY]}function NY(e,n){const t=document.getElementById(RY),r=n.renderedSrcquoteIds===void 0||n.renderedSrcquoteIds.size>0;t&&(t.hidden=!r),e.innerHTML=r?`<div class="${TY}"><span class="${Gh}">`+Ee(kY(),n)+"</span></div>":""}function y7(e,n){if(n.kind==="sourcequote")return{kind:"sourcequote",quotes:e.resolve_srcquotes(n.sourcequoteIds)};if(![...Mh(e).values()].some(r=>r.anchor===n.targetId))throw new Error(`Popover target ${JSON.stringify(n.targetId)} is not present in ${e.aid}.`);return{kind:"entity",rawBody:MY(e).get(n.targetId)??"",anchor:n.targetId}}function MY(e){const n=new Map;for(const t of e.isym_entries()){const r=t.id.replace(/^isym:/,"");n.set(`#isym-${r}`,t.defn)}for(const t of Rh(e))n.set(t.anchor,t.defn);for(const t of e.svar_decls()){const r=Q7(t.id);n.set(`#gloss-${r}`,t.defn);const i=`isym:${r}`,o=e.can_consolidate_isym_svar(i)?e.get_isym(i).defn:t.defn,u=[`{expr:${r}}`];o&&u.push(o),n.set(`#${Nh}${r}`,u.join(`

`))}for(const t of e.get_display_form_keys())n.set(`#form-${eu(t)}`,e.get_display_form(t));for(const t of e.get_axioms()){const r=e.get_display_ax(t.id);r&&n.set(`#${kh}${Wr(t.id)}`,r)}for(const t of e.get_options())n.set(`#opt-${Le(t.id)}`,t.defn);for(const t of e.get_tchoice_decls())n.set(`#tchoice-${Vr(t.id)}`,t.defn);for(const t of e.definedSym){const r=t.id.startsWith("definedSym:")?t.id.slice(11):t.id,i=e.get_display_definedSym_or_none(t.id)??"",o=[];i&&o.push(`:= ${i}`),t.defn&&o.push(t.defn),n.set(`#defsym-${r}`,o.join(" — "))}return n}const E7="hir-popover",OY="hir-popover-rail",qY="hir-popover-rail-card",PY="hir-popover-content",w7="hir-popover-close",FY="ref-popover",Nr="srcquote-pinned";function Qi(e,n){if(!(e instanceof Element))return null;const t=e.closest(n);return t instanceof HTMLButtonElement?t:null}function DY(e,n){return n instanceof Node&&e.contains(n)}function xY(e){const n=e.devMode??!1,t=new Map,r=[];let i=null;const o=b=>{if(console.error("Failed to open popover.",b),n)throw b},u=()=>(i!=null&&i.isConnected||(i=document.createElement("aside"),i.className=OY,i.setAttribute("aria-label","Open notes"),document.body.append(i)),i),a=b=>{const E=r.indexOf(b);E!==-1&&r.splice(E,1)},s=(b,E=!1)=>{var A;t.delete(b.trigger),a(b),b.popover.remove(),b.trigger.setAttribute("aria-expanded","false"),b.kind==="sourcequote"&&((A=b.trigger.closest(`.${Mr}`))==null||A.classList.remove(Nr)),E&&b.trigger.isConnected&&b.trigger.focus(),i&&i.childElementCount===0&&(i.remove(),i=null)},c=b=>{for(const E of[...r])E.trigger!==b&&s(E)},l=(b,E)=>{const A=document.createElement(b==="sourcequote"?"span":"section");return A.className=b==="sourcequote"?`${E7} ${RR}`:`${E7} ${qY}`,A.setAttribute("role","dialog"),A.setAttribute("aria-label",b==="sourcequote"?"Source quotes":"Reference details"),A.innerHTML=`<button type="button" class="${w7}" aria-label="Close popover">×</button><span class="${PY}">${E}</span>`,A},f=(b,E,A)=>{const L={trigger:b,popover:E,kind:A};return t.set(b,L),r.push(L),b.setAttribute("aria-expanded","true"),L},d=b=>{const E=b.getAttribute(Wy);if(E!==null)return $R(E);const A=b.getAttribute(mo);if(A===null)throw new Error("Popover trigger is missing target data.");const L=e.getContext(),R=y7(L.jprobInstance,uv(A));if(R.kind!=="entity")throw new Error("A rail trigger must resolve to an entity source.");return(R.rawBody?Ee(R.rawBody,L):"")+`<a href="${R.anchor}" class="popover-go">go →</a>`},h=(b,E)=>{const A=b.firstElementChild;if(!(A instanceof HTMLElement))throw new Error("The rail has no card to reveal.");const L=A.offsetTop,R=Math.max(0,b.scrollHeight-b.clientHeight);b.scrollTop=Math.min(R,E.offsetTop-L)},p=b=>{e.getPersistentPopovers()||c(b);const E=l("rail",d(b)),A=u();A.append(E),f(b,E,"rail"),h(A,E)},v=(b,E)=>{const A=b.closest(`.${Mr}`);if(A===null)throw new Error("Source-quote trigger has no widget parent.");const L=b.getAttribute(mo);if(L===null)throw new Error("Source-quote trigger is missing target data.");const R=e.getContext(),T=y7(R.jprobInstance,uv(L));if(T.kind!=="sourcequote")throw new Error("A source-quote trigger must resolve to source quotes.");e.getPersistentPopovers()||c(b);const $=qR(T.quotes,R),w=l("sourcequote",$);A.append(w),f(b,w,"sourcequote"),A.classList.toggle(Nr,E)},m=b=>{const E=Qi(b.target,`.${w7}`);if(E){const R=[...t.values()].find(T=>T.popover.contains(E));R&&s(R,!0);return}const A=Qi(b.target,`.${no}`);if(A){const R=t.get(A);if(R){const T=A.closest(`.${Mr}`);T!=null&&T.classList.contains(Nr)?s(R):T==null||T.classList.add(Nr)}else try{v(A,!0)}catch(T){o(T)}return}const L=Qi(b.target,`.${FY}, .${Vy}`);if(L){const R=t.get(L);if(R)s(R);else try{p(L)}catch(T){o(T)}return}!e.getPersistentPopovers()&&b.target instanceof Node&&!r.some(R=>R.popover.contains(b.target))&&c()},g=b=>{const E=Qi(b.target,`.${no}`);if(!(!E||t.has(E)))try{v(E,!1)}catch(A){o(A)}},_=b=>{const E=b.target,A=E instanceof Element?E.closest(`.${Mr}`):null;if(!A||DY(A,b.relatedTarget)||A.classList.contains(Nr))return;const L=A.querySelector(`.${no}`);if(!L)return;const R=t.get(L);R&&s(R)},y=b=>{if(b.key!=="Escape")return;const E=r.at(-1);E&&(b.preventDefault(),s(E,!0))};return document.addEventListener("click",m),document.addEventListener("mouseover",g),document.addEventListener("mouseout",_),document.addEventListener("focusin",g),document.addEventListener("focusout",_),document.addEventListener("keydown",y),{closeDisconnectedTriggers:()=>{for(const b of[...r])b.trigger.isConnected||s(b)},teardown:()=>{document.removeEventListener("click",m),document.removeEventListener("mouseover",g),document.removeEventListener("mouseout",_),document.removeEventListener("focusin",g),document.removeEventListener("focusout",_),document.removeEventListener("keydown",y),c(),i==null||i.remove(),i=null}}}const BY="dag-highlight";function S7(e,n){var o;const t=(o=e.closest(`.${zp}`))==null?void 0:o.getAttribute(_o);if(!t)return;const r=t.replace(/[\\"]/g,"\\$&"),i=document.querySelectorAll(`[${_o}="${r}"]`);for(const u of i)u.classList.toggle(BY,n)}function HY(){const e=n=>{const t=n.target;return t instanceof Element?t.closest(`.${Zp}`):null};document.addEventListener("mouseover",n=>{const t=e(n);t&&S7(t,!0)}),document.addEventListener("mouseout",n=>{const t=e(n);t&&S7(t,!1)})}const UY=["VISIBLE_AOPTS"],GY={dataAttribute:"data-aopt-body",selectClass:"aopt-body-select",inputClass:"aopt-body-input",textInputClass:"aopt-body-text-input",checkboxClass:"aopt-body-checkbox",checkboxGroupClass:"aopt-body-checkbox-group"};function VY(e,n,t,r=X,i){const o=De(n),u=[];for(const a of e){if(!Th(a))continue;const s=Le(a.id),c=t[s]??a.default_value,l=(i==null?void 0:i(a))??{atStart:"",atEnd:""};let f=zh(s,a);const d=a.input_type==="MultiStringFromSet"?1:2,h=Array.isArray(a.allowed_values)&&a.allowed_values.length>=d;if(o&&(h||a.allowed_values===void 0))f+=" = "+Eo(s,a,c,GY,a.input_type);else{const v=Array.isArray(c)?c.join(", "):String(c);f+=` <span class="cparam-or-aopt-value">= ${X(v)}</span>`}u.push(`<div class="cparam-or-aopt" id="opt-${ae(s)}"><div class="cparam-or-aopt-header">${f}</div><div class="cparam-or-aopt-defn">${l.atStart}${r(a.defn)}${l.atEnd}</div></div>`)}return u.join("")}function WY(e,n,t,r,i){const o=VY(t.get_aopts(),i.ui.whose,r.displayOptionValues,a=>Ee(a,r),a=>Tn(a.srcquotes,r)),u=document.getElementById(`${Ge[n]}-section`);if(!o){e.innerHTML="",u&&(u.hidden=!0);return}u&&(u.hidden=!1),e.innerHTML=o}const jY=2,XY="(no recorded choice)",WA="data-tchoice-recorded",Ah="data-tchoice-bare",$7={dataAttribute:"data-tchoice-body",selectClass:"tchoice-body-select",inputClass:"tchoice-body-input",checkboxClass:"tchoice-body-checkbox"};function YY(e){return e.input_type==="Bool"||e.allowed_values.length>=jY}function A7(e,n,t){var i;const r=(i=e[n])==null?void 0:i[t];return r===void 0?"":String(r)}function jA(e){return e===""?XY:e}function KY(e,n,t){const r=n.map((u,a)=>`data-trial-${a}="${ae(A7(n,a,e))}"`).join(" "),i=A7(n,t,e);return`<span class="tchoice-recorded${i===""?" tchoice-recorded-empty":""}" ${WA}="${ae(e)}" ${r}>${X(jA(i))}</span>`}const JY="Any number in",L7="∞";function zY(e){if(zt(e))return fE(e.allowed_values);const[n]=ut([e]),t=n.lo===null?`(-${L7}`:`${n.loClosed?"[":"("}${n.lo}`,r=n.hi===null?`${L7})`:`${n.hi}${n.hiClosed?"]":")"}`;return`<div class="${lE}">${JY} ${X(`${t}, ${r}`)}</div>`}function ZY(e,n,t,r={}){const{resultChoicesPerTrial:i,trialSelection:o=au,processDefn:u=X,renderSrcquotes:a}=r,s=[];for(const c of e){const l=Vr(c.id),f=(a==null?void 0:a(c))??{atStart:"",atEnd:""};let d=zh(l,c);const h=X7(c),v=zt(c)&&YY(c)||h,m=n&&v,g=!n&&v&&o.kind==="trial"&&i!==void 0&&i.some(y=>y[l]!==void 0);let _="";if(m&&h){const y=t[l]??"";d+=" = "+Eo(l,c,y,$7,"Number")}else if(m&&zt(c)){const y=t[l]??c.default_value;d+=" = "+Eo(l,c,y,$7,c.input_type)}else g?d+=" = "+KY(l,i,o.recordTrialIndex):_=zY(c);s.push(`<div class="cparam-or-aopt" id="tchoice-${ae(l)}" ${Ah}="${ae(l)}"><div class="cparam-or-aopt-header">${d}</div><div class="cparam-or-aopt-defn">${f.atStart}${u(c.defn)}${f.atEnd}</div>`+_+"</div>")}return s.join("")}function QY(e){return(Bn(pe(e.ui.whose).source)==="plaincode"?e.yoursCodeRecord:e.yoursRecord).trial_choices??{}}function XA(e,n,t,r,i,o,u){const a=n.get_tchoice_decls(),s=De(r.ui.whose),c=ZY(a,s,QY(r),{resultChoicesPerTrial:s?void 0:i,trialSelection:u,processDefn:f=>Ee(f,t),renderSrcquotes:f=>Tn(f.srcquotes,t)}),l=document.getElementById(`${Ge.TCHOICE}-section`);if(!c){e.innerHTML="",l&&(l.hidden=!0);return}l&&(l.hidden=!1),e.innerHTML=c,YA(e,r.ui.whose==="yours-plaincode"?{mode:"edit",reasoning:r.yoursCodeRecord.reasoning_response}:{mode:"read",reasoning:s||u.kind==="mix"?void 0:o[u.recordTrialIndex]})}function YA(e,n){for(const t of e.querySelectorAll(`[${Ah}]`)){const r=t.getAttribute(Ah)??"";R$(t,r,n,t.querySelector(":scope > .cparam-or-aopt-header"))}}function eK(e,n,t){for(const r of e.querySelectorAll(`[${WA}]`)){const i=r.getAttribute(`data-trial-${n}`)??"";r.textContent=jA(i),r.classList.toggle("tchoice-recorded-empty",i==="")}YA(e,{mode:"read",reasoning:t[n]})}function nK(e,n){if(e.input_type==="Bool"){if(n.type!=="checkbox")throw new Error(`Bool tchoice ${e.id} expected a checkbox control`);return n.checked===!0}if(e.input_type==="Number"){const t=Number(n.value);if(!Number.isFinite(t))throw new Error(`Invalid numeric tchoice value for ${e.id}: ${n.value}`);return t}return n.value}function tK(e,n){if(n.value.trim()==="")return null;const t=Number(n.value);if(!Number.isFinite(t))return null;const[r]=ut([e]);return co(r,t)?t:null}function rK(e,n,t){if(n===void 0)return null;if(n!=="claudecode"&&n!=="codex")return`${t} carries invalid agent_cli ${JSON.stringify(n)}`;if(typeof e!="string")return`${t} carries agent_cli ${JSON.stringify(n)} without a model family`;let r;try{r=EG(e)}catch(i){return`${t} carries agent_cli ${JSON.stringify(n)} for unknown model ${JSON.stringify(e)}: ${String(i)}`}return n!==r?`${t} model ${JSON.stringify(e)} carries agent_cli ${JSON.stringify(n)}; expected ${JSON.stringify(r)}`:null}function iK(e){return rK(e.model,e.agent_cli,"result")}function oK(e,n){const t=[];for(const r of e){const i=iK(r);if(i===null){t.push(r);continue}const o=`methodical provenance mismatch for ${JSON.stringify(r.label)}: ${i}`;console.warn(`omitting ${o}`)}return t}const ao=2e3,uK=ao/100,aK=[1,2,4,10];function sK(){const e=new Set;for(let n=0;n<=ao;n+=uK)e.add(n);for(const n of aK)e.add(n),e.add(ao-n);return[...e].sort((n,t)=>n-t).map(n=>n/ao)}const sr=sK(),Xp=4095,cK={logit:{inverse:e=>1/(1+Math.exp(-e)),lowerBound:0,upperBound:1},log:{inverse:e=>Math.exp(e),lowerBound:0,upperBound:null},identity:{inverse:e=>e,lowerBound:null,upperBound:null}};function I7(e,n,t){const r=e[n];if(!Number.isInteger(r)||r<0)throw new Error(`quantile table ${n} must be a nonnegative integer; got ${r}`);if(r>0&&t===null)throw new Error(`quantile table ${n} is ${r}, but transform ${JSON.stringify(e.transform)} has no ${n==="count_at_lower_bound"?"lower":"upper"} bound`);return r}function lK(e){const n=cK[e.transform];if(n===void 0)throw new Error(`unknown quantile table transform ${JSON.stringify(e.transform)}`);const t=I7(e,"count_at_lower_bound",n.lowerBound),r=I7(e,"count_at_upper_bound",n.upperBound),i=e.codes_u12_delta;if(i.length+t+r!==sr.length)throw new Error(`a quantile table has one value per level (${sr.length} levels); got ${i.length} codes plus ${t} + ${r} values at the bounds`);const{start:o,end:u}=e,a=new Array(t).fill(n.lowerBound);let s=0;for(let c=0;c<i.length;c++){const l=i[c];if(!Number.isInteger(l)||l<0)throw new Error(`quantile table codes must be nondecreasing integers; got delta ${l}`);if(s+=l,s>Xp)throw new Error(`quantile table codes reach ${s}, outside [0, ${Xp}]`);a.push(n.inverse(o+(u-o)*s/Xp))}for(let c=0;c<r;c++)a.push(n.upperBound);return a}const Kt=1e-12;function C7(e,n,t){if(n===0)return 0;if(n===e.length)return 1;const r=e[n-1],i=e[n],o=sr[n-1],u=sr[n];return o+(u-o)*(t-r)/(i-r)}function KA(e,n){let t=0,r=e.length;for(;t<r;){const i=t+r>>>1;e[i]>=n?r=i:t=i+1}return t}function fK(e,n,t){if(e.length===0)throw new Error("a mixture needs at least one table");if(n.length!==e.length)throw new Error(`expected one weight per table (${e.length}); got ${n.length}`);let r=0;for(const a of n){if(!(a>0))throw new Error("every mixture weight must be positive");r+=a}for(const a of e)if(a.length!==sr.length)throw new Error(`a quantile table has one value per level (${sr.length} levels); got ${a.length}`);const i=Float64Array.from(new Set(e.flat())).sort(),o=new Float64Array(i.length),u=new Float64Array(i.length);return e.forEach((a,s)=>{const c=n[s]/r;let l=0,f=0;for(let d=0;d<i.length;d++){const h=i[d];for(;l<a.length&&a[l]<=h;)l++;for(;f<a.length&&a[f]<h;)f++;o[d]=o[d]+c*C7(a,l,h),u[d]=u[d]+c*C7(a,f,h)}}),t.map(a=>{const s=KA(o,a-Kt);if(s===i.length)return i[i.length-1];let c;if(s===0||u[s]<a-Kt)c=i[s];else{const l=u[s]-o[s-1],f=Math.min(Math.max((a-o[s-1])/l,0),1);c=i[s-1]+f*(i[s]-i[s-1])}return o[s]>a+Kt?c:(c+dK(i,o,u,a))/2})}function dK(e,n,t,r){let i=KA(n,r+Kt);for(;i<e.length&&n[i]<=r+Kt;)i++;return i===e.length?e[e.length-1]:t[i]<=r+Kt?e[i]:e[i-1]}const pK=[.05,.5,.95];function hK(e){const{heights:n}=e;if(n.length<2)return 0;let t=0;for(let r=1;r<n.length;r++)t+=(n[r-1]+n[r])/2;return t*(e.end-e.start)/(n.length-1)}function mK(e,n){const{start:t,end:r,heights:i}=e;if(n<t||n>r)return 0;const o=(n-t)/(r-t)*(i.length-1),u=Math.min(Math.floor(o),i.length-2),a=o-u;return i[u]*(1-a)+i[u+1]*a}function vK(e,n){const t=[],r=[];for(const c of e){const l=c.density_curve;if(l===void 0)return null;const f=hK(l);if(!(f>0))return null;t.push(l),r.push(f)}const i=Math.min(...t.map(c=>c.start)),o=Math.max(...t.map(c=>c.end)),u=Math.max(...t.map(c=>c.heights.length)),a=new Array(u).fill(0);t.forEach((c,l)=>{const f=n[l]/r[l];for(let d=0;d<u;d++){const h=i+(o-i)*d/(u-1);a[d]=a[d]+f*mK(c,h)}});const s=Math.max(...a);return s>0?{start:i,end:o,heights:a.map(c=>c/s)}:null}function T7(e,n){const t=[];for(const c of e){if(c.quantile_table===void 0)return null;t.push(c.quantile_table)}const[r,i,o]=fK(t,n,pK);let u=0;e.forEach((c,l)=>{u+=n[l]*c.mean});const a={mean:u,median:i,p5:r,p95:o},s=vK(e,n);return s!==null&&(a.density_curve=s),a}function _K(e){var u;if(e.length===0)throw new Error("a pool needs at least one member trial");let n=0;for(const a of e){if(!(a.weight>0))throw new Error("every pool member weight must be positive");n+=a.weight}const t=e.map(a=>a.weight/n),r=[];for(const a of e){const s=(u=a.precomputed)==null?void 0:u[gn];if(s===void 0)return null;r.push(s)}const i=T7(r,t);if(i===null)return null;const o={[gn]:i};if(e.some(a=>{var s;return((s=a.precomputed)==null?void 0:s[vt])!==void 0})){const a=e.map((c,l)=>{var f;return((f=c.precomputed)==null?void 0:f[vt])??r[l]}),s=T7(a,t);if(s===null)return null;o[vt]=s}return o}const gK=255;function bK(e){const n=new Array(e.length);let t=0;for(let r=0;r<e.length;r++){t+=e[r];const i=t/gK;n[r]=i*i}return n}function R7(e){return e.aggregate!==void 0}function yK(e,n){try{return lK(e)}catch(t){console.warn(`omitting an undecodable quantile table: ${t.message}`);return}}function EK(e,n){const{density_curve:t,quantile_table:r,...i}=e,o={...i};if(t!==void 0&&(o.density_curve={start:t.start,end:t.end,heights:bK(t.heights_u8sqrt_delta)}),r!==void 0){const u=yK(r);u!==void 0&&(o.quantile_table=u)}return o}function Bm(e,n){const t={};for(const[r,i]of Object.entries(e))t[r]=EK(i);return t}function wK(e,n){const t={};for(const[r,i]of Object.entries(e))t[r]=Bm(i);return t}function SK(e,n){const{precomputed:t,...r}=e;return t===void 0?r:{...r,precomputed:Bm(t)}}function JA(e,n,t){return{cparams:e.cparams,trials:n,precomputed:Bm(e.precomputed),...e.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:wK(e.precomputed_aux_forms)}}}function $K(e,n){return{...e,cparam_combos:e.cparam_combos.map(t=>JA(t,t.trials.map(r=>SK(r))))}}function zA(e){return JSON.stringify(Object.keys(e).sort().map(n=>[n,e[n]]))}function AK(e){const n=new Map;for(const t of e.cparam_combos){const r=new Map;for(const i of t.trials)i.trial_index!==void 0&&r.set(i.trial_index,i);n.set(zA(t.cparams),r)}return{entry:e,trialsByComboKey:n}}class Jt extends Error{}function LK(e,n,t,r){if(t.has(e.entry_id))throw new Jt(`members[${r}] names entry_id ${JSON.stringify(e.entry_id)}, which more than one individual entry claims`);const i=n.get(e.entry_id);if(i===void 0)throw new Jt(`members[${r}] names unknown entry_id ${JSON.stringify(e.entry_id)}`);const{trial_index:o}=e;if(!Number.isInteger(o)||o<0||o>=i.entry.count)throw new Jt(`members[${r}] names trial_index ${o} of entry ${JSON.stringify(e.entry_id)}; expected an integer in [0, ${i.entry.count})`);return i}function IK(e,n){return e.map((t,r)=>{var u;const{entry:i}=n[r];return{...((u=i.trial_metadata)==null?void 0:u[t.trial_index])??{},model:i.model,version:i.version,effort:i.effort}})}function CK(e,n,t,r){var u;const i=zA(e.cparams),o=[];for(let a=0;a<n.length;a++){const s=n[a],c=(u=t[a].trialsByComboKey.get(i))==null?void 0:u.get(s.trial_index);c!==void 0&&o.push({...c,trial_index:a})}if(o.length===0)throw new Jt(`cparam_combos[${r}] ${i} is carried by no member trial`);return o}const TK=1;function RK(e,n,t){const r=JA(e,n);if(Object.keys(r.precomputed).length===0)return r;const i=_K(n.map(o=>({precomputed:o.precomputed,weight:TK})));return i===null?r:{...r,precomputed:i}}function kK(e,n,t,r){const{members:i,cparam_combos:o,...u}=e;if(i.length!==e.count)throw new Jt(`carries ${i.length} members but states count ${e.count}`);const a=i.map((s,c)=>LK(s,n,t,c));return{...u,trial_metadata:IK(i,a),cparam_combos:o.map((s,c)=>RK(s,CK(s,i,a,c)))}}function NK(e,n){const t=new Map,r=new Set,i=new Array(e.length).fill(null);for(let u=0;u<e.length;u++){const a=e[u];if(R7(a))continue;const s=$K(a);if(i[u]=s,t.has(a.entry_id)){const c=`published richcode results carry more than one individual entry with entry_id ${JSON.stringify(a.entry_id)}; aggregates naming it cannot be resolved`;console.warn(c),r.add(a.entry_id);continue}t.set(a.entry_id,AK(s))}const o=[];for(let u=0;u<e.length;u++){const a=e[u];if(!R7(a)){o.push(i[u]);continue}try{o.push(kK(a,t,r,n))}catch(s){if(!(s instanceof Jt))throw s;const c=`aggregate richcode entry ${JSON.stringify(a.label)} (aggregate ${JSON.stringify(a.aggregate)}): ${s.message}`;console.warn(`omitting ${c}`)}}return o}const ht="model_effort",Lh={point:"point",bounds:"bounds",distr:"sample"},MK=Object.fromEntries(Object.entries(Lh).map(([e,n])=>[n,e])),k7={inline:!0,glyph:!1},OK="inline",qK="glyph",N7={true:!0,false:!1},M7=["probability","odds"],O7=["yours-plainnum","yours-plaincode","adhoc-plainnum","adhoc-plaincode","metho-richcode"];function PK(e,n){const t={},r=[],i=e.get("response_type");if(i!==null){const c=Lh[i];c!==void 0?t.inputMode=c:r.push(`response_type=${JSON.stringify(i)} invalid; expected one of: ${Object.keys(Lh).join(", ")}`)}DK(e.get("whose"),e.get("preset"),n,t,r);const o=e.get("trial_index");if(o!==null){const c=e2(o);c===null?r.push(`trial_index=${JSON.stringify(o)} is neither ${zr} nor a non-negative integer`):t.resultTrialSelection=c}const u=e.get("prob_as_odds");u!==null&&(M7.includes(u)?t.probAsOdds=u:r.push(`prob_as_odds=${JSON.stringify(u)} invalid; expected one of: ${M7.join(", ")}`));const a=e.get("show_framing");if(a!==null){const c=N7[a];c===void 0?r.push(`show_framing=${JSON.stringify(a)} invalid; expected one of: ${Object.keys(N7).join(", ")}`):t.showFramingNotes=c}const s=e.get("srcquotes_view");if(s!==null){const c=k7[s];c===void 0?r.push(`srcquotes_view=${JSON.stringify(s)} invalid; expected one of: ${Object.keys(k7).join(", ")}`):t.srcquotesInlinedOverride=c}return FK(e,n.jprobTemplate,t,r),{overrides:t,errors:r}}function FK(e,n,t,r){const i=e.getAll("calc_pin"),o=e.getAll("calc_unpin");if(i.length===0&&o.length===0)return;const u=new Set(n.get_cparam_bare_names()),a=new Set(i.filter(c=>o.includes(c)));for(const c of a)r.push(`${JSON.stringify(c)} appears in both calc_pin and calc_unpin; skipped`);const s=u.has(ht);for(const[c,l]of[[i,!0],[o,!1]]){const f=l?"calc_pin":"calc_unpin";for(const d of c)if(!a.has(d)){if(d===ht){if(s){r.push(`${f}=${ht} is ambiguous: this jprob declares a parameter by that name, which collides with the reserved model/version/effort axis name`);continue}t.modelEffortPinned=l;continue}if(!u.has(d)){r.push(`${f}=${JSON.stringify(d)} is not a parameter of this jprob; expected one of: ${[...u,ht].join(", ")}`);continue}(t.cparamPinned??(t.cparamPinned={}))[d]=l}}}function DK(e,n,t,r,i){if(e===null&&n===null)return;if(e===null){i.push(`preset=${JSON.stringify(n)} given without whose`);return}if(!O7.includes(e)){i.push(`whose=${JSON.stringify(e)} invalid; expected one of: ${O7.join(", ")}`);return}if(e.startsWith("yours-")){if(n!==null){i.push(`preset=${JSON.stringify(n)} incompatible with whose=${e} (preset is only valid for adhoc-* or metho-*)`);return}r.whose=e;return}if(n===null){i.push(`whose=${e} requires preset`);return}const o=BK(n);if(o===null){i.push(`preset=${JSON.stringify(n)} is not a non-negative integer`);return}const u=xK(e,o,t.presetData,t.modelParamGroups);u.error!==null?i.push(u.error):r.whose=u.whose}function xK(e,n,t,r){return e==="adhoc-plainnum"?n>=t.adhocPlainnumEntries.length?{error:`preset=${n} out of range; ${t.adhocPlainnumEntries.length} adhoc-plainnum entr${t.adhocPlainnumEntries.length===1?"y":"ies"} available`}:{whose:`adhoc-plainnum:${n}`,error:null}:e==="adhoc-plaincode"?n>=t.adhocPlaincodeEntries.length?{error:`preset=${n} out of range; ${t.adhocPlaincodeEntries.length} adhoc-plaincode entr${t.adhocPlaincodeEntries.length===1?"y":"ies"} available`}:{whose:`adhoc-plaincode:${n}`,error:null}:n>=r.length?{error:`preset=${n} out of range; ${r.length} methodical group${r.length===1?"":"s"} available`}:{whose:uu(r[n]),error:null}}function BK(e){if(e===""||/\D/.test(e))return null;const n=parseInt(e,10);return!Number.isInteger(n)||n<0?null:n}function HK(e,n){if(typeof window>"u")return;const t=new URLSearchParams(window.location.search),{overrides:r,errors:i}=PK(t,n);for(const o of i)console.error(`[url_view_overrides] ${o}`);if(r.inputMode!==void 0&&(e.ui.inputMode=r.inputMode),r.probAsOdds!==void 0&&(e.ui.probAsOdds=r.probAsOdds),r.resultTrialSelection!==void 0&&(e.ui.resultTrialSelection=r.resultTrialSelection),r.showFramingNotes!==void 0&&(e.ui.showFramingNotes=r.showFramingNotes),r.srcquotesInlinedOverride!==void 0&&(e.ui.srcquotesInlinedOverride=r.srcquotesInlinedOverride),r.modelEffortPinned!==void 0&&(e.ui.modelEffortPinned=r.modelEffortPinned),r.cparamPinned!==void 0&&Object.assign(e.ui.cparamPinned,r.cparamPinned),r.whose!==void 0){e.ui.whose=r.whose,(r.whose==="yours-plainnum"||r.whose==="yours-plaincode")&&(e.ui.lastYoursWhose=r.whose);const o=on(pe(r.whose).source);o==="adhoc"?e.ui.lastAdhocWhose=r.whose:o==="metho"&&(e.ui.lastMethoWhose=r.whose)}}function UK(e,n){const{ui:t,srcquotesInlined:r}=e,{jprobTemplate:i,modelParamGroups:o}=n,u=new URLSearchParams,a=[];return u.set("response_type",MK[t.inputMode]),u.set("prob_as_odds",t.probAsOdds),u.set("trial_index",Qh(t.resultTrialSelection)),u.set("show_framing",String(t.showFramingNotes)),i.has_srcquotes()&&u.set("srcquotes_view",r?OK:qK),GK(t.whose,o,u,a),VK(t,i,u,a),{params:u,errors:a}}function GK(e,n,t,r){const{source:i,index:o}=pe(e);if(!_i(i)){t.set("whose",i),on(i)==="adhoc"&&t.set("preset",String(o));return}const u=n.findIndex(a=>a.richcodeIndex===o);if(u===-1){r.push(`no methodical group holds the current result ${JSON.stringify(e)}; omitting whose/preset from the link`);return}t.set("whose",i),t.set("preset",String(u))}function VK(e,n,t,r){const i=Bn(pe(e.whose).source);if(i!=="plaincode"&&i!=="richcode")return;const o=n.get_cparam_bare_names(),u=o.includes(ht);for(const a of o)a!==ht&&t.append(e.cparamPinned[a]!==!1?"calc_pin":"calc_unpin",a);if(u){r.push(`this jprob declares a parameter named ${ht}, which collides with the reserved model/version/effort axis name; omitting both from the link`);return}t.append(e.modelEffortPinned?"calc_pin":"calc_unpin",ht)}function hn(e){if(typeof window>"u")return;const n=new URL(window.location.href);if(!n.searchParams.has(e))return;n.searchParams.delete(e);const t=n.searchParams.toString(),r=`${n.pathname}${t?"?"+t:""}${n.hash}`;window.history.replaceState(null,"",r)}const WK=["framing-notes-explainer","srcquote-explainer"],jK=Object.values(Ge).filter(e=>!WK.includes(e)).map(e=>`${e}-section`),ZA=2;function QA(e,n){const t=n+ZA;let r=null;for(const i of e)i.top>t||(r===null||i.top>r.top)&&(r=i);return r===null?null:r.id}function XK(e,n,t){const r=[...e].sort((l,f)=>l.top-f.top);if(r.length===0)return null;const i=r[0],o=QA(e,n),u=o===null?-1:r.findIndex(l=>l.id===o),a=r[u+1];return a===void 0?i.id:a.top-n<=t+ZA?a.id:i.id}function YK(e=document){return QA(nL(e),eL(e))}function KK(e=document){return XK(nL(e),eL(e),JK(e))}function eL(e){var r;const n=parseFloat(((r=e.defaultView)==null?void 0:r.getComputedStyle(e.documentElement).getPropertyValue(LS))??"");if(Number.isFinite(n))return n;const t=e.getElementById(X2);return t===null?0:t.getBoundingClientRect().bottom}function JK(e){var t;const n=e.documentElement;return Math.max(0,n.scrollHeight-n.clientHeight-(((t=e.defaultView)==null?void 0:t.scrollY)??0))}function nL(e){const n=[];for(const t of jK){const r=e.getElementById(t);if(r===null)continue;const i=r.getBoundingClientRect();i.width===0&&i.height===0||n.push({id:t,top:i.top})}return n}const zK="url",ZK="copied ✓",QK="in address bar",eJ=1200;function nJ(e,n,t){const r=n.toString(),i=t===null?"":`#${encodeURIComponent(t)}`;return`${e.origin}${e.pathname}${r?"?"+r:""}${i}`}function tJ(e,n,t=document){const{params:r,errors:i}=UK(e,n),o=YK(t);return{href:nJ(new URL(t.location.href),r,o),errors:i}}function q7(e,n){e.textContent=n,setTimeout(()=>{e.textContent=zK},eJ)}async function rJ(e,n,t){var o;const{href:r,errors:i}=tJ(n,t);for(const u of i)console.error(`[view_share_link] ${u}`);window.history.replaceState(null,"",r);try{if(!((o=navigator.clipboard)!=null&&o.writeText))throw new Error("Clipboard access is unavailable in this browser.");await navigator.clipboard.writeText(r),q7(e,ZK)}catch(u){console.error("[view_share_link] copying the view link failed",u),q7(e,QK)}}function iJ(e,n){for(const t of e.querySelectorAll(`.${Jp}`)){const r=t.dataset.bareid,i=t.dataset.mname;if(r===void 0||i===void 0)throw new Error("Toggleable symbol ref is missing data-bareid or data-mname.");t.textContent=n?i:r}}function P7(e,n){const t=document.getElementById(e);if(!t)throw new Error(`Viewport anchor #${e} not found before render`);const r=t.getBoundingClientRect().top,i=document.activeElement===t;n();const o=document.getElementById(e);if(!o){console.warn(`Viewport anchor #${e} is gone after the render; skipping the scroll correction. Expected when the render replaced the view wholesale, otherwise the render dropped its own anchor.`);return}i&&o.focus({preventScroll:!0});const a=o.getBoundingClientRect().top-r;a!==0&&window.scrollBy(0,a)}function oJ(e){const n=e.getWhose();try{e.renderCurrentView();return}catch(t){if(!e.shouldRecover(n))throw t;try{e.switchToSafeYours(n),e.renderSafeYoursView()}catch(r){throw new AggregateError([t,r],`View ${JSON.stringify(n)} failed, and the fail-safe Yours view also failed`)}e.recovered(n,t)}}const uJ=[VV,BV,xW];function Zo(e){hY(e,{containers:uJ,thresholdChars:cn().longTextAbbrevThreshold,startAbbreviated:N.ui.longTextAbbrev})}let x,N,se,Gn,an,_n,yn,Lr,qi,We=null,so=0,Fn=null;const Ih="calculator-section",F7="yours-plainnum";function KJ(e){Wk(),tL(e),wJ(),$J(),_U(fJ()),We=xY({getContext:Jn,getPersistentPopovers:()=>N.ui.persistentPopovers}),HY(),window.addEventListener("resize",Vm),window.addEventListener("resize",Ko),BL(pn)}function tL(e){so++,Fn==null||Fn.abort(),Fn=null,Vx(),Jx(),aB(),Yx(),dG(),x=YL(e.jpdefn),N=Bk(x);const n=e.adhocPresets??[],t=rk(n);se={adhocPresets:n,adhocPlainnumEntries:t.plainnum,adhocPlaincodeEntries:t.plaincode,richcodeResults:oK(ok(NK(e.richcodeResults??[],!1))),jtaskHashGroups:e.jtaskHashGroups??[]},Gn=uk(se),an=QR(e.jpdefn),_n=e.formRegistry,yn=e.barrierRegistry??{},Lr=e.cparamComboFilter,qi=e.cparamFilterDescription,HK(N,rL()),hL(),cJ(),pn()}function rL(){return{jprobTemplate:x,presetData:se,modelParamGroups:Gn}}function D7(){hn("calc_pin"),hn("calc_unpin")}const aJ={showFramingNotes:"show_framing"};function Ch(e,n){N.ui[e]=n,Oe(x.config,N.ui),ou(e,n);const t=aJ[e];if(t!==void 0&&hn(t),e==="longTextAbbrev"){mY(document,n),x7(e,n);return}if(e==="showGlobalExampleControls"){const r=document.getElementById("main-content");r&&IA(r,n),Vm(),x7(e,n);return}pn()}function x7(e,n){const t=document.getElementById(qr(e));t instanceof HTMLInputElement&&(t.checked=n)}function sJ(){return{ui:N.ui,srcquotesInlined:km(N.ui.srcquotesInlinedOverride,Hm().srcquotes_inlined)}}function cJ(){const e=x.layout.sections.html.find(n=>"chunkid"in n&&n.style==="title");if(e&&"chunkid"in e){const n=x.find_textchunk_defn(e.chunkid);n&&(document.title=lI(n))}}async function B7(e){const n=SU(e);if(!n)throw new Error(`swapJprob: no manifest module for aid '${e}' (looked for ${H2(e)}).`);const t=await n(),r=window.location.pathname.replace(/[^/]+\.html$/,`${e}.html`);history.pushState(null,"",r),tL(t.manifest)}function iL(e,n){e&&(N.ui.foldOpenById[e]=n,Oe(x.config,N.ui))}function lJ(e){!(e instanceof HTMLDetailsElement)||e.open||(e.open=!0,iL(e.id,!0))}function fJ(){return{toggle_mnames:()=>{N.ui.symbolMnames=!N.ui.symbolMnames,Oe(x.config,N.ui),ou("symbolMnames",N.ui.symbolMnames),iJ(document,N.ui.symbolMnames)},goto_calculator:()=>{const e=document.getElementById(Ih);if(!e)throw new Error(`#${Ih} not found.`);lJ(e),e.scrollIntoView({block:"start"})},goto_top:()=>{window.scrollTo({top:0})},switch_whose_mode:()=>{vL(IU(mL(),se,Gn))},toggle_srcquotes_inlined:()=>{x.has_srcquotes()&&(N.ui.srcquotesInlinedOverride=Bj(N.ui.srcquotesInlinedOverride,Hm().srcquotes_inlined),Oe(x.config,N.ui),hn("srcquotes_view"),pn())},toggle_settings_shortcuts:zj,toggle_framing_notes:()=>{Ch("showFramingNotes",!N.ui.showFramingNotes)},toggle_long_text_abbrev:()=>{Ch("longTextAbbrev",!N.ui.longTextAbbrev)},goto_next_section:()=>{var n;const e=KK();e!==null&&((n=document.getElementById(e))==null||n.scrollIntoView({block:"start"}))}}}function Hm(){if(De(N.ui.whose))return N.optionValues;const e=je(N.ui.whose,se);if(!e)return N.optionValues;const n={...N.optionValues};for(const t of x.get_aopts()){const r=Le(t.id);r in e.aopts&&(n[r]=e.aopts[r])}if("cparam_values"in e&&e.cparam_values)for(const t of x.get_cparams()){const r=Le(t.id);r in e.cparam_values&&(n[r]=e.cparam_values[r])}return n}function Jn(){const e=Hm(),n=!!(e.show_typical_examples??fy),t=km(N.ui.srcquotesInlinedOverride,e.srcquotes_inlined),r=Mh(x,{symbolMnames:N.ui.symbolMnames}),{source:i}=pe(N.ui.whose),o=Bn(i);return{jprobInstance:ly(x,dy(x,e,o),o),showTypical:n,refLookup:r,srcquotesInlined:t,renderedSrcquoteIds:new Set,showFramingNotes:N.ui.showFramingNotes,displayOptionValues:e,showExampleClassification:N.ui.showExampleClassification,showBareIds:Hj(N.ui.whose),exampleFoldState:N.ui.exampleFoldState,foldOpenById:N.ui.foldOpenById,popoverAllRefs:N.ui.popoverAllRefs}}function pn(){Um(oL)}function Um(e){oJ({getWhose:()=>N.ui.whose,shouldRecover:n=>!De(n)||dJ(),renderCurrentView:()=>{pk(N.ui.whose,se),e()},switchToSafeYours:pJ,renderSafeYoursView:oL,recovered:hJ})}function dJ(){return se.adhocPresets.length>0||se.richcodeResults.length>0}function pJ(e){const n=pe(e).source;N.ui.whose=F7,N.ui.lastYoursWhose=F7,N.ui.modelEffortSweepScope=null,on(n)==="adhoc"&&(N.ui.lastAdhocWhose=""),on(n)==="metho"&&(N.ui.lastMethoWhose=""),se={adhocPresets:[],adhocPlainnumEntries:[],adhocPlaincodeEntries:[],jtaskHashGroups:[],richcodeResults:[]},Gn=[]}function hJ(e,n){try{Oe(x.config,N.ui)}catch(r){ia("Persisting the fail-safe Yours selection",r)}for(const r of["whose","preset"])try{hn(r)}catch(i){ia(`Clearing the failed ${r} URL override`,i)}const t=De(e)?"Rendering Yours with loaded result data":`Rendering chosen result ${JSON.stringify(e)}`;ia(`${t}; switched safely to Yours and disabled loaded result data until reload`,n)}function oL(){MJ(N.ui.whose);const e=Jn(),n=document.getElementById("main-content");Vj(n,x,e);const t=LU(x.aid);rX(n,t==null?void 0:t.version);const r=Wh(N.ui.whose,je(N.ui.whose,se));NU(N,t??{},r,{currentAid:x.aid,currentFamily:SS(x.aid)},{available:V2(se,Gn),active:on(pe(N.ui.whose).source)},Qw(N.ui.whose,x)),mJ(e,r);const i=document.getElementById(`${Ge.SRCQUOTE_EXPLAINER}-content`);i&&NY(i,e),IA(n,N.ui.showGlobalExampleControls),Vm(),We==null||We.closeDisconnectedTriggers(),Zo(n)}function mJ(e,n){for(const c of UY){const l=document.getElementById(`${Ge[c]}-content`);l&&WY(l,c,x,e,N)}const t=document.getElementById(`${Ge.TCHOICE}-content`);t&&XA(t,x,e,N,E$(N,se),fm(N,se),ot(N,se));const r=document.getElementById("cparams-content");r&&PX(r,x,e,N,Lr,qi),He.renderAll({ctx:e,availableModes:n});const i=document.getElementById(zw);i&&gX(i,N,_n),cL(e);const o=document.getElementById(Jw);o&&zV(o,e);const u=document.getElementById("framing-notes-root-content");u&&JV(u,x,e,N.ui),KV(x,e,N.ui);const a=document.getElementById("framing-notes-explainer-content");a&&ZV(a,e);const s=ot(N,se);uL(s),aL(s),HA(s,Uu(N,se))}const He=bX([{kind:"single",subentry:"WHOSE_TOGGLE",render(e,{availableModes:n}){yH(e,x,se,N,Gn),e.prepend(Dt(()=>tG(x,N.ui.whose)));const t=document.createElement("div");t.id="calc-response-type-toggle",e.appendChild(t),qS(t,N,n,TU)}},{kind:"pair",pair:["CALCULATOR_INPUT","CALCULATOR_RESULTS"],render(e,n,{ctx:t}){J$(e,n,x,t,N,se,_n,yn,Lr,qi),CA(n,pL(N,se)),Gm()}},{kind:"single",subentry:"DERIVED_FORMS",render:(e,{ctx:n})=>gJ(e,n)},{kind:"single",subentry:"INSPECTION_SELECTORS",render:(e,{ctx:n})=>ZX(e,x,N,se,sL(n))},{kind:"single",subentry:"SVAR_CARDS",render:(e,{ctx:n})=>sW(e,x,n,N,se)},{kind:"single",subentry:"YOURS_SAVED_LIST",render:e=>ZW(e,x,N)},{kind:"single",subentry:"JOINT_DEPENDENCE",render:(e,{ctx:n})=>Fj(e,N,x,n,se,_n,yn)},{kind:"single",subentry:"YOURS_CODE_INPUT",visible:()=>N.ui.whose==="yours-plaincode"||th(N.ui.whose,se)!==null,render(e){if(N.ui.whose==="yours-plaincode")l7(e,x,N.yoursCodeRecord,"edit");else{const n=th(N.ui.whose,se);n&&l7(e,x,n,"view")}}}]);function Ju(e){return{get ctx(){return e??(e=Jn())},get availableModes(){return Wh(N.ui.whose,je(N.ui.whose,se))}}}function uL(e){const n=document.getElementById(`${Ge.RESPONSE_NOTES}-content`);n&&(UW(n,N.ui.whose==="yours-plaincode"?{mode:"edit",misc:N.yoursCodeRecord.misc_response}:{mode:"read",freeTextPerTrial:y$(N,se),trialSelection:e}),Zo(n))}function aL(e){var t;const n=document.getElementById(`${Ge.ESTIMATION}-section-header`);n&&IX(n,NV(N,se),e,((t=je(N.ui.whose,se))==null?void 0:t.label)??"")}function vJ(e){const n=ot(N,se);N.ui.resultTrialSelection=e,Oe(x.config,N.ui),hn("trial_index");const t=ot(N,se),r=fm(N,se),i=He.container("INSPECTION_SELECTORS");i&&BA(i,t);const o=He.container("SVAR_CARDS");o&&(x$(o,t,r,N.ui.probAsOdds,ut(x.svar_entries().map(s=>s.decl))),Zo(o));const u=Jn(),a=document.getElementById(`${Ge.TCHOICE}-content`);a&&(t.kind==="trial"&&n.kind==="trial"?eK(a,t.recordTrialIndex,r):XA(a,x,u,N,E$(N,se),r,t),Zo(a)),uL(t),aL(t),Ir(u),HA(t,Uu(N,se)),Gm()}function Gm(){const e=document.getElementById(Ih);e!==null&&lX(e,x,N,se)}function sL(e){return{filter:Lr,description:qi,renderDefn:n=>Ee(n,e)}}function _J(e,n){const t=x.get_cparam(n),r=rh(t,e,Pm);if(typeof r=="boolean")throw new Error(`Cparam ${t.id} produced a boolean value`);N.ui.inspectedCparamValues[n]=r,Oe(x.config,N.ui);const i=Jn(),o=He.container("SVAR_CARDS");o&&cW(o,x,N,se);const u=He.container("INSPECTION_SELECTORS");u&&(QX(u,x,N,se),jX(u,x,N,sL(i))),Ir(i),Gm()}function Pi(e){He.render("DERIVED_FORMS",Ju(e)),cL(e)}function cL(e){const n=He.container("DERIVED_FORMS"),t=[...document.querySelectorAll(".derived-form")].filter(r=>!(n!=null&&n.contains(r)));lL(t,e)}function lL(e,n){for(const t of e){const r=t.dataset.formId;r&&yW(t,r,x,n,N,_n,yn,se)}}function gJ(e,n){const t=[...e.querySelectorAll(".derived-form")];lL(t,n),e.hidden=t.every(r=>r.innerHTML==="")}const bJ=qm("JOINT_DEPENDENCE");function Ir(e){He.render("JOINT_DEPENDENCE",Ju(e))}function fL(){const e=He.container("JOINT_DEPENDENCE");if(!e)return null;const n=Tm(N,x,_n,yn);return n===null?null:{container:e,editorCtx:n,draft:Rm(N,n)}}function yJ(e,n){Am(N,x,an,n,e.editorCtx.eligibleSvars,e.editorCtx.degenerateSvars),bA(e.container,n,e.editorCtx)}function dL(e){const n=Jn(),t=He.container("CALCULATOR_RESULTS");if(t&&Wu(t,x,n,N,se,_n,yn),Pi(n),e)Ir(n);else{const r=He.container("JOINT_DEPENDENCE");r&&kj(r,N,x,n,_n,yn)}zu(),We==null||We.closeDisconnectedTriggers()}function EJ(e){var r;const n=fL();if(!n)return;const t=Oj(n.draft,e,n.editorCtx.eligibleSvars);Am(N,x,an,t,n.editorCtx.eligibleSvars,n.editorCtx.degenerateSvars),dL(!0),e.kind==="add"&&((r=document.querySelector(`#${bJ} .jde-latent-card:last-child [data-latent-field="name"]`))==null||r.focus({preventScroll:!0}))}function wJ(){const e=document.getElementById("sticky-help");e&&e.appendChild(Dt(()=>eG(x,{exampleFoldControls:uX(),exampleFoldControlsOffInSettings:SJ(),whoseModeToggle:OU(),yoursFixFreeToggle:PU()})))}function SJ(){const e=document.getElementById("main-content");return!N.ui.showGlobalExampleControls&&e!==null&&LA(e)}function Vm(){const e=document.getElementById(X2);e&&document.documentElement.style.setProperty(LS,`${e.offsetHeight+4}px`)}function $J(){var n,t,r,i,o,u,a,s,c;document.addEventListener("click",l=>{if(!l.target.closest("#response-type-toggle, #calc-response-type-toggle"))return;const d=l.target.closest("[data-mode]");if(!d)return;const h=d.dataset.mode;h!==N.ui.inputMode&&(N.ui.inputMode=h,Oe(x.config,N.ui),hn("response_type"),pn())}),document.addEventListener("change",l=>{const f=l.target;if(f.id!==Sh)return;const d=f.value;d!==N.ui.probAsOdds&&(N.ui.probAsOdds=d,Oe(x.config,N.ui),hn("prob_as_odds"),pn())}),document.addEventListener("click",l=>{const f=l.target.closest(".timeline-nav-btn");if(!f)return;const d=f.dataset.timelineTarget;d&&B7(d)}),document.addEventListener("change",l=>{const f=l.target;if(f.id!==RS)return;const d=f.value;d&&d!==x.aid&&B7(d)}),(n=document.getElementById(W2))==null||n.addEventListener("click",l=>{const f=l.target.closest("[data-whose-mode]");if(!f)return;const d=f.dataset.whoseMode;vL($S(mL(),d,se,Gn))}),(t=document.getElementById(j2))==null||t.addEventListener("click",l=>{const f=l.target.closest(".mode-radio-btn");f&&H7(f)}),(r=document.getElementById(Om))==null||r.addEventListener("click",l=>{const f=l.target.closest("[data-action]");if(!f)return;const d=f.dataset.action;WJ(d)}),(i=document.getElementById("options-controls"))==null||i.addEventListener("change",l=>{const f=l.target;if(f.dataset.pref){Ch(f.dataset.pref,f.checked);return}if(f.dataset.prefInt){const d=f.dataset.prefInt,h=parseInt(f.value,10);!isNaN(h)&&h>0&&(ou(d,h),pn());return}}),(o=document.getElementById("options-controls"))==null||o.addEventListener("click",l=>{const f=l.target;if(f.id===IS||f.closest(".options-expand-btn")){HU(),Ko();return}if(f.id===NS){rJ(f,sJ(),rL());return}if(f.id==="keymap-btn"){AA();return}if(f.id===kS){HL();return}if(f.id==="save-all-data-btn"){GJ();return}if(f.id==="load-all-data-btn"){VJ();return}}),document.addEventListener("click",l=>{const f=l.target,d=document.getElementById("options-controls");!d||d.contains(f)||f.closest(`#${Nm}`)||(OS(),Ko())}),(u=document.getElementById("main-content"))==null||u.addEventListener("input",l=>{var h;const f=l.target;if(f.closest('.yours-code-input[data-variant="view"]'))return;if(f.classList.contains("code-body-input")){Lm(N,x,an,f.value);return}if(WW(f,N,x,an))return;const d=d7(f);if(d!==null){const p=fL();p&&yJ(p,Nj(p.draft,d));return}if(f.classList.contains("cparam-slider")){const p=f,v=p.dataset.cparam;if(!v)return;const m=JSON.parse(p.dataset.values??"[]"),g=parseInt(p.value),_=m[g];if(_===void 0)return;N.ui.cparamValues[v]=_,Oe(x.config,N.ui),Yp();return}if(f.classList.contains("model-version-effort-slider")){const p=f,v=JSON.parse(p.dataset.keys??"[]"),m=parseInt(p.value),g=v[m];if(!g)return;const{source:_,index:y}=pe(N.ui.whose);if(_!=="metho-richcode")return;const b=se.richcodeResults,E=b[y];if(!E)return;const A=om(E,N.ui.modelEffortSweepScope),L=um(E,b,N.ui.modelEffortSweepScope),R=Oi(L,g),T=R===null?-1:b.indexOf(R);if(T<0)return;const $=`${_}:${T}`;$!==N.ui.whose&&(N.ui.modelEffortSweepScope=A,it($,!0),(h=document.querySelector(`#${qm("CALCULATOR_INPUT")} .model-version-effort-slider`))==null||h.focus({preventScroll:!0}));return}});const e=document.getElementById("main-content");e&&PW(e,{persistCalcTextarea:IJ,recomputeAfterCalcTextarea:CJ,persistAssumptionCard:TJ,recomputeAfterAssumptionCard:RJ}),(a=document.getElementById("main-content"))==null||a.addEventListener("click",l=>{const f=l.target;if(f.classList.contains("code-sample-btn")){qJ();return}const d=f.closest(".lloads-copy-to-yours-btn");if(d){BJ(d);return}if(f.classList.contains("copy-to-yours-btn")){PJ();return}const h=f.closest(".jde-summary");if(h){const w=h.closest("details");w&&(N.ui.jointDependenceEditorOpen=!w.open,Oe(x.config,N.ui));return}const p=f.closest(`.${Ni} > summary`);if(p){const w=p.closest("details");w&&iL(w.id,!w.open);return}const v=Mj(f);if(v!==null){EJ(v);return}const m=f.closest(".yours-saved-delete");if(m){l.stopPropagation();const w=m.dataset.key,S=m.dataset.kind;w&&OJ(w,S??"plainnum");return}const g=f.closest(".yours-saved-row");if(g){const w=g.dataset.key,S=g.dataset.kind;w&&U7(w,S??"plainnum");return}const _=f.closest(".whose-btn");if(_){const w=_.dataset.whose;w&&w!==N.ui.whose&&it(w);return}const y=f.closest(".mode-radio-btn");if(y){H7(y);return}const b=f.closest(".ex-btn");if(b){HJ(b);return}const E=f.closest(".framing-fold-btn");if(E){UJ(E);return}const A=f.closest(`.${xm}`);if(A){vY(A);return}const L=f.closest(`.${Yu}`);if(L){const w=L.getAttribute(Ku)??"",S=e2(w);if(S===null){console.warn(`trial selector: unknown selection ${JSON.stringify(w)}; ignoring`);return}vJ(S);return}const R=f.closest(`.${DS}`);if(R){const w=R.dataset.mcLiveActivationToken;(w===void 0||!fG(w))&&console.warn(`MC activation: unknown token ${JSON.stringify(w)}; re-rendering without activating`),jt();return}const T=f.closest(`.${ai}`);if(T){const w=T.dataset.mcPoolToken;(w===void 0||!Xx(w))&&console.warn(`MC accumulate: unknown pool token ${JSON.stringify(w)}; re-rendering without accumulating`),jt();return}const $=f.closest(".sweep-mode-btn");if($){N.ui.codeSweepMode=$.dataset.sweepMode,Oe(x.config,N.ui),jt();return}}),(s=document.getElementById("main-content"))==null||s.addEventListener("keydown",l=>{if(l.key!=="Enter"&&l.key!==" ")return;const f=l.target,d=f.closest(".yours-saved-row");if(!d||f.closest(".yours-saved-delete"))return;l.preventDefault();const h=d.dataset.key,p=d.dataset.kind;h&&U7(h,p??"plainnum")}),(c=document.getElementById("main-content"))==null||c.addEventListener("change",l=>{const f=l.target;if(d7(f)!==null){dL(!1);return}if(f.dataset.aoptBody){const h=f.dataset.aoptBody,p=f,v=x.get_aopt(h);let m;if(v.input_type==="MultiStringFromSet"){const g=f.closest(".cparam-or-aopt");if(g===null)throw new Error(`MultiStringFromSet control for ${h} is outside an option row`);const _=[...g.querySelectorAll("input[data-aopt-body]")].filter(y=>y.dataset.aoptBody===h);if(_.length===0)throw new Error(`MultiStringFromSet option ${h} has no checkbox controls`);m=yk(v,_)}else m=rh(v,p,v.input_type);h==="srcquotes_inlined"&&N.ui.srcquotesInlinedOverride!==null&&(N.ui.srcquotesInlinedOverride=null,Oe(x.config,N.ui),hn("srcquotes_view")),N=Ov(N,x,h,m),pn();return}if(f.dataset.inspectedCparam){_J(f,f.dataset.inspectedCparam);return}if(f.dataset.cparamBody){const h=f.dataset.cparamBody,p=x.get_cparam(h),v=rh(p,f,Pm);N=Ov(N,x,h,v),pn();return}if(f.dataset.tchoiceBody){const h=f.dataset.tchoiceBody,p=x.get_tchoice(h),v=Bn(pe(N.ui.whose).source);if(v!=="plainnum"&&v!=="plaincode")throw new Error(`tchoice edit fired in unexpected query mode "${v}"`);if(X7(p)){const g=tK(p,f);g!==null&&s7(N,x,an,v,h,g);return}if(!zt(p))throw new Error(`tchoice "${h}" has unrecognized response_kind`);const m=nK(p,f);s7(N,x,an,v,h,m);return}if(f.id===_h){const h=f.value;P7(_h,()=>{NJ(h)});return}const d=f.closest(".whose-select");if(d){let h=d.value;if(h.startsWith("group:")){const p=Gn[parseInt(h.slice(6))];if(!p)return;h=uu(p)}if(h&&h!==N.ui.whose){if(!d.id)throw new Error("Whose-result select must have an id for viewport anchoring");P7(d.id,()=>{it(h)})}return}if(f.classList.contains("code-plot-target-kind-radio")){const h=f.value;if(h!=="formula"&&h!=="raw_response")return;N.ui.codePlotTargetKind=h,Oe(x.config,N.ui),jt();return}if(f.classList.contains("code-plot-formula-select")){N.ui.codePlotTargetKind="formula",N.ui.codePlotFormulaId=f.value,Oe(x.config,N.ui),jt();return}if(f.classList.contains("code-plot-raw-response-select")){N.ui.codePlotTargetKind="raw_response",N.ui.codePlotRawResponseName=f.value,Oe(x.config,N.ui),jt();return}if(f.classList.contains("cparam-pin-checkbox")){const h=f.dataset.cparam;if(!h)return;N.ui.cparamPinned[h]=f.checked,Oe(x.config,N.ui),D7(),Yp();return}if(f.classList.contains("model-version-effort-pin-checkbox")){N.ui.modelEffortPinned=f.checked,Oe(x.config,N.ui),D7(),Yp();return}})}function AJ(){var n;const e=document.querySelector(".calc-textarea");if(e&&document.activeElement!==e){const t=e.dataset.group;t&&(e.value=((n=N.yoursRecord.raw_input)==null?void 0:n[t])??"")}}function LJ(){const e=He.container("SVAR_CARDS");e&&dW(e,N,ut(x.svar_entries().map(n=>n.decl)))}function zu(){He.render("YOURS_SAVED_LIST",Ju())}function IJ(e){const n=e.dataset.group;if(!n)return;const t=n==="sample"?e.value.split(`
`).map(r=>W$(r)).join(`
`):e.value;$m(N,x,an,n,t)}function CJ(){const e=Jn(),n=He.container("CALCULATOR_RESULTS");n&&Wu(n,x,e,N,se,_n,yn),Pi(e),Ir(e),LJ(),zu(),We==null||We.closeDisconnectedTriggers()}function TJ(e){const n=e.dataset.paramIndex,t=e.dataset.group;if(n==null||!t)return;const r=x.svar_entries().length,i=hW(N,parseInt(n),e.value,r);$m(N,x,an,t,i)}function RJ(e){AJ(),zu();const n=Jn(),t=He.container("CALCULATOR_RESULTS");t&&Wu(t,x,n,N,se,_n,yn),Pi(n),Ir(n);const r=He.container("SVAR_CARDS");r&&(ym(r,ut(x.svar_entries().map(i=>i.decl))),X$(r)),We==null||We.closeDisconnectedTriggers()}function pL(e,n){var t;if(n)return(t=hk(e.ui.whose,n))==null?void 0:t.meta}function jt(){Um(kJ)}function kJ(){const e=Jn();He.render("CALCULATOR_INPUT",Ju(e)),Pi(e),Ir(e),We==null||We.closeDisconnectedTriggers()}function Yp(){Um(()=>{const e=Jn(),n=He.container("CALCULATOR_INPUT"),t=He.container("CALCULATOR_RESULTS");n&&t&&(bW(n,t,x,e,N,se,_n,yn,Lr,qi),CA(t,pL(N,se))),Pi(e),We==null||We.closeDisconnectedTriggers()})}function it(e,n=!1){N.ui.whose=e,N.ui.resultTrialSelection=su,n||(N.ui.modelEffortSweepScope=null),(e==="yours-plainnum"||e==="yours-plaincode")&&(N.ui.lastYoursWhose=e);const t=on(pe(e).source);t==="adhoc"?N.ui.lastAdhocWhose=e:t==="metho"&&(N.ui.lastMethoWhose=e),hL(),Oe(x.config,N.ui),hn("whose"),hn("preset"),pn()}function hL(){N.ui.selectedTaskGroupPoolId=tH(N.ui.whose,N.ui.lastMethoWhose,N.ui.selectedTaskGroupPoolId,Gn)}function NJ(e){const n=iH(N.ui.whose,e,Gn);if(n!==null){n!==N.ui.whose&&it(n);return}N.ui.selectedTaskGroupPoolId=e,Oe(x.config,N.ui),pn()}function H7(e){const n=e.dataset.whose;n&&n!==N.ui.whose&&it(n)}function mL(){return{whose:N.ui.whose,lastYoursWhose:N.ui.lastYoursWhose,lastAdhocWhose:N.ui.lastAdhocWhose,lastMethoWhose:N.ui.lastMethoWhose,selectedTaskGroupPoolId:N.ui.selectedTaskGroupPoolId}}function vL(e){if(e===null)return;const n=wE(e,x.has_cparams());n!==N.ui.whose&&it(n)}function MJ(e){if(!(De(e)||F9(e,se,N.ui.inputMode))){for(const n of["sample","bounds","point"])if(F9(e,se,n)){N.ui.inputMode=n;return}}}function OJ(e,n){if(n==="plaincode"){const t=n2(x.aid).find(i=>i.codeOptionDictKey===e);if(!t)return;const r=mA(x,t.record);if(!confirm(`Delete saved estimation?
${r}`))return;Ck(x.aid,e)}else{const t=Im(x.aid).find(i=>i.plainnumOptionDictKey===e);if(!t)return;const r=hA(x,t.record)||"(default options)";if(!confirm(`Delete saved estimation?
${r}`))return;jW(x.aid,e)}zu()}function U7(e,n){if(n==="plaincode"){const t=n2(x.aid).find(r=>r.codeOptionDictKey===e);if(!t)return;N=KW(N,x,e,t.record)}else{const t=Im(x.aid).find(r=>r.plainnumOptionDictKey===e);if(!t)return;N=YW(N,x,e,t.record)}pn()}async function qJ(){const e=so,n=He.container("YOURS_CODE_INPUT"),t=n==null?void 0:n.querySelector(".code-error-area"),r=n==null?void 0:n.querySelector(".code-status");t&&(t.innerHTML=""),r&&(r.textContent="Running…");const i=n==null?void 0:n.querySelector(".code-body-input"),o=i?i.value:N.yoursCodeRecord.raw_code_input;i&&o!==N.yoursCodeRecord.raw_code_input&&Lm(N,x,an,o);const{names:u,combinations:a}=dI(x.get_cparams(),Lr),s=cj(x.svar_decls()),c=cn();try{new Function(...u,o)}catch(g){r&&(r.textContent=""),t&&(t.textContent=`Syntax error: ${g.message}`);return}Fn==null||Fn.abort();const l=new AbortController;Fn=l;let f;try{f=await Uj({source:o,cparamNames:u,combinations:a,expectedSvars:x.get_svar_bare_names(),formulaSvars:V7(_n,x.get_svar_bare_names()),hasExpectationBarrier:Object.keys(yn).length>0,paramRanges:s},{timeoutMs:c.plaincodeEvalTimeoutMs,signal:l.signal})}catch(g){if(e!==so||g.message===wh)return;if(r&&(r.textContent=""),t){const _=g.message;t.textContent=_===SA?`Timed out after ${c.plaincodeEvalTimeoutMs}ms. Possible infinite loop — check your code.`:`Worker error: ${_}`}return}finally{Fn===l&&(Fn=null)}if(e!==so)return;if(f.compileError){r&&(r.textContent=""),t&&(t.textContent=`Compile error: ${f.compileError}`);return}const d=f.wellformed.map(g=>{const _={trial_index:0,point:g.point,bounds:g.bounds,sample:g.sample};return g.lloads!==void 0&&(_.lloads=g.lloads),{cparams:g.cparams,trials:[_],precomputed:{}}}),h=N.yoursCodeRecord;h.verified_code_input=o,h.cparam_names=u,h.cparam_combos=d,h.count=1,h.timestamp=new Date().toISOString(),gi(x,an,N.codeOptionDictKey,h),N.ui.whose!=="yours-plaincode"&&(N.ui.whose="yours-plaincode",Oe(x.config,N.ui),hn("whose"),hn("preset")),N.ui.lastYoursWhose="yours-plaincode",pn();const p=He.container("YOURS_CODE_INPUT"),v=p==null?void 0:p.querySelector(".code-status"),m=p==null?void 0:p.querySelector(".code-error-area");if(v&&(v.textContent=""),m&&f.malformed.length>0){const g=f.malformed.slice(0,3).map(_=>`${JSON.stringify(_.cparams)}: ${_.error}`).join(`
`);m.textContent=`${f.wellformed.length}/${f.wellformed.length+f.malformed.length} combinations succeeded. First failures:
${g}`}}function PJ(){const{source:e}=pe(N.ui.whose);if(e==="adhoc-plaincode"){FJ();return}if(e==="adhoc-plainnum"){xJ();return}throw new Error(`Copy to Yours clicked outside an adhoc entry view (whose=${JSON.stringify(N.ui.whose)})`)}function FJ(){const e=th(N.ui.whose,se);if(!e)throw new Error(`Copy to Yours clicked outside an adhoc-plaincode view (whose=${JSON.stringify(N.ui.whose)})`);confirm(`Copy this entry's code into your Yours editor?
Your current Yours-plaincode code will be overwritten.`)&&(Lm(N,x,an,e.raw_code_input),it("yours-plaincode"))}const DJ={point:"point",bounds:"bounds",sample:"distribution"};function xJ(){const e=je(N.ui.whose,se),n=e==null?void 0:e.trials[0];if(!n)throw new Error(`Copy to Yours clicked without a viewable adhoc-plainnum trial (whose=${JSON.stringify(N.ui.whose)})`);const t=x.svar_entries().map(u=>u.bareName),r=sE(n,t);if(r.length===0)throw new Error("Copy to Yours clicked for an entry with no complete response group");const i=r.map(u=>DJ[u]).join(" + ");if(confirm(`Copy this entry's ${i} estimates into your Yours inputs?
Your current Yours ${i} input${r.length>1?"s":""} will be overwritten.`)){for(const u of r)$m(N,x,an,u,gk(n,u,t));r.includes(N.ui.inputMode)||(N.ui.inputMode=r.includes("sample")?"sample":r.includes("bounds")?"bounds":"point"),it("yours-plainnum")}}function BJ(e){const n=e.dataset.lloadsSpec;if(n===void 0)throw new Error("Joint-dependence Copy to Yours button carries no specification");const t=JSON.parse(n),r=_A(N,x,_n,yn);if(r===null)throw new Error("Joint-dependence Copy to Yours clicked on a jprob with no joint-dependence box");const i=bi(t,r.eligibleSvars);if(i!==null)throw new Error(`Disclosed joint-dependence specification is not valid here: ${i}`);confirm(`Copy this joint-dependence specification into your Yours inputs?
Your current Yours latents and loadings will be overwritten.`)&&(Am(N,x,an,AE(t,r.eligibleSvars),r.eligibleSvars,r.degenerateSvars),N.ui.inputMode="sample",N.ui.jointDependenceEditorOpen=!0,it("yours-plainnum"))}function HJ(e){const n=e.dataset.isym,t=e.dataset.type;if(!n||!t)return;e.classList.toggle("active");const r=e.closest(".isym-card");if(!r)return;const i=r.querySelector(`.examples.${t}`);i&&i.classList.toggle("visible"),N.ui.exampleFoldState=Ok(N.ui.exampleFoldState,n,t),Oe(x.config,N.ui)}function UJ(e){const n=e.dataset.framingAnchor,t=e.dataset.framingId;if(!n||!t)return;e.classList.toggle("active");const r=e.closest(".framingnote");r&&(r.classList.toggle("visible"),N.ui.framingFoldState[n]||(N.ui.framingFoldState[n]={}),N.ui.framingFoldState[n][t]=r.classList.contains("visible"),Oe(x.config,N.ui))}function GJ(){const e=Gk(),n=JSON.stringify(e,null,2),t=new Blob([n],{type:"application/json"}),r=URL.createObjectURL(t),i=document.createElement("a"),o=new Date().toISOString().slice(0,10);i.href=r,i.download=`${x.config.localStorage_prefix}-state-${o}.json`,i.click(),URL.revokeObjectURL(r)}function VJ(){const e=document.createElement("input");e.type="file",e.accept=".json",e.addEventListener("change",()=>{var t;const n=(t=e.files)==null?void 0:t[0];n&&n.text().then(r=>{let i;try{i=JSON.parse(r)}catch(o){alert(`Invalid JSON: ${o}`);return}if(!i||typeof i!="object"){alert("Expected a JSON object");return}Vk(i),window.location.reload()})}),e.click()}function WJ(e){const n=document.querySelectorAll(".examples"),t=document.querySelectorAll(".ex-btn");switch(e){case"open":n.forEach(r=>r.classList.add("visible")),t.forEach(r=>r.classList.add("active"));break;case"close":n.forEach(r=>r.classList.remove("visible")),t.forEach(r=>r.classList.remove("active"));break;case"peek":n.forEach(r=>{r.setAttribute("data-was-visible",r.classList.contains("visible")?"1":"0"),r.classList.add("visible")}),t.forEach(r=>{r.setAttribute("data-was-active",r.classList.contains("active")?"1":"0"),r.classList.add("active")});break;case"unpeek":n.forEach(r=>{r.getAttribute("data-was-visible")==="0"&&r.classList.remove("visible")}),t.forEach(r=>{r.getAttribute("data-was-active")==="0"&&r.classList.remove("active")});break}}export{KJ as initApp,B7 as swapJprob};
